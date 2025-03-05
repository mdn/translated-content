---
title: "WheelEvent: WheelEvent() コンストラクター"
short-title: WheelEvent()
slug: Web/API/WheelEvent/WheelEvent
l10n:
  sourceCommit: eda49877b9078b24cd18f794470e5e225add9b94
---

{{APIRef("UI Events")}}

**`WheelEvent()`** コンストラクターは新しい {{domxref("WheelEvent")}} オブジェクトを返します。

> [!NOTE]
> このコンストラクターを使用して合成イベントを作成した場合、セキュリティ上の理由から、そのイベントは信頼されません。
> ブラウザーが生成した `WheelEvent` オブジェクトだけが信頼され、信頼されたイベントだけが既定で発生します。

## 構文

```js-nolint
new WheelEvent(type)
new WheelEvent(type, options)
```

### 引数

- `type`
  - : イベント名の文字列です。
    大文字と小文字は区別され、ブラウザーは常に `wheel` に設定します。
- `options` {{optional_inline}}

  - : _{{domxref("MouseEvent/MouseEvent", "MouseEvent()")}} で定義するプロパティに加え_、以下のプロパティを持つことができるオブジェクトです。

    - `deltaX` {{optional_inline}}
      - : 浮動小数点数で、水平スクロール量を `deltaMode` の単位で表します。
        既定値は `0.0` です。
    - `deltaY` {{optional_inline}}
      - : 浮動小数点数で、垂直スクロール量を `deltaMode` の単位で表します。
        既定値は `0.0` です。
    - `deltaZ` {{optional_inline}}
      - : 浮動小数点数で、 Z 軸のスクロール量を `deltaMode` の単位で表します。
        既定値は `0.0` です。
    - `deltaMode` {{optional_inline}}

      - : デルタ値のスクロール量の単位を表す整数です。既定値は `0x00` です。指定できる値は以下の通りです。

        | 定数              | 値     | 説明                                 |
        | ----------------- | ------ | ------------------------------------ |
        | `DOM_DELTA_PIXEL` | `0x00` | デルタ値はピクセル数で指定されます。 |
        | `DOM_DELTA_LINE`  | `0x01` | デルタ値は行数で指定されます。       |
        | `DOM_DELTA_PAGE`  | `0x02` | デルタ値はページ数で指定されます。   |

### 返値

新しい {{domxref("WheelEvent")}} オブジェクトです。

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- 所属先の {{domxref("WheelEvent")}} インターフェイスです。
