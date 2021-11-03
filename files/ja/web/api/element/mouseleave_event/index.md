---
title: 'Element: mouseleave イベント'
slug: Web/API/Element/mouseleave_event
tags:
  - API
  - DOM
  - Element
  - イベント
  - MouseEvent
  - リファレンス
  - マウス
  - mouseleave
  - move
browser-compat: api.Element.mouseleave_event
translation_of: Web/API/Element/mouseleave_event
---
{{APIRef}}

**`mouseleave`** イベントは、ポインティングデバイス (ふつうはマウス) のカーソルが要素 ({{domxref("Element")}}) の外に移動したときに発行されます。

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
        {{domxref("GlobalEventHandlers.onmouseleave", "onmouseleave")}}
      </td>
    </tr>
  </tbody>
</table>

`mouseleave` と {{domxref("Element/mouseout_event", "mouseout")}} はよく似ていますが、 `mouseleave` はバブリングしないのに対して `mouseout` はバブリングするという点が異なります。すなわち `mouseleave` はポインターがその要素*および*すべての子孫を出たときに発行されるのに対し、 `mouseout` はポインターがその要素*または*その要素の子孫のうちの一つを出たときに (ポインターがまだその要素内にあったとしても) 発行されます。

#### `mouseleave` イベントの動作

![](mouseleave.png)

階層内のそれぞれの要素からポインターが出たとき、 `mouseleave` イベントが一つずつそれぞれの要素に送られます。ここで、ポインターが 4 つの要素の階層にあるテキストから div が表す領域の外に出ると、4 つのイベントが 4 つの要素に送られます。

#### `mouseout` イベントの動作

![](mouseout.png)

単一の `mouseout` イベントが DOM ツリーの最も深い要素に送信され、ハンドラーによって取り消されるかルートに達するまで、上にバブリングしていきます。

## 例

[`mouseout`](/ja/docs/Web/API/Element/mouseout_event#examples) のドキュメントには、 `mouseout` と `mouseleave` との違いを説明する例があります。

### mouseleave

次の例では `mouseenter` イベントを使用して、マウスが `<div>` に割り当てられた空間に入ったときにその境界線を変更しています。次に、 `mouseenter` イベントまたは `mouseleave` イベントの番号を指定してリストに項目を追加します。

#### HTML

```html
<div id='mouseTarget'>
 <ul id="unorderedList">
 - No events yet!
 </ul>
</div>
```

#### CSS

`<div>` がもっと目立つようにスタイル付けします。

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
  // 与えられたテキストで新しいテキストノードを生成する
  var newTextNode = document.createTextNode(text);

  // 新しい li 要素を生成
  var newListItem = document.createElement("li");

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
