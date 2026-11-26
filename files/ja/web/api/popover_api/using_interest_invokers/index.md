---
title: 関心インボーカーの使用
slug: Web/API/Popover_API/Using_interest_invokers
l10n:
  sourceCommit: 995f8bcede5aa8ca40921b030deef7524ce9e1a3
---

{{DefaultAPISidebar("Popover API")}}

**関心インボーカー**は、ユーザーが要素に対して「関心を示す」操作や「関心を失う」操作（例えば、マウスポインターを当てたり外したりする操作）をした際に、インターフェイスの更新や独自のコードの実行を可能にする仕組みです。最も一般的な用途は、ポップオーバーの表示と非表示です。このガイドでは、関心インボーカーの概念、使用可能な場合、および使用方法について説明します。

## 概念

ポップオーバー API は、関連する制御要素（**インボーカー**）がアクティブ化されたとき、例えばクリックされたときに、ポップオーバーを表示する機能を提供します。この機能は、モーダルや情報パネルなどの UI 要素を表示するのに便利です。
[ポップオーバーを宣言的に作成する](/ja/docs/Web/API/Popover_API/Using#宣言的なポップオーバーの作成)には、[`popover`](/ja/docs/Web/HTML/Reference/Global_attributes/popover) 属性と、[`popovertarget`](/ja/docs/Web/HTML/Reference/Elements/button#popovertarget) または [`commandfor`](/ja/docs/Web/HTML/Reference/Elements/button#commandfor) のいずれかを組み合わせて使用します。

これらのアクティブ化に基づくポップオーバーに加え、制御要素にホバーまたはフォーカスしたときにポップオーバーを表示したいというニーズもよくあります。これらの操作は、ユーザーの関心を示します。
例えば、多くのソーシャルサイトやコミュニティサイトでは、ユーザーが個人やグループのプロフィールページへのリンクにカーソルを合わせると、詳細情報を表示するポップオーバーが表示されます。このクイックプレビューにより、ユーザーはプロフィールページ全体を見に行くかどうかを判断しやすくなります。
このようなポップオーバーには「フォロー」や「グループを購読する」といったクイックアクションが含まれることもあり、ユーザーは現在のコンテキストを離れずに操作できます。

関心インボーカーを使用すると、JavaScript を必要とせずに、関心に基づくポップオーバーの動作を一貫性とアクセシビリティを備えた方法でブラウザーに提供させることができます。
ブラウザーは、ユーザーが要素に関心を示したとき、つまりアクションを実行すべきタイミングを判断します。「関心を示す」操作は通常、ユーザーが要素にホバー、フォーカス、または長押ししたときに発生します（「関心」の具体的な定義はブラウザーによって異なる場合があります）。一方、「関心を失う」操作は、ユーザーが要素との対話をやめたときに発生します。

ブラウザーは関心が示されたときや失われたときにもイベントを発生させるため、それに応じて独自のコードを実行できます。さらに、この機能には関心を基に要素をスタイル設定するための CSS プロパティとセレクターが含まれています。

> [!NOTE]
> <kbd>Esc</kbd> キーを使用できる端末では、このキーを押すと関心がすべて取り消されます。これにより、操作が煩わしい、または望ましくない場合に一般的な中止手段を利用できます。

また、関心インボーカーを使って[ポップオーバー以外の場合](#ポップオーバーなしの関心インボーカーの使用)にも独自のコードを実行できます。ただし、このガイドでは関心インボーカーの最も一般的な用途であるポップオーバーを主に扱います。

## 関心インボーカーの作成

宣言的に関心インボーカーを作成するにあたり、次の 2 つの要件があります。

- **インボーカー要素**: ユーザーが関心を示すために操作する要素で、ポップオーバーの表示や非表示などのアクションを起動します。インボーカー要素には [`interestfor`](/ja/docs/Web/HTML/Reference/Elements/a#interestfor) 属性が必要で、その値には対象要素の `id` を指定します。インボーカー要素には、HTML の {{htmlelement("a")}}、{{htmlelement("button")}}、{{htmlelement("area")}} 要素、または SVG の [`<a>`](/ja/docs/Web/SVG/Reference/Element/a) 要素を使用できます。

- **対象要素**：関心が示されたり失われたりしたときに影響を受ける、または制御される要素です。対象要素には `id` 属性が必要で、ほぼあらゆる種類の要素を指定できます。この要素に `popover` 属性を付けると、ポップオーバーになります。

  > [!NOTE]
  > インボーカー要素の DOM の `interestForElement` プロパティに対象要素への参照を代入して、対象要素をプログラムから設定することもできます。詳細は、このガイド後半の[関心インボーカーのための JavaScript API](#関心インボーカーのための_javascript_api) を参照してください。

単純な例を見ていきましょう。ここでは、**インボーカー要素**がリンクであり、**対象要素**は `popover` 関連付けを付けている段落です。

```css hidden live-sample___basic-interest-invoker live-sample___interest-invoker-popover-interaction live-sample___interest-invoker-styling live-sample___interest-invoker-api live-sample___non-popover live-sample___link-preview-popover
.no-interest-invokers body::before {
  content: "このブラウザーは関心インボーカーに対応していません。";
  background-color: wheat;
  display: block;
  padding: 10px 0;
  width: 100%;
  text-align: center;
}
```

```js hidden live-sample___basic-interest-invoker live-sample___interest-invoker-popover-interaction live-sample___interest-invoker-styling live-sample___interest-invoker-api live-sample___non-popover live-sample___link-preview-popover
const supported = Object.hasOwn(
  HTMLButtonElement.prototype,
  "interestForElement",
);
if (!supported) {
  document.querySelector("html").classList.add("no-interest-invokers");
}
```

```html live-sample___basic-interest-invoker
<p><a href="#" interestfor="mypopover">リンク</a>を含むテキスト</p>
<p id="mypopover" popover>簡単な情報を含む短いプレビュー</p>
```

対象要素に `popover` 属性を設定すると、その要素は（{{cssxref("display", "display: none")}} によって）非表示になり、画面中央に配置されます。インボーカー要素（リンク）に関心を示すと、ポップオーバーが現れます。

次のように表示されます。リンクを操作してみてください。

{{embedlivesample("basic-interest-invoker", "100%", "150")}}

リンクにマウスを当てたり、フォーカスしたり、長押ししたりするとポップオーバーが現れ、操作をやめると消える点に注目してください。一方、マウスクリックなどでリンクをアクティブ化した場合は通常のリンクと同様に動作しますが、この例ではリンク先がありません。

この例では、`popover` 属性の値はポップオーバーの動作に影響しません。ただし、次の節で示すように、関心インボーカーのポップオーバーと通常のポップオーバーを組み合わせる場合には重要になります。

## 関心インボーカーとアクティブ化に基づくポップオーバーの組み合わせ

同じ制御要素上で、関心インボーカーと通常のポップオーバーを組み合わせることができます。次の例では、{{htmlelement("button")}} 要素が `interestfor` 属性を使用して関心インボーカーとして設定されています。これは、ユーザーがそれに関心を示したときにツールチップを表示するという意味です。ボタンがクリックされると、`commandfor` 属性で参照される別のポップオーバーが表示または非表示になります。[`command`](/ja/docs/Web/HTML/Reference/Elements/button#command) 属性は `toggle-popover` に設定されており、ボタンを複数回押すことでポップオーバーの表示状態と非表示状態を切り替えることができるようになっています。

```css hidden live-sample___interest-invoker-popover-interaction
#my-tooltip {
  position-area: right;
}

#my-infobox {
  position-area: bottom;
}
```

```html live-sample___interest-invoker-popover-interaction
<p>
  コンテンツに含まれる
  <button
    interestfor="my-tooltip"
    commandfor="my-infobox"
    command="toggle-popover">
    ボタン
  </button>
</p>
<p id="my-tooltip" popover="hint">ホバー時のツールチップ</p>
<p id="my-infobox" popover>
  操作ボタンが含まれている情報ボックス<br />
  <button>ボタン 1</button> <button>ボタン 2</button>
</p>
```

これは次のように表示されます。

{{embedlivesample("interest-invoker-popover-interaction", "100%", "150")}}

ボタンに関心を示すとツールチップが表示され、ボタンをクリックすると情報ボックスが開きます。ここで重要なのは `popover` の値です。ツールチップのポップオーバーは [`popover="hint"`](/ja/docs/Web/API/Popover_API/Using#ポップオーバーの_hint_状態の使用) に設定されているのに対し、情報ボックスは `popover` のみが設定されています（`popover="auto"` と同等です）。これにより、情報ボックスを表示している間もツールチップを表示したままにできます。両方のポップオーバーが `auto` に設定されている場合、ツールチップと情報ボックスを同時に表示することはできません。すでに開いている UI の一部を隠さずに複数のツールチップを表示できることは、UI にとって有用です。

## 関心インボーカーのスタイル設定

関心インボーカーで使用するポップオーバーには、他のポップオーバーと同じスタイル設定方法を適用できます（[ポップオーバーのスタイル設定](/ja/docs/Web/API/Popover_API/Using#ポップオーバーのスタイル設定)や、インボーカーに対する相対配置を行う[ポップオーバーのアンカー位置指定](/ja/docs/Web/API/Popover_API/Using#ポップオーバーのアンカー位置指定)、[ポップオーバーのアニメーション](/ja/docs/Web/API/Popover_API/Using#ポップオーバーのアニメーション)など）。

つまり、関心インボーカーに特有の CSS 機能がいくつかあります。

- {{cssxref("interest-delay")}} 一括指定プロパティおよび関連する {{cssxref("interest-delay-start")}} および {{cssxref("interest-delay-end")}} の個別指定プロパティ：これらは、ユーザーが関心を得たり失ったりしてから、ブラウザーがその変化に基づいて動作するまでの遅延を追加するために使用できるプロパティです。例えば、ポップオーバーの表示または非表示などが挙げられます。
- {{cssxref(":interest-source")}} および {{cssxref(":interest-target")}} 擬似クラス: これらは、関心が示された場合にのみ、それぞれ関心インボーカーとその関連付けられた対象要素にスタイルを適用するために使用できます。

これらの機能の動作を示す簡単な例を見てみましょう。

ここでは 2 つのボタンとツールチップを定義しています。ツールチップは、ユーザーがそれぞれのボタンに関心を示したり失ったりしたときに表示されたり非表示になったりします。

```html live-sample___interest-invoker-styling
<p>
  <button interestfor="my-tooltip">ボタン 1</button>
  <button interestfor="my-tooltip">ボタン 2</button>
</p>
<p id="my-tooltip" popover="hint">ホバーのツールチップ</p>
```

CSS では、`<button>` 要素の `interest-delay` を `1s 2s` に設定しています。これにより、ユーザーが関心を示してからツールチップが現れるまで 1 秒、関心を失ってからツールチップが消えるまで 2 秒の遅延が生じます。同時に、`button:interest-source` セレクターを使用して、関心が示されたときにボタンの {{cssxref("background-color")}} を `orange` に変更しています。

```css live-sample___interest-invoker-styling
button {
  interest-delay: 1s 2s;
}

button:interest-source {
  background-color: orange;
}
```

次に、`:interest-source` 擬似クラスと {{cssxref(":has()")}} 擬似クラスを組み合わせ、段落内のボタンのいずれかに関心が示されている場合に限り、その段落内のすべてのボタンに `interest-delay-start: 0s` を適用します（つまり、段落に `button:interest-source` に一致するボタンが含まれている場合です）。
これは有用な手法です。どのボタンでも関心を示すとすぐにポップオーバーが現れるようにすると、ユーザー体験が煩わしくなる可能性があります。一方、特定のボタンに関心を示した後であれば、異なるポップオーバー間をすばやく移動できると便利です。

```css live-sample___interest-invoker-styling
p:has(button:interest-source) button {
  interest-delay-start: 0s;
}
```

同時に、ツールチップがボタンの下に現れるよう、{{cssxref("position-area")}} を `bottom` に設定しています。ポップオーバーを関心インボーカーに関連付けると、両者の間に暗黙のアンカー参照が生成されるため、これが可能です（詳しくは[ポップオーバーのアンカー位置指定](/ja/docs/Web/API/Popover_API/Using#ポップオーバーのアンカー位置指定)を参照してください）。

```css live-sample___interest-invoker-styling
#my-tooltip {
  position-area: bottom;
}
```

最後に、`#my-tooltip:interest-target` セレクターを使用して、関心が示されたときにポップオーバーに破線の境界を設定します。

```css live-sample___interest-invoker-styling
#my-tooltip:interest-target {
  border-style: dashed;
}
```

これは次のようにレンダリングされます。

{{embedlivesample("interest-invoker-styling", "100%", "150")}}

ボタンに関心を示して（例えば、カーソルを乗せたりフォーカスを当てたりして）、先に説明した動作を確認してみてください。

## 関心インボーカーのための JavaScript API

関心インボーカーには関連付けられた JavaScript API があり、対象要素を問い合わせたり、関心が示されたときや失われたときに独自のコードを実行したりできます。この API の機能は次のとおりです。

- {{domxref("HTMLButtonElement.interestForElement", "interestForElement")}} プロパティ。これは {{domxref("HTMLButtonElement")}}、{{domxref("HTMLAnchorElement")}}、{{domxref("HTMLAreaElement")}}、{{domxref("SVGAElement")}} の各インターフェイスで利用できます。このプロパティは、関心インボーカーの対象要素への参照を返します。つまり、対応する HTML または SVG の関心インボーカーの `interestfor` 属性で参照されている `id` を持つ要素です。
- {{domxref("HTMLElement.interest_event", "interest")}} および {{domxref("HTMLElement.loseinterest_event", "loseinterest")}} イベント。それぞれ関心インボーカーの対象要素で、関心が示されたときと失われたときに発生します。これらのイベントを監視すると、それに応答して独自のコードを実行できます。
- {{domxref("InterestEvent")}} インターフェイス。`interest` および `loseinterest` イベントのイベントオブジェクトです。このインターフェイスには、関連付けられた関心インボーカー要素への参照を保持する `source` プロパティがあります。

### 関心インボーカーの対応の検出

API の用途の 1 つは機能検出です。関心インボーカーが対応しているかを確認する最も簡単な方法は、インターフェイス型のいずれかに {{jsxref("Object.hasOwn()")}} メソッドを適用し、`interestForElement` プロパティが利用できるかを調べることです。

例を示します。

```js
const supported = Object.hasOwn(
  HTMLButtonElement.prototype,
  "interestForElement",
);
```

このガイドのすべての例では、対応を検出するためにこの手法を使用しています。返値が `false`（機能が対応していないことを示す）場合、{{htmlelement("html")}} 要素にクラスを追加します。

```js
if (!supported) {
  document.querySelector("html").classList.add("no-interest-invokers");
}
```

次に、そのクラスを CSS で使用し、非対応を示すバナーを表示します。

```css
.no-interest-invokers body::before {
  content: "このブラウザーは関心インボーカーに対応していません。";
  background-color: wheat;
  display: block;
  padding: 10px 0;
  width: 100%;
  text-align: center;
}
```

### 関心インボーカー API の実例

API の機能を示す簡単な例を見てみましょう。この例では、3 つのリンクと、ポップオーバーとして設定した段落を用意します。

```html live-sample___interest-invoker-api
<p>
  リンクはこちらです:
  <a href="#">リンク 1</a>
  <a href="#">リンク 2</a>
  <a href="#">リンク 3</a>
</p>
<p id="my-tooltip" popover="hint">ホバー時のツールチップ</p>
```

```css hidden live-sample___interest-invoker-api
html {
  font-family: sans-serif;
}

#my-tooltip {
  position-area: bottom;
}
```

JavaScript では、ポップオーバーと 3 つのリンクへの参照を取得します。その後、リンクをループ処理し、それぞれのリンクの {{domxref("HTMLAnchorElement.interestForElement", "interestForElement")}} プロパティをポップオーバー要素を参照するように設定します。これにより、ポップオーバーと各リンク間の関心インボーカーと対象の関係をプログラムで設定します。

```js live-sample___interest-invoker-api
const tooltip = document.getElementById("my-tooltip");
const links = document.querySelectorAll("a");
links.forEach((link) => (link.interestForElement = tooltip));
```

次に、ポップオーバーに `interest` と `loseinterest` のイベントリスナーを追加します。いずれかのリンクに関心が示されると、イベントオブジェクトの `source` プロパティから、そのポップオーバーを表示したリンクのテキストを取得して、ポップオーバーのテキストコンテンツを更新します。関心が失われると、`source` 要素のテキストコンテンツにアスタリスクを追加します。これにより、その要素に関心が示された回数を確認できます。

```js live-sample___interest-invoker-api
tooltip.addEventListener("interest", (e) => {
  tooltip.textContent = `関心が ${e.source.textContent} で示されました`;
});

tooltip.addEventListener("loseinterest", (e) => {
  e.source.textContent += "*";
});
```

これは次のように表示されます。

{{embedlivesample("interest-invoker-api", "100%", "150")}}

## 関心インボーカーを使用したプレビューポップオーバーの作成

前述のように、関心インボーカーの一般的な用途は、リンク先に関するプレビュー情報を表示してリンクを段階的に機能強化することです。例えば、プロフィールページへのリンクに人物の名前、経歴、所在地などの詳細情報を表示したり、グループのホームページへのリンクにグループへの参加などのクイックアクションを表示したりできます。こうしたプレビューポップオーバーを使うと、ユーザーはページを移動して現在のコンテキストを失うことなく、必要な情報を得られます。

関心インボーカーを使用してプレビューポップオーバーを実装する方法を見てみましょう。

### HTML

マークアップには、短い段落内の GitHub プロフィールへのリンクと、「フォロー」ボタンを備えた簡易ユーザープロフィールを含む `<div>` があります。リンクの `interestfor` 属性は、ユーザープロフィールの `id` を参照しています。また、ユーザープロフィールに `popover` 属性を設定してポップオーバー要素にし、デフォルトで非表示にしています。

```html live-sample___link-preview-popover
<p>
  このことは
  <a
    href="https://github.com/chrisdavidmills/"
    interestfor="user-info"
    target="_blank">
    @chrisdavidmills
  </a>
  さんに知らせたほうがよいと思います。
</p>

<div id="user-info" popover="hint">
  <div class="wrapper">
    <img src="chris-mills.jpg" alt="Chris Mills" />
    <section>
      <p><strong>Chris Mills</strong></p>
      <p>
        Google と Mozilla を代表して MDN
        に携わる独立系の技術ライター兼ウェブ技術愛好家。
        アクセシビリティとオープン標準の提唱者で、ヘヴィメタルのドラマー。
        <button>フォロー</button>
      </p>
      <p>🌍 グリーンフィールド、英国</p>
    </section>
  </div>
</div>
```

### CSS

まず、リンクに {{cssxref("interest-delay-start")}} の値 `1s` を設定します（`a[interestfor]` セレクターを使うと、関心インボーカーであるリンクだけを選択できます）。これにより、プレビューポップオーバーが表示されるまでにわずかな遅延が生じます。リンクが密集したページでポップオーバーがすぐに表示されると煩わしい場合があるため、この手法が役立ちます。

```css hidden live-sample___link-preview-popover
html {
  font-family: sans-serif;
}

* {
  box-sizing: border-box;
}
```

```css live-sample___link-preview-popover
a[interestfor] {
  interest-delay-start: 1s;
}
```

次に、関心が示されたときにリンクの右下に表示されるよう、ポップオーバーの `position-area` を `bottom right` に設定します（簡潔化のため、ポップオーバーのその他のスタイルは省略しています）。

```css live-sample___link-preview-popover
#user-info {
  position-area: bottom right;
}
```

```css hidden live-sample___link-preview-popover
#user-info {
  border: 1px solid lightgray;
  border-radius: 5px;
  padding: 0 10px;
  margin: 5px;
  background-color: white;
  font-size: 0.8rem;
}

#user-info .wrapper {
  display: flex;
  align-items: center;
  gap: 20px;
  width: 480px;
  font-size: 0.8rem;
}

#user-info img {
  margin: 10px 0;
  border: 1px solid lightgray;
  border-radius: 5px;
}
```

最後の CSS ブロックでは、ポップオーバーの {{cssxref("opacity")}} プロパティをアニメーションさせ、関心が示されたとき（{{cssxref(":interest-target")}} 擬似クラスに一致したとき）にポップオーバーが滑らかにフェードインするようにします。ポップオーバーは（`display: none` により）非表示状態で始まるため、正しくアニメーションさせるにはいくつかの追加ルールが必要です。離散アニメーションを有効にするには、[`transition-behavior: allow-discrete`](/ja/docs/Web/CSS/Reference/Properties/transition-behavior#allow-discrete) を {{cssxref("overlay")}} および {{cssxref("display")}} プロパティに設定する必要があります。また、ポップオーバーはまだレンダリングされていないため、{{cssxref("@starting-style")}} ブロックを使用して `interest-target` 状態での初期状態を定義する必要があります。

```css hidden live-sample___link-preview-popover
[popover]:interest-target {
  opacity: 1;
}

[popover] {
  opacity: 0;
  transition:
    opacity 0.7s,
    overlay 0.7s allow-discrete,
    display 0.7s allow-discrete;
}

@starting-style {
  [popover]:interest-target {
    opacity: 0;
  }
}
```

### 結果

これは次のようにレンダリングされます。

{{embedlivesample("link-preview-popover", "100%", "260", , , , , "allow-popups")}}

リンクにカーソルを合わせたりフォーカスしたりすると、プレビューポップオーバーが表示されます。この例はプログレッシブエンハンスメントにもなっています。非対応ブラウザーでも、リンクは期待どおりに動作します。

## ポップオーバーなしの関心インボーカーの使用

ポップオーバーを使用しない関心インボーカーの例を見てみましょう。この例では、スタイルプレビューパネルを生成します。さまざまな配色ボタンをアクティブにして、パネルに異なるスタイルを適用できます。関心インボーカーを使用して操作を段階的に強化しているため、スタイルを選択する前にプレビューできます。ボタンに関心が示されると、その配色がパネルに適用され、関心が失われるとパネルは前回に適用されていたスタイルに戻ります。

### HTML

この HTML には、5 つの `<button>` 要素と、スタイルプレビューパネルを表す {{htmlelement("article")}} 要素が含まれています。各ボタンは同じ `interestfor` 値を持ち、`<article>` の `id` を参照しています。また、それぞれ異なる配色を表す `class` を持っています。なお、`<article>` に `popover` 属性はありません（関心インボーカーを使用するためにポップオーバーは必須ではありません）。

```html live-sample___non-popover
<div>
  <button interestfor="style-panel" class="black-white">白黒</button>
  <button interestfor="style-panel" class="bubblegum">風船ガム</button>
  <button interestfor="style-panel" class="purple-haze">紫の霞</button>
  <button interestfor="style-panel" class="blaze">炎</button>
  <button interestfor="style-panel" class="mint-brown">ミントブラウン</button>
</div>
<article id="style-panel" class="black-white">
  <h2>スタイルプレビューパネル</h2>
  <p>楽しいですよね？</p>
</article>
```

### CSS

まず、`<button>` 要素に適用されるそれぞれの `class` のスタイルを定義します。

```css hidden live-sample___non-popover
html {
  font-family: sans-serif;
}

* {
  box-sizing: border-box;
}

body {
  width: 640px;
  margin: 0 auto;
}

body > div {
  display: flex;
  gap: 5px;
  margin-top: 20px;
}

button {
  flex: 1;
  padding: 5px;
  border-radius: 3px;
  cursor: pointer;
}

#style-panel {
  padding: 20px;
  border-radius: 30px;
  margin-top: 20px;
  border-width: 10px;
  corner-shape: scoop;
}

h2 {
  margin-top: 0;
  text-align: center;
  letter-spacing: 5px;
}

p {
  margin-bottom: 0;
  text-align: center;
  font-weight: bold;
  letter-spacing: 3px;
}
```

```css live-sample___non-popover
.black-white {
  color: black;
  background-color: white;
  border: 2px solid black;
}

.bubblegum {
  color: #fff8f0;
  background-color: #ef476f;
  border: 2px solid #fff8f0;
  box-shadow: 0 0 2px #ef476f;
}

.purple-haze {
  color: #8a1c7c;
  background-color: #f0bcd4;
  border: 2px solid #8a1c7c;
}

.blaze {
  color: #f2e94e;
  background-color: #7e6b8f;
  border: 2px solid #f2e94e;
}

.mint-brown {
  color: #41463d;
  background-color: #1cfeba;
  border: 2px solid #41463d;
}
```

次に、{{cssxref(":interest-source")}} 擬似クラスを使用して、関心が示されているボタンにスタイルを適用します。これにより、ユーザーは現在どのボタンに関心が示されているかを簡単に確認できます。

```css live-sample___non-popover
button:interest-source {
  background-color: black;
  color: white;
  border: 2px solid black;
}
```

最後に、スタイルパネルに {{cssxref("transition")}} を適用します。これにより、要素上で変更される `all` プロパティの値が、`0.7s` にわたって滑らかにアニメーション表示されます。つまり、パネルに適用されるすべての配色の変更がアニメーション表示されるということです。

```css live-sample___non-popover
#style-panel {
  transition: all 0.7s;
}
```

### JavaScript

このコードでは、まずスタイルパネルとすべてのボタンへの参照を取得します。また、`prevStyle` という変数を作成して `black-white` に設定します。これはパネルに適用される初期配色であり、関心が失われたときにパネルが戻るスタイルでもあります。

```js live-sample___non-popover
const stylePanel = document.getElementById("style-panel");
const buttons = document.querySelectorAll("button");

let prevStyle = "black-white";
```

次に、スタイルパネルに `interest` と `loseinterest` のイベントリスナーを設定し、ボタンに関心が示されたときと失われたときに、それぞれ `sampleStyle()` 関数と `revertStyle()` 関数を呼び出します。同時に、`buttons` の {{domxref("NodeList")}} をループ処理して各ボタンに `click` イベントリスナーを追加し、ボタンがアクティブ化されたときに `setStyle()` 関数を実行します。

```js live-sample___non-popover
stylePanel.addEventListener("interest", sampleStyle);
stylePanel.addEventListener("loseinterest", revertStyle);
buttons.forEach((button) => button.addEventListener("click", setStyle));
```

最後に、前の関数を定義します。

- `sampleStyle()`: ボタンに対して関心が示された場合、その `class` は `e.source.className` から取得され（`InterestEvent.source` は関心が示されたときの関心インボーカーを参照している）、`e.target.className` を介してスタイルパネルに適用されます。
- `revertStyle()`: 関心がない場合、スタイルパネルは `prevStyle` に格納される前回のスタイルに戻ります。
- `setStyle()`: ボタンをクリックすると、その `className` がスタイルパネルに適用されます。また、次にスタイルをプレビューした後にパネルを新しい適用済みスタイルに戻せるよう、`prevStyle` をクリックされたボタンの `className` に更新します。

```js live-sample___non-popover
function sampleStyle(e) {
  e.target.className = e.source.className;
}

function revertStyle(e) {
  e.target.className = prevStyle;
}

function setStyle(e) {
  stylePanel.className = e.target.className;
  prevStyle = e.target.className;
}
```

### 結果

これは次のように表示されます。

{{embedlivesample("non-popover", "100%", "260")}}

ボタンにカーソルを合わせたりフォーカスしたりすると、パネルでそのスタイルをプレビューできます。ボタンをクリックするとスタイルが適用されます。関心インボーカーに対応していないブラウザーではプレビュー機能は動作しませんが、スタイル自体は設定できます。

## 関連情報

- [関心インボーカーの例のトップページ](https://mdn.github.io/dom-examples/interest-invokers/)<sup>(英語)</sup>
- [ポップオーバー API](/ja/docs/Web/API/Popover_API)
