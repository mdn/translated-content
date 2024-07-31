---
title: ARIA
slug: Web/Accessibility/ARIA
l10n:
  sourceCommit: 86125702142b74e1e767019e371fb2e5c667e761
---

<section id="Quick_links">
  <ol>
    <li><a href="/ja/docs/Web/Accessibility/ARIA/Annotations">ARIA アノテーション</a></li>
    <li><a href="/ja/docs/Web/Accessibility/ARIA/ARIA_Guides">ARIA ガイド</a></li>
    <li><a href="/ja/docs/Web/Accessibility/ARIA/ARIA_Live_Regions">ARIA ライブリージョン</a></li>
    <li><a href="/ja/docs/Web/Accessibility/ARIA/ARIA_Screen_Reader_Implementors_Guide">ARIA スクリーンリーダー実装者向けガイド</a></li>
    <li><a href="/ja/docs/Web/Accessibility/ARIA/ARIA_Techniques">ARIA の使用: ロール、状態、プロパティ</a></li>
    <li><a href="/ja/docs/Web/Accessibility/ARIA/Multipart_labels">マルチパートラベル</a></li>
    <li><a href="/ja/docs/Web/Accessibility/ARIA/How_to_file_ARIA-related_bugs">ARIA 関連のバグ報告方法</a></li>
    <li class="toggle">
      <details><summary>ARIA 状態とプロパティ</summary>
        {{ListSubpagesForSidebar("Web/Accessibility/ARIA/Attributes", 1)}}
      </details>
    </li>
    <li class="toggle">
      <details><summary>WAI-ARIA ロール</summary>
        {{ListSubpagesForSidebar("Web/Accessibility/ARIA/Roles", 1)}}
      </details>
    </li>
  </ol>
</section>

Accessible Rich Internet Applications **(ARIA)** は[ロール](/ja/docs/Web/Accessibility/ARIA/Roles)や[属性](/ja/docs/Web/Accessibility/ARIA/Attributes)の集合で、ウェブコンテンツやウェブアプリケーション（特に JavaScript で開発するもの）を、ハンディキャップを持つ人々にとってよりアクセシブルにする方法を定義します。

ARIA は、アプリケーションで一般的に使用されている対話操作やウィジェットを、他のメカニズムがない場合に支援技術に渡すことができるように HTML を補完します。例えば ARIA は、アクセシビリティのある JavaScript ウィジェット、フォームのヒント、エラーメッセージ、ライブコンテンツ更新などを可能にします。

> [!WARNING]
> これらのウィジェットの多くは、代のブラウザーで完全に対応しています。意味的に正しい HTML 要素が存在するのであれば、 **ARIA を使用するよりも、その要素を使用したほうがいいでしょう**。例えば、ネイティブな要素には[キーボードのアクセシビリティ](/ja/docs/Web/Accessibility/Keyboard-navigable_JavaScript_widgets)やロール、状態が組み込まれています。しかし、 ARIA を使用する場合は、スクリプトで（同等の）ブラウザーの動作を模倣する責任があります。

[ARIA の最初のルール](https://www.w3.org/TR/using-aria/#rule1) は、「要素を再利用し、それをアクセシブルにするために ARIA のロール、状態、プロパティを追加する代わりに、要求される意味づけと動作がすでに組み込まれているネイティブの HTML 要素または属性を使用することができるなら、そうすること」です。

> [!NOTE]
> 「ARIA なしは悪い ARIA に勝る」という言葉があります。 [100 万以上のホームページを対象とした WebAim の調査](https://webaim.org/projects/million/#aria)では、 ARIA を表示しているホームページは、 ARIA を表示していないホームページに比べて、検出されたエラーが平均 41% 多いことが分かりました。 ARIA はウェブページをよりアクセシビリティの高いものにするために設計されていますが、誤った使用をしてしまうと、良いことより害悪が勝ることがあります。

プログレスバーウィジェットのためのマークアップです。

```html
<div
  id="percent-loaded"
  role="progressbar"
  aria-valuenow="75"
  aria-valuemin="0"
  aria-valuemax="100"></div>
```

このプログレスバーは、意味を持たない {{HTMLElement("div")}} を使って作られています。 ARIA ロールとプロパティで意味を追加します。この例では、 [`role="progressbar"`](/ja/docs/Web/Accessibility/ARIA/Roles/progressbar_role) 属性により、この要素が実際には JavaScript を使用したプログレスバーウィジェットであることをブラウザーに伝えています。 [`aria-valuemin`](/ja/docs/Web/Accessibility/ARIA/Attributes/aria-valuemin) および [`aria-valuemax`](/ja/docs/Web/Accessibility/ARIA/Attributes/aria-valuemax) 属性はプログレスバーの最小値と最大値を指定し、 [`aria-valuenow`](/ja/docs/Web/Accessibility/ARIA/Attributes/aria-valuenow) は現在の状態を表すため、 JavaScript から更新し続けます。

マークアップに直接配置するとともに、 ARIA の属性を要素に追加して、次のような JavaScript コードを使用して動的に更新することができます。

```js
// プログレスバーの <div> を DOM 内で探す。
const progressBar = document.getElementById("percent-loaded");

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

支援技術を使用していないユーザーが利用できるコンテンツは、すべて支援技術でも利用できるようにしなければなりません。同様に、支援技術を使用しないユーザーもアクセスできないような、支援技術ユーザーを対象とした機能を記載してはなりません。上記のプログレスバーは、プログレスバーのように見えるようにスタイル設定する必要があります。

代わりにネイティブの {{HTMLElement('progress')}} 要素を使用した方がずっと簡単でしょう。

```HTML
<progress id="percent-loaded" value="75" max="100">75 %</progress>
```

> **メモ:** `min` 属性は {{HTMLElement('progress')}} 要素では許可されません。その最小値は常に `0` です。

> [!NOTE]
> HTML のランドマーク要素（{{HTMLElement("main")}}、{{HTMLElement("header")}}、{{HTMLElement("nav")}} など）は、組み込みの暗黙の ARIA ロールを持っているので、それらを重複指定する必要はありません。

## 対応

他のウェブ技術と同様に、 ARIA の対応には様々な程度があります。対応の程度は、使用しているオペレーティングシステムとブラウザー、それらと連携している支援技術の種類によって異なります。また、OS、ブラウザー、支援技術のバージョンも要因となります。古いバージョンのソフトウェアは、特定の ARIA ロールを対応していなかったり、部分的にしか対応していなかったり、機能を誤って報告していたりする可能性があります。

また、支援技術に依存している人の中には、コンピューターやブラウザーとのやり取りができなくなることを恐れて、ソフトウェアの更新に消極的な人がいることも認識しておく必要があります。そのため、できるだけ[意味を持った HTML 要素を使用する](/ja/docs/Learn/Accessibility/HTML)ことが重要です。意味を持った HTML は、支援技術への対応がはるかに優れているからです。

また、作成した ARIA を実際の支援技術でテストすることも重要です。ブラウザーのエミュレーターやシミュレーターを使っても、完全な対応をテストするために効果的ではないのと同様に、代理の支援技術ソリューションを使用しても、機能性を完全に保証することはできません。

## リファレンス

- [ARIA ロール](/ja/docs/Web/Accessibility/ARIA/Roles)
  - : MDN 上のすべての WAI-ARIA ロールをカバーするリファレンスページです。
- [ARIA 状態とプロパティ](/ja/docs/Web/Accessibility/ARIA/Attributes)
  - : MDN で説明されているすべての WAI-ARIA の状態とプロパティに応じたリファレンスページです。

## 標準化の取り組み

- [WAI-ARIA 仕様書](https://w3c.github.io/aria/)
  - : W3C の仕様書そのものです。
- [WAI-ARIA authoring practices](https://www.w3.org/TR/wai-aria-practices-1.2/)
  - : 一般的なウィジェットや対話操作をどのように ARIA 化するのが最良なのかを記述した、公式のベストプラクティス文書です。優れたリソースです。

## スクリプトウィジェット向け ARIA

- [キーボードで操作可能な JavaScript ウィジェットを書く](/ja/docs/Web/Accessibility/Keyboard-navigable_JavaScript_widgets)
  - : {{HTMLElement("input")}} や {{HTMLElement("button")}} などのような組み込み要素は、キーボードのアクセシビリティが組み込まれています。これらを {{HTMLElement("div")}} と ARIA で「偽装」する場合は、ウィジェットがキーボードでアクセシブルであることを保証する必要があります。
- [ライブリージョン](/ja/docs/Web/Accessibility/ARIA/ARIA_Live_Regions)
  - : ライブリージョンは、ページのコンテンツが変更された場合に、スクリーンリーダーにどのように対処すべきかを提案します。

## 動画

ARIA を理解するには、以下の講演が最適です。

[ARIA, Accessibility APIs and coding like you give a damn! – Léonie Watson](https://www.youtube.com/watch?v=qdB8SRhqvFc)
