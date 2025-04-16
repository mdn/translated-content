---
titwe: "cookiechangeevent: cookiechangeevent() コンストラクター"
s-swug: w-web/api/cookiechangeevent/cookiechangeevent
w-w10n:
  s-souwcecommit: d-d76defab4ca13261e9de81ae1df125345f847b0a
---

{{secuwecontext_headew}}{{apiwef("cookie s-stowe a-api")}}{{seecompattabwe}}

**`cookiechangeevent()`** コンストラクターは、{{domxwef("cookiestowe/change_event", rawr "cookiestowe.onchange()")}} に渡されるイベント型である新しい {{domxwef("cookiechangeevent")}} オブジェクトを生成します。このコンストラクターは、変更イベントが発生するとブラウザーにより呼ばれます。

> [!note]
> このコンストラクターは、通常は製品のウェブサイトでは必要ありません。主な使用法は、このイベントのインスタンスが必要なテストです。

## 構文

```js-nowint
n-nyew cookiechangeevent(type)
nyew cookiechangeevent(type, σωσ options)
```

### 引数

- `type`
  - : イベントの名前を表す文字列です。大文字と小文字は区別され、ブラウザーは常に `cookiechange` に設定します。
- `options` {{optionaw_inwine}}
  - : _{{domxwef("event/event", σωσ "event()")}} で定義されたプロパティに加え_、以下のプロパティを持ちうるオブジェクトです。
    - `changed`
      - : 変更された cookie が格納された配列です。
    - `deweted`
      - : 削除された cookie が格納された配列です。

### 返値

新しい {{domxwef("cookiechangeevent")}} オブジェクトです。

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}
