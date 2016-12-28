import React, {Component} from 'react';
import { connect } from 'react-redux';
import Chart from '../components/Chart';
//import GettingStartedGoogleMap from '../components/GoogleMap';

class WeatherList extends Component {
    renderWeather(cityData){
        const name = cityData.city.name;
        const id = cityData.city.id;
        const temps = cityData.list.map(weather => weather.main.temp);
        const pressures = cityData.list.map(weather => weather.main.pressure);
        const humidities = cityData.list.map(weather => weather.main.humidity);
        //console.log(temps);
        //const { lon, lat } = cityData.city.coord;


        return (
            <tr key={id}>
                <td>{name}</td>
                <td><Chart data={temps} color="red" units="K" /></td>
                <td><Chart data={pressures} color="green" units="pHa" /></td>
                <td><Chart data={humidities} color="black" units="%" /></td>
            </tr>
        );
    }

    render() {
        return (
            <table className="table table-hover">
                <thead>
                    <tr>
                        <th>City</th>
                        <th>Temparature (K)</th>
                        <th>Pressure (hPa)</th>
                        <th>Humidity (%)</th>
                    </tr>
                </thead>
                <tbody>
                   {this.props.weather.map(this.renderWeather)}
                </tbody>
            </table>
        );
    }
    
}

function mapStateToProps({ weather }) {
    return {
        weather
    };
}

export default connect(mapStateToProps)(WeatherList);