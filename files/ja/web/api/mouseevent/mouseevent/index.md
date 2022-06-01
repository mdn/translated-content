---
title: MouseEvent()
slug: Web/API/MouseEvent/MouseEvent
tags:
  - API
  - コンストラクター
  - DOM
  - MouseEvent
  - リファレンス
  - イベント
browser-compat: api.MouseEvent.MouseEvent
translation_of: Web/API/MouseEvent/MouseEvent
---
{{APIRef("DOM Events")}}

**`MouseEvent()`** コンストラクターは、新しい {{domxref("MouseEvent")}} を生成します。

## 構文

```js
 event = new MouseEvent(typeArg, mouseEventInit);
```

### 値

- _typeArg_
  - : {{domxref("DOMString")}} で、イベントの名前を表します。
- _mouseEventInit_ {{optional_inline}}

  - : `MouseEventInit` ディクショナリーで、以下のフィールドを持ちます。

    - `"screenX"`, 省略可能な `long`, 既定値は `0`,
      ユーザーの画面におけるマウスイベントの水平位置です。
      この値を設定しても、マウスポインターは移動しません。
    - `"screenY"`, 省略可能な `long`, 既定値は `0`,
      ユーザーの画面におけるマウスイベントの垂直位置です。
      この値を設定しても、マウスポインターは移動しません。
    - `"clientX"`, 省略可能な `long`, 既定値は `0`,
      ユーザーの画面のクライアントウィンドウにおけるマウスイベントの水平位置です。
      この値を設定しても、マウスポインターは移動しません。
    - `"clientY"`, 省略可能な `long`, 既定値は `0`,
      ユーザーの画面のクライアントウィンドウにおけるマウスイベントの垂直位置です。
      この値を設定しても、マウスポインターは移動しません。
    - `"ctrlKey"`, 省略可能な論理値, 既定値は `false`,
      <kbd>ctrl</kbd> キーが同時に押されていたかどうかを示します。
    - `"shiftKey"`, 省略可能な論理値, 既定値は `false`,
      <kbd>shift</kbd> キーが同時に押されていたかどうかを示します。
    - `"altKey"`, 省略可能な論理値, 既定値は `false`,
      <kbd>alt</kbd> キーが同時に押されていたかどうかを示します。
    - `"metaKey"`, 省略可能な論理値, 既定値は `false`,
      <kbd>meta</kbd> キーが同時に押されていたかどうかを示します。
    - `"button"`, 省略可能な `short`, 既定値は `0`,
      ボタンの押下や解放に関連するイベント時に、どのボタンが押されたかを示します。

      | 値    | 意味                                                           |
      | ----- | -------------------------------------------------------------- |
      | `0`   | 主ボタン（通常は左ボタン）が押された、または初期化されていない |
      | `1`   | 予備ボタン（通常は中ボタン）が押された                         |
      | `2`   | 副ボタン（通常は右ボタン）が押された                           |

    - `"buttons"`, 省略可能な `unsigned short`, 既定値は `0`,
      イベントが発行されたときに押されたボタンを示します。

      | ビットフィールド値 | 意味                                       |
      | ------------------ | ------------------------------------------ |
      | `0`                | ボタンが押されていない                     |
      | `1`                | 主ボタン（通常は左ボタン）が押されていた   |
      | `2`                | 副ボタン（通常は右ボタン）が押されていた   |
      | `4`                | 予備ボタン（通常は中ボタン）が押されていた |

    - `"relatedTarget"`, 省略可能な {{domxref("EventTarget")}}, 既定値は `null`
      離れた要素
      ({{domxref("Element/mouseenter_event", "mouseenter")}} や {{domxref("Element/mouseover_event", "mouseover")}} の場合)
      または、入った要素 ({{domxref("Element/mouseout_event", "mouseout")}} や {{domxref("Element/mouseleave_event", "mouseleave")}} の場合) です。
    - `"region"`, 省略可能な {{domxref("DOMString")}}, 既定値は `null`,
      そのイベントによって影響を受けたヒット領域の ID です。
      影響を受けるヒット領域がない場合は `null` 値で表現されます。

    実装によっては、 screen と client フィールドに数値以外のものを渡すと `TypeError` が発生します。

    > **Note:** `MouseEventInit` ディクショナリーは {{domxref("UIEvent.UIEvent", "UIEventInit")}} および {{domxref("Event.Event", "EventInit")}} のフィールドも受け入れます。

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## ポリフィル

Internet Explorer 9 以降では、以下のコードで `MouseEvent()` コンストラクターの機能を代替することができます。

```js
(function (window) {
  try {
    new MouseEvent('test');
    return false; // No need to polyfill
  } catch (e) {
		// Need to polyfill - fall through
  }

    // Polyfills DOM4 MouseEvent
	var MouseEventPolyfill = function (eventType, params) {
		params = params || { bubbles: false, cancelable: false };
		var mouseEvent = document.createEvent('MouseEvent');
		mouseEvent.initMouseEvent(eventType,
			params.bubbles,
			params.cancelable,
			window,
			0,
			params.screenX || 0,
			params.screenY || 0,
			params.clientX || 0,
			params.clientY || 0,
			params.ctrlKey || false,
			params.altKey || false,
			params.shiftKey || false,
			params.metaKey || false,
			params.button || 0,
			params.relatedTarget || null
		);

		return mouseEvent;
	}

	MouseEventPolyfill.prototype = Event.prototype;

	window.MouseEvent = MouseEventPolyfill;
})(window);
```

## 関連情報

- {{domxref("MouseEvent")}}: 構築するオブジェクトのインターフェイス
