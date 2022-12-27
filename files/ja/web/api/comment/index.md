---
title: Comment
slug: Web/API/Comment
---

{{ApiRef("DOM")}}

**`Comment`** インターフェイスは、マークアップ内にある注意書きのテキストを表します。これらは通常の閲覧時には表示されず、このようなコメントはブラウザのソースビュー表示時に閲覧可能です。HTML や XML でコメントは、「`<!--`」と「`-->`」で囲んだコンテンツとして記述します。XML 構文においては、「`--`」をコメント内に記述することはできません。

{{InheritanceDiagram}}

## プロパティ

_このインターフェイスに固有のプロパティはありませんが、親インターフェイスである {{domxref("CharacterData")}}、および間接的に {{domxref("Node")}} のプロパティを継承します。_

## コンストラクター

- {{domxref("Comment.Comment()", "Comment()")}} {{experimental_inline}}
  - : 引数をテキストコンテンツとして持つ、`Comment` オブジェクトを返します。

## メソッド

_このインターフェイスに固有のメソッドはありませんが、親インターフェイスである {{domxref("CharacterData")}}、および間接的に {{domxref("Node")}} のメソッドを継承します。_

## 仕様

| 仕様書                                                                                       | 策定状況                         | コメント                                        |
| -------------------------------------------------------------------------------------------- | -------------------------------- | ----------------------------------------------- |
| {{SpecName('DOM WHATWG', '#comment', 'Comment')}}                             | {{Spec2('DOM WHATWG')}} | コンストラクタを追加。                          |
| {{SpecName('DOM3 Core', 'core.html#ID-1728279322', 'Comment')}}         | {{Spec2('DOM3 Core')}}     | {{SpecName('DOM2 Core')}} から変更なし。 |
| {{SpecName('DOM2 Core', 'core.html#ID-1728279322', 'Comment')}}         | {{Spec2('DOM2 Core')}}     | {{SpecName('DOM1')}} から変更なし。     |
| {{SpecName('DOM1', 'level-one-core.html#ID-1728279322', 'Comment')}} | {{Spec2('DOM1')}}         | 最初期の定義                                    |

## ブラウザー実装状況

{{Compat("api.Comment")}}

## 関連情報

- [DOM インターフェイスの索引](/ja/docs/DOM/DOM_Reference)
