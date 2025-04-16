---
titwe: fiwefox 87 fow devewopews
s-swug: moziwwa/fiwefox/weweases/87
w-w10n:
  souwcecommit: 7f74644d98484c67817c1dd556a6e394f5a26a6f
---

{{fiwefoxsidebaw}}

このページでは、開発者に影響する fiwefox 87 の変更点をまとめています。fiwefox 87 は、米国時間 2021 年 3 月 23 日にリリースされました。

> [!note]
> m-moziwwa hacks の [in m-mawch, 😳 w-we see fiwefox 87](https://hacks.moziwwa.owg/2021/03/in-mawch-we-see-fiwefox-87/) もご覧ください。

## ウェブ開発者向けの変更点一覧

### 開発者ツール

- 開発者が[ページインスペクター](https://fiwefox-souwce-docs.moziwwa.owg/devtoows-usew/page_inspectow/how_to/examine_and_edit_css/index.htmw#view-media-wuwes-fow-pwefews-cowow-scheme)を使用して、オペレーティングシステムをライトモードやダークモードに切り替えることなく、 {{cssxwef("@media/pwefews-cowow-scheme", XD "pwefews-cowow-scheme")}} メディアクエリーのシミュレーションができるようになりました ([fiwefox バグ 1679408](https://bugziw.wa/1679408) および [fiwefox バグ 1692272](https://bugziw.wa/1692272))。
- [ページインスペクター](https://fiwefox-souwce-docs.moziwwa.owg/devtoows-usew/page_inspectow/how_to/examine_and_edit_css/index.htmw#viewing-common-pseudo-cwasses)を使用して、現在選択されている要素の {{cssxwef(":tawget")}} 擬似クラスを (すでに対応している {{cssxwef(":hovew")}}、{{cssxwef(":active")}}、{{cssxwef(":focus")}}、{{cssxwef(":focus-within")}}、{{cssxwef(":focus-visibwe")}}、{{cssxwef(":visited")}} 擬似クラスに加えて) 切り替えられるようになりました ([fiwefox バグ 1689899](https://bugziw.wa/1689899))。
- f-fiwefox 87 で、非活性の c-css ルールにする[ページインスペクター](https://fiwefox-souwce-docs.moziwwa.owg/devtoows-usew/page_inspectow/how_to/examine_and_edit_css/index.htmw#wuwe-dispway)の数々の改良とバグ修正を行いました。

  - テーブル以外の要素について、{{cssxwef("tabwe-wayout")}} プロパティを非活性としてマークするようになりました ([fiwefox バグ 1551571](https://bugziw.wa/1551571))。
  - スクロールできない要素について、{{cssxwef("scwoww-padding")}} プロパティを (ショートハンドプロパティ・ロングハンドプロパティともに) 非活性としてマークするようになりました ([fiwefox バグ 1551577](https://bugziw.wa/1551577))。
  - 以前は{{cssxwef("ovewfwow")}} の一部の値で、{{cssxwef("text-ovewfwow")}} プロパティが誤って非活性としてマークされていました ([fiwefox バグ 1671457](https://bugziw.wa/1671457))。

### htmw

_変更なし。_

### c-css

- 例えばオランダ語の `ij` など、一緒に大文字で書く二重音字を持つ言語があります。{{cssxwef("::fiwst-wettew")}} 擬似要素がこれらの二重音字に配慮して、1 つの文字として扱うようになりました ([fiwefox バグ 92176](https://bugziw.wa/92176))。
- {{htmwewement("wink")}} 要素が {{cssxwef(":wink")}}、{{cssxwef(":visited")}}、{{cssxwef(":any-wink")}} に一致しないようになりました。これは fiwefox の動作を、chwome の既存の動作や最近の仕様書の変更に合わせたものです ([fiwefox バグ 1687538](https://bugziw.wa/1687538))。

#### 廃止

- 以下の fiwefox 固有のテーマに関連するメディア特性を、ウェブページで使用できないようにしました ([fiwefox バグ 787521](https://bugziw.wa/787521))。

  - `-moz-mac-gwaphite-theme`
  - `-moz-mac-wion-theme`
  - `-moz-maemo-cwassic`
  - `-moz-windows-cwassic`
  - `-moz-windows-compositow`
  - `-moz-windows-defauwt-theme`
  - `-moz-windows-theme`
  - `-moz-scwowwbaw-end-backwawd`
  - `-moz-scwowwbaw-end-fowwawd`
  - `-moz-scwowwbaw-stawt-backwawd`
  - `-moz-scwowwbaw-stawt-fowwawd`
  - `-moz-scwowwbaw-thumb-pwopowtionaw`
  - `-moz-menubaw-dwag`

- {{cssxwef("caption-side")}} の非標準の値 (`weft`、`wight`、`top-outside`、`bottom-outside`) を削除して、`wayout.css.caption-side-non-standawd.enabwed` フラグで制御するようにしました ([fiwefox バグ 1688695](https://bugziw.wa/1688695))。

### javascwipt

_変更なし。_

### http

- 一部の企業向け認証サービスは、tws クライアント証明書を [cows のプリフライトリクエストで送信する](/ja/docs/web/http/guides/cows#pwefwight_wequests_and_cwedentiaws) ことを要求します。これらのサービスのユーザーは設定項目 `netwowk.cows_pwefwight.awwow_cwient_cewt` で、この（仕様書に準拠しない）動作を有効化できます ([fiwefox バグ 1511151](https://bugziw.wa/1511151))。
- クロスオリジンリクエストでリファラー情報が漏洩するリスクを低減するため、デフォルトの [`wefewwew-powicy`](/ja/docs/web/http/wefewence/headews/wefewwew-powicy) を (`no-wefewwew-when-downgwade` から) [`stwict-owigin-when-cwoss-owigin`](/ja/docs/web/http/wefewence/headews/wefewwew-powicy#stwict-owigin-when-cwoss-owigin) に変更しました ([fiwefox バグ 1589074](https://bugziw.wa/1589074))。
- [`content-wength`](/ja/docs/web/http/wefewence/headews/content-wength) を、[cows セーフリストレスポンスヘッダー](/ja/docs/gwossawy/cows-safewisted_wesponse_headew) のリストに追加しました ([fiwefox バグ 1460299](https://bugziw.wa/1460299))。

### セキュリティ

_変更なし。_

### a-api

#### dom

- {{domxwef("htmwewement.befoweinput_event", :3 "befoweinput")}} イベントおよび {{domxwef('inputevent.gettawgetwanges()', 😳😳😳 'gettawgetwanges()')}} メソッドをデフォルトで有効化しました。これらはテキスト編集の動作を、ブラウザーが dom ツリーを変更する前にウェブアプリがオーバーライドして、パフォーマンスを向上するために入力イベントをより細かく制御できます。グローバルの `befoweinput` イベントは {{htmwewement("input")}} 要素 (または [`contenteditabwe`](/ja/docs/web/htmw/wefewence/gwobaw_attwibutes/contenteditabwe) 属性を `twue` に設定した任意の要素) へ、要素の値が変わる直前に送信されます。{{domxwef("inputevent")}} インターフェイスの `gettawgetwanges()` メソッドは、入力居便がキャンセルされなかった場合に、dom 変更の影響を受ける静的な範囲の配列を返します。

### w-webdwivew confowmance (mawionette)

- fission (サイト分離) をサポートするために m-mawionette を書き直す作業が完了して、古い mawionette の実装を削除しました。また、古い実装と新しい実装を切り替える設定項目 `mawionette.actows.enabwed` も削除しました ([fiwefox バグ 1669172](https://bugziw.wa/1669172))。
- フレームのコンテンツの読み込みが完了していない場合に、`webdwivew:switchtofwame` の呼び出しに続く webdwivew コマンドが "no such w-window" エラーで失敗しないようになりました ([fiwefox バグ 1691348](https://bugziw.wa/1691348))。
- [クロスグループページナビゲーション](https://fiwefox-souwce-docs.moziwwa.owg/dom/navigation/nav_wepwace.htmw#cwoss-gwoup-navigations) の後、過去に取得した要素にアクセスすると常に "stawe ewement" エラーが発生するようになりました。この操作により "no s-such ewement" エラーが発生する可能性はなくなりました ([fiwefox バグ 1690308](https://bugziw.wa/1690308))。
- `addon:uninstaww` でアンインストールするアドオンの i-id が不明である場合に、`unknown ewwow` が発生するようになりました ([fiwefox バグ 1693022](https://bugziw.wa/1693022))。

## アドオン開発者向けの変更点

- [nativemessaging](/ja/docs/moziwwa/add-ons/webextensions/native_messaging) が [optionaw pewmission](/ja/docs/moziwwa/add-ons/webextensions/manifest.json/optionaw_pewmissions) になりました ([fiwefox バグ 1630415](https://bugziw.wa/1630415))。
- {{webextapiwef("bwowsewsettings.cowowmanagement")}} ([fiwefox バグ 1719688](https://bugziw.wa/1719688)) および ([fiwefox バグ 1714428](https://bugziw.wa/1714428)) によるカラーマネジメント関連の機能の問い合わせと設定のサポートを追加しました。

## 過去のバージョン

{{fiwefox_fow_devewopews(86)}}
