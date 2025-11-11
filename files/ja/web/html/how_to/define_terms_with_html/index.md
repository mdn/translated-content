---
title: HTML で用語を定義する
slug: Web/HTML/How_to/Define_terms_with_HTML
l10n:
  sourceCommit: cd701f10306c8b0b9690532ff808df826818a04f
---

{{HTMLSidebar}}

HTML は、インラインであろうと構造化された用語集であろうと、記述の意味を伝達するいくつかの方法を提供します。 この記事では、キーワードを定義する際に適切にマークアップする方法について説明します。

<table class="standard-table">
  <tbody>
    <tr>
      <th scope="row">前提条件:</th>
      <td>
        <a href="/ja/docs/Learn_web_development/Getting_started/Your_first_website"
          >基本的な HTML 文書の作成方法</a
        >に精通している必要があります。
      </td>
    </tr>
    <tr>
      <th scope="row">目標:</th>
      <td>
        新しいキーワードを導入する方法と説明リストを作成する方法を学びます。
      </td>
    </tr>
  </tbody>
</table>

用語の意味が必要なときは、おそらくまっすぐに辞書や用語集に行くでしょう。 辞書や用語集は、キーワードを 1 つ以上の説明と形式的に関連付けます。 この場合は次のようになります。

> - 青い（形容詞）
>   - : 晴れた日の空のような色。
>     「晴れた青空」

しかし、私たちは常に次のように形式的ではない形でキーワードを定義しています。

> **Firefox** は、Mozilla Foundation によって作成されたウェブブラウザーです。

これらのユースケースに対処するために、{{Glossary("HTML")}} には説明と説明された単語をマークするための{{Glossary("tag","タグ")}}が用意されているので、読者に意味が適切に伝わるようになります。

## 形式的ではない説明をマークする方法

教科書では、キーワードが初めて出てきたときに、キーワードを太字にしてすぐに定義するのが一般的です。

私たちは HTML でもそうしていますが、 HTML は視覚的なメディアではないので太字を使いません。 {{htmlelement("dfn")}} は、初めて出現するキーワードをマークするための特別な要素です。 `<dfn>` タグは、定義（段落全体）ではなく定義される単語を囲みます。

```html-nolint
<p><dfn>Firefox</dfn> は、Mozilla Foundation によって作成されたウェブブラウザーです。</p>
```

> [!NOTE]
> 太字のもう 1 つの用途はコンテンツを強調することです。 太字自体は HTML の概念ではありませんが、[強調を示すタグ](/ja/docs/Learn_web_development/Core/Structuring_content/Emphasis_and_importance)があります。

### 特別な場合: 略語

{{htmlelement("abbr")}} で[略語を特別にマーク](/ja/docs/Learn_web_development/Core/Structuring_content/Advanced_text_features#略語)することが最適です。 これにより、スクリーンリーダーが適切に読むことができ、すべての略語を統一的に操作できるようになります。 新しいキーワードの場合と同様に、初めて出現したときに略語を定義する必要があります。

```html-nolint
<p>
  <dfn><abbr>HTML</abbr> (hypertext markup language、ハイパーテキストマークアップ言語)</dfn> は、ウェブ上のドキュメントを構造化するために使用される記述言語です。
</p>
```

> [!NOTE]
> HTML 仕様は実際には略語を拡張するために [`title` 属性を用意しています](https://html.spec.whatwg.org/multipage/text-level-semantics.html#the-abbr-element)（英語）。 ただし、これはインライン展開を提供するための許容可能な代替方法ではありません。 `title` の内容は、マウスを使用していない限り、ユーザーには完全に隠されています。 この仕様も同様に[これを認めています](https://html.spec.whatwg.org/multipage/dom.html#attr-title)（英語）。

### アクセシビリティの向上

{{HTMLElement('dfn')}} は定義されたキーワードをマークし、現在の段落がキーワードを定義していることを示します。 言い換えれば、`<dfn>` 要素とそのコンテナーの間に暗黙の関係があります。 より正式な関係を望む場合、または定義が段落全体ではなく 1 つの文で構成されている場合は、 [`aria-describedby`](/ja/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-describedby) 属性を使用して、より正式に定義に関連付けることができます。

```html-nolint
<p>
  <span id="ff">
    <dfn aria-describedby="ff">Firefox</dfn>
    は、Mozilla Foundation によって作成されたウェブブラウザーです。
  </span>
  <a href="https://www.mozilla.org">mozilla.org</a> からダウンロードできます。
</p>
```

支援技術は、この属性を使用して、指定された用語の代替テキストを見つけることができます。 `<dfn>` 要素だけでなく、キーワードを囲む任意のタグで `aria-describedby` を使用して定義できます。 `aria-describedby` は、説明を含む要素の [`id`](/ja/docs/Web/HTML/Reference/Global_attributes/id) を参照します。

## 説明リストを作成する方法

説明リストは、用語とそれに対応する説明のリスト（例: 定義リスト、辞書の項目、よくある質問、キーと値のペア）です。

> [!NOTE]
> 説明リストは、[対話をマークアップするのには適していません](https://html.spec.whatwg.org/multipage/grouping-content.html#the-dl-element)（英語）。対話は話し手を直接記述しないためです。こちらに[対話をマークアップするための推奨事項](https://html.spec.whatwg.org/multipage/semantics-other.html#conversations)（英語）があります。

説明された用語は、 {{htmlelement("dt")}} 要素内にあります。 対応する説明が直ちに続き、 1 つ以上の {{htmlelement("dd")}} 要素に含まれています。 説明リスト全体を {{htmlelement("dl")}} 要素で囲みます。

### シンプルな例

ここではシンプルな例として、食べ物と飲み物の種類を説明します。

```html-nolint live-sample___a_simple_example
<dl>
  <dt>ジャンバラヤ</dt>
  <dd>
    ふつう鶏肉、ソーセージ、シーフード、スパイスを含む米ベースの料理
  </dd>

  <dt>すき焼き</dt>
  <dd>
    日本の名物料理。薄切りの肉、野菜、麺を酒と醤油で煮込んだもの。
  </dd>

  <dt>キャンティ</dt>
  <dd>トスカーナ産辛口赤ワイン</dd>
</dl>
```

> [!NOTE]
> 基本的なパターンは、ご覧の通り、 `<dt>` の用語と `<dd>` の説明を交互に並べるというものです。もし 2 つ以上の用語が続けて出てきた場合、続く説明はそれらすべての用語に適用されます。もし 2 つ以上の説明文が同列にある場合、それらはすべて最後に指定された用語に適用されます。

### 視覚的な出力を改善する

視覚ブラウザーには、前述のリストが次のように表示されます。

{{EmbedLiveSample("A_simple_example", 600, 180)}}

キーワードをより目立たせたいのであれば、太字にしてみるのもよいでしょう。 HTML は視覚的な媒体ではないことを忘れないでください。すべての視覚効果には {{glossary("CSS")}} が必要です。ここで必要なのは、 CSS の {{cssxref("font-weight")}} プロパティです。

```css
dt {
  font-weight: bold;
}
```

この結果、下記のような少し読みやすい結果が得られます。

{{EmbedLiveSample("How_to_build_a_description_list", 600, 180)}}

## より詳しく知る

- {{htmlelement("dfn")}}
- {{htmlelement("dl")}}
- {{htmlelement("dt")}}
- {{htmlelement("dd")}}
- [aria-describedby 属性の使用方法](/ja/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-describedby)
