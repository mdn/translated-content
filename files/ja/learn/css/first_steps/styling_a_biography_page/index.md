---
title: 新しい知識を使う
slug: Learn/CSS/First_steps/Styling_a_biography_page
---

{{LearnSidebar}}{{PreviousMenu("Learn/CSS/First_steps/How_CSS_works", "Learn/CSS/First_steps")}}

先のいくつかのレッスンで、あなたは CSS を使ってシンプルなテキストドキュメントにスタイルを追加してフォーマットする方法を学びました。ここでは、それを実際に行ってみましょう。

<table>
  <tbody>
    <tr>
      <th scope="row">前提条件:</th>
      <td>
        基本的なコンピュータリテラシー、<a
          href="/ja/Learn/Getting_started_with_the_web/Installing_basic_software"
          >基本的なソフトウェアのインストール</a
        >、基本的な<a
          href="/ja/Learn/Getting_started_with_the_web/Dealing_with_files"
          >ファイル操作</a
        >や HTML の基本（<a href="/ja/docs/Learn/HTML/Introduction_to_HTML"
          >HTML の入門</a
        >で学ぶ）、CSS の基礎（このモジュールの残り部分）。
      </td>
    </tr>
    <tr>
      <th scope="row">目的:</th>
      <td>いくつかの CSS を試し、知識レベルを確認します。</td>
    </tr>
  </tbody>
</table>

## さあ始めよう

下の Live エディタで試すこともできますし、[我々の Github リポジトリ](https://github.com/mdn/css-examples/blob/master/learn/getting-started/biog-download.html/)からサンプルファイルをダウンロードして試してみることもできます。ここで使うサンプルはシンプルな一ページの HTML で、頭にはとりあえずシンプルな CSS が埋め込まれています。もしローカルで動かすとき HTML と CSS が一緒になっているのが嫌だったら別々のファイルに分割しても構いません。あるいは、[CodePen](https://codepen.io/) や [jsFiddle](https://jsfiddle.net/)、[Glitch](https://glitch.com/) といったオンラインエディタを使うこともできます。

> **メモ:** もし途中で詰まったら、私達に気兼ねなく相談してください！詳しくはこの記事の一番下にある「アセスメントとさらなるヘルプ」の部分を見てください。

## CSS を少し試してみよう

下のサンプルは、CSS でスタイルされたプロフィールページの例です。ここで使われているプロパティは次の通りです。これらについてはそれぞれリンクから MDN の記事に飛べますので、プロパティの詳細な説明についてはそちらをご参照ください。

- {{cssxref("font-family")}}
- {{cssxref("color")}}
- {{cssxref("border-bottom")}}
- {{cssxref("font-weight")}}
- {{cssxref("font-size")}}
- {{cssxref("text-decoration")}}

下のプロフィールページでは、いろんなセレクタを使ったり、h1 要素や h2 要素などの装飾要素を使ったりしただけでなく、職業を表す部分ではクラスを定義してデザインを設定しました。

プロパティの値をいろいろに変えて見た目がどう変わるか試してみましょう。

1. 見出し 1 の文字色をピンクに変えてみましょう。色の指定には `hotpink` を使うとよいでしょう。
2. 見出し 1 の下に太さ 10px の点線をつけてみましょう。そしてその色を `purple` にしてみましょう。
3. 見出し 2 の書体をイタリックに変えてみましょう。
4. 連絡先情報の部分で使われている `ul` 要素の {{cssxref("background-color")}} を `#eeeeee` にして、{{cssxref("border")}} を太さ 5px の紫の線に変えてみましょう。また、{{cssxref("padding")}} を指定してコンテンツと連絡先情報の部分にスペースが空くように設定しましょう。
5. リンクの部分にマウスが乗ったとき、リンクが `green` に変わるように設定しましょう。

完成したら次の画像のようになるはずです。

![](https://mdn.dev/archives/media/attachments/2019/12/31/17035/da8ff2a04da214e57e18a6ea3ac6832e/learn-css-basics-assessment.png)

それから、このページに書かれていない属性をみてみましょう。[MDN の CSS リファレンス](/ja/docs/Web/CSS/Reference) には冒険が待っています!

ここには間違った回答はないことを覚えていてください — ここではいろいろ試して楽しみながら学びましょう。

{{EmbedGHLiveSample("css-examples/learn/getting-started/biog.html", '100%', 1600)}}

## アセスメントとさらなるヘルプ

作ったものを見てほしいときや、作業に詰まってしまって質問をしたいとき：

1. あなたが作ったものを [CodePen](https://codepen.io/) や [jsFiddle](https://jsfiddle.net/)、[Glitch](https://glitch.com/) などのコード共有サービスに公開してください。
2. 添削の依頼あるいは訊きたいことを [MDN Discourse forum Learning category](https://discourse.mozilla.org/c/mdn/learn) に投稿してください。ここに投稿するときには次のことを忘れないようにしてください。

   - タイトルは何についての質問か分かるように、「Assessment wanted for CSS First Steps」のようにしてください。
   - 添削や質問を依頼したいコードへのリンクを貼ってください。ソースコードを示してもらわないとこちらもどうサポートしたらよいかがわからないからです。
   - どの課題に取り組んでいるのか分かるように課題へのリンクを貼ってください。そうしていただけるとあなたがどこで躓いているのか知ることができます。

## 次のステップ

最初のモジュールを修了しました。おめでとうございます。あなたはもう CSS の基本的な部分は理解できたはずです。そして、スタイルシートの挙動が分かるようになったはずです。次のモジュール、[CSS ブロック構築](/ja/docs/Learn/CSS/Building_blocks)ではいくつかの重要な部分を深く見ていきましょう。

{{PreviousMenu("Learn/CSS/First_steps/How_CSS_works", "Learn/CSS/First_steps")}}
