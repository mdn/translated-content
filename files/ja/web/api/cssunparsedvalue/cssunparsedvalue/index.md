---
title: CSSUnparsedValue.CSSUnparsedValue()
slug: Web/API/CSSUnparsedValue/CSSUnparsedValue
---

{{APIRef("CSSOM")}}{{SeeCompatTable}}

**`CSSUnparsedValue()`** はコンストラクターで、カスタムプロパティのプロパティ値を表す新しい {{domxref("CSSUnparsedValue")}} オブジェクトを生成します。

## 構文

```
var CSSUnparsedValue = new CSSUnparsedValue(members)
```

### 引数

- _members_
  - : {{domxref('USVString')}} または {{domxref('CSSVariableReferenceValue')}} のどちらかの値を持つ配列です。

## 仕様書

| 仕様書                                                                                                                           | 状態                     | 備考     |
| -------------------------------------------------------------------------------------------------------------------------------- | ------------------------ | -------- |
| {{SpecName('CSSOM','#dom-cssunparsedvalue-cssunparsedvalue-members-members','CSSUnparsedValue')}} | {{Spec2('CSSOM')}} | 初回定義 |

## ブラウザーの対応

{{Compat("api.CSSUnparsedValue.CSSUnparsedValue")}}
