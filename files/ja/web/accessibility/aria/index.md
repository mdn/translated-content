---
title: ARIA
slug: Web/Accessibility/ARIA
---

Accessible Rich Internet Applications **(ARIA)** はウェブコンテンツやウェブアプリケーション (特に JavaScript で開発するもの) を、ハンディキャップを持つ人々にとってよりアクセシブルにする方法を定義します。

ARIA は、アプリケーションで一般的に使用されている対話操作やウィジェットを、他のメカニズムがない場合に支援技術に渡すことができるように HTML を補完します。例えば ARIA は、 HTML4 のアクセシブルナビゲーションランドマーク、 JavaScript のウィジェット、フォームのヒントやエラーメッセージ、ライブコンテンツの更新などを可能にします。

> **警告:** これらのウィジェットの多くは、後に HTML5 に組み込まれました。意味的に正しい HTML 要素が存在するのであれば、 **ARIA を使用するよりも、その要素を使用したほうがいいでしょう**。例えば、ネイティブな要素には[キーボードのアクセシビリティ](/ja/docs/Web/Accessibility/Keyboard-navigable_JavaScript_widgets)や役割、状態が組み込まれています。しかし、 ARIA を使用する場合は、スクリプトで (同等の) ブラウザーの動作を模倣する責任があります。

プログレスバーウィジェットのためのマークアップです。

```html
<div
  id="percent-loaded"
  role="progressbar"
  aria-valuenow="75"
  aria-valuemin="0"
  aria-valuemax="100"></div>
```

このプログレスバーは、意味を持たない `<div>` を使って作られています。残念ながら、 HTML 4 には開発者が利用できるより意味のある要素がないので、 ARIA の役割とプロパティを追加する必要があります。要素に属性を追加することでこれを指定します。この例では、 `role="progressbar"` 属性により、この要素が実際には JavaScript を使用したプログレスバーウィジェットであることをブラウザーに伝えています。 `aria-valuemin` および `aria-valuemax` 属性はプログレスバーの最小値と最大値を指定し、 `aria-valuenow` は現在の状態を表すため、 JavaScript から更新し続けます。

マークアップに直接配置するとともに、 ARIA の属性を要素に追加して、次のような JavaScript コードを使用して動的に更新することができます。

```js
// プログレスバーの <div> を DOM 内で探す。
var progressBar = document.getElementById("percent-loaded");

// ARIA ロールと状態を設定することで、
// 支援技術がウィジェットの種類を知ることができる。
progressBar.setAttribute("role", "progressbar");
progressBar.setAttribute("aria-valuemin", 0);
progressBar.setAttribute("aria-valuemax", 100);

// プログレスバーの値を更新したいときにいつでも呼び出せる
// 関数を作成する。
function updateProgress(percentComplete) {
  progressBar.setAttribute("aria-valuenow", percentComplete);
}
```

> **メモ:** ARIA は HTML4 以降に導入されたため、 HTML4 や XHTML の派生形では検証できません。ただし、技術的に問題があっても、それを上回るアクセシビリティの向上が得られます。
>
> HTML5 では、すべての ARIA 属性が有効です。新しいランドマーク要素 (`<main>`, `<header>`, `<nav>` など) は ARIA ロールに組み込まれたため、重複指定する必要はありません。

## 対応

他のウェブ技術と同様に、 ARIA の対応には様々な程度があります。対応の程度は、使用しているオペレーティングシステムとブラウザー、それらと連携している支援技術の種類によって異なります。また、OS、ブラウザー、支援技術のバージョンも要因となります。古いバージョンのソフトウェアは、特定の ARIA ロールを対応していなかったり、部分的にしか対応していなかったり、機能を誤って報告していたりする可能性があります。

また、支援技術に依存している人の中には、コンピューターやブラウザーとのやり取りができなくなることを恐れて、ソフトウェアの更新に消極的な人がいることも認識しておく必要があります。そのため、できるだけ[意味を持った HTML 要素を使用する](/ja/docs/Learn/Accessibility/HTML)ことが重要です。意味を持った HTML は、支援技術への対応がはるかに優れているからです。

また、作成した ARIA を実際の支援技術でテストすることも重要です。ブラウザーのエミュレーターやシミュレーターを使っても、完全な対応をテストするために効果的ではないのと同様に、代理の支援技術ソリューションを使用しても、機能性を完全に保証することはできません。

## チュートリアル

- [ARIA 入門](/ja/docs/Web/Accessibility/An_overview_of_accessible_web_applications_and_widgets)
  - : ARIA で動的コンテンツをアクセシブルにする方法の簡単な紹介です。2008 年に作成された、定評のある [Gez Lemon 氏による ARIA の紹介](https://dev.opera.com/articles/view/introduction-to-wai-aria/)もご覧ください。
- [Videos of screen readers using ARIA](https://zomigi.com/blog/videos-of-screen-readers-using-aria-updated/)
  - : ARIA の導入「前」および「後」を含む、ウェブ中の簡単な実例のビデオをご覧ください。
- [Using ARIA](https://w3c.github.io/using-aria/)
  - : 開発者向けの実践的なガイドです。HTML 要素で使用する ARIA 属性は何かについて提案しています。提案内容は、実際の実装状況に基づいています。

## 単純な ARIA の強化

- [Enhancing page navigation with ARIA landmarks](https://www.paciellogroup.com/blog/2013/02/using-wai-aria-landmarks-2013/)
  - : スクリーンリーダーの利用者向けにウェブページのナビゲーションを向上させるための、 ARIA landmark の使用法を紹介します。 [ARIA landmark の実装状況の覚え書き](https://www.paciellogroup.com/blog/2011/07/html5-accessibility-chops-aria-landmark-support/)や実際のサイトでの例もご覧ください (2011 年 7 月更新)。
- [フォームのアクセシビリティ向上](/ja/docs/Web/Accessibility/ARIA/forms)
  - : ARIA は動的コンテンツのためだけのものではありません! 付加的な ARIA の属性を使用して HTML フォームのアクセシビリティを向上させる方法を学びましょう。

## スクリプトウィジェット向け ARIA

- [キーボードで操作可能な JavaScript ウィジェットを書く](/ja/docs/Web/Accessibility/Keyboard-navigable_JavaScript_widgets)
  - : \<input> や \<button> などのような組み込み要素は、キーボードのアクセシビリティが組み込まれています。これらを \<div> と ARIA で「偽装」する場合は、ウィジェットがキーボードでアクセシブルであることを保証する必要があります。
- [ライブリージョン](/ja/docs/Web/Accessibility/ARIA/ARIA_Live_Regions)
  - : ライブリージョンは、ページのコンテンツが変更された場合に、スクリーンリーダーにどのように対処すべきかを提案します。
- [Using ARIA Live Regions to announce content changes](https://www.freedomscientific.com/Training/Surfs-up/AriaLiveRegions.htm)
  - : スクリーンリーダーソフトウェア JAWS のメーカーによる、ライブリージョンについての簡単なまとめです。ライブリージョンは、 Firefox と NVDA、 Safari と VoiceOver でも対応しています。

## リファレンス

- [ARIA ロール](/ja/docs/Web/Accessibility/ARIA/Roles)
  - : MDN 上のすべての WAI-ARIA ロールをカバーするリファレンスページです。

## 標準化の取り組み

- [WAI-ARIA 仕様書](https://www.w3.org/TR/wai-aria-1.1/)
  - : W3C の仕様書そのものです。
- [WAI-ARIA Authoring Practices](https://www.w3.org/TR/wai-aria-practices-1.1/)
  - : 一般的なウィジェットや対話操作をどのように ARIA 化するのが最良なのかを記述した、公式のベストプラクティス文書です。優れたリソースです。

## 動画

ARIA を理解するには、以下の講演が最適です。

[ARIA, Accessibility APIs and coding like you give a damn! – Léonie Watson](https://www.youtube.com/watch?v=qdB8SRhqvFc)

## バグ報告

[ブラウザー、スクリーンリーダー、JavaScript ライブラリの ARIA に関するバグを報告してください](/ja/docs/Accessibility/ARIA/How_to_file_ARIA-related_bugs)。

## 関連トピック

[Accessibility](/ja/docs/Web/Accessibility), [AJAX](/ja/docs/Web/Guide/AJAX), [JavaScript](/ja/docs/Web/JavaScript)

1. [ウェブ開発](/ja/docs/Web/Guide)
2. [アクセシビリティと Mozilla](/ja/docs/Mozilla/Accessibility)
