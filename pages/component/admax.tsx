import { useEffect } from "react";

type AdmaxAdType = {
  admax_id: string;
  type: string;
};
const Admax: React.FC<{ id: string }> = (props) => {
  useEffect(() => {
    if (!(window as any).admaxads) (window as any).admaxads = [];
    const admaxads: AdmaxAdType[] = (window as any).admaxads;
    if (!admaxads.some((ad) => ad.admax_id === props.id))
      admaxads.push({
        admax_id: props.id,
        type: "switch",
      });
    const tag = document.createElement("script");
    tag.src = "https://adm.shinobi.jp/st/t.js";
    tag.async = true;
    document.body.appendChild(tag);
    return () => {
      document.body.removeChild(tag);
      admaxads.splice(
        admaxads.findIndex((ad) => ad.admax_id === props.id),
        1
      );
      (window as any).__admax_tag__ = undefined;
    };
  }, []);
  return (
    <div
      className="admax-switch"
      data-admax-id={props.id}
      style={{ margin: "0 auto", textAlign: "left" }}
    />
  );
};
export default Admax;
