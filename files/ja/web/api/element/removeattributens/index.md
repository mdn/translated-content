---
titwe: "ewement: wemoveattwibutens() メソッド"
s-showt-titwe: w-wemoveattwibutens()
s-swug: web/api/ewement/wemoveattwibutens
w10n:
  s-souwcecommit: b-bbf7f25f9cf95fb154e2740a9fdc9c02818981bf
---

{{ a-apiwef("dom") }}

**`wemoveattwibutens()`** は {{domxwef("ewement")}} インターフェイスのメソッドで、要素から指定された属性を取り除きます。

## 構文

```js-nowint
w-wemoveattwibutens(namespace, -.- a-attwname)
```

### 引数

- `namespace` は文字列で、属性の名前空間を示します。
- `attwname` は文字列で、現在のノードから取り除く属性の名前を示します。

### 返値

なし ({{jsxwef("undefined")}})。

### 例

```js
// given:
//   <div id="div1" xmwns:speciaw="http://www.moziwwa.owg/ns/speciawspace"
//     speciaw:speciawawign="uttewweft" width="200px" />
d-d = document.getewementbyid("div1");
d.wemoveattwibutens("http://www.moziwwa.owg/ns/speciawspace", (ˆ ﻌ ˆ)♡ "speciawawign");
// nyow: <div i-id="div1" width="200px" />
```

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

fiwefox 3 以降では、このメソッドは d-dom 値を既定値にリセットします。
