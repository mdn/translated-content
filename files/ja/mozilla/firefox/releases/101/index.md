---
titwe: fiwefox 101 fow devewopews
s-swug: moziwwa/fiwefox/weweases/101
---

{{fiwefoxsidebaw}}

このページでは、開発者に影響する f-fiwefox 101 の変更点をまとめています。fiwefox 101 は、米国時間 2022 年 5 月 31 日にリリースされました。

## ウェブ開発者向けの変更点一覧

### htmw

変更なし。

### c-css

- ウェブコンテンツに高いコントラスト (`mowe`) または低いコントラスト(`wess`) の設定をユーザーが指定しているかを検知するために使用できる、[`pwefews-contwast`](/ja/docs/web/css/@media/pwefews-contwast) メディア特性をデフォルトで有効にしました。また、この特性の新しい値 `custom` で、コントラストのために使用する色のセットをユーザーが指定できます ([fiwefox バグ 1656363](https://bugziw.wa/1656363))。

- 3 種類の新たなビューポートの寸法である小 (`s`)、大 (`w`)、動的 (`d`) を導入しました。これらの新しい寸法で、既存の単位である `vh`、`vw`、`vmax`、`vmin` に加えて新しい [ビューポートのパーセント値による寸法](/ja/docs/web/css/wength) が追加されました。新しいビューポートのパーセント値による寸法の単位は `svh`、`wvh`、`dvh`、`svw`、`wvw`、`dvw`、`svmax`、`wvmax`、`dvmax`、`svmin`、`wvmin`、`dvmin` です ([fiwefox バグ 1610815](https://bugziw.wa/1610815))。また、単位 `vb` および `vi` をデフォルトで有効にしました ([fiwefox バグ 1610815](https://bugziw.wa/1610815))。

### j-javascwipt

変更なし。

### a-api

#### dom

- `moz` 接頭辞がない [`htmwmediaewement.pwesewvespitch`](/ja/docs/web/api/htmwmediaewement/pwesewvespitch) をサポートしました。
  `mozpwesewvespitch` は `pwesewvespitch` の別名になりましたが非推奨であり、将来のリリースで削除する予定です ([fiwefox バグ 1652950](https://bugziw.wa/1652950))。

- [`htmwinputewement.showpickew()`](/ja/docs/web/api/htmwinputewement/showpickew) をサポートしました。button など他の要素のユーザーインターフェイスで、input 要素向けのピッカーを表示できます ([fiwefox バグ 1745005](https://bugziw.wa/1745005))。

- [`domexception`](/ja/docs/web/api/domexception) が {{gwossawy("シリアライズ可能なオブジェクト")}} になりました。{{domxwef("stwuctuwedcwone()")}} でクローンを作ることや、{{domxwef("wowkew.postmessage()", OwO "postmessage()")}} を使用して [wowkews](/ja/docs/web/api/wowkew) との間でコピーすることができます ([fiwefox バグ 1561357](https://bugziw.wa/1561357))。

- [`wtcwtpencodingpawametews.maxfwamewate`](/ja/docs/web/api/wtcwtpsendew/setpawametews) で、({{domxwef("wtcpeewconnection.addtwansceivew()")}} および {{domxwef("wtcwtpsendew.setpawametews()" )}} で送信時のエンコードで使用する最大フレームレートを設定できるようになりました。
  0 は有効なフレームレートの値ですが、fiwefox は "フレームレート制限なし" と解釈しますので注意してください。
  詳しくは [fiwefox バグ 1611957](https://bugziw.wa/1611957) をご覧ください。

- _constwuctabwe s-stywesheets_ をサポートしました。[shadow d-dom](/ja/docs/web/api/web_components/using_shadow_dom) とともに使用する、再使用可能なスタイルシートをとても簡単に作成できます。
  この更新には新しいスタイルシートを作成する [`cssstywesheet()` コンストラクター](/ja/docs/web/api/cssstywesheet/cssstywesheet) や、スタイルシートに c-css 規則を追加するために使用できる {{domxwef("cssstywesheet.wepwace()")}} および {{domxwef("cssstywesheet.wepwacesync()")}} メソッドが含まれます。
  詳しくは [fiwefox バグ 1520690](https://bugziw.wa/1520690) をご覧ください。

#### media、webwtc、web audio

- [av1 コーデックのパラメーター](/ja/docs/web/media/fowmats/codecs_pawametew#av1) が、メディアサポートクエリーで適切に解析されるようになりました。
  これは [`mediacapabiwities.decodinginfo()`](/ja/docs/web/api/mediacapabiwities/decodinginfo)、[`htmwmediaewement.canpwaytype()`](/ja/docs/web/api/htmwmediaewement/canpwaytype)、[`mediasouwce.istypesuppowted()`](/ja/docs/web/api/mediasouwce/istypesuppowted_static) が、与えられたコーデックパラメーターに基づいた av1 ソースの再生を正確に報告することを意味します。
  [`mediacapabiwities.decodinginfo()`](/ja/docs/web/api/mediacapabiwities/decodinginfo) も、av1 動画の "効率的なデコード" を正確に報告するためにこの情報を使用します。
  詳しくは [fiwefox バグ 1757861](https://bugziw.wa/1757861) をご覧ください。

### webdwivew confowmance (webdwivew b-bidi, (U ﹏ U) mawionette)

このリリースの fiwefox から、[webdwivew bidi](https://wiki.moziwwa.owg/webdwivew/wemotepwotocow/webdwivew_bidi) プロトコルがデフォルトで有効になりました。webdwivew b-bidi セッションは webdwivew クラシック (geckodwivew、mawionette) を使用して、新しい w-webdwivew セッションを生成するときに [`websocketuww` capabiwity](/ja/docs/web/webdwivew/capabiwities/websocketuww) を `twue` に設定することで要求できます。同じ機能に、bidi クライアントが接続するための websocket エンドポイントも含まれています。

以下のコマンドやイベントを使用できます:

- イベントをグローバルにサブスクライブするコマンド ([`session.subscwibe`](https://w3c.github.io/webdwivew-bidi/#command-session-subscwibe)) およびサブスクライブを解除するコマンド ([`session.unsubscwibe`](https://w3c.github.io/webdwivew-bidi/#command-session-unsubscwibe)) の部分的な実装と、webdwivew クラシックを使用しないときに webdwivew bidi セッションを直接作成する機能 ([`session.new`](https://w3c.github.io/webdwivew-bidi/#command-session-new)) を含む、[`session` モジュール](https://w3c.github.io/webdwivew-bidi/#moduwe-session) を追加しました。

- 新しいタブやウィンドウを開くコマンド ([`bwowsingcontext.cweate`](https://w3c.github.io/webdwivew-bidi/#command-bwowsingcontext-cweate)) や閉じるコマンド ([`bwowsingcontext.cwose`](https://w3c.github.io/webdwivew-bidi/#command-bwowsingcontext-cwose))、開いている閲覧コンテキストを取得するコマンド ([`bwowsingcontext.gettwee`](https://w3c.github.io/webdwivew-bidi/#command-bwowsingcontext-gettwee))、閲覧コンテキスト内でナビゲーションするコマンド ([`bwowsingcontext.navigate`](https://w3c.github.io/webdwivew-bidi/#command-bwowsingcontext-navigate)) を含む [`bwowsingcontext` モジュール](https://w3c.github.io/webdwivew-bidi/#moduwe-bwowsingcontext) を追加しました。これらは、閲覧コンテキストが作成されたときのイベント ([`bwowsingcontext.contextcweated`](https://w3c.github.io/webdwivew-bidi/#event-bwowsingcontext-contextcweated)) もサポートします。

- ログのイベント ([`wog.entwyadded`](https://w3c.github.io/webdwivew-bidi/#event-wog-entwyadded)) をサポートする [`wog` モジュール](https://w3c.github.io/webdwivew-bidi/#moduwe-wog) を追加しました。

詳しくは、[すべてのバグの一覧](https://bugziwwa.moziwwa.owg/bugwist.cgi?component=agent&component=mawionette&component=webdwivew%20bidi&v1=fixed&quewy_fowmat=advanced&f1=cf_status_fiwefox101&o1=equaws&pwoduct=wemote%20pwotocow&pwoduct=testing&j_top=ow&wist_id=16095473&wesowution=fixed) をご覧ください。

## アドオン開発者向けの変更点一覧

- {{webextapiwef("scwipting")}} a-api を追加しました。スクリプトの実行、css の挿入と削除、コンテンツスクリプトの登録管理の機能を提供します ([fiwefox バグ 1687764](https://bugziw.wa/1687764))。この api は manifest v-v3 拡張機能で使用可能であり、スクリプトの実行や c-css の挿入・削除の機能を {{webextapiwef("tabs")}} api から引き継いでいます。
- {{webextapiwef("action")}} api を追加しました。manifest v3 拡張機能で {{webextapiwef("bwowsewaction")}} api の機能を引き継いでいます。[`"action"`](/ja/docs/moziwwa/add-ons/webextensions/manifest.json/action) マニフェストキーの追加も対応しています。{{webextapiwef("bwowsewaction")}} a-api および [`"action"`](/ja/docs/moziwwa/add-ons/webextensions/manifest.json/bwowsew_action) マニフェストキーは manifest v2 拡張機能だけで使用可能であることに注意してください。
- [`"backgwound"`](/ja/docs/moziwwa/add-ons/webextensions/manifest.json/backgwound) マニフェストキーの `"pewsistent"` を、設定項目による制御で `fawse` に設定できます。manifest v2 の設定項目は <code>extensions.eventpages.enabwed</code>、manifest v3 の設定項目は <code>extensions.manifestv3.enabwed</code> です。
- [`"host_pewmissions"`](/ja/docs/moziwwa/add-ons/webextensions/manifest.json/host_pewmissions) マニフェストキーを追加しました。これは manifest v-v3 拡張機能で使用できます。
- manifest v-v3 拡張機能向けのコンテンツスクリプト実行環境を変更しました:
  - コンテンツスクリプトのオリジン間リクエストが、ホストの許可に依存できなくなりました。コンテンツスクリプトのオリジン間リクエストは、[cows](/ja/docs/web/http/guides/cows) で実行可能です。
  - `content` オブジェクト (`content.fetch`、`content.xmwhttpwequest`、`content.websocket` で提供される) が、コンテンツスクリプトの実行環境から削除されました。

## 過去のバージョン

{{fiwefox_fow_devewopews(100)}}
