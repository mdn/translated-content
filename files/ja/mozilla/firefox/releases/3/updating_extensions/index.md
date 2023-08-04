---
title: Firefox 3 のための拡張機能の更新
slug: Mozilla/Firefox/Releases/3/Updating_extensions
l10n:
  sourceCommit: a35e5b74ecbe13a768edf765a4666fb81a5153a1
---

{{FirefoxSidebar}}

この記事は、拡張機能を更新して Firefox 3 に対応させたいと考える開発者のために役立つ情報を提供します。

読み進める前に、私たちからひとつだけ参考になるヒントをお教えしましょう。もしあなたの拡張機能に必要な変更がインストールマニフェスト内の `maxVersion` 項目の更新だけで、なおかつ [addons.mozilla.org](https://addons.mozilla.org) に拡張機能を登録している場合、新しいバージョンの拡張機能をアップロードする必要はありません！ AMO 上の「開発者用コントロールパネル」を使って `maxVersion` を更新するだけで作業は完了です。この方法なら、拡張機能が再度レビューに回ることもありません。

## Step 1: インストールマニフェストを更新する

最初のステップ、そして、ほとんどの拡張機能にとって必要となるたったひとつのステップは、Firefox 3 との互換性を示すために [インストールマニフェスト](/ja/docs/Install_Manifests) ([`install.rdf`](/ja/docs/Creating_a_Skin_for_Firefox/install.rdf)) を更新する作業です。

ファイルを開いて、互換性がある Firefox の最高バージョンを示す行を見つけます。Firefox 2 向けの拡張機能であれば、以下のように書かれているはずです。

```xml
<em:maxVersion>2.0.*</em:maxVersion>
```

これを Firefox 3 との互換性を示すように変更します。

```xml
<em:maxVersion>3.0.*</em:maxVersion>
```

次にアドオンを再インストールします。

なお、Firefox 3 ではバージョン番号の余計な「.0」が廃止されますので、「3.0.0.\*」の代わりに「3.0.\*」と書くだけで済みます。

これまでに、一部の拡張機能に影響すると思われる API の変更がいくつも行われています (まだ今後も変更は行われるでしょう)。私たちは現在、これらの変更の完全なリストを作成中です。

> **メモ:** もし拡張機能が、まだ [`Install.js`](/ja/docs/Install.js) スクリプトを[インストールマニフェスト](/ja/docs/Install_Manifests) の代わりに、使っている場合は、今回インストールマニフェストに移行していただく必要があります。Firefox 3 は XPI ファイル内の `install.js` スクリプトをサポートしません。

### インストールマニフェストに翻訳を追加する

Firefox 3 は、翻訳された説明文を指定するための新しいプロパティを、インストールマニフェスト内でサポートしています。今までの方法も引き続き動作しますが、この新しい方法を利用すれば、アドオンが無効化されていたりインストールが保留されている場合も、各言語で説明文を表示できるようになります。詳しくは [拡張機能の説明の翻訳](/ja/Localizing_extension_descriptions) をご覧ください。

## Step 2: 安全な更新を提供しているか確認する

あなたが独自にアドオンを配布していて、[addons.mozilla.org](https://addons.mozilla.org) のような安全なアドオン提供サービスを利用していない場合、アドオンの更新に安全な方法を用いる必要があります。つまり、SSL を利用したウェブサイト上で更新を提供するか、暗号鍵を使って更新情報に署名する必要があります。詳しくは [安全な更新](/ja/docs/Extension_Versioning,_Update_and_Compatibility#securing_updates) をご覧ください。

## Step 3: 変更された API に対応する

いくつかの API は様々な方法で変更が行われています。それらの中で、多くの拡張機能に影響を与えることが予想される最も大幅な変更を以下にまとめました。

### DOM

外部ドキュメントからのノードは、現在のドキュメントに挿入する前に [`document.importNode()`](/ja/docs/Web/API/Document/importNode) を使ってクローンを作る (あるいは
[`document.adoptNode()`](/ja/docs/Web/API/Document/adoptNode) を使って取り込む) べきです。[`Node.ownerDocument`](/ja/docs/Web/API/Node/ownerDocument) 問題の詳細については
[W3C DOM FAQ](https://www.w3.org/DOM/faq.html#ownerdoc) を参照してください。

Firefox では現在このルールを強制していません。Firefox 3 の開発中には強制していた時期もありましたが、このルールを強制すると多くのサイトが機能しなくなってしまうため取りやめになりました。
将来的な互換性を高めるためウェブ開発者にはこのルールに従ってコードを修正することを推奨します。

### ブックマークと履歴

あなたの拡張機能から何らかの方法でブックマークや履歴のデータにアクセスしている場合、Firefox 3 と互換性を持たせるには多くの作業が必要です。これらの情報にアクセスするための古い API は、[Places](/ja/docs/Places) という新しいアーキテクチャに置き換えられました。既存の拡張機能を Places API に対応させる方法については、[Places への移行ガイド](/ja/docs/Places_Developer_Guide) で詳しく解説しています。

### ダウンロードマネージャー

RDF データ形式から [Storage](/ja/docs/Storage) API への移行にあたって、ダウンロードマネージャーの API にも若干変更が加えられました。これに関する移行作業は非常に簡単なはずです。また、複数のダウンロードマネージャーリスナーをサポートするため、ダウンロードの進捗状況を監視する API にも変更がありました。詳しくは `nsIDownloadManager`、`nsIDownloadProgressListener`、[ダウンロードの監視](/ja/docs/Monitoring_downloads) を参照してください。

### パスワードマネージャー

あなたの拡張機能からパスワードマネージャーを利用してユーザのログイン情報にアクセスしている場合、新しいログインマネージャー API を利用するように更新する必要があります。

- [nsILoginManager の使い方](/ja/docs/XPCOM_Interface_Reference/Using_nsILoginManager) という記事には、パスワードマネージャーとログインマネージャーの両方を用いることで、Firefox 3 とそれ以前のバージョンの両方で機能拡張を動作させるデモなど、コードサンプルが載っています。
- `nsILoginInfo`
- `nsILoginManager`

拡張機能の中で独自のパスワードストレージを提供したい場合は、組み込みのパスワードマネージャーストレージを上書きすることもできます。詳しくは [ログインマネージャー用ストレージモジュールの作成](/ja/docs/Creating_a_Login_Manager_storage_module) をご覧ください。

#### ポップアップ (メニュー、コンテキストメニュー、ツールチップ、パネル)

XUL のポップアップシステムは Firefox 3 で大幅に変更されました。ポップアップシステムには、メインメニュー、コンテキストメニュー、ポップアップパネルが含まれます。新しいシステムの仕組みについては [ポップアップの使用](/ja/docs/XUL/PopupGuide) ガイドをご覧ください。特筆すべき点は、`popup.showPopup` が非推奨となり、新しい `popup.openPopup` と `popup.openPopupAtScreen` に置き換えられたことです。

#### 自動補完

`nsIAutoCompleteController` インターフェイスの `handleEnter()` メソッドは、テキストが自動補完ポップアップから選択されたか、ユーザが自分で入力した後 Enter キーを押したかを示す引数を受け付けるよう変更が行われました。

### DOMParser

- `DOMParser` がインスタンス化されると、呼び出したコードのプリンシパルと、コンストラクターが呼び出したウィンドウの `documentURI` と `baseURI` を継承するようになります。
- 呼び出し元が UniversalXPConnect の権限を持っている場合、`new DOMParser()` に引数を渡すことができます。渡される引数が 3 つ以下の場合、残りの引数は既定で `null` になります。

  - 最初の引数は使用するプリンシパルです。これは通常継承されるデフォルトプリンシパルを上書きします。
  - 2 番目の引数には、使用する `documentURI` を指定します。
  - 3 番目の引数は、使用する `baseURI` です。

- `createInstance()` などのコントラクトを使用して `DOMParser` を初期化し、 `DOMParser` の `init()` メソッドを呼び出さない場合、解釈処理を開始しようとすると、自動的に `DOMParser` が生成されてプリンシパルが `null` に、 `documentURI` と `baseURI` が `null` ポインターで初期化されることになります。

### 内部文字列 API の使用中止

内部文字列 API がエクスポートされなくなったので、外部文字列 API に移行する必要があります。有用な情報については、これらの記事を参照してください。

- [Mozilla の外部文字列ガイド](/ja/docs/Mozilla_external_string_guide)
- [XPCOM Glue](/ja/docs/XPCOM_Glue)
- [内部連携から凍結連携への移行について](/ja/docs/Migrating_from_Internal_Linkage_to_Frozen_Linkage)

### 削除されたインタフェース

以下のインタフェースは、Firefox 3 の基盤である Gecko 1.9 から削除されました。あなたの拡張機能でいずれかを使用している場合、コードを更新する必要があるでしょう。

- `nsIDOMPaintListener`
- `nsIDOMScrollListener`
- `nsIDOMMutationListener`
- `nsIDOMPageTransitionListener`
- `nsICloseAllWindows` ([Firefox バグ 386200](https://bugzil.la/386200) 参照)

### Step 4: 関連するクローム周りの変更を確認する

コードに修正を加える必要があるかもしれない小さな変更がクロームに対して行われました。

### 新しいボックス

"browser-bottombox" と呼ばれる新しい `vbox` が追加されました。これは、ブラウザーウィンドウの下部にあるページ内検索バーとステータスバーを含むものです。この変更は見た目には影響しませんが、あなたの拡張機能がこれらの要素に関するクロームにオーバーレイを行っている場合、影響を受ける可能性があります。

例えばこれまで、次のように、ステータスバーの直前にクロームをオーバーレイしていた場合、

```xml
<window id="main-window">
  <something insertbefore="status-bar" />
</window>
```

今後は次のようにオーバーレイを行う必要があります。

```xml
<vbox id="browser-bottombox">
  <something insertbefore="status-bar" />
</vbox>
```

また、以下のテクニックを使って、Firefox 2 と Firefox 3 の両方でオーバーレイを動作させることもできます。

```xml
<window id="main-window">
  <vbox id="browser-bottombox" insertbefore="status-bar">
    <something insertbefore="status-bar" />
  </vbox>
</window>
```

### ボックスの変更

"appcontent" ボックスにオーバーレイして文書コンテンツの上にクロームを浮かせようとする拡張機能は、その素材を表示しなくなりました。新しい [`<xul:panel>`](/ja/docs/Mozilla/Tech/XUL/panel) XUL 要素を使うように拡張機能を更新する必要があります。もし、パネルが遅延後に自動的に消えないようにしたい場合は、 `noautohide` 属性を `true` に設定してください。

### その他の変更

_もし、拡張機能を Firefox 3 対応にするために必要な小さい変更があったら、ここに追加してください。_

- `chrome://browser/base/utilityOverlay.js` は、セキュリティ上の理由からサポートされなくなりました。これまでこのスクリプトを利用していた場合は、`chrome://browser/content/utilityOverlay.js` へ切り替えてください。
- `nsIAboutModule` の実装には、`getURIFlags` メソッドのサポートが必要になりました。詳しくは [nsIAboutModule.idl](https://dxr.mozilla.org/mozilla-central/source/netwerk/protocol/about/nsIAboutModule.idl) を参照してください。これは新しい `about:` URI を提供する拡張機能に影響します。 ([Firefox バグ 337746](https://bugzil.la/337746))
- [`<xul:tabbrowser>`](/ja/docs/Mozilla/Tech/XUL/tabbrowser) 要素は「ツールキット」の一部ではなくなりました ([Firefox バグ 339964](https://bugzil.la/339964))。このため、この要素は今後 XUL アプリケーションや拡張機能の中では利用できません。ただし、Firefox のメインウィンドウ (browser.xul) では今後も使われます。
- `nsISupports_proxies` の変更と、おそらくスレッド関連インターフェイスへの変更については、ドキュメントを用意する必要があります。
- XUL ファイル内で `<?xml-stylesheet ?>` などの XML 処理命令を用いている場合、 [Firefox バグ 319654](https://bugzil.la/319654) で行われた以下の変更に注意してください。

  1. XML PI が XUL ドキュメントの DOM に追加されました。これは、 {{ Domxref("Node.firstChild", "document.firstChild") }} が必ずしもルート要素を返すとは限らない、ということを意味します。スクリプト内でルートドキュメントを得るには、代わりに {{ Domxref("document.documentElement") }} を用いてください。
  2. `<?xml-stylesheet ?>` と `<?xul-overlay ?>` 処理命令は、ドキュメントの前文以外の場所に書かれた場合、動作しなくなりました。

- `window.addEventListener("load", myFunc, true)` がウェブコンテンツが読み込まれた際 (ブラウザーのページ読み込み時) に呼び出されなくなりました。これは、 [Firefox バグ 296639](https://bugzil.la/296639) によって inner ウィンドウと outer ウィンドウの関係が変わったことによります。簡単な修正方法は `gBrowser.addEventListener("load", myFunc, true)` を使うことで、[ここ](/ja/docs/Code_snippets/Tabbed_browser#detecting_page_load)書かれている通りです。この方法は Firefox 2 でも有効です。
- `content.window.getSelection()` は、文字列を返す、非推奨となった `content.document.getSelection()` とは異なり、オブジェクトを返します (`toString()` を使えば文字列に変換できます)。
- `event.preventBubble()` は Firefox 3 で非推奨となり、Firefox 3 で削除されました。Firefox 2 でも動作する [`event.stopPropagation()`](/ja/docs/Web/API/Event/stopPropagation) を使ってください。
- `setTimeout()` を使って開始されるタイマーは、[Firefox バグ 52209](https://bugzil.la/52209) のために行われた修正によって、モーダル形式のウィンドウではブロックされるようになりました。代わりに `nsITimer` を使ってください。
- 信頼できないソース（例：ウェブサイト）が拡張のクロームにアクセスできるようにする必要がある場合は、新しい [`contentaccessible` フラグ](/ja/docs/Chrome_Registration#contentaccessible) を使わなければなりません。
