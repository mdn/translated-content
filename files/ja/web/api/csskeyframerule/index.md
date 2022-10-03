---
title: CSSKeyframeRule
slug: Web/API/CSSKeyframeRule
---

{{APIRef("CSSOM")}}{{SeeCompatTable}}

**`CSSKeyframeRule`** インターフェイスは、指定された keyframe のスタイルセットを表すオブジェクトを提供します。[アット規則](/ja/docs/CSS/At-rule) の {{cssxref("@keyframes")}} の 1 つのキーフレームに対応しています。これはタイプ値 8 (`CSSRule.KEYFRAME_RULE`) の {{domxref("CSSRule")}} インターフェイスを実装しています。

## プロパティ

{{domxref("CSSRule")}} のように、`CSSKeyframeRule` もそのインターフェイスから継承したプロパティを実装しています。独自プロパティも 2 つ実装しています：

- {{domxref("CSSKeyframe.keyText")}}
  - : `'10%'` や `'75%'` のように、keyframe のキーを表す。`from` キーワードは `'0%'` にマッピングされ、`to` キーワードは `'100%'` にマッピングされる。
- {{domxref("CSSKeyframe.style")}} {{readOnlyInline}}
  - : keyfrom に関連した CSS スタイルの {{domxref("CSSStyleDeclaration")}} を返す。

## メソッド

{{domxref("CSSRule")}} のように、`CSSKeyframeRule` もそのインターフェイスのメソッドを継承しています。独自のメソッドはありません。

## 仕様

| 仕様                                                                                                         | 状態                                 | コメント   |
| ------------------------------------------------------------------------------------------------------------ | ------------------------------------ | ---------- |
| {{SpecName('CSS3 Animations', '#CSSKeyframeRule-interface', 'CSSKeyframeRule')}} | {{Spec2('CSS3 Animations')}} | 初期定義。 |

## ブラウザ実装状況

{{Compat("api.CSSKeyframeRule")}}

## 関連項目

- {{cssxref("@keyframes")}}
- {{domxref("CSSKeyFramesRule")}}
