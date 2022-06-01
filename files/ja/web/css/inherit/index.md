---
title: inherit
slug: Web/CSS/inherit
tags:
  - CSS
  - CSS カスケード
  - CSS 値
  - カスケード
  - 継承
  - キーワード
  - レイアウト
  - リファレンス
  - スタイル
  - inherit
browser-compat: css.types.global_keywords.inherit
translation_of: Web/CSS/inherit
---
{{CSSRef}}

**`inherit`** は CSS のキーワードで、要素のプロパティの[計算値](/ja/docs/Web/CSS/computed_value)を親要素から取得するよう指定します。 CSS の一括指定 {{cssxref("all")}} を含め、すべての CSS プロパティに適用することができます。

[継承プロパティ](/ja/docs/Web/CSS/inheritance#inherited_properties)においては、既定の動作を推進するものであり、他の規則を上書きする場合にのみ必要です。

親要素が包含ブロックではなかった場合であっても、常に文書ツリー内の親要素から継承が行われます。

## 例

### 選択された要素をルールから除外

```css
/* 第 2 レベルのヘッダーを緑色にする */
h2 { color: green; }

/* ... ただしサイドバーの中にあるものは、親要素の色を使用する */
#sidebar h2 { color: inherit; }
```

この例の中で、サイドバー内にある `h2` 要素は異なる色になる可能性があります。例えば、以下のルールに一致する div の子であった場合は ...

```css
div#current { color: blue; }
```

... 青になるでしょう。

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [継承](/ja/docs/Web/CSS/inheritance)
- {{cssxref("initial")}} を使用すると、プロパティを初期値に設定します。
- {{cssxref("unset")}} を使用すると、継承プロパティは継承値に、それ以外は初期値に設定します。
- {{cssxref("revert")}} を使用すると、プロパティをユーザーエージェントのスタイルシート (またはもしあれば、ユーザーのスタイル) で設定された値に初期化します。
- {{cssxref("all")}} プロパティは、すべてのプロパティを一度に initial, inherit, revert, unset の状態にします。
