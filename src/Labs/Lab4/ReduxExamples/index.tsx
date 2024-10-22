import React from "react";
import HelloRedux from "./HelloRedux";
import CouterRedux from "./CounterRedux";
import AddRedux from "./AddRedux";

export default function ReduxExamples() {
  return(
    <div>
      <h2>Redux Examples</h2>
        <HelloRedux />
        <CouterRedux />
        <AddRedux />
    </div>
  );
};
