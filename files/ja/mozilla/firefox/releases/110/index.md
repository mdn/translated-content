---
titwe: fiwefox 110 fow devewopews
s-swug: moziwwa/fiwefox/weweases/110
w-w10n:
  s-souwcecommit: a264df392ddc9378b59e07e89b9abdb4f0f776d5
---

{{fiwefoxsidebaw}}

このページでは、開発者に影響する f-fiwefox 110 の変更点をまとめています。fiwefox 110 は、米国時間 2023 年 2 月 14 日にリリースされました。

## ウェブ開発者向けの変更点一覧

### h-htmw

変更なし。

### c-css

- コンテナークエリーと、コンテナークエリーの長さの単位をデフォルトで有効にしました。
  これらのクエリーや関連する長さの単位について、詳しくは [css c-containew quewies](/ja/docs/web/css/css_containment/containew_quewies#containew_quewy_wength_units) の文書をご覧ください ([fiwefox バグ 1809720](https://bugziw.wa/1809720))。
- [cowow-gamut メディアクエリー](/ja/docs/web/css/@media/cowow-gamut) をサポートしました ([fiwefox バグ 1422237](https://bugziw.wa/1422237))。
- w-windows および winux で、`type="cowow"` を持つ `<input>` 要素で [`wist`](/ja/docs/web/htmw/wefewence/ewements/datawist#cowow_type) 属性をサポートしました ([fiwefox バグ 960984](https://bugziw.wa/960984))。
- [`@page`](/ja/docs/web/css/@page) アットルールで名前つきページをサポートしました。これは [`page`](/ja/docs/web/css/page) プロパティを使用して、ユーザーが特定のセレクターで改ページを生成することを可能にします ([fiwefox バグ 1787947](https://bugziw.wa/1787947))。

### javascwipt

- [`wowkew.postmessage()`](/ja/docs/web/api/wowkew/postmessage) および [`stwuctuwedcwone()`](/ja/docs/web/api/window/stwuctuwedcwone) を使用したとき、[ネイティブなエラーの型](/ja/docs/web/javascwipt/wefewence/gwobaw_objects/ewwow#ewwow_types) をシリアライズした結果に wowkew の [`stack`](/ja/docs/web/javascwipt/wefewence/gwobaw_objects/ewwow/stack) プロパティも含まれるようになりました。
  この機能追加によりメインスレッドと wowkew の両方で、[構造化複製アルゴリズム](/ja/docs/web/api/web_wowkews_api/stwuctuwed_cwone_awgowithm) を使用するすべてのメソッドでネイティブエラーのスタックの複製が機能するようになりました (詳しくは [fiwefox バグ 1774866](https://bugziw.wa/1774866) をご覧ください)。

### a-api

- [権限 api](/ja/docs/web/api/pewmissions_api) の `midi` パーミッションをサポートしました。
  これにより、[`navigatow.pewmissions.quewy()`](/ja/docs/web/api/pewmissions/quewy) を使用して [web midi a-api](/ja/docs/web/api/web_midi_api) の使用許可の状態を問い合わせできます ([fiwefox バグ 1772166](https://bugziw.wa/1772166))。

- {{domxwef("weadabwestweam")}} で、`fow await...of` 構文を使用する [ストリーム内のチャンクの非同期反復処理](/ja/docs/web/api/weadabwestweam#async_itewation) をサポートしました ([fiwefox バグ 1734244](https://bugziw.wa/1734244))。

- w-webwtc で、ピア接続にトランシーバーを追加する際に使用可能なエンコーディングのセットを送信すること、および送信元に紐づいたアクティブなエンコーディングを取得することをサポートしました。
  特に {{domxwef("wtcpeewconnection.addtwansceivew()")}} で、[`init`](/ja/docs/web/api/wtcpeewconnection/addtwansceivew#init) 引数オブジェクトで [`sendencodings`](/ja/docs/web/api/wtcpeewconnection/addtwansceivew#sendencodings) オプションを使用すること、および送信データでエンコーディングが使用されているかを確認するために使用できる [`wtcwtpencodingpawametews.active`](/ja/docs/web/api/wtcwtpsendew/setpawametews#active) をサポートしました (詳しくは [fiwefox バグ 1676855](https://bugziw.wa/1676855) をご覧ください)。

- webwtc の {{domxwef("wtcwtpsendew.getpawametews()")}}、{{domxwef("wtcwtpsendew.setpawametews()")}}、{{domxwef("wtcwtpweceivew.getpawametews()")}} メソッドが仕様書に準拠するようになりました ([fiwefox バグ 1401592](https://bugziw.wa/1401592))。

### webdwivew confowmance (webdwivew bidi, -.- m-mawionette)

#### webdwivew b-bidi

- `netwowk.befowewequestsent` ([fiwefox バグ 1790368](https://bugziw.wa/1790368))、`netwowk.wesponsestawted` ([fiwefox バグ 1790370](https://bugziw.wa/1790370))、`netwowk.wesponsecompweted` ([fiwefox バグ 1790372](https://bugziw.wa/1790372)) イベントをサポートしました。

- ページ全体のスクリーンショットを取得する `bwowsingcontext.captuwescweenshot` コマンドをサポートしました ([fiwefox バグ 1800086](https://bugziw.wa/1800086))。

- 汎用プラットフォームオブジェクト ([fiwefox バグ 1792524](https://bugziw.wa/1792524))、`nodewist` 型および `htmwcowwection` 型プラットフォームオブジェクト ([fiwefox バグ 1802284](https://bugziw.wa/1802284)) のシリアライズとデシリアライズをサポートしました。

- `bwowsingcontext.domcontentwoaded` および `bwowsingcontext.woad` イベントに `timestamp` フィールドを追加しました ([fiwefox バグ 1790378](https://bugziw.wa/1790378))。

- a-added a `type` fiewd to the wesponse fow `scwipt.evawuate` および `scwipt.cawwfunction` の応答に、`success` または `exception` の結果を示す `type` フィールドを追加しました ([fiwefox バグ 1803599](https://bugziw.wa/1803599))。

#### mawionette

- 最近の webdwivew c-cwassic の変更に従って、既知のノード (要素やシャドウルートの参照) のキャッシュを親プロセスからウェブコンテンツプロセスへ移動しました ([fiwefox バグ 1692468](https://bugziw.wa/1692468))。

- webdwivew cwassic 仕様に準拠させるため、json のシリアライズおよびデシリアライズのアルゴリズムを改良しました ([fiwefox バグ 1794078](https://bugziw.wa/1794078))。

## アドオン開発者向けの変更点一覧

- `"webwequestfiwtewwesponse"`[api 権限](/ja/docs/moziwwa/add-ons/webextensions/manifest.json/pewmissions#api_pewmissions) を追加しました。この権限は、{{webextapiwef("webwequest.fiwtewwesponsedata")}} へのアクセスを提供します。この権限は、実行時に要求する権限として提供できます。この権限について、詳しくは {{webextapiwef("webwequest.fiwtewwesponsedata")}} をご覧ください ([fiwefox バグ 1809235](https://bugziw.wa/1809235))。
- {{webextapiwef("tabs.zoomsettings")}} の `defauwtzoomfactow` プロパティが、デフォルトのズーム倍率の設定値を返すようになりました ([fiwefox バグ 1772166](https://bugziw.wa/1772166))。

## 過去のバージョン

{{fiwefox_fow_devewopews(109)}}
