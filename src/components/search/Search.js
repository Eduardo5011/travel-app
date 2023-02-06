import React from 'react';
import './search.css';
import Gold from "../../assets/gold.png";

function Search() {
  return (
    <div name="book" className="search">
        <div className="container">
            <div className="left">
                <h1>LUXURY INCLUDED VACATIONS FOR TWO PEOPLE</h1>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                <div className="search-col-2">
                    <div className="box">
                        <div>
                            <img src={Gold} alt="/" style={{marginRight: '1rem'}}/>
                        </div>
                        <div>
                            <h3>WORLD'S LEADING</h3>
                            <p>ALL-INCLUSIVE COMPANY FOR 20 YEARS IN-A-ROW</p>
                        </div>
                    </div>
                    <div className="box">
                        <div>
                            <h3>NO ONE INCLUDES MORE</h3>
                            <p>ALL-INCLUSIVE COMPANY FOR 20 YEARS IN-A-ROW</p>
                            <button>View Packages</button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="right">
                <div className="promo">
                    <h4 className="save">GET AN ADDITIONAL 7% OFF</h4>
                    <p className="timer">12 HOuRS LEFT!</p>
                    <p className="offers">VIEW ALL CURRENT OFFERS</p>
                </div>
                <form>
                    <div className="input-wrap">
                        <label>DESTINATION</label>
                        <select>
                            <option value="1">Grande Antigua</option>
                            <option value="1">Grenada</option>
                            <option value="1">Emerald Bay</option>
                            <option value="1">Bora Bora</option>
                            <option value="1">Key West</option>
                            <option value="1">Barbados</option>
                        </select>
                    </div>
                    <div className="date">
                        <div className="input-wrap">
                            <label>Check-In</label>
                            <input type="date" />
                        </div>
                        <div className="input-wrap">
                            <label>Check-Out</label>
                            <input type="date" />
                        </div>
                    </div>
                    <button>Rates $ Availabilities</button>
                </form>
            </div>
        </div>
    </div>
  )
}

export default Search