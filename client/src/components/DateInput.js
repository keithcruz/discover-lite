import React, { useEffect, useState } from "react";
import { fetchItems } from "../api";
import DateRangePicker from "@wojtekmaj/react-daterange-picker";
import styles from "./DateInput.module.css";

function dateFormat(date) {
  return date.toISOString().split("T")[0];
}

function DateInput({ updateData, updateRange, range }) {
  useEffect(() => {
    const [start, end] = range.map(dateFormat);

    fetchItems(start, end).then((res) => {
      updateData(res);
    });
  }, [range, updateRange, updateData]);

  return (
    <div className={styles.dateInput}>
      <DateRangePicker onChange={updateRange} value={range} />
    </div>
  );
}

export { DateInput };
