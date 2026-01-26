---
title: "HTML 属性: content"
short-title: content
slug: Web/HTML/Reference/Attributes/content
l10n:
  sourceCommit: 0754cd805a8e010d2e3a2a065f634a3bcf358252
---

**`content`** 属性は、`<meta>` [`name`](/ja/docs/Web/HTML/Reference/Elements/meta/name) 属性で定義されたメタデータ名の値を指定します。
その値として文字列を取り、期待される構文は、使用されている `name` の値によって異なります。

## 値

`content` 属性で受け入れる値の型は、`name` の値によって異なります。
具体的な書式や種類については、[`<meta>` `name` 属性](/ja/docs/Web/HTML/Reference/Elements/meta/name) ページをご覧ください。

## 例

### 文書のメタ説明の設定

次の `<meta>` タグは、`name=description` を使用して、文書に「メタディスクリプション」を設定します。
`content` 属性は、メタデータの値を提供します。

```html
<meta
  name="description"
  content="HTML リファレンスでは、すべての要素および属性について、すべての要素に適用されるグローバル属性も含めて説明しています。" />
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- `<meta>` [`name`](/ja/docs/Web/HTML/Reference/Elements/meta/name) 属性
