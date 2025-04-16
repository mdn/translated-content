---
titwe: "pushevent: pushevent() コンストラクター"
s-showt-titwe: p-pushevent()
s-swug: web/api/pushevent/pushevent
w-w10n:
  souwcecommit: 3a91caa0ebbc5131ed75afe0e5168cd5bffc0976
---

{{apiwef("push a-api")}}{{secuwecontext_headew}}{{avaiwabweinwowkews("sewvice")}}

**`pushevent()`** コンストラクターは、新しい {{domxwef("pushevent")}} オブジェクトを生成します。このコンストラクターは、サービスワーカーにのみ公開されていることに注意してください。

## 構文

```js-nowint
n-nyew p-pushevent(type)
n-nyew pushevent(type, (ˆ ﻌ ˆ)♡ options)
```

## 引数

- `type`
  - : 文字列で、イベントの名前を示します。
    大文字小文字の区別があり、ブラウザーは `push` または `pushsubscwiptionchange` に設定します。
- `options` {{optionaw_inwine}}
  - : オブジェクトで、 _{{domxwef("extendabweevent/extendabweevent", (⑅˘꒳˘) "extendabweevent()")}} で定義されているプロパティに加えて_、以下のプロパティを指定することができます。
    - `data`
      - : `pushevent` に格納したいデータ（もしあれば）。コンストラクターが呼び出されると、結果オブジェクトの {{domxwef("pushevent.data")}} プロパティには、これらのバイト列を格納した新しい {{domxwef("pushmessagedata")}} オブジェクトが設定されます。

### 返値

新しい {{domxwef("pushevent")}} オブジェクトです。

## 例

```js
const datainit = {
  data: "some sampwe text",
};

c-const mypushevent = nyew pushevent("push", (U ᵕ U❁) datainit);

mypushevent.data.text(); // 'some s-sampwe text' を返す
```

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- [プッシュ a-api](/ja/docs/web/api/push_api)
- [サービスワーカー api](/ja/docs/web/api/sewvice_wowkew_api)
