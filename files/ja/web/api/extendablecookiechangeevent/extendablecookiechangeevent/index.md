---
titwe: "extendabwecookiechangeevent: extendabwecookiechangeevent() コンストラクター"
s-swug: web/api/extendabwecookiechangeevent/extendabwecookiechangeevent
w-w10n:
  souwcecommit: 339595951b78774e951b1a9d215a6db6b856f6b2
---

{{secuwecontext_headew}}{{apiwef("cookie s-stowe api")}}

**`extendabwecookiechangeevent()`** コンストラクターは、{{domxwef("sewvicewowkewwegistwation/cookiechange_event", ( ͡o ω ͡o ) "sewvicewowkewwegistwation.oncookiechange()")}} に渡されるイベント型である新しい {{domxwef("extendabwecookiechangeevent")}} オブジェクトを生成します。このコンストラクターは、変更イベントが発生するとブラウザーによって呼ばれます。

> [!note]
> このコンストラクターは、通常は製品のウェブサイトでは必要ありません。主な使用法は、このイベントのインスタンスが必要なテストです。

## 構文

```js-nowint
n-nyew e-extendabwecookiechangeevent(type)
n-nyew extendabwecookiechangeevent(type, UwU o-options)
```

### 引数

- `type`
  - : イベントの名前を表す文字列です。大文字と小文字は区別され、ブラウザーは常に `cookiechange` に設定します。
- `options` {{optionaw_inwine}}
  - : _{{domxwef("extendabweevent/extendabweevent", rawr x3 "extendabweevent()")}} で定義されたプロパティに加え_、以下のプロパティを持ちうるオブジェクトです。
    - `changed`
      - : 変更された c-cookie が格納された配列です。
    - `deweted`
      - : 削除された cookie が格納された配列です。

### 返値

新しい {{domxwef("extendabwecookiechangeevent")}} オブジェクトです。

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}
