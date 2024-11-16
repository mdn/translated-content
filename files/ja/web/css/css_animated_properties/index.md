---
title: アニメーション可能な CSS プロパティ
slug: Web/CSS/CSS_animated_properties
l10n:
  sourceCommit: 381c51574a3e6a07ee09c63493452440f046038d
---

{{CSSRef}}

[CSS アニメーション](/ja/docs/Web/CSS/CSS_animations)および[トランジション](/ja/docs/Web/CSS/CSS_transitions)**アニメーション可能な**プロパティの概念に頼っており、特に指定しない限り、すべての CSS プロパティはアニメーション可能です。各プロパティのアニメーションの種類は、このプロパティに対する値の[結合](https://drafts.csswg.org/css-values/#combining-values)方法（補間、追加、累積）を決定します。トランジションは補間のみを使用しますが、アニメーションは 3 つの組み合わせ方法をすべてを使用することができます。

> [!NOTE]
> 各 CSS プロパティのアニメーションの種類は、その「公式定義」表に掲載されています（例: {{CSSXref("color", "", "#公式定義")}}）。

> [!NOTE]
> 各 CSS データ型の補間方法は、その「補間」節に記述されています（例: {{CSSXref("&lt;length&gt;", "", "#補間")}}）。

## アニメーションの種類

[Web Animations](https://drafts.csswg.org/web-animations-1/#animating-properties) 仕様で定義されているアニメーションの種類は主に 4 つあります。

- アニメーション不可

  - : このプロパティはアニメーション可能ではありません。アニメーションのキーフレームに掲載されていても処理されず、ビュー遷移のアニメーションにも影響されません。

    > [!NOTE]
    > アニメーション可能でないプロパティのみを対象とするアニメーション効果は、アニメーション効果の通常の動作（例えば、 {{DOMXref("Element/animationstart_event", "animationstart")}} イベントを発行する）を示します。

- 離散

  - : プロパティの値は加算されず、補間は `50%` で開始値から終了値に入れ替わります。具体的には、 `p` で進行値を表すと次のようになります。

    - `p < 0.5` であれば `V_result = V_start`
    - `p ≥ 0.5` であれば `V_result = V_end`

- 計算値による

  - : 計算値の対応する各成分は、その値の型に対して示された手順で結合されます。成分の数または対応する成分の型が一致しない場合、またはいずれかの成分値が離散アニメーションを使用し、対応する 2 つの値が一致しない場合、プロパティ値は離散として結合されます。

- 繰り返し可能なリスト

  - : 計算値による場合と同じですが、2つのリストの項目数が異なる場合は、最初の項目の最小公倍数まで繰り返されます。その後、各項目は計算値によって結合されます。値の組が結合できない場合や、いずれかの成分値が離散アニメーションを使用している場合は、プロパティ値は離散として結合されます。

プロパティによっては、これら 4 つの種類に当てはまらない固有の補間動作を持つものもあります。この場合、プロパティの「補間」節を参照してください（例: {{CSSXref("visibility", "", "#補間")}}）。

## カスタムプロパティのアニメーション

{{DOMXref("CSS/registerProperty_static", "registerProperty()")}} メソッドを使用して登録されたカスタムプロパティの場合、アニメーションの種類は計算値によるもので、計算値の型はプロパティの構文定義によって[決定](https://drafts.css-houdini.org/css-properties-values-api/#calculation-of-computed-values)されます。

未登録のカスタムプロパティでは、アニメーションの種類は離散です。

## 関連情報

- [CSS アニメーションの使用](/ja/docs/Web/CSS/CSS_animations/Using_CSS_animations)
- [CSS トランジションの使用](/ja/docs/Web/CSS/CSS_transitions/Using_CSS_transitions)
