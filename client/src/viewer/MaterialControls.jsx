import { useState } from 'react';
import './MaterialControls.css';

export default function MaterialControls({ setColor, setMaterial }) {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedColor, setSelectedColor] = useState('#111111');
  const [selectedMaterial, setSelectedMaterial] = useState('cotton');
  const [metallic, setMetallic] = useState(0.5);
  const [roughness, setRoughness] = useState(0.5);

  const colors = [
    { name: 'Black', value: '#111111' },
    { name: 'White', value: '#ffffff' },
    { name: 'Navy', value: '#1d4ed8' },
    { name: 'Red', value: '#b91c1c' },
    { name: 'Emerald', value: '#10b981' },
    { name: 'Pink', value: '#ec4899' },
    { name: 'Purple', value: '#8b5cf6' },
    { name: 'Amber', value: '#f59e0b' },
    { name: 'Gray', value: '#6b7280' },
    { name: 'Cyan', value: '#06b6d4' }
  ];

  const materials = [
    { name: 'Cotton', value: 'cotton' },
    { name: 'Leather', value: 'leather' },
    { name: 'Silk', value: 'silk' },
    { name: 'Denim', value: 'denim' }
  ];

  const handleColorSelect = (color) => {
    setSelectedColor(color);
    setColor(color);
  };

  const handleMaterialSelect = (material) => {
    setSelectedMaterial(material);
    setMaterial(material);
  };

  const applyPreset = (preset) => {
    switch (preset) {
      case 'casual':
        handleColorSelect('#1d4ed8');
        handleMaterialSelect('cotton');
        setRoughness(0.8);
        setMetallic(0.1);
        break;
      case 'formal':
        handleColorSelect('#111111');
        handleMaterialSelect('leather');
        setRoughness(0.2);
        setMetallic(0.3);
        break;
      case 'elegant':
        handleColorSelect('#8b5cf6');
        handleMaterialSelect('silk');
        setRoughness(0.1);
        setMetallic(0.7);
        break;
      case 'vintage':
        handleColorSelect('#f59e0b');
        handleMaterialSelect('leather');
        setRoughness(0.6);
        setMetallic(0.4);
        break;
    }
  };

  return (
    <div className={`material-controls ${isOpen ? 'open' : ''}`}>
      <button 
        className="controls-toggle"
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? 'Hide Controls' : 'Material Controls'}
      </button>

      <div className="controls-panel">
        <h3>Customize Appearance</h3>

        <div className="control-group">
          <label>Color Palette</label>
          <div className="color-grid">
            {colors.map((color) => (
              <div
                key={color.name}
                className={`color-swatch ${selectedColor === color.value ? 'active' : ''}`}
                style={{ backgroundColor: color.value }}
                onClick={() => handleColorSelect(color.value)}
                title={color.name}
              />
            ))}
          </div>
        </div>

        <div className="control-group">
          <label>Material Type</label>
          <div className="preset-buttons">
            {materials.map((material) => (
              <button
                key={material.name}
                className={selectedMaterial === material.value ? 'active' : ''}
                onClick={() => handleMaterialSelect(material.value)}
              >
                {material.name}
              </button>
            ))}
          </div>
        </div>

        <div className="control-group">
          <label>Metallic ({Math.round(metallic * 100)}%)</label>
          <input
            type="range"
            className="slider"
            min="0"
            max="1"
            step="0.1"
            value={metallic}
            onChange={(e) => setMetallic(parseFloat(e.target.value))}
          />
        </div>

        <div className="control-group">
          <label>Roughness ({Math.round(roughness * 100)}%)</label>
          <input
            type="range"
            className="slider"
            min="0"
            max="1"
            step="0.1"
            value={roughness}
            onChange={(e) => setRoughness(parseFloat(e.target.value))}
          />
        </div>

        <div className="control-group">
          <label>Style Presets</label>
          <div className="preset-buttons">
            <button onClick={() => applyPreset('casual')}>Casual</button>
            <button onClick={() => applyPreset('formal')}>Formal</button>
            <button onClick={() => applyPreset('elegant')}>Elegant</button>
            <button onClick={() => applyPreset('vintage')}>Vintage</button>
          </div>
        </div>
      </div>
    </div>
  );
}
