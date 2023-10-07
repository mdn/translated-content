---
title: MouseEvent.initMouseEvent()
slug: Web/API/MouseEvent/initMouseEvent
l10n:
  sourceCommit: a36633398f827c87eb593f9647ed00bf33fd5b34
---

{{APIRef("UI Events")}}{{deprecated_header}}

**`MouseEvent.initMouseEvent()`** メソッドは、いったん（通常は {{domxref("Document.createEvent()")}} メソッドで）生成されたマウスイベントの値を初期化します。

> **警告:** このメソッドは非推奨になったので、今後は使用しないでください。
>
> 代わりに {{domxref("MouseEvent.MouseEvent", "MouseEvent()")}} など、特定のイベントのコンストラクターを使用してください。
> [イベントの作成と起動](/ja/docs/Web/Events/Creating_and_triggering_events)のページに、使用方法についての詳しい情報があります。

この方法で初期化されるイベントは、 {{domxref("Document.createEvent()")}} メソッドで作成されたものでなければなりません。
このメソッドは、 {{domxref("EventTarget.dispatchEvent()")}} を使用してイベントが配信される前に、イベントを設定するために呼び出す必要があります。

## 構文

```js-nolint
initMouseEvent(type, canBubble, cancelable, view,
                     detail, screenX, screenY, clientX, clientY,
                     ctrlKey, altKey, shiftKey, metaKey,
                     button, relatedTarget)
```

### 引数

- `type`
  - : このイベントの種別 ({{domxref("Event.type", "type")}}) を設定する文字列です。
    マウスイベントで使用可能な種別には、 `click`, `mousedown`,
    `mouseup`, `mouseover`, `mousemove`,
    `mouseout` があります。
- `canBubble`
  - : このイベントがバブリングできるかどうかです。 {{domxref("Event.bubbles")}} の値を設定します。
- `cancelable`
  - : このイベントの既定のアクションを止めることができるかどうかです。
    {{domxref("Event.cancelable")}} の値を設定します。
- `view`
  - : このイベントの AbstractView です。ここでは {{domxref("window")}} オブジェクトを渡す必要があります。
    {{domxref("UIEvent.view")}} の値を設定します。
- `detail`
  - : このイベントのマウスクリック回数です。 {{domxref("UIEvent.detail")}} の値を設定します。
- `screenX`
  - : このイベントのスクリーン X 座標です。
    {{domxref("MouseEvent.screenX")}} の値を設定します。
- `screenY`
  - : このイベントのスクリーン Y 座標です。
    {{domxref("MouseEvent.screenY")}} の値を設定します。
- `clientX`
  - : このイベントのクライアント X 座標です。
    {{domxref("MouseEvent.clientX")}} の値を設定します。
- `clientY`
  - : このイベントのクライアント Y 座標です。
    {{domxref("MouseEvent.clientY")}} の値を設定します。
- `ctrlKey`

  - : このイベント中に <kbd>control</kbd> キーが押されていたかどうか。
    {{domxref("MouseEvent.ctrlKey")}} の値を設定します。

- `altKey`

  - : このイベント中に <kbd>alt</kbd> キーが押されていたかどうか。
    {{domxref("MouseEvent.altKey")}} の値を設定します。

- `shiftKey`

  - : このイベント中に <kbd>shift</kbd> キーが押されていたかどうか。
    {{domxref("MouseEvent.shiftKey")}} の値を設定します。

- `metaKey`

  - : このイベント中に <kbd>meta</kbd> キーが押されていたかどうか。
    {{domxref("MouseEvent.metaKey")}} の値を設定します。

- `button`
  - : このイベントのマウスボタン ({{domxref("MouseEvent.button", "button")}})。
- `relatedTarget`
  - : このイベントに[関連する EventTarget](/ja/docs/Web/API/MouseEvent/relatedTarget)。
    一部のイベント種別 (例えば `mouseover` や `mouseout`) でのみ使用されます。
    それ以外の場合は `null` を渡してください。

### 返値

なし ({{jsxref("undefined")}})。

## 例

### HTML

```html
<div style="background:red; width:180px; padding:10px;">
  <div id="out"></div>
  <input type="text" />
</div>
```

### JavaScript

```js
document.body.onclick = (event) => {
  const elementTag = event.target.tagName.toLowerCase();
  document.getElementById("out").innerHTML = elementTag;
};

const simulateClick = () => {
  const event = document.createEvent("MouseEvents");
  event.initMouseEvent(
    "click",
    true,
    true,
    window,
    0,
    0,
    0,
    80,
    20,
    false,
    false,
    false,
    false,
    0,
    null,
  );
  document.body.dispatchEvent(event);
};

simulateClick();
```

### 結果

{{EmbedLiveSample('Examples')}}

## 仕様書

この機能は仕様書に含まれていません。標準化路線から外れました。

代わりに {{domxref("MouseEvent.MouseEvent", "MouseEvent()")}} コンストラクターを使用してください。

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{domxref("MouseEvent.MouseEvent()","MouseEvent()")}} コンストラクター:
  {{domxref("MouseEvent")}} を生成するための新しい標準の方法
- {{domxref("Event.initEvent()")}} は似た目的を実現するより単純なメソッドです。
  こちらも廃止されており、使用するべきではありません。
