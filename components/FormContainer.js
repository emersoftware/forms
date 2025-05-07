import React, { useState } from 'react';
import FormField from './FormField';
import FormPreview from './FormPreview';

export default function FormContainer() {
  const [formContent, setFormContent] = useState([]);
  const [option, setOption] = useState("");
  const [showPreview, setShowPreview] = useState(false);

  const addFormField = () => {
    const field = {
      "id": 'field_' + formContent.length,
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
    if (index > -1 && option && option !== "") {
      formField[index].options.push(option);
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

  const togglePreview = () => {
    setShowPreview(!showPreview);
  };

  return (
    <div className="flex flex-col md:flex-row gap-6 w-full">
      <div className={`${showPreview ? 'md:w-1/2' : 'w-full'}`}>
        <div className="bg-white shadow-lg rounded-md p-5 my-12">
          <div className="flex justify-between mb-4">
            <h3 className="text-xl font-bold">Form Editor</h3>
            <button 
              onClick={togglePreview} 
              className='inline-flex bg-indigo-600 hover:bg-indigo-700 items-center px-3 py-1 text-white rounded-md'
            >
              {showPreview ? 'Hide Preview' : 'Show Preview'}
            </button>
          </div>
          
          {formContent.map((field) => (
            <FormField
              key={field.id}
              field={field}
              option={option}
              onTypeChange={editFieldType}
              onTitleChange={editFieldTitle}
              onDelete={deleteField}
              onAddOption={addOption}
              onDeleteOption={deleteOption}
              setOption={setOption}
            />
          ))}
          <div className="relative w-full p-4">
            <div className="absolute inset-x-0 bottom-0 h-12 flex justify-center">
              <button 
                onClick={addFormField} 
                className='inline-flex bg-gray-800 hover:bg-gray-200 items-center px-3 py-1 text-slate-50 rounded-md'
              >
                Add field
              </button>
            </div>
          </div>
        </div>
      </div>
      
      {showPreview && (
        <div className="md:w-1/2">
          <FormPreview formContent={formContent} />
        </div>
      )}
    </div>
  );
} 