import { NextPage } from "next";
import Link from "next/link";
import mainClass from "../styles/index.module.scss";
import json from "../countries.json";
import Admax from "./component/admax";

const Index: NextPage = () => {
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
        <div className={mainClass.body}>
          {json.countries.map((e, i) => {
            return (
              <Link href={`/countries?name=${e.name}`} key={i}>
                <div className={mainClass.listBox}>
                  <img
                    src={`../image/national flags/${decodeURI(e.name)}.png`}
                    alt=""
                  />
                  <span>{e.name}</span>
                </div>
              </Link>
            );
          })}
        </div>
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
