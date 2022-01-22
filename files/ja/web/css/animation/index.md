---
title: animation
slug: Web/CSS/animation
tags:
  - CSS
  - CSS アニメーション
  - CSS プロパティ
  - リファレンス
  - recipe:css-shorthand-property
browser-compat: css.properties.animation
translation_of: Web/CSS/animation
---
{{CSSRef}}

**`animation`** は [CSS](/ja/docs/Web/CSS) の[一括指定](/ja/docs/Web/CSS/Shorthand_properties)プロパティで、スタイルの間のアニメーションを適用します。これは {{cssxref("animation-name")}}, {{cssxref("animation-duration")}}, {{cssxref("animation-timing-function")}}, {{cssxref("animation-delay")}}, {{cssxref("animation-iteration-count")}}, {{cssxref("animation-direction")}}, {{cssxref("animation-fill-mode")}}, {{cssxref("animation-play-state")}} の一括指定です。

{{EmbedInteractiveExample("pages/css/animation.html")}}

```css
/* @keyframes duration | easing-function | delay |
iteration-count | direction | fill-mode | play-state | name */
animation: 3s ease-in 1s 2 reverse both paused slidein;

/* @keyframes name | duration | easing-function | delay */
animation: slidein 3s linear 1s;

/* @keyframes name | duration */
animation: slidein 3s;
```

[アニメーションできるプロパティの説明](/ja/docs/Web/CSS/CSS_Transitions/Using_CSS_transitions#which_css_properties_are_animatable)があります。この説明は言うまでもなく [CSS トランジション](/ja/docs/Web/CSS/CSS_Transitions/Using_CSS_transitions)にも有効です。

## 構成要素のプロパティ

このプロパティは以下のプロパティの一括指定です。

- [`animation-delay`](/ja/docs/Web/CSS/animation-delay)
- [`animation-direction`](/ja/docs/Web/CSS/animation-direction)
- [`animation-duration`](/ja/docs/Web/CSS/animation-duration)
- [`animation-fill-mode`](/ja/docs/Web/CSS/animation-fill-mode)
- [`animation-iteration-count`](/ja/docs/Web/CSS/animation-iteration-count)
- [`animation-name`](/ja/docs/Web/CSS/animation-name)
- [`animation-play-state`](/ja/docs/Web/CSS/animation-play-state)
- [`animation-timing-function`](/ja/docs/Web/CSS/animation-timing-function)

## 構文

`animation` プロパティは 1 つまたはカンマで区切った複数のアニメーションとして指定します。

それぞれ個別のアニメーションは以下のように定義されます。

- 以下の値は 0 ～ 1 回出現します。

  - {{cssxref("&lt;single-transition-easing-function&gt;")}}
  - {{cssxref("animation", "&lt;single-animation-iteration-count&gt;", "#&lt;single-animation-iteration-count&gt;")}}
  - {{cssxref("animation", "&lt;single-animation-direction&gt;", "#&lt;single-animation-direction&gt;")}}
  - {{cssxref("animation", "&lt;single-animation-fill-mode&gt;", "#&lt;single-animation-fill-mode&gt;")}}
  - {{cssxref("animation", "&lt;single-animation-play-state&gt;", "#&lt;single-animation-play-state&gt;")}}

- アニメーションの名前は任意で、 `none`, {{cssxref("&lt;custom-ident&gt;")}}, {{cssxref("&lt;string&gt;")}} のいずれかになります。
- 0 ～ 2 個の {{cssxref("&lt;time&gt;")}} の値

各アニメーションの定義の中での順序は重要です。{{cssxref("&lt;time&gt;")}} として解釈される最初の値は、 {{cssxref("animation-duration")}} に、そして2番目の値は、{{cssxref("animation-delay")}} に割り当てられます。

順序はまた、各アニメーションの定義において、他のキーワードから {{cssxref("animation-name")}} の値を区別するためにも重要です。 {{cssxref("animation-name")}} 以外のプロパティの値として解釈することが可能なキーワードは、一括指定の以前にそれらのプロパティの値が見つかっていないのならば、 {{cssxref("animation-name")}} ではなく、それらのプロパティの値として取り扱われます。また、シリアライズされる場合には、他のプロパティの既定値は少なくとも、他のプロパティの値と解釈することも可能な {{cssxref("animation-name")}}と区別する必要がある場合には出力する必要があり、他の場合には出力してもいいことになっています。

### 値

- `<single-animation-iteration-count>`
  - : アニメーションが実行される回数です。 {{cssxref("animation-iteration-count")}} で利用できる値の一つでなければなりません。
- `<single-animation-direction>`
  - : アニメーションが実行される方向です。 {{cssxref("animation-direction")}} で利用できる値の一つでなければなりません。
- `<single-animation-fill-mode>`
  - : アニメーションの実行の前後にどのようにスタイルが適用されるかを定めます。 {{cssxref("animation-fill-mode")}} で利用できる値の一つでなければなりません。
- `<single-animation-play-state>`
  - : アニメーションが実行中かどうかを定めます。 {{cssxref("animation-play-state")}} で利用できる値の一つでなければなりません。

## アクセシビリティの考慮

点滅を伴うアニメーションは、注意欠陥障害 (ADHD) のような認知障害を持つ人々に問題を起こす可能性があります。加えて、特定の種類の動きが、前庭障害、てんかん、片頭痛、痙攣感受性などの引き金になることもあります。

アニメーションを停止したり無効にしたりする仕組みを、できれば[動きを縮小するメディアクエリー](/ja/docs/Web/CSS/@media/prefers-reduced-motion)を使用して、アニメーションがない操作の設定を表明したユーザーの希望を叶えるように作成することができます。

- [Designing Safer Web Animation For Motion Sensitivity · An A List Apart Article](https://alistapart.com/article/designing-safer-web-animation-for-motion-sensitivity)
- [An Introduction to the Reduced Motion Media Query | CSS-Tricks](https://css-tricks.com/introduction-reduced-motion-media-query/)
- [Responsive Design for Motion | WebKit](https://webkit.org/blog/7551/responsive-design-for-motion/)
- [MDN Understanding WCAG, Guideline 2.2 explanations](/ja/docs/Web/Accessibility/Understanding_WCAG/Operable#guideline_2.2_%e2%80%94_enough_time_provide_users_enough_time_to_read_and_use_content)
- [Understanding Success Criterion 2.2.2 | W3C Understanding WCAG 2.0](https://www.w3.org/TR/UNDERSTANDING-WCAG20/time-limits-pause.html)

## 公式定義

{{cssinfo}}

## 形式文法

{{csssyntax}}

## 例

### 台風の目

```html
<div class="view_port">
  <div class="polling_message">
    Listening for dispatches
  </div>
  <div class="cylon_eye"></div>
</div>
```

```css
.polling_message {
  color: white;
  float: left;
  margin-right: 2%;
}

.view_port {
  background-color: black;
  height: 25px;
  width: 100%;
  overflow: hidden;
}

.cylon_eye {
  background-color: red;
  background-image: linear-gradient(to right,
      rgba(0, 0, 0, .9) 25%,
      rgba(0, 0, 0, .1) 50%,
      rgba(0, 0, 0, .9) 75%);
  color: white;
  height: 100%;
  width: 20%;

  -webkit-animation: 4s linear 0s infinite alternate move_eye;
          animation: 4s linear 0s infinite alternate move_eye;
}

@-webkit-keyframes move_eye { from { margin-left: -20%; } to { margin-left: 100%; }  }
        @keyframes move_eye { from { margin-left: -20%; } to { margin-left: 100%; }  }
```

{{EmbedLiveSample('Cylon_Eye')}}

これ以外の例は [CSS アニメーション](/ja/docs/Web/CSS/CSS_Animations/Using_CSS_animations)を参照してください。

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

### Quantum CSS のメモ

- Gecko には、画面上でオフスクリーン要素をアニメーションさせたとき、遅延を指定すると、 Windows など一部のプラットフォームで再描画しないというバグがあります ({{bug(1383239)}})。これは Firefox の新しい並列 CSS エンジン（[Quantum CSS](https://wiki.mozilla.org/Quantum) または [Stylo](https://wiki.mozilla.org/Quantum/Stylo) と呼ばれており、 Firefox 57 でリリースする計画です）で修正されています。
- 他の Gecko のバグとして、 {{htmlelement("details")}} 要素が `open` 属性を使用しても、アニメーションが有効になっていると既定で開かないというものがあります ({{bug(1382124)}})。 Quantum CSS では修正されています。
- さらに他のバグとして、 em の単位を使用してアニメーションする要素の親の {{cssxref("font-size")}} を変更しても影響されないというものがあります ({{bug(1254424)}})。 Quantum CSS では修正されています。

## 関連情報

- [CSS アニメーションの使用](/ja/docs/Web/CSS/CSS_Animations/Using_CSS_animations)
- JavaScript の {{domxref("AnimationEvent")}} API
