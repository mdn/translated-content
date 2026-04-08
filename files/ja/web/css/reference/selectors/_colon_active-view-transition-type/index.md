---
title: :active-view-transition-type()
slug: Web/CSS/Reference/Selectors/:active-view-transition-type
l10n:
  sourceCommit: 8f7fa9e7aef0399c7a7f8e5a20476a0c2f287640
---

**`:active-view-transition-type()`** は [CSS](/ja/docs/Web/CSS) の関数形式の[擬似クラス](/ja/docs/Web/CSS/Reference/Selectors/Pseudo-classes)で、特定の 1 つ以上の型のビュー遷移が進行中（アクティブ）である場合に要素に一致し、ビュー遷移が完了すると一致しなくなります。

```css
html:active-view-transition-type(forwards, backwards) {
  /* ... */
}
```

## 構文

```css-nolint
:active-view-transition-type(<custom-ident>#) {
  /* ... */
}
```

### 引数

- `<custom-ident>#`
  - : カンマ区切りで指定された 1 つ以上の {{cssxref("&lt;custom-ident>")}} 値で、このセレクターが一致するためにアクティブなビュー遷移に適用できる型の選択肢を表します。

## 解説

[ビュー遷移型](/ja/docs/Web/API/View_Transition_API/Using_types)は、アクティブなビュー遷移に対して異なる**型**を指定するための仕組みを提供します。ビュー遷移の型は、以下の複数の方法で設定できます。

- 同一文書内 (SPA) のビュー遷移を行う場合は、{{domxref("Document.startViewTransition", "startViewTransition()")}} メソッドの [`types`](/ja/docs/Web/API/Document/startViewTransition#types) オプションで型を指定します。
- 文書間でのビュー遷移については、{{cssxref("@view-transition")}} アットルールの [`types`](/ja/docs/Web/CSS/Reference/At-rules/@view-transition#types) 記述子で型を指定します。
- 同時に、対応する `ViewTransition` オブジェクトの {{domxref("ViewTransition.types", "types")}} プロパティを使用して、アクティブなビュー遷移の型を動的に変更することもできます。
  - 同一文書内のビュー遷移の場合、これは `startViewTransition()` メソッドによって返される `ViewTransition` オブジェクトです。
  - 文書間でのビュー遷移については、`ViewTransition` オブジェクトは遷出元のページの場合は {{domxref("Window.pageswap_event", "pageswap")}} イベントオブジェクトの {{domxref("PageSwapEvent.viewTransition", "viewTransition")}} プロパティで、遷入先のページの場合は {{domxref("Window.pagereveal_event", "pagereveal")}} イベントオブジェクトの {{domxref("PageSwapEvent.viewTransition", "viewTransition")}} プロパティから、利用できます。
  - また、アクティブな `ViewTransition` には、{{domxref("Document.activeViewTransition")}} プロパティを介してアクセスすることもできます。これにより、どのようなコンテキストでもアクティブなビュー遷移に一貫した方法でアクセスできるようになります。

アクティブなビュー遷移に 1 つ以上の型が設定されると、文書のルート要素に `:active-view-transition-type()` 擬似クラスを適用し、それぞれの型に対して独自のスタイルを設定することができます。この擬似クラスは、カンマ区切りの型リストを引数として受け取り、一致するセレクターの有効なビュー遷移に設定可能な型を指定します。

例えば、画像ギャラリーアプリにおいて、表示される画像が変わるたびに、シーケンスを前後に移動しているか、画像を削除しているか、あるいはシーケンスに画像を追加しているかによって、{{htmlelement("img")}} 要素に異なる遷移のアニメーションを適用したい場合があるでしょう。

### OR と AND の動作

`:active-view-transition-type()` 擬似クラス内で指定される、カンマ区切りの型のリストは「OR」の動作を提供する点に注意してください。つまり、アクティブなビューの遷移にこれらの型のうち 1 つ以上が設定されていれば、そのセレクターは一致します。

例えば、この場合、アクティブなビュー遷移の型が `forwards`、`backwards`、その両方のいずれかである場合に、このセレクターが一致します。

```css
html:active-view-transition-type(forwards, backwards) {
  /* ... */
}
```

AND 条件（つまり、セレクターが一致するためにはすべての型が設定されている必要がある）を指定したい場合は、複数の `:active-view-transition-type()` 擬似クラスを連結することで実現できます。以下の場合では、アクティブなビュー遷移の型が `slide` かつ `forwards` である場合にのみ、セレクターが一致します。

```css
html:active-view-transition-type(slide):active-view-transition-type(forwards) {
  /* ... */
}
```

## 例

複数の完全な例については、[ビュー遷移型の使用](/ja/docs/Web/API/View_Transition_API/Using_types)も参照してください。

### 基本的な `:active-view-transition-type()` の使い方

この例では、「戻る」と「進む」という 2 つの異なるボタンを介して、2 つの異なるコンテンツ間を遷移させる基本的な文書が提供されています。ここでは、どのボタンが押されたかによって遷移のアニメーションを変化させるために、ビュー遷移型を使用することができます。

#### HTML

このマークアップには、コンテンツを含む単一の {{htmlelement("p")}} 要素と、ビュー遷移を開始するための 2 つの {{htmlelement("button")}} 要素が含まれています。

```html live-sample___basic_usage
<p>これが私の最初のコンテンツです。気に入っていただけますように！</p>
<div>
  <button id="backwards">戻る</button>
  <button id="forwards">進む</button>
</div>
```

#### JavaScript

このスクリプトでは、両方のボタンと本文の段落へ参照を作成し、2 つの異なるコンテンツを 2 つの定数に格納するために使用します。

```js live-sample___basic_usage
const backBtn = document.getElementById("backwards");
const fwdBtn = document.getElementById("forwards");
const content = document.querySelector("p");

const first = "これが私の最初のコンテンツです。気に入っていただけますように！";
const second =
  "これが私の 2 つ目のコンテンツです。最初より良いでしょうか？";
```

次に、前へボタンと次へボタンに `click` イベントリスナーを追加します。これらがクリックされると、`changeContent()` 関数が実行されます。

```js live-sample___basic_usage
backBtn.addEventListener("click", changeContent);
fwdBtn.addEventListener("click", changeContent);
```

最後に、`changeContent()` 関数を定義します。まず、ビュー遷移の型値格納用の `type` 変数を宣言します。イベントの対象が「戻る」ボタンの場合は、`type` を `backwards` に設定します。そうでない場合は、`type` を `forwards` に設定します。その後、{{domxref("Document.startViewTransition", "startViewTransition()")}} メソッドを呼び出して、コンテンツを更新し、遷移を始めます。

- `update` コールバックは、段落の `textContent` が `first` の文字列と等しいかどうかを調べます。等しい場合は、`second` の文字列に設定します。等しくない場合は、`first` の文字列に設定します。
- `types` 配列には、1 つの要素が指定されます。それは、先ほど宣言した `type` の値です。

```js live-sample___basic_usage
function changeContent(e) {
  const type = e.target === backBtn ? "backwards" : "forwards";
  document.startViewTransition({
    update() {
      content.textContent === first
        ? (content.textContent = second)
        : (content.textContent = first);
    },
    types: [type],
  });
}
```

#### CSS

スタイルでは、まず `:active-view-transition` 擬似クラスを使用して、一連のルールを作成します。これらのスタイルは、ビュー遷移がアクティブなときはいつでも、その型に問わず適用されます。`slide` という `view-transition-name` が指定されている `<p>` 要素を除き、トランジション時に他の要素が捕捉されてアニメーションされるのを防ぐため、{{cssxref("view-transition-name")}} を `none` として {{cssxref(":root")}} に適用します。

```css hidden live-sample___basic_usage
html,
body {
  height: 100%;
}

body {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

div {
  display: flex;
  width: 60%;
  justify-content: space-between;
}

p {
  font-size: 1.7em;
  width: 60%;
  color: blue;
  margin-top: 0;
}
```

```css live-sample___basic_usage
html:active-view-transition {
  :root {
    view-transition-name: none;
  }
  p {
    view-transition-name: slide;
  }
}
```

次に、`:active-view-transition-type()` 擬似クラスを使用して、2 つのネストされたスタイルブロックを作成します。1 つ目は、アクティブなビュー遷移の型が `forwards` の場合にのみ適用され、2 つ目は、アクティブなビュー遷移の型が `backwards` の場合にのみ適用されます。それぞれのブロックでは、{{cssxref("::view-transition-old()")}} および {{cssxref("::view-transition-new()")}} 擬似要素を使用して、`slide` キャプチャグループの移行前のビューと移行後のビューに、独自の {{cssxref("animation-name")}} 値を適用しています。

結果として次のようになります。

- 遷移型が `forwards` の場合、古いコンテンツビューが左へスライドして退き、新しいコンテンツビューが右からスライドして入ってきます。
- 遷移型が `backwards` の場合、古いコンテンツビューは右へスライドして退き、新しいコンテンツビューは左からスライドして入ってきます。

```css live-sample___basic_usage
html:active-view-transition-type(forwards) {
  &::view-transition-old(slide) {
    animation-name: slide-out-to-left;
  }
  &::view-transition-new(slide) {
    animation-name: slide-in-from-right;
  }
}

html:active-view-transition-type(backwards) {
  &::view-transition-old(slide) {
    animation-name: slide-out-to-right;
  }
  &::view-transition-new(slide) {
    animation-name: slide-in-from-left;
  }
}
```

最後に、{{cssxref("@keyframes")}} アニメーションブロックを使用して、前回参照したアニメーションを定義します。

```css live-sample___basic_usage
@keyframes slide-in-from-left {
  from {
    translate: -100vw 0;
  }
}
@keyframes slide-in-from-right {
  from {
    translate: 100vw 0;
  }
}
@keyframes slide-out-to-left {
  to {
    translate: -100vw 0;
  }
}
@keyframes slide-out-to-right {
  to {
    translate: 100vw 0;
  }
}
```

#### 結果

この例は次のように表示されます。

{{EmbedLiveSample("basic-usage", "100%", 200)}}

「戻る」ボタンと「進む」ボタンをクリックしてみてください。それぞれの場合で、コンテンツの更新やビュー遷移を開始するコードは同じですが、遷移に使用されるアニメーションが異なることに気づくでしょう。これは、押されたボタンに応じて異なる遷移型が設定されているためです。

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{domxref("Document.activeViewTransition")}}
- {{CSSXRef(":active-view-transition")}} 擬似クラス
- [ビュー遷移 API](/ja/docs/Web/API/View_Transition_API)
- [ビュー遷移 API の使用](/ja/docs/Web/API/View_Transition_API/Using)
- [ビュー遷移型の使用](/ja/docs/Web/API/View_Transition_API/Using_types)
