---
title: 'Element: contextmenu イベント'
slug: Web/API/Element/contextmenu_event
tags:
  - API
  - コンテキスト
  - DOM
  - Element
  - イベント
  - インターフェイス
  - MouseEvent
  - リファレンス
  - Right Click
  - 右クリック
  - ボタン
  - contextmenu
  - メニュー
  - マウス
browser-compat: api.Element.contextmenu_event
translation_of: Web/API/Element/contextmenu_event
---
{{APIRef}}

**`contextmenu`** イベントは、ユーザーがコンテキストメニューを開こうとしたときに発行されます。このイベントは、通常、マウスの右ボタンをクリックするか、コンテキストメニューキーを押すことで発行されます。

後者の場合、コンテキストメニューは、フォーカスされた要素の左下に表示されます。ただし、要素がツリーの場合は、現在の行の左下に表示されます。

右クリックイベントが (イベントの {{domxref("Event.preventDefault", "preventDefault()")}} メソッドを呼び出して) 無効化されていない場合は、対象となる要素で `contextmenu` イベントが発行されます。

<table class="properties">
  <tbody>
    <tr>
      <th>バブリング</th>
      <td>あり</td>
    </tr>
    <tr>
      <th>キャンセル</th>
      <td>可</td>
    </tr>
    <tr>
      <th>インターフェイス</th>
      <td>{{DOMxRef("MouseEvent")}}</td>
    </tr>
    <tr>
      <th>イベントハンドラープロパティ</th>
      <td>
        {{domxref("GlobalEventHandlers.oncontextmenu", "oncontextmenu")}}
      </td>
    </tr>
  </tbody>
</table>

<h2 id="Examples">例</h2>

この例では、最初の段落で `contextmenu` イベントが発行されたときに、`preventDefault()` を使って `contextmenu` イベントの既定のアクションをキャンセルしています。その結果、第 1 段落は右クリックしても何も起こらず、第 2 段落にはブラウザーが提供する標準的なコンテキストメニューが表示されることになります。

### HTML

```html
<p id="noContextMenu">この段落ではコンテキストメニューが無効になっています。</p>
<p>しかし、この段落では無効になっていません。</p>
```

### JavaScript

```js
const noContext = document.getElementById('noContextMenu');

noContext.addEventListener('contextmenu', e => {
  e.preventDefault();
});
```

### 結果

{{EmbedLiveSample("Examples")}}

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [イベントの紹介](/ja/docs/Learn/JavaScript/Building_blocks/Events)
- {{domxref("Element/auxclick_event", "auxclick")}}
- {{domxref("Element/click_event", "click")}}
- {{domxref("Element/dblclick_event", "dblclick")}}
- {{domxref("Element/mousedown_event", "mousedown")}}
- {{domxref("Element/mouseup_event", "mouseup")}}
- {{domxref("HTMLElement/pointerdown_event", "pointerdown")}}
- {{domxref("HTMLElement/pointerup_event", "pointerup")}}
