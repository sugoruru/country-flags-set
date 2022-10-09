import { NextPage } from "next";
import Link from "next/link";
import mainClass from "../styles/index.module.scss";
import Admax from "./component/admax";

const Index: NextPage = () => {
  return (
    <div>
      <div className={mainClass.background}>
        <div className={mainClass.header}>
          <Link href="/">
            <span>
              <a>set of country flags</a>
            </span>
          </Link>
        </div>
        <div className={mainClass.body}>
          <p className={mainClass.subtitle}>いろんな国の国旗を...</p>
          <hr style={{ background: "black" }} />
          <div className={mainClass.siteIntroduction}>
            <img src="/image/globe.png" alt="" />
            <p>
              今、この世界には193か国あるそう...
              <br />
              知らない国が出てきたら、
              <br />
              このサイトで国旗を見てみましょう！
            </p>
          </div>
          <div className={mainClass.searchExplanation}>
            <img src="/image/search.png" alt="search" />
            <p>
              調べ方
              <br />
              知らない国の名前を入れて調べるだけ！
              <br />
              知らない国をたくさん調べてみよう！
            </p>
          </div>
          <br />
        </div>
        <Link href="/search">
          <div className={mainClass.goToSearchDiv}>
            <button className={mainClass.goToSearch}>調べに行く！</button>
          </div>
        </Link>
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
