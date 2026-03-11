---
title: "確認テスト: 高度な HTML テキスト"
short-title: "試験: 高度な HTML テキスト"
slug: Learn_web_development/Core/Structuring_content/Test_your_skills/Advanced_HTML_text
l10n:
  sourceCommit: 1cf3cb0fb22bf89c780fefe74c3db7f1b9e8ca09
---

{{PreviousMenuNext("Learn_web_development/Core/Structuring_content/Advanced_text_features", "Learn_web_development/Core/Structuring_content/Marking_up_a_letter", "Learn_web_development/Core/Structuring_content")}}

この確認テストの目的は、あなたが[高度な意味的特徴をマークアップする有名ではない HTML 要素](/ja/docs/Learn_web_development/Core/Structuring_content/Advanced_text_features)を使用する方法を理解しているかどうかを評価することです。

> [!NOTE]
> 手助けが必要な場合は、[確認テスト](/ja/docs/Learn_web_development#確認テスト)使用ガイドをお読みください。また、[コミュニケーションチャネル](/ja/docs/MDN/Community/Communication_channels)のいずれかを使用して、私たちに連絡することもできます。

## 高度なテキスト 1

この課題では、与えられた HTML に以下のような意味づけを追加していただきます。

この課題を完成させるには、次のようにしてください。

- 2 つ目の段落をブロックレベルの引用にし、その引用が[アクセシビリティ](/ja/docs/Learn_web_development/Core/Accessibility)から引用されたものであることを意味づけしましょう。
- "HTML" と "CSS" を頭字語として意味づけし、その展開形をツールチップとして提供しましょう。
- 化学式や日付に正しい意味づけを行い、正しく表示させるように、添字や上付き文字を使用しましょう。
- 機械読み取り可能な日付とテキストの日付を意味づけしましょう。

この課題の出発点は次のようなものです。

{{ EmbedLiveSample('advanced-text', "100%", 260) }}

この出発点の基盤となるコードは次の通りです。

```html-nolint live-sample___advanced-text
<h1>高度なテキストの意味付け</h1>

<p>引用から始めましょう。</p>

<p>
  HTML、ハイパーテキストマークアップ言語は、正しく使用すればデフォルトでアクセシブルです。
</p>

<p>CSSは、ウェブページのアクセシビリティを向上させたり、低下させたりするためにも使用できます。</p>

<p>化学式: H2O（水）、C2H6O（エタノール）</p>

<p>
  日付: December 25th 2019（クリスマス）、November 2nd 2019（死者の日）。
</p>
```

```css hidden live-sample___advanced-text live-sample___advanced-text-solution
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
  margin: 0.5em 0;
}

abbr,
time {
  color: green;
}
```

更新されたコンテンツは次のようになります。

{{EmbedLiveSample('advanced-text-solution', "", 260)}}

<details>
<summary>ここをクリックすると、模範解答を表示します。</summary>

完了した HTML は、次のようになるはずです。

```html-nolint live-sample___advanced-text-solution
<h1>高度なテキストの意味付け</h1>

<p>引用から始めましょう。</p>

<blockquote cite="https://developer.mozilla.org/en-US/docs/Learn/Accessibility">
  <p>
    <abbr title="HyperText Markup Language">HTML</abbr>、ハイパーテキストマークアップ言語は、正しく使用すればデフォルトでアクセシブルです。
  </p>
</blockquote>

<p>
  <abbr title="Cascading Style Sheets">CSS</abbr>、カスケーディングスタイルシートは、ウェブページのアクセシビリティを向上させたり、低下させたりするためにも使用できます。
</p>

<p>
  化学式: H<sub>2</sub>O（水）、C<sub>2</sub>H<sub>6</sub>O（エタノール）
</p>

<p>
  日付:
  <time datetime="2019-12-25">December 25<sup>th</sup> 2019</time>
  （クリスマス）、
  <time datetime="2019-11-02">November 2<sup>nd</sup> 2019</time>（死者の日）。
</p>
```

</details>

{{PreviousMenuNext("Learn_web_development/Core/Structuring_content/Advanced_text_features", "Learn_web_development/Core/Structuring_content/Marking_up_a_letter", "Learn_web_development/Core/Structuring_content")}}
