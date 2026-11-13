---
title: blink element (<blink> タグ)
slug: Glossary/blink_element
l10n:
  sourceCommit: 85fccefc8066bd49af4ddafc12c77f35265c7e2d
---

**`<blink>` 要素**は、ウェブブラウザーが対応しなくなり、MDN でも文書化されなくなった時代遅れの HTML の機能です。テキスト要素を点滅（フラッシュ）させ続けるために使われていました。

`<blink>` はこのように使われていました。

```html example-bad
<blink>In ancient browsers, I may have blinked</blink>
```

## 略史

ウェブの黎明期（90 年代前半から半ば）には、ウェブページをスタイル設定するための機能はあまりありませんでした。[CSS](/ja/docs/Web/CSS) の仕様（バージョン 1）が最初にリリースされたのは 1996 年で、一貫してブラウザーに採用されたのはずっと後のことでした。CSS が採用される以前、ブラウザーは特定のテキスト部分を目立たせ、ユーザーの注意を引くためにいくつかの機能を実験的に使っていました。`<blink>` もその一つで、初期バージョンの [Netscape Navigator](/ja/docs/Glossary/Netscape_Navigator) に導入されました。また、初期バージョンの [Internet Explorer](/ja/docs/Glossary/Microsoft_Internet_Explorer) には {{htmlelement("marquee")}} という別の要素がありました。

`<blink>` は、 Netscape のエンジニアである [Lou Montulli](https://ja.wikipedia.org/wiki/ルー・モントゥリ) と同僚たちがマウンテンビューのバーでしていた会話がきっかけで生まれたようです。彼が翌朝オフィスに出社すると、同僚のひとりが徹夜でその機能を実装していたことに気づきました（[詳しい話はこちら](https://web.archive.org/web/20220331020029/http://www.montulli.org/theoriginofthe%3Cblink%3Etag)）。

当初は人気を集めた `<blink>` ですが、乱用された結果、多くの人がこれを不快だと感じ、多くの批判を受けるようになりました。さらに重要なことは、可読性を低下させ、視覚障害者やてんかん、ADHD のような[認知障害](/ja/docs/Web/Accessibility/Guides/Cognitive_accessibility)のあるユーザーにとって特に問題となる可能性があることです。`<blink>` は、混乱を起こしたり、最悪の場合、[発作を引き起こす](/ja/docs/Web/Accessibility/Guides/Seizure_disorders)こともあります。

`<blink>` は正式に仕様化されたことはなく、主要なブラウザー間で互換性も得られませんでした。これはウェブの歴史の一部と考えることができます。

## 代替案

- CSS の {{cssxref("text-decoration-line")}} プロパティには同じ効果を持つはずの `blink` がありますが、現代のほとんどのブラウザーはこれを無視します。
- JavaScript の {{jsxref("String.blink()")}} メソッドは、テキスト文字列を `<blink></blink>` タグで囲みますが、前述の通り、この要素はもはやどこでも対応していません。
- [CSS アニメーション](/ja/docs/Web/CSS/Guides/Animations)は、今でも点滅するテキストを作成するために使用することができます。しかし、前述した理由から、ウェブページでのテキストの点滅は避けるべきです。

## 関連情報

- [Blink element](https://en.wikipedia.org/wiki/Blink_element) - Wikipedia
- [WCAG 2.2.2: Pause, Stop, Hide](https://www.w3.org/WAI/WCAG21/Understanding/pause-stop-hide)
- [WCAG 2.3.1: Three Flashes or Below Threshold](https://www.w3.org/WAI/WCAG21/Understanding/three-flashes-or-below-threshold)
