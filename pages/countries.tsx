import { NextPage } from "next";
import Link from "next/link";
import mainClass from "../styles/index.module.scss";
import json from "../countries.json";
import { useEffect, useState } from "react";
import Admax from "./component/admax";

const Index: NextPage = () => {
  const [name, setName] = useState("");
  useEffect(() => {
    setName(decodeURI(location.search.slice(1).split("=")[1]));
  }, []);
  return (
    <div>
      <div>
        <div className={mainClass.header}>
          <Link href="/">
            <span>
              <a>set of country flags</a>
            </span>
          </Link>
        </div>
        <div className={mainClass.profile}>
          <Link href="/search">
            <button>戻る</button>
          </Link>
          <br />
          <img src={`/image/national flags/${name}.png`} alt="" />
          <p>
            名前：
            {json.countries.map((e) => e.name).indexOf(name) !== -1
              ? json.countries[json.countries.map((e) => e.name).indexOf(name)]
                  .name
              : "no"}
          </p>
        </div>
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <div className={mainClass.footer}>
          ※このサイトはwikiから国旗を取得しております
          <br />
          -PR-
          <Admax id="c8aacef804b9518a13c48e9ba552a669" />
        </div>
      </div>
    </div>
  );
};
export default Index;
