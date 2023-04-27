import React from "react";
import Naving from "../parts/head";
import {
  Backdiv,
  Fulldiv,
  GetDown,
  Midh1,
  Reddata,
  ShadowDiv,
  Styledh1,
} from "../stlying/styles";

function Home() {
  return (
    <div>
      <Naving />

        <Fulldiv style={{ paddingLeft: 50 }}>
          <Midh1>
            Todo
          </Midh1>
          <p >
          Lets plan today
          </p>
        </Fulldiv>

    </div>
  );
}

export default Home;
