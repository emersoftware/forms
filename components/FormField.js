import React from 'react';

export default function FormField({ 
  field, 
  option,
  onTypeChange, 
  onTitleChange, 
  onDelete, 
  onAddOption,
  onDeleteOption,
  setOption
}) {
  return (
    <>
      <div className="flex justify-between items-center space-y-2">
        <div key={field.id} className="block text-sm font-medium">
          <input 
            type="text" 
            value={field.title} 
            onChange={(e) => onTitleChange(field.id, e.target.value)} 
          />
        </div>
        <div>
          <select onChange={(e) => onTypeChange(field.id, e.target.value)}>
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
        {field.type === "text" && <input type="text" placeholder="Este es el input de texto" readOnly/>}
        {field.type === "number" && <input type="number" placeholder="" readOnly/>}
        {field.type === "date" && <input type="date" placeholder="" readOnly/>}
        
        {(field.type === "checkbox" || field.type === "radio") && (
          <div className="flex flex-col space-y-2">
            {field.options.map((opt) => (
              <div key={opt} className="flex justify-between items-center">
                <div className="space-x-2">
                  <input 
                    type={field.type} 
                    id={opt} 
                    value={opt} 
                    name={field.title}
                  />
                  <label htmlFor={opt}>{opt}</label>
                </div>
                <button 
                  className="text-red-600 hover:text-red-900" 
                  onClick={() => onDeleteOption(field.id, opt)}
                >
                  Eliminar opcion
                </button>
              </div>
            ))}
            <div className="flex justify-between items-center">
              <input 
                type="text" 
                value={option} 
                onChange={(e) => setOption(e.target.value)} 
              />
              <button 
                className="text-blue-900 hover:text-blue-600" 
                onClick={() => onAddOption(field.id, option)}
              >
                Añadir opción
              </button>
            </div>
          </div>
        )}

        {field.type === "select" && (
          <div className="flex flex-col space-y-2">
            <select>
              {field.options.map((opt) => (
                <option key={opt} value={opt}>{opt}</option>
              ))}
            </select>
            {field.options.map((opt) => (
              <div key={opt} className="flex justify-between items-center">
                <h1>{opt}</h1>
                <button 
                  className="text-red-600 hover:text-red-900" 
                  onClick={() => onDeleteOption(field.id, opt)}
                >
                  Eliminar opcion
                </button>
              </div>
            ))}
            <div className="flex justify-between items-center">
              <input 
                type="text" 
                value={option} 
                onChange={(e) => setOption(e.target.value)} 
              />
              <button 
                className="text-blue-900 hover:text-blue-600" 
                onClick={() => onAddOption(field.id, option)}
              >
                Añadir opción
              </button>
            </div>
          </div>
        )}
      </div>
      <div className="flex justify-end">
        <button 
          className="bg-red-700 hover:bg-red-200 text-neutral-100 rounded-md px-3 py-1" 
          onClick={() => onDelete(field.id)}
        >
          Eliminar campo
        </button>
      </div>
    </>
  );
} 