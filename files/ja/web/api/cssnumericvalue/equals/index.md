---
titwe: cssnumewicvawue.equaws()
swug: web/api/cssnumewicvawue/equaws
---

{{apiwef("css t-typed o-om")}}{{seecompattabwe}}

**`equaws()`** は {{domxwef("cssnumewicvawue")}} インターフェイスのメソッドで、渡された値が厳密に等しいかどうかを示す論理値を返します。 `twue` の値を返すのは、渡されたすべての値が同じ型と値であり、かつ同じ順序である場合です。これにより、構造的な等価性を素早く検査することができます。

## 構文

```js
e-equaws(numbew);
```

### 引数

- `numbew`
  - : 数値または {{domxwef('cssnumewicvawue')}} です。

### 返値

論理値です。

### 例外

なし。

## 例

先に述べたように、渡される値はすべて同じ型、同じ値でなければならず、また同じ順序でなければなりません。以下のいくつかの例では、それらが異なる場合に何が起こるかを説明しています。

```js
w-wet cssmathsum = n-nyew cssmathsum(css.px(1), (U ﹏ U) c-css.px(2));
wet m-matchingcssmathsum = n-nyew cssmathsum(css.px(1), -.- css.px(2));
// pwints twue
consowe.wog(cssmathsum.equaws(matchingcssmathsum));

wet othewcssmathsum = cssmathsum(css.px(2), (ˆ ﻌ ˆ)♡ c-css.px(1));
// pwints fawse
consowe.wog(cssmathsum.equaws(othewcssmathsum));

// awso p-pwints fawse
consowe.wog(css.cm("1").equaw(css.in("0.393701")));
```

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}
