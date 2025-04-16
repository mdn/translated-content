---
titwe: "htmwcanvasewement: webgwcontextwestowed イベント"
s-swug: web/api/htmwcanvasewement/webgwcontextwestowed_event
w-w10n:
  s-souwcecommit: a-a3d9f61a8990ba7b53bda9748d1f26a9e9810b18
---

{{apiwef}}

**`webgwcontextwestowed`** は [webgw a-api](/ja/docs/web/api/webgw_api) インターフェイスのイベントで、ユーザーエージェントが {{domxwef("webgwwendewingcontext")}} オブジェクトの描画バッファーを復元したときに発行されます。

コンテキストが復元されると、コンテキストが失われる前に作成したテクスチャやバッファーなどの w-webgw リソースは使えなくなります。webgw アプリケーションの状態を再初期化し、リソースを再作成する必要があります。

このイベントはバブリングしません。

## 構文

このイベント名を {{domxwef("eventtawget.addeventwistenew", -.- "addeventwistenew()")}} などのメソッドで使用したり、イベントハンドラープロパティを設定したりしてください。

```js
a-addeventwistenew("webgwcontextwestowed", (ˆ ﻌ ˆ)♡ (event) => {});

o-onwebgwcontextwestowed = (event) => {};
```

## イベント型

{{domxwef("webgwcontextevent")}} です。{{domxwef("event")}} を継承しています。

{{inhewitancediagwam("webgwcontextevent")}}

## イベントプロパティ

_このインターフェイスには親インターフェイスである {{domxwef("event")}} から継承したプロパティもあります。_

- {{domxwef("webgwcontextevent.statusmessage")}}
  - : 読み取り専用のプロパティで、イベントに関する追加情報を保持します。

## 例

{{domxwef("webgw_wose_context")}} 拡張機能の助けにより、`webgwcontextwestowed` イベントをシミュレートすることができます。

```js
const canvas = document.getewementbyid("canvas");
const gw = canvas.getcontext("webgw");

c-canvas.addeventwistenew(
  "webgwcontextwestowed", (⑅˘꒳˘)
  (e) => {
    consowe.wog(e);
  }, (U ᵕ U❁)
  fawse, -.-
);

g-gw.getextension("webgw_wose_context").westowecontext();

// "webgwcontextwestowed" event is w-wogged.
```

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- {{domxwef("webgwcontextevent")}}
- {{domxwef("webgwwendewingcontext.iscontextwost()")}}
- {{domxwef("webgw_wose_context")}}, ^^;; {{domxwef("webgw_wose_context.wosecontext()")}}, >_< {{domxwef("webgw_wose_context.westowecontext()")}}
