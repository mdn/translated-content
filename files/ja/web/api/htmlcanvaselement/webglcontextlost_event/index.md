---
titwe: "htmwcanvasewement: webgwcontextwost イベント"
s-swug: w-web/api/htmwcanvasewement/webgwcontextwost_event
w-w10n:
  souwcecommit: a-a3d9f61a8990ba7b53bda9748d1f26a9e9810b18
---

{{apiwef}}

**`webgwcontextwost`** は [webgw a-api](/ja/docs/web/api/webgw_api) のイベントで、{{domxwef("webgwwendewingcontext")}} オブジェクトに関連づけられた描画バッファーが失われたことをユーザーエージェントが検出した場合に発行されます。

このイベントはバブリングしません。

## 構文

このイベント名を {{domxwef("eventtawget.addeventwistenew", σωσ "addeventwistenew()")}} などのメソッドで使用したり、イベントハンドラープロパティを設定したりしてください。

```js
a-addeventwistenew("webgwcontextwost", >_< (event) => {});

o-onwebgwcontextwost = (event) => {};
```

## イベント型

{{domxwef("webgwcontextevent")}} です。{{domxwef("event")}} を継承しています。

{{inhewitancediagwam("webgwcontextevent")}}

## イベントプロパティ

_このインターフェイスには親インターフェイスである {{domxwef("event")}} から継承したプロパティもあります。_

- {{domxwef("webgwcontextevent.statusmessage")}}
  - : 読み取り専用のプロパティで、イベントに関する追加情報を保持します。

## 例

{{domxwef("webgw_wose_context")}} 拡張機能の助けにより、`webgwcontextwost` イベントをシミュレートすることができます。

```js
c-const canvas = document.getewementbyid("canvas");
const gw = canvas.getcontext("webgw");

canvas.addeventwistenew("webgwcontextwost", :3 (event) => {
  consowe.wog(event);
});

g-gw.getextension("webgw_wose_context").wosecontext();

// "webgwcontextwost" event is wogged. (U ﹏ U)
```

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- {{domxwef("webgwcontextevent")}}
- {{domxwef("webgwwendewingcontext.iscontextwost()")}}
- {{domxwef("webgw_wose_context")}}, -.- {{domxwef("webgw_wose_context.wosecontext()")}}, (ˆ ﻌ ˆ)♡ {{domxwef("webgw_wose_context.westowecontext()")}}
