---
title: Updating extensions for Firefox 3
slug: Mozilla/Firefox/Releases/3/Updating_extensions
original_slug: Updating_extensions_for_Firefox_3
---

このドキュメントは、拡張機能を更新して Firefox 3 に対応させたいと考える開発者のために役立つ情報を提供します。

読み進める前に、私たちからひとつだけ参考になるヒントをお教えしましょう。もしあなたの拡張機能に必要な変更がインストール定義ファイル内の `maxVersion` 項目の更新だけで、なおかつ [addons.mozilla.org](https://addons.mozilla.org) に拡張機能を登録している場合、新しいバージョンの拡張機能をアップロードする必要はありません！ AMO 上の「開発者用コントロールパネル」を使って `maxVersion` を更新するだけで作業は完了です。この方法なら、拡張機能が再度レビューに回ることもありません。

### Step 1: インストール定義ファイルを更新する

最初のステップ、そして、ほとんどの拡張機能にとって必要となるたったひとつのステップは、Firefox 3 との互換性を示すために [インストール定義ファイル](/ja/Install_Manifests) (`install.rdf`) を更新する作業です。

ファイルを開いて、互換性がある Firefox の最高バージョンを示す行を見つけます。Firefox 2 向けの拡張機能であれば、以下のように書かれているはずです。

```
 <em:maxVersion>2.0.*</em:maxVersion>
```

これを Firefox 3 との互換性を示すように変更します。

```
 <em:maxVersion>3.0.*</em:maxVersion>
```

次にアドオンを再インストールします。

なお、Firefox 3 ではバージョン番号の余計な「.0」が廃止されますので、「3.0.0.\*」の代わりに「3.0.\*」と書くだけで済みます。

これまでに、一部の拡張機能に影響すると思われる API の変更がいくつも行われています (まだ今後も変更は行われるでしょう)。私たちは現在、これらの変更の完全なリストを作成中です。

> **メモ:** もしあなたの拡張機能が、[インストール定義ファイル](../../../../ja/Install_Manifests) の代わりに、まだ [`Install.js`](../../../../ja/Install.js) スクリプトを使っている場合は、今回インストール定義ファイルに移行していただく必要があります。Firefox 3 は XPI ファイル内の `install.js` スクリプトをサポートしません。

#### インストール定義ファイルに翻訳を追加する

Firefox 3 は、翻訳された説明文を指定するための新しいプロパティを、インストール定義ファイル内でサポートしています。今までの方法も引き続き動作しますが、この新しい方法を利用すれば、アドオンが無効化されていたりインストールが保留されている場合も、各言語で説明文を表示できるようになります。詳しくは [拡張機能の説明の翻訳](/ja/Localizing_extension_descriptions) をご覧ください。

### Step 2: 安全な更新を提供しているか確認する

あなたが独自にアドオンを配布していて、[addons.mozilla.org](https://addons.mozilla.org) のような安全なアドオン提供サービスを利用していない場合、アドオンの更新に安全な方法を用いる必要があります。つまり、SSL を利用した Web サイト上で更新を提供するか、暗号鍵を使って更新情報に署名する必要があります。詳しくは [安全な更新](/ja/Extension_Versioning,_Update_and_Compatibility#Securing_Updates) をご覧ください。

### Step 3: 変更された API に対応する

いくつかの API は様々な方法で変更が行われています。それらの中で、多くの拡張機能に影響を与えることが予想される最も大幅な変更を以下にまとめました。

#### DOM

外部ドキュメントからのノードは、現在のドキュメントに挿入する前に [`document.importNode()`](/ja/docs/Web/API/Document/importNode) を使ってクローンを作る (あるいは
[`document.adoptNode()`](/ja/docs/Web/API/Document/adoptNode) を使って取り込む) べきです。[`Node.ownerDocument`](/ja/docs/Web/API/Node/ownerDocument) 問題の詳細については
[W3C DOM FAQ](http://www.w3.org/DOM/faq.html#ownerdoc) を参照してください。

Firefox では現在このルールを強制していません。Firefox 3 の開発中には強制していた時期もありましたが、このルールを強制すると多くのサイトが機能しなくなってしまうため取りやめになりました。
将来的な互換性を高めるため、Web 開発者にはこのルールに従ってコードを修正することを推奨します。

#### ブックマークと履歴

あなたの拡張機能から何らかの方法でブックマークや履歴のデータにアクセスしている場合、Firefox 3 と互換性を持たせるには多くの作業が必要です。これらの情報にアクセスするための古い API は、[Places](/ja/Places) という新しいアーキテクチャに置き換えられました。既存の拡張機能を Places API に対応させる方法については、[Places への移行ガイド](/ja/Places_migration_guide) で詳しく解説しています。

#### ダウンロードマネージャ

RDF データ形式から [Storage](/ja/Storage) API への移行にあたって、ダウンロードマネージャの API にも若干変更が加えられました。これに関する移行作業は非常に簡単なはずです。また、複数のダウンロードマネージャリスナーをサポートするため、ダウンロードの進捗状況を監視する API にも変更がありました。詳しくは [`nsIDownloadManager`](/ja/docs/Mozilla/Tech/XPCOM/Reference/Interface/nsIDownloadManager)、[`nsIDownloadProgressListener`](/ja/docs/Mozilla/Tech/XPCOM/Reference/Interface/nsIDownloadProgressListener)、[ダウンロードの監視](/ja/Monitoring_downloads) を参照してください。

#### パスワードマネージャ

あなたの拡張機能からパスワードマネージャを利用してユーザのログイン情報にアクセスしている場合、新しいログインマネージャ API を利用するように更新する必要があります。

- [nsILoginManager の使い方](/ja/Using_nsILoginManager) という記事には、パスワードマネージャとログインマネージャの両方を用いることで、Firefox 3 とそれ以前のバージョンの両方で機能拡張を動作させるデモなど、コードサンプルが載っています。
- [`nsILoginInfo`](/ja/nsILoginInfo)
- [`nsILoginManager`](/ja/nsILoginManager)

あなたが拡張機能の中で独自のパスワードストレージを提供したい場合は、組み込みのパスワードマネージャストレージを上書きすることもできます。詳しくは [ログインマネージャ用ストレージモジュールの作成](/ja/Creating_a_Login_Manager_storage_module) をご覧ください。

#### ポップアップ (メニュー、コンテキストメニュー、ツールチップ、パネル)

XUL のポップアップシステムは Firefox 3 で大幅に変更されました。ポップアップシステムには、メインメニュー、コンテキストメニュー、ポップアップパネルが含まれます。新しいシステムの仕組みについては [ポップアップの使用](/ja/XUL/PopupGuide) ガイドをご覧ください。特筆すべき点は、`popup.showPopup` が非推奨となり、新しい `popup.openPopup` と `popup.openPopupAtScreen` に置き換えられたことです。

#### 自動補完

[`nsIAutoCompleteController`](/ja/docs/Mozilla/Tech/XPCOM/Reference/Interface/nsIAutoCompleteController) インタフェースの [`handleEnter()`](/ja/NsIAutoCompleteController#handleEnter.28.29) メソッドは、テキストが自動補完ポップアップから選択されたか、ユーザが自分で入力した後 Enter キーを押したかを示す引数を受け付けるよう変更が行われました。

#### DOMParser

- When a `DOMParser` is instantiated, it inherits the calling code's principal and the `documentURI` and `baseURI` of the window the constructor came from.
- If the caller has UniversalXPConnect privileges, it can pass parameters to `new DOMParser()`. If fewer than three parameters are passed, the remaining parameters will default to `null`.

  - The first parameter is the principal to use; this overrides the default principal normally inherited.
  - The second parameter is the `documentURI` to use.
  - The third parameter is the `baseURI` to use.

- If you initialize a `DOMParser` using a contract, such as by calling `createInstance()`, and you don't call the `DOMParser`'s `init()` method, attempting to initiate a parsing operation will automatically create and initialize the `DOMParser` with a null principal and `null` pointers for `documentURI` and `baseURI`.

#### 削除されたインタフェース

以下のインタフェースは、Firefox 3 の基盤である Gecko 1.9 から削除されました。あなたの拡張機能でいずれかを使用している場合、コードを更新する必要があるでしょう。

- `nsIDOMPaintListener`
- `nsIDOMScrollListener`
- `nsIDOMMutationListener`
- `nsIDOMPageTransitionListener`
- `nsICloseAllWindows` ([バグ 386200](https://bugzilla.mozilla.org/show_bug.cgi?id=386200 'FIXED: SeaMonkey only: no "view cert button" in untrusted cert error dialog') 参照)

### Step 4: 関連するクローム周りの変更を確認する

あなたのコードに修正を加える必要があるかもしれない小さな変更がクロームに対して行われました。「browser-bottombox」と呼ばれる新しい `vbox` が追加されました。これは、ブラウザウィンドウの下部にあるページ内検索バーとステータスバーを含むものです。この変更は見た目には影響しませんが、あなたの拡張機能がこれらの要素に関するクロームにオーバーレイを行っている場合、影響を受ける可能性があります。

例えばこれまで、次のように、ステータスバーの直前にクロームをオーバーレイしていた場合、

```
<window id="main-window">
<something insertbefore="status-bar" />
</window>
```

今後は次のようにオーバーレイを行う必要があります。

```
<vbox id="browser-bottombox">
<something insertbefore="status-bar" />
</vbox>
```

### その他の変更

_もし、拡張機能を Firefox 3 対応にするために必要な小さい変更があったら、ここに追加してください。_

- [`chrome://browser/base/utilityOverlay.js`]() は、セキュリティ上の理由からサポートされなくなりました。これまでこのスクリプトを利用していた場合は、[`chrome://browser/content/utilityOverlay.js`]() へ切り替えてください。
- [`nsIAboutModule`](/ja/docs/Mozilla/Tech/XPCOM/Reference/Interface/nsIAboutModule) の実装には、`getURIFlags` メソッドのサポートが必要になりました。詳しくは [nsIAboutModule.idl](https://dxr.mozilla.org/mozilla-central/source/netwerk/protocol/about/public/nsIAboutModule.idl) を参照してください。これは新しい `about:` URI を提供する拡張機能に影響します ([バグ 337746](https://bugzilla.mozilla.org/show_bug.cgi?id=337746 'FIXED: [FIX]Move "safe about" hardcoding out of security manager'))。
- [`tabbrowser`](/ja/docs/Mozilla/Tech/XUL/tabbrowser) 要素は「ツールキット」の一部ではなくなりました ([バグ 339964](https://bugzilla.mozilla.org/show_bug.cgi?id=339964))。このため、この要素は今後 XUL アプリケーションや拡張機能の中では利用できません。ただし、Firefox のメインウィンドウ (browser.xul) では今後も使われます。
- [nsISupports プロキシ](/ja/nsISupports_proxies) の変更と、おそらくスレッド関連インタフェースへの変更については、ドキュメントを用意する必要があります。
- XUL ファイル内で `<?xml-stylesheet ?>` などの XML 処理命令を用いている場合、[バグ 319654](https://bugzilla.mozilla.org/show_bug.cgi?id=319654) で行われた以下の変更に注意してください。

  1. XML PI が XUL ドキュメントの DOM に追加されました。これは、[`document.firstChild`](/ja/docs/Web/API/Document/firstChild) が必ずしもルート要素を返すとは限らない、ということを意味します。スクリプト内でルートドキュメントを得るには、代わりに [`document.documentElement`](/ja/docs/Web/API/Document/documentElement) を用いてください。
  2. `<?xml-stylesheet ?>` と `<?xul-overlay ?>` 処理命令は、ドキュメントの前文以外の場所に書かれた場合、動作しなくなりました。

- `window.addEventListener("load", myFunc, true)` が、Web コンテンツが読み込まれた際 (ブラウザのページ読み込み時) に呼び出されなくなりました。これは、inner ウィンドウと outer ウィンドウの関係が変わったことによります ([バグ 296639](https://bugzilla.mozilla.org/show_bug.cgi?id=296639))。簡単な修正方法は、[ここ](/ja/Code_snippets/Tabbed_browser#Detecting_page_load) に書かれているように `gBrowser.addEventListener("load", myFunc, true)` を使うことです。この方法は Firefox 2 でも有効です。
- `content.window.getSelection()` は、文字列を返す、非推奨となった `content.document.getSelection()` とは異なり、オブジェクトを返します (`toString()` を使えば文字列に変換できます)。
- `event.preventBubble()` は Firefox 3 で非推奨となり、Firefox 3 で削除されました。Firefox 2 でも動作する [`event.stopPropagation()`](/ja/DOM/event.stopPropagation) を使ってください。
- `setTimeout()` を使って開始されるタイマーは、[バグ 52209](https://bugzilla.mozilla.org/show_bug.cgi?id=52209) のために行われた修正によって、モーダル形式のウィンドウではブロックされるようになりました。代わりに [`nsITimer`](/ja/docs/Mozilla/Tech/XPCOM/Reference/Interface/nsITimer) を使ってください。
- 信頼できないソース（例：Web サイト）が拡張のクロームにアクセスできるようにする必要がある場合は、新しい [`contentaccessible` フラグ](../../../../ja/Chrome_Registration#contentaccessible) を使わなければなりません。
