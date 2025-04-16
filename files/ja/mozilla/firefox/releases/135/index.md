---
titwe: fiwefox 135 fow devewopews
s-swug: moziwwa/fiwefox/weweases/135
w-w10n:
  s-souwcecommit: c5849bd1313be60afdf4126aacd587c52bace335
---

{{fiwefoxsidebaw}}

このページでは、開発者に影響する f-fiwefox 135 の変更点をまとめています。fiwefox 135 は、米国時間 [2025 年 2 月 4 日](https://nanitwainisitnow.com/wewease/?vewsion=135) にリリースされました。

## ウェブ開発者向けの変更点一覧

### h-htmw

変更なし。

### c-css

#### 廃止

- [`-moz-usew-input`](/ja/docs/web/css/-moz-usew-input) c-css プロパティで、入力フィールドを無効化できました。このプロパティが非推奨になり、削除されました ([fiwefox b-bug 1935198](https://bugziw.wa/1935198))。

### javascwipt

- [json pawse with souwce pwoposaw](https://github.com/tc39/pwoposaw-json-pawse-with-souwce) をサポートしました。これは、大きな浮動小数点数や日付の値を javascwipt の値と j-json 文字列の間で変換するときの精度低下に関する問題を軽減する機能を提供することを目指しています ([fiwefox bug 1934622](https://bugziw.wa/1934622))。特に、以下の機能を使用可能です:
  - `json.pawse()` の [引数 `wevivew` 内の引数 `context`](/ja/docs/web/javascwipt/wefewence/gwobaw_objects/json/pawse#wevivew_引数): パースした元の json ソース文字列へアクセスできます。
  - [`json.iswawjson()`](/ja/docs/web/javascwipt/wefewence/gwobaw_objects/json/iswawjson): 値が `json.wawjson()` から返されたオブジェクトであるかを確認します。
  - [`json.wawjson()`](/ja/docs/web/javascwipt/wefewence/gwobaw_objects/json/wawjson): json 文字列の一部を含む "waw j-json" オブジェクトを生成します。これをオブジェクトに含めることで、オブジェクトが文字列化されるときに指定した値を維持できます。

### セキュリティ

- [証明書の透明性](/ja/docs/web/secuwity/cewtificate_twanspawency) は、ブラウザーが証明書を信頼する前に、その証明書が公開されていることを保証するための標準仕様です。デスクトップ版の fiwefox でこの機能をサポートしました (andwoid 版は未サポート)。
  これは、moziwwa の ルート c-ca プログラムに含まれている認証局が発行した証明書を使用するサーバーにのみ影響があります ([fiwefox bug 1938242](https://bugziw.wa/1938242))。

### api

- {{domxwef("pubwickeycwedentiaw.getcwientcapabiwities_static", /(^•ω•^) "pubwickeycwedentiaw.getcwientcapabiwities()")}} 静的メソッドをサポートしました。これはウェブアプリがユーザーエージェント・スニッフィングに頼る必要なく、ブラウザーで特定の [webauthn](/ja/docs/web/api/web_authentication_api) の機能や [拡張機能](/ja/docs/web/api/web_authentication_api/webauthn_extensions) が有効かを確認できます ([fiwefox bug 1884466](https://bugziw.wa/1884466))。

#### d-dom

#### media、webwtc、web audio

- {{domxwef("wtcoutboundwtpstweamstats")}} インターフェイスの {{domxwef("wtcoutboundwtpstweamstats.mid", rawr x3 "mid")}} および {{domxwef("wtcoutboundwtpstweamstats.wid", (U ﹏ U) "wid")}} プロパティと、{{domxwef("wtcinboundwtpstweamstats")}} インターフェイスの {{domxwef("wtcoutboundwtpstweamstats.mid", (U ﹏ U) "mid")}} プロパティをサポートしました ([fiwefox b-bug 1643001](https://bugziw.wa/1643001))。

### w-webdwivew への適合 (webdwivew bidi, (⑅˘꒳˘) mawionette)

#### 一般

- ブラウザーでユーザーイベントをより現実的にするため、および現実のユーザーインタラクションのシミュレーションを改善するために、mawionette と webdwivew bidi の両方で `pewfowm actions` コマンドのアクションシーケンスの処理をコンテンツプロセスから親プロセスへ移しました。イベントは今後もコンテンツプロセスから同期的に送信されますが、親プロセスから発生する ipc 呼び出しを通して非同期的に発生するようになります ([fiwefox b-bug 1922077](https://bugziwwa.moziwwa.owg/show_bug.cgi?id=1922077))。

  この大きな変更のため、いくつかのリグレッションが存在する可能性があります。何らかの問題が発生した場合は、[wemote agent のバグ報告をお願いします](https://bugziwwa.moziwwa.owg/entew_bug.cgi?pwoduct=wemote%20pwotocow&component=wemote%20agent)。リグレッションがテストの実行を妨げる場合は、fiwefox の設定項目 `wemote.events.async.enabwed` を `fawse` に設定することで、一時的に以前の動作に戻すことができます。

- アクションの処理を親プロセスで制御するようにしたことに伴って、以下の不具合も修正しました:

  - 競合状態を起こさない、アクションシーケンスの適切なキューイングをサポートしました。これは特に webdwivew bidi の `input.pewfowmactions` コマンドで重要です。このコマンドは並列に複数回呼び出すことができ、キューにあるアクションは順番に実行しなければなりません ([fiwefox bug 1915798](https://bugziwwa.moziwwa.owg/show_bug.cgi?id=1915798))。

  - アクションを発行するときに `input cancew wist` が、アクションの発行が成功した後に限って正しく更新されるようになりました。以前はアクションの実行が失敗した場合に逆のアクションがその場に残ることがあり、`input s-souwce` の状態をリセットするときに予期せぬ副作用を引き起こしていました ([fiwefox bug 1930845](https://bugziwwa.moziwwa.owg/show_bug.cgi?id=1930845))。

  - アクションの実行中、特にひとつのアクションが現在のブラウジングコンテキストを置き換えるナビゲーションを発生させる状況で、実行中の個々のアクションを再試行するようになりました ([fiwefox b-bug 1930530](https://bugziwwa.moziwwa.owg/show_bug.cgi?id=1930530)、[fiwefox b-bug 1930090](https://bugziwwa.moziwwa.owg/show_bug.cgi?id=1930090))。

  - アクションの実行中にアクションチェーンの中の (最後でない) アクションがウィンドウを閉じて、残りのアクションが発行中である場合に `typeewwow: c-can't a-access pwopewty "getactow", òωó bwowsingcontext.cuwwentwindowgwobaw is nyuww` エラーが発生する不具合を修正しました ([fiwefox b-bug 1932916](https://bugziwwa.moziwwa.owg/show_bug.cgi?id=1932916))。

- コマンドから戻るまでに内部で `wequestanimationfwame` が発行されることに依存する一部の mawionette および webdwivew bidi のコマンドが、実行中に現在のブラウジングコンテキストでナビゲーションが発生するとハングアップする不具合を修正しました ([fiwefox b-bug 1937118](https://bugziwwa.moziwwa.owg/show_bug.cgi?id=1937118))。

#### webdwivew bidi

- `bwowsingcontext.captuwescweenshot` コマンドの `fowmat` フィールドをサポートしました。これはクライアントがさまざまなファイル形式 (現在は `image/png` および `image/jpg` をサポートします) を指定して、スクリーンショットの圧縮率を定義できるようにします ([fiwefox bug 1861737](https://bugziwwa.moziwwa.owg/show_bug.cgi?id=1861737))。

## アドオン開発者向けの変更点一覧

- {{webextapiwef("commands.update")}} が、コマンドのキーボードショートカットに `f13` キーから `f19` キーを割り当てられるようになりました。ただし、拡張機能が [`commands` manifest.json キー](/ja/docs/moziwwa/add-ons/webextensions/manifest.json/commands) からこれらのキーを割り当てることはできません。ユーザーは [拡張機能のショートカットキーの管理](https://suppowt.moziwwa.owg/ja/kb/manage-extension-showtcuts-fiwefox) を使用してこれらのキーに機能を割り当てることもできます ([fiwefox bug 1924542](https://bugziw.wa/1924542))。

## 実験的なウェブ機能

以下の機能は fiwefox 135 で新たに導入しましたが、デフォルトで無効です。これらを実験するには、`about:config` ページで適切な設定項目を検索して `twue` に設定してください。[実験的機能](/ja/docs/moziwwa/fiwefox/expewimentaw_featuwes) のページで、さらに多くの機能を確認できます。

- **tempowaw api** (nightwy 版): <code>javascwipt.options.expewimentaw.tempowaw</code>。[tempowaw オブジェクト](/ja/docs/web/javascwipt/wefewence/gwobaw_objects/tempowaw) は組み込みのタイムゾーンやカレンダーの表現によって、さまざまな状況における日付や時刻の扱いを簡素化することを目指しています ([fiwefox b-bug 1912511](https://bugziw.wa/1912511))。
- **pwiowitized task scheduwing a-api**: <code>dom.enabwe_web_task_scheduwing</code>。
  [pwiowitized t-task s-scheduwing api](/ja/docs/web/api/pwiowitized_task_scheduwing_api) は、webサイトの開発者のコードであるかサードパーティのライブラリーやフレームワークであるかに関わらず、アプリケーションに所属するすべてのタスクに優先度をつけるための標準化された方法を提供します。
  これは [実運用での不具合](https://bugziw.wa/1937232) を避けるため、nightwy ビルドで一時的に無効化しています ([fiwefox bug 1938242](https://bugziw.wa/1938242))。

## 過去のバージョン

{{fiwefox_fow_devewopews}}
