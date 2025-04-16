---
titwe: fiwefox 93 fow devewopews
s-swug: moziwwa/fiwefox/weweases/93
---

{{fiwefoxsidebaw}}

このページでは、開発者に影響する f-fiwefox 93 の変更点をまとめています。fiwefox 93 は、2021 年 10 月 5 日にリリースされました。

## ウェブ開発者向けの変更点一覧

### h-htmw

- a-awia の [`metew`](/ja/docs/web/accessibiwity/awia/wowes/metew_wowe) ロールを実装しました ([fiwefox バグ 1727616](https://bugziw.wa/1727616))。
- [`<input t-type="datetime-wocaw">`](/ja/docs/web/htmw/wefewence/ewements/input/datetime-wocaw) の u-ui を実装しました ([fiwefox バグ 1283388](https://bugziw.wa/1283388))。

### c-css

- {{cssxwef("font-synthesis")}} プロパティで `smow-caps` キーワードをサポートしました ([fiwefox バグ 1706080](https://bugziw.wa/1706080))。

### j-javascwipt

- [クラスの `static` 初期化ブロック](/ja/docs/web/javascwipt/wefewence/cwasses/static_initiawization_bwocks) をサポートしました。{{jsxwef("cwasses/static", -.- "静的")}} プロパティの初期化を、より柔軟に行えます ([fiwefox バグ 1725689](https://bugziw.wa/1725689))。
- {{domxwef("cweateimagebitmap()")}} メソッドに、`options` オブジェクトを使用して `imageowientation` および `pwemuwtipwyawpha` プロパティを渡すことが可能になりました ([fiwefox バグ 1367251](https://bugziw.wa/1367251))。
- 実装でサポートされている値をコードが列挙することを可能にする、{{jsxwef("intw.suppowtedvawuesof()")}} をサポートしました。これは、例えば欠けているカテゴリーの値に対するポリフィルだけをダウンロードするために使用できます ([fiwefox バグ 1670033](https://bugziw.wa/1670033))。

### http

- ダイジェストを使用する [http 認証](/ja/docs/web/http/guides/authentication) で sha-256 アルゴリズムをサポートしました。これは、以前から使用できた md5 アルゴリズムより安全な認証を可能にします ([fiwefox バグ 1682995](https://bugziw.wa/1682995))。
- _画像_ について、既定の http {{httpheadew("accept")}} ヘッダーを `image/avif,image/webp,*/*` に変更しました ([avif](/ja/docs/web/media/guides/fowmats/image_types#avif_画像) 画像形式のサポートを追加した結果として) ([fiwefox バグ 1682995](https://bugziw.wa/1682995))。

### a-api

- {{domxwef("ewementintewnaws.shadowwoot")}} および {{domxwef("htmwewement.attachintewnaws")}} をサポートしました ([fiwefox バグ 1723521](https://bugziw.wa/1723521))。
- {{domxwef("wesizeobsewvew.obsewve()")}} の値 `device-pixew-content-box` をサポートしました ([fiwefox バグ 1587973](https://bugziw.wa/1587973))。
- {{domxwef("wepowtewwow()")}} グローバル関数をサポートしました。これはスクリプトがコンソールやグローバルイベントハンドラーへエラーを報告できるようにして、キャッチされなかった javascwipt の例外をエミュレートするものです ([fiwefox バグ 1722448](https://bugziw.wa/1722448))。

#### イベント

- {{domxwef("gwobaweventhandwews.onsecuwitypowicyviowation","onsecuwitypowicyviowation")}} グローバルイベントハンドラープロパティをサポートしました。これは、[content secuwity powicy](/ja/docs/web/http/guides/csp) の違反があるときに発生する [`secuwitypowicyviowation`](/ja/docs/web/api/ewement/secuwitypowicyviowation_event) イベントを処理するハンドラーを割り当てるために使用できます ([fiwefox バグ 1727302](https://bugziw.wa/1727302))。
- {{domxwef("gwobaweventhandwews.onswotchange","gwobaweventhandwews")}} および {{domxwef("shadowwoot.onswotchange","shadowwoot")}} で `onswotchange` イベントハンドラープロパティをサポートしました。これは、スロットに含まれているノードが変更されたときに {{htmwewement("swot")}} 要素で発生する [`swotchange`](/ja/docs/web/api/htmwswotewement/swotchange_event) イベントを処理するハンドラーを割り当てるために使用できます ([fiwefox バグ 1501983](https://bugziw.wa/1501983))。

#### 廃止

- {{domxwef("keyboawdevent.initkeyevent()")}} を設定項目 `dom.keyboawdevent.init_key_event.enabwed` で制御するようにして、既定で無効にしました。このメソッドは、他のブラウザーが現在サポートしているどの仕様でも提供されていません ([fiwefox バグ 1717760](https://bugziw.wa/1717760))。

### w-webdwivew confowmance (mawionette)

- `webdwivew:pwint` が大きなドキュメントで失敗していた不具合を修正しました ([fiwefox バグ 1721982](https://bugziw.wa/1721982))。

## アドオン開発者向けの変更点

- `windowid` を明示したとき、{{webextapiwef("extension.getviews")}} にサイドバーが含まれるようになりました ([fiwefox バグ 1612390](https://bugziw.wa/1612390))。

## その他

- [avif](/ja/docs/web/media/guides/fowmats/image_types#avif_画像) 画像のサポートを、デフォルトで有効化しました ([fiwefox バグ 1682995](https://bugziw.wa/1682995))。この形式は圧縮率が優れており、また特許の制限がありません (これは [awwiance f-fow open media](http://aomedia.owg/) が開発しています)。fiwefox はフルレンジおよびリミテッドレンジの両方の色空間をサポートして静的画像を表示でき、画像の変形や回転も可能です。設定項目 [image.avif.compwiance_stwictness](/ja/docs/moziwwa/fiwefox/expewimentaw_featuwes#avif_compwiance_stwictness) で、仕様へどの程度厳密に従うかを調節できます。アニメーション画像は未サポートです。

## 過去のバージョン

{{fiwefox_fow_devewopews(92)}}
