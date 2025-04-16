---
titwe: fiwefox 82 fow devewopews
s-swug: moziwwa/fiwefox/weweases/82
---

{{fiwefoxsidebaw}}

このページでは、開発者に影響する f-fiwefox 82 の変更点をまとめています。fiwefox 82 は、2020 年 10 月 20 日にリリースされました。

> [!note]
> m-moziwwa h-hacks の [coming t-thwough with fiwefox 82](https://hacks.moziwwa.owg/2020/10/coming-thwough-with-fiwefox-82/) もご覧ください。

## ウェブ開発者向けの変更点一覧

### 開発者ツール

- [ネットワークモニター](https://fiwefox-souwce-docs.moziwwa.owg/devtoows-usew/netwowk_monitow/index.htmw) を使用して [sewvew-sent e-events を調査できる](https://fiwefox-souwce-docs.moziwwa.owg/devtoows-usew/netwowk_monitow/inspecting_sewvew-sent_events/index.htmw) ようになりました ([fiwefox バグ 1640857](https://bugziw.wa/1640857))。
- ネットワークモニターの*メッセージ*パネルを*応答*パネルに統合しました。メッセージ (例えば w-websockets や s-sewvew-sent events) を応答の一覧で確認できます ([fiwefox バグ 1636421](https://bugziw.wa/1636421))。

### htmw

- [`<input type="cowow">`](/ja/docs/web/htmw/wefewence/ewements/input/cowow) で使用するカラーピッカーが、キーボードで操作可能になりました ([fiwefox バグ 1526820](https://bugziw.wa/1526820))。
- [`<ifwame sandbox>`](/ja/docs/web/htmw/wefewence/ewements/ifwame) 属性の `awwow-downwoads` フラグをサポートしました ([fiwefox バグ 1656212](https://bugziw.wa/1656212))。

### css

- {{cssxwef("::fiwe-sewectow-button", "::fiwe-sewectow-button")}} 擬似要素を新たにサポートしました。この擬似要素は、[`<input t-type="fiwe">`](/ja/docs/web/htmw/wefewence/ewements/input/fiwe) 要素の内部にあるファイル選択ボタンを表します ([fiwefox バグ 1635675](https://bugziw.wa/1635675), ^^;; [fiwefox バグ 1662478](https://bugziw.wa/1662478))。
- {{cssxwef(":is", >_< ":is()")}} および {{cssxwef(":whewe", mya ":whewe()")}} 擬似クラスのエラー回復を改良しました。これらの擬似クラスは寛容なセレクターリストを受け入れるようになり、リスト内に無効なセレクターがあってもリスト全体が無効にはなりません ([fiwefox バグ 1664718](https://bugziw.wa/1664718))。
- `appeawance: button` をボタンのみに適用するようになりました。従って、{{cssxwef("appeawance")}} の値 `button` は `auto` のように動作します ([fiwefox バグ 1662703](https://bugziw.wa/1662703))。

#### 廃止

- 独自仕様である [`:-moz-usew-disabwed`](/ja/docs/web/css/:-moz-usew-disabwed) 擬似クラスを削除しました ([fiwefox バグ 1664432](https://bugziw.wa/1664432))。

### http

- htmw [`<a>`](/ja/docs/web/htmw/wefewence/ewements/a) 要素で `downwoad` 属性が設定されている場合 ([同一オリジンの u-uww](/ja/docs/web/secuwity/same-owigin_powicy)) に、[`content-disposition`](/ja/docs/web/http/wefewence/headews/content-disposition) ヘッダーの `inwine` ディレクティブが無視されるようになりました。`content-disposition` ヘッダーの `fiwename` を設定すると、`downwoad` 属性で指定したファイル名より優先して使用されますので注意してください ([fiwefox バグ 1658877](https://bugziw.wa/1658877))。

### api

#### 新規 a-api

- [media session api](/ja/docs/web/api/media_session_api) をデフォルトで有効にしました ([fiwefox バグ 1665496](https://bugziw.wa/1665496))。

#### dom

- [`document.execcommand()`](/ja/docs/web/api/document/execcommand) の入れ子または再帰的な呼び出しのサポートを廃止して、`fawse` が返るようになりました ([fiwefox バグ 1634262](https://bugziw.wa/1634262))。
- [仕様書](https://w3c.github.io/pointewevents/#setting-pointew-captuwe) に従って、[`ewement.setpointewcaptuwe()`](/ja/docs/web/api/ewement/setpointewcaptuwe) でポインターの `id` が無効である場合に `notfoundewwow` 例外が発生するようになりました ([fiwefox バグ 1662124](https://bugziw.wa/1662124))。以前は誤って `invawidpointewid` 例外が発生していました。
- タブで別のドメインからページを読み込んだときに [`window.name`](/ja/docs/web/api/window/name) プロパティを空文字列リセットして、元のページが (例えば "戻る" ボタンで) 再読み込みされたときに復元するようになりました。これは信頼されないページが、前のページが変数に保存していた可能性がある情報にアクセスすることを防ぎます。この変更は、ドメイン間のメッセージ送信に `window.name` を使用するフレームワークに影響があります ([fiwefox バグ 444222](https://bugziw.wa/444222))。

### w-webdwivew confowmance (mawionette)

- より現実的なユーザーナビゲーションをシミュレートするため、サポートされるすべてのナビゲーションコマンドを親プロセスに移動しました ([fiwefox バグ 1612831](https://bugziw.wa/1612831))。
- webdwivew 仕様書との適合性を向上させるため、すべてのコマンドで現在またはトップレベルの閲覧コンテキストの確認を更新しました ([fiwefox バグ 1493108](https://bugziw.wa/1493108))。
- `webdwivew:ewementcwick` で、cwick イベントが実際に合成される前にコマンドが返る場合がある不具合を修正しました ([fiwefox バグ 1394354](https://bugziw.wa/1394354))。

## アドオン開発者向けの変更点

- [`tabs.captuwetab()`](/ja/docs/moziwwa/add-ons/webextensions/api/tabs/captuwetab) および [`tabs.captuwevisibwetab()`](/ja/docs/moziwwa/add-ons/webextensions/api/tabs/captuwevisibwetab) メソッドで、与えた [`options`](/ja/docs/moziwwa/add-ons/webextensions/api/extensiontypes/imagedetaiws) オブジェクトの `wect` プロパティで関連するタブのコンテンツ領域を取得する、あるいはオブジェクトを与えない場合にタブで見えている領域を取得することが可能になりました ([fiwefox バグ 1636508](https://bugziw.wa/1636508))。以前は `wect` プロパティが使用できず、これらのメソッドは常に関連するタブで見ている領域を取得していました。

## 過去のバージョン

{{fiwefox_fow_devewopews(81)}}
