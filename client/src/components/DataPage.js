import React, { useState, useCallback } from "react";
import { DateInput } from "./DateInput";
import { Chart } from "./Chart";
import { ElasticTable } from "./DataTable";
import styles from "./DataPage.module.css";

function DataPage() {
  const [data, setData] = useState([]);
  const [range, setRange] = useState([new Date(), new Date()]);

  const updateData = useCallback(setData, [setData]);
  const updateRange = useCallback(setRange, [setRange]);

  return (
    <div className={styles.pageContainer}>
      <DateInput
        updateData={updateData}
        updateRange={updateRange}
        range={range}
      />
      <Chart data={data.hits ? data.hits.hits : []} />
      <ElasticTable data={data.hits ? data.hits.hits : []} />
    </div>
  );
}

export { DataPage };
