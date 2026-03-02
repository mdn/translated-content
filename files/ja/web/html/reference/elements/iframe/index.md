---
title: "<iframe>: インラインフレーム要素"
slug: Web/HTML/Reference/Elements/iframe
l10n:
  sourceCommit: 0754cd805a8e010d2e3a2a065f634a3bcf358252
---

**`<iframe>`** は [HTML](/ja/docs/Web/HTML) の要素で、入れ子になった{{Glossary("browsing context", "閲覧コンテキスト")}}を表現し、現在の HTML ページに別のページを埋め込むことができます。

{{InteractiveExample("HTML デモ: &lt;iframe&gt;", "tabbed-standard")}}

```html interactive-example
<iframe
  id="inlineFrameExample"
  title="Inline Frame Example"
  width="300"
  height="200"
  src="https://www.openstreetmap.org/export/embed.html?bbox=-0.004017949104309083%2C51.47612752641776%2C0.00030577182769775396%2C51.478569861898606&amp;layer=mapnik">
</iframe>
```

```css interactive-example
iframe {
  border: 1px solid black;
  width: 100%; /* HTML の width 属性で設定された幅よりも優先する */
}
```

それぞれの閲覧コンテキストにはそれぞれの[文書](/ja/docs/Web/API/Document)があり、URL でナビゲーションができます。それぞれの埋め込み閲覧コンテキストのナビゲーションは、最上位の閲覧コンテキストの[セッション履歴](/ja/docs/Web/API/History)で直線化されます。他の閲覧コンテキストを埋め込んでいる閲覧コンテキストは、_親閲覧コンテキスト_ と呼ばれます。_最上位_ の閲覧コンテキスト（親を持たないもの）は、通常はブラウザーのウィンドウで、 {{domxref("Window")}} オブジェクトで表されます。

> [!WARNING]
> それぞれの閲覧コンテキストは完全な文書環境であるため、ページの中で `<iframe>` を使用するごとに、必要となるメモリーやその他の計算リソースが増加します。理論的には好きなだけ `<iframe>` を使用することができますが、パフォーマンスの問題を確認してください。

## 属性

この要素には[グローバル属性](/ja/docs/Web/HTML/Reference/Global_attributes)があります。

- `allow`
  - : [権限ポリシー](/ja/docs/Web/HTTP/Guides/Permissions_Policy)を `<iframe>` に指定します。このポリシーは、 `<iframe>` が利用可能な機能（例：マイク、カメラ、バッテリー、ウェブ共有 API へのアクセスなど）をリクエストのオリジンに基づいて定義します。

    例については、`Permissions-Policy` のトピックの [iframes](/ja/docs/Web/HTTP/Reference/Headers/Permissions-Policy#iframes) を参照してください。

    > [!NOTE]
    > `allow` 属性で指定され権限ポリシーは {{httpheader("Permissions-Policy")}} ヘッダーで指定されたポリシーの上に、さらに制限を実装するものです。置き換えるものではありません。

- `allowfullscreen`
  - : この `<iframe>` が {{domxref("Element.requestFullscreen", "requestFullscreen()")}} を呼び出して全画面モードにすることができる場合は、 `true` に設定します。

    > [!NOTE]
    > この属性は古い属性とみなされており、 `allow="fullscreen"` として再定義されました。

- `allowpaymentrequest` {{deprecated_inline}} {{non-standard_inline}}
  - : 異なるオリジンの `<iframe>` で [決済リクエスト API](/ja/docs/Web/API/Payment_Request_API) の実行を許可する場合は `true` に設定します。

    > [!NOTE]
    > この属性は古い属性とみなされており、 `allow="payment"` として再定義されました。

- `browsingtopics` {{Experimental_Inline}} {{non-standard_inline}}
  - : 論理属性で、表示されている場合、現在のユーザーの選択されたトピックを `<iframe>` のソースのリクエストと共に送信することを指定します。詳細は、[トピック API の使用](/ja/docs/Web/API/Topics_API/Using)を参照してください。

- `credentialless` {{Experimental_Inline}}
  - : `true` に設定すると `<iframe>` を無信頼であることを示します。 つまり、そのコンテンツは新しい、一時的なコンテキストで読み込まれることになります。これはそのオリジンに関連するネットワーク、クッキー、ストレージデータへのアクセス権がありません。最上位の文書の存続期間に依存する新しいコンテキストを使用します。その代わりに {{httpheader("Cross-Origin-Embedder-Policy")}} (COEP) 埋め込みルールは解除され、COEP を設定した文書はそうでない第三者の文書を埋め込むことができるようになります。詳しくは[無信頼の iframe](/ja/docs/Web/HTTP/Guides/IFrame_credentialless) を参照してください。

- `csp` {{experimental_inline}}
  - : 埋め込みリソースを制限する[コンテンツセキュリティポリシー](/ja/docs/Web/HTTP/Guides/CSP)です。詳しくは {{domxref("HTMLIFrameElement.csp")}} をご覧ください。

- `height`
  - : フレームの高さを CSS ピクセル数で示します。既定値は `150` です。
- `loading`
  - : ブラウザーが iframe をどのように読み込むかを示します。
    - `eager`
      - : ページ読み込み時に、直ちに iframe を読み込みます（これが既定値です）。
    - `lazy`
      - : ブラウザーで定義された{{glossary("visual viewport", "視覚的ビューポート")}}からの計算された距離に達するまで iframe の読み込みを延期します。
        その目的は、ブラウザーがフレームを使用すると合理的に確信できるまで、フレームの取得に必要なネットワークとストレージの帯域幅を使用しないようにすることです。
        これにより、ほとんどの典型的な使用用途において、特に初期ページの読み込み時点が縮小され、パフォーマンスとコストが改善されます。

        > [!NOTE]
        > JavaScript が有効な場合のみ、読み込みが遅延されます。
        > これはトラッキング対策です。

- `name`
  - : 埋め込み閲覧コンテキストのターゲットの名前です。 {{HTMLElement("a")}}, {{HTMLElement("form")}}, {{HTMLElement("base")}} 要素における `target` 属性の値、 {{HTMLElement("input")}} や {{HTMLElement("button")}} 要素における `formtarget` 属性の値、 {{domxref("Window.open()","window.open()")}} メソッドの `windowName` 引数の値として使用することができます。さらに、この名前は {{domxref("Window")}} および {{domxref("Document")}} プロパティとなり、埋め込まれたウィンドウや要素自身への参照が入ります。
- `referrerpolicy`
  - : フレームのリソースにアクセスする際にどの[リファラー](/ja/docs/Web/API/Document/referrer)を送信するかを示します。
    - `no-referrer`
      - : {{HTTPHeader("Referer")}} ヘッダーを送信しません。
    - `no-referrer-when-downgrade`
      - : {{HTTPHeader("Referer")}} ヘッダーは {{Glossary("TLS")}} ({{Glossary("HTTPS")}}) のない{{Glossary("origin", "オリジン")}}には送信しません。
    - `origin`
      - : 送信するリファラーを、参照しているページのオリジン（[スキーム](/ja/docs/Learn_web_development/Howto/Web_mechanics/What_is_a_URL)、{{Glossary("host", "ホスト名")}}、{{Glossary("port", "ポート番号")}}）に限定します。
    - `origin-when-cross-origin`
      - : 他のオリジンへ送信されるリファラーは、スキーム、ホスト名、ポート番号のみにします。同じオリジンへの移動では、パスも含めます。
    - `same-origin`
      - : リファラーは{{Glossary("Same-origin policy", "同じオリジン")}}には送信しますが、異なるオリジンへのリクエストにはリファラー情報を送信しません。
    - `strict-origin`
      - : プロトコルのセキュリティ水準が同じ (HTTPS→HTTPS) である場合は、文書のオリジンのみをリファラーとして送信しますが、宛先の安全性が劣る場合 (HTTPS→HTTP) には送信しません。
    - `strict-origin-when-cross-origin` （既定値）
      - : 同じオリジンへのリクエストには URL 全体を送信し、プロトコルのセキュリティ水準が同じ (HTTPS→HTTPS) である場合は、文書のオリジンのみをリファラーとして送信し、宛先の安全性が劣る場合 (HTTPS→HTTP) にはヘッダーを送信しません。
    - `unsafe-url`
      - : リファラーにオリジンおよびパスを含めます（ただし、[フラグメント](/ja/docs/Web/API/HTMLAnchorElement/hash)、[パスワード](/ja/docs/Web/API/HTMLAnchorElement/password)、[ユーザー名](/ja/docs/Web/API/HTMLAnchorElement/username)は含めません）。オリジンやパスの情報が TLS で保護されたリソースから安全性の劣るオリジンへ漏えいしますので、**これは安全ではありません**。

- `sandbox`
  - : `<iframe>` に埋め込まれたコンテンツに適用される制限を制御します。フレーム内のコンテンツに追加の制約を適用します。この属性の値は、空にするとすべての制約を適用し、空白区切りのトークンにすると特定の制約を外します。
    - `allow-downloads`
      - : [download](/ja/docs/Web/HTML/Reference/Elements/a#download) 属性を持つ {{HTMLElement("a")}} または {{HTMLElement("area")}} 要素を通して、またファイルのダウンロードにつながるナビゲーションを通してファイルのダウンロードを可能にします。これは、ユーザーがリンクをクリックしたか、JS コードがユーザーとの対話なしに開始したかに関係なく、動作します。
    - `allow-forms`
      - : ページがフォームを送信することを許可します。このキーワードを使用しない場合、フォームは通常通り表示されますが、フォームを送信しても入力の検証、ウェブサーバーへのデータ送信、ダイアログの終了が行われません。
    - `allow-modals`
      - : ページが {{domxref("Window.alert()")}}, {{domxref("Window.confirm()")}}, {{domxref("Window.print()")}}, {{domxref("Window.prompt()")}} によってモーダルウィンドウを開くことができるようにしますが、 {{HTMLElement("dialog")}} は、このキーワードに関わらず開くことが可能です。また、ページが {{domxref("BeforeUnloadEvent")}} イベントを受信することができるようにもします。
    - `allow-orientation-lock`
      - : リソースが[画面の向きをロック](/ja/docs/Web/API/Screen/lockOrientation)することができるようにします。
    - `allow-pointer-lock`
      - : リソースが[ポインターロック API](/ja/docs/Web/API/Pointer_Lock_API) を使用できるようにします。
    - `allow-popups`
      - : ポップアップ（{{domxref("Window.open()")}}、`target="_blank"` などで作成されたもの）を許可します。このキーワードが使用されていない場合、その機能は静かに失敗します。
    - `allow-popups-to-escape-sandbox`
      - : サンドボックス化された文書が、サンドボックス化フラグを強制することなく、新しい閲覧コンテキストを開くことができるようにします。これにより、例えばサードパーティ広告を、その広告がリンクしているページに同じ制限を強いることなく、安全にサンドボックス化することができます。このフラグが記載されていない場合、リダイレクトされたページ、ポップアップウィンドウ、新しいタブは元の `<iframe>` と同じサンドボックスの制限を受けることになります。
    - `allow-presentation`
      - : 埋め込み側が、 iframe が[プレゼンテーションセッション](/ja/docs/Web/API/PresentationRequest)を開始できるかどうかを制御することを許可します。
    - `allow-same-origin`
      - : このトークンが使用されていない場合、リソースは{{Glossary("same-origin policy", "同一オリジンポリシー")}}に常に失敗する特別なオリジンからのものとして扱われます（潜在的に[データストレージやクッキー](/ja/docs/Web/Security/Defenses/Same-origin_policy#オリジンをまたいだデータストレージアクセス)へのアクセスや一部の JavaScript API の使用を阻止することがあります）。
    - `allow-scripts`
      - : ページがスクリプトを実行することを許可します（ただし、ポップアップウィンドウは作成しません）。このキーワードが使用されない場合、この操作は許可されません。
    - `allow-storage-access-by-user-activation` {{experimental_inline}}
      - : `<iframe>` で読み込んだ文書が{{domxref("Storage Access API", "ストレージアクセス API", "", "nocode")}} を使用して、分離されていないクッキーへのアクセスをリクエストできるようにします。
    - `allow-top-navigation`
      - : リソースが最上位の閲覧コンテキスト（`_top` という名前のもの）に移動できるようにします。
    - `allow-top-navigation-by-user-activation`
      - : リソースが最上位の閲覧コンテキストに移動できるようにしますが、ユーザーの操作によって開始されたものに限ります。
    - `allow-top-navigation-to-custom-protocols`
      - : ブラウザーに組み込まれている、または[ウェブサイトによって登録された](/ja/docs/Web/API/Navigator/registerProtocolHandler) `http` 以外のプロトコルへのナビゲーションを可能にします。この機能は `allow-popups` や `allow-top-navigation` キーワードでも有効になります。

    > [!NOTE]
    >
    > - 埋め込まれた文書のオリジンが埋め込み先のページと同じである場合、 `allow-scripts` と `allow-same-origin` を同時に使用すると、埋め込まれた文書から `sandbox` 属性を削除することができるようになるため、**絶対に避けるべき**です。 `sandbox` 属性をまったく使用しないよりも安全性が低下します。
    > - 攻撃者がサンドボックス化した `iframe` の外側にコンテンツを表示することができる場合、サンドボックス化は無意味です。例えば、閲覧者がフレームを新しいタブで開く場合などです。潜在的なダメージを抑えるため、そうしたコンテンツは別のオリジンから提供するようにもしてください。

    > [!NOTE]
    > ユーザーをリダイレクトするとき、ポップアップウィンドウを開くとき、または `sandbox` 属性を持つ `<iframe>` 内に埋め込まれたページから新しいタブを開くとき、新しい閲覧コンテキストは同じ `sandbox` の制限に従います。例えば、`sandbox="allow-forms"`または`sandbox="allow-popups-to-escape-sandbox"` 属性が設定されていない`<iframe>`内に埋め込まれたページが別個のタブで新しいサイトを開いた場合、その新しい閲覧コンテキストでのフォーム送信は静かに失敗します。

- `src`
  - : 埋め込むページの URL です。[同一オリジンポリシー](/ja/docs/Web/Security/Defenses/Same-origin_policy#オリジンの継承)に従う空白ページを埋め込む場合は、 `about:blank` の値を使用してください。また、プログラムから `<iframe>` の src 属性を削除すると (例えば {{domxref("Element.removeAttribute()")}} などで)、 Firefox (バージョン 65 以降)、 Chromium ベースのブラウザー、 Safari/iOS では `about:blank` が読み込まれます。

    > [!NOTE]
    > `about:blank` ページは、アンカーリンクなどの相対 URL を解決するときに、埋め込み文書の URL をベース URL として使用します。

- `srcdoc`
  - : 埋め込むインライン HTML で、 `src` 属性を上書きします。そのコンテンツは完全な HTML 文書の構文に従う必要があります。この構文には doctype ディレクティブ、`<html>`、`<body>` タグなどが含まれますが、そのほとんどは省略して body のコンテンツだけにすることができます。この文書は位置が `about:srcdoc` となります。ブラウザーが `srcdoc` 属性に対応していない場合は、 `src` 属性の URL で代替されます。

    > [!NOTE]
    > `about:srcdoc` ページは、アンカーリンクなどの相対 URL を解決するときに、埋め込み文書の URL をベース URL として使用します。

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
    - `auto`
      - : フレームの内容が、フレームの寸法よりも大きい場合のみ。
    - `yes`
      - : 常にスクロールバーを表示する。
    - `no`
      - : スクロールバーを一切表示しない。

## スクリプト操作

インラインフレームは、{{HTMLElement("frame")}} 要素のように {{domxref("window.frames")}} 擬似配列に入ります。

DOM の {{domxref("HTMLIFrameElement")}} オブジェクトでは、スクリプトはフレーム化されたリソースの {{domxref("window")}} オブジェクトに {{domxref("HTMLIFrameElement.contentWindow", "contentWindow")}} プロパティを使ってアクセスすることができます。 {{domxref("HTMLIFrameElement.contentDocument", "contentDocument")}} プロパティは `iframe` の内側の `document` 要素を参照します (`contentWindow.document` と等価です)。

スクリプトは、フレームの内側からは {{domxref("window.parent")}} で親ウィンドウを参照できます。

フレームの内容にアクセスするスクリプトは、[同一オリジンポリシー](/ja/docs/Web/Security/Defenses/Same-origin_policy)に従います。別なオリジンから読み込まれたスクリプトは、フレーム内のスクリプトがフレームの親にアクセスする場合を含め、他の `window` オブジェクトのほとんどのプロパティにアクセスできません。オリジンをまたいだやりとりは {{domxref("Window.postMessage()")}} を使用して実現できます。

## 位置指定と表示倍率

{{ glossary("replaced elements", "置換要素")}}であるため、 `<iframe>` 要素のボックス内における埋め込み文書の位置は、 {{cssxref("object-position")}} プロパティで設定することができます。

> [!NOTE]
> {{cssxref("object-fit")}} プロパティは、`<iframe>` 要素には効果がありません。

## `error` および `load` イベントの動作

`<iframe>` で発生する `error` イベントと `load` イベントを使用すると、ローカルネットワークの HTTP サーバーの URL 空間を推測することができる可能性があります。そのため、セキュリティ対策として、ユーザーエージェントは `<iframe>` に対して [error](/ja/docs/Web/API/HTMLElement/error_event) イベントを発生させず、`<iframe>` のコンテンツの読み込みに失敗しても、常に [load](/ja/docs/Web/API/HTMLElement/load_event) イベントが発生します。

## アクセシビリティ

読み上げソフトのような支援技術を利用して操作している人は、 `<iframe>` 上の [`title` 属性](/ja/docs/Web/HTML/Reference/Global_attributes/title)を使用して内容をラベル付けします。 title の値で埋め込みコンテンツを正確に説明してください。

```html
<iframe
  title="Wikipedia page for Avocados"
  src="https://en.wikipedia.org/wiki/Avocado"></iframe>
```

この title がないと、埋め込みコンテンツが何であるかを特定するために `<iframe>` の内容に移動しなければならなくなります。このコンテキストの移動は、特に複数の `<iframe>` が存在するページや、動画や音楽などの対話型コンテンツが埋め込まれているページでは、混乱を招き、時間のかかる作業になる可能性があります。

## 例

### 基本的な \<iframe>

この例では、<https://example.org> のページを `<iframe>` で埋め込みます。これは iframe の一般的な用途で、他のサイトのコンテンツを埋め込むことです。例えば、ライブサンプル自体も、一番上の[試してみましょう](#試してみましょう)の例も、他の MDN サイトのコンテンツを `<iframe>` で埋め込んでいます。

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

{{ EmbedLiveSample('A_basic_iframe', 640,400)}}

### \<iframe> 内へのソースコードの埋め込み

この例では、iframe 内のソースコードを直接レンダリングしています。これは `sandbox` 属性と組み合わせることで、ユーザー生成コンテンツを表示する際にスクリプトインジェクションを防ぐテクニックとして使用することができます。

`srcdoc` を使用する場合、埋め込みコンテンツ内の相対 URL は埋め込みページの URL からの相対 URL で解決することに注意してください。埋め込みコンテンツ内の場所を指すアンカーリンクを使用したい場合は、ベース URL として `about:srcdoc` を明示的に指定する必要があります。

#### HTML

```html-nolint
<article>
  <footer>9 分前の <i>jc</i> の投稿</footer>
  <iframe
    sandbox
    srcdoc="<p><code>iframe</code> 要素を使用する方法は 2 つあります。</p>
<ol>
<li><a href=&quot;about:srcdoc#embed_another&quot;>他のページからコンテンツを埋め込む</a></li>
<li><a href=&quot;about:srcdoc#embed_user&quot;>ユーザーが生成したコンテンツを埋め込む</a></li>
</ol>
<h2 id=&quot;embed_another&quot;>他のページからコンテンツを埋め込む</h2>
<p><code>src</code> 属性を使用して、埋め込むページの URL　を指定します。</p>
<pre><code>&amp;lt;iframe src=&quot;https://example.org&quot;&amp;gt;&amp;lt;/iframe&amp;gt;</code></pre>
<h2 id=&quot;embed_user&quot;>ユーザーが生成したコンテンツを埋め込む</h2>
<p><code>srcdoc</code> 属性を使用して、埋め込むコンテンツを指定します。この投稿がすでにその例です。</p>
"
    width="500"
    height="250"
></iframe>
</article>
```

`srcdoc` を使用する際のエスケープシーケンスの書き方を説明します。

- 最初に、通常の HTML 文書内でエスケープするようなもの（`<`、`>`、`&`など）をエスケープして HTML を書き出します。
- `srcdoc` 属性では `&lt;` と `<` は全く同じ文字を表します。したがって、HTML 文書内の実際のエスケープシーケンスにするには、アンパサンド (`&`) を`&amp;`に置き換えます。例えば、`&lt;` は `&amp;lt;`になり、`&amp;` は `&amp;amp;` になります。
- 二重引用符 (`"`) を `&quot;` に置き換えて `srcdoc` 属性が早期に終了しないようにします（ `'` を使用する場合は `'` を `&apos;` に置き換えてください）。この段階は前回の後に行われるので、この段階で生成された `&quot;` は `&amp;quot;` にはなりません。

#### 結果

{{ EmbedLiveSample('Embedding_source_code_in_an_iframe', 640, 300)}}

## 技術的概要

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">
        <a href="/ja/docs/Web/HTML/Guides/Content_categories"
          >コンテンツカテゴリー</a
        >
      </th>
      <td>
        <a href="/ja/docs/Web/HTML/Guides/Content_categories#フローコンテンツ"
          >フローコンテンツ</a
        >,
        <a href="/ja/docs/Web/HTML/Guides/Content_categories#記述コンテンツ"
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
      <td>なし。開始タグと終了タグの両方が必須です。</td>
    </tr>
    <tr>
      <th scope="row">許可されている親要素</th>
      <td>埋め込みコンテンツを受け入れるすべての要素。</td>
    </tr>
    <tr>
      <th scope="row">暗黙の ARIA ロール</th>
      <td>
        <a href="https://w3c.github.io/html-aria/#dfn-no-corresponding-role"
          >対応するロールなし</a
        >
      </td>
    </tr>
    <tr>
      <th scope="row">許可されている ARIA ロール</th>
      <td>
        <a href="/ja/docs/Web/Accessibility/ARIA/Reference/Roles/application_role"><code>application</code></a>, <a href="/ja/docs/Web/Accessibility/ARIA/Reference/Roles/document_role"><code>document</code></a>,
        <a href="/ja/docs/Web/Accessibility/ARIA/Reference/Roles/img_role"><code>img</code></a>, <a href="/ja/docs/Web/Accessibility/ARIA/Reference/Roles/none_role"><code>none</code></a>,
        <a href="/ja/docs/Web/Accessibility/ARIA/Reference/Roles/presentation_role"><code>presentation</code></a>
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

- [CSP: frame-ancestors](/ja/docs/Web/HTTP/Reference/Headers/Content-Security-Policy/frame-ancestors)
- [プライバシー、アクセス制限、情報セキュリティ](/ja/docs/Web/Privacy)
