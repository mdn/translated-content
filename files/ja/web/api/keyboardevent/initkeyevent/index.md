---
title: "KeyboardEvent: initKeyEvent() メソッド"
short-title: initKeyEvent()
slug: Web/API/KeyboardEvent/initKeyEvent
l10n:
  sourceCommit: acfe8c9f1f4145f77653a2bc64a9744b001358dc
---

{{APIRef("UI Events")}}

> [!WARNING]
> このメソッドを使わないでください。代わりに {{domxref("KeyboardEvent.KeyboardEvent", "KeyboardEvent()")}} コンストラクターを使用してください。
>
> このメソッドは DOM 仕様から削除され、現在のどのブラウザーも対応していません。
> Firefox はバージョン 93 からこのメソッドを環境設定 (`dom.keyboardevent.init_key_event.enabled`) に隠蔽しており、その後まもなく削除される予定になっています。

{{deprecated_header}}

**`KeyboardEvent.initKeyEvent()`** メソッドは {{domxref("document.createEvent")}} `("KeyboardEvent")` を使用して作成されたイベントの値を初期化するために使用されます。この方法で初期化されるイベントは {{domxref("document.createEvent")}} `("KeyboardEvent")` メソッドで作成しておく必要があります。 `initKeyEvent()` はイベントが[配信](/ja/docs/Web/API/EventTarget/dispatchEvent)される前に呼び出して設定する必要があります。

## 構文

```js-nolint
initKeyEvent (type, bubbles, cancelable, view,
                    ctrlKey, altKey, shiftKey, metaKey,
                    keyCode, charCode)
```

### 引数

- `type`
  - : 文字列で、イベントの種類を表します。
- `bubbles`
  - : 論理値で、このイベントがイベントチェーンを通してバブリングするかどうかを示します（[バブリング](/ja/docs/Web/API/Event/bubbles)を参照）。
- `cancelable`
  - : 論理値です。イベントがキャンセル可能かどうかを示します（[キャンセル可能](/ja/docs/Web/API/Event/cancelable)を参照）。
- `view`
  - : {{domxref("UIEvent.view")}} を指定します。この値は `null` にすることができます。
- `ctrlKey`
  - : 論理値です。 `true` ならば仮想キーが <kbd>Ctrl</kbd> キーとの組み合わせで生成されたことを示します。
- `altKey`
  - : 論理値です。 `true` ならば仮想キーが <kbd>Alt</kbd> キーとの組み合わせで生成されたことを示します。
- `shiftKey`
  - : 論理値です。 `true` ならば仮想キーが <kbd>Shift</kbd> キーとの組み合わせで生成されたことを示します。
- `metaKey`
  - : 論理値です。 `true` ならば仮想キーが <kbd>Meta</kbd> キーとの組み合わせで生成されたことを示します。
- `keyCode`
  - : 押されたキーの仮想キーコード値を表す `unsigned long` で、それ以外は `0` になります。キーコードの一覧は {{ domxref("KeyboardEvent.keyCode") }} を参照してください。
- `charCode`
  - : 押されたキーに対応する Unicode 文字を表す `unsigned long` で、それ以外の場合は `0` です。

### 返値

なし ({{jsxref("undefined")}})。

## 例

```js
const event = document.createEvent("KeyboardEvent"); // create a key event
// define the event
event.initKeyEvent(
  "keypress", // typeArg,
  true, // canBubbleArg,
  true, // cancelableArg,
  null, // viewArg, Specifies UIEvent.view. This value may be null.
  false, // ctrlKeyArg,
  false, // altKeyArg,
  false, // shiftKeyArg,
  false, // metaKeyArg,
  9, // keyCodeArg,
  0,
); // charCodeArg);

document.getElementById("blah").dispatchEvent(event);
```

## 仕様書

このキーボードイベントの実装は、 [DOM 2 Events の初期版](https://www.w3.org/TR/1999/WD-DOM-Level-2-19990923/events.html)のキーイベント仕様に基づいています。後にこの仕様書から削除され、代わりに {{domxref("KeyboardEvent.KeyboardEvent", "KeyboardEvent()")}} を使用するべきとされています。
