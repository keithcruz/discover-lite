import React from "react";
import styles from "./DataTable.module.css";

function ElasticTable({ data }) {
  return (
    <table className={styles.dataTable}>
      <thead>
        <tr>
          <th>Time</th>
          <th>clientip</th>
          <th>geo.srcdest</th>
          <th>request</th>
          <th>response</th>
        </tr>
      </thead>
      <tbody>
        {data.map((item) => (
          <tr key={item._id}>
            <td>{item._source.timestamp}</td>
            <td>{item._source.clientip}</td>
            <td>{item._source.geo.srcdest}</td>
            <td>{item._source.request}</td>
            <td>{item._source.response}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export { ElasticTable };
