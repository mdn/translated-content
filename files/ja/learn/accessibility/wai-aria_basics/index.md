---
title: WAI-ARIAの基本
slug: Learn/Accessibility/WAI-ARIA_basics
---

{{LearnSidebar}}{{PreviousMenuNext("Learn/Accessibility/CSS_and_JavaScript","Learn/Accessibility/Multimedia", "Learn/Accessibility")}}

前回の記事に続いて言えることですが、意味論的ではない HTML や JavaScript によって更新される動的なコンテンツを含むような、複雑な UI コントロールの作成は難しくなることがあります。 WAI-ARIA は、ブラウザーや支援技術が認識できるさらなる意味論を追加することによってそのような問題に対処し、ユーザーの理解を助ける技術です。 ここでは、アクセシビリティを向上させるための基本的な使い方を説明します。

| 前提知識: | 基本的なコンピューターの知識、 HTML 、 CSS 、 JavaScript に対する基本的な理解、 [前回までの記事](/ja/docs/Learn/Accessibility)に対する理解 |
| --------- | ------------------------------------------------------------------------------------------------------------------------------------------ |
| 学習目標: | WAI-ARIA、および、アクセシビリティを向上させるために必要に応じて有用な追加の意味論を提供する方法について知識を得ること                     |

## WAI-ARIA って何？

まずは、WAI-ARIA とは何か、そして何ができるのかという点から始めましょう。

### 全く新しい問題

ウェブアプリがより複雑で動的なものになると、新しいアクセシビリティの機能と問題が明らかになってきます。

例えば、 HTML5 は普遍的なページの機能を定義するためにいくつもの意味論的要素を取り入れました（{{htmlelement("nav")}} 、 {{htmlelement("footer")}} 等）。 これらが利用可能になる以前は、開発者は `<div class="nav">` のように単に {{htmlelement("div")}} を ID や class と共に使っていましたが、メインナビゲーションのようなページ内の機能をプログラムで識別する簡単な方法が無いために問題がありました。

初期の解決方法は、ナビゲーションへとリンクさせるため、次のようにページ上部に 1 つ以上の隠しリンク（もしくは他の何か）を追加することでした。

```html
<a href="#hidden" class="hidden">Skip to navigation</a>
```

しかしこれは簡潔な方法ではない上に、スクリーンリーダーがページの先頭から読み込む場合にのみ利用できるものでした。

他の例としては、アプリが日付選択のための日付ピッカーや値選択のためのスライダーなどの複雑なコントロールを使いだしたケースがあります。 HTML5 は、そのようなコントロールを表す特別な入力タイプを提供しています。

```html
<input type="date">
<input type="range">
```

これらはブラウザー間で十分にサポートされておらず、またスタイル付けすることが非常に困難であるため、ウェブサイトのデザインに合わせる上で不便となります。 結果として、開発者は多くの場合 JavaScript ライブラリを利用して複数のネストされた {{htmlelement("div")}} でそのようなコントロールを生成したり、クラス名を持った表要素に対して CSS によるスタイル付けと JavaScript によるコントロールを行ったりします。

この場合の問題は、見た目上は動作するものの、スクリーンリーダーはそれらが何なのか全く理解できず、ユーザーには意味を成さないごちゃごちゃの要素であるとしか教えられないという点にあります。

### WAI-ARIA の導入

[WAI-ARIA](https://www.w3.org/TR/wai-aria-1.1/) は W3C によって定められた仕様で、要素に適用できる追加の意味論を提供する一連の HTML 属性を定義しており、それが欠けているどのような場所でもアクセシビリティを向上させます。 この仕様では、主に次の 3 つの機能があります。

- **ロール（Role）** — これは要素が何か、もしくは何をするかを定義します。 多くの場合はいわゆるランドマークロール（landmark role）であり、主に HTML5 構造要素の意味論を複製します。 例えば、 `role="navigation"` ({{htmlelement("nav")}}) や `role="complementary"` ({{htmlelement("aside")}}) などです。 しかし、それ以外にも別のページ構造を定義するものもあります。 例えば、 `role="banner"` 、 `role="search"` 、 `role="tabgroup"` 、 `role="tab"` 等で、 UI に多く見られます。
- **プロパティ（Property）** — これは要素の性質を定義するものであり、追加の意図や意味論を与えるために使用することができます。 例えば、 `aria-required="true"` はフォーム入力が有効となるために値を入力しなければならないことを定義し、 `aria-labelledby="label"` は、要素に ID を追加することで、複数の場合も含めてページ内の他のどの要素からもラベルとして参照することを可能にします。 これは `<label for="input">` ではできません。 別の例として、 `aria-labelledby` を使って主な説明を含む 1 つの {{htmlelement("div")}} が表の複数セルのラベルであると指定することができますし、画像の代替テキストの代わりとして使用することもできます。 これは、 `alt` 属性で繰り返すのではなく、ページの既存の情報を画像の代替テキストとして指定します。 [代替テキスト](/ja/docs/Learn/Accessibility/HTML#Text_alternatives) で例を確認することができます。
- **ステート（State）** — 要素の現在の状態を定義する特別なプロパティです。 例えば、 `aria-disabled="true"` は、フォーム入力が現在 disabled であることをスクリーンリーダーに対して伝えます。 ステートはプロパティとは異なり、プロパティはアプリのライフサイクルを通して変化しないのに対して、ステートは主に JavaScript によって変更されます。

WAI-ARIA 属性の重要な点は、ブラウザーのアクセシビリティ API（スクリーンリーダーはここから情報を取得する）によって提供される情報を除いて、それらはウェブページに何の影響も与えないという点です。 WAI-ARIA はウェブページの構造や DOM に影響を与えませんが、 CSS の要素選択で利用することが可能です。

> **メモ:** WAI-ARIA の仕様で、ARIA ロールの使用方法と追加情報へのリンクを含む便利なリストを確認することができます。 [ロールの定義](https://www.w3.org/TR/wai-aria-1.1/#role_definitions)（英語）を見てください。
>
> この仕様では、プロパティとステートの追加情報を含んだリストも確認することができます。 [ステートとプロパティの定義（すべての aria-\* 属性）](https://www.w3.org/TR/wai-aria-1.1/#state_prop_def)（英語）を見てください。

### WAI-ARIA はどこでサポートされていますか？

この質問に答えるのは簡単ではありません。 次の理由より、どこで、WAI-ARIA のどの機能がサポートされているのかを記述する決定的なリソースを見つけることが難しいためです。

1. WAI-ARIA には大量の機能がある。
2. 検討しなければいけないオペレーティングシステム、ブラウザー、スクリーンリーダーの組み合わせが大量にある。

最後の点は重要です。 そもそもスクリーンリーダーを使用するためには、オペレーティングシステムが所定のアクセシビリティ API を持つブラウザーを動作させる必要があり、それはスクリーンリーダーが動作するために必要となる情報を提供しなければいけません。 ほとんどの人気の OS は、スクリーンリーダーが動作可能である 1 つか 2 つの所定のブラウザーを持っています。 Paciello Group は、この件に関してほぼ最新のデータを投稿しています — [ラフガイド: ブラウザー、オペレーティングシステム、スクリーンリーダーのサポート](https://www.paciellogroup.com/blog/2014/10/rough-guide-browsers-operating-systems-and-screen-reader-support-updated/)（英語）を見てください。

次に、ブラウザーが問題となっている ARIA の機能をサポートしているのか、および API を通してそれらを公開しているのかという点を気にする必要があります。 しかし、スクリーンリーダーがそれらの情報を認識し、ユーザーに有益なやり方で伝えているのかという点もまた気にしなければいけません。

1. ブラウザーのサポート状況は概ね良いです。 本記事の執筆時点で、 [caniuse.com](http://caniuse.com/#feat=wai-aria) は全体のブラウザーの WAI-ARIA のサポート状況は 88% だとしています。
2. スクリーンリーダーの ARIA のサポート状況はそこまでではありませんが、多くの一般的なスクリーンリーダーはそれに近いものになってきています。 Powermapper による [WAI-ARIA のスクリーンリーダーの互換性](http://www.powermapper.com/tests/screen-readers/aria/)（英語）の記事で、サポート状況を確認することができます。

この記事では、全ての WAI-ARIA の機能と詳細についてカバーするわけではありません。 代わりに、あなたが知るべき最も重要な WAI-ARIA の機能についてカバーします。 もしサポートの詳細について何も記述してしない場合は、その機能が十分にサポートされていると想定してください。 この例外がある場合は、明確に記述します。

> **メモ:** JavaScript ライブラリには WAI-ARIA をサポートしているものがありますが、それはライブラリが複雑なフォームコントロールのような UI を生成した場合に、アクセシビリティを向上させるための ARIA 属性を追加することを意味します。 迅速な UI 開発のためにサードパーティーの JavaScript ライブラリを探しているのであれば、その決断を下す際、UI のアクセシビリティのサポートを重要な要素として必ず考慮すべきです。 良い例としては、 jQuery UI（[jQuery UI について: ディープアクセシビリティサポート](https://jqueryui.com/about/#deep-accessibility-support)（英語）を見てください）、 [ExtJS](https://www.sencha.com/products/extjs/) 、 [Dojo/Dijit](https://dojotoolkit.org/reference-guide/1.10/dijit/a11y/statement.html) があります。

### いつ WAI-ARIA を使うべき？

私達は WAI-ARIA が作られるに至ったいくつかの問題について最初の方で話しましたが、基本的には WAI-ARIA が有用となる 4 つの主な場面があります。

1. **道しるべ/ランドマーク（Signpost/Landmark）**: ARIA の `role` 属性の値は、HTML 要素の意味論（例えば {{htmlelement("nav")}}）を再現するランドマークとして振る舞ったり、 `search` 、 `tabgroup` 、 `tab` 、 `listbox` のように HTML5 の意味論の範囲外となる道しるべ（signpost）を異なる機能エリアに提供することができます。
2. **動的なコンテンツの更新**: スクリーンリーダーは、絶えず更新されるコンテンツが得意ではない傾向があります。 ARIA の `aria-live` を使うことで、 [XMLHttpRequest](/ja/docs/Web/API/XMLHttpRequest) や [DOM API](/ja/docs/Web/API/Document_Object_Model) を通してコンテンツが更新された場合に、スクリーンリーダーのユーザーに対してそれを伝えることができます。
3. **キーボードのアクセシビリティの向上**: キーボードのアクセシビリティを最初から持つ HTML 要素がありますが、 JavaScript を使ってそれ以外の要素に同じようなインタラクションをさせる場合、スクリーンリーダーにとって困難が生じます。 こうしなければならない場合、 WAI-ARIA は他の要素に対してフォーカスを得る手段を提供しています（`tabindex` の使用）。
4. **意味論的ではないコントロールのアクセシビリティ**: ネストした一連の `<div>` が CSS/JavaScript と共に複雑な UI 機能を構成していたり、ネイティブのコントロールが JavaScript によって大きく強化/変更されている場合、アクセシビリティの提供は困難になります。 そこに意味論や手がかりが無ければ、スクリーンリーダーのユーザーはその機能が何をするのか判断するのが難しくなるでしょう。 このような状況では、 `button` 、 `listbox` 、または `tabgroup` といったロールの組み合わせ、もしくは `aria-required` や `aria-posinset` などのプロパティにより機能の手がかりを提供することで、 ARIA は足りないものを補うことができます。

一点忘れてはいけないのが、 **WAI-ARIA は必要な場合のみ使用する**という点です。 理想的には、スクリーンリーダーのユーザーの理解に必要となる意味論の提供は、常に [ネイティブの HTML 機能](/ja/docs/Learn/Accessibility/HTML) を使用して行うべきです。 しかし、コードの制御が限定されていたり、 HTML 要素への実装が容易ではない複雑なものを作っているなどの理由で、これが困難となるケースがあります。 そのような場合、 WAI-ARIA はアクセシビリティを向上させる上で価値のあるツールとなります。

もう一度言いますが、必要な時だけ使ってください！

> **メモ:** 実際のさまざまなユーザーによってあなたのサイトをテストすることも忘れないでください — 障害のないユーザー、スクリーンリーダーを使用するユーザー、キーボードナビゲーションを使用するユーザーなどです。 どれだけうまく動作するかという点で、彼らはあなたよりもうまく観察してくれるでしょう。

## 実際的な WAI-ARIA の実装

次のセクションでは、実際の例と共に、より詳細な 4 つのエリアを見てみます。 続行する前に、これから見る例をテストできるように、スクリーンリーダーのテスト環境を用意してください。

詳細は [スクリーンリーダーのテスト](/ja/docs/Learn/Tools_and_testing/Cross_browser_testing/Accessibility#Screenreaders) を確認してください。

### 道しるべ/ランドマーク（Signpost/Landmark）

WAI-ARIA は [`role` 属性](https://www.w3.org/TR/wai-aria-1.1/#role_definitions)（英語）をブラウザーに追加することで、必要に応じてあなたのサイトに付加的な意味論的価値を追加することができます。 これが有用となる最初の領域は、スクリーンリーダーのユーザーが共通のページ要素を見つけることができるようになる情報の提供です。 例を見てみましょう。私達の [website-no-roles](https://github.com/mdn/learning-area/tree/master/accessibility/aria/website-no-roles) の例（[実際の動作](http://mdn.github.io/learning-area/accessibility/aria/website-no-roles/)）は、次の構造を持っています。

```html
<header>
  <h1>...</h1>
  <nav>
    <ul>...</ul>
    <form>
      <!-- search form  -->
    </form>
  </nav>
</header>

<main>
  <article>...</article>
  <aside>...</aside>
</main>

<footer>...</footer>
```

もしあなたがモダンなブラウザーでスクリーンリーダーのテストをした場合、いくつかの有用な情報を手に入れるでしょう。 例えば、 VoiceOver は次の内容を読み上げます:

- `<header>` 要素の上 — "banner, 2 items"（見出しと `<nav>` を含んでいる）
- `<nav>` 要素の上 — "navigation 2 items"（リストとフォームを含む）
- `<main>` 要素の上 — "main 2 items"（記事（article）と余談（aside）を含む）
- `<aside>` 要素の上 — "complementary 2 items"（見出しとリストを含む）
- 検索フォーム入力の上 — "Search query, insertion at beginning of text"
- `<footer>` 要素の上 — "footer 1 item"

VoiceOver の Landmarks メニューを見ると（VoiceOver キー + U でアクセスし、矢印キーでメニューを選択する）、多くの要素が素早くアクセスできるように綺麗に並んでいることが確認できます。

![](landmarks-list.png)

しかし、これは改善することができます。 検索フォームはユーザーが見つけたいと考える重要なランドマークですが、ここでは Landmarks メニューの中に列挙されておらず、検索入力`（<input type="search">`）であるということ以上に目立つランドマークとしても扱われていません。 加えて、いくつかの古いブラウザー（特に IE8）は HTML5 要素の意味論を認識しません。

ARIA の機能を使用してこれを改善しましょう。 まず、 HTML に対していくつかの `role` 属性を追加します。 私達のオリジナルファイルをコピーするか（[index.html](https://github.com/mdn/learning-area/blob/master/accessibility/aria/website-no-roles/index.html) と [style.css](https://github.com/mdn/learning-area/blob/master/accessibility/aria/website-no-roles/style.css) を参照）、 [website-aria-roles](https://github.com/mdn/learning-area/tree/master/accessibility/aria/website-aria-roles) の例（[実際の動作](http://mdn.github.io/learning-area/accessibility/aria/website-aria-roles/)）へ移動すると、次の構造を確認できます。

```html
<header>
  <h1>...</h1>
  <nav role="navigation">
    <ul>...</ul>
    <form role="search">
      <!-- search form  -->
    </form>
  </nav>
</header>

<main>
  <article role="article">...</article>
  <aside role="complementary">...</aside>
</main>

<footer>...</footer>
```

この例では、ボーナス機能も提供しています — {{htmlelement("input")}} は [`aria-label`](https://www.w3.org/TR/wai-aria-1.1/#aria-label) 属性が設定されていますが、これは {{htmlelement("label")}} 要素が含まれていない場合でもスクリーンリーダーによって読み上げられる説明ラベルを設定します。 こういうケースでは、この機能はとても便利です — このような検索フォームはよくあるものであり、簡単に識別できるので、見えるラベルを設定するとデザインを台無しにしてしまうのです。

```html
<input type="search" name="q" placeholder="Search query" aria-label="Search through site content">
```

さて、この例を VoiceOver で見た時、次の改善を確認することができます。

- ページをブラウジングした時と、 Landmarks メニューで見た時の両方において、検索フォームが分離したアイテムとして認識される。
- フォーム入力がハイライトされた時、 `aria-label` に含まれているテキストが読み上げられる。

さらに、このサイトは IE8 のような古いブラウザーを使用しているユーザーにとってもアクセス可能となる可能性が高いので、そのために ARIA ロールを含める価値もあります。 そして、もしあなたのサイトが何らかの理由により `<div>` のみで構成されているなら、必要な意味論を提供するために確実に ARIA ロールを含めるべきです！

改善された検索フォームは、 HTML5 で利用できる意味論以上に ARIA が可能とすることを見せてくれました。 あなたは以下の記事、特に [意味論的でないコントロールのアクセシビリティ](#accessibility_of_non-semantic_controls) のセクションで、より多くの意味論や ARIA のプロパティ/属性が持つ力を見ることがでしょう。 まずは、 ARIA が動的コンテンツの更新をどのように助けるかを見てみましょう。

### 動的なコンテンツの更新

DOM に読み込まれたコンテンツ（本文の内容や、画像の代替テキストなど）はスクリーンリーダーを用いて容易にアクセスできます。 従って、テキストコンテンツで作られた伝統的で静的なウェブサイトを、視覚的ハンディキャップを持つ人々にとってアクセス可能にすることは容易です。

問題はモダンなウェブアプリが静的なテキストだけを使うことは少ないという点です。 それらは動的に更新されるコンテンツ、すなわち、[XMLHttpRequest](/ja/docs/Web/API/XMLHttpRequest)、[Fetch](/ja/docs/Web/API/Fetch_API)、[DOM API](/ja/docs/Web/API/Document_Object_Model) などの機構を通してページ全体をリロードすることなく更新を行うコンテンツで構成されることが多いです。 このような箇所はしばしば**ライブリージョン（live region）**と呼ばれます。

簡単な例を見てみましょう。 [aria-no-live.html](https://github.com/mdn/learning-area/blob/master/accessibility/aria/aria-no-live.html) をご覧ください（もしくは [動作版をご覧ください](http://mdn.github.io/learning-area/accessibility/aria/aria-no-live.html)）。 この例では、ランダムに引用文を表示する 1 つの箱があります。

```html
<section>
  <h1>Random quote</h1>
  <blockquote>
    <p></p>
  </blockquote>
</section>
```

JavaScript が [`XMLHttpRequest`](/ja/docs/Web/API/XMLHttpRequest) を通して JSON ファイルを読み込みます。 この JSON ファイルには、複数のランダムな引用文とその著者が含まれています。 読み込みの完了後に [`setInterval()`](/ja/docs/Web/API/WindowTimers/setInterval) ループを開始し、引用文の表示を 10 秒ごとに新しいものに切り替えます。

```js
var intervalID = window.setInterval(showQuote, 10000);
```

これは正しく動作しますが、アクセシビリティとしてはよくありません。 コンテンツの更新がスクリーンリーダーに検知されないため、ユーザーは何が起こっているかを知ることができないからです。 これはつまらない例ですが、更新され続けるコンテンツを多く含む複雑な UI をあなたが作ることを想像してください（チャットルームや戦略ゲームの UI、動的に更新されるショッピングカートの表示など）。 ユーザーに更新を知らせる何かしらの手段がない限り、それがどんなに実用的なアプリであっても使いこなすことはできないでしょう。

幸いなことに WAI-ARIA はそのような通知を行う便利な機構を提供しています。 それが [`aria-live`](https://www.w3.org/TR/wai-aria-1.1/#aria-live) プロパティです。 このプロパティを要素に適用すると、スクリーンリーダーが更新されたコンテンツを読み上げてくれるようになります。 どのような緊急性をもってコンテンツを読み上げてくれるかは、次のように属性値によって変わります。

- `off:` デフォルト値。更新は通知されない (should not)。
- `polite`: 更新はユーザが暇になったときのみ通知される (should)。
- `assertive`: 更新は可能な限り早くユーザに通知される (should)。

[aria-no-live.html](https://github.com/mdn/learning-area/blob/master/accessibility/aria/aria-no-live.html) と [quotes.json](https://github.com/mdn/learning-area/blob/master/accessibility/aria/quotes.json) のコピーを作成し、`<section>` タグの内容を次のように更新してください。

```html
<section aria-live="assertive">
```

これにより、コンテンツの更新があった際にスクリーンリーダーがその内容を読み上げてくれるようになります。

> **メモ:** `file://` URL をもつページから `XMLHttpRequest` を呼び出そうとするとほとんどのブラウザーはセキュリティ例外を投げます。 例えば、（ダブルクリックなどにより）ファイルを直接ブラウザーで読み込んだ場合に `file://` URL で開かれます。 動作させるためには、 ウェブサーバー（[GitHub を利用](/ja/docs/Learn/Common_questions/Using_Github_pages)するなど）やローカルウェブサーバー（[Python の SimpleHTTPServer](http://www.pythonforbeginners.com/modules-in-python/how-to-use-simplehttpserver/)（英語）など）にファイルをアップロードする必要があります。

加えて、考慮すべきことがあります。 テキストの更新された部分だけを読み上げるべきかどうかです。 常に見出し全体を読み上げる方が、何を読み上げられているかをユーザーが認識できるという点で望ましいかもしれません。 その対象に [`aria-atomic`](https://www.w3.org/TR/wai-aria-1.1/#aria-atomic) プロパティを追加することで、このような動作を得ることができます。 手元の `<section>` タグを再度更新して、次のようにしてください。

```html
<section aria-live="assertive" aria-atomic="true">
```

この `aria-atomic="true"` 属性が、更新された一部分だけではなく、要素全体のコンテンツを 1 つのまとまりとして読み上げるようスクリーンリーダーに伝えます。

> **メモ:** 完成した例は [aria-live.html](https://github.com/mdn/learning-area/blob/master/accessibility/aria/aria-live.html) をご覧ください（もしくは[動作版をご覧ください](http://mdn.github.io/learning-area/accessibility/aria/aria-live.html)）。

> **メモ:** [`aria-relevant`](https://www.w3.org/TR/wai-aria-1.1/#aria-relevant) プロパティはライブリージョンが更新された際に何が読み上げられるかを制御するのに非常に役に立ちます。 例えば、追加や削除をされた内容だけを読み上げさせることもできます。

### キーボードでのアクセシビリティの拡張

このモジュールの他の箇所でも何度か言及したように、アクセシビリティという観点での HTML がもつ重要な能力の 1 つが、キーボードでのアクセシビリティが組み込まれていることです。 キーボードから、ボタンやフォームコントロール、リンクなどの機能にアクセスできます。 一般的に、タブキーでコントロール間を移動したり、エンター/リターンキーでコントロールの選択や活性化をしたり、必要に応じたその他の制御（例えば、上下矢印キーでの `<select>` ボックス内のオプション間の移動）ができます。

しかし、時には（ボタンや他のタイプのコントロールとして）意味論的でない要素や正しい用途ではないフォーカス可能な要素を利用するコードを書かざるをえないこともあるでしょう。 あなたが引き継いだ作りの悪いコードを修正したり、そのようなコードを必要とする複雑なウィジェットを作ったりする場合があるかもしれません。

フォーカスできないコードをフォーカス可能にするために、WAI-ARIA では `tabindex` 属性を拡張して次のようにいくつかの値を加えています。

- `tabindex="0"` — 上で示したように、この値は通常タブキーでの移動対象とならない要素をタブ移動可能にします。 この値は `tabindex` の値の中で最も便利なものです。
- `tabindex="-1"` — この値は通常タブキーでの移動対象とならない要素がプログラム的にフォーカスを受け付けられるようにします。 例えば、JavaScript を利用したりリンクのターゲットとしてフォーカスするケースです。

より詳細な議論や典型的な実装例については、HTML のアクセシビリティに関する記事 — [キーボード・アクセシビリティを呼び戻すように盛り込む](/ja/docs/Learn/Accessibility/HTML#Building_keyboard_accessibility_back_in) をご覧ください。

### 意味論的でないコントロールのアクセシビリティ

このセクションの内容は前セクションの続きです。 多くの入れ子になった `<div>` 要素と CSS/JavaScript を利用して複雑な UI 機能を構築した場合、また、JavaScript で本来のコントロールの機能を拡張/改変した場合を考えてみましょう。 そのようなときには、キーボードでのアクセシビリティが損なわれるだけでなく、スクリーンリーダーのユーザーが各機能のふるまいを理解することは何らかの意味論や手がかりがない限り困難となってしまう。 そのような状況においても、ARIA はそこにあるべき意味論を補足する手助けができます。

#### フォーム検査とエラー警告

まず、CSS と JavaScript のアクセシビリティ の記事で最初に見たフォームの例を再検討しましょう（完全なまとめを再び見るには、[ひかえめに保つこと](/ja/docs/Learn/Accessibility/CSS_and_JavaScript#Keeping_it_unobtrusive) をお読みください）。 フォームを送信しようとした際に検査エラーがあると現れるエラーメッセージ・ボックスにいくつかの ARIA 属性を含めたことを、そのセクションの末尾で示しておきました。

```html
<div class="errors" role="alert" aria-relevant="all">
  <ul>
  </ul>
</div>
```

- [`role="alert"`](https://www.w3.org/TR/wai-aria-1.1/#alert) は、適用先の要素を自動的にライブリージョンにします。 すると、その要素に対する変更は読み上げられます。 また、[`role="alert"`](https://www.w3.org/TR/wai-aria-1.1/#alert) は、その要素が警告メッセージ（重要であり、時間 / コンテキストの影響を受ける情報）なのだ、と意味論的に特定しています。 かつ、ユーザーに警告を伝える、より優れていてよりアクセス可能な方法も、表現しています（[`alert()`](/ja/docs/Web/API/Window/alert) の呼び出しのようなモーダル・ダイアログには、いくつものアクセシビリティの問題があります。 WebAIM による [ポップアップ・ウィンドウ](http://webaim.org/techniques/javascript/other#popups)（英語）を参照）。
- [`aria-relevant`](https://www.w3.org/TR/wai-aria-1.1/#aria-relevant) の `all` という値は、エラー・リストに対して何らかの変更がなされた際には（つまり、エラーが追加または削除された際には）エラー・リストの中身を読み上げるよう、スクリーンリーダーに命令するものです。 これは有用です。 なぜなら、ユーザーは、リストに何が追加され、リストから何が削除されたのかを知りたいだけでなく、何のエラーが残っているのかを知りたいでしょうからね。

ARIA を使用して、更に先へ踏み込むこともできるでしょうし、なんらかの検査の手助けを更に提供することもできるでしょう。 そもそもフィールドが必須かどうかを示すことや、年齢がどの範囲にあるべきかを示すこと、などはいかがでしょうか？

1. いまの時点で、[form-validation.html](https://github.com/mdn/learning-area/blob/master/accessibility/css/form-validation.html) と [validation.js](https://github.com/mdn/learning-area/blob/master/accessibility/css/validation.js) のファイルのコピーをとり、それをローカル・ディレクトリーに保存してください。
2. 両ファイルをテキストエディタで開き、コードがどのように動くのかを見てください。
3. まず始めに、`<form>` 開始タグのすぐ上に次のような段落を加えるとともに、フォームの `<label>` には、両方ともアスタリスクの印をつけてください。 これは、晴眼者ユーザー用に必須フィールドに印をつける通常の方法です。

    ```html
    <p>Fields marked with an asterisk (*) are required.</p>
    訳: <p>アスタリスク（*）が付いているフィールドは必須です。</p>
    ```

4. これは視覚的に意味をなしますが、スクリーンリーダーのユーザーにとっては、理解するのがそれほど容易ではありません。 さいわい、WAI-ARIA には、フォーム入力欄を埋める必要があることをユーザーに伝えるべきだとスクリーンリーダーにヒントを与えるための、[`aria-required`](https://www.w3.org/TR/wai-aria-1.1/#aria-required) 属性があります。 `<input>` 要素を次のように更新してください。

    ```html
    <input type="text" name="name" id="name" aria-required="true">

    <input type="number" name="age" id="age" aria-required="true">
    ```

5. この例をここで保存してスクリーンリーダーでテストしてみれば、「Enter your name star, required, edit text（名前を入れてください　星、必須、テキストを編集）」のようなものを聞くことになるはずです。
6. 年齢の値がどうあるべきかについて、スクリーンリーダーのユーザーと晴眼者のユーザーに知らせるのも、有用かもしれません。 これはツールチップとして提示されることがよくあり、あるいは、フォームのフィールド内部のプレースホルダーとして提示されることも、多分あります。 最小値と最大値を指定するための [`aria-valuemin`](https://www.w3.org/TR/wai-aria-1.1/#aria-valuemin) プロパティと [`aria-valuemax`](https://www.w3.org/TR/wai-aria-1.1/#aria-valuemax) プロパティを、WAI-ARIA は確かに含んではいますが、これらのプロパティは、今のところそれほどちゃんとサポートされてはいないようです。 よりちゃんとサポートされている機能は、HTML5 の `placeholder` 属性です。 これは、何の値も入力されていないときに入力欄の中に表示されるメッセージを含むことができ、多くのスクリーンリーダーにより読み上げられます。 数値入力欄を次のように更新してください。

    ```html
    <input type="number" name="age" id="age" placeholder="Enter 1 to 150" aria-required="true">
    ```

> **メモ:** この完成した例を、[form-validation-updated.html](http://mdn.github.io/learning-area/accessibility/aria/form-validation-updated.html) においてライブ版で見られます。

また、古典的な {{htmlelement("label")}} 要素以上の、ある種の先進的なフォームのラベルづけ技法も、WAI-ARIA によって可能になります。 晴眼者のユーザーに対してラベルを可視にしたくない箇所にラベルを設けるために [`aria-label`](https://www.w3.org/TR/wai-aria-1.1/#aria-label) プロパティを使うことについては、すでに述べました（上記の [道しるべ/ランドマーク（Signpost/Landmark）](#signpostslandmarks) のセクションを参照）。 別のプロパティを使う別のラベルづけ技法も、いくつかあります。 例えば、非 `<label>` 要素をラベルとして指定したいとき、または、同じラベルで複数のフォーム入力欄にラベルづけをしたいときに [`aria-labelledby`](https://www.w3.org/TR/wai-aria-1.1/#aria-labelledby) を使うとか、別の情報をフォーム入力欄に関連づけてその情報も同様に読み上げさせたいときに [`aria-describedby`](https://www.w3.org/TR/wai-aria-1.1/#aria-describedby) を使うとかいったものです。 より詳しくは、WebAIM の [高度なフォームのラベル付け](http://webaim.org/techniques/forms/advanced)（英語）の記事を参照してください。

フォーム要素の状態を示すための有用なプロパティやステートは、ほかにもたくさんあります。 例えば、フォーム・フィールドが無効化されていることを示すには、`aria-disabled="true"` が使えます。 多くのブラウザーは、無効化されたフォーム・フィールドを単に飛ばすだけでしょうし、無効化されたフォーム・フィールドは、スクリーンリーダーに読み上げられることすらないでしょう。 しかし、無効化されたフォーム・フィールドが認識される場合もあるでしょう。 ですから、無効化されている入力欄が実際に無効化されているのだ、とスクリーンリーダーに知らせるために、この（`aria-disabled="true"` という）属性を含めておくことは、良い考えです。

もし入力欄の無効化ステートが変化する可能性が高いなら、その変化が起きた時点と、その結果どうなったのかを示すことも、良い考えです。 例えば、[form-validation-checkbox-disabled.html](http://mdn.github.io/learning-area/accessibility/aria/form-validation-checkbox-disabled.html) のデモには、チェックされると他のフォーム入力欄への更なる情報の入力を可能とするようなチェックボックスがあります。 次のように隠しライブリージョンを設定してあります。

```html
<p class="hidden-alert" aria-live="assertive"></p>
```

これは、絶対的位置指定を使って、視界からは隠してあります。 これがチェックされたり、これのチェックが外されたりすると、このチェックボックスのチェックの結果がどうなったのかをスクリーンリーダーのユーザーに伝えるために、`aria-disabled` ステートやいくつかの視覚的表示を更新するだけでなく、この隠しライブリージョン内部のテキストも更新します。

```js
function toggleMusician(bool) {
  var instruItem = formItems[formItems.length-1];
  if(bool) {
    instruItem.input.disabled = false;
    instruItem.label.style.color = '#000';
    instruItem.input.setAttribute('aria-disabled', 'false');
    hiddenAlert.textContent = 'Instruments played field now enabled; use it to tell us what you play.';
  } else {
    instruItem.input.disabled = true;
    instruItem.label.style.color = '#999';
    instruItem.input.setAttribute('aria-disabled', 'true');
    instruItem.input.removeAttribute('aria-label');
    hiddenAlert.textContent = 'Instruments played field now disabled.';
  }
}
```

#### 非意味論的なボタンをボタンとして説明する

この課程の中で既に二、三回、ボタンやリンクやフォーム要素に本来備わったアクセシビリティ（および、ボタンやリンクやフォーム要素の外見を模倣するために他の要素を使うことの背後に隠れた、アクセシビリティの問題）について述べました（HTML アクセシビリティの記事の [UI コントロール](/ja/docs/Learn/Accessibility/HTML#UI_controls) と、上記の [キーボードでのアクセシビリティの拡張](#enhancing_keyboard_accessibility) を参照）。
基本的には、多くの場合、`tabindex` とほんの少しの JavaScript を使えば、それほど問題を生じずにキーボード・アクセシビリティを追加して呼び戻せます。

しかし、スクリーンリーダーについてはどうでしょうか？ スクリーンリーダーはそれでもまだ、そうした要素をボタンとは見なさないことでしょう。 もし [fake-div-buttons.html](http://mdn.github.io/learning-area/tools-testing/cross-browser-testing/accessibility/fake-div-buttons.html) の例をスクリーンリーダーで試してみれば、見せかけのボタンは「Click me!, group（クリックしてください！、グループ）」のような語句を使って報告されるでしょうし、それは明らかに混乱を招くものです。

WAI-ARIA ロールを用いてこれを修正できます。 [fake-div-buttons.html](https://github.com/mdn/learning-area/blob/master/tools-testing/cross-browser-testing/accessibility/fake-div-buttons.html) のローカルコピーを作って、ボタンとしての `<div>` の各々に [`role="button"`](https://www.w3.org/TR/wai-aria-1.1/#button) と追加してください。 例えば次のようにします。

```
<div data-message="This is from the first button" tabindex="0" role="button">Click me!</div>
```

今や、スクリーンリーダーを使ってこれを試してみれば、「Click me!, button（クリックしてください！、ボタン）」のような語句を使ってボタンを報告させることになるでしょう。 ずっと良くなりましたね。

> **メモ:** とはいえ、可能な箇所では正しい意味的要素を使うことの方が常に良いのだ、ということを忘れないようにしてください。 もしボタンを作りたいなら、そして {{htmlelement("button")}} 要素が使えるなら、{{htmlelement("button")}} 要素を使うべきです！

#### 複雑なウィジェットを通じてユーザーを案内する

非意味論的な要素構造を、標準的な HTML で利用可能な UI 機能以上の一般的な UI 機能——例えば、[`combobox`](https://www.w3.org/TR/wai-aria-1.1/#combobox), [`slider`](https://www.w3.org/TR/wai-aria-1.1/#slider), [`tabpanel`](https://www.w3.org/TR/wai-aria-1.1/#tabpanel), [`tree`](https://www.w3.org/TR/wai-aria-1.1/#tree) など——として指定できる、大変多くの他の [ロール](https://www.w3.org/TR/wai-aria-1.1/#role_definitions)（英語）があります。 そうしたコントロールをどのようにすればアクセス可能にできるのかについて理解するために、[Deque 大学のコード・ライブラリ](https://dequeuniversity.com/library/)（英語）で多くの有用な事例を見ることができます。

わたしたち自身の事例を検討しましょう。 単純で、絶対的位置指定をした、タブ付きのインターフェイス（CSS と JavaScript のアクセシビリティの記事の、[ものごとを隠す](/ja/docs/Learn/Accessibility/CSS_and_JavaScript#Hiding_things) を参照）へと戻りましょう。 これは、[タブ付きの情報ボックスの例](http://mdn.github.io/learning-area/css/css-layout/practical-positioning-examples/info-box.html)（[ソースコード](https://github.com/mdn/learning-area/blob/master/css/css-layout/practical-positioning-examples/info-box.html) を参照）の中に見つかります。

この例は、このままでもキーボード・アクセシビリティに関しては、うまく機能します。 幸いなことに、異なるタブ同士の間でのタブ移動が可能ですし、タブを選択して当該タブの中身を表示することもできます。 また、次の点でもかなりアクセス可能です。 すなわち、たとえ画面上で何が起きているのかが見えないとしても、コンテンツ全体にわたってスクロールすることはできますし、見出しを使って見通しを得ることもできます。 でも、そのコンテンツが何であるのかは、明らかではありません。 スクリーンリーダーは今のところ、そのコンテンツのことを、リンクのリストと、三つの見出しを備えた何らかのコンテンツである、と報告してきます。 スクリーンリーダーは、コンテンツ間にどういう関係があるのかについては、何も知らせてくれません。 コンテンツの構造に関する更なる手がかりをユーザーに与えることは、常に良いことです。

ものごとを改善するために、わたしたちは、[aria-tabbed-info-box.html](https://github.com/mdn/learning-area/blob/master/accessibility/aria/aria-tabbed-info-box.html) と呼ばれる、本例の新たなバージョンを作成しました（[これがライブ版で動くところも参照](http://mdn.github.io/learning-area/accessibility/aria/aria-tabbed-info-box.html)）。 タブ付きのインターフェイスの構造を次のように更新しておきました。

```html
<ul role="tablist">
  <li class="active" role="tab" aria-selected="true" aria-setsize="3" aria-posinset="1" tabindex="0">Tab 1</li>
  <li role="tab" aria-selected="false" aria-setsize="3" aria-posinset="2" tabindex="0">Tab 2</li>
  <li role="tab" aria-selected="false" aria-setsize="3" aria-posinset="3" tabindex="0">Tab 3</li>
</ul>
<div class="panels">
  <article class="active-panel" role="tabpanel" aria-hidden="false">
    ...
  </article>
  <article role="tabpanel" aria-hidden="true">
    ...
  </article>
  <article role="tabpanel" aria-hidden="true">
    ...
  </article>
</div>
```

> **メモ:** ここでの最も際立った変更点は、この例にもともと存在していたリンクを削除して、単にリスト項目をタブとして使ったことです。 このようにした理由は、スクリーンリーダーのユーザーにとっての物事の紛らわしさを減らせるからであり（これらのリンクは、実際にどこかへ連れて行ってくれるものではなく、ただ見かけを変化させるだけのものなのです）、また、セット機能における setsize/position が、よりうまく機能できるようになるからです。 setsize/position がリンク上に設定されている場合、ブラウザーは、「3 分の 1」「3 分の 2」などではなく、常に「1 分の 1」と報告し続けます。

新たな機能は次の通りです。

- 新たなロール——すなわち [`tablist`](https://www.w3.org/TR/wai-aria-1.1/#tablist), [`tab`](https://www.w3.org/TR/wai-aria-1.1/#tab), [`tabpanel`](https://www.w3.org/TR/wai-aria-1.1/#tabpanel) ——は、タブ付きインターフェイスでの重要な領域——つまり、タブ群のコンテナと、タブ自体と、対応するタブパネル——を識別します。
- [`aria-selected`](https://www.w3.org/TR/wai-aria-1.1/#aria-selected) — 今どのタブが選択されているのかを定めます。 別のタブがユーザーにより選択されると、その別のタブ上のこの属性の値が、JavaScript を介して更新されます。
- [`aria-hidden`](https://www.w3.org/TR/wai-aria-1.1/#aria-hidden) — スクリーンリーダーに読み上げられないように、要素を隠します。 別のタブがユーザーにより選択されると、その別のタブ上のこの属性の値が、JavaScript を介して更新されます。
- `tabindex="0"` — リンクを削除したので、リスト項目にキーボード・フォーカスを与えるためには、リスト項目にこの属性を与える必要があります。
- [`aria-setsize`](https://www.w3.org/TR/wai-aria-1.1/#aria-setsize) — 要素が一連のもののうちの一部なのだということと、その一連のものの中にいくつの項目があるのかということを、スクリーンリーダーに対して指定することが、このプロパティによって可能となります。
- [`aria-posinset`](https://www.w3.org/TR/wai-aria-1.1/#aria-posinset) — 一連のものの中で要素がどの位置にあるのかを指定することが、このプロパティによって可能となります。 このプロパティを `aria-setsize` と一緒に用いると、現在「3 分の 1」の項目にいます、などと知らせるのに十分な情報を、スクリーンリーダーに対して提供してくれます。 多くの場合、ブラウザーは、要素の階層構造からこの情報を推測できるはずですが、`aria-posinset` は、更なる手がかりを与えるのに確かに役立ちます。

わたしたちの検査では、この新たな構造は、物事を全体的に改善するのに確かに役立ちました。 今や、タブはタブとして認識されます（例えば、スクリーンリーダーが「タブ」と話します）し、選択されたタブは、そのタブ名で読み上げられて「選択中」と示されますし、スクリーンリーダーは、どのタブ番号のところに今いるのかということも教えてくれます。 さらに、`aria-hidden` の設定（まさに隠されていないタブのみに、`aria-hidden="false"` と設定されている）のおかげで、隠されていないコンテンツのみが、ナビゲートして下ってゆける唯一のコンテンツとなっており、このことは、選択されたコンテンツを見つけやすくなったことを意味します。

> **メモ:** スクリーンリーダーに読み上げさせたくないと明示的に思うものが何かある場合、スクリーンリーダーに対して、`aria-hidden="true"` 属性を与えることができます。

## まとめ

本記事は、WAI-ARIA で利用可能なすべてのものを取り扱ったとは、到底、言えません。 でも、WAI-ARIA の使い方を理解するのに十分な情報をお伝えしたはずです。 また、これから出会うであろう、WAI-ARIA を必要とするような最もよくあるパターンのうちのいくつかを知るのに十分な情報も、お伝えしたはずです。

## 関連情報

- [ロールの定義](https://www.w3.org/TR/wai-aria-1.1/#role_definitions) — ARIA ロールのリファレンスです。（英語）
- [ステートとプロパティの定義（すべての aria-\* 属性）](https://www.w3.org/TR/wai-aria-1.1/#state_prop_def) — プロパティとステートのリファレンスです。（英語）
- [Deque 大学のコード・ライブラリ](https://dequeuniversity.com/library/) — WAI-ARIA 機能を使ってアクセス可能にしてある複雑な UI コントロールを見せてくれる、実に有用かつ実践的な例からなるライブラリです。（英語）
- [WAI-ARIA のオーサリング・プラクティス](http://w3c.github.io/aria-practices/) — W3C による非常に詳細なデザイン・パターンです。異なる種類の複雑な UI コントロールを、WAI-ARIA 機能を用いてアクセス可能にしつつ、実装する方法を説明しています。（英語）
- [ARIA in HTML](https://www.w3.org/TR/html-aria/) — HTML の部品の各々について、どのアクセシビリティ（ARIA）の意味論がその部品に対してブラウザーにより暗黙裡に設定されるのか、そして、追加の意味論が必要な場合にはどの WAI-ARIA 機能をその部品に設定しうるのか、ということを定義する、W3C の仕様書です。

{{PreviousMenuNext("Learn/Accessibility/CSS_and_JavaScript","Learn/Accessibility/Multimedia", "Learn/Accessibility")}}

## このモジュール内の文書

- [アクセシビリティとは？](/ja/docs/Learn/Accessibility/What_is_accessibility)
- [HTML: アクセシビリティの基礎](/ja/docs/Learn/Accessibility/HTML)
- [CSS と JavaScript のアクセシビリティのベスト・プラクティス](/ja/docs/Learn/Accessibility/CSS_and_JavaScript)
- [WAI-ARIA の基本](/ja/docs/Learn/Accessibility/WAI-ARIA_basics)
- [アクセシブルなマルチメディア](/ja/docs/Learn/Accessibility/Multimedia)
- [モバイルのアクセシビリティ](/ja/docs/Learn/Accessibility/Mobile)
- [評価: アクセシビリティのトラブルシューティング](/ja/docs/Learn/Accessibility/Accessibility_troubleshooting)
