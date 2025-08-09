---
title: "スキルテスト: リンク"
short-title: リンク
slug: Learn_web_development/Core/Structuring_content/Test_your_skills/Links
l10n:
  sourceCommit: 2f16610802bfbdf6394ca919557a4369b1236e10
---

このスキルテストの目的は、あなたが [HTML でのハイパーリンクの実装](/ja/docs/Learn_web_development/Core/Structuring_content/Creating_links)を行う方法を理解しているかどうかを評価することです。

> [!NOTE]
> 手助けが必要な場合は、[スキルテスト](/ja/docs/Learn_web_development#スキルテスト)使用ガイドをお読みください。また、[コミュニケーションチャネル](/ja/docs/MDN/Community/Communication_channels)のいずれかを使用して、私たちに連絡することもできます。

> [!NOTE]
> これらの課題の開始コードにあるリンクの一部には、`target="_blank"` 属性が設定されています。これにより、リンクをクリックすると、同じタブではなく新しいタブでリンク先のページが開きます。これは厳密には最善の手法ではありませんが、MDN Playground の出力 `<iframe>` でページが開いて、サンプルコードが消えてしまうことを避けるために、ここではこの手法を採用しています。

## 課題 1

この課題では、クジラの情報ページのリンクを埋めるのを手伝っていただきます。

この課題を完成させるには、次のようにリンクを更新してください。

1. 最初のリンクは、現在のページと同じディレクトリーにある `whales.html` というページにリンクされるようにします。
2. また、マウスオーバーしたときに、このページにはシロナガスクジラやマッコウクジラの情報が含まれていることをユーザーに指示するツールチップを付けましょう。
3. 2 つ目のリンクは、ユーザーの既定のメールアプリケーションで、受信者を "whales\@example.com" に設定してメールを開くためのリンクに変更しましょう。
4. メールの件名が「クジラについての質問」と自動的に記入されるように設定すると、ボーナスポイントも得られます。

```html live-sample___links-1
<h1>Information on Whales</h1>

<p>
  For more information on our conservation activities and which Whales we study,
  see our <a target="_blank">Whales page</a>.
</p>

<p>
  If you want to ask our team more questions, feel free to
  <a target="_blank">email us</a>.
</p>
```

```css hidden live-sample___links-1
body {
  background-color: #fff;
  color: #333;
  font:
    1em / 1.4 Helvetica Neue,
    Helvetica,
    Arial,
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

{{ EmbedLiveSample('links-1', "100%", 170) }}

<details>
<summary>ここをクリックすると、模範解答を表示します。</summary>

完了した HTML は、次のようになるはずです。

```html-nolint
<h1>Information on Whales</h1>

<p>
  For more information on our conservation activities and which Whales we study,
  see our <a target="_blank" href="whales.html" title="Includes information on Blue Whales and Sperm Whales">
  Whales page</a>.
</p>

<p>
  If you want to ask our team more questions, feel free to
  <a target="_blank" href="mailto:whales@example.com?subject=Question%20about%20Whales">
  email us</a>.
</p>
```

</details>

## 課題 2

この課題では、4 つのリンクが適切な場所にリンクするように記入していただきます。

この課題を完成させるには、次のようにリンクを更新してください。

1. 最初のリンクは、カレントディレクトリーの中の `blue` というディレクトリーにある `blue-whale.jpg` という画像にリンクするようにしましょう。
2. 2 つ目のリンクは、カレントディレクトリーの 1 つ上のディレクトリーである `narwhal` というディレクトリーにある `narwhal.jpg` という画像にリンクするようにしましょう。
3. 3 つ目のリンクは、UK の Google 画像検索にリンクしてください。ベース URL は `https://www.google.co.uk` で、画像検索は `imghp` というサブディレクトリーに配置されています。
4. 4 つ目のリンクは、現在のページの一番下にある段落にリンクしましょう。これは `bottom` という ID が付いています。

```html live-sample___links-2
<h1>List path tests</h1>

<ul>
  <li><a target="_blank">Link me to the blue whale image</a></li>
  <li><a target="_blank">Link me to the narwhal image</a></li>
  <li><a target="_blank">Link me to Google image search</a></li>
  <li><a>Link me to the paragraph at the bottom of the page</a></li>
</ul>

<div></div>

<p id="bottom">The bottom of the page!</p>
```

```css hidden live-sample___links-2
body {
  background-color: #fff;
  color: #333;
  font:
    1em / 1.4 Helvetica Neue,
    Helvetica,
    Arial,
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

{{ EmbedLiveSample('links-2', "100%", 200) }}

<details>
<summary>ここをクリックすると、模範解答を表示します。</summary>

完了した HTML は、次のようになるはずです。

```html-nolint
<h1>List path tests</h1>

<ul>
  <li><a target="_blank" href="blue/blue-whale.jpg">
    Link me to the blue whale image
  </a></li>
  <li><a target="_blank" href="../narwhal/narwhal.jpg">
    Link me to the narwhal image
  </a></li>
  <li><a target="_blank" href="https://www.google.co.uk/imghp">
    Link me to Google image search
  </a></li>
  <li><a href="#bottom">
    Link me to the paragraph at the bottom of the page
  </a></li>
</ul>

<div></div>

<p id="bottom">The bottom of the page!</p>
```

</details>

## 課題 3

以下のリンクは、一角獣に関する情報ページ、対応するメールアドレス、および 4MB の PDF ファクトファイルへのリンクです。この課題では、次のことを行ってください。

この課題を完成させるには、次のようにしてください。

1. リンクテキストの書き方が悪い既存の段落を選び、良いリンクテキストがあるように書き直しましょう。
2. 警告を追加する必要があるリンクには、警告を追加しましょう。

```html live-sample___links-3
<p>
  We do lots of work with Narwhals. To find out more about this work,
  <a href="narwhals.html" target="_blank">click here</a>.
</p>

<p>
  You can email our support team if you have any more questions —
  <a href="mailto:whales@example.com">click here</a> to do so.
</p>

<p>
  You can also <a href="factfile.pdf" target="_blank">click here</a> to download
  our factfile, which contains lots more information, including an FAQ.
</p>
```

```css hidden live-sample___links-3
body {
  background-color: #fff;
  color: #333;
  font:
    1em / 1.4 Helvetica Neue,
    Helvetica,
    Arial,
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

{{ EmbedLiveSample('links-3', "100%", 200) }}

<details>
<summary>ここをクリックすると、模範解答を表示します。</summary>

完了した HTML は、次のようになるはずです。

```html-nolint
<p>
  We do lots of work with Narwhals. <a href="narwhals.html" target="_blank">Find out more about this work</a>.
</p>

<p>
  You can <a href="mailto:whales@example.com">email our support team</a> if you have any more questions.
</p>

<p>
  You can also <a href="factfile.pdf" target="_blank">download
  our factfile</a> (PDF, 4MB), which contains lots more information, including an FAQ.
</p>
```

</details>
