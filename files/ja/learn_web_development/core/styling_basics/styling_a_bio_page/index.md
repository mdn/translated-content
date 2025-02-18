---
title: "課題: 経歴ページのスタイル設定"
slug: Learn_web_development/Core/Styling_basics/Styling_a_bio_page
l10n:
  sourceCommit: 5b20f5f4265f988f80f513db0e4b35c7e0cd70dc
---

{{LearnSidebar}}

{{PreviousMenuNext("Learn_web_development/Core/Styling_basics/Getting_started", "Learn_web_development/Core/Styling_basics/Basic_selectors", "Learn_web_development/Core/Styling_basics")}}

この課題では、単純な経歴ページのスタイル設定を行い、セレクターの書き方やテキストのスタイル設定など、これまでの数回のレッスンで学んだスキルのいくつかを試験します。

> [!NOTE]
> 以下のライブサンプルの "Play" をクリックすると、コードを MDN Playground で開くことができますし、自分の IDE や、[CodePen](https://codepen.io/)、[JSFiddle](https://jsfiddle.net/)、[Glitch](https://glitch.com/) などのオンラインエディターにコードをコピー＆ペーストすることもできます。
> もし行き詰まったら、[コミュニケーションチャンネル](/ja/docs/MDN/Community/Communication_channels)のいずれかに問い合わせてみてください。

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

以下は、HTML と CSS のコードブロックと、それらを組み合わせた結果です。

```html live-sample___biog
<h1>Jane Doe</h1>
<div class="job-title">Web Developer</div>
<p>
  Far far away, behind the word mountains, far from the countries Vokalia and
  Consonantia, there live the blind texts. Separated they live in Bookmarksgrove
  right at the coast of the Semantics, a large language ocean.
</p>

<p>
  A small river named Duden flows by their place and supplies it with the
  necessary regelialia. It is a paradisematic country, in which roasted parts of
  sentences fly into your mouth.
</p>

<h2>Contact information</h2>
<ul>
  <li>Email: <a href="mailto:jane@example.com">jane@example.com</a></li>
  <li>Web: <a href="http://example.com">http://example.com</a></li>
  <li>Tel: 123 45678</li>
</ul>
```

```css live-sample___biog
body {
  font-family: Arial, Helvetica, sans-serif;
}

h1 {
  color: #375e97;
  font-size: 2em;
  font-family: Georgia, "Times New Roman", Times, serif;
  border-bottom: 1px solid #375e97;
}

h2 {
  font-size: 1.5em;
}

.job-title {
  color: #999999;
  font-weight: bold;
}

a:link,
a:visited {
  color: #fb6542;
}

a:hover {
  text-decoration: none;
}
```

{{EmbedLiveSample("biog", "", "400px")}}

{{PreviousMenuNext("Learn_web_development/Core/Styling_basics/Getting_started", "Learn_web_development/Core/Styling_basics/Basic_selectors", "Learn_web_development/Core/Styling_basics")}}
