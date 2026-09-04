---
title: ビュー遷移型の使用
slug: Web/API/View_Transition_API/Using_types
l10n:
  sourceCommit: 8f7fa9e7aef0399c7a7f8e5a20476a0c2f287640
---

{{DefaultAPISidebar("View Transition API")}}

ビュー遷移型は、アクティブなビュー遷移に対して異なる**型**を指定するための仕組みを提供します。これにより、CSS を使用して、指定された遷移型に応じて、DOM 要素のコンテンツが更新された際に異なるアニメーションを適用することができます。例えば、画像ギャラリーアプリにおいて、表示されている画像が変更される際、シーケンスを前後に移動しているか、画像を削除しているか、あるいはシーケンスに画像を追加しているかによって、 {{htmlelement("img")}} 要素に異なるアニメーションを適用したい場合などが考えられます。

この記事では、同一文書内でのビュー遷移および文書間でのビュー遷移において、型を活用する方法について解説します。

## 例

以下の3つの例に含まれているコードを順を追って解説することで、ビュー遷移の型について知っておくべきことを説明します。

- [SPA の遷移型ギャラリー](https://mdn.github.io/dom-examples/view-transitions/spa-gallery-transition-types/) ([ソースコード](https://github.com/mdn/dom-examples/tree/main/view-transitions/spa-gallery-transition-types)): SPA 画像ギャラリーで、「前へ」ボタン、「次へ」ボタン、または画像を直接クリックして移動する際に、遷移型を適用して異なる遷移アニメーションを表示します。
- [MPA の遷移型の例](https://mdn.github.io/dom-examples/view-transitions/mpa-chapter-nav-transition-types/) ([ソースコード](https://github.com/mdn/dom-examples/tree/main/view-transitions/mpa-chapter-nav-transition-types)): それぞれのページに1つの章が収録されたストーリーアプリです。遷移型を指定して、ページ間でビュー遷移のアニメーションを選択的に適用する方法を示しています。
- [MPA の複数の遷移型の例](https://mdn.github.io/dom-examples/view-transitions/mpa-chapter-nav-multiple-transition-types/) ([ソースコード](https://github.com/mdn/dom-examples/tree/main/view-transitions/mpa-chapter-nav-multiple-transition-types)): 前回の例を基に、ページごとに異なる遷移型を適用して、選択的に異なるビュー遷移のアニメーションを表示する方法を示します。遷移型は、ナビゲーション中に JavaScript によって動的に決定されます。

コード全体の仕組みについては説明せず、ビュー遷移に関連する部分のみを解説します。それぞれの部分がどのような役割を果たしているかについては、コード内にコメントを記述しています。

## SPA ビュー遷移での型の使用

SPA のビュー遷移にさまざまな型を適用するには、遷移を開始する {{domxref("Document.startViewTransition()")}} メソッドの呼び出しに、型名を渡します。このメソッドは、アニメーションさせたい DOM の更新を処理する `update` コールバック関数と、型名を表す文字列を含む `types` 配列を格納したオブジェクトを引数として受け取ることができます。

[SPA 遷移型ギャラリー](https://mdn.github.io/dom-examples/view-transitions/spa-gallery-transition-types/)から例を見てみましょう。

```js
document.startViewTransition({
  update() {
    displayedImage.src = `${baseURL}${images[newId].filename}`;
    displayedImage.alt = images[newId].alt;
    displayedImage.setAttribute("data-id", newId);
    caption.textContent = images[newId].alt;
  },
  types: ["backwards"],
});
```

「前へ」ボタンが押されると、このコードが実行されます。コールバック関数は、シーケンス内の前の画像を表示するように表示中の画像を更新します（代替テキスト、シーケンス番号を表す `data-id`、およびキャプションの更新を含みます）。また、`types` 配列は、ビューの遷移を `backwards` 型で実行するように指定しています。

> [!NOTE]
> `types` 配列でビュー遷移に設定された型は、`startViewTransition()` メソッドによって返される {{domxref("ViewTransition")}} オブジェクトの {{domxref("ViewTransition.types", "types")}} プロパティを通じてアクセスできます。`types` プロパティは {{domxref("ViewTransitionTypeSet")}} です。これは [Set 風オブジェクト](/ja/docs/Web/JavaScript/Reference/Global_Objects/Set#set_風オブジェクト)であり、`clear()`、`add()`、`delete()` などのメソッドを使用して、ビュー遷移に適用される型を動的に変更することができます。

### CSS で独自のアニメーションを適用

CSS では、{{cssxref(":active-view-transition")}} および {{cssxref(":active-view-transition-type()")}} という擬似クラスを使用して、アクティブなビュー遷移のスタイルをカスタマイズできます。これらはそれぞれ、ビュー遷移がアクティブな場合に一致するセレクターを生成したり、特定の型のビュー遷移がアクティブな場合にのみ一致するセレクターを生成したりすることが可能です。

まず、`:active-view-transition` を使用して選択された、ビュー遷移型に依らず、ビュー遷移がアクティブな際に適用される一連のスタイルを定義します。この入れ子になったブロック内では、文書の {{cssxref(":root")}} に対して {{cssxref("view-transition-name")}} の値として `none` を適用し、文書の大部分のビュー遷移を無効にします。その後、`view-transition-name` の値として `image` と `caption` を、それぞれ {{htmlelement("img")}} 要素と {{htmlelement("figcaption")}} 要素に対して適用します。これにより、これらの要素の DOM 状態の変化が別々のスナップショットとしてキャプチャされ、個別にアニメーションが適用できるようになります。

最後に、{{cssxref("::view-transition-old()")}} および {{cssxref("::view-transition-new()")}} 擬似要素を使用して、`caption` の表示切り替え時（表示解除時および表示時）に特定のアニメーションを適用します。これらのアニメーションは、指定された型に関わらず、`<figcaption>` に適用されるようにします。

```css
html:active-view-transition {
  :root {
    view-transition-name: none;
  }
  .displayed-img {
    view-transition-name: image;
  }
  figcaption {
    view-transition-name: caption;
  }

  &::view-transition-old(caption) {
    animation-name: fade-out;
  }
  &::view-transition-new(caption) {
    animation-name: fade-in;
    animation-delay: 0.6s;
  }
}
```

次の段階では、アクティブなビュー遷移の `type` が `forwards`（「次へ」ボタンが押された場合）、`backwards`（「前へ」ボタンが押された場合」、または `upwards`（サムネイル画像がクリックされた場合）のいずれかによって、`image` の遷出ビューと遷入ビューに異なるアニメーションを適用します。これは、3 つの `:active-view-transition-type()` ルールセットを使用して行われます。各ルールセットは、それぞれの型に応じて、{{cssxref("animation-name")}} に `::view-transition-old()` および `::view-transition-new()` 擬似要素に異なる値を適用します。

```css
html:active-view-transition-type(forwards) {
  &::view-transition-old(image) {
    animation-name: slide-out-to-left;
  }
  &::view-transition-new(image) {
    animation-name: slide-in-from-right;
  }
}

html:active-view-transition-type(backwards) {
  &::view-transition-old(image) {
    animation-name: slide-out-to-right;
  }
  &::view-transition-new(image) {
    animation-name: slide-in-from-left;
  }
}

html:active-view-transition-type(upwards) {
  &::view-transition-old(image) {
    animation-name: slide-out-to-top;
  }
  &::view-transition-new(image) {
    animation-name: slide-in-from-top;
    animation-delay: 0.6s;
  }
}
```

`upwards` 型における `::view-transition-new(image)` アニメーションの場合、古いコンテンツが画面外へスライドし完了するまで、新しいコンテンツが画面上部からスライドして入ってくるのを遅らせるため、{{cssxref("animation-delay")}} の値を `0.6s` に設定しています。この場合、両方が重なってしまうと不自然に見えるからです。

このスタイルシートのさらに下の方で、すべてのグループ内のすべてのアニメーションの {{cssxref("animation-duration")}} を `0.6s` に設定しています。これが、先ほど設定した遅延が `0.6s` だった理由です。

```css
::view-transition-group(*) {
  animation-duration: 0.6s;
}
```

> [!NOTE]
> 簡潔にするため、以上で参照したアニメーションの {{cssxref("@keyframes")}} 定義コードをすべて表示させておりません。これらは[ソースコード](https://github.com/mdn/dom-examples/tree/main/view-transitions/spa-gallery-transition-types)で確認できます。

## `@view-transition` を使用した、文書間をまたぐビュー遷移における型の活用

文書をまたいだビュー遷移に異なる型を適用するには、{{cssxref("@view-transition")}} アットルールの [`types`](/ja/docs/Web/CSS/Reference/At-rules/@view-transition#types) 記述子に、カンマで区切った 1 つ以上の型を指定します。

例えば、[MPA 遷移型の例](https://mdn.github.io/dom-examples/view-transitions/mpa-chapter-nav-transition-types/)では、共有スタイルシート内の `@view-transition` アットルールは次のような形になっています。

```css
@view-transition {
  navigation: auto;
  types: slide;
}
```

CSS では、SPA の例で行ったのと同じように、アクティブなビュー遷移に適用されるアニメーションを、その型に基づいてカスタマイズすることが可能です。

```css
html:active-view-transition-type(slide) {
  :root {
    view-transition-name: none;
  }
  section {
    view-transition-name: chapter;
  }
  &::view-transition-old(chapter) {
    animation-name: slide-out-to-left;
  }
  &::view-transition-new(chapter) {
    animation-name: slide-in-from-right;
  }
}
```

ここでは、アクティブなビュー遷移の `type` が `slide` の場合、`:active-view-transition-type(slide)` セレクターを使用していくつかのスタイルを適用します。`:root` 要素に `view-transition-name` として `none` を適用してスナップショットのキャプチャを停止し、その後、ページ `<section>` の要素に `view-transition-name` として `chapter` を設定して上書きします。これは、ビュー遷移を適用したい文書内での唯一の部分です。

次に、`::view-transition-old(chapter)` と `::view-transition-new(chapter)` を使用して、ページ間の遷移時に `<section>` に独自のアニメーションを適用します。

## `pageswap` および `pagereveal` イベントを使用して異なる文書間を移動

以上は問題なく動作しますが、理想的とは言えません。新しいページに移動すると、古いページのコンテンツは常に左側に消え、新しいページのコンテンツは常に右側から現れます。このアニメーションは、後の章に移動する際には問題ありませんが、（少なくとも英語のような左書きの言語のユーザーにとっては）前の章に移動する際には直感に反するように感じられます。後の章から前の章へ移動する場合は、アニメーションの方向を逆にした方が良いでしょう。

ナビゲーションの種類に応じて、アクティブなビュー遷移に異なる型を適用するには、対応する `ViewTransition` オブジェクトの {{domxref("ViewTransition.types", "types")}} プロパティを操作する必要があります。これは以下の場所で利用できます。

- ページから出ていく場合の {{domxref("Window.pageswap_event", "pageswap")}} イベントオブジェクトの {{domxref("PageSwapEvent.viewTransition")}} プロパティ
- ページに入ってくる場合の {{domxref("Window.pagereveal_event", "pagereveal")}} イベントオブジェクトの {{domxref("PageSwapEvent.viewTransition")}} プロパティ

[MPAの複数のトランジション型の例](https://mdn.github.io/dom-examples/view-transitions/mpa-chapter-nav-multiple-transition-types/)では、この手法を使用する方法を示しています。これは前回の例と似ていますが、いくつかの顕著な違いがあります。これについては下記で説明します。

### JavaScript でアニメーションの種類を判別

共有されている JavaScript ファイルを見てみましょう。まず、独自の関数 `determineTransitionType()` を定義します。この関数は、移動元のページと移動先のページのURLを調べ、それに基づいてナビゲーションの種類が `backwards`（前の章へ移動）か `forwards`（後の章へ移動）かを判定します。

各章のページには連番が名前付きで付けられています（`index.html`、そして `index2.html`、`index3.html` など）。そのため、ファイル名に含まれる数値を比較することで、ナビゲーションが「逆方向」（移動先のページ番号が移動元のページ番号より大きい場合）か「順方向」（移動先のページ番号が移動元のページ番号より小さい場合）かを確認します。

適用する型を決定するために使用するコードは、プロジェクトによって異なります。下記コードの動作を説明する詳細なコメントは、[ソースコード](https://github.com/mdn/dom-examples/tree/main/view-transitions/mpa-chapter-nav-multiple-transition-types)で確認できます。

```js
const determineTransitionType = (oldNavigationEntry, newNavigationEntry) => {
  const currentURL = oldNavigationEntry.url;
  const destinationURL = newNavigationEntry.url;

  function determinePageIndex(url) {
    const array = url.split("/");
    const slug = array[array.length - 1];
    if (slug.indexOf("html") === -1) {
      return 0;
    }
    const pageIndex = slug.replace("index", "").replace(".html", "");
    if (pageIndex === "") {
      return 0;
    }
    return parseInt(pageIndex, 10);
  }

  const currentPageIndex = determinePageIndex(currentURL);
  const destinationPageIndex = determinePageIndex(destinationURL);

  if (currentPageIndex > destinationPageIndex) {
    return "backwards";
  } else if (currentPageIndex < destinationPageIndex) {
    return "forwards";
  }
};
```

次に、{{domxref("Window.pageswap_event", "pageswap")}} イベントリスナーを使用して、遷出するページの遷移型を設定します。イベントハンドラー関数内では、イベントオブジェクトの {{domxref("PageSwapEvent.activation", "activation")}} プロパティから古いナビゲーション項目と新しいナビゲーション項目を取得し、これらを `determineTransitionType()` 関数に渡して型を判定した後、{{domxref("ViewTransition.types")}} プロパティの `add()` メソッドを使用して、その型をビュー遷移に割り当てます。

```js
window.addEventListener("pageswap", async (e) => {
  const transitionType = determineTransitionType(
    e.activation.from,
    e.activation.entry,
  );

  console.log(`pageSwap: ${transitionType}`);
  e.viewTransition.types.add(transitionType);
});
```

最後に、{{domxref("Window.pagereveal_event", "pagereveal")}} イベントリスナーを使用して、表示されるページの遷移型を指定します。イベントハンドラー関数内では、{{domxref("Navigation.activation")}} プロパティから古いナビゲーション項目と新しいナビゲーション項目を取得し、これらを `determineTransitionType()` 関数に渡して遷移型を判定します。その型を {{domxref("ViewTransition.types")}} プロパティの `add()` メソッドを使用してビュー遷移に割り当てるのですが、型が未定義になった場合は、その手順をスキップします。

```js
window.addEventListener("pagereveal", async (e) => {
  const transitionType = determineTransitionType(
    navigation.activation.from,
    navigation.activation.entry,
  );

  console.log(`pageReveal: ${transitionType}`);
  if (transitionType !== undefined) {
    e.viewTransition.types.add(transitionType);
  }
});
```

> [!NOTE]
> `determineTransitionType()` 関数は、`backwards` 条件も `forwards` 条件も真でない場合、`undefined` を返すことがあります。これは、ユーザーがページを再読み込みした場合に発生する可能性があります。その場合、現在のページと出力先のページは同一であるため、インデックス値も同じになります。

### CSS での独自のアニメーションの適用

これで、ナビゲーションの種類に応じてアクティブなビュー遷移に適切なスタイルが適用されるようになりました。前回の例と同様に、CSS で種類ごとに異なるアニメーションを設定することができます。

```css
html:active-view-transition {
  nav {
    view-transition-name: none;
  }
  section {
    view-transition-name: chapter;
  }
}

html:active-view-transition-type(forwards) {
  &::view-transition-old(chapter) {
    animation-name: slide-out-to-left;
  }
  &::view-transition-new(chapter) {
    animation-name: slide-in-from-right;
  }
}

html:active-view-transition-type(backwards) {
  &::view-transition-old(chapter) {
    animation-name: slide-out-to-right;
  }
  &::view-transition-new(chapter) {
    animation-name: slide-in-from-left;
  }
}
```

また、共有 CSS 内の `@view-transition` アットルールから `types` 記述子を除去した点にも注意してください。文書間のビュー遷移をすることができるには `navigation` 記述子が必要ですが、型は JavaScript で処理しているため、ここでは設定する必要がありません。

```css
@view-transition {
  navigation: auto;
}
```

## 関連情報

- [ビュー遷移 API](/ja/docs/Web/API/View_Transition_API)
- [Handle multiple view transition styles with view transition types (SPA)](https://developer.chrome.com/docs/web-platform/view-transitions/same-document#view-transition-types) - developer.chrome.com (2024)
- [View transition types in cross-document view transitions](https://developer.chrome.com/docs/web-platform/view-transitions/cross-document#view-transition-types) - developer.chrome.com (2024)
