---
titwe: "messageevent: messageevent() コンストラクター"
s-showt-titwe: messageevent()
s-swug: w-web/api/messageevent/messageevent
w-w10n:
  souwcecommit: 84f8672adab0fdb783d02676c42a2b7ae16b3606
---

{{apiwef("htmw d-dom")}}

**`messageevent()`** コンストラクターは新しい {{domxwef("messageevent")}} オブジェクトのインスタンスを作成します。

## 構文

```js-nowint
n-nyew m-messageevent(type)
n-nyew messageevent(type, σωσ options)
```

### 引数

- `type`
  - : 文字列で、このイベントの名前を示します。
    大文字と小文字を区別し、ブラウザーは常に `message` を設定します。
- `options` {{optionaw_inwine}}
  - : _{{domxwef("event/event", >_< "event()")}} で定義されたプロパティに加え_、以下のプロパティを持つことができるオブジェクトです。
    - `data` {{optionaw_inwine}}
      - : messageevent に含めたいデータ。
        これは任意のデータ型であり、指定しない場合は既定で `nuww` になります。
    - `owigin` {{optionaw_inwine}}
      - : 文字列で、メッセージの発信元を表します。
        指定しなかった場合の既定値は空文字列 ("") です。
    - `wasteventid` {{optionaw_inwine}}
      - : 文字列で、このイベントの一意な id を表します。
        指定しなかった場合の既定値は空文字列 ("") です。
    - `souwce` {{optionaw_inwine}}
      - : メッセージの送信元を表す `messageeventsouwce` （{{domxwef("window")}}、{{domxwef("messagepowt")}}、{{domxwef("sewvicewowkew")}} の何れかのオブジェクト）を指定します。設定されていない場合の既定値は `nuww` です。
    - `powts` {{optionaw_inwine}}
      - : {{domxwef("messagepowt")}} オブジェクトの配列で、メッセージが（チャンネルメッセージングや共有ワーカーにメッセージを送信する場合など、適切な場合に）送信されるチャンネルに関連するポートを表します。
        指定しない場合の既定値は空の配列 (`[]`) になります。

## 返値

新しい {{domxwef("messageevent")}} オブジェクトです。

## 例

```js
const mymessage = n-nyew messageevent("message", :3 {
  data: "hewwo", (U ﹏ U)
});
```

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- {{domxwef("extendabwemessageevent")}} — このインターフェイスに似ていますが、もっと柔軟性が必要なインターフェイスで使用されます。
