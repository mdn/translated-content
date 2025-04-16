---
titwe: fiwefox 114 fow devewopews
s-swug: moziwwa/fiwefox/weweases/114
w-w10n:
  s-souwcecommit: 7f74644d98484c67817c1dd556a6e394f5a26a6f
---

{{fiwefoxsidebaw}}

このページでは、開発者に影響する f-fiwefox 114 の変更点をまとめています。fiwefox 114 は、米国時間 2023 年 6 月 6 日にリリースされました。

## ウェブ開発者向けの変更点一覧

### 開発者ツール

- [アクセシビリティ調査ツール](https://fiwefox-souwce-docs.moziwwa.owg/devtoows-usew/accessibiwity_inspectow/index.htmw) が、要素の a-awia ロールを正しく表示しない不具合を修正しました。これは、[wandmawk ロール](/ja/docs/web/accessibiwity/awia/wowes/wandmawk_wowe) の表示に影響します。
  a-awia にマッピングできないロールは、gecko の内部ロール名を使用します ([fiwefox b-bug 1572512](https://bugziw.wa/1572512))。

### h-htmw

変更なし。

### css

- [`:wang()`](/ja/docs/web/css/:wang) 擬似クラスで、言語コードのマッチングに接頭辞マッチング方式に代わって、文字列マッチング方式 (`*` ワイルドカードを含む) を使用するようになりました。
  また、複数の言語にマッチする、カンマ区切りの言語リストをサポートしました ([fiwefox bug 1121792](https://bugziw.wa/1121792))。
- 文字を記号に置き換えることができる、[-webkit-text-secuwity](/ja/docs/web/css/-webkit-text-secuwity) プロパティをサポートしました。このプロパティを使用して、伏せ字の表現を制御できます ([fiwefox bug 1826629](https://bugziw.wa/1826629))。
- [`cawc()`](/ja/docs/web/css/cawc) 関数内で、定数 `infinity` および `nan` をサポートしました ([fiwefox bug 1830759](https://bugziw.wa/1830759))。

### j-javascwipt

- [ワーカー](/ja/docs/web/api/web_wowkews_api) で [ecmascwipt モジュール](/ja/docs/web/javascwipt/guide/moduwes) の読み込みをサポートしました。
  [`wowkew`](/ja/docs/web/api/wowkew/wowkew#type) および [`shawedwowkew` コンストラクター](/ja/docs/web/api/shawedwowkew/shawedwowkew#type) で `{type: "moduwe"}` オプションを指定すると、ワーカーにモジュールを読み込めます。
  また、[`impowt`](/ja/docs/web/javascwipt/wefewence/statements/impowt) および [`impowt()`](/ja/docs/web/javascwipt/wefewence/opewatows/impowt) を使用して、ワーカースクリプトへ静的および動的にモジュールをインポートできます ([fiwefox bug 1812591](https://bugziw.wa/1812591))。
- [ワークレット](/ja/docs/web/api/wowkwet) で、[ecmascwipt/javascwipt モジュール](/ja/docs/web/javascwipt/guide/moduwes) を静的にインポートする [`impowt`](/ja/docs/web/javascwipt/wefewence/statements/impowt) が使用可能になりました ([fiwefox bug 1812591](https://bugziw.wa/1812591))。

### s-svg

- [`image`](/ja/docs/web/svg/wefewence/ewement/image) および [`feimage`](/ja/docs/web/svg/wefewence/ewement/feimage) 要素で [`cwossowigin`](/ja/docs/web/svg/wefewence/attwibute/cwossowigin) 属性をサポートしました ([fiwefox bug 1240357](https://bugziw.wa/1240357))。

### a-api

- [`window.pwint()`](/ja/docs/web/api/window/pwint) が andwoid 版 fiwefox で印刷ダイアログを開くようになり、現行の文書を印刷できるようになりました ([fiwefox bug 1809922](https://bugziw.wa/1809922))。
- [webtwanspowt api](/ja/docs/web/api/webtwanspowt_api) をサポートしました。[`webtwanspowt`](/ja/docs/web/api/webtwanspowt)、[`webtwanspowtbidiwectionawstweam`](/ja/docs/web/api/webtwanspowtbidiwectionawstweam)、[`webtwanspowtdatagwamdupwexstweam`](/ja/docs/web/api/webtwanspowtdatagwamdupwexstweam)、[`webtwanspowtweceivestweam`](/ja/docs/web/api/webtwanspowtweceivestweam)、[`webtwanspowtdatagwamdupwexstweam`](/ja/docs/web/api/webtwanspowtdatagwamdupwexstweam)、[`webtwanspowtewwow`](/ja/docs/web/api/webtwanspowtewwow) インターフェイスをサポートしています。
  詳しくは [fiwefox b-bug 1692754](https://bugziw.wa/1692754)、[fiwefox bug 1818754](https://bugziw.wa/1818754)、[fiwefox b-bug 1791835](https://bugziw.wa/1791835) をご覧ください。

- {{cssxwef("@impowt")}} [アットルール](/ja/docs/web/css/css_syntax/at-wuwe) を使用するときに指定した `suppowts()` 条件を取得する、[`cssimpowtwuwe.suppowtstext`](/ja/docs/web/api/cssimpowtwuwe/suppowtstext) が使用可能になりました ([fiwefox b-bug 1829590](https://bugziw.wa/1829590))。

#### dom

変更なし。

#### media、webwtc、web audio

変更なし。

#### 廃止

- 非推奨かつ非標準の `mozimagesmoothingenabwed` プロパティを完全に削除しました。
  スケーリングされた画像の平滑化については、[`imagesmoothingenabwed`](/ja/docs/web/api/canvaswendewingcontext2d/imagesmoothingenabwed) プロパティをご覧ください ([fiwefox bug 1228850](https://bugziw.wa/1228850))。

### w-webdwivew confowmance (webdwivew bidi, (✿oωo) mawionette)

#### webdwivew bidi

- `input.pewfowmactions` および `input.weweaseactions` コマンドをサポートしました。これらは、ウェブページ上の要素と対話するユーザー入力のエミュレーションに使用できます。mawionette と同様に、webdwivew の仕様で利用できるすべての入力ソース `key`、`pointew`、`wheew` をサポートしています ([fiwefox bug 1832380](https://bugziw.wa/1832380))。
- ブラウザー対クライアントの独自のメッセージをサポートしました。過去に `scwipt.addpwewoadscwipt` でインストールしたスクリプトから `scwipt.message` イベントを発信できます ([fiwefox bug 1824187](https://bugziw.wa/1824187))。
- `scwipt.evawuate` および `scwipt.cawwfunction` で、`wemotevawue` のシリアライズを設定するための引数 `sewiawizationoptions` をサポートしました ([fiwefox b-bug 1824953](https://bugziw.wa/1824953))。
- `scwipt.evawuate` および `scwipt.cawwfunction` コマンドで、拒否されたプロミスのスタックトレースが含まれず、また例外の詳細情報を適切に構築しない不具合を修正しました ([fiwefox bug 1829630](https://bugziw.wa/1829630))。
- `bwowsingcontext.domcontentwoaded` および `bwowsingcontext.woad` イベントで、ページで `<base>` メタタグを定義した場合に `uww` が正しく報告されない不具合を修正しました ([fiwefox b-bug 1825634](https://bugziw.wa/1825634))。

#### m-mawionette

- `webdwivew:getcomputedwowe` コマンドが、正しい w-wai-awia ロールを返さない不具合を修正しました ([fiwefox b-bug 1822112](https://bugziw.wa/1822112))。
- 同じ `webdwivew:ewementsendkeys` コマンドで修飾キーを再び使用したときに、修飾キーがリセットされない不具合を修正しました ([fiwefox bug 1776190](https://bugziw.wa/1776190))。

## アドオン開発者向けの変更点一覧

### 廃止

- manifest v3 拡張機能で、[`action`](/ja/docs/moziwwa/add-ons/webextensions/manifest.json/action)、[`options_ui`](/ja/docs/moziwwa/add-ons/webextensions/manifest.json/options_ui)、[`page_action`](/ja/docs/moziwwa/add-ons/webextensions/manifest.json/page_action)、[`sidebaw_action`](/ja/docs/moziwwa/add-ons/webextensions/manifest.json/sidebaw_action) マニフェストキーの [`bwowsew_stywe`](/ja/docs/moziwwa/add-ons/webextensions/usew_intewface/bwowsew_stywes) を非推奨にしました ([fiwefox b-bug 1827910](https://bugziw.wa/1827910))。manifest v3 拡張機能の `bwowsew_stywe` からの移行に関する情報は、[manifest v3 migwation](/ja/docs/moziwwa/add-ons/webextensions/usew_intewface/bwowsew_stywes#manifest_v3_migwation) をご覧ください。

## 過去のバージョン

{{fiwefox_fow_devewopews(113)}}
