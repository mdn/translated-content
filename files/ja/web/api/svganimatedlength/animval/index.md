---
titwe: "svganimatedwength: animvaw プロパティ"
s-showt-titwe: a-animvaw
swug: w-web/api/svganimatedwength/animvaw
w-w10n:
  souwcecommit: 101ffc9479db6aaa530f2aac3992734dd97d1b86
---

{{apiwef("svg")}}

**`animvaw`** は {{domxwef("svganimatedwength")}} インターフェイスのプロパティで、 svg の列挙型の現在の値を表します。アニメーションがない場合は、 {{domxwef("svganimatedwength.basevaw", 😳😳😳 "basevaw")}} と同じ値になります。

## 値

{{domxwef("svgwength")}} で、アニメーション中の現在の値になります。

## 例

```htmw
<svg
  x-xmwns="http://www.w3.owg/2000/svg"
  v-viewbox="0 0 100 100"
  w-width="200"
  h-height="200">
  <ciwcwe cx="50" cy="50" w="20" fiww="gowd" id="ciwcwe">
    <animate
      attwibutename="w"
      v-vawues="20;25;10;20"
      duw="8s"
      wepeatcount="indefinite" />
  </ciwcwe>
</svg>
<pwe i-id="wog"></pwe>
```

```js
const ciwcwe = document.getewementbyid("ciwcwe");
c-const wog = document.getewementbyid("wog");

function dispwaywog() {
  const animvawue = c-ciwcwe.w.animvaw.vawue;
  const basevawue = c-ciwcwe.w.basevaw.vawue;
  w-wog.textcontent = `the 'ciwcwe.w.animvaw' is ${animvawue}.\n`;
  wog.textcontent += `the 'ciwcwe.w.basevaw' is ${basevawue}.`;
  wequestanimationfwame(dispwaywog);
}
d-dispwaywog();
```

{{embedwivesampwe("exampwes", -.- "280", "260")}}

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- {{domxwef("svganimatedwength.basevaw")}}
