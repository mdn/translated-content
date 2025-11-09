---
title: scripting
slug: Web/CSS/Reference/At-rules/@media/scripting
original_slug: Web/CSS/@media/scripting
l10n:
  sourceCommit: 0702c8b455d44d12892863735bf7f507ea8eb1cf
---

**`scripting`** は [CSS](/ja/docs/Web/CSS) の[メディア特性](/ja/docs/Web/CSS/Reference/At-rules/@media#メディア特性)で、 (JavaScript などの) スクリプトが利用できるかどうかを調べるために使用することができます。

> [!NOTE]
> 検出は、ユーザーの設定に基づいてブラウザーによって行われます。一部のブラウザー拡張機能は、さまざまな手法を使用してスクリプトのブロックを実装しています。そのような場合、 `scripting` メディア機能は期待どおりに動作しない場合があります。

## 構文

`scripting` 特性は、以下の一覧のうち一つのキーワード値で指定します。

- `none`
  - : スクリプトは現在の文書で全く利用できません。
- `initial-only`
  - : スクリプトはページを読み込んでいる間は利用できますが、その後は利用できません。
- `enabled`
  - : 現在の文書がスクリプトに対応しており、有効です。

## 例

### HTML

```html
<p class="script-none">スクリプトは利用できません。 :-(</p>
<p class="script-initial-only">
  スクリプトはページを読み込んでいる間だけ有効です。残念。
</p>
<p class="script-enabled">スクリプトは有効です。 :-)</p>
```

### CSS

```css
p {
  color: lightgray;
}

@media (scripting: none) {
  .script-none {
    color: red;
  }
}

@media (scripting: initial-only) {
  .script-initial-only {
    color: red;
  }
}

@media (scripting: enabled) {
  .script-enabled {
    color: red;
  }
}
```

### 結果

{{EmbedLiveSample("Examples")}}

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [@media](/ja/docs/Web/CSS/Reference/At-rules/@media)
- [メディアクエリーの使用](/ja/docs/Web/CSS/Guides/Media_queries/Using)
