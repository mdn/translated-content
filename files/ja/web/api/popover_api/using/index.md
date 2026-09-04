---
title: ポップオーバー API の使用
slug: Web/API/Popover_API/Using
l10n:
  sourceCommit: 0c13af55e869cbc54830fd1a601fd05f60717375
---

{{DefaultAPISidebar("Popover API")}}

**ポップオーバー API** は、他のページコンテンツの上に表示するポップオーバーのコンテンツを表示するための、標準的な、一貫性のある、柔軟な仕組みを開発者に提供します。ポップオーバーのコンテンツは、HTML 属性を用いて宣言的に、または JavaScript を用いて制御することができます。この記事では、この機能のすべてを使用するための詳細なガイドを提供します。

## 宣言的なポップオーバーの作成

最も単純な形では、ポップオーバーのコンテンツを含む HTML 要素に [`popover`](/ja/docs/Web/HTML/Reference/Global_attributes/popover) 属性を追加すれば、ポップオーバーが作成されます。また、ポップオーバーとそのコントロールを関連付けるために `id` が必要です。

```html
<div id="mypopover" popover>ポップオーバーのコンテンツ</div>
```

> [!NOTE]
> 値なしで `popover` 属性を追加すると、 `popover="auto"` を設定するのと同じになります。

この属性を追加すると、{{cssxref("display", "display: none")}} をその要素に設定することで、ページ読み込み時に非表示にすることができます。ポップオーバーの表示・非表示を切り替えるには、1 つ以上の制御ボタン（ポップオーバー**インボーカー**とも呼ばれる）を追加する必要があります。{{htmlelement("button")}}（または {{htmlelement("input")}} の `type="button"`）に [`popovertarget`](/ja/docs/Web/HTML/Reference/Elements/button#popovertarget) 属性を、制御するポップオーバーの ID を値として設定することすることにより、ポップオーバー制御ボタンに設定することができます。

```html
<button popovertarget="mypopover">ポップオーバーを切り替え</button>
<div id="mypopover" popover>ポップオーバーのコンテンツ</div>
```

既定では、ボタンはトグルボタンになっています。繰り返し押すと、ポップオーバーの表示と非表示が切り替わります。

この動作を変更したい場合は、 [`popovertargetaction`](/ja/docs/Web/HTML/Reference/Elements/button#popovertargetaction) 属性を使用します - これは `"hide"`、`"show"`、`"toggle"` の何れかの値を取ります。例えば、表示ボタンと非表示ボタンを別個に作成するには、次のようにします。

```html
<button popovertarget="mypopover" popovertargetaction="show">
  ポップオーバーを表示
</button>
<button popovertarget="mypopover" popovertargetaction="hide">
  ポップオーバーを非表示
</button>
<div id="mypopover" popover>ポップオーバーのコンテンツ</div>
```

[基本的な宣言的ポップオーバーの例](https://mdn.github.io/dom-examples/popover-api/basic-declarative/)（[ソース](https://github.com/mdn/dom-examples/tree/main/popover-api/basic-declarative)）で、上記のコード片がどのように見えるかを確認できます。

> [!NOTE]
> `popovertargetaction` 属性が省略されると、制御ボタンで実行される既定のアクションは `"toggle"` になります。

ポップオーバーが表示されると、`display: none`が削除されて{{glossary("top layer", "最上位レイヤー")}}に配置され、他のすべてのページのコンテンツの上に置かれるようになります。

### `command` と `commandfor`

[`commandfor`](/ja/docs/Web/HTML/Reference/Elements/button#commandfor) 属性と [`command`](/ja/docs/Web/HTML/Reference/Elements/button#command) 属性は、`popovertarget` および `popovertargetaction` ととてもよく似た機能を提供しますが、より一般的な設計となっており、ポップオーバーコマンド以外の機能（独自のコマンドを含む）を提供することを目的としています。

前回のコードスニペットは同様に書き換え可能です。

```html-nolint live-sample___command-commandfor
<button commandfor="mypopover" command="show-popover">ポップオーバーを表示</button>
<button commandfor="mypopover" command="hide-popover">ポップオーバーを非表示</button>
<div id="mypopover" popover>ポップオーバーのコンテンツ</div>
```

{{EmbedLiveSample("command-commandfor", "100%", "100")}}

## 自動状態と「簡単な解除」

上記のように、ポップオーバー要素に `popover` または `popover="auto"` が設定されている場合、その要素は**自動状態** (auto state) であると言います。自動状態について注意すべき重要な動作が 2 つあります。

- ポップオーバーは「簡単に解除する」("light dismissed") ことができます。これは、ポップオーバーの外側をクリックすることによって、ポップオーバーを閉じることができるという意味です。
- ポップオーバーは、 <kbd>Esc</kbd> キーを押すなど、ブラウザー依存の仕組みを使って閉じることもできます。
- 通常、一度に表示できる `auto` ポップオーバーは 1 つだけです。すでに 1 つのポップオーバーが表示されているとき に 2 つ目を表示すると、最初のポップオーバーが閉じてしまいます。このルールの例外は、入れ子のオートポップオーバーがある場合です。詳しくは、[入れ子のポップオーバー](#入れ子のポップオーバー)の節を参照してください。

> [!NOTE]
> `popover="auto"` ポップオーバーは、文書内の他の要素で {{domxref("HTMLDialogElement.showModal()")}} や {{domxref("Element.requestFullscreen()")}} の呼び出しが成功した場合にも閉じます。しかし、これらのメソッドを表示されているポップオーバーに対して呼び出すと失敗することに留意してください。しかし、現在表示されていない `popover` 属性を持つ要素に対してこれらのメソッドを呼び出すことはできます。

自動状態は、一度に単一のポップオーバーだけを示したい場合に有益な機能です。表示したいチュートリアルの UI メッセージが複数あるが、表示が乱雑になって混乱するのを避けたい場合や、新しい状態が前回の状態を上書きするようなステータスメッセージを表示する場合などに利用できます。

上記のような動作は、[複数の自動ポップオーバーの例](https://mdn.github.io/dom-examples/popover-api/multiple-auto/)（[ソース](https://github.com/mdn/dom-examples/tree/main/popover-api/multiple-auto)）で実際に見ることができます。ポップオーバーを表示した後に簡単に解除してみて、同時に両方を表示しようとしたときにどうなるかを見てみましょう。

## ポップオーバーのアクセシビリティ機能

ポップオーバーとその制御元（インボーカー）が `popovertarget` 属性で関連付けられると、API は自動的に環境に対して以下の 2 つの変更を加え、キーボード操作や支援技術 (AT) を利用するユーザーがポップオーバーに作用することができるようにします。

- ポップオーバーが表示されると、キーボードフォーカスナビゲーション順序が更新され、ポップオーバーが次の順序になります。例えば、ボタンを押してポップオーバーを表示させる場合、ポップオーバー内のボタンはタブ順序で次になります（<kbd>Tab</kbd> キーを押すとフォーカスされます）。逆に、キーボード操作（通常は <kbd>Esc</kbd> キー）でポップオーバーを閉じると、フォーカスはインボーカーに戻ります。
- スクリーンリーダーなどの支援技術がインボーカーとポップオーバーの関係を理解することができるようにするため、両者の間に暗黙の [`aria-details`](/ja/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-details) および [`aria-expanded`](/ja/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-expanded) の関係が設定されます。

この方法でポップオーバーとそのコントロール間の関係を設定すると、同時に両者の間に暗黙のアンカー参照も作成されます。詳細は[ポップオーバーのアンカー位置指定](#ポップオーバーのアンカー位置指定)を参照してください。

## ポップオーバーとインボーカーの関係を設定する他の方法

ポップオーバーとインボーカーの関係は、`popovertarget` 属性を使用する以外にも、他の方法で設定することができます。

- {{domxref("HTMLElement.showPopover()")}} または {{domxref("HTMLElement.togglePopover()")}} メソッドの `source` オプションを使用します。この場合、フォーカスナビゲーション順序の変更のみが行われ、暗黙の ARIA 関係は変更されないことに留意してください。これは、`source` オプションが `<button>` 要素だけでなく、あらゆる種類の要素に設定可能であり、その関係が意味をなすとは保証できないためです。
- {{htmlelement("select")}} 要素とそのドロップダウンピッカーの間で、[カスタマイズ可能な select 要素](/ja/docs/Learn_web_development/Extensions/Forms/Customizable_select)の機能に組み込む場合、{{cssxref("appearance")}} プロパティの `base-select` 値を介して行われます。この場合、両者の間に暗黙のポップオーバーとインボーカーの関係が生成されます。

## 手動のポップオーバー状態の使用

自動状態のほかに、**手動状態**があり、これはポップオーバー要素に `popover="manual"` を設定することで設定することができます。

```html
<div id="mypopover" popover="manual">ポップオーバーのコンテンツ</div>
```

この状態では、次のようになります。

- ポップオーバーは「簡単に解除する」ことはできませんが、宣言的な表示/非表示/トグルボタン（先に見たとおり）は引き続き機能します。
- 独立した複数のポップオーバーを同時に表示することができます。

この動作は、[複数の手動ポップオーバーの例](https://mdn.github.io/dom-examples/popover-api/multiple-manual/)（[ソース](https://github.com/mdn/dom-examples/tree/main/popover-api/multiple-manual)）で確認することができます。

## `beforetoggle` および `toggle` イベント

ポップオーバーの表示または非表示に対しては、[`beforetoggle`](/ja/docs/Web/API/HTMLElement/beforetoggle_event) および [`toggle`](/ja/docs/Web/API/HTMLElement/toggle_event) イベントを使用して応答することができます。

- `beforetoggle` は、ポップオーバーが表示または非表示になる直前に発生します。例えば、ポップオーバーの表示または非表示を防止するため（{{domxref("Event.preventDefault()")}} を使用）、ポップオーバーにアニメーションを追加してアニメーションを適用するため、または使用後のポップオーバーの状態をクリーンアップするために使用できます。
- `toggle` は、ポップオー バーが表示または非表示になった直後に発生します。これは通常、ポップオーバーのトグル状態の変化に対する応答として、その他のコードを実行するために使用されます。

これらのイベントはどちらも {{domxref("ToggleEvent")}} イベントオブジェクトを持ちます。このイベントは、デフォルトの {{domxref("Event")}} オブジェクトから継承される機能に加えて、次の機能を備えています。

- {{domxref("ToggleEvent.oldState", "oldState")}} および {{domxref("ToggleEvent.newState", "newState")}} プロパティは、ポップオーバーがトランジションした直前の状態とトランジション先の状態を示します。これにより、ポップオーバーが開いたり閉じたりした際に、特定の処理を実行することができます。
- {{domxref("ToggleEvent.source", "source")}} プロパティには、トグルを起動した HTML ポップオーバー制御要素への参照が含まれます。これにより、どの制御がトグルを起動したかに応じて、トグルイベントへのレスポンスとして異なるコードを実行できます。

典型的な使用例は、次のようになります。

```js
const popover = document.getElementById("mypopover");

popover.addEventListener("toggle", (e) => {
  console.log(e.newState);
});
```

詳細情報と例については、前回の参照リンクを参照してください。

## JavaScript でポップオーバーを表示

JavaScript API を使用してポップオーバーを制御することもできます。

{{domxref("HTMLElement.popover")}} プロパティを使用して、[`popover`](/ja/docs/Web/HTML/Reference/Global_attributes/popover) 属性を取得したり設定したりすることができます。これを使用して JavaScript でポップオーバーを作成することができ、機能検出にも利用できます。例えばこのようになります。

```js
function supportsPopover() {
  return Object.hasOwn(HTMLElement.prototype, "popover");
}
```

同様に、

- {{domxref("HTMLButtonElement.popoverTargetElement")}} と {{domxref("HTMLInputElement.popoverTargetElement")}} は [`popovertarget`](/ja/docs/Web/HTML/Reference/Elements/button#popovertarget) 属性に相当し、ポップオーバーに対する制御ボタンの設定を行うことができますが、プロパティ値としては制御すべきポップオーバーの DOM 要素の参照を取ります。
- {{domxref("HTMLButtonElement.popoverTargetAction")}} と {{domxref("HTMLInputElement.popoverTargetAction")}} は HTML の [`popovertargetaction`](/ja/docs/Web/HTML/Reference/Elements/button#popovertargetaction) グローバル属性に相当し、制御ボタンがもたらすアクションを指定することができるようにします。

この 3 つを組み合わせると、次のようにポップオーバーとその制御ボタンをプログラム的に設定することができます。

```js
const popover = document.getElementById("mypopover");
const toggleBtn = document.getElementById("toggleBtn");

const keyboardHelpPara = document.getElementById("keyboard-help-para");

const popoverSupported = supportsPopover();

if (popoverSupported) {
  popover.popover = "auto";
  toggleBtn.popoverTargetElement = popover;
  toggleBtn.popoverTargetAction = "toggle";
} else {
  toggleBtn.style.display = "none";
}
```

また、表示・非表示を制御するためにいくつかのメソッドがあります。

- {{domxref("HTMLElement.showPopover()")}} でポップオーバーを表示します。
- {{domxref("HTMLElement.hidePopover()")}} でポップオーバーを非表示にします。
- {{domxref("HTMLElement.togglePopover()")}} でポップオーバーをトグル切り替えします。

例えば、ボタンをクリックしたり、キーボードの特定のキーを押したりすることで、ポップオーバーのオン/オフの切り替えを支援する機能を提供したい場合があります。最初のものは宣言的に実現できますが、上に示したように JavaScript を使用して実現することもできます。

2 つ目については、ポップオーバーを開くためのキーと閉じるためのキーの 2 つをプログラムするイベントハンドラーを作成することができます。

```js
document.addEventListener("keydown", (event) => {
  if (event.key === "h") {
    if (popover.matches(":popover-open")) {
      popover.hidePopover();
    }
  }

  if (event.key === "s") {
    if (!popover.matches(":popover-open")) {
      popover.showPopover();
    }
  }
});
```

この例では、{{domxref("Element.matches()")}} を使用して、ポップオーバーが現在表示されているかどうかをプログラムで調べています。{{cssxref(":popover-open")}} 擬似クラスは、現在表示されているポップオーバーだけに一致します。これは、すでに表示されているポップオーバーを表示しようとしたり、すでに非表示になっているポップオーバーを非表示にしようとしたときに発生するエラーを避けるために重要です。

別の方法として、次のように単一のキーでポップオーバーの表示と非表示をプログラムすることができます。

```js
document.addEventListener("keydown", (event) => {
  if (event.key === "h") {
    popover.togglePopover();
  }
});
```

JavaScript のポップオーバーのプロパティ、機能検出、`togglePopover()' メソッドの動作は、[トグルヘルプ UI の例](https://mdn.github.io/dom-examples/popover-api/toggle-help-ui/)（[ソース](https://github.com/mdn/dom-examples/tree/main/popover-api/toggle-help-ui)）をご覧ください。

## 入れ子のポップオーバー

複数のオートポップオーバーを一度に表示しないというルールには、例外があります。互いに入れ子になっている場合です。これらの場合、複数のポップオーバーは、互いの関係から、同時に開くことが許可されます。このパターンは、入れ子式ポップオーバーメニューのような用途に役立ちます。

入れ子のポップオーバーを作成する方法は、3 つあります。

1. DOM での直接の子孫にする

   ```html
   <div popover>
     親
     <div popover>子</div>
   </div>
   ```

2. 要素を呼び出し/制御

   ```html
   <div popover>
     親
     <button popovertarget="foo">こちらをクリック</button>
   </div>

   <div popover id="foo">子</div>
   ```

3. `anchor` 属性による

   ```html
   <div popover id="foo">親</div>

   <div popover anchor="foo">子</div>
   ```

例は、[入れ子メニューの例](https://mdn.github.io/dom-examples/popover-api/nested-popovers/)（[ソース](https://github.com/mdn/dom-examples/tree/main/popover-api/nested-popovers)）を参照してください。マウスやキーボードの操作でサブポップオーバーを適切に表示・非表示を切り替えるため、また、どちらかのオプションが選択されたときに両方のメニューを非表示にするために、いくつかのイベントハンドラーが使用されていることがわかります。SPA や複数ページのウェブサイトでは、新しいコンテンツの読み込みをどのように処理するかによって、これらのうちのいくつかは必要ないかもしれませんが、このデモでは説明のために含めています。

## ポップオーバーの "hint" 状態の使用

作成できるポップオーバーには 3 つ目の種類として、**ヒントポップオーバー**があります。これはポップオーバー要素に `popover="hint"` を設定することで指定します。`hint` ポップオーバーは表示時に `auto` ポップオーバーを閉じませんが、それ以外の `hint` ポップオーバーは閉じます。簡単に閉じるが可能で、閉じるリクエストにも応答します。

これは、例えばツールバーボタンを押すと UI ポップオーバーを表示できるボタンであると同時に、ボタンにポインターを当てた際に UI ポップオーバーを閉じずにツールチップを表示したい場合などに有用です。

`hint` ポップオーバーは、非クリック JavaScript イベント（[`mouseover`](/ja/docs/Web/API/Element/mouseover_event)/[`mouseout`](/ja/docs/Web/API/Element/mouseout_event) や [`focus`](/ja/docs/Web/API/Element/focus_event)/ [`blur`](/ja/docs/Web/API/Element/blur_event) など）が発生すると、要素は表示・非表示されます。ボタンをクリックして `hint` ポップオーバーを開くための JavaScript が実行されると、開いている `auto` ポップオーバーは簡単に解除されるようになります。

以上の動作を正確に再現した例については、[ポップオーバーヒントのデモ](https://mdn.github.io/dom-examples/popover-api/popover-hint/)（[ソース](https://github.com/mdn/dom-examples/tree/main/popover-api/popover-hint)）をご覧ください。このデモではボタンバーを採用しています。ボタンを押すと、`auto` ポップアップサブメニューが表示され、さらに詳細なオプションを選択することが可能になります。ただし、ボタンに当てたまたはフォーカスした際には、各ボタンの機能を示すツールチップ（`hint` ポップオーバー）も同時に表示されます。このツールチップは、現在表示中のサブメニューを非表示にしません。

下記の節では、コードの重要な部分をすべて追ってみましょう。

> [!NOTE]
> `hint` ポップオーバーは、`manual` ポップオーバーと同時に使用できますが、実際にはその必要性はあまりありません。これらは主に `auto` ポップオーバーの制限を回避するために設計されており、この節で詳細に説明するように用途を拡大することができます。
>
> なお、`popover="hint"` は未対応ブラウザーでは `popover="manual"` に代替されます。

> [!NOTE]
> 関連する機能として、**インタレストインボーカー**があります。これは JavaScript を必要とせずに、ホバー/フォーカス時のポップオーバー機能を便利かつ一貫して生成するために使用できます。詳細については、[インタレストインボーカーの使用方法](/ja/docs/Web/API/Popover_API/Using_interest_invokers)をご覧ください。

### `popover="auto"` によるサブメニューの作成

ポップアップサブメニューは、`auto` ポップオーバーを宣言的に使用する形で生成されます。

まず、制御ボタンです。

```html
<section id="button-bar">
  <button popovertarget="submenu-1" popovertargetaction="toggle" id="menu-1">
    メニュー A
  </button>

  <button popovertarget="submenu-2" popovertargetaction="toggle" id="menu-2">
    メニュー B
  </button>

  <button popovertarget="submenu-3" popovertargetaction="toggle" id="menu-3">
    メニュー C
  </button>
</section>
```

そして、ポップオーバー自身です。

```html
<div id="submenu-1" popover="auto">
  <button>選択肢 A</button><br /><button>選択肢 B</button>
</div>
<div id="submenu-2" popover="auto">
  <button>選択肢 A</button><br /><button>選択肢 B</button>
</div>
<div id="submenu-3" popover="auto">
  <button>選択肢 A</button><br /><button>選択肢 B</button>
</div>
```

### `popover="hint"` によるツールチップの作成

サブメニューのポップオーバーは現状でも問題なく動作し、ツールバーボタンを押すと開くためのものとして機能しています。しかし、ボタンにホバー/フォーカスした際に同時にツールチップも表示させるにはどうすればよいでしょうか？まず、HTML 内で `hint` ポップオーバーを使用してツールチップを作成します。

```html
<div id="tooltip-1" class="tooltip" popover="hint">ツールチップ A</div>
<div id="tooltip-2" class="tooltip" popover="hint">ツールチップ B</div>
<div id="tooltip-3" class="tooltip" popover="hint">ツールチップ C</div>
```

> [!NOTE]
> このデモでは[ソースコード](https://github.com/mdn/dom-examples/tree/main/popover-api/popover-hint)において、ツールチップはポップオーバーコントロールボタン内に入れ子になっています。これは、CSS アンカー位置指定に対応していないブラウザーにおいて、より優れた代替手段を提供するからです。つまり、`hint` ポップオーバーは関連付けられたコントロールボタンの隣に表示され、全く異なる場所に表示されることはありません。

表示/非表示を制御するには、JavaScript を使用する必要があります。最初に、`hint` ポップオーバーと制御ボタンを 2 つの別個の {{domxref("NodeList")}} で取得するために、 {{domxref("Document.querySelectorAll()")}} を使用しています。

```js
const tooltips = document.querySelectorAll(".tooltip");
const btns = document.querySelectorAll("#button-bar button");
```

次に、関数 `addEventListeners()` を作成します。これは、4 つのイベントリスナーを（{{domxref("EventTarget.addEventListener()")}} によって）指定された {{htmlelement("button")}} に設定するものです。この `<button>` は `btns` `NodeList` の特定のインデックス値にあるものです。これらの関数は、`tooltips` `NodeList` の同じインデックス値にある `hint` ポップオーバーに対して動作します。これにより、ボタンとツールチップを同期することができるようになり、ボタンが対話された際に正しいツールチップを表示/非表示にできます。

このイベントリスナーは、[`mouseover`](/ja/docs/Web/API/Element/mouseover_event) および [`focus`](/ja/docs/Web/API/Element/focus_event) 時にポップオーバーを[表示](/ja/docs/Web/API/HTMLElement/showPopover)し、 [`mouseout`](/ja/docs/Web/API/Element/mouseout_event) および [`blur`](/ja/docs/Web/API/Element/blur_event) 時にポップオーバーを[非表示](/ja/docs/Web/API/HTMLElement/hidePopover)にします。つまり、ツールチップはマウスとキーボードの両方でアクセス可能であるということです。

```js
function addEventListeners(i) {
  btns[i].addEventListener("mouseover", () => {
    tooltips[i].showPopover({ source: btns[i] });
  });

  btns[i].addEventListener("mouseout", () => {
    tooltips[i].hidePopover();
  });

  btns[i].addEventListener("focus", () => {
    tooltips[i].showPopover({ source: btns[i] });
  });

  btns[i].addEventListener("blur", () => {
    tooltips[i].hidePopover();
  });
}
```

最後に、[`for`](/ja/docs/Web/JavaScript/Reference/Statements/for) ループを使用して、`btns` `NodeList` 内の `<buttons>` を反復処理し、それぞれの `addEventListeners()` 関数を呼び出します。これにより、すべてのボタンに目的のイベントリスナーが設定されます。

```js
for (let i = 0; i < btns.length; i++) {
  addEventListeners(i);
}
```

## ポップオーバーのスタイル設定

この節では、ポップオーバーに関連する CSS の選択と位置指定のテクニックを取り上げます。

### ポップオーバーの選択

単純な属性セレクターで、すべてのポップオーバーの選択が可能です。

```css
[popover] {
  /* ここで宣言 */
}
```

あるいは、属性セレクターに値を指定することで、特定のポップオーバーの種類を指定することが可能です。

```css
[popover="auto"] {
  /* ここで宣言 */
}
```

{{cssxref(":popover-open")}} 擬似クラスを使用して、示しているポップオーバーであるポップオーバーのみを選択できます。

```css
:popover-open {
  /* ここで宣言 */
}
```

### ポップオーバーの背景のスタイル設定

{{cssxref("::backdrop")}} 擬似要素は、{{glossary("top layer", "最上位レイヤー")}}にあるポップオーバー要素のすぐ後ろに配置される全画面要素で、必要に応じてポップオーバーの後ろのページコンテンツに効果を追加することができるようにします。例えば、ユーザーの注意をポップオーバーに集中させるために、ポップオーバーの後ろのコンテンツをぼかしたい場合があります。

```css
::backdrop {
  backdrop-filter: blur(3px);
}
```

これがどのように描画されるかという考えについては、[ポップオーバーの背景をぼかす例](https://mdn.github.io/dom-examples/popover-api/blur-background/)（[ソース](https://github.com/mdn/dom-examples/tree/main/popover-api/blur-background)）を参照してください。

### ポップオーバーの位置指定

記事の冒頭でリンクされている最初のいくつかの例を見ると、ポップオーバーがビューポートの中央に表示され、コンテンツを囲み、黒い境界線があることに気づいたかもしれません。これはデフォルトのスタイルであり、UA スタイルシート内の以下のルールを用いて実現されています。

```css
[popover] {
  position: fixed;
  inset: 0;
  width: fit-content;
  height: fit-content;
  margin: auto;
  border: solid;
  padding: 0.25em;
  overflow: auto;
  color: CanvasText;
  background-color: Canvas;
}
```

独自のサイズを適用し、ポップオーバーを別の位置に配置するには、以上のスタイルを次のように上書きできます。

```css
:popover-open {
  width: 200px;
  height: 100px;
  position: absolute;
  inset: unset;
  bottom: 5px;
  right: 5px;
  margin: 0;
}
```

[ポップオーバーの位置指定の例](https://mdn.github.io/dom-examples/popover-api/popover-positioning/)（[ソース](https://github.com/mdn/dom-examples/tree/main/popover-api/popover-positioning)）で、その独立した例を見ることができます。

### ポップオーバーのアンカー位置指定

ポップオーバー API が提供するもう 1 つの便利な位置指定オプションがあります。ポップオーバーをビューポートや配置された祖先要素ではなく、インボーカーに対して相対的に配置したい場合、ポップオーバーとそのインボーカーが**暗黙のアンカー参照**を持っているという事実を活用できます。

[あらゆる種類のポップオーバーをそのインボーカーに関連付ける](#ポップオーバーとインボーカーの関係を設定する他の方法)と、両者の間に暗黙のアンカー参照が生成されます。これによりインボーカーがポップオーバーの**アンカー要素**となり、[CSS アンカー位置指定](/ja/docs/Web/CSS/Guides/Anchor_positioning)を使用してポップオーバーを相対的に配置できる、ということになります。

ポップオーバーとインボーカーとの関連付けは暗黙的に行われるため、{{cssxref("anchor-name")}} および {{cssxref("position-anchor")}} プロパティを用いた明示的な関連付けは必要ありません。ただし、位置指定に関する CSS の指定は依然として必要です。

例えば、{{glossary("inset properties", "インセットプロパティ")}}に設定された {{cssxref("anchor()")}} 関数の値と、配置プロパティに設定された `anchor-center` の値を組み合わせて使用することができます。

```css
.my-popover {
  margin: 0;
  inset: auto;
  bottom: calc(anchor(top) + 20px);
  justify-self: anchor-center;
}
```

または {{cssxref("position-area")}} プロパティを使用して、

```css
.my-popover {
  margin: 0;
  inset: auto;
  position-area: top;
}
```

{{cssxref("position-area")}} または {{cssxref("anchor()")}} を使用してポップオーバーを位置指定する場合、[ポップオーバーのデフォルトスタイル](https://html.spec.whatwg.org/multipage/rendering.html#flow-content-3:~:text=%5Bpopover%5D%20%7B)が、設定しようとしている位置と競合する可能性があることに注意してください。主な原因は `margin` と `inset` のデフォルトスタイルであるため、以上の例のようにそれらをリセットすることをお勧めします。CSS ワーキンググループは、[この回避策を要求されることを避ける方法を探して](https://github.com/w3c/csswg-drafts/issues/10258)います。

アンカーと位置指定要素の関連付け、および要素をアンカーに対して相対的に位置指定する方法の詳細については、[CSS アンカー位置指定の使用](/ja/docs/Web/CSS/Guides/Anchor_positioning/Using#要素をアンカーに対して相対的に配置)を参照してください。

> [!NOTE]
> 例えば、この暗黙の関連付けを使用した例については、[ポップオーバーヒントデモ](https://mdn.github.io/dom-examples/popover-api/popover-hint/)（[ソース](https://github.com/mdn/dom-examples/tree/main/popover-api/popover-hint)）を参照してください。CSS のコードを確認すると、{{cssxref("anchor-name")}} および {{cssxref("position-anchor")}} プロパティを使用して明示的なアンカー関連付けが行われていないことがわかります。

> [!NOTE]
> ポップオーバーがインボーカー要素にアンカーされるのを防ぐには、暗黙のアンカー参照を削除する必要があります。これを行うには、ポップオーバーの `position-anchor` プロパティを、現在のドキュメント内に存在しないアンカー名（`--not-an-anchor-name` など）に設定します。詳細は[アンカー関連付けの削除](/ja/docs/Web/CSS/Guides/Anchor_positioning/Using#removing_an_anchor_association)も参照してください。

## ポップオーバーのアニメーション

ポップオーバーは{{glossary("top layer", "最上位レイヤー")}}と[アクセシビリティツリー](/ja/docs/Web/Performance/Guides/How_browsers_work#building_the_accessibility_tree)から除去されたり追加されたりするだけでなく、非表示時には `display: none;`、表示時には `display: block;` に設定されます。したがって、ポップオーバーをアニメーションさせるには、 {{cssxref("display")}} プロパティをアニメーション可能にする必要があります。[対応しているブラウザー](/ja/docs/Web/CSS/Reference/Properties/display#ブラウザーの互換性)では、`display` を[離散アニメーション型](/ja/docs/Web/CSS/Guides/Animations/Animatable_properties#離散)の変形でアニメーションさせます。具体的には、ブラウザーはアニメーションの再生時間全体にわたってコンテンツを表示させるように、 `none` と `display` の他の値を切り替えます。例えば、次のようになります。

- `display` を `none` から `block` （または他の表示可能な `display` 値）にアニメーションさせる場合、値はアニメーション時間の `0%` で `block` に切り替わり、ずっと表示されます。
- `display` を `block` （または他の表示可能な `display` 値）から `none` にアニメーションさせる場合、値はアニメーション時間の `100%` で `none` に切り替わり、ずっと表示されます。

> [!NOTE]
> [CSS トランジション](/ja/docs/Web/CSS/Guides/Transitions)を使用してアニメーションを行う場合、上記の動作を有効にするには [`transition-behavior: allow-discrete`](/ja/docs/Web/CSS/Reference/Properties/transition-behavior) を設定する必要があります。 [CSS アニメーション](/ja/docs/Web/CSS/Guides/Animations)でアニメーションさせる場合、既定では上記の動作が利用できます。

### ポップオーバーのトランジション

CSS のトランジションでポップオーバーをアニメーションさせる場合、以下の機能が必要です。

- {{CSSxRef("@starting-style")}} アットルール
  - : ポップオーバーが最初に表示されたときにトランジションさせたい、ポップオーバーに設定するプロパティの開始値のセットを提供します。これは予期しない動作を避けるために必要です。既定では、 CSS のトランジションは可視要素でプロパティがある値から別の値に変更されたときのみ発生します。要素の最初のスタイル更新時や `display` 型が `none` から別の型に変更されたときには発生しません。
- {{CSSxRef("display")}} プロパティ
  - : トランジションのリストに `display` を追加して、ポップオーバーがトランジションの再生時間の間、`display: block` （または他の表示可能な `display` 値）として残り、他のトランジションが確実に表示されるようにします。
- {{CSSxRef("overlay")}} プロパティ
  - : トランジションのリストに `overlay` を記述して、最上位レイヤーからのポップオーバーの除去をトランジションが完全に完了するまで確実に延期し、トランジションが確実に表示されるようにします。
- {{cssxref("transition-behavior")}} プロパティ
  - : `transition-behavior:allow-discrete` を `display` と `overlay` のトランジション（または一括指定の {{cssxref("transition")}}）に設定し、既定ではアニメーション不可能なこれら 2 つのプロパティの離散トランジションを有効にします。

この例がどのように見えるものか、見ていきましょう。

#### HTML

この HTML では、 {{htmlelement("div")}} 要素がポップオーバーになるよう、グローバル属性の [`popover`](/ja/docs/Web/HTML/Reference/Global_attributes/popover) で宣言されており、 {{htmlelement("button")}} 要素をポップオーバーの表示コントロールとして指定されています。

```html-nolint
<button popovertarget="mypopover">ポップオーバーを表示</button>
<div popover="auto" id="mypopover">ポップオーバーです。アニメーションします。</div>
```

#### CSS

トランジションさせたいポップオーバーのプロパティは、 {{cssxref("opacity")}} と {{cssxref("transform")}} の 2 つです。ポップオーバーが水平方向に拡大または縮小しながらフェードインまたはフェードアウトするようにします。これを実現するために、これらのプロパティの開始状態をポップオーバー要素の非表示状態（`[popover]` [属性セレクター](/ja/docs/Web/CSS/Reference/Selectors/Attribute_selectors)で選択）に設定し、終了状態をポップオーバーの表示状態（{{cssxref(":popover-open")}} 擬似クラスで選択）に設定します。また、{{cssxref("transition")}} プロパティを使用して、ポップオーバーが表示されたり非表示になったりするときにアニメーションするプロパティとアニメーションの再生時間を定義します。

```css
html {
  font-family: "Helvetica", "Arial", sans-serif;
}

/* ポップオーバー自体のトランジション */

[popover]:popover-open {
  opacity: 1;
  transform: scaleX(1);
}

[popover] {
  font-size: 1.2rem;
  padding: 10px;

  /* 消滅アニメーションの最終状態 */
  opacity: 0;
  transform: scaleX(0);

  transition:
    opacity 0.7s,
    transform 0.7s,
    overlay 0.7s allow-discrete,
    display 0.7s allow-discrete;
  /* transition: all 0.7s allow-discrete;
  と同等 */
}

/* 詳細度が同じなので、効果を得るには [popover]:popover-open ルールの
後でなければならない。 */
@starting-style {
  [popover]:popover-open {
    opacity: 0;
    transform: scaleX(0);
  }
}

/* ポップオーバーの背景のトランジション */

[popover]::backdrop {
  background-color: transparent;
  transition:
    display 0.7s allow-discrete,
    overlay 0.7s allow-discrete,
    background-color 0.7s;
  /* transition: all 0.7s allow-discrete;
  と同等 */
}

[popover]:popover-open::backdrop {
  background-color: rgb(0 0 0 / 25%);
}

/* 入れ子セレクター (&) は擬似要素を表すことができないので、
この出現スタイルルールは入れ子にできない */

@starting-style {
  [popover]:popover-open::backdrop {
    background-color: transparent;
  }
}
```

前に説明したとおり、次のことを行う必要があります。

- 開始状態の `transition` を `@starting-style` ブロック内に設定します。
- トランジションする要素のリストに `display` を追加し、ポップオーバーの出現・消滅アニメーションを通じて、アニメーションする要素が見える（`display: block` に設定する）ようにしました。これがなければ、終了アニメーションは表示されません。結果的に、ポップオーバーはただ消えてしまいます。
- トランジションする要素のリストに `overlay` を追加し、アニメーションが完了するまで最上位レイヤーからの要素の除去が延期されるようにします。この効果は、このような基本的なアニメーションでは気にならないかもしれませんが、より複雑なケースでは、このプロパティを省略すると、トランジションの完了前に要素がオーバーレイから除去されてしまう可能性があります。
- 上記のトランジションの両方のプロパティに `allow-discrete` を設定し、[離散トランジション](/ja/docs/Web/CSS/Guides/Animations/Animatable_properties#離散)ができるようにします。

また、開くためのポップオーバーの背後に現れる {{cssxref("::backdrop")}} にトランジションを記述子、暗くなるアニメーションを指定していることに注意してください。

#### 結果

このコードは次のように表示されます。

{{ EmbedLiveSample("Transitioning a popover", "100%", "200") }}

> [!NOTE]
> ポップオーバーは表示されるたびに `display: none` から `display: block` に変わるので、項目がトランジションするたびに `@starting-style` スタイルから `[popover]:popover-open` スタイルにトランジションします。ポップオーバーが閉じられたとき、 `[popover]:popover-open` 状態から既定の `[popover]` 状態にトランジションします。
>
> このような場合、出現時と消滅時のスタイル設定を異なる形にすることが可能です。このことの証明については、[開始スタイルを使用する場合のデモ](/ja/docs/Web/CSS/Reference/At-rules/@starting-style#開始スタイルを使用する場合のデモ)の例を参照してください。

### ポップオーバーのキーフレームアニメーション

CSSキーフレームアニメーションでポップオーバーをアニメーションさせる場合、いくつか注意すべき違いがあります。

- `@starting-style` を提供するのではなく、キーフレームに "to" と "from" の `display` 値を記述します。
- 離散アニメーションを明示的に有効にすることはありません。キーフレーム内に `allow-discrete` に相当するものはありません。
- キーフレーム内で `overlay` を設定する必要もありません。`display` アニメーションはポップオーバーの表示から非表示までのアニメーションを処理します。

例を参照してください。

#### HTML

HTML には、ポップオーバーとして宣言された {{htmlelement("div")}} 要素と、ポップオーバーの表示コントロールとして指定された {{htmlelement("button")}} 要素があります。

```html-nolint
<button popovertarget="mypopover">ポップオーバーを表示</button>
<div popover="auto" id="mypopover">ポップオーバーです。アニメーションします。</div>
```

#### CSS

必要な出現アニメーションと消滅アニメーションを指定するキーフレームを定義し、背景は出現アニメーションのみを定義します。背景がフェードアウトするアニメーションは不可能であることに注意してください - 背景はポップオーバーが閉じられたときに DOM から即座に除去されるため、アニメーションするものはありません。

```css
html {
  font-family: "Helvetica", "Arial", sans-serif;
}

[popover] {
  font-size: 1.2rem;
  padding: 10px;
  animation: fade-out 0.7s ease-out;
}

[popover]:popover-open {
  animation: fade-in 0.7s ease-out;
}

[popover]:popover-open::backdrop {
  animation: backdrop-fade-in 0.7s ease-out forwards;
}

/* アニメーションのキーフレーム */

@keyframes fade-in {
  0% {
    opacity: 0;
    transform: scaleX(0);
  }

  100% {
    opacity: 1;
    transform: scaleX(1);
  }
}

@keyframes fade-out {
  0% {
    opacity: 1;
    transform: scaleX(1);
    /* display はアニメーションが終了するまでポップオーバーを
    表示し続けるために必要 */
    display: block;
  }

  100% {
    opacity: 0;
    transform: scaleX(0);
    /* display: none はここでは必須ではない。閉じたポップオーバーの
    既定値であるため。ただし、ここでは動作を明確化するために入れている */
    display: none;
  }
}

@keyframes backdrop-fade-in {
  0% {
    background-color: transparent;
  }

  100% {
    background-color: rgb(0 0 0 / 25%);
  }
}
```

#### 結果

このコードは次のように表示されます。

{{ EmbedLiveSample("A popover keyframe animation", "100%", "200") }}

## 関連情報

- [ポップオーバー API の例](https://mdn.github.io/dom-examples/popover-api/)のコレクション
