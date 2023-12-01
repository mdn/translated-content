---
title: "KeyboardEvent: initKeyboardEvent() メソッド"
short-title: initKeyboardEvent()
slug: Web/API/KeyboardEvent/initKeyboardEvent
l10n:
  sourceCommit: eab4066e72d5478de920e4020e5db71214dcffa6
---

{{APIRef("UI Events")}}{{Deprecated_Header}}

**`KeyboardEvent.initKeyboardEvent()`** メソッドは、キーボードイベントオブジェクトの属性を初期化します。このメソッドは DOM Level 3 Events の草案で導入されましたが、より新しい草案では非推奨とされています。Gecko はこの機能に対応していません。このメソッドを実験的に実装すると、既存のウェブアプリが壊れてしまうからです（[Firefox バグ 999645](https://bugzil.la/999645) を参照してください）。
ウェブアプリケーションは、もしコンストラクターが使用できるのであれば、代わりに使用する必要があります。

## 構文

```js-nolint
initKeyboardEvent(type, canBubble, cancelable,
                  view, key, location, ctrlKey,
                  altKey, shiftKey, metaKey)
```

### 引数

- `type`
  - : キーボードイベントの型。ブラウザーは常に `keydown`, `keypress`, `keyup` のいずれかを設定します。
- `canBubble` {{optional_inline}}
  - : イベントがバブリングするかどうかを示す。既定値は `false` です。
- `cancelable` {{optional_inline}}
  - : イベントをキャンセルできるかどうかを示します。既定値は `false` です。
- `view` {{optional_inline}}
  - : 関連付けられている {{glossary("WindowProxy")}} を指定します。既定値は `null` です。
- `key` {{optional_inline}}
  - : key 属性の値。既定値は `""` です。
- `location` {{optional_inline}}
  - : location 属性の値。既定値は `0` です。
- `ctrlKey` {{optional_inline}}
  - : コントロールキーの修飾が有効であるかどうかを示します。既定値は `false` です。
- `altKey` {{optional_inline}}
  - : Alt キーの修飾が有効かどうかを示します。既定値は `false` です。
- `shiftKey` {{optional_inline}}
  - : Shift キーの修飾が有効であるかどうかを示します。既定値は `false` です。
- `metaKey` {{optional_inline}}
  - : メタキーの修飾が有効であるかどうかを示します。既定値は `false` です。

### 返値

なし ({{jsxref("undefined")}})。

## 仕様書

{{Specifications}}

`KeyboardEvent` インターフェイス仕様は多くの草稿を経ており、最初の DOM Events Level 2 では合意が得られなかったため削除され、次の DOM Events Level 3 で採用されました。このため、標準外の初期化メソッドが、初期の DOM Events Level 2 バージョンの {{domxref("KeyboardEvent.initKeyEvent()")}} が Gecko ブラウザーに、初期の DOM Events Level 3 バージョンの {{domxref("KeyboardEvent.initKeyboardEvent()")}} がその他のブラウザーに実装されました。両方とも、コンストラクター {{domxref("KeyboardEvent.KeyboardEvent", "KeyboardEvent()")}} の現代的な用法に置き換えられました。

## ブラウザーの互換性

{{Compat}}
