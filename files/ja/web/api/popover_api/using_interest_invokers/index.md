---
title: 関心インボーカーの使用
slug: Web/API/Popover_API/Using_interest_invokers
l10n:
  sourceCommit: 995f8bcede5aa8ca40921b030deef7524ce9e1a3
---

{{DefaultAPISidebar("Popover API")}}

**関心インボーカー**は、ユーザーが要素に対して「関心を示す」操作や「関心を失う」操作（例えば、マウスポインターを当てたり外したりする操作）をした際に、インターフェイスの更新や独自のコードの実行を可能にする仕組みです。最も一般的な用途は、ポップオーバーの表示と非表示です。このガイドでは、関心インボーカーの概念、使用可能な場合、および使用方法について説明します。

## 概念

ポップオーバー API は、関連する制御要素（**インボーカー**）がアクティブ化されたとき、例えばクリックされたときに、ポップオーバーを表示する機能を提供します。この機能は、モーダルや情報パネルなどの UIの要素を表示するのに便利です。
[ポップオーバーを宣言的に生成する](/ja/docs/Web/API/Popover_API/Using#宣言的なポップオーバーの作成)には、
[`popover`](/ja/docs/Web/HTML/Reference/Global_attributes/popover) 属性と、[`popovertarget`](/ja/docs/Web/HTML/Reference/Elements/button#popovertarget) または [`commandfor`](/ja/docs/Web/HTML/Reference/Elements/button#commandfor) のいずれかを組み合わせて使用することで実現できます。

これらのアクティベーションベースのポップオーバーに加え、ユーザーの関心を示す操作である、制御要素にホバーまたはフォーカスした際にポップオーバーを表示する必要があるというニーズが良くあります。例えば、多くのソーシャルサイトやコミュニティサイトでは、ユーザーが個人やグループのプロフィールページへのリンクにカーソルを合わせると、詳細情報を表示するポップオーバーが表示されます。このクイックプレビューにより、ユーザーは完全なページを訪問するかどうかを判断しやすくなります。このようなポップオーバーには「フォロー」や「グループを購読」といったクイックアクションが同時に含まれることもあり、ユーザーは現在のコンテキストを離れることなく操作を実行できます。

関心インボーカーは、JavaScript を必要とせずに、一貫性とアクセシビリティを備えた方法で、関心に基いたポップオーバー動作をブラウザーが指定された方法で提供するようすることができます。ブラウザーは、ユーザーが要素に関心を示したタイミング、つまり動作を措置すべきタイミングを判断します。「関心」を示す動作は通常、ユーザーが要素にホバー、フォーカス、または長押しした際に現れます（「関心」の具体的な定義はブラウザーによって異なることがあります）。一方、「関心を失う」動作は、ユーザーが要素に対して作用するのをやめた時に発生します。

ブラウザーは関心が得られた時や失われた時にもイベントを発生させるため、それに応じて独自のコードを実行できます。さらに、この機能には関心を基に要素をスタイル設定するための CSS プロパティとセレクターが含まれています。

> [!NOTE]
> <kbd>Esc</kbd>キーが利用できる端末では、これを押すとすべての操作が取り消される可能性があり、これにより、操作がわずらわしいものになったり不要になったりした場合の一般的なエスケープ手段が指定されます。

同時に、[ポップオーバー以外の場合](#using_interest_invokers_without_popovers)では、関心インボーカーを使用して独自のコードを実行することもできます。ただし、このガイドでは主にポップオーバーに焦点を当てています。ポップオーバーは関心インボーカーの最も一般的な用途であるからです。

## 関心インボーカーの作成

宣言的に関心インボーカーを作成するにあたり、次の 2 つの要件があります。

- **インボーカー要素**: この要素は、ユーザーが関心を示し、ポップオーバーの表示や非表示などのアクションを起動するために作用する要素です。インボーカー要素には、[`interestfor`](/ja/docs/Web/HTML/Reference/Elements/a#interestfor) 属性が必須であり、対象要素の `id` を値とします。インボーカー要素は、HTML の {{htmlelement("a")}}、{{htmlelement("button")}}、{{htmlelement("area")}}要素、もしくは SVG の [`<a>`](/ja/docs/Web/SVG/Reference/Element/a) 要素がなることができます。

- **対象要素**：これは、関心を得たり失ったりした際に影響を受けたり制御されたりする要素です。対象要素には `id` 属性が必須であり、ほぼあらゆる種類の要素が対象となります。この要素に `popover` 属性を付けると、ポップオーバーに変換されます。

  > [!NOTE]
  > 対象要素は、インボーカー要素の DOM の `interestForElement` プロパティをターゲット要素への参照に設定することで、プログラムから設定することもできます。詳細については、このガイドの後半にある[関心インボーカーのための JavaScript API](#関心インボーカーのための_javascript_api) の節を参照してください。

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
<p><a href="#" interestfor="mypopover">リンク</a>のついたテキスト</p>
<p id="mypopover" popover>簡単な情報の付いた短いプレビュー</p>
```

対象要素に `popover` 属性を設定すると、その要素は（{{cssxref("display", "display: none")}} によって）非表示になり、画面中央に配置されます。呼び出し元要素（リンク）に関心を表示させると、ポップオーバーが現れます。

これは次のよう表示されます。リンクに触れてみてください。

{{embedlivesample("basic-interest-invoker", "100%", "150")}}

リンクにマウスを当てたり、フォーカスしたり、長押ししたりするとポップオーバーが現れ、操作をやめると消える点に注目してください。対照的に、マウスクリックなどでリンクがアクティブ化された場合は、通常のリンクと同様に動作し、ただしこの例ではリンク先は存在しません。

この例では、`popover` 属性の値はポップオーバーの動作に影響しません。ただし、次の節で示すように、インタレストインポーカーのポップオーバーと通常のポップオーバーを組み合わせる場合には重要になります。

## 関心インボーカーとアクションベースのポップオーバーの組み合わせ

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

ボタンに対して関心を示してツールチップを表示させ、ボタンをクリックすると情報ボックスが開くことができます。ここで重要なのは `popover` の値です。ツールチップのポップオーバーは [`popover="hint"`](/ja/docs/Web/API/Popover_API/Using#ポップオーバーの_hint_状態の使用) に設定されているのに対し、情報ボックスは単に `popover` （`popover="auto"` と同等）に設定します。これにより、情報ボックスが示されていても、ツールチップは表示されたままになることができます。両方のポップオーバーが `auto` に設定されている場合、ツールチップと情報ボックスを同時に表示することはできません。UI では、既に開くための UI の一部を非表示にすることなく、複数のツールチップを表示できることが有益です。

## 関心インボーカーのスタイル設定

関心インボーカーで使用されるポップオーバーのスタイル設定では、他のポップオーバーと同様のスタイル設定方法を適用できます（[ポップオーバーのスタイル設定](/ja/docs/Web/API/Popover_API/Using#アンカー位置指定の使用)によるインボーカーに対する相対配置や、[ポップオーバーのアニメーション](/ja/docs/Web/API/Popover_API/Using#ポップオーバーのアニメーション)なども含みます。

つまり、関心インボーカーに特有の CSS 機能がいくつかあります。

- {{cssxref("interest-delay")}} 一括指定プロパティおよび関連する {{cssxref("interest-delay-start")}} および {{cssxref("interest-delay-end")}} の個別指定プロパティ：これらは、ユーザーが関心を得たり失ったりしてから、ブラウザーがその変化に基づいて動作するまでの遅延を追加するために使用できるプロパティです。例えば、ポップオーバーの表示または非表示などが挙げられます。
- {{cssxref(":interest-source")}} および {{cssxref(":interest-target")}} 擬似クラス: これらは、関心が示された場合にのみ、それぞれ関心インボーカーとその関連付けられた対象要素にスタイルを適用するために使用できます。

これらの機能がどのように動作するのかを示す簡単な例を見ていきましょう。

ここでは 2 つのボタンとツールチップを定義しています。ツールチップは、ユーザーがそれぞれのボタンに関心を示したり失ったりしたときに表示されたり非表示になったりします。

```html live-sample___interest-invoker-styling
<p>
  <button interestfor="my-tooltip">ボタン 1</button>
  <button interestfor="my-tooltip">ボタン 2</button>
</p>
<p id="my-tooltip" popover="hint">ホバーのツールチップ</p>
```

CSS では、`interest-delay` を `1s 2s` として `<button>` 要素に設定しており、この設定により、ユーザーが関心を示してツールチップが現れるまで 1 秒待つようになり、興味を失った際にツールチップが消えるまで 2 秒待つようにしています。同時に、`button:interest-source` セレクターを使用して、関心を示した際にボタンの {{cssxref("background-color")}} を `orange` に変更しています。

```css live-sample___interest-invoker-styling
button {
  interest-delay: 1s 2s;
}

button:interest-source {
  background-color: orange;
}
```

次に、`:interest-source` 擬似クラスと {{cssxref(":has()")}} 擬似クラスを組み合わせて、段落内のすべてのボタンに `interest-delay-start: 0s` を適用しますが、段落に関心が示されたボタン（つまり `button:interest-source` に一致するボタン）が含まれている場合にのみ有効です。これは有用な手法です。いずれかのボタンに関心が示された時点でポップオーバーが現れるようにする技術は、ユーザー体験が煩わしくなりますが、ユーザーが特定のボタンに関心を示した後であれば、異なるポップオーバー間をすばやく移動できるのは便利です。

```css live-sample___interest-invoker-styling
p:has(button:interest-source) button {
  interest-delay-start: 0s;
}
```

同時に、ツールチップがボタンの下に現れるよう、 {{cssxref("position-area")}} を `bottom` に設定しています。これは、ポップオーバーとその関心対象のインボーカーを関連付けることで、両者の間に暗黙のアンカー参照が生成されるためできます（詳細は[ポップオーバーのアンカー位置指定](/ja/docs/Web/API/Popover_API/Using#ポップオーバーのアンカー位置指定)を参照）。

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

ボタンに関心 を示して（例えば、カーソルを乗せたりフォーカスを当てたりして）、先に説明した動作を確認してみてください。

## 関心インボーカーのための JavaScript API

関心インボーカーには関連付けられたJavaScript APIがあり、関心インボーカーが対象とする要素を問い合わせたり、関心が示された時や失われた時に独自のコードを実行したりできます。この API の機能は以下の通りです。

- {{domxref("HTMLButtonElement.interestForElement", "interestForElement")}} プロパティ。これは{{domxref("HTMLButtonElement")}}、{{domxref("HTMLAnchorElement")}}、{{domxref("HTMLAreaElement")}}、{{domxref("SVGAElement")}} の各インターフェイスで利用できます。 これは、関心インボーカーの対象要素への参照を返します。これは、対応する HTML または SVG の関心インボーカーの `interestfor` 属性で参照している `id` を持つ要素です。
- {{domxref("HTMLElement.interest_event", "interest")}} および {{domxref("HTMLElement.loseinterest_event", "loseinterest")}} イベント。それぞれ関心インボーカーの対象要素で、関心が示された時と失われた時に発生します。これらのイベントを監視することで、レスポンスとして独自のコードを実行することが可能になります。
- {{domxref("InterestEvent")}} インターフェイスは、`interest` および `loseinterest` イベントのイベントオブジェクトです。このインターフェイスは、関連付けられた関心インボーカー要素への参照を含む `source` プロパティを含みます。

### 関心インボーカーの対応の検出

API の用途の一つは機能検出です。関心インボーカーが対応しているかを確認する最も簡単な方法は、インターフェイス型のいずれかに {{jsxref("Object.hasOwn()")}} メソッドを適用し、`interestForElement` プロパティが利用できる場合を調べることです。

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

次に、そのクラスを CSS で使用し、対応していませんバナーを表示させます。

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

API の機能を実際に示して動作させる基本的な例を見ていきましょう。この例では、3 つのリンクと段落がポップオーバーとして設定されています。

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

次に、ポップオーバーに `interest` と `loseinterest` イベントハンドラーを添付します。リンクのいずれかで関心が示された場合、ポップオーバーのテキストコンテンツを更新し、ポップオーバーを表示させたリンクのテキストコンテンツ（イベントオブジェクトの `source` プロパティ経由で取得）を記載するようにします。関心が失われた場合、`source` 要素のテキストコンテンツにアスタリスクを追加し、その要素に対して関心が表示された回数が確認できるようにします。

```js live-sample___interest-invoker-api
tooltip.addEventListener("interest", (e) => {
  tooltip.textContent = `関心が${e.source.textContent}で示されました`;
});

tooltip.addEventListener("loseinterest", (e) => {
  e.source.textContent += "*";
});
```

これは次のように表示されます。

{{embedlivesample("interest-invoker-api", "100%", "150")}}

## 関心インボーカーを使用してプレビューポップオーバーの作成

前述のように、インタレストインボーカーのとても一般的な使用例は、リンク先に関するプレビュー情報を用いてリンクを段階的に強調して表示することです。これには、プロフィールページへのリンクに表示される人物名、経歴、所在地などの詳細情報や、ホームページへのリンクに指定されたグループへの参加登録といったクイックアクションを含めることができます。これらのプレビューポップオーバーは、ユーザーが文脈を見失うことなく必要な情報を得られるため便利です。

インタレストインボーカーを使用して、プレビューポップオーバーを実装する方法を見ていきましょう。

### HTML

マークアップには、短い段落内に GitHub プロフィールへのリンクと、擬似的な「フォロー」ボタンを備えた制限ユーザープロフィールを含む `<div>` が含まれています。リンクの `interestfor` 属性はユーザープロフィールの `id` を指しています。さらに、ユーザープロフィールには `popover` 属性が設定されており、これによりポップオーバー要素として機能し、デフォルトでは非表示になります。

```html live-sample___link-preview-popover
<p>
  I think
  <a
    href="https://github.com/chrisdavidmills/"
    interestfor="user-info"
    target="_blank">
    @chrisdavidmills
  </a>
  should know about this.
</p>

<div id="user-info" popover="hint">
  <div class="wrapper">
    <img src="chris-mills.jpg" alt="chris mills" />
    <section>
      <p><strong>Chris Mills</strong></p>
      <p>
        Independent tech writer and web technology tinkerer, working on MDN on
        behalf of Google and Mozilla. A11y and open standards advocate. Heavy
        metal drummer. <button>Follow</button>
      </p>
      <p>🌍 Greenfield, UK</p>
    </section>
  </div>
</div>
```

### CSS

リンクに {{cssxref("interest-delay-start")}} の値 `1s` を設定することから始めます（`a[interestfor]` セレクターは、興味インボーカーであるリンクのみを選択するのに便利です）。これにより、プレビューポップオーバーが表示される前にわずかな遅延が作成されます。リンクが密集したページでポップオーバーがすばやく現れる場合、このような場合にこの手法は有用です。

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

次に、関心が表示された際にリンクの右下角に現れるよう、ポップオーバーに `position-area` 値として `bottom right` を設定します。（簡潔化のため、ポップオーバーのその他のスタイル設定はここでは省略しています。）

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

最後の CSS ブロックでは、ポップオーバーの {{cssxref("opacity")}} プロパティをアニメーションさせてて、興味が示されたとき（{{cssxref(":interest-target")}} 擬似クラスに一致した場合）にポップオーバーが滑らかにフェードインするようにします。ポップオーバーは（`display: none` により）非表示状態で開始されるため、正しくアニメーションさせるにはいくつかの追加ルールが必要です。離散アニメーションを有効にするには、[`transition-behavior: allow-discrete`](/ja/docs/Web/CSS/Reference/Properties/transition-behavior#allow-discrete) を {{cssxref("overlay")}} および {{cssxref("display")}} プロパティに設定する必要があります。同時に、ポップオーバーはまだレンダリングされていないため、{{cssxref("@starting-style")}} ブロックを使用して、`interest-target` 状態における初期状態を定義する必要があります。

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

リンクにカーソルを合わせたりフォーカスしたりすると、プレビューのポップオーバーが表示されます。この例では、同時にプログレッシブエンハンスメントにもなっています。非対応ブラウザーでは、リンクは期待通りに動作します。

## ポップオーバーなしの関心インボーカーの使用

ポップオーバーを使用しない関心インボーカーの例を見てみましょう。この例では、スタイルプレビューパネルを生成します。さまざまな配色ボタンをアクティブにして、パネルに異なるスタイルを適用できます。関心インボーカーを使用して操作を段階的に強化しているため、スタイルを選択する前にプレビューできます。ボタンに関心が示されると、その配色がパネルに適用され、関心が失われるとパネルは前回に適用されていたスタイルに戻ります。

### HTML

この HTML は、5 つの `<button>` 要素と、スタイルプレビューパネルを表す {{htmlelement("article")}} 要素が含まれています。各ボタンは同じ `interestfor` 値を持ち、`<article>` の `id` を参照しています。また、それぞれの異なる配色を表す `class` を持っています。なお、`<article>` は `popover` 属性を持っていません（ポップオーバーは、関心インボーカーの使用に必須ではありません）。

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
  <p>これは面白い、でしょう？</p>
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

次に、{{cssxref(":interest-source")}} 擬似クラスを使用して、興味が示されたボタンにスタイルを適用します。これにより、ユーザーは現在どのボタンが注目を集めているかを簡単に確認することができます。

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

このコード部分では、まずスタイルパネルとすべてのボタンの参照を取得します。また `prevStyle` という変数を作成し、`black-white` に設定します。これはパネルに適用される初期配色であり、興味が失われた際にパネルが返すスタイルでもあります。

```js live-sample___non-popover
const stylePanel = document.getElementById("style-panel");
const buttons = document.querySelectorAll("button");

let prevStyle = "black-white";
```

次に、スタイルパネルに `interest` と `loseinterest` のイベントリスナーを設定して、これらのイベントがボタンへの興味が示されたときと失われたときに、それぞれ `sampleStyle()` 関数と `revertStyle()` 関数を呼び出すように設定します。同時に、`buttons` の {{domxref("NodeList")}} をループ処理し、それぞれのボタンに `click` イベントリスナーを追加します。これにより、ボタンが押された際に `setStyle()` 関数が実行されるようにします。

```js live-sample___non-popover
stylePanel.addEventListener("interest", sampleStyle);
stylePanel.addEventListener("loseinterest", revertStyle);
buttons.forEach((button) => button.addEventListener("click", setStyle));
```

最後に、前の関数を定義します。

- `sampleStyle()`: ボタンに対して関心が示された場合、その `class` は `e.source.className` から取得され（`InterestEvent.source` は関心が示されたときの関心インボーカーを参照している）、`e.target.className` を介してスタイルパネルに適用されます。
- `revertStyle()`: 関心がない場合、スタイルパネルは `prevStyle` に格納される前回のスタイルに戻ります。
- `setStyle()`: ボタンがクリックされると、その `className` がスタイルパネルに適用されます。同時に、次にスタイルがプレビューされる時点においてパネルが新しい前回設定されたスタイルに戻る可能を確保するため、`prevStyle` をクリックされたボタンの `className` に更新します。

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

ボタンにカーソルを合わせたりフォーカスを当てたりすると、パネルでそのスタイルをプレビューできます。ボタンをクリックするとスタイルが永続的に適用されます。 なお、関心インボーカーに対応していないブラウザーであっても、「プレビュー」機能は動作しないものの、スタイルの設定自体は動作します。

## 関連情報

- [Interest invoker examples landing page](https://mdn.github.io/dom-examples/interest-invokers/)
- [ポップオーバー API](/ja/docs/Web/API/Popover_API)
