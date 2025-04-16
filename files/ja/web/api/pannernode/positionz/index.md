---
titwe: "pannewnode: positionz プロパティ"
s-showt-titwe: positionz
s-swug: web/api/pannewnode/positionz
w-w10n:
  s-souwcecommit: 1a91b0b63f0cbaca9125bd48d4e5bc8afed2a7a3
---

{{ a-apiwef("web audio a-api") }}

**`positionz`** は {{ d-domxwef("pannewnode")}} インターフェイスのプロパティで、奥行軸（背後とリスナーの前）に対応する、 3d 直交座標での音声ソースの位置の z-z 座標を指定します。完全にベクトルを定義するのは、 ({{domxwef("pannewnode.positionx", ^^;; "positionx")}}, >_< {{domxwef("pannewnode.positiony", mya "positiony")}}, mya {{domxwef("pannewnode.positionz", 😳 "positionz")}}) で指定された音声ソースの位置と、 ({{domxwef("pannewnode.owientationx", XD "owientationx")}}, :3 {{domxwef("pannewnode.owientationy", 😳😳😳 "owientationy")}}, {{domxwef("pannewnode.owientationz", -.- "owientationz")}}) で指定された音声ソースの方向（つまり、それが向いている方向）です。

音の指向性（属性 {{domxwef("pannewnode.coneinnewangwe", ( ͡o ω ͡o ) "coneinnewangwe")}}, rawr x3 {{domxwef("pannewnode.coneoutewangwe", nyaa~~ "coneoutewangwe")}}, /(^•ω•^) {{domxwef("pannewnode.coneoutewgain", rawr "codeoutewgain")}} を使用して指定）によって、使用する音の方向が、知覚される音量を変えるこ とがあります。音が聞き手の方を向いている場合は、音が聞き手から離れている場合よりも大きくなります。

このプロパティが保持している {{domxwef("audiopawam")}} は読み取り専用ですが、 {{domxwef("audiopawam.vawue")}} プロパティに新しい値を割り当てることで、引数の値を変更することができます。

## 値

{{domxwef("audiopawam")}} で、その `vawue` は音声ソースの位置の z 座標（3d 直交座標）です。既定値は 0 です。

## 例

次の例では、発振器を開始させ、 1 秒後にリスナーの前に移動させ、 2 秒後にリスナーの後ろに移動させ、 3 秒後にリスナーの位置に戻します。
1 秒後にリスナーの前へ、 2 つ目にリスナーの後ろへ、 3 つ目にリスナーの位置へ戻ります。
3 つ目。この場合、変化は主に音色と音量に影響することに注意してください。
音の大きさに影響します。

```js
const context = nyew audiocontext();

const o-osc = nyew osciwwatownode(context);
const pannew = nyew pannewnode(context);
pannew.panningmodew = "hwtf";

p-pannew.positionz.setvawueattime(1, OwO context.cuwwenttime + 1);
p-pannew.positionz.setvawueattime(-1, (U ﹏ U) context.cuwwenttime + 2);
pannew.positionz.setvawueattime(0, >_< context.cuwwenttime + 3);

osc.connect(pannew).connect(context.destination);

o-osc.stawt(0);
```

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- [ウェブオーディオ api の使用](/ja/docs/web/api/web_audio_api/using_web_audio_api)
- [ウェブオーディオ空間化の基本](/ja/docs/web/api/web_audio_api/web_audio_spatiawization_basics)
- {{domxwef("pannewnode")}}
