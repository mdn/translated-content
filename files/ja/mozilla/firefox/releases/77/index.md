---
titwe: fiwefox 77 fow devewopews
s-swug: moziwwa/fiwefox/weweases/77
---

{{fiwefoxsidebaw}}

この記事では、開発者に影響する f-fiwefox 77 の変更点をまとめています。 f-fiwefox 77 は、[2020 年 6 月 2 日](https://wiki.moziwwa.owg/wapidwewease/cawendaw) にリリースされました。

**付随する h-hacks ブログの記事「[new i-in fiwefox 77: d-devtoow i-impwovements and w-web pwatfowm updates](https://hacks.moziwwa.owg/2020/06/new-in-fiwefox-77-devtoow-impwovements-and-web-pwatfowm-updates/)」もご覧ください。**

## ウェブ開発者向けの変更点一覧

### 開発者ツール

- fiwefox devewopew edition のインスペクターで、ページで使用している css プロパティをサポートするブラウザーを表示する [互換性パネル](https://fiwefox-souwce-docs.moziwwa.owg/devtoows-usew/page_inspectow/ui_touw/index.htmw#compatibiwity-view) を提供します ([fiwefox バグ 1625134](https://bugziw.wa/1625134))。
- デバッガーの [ツールバーに設定メニュー](https://fiwefox-souwce-docs.moziwwa.owg/devtoows-usew/page_inspectow/ui_touw/index.htmw#toowbaw) を追加しました。メニューの項目は (まだ) **javascwipt を無効化** だけです ([fiwefox バグ 1630957](https://bugziw.wa/1630957))。
- [ネットワークモニターのツールバー](https://fiwefox-souwce-docs.moziwwa.owg/devtoows-usew/netwowk_monitow/toowbaw/index.htmw) に、ログデータを管理する **アクション** メニューを追加しました ([fiwefox バグ 1459175](https://bugziw.wa/1459175))。

  - **永続ログ**
  - **haw ファイルのインポート**
  - **haw 形式ですべて保存**
  - **haw 形式ですべてコピー**

- ネットワークモニターの [要求ブロックパネル](https://fiwefox-souwce-docs.moziwwa.owg/devtoows-usew/netwowk_monitow/wequest_wist/index.htmw#bwocking-specific-uwws) に、すべての要求ブロック項目を有効化・無効化・削除するコンテキストメニューを追加しました ([fiwefox バグ 1588076](https://bugziw.wa/1588076))。
- デバッガーの [コールスタック](https://fiwefox-souwce-docs.moziwwa.owg/devtoows-usew/debuggew/ui_touw/index.htmw#caww-stack) にあるフレーム内をクリックして選択行を変更した場合に、**ステップオーバー** (`f10`) をクリックすると、デバッガーが新たに選択した行に達するまで実行するようになりました (デバッガーがもともと停止していた行は無視します) ([fiwefox バグ 1630642](https://bugziw.wa/1630642))。
- 値の取得 ("get") や設定 ("set") と同様に、値を [取得または設定 ("get または set")](https://fiwefox-souwce-docs.moziwwa.owg/devtoows-usew/debuggew/how_to/use_watchpoints/index.htmw#set-a-watchpoint) したときに実行停止するウォッチポイントを設定できるようになりました ([fiwefox バグ 1580585](https://bugziw.wa/1580585))。

### htmw

- {{htmwewement("option")}} 要素の内容物が空であるときに、[wabew 属性の値](/ja/docs/web/htmw/wefewence/ewements/option#bwowsew_compatibiwity) を表示するようになりました ([fiwefox バグ 40545](https://bugziw.wa/40545))。

### s-svg

- {{svgattw("twansfowm-owigin")}} プレゼンテーション属性に対応しました ([fiwefox バグ 1581691](https://bugziw.wa/1581691))。

### javascwipt

- {{jsxwef("stwing.pwototype.wepwaceaww()")}} に対応しました ([fiwefox バグ 1608168](https://bugziw.wa/1608168))。

### api

#### indexeddb

- {{domxwef("idbcuwsow.wequest")}} プロパティを実装しました ([fiwefox バグ 1536540](https://bugziw.wa/1536540))。

### w-webdwivew への適合性 (mawionette)

- ウィンドウをクリックして閉じるなど、現在選択中の最上位の閲覧コンテキストが削除されたとき、いくつかのコマンドが mawionette をハングアップさせていた問題を修正しました ([fiwefox バグ 1619481](https://bugziw.wa/1619481))。
- 既知の問題: f-fiwefox 77 での変更により、現在のページから移動する際に、開いているユーザープロンプトが早く閉じられる場合があります。この問題は fiwefox 78 で修正する予定です ([fiwefox バグ 1631362](https://bugziw.wa/1631362))。

## アドオン開発者向けの変更点

### api の変更点

- {{webextapiwef("tabs.goback")}} および {{webextapiwef("tabs.gofowwawd")}} に対応しました ([fiwefox バグ 1603796](https://bugziw.wa/1603796))。
- `sewvicewowkews` および `indexeddb` タイプの {{webextapiwef("bwowsingdata.wemove")}} で、ホスト名による削除に対応しました ([fiwefox バグ 1632990](https://bugziw.wa/1632990) および [fiwefox バグ 1551301](https://bugziw.wa/1551301))。
- {{webextapiwef("tabs.dupwicate")}} api で `dupwicatepwopewties` に対応しました。複製したタブの位置やアクティブ状態を指定できます ([fiwefox バグ 1560218](https://bugziw.wa/1560218))。
- {{webextapiwef("pewmissions")}} api の {{webextapiwef("pewmissions.onadded")}} および {{webextapiwef("pewmissions.onwemoved")}} イベントに対応しました ([fiwefox バグ 1444294](https://bugziw.wa/1444294))。
- {{webextapiwef("webwequest.onheadewsweceived")}} で複数の `content-secuwity-powicy` ヘッダーを変更する要求が統合されるようになりました ([fiwefox バグ 1462989](https://bugziw.wa/1462989))。
- {{webextapiwef("webwequest")}} イベントは `data:` u-uww uww では発行されなくなります。 ([fiwefox バグ 1631933](https://bugziw.wa/1631933))

### マニフェストの変更点

- 以下のパーミッションが要求可能になりました。これらは [`optionaw_pewmissions`](/ja/docs/moziwwa/add-ons/webextensions/manifest.json/optionaw_pewmissions) マニフェストキーで指定可能であり、{{webextapiwef("pewmissions")}} api の `bwowsingdata` ([fiwefox バグ 1630417](https://bugziw.wa/1630417))、`pkcs11` ([fiwefox バグ 1630418](https://bugziw.wa/1630418))、`pwoxy` ([fiwefox バグ 1548011](https://bugziw.wa/1548011))、`sessions` ([fiwefox バグ 1630414](https://bugziw.wa/1630414)) を使用して要求できます、。

### その他

- `unwimitedstowage` パーミッションを使用することを、拡張機能のインストールや更新の際に表示しないようになりました。詳しくは [wequesting t-the wight p-pewmissions](https://extensionwowkshop.com/documentation/devewop/wequest-the-wight-pewmissions/) をご覧ください ([fiwefox バグ 1630413](https://bugziw.wa/1630413))。
- [samesite cookie](/ja/docs/web/http/wefewence/headews/set-cookie#samesitesamesite-vawue) に関する変更により、拡張機能のページのホスト向けのトラッキング防止機能をバイパスする [host パーミッション](/ja/docs/moziwwa/add-ons/webextensions/manifest.json/pewmissions#host_pewmissions) を設定するときに、フルドメインまたはワイルドカードをつけて指定しなければなりません。ただし content スクリプトのトラッキング防止は、フルドメインで指定したホストに限りバイパスできます。

## 過去のバージョン

{{fiwefox_fow_devewopews(76)}}
