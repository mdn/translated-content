---
title: unset
slug: Web/CSS/unset
l10n:
  sourceCommit: 13c58b0430c3972566ea2d3a254129c18b1ed800
---

{{CSSRef}}

**`unset`** は CSS のキーワードで、プロパティをリセットし、親から自然に継承された場合は継承値、そうでなければ[初期値](/ja/docs/Web/CSS/initial_value)を設定します。言い換えれば、前者の[継承プロパティ](/ja/docs/Web/CSS/Inheritance#継承プロパティ)の場合は {{cssxref("inherit")}} キーワードのように動作し、後者の[非継承プロパティ](/ja/docs/Web/CSS/Inheritance#非継承プロパティ)の場合は {{cssxref("initial")}} キーワードのように動作します。

**`unset`** は一括指定の {{cssxref("all")}} を含む、あらゆる CSS プロパティに対して適用することができます。

## 例

### 色

[`color`](/ja/docs/Web/CSS/color#formal_definition) は継承プロパティです。

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

[`border`](/ja/docs/Web/CSS/border#formal_definition) は非継承プロパティです。

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
- {{cssxref("inherit")}} キーワードを使用すると、要素のプロパティを親と同じ値にします。
- {{cssxref("revert")}} キーワードを使用すると、プロパティをユーザーエージェントのスタイルシート（またはもしあれば、ユーザーのスタイル）で設定された値に初期化します。
- {{cssxref("revert-layer")}} キーワードを使用すると、プロパティを直前のカスケードレイヤーで確立された値に戻します。
- {{cssxref("all")}} プロパティは、すべてのプロパティを一度に initial, inherit, revert, unset の状態にします。
