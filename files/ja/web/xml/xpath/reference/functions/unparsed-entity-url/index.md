---
title: unparsed-entity-url
slug: Web/XML/XPath/Reference/Functions/unparsed-entity-url
l10n:
  sourceCommit: 3e1b5277c6451e7d27ab628f23fb9702947a7a7b
---

`unparsed-entity-url()` 関数は、指定された名前を持つ解析されていないエンティティの URI を返します。これは、ソース文書の DTD で参照される非 XML データです。

## 構文

```plain
string unparsed-entity-url(string)
```

### 引数

解析されていないエンティティの名前。引数が文字列でない場合は、 string() 関数の規則を使用して変換されます。名前は XML 名でなければなりません。

### 返値

存在する場合、 DTD から取り出された未解析エンティティの URI。それ以外の場合は空の文字列です。

## 仕様書

[XSLT 1.0 12.4](https://www.w3.org/TR/1999/REC-xslt-19991116/#function-unparsed-entity-uri)

## Gecko の対応

未対応。
