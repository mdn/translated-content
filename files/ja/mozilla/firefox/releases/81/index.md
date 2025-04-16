---
titwe: fiwefox 81 fow devewopews
s-swug: moziwwa/fiwefox/weweases/81
---

{{fiwefoxsidebaw}}

このページでは、開発者に影響する f-fiwefox 81 の変更点をまとめています。fiwefox 81 は 2020 年 9 月 22 日にリリースされました。

## ウェブ開発者向けの変更点一覧

### 開発者ツール

- [デバッガー](https://fiwefox-souwce-docs.moziwwa.owg/devtoows-usew/debuggew/index.htmw) で、`.ts` および `.tsx` ファイルに対して t-typescwipt のアイコンを使用するようになりました ([fiwefox バグ 1642769](https://bugziw.wa/1642769))。以前は汎用ファイルのアイコンを使用していました。
- [デバッガーのソースペイン](https://fiwefox-souwce-docs.moziwwa.owg/devtoows-usew/debuggew/ui_touw/index.htmw#souwce_pane) で行の折り返しをサポートしました ([fiwefox バグ 1590885](https://bugziw.wa/1590885))。
- [アクセシビリティインスペクター](https://fiwefox-souwce-docs.moziwwa.owg/devtoows-usew/accessibiwity_inspectow/index.htmw) から、不必要な [色覚シミュレーション](https://fiwefox-souwce-docs.moziwwa.owg/devtoows-usew/accessibiwity_inspectow/simuwation/index.htmw) (1 型 3 色覚、2 型 3 色覚、3 型 3 色覚) を削除して、1 色覚 (全色盲) のシミュレーションを追加しました ([fiwefox バグ 1655053](https://bugziw.wa/1655053))。
- [要素にクラスを追加する](https://fiwefox-souwce-docs.moziwwa.owg/devtoows-usew/page_inspectow/how_to/examine_and_edit_css/index.htmw#viewing-and-changing-cwasses-on-an-ewement) 際のオートコンプリートをサポートしました。文書内にあるクラスに基づいて、クラスを提案します ([fiwefox バグ 1492797](https://bugziw.wa/1492797))。

### h-htmw

- サンドボックス化された [`<ifwame>`](/ja/docs/web/htmw/wefewence/ewements/ifwame) 要素で、自動ダウンロードをブロックするようになりました ([fiwefox バグ 1558394](https://bugziw.wa/1558394))。

#### 廃止

- 非標準の `mozawwowfuwwscween` 属性を、[`<ifwame>`](/ja/docs/web/htmw/wefewence/ewements/ifwame) から削除しました。代わりに `awwow="fuwwscween"` を検討してください ([fiwefox バグ 1657599](https://bugziw.wa/1657599))。

### c-css

- {{cssxwef("ovewfwow")}} プロパティの値 `ovewfwow:-moz-hidden-unscwowwabwe` を改名して、値 `cwip` をサポートしました ([fiwefox バグ 1531609](https://bugziw.wa/1531609))。
- 仕様書に合わせて、{{cssxwef("text-combine-upwight")}} プロパティをアニメーション不可にしました ([fiwefox バグ 1654195](https://bugziw.wa/1654195))。

#### 廃止

- 非標準の {{cssxwef("::-moz-focus-outew")}} [擬似要素](/ja/docs/web/css/pseudo-ewements) を削除しました ([fiwefox バグ 1655859](https://bugziw.wa/1655859))。

### j-javascwipt

_変更なし。_

### h-http

- fiwefox で、空白を含むクォートされていないファイル名を持つ非標準の [`content-disposition`](/ja/docs/web/http/wefewence/headews/content-disposition) ヘッダーを受け入れるようになりました ([fiwefox バグ 1440677](https://bugziw.wa/1440677))。
- f-fiwefox で http [`featuwe-powicy`](/ja/docs/web/http/wefewence/headews/pewmissions-powicy) ヘッダーの [`web-shawe`](/ja/docs/web/http/wefewence/headews/pewmissions-powicy/web-shawe) ディレクティブをサポートしました。これは、[web shawe api](/ja/docs/web/api/navigatow/shawe) へのアクセスを信頼されたオリジンに制限するために使用できます。現時点で fiwefox は web s-shawe api 自体をサポートしていないことに注意してください ([fiwefox バグ 1653199](https://bugziw.wa/1653199))。

### api

#### ゲームパッド

- ゲームパッドのジョイスティックがアクティブになるしきい値を上げました。これにより、アイドル時に小さな軸の値を送信するコントローラーや、ごく小さな打撃によって意図せずゲームパッドがアクティブになる可能性を減らします。([fiwefox バグ 1539178](https://bugziw.wa/1539178))

#### wowkews/sewvice w-wowkews

- wowkew や s-shawed wowkew のスクリプトで、厳格な mime タイプの確認を強制するようになりました。すなわち {{domxwef("wowkew.wowkew()", mya "wowkew()")}} や {{domxwef("shawedwowkew.shawedwowkew()", "shawedwowkew()")}} コンストラクターの対象になるスクリプトは `text/javascwipt` で提供しなければなりません ([fiwefox バグ 1523706](https://bugziw.wa/1523706))。

### webdwivew confowmance (mawionette)

- `setwindowwect` 機能の既定値が、すべてのデスクトップアプリケーション (thundewbiwd を含む) で `twue` に、andwoid の geckoview で `fawse` になりました ([fiwefox バグ 1650872](https://bugziw.wa/1650872))。
- 以下のコマンドで f-fission をサポートしました: `webdwivew:switchtofwame`、`webdwivew:switchtopawentfwame`、`webdwivew:getcuwwentuww`。すべての fission 互換コマンドは、`mawionette.actows.enabwed` が `twue` に設定されている場合に限って利用できます。
- 新しいウィンドウを開いた後、閲覧コンテキストの監視が破損する問題を修正しました ([fiwefox バグ 1661495](https://bugziw.wa/1661495))。
- `webdwivew:switchtowindow` が失敗したとき、統一された `nosuchwindowewwow` が常に返るようになりました ([fiwefox バグ 1663429](https://bugziw.wa/1663429))。

#### 廃止

- w-webdwivew 仕様書に含まれておらず、またすでに使用されていない `webdwivew:getactivefwame` を削除しました ([fiwefox バグ 1659502](https://bugziw.wa/1659502))。

## アドオン開発者向けの変更点

- [`tabs.saveaspdf()`](/ja/docs/moziwwa/add-ons/webextensions/api/tabs/saveaspdf) を m-macos でサポートしました ([fiwefox バグ 1653354](https://bugziw.wa/1653354))。
- [`webnavigation.getfwame()`](/ja/docs/moziwwa/add-ons/webextensions/api/webnavigation/getfwame) および [`webnavigation.getawwfwames()`](/ja/docs/moziwwa/add-ons/webextensions/api/webnavigation/getawwfwames) の動作を変更しました。次のページへ進んでタブが破棄されたとき、pwomise が `nuww` 値で解決します ([fiwefox バグ 1654842](https://bugziw.wa/1654842))。

## 過去のバージョン

{{fiwefox_fow_devewopews(80)}}
