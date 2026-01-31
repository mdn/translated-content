---
title: "<a>: アンカー要素"
slug: Web/HTML/Reference/Elements/a
l10n:
  sourceCommit: e9b6cd1b7fa8612257b72b2a85a96dd7d45c0200
---

{{HTMLSidebar}}

**`<a>`** は [HTML](/ja/docs/Web/HTML) の要素（*アンカー*要素）で、[`href` 属性](#href)を用いて、別のウェブページ、ファイル、メールアドレス、同一ページ内の場所、または他の URL へのハイパーリンクを作成します。

`<a>` の内容は、リンク先を示すもの**であるべきです**。`href` 属性が存在する場合、`<a>` 要素にフォーカスがある状態で Enter キーを押すと起動します。

{{InteractiveExample("HTML デモ: &lt;a&gt;", "tabbed-shorter")}}

```html interactive-example
<p>You can reach Michael at:</p>

<ul>
  <li><a href="https://example.com">Website</a></li>
  <li><a href="mailto:m.bluth@example.com">Email</a></li>
  <li><a href="tel:+123456789">Phone</a></li>
</ul>
```

```css interactive-example
li {
  margin-bottom: 0.5rem;
}
```

## 属性

この要素には[グローバル属性](/ja/docs/Web/HTML/Reference/Global_attributes)があります。

- `attributionsrc` {{experimental_inline}}
  - : ブラウザーが {{httpheader("Attribution-Reporting-Eligible")}} ヘッダーを送信することを指定します。サーバー側では、これはレスポンスで {{httpheader("Attribution-Reporting-Register-Source")}} ヘッダーの送信を開始し、[ナビゲーションベースのアトリビューションソース](/ja/docs/Web/API/Attribution_Reporting_API/Registering_sources#navigation-based_attribution_sources)を登録するために使用します。

    ブラウザーは、ユーザーがリンクをクリックすると、ナビゲーションベースのアトリビューションソース（{{httpheader("Attribution-Reporting-Register-Source")}} レスポンスヘッダーで指定された）に関連付けられたソースデータを格納されます。詳細は[アトリビューション報告 API](/ja/docs/Web/API/Attribution_Reporting_API) を参照してください。

    この属性には設定することができる 2 つのバージョンがあります：
    - 論理値、つまり `attributionsrc` の名前だけです。これは、{{httpheader("Attribution-Reporting-Eligible")}} ヘッダーを、`href` 属性がこの点を指すのと同じサーバーに送ることを指定します。同じサーバーでアトリビューションソースの登録を処理している場合は、これで問題ありません。
    - 1 つ以上の URL を格納する値。例えば、以下のようなものです。

      ```html
      attributionsrc="https://a.example/register-source
      https://b.example/register-source"
      ```

      これは、リクエストされたリソースが制御するサーバーにない場合や、属性ソースを別のサーバーに登録する処理だけをしたい場合に有益です。この場合、`attributionsrc` の値として 1 つ以上の URL を指定します。リソースリクエストが発生すると、{{httpheader("Attribution-Reporting-Eligible")}} ヘッダーはリソース元に加えて `attributionsrc` を指定したURLにも送信されます。これらの URL は {{httpheader("Attribution-Reporting-Register-Source")}} で応答し、登録を完了することができます。

      > [!NOTE]
      > 複数のURLを指定するということは、同じ機能に複数の属性ソースを登録できるということを意味しています。例えば、成功を測定しようとしている異なるキャンペーンがあり、異なるデータで異なるレポートを生成する必要があるかもしれません。

    `<a>` 要素はアトリビューショントリガーとして使用することはできず、ソースとしてのみです。

- `download`
  - : ブラウザーがリンクされた URL をダウンロードとして扱うようにします。`filename` 値があってもなくても構いません。
    - 値がない場合は、ブラウザーは様々なソースから生成されたファイル名/拡張子を提案します。
      - HTTP の {{HTTPHeader("Content-Disposition")}} ヘッダー
      - URL の[パス](/ja/docs/Web/API/URL/pathname)の最後の部分
      - {{Glossary("MIME_type", "メディア種別")}}（{{HTTPHeader("Content-Type")}} ヘッダー、 [`data:` URL](/ja/docs/Web/URI/Reference/Schemes/data) の先頭、 [`blob:` URL](/ja/docs/Web/API/URL/createObjectURL_static) の {{domxref("Blob.type")}} から）

    - 値を定義すると、ファイル名として提案します。 `/` および `\` はアンダースコアに変換されます。ファイルシステムがファイル名に禁止している文字は他にもあるかもしれませんので、ブラウザーは必要に応じてファイル名を調整します。

    > [!NOTE]
    >
    > - `download` は[同一オリジンの URL](/ja/docs/Web/Security/Defenses/Same-origin_policy) と、 `blob:`、 `data:` の各スキームでのみ動作します。
    > - ブラウザーがダウンロードをどのように扱うかは、ブラウザー、ユーザーの設定、その他の要因によって異なります。ダウンロードを開始する前にユーザーにプロンプトが表示されたり、ファイルが自動的に保存されたり、外部のアプリケーションまたはブラウザー自体で自動的に開いたりすることがあります。
    > - `Content-Disposition` ヘッダーが `download` とは異なる情報を持っていた場合、動作結果は様々です。
    >   - ヘッダーが `filename` を指定した場合、そちらが `download` 属性で指定されたファイル名より優先されます。
    >   - ヘッダーが `inline` の処分を指定している場合、 Chrome や Firefox 82 以降のバージョンでは、属性を優先してダウンロードとして扱います。Firefox の（82 以前の）古い版では、ヘッダーが優先され、コンテンツがインラインで表示されます。

- `href`
  - : ハイパーリンクが指す先の URL です。リンクは HTTP ベースの URL に限定されません。ブラウザーが対応するあらゆるプロトコルを使用することができます。
    - 電話番号を示す `tel:` URL
    - メールアドレスを示す `mailto:` URL
    - SMS テキストメッセージを示す `sms:` URL
    - [`javascript:` URL](/ja/docs/Web/URI/Reference/Schemes/javascript) による実行可能なコード
    - ウェブブラウザーがその他の URL スキームに対応していない可能性がある場合、ウェブサイトは [`registerProtocolHandler()`](/ja/docs/Web/API/Navigator/registerProtocolHandler) を使用することができます。

    他にも、次のようにして URL 機能でリソースの特定の部分を記載することができます。
    - ページの節を示すフラグメント URL
    - [テキストフラグメント](/ja/docs/Web/URI/Reference/Fragment/Text_fragments)で指定されたテキストの部分
    - メディアファイルの一部を示すメディアフラグメント

- `hreflang`
  - : リンク先の URL における自然言語のヒントです。組み込まれている機能はありません。許容される値は、 [`lang` グローバル属性](/ja/docs/Web/HTML/Reference/Global_attributes/lang)と同じです。
- `ping`
  - : 空白で区切られた URL のリストです。リンクをたどるとき、ブラウザーは {{HTTPMethod("POST")}} リクエストを指定された URL に、 `PING` を本文として送信します。通常、トラッキングに使用されます。
- `referrerpolicy`
  - : リンクをたどるときにどれだけの[リファラー](/ja/docs/Web/HTTP/Reference/Headers/Referer)を送信するかです。
    - `no-referrer`: {{HTTPHeader("Referer")}} ヘッダーは送信されません。
    - `no-referrer-when-downgrade`: {{HTTPHeader("Referer")}} ヘッダーは{{Glossary("origin", "オリジン")}}に {{Glossary("TLS")}} ({{Glossary("HTTPS")}}) がない場合は送信されません。
    - `origin`: 送信されるリファラーは、参照元ページのオリジンのみに限定されます。すなわち[スキーム](/ja/docs/Learn_web_development/Howto/Web_mechanics/What_is_a_URL)、{{Glossary("host", "ホスト名")}}、{{Glossary("port", "ポート番号")}}です。
    - `origin-when-cross-origin`: 他のオリジンに送信されるリファラーは、スキーム、ホスト名、ポート番号に限定されます。同じオリジン内での移動の場合はパスが含まれます。
    - `same-origin`: リファラーは{{Glossary("Same-origin policy", "同じオリジン")}}には送られますが、オリジン間リクエストではリファラー情報が含まれません。
    - `strict-origin`: プロトコルのセキュリティ水準が同じである場合 (HTTPS→HTTPS) は、文書のオリジンのみが送信されますが、安全性が下がる移動先 (HTTPS→HTTP) には送信しません。
    - `strict-origin-when-cross-origin` (default): 同一オリジンへのリクエストを行う際には URL 全体が送信され、プロトコルのセキュリティ水準が同じである場合 (HTTPS→HTTPS) はオリジンのみが送信されますが、安全性が下がる移動先 (HTTPS→HTTP) には送信されません。
    - `unsafe-url`: リファラーにはオリジン*および*パスが含まれます（ただし[フラグメント](/ja/docs/Web/API/HTMLAnchorElement/hash)、[パスワード](/ja/docs/Web/API/HTMLAnchorElement/password)、[ユーザー名](/ja/docs/Web/API/HTMLAnchorElement/username)は含まれません）。**この値は安全ではありません**。オリジンとパスを TLS で保護されたリソースから安全ではないオリジンに漏洩させるからです。

- [`rel`](/ja/docs/Web/HTML/Reference/Attributes/rel)
  - : リンク先の URL との関係を示す、空白で区切られたリンク種別のリストです。
- `target`
  - : リンク先の URL を表示する場所、_閲覧コンテキスト_（タブ、ウィンドウ、{{HTMLElement("iframe")}}）の名前で指定します。以下のキーワードは URL の読み込み先について特別な意味を持ちます。
    - `_self`: 現在の閲覧コンテキストです。（既定値）
    - `_blank`: ふつうは新しいタブですが、新しいウィンドウを使用するようにブラウザーを設定できます。
    - `_parent`: 現在の親の閲覧コンテキストです。親がない場合は、 `_self` と同じ振る舞いをします。
    - `_top`: 最上位の閲覧コンテキスト（現在のコンテキストの祖先である "最上位" のコンテキスト）です。親の閲覧コンテキストがない場合は、 `_self` と同じ動作をします。
    - `_unfencedTop`: 埋め込まれた[フェンスフレーム](/ja/docs/Web/API/Fenced_frame_API)が最上位のフレームを移動できるようにします (つまり、他の予約された移動先とは異なり、フェンスフレームのルートを越えて移動します)。これがフェンスフレームのコンテキスト外で使用されてもナビゲーションは成功しますが、予約語のようには動作しないことに注意してください。

    > [!NOTE]
    > `target="_blank"` を `<a>` 要素に設定すると、暗黙的に `rel` の動作は [`rel="noopener"`](/ja/docs/Web/HTML/Reference/Attributes/rel/noopener) が設定されたかのように動作し、 `window.opener` を設定しません。

- `type`
  - : リンク先 URL の {{Glossary("MIME type", "MIME タイプ")}}の形式を表すヒントです。組み込まれている機能はありません。

### 非推奨の属性

- `charset` {{Deprecated_Inline}}
  - : リンク先 URL の{{Glossary("character encoding", "文字エンコーディング")}}のヒントでした。

    > [!NOTE]
    > この属性は廃止されており、**ページ作者が使用すべきではありません**。リンク先の URL で HTTP の {{HTTPHeader("Content-Type")}} ヘッダーを使用してください。

- `coords` {{Deprecated_Inline}}
  - : [`shape` 属性](#shape)とともに使用されます。カンマ区切りの座標のリストです。
- `name` {{Deprecated_Inline}}
  - : ページ内のリンク先の場所を定義するアンカーで必要でした。 HTML 4.01 では、値がまったく同じであれば `id` 属性と `name` 属性を `<a>` 要素内で同時に使用できました。

    > [!NOTE]
    > 代わりにグローバル属性の [`id`](/ja/docs/Web/HTML/Reference/Global_attributes/id) を使用してください。

- `rev` {{Deprecated_Inline}}
  - : この属性は、逆方向のリンクを指定します。 [`rel` 属性](#rel)と逆の関係を定義していました。これはとても紛らわしいため、非推奨になりました。
- `shape` {{Deprecated_Inline}}
  - : イメージマップ内のハイパーリンクの領域の形状です。

    > [!NOTE]
    > イメージマップについては {{HTMLElement("area")}} 要素を使用してください。

## アクセシビリティ

### 強力なリンクテキスト

リンクの内容は、文脈から外れたとしても、**リンクの行き先を示すべきです**。

#### アクセシビリティに対応していない貧弱なリンクテキスト

よくある残念な間違いは、「ここをクリック」や「こちら」のみにリンクを設定していることです。

```html example-bad
<p>私たちの製品については<a href="/products">こちら</a>をご覧ください。</p>
```

##### 結果

{{EmbedLiveSample('Inaccessible, weak link text')}}

#### 強力なリンクテキスト

幸いにも、これは簡単に直すことができ、しかもアクセシビリティに対応していないものより短くなります。

```html example-good
<p><a href="/products">私たちの製品について</a>、詳しくご覧ください。</p>
```

##### 結果

{{EmbedLiveSample('Strong link text')}}

支援ソフトウェアには、ページ上のすべてのリンクを一覧表示するショートカットがあります。しかし、強力なリンクテキストはすべてのユーザーに利点があります。「すべてのリンクの一覧」のショートカットは、視力のあるユーザーがページを素早く見渡す方法を模倣しています。

### onclick イベント

よく見られる誤った使い方として、擬似的なボタンを作成するためにアンカー要素を使用し、`href` を `#` または `javascript:void(0)` に設定してページの再読み込みを防ぎ、`click` を待ち受けするようにするというものがあります。

これらの偽の `href` 値は、リンクをコピーまたはドラッグしたり、新しいやウィンドウでリンクを開いたり、ブックマークしたり、JavaScript の読み込み中、エラー状態、無効状態の場合などに予期しない動作を引き起こします。また、読み上げソフトなどの支援技術に対して誤った意味を伝えることもあります。

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

##### 結果

{{EmbedLiveSample('Link that opens a new tab/window')}}

#### HTML 以外のリソースへのリンク

リンクの動作を示すためにアイコンを使用する場合は、 [`alt` テキスト](/ja/docs/Web/HTML/Reference/Elements/img#alt)を確実に入れてください。アイコンがない場合でも、 `alt` 属性のコンテンツによってリンクの動作が伝わりまます。

```html
<p>
  <a href="https://www.wikipedia.org/" target="_blank">
    Wikipedia
    <img src="new-tab.svg" width="14" alt="(新しいタブで開く)" />
  </a>
  <br />
  <a href="2017-annual-report.ppt">
    2017 annual report
    <img src="powerpoint.svg" width="14" alt="(PowerPoint ファイル)" />
  </a>
</p>
<p>
  <a href="https://www.wikipedia.org/" target="_blank">
    Wikipedia
    <img src="missing-icon.svg" width="14" alt="(新しいタブで開く)" />
  </a>
  <br />
  <a href="2017-annual-report.ppt">
    2017 annual report
    <img src="missing-icon.svg" width="14" alt="(PowerPoint ファイル)" />
  </a>
</p>
```

##### 結果

{{EmbedLiveSample('Link to a non-HTML resource')}}

- [WebAIM: Links and Hypertext - Hypertext Links](https://webaim.org/techniques/hypertext/hypertext_links)
- [MDN / WCAG を理解する、ガイドライン 3.2](/ja/docs/Web/Accessibility/Guides/Understanding_WCAG/Understandable#guideline_3.2_—_predictable_make_web_pages_appear_and_operate_in_predictable_ways)
- [G200: Opening new windows and tabs from a link only when necessary](https://www.w3.org/TR/WCAG20-TECHS/G200.html)
- [G201: Giving users advanced warning when opening a new window](https://www.w3.org/TR/WCAG20-TECHS/G201.html)

### スキップリンク

**スキップリンク**は {{HTMLElement("body")}} コンテンツのできるだけ先頭に近い場所に配置されるリンクであり、ページのメインコンテンツの先頭にリンクします。通常、CSS はスキップリンクがフォーカスを受けるまでは画面外へ隠します。

```html
<body>
  <a href="#content" class="skip-link">メインコンテンツへスキップ</a>

  <header>…</header>

  <!-- スキップリンクがたどり着く位置 -->
  <main id="content"></main>
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

#### 結果

{{EmbedLiveSample('Skip links')}}

スキップリンクは、キーボードの利用者がヘッダーナビゲーションのような複数のページを通して繰り返されるコンテンツを回避できるようにするものです。

スキップリンクは、スイッチ制御、音声コマンド、またはマウススティック/ヘッドワンドなどの補助技術を使用して操作する人にとって、反復的にリンクを移動する操作が煩わしい場合に特に便利です。

- [WebAIM: "Skip Navigation" Links](https://webaim.org/techniques/skipnav/)
- [How-to: Use Skip Navigation links](https://www.a11yproject.com/posts/skip-nav-links/)
- [MDN WCAG を理解する、ガイドライン 2.4 の解説](/ja/docs/Web/Accessibility/Guides/Understanding_WCAG/Operable#ガイドライン_2.4_—_ナビゲート可能_ユーザーがナビゲートし、コンテンツを見つけ、どこにいるのかを判断するのに役立つ方法を提供する)
- [Understanding Success Criterion 2.4.1](https://www.w3.org/TR/UNDERSTANDING-WCAG20/navigation-mechanisms-skip.html)

### 大きさと近接性

#### 大きさ

リンクのような対話的要素は、それらを簡単に起動できるように十分な大きさの領域を提供する必要があります。これは、運動制御に問題がある人や、タッチパネルなどの精度が低い入力手段を使用している人など、さまざまな人に役立ちます。少なくとも 44×44 [CSS ピクセル](https://www.w3.org/TR/WCAG21/#dfn-css-pixels)の大きさであることが推奨されています。

散文コンテンツのテキストのみのリンクは免除されますが、それでもハイパーリンクに十分なテキストがあることを確認して、操作しやすくなるようにしておくと良いでしょう。

- [Understanding Success Criterion 2.5.5: Target Size](https://www.w3.org/WAI/WCAG21/Understanding/target-size.html)
- [Target Size and 2.5.5](https://adrianroselli.com/2019/06/target-size-and-2-5-5.html)
- [Quick test: Large touch targets](https://www.a11yproject.com/posts/large-touch-targets/)

#### 近接性

リンクのような対話的要素が互いに視覚的に近接して配置される場合は、それらを隔てる間隔を置いてください。間隔を空けることで、運動制御に問題のある人が誤って間違った対話的コンテンツを操作してしまうことを防ぐことができます。

間隔は {{CSSxRef("margin")}} などの CSS プロパティを使用して作成することができます。

- [Hand tremors and the giant-button-problem](https://axesslab.com/hand-tremors/)

## 例

### 絶対 URL へのリンク

#### HTML

```html
<a href="https://www.mozilla.com">Mozilla</a>
```

#### 結果

{{EmbedLiveSample('Linking_to_an_absolute_URL')}}

### 相対 URL へのリンク

#### HTML

```html
<a href="//example.com">スキーム相対 URL</a>
<a href="/ja/docs/Web/HTML">オリジン相対 URL</a>
<a href="p">ディレクトリー相対 URL</a>
<a href="./p">ディレクトリー相対 URL</a>
<a href="../p">親ディレクトリー相対 URL</a>
```

```css hidden
a {
  display: block;
  margin-bottom: 0.5em;
}
```

#### 結果

{{EmbedLiveSample('Linking_to_relative_URLs')}}

### 同じページの要素へのリンク

```html
<!-- 以下のセクションにリンクする <a> 要素 -->
<p><a href="#Section_further_down">下記の見出しまでジャンプ</a></p>

<!-- リンク先の見出し -->
<h2 id="Section_further_down">さらに下のセクション</h2>
```

#### 結果

{{EmbedLiveSample('Linking to an element on the same page')}}

> [!NOTE]
> `href="#top"` または空のフラグメント (`href="#"`) を使用すると、現在のページの先頭にリンクすることができると、 [HTML 仕様書で定義されています](https://html.spec.whatwg.org/multipage/browsing-the-web.html#scroll-to-the-fragment-identifier)（英語）。

### メールアドレスへのリンク

メールプログラムを開いて新しいメッセージを送るようにするリンクを作成するには、 `mailto:` スキームを使用してください。

```html
<a href="mailto:nowhere@mozilla.org">nowhere へメールを送信</a>
```

#### 結果

{{EmbedLiveSample('Linking to an email address')}}

件名や本文を含めるなど、`mailto:` URL スキームの詳細については、[電子メールのリンク](/ja/docs/Learn_web_development/Core/Structuring_content/Creating_links#メールのリンク)または {{RFC(6068)}} をご覧ください。

### 電話番号へのリンク

```html
<a href="tel:+49.157.0156">+49 157 0156</a>
<a href="tel:+1(800)555-0123">(800) 555-0123</a>
```

#### 結果

{{EmbedLiveSample('Linking to telephone numbers')}}

`tel:` リンクは端末の能力によって様々な動作をします。

- 携帯電話ではその番号に自動ダイヤルします。
- 多くのオペレーティングシステムには、 Skype や FaceTime のように電話をかけるプログラムがあります。
- ウェブサイトは {{domxref("Navigator/registerProtocolHandler", "registerProtocolHandler")}} によって `web.skype.com` などを用いて電話を掛けることができます。
- 他にも、連絡先の電話番号を保存したり、他の端末へ電話番号を送信したりする動作があります。

`tel` URL スキームについての構文、追加機能、その他の詳細について、詳しくは {{RFC(3966)}} をご覧ください。

### download 属性を使用して \<canvas> を PNG として保存する

{{HTMLElement("canvas")}} 要素の内容を画像として保存するには、`href` に JavaScript で生成したキャンバスのデータが入った `data:` URL、`download` 属性にダウンロードする PNG ファイルのファイル名を指定したリンクを作成します。

#### 保存リンクのついた描画アプリ

##### HTML

```html
<p>
  マウスボタンを押しっぱなしにして動かすと描画されます。
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
const canvas = document.querySelector("canvas");
const c = canvas.getContext("2d");
c.fillStyle = "hotpink";
let isDrawing;

function draw(x, y) {
  if (isDrawing) {
    c.beginPath();
    c.arc(x, y, 10, 0, Math.PI * 2);
    c.closePath();
    c.fill();
  }
}

canvas.addEventListener("mousemove", (event) =>
  draw(event.offsetX, event.offsetY),
);
canvas.addEventListener("mousedown", () => (isDrawing = true));
canvas.addEventListener("mouseup", () => (isDrawing = false));

document
  .querySelector("a")
  .addEventListener(
    "click",
    (event) => (event.target.href = canvas.toDataURL()),
  );
```

##### 結果

{{EmbedLiveSample('Example_painting_app_with_save_link', '100%', '400')}}

## セキュリティとプライバシー

`<a>` 要素は、ユーザーのセキュリティやプライバシーに影響を及ぼす可能性があります。詳細情報については [`Referer` ヘッダー: プライバシーとセキュリティの考慮事項](/ja/docs/Web/Privacy/Guides/Referer_header:_privacy_and_security_concerns)を参照してください。

`target="_blank"` を [`rel="noreferrer"`](/ja/docs/Web/HTML/Reference/Attributes/rel/noreferrer) や [`rel="noopener"`](/ja/docs/Web/HTML/Reference/Attributes/rel/noopener) なしで使用すると、ウェブサイトが {{domxref("window.opener")}} API 搾取攻撃を受けやすくなりますが、新しい版のブラウザーでは `target="_blank"` を設定すると、`rel="noopener"` と同じ保護が提供されます。詳しくは[ブラウザーの互換性](#ブラウザーの互換性)を参照してください。

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
        >、
        <a href="/ja/docs/Web/HTML/Guides/Content_categories#記述コンテンツ"
          >記述コンテンツ</a
        >、
        <a
          href="/ja/docs/Web/HTML/Guides/Content_categories#対話型コンテンツ"
          >対話型コンテンツ</a
        >、知覚可能コンテンツ。
      </td>
    </tr>
    <tr>
      <th scope="row">許可されている内容</th>
      <td>
        <a
          href="/ja/docs/Web/HTML/Guides/Content_categories#透過的コンテンツ"
          >透過的コンテンツ</a
          >、ただし子孫に
        <a
          href="/ja/docs/Web/HTML/Guides/Content_categories#対話型コンテンツ"
          >対話型コンテンツ</a
        > または
        <code>&lt;a&gt;</code> 要素がないもの、および
        <a
          href="/ja/docs/Web/HTML/Reference/Global_attributes/tabindex"
          >tabindex</a
        > 属性が指定された子孫がないもの。
      </td>
    </tr>
    <tr>
      <th scope="row">タグの省略</th>
      <td>なし。開始タグと終了タグの両方が必須です。</td>
    </tr>
    <tr>
      <th scope="row">許可されている親要素</th>
      <td>
        <a href="/ja/docs/Web/HTML/Guides/Content_categories#フローコンテンツ"
          >フローコンテンツ</a
        >を受け入れるすべての要素、ただし他の <code>&lt;a&gt;</code> 要素でないもの。
      </td>
    </tr>
    <tr>
      <th scope="row">暗黙の ARIA ロール</th>
      <td>
        <a href="/ja/docs/Web/Accessibility/ARIA/Reference/Roles/link_role"><code>link</code></a> （<code>href</code> 属性がある場合）、
        それ以外は
        <a href="/ja/docs/Web/Accessibility/ARIA/Reference/Roles/generic_role"><code>generic</code></a>
      </td>
    </tr>
    <tr>
      <th scope="row">許可されている ARIA ロール</th>
      <td>
        <p><code>href</code> 属性がある場合</p>
        <ul>
          <li><a href="/ja/docs/Web/Accessibility/ARIA/Reference/Roles/button_role"><code>button</code></a></li>
          <li><a href="/ja/docs/Web/Accessibility/ARIA/Reference/Roles/checkbox_role"><code>checkbox</code></a></li>
          <li><a href="/ja/docs/Web/Accessibility/ARIA/Reference/Roles/menuitem_role"><code>menuitem</code></a></li>
          <li><a href="/ja/docs/Web/Accessibility/ARIA/Reference/Roles/menuitemcheckbox_role"><code>menuitemcheckbox</code></a></li>
          <li><a href="/ja/docs/Web/Accessibility/ARIA/Reference/Roles/menuitemradio_role"><code>menuitemradio</code></a></li>
          <li><a href="/ja/docs/Web/Accessibility/ARIA/Reference/Roles/option_role"><code>option</code></a></li>
          <li><a href="/ja/docs/Web/Accessibility/ARIA/Reference/Roles/radio_role"><code>radio</code></a></li>
          <li><a href="/ja/docs/Web/Accessibility/ARIA/Reference/Roles/switch_role"><code>switch</code></a></li>
          <li><a href="/ja/docs/Web/Accessibility/ARIA/Reference/Roles/tab_role"><code>tab</code></a></li>
          <li><a href="/ja/docs/Web/Accessibility/ARIA/Reference/Roles/treeitem_role"><code>treeitem</code></a></li>
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

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{HTMLElement("link")}} は `<a>` と似ていますが、ユーザーには見えないメタデータへのハイパーリンクのためのものです。
- {{CSSxRef(":link")}} は CSS の擬似クラスで、 `<a>` 要素に有効な `href` 属性がついている場合に一致します。
- {{CSSxRef(":visited")}} は CSS の擬似クラスで、`<a>` 要素の `href` 属性が、過去にユーザーが訪問したことのある URL である場合に一致します。
- {{CSSxRef(":any-link")}} は CSS の擬似クラスで、`<a>` 要素に `href` 属性がある場合に一致します。
- [テキストフラグメント](/ja/docs/Web/URI/Reference/Fragment/Text_fragments)は、URL に追加するユーザーエージェント指示で、コンテンツ作成者が ID を使用せずに、ページ上の固有のテキストにリンクすることを可能にするものです。
