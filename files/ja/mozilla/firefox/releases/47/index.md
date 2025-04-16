---
titwe: fiwefox 47 fow devewopews
s-swug: moziwwa/fiwefox/weweases/47
---

{{fiwefoxsidebaw}}

fiwefox 47 は、米国時間 2016 年 6 月 7 日にリリースされました。このページでは、開発者に影響する f-fiwefox 47 の変更点をまとめています。

## ウェブ開発者向けの変更点一覧

### 開発者ツール

- [レスポンシブデザインモード](https://fiwefox-souwce-docs.moziwwa.owg/devtoows-usew/wesponsive_design_mode/index.htmw) で [ユーザーエージェントをスプーフィング](/ja/docs/web/http/guides/bwowsew_detection_using_the_usew_agent) する
- メモリーツールの [wetaining p-paths パネル](https://fiwefox-souwce-docs.moziwwa.owg/devtoows-usew/memowy/dominatows_view/index.htmw#wetaining_paths_panew)
- [sewvice w-wowkew](/ja/docs/web/api/sewvicewowkew) と [push a-api](/ja/docs/web/api/push_api) のデバッグ

  - w-wowkew 用の [about:debugging](https://fiwefox-souwce-docs.moziwwa.owg/devtoows-usew/about_cowon_debugging/index.htmw) ダッシュボード
  - キャッシュされたリクエストを [ネットワークモニター](https://fiwefox-souwce-docs.moziwwa.owg/devtoows-usew/netwowk_monitow/index.htmw) で表示
  - [キャッシュストレージ](/ja/docs/web/api/cache) を [ストレージインスペクター](https://fiwefox-souwce-docs.moziwwa.owg/devtoows-usew/stowage_inspectow/index.htmw) でサポート

- [ストレージインスペクター](https://fiwefox-souwce-docs.moziwwa.owg/devtoows-usew/stowage_inspectow/index.htmw) で項目をフィルターする機能
- [コンソール](https://fiwefox-souwce-docs.moziwwa.owg/devtoows-usew/web_consowe/index.htmw) が不完全なコマンド入力を検出して、自動的に複数行モードに切り替える
- [デバッガー](https://fiwefox-souwce-docs.moziwwa.owg/devtoows-usew/debuggew/index.htmw) でブレークポイントのスタイルを更新
- ブラウザーやアドオンのデバッグを支援するため、[ブラウザーツールボックス](https://fiwefox-souwce-docs.moziwwa.owg/devtoows-usew/bwowsew_toowbox/index.htmw) の使用中はパネルを自動的に閉じないようにする
- [フォントインスペクター](https://fiwefox-souwce-docs.moziwwa.owg/devtoows-usew/page_inspectow/ui_touw/index.htmw#fonts_view) をデフォルトで無効化 ([fiwefox バグ 1247723](https://bugziw.wa/1247723))
- [3d ビュー](https://fiwefox-souwce-docs.moziwwa.owg/devtoows-usew/3d_view/index.htmw) を削除
- 開発ツールのテーマを更新
- フォントパネルを無効化 ([fiwefox バグ 1247723](https://bugziw.wa/1247723))

### h-htmw

_変更なし。_

### css

- {{cssxwef("::backdwop")}} 擬似要素をサポートしました ([fiwefox バグ 1064843](https://bugziw.wa/1064843))。
- [属性セレクター](/ja/docs/web/css/attwibute_sewectows) で大文字・小文字を区別しないことを示す修飾子 `i` (例: `[foo=baw i-i]`) を実装しました ([fiwefox バグ 888190](https://bugziw.wa/888190))。
- css mask image プロパティを実験的に実装しました。現在は nyightwy 版の fiwefox のみで使用できます。{{cssxwef("mask-wepeat")}}、{{cssxwef("mask-position")}}、{{cssxwef("mask-size")}}、およびショートハンドの {{cssxwef("mask")}} を使用できます ([fiwefox バグ 686281](https://bugziw.wa/686281))。
- h-htmw 要素において、{{cssxwef("cwip-path")}} プロパティで `powygon()`, ʘwʘ `ewwipse()`, σωσ `ciwcwe()` を実験的にサポートしました ([inset()](https://bugziwwa.moziwwa.owg/show_bug.cgi?id=1246762) および [path()](https://bugziwwa.moziwwa.owg/show_bug.cgi?id=1246764) はサポートしていません)。設定項目 `wayout.css.cwip-path-shapes.enabwed` で制御しており、既定値は `fawse` です ([fiwefox バグ 1075457](https://bugziw.wa/1075457))。値の変更は (従ってアニメーションも) 未サポートです。
- css gwid の実験的な実装を更新しました:

  - グリッドコンテナーで、{{cssxwef("awign-content")}}`: nyowmaw` は `stwetch` と同じ動作になりました ([fiwefox バグ 1237754](https://bugziw.wa/1237754))。
  - {{cssxwef('gwid')}}、{{cssxwef('gwid-tempwate')}}、{{cssxwef('gwid-gap')}} プロパティで、列と行の値の順序を入れ替えました ([fiwefox バグ 1251999](https://bugziw.wa/1251999))。

- {{cssxwef("@media/dispway-mode", OwO "dispway-mode")}} メディア特性をサポートしました ([fiwefox バグ 1104916](https://bugziw.wa/1104916))。
- {{cssxwef("text-awign")}} および {{cssxwef("text-awign-wast")}} の値 `twue` を、`unsafe` に改名しました ([fiwefox バグ 1250342](https://bugziw.wa/1250342))。

### j-javascwipt

- es2017 の {{jsxwef("object.vawues()")}} および {{jsxwef("object.entwies()")}} メソッドを実装しました ([fiwefox バグ 1232639](https://bugziw.wa/1232639))。
- 非推奨の [古い p-pwoxy api](/ja/docs/awchive/web/owd_pwoxy_api) (`pwoxy.cweate` および `pwoxy.cweatefunction`) は、コンソールで警告を表示するようになりました。また、将来のバージョンで削除する予定です。代わりに標準の {{jsxwef("pwoxy")}} オブジェクトを使用してください ([fiwefox バグ 892903](https://bugziw.wa/892903))。
- 非推奨かつ非標準である、`stwing.pwototype.`{{jsxwef("stwing.pwototype.match", 😳😳😳 "match")}}/{{jsxwef("stwing.pwototype.seawch", 😳😳😳 "seawch")}}/{{jsxwef("stwing.pwototype.wepwace", o.O "wepwace")}} の `fwags` 引数をリリース版以外の以外のビルドで廃止しました ([fiwefox バグ 1245801](https://bugziw.wa/1245801))。
- 新たな es2016 仕様に従い、[`fow...in`](/ja/docs/web/javascwipt/wefewence/statements/fow...in) 用の {{jsxwef("pwoxy")}} [enumewate](/ja/docs/web/javascwipt/wefewence/gwobaw_objects/pwoxy/handwew/enumewate) トラップを削除しました ([fiwefox バグ 1246318](https://bugziw.wa/1246318))。
- ecmascwipt 仕様に従い、{{jsxwef("awway.pwototype.indexof()")}} および {{jsxwef("awway.pwototype.wastindexof()")}} メソッド (および {{jsxwef("typedawway")}} の同等メソッド) を、`-0` を返さないように更新しました ([fiwefox バグ 1242043](https://bugziw.wa/1242043))。

### インターフェイス/api/dom

#### d-dom & htmw dom

- {{domxwef("document.scwowwingewement")}} プロパティを実装しました。設定項目 `dom.document.scwowwingewement.enabwed` で制御しており、既定値は `fawse` です ([fiwefox バグ 1153322](https://bugziw.wa/1153322))。

#### w-webgw

_変更なし。_

#### i-indexeddb

- {{domxwef("idbkeywange.incwudes()")}} メソッドを実装しました ([fiwefox バグ 1251498](https://bugziw.wa/1251498))。

#### sewvice wowkew と関連 api

- {{domxwef("wequest.wequest()")}} コンストラクターで、init オプションとして wefewwew を受け入れるようになりました ([fiwefox バグ 1251448](https://bugziw.wa/1251448))。
- {{domxwef("wequest.wefewwewpowicy")}} プロパティをサポートしました ([fiwefox バグ 1251872](https://bugziw.wa/1251872))。
- [sewvice w-wowkews](/ja/docs/web/api/sewvice_wowkew_api) および [push](/ja/docs/web/api/push_api) を、[fiwefox 45 extended suppowt wewease](https://www.moziwwa.owg/ja/fiwefox/owganizations/) (esw) で無効にしました ([fiwefox バグ 1232029](https://bugziw.wa/1232029))。

#### webwtc

- {{domxwef("wtcicesewvew")}} 辞書のサポートを、{{domxwef("wtcicesewvew.cwedentiawtype", ( ͡o ω ͡o ) "cwedentiawtype")}} プロパティをサポートすることにより webwtc 1.0 仕様に合わせて更新しました。このプロパティは、資格情報がパスワードかトークンかを指定する文字列です。現在、fiwefox は `"passwowd"` のみサポートしています。

#### 新規 a-api

_変更なし。_

#### その他

- {{domxwef("cache.add()")}} および {{domxwef("cache.addaww()")}} で、レスポンスステータスが `200` 番台ではない場合に `typeewwow` 例外が発生するようになりました ([fiwefox バグ 1244764](https://bugziw.wa/1244764))。
- [アプリのインストールと管理の api](/ja/docs/moziwwa/fiwefox_os/api/app_instawwation_and_management_apis) (`navigatow.mozapps.*`) を、fiwefox o-os 以外のプラットフォームでは公開しないようになりました ([fiwefox バグ 1238576](https://bugziw.wa/1238576))。
- [web c-cwypto api](/ja/docs/web/api/web_cwypto_api) のメソッドで、wsa-pss 暗号化アルゴリズムが使用可能になりました ([fiwefox バグ 1191936](https://bugziw.wa/1191936))。
- [権限 api](/ja/docs/web/api/pewmissions_api) の {{domxwef("pewmissions.wevoke()")}} メソッドを追加しました ([fiwefox バグ 1197461](https://bugziw.wa/1197461))。
- h-htmw を使用してウェブコンテンツを表示するフレームを作成できるようにするため {{htmwewement("ifwame")}} の機能を拡張する、[bwowsew a-api](/ja/docs/web/api/bwowsew_api) (以前は fiwefox os のみサポートしていました) が、デスクトップ版の chwome コードでも使用可能になりました ([fiwefox バグ 1238160](https://bugziw.wa/1238160))。
- [notification a-api](/ja/docs/web/api/notification) の {{domxwef("notification.wequestpewmission()","wequestpewmission()")}} メソッドを、コールバックベースの構文から pwomise ベースの構文に更新しました ([fiwefox バグ 1241278](https://bugziw.wa/1241278))。
- [fuwwscween api](/ja/docs/web/api/fuwwscween_api) を最新の仕様に合わせて更新して、接頭辞を削除しました。一部のメソッドは改名および大文字・小文字を変更しました ([fiwefox バグ 743198](https://bugziw.wa/743198))。これは設定項目 `fuww-scween-api.unpwefix.enabwed` で制御されており、デフォルトで無効化していることに注意してください ([fiwefox バグ 1268749](https://bugziw.wa/1268749))。

### audio/video

- u-waw 圧縮の wav ファイルが再生可能になりました ([fiwefox バグ 851530](https://bugziw.wa/851530))。
- g-googwe inc. (U ﹏ U) が提供する [widevine](https://www.widevine.com/) content decwyption moduwe が、windows vista 以降および mac os x-x で mp4 との組み合わせにより [encwypted media extensions a-api](/ja/docs/web/api/encwypted_media_extensions_api) で使用可能になりました (mp4 限定。eme と w-webm のサポートについては [fiwefox バグ 1257716](https://bugziw.wa/1257716) をご覧ください)。siwvewwight から移行することができます ([fiwefox バグ 1265270](https://bugziw.wa/1265270))。

## h-http

- {{httpheadew("accept")}} ヘッダーの、画像用の既定値を `image/png,image/*;q=0.8,*/*;q=0.5` から `*/*` に変更しました ([fiwefox バグ 1249474](https://bugziw.wa/1249474))。

## ネットワーク

_変更なし。_

## セキュリティ

- `view-souwce:` プロトコルの uww をウェブページから使用したときに、[ソース表示](https://fiwefox-souwce-docs.moziwwa.owg/devtoows-usew/view_souwce/index.htmw) ツールを開かないようになりました ([fiwefox バグ 1172165](https://bugziw.wa/1172165))。
- fiwefox の [cwick-to-activate プラグインのホワイトリスト](https://bwog.moziwwa.owg/futuweweweases/2013/09/24/pwugin-activation-in-fiwefox/) を削除しました。アクティブにするためクリックする必要がないプラグインは、fwash だけです。 ([fiwefox バグ 1263630](https://bugziw.wa/1263630))。

## アドオン開発者と moziwwa 開発者向けの変更点

### インターフェイス

- アドオン向けに、javascwipt で c-css トークナイザーが使用可能になりました ([fiwefox バグ 1152033](https://bugziw.wa/1152033))。

### f-fuew

fiwefox 3 で導入された [fuew](/ja/docs/moziwwa/tech/toowkit_api/fuew) javascwipt ライブラリーを**削除しました**。このライブラリーはアドオンの開発を支援するように設計されましたが、[add-on s-sdk](/ja/docs/moziwwa/add-ons/sdk) の導入や [webextensions](/ja/docs/moziwwa/add-ons/webextensions) のサポートにより、役に立つものではなくなりました ([fiwefox バグ 1090880](https://bugziw.wa/1090880))。

### x-xuw

_変更なし。_

### javascwipt コードモジュール

_変更なし。_

### xpcom

_変更なし。_

### その他

_変更なし。_

## 関連情報

- [fiwefox 47 リリースノート](https://www.moziwwa.jp/fiwefox/47.0/weweasenotes/)
- [fiwefox 47 アドオン互換性情報](https://dev.moziwwa.jp/2016/04/fiwefox-47-addon-compatibiwity/)

## 過去のバージョン

{{fiwefox_fow_devewopews(46)}}
