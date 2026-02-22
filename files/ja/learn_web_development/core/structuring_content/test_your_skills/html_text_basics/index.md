---
title: "確認テスト: HTML テキストの基礎"
short-title: "試験: HTML テキストの基礎"
slug: Learn_web_development/Core/Structuring_content/Test_your_skills/HTML_text_basics
l10n:
  sourceCommit: 1cf3cb0fb22bf89c780fefe74c3db7f1b9e8ca09
---

{{PreviousMenuNext("Learn_web_development/Core/Structuring_content/Lists", "Learn_web_development/Core/Structuring_content/Advanced_text_features", "Learn_web_development/Core/Structuring_content")}}

この確認テストの目的は、あなたが HTML でのテキストのマークアップを行う方法を理解しているかどうかを評価することです。

> [!NOTE]
> 手助けが必要な場合は、[確認テスト](/ja/docs/Learn_web_development#確認テスト)使用ガイドをお読みください。また、[コミュニケーションチャネル](/ja/docs/MDN/Community/Communication_channels)のいずれかを使用して、私たちに連絡することもできます。

## テキストの基本 1

この課題では、与えられた HTML を意味づけされた見出しと段落要素を使用してマークアップしていただきます。

この課題の出発点は次のようなものです。

{{ EmbedLiveSample('text-basics-1', "100%", 130) }}

この出発点の基盤となるコードは次の通りです。

```html-nolint live-sample___text-basics-1
基本的な HTML の動物

このページの最初の段落です。当施設の動物たちをご紹介します。

ラマ

私たちのラマはリストアイテムが大好きだ。ウェブページでそれらを見つけると、同様に甘いもののように貪り食う。そのたびに舌なめずりをするのだ。

ガラガラヘビ

狡猾なガラガラヘビはページ上を這い回り、アンカーを道として使用して素早く移動し、獲物に忍び寄るのが好きだ。
```

<!-- Shared/setup CSS code -->

```css hidden live-sample___text-basics-1 live-sample___text-basics-1-finished live-sample___text-basics-2 live-sample___text-basics-2-finished live-sample___text-basics-3 live-sample___text-basics-3-finished live-sample___text-basics-4 live-sample___text-basics-4-finished
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
}

h2 {
  font-size: 1.6rem;
  margin: 0;
}

* {
  box-sizing: border-box;
}
```

<!-- Example-specific code -->

```css hidden live-sample___text-basics-1 live-sample___text-basics-1-finished
h1,
h2 {
  color: purple;
}

p {
  color: gray;
  margin: 0.5em 0;
}
```

更新されたコンテンツは次のようになります。

{{ EmbedLiveSample('text-basics-1-finished', "100%", 320) }}

<details>
<summary>ここをクリックすると、模範解答を表示します。</summary>

完成した HTML は、次のようになるはずです。

```html-nolint live-sample___text-basics-1-finished
<h1>基本的な HTML の動物</h1>

<p>このページの最初の段落です。当施設の動物たちをご紹介します。</p>

<h2>ラマ</h2>

<p>
  私たちのラマはリストアイテムが大好きだ。ウェブページでそれらを見つけると、同様に甘いもののように貪り食う。そのたびに舌なめずりをするのだ。
</p>

<h2>ガラガラヘビ</h2>

<p>
  狡猾なガラガラヘビはページ上を這い回り、アンカーを道として使用して素早く移動し、獲物に忍び寄るのが好きだ。
</p>
```

</details>

## テキストの基本 2

この課題では、最初のマークアップされていないリストを順序なしリストに、2 つ目のリストを順序付きリストに変えていただきます。

この課題の出発点は次のようなものです。

{{ EmbedLiveSample('text-basics-2', "100%", 220) }}

この出発点の基盤となるコードは次の通りです。

```html-nolint live-sample___text-basics-2
<h1>リストの観察</h1>

<p>次の私の好きな野菜のリストを順序なしリストに変換してください。</p>

キュウリ
ブロッコリー
アスパラガス
ピーマン

<p>次の指示を番号付きリストに変換してください。</p>

まずドアをノックする
尋ねられたら、合言葉を言う
5 秒以上待つ
取っ手を回して押す
```

```css hidden live-sample___text-basics-2 live-sample___text-basics-2-finished
p {
  margin: 0.5em 0;
}

ol {
  border: 2px solid purple;
}

ul {
  border: 2px solid orange;
}

ol,
ul {
  padding: 5px 20px;
  border-radius: 4px;
}
```

更新されたコンテンツは次のようになります。

{{ EmbedLiveSample('text-basics-2-finished', "100%", 400) }}

<details>
<summary>ここをクリックすると、模範解答を表示します。</summary>

完了した HTML は、次のようになるはずです。

```html live-sample___text-basics-2-finished
<h1>リストの観察</h1>

<p>次の私の好きな野菜のリストを順序なしリストに変換してください。</p>

<ul>
  <li>キュウリ</li>
  <li>ブロッコリー</li>
  <li>アスパラガス</li>
  <li>ピーマン</li>
</ul>

<p>次の指示を番号付きリストに変換してください。</p>

<ol>
  <li>まずドアをノックする</li>
  <li>尋ねられたら、合言葉を言う</li>
  <li>5 秒以上待つ</li>
  <li>取っ手を回して押す</li>
</ol>
```

</details>

## テキストの基本 3

この課題では、指定された動物とその定義を説明リストにまとめていただきます。

この課題の出発点は次のようなものです。

{{ EmbedLiveSample('text-basics-3', "100%", 160) }}

この出発点の基盤となるコードは次の通りです。

```html-nolint live-sample___text-basics-3
<h1>高度な HTML の動物</h1>

ラマ
背が高く、毛むくじゃらの四足動物。尖った耳を持つ。乗れることもあるが、不機嫌でよく唾を吐く。リストアイテムが大好き。
ガラガラヘビ
とても大きな絞め殺し蛇。アンカーの道を素早く移動し、獲物に忍び寄る。
カバ
彼の説明は底知れない。
```

```css hidden live-sample___text-basics-3 live-sample___text-basics-3-finished
h1 {
  color: purple;
}

dl {
  color: gray;
  margin: 0.5em 0;
}

dt {
  font-weight: bold;
  color: purple;
}
```

更新されたコンテンツは次のようになります。

{{ EmbedLiveSample('text-basics-3-finished', "100%", 260) }}

<details>
<summary>ここをクリックすると、模範解答を表示します。</summary>

完了した HTML は、次のようになるはずです。

```html-nolint live-sample___text-basics-3-finished
<h1>高度な HTML の動物</h1>

<dl>
  <dt>ラマ</dt>
  <dd>
    背が高く、毛むくじゃらの四足動物。尖った耳を持つ。乗れることもあるが、不機嫌でよく唾を吐く。リストアイテムが大好き。
  </dd>
  <dt>ガラガラヘビ</dt>
  <dd>
    とても大きな絞め殺し蛇。アンカーの道を素早く移動し、獲物に忍び寄る。
  </dd>
  <dt>カバ</dt>
  <dd>彼の説明は底知れない。</dd>
</dl>
```

</details>

## テキストの基本 4

この課題では、1 つの段落が提供されています。目標は、インライン要素を使用して、強い重要性を持つ適切な単語と、強調された単語をいくつかマークアップすることです。

この課題の出発点は次のようなものです。

{{ EmbedLiveSample('text-basics-4', "100%", 160) }}

この出発点の基盤となるコードは次の通りです。

```html-nolint live-sample___text-basics-4
<h1>強調と重要性</h1>

<p>
  私が大切にしているものは二つ — 音楽と友達です。いつか、友達には互いに、そして私の音楽にも関心を持ってもらえるかもしれません。
</p>
```

```css hidden live-sample___text-basics-4 live-sample___text-basics-4-finished
h1,
strong {
  color: purple;
}

p,
em {
  margin: 0.5em 0;
}

em {
  color: gray;
}
```

更新されたコンテンツは次のようになります。

{{ EmbedLiveSample('text-basics-4-finished', "100%", 140) }}

<details>
<summary>ここをクリックすると、模範解答を表示します。</summary>

完了した HTML は、次のようになるはずです。

```html-nolint live-sample___text-basics-4-finished
<h1>強調と重要性</h1>

<p>
  私が大切にしているものは<strong>二つ</strong> — <strong>音楽</strong>と<strong>友達</strong>です。いつか、友達には互いに、<em>そして</em>私の音楽にも関心を持ってもらえるかも<em>しれません</em>。
</p>
```

</details>

{{PreviousMenuNext("Learn_web_development/Core/Structuring_content/Lists", "Learn_web_development/Core/Structuring_content/Advanced_text_features", "Learn_web_development/Core/Structuring_content")}}
