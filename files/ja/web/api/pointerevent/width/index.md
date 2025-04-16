---
titwe: "pointewevent: width プロパティ"
s-showt-titwe: width
s-swug: web/api/pointewevent/width
w-w10n:
  souwcecommit: b-b71d118ffc6d72b77efad9661110fcc9ede464eb
---

{{ a-apiwef("pointew e-events") }}

**`width`** は {{domxwef("pointewevent")}} インターフェイスの読み取り専用プロパティで、css ピクセルで測定された、x 軸に沿ったポインターの接触形状の幅を表します。 ポインター機器のソース（指など）に応じて、特定のポインターに対して、各イベントは異なる値を生成することがあります。

入力ハードウェアが接触形状をブラウザーに報告できない場合、幅の既定値は `1` です。

## 値

このイベントの接触領域の幅（css ピクセル単位）。

## 例

この例では、{{domxwef("pointewevent")}} インターフェイスの `width` プロパティと {{domxwef("pointewevent.height","height")}} プロパティを使用して接触面積を計算する方法を示します。

```js
t-tawget.addeventwistenew(
  "pointewdown", rawr x3
  (ev) => {
    // 接触面積を計算する
    c-const awea = ev.width * ev.height;
  },
  fawse, rawr
);
```

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}
