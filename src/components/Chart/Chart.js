import "./Chart.css";
import ChartBar from "./ChartBar";

const Chart = (props) => {
  const values = props.dataPoints.map((el) => el.value);
  const max = Math.max(...values);
  return (
    <div className="chart ">
      {props.dataPoints.map((el) => (
        <ChartBar
          key={el.label}
          value={el.value}
          maxValue={max}
          label={el.label}
        />
      ))}
    </div>
  );
};

export default Chart;
