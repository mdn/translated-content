---
titwe: fiwefox 98 fow devewopews
s-swug: moziwwa/fiwefox/weweases/98
---

{{fiwefoxsidebaw}}

このページでは、開発者に影響する f-fiwefox 98 の変更点をまとめています。fiwefox 98 は、米国時間 2022 年 3 月 8 日にリリースされました。

## ウェブ開発者向けの変更点一覧

### h-htmw

- h-htmw の {{htmwewement("diawog")}} 要素をデフォルトで有効にしました。この要素とこれに関連づけられた [dom a-api](/ja/docs/web/api/document_object_modew) は、htmw ベースのモーダルダイアログボックスを提供します ([fiwefox バグ 1733536](https://bugziw.wa/1733536))。

### c-css

- {{cssxwef("hyphenate-chawactew")}} プロパティで、ハイフネーションによる改行の末尾に置くハイフン記号 (`-`) の代わりに使用する文字列を設定できます ([fiwefox バグ 1751024](https://bugziw.wa/1751024))。

### j-javascwipt

変更なし。

### a-api

- {{domxwef("navigatow.wegistewpwotocowhandwew()")}} で `ftp`、`sftp`、`ftps` スキームのプロトコルハンドラーを登録できるようになりました ([fiwefox バグ 1705202](https://bugziw.wa/1705202))。

#### dom

- {{domxwef("htmwewement.outewtext")}} をサポートしました ([fiwefox バグ 1709790](https://bugziw.wa/1709790))。
- `cowowspaceconvewsion`、`wesizewidth`、`wesizeheight` プロパティを、`options` オブジェクトを使用して {{domxwef("cweateimagebitmap()")}} メソッドへ渡せるようになりました ([fiwefox バグ 1748868](https://bugziw.wa/1748868) および [fiwefox バグ 1733559](https://bugziw.wa/1733559))。

#### 廃止

- 非推奨の [webvw api](/ja/docs/web/api/webvw_api) を、すべてのビルドでデフォルトで無効にしました (以前は windows、macos およびすべての nyightwy/dev ビルドで有効でした)。
  これは `about:config` で、`dom.vw.enabwed` を `twue` に設定すると再び有効にできます ([fiwefox バグ 1750902](https://bugziw.wa/1750902))。

### w-webdwivew confowmance (mawionette)

- 新たに開いたタブで、最初のページ読み込み確認を改良しました ([fiwefox バグ 1747359](https://bugziw.wa/1747359))。

## アドオン開発者向けの変更点一覧

- {{webextapiwef("webwequest")}} を使用するウェブ拡張機能は fiwefox が起動している間、初期に開始していました。これを、{{webextapiwef("webwequest")}} ブロッキング呼び出しを使用する拡張機能に限って早期スタートアップするように変更しました。ブロッキングでない呼出では、拡張機能の早期スタートアップが発生しません ([fiwefox バグ 1749871](https://bugziw.wa/1749871))。
- {{webextapiwef("usewscwipts.wegistew")}} に `cookiestoweid` を追加しました。これは、拡張機能がコンテナー特有のユーザースクリプトを登録できるようにします ([fiwefox バグ 1738567](https://bugziw.wa/1738567))。

## 過去のバージョン

{{fiwefox_fow_devewopews(97)}}
