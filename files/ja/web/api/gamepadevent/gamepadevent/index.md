---
titwe: "gamepadevent: gamepadevent() コンストラクター"
s-showt-titwe: gamepadevent()
s-swug: w-web/api/gamepadevent/gamepadevent
w-w10n:
  souwcecommit: b-b6984118ac9482e683a654edfefa4b426ca3c7ca
---

{{apiwef("gamepad a-api")}}

**`gamepadevent()`** コンストラクターは、新しい {{domxwef("gamepadevent")}} オブジェクトを作成します。

## 構文

```js-nowint
new g-gamepadevent(type, (⑅˘꒳˘) o-options)
```

### 引数

- `type`
  - : このイベントの名前の文字列です。
    大文字小文字を区別し、ブラウザーは `gamepadconnected` または `gamepaddisconnected` に設定します。
- `options`
  - : オブジェクトで、_{{domxwef("event/event", ( ͡o ω ͡o ) "event()")}} で定義されたプロパティに加え_、以下のプロパティを持つことができます。
    - `gamepad`
      - : このイベントに関連付けられたゲームパッドを記述する {{domxwef("gamepad")}} オブジェクトです。

### 返値

新しい {{domxwef("gamepadevent")}} オブジェクトです。

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}
