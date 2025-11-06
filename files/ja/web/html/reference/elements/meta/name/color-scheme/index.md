---
title: <meta name="color-scheme">
short-title: color-scheme
slug: Web/HTML/Reference/Elements/meta/name/color-scheme
l10n:
  sourceCommit: 0754cd805a8e010d2e3a2a065f634a3bcf358252
---

**`color-scheme`** は {{htmlelement("meta")}} 要素の [`name`](/ja/docs/Web/HTML/Reference/Elements/meta/name) 属性の値で、ユーザーエージェントがページに使用すべき提案としての配色を示します。
指定した場合、配色は `<meta>` 要素の [`content`](/ja/docs/Web/HTML/Reference/Elements/meta#content) 属性に、 CSS の有効な {{cssxref("color-scheme")}} 値を使用して定義します。

文書レベルの配色は、CSS の {{cssxref("color-scheme")}} プロパティで個々の要素で推奨され受け入れられる配色を指定するのと同じように、文書レベルで機能します。
`<meta name="color-scheme">` の主な用途は、ライトモードとダークモードの互換性と優先順位を示すことです。
例えば、文書がダークモードを推奨するが、ライトモードにも対応していることを示すには、次のように記述します。

```html
<meta name="color-scheme" content="dark light" />
```

CSS の {{cssxref("@media/prefers-color-scheme", "prefers-color-scheme")}} メディア特性を使用すると、スタイルを現在の配色に合わせることができます。

## 使用上のメモ

`<meta name="color-scheme">` 要素には、次の追加属性があります。

- [`content`](/ja/docs/Web/HTML/Reference/Elements/meta#content)
  - : `<meta>` 要素で`name=color-scheme` を指定した場合は、 `content` 属性を指定して配色を CSS の {{cssxref("color-scheme")}} の値として定義しなければなりません。
    `content` 属性は、次のいずれかになります。
    - `normal`
      - : この文書は配色を意識していないので、既定のカラーパレットを使って描画する必要があります。
    - `light`, `dark`, `light dark`, `dark light`
      - : この文書で対応している 1 つ以上の配色。
        複数の配色を指定すると、文書では最初の配色が推奨されますが、ユーザーが 2 つ目の配色を希望した場合は、2 つ目の配色も受け入れられます。
        同じ配色を複数回指定しても、1 回指定した場合と同じ効果になります。
    - `only light`
      - : この文書がライトモードのみに対応していることを示します。背景色が明るく、前景色が暗い色です。
        `only dark` は有効ではありません。ダークモードに対応していない文書を強制的にダークモードで描画すると、コンテンツが読めなくなる可能性があるからです。主要なブラウザーは、特に設定されていなければ既定でライトモードになります。
- `media` {{optional_inline}}
  - : 有効なメディア種別またはクエリー。
    指定されている場合、メディアクエリーが一致すると、`content` 属性で定義された文書の配色オプションがブラウザーに提案されます。

    これは、主に CSS の {{cssxref("@media/prefers-color-scheme", "prefers-color-scheme")}} メディア特性で有用です。

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
- [`prefers-color-scheme`](/ja/docs/Web/CSS/Reference/At-rules/@media/prefers-color-scheme) メディアクエリー
