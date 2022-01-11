---
title: '<form>: フォーム要素'
slug: Web/HTML/Element/form
tags:
  - 要素
  - フォーム要素
  - フォーム
  - HTML
  - HTML フォーム要素
  - HTML フォーム
  - リファレンス
  - ウェブ
browser-compat: html.elements.form
translation_of: Web/HTML/Element/form
---

{{HTMLRef}}

**`<form>`** は [HTML](/ja/docs/Web/HTML) の要素で、ウェブサーバーに情報を送信するための対話型コントロールを含む文書の区間を表します。

{{EmbedInteractiveExample("pages/tabbed/form.html", "tabbed-standard")}}

CSS の {{cssxref(':valid')}} および {{cssxref(':invalid')}} [擬似クラス](/ja/docs/Web/CSS/Pseudo-classes)を使用すると、 `<form>` 要素をフォーム内の{{domxref("HTMLFormElement.elements", "要素", "", 1)}}が有効であるかどうかに応じてスタイル付けすることができます。

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">
        <a href="/ja/docs/Web/Guide/HTML/Content_categories">コンテンツカテゴリー</a>
      </th>
      <td>
        <a href="/ja/docs/Web/Guide/HTML/Content_categories#flow_content">フローコンテンツ</a>, <a href="/ja/docs/Web/Guide/HTML/Content_categories#palpable_content">知覚可能コンテンツ</a>
      </td>
    </tr>
    <tr>
      <th scope="row">許可されている内容</th>
      <td>
        <a href="/ja/docs/Web/Guide/HTML/Content_categories#flow_content">フローコンテンツ</a>。ただし、 <code>&#x3C;form></code> 要素を内包することは許可されていません。</td>
    </tr>
    <tr>
      <th scope="row">タグの省略</th>
      <td>{{no_tag_omission}}</td>
    </tr>
    <tr>
      <th scope="row">許可されている親要素</th>
      <td>
        <a href="/ja/docs/Web/Guide/HTML/Content_categories#flow_content">フローコンテンツ</a>を受け入れるすべての要素
      </td>
    </tr>
    <tr>
      <th scope="row">暗黙の ARIA ロール</th>
      <td>
        <code
          ><a href="/ja/docs/Web/Accessibility/ARIA/Roles/form_role"
            >form</a
          ></code
        >（フォームに<a href="https://www.w3.org/TR/accname-1.1/#dfn-accessible-name"
          >アクセシブル名</a
        >がある場合）、それ以外の場合は<a href="https://www.w3.org/TR/html-aria/#dfn-no-corresponding-role">対応するロールなし</a>
      </td>
    </tr>
    <tr>
      <th scope="row">許可されている ARIA ロール</th>
      <td>
        <code
          ><a href="/ja/docs/Web/Accessibility/ARIA/Roles/search_role"
            >search</a
          ></code
        >, {{ARIARole("none")}}, {{ARIARole("presentation")}}
      </td>
    </tr>
    <tr>
      <th scope="row">DOM インターフェイス</th>
      <td>{{domxref("HTMLFormElement")}}</td>
    </tr>
  </tbody>
</table>

## 属性

この要素には[グローバル属性](/ja/docs/Web/HTML/Global_attributes)があります。

- {{htmlattrdef("accept")}} {{deprecated_inline}}

  - : サーバーが受け付けるコンテンツ型のカンマ区切りリストです。

    > **Note:**  この属性は HTML5 の仕様から削除されており、すでに使用不可となっています。代わりに個々の {{HTMLElement("input")}} 要素の {{htmlattrxref("accept", "input")}} 属性を使用してください。

- {{htmlattrdef("accept-charset")}}
  - : サーバーが受け付ける空白区切りの[文字エンコーディング](/ja/docs/Glossary/character_encoding)です。ブラウザーは、列挙されたされた順に使用します。既定値は、[ページと同じエンコーディング](/ja/docs/Web/HTTP/Headers/Content-Encoding)を意味します。
    （以前のバージョンのHTMLでは、文字エンコーディングはカンマで区切ることもできました。）
- {{htmlattrdef("autocapitalize")}} {{non-standard_inline}}

  - : これは iOS 版 Safari で使用する標準外の属性であり、テキスト用のフォーム要素が自動的に大文字化を行うかどうかを制御します。フォーム要素の `autocapitalize` 属性は、 `<form>` のものより優先します。指定可能な値は次の通りです。

    - `none`: 自動大文字化機能を無効にします。
    - `sentences`: 文の先頭文字を自動的に大文字化します。
    - `words`: 単語の先頭文字を自動的に大文字化します。
    - `characters`: すべての文字を自動的に大文字化します。

- {{htmlattrdef("autocomplete")}}

  - : input 要素が既定で、ブラウザーによる値の入力補完を受けるかを示します。フォーム要素の `autocomplete` 属性は、 `<form>` のものより優先します。指定可能な値は次の通りです。

    - `off`: ブラウザーは自動的には項目を補完しません。（ブラウザーは、ログインフォームの疑いがある場合、これを無視する傾向があります。 [autocomplete 属性とログインフィールド](/ja/docs/Web/Security/Securing_your_site/Turning_off_form_autocompletion#the_autocomplete_attribute_and_login_fields)を参照してください。
    - `on`: ブラウザーは自動的に項目を補完することがあります。

- {{htmlattrdef("name")}}
  - : フォームの名前。この値は空文字列であってはならず、また、フォームコレクションに含まれる `form` 要素がある場合は、その中で一意でなければなりません。
- {{htmlattrdef("rel")}}
  - : この値に応じてハイパーリンクや注釈を作成します。詳しくは [`rel`](/ja/docs/Web/HTML/Attributes/rel) 属性を参照してください。

### フォーム送信のための属性

以下の属性は、フォーム送信中の動作を制御します。

- {{htmlattrdef("action")}}
  - : フォーム経由で送信された情報を処理するプログラムの URL。この値は {{HTMLElement("button")}}, [`<input type="submit">`](/ja/docs/Web/HTML/Element/input/submit), [`<input type="image">`](/ja/docs/Web/HTML/Element/input/image) の {{htmlattrxref("formaction", "button")}} 属性によって上書きすることが可能です。この属性は `method="dialog"` が設定されている場合は無視されます。
- {{htmlattrdef("enctype")}}

  - : `method` 属性の値が `post` であるとき、この属性はフォームをサーバーに送信する際に使用する、コンテンツの [MIME タイプ](https://ja.wikipedia.org/wiki/%E3%83%A1%E3%83%87%E3%82%A3%E3%82%A2%E3%82%BF%E3%82%A4%E3%83%97)を示します。以下の値が指定可能です。

    - `application/x-www-form-urlencoded`: 既定値。属性を指定していない場合、この値が使用されます。
    - `multipart/form-data`: フォームが {{HTMLElement("input")}} の `type=file` を含む場合に使用してください。
    - `text/plain`: HTML5 でデバッグ用に導入されました。

    この値は、{{HTMLElement("button")}}, [`<input type="submit">`](/ja/docs/Web/HTML/Element/input/submit), [`<input type="image">`](/ja/docs/Web/HTML/Element/input/image) の {{htmlattrxref("formenctype", "button")}} 属性によって上書きすることが可能です。

- {{htmlattrdef("method")}}

  - : フォームを送信する際にブラウザーが使用する [HTTP](/ja/docs/Web/HTTP) メソッドです。以下の値が指定可能です。

    - `post`: [POST メソッド](https://www.w3.org/Protocols/rfc2616/rfc2616-sec9.html#sec9.5)です。フォームのデータは[リクエスト本文](/ja/docs/Web/API/Request/body)として送信されます。
    - `get`: [GET メソッド](https://www.w3.org/Protocols/rfc2616/rfc2616-sec9.html#sec9.3)です。フォームのデータは `action` 属性の URL に `?` で区切って追加されます。このメソッドはフォームに[副作用がない](/ja/docs/Glossary/Idempotent)場合に使用してください。
    - `dialog`: フォームが {{HTMLElement("dialog")}} 要素の中にある場合に使用し、送信の操作を行うと、ダイアログが閉じて submit イベントを発行しますが、データを送信したりフォームをクリアしたりはしません。

    この値は、 {{HTMLElement("button")}}, [`<input type="submit">`](/ja/docs/Web/HTML/Element/input/submit), [`<input type="image">`](/ja/docs/Web/HTML/Element/input/image) の {{htmlattrxref("formmethod", "button")}} 属性によって上書きすることが可能です。

- {{htmlattrdef("novalidate")}}
  - : フォームを送信するときに検証しないことを示す論理値です。この属性を指定していない（つまり検証される）場合は、既定の設定を {{HTMLElement("button")}}, [`<input type="submit">`](/ja/docs/Web/HTML/Element/input/submit), [`<input type="image">`](/ja/docs/Web/HTML/Element/input/image) の {{htmlattrxref("formnovalidate", "button")}} 属性で上書きすることが可能です。
- {{htmlattrdef("target")}}

  - : フォームを送信した後に受け取ったレスポンスの表示位置を示す名前またはキーワードです。これは、HTML 4 ではフレームの名前またはキーワードでした。HTML5 では、_閲覧コンテキスト_ （例えば、タブ、ウィンドウ、インラインフレームなど）の名前またはキーワードです。以下のキーワードは特別な意味を持ちます。

    - `_self` (既定値): 現在と同じ閲覧コンテキストに読み込みます。
    - `_blank`: 無名の新しい閲覧コンテキストに読み込みます。
    - `_parent`: 現在の親の閲覧コンテキストに読み込みます。親がない場合は、 `_self` と同じ動作をします。
    - `_top`: 最上位の閲覧コンテキスト（すなわち、現在の閲覧コンテキストの祖先に当たり、親がないもの）に読み込みます。親がない場合は、 `_self` と同じ動作をします。

    この値は、 {{HTMLElement("button")}}, [`<input type="submit">`](/ja/docs/Web/HTML/Element/input/submit), [`<input type="image">`](/ja/docs/Web/HTML/Element/input/image) の {{htmlattrxref("formtarget", "button")}} 属性によって上書きすることが可能です。

    > **Note:** `target="_blank"` を `<form>` 要素に設定すると、暗黙で `rel` の動作が [`rel="noopener"`](/ja/docs/Web/HTML/Link_types/noopener) を設定したのと同じになり、 `window.opener` を設定しません。

## 例

### HTML

```html
<!-- 現在の URL に GET リクエストを送信するフォーム -->
<form>
  <label>Name:
    <input name="submitted-name" autocomplete="name">
  </label>
  <button>Save</button>
</form>

<!-- 現在の URL に POST リクエストを送信するフォーム -->
<form method="post">
  <label>Name:
    <input name="submitted-name" autocomplete="name">
  </label>
  <button>Save</button>
</form>

<!-- fieldset, legend, label のあるフォーム -->
<form method="post">
  <fieldset>
    <legend>Title</legend>
    <label><input type="radio" name="radio"> Select me</label>
  </fieldset>
</form>
```

{{ EmbedLiveSample('Examples', '100%', 110) }}

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [HTML フォームガイド](/ja/docs/Learn/Forms)
- フォームの作成に使用される、その他の要素: {{HTMLElement("button")}}, {{HTMLElement("datalist")}}, {{HTMLElement("fieldset")}}, {{HTMLElement("input")}}, {{HTMLElement("label")}}, {{HTMLElement("legend")}}, {{HTMLElement("meter")}}, {{HTMLElement("optgroup")}}, {{HTMLElement("option")}}, {{HTMLElement("output")}}, {{HTMLElement("progress")}}, {{HTMLElement("select")}}, {{HTMLElement("textarea")}}
- フォーム内の要素一覧の取得: {{domxref("HTMLFormElement.elements")}}
- [ARIA: Form ロール](/ja/docs/Web/Accessibility/ARIA/Roles/Form_Role)
- [ARIA: Search ロール](/ja/docs/Web/Accessibility/ARIA/Roles/Search_role)
