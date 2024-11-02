import React, { useState } from 'react';

const PlayerForm = () => {
  const [playerData, setPlayerData] = useState({
    name: '',
    position: '',
    age: '',
    height: '',
    weight: '',
    team: '',
    // Scouting metrics
    pace: '',
    shooting: '',
    passing: '',
    dribbling: '',
    defending: '',
    physical: '',
    // Additional notes
    strengths: '',
    weaknesses: '',
    potential: ''
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Add API call to save player data
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>New Player Scouting Report</h2>
      
      <div className="form-group">
        <label>Player Name</label>
        <input
          type="text"
          value={playerData.name}
          onChange={(e) => setPlayerData({...playerData, name: e.target.value})}
        />
      </div>

      {/* Add more form fields for other player attributes */}
      
      <button type="submit">Save Report</button>
    </form>
  );
};

export default PlayerForm; 