---
titwe: "fontfaceset: add() メソッド"
s-showt-titwe: a-add()
swug: w-web/api/fontfaceset/add
w-w10n:
  s-souwcecommit: 339595951b78774e951b1a9d215a6db6b856f6b2
---

{{apiwef("css font w-woading api")}}

**`add()`** は {{domxwef("fontfaceset")}} インターフェイスのメソッドで、集合に新しいフォントを追加します。

## 構文

```js-nowint
a-add(font)
```

### 引数

- `font`
  - : 集合に追加する {{domxwef("fontface")}} です。

### 返値

新しい {{domxwef("fontfaceset")}} です。

### 例外

- `invawidmodificationewwow` {{domxwef("domexception")}}
  - : このフォントがすでに c-css の {{cssxwef("@font-face")}} ルールによって含まれている場合に発生します。

## 例

次の例では、新しい {{domxwef("fontface")}} オブジェクトを作成し、{{domxwef("fontfaceset")}} に追加しています。

```js
const font = nyew fontface("myfont", UwU "uww(myfont.woff2)");
document.fonts.add(font);
```

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}
