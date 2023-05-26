---
title: ポップオーバー API の使用
slug: Web/API/Popover_API/Using
l10n:
  sourceCommit: bb6092c4230b69c2eceae6910af68c73955cae1c
---

{{DefaultAPISidebar("Popover API")}}

**ポップオーバー API** は、他のページコンテンツの上に表示するポップオーバーコンテンツを表示するための、標準的な、一貫性のある、柔軟な仕組みを開発者に提供します。ポップオーバーコンテンツは、HTML 属性を用いて宣言的に、または JavaScript を用いて制御することができます。この記事では、この機能のすべてを使用するための詳細なガイドを提供します。

## 宣言的なポップオーバーの作成

最も単純な形では、ポップオーバーのコンテンツを含むHTML要素に [`popover`](/ja/docs/Web/HTML/Global_attributes/popover) 属性を追加すれば、ポップオーバーが作成されます。また、ポップオーバーとそのコントロールを関連付けるために `id` が必要です。

```html
<div id="mypopover" popover>ポップオーバーコンテンツ</div>
```

> **メモ:** 値なしで `popover` 属性をしている津尾、 `popover="auto"` を設定するのと同じになります。

この属性を追加すると、{{cssxref("display", "display: none")}} をその要素に設定することで、ページ読み込み時に非表示にすることができます。ポップオーバーの表示・非表示を切り替えるには、いくつかの制御ボタンを追加する必要があります。{{htmlelement("button")}}（または {{htmlelement("input")}} の `type="button"`）に [`popovertarget`](/ja/docs/Web/HTML/Element/button#popovertarget) 属性を、制御するポップオーバーの ID を値として設定することすることにより、ポップオーバー制御ボタンに設定することができます。

```html
<button popovertarget="mypopover">Toggle the popover</button>
<div id="mypopover" popover>Popover content</div>
```

既定では、ボタンはトグルボタンになっています。繰り返し押すと、ポップオーバーの表示と非表示が切り替わります。

この動作を変更したい場合は、[`popovertargetaction`](/ja/docs/Web/HTML/Element/button#popovertargetaction) 属性を使用します - これは `"hide"`、`"show"`、`"toggle"` の何れかの値を取ります。例えば、表示ボタンと非表示ボタンを別個に作成するには、次のようにします。

```html
<button popovertarget="mypopover" popovertargetaction="show">
  Show popover
</button>
<button popovertarget="mypopover" popovertargetaction="hide">
  Hide popover
</button>
<div id="mypopover" popover>Popover content</div>
```

[基本的な宣言的ポップオーバーの例](https://mdn.github.io/dom-examples/popover-api/basic-declarative/)（[ソース](https://github.com/mdn/dom-examples/tree/main/popover-api/basic-declarative)）で、上記のコード片がどのように見えるかを確認できます。

> **メモ:** `popovertargetaction` 属性が省略されると、制御ボタンで実行される既定のアクションは `"toggle"` になります。

ポップオーバーが表示されると、`display: none`が削除されて{{glossary("top layer", "最上位レイヤー")}}に配置され、他のすべてのページのコンテンツの上に置かれるようになります。

## 自動状態と「簡単な解除」

上記のように、ポップオーバー要素に `popover` または `popover="auto"` が設定されている場合、その要素は**自動状態** (auto state) であると言います。自動状態について注意すべき重要な動作が 2 つあります。

- ポップオーバーは「簡単に解除する」("light dismissed") ことができます。これは、ポップオーバーの外側をクリックするか、<kbd>Esc</kbd> キーを押すことによって、ポップオーバーを閉じることができるという意味です。
- 通常、一度に表示できるポップオーバーは 1 つだけです。すでに 1 つのポップオーバーが表示されているとき に 2つ目を表示すると、最初のポップオーバーが閉じてしまいます。このルールの例外は、入れ子のオートポップオーバーがある場合です。詳しくは、[入れ子のポップオーバー](#入れ子のポップオーバー)の節を参照してください。

> **メモ:** `popover="auto"` ポップオーバーは、文書内の他の要素で {{domxref("HTMLDialogElement.showModal()")}} や {{domxref("Element.requestFullscreen()")}} の呼び出しが成功した場合にも閉じます。しかし、これらのメソッドを表示されているポップオーバーに対して呼び出すと失敗することに留意してください。しかし、現在表示されていない `popover` 属性を持つ要素に対してこれらのメソッドを呼び出すことはできます。

自動状態は、一度に単一のポップオーバーだけを示したい場合に有益な機能です。表示したいチュートリアルの UI メッセージが複数あるが、表示が乱雑になって混乱するのを避けたい場合や、新しい状態が前回の状態を上書きするようなステータスメッセージを表示する場合などに利用できます。

上記のような動作は、[複数の自動ポップオーバーの例](https://mdn.github.io/dom-examples/popover-api/multiple-auto/)（[ソース](https://github.com/mdn/dom-examples/tree/main/popover-api/multiple-auto)）で実際に見ることができます。ポップオーバーを表示した後に簡単に解除してみて、同時に両方を表示しようとしたときにどうなるかを見てみましょう。

## 手動のポップオーバー状態の使用

自動状態のほかに、**手動状態**があり、これはポップオーバー要素に `popover="manual"` を設定することで設定することができます。

```html
<div id="mypopover" popover="manual">Popover content</div>
```

この状態では、次のようになります。

- ポップオーバーは「簡単に解除する」ことはできませんが、宣言的な表示/非表示/トグルボタン（先に見たとおり）は引き続き機能します。
- 独立した複数のポップオーバーを同時に表示することができます。

この動作は、[複数の手動ポップオーバーの例](https://mdn.github.io/dom-examples/popover-api/multiple-manual/)（[ソース](https://github.com/mdn/dom-examples/tree/main/popover-api/multiple-manual)）で確認することができます。

## JavaScript でポップオーバーを表示

JavaScript API を使用してポップオーバーを制御することもできます。

{{domxref("HTMLElement.popover")}} プロパティを使用して、[`popover`](/ja/docs/Web/HTML/Global_attributes/popover) 属性を取得したり設定したりすることができます。これを使用して JavaScript でポップオーバーを作成することができ、機能検出にも利用できます。例えばこのようになります。

```js
function supportsPopover() {
  return HTMLElement.prototype.hasOwnProperty("popover");
}
```

同様に、

- {{domxref("HTMLButtonElement.popoverTargetElement")}} と {{domxref("HTMLInputElement.popoverTargetElement")}} は [`popovertarget`](/ja/docs/Web/HTML/Element/button#popovertarget) 属性に相当し、ポップオーバーに対する制御ボタンの設定を行うことができますが、プロパティ値としては制御すべきポップオーバーの DOM 要素の参照を取ります。
- {{domxref("HTMLButtonElement.popoverTargetAction")}} と {{domxref("HTMLInputElement.popoverTargetAction")}} は HTML の [`popovertargetaction`](/ja/docs/Web/HTML/Element/button#popovertargetaction) グローバル属性に相当し、制御ボタンがもたらすアクションを指定することができるようにします。

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

## タイマーによるポップオーバーの自動解除

もう一つ、JavaScript でよくあるパターンが、一定の時刻が経過すると自動的にポップオーバーを解除することです。例えば、一度に複数のアクション（例えば複数のファイルのアップロードなど）があり、それぞれのアクションが成功または失敗したときに通知を示す「トースト」通知のシステムを作成したい場合があります。この場合、手動ポップオーバーを使用して、複数のアクションを同時に示し、{{domxref("setTimeout")}} を使用して解除できるようにしたいとします。このようなポップオーバーを処理する関数は次のようなものです。

```js
function makeToast(result) {
  const popover = document.createElement("article");
  popover.popover = "manual";
  popover.classList.add("toast");
  popover.classList.add("newest");

  let msg;

  if (result === "success") {
    msg = "Action was successful!";
    popover.classList.add("success");
    successCount++;
  } else if (result === "failure") {
    msg = "Action failed!";
    popover.classList.add("failure");
    failCount++;
  } else {
    return;
  }

  popover.textContent = msg;
  document.body.appendChild(popover);
  popover.showPopover();

  updateCounter();

  setTimeout(() => {
    popover.hidePopover();
    popover.remove();
  }, 4000);
}
```

また、{{domxref("HTMLElement.beforetoggle_event", "beforetoggle")}} イベントを使用して、ポップオーバーが表示されたり非表示になったりした後に続く動作をさせることもできます。この例では、`moveToastsUp()` 関数を実行して、新しいトーストが現れるたびに、トーストがすべて画面の内側へ移動して、場所を確保するようにしています。

```js
popover.addEventListener("toggle", (event) => {
  if (event.newState === "open") {
    moveToastsUp();
  }
});

function moveToastsUp() {
  const toasts = document.querySelectorAll(".toast");

  toasts.forEach((toast) => {
    if (toast.classList.contains("newest")) {
      toast.style.bottom = `5px`;
      toast.classList.remove("newest");
    } else {
      const prevValue = toast.style.bottom.replace("px", "");
      const newValue = parseInt(prevValue) + 50;
      toast.style.bottom = `${newValue}px`;
    }
  });
}
```

上記の例のスニペットが実際に使われている様子は、[トーストポップオーバーの例](https://mdn.github.io/dom-examples/popover-api/toast-popovers/)（[ソース](https://github.com/mdn/dom-examples/tree/main/popover-api/toast-popovers)）をご覧ください。また、説明のためのコメントも充実しています。

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

例ば、[入れ子メニューの例](https://mdn.github.io/dom-examples/popover-api/nested-popovers/)（[ソース](https://github.com/mdn/dom-examples/tree/main/popover-api/nested-popovers)）を参照してください。マウスやキーボードの操作でサブポップオーバーを適切に表示・非表示を切り替えるため、また、どちらかのオプションが選択されたときに両方のメニューを非表示にするために、いくつかのイベントハンドラーが使用されていることがわかります。SPA や複数ページのウェブサイトでは、新しいコンテンツの読み込みをどのように処理するかによって、これらのうちのいくつかは必要ないかもしれませんが、このデモでは説明のために含めています。

## ポップオーバーのスタイル付け

ポップオーバー API は、注目に値するいくつかの関連する CSS 機能が利用可能である。

実際のポップオーバーのスタイル設定では、単純な属性セレクター (`[popover]`) ですべてのポップオーバーを選択するか、新しい擬似クラス、{{cssxref(":popover-open")}} を使用して開くためのポップオーバーを選択することが可能です。

記事の始めにリンクした最初の 2、3 の例を見て、ポップオーバーがビューポートの中央に現れていることに気づいたかもしれません。これは既定のスタイル設定であり、UA スタイルシートでこのように実現されています。

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

既定のスタイル設定を上書きして、ビューポート上の他の場所にポップオーバーが現れるようにするには、上記のスタイルを次のように上書きする必要があります。

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

{{cssxref("::backdrop")}} 擬似要素は、{{glossary("top layer", "最上位レイヤー")}}にあるポップオーバー要素のすぐ後ろに配置される全画面要素で、必要に応じてポップオーバーの後ろのページコンテンツに効果を追加することができるようにします。例 えば、ユーザーの注意をポップオーバーに集中させるために、ポップオーバーの後ろのコンテンツをぼかしたい場合があります。

```css
::backdrop {
  backdrop-filter: blur(3px);
}
```

これがどのように描画されるかという考えについては、[ポップオーバーの背景をぼかす例](https://mdn.github.io/dom-examples/popover-api/blur-background/)（[source](https://github.com/mdn/dom-examples/tree/main/popover-api/blur-background)）を参照してください。

最後にアニメーションについてですが、多くの人がポップオーバーの表示と非表示をアニメーションで表現したいと思うでしょうから、特に触れる必要があります。。現状では、ポップオーバーをアニメーションで実現するためには、[CSS の動作のいくつかの更新](https://open-ui.org/components/popover.research.explainer/#animation-of-popovers)が必要です。特に、`display: none` から移行する際に、要素のアニメーションを可能にします。ポップオーバーにアニメーションが利用できるようになったら、すぐにこの記事を更新します。
