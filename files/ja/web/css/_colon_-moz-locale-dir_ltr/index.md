---
title: ":-moz-locale-dir(ltr)"
slug: Web/CSS/:-moz-locale-dir_ltr
---

{{CSSRef}}{{Non-standard_header}}

**`:-moz-locale-dir(ltr)`** は [CSS](/ja/docs/Web/CSS) の[擬似クラス](/ja/docs/Web/CSS/Pseudo-classes)で、 [Mozilla 拡張](/ja/docs/Web/CSS/Mozilla_Extensions)であり、ユーザーインターフェイスが左から右へ向けて表示される要素に一致します。これは設定の `intl.uidirection.locale` （_`locale`_ は現在のロケール）が "ltr" に設定されていることで特定されます。

> **メモ:** 擬似クラスは、主に拡張機能およびテーマをユーザーのロケールに基づいて適合させるために使用されます。 (これは、ウィンドウとウィンドウ、またタブとタブの間でも変えることができます。) また、拡張機能がユーザーの既定のロケールに対応しなくても動作させることができるため、ロケールの仕様を気にしなくても、左から右方向、右から左方向の両方のレイアウトに対応できます。

> **警告:** このセレクターは HTML では正しく機能しません。ユーザーインターフェイスのロケールが右方向か左方向かに関わらず、常に一致します。

## 構文

```css
:-moz-locale-dir(ltr) {}
```

## 例

この例は、Firefoxを使用していない場合は動作しません。また、セレクタがHTMLコンテンツで正しく動作しない問題があるため、Firefoxでも動作しない場合があります。XUL](/ja/docs/Archive/Mozilla/XUL)で使用するために設計されています。

### HTML

```html
<p>If you're using a left-to-right interface, this should be red.</p>
```

### CSS

```css
p:-moz-locale-dir(ltr) {
  color: red;
}
```

### 結果

{{EmbedLiveSample("Examples")}}

## 仕様書

どの標準にも含まれていません。

## 関連情報

- {{CSSxRef(":dir", ":dir(…)")}}
- {{CSSxRef(":-moz-locale-dir(rtl)")}}
