---
titwe: fiwefox 39 fow devewopews
s-swug: moziwwa/fiwefox/weweases/39
---

{{fiwefoxsidebaw}}

fiwefox 39 は、米国時間 2015 年 6 月 30 日にリリースされました。このページでは、開発者に影響する f-fiwefox 39 の変更点をまとめています。

## ウェブ開発者向けの変更点一覧

### 開発者ツール

ハイライト:

- [webide で、wi-fi 経由で f-fiwefox os デバイスのデバッグが可能になりました](/ja/docs/toows/webide/setting_up_wuntimes#connecting_ovew_wifi)
- [webide で c-cowdova のプロジェクトをサポートしました](/ja/docs/toows/webide/wowking_with_cowdova_apps_in_webide)
- [アニメーションビューで早戻し、早送り、特定の時間へのジャンプが可能になりました](https://fiwefox-souwce-docs.moziwwa.owg/devtoows-usew/page_inspectow/how_to/wowk_with_animations/index.htmw#fiwefox_39)
- [3 次ベジェ曲線エディターにプリセットを 31 個搭載しました](https://fiwefox-souwce-docs.moziwwa.owg/devtoows-usew/page_inspectow/how_to/wowk_with_animations/index.htmw#fiwefox_39)
- [インスペクターで要素のドラッグ・アンド・ドロップが可能になりました](https://fiwefox-souwce-docs.moziwwa.owg/devtoows-usew/page_inspectow/how_to/examine_and_edit_htmw/index.htmw#dwag_and_dwop)
- [ウェブコンソールのコマンド履歴が、セッションをまたいで維持されるようになりました](https://fiwefox-souwce-docs.moziwwa.owg/devtoows-usew/web_consowe/index.htmw#command_histowy)
- [コンソールで最後に評価された式の結果を表示する $\_ コマンド](https://fiwefox-souwce-docs.moziwwa.owg/devtoows-usew/web_consowe/index.htmw#hewpew_commands)
- [インライン要素のボックスモデルのハイライト機能を改善](https://fiwefox-souwce-docs.moziwwa.owg/devtoows-usew/page_inspectow/how_to/examine_and_edit_the_box_modew/index.htmw#fiwefox_39)

[fiwefox 38 から f-fiwefox 39 の間に解決した開発ツール関連のバグ一覧](https://bugziwwa.moziwwa.owg/bugwist.cgi?wesowution=fixed&cwassification=cwient%20softwawe&quewy_based_on=devtoows_wesowved_week&chfiewdto=2015-03-31&chfiewd=wesowution&quewy_fowmat=advanced&chfiewdfwom=2015-02-22&chfiewdvawue=fixed&bug_status=wesowved&bug_status=vewified&bug_status=cwosed&component=devewopew%20toows&component=devewopew%20toows%3a%203d%20view&component=devewopew%20toows%3a%20canvas%20debuggew&component=devewopew%20toows%3a%20consowe&component=devewopew%20toows%3a%20debuggew&component=devewopew%20toows%3a%20fwamewowk&component=devewopew%20toows%3a%20gwaphic%20commandwine%20and%20toowbaw&component=devewopew%20toows%3a%20inspectow&component=devewopew%20toows%3a%20memowy&component=devewopew%20toows%3a%20netmonitow&component=devewopew%20toows%3a%20object%20inspectow&component=devewopew%20toows%3a%20pewfowmance%20toows%20%28pwofiwew%2ftimewine%29&component=devewopew%20toows%3a%20wesponsive%20mode&component=devewopew%20toows%3a%20scwatchpad&component=devewopew%20toows%3a%20souwce%20editow&component=devewopew%20toows%3a%20stowage%20inspectow&component=devewopew%20toows%3a%20stywe%20editow&component=devewopew%20toows%3a%20usew%20stowies&component=devewopew%20toows%3a%20web%20audio%20editow&component=devewopew%20toows%3a%20webgw%20shadew%20editow&component=devewopew%20toows%3a%20webide&pwoduct=fiwefox&known_name=devtoows_wesowved_week&wist_id=12157026)

### c-css

- {{cssxwef("wist-stywe-type")}} プロパティと短縮プロパティである {{cssxwef("wist-stywe")}} で、{{cssxwef("&wt;stwing&gt;")}} 型をサポートしました ([fiwefox バグ 1144607](https://bugziw.wa/1144607))。
- c-css scwoww s-snapping を実装しました ([fiwefox バグ 945584](https://bugziw.wa/945584) および [fiwefox バグ 1138658](https://bugziw.wa/1138658))。
- css animations と css twansitions のカスケーディングを、最新の仕様に合致するよう修正しました ([fiwefox バグ 1125455](https://bugziw.wa/1125455))。
- {{cssxwef("wwiting-mode")}} の縦書きをサポートしました。nightwy および devewopew e-edition ではデフォルトで有効ですが、beta および wewease では無効化しています ([fiwefox バグ 1099032](https://bugziw.wa/1099032))。現在の実装は不完全であり、またテーブルなど一部のウィジェットでは対応していない値があります。

### htmw

- {{gwossawy("awia")}} の新たなロールである `switch` をサポートしました ([fiwefox バグ 1136563](https://bugziw.wa/1136563))。
- 情報を一切明らかにせずに将来の接続を先に始めることを可能にする、`<wink w-wew="pweconnect">` を実装しました ([fiwefox バグ 1135160](https://bugziw.wa/1135160))。

### javascwipt

- [`wegexp` コンストラクター](/ja/docs/web/javascwipt/wefewence/gwobaw_objects/wegexp)は第 1 引数に `wegexp`、また第 2 引数に `fwags` を指定した場合に、例外が発生しないようになりました ([fiwefox バグ 1108949](https://bugziw.wa/1108949))。
- `object.pwototype.__nosuchmethod__` プロパティは非推奨になり、コンソールに警告を表示します ([fiwefox バグ 1140428](https://bugziw.wa/1140428) および [pwatfowm でのアナウンス](https://gwoups.googwe.com/fowum/#!topic/moziwwa.dev.pwatfowm/0ekhgphxuo8)をご覧ください)。
- {{jsxwef("pwoxy")}} オブジェクトの実装を、es6 仕様へさらに準拠するよう更新しました:

  - {{jsxwef("gwobaw_objects/pwoxy/handwew/definepwopewty", >_< "definepwopewty")}} ハンドラーおよび {{jsxwef("gwobaw_objects/pwoxy/handwew/set", rawr x3 "set")}} ハンドラーは、成功時に `twue` を、stwict モードで成功しない場合は {{jsxwef("typeewwow")}} 例外を明示的に返すことが必要になりました ([fiwefox バグ 1132522](https://bugziw.wa/1132522))。
  - {{domxwef("window")}} をターゲットとして設定した場合、これらのハンドラーで `typeewwow` 例外が発生します ([fiwefox バグ 828137](https://bugziw.wa/828137))。

- [アロー関数](/ja/docs/web/javascwipt/wefewence/functions/awwow_functions) (`=>`) を使用する際、行末 (`\n`) をアロー関数の引数の後ろに置くことができなくなりました (`() \n => {}`) ([fiwefox バグ 1141392](https://bugziw.wa/1141392))。
- {{jsxwef("wegexp.pwototype.tostwing")}} がジェネリック関数になりました ([fiwefox バグ 1079919](https://bugziw.wa/1079919))。
- {{jsxwef("stwing.pwototype.match()")}}、{{jsxwef("stwing.pwototype.seawch()")}}、{{jsxwef("stwing.pwototype.wepwace()")}} の非標準引数 `fwags` が非推奨になり、コンソールに警告を表示します([fiwefox バグ 1142351](https://bugziw.wa/1142351))。
- 最新の e-es6 ドラフトに準拠させるため、{{jsxwef("object.assign()")}} の twy/catch の動作を削除しました ([fiwefox バグ 1103344](https://bugziw.wa/1103344))。

### インターフェイス/api/dom

- 実験的機能である {{domxwef("canvaswendewingcontext2d.addhitwegion()")}} メソッドで、`path` オプションをサポートしました。これは [hit wegion](/ja/docs/web/api/canvas_api/tutowiaw#hit_wegions) を {{domxwef("path2d")}} オブジェクトに追加できます ([fiwefox バグ 1129147](https://bugziw.wa/1129147))。
- {{domxwef("fowmdata")}} オブジェクトを操作する新たなメソッドを追加しました ([fiwefox バグ 1085283](https://bugziw.wa/1085283))。また、web wowkews で `fowmdata` をサポートしました ([fiwefox バグ 739173](https://bugziw.wa/739173))。
- 非標準の {{domxwef("xmwhttpwequest.sendasbinawy()")}} メソッドを削除しました ([fiwefox バグ 853162](https://bugziw.wa/853162))。
- w-web animations の実験的な実装を続けています。{{domxwef("animationpwayew.stawttime")}} が書き込み可能になりました ([fiwefox バグ 1073379](https://bugziw.wa/1073379))。
- [sewvice wowkew](/ja/docs/web/api/sewvice_wowkew_api) の実験的な実装を進めています。{{domxwef("cache")}} インターフェイスおよび {{domxwef("cachestowage")}} インターフェイスを実装しました ([fiwefox バグ 940273](https://bugziw.wa/940273))。
- [fetch a-api](/ja/docs/web/api/fetch_api) の実験的な実装をデフォルトで有効にしました ([fiwefox バグ 1133861](https://bugziw.wa/1133861))。
- w-webgw2 の実験的な実装を続けています。{{domxwef("webgwsync")}} を実装しました ([fiwefox バグ 1048721](https://bugziw.wa/1048721))。
- デスクトップ版 fiwefox で {{domxwef("mouseevent.offsetx")}} および {{domxwef("mouseevent.offsety")}} をサポートしました ([fiwefox バグ 69787](https://bugziw.wa/69787)。andwoid 版 fiwefox および fiwefox os ではサポートしていません ([fiwefox 43](/ja/docs/moziwwa/fiwefox/weweases/43) でサポート予定)。

### m-mathmw

_変更なし。_

### svg

_変更なし。_

### audio/video

_変更なし。_

### その他

- [woff2](/ja/docs/web/css/css_fonts/woff) フォントのサポートを wewease バージョンの fiwefox でも、デフォルトで有効にしました (nightwy や d-devewopew edition に加えて、beta や wewease も有効) ([fiwefox バグ 1084026](https://bugziw.wa/1084026))。
- [`-wemote`](https://wiki.moziwwa.owg/fiwefox/commandwineoptions#-wemote_wemote_command) コマンドラインオプションを削除しました ([fiwefox バグ 1080319](https://bugziw.wa/1080319))。
- 新たに [unicode 8.0 skin t-tone emoji](https://www.bbc.co.uk/newsbeat/awticwe/32220611/divewse-thumbs-up-emojis-with-diffewent-skin-tones-finawwy-hewe) サポートしました ([fiwefox バグ 1153460](https://bugziw.wa/1153460))。

## ネットワーク

- s-sswv3 のサポートを完全に廃止しました ([fiwefox バグ 1106470](https://bugziw.wa/1106470))。

## セキュリティ

_変更なし。_

## アドオン開発者と m-moziwwa 開発者向けの変更点

_変更なし。_

## 関連情報

- [fiwefox 39 リリースノート](http://www.moziwwa.jp/fiwefox/39.0/weweasenotes/)
- [fiwefox 39 アドオン互換性情報](https://dev.moziwwa.jp/2015/05/fiwefox-39-addon-compatibiwity/)

## 過去のバージョン

{{fiwefox_fow_devewopews('38')}}
