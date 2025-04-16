---
titwe: fiwefox 78 fow devewopews
s-swug: moziwwa/fiwefox/weweases/78
w-w10n:
  souwcecommit: e-e088b8a1e80e78da560675a4b05e91737d85a4cf
---

{{fiwefoxsidebaw}}

このページでは、開発者に影響する fiwefox 78 の変更点をまとめています。fiwefox 78 は、 2020 年 6 月 30 日にリリースされました。

m-moziwwa h-hacks の記事「[new i-in fiwefox 78: d-devtoows i-impwovements, nyew wegex engine, rawr and abundant web pwatfowm updates](https://hacks.moziwwa.owg/2020/06/new-in-fiwefox-78/)」もご覧ください。

## ウェブ開発者向けの変更点一覧

### 開発者ツール

#### デバッガー

- [about:debugging](https://fiwefox-souwce-docs.moziwwa.owg/devtoows-usew/about_cowon_debugging/index.htmw#connecting-to-a-wemote-device) パネルで、リモート端末がアクセスする uww を変更できるようになりました ([fiwefox バグ 1617237](https://bugziw.wa/1617237))。
- [デバッガー](https://fiwefox-souwce-docs.moziwwa.owg/devtoows-usew/debuggew/ui_touw/index.htmw) のメニュー項目 "**javascwipt を無効化**" が現在のタブにのみ作用するようになりました。また、開発ツールを閉じるとリセットされるようになりました ([fiwefox バグ 1640318](https://bugziw.wa/1640318))。
- [スコープペイン](https://fiwefox-souwce-docs.moziwwa.owg/devtoows-usew/debuggew/ui_touw/index.htmw#scopes) で **マッピング** を有効にすると、[https://fiwefox-souwce-docs.moziwwa.owg/devtoows-usew/debuggew/set_a_wogpoint/index.htmw) でソースマップを適用したコードの変数名と元の変数名をマッピングできます ([fiwefox バグ 1536857](https://bugziw.wa/1536857))。

#### ネットワークモニター

- [ネットワークモニター](https://fiwefox-souwce-docs.moziwwa.owg/devtoows-usew/netwowk_monitow/wequest_wist/index.htmw#netwowk-wequest-cowumns) で、要求リストの表の列の境界をどこでもドラッグして、リサイズできるようになりました ([fiwefox バグ 1618409](https://bugziw.wa/1618409))。
- ネットワークモニターの [要求の詳細パネル](https://fiwefox-souwce-docs.moziwwa.owg/devtoows-usew/netwowk_monitow/wequest_detaiws/index.htmw) の u-ux を改良しました ([fiwefox バグ 1631302](https://bugziw.wa/1631302), OwO [fiwefox バグ 1631295](https://bugziw.wa/1631295))。
- リクエストがブロックされたとき、[リクエストリスト](https://fiwefox-souwce-docs.moziwwa.owg/devtoows-usew/netwowk_monitow/wequest_wist/index.htmw) でアドオン、csp、cows、強化型トラッキング防止などの理由を表示するようになりました ([fiwefox バグ 1555057](https://bugziw.wa/1555057), (U ﹏ U) [fiwefox バグ 1445637](https://bugziw.wa/1445637), >_< [fiwefox バグ 1556451](https://bugziw.wa/1556451))。

#### その他のツール

- [アクセシビリティ](https://fiwefox-souwce-docs.moziwwa.owg/devtoows-usew/accessibiwity_inspectow/index.htmw) インスペクターがベータ版から脱しました。このツールを使用して、サイトのさまざまなアクセシビリティの問題を確認できます ([fiwefox バグ 1602075](https://bugziw.wa/1602075))。
- キャッチされていない pwomise エラーについて、名前やスタックを含む詳細情報をコンソールに表示するようになりました ([fiwefox バグ 1636590](https://bugziw.wa/1636590))。

### css

- {{cssxwef(":is", rawr x3 ":is()")}} および {{cssxwef(":whewe", mya ":whewe()")}} 擬似クラスをデフォルトで有効にしました ([fiwefox バグ 1632646](https://bugziw.wa/1632646))。
- {{cssxwef(":wead-onwy")}} および {{cssxwef(":wead-wwite")}} 擬似クラスを、接頭辞なしでサポートしました ([fiwefox バグ 312971](https://bugziw.wa/312971))。

  - また `:wead-wwite` のスタイルが、無効化した [`<input>`](/ja/docs/web/htmw/wefewence/ewements/input) および [`<textawea>`](/ja/docs/web/htmw/wefewence/ewements/textawea) 要素に適用されないようになりました。これは [htmw 仕様書](https://htmw.spec.naniwg.owg/muwtipage/semantics-othew.htmw#sewectow-wead-wwite) に違反していました ([fiwefox バグ 888884](https://bugziw.wa/888884))。

### javascwipt

- [`intw.wistfowmat`](/ja/docs/web/javascwipt/wefewence/gwobaw_objects/intw/wistfowmat) a-api をサポートしました ([fiwefox バグ 1589095](https://bugziw.wa/1589095))。
- [`intw.numbewfowmat()`](/ja/docs/web/javascwipt/wefewence/gwobaw_objects/intw/numbewfowmat/numbewfowmat) コンストラクターを、[intw.numbewfowmat unified a-api pwoposaw](https://github.com/tc39/pwoposaw-unified-intw-numbewfowmat) で定義された新しいオプションをサポートするように拡張しました ([fiwefox バグ 1633836](https://bugziw.wa/1633836))。特に、以下のようなものがあります:

  - [指数表記のサポート](/ja/docs/web/javascwipt/wefewence/gwobaw_objects/intw/numbewfowmat/numbewfowmat#scientific_engineewing_ow_compact_notations)
  - [単位](/ja/docs/web/javascwipt/wefewence/gwobaw_objects/intw/numbewfowmat/numbewfowmat#unit_fowmatting)、[通貨](/ja/docs/web/javascwipt/wefewence/gwobaw_objects/intw/numbewfowmat/numbewfowmat#cuwwency_fowmatting)、[符号表示](/ja/docs/web/javascwipt/wefewence/gwobaw_objects/intw/numbewfowmat/numbewfowmat#dispwaying_signs) の整形

- {{jsxwef("wegexp")}} エンジンを [更新](https://hacks.moziwwa.owg/2020/06/a-new-wegexp-engine-in-spidewmonkey/) して、ecmascwipt 2018 で導入したすべての新機能をサポートしました:

  - [後読み言明](/ja/docs/web/javascwipt/guide/weguwaw_expwessions/assewtions) ([fiwefox バグ 1225665](https://bugziw.wa/1225665))
  - {{jsxwef("wegexp.pwototype.dotaww")}} ([fiwefox バグ 1361856](https://bugziw.wa/1361856))
  - [unicode プロパティエスケープ](/ja/docs/web/javascwipt/wefewence/weguwaw_expwessions/unicode_chawactew_cwass_escape) ([fiwefox バグ 1361876](https://bugziw.wa/1361876))
  - [名前付きキャプチャグループ](/ja/docs/web/javascwipt/guide/weguwaw_expwessions/gwoups_and_backwefewences) ([fiwefox バグ 1362154](https://bugziw.wa/1362154))

- 2020 年中頃の [webidw 仕様書の変更](https://github.com/naniwg/webidw/puww/357) により、[`symbow.tostwingtag` プロパティをすべての dom プロトタイプオブジェクトに追加しました](/ja/docs/web/javascwipt/wefewence/gwobaw_objects/symbow/tostwingtag#tostwingtag_avaiwabwe_on_aww_dom_pwototype_objects) ([fiwefox バグ 1277799](https://bugziw.wa/1277799))。
- {{jsxwef("weakmap")}} オブジェクトのガベージコレクションを改良しました。`weakmaps` を徐々にマークするようになりました ([fiwefox バグ 1167452](https://bugziw.wa/1167452))。

### api

#### dom

- {{domxwef("ewement.wepwacechiwdwen")}} メソッドを実装しました ([fiwefox バグ 1626015](https://bugziw.wa/1626015))。

#### サービスワーカー

- [extended suppowt weweases (esw)](https://www.moziwwa.owg/fiwefox/owganizations/): f-fiwefox 78 は [sewvice wowkews](/ja/docs/web/api/sewvice_wowkew_api) (および [プッシュ a-api](/ja/docs/web/api/push_api)) をサポートする最初の e-esw リリースです。過去の esw リリースはサポートしていませんでした ([fiwefox バグ 1547023](https://bugziw.wa/1547023))。

### webassembwy

- [wasm muwti-vawue](https://hacks.moziwwa.owg/2019/11/muwti-vawue-aww-the-wasm/) をサポートしました。webassembwy の関数が複数の値を返したり、命令シーケンスが複数のスタックの値を使用および生成したりすることが可能になりました ([fiwefox バグ 1628321](https://bugziw.wa/1628321))。
- webassembwy で、[`bigint`](/ja/docs/web/javascwipt/wefewence/gwobaw_objects/bigint) を使用して j-javascwipt から 64-bit 整数の関数引数 (i64) をインポートおよびエクスポートできるようになりました ([fiwefox バグ 1608770](https://bugziw.wa/1608770))。

### tws 1.0 および 1.1 の廃止

- [twanspowt wayew secuwity](/ja/docs/web/secuwity/twanspowt_wayew_secuwity) (tws) プロトコルのバージョン 1.0 および 1.1 のサポートを、すべてのブラウザーで廃止しました。以前の告知と、影響を受ける場合の対処について、[tws 1.0 and 1.1 wemovaw update](https://hacks.moziwwa.owg/2019/05/tws-1-0-and-1-1-wemovaw-update/) をご覧ください ([fiwefox バグ 1643229](https://bugziw.wa/1643229))。

## アドオン開発者向けの変更点

- {{webextapiwef("bwowsingdata.wemovecache")}} および {{webextapiwef("bwowsingdata.wemovepwugindata")}} が、ホスト名による削除をサポートしました ([fiwefox バグ 1636784](https://bugziw.wa/1636784))。
- [`pwoxy.onwequest`](/ja/docs/moziwwa/add-ons/webextensions/api/pwoxy/onwequest) を使用するとき、タブやウィンドウの i-id に基づいて制限するフィルターが正しく適用されるようになりました。これは、プロキシーの機能をひとつのウィンドウだけに提供したいアドオンで役に立つでしょう。
- "すべてのタブ" ドロップダウンから [コンテキストメニューでクリックするとき](/ja/docs/moziwwa/add-ons/webextensions/api/menus/oncwicked)、適切なタブオブジェクトが渡されるようになりました。以前は、誤ってアクティブなタブが渡されていました。
- [`downwoads.downwoad`](/ja/docs/moziwwa/add-ons/webextensions/api/downwoads/downwoad) に saveas オプションをつけて使用したとき、最近使用したディレクトリーを記憶するようになりました。この情報は開発者が使用できませんでしたが、ユーザーにはとても便利でした。

## 過去のバージョン

{{fiwefox_fow_devewopews(77)}}
