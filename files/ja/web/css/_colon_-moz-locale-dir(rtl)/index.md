---
title: ':-moz-locale-dir(rtl)'
slug: Web/CSS/:-moz-locale-dir(rtl)
tags:
  - ':-moz-locale-dir'
  - CSS
  - CSS:Mozilla 拡張
  - ローカライズ
  - NeedsCompatTable
  - NeedsExample
  - 標準外
  - 擬似クラス
  - リファレンス
  - 右書き
  - セレクター
translation_of: Web/CSS/:-moz-locale-dir(rtl)
---
{{CSSRef}}{{Non-standard_header}}

**`:-moz-locale-dir(rtl)`** は [CSS](/ja/docs/Web/CSS) の[擬似クラス](/ja/docs/Web/CSS/Pseudo-classes)で、 [Mozilla 拡張](/ja/docs/Web/CSS/Mozilla_Extensions)であり、ユーザーインターフェイスが右から左へ向けて表示される要素に一致します。これは設定の `intl.uidirection.locale` （_`locale`_ は現在のロケール）が "rtl" に設定されていることで特定されます。

> **Note:** 擬似クラスは、主に拡張機能およびテーマをユーザーのロケールに基づいて適合させるために使用されます。 (これは、ウィンドウとウィンドウ、またタブとタブの間でも変えることができます。) また、拡張機能がユーザーの既定のロケールに対応しなくても動作させることができるため、ロケールの仕様を気にしなくても、左から右方向、右から左方向の両方のレイアウトに対応できます。

> **Warning:** このセレクターは HTML では正しく機能しません。ユーザーインターフェイスのロケールが右方向か左方向かに関わらず、常に一致しません。

## 構文

```css
:-moz-locale-dir(rtl)
```

## 例

この例は、 Firefox を使用していない場合は動作しません。また、 Firefox でも HTML でこのセレクターを使用する際には問題があるため、正しく動作しない場合があります。

### HTML

```html
<p>If you're using a right-to-left interface, this should be red.</p>
```

### CSS

```css
p:-moz-locale-dir(rtl) {
  color: red;
}
```

### 結果

{{EmbedLiveSample("Examples")}}

## 仕様書

どの標準にも含まれていません。

## 関連情報

- {{CSSxRef(":dir",":dir(…)")}}
- {{CSSxRef(":-moz-locale-dir(ltr)")}}
- [テーマが RTL のロケールで動作するようことを確認する](/ja/docs/Making_Sure_Your_Theme_Works_with_RTL_Locales)
