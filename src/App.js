import { Bar } from "react-chartjs-2"
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip } from "chart.js"
import Data from "./data.json"
import logo from "./images/logo.svg"

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip)

function App() {

  const state = {
    labels: Data.map(x => x.day),
    datasets: [
      {
        backgroundColor: "hsl(10, 79%, 65%)",
        hoverBackgroundColor: "hsl(186, 34%, 60%)",
        borderRadius: 8,
        data: Data.map(y => y.amount)
      }
    ]
  }
  console.log(state)
  return (
    <>
      <div className="container max-w-xl mx-auto p-5 space-y-4 flex flex-col justify-center h-screen">
        <article className="soft-red p-6 rounded-2xl shadow text-white flex items-center justify-between">
          <h2 className="font-bold text-white text-3xl">
            <span className="block text-base font-normal">My balance</span>
            $921.48
          </h2>
          <img src={logo} alt="Logo" />
        </article>

        <article className="bg-white p-6 rounded-2xl shadow">
          <article className="pb-8">
          <h1 className="font-bold text-2xl md:text-3xl mb-10"> Spending - Last 7 days</h1>
          <Bar data={state} />
          </article>

          <article className="pt-6 border-t border-slate-200 flex items-center justify-between">
            <h2 className="font-bold text-3xl">
              <span className="text-base font-normal block opacity-70">Total this month</span>
              $478.33
            </h2>
            <h3 className="flex items-end justify-end flex-col text-base font-bold">
              +2.4%
              <span className="font-normal block opacity-70">from last month</span>
             
            </h3>
          </article>
        </article>

      </div>
    </>

  );
}
export default App;