---
title: overscroll-behavior
slug: Web/CSS/overscroll-behavior
l10n:
  sourceCommit: 05a61497f79c7bf5ffaf8fe7d94b36d5a0b9626e
---

{{CSSRef}}

**`overscroll-behavior`** は CSS のプロパティで、スクロール領域の境界に達したときにブラウザーが何をするかを設定します。これは {{cssxref("overscroll-behavior-x")}} および {{cssxref("overscroll-behavior-y")}} の一括指定です。

{{EmbedInteractiveExample("pages/css/overscroll-behavior.html")}}

既定で、モバイルブラウザーはページの上端または下端（または他のスクロール領域）に到達したときに「跳ね返り」効果や、ページの更新を行う傾向があります。また、スクロールするコンテンツのあるページの上にスクロールするコンテンツのあるダイアログボックスがある場合、ダイアログボックスのスクロールの境界線に達すると、その下にあるページがスクロールを開始することにお気づきかもしれませんが、これは **スクロール連鎖** と呼ばれます。

場合によっては、この動きが望ましくないことがあります。 `overscroll-behavior` を使用すると、望ましくないスクロール連鎖を抑止したり、ブラウザー版の Facebook や Twitter アプリなどに見られる「引いて更新」の類の動きを実現したりすることができます。

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

`overscroll-behavior` プロパティは、次に挙げた値の一覧のうち 1 つまたは 2 つのキーワードで指定します。

2 つのキーワードでは、 `overscroll-behavior` のそれぞれ `x` 及び `y` 軸の値を指定します。値が 1 つだけ指定された場合は、 x および y が同じ値とみなされます。

### 値

- `auto`
  - : スクロールの末端における既定の振る舞いが通常通りに発生します。
- `contain`
  - : この値が設定された要素の内部では、スクロールの末端における既定の振る舞いが見られますが、隣接するスクロール領域に対するスクロール連鎖はありません。例えば、基底となる要素はスクロールしません。
- `none`
  - : 隣接するスクロール領域に対するスクロール連鎖はなく、スクロールの末端における既定の振る舞いが抑制されます。

## 公式定義

{{cssinfo}}

## 形式文法

{{csssyntax}}

## 例

### 下の要素がスクロールするのを抑止する

[overscroll-behavior の例](https://mdn.github.io/css-examples/overscroll-behavior/) ([ソースコード](https://github.com/mdn/css-examples/tree/main/overscroll-behavior)はこちら) は、全画面で擬似連絡先の一覧を、ダイアログボックスでチャットウィンドウを表示します。

!['Active chat' と題されたポップアップチャットウィンドウで、 Chris と Bob の会話が表示されています。チャットウィンドウの背後には、 'overscroll-behavior demo' と題された連絡先リストが掲載されています。](example.png)

どちらの領域もスクロールします。ふつう、チャットウィンドウをスクロール境界に当たるまでスクロールすると、下の連絡先ウィンドウもスクロールを始めます。これは望ましくないことです。これは、次のようにチャットウィンドウに `overscroll-behavior-y` （`overscroll-behavior` でも可）を使用することで抑止することができます。

```css
.messages {
  height: 220px;
  overflow: auto;
  overscroll-behavior-y: contain;
}
```

連絡先が先頭または末端までスクロールしたときの標準のスクロール末端効果を抑止したいかもしれません（例えば Android 版 Chrome は、冒頭の境界を超えてスクロールしようとするとページを再読み込みします）。これは `overscroll-behavior: none` を {{htmlelement("html")}} 要素に設定することで抑止することができます。

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

- [スクロールを制御する: 引いて更新や末端の効果のカスタマイズ（英語）](https://developer.chrome.com/blog/overscroll-behavior/#demo)
