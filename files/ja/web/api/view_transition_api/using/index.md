---
title: ビュー遷移 API の使用
slug: Web/API/View_Transition_API/Using
l10n:
  sourceCommit: daa0f08c15e7626dd089a011b310a94db99dbfc1
---

{{DefaultAPISidebar("View Transition API")}}

この記事では、[ビュー遷移 API](/ja/docs/Web/API/View_Transition_API) がどのように動作するのか、ビュー遷移を作成し、遷移アニメーションをカスタマイズする方法、アクティブなビュー遷移を操作する方法についての理論を説明します。単一ページアプリケーション (SPA) における DOM 状態の更新と、複数ページアプリケーション (MPA) における文書間の移動の両方におけるビュー遷移をカバーしています。

### ビュー遷移のプロセス

ビュー遷移が動作するプロセスを追ってみましょう。

1. ビュー遷移が発生します。どのように行われるかは、ビュー遷移の種類によって異なります。
   - 同一文書内 (SPA) の遷移の場合、ビュー遷移を発生させるには、ビューの変更と DOM の更新を実行する関数を、{{domxref("Document.startViewTransition()", "document.startViewTransition()")}} メソッドのコールバックとして渡します。
   - 文書間 (MPA) の遷移の場合、新しい文書への移動を開始するとビュー遷移が開始されます。移動元と移動先の文書はどちらも同じオリジンに存在する必要があり、CSS に {{cssxref("@view-transition")}} アットルールを記述し、`navigation` 記述子を `auto` に設定することで、ビュー遷移に同意する必要があります。
     > [!NOTE]
     > アクティブなビュー遷移は、関連する {{domxref("ViewTransition")}} インスタンスを保有しています（例えば、同一文書内 (SPA) の遷移の場合、`startViewTransition()` によって返されます）。`ViewTransition` オブジェクトには、いくつかのプロミスが含まれており、ビュー遷移プロセスのさまざまな段階に到達した際に、それに対応するコードを実行することができます。 詳しくは、[JavaScript によるビュー遷移の制御](#javascript_によるビュー遷移の制御)を参照してください。
2. 現在の（古いページ）ビューでは、API は {{cssxref("view-transition-name")}} が宣言された要素のスナップショットを取得します。
3. ビューの変更が発生します。

   - 同一文書内 (SPA) の遷移の場合、`startViewTransition()` に渡したコールバックが呼び出され、DOM の変更を行います。

     コールバックが正常に実行された場合、{{domxref("ViewTransition.updateCallbackDone")}} プロミスが履行され、DOM の更新に対応できます。

   - 文書間 (MPA) の遷移の場合、現在の文書と遷移先の文書間で移動します。

4. API は、新しいビューのスナップショットをライブ表示としてキャプチャします。

   この時点で、ビューの遷移が実行されようとしており、{{domxref("ViewTransition.ready")}} プロミスが履行されたため、例えば既定ではなく独自の JavaScript アニメーションを実行するなどして応答することができます。

5. 古いページのスナップショットは "out" アニメーションで、新しいビューのスナップショットは "in" アニメーションで表示されます。既定では、古いビューのスナップショットは `opacity` が 1 から 0 に、新しいビューのスナップショットは `opacity` が 0 から 1 にアニメーションで変化して、クロスフェード効果になります。
6. 遷移アニメーションが終わりに達すると、{{domxref("ViewTransition.finished")}} プロミスが履行され、応答することができます。

> [!NOTE]
> 文書内の[ページの可視状態](/ja/docs/Web/API/Page_Visibility_API)が `hidden` の場合（例えば、文書がウィンドウの下に覆われていたり、ブラウザーが最小化されていたり、他のブラウザータブがアクティブになっている場合など）、{{domxref("Document.startViewTransition()", "document.startViewTransition()")}} を呼び出した際に、ビュー遷移は完全にスキップされます。

### ビュー遷移の擬似要素ツリー

流出および流入の遷移アニメーションを作成する処理を行うために、API は以下の構造で擬似要素ツリーを構築します。

```plain
::view-transition
└─ ::view-transition-group(root)
  └─ ::view-transition-image-pair(root)
      ├─ ::view-transition-old(root)
      └─ ::view-transition-new(root)
```

> **メモ:** {{cssxref("::view-transition-group")}} のサブツリーは、キャプチャされたそれぞれの `view-transition-name` ごとに作成されます。

同一文書内 (SPA) の遷移の場合、擬似要素ツリーは文書内で利用できます。異なる文書間 (MPA) の遷移の場合、擬似要素ツリーは出力先文書でのみ利用できます。

ツリー構造の最も特徴的な部分は以下の通りです。

- {{cssxref("::view-transition")}} はビュー遷移オーバーレイのルートであり、すべてのビュー遷移のスナップショットグループを格納し、他のすべてのページコンテンツの上に位置します。
- {{cssxref("::view-transition-group")}} は、各ビュー遷移のスナップショットグループのコンテナーとして機能します。引数 `root` は既定のスナップショットグループを指定し、ビュー遷移アニメーションは `view-transition-name` が `root` であるスナップショットに適用されます。 既定では、これは {{cssxref(":root")}} 要素です。これは、既定のブラウザーのスタイル設定がこれを定義しているためです。

  ```css
  :root {
    view-transition-name: root;
  }
  ```

  ただし、ページの作成者は、上記の設定を解除し、別の要素に `view-transition-name: root` を設定することで、これを変更できることに注意してください。

- {{cssxref("::view-transition-old")}} は古いページ要素の静的なスナップショットを対象とし、{{cssxref("::view-transition-new")}} は新しいページ要素の動的なスナップショットを対象とします。どちらも、{{htmlelement("img")}} や {{htmlelement("video")}} と同様に置換コンテンツとしてレンダリングされるため、{{cssxref("object-fit")}} や {{cssxref("object-position")}} などの便利なプロパティでスタイル設定できるということです。

> [!NOTE]
> 異なるカスタムビュー遷移アニメーションを異なる DOM 要素に適用することは可能です。各要素に異なる {{cssxref("view-transition-name")}} を設定することで、異なるアニメーションを適用できます。このような場合、各要素に対して `::view-transition-group` が作成されます。例えば、異なる要素に異なるアニメーションを適用する方法については、[さまざまな要素に対する様々なアニメーション](#さまざまな要素に対する様々なアニメーション)を参照してください。

> [!NOTE]
> 後ほど説明しますが、流出と流入のアニメーションをカスタマイズするには、それぞれ {{cssxref("::view-transition-old")}} および {{cssxref("::view-transition-new")}} 擬似要素をアニメーションの対象とする必要があります。

## 基本的なビュー遷移の作成

この章では、SPA と MPA のどちらの場合でも、基本的なビュー遷移を作成する方法を示します。

### 基本的な SPA ビュー遷移

例えば、SPA には、新しいコンテンツを取得し、ナビゲーションリンクがクリックされたり、サーバーから更新がプッシュされたりといった何らかのイベントに応答して DOM を更新する機能などを盛り込むことができます。[SPA のビュー遷移のデモ](https://mdn.github.io/dom-examples/view-transitions/spa/)では、この処理を、クリックされたサムネイルに基づいて新しいフルサイズの画像を表示させる `displayNewImage()` 関数に単純化しています。 また、この処理を `updateView()` 関数内にカプセル化し、ブラウザーが対応している場合にのみビュー遷移 API を呼び出すようにしています。

```js
function updateView(event) {
  // イベントが発行されたのが <a> と <img> のどちらなのかの違いを処理
  const targetIdentifier = event.target.firstChild || event.target;

  const displayNewImage = () => {
    const mainSrc = `${targetIdentifier.src.split("_th.jpg")[0]}.jpg`;
    galleryImg.src = mainSrc;
    galleryCaption.textContent = targetIdentifier.alt;
  };

  // ビュー遷移に未対応のブラウザー用の代替処理
  if (!document.startViewTransition) {
    displayNewImage();
    return;
  }

  // ビュー遷移の場合
  const transition = document.startViewTransition(() => displayNewImage());
}
```

このコードで、表示されている画像間の遷移を十分に処理できます。対応しているブラウザーでは、古い画像から新しい画像、キャプションへの変更がスムーズなクロスフェード(既定の表示遷移)で表示されます。これは、対応していないブラウザーでも動作しますが、素敵なアニメーションは表示されません。

### 基本的な MPA ビュー遷移

文書間 (MPA) のビュー遷移を作成する際には、SPA の場合よりもさらに処理が簡単になります。JavaScript は必要ありません。ビューの更新は、JavaScript による DOM の変更ではなく、文書間、同一オリジン内の移動によって発生するためです。基本的な MPA ビュー遷移を有効にするには、現在の文書と出力先の文書のどちらもオプトインするように、CSS で {{cssxref("@view-transition")}} アットルールを指定する必要があります。

```css
@view-transition {
  navigation: auto;
}
```

当社の [MPA のビュー遷移のデモ](https://mdn.github.io/dom-examples/view-transitions/mpa/)では、このアットルールを実際に表示させ、さらに、ビュー遷移の[流出および流入のアニメーションをカスタマイズ](#アニメーションのカスタマイズ)する方法を示しています。

> [!NOTE]
> 現在、MPA のビュー遷移は同一オリジン文書間でしか作成できませんが、将来的な実装ではこの制限が緩和される可能性があります。

## アニメーションのカスタマイズ

ビュー遷移の擬似要素は、既定で [CSS アニメーション](/ja/docs/Web/CSS/CSS_animations)が設定されています。（詳細は[リファレンスページ](/ja/docs/Web/API/View_Transition_API#擬似要素)を参照）。

ほとんどの外観の遷移には、前述のとおり、既定でスムーズなクロスフェードのアニメーションが指定されています。ただし、例外もあります。

- `height` と `width` の遷移には、スムーズな拡大縮小アニメーションが適用されます。
- `position` と `transform` の遷移には、スムーズな動きのアニメーションが適用されます。

既定のアニメーションは、通常の CSS を使用して好きなように変更することができます。"from" アニメーションを対象とするには {{cssxref("::view-transition-old")}} を、"to" アニメーションを対象とするには {{cssxref("::view-transition-new")}} を使用します。

例えば、両方の速度を変更するには、次のようにします。

```css
::view-transition-old(root),
::view-transition-new(root) {
  animation-duration: 0.5s;
}
```

`::view-transition-group()` を対象として `::view-transition-old()` と `::view-transition-new()` にスタイルを適用することをお勧めします。擬似要素の階層と既定のユーザーエージェントスタイル設定により、どちらもスタイルが継承されます。例えば次のようにします。

```css
::view-transition-group(root) {
  animation-duration: 0.5s;
}
```

> [!NOTE]
> これは、コードを保護するのにも良いオプションです。`::view-transition-group()` もアニメーションするので、 `group`/`image-pair` 擬似要素と `old` および `new` 擬似要素で再生時間が異なるという結果になる可能性があります。

文書間 (MPA) 遷移の場合、ビュー遷移が機能するには、擬似要素を出力先文書にも記載する必要があります。双方向でビュー遷移を使用したい場合は、もちろんどちらにも記載する必要があります。

私たちの [MPA のビュー遷移のデモ](https://mdn.github.io/dom-examples/view-transitions/mpa/)では、上記の CSS を含んでいますが、カスタマイズをさらに一歩進め、カスタムアニメーションを定義し、それを `::view-transition-old(root)` および `::view-transition-new(root)` 擬似要素に適用しています。その結果、ナビゲーションが発生すると、既定のクロスフェード遷移が「スワイプアップ」遷移に置き換わります。

```css
/* 独自アニメーションの作成 */

@keyframes move-out {
  from {
    transform: translateY(0%);
  }

  to {
    transform: translateY(-100%);
  }
}

@keyframes move-in {
  from {
    transform: translateY(100%);
  }

  to {
    transform: translateY(0%);
  }
}

/* 新旧のページの状態にカスタムアニメーションを適用 */

::view-transition-old(root) {
  animation: 0.4s ease-in both move-out;
}

::view-transition-new(root) {
  animation: 0.4s ease-in both move-in;
}
```

## さまざまな要素に対する様々なアニメーション

既定では、ビューの更新中に変更されるそれぞれの要素はすべて、同じアニメーションを使用して遷移します。 既定の `root` アニメーションとは異なるアニメーションを適用したい要素がある場合は、{{cssxref("view-transition-name")}} プロパティを使用してそれらを分離することができます。 例えば、[SPA のビュー遷移のデモ](https://mdn.github.io/dom-examples/view-transitions/spa/)では、{{htmlelement("figcaption")}} 要素に `view-transition-name` として `figure-caption` が指定され、ビュー遷移の観点からページの他の部分と区別されています。

```css
figcaption {
  view-transition-name: figure-caption;
}
```

この CSS を適用すると、生成された擬似要素ツリーはこのようになります。

```plain
::view-transition
├─ ::view-transition-group(root)
│ └─ ::view-transition-image-pair(root)
│     ├─ ::view-transition-old(root)
│     └─ ::view-transition-new(root)
└─ ::view-transition-group(figure-caption)
  └─ ::view-transition-image-pair(figure-caption)
      ├─ ::view-transition-old(figure-caption)
      └─ ::view-transition-new(figure-caption)
```

2 つ目の疑似要素を設定することで、`<figcaption>` だけに別個のビュー遷移スタイル設定を適用することができます。 異なる古いビューと新しいビューは、それぞれ別個に処理されます。

> **メモ:** `view-transition-name` の値は、`none` を除いて何らかの値にすることができます。`none` の値は、特定の要素がビュー遷移に参加しないということを意味しています。
>
> `view-transition-name` の値も固有のものでなければなりません。 レンダリングされた要素が同時に同じ `view-transition-name` を保有している場合、{{domxref("ViewTransition.ready")}} が拒否され、遷移がスキップされます。

以下のコードは `<figcaption>` だけに独自のアニメーションを適用します。

```css
@keyframes grow-x {
  from {
    transform: scaleX(0);
  }
  to {
    transform: scaleX(1);
  }
}

@keyframes shrink-x {
  from {
    transform: scaleX(1);
  }
  to {
    transform: scaleX(0);
  }
}

::view-transition-group(figure-caption) {
  height: auto;
  right: 0;
  left: auto;
  transform-origin: right center;
}

::view-transition-old(figure-caption) {
  animation: 0.25s linear both shrink-x;
}

::view-transition-new(figure-caption) {
  animation: 0.25s 0.25s linear both grow-x;
}
```

ここでは、独自の CSS アニメーションを作成し、それを `::view-transition-old(figure-caption)` および `::view-transition-new(figure-caption)` 擬似要素に適用しています。 また、どちらも同じ位置に維持し、既定のスタイルが独自のアニメーションに干渉しないように、他にもいくつかのスタイルを追加しています。

> [!NOTE]
> 擬似要素の識別子として `*` を使用すると、名前に関係なく、すべてのスナップショット擬似要素を対象とすることができます。例えば、次のようにします。
>
> ```css
> ::view-transition-group(*) {
>   animation-duration: 2s;
> }
> ```

### 既定のアニメーションスタイルの利点

なお、よりシンプルで、より良い結果をもたらす別の遷移オプションも発見しました。最終的な `<figcaption>`ビュー遷移は、以下のような形になりました。

```css
figcaption {
  view-transition-name: figure-caption;
}

::view-transition-group(figure-caption) {
  height: 100%;
}
```

これはうまく動作します。既定では、`::view-transition-group` が、古いビューと新しいビューの間でスムーズに変倍しながら、`width` と `height` を移行させるからです。どちらの状態でも `height` を固定して設定するだけで、うまくいくようになりました。

> **メモ:** [Smooth and simple transitions with the View Transitions API](https://developer.chrome.com/docs/web-platform/view-transitions/) には、他にもいくつかのカスタマイズ例があります。

## JavaScript によるビュー遷移の制御

ビュー遷移には、{{domxref("ViewTransition")}} オブジェクトのインスタンスが関連付けられており、このオブジェクトには、遷移のさまざまな状態に到達した際に JavaScript を実行できるようにするプロミスメンバーがいくつかあります。例えば、{{domxref("ViewTransition.ready")}} は、擬似要素ツリーが作成され、アニメーションが開始されると履行され、 {{domxref("ViewTransition.finished")}} は、アニメーションが終了し、新しいページビューがユーザーに対して表示され、操作可能になると履行されます。

`ViewTransition` には次のようにアクセスできます。

1. 同一文書内 (SPA) の遷移の場合、{{domxref("Document.startViewTransition()", "document.startViewTransition()")}} メソッドが遷移に関連付けられた `ViewTransition` を返します。
2. 文書間 (MPA) の遷移の場合は、次のようになります。

   - ナビゲーションにより文書がアンロードされようとするときに、{{domxref("Window.pageswap_event", "pageswap")}} イベントが発行されます。イベントオブジェクト ({{domxref("PageSwapEvent")}}) は、`ViewTransition` に{{domxref("PageSwapEvent.viewTransition")}} プロパティからアクセスできるほか、ナビゲーションの種類と現在の文書および移動先文書の履歴項目を含む {{domxref("NavigationActivation")}} にも {{domxref("PageSwapEvent.activation")}} からアクセスできます。
     > [!NOTE]
     > ナビゲーションのリダイレクトチェーンのどこかにオリジンをまたいだ URL がある場合、`activation` プロパティは `null` を返します。
   - ページが最初にレンダリングされると、{{domxref("Window.pagereveal_event", "pagereveal")}} イベントが発生します。これは、ネットワークから新しい文書を読み込んだ場合、または（[バック/フォワードキャッシュ](/ja/docs/Glossary/bfcache) (bfcache) または[事前レンダリング](/ja/docs/Glossary/Prerender)）文書をアクティブにした場合です。イベントオブジェクト ({{domxref("PageRevealEvent")}}) は、`ViewTransition` に {{domxref("PageRevealEvent.viewTransition")}} プロパティを介してアクセスできます。

これらの機能がどのように使用できるかを示すために、いくつかのコード例を見ていきましょう。

### JavaScript を活用した独自の文書内 (SPA) 遷移

以下の JavaScript を使用することで、クリック時にユーザーのカーソル位置から円形の「リベール」ビュー遷移を作成することができます。{{domxref("Web Animations API", "ウェブアニメーション API", "", "nocode")}} で指定されたアニメーションが提供されます。

```js
// 最後のクリックイベントを格納
let lastClick;
addEventListener("click", (event) => (lastClick = event));

function spaNavigate(data) {
  // この API に対応していないブラウザー用の代替処理
  if (!document.startViewTransition) {
    updateTheDOMSomehow(data);
    return;
  }

  // クリック位置を取得し、失敗時は画面の中央にする
  const x = lastClick?.clientX ?? innerWidth / 2;
  const y = lastClick?.clientY ?? innerHeight / 2;
  // 最も遠い角までの距離を取得
  const endRadius = Math.hypot(
    Math.max(x, innerWidth - x),
    Math.max(y, innerHeight - y),
  );

  // 遷移を作成
  const transition = document.startViewTransition(() => {
    updateTheDOMSomehow(data);
  });

  // 擬似要素が作成されるまで待つ
  transition.ready.then(() => {
    // ルート要素の新しいビューをアニメーション
    document.documentElement.animate(
      {
        clipPath: [
          `circle(0 at ${x}px ${y}px)`,
          `circle(${endRadius}px at ${x}px ${y}px)`,
        ],
      },
      {
        duration: 500,
        easing: "ease-in",
        // Specify which pseudo-element to animate
        pseudoElement: "::view-transition-new(root)",
      },
    );
  });
}
```

このアニメーションでは、以下の CSS も必要となります。これは、既定の CSS アニメーションを無効にし、新旧のビューの状態が混ざり合うのを防ぐためです（遷移ではなく新しい状態が古い状態の上に「ワイプ」されるようになります）。

```css
::view-transition-image-pair(root) {
  isolation: auto;
}

::view-transition-old(root),
::view-transition-new(root) {
  animation: none;
  mix-blend-mode: normal;
  display: block;
}
```

### JavaScript を活用した独自の文書間 (MPA) 遷移

[List of Chrome DevRel team members](https://view-transitions.netlify.app/profiles/mpa/) のデモでは、チームのプロフィールページの基本設定を提供し、{{domxref("Window.pageswap_event", "pageswap")}} および {{domxref("Window.pagereveal_event", "pagereveal")}} イベントを使用して、"from" と "to" の URL に基づいて、文書間ビュー遷移における流出・流入アニメーションをカスタマイズする方法を説明しています。

{{domxref("Window.pageswap_event", "pageswap")}} イベントのリスナーは次のようになります。これにより、プロフィールページにリンクする、流出ページ上の要素にビュー遷移の名前が設定されます。ホームページからプロフィールページに移動する際、クリックされたリンク要素に対してのみ、独自のアニメーションが指定されます。

```js
window.addEventListener("pageswap", async (e) => {
  // アクティブなビュー遷移が存在する場合のみ実行
  if (e.viewTransition) {
    const currentUrl = e.activation.from?.url
      ? new URL(e.activation.from.url)
      : null;
    const targetUrl = new URL(e.activation.entry.url);

    // プロフィールページからホームページへ移動
    // ~> 大きな画像とタイトルが一時一度に表示される
    if (isProfilePage(currentUrl) && isHomePage(targetUrl)) {
      // アニメーションさせる要素に view-transition-name の値を設定
      document.querySelector(`#detail main h1`).style.viewTransitionName =
        "name";
      document.querySelector(`#detail main img`).style.viewTransitionName =
        "avatar";

      // スナップショットが撮影された後、ビュー遷移名を除去する
      // BFCache にページの状態が維持されることによる名前の競合を防止する
      await e.viewTransition.finished;
      document.querySelector(`#detail main h1`).style.viewTransitionName =
        "none";
      document.querySelector(`#detail main img`).style.viewTransitionName =
        "none";
    }

    // Going to profile page
    // ~> The clicked items are the ones!
    if (isProfilePage(targetUrl)) {
      const profile = extractProfileNameFromUrl(targetUrl);

      // アニメーションさせる要素に view-transition-name の値を設定
      document.querySelector(`#${profile} span`).style.viewTransitionName =
        "name";
      document.querySelector(`#${profile} img`).style.viewTransitionName =
        "avatar";

      // スナップショットが撮影された後、ビュー遷移名を除去する
      // BFCache にページの状態が維持されることによる名前の競合を防止する
      await e.viewTransition.finished;
      document.querySelector(`#${profile} span`).style.viewTransitionName =
        "none";
      document.querySelector(`#${profile} img`).style.viewTransitionName =
        "none";
    }
  }
});
```

> **メモ:** `view-transition-name` の値は、それぞれの場合でスナップショットが取得された後に除去します。 設定したままにしておくと、ナビゲーションの際に [bfcache](/ja/docs/Glossary/bfcache) に保存されるページの状態に保存されてしまいます。 その後、戻るボタンが押されると、ナビゲーション前のページの `pagereveal` イベントハンドラーが、異なる要素に対して同じ `view-transition-name` の値を設定しようと試みます。 複数の要素に同じ `view-transition-name` 設定されている場合、ビュー遷移はスキップされます。

{{domxref("Window.pagereveal_event", "pagereveal")}} イベントのリスナーは、以下のようにします。これは、`pageswap` イベントリスナーと似た方法で動作しますが、新しいページのページ要素に対して "to" アニメーションをカスタマイズしていることに留意してください。

```js
window.addEventListener("pagereveal", async (e) => {
  // "from" 履歴項目が存在しない場合は、戻る
  if (!navigation.activation.from) return;

  // アクティブなビュー遷移が存在する場合のみ実行
  if (e.viewTransition) {
    const fromUrl = new URL(navigation.activation.from.url);
    const currentUrl = new URL(navigation.activation.entry.url);

    // プロフィールページからホームページに移動
    // ~> VT 名を関連するリストアイテムに設定
    if (isProfilePage(fromUrl) && isHomePage(currentUrl)) {
      const profile = extractProfileNameFromUrl(fromUrl);

      // アニメーションさせる要素に view-transition-name の値を設定
      document.querySelector(`#${profile} span`).style.viewTransitionName =
        "name";
      document.querySelector(`#${profile} img`).style.viewTransitionName =
        "avatar";

      // スナップショットが撮影された後に名前を除去する
      // そのため、次のナビゲーションに備えることができる
      await e.viewTransition.ready;
      document.querySelector(`#${profile} span`).style.viewTransitionName =
        "none";
      document.querySelector(`#${profile} img`).style.viewTransitionName =
        "none";
    }

    // プロフィールページへ移動した
    // ~> メインタイトルと画像に VT 名を追加
    if (isProfilePage(currentUrl)) {
      // アニメーションさせる要素に view-transition-name の値を設定
      document.querySelector(`#detail main h1`).style.viewTransitionName =
        "name";
      document.querySelector(`#detail main img`).style.viewTransitionName =
        "avatar";

      // スナップショットが撮影された後に名前を除去する
      // そのため、次のナビゲーションに備えることができる
      await e.viewTransition.ready;
      document.querySelector(`#detail main h1`).style.viewTransitionName =
        "none";
      document.querySelector(`#detail main img`).style.viewTransitionName =
        "none";
    }
  }
});
```

## ページの状態を安定化させ、文書間の遷移を一貫性のあるものにする

文書間の遷移を実行する前に、[レンダーブロック](/ja/docs/Glossary/Render_blocking)を利用してページの状態が安定するまで待つのが理想的です。

1. 重要なスタイルが読み込まれ、適用されます。
2. 重要なスクリプトが読み込まれ、実行されます。
3. ユーザーが最初にページを表示した際に目にする HTML は解釈できるので、一貫した表示が可能です。

スタイルは既定ではレンダーブロックされ、スクリプトは [`blocking="render"`](/ja/docs/Web/HTML/Element/script#blocking) 属性を使用してレンダーブロックすることができます。

遷移アニメーションが実行される前に、初期の HTML が確実に解析され、常に一貫したレンダリングが行われることを保証するには、[`<link rel="expect">`](/ja/docs/Web/HTML/Attributes/rel#expect) を使用することができます。この要素には、以下の属性を含めることができます。

- `rel="expect"` は、この `<link>` 要素を使用して、ページ上の HTML をレンダーブロックすることを示します。
- `href="#element-id"` は、レンダーブロックしたい要素の ID を示します。
- `blocking="render"` は、指定された HTML のレンダーブロックをします。

この例を単純な例の HTML 文書で見ていきましょう。

```html-nolint
<!doctype html>
<html lang="ja">
  <head>
    <!-- これは既定でレンダーブロックされる -->
    <link rel="stylesheet" href="style.css" />

    <!-- 重要なスクリプトをレンダーブロックとしてマークすると、
         ビュー遷移が有効化される前に確実に実行されるよう保証される -->
    <script async href="layout.js" blocking="render"></script>

    <!-- rel="expect" およびお blocking="render" を使用して、
         "#lead-content" 要素が確実に表示され、完全に解釈できる状態に
         したまま、遷移を起動する -->
    <link rel="expect" href="#lead-content" blocking="render" />
  </head>
  <body>
    <h1>Page title</h1>
    <nav>...</nav>
    <div id="lead-content">
      <section id="first-section">最初の節</section>
      <section>二番目の節</section>
    </div>
  </body>
</html>
```

その結果、リードコンテンツである `<div>` が解釈できるまで、文書内のレンダリングがブロックされ、一貫したビュー遷移を保証できます。

また、 [`media`](/ja/docs/Web/HTML/Element/link#media) 属性を `<link rel="expect">` 要素に指定することもできます。例えば、画面が狭い端末でページを読み込んだ際には、広い画面の端末で読み込む場合よりも、コンテンツのレンダリングをブロックしたい場合があるかもしれません。これは理にかなっています。モバイル端末では、デスクトップの場合よりも、ページが最初に読み込まれた際にはコンテンツが少なく表示されるからです。

これは、次の HTML で実現できます。

```html
<link
  rel="expect"
  href="#lead-content"
  blocking="render"
  media="screen and (min-width: 641px)" />
<link
  rel="expect"
  href="#first-section"
  blocking="render"
  media="screen and (max-width: 640px)" />
```
