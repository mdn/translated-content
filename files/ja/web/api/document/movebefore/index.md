---
title: "Document: moveBefore() メソッド"
short-title: moveBefore()
slug: Web/API/Document/moveBefore
l10n:
  sourceCommit: cf16851e73da29823438198c4f0efcb7026b7d10
---

{{APIRef("DOM")}}

**`moveBefore()`** は {{domxref("Document")}} インターフェイスのメソッドで、指定された {{domxref("Node")}} を DOM ノード `Document` 内の直接の子として、指定された参照ノードの前に移動します。

## 構文

```js-nolint
moveBefore(movedNode, referenceNode)
```

### 引数

- `movedNode`
  - : 移動するノードを表す {{domxref("Node")}}。なお、これは {{domxref("Element")}} または {{domxref("CharacterData")}} ノードでなければなりません。
- `referenceNode`
  - : {{domxref("Node")}} であり、 `movedNode` の移動先はこの前になります。または `null` です。この値が `null` であった場合、`movedNode` は `Document` の子要素の末尾に挿入されます。

### 返値

なし ({{jsxref("undefined")}})。

### 例外

- `HierarchyRequestError` {{jsxref("TypeError")}}
  - : 以下のいずれかの場面で発生します。
    - 指定された `movedNode` がこの文書に属していない。
    - 指定された `movedNode` は {{domxref("Element")}} または {{domxref("CharacterData")}} ノードではない。
    - `movedNode` をこの文書の {{glossary("doctype")}} （{{domxref("DocumentType")}} オブジェクトで表される）の前に移動しようとした。
- `NotFoundError` {{jsxref("TypeError")}}
  - : 指定された `referenceNode` は、`moveBefore()` を呼び出したノードの子ノードではない。つまり、`movedNode` の移動先ノードの子ノードではない。
- `TypeError` {{jsxref("TypeError")}}
  - : 2 つ目の引数が指定されていない。

## 解説

`moveBefore()` メソッドは、指定されたノードをこの DOM 内の新しい場所に移動します。これは `Node.insertBefore()` メソッドと同様の機能を提供しますが、ノードを除去せずに、再挿入される点が異なります。つまり、 `insertBefore()` や類似のメカニズムで移動した場合にリセットされる、次のようなノードの状態が、移動後も保持されます。

- [アニメーション](/ja/docs/Web/CSS/Guides/Animations)や[トランジション](/ja/docs/Web/CSS/Guides/Transitions)の状態。
- {{htmlelement("iframe")}} の読み込み状態。
- 操作の状態（例えば {{cssxref(":focus")}} や {{cssxref(":active")}}）。
- 要素の[全画面](/ja/docs/Web/API/Fullscreen_API)の状態。
- [ポップオーバー](/ja/docs/Web/API/Popover_API)の開閉状態。
- {{htmlelement("dialog")}} 要素のモーダル状態（モーダルダイアログは閉じられません）。

{{htmlelement("video")}} および {{htmlelement("audio")}} 要素の再生状態は、以上の一覧には含まれません。これらの要素は、使用される仕組みに関わらず、除去され再挿入された後も状態を保持するからです。

{{domxref("MutationObserver")}} を使用して DOM の変更を監視する場合、`moveBefore()` で移動されたノードは[除去されたノード](/ja/docs/Web/API/MutationRecord/removedNodes)と[追加されたノード](/ja/docs/Web/API/MutationRecord/addedNodes)として記録されます。

`moveBefore()` メソッドは、`Document` ノードに対して呼び出しても特に有用ではありません。要素以外の用途もいくつかあり、例えば `moveBefore()` を使用して `Document` のルート周辺のコメントノードを移動させることが可能です。しかし、個々の `DocumentFragment` や `Element` に対してそれを呼び出す用途を探す方がはるかに一般的です。詳細は {{domxref("DocumentFragment.moveBefore()")}} および {{domxref("Element.moveBefore()")}} を参照してください。

### `moveBefore()` の制約

`moveBefore()` を使用する際には、いくつか留意すべき制約があります。

- 同じ文書内でノードを移動する場合にのみ、動作します。
- DOM に接続されていないノードを既に接続済みの親ノードに移そうとした場合、またはその逆の場合、動作しません。

このような場合、`moveBefore()` は `HierarchyRequestError` 例外で失敗します。上記の制約が具体的な用途で必要となる場合、代わりに {{domxref("Node.insertBefore()")}} を使用するか、[`try...catch`](/ja/docs/Web/JavaScript/Reference/Statements/try...catch) を使用して、このようなケースで発生するエラーを処理する必要があります。

## 例

### `moveBefore()` でコメントノードを移動

このデモでは、`document.moveBefore()` を使用してコメントノードをDOM内で移動する方法を示して表示させます。

#### HTML

この HTML は最小限のテンプレートであり、{{htmlelement("body")}} 内にコメントがあるのが特徴です。

```html live-sample___movebefore-comment
<!doctype html>
<html lang="ja">
  <head>
    <meta charset="utf-8" />
    <title>document.moveBefore() の例</title>
  </head>
  <body>
    <!-- このコメントは文書の終わりに置くべきである -->
    <p>コンテンツ</p>
  </body>
</html>
```

#### JavaScript

このスクリプトでは、`<body>` 要素のすべて {{domxref("Node.childNodes", "childNodes")}} をループ処理します。{{domxref("Node.nodeType", "nodeType")}} の値が `8`（コメントノードを示す）のノードを見つけた場合、その参照を `commentNode` という変数に保存します。次に、`document.moveBefore()` を呼び出し、コメントノードを移動されることを指定し、2 つ目の引数として `null` を指定して、コメントを `Document` の子ノードの末尾に挿入します。

```js live-sample___movebefore-comment
let commentNode;

for (node of document.querySelector("body").childNodes) {
  if (node.nodeType === 8) {
    commentNode = node;
  }
}

document.moveBefore(commentNode, null);
```

#### 結果

レンダリングされた例は以下のようになります。

{{EmbedLiveSample("movebefore-comment", "100%", "60px")}}

ブラウザーの開発者ツールでこの例を調べると、コメントが文書の終わり、終了タグ `</html>` の後に移動されていることに気づくでしょう。

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{domxref("DocumentFragment.moveBefore()")}}
- {{domxref("Element.moveBefore()")}}
- {{domxref("Node.insertBefore()")}}
