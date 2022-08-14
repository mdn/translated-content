---
title: touch-action
slug: Web/CSS/touch-action
tags:
  - CSS
  - CSS プロパティ
  - ポインターイベント
  - リファレンス
  - recipe:css-property
browser-compat: css.properties.touch-action
translation_of: Web/CSS/touch-action
---
{{CSSRef}}

**`touch-action`** は CSS のプロパティで、タッチ画面のユーザーが要素のある領域をどのように操作できるか（例えば、ブラウザー内に組み込まれたパンまたはズーム機能）を設定します。

```css
/* キーワード値 */
touch-action: auto;
touch-action: none;
touch-action: pan-x;
touch-action: pan-left;
touch-action: pan-right;
touch-action: pan-y;
touch-action: pan-up;
touch-action: pan-down;
touch-action: pinch-zoom;
touch-action: manipulation;

/* グローバル値 */
touch-action: inherit;
touch-action: initial;
touch-action: revert;
touch-action: unset;
```

既定では、パン（スクロール）およびピンチ操作はブラウザーとは独立して別に扱われます。{{domxref("Pointer_events", "ポインターイベント", "", 1)}}を使用するアプリケーションは、ブラウザーがタッチジェスチャーの扱いを始めるときに {{domxref("HTMLElement/pointercancel_event", "pointercancel")}} イベントを受け取ります。ブラウザーがどのジェスチャーを扱うかについての具体的に定義することによって、アプリケーションはジェスチャーを記憶するために {{domxref("HTMLElement/pointermove_event", "pointermove")}} および {{domxref("HTMLElement/pointerup_event", "pointerup")}} リスナーの中で独自の振る舞いを提供することができます。{{domxref("Touch_events", "タッチイベント", "", 1)}}を使用するアプリケーションは、 {{domxref("Event.preventDefault","preventDefault()")}} を呼び出すことでブラウザーがジェスチャーを扱うのを無効にすることができますが、イベントリスナーが呼び出される前に、 `touch-action` を使用してブラウザーにアプリケーションの目的を知らせるようにもしてください。

ジェスチャーが開始されると、ブラウザーはタッチ要素の `touch-action` の値を、祖先のうちジェスチャーを実装しているもの (言い換えれば、最初のスクロールを含む要素) まで交差させます。つまり実際には、 `touch-action` は通常、その要素の子孫のいずれかに `touch-action` を明示的に指定する必要なく、独自の動作を持つ最上位の要素にのみ適用されます。

> **Note:** ジェスチャーが開始された後、 `touch-action` の値を変更しても、現在のジェスチャーの動作には影響を与えません。

## 構文

`touch-action` プロパティは次の何れかの形で指定することができます。

- キーワード `auto`, `none`, [`manipulation`](#manipulation) のうち一つ、_または_
- キーワード `pan-x`, `pan-left`, `pan-right` のうち一つと、キーワード `pan-y`, `pan-up`, `pan-down` のうち一つと、加えて任意のキーワード `pinch-zoom`。

### 値

- `auto`
  - : ブラウザーがすべてのパンやズームのジェスチャーを扱うことを有効にします。
- `none`
  - : ブラウザーがすべてのパンやズームのジェスチャーを扱うことを無効にします。
- `pan-x`
  - : 指 1 本で水平にパンするジェスチャーを有効にします。 **pan-y**, **pan-up**, **pan-down**, **pinch-zoom** と組み合わせることができます。
- `pan-y`
  - : 指 1 本で垂直にパンするジェスチャーを有効にします。 **pan-x**, **pan-left**, **pan-right**, **pinch-zoom** と組み合わせることができます。
- `manipulation`
  - : パンおよびズームのジェスチャーは有効にしますが、ダブルタップでのズームなど、標準外の追加的なジェスチャーを無効します。ダブルタップでズームすることを無効にすることで、ユーザーが画面をタップしたとき、ブラウザーが**クリック**イベントの生成を待つ必要がなくなります。これは "**pan-x pan-y pinch-zoom**" の別名です (互換性のために、これも有効です)。
- `pan-left`, `pan-right`, `pan-up`, `pan-down` {{experimental_inline}}
  - : 指定された方向へのスクロールを始める指 1 本のジェスチャーを有効にします。スクロールが始まると、その方向が予約されることがあります。なお、「上」にスクロールすること (**pan-up**) は、ユーザーが画面の表面を指で下方向にドラッグすることを意味し、同様に **pan-left** はユーザーが指で右にドラッグすることを意味します。より単純な表現がない限り、複数の方向を組み合わせることができます (例えば、 "**pan-left pan-right**" は "**pan-x**" の方がより単純なので不正ですが、 "**pan-left pan-down**" 有効です)。
- `pinch-zoom`
  - : 複数の指でのページのパンやズーム有効にします。これは **pan-** のあらゆる値と組み合わせることができます。

## アクセシビリティの考慮

`touch-action: none;` の宣言は、ブラウザー内蔵のズーム機能を操作することを阻害することがあります。これは弱視の人がページのコンテンツを読んで理解できるようになることを阻害します。

- [MDN "WCAG を理解する ― ガイドライン 1.4 の解説"](/ja/docs/Web/Accessibility/Understanding_WCAG/Perceivable#guideline_1.4_make_it_easier_for_users_to_see_and_hear_content_including_separating_foreground_from_background)
- [Understanding Success Criterion 1.4.4 | Understanding WCAG 2.0](https://www.w3.org/TR/UNDERSTANDING-WCAG20/visual-audio-contrast-scale.html)

## 公式定義

{{CSSInfo}}

## 形式文法

{{csssyntax}}

## 例

<h3 id="すべてのジェスチャーの無効化">すべてのジェスチャーの無効化</h3>

最も一般的な使い方は、要素（およびスクロールしないその子孫）のすべてのジェスチャーを無効にして、地図やゲームの画面のように、独自のドラッグやズームの振る舞いを提供することです。

#### HTML

```html
<div id="map"></div>
```

#### CSS

```css
#map {
  height: 150vh;
  width: 70vw;
  background: linear-gradient(blue, green);
  touch-action: none;
}
```

#### 結果

{{EmbedLiveSample('Disabling_all_gestures')}}

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{cssxref("pointer-events","pointer-events")}}
- {{domxref("Pointer_events", "ポインターイベント", "", 1)}}
- WebKit Blog [More Responsive Tapping on iOS](https://webkit.org/blog/5610/more-responsive-tapping-on-ios/ "Permanent Link: More Responsive Tapping on iOS")
- Google Developers Blog [Making touch scrolling fast by default](https://developers.google.com/web/updates/2017/01/scrolling-intervention)
- [スクロールスナップ](/ja/docs/Web/CSS/CSS_Scroll_Snap)
