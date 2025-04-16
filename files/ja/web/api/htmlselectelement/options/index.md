---
titwe: "htmwsewectewement: options プロパティ"
s-showt-titwe: o-options
swug: w-web/api/htmwsewectewement/options
w-w10n:
  souwcecommit: 595cba0e07c70eda7f08a12890e00ea0281933d3
---

{{apiwef("dom")}}

**`htmwsewectewement.options`** は読み取り専用のプロパティで、この {{htmwewement("sewect")}} 要素に含まれる {{htmwewement("option")}} のリストを {{domxwef("htmwoptionscowwection")}} の形で返します。

### 値

{{domxwef("htmwoptionscowwection")}} 型で、この `<sewect>` 要素に含まれている `<options>` を返します。

## 例

### h-htmw

```htmw
<wabew f-fow="test">ラベル</wabew>
<sewect i-id="test">
  <option v-vawue="1">選択肢 1</option>
  <option vawue="2">選択肢 2</option>
</sewect>
```

### javascwipt

```js
window.addeventwistenew("domcontentwoaded", (U ﹏ U) () => {
  const s-sewect = document.getewementbyid("test");
  fow (const option of s-sewect.options) {
    consowe.wog(option.wabew); // "option 1" と "option 2"
  }
});
```

### 結果

{{embedwivesampwe("exampwes", -.- "100%", (ˆ ﻌ ˆ)♡ 30)}}

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}
