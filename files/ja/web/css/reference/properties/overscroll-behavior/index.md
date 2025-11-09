---
title: overscroll-behavior
slug: Web/CSS/Reference/Properties/overscroll-behavior
original_slug: Web/CSS/overscroll-behavior
l10n:
  sourceCommit: 0cc9980e3b21c83d1800a428bc402ae1865326b2
---

**`overscroll-behavior`** は [CSS](/ja/docs/Web/CSS) のプロパティで、スクロール領域の境界に達したときのブラウザーの挙動を設定します。

{{InteractiveExample("CSS デモ: overscroll-behavior")}}

```css interactive-example-choice
overscroll-behavior: auto;
```

```css interactive-example-choice
overscroll-behavior: contain;
```

```css interactive-example-choice
overscroll-behavior: none;
```

```html interactive-example
<section class="default-example" id="default-example">
  <div class="example-container">
    <div class="box">
      This is a scrollable container. Michaelmas term lately over, and the Lord
      Chancellor sitting in Lincoln's Inn Hall. Implacable November weather. As
      much mud in the streets as if the waters had but newly retired from the
      face of the earth.
      <br /><br />
      Lorem Ipsum has been the industry's standard dummy text ever since the
      1500s, when an unknown printer took a galley of type and scrambled it to
      make a type specimen book. It has survived not only five centuries, but
      also the leap into electronic typesetting, remaining essentially
      unchanged.
    </div>
    <div id="example-element">
      This is the inner container. Focus on this container, scroll to the bottom
      and when you reach the bottom keep scrolling.
      <p>
        If you have
        <code class="language-css">overscroll-behavior: auto;</code> selected
        the outer container will start to scroll.
      </p>
      If you have
      <code class="language-css">overscroll-behavior: contain;</code> selected,
      the outer container will not scroll unless you move your cursor out of the
      inner container and try to perform scroll on the outer container.
    </div>
  </div>
</section>
```

```css interactive-example
.example-container {
  width: 35em;
  height: 18em;
  border: medium dotted;
  padding: 0.75em;
  text-align: left;
  overflow: auto;
  display: flex;
}

.box {
  width: 50%;
}

#example-element {
  width: 50%;
  height: 12em;
  border: medium dotted #1b76c4;
  padding: 0.3em;
  margin: 0 0.3em;
  text-align: left;
  overflow: auto;
  overscroll-behavior: contain;
}
```

## 構成要素のプロパティ

このプロパティは、以下の CSS プロパティの一括指定です。

- {{Cssxref("overscroll-behavior-x")}}
- {{Cssxref("overscroll-behavior-y")}}

## 構文

```css
/* キーワード値 */
overscroll-behavior: auto; /* 既定 */
overscroll-behavior: contain;
overscroll-behavior: none;

/* 2 つの値 */
overscroll-behavior: auto contain;

/* グローバル値 */
overscroll-behavior: inherit;
overscroll-behavior: initial;
overscroll-behavior: revert;
overscroll-behavior: revert-layer;
overscroll-behavior: unset;
```

`overscroll-behavior` プロパティは、次の値の一覧のうち 1 つまたは 2 つのキーワードで指定します。

2 つのキーワードでは、 `overscroll-behavior` のそれぞれ `x` および `y` 軸の値を指定します。値が 1 つだけ指定された場合は、 x および y が同じ値とみなされます。

### 値

- `auto`
  - : 既定のスクロールオーバーフロー動作が、通常通り発生します。
- `contain`
  - : この値が設定された要素内では、既定のスクロールオーバーフロー動作（「跳ね返り」効果など）が見られます。ただし、隣接するスクロール領域でのスクロール連鎖は発生せず、背後に配置された要素はスクロールしません。 `contain` の値では、垂直方向の引いて更新のジェスチャーや、水平方向のスワイプ操作を含む、ブラウザーのネイティブナビゲーションが無効になります。
- `none`
  - : 隣接するスクロール領域へのスクロールの連鎖は発生せず、既定のスクロールオーバーフロー動作が抑止されます。

## 解説

既定では、モバイルブラウザーはページの上端または下端（または他のスクロール領域）に到達したときに「跳ね返り」効果や、ページの更新を行う傾向があります。また、スクロールするコンテンツのあるページの上に、やはりスクロールするコンテンツのあるダイアログボックスがある場合、ダイアログボックスの{{Glossary("Scroll_boundary", "スクロール境界")}}に達すると、その下にあるページがスクロールを開始することにお気づきかもしれません。これは{{Glossary("Scroll_chaining", "スクロール連鎖")}}と呼ばれます。

場合によっては、この動きが望ましくないことがあります。 `overscroll-behavior` を使用すると、望ましくないスクロール連鎖を抑止したり、ブラウザー版の Facebook や Twitter アプリなどに見られる「引いて更新」の類の動きを実現したりすることができます。

このプロパティは{{Glossary("Scroll_container", "スクロールコンテナー")}}にのみ適用されることに注意してください。特に、[`<iframe>`](/ja/docs/Web/HTML/Reference/Elements/iframe) はスクロールコンテナーではないため、iframe にこのプロパティを設定しても効果はありません。 iframe からのスクロール連鎖を制御するには、 `overscroll-behavior` を iframe 内の文書の [`<html>`](/ja/docs/Web/HTML/Reference/Elements/html) 要素と [`<body>`](/ja/docs/Web/HTML/Reference/Elements/body) 要素の両方に設定してください。

## 公式定義

{{cssinfo}}

## 形式文法

{{csssyntax}}

## 例

### 下の要素がスクロールするのを抑止する

[overscroll-behavior の例](https://mdn.github.io/css-examples/overscroll-behavior/)（[ソースコード](https://github.com/mdn/css-examples/tree/main/overscroll-behavior)も参照）は、全画面で擬似連絡先の一覧を、チャットウィンドウのついたダイアログボックスで表示します。

!['Active chat' と題されたポップアップチャットウィンドウで、 Chris と Bob の会話が表示されています。チャットウィンドウの背後には、 'overscroll-behavior demo' と題された連絡先リストが掲載されています。](example.png)

どちらの領域もスクロールします。ふつう、チャットウィンドウをスクロール境界に当たるまでスクロールすると、下の連絡先ウィンドウもスクロールを始めます。これは望ましくないことです。これは、次のようにチャットウィンドウに `overscroll-behavior-y` （`overscroll-behavior` でも可）を使用することで抑止することができます。

```css
.messages {
  height: 220px;
  overflow: auto;
  overscroll-behavior-y: contain;
}
```

連絡先が先頭または末端までスクロールしたときの標準のスクロール末端効果を抑止したいかもしれません（例えば Android 版 Chrome は、先頭の境界を超えてスクロールしようとするとページを再読み込みします）。これは `overscroll-behavior: none` を {{htmlelement("html")}} 要素に設定することで抑止することができます。

```css
html {
  margin: 0;
  overscroll-behavior: none;
}
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [CSS オーバースクロール動作](/ja/docs/Web/CSS/Guides/Overscroll_behavior)モジュール
- [CSS スクロールアンカリング](/ja/docs/Web/CSS/Guides/Scroll_anchoring)モジュール
- [スクロールを制御する: 引いて更新や末端の効果のカスタマイズ（英語）](https://developer.chrome.com/blog/overscroll-behavior/#demo)
