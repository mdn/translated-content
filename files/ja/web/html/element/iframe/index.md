---
title: '<iframe>: インラインフレーム要素'
slug: Web/HTML/Element/iframe
tags:
  - Content
  - Element
  - Embedded content
  - Embedding
  - Frames
  - HTML
  - HTML embedded content
  - Inline Frames
  - Reference
  - Web
  - embedded
  - iframe
translation_of: Web/HTML/Element/iframe
---
{{HTMLRef}}

**HTML のインラインフレーム要素 (`<iframe>`)** は、入れ子になった{{Glossary("browsing context", "閲覧コンテキスト")}}を表現し、現在の HTML ページに他のページを埋め込むことができます。

{{EmbedInteractiveExample("pages/tabbed/iframe.html", "tabbed-standard")}}

それぞれの閲覧コンテキストは、[セッション履歴](/ja/docs/Web/API/History)と[文書](/ja/docs/Web/API/Document)を持ちます。他の閲覧コンテキストを埋め込んでいる閲覧コンテキストは、\_*親*閲覧コンテキスト*と呼ばれます。*最上位\_の閲覧コンテキストは (親を持たないもの) は、通常はブラウザーのウィンドウで、 {{domxref("Window")}} オブジェクトで表されます。

> **Warning:** それぞれの閲覧コンテキストは完全な文書環境であるため、ページの中で `<iframe>` を使用するごとに、必要となるメモリやその他の計算リソースが増加します。理論的には好きなだけ `<iframe>` を使用することができますが、パフォーマンスの問題を確認してください。

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">
        <a href="/ja/docs/Web/HTML/Content_categories">コンテンツカテゴリ</a>
      </th>
      <td>
        <a href="/ja/docs/Web/HTML/Content_categories#フローコンテンツ"
          >フローコンテンツ</a
        >,
        <a href="/ja/docs/Web/HTML/Content_categories#記述コンテンツ"
          >記述コンテンツ</a
        >, 埋め込みコンテンツ, 対話型コンテンツ, 知覚可能コンテンツ
      </td>
    </tr>
    <tr>
      <th scope="row">許可されている内容</th>
      <td>なし。</td>
    </tr>
    <tr>
      <th scope="row">タグの省略</th>
      <td>{{no_tag_omission}}</td>
    </tr>
    <tr>
      <th scope="row">許可されている親要素</th>
      <td>埋め込みコンテンツを受け入れるすべての要素。</td>
    </tr>
    <tr>
      <th scope="row">暗黙の ARIA ロール</th>
      <td>
        <a href="https://www.w3.org/TR/html-aria/#dfn-no-corresponding-role"
          >対応するロールなし</a
        >
      </td>
    </tr>
    <tr>
      <th scope="row">許可されている ARIA ロール</th>
      <td>
        {{ARIARole("application")}}, {{ARIARole("document")}},
        {{ARIARole("img")}}, {{ARIARole("none")}},
        {{ARIARole("presentation")}}
      </td>
    </tr>
    <tr>
      <th scope="row">DOM インターフェイス</th>
      <td>{{domxref("HTMLIFrameElement")}}</td>
    </tr>
  </tbody>
</table>

## 属性

この要素は[グローバル属性](/ja/docs/Web/HTML/Global_attributes)を持ちます。

<dl><dt>{{htmlattrdef("allow")}}</dt><dd><a href="/ja/docs/Web/HTTP/Feature_Policy">機能ポリシー</a>を <code>&#x3C;iframe></code> に指定します。このポリシーは、 <code>&#x3C;iframe></code> が利用可能な機能をリクエストのオリジン (例：マイク、カメラ、バッテリー、ウェブ共有 API へのアクセスなど) に基づいて定義します<br>詳細と例については、<a href="/ja/docs/Web/HTTP/Feature_Policy/Using_Feature_Policy">機能ポリシーの使用</a> > <a href="/ja/docs/Web/HTTP/Feature_Policy/Using_Feature_Policy#The_iframe_allow_attribute">iframe の allow 属性</a>を参照してください。</dd><dt>{{htmlattrdef("allowfullscreen")}}</dt><dd>この <code>&#x3C;iframe></code> が {{domxref("Element.requestFullscreen", "requestFullscreen()")}} を呼び出して全画面モードにすることができる場合は、 <code>true</code> に設定します。</dd><dd><div class="note">この属性は古い属性とみなされており、 <code>allow="fullscreen"</code> に更新されました。</div></dd><dt>{{htmlattrdef("allowpaymentrequest")}}</dt><dd>異なるオリジンの <code>&#x3C;iframe></code> で <a href="/ja/docs/Web/API/Payment_Request_API">Payment Request API</a> の実行を許可する場合は <code>true</code> に設定します。</dd><dd><div class="note">この属性は古い属性とみなされており、 <code>allow="payment"</code> に更新されました。</div></dd><dt>{{htmlattrdef("csp")}} {{experimental_inline}}</dt><dd>埋め込みリソースを制限する<a href="/ja/docs/Web/HTTP/CSP">コンテンツセキュリティポリシー</a>です。詳しくは {{domxref("HTMLIFrameElement.csp")}} をご覧ください。</dd><dt>{{htmlattrdef("height")}}</dt><dd>フレームの高さを CSS ピクセル数で示します。既定値は <code>150</code> です。</dd><dt>{{htmlattrdef("loading")}} {{experimental_inline}}</dt><dd>ブラウザーが iframe をどのように読み込むかを示します。<ul><li><code>eager</code>: 可視ビューポートの外にあるかどうかに関わらず、 iframe を直ちにロードします (これが既定値です)。</li><li><code>lazy</code>: ブラウザーで定義されたビューポートからの計算された距離に達するまで iframe の読み込みを延期します。</li></ul></dd><dt>{{htmlattrdef("name")}}</dt><dd>埋め込み閲覧コンテキストのターゲット表の名前です。 {{HTMLElement("a")}}, {{HTMLElement("form")}}, {{HTMLElement("base")}} 要素における <code>target</code> 属性の値、 {{HTMLElement("input")}} や {{HTMLElement("button")}} 要素における <code>formtarget</code> 属性の値、 {{domxref("Window.open()","window.open()")}} メソッドの <code>windowName</code> 引数の値として使用することができます。</dd><dt id="attr-referrer">{{htmlattrdef("referrerpolicy")}}</dt><dd>フレームのリソースにアクセスする際にどの<a href="/ja/docs/Web/API/Document/referrer">リファラー</a>を送信するかを示します。<ul><li><code>no-referrer</code>: {{HTTPHeader("Referer")}} ヘッダーを送信しません。</li><li><code>no-referrer-when-downgrade</code> (既定値): {{HTTPHeader("Referer")}} ヘッダーは {{Glossary("TLS")}} ({{Glossary("HTTPS")}}) のない{{Glossary("origin", "オリジン")}}には送信しません。</li><li><code>origin</code>: 送信するリファラーを、参照しているページのオリジン (<a href="/ja/docs/Archive/Mozilla/URIScheme">スキーム</a>, {{Glossary("host", "ホスト名")}}, {{Glossary("port", "ポート番号")}}) に限定します。</li><li><code>origin-when-cross-origin</code>: 他のオリジンへ送信されるリファラーは、スキーム、ホスト名、ポート番号に制限します。同一オリジンへの移動では、パスも含めます。</li><li><code>same-origin</code>: リファラーは{{Glossary("Same-origin policy", "同じオリジン")}}には送信しますが、異なるオリジンへのリクエストにはリファラー情報を送信しません。</li><li><code>strict-origin</code>: プロトコルのセキュリティ水準が同じ (HTTPS→HTTPS) である場合は、文書のオリジンのみをリファラーとして送信しますが、宛先の安全性が劣る場合 (HTTPS→HTTP) には送信しません。</li><li><code>strict-origin-when-cross-origin</code>: 同一オリジンへのリクエストには URL 全体を送信し、プロトコルのセキュリティ水準が同じ (HTTPS→HTTPS) である場合は、文書のオリジンのみをリファラーとして送信し、宛先の安全性が劣る場合 (HTTPS→HTTP) にはヘッダーを送信しません。</li><li><code>unsafe-url</code>: リファラーにオリジン<em>および</em>パスを含めます (ただし、<a href="/ja/docs/Web/API/HTMLHyperlinkElementUtils/hash">フラグメント</a>、<a href="/ja/docs/Web/API/HTMLHyperlinkElementUtils/password">パスワード</a>、<a href="/ja/docs/Web/API/HTMLHyperlinkElementUtils/username">ユーザー名</a>は含めません)。オリジンやパスの情報が TLS で保護されたリソースから安全性の劣るオリジンへ漏えいしますので、<strong>これは安全ではありません</strong>。</li></ul></dd><dt>{{htmlattrdef("sandbox")}}</dt><dd>フレーム内のコンテンツに追加の制約を適用します。この属性の値は、空にするとすべての制約を適用し、空白区切りのトークンにすると特定の制約を外します。<ul><li><code>allow-downloads-without-user-activation</code> {{experimental_inline}}: ユーザーの操作なしでダウンロードが発生することを許可します。</li><li><code>allow-downloads</code>: ユーザーの操作により発生するダウンロードを許可します。</li><li><code>allow-forms</code>: リソースがフォームを送信することを許可します。このキーワードが使用されない場合は、フォーム送信がブロックされます。</li><li><code>allow-modals</code>: リソースが<a href="https://html.spec.whatwg.org/multipage/origin.html#sandboxed-modals-flag">モーダルウィンドウを開く</a>ことができるようにします。</li><li><code>allow-orientation-lock</code>: リソースが<a href="/ja/docs/Web/API/Screen/lockOrientation">スクリーンの方向をロック</a>することができるようにします。</li><li><code>allow-pointer-lock</code>: リソースが <a href="/ja/docs/WebAPI/Pointer_Lock">Pointer Lock API</a> を使用できるようにします。</li><li><code>allow-popups</code>: (<code>window.open()</code>, <code>target="_blank"</code>, <code>showModalDialog()</code> のような) ポップアップを許可します。このキーワードを与えなければ、これらの機能は暗黙に失敗します。</li><li><code>allow-popups-to-escape-sandbox</code>: サンドボックス化された文書が、サンドボックスを継承するウィンドウではないウィンドウを開けるようにします。例えば、これによって安全に広告をサンドボックス化し、同じ制約を広告のリンク先のページに強制しないようにすることができます。</li><li><code>allow-presentation</code>: リソースが<a href="/ja/docs/Web/API/PresentationRequest">プレゼンテーションセッション</a>を開始できるようにします。</li><li><code>allow-same-origin</code>: このトークンが使用されなかった場合、リソースは特殊なオリジンからのものであるとして扱い、常に{{Glossary("same-origin policy", "同一オリジンポリシー")}}に失敗します。</li><li><code>allow-scripts</code>: リソースがスクリプト (ただし、ポップアップウィンドウを作成しないもの) を実行できるようにします。</li><li><code>allow-storage-access-by-user-activation</code> {{experimental_inline}}: リソースが <a href="/ja/docs/Web/API/Storage_Access_API">Storage Access API</a> で親のストレージ容量へのアクセスを要求できるようにします。</li><li><code>allow-top-navigation</code>: リソースが最上位の閲覧コンテキスト (<code>_top</code> という名前のもの) に移動できるようにします。</li><li><code>allow-top-navigation-by-user-activation</code>: リソースが最上位の閲覧コンテキストに移動できるようにしますが、ユーザーの操作によって開始されたものに限ります。</li></ul><div class="note"><strong>サンドボックスのメモ:</strong><ul><li>埋め込まれた文書のオリジンが埋め込み先のページと同じである場合、 <code>allow-scripts</code> と <code>allow-same-origin</code> を同時に使用すると、埋め込まれた文書から <code>sandbox</code> 属性を削除することができるようになるため、<strong>絶対に避けるべき</strong>です。 — <code>sandbox</code> 属性をまったく使用しないよりも安全ではなくなります。</li><li>攻撃者がサンドボックス化した <code>iframe</code> の外側にコンテンツを表示することができる場合、サンドボックス化は無意味です。例えば、閲覧者がフレームを新しいタブで開く場合などです。潜在的なダメージを抑えるため、そうしたコンテンツは<em>別のオリジン</em>から提供するようにもしてください。</li><li><code>sandbox</code> 属性は Internet Explorer 9 以前では対応していません。</li></ul></div></dd><dt>{{htmlattrdef("src")}}</dt><dd>埋め込むページの URL です。<a href="/ja/docs/Web/Security/Same-origin_policy#Inherited_origins">同一オリジンポリシー</a>に従う空白ページを埋め込む場合は、 <code>about:blank</code> の値を使用してください。また、プログラムから <code>&#x3C;iframe></code> の src 属性を削除すると (例えば {{domxref("Element.removeAttribute()")}} などで)、 Firefox (バージョン65以降)、 Chromium ベースのブラウザー、 Safari/iOS では <code>about:blank</code> が読み込まれます。</dd><dt>{{htmlattrdef("srcdoc")}}</dt><dd>埋め込むインライン HTML で、 <code>src</code> 属性を上書きします。ブラウザーが <code>srcdoc</code> 属性に対応していない場合は、 <code>src</code> 属性の URL で代替されます。</dd><dt>{{htmlattrdef("width")}}</dt><dd>フレームの幅を CSS ピクセル数で示します。既定値は <code>300</code> です。</dd></dl>

### 非推奨の属性

以下の属性は非推奨であり、すべてのユーザーエージェントが対応しているとは限りません。新しいコンテンツでは使用せず、既存のコンテンツから削除するようにしましょう。

- {{htmlattrdef("align")}} {{deprecated_inline}}
  - : フレームを含むコンテキストに対する、フレームの整列方法を指定します。
- {{htmlattrdef("frameborder")}} {{deprecated_inline}}
  - : 値が `1` (既定) ならば、このフレームの周りに境界線を描きます。値が `0` ならば、このフレームの周りの境界線を削除しますが、代わりに CSS の {{cssxref("border")}} プロパティを使用して `<iframe>` の境界線を制御してください。
- {{htmlattrdef("longdesc")}} {{deprecated_inline}}
  - : フレームの内容についての長い説明の URL です。誤用が広がっているため、非視覚ブラウザーでは有用ではありません。
- {{htmlattrdef("marginheight")}} {{deprecated_inline}}
  - : フレームの内容と上下の境界との間における、ピクセル単位の余白の量です。
- {{htmlattrdef("marginwidth")}} {{deprecated_inline}}
  - : フレームの内容と左右の境界との間における、ピクセル単位の余白の量です。
- {{htmlattrdef("scrolling")}} {{deprecated_inline}}

  - : ブラウザーがフレームにスクロールバーを表示することを示します。

    - `auto`: フレームの内容が、フレームの寸法よりも大きい場合のみ。
    - `yes`: 常にスクロールバーを表示する。
    - `no`: スクロールバーを一切表示しない。

### 標準外の属性

- {{htmlattrdef("mozbrowser")}} {{non-standard_inline}}

  - :&#x20;

    > **Note:** これを Firefox のウェブ拡張機能に公開するには {{bug(1318532)}} を参照してください。

    この `<iframe>` を最上位のブラウザーウィンドウのように動作させます。詳しくは [Browser API](/ja/docs/Mozilla/Gecko/Chrome/API/Browser_API) を参照してください。
    **[ウェブ拡張機能](/ja/docs/Mozilla/Add-ons/WebExtensions)でのみ使用可能です。**

## スクリプト操作

インラインフレームは、 {{HTMLElement("frame")}} 要素のように {{domxref("window.frames")}} 擬似配列に入ります。

DOM の {{domxref("HTMLIFrameElement")}} オブジェクトでは、スクリプトはフレーム化されたリソースの {{domxref("window")}} オブジェクトに {{domxref("HTMLIFrameElement.contentWindow", "contentWindow")}} プロパティを使ってアクセスすることができます。 {{domxref("HTMLIFrameElement.contentDocument", "contentDocument")}} プロパティは `iframe` の内側の `document` 要素を参照します (`contentWindow.document` と等価です)。

スクリプトは、フレームの内側からは {{domxref("window.parent")}} で親ウィンドウを参照できます。

フレームの内容にアクセスするスクリプトは、[同一オリジンポリシー](/ja/docs/Web/Security/Same-origin_policy)に従います。別なオリジンから読み込まれたスクリプトは、フレーム内のスクリプトがフレームの親にアクセスする場合を含め、他の `window` オブジェクトのほとんどのプロパティにアクセスできません。オリジンをまたいだやりとりは {{domxref("Window.postMessage()")}} を使用して実現できます。

## 位置指定と表示倍率

[置換要素](/ja/docs/Web/CSS/Replaced_element)なので、 `<iframe>` 要素のボックス内における埋め込み文書の位置、配置、表示倍率は、 {{cssxref("object-position")}} および {{cssxref("object-fit")}} プロパティで設定することができます。

## 例

### シンプルな \<iframe>

この例では、<https://example.org>のページを `<iframe>` で埋め込みます。

#### HTML

```html
<iframe src="https://example.org"
            title="iframe Example 1" width="400" height="300">
</iframe>
```

#### 結果

{{ EmbedLiveSample('Example1', 640,400)}}

## アクセシビリティの考慮

読み上げソフトのような支援技術を利用して操作している人は、 `<iframe>` 上の [`title` 属性](/ja/docs/Web/HTML/Global_attributes/title)を使用して内容をラベル付けします。 title の値で埋め込みコンテンツを正確に説明してください。

```html
<iframe title="アボガドのウィキペディアページ" src="https://en.wikipedia.org/wiki/Avocado"></iframe>
```

この title がないと、埋め込みコンテンツが何であるかを特定するために `<iframe>` の内容に移動しなければならなります。このコンテキストの移動は、特に複数の `<iframe>` が存在するページや、動画や音楽などの対話型コンテンツが埋め込まれているページでは、混乱を招き、時間のかかる作業になる可能性があります。

## 仕様書

| 仕様書                                                                                                                                           | 状態                                     | 備考                                               |
| ------------------------------------------------------------------------------------------------------------------------------------------------ | ---------------------------------------- | -------------------------------------------------- |
| {{SpecName('Referrer Policy', '#referrer-policy-delivery-referrer-attribute', 'referrerpolicy attribute')}} | {{Spec2('Referrer Policy')}}     | `referrerpolicy` 属性を追加。                      |
| {{SpecName('HTML WHATWG', 'iframe-embed-object.html#the-iframe-element', '&lt;iframe&gt;')}}                     | {{Spec2('HTML WHATWG')}}         |                                                    |
| {{SpecName('HTML5 W3C', 'semantics-embedded-content.html#the-iframe-element', '&lt;iframe&gt;')}}                 | {{Spec2('HTML5 W3C')}}             |                                                    |
| {{SpecName('HTML4.01', 'present/frames.html#h-16.5', '&lt;iframe&gt;')}}                                                 | {{Spec2('HTML4.01')}}             |                                                    |
| {{SpecName('Screen Orientation')}}                                                                                                     | {{Spec2('Screen Orientation')}} | `sandbox` 属性に `allow-orientation-lock` を追加。 |

## ブラウザーの互換性

{{Compat("html.elements.iframe", 3)}}

## 関連情報

- [プライバシー、アクセス制限と情報セキュリティ](/ja/docs/Web/Privacy)
