---
title: HTML 属性リファレンス
slug: Web/HTML/Attributes
tags:
  - 属性
  - 初心者
  - 要素の属性
  - 要素
  - HTML
  - リファレンス
  - 設定
  - ウェブ
translation_of: Web/HTML/Attributes
---

{{HTMLSidebar}}

HTML の要素は**属性**を持ちます。ユーザーが望む条件を満たすために、さまざまな方法で要素を構成したり、動作を調整したりする追加の値です。

## グローバルイベントハンドラー

下記の表に並んでいる属性に加えて、 [`GlobalEventHandlers`](/ja/docs/Web/API/GlobalEventHandlers) の記事ではグローバルイベントハンドラー — [`onclick`](/ja/docs/Web/API/GlobalEventHandlers/onclick) など — を並べています。これもすべての要素で[コンテンツ属性](#コンテンツ属性と_idl_属性)として指定することができます。

## 属性一覧

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
      <td>
        <code><a href="/ja/docs/Web/HTML/Attributes/accept">accept</a></code>
      </td>
      <td>
        {{ HTMLElement("form") }}, {{ HTMLElement("input") }}
      </td>
      <td>サーバーの受容する型のリストです。ふつうはファイル形式です。</td>
    </tr>
    <tr>
      <td>
        <code><a href="/ja/docs/Web/HTML/Element/form#attr-accept-charset">accept-charset</a></code>
      </td>
      <td>{{ HTMLElement("form") }}</td>
      <td>対応している文字集合のリストです。</td>
    </tr>
    <tr>
      <td>
        <code><a href="/ja/docs/Web/HTML/Global_attributes/accesskey">accesskey</a></code>
      </td>
      <td>
        <a href="/ja/docs/Web/HTML/Global_attributes">グローバル属性</a>
      </td>
      <td>要素をアクティブ化したり、フォーカスを与えたりするためのショートカットキーです。</td>
    </tr>
    <tr>
      <td>
        <code><a href="/ja/docs/Web/HTML/Attributes/action">action</a></code>
      </td>
      <td>{{ HTMLElement("form") }}</td>
      <td>
        フォーム経由で送信される情報を処理するプログラムの URI です。
      </td>
    </tr>
    <tr>
      <td>
        <code><a href="/ja/docs/Web/HTML/Attributes/align">align</a></code>
      </td>
      <td>
        {{ HTMLElement("applet") }},
        {{ HTMLElement("caption") }}, {{ HTMLElement("col") }},
        {{ HTMLElement("colgroup") }},
        {{ HTMLElement("hr") }}, {{ HTMLElement("iframe") }},
        {{ HTMLElement("img") }}, {{ HTMLElement("table") }},
        {{ HTMLElement("tbody") }}, {{ HTMLElement("td") }},
        {{ HTMLElement("tfoot") }} , {{ HTMLElement("th") }},
        {{ HTMLElement("thead") }}, {{ HTMLElement("tr") }}
      </td>
      <td>要素の水平方向の配置を指定します。</td>
    </tr>
    <tr>
      <td>
        <code><a href="/ja/docs/Web/HTML/Element/iframe#attr-allow">allow</a></code>
      </td>
      <td>{{ HTMLElement("iframe") }}</td>
      <td>iframe の機能ポリシーを指定します。</td>
    </tr>
    <tr>
      <td>
        <code><a href="/ja/docs/Web/HTML/Attributes/alt">alt</a></code>
      </td>
      <td>
        {{ HTMLElement("applet") }}, {{ HTMLElement("area") }},
        {{ HTMLElement("img") }}, {{ HTMLElement("input") }}
      </td>
      <td>画像が表示できない場合の代替テキストです。</td>
    </tr>
    <tr>
      <td>
        <code><a href="/ja/docs/Web/HTML/Element/script#attr-async">async</a></code>
      </td>
      <td>{{ HTMLElement("script") }}</td>
      <td>スクリプトを非同期で実行します。</td>
    </tr>
    <tr>
      <td>
        <code><a href="/ja/docs/Web/HTML/Global_attributes/autocapitalize">autocapitalize</a></code>
      </td>
      <td>
        <a href="/ja/docs/Web/HTML/Global_attributes">グローバル属性</a>
      </td>
      <td>
        ユーザーによる入力が入力欄で自動的に大文字化されるかどうかを設定します。
      </td>
    </tr>
    <tr>
      <td>
        <code><a href="/ja/docs/Web/HTML/Attributes/autocomplete">autocomplete</a></code>
      </td>
      <td>
        {{ HTMLElement("form") }}, {{ HTMLElement("input") }},
        {{ HTMLElement("select") }},
        {{ HTMLElement("textarea") }}
      </td>
      <td>
        このフォーム内のコントロールが、ブラウザーによる値の自動補完を既定で許容するかを示します。
      </td>
    </tr>
    <tr>
      <td>
        <code><a href="/ja/docs/Web/HTML/Attributes/autofocus">autofocus</a></code>
      </td>
      <td>
        {{ HTMLElement("button") }},
        {{ HTMLElement("input") }},
        {{ HTMLElement("keygen") }},
        {{ HTMLElement("select") }},
        {{ HTMLElement("textarea") }}
      </td>
      <td>
        ページ読込後に、対象要素に自動的にフォーカスを当てるようにします。
      </td>
    </tr>
    <tr>
      <td>
        <code><a href="/ja/docs/Web/HTML/Attributes/autoplay">autoplay</a></code>
      </td>
      <td>
        {{ HTMLElement("audio") }},
        {{ HTMLElement("video") }}
      </td>
      <td>オーディオやビデオが再生可能になった時点で自動再生を開始します。</td>
    </tr>
    <tr>
      <td><code>background</code></td>
      <td>
        {{ HTMLElement("body") }}, {{ HTMLElement("table") }},
        {{ HTMLElement("td") }}, {{ HTMLElement("th") }}
      </td>
      <td>
        画像ファイルの URL を指定します。
        <div class="note">
          <p>
            <strong>注:</strong> ブラウザーや電子メールクライアントはまだこの属性に対応していますが、廃止済みです。代わりに CSS の {{ Cssxref("background-image") }} を使用してください。
          </p>
        </div>
      </td>
    </tr>
    <tr>
      <td><code>bgcolor</code></td>
      <td>
        {{ HTMLElement("body") }}, {{ HTMLElement("col") }},
        {{ HTMLElement("colgroup") }},
        {{ HTMLElement("marquee") }},
        {{ HTMLElement("table") }},
        {{ HTMLElement("tbody") }},
        {{ HTMLElement("tfoot") }}, {{ HTMLElement("td") }},
        {{ HTMLElement("th") }}, {{ HTMLElement("tr") }}
      </td>
      <td>
        <p>要素の背景色です。</p>
        <div class="note">
          <p>
            <strong>注:</strong> これは古い属性です。代わりに CSS の {{ Cssxref("background-color") }} プロパティを使用してください。
          </p>
        </div>
      </td>
    </tr>
    <tr>
      <td><code>border</code></td>
      <td>
        {{ HTMLElement("img") }}, {{ HTMLElement("object") }},
        {{ HTMLElement("table") }}
      </td>
      <td>
        <p>境界線の幅です。</p>
        <div class="note">
          <p>
            <strong>注:</strong> これは古い属性です。代わりに CSS の {{ Cssxref("border") }} プロパティを使用してください。
          </p>
        </div>
      </td>
    </tr>
    <tr>
      <td>
        <code><a href="/ja/docs/Web/HTML/Attributes/buffered">buffered</a></code>
      </td>
      <td>
        {{ HTMLElement("audio") }},
        {{ HTMLElement("video") }}
      </td>
      <td>すでにバッファリングされたメディアの時間の範囲を示します。</td>
    </tr>
    <tr>
      <td>
        <code><a href="/ja/docs/Web/HTML/Attributes/capture">capture</a></code>
      </td>
      <td>{{ HTMLElement("input") }}</td>
      <td>
        <a href="https://w3c.github.io/html-media-capture/#the-capture-attribute">Media Capture 仕様書</a>から、キャプチャできる新しいファイルを指定します。
      </td>
    </tr>
    <tr>
      <td>
        <code><a href="/ja/docs/Web/HTML/Element/keygen#attr-challenge">challenge</a></code>
      </td>
      <td>{{ HTMLElement("keygen") }}</td>
      <td>公開鍵とともに送信するチャレンジ文字列</td>
    </tr>
    <tr>
      <td>
        <code><a href="/ja/docs/Web/HTML/Attributes/charset">charset</a></code>
      </td>
      <td>
        {{ HTMLElement("meta") }}, {{ HTMLElement("script") }}
      </td>
      <td>ページまたはスクリプトの文字エンコーディングを宣言します。</td>
    </tr>
    <tr>
      <td>
        <code><a href="/ja/docs/Web/HTML/Attributes/checked">checked</a></code>
      </td>
      <td>
        {{ HTMLElement("command") }},
        {{ HTMLElement("input") }}
      </td>
      <td>ページ読み込み時に要素にチェックを入れておくかどうかを指定します。</td>
    </tr>
    <tr>
      <td>
        <code><a href="/ja/docs/Web/HTML/Attributes/cite">cite</a></code>
      </td>
      <td>
        {{ HTMLElement("blockquote") }},
        {{ HTMLElement("del") }}, {{ HTMLElement("ins") }},
        {{ HTMLElement("q") }}
      </td>
      <td>引用元または変更点の情報源を指す URI を格納します。</td>
    </tr>
    <tr>
      <td>
        <code><a href="/ja/docs/Web/HTML/Global_attributes/class">class</a></code>
      </td>
      <td>
        <a href="/ja/docs/Web/HTML/Global_attributes">グローバル属性</a>
      </td>
      <td>よく使われるプロパティで要素にスタイルを適用するために CSS と共によく用いられます。</td>
    </tr>
    <tr>
      <td><code><a href="/ja/docs/Web/HTML/Attributes/code">code</a></code></td>
      <td>{{ HTMLElement("applet") }}</td>
      <td>読み込んで実行するアプレットのクラスファイルの URL を指定します。</td>
    </tr>
    <tr>
      <td>
        <code><a href="/ja/docs/Web/HTML/Element/applet#attr-codebase">codebase</a></code>
      </td>
      <td>{{ HTMLElement("applet") }}</td>
      <td>
        code 属性で参照するアプレットの .class ファイルを配置しているディレクトリの絶対 URL または相対 URL を指定します。
      </td>
    </tr>
    <tr>
      <td><code>color</code></td>
      <td>
        {{ HTMLElement("basefont") }},
        {{ HTMLElement("font") }}, {{ HTMLElement("hr") }}
      </td>
      <td>
        <p>
          この属性は色名または16進数の #RRGGBB 形式を用いて文字色を設定します。
        </p>
        <div class="note">
        <p>
          <strong>注:</strong> これは古い属性です。代わりに CSS の {{Cssxref("color")}} プロパティを使用して下さい。
        </p>
      </div>
      </td>
    </tr>
    <tr>
      <td>
        <code><a href="/ja/docs/Web/HTML/Element/textarea#attr-cols">cols</a></code>
      </td>
      <td>{{ HTMLElement("textarea") }}</td>
      <td>テキストエリアの桁数 (水平方向の文字数) を定義します。</td>
    </tr>
    <tr>
      <td>
        <code><a href="/ja/docs/Web/HTML/Attributes/colspan">colspan</a></code>
      </td>
      <td>
        {{ HTMLElement("td") }}, {{ HTMLElement("th") }}
      </td>
      <td>
        colspan 属性はテーブルのセルを結合する列数を定義します。
      </td>
    </tr>
    <tr>
      <td>
        <code><a href="/ja/docs/Web/HTML/Element/meta#attr-content">content</a></code>
      </td>
      <td>{{ HTMLElement("meta") }}</td>
      <td>
        状況に応じて、 <code>http-equiv</code> または <code>name</code> に関連した値です。
      </td>
    </tr>
    <tr>
      <td>
        <code><a href="/ja/docs/Web/HTML/Global_attributes/contenteditable">contenteditable</a></code>
      </td>
      <td>
        <a href="/ja/docs/Web/HTML/Global_attributes">グローバル属性</a>
      </td>
      <td>要素の内容が編集可能であるかどうかを示します。</td>
    </tr>
    <tr>
      <td>
        <code><a href="/ja/docs/Web/HTML/Attributes/contextmenu">contextmenu</a></code>
      </td>
      <td>
        <a href="/ja/docs/Web/HTML/Global_attributes">グローバル属性</a>
      </td>
      <td>
        要素のコンテキストメニューとして機能する {{HTMLElement("menu")}} 要素の ID を定義します。
      </td>
    </tr>
    <tr>
      <td>
        <code><a href="/ja/docs/Web/HTML/Attributes/controls">controls</a></code>
      </td>
      <td>
        {{ HTMLElement("audio") }},
        {{ HTMLElement("video") }}
      </td>
      <td>
        再生コントロールをユーザーに表示すべきかどうかを示します。
      </td>
    </tr>
    <tr>
      <td>
        <code><a href="/ja/docs/Web/HTML/Element/area#attr-coords">coords</a></code>
      </td>
      <td>{{ HTMLElement("area") }}</td>
      <td>
        ホットスポット領域の座標を指定するための値のセットです。
      </td>
    </tr>
    <tr>
      <td>
        <code><a href="/ja/docs/Web/HTML/Attributes/crossorigin">crossorigin</a></code>
      </td>
      <td>
        {{ HTMLElement("audio") }}, {{ HTMLElement("img") }},
        {{ HTMLElement("link") }}, {{ HTMLElement("script") }},
        {{ HTMLElement("video") }}
      </td>
      <td>要素がオリジン間リクエストをどう扱うか</td>
    </tr>
    <tr>
      <td>
        <code><a href="/ja/docs/Web/API/HTMLIFrameElement/csp">csp</a></code> {{experimental_inline}}
      </td>
      <td>{{ HTMLElement("iframe") }}</td>
      <td>
        埋め込まれた文書が管理されるためのコンテンツセキュリティポリシーを指定します。
      </td>
    </tr>
    <tr>
      <td>
        <code><a href="/ja/docs/Web/HTML/Element/object#attr-data">data</a></code>
      </td>
      <td>{{ HTMLElement("object") }}</td>
      <td>リソースの URL を指定します。</td>
    </tr>
    <tr>
      <td>
        <code><a href="/ja/docs/Web/HTML/Global_attributes/data-*">data-*</a></code>
      </td>
      <td>
        <a href="/ja/docs/Web/HTML/Global_attributes">グローバル属性</a>
      </td>
      <td>HTML 要素にカスタム属性が添付できるようにします。</td>
    </tr>
    <tr>
      <td>
        <code><a href="/ja/docs/Web/HTML/Attributes/datetime">datetime</a></code>
      </td>
      <td>
        {{ HTMLElement("del") }}, {{ HTMLElement("ins") }},
        {{ HTMLElement("time") }}
      </td>
      <td>要素に関連付けられた日時を示します。</td>
    </tr>
    <tr>
      <td>
        <code><a href="/ja/docs/Web/HTML/Element/img#attr-decoding">decoding</a></code>
      </td>
      <td>{{ HTMLElement("img") }}</td>
      <td>画像をデコードする推奨の方法を示します。</td>
    </tr>
    <tr>
      <td>
        <code><a href="/ja/docs/Web/HTML/Element/track#attr-default">default</a></code>
      </td>
      <td>{{ HTMLElement("track") }}</td>
      <td>
        ユーザー設定によって異なることが示されていない限り、トラックが有効であることを示します。
      </td>
    </tr>
    <tr>
      <td>
        <code><a href="/ja/docs/Web/HTML/Element/script#attr-defer">defer</a></code>
      </td>
      <td>{{ HTMLElement("script") }}</td>
      <td>
        ページの解釈が完了した後に実行するスクリプトであることを示します。
      </td>
    </tr>
    <tr>
      <td>
        <code><a href="/ja/docs/Web/HTML/Global_attributes/dir">dir</a></code>
      </td>
      <td>
        <a href="/ja/docs/Web/HTML/Global_attributes">グローバル属性</a>
      </td>
      <td>
        テキストの書字方向を定義します。使用できる値は ltr (Left-To-Right) または rtl (Right-To-Left) です。
      </td>
    </tr>
    <tr>
      <td>
        <code><a href="/ja/docs/Web/HTML/Attributes/dirname">dirname</a></code>
      </td>
      <td>
        {{ HTMLElement("input") }},
        {{ HTMLElement("textarea") }}
      </td>
      <td></td>
    </tr>
    <tr>
      <td>
        <code><a href="/ja/docs/Web/HTML/Attributes/disabled">disabled</a></code>
      </td>
      <td>
        {{ HTMLElement("button") }},
        {{ HTMLElement("command") }},
        {{ HTMLElement("fieldset") }},
        {{ HTMLElement("input") }},
        {{ HTMLElement("keygen") }},
        {{ HTMLElement("optgroup") }},
        {{ HTMLElement("option") }},
        {{ HTMLElement("select") }},
        {{ HTMLElement("textarea") }}
      </td>
      <td>閲覧者によるによるコントロールの操作を無効にするかどうかを示します。</td>
    </tr>
    <tr>
      <td>
        <code><a href="/ja/docs/Web/HTML/Attributes/download">download</a></code>
      </td>
      <td>{{ HTMLElement("a") }}, {{ HTMLElement("area") }}</td>
      <td>
        リソースをダウンロードするためのハイパーリンクであるかどうかを示します。
      </td>
    </tr>
    <tr>
      <td>
        <code><a href="/ja/docs/Web/HTML/Global_attributes/draggable">draggable</a></code>
      </td>
      <td>
        <a href="/ja/docs/Web/HTML/Global_attributes">グローバル属性</a>
      </td>
      <td>要素がドラッグ可能であるかどうかを示します。</td>
    </tr>
    <tr>
      <td>
        <code><a href="/ja/docs/Web/HTML/Element/form#attr-enctype">enctype</a></code>
      </td>
      <td>{{ HTMLElement("form") }}</td>
      <td>
        <code>method</code> 属性が POST である場合に、フォームデータのコンテンツ型を定義します。
      </td>
    </tr>
    <tr>
      <td>
        <code><a href="/ja/docs/Web/HTML/Attributes/enterkeyhint">enterkeyhint</a></code> 
        {{experimental_inline}}
      </td>
      <td>
        {{ HTMLElement("textarea") }},
        <a href="/ja/docs/Web/HTML/Global_attributes/contenteditable"><code>contenteditable</code></a>
      </td>
      <td>
        <a href="https://html.spec.whatwg.org/dev/interaction.html#input-modalities:-the-enterkeyhint-attribute"><code>enterkeyhint</code></a> は、仮想キーボードの Enter キーにあるアクションラベル (またはアイコン) が何であるかを指定します。この属性はフォームコントロール (<code>textarea</code> 要素の値など) と共に、または編集対象となっている要素 (例えば <code>contenteditable</code> 属性の使用など) の中で使用することができます。
      </td>
    </tr>
    <tr>
      <td>
        <code><a href="/ja/docs/Web/HTML/Attributes/for">for</a></code>
      </td>
      <td>
        {{ HTMLElement("label") }},
        {{ HTMLElement("output") }}
      </td>
      <td>この要素が属する要素を指定します。</td>
    </tr>
    <tr>
      <td>
        <code><a href="/ja/docs/Web/HTML/Attributes/form">form</a></code>
      </td>
      <td>
        {{ HTMLElement("button") }},
        {{ HTMLElement("fieldset") }},
        {{ HTMLElement("input") }},
        {{ HTMLElement("keygen") }},
        {{ HTMLElement("label") }},
        {{ HTMLElement("meter") }},
        {{ HTMLElement("object") }},
        {{ HTMLElement("output") }},
        {{ HTMLElement("progress") }},
        {{ HTMLElement("select") }},
        {{ HTMLElement("textarea") }}
      </td>
      <td>その要素が所属するフォームを示します。</td>
    </tr>
    <tr>
      <td><code><a href="/ja/docs/Web/HTML/Attributes/formaction">formaction</a></code></td>
      <td>
        {{ HTMLElement("input") }},
        {{ HTMLElement("button") }}
      </td>
      <td>
        その要素のアクションを示します。 {{ HTMLElement("form") }} で定義されたアクションを上書きします。
      </td>
    </tr>
    <tr>
      <td>
        <code><a href="/ja/docs/Web/HTML/Attributes/formenctype">formenctype</a>
      </code>
      </td>
      <td>
        {{ HTMLElement("button") }},
        {{ HTMLElement("input") }}
      </td>
      <td>
        button や input が送信ボタンである場合 (<code>type="submit"</code>)、この属性はフォーム送信で使用するエンコーディング型を設定します。この属性が指定された場合、ボタンを所有する<a href="/ja/docs/Web/HTML/Element/form">フォーム</a>の <code>enctype</code> 属性より優先されます。
      </td>
    </tr>
    <tr>
      <td>
        <code><a href="/ja/docs/Web/HTML/Attributes/formmethod">formmethod</a></code>
      </td>
      <td>
        {{ HTMLElement("button") }},
        {{ HTMLElement("input") }}
      </td>
      <td>
        button や input が送信ボタンである場合 (<code>type="submit"</code>)、この属性はフォーム送信で使用する送信メソッド (<code>GET</code>, <code>POST</code>, など) を設定します。この属性が指定された場合、ボタンを所有する<a href="/ja/docs/Web/HTML/Element/form">フォーム</a>の <code>method</code> 属性より優先されます。
      </td>
    </tr>
    <tr>
      <td>
        <code><a href="/ja/docs/Web/HTML/Attributes/formnovalidate">formnovalidate</a></code>
      </td>
      <td>
        {{ HTMLElement("button") }},
        {{ HTMLElement("input") }}
      </td>
      <td>
        button や input が送信ボタンである場合 (<code>type="submit"</code>)、この論理属性はフォームが送信時に検証されないことを指定します。この属性が指定された場合、ボタンを所有する<a href="/ja/docs/Web/HTML/Element/form">フォーム</a>の <code>novalidate</code> 属性より優先されます。
      </td>
    </tr>
    <tr>
      <td>
        <code><a href="/ja/docs/Web/HTML/Attributes/formtarget">formtarget</a></code>
      </td>
      <td>
        {{ HTMLElement("button") }},
        {{ HTMLElement("input") }}
      </td>
      <td>
        button や input が送信ボタンである場合 (<code>type="submit"</code>)、この属性はフォームを送信した後で受け取るレスポンスを表示する閲覧コンテキスト (例えば、タブ、ウィンドウ、インラインフレーム) を指定します。この属性が指定された場合、ボタンを所有する<a href="/ja/docs/Web/HTML/Element/form">フォーム</a>の <code>target</code> 属性より優先されます。
      </td>
    </tr>
    <tr>
      <td>
        <code><a href="/ja/docs/Web/HTML/Attributes/headers">headers</a></code>
      </td>
      <td>
        {{ HTMLElement("td") }}, {{ HTMLElement("th") }}
      </td>
      <td>
        この要素に適用する <code>&#x3C;th></code> 要素の ID。
      </td>
    </tr>
    <tr>
      <td><code>height</code></td>
      <td>
        {{ HTMLElement("canvas") }},
        {{ HTMLElement("embed") }},
        {{ HTMLElement("iframe") }}, {{ HTMLElement("img") }},
        {{ HTMLElement("input") }},
        {{ HTMLElement("object") }},
        {{ HTMLElement("video") }}
      </td>
      <td>
        <p>
          ここに挙げた要素の高さを指定します。他の要素では、 {{cssxref("height")}} プロパティを使用してください。
        </p>
        <div class="note">
          <p>
            <strong>注:</strong> {{HTMLElement("div")}} など一部の要素では、これは古い属性であり、代わりに CSS の {{Cssxref("height")}} プロパティを使用してください。
          </p>
        </div>
      </td>
    </tr>
    <tr>
      <td>
        <code><a href="/ja/docs/Web/HTML/Global_attributes/hidden">hidden</a></code>
      </td>
      <td>
        <a href="/ja/docs/Web/HTML/Global_attributes">グローバル属性</a>
      </td>
      <td>
        この要素のレンダリングを抑制しますが、 script 要素などの子要素は有効なままにします。
      </td>
    </tr>
    <tr>
      <td>
        <code><a href="/ja/docs/Web/HTML/Element/meter#attr-high">high</a></code>
      </td>
      <td>{{ HTMLElement("meter") }}</td>
      <td>最大値の下限を示します。</td>
    </tr>
    <tr>
      <td>
        <code><a href="/ja/docs/Web/HTML/Attributes/href">href</a></code>
      </td>
      <td>
        {{ HTMLElement("a") }}, {{ HTMLElement("area") }},
        {{ HTMLElement("base") }}, {{ HTMLElement("link") }}
      </td>
      <td>リンクされたリソースの URL です。</td>
    </tr>
    <tr>
      <td>
        <code><a href="/ja/docs/Web/HTML/Attributes/hreflang">hreflang</a></code>
      </td>
      <td>
        {{ HTMLElement("a") }}, {{ HTMLElement("area") }},
        {{ HTMLElement("link") }}
      </td>
      <td>リンクされたリソースの言語を指定します。</td>
    </tr>
    <tr>
      <td>
        <code><a href="/ja/docs/Web/HTML/Element/meta#attr-http-equiv">http-equiv</a>
      </code>
      </td>
      <td>{{ HTMLElement("meta") }}</td>
      <td>プラグマディレクティブを定義します。</td>
    </tr>
    <tr>
      <td><code><a href="/ja/docs/Web/HTML/Element/command#attr-icon">icon</a></code></td>
      <td>{{ HTMLElement("command") }}</td>
      <td>コマンドを表す画像を指定します。</td>
    </tr>
    <tr>
      <td>
        <code><a href="/ja/docs/Web/HTML/Global_attributes/id">id</a></code>
      </td>
      <td>
        <a href="/ja/docs/Web/HTML/Global_attributes">グローバル属性</a>
      </td>
      <td>
        特定の要素へスタイルを設定するために CSS と共によく使われます。この属性の値は一意でなければなりません。
      </td>
    </tr>
    <tr>
      <td>
        <code><a href="/ja/docs/Web/HTML/Attributes/importance">importance</a></code> {{experimental_inline}}
      </td>
      <td>
        {{ HTMLElement("iframe") }}, {{ HTMLElement("img") }},
        {{ HTMLElement("link") }}, {{ HTMLElement("script") }}
      </td>
      <td>リソースの相対的なフェッチ優先順位を示します。</td>
    </tr>
    <tr>
      <td>
        <code><a href="/ja/docs/Web/Security/Subresource_Integrity">integrity</a></code>
      </td>
      <td>
        {{ HTMLElement("link") }}, {{ HTMLElement("script") }}
      </td>
      <td>
      <p>
        ブラウザーが読み込むものを検証できるようにするための<a href="/ja/docs/Web/Security/Subresource_Integrity">サブリソース完全性</a>の値を指定します。
      </p>
      </td>
    </tr>
    <tr>
      <td>
        <a href="/ja/docs/Web/HTML/Element/img#attr-intrinsicsize"><code>intrinsicsize</code></a>
        {{deprecated_inline}}
      </td>
      <td>{{ HTMLElement("img") }}</td>
      <td>
        この属性はブラウザーに、画像に固有の実際の寸法を無視して、属性で指定された寸法を割り当てるように指示します。
      </td>
    </tr>
    <tr>
      <td>
        <a href="/ja/docs/Web/HTML/Global_attributes/inputmode"><code>inputmode</code></a>
      </td>
      <td>
        {{ HTMLElement("textarea") }},
        <a href="/ja/docs/Web/HTML/Global_attributes/contenteditable"><code>contenteditable</code></a>
      </td>
      <td>
        要素やその内容を編集する際に、ユーザーが入力する可能性のあるデータの種類のヒントを提供します。この属性はフォームコントロール (<code>textarea</code> 要素の値など) と共に、または編集対象となっている要素 (例えば <code>contenteditable</code> 属性の使用など) の中で使用することができます。
      </td>
    </tr>
    <tr>
      <td>
        <code><a href="/ja/docs/Web/HTML/Element/img#attr-ismap">ismap</a></code>
      </td>
      <td>{{ HTMLElement("img") }}</td>
      <td>画像がサーバーサイドイメージマップの一部であることを示します。</td>
    </tr>
    <tr>
      <td>
        <code><a href="/ja/docs/Web/HTML/Global_attributes/itemprop">itemprop</a></code>
      </td>
      <td>
        <a href="/ja/docs/Web/HTML/Global_attributes">グローバル属性</a>
      </td>
      <td></td>
    </tr>
    <tr>
      <td>
        <code><a href="/ja/docs/Web/HTML/Element/keygen#attr-keytype">keytype</a></code>
      </td>
      <td>{{ HTMLElement("keygen") }}</td>
      <td>生成する鍵の種類を指定します。</td>
    </tr>
    <tr>
      <td>
        <code><a href="/ja/docs/Web/HTML/Element/track#attr-kind">kind</a></code>
      </td>
      <td>{{ HTMLElement("track") }}</td>
      <td>テキストトラックの種類を指定します。</td>
    </tr>
    <tr>
      <td>
        <code><a href="/ja/docs/Web/HTML/Attributes/label">label</a></code>
      </td>
      <td>
        {{ HTMLElement("optgroup") }},
        {{ HTMLElement("option") }},
        {{ HTMLElement("track") }}
      </td>
      <td>ユーザーが読める形の要素のタイトルを指定します。</td>
    </tr>
    <tr>
      <td>
        <code><a href="/ja/docs/Web/HTML/Global_attributes/lang">lang</a></code>
      </td>
      <td>
        <a href="/ja/docs/Web/HTML/Global_attributes">グローバル属性</a>
      </td>
      <td>要素内で用いられている言語を定義します。</td>
    </tr>
    <tr>
      <td>
        <code><a href="/ja/docs/Web/HTML/Element/script#attr-language">language</a></code>
        {{deprecated_inline}}
      </td>
      <td>{{ HTMLElement("script") }}</td>
      <td>要素で使用しているスクリプト言語を定義します。</td>
    </tr>
    <tr>
      <td><code>loading</code> {{experimental_inline}}</td>
      <td>
        {{ HTMLElement("img") }}, {{ HTMLElement("iframe") }}
      </td>
      <td>
        要素を遅延読み込みさせたいか (<code>loading="lazy"</code>) または直ちに読み込ませたいか  (<code>loading="eager"</code>) を示します。
      </td>
    </tr>
    <tr>
      <td>
        <code><a href="/ja/docs/Web/HTML/Element/input#attr-list">list</a></code>
      </td>
      <td>{{ HTMLElement("input") }}</td>
      <td>ユーザに提案するため、事前に定義した選択肢のリストを示す。</td>
    </tr>
    <tr>
      <td>
        <code><a href="/ja/docs/Web/HTML/Attributes/loop">loop</a></code>
      </td>
      <td>
        {{ HTMLElement("audio") }},
        {{ HTMLElement("bgsound") }},
        {{ HTMLElement("marquee") }},
        {{ HTMLElement("video") }}
      </td>
      <td>
        メディアの再生が完了した後、始めから再生を開始するかを示します。
      </td>
    </tr>
    <tr>
      <td>
        <code><a href="/ja/docs/Web/HTML/Element/meter#attr-low">low</a></code>
      </td>
      <td>{{ HTMLElement("meter") }}</td>
      <td>最小値の上限を示します。</td>
    </tr>
    <tr>
      <td>
        <code><a href="/ja/docs/Web/HTML/Element/html#attr-manifest">manifest</a></code>
        {{deprecated_inline}}
      </td>
      <td>{{ HTMLElement("html") }}</td>
      <td>
        この文書のキャッシュマニフェストの URL を指定します。 
        <div class="note">
          <p>
            <strong>注:</strong> この属性は廃止されており、代わりに <a href="/ja/docs/Web/Manifest"><code>&#x3C;link rel="manifest"></code></a> を使用してください。
          </p>
        </div>
      </td>
    </tr>
    <tr>
      <td>
        <code><a href="/ja/docs/Web/HTML/Attributes/max">max</a></code>
      </td>
      <td>
        {{ HTMLElement("input") }},
        {{ HTMLElement("meter") }},
        {{ HTMLElement("progress") }}
      </td>
      <td>許容される最大の値を示します。</td>
    </tr>
    <tr>
      <td>
        <code><a href="/ja/docs/Web/HTML/Attributes/maxlength">maxlength</a></code>
      </td>
      <td>
        {{ HTMLElement("input") }},
        {{ HTMLElement("textarea") }}
      </td>
      <td>要素が許容する最大文字数を定義します。</td>
    </tr>
    <tr>
      <td>
        <code><a href="/ja/docs/Web/HTML/Attributes/minlength">minlength</a></code>
      </td>
      <td>
        {{ HTMLElement("input") }},
        {{ HTMLElement("textarea") }}
      </td>
      <td>要素が許容する最小文字数を定義します。</td>
    </tr>
    <tr>
      <td>
        <code><a href="/ja/docs/Web/HTML/Attributes/media">media</a></code>
      </td>
      <td>
        {{ HTMLElement("a") }}, {{ HTMLElement("area") }},
        {{ HTMLElement("link") }}, {{ HTMLElement("source") }},
        {{ HTMLElement("style") }}
      </td>
      <td>
        リンクされたリソースがどのメディアに対して設計されたかを指定します。
      </td>
    </tr>
    <tr>
      <td>
        <code><a href="/ja/docs/Web/HTML/Element/form#attr-method">method</a></code>
      </td>
      <td>{{ HTMLElement("form") }}</td>
      <td>
        フォームを送信する際に使用する <a href="/ja/docs/Web/HTTP">HTTP</a> メソッドを定義します。 <code>GET</code> (既定値) または <code>POST</code> が指定可能です。
      </td>
    </tr>
    <tr>
      <td>
        <code><a href="/ja/docs/Web/HTML/Attributes/min">min</a></code>
      </td>
      <td>
        {{ HTMLElement("input") }},
        {{ HTMLElement("meter") }}
      </td>
      <td>許容される最小の値を示します。</td>
    </tr>
    <tr>
      <td>
        <code><a href="/ja/docs/Web/HTML/Attributes/multiple">multiple</a></code>
      </td>
      <td>
        {{ HTMLElement("input") }},
        {{ HTMLElement("select") }}
      </td>
      <td>
        input で type が <code>email</code> または <code>file</code> の input ものでは、複数の値を入力可能かどうかを示します。
      </td>
    </tr>
    <tr>
      <td>
        <code><a href="/ja/docs/Web/HTML/Attributes/muted">muted</a></code>
      </td>
      <td>
        {{ HTMLElement("audio") }},
        {{ HTMLElement("video") }}
      </td>
      <td>
        ページ読み込み時に音声を無音にするかどうかを示します。
      </td>
    </tr>
    <tr>
      <td>
        <code><a href="/ja/docs/Web/HTML/Attributes/name">name</a></code>
      </td>
      <td>
        {{ HTMLElement("button") }}, {{ HTMLElement("form") }},
        {{ HTMLElement("fieldset") }},
        {{ HTMLElement("iframe") }},
        {{ HTMLElement("input") }},
        {{ HTMLElement("keygen") }},
        {{ HTMLElement("object") }},
        {{ HTMLElement("output") }},
        {{ HTMLElement("select") }},
        {{ HTMLElement("textarea") }},
        {{ HTMLElement("map") }}, {{ HTMLElement("meta") }},
        {{ HTMLElement("param") }}
      </td>
      <td>
        要素の名前です。例えば、送信されたフォームでサーバーがフィールドを識別するために使用します。
      </td>
    </tr>
    <tr>
      <td>
        <code><a href="/ja/docs/Web/HTML/Element/form#attr-novalidate">novalidate</a></code>
      </td>
      <td>{{ HTMLElement("form") }}</td>
      <td>
        送信時にフォームが検証しないことを示す属性です。
      </td>
    </tr>
    <tr>
      <td>
        <code><a href="/ja/docs/Web/HTML/Attributes/open">open</a></code>
      </td>
      <td>
        {{ HTMLElement("details") }},
        {{ HTMLElement("dialog") }}
      </td>
      <td>
      コンテンツが現在表示されているか（<code>&#x3C;details></code> 要素の場合）、ダイアログがアクティブで対話可能か（<code>&#x3C;dialog></code> 要素の場合）を示します。
      </td>
    </tr>
    <tr>
      <td>
        <code><a href="/ja/docs/Web/HTML/Element/meter#attr-optimum">optimum</a></code>
      </td>
      <td>{{ HTMLElement("meter") }}</td>
      <td>最適な値を示します。</td>
    </tr>
    <tr>
      <td>
        <code><a href="/ja/docs/Web/HTML/Attributes/pattern">pattern</a></code>
      </td>
      <td>{{ HTMLElement("input") }}</td>
      <td>
        要素の値を検証するための正規表現を定義します。
      </td>
    </tr>
    <tr>
      <td>
        <code><a href="/ja/docs/Web/HTML/Element/a#attr-ping">ping</a></code>
      </td>
      <td>{{ HTMLElement("a") }}, {{ HTMLElement("area") }}</td>
      <td>
        <code>ping</code> 属性は、ユーザーがハイパーリンクをたどる場合に通知される URL のリストを空白区切りで指定します。
      </td>
    </tr>
    <tr>
      <td>
        <code><a href="/ja/docs/Web/HTML/Attributes/placeholder">placeholder</a></code>
      </td>
      <td>
        {{ HTMLElement("input") }},
        {{ HTMLElement("textarea") }}
      </td>
      <td>フィールドが何を入力するものであるかのヒントを閲覧者に対し提供します。</td>
    </tr>
    <tr>
      <td>
        <code><a href="/ja/docs/Web/HTML/Element/video#attr-poster">poster</a></code>
      </td>
      <td>{{ HTMLElement("video") }}</td>
      <td>
        ユーザが再生やシークを行うまでの間に表示するポスターフレームの URL です。
      </td>
    </tr>
    <tr>
      <td>
        <code><a href="/ja/docs/Web/HTML/Attributes/preload">preload</a></code>
      </td>
      <td>
        {{ HTMLElement("audio") }},
        {{ HTMLElement("video") }}
      </td>
      <td>
        リソースの全体または一部の先読みを行う、あるいは先読みを行わないことを示す。
      </td>
    </tr>
    <tr>
      <td>
        <code><a href="/ja/docs/Web/HTML/Element/command#attr-radiogroup">radiogroup</a></code>
      </td>
      <td>{{ HTMLElement("command") }}</td>
      <td></td>
    </tr>
    <tr>
      <td>
        <code><a href="/ja/docs/Web/HTML/Attributes/readonly">readonly</a></code>
      </td>
      <td>
        {{ HTMLElement("input") }},
        {{ HTMLElement("textarea") }}
      </td>
      <td>要素が編集できるかどうかを示す。</td>
    </tr>
    <tr>
      <td>
        <code><a href="/ja/docs/Web/HTML/Attributes/referralpolicy">referrerpolicy</a></code>
      </td>
      <td>
        {{ HTMLElement("a") }}, {{ HTMLElement("area") }},
        {{ HTMLElement("iframe") }}, {{ HTMLElement("img") }},
        {{ HTMLElement("link") }}, {{ HTMLElement("script") }}
      </td>
      <td>リソースにアクセスする際にどのリファラーが送信されるかを指定します。</td>
    </tr>
    <tr>
      <td>
        <code><a href="/ja/docs/Web/HTML/Attributes/rel">rel</a></code>
      </td>
      <td>
        {{ HTMLElement("a") }}, {{ HTMLElement("area") }},
        {{ HTMLElement("link") }}
      </td>
      <td>
        リンク先オブジェクトとリンク元オブジェクトとの関係を指定します。
      </td>
    </tr>
    <tr>
      <td>
        <code><a href="/ja/docs/Web/HTML/Attributes/required">required</a></code>
      </td>
      <td>
        {{ HTMLElement("input") }},
        {{ HTMLElement("select") }},
        {{ HTMLElement("textarea") }}
      </td>
      <td>入力が必須の要素であるかを示します。</td>
    </tr>
    <tr>
      <td>
        <code><a href="/ja/docs/Web/HTML/Element/ol#attr-reversed">reversed</a></code>
      </td>
      <td>{{ HTMLElement("ol") }}</td>
      <td>
        リストを昇順ではなく降順に表示することを示します。
      </td>
    </tr>
    <tr>
      <td>
        <code><a href="/ja/docs/Web/HTML/Element/textarea#attr-rows">rows</a></code>
      </td>
      <td>{{ HTMLElement("textarea") }}</td>
      <td>textarea の行数を定義します。</td>
    </tr>
    <tr>
      <td>
        <code><a href="/ja/docs/Web/HTML/Attributes/rowspan">rowspan</a></code>
      </td>
      <td>
        {{ HTMLElement("td") }}, {{ HTMLElement("th") }}
      </td>
      <td>テーブルセルがまたがる行数を定義します。</td>
    </tr>
    <tr>
      <td>
        <code><a href="/ja/docs/Web/HTML/Element/iframe#attr-sandbox">sandbox</a></code>
      </td>
      <td>{{ HTMLElement("iframe") }}</td>
      <td>
        iframe に読み込まれた文書で特定の機能 (フォームの投稿や新しいウィンドウを開くなど) を使用するのを阻止します。
      </td>
    </tr>
    <tr>
      <td>
        <code><a href="/ja/docs/Web/HTML/Element/th#attr-scope">scope</a></code>
      </td>
      <td>{{ HTMLElement("th") }}</td>
      <td>
        (<code>th</code> 要素で定義される) ヘッダーが関連するセルを定義します。
      </td>
    </tr>
    <tr>
      <td>
        <code><a href="/ja/docs/Web/HTML/Element/style#attr-scoped">scoped</a></code>
        {{non-standard_inline}} {{deprecated_inline}}
      </td>
      <td>{{ HTMLElement("style") }}</td>
      <td></td>
    </tr>
    <tr>
      <td>
        <code><a href="/ja/docs/Web/HTML/Element/option#attr-selected">selected</a></code>
      </td>
      <td>{{ HTMLElement("option") }}</td>
      <td>ページ読込時に、対象要素を選択状態にします。</td>
    </tr>
    <tr>
      <td>
        <code><a href="/ja/docs/Web/HTML/Attributes/shape">shape</a></code>
      </td>
      <td>{{ HTMLElement("a") }}, {{ HTMLElement("area") }}</td>
      <td></td>
    </tr>
    <tr>
      <td>
        <code><a href="/ja/docs/Web/HTML/Attributes/size">size</a></code>
      </td>
      <td>
        {{ HTMLElement("input") }},
        {{ HTMLElement("select") }}
      </td>
      <td>
        要素の幅を（ピクセル数で）定義します。要素の <code>type</code> 属性が <code>text</code> または <code>password</code> である場合は文字数になります。
      </td>
    </tr>
    <tr>
      <td>
        <code><a href="/ja/docs/Web/HTML/Attributes/sizes">sizes</a></code>
      </td>
      <td>
        {{ HTMLElement("link") }}, {{ HTMLElement("img") }},
        {{ HTMLElement("source") }}
      </td>
      <td></td>
    </tr>
    <tr>
      <td>
        <code><a href="/ja/docs/Web/HTML/Global_attributes/slot">slot</a></code>
      </td>
      <td>
        <a href="/ja/docs/Web/HTML/Global_attributes">グローバル属性</a>
      </td>
      <td>要素にシャドウ DOM のシャドウツリーのスロットを割り当てます。</td>
    </tr>
    <tr>
      <td>
        <code><a href="/ja/docs/Web/HTML/Attributes/span">span</a></code>
      </td>
      <td>
        {{ HTMLElement("col") }},
        {{ HTMLElement("colgroup") }}
      </td>
      <td></td>
    </tr>
    <tr>
      <td>
        <code><a href="/ja/docs/Web/HTML/Global_attributes/spellcheck">spellcheck</a></code>
      </td>
      <td>
        <a href="/ja/docs/Web/HTML/Global_attributes">グローバル属性</a>
      </td>
      <td>要素のスペルチェックを有効にするかどうかを示します。</td>
    </tr>
    <tr>
      <td>
        <code><a href="/ja/docs/Web/HTML/Attributes/src">src</a></code>
      </td>
      <td>
        {{ HTMLElement("audio") }},
        {{ HTMLElement("embed") }},
        {{ HTMLElement("iframe") }}, {{ HTMLElement("img") }},
        {{ HTMLElement("input") }},
        {{ HTMLElement("script") }},
        {{ HTMLElement("source") }},
        {{ HTMLElement("track") }},
        {{ HTMLElement("video") }}
      </td>
      <td>埋め込みコンテンツの URL です。</td>
    </tr>
    <tr>
      <td>
        <code><a href="/ja/docs/Web/HTML/Element/iframe#attr-srcdoc">srcdoc</a></code>
      </td>
      <td>{{ HTMLElement("iframe") }}</td>
      <td></td>
    </tr>
    <tr>
      <td>
        <code><a href="/ja/docs/Web/HTML/Element/track#attr-srclang">srclang</a></code>
      </td>
      <td>{{ HTMLElement("track") }}</td>
      <td></td>
    </tr>
    <tr>
      <td>
        <code><a href="/ja/docs/Web/HTML/Attributes/srcset">srcset</a></code>
      </td>
      <td>
        {{ HTMLElement("img") }}, {{ HTMLElement("source") }}
      </td>
      <td>一つ以上のレスポンシブ画像の候補です。</td>
    </tr>
    <tr>
      <td>
        <code><a href="/ja/docs/Web/HTML/Element/ol#attr-start">start</a></code>
      </td>
      <td>{{ HTMLElement("ol") }}</td>
      <td>1以外から始まる場合の最初の値を定義します。</td>
    </tr>
    <tr>
      <td>
        <code><a href="/ja/docs/Web/HTML/Attributes/step">step</a></code>
      </td>
      <td>{{ HTMLElement("input") }}</td>
      <td></td>
    </tr>
    <tr>
      <td>
        <code><a href="/ja/docs/Web/HTML/Global_attributes/style">style</a></code>
      </td>
      <td>
        <a href="/ja/docs/Web/HTML/Global_attributes">グローバル属性</a>
      </td>
      <td>外部スタイルシートや style 要素内に記述されたものより優先度の高いスタイル情報を記述します。</td>
    </tr>
    <tr>
      <td>
        <code><a href="/ja/docs/Web/HTML/Element/table#attr-summary">summary</a></code>
        {{deprecated_inline}}
      </td>
      <td>{{ HTMLElement("table") }}</td>
      <td></td>
    </tr>
    <tr>
      <td>
        <code><a href="/ja/docs/Web/HTML/Global_attributes/tabindex">tabindex</a></code>
      </td>
      <td>
        <a href="/ja/docs/Web/HTML/Global_attributes">グローバル属性</a>
      </td>
      <td>
        ブラウザーによる既定のタブ順を無効化して、指定した順序に従うようにします。
      </td>
    </tr>
    <tr>
      <td>
        <code><a href="/ja/docs/Web/HTML/Attributes/target">target</a></code>
      </td>
      <td>
        {{ HTMLElement("a") }}, {{ HTMLElement("area") }},
        {{ HTMLElement("base") }}, {{ HTMLElement("form") }}
      </td>
      <td>
        リンク先の文書を開く場所（<code>&#x3C;a></code> 要素の場合）、または受信したレスポンスを表示する場所（<code>&#x3C;form></code>要素の場合）を指定します。
      </td>
    </tr>
    <tr>
      <td>
        <code><a href="/ja/docs/Web/HTML/Global_attributes/title">title</a></code>
      </td>
      <td>
        <a href="/ja/docs/Web/HTML/Global_attributes">グローバル属性</a>
      </td>
      <td>この要素にポインターを当てたときに表示されるツールチップのテキストです。</td>
    </tr>
    <tr>
      <td>
        <code><a href="/ja/docs/Web/HTML/Global_attributes/translate">translate</a></code>
      </td>
      <td>
        <a href="/ja/docs/Web/HTML/Global_attributes">グローバル属性</a>
      </td>
      <td>
        ページが翻訳版である場合、要素の属性値と子の <code><a href="https://dom.spec.whatwg.org/#text">Text</a></code> ノードが翻訳されているか、変更せずにそのままであるかを指定します。
      </td>
    </tr>
    <tr>
      <td>
        <code><a href="/ja/docs/Web/HTML/Attributes/type">type</a></code>
      </td>
      <td>
        {{ HTMLElement("button") }},
        {{ HTMLElement("input") }},
        {{ HTMLElement("command") }},
        {{ HTMLElement("embed") }},
        {{ HTMLElement("object") }},
        {{ HTMLElement("script") }},
        {{ HTMLElement("source") }},
        {{ HTMLElement("style") }}, {{ HTMLElement("menu") }},
        {{ HTMLElement("link") }}
      </td>
      <td>要素の型を定義します。</td>
    </tr>
    <tr>
      <td>
        <code><a href="/ja/docs/Web/HTML/Attributes/usemap">usemap</a></code>
      </td>
      <td>
        {{ HTMLElement("img") }}, {{ HTMLElement("input") }},
        {{ HTMLElement("object") }}
      </td>
      <td></td>
    </tr>
    <tr>
      <td>
        <code><a href="/ja/docs/Web/HTML/Attributes/value">value</a></code>
      </td>
      <td>
        {{ HTMLElement("button") }}, {{ HTMLElement("data") }},
        {{ HTMLElement("input") }}, {{ HTMLElement("li") }},
        {{ HTMLElement("meter") }},
        {{ HTMLElement("option") }},
        {{ HTMLElement("progress") }},
        {{ HTMLElement("param") }}
      </td>
      <td>
        ページ読み込み時に要素で表示する既定値を定義します。
      </td>
    </tr>
    <tr>
      <td>
        <code><a href="/ja/docs/Web/HTML/Attributes/width">width</a></code>
      </td>
      <td>
        {{ HTMLElement("canvas") }},
        {{ HTMLElement("embed") }},
        {{ HTMLElement("iframe") }}, {{ HTMLElement("img") }},
        {{ HTMLElement("input") }},
        {{ HTMLElement("object") }},
        {{ HTMLElement("video") }}
      </td>
      <td>
        <p>
          ここに挙げられた要素に対して、要素の幅を指定します。
        </p>
        <div class="note">
          <p>
            <strong>注:</strong> {{ HTMLElement("div") }} をはじめとする他の要素については、これは古い属性であり、代わりに CSS の {{ Cssxref("width") }} プロパティを使用してください。
          </p>
        </div>
      </td>
    </tr>
    <tr>
      <td>
        <code><a href="/ja/docs/Web/HTML/Element/textarea#attr-wrap">wrap</a></code>
      </td>
      <td>{{ HTMLElement("textarea") }}</td>
      <td>テキストを折り返すかどうかを示します。</td>
    </tr>
  </tbody>
</table>

## コンテンツ属性と IDL 属性

HTML では、ほとんどの属性に **コンテンツ属性** と **IDL (Interface Definition Language) 属性** の 2 つの側面があります。

コンテンツ属性はコンテンツ (HTML コード) から設定する属性であり、 {{domxref("element.setAttribute()")}} や {{domxref("element.getAttribute()")}} を使用して設定または取得できます。 コンテンツ属性は値として数値を想定するものであっても、常に文字列です。例えば コンテンツ属性を使用して {{HTMLElement("input")}} 要素の `maxlength` 属性に 42 を設定するには、その要素で `setAttribute("maxlength", "42")` を呼び出さなければなりません。

IDL 属性は JavaScript プロパティとしても知られています。これらは JavaScript プロパティを使用して、 `element.foo` のように読み書きします。IDL 属性は読み取り時に値を返すため基になるコンテンツ属性を使用したり（ただし、）、書き込み時に コンテンツ属性へ何らかの値を保存したりします。言い換えると、IDL 属性は コンテンツ属性を映し出します。

ほとんどの場合、IDL 属性は実際に使用する値として自身の値を返します。例えば {{HTMLElement("input")}} 要素の `type` 属性のデフォルト値は "text" であるので、`input.type="foobar"` を設定すると `&lt;input&gt;` 要素は (外見と動作が) text タイプになりますが、"type" コンテンツ属性の値は "foobar" になります。しかし、`type` IDL 属性は文字列 "text" を返します。

IDL 属性は常に文字列とは限りません。例えば `input.maxlength` は数値 (符号付き long) です。IDL 属性を使用するときは望ましい型の値を読み書きするので、`input.maxlength` は常に数値を返し、また `input.maxlength` を設定するときは数値を要求します。他の型で渡すと、標準的な JavaScript の型変換規則に従って自動的に数値へ変換されます。

IDL 属性は符号なし long、URL、論理値など[他の型を反映する](https://www.whatwg.org/specs/web-apps/current-work/multipage/urls.html#reflecting-content-attributes-in-idl-attributes)ことが可能です。残念ながら、 IDL 属性がコンテンツ属性と
属性に応じて IDL 属性が対応するコンテンツ属性と一体化して動作するための明確な規則や方法はありません。ほとんどの場合は[仕様書にあるレイアウトルール](https://www.whatwg.org/specs/web-apps/current-work/multipage/urls.html#reflecting-content-attributes-in-idl-attributes)に従いますが、そうでない場合もあります。 HTML 仕様では可能な限り開発者にやさしいものにしようとしていますが、さまざまな理由 (たいていは歴史的な理由) により奇妙な動作になる属性 (例えば `select.size`) があり、実際どのように動作するかを理解するために仕様書を読むようにしましょう。

## 論理属性

一部のコンテンツ属性 (例えば `required`, `readonly`, `disabled`) は[論理属性](https://www.w3.org/TR/html52/infrastructure.html#sec-boolean-attributes) (boolean attributes) と呼ばれています。論理属性は存在すれば、その値が **true** となり、存在しなければ、その値が **false** となります。

HTML5 では、論理属性に許されている値の制約を定義しています。属性が存在する場合は、値は空文字列 (属性の値が割り当てられないことがあります) または属性の正式名に ASCII で大文字・小文字まで一致する値のどちらかで、前後にホワイトスペースを含んではいけません。以下の例は論理属性をマークアップする正しい方法です。

    <div itemscope> This is valid HTML but invalid XML. </div>
    <div itemscope=itemscope> This is also valid HTML but invalid XML. </div>
    <div itemscope=""> This is valid HTML and also valid XML. </div>
    <div itemscope="itemscope"> This is also valid HTML and XML, but perhaps a bit verbose. </div>

明確にするために、 "`true`" および "`false`" という値は論理属性では許可されていません。偽の値を表すには、属性ごと省略する必要があります。この制約により、いくつかのよくある誤解が明確になります。例えば `checked="false"` は、属性が存在するため、その要素の `checked` 属性が **true** であると解釈されます。

## 関連情報

- [HTML 要素](/ja/docs/Web/HTML/Element)
