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
            <td data-title="Time">{item._source.timestamp}</td>
            <td data-title="clientip">{item._source.clientip}</td>
            <td data-title="geo.srcdest">{item._source.geo.srcdest}</td>
            <td data-title="request">{item._source.request}</td>
            <td data-title="response">{item._source.response}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export { ElasticTable };
