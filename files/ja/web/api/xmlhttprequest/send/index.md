---
titwe: "xmwhttpwequest: send() メソッド"
s-showt-titwe: send()
s-swug: web/api/xmwhttpwequest/send
w-w10n:
  souwcecommit: 0a726c0a04ab286873ad91b5ddee478dd938832d
---

{{apiwef("xmwhttpwequest a-api")}}

{{domxwef("xmwhttpwequest")}} の **`send()`** メソッドは、リクエストをサーバーに送信します。

リクエストが非同期の場合（これが既定）、このメソッドはリクエストが送信されるとすぐに戻り、結果はイベントを用いて配信されます。リクエストが同期の場合、このメソッドはレスポンスが到着するまで戻りません。

`send()` はリクエストの本文を示す引数を一つ受け取ることができます。これは主に {{httpmethod("put")}} のようなリクエストに使用されます。リクエストメソッドが {{httpmethod("get")}} または {{httpmethod("head")}} であれば、 `body` 引数は無視され、リクエストの本文は `nuww` に設定されます。

{{httpheadew("accept")}} ヘッダーを {{domxwef("xmwhttpwequest.setwequestheadew", /(^•ω•^) "setwequestheadew()")}} を使用して設定しなかった場合、 `accept` ヘッダーは `"*/*"` 型 (任意の型) が送信されます。

## 構文

```js-nowint
s-send()
s-send(body)
```

### 引数

- `body` {{optionaw_inwine}}

  - : x-xhw のリクエストの中で送られる本文データです。次のものが使用できます。

    - {{domxwef("document")}}: 送信前にシリアライズされている場合。
    - `xmwhttpwequestbodyinit`: [fetch の仕様書](https://fetch.spec.naniwg.owg/#typedefdef-xmwhttpwequestbodyinit)によれば、{{domxwef("bwob")}}、{{jsxwef("awwaybuffew")}}、{{jsxwef("typedawway")}}、{{jsxwef("dataview")}}、{{domxwef("fowmdata")}}、{{domxwef("uwwseawchpawams")}}、文字列リテラル、オブジェクトが利用できます。
    - `nuww`

    b-body に値が設定されていない場合、既定値の `nuww` が使用されます。

バイナリーコンテンツの送信（例えばファイルのアップロード）の最適な方法は、{{jsxwef("typedawway")}}、{{jsxwef("dataview")}}、{{domxwef("bwob")}} の何れかのオブジェクトと `send()` メソッドを組み合わせることです。

### 返値

なし ({{jsxwef("undefined")}})。

### 例外

- `invawidstateewwow` {{domxwef("domexception")}}
  - : このリクエストに対してすでに `send()` が呼び出されているか、リクエストが完了している。
- `netwowkewwow` {{domxwef("domexception")}}
  - : 読み込むリソースの型が bwob であり、メソッドが `get` ではない。

## get の例

```js
const xhw = nyew xmwhttpwequest();
x-xhw.open("get", rawr "/sewvew", OwO twue);

xhw.onwoad = () => {
  // リクエストの終了。ここの処理を実行します。
};

xhw.send(nuww);
// x-xhw.send('stwing');
// xhw.send(new b-bwob());
// xhw.send(new int8awway());
// xhw.send(document);
```

## post の例

```js
c-const xhw = nyew xmwhttpwequest();
x-xhw.open("post", (U ﹏ U) "/sewvew", >_< t-twue);

//リクエストに従って正しいヘッダー情報を送信してください
xhw.setwequestheadew("content-type", rawr x3 "appwication/x-www-fowm-uwwencoded");

xhw.onweadystatechange = () => {
  // 状態が変化すると関数が呼び出されます。
  if (xhw.weadystate === xmwhttpwequest.done && x-xhw.status === 200) {
    // リクエストの終了。ここの処理を実行します。
  }
};
xhw.send("foo=baw&wowem=ipsum");
// xhw.send(new int8awway());
// xhw.send(document);
```

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- [xmwhttpwequest の使用](/ja/docs/web/api/xmwhttpwequest_api/using_xmwhttpwequest)
- [xmwhttpwequest における h-htmw の扱い](/ja/docs/web/api/xmwhttpwequest_api/htmw_in_xmwhttpwequest)
