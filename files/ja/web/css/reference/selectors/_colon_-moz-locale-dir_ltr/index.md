---
title: CSS `:-moz-locale-dir(ltr)` 擬似クラス
short-title: :-moz-locale-dir(ltr)
slug: Web/CSS/Reference/Selectors/:-moz-locale-dir_ltr
l10n:
  sourceCommit: bf90d24ddf56e3f60df25fcbc0d4e3e084004794
---

{{Non-standard_header}}

**`:-moz-locale-dir(ltr)`** は [CSS](/ja/docs/Web/CSS) の[擬似クラス](/ja/docs/Web/CSS/Reference/Selectors/Pseudo-classes)で、 [Mozilla 拡張](/ja/docs/Web/CSS/Reference/Mozilla_extensions)です。ユーザーインターフェイスが左から右へ向けて表示される要素に一致します。これは設定の `intl.uidirection.locale` （_`locale`_ は現在のロケール）が "ltr" に設定されていることで特定されます。

> [!NOTE]
> このセレクターは、主に拡張機能およびテーマをユーザーのロケールに基づいて適合させるために使用されます。 (これは、ウィンドウとウィンドウ、またタブとタブの間でも変えることができます。) また、拡張機能がユーザーのデフォルトのロケールに対応しなくても動作させることができるため、ロケールの仕様を気にしなくても、左から右方向、右から左方向の両方のレイアウトに対応できます。

> [!WARNING]
> このセレクターは HTML では正しく機能しません。ユーザーインターフェイスのロケールが右方向か左方向かに関わらず、常に一致します。

## 構文

```css
:-moz-locale-dir(ltr) {
  /* ... */
}
```

## 例

この例は、Firefox を使用していない場合は動作しません。また、セレクターが HTML コンテンツで正しく動作しない問題があるため、Firefox でも動作しない場合があります。`XUL` で使用するために設計されています。

### HTML

```html-nolint
<p>左から右へのインターフェイスが使用されている場合、これは赤色になるはずです。</p>
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
- {{CSSxRef(":-moz-locale-dir_rtl", ":-moz-locale-dir(rtl)")}}
