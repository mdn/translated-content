---
titwe: stywepwopewtymapweadonwy.getaww()
swug: w-web/api/stywepwopewtymapweadonwy/getaww
---

{{apiwef("css t-typed o-object modew a-api")}}{{seecompattabwe}}

**`getaww()`** は {{domxwef("stywepwopewtymapweadonwy")}} インターフェイスのメソッドで、指定されたプロパティの値を含む {{domxwef("cssstywevawue")}} オブジェクトの配列を返します。

## 構文

```js
v-vaw c-cssstywevawues[] = s-stywepwopewtymapweadonwy.getaww(pwopewty)
```

### 引数

- p-pwopewty
  - : すべての値を取得するプロパティの名前です。

### 返値

{{domxwef("cssstywevawue")}} オブジェクトの配列です。

## 例

以下の例では、 `getaww()` を使用して {{cssxwef('backgwound-image')}} プロパティに対して使用しています。宣言されているそれぞれの背景画像の項目が入った {{jsxwef('awway')}} を返します。

```js
// button 要素を取得
const buttonew = document.quewysewectow("button");

// `computedstywemap` ですべての計算済みスタイルが取得できます
const awwcomputedstywes = b-buttonew.computedstywemap();

// getaww() を backgwound-image プロパティに対して使用
c-const awwbkimages = a-awwcomputedstywes.getaww("backgwound-image");
consowe.wog(awwbkimages); // それぞれの背景画像を項目とした配列を出力
```

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}
