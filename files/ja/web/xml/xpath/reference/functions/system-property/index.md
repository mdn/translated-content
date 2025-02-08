---
title: system-property
slug: Web/XML/XPath/Reference/Functions/system-property
original_slug: Web/XPath/Reference/Functions/system-property
---

{{XsltSidebar}}{{ XsltRef() }}

`system-property`関数は、指定されたシステムプロパティを表すオブジェクトを返します。

### 構文

```
system-property(name)
```

### 引数

- `name` (任意)
  - : システムプロパティの名前。引数は QName である文字列に評価される必要があります。 QName は、式のスコープ内の名前空間宣言を使用して名前に展開されます。 system-property 関数は、名前によって識別されるシステムプロパティの値を表すオブジェクトを戻します。そのようなシステムプロパティがない場合は、空の文字列を返す必要があります。

### 返値

指定されたシステムプロパティを表すオブジェクト。

### 注

- xsl:version: プロセッサーによって実装された XSLT のバージョンを示す数字。このドキュメントで指定されているバージョンの XSLT を実装している XSLT プロセッサーの場合、これは 1.0 です
- xsl:vendor: XSLT プロセッサーのベンダーを識別する文字列
- xsl:vendor-url: XSLT プロセッサーのベンダーを識別する URL を含む文字列。通常これはベンダーのウェブサイトのホストページ (ホームページ) です

### 定義

[XSLT 1.0 12.4](https://www.w3.org/TR/xslt#function-system-property)

### Gecko での対応

対応済み
