import Head from 'next/head'
import Image from 'next/image'
import React, { useState } from 'react';

export default function Home() {
  const [formContent, setFormContent] = useState([]);
  const [onEdit, setOnEdit] = useState(false);
  const [textField, setTextField] = useState("");
  const addFormBlock = () => {
    const block = {
      "name": 'block_' + formContent.length,
      "label": "untitled",
      "type": "text",
      "list": [],
    }
    setFormContent([...formContent, block]);
  }
  const editField = (fieldName, fieldLabel) => {
    const formField = [...formContent];
    const index = formField.findIndex((field) => field.name === fieldName);
    if(index > -1) {
      formField[index].label = fieldLabel;
    }
    setFormContent(formField);
  }

  const editFieldType = (fieldName, fieldLabel) => {
    const formField = [...formContent];
    const index = formField.findIndex((field) => field.name === fieldName);
    if(index > -1) {
      formField[index].type = fieldLabel;
    }
    setFormContent(formField);
  }

  const addFieldOption = (fieldName, option) => {
    const formField = [...formContent];
    const index = formField.findIndex(f => f.name === fieldName);
    if(index > -1) {
      if(option && option != ""){
        formField[index].list.push(option);
        };
        setFormContent(formField);
        setTextField("");
      }
    
    
  }

  return (
    
    <div className="container mx-auto px-4 h-screen">
      <div className="flex flex-col w-full space-x-7 my-7">
        <h1 className="text-4xl font-bold">form builder</h1>
        <h2 className="text-2xl font-serif">build your form</h2>
      </div>
      <div className="bg-white shadow-lg rounded-md p-5 my-12">
        {
          formContent.map((field, index) => {
            return (
              <>
              <div>
              <div className='flex justify-between items-center space-y-2'>
                <div key={field.name} className="block text-sm font-medium text-slate-500 capitalize">
                  {
                    onEdit ?
                    <input type="text" value={field.label} onChange={(e)=>editField(field.name, e.target.value)} onBlur={() => setOnEdit(false)}/>
                    :
                    <label onClick={()=>setOnEdit(true)}>{field.label}</label>
                    
                  }
                </div>
                <div>
                  <select onChange={(e)=>editFieldType(field.name, e.target.value)}>
                    <option value="text">text</option>
                    <option value="textarea">textarea</option>
                    <option value="checkbox">checkbox</option>
                    <option value="radio">radio</option>
                    <option value="select">select</option>
                  </select>
                </div>
              </div>
              </div>
              <div className='my-2'>
                {
                  field.type === 'text' && <input type="text" className='px-5 shadow-sm'placeholder={field.type}/>
                }
                {
                  field.type === 'textarea' && <textarea rows={4} className='px-5 shadow-sm'placeholder={field.type}/>
                }
                {
                  field.type === 'checkbox' && 
                   <>
                    {
                      field.list.map((item) => {
                        return (
                          <div>
                            <input type="checkbox" className='px-5 shadow-sm'placeholder={field.type}/>
                            <label>{item}</label>
                          </div>
                        )
                      })
                    }
                    </>
                }
                {
                  field.type === 'radio' &&
                  <>
                    { 
                      field.list.map((item) => {
                        return (
                          <div>
                            <input type="radio" className='shadow-sm'placeholder={field.type}/>
                            <label>{item}</label>
                          </div>  
                        )
                      })
                    }
                  </>
                }
                {
                  
                  field.type === 'select' &&
                  <div className='my-2 flex flex-col space-y-2'>
                    <select>
                      {
                        field.list.map((item) => {
                          return (
                            <option value={item}>{item}</option>
                          )
                        })
                      }
                    </select>
                    <div className='flex justify-between items-center'>
                      <input onChange={(e)=>setTextField(e.target.value)} type="text" className='px-5 shadow-sm'placeholder="añade una opcion" value={textField}/>                    
                      <button onClick={()=>addFieldOption(field.name,textField)}className='bg-blue-500 text-white px-5 py-2 rounded-md'>añadir</button>  
                    </div>
                  </div>         
                }
              </div>
              </>
            )
          })
        }
        <div className="relative w-full p-4">
          <div className="absolute inset-x-0 bottom-0 h-12 flex justify-center">
            <button onClick= {() => addFormBlock()} className='inline-flex bg-gray-800 hover:bg-gray-200 items-center p-3 text-sm text-slate-50 rounded-md'> añadir bloque </button>
          </div>
        </div>
      </div>
    </div>
  )
}
