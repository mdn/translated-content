---
title: "Comment: Comment() コンストラクター"
slug: Web/API/Comment/Comment
l10n:
  sourceCommit: e811fc31b67e145c5882e8e3f128d1938c627a51
---

{{ApiRef("DOM")}}

**`Comment()`** コンストラクターは、引数に指定された文字列を内容とする {{domxref("Comment")}} オブジェクトを返します。

## 構文

```js-nolint
new Comment()
new Comment(aString)
```

### 引数

- `aString` {{optional_inline}}

### 返値

新しい {{domxref("Comment")}} です。中には `aString` が入るか、引数が与えられなかった場合は空文字列が入ります。

## 例

```js
let comment = new Comment("Test");
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [DOM インターフェイスの索引](/ja/docs/Web/API/Document_Object_Model)
- {{domxref("Document.createComment()")}} はこのコンストラクターの古い代替形式です。
