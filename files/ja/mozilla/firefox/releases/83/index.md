---
title: Firefox 83 for developers
slug: Mozilla/Firefox/Releases/83
---

{{FirefoxSidebar}}

このページでは、開発者に影響する Firefox 83 の変更点をまとめています。Firefox 83 は、2020 年 11 月 17 日にリリースされました。

> **メモ:** Mozilla hacks の [Firefox 83 is upon us](https://hacks.mozilla.org/2020/11/firefox-83-is-upon-us/) もご覧ください。

## ウェブ開発者向けの変更点一覧

### 開発者ツール

- [ウェブコンソール](/ja/docs/Tools/Web_Console) で `:screenshot` [ヘルパーコマンド](/ja/docs/Tools/Web_Console/Helpers) を使用するとき、`--fullpage` を使用して全画面のスクリーンショットを撮影する場合も `--dpr` 引数を無視しないようになりました ({{bug(1645284)}})。
- 開発者が [スクロール可能なオーバーフローをデバッグする](/ja/docs/Tools/Page_Inspector/How_to/Debug_Scrollable_Overflow) ために、[インスペクター](/ja/docs/Tools/Page_Inspector) で `スクロール` バッジを使用できるようになりました。バッジを選択すると、オーバーフローを*発生させている*要素を強調して、`オーバーフロー` バッジをつけます ({{bug(1669129)}})。

### HTML/XML

- `<link rel=icon>` で `crossorigin` 属性をサポートしました ({{bug(1661075)}})。
- `displaystyle` [属性](/ja/docs/Web/MathML/Attribute) をすべての MathML 要素に実装しました ({{bug(1666075)}})。

### CSS

- ベンダー接頭辞がつく `:-moz-any()` を、標準の {{CSSxRef(":is", ":is()")}} CSS 疑似クラス関数の別名にしました ({{bug(1666086)}})。
- [CSS Conic Gradients](/ja/docs/Web/CSS/conic-gradient) をサポートしました ({{bug(1632351)}}) および ({{bug(1175958)}})。

### JavaScript

- [`Intl[@@toStringTag]`](/ja/docs/Web/JavaScript/Reference/Global_Objects/Intl/@@toStringTag) を追加しました。既定値 `Intl` を返します (最近 ECMA 仕様書に追加されました)。({{bug(1670053)}})

### HTTP

_変更なし。_

### API

_変更なし。_

### WebDriver conformance (Marionette)

- `WebDriver:SwitchToShadowRoot` の予備的なサポートを削除しました。これは WebDriver の仕様書にまだ追加されていません ({{bug(1662468)}})。
- `WebDriver:Back` および `WebDriver:Forward` で、削除された [`<iframe>`](/ja/docs/Web/HTML/Element/iframe) によってナビゲーションが発生したときに Marionette がハングアップする不具合を修正しました ({{bug(1672758)}})。

## アドオン開発者向けの変更点

_変更なし。_

## 過去のバージョン

{{Firefox_for_developers(82)}}
