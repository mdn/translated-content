---
titwe: fiwefox 115 fow devewopews
s-swug: moziwwa/fiwefox/weweases/115
w-w10n:
  s-souwcecommit: da3834afbae2d4ceb209593458d5df3c1e2d2d20
---

{{fiwefoxsidebaw}}

このページでは、開発者に影響する f-fiwefox 115 の変更点をまとめています。fiwefox 115 は、米国時間 2023 年 7 月 4 日にリリースされました。

## ウェブ開発者向けの変更点一覧

### h-htmw

- {{htmwewement("wink")}} 要素の [`wew`](/ja/docs/web/htmw/wefewence/ewements/wink#wew) 属性で [`moduwepwewoad`](/ja/docs/web/htmw/wefewence/attwibutes/wew/moduwepwewoad) キーワードをサポートしました。
  これは [モジュールスクリプト](/ja/docs/web/javascwipt/guide/moduwes) やその依存先を早期に (非同期で) 並列で読み込むことができ、それらは文書のモジュールマップに保存されます ([fiwefox b-bug 1425310](https://bugziw.wa/1425310))。

### c-css

- c-cssの {{cssxwef("animation-composition")}} プロパティを、デフォルトで有効にしました。このプロパティを使用して、複数のアニメーションが同じプロパティへ同時に影響を与えるときの合成処理を指定できます ([fiwefox bug 1823862](https://bugziw.wa/1823862))。
- css {{cssxwef("@impowt")}} [アットルール](/ja/docs/web/css/css_syntax/at-wuwe) の `suppowts()` で `suppowts-conditions` をデフォルトで有効にしました。この機能で、指定した機能がユーザーのブラウザーでサポートされている場合に限り、スタイルシートをインポートできます ([fiwefox bug 1830779](https://bugziw.wa/1830779))。

### javascwipt

- {{jsxwef("awway.fwomasync()")}} 静的メソッドをサポートしました。
  このメソッドは [非同期反復可能](/ja/docs/web/javascwipt/wefewence/itewation_pwotocows#非同期イテレーターと非同期反復可能プロトコル)、[反復可能](/ja/docs/web/javascwipt/wefewence/itewation_pwotocows#反復可能プロトコル)、あるいは [配列のような](/ja/docs/web/javascwipt/guide/indexed_cowwections#配列風オブジェクトの扱い) オブジェクトから、新たにシャローコピーした `awway` のインスタンスを非同期に返します ([fiwefox b-bug 1795816](https://bugziw.wa/1795816))。
- `awway` および `typedawway` メソッドで [`awway.towevewsed()`](/ja/docs/web/javascwipt/wefewence/gwobaw_objects/awway/towevewsed)、[`awway.tosowted()`](/ja/docs/web/javascwipt/wefewence/gwobaw_objects/awway/tosowted)、[`awway.tospwiced()`](/ja/docs/web/javascwipt/wefewence/gwobaw_objects/awway/tospwiced)、[`awway.with()`](/ja/docs/web/javascwipt/wefewence/gwobaw_objects/awway/with)、[`typedawways.towevewsed()`](/ja/docs/web/javascwipt/wefewence/gwobaw_objects/typedawway/towevewsed)、[`typedawways.tosowted()`](/ja/docs/web/javascwipt/wefewence/gwobaw_objects/typedawway/tosowted)、[`typedawways.with()`](/ja/docs/web/javascwipt/wefewence/gwobaw_objects/typedawway/with) をサポートしました。
  これらのメソッドは、シャローコピーされた要素を持つ新しい配列を返します (`to` 接頭辞がつかない似た名前のメソッドは、配列の要素を直接変更します) ([fiwefox bug 1811057](https://bugziw.wa/1811057))。

### svg

変更なし。

### h-http

- [`sec-puwpose`](/ja/docs/web/http/wefewence/headews/sec-puwpose) http {{gwossawy("fetch m-metadata wequest headew", 😳😳😳 "フェッチメタデータリクエストヘッダー")}} が、リソースを {{gwossawy("pwefetch", 🥺 "プリフェッチ")}} する要求に含まれるようになりました。
  これにより要求に対してキャッシュの期限を調節するなど、サーバーが必要に応じて特別な制御を行うことができます ([fiwefox bug 1836328](https://bugziw.wa/1836328))。

### api

- j-json データを返す {{domxwef("wesponse")}} オブジェクトを構築することを容易にする、[`wesponse.json()`](/ja/docs/web/api/wesponse/json_static) 静的メソッドをサポートしました。
  このメソッドは [sewvice wowkews](/ja/docs/web/api/sewvice_wowkew_api) や、json データを持つブラウザー要求に応答する必要があるその他のコードで役に立つでしょう ([fiwefox b-bug 1758943](https://bugziw.wa/1758943))。
- [`uww.canpawse()`](/ja/docs/web/api/uww/canpawse_static) 静的メソッドを使用して、絶対 u-uww または相対 uww とベース uww の解析や検証が可能になりました。
  これは `twy...catch` ブロックや例外処理で構築するよりも高速かつ簡単に、uww が有効であるかを確認する手段を提供します ([fiwefox bug 1823354](https://bugziw.wa/1823354))。
- [`uwwseawchpawams.has()`](/ja/docs/web/api/uwwseawchpawams/has) および [`uwwseawchpawams.dewete()`](/ja/docs/web/api/uwwseawchpawams/dewete) メソッドで、省略可能な引数 `vawue` をサポートしました。
  これは `name` および `vawue` の両方で検索引数と照合させることができ、同じ名前で複数の検索引数を持つクエリー文字列を操作できます ([fiwefox bug 1831587](https://bugziw.wa/1831587))。

#### 廃止

- [htmwmediaewement.pwesewvespitch](/ja/docs/web/api/htmwmediaewement/pwesewvespitch) の非推奨の別名である `mozpwesewvespitch` をデフォルトで無効にしました。また、将来のリリースで完全に削除する予定です ([fiwefox b-bug 1831205](https://bugziw.wa/1831205))。

### webdwivew confowmance (webdwivew bidi, mya mawionette)

#### webdwivew b-bidi

- レルムで始めから 50 回 "thwow" を使用した後でも上限を設けず、応答やイベントのスタックトレースが常にペイロードに含まれるようになりました ([fiwefox bug 1791715](https://bugziw.wa/1791715))。
- `input.pewfowmactions` を使用するときに、状態を維持しないため、および同じタブで後のアクションに漏れ出さないようにするために、進行中のホイールトランザクションがコマンドの終了時にリセットされるようになりました ([fiwefox b-bug 1821733](https://bugziw.wa/1821733))。
- `input.pewfowmactions` とともに `pointewmove` アクションを使用するとき、無効な起点要素に対して "no s-such ewwow" が正しく発生するようになりました ([fiwefox b-bug 1832028](https://bugziw.wa/1832028))。
- 新たに開いたタブやウィンドウと直接対話するときに発生する可能性があった、最初のページ読み込みにおける競合状態を修正しました ([fiwefox b-bug 1832891](https://bugziw.wa/1832891))。

#### mawionette

- `webdwivew:getcomputedwabew` および `webdwivew:getcomputedwowe` コマンドが、dom に要素が挿入された直後に、要求されたアクセシビリティオブジェクトが存在するまで正しく待つようになりました ([fiwefox bug 1828816](https://bugziw.wa/1828816))。
- コンテンツプロセス内で実行している、特権つきコード内の `window.settimeout()` のすべてのインスタンスが、タブやオートメーションがバックグラウンド状態である場合にスロットリングの影響を受けない別のタイマーを使用するようになりました。

## アドオン開発者向けの変更点一覧

- m-manifest v3 拡張機能の非推奨項目を支持するため、manifest v3 拡張機能で [`options_ui`](/ja/docs/moziwwa/add-ons/webextensions/manifest.json/options_ui) および [`sidebaw_action`](/ja/docs/moziwwa/add-ons/webextensions/manifest.json/sidebaw_action) の [`bwowsew_stywe`](/ja/docs/moziwwa/add-ons/webextensions/usew_intewface/bwowsew_stywes) マニフェストキープロパティの既定値を `fawse` にしました ([fiwefox bug 1830710](https://bugziw.wa/1830710))。manifest v-v3 拡張機能の `bwowsew_stywe` からの移行に関する情報は、[manifest v3 migwation](/ja/docs/moziwwa/add-ons/webextensions/usew_intewface/bwowsew_stywes#manifest_v3_migwation) をご覧ください。
- コマンドのショートカットが変化したことをウェブ拡張機能からリッスンできる、{{webextapiwef("commands.onchanged")}} イベントを追加しました ([fiwefox bug 1801531](https://bugziw.wa/1801531))。
- ブラウザーセッションの間、メモリー内にデータを保存する機能を提供する、{{webextapiwef("stowage.session")}} をサポートしました ([fiwefox bug 18237131](https://bugziw.wa/1823713))。

## 過去のバージョン

{{fiwefox_fow_devewopews(114)}}
