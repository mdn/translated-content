---
title: Updating extensions for Firefox 3.1
slug: Mozilla/Firefox/Releases/3.5/Updating_extensions
---

この記事は、自分の拡張機能を Firefox 3.1 で正しく動作するよう更新しようとしている拡張機能開発者のために役立つ情報を提供します。

## 更新の基本

この節では、Firefox の新しいバージョンに向けて拡張機能を更新する際に必ず行わなければならないことの基本を説明します。

### 拡張機能のテスト

まずはじめに、拡張機能の `install.rdf` ファイルを編集して、(Firefox 3.1 beta 2 でテストを行っている場合は) `maxVersion` を 3.1b2 に更新し、それに合わせて `version` を上げましょう。

Firefox のプロファイルを新規作成し、テストが常用のプロファイルに影響しないようにします。 Firefox が含まれるディレクトリに移動して、以下のコマンドを実行します。

```
firefox -createProfile testBeta2
```

Mac では、Firefox のアプリケーションバンドル内へはるばる移動する必要があります。

```
cd /Applications/Firefox.app/Contents/MacOS/
firefox -createProfile testBeta2
```

コマンドライン上で以下のコマンドを実行し、新規プロファイルで Firefox を起動します。

```
firefox -P testBeta2
```

自分の拡張機能を徹底的にテストします。 JavaScript のあらゆる警告や例外を通知するために、以下の設定項目を true に設定しておくことをお勧めします。

- `javascript.options.strict`
- `javascript.options.showInConsole`

### 拡張機能の更新

テスト中に何か問題を発見した場合は、コードを更新して問題を修正しましょう。 この記事には、若干の更新作業が必要な箇所についての役立つ情報が載っています。

テストが完了したら、今度は常用のプロファイルを使って、再度その拡張機能を使ってみます。 この作業は、保存されている既存のデータとの互換性を確認するのに役立ちます。

### addons.mozilla.org に登録されている拡張機能の更新

ついに、更新した拡張機能を公開するときが来ました。 もし自分の拡張機能に一切コードの変更が必要ない場合は、AMO のダッシュボードにログインして、互換性のあるバージョンを更新するだけで済みます。 何らかの変更を加えた場合は、新しいバージョンを AMO にアップロードする必要があります。

詳しくは [AMO へのアドオンの登録](/ja/Submitting_an_add-on_to_AMO) を参照してください。

## Places データベースへのアクセス

Firefox 3.1 以前は、[Storage API](/ja/Storage) を使って Places データベースへ直接アクセスする場合、以下のように少々工夫が必要でした。

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

[`textbox`](/ja/XUL/textbox) の種類のひとつ、`timed` は廃止予定となりました。代わりに `search` を使ってください。

Firefox 3 では、以下のようなコードが使われていたはずです。

```
<textbox type="timed" timeout="1000" oncommand="alert(this.value);"/>
```

Firefox 3.1 では、これを以下のように書き換える必要があります。

```
<textbox type="search" timeout="1000" oncommand="alert(this.value);"/>
```

## JSON

JSON.jsm JavaScript モジュールは Firefox 3.1 では削除され、ネイティブの JSON オブジェクトサポートに置き換えられました。 詳しくは、[Firefox で JSON を使用する](/ja/Using_JSON_in_Firefox) をご覧ください。JSON のより一般的な概要と、各種バージョンの Firefox で JSON を使う方法については、[JSON](/ja/JSON) のページからリンクされている記事を参照してください。

Firefox 3 と Firefox 3.1 の両方について互換性を確保するには、以下のように記述します。

```js
if (typeof JSON == "undefined") {
  Components.utils.import("resource://gre/modules/JSON.jsm");
  JSON.parse = JSON.fromString;
  JSON.stringify = JSON.toString;
}
```

JSON がネイティブサポートされていない場合は JSON.jsm JavaScript モジュールをインポートして、そのモジュールによって提供されているメソッドをネイティブ JSON で使われているものにマッピングします。これによって、同じ呼び出しが可能になります。

また、`nsIJSON` インタフェースを直接利用することでも、この問題を回避できます。

## クローム登録に関する変更

Firefox 3.1 では、リモートのクロームを利用可能にするセキュリティホールが修正されています。 これは、`chrome.manifest` ファイルに Web サイトを参照するリソースが含まれているすべてのアドオンに影響します。

この問題は [Firefox バグ 466582](https://bugzil.la/466582) で詳しく説明されています。`nsIProtocolHandler` インタフェースに追加された新しいフラグ `URI_IS_LOCAL_RESOURCE` によって、そのプロトコルがクロームとして登録しても安全であることを示すことができます。 独自のプロトコルハンドラを作成し、それを `chrome.manifest` 内で登録しようとするアドオンは、正しく動作するようにこのフラグを追加する必要があります。

## カスタマイズ可能なツールバー

Firefox 3.1 では、カスタマイズ可能なツールバーの挙動が次のように変更されました。\<xul:toolbar/> バインディングは、関連付けられた \<xul:toolbarpalette/> からツールバー削除、もしくはツールバーへ追加するようになりました。これまでは、項目を複製してツールバーへコピーしていました。 つまり、パレットには、ツールバー上に存在しないアイテムしか含めることができません。これまでの挙動では、ツールバー上に表示されているかどうかに関わらず、カスタマイズ可能なすべての要素が含まれていました。 これは、\<xul:toolbarpalette/> からカスタマイズ可能なすべてのツールバー項目を取得できることに依存した処理を行っていたり、ツールバーのカスタマイズ中に動的にパレットへ項目を挿入し、それらを利用可能にしようとしているアドオンで問題となる可能性があります。 詳しくは、[Firefox バグ 407725](https://bugzil.la/407725) と [Firefox バグ 467045](https://bugzil.la/467045) をご覧ください。

## 興味深い新機能

### すべてのタブのイベントを監視する

Firefox 3.1 では、すべてのタブを監視するプログレスリスナーを追加、削除できるようになりました。 詳しくは、[すべてのタブのイベントを監視する](/ja/Listening_to_events_on_all_tabs) をご覧ください。

## テーマ開発者の方へ

- [Firefox 3.1 でのテーマ関連の変更](/ja/Theme_changes_in_Firefox_3.1) を確認してください。
- Mozillazine フォーラムの [Theme changes for FF3.1](http://forums.mozillazine.org/viewtopic.php?f=18&t=665138) を参照して、3.0 から 3.1 の間に行われた、テーマ開発者に影響するすべての変更の概要、一覧を確認してください。 このスレッドでは、CSS の新機能 (nth-child、-moz-box-shadow など)、既存の UI 部品への変更、UI 全体の改善、Firefox 3.1 の新機能 (audio/video のサポート、プライベートブラウジング、セッション復元機能の拡張、ボックス・ウィンドウ・テキストシャドウ) が議論されています。
