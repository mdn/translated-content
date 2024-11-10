---
title: initial
slug: Web/CSS/initial
l10n:
  sourceCommit: 13c58b0430c3972566ea2d3a254129c18b1ed800
---

{{CSSRef}}

**`initial`** は CSS のキーワードで、要素にプロパティの[初期値（または既定値）](/ja/docs/Web/CSS/initial_value)を設定します。どの CSS プロパティにも適用できます。これは、 CSS の一括指定プロパティ {{cssxref("all")}} を 含め、すべての CSS プロパティに適用することができます。 `all` を `initial` に設定すると、すべての CSS プロパティをそれぞれの初期値に戻すことができます。

[継承プロパティ](/ja/docs/Web/CSS/Inheritance#inherited_properties)では、初期値は予期せぬ値になるかもしれません。代わりに {{cssxref("inherit")}}, {{cssxref("unset")}}, {{cssxref("revert")}}, {{cssxref("revert-layer")}} キーワードを使用することを検討してください。

## 例

### initial を使用して要素の色を初期化

#### HTML

```html
<p>
  <span>このテキストは赤です。</span>
  <em>このテキストは初期値（ふつうは黒）です。</em>
  <span>これは再び赤です。</span>
</p>
```

#### CSS

```css
p {
  color: red;
}

em {
  color: initial;
}
```

#### 結果

{{EmbedLiveSample('Using_initial_to_reset_color_for_an_element')}}

この例では `initial` キーワードにより、`em` 要素の `color` 値は、仕様書で定義されている [`color`](/ja/docs/Web/CSS/color#公式定義) の初期値に戻されます。

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{cssxref("inherit")}} キーワードを使用すると、要素のプロパティを親と同じ値にします。
- {{cssxref("revert")}} キーワードを使用すると、プロパティをユーザーエージェントのスタイルシート（またはもしあれば、ユーザーのスタイル）で設定された値に初期化します。
- {{cssxref("revert-layer")}} キーワードを使用すると、プロパティを直前のカスケードレイヤーで確立された値に戻します。
- {{cssxref("unset")}} キーワードを使用すると、継承プロパティは継承値に、それ以外は初期値に設定します。
- {{cssxref("all")}} プロパティは、すべてのプロパティを一度に initial, inherit, revert, unset の状態にします。
