---
title: '<iframe>: インラインフレーム要素'
slug: Web/HTML/Element/iframe
l10n:
  sourceCommit: d4d89f0d396e69a758afe46875b37b4ff4580238
---

{{HTMLSidebar}}

**`<iframe>`** は [HTML](/ja/docs/Web/HTML) の要素で、入れ子になった{{Glossary("browsing context", "閲覧コンテキスト")}}を表現し、現在の HTML ページに他のページを埋め込むことができます。

{{EmbedInteractiveExample("pages/tabbed/iframe.html", "tabbed-standard")}}

それぞれの閲覧コンテキストは、[セッション履歴](/ja/docs/Web/API/History)と[文書](/ja/docs/Web/API/Document)を持ちます。他の閲覧コンテキストを埋め込んでいる閲覧コンテキストは、_親閲覧コンテキスト_ と呼ばれます。_最上位_ の閲覧コンテキスト（親を持たないもの）は、通常はブラウザーのウィンドウで、 {{domxref("Window")}} オブジェクトで表されます。

> **警告:** それぞれの閲覧コンテキストは完全な文書環境であるため、ページの中で `<iframe>` を使用するごとに、必要となるメモリやその他の計算リソースが増加します。理論的には好きなだけ `<iframe>` を使用することができますが、パフォーマンスの問題を確認してください。

## 属性

この要素には[グローバル属性](/ja/docs/Web/HTML/Global_attributes)があります。

- `allow`

  - : [権限ポリシー](/ja/docs/Web/HTTP/Permissions_Policy)を `<iframe>` に指定します。このポリシーは、 `<iframe>` が利用可能な機能（例：マイク、カメラ、バッテリー、ウェブ共有 API へのアクセスなど）をリクエストのオリジンに基づいて定義します。

      > **メモ:** `allow` 属性で指定された権限ポリシーは {{httpheader("Permissions-Policy")}} ヘッダーで指定されたポリシーの上に、さらに制限を実装するものです。それはそれを置き換えるものではありません。

- `allowfullscreen`

  - : この `<iframe>` が {{domxref("Element.requestFullscreen", "requestFullscreen()")}} を呼び出して全画面モードにすることができる場合は、 `true` に設定します。

    > **メモ:** この属性は古い属性とみなされており、 `allow="fullscreen"` として再定義されました。

- `allowpaymentrequest` {{Experimental_Inline}}

  - : 異なるオリジンの `<iframe>` で [支払いリクエスト API](/ja/docs/Web/API/Payment_Request_API) の実行を許可する場合は `true` に設定します。

    > **メモ:** この属性は古い属性とみなされており、 `allow="payment"` として再定義されました。

- `credentialless` {{Experimental_Inline}} {{Non-standard_Inline}}

  - : `true` に設定すると `<iframe>` を信用できないものにします。 つまり、そのコンテンツは新しい、一時的なコンテキストで読み込まれることになります。これはそのオリジンに関連するネットワーク、クッキー、ストレージデータへのアクセス権がありません。最上位の文書の存続期間に依存する新しいコンテキストを使用します。その代わりに {{httpheader("Cross-Origin-Embedder-Policy")}} (COEP) 埋め込みルールは解除され、COEP を設定した文書はそうでない第三者の文書を埋め込むことができるようになります。詳しくは [信用できない iframe](/ja/docs/Web/Security/IFrame_credentialless) を参照してください。

- `csp` {{experimental_inline}}

  - : 埋め込みリソースを制限する[コンテンツセキュリティポリシー](/ja/docs/Web/HTTP/CSP)です。詳しくは {{domxref("HTMLIFrameElement.csp")}} をご覧ください。

- `height`
  - : フレームの高さを CSS ピクセル数で示します。既定値は `150` です。
- `loading` {{experimental_inline}}

  - : ブラウザーが iframe をどのように読み込むかを示します。

    - `eager`: 可視ビューポートの外にあるかどうかに関わらず、 iframe を直ちにロードします（これが既定値です）。
    - `lazy`: ブラウザーで定義されたビューポートからの計算された距離に達するまで iframe の読み込みを延期します。

- `name`
  - : 埋め込み閲覧コンテキストのターゲットの名前です。 {{HTMLElement("a")}}, {{HTMLElement("form")}}, {{HTMLElement("base")}} 要素における `target` 属性の値、 {{HTMLElement("input")}} や {{HTMLElement("button")}} 要素における `formtarget` 属性の値、 {{domxref("Window.open()","window.open()")}} メソッドの `windowName` 引数の値として使用することができます。
- `referrerpolicy`

  - : フレームのリソースにアクセスする際にどの[リファラー](/ja/docs/Web/API/Document/referrer)を送信するかを示します。

    - `no-referrer`: {{HTTPHeader("Referer")}} ヘッダーを送信しません。
    - `no-referrer-when-downgrade`: {{HTTPHeader("Referer")}} ヘッダーは {{Glossary("TLS")}} ({{Glossary("HTTPS")}}) のない{{Glossary("origin", "オリジン")}}には送信しません。
    - `origin`: 送信するリファラーを、参照しているページのオリジン（[スキーム](/ja/docs/Learn/Common_questions/Web_mechanics/What_is_a_URL), {{Glossary("host", "ホスト名")}}, {{Glossary("port", "ポート番号")}}）に限定します。
    - `origin-when-cross-origin`: 他のオリジンへ送信されるリファラーは、スキーム、ホスト名、ポート番号のみにします。同一オリジンへの移動では、パスも含めます。
    - `same-origin`: リファラーは{{Glossary("Same-origin policy", "同じオリジン")}}には送信しますが、異なるオリジンへのリクエストにはリファラー情報を送信しません。
    - `strict-origin`: プロトコルのセキュリティ水準が同じ (HTTPS→HTTPS) である場合は、文書のオリジンのみをリファラーとして送信しますが、宛先の安全性が劣る場合 (HTTPS→HTTP) には送信しません。
    - `strict-origin-when-cross-origin`: 同一オリジンへのリクエストには URL 全体を送信し、プロトコルのセキュリティ水準が同じ (HTTPS→HTTPS) である場合は、文書のオリジンのみをリファラーとして送信し、宛先の安全性が劣る場合 (HTTPS→HTTP) にはヘッダーを送信しません。
    - `unsafe-url`: リファラーにオリジン*および*パスを含めます (ただし、[フラグメント](/ja/docs/Web/API/HTMLAnchorElement/hash)、[パスワード](/ja/docs/Web/API/HTMLAnchorElement/password)、[ユーザー名](/ja/docs/Web/API/HTMLAnchorElement/username)は含めません)。オリジンやパスの情報が TLS で保護されたリソースから安全性の劣るオリジンへ漏えいしますので、**これは安全ではありません**。

- `sandbox`

  - : フレーム内のコンテンツに追加の制約を適用します。この属性の値は、空にするとすべての制約を適用し、空白区切りのトークンにすると特定の制約を外します。

    - `allow-downloads`: [download](/ja/docs/Web/HTML/Element/a#download) 属性を持つ {{HTMLElement("a")}} または {{HTMLElement("area")}} 要素を通して、またファイルのダウンロードにつながるナビゲーションを通してファイルのダウンロードを可能にします。これは、ユーザーがリンクをクリックしたか、JS コードがユーザーとの対話なしに開始したかに関係なく、動作します。
    - `allow-downloads-without-user-activation` {{experimental_inline}}: ユーザーの操作なしでダウンロードが発生することを許可します。
    - `allow-forms`: ページがフォームを送信することを許可します。このキーワードを使用しない場合、フォームは通常通り表示されますが、フォームを送信しても入力の検証、ウェブサーバへのデータ送信、ダイアログの終了が行われません。
    - `allow-modals`: ページが {{domxref("Window.alert()")}}, {{domxref("Window.confirm()")}}, {{domxref("Window.print()")}}, {{domxref("Window.prompt()")}} によってモーダルウィンドウを開くことができるようにしますが、 {{HTMLElement("dialog")}} は、このキーワードに関わらず開くことが可能です。また、ページが {{domxref("BeforeUnloadEvent")}} イベントを受信することができるようにもします。
    - `allow-orientation-lock`: リソースが[画面の方向をロック](/ja/docs/Web/API/Screen/lockOrientation)することができるようにします。
    - `allow-pointer-lock`: リソースが[ポインターロック API](/ja/docs/WebAPI/Pointer_Lock) を使用できるようにします。
    - `allow-popups`: ポップアップを許可します（{{domxref("Window.open()")}}, `target="_blank"`, {{domxref("Window.showModalDialog()")}} などから）。このキーワードが使用されていない場合、その機能は静かに失敗します。
    - `allow-popups-to-escape-sandbox`: サンドボックス化された文書が、サンドボックスを継承するウィンドウではないウィンドウを開けるようにします。例えば、これによって安全に広告をサンドボックス化し、同じ制約を広告のリンク先のページに強制しないようにすることができます。
    - `allow-presentation`: リソースが[プレゼンテーションセッション](/ja/docs/Web/API/PresentationRequest)を開始できるようにします。
    - `allow-same-origin`: このトークンが使用されていない場合、リソースは{{Glossary("same-origin policy", "同一オリジンポリシー")}}に常に失敗する特別なオリジンからのものとして扱われます（潜在的に[データストレージやクッキー](/ja/docs/Web/Security/Same-origin_policy#オリジンをまたいだデータストレージアクセス)へのアクセスや一部の JavaScript API の使用を阻止することがあります）。
    - `allow-scripts`: ページがスクリプトを実行することを許可します（ただし、ポップアップウィンドウは作成しません）。このキーワードが使用されない場合、この操作は許可されません。
    - `allow-storage-access-by-user-activation` {{experimental_inline}}: リソースが [Storage Access API](/ja/docs/Web/API/Storage_Access_API) で親のストレージ容量へのアクセスを要求できるようにします。
    - `allow-top-navigation`: リソースが最上位の閲覧コンテキスト（`_top` という名前のもの
    に移動できるようにします。
    - `allow-top-navigation-by-user-activation`: リソースが最上位の閲覧コンテキストに移動できるようにしますが、ユーザーの操作によって開始されたものに限ります。
    - `allow-top-navigation-to-custom-protocols`: ブラウザーに組み込まれている、または[ウェブサイトによって登録された](/ja/docs/Web/API/Navigator/registerProtocolHandler/Web-based_protocol_handlers) `http` 以外のプロトコルへのナビゲーションを可能にします。この機能は `allow-popups` や `allow-top-navigation` キーワードでも有効になります。

    > **メモ:**
    >
    > - 埋め込まれた文書のオリジンが埋め込み先のページと同じである場合、 `allow-scripts` と `allow-same-origin` を同時に使用すると、埋め込まれた文書から `sandbox` 属性を削除することができるようになるため、**絶対に避けるべき**です。 `sandbox` 属性をまったく使用しないよりも安全ではなくなります。
    > - 攻撃者がサンドボックス化した `iframe` の外側にコンテンツを表示することができる場合、サンドボックス化は無意味です。例えば、閲覧者がフレームを新しいタブで開く場合などです。潜在的なダメージを抑えるため、そうしたコンテンツは*別のオリジン*から提供するようにもしてください。

- `src`
  - : 埋め込むページの URL です。[同一オリジンポリシー](/ja/docs/Web/Security/Same-origin_policy#オリジンの継承)に従う空白ページを埋め込む場合は、 `about:blank` の値を使用してください。また、プログラムから `<iframe>` の src 属性を削除すると (例えば {{domxref("Element.removeAttribute()")}} などで)、 Firefox (バージョン 65 以降)、 Chromium ベースのブラウザー、 Safari/iOS では `about:blank` が読み込まれます。
- `srcdoc`
  - : 埋め込むインライン HTML で、 `src` 属性を上書きします。ブラウザーが `srcdoc` 属性に対応していない場合は、 `src` 属性の URL で代替されます。
- `width`
  - : フレームの幅を CSS ピクセル数で示します。既定値は `300` です。

### 非推奨の属性

以下の属性は非推奨であり、すべてのユーザーエージェントが対応しているとは限りません。新しいコンテンツでは使用せず、既存のコンテンツから削除するようにしましょう。

- `align` {{deprecated_inline}}
  - : フレームを含むコンテキストに対する、フレームの整列方法を指定します。
- `frameborder` {{deprecated_inline}}
  - : 値が `1` (既定) ならば、このフレームの周りに境界線を描きます。値が `0` ならば、このフレームの周りの境界線を削除しますが、代わりに CSS の {{cssxref("border")}} プロパティを使用して `<iframe>` の境界線を制御してください。
- `longdesc` {{deprecated_inline}}
  - : フレームの内容についての長い説明の URL です。誤用が広がっているため、非視覚ブラウザーでは有用ではありません。
- `marginheight` {{deprecated_inline}}
  - : フレームの内容と上下の境界との間における、ピクセル単位の余白の量です。
- `marginwidth` {{deprecated_inline}}
  - : フレームの内容と左右の境界との間における、ピクセル単位の余白の量です。
- `scrolling` {{deprecated_inline}}

  - : ブラウザーがフレームにスクロールバーを表示することを示します。

    - `auto`: フレームの内容が、フレームの寸法よりも大きい場合のみ。
    - `yes`: 常にスクロールバーを表示する。
    - `no`: スクロールバーを一切表示しない。

## スクリプト操作

インラインフレームは、 {{HTMLElement("frame")}} 要素のように {{domxref("window.frames")}} 擬似配列に入ります。

DOM の {{domxref("HTMLIFrameElement")}} オブジェクトでは、スクリプトはフレーム化されたリソースの {{domxref("window")}} オブジェクトに {{domxref("HTMLIFrameElement.contentWindow", "contentWindow")}} プロパティを使ってアクセスすることができます。 {{domxref("HTMLIFrameElement.contentDocument", "contentDocument")}} プロパティは `iframe` の内側の `document` 要素を参照します (`contentWindow.document` と等価です)。

スクリプトは、フレームの内側からは {{domxref("window.parent")}} で親ウィンドウを参照できます。

フレームの内容にアクセスするスクリプトは、[同一オリジンポリシー](/ja/docs/Web/Security/Same-origin_policy)に従います。別なオリジンから読み込まれたスクリプトは、フレーム内のスクリプトがフレームの親にアクセスする場合を含め、他の `window` オブジェクトのほとんどのプロパティにアクセスできません。オリジンをまたいだやりとりは {{domxref("Window.postMessage()")}} を使用して実現できます。

## 位置指定と表示倍率

[置換要素](/ja/docs/Web/CSS/Replaced_element)なので、 `<iframe>` 要素のボックス内における埋め込み文書の位置、配置、表示倍率は、 {{cssxref("object-position")}} および {{cssxref("object-fit")}} プロパティで設定することができます。

## 例

### シンプルな \<iframe>

この例では、<https://example.org> のページを `<iframe>` で埋め込みます。

#### HTML

```html
<iframe
  src="https://example.org"
  title="iframe Example 1"
  width="400"
  height="300">
</iframe>
```

#### 結果

{{ EmbedLiveSample('A_simple_iframe', 640,400)}}

## アクセシビリティの考慮

読み上げソフトのような支援技術を利用して操作している人は、 `<iframe>` 上の [`title` 属性](/ja/docs/Web/HTML/Global_attributes/title)を使用して内容をラベル付けします。 title の値で埋め込みコンテンツを正確に説明してください。

```html
<iframe
  title="アボガドのウィキペディアページ"
  src="https://en.wikipedia.org/wiki/Avocado"></iframe>
```

この title がないと、埋め込みコンテンツが何であるかを特定するために `<iframe>` の内容に移動しなければならなります。このコンテキストの移動は、特に複数の `<iframe>` が存在するページや、動画や音楽などの対話型コンテンツが埋め込まれているページでは、混乱を招き、時間のかかる作業になる可能性があります。

## 技術的概要

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">
        <a href="/ja/docs/Web/HTML/Content_categories">コンテンツカテゴリー</a>
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
        <a href="/ja/docs/Web/Accessibility/ARIA/Roles/application_role"><code>application</code></a>, <a href="/ja/docs/Web/Accessibility/ARIA/Roles/document_role"><code>document</code></a>,
        <a href="/ja/docs/Web/Accessibility/ARIA/Roles/img_role"><code>img</code></a>, <a href="/ja/docs/Web/Accessibility/ARIA/Roles/none_role"><code>none</code></a>,
        <a href="/ja/docs/Web/Accessibility/ARIA/Roles/presentation_role"><code>presentation</code></a>
      </td>
    </tr>
    <tr>
      <th scope="row">DOM インターフェイス</th>
      <td>{{domxref("HTMLIFrameElement")}}</td>
    </tr>
  </tbody>
</table>

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [プライバシー、アクセス制限、情報セキュリティ](/ja/docs/Web/Privacy)
