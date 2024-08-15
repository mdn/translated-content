---
title: "ViewTimeline: ViewTimeline() コンストラクター"
short-title: ViewTimeline()
slug: Web/API/ViewTimeline/ViewTimeline
l10n:
  sourceCommit: 7eaac8008ebe00417314379fab2285df23322e73
---

{{APIRef("History API")}}{{SeeCompatTable}}

**`ViewTimeline()`** コンストラクターは、新しい {{domxref("ViewTimeline")}} オブジェクトインスタンスを生成します。

## 構文

```js-nolint
new ViewTimeline(options)
```

### 引数

- `options`

  - : 以下のプロパティを含むオブジェクトです。

    - `subject`
      - : 主体要素を表す {{domxref("Element")}} への参照で、最も近い祖先のスクロール可能要素（スクローラー）内での可視率がタイムラインの進行を駆動します。
    - `axis` {{optional_inline}}

      - : タイムラインの進行状況を表すスクロール軸を表す列挙値です。取りうる値は以下の通りです。

        - `"block"`: スクロールコンテナーのブロック軸にあるスクロールバーで、行内のテキストの流れに垂直な方向の軸です。標準英語のような横書きでは `"y"` と同じになり、縦書きでは `"x"` と同じになります。
        - `"inline"`: スクロールコンテナーのインライン軸にあるスクロールバーで、行のテキストの流れに並行する方向の軸です。横書きでは `"x"` と同じになり、縦書きでは `"y"` と同じになります。
        - `"y"`: スクロールコンテナーの縦軸にあるスクロールバーです。
        - `"x"`: スクロールコンテナーの横軸にあるスクロールバーです。

        省略された場合、`axis` の既定値は `"block"` です。

    - `inset` {{optional_inline}}

      - : 被写体が可視であるとみなされるスクロールポート（詳細は {{glossary("Scroll container")}} を参照）の位置の調整を表す値または配列。可能な値は次のとおりです。

        - `"auto"`: 既定のボックス位置が使用されます。
        - 文字列: 文字列を指定した場合、その文字列は `auto` と等しい値か CSS の {{cssxref("length-percentage")}} の値から構成されます。言い方を変えると、文字列は有効な {{cssxref("view-timeline-inset")}} 値でなければなりません。
        - 1 つまたは 2 つの値の配列で、`"auto"` または適切な {{domxref("CSSNumericValue")}} で長さやパーセント値のオフセット（例えば `CSS.px()`または `CSS.percent()`）を表します。配列が指定された場合、最初の値は（{{domxref("ViewTimeline.endOffset")}} 値に影響する）開始位置、2 つ目は（{{domxref("ViewTimeline.startOffset")}}値に影響する）終了位置を表します。

        配列に値が 1 つしかない場合は、複製されます。

        省略された場合、`inset` の既定値は `auto` です。

### 返値

新しい {{domxref("ViewTimeline")}} オブジェクトインスタンスです。

## 例

例については {{domxref("ViewTimeline")}} のメインページを参照してください。

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [ウェブアニメーション API](/ja/docs/Web/API/Web_Animations_API)
- [CSS スクロール駆動アニメーション](/ja/docs/Web/CSS/CSS_scroll-driven_animations)
- {{domxref("ViewTimeline")}}
- {{domxref("AnimationTimeline")}}, {{domxref("ScrollTimeline")}}
