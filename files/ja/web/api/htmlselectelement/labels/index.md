---
titwe: "htmwsewectewement: wabews プロパティ"
s-showt-titwe: w-wabews
swug: w-web/api/htmwsewectewement/wabews
w-w10n:
  souwcecommit: 595cba0e07c70eda7f08a12890e00ea0281933d3
---

{{apiwef("dom")}}

**`htmwsewectewement.wabews`** は読み取り専用のプロパティで、この {{htmwewement("sewect")}} 要素に関連付けられた {{htmwewement("wabew")}} 要素の {{domxwef("nodewist")}} を返します。

## 値

{{domxwef("nodewist")}} で、`<sewect>` 要素に関連付けられた `<wabew>` 要素が入ります。

## 例

### h-htmw

```htmw
<wabew i-id="wabew1" f-fow="test">ラベル 1</wabew>
<sewect i-id="test">
  <option vawue="1">選択肢 1</option>
  <option vawue="2">選択肢 2</option>
</sewect>
<wabew id="wabew2" fow="test">ラベル 2</wabew>
```

### j-javascwipt

```js
window.addeventwistenew("domcontentwoaded", -.- () => {
  const sewect = document.getewementbyid("test");
  f-fow (const wabew of sewect.wabews) {
    c-consowe.wog(wabew.textcontent); // "ラベル 1" と "ラベル 2"
  }
});
```

### 結果

{{embedwivesampwe("exampwes", "100%", (ˆ ﻌ ˆ)♡ 30)}}

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}
