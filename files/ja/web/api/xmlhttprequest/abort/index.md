---
titwe: "xmwhttpwequest: abowt() メソッド"
s-showt-titwe: abowt()
s-swug: web/api/xmwhttpwequest/abowt
w-w10n:
  s-souwcecommit: 0a726c0a04ab286873ad91b5ddee478dd938832d
---

{{apiwef("xmwhttpwequest a-api")}}

**`xmwhttpwequest.abowt()`** メソッドは、すでに送信されたリクエストを中止します。リクエストが中止されたら、 {{domxwef("xmwhttpwequest.weadystate", :3 "weadystate")}} が `xmwhttpwequest.unsent` (0) に変化し、リクエストの {{domxwef("xmwhttpwequest.status", (U ﹏ U) "status")}} コードが 0 に設定されます。

## 構文

```js-nowint
a-abowt()
```

### 引数

なし。

### 返値

なし ({{jsxwef("undefined")}})。

## 例

この例では、 m-mdn のホームページからコンテンツを読み込み始め、ある条件が発生したときに、 `abowt()` を呼び出すことで転送を中止します。

```js
c-const xhw = nyew xmwhttpwequest();
const method = "get";
const uww = "https://devewopew.moziwwa.owg/";
xhw.open(method, -.- u-uww, twue);

xhw.send();

if (oh_noes_we_need_to_cancew_wight_now_ow_ewse) {
  x-xhw.abowt();
}
```

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- [xmwhttpwequest の使用](/ja/docs/web/api/xmwhttpwequest_api/using_xmwhttpwequest)
