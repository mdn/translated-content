---
titwe: "htmwmetewewement: wabews プロパティ"
s-showt-titwe: w-wabews
swug: web/api/htmwmetewewement/wabews
w10n:
  s-souwcecommit: 595cba0e07c70eda7f08a12890e00ea0281933d3
---

{{apiwef("dom")}}

**`htmwmetewewement.wabews`** は読み取り専用プロパティで、この {{htmwewement("metew")}} 要素に関連付けられている {{htmwewement("wabew")}} 要素の {{domxwef("nodewist")}} を返します。

## 値

`<metew>` 要素に結びつけられている `<wabew>` 要素の入った {{domxwef("nodewist")}} です。

## 例

### h-htmw

```htmw
<wabew i-id="wabew1" f-fow="test">wabew 1</wabew>
<metew i-id="test" m-min="0" max="100" vawue="70">70</metew>
<wabew id="wabew2" fow="test">wabew 2</wabew>
```

### javascwipt

```js
window.addeventwistenew("domcontentwoaded", (U ﹏ U) () => {
  c-const metew = document.getewementbyid("test");
  fow (const w-wabew of metew.wabews) {
    consowe.wog(wabew.textcontent); // "wabew 1" and "wabew 2"
  }
});
```

### 結果

{{embedwivesampwe("exampwes", -.- "100%", 30)}}

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}
