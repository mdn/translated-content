---
title: Firefox 98 for developers
slug: Mozilla/Firefox/Releases/98
tags:
  - '98'
  - Firefox
  - Mozilla
  - Release
---
{{FirefoxSidebar}}

このページでは、開発者に影響する Firefox 98 の変更点をまとめています。Firefox 98 は、米国時間 2022 年 3 月 8 日にリリースされました。

## ウェブ開発者向けの変更点一覧

### HTML

- HTML の {{HTMLElement("dialog")}} 要素をデフォルトで有効にしました。この要素とこれに関連づけられた [DOM API](/ja/docs/Web/API/Document_Object_Model) は、HTML ベースのモーダルダイアログボックスを提供します ({{bug(1733536)}})。

### CSS

- {{cssxref("hyphenate-character")}} プロパティで、ハイフネーションによる改行の末尾に置くハイフン記号 (`-`) の代わりに使用する文字列を設定できます ({{bug(1751024)}})。

### JavaScript

変更なし。

### API

- {{domxref("navigator.registerProtocolHandler()")}} で `ftp`、`sftp`、`ftps` スキームのプロトコルハンドラーを登録できるようになりました ({{bug(1705202)}})。

#### DOM

- {{domxref("HTMLElement.outerText")}} をサポートしました ({{bug(1709790)}})。
- `colorSpaceConversion`、`resizeWidth`、`resizeHeight` プロパティを、`options` オブジェクトを使用して {{domxref("createImageBitmap()")}} メソッドへ渡せるようになりました ({{bug(1748868)}} および {{bug(1733559)}})。

#### 廃止

- 非推奨の [WebVR API](/ja/docs/Web/API/WebVR_API) を、すべてのビルドでデフォルトで無効にしました (以前は Windows、macOS およびすべての nightly/dev ビルドで有効でした)。
  これは `about:config` で、`dom.vr.enabled` を `true` に設定すると再び有効にできます ({{bug(1750902)}})。
  
### WebDriver conformance (Marionette)

- 新たに開いたタブで、最初のページ読み込み確認を改良しました ({{bug(1747359)}})。

## アドオン開発者向けの変更点一覧

- {{WebExtAPIRef("webRequest")}} を使用するウェブ拡張機能は Firefox が起動している間、初期に開始していました。これを、{{WebExtAPIRef("webRequest")}} ブロッキング呼び出しを使用する拡張機能に限って早期スタートアップするように変更しました。ブロッキングでない呼出では、拡張機能の早期スタートアップが発生しません ({{bug(1749871)}})。
- {{WebExtAPIRef("userScripts.register")}} に `cookieStoreId` を追加しました。これは、拡張機能がコンテナー特有のユーザースクリプトを登録できるようにします ({{bug(1738567)}})。


## 過去のバージョン

{{Firefox_for_developers(97)}}
