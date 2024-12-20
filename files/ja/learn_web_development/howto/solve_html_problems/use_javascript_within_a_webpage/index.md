---
title: ウェブページで JavaScript を使う
slug: Learn_web_development/Howto/Solve_HTML_problems/Use_JavaScript_within_a_webpage
original_slug: Learn/HTML/Howto/Use_JavaScript_within_a_webpage
l10n:
  sourceCommit: 751d58669499de0c6ea0d5b356e0e1448418c5d3
---

{{QuickLinksWithSubpages("/ja/docs/Learn/HTML/Howto")}}

JavaScript を活用して、あなたのウェブページを次のレベルに引き上げましょう。この記事では、 HTML 文書から JavaScript を正しく起動する方法を学びます。

<table>
  <tbody>
    <tr>
      <th scope="row">前提条件:</th>
      <td>
        <a href="/ja/docs/Learn/Getting_started_with_the_web"
          >基本的な HTML 文書の作成</a
        >方法を習熟している必要があります。
      </td>
    </tr>
    <tr>
      <th scope="row">目標:</th>
      <td>
        HTML ファイルから JavaScript を起動する方法と、 JavaScript にアクセスできるようにする最も良い習慣を学ぶ。
      </td>
    </tr>
  </tbody>
</table>

## JavaScript について

{{Glossary("JavaScript")}} はウェブページをインタラクティブにするための、主にクライアントサイドで使われるプログラミング言語です。 JavaScript を使わなくてもすばらしいウェブページを作ることが*できます*が、JavaScript は全く新しいレベルの可能性を開きます。

> [!NOTE]
> この記事では、 JavaScript が効果を発揮するために必要な HTML コードに取り組みます。 JavaScript そのものを学びたい場合は、 [JavaScript の基本](/ja/docs/Learn/Getting_started_with_the_web/JavaScript_basics)の記事から始めることができます。JavaScript についてすでに知っている場合や、他にもプログラミング言語の経験がある場合は、[JavaScript ガイド](/ja/docs/Web/JavaScript/Guide)に直接進むことをお勧めします。

## HTML から JavaScript を起動する方法

ブラウザー内で、 JavaScript それ自体は何もしません。 JavaScript は HTML ウェブページの中から実行します。 HTML の中から JavaScript コードを呼び出すには {{htmlelement("script")}} 要素が必要です。 `script` の使い方には、外部スクリプトにリンクするか、ウェブページにスクリプトを正しく埋め込むか、 2 つの方法があります。

### 外部スクリプトのリンク

通常、スクリプトは自分自身で .js ファイルに書きます。ウェブページから .js スクリプトを実行したい場合は、 {{HTMLElement ('script')}} を使用し、スクリプトファイルを指す `src` 属性にその [URL](/ja/docs/Learn/Common_questions/Web_mechanics/What_is_a_URL) を指定してください。

```html
<script src="path/to/my/script.js"></script>
```

### HTML の中で JavaScript を書く

`src` 属性を提供する代わりに `<script>` タグの間に JavaScript コードを追加することもできます。

```html
<script>
  window.addEventListener("load", () => {
    console.log("この関数は、ページが完全に読み込まれた時点で実行されます。");
  });
</script>
```

ちょっとした JavaScript が必要なときには便利ですが、 JavaScript を別個のファイルで管理すると、次のようなことが簡単にできることがわかります。

- 作業に集中する
- 自給自足の HTML を書く
- 構造化した JavaScript アプリケーションを書く

## アクセシビリティに配慮したスクリプトの使用

アクセシビリティは、あらゆるソフトウェア開発において大きな課題です。 JavaScript を賢く使用すればウェブサイトをよりアクセシビリティの高いものにできますし、スクリプトを無頓着に使用すれば大惨事になることもあります。 JavaScript が意図通りに動くようにするには、JavaScript を追加するための最善の手法について知っておく価値があります。

- **すべてのコンテンツを（構造化された）テキストとして利用できるようにしましょう。** コンテンツは可能な限り HTML に頼ってください。例えば、 JavaScript で素敵な進捗バーを実装した場合、HTML 内で一致するテキストのパーセント表示で補完するようにしてください。同様に、ドロップダウンメニューは[リンク](/ja/docs/Learn/HTML/Introduction_to_HTML/HTML_text_fundamentals#リスト)の[順序なしリスト](/ja/docs/Learn/HTML/Introduction_to_HTML/Creating_hyperlinks)として構造化すべきです。
- **すべての機能をキーボードからアクセスできるようにしましょう。**

  - ユーザーがすべてのコントロール（リンクやフォーム入力など）を合理的な順序で移動できるようにしましょう。
  - ポインターイベント（マウスイベントやタッチイベントなど）を使用している場合は、キーボードイベントで機能を複製しましょう。
  - キーボードのみを使用してサイトをテストしましょう。

- **制限時間を設定したり、予測したりしないでください。** キーボードで操作したり、コンテンツが読み上げられたりするのに余計な時間がかかります。ユーザーやブラウザーがある処理（特にリソースの読み込みなどの非同期操作）を完了するのにかかる時間は、ほとんど予測できません。
- **アニメーションは控えめで短く、点滅しないようにしましょう。** 点滅は煩わしく、[発作を発生させます](https://www.w3.org/TR/UNDERSTANDING-WCAG20/seizure-does-not-violate.html)。さらに、アニメーションが数秒以上続く場合は、ユーザーがキャンセルできるようにしましょう。
- **ユーザーに対話をさせましょう。** 意味しているのは、コンテンツを自動的に更新したり、リダイレクトしたり、再表示したりしないことです。カルーセルを使用したり、警告なしにポップアップを表示したりしないでください。
- **JavaScript のないユーザーのためにプラン B を用意しましょう。** スピードとセキュリティを向上させるためにJavaScriptをオフに設定していることがあり、ユーザーはネットワークの問題によってスクリプトを読み込むことができないことがよくあります。さらに、サードパーティーのスクリプト（広告、トラッキングスクリプト、ブラウザー拡張機能）がブラウザースクリプトを壊す可能性もあります。

  - 少なくとも、 {{HTMLElement("noscript")}} で `<noscript>このサイトを使用するには、 JavaScript を有効にしてください</noscript>` というような短いメッセージを残してください。
  - 可能な限り、JavaScript の機能を HTML とサーバーサイドスクリプトで再現するのが理想的です。
  - 単純な視覚効果だけなら、 CSS の方が直感的に実現できることが多いでしょう。
  - ほとんどの人が JavaScript を有効にしているので、 `<noscript>` はアクセシビリティのないスクリプトを書く言い訳にはなりません。

## もっと学ぶ

- {{htmlelement("script")}}
- {{htmlelement("noscript")}}
- [James Edwards' introduction to using JavaScript accessibly](https://www.sitepoint.com/javascript-accessibility-101/)
- [Accessibility guidelines from W3C](https://www.w3.org/TR/WCAG20/)
