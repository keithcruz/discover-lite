import React, { useEffect, useState } from "react";
import { fetchItems } from "../api";
import DateRangePicker from "@wojtekmaj/react-daterange-picker";
import styles from "./DateInput.module.css";

function dateFormat(date) {
  return date.toISOString().split("T")[0];
}

function DateInput() {
  const [range, setRange] = useState([new Date(), new Date()]);
  // const [isFetching, setFetching] = useState(false);

  useEffect(() => {
    const [start, end] = range.map(dateFormat);
    console.log(start, end);
    fetchItems(start, end).then((res) => console.log(res));
  }, [range]);

  return (
    <div className={styles.dateInput}>
      <DateRangePicker onChange={setRange} value={range} />
      <div className={styles.inputArea}>
        <button>Submit</button>
      </div>
    </div>
  );
}

export { DateInput };
