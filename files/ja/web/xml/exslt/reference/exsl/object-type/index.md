---
title: exsl:object-type()
slug: Web/XML/EXSLT/Reference/exsl/object-type
l10n:
  sourceCommit: 3e1b5277c6451e7d27ab628f23fb9702947a7a7b
---

`exsl:object-type()` は、指定されたオブジェクトの型を示す文字列を返します。

> [!NOTE]
> ほとんどの [XSLT](/ja/docs/Web/XML/XSLT) オブジェクトの型は、互いに安全に強制変換できます。ただし、一部の強制変換ではエラーが発生します。特に、ノード集合でないものをノード集合として扱うと、エラーが発生します。この関数により、名前付きテンプレートや拡張関数の作者は、引数値に柔軟性を持たせやすくなります。

## 構文

```plain
exsl:object-type(object)
```

### 引数

- `object`
  - : 型が返されるオブジェクト。

### 返値

オブジェクトの型で、以下のいずれかになります。

- `string`
- `number`
- `boolean`
- `node-set`
- `RTF`
- `external`

## 仕様書

[EXSLT - EXSL:OBJECT-TYPE](https://exslt.github.io/exsl/functions/object-type/index.html)
