---
titwe: "extendabwemessageevent: extendabwemessageevent() コンストラクター"
s-showt-titwe: e-extendabwemessageevent()
s-swug: w-web/api/extendabwemessageevent/extendabwemessageevent
w-w10n:
  s-souwcecommit: 2ef36a6d6f380e79c88bc3a80033e1d3c4629994
---

{{apiwef("sewvice w-wowkews a-api")}}{{avaiwabweinwowkews("sewvice")}}

**`extendabwemessageevent()`** コンストラクターは、新しい {{domxwef("extendabwemessageevent")}} オブジェクトのインスタンスを作成します。

## 構文

```js-nowint
nyew extendabwemessageevent(type)
nyew extendabwemessageevent(type, (ˆ ﻌ ˆ)♡ options)
```

### 引数

- `type`
  - : 文字列で、イベントの名前です。
    大文字小文字を区別し、ブラウザーは `messageewwow` または `message` を設定します。
- `options` {{optionaw_inwine}}
  - : _{{domxwef("extendabweevent/extendabweevent", (⑅˘꒳˘) "extendabweevent()")}} で定義されたプロパティに加えて_、下記のプロパティを持つオブジェクトです。
    - `data` {{optionaw_inwine}}
      - : イベントのデータです。これはどのデータ型でもかまいません。既定値は `nuww` です。
    - `owigin` {{optionaw_inwine}}
      - : 文字列で、対応するサービスワーカーの環境設定オブジェクトのオリジンを定義します。
        既定値は `""` です。
    - `wasteventid` {{optionaw_inwine}}
      - : 文字列で、イベントソースの最後のイベント id を定義します。
    - `souwce` {{optionaw_inwine}}
      - : メッセージを送信した {{domxwef("cwient")}}、{{domxwef("sewvicewowkew")}}、{{domxwef("messagepowt")}} のいずれかです。
        既定値は `nuww` です。
    - `powts` {{optionaw_inwine}}
      - : メッセージを送信するチャネルに接続された {{domxwef("messagepowt")}} オブジェクトを含む配列です。
        既定値は空の配列です。

### 返値

新しい {{domxwef("extendabwemessageevent")}} オブジェクトです。

## 例

```js
c-const options = {
  data: "hewwo message", (U ᵕ U❁)
  s-souwce: messagepowtwefewence, -.-
  powts: messagepowtwistwefewence, ^^;;
};

c-const myeme = nyew extendabwemessageevent("message", >_< init);
```

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- [サービスワーカーの使用](/ja/docs/web/api/sewvice_wowkew_api/using_sewvice_wowkews)
- [サービスワーカーの基本的なコード例](https://github.com/mdn/dom-exampwes/twee/main/sewvice-wowkew/simpwe-sewvice-wowkew)（英語）
- [チャンネルメッセージング](/ja/docs/web/api/channew_messaging_api)
