import logo from './logo.svg';
import './App.css';
import { useState } from 'react';


function TeamIDButton() {
  return (
    <button className='button1'>
      Team ID
    </button>
  );
}

function MissionTimeButton() {
  return (
    <button className='button2'>
      Mission Time
    </button>
  );
}

function ModeButton() {
  return (
    <div>
      <button className="mode-button">Simulation Mode</button>
    <button className="mode-button">Flight Mode</button>
    </div>
    

  );
} 


function PacketsButton() {
  return (
    <button className='button3'>
      Packets
    </button>
  );
}

function WarningBox(){
  return (
    <div className="warning-wrapper">
        <div className="warning-box">
          <p className="warning-text">⚠ Warning: This is a test warning message.</p>
        </div>
      </div>
  );
}

function VisualFeed(){
  return(<div className='visual'>
    <div className='feed'>
      <h3 className='text_on_feed'>Visual Feed</h3>
    </div>
  </div>);
}
function GpsStat(){
  return(<div className='stat_box'>
    <div className='gps_box'>
      <h3 className='text_on_stat'>GPS</h3>
      <p className='gps_text'>Lat: 0.0000</p>
      <p className='gps_text'>Lon: 0.0000</p>
      <p className='gps_text'>Alt: 0.00 m</p>
    </div>
  </div>);
}

function CurrentStage() {
  const stages = [
    'LAUNCH PAD',
    'ASCENT',
    'APOGEE',
    'PROBE RELEASED',
    'DESCENT',
    'LANDED'
  ];

  const [currentStage, setCurrentStage] = useState(0); // Index of current stage

  return (
    <div className="stage-area">
      <div className="stage-title">CURRENT MISSION STAGE</div>
      <div className="stage-box">
        {stages.map((stage, index) => {
          let className = 'stage-button';
          if (index < currentStage) className += ' completed';
          else if (index === currentStage) className += ' active';

          return (
            <button key={index} className={className}>
              {stage}
            </button>
          );
        })}
      </div>

    </div>
  );
}

function App() {
  return (
    <>
      <div >
        <TeamIDButton />
        <MissionTimeButton />
        <PacketsButton />
        <WarningBox />
      </div>
      <div>
        <ModeButton />
      </div>
      <div>
        <VisualFeed />
      </div>
      <div>
        <GpsStat />
      </div>
      <div>
        <CurrentStage />
      </div>
    </>
  );
}

export default App;
