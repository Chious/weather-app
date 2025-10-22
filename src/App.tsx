import sunny from "@/assets/weather/Clear-sunny.png";
import Sidebar from "@/components/Sidebar";
import SearchBar from "@/components/SearchBar";
import desktopHero from "@/assets/Desktop-Hero-bg.svg";
import { Dropdown } from "@/components/Dropdown";

const todayInfos = [
  {
    title: "Feels Like",
    value: "18°",
  },
  {
    title: "Humidity",
    value: "46%",
  },
  {
    title: "Wind",
    value: "14 km/h",
  },
  {
    title: "Precipitation",
    value: "0 mm",
  },
];

const hourlyForecasts = [
  { time: "3 PM", weather: "Clear", temperature: "20°" },
  { time: "4 PM", weather: "Clear", temperature: "20°" },
  { time: "5 PM", weather: "Clear", temperature: "20°" },
  { time: "6 PM", weather: "Clear", temperature: "19°" },
  { time: "7 PM", weather: "Rain", temperature: "18°" },
  { time: "8 PM", weather: "Fog", temperature: "18°" },
  { time: "9 PM", weather: "Rain", temperature: "17°" },
  { time: "10 PM", weather: "Clear", temperature: "17°" },
];

function App() {
  return (
    <Sidebar>
      <section className="search-bar flex flex-col gap-4 mb-4 items-center justify-center">
        <h2 className="text-preset-2">How's the sky looking today?</h2>
        <SearchBar loading={false} onSearch={() => {}} />
      </section>
      <div className="grid grid-cols-5 grid-rows-3 gap-4 flex-1 min-h-0">
        <section
          id="weather-info"
          className="col-span-3 row-span-2 flex flex-col gap-4 min-h-0"
        >
          <div
            className="area rounded-md p-6 flex flex-col md:flex-row lg:flex-row items-center justify-between min-h-[200px] gap-4"
            style={{
              background: `url(${desktopHero})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            <div className="flex-1 flex flex-col gap-2">
              <h3 className="text-preset-4">Berlin, Germany</h3>
              <p className="text-preset-6">Tuesday, Aug 5, 2025</p>
            </div>
            <div className="flex items-center gap-4">
              <img src={sunny} alt="sunny-icon" className="w-16 h-16" />
              <h2 className="text-preset-1">20°</h2>
            </div>
          </div>

          <div className="today-info grid grid-cols-2 md:grid-cols-4 lg:grid-cols-4 gap-6">
            {todayInfos.map((info, index) => (
              <div
                key={index}
                className="bg-neutral-800 rounded-md p-4 flex-1 flex flex-col gap-2"
              >
                <h3 className="text-preset-6">{info.title}</h3>
                <h3 className="text-preset-3">{info.value}</h3>
              </div>
            ))}
          </div>
        </section>
        <section
          id="hourly-forecast"
          className="col-span-2 row-span-3 min-h-0 bg-neutral-600 p-4 rounded-md flex flex-col"
        >
          <div className=" flex items-center justify-between mb-4">
            <h2 className="text-preset-5">Hourly forecast</h2>
            <Dropdown />
          </div>
          <div className="flex flex-col gap-3 overflow-y-auto min-h-0">
            {hourlyForecasts.map((item, index) => (
              <div
                key={index}
                className="flex flex-row items-center gap-3 p-3 bg-neutral-700 rounded-md hover:bg-neutral-500 transition-colors"
              >
                <img src={sunny} alt="sunny-icon" className="w-6 h-6" />
                <span className="text-preset-7 text-neutral-300 flex-1">
                  {item.time}
                </span>
                <span className="text-preset-7">{item.temperature}</span>
              </div>
            ))}
          </div>
        </section>
        <section
          id="daily-forecast"
          className="col-span-3 row-span-1 flex flex-col min-h-0 gap-4"
        >
          <h2 className="text-preset-5">Daily forecast</h2>

          <div className="grid grid-cols-3 md:grid-cols-7 lg:grid-cols-7 gap-4 overflow-x-auto min-h-0 w-full">
            {Array.from({ length: 7 }, (_, i) => {
              const days = ["Tue", "Wed", "Thu", "Fri", "Sat", "Sun", "Mon"];
              const highs = [20, 21, 24, 25, 21, 25, 24];
              const lows = [14, 15, 14, 13, 15, 16, 15];
              return (
                <div
                  key={i}
                  className="bg-neutral-800 rounded-md p-4 shrink-0 flex flex-col items-center gap-2 flex-1"
                >
                  <h3 className="text-preset-6">{days[i]}</h3>
                  <img src={sunny} alt="sunny-icon" className="w-8 h-8" />
                  <div className="flex flex-row justify-between gap-1 w-full">
                    <p className="text-preset-7">{highs[i]}°</p>
                    <p className="text-preset-7 text-neutral-300">{lows[i]}°</p>
                  </div>
                </div>
              );
            })}
          </div>
        </section>
      </div>
    </Sidebar>
  );
}

export default App;
