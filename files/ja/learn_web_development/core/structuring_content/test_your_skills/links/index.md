---
title: "スキルテスト: リンク"
short-title: "試験: リンク"
slug: Learn_web_development/Core/Structuring_content/Test_your_skills/Links
l10n:
  sourceCommit: 1cf3cb0fb22bf89c780fefe74c3db7f1b9e8ca09
---

{{PreviousMenuNext("Learn_web_development/Core/Structuring_content/Creating_links", "Learn_web_development/Core/Structuring_content/Structuring_a_page_of_content", "Learn_web_development/Core/Structuring_content")}}

このスキルテストの目的は、あなたが [HTML でのハイパーリンクの実装](/ja/docs/Learn_web_development/Core/Structuring_content/Creating_links)を行う方法を理解しているかどうかを評価することです。

> [!NOTE]
> 手助けが必要な場合は、[スキルテスト](/ja/docs/Learn_web_development#スキルテスト)使用ガイドをお読みください。また、[コミュニケーションチャネル](/ja/docs/MDN/Community/Communication_channels)のいずれかを使用して、私たちに連絡することもできます。

> [!NOTE]
> これらの課題の開始コードにあるリンクの一部には、`target="_blank"` 属性が設定されています。これにより、リンクをクリックすると、同じタブではなく新しいタブでリンク先のページが開きます。これは厳密には最善の手法ではありませんが、MDN Playground の出力 `<iframe>` でページが開いて、サンプルコードが消えてしまうことを避けるために、ここではこの手法を採用しています。

## リンク 1

この課題では、クジラの情報ページのリンクを埋めるのを手伝っていただきます。

この課題を完成させるには、次のようにリンクを更新してください。

1. 最初のリンクは、現在のページと同じディレクトリーにある `whales.html` というページにリンクされるようにします。
2. また、マウスオーバーしたときに、このページにはシロナガスクジラやマッコウクジラの情報が含まれていることをユーザーに指示するツールチップを付けましょう。
3. 2 つ目のリンクは、ユーザーの既定のメールアプリケーションで、受信者を "whales\@example.com" に設定してメールを開くためのリンクに変更しましょう。
4. メールの件名が「クジラについての質問」と自動的に記入されるように設定すると、ボーナスポイントも得られます。

この課題の出発点は次のようなものです。

{{ EmbedLiveSample('links-1', "100%", 170) }}

この出発点となる基本的なコードは以下の通りです。

```html-nolint live-sample___links-1
<h1>クジラに関する情報</h1>

<p>
  当団体の保護活動および調査対象のクジラ種に関する情報は、<a target="_blank">クジラ情報ページ</a>をご覧ください。
</p>

<p>
  当団体に質問をしたい場合は、お気軽に<a target="_blank">メールでご連絡ください</a>。
</p>
```

```css hidden live-sample___links-1 live-sample___links-1-finished
body {
  background-color: white;
  color: #333333;
  font:
    1em / 1.4 "Helvetica Neue",
    "Helvetica",
    "Arial",
    sans-serif;
  padding: 1em;
  margin: 0;
}

h1 {
  font-size: 2rem;
  margin: 0;
  color: purple;
}

p {
  color: gray;
  margin: 0.5em 0;
}

* {
  box-sizing: border-box;
}
```

更新されたコンテンツは次のようになります。

{{ EmbedLiveSample('links-1-finished', "100%", 170) }}

<details>
<summary>ここをクリックすると、模範解答を表示します。</summary>

完了した HTML は、次のようになるはずです。

```html-nolint live-sample___links-1-finished
<h1>クジラに関する情報</h1>

<p>
  当団体の保護活動および調査対象のクジラ種に関する情報は、<a target="_blank" href="whales.html" title="シロナガスクジラとマッコウクジラに関する情報">クジラ情報ページ</a>をご覧ください。
</p>

<p>
  当団体に質問をしたい場合は、お気軽に<a target="_blank" href="mailto:whales@example.com?subject=Question%20about%20Whales">メールでご連絡ください</a>。
</p>
```

</details>

## リンク 2

この課題では、4 つのリンクが適切な場所にリンクするように記入していただきます。

この課題を完成させるには、次のようにリンクを更新してください。

1. 最初のリンクは、カレントディレクトリーの中の `blue` というディレクトリーにある `blue-whale.jpg` という画像にリンクするようにしましょう。
2. 2 つ目のリンクは、カレントディレクトリーの 1 つ上のディレクトリーである `narwhal` というディレクトリーにある `narwhal.jpg` という画像にリンクするようにしましょう。
3. 3 つ目のリンクは、UK の Google 画像検索にリンクしてください。ベース URL は `https://www.google.co.uk` で、画像検索は `imghp` というサブディレクトリーに配置されています。
4. 4 つ目のリンクは、現在のページの一番下にある段落にリンクしましょう。これは `bottom` という ID が付いています。

この課題の出発点は次のようなものです。

{{ EmbedLiveSample('links-2', "100%", 200) }}

この出発点となる基本的なコードは以下の通りです。

```html live-sample___links-2
<h1>リストのパスの試験</h1>

<ul>
  <li><a target="_blank">シロナガスクジラの画像をリンクしてください</a></li>
  <li><a target="_blank">マッコウクジラの画像をリンクしてください</a></li>
  <li><a target="_blank">Google 画像検索にリンクしてください</a></li>
  <li><a>このページの末尾の段落へリンクしてください。</a></li>
</ul>

<div></div>

<p id="bottom">ページの末尾です。</p>
```

```css hidden live-sample___links-2 live-sample___links-2-finished
body {
  background-color: white;
  color: #333333;
  font:
    1em / 1.4 "Helvetica Neue",
    "Helvetica",
    "Arial",
    sans-serif;
  padding: 1em;
  margin: 0;
}

h1 {
  font-size: 2rem;
  margin: 0;
  color: purple;
}

li {
  color: gray;
  margin: 0.5em 0;
}

div {
  height: 600px;
}
```

更新されたコンテンツは次のようになります。

{{ EmbedLiveSample('links-2-finished', "100%", 200) }}

<details>
<summary>ここをクリックすると、模範解答を表示します。</summary>

完了した HTML は、次のようになるはずです。

```html-nolint live-sample___links-2-finished
<h1>リストのパスの試験</h1>

<ul>
  <li><a target="_blank" href="blue/blue-whale.jpg">
    シロナガスクジラの画像をリンクしてください
  </a></li>
  <li><a target="_blank" href="../narwhal/narwhal.jpg">
    マッコウクジラの画像をリンクしてください
  </a></li>
  <li><a target="_blank" href="https://www.google.co.uk/imghp">
    Google 画像検索にリンクしてください
  </a></li>
  <li><a href="#bottom">
    このページの末尾の段落へリンクしてください。
  </a></li>
</ul>

<div></div>

<p id="bottom">ページの末尾です。</p>
```

</details>

## リンク 3

以下のリンクは、イッカクに関する情報ページ、対応するメールアドレス、および 4MB の PDF ファクトファイルへのリンクです。この課題では、次のことを行ってください。

この課題を完成させるには、次のようにしてください。

1. リンクテキストの書き方が悪い既存の段落を選び、良いリンクテキストがあるように書き直しましょう。
2. 警告を追加する必要があるリンクには、警告を追加しましょう。

この課題の出発点は次のようなものです。

{{ EmbedLiveSample('links-3', "100%", 200) }}

この出発点となる基本的なコードは以下の通りです。

```html-nolint live-sample___links-3
<p>
  私たちはイッカクに関する多くの研究を行っています。この研究について詳しく知りたい方は、<a href="narwhals.html" target="_blank">こちらをクリック</a>してください。
</p>

<p>
  何か質問がある方は、支援チームにメールを送ってください。<a href="mailto:whales@example.com">ここをクリック</a>すると送ることができます。
</p>

<p>
  また、<a href="factfile.pdf" target="_blank">こちらをクリック</a>すると、FAQ を含むさらに詳しい情報が掲載された資料をダウンロードできます。
</p>
```

```css hidden live-sample___links-3
body {
  background-color: white;
  color: #333333;
  font:
    1em / 1.4 "Helvetica Neue",
    "Helvetica",
    "Arial",
    sans-serif;
  padding: 1em;
  margin: 0;
}

p {
  color: gray;
  margin: 0.5em 0;
}

* {
  box-sizing: border-box;
}
```

この課題の完成したコンテンツは提供しておりません。解決策を明かすことになるためです。

<details>
<summary>ここをクリックすると、模範解答を表示します。</summary>

完了した HTML は、次のようになるはずです。

```html-nolint
<p>
  私たちはイッカクに関する多くの研究を行っています。<a href="narwhals.html" target="_blank">この研究について詳しく知りましょう</a>。
</p>

<p>
  何か質問がある方は、<a href="mailto:whales@example.com">支援チームにメールを送ってください</a>。
</p>

<p>
  また、FAQ を含むさらに詳しい情報が掲載された<a href="factfile.pdf" target="_blank">資料をダウンロード</a> (PDF, 4MB) できます。
</p>
```

</details>

{{PreviousMenuNext("Learn_web_development/Core/Structuring_content/Creating_links", "Learn_web_development/Core/Structuring_content/Structuring_a_page_of_content", "Learn_web_development/Core/Structuring_content")}}
