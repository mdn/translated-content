---
title: position-visibility
slug: Web/CSS/Reference/Properties/position-visibility
l10n:
  sourceCommit: 7e14795a6ef2bf5e760c315ce64800dd1cd98c29
---

**`position-visibility`** は [CSS](/ja/docs/Web/CSS) のプロパティで、アンカー位置指定された要素を、例えば包含要素やビューポートをはみ出しているかどうかになどよって、条件付きで非表示にすることができます。

## 構文

```css
/* 単一の値 */
position-visibility: always;
position-visibility: anchors-visible;
position-visibility: no-overflow;

/* グローバル値 */
position-visibility: inherit;
position-visibility: initial;
position-visibility: revert;
position-visibility: revert-layer;
position-visibility: unset;
```

### 値

- `always`
  - : この位置指定要素は常に表示されます。
- `anchors-visible`
  - : アンカーが、その親要素（またはビューポート）からはみ出していたり、他の要素に覆われていたりして完全に隠れている場合、位置指定された要素は完全に非表示になります。
- `no-overflow`
  - : 位置指定要素が親要素またはビューポートからはみ出し始めた場合、その要素は完全に非表示になります。

仕様書は `anchors-valid` 値も定義していますが、どのブラウザーでも実装されていません。

## 解説

状況によっては、アンカー位置指定された要素を表示したくない場合があります。例えば、関連するアンカーがスクロールで画面外に移動したにもかかわらず、アンカー位置指定された要素が部分的または完全に表示されたままの場合、その要素が何を指しているのか不明確になり、不必要に空間を消費する可能性があります。そのため、完全に非表示にしたい場合があります。

`position-visibility` プロパティを使用すると、アンカー位置指定された要素を常に表示したり、関連するアンカー要素が完全に非表示の場合 (`anchors-visible`) や、アンカー位置指定された要素自体が部分的に非表示の場合 (`no-overflow`) に条件付きで非表示にしたりできます。

`position-visibility` によって要素が非表示にされた場合、それは**完全に隠された状態**と呼ばれます。これは、実際の可視性値にかかわらず、その要素と子孫要素の {{cssxref("visibility")}} 値が `hidden` に設定されたかのように動作するということです。

`position-visibility` は、位置指定要素を完全に非表示にすることを優先する場合にのみ使用すべきです。ほとんどの場合、位置指定要素がはみ出し始めた際に配置を変更し、画面上に表示されたまま使用できるようにしたほうが合理的です。これは {{cssxref("position-try-fallbacks")}} プロパティと {{cssxref("@position-try")}} アットルールで実現できます。詳細は[オーバーフロー時の代替オプションと条件付き非表示](/ja/docs/Web/CSS/Guides/Anchor_positioning/Try_options_hiding)のガイドを参照してください。

## 公式定義

{{cssinfo}}

## 形式文法

{{csssyntax}}

## 例

### 基本的な使い方

この例では、アンカー位置指定された要素の `position-visibility` プロパティの値を変更し、それぞれの値の効果を示すことができます。

#### HTML

2 つの {{htmlelement("div")}} 要素を指定します。クラス `anchor` を持つアンカー要素と、クラス `infobox` を持つ位置指定要素です。

```html hidden
<p>
  Malesuada nunc vel risus commodo viverra maecenas accumsan lacus. Vel elit
  scelerisque mauris pellentesque pulvinar pellentesque habitant morbi
  tristique.
</p>

<p>
  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
  incididunt ut labore et dolore magna aliqua. Dui nunc mattis enim ut tellus
  elementum sagittis vitae et.
</p>

<p>
  Malesuada nunc vel risus commodo viverra maecenas accumsan lacus. Vel elit
  scelerisque mauris pellentesque pulvinar pellentesque habitant morbi
  tristique. Porta lorem mollis aliquam ut porttitor. Turpis cursus in hac
  habitasse platea dictumst quisque.
</p>
```

```html
<div class="anchor">⚓︎</div>

<div class="infobox">
  <p>これは情報ボックスです。</p>
</div>
```

```html hidden
<p>
  Nisi quis eleifend quam adipiscing vitae proin sagittis nisl rhoncus. In arcu
  cursus euismod quis viverra nibh cras pulvinar. Vulputate ut pharetra sit amet
  aliquam.
</p>

<p>
  Malesuada nunc vel risus commodo viverra maecenas accumsan lacus. Vel elit
  scelerisque mauris pellentesque pulvinar pellentesque habitant morbi
  tristique. Porta lorem mollis aliquam ut porttitor. Turpis cursus in hac
  habitasse platea dictumst quisque. Dolor sit amet consectetur adipiscing elit.
  Ornare lectus sit amet est placerat. Nulla aliquet porttitor lacus luctus
  accumsan.
</p>

<form>
  <fieldset>
    <legend>位置の可視性を選択</legend>
    <div>
      <label for="radio-always">always</label>
      <input
        type="radio"
        id="radio-always"
        name="position-visibility"
        value="always"
        checked />
    </div>
    <div>
      <label for="radio-anchors-visible">anchors-visible</label>
      <input
        type="radio"
        id="radio-anchors-visible"
        name="position-visibility"
        value="anchors-visible" />
    </div>
    <div>
      <label for="radio-no-overflow">no-overflow</label>
      <input
        type="radio"
        id="radio-no-overflow"
        name="position-visibility"
        value="no-overflow" />
    </div>
  </fieldset>
</form>
```

HTML には、コンテンツをビューポートより高くしてスクロールを必要とするようにするためのダミーテキストも含まれています。また、 {{htmlelement("fieldset")}} で異なる `position-visibility` 値を持つ[ラジオボタン](/ja/docs/Web/HTML/Reference/Elements/input/radio)のグループを追加しています。簡潔さを考慮し、これらのマークアップは省略しています。

#### CSS

アンカー要素として `<div>` をスタイル設定し、`infobox` `<div>` をそれに固定します。関連する CSS は以下の通りです。

```css hidden
body {
  width: 50%;
  margin: 0 auto;
}

.anchor {
  font-size: 1.8rem;
  color: white;
  text-shadow: 1px 1px 1px black;
  background-color: hsl(240 100% 75%);
  width: fit-content;
  border-radius: 10px;
  border: 1px solid black;
  padding: 3px;
}

form {
  position: fixed;
  background: white;
  bottom: 2px;
  right: 2px;
}

.infobox {
  color: darkblue;
  background-color: azure;
  border: 1px solid #dddddd;
  padding: 10px;
  border-radius: 10px;
  font-size: 1rem;
}
```

```css
.anchor {
  anchor-name: --my-anchor;
}

.infobox {
  position-anchor: --my-anchor;
  position: fixed;
  position-area: top span-all;
  margin-bottom: 5px;
  position-visibility: always;
}
```

#### JavaScript

ラジオボタンに [`change`](/ja/docs/Web/API/HTMLElement/change_event) イベントハンドラーを追加し、新しい値が選択された際に情報ボックスの `position-visibility` プロパティ値を更新します。

```js
const infobox = document.querySelector(".infobox");
const radios = document.querySelectorAll('[name="position-visibility"]');

for (const radio of radios) {
  radio.addEventListener("change", setPositionVisibility);
}

function setPositionVisibility(e) {
  infobox.style.positionVisibility = e.target.value;
}
```

#### 結果

`position-visibility` の値を変えて、ページをスクロールして効果を確認してください。`position-visibility: always` を設定すると、配置された要素は非表示になりません。`position-visibility: anchors-visible` を設定すると、アンカーが部分的または完全に画面上に表示されている場合にのみ配置要素が表示されます。`position-visibility: no-overflow` を設定すると、配置要素がビューポートからはみ出し始めた時点で非表示になります。

{{ EmbedLiveSample("Basic usage", "100%", "180") }}

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{cssxref("anchor-name")}}
- {{cssxref("position-anchor")}}
- {{cssxref("position")}}
- {{cssxref("position-area")}}
- [CSS アンカー位置指定](/ja/docs/Web/CSS/Guides/Anchor_positioning)モジュール
- [CSS アンカー位置指定](/ja/docs/Web/CSS/Guides/Anchor_positioning/Using)ガイド
- [オーバーフロー時の代替や条件付き非表示](/ja/docs/Web/CSS/Guides/Anchor_positioning/Try_options_hiding)ガイド
