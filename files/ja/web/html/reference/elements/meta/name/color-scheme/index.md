---
title: '`<meta name="color-scheme">` 属性値'
short-title: color-scheme
slug: Web/HTML/Reference/Elements/meta/name/color-scheme
l10n:
  sourceCommit: 3a7da595860e07c871e243e58a8fe8b7043e305a
---

**`color-scheme`** は {{htmlelement("meta")}} 要素の [`name`](/ja/docs/Web/HTML/Reference/Elements/meta/name) 属性の値で、ユーザーエージェントにページで使用するよう推奨する配色を示します。
指定する場合、配色は `<meta>` 要素の [`content`](/ja/docs/Web/HTML/Reference/Attributes/content) 属性に、有効な CSS {{cssxref("color-scheme")}} 値で定義します。

文書の配色は文書レベルで適用されます。一方、CSS の {{cssxref("color-scheme")}} プロパティは、個々の要素で優先する配色と受け入れ可能な配色を指定します。
`<meta name="color-scheme">` の主な用途は、ライトモードとダークモードの互換性と優先順位を示すことです。
例えば、文書がダークモードを推奨するが、ライトモードにも対応していることを示すには、次のように記述します。

```html
<meta name="color-scheme" content="dark light" />
```

CSS の {{cssxref("@media/prefers-color-scheme", "prefers-color-scheme")}} メディア特性を使用すると、スタイルを現在の配色に合わせることができます。

## 使用上のメモ

`<meta name="color-scheme">` 要素には、次の属性があります。

- [`content`](/ja/docs/Web/HTML/Reference/Attributes/content)
  - : `<meta>` 要素で `name="color-scheme"` を指定する場合、配色を CSS の {{cssxref("color-scheme")}} 値として定義する `content` 属性が必要です。
    `content` 属性は、次のいずれかになります。
    - `normal`
      - : この文書は配色を認識しないため、デフォルトのカラーパレットを使って描画します。
    - `light`, `dark`, `light dark`, `dark light`
      - : この文書で対応している 1 つ以上の配色。
        複数の配色を指定すると、文書では最初の配色が推奨されますが、ユーザーが 2 つ目の配色を希望した場合は、2 つ目の配色も受け入れられます。
        同じ配色を複数回指定しても、1 回指定した場合と同じ効果になります。
    - `only light`
      - : この文書がライトモードのみに対応していることを示します。背景色が明るく、前景色が暗い色です。
        `only dark` は無効です。ダークモードに対応していない文書を強制的にダークモードで描画すると、コンテンツが読めなくなる可能性があるためです。特に設定されていない場合、主要なブラウザーはデフォルトでライトモードになります。

## 例

### color-scheme キーワードの使用

次の例は、ページがライトテーマとダークテーマの両方に対応していることをブラウザーに指示しています。
ライトまたはダークの配色が使用されるかどうかは、OS レベルの設定やブラウザーの設定などのユーザーの環境設定によって決まります。

```html
<meta name="color-scheme" content="light dark" />
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- CSS の {{cssxref("color-scheme")}} プロパティ
- {{cssxref("@media/prefers-color-scheme")}} メディアクエリー
