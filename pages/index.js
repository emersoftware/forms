import React, { useState } from 'react';
import Head from 'next/head';
export default function Home() {
  //State
  const [formContent, setFormContent] = useState([]);
  const [option, setOption] = useState("");
  //Methods
  //Add new element
  const addFormField = () => {
    const field = {
      "id": 'field_' + formContent.length, //cambiar por otro id
      "title": "untitled",
      "label": "untitled",
      "type": "text",
      "options": [],
    }
    setFormContent([...formContent, field]);
  }

  const deleteField = (id) => {
    const formField = [...formContent];
    const index = formField.findIndex(f => f.id === id);
    if(index > -1) {
      formField.splice(index, 1);
    }
    setFormContent(formField);
  }

  const editFieldType = (fieldId, fieldType) => {
    const formField = [...formContent];
    const index = formField.findIndex((field) => field.id === fieldId);
    if (index > -1) {
      formField[index].type = fieldType;
    }
    setFormContent(formField);
  }

  const editFieldTitle = (fieldId, fieldTitle) => {
    const formFields = [...formContent];
    const index = formFields.findIndex(f => f.id === fieldId);
    if (index > -1) {
      formFields[index].title = fieldTitle;
    }
    setFormContent(formFields);
  }

  const addOption = (fieldId, option) => {
    const formField = [...formContent];
    const index = formField.findIndex(f => f.id === fieldId);
    if (index > -1) {
      if (option && option != "") {
          formField[index].options.push(option);
      };
      setFormContent(formField);
    }
  }

  const deleteOption = (fieldId, option) => {
    const formField = [...formContent];
    const index = formField.findIndex(f => f.id === fieldId);
    if (index > -1) {
      const optionIndex = formField[index].options.findIndex(o => o === option);
      if (optionIndex > -1) {
        formField[index].options.splice(optionIndex, 1);
      }
    }
    setFormContent(formField);
  }

  return (
    <>
      <Head 
        title="Adestos Forms"
        description="Crea tu formulario"  
      />
      <div className="container mx-auto px-4 w-2/4 h-full">
        <div className="flex flex-col w-6/12 space-x-7 my-7">
          <h1 className="text-4xl font-bold">Adestos-Forms</h1>
          <h2 className="text-2xl font-bold">Crea tu formulario</h2>
        </div>
        <div className="bg-white shadow-lg rounded-md p-5 my-12">
          {
            formContent.map((field) => {
              return (
                <>
                <div className="flex justify-between items-center space-y-2">
                  <div key={field.id} className="block text-sm font-medium">
                    <input type="text" value={field.title} onChange={(e) => editFieldTitle(field.id, e.target.value)} />
                  </div>
                  <div>
                    <select onChange={(e) => editFieldType(field.id, e.target.value)}>
                      <option value="text">Text</option>
                      <option value="number">Number</option>
                      <option value="date">Date</option>
                      <option value="checkbox">Checkbox</option>
                      <option value="radio">Radio</option>
                      <option value="select">Select</option>
                    </select>
                  </div>
                </div>
                <div className="my-2">
                  {
                    field.type === "text" && <input type="text" placeholder="Este es el input de texto" readOnly/>
                  }
                  {
                    field.type === "number" && <input type="number" placeholder="" readOnly/>
                  }
                  {
                    field.type === "date" && <input type="date" placeholder="" readOnly/>
                  }
                  {
                    field.type === "checkbox" && 
                    <div className="flex flex-col space-y-2">
                      {
                        field.options.map((option) => {
                          return (
                            <div className="flex justify-between items-center">
                              <div className="space-x-2">
                                <input type="checkbox" id={option} value={option} name={field.title}/>
                                <label forHtml={option}>{option}</label>
                              </div>
                              <button className="text-red-600 hover:text-red-900" onClick={() => deleteOption(field.id, option)}>Eliminar opcion</button>
                            </div> 
                          )
                        })
                      }
                      <div className="flex justify-between items-center">
                        <input type="text" value={option} onChange={(e) => setOption(e.target.value)} />
                        <button className="text-blue-900 hover:text-blue-600" onClick={() => addOption(field.id, option)}>Añadir opción</button>
                      </div>
                    </div>
                  }
                  {
                    field.type === "radio" && 
                    <div className='flex flex-col space-y-2'>
                      {
                        field.options.map((option) => {
                          return (
                            <div className="flex justify-between items-center">
                              <div className="space-x-2">
                                <input type="radio" id={option} value={option} name={field.title}/>
                                <label forHtml={option}>{option}</label>
                              </div>
                              <button className="text-red-600 hover:text-red-900" onClick={() => deleteOption(field.id, option)}>Eliminar opcion</button>
                            </div>
                          )
                        }) 
                      }
                      <div className="flex justify-between items-center">
                        <input type="text" value={option} onChange={(e) => setOption(e.target.value)} />
                        <button className="text-blue-900 hover:text-blue-600" onClick={() => addOption(field.id, option)}>Añadir opción</button>
                      </div>
                    </div>
                  }    
                  
                  {
                    field.type === "select" && 
                    <div className="flex flex-col space-y-2">
                      <select>
                        {
                          field.options.map((option) => {
                            return (
                              <option value={option}>{option}</option>
                            )
                          })
                        }
                      </select>
                      {
                        field.options.map((option) => {
                          return (
                            <div className="flex justify-between items-center">
                              <h1>{option}</h1>
                              <button className="text-red-600 hover:text-red-900" onClick={() => deleteOption(field.id, option)}>Eliminar opcion</button>
                            </div>
                          )
                        })
                      }
                      <div className="flex justify-between items-center">
                        <input type="text" value={option} onChange={(e) => setOption(e.target.value)} />
                        <button className="text-blue-900 hover:text-blue-600" onClick={() => addOption(field.id, option)}>Añadir opción</button>
                      </div>
                    </div>
                  }
                </div>
                <div className="flex justify-end">
                  <button className="bg-red-700 hover:bg-red-200 text-neutral-100 rounded-md px-3 py-1" onClick={() => deleteField(field.id)}>Eliminar campo</button>
                </div>
                </>
              )
            })
          }
          <div className="relative w-full p-4">
            <div className="absolute inset-x-0 bottom-0 h-12 flex justify-center">
              <button onClick= {() => addFormField()} className='inline-flex bg-gray-800 hover:bg-gray-200 items-center px-3 py-1 text-slate-50 rounded-md'>Añadir campo</button>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}