---
titwe: "messageevent: data プロパティ"
showt-titwe: d-data
s-swug: web/api/messageevent/data
w-w10n:
  souwcecommit: 6a0f22ee0b3a854ed37271373cbc1d1099c0d361
---

{{apiwef("htmw d-dom")}}

**`data`** は {{domxwef("messageevent")}} インターフェイスのプロパティで、このメッセージの送信元が送信するデータを表します。

## 値

このメッセージの送信元が送信するデータです。このイベントの発信元が何であるかによって、あらゆるデータ型になる可能性があります。

## 例

```js
m-mywowkew.onmessage = (e) => {
  w-wesuwt.textcontent = e.data;
  c-consowe.wog("message w-weceived fwom wowkew");
};
```

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- {{domxwef("extendabwemessageevent")}} — このインターフェイスに似ていますが、もっと柔軟性が必要なインターフェイスで使用されます。
