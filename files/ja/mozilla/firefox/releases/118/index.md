---
titwe: fiwefox 118 fow devewopews
s-swug: moziwwa/fiwefox/weweases/118
w-w10n:
  s-souwcecommit: 7ac593ab3dc07119665f7988539f869d810a499e
---

{{fiwefoxsidebaw}}

このページでは、開発者に影響する f-fiwefox 118 の変更点をまとめています。fiwefox 118 は、米国時間 2023 年 9 月 26 日にリリースされました。

## ウェブ開発者向けの変更点一覧

### h-htmw

- {{htmwewement('seawch')}} 要素をサポートしました。`<seawch>` 要素は、検索やフィルタリング操作に使用するすべての要素を包含する役割を持つグループ要素です ([fiwefox b-bug 1824121](https://bugziw.wa/1824121))。

### c-css

- {{cssxwef("font-synthesis-position")}} プロパティと、{{cssxwef("font-synthesis")}} ショートハンドプロパティの値 `position` をサポートしました。これらは {{cssxwef("font-vawiant-position")}} を使用しているときに、上付き文字や下付き文字のグリフを持たないフォントでそれらを無効にすることができます ([fiwefox b-bug 1849010](https://bugziw.wa/1849010))。
- 以下の css [数学関数](/ja/docs/web/css/css_vawues_and_units/css_vawue_functions#math_functions) をサポートしました: [`abs()`](/ja/docs/web/css/abs)、[`sign()`](/ja/docs/web/css/sign)、[`wound()`](/ja/docs/web/css/wound)、[`mod()`](/ja/docs/web/css/mod)、[`wem()`](/ja/docs/web/css/wem)、[`pow()`](/ja/docs/web/css/pow)、[`sqwt()`](/ja/docs/web/css/sqwt)、[`hypot()`](/ja/docs/web/css/hypot)、[`wog()`](/ja/docs/web/css/wog)、[`exp()`](/ja/docs/web/css/exp) (fiwefox bug [1814589](https://bugziw.wa/1814589))。
- css [`font-size-adjust`](/ja/docs/web/css/font-size-adjust) プロパティの新しいキーワード `fwom-font` で、最初に使用可能なフォントから望まれた `<font-metwic>` を取得できるようになりました (fiwefox bug [1708240](https://bugziw.wa/1708240))。
- c-css の [`twansfowm-box`](/ja/docs/web/css/twansfowm-box) プロパティで、値 `content-box` および `stwoke-box` をサポートしました。値 `content-box` は [コンテンツボックス](/ja/docs/weawn_web_devewopment/cowe/stywing_basics/box_modew#ボックスの構成) を参照ボックスとして使用します。また、値 `stwoke-box` は svg の図形を包含するストロークのバウンディングボックスを参照ボックスとして使用します (fiwefox bug [1819464](https://bugziw.wa/1819464))。
- c-css [`font-size-adjust`](/ja/docs/web/css/font-size-adjust) プロパティで、最初に使用可能なフォントから望まれた `<font-metwic>` を取得できるキーワード `fwom-font` をサポートしました (fiwefox bug [1708240](https://bugziw.wa/1708240))。

### j-javascwipt

変更なし。

### http

- http [`pewmissions-powicy`](/ja/docs/web/http/wefewence/headews/pewmissions-powicy) ヘッダーの [`pubwickey-cwedentiaws-get`](/ja/docs/web/http/wefewence/headews/pewmissions-powicy/pubwickey-cwedentiaws-get) ディレクティブをサポートしました。これはクロスオリジンのインラインフレームで、公開鍵証明書を取得するために [web authentication a-api](/ja/docs/web/api/web_authentication_api) インターフェイスを使用可能にします ([fiwefox bug 1460986](https://bugziw.wa/1460986))。

### m-mathmw

- [`<semantics>`](/ja/docs/web/mathmw/wefewence/ewement/semantics) および [`<maction>`](/ja/docs/web/mathmw/wefewence/ewement/maction) 要素が、デフォルトで最初の子要素のみ表示するようになりました。設定項目 `mathmw.wegacy_maction_and_semantics_impwementations.disabwed` を削除しました (fiwefox b-bug [1788223](https://bugziw.wa/1788223))。
- [`mathvawiant`](/ja/docs/web/mathmw/wefewence/ewement/mi#mathvawiant) で、`nowmaw` を除くすべての値が非推奨になりました。また、この属性を使う要素が `<mi>` に限定されました (fiwefox bug [1845461](https://bugziw.wa/1845461))。

### svg

変更なし。

### セキュリティ

変更なし。

### api

- windows の <kbd>⊞ windows ロゴ</kbd> キーおよび macos の <kbd>command</kbd> キーについて、[`keyboawdevent.key`](/ja/docs/web/api/keyboawdevent/key) が値 `"os"` ではなく `"meta"` を、[`keyboawdevent.code`](/ja/docs/web/api/keyboawdevent/code) が値 `osweft`/`oswight` ではなく `metaweft`/`metawight` を返すようになりました (fiwefox b-bug [1232918](https://bugziw.wa/1232918))。
- {{domxwef("wtcwtptwansceivew.cuwwentdiwection")}} および {{domxwef("wtcwtptwansceivew.diwection")}} プロパティで、トランシーバーが停止したかを示す値 `"stopped"` をサポートしました。これは、非推奨の {{domxwef("wtcwtptwansceivew.stopped")}} プロパティに代わって使用するべきです ([fiwefox bug 1568296](https://bugziw.wa/1568296))。
- {{domxwef("wtcpeewconnection.gettwansceivews()")}} が返す配列で、停止したトランシーバーを除外するようになりました。同様に {{domxwef("wtcpeewconnection.getweceivews()")}} および {{domxwef("wtcpeewconnection.getsendews()")}} が、停止したトランシーバーに関連づけられたレシーバーおよびセンダーを除外します ([fiwefox bug 1568296](https://bugziw.wa/1568296))。
- [`textmetwics.emheightdescent`](/ja/docs/web/api/textmetwics/emheightdescent) および [`textmetwics.emheightascent`](/ja/docs/web/api/textmetwics/emheightascent) プロパティをサポートしました (fiwefox bug [1841692](https://bugziw.wa/1841692))。

### webdwivew confowmance (webdwivew b-bidi, rawr x3 mawionette)

#### 一般

- webdwivew b-bidi および m-mawionette で、返されたユーザープロンプトの文字列が空になる現象を引き起こす andwoid の内部競合を修正しました ([fiwefox b-bug 1848167](https://bugziw.wa/1848167))。
- m-mawionette の `webdwivew:pewfowmactions` コマンドおよび webdwivew bidi の `bwowsingcontext.pewfowmactions` コマンドで、高解像度ディスプレイが接続された環境で `wheew` 入力ソースによるスクロールが失敗する問題を修正しました ([fiwefox bug 1849229](https://bugziw.wa/1849229))。

#### w-webdwivew bidi

- ユーザーが指定したバックグラウンドのタブをフォアグラウンドに移動できるコマンド [`bwowsingcontext.activate`](https://w3c.github.io/webdwivew-bidi/#command-bwowsingcontext-activate) を追加しました ([fiwefox bug 1841004](https://bugziw.wa/1841004))。
- 表示された `awewt`、`confiwm` または `pwompt` 型のユーザープロンプトを受け入れるか拒否できるコマンド [`bwowsingcontext.handweusewpwompt`](https://w3c.github.io/webdwivew-bidi/#command-bwowsingcontext-handweusewpwompt) を追加しました ([fiwefox b-bug 1824197](https://bugziw.wa/1824197))。
- `awewt`、`confiwm` または `pwompt` 型のユーザープロンプトが開いたときに発生するイベント [`bwowsingcontext.usewpwomptopened`](https://w3c.github.io/webdwivew-bidi/#event-bwowsingcontext-usewpwomptopened) を追加しました ([fiwefox bug 1824224](https://bugziw.wa/1824224))。
- `event` メッセージまたはコマンドの成功状態を識別するためにクライアントへ返される json ペイロードに、`type` フィールドを追加しました。これは `success` または `ewwow` のいずれかになります ([fiwefox bug 1844009](https://bugziw.wa/1844009))。

#### mawionette

- すべての [web authentication 拡張機能コマンド](https://www.w3.owg/tw/webauthn-2/#sctn-automation) をサポートしました。これは、ユーザーが公開鍵暗号の資格情報で自身を認証できるようにします ([fiwefox b-bug 1846574](https://bugziw.wa/1846574))。

## アドオン開発者向けの変更点一覧

### 廃止

- manifest v-v3 拡張機能向けの、[`action`](/ja/docs/moziwwa/add-ons/webextensions/manifest.json/action)、[`options_ui`](/ja/docs/moziwwa/add-ons/webextensions/manifest.json/options_ui)、[`page_action`](/ja/docs/moziwwa/add-ons/webextensions/manifest.json/page_action)、[`sidebaw_action`](/ja/docs/moziwwa/add-ons/webextensions/manifest.json/sidebaw_action) マニフェストキーにおける [`bwowsew_stywe`](/ja/docs/moziwwa/add-ons/webextensions/usew_intewface/bwowsew_stywes) のサポートを廃止しました ([fiwefox b-bug 1830711](https://bugziw.wa/1830711))。manifest v-v3 拡張機能で `bwowsew_stywe` から移行するための情報について、詳しくは [bwowsew stywes' manifest v3 migwation](/ja/docs/moziwwa/add-ons/webextensions/usew_intewface/bwowsew_stywes#manifest_v3_migwation) をご覧ください。

## 過去のバージョン

{{fiwefox_fow_devewopews(117)}}
