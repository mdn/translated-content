---
title: "<form>: フォーム要素"
slug: Web/HTML/Reference/Elements/form
l10n:
  sourceCommit: 0754cd805a8e010d2e3a2a065f634a3bcf358252
---

**`<form>`** は [HTML](/ja/docs/Web/HTML) の要素で、ウェブサーバーに情報を送信するための対話型コントロールを含む文書の区間を表します。

{{InteractiveExample("HTML デモ: &lt;form&gt;", "tabbed-standard")}}

```html interactive-example
<form action="" method="get" class="form-example">
  <div class="form-example">
    <label for="name">名前を入力: </label>
    <input type="text" name="name" id="name" required />
  </div>
  <div class="form-example">
    <label for="email">メールアドレス: </label>
    <input type="email" name="email" id="email" required />
  </div>
  <div class="form-example">
    <input type="submit" value="登録!" />
  </div>
</form>
```

```css interactive-example
form.form-example {
  display: table;
}

div.form-example {
  display: table-row;
}

label,
input {
  display: table-cell;
  margin-bottom: 10px;
}

label {
  padding-right: 10px;
}
```

CSS の {{cssxref(':valid')}} および {{cssxref(':invalid')}} [擬似クラス](/ja/docs/Web/CSS/Reference/Selectors/Pseudo-classes)を使用すると、`<form>` 要素をフォーム内の{{domxref("HTMLFormElement.elements", "要素", "", 1)}}が有効であるかどうかに応じてスタイル付けすることができます。

## 属性

この要素には[グローバル属性](/ja/docs/Web/HTML/Reference/Global_attributes)があります。

- `accept` {{deprecated_inline}}
  - : サーバーが受け付ける[コンテンツタイプ](/ja/docs/Web/SVG/Guides/Content_type)のカンマ区切りリストです。

    > [!NOTE]
    > **この属性は非推奨であり、使用すべきではありません。** 代わりに `<input type=file>` 要素の [`accept`](/ja/docs/Web/HTML/Reference/Elements/input#accept) 属性を使用してください。

- `accept-charset`
  - : サーバーが受け付ける{{Glossary("character encoding", "文字エンコーディング")}}です。
    仕様書では、`"UTF-8"` という大文字小文字を区別しない単一の値を許可しています。このエンコーディングの普遍性を反映したものです。（以前のバージョンの HTML では、文字エンコーディングをカンマ区切るまたは空白区切りで指定することもできました。）

- `autocapitalize`
  - : 入力されたテキストを自動的に大文字にするかどうか、また、その場合はどのような方法で大文字にするかを制御します。 詳細については、 [`autocapitalize`](/ja/docs/Web/HTML/Reference/Global_attributes/autocapitalize) グローバル属性のページをご覧ください。

- [`autocomplete`](/ja/docs/Web/HTML/Reference/Attributes/autocomplete)
  - : input 要素が既定で、ブラウザーによる値の入力補完を受けるかを示します。フォーム要素の `autocomplete` 属性は、 `<form>` のものより優先します。指定可能な値は次の通りです。
    - `off`: ブラウザーは自動的には項目を補完しません。（ブラウザーは、ログインフォームが疑わしい場合、これを無視する傾向があります。[autocomplete 属性とログインフィールド](/ja/docs/Web/Security/Practical_implementation_guides/Turning_off_form_autocompletion#autocomplete_属性とログイン欄)を参照してください。
    - `on`: ブラウザーは自動的に項目を補完することがあります。

- `name`
  - : フォームの名前です。値は空文字列であってはならず、また、該当するフォームコレクション内の他の `form` 要素（存在する場合）の中で固有でなければなりません。この名前は、{{domxref("Window")}}、{{domxref("Document")}}、{{domxref("document.forms")}} オブジェクトのプロパティとなり、それがフォーム要素への参照を含みます。

- [`rel`](/ja/docs/Web/HTML/Reference/Attributes/rel)
  - : 注釈や、このフォームが作成するリンク種別を制御します。注釈には [`external`](/ja/docs/Web/HTML/Reference/Attributes/rel#external)、[`nofollow`](/ja/docs/Web/HTML/Reference/Attributes/rel#nofollow)、[`opener`](/ja/docs/Web/HTML/Reference/Attributes/rel#opener)、[`noopener`](/ja/docs/Web/HTML/Reference/Attributes/rel#noopener)、[`noreferrer`](/ja/docs/Web/HTML/Reference/Attributes/rel#noreferrer) があります。リンク種別には [`help`](/ja/docs/Web/HTML/Reference/Attributes/rel#help)、[`prev`](/ja/docs/Web/HTML/Reference/Attributes/rel#prev)、[`next`](/ja/docs/Web/HTML/Reference/Attributes/rel#next)、[`search`](/ja/docs/Web/HTML/Reference/Attributes/rel#search)、[`license`](/ja/docs/Web/HTML/Reference/Attributes/rel#license) があります。[`rel`](/ja/docs/Web/HTML/Reference/Attributes/rel) の値はこれらの列挙値の空白区切りの値です。

### フォーム送信のための属性

以下の属性は、フォーム送信中の動作を制御します。

- `action`
  - : フォーム経由で送信された情報を処理するプログラムの URL。この値は {{HTMLElement("button")}}、[`<input type="submit">`](/ja/docs/Web/HTML/Reference/Elements/input/submit)、[`<input type="image">`](/ja/docs/Web/HTML/Reference/Elements/input/image) の [`formaction`](/ja/docs/Web/HTML/Reference/Elements/button#formaction) 属性によって上書きすることができます。この属性は `method="dialog"` が設定されている場合は無視されます。
- `enctype`
  - : `method` 属性の値が `post` であるとき、この属性はフォームをサーバーに送信する際に使用する、コンテンツの [MIME タイプ](https://ja.wikipedia.org/wiki/%E3%83%A1%E3%83%87%E3%82%A3%E3%82%A2%E3%82%BF%E3%82%A4%E3%83%97)を示します。以下の値が指定可能です。
    - `application/x-www-form-urlencoded`: 既定値です。
    - `multipart/form-data`: フォームが {{HTMLElement("input")}} の `type=file` を含む場合に使用してください。
    - `text/plain`: デバッグ用に有用です。

    この値は、{{HTMLElement("button")}}、[`<input type="submit">`](/ja/docs/Web/HTML/Reference/Elements/input/submit)、[`<input type="image">`](/ja/docs/Web/HTML/Reference/Elements/input/image) の [`formenctype`](/ja/docs/Web/HTML/Reference/Elements/button#formenctype) 属性によって上書きすることができます。

- `method`
  - : フォームを送信する際にブラウザーが使用する [HTTP](/ja/docs/Web/HTTP) メソッドです。
    許可されているメソッド/値（大文字小文字の区別なし）は以下のものだけです。
    - `post`: {{HTTPMethod("POST")}} メソッドです。フォームのデータは[リクエスト本体](/ja/docs/Web/API/Request/body)として送信されます。
    - `get`（既定値）: {{HTTPMethod("GET")}} メソッドです。フォームのデータは `action` 属性の URL に `?` で区切って追加されます。このメソッドはフォームに[副作用がない](/ja/docs/Glossary/Idempotent)場合に使用してください。
    - `dialog`: フォームが {{HTMLElement("dialog")}} 要素の中にある場合に使用し、送信の操作を行うと、ダイアログが閉じて `submit` イベントを発行しますが、データを送信したりフォームをクリアしたりはしません。

    この値は、 {{HTMLElement("button")}}、[`<input type="submit">`](/ja/docs/Web/HTML/Reference/Elements/input/submit)、[`<input type="image">`](/ja/docs/Web/HTML/Reference/Elements/input/image) の [`formmethod`](/ja/docs/Web/HTML/Reference/Elements/button#formmethod) 属性によって上書きすることができます。

- `novalidate`
  - : フォームを送信するときに検証しないことを示す論理値です。この属性を指定していない（つまり検証される）場合は、既定の設定を {{HTMLElement("button")}}、[`<input type="submit">`](/ja/docs/Web/HTML/Reference/Elements/input/submit)、[`<input type="image">`](/ja/docs/Web/HTML/Reference/Elements/input/image) の [`formnovalidate`](/ja/docs/Web/HTML/Reference/Elements/button#formnovalidate) 属性によって上書きすることができます。
- `target`
  - : フォームを送信した後に受け取ったレスポンスの表示先を示す名前またはキーワードです。これは _閲覧コンテキスト_（タブ、ウィンドウ、インラインフレームなど）の名前またはキーワードです。以下のキーワードは特別な意味を持ちます。
    - `_self`（既定値）: 現在と同じ閲覧コンテキストに読み込みます。
    - `_blank`: 新しい無名の閲覧コンテキストに読み込みます。これは [`rel="noopener"`](#rel) を設定するのと同じ動作を提供し、[`window.opener`](/ja/docs/Web/API/Window/opener) を設定しません。
    - `_parent`: 現在の親の閲覧コンテキストに読み込みます。親がない場合は、`_self` と同じ動作をします。
    - `_top`: 最上位の閲覧コンテキスト（すなわち、現在の閲覧コンテキストの祖先に当たり、親がないもの）に読み込みます。親がない場合は、`_self` と同じ動作をします。
    - `_unfencedTop`: 埋め込みの[フェンスフレーム](/ja/docs/Web/API/Fenced_frame_API)内でフォームからレスポンスを読み込み、最上位のフレームに表示します（つまり、他の予約済み出力先とは異なり、フェンスフレームのルートを越えて移動します）。フェンスフレーム内でのみ利用できます。

    この値は、 {{HTMLElement("button")}}、[`<input type="submit">`](/ja/docs/Web/HTML/Reference/Elements/input/submit)、[`<input type="image">`](/ja/docs/Web/HTML/Reference/Elements/input/image) の [`formtarget`](/ja/docs/Web/HTML/Reference/Elements/button#formtarget) 属性によって上書きすることができます。

## 例

```html
<!-- 現在の URL に GET リクエストを送信するフォーム -->
<form method="get">
  <label>
    Name:
    <input name="submitted-name" autocomplete="name" />
  </label>
  <button>Save</button>
</form>

<!-- 現在の URL に POST リクエストを送信するフォーム -->
<form method="post">
  <label>
    Name:
    <input name="submitted-name" autocomplete="name" />
  </label>
  <button>Save</button>
</form>

<!-- fieldset, legend, label のあるフォーム -->
<form method="post">
  <fieldset>
    <legend>Do you agree to the terms?</legend>
    <label><input type="radio" name="radio" value="yes" /> Yes</label>
    <label><input type="radio" name="radio" value="no" /> No</label>
  </fieldset>
</form>
```

### 結果

{{EmbedLiveSample('Examples')}}

## 技術的概要

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">
        <a href="/ja/docs/Web/HTML/Guides/Content_categories">コンテンツカテゴリー</a>
      </th>
      <td>
        <a href="/ja/docs/Web/HTML/Guides/Content_categories#フローコンテンツ">フローコンテンツ</a>、<a href="/ja/docs/Web/HTML/Guides/Content_categories#知覚可能コンテンツ">知覚可能コンテンツ</a>
      </td>
    </tr>
    <tr>
      <th scope="row">許可されている内容</th>
      <td>
        <a href="/ja/docs/Web/HTML/Guides/Content_categories#フローコンテンツ">フローコンテンツ</a>。ただし、 <code>&#x3C;form></code> 要素を内包することは許可されていません。</td>
    </tr>
    <tr>
      <th scope="row">タグの省略</th>
      <td>なし。開始タグと終了タグの両方が必須です。</td>
    </tr>
    <tr>
      <th scope="row">許可されている親要素</th>
      <td>
        <a href="/ja/docs/Web/HTML/Guides/Content_categories#フローコンテンツ">フローコンテンツ</a>を受け入れるすべての要素
      </td>
    </tr>
    <tr>
      <th scope="row">暗黙の ARIA ロール</th>
      <td>
        <code><a href="/ja/docs/Web/Accessibility/ARIA/Reference/Roles/form_role">form</a></code>
      </td>
    </tr>
    <tr>
      <th scope="row">許可されている ARIA ロール</th>
      <td>
        <code><a href="/ja/docs/Web/Accessibility/ARIA/Reference/Roles/search_role">search</a></code>,
        <a href="/ja/docs/Web/Accessibility/ARIA/Reference/Roles/none_role"><code>none</code></a>,
        <a href="/ja/docs/Web/Accessibility/ARIA/Reference/Roles/presentation_role"><code>presentation</code></a>
      </td>
    </tr>
    <tr>
      <th scope="row">DOM インターフェイス</th>
      <td>{{domxref("HTMLFormElement")}}</td>
    </tr>
  </tbody>
</table>

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [HTML フォームガイド](/ja/docs/Learn_web_development/Extensions/Forms)
- フォームの作成に使用される、その他の要素: {{HTMLElement("button")}}, {{HTMLElement("datalist")}}, {{HTMLElement("fieldset")}}, {{HTMLElement("input")}}, {{HTMLElement("label")}}, {{HTMLElement("legend")}}, {{HTMLElement("meter")}}, {{HTMLElement("optgroup")}}, {{HTMLElement("option")}}, {{HTMLElement("output")}}, {{HTMLElement("progress")}}, {{HTMLElement("select")}}, {{HTMLElement("textarea")}}
- フォーム内の要素一覧の取得: {{domxref("HTMLFormElement.elements")}}
- [ARIA: Form ロール](/ja/docs/Web/Accessibility/ARIA/Reference/Roles/form_role)
- [ARIA: Search ロール](/ja/docs/Web/Accessibility/ARIA/Reference/Roles/search_role)
