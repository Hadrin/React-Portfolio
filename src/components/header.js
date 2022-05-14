import React from 'react';
import { Link } from 'react-router-dom';

const styles = {
  title: {
    padding: 20,
    borderStyle: 'solid',
    borderWdith: 15,
    borderColor: 'black',
    textAlign: 'center',
  },
  card: {
    padding: 20,
    borderStyle: 'solid',
    borderWdith: 15,
    borderColor: 'black',
    textAlign: 'center',
  },
  image: {
    textAlign: 'center',
    display: 'block',
    justifyContent: 'center',
    alignItems: 'center',
    margin: 'auto',
    width: '100%',
  },
  artistName: {
    padding: 20,
    textAlign: 'center',
    fontWeight: 'bold',
  },
  navText: {
    color: 'white',
    textShadow: '4px 3px 4px #9E9E9E',
  },
  navList: {
      listStyleType: 'none',
  },
  navBackground: {
    backgroundColor: 'teal',
    borderRadius: '1%',
    boxShadow: '6px 1px 9px 1px black',
  },
  container: { boxShadow: '6px 1px 9px 1px #00E5FF' },
};

function Header() {
  return (
    <div style={styles.navBackground}>
      <div>
        <nav
          style={styles.image}
          className="navbar navbar-expand-lg navbar-dark bg-transparent d-flex flex-row">
          <div id="navbarNav"><h1>David McGinley</h1></div>
          <hr></hr>
          <div>
            <ul className="navbar-nav" style={styles.navList}>
                <li className="nav-item">
                <Link className="nav-link navbar-logo" to="/about" style={styles.navText}>
              <h1>About Me</h1>
            </Link>
                </li>
              <li className="nav-item">
                <Link className="nav-link" to="/portfolio" style={styles.navText}>
                  <h1>Portfolio</h1>
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className="nav-link"
                  to="/Contact"
                  style={styles.navText}
                >
                  
                  <h1>Contact</h1>
                </Link>
              </li>
              <li className="nav-item">
                <a href="https://docs.google.com/document/d/1GKGRhwkt7yPbCFe27VK8tGUjqkzjfYTXJIgPbomgJr4/edit?usp=sharing" className="nav-link" style={styles.navText}>
                  <h1>Resume</h1>
                </a>
              </li>
            </ul>
            <div></div>
          </div>
        </nav>
      </div>
    </div>
  );
}
export default Header;
