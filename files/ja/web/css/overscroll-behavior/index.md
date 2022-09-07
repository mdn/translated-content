---
title: overscroll-behavior
slug: Web/CSS/overscroll-behavior
---
{{CSSRef}}

CSS の **`overscroll-behavior`** プロパティは、スクロール領域の境界に達したときにブラウザーが何をするかを設定します。これは {{cssxref("overscroll-behavior-x")}} および {{cssxref("overscroll-behavior-y")}} の一括指定です。

```css
/* キーワード値 */
overscroll-behavior: auto; /* 既定 */
overscroll-behavior: contain;
overscroll-behavior: none;

/* 二つの値 */
overscroll-behavior: auto contain;

/* グローバル値 */
overscroll-behavior: inherit;
overscroll-behavior: initial;
overscroll-behavior: unset;
```

既定では、モバイルブラウザーは「跳ね返る」効果を見せたり、ページの最上部又は最下部 (またはその他のスクロール領域) に達したときにページを更新したりする機能を提供する傾向があります。内容がスクロールするページの上に、内容がスクロールするダイアログが表示されている時、ダイアログボックスのスクロール境界に達したときに、下のページがスクロールし始めるという動きをするのに気が付いたかもしれません。 — これは**スクロール連鎖**と呼ばれています。

場合によっては、この動きが望ましくないことがあります。 `overscroll-behavior` を使用すると、望ましくないスクロール連鎖を抑止したり、ブラウザー版の Facebook や Twitter アプリなどに見られる「引いて更新」の類の動きを実現したりすることができます。

## 構文

`overscroll-behavior` プロパティは、次の値の一覧のうち１つまたは２つのキーワードで指定します。

２つのキーワードでは、 `overscroll-behavior` のそれぞれ `x` 及び `y` 軸の値を指定します。値が１つだけ指定された場合は、 x および y が同じ値とみなされます。

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

[overscroll-behavior の例](https://mdn.github.io/css-examples/overscroll-behavior/) ([ソースコード](https://github.com/mdn/css-examples/tree/master/overscroll-behavior)はこちら) は、全画面で擬似連絡先の一覧を、ダイアログボックスでチャットウィンドウを表示します。

![](https://mdn.mozillademos.org/files/15778/example.png)

どちらの領域もスクロールします。ふつう、チャットウィンドウをスクロール境界に当たるまでスクロールすると、下の連絡先ウィンドウもスクロールを始めます。これは望ましくないことです。これは、次のようにチャットウィンドウに `overscroll-behavior-y` (`overscroll-behavior` でも可) を使用することで抑止することができます。

```css
.messages {
  height: 220px;
  overflow: auto;
  overscroll-behavior-y: contain;
}
```

連絡先が冒頭又は末端までスクロールしたときの標準のスクロール末端効果を抑止したいかもしれません (例えば Android 版 Chrome は、冒頭の境界を超えてスクロールしようとするとページを再読み込みします)。これは {{htmlelement("body")}} 要素に `overscroll-behavior: none` を設定することで抑止することができます。

```css
body {
  margin: 0;
  overscroll-behavior: none;
}
```

## 仕様書

| 仕様書                                                                                                                       | 状態                                             | 備考 |
| ---------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------ | ---- |
| {{SpecName('CSS Overscroll Behavior', '#propdef-overscroll-behavior', 'overscroll-behavior')}} | {{Spec2('CSS Overscroll Behavior')}} |      |

## ブラウザーの互換性

{{Compat("css.properties.overscroll-behavior")}}

## 関連情報

- [スクロールを制御する: 引いて更新や末端の効果のカスタマイズ](https://developers.google.com/web/updates/2017/11/overscroll-behavior#demo)
- {{cssxref("-ms-scroll-chaining")}}
