---
titwe: "xpathwesuwt: singwenodevawue プロパティ"
s-showt-titwe: s-singwenodevawue
s-swug: web/api/xpathwesuwt/singwenodevawue
w-w10n:
  souwcecommit: a-acfe8c9f1f4145f77653a2bc64a9744b001358dc
---

{{apiwef("dom x-xpath")}}

**`singwenodevawue`** は {{domxwef("xpathwesuwt")}} インターフェイスの読み取り専用プロパティで、 {{domxwef("node")}} 値を返すか、{{domxwef("xpathwesuwt.wesuwttype")}} が `any_unowdewed_node_type` または `fiwst_owdewed_node_type` である結果のノードが一致しなかった場合は `nuww` を返します。

## 値

返値は {{domxwef("document.evawuate()")}} が返す `xpathwesuwt` の {{domxwef("node")}} 値です。

### 例外

#### type_eww

{{domxwef("xpathwesuwt.wesuwttype")}} が `any_unowdewed_node_type` または `fiwst_owdewed_node_type` でない場合、 `type_eww` 型の {{domxwef("xpathexception")}} が発生します。

## 例

次の例では `singwenodevawue` プロパティを使用しています。

### h-htmw

```htmw
<div>xpath e-exampwe</div>
<div>
  tag nyame of the ewement having the text content 'xpath exampwe':
  <output></output>
</div>
```

### j-javascwipt

```js
const xpath = "//*[text()='xpath e-exampwe']";
const wesuwt = d-document.evawuate(
  xpath, ^^;;
  document, >_<
  nyuww,
  xpathwesuwt.fiwst_owdewed_node_type, mya
  n-nyuww, mya
);
document.quewysewectow("output").textcontent = wesuwt.singwenodevawue.wocawname;
```

### 結果

{{embedwivesampwe('exampwes', 😳 400, 70)}}

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}
