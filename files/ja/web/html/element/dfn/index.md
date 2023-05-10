---
title: '<dfn>: 定義要素'
slug: Web/HTML/Element/dfn
---

{{HTMLSidebar}}

**HTML の定義要素** (**_\<dfn>_**) は、定義句や文の文脈の中で定義している用語を示すために用いられます。 `<dfn>` の直近の祖先である {{HTMLElement("p")}} 要素、 {{HTMLElement("dt")}}/{{HTMLElement("dd")}} の組み合わせ、 {{HTMLElement("section")}} 要素が用語の定義とみなされます。

{{EmbedInteractiveExample("pages/tabbed/dfn.html", "tabbed-shorter")}}

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">
        <a href="/ja/docs/Web/Guide/HTML/Content_categories"
          >コンテンツカテゴリー</a
        >
      </th>
      <td>
        <a href="/ja/docs/Web/Guide/HTML/Content_categories#フローコンテンツ"
          >フローコンテンツ</a
        >,
        <a href="/ja/docs/Web/Guide/HTML/Content_categories#記述コンテンツ"
          >記述コンテンツ</a
        >, 知覚可能コンテンツ
      </td>
    </tr>
    <tr>
      <th scope="row">許可されている内容</th>
      <td>
        <a href="/ja/docs/Web/Guide/HTML/Content_categories#記述コンテンツ"
          >記述コンテンツ</a
        >、ただし {{HTMLElement("dfn")}} 要素を子孫にしてはいけません。
      </td>
    </tr>
    <tr>
      <th scope="row">タグの省略</th>
      <td>{{no_tag_omission}}</td>
    </tr>
    <tr>
      <th scope="row">許可されている親要素</th>
      <td>
        <a href="/ja/docs/Web/Guide/HTML/Content_categories#記述コンテンツ"
          >記述コンテンツ</a
        >を受け入れるすべての要素
      </td>
    </tr>
    <tr>
      <th scope="row">暗黙の ARIA ロール</th>
      <td><code><a href="/ja/docs/Web/Accessibility/ARIA/Roles/term_role">term</a></code></td>
    </tr>
    <tr>
      <th scope="row">許可されている ARIA ロール</th>
      <td>すべて</td>
    </tr>
    <tr>
      <th scope="row">DOM インターフェイス</th>
      <td>{{domxref("HTMLElement")}}</td>
    </tr>
  </tbody>
</table>

## 属性

この要素の属性は[グローバル属性](/ja/docs/Web/HTML/Global_attributes)を含みます。

HTML5 においては、この要素の {{htmlattrxref("title")}} 属性は後述のとおり、通常と異なる特別な意味合いを持ちます。

## 使用上のメモ

`<dfn>` 要素の使用については、完全に明らかになっていない側面がいくつかあります。ここでそれらを説明します。

### 定義される用語の指定

定義される用語は、以下の規則に従います。

1. `<dfn>` 要素に {{htmlattrxref("title")}} 属性がある場合、 `title` 属性の値が定義される用語とみなされます。その要素の中の文字列もその用語でなければなりませんが、略語 (おそらく {{HTMLElement("abbr")}} を使用) や、用語のその他の形でも構いません。
2. `<dfn>` が単一の子要素を持ち、自分自身には何も文字列がなく、かつその子要素が `title` 属性を持つ {{HTMLElement("abbr")}} 要素である場合は、 `<abbr>` 要素の `title` の値が定義する用語です。
3. それ以外では、 `<dfn>` 要素の文字列コンテンツが定義される用語です。これは[以下の最初の例](#basic_identification_of_a_term)で示します。

> **メモ:** もし `<dfn>` 要素に `title` 属性があれば、それが定義する用語であり、それ以外の文字列ではありません。

### `<dfn>` 要素へのリンク

`<dfn>` 要素に {{htmlattrxref("id")}} 属性をつけた場合は、 {{HTMLElement("a")}} 要素を使用してそこにリンクすることができます。用語の使用時にはそのようなリンクを使用して、用語のリンクをクリックすることで読者が用語の定義にすばやく移動できるようにしてください。

これは以下の[定義へのリンク](#links_to_definitions)の例で示します。

## 例

様々な利用シナリオの例をいくつか見てみましょう。

### 基本的な用語の識別

この例は、定義の中の用語の位置を識別するために素の `<dfn>` 要素を使用しています。

#### HTML

```html
<p>The <strong>HTML Definition element</strong>
(<strong><dfn>&lt;dfn&gt;</dfn></strong>) is used to indicate the
term being defined within the context of a definition phrase or
sentence.</p>
```

`<dfn>` 要素に `title` がないので、 `<dfn>` 要素自身の文字列コンテンツが定義される用語として使用されます。

#### 結果

このブラウザーでは、このように描画されます。

{{EmbedLiveSample("Basic_identification_of_a_term", 650, 120)}}

### 定義へのリンク

定義へのリンクを追加するには、いつも通りの方法で {{HTMLElement("a")}} 要素を使ってリンクを作成します。

#### HTML

```html
<p>The <strong>HTML Definition element</strong>
(<strong><dfn id="definition-dfn">&lt;dfn&gt;</dfn></strong>) is
used to indicate the term being defined within the context of a
definition phrase or sentence.</p>

<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Graece
donan, Latine voluptatem vocant. Confecta res esset. Duo Reges:
constructio interrete. Scrupulum, inquam, abeunti; </p>

<p>Negare non possum. Dat enim intervalla et relaxat. Quonam modo?
Equidem e Cn. Quid de Pythagora? In schola desinis. </p>

<p>Ubi ut eam caperet aut quando? Cur iustitia laudatur? Aperiendum
est igitur, quid sit voluptas; Quid enim? Non est igitur voluptas
bonum. Urgent tamen et nihil remittunt. Quid enim possumus hoc
agere divinius? </p>

<p>Because of all of that, we decided to use the
<code><a href="#definition-dfn">&lt;dfn&gt;</a></code> element for
this project.</p>
```

ここで {{htmlattrxref("id")}} 属性の `"definition-dfn"` の値をリンク先として使用して、定義を見ることができます。その後で、 `<a>` の {{htmlattrxref("href", "a")}} 属性を `"#definition-dfn"` に設定して、定義に戻るリンクを設定します。

#### 結果

結果のコンテンツはこのようになります。

{{EmbedLiveSample("Links_to_definitions", 650, 300)}}

### 略語と定義の両方の使用

場合によっては、用語を定義する際に略語を使用したくなる場合もあるでしょう。これは `<dfn>` と {{HTMLElement("abbr")}} 要素を組み合わせて、このように実現できます。

#### HTML

```html
<p>The <dfn><abbr title="Hubble Space Telescope">HST</abbr></dfn>
is among the most productive scientific instruments ever constructed.
It has been in orbit for over 20 years, scanning the sky and
returning data and photographs of unprecedented quality and
detail.</p>

<p>Indeed, the <abbr title="Hubble Space Telescope">HST</abbr> has
arguably done more to advance science than any device ever built.</p>
```

`<abbr>` 要素が `<dfn>` の中で入れ子になっています。前者は用語が略語 ("HST") であることを示し、完全な用語 ("Hubble Space Telescope") を `title` 属性で定義します。後者は略語が定義される用語であることを表します。

#### 結果

上記のコードの出力はこのようになります。

{{EmbedLiveSample("Using_abbreviations_and_definitions_together", 650, 200)}}

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat("html.elements.dfn")}}

## 関連情報

- 定義リスト関連要素: {{HTMLElement("dl")}}, {{HTMLElement("dt")}}, {{HTMLElement("dd")}}
- {{HTMLElement("abbr")}}
