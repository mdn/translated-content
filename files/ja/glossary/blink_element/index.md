---
title: "<blink>: 点滅要素"
slug: Glossary/blink_element
l10n:
  sourceCommit: a4b72d0683826e060f72a82b297b41e0b162d909
---

{{GlossarySidebar}}

**`<blink>`** は、ウェブブラウザーによってサポートされなくなり、MDN でも文書化されなくなった時代遅れの HTML の機能です。テキスト要素を点滅（フラッシュ）させ続けるために使われていました。

## 略史

ウェブの黎明期（90 年代前半から半ば）には、ウェブページをスタイリングするための機能はあまりありませんでした。[CSS](/ja/docs/Web/CSS) の仕様（バージョン 1）が最初にリリースされたのは 1996 年で、一貫してブラウザーに採用されたのはずっと後のことでした。CSS が採用される以前、ブラウザーは特定のテキスト部分を目立たせ、ユーザーの注意を引くためにいくつかの機能を実験的に使っていました。`<blink>` もその一つで、初期バージョンの [Netscape Navigator](/ja/docs/Glossary/Netscape_Navigator) に導入されました。また、初期バージョンの [Internet Explorer's](/ja/docs/Glossary/Microsoft_Internet_Explorer) では {{htmlelement("marquee")}} という別のタグがありました。

`<blink>` は、 Netscape のエンジニアである [Lou Montulli](https://ja.wikipedia.org/wiki/ルー・モントゥリ) と同僚たちがマウンテンビューのバーでしていた会話がきっかけで生まれたようです。彼が翌朝オフィスに出社すると、同僚のひとりが徹夜でその機能を実装していたことに気づきました（[詳しい話はこちら](https://web.archive.org/web/20220331020029/http://www.montulli.org/theoriginofthe%3Cblink%3Etag)）。

当初は人気を集めた `<blink>` ですが、乱用された結果、多くの人がこれを不快だと感じ、多くの批判を受けるようになりました。さらに重要なことは、可読性を低下させ、視覚障害者やてんかん、ADHD のような[認知障害](/ja/docs/Web/Accessibility/Cognitive_accessibility)のあるユーザーにとって特に問題となる可能性があることです。`<blink>` は、混乱を起こしたり、最悪の場合、[発作を引き起こす](/ja/docs/Web/Accessibility/Seizure_disorders)こともあります。

`<blink>` は正式に仕様化されたことはなく、主要なブラウザー間で互換性も得られませんでした。これはウェブの歴史の一部と考えることができます。

## 構文

`<blink>` はこのように使われていました:

```html example-bad
<blink>In ancient browsers, I may have blinked</blink>
```

### 代替案

- CSS の {{cssxref("text-decoration-line")}} プロパティには同じ効果を持つはずの `blink` がありますが、ほとんどのモダンブラウザーはこれを無視します。
- JavaScript の {{jsxref("String.blink()")}} メソッドは、テキスト文字列を `<blink></blink>` タグで囲みますが、前述の通り、この要素はもはやどこでもサポートされていません。
- [CSS animations](/ja/docs/Web/CSS/CSS_animations) は、点滅するテキストを作成するためにまだ使用することができます。しかし、前述した理由から、ウェブページでのテキストの点滅は避けるべきです。

## 関連情報

- Wikipedia：[Blink element](https://en.wikipedia.org/wiki/Blink_element)
- [WCAG 2.2.2: Pause, Stop, Hide](https://www.w3.org/WAI/WCAG21/Understanding/pause-stop-hide)
- [WCAG 2.3.1: Three Flashes or Below Threshold](https://www.w3.org/WAI/WCAG21/Understanding/three-flashes-or-below-threshold)
