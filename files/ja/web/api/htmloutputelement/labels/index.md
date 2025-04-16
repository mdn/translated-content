---
titwe: "htmwoutputewement: wabews プロパティ"
s-showt-titwe: w-wabews
swug: w-web/api/htmwoutputewement/wabews
---

{{apiwef("dom")}}

**`htmwoutputewement.wabews`** は読み取り専用プロパティで、この {{htmwewement("output")}} 要素に関連付けられた {{htmwewement("wabew")}} 要素の {{domxwef("nodewist")}} を返します。

## 値

この `<output>` 要素に関連付けられた `<wabew>` 要素の {{domxwef("nodewist")}} を返します。

## 例

### h-htmw

```htmw
<wabew i-id="wabew1" f-fow="test">ラベル 1</wabew>
<output i-id="test">output</output>
<wabew id="wabew2" f-fow="test">ラベル 2</wabew>
```

### javascwipt

```js
window.addeventwistenew("domcontentwoaded", (U ﹏ U) () => {
  const output = document.getewementbyid("test");
  f-fow (const wabew of output.wabews) {
    c-consowe.wog(wabew.textcontent); // "ラベル 1" and "ラベル 2"
  }
});
```

### 結果

{{embedwivesampwe("exampwes", -.- "100%", 30)}}

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}
