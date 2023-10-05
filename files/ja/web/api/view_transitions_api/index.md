---
title: ビュートランジション API
slug: Web/API/View_Transitions_API
l10n:
  sourceCommit: 6d4b6a0f9df94de158c373d6b08c504caafcee5f
---

{{SeeCompatTable}}{{DefaultAPISidebar("View Transitions API")}}

**ビュートランジション API** は、異なる DOM 状態間のアニメーション遷移を簡単に作成する仕組みを提供し、同時に DOM コンテンツも単一の手順で更新します。

## 概念と使い方

ビュートランジションは、ユーザーがアプリケーションの状態またはビューの間を移動する際に、ユーザーの認知的負荷を縮小し、コンテキストにとどまることを支援し、読み込み待ちの知覚時間を短縮するための有力な設計の選択肢です。

しかし、ウェブ上でビュートランジションを作成するのは、過去には困難なことでした。単一のページアプリ (SPA) で状態間の遷移を行うには、かなりの CSS と JavaScript を書かなければならない傾向があります。

- 古いコンテンツと新しいコンテンツの読み込みと位置決めを処理します。
- 古い状態と新しい状態をアニメーション化して、トランジションを作成します。
- 古いコンテンツを誤ってユーザーが操作して問題が発生しないようにします。
- トランジションが完了したら、古いコンテンツを除去します。

また、新しいコンテンツと古いコンテンツが同時に DOM に存在することで、読み上げ位置の喪失、フォーカスの混乱、奇妙なライブ領域のアナウンス動作といったアクセシビリティの課題も生じます。さらに、文書間の（つまり、 SPA ではない通常のウェブサイトの異なるページ間の）ビュートランジションは不可能です。

ビュートランジション API は、要求される DOM の変更とトランジションアニメーションをより簡単に処理する方法を提供します。

> **メモ:** ビュートランジション API は、現在のところ文書間のビュートランジションを可能にするものではありませんが、これは将来の仕様レベルで計画されており、活発に作業されています。

### 基本的なビュートランジションの作成

例えば、ナビゲーションリンクがクリックされたり、サーバーから更新がプッシュされたりといった何らかのイベントに応答して、新しいコンテンツを取得して DOM を更新する機能を SPA に含めることができます。この[基本的なビュートランジションのデモ](https://mdn.github.io/dom-examples/view-transitions/)では、クリックされたサムネイルに基づいて新しいフルサイズの画像を表示する `displayNewImage()` 関数に単純化しました。これを `updateView()` 関数内にカプセル化し、ブラウザーの対応している場合にのみビュートランジション API を呼び出すようにしています。

```js
function updateView(event) {
  // <a> と <img> のどちらにイベントが発生するかの違いを扱う
  const targetIdentifier = event.target.firstChild || event.target;

  const displayNewImage = () => {
    const mainSrc = `${targetIdentifier.src.split("_th.jpg")[0]}.jpg`;
    galleryImg.src = mainSrc;
    galleryCaption.textContent = targetIdentifier.alt;
  };

  // ビュートランジションに対応していないブラウザー用のフォールバック
  if (!document.startViewTransition) {
    displayNewImage();
    return;
  }

  // ビュートランジションで
  const transition = document.startViewTransition(() => displayNewImage());
}
```

このコードだけで表示画像の切り替えを処理することができます。対応しているブラウザーでは、古い画像から新しい画像とキャプションへの変更をスムーズなクロスフェード（ビュートランジションの既定値）として表示させます。対応していないブラウザーでも動作しますが、アニメーションは表示されません。

`startViewTransition()` は {{domxref("ViewTransition")}} インスタンスを返しますが、このインスタンスにはいくつかのプロミスが含まれており、ビュートランジションプロセスの異なる部分に到達するためにコードを実行することができます。

### ビュートランジションのプロセス

これがどのように動作するのかを見ていきましょう。

1. {{domxref("Document.startViewTransition()", "document.startViewTransition()")}} が呼び出されると、 API は現在のページのスクリーンショットを撮ります。
2. 次に `startViewTransition()` に渡したコールバック（この場合は `displayNewImage`）を呼び出し、これが DOM を変更します。

   コールバックが正常に実行されると、 {{domxref("ViewTransition.updateCallbackDone")}} のプロミスが履行され、 DOM の更新に応答できるようになります。

3. API はページの新しい状態をライブ表現として取り込みます。
4. API は以下のような構造の擬似要素ツリーを構築します。

   ```plain
   ::view-transition
   └─ ::view-transition-group(root)
      └─ ::view-transition-image-pair(root)
         ├─ ::view-transition-old(root)
         └─ ::view-transition-new(root)
   ```

   - {{cssxref("::view-transition")}} はビュートランジションオーバーレイのルートで、すべてのビュートランジションを収め、他のすべてのページコンテンツの上に配置されます。
   - {{cssxref("::view-transition-old")}} は古いページ表示のスクリーンショットで、 {{cssxref("::view-transition-new")}} は新しいページ表示のライブ表示です。どちらも {{htmlelement("img")}} や {{htmlelement("video")}} と同じように置換コンテンツとしてレンダリングされ、 {{cssxref("object-fit")}} や {{cssxref("object-position")}} のような便利なプロパティでスタイル設定できることを意味しています。

   トランジションアニメーションが実行されるとき、 {{domxref("ViewTransition.ready")}} プロミスが履行され、例えば既定のアニメーションではなく独自の JavaScript アニメーションを実行して対応することができます。

5. 古いページ表示の {{cssxref("opacity")}} を 1 から 0 へアニメーションさせる一方、新しい表示の `opacity` を 0 から 1 までアニメーションします。これは既定のクロスフェードを作成するものです。
6. トランジションアニメーションが終了状態に達すると、 {{domxref("ViewTransition.finished")}} プロミスが履行され、応答できるようになります。

### 要素ごとに異なるトランジション

現時点では、 DOM 更新時に変化する異なる要素はすべて同じアニメーションを使用してトランジションします。異なる要素を既定で「ルート」アニメーションとは異なる形でアニメーションさせたい場合は、 {{cssxref("view-transition-name")}} プロパティを使用してそれらを区切ることができます。例えば、以下のようにします。

```css
figcaption {
  view-transition-name: figure-caption;
}
```

{{htmlelement("figcaption")}} 要素に `figure-caption` という `view-transition-name` を指定したのは、ビュートランジションでページの他の部分と区別するためです。

この CSS を適用すると、擬似要素ツリーは次のようになります。

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

2 つ目の擬似要素が存在することで、 `<figcaption>` だけに別個のビュートランジションスタイル設定を適用することができます。異なる新旧のページビューのキャプチャは完全に別個のものとして処理されます。

`view-transition-name` の値は `none` 以外であれば何らかの値を指定することができます。`none` はその要素がビュートランジションに参加しないことを意味します。

> **メモ:** `view-transition-name` は一意でなければなりません。 2 つのレンダリング要素が同時に同じ `view-transition-name` がある場合、 {{domxref("ViewTransition.ready")}} は拒否され、トランジションはスキップされます。

### アニメーションのカスタマイズ

ビュートランジションの擬似要素には既定で [CSS アニメーション](/ja/docs/Web/CSS/CSS_animations)が適用されています（詳しくは[参照ページ](#css_の追加)を参照してください）。

特に、 `height`、`width`、`position`、`transform` のトランジションはスムーズなクロスフェードアニメーションを使用しません。その代わりに、height と width のトランジションでは拡大縮小するアニメーションが適用されます。一方、position と transform のトランジションは要素に滑らかな移動アニメーションを適用します。

既定のアニメーションは、通常の CSS を使用して自由に変更することができます。

例えば、そのスピードを変えるには次のようにします。

```css
::view-transition-old(root),
::view-transition-new(root) {
  animation-duration: 0.5s;
}
```

もっと面白いものを見ていきましょう。 `<figcaption>` のカスタムアニメーションです。

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

::view-transition-old(figure-caption),
::view-transition-new(figure-caption) {
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

ここでは、独自の CSS アニメーションを作成し、それを `::view-transition-old(figure-caption)` および `::view-transition-new(figure-caption)` 擬似要素に適用しています。他にも、同じ配置を維持し、既定値のスタイル設定がカスタムアニメーションの邪魔をしないようにするために、両方にスタイルを追加しています。

なお、上記よりもシンプルで、より良い結果をもたらす別のトランジションオプションも見つけました。最終的な `<figcaption>` のビュートランジションはこのようになりました。

```css
figcaption {
  view-transition-name: figure-caption;
}

::view-transition-old(figure-caption),
::view-transition-new(figure-caption) {
  height: 100%;
}
```

これは既定では `::view-transition-group` が古いビューと新しいビューの間で幅と高さを遷移させるのでうまくいきます。これはうまくいくために、両方の状態で固定された `height` を設定する必要がありました。

> **メモ:** [ビュートランジション API によるスムーズでシンプルなトランジション](https://developer.chrome.com/docs/web-platform/view-transitions/)には、いくつかの他のカスタマイズ例があります。

### JavaScript によるアニメーションの制御

{{domxref("Document.startViewTransition()", "document.startViewTransition()")}} メソッドは {{domxref("ViewTransition")}} オブジェクトインスタンスを返します。このオブジェクトインスタンスには、いくつかのプロミスメンバーが含まれており、トランジションの様々な状態に達したことに応答して JavaScript を実行することができます。例えば、 {{domxref("ViewTransition.ready")}} は擬似要素ツリーが作成され、アニメーションが始まろうとすると履行され、 {{domxref("ViewTransition.finished")}} はアニメーションが完了し、新しいページビューがユーザーに表示され操作できるようになると履行されます。

例えば、次の例では、{{domxref("Web Animations API", "ウェブアニメーション API", "", "nocode")}} によって指定されたアニメーションで、クリック時のユーザーカーソルの位置から発せられる円形の明らかになるビュー遷移を作成するために、以下の JavaScript を使用することができます。

```js
// 最後のクリックイベントを格納
let lastClick;
addEventListener("click", (event) => (lastClick = event));

function spaNavigate(data) {
  // この API に対応していないブラウザーのためのフォールバック
  if (!document.startViewTransition) {
    updateTheDOMSomehow(data);
    return;
  }

  // クリック位置を取得するか、画面の中央へフォールバックする
  const x = lastClick?.clientX ?? innerWidth / 2;
  const y = lastClick?.clientY ?? innerHeight / 2;
  // 最も遠いコーナーまでの距離を取得
  const endRadius = Math.hypot(
    Math.max(x, innerWidth - x),
    Math.max(y, innerHeight - y),
  );

  // トランジションを作成
  const transition = document.startViewTransition(() => {
    updateTheDOMSomehow(data);
  });

  // 擬似要素が作成されるのを待つ
  transition.ready.then(() => {
    // ルートの新しいビューをアニメーション
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
        // アニメーションさせる擬似要素を指定
        pseudoElement: "::view-transition-new(root)",
      },
    );
  });
}
```

このアニメーションには以下の CSS も必要です。CSS の既定のアニメーションをオフにし、新しい状態と古い状態を混合しないようにします（新しい状態はトランジションするのではなく、古い状態のすぐ上に「ワイプ」されます）。

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

## インターフェイス

- {{domxref("ViewTransition")}}
  - : ビュートランジションを表します。トランジションが異なる状態（アニメーションを実行する準備ができている、アニメーションが完了したなど）に達したり、トランジションを完全にスキップしたりする機能を提供します。

## 他のインターフェイスの拡張

- {{domxref("Document.startViewTransition()")}}
  - : 新しいビュートランジションを開始し、それを表す {{domxref("ViewTransition")}} オブジェクトを返します。

## CSS の追加

### プロパティ

- {{cssxref("view-transition-name")}}
  - : 選択された要素に別な識別名を提供し、ルートのビュートランジションとは別のビュートランジションに参加させます。 `none` の値が指定された場合はビュートランジションに参加させません。

### 擬似要素

- {{cssxref("::view-transition")}}
  - : ビュートランジションオーバーレイのルートで、すべてのビュートランジションを格納し、他のすべてのページコンテンツの上に配置されます。
- {{cssxref("::view-transition-group", "::view-transition-group()")}}
  - : 単一のビュートランジションのルートです。
- {{cssxref("::view-transition-image-pair", "::view-transition-image-pair()")}}
  - : ビュートランジションの新旧ビュー（トランジション前とトランジション後）のコンテナーです。
- {{cssxref("::view-transition-old", "::view-transition-old()")}}
  - : ビュートランジション移行前の静止スクリーンショットです。
- {{cssxref("::view-transition-new", "::view-transition-new()")}}
  - : ビュートランジション後の新しいビューのライブ表現です。

## 例

- [Basic View Transitions demo](https://mdn.github.io/dom-examples/view-transitions/): 基本的な画像ギャラリーのデモで、古い画像と新しい画像、古いキャプションと新しいキャプションの間に別個のトランジションがあります。
- [HTTP 203 playlist](https://http203-playlist.netlify.app/): [ビュートランジション API によるスムーズでシンプルなトランジション](https://developer.chrome.com/docs/web-platform/view-transitions/)では、その多くが説明されています。異なる多くのビュートランジション機能を備えた、より洗練された動画プレーヤーのデモアプリです。

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [ビュートランジション API によるスムーズでシンプルなトランジション](https://developer.chrome.com/docs/web-platform/view-transitions/)
- [View Transitions API: Creating Smooth Page Transitions](https://stackdiary.com/view-transitions-api/)
