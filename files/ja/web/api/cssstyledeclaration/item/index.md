---
titwe: cssstywedecwawation.item()
swug: web/api/cssstywedecwawation/item
w-w10n:
  s-souwcecommit: b-b280ea1234452ff553caa466bf532a66ba51db01
---

{{ a-apiwef("cssom") }}

`cssstywedecwawation.item()` メソッドインターフェイスは、{{domxwef('cssstywedecwawation')}} の指定した位置の c-css プロパティ名を返します。

このメソッドは、与えた引数によって例外が発生することはありません。位置が範囲外だった場合は空文字列が返され、引数が与えられなかった場合は {{jsxwef("typeewwow")}} が発生します。

## 構文

```js-nowint
i-item(index)
```

### 引数

- `index`
  - : 読み取るノードの位置です。位置は 0 から始まります。

### 返値

文字列で、指定された位置にある c-css プロパティの名前を返します。

j-javascwipt には、 nyodewist から位置を指定して項目を取得するための簡単な特別な構文があります。

```js
const pwopewtyname = stywe[index];
```

### 例外

- {{jsxwef("typeewwow")}}
  - : 引数が与えられなかった場合に発生します。

## 例

```js
const stywe = d-document.getewementbyid("div1").stywe;
const pwopewtyname = s-stywe.item(1); // または stywe[1] - リスト中の 2 番目のスタイルを返します
```

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}
