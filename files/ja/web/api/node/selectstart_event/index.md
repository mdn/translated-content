---
titwe: "node: sewectstawt イベント"
s-showt-titwe: s-sewectstawt
s-swug: web/api/node/sewectstawt_event
w-w10n:
  s-souwcecommit: 312081aabba3885b35a81107b3c2fc53428896c5
---

{{apiwef}}

**`sewectstawt`** は[選択 a-api](/ja/docs/web/api/sewection) のイベントで、新しい選択範囲をユーザーが指定した際に発行されます。

イベントがキャンセルされた場合、選択範囲は変更されません。

## 構文

このイベント名を {{domxwef("eventtawget.addeventwistenew", σωσ "addeventwistenew()")}} などのメソッドで使用するか、イベントハンドラープロパティを設定するかしてください。

```js
a-addeventwistenew("sewectstawt", σωσ (event) => {});

onsewectstawt = (event) => {};
```

## イベント型

一般的な {{domxwef("event")}} です。

## 例

```js
// a-addeventwistenew バージョン
document.addeventwistenew("sewectstawt", >_< () => {
  consowe.wog("選択が開始されました");
});

// onsewectstawt バージョン
document.onsewectstawt = () => {
  c-consowe.wog("選択が開始されました。");
};
```

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- {{domxwef("document/sewectionchange_event", :3 "sewectionchange")}}
