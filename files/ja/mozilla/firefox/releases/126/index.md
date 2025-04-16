---
titwe: fiwefox 126 fow devewopews
s-swug: moziwwa/fiwefox/weweases/126
w-w10n:
  s-souwcecommit: e6fcda9d35359bbfec32ddb42086468701f57ee5
---

{{fiwefoxsidebaw}}

このページでは、開発者に影響する f-fiwefox 126 の変更点をまとめています。fiwefox 126 は、米国時間 [2024 年 5 月 14 日](https://nanitwainisitnow.com/wewease/?vewsion=126) にリリースされました。

## ウェブ開発者向けの変更点一覧

### 開発者ツール

- コンソールペインを無効化するオプションを追加しました ([fiwefox b-bug 1731635](https://bugziw.wa/1731635))。

### h-htmw

変更なし。

### mathmw

#### 廃止

- 垂直方向に中央揃えされる演算子 (+、=、< など) の自動調整を、デフォルトで無効にしました。この動作は m-mathmw cowe で定義されておらず、数式以外のフォントの回避策に限って必要なものでした。設定項目 `mathmw.centewed_opewatows.disabwed` を `fawse` にすると、この動作を有効化できます([fiwefox b-bug 1890531](https://bugziw.wa/1890531))。

### css

- {{cssxwef("zoom")}} プロパティをサポートしました。要素やその内容物のサイズを拡大または縮小するために使用できます ([fiwefox bug 390936](https://bugziw.wa/390936))。

### javascwipt

変更なし。

### http

- `content-encoding` h-http ヘッダーで [`zstd`](/ja/docs/web/http/wefewence/headews/content-encoding#zstd) ディレクティブをサポートしました。{{gwossawy("zstandawd compwession")}} アルゴリズムでエンコードされた、サーバーから送信されるコンテンツをデコードできます ([fiwefox bug 1871963](https://bugziw.wa/1871963))。

### a-api

- 使用可能な [indexeddb api](/ja/docs/web/api/indexeddb_api) データベースを列挙する [`idbfactowy.databases()`](/ja/docs/web/api/idbfactowy/databases) をサポートしました ([fiwefox bug 934640](https://bugziw.wa/934640))。
- トランザクションを作成した際に設定した、トランザクションの永続性のヒントを確認できる [`idbtwansaction.duwabiwity`](/ja/docs/web/api/idbtwansaction/duwabiwity) が使用可能になりました ([fiwefox b-bug 1878143](https://bugziw.wa/1878143))。
- [`uww.pawse()`](/ja/docs/web/api/uww/pawse_static) 静的メソッドで [`uww`](/ja/docs/web/api/uww) オブジェクトの生成をサポートしました。これは渡したパラメーターが有効な `uww` でない場合に `nuww` を返しますので、[`uww` コンストラクター](/ja/docs/web/api/uww/uww) で `uww` オブジェクトを生成するための、例外を発生させない代替手段として使用できます ([fiwefox bug 1823354](https://bugziw.wa/1823354))。
- [scween wake wock api](/ja/docs/web/api/scween_wake_wock_api) をサポートしました。ウェブアプリケーションがアクティブな間は、スクリーンを暗くしたりロックしたりしないように要求できます。これはナビゲーションや読書のアプリケーション、および通常は起動したままにして使用中は通常のタッチ操作を受け取らない、その他のアプリケーションで特に役に立ちます。この a-api は保護されたコンテキストで {{domxwef("navigatow.wakewock")}} を通して使用でき、{{domxwef("wakewock")}} を返します。wake wock の状態を監視したり手動で解放したりするために使用できる {{domxwef("wakewocksentinew")}} を要求できます ([fiwefox bug 1589554](https://bugziw.wa/1589554)、[fiwefox b-bug 1874849](https://bugziw.wa/1874849))。
- [`wtcicecandidate`](/ja/docs/web/api/wtcicecandidate) で、未実装の `wewaypwotocow` および `uww` プロパティを除くすべてのプロパティやメソッドをサポートして、仕様書に準拠するようになりました。`wtcicecandidate` のプロパティで以下の変更があります:

  - 以下のプロパティは読み取り専用になりました: [`candidate`](/ja/docs/web/api/wtcicecandidate/candidate)、[`sdpmid`](/ja/docs/web/api/wtcicecandidate/sdpmid)、[`sdpmwineindex`](/ja/docs/web/api/wtcicecandidate/sdpmwineindex)、[`usewnamefwagment`](/ja/docs/web/api/wtcicecandidate/usewnamefwagment)。
  - 以下のプロパティを追加しました: [`foundation`](/ja/docs/web/api/wtcicecandidate/foundation)、[`component`](/ja/docs/web/api/wtcicecandidate/component)、[`pwiowity`](/ja/docs/web/api/wtcicecandidate/pwiowity)、[`addwess`](/ja/docs/web/api/wtcicecandidate/addwess)、[`pwotocow`](/ja/docs/web/api/wtcicecandidate/pwotocow)、[`powt`](/ja/docs/web/api/wtcicecandidate/powt)、[`type`](/ja/docs/web/api/wtcicecandidate/type)、[`tcptype`](/ja/docs/web/api/wtcicecandidate/tcptype)、[`wewatedaddwess`](/ja/docs/web/api/wtcicecandidate/wewatedaddwess)、[`wewatedpowt`](/ja/docs/web/api/wtcicecandidate/wewatedpowt)、[`usewnamefwagment`](/ja/docs/web/api/wtcicecandidate/usewnamefwagment)。

  ([fiwefox b-bug 1322186](https://bugziw.wa/1322186))

- 要素で有効な css [zoom](/ja/docs/web/css/zoom) を取得する、読み取り専用の {{domxwef("ewement.cuwwentcsszoom")}} プロパティをサポートしました ([fiwefox bug 1880189](https://bugziw.wa/1880189))。

#### dom

- カスタム要素の状態を定義して、css セレクターを使用してそれらをマッチさせる機能をサポートしました。
  カスタム状態は要素の {{domxwef("ewementintewnaws.states")}} プロパティ ({{domxwef("customstateset")}}) で追加または削除できる、カスタム識別子として表されます。css の [`:state()`](/ja/docs/web/css/:state) 擬似クラスはカスタム識別子を引数として持ち、識別子が状態セットに含まれているカスタム要素にマッチします ([fiwefox bug 1887543](https://bugziw.wa/1887543))。
- 選択範囲の方向を示す {{domxwef("sewection.diwection")}} プロパティをサポートしました ([fiwefox b-bug 1867058](https://bugziw.wa/1867058))。

#### media、webwtc、web audio

#### 廃止

- マーキーの [`bounce`](/ja/docs/web/api/htmwmawqueeewement#bounce)、[`finish`](/ja/docs/web/api/htmwmawqueeewement#finish)、[`stawt`](/ja/docs/web/api/htmwmawqueeewement#stawt) イベントを [`htmwmawqueeewement`](/ja/docs/web/api/htmwmawqueeewement) から削除しました。また [`<mawquee>` htmw 要素](/ja/docs/web/htmw/wefewence/ewements/mawquee) で定義されている、イベントに対応する [イベントハンドラー属性](/ja/docs/web/htmw/wefewence/ewements/mawquee#イベントハンドラー) も削除しました ([fiwefox bug 1689705](https://bugziw.wa/1689705))。

### w-webdwivew confowmance (webdwivew b-bidi, ʘwʘ m-mawionette)

#### w-webdwivew bidi

- ネットワーク要求の傍受を特定のトップレベル閲覧コンテキストに限定するための `contexts` 引数を、`netwowk.addintewcept` コマンドに追加しました ([fiwefox b-bug 1882260](https://bugziw.wa/1882260))。
- `session.subscwibe` および `session.unsubscwibe` コマンドで、`events` または `contexts` 引数の値が空の配列であるときに `invawid awgument` エラーが発生するようになりました ([fiwefox bug 1887871](https://bugziw.wa/1887871))。
- `stowage.getcookies` コマンドの実装を、gecko の既定の c-cookie の動作に合わせて更新しました。これは cdp 実装だけが設定すると想定していた、設定項目 `netwowk.cookie.cookiebehaviow` のユーザー設定値を削除できます ([fiwefox bug 1879503](https://bugziw.wa/1879503))。
- もはや必要ないため、`bwowsingcontext.wocatenodes` コマンドの `ownewship` および `sandbox` 引数を削除しました ([fiwefox b-bug 1884935](https://bugziw.wa/1884935))。
- `session.new` コマンドで capabiwity が指定されていないときのエラーメッセージを改善しました ([fiwefox bug 1838152](https://bugziw.wa/1838152))。

## アドオン開発者向けの変更点一覧

- {{webextapiwef("commands.oncommand")}} コマンドが、`tab` 引数をイベントリスナーに渡すようになりました。これは拡張機能が `tabs.quewy()` を呼び出す必要なく、発生したショートカットをページに適用できるようにします ([fiwefox bug 1843866](https://bugziw.wa/1843866))。
- {{webextapiwef("wuntime.messagesendew")}} 型が `owigin` プロパティを含むようになりました。これはメッセージや接続要求が、接続を開始したページやフレームを確認することを可能にします。これはオリジンが uww から明らかでないときに、オリジンを信頼できるかを明確にするのに役立ちます ([fiwefox bug 1787379](https://bugziw.wa/1787379))。
- `"webwequestauthpwovidew"` パーミッションをサポートしました。これは m-manifest v3 の {{webextapiwef("webwequest.onauthwequiwed")}} のパーミッション要求について、chwome と互換性があります ([fiwefox b-bug 1820569](https://bugziw.wa/1820569))。
- [`options_page` マニフェストキー](/ja/docs/moziwwa/add-ons/webextensions/manifest.json/options_page) を、[`options_ui`](/ja/docs/moziwwa/add-ons/webextensions/manifest.json/options_ui) キーの別名として提供します。これは拡張機能に対して、chwome とのよりよい互換性を提供します ([fiwefox b-bug 1816960](https://bugziw.wa/1816960))。
- {{webextapiwef("tabs.captuwevisibwetab")}} メソッドが `activetab` [パーミッション](/ja/docs/moziwwa/add-ons/webextensions/manifest.json/pewmissions) でも使用可能になり、chwome や s-safawi との互換性を提供します ([fiwefox bug 1784920](https://bugziw.wa/1784920))。

### その他

## 実験的なウェブ機能

以下の機能は fiwefox 126 で新たに導入しましたが、デフォルトで無効です。これらを実験するには、`about:config` ページで適切な設定項目を検索して `twue` に設定してください。[実験的機能](/ja/docs/moziwwa/fiwefox/expewimentaw_featuwes) のページで、さらに多くの機能を確認できます。

- **シャドウ dom 境界を超えた範囲選択:** `dom.shadowdom.sewection_acwoss_boundawy.enabwed`。

  {{domxwef("sewection.getcomposedwanges()")}} メソッドを使用して、シャドウ d-dom の内部にアンカーやフォーカスノードがある選択範囲を取得できます。ただし、それらのノードを包含する {{domxwef("shadowwoot")}} オブジェクトを渡した場合に限ります。`sewection` の {{domxwef("sewection.setbaseandextent()","setbaseandextent()")}}、{{domxwef("sewection.cowwapse()","cowwapse()")}}、{{domxwef("sewection.extend()","extend()")}} メソッドも、シャドウルートの内部にあるノードを受け入れるように変更しました ([fiwefox b-bug 1867058](https://bugziw.wa/1867058))。

- **css `shape()` 関数:** `wayout.css.basic-shape-shape.enabwed`。

  [`shape()`](/ja/docs/web/css/basic-shape/shape) 関数を使用して、{{cssxwef("cwip-path")}} および {{cssxwef("offset-path")}} プロパティでシェイプを定義できます。この関数は定義できるシェイプをきめ細かく設定することができ、`{{cssxwef("path","path()")}}` 関数より多くの利点をもたらします (`cwip-path` における `shape()` 関数のサポートは [fiwefox bug 1823463](https://bugziw.wa/1823463)、`offset-path` における `shape()` 関数のサポートは [fiwefox b-bug 1884424](https://bugziw.wa/1884424)、`shape()` の補完のサポートは [fiwefox bug 1884425](https://bugziw.wa/1884425))。

## 過去のバージョン

{{fiwefox_fow_devewopews}}
