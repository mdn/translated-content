---
title: HTML 属性リファレンス
slug: Web/HTML/Attributes
tags:
  - Attribute
  - Attributes
  - Beginner
  - Configuring
  - Element Attributes
  - Elements
  - HTML
  - Reference
  - Settings
  - Web
  - 初心者
  - 属性
  - 要素
  - 要素の属性
  - 設定
translation_of: Web/HTML/Attributes
---
<div>{{HTMLSidebar}}</div>

<p>HTML の要素は<strong>属性</strong>を持ちます。ユーザーが望む基準を満たすために、さまざまな方法で要素を構成したり、動作を調整したりする追加の値です。</p>

<h2 id="Attribute_list" name="Attribute_list">属性一覧</h2>

<table class="standard-table">
 <thead>
  <tr>
   <th>属性名</th>
   <th>要素</th>
   <th>説明</th>
  </tr>
 </thead>
 <tbody>
  <tr>
   <td><code><a href="/ja/docs/Web/HTML/Attributes/accept">accept</a></code></td>
   <td>{{ HTMLElement("form") }}, {{ HTMLElement("input") }}</td>
   <td>サーバーの受容する型のリストです。ファイル形式など。</td>
  </tr>
  <tr>
   <td><code><a href="/ja/docs/Web/HTML/Attributes/accept-charset">accept-charset</a></code></td>
   <td>{{ HTMLElement("form") }}</td>
   <td>対応している文字集合の一覧です。</td>
  </tr>
  <tr>
   <td><code><a href="/ja/docs/Web/HTML/Global_attributes/accesskey">accesskey</a></code></td>
   <td><a href="/ja/docs/Web/HTML/Global_attributes">グローバル属性</a></td>
   <td>要素をアクティブ化したり、フォーカスを与えたりするためのショートカットキーです。</td>
  </tr>
  <tr>
   <td><code><a href="/ja/docs/Web/HTML/Attributes/action">action</a></code></td>
   <td>{{ HTMLElement("form") }}</td>
   <td>フォーム経由で送信される情報を処理するプログラムの URI です。</td>
  </tr>
  <tr>
   <td><code><a href="/ja/docs/Web/HTML/Attributes/align">align</a></code></td>
   <td>{{ HTMLElement("applet") }}, {{ HTMLElement("caption") }}, {{ HTMLElement("col") }}, {{ HTMLElement("colgroup") }}, {{ HTMLElement("hr") }}, {{ HTMLElement("iframe") }}, {{ HTMLElement("img") }}, {{ HTMLElement("table") }}, {{ HTMLElement("tbody") }}, {{ HTMLElement("td") }}, {{ HTMLElement("tfoot") }} , {{ HTMLElement("th") }}, {{ HTMLElement("thead") }}, {{ HTMLElement("tr") }}</td>
   <td>要素の水平方向の配置を指定します。</td>
  </tr>
  <tr>
   <td><code><a href="/ja/docs/Web/HTML/Attributes/allow">allow</a></code></td>
   <td>{{ HTMLElement("iframe") }}</td>
   <td>iframe の機能ポリシーを指定します。</td>
  </tr>
  <tr>
   <td><code><a href="/ja/docs/Web/HTML/Attributes/alt">alt</a></code></td>
   <td>{{ HTMLElement("applet") }}, {{ HTMLElement("area") }}, {{ HTMLElement("img") }}, {{ HTMLElement("input") }}</td>
   <td>画像が表示できない場合の代替テキストです。</td>
  </tr>
  <tr>
   <td><code><a href="/ja/docs/Web/HTML/Attributes/async">async</a></code></td>
   <td>{{ HTMLElement("script") }}</td>
   <td>スクリプトを非同期で実行します。</td>
  </tr>
  <tr>
   <td><code><a href="/ja/docs/Web/HTML/Global_attributes/autocapitalize">autocapitalize</a></code></td>
   <td><a href="/ja/docs/Web/HTML/Global_attributes">グローバル属性</a></td>
   <td>ユーザーによる入力が入力欄で自動的に大文字化されるかどうかを設定します。</td>
  </tr>
  <tr>
   <td><code><a href="/ja/docs/Web/HTML/Attributes/autocomplete">autocomplete</a></code></td>
   <td>{{ HTMLElement("form") }}, {{ HTMLElement("input") }}, {{ HTMLElement("select") }}, {{ HTMLElement("textarea") }}</td>
   <td>このフォーム内のコントロールが、ブラウザーによる値の自動補完を既定で許容するかを示します。</td>
  </tr>
  <tr>
   <td id="attr-autofocus"><code><a href="/ja/docs/Web/HTML/Attributes/autofocus">autofocus</a></code></td>
   <td>{{ HTMLElement("button") }}, {{ HTMLElement("input") }}, {{ HTMLElement("keygen") }}, {{ HTMLElement("select") }}, {{ HTMLElement("textarea") }}</td>
   <td>ページ読込後に、対象要素に自動的にフォーカスを当てるようにします。</td>
  </tr>
  <tr>
   <td><code><a href="/ja/docs/Web/HTML/Attributes/autoplay">autoplay</a></code></td>
   <td>{{ HTMLElement("audio") }}, {{ HTMLElement("video") }}</td>
   <td>オーディオやビデオが再生可能になった時点で自動再生を開始します。</td>
  </tr>
  <tr>
   <td><code>background</code></td>
   <td>{{ HTMLElement("body") }}, {{ HTMLElement("table") }}, {{ HTMLElement("td") }}, {{ HTMLElement("th") }}</td>
   <td>画像ファイルの URL を指定します。
   <div class="note"><strong>注:</strong> ブラウザーや電子メールクライアントはまだこの属性に対応していますが、廃止済みです。代わりに CSS の {{ Cssxref("background-image") }} を使用してください。</div>
   </td>
  </tr>
  <tr>
   <td><code>bgcolor</code></td>
   <td>{{ HTMLElement("body") }}, {{ HTMLElement("col") }}, {{ HTMLElement("colgroup") }}, {{ HTMLElement("marquee") }}, {{ HTMLElement("table") }}, {{ HTMLElement("tbody") }}, {{ HTMLElement("tfoot") }}, {{ HTMLElement("td") }}, {{ HTMLElement("th") }}, {{ HTMLElement("tr") }}</td>
   <td>
   <p>要素の背景色です。</p>

   <div class="note">
   <p><strong>注:</strong> これは古い属性です。代わりに CSS の {{ Cssxref("background-color") }} プロパティを使用してください。</p>
   </div>
   </td>
  </tr>
  <tr>
   <td><code>border</code></td>
   <td>{{ HTMLElement("img") }}, {{ HTMLElement("object") }}, {{ HTMLElement("table") }}</td>
   <td>
   <p>境界線の幅です。</p>

   <div class="note">
   <p><strong>注:</strong> これは古い属性です。代わりに CSS の {{ Cssxref("border") }} プロパティを使用してください。</p>
   </div>
   </td>
  </tr>
  <tr>
   <td><code><a href="/ja/docs/Web/HTML/Attributes/buffered">buffered</a></code></td>
   <td>{{ HTMLElement("audio") }}, {{ HTMLElement("video") }}</td>
   <td>すでにバッファリングされたメディアの時間の範囲を示します。</td>
  </tr>
  <tr>
   <td><code><a href="/ja/docs/Web/HTML/Attributes/capture">capture</a></code></td>
   <td>{{ HTMLElement("input") }}</td>
   <td>{{SpecName('HTML Media Capture', '#the-capture-attribute','media capture')}} 仕様書から、キャプチャできる新しいファイルを指定します。</td>
  </tr>
  <tr>
   <td><code>challenge</code></td>
   <td>{{ HTMLElement("keygen") }}</td>
   <td>公開鍵とともに送信するチャレンジ文字列</td>
  </tr>
  <tr>
   <td><code><a href="/ja/docs/Web/HTML/Attributes/charset">charset</a></code></td>
   <td>{{ HTMLElement("meta") }}, {{ HTMLElement("script") }}</td>
   <td>ページまたはスクリプトの文字エンコーディングを宣言します。</td>
  </tr>
  <tr>
   <td><code><a href="/ja/docs/Web/HTML/Attributes/checked">checked</a></code></td>
   <td>{{ HTMLElement("command") }}, {{ HTMLElement("input") }}</td>
   <td>ページ読み込み時に要素にチェックを入れておくかどうかを指定します。</td>
  </tr>
  <tr>
   <td><code><a href="/ja/docs/Web/HTML/Attributes/cite">cite</a></code></td>
   <td>{{ HTMLElement("blockquote") }}, {{ HTMLElement("del") }}, {{ HTMLElement("ins") }}, {{ HTMLElement("q") }}</td>
   <td>引用元または変更点の情報源を指す URI を格納します。</td>
  </tr>
  <tr>
   <td><code><a href="/ja/docs/Web/HTML/Global_attributes/class">class</a></code></td>
   <td><a href="/ja/docs/Web/HTML/Global_attributes">グローバル属性</a></td>
   <td>よく使われるプロパティで要素にスタイルを適用するために CSS と共によく用いられます。</td>
  </tr>
  <tr>
   <td><code><a href="/ja/docs/Web/HTML/Attributes/code">code</a></code></td>
   <td>{{ HTMLElement("applet") }}</td>
   <td>読み込んで実行するアプレットのクラスファイルの URL を指定します。</td>
  </tr>
  <tr>
   <td><code><a href="/ja/docs/Web/HTML/Attributes/codebase">codebase</a></code></td>
   <td>{{ HTMLElement("applet") }}</td>
   <td>code 属性で参照するアプレットの .class ファイルを配置しているディレクトリの絶対 URL または相対 URL を指定します。</td>
  </tr>
  <tr>
   <td><code>color</code></td>
   <td>{{ HTMLElement("basefont") }}, {{ HTMLElement("font") }}, {{ HTMLElement("hr") }}</td>
   <td>
   <p>この属性は色名または16進数の #RRGGBB 形式を用いて文字色を設定します。</p>

   <div class="note">
   <p><strong>注:</strong> これは古い属性です。代わりに CSS の {{Cssxref("color")}} プロパティを使用して下さい。</p>
   </div>
   </td>
  </tr>
  <tr>
   <td><code><a href="/ja/docs/Web/HTML/Attributes/cols">cols</a></code></td>
   <td>{{ HTMLElement("textarea") }}</td>
   <td>テキストエリアの桁数 (水平方向の文字数) を定義します。</td>
  </tr>
  <tr>
   <td><code><a href="/ja/docs/Web/HTML/Attributes/colspan">colspan</a></code></td>
   <td>{{ HTMLElement("td") }}, {{ HTMLElement("th") }}</td>
   <td>colspan 属性はテーブルのセルを結合する列数を定義します。</td>
  </tr>
  <tr>
   <td><code><a href="/ja/docs/Web/HTML/Attributes/content">content</a></code></td>
   <td>{{ HTMLElement("meta") }}</td>
   <td>状況に応じて、 <code>http-equiv</code> または <code>name</code> に関連した値です。</td>
  </tr>
  <tr>
   <td><code><a href="/ja/docs/Web/HTML/Global_attributes/contenteditable">contenteditable</a></code></td>
   <td><a href="/ja/docs/Web/HTML/Global_attributes">グローバル属性</a></td>
   <td>要素の内容が編集可能であるかどうかを示します。</td>
  </tr>
  <tr>
   <td><code><a href="/ja/docs/Web/HTML/Attributes/contextmenu">contextmenu</a></code></td>
   <td><a href="/ja/docs/Web/HTML/Global_attributes">グローバル属性</a></td>
   <td>要素のコンテキストメニューとして機能する {{HTMLElement("menu")}} 要素の ID を定義します。</td>
  </tr>
  <tr>
   <td><code><a href="/ja/docs/Web/HTML/Attributes/controls">controls</a></code></td>
   <td>{{ HTMLElement("audio") }}, {{ HTMLElement("video") }}</td>
   <td>再生コントロールをユーザーに表示すべきかどうかを示します。</td>
  </tr>
  <tr>
   <td><code><a href="/ja/docs/Web/HTML/Attributes/coords">coords</a></code></td>
   <td>{{ HTMLElement("area") }}</td>
   <td>ホットスポット領域の座標を指定する為の値のセット</td>
  </tr>
  <tr>
   <td><code><a href="/ja/docs/Web/HTML/CORS_settings_attributes">crossorigin</a></code></td>
   <td>{{ HTMLElement("audio") }}, {{ HTMLElement("img") }}, {{ HTMLElement("link") }}, {{ HTMLElement("script") }}, {{ HTMLElement("video") }}</td>
   <td>要素がオリジン間リクエストをどう扱うか</td>
  </tr>
  <tr>
   <td><code><a href="/ja/docs/Web/API/HTMLiframeElement/csp">csp</a></code> {{experimental_inline}}</td>
   <td>{{ HTMLElement("iframe") }}</td>
   <td>埋め込まれた文書が管理されるためのコンテンツセキュリティポリシーを指定します。</td>
  </tr>
  <tr>
   <td><code><a href="/ja/docs/Web/HTML/Attributes/data">data</a></code></td>
   <td>{{ HTMLElement("object") }}</td>
   <td>リソースの URL を指定します。</td>
  </tr>
  <tr>
   <td><code><a href="/ja/docs/Web/HTML/Global_attributes/data-*">data-*</a></code></td>
   <td><a href="/ja/docs/Web/HTML/Global_attributes">グローバル属性</a></td>
   <td>HTML 要素にカスタム属性が添付できるようにします。</td>
  </tr>
  <tr>
   <td><code><a href="/ja/docs/Web/HTML/Attributes/datetime">datetime</a></code></td>
   <td>{{ HTMLElement("del") }}, {{ HTMLElement("ins") }}, {{ HTMLElement("time") }}</td>
   <td>要素に関連付けられた日時を示します。</td>
  </tr>
  <tr>
   <td><code><a href="/ja/docs/Web/HTML/Attributes/decoding">decoding</a></code></td>
   <td>{{ HTMLElement("img") }}</td>
   <td>画像をデコードする推奨の方法をIndicates the preferred method to decode the image.</td>
  </tr>
  <tr>
   <td><code><a href="/ja/docs/Web/HTML/Attributes/default">default</a></code></td>
   <td>{{ HTMLElement("track") }}</td>
   <td>ユーザ設定で別の項目を指定していない場合に、有効にするトラックを指定する</td>
  </tr>
  <tr>
   <td><code><a href="/ja/docs/Web/HTML/Attributes/defer">defer</a></code></td>
   <td>{{ HTMLElement("script") }}</td>
   <td>ページのパースが完了した後に実行するスクリプトであることを示す</td>
  </tr>
  <tr>
   <td><code><a href="/ja/docs/Web/HTML/Global_attributes/dir">dir</a></code></td>
   <td><a href="/ja/docs/Web/HTML/Global_attributes">グローバル属性</a></td>
   <td>テキストの書字方向を定義する。使用できる値は ltr (Left-To-Right) または rtl (Right-To-Left)</td>
  </tr>
  <tr>
   <td><code><a href="/ja/docs/Web/HTML/Attributes/dirname">dirname</a></code></td>
   <td>{{ HTMLElement("input") }}, {{ HTMLElement("textarea") }}</td>
   <td></td>
  </tr>
  <tr>
   <td><code><a href="/ja/docs/Web/HTML/Attributes/disabled">disabled</a></code></td>
   <td>{{ HTMLElement("button") }}, {{ HTMLElement("command") }}, {{ HTMLElement("fieldset") }}, {{ HTMLElement("input") }}, {{ HTMLElement("keygen") }}, {{ HTMLElement("optgroup") }}, {{ HTMLElement("option") }}, {{ HTMLElement("select") }}, {{ HTMLElement("textarea") }}</td>
   <td>閲覧者によるによるコントロールの操作を無効にするかどうかを示します。</td>
  </tr>
  <tr>
   <td><code><a href="/ja/docs/Web/HTML/Attributes/download">download</a></code></td>
   <td>{{ HTMLElement("a") }}, {{ HTMLElement("area") }}</td>
   <td>リソースをダウンロードするためのハイパーリンクであるかどうかを示します。</td>
  </tr>
  <tr>
   <td><code><a href="/ja/docs/Web/HTML/Global_attributes/draggable">draggable</a></code></td>
   <td><a href="/ja/docs/Web/HTML/Global_attributes">グローバル属性</a></td>
   <td>要素がドラッグ可能であるかどうかを示します。</td>
  </tr>
  <tr>
   <td><code><a href="/ja/docs/Web/HTML/Global_attributes/dropzone">dropzone</a></code></td>
   <td><a href="/ja/docs/Web/HTML/Global_attributes">グローバル属性</a></td>
   <td>要素がその上でコンテンツのドロップ操作を受け付けるかどうかを示します。</td>
  </tr>
  <tr>
   <td><code><a href="/ja/docs/Web/HTML/Attributes/enctype">enctype</a></code></td>
   <td>{{ HTMLElement("form") }}</td>
   <td><code>method</code> 属性が POST である場合に、フォームデータのコンテンツタイプを定義します。</td>
  </tr>
  <tr>
   <td><code><a href="/ja/docs/Web/HTML/Attributes/enterkeyhint">enterkeyhint</a></code> {{experimental_inline}}</td>
   <td>{{ HTMLElement("textarea") }}, <a href="/ja/docs/Web/HTML/Global_attributes/contenteditable"><code>contenteditable</code></a></td>
   <td><a href="https://html.spec.whatwg.org/dev/interaction.html#input-modalities:-the-enterkeyhint-attribute"><code>enterkeyhint</code></a> は、仮想キーボードの Enter キーにあるアクションラベル (またはアイコン) が何であるかを指定します。この属性はフォームコントロール (<code>textarea</code> 要素の値など) と共に、または編集対象となっている要素 (例えば <code>contenteditable</code> 属性の使用など) の中で使用することができます。</td>
  </tr>
  <tr>
   <td><code><a href="/ja/docs/Web/HTML/Attributes/for">for</a></code></td>
   <td>{{ HTMLElement("label") }}, {{ HTMLElement("output") }}</td>
   <td>この要素が属する要素を指定します。</td>
  </tr>
  <tr>
   <td id="attr-form"><code><a href="/ja/docs/Web/HTML/Attributes/form">form</a></code></td>
   <td>{{ HTMLElement("button") }}, {{ HTMLElement("fieldset") }}, {{ HTMLElement("input") }}, {{ HTMLElement("keygen") }}, {{ HTMLElement("label") }}, {{ HTMLElement("meter") }}, {{ HTMLElement("object") }}, {{ HTMLElement("output") }}, {{ HTMLElement("progress") }}, {{ HTMLElement("select") }}, {{ HTMLElement("textarea") }}</td>
   <td>その要素が所属するフォームを示します。</td>
  </tr>
  <tr>
   <td><code><a href="/ja/docs/Web/HTML/Attributes/formaction">formaction</a></code></td>
   <td>{{ HTMLElement("input") }}, {{ HTMLElement("button") }}</td>
   <td>その要素のアクションを示します。 {{ HTMLElement("form") }} で定義されたアクションを上書きします。</td>
  </tr>
  <tr>
   <td><code><a href="/ja/docs/Web/HTML/Attributes/formenctype">formenctype</a></code></td>
   <td>{{ HTMLElement("button") }}, {{ HTMLElement("input") }}</td>
   <td>button や input が送信ボタンである場合 (<code>type="submit"</code>)、この属性はフォーム送信で使用するエンコーディング型を設定します。この属性が指定された場合、ボタンを所有する<a href="/ja/docs/Web/HTML/Element/form">フォーム</a>の <code>enctype</code> 属性より優先されます。</td>
  </tr>
  <tr>
   <td><code><a href="/ja/docs/Web/HTML/Attributes/formmethod">formmethod</a></code></td>
   <td>{{ HTMLElement("button") }}, {{ HTMLElement("input") }}</td>
   <td>button や input が送信ボタンである場合 (<code>type="submit"</code>)、この属性はフォーム送信で使用する送信メソッド (<code>GET</code>, <code>POST</code>, など) を設定します。この属性が指定された場合、ボタンを所有する<a href="/ja/docs/Web/HTML/Element/form">フォーム</a>の <code>method</code> 属性より優先されます。</td>
  </tr>
  <tr>
   <td><code><a href="/ja/docs/Web/HTML/Attributes/formnovalidate">formnovalidate</a></code></td>
   <td>{{ HTMLElement("button") }}, {{ HTMLElement("input") }}</td>
   <td>button や input が送信ボタンである場合 (<code>type="submit"</code>)、この論理属性はフォームが送信時に検証されないことを指定します。この属性が指定された場合、ボタンを所有する<a href="/ja/docs/Web/HTML/Element/form">フォーム</a>の <code>novalidate</code> 属性より優先されます。</td>
  </tr>
  <tr>
   <td><code><a href="/ja/docs/Web/HTML/Attributes/formtarget">formtarget</a></code></td>
   <td>{{ HTMLElement("button") }}, {{ HTMLElement("input") }}</td>
   <td>button や input が送信ボタンである場合 (<code>type="submit"</code>)、この属性はフォームを送信した後で受け取るレスポンスを表示する閲覧コンテキスト (例えば、タブ、ウィンドウ、インラインフレーム) を指定します。この属性が指定された場合、ボタンを所有する<a href="/ja/docs/Web/HTML/Element/form">フォーム</a>の <code>target</code> 属性より優先されます。</td>
  </tr>
  <tr>
   <td><code><a href="/ja/docs/Web/HTML/Attributes/headers">headers</a></code></td>
   <td>{{ HTMLElement("td") }}, {{ HTMLElement("th") }}</td>
   <td>この要素に適用する <code>&lt;th&gt;</code> 要素の ID。</td>
  </tr>
  <tr>
   <td><code>height</code></td>
   <td>{{ HTMLElement("canvas") }}, {{ HTMLElement("embed") }}, {{ HTMLElement("iframe") }}, {{ HTMLElement("img") }}, {{ HTMLElement("input") }}, {{ HTMLElement("object") }}, {{ HTMLElement("video") }}</td>
   <td>
   <p>ここに挙げた要素の高さを指定します。他の要素では、 {{cssxref("height")}} プロパティを使用してください。</p>

   <div class="note">
   <p><strong>注:</strong> {{HTMLElement("div")}} など一部の要素では、これは古い属性であり、代わりに CSS の {{Cssxref("height")}} プロパティを使用してください。</p>
   </div>
   </td>
  </tr>
  <tr>
   <td><code><a href="/ja/docs/Web/HTML/Global_attributes/hidden">hidden</a></code></td>
   <td><a href="/ja/docs/Web/HTML/Global_attributes">グローバル属性</a></td>
   <td>この要素のレンダリングを抑制しますが、 script 要素などの子要素は有効なままにします。</td>
  </tr>
  <tr>
   <td><code><a href="/ja/docs/Web/HTML/Attributes/high">high</a></code></td>
   <td>{{ HTMLElement("meter") }}</td>
   <td>最大値の下限を示します。</td>
  </tr>
  <tr>
   <td><code><a href="/ja/docs/Web/HTML/Attributes/href">href</a></code></td>
   <td>{{ HTMLElement("a") }}, {{ HTMLElement("area") }}, {{ HTMLElement("base") }}, {{ HTMLElement("link") }}</td>
   <td>リンクされたリソースの URL です。</td>
  </tr>
  <tr>
   <td><code><a href="/ja/docs/Web/HTML/Attributes/hreflang">hreflang</a></code></td>
   <td>{{ HTMLElement("a") }}, {{ HTMLElement("area") }}, {{ HTMLElement("link") }}</td>
   <td>リンクされたリソースの言語を指定します。</td>
  </tr>
  <tr>
   <td><code><a href="/ja/docs/Web/HTML/Attributes/http-equiv">http-equiv</a></code></td>
   <td>{{ HTMLElement("meta") }}</td>
   <td>プラグマディレクティブを定義します。</td>
  </tr>
  <tr>
   <td><code><a href="/ja/docs/Web/HTML/Attributes/icon">icon</a></code></td>
   <td>{{ HTMLElement("command") }}</td>
   <td>コマンドを表す画像を指定します。</td>
  </tr>
  <tr>
   <td><code><a href="/ja/docs/Web/HTML/Global_attributes/id">id</a></code></td>
   <td><a href="/ja/docs/Web/HTML/Global_attributes">グローバル属性</a></td>
   <td>特定の要素へスタイルを設定するために CSS と共によく使われます。この属性の値は一位でなければなりません。</td>
  </tr>
  <tr>
   <td><code><a href="/ja/docs/Web/HTML/Attributes/importance">importance</a></code> {{experimental_inline}}</td>
   <td>{{ HTMLElement("iframe") }}, {{ HTMLElement("img") }}, {{ HTMLElement("link") }}, {{ HTMLElement("script") }}</td>
   <td>リソースの相対的なフェッチ優先順位を示します。</td>
  </tr>
  <tr>
   <td><code><a href="/ja/docs/Web/Security/Subresource_Integrity">integrity</a></code></td>
   <td>{{ HTMLElement("link") }}, {{ HTMLElement("script") }}</td>
   <td>
   <p>ブラウザーが読み込むものを検証できるようにするための<a href="/ja/docs/Web/Security/Subresource_Integrity">サブリソース完全性</a>の値を指定します。</p>
   </td>
  </tr>
  <tr>
   <td><a href="/ja/docs/Web/HTML/Element/img#attr-intrinsicsize"><code>intrinsicsize</code></a> {{deprecated_inline}}</td>
   <td>{{ HTMLElement("img") }}</td>
   <td>この属性は、ブラウザーに画像に交友の実際の寸法を無視して、属性で指定された寸法を割り当てるように指示します。</td>
  </tr>
  <tr>
   <td><a href="/ja/docs/Web/HTML/Global_attributes/inputmode"><code>inputmode</code></a></td>
   <td>{{ HTMLElement("textarea") }}, <a href="/ja/docs/Web/HTML/Global_attributes/contenteditable"><code>contenteditable</code></a></td>
   <td>要素やその内容を編集する際に、ユーザーが入力する可能性のあるデータの種類のヒントを提供します。この属性はフォームコントロール (<code>textarea</code> 要素の値など) と共に、または編集対象となっている要素 (例えば <code>contenteditable</code> 属性の使用など) の中で使用することができます。</td>
  </tr>
  <tr>
   <td><code>ismap</code></td>
   <td>{{ HTMLElement("img") }}</td>
   <td>画像がサーバーサイドイメージマップの一部であることを示します。</td>
  </tr>
  <tr>
   <td><code><a href="/ja/docs/Web/HTML/Global_attributes/itemprop">itemprop</a></code></td>
   <td><a href="/ja/docs/Web/HTML/Global_attributes">グローバル属性</a></td>
   <td></td>
  </tr>
  <tr>
   <td><code>keytype</code></td>
   <td>{{ HTMLElement("keygen") }}</td>
   <td>生成する鍵の種類を指定します。</td>
  </tr>
  <tr>
   <td><code><a href="/ja/docs/Web/HTML/Attributes/kind">kind</a></code></td>
   <td>{{ HTMLElement("track") }}</td>
   <td>テキストトラックの種類を指定します。</td>
  </tr>
  <tr>
   <td><code><a href="/ja/docs/Web/HTML/Attributes/label">label</a></code></td>
   <td>{{ HTMLElement("optgroup") }}, {{ HTMLElement("option") }}, {{ HTMLElement("track") }}</td>
   <td>ユーザーが読める形の要素のタイトルを指定します。</td>
  </tr>
  <tr>
   <td><code><a href="/ja/docs/Web/HTML/Global_attributes/lang">lang</a></code></td>
   <td><a href="/ja/docs/Web/HTML/Global_attributes">グローバル属性</a></td>
   <td>要素内で用いられている言語を定義する。</td>
  </tr>
  <tr>
   <td><code><a href="/ja/docs/Web/HTML/Attributes/language">language</a></code></td>
   <td>{{ HTMLElement("script") }}</td>
   <td>要素で使用しているスクリプト言語を定義する。</td>
  </tr>
  <tr>
   <td><code>loading</code> {{experimental_inline}}</td>
   <td>{{ HTMLElement("img") }}, {{ HTMLElement("iframe") }}</td>
   <td>要素を遅延読み込みさせたいこと (<code>loading="lazy"</code>) または直ちに読み込ませたいこと  (<code>loading="eager"</code>) を示します。
   <div class="note"><strong>WIP:</strong> <a href="https://github.com/whatwg/html/pull/3752">WHATWG PR #3752</a></div>
   </td>
  </tr>
  <tr>
   <td><code><a href="/ja/docs/Web/HTML/Attributes/list">list</a></code></td>
   <td>{{ HTMLElement("input") }}</td>
   <td>ユーザに提案するため、事前に定義した選択肢のリストを示す。</td>
  </tr>
  <tr>
   <td><code><a href="/ja/docs/Web/HTML/Attributes/loop">loop</a></code></td>
   <td>{{ HTMLElement("audio") }}, {{ HTMLElement("bgsound") }}, {{ HTMLElement("marquee") }}, {{ HTMLElement("video") }}</td>
   <td>メディアの再生が完了した後、始めから再生を開始するかを示します。</td>
  </tr>
  <tr>
   <td><code><a href="/ja/docs/Web/HTML/Attributes/low">low</a></code></td>
   <td>{{ HTMLElement("meter") }}</td>
   <td>最小値の上限を示します。</td>
  </tr>
  <tr>
   <td><code>manifest</code></td>
   <td>{{ HTMLElement("html") }}</td>
   <td>ドキュメントのキャッシュマニフェストの URL を指定します。
   <div class="note"><strong>注:</strong> この属性は廃止されており、代わりに <a href="/ja/docs/Web/Manifest"><code>&lt;link rel="manifest"&gt;</code></a> を使用してください。</div>
   </td>
  </tr>
  <tr>
   <td><code><a href="/ja/docs/Web/HTML/Attributes/max">max</a></code></td>
   <td>{{ HTMLElement("input") }}, {{ HTMLElement("meter") }}, {{ HTMLElement("progress") }}</td>
   <td>許容される最大の値を示す。</td>
  </tr>
  <tr>
   <td><code><a href="/ja/docs/Web/HTML/Attributes/maxlength">maxlength</a></code></td>
   <td>{{ HTMLElement("input") }}, {{ HTMLElement("textarea") }}</td>
   <td>要素が許容する最大文字数を定義します。</td>
  </tr>
  <tr>
   <td><code><a href="/ja/docs/Web/HTML/Attributes/minlength">minlength</a></code></td>
   <td>{{ HTMLElement("input") }}, {{ HTMLElement("textarea") }}</td>
   <td>要素が許容する最小文字数を定義する。</td>
  </tr>
  <tr>
   <td><code><a href="/ja/docs/Web/HTML/Attributes/media">media</a></code></td>
   <td>{{ HTMLElement("a") }}, {{ HTMLElement("area") }}, {{ HTMLElement("link") }}, {{ HTMLElement("source") }}, {{ HTMLElement("style") }}</td>
   <td>リンクされたリソースがどのメディアに対して設計されたかを指定する。ンｎ</td>
  </tr>
  <tr>
   <td><a href="/ja/docs/Web/HTML/Attributes/method">method</a></td>
   <td>{{ HTMLElement("form") }}</td>
   <td>フォームを送信する際に使用する <a href="/ja/docs/Web/HTTP">HTTP</a> メソッドを定義する。 GET (既定値) または POST を指定可能。</td>
  </tr>
  <tr>
   <td><code><a href="/ja/docs/Web/HTML/Attributes/min">min</a></code></td>
   <td>{{ HTMLElement("input") }}, {{ HTMLElement("meter") }}</td>
   <td>許容される最小の値を示す。</td>
  </tr>
  <tr>
   <td><code><a href="/ja/docs/Web/HTML/Attributes/multiple">multiple</a></code></td>
   <td>{{ HTMLElement("input") }}, {{ HTMLElement("select") }}</td>
   <td>type が <code>email</code> または <code>file</code> の input では、複数の値を入力可能かを示す。</td>
  </tr>
  <tr>
   <td><code><a href="/ja/docs/Web/HTML/Attributes/muted">muted</a></code></td>
   <td>{{ HTMLElement("audio") }}, {{ HTMLElement("video") }}</td>
   <td>ページ読み込み時に音声を無音にするかどうかを示します。</td>
  </tr>
  <tr>
   <td><code><a href="/ja/docs/Web/HTML/Attributes/name">name</a></code></td>
   <td>{{ HTMLElement("button") }}, {{ HTMLElement("form") }}, {{ HTMLElement("fieldset") }}, {{ HTMLElement("iframe") }}, {{ HTMLElement("input") }}, {{ HTMLElement("keygen") }}, {{ HTMLElement("object") }}, {{ HTMLElement("output") }}, {{ HTMLElement("select") }}, {{ HTMLElement("textarea") }}, {{ HTMLElement("map") }}, {{ HTMLElement("meta") }}, {{ HTMLElement("param") }}</td>
   <td>要素の名前。例えば、送信されたフォームでサーバーがフィールドを識別するために使用する。</td>
  </tr>
  <tr>
   <td><code><a href="/ja/docs/Web/HTML/Attributes/novalidate">novalidate</a></code></td>
   <td>{{ HTMLElement("form") }}</td>
   <td>送信時にフォームが検証されないようにする。</td>
  </tr>
  <tr>
   <td><code><a href="/ja/docs/Web/HTML/Attributes/open">open</a></code></td>
   <td>{{ HTMLElement("details") }}</td>
   <td>ページ読み込み時に詳細情報を表示するかを示す。</td>
  </tr>
  <tr>
   <td><code><a href="/ja/docs/Web/HTML/Attributes/optimum">optimum</a></code></td>
   <td>{{ HTMLElement("meter") }}</td>
   <td>最適な値を示す。</td>
  </tr>
  <tr>
   <td><code><a href="/ja/docs/Web/HTML/Attributes/pattern">pattern</a></code></td>
   <td>{{ HTMLElement("input") }}</td>
   <td>要素の値を検証する正規表現を定義する。</td>
  </tr>
  <tr>
   <td><code><a href="/ja/docs/Web/HTML/Element/a#attr-ping">ping</a></code></td>
   <td>{{ HTMLElement("a") }}, {{ HTMLElement("area") }}</td>
   <td><code>ping</code> 属性は、ユーザーがハイパーリンクをたどる場合に通知される URL のリストを空白区切りで指定します。</td>
  </tr>
  <tr>
   <td><code><a href="/ja/docs/Web/HTML/Attributes/placeholder">placeholder</a></code></td>
   <td>{{ HTMLElement("input") }}, {{ HTMLElement("textarea") }}</td>
   <td>フィールドが何を入力するものであるかのヒントを閲覧者に対し提供する。</td>
  </tr>
  <tr>
   <td><code><a href="/ja/docs/Web/HTML/Attributes/poster">poster</a></code></td>
   <td>{{ HTMLElement("video") }}</td>
   <td>ユーザが再生やシークを行うまでの間に表示するポスターフレームの URL。</td>
  </tr>
  <tr>
   <td><code><a href="/ja/docs/Web/HTML/Attributes/preload">preload</a></code></td>
   <td>{{ HTMLElement("audio") }}, {{ HTMLElement("video") }}</td>
   <td>リソースの全体または一部のプリロードを行う、あるいはプリロードを行わないことを示す。</td>
  </tr>
  <tr>
   <td><code>radiogroup</code></td>
   <td>{{ HTMLElement("command") }}</td>
   <td></td>
  </tr>
  <tr>
   <td><code><a href="/ja/docs/Web/HTML/Attributes/readonly">readonly</a></code></td>
   <td>{{ HTMLElement("input") }}, {{ HTMLElement("textarea") }}</td>
   <td>要素が編集できるかどうかを示す。</td>
  </tr>
  <tr>
   <td><code><a href="/ja/docs/Web/HTML/Attributes/referralpolicy">referrerpolicy</a></code></td>
   <td>{{ HTMLElement("a") }}, {{ HTMLElement("area") }}, {{ HTMLElement("iframe") }}, {{ HTMLElement("img") }}, {{ HTMLElement("link") }}, {{ HTMLElement("script") }}</td>
   <td>リソースにアクセスする際にどのリファラーが送信されるかを指定する。</td>
  </tr>
  <tr>
   <td><code><a href="/ja/docs/Web/HTML/Attributes/rel">rel</a></code></td>
   <td>{{ HTMLElement("a") }}, {{ HTMLElement("area") }}, {{ HTMLElement("link") }}</td>
   <td>リンク先オブジェクトとリンク元オブジェクトとの関係を指定する。</td>
  </tr>
  <tr>
   <td><code><a href="/ja/docs/Web/HTML/Attributes/required">required</a></code></td>
   <td>{{ HTMLElement("input") }}, {{ HTMLElement("select") }}, {{ HTMLElement("textarea") }}</td>
   <td>入力が必須の要素であるかを示す。</td>
  </tr>
  <tr>
   <td><code><a href="/ja/docs/Web/HTML/Attributes/reversed">reversed</a></code></td>
   <td>{{ HTMLElement("ol") }}</td>
   <td>リストを昇順ではなく降順に表示することを示す。</td>
  </tr>
  <tr>
   <td><code><a href="/ja/docs/Web/HTML/Attributes/rows">rows</a></code></td>
   <td>{{ HTMLElement("textarea") }}</td>
   <td>textarea の行数を定義する。</td>
  </tr>
  <tr>
   <td><code><a href="/ja/docs/Web/HTML/Attributes/rowspan">rowspan</a></code></td>
   <td>{{ HTMLElement("td") }}, {{ HTMLElement("th") }}</td>
   <td>テーブルセルがまたがる行数を定義する。</td>
  </tr>
  <tr>
   <td><code><a href="/ja/docs/Web/HTML/Element/iframe#attr-sandbox">sandbox</a></code></td>
   <td>{{ HTMLElement("iframe") }}</td>
   <td>iframe に読み込まれた文書で特定の機能を使用することを止める (フォームの投稿や新しいウィンドウを開くなど)。</td>
  </tr>
  <tr>
   <td><code><a href="/ja/docs/Web/HTML/Attributes/scope">scope</a></code></td>
   <td>{{ HTMLElement("th") }}</td>
   <td>(<code>th</code> 要素で定義される) ヘッダーテストが関連するセルを定義します。</td>
  </tr>
  <tr>
   <td><code><a href="/ja/docs/Web/HTML/Attributes/scoped">scoped</a></code></td>
   <td>{{ HTMLElement("style") }}</td>
   <td></td>
  </tr>
  <tr>
   <td><code><a href="/ja/docs/Web/HTML/Attributes/selected">selected</a></code></td>
   <td>{{ HTMLElement("option") }}</td>
   <td>ページ読込時に、対象要素を選択状態にする。</td>
  </tr>
  <tr>
   <td><code><a href="/ja/docs/Web/HTML/Attributes/shape">shape</a></code></td>
   <td>{{ HTMLElement("a") }}, {{ HTMLElement("area") }}</td>
   <td></td>
  </tr>
  <tr>
   <td><code><a href="/ja/docs/Web/HTML/Attributes/size">size</a></code></td>
   <td>{{ HTMLElement("input") }}, {{ HTMLElement("select") }}</td>
   <td>要素の幅を定義する (ピクセル値)。要素の <code>type</code> 属性が <code>text</code> または <code>password</code> である場合は文字数になる。</td>
  </tr>
  <tr>
   <td><code><a href="/ja/docs/Web/HTML/Attributes/sizes">sizes</a></code></td>
   <td>{{ HTMLElement("link") }}, {{ HTMLElement("img") }}, {{ HTMLElement("source") }}</td>
   <td></td>
  </tr>
  <tr>
   <td><code><a href="/ja/docs/Web/HTML/Attributes/slot">slot</a></code></td>
   <td><a href="/ja/docs/Web/HTML/Global_attributes">グローバル属性</a></td>
   <td>要素にシャドウ DOM のシャドウツリーのスロットを割り当てます。</td>
  </tr>
  <tr>
   <td><code><a href="/ja/docs/Web/HTML/Attributes/span">span</a></code></td>
   <td>{{ HTMLElement("col") }}, {{ HTMLElement("colgroup") }}</td>
   <td></td>
  </tr>
  <tr>
   <td><code><a href="/ja/docs/Web/HTML/Global_attributes/spellcheck">spellcheck</a></code></td>
   <td><a href="/ja/docs/Web/HTML/Global_attributes">グローバル属性</a></td>
   <td>要素のスペルチェックを有効にするかどうかを示します。</td>
  </tr>
  <tr>
   <td><code><a href="/ja/docs/Web/HTML/Attributes/src">src</a></code></td>
   <td>{{ HTMLElement("audio") }}, {{ HTMLElement("embed") }}, {{ HTMLElement("iframe") }}, {{ HTMLElement("img") }}, {{ HTMLElement("input") }}, {{ HTMLElement("script") }}, {{ HTMLElement("source") }}, {{ HTMLElement("track") }}, {{ HTMLElement("video") }}</td>
   <td>埋め込みコンテンツの URL。</td>
  </tr>
  <tr>
   <td><code><a href="/ja/docs/Web/HTML/Attributes/srcdoc">srcdoc</a></code></td>
   <td>{{ HTMLElement("iframe") }}</td>
   <td></td>
  </tr>
  <tr>
   <td><code><a href="/ja/docs/Web/HTML/Attributes/srclang">srclang</a></code></td>
   <td>{{ HTMLElement("track") }}</td>
   <td></td>
  </tr>
  <tr>
   <td><code><a href="/ja/docs/Web/HTML/Attributes/srcset">srcset</a></code></td>
   <td>{{ HTMLElement("img") }}, {{ HTMLElement("source") }}</td>
   <td>一つ以上のレスポンシブ画像の候補です。</td>
  </tr>
  <tr>
   <td><code><a href="/ja/docs/Web/HTML/Attributes/start">start</a></code></td>
   <td>{{ HTMLElement("ol") }}</td>
   <td>1以外から始まる場合の最初の値を定義します。</td>
  </tr>
  <tr>
   <td><code><a href="/ja/docs/Web/HTML/Attributes/step">step</a></code></td>
   <td>{{ HTMLElement("input") }}</td>
   <td></td>
  </tr>
  <tr>
   <td><code><a href="/ja/docs/Web/HTML/Global_attributes/style">style</a></code></td>
   <td><a href="/ja/docs/Web/HTML/Global_attributes">グローバル属性</a></td>
   <td>外部スタイルシートや style 要素内に記述されたものより優先度の高いスタイル情報を記述する。</td>
  </tr>
  <tr>
   <td><code><a href="/ja/docs/Web/HTML/Attributes/summary">summary</a></code></td>
   <td>{{ HTMLElement("table") }}</td>
   <td></td>
  </tr>
  <tr>
   <td><code><a href="/ja/docs/Web/HTML/Global_attributes/tabindex">tabindex</a></code></td>
   <td><a href="/ja/docs/Web/HTML/Global_attributes">グローバル属性</a></td>
   <td>ブラウザーによる既定のタブオーダーを無効化して、指定した順序に従うようにします。</td>
  </tr>
  <tr>
   <td><code><a href="/ja/docs/Web/HTML/Attributes/target">target</a></code></td>
   <td>{{ HTMLElement("a") }}, {{ HTMLElement("area") }}, {{ HTMLElement("base") }}, {{ HTMLElement("form") }}</td>
   <td></td>
  </tr>
  <tr>
   <td><code><a href="/ja/docs/Web/HTML/Global_attributes/title">title</a></code></td>
   <td><a href="/ja/docs/Web/HTML/Global_attributes">グローバル属性</a></td>
   <td>要素の示す範囲のタイトル。PC ブラウザーでは、マウスオーバー時にツールチップとしてその属性値が表示される。</td>
  </tr>
  <tr>
   <td><code><a href="/ja/docs/Web/HTML/Attributes/translate">translate</a></code></td>
   <td><a href="/ja/docs/Web/HTML/Global_attributes">グローバル属性</a></td>
   <td>ページが翻訳版である場合、要素の属性値と子の <code><a href="https://dom.spec.whatwg.org/#text" id="ref-for-text①⑦">Text</a></code> ノードが翻訳されているか、変更せずにそのままであるかを指定します。</td>
  </tr>
  <tr>
   <td><code><a href="/ja/docs/Web/HTML/Attributes/type">type</a></code></td>
   <td>{{ HTMLElement("button") }}, {{ HTMLElement("input") }}, {{ HTMLElement("command") }}, {{ HTMLElement("embed") }}, {{ HTMLElement("object") }}, {{ HTMLElement("script") }}, {{ HTMLElement("source") }}, {{ HTMLElement("style") }}, {{ HTMLElement("menu") }}</td>
   <td>要素の型を定義する。</td>
  </tr>
  <tr>
   <td><code><a href="/ja/docs/Web/HTML/Attributes/usemap">usemap</a></code></td>
   <td>{{ HTMLElement("img") }}, {{ HTMLElement("input") }}, {{ HTMLElement("object") }}</td>
   <td></td>
  </tr>
  <tr>
   <td><code><a href="/ja/docs/Web/HTML/Attributes/value">value</a></code></td>
   <td>{{ HTMLElement("button") }}, {{ HTMLElement("data") }}, {{ HTMLElement("input") }}, {{ HTMLElement("li") }}, {{ HTMLElement("meter") }}, {{ HTMLElement("option") }}, {{ HTMLElement("progress") }}, {{ HTMLElement("param") }}</td>
   <td>ページ読み込み時に要素で表示するデフォルト値を定義する。</td>
  </tr>
  <tr>
   <td><code><a href="/ja/docs/Web/HTML/Attributes/width">width</a></code></td>
   <td>{{ HTMLElement("canvas") }}, {{ HTMLElement("embed") }}, {{ HTMLElement("iframe") }}, {{ HTMLElement("img") }}, {{ HTMLElement("input") }}, {{ HTMLElement("object") }}, {{ HTMLElement("video") }}</td>
   <td>
   <p>ここに挙げられた要素に対して、要素の幅を指定します。</p>

   <div class="note">
   <p><strong>注:</strong> {{ HTMLElement("div") }} など他の要素については、これは古い属性であり、代わりに CSS の {{ Cssxref("width") }} プロパティを使用してください。</p>
   </div>
   </td>
  </tr>
  <tr>
   <td><code><a href="/ja/docs/Web/HTML/Attributes/wrap">wrap</a></code></td>
   <td>{{ HTMLElement("textarea") }}</td>
   <td>テキストを折り返すかどうかを示します。</td>
  </tr>
 </tbody>
</table>

<h2 id="Content_versus_IDL_attributes" name="Content_versus_IDL_attributes">content 属性と IDL 属性</h2>

<p>HTML では、ほとんどの属性に <strong>content 属性</strong> と <strong>IDL (Interface Definition Language) 属性</strong> の 2 つの側面があります。</p>

<p>content 属性は content (HTML コード) から設定する属性であり、 {{domxref("element.setAttribute()")}} や {{domxref("element.getAttribute()")}} を使用して設定あるいは取得できます。 content 属性は値として数値を想定するものであっても、常に文字列です。例えば content 属性を使用して {{HTMLElement("input")}} 要素の <code>maxlength</code> 属性に 42 を設定するには、その要素で <code>setAttribute("maxlength", "42")</code> を呼び出さなければなりません。</p>

<p>IDL 属性は JavaScript プロパティとしても知られています。これらは <code class="moz-txt-verticalline">element.foo</code> といった JavaScript プロパティを使用して読み書きします。IDL 属性は読み取り時に値を返すため基になる content 属性を使用 (ただし、変換するでしょう) したり、書き込み時に content 属性へ何らかの値を保存したりします。言い換えると、IDL 属性は content 属性を映し出します。</p>

<p>ほとんどの場合、IDL 属性は実際に使用する値として自身の値を返します。例えば {{HTMLElement("input")}} 要素の <code>type</code> 属性のデフォルト値は "text" であるので、<code>input.type="foobar"</code> を設定すると <code>&lt;input&gt;</code> 要素は (外見と動作が) text タイプになりますが、"type" content 属性の値は "foobar" になります。しかし、<code>type</code> IDL 属性は文字列 "text" を返します。</p>

<p>IDL 属性は常に文字列とは限りません。例えば <code>input.maxlength</code> は数値 (符号付き long) です。IDL 属性を使用するときは望ましい型の値を読み書きするので、<code>input.maxlength</code> は常に数値を返し、また <code>input.maxlength</code> を設定するときは数値を要求します。他の型で渡すと、標準的な JavaScript の型変換規則に従って自動的に数値へ変換されます。</p>

<p>IDL 属性は符号なし long、URL、論理値など<a href="https://www.whatwg.org/specs/web-apps/current-work/multipage/urls.html#reflecting-content-attributes-in-idl-attributes">他の型を反映する</a>ことが可能です。残念ながら、属性に応じて IDL 属性が対応する content 属性と一体化して動作するための明確な規則や方法はありません。ほとんどの場合は<a href="http://www.whatwg.org/specs/web-apps/current-work/multipage/urls.html#reflecting-content-attributes-in-idl-attributes">仕様にある規則</a>に従いますが、そうでない場合もあります。 HTML 仕様では可能な限り開発者にやさしいものにしようとしていますが、さまざまな理由 (たいていは歴史的な理由) により奇妙な動作になる属性 (例えば <code>select.size</code>) があり、実際どのように動作するかを理解するために仕様書を読むようにしましょう。</p>

<h2 id="Boolean_Attributes" name="Boolean_Attributes">論理属性</h2>

<p>一部のコンテンツ属性 (例えば <code>required</code>, <code>readonly</code>, <code>disabled</code>) は<a href="https://www.w3.org/TR/html52/infrastructure.html#sec-boolean-attributes"><ruby>論理属性<rp> (</rp><rt>boolean attributes</rt><rp>) </rp></ruby></a>と呼ばれています。論理属性は存在すれば、その値は <strong>true</strong> となり、存在しなければ、その値は <strong>false</strong> となります。</p>

<p>HTML5 では、論理属性に許されている値の制約を定義しています。属性が存在する場合は、値は空文字列 (属性の値が割り当てられないことがあります) または属性の正式名に ASCII で大文字・小文字まで一致する値のどちらかで、前後にホワイトスペースを含んではいけません。以下の例は論理属性をマークアップする正しい方法です。</p>

<pre class="notranslate">&lt;div itemscope&gt; This is valid HTML but invalid XML. &lt;/div&gt;
&lt;div itemscope=itemscope&gt; This is also valid HTML but invalid XML. &lt;/div&gt;
&lt;div itemscope=""&gt; This is valid HTML and also valid XML. &lt;/div&gt;
&lt;div itemscope="itemscope"&gt; This is also valid HTML and XML, but perhaps a bit verbose. &lt;/div&gt;</pre>

<p>明確にするために、 "<code>true</code>" および "<code>false</code>" という値は論理属性では許可されていません。偽の値を表すには、属性ごと省略する必要があります。この制約により、いくつかのよくある誤解が明確になります。例えば <code>checked="false"</code> は、属性が存在するため、その要素の <code>checked</code> 属性が <strong>true</strong> であると解釈されます。</p>

<h2 id="See_also" name="See_also">関連情報</h2>

<ul>
 <li><a href="/ja/docs/Web/HTML/Element">HTML 要素</a></li>
</ul>
