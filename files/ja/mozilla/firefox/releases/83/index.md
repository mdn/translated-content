---
title: Firefox 83 for developers
slug: Mozilla/Firefox/Releases/83
---

このページでは、開発者に影響する Firefox 83 の変更点をまとめています。Firefox 83 は、2020 年 11 月 17 日にリリースされました。

> [!NOTE]
> Mozilla hacks の [Firefox 83 is upon us](https://hacks.mozilla.org/2020/11/firefox-83-is-upon-us/) もご覧ください。

## ウェブ開発者向けの変更点一覧

### 開発者ツール

- [ウェブコンソール](https://firefox-source-docs.mozilla.org/devtools-user/web_console/helpers/index.html) を使用するとき、`--fullpage` を使用して全画面のスクリーンショットを撮影する場合も `--dpr` 引数を無視しないようになりました ([Firefox バグ 1645284](https://bugzil.la/1645284))。
- 開発者が [スクロール可能なオーバーフローをデバッグする](https://firefox-source-docs.mozilla.org/devtools-user/page_inspector/how_to/debug_scrollable_overflow/index.html) ために、[インスペクター](https://firefox-source-docs.mozilla.org/devtools-user/page_inspector/index.html) で `スクロール` バッジを使用できるようになりました。バッジを選択すると、オーバーフローを*発生させている*要素を強調して、`オーバーフロー` バッジをつけます ([Firefox バグ 1669129](https://bugzil.la/1669129))。

### HTML/XML

- `<link rel=icon>` で `crossorigin` 属性をサポートしました ([Firefox バグ 1661075](https://bugzil.la/1661075))。
- `displaystyle` [属性](/ja/docs/Web/MathML/Reference/Attribute) をすべての MathML 要素に実装しました ([Firefox バグ 1666075](https://bugzil.la/1666075))。

### CSS

- ベンダー接頭辞がつく `:-moz-any()` を、標準の {{CSSxRef(":is", ":is()")}} CSS 擬似クラス関数の別名にしました ([Firefox バグ 1666086](https://bugzil.la/1666086))。
- [CSS Conic Gradients](/ja/docs/Web/CSS/Reference/Values/gradient/conic-gradient) をサポートしました ([Firefox バグ 1632351](https://bugzil.la/1632351)) および ([Firefox バグ 1175958](https://bugzil.la/1175958))。

### JavaScript

- [`Intl[Symbol.toStringTag]`](/ja/docs/Web/JavaScript/Reference/Global_Objects/Intl/Symbol.toStringTag) を追加しました。既定値 `Intl` を返します (最近 ECMA 仕様書に追加されました)。([Firefox バグ 1670053](https://bugzil.la/1670053))

### HTTP

_変更なし。_

### API

_変更なし。_

### WebDriver conformance (Marionette)

- `WebDriver:SwitchToShadowRoot` の予備的なサポートを削除しました。これは WebDriver の仕様書にまだ追加されていません ([Firefox バグ 1662468](https://bugzil.la/1662468))。
- `WebDriver:Back` および `WebDriver:Forward` で、削除された [`<iframe>`](/ja/docs/Web/HTML/Reference/Elements/iframe) によってナビゲーションが発生したときに Marionette がハングアップする不具合を修正しました ([Firefox バグ 1672758](https://bugzil.la/1672758))。

## アドオン開発者向けの変更点

_変更なし。_

## 過去のバージョン

{{Firefox_for_developers(82)}}
