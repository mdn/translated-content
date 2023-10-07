---
title: MouseEvent()
slug: Web/API/MouseEvent/MouseEvent
l10n:
  sourceCommit: b7556b71e1fc3e89057671b372871e9f33d3f0b8
---

{{APIRef("UI Events")}}

**`MouseEvent()`** コンストラクターは、新しい {{domxref("MouseEvent")}} を生成します。

## 構文

```js-nolint
new MouseEvent(type)
new MouseEvent(type, options)
```

### 値

- `type`
  - : 文字列で、イベントの名前を表します。
    大文字小文字の区別があり、ブラウザーは `dblclick`, `mousedown`, `mouseenter`, `mouseleave`, `mousemove`, `mouseout`, `mouseover`, `mouseup` の何れかに設定します。
- `options` {{optional_inline}}

  - : オブジェクトで、 _{{domxref("UIEvent/UIEvent", "UIEvent()")}} で定義されたプロパティに加え_、以下のプロパティを設定することができます。

    - `screenX` {{optional_inline}}
      - : 数値で、既定値は `0` であり、ユーザーの画面におけるこのマウスイベントの水平位置です。
        この値を設定しても、マウスポインターは移動しません。
    - `screenY` {{optional_inline}}
      - : 数値で、既定値は `0` であり、ユーザーの画面におけるこのマウスイベントの垂直位置です。
        この値を設定しても、マウスポインターは移動しません。
    - `clientX` {{optional_inline}}
      - : 数値で、既定値は `0` であり、ユーザーの画面のクライアントウィンドウにおけるマウスイベントの水平位置です。
        この値を設定しても、マウスポインターは移動しません。
    - `clientY` {{optional_inline}}
      - : 数値で、既定値は `0` であり、ユーザーの画面のクライアントウィンドウにおけるマウスイベントの垂直位置です。
        この値を設定しても、マウスポインターは移動しません。
    - `ctrlKey` {{optional_inline}}
      - : 論理値で、既定値は `false` であり、 <kbd>ctrl</kbd> キーが同時に押されていたかどうかを示します。
    - `shiftKey` {{optional_inline}}
      - : 論理値で、既定値は `false` であり、 <kbd>shift</kbd> キーが同時に押されていたかどうかを示します。
    - `altKey` {{optional_inline}}
      - : 論理値で、既定値は `false` であり、 <kbd>alt</kbd> キーが同時に押されていたかどうかを示します。
    - `metaKey` {{optional_inline}}
      - : 論理値で、既定値は `false` であり、 <kbd>meta</kbd> キーが同時に押されていたかどうかを示します。
    - `button` {{optional_inline}}

      - : 数値で、既定値は `0` であり、ボタンの押下や解放に関連するイベント時に、どのボタンが押されたかを示します。

        | 値  | 意味                                                           |
        | --- | -------------------------------------------------------------- |
        | `0` | 主ボタン（通常は左ボタン）が押された、または初期化されていない |
        | `1` | 予備ボタン（通常は中ボタン）が押された                         |
        | `2` | 副ボタン（通常は右ボタン）が押された                           |

    - `buttons` {{optional_inline}}

      - : 数値で、既定値は `0` であり、イベントが発行されたときに押されたボタンを示します。

        | ビットフィールド値 | 意味                                       |
        | ------------------ | ------------------------------------------ |
        | `0`                | ボタンが押されていない                     |
        | `1`                | 主ボタン（通常は左ボタン）が押されていた   |
        | `2`                | 副ボタン（通常は右ボタン）が押されていた   |
        | `4`                | 予備ボタン（通常は中ボタン）が押されていた |

    - `relatedTarget` {{optional_inline}}
      - : {{domxref("EventTarget")}} で、既定値は `null` であり、離れた要素
        ({{domxref("Element/mouseenter_event", "mouseenter")}} や {{domxref("Element/mouseover_event", "mouseover")}} の場合)
        または、入った要素 ({{domxref("Element/mouseout_event", "mouseout")}} や {{domxref("Element/mouseleave_event", "mouseleave")}} の場合) です。
    - `region` {{non-standard_inline}} {{optional_inline}}
      - : 文字列で、既定値は `null` であり、そのイベントによって影響を受けたヒット領域の ID です。
        影響を受けるヒット領域がない場合は `null` 値で表現されます。

    実装によっては、 screen と client フィールドに数字以外のものを渡すと、 {{jsxref("TypeError")}} が発生することがあります。

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{domxref("MouseEvent")}}: 構築するオブジェクトのインターフェイス
