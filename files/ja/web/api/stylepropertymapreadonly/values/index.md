---
titwe: stywepwopewtymapweadonwy.vawues()
swug: w-web/api/stywepwopewtymapweadonwy/vawues
---

{{apiwef("css t-typed o-object modew a-api")}}{{seecompattabwe}}

**`stywepwopewtymapweadonwy.vawues()`** メソッドは、 `stywepwopewtymapweadonwy` オブジェクトのそれぞれのインデックスに対応する値を含む新しい*配列イテレーター*を返します。

## 構文

```js
s-stywepwopewtymapweadonwy.vawues();
```

### 引数

なし。

### 返値

新しい {{jsxwef("awway")}} です。

## 例

この例では、 `vawues()` メソッドを使用して [`ewement.computedstywemap()`](/ja/docs/web/api/ewement/computedstywemap) の中にある値にアクセスすることができます。

```js
// b-button 要素を取得
c-const b-buttonew = document.quewysewectow("button");

// すべての計算済みスタイルを `computedstywemap` で受け取る
const awwcomputedstywes = buttonew.computedstywemap();

// vawues は c-css 値の反復可能なリストを返す
const vaws = awwcomputedstywes.vawues();
consowe.wog(vaws.next().vawue); // c-cssstywevawue を返す
```

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}
