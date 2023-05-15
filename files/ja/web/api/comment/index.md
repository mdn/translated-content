---
title: Comment
slug: Web/API/Comment
l10n:
  sourceCommit: e811fc31b67e145c5882e8e3f128d1938c627a51
---

{{ ApiRef("DOM") }}

**`Comment`** インターフェイスは、マークアップ内にある注意書きのテキストを表します。これらは通常の閲覧時には表示されず、このようなコメントはブラウザーのソースビュー表示時に閲覧可能です。

HTML や XML でコメントは、'`<!--`' と '`-->`' で囲んだコンテンツとして記述します。XML 構文においては、'`--`' をコメント内に記述することはできません。

{{InheritanceDiagram}}

## プロパティ

_このインターフェイスに固有のプロパティはありませんが、親インターフェイスである {{domxref("CharacterData")}}、および間接的に {{domxref("Node")}} のプロパティを継承しています。_

## コンストラクター

- {{ domxref("Comment.Comment()", "Comment()") }}
  - : 引数をテキストコンテンツとして持つ、新しい `Comment` オブジェクトを返します。存在しない場合の既定値は、空文字列 `''` です。

## メソッド

_このインターフェイスに固有のメソッドはありませんが、親インターフェイスである {{domxref("CharacterData")}}、および間接的に {{domxref("Node")}} のメソッドを継承しています。_

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [DOM インターフェイスの索引](/ja/docs/Web/API/Document_Object_Model)
