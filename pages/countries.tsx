import { NextPage } from "next";
import Link from "next/link";
import mainClass from "../styles/index.module.scss";
import json from "../countries.json";
import Admax from "./component/admax";
import { useRouter } from "next/router";

const Index: NextPage = () => {
  const router = useRouter();
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
          <img
            src={`https://sugoruru.github.io/country-flags-set/image/national flags/${router.query.name}.png`}
            alt=""
          />
          <p>
            名前：
            {json.countries
              .map((e) => e.name)
              .indexOf(String(router.query.name)) !== -1
              ? json.countries[
                  json.countries
                    .map((e) => e.name)
                    .indexOf(String(router.query.name))
                ].name
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
          ※このサイトはWikipediaから国旗を取得しております
          <br />
          -PR-
          <Admax id="c8aacef804b9518a13c48e9ba552a669" />
        </div>
      </div>
    </div>
  );
};
export default Index;
