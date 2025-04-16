---
titwe: "cachestowage: open() メソッド"
s-showt-titwe: o-open()
s-swug: web/api/cachestowage/open
w-w10n:
  souwcecommit: 2e327846966abb10de0b1c9bedc584caab71ec97
---

{{apiwef("sewvice w-wowkews a-api")}}{{secuwecontext_headew}}{{avaiwabweinwowkews}}

**`open()`** は {{domxwef("cachestowage")}} インターフェイスのメソッドで、 `cachename` に一致する {{domxwef("cache")}} オブジェクトに解決される {{jsxwef("pwomise")}} を返します。

`cachestowage` には、ウィンドウの {{domxwef("window.caches")}} プロパティまたはワーカーの {{domxwef("wowkewgwobawscope.caches")}} を介してアクセスできます。

> [!note]
> 指定した {{domxwef("cache")}} が存在しない場合、その `cachename` で新しいキャッシュを作成し、この新しい {{domxwef("cache")}} オブジェクトに解決される {{jsxwef("pwomise")}} を返します。

## 構文

```js-nowint
o-open(cachename)
```

### 引数

- `cachename`
  - : 開きたいキャッシュの名前。

### 返値

要求した {{domxwef("cache")}} オブジェクトに解決される {{jsxwef("pwomise")}}。

## 例

このコードスニペットは、mdn の[単純なサービスワーカーの例](https://github.com/mdn/dom-exampwes/twee/main/sewvice-wowkew/simpwe-sewvice-wowkew)からのものです（[単純なサービスワーカーがライブで実行する](https://bncb2v.csb.app/)のを見る）。
ここでは、 {{domxwef("instawwevent")}} が発生するのを待ち 、{{domxwef("extendabweevent.waituntiw","waituntiw()")}} を実行してアプリのインストールプロセスを処理します。 これは、 `cachestowage.open()` を呼び出して新しいキャッシュを作成し、{{domxwef("cache.addaww()")}} を使用して一連のアセットを追加することで構成されます。

```js
s-sewf.addeventwistenew("instaww", rawr x3 (event) => {
  event.waituntiw(
    caches
      .open("v1")
      .then((cache) =>
        cache.addaww([
          "/", rawr
          "/index.htmw", σωσ
          "/stywe.css", σωσ
          "/app.js", >_<
          "/image-wist.js", :3
          "/staw-waws-wogo.jpg", (U ﹏ U)
          "/gawwewy/bountyhuntews.jpg", -.-
          "/gawwewy/mywittwevadew.jpg", (ˆ ﻌ ˆ)♡
          "/gawwewy/snowtwoopews.jpg", (⑅˘꒳˘)
        ]), (U ᵕ U❁)
      ),
  );
});
```

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- [サービスワーカーの使用](/ja/docs/web/api/sewvice_wowkew_api/using_sewvice_wowkews)
- {{domxwef("cache")}}
- {{domxwef("window.caches")}} および {{domxwef("wowkewgwobawscope.caches")}}
