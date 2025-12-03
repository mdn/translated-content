---
title: <text-edge>
slug: Web/CSS/Reference/Values/text-edge
original_slug: Web/CSS/text-edge
l10n:
  sourceCommit: 49bbddc34034e59a63c0b2cda79e45c94ea9daa9
---

**`<text-edge>`** は{{glossary("enumerated", "列挙")}}[データ型](/ja/docs/Web/CSS/Reference/Values/Data_types)で、フォントのブロックの先頭と末尾の端の特定の領域を表すフォントメトリックを指定するキーワードを定義します。各キーワードは、フォントの上端や下端の端の位置を指定します。

`<text-edge>` の値は、 {{cssxref("text-box-edge")}} プロパティで使用され、テキスト要素のブロックコンテナーのブロックの先頭端および末尾端から切り取る空間の大きさを指定します。

## 構文

```css
<text-edge> =
  [ text | ideographic | ideographic-ink ] |
  [ text | ideographic | ideographic-ink | cap | ex ] [ text | ideographic | ideographic-ink | alphabetic ]
```

> [!NOTE]
> `ideographic` および `ideographic-ink` のキーワードは、 [CJK 言語](https://https://ja.wikipedia.org/wiki/CJKV)の文字に固有の上端と下端の位置を指定するために用意されています。現在、これらのキーワードの正確な動作については議論が分かれており、どのブラウザーも対応していません。

## 値

`<text-edge>` データ型は、フォントのブロックの先頭（上端）やブロックの末尾（下端）の端の特定の領域を表す 1 つまたは 2 つのキーワードで構成されます。

- 1 つの値を指定すると、そのキーワードを使用して、フォントの上端と下端の位置が指定されます。
- 2 つの値を指定すると、最初の値はフォントの上端の位置を指定し、2 つ目の値はフォントの下端の位置を指定します。

### 単一のキーワード値

- `text`
  - : フォントの上端と下端は、そのテキストオーバーベースライン/テキストアンダーベースラインです。これには、フォントのアセンダーとディセンダーが含まれますが、テキストに設定されている[半行送り](/ja/docs/Glossary/Leading)は含まれません。

    > [!NOTE]
    > テキスト要素に含まれる半行の量は、 {{cssxref("line-height")}} プロパティを使用して制御できます。

### 2 つのキーワード値

- `alphabetic`
  - : フォントの下端は、そのアルファベットのベースラインであり、小文字（例えば "m", "n", "o"）や大文字の下端です。
- `cap`
  - : フォントの上端は、大文字の高さである cap-height のベースラインです。
- `ex`
  - : フォントの上端は、その x-height ベースライン、つまり小文字の低い文字の上端です。
- `text`
  - : フォントの上端は、そのテキストの上端ベースライン（フォントのアセンダーは含まれますが、上行送りは含まれません）であり、下端は、そのテキストの下端ベースライン（フォントのディセンダーは含まれますが、下行送りは含まれません）です。

## 例

See [`text-box-edge` examples](/ja/docs/Web/CSS/Reference/Properties/text-box-edge#examples)

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{cssxref("text-box")}}, {{cssxref("text-box-edge")}}, {{cssxref("text-box-trim")}}
- [CSS インラインレイアウト](/ja/docs/Web/CSS/Guides/Inline_layout) module
