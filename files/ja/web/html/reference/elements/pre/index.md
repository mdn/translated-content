---
title: HTML `<pre>` 整形済みテキスト要素
short-title: <pre>
slug: Web/HTML/Reference/Elements/pre
l10n:
  sourceCommit: 599ae8b7ad414e91df473d91983f4ffc5cafabb3
---

**`<pre>`** は [HTML](/ja/docs/Web/HTML) の要素で、整形済みテキスト (preformatted text) を表します。この要素内のテキストは一般的に、ファイル内でのレイアウトをそのまま反映して[等幅フォント](https://ja.wikipedia.org/wiki/等幅フォント)で表示されます。

この要素内の空白は、書かれたまま表示されますが、1 つの例外があります。開始タグ `<pre>` の直後に 1 つ以上の先頭改行文字が含まれている場合、最初の改行文字が削除されます。この変換は HTML パーサーによって行われ、{{Glossary("XHTML")}} を使用する場合は適用されません。

`<pre>` 要素のテキストコンテンツは HTML として構文解析されます。そのため、テキストコンテンツを確実にプレーンテキストのまま実現したい場合は、`<` などの一部の構文文字について、それぞれの{{glossary("character reference", "文字参照")}}を使用してエスケープする必要がある場合があります。情報については、[曖昧な文字のエスケープ](#曖昧な文字のエスケープ)をご覧ください。

`<pre>` 要素にはよく {{HTMLElement("code")}}、{{HTMLElement("samp")}}、{{HTMLElement("kbd")}} といった要素を内包し、それぞれコンピューターのコード、コンピューターの出力、ユーザーの入力を表します。

デフォルトでは、 `<pre>` は[ブロックレベル](/ja/docs/Glossary/Block-level_content)要素であり、 {{cssxref("display")}} のデフォルト値は `block` です。

{{InteractiveExample("HTML デモ: &lt;pre&gt;", "tabbed-standard")}}

```html interactive-example
<pre>
             S
             A
            LUT
             M
            O N
            D  E
            DONT
          JE SUIS
          LA  LAN
          G U E  É
         L O Q U E N
        TE      QUESA
       B  O  U  C  H  E
      O        P A R I S
     T I R E   ET   TIRERA
    T O U             JOURS
   AUX                  A  L
 LEM                      ANDS   - Apollinaire
</pre>
```

```css interactive-example
pre {
  font-size: 0.7rem;
  margin: 0;
}
```

## 属性

この要素は[グローバル属性](/ja/docs/Web/HTML/Reference/Global_attributes)のみがあります。

- `width` {{deprecated_inline}} {{Non-standard_Inline}}
  - : 1 行あたりの望ましい文字数を示します。この属性は技術的には実装されていますが、視覚上の効果はありません。同様の効果を得るには、CSS の {{Cssxref("width")}} を使用してください。
- `wrap` {{non-standard_inline}} {{Deprecated_Inline}}
  - : テキストがはみ出た場合の処理に関するヒントを示します。現行のブラウザーはこのヒントを無視して、視覚上の効果をもたらしません。同様の効果を得るには、CSS の {{Cssxref("white-space")}} を使用してください。

## アクセシビリティ

整形済みテキストを使用して作成した画像や図には、代替説明を提供することが重要です。代替説明は、画像や図のコンテンツを明確かつ簡潔に記述する必要があります。

弱視の人やスクリーンリーダーなどの支援技術を使って閲覧している人は、整形済みテキスト文字が順番に読み上げられたときに何を表しているのか理解できないかもしれません。

{{HTMLElement("figure")}} 要素と {{HTMLElement("figcaption")}} 要素の組み合わせや、`pre` 要素の [ARIA](/ja/docs/Web/Accessibility/ARIA) の `role` と [`aria-label`](/ja/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-label) 属性によって補われます。整形済み {{Glossary("ASCII")}} アートは代替テキストを持つ画像としてアナウンスされ、`figcaption` は画像のキャプションとして機能します。

### 例

```html
<figure>
  <pre role="img" aria-label="ASCII COW">
      __________________
  &lt; 私は牧場の達人です。&gt;
      ------------------
          \   ^__^
           \  (oo)\_______
              (__)\       )\/\
                  ||----w |
                  ||     ||
  </pre>
  <figcaption id="cow-caption">
    「私は牧場の達人です。」と言っている牛。牛は整形済みテキストで表現されている。
  </figcaption>
</figure>
```

- [MDN "WCAG を理解する" ガイドライン 1.1 の説明](/ja/docs/Web/Accessibility/Guides/Understanding_WCAG/Perceivable#ガイドライン_1.1_—_非テキストコンテンツのための代替テキストの提供)
- [H86: Providing text alternatives for ASCII art, emoticons, and leetspeak | W3C Techniques for WCAG 2.0](https://www.w3.org/TR/WCAG20-TECHS/H86.html)

## 例

### 基本的な例

#### HTML

```html
<p>CSS を使用してフォントの色を変更するのは簡単です。</p>
<pre><code>
body {
  color: red;
}
</code></pre>
```

#### 結果

{{EmbedLiveSample("Basic_example")}}

### 曖昧な文字のエスケープ

HTML コードを `<pre>` 要素内で表示したい場合を考えてみましょう。有効な HTML タグを定義する文字列（`<` で始まり、`>` で終わるもの）は表示されません。タグの文字をテキストとして表示させるには、少なくとも `<` 文字を文字参照を使用してエスケープし、その文字列が有効なタグを定義しなくなるようにする必要があります。

実際には、HTML パーサーは、特定のコンテキスト下でない限り、ほとんどの文字をプレーンテキストとして扱います。例えば、`< code` は問題ありませんが、`<code` は誤って解析されてしまいます。また、`&am;` は問題ありませんが、`&amp;` は問題となります。しかし、特にプログラムで HTML を生成し、`<pre>` のコンテンツを挿入する場合は、混乱を避けるために、曖昧な文字はすべてエスケープするのが良い慣行です。この場合、文字をエスケープする方法に関する良い経験則は以下の通りです。

1. まず、HTML 文書に同様に現れるように、コンテンツを書き出します。
2. アンパサンド (`&`) はすべて `&amp;` に置き換えます。次の段階で生成される新しい `&` 文字がエスケープされないように、まずこの段階で行います。
3. すべての `<` 文字を `&lt;` で置き換えます。

これで、意図通りにコンテンツが表示されるはずです。その他の HTML 構文の文字を置き換えること（`>` を `&gt;` に、`"` を `&quot;` に、`'` を `&apos;` にするなど）はオプションですが、問題はありません。

#### HTML

```html
<pre><code>
let i = 5;

if (i &lt; 10 &amp;&amp; i &gt; 0)
  return &quot;1 桁の数値&quot;
</code></pre>
```

#### 結果

{{EmbedLiveSample("Escaping_reserved_characters")}}

## 技術的概要

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">
        <a href="/ja/docs/Web/HTML/Guides/Content_categories"
          >コンテンツカテゴリー</a
        >
      </th>
      <td>
        <a href="/ja/docs/Web/HTML/Guides/Content_categories#フローコンテンツ"
          >フローコンテンツ</a
        >、知覚可能コンテンツ
      </td>
    </tr>
    <tr>
      <th scope="row">許可されている内容</th>
      <td>
        <a href="/ja/docs/Web/HTML/Guides/Content_categories#記述コンテンツ"
          >記述コンテンツ</a
        >
      </td>
    </tr>
    <tr>
      <th scope="row">タグの省略</th>
      <td>なし。開始タグと終了タグの両方が必須です。</td>
    </tr>
    <tr>
      <th scope="row">許可されている親要素</th>
      <td>
        <a href="/ja/docs/Web/HTML/Guides/Content_categories#フローコンテンツ"
          >フローコンテンツ</a
        >を受け入れるすべての要素
      </td>
    </tr>
    <tr>
      <th scope="row">暗黙の ARIA ロール</th>
      <td>
        <code
          ><a href="/ja/docs/Web/Accessibility/ARIA/Reference/Roles/generic_role"
            >generic</a
          ></code
        >
      </td>
    </tr>
    <tr>
      <th scope="row">許可されている ARIA ロール</th>
      <td>すべて</td>
    </tr>
    <tr>
      <th scope="row">DOM インターフェイス</th>
      <td>{{domxref("HTMLPreElement")}}</td>
    </tr>
  </tbody>
</table>

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- CSS: {{Cssxref('white-space')}}, {{Cssxref('word-break')}}
- {{glossary("Character reference", "文字参照")}}
- 関連する要素: {{HTMLElement("code")}}, {{HTMLElement("samp")}}, {{HTMLElement("kbd")}}
