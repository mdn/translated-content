---
title: '-webkit-print-color-adjust'
slug: Web/CSS/print-color-adjust
tags:
  - CSS
  - CSS プロパティ
  - レイアウト
  - 標準外
  - ウェブ
  - recipe:css-property
translation_of: Web/CSS/-webkit-print-color-adjust
original_slug: Web/CSS/-webkit-print-color-adjust
browser-compat: css.properties.-webkit-print-color-adjust
---
{{CSSRef}}{{Non-standard_header}}

**`-webkit-print-color-adjust`** プロパティは標準外の CSS 拡張で、 WebKit ブラウザー上で印刷時に背景色や背景画像の表示を強制することができます。

```css
/* キーワード値 */
-webkit-print-color-adjust: economy;
-webkit-print-color-adjust: exact;

/* グローバル値 */
-webkit-print-color-adjust: inherit;
-webkit-print-color-adjust: initial;
-webkit-print-color-adjust: unset;
```

## 構文

`-webkit-print-color-adjust` プロパティは以下のキーワード値のうちの一つで指定します。

### 値

- `economy`
  - : 通常の動作です。背景色や背景画像は、ブラウザーの印刷設定ダイアログで、ユーザーが明示的に許可した場合のみ印刷されます。
- `exact`
  - : このルールが適用された要素の背景色や背景画像は常に印刷されます。ユーザーの印刷設定は上書きされます。

## 公式定義

{{CSSInfo}}

## 形式文法

{{CSSSyntax}}

## 例

### 強制的に白黒で印刷する

```css
article {
  -webkit-print-color-adjust: exact;
  background: #222;
  color: #eee;
}
```

## 仕様書

まだ標準には含まれていませんが、標準化を行う[CSSWG wiki の提案](https://wiki.csswg.org/ideas/print-backgrounds)があります。

## ブラウザーの互換性

{{Compat}}

## 関連情報

- WebKit [bug 64583](https://bugs.webkit.org/show_bug.cgi?id=64583): "WIP: Add CSS property to control printing of backgrounds for individual elements"
- CSSWG wiki: [print-backgrounds](https://wiki.csswg.org/ideas/print-backgrounds) - このプロパティを標準化する提案
- CSS Color Module Level 4: [`color-adjust`](https://drafts.csswg.org/css-color-4/#color-adjust) プロパティ - このプロパティの標準化のより新しい提案
