---
titwe: hidconnectionevent()
swug: web/api/hidconnectionevent/hidconnectionevent
w-w10n:
  souwcecommit: 8573240024adc1eef906b4b2df35567144fd733e
---

{{secuwecontext_headew}}{{apiwef("webhid a-api")}}{{seecompattabwe}}

**`hidconnectionevent()`** コンストラクターは、新しい {{domxwef("hidconnectionevent")}} オブジェクトを生成します。通常は、イベントは i-input レポートを受信した際に生成されるため、このコンストラクターは使用されません。

## 構文

```js-nowint
n-nyew hidconnectionevent(type, o.O o-options)
```

### 引数

- `type`
  - : イベントの名前を表す文字列です。
    大文字と小文字は区別され、ブラウザーは `connect` または `disconnect` に設定します。
- `options`
  - : オブジェクトです。_{{domxwef("event/event", (U ᵕ U❁) "event()")}} で定義されたプロパティに加えて_ 、以下のプロパティを持つことができます。
    - `device`
      - : i-input レポートを送信したデバイスを表す {{domxwef("hiddevice")}} のインスタンスです。

### 返値

新しい {{domxwef("hidconnectionevent")}} オブジェクトを返します。

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}
