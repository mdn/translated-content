---
title: CSSSupportsRule
slug: Web/API/CSSSupportsRule
tags:
  - API
  - CSSOM
  - Interface
  - Reference
translation_of: Web/API/CSSSupportsRule
---
{{APIRef("CSSOM")}}

**`CSSSupportsRule`** インターフェイスは、1 個の CSS {{cssxref("@supports")}} [アット規則](/ja/docs/Web/CSS/At-rule) を表すオブジェクトを表します。これは、{{domxref("CSSConditionRule")}} インターフェイス、さらに型定数の値が `12` (`CSSRule.SUPPORTS_RULE`) の {{domxref("CSSRule")}} インターフェイスと {{domxref("CSSGroupingRule")}} インターフェイスを実装します。

## 構文

構文は、[WebIDL](http://dev.w3.org/2006/webapi/WebIDL/) 形式で記述されます。

```
interface CSSSupportsRule : CSSConditionRule {
}
```

## プロパティ

{{domxref("CSSConditionRule")}}、さらに {{domxref("CSSGroupingRule")}} と {{domxref("CSSRule")}} の両方のインターフェイスを持つため、`CSSSupportsRule` は、これらのインターフェイスのプロパティも実装します。固有のプロパティはありません。

## メソッド

{{domxref("CSSConditionRule")}}、さらに {{domxref("CSSGroupingRule")}} と {{domxref("CSSRule")}} の両方のインターフェイスを持つため、`CSSSupportsRule` は、これらのインターフェイスのメソッドも実装します。固有のプロパティはありません。

## 仕様

| 仕様書                                                                                                               | 策定状況                                 | 備考     |
| -------------------------------------------------------------------------------------------------------------------- | ---------------------------------------- | -------- |
| {{ SpecName('CSS3 Conditional', '#the-csssupportsrule-interface', 'CSSSupportsRule') }} | {{ Spec2('CSS3 Conditional') }} | 初期定義 |

## ブラウザーの実装状況

{{Compat("api.CSSSupportsRule")}}

## 関連情報

- {{cssxref("@supports")}}
