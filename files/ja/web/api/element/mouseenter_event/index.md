---
title: 'Element: mouseenter イベント'
slug: Web/API/Element/mouseenter_event
tags:
  - API
  - Cursor
  - DOM
  - Element
  - イベント
  - インターフェイス
  - MouseEvent
  - リファレンス
  - マウス
  - mouseenter
  - ポインター
browser-compat: api.Element.mouseenter_event
translation_of: Web/API/Element/mouseenter_event
---
{{APIRef}}

**`mouseenter`** イベントは、ポインティングデバイス (通常はマウス) のホットスポットが最初にイベントが発行された要素の中に移動したときにその要素 ({{domxref("Element")}}) に発行されます。

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">バブリング</th>
      <td>なし</td>
    </tr>
    <tr>
      <th scope="row">キャンセル</th>
      <td>不可</td>
    </tr>
    <tr>
      <th scope="row">インターフェイス</th>
      <td>{{domxref("MouseEvent")}}</td>
    </tr>
    <tr>
      <th scope="row">イベントハンドラープロパティ</th>
      <td>
        {{domxref("GlobalEventHandlers.onmouseenter", "onmouseenter")}}
      </td>
    </tr>
  </tbody>
</table>

## 使用上の注意

`mouseenter` は {{domxref("Element/mouseover_event", "mouseover")}} と似ていますが、[バブリング](/ja/docs/Web/API/Event/bubbles)しない点と、ポインターが子孫の物理的な空間から自分自身の物理的な空間に移動したときに、子孫には送信されない点が異なります。

#### `mouseenter` イベントの動作

![](mouseenter.png)
要素の階層に入った場合、それぞれの要素に 1 つずつ `mouseenter` が送信されます。ここでポインターがテキストに達した時、階層の 4 つの要素に 4 つのイベントが送信されます。

#### `mouseover` イベントの動作

![](mouseover.png)
DOM ツリーの最も深い要素に 1 つの `mouseover` イベントが送信され、ハンドラーによってキャンセルされるかルートに達するまで階層を上にバブリングします。</div>

深い階層では、数多くの `mouseenter` イベントが送信され、とても重くなり、著しい性能の問題を引き起こすことがあります。このような場合は `mouseover` イベントを待ち受けした方が優れています。

対応する (マウスがコンテンツ領域から出たときに要素に発生する) `mouseleave` と組み合わせると、 `mouseenter` イベントは CSS の {{cssxref(':hover')}} 擬似クラスととても似た方法で動作します。

## 例

[`mouseover`](/ja/docs/Web/API/Element/mouseover_event#example) のドキュメントには、 `mouseover` と `mouseenter` の間の違いを説明する例があります。

### mouseenter

以下は端的な例ですが、 `mouseenter` イベントを使用して、マウスが割り当てられた空間に入ったときに `div` の境界を変化させます。そして、リストに `mouseenter` または `mouseleave` イベントの回数を示す項目を追加します。

#### HTML

```html
<div id='mouseTarget'>
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
  width:15rem;
  border:1px solid #333;
}
```

#### JavaScript

```js
var enterEventCount = 0;
var leaveEventCount = 0;
const mouseTarget = document.getElementById('mouseTarget');
const unorderedList = document.getElementById('unorderedList');

mouseTarget.addEventListener('mouseenter', e => {
  mouseTarget.style.border = '5px dotted orange';
  enterEventCount++;
  addListItem('This is mouseenter event ' + enterEventCount + '.');
});

mouseTarget.addEventListener('mouseleave', e => {
  mouseTarget.style.border = '1px solid #333';
  leaveEventCount++;
  addListItem('This is mouseleave event ' + leaveEventCount + '.');
});

function addListItem(text) {
  // 指定されたテキストを使用して新しいテキストノードを生成する
  var newTextNode = document.createTextNode(text);

  // 新しい li 要素を生成する
  var newListItem = document.createElement("li");

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
