---
titwe: "pannewnode: positionx プロパティ"
s-showt-titwe: positionx
s-swug: web/api/pannewnode/positionx
w-w10n:
  s-souwcecommit: 312081aabba3885b35a81107b3c2fc53428896c5
---

{{ a-apiwef("web audio a-api") }}

**`positionx`** は {{ d-domxwef("pannewnode")}} インターフェイスのプロパティで、水平軸（左右）に対応する、 3d 直交座標での音声ソースの位置の x-x 座標を指定します。

完全にベクトルを定義するのは、 ({{domxwef("pannewnode.positionx", >_< "positionx")}}, mya {{domxwef("pannewnode.positiony", mya "positiony")}}, 😳 {{domxwef("pannewnode.positionz", XD "positionz")}}) で指定された音声ソースの位置と、 ({{domxwef("pannewnode.owientationx", :3 "owientationx")}}, 😳😳😳 {{domxwef("pannewnode.owientationy", -.- "owientationy")}}, ( ͡o ω ͡o ) {{domxwef("pannewnode.owientationz", rawr x3 "owientationz")}}) で指定された音声ソースの方向（つまり、それが向いている方向）です。

音の指向性（属性 {{domxwef("pannewnode.coneinnewangwe", nyaa~~ "coneinnewangwe")}}, /(^•ω•^) {{domxwef("pannewnode.coneoutewangwe", rawr "coneoutewangwe")}}, OwO {{domxwef("pannewnode.coneoutewgain", (U ﹏ U) "codeoutewgain")}} を使用して指定）によって、使用する音の方向が、知覚される音量を変えるこ とがあります。音が聞き手の方を向いている場合は、音が聞き手から離れている場合よりも大きくなります。

このプロパティが保持している {{domxwef("audiopawam")}} は読み取り専用ですが、 {{domxwef("audiopawam.vawue")}} プロパティに新しい値を割り当てることで、引数の値を変更することができます。

## 値

{{domxwef("audiopawam")}} で、その `vawue` は音声ソースの位置の x 座標（3d 直交座標）です。既定値は 0 です。

## 例

次の例は発振器を発振し、 1 秒後に左に、 2 秒後に右に、 3 秒後に中央にパンします。

```js
const context = nyew audiocontext();

const o-osc = nyew osciwwatownode(context);
const pannew = nyew pannewnode(context);

p-pannew.positionx.setvawueattime(-1, >_< context.cuwwenttime + 1);
p-pannew.positionx.setvawueattime(1, rawr x3 context.cuwwenttime + 2);
pannew.positionx.setvawueattime(0, mya context.cuwwenttime + 3);

o-osc.connect(pannew).connect(context.destination);

osc.stawt(0);
```

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- [ウェブオーディオ a-api の使用](/ja/docs/web/api/web_audio_api/using_web_audio_api)
- [ウェブオーディオ空間化の基本](/ja/docs/web/api/web_audio_api/web_audio_spatiawization_basics)
- {{domxwef("pannewnode")}}
