---
title: xml:space
slug: Web/SVG/Reference/Attribute/xml:space
l10n:
  sourceCommit: 3e543cdfe8dddfb4774a64bf3decdcbab42a4111
---

{{Deprecated_Header}}

SVG では、要素内の空白文字を処理するために、XML の組み込み属性 **`xml:space`** に対応しています。要素内の子要素にも `xml:space` 属性を設定でき、その場合は親要素の属性の設定を上書きします。

> [!NOTE]
> `xml:space` 属性の代わりに、CSS の {{cssxref("white-space")}} プロパティを使用してください。

この属性は、ブラウザーによるテキストコンテンツの構文解析方法に影響を与えるため、{{Glossary("DOM")}} の構築方法も変化します。したがって、DOM API を通じてこの属性の値を変更しても、何の効果も得られない場合があります。

## 要素

この属性はあらゆる SVG 要素で使用できます。

## 使用上のメモ

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">値</th>
      <td><code>default</code> | <code>preserve</code></td>
    </tr>
    <tr>
      <th scope="row">デフォルト値</th>
      <td><code>default</code></td>
    </tr>
    <tr>
      <th scope="row">アニメーション</th>
      <td>不可</td>
    </tr>
  </tbody>
</table>

- `default`
  - : この値を設定すると、ホワイトスペース文字は次の順序で処理されます。
    1. すべての改行文字が除去されます。
    2. すべてのタブ文字が空白文字に変換されます。
    3. 先頭および末尾の空白文字はすべて除去されます。
    4. 連続する空白文字はすべて、単一の空白文字にまとめられます。

- `preserve`
  - : この値は、ユーザーエージェントに対し、すべての改行文字とタブ文字を空白に置換するよう指示します。その後、すべての空白文字（先頭、末尾、および連続する複数の空白文字を含む）が描画されます。

    例えば、文字列 "a&nbsp;&nbsp;&nbsp;b" （"a" と "b" の間に 3 つの空白がある）は、"a" と "b" の間の空間が "a b"（"a" と "b" の間に 1 つの空白がある）よりも広くなります。

## 例

```css hidden
html,
body,
svg {
  height: 100%;
}
```

```html-nolint
<svg viewBox="0 0 160 50" xmlns="http://www.w3.org/2000/svg">
  <text y="20" xml:space="default">    Default    spacing</text>
  <text y="40" xml:space="preserve">    Preserved    spacing</text>
</svg>
```

{{EmbedLiveSample("Examples", "160", "50")}}

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}
