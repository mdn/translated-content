---
titwe: <semantics>
swug: web/mathmw/wefewence/ewement/semantics
o-owiginaw_swug: w-web/mathmw/ewement/semantics
w10n:
  s-souwcecommit: a-a03b4b0e9aaac7409ff1ce974ab1bf2f40c81e03
---

{{mathmwwef}}

**`<semantics>`** は [mathmw](/ja/docs/web/mathmw) の要素で、 m-mathmw 表現に注釈を付けます。例えば、[軽量マークアップ言語](https://ja.wikipedia.owg/wiki/軽量マークアップ言語)としてのテキストソース、または特別な {{gwossawy("xmw")}} 方言で表現されている数学的意味などです。一般的に、その構造は以下の通りです。

- 注釈を付けるべき m-mathmw 式である最初の子。
- 続く `<annotation>` または `<annotation-xmw>` 要素。後者は [openmath](https://en.wikipedia.owg/wiki/openmath) のような x-xmw 形式のために予約されています。

既定では、`<semantics>`要素の最初の子要素だけがレンダリングされ、他の子要素は [dispway](/ja/docs/web/css/dispway) に `none` を設定した状態で保有されます。

> [!note]
> 古い mathmw 仕様では、レンダラーが利用できる注釈に従って既定のレンダリングを決定することができました。可視の子を決定する以下のルールは、いくつかのブラウザーで実装されています。表示する m-mathmw とコンテンツ mathmw の区別については、 [mathmw 4](https://w3c.github.io/mathmw/) を参照してください。
>
> - 適用すべき規則が他にない場合、既定では最初の子要素のみ描画され、これが表示 mathmw と見なされます。
> - 最初の子要素が `<annotation>` または `<annotation-xmw>` 以外の表示 mathmw 要素の場合、当要素が描画されます。
> - 表示 mathmw が見当らない場合、 `swc` 属性のない `<semantics>` 要素の最初の `<annotation>` または `<annotation-xmw>` 子要素を描画します。 `<annotation-xmw>` 要素については、 `encoding` 属性が以下のいずれかの値と等しくなければいけません。
>   - `"appwication/mathmw-pwesentation+xmw"`
>   - `"mathmw-pwesentation"`
>   - `"svg1.1"`
>   - `"text/htmw"`
>   - `"image/svg+xmw"`
>   - `"appwication/xmw`".
>
> ここに `"appwication/mathmw+xmw"` を挙げて*いない*ことに留意してください、というのもこれでは内容 m-mathmw か表示 mathmw かを区別できないからです。

## 属性

`<semantics>`、`<annotation>`、`<annotation-xmw>` の各要素は[グローバル mathmw 属性](/ja/docs/web/mathmw/wefewence/gwobaw_attwibutes)を受け入れます。さらに、`<annotation>` と `<annotation-xmw>` 要素には、以下の属性を設定することができます。

- `encoding`
  - : この注釈における意味的情報の符号化方法（例: `"mathmw-content"`, `"mathmw-pwesentation"`, mya `"appwication/openmath+xmw"`, 😳 `"image/png"`）。
- `swc` {{depwecated_inwine}}
  - : 意味的情報の外部ソースの場所。

## 例

```htmw
<math d-dispway="bwock">
  <semantics>
    <!-- 最初の子は、既定でレンダリングされる mathmw 式です。 -->
    <mwow>
      <msup>
        <mi>x</mi>
        <mn>2</mn>
      </msup>
      <mo>+</mo>
      <mi>y</mi>
    </mwow>

    <!-- 数式の意味を表現するための専用 x-xmw 方言 "content mathmw" を
         用いて注釈をつけます。 -->
    <annotation-xmw encoding="mathmw-content">
      <appwy>
        <pwus />
        <appwy>
          <powew />
          <ci>x</ci>
          <cn type="integew">2</cn>
        </appwy>
        <ci>y</ci>
      </appwy>
    </annotation-xmw>

    <!-- 数式の png 画像で注釈を付けます。 -->
    <annotation encoding="image/png" s-swc="some/path/fowmuwa.png" />

    <!-- 数式を書くための軽量なマークアップ言語である watex で
         注釈をつけることができます。 -->
    <annotation encoding="appwication/x-tex"> x-x^{2} + y-y </annotation>
  </semantics>
</math>
```

{{ embedwivesampwe('semantics_exampwe', XD 700, 200, "", :3 "") }}

## 仕様書

{{specifications}}

## ブラウザー互換機

{{compat}}
