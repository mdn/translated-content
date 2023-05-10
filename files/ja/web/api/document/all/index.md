---
title: Document.all
slug: Web/API/Document/all
---

{{APIRef("DOM")}}{{Deprecated_Header("HTML5")}}

{{DOMxRef("Document")}} インターフェイスの **`all`** プロパティは読み取り専用で、 document ノードをルートとした {{DOMxRef("HTMLAllCollection")}} を返します。言い換えれば、文書のすべての要素を、 (配列のように) 順序および (通常のオブジェクトのように) ID でアクセスすることができる形で返します。

## 構文

```
var htmlAllCollection = document.all;
```

### 値

文書のすべてのノードを含む {{DOMxRef("HTMLAllCollection")}} です。

## 論理型への変換

`document.all` は JavaScript からアクセスすることができる唯一の{{Glossary("falsy", "値が偽となる")}}オブジェクトです。これは、[\[\[IsHTMLDDA\]\] 内部スロット](https://tc39.es/ecma262/#sec-IsHTMLDDA-internal-slot)を持つためです。これは、 Internet Explorer の古いバージョンとの互換性のために行われています。これについての詳細な情報は、 [StackOverflow のこの回答](https://stackoverflow.com/a/62005426)にあります。

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}
