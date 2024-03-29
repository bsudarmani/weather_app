import { Accordion, AccordionItem, AccordionItemButton, AccordionItemHeading,AccordionItemPanel} from "react-accessible-accordion";
import './Forecast.css';
const Forecast=({data})=>
{
    if (!data || !data.list) {
        return <div></div>; 
      }
    const weekdays = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
    const daysInweek = new Date().getDay();
  const forecastDays = weekdays.slice(daysInweek, weekdays.length).concat(weekdays.slice(0, daysInweek));
  console.log(forecastDays);
    return(
        <div className="container" >
        <label className="title text-light">Daily</label>
        <Accordion allowZeroExpanded>
          {data.list.splice(0, 7).map((item, idx) => (
            <AccordionItem key={idx}>
              <AccordionItemHeading>
                <AccordionItemButton>
                  <div className="daily-item">
                    <img 
                      src={`https://openweathermap.org/img/wn/${item.weather[0].icon}@2x.png`}
                    className="icon-small" alt="weather" />
                    <label className="day">{forecastDays[idx]}</label>
                    <label className="description">{item.weather[0].description}</label>
                    <label className="min-max">{Math.round(item.main.temp_max)}°C /{Math.round(item.main.temp_min)}°C</label>
                  </div>
                </AccordionItemButton>
              </AccordionItemHeading>
              <AccordionItemPanel>
                <div className="daily-details-grid">
                  <div className="daily-details-grid-item">
                    <label>Pressure:</label>
                    <label>{item.main.pressure}</label>
                  </div>
                  <div className="daily-details-grid-item">
                    <label>Humidity:</label>
                    <label>{item.main.humidity}</label>
                  </div>
                  <div className="daily-details-grid-item">
                    <label>Clouds:</label>
                    <label>{item.clouds.all}%</label>
                  </div>
                  <div className="daily-details-grid-item">
                    <label>Wind speed:</label>
                    <label>{item.wind.speed} m/s</label>
                  </div>
                  <div className="daily-details-grid-item">
                    <label>Sea level:</label>
                    <label>{item.main.sea_level}m</label>
                  </div>
                  <div className="daily-details-grid-item">
                    <label>Feels like:</label>
                    <label>{item.main.feels_like}°C</label>
                  </div>
                </div>
              </AccordionItemPanel>
            </AccordionItem>
          ))}
        </Accordion>
        <h1 className='text-center text-light h5  m-5  '> Developed  By <span className='text-light'> Sudarmani</span> <span className='text-light '>🤍 </span> </h1>
      </div>
  
    )
}
export default Forecast;