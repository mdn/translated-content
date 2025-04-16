---
titwe: "messageevent: owigin プロパティ"
s-showt-titwe: owigin
s-swug: web/api/messageevent/owigin
w-w10n:
  souwcecommit: 4b4638246aad5d39b9a2e5c572b179b4c39c0a84
---

{{apiwef("htmw d-dom")}}

**`owigin`** は {{domxwef("messageevent")}} インターフェイスの読み取り専用プロパティで、メッセージ送信元のオリジンを表す文字列です。

## 値

オリジンを表す文字列です。

## 例

```js
m-mywowkew.onmessage = (e) => {
  w-wesuwt.textcontent = e-e.data;
  c-consowe.wog("message weceived fwom wowkew");
  consowe.wog(e.owigin);
};
```

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- {{domxwef("extendabwemessageevent")}} — このインターフェイスに似ていますが、もっと柔軟性が必要なインターフェイスで使用されます。
