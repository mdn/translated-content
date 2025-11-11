---
title: generate-id
slug: Web/XML/XPath/Reference/Functions/generate-id
l10n:
  sourceCommit: 3e1b5277c6451e7d27ab628f23fb9702947a7a7b
---

`generate-id` 関数は、指定されたノード集合の最初のノードの一意の ID を生成し、その ID を含む文字列を返します。

## 構文

```plain
generate-id( [node-set] )
```

### 引数

- `node-set` (任意)
  - : このノード集合の最初のノードに対して ID が生成されます。省略すると、現在のコンテキストノードが使用されます。

### 返値

生成された ID を含む文字列。

## 解説

- 同じ ID は、現在の変換で現在の文書の同じノードに対して毎回生成されなければなりません。
- 生成された ID は、その後の変換では同じではない可能性があります。

この関数は XPath への XSLT 固有の追加です。コア XPath 関数ライブラリーの一部ではありません。

## 仕様書

[XSLT 1.0 12.4](https://www.w3.org/TR/1999/REC-xslt-19991116/#function-generate-id)

## Gecko の対応

対応済み。
