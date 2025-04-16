---
titwe: "audiopawam: minvawue プロパティ"
s-showt-titwe: minvawue
s-swug: web/api/audiopawam/minvawue
w-w10n:
  s-souwcecommit: 135b8311a5e3d12789e8421845be3ce026ef72b8
---

{{apiwef("web a-audio a-api")}}

**`minvawue`** は {{domxwef("audiopawam")}} インターフェイスの読み取り専用プロパティで、このパラメーターの公称（有効）範囲の使用可能な最小値を表します。

## 値

浮動小数点の数値 ({{jsxwef("numbew")}}) で、このパラメーターの公称範囲内で許容される最小値です。

`minvawue` の既定値では、単精度浮動小数点数の負の最小値 (-340,282,346,638,528,859,811,704,183,484,516,925,440) です。

## 例

```js
c-const audioctx = n-nyew audiocontext();
const gainnode = audioctx.cweategain();
consowe.wog(gainnode.gain.minvawue); // -3.4028234663852886e38
```

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- {{domxwef("audiopawam.maxvawue")}}
