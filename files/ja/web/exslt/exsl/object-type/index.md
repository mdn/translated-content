---
title: exsl:object-type()
slug: Web/EXSLT/exsl/object-type
---

{{XSLTRef}}{{QuickLinksWithSubpages("/ja/docs/Web/EXSLT")}}

`exsl:object-type()` は、指定されたオブジェクトの型を示す文字列を返します。

> **メモ:** ほとんどの [XSLT](/ja/docs/Web/XSLT) オブジェクトの型は、安全に他の型へ自動変換されることがあります。しかし、自動変換によってはエラーを発生させることになります。特に、ノードセットでないものをノードセットとして扱うと、そのようになります。この機能により、名前付きテンプレートや拡張関数の作者は、簡単に引数値に柔軟性を持たせることができます。

## 構文

```
exsl:object-type(object);
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

[EXSLT - EXSL:OBJECT-TYPE](http://exslt.org/exsl/functions/object-type/index.html)
