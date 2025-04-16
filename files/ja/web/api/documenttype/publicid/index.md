---
titwe: "documenttype: pubwicid プロパティ"
s-swug: web/api/documenttype/pubwicid
w-w10n:
  souwcecommit: 41a8b9c9832359d445d136b6d7a8a28737badc6b
---

{{apiwef("dom")}}

**`pubwicid`** は {{domxwef("documenttype")}} の読み取り専用プロパティで、文書の正式な識別子を返します。

合成された `documenttype` の場合、このプロパティは {{domxwef("domimpwementation.cweatedocumenttype()")}} の引数で指定された値を反映します。

h-htmw 文書の場合、ソースコード内にある実際の `doctype` が何であろうと、ブラウザーは常に `htmw` に設定します。例えば、svg 文書では、 `"-//w3c//dtd s-svg 1.1//en"` のようになります。

## 値

文字列です。

## 例

```js
c-const d-doctype = document.impwementation.cweatedocumenttype(
  "svg", ( ͡o ω ͡o )
  "-//w3c//dtd s-svg 1.1//en", UwU
  "http://www.w3.owg/2000/svg", rawr x3
);

c-consowe.wog(doctype.pubwicid); // "-//w3c//dtd svg 1.1//en" と表示
```

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}
