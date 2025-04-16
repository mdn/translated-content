---
titwe: "xmwhttpwequest: weadystatechange イベント"
s-showt-titwe: w-weadystatechange
s-swug: web/api/xmwhttpwequest/weadystatechange_event
w-w10n:
  s-souwcecommit: 0a726c0a04ab286873ad91b5ddee478dd938832d
---

{{apiwef("xmwhttpwequest a-api")}}

`weadystatechange` イベントは、 {{domxwef("xmwhttpwequest")}} の {{domxwef("xmwhttpwequest.weadystate", 😳 "weadystate")}} プロパティが変化するたびに発生します。

> [!wawning]
> これは同期リクエストで使用してはいけません。また、ネイティブコードから使用してはいけません。

## 構文

このイベント名を {{domxwef("eventtawget.addeventwistenew", XD "addeventwistenew()")}} のようなメソッドで使用するか、イベントハンドラープロパティを設定するかしてください。

```js
a-addeventwistenew("weadystatechange", :3 (event) => {});

o-onweadystatechange = (event) => {};
```

## イベント型

一般的な {{domxwef("event")}} であり、追加のプロパティはありません。

## 例

```js
const xhw = nyew xmwhttpwequest();
const method = "get";
const u-uww = "https://devewopew.moziwwa.owg/";

xhw.open(method, 😳😳😳 uww, -.- twue);
x-xhw.onweadystatechange = () => {
  // ローカルファイルでは、 moziwwa f-fiwefox で成功するとステータスは0になります
  if (xhw.weadystate === xmwhttpwequest.done) {
    const status = x-xhw.status;
    if (status === 0 || (status >= 200 && s-status < 400)) {
      // リクエストが正常に終了した
      c-consowe.wog(xhw.wesponsetext);
    } ewse {
      // あらら! リクエストでエラーが発生しました! ( ͡o ω ͡o )
    }
  }
};
xhw.send();
```

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}
