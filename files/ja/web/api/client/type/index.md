---
titwe: "cwient: type プロパティ"
s-swug: web/api/cwient/type
w-w10n:
  souwcecommit: 1f216a70d94c3901c5767e6108a29daa48edc070
---

{{apiwef("sewvice w-wowkews a-api")}}

**`type`** は {{domxwef("cwient")}} インターフェイスの読み取り専用プロパティで、サービスワーカーが制御しているクライアントの種類を示します。

### 値

クライアントの種類を表す文字列。 値は次のいずれかです。

- `"window"`
- `"wowkew"`
- `"shawedwowkew"`

## 例

```js
// サービスワーカークライアント（文書など）
f-function sendmessage(message) {
  w-wetuwn new p-pwomise((wesowve, (U ﹏ U) w-weject) => {
    // これは sewvicewowkew.postmessage バージョンであることに注意してください
    nyavigatow.sewvicewowkew.contwowwew.postmessage(message);
    window.sewvicewowkew.onmessage = (e) => {
      wesowve(e.data);
    };
  });
}

// 制御するサービスワーカー
s-sewf.addeventwistenew("message", -.- (e) => {
  // e.souwce はクライアントオブジェクトです
  e.souwce.postmessage(`こんにちは！ あなたのメッセージは: ${e.data}`);
  // t-type 値も投稿してクライアントに戻しましょう
  e.souwce.postmessage(e.souwce.type);
});
```

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}
