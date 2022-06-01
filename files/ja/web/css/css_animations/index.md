---
title: CSS アニメーション
slug: Web/CSS/CSS_Animations
tags:
  - CSS
  - CSS アニメーション
  - ガイド
  - 概要
  - リファレンス
translation_of: Web/CSS/CSS_Animations
---
{{CSSRef}}

**CSS アニメーション** (CSS Animations) は CSS のモジュールの一つで、時間の経過とキーフレームによって CSS プロパティの値を動かすことができます。キーフレームアニメーションの動作は、タイミング関数、時間、繰り返し回数、その他の属性によって制御されます。

## リファレンス

### CSS プロパティ

- {{cssxref("animation")}}
- {{cssxref("animation-delay")}}
- {{cssxref("animation-direction")}}
- {{cssxref("animation-duration")}}
- {{cssxref("animation-fill-mode")}}
- {{cssxref("animation-iteration-count")}}
- {{cssxref("animation-name")}}
- {{cssxref("animation-play-state")}}
- {{cssxref("animation-timing-function")}}

### アットルール

- {{cssxref("@keyframes")}}

## ガイド

- [CSS アニメーション対応の検出](/ja/docs/Web/CSS/CSS_Animations/Detecting_CSS_animation_support)
  - : ブラウザーが CSS アニメーションに対応しているかを検出するテクニックを説明します。
- [CSS アニメーションの使用](/ja/docs/Web/CSS/CSS_Animations/Using_CSS_animations)
  - : CSS を使用してアニメーションを作成する方法についての一歩一歩進むチュートリアルです。この記事では、関連する CSS プロパティとアットルール、それに互いにどのように関係するのかを説明します。
- [CSS アニメーションのコツとトリック](/ja/docs/Web/CSS/CSS_Animations/Tips)
  - : CSS アニメーションを引き出すのに役立つコツやトリックです。現在、 API に対応が備わっていない、すでに完了に向けて実行されているアニメーションを再び再生するテクニックを紹介しています。

## 仕様書

| 仕様書                            | 状態                           | 備考     |
| --------------------------------- | ------------------------------ | -------- |
| {{ SpecName('CSS3 Animations') }} | {{ Spec2('CSS3 Animations') }} | 初回定義 |

## ブラウザーの互換性

### `animation` プロパティ

{{Compat("css.properties.animation")}}

## 関連情報

- CSS アニメーションに関連して、 [CSS トランジション](/ja/docs/Web/CSS/CSS_Transitions)は、ユーザーの操作に基づいてアニメーションを起動することができます。
