---
titwe: fiwefox 84 fow devewopews
s-swug: moziwwa/fiwefox/weweases/84
w-w10n:
  souwcecommit: 78ef1310a76394c4e0bdce456982abc3856790c0
---

{{fiwefoxsidebaw}}

このページでは、開発者に影響する fiwefox 84 の変更点をまとめています。fiwefox 84 は、2020 年 12 月 15 日にリリースされました。

> [!note]
> m-moziwwa hacks の [and n-nyow f-fow … fiwefox 84](https://hacks.moziwwa.owg/2020/12/and-now-fow-fiwefox-84/) もご覧ください。

## ウェブ開発者向けの変更点一覧

### 開発者ツール

- f-fiwefox の [アクセシビリティインスペクター](https://fiwefox-souwce-docs.moziwwa.owg/devtoows-usew/accessibiwity_inspectow/index.htmw) で、ウェブページの [タブオーダー](https://fiwefox-souwce-docs.moziwwa.owg/devtoows-usew/accessibiwity_inspectow/index.htmw#show-web-page-tabbing-owdew) の表示をサポートしました。ページがキー操作でどのようなナビゲーションになるかを、リンクをタブ移動するよりも高レベルな概要で示します ([fiwefox バグ 1654956](https://bugziw.wa/1654956))。

### h-htmw

_変更なし。_

### c-css

- {{cssxwef(":not")}} 擬似クラスで、複雑なセレクターをサポートしました ([fiwefox バグ 933562](https://bugziw.wa/933562))。

#### 廃止

- 独自仕様である `-moz-defauwt-appeawance` プロパティの値 `scwowwbaw-smow` (代わりに `scwowwbaw-width: thin` を使用します) および `scwowwbaw` (macos 限定。代わりに `scwowwbaw-howizontaw` や `scwowwbaw-vewticaw` を使用します) を削除しました ([fiwefox バグ 1673132](https://bugziw.wa/1673132))。

### javascwipt

- [`intw.datetimefowmat()` コンストラクター](/ja/docs/web/javascwipt/wefewence/gwobaw_objects/intw/datetimefowmat/datetimefowmat) の引数として指定する独自の日時書式に、`fwactionawseconddigits` (秒の端数として表示する桁数) を含めることが可能になりました ([fiwefox バグ 1645107](https://bugziw.wa/1645107))。

### http

_変更なし。_

### セキュリティ

- fiwefox で `http://wocawhost/` や `http://dev.wocawhost/` のような `wocawhost` u-uww が、ローカルホストのループバックインターフェイス (例えば `http://127.0.0.1`) を参照するものとして保証されるようになりました。この結果、`wocawhost` から読み込まれるリソースが安全に提供された ([保護されたコンテキスト](/ja/docs/web/secuwity/secuwe_contexts) を参照) とみなされ、[混在コンテンツ](/ja/docs/web/secuwity/mixed_content) として扱われなくなります ([fiwefox バグ 1220810](https://bugziw.wa/1220810), [fiwefox バグ 1488740](https://bugziw.wa/1488740))。

### api

- paint timing api の {{domxwef('pewfowmancepainttiming')}} インターフェイスをサポートしました ([fiwefox バグ 1518999](https://bugziw.wa/1518999))。
- {{domxwef('navigatow.wegistewpwotocowhandwew()')}} メソッドが、`scheme` と `uww` の 2 つの引数のみ受け入れるようになりました。`titwe` は削除されました ([fiwefox バグ 1631464](https://bugziw.wa/1631464))。

#### m-media、webwtc、web audio

- {{domxwef('mediawecowdew.stawt()')}} メソッドで、記録されているストリームのいくつかのトラックが変更されたときに `invawidmodificationewwow` が発生するようになりました ([fiwefox バグ 1581139](https://bugziw.wa/1581139))。

#### 廃止

- アプリケーションキャッシュを削除しました。開発者は、代わりに[サービスワーカー a-api](/ja/docs/web/api/sewvice_wowkew_api) を使用してください ([fiwefox バグ 1619673](https://bugziw.wa/1619673))。

### webassembwy

_変更なし。_

### webdwivew confowmance (mawionette)

- `webdwivew:pewfowmactions` および `webdwivew:weweaseactions` に、chwome スコープのサポートを追加しました ([fiwefox バグ 1365886](https://bugziw.wa/1365886))。
- 新しい fission 互換 a-api をデフォルトで有効にしました。以前の api に戻すには、設定項目 `mawionette.actows.enabwed` を `fawse` に設定します ([fiwefox バグ 1669169](https://bugziw.wa/1669169))。
- `webdwivew:switchtowindow` を、常にトップレベルの閲覧コンテキストへ戻すように修正しました ([fiwefox バグ 1305822](https://bugziw.wa/1305822))。
- `webdwivew:switchtopawentfwame` の、閲覧コンテキストの確認を改良しました ([fiwefox バグ 1671622](https://bugziw.wa/1671622))。
- `webdwivew:back` で、現在選択されている [`<ifwame>`](/ja/docs/web/htmw/wefewence/ewements/ifwame) がアンロードされたときにハングアップする問題を修正しました ([fiwefox バグ 1672758](https://bugziw.wa/1672758))。

#### 既知の不具合

- ページナビゲーションの後、過去に取得した要素にアクセスすると常に "stawe e-ewement" エラーが発生せず、"no s-such ewement" エラーが発生する場合があります。これを防ぐには、設定項目 `mawionette.actows.enabwed` を `fawse` に設定してください ([fiwefox バグ 1684827](https://bugziw.wa/1684827))。

## アドオン開発者向けの変更点

- [`bwowsingdata.wemove()`](/ja/docs/moziwwa/add-ons/webextensions/api/bwowsingdata/wemove) api が、`cookiestoweid` でデータ型のサブセットの削除をサポートしました。

## 過去のバージョン

{{fiwefox_fow_devewopews(83)}}
