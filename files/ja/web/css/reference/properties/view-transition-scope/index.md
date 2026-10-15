---
title: "`view-transition-scope` プロパティ (CSS)"
short-title: view-transition-scope
slug: Web/CSS/Reference/Properties/view-transition-scope
l10n:
  sourceCommit: b6de98eb9cd52ce7e37f22a340352f0af4c9d597
---

{{SeeCompatTable}}

**`view-transition-scope`** は [CSS](/ja/docs/Web/CSS) のプロパティで、{{cssxref("view-transition-name")}} の値が設定されている要素の検出可能性（ひいてはビュー遷移の[スナップショット](/ja/docs/Web/API/View_Transition_API/Using#an_aside_on_snapshots)の生成）を、特定の要素サブツリーに限定することができます。

## 構文

```css
/* キーワード値 */
view-transition-scope: none;
view-transition-scope: all;

/* グローバル値 */
view-transition-scope: inherit;
view-transition-scope: initial;
view-transition-scope: revert;
view-transition-scope: revert-layer;
view-transition-scope: unset;
```

### 値

このプロパティは、以下のキーワード値のいずれかとして指定します。

- `none`
  - : 初期値。ビュー遷移中にスナップショットに含める要素の検出範囲は、特定のサブツリーに限定されません。
- `all`
  - : ビュー遷移中に、要素の検出範囲を、このプロパティが設定されている要素のサブツリーに制限します。`none` 以外の {{cssxref("view-transition-name")}} を持つ要素のみが対象となります。

## 解説

[ビュー遷移プロセス](/ja/docs/Web/API/View_Transition_API/Using#the_view_transition_process) において、ブラウザーは、`none` 以外の {{cssxref("view-transition-name")}} が設定されている要素のスナップショットを捕捉します。これらのスナップショットは、その後、CSS アニメーションによってアニメーション化されます。

このプロセスで発生しうる課題の一つに、ビュー遷移に関与する要素間の名前衝突があります。同じ {{cssxref("view-transition-name")}} を複数の要素に設定することはできません。もし設定してしまった場合、遷移を開始するために {{domxref("Element.startViewTransition()")}} メソッドが呼び出された際、ブラウザーは `InvalidStateError` を発生させます。

この問題は、要素に `view-transition-name` を [`match-element`](/ja/docs/Web/CSS/Reference/Properties/view-transition-name#match-element) に設定することで、ブラウザーが内部で一意の名前を自動的に割り当てるようにすることで解決できます。ただし、自分が制御していない異なるソースからのコンポーネントを複数記載している場合、この方法は機能しません。それでも命名上の競合が発生する可能性があります。

`view-transition-scope` プロパティを使用すると、ビュー遷移をその要素の範囲内に制限することができます。要素に `view-transition-scope: all` を設定すると、遷移の範囲がその要素とその子要素に限定されるため、上記の問題を解決するのに使用することができます。

[要素スコープのビュー遷移](/ja/docs/Web/API/View_Transition_API/Using_element-scoped)が開始されるたびに、ブラウザーは遷移のルート要素に対して自動的に `view-transition-scope: all` を設定し、遷移のスコープ内にある要素のみがスナップショットとして取得され、アニメーションするようになります。

## 公式定義

{{cssinfo}}

## 形式文法

{{csssyntax}}

## 例

### `view-transition-scope` を使用してスナップショットを独立化

この例では、`view-transition-scope` を使用して文書スコープのビュー遷移の範囲を限定し、複数の要素で同じ `view-transition-name` を使用することができる方法を示しています。

#### HTML

HTML は、DOM の更新を制御するための {{htmlelement("button")}} 要素と、`change-me` というクラスを持ついくつかの要素を含み、その一部は入れ子になっています。これらはすべて、{{htmlelement("section")}} 要素で囲まれています。

```html live-sample___vt-scope
<button>DOM を更新</button>
<section>
  <div class="change-me"><span>I can change</span></div>
  <div class="change-me">
    <span>I can change</span>
    <div class="change-me"><span>I can change</span></div>
  </div>
  <div class="change-me"><span>I can change</span></div>
</section>
```

#### CSS

まず、すべての要素に同じ `view-transition-name` を設定します。次に、それぞれの要素のビュー遷移プロセスを分離するために、それらすべてに `view-transition-scope: all` を設定します。次に、この `view-transition-name` を持つすべてのビュー遷移に対して、より長い {{cssxref("animation-duration")}} を {{cssxref("::view-transition-group()")}} 擬似要素を介して設定します。

```css hidden live-sample___vt-scope
body {
  font: 1.2em / 1.5 sans-serif;
  width: 50%;
  max-width: 700px;
  margin: 0 auto;
}

section,
.change-me {
  border: 2px solid #666666;
  padding: 10px;
}

section {
  background-color: orange;
}
```

```css live-sample___vt-scope
.change-me {
  background-color: white;
  view-transition-name: para-change;
  view-transition-scope: all;
}

::view-transition-group(para-change) {
  animation-duration: 1s;
}
```

#### JavaScript

このスクリプトは、まずボタンと `<div>` 要素（私たちのコンポーネント）への参照を取得することから始まります。

```js live-sample___vt-scope
const btn = document.querySelector("button");
const divs = document.querySelectorAll("div");
```

次に、`updateDivs()` という関数を定義します。この関数は、それぞれのコンポーネント内のネストされた {{htmlelement("span")}} 要素のテキストコンテンツを 2 つの値の間で切り替え、同時にコンポーネントの前景色と背景色を 2 つの値の間で切り替えます。

```js live-sample___vt-scope
function updateDivs() {
  divs.forEach((div) => {
    if (div.firstElementChild.textContent === "I can change") {
      div.firstElementChild.textContent = "I have changed";
      div.style.color = "white";
      div.style.backgroundColor = "black";
    } else {
      div.firstElementChild.textContent = "I can change";
      div.style.color = "black";
      div.style.backgroundColor = "white";
    }
  });
}
```

最後に、`click` イベントリスナーを `<button>` 要素に追加します。ボタンがクリックされた際、まず `startViewTransition()` が `document` オブジェクトに存在するかどうかを確認します。存在しない場合は、`updateDivs()` を実行してから関数から `return` します。この最初の処理により、ビュー遷移に対応していないブラウザーでも、エラーを発生させることなく DOM を更新できるようになります。次に、`updateDivs()` を `startViewTransition()` のコールバックの中で実行し、DOM の更新に合わせてビュー遷移を開始します。

```js live-sample___vt-scope
btn.addEventListener("click", handleClick);

function handleClick(e) {
  if (!document.startViewTransition) {
    updateDivs();
    return;
  }
  document.startViewTransition(() => {
    updateDivs();
  });
}
```

#### 結果

{{embedlivesample("vt-scope", "100%", 280)}}

「DOM を更新」ボタンをクリックして、ビュー遷移を確認してください。これで、次の操作を試してみてください。

1. `<div>` 要素の 1 つを調べてみてください。
2. ブラウザーの開発者ツールの「スタイル」パネルで、`view-transition-scope: all;` の宣言のチェックを外して、この機能を無効にしてください。
3. JavaScript コンソールに切り替えてください。
4. もう一度「DOM を更新」ボタンをクリックしてみてください。

DOM が変更された際にビュー遷移のアニメーションが適用されず、コンソールに `InvalidStateError` が表示されることが確認できるはずです。

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{cssxref("view-transition-name")}}
- [ビュー遷移 API](/ja/docs/Web/API/View_Transition_API)
- [ビュー遷移 API の使用](/ja/docs/Web/API/View_Transition_API/Using)ガイド
- [要素にスコープされたビュー遷移の使用](/ja/docs/Web/API/View_Transition_API/Using_element-scoped)
