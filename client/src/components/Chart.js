import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  Tooltip,
  YAxis,
  ResponsiveContainer,
} from "recharts";
import styles from "./Chart.module.css";

function buildFreq(list) {
  const freq = {};

  for (const item of list) {
    freq[item._source.timestamp.split(":")[0]] = freq[
      item._source.timestamp.split(":")[0]
    ]
      ? freq[item._source.timestamp.split(":")[0]] + 1
      : 1;
  }
  return freq;
}

function buildData(freq) {
  const data = [];
  for (const field in freq) {
    data.push({
      time: field,
      hits: freq[field],
    });
  }
  return data;
}

function Chart({ data }) {
  const freq = buildFreq(data);
  const charData = buildData(freq);
  return (
    <ResponsiveContainer width="80%" height={275}>
      <BarChart
        width={1000}
        height={250}
        data={charData}
        className={styles.chartFont}
      >
        <XAxis dataKey="time" />
        <YAxis dataKey="hits" />
        <Tooltip />
        <Bar dataKey="hits" fill="#8884d8" />
      </BarChart>
    </ResponsiveContainer>
  );
}

export { Chart };
