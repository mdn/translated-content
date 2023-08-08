---
title: "-webkit-touch-callout"
slug: Web/CSS/-webkit-touch-callout
---

{{CSSRef}}{{Non-standard_header}}

`-webkit-touch-callout` は [CSS](/ja/docs/Web/CSS) のプロパティで、対象を長押しすることで現れるコールアウト表示を制御します。

iOS 上で対象が長押しされたとき、 Safari はそのリンクに関する情報をコールアウトで表示します。このプロパティではそういった挙動を無効にすることができます。

```css
/* キーワード値 */
-webkit-touch-callout: default;
-webkit-touch-callout: none;

/* グローバル値 */
-webkit-touch-callout: initial;
-webkit-touch-callout: inherit;
-webkit-touch-callout: unset;
```

## 構文

### 値

- `default`
  - : 既定のコールアウトが表示されます。
- `none`
  - : コールアウト表示が無効になります。

## 公式定義

{{CSSInfo}}

## 形式文法

{{csssyntax}}

## 例

### タッチ時のコールアウトをオフにする

```css
.example {
  -webkit-touch-callout: none;
}
```

## 仕様書

どの仕様書でも定義されていません。 Apple は [Safari CSS リファレンス](https://developer.apple.com/library/safari/documentation/AppleApplications/Reference/SafariCSSRef/Articles/StandardCSSProperties.html#//apple_ref/doc/uid/TP30001266-_webkit_touch_callout) に説明を載せています。

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [WebKit CSS 拡張](/ja/docs/Web/CSS/WebKit_Extensions)
- [Apple の開発者ドキュメントにおける -webkit-touch-callout](https://developer.apple.com/library/archive/documentation/AppleApplications/Reference/SafariCSSRef/Articles/StandardCSSProperties.html#//apple_ref/doc/uid/TP30001266-_webkit_touch_callout)
