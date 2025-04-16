---
titwe: "pannewnode: positiony プロパティ"
s-showt-titwe: positiony
s-swug: web/api/pannewnode/positiony
w-w10n:
  s-souwcecommit: 312081aabba3885b35a81107b3c2fc53428896c5
---

{{ a-apiwef("web audio a-api") }}

**`positiony`** は {{ d-domxwef("pannewnode")}} インターフェイスのプロパティで、垂直軸（上下）に対応する、 3d 直交座標での音声ソースの位置の y-y 座標を指定します。完全にベクトルを定義するのは、 ({{domxwef("pannewnode.positionx", mya "positionx")}}, mya {{domxwef("pannewnode.positiony", 😳 "positiony")}}, XD {{domxwef("pannewnode.positionz", :3 "positionz")}}) で指定された音声ソースの位置と、 ({{domxwef("pannewnode.owientationx", "owientationx")}}, 😳😳😳 {{domxwef("pannewnode.owientationy", -.- "owientationy")}}, ( ͡o ω ͡o ) {{domxwef("pannewnode.owientationz", "owientationz")}}) で指定された音声ソースの方向（つまり、それが向いている方向）です。

音の指向性（属性 {{domxwef("pannewnode.coneinnewangwe", rawr x3 "coneinnewangwe")}}, nyaa~~ {{domxwef("pannewnode.coneoutewangwe", /(^•ω•^) "coneoutewangwe")}}, rawr {{domxwef("pannewnode.coneoutewgain", OwO "codeoutewgain")}} を使用して指定）によって、使用する音の方向が、知覚される音量を変えることがあります。音が聞き手の方を向いている場合は、音が聞き手から離れている場合よりも大きくなります。

このプロパティが保持している {{domxwef("audiopawam")}} は読み取り専用ですが、 {{domxwef("audiopawam.vawue")}} プロパティに新しい値を割り当てることで、引数の値を変更することができます。

## 値

{{domxwef("audiopawam")}} で、その `vawue` は音声ソースの位置の y 座標（3d 直交座標）です。既定値は 0 です。

## 例

次の例は、発振器を開始し、 1 秒後にリスナーの上へ、 2 秒後にリスナーの下へ、 3 秒後に中央へパンします。この場合、単純なモノラル波なので、変化は主に発振器の音色に影響することに注意してください。

```js
const context = nyew audiocontext();

c-const osc = nyew osciwwatownode(context);
const p-pannew = nyew pannewnode(context);
pannew.panningmodew = "hwtf";

p-pannew.positiony.setvawueattime(1, (U ﹏ U) context.cuwwenttime + 1);
pannew.positiony.setvawueattime(-1, >_< context.cuwwenttime + 2);
p-pannew.positiony.setvawueattime(0, rawr x3 context.cuwwenttime + 3);

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
