---
title: 経歴ページのスタイル設定
slug: Learn/CSS/First_steps/Styling_a_biography_page
l10n:
  sourceCommit: c64e813d8ab9dbe22cbc049c26f7c6703370a2b7
---

{{LearnSidebar}}{{PreviousMenu("Learn/CSS/First_steps/How_CSS_works", "Learn/CSS/First_steps")}}

ここ数回のレッスンで学んだことで、 CSS を使用して単純なテキスト文書を整形し、自分自身でスタイルを追加することができます。この評価試験では、その方法を学びます。

<table>
  <tbody>
    <tr>
      <th scope="row">前提条件:</th>
      <td>
        この評価試験に挑戦する前に、すでにこのモジュールの記事をすべて読み終えていて、HTML の基本を理解している必要があります（<a
        href="/ja/docs/Learn/HTML/Introduction_to_HTML"
          >HTML の入門</a
        >で学ぶこと）。
      </td>
    </tr>
    <tr>
      <th scope="row">目的:</th>
      <td>いくつかの CSS を試し、知識レベルを確認します。</td>
    </tr>
  </tbody>
</table>

## 開始点

下のライブエディターで試すこともできますし、[開始点ファイルをダウンロード](https://github.com/mdn/css-examples/blob/main/learn/getting-started/biog-download.html/)して自分のエディターで作業することもできます。これは、 HTML と開始点の CSS （文書内の見出し）の両方を含む単一のページです。できれば、この CSS を別のファイルに移し、ローカルコンピューターで例を作成するときにリンクしてください。

> **メモ:** このページのインタラクティブエディターや、[CodePen](https://codepen.io/)、[JSFiddle](https://jsfiddle.net/)、[Glitch](https://glitch.com/) などのオンラインエディターで解決策を試すことができます。
>
> もし行き詰まったら、[コミュニケーションチャンネル](/ja/docs/MDN/Community/Communication_channels)のいずれかに連絡してみてください。

## プロジェクト概要

下のサンプルは、 CSS でスタイルされたプロフィールページの例です。ここで使われているプロパティは次の通りです。これらについてはそれぞれリンクから MDN の記事に飛べますので、プロパティの詳細な説明についてはそちらをご参照ください。

- {{cssxref("font-family")}}
- {{cssxref("color")}}
- {{cssxref("border-bottom")}}
- {{cssxref("font-weight")}}
- {{cssxref("font-size")}}
- {{cssxref("font-style")}}
- {{cssxref("text-decoration")}}

下のプロフィールページでは、いろんなセレクターを使ったり、h1 要素や h2 要素などの装飾要素を使ったりしただけでなく、職業を表す部分ではクラスを定義してデザインを設定しました。プロパティの値をいろいろに変えて見た目がどう変わるか試してみましょう。

1. 見出しの文字色をピンクに変えてみましょう。色の指定には `hotpink` を使うとよいでしょう。
2. 見出しに太さ 10px の {{cssxref("border-bottom")}} をつけてみましょう。そしてその色を `purple` にしてみましょう。
3. 見出し 2 の書体をイタリックに変えてみましょう。
4. 連絡先情報の部分で使われている `ul` 要素の {{cssxref("background-color")}} を `#eeeeee` にして、 {{cssxref("border")}} を太さ 5px の紫の実践に変えてみましょう。 {{cssxref("padding")}} を指定してコンテンツと連絡先情報の部分を離しましょう。
5. リンクの部分にマウスを当てたとき、リンクが `green` に変わるように設定しましょう。

## ヒントとコツ

- [W3C CSS Validator](https://jigsaw.w3.org/css-validator/) を使用することで、 CSS の意図しない間違い（他の方法では見逃してしまうかもしれない間違い）を発見し、修正することができます。
- その後、[MDN CSS リファレンス](/ja/docs/Web/CSS/Reference)でこのページで紹介されていないプロパティを見て冒険してみてください。
- ここに間違った答えはないことを忘れないでください。この段階では、少し楽しむ余裕があるのです。

## 例

この画像のように仕上がるはずです。

![評価試験完了後の例のスクリーンショットです。](learn-css-basics-assessment.png)

{{EmbedGHLiveSample("css-examples/learn/getting-started/biog.html", '100%', 1600)}}

{{PreviousMenu("Learn/CSS/First_steps/How_CSS_works", "Learn/CSS/First_steps")}}
