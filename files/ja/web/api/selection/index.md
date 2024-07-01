---
title: Selection
slug: Web/API/Selection
---

{{ ApiRef("Selection API") }}

**`Selection`** オブジェクトは、ユーザーが選択したテキストの範囲、またはキャレットの現在の位置を表します。検査や操作のために `Selection` オブジェクトを取得するには、 {{DOMxRef("window.getSelection()")}} を呼び出してください。

ユーザーは、左から右（文書順）または右から左（文書と逆順）に選択することができます。アンカー (**_anchor_**) はユーザーが選択を開始した場所、フォーカス (**_focus_**) はユーザーが選択を終了した場所である。デスクトップマウスで選択する場合、アンカーはマウスボタンを押した場所に置かれ、フォーカスはマウスボタンを離した場所に置かれます。

> **メモ:** アンカーとフォーカスは、選択範囲の開始位置と終了位置と混同しないようにしましょう。アンカーはフォーカスの前に置かれることもあればその逆もあり、 選択の方向によって異なります。

## プロパティ

- {{DOMxRef("Selection.anchorNode")}} {{ReadOnlyInline}}
  - : 選択範囲を開始する {{DOMxRef("Node")}} を返します。選択範囲が文書内に存在しない場合（例：クリックされなかった iframe）には `null` を返すことがあります。
- {{DOMxRef("Selection.anchorOffset")}} {{ReadOnlyInline}}
  - : 選択部分のアンカーの `anchorNode` 内でのオフセットを表す値を返します。 `anchorNode` がテキストノードであった場合、これはアンカーに先行する anchorNode 内の文字数です。 `anchorNode` が要素であった場合、これはアンカーに先行する `anchorNode` の子ノードの数です。
- {{DOMxRef("Selection.focusNode")}} {{ReadOnlyInline}}
  - : 選択範囲が終了する {{DOMxRef("Node")}} を返します。選択範囲が文書内に存在しない場合（例えば、クリックされなかった `iframe` 内の場合）には `null` を返すことがあります。
- {{DOMxRef("Selection.focusOffset")}} {{ReadOnlyInline}}
  - : 選択部分のアンカーの `focusNode` 内でのオフセットを表す値を返します。 `focusNode` がテキストであった場合、これは `focusNode` 内でフォーカスに先行する文字数です。 `focusNode` が要素であった場合、フォーカスの前にある `focusNode` の子ノードの数を表します。
- {{DOMxRef("Selection.isCollapsed")}} {{ReadOnlyInline}}
  - : 選択範囲の始点と終点が同じ位置にあるかどうかを示す論理値を返します。
- {{DOMxRef("Selection.rangeCount")}} {{ReadOnlyInline}}
  - : 選択範囲に含まれる範囲の数を返します。
- {{DOMxRef("Selection.type")}} {{ReadOnlyInline}}
  - : 現在の選択部分の型を記述した文字列を返します。

## メソッド

- {{DOMxRef("Selection.addRange()")}}
  - : {{DOMxRef("Range")}} オブジェクトを選択範囲に追加します。
- {{DOMxRef("Selection.collapse()")}}
  - : 現在の選択範囲をこの点まで折りたたみます。
- {{DOMxRef("Selection.collapseToEnd()")}}
  - : 選択範囲を終端まで折りたたみます。
- {{DOMxRef("Selection.collapseToStart()")}}
  - : 選択範囲を先頭まで折りたたみます。
- {{DOMxRef("Selection.containsNode()")}}
  - : あるノードが選択範囲に含まれるかどうかを示します。
- {{DOMxRef("Selection.deleteFromDocument()")}}
  - : 選択部分の内容を文書から削除します。
- {{DOMxRef("Selection.extend()")}}
  - : 選択範囲のフォーカスをこの点に移動させる。
- {{DOMxRef("Selection.getRangeAt()")}}
  - : 現在選択されている範囲のうちの一つを表す {{DOMxRef("Range")}} オブジェクトを返します。
- {{DOMxRef("Selection.modify()")}} {{Non-standard_Inline}}
  - : 現在の選択範囲を変更します。
- {{DOMxRef("Selection.removeRange()")}}
  - : 選択範囲から範囲を削除します。
- {{DOMxRef("Selection.removeAllRanges()")}}
  - : 選択範囲からすべての範囲を削除します。
- {{DOMxRef("Selection.selectAllChildren()")}}
  - : 指定されたノードのすべての子ノードを選択範囲に追加します。
- {{DOMxRef("Selection.setBaseAndExtent()")}}
  - : 指定した 2 つの DOM ノードのすべてまたは一部、およびそれらの間にあるコンテンツを含む範囲を選択範囲に設定します。
- {{DOMxRef("Selection.toString()")}}
  - : 選択オブジェクトが現在表現している文字列、すなわち現在選択されている文字列を返します。

## メモ

### 選択範囲の文字列表現

{{DOMxRef("Selection.toString()")}} メソッドを呼び出すと、選択範囲に含まれるテキストなどを返すことができます。

```js
const selObj = window.getSelection();
window.alert(selObj);
```

なお、選択オブジェクトを `window.alert` の引数として使用すると、そのオブジェクトの `toString` メソッドが呼び出されます。

### 選択範囲に複数の範囲がある場合

選択オブジェクトは、ユーザーが選択した{{DOMxRef("Range")}}を表します。通常、1つの範囲のみを保持し、以下のようにアクセスします。

```js
const selObj = window.getSelection();
const range = selObj.getRangeAt(0);
```

- `selObj` は Selection オブジェクト
- `range` は {{DOMxRef("Range")}} オブジェクト

[選択 API 仕様書のメモ](https://www.w3.org/TR/selection-api/#h_note_15)にあるように、選択 API は当初 Netscape 社によって作成され、複数の範囲を許容していました（例えば {{HTMLElement("table")}} から列を選択できるようにする）。しかし、 Gecko 以外のブラウザーは複数の範囲を実装しておらず、仕様でも選択範囲は常に一つであることが要求されています。

### 選択と入力のフォーカス

選択と入力フォーカス（{{DOMxRef("Document.activeElement")}} で示される）には、ブラウザーによって異なる複雑な関係があります。ブラウザー間の互換性のあるコードでは、これらを別個に扱う方がよいでしょう。

Safari と Chrome は（Firefox と異なり）現在、プログラムで選択範囲を変更する場合、選択範囲を含む要素にフォーカスを当てます。将来的には変更される可能性があります（[W3C bug 14383](https://www.w3.org/Bugs/Public/show_bug.cgi?id=14383) と [WebKit bug 38696](https://webkit.org/b/38696) を参照して下さい）。

### 編集ホストのフォーカス変更に関する選択 API の挙動

選択 API には、特定のメソッドが呼ばれた後に*編集ホスト*のフォーカスの動作がどのように変わるかを制御する共通の動作（つまり、ブラウザー間で共有される）があります。

その動作は次のとおりです。

1. 編集中のホストは、直前の選択がその外にあった場合、フォーカスを得ることができます。
2. 選択 API のメソッドが呼び出され、編集ホスト内の選択範囲に新たな選択範囲が発生します。
3. その後、フォーカスは編集ホストに移ります。

> **メモ:** 選択 API のメソッドは編集ホストにのみフォーカスを移動でき、他のフォーカス可能な要素には移動できません（例: {{HTMLElement("a")}}）。

上記の動作は、以下のメソッドを使用して選択された場合にも適用されます。

- {{DOMxRef("Selection.collapse()")}}
- {{DOMxRef("Selection.collapseToStart()")}}
- {{DOMxRef("Selection.collapseToEnd()")}}
- {{DOMxRef("Selection.extend()")}}
- {{DOMxRef("Selection.selectAllChildren()")}}
- {{DOMxRef("Selection.addRange()")}}
- {{DOMxRef("Selection.setBaseAndExtent()")}}

また、以下のメソッドを使用して {{DOMxRef("Range")}} を変更した場合も同様です。

- {{DOMxRef("Range.setStart()")}}
- {{DOMxRef("Range.setEnd()")}}
- {{DOMxRef("Range.setStartBefore()")}}
- {{DOMxRef("Range.setStartAfter()")}}
- {{DOMxRef("Range.setEndBefore()")}}
- {{DOMxRef("Range.setEndAfter()")}}
- {{DOMxRef("Range.collapse()")}}
- {{DOMxRef("Range.selectNode()")}}
- {{DOMxRef("Range.selectNodeContents()")}}

## 用語集

この分野で使用されるその他の重要な用語です。

- **アンカー**
  - : 選択範囲のアンカーは、選択範囲の始点です。マウスで選択する場合、アンカーは文書内で最初にマウスボタンが押された位置となります。ユーザーがマウスやキーボードを使用して選択範囲を変更しても、アンカーは移動しません。
- **編集ホスト**
  - : 編集可能な要素（例えば、[`contenteditable`](/ja/docs/Web/HTML/Global_attributes#contenteditable)が設定された HTML 要素、または {{DOMxRef("Document.designMode", "designMode")}} が有効になっている文書の HTML 子要素など）。
- **選択フォーカス**

  - : 選択範囲の _フォーカス_ は、選択範囲の終点です。マウスで選択する場合、フォーカスは文書内でマウスボタンが離された位置にあります。ユーザーがマウスやキーボードを使用して選択範囲を変更すると、フォーカスは移動した選択範囲の終点になります。

    > **メモ:** これは、{{DOMxRef("document.activeElement")}}が返すような、文書のフォーカスされた要素と同じものではありません。

- **範囲**

  - : 範囲とは、文書内の連続した部分のことです。範囲には、ノード全体やノードの一部（テキストノードの一部など）を含めることができます。通常、ユーザーは一度に一つの範囲しか選択しませんが、ユーザーが複数の範囲を選択することも可能です (例: <kbd>Control</kbd> キーを使用するなど)。範囲は {{DOMxRef("range")}} オブジェクトとして選択範囲から取得することができます。範囲オブジェクトは DOM 経由で作成することもでき、プログラムによって選択範囲に追加したり削除したりすることができます。

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{DOMxRef("Window.getSelection")}}, {{DOMxRef("Document.getSelection")}}, {{DOMxRef("Range")}}
- 選択関連イベント: {{domxref("Document/selectionchange_event", "selectionchange")}} および {{domxref("Document/selectstart_event", "selectstart")}}
- HTML の input は、選択範囲を操作するための、よりシンプルなヘルパー API を提供しています。（{{DOMxRef("HTMLInputElement.setSelectionRange()")}} を参照）
- {{DOMxRef("Document.activeElement")}}, {{DOMxRef("HTMLElement.focus")}}, {{DOMxRef("HTMLElement.blur")}}
