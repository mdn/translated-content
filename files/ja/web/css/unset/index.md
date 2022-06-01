---
title: unset
slug: Web/CSS/unset
tags:
  - CSS
  - CSS カスケード
  - CSS 値
  - キーワード
  - レイアウト
  - リファレンス
  - スタイル
  - unset
browser-compat: css.types.global_keywords.unset
translation_of: Web/CSS/unset
---
{{CSSRef}}

**`unset`** は CSS のキーワードで、プロパティをリセットし、親から自然に継承された場合は継承値、そうでなければ[初期値](/ja/docs/Web/CSS/initial_value)を設定します。言い換えれば、前者の[継承プロパティ](/ja/docs/Web/CSS/inheritance#inherited_properties)の場合は {{cssxref("inherit")}} キーワードのように動作し、後者の[非継承プロパティ](/ja/docs/Web/CSS/inheritance#non-inherited_properties)の場合は {{cssxref("initial")}} キーワードのように動作します。

**`unset`** は一括指定の {{cssxref("all")}} を含む、あらゆる CSS プロパティに対して適用することができます。

## 例

### 色

#### HTML

```html
<p>このテキストは赤です。</p>
<div class="foo">
  <p>このテキストも赤です。</p>
</div>
<div class="bar">
  <p>このテキストは緑色（既定の継承値）です。</p>
</div>
```

#### CSS

```css
.foo {
  color: blue;
}
.bar {
  color: green;
}

p {
  color: red;
}
.bar p {
  color: unset;
}
```

#### 結果

{{ EmbedLiveSample('Color') }}

### 境界線

#### HTML

```html
<p>このテキストには赤い境界線があります。</p>
<div>
  <p>このテキストには赤い境界線があります。</p>
</div>
<div class="bar">
  <p>このテキストには黒い境界線があります（既定値、継承なし）。</p>
</div>
```

#### CSS

```css
div {
  border: 1px solid green;
}

p {
  border: 1px solid red;
}

.bar p {
  border-color: unset;
}
```

#### 結果

{{ EmbedLiveSample('Border', 'auto', 200) }}

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{cssxref("initial")}} を使用すると、プロパティを初期値に設定します。
- {{cssxref("revert")}} を使用すると、プロパティをユーザーエージェントのスタイルシート（またはもしあれば、ユーザーのスタイル）で設定された値に初期化します。
- {{cssxref("inherit")}} を使用すると、要素のプロパティを親と同じ値にします。
- {{cssxref("all")}} プロパティは、すべてのプロパティを一度に initial, inherit, revert, unset の状態にします。
