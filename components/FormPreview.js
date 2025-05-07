import React from 'react';

export default function FormPreview({ formContent }) {
  return (
    <div className="bg-white shadow-lg rounded-md p-5 my-12">
      <h3 className="text-xl font-bold mb-4">Form Preview</h3>
      <form>
        {formContent.map((field) => (
          <div key={field.id} className="mb-4">
            <label htmlFor={field.id} className="block text-sm font-medium mb-2">
              {field.title}
            </label>
            
            {field.type === "text" && (
              <input 
                type="text" 
                id={field.id} 
                name={field.id} 
                className="w-full p-2 border rounded-md"
              />
            )}
            
            {field.type === "number" && (
              <input 
                type="number" 
                id={field.id} 
                name={field.id} 
                className="w-full p-2 border rounded-md"
              />
            )}
            
            {field.type === "date" && (
              <input 
                type="date" 
                id={field.id} 
                name={field.id} 
                className="w-full p-2 border rounded-md"
              />
            )}
            
            {field.type === "checkbox" && (
              <div className="space-y-2">
                {field.options.map((opt) => (
                  <div key={opt} className="flex items-center">
                    <input 
                      type="checkbox" 
                      id={`${field.id}_${opt}`} 
                      name={field.id} 
                      value={opt} 
                      className="mr-2"
                    />
                    <label htmlFor={`${field.id}_${opt}`}>{opt}</label>
                  </div>
                ))}
              </div>
            )}
            
            {field.type === "radio" && (
              <div className="space-y-2">
                {field.options.map((opt) => (
                  <div key={opt} className="flex items-center">
                    <input 
                      type="radio" 
                      id={`${field.id}_${opt}`} 
                      name={field.id} 
                      value={opt} 
                      className="mr-2"
                    />
                    <label htmlFor={`${field.id}_${opt}`}>{opt}</label>
                  </div>
                ))}
              </div>
            )}
            
            {field.type === "select" && (
              <select 
                id={field.id} 
                name={field.id} 
                className="w-full p-2 border rounded-md"
              >
                <option value="">Select an option</option>
                {field.options.map((opt) => (
                  <option key={opt} value={opt}>{opt}</option>
                ))}
              </select>
            )}
          </div>
        ))}
        
        {formContent.length > 0 && (
          <button 
            type="submit" 
            className="mt-4 bg-indigo-600 hover:bg-indigo-700 text-white px-4 py-2 rounded-md"
            onClick={(e) => e.preventDefault()}
          >
            Submit
          </button>
        )}
      </form>
    </div>
  );
}