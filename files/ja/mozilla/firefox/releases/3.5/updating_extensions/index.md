---
title: Firefox 3.5 の拡張機能の更新
slug: Mozilla/Firefox/Releases/3.5/Updating_extensions
l10n:
  sourceCommit: 886f2641ae90a70858c5e7d0d20959c70ee44d9d
---

この記事は、自分の拡張機能を Firefox 3.5 で正しく動作するよう更新しようとしている拡張機能開発者のために役立つ情報を提供します。

## 更新の基本

この節では、Firefox の新しいバージョンに向けて拡張機能を更新する際に必ず行わなければならないことの基本を説明します。

### 拡張機能のテスト

まずはじめに、拡張機能の `install.rdf` ファイルを編集して、(Firefox 3.1 beta 2 でテストを行っている場合は) `maxVersion` を 3.1b2 に更新し、それに合わせて `version` を上げましょう。

Firefox のプロファイルを新規作成し、テストが常用のプロファイルに影響しないようにします。 Firefox が含まれるディレクトリーに移動して、以下のコマンドを実行します。

```bash
firefox -createProfile testBeta4
```

Mac では、Firefox のアプリケーションバンドル内へはるばる移動する必要があります。

```bash
cd /Applications/Firefox.app/Contents/MacOS/
firefox -createProfile testBeta4
```

コマンドライン上で以下のコマンドを実行し、新規プロファイルで Firefox を起動します。

```bash
firefox -P testBeta4
```

自分の拡張機能を徹底的にテストします。 JavaScript のあらゆる警告や例外を通知するために、以下の設定項目を true に設定しておくことをお勧めします。

- `javascript.options.strict`
- `javascript.options.showInConsole`

### 拡張機能の更新

テスト中に何か問題を発見した場合は、コードを更新して問題を修正しましょう。 この記事には、若干の更新作業が必要な箇所についての役立つ情報が載っています。

テストが完了したら、今度は常用のプロファイルを使って、再度その拡張機能を使ってみます。 この作業は、保存されている既存のデータとの互換性を確認するのに役立ちます。

### addons.mozilla.org に登録されている拡張機能の更新

ついに、更新した拡張機能を公開するときが来ました。 もし自分の拡張機能に一切コードの変更が必要ない場合は、AMO のダッシュボードにログインして、互換性のあるバージョンを更新するだけで済みます。 何らかの変更を加えた場合は、新しいバージョンを AMO にアップロードする必要があります。

詳しくは [AMO へのアドオンの登録](https://extensionworkshop.com/documentation/publish/signing-and-distribution-overview/#distributing-your-addon) を参照してください。

## Places データベースへのアクセス

Firefox 3.1 以前は、[ストレージ API](https://web.archive.org/web/20210401045303/https://developer.mozilla.org/en-US/docs/Mozilla/Tech/XPCOM/Storage) を使って Places データベースへ直接アクセスする場合、以下のように少々工夫が必要でした。

```js
var places = Components.classes["@mozilla.org/file/directory_service;1"]
  .getService(Components.interfaces.nsIProperties)
  .get("ProfD", Components.interfaces.nsIFile);
places.append("places.sqlite");
var db = Components.classes["@mozilla.org/storage/service;1"]
  .getService(Components.interfaces.mozIStorageService)
  .openDatabase(places);
```

これは `places.sqlite` データベースファイルへのパスを自力で作成し、Storage アクセスのためのファイルを開くものでした。

Firefox 3.1 には、Places データベースへアクセスするための便利な方法を提供する、専用のサービスが追加されており、上記の方法は Firefox 3.1 以降では機能しません。

```js
var db = Components.classes[
  "@mozilla.org/browser/nav-history-service;1"
].getService(Components.interfaces.nsPIPlacesDatabase).DBConnection;
```

## テキストボックスの検索

[`textbox`](https://web.archive.org/web/20201205234810/https://developer.mozilla.org/en-US/docs/Archive/Mozilla/XUL/textbox) の種類のひとつ、`timed` は廃止予定となりました。代わりに `search` を使ってください。

Firefox 3 では、以下のようなコードが使われていたはずです。

```xml
<textbox type="timed" timeout="1000" oncommand="alert(this.value);"/>
```

Firefox 3.5 では、これを以下のように書き換える必要があります。

```xml
<textbox type="search" timeout="1000" oncommand="alert(this.value);"/>
```

## JSON

JSON.jsm JavaScript モジュールは Firefox 3.5 では削除され、ネイティブの JSON オブジェクトサポートに置き換えられました。詳細については、JSON の一般的な概要と Firefox の各バージョンでの使用方法については、[JSON](/ja/docs/Web/JavaScript/Reference/Global_Objects/JSON) の記事を参照してください。

Firefox 3 と Firefox 3.5 の両方について互換性を確保するには、以下のように記述します。

```js
if (typeof JSON === "undefined") {
  Components.utils.import("resource://gre/modules/JSON.jsm");
  JSON.parse = JSON.fromString;
  JSON.stringify = JSON.toString;
}
```

JSON がネイティブサポートされていない場合は JSON.jsm JavaScript モジュールをインポートして、そのモジュールによって提供されているメソッドをネイティブ JSON で使われているものにマッピングします。これによって、同じ呼び出しが可能になります。

また、`nsIJSON` インターフェイスを直接利用することでも、この問題を回避できます。

## コンテキストメニューの変更

Gecko 1.9.1 で追加された新しい音声と動画機能に対応するため、`nsContextMenu` クラスでは `imageURL` ゲッターが `mediaURL` に改名されました。ただし、`imageURL` は 2009 年 6 月 9 日に再び追加されました。

## クローム登録に関する変更

Firefox 3.5 では、リモートのクロームを利用可能にするセキュリティホールが修正されています。 これは、`chrome.manifest` ファイルにウェブサイトを参照するリソースが含まれているすべてのアドオンに影響します。詳しくは [Firefox 3.5 でのセキュリティの変更](/ja/docs/Mozilla/Firefox/Releases/3.5/Security_changes)を参照してください。

## リクエストから読み込みコンテキストを取得

以前は、各種 docShell API を呼び出すことでリクエストから読み込みコンテキストを取得することが可能でした。特に、`notificationCallbacks.getInterface(nsIDOMWindow)` を使用して読み込みに紐づくウィンドウオブジェクトを取得するのが一般的な手法でした。この従来の手法は状況によっては機能する場合もありますが、もはや使用することは推奨されません ([詳細](https://bugzil.la/457153#c16))。

この正しい確実な方法は、`nsILoadContext` を使用することです（[インターフェイス定義](https://searchfox.org/firefox-main/source/docshell/base/nsILoadContext.idl)を参照）。

JavaScript では、次のように行います。

```js
var loadContext;
try {
  loadContext = aRequest
    .QueryInterface(Components.interfaces.nsIChannel) // aRequest is equivalent to aSubject from observe
    .notificationCallbacks.getInterface(Components.interfaces.nsILoadContext);
} catch (ex) {
  try {
    loadContext = aRequest.loadGroup.notificationCallbacks.getInterface(
      Components.interfaces.nsILoadContext,
    );
  } catch (ex) {
    loadContext = null;
  }
}
// you can now use |loadContext.associatedWindow| to get the Window object
```

上記の例が機能しない場合の別の JavaScript の例です。

```js
// SOURCE: http://stackoverflow.com/questions/10719606/is-it-possible-to-know-the-target-domwindow-for-an-httprequest

function getWindowForRequest(request) {
  if (request instanceof Components.interfaces.nsIRequest) {
    try {
      if (request.notificationCallbacks) {
        return request.notificationCallbacks.getInterface(
          Components.interfaces.nsILoadContext,
        ).associatedWindow;
      }
    } catch (e) {}
    try {
      if (request.loadGroup && request.loadGroup.notificationCallbacks) {
        return request.loadGroup.notificationCallbacks.getInterface(
          Components.interfaces.nsILoadContext,
        ).associatedWindow;
      }
    } catch (e) {}
  }
  return null;
}
```

C++ から、次のように実行できます。

```cpp
nsCOMPtr<nsILoadContext> loadContext;
nsCOMPtr<nsIChannel> channel = do_QueryInterface(aRequest);
NS_QueryNotificationCallbacks(channel, loadContext);
```

## カスタマイズ可能なツールバー

Firefox 3.5 では、カスタマイズ可能なツールバーの挙動が次のように変更されました。`<xul:toolbar/>`バインディングは、関連付けられた `<xul:toolbarpalette/>` からツールバー削除、もしくはツールバーへ追加するようになりました。これまでは、項目を複製してツールバーへコピーしていました。 つまり、パレットには、ツールバー上に存在しない項目しか含めることができません。これまでの挙動では、ツールバー上に表示されているかどうかに関わらず、カスタマイズ可能なすべての要素が含まれていました。 これは、`<xul:toolbarpalette/>` からカスタマイズ可能なすべてのツールバー項目を取得できることに依存した処理を行っていたり、ツールバーのカスタマイズ中に動的にパレットへ項目を挿入し、それらを利用可能にしようとしているアドオンで問題となる可能性があります。 詳しくは、[Firefox バグ 407725](https://bugzil.la/407725) と [Firefox バグ 467045](https://bugzil.la/467045) をご覧ください。

## XPCNativeWrapper

Firefox 3.5 以降、`XPCNativeWrapper` オートメーションを取得するクロームパッケージで `data:` バインディングが使用できなくなりました。これにより潜在的なセキュリティ上の問題が解決されます。

XUL 文書は `XPCNativeWrapper` として扱われるようになりました。そのため、属性値を直接読み取る代わりに、`getAttribute()` メソッドを使用して取得する必要があります。

拡張機能が `xpcnativewrappers=no` を使用している場合（そもそも安全ではないため、使用すべきではありません）、Firefox 3.5 以降では、その拡張機能の XBL が `XPCNativeWrapper` オートメーションを使用している文書に適用されなくなります。

## 興味深い新機能

### すべてのタブのイベントを監視する

Firefox 3.1 では、すべてのタブを監視するプログレスリスナーを追加、削除できるようになりました。 詳しくは、[すべてのタブのイベントを監視する](https://web.archive.org/web/20210412023656/https://developer.mozilla.org/en-US/docs/Mozilla/Developer_guide/Listening_to_events_on_all_tabs)をご覧ください。

## テーマ開発者の方へ

- [Firefox 3.5 でのテーマ関連の変更](https://web.archive.org/web/20191004004454/https://developer.mozilla.org/en-US/docs/Archive/Themes/Theme_changes_in_Firefox_3.5)を確認してください。
- Mozillazine フォーラムの [Theme changes for FF3.1](http://forums.mozillazine.org/viewtopic.php?f=18&t=665138) を参照して、3.0 から 3.1 の間に行われた、テーマ開発者に影響するすべての変更の概要、一覧を確認してください。 このスレッドでは、CSS の新機能 (nth-child、-moz-box-shadow など)、既存の UI 部品への変更、UI 全体の改善、Firefox 3.1 の新機能 (audio/video のサポート、プライベートブラウジング、セッション復元機能の拡張、ボックス・ウィンドウ・テキストシャドウ) が議論されています。
