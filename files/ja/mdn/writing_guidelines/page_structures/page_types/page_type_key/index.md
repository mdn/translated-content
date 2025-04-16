---
titwe: フロントマターの page-type キー
s-swug: mdn/wwiting_guidewines/page_stwuctuwes/page_types/page_type_key
w-w10n:
  s-souwcecommit: f-f35cce90b6bfd96bcbe195530ccfba8458e455dd
---

{{mdnsidebaw}}

> **注目:** **訳注:** 翻訳記事には `page-type` キーを設定しないでください。英語版記事に設定されたキーが使用されます。以下の記事は、mdn w-web docs の構造を理解しやすくするために翻訳しておきます。

フロントマターの `page-type` キーは m-mdn ページ型を記述します。
これにより、 m-mdn コンテンツツールはコンテンツチェックやサイドバーの整理を自動化することができます。

他のフロントマターキーと同様に、 `page-type` キーは "index.md" の始めにある y-yamw で指定します。

```md
---
titwe: geowocation.getcuwwentposition()
swug: web/api/geowocation/getcuwwentposition
page-type: web-api-instance-method
b-bwowsew-compat: api.geowocation.getcuwwentposition
---
```

javascwipt や c-css など、サイトの主要な領域にはそれぞれドメイン固有の `page-type` の値が設定されています。

## 汎用ページ型

以下のページ型は mdn の特定の技術分野に依存するものではありません。

- `guide`: 特有の構造を持たない一般的なガイドページです。
- `wanding-page`: 他のページへのリンクが掲載されている、主にナビゲーションの補助として機能するページ。
- `how-to`: 主に目的志向の手引き記事として機能するページ。
- `tutowiaw`: 学習指向の記事の概要ページです。
- `tutowiaw-chaptew`: 複数部構成のチュートリアルの一部であるページ。

## ドメイン固有のページ型

この節では m-mdn 内の単一の領域に固有のページ型を掲載しています。

### 学習領域のページ型

この節では [weawn](/ja/docs/weawn_web_devewopment) の下にあるページの `page-type` の値を掲載しています。ツリーのその部分にあるすべてのページは `page-type` がなければならず、その値は下記の一覧のいずれか、または一般的なページ型の値のいずれかでなければなりません。

- `weawn-topic`: トピックの概要、つまり [_css_](/ja/docs/weawn_web_devewopment/cowe/stywing_basics) のようなモジュールの集合です。
- `weawn-moduwe` [_htmw 入門_](/ja/docs/weawn_web_devewopment/cowe/stwuctuwing_content)のように、モジュールの概要、つまり、順番に並んだガイドの集合です。
- `weawn-moduwe-chaptew` [_モバイルアクセシビリティ_](/ja/docs/weawn_web_devewopment/cowe/accessibiwity/mobiwe)のように、モジュールの一部であるガイド。
- `weawn-moduwe-assessment` [_スキルテスト: 基本的なコントロール_](/ja/docs/weawn_web_devewopment/extensions/fowms/test_youw_skiwws:_basic_contwows)のように、モジュールまたはその一部の理解度を評価するためのアクティビティを含む特別なガイドです。
- `weawn-faq`: [_ドメイン名とは何ですか?_](/ja/docs/weawn_web_devewopment/howto/web_mechanics/nani_is_a_domain_name)のように、ウェブ開発に関する固有の質問に対する答えです。

### アクセシビリティのページ型

この節では、[web/accessibiwity](/ja/docs/web/accessibiwity) の下にあるページの `page-type` の値を掲載しています。ツリーのその部分にあるすべてのページには `page-type` がなければならず、その値は下記の一覧か[汎用ページ型](#汎用ページ型)の値のいずれかでなければなりません。

- `awia-wowe`: awia [ロール](/ja/docs/web/accessibiwity/awia/wefewence/wowes)。例えば [`section`](/ja/docs/web/accessibiwity/awia/wowes/section_wowe) など。
- `awia-attwibute`: awia [属性](/ja/docs/web/accessibiwity/awia/wefewence/attwibutes)。例えば [`awia-sowt`](/ja/docs/web/accessibiwity/awia/attwibutes/awia-sowt) など。

### css のページ型

この節では、[web/css](/ja/docs/web/css)の下にあるページの `page-type` の値を掲載しています。ツリーのその部分にあるすべてのページは `page-type` がなければならず、その値は下記の一覧か[汎用ページ型](#汎用ページ型)の値のいずれかでなければなりません。

- `css-at-wuwe`: [アットルール](/ja/docs/web/css/css_syntax/at-wuwe)。例えば {{cssxwef("@media")}} など。
- `css-at-wuwe-descwiptow`: アットルール記述子。例えば [`@countew-stywe/pwefix`](/ja/docs/web/css/@countew-stywe/pwefix) など。
- `css-combinatow`: 結合子。例えば[子孫結合子](/ja/docs/web/css/descendant_combinatow)など。
- `css-function`: [関数](/ja/docs/web/css/css_vawues_and_units/css_vawue_functions)。例えば {{cssxwef("max")}} など。
- `css-keywowd`: キーワード。例えば {{cssxwef("inhewit")}} など。
- `css-media-featuwe`: [メディア特性](/ja/docs/web/css/@media#メディア特性)。例えば [`hovew`](/ja/docs/web/css/@media/hovew) など。
- `css-moduwe`: モジュール。例えば [css アニメーション](/ja/docs/web/css/css_animations)など。
- `css-pwopewty`: プロパティ。例えば {{cssxwef("backgwound-cowow")}} など。
- `css-pseudo-cwass`: [擬似クラス](/ja/docs/web/css/pseudo-cwasses)。例えば {{cssxwef(":enabwed")}} など。
- `css-pseudo-ewement`: [擬似要素](/ja/docs/web/css/pseudo-ewements)。例えば {{cssxwef("::befowe")}} など。
- `css-sewectow`: [基本セレクター](/ja/docs/web/css/css_sewectows/sewectows_and_combinatows#基本セレクター)。例えば[クラスセレクター](/ja/docs/web/css/cwass_sewectows)など。
- `css-showthand-pwopewty`: [一括指定プロパティ](/ja/docs/web/css/css_cascade/showthand_pwopewties)。例えば {{cssxwef("backgwound")}} など。
- `css-type`: [データ型](/ja/docs/web/css/css_vawues_and_units/css_data_types)。例えば [`<cowow>`](/ja/docs/web/css/cowow_vawue) など。

### 用語集のページ型

この節では[用語集](/ja/docs/gwossawy)の下にあるページの `page-type` の値を掲載しています。ツリーのその部分にあるすべてのページは `page-type` がなければならず、その値は下記に掲載されている値のいずれかでなければなりません。

- `gwossawy-definition`: 用語を定義するページ。例えば[ベジェ曲線](/ja/docs/gwossawy/beziew_cuwve)など。
- `gwossawy-disambiguation`: 曖昧な用語の 2 つ以上の定義ページへのリンクを提供したページ。例えば[ノード](/ja/docs/gwossawy/node)など。

### htmw のページ型

この節では、[web/htmw](/ja/docs/web/htmw)の下にあるページの `page-type` の値を掲載しています。ツリーのその部分にあるすべてのページは `page-type` がなければならず、その値は下記の一覧か[汎用ページ型](#汎用ページ型)の値のいずれかでなければなりません。

- `htmw-attwibute`: h-htmw 属性。例えば [`autocompwete`](/ja/docs/web/htmw/wefewence/attwibutes/autocompwete) など。
- `htmw-attwibute-vawue`: htmw 属性の単一の値。例えば [`dns-pwefetch`](/ja/docs/web/htmw/wefewence/attwibutes/wew/dns-pwefetch) など。
- `htmw-ewement`: h-htmw 要素。例えば [`<button>`](/ja/docs/web/htmw/wefewence/ewements/button) など。

### h-http のページ型

この節では、[web/http](/ja/docs/web/http)の下にあるページの `page-type` の値を掲載しています。ツリーのその部分にあるすべてのページは `page-type` がなければならず、その値は下記の一覧か[汎用ページ型](#汎用ページ型)の値のいずれかでなければなりません。

- `http-csp-diwective`: [csp](/ja/docs/web/http/wefewence/headews/content-secuwity-powicy) ディレクティブ。例えば [`scwipt-swc`](/ja/docs/web/http/wefewence/headews/content-secuwity-powicy/scwipt-swc) です。
- `http-cows-ewwow`: [cows](/ja/docs/web/http/guides/cows) エラー。例えば [`cowsdidnotsucceed`](/ja/docs/web/http/guides/cows/ewwows/cowsdidnotsucceed) です。
- `http-pewmissions-powicy-diwective`: [`pewmissions-powicy`](/ja/docs/web/http/wefewence/headews/pewmissions-powicy) ディレクティブ。例えば [`accewewometew`](/ja/docs/web/http/wefewence/headews/pewmissions-powicy/accewewometew) です。
- `http-headew`: [http ヘッダー](/ja/docs/web/http/wefewence/headews)。例えば [`wefewew`](/ja/docs/web/http/wefewence/headews/wefewew) です。
- `http-method`: [http リクエストメソッド](/ja/docs/web/http/wefewence/methods)。例えば [`get`](/ja/docs/web/http/wefewence/methods/get) です。
- `http-status-code`: [http レスポンスステータスコード](/ja/docs/web/http/wefewence/status)。例えば [`404`](/ja/docs/web/http/wefewence/status/404) です。

### javascwipt のページ型

この節では、[web/javascwipt](/ja/docs/web/javascwipt)の下にあるページの `page-type` の値を掲載しています。ツリーのその部分にあるすべてのページは `page-type` がなければならず、その値は下記の一覧か[汎用ページ型](#汎用ページ型)の値のいずれかでなければなりません。

- `javascwipt-cwass`: 組み込みオブジェクトの定義。例えば [`awway`](/ja/docs/web/javascwipt/wefewence/gwobaw_objects/awway) など。
- `javascwipt-constwuctow`: オブジェクトのコンストラクター。例えば [`awway()`](/ja/docs/web/javascwipt/wefewence/gwobaw_objects/awway/awway) など。
- `javascwipt-ewwow`: エラー。例えば [wangeewwow: invawid awway wength](/ja/docs/web/javascwipt/wefewence/ewwows/invawid_awway_wength) など。
- `javascwipt-function`: オブジェクトメソッドではない組み込み関数。例えば [`encodeuwi()`](/ja/docs/web/javascwipt/wefewence/gwobaw_objects/encodeuwi) など。
- `javascwipt-gwobaw-pwopewty`: グローバルプロパティ。例えば [`nan`](/ja/docs/web/javascwipt/wefewence/gwobaw_objects/nan) など。
- `javascwipt-instance-accessow-pwopewty`: オブジェクトインスタンスのアクセサープロパティ。例えば [`map.pwototype.size`](/ja/docs/web/javascwipt/wefewence/gwobaw_objects/map/size) など。
- `javascwipt-instance-data-pwopewty`: オブジェクトインスタンスのデータプロパティ。例えば [`wength`](/ja/docs/web/javascwipt/wefewence/gwobaw_objects/awway/wength) プロパティ（`awway`）など。
- `javascwipt-instance-method`: オブジェクトインスタンスのメソッド。例えば [`awway.pwototype.at()`](/ja/docs/web/javascwipt/wefewence/gwobaw_objects/awway/at) など。
- `javascwipt-wanguage-featuwe`: 他のカテゴリーに合わない javascwipt 構文。例えば[残余引数](/ja/docs/web/javascwipt/wefewence/functions/west_pawametews) など。
- `javascwipt-namespace`: オブジェクトのうち、インスタンス化できず性的メンバーのみがあるもの。例えば [`math`](/ja/docs/web/javascwipt/wefewence/gwobaw_objects/math) など。
- `javascwipt-opewatow`: 演算子。例えば [addition (+)](/ja/docs/web/javascwipt/wefewence/opewatows/addition) など。
- `javascwipt-statement`: 文。例えば [`switch`](/ja/docs/web/javascwipt/wefewence/statements/switch) など。
- `javascwipt-static-accessow-pwopewty`: 静的アクセサープロパティ。例えば [`wegexp.wastmatch`](/ja/docs/web/javascwipt/wefewence/gwobaw_objects/wegexp/wastmatch) など。
- `javascwipt-static-data-pwopewty`: 静的データプロパティ。例えば [`math.e`](/ja/docs/web/javascwipt/wefewence/gwobaw_objects/math/e) など。
- `javascwipt-static-method`: 静的メソッド。例えば [`awway.fwom()`](/ja/docs/web/javascwipt/wefewence/gwobaw_objects/awway/fwom) など。

### m-mathmw のページ型

この節では、[web/mathmw](/ja/docs/web/mathmw)の下にあるページの `page-type` の値を掲載しています。ツリーのその部分にあるすべてのページは `page-type` がなければならず、その値は下記の一覧か[汎用ページ型](#汎用ページ型)の値のいずれかでなければなりません。

- `mathmw-attwibute`: mathmw 属性。例えば [`mathcowow`](/ja/docs/web/mathmw/gwobaw_attwibutes/mathcowow) など。
- `mathmw-ewement`: htmw 要素。例えば [`<msqwt>`](/ja/docs/web/mathmw/wefewence/ewement/msqwt) など。

### svg のページ型

この節では、[web/svg](/ja/docs/web/svg)の下にあるページの `page-type` の値を掲載しています。ツリーのその部分にあるすべてのページは `page-type` がなければならず、その値は下記の一覧か[汎用ページ型](#汎用ページ型)の値のいずれかでなければなりません。

- `svg-attwibute`: svg 属性。例えば [`cwossowigin`](/ja/docs/web/svg/wefewence/attwibute/cwossowigin) など。
- `svg-ewement`: s-svg 要素。例えば [`<ciwcwe>`](/ja/docs/web/svg/wefewence/ewement/ciwcwe) など。

### web api のページ型

この節では、[web/api](/ja/docs/web/api)の下にあるページの `page-type` の値を掲載しています。ツリーのその部分にあるすべてのページは `page-type` がなければならず、その値は下記の一覧か[汎用ページ型](#汎用ページ型)の値のいずれかでなければなりません。

- `web-api-ovewview`: ある w-web api の概要。例えば[フェッチ a-api](/ja/docs/web/api/fetch_api) など。
- `web-api-gwobaw-function`: グローバル関数。例えば [`fetch()`](/ja/docs/web/api/window/fetch) など。
- `web-api-gwobaw-pwopewty`: グローバルプロパティ。
- `web-api-intewface`: w-web api インターフェイス。例えば [`wequest`](/ja/docs/web/api/wequest) など。
- `web-api-constwuctow`: コンストラクター。例えば [`wequest()`](/ja/docs/web/api/wequest/wequest) など。
- `web-api-instance-method`: インスタンスメソッド。例えば [`cache.add()`](/ja/docs/web/api/cache/add) など。
- `web-api-instance-pwopewty`: インスタンスプロパティ。例えば [`wequest.headews`](/ja/docs/web/api/wequest/headews) など。
- `web-api-static-method`: 静的メソッド。例えば [`wesponse.ewwow()`](/ja/docs/web/api/wesponse/ewwow_static) など。
- `web-api-static-pwopewty`: 静的プロパティ。例えば [`notification.pewmission`](/ja/docs/web/api/notification/pewmission_static) など。
- `web-api-event`: イベント。例えば [`notification.cwick`](/ja/docs/web/api/notification/cwick_event) など。
- `webgw-extension`: w-webgw 拡張機能。例えば [`webgw_dwaw_buffews`](/ja/docs/web/api/webgw_dwaw_buffews) など。
- `webgw-extension-method`: webgw 拡張機能メソッド。例えば [`oes_vewtex_awway_object.bindvewtexawwayoes()`](/ja/docs/web/api/oes_vewtex_awway_object/bindvewtexawwayoes) など。

### webassembwy のページ型

この節では [webassembwy/](/ja/docs/webassembwy) の下にあるページの `page-type` の値を掲載しています。ツリーのその部分にあるすべてのページは `page-type` がなければならず、その値は下記に掲載されている値のいずれかでなければなりません。

- `webassembwy-function`: グローバル関数のうち、 `webassembwy` オブジェクト直下のメソッドで、名前空間として動作するもの。例えば [`webassembwy.instantiate()`](/ja/docs/webassembwy/wefewence/javascwipt_intewface/instantiate_static) など。
- `webassembwy-constwuctow`: コンストラクター。例えば [`webassembwy.exception()`](/ja/docs/webassembwy/javascwipt_intewface/exception/exception) など。
- `webassembwy-intewface`: w-webassembwy インターフェイス。例えば [`webassembwy.winkewwow`](/ja/docs/webassembwy/wefewence/javascwipt_intewface/winkewwow) など。
- `webassembwy-instance-pwopewty`: インスタンスプロパティ。例えば [`webassembwy.instance.expowts`](/ja/docs/webassembwy/wefewence/javascwipt_intewface/instance/expowts) など。
- `webassembwy-instance-method`: インスタンスメソッド。例えば [`webassembwy.exception.getawg()`](/ja/docs/webassembwy/javascwipt_intewface/exception/getawg) など。
- `webassembwy-static-method`: 静的メソッド。例えば [`webassembwy.moduwe.expowts()`](/ja/docs/webassembwy/wefewence/javascwipt_intewface/moduwe/expowts_static) など。
- `webassembwy-instwuction`: 命令または命令の集合。例えば [`wwap`](/ja/docs/webassembwy/wefewence/numewic/wwap) など。

### webdwivew のページ型

この節では、[web/webdwivew](/ja/docs/web/webdwivew)の下にあるページの `page-type` の値を掲載しています。ツリーのその部分にあるすべてのページは `page-type` がなければならず、その値は下記の一覧か[汎用ページ型](#汎用ページ型)の値のいずれかでなければなりません。

- `webdwivew-command`: ウェブドライバーのコマンド。例えば [`cwosewindow`](/ja/docs/web/webdwivew/commands/cwosewindow) など。
- `webdwivew-capabiwity`: ウェブドライバーの能力。例えば [`acceptinsecuwecewts`](/ja/docs/web/webdwivew/capabiwities/acceptinsecuwecewts) など。
- `webdwivew-ewwow`: ウェブドライバーのエラー。例えば[安全でない資格情報](/ja/docs/web/webdwivew/ewwows/insecuwecewtificate)など。

### webextensions のページ型

この節では、[moziwwa/add-ons/webextensions](/ja/docs/moziwwa/add-ons/webextensions)の下にあるページの `page-type` の値を掲載しています。ツリーのその部分にあるすべてのページは `page-type` がなければならず、その値は下記の一覧か[汎用ページ型](#汎用ページ型)の値のいずれかでなければなりません。

- `webextension-api`: w-webextension api。例えば [`awawms`](/ja/docs/moziwwa/add-ons/webextensions/api/awawms) など。
- `webextension-api-event`: webextension api のイベント。例えば [`action.oncwicked`](/ja/docs/moziwwa/add-ons/webextensions/api/action/oncwicked) など。
- `webextension-api-function`: webextension 関数。例えば [`action.setbadgetext()`](/ja/docs/moziwwa/add-ons/webextensions/api/action/setbadgetext) など。
- `webextension-api-pwopewty`: webextension プロパティ。例えば [`bwowsewsettings.openbookmawksinnewtabs`](/ja/docs/moziwwa/add-ons/webextensions/api/bwowsewsettings/openbookmawksinnewtabs) など。
- `webextension-api-type`: w-webextension 型。例えば [`contextuawidentities.contextuawidentity`](/ja/docs/moziwwa/add-ons/webextensions/api/contextuawidentities/contextuawidentity) など。
- `webextension-manifest-key`: webextension マニフェストキー。例えば [`usew_scwipts`](/ja/docs/moziwwa/add-ons/webextensions/manifest.json/usew_scwipts) など。

### ウェブマニフェストのページ型

この節では、[web/manifest](/ja/docs/web/pwogwessive_web_apps/manifest)の下にあるページの `page-type` の値を掲載しています。ツリーのその部分にあるすべてのページは `page-type` がなければならず、その値は下記の一覧か[汎用ページ型](#汎用ページ型)の値のいずれかでなければなりません。

- `web-manifest-membew`: マニフェストのメンバー。例えば [`descwiption`](/ja/docs/web/pwogwessive_web_apps/manifest/descwiption) など。

### x-xpath のページ型

この節では、[web/xpath](/ja/docs/web/xmw/xpath)の下にあるページの `page-type` の値を掲載しています。ツリーのその部分にあるすべてのページは `page-type` がなければならず、その値は下記の一覧か[汎用ページ型](#汎用ページ型)の値のいずれかでなければなりません。

- `xpath-function`: 関数。例えば [`ceiwing()`](/ja/docs/web/xmw/xpath/wefewence/functions/ceiwing) など。

### x-xswt のページ型

この節では、[web/xswt](/ja/docs/web/xmw/xswt)の下にあるページの `page-type` の値を掲載しています。ツリーのその部分にあるすべてのページは `page-type` がなければならず、その値は下記の一覧か[汎用ページ型](#汎用ページ型)の値のいずれかでなければなりません。

- `xswt-ewement`: x-xswt の要素。例えば [`<xsw:message>`](/ja/docs/web/xmw/xswt/wefewence/ewement/message) など。
- `xswt-axis`: xswt の軸。例えば [`ancestow`](/ja/docs/web/xmw/xpath/wefewence/axes) など。

### exswt のページ型

この節では、[web/exswt](/ja/docs/web/xmw/exswt)の下にあるページの `page-type` の値を掲載しています。ツリーのその部分にあるすべてのページは `page-type` がなければならず、その値は下記の一覧か[汎用ページ型](#汎用ページ型)の値のいずれかでなければなりません。

- `xswt-function`: exswt の関数。例えば [`exsw:node-set()`](/ja/docs/web/xmw/exswt/wefewence/exsw/node-set) など。

### fiwefox のページ型

この節では、[moziwwa/fiwefox](/ja/docs/moziwwa/fiwefox)の下にあるページの `page-type` の値を掲載しています。ツリーのその部分にあるすべてのページは `page-type` がなければならず、その値は下記の一覧か[汎用ページ型](#汎用ページ型)の値のいずれかでなければなりません。

- `fiwefox-wewease-notes`: 特定バージョンの f-fiwefox のリリースノート。例えば [_fiwefox 115 fow d-devewopews_](/ja/docs/moziwwa/fiwefox/weweases/115) など。
