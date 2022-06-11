---
title: '<a>: アンカー要素'
slug: Web/HTML/Element/a
tags:
  - コンテンツ
  - 要素
  - HTML
  - HTML テキストレベルの意味づけ
  - HTML:フローコンテンツ
  - HTML:対話的コンテンツ
  - HTML:知覚可能コンテンツ
  - HTML:記述コンテンツ
  - インライン要素
  - リファレンス
  - ウェブ
browser-compat: html.elements.a
translation_of: Web/HTML/Element/a
---

{{HTMLRef}}

**`<a>`** は [HTML](/ja/docs/Web/HTML) の要素（*アンカー*要素）で、 [`href` 属性](#attr-href)を用いて、別のウェブページ、ファイル、メールアドレス、同一ページ内の場所、または他の URL へのハイパーリンクを作成します。

`<a>` の内容は、リンク先を示すもの**であるべきです**。 `href` 属性が存在する場合、 `<a>` 要素にフォーカスがある状態で Enter キーを押すと起動します。

{{EmbedInteractiveExample("pages/tabbed/a.html")}}

## 属性

この要素には[グローバル属性](/ja/docs/Web/HTML/Global_attributes)があります。

- {{HTMLAttrDef("download")}}

  - : ブラウザーがリンクされた URL をダウンロードとして扱うようにします。値があってもなくても構いません。

    - 値がない場合は、ブラウザーは様々なソースから生成されたファイル名/拡張子を提案します。

      - HTTP の {{HTTPHeader("Content-Disposition")}} ヘッダー
      - URL の[パス](/ja/docs/Web/API/URL/pathname)の最後の部分
      - {{Glossary("MIME_type", "メディア種別")}} ({{HTTPHeader("Content-Type")}} ヘッダー、 [`data:` URL](/ja/docs/Web/HTTP/Basics_of_HTTP/Data_URIs) の先頭、 [`blob:` URL](/ja/docs/Web/API/URL/createObjectURL) の {{domxref("Blob.type")}} から)

    - 値を定義すると、ファイル名として提案します。 `/` および `\` はアンダースコアに変換されます。ファイルシステムがファイル名に禁止している文字は他にもあるかもしれませんので、ブラウザーは必要に応じてファイル名を調整します。

    > **Note:**
    >
    > - `download` は[同一オリジンの URL](/ja/docs/Web/Security/Same-origin_policy) と、 `blob:`、 `data:` の各スキームでのみ動作します。
    > - ブラウザーがダウンロードをどのように扱うかは、ブラウザー、ユーザーの設定、その他の要因によって異なります。ダウンロードを開始する前にユーザーにプロンプトが表示されたり、ファイルが自動的に保存されたり、外部のアプリケーションまたはブラウザー自体で自動的に開いたりすることがあります。
    > - `Content-Disposition` ヘッダーが `download` とは異なる情報を持っていた場合、動作結果は様々です。
    >   - ヘッダーが `filename` を指定した場合、そちらが `download` 属性で指定されたファイル名より優先されます。
    >   - ヘッダーが `inline` の処分を指定している場合、 Chrome や Firefox 82 以降のバージョンでは、属性を優先してダウンロードとして扱います。Firefox の（82 以前の）古い版では、ヘッダーが優先され、コンテンツがインラインで表示されます。

- {{HTMLAttrDef("href")}}

  - : ハイパーリンクが指す先の URL です。リンクは HTTP ベースの URL に限定されません。ブラウザーが対応するあらゆるプロトコルを使用することができます。

    - ページの節を示すフラグメント URL
    - メディアファイルの一部を示すメディアフラグメント
    - 電話番号を示す `tel:` URL
    - メールアドレスを示す `mailto:` URL
    - ウェブブラウザーがその他の URL スキームに対応していない可能性がある場合、ウェブサイトは [`registerProtocolHandler()`](/ja/docs/Web/API/Navigator/registerProtocolHandler) を使用することができます。

- {{HTMLAttrDef("hreflang")}}
  - : リンク先の URL における自然言語のヒントです。組み込まれている機能はありません。許容される値は、 [`lang` グローバル属性](/ja/docs/Web/HTML/Global_attributes/lang)と同じです。
- {{HTMLAttrDef("ping")}}
  - : 空白で区切られた URL のリストです。リンクをたどるとき、ブラウザーは {{HTTPMethod("POST")}} リクエストを指定された URL に、 `PING` を本文として送信します。通常、トラッキングに使用されます。
- {{HTMLAttrDef("referrerpolicy")}}

  - : リンクをたどるときにどれだけの[リファラー](/ja/docs/Web/HTTP/Headers/Referer)を送信するかです。

    - `no-referrer`: {{HTTPHeader("Referer")}} ヘッダーは送信されません。
    - `no-referrer-when-downgrade`: {{HTTPHeader("Referer")}} ヘッダーは{{Glossary("origin", "オリジン")}}に {{Glossary("TLS")}} ({{Glossary("HTTPS")}}) がない場合は送信されません。
    - `origin`: 送信されるリファラーは、参照元ページのオリジンのみに限定されます。すなわち[スキーム](/ja/docs/Learn/Common_questions/What_is_a_URL)、{{Glossary("host", "ホスト名")}}、{{Glossary("port", "ポート番号")}}です。
    - `origin-when-cross-origin`: 他のオリジンに送信されるリファラーは、スキーム、ホスト名、ポート番号に限定されます。同じオリジン内での移動の場合はパスが含まれます。
    - `same-origin`: リファラーは{{Glossary("Same-origin policy", "同じオリジン")}}には送られますが、オリジン間リクエストではリファラー情報が含まれません。
    - `strict-origin`: プロトコルのセキュリティ水準が同じである場合 (HTTPS→HTTPS) は、文書のオリジンのみが送信されますが、安全性が下がる移動先 (HTTPS→HTTP) には送信しません。
    - `strict-origin-when-cross-origin` (default): 同一オリジンへのリクエストを行う際には URL 全体が送信され、プロトコルのセキュリティ水準が同じである場合 (HTTPS→HTTPS) はオリジンのみが送信されますが、安全性が下がる移動先 (HTTPS→HTTP) には送信されません。
    - `unsafe-url`: リファラーにはオリジン*および*パスが含まれます（ただし[フラグメント](/ja/docs/Web/API/HTMLAnchorElement/hash)、[パスワード](/ja/docs/Web/API/HTMLAnchorElement/password)、[ユーザー名](/ja/docs/Web/API/HTMLAnchorElement/username)は含まれません）。**この値は安全ではありません**。オリジンとパスを TLS で保護されたリソースから安全ではないオリジンに漏洩させるからです。

- {{HTMLAttrDef("rel")}}
  - : リンク先の URL との関係を示す、空白で区切られた[リンク種別](/ja/docs/Web/HTML/Link_types)のリストです。
- {{HTMLAttrDef("target")}}

  - : リンク先の URL を表示する場所、*閲覧コンテキスト*（タブ、ウィンドウ、{{HTMLElement("iframe")}}）の名前で指定します。以下のキーワードは URL の読み込み先について特別な意味を持ちます。

    - `_self`: 現在の閲覧コンテキストです。（既定値）
    - `_blank`: ふつうは新しいタブですが、新しいウィンドウを使用するようにブラウザーを設定できます。
    - `_parent`: 現在の親の閲覧コンテキストです。親がない場合は、 `_self` と同じ振る舞いをします。
    - `_top`: 最上位の閲覧コンテキスト（現在のコンテキストの祖先である "最上位" のコンテキスト）です。親の閲覧コンテキストがない場合は、 `_self` と同じ動作をします。

    > **Note:** `target="_blank"` を `<a>` 要素に設定すると、暗黙的に `rel` の動作は [`rel="noopener"`](/ja/docs/Web/HTML/Link_types/noopener) が設定されたかのように動作し、 `window.opener` を設定しません。対応状況については[ブラウザーの互換性](#ブラウザーの互換性)を参照してください。

- {{HTMLAttrDef("type")}}
  - : リンク先 URL の {{Glossary("MIME type", "MIME タイプ")}}の形式を表すヒントです。組み込まれている機能はありません。

### 廃止された属性

- {{HTMLAttrDef("charset")}}{{Deprecated_Inline}}

  - : リンク先 URL の{{Glossary("character encoding", "文字エンコーディング")}}のヒントでした。

    > **Note:** この属性は廃止されており、**ページ作者が使用すべきではありません**。リンク先の URL で HTTP の {{HTTPHeader("Content-Type")}} ヘッダーを使用してください。

- {{HTMLAttrDef("coords")}}{{Deprecated_Inline}}
  - : [`shape` 属性](#shape)とともに使用されます。カンマ区切りの座標のリストです。
- {{HTMLAttrDef("name")}}{{Deprecated_Inline}}

  - : ページ内のリンク先の場所を定義するアンカーで必要でした。 HTML 4.01 では、値がまったく同じであれば `id` 属性と `name` 属性を `<a>` 要素内で同時に使用できました。

    > **Note:** 代わりにグローバル属性の {{HTMLAttrxRef("id")}} を使用してください。

- {{HTMLAttrDef("rev")}}{{Deprecated_Inline}}
  - : この属性は、逆方向のリンクを指定します。 [`rel` 属性](#rel)と逆の関係を定義していました。これはとても紛らわしいため、非推奨になりました。
- {{HTMLAttrDef("shape")}}{{Deprecated_Inline}}

  - : イメージマップ内のハイパーリンクの領域の形状です。

    > **Note:** イメージマップについては {{HTMLElement("area")}} 要素を使用してください。

## プロパティ

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">
        <a href="/ja/docs/Web/Guide/HTML/Content_categories"
          >コンテンツカテゴリー</a
        >
      </th>
      <td>
        <a href="/ja/docs/Web/Guide/HTML/Content_categories#flow_content"
          >フローコンテンツ</a
        >,
        <a href="/ja/docs/Web/Guide/HTML/Content_categories#phrasing_content"
          >記述コンテンツ</a
        >,
        <a
          href="/ja/docs/Web/Guide/HTML/Content_categories#interactive_content"
          >対話型コンテンツ</a
        >、知覚可能コンテンツ。
      </td>
    </tr>
    <tr>
      <th scope="row">許可されている内容</th>
      <td>
        <a href="/ja/docs/Web/Guide/HTML/Content_categories#transparent_content_model">透過的コンテンツ</a>、ただし子孫に<a href="/ja/docs/Web/Guide/HTML/Content_categories#interactive_content">対話型コンテンツ</a> または <a href="/ja/docs/Web/HTML/Element/a">a</a> 要素をがないもの、および <a href="/ja/docs/Web/HTML/Global_attributes/tabindex">tabindex</a> 属性が指定された子孫がないもの。
      </td>
    </tr>
    <tr>
      <th scope="row">タグの省略</th>
      <td>{{no_tag_omission}}</td>
    </tr>
    <tr>
      <th scope="row">許可されている親要素</th>
      <td>
        <a href="/ja/docs/Web/Guide/HTML/Content_categories#phrasing_content">記述コンテンツ</a>を受け入れるすべての要素、または<a href="/ja/docs/Web/Guide/HTML/Content_categories#flow_content">フローコンテンツ</a>を受け入れるすべての要素、ただし他の <code>&#x3C;a></code> 要素でないもの。
      </td>
    </tr>
    <tr>
      <th scope="row">暗黙の ARIA ロール</th>
      <td>
        {{ARIARole("link")}} （<code>href</code> 属性がある場合）、
        それ以外は<a href="https://www.w3.org/TR/html-aria/#dfn-no-corresponding-role">対応するロールなし</a>
      </td>
    </tr>
    <tr>
      <th scope="row">許可されている ARIA ロール</th>
      <td>
        <p><code>href</code> 属性がある場合</p>
        <ul>
          <li>{{ARIARole("button")}}</li>
          <li>{{ARIARole("checkbox")}}</li>
          <li>{{ARIARole("menuitem")}}</li>
          <li>{{ARIARole("menuitemcheckbox")}}</li>
          <li>{{ARIARole("menuitemradio")}}</li>
          <li>{{ARIARole("option")}}</li>
          <li>{{ARIARole("radio")}}</li>
          <li>{{ARIARole("switch")}}</li>
          <li>{{ARIARole("tab")}}</li>
          <li>{{ARIARole("treeitem")}}</li>
        </ul>
        <p><code>href</code> 属性がない場合</p>
        <ul>
          <li>すべて</li>
        </ul>
      </td>
    </tr>
    <tr>
      <th scope="row">DOM インターフェイス</th>
      <td>{{DOMxRef("HTMLAnchorElement")}}</td>
    </tr>
  </tbody>
</table>

## 例

### 絶対 URL へのリンク

#### HTML

```html
<a href="https://www.mozilla.com">
  Mozilla
</a>
```

#### 結果

{{EmbedLiveSample('Linking_to_an_absolute_URL')}}

### 相対 URL へのリンク

#### HTML

```html
<a href="//example.com">Scheme-relative URL</a>
<a href="/ja/docs/Web/HTML">Origin-relative URL</a>
<a href="./p">Directory-relative URL</a>
```

```css hidden
a { display: block; margin-bottom: 0.5em }
```

#### 結果

{{EmbedLiveSample('Linking_to_relative_URLs')}}

### 同じページの要素へのリンク

```html
<!-- <a> element links to the section below -->
<p><a href="#Section_further_down">
  Jump to the heading below
</a></p>

<!-- Heading to link to -->
<h2 id="Section_further_down">Section further down</h2>
```

> **Note:** `href="#top"` または空のフラグメント (`href="#"`) を使用すると、現在のページの先頭にリンクすることができると、 [HTML 仕様書で定義されています](https://html.spec.whatwg.org/multipage/browsing-the-web.html#scroll-to-the-fragment-identifier)。

### メールアドレスへのリンク

メールプログラムを開いて新しいメッセージを送るようにするリンクを作成するには、 `mailto:` スキームを使用してください。

```html
<a href="mailto:nowhere@mozilla.org">Send email to nowhere</a>
```

件名、本文、他の定義済みコンテンツを含めるなど、`mailto` URL スキームの詳細については、[電子メールのリンク](/ja/docs/Learn/HTML/Introduction_to_HTML/Creating_hyperlinks#e-mail_links)または {{RFC(6068)}} をご覧ください。

### 電話番号へのリンク

```html
<a href="tel:+49.157.0156">+49 157 0156</a>
<a href="tel:+1(555)5309">(555) 5309</a>
```

`tel:` リンクは端末の能力によって様々な動作をします。

  - 携帯電話ではその番号に自動ダイヤルします。
  - 多くのオペレーティングシステムには、 Skype や FaceTime のように電話をかけるプログラムがあります。
  - ウェブサイトは {{domxref("Navigator/registerProtocolHandler", "registerProtocolHandler")}} によって `web.skype.com` などを用いて電話を掛けることができます。
  - 他にも、連絡先の電話番号をしたり、他の端末へ電話番号を送信したりする動作があります。

`tel` URL スキームについての構文、追加機能、その他の詳細について、詳しくは {{RFC(3966)}} をご覧ください。

### download 属性を使用して \<canvas> を PNG として保存する

{{HTMLElement("canvas")}} 要素の内容を画像として保存する場合は、 `download` 属性をもつリンクを作成し、キャンバスのデータを `data:` URLで示します。

#### 保存リンクのついた描画アプリ

##### HTML

```html
<p>マウスボタンを押しっぱなしにして動かすと描画されます。
  <a href="" download="my_painting.png">絵をダウンロード</a>
</p>

<canvas width="300" height="300"></canvas>
```

##### CSS

```css
html {
  font-family: sans-serif;
}
canvas {
  background: #fff;
  border: 1px dashed;
}
a {
  display: inline-block;
  background: #69c;
  color: #fff;
  padding: 5px 10px;
}
```

##### JavaScript

```js
var canvas = document.querySelector('canvas'),
    c = canvas.getContext('2d');
c.fillStyle = 'hotpink';

function draw(x, y) {
  if (isDrawing) {
    c.beginPath();
    c.arc(x, y, 10, 0, Math.PI*2);
    c.closePath();
    c.fill();
  }
}

canvas.addEventListener('mousemove', event =>
  draw(event.offsetX, event.offsetY)
);
canvas.addEventListener('mousedown', () => isDrawing = true);
canvas.addEventListener('mouseup', () => isDrawing = false);

document.querySelector('a').addEventListener('click', event =>
  event.target.href = canvas.toDataURL()
);
```

##### 結果

{{EmbedLiveSample('Example_painting_app_with_save_link', '100%', '400')}}

## セキュリティとプライバシー

`<a>` 要素は、ユーザーのセキュリティやプライバシーに影響を及ぼす可能性があります。詳細情報については [`Referer` ヘッダー: プライバシーとセキュリティの考慮事項](/ja/docs/Web/Security/Referer_header:_privacy_and_security_concerns)を参照してください。

`target="_blank"` を [`rel="noreferrer"`](/ja/docs/Web/HTML/Link_types/noreferrer) や [`rel="noopener"`](/ja/docs/Web/HTML/Link_types/noopener) なしで使用すると、ウェブサイトが {{domxref("window.opener")}} API 搾取攻撃を受けやすくなります ([vulnerability description](https://www.jitbit.com/alexblog/256-targetblank---the-most-underestimated-vulnerability-ever/)) が、新しい版のブラウザーでは `target="_blank"` を設定すると、 `rel="noopener"` と同じ保護が提供されます。詳しくは[ブラウザーの互換性](#ブラウザーの互換性)を参照してください。

## アクセシビリティ

### 強力なリンクテキスト

リンクの内容は、文脈から外れたとしても、**リンクの行き先を示すべきです**。

#### アクセシビリティに対応していない貧弱なリンクテキスト

よくある残念な間違いは、「ここをクリック」や「こちら」のみにリンクを設定していることです。

```html example-bad
<p>
  私たちの製品については<a href="/products">こちら</a>をご覧ください。
</p>
```

#### 強力なリンクテキスト

幸いにも、これは簡単に直すことができ、しかもアクセシビリティに対応していないものより短くなります。

```html example-good
<p>
  <a href="/products">私たちの製品について</a>、詳しくご覧ください。
</p>
```

支援ソフトウェアには、ページ上のすべてのリンクを一覧表示するショートカットがあります。しかし、強力なリンクテキストはすべてのユーザーに利点があります。「すべてのリンクの一覧」のショートカットは、視力のあるユーザーがページを素早く見渡す方法を模倣しています。

### onclick イベント

よく見られる誤った使い方として、擬似的なボタンを作成するためにアンカー要素を使用し、 `href` を `#` または `javascript:void(0)` に設定してページの再読み込みを防ぎ、 `click` を待ち受けするようにするというものがあります。

これらの偽の `href` 値は、リンクをコピーまたはドラッグしたり、新しいやウィンドウでリンクを開いたり、ブックマークしたり、 JavaScript の読み込み中、エラー状態、無効状態の場合などに予期しない動作を引き起こします。また、読み上げソフトなどの支援技術に対して誤った意味を伝えることもあります。

代わりに {{HTMLElement("button")}} を使用してください。通常、**アンカーは適切な URL を使用して移動するためだけに使用するべきです**。

### 外部リンクおよび HTML 以外のリソースへのリンク

リンクを新しいタブやウィンドウで開くために `target="_blank"` を使用したり、ダウンロード元を指したりする場合は、リンクを起動したときに何が起こるかを示すようにしてください。

弱視で読み上げ技術の支援の下に操作を行っている人や、認知に問題がある人は、予期せず新しいタブ、ウィンドウ、アプリケーションが開いたときに混乱するかもしれません。古いバージョンの読み上げソフトウェアは、この動作をアナウンスしません。

#### 新しいタブやウィンドウを開くリンク

```html
<a target="_blank" href="https://www.wikipedia.org">
  Wikipedia (新しいウィンドウで開きます)
</a>
```

#### HTML 以外のリソースへのリンク

```html
<a href="2017-annual-report.ppt">
  2017 年次レポート (PowerPoint)
</a>
```

リンクの動作を示すためにアイコンを使用する場合は、 {{HTMLAttrxRef("alt", "img", "alt テキスト", "true") }}を確実に入れてください。

```html
<a  target="_blank" href="https://www.wikipedia.org">
  Wikipedia
  <img alt="(新しいタブで開く)" src="newtab.svg">
</a>

<a href="2017-annual-report.ppt">
  2017 年次レポート
  <img alt="(PowerPoint ファイル)" src="ppt-icon.svg">
</a>
```

- [WebAIM: Links and Hypertext - Hypertext Links](https://webaim.org/techniques/hypertext/hypertext_links)
- [MDN / WCAG を理解する、ガイドライン 3.2](/ja/docs/Web/Accessibility/Understanding_WCAG/Understandable#guideline_3.2_—_predictable_make_web_pages_appear_and_operate_in_predictable_ways)
- [G200: Opening new windows and tabs from a link only when necessary](https://www.w3.org/TR/WCAG20-TECHS/G200.html)
- [G201: Giving users advanced warning when opening a new window](https://www.w3.org/TR/WCAG20-TECHS/G201.html)

### スキップリンク

**スキップリンク**は {{HTMLElement("body")}} コンテンツのできるだけ先頭に近い場所に配置されるリンクであり、ページのメインコンテンツの先頭にリンクします。通常、 CSS はスキップリンクがフォーカスを受けるまでは画面外へ隠します。

```html
<body>
  <a href="#content" class="skip-link">メインコンテンツへスキップ</a>

  <header>
    …
  </header>

  <main id="content"> </main> <!-- スキップリンクが辿り着く位置 -->

</body>
```

```css
.skip-link {
  position: absolute;
  top: -3em;
  background: #fff;
}
.skip-link:focus {
  top: 0;
}
```

スキップリンクは、キーボードの利用者がヘッダーナビゲーションのような複数のページを通して繰り返されるコンテンツを回避できるようにするものです。

スキップリンクは、スイッチ制御、音声コマンド、またはマウススティック/ヘッドワンドなどの補助技術を使用して操作する人にとって、反復的にリンクを移動する操作が煩わしい場合に特に便利です。

- [WebAIM: "Skip Navigation" Links](https://webaim.org/techniques/skipnav/)
- [How-to: Use Skip Navigation links](https://www.a11yproject.com/posts/skip-nav-links/)
- [MDN / WCAG を理解する ― ガイドライン 2.4 の解説](/ja/docs/Web/Accessibility/Understanding_WCAG/Operable#guideline_2.4_%e2%80%94_navigable_provide_ways_to_help_users_navigate_find_content_and_determine_where_they_are)
- [Understanding Success Criterion 2.4.1](https://www.w3.org/TR/UNDERSTANDING-WCAG20/navigation-mechanisms-skip.html)

### 大きさと近接性

#### 大きさ

リンクのような対話的要素は、それらを簡単に起動できるように十分な大きさの領域を提供する必要があります。これは、運動制御に問題がある人や、タッチパネルなどの精度が低い入力手段を使用している人など、さまざまな人に役立ちます。少なくとも 44×44 [CSS ピクセル](https://www.w3.org/TR/WCAG21/#dfn-css-pixels)の大きさであることが推奨されています。

散文コンテンツのテキストのみのリンクは免除されますが、それでもハイパーリンクに十分なテキストがあることを確認して、操作しやすくなるようにしておくと良いでしょう。

- [Understanding Success Criterion 2.5.5: Target Size](https://www.w3.org/WAI/WCAG21/Understanding/target-size.html)
- [Target Size and 2.5.5](https://adrianroselli.com/2019/06/target-size-and-2-5-5.html)
- [Quick test: Large touch targets](https://www.a11yproject.com/posts/2018-11-21-large-touch-targets/)

#### 近接性

リンクのような対話的要素が互いに視覚的に近接して配置される場合は、それらを隔てる間隔を置いてください。間隔を空けることで、運動制御に問題のある人が誤って間違った対話的コンテンツを操作してしまうことを防ぐことができます。

間隔は {{CSSxRef("margin")}} などの CSS プロパティを使用して作成することができます。

  - [Hand tremors and the giant-button-problem](https://axesslab.com/hand-tremors/)

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{HTMLElement("link")}} は `<a>` と似ていますが、ユーザーには見えないメタデータへのハイパーリンクのためのものです。
- {{CSSxRef(":link")}} は CSS の擬似クラスで、 `<a>` 要素に有効な `href` 属性がついている場合に一致します。
