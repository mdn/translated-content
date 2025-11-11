---
title: フロントマターの page-type キー
slug: MDN/Writing_guidelines/Page_structures/Page_types/Page_type_key
l10n:
  sourceCommit: a1ac64fa4da965d2a152f08221b1a9aed638fd16
---

> [!CALLOUT]
> **訳注:** 翻訳記事には `page-type` キーを設定しないでください。英語版記事に設定されたキーが使用されます。以下の記事は、MDN Web Docs の構造を理解しやすくするために翻訳しておきます。

フロントマターの `page-type` キーは MDN ページ型を記述します。
これにより、 MDN コンテンツツールはコンテンツチェックやサイドバーの整理を自動化することができます。

他のフロントマターキーと同様に、 `page-type` キーは "index.md" の始めにある YAML で指定します。

```md
---
title: 100 Continue
slug: Web/HTTP/Reference/Status/100
page-type: http-status-code
spec-urls: https://www.rfc-editor.org/rfc/rfc9110#status.100
sidebar: http
---
```

JavaScript や CSS など、サイトの主要な領域にはそれぞれドメイン固有の `page-type` の値が設定されています。

## 汎用ページ型

以下のページ型は MDN の特定の技術分野に依存するものではありません。

- `guide`: 特有の構造を持たない一般的なガイドです。
- `landing-page`: トピックの概要、章の導入部、主要分野へのナビゲーションです。
- `listing-page`: その章の簡単説明と、その章内のサブページのリストです。
- `how-to`: 目的志向の手引き記事です。
- `tutorial`: 学習指向の記事の概要です。
- `tutorial-chapter`: 複数部構成のチュートリアルの一部です。

## ドメイン固有のページ型

この節では MDN 内の単一の領域に固有のページ型を掲載しています。

### 学習領域のページ型

この節では [Learn](/ja/docs/Learn_web_development) の下にあるページの `page-type` の値を掲載しています。ツリーのその部分にあるすべてのページは `page-type` がなければならず、その値は下記の一覧のいずれか、または一般的なページ型の値のいずれかでなければなりません。

- `learn-topic`: トピックの概要、つまり [_CSS_](/ja/docs/Learn_web_development/Core/Styling_basics) のようなモジュールの集合です。
- `learn-module` [_HTML によるコンテンツの構造化_](/ja/docs/Learn_web_development/Core/Structuring_content)のように、モジュールの概要、つまり、順番に並んだガイドの集合です。
- `learn-module-chapter` [_モバイルアクセシビリティ_](/ja/docs/Learn_web_development/Core/Accessibility/Mobile)のように、モジュールの一部であるガイド。
- `learn-module-assessment` [_スキルテスト: 基本的なコントロール_](/ja/docs/Learn_web_development/Extensions/Forms)のように、モジュールまたはその一部の理解度を評価するためのアクティビティを含む特別なガイドです。
- `learn-faq`: [_ドメイン名とは何ですか?_](/ja/docs/Learn_web_development/Howto/Web_mechanics/What_is_a_domain_name)のように、ウェブ開発に関する固有の質問に対する答えです。

### アクセシビリティのページ型

この節では、 [Web/Accessibility](/ja/docs/Web/Accessibility) の下にあるページの `page-type` の値を掲載しています。ツリーのその部分にあるすべてのページには `page-type` がなければならず、その値は下記の一覧か[汎用ページ型](#汎用ページ型)の値のいずれかでなければなりません。

- `aria-role`: ARIA [ロール](/ja/docs/Web/Accessibility/ARIA/Reference/Roles)。例えば [`section`](/ja/docs/Web/Accessibility/ARIA/Reference/Roles/section_role) など。
- `aria-attribute`: ARIA [属性](/ja/docs/Web/Accessibility/ARIA/Reference/Attributes)。例えば [`aria-sort`](/ja/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-sort) など。

### CSS のページ型

この節では、[Web/CSS](/ja/docs/Web/CSS)の下にあるページの `page-type` の値を掲載しています。ツリーのその部分にあるすべてのページは `page-type` がなければならず、その値は下記の一覧か[汎用ページ型](#汎用ページ型)の値のいずれかでなければなりません。

- `css-at-rule`: [アットルール](/ja/docs/Web/CSS/Guides/Syntax/At-rules)。例えば {{cssxref("@media")}} など。
- `css-at-rule-descriptor`: アットルール記述子。例えば [`@counter-style/prefix`](/ja/docs/Web/CSS/Reference/At-rules/@counter-style/prefix) など。
- `css-combinator`: 結合子。例えば[子孫結合子](/ja/docs/Web/CSS/Reference/Selectors/Descendant_combinator)など。
- `css-function`: [関数](/ja/docs/Web/CSS/Reference/Values/Functions)。例えば {{cssxref("max")}} など。
- `css-keyword`: キーワード。例えば {{cssxref("inherit")}} など。
- `css-media-feature`: [メディア特性](/ja/docs/Web/CSS/Reference/At-rules/@media#メディア特性)。例えば [`hover`](/ja/docs/Web/CSS/Reference/At-rules/@media/hover) など。
- `css-module`: モジュール。例えば [CSS アニメーション](/ja/docs/Web/CSS/Guides/Animations)など。
- `css-property`: プロパティ。例えば {{cssxref("background-color")}} など。
- `css-pseudo-class`: [擬似クラス](/ja/docs/Web/CSS/Reference/Selectors/Pseudo-classes)。例えば {{cssxref(":enabled")}} など。
- `css-pseudo-element`: [擬似要素](/ja/docs/Web/CSS/Reference/Selectors/Pseudo-elements)。例えば {{cssxref("::before")}} など。
- `css-selector`: [基本セレクター](/ja/docs/Web/CSS/Guides/Selectors/Selectors_and_combinators#基本セレクター)。例えば[クラスセレクター](/ja/docs/Web/CSS/Reference/Selectors/Class_selectors)など。
- `css-shorthand-property`: [一括指定プロパティ](/ja/docs/Web/CSS/Guides/Cascade/Shorthand_properties)。例えば {{cssxref("background")}} など。
- `css-type`: [データ型](/ja/docs/Web/CSS/Reference/Values/Data_types)。例えば [`<color>`](/ja/docs/Web/CSS/Reference/Values/color_value) など。

### 用語集のページ型

この節では[用語集](/ja/docs/Glossary)の下にあるページの `page-type` の値を掲載しています。ツリーのその部分にあるすべてのページは `page-type` がなければならず、その値は下記に掲載されている値のいずれかでなければなりません。

- `glossary-definition`: 用語を定義するページ。例えば[ベジェ曲線](/ja/docs/Glossary/Bezier_curve)など。
- `glossary-disambiguation`: 曖昧な用語の 2 つ以上の定義ページへのリンクを提供したページ。例えば[ノード](/ja/docs/Glossary/Node)など。

### HTML のページ型

この節では、[Web/HTML](/ja/docs/Web/HTML)の下にあるページの `page-type` の値を掲載しています。ツリーのその部分にあるすべてのページは `page-type` がなければならず、その値は下記の一覧か[汎用ページ型](#汎用ページ型)の値のいずれかでなければなりません。

- `html-attribute`: HTML 属性。例えば [`autocomplete`](/ja/docs/Web/HTML/Reference/Attributes/autocomplete) など。
- `html-attribute-value`: HTML 属性の単一の値。例えば [`dns-prefetch`](/ja/docs/Web/HTML/Reference/Attributes/rel/dns-prefetch) など。
- `html-element`: HTML 要素。例えば [`<button>`](/ja/docs/Web/HTML/Reference/Elements/button) など。

### HTTP のページ型

この節では、[Web/HTTP](/ja/docs/Web/HTTP)の下にあるページの `page-type` の値を掲載しています。ツリーのその部分にあるすべてのページは `page-type` がなければならず、その値は下記の一覧か[汎用ページ型](#汎用ページ型)の値のいずれかでなければなりません。

- `http-csp-directive`: [CSP](/ja/docs/Web/HTTP/Reference/Headers/Content-Security-Policy) ディレクティブ。例えば [`script-src`](/ja/docs/Web/HTTP/Reference/Headers/Content-Security-Policy/script-src) です。
- `http-cors-error`: [CORS](/ja/docs/Web/HTTP/Guides/CORS) エラー。例えば [`CORSDidNotSucceed`](/ja/docs/Web/HTTP/Guides/CORS/Errors/CORSDidNotSucceed) です。
- `http-permissions-policy-directive`: [`Permissions-Policy`](/ja/docs/Web/HTTP/Reference/Headers/Permissions-Policy) ディレクティブ。例えば [`accelerometer`](/ja/docs/Web/HTTP/Reference/Headers/Permissions-Policy/accelerometer) です。
- `http-header`: [HTTP ヘッダー](/ja/docs/Web/HTTP/Reference/Headers)。例えば [`Referer`](/ja/docs/Web/HTTP/Reference/Headers/Referer) です。
- `http-method`: [HTTP リクエストメソッド](/ja/docs/Web/HTTP/Reference/Methods)。例えば [`GET`](/ja/docs/Web/HTTP/Reference/Methods/GET) です。
- `http-status-code`: [HTTP レスポンスステータスコード](/ja/docs/Web/HTTP/Reference/Status)。例えば [`404`](/ja/docs/Web/HTTP/Reference/Status/404) です。

### JavaScript のページ型

この節では、[Web/JavaScript](/ja/docs/Web/JavaScript)の下にあるページの `page-type` の値を掲載しています。ツリーのその部分にあるすべてのページは `page-type` がなければならず、その値は下記の一覧か[汎用ページ型](#汎用ページ型)の値のいずれかでなければなりません。

- `javascript-class`: 組み込みオブジェクトの定義。例えば [`Array`](/ja/docs/Web/JavaScript/Reference/Global_Objects/Array) など。
- `javascript-constructor`: オブジェクトのコンストラクター。例えば [`Array()`](/ja/docs/Web/JavaScript/Reference/Global_Objects/Array/Array) など。
- `javascript-error`: エラー。例えば [RangeError: invalid array length](/ja/docs/Web/JavaScript/Reference/Errors/Invalid_array_length) など。
- `javascript-function`: オブジェクトメソッドではない組み込み関数。例えば [`encodeURI()`](/ja/docs/Web/JavaScript/Reference/Global_Objects/encodeURI) など。
- `javascript-global-property`: グローバルプロパティ。例えば [`NaN`](/ja/docs/Web/JavaScript/Reference/Global_Objects/NaN) など。
- `javascript-instance-accessor-property`: オブジェクトインスタンスのアクセサープロパティ。例えば [`Map.prototype.size`](/ja/docs/Web/JavaScript/Reference/Global_Objects/Map/size) など。
- `javascript-instance-data-property`: オブジェクトインスタンスのデータプロパティ。例えば [`length`](/ja/docs/Web/JavaScript/Reference/Global_Objects/Array/length) プロパティ（`Array`）など。
- `javascript-instance-method`: オブジェクトインスタンスのメソッド。例えば [`Array.prototype.at()`](/ja/docs/Web/JavaScript/Reference/Global_Objects/Array/at) など。
- `javascript-language-feature`: 他のカテゴリーに合わない JavaScript 構文。例えば[残余引数](/ja/docs/Web/JavaScript/Reference/Functions/rest_parameters) など。
- `javascript-namespace`: オブジェクトのうち、インスタンス化できず性的メンバーのみがあるもの。例えば [`Math`](/ja/docs/Web/JavaScript/Reference/Global_Objects/Math) など。
- `javascript-operator`: 演算子。例えば [Addition (+)](/ja/docs/Web/JavaScript/Reference/Operators/Addition) など。
- `javascript-statement`: 文。例えば [`switch`](/ja/docs/Web/JavaScript/Reference/Statements/switch) など。
- `javascript-static-accessor-property`: 静的アクセサープロパティ。例えば [`RegExp.lastMatch`](/ja/docs/Web/JavaScript/Reference/Global_Objects/RegExp/lastMatch) など。
- `javascript-static-data-property`: 静的データプロパティ。例えば [`Math.E`](/ja/docs/Web/JavaScript/Reference/Global_Objects/Math/E) など。
- `javascript-static-method`: 静的メソッド。例えば [`Array.from()`](/ja/docs/Web/JavaScript/Reference/Global_Objects/Array/from) など。

### MathML のページ型

この節では、[Web/MathML](/ja/docs/Web/MathML)の下にあるページの `page-type` の値を掲載しています。ツリーのその部分にあるすべてのページは `page-type` がなければならず、その値は下記の一覧か[汎用ページ型](#汎用ページ型)の値のいずれかでなければなりません。

- `mathml-attribute`: MathML 属性。例えば [`mathcolor`](/ja/docs/Web/MathML/Global_attributes/mathcolor) など。
- `mathml-element`: HTML 要素。例えば [`<msqrt>`](/ja/docs/Web/MathML/Reference/Element/msqrt) など。

### SVG のページ型

この節では、[Web/SVG](/ja/docs/Web/SVG)の下にあるページの `page-type` の値を掲載しています。ツリーのその部分にあるすべてのページは `page-type` がなければならず、その値は下記の一覧か[汎用ページ型](#汎用ページ型)の値のいずれかでなければなりません。

- `svg-attribute`: SVG 属性。例えば [`crossorigin`](/ja/docs/Web/SVG/Reference/Attribute/crossorigin) など。
- `svg-element`: SVG 要素。例えば [`<circle>`](/ja/docs/Web/SVG/Reference/Element/circle) など。

### Web API のページ型

この節では、[Web/API](/ja/docs/Web/API)の下にあるページの `page-type` の値を掲載しています。ツリーのその部分にあるすべてのページは `page-type` がなければならず、その値は下記の一覧か[汎用ページ型](#汎用ページ型)の値のいずれかでなければなりません。

- `web-api-overview`: ある Web API の概要。例えば[フェッチ API](/ja/docs/Web/API/Fetch_API) など。
- `web-api-interface`: Web API インターフェイス。例えば [`Request`](/ja/docs/Web/API/Request) など。
- `web-api-constructor`: コンストラクター。例えば [`Request()`](/ja/docs/Web/API/Request/Request) など。
- `web-api-instance-method`: インスタンスメソッド。例えば [`cache.add()`](/ja/docs/Web/API/Cache/add) など。
- `web-api-instance-property`: インスタンスプロパティ。例えば [`request.headers`](/ja/docs/Web/API/Request/headers) など。
- `web-api-static-method`: 静的メソッド。例えば [`Response.error()`](/ja/docs/Web/API/Response/error_static) など。
- `web-api-static-property`: 静的プロパティ。例えば [`Notification.permission`](/ja/docs/Web/API/Notification/permission_static) など。
- `web-api-event`: イベント。例えば [`Notification.click`](/ja/docs/Web/API/Notification/click_event) など。
- `webgl-extension`: WebGL 拡張機能。例えば [`WEBGL_draw_buffers`](/ja/docs/Web/API/WEBGL_draw_buffers) など。
- `webgl-extension-method`: WebGL 拡張機能メソッド。例えば [`OES_vertex_array_object.bindVertexArrayOES()`](/ja/docs/Web/API/OES_vertex_array_object/bindVertexArrayOES) など。

### WebAssembly のページ型

この節では [WebAssembly/](/ja/docs/WebAssembly) の下にあるページの `page-type` の値を掲載しています。ツリーのその部分にあるすべてのページは `page-type` がなければならず、その値は下記に掲載されている値のいずれかでなければなりません。

- `webassembly-function`: グローバル関数のうち、 `WebAssembly` オブジェクト直下のメソッドで、名前空間として動作するもの。例えば [`WebAssembly.instantiate()`](/ja/docs/WebAssembly/Reference/JavaScript_interface/instantiate_static) など。
- `webassembly-constructor`: コンストラクター。例えば [`WebAssembly.Exception()`](/ja/docs/WebAssembly/JavaScript_interface/Exception/Exception) など。
- `webassembly-interface`: WebAssembly インターフェイス。例えば [`WebAssembly.LinkError`](/ja/docs/WebAssembly/Reference/JavaScript_interface/LinkError) など。
- `webassembly-instance-property`: インスタンスプロパティ。例えば [`WebAssembly.Instance.exports`](/ja/docs/WebAssembly/Reference/JavaScript_interface/Instance/exports) など。
- `webassembly-instance-method`: インスタンスメソッド。例えば [`WebAssembly.Exception.getArg()`](/ja/docs/WebAssembly/JavaScript_interface/Exception/getArg) など。
- `webassembly-static-method`: 静的メソッド。例えば [`WebAssembly.Module.exports()`](/ja/docs/WebAssembly/Reference/JavaScript_interface/Module/exports_static) など。
- `webassembly-instruction`: 命令または命令の集合。例えば [`Wrap`](/ja/docs/WebAssembly/Reference/Numeric/Wrap) など。

### WebDriver のページ型

この節では、[Web/WebDriver](/ja/docs/Web/WebDriver)の下にあるページの `page-type` の値を掲載しています。ツリーのその部分にあるすべてのページは `page-type` がなければならず、その値は下記の一覧か[汎用ページ型](#汎用ページ型)の値のいずれかでなければなりません。

- `webdriver-command`: ウェブドライバーのコマンド。例えば [`CloseWindow`](/ja/docs/Web/WebDriver/Commands/CloseWindow) など。
- `webdriver-capability`: ウェブドライバーの能力。例えば [`acceptInsecureCerts`](/ja/docs/Web/WebDriver/Capabilities/acceptInsecureCerts) など。
- `webdriver-error`: ウェブドライバーのエラー。例えば[安全でない資格情報](/ja/docs/Web/WebDriver/Errors/InsecureCertificate)など。

### WebExtensions のページ型

この節では、[Mozilla/Add-ons/WebExtensions](/ja/docs/Mozilla/Add-ons/WebExtensions)の下にあるページの `page-type` の値を掲載しています。ツリーのその部分にあるすべてのページは `page-type` がなければならず、その値は下記の一覧か[汎用ページ型](#汎用ページ型)の値のいずれかでなければなりません。

- `webextension-api`: WebExtension API。例えば [`alarms`](/ja/docs/Mozilla/Add-ons/WebExtensions/API/alarms) など。
- `webextension-api-event`: WebExtension API のイベント。例えば [`action.onClicked`](/ja/docs/Mozilla/Add-ons/WebExtensions/API/action/onClicked) など。
- `webextension-api-function`: WebExtension 関数。例えば [`action.setBadgeText()`](/ja/docs/Mozilla/Add-ons/WebExtensions/API/action/setBadgeText) など。
- `webextension-api-property`: WebExtension プロパティ。例えば [`browserSettings.openBookmarksInNewTabs`](/ja/docs/Mozilla/Add-ons/WebExtensions/API/browserSettings/openBookmarksInNewTabs) など。
- `webextension-api-type`: WebExtension 型。例えば [`contextualIdentities.ContextualIdentity`](/ja/docs/Mozilla/Add-ons/WebExtensions/API/contextualIdentities/ContextualIdentity) など。
- `webextension-manifest-key`: WebExtension マニフェストキー。例えば [`user_scripts`](/ja/docs/Mozilla/Add-ons/WebExtensions/manifest.json/user_scripts) など。

### ウェブマニフェストのページ型

この節では、[Web/Manifest](/ja/docs/Web/Progressive_web_apps/Manifest)の下にあるページの `page-type` の値を掲載しています。ツリーのその部分にあるすべてのページは `page-type` がなければならず、その値は下記の一覧か[汎用ページ型](#汎用ページ型)の値のいずれかでなければなりません。

- `web-manifest-member`: マニフェストのメンバー。例えば [`description`](/ja/docs/Web/Progressive_web_apps/Manifest/description) など。

### XPath のページ型

この節では、[Web/XPath](/ja/docs/Web/XML/XPath)の下にあるページの `page-type` の値を掲載しています。ツリーのその部分にあるすべてのページは `page-type` がなければならず、その値は下記の一覧か[汎用ページ型](#汎用ページ型)の値のいずれかでなければなりません。

- `xpath-function`: 関数。例えば [`ceiling()`](/ja/docs/Web/XML/XPath/Reference/Functions/ceiling) など。

### XSLT のページ型

この節では、[Web/XSLT](/ja/docs/Web/XML/XSLT)の下にあるページの `page-type` の値を掲載しています。ツリーのその部分にあるすべてのページは `page-type` がなければならず、その値は下記の一覧か[汎用ページ型](#汎用ページ型)の値のいずれかでなければなりません。

- `xslt-element`: XSLT の要素。例えば [`<xsl:message>`](/ja/docs/Web/XML/XSLT/Reference/Element/message) など。

### EXSLT のページ型

この節では、[Web/EXSLT](/ja/docs/Web/XML/EXSLT)の下にあるページの `page-type` の値を掲載しています。ツリーのその部分にあるすべてのページは `page-type` がなければならず、その値は下記の一覧か[汎用ページ型](#汎用ページ型)の値のいずれかでなければなりません。

- `xslt-function`: EXSLT の関数。例えば [`exsl:node-set()`](/ja/docs/Web/XML/EXSLT/Reference/exsl/node-set) など。

### Firefox のページ型

この節では、[Mozilla/Firefox](/ja/docs/Mozilla/Firefox)の下にあるページの `page-type` の値を掲載しています。ツリーのその部分にあるすべてのページは `page-type` がなければならず、その値は下記の一覧か[汎用ページ型](#汎用ページ型)の値のいずれかでなければなりません。

- `firefox-release-notes`: 特定バージョンの Firefox のリリースノート。例えば [_Firefox 115 for developers_](/ja/docs/Mozilla/Firefox/Releases/115) など。
