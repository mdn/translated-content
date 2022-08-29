---
title: セレクターを使用した DOM 要素の特定
slug: Web/API/Document_object_model/Locating_DOM_elements_using_selectors
tags:
  - 初心者向け
  - DOM
  - NeedsBeginnerUpdate
translation_of: Web/API/Document_object_model/Locating_DOM_elements_using_selectors
---
{{DefaultAPISidebar("DOM")}}

セレクター API により提供されるメソッドを用いると、一連の[セレクター](/ja/docs/Web/CSS/CSS_Selectors)に一致する要素 ({{domxref("Element")}}) ノードを DOM から簡単かつ素早く取り出すことができます。これは過去の技術よりもはるかに速く、必要な場所で、例えば、 JavaScript コードでループを使用して検索する必要があるアイテムを特定するために使います。

## NodeSelector インターフェース

この仕様書では、 {{domxref("Document")}}, {{domxref("DocumentFragment")}}, {{domxref("Element")}} インターフェースを実装しているすべてのオブジェクトに対して 2 つの新しいメソッドを追加しています。

- {{domxref("Element.querySelector", "querySelector()")}}
  - : ノードのサブツリー内で最初に一致した {{domxref("Element")}} ノードを返します。一致する要素がなかった場合は `null` を返します。
- {{domxref("Element.querySelectorAll", "querySelectorAll()")}}
  - : ノードのサブツリー内で一致するすべての `Element` ノードを含む {{domxref("NodeList")}} を返すか、一致するものが見つからなかった場合は空の `NodeList` を返します。

> **Note:** {{domxref("Element.querySelectorAll()", "querySelectorAll()")}} が返す {{domxref("NodeList")}} はライブではありません。すなわち、 DOM で行われた変更がコレクションに反映されません。これは他の DOM クエリメソッドがライブのノードリストを返すのと異なります。

例や詳細については、 {{domxref("Element.querySelector()")}} および {{domxref("Element.querySelectorAll()")}} メソッドの記事を参照してください。

## セレクター

セレクターのメソッドは[セレクター](/ja/docs/Web/CSS/CSS_Selectors)を受け入れて、どの要素または要素群を返すかを判断します。これは[セレクターリスト](/ja/docs/Web/CSS/Selector_list)を含みますので、単一の問い合わせで複数のセレクターをグループ化することができます。

ユーザーのプライバシーを保護するために、一部の[擬似クラス](/ja/docs/Web/CSS/Pseudo-classes)には対応していなかったり、異なる動作をしたりすることがあります。例えば {{cssxref(":visited")}} に一致するものは返されなかったり、 {{cssxref(":link")}} は {{cssxref(":any-link")}} と同様に扱われたりします。

要素のみが選択できますので、[擬似クラス](/ja/docs/Web/CSS/Pseudo-classes)には対応していません。

## 例

文書中ですべての段落要素 (`p`) のうち、 CSS のクラスが `warning` または `note` に指定されているものを抽出するには、次のようにします。

```js
const special = document.querySelectorAll("p.warning, p.note");
```

もちろん、次のように ID による指定も可能です。

```js
const el = document.querySelector("#main, #basic, #exclamation");
```

上記のコードが実行されると、`el` には ID が `main`、 `basic`、 `exclamation` である要素の内、最初の要素だけが格納されます。

## 関連情報

- [セレクター仕様書](https://drafts.csswg.org/selectors/)
- [CSS セレクター](/ja/docs/Web/CSS/CSS_Selectors)
- {{domxref("Element.querySelector()")}}
- {{domxref("Element.querySelectorAll()")}}
- {{domxref("Document.querySelector()")}}
- {{domxref("Document.querySelectorAll()")}}
