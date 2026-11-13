---
title: "Element: mouseleave イベント"
short-title: mouseleave
slug: Web/API/Element/mouseleave_event
l10n:
  sourceCommit: 5b20f5f4265f988f80f513db0e4b35c7e0cd70dc
---

{{APIRef}}

**`mouseleave`** イベントは、ポインティングデバイス（ふつうはマウス）のカーソルが要素 ({{domxref("Element")}}) の外に移動したときに発行されます。

`mouseleave` と {{domxref("Element/mouseout_event", "mouseout")}} はよく似ていますが、 `mouseleave` はバブリングしないのに対して `mouseout` はバブリングするという点が異なります。すなわち `mouseleave` はポインターがその要素*および*すべての子孫を出たときに発行されるのに対し、 `mouseout` はポインターがその要素、またはその要素の子孫のうちの一つを出たときに（ポインターがまだその要素内にあったとしても）発行されます。

要素がDOMから置き換えられたり除去されたりした場合は、 `mouseleave` および `mouseout` イベントは発生しません。

「要素の外へ移動」とは、 DOM ツリーにおける要素の位置を指し、視覚的な位置を指すものではないことに注意してください。例えば、 2 つの兄弟要素が位置指定され、一方が他方の内部に配置されている場合、外側の要素から内側の要素に移動すると、ポインターが外側の要素の範囲内にあったとしても、内側の要素で `mouseleave` が発生します。

## 構文

このイベント名を {{domxref("EventTarget.addEventListener", "addEventListener()")}} 等のメソッドで使用するか、イベントハンドラープロパティを設定するかしてください。

```js
addEventListener("mouseleave", (event) => {});

onmouseleave = (event) => {};
```

## イベント型

{{domxref("MouseEvent")}} です。 {{domxref("Event")}} を継承しています。

{{InheritanceDiagram("MouseEvent")}}

## イベントプロパティ

_親である {{domxref("UIEvent")}} および {{domxref("Event")}} から継承したプロパティもあります_。

- {{domxref("MouseEvent.altKey")}} {{ReadOnlyInline}}
  - : このマウスイベントが発行されたときに <kbd>alt</kbd> キーが押されていた場合は `true` を返します。
- {{domxref("MouseEvent.button")}} {{ReadOnlyInline}}
  - : このマウスイベントが発行されたときに押されていたボタンの番号です（もしあれば）。
- {{domxref("MouseEvent.buttons")}} {{ReadOnlyInline}}
  - : このマウスイベントが発行されたときに押されていたボタンです（もしあれば）。
- {{domxref("MouseEvent.clientX")}} {{ReadOnlyInline}}
  - : [ビューポート座標](/ja/docs/Web/API/CSSOM_view_API/Coordinate_systems#ビューポート)におけるマウスポインターの X 座標です。
- {{domxref("MouseEvent.clientY")}} {{ReadOnlyInline}}
  - : [ビューポート座標](/ja/docs/Web/API/CSSOM_view_API/Coordinate_systems#ビューポート)におけるマウスポインターの Y 座標です。
- {{domxref("MouseEvent.ctrlKey")}} {{ReadOnlyInline}}
  - : このマウスイベントが発行されたときに <kbd>control</kbd> キーが押されていた場合は `true` を返します。
- {{domxref("MouseEvent.layerX")}} {{Non-standard_inline}} {{ReadOnlyInline}}
  - : このイベントの現在のレイヤーにおける相対の水平座標を返します。
- {{domxref("MouseEvent.layerY")}} {{Non-standard_inline}} {{ReadOnlyInline}}
  - : このイベントの現在のレイヤーにおける相対の垂直座標を返します。
- {{domxref("MouseEvent.metaKey")}} {{ReadOnlyInline}}
  - : このマウスイベントが発行されたときに <kbd>meta</kbd> キーが押されていた場合は `true` を返します。
- {{domxref("MouseEvent.movementX")}} {{ReadOnlyInline}}
  - : 前回の {{domxref("Element/mousemove_event", "mousemove")}} イベントの位置から相対的なマウスポインターの X 座標です。
- {{domxref("MouseEvent.movementY")}} {{ReadOnlyInline}}
  - : 前回の {{domxref("Element/mousemove_event", "mousemove")}} イベントの位置から相対的なマウスポインターの Y 座標です。
- {{domxref("MouseEvent.offsetX")}} {{ReadOnlyInline}}
  - : 対象ノードのパディング辺からの相対的なマウスポインターの X 座標です。
- {{domxref("MouseEvent.offsetY")}} {{ReadOnlyInline}}
  - : 対象ノードのパディング辺からの相対的なマウスポインターの Y 座標です。
- {{domxref("MouseEvent.pageX")}} {{ReadOnlyInline}}
  - : 文書全体からの相対的なマウスポインターの X 座標です。
- {{domxref("MouseEvent.pageY")}} {{ReadOnlyInline}}
  - : 文書全体からの相対的なマウスポインターの Y 座標です。
- {{domxref("MouseEvent.relatedTarget")}} {{ReadOnlyInline}}
  - : もしあれば、イベントの副ターゲットです。
- {{domxref("MouseEvent.screenX")}} {{ReadOnlyInline}}
  - : [スクリーン座標](/ja/docs/Web/API/CSSOM_view_API/Coordinate_systems#スクリーン)におけるマウスポインターの X 座標です。
- {{domxref("MouseEvent.screenY")}} {{ReadOnlyInline}}
  - : [スクリーン座標](/ja/docs/Web/API/CSSOM_view_API/Coordinate_systems#スクリーン)におけるマウスポインターの Y 座標です。
- {{domxref("MouseEvent.shiftKey")}} {{ReadOnlyInline}}
  - : このマウスイベントが発行されたときに <kbd>shift</kbd> キーが押されていた場合は `true` を返します。
- {{domxref("MouseEvent.mozInputSource")}} {{non-standard_inline()}} {{ReadOnlyInline}}
  - : イベントを発生させた機器の種類（`MOZ_SOURCE_*` 定数のいずれか）。
    これにより、例えばマウスイベントが実際のマウスによって生成されたのか、タッチイベントによって生成されたのかを判断することができます（これはイベントに関連付けられた座標を解釈する精度に影響するかもしれません）。
- {{domxref("MouseEvent.webkitForce")}} {{non-standard_inline()}} {{ReadOnlyInline}}
  - : クリックしたときに適用された圧力です。
- {{domxref("MouseEvent.x")}} {{ReadOnlyInline}}
  - : {{domxref("MouseEvent.clientX")}} の別名です。
- {{domxref("MouseEvent.y")}} {{ReadOnlyInline}}
  - : {{domxref("MouseEvent.clientY")}} の別名です。

### `mouseleave` イベントの動作

![mouseleave の動作の図](mouseleave.png)

階層内のそれぞれの要素からポインターが出たとき、 `mouseleave` イベントが一つずつそれぞれの要素に送られます。ここで、ポインターが 4 つの要素の階層にあるテキストから div が表す領域の外に出ると、4 つのイベントが 4 つの要素に送られます。

### `mouseout` イベントの動作

![mouseout の動作の図](mouseout.png)

単一の `mouseout` イベントが DOM ツリーの最も深い要素に送信され、ハンドラーによって取り消されるかルートに達するまで、上にバブリングしていきます。

## 例

[`mouseout`](/ja/docs/Web/API/Element/mouseout_event#例) のドキュメントには、 `mouseout` と `mouseleave` との違いを説明する例があります。

### mouseleave

次の例では `mouseenter` イベントを使用して、マウスが `<div>` に割り当てられた空間に入ったときにその境界線を変更しています。次に、 `mouseenter` イベントまたは `mouseleave` イベントの番号を指定してリストに項目を追加します。

#### HTML

```html
<div id="mouseTarget">
  <ul id="unorderedList">
    <li>No events yet!</li>
  </ul>
</div>
```

#### CSS

`<div>` がもっと目立つようにスタイル付けします。

```css
#mouseTarget {
  box-sizing: border-box;
  width: 15rem;
  border: 1px solid #333;
}
```

#### JavaScript

```js
let enterEventCount = 0;
let leaveEventCount = 0;
const mouseTarget = document.getElementById("mouseTarget");
const unorderedList = document.getElementById("unorderedList");

mouseTarget.addEventListener("mouseenter", (e) => {
  mouseTarget.style.border = "5px dotted orange";
  enterEventCount++;
  addListItem(`This is mouseenter event ${enterEventCount}.`);
});

mouseTarget.addEventListener("mouseleave", (e) => {
  mouseTarget.style.border = "1px solid #333";
  leaveEventCount++;
  addListItem(`This is mouseleave event ${leaveEventCount}.`);
});

function addListItem(text) {
  // 与えられたテキストで新しいテキストノードを生成する
  const newTextNode = document.createTextNode(text);

  // 新しい li 要素を生成
  const newListItem = document.createElement("li");

  // テキストノードを li 要素に追加
  newListItem.appendChild(newTextNode);

  // 新しく生成されたリスト項目をリストへ追加
  unorderedList.appendChild(newListItem);
}
```

#### 結果

{{EmbedLiveSample('mouseleave')}}

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [学習: イベント入門](/ja/docs/Learn_web_development/Core/Scripting/Events)
- {{domxref("Element/mousedown_event", "mousedown")}}
- {{domxref("Element/mouseup_event", "mouseup")}}
- {{domxref("Element/mousemove_event", "mousemove")}}
- {{domxref("Element/click_event", "click")}}
- {{domxref("Element/dblclick_event", "dblclick")}}
- {{domxref("Element/mouseover_event", "mouseover")}}
- {{domxref("Element/mouseout_event", "mouseout")}}
- {{domxref("Element/mouseenter_event", "mouseenter")}}
- {{domxref("Element/mouseleave_event", "mouseleave")}}
- {{domxref("Element/contextmenu_event", "contextmenu")}}
