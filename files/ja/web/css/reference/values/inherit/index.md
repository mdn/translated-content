---
title: inherit
slug: Web/CSS/Reference/Values/inherit
original_slug: Web/CSS/inherit
l10n:
  sourceCommit: 0cc9980e3b21c83d1800a428bc402ae1865326b2
---

**`inherit`** は CSS のキーワードで、要素のプロパティの[計算値](/ja/docs/Web/CSS/Guides/Cascade/Property_value_processing#計算値)を親要素から取得するよう指定します。 CSS の一括指定 {{cssxref("all")}} を含め、すべての CSS プロパティに適用することができます。

[継承プロパティ](/ja/docs/Web/CSS/Guides/Cascade/Inheritance#継承プロパティ)においては、既定の動作を推進するものであり、他のルールを上書きする場合にのみ必要です。

> [!NOTE]
> 親要素が包含ブロックではなかった場合であっても、常に文書ツリー内の親要素から継承が行われます。

## 例

### 選択された要素をルールから除外

```css
/* 第 2 レベルのヘッダーを緑色にする */
h2 {
  color: green;
}

/* サイドバーにあるものは、親の色を使用するようにする */
#sidebar h2 {
  color: inherit;
}
```

この例では、サイドバーの中の `h2` 要素の色が異なるかもしれません。例えば、ルールに一致する `div` の子要素を考えてみましょう。

```css
div#current {
  color: blue;
}
```

こうすると、青になります。

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [継承](/ja/docs/Web/CSS/Guides/Cascade/Inheritance)
- {{cssxref("initial")}} を使用すると、プロパティを初期値に設定します。
- {{cssxref("revert")}} キーワードを使用すると、プロパティをユーザーエージェントのスタイルシート（またはもしあれば、ユーザーのスタイル）で設定された値に初期化します。
- {{cssxref("revert-layer")}} キーワードを使用すると、プロパティを直前のカスケードレイヤーで確立された値に戻します。
- {{cssxref("unset")}} キーワードを使用すると、継承プロパティは継承値に、それ以外は初期値に設定します。
- {{cssxref("all")}} プロパティは、すべてのプロパティを一度に initial, inherit, revert, unset の状態にします。
