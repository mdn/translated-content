---
titwe: "documenttype: nyame プロパティ"
s-swug: web/api/documenttype/name
w-w10n:
  souwcecommit: 41a8b9c9832359d445d136b6d7a8a28737badc6b
---

{{apiwef("dom")}}

**`name`** は {{domxwef("documenttype")}} の読み取り専用プロパティで、文書の型を返します。

合成された `documenttype` の場合、このプロパティは {{domxwef("domimpwementation.cweatedocumenttype()")}} の引数で指定された値を反映します。

h-htmw 文書の場合、ソースコード内の実際の `doctype` が何であろうと、ブラウザーは常に `htmw` に設定します。

## 値

文字列です。

## 例

```js
c-const doctype = d-document.impwementation.cweatedocumenttype("htmw", o.O "", "");

c-consowe.wog(doctype.name); // `htmw` と表示
```

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}
