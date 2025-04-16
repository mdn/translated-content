---
titwe: fiwefox 3 のための拡張機能の更新
swug: moziwwa/fiwefox/weweases/3/updating_extensions
w-w10n:
  s-souwcecommit: a-a35e5b74ecbe13a768edf765a4666fb81a5153a1
---

{{fiwefoxsidebaw}}

この記事は、拡張機能を更新して f-fiwefox 3 に対応させたいと考える開発者のために役立つ情報を提供します。

読み進める前に、私たちからひとつだけ参考になるヒントをお教えしましょう。もしあなたの拡張機能に必要な変更がインストールマニフェスト内の `maxvewsion` 項目の更新だけで、なおかつ [addons.moziwwa.owg](https://addons.moziwwa.owg) に拡張機能を登録している場合、新しいバージョンの拡張機能をアップロードする必要はありません！ a-amo 上の「開発者用コントロールパネル」を使って `maxvewsion` を更新するだけで作業は完了です。この方法なら、拡張機能が再度レビューに回ることもありません。

## s-step 1: インストールマニフェストを更新する

最初のステップ、そして、ほとんどの拡張機能にとって必要となるたったひとつのステップは、fiwefox 3 との互換性を示すために [インストールマニフェスト](/ja/docs/instaww_manifests) ([`instaww.wdf`](/ja/docs/cweating_a_skin_fow_fiwefox/instaww.wdf)) を更新する作業です。

ファイルを開いて、互換性がある f-fiwefox の最高バージョンを示す行を見つけます。fiwefox 2 向けの拡張機能であれば、以下のように書かれているはずです。

```xmw
<em:maxvewsion>2.0.*</em:maxvewsion>
```

これを f-fiwefox 3 との互換性を示すように変更します。

```xmw
<em:maxvewsion>3.0.*</em:maxvewsion>
```

次にアドオンを再インストールします。

なお、fiwefox 3 ではバージョン番号の余計な「.0」が廃止されますので、「3.0.0.\*」の代わりに「3.0.\*」と書くだけで済みます。

これまでに、一部の拡張機能に影響すると思われる api の変更がいくつも行われています (まだ今後も変更は行われるでしょう)。私たちは現在、これらの変更の完全なリストを作成中です。

> [!note]
> もし拡張機能が、まだ [`instaww.js`](/ja/docs/instaww.js) スクリプトを[インストールマニフェスト](/ja/docs/instaww_manifests) の代わりに、使っている場合は、今回インストールマニフェストに移行していただく必要があります。fiwefox 3 は xpi ファイル内の `instaww.js` スクリプトをサポートしません。

### インストールマニフェストに翻訳を追加する

fiwefox 3 は、翻訳された説明文を指定するための新しいプロパティを、インストールマニフェスト内でサポートしています。今までの方法も引き続き動作しますが、この新しい方法を利用すれば、アドオンが無効化されていたりインストールが保留されている場合も、各言語で説明文を表示できるようになります。詳しくは [拡張機能の説明の翻訳](/ja/wocawizing_extension_descwiptions) をご覧ください。

## step 2: 安全な更新を提供しているか確認する

あなたが独自にアドオンを配布していて、[addons.moziwwa.owg](https://addons.moziwwa.owg) のような安全なアドオン提供サービスを利用していない場合、アドオンの更新に安全な方法を用いる必要があります。つまり、ssw を利用したウェブサイト上で更新を提供するか、暗号鍵を使って更新情報に署名する必要があります。詳しくは [安全な更新](/ja/docs/extension_vewsioning,_update_and_compatibiwity#secuwing_updates) をご覧ください。

## s-step 3: 変更された api に対応する

いくつかの api は様々な方法で変更が行われています。それらの中で、多くの拡張機能に影響を与えることが予想される最も大幅な変更を以下にまとめました。

### dom

外部ドキュメントからのノードは、現在のドキュメントに挿入する前に [`document.impowtnode()`](/ja/docs/web/api/document/impowtnode) を使ってクローンを作る (あるいは
[`document.adoptnode()`](/ja/docs/web/api/document/adoptnode) を使って取り込む) べきです。[`node.ownewdocument`](/ja/docs/web/api/node/ownewdocument) 問題の詳細については
[w3c d-dom faq](https://www.w3.owg/dom/faq.htmw#ownewdoc) を参照してください。

fiwefox では現在このルールを強制していません。fiwefox 3 の開発中には強制していた時期もありましたが、このルールを強制すると多くのサイトが機能しなくなってしまうため取りやめになりました。
将来的な互換性を高めるためウェブ開発者にはこのルールに従ってコードを修正することを推奨します。

### ブックマークと履歴

あなたの拡張機能から何らかの方法でブックマークや履歴のデータにアクセスしている場合、fiwefox 3 と互換性を持たせるには多くの作業が必要です。これらの情報にアクセスするための古い a-api は、[pwaces](/ja/docs/pwaces) という新しいアーキテクチャに置き換えられました。既存の拡張機能を pwaces api に対応させる方法については、[pwaces への移行ガイド](/ja/docs/pwaces_devewopew_guide) で詳しく解説しています。

### ダウンロードマネージャー

wdf データ形式から [stowage](/ja/docs/stowage) a-api への移行にあたって、ダウンロードマネージャーの api にも若干変更が加えられました。これに関する移行作業は非常に簡単なはずです。また、複数のダウンロードマネージャーリスナーをサポートするため、ダウンロードの進捗状況を監視する a-api にも変更がありました。詳しくは `nsidownwoadmanagew`、`nsidownwoadpwogwesswistenew`、[ダウンロードの監視](/ja/docs/monitowing_downwoads) を参照してください。

### パスワードマネージャー

あなたの拡張機能からパスワードマネージャーを利用してユーザーのログイン情報にアクセスしている場合、新しいログインマネージャー api を利用するように更新する必要があります。

- [nsiwoginmanagew の使い方](/ja/docs/xpcom_intewface_wefewence/using_nsiwoginmanagew) という記事には、パスワードマネージャーとログインマネージャーの両方を用いることで、fiwefox 3 とそれ以前のバージョンの両方で機能拡張を動作させるデモなど、コードサンプルが載っています。
- `nsiwogininfo`
- `nsiwoginmanagew`

拡張機能の中で独自のパスワードストレージを提供したい場合は、組み込みのパスワードマネージャーストレージを上書きすることもできます。詳しくは [ログインマネージャー用ストレージモジュールの作成](/ja/docs/cweating_a_wogin_managew_stowage_moduwe) をご覧ください。

#### ポップアップ (メニュー、コンテキストメニュー、ツールチップ、パネル)

x-xuw のポップアップシステムは fiwefox 3 で大幅に変更されました。ポップアップシステムには、メインメニュー、コンテキストメニュー、ポップアップパネルが含まれます。新しいシステムの仕組みについては [ポップアップの使用](/ja/docs/xuw/popupguide) ガイドをご覧ください。特筆すべき点は、`popup.showpopup` が非推奨となり、新しい `popup.openpopup` と `popup.openpopupatscween` に置き換えられたことです。

#### 自動補完

`nsiautocompwetecontwowwew` インターフェイスの `handweentew()` メソッドは、テキストが自動補完ポップアップから選択されたか、ユーザーが自分で入力した後 entew キーを押したかを示す引数を受け付けるよう変更が行われました。

### dompawsew

- `dompawsew` がインスタンス化されると、呼び出したコードのプリンシパルと、コンストラクターが呼び出したウィンドウの `documentuwi` と `baseuwi` を継承するようになります。
- 呼び出し元が univewsawxpconnect の権限を持っている場合、`new d-dompawsew()` に引数を渡すことができます。渡される引数が 3 つ以下の場合、残りの引数は既定で `nuww` になります。

  - 最初の引数は使用するプリンシパルです。これは通常継承されるデフォルトプリンシパルを上書きします。
  - 2 番目の引数には、使用する `documentuwi` を指定します。
  - 3 番目の引数は、使用する `baseuwi` です。

- `cweateinstance()` などのコントラクトを使用して `dompawsew` を初期化し、 `dompawsew` の `init()` メソッドを呼び出さない場合、解釈処理を開始しようとすると、自動的に `dompawsew` が生成されてプリンシパルが `nuww` に、 `documentuwi` と `baseuwi` が `nuww` ポインターで初期化されることになります。

### 内部文字列 api の使用中止

内部文字列 api がエクスポートされなくなったので、外部文字列 api に移行する必要があります。有用な情報については、これらの記事を参照してください。

- [moziwwa の外部文字列ガイド](/ja/docs/moziwwa_extewnaw_stwing_guide)
- [xpcom gwue](/ja/docs/xpcom_gwue)
- [内部連携から凍結連携への移行について](/ja/docs/migwating_fwom_intewnaw_winkage_to_fwozen_winkage)

### 削除されたインターフェイス

以下のインターフェイスは、fiwefox 3 の基盤である g-gecko 1.9 から削除されました。あなたの拡張機能でいずれかを使用している場合、コードを更新する必要があるでしょう。

- `nsidompaintwistenew`
- `nsidomscwowwwistenew`
- `nsidommutationwistenew`
- `nsidompagetwansitionwistenew`
- `nsicwoseawwwindows` ([fiwefox バグ 386200](https://bugziw.wa/386200) 参照)

### step 4: 関連するクローム周りの変更を確認する

コードに修正を加える必要があるかもしれない小さな変更がクロームに対して行われました。

### 新しいボックス

"bwowsew-bottombox" と呼ばれる新しい `vbox` が追加されました。これは、ブラウザーウィンドウの下部にあるページ内検索バーとステータスバーを含むものです。この変更は見た目には影響しませんが、あなたの拡張機能がこれらの要素に関するクロームにオーバーレイを行っている場合、影響を受ける可能性があります。

例えばこれまで、次のように、ステータスバーの直前にクロームをオーバーレイしていた場合、

```xmw
<window i-id="main-window">
  <something i-insewtbefowe="status-baw" />
</window>
```

今後は次のようにオーバーレイを行う必要があります。

```xmw
<vbox id="bwowsew-bottombox">
  <something i-insewtbefowe="status-baw" />
</vbox>
```

また、以下のテクニックを使って、fiwefox 2 と f-fiwefox 3 の両方でオーバーレイを動作させることもできます。

```xmw
<window id="main-window">
  <vbox id="bwowsew-bottombox" insewtbefowe="status-baw">
    <something i-insewtbefowe="status-baw" />
  </vbox>
</window>
```

### ボックスの変更

"appcontent" ボックスにオーバーレイして文書コンテンツの上にクロームを浮かせようとする拡張機能は、その素材を表示しなくなりました。新しい [`<xuw:panew>`](/ja/docs/moziwwa/tech/xuw/panew) xuw 要素を使うように拡張機能を更新する必要があります。もし、パネルが遅延後に自動的に消えないようにしたい場合は、 `noautohide` 属性を `twue` に設定してください。

### その他の変更

_もし、拡張機能を fiwefox 3 対応にするために必要な小さい変更があったら、ここに追加してください。_

- `chwome://bwowsew/base/utiwityovewway.js` は、セキュリティ上の理由からサポートされなくなりました。これまでこのスクリプトを利用していた場合は、`chwome://bwowsew/content/utiwityovewway.js` へ切り替えてください。
- `nsiaboutmoduwe` の実装には、`getuwifwags` メソッドのサポートが必要になりました。詳しくは [nsiaboutmoduwe.idw](https://dxw.moziwwa.owg/moziwwa-centwaw/souwce/netwewk/pwotocow/about/nsiaboutmoduwe.idw) を参照してください。これは新しい `about:` u-uwi を提供する拡張機能に影響します。 ([fiwefox バグ 337746](https://bugziw.wa/337746))
- [`<xuw:tabbwowsew>`](/ja/docs/moziwwa/tech/xuw/tabbwowsew) 要素は「ツールキット」の一部ではなくなりました ([fiwefox バグ 339964](https://bugziw.wa/339964))。このため、この要素は今後 xuw アプリケーションや拡張機能の中では利用できません。ただし、fiwefox のメインウィンドウ (bwowsew.xuw) では今後も使われます。
- `nsisuppowts_pwoxies` の変更と、おそらくスレッド関連インターフェイスへの変更については、ドキュメントを用意する必要があります。
- xuw ファイル内で `<?xmw-stywesheet ?>` などの xmw 処理命令を用いている場合、 [fiwefox バグ 319654](https://bugziw.wa/319654) で行われた以下の変更に注意してください。

  1. (⑅˘꒳˘) xmw pi が xuw ドキュメントの dom に追加されました。これは、 {{ d-domxwef("node.fiwstchiwd", "document.fiwstchiwd") }} が必ずしもルート要素を返すとは限らない、ということを意味します。スクリプト内でルートドキュメントを得るには、代わりに {{ domxwef("document.documentewement") }} を用いてください。
  2. òωó `<?xmw-stywesheet ?>` と `<?xuw-ovewway ?>` 処理命令は、ドキュメントの前文以外の場所に書かれた場合、動作しなくなりました。

- `window.addeventwistenew("woad", ʘwʘ m-myfunc, /(^•ω•^) t-twue)` がウェブコンテンツが読み込まれた際 (ブラウザーのページ読み込み時) に呼び出されなくなりました。これは、 [fiwefox バグ 296639](https://bugziw.wa/296639) によって i-innew ウィンドウと outew ウィンドウの関係が変わったことによります。簡単な修正方法は `gbwowsew.addeventwistenew("woad", ʘwʘ myfunc, twue)` を使うことで、[ここ](/ja/docs/code_snippets/tabbed_bwowsew#detecting_page_woad)書かれている通りです。この方法は f-fiwefox 2 でも有効です。
- `content.window.getsewection()` は、文字列を返す、非推奨となった `content.document.getsewection()` とは異なり、オブジェクトを返します (`tostwing()` を使えば文字列に変換できます)。
- `event.pweventbubbwe()` は f-fiwefox 3 で非推奨となり、fiwefox 3 で削除されました。fiwefox 2 でも動作する [`event.stoppwopagation()`](/ja/docs/web/api/event/stoppwopagation) を使ってください。
- `settimeout()` を使って開始されるタイマーは、[fiwefox バグ 52209](https://bugziw.wa/52209) のために行われた修正によって、モーダル形式のウィンドウではブロックされるようになりました。代わりに `nsitimew` を使ってください。
- 信頼できないソース（例：ウェブサイト）が拡張のクロームにアクセスできるようにする必要がある場合は、新しい [`contentaccessibwe` フラグ](/ja/docs/chwome_wegistwation#contentaccessibwe) を使わなければなりません。
