---
title: initial
slug: Web/CSS/initial
tags:
  - CSS
  - CSS カスケード
  - CSS 値
  - 既定の状態
  - 初期状態
  - キーワード
  - レイアウト
  - リファレンス
  - initial
browser-compat: css.types.global_keywords.initial
translation_of: Web/CSS/initial
---
{{CSSRef}}

**`initial`** は CSS のキーワードで、要素にプロパティの[初期値（または既定値）](/ja/docs/Web/CSS/initial_value)を設定します。どの CSS プロパティにも適用できます。これは CSS の一括指定である {{cssxref("all")}} を含み、 `initial` を指定して、すべての CSS プロパティを初期値に戻すために使用することができます。

[継承プロパティ](/ja/docs/Web/CSS/inheritance#inherited_properties)では、初期値は予期せぬ値になるかもしれません。代わりに {{cssxref("inherit")}}, {{cssxref("unset")}}, {{cssxref("revert")}} キーワードを使用することを検討してください。

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

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{cssxref("unset")}} を使用すると、継承プロパティは継承値に、それ以外は初期値に設定します。
- {{cssxref("revert")}} を使用すると、プロパティをユーザーエージェントのスタイルシート（またはもしあれば、ユーザーのスタイル）で設定された値に初期化します。
- {{cssxref("inherit")}} を使用すると、要素のプロパティを親と同じ値にします。
- {{cssxref("all")}} プロパティは、すべてのプロパティを一度に initial, inherit, revert, unset の状態にします。
