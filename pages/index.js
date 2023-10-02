import React, { useState, useEffect } from 'react';
import styles from '../styles/Home.module.css';

export default function Home() {
  const [activeHeading, setActiveHeading] = useState('');

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const sectionPositions = {
        'colony-pcr': 0,
        'notes': 1500,
        'safety': 3000,
        'modeling': 4500,
        'measurement': 6000,
        'parts': 7500,
        'result': 9000,
        // Add more sections if u need more or just change name and height of each headings
      };

      let newActiveHeading = '';
      for (const [section, position] of Object.entries(sectionPositions)) {
        if (scrollPosition >= position) {
          newActiveHeading = section;
        } else {
          break;
        }
      }

      setActiveHeading(newActiveHeading);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleHeadingClick = (id) => {
    if (id === 'colony-pcr') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      setActiveHeading(id);
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.sidebar}>
        <h2 className={styles.heading} style={{ marginLeft: '0px', marginTop: '150px' }}>
          Contents
        </h2>
        <div className="louis-george-font" style={{ fontSize: '25px', marginLeft: '30px', marginTop: '15px' }}>
          <p
            className={`subheading ${activeHeading === 'colony-pcr' ? 'active with-orange-box' : ''}`}
            onClick={() => handleHeadingClick('colony-pcr')}
          >
            COLONY PCR
          </p>
          <p
            className={`subheading ${activeHeading === 'notes' ? 'active with-orange-box' : ''}`}
            onClick={() => handleHeadingClick('notes')}
          >
            NOTES
          </p>
          <p
            className={`subheading ${activeHeading === 'safety' ? 'active with-orange-box' : ''}`}
            onClick={() => handleHeadingClick('safety')}
          >
            SAFETY
          </p>
          <p
            className={`subheading ${activeHeading === 'modeling' ? 'active with-orange-box' : ''}`}
            onClick={() => handleHeadingClick('modeling')}
          >
            MODELING
          </p>
          <p
            className={`subheading ${activeHeading === 'measurement' ? 'active with-orange-box' : ''}`}
            onClick={() => handleHeadingClick('measurement')}
          >
            MEASUREMENT
          </p>
          <p
            className={`subheading ${activeHeading === 'parts' ? 'active with-orange-box' : ''}`}
            onClick={() => handleHeadingClick('parts')}
          >
            PARTS
          </p>
          <p
            className={`subheading ${activeHeading === 'result' ? 'active with-orange-box' : ''}`}
            onClick={() => handleHeadingClick('result')}
          >
            RESULT
          </p>
          {/* add here too if u add more headings */}
        </div>
      </div>
      <div className={styles.content}>
        <h1 id="colony-pcr" style={{ fontSize: '75px', marginLeft: '255px', marginTop: '-25px', position: 'absolute', fontFamily: 'Cocomat Pro Medium' }}>Colony PCR</h1>
        <p style={{ fontWeight: '300', marginLeft: '795px', fontSize: '30px', fontFamily: "'Louis George Cafe Light', sans-serif", overflow: 'hidden', position: 'absolute', marginTop: '120px' }}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla quis dui nec odio accumsan facilisis. Vivamus malesuada varius massa, in scelerisque justo volutpat sit amet. Proin eu urna justo. Maecenas at quam eget risus cursus tincidunt. Nunc dignissim sapien id felis finibus, at mattis quam vestibulum.
          </p>
          <p style={{ fontWeight: '300', marginLeft: '275px', fontSize: '30px', fontFamily: "'Louis George Cafe Light', sans-serif", overflow: 'hidden', position: 'absolute', marginTop: '1250px' }}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla quis dui nec odio accumsan facilisis. Vivamus malesuada varius massa, in scelerisque justo volutpat sit amet. Proin eu urna justo. Maecenas at quam eget risus cursus tincidunt. Nunc dignissim sapien id felis finibus, at mattis quam vestibulum.
        </p>
        <h1 id="notes" style={{ fontSize: '75px', marginLeft: '255px', marginTop: '1500px', position: 'absolute', fontFamily: 'Cocomat Pro Medium' }}>Notes</h1>
        <p style={{ fontWeight: '300', marginLeft: '275px', fontSize: '30px', fontFamily: "'Louis George Cafe Light', sans-serif", overflow: 'hidden', position: 'absolute', marginTop: '1750px' }}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla quis dui nec odio accumsan facilisis. Vivamus malesuada varius massa, in scelerisque justo volutpat sit amet. Proin eu urna justo. Maecenas at quam eget risus cursus tincidunt. Nunc dignissim sapien id felis finibus, at mattis quam vestibulum.
        </p>
        <h1 id="safety" style={{ fontSize: '75px', marginLeft: '255px', marginTop: '3000px', position: 'absolute', fontFamily: 'Cocomat Pro Medium' }}>Safety</h1>
        <p style={{ fontWeight: '300', marginLeft: '275px', fontSize: '30px', fontFamily: "'Louis George Cafe Light', sans-serif", overflow: 'hidden', position: 'absolute', marginTop: '3250px' }}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla quis dui nec odio accumsan facilisis. Vivamus malesuada varius massa, in scelerisque justo volutpat sit amet. Proin eu urna justo. Maecenas at quam eget risus cursus tincidunt. Nunc dignissim sapien id felis finibus, at mattis quam vestibulum.
        </p>
        <h1 id="modeling" style={{ fontSize: '75px', marginLeft: '255px', marginTop: '4500px', position: 'absolute', fontFamily: 'Cocomat Pro Medium' }}>Modeling</h1>
        <p style={{ fontWeight: '300', marginLeft: '275px', fontSize: '30px', fontFamily: "'Louis George Cafe Light', sans-serif", overflow: 'hidden', position: 'absolute', marginTop: '4750px' }}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla quis dui nec odio accumsan facilisis. Vivamus malesuada varius massa, in scelerisque justo volutpat sit amet. Proin eu urna justo. Maecenas at quam eget risus cursus tincidunt. Nunc dignissim sapien id felis finibus, at mattis quam vestibulum.
        </p>
        <h1 id="measurement" style={{ fontSize: '75px', marginLeft: '255px', marginTop: '6000px', position: 'absolute', fontFamily: 'Cocomat Pro Medium' }}>Measurement</h1>
        <p style={{ fontWeight: '300', marginLeft: '275px', fontSize: '30px', fontFamily: "'Louis George Cafe Light', sans-serif", overflow: 'hidden', position: 'absolute', marginTop: '6250px' }}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla quis dui nec odio accumsan facilisis. Vivamus malesuada varius massa, in scelerisque justo volutpat sit amet. Proin eu urna justo. Maecenas at quam eget risus cursus tincidunt. Nunc dignissim sapien id felis finibus, at mattis quam vestibulum.
        </p>
        <h1 id="parts" style={{ fontSize: '75px', marginLeft: '255px', marginTop: '7500px', position: 'absolute', fontFamily: 'Cocomat Pro Medium' }}>Parts</h1>
        <p style={{ fontWeight: '300', marginLeft: '275px', fontSize: '30px', fontFamily: "'Louis George Cafe Light', sans-serif", overflow: 'hidden', position: 'absolute', marginTop: '7750px' }}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla quis dui nec odio accumsan facilisis. Vivamus malesuada varius massa, in scelerisque justo volutpat sit amet. Proin eu urna justo. Maecenas at quam eget risus cursus tincidunt. Nunc dignissim sapien id felis finibus, at mattis quam vestibulum.
        </p>
        <h1 id="result" style={{ fontSize: '75px', marginLeft: '255px', marginTop: '9000px', position: 'absolute', fontFamily: 'Cocomat Pro Medium' }}>Result</h1>
        <p style={{ fontWeight: '300', marginLeft: '275px', fontSize: '30px', fontFamily: "'Louis George Cafe Light', sans-serif", overflow: 'hidden', position: 'absolute', marginTop: '9250px' }}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla quis dui nec odio accumsan facilisis. Vivamus malesuada varius massa, in scelerisque justo volutpat sit amet. Proin eu urna justo. Maecenas at quam eget risus cursus tincidunt. Nunc dignissim sapien id felis finibus, at mattis quam vestibulum.
        </p>
        {/* here too */}
        
        {/* images */}
        <div className={styles.imageOverlay}>
          <img
            src="https://static.igem.wiki/teams/4629/wiki/screenshot-2023-09-29-at-9-13-41-pm.jpg"
            alt="Additional Image"
            width="450"
            height="auto"
            style={{
              zIndex: '1',
              marginLeft: '255px',
              position: 'absolute',
              marginTop: '100px',
              maxWidth: '100%',
              height: 'auto',
            }}
          />
        </div>

        <img
          src="https://static.igem.wiki/teams/4629/wiki/yellow-blob.svg"
          alt="Colony PCR Screenshot"
          width="700"
          height="auto"
          style={{
            position: 'absolute',
            maxWidth: '100%',
            height: 'auto',
            marginLeft: '155px',
            transform: 'rotate(450deg)',
            marginTop: '-30px',
            overflow: 'auto',
          }}
        />

        <img
          src="https://static.igem.wiki/teams/4629/wiki/teal-blob.svg"
          alt="Teal Blob"
          width="750"
          height="auto"
          style={{
            marginLeft: '155px',
            position: 'absolute',
            marginTop: '550px',
            maxWidth: '100%',
            height: 'auto',
            overflow: 'auto',
            transform: 'rotate(140deg)',
          }}
        />

        <img
          src="https://static.igem.wiki/teams/4629/wiki/orange-blob.svg"
          alt="Orange Blob"
          width="750"
          height="auto"
          style={{
            position: 'static',
            marginLeft: '675px',
            marginTop: '445px',
            maxWidth: '100%',
            height: 'auto',
            overflow: 'auto',
            transform: 'rotate(335deg)',
          }}
        />

        <img
          src="https://static.igem.wiki/teams/4629/wiki/screenshot-2023-09-30-at-4-59-35-pm.png"
          alt="Orange Blob"
          width="800"
          height="auto"
          style={{
            position: 'absolute',
            marginLeft: '370px',
            marginTop: '-610px',
            maxWidth: '100%',
            height: 'auto',
            overflow: 'hidden',
          }}
        />
      </div>
    </div>
  );
}
