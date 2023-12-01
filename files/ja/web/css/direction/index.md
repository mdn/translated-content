---
title: direction
slug: Web/CSS/direction
---

{{CSSRef}}

**`direction`** は CSS のプロパティで、テキスト、表の列、水平方向のはみ出しの方向を設定します。右書きの言語（ヘブライ語やアラビア語など）では `rtl` を、左書きの言語（英語やそれ以外の多くの言語）では `ltr` を使います。

{{EmbedInteractiveExample("pages/css/direction.html")}}

なお、テキストの方向はふつうは文書内で（例えば [HTML の `dir` 属性](/ja/docs/Web/HTML/Global_attributes/dir) で）定義するものであり、 `direction` プロパティ直接使用して行うものではありません。

このプロパティは、基本的な文章の方向と、 {{Cssxref("unicode-bidi")}} プロパティで作られた埋め込み (embeddings) の方向を設定します。また、テキストやブロックレベル要素の既定の文字揃えや、表の行内にセルが流し込まれる方向を決めます。

HTML の `dir` 属性とは異なり、`direction` プロパティは表の列から表のセルには継承されません。これは CSS の継承が文書木に従うためで、表のセルは表の列の中ではなく、行の中にあるからです。

`direction` プロパティと {{cssxref("unicode-bidi")}} プロパティのみが、 {{cssxref("all")}} 一括指定プロパティの影響を受けません。

## 構文

```css
/* キーワード値 */
direction: ltr;
direction: rtl;

/* グローバル値 */
direction: inherit;
direction: initial;
direction: revert;
direction: unset;
```

### 値

- `ltr`
  - : テキストやその他の要素は左から右へと進みます。これが既定値です。
- `rtl`
  - : テキストやその他の要素は右から左へと進みます。

インラインレベル要素で `direction` プロパティに効果を持たせたいときは、{{Cssxref("unicode-bidi")}} プロパティの値が `embed` もしくは `override` である必要があります。

## 公式定義

{{cssinfo}}

## 形式文法

{{csssyntax}}

## 例

### 右書きの方向を設定

以下の例では、 2 つのテキスト文字列があり、どちらも `direction: rtl` を使って表示されています。アラビア語のテキストはこの設定で正しく表示されますが、日本語のテキストは句点が異常な位置に表示されるようになりました。

```css
blockquote {
  direction: rtl;
  width: 300px;
}
```

```html
<blockquote>
  <p>この段落は日本語ですが、間違って右から左へ書かれています。</p>
</blockquote>

<blockquote>
  <p>هذه الفقرة باللغة العربية ، لذا يجب الانتقال من اليمين إلى اليسار.</p>
</blockquote>
```

{{EmbedLiveSample('Setting_right-to-left_direction', '100%', 200)}}

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{Cssxref("unicode-bidi")}}
- {{Cssxref("writing-mode")}}
- HTML の [`dir`](/ja/docs/Web/HTML/Global_attributes#dir) グローバル属性
