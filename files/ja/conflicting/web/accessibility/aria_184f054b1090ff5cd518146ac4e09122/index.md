---
title: ウェブアプリケーションと ARIA の FAQ
slug: conflicting/Web/Accessibility/ARIA_184f054b1090ff5cd518146ac4e09122
original_slug: Web/Accessibility/ARIA/Web_applications_and_ARIA_FAQ
---

## ARIA とは何か

WAI-ARIA は、
[W3C](https://www.w3.org/) の <a href="https://www.w3.org/WAI/" &#x22;="">Web Accessibility Initiative</a> による、[Accessible Rich Internet Applications](https://www.w3.org/WAI/intro/aria.php) の仕様です。 ARIA はウェブアプリケーションやウィジェットを、画面リーダーや拡大鏡などの支援技術を使用するユーザーを含む幅広いユーザーに対して、よりアクセス可能にする手段を提供します。

ARIA はメニュー、スライダー、ツリー、ダイアログといった多くの一般的なユーザーインターフェイスの役割、状態、機能性を示す付加的な意味を与えます。また作者がページ上の目印、部分、グリッドを設定することを支援する、付加的な構造情報も与えます。ARIA は動的で JavaScript 駆動のアプリケーションやウィジェットを、さまざまなデスクトップベースの支援技術と対話可能にします。

ARIA でアクセス可能なウィジェットを作成する方法について詳しくは、[アクセス可能なウェブアプリケーションやウィジェットの概要](/ja/docs/Web/Accessibility/An_overview_of_accessible_web_applications_and_widgets)をご覧ください。

## ARIA はどこで対応されているのか

ARIA は比較的新しい仕様ですが、対応は進みつつあります。多種多様なよく使用されるブラウザー、支援技術、JavaScript ツールキットやアプリケーションが ARIA に対応しています。しかし、多くのユーザーがこれらの技術の古いバージョンを使用している可能性があります。古いブラウーザーや支援技術を良好にサポートするためには、先進的な拡張方法 (例えばマークアップに直接ではなく JavaScript を使用して ARIA を追加する) を使用して ARIA を実装したいと考えるでしょう。

### ブラウザー

ARIA は以下のブラウザーが対応しています。

| ブラウザー                                                                                        | 最低バージョン | 備考                                                                                                                          |
| ------------------------------------------------------------------------------------------------- | -------------- | ----------------------------------------------------------------------------------------------------------------------------- |
| Firefox                                                                                           | 3.0 以降       | NVDA、JAWS 10 以降、Orca で動作                                                                                               |
| [Chrome](https://dev.chromium.org/developers/design-documents/accessibility#TOC-WAI-ARIA-Support) | 最新           | Chrome 15 時点では、画面リーダーは実験的な対応                                                                                |
| Safari                                                                                            | 4 以降         | Safari 5 での対応はとても改善されています。 Live region の対応は、iOS5 または OS X Lion の VoiceOver と Safari 5 が必要です。 |
| [Opera](https://www.opera.com/docs/specs/presto28/wai-aria/roleattributes/)                       | 9.5 以降       | OS X では VoiceOver が必要です。 TBD: 現在の状況はどうでしょうか?                                                             |
| [Internet Explorer](https://msdn.microsoft.com/en-us/library/cc891505%28v=vs.85%29.aspx)          | 8 以降         | JAWS 10 以降や NVDA で動作します。NVDA では live region をサポートしません。 IE9 での対応はとても改善されています。           |

以前のバージョンでは ARIA の一部の機能しか対応していない場合があります。より詳しいブラウザーの互換性の表は、複数の情報源から得ることができます。

- [caniuse.com](https://caniuse.com/wai-aria)
- [The Paciello Group](https://www.paciellogroup.com/blog/2012/02/rough-guide-browsers-operating-systems-and-screen-reader-support/)

### 支援技術

支援技術は ARIA を順次採用してきています。その中の一部を紹介します。

| 支援技術    | 基本的な ARIA の最低バージョン               | live region および alert の対応の最低バージョン                                              |
| ----------- | -------------------------------------------- | -------------------------------------------------------------------------------------------- |
| NVDA        | 2010.2 (NVDA のアップグレードは常に無償です) | Firefox 向けは 2011.1 で対応しました。2011.2 の時点で IE の live region の対応はありません。 |
| Orca        | ? (TBD)                                      | ? (TBD)                                                                                      |
| VoiceOver   | OSX 10.5, iOS 4                              | OS X 10.7 iOS 5                                                                              |
| JAWS        | 8                                            | 10                                                                                           |
| Window-Eyes | 7                                            | 現在 live region には対応していません。                                                      |
| ZoomText    | ?                                            | 現在 live region には対応していません。                                                      |

注: これらツールの過去のバージョンは、ARIA の実装が部分的あるいはバグがある場合があります。

JAWS 10 時点の、JAWS の ARIA 対応に関する注については、Paciello Group による記事、 [JAWS Support for ARIA](https://www.paciellogroup.com/blog/2010/10/jaws-support-for-aria/) をご覧ください。

### JavaScript ツールキット

ARIA のロール、ステート、プロパティは、以下のような多くのポピュラーな JavaScript ユーザーインターフェイスツールキットに追加されています:

- Dojo/Dijit
- jQuery UI
- Fluid Infusion
- Google Closure
- Google Web Toolkit
- BBC Glow
- Yahoo! User Interface Library (YUI)

JavaScript ツールキットのアクセシビリティに関する詳細情報:

- Steve Faulkner 氏による [WAI-ARIA Implementation in JavaScript UI Libraries](https://www.paciellogroup.com/blog/2009/07/wai-aria-implementation-in-javascript-ui-libraries/)

## ARIA の実例を見せていただけますか

はい。こちらがプログレスバーのウィジェットのマークアップです。

```html
<div id="percent-loaded" role="progressbar" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100" />
```

このプログレスバーは `<div>` を使用して作られており、あまり説明的ではありません。残念ながら HTML 4 では開発者が使用できる、より意味がある要素はありませんので、ARIA のロールやプロパティを含めることが必要です。これらは、要素に属性を追加することによって指定します。この例では `role="progressbar"` 属性で、要素が実際は JavaScript で動作するプログレスバーウィジェットであることをブラウザーに伝えます。**aria-valuemin** 属性や **aria-valuemax** 属性はプログレスバーの最小値と最大値を、 **aria-valuenow** 属性は現在の状態を示します。

ARIA の属性はマークアップ内に直接置くほかに、以下のような JavaScript コードを使用して要素へ追加および動的な更新を行うこともできます。

```js
// DOM でプログレスバーである <div> を探します。
var progressBar = document.getElementById("percent-loaded");

// どのようなウィジェットであるかを支援技術がわかるように、ARIA のロールやステートを設定します。
progressBar.setAttribute("role", "progressbar");
progressBar.setAttribute("aria-valuemin", 0);
progressBar.setAttribute("aria-valuemax", 100);

// プログレスバーの値を更新するたびに呼び出すことが可能な関数を作成します。
function updateProgress(percentComplete) {
  progressBar.setAttribute("aria-valuenow", percentComplete);
}
```

## ARIA を追加するとページのスタイルや動作が変わりますか

いいえ。ARIA は支援技術の API を使用可能にするだけであり、DOM やスタイルに関するブラウザーのネイティブ機能には影響を与えません。ブラウザーから見ると、ネイティブな HTML は要素のセマンティックな意味や動作を定義するものであり、ARIA の属性は AT API のサポートを支援するレイヤーとして機能します。ARIA の属性は他の HTML 属性と同様にスタイルを変更しませんが、CSS は要素のセレクタとして ARIA の属性を活用できます。これは、ARIA が有効なウィジェットにスタイルを設定するうえで便利な仕組みです。

```css
.tab-panel[aria-hidden="true"] {
  display: none;
  }

.tab-panel[aria-hidden="false"] {
  display: block;
  }
```

## 検証はどうなりますか

**role** 属性や **aria-** 接頭辞がついた属性のような、ARIA で導入された新たな属性は、 HTML 4 や XHTML 4 の正式な一部分ではありません。その結果、ARIA を含むページは [W3C の Markup Validator](https://validator.w3.org/) のようなツールで検証してはいけません。

第一にこの問題の解決策になり得ることは、ARIA のロールやステートをマークアップ内に直接置くのを避けることです。代わりに、前出の [ARIA の実例を見せていただけますか?](#aria-in-action) への回答で示したように、JavaScript を使用してページへ動的に ARIA を追加してください。それでも理論上、ページは妥当ではありませんが、すべての静的な検証は正しく合格するでしょう。

別の代案は HTML5 の doctype を使用することで、これは ARIA のサポートが組み込まれています。W3C の HTML5 validator は、あなたの HTML5 ページにおける ARIA の誤った使い方も発見するでしょう。

## HTML5 と ARIA との関係は?

HTML5 では、役に立つ多くのセマンティックな要素を HTML に導入しました。これの要素のうちの一部は、新たな `<progress>` 要素のように、 ARIA で使用可能なロールに直接対応します。ブラウザーが ARIA にも存在する HTML5 要素に対応している場合は、通常その要素に ARIA のロールやステートも追加する必要はありません。ARIA には HTML5 で使用できない多くのロール、ステート、プロパティが含まれており、それらは HTML5 を使用する開発者にとって引き続き有用でしょう。詳細情報として、Steve Faulkner 氏が [HTML5 と ARIA の関係について良い概説](https://www.paciellogroup.com/blog/2010/04/html5-and-the-myth-of-wai-aria-redundance/)を記述しました。

#### HTML5 から ARIA へのグレイスフルデグラデーション

HTML5 が利用できないブラウザーにコンテンツを提供するときに、必要なところで ARIA の使用へグレイスフルデグラデーションを行いたいと考えるでしょう。プログレスバーの例で言うと、 `<progressbar>` 要素に対応していない場合は `role="progressbar"` へグレイスフルデグラデーションできます。

こちらが、HTML5 のプログレスバーを使用するマークアップの例です。

```html
<!DOCTYPE html>
<html>
  <head><title>Gracefully degrading progress bar</title></head>
  <body>
    <progress id="progress-bar" value="0" max="100">0% complete</progress>
    <button id="update-button">Update</button>
 </body>
</html>
```

そして、こちらが古いブラウザーでもプログレスバーが動作するようにする JavaScript コードです。

```js
var progressBar = document.getElementById("progress-bar");

// ブラウザーが HTML5 の <progress> 要素に対応しているかを確認します。
var supportsHTML5Progress = (typeof (HTMLProgressElement) !== "undefined");

function setupProgress() {
  if (!supportsHTML5Progress) {
    // HTML5 の <progress> にブラウザーが対応していないので、
    // ARIA のロールやステートを要素に追加します。
    progressBar.setAttribute("role", "progressbar");
    progressBar.setAttribute("aria-valuemin", 0);
    progressBar.setAttribute("aria-valuemax", 100);
  }
}

function updateProgress(percentComplete) {
  if (!supportsHTML5Progress) {
    // HTML5 の <progress> にブラウザーが対応していないので、
    // aria-valuenow 属性の更新が必要です。
    progressBar.setAttribute("aria-valuenow", percentComplete);
  } else {
    // HTML5 の <progress> に対応しているので、代わりに value 属性を更新します。
    progressBar.setAttribute("value", percentComplete);
  }

  progressBar.textContent = percentComplete + "% complete";
}

function initDemo() {
  setupProgress(); // プログレスバーの設定。

  // click ハンドラーをボタンに割り当てます。これはプログレスバーを 75% に更新します。
  document.getElementById("update-button").addEventListener("click", function (e) {
    updateProgress(75);
    e.preventDefault();
  }, false);
}
initDemo();
```

## 支援技術はどのように動作しますか?

支援技術は、アプリケーションのユーザーインターフェイスのロール、ステート、構造を表すよう特に設計された、各オペレーティングシステムに組み込まれた API を使用します。例えば、画面リーダーはテキスト読み上げエンジンでユーザーインターフェイスを読むために、拡大鏡はスクリーンで重要またはアクティブな領域を強調するために、オンスクリーンキーボードはそのときの状況や UI コントロールに対してもっとも効率的なキーボードレイアウトを提供するために、この API を使用します。さらに支援技術はたいてい、ページのセマンティクスや属性を理解するために、この API を通してページの DOM にアクセスします。

ARIA は DOM の世界とデスクトップの世界との間を橋渡しします。ブラウザーは ARIA が有効な要素を、ネイティブなウィジェットであるかのように支援技術の API に公開します。その結果ユーザーは潜在的により一貫したユーザー体験を得て、そこではウェブの動的な JavaScript で動作するウィジェットが、デスクトップで同等のウィジェットに匹敵します。

## 私の ARIA の使い方の確認方法は? 自由に使用できるツールはありますか?

動作中の ARIA のテストを支援する、調査ツールやデバッグツールがいくつかあります。

- Windows で Object Inspector
- OS X で Accessibility Inspector
- Linux で AccProbe
- Firebug の DOM Inspector
- [Accessibility Inspector for Firebug](https://code.google.com/p/ainspector/)
- The Audits tab in Chrome DevTools

ARIA の実践的なテストに使用できる、フリーまたはオープンソースの画面リーダーもいくつかあります。以下のようなものです:

- Linux 向けの [Orca](https://live.gnome.org/Orca)
- Windows 向けの [NVDA](https://www.nvda-project.org/)
- OS X 内蔵の [VoiceOver](https://www.apple.com/accessibility/voiceover/)

画面リーダーでテストを行うときは、2 つのポイントを覚えておいてください。

1. 画面リーダーのユーザーと気軽にテストしても、実際のユーザーからのフィードバックやテスト、ヘルプにはかないません。
2. 画面リーダーのサポートだけがアクセシビリティではありません。様々なユーザビリティとアクセシビリティの手法でテストしてみてください。

ARIA が有効なアプリケーションやウィジェット向けの、その他の有用なテストツールや手法です。

- [Yahoo!'s ARIA bookmarklets](https://yaccessibilityblog.com/library/test-aria-focus-bookmarklets.html)
- Fluid Project の [simple accessibility evaluation techniques](https://wiki.fluidproject.org/display/fluid/Simple+Accessibility+Review+Protocol)

## ARIA の議論はどこで行われていますか?

- [Wai-xtech mailing list](https://lists.w3.org/Archives/Public/wai-xtech/) -- ARIA 仕様で議論されてきたことを保持しています。
- [Free-ARIA google group](https://groups.google.com/group/free-aria) -- 無料のツールやリソースの開発者およびユーザー向けです。

## ARIA についてより詳しく学ぶには

- [アクセス可能なウェブアプリケーションやウィジェットの概要](/ja/docs/Web/Accessibility/An_overview_of_accessible_web_applications_and_widgets)
- [Accessible forms](/ja/docs/Web/Accessibility/ARIA/forms)
- W3C の [WAI-ARIA Frequently Asked Questions](https://www.w3.org/WAI/aria/faq)
- WebAIM の [Accessibility of Rich Internet Applications](https://webaim.org/techniques/aria/)
