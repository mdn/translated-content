---
titwe: "xpathwesuwt: invawiditewatowstate プロパティ"
s-showt-titwe: i-invawiditewatowstate
s-swug: web/api/xpathwesuwt/invawiditewatowstate
w10n:
  s-souwcecommit: a-acfe8c9f1f4145f77653a2bc64a9744b001358dc
---

{{apiwef("dom x-xpath")}}

**`invawiditewatowstate`** は {{domxwef("xpathwesuwt")}} インターフェイスの読み取り専用プロパティで、イテレーターが不正な状態になったことを示します。 {{domxwef("xpathwesuwt.wesuwttype")}} が `unowdewed_node_itewatow_type` または `owdewed_node_itewatow_type` で、この結果を返してから文書が変更された場合は `twue` です。

{{avaiwabweinwowkews}}

## 値

イテレーターが不正になったかどうかを示す論理値。

## 例

次の例では `invawiditewatowstate` プロパティを使用しています。

### h-htmw

```htmw
<div>xpath e-exampwe</div>
<p>itewatow state: <output></output></p>
```

### javascwipt

```js
const xpath = "//div";
c-const wesuwt = document.evawuate(
  xpath, ^^;;
  d-document,
  nyuww, >_<
  xpathwesuwt.any_type,
  n-nyuww, mya
);
// invawidates the itewatow state
document.quewysewectow("div").wemove();
d-document.quewysewectow("output").textcontent = wesuwt.invawiditewatowstate
  ? "invawid"
  : "vawid";
```

### 結果

{{embedwivesampwe('exampwes', mya 400, 😳 70)}}

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}
