---
title: scriptlevel
slug: Web/MathML/Reference/Global_attributes/scriptlevel
l10n:
  sourceCommit: 85fccefc8066bd49af4ddafc12c77f35265c7e2d
---

**`scriptlevel`** は[グローバル属性](/ja/docs/Web/MathML/Reference/Global_attributes)で、MathML 要素の [math-depth](/ja/docs/Web/CSS/Reference/Properties/math-depth) を設定します。これにより、[ユーザーエージェントスタイルシート](/ja/docs/Web/CSS/Guides/Cascade/Introduction#user-agent_stylesheets)による MathML 数式内での[フォントサイズ](/ja/docs/Web/CSS/Reference/Properties/font-size)の自動計算を定義するルールを上書きすることができます。

## 構文

```html-nolint
<math scriptlevel="-1"> <!-- math-depth を 1 だけ減算 -->
<math scriptlevel="+2"> <!-- math-depth を 2 だけ加算 -->
<math scriptlevel="0"> <!-- math-depth を 0 にリセット -->
```

### 値

`<U>` が符号なし[整数](/ja/docs/Web/CSS/Reference/Values/integer) （つまり、符号記号が除去されたもの）であるとすると、受け入れられる値は次のとおりです。

- `<U>`
  - : `math-depth` を `<U>` に設定します。これにより、要素の `font-size` が、指定された深さにある要素の `font-size` と同じ値に設定されます。
- `+<U>`
  - : `math-depth` を値 `add(<U>)` に設定します。これにより、要素の `font-size` が `<U>` 回分縮小されます。
- `-<U>`
  - : `math-depth` を値 `add(-<U>)` に設定します。これにより、要素の `font-size` が `<U>` 倍分拡大されます。

## 例

```css hidden
html,
body {
  height: 100%;
}

body {
  display: grid;
  place-items: center;
}

math {
  font-size: 24px;
}
```

```html
<!-- <math> のルートでは、math-depth のデフォルト値は 0 です。 -->
<math>
  <msubsup>
    <!-- ベースでは、math-depth とフォントサイズは変更されません。 -->
    <mtext>基底文字</mtext>
    <!-- math-depth は、添字内でデフォルトで add(1) となるため、
         1 ずつ増加し、フォントサイズが 1 段階変倍されます。 -->
    <mtext>下付き文字</mtext>
    <!-- math-depth は上付き文字内でもデフォルトで add(1) になりますが、scriptlevel 属性によって代わりに 2 ずつ増加するよう指示されているため、
    実際にはフォントサイズが 2 倍分変倍されます。 -->
    <mtext scriptlevel="+2">上付き文字</mtext>
  </msubsup>
</math>
```

{{EmbedLiveSample("Example", "", 150)}}

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- すべての[グローバル属性](/ja/docs/Web/MathML/Reference/Global_attributes)
- [displaystyle](/ja/docs/Web/MathML/Reference/Global_attributes/displaystyle) グローバル属性
- {{cssxref("font-size")}}
- {{cssxref("math-depth")}}
- {{cssxref("math-style")}}
