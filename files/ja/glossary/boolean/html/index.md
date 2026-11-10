---
title: Boolean attribute (論理属性) (HTML)
slug: Glossary/Boolean/HTML
l10n:
  sourceCommit: 7ed7b730bf88307cc6cf34b82bb1d735b9a1aa1f
---

**論理属性** (boolean attribute) とは、{{Glossary("HTML")}} において、`true`（真） か `false`（偽）の値を表す{{glossary("attribute", "属性")}}です。HTML タグに論理属性が含まれている場合、その属性の値がどのようなものであっても、その属性はその要素に対して `true` に設定されます。HTML タグに属性が含まれていない場合、その属性は `false` に設定されます。

属性が存在する場合、以下のいずれかの形式を持つことができます。

- 属性名のみ。例えば `attribute` で、その暗黙の値は空文字列です
- 空文字列の値を持つ属性。例えば `attribute=""`
- 属性名そのものの値を持つ属性（先頭と末尾の空白がなく、大文字と小文字を区別しません）。例えば `attribute="attribute"`、`attribute="ATTRIBUTE"`

> [!NOTE]
> 文字列 "true" と "false" は無効な値です。属性を `false` に設定するには、属性全体を省略する必要があります。ブラウザーが _任意の_ 文字列値を `true` として処理する場合がありますが、このような動作に依存すべきではありません。

こちらは HTML の論理属性 `checked` の例です。

```html
<!-- 次のチェックボックスは最初にレンダリングされた際、チェックされた状態でレンダリングされます -->
<input type="checkbox" checked />
<input type="checkbox" checked="" />
<input type="checkbox" checked="checked" />
<input type="checkbox" checked="Checked" />

<!-- 次のチェックボックスは最初にレンダリングされた際、チェックされていない状態でレンダリングされます -->
<input type="checkbox" />
```

## 関連情報

- [論理属性](/ja/docs/Web/HTML/Reference/Attributes#boolean_attributes)
- HTML 仕様書の[論理属性](https://html.spec.whatwg.org/#boolean-attributes)<sup>(英語)</sup>
- 関連する用語:
  - {{Glossary("Attribute", "属性")}}
  - {{Glossary("Enumerated", "列挙型属性")}}
