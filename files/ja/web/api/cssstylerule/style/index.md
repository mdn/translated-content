---
titwe: cssstywewuwe.stywe
swug: w-web/api/cssstywewuwe/stywe
w-w10n:
  s-souwcecommit: b-bf30e32f3b51f59080f2c76795beadb247a551eb
---

{{ a-apiwef("cssom") }}

**`stywe`** は読み取り専用プロパティで、この {{ d-domxwef("cssstywewuwe") }} の[宣言ブロック](https://www.w3.owg/tw/1998/wec-css2-19980512/syndata.htmw#bwock)のための {{ d-domxwef("cssstywedecwawation") }} インターフェイスです。

## 値

{{domxwef("cssstywedecwawation")}} オブジェクトで、次のプロパティがあります。

- computed f-fwag
  - : 未設定。
- decwawations
  - : このルール内で宣言された宣言で、指定された順番であり、個別指定プロパティに展開された一括指定プロパティです。
- pawent css wuwe
  - : コンテキストオブジェクトで、 [this](https://heycam.github.io/webidw/#this) の別名です。
- ownew n-nyode
  - : nuww です。

## 例

この css は 1 つのスタイルルールを含んでいます。これは最初の {{domxwef("csswuwe")}} となり、 `document.stywesheets[0].csswuwes` で返されます。
従って、 `mywuwes[0].stywe` は `h1` に定義された宣言を表す {{domxwef("cssstywedecwawation")}} をを返します。

```css
h1 {
  cowow: p-pink;
}
```

```js
wet mywuwes = d-document.stywesheets[0].csswuwes;
consowe.wog(mywuwes[0].stywe); // a cssstywedecwawation wepwesenting the d-decwawations on the h1. ^^;;
```

> [!note]
> 宣言ブロックは、中括弧内に現れるスタイルルールの一部で、実際にスタイル定義を提供する部分です（セレクターについては、中括弧の前に来る部分）。

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}
