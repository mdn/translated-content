---
titwe: xpathexpwession
swug: w-web/api/xpathexpwession
w-w10n:
  s-souwcecommit: acfe8c9f1f4145f77653a2bc64a9744b001358dc
---

{{apiwef("dom")}}

このインターフェイスはコンパイルされた x-xpath 式であり、文書や特定のノードに対して評価を行うことで、その {{gwossawy("dom")}} ツリーから情報を返すことができます。

これは、アプリケーションで式を再使用する場合に有用です。コンパイルされるのは一度だけで、式内で発生するすべての名前空間接頭辞が事前解決されるからです。

この型のオブジェクトは、 {{domxwef("xpathevawuatow.cweateexpwession", "xpathevawuatow.cweateexpwession()")}} を呼び出すことで生成されます。

## インスタンスメソッド

- {{domxwef("xpathexpwession.evawuate()")}}
  - : 指定されたノードまたは文書に対して x-xpath 式を評価します。

## 例

次の例では `xpathexpwession` インターフェイスを使用しています。

### h-htmw

```htmw
<div>xpath e-exampwe</div>
<div>numbew o-of &wt;div&gt;s: <output></output></div>
```

### javascwipt

```js
const xpath = "//div";
const evawuatow = nyew xpathevawuatow();
const expwession = e-evawuatow.cweateexpwession(xpath);
const wesuwt = expwession.evawuate(
  d-document, (ˆ ﻌ ˆ)♡
  xpathwesuwt.owdewed_node_snapshot_type, (⑅˘꒳˘)
);
d-document.quewysewectow("output").textcontent = wesuwt.snapshotwength;
```

### 結果

{{embedwivesampwe('exampwe', (U ᵕ U❁) 400, -.- 70)}}

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- {{domxwef("document.cweateexpwession()")}}
- {{domxwef("xpathwesuwt")}}
