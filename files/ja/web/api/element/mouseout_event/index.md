---
title: "Element: mouseout イベント"
short-title: mouseout
slug: Web/API/Element/mouseout_event
l10n:
  sourceCommit: 757f33efcbdf2de4995920e41ab7dd20f0a9192b
---

{{APIRef}}

**`mouseout`** イベントは、ポインティングデバイス (通常はマウス) を使ってカーソルを移動させ、要素やその子の中からカーソルが出たときに、その要素 ({{domxref("Element")}}) に発行されます。

`mouseout` は、カーソルが子要素に入った場合にも要素に配信されますが、これは子要素が要素の可視領域を覆い隠すためです。

## 構文

このイベント名を {{domxref("EventTarget.addEventListener", "addEventListener()")}} 等のメソッドで使用するか、イベントハンドラープロパティを設定するかしてください。

```js
addEventListener("mouseout", (event) => {});

onmouseout = (event) => {};
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

## 例

以下の例は `mouseout` イベントの使い方を示しています。

### mouseout と mouseleave

以下の例は、`mouseout` と {{domxref("Element/mouseleave_event", "mouseleave")}} の各イベントの違いを説明しています。`mouseleave` イベントを {{HTMLElement("ul")}} に追加し、マウスが `<ul>` を出るたびにリストを紫色に着色するようにします。`mouseout` をリストに追加し、マウスがそこを出ると対象の要素をオレンジ色に着色するようにします。

これを試してみると、`mouseout` はそれぞれのリスト項目に配信されるのに対し、 `mouseleave` は項目の階層構造のおかげでリスト全体に行き、リストの項目は、その下にある `<ul>` を不明瞭にします。

#### HTML

```html
<ul id="test">
  <li>item 1</li>
  <li>item 2</li>
  <li>item 3</li>
</ul>
```

#### JavaScript

```js
const test = document.getElementById("test");

// マウスが <ul> を出るとリストを一時的に紫色にします
// ときに 1 度だけ実行されます
test.addEventListener(
  "mouseleave",
  (event) => {
    // mouseleave の対象を強調
    event.target.style.color = "purple";

    // 少し待ってから色をリセット
    setTimeout(() => {
      event.target.style.color = "";
    }, 1000);
  },
  false,
);

// マウスが出ると <li> を一時的にオレンジ色にします
test.addEventListener(
  "mouseout",
  (event) => {
    // highlight the mouseout target
    event.target.style.color = "orange";

    // 少し待ってから色をリセット
    setTimeout(() => {
      event.target.style.color = "";
    }, 500);
  },
  false,
);
```

#### 結果

{{EmbedLiveSample("mouseout_and_mouseleave", 640, 200)}}

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
- {{domxref("Element/mouseenter_event", "mouseenter")}}
- {{domxref("Element/mouseleave_event", "mouseleave")}}
- {{domxref("Element/contextmenu_event", "contextmenu")}}
