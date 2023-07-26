---
title: "Element: mouseenter イベント"
short-title: mouseenter
slug: Web/API/Element/mouseenter_event
l10n:
  sourceCommit: 757f33efcbdf2de4995920e41ab7dd20f0a9192b
---

{{APIRef}}

**`mouseenter`** イベントは、ポインティングデバイス (通常はマウス) のホットスポットが最初にイベントが発行された要素の中に移動したときにその要素 ({{domxref("Element")}}) に発行されます。

## 構文

このイベント名を {{domxref("EventTarget.addEventListener", "addEventListener()")}} 等のメソッドで使用するか、イベントハンドラープロパティを設定するかしてください。

```js
addEventListener("mouseenter", (event) => {});

onmouseenter = (event) => {};
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
  - : マウスポインターのローカル座標（DOM コンテンツ）における X 座標です。
- {{domxref("MouseEvent.clientY")}} {{ReadOnlyInline}}
  - : マウスポインターのローカル座標（DOM コンテンツ）における Y 座標です。
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
  - : グローバル（画面）座標におけるマウスポインターの X 座標です。
- {{domxref("MouseEvent.screenY")}} {{ReadOnlyInline}}
  - : グローバル（画面）座標におけるマウスポインターの Y 座標です。
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

## 使用上の注意

`mouseenter` は {{domxref("Element/mouseover_event", "mouseover")}} と似ていますが、[バブリング](/ja/docs/Web/API/Event/bubbles)しない点と、ポインターが子孫の物理的な空間から自分自身の物理的な空間に移動したときに、子孫には送信されない点が異なります。

#### `mouseenter` イベントの動作

![mouseenter の動作図](mouseenter.png)
要素の階層に入った場合、それぞれの要素に 1 つずつ `mouseenter` が送信されます。ここでポインターがテキストに達した時、階層の 4 つの要素に 4 つのイベントが送信されます。

#### `mouseover` イベントの動作

![mouseover の動作図](mouseover.png)
DOM ツリーの最も深い要素に 1 つの `mouseover` イベントが送信され、ハンドラーによってキャンセルされるかルートに達するまで階層を上にバブリングします。

深い階層では、数多くの `mouseover` イベントが送信され、とても重くなり、著しい性能の問題を引き起こすことがあります。このような場合は `mouseenter` イベントを待ち受けした方が優れています。

対応する（マウスがコンテンツ領域から出たときに要素に発生する）`mouseleave` と組み合わせると、 `mouseenter` イベントは CSS の {{cssxref(':hover')}} 擬似クラスととても似た方法で動作します。

## 例

[`mouseover`](/ja/docs/Web/API/Element/mouseover_event#example) のドキュメントには、`mouseover` と `mouseenter` の間の違いを説明する例があります。

### mouseenter

以下は端的な例ですが、`mouseenter` イベントを使用して、マウスが割り当てられた空間に入ったときに `div` の境界を変化させます。そして、リストに `mouseenter` または `mouseleave` イベントの回数を示す項目を追加します。

#### HTML

```html
<div id="mouseTarget">
  <ul id="unorderedList">
    <li>No events yet!</li>
  </ul>
</div>
```

#### CSS

`div` を整形してもっと目立つようにします。

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
  // 指定されたテキストを使用して新しいテキストノードを生成する
  const newTextNode = document.createTextNode(text);

  // 新しい li 要素を生成する
  const newListItem = document.createElement("li");

  // テキストノードを li 要素に追加する
  newListItem.appendChild(newTextNode);

  // リストに新しく生成したリスト項目を追加する
  unorderedList.appendChild(newListItem);
}
```

### 結果

{{EmbedLiveSample('mouseenter')}}

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [イベントの紹介](/ja/docs/Learn/JavaScript/Building_blocks/Events)
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
