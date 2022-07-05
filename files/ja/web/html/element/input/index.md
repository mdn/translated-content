---
title: '<input>: 入力欄 (フォーム入力) 要素'
slug: Web/HTML/Element/input
tags:
  - データ入力
  - 要素
  - フォーム
  - HTML
  - HTML フォーム
  - HTML input tag
  - Input
  - MakeBrowserAgnostic
  - リファレンス
  - ウェブ
browser-compat: html.elements.input
translation_of: Web/HTML/Element/input
---

{{HTMLRef}}

**`<input>`** は [HTML](/ja/docs/Web/HTML) の要素で、ユーザーからデータを受け取るための、ウェブベースのフォーム用の対話的なコントロールを作成するために使用します。端末と{{Glossary("user agent", "ユーザーエージェント")}}によりますが、広範に渡る種類のデータ入力やコントロールウィジェットが利用できます。 `<input>` 要素は入力型と属性の組み合わせの数が非常に多いため、 HTML の中で最も強力かつ最も複雑な要素の一つです。

{{EmbedInteractiveExample("pages/tabbed/input-text.html", "tabbed-shorter")}}

## \<input> の型

`<input>` の動作は {{htmlattrxref("type", "input")}} 属性の値に応じて大きく異なりますので、個別のリファレンスページでさまざまな型を扱っています。この属性を指定しない場合の既定の型は `text` です。

利用可能な型は次の通りです。

<table class="no-markdown">
  <colgroup>
    <col />
    <col style="width: 50%" />
    <col />
  </colgroup>
  <thead>
    <tr>
      <th>型</th>
      <th>説明</th>
      <th>基本的な例</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>{{HTMLElement("input/button", "button")}}</td>
      <td>
        プッシュボタンで、既定の動作を持たず、 [value](#attr-value) 属性の値 (既定では空) を表示します。
      </td>
      <td id="examplebutton">
        <pre class="brush: html hidden">
&#x3C;input  type="button" name="button" value="ボタン" /></pre
        >
        {{EmbedLiveSample("examplebutton",200,55,"","", "nobutton")}}
      </td>
    </tr>
    <tr>
      <td>{{HTMLElement("input/checkbox", "checkbox")}}</td>
      <td>チェックボックスで、選択または未選択のうちひとつの値をとることができます。</td>
      <td id="examplecheckbox">
        <pre class="brush: html hidden">
&#x3C;input  type="checkbox" name="checkbox"/></pre
        >
        {{EmbedLiveSample("examplecheckbox",200,55,"","", "nobutton")}}
      </td>
    </tr>
    <tr>
      <td>{{HTMLElement("input/color", "color")}}</td>
      <td>
        色を指定するためのコントロールです。対応しているブラウザーでは、アクティブになったときにカラーピッカーが開きます。
      </td>
      <td id="examplecolor">
        <pre class="brush: html hidden">
&#x3C;input  type="color" name="color"/></pre
        >
        {{EmbedLiveSample("examplecolor",200,55,"","", "nobutton")}}
      </td>
    </tr>
    <tr>
      <td>{{HTMLElement("input/date", "date")}}</td>
      <td>
        日付 (時刻を除く年、月、日) を入力するためのコントロールです。対応しているブラウザーでは、アクティブになったときに日付ピッカーまたは年月日の数値のホイールが開きます。
      </td>
      <td id="exampledate">
        <pre class="brush: html hidden">
&#x3C;input  type="date" name="date"/></pre
        >
        {{EmbedLiveSample("exampledate",200,55,"","", "nobutton")}}
      </td>
    </tr>
    <tr>
      <td>
        {{HTMLElement("input/datetime-local", "datetime-local")}}
      </td>
      <td>
        タイムゾーン情報がない日付と時刻を入力するためのコントロールです。対応しているブラウザーでは、アクティブになったときに日付ピッカーまたは日付および時刻部分の数値のホイールが開きます。
      </td>
      <td id="exampledtl">
        <pre class="brush: html hidden">
&#x3C;input  type="datetime-local" name="datetime-local"/></pre
        >
        {{EmbedLiveSample("exampledtl",200,55,"","", "nobutton")}}
      </td>
    </tr>
    <tr>
      <td>{{HTMLElement("input/email", "email")}}</td>
      <td>
        電子メールアドレスを編集するための欄です。 <code>text</code> 入力欄のように見えますが、対応しているブラウザーや動的なキーボードのある端末では、入力値を検証したり、関連するキーボードを表示したりします。
      </td>
      <td id="exampleemail">
        <pre class="brush: html hidden">
&#x3C;input type="email" name="email"/></pre
        >
        {{EmbedLiveSample("exampleemail",200,55,"","", "nobutton")}}
      </td>
    </tr>
    <tr>
      <td>{{HTMLElement("input/file", "file")}}</td>
      <td>
        ユーザーがファイルを選択するコントロールです。 [accept](#attr-accept) 属性を使用して、コントロールが選択することができるファイル形式を定義することができます。
      </td>
      <td id="examplefile">
        <pre class="brush: html hidden">
&#x3C;input type="file" accept="image/*, text/*" name="file"/></pre
        >
        {{EmbedLiveSample("examplefile",'100%',55,"","", "nobutton")}}
      </td>
    </tr>
    <tr>
      <td>{{HTMLElement("input/hidden", "hidden")}}</td>
      <td>
        表示されないコントロールですが、その値はサーバーに送信されます。隣の列には例がありますが、非表示です。
      </td>
      <td id="examplehidden">
        <pre class="brush: html hidden">
&#x3C;input id="userId" name="userId" type="hidden" value="abc123"></pre
        >
        {{EmbedLiveSample("examplehidden",200,55,"","", "nobutton")}}
      </td>
    </tr>
    <tr>
      <td>{{HTMLElement("input/image", "image")}}</td>
      <td>
        グラフィックの <code>submit</code> ボタンです。 <code>src</code> 属性で定義された画像を表示します。 [alt](#attr-alt) 属性は [src](#attr-src) の画像が見つからないときに表示されます。
      </td>
      <td id="exampleimage">
        <pre class="brush: html hidden">
&#x3C;input type="image" name="image" src="" alt="image input"/></pre
        >
        {{EmbedLiveSample("exampleimage",200,55,"","", "nobutton")}}
      </td>
    </tr>
    <tr>
      <td>{{HTMLElement("input/month", "month")}}</td>
      <td>タイムゾーン情報がない年と月を入力するためのコントロールです。</td>
      <td id="examplemonth">
        <pre class="brush: html hidden">
&#x3C;input type="month" name="month"/></pre
        >
        {{EmbedLiveSample("examplemonth",200,55,"","", "nobutton")}}
      </td>
    </tr>
    <tr>
      <td>{{HTMLElement("input/number", "number")}}</td>
      <td>
        数値を入力するためのコントロールです。対応していればスピナーを表示し、既定の検証を追加します。動的キーボードを持つ一部の端末では、テンキーを表示します。
      </td>
      <td id="examplenumber">
        <pre class="brush: html hidden">
&#x3C;input  type="number" name="number"/></pre
        >
        {{EmbedLiveSample("examplenumber",200,55,"","", "nobutton")}}
      </td>
    </tr>
    <tr>
      <td>{{HTMLElement("input/password", "password")}}</td>
      <td>
        入力値を隠す単一行テキストフィールド。サイトが安全ではない場合はユーザーに警告します。
      </td>
      <td id="examplepassword">
        <pre class="brush: html hidden">
&#x3C;input  type="password" name="password"/></pre
        >
        {{EmbedLiveSample("examplepassword",200,55,"","", "nobutton")}}
      </td>
    </tr>
    <tr>
      <td>{{HTMLElement("input/radio", "radio")}}</td>
      <td>
        ラジオボタンで、同じ [name](#attr-name) の値を持つ複数の選択肢から一つの値を選択することができます。
      </td>
      <td id="exampleradio">
        <pre class="brush: html hidden">
&#x3C;input type="radio" name="radio"/></pre
        >
        {{EmbedLiveSample("exampleradio",200,55,"","", "nobutton")}}
      </td>
    </tr>
    <tr>
      <td>{{HTMLElement("input/range", "range")}}</td>
      <td>
        厳密な値であることが重要ではない数値を入力するためのコントロールです。範囲のウィジェットを表示し、既定では中央の値になります。 [min](#attr-min) と [max](#attr-max) の組み合わせで、受け入れる値の範囲を定義することができます。
      </td>
      <td id="examplerange">
        <pre class="brush: html hidden">
&#x3C;input type="range" name="range" min="0" max="25"/></pre
        >
        {{EmbedLiveSample("examplerange",200,55,"","", "nobutton")}}
      </td>
    </tr>
    <tr>
      <td>{{HTMLElement("input/reset", "reset")}}</td>
      <td>
        フォームのコントロールを既定値に初期化するボタンです。推奨しません。
      </td>
      <td id="examplereset">
        <pre class="brush: html hidden">
&#x3C;input  type="reset" name="reset"/></pre
        >
        {{EmbedLiveSample("examplereset",200,55,"","", "nobutton")}}
      </td>
    </tr>
    <tr>
      <td>{{HTMLElement("input/search", "search")}}</td>
      <td>
        検索文字列を入力するための単一行のテキスト欄です。入力値から改行が自動的に取り除かれます。対応しているブラウザーでは、入力欄を初期化するための削除アイコンが表示されることがあり、欄の内容を消去するために使用することができます。動的なキーパッドを持つ一部の端末では、 Enter キーの代わりに検索アイコンを表示します。
      </td>
      <td id="examplesearch">
        <pre class="brush: html hidden">
&#x3C;input  type="search" name="search"/></pre
        >
        {{EmbedLiveSample("examplesearch",200,55,"","", "nobutton")}}
      </td>
    </tr>
    <tr>
      <td>{{HTMLElement("input/submit", "submit")}}</td>
      <td>フォームを送信するボタンです。</td>
      <td id="examplesubmit">
        <pre class="brush: html hidden">
&#x3C;input type="submit" name="submit"/></pre
        >
        {{EmbedLiveSample("examplesubmit",200,55,"","", "nobutton")}}
      </td>
    </tr>
    <tr>
      <td>{{HTMLElement("input/tel", "tel")}}</td>
      <td>
        電話番号を入力するためのコントロールです。動的なテンキーを備えた一部の機器では、電話用のテンキーを表示します。
      </td>
      <td id="exampletel">
        <pre class="brush: html hidden">
&#x3C;input  type="tel" name="tel"/></pre
        >
        {{EmbedLiveSample("exampletel",200,55,"","", "nobutton")}}
      </td>
    </tr>
    <tr>
      <td>{{HTMLElement("input/text", "text")}}</td>
      <td>
        既定値です。単一行のテキスト入力欄です。改行は自動的に入力値から取り除かれます。
      </td>
      <td id="exampletext">
        <pre class="brush: html hidden">
&#x3C;input type="text" name="text"/></pre
        >
        {{EmbedLiveSample("exampletext",200,55,"","", "nobutton")}}
      </td>
    </tr>
    <tr>
      <td>{{HTMLElement("input/time", "time")}}</td>
      <td>タイムゾーン情報がない時刻を入力するためのコントロールです。</td>
      <td id="exampletime">
        <pre class="brush: html hidden">
&#x3C;input  type="time" name="time"/></pre
        >
        {{EmbedLiveSample("exampletime",200,55,"","", "nobutton")}}
      </td>
    </tr>
    <tr>
      <td>{{HTMLElement("input/url", "url")}}</td>
      <td>
        URL を入力するための入力欄です。 <code>text</code> 入力欄のように見えますが、対応しているブラウザーや動的なキーボードのある端末では、入力値を検証したり、関連するキーボードを表示したりします。
      </td>
      <td id="exampleurl">
        <pre class="brush: html hidden">
&#x3C;input type="url" name="url"/></pre
        >
        {{EmbedLiveSample("exampleurl",200,55,"","", "nobutton")}}
      </td>
    </tr>
    <tr>
      <td>{{HTMLElement("input/week", "week")}}</td>
      <td>
        年と週番号で構成される日付を入力するためのコントロールです。週番号はタイムゾーンを伴いません。
      </td>
      <td id="exampleweek">
        <pre class="brush: html hidden">
&#x3C;input type="week" name="week"/></pre
        >
        {{EmbedLiveSample("exampleweek",200,55,"","", "nobutton")}}
      </td>
    </tr>
    <tr>
      <th colspan="3">廃止された値</th>
    </tr>
    <tr>
      <td>{{HTMLElement("input/datetime", "datetime")}}</td>
      <td>
        {{deprecated_inline}} UTC タイムゾーンに基づく日付と時刻 (時、分、秒、秒の端数) を入力するためのコントロールです。
      </td>
      <td id="exampledatetime">
        <pre class="brush: html hidden">
&#x3C;input type="datetime" name="datetime"/></pre
        >
        {{EmbedLiveSample("exampledatetime",200,75,"","", "nobutton")}}
      </td>
    </tr>
  </tbody>
</table>

## 属性

`<input>` 要素は属性があるためたいへん強力です。上記の例で説明している {{htmlattrxref("type", "input")}} 属性が最も重要です。すべての `<input>` 要素が、 {{domxref("HTMLInputElement")}} インターフェイスに基づいているため、技術的にはまったく同じ属性を共有しています。しかし実際には、ほとんどの属性は一部の特定の入力型にのみ影響を与えます。さらに、ある属性が入力に与える影響は入力の種類によって異なり、様々な入力型に様々な方法で影響を与えます。

この節では、すべての属性に簡単な説明を書いた一覧表を示します。その後で、それぞれの属性がどの入力型に関連付けられているか、より詳細に説明された一覧を示します。ほとんど、またはすべての入力型に共通する属性については、以下でより詳細に定義します。特定の入力型に固有の属性、またはすべての入力型に共通するが、特定の入力型で使用されたときに特別な動作をする属性は、それぞれの型のページで示します。この要素は[グローバル属性](/ja/docs/Web/HTML/Global_attributes)を含みます。 `<input>` に関連して特に重要な属性は強調表示されています。

<table class="no-markdown">
  <caption>
    <code>&#x3C;input></code> 要素の属性で、 <a href="/ja/docs/Web/HTML/Global_attributes">HTML のグローバル属性</a>を含むもの
  </caption>
  <thead>
    <tr>
      <th scope="col">属性</th>
      <th scope="col">型</th>
      <th scope="col">説明</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>{{htmlattrxref("accept", "input", "", 1)}}</td>
      <td>file</td>
      <td>ファイルアップロードコントロールで期待されるファイル形式のヒント</td>
    </tr>
    <tr>
      <td>{{htmlattrxref("alt", "input", "", 1)}}</td>
      <td>image</td>
      <td>image 型の alt 属性です。アクセシビリティのために必要です。</td>
    </tr>
    <tr>
      <td>{{htmlattrxref("autocomplete", "input", "", 1)}}</td>
      <td>すべて</td>
      <td>フォームの自動補完機能のためのヒント</td>
    </tr>
    <tr>
      <td>{{htmlattrxref("autofocus", "input", "", 1)}}</td>
      <td>すべて</td>
      <td>ページが読み込まれたときに、自動的にそのフォームコントロールにフォーカスを設定する</td>
    </tr>
    <tr>
      <td>{{htmlattrxref("capture", "input", "", 1)}}</td>
      <td>file</td>
      <td>ファイルアップロードコントロールのメディアキャプチャのインプットメソッド</td>
    </tr>
    <tr>
      <td>{{htmlattrxref("checked", "input", "", 1)}}</td>
      <td>radio, checkbox</td>
      <td>コマンドやコントロールがチェックされているか</td>
    </tr>
    <tr>
      <td>{{htmlattrxref("dirname", "input", "", 1)}}</td>
      <td>text, search</td>
      <td>
        フォーム送信時に要素の書字方向を送信するために使用するフォームフィールドの名前
      </td>
    </tr>
    <tr>
      <td>{{htmlattrxref("disabled", "input", "", 1)}}</td>
      <td>すべて</td>
      <td>コントロールが無効であるかどうか</td>
    </tr>
    <tr>
      <td>{{htmlattrxref("form", "input", "", 1)}}</td>
      <td>すべて</td>
      <td>コントロールを form 要素に関連付ける</td>
    </tr>
    <tr>
      <td>{{htmlattrxref("formaction", "input", "", 1)}}</td>
      <td>image, submit</td>
      <td>フォームの送信に使用する URL</td>
    </tr>
    <tr>
      <td>{{htmlattrxref("formenctype", "input", "", 1)}}</td>
      <td>image, submit</td>
      <td>フォームの送信に使用するデータセットのエンコード種別</td>
    </tr>
    <tr>
      <td>{{htmlattrxref("formmethod", "input", "", 1)}}</td>
      <td>image, submit</td>
      <td>フォームの送信に使用する HTTP メソッド</td>
    </tr>
    <tr>
      <td>
        {{htmlattrxref("formnovalidate", "input", "", 1)}}
      </td>
      <td>image, submit</td>
      <td>フォームの送信でフォームの検証をバイパス</td>
    </tr>
    <tr>
      <td>{{htmlattrxref("formtarget", "input", "", 1)}}</td>
      <td>image, submit</td>
      <td>フォーム送信に使用する閲覧コンテキスト</td>
    </tr>
    <tr>
      <td>{{htmlattrxref("height", "input", "", 1)}}</td>
      <td>image</td>
      <td>
        {{htmlelement('img')}} の <code>height</code> 属性と同じで、垂直方向の大きさ
      </td>
    </tr>
    <tr>
      <td>{{htmlattrxref("list", "input", "", 1)}}</td>
      <td>ほぼすべて</td>
      <td>自動補完オプションの入った {{htmlelement('datalist')}} の id 属性の値</td>
    </tr>
    <tr>
      <td>{{htmlattrxref("max", "input", "", 1)}}</td>
      <td>数値型</td>
      <td>最大値</td>
    </tr>
    <tr>
      <td>{{htmlattrxref("maxlength", "input", "", 1)}}</td>
      <td>password, search, tel, text, url</td>
      <td>`value` の最大長 (文字数)</td>
    </tr>
    <tr>
      <td>{{htmlattrxref("min", "input", "", 1)}}</td>
      <td>数値型</td>
      <td>最小値</td>
    </tr>
    <tr>
      <td>{{htmlattrxref("minlength", "input", "", 1)}}</td>
      <td>password, search, tel, text, url</td>
      <td>`value` の最小長 (文字数)</td>
    </tr>
    <tr>
      <td>{{htmlattrxref("multiple", "input", "", 1)}}</td>
      <td>email, file</td>
      <td>論理属性。複数の値を許可するかどうか</td>
    </tr>
    <tr>
      <td>{{htmlattrxref("name", "input", "", 1)}}</td>
      <td>すべて</td>
      <td>
        入力欄コントロールの名前。名前/値の組の部分としてフォームと一緒に送信される
      </td>
    </tr>
    <tr>
      <td>{{htmlattrxref("pattern", "input", "", 1)}}</td>
      <td>password, text, tel</td>
      <td><code>value</code> が一致すると有効となるパターン</td>
    </tr>
    <tr>
      <td>{{htmlattrxref("placeholder", "input", "", 1)}}</td>
      <td>password, search, tel, text, url</td>
      <td>フォームコントロールが空の時にフォームコントロール内に表示される内容</td>
    </tr>
    <tr>
      <td>{{htmlattrxref("readonly", "input", "", 1)}}</td>
      <td>ほぼすべて</td>
      <td>論理属性。値が編集できない</td>
    </tr>
    <tr>
      <td>{{htmlattrxref("required", "input", "", 1)}}</td>
      <td>ほぼすべて</td>
      <td>
        論理属性。フォームが送信できるようにするためには値が必要
      </td>
    </tr>
    <tr>
      <td>{{htmlattrxref("size", "input", "", 1)}}</td>
      <td>email, password, tel, text, url</td>
      <td>コントロールの大きさ</td>
    </tr>
    <tr>
      <td>{{htmlattrxref("src", "input", "", 1)}}</td>
      <td>image</td>
      <td>
        {{htmlelement('img')}} の <code>src</code> 属性と同じで、画像リソースのアドレス
      </td>
    </tr>
    <tr>
      <td>{{htmlattrxref("step", "input", "", 1)}}</td>
      <td>numeric types</td>
      <td>有効と見なされる増分。</td>
    </tr>
    <tr>
      <td>{{htmlattrxref("type", "input", "", 1)}}</td>
      <td>all</td>
      <td>フォームコントロールの型</td>
    </tr>
    <tr>
      <td>{{htmlattrxref("value", "input", "", 1)}}</td>
      <td>all</td>
      <td>最初、 HTML で明確に指定された場合は初期値。もっと一般的には、このフォームコントロールの現在の値。名前/値の組の部分としてフォームと一緒に送信される。</td>
    </tr>
    <tr>
      <td>{{htmlattrxref("width", "input", "", 1)}}</td>
      <td>image</td>
      <td>
        {{htmlelement('img')}} の `width` 属性と同じ
      </td>
    </tr>
  </tbody>
</table>

標準属性の説明に続いて、いくつかの追加の非標準属性を列挙します。

### 個々の属性

- {{htmlattrdef("accept")}}
  - : `file` 入力型に対してのみ有効です。 `accept` 属性は `file` アップロードコントロールの中でどのファイル形式が選択可能であるかを定義します。 {{HTMLElement("input/file", "file")}} 入力型を参照してください。
- {{htmlattrdef("alt")}}
  - : `image` ボタンに対してのみ有効です。 `alt` 属性は画像の代替テキストを提供します。 {{htmlattrxref("src", "input", "", 1)}} の画像が存在しないか、または読み込みに失敗した場合にこの属性の値を表示します。 {{HTMLElement("input/image", "image")}} 入力型を参照してください。
- {{htmlattrdef("autocomplete")}}

  - : (論理属性では**ありません**!) [`autocomplete`](/ja/docs/Web/HTML/Attributes/autocomplete) 属性は空白区切りの文字列の値を取り、指定された場合は、入力欄が提供する自動補完機能の種類を示します。自動補完のよくある実装は、以前同じ入力欄に入力された値を単に再呼び出しするものですが、もっと複雑な自動補完もあり得ます。例えば、ブラウザーが端末の連絡先リストと連携して、 `email` 入力欄でメールアドレスを自動補完したりする可能性もあります。許可されている値は [autocomplete 属性の値](/ja/docs/Web/HTML/Attributes/autocomplete#values)を参照してください。

    `autocomplete` 属性は `hidden`, `text`, `search`, `url`, `tel`, `email`, `date`, `month`, `week`, `time`, `datetime-local`, `number`, `range`, `color`, `password` で有効です。この属性は数値またはテキストデータを返さない入力型では効果がなく、 `checkbox`, `radio`, `file` とすべてのボタン型を除いたすべての入力型で有効になります。

    詳しい情報については [HTML の autocomplete 属性](/ja/docs/Web/HTML/Attributes/autocomplete)を参照してください。パスワードセキュリティに関する情報や、 `autocomplete` が `hidden` に対して他の入力型とどう異なるのかについての情報があります。

- {{htmlattrdef("autofocus")}}

  - : 論理属性で、指定された場合は、ページの読み込みが完了したとき (またはその要素を含む {{HTMLElement("dialog")}} が表示されたとき) に、自動的にその入力欄がフォーカスを持つことを示します。

    > **Note:** `autofocus` 属性がついた要素は、 {{domxref("Window/DOMContentLoaded_event", "DOMContentLoaded")}} イベントが発生する前にフォーカスを得ることがあります。

    文書中で一つの要素だけが `autofocus` 属性を持つことができます。複数の要素に付けた場合は、最初にこの属性を持つ要素がフォーカスを受け取ります。

    `autofocus` は `hidden` 型の入力欄にはフォーカスを受け取ることができないため、使用することができません。

    > **Warning:** フォームコントロールに自動的にフォーカスを与えると、読み上げ技術を利用している視覚障碍者を混乱させる可能性があります。 `autofocus` が割り当てられると、読み上げソフトは予告なしにフォームコントロールにその人を「テレポート」させることになるからです。

    `autofocus` 属性を適用する際には、アクセシビリティを慎重に検討してください。フォームコントロールにフォーカスを自動的に設定すると、読み込み時にページのスクロールが発生します。フォーカスを与えると、一部のタッチ端末では動的なキーボードを表示させることにもなります。読み上げソフトはフォーカスを受けているフォームコントロールのラベルをアナウンスする一方、ラベルよりも前は何もアナウンスしませんし、小さな端末を使用している視力のあるユーザーは、同様に先行するコンテンツによって作成された文脈を見逃してしまいます。

- {{htmlattrdef("capture")}}
  - : HTML Media Capture 仕様書で導入され、 `file` 入力型に対してのみ有効です。 `capture` 属性は、どのメディア (マイク、ビデオ、カメラ) を使用して新しいファイルをキャプチャし、対応するシナリオで `file` アップロードコントロールを使用してアップロードするかを定義します。 {{HTMLElement("input/file", "file")}} 入力型を参照してください。
- {{htmlattrdef("checked")}}

  - : `radio` 型と `checkbox` 型の両方で有効で、 `checked` は論理属性です。 `radio` 型に存在した場合、そのラジオボタンが同じ名前のラジオボタンのグループの中で現在選択されているものであることを示します。 `checkbox` 型に存在した場合、 (ページが読み込まれたとき) 既定でチェックボックスがチェックされていることを示します。このチェックボックスが現在チェックされているかどうかを示すものでは<em>ありません</em>。チェックボックスの状態が変更された場合でも、このコンテンツ属性はその変更を反映しません。 ([`HTMLInputElement` の `checked` IDL 属性](/ja/docs/Web/API/HTMLInputElement)のみが更新されます。)

    > **Note:** 他の入力コントロールとは異なり、チェックボックスやラジオボタンの値は、現在 `checked` の状態にある場合だけ送信データに含まれます。存在する場合、チェックされたコントロールの名前と値が送信されます。
    >
    > 例えば、 `name` が `fruit` で、 `value` が `cherry` であるチェックボックスがチェックされていると、送信されるフォームデータには `fruit=cherry` が含まれます。チェックボックスがチェックされていない場合、フォームデータには全く含まれません。チェックボックスやラジオボタンの既定の `value` は `on` です。

- {{htmlattrdef("dirname")}}

  - : `text` および `search` 入力型のみに有効で、 `dirname` 属性によって要素の書字方向を送信することができます。これが含まれていると、フォームコントロールは 2 組の名前と値を送信します。 1 組目は {{htmlattrxref("name", "input")}} と {{htmlattrxref("value", "input")}} であり、 2 組目は名前が `dirname` の値で、値に `ltr` または `rtl` がブラウザーによって設定されます。

    ```html
    <form action="page.html" method="post">
      <label>Fruit: <input type="text" name="fruit" dirname="fruit.dir" value="cherry"></label>
      <input type="submit"/>
    </form>
    <!-- page.html?fruit=cherry&fruit.dir=ltr -->
    ```

    上記のフォームが送信されると、入力欄は `name` / `value` の組である `fruit=cherry` と、 `dirname` / 書字方向の組である `fruit.dir=ltr` が送信されます。

- {{htmlattrdef("disabled")}}

  - : 論理属性で、存在する場合、ユーザーが入力欄と対話できないことを示します。無効な入力欄は、ふつうより薄い色や、その他のフィールドが使用できないことを示すことを示す形で表示されます。

    特に、無効になった入力欄は {{domxref("Element/click_event", "click")}} イベントを受け取らず、フォームと共に送信されることもありません。

    > **Note:** 仕様書で要件とはされていませんが、 Firefox は既定で、ページを再読み込みしても `<input>` を [動的に無効化した状態を維持します](https://stackoverflow.com/questions/5985839/bug-with-firefox-disabled-attribute-of-input-not-resetting-when-refreshing)。この機能は {{htmlattrxref("autocomplete","input")}} 属性で制御することができます。

- {{htmlattrdef("form")}}

  - : 文字列で、入力欄が関連づけられた {{HTMLElement("form")}} 要素 (つまり、**フォームオーナー**) を指定します。存在する場合、この文字列値は同一文書内の `<form>` 要素の {{htmlattrxref("id")}} と一致している必要があります。この属性が指定されない場合は、 `<input>` 要素は直近の内包するフォームに (もしあれば) 関連付けられます。

    `form` 属性によって、入力欄を文書内のどこに置いても、文書内の他の場所にあるフォームと関連付けることができます。

    > **Note:** 入力欄は一つのフォームとしか関連付けることができません。

- {{htmlattrdef('formaction')}}
  - : `image` および `submit` 入力型でのみ有効です。詳しくは {{HTMLElement("input/submit", "submit")}} 入力型を参照してください。
- {{htmlattrdef('formenctype')}}
  - : `image` および `submit` 入力型でのみ有効です。詳しくは {{HTMLElement("input/submit", "submit")}} 入力型を参照してください。
- {{htmlattrdef('formmethod')}}
  - : `image` および `submit` 入力型でのみ有効です。詳しくは {{HTMLElement("input/submit", "submit")}} 入力型を参照してください。
- {{htmlattrdef('formnovalidate')}}
  - : `image` および `submit` 入力型でのみ有効です。詳しくは {{HTMLElement("input/submit", "submit")}} 入力型を参照してください。
- {{htmlattrdef('formtarget')}}
  - : `image` および `submit` 入力型でのみ有効です。詳しくは {{HTMLElement("input/submit", "submit")}} 入力型を参照してください。
- {{htmlattrdef("height")}}
  - : `image` 入力型でのみ有効です。 `height` はグラフィックの送信ボタンの表現を表示するための画像ファイルの高さを示します。 {{HTMLElement("input/image", "image")}} 入力型を参照してください。
- {{htmlattrdef("id")}}
  - : すべての入力欄を含む、すべての要素で有効なグローバル属性で、文書全体で一意でなければならない一意の識別子 (ID) を定義します。その目的は、リンクする際に要素を識別することです。この値は、ラベルとフォームコントロールをリンクするための {{htmlelement('label')}} の `for` 属性の値として使用されます。 {{htmlelement('label')}} を参照してください。
- {{htmlattrdef("inputmode")}}
  - : すべての要素で有効なグローバル属性です、この要素やその内容を編集する際に使用される仮想キーボード設定の種類をブラウザーに示すヒントを提供します。値としては `none`, `text`, `tel`, `url`, `email`, `numeric`, `decimal`, `search` があります。
- {{htmlattrdef("list")}}

  - : `list` 属性で与えられる値は、同じ文書内にある {{HTMLElement("datalist")}} 要素の {{domxref("Element.id", "id")}} としてください。 `<datalist>` は、この入力欄でユーザーに提案する事前定義された値のリストを提供します。リストに {{htmlattrxref("type", "input")}} と互換性のない値が含まれていた場合は、提案の選択肢には含まれません。この値は提案として使用されるものであり、要件ではありません。ユーザーはこの定義済みリストから選択することもできるし、別な値を提供することもできます。

    これは `text`, `search`, `url`, `tel`, `email`, `date`, `month`, `week`, `time`, `datetime-local`, `number`, `range`, `color` で有効です。

    仕様書によれば、 `list` 属性は `hidden`, `password`, `checkbox`, `radio`, `file` それにボタン型では対応していません。

    ブラウザーによっては、独自のカラーパレットが提案されたり、範囲に沿ったチェックマークが表示されたり、 {{HTMLElement("select")}} のように開くものの、リストにない値を入力できるようになったりすることもあります。他の入力型については[ブラウザーの互換性一覧表](/ja/docs/Web/HTML/Element/datalist#browser_compatibility)を参照してください。

    {{htmlelement('datalist')}} 要素を参照してください。

- {{htmlattrdef("max")}}

  - : `date`, `month`, `week`, `time`, `datetime-local`, `number`, `range` で有効であり、許可される値の範囲の最大値を定義します。要素に入力された {{htmlattrxref("value", "input")}} がこれを超えた場合、要素は[制約検証](/ja/docs/Web/Guide/HTML/Constraint_validation)に不合格になります。 `max` 属性の値が数値でない場合は、要素に最大値は設定されません。

    特殊な場合があります。データ型が期間を表す場合（日付や時刻など）、 `max` の値は `min` の値よりも小さくなる場合があり、これは範囲が折り返す可能性があることを表します。例えば、これによって午後10時から午前4時までの自国の範囲を指定することができます。

- {{htmlattrdef("maxlength")}}

  - : `text`, `search`, `url`, `tel`, `email`, `password` で有効であり、ユーザーがフィールドに入力することができる文字数 (UTF-16 コード単位) を定義します。これは `0` 以上の整数値でなければなりません。 `maxlength` が指定されなかった場合、または無効な値が指定された場合は、その入力欄には最大長が設定されません。この値は `minlength` の値以上である必要もあります。

    欄に入力されたテキストの文字数が UTF-16 コード単位で `maxlength` よりも多いと、この入力欄は[制約検証](/ja/docs/Web/Guide/HTML/Constraint_validation)に不合格になります。既定では、ブラウザーはユーザーが `maxlength` 属性で許可された文字数以上を入力するのを防ぎます。詳しくは[クライアント側検証](#client-side_validation)を参照してください。

- {{htmlattrdef("min")}}

  - : `date`, `month`, `week`, `time`, `datetime-local`, `number`, `range` で有効であり、許可される値の範囲の最も低い値を定義します。要素に入力された {{htmlattrxref("value", "input")}} がこれを下回った場合、要素は[制約検証](/ja/docs/Web/Guide/HTML/Constraint_validation)に不合格になります。 `min` 属性の値が数値でない場合は、要素に最小値は設定されません。

    この値は `max` 属性の値以下である必要があります。 `min` 属性が存在するものの、指定されていなかったり無効であったりした場合は、 `min` の値は適用されません。 `min` 属性が有効であり、値が空ではなく `min` 属性で許可された最小値よりも小さかった場合、制約の検証によりフォームの送信が行われません。詳しくは[クライアント側検証](#client-side_validation)を参照してください。

    特殊な場合があります。データ型が期間を表す場合（日付や時刻など）、 `max` の値は `min` の値よりも小さくなる場合があり、これは範囲が折り返す可能性があることを表します。例えば、これによって午後 10 時から午前 4 時までの自国の範囲を指定することができます。

- {{htmlattrdef("minlength")}}

  - : `text`, `search`, `url`, `tel`, `email`, `password` で有効であり、ユーザーがフィールドに入力することができる最小文字数 (UTF-16 コード単位) を定義します。これは負数ではなく、 `maxlength` で指定された値以下の整数値でなければなりません。 `minlength` が指定されなかった場合、または無効な値が指定された場合は、その入力欄には最小文字数が設定されません。

    欄に入力されたテキストの文字数が UTF-16 コード単位で `minlength` よりも少ないと、この入力欄は[制約検証](/ja/docs/Web/Guide/HTML/Constraint_validation)に不合格になります。詳しくは[クライアント側検証](#client-side_validation)を参照してください。

- {{htmlattrdef("multiple")}}
  - : 論理属性の `multiple` は、設定されている場合、 email 入力欄ではユーザーがウィジェット内でカンマ区切りで複数のメールアドレスを入力できること、また `file` 入力欄では複数のファイルを選択することができることを意味します。 {{HTMLElement("input/email", "email")}} および {{HTMLElement("input/file", "file")}} 入力型を参照してください。
- {{htmlattrdef("name")}}

  - : 入力コントロールの名前を指定する文字列です。この名前はフォームデータが送信される時に、コントロールの値と共に送信されます。

    `name` は (厳密にはそうではありませんが) 必須の属性と考えてください。入力欄に `name` が指定されていなかった場合や `name` が空欄だった場合、その入力欄の値はフォームと一緒に送信されません。 (無効なコントロール、チェックされていないラジオボタン、チェックされていないチェックボックス、リセットボタンも送信されません。)

    特殊な場合が 2 つあります。

    1. `_charset_` : `<input>` 要素の {{HTMLElement("input/hidden", "hidden")}} 型として使用された場合、入力欄の `value` には自動的に、フォームを送信するのに使用される文字エンコーディングが{{Glossary("user agent", "ユーザーエージェント")}}によって設定されます。
    2. `isindex`: 歴史的な理由で、 [`isindex`](https://html.spec.whatwg.org/multipage/form-control-infrastructure.html#attr-fe-name) という名前は許可されていません。

    [`name`](#htmlattrdefname) 属性はラジオボタンでは独特の動きをします。

    同名のラジオボタングループ内で、一度にチェックできるラジオボタンは 1 つのみです。そのグループ内のラジオボタンを選択すると、同じグループ内の現在選択されているラジオボタンの選択が自動的に解除されます。チェックされたラジオボタンの値は、フォームが送信された場合、名前と一緒に送信されます。

    同名のラジオボタンが連続したグループにタブ移動した場合、そのうちの 1 つにチェックが入っていると、それがフォーカスを受け取ります。ソース順でグループ化されていない場合、グループのうちの 1 つがチェックされていた場合は、タブ移動でグループ内の最初のラジオボタンに出会ったときに、チェックが入っていないラジオボタンをすべてスキップして、そのグループがフォーカスを受け取ります。言い換えれば、 1 つがチェックされている場合、グループ内のチェックされていないラジオボタンはスキップされます。どれもチェックされていない場合、同名グループの最初のボタンに到達したときに、ラジオボタングループがフォーカスを受け取ります。

    グループ内のラジオボタンにフォーカスがある場合、矢印キーを使用すれば、ラジオボタンがソースの順序でグループ化されていなくても、同じ名前のすべてのラジオボタンに移動することができます。

    入力要素に `name` が与えられると、その名前は所有するフォーム要素の {{domxref("HTMLFormElement.elements")}} プロパティのプロパティになります。 `name` が `guest` に設定されている入力と、 `name` が `hat-size` に設定されている入力がある場合、以下のコードを使用することができます。

    ```js
    let form = document.querySelector("form");

    let guestName = form.elements.guest;
    let hatSize = form.elements["hat-size"];
    ```

    このコードを実行すると、 `guestName` が {{domxref("HTMLInputElement")}} の `guest` フィールドになり、 `hatSize` が `hat-size` フィールドの

    > **Warning:** フォームの組み込みプロパティに対応する `name` をフォーム要素に与えないようにしてください。そうすると、対応する入力欄に参照するとき、定義済みのプロパティやメソッドを上書きしてしまうからです。

- {{htmlattrdef("pattern")}}

  - : `pattern` 属性は、指定された場合、入力の {{htmlattrxref("value")}} が一致すれば値が[制約検証](/ja/docs/Web/Guide/HTML/Constraint_validation)を通過したとみなされる正規表現を指定します。これは {{jsxref("RegExp")}} 型で使用される有効な JavaScript の正規表現でなければならず、これは[正規表現のガイド](/ja/docs/Web/JavaScript/Guide/Regular_Expressions)で説明されている通りです。正規表現をコンパイルする際には `'u'` フラグが指定され、パターンが ASCII ではなく Unicode コードポイントのシーケンスとして扱われます。パターンのテキストの周囲にスラッシュを指定しないでください。

 `pattern` 属性が存在するが、指定されていないか無効な場合、正規表現は適用されず、この属性は完全に無視されます。 `pattern` 属性が有効で、空でない値がパターンと一致しない場合、制約の検証によりフォームの送信ができなくなります。

    > **Note:** `pattern` 属性を使用する場合は、期待される書式をユーザーに知らせる説明文を近くに配置してください。また、パターンに一致させるための要件が何であるかを説明するために、 {{htmlattrxref("title", "input")}} 属性を含めることもできます。ほとんどのブラウザーはこのタイトルをツールチップとして表示します。ツールチップは改善手段です。

 詳しくは[クライアント側検証](#クライアント側検証)を参照してください。

- {{htmlattrdef("placeholder")}}

  - : `placeholder` 属性は、フィールドでどのような情報が期待されているかについて、ユーザーに簡単なヒントを与える文字列です。説明やプロンプトではなく、期待されるデータのタイプのヒントとなる単語や短いフレーズである必要があります。テキストには、改行を含めては*いけません*。例えば、ユーザーの名前を入力するフィールドで、そのラベルが "First Name" の場合、適切なプレースホルダーは "e.g. Mustafa" となります。

    > **Note:** `placeholder` 属性は、フォームを説明するためには他の方法ほど意味的に有用ではなく、コンテンツに予期せぬ技術的な問題を引き起こす可能性があります。詳細は[ラベル](#label)を参照してください。

- {{htmlattrdef("readonly")}}

  - : 論理属性で、存在すれば、ユーザーが入力欄の値を編集できないことを示します。 `readonly` 属性は `text`, `search`, `url`, `tel`, `email`, `date`, `month`, `week`, `time`, `datetime-local`, `number`, `password` の各入力型が対応しています。

    詳しくは [HTML 属性: `readonly`](/ja/docs/Web/HTML/Attributes/readonly) を参照してください。

- {{htmlattrdef("required")}}

  - : `required` は論理属性であり、所有するフォームが送信される前に、ユーザーが入力欄の値を指定しなければならないことを示します。 `required` 属性は `text`, `search`, `url`, `tel`, `email`, `date`, `month`, `week`, `time`, `datetime-local`, `number`, `password`, `checkbox`, `radio`, `file` の各入力型で対応しています。

    詳しくは[クライアント側検証](#クライアント側検証)および [HTML 属性: `required`](/ja/docs/Web/HTML/Attributes/required) を参照してください。

- {{htmlattrdef("size")}}
  - : `email`, `password`, `tel`, `text` の `input` 型でのみ有効です。入力内容をどれだけ表示するかを指定します。基本的には、 CSS の `width` プロパティを設定するのと同じ効果が得られますが、いくつかの特徴があります。値の実際の単位は、入力型によって異なります。 `password` や `text` の場合は文字数 (または `em` 単位) で既定値は `20`、それ以外の場合はピクセルとなります。 CSS の width は size 属性よりも優先されます。
- {{htmlattrdef("src")}}
  - : `image` 入力ボタンにのみ有効で、 `src` は、グラフィカルな送信ボタンを表現するために表示する画像ファイルの URL を指定する文字列です。 {{HTMLElement("input/image", "image")}} 入力型を参照してください。
- {{htmlattrdef("step")}}

  - : 数値入力型、例えば `number`、日付／時刻入力型、 `range` 型で有効です。 `[step](/ja/docs/Web/HTML/Attributes/step)` 属性は、値が準拠すべき粒度を指定する数値です。

    明示的に指定しない場合は次のようになります。

    - `number` と `range` の場合、 `step` の既定値は 1 です。
    - 日付や時刻の入力型では、 `step` は秒単位の表現となり、**既定の step は 60 秒**になります。 step の係数は 1000 です (他のアルゴリズムの場合と同様、秒からミリ秒へ変換します)。

    値は、正の整数または浮動小数点実数、または特殊な値 `any` のいずれかでなければなりません。これは、刻みが考慮されず、あらゆる値が許容されることを意味します ([`min`](#min) や [`max`](#max) などの他の制約がない場合)。

    `any` が明示的に設定されていない場合、 `number`、日付/時刻、 `range` の各入力型の有効な値は、刻みの基数と等しくなります。すなわち [`min`](#min) の値と、そこから step 値単位で増加させたもの (指定されている場合は [`max`](#max) まで) です。

    例えば、 `<input type="number" min="10" step="2">` とすると、 `10` 以上の偶数の整数であればすべて有効となります。 `<input type="number">` のように省略された場合は、整数であれば何でも有効ですが、浮動小数点実数 (`4.2` など) は `step` の既定値が `1` なので有効ではありません。 `4.2` を有効にするためには、 `step` に `any`、0.1、0.2 に設定するか、 `min` の値を `.2` で終わる数に (例えば `<input type="number" min="-5.2">` に) 設定する必要があります。

    > **Note:** ユーザーが入力したデータが刻みの設定に従っていない場合、その値は制約検証で無効とみなされ、 `:invalid` 擬似クラスに一致するようになります。

    詳しくは[クライアント側検証](#クライアント側検証)を参照してください。

- {{htmlattrdef("tabindex")}}
  - : すべての要素、すべての入力型で有効なグローバル属性で、要素が入力フォーカスを受けられる (フォーカス可能) かどうかを示す整数属性であり、順次キーボードナビゲーションに加わるべきかどうかを示します。 hidden 型の入力を除くすべての入力型がフォーカス可能であるため、この属性はフォームコントロールに使用すべきではありません。そうすると文書内のすべての要素のフォーカス順序を管理しなければならず、間違って行うとユーザビリティやアクセシビリティを損なう危険性があるからです。
- {{htmlattrdef('title')}}
  - : すべての要素、すべての入力型で有効なグローバル属性で、所属する要素に関連するアドバイス情報を表すテキストを指定します。このような情報は、ふつうツールチップとしてユーザーに提示されますが、必ずそうとは限りません。 title は、フォームコントロールの目的の主たる説明として使用してはいけません。代わりに {{htmlelement('label')}} 要素を使用し、その `for` 属性でフォームコントロールの {{htmlattrdef('id')}} 属性を指すようにしてください。下記の[ラベル](#ラベル)を参照してください。
- {{htmlattrdef("type")}}

  - : 文字列で、表示するコントロールの型を指定します。例えば、チェックボックスを生成するには、 `checkbox` の値が使用されます。省略された場合（または不明な値が指定された場合）は、入力型に `text` が使用され、テキストの入力欄が生成されます。

    許可されている値は[input の型](#input_の型)にあります。

- {{htmlattrdef("value")}}
  - : 入力コントロールの値です。 HTML の中で指定されると、これは初期値となり、その後で JavaScript を使用してそれぞれの {{domxref("HTMLInputElement")}} オブジェクトの `value` プロパティにアクセスすることで、いつでも変更したり受け取ったりすることができます。 `value` 属性は常に省略可ですが、 `checkbox`, `radio`, `hidden` においては必須だと考えてください。
- {{htmlattrdef("width")}}
  - : `image` 入力ボタンにのみ有効で、 `width` にはグラフィックの送信ボタンを表現するために表示する画像ファイルの幅を指定します。 {{HTMLElement("input/image", "image")}} 入力型を参照してください。

### 標準外の属性

一部のブラウザーでは、以下の標準外の属性も利用できます。原則として、どうしようもない場合を除き、これらの使用は避けるべきです。

<table class="no-markdown">
  <thead>
    <tr>
      <th scope="col">属性</th>
      <th scope="col">説明</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>{{htmlattrxref("autocorrect", "input", "", 1)}}</td>
      <td>
        自動補完が <code>on</code> であるか <code>off</code> であるかを示す文字列です。 <strong>Safari のみ。</strong>
      </td>
    </tr>
    <tr>
      <td>{{htmlattrxref("incremental", "input", "", 1)}}</td>
      <td>
        ユーザーがフィールドの値を編集している途中にライブで検索結果を更新できるように、 {{domxref("HTMLInputElement/search_event", "search")}} イベントを繰り返し送信するかどうかを設定します。 <strong>WebKit および Blink のみ (Safari, Chrome, Opera, など)。</strong>
      </td>
    </tr>
    <tr>
      <td>{{htmlattrxref("mozactionhint", "input", "", 1)}}</td>
      <td>
        文字列で、ユーザーがフィールドの編集中に <kbd>Enter</kbd> キーや <kbd>Return</kbd> キーを押したときに実行されるアクションの種類を示す文字列です。仮想キーボード上で、そのキーに対応する適切なラベルを決定するために使用されます。 <strong>Android 版 Firefox のみ</strong>。
      </td>
    </tr>
    <tr>
      <td>{{htmlattrxref("orient", "input", "", 1)}}</td>
      <td>
        範囲のスライダーの向きを設定します。 <strong>Firefox のみ</strong>。
      </td>
    </tr>
    <tr>
      <td>{{htmlattrxref("results", "input", "", 1)}}</td>
      <td>
        以前の検索クエリーのドロップダウンリストに表示する項目の最大数です。 <strong>Safari のみ。</strong>
      </td>
    </tr>
    <tr>
      <td>
        {{htmlattrxref("webkitdirectory", "input", "", 1)}}
      </td>
      <td>
        論理属性で、ユーザーがディレクトリー (または {{htmlattrxref("multiple", "input", "", 1)}} も存在すれば複数のディレクトリー) を選択できるようにするかどうかを示します。
      </td>
    </tr>
  </tbody>
</table>

- {{htmlattrdef("autocorrect")}} {{non-standard_inline}}

  - : Safari 拡張である `autocorrect` 属性は文字列で、ユーザーがこの欄を編集している間に自動修正を有効にするかどうかを示します。次の値が許されています。

    - `on`
      - : 構成されていれば、打ち間違いの自動修正や、テキストの置き換え処理を有効にします。
    - `off`
      - : 自動修正やテキストの置き換えを無効にします。

- {{htmlattrdef("incremental")}} {{non-standard_inline}}

  - : 論理属性 `incremental` は WebKit および Blink 拡張で（そのため Safari, Opera, Chrome, などが対応）、もし存在すれば、{{Glossary("user agent", "ユーザーエージェント")}}に入力をライブ検索として処理します。ユーザーがフィールドの値を編集すると、ユーザーエージェントは {{domxref("HTMLInputElement/search_event", "search")}} イベントを検索ボックスを表す {{domxref("HTMLInputElement")}} オブジェクトへ送信します。これにより、ユーザーが検索を編集するたびに、コードからリアルタイムに検索結果を更新することができます。

    `incremental` が指定されていない場合、 {{domxref("HTMLInputElement/search_event", "search")}} イベントはユーザーが明示的に検索を実行した時のみ（フィールドを編集中に <kbd>Enter</kbd> または <kbd>Return</kbd> キーを押すなど) 送信されます。

    `search` イベントは発生頻度が制限されているため、実装により定義された間隔よりも頻繁に送信されることはありません。

- {{htmlattrdef("mozactionhint")}} {{non-standard_inline}}

  - : Mozilla 拡張で Android 版 Firefox で対応しており、ユーザーがフィールドを編集中に <kbd>Enter</kbd> キーや <kbd>Return</kbd> キーを押した場合に行われるアクションの種類のヒントを提供します。この情報は仮想キーボードの <kbd>Enter</kbd> キーにどのようなラベルを使用するかを決定するために使用されます。

    > **Note:** これはグローバル属性 {{htmlattrxref("enterkeyhint")}} として[標準化されています](https://html.spec.whatwg.org/#input-modalities:-the-enterkeyhint-attribute)が、まだ広くは実装されていません。 Firefox の実装状態の変遷を確認するには、 {{bug(1490661)}} を参照してください。

    許可されている値は `go`, `done`, `next`, `search`, `send` です。ブラウザーはこのヒントを使用して、 Enter キーにどのラベルを置くかを決定します。

- {{htmlattrdef("orient")}} {{non-standard_inline}}
  - : CSS の標準外の -moz-orient non-standard プロパティと同様に {{htmlelement('progress')}} および {{htmlelement('meter')}} 要素に影響を与える `orient` 属性は、範囲スライダーの向きを定義する定義します。値は `horizontal` が範囲を水平方向に描画することを、 `vertical` が範囲を垂直に描画することを意味します。
- {{htmlattrdef("results")}} {{non-standard_inline}}

  - : `results` 属性は Safari のみが対応しており、 {{HTMLElement("input")}} 要素のネイティブな検索クエリのドロップダウンメニューに表示する項目の最大数を上書きすることができる数値です。

    この値は、負でない 10 進数でなければならなりません。指定しない場合、または無効な値を指定した場合は、ブラウザーの既定の最大項目数が使用されます。

- {{htmlattrdef("webkitdirectory")}} {{non-standard_inline}}

  - : 論理属性の `webkitdirectory` は、もし存在する場合は、ファイル選択インターフェイスでユーザーがディレクトリのみを選択することができることを示します。詳しい解説と例については {{domxref("HTMLInputElement.webkitdirectory")}} を参照してください。

    `webkitdirectory` はもともと WebKit ベースのブラウザー向けのみに実装されたものですが、 Microsoft Edge や Firefox 50 以降でも使用できます。しかし、比較的広く対応されていますが、まだ標準になっておらず、代替手段がない限りは使用するべきではありません。

## メソッド

以下のメソッドは DOM 内で `<input>` を表現する {{domxref("HTMLInputElement")}} インターフェイスで提供されます。親インターフェイスである {{domxref("HTMLElement")}}, {{domxref("Element")}}, {{domxref("Node")}}, {{domxref("EventTarget")}} で指定されているメソッドも使用できます。

- {{domxref("HTMLInputElement.checkValidity", "checkValidity()")}}
  - : 要素の有効性チェックを直ちに実行し、値が有効でない場合は文書に対して {{domxref("HTMLInputElement.invalid_event", "invalid")}} イベントを要素に発生させます。
- {{domxref("HTMLInputElement.reportValidity", "reportValidity()")}}
  - : 要素の値が有効性チェックを通った場合は `true` を返します。そうでなければ、 `false` を返します。
- {{domxref("HTMLInputElement.select", "select()")}}
  - : 要素が選択可能な場合、 `<input>` 要素の内容を選択します。選択可能なテキストコンテンツがない要素 (カラーピッカーまたはカレンダー日付入力など) では、このメソッドは何もしません。
- {{domxref("HTMLInputElement.setCustomValidity", "setCustomValidity()")}}
  - : 入力要素の値が有効ではないときに表示する独自のメッセージを設定します。
- {{domxref("HTMLInputElement.setRangeText", "setRangeText()")}}
  - : 入力要素内の文字の指定された範囲のコンテンツを、指定された文字列に設定します。 `selectMode` 引数を使用して、既存のコンテンツに影響させる方法を制御することができます。
- {{domxref("HTMLInputElement.setSelectionRange", "setSelectionRange()")}}
  - : テキストの入力要素内で、指定された文字の範囲を選択します。テキスト入力欄として表現されない入力欄では何もしません。
- {{domxref("HTMLInputElement.stepDown", "stepDown()")}}
  - : 数値入力欄の値を既定で1、または指定された数値の単位だけ減少させます。
- {{domxref("HTMLInputElement.stepUp", "stepUp()")}}
  - : 数値入力欄の値を既定で1、または指定された数値の単位だけ増加させます。

## CSS

置換要素である入力欄には、フォーム要素以外には適用できない特性がいくつかあります。フォームコントロールをその UI の特性に基づいて指定できる CSS セレクターがあり、 UI 擬似クラスとも呼ばれています。また、属性セレクターを使って、 input 要素を型別に指定することもできます。また、特に便利なプロパティもあります。

### UI 擬似クラス

<table class="no-markdown">
  <caption>
    <code>&#x3C;input></code> 要素に関連する説明
  </caption>
  <thead>
    <tr>
      <th>擬似クラス</th>
      <th>説明</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>{{Cssxref(":enabled")}}</td>
      <td>
        現在有効な要素で、アクティブ化 (選択、クリック、入力など) またはフォーカスを受け受け取ることができ、無効な状態、すなわちアクティブ化やフォーカスを受け取ることができない状態を持つものです。
      </td>
    </tr>
    <tr>
      <td>{{Cssxref(":disabled")}}</td>
      <td>
        現在無効な要素で、有効な状態、すなわち無効化されていなければアクティブ化 (選択、クリック、入力など) やフォーカスを受け取ることができる状態になることができるものです。
      </td>
    </tr>
    <tr>
      <td>{{Cssxref(":read-only")}}</td>
      <td>ユーザーが編集することができない要素</td>
    </tr>
    <tr>
      <td>{{Cssxref(":read-write")}}</td>
      <td>ユーザーが編集できる要素です。</td>
    </tr>
    <tr>
      <td>{{Cssxref(":placeholder-shown")}}</td>
      <td>
        現在{{htmlattrxref("placeholder", "input", "プレイスホルダーのテキスト", 1)}}を表示している要素で、 <code>&#x3C;input></code> や {{HTMLElement("textarea")}} 要素に {{htmlattrxref("placeholder", "input", "", 1)}} 属性が付いていて、まだ値がないものを含みます。
      </td>
    </tr>
    <tr>
      <td>{{Cssxref(":default")}}</td>
      <td>
        関連する要素のグループの中で、既定となるフォーム要素です。 {{HTMLElement("input/checkbox", "checkbox")}} や {{HTMLElement("input/radio", "radio")}} の入力型のうち、ページの読み込み時やレンダリング時にチェックされていたものに一致します。
      </td>
    </tr>
    <tr>
      <td>{{Cssxref(":checked")}}</td>
      <td>
        {{HTMLElement("input/checkbox", "checkbox")}} や {{HTMLElement("input/radio", "radio")}} の入力型のうち、現在チェックされている (また {{HTMLElement("select")}} の {{HTMLElement("option")}} のうち現在選択されているもの) に一致します。
      </td>
    </tr>
    <tr>
      <td>{{Cssxref(":indeterminate")}}</td>
      <td>
        {{HTMLElement("input/checkbox", "checkbox")}} 要素で indeterminate プロパティが JavaScript から true に設定されている場合、 {{HTMLElement("input/radio", "radio")}} 要素で同じ name の値を持つすべてのラジオボタンがチェックされていない場合、 {{HTMLElement("progress")}} 要素が indeterminate の状態にある場合
      </td>
    </tr>
    <tr>
      <td>{{Cssxref(":valid")}}</td>
      <td>
        フォームコントロールのうち、制約検証が適用でき、現在有効であるもの。
      </td>
    </tr>
    <tr>
      <td>{{Cssxref(":invalid")}}</td>
      <td>
        制約条件の検証が適用され、現在有効ではないフォームコントロール。
        {{ htmlattrxref("required", "input", "", 1)}},
        {{ htmlattrxref("pattern", "input", "", 1)}} ,
        {{ htmlattrxref("step", "input", "", 1)}},
        {{ htmlattrxref("max", "input", "", 1)}} などの属性で設定された制約条件に値が適合しないフォームコントロールに一致します。
      </td>
    </tr>
    <tr>
      <td>{{Cssxref(":in-range")}}</td>
      <td>
        空でない入力欄のうち、現在の値が [min](#htmlattrdefmin) および [max](#htmlattrdefmax) 属性、および [step](#htmlattrdefstep) 属性で指定された範囲内にあるもの。
      </td>
    </tr>
    <tr>
      <td>{{Cssxref(":out-of-range")}}</td>
      <td>
        空でない入力欄のうち、現在の値が {{ htmlattrxref("min", "input", "", 1)}} Ｓ {{ htmlattrxref("max", "input", "", 1)}} 属性の範囲内にないか、 {{ htmlattrxref("step", "input", "", 1)}} の制約に準拠していないもの。
      </td>
    </tr>
    <tr>
      <td>{{Cssxref(":required")}}</td>
      <td>
        <code>&#x3C;input></code>, {{HTMLElement("select")}}, {{HTMLElement("textarea")}} の各要素で、 {{ htmlattrxref("required", "input")}} 属性が設定されているもの。必須になる要素のみに一致します。必須にならない要素にこの属性を設定しても、一致するようにはなりません。
      </td>
    </tr>
    <tr>
      <td>{{Cssxref(":optional")}}</td>
      <td>
        <code>&#x3C;input></code>, {{HTMLElement("select")}}, {{HTMLElement("textarea")}} の各要素で、 {{ htmlattrxref("required", "input")}} 属性が設定されていないもの。必須になることがない属性には一致しません。
      </td>
    </tr>
    <tr>
      <td>{{Cssxref(":blank")}}</td>
      <td>
        <code>&#x3C;input></code> および {{HTMLElement("textarea")}} 要素のうち現在値がないものです。
      </td>
    </tr>
    <tr>
      <td>{{Cssxref(":user-invalid")}}</td>
      <td>
        <code>:invalid</code> と似ていますが、フォーカスを失ったときに適用されます。無効な入力欄に一致しますが、コントロールにフォーカスが移動したり、コントロールから離れたり、無効なコントロールを含むフォームを送信しようとしたときなど、ユーザーの操作があって初めて一致します。
      </td>
    </tr>
  </tbody>
</table>

#### 擬似クラスの例

チェックボックスのラベルを、そのチェックボックスがチェックされているかどうかに基づいてスタイル付けすることができます。この例では、 {{cssxref('color')}} と {{cssxref('font-weight')}} でチェックされたボックスの直後にある {{htmlelement('label')}} をスタイル付けしています。 `input` がチェックされていない場合はスタイルを適用しません。

```html hidden
<input id="checkboxInput" type="checkbox">
<label for="checkboxInput">このチェックボックスのオンとオフを切り替えてください</label>
```

```css
input:checked + label {
  color: red;
  font-weight: bold;
}
```

{{EmbedLiveSample('Pseudo-classes_example', 500, 80)}}

### 属性セレクター

[属性セレクター](/ja/docs/Learn/CSS/Building_blocks/Selectors/Attribute_selectors)を使用すると、様々なフォームコントロールの型のターゲットを [type](#htmlattrdeftype) に基づいて絞ることができます。 CSS の属性セレクターは、属性の有無または属性の値に基づいて要素を照合します。

```css
/* password 入力欄に一致 */
input[type="password"] {}

/* 有効な値の範囲が限定されているフォームコントロールに一致 */
input[min][max] {}

/* pattern 属性の付いたフォームコントロールに一致 */
 input[pattern] {}
 ```

### ::placeholder

既定では、プレイスホルダーのテキストは半透明または明るい灰色で表示されます。 {{cssxref('::placeholder')}} 擬似要素は入力欄の{{ htmlattrxref("placeholder", "input", "プレイスホルダーのテキスト", 1)}}です。これは限定された CSS プロパティでスタイル付けすることができます。

```css
::placeholder {
  color: blue;
}
```

{{cssxref("::first-line")}} 擬似要素に適用できる CSS プロパティのサブセットのみが、セレクターに `::placeholder` を使用した規則で使用することができます。

### appearance

{{cssxref("appearance")}} プロパティは、（ほぼ）あらゆる要素をオペレーティングシステムのテーマに基づいたプラットフォームのネイティブのスタイルで表示したり、 `none` の値でプラットフォームのネイティブのスタイルを削除したりすることができます。

`<div>` に `div {appearance: radio;}` を設定してラジオボタンのように見せたり、 `[type="radio"] {appearance: checkbox;}` でチェックボックスのように見せたりすることができますが、やらないでください。

`appearance: none` を設定するとプラットフォームのネイティブの境界が削除されますが、機能は削除されません。

### caret-color

テキスト入力関連要素に特有のプロパティとして、 CSS の {{cssxref("caret-color")}} プロパティがあり、テキスト入力欄のキャレットを描くのに使用する色を設定することができます。

#### HTML

```html
<label for="textInput">赤いキャレットに注意:</label>
<input id="textInput" class="custom" size="32">
```

#### CSS

```css
input.custom {
  caret-color: red;
  font: 16px "Helvetica", "Arial", "sans-serif"
}
```

#### 結果

{{EmbedLiveSample('caret-color', 500, 80)}}

### object-position と object-fit

`<input>` 要素は特定の場合（多くはテキスト以外の入力や特殊なインターフェイス）（には、[置換要素](/ja/docs/Web/CSS/Replaced_element)になることがあります。その場合、 CSS の {{cssxref("object-position")}} および {{cssxref("object-fit")}} プロパティを使って、要素の枠内での大きさと位置を調整することができます。

### スタイル付け

HTML の要素に色を追加することの関する詳しい情報は、次の記事を参照してください。

- [CSS を使った HTML の要素への色の適用](/ja/docs/Web/HTML/Applying_color)

こちらも参照してください。

- [HTML フォームへのスタイル設定](/ja/docs/Learn/Forms/Styling_web_forms)
- [HTML フォームへの高度なスタイル設定](/ja/docs/Learn/Forms/Advanced_form_styling)
- [ フォームウィジェット向けプロパティ実装状況一覧](/ja/docs/Learn/Forms/Property_compatibility_table_for_form_controls)

## 追加機能

### ラベル

ラベルは支援テキストを `<input>` に関連付けるために必要です。 {{HTMLElement("label")}} 要素は、フォームの入力欄を説明するために、(レイアウト方法はさておき）*常に*適切な手段です。 `<label>` を使用して `<input>` や {{HTMLElement("textarea")}} に何を入力するべきかを説明することは、決して悪い考えではありません。

#### 関連付けられたラベル

`<input>` 要素と `<label>` 要素を意味的に連携させると、画面リーダーなどの支援技術に役立ちます。 `<label>` の {{htmlattrxref("for", "label")}} 属性を使って連携させることで、ラベルと入力欄を結び付け、画面リーダーがユーザーに入力欄についてより正確に説明できるようになります。

`<input>` 要素にプレーンテキストが隣接しているだけでは十分ではありません。ユーザビリティとアクセシビリティのためには、暗黙的または明示的な {{HTMLElement("label")}} を含めることが必要です。

```html
<!-- アクセシブルではない -->
<p>名前を入力してください: <input id="name" type="text" size="30"></p>

<!-- 暗黙的なラベル -->
<p><label>名前を入力してください: <input id="name" type="text" size="30"></label></p>

<!-- 明示的なラベル -->
<p><label for="name">名前を入力してください: </label><input id="name" type="text" size="30"></p>
```

最初の例は、プロンプトと `<input>` 要素の間に関係がないため、アクセシブルではありません。

ラベルはアクセシブルな名前を提供するばかりではなく、マウスやタッチパネルのユーザーがクリックしたりタッチしたりする際に、「ヒット」領域を拡大することができます。 `<label>` と `<input>` を連携させることで、どちらかをクリックすると `<input>` にフォーカスが当たります。入力欄の「ラベル」にプレーンテキストを使用した場合、このようなことは起こりません。入力欄のアクティベーション領域にプロンプト部分が含まれていると、運動制御の条件を持つ人には便利です。

ウェブ開発者として大切なのは、私たちが知っていることを、人々がすべて知っていると思わないことです。ウェブを利用する人々に多様性があるということは、自分のウェブサイトにも及ぶことですが、サイトの訪問者の中には、思考プロセスや状況に何らかの違いがあり、明確で適切なラベルがなければ、あなたのフォームをあなたとは全く異なるように解釈する人がいるということでもあります。

#### プレイスホルダーはアクセシブルではない

{{htmlattrxref("placeholder", "input")}} 属性で、 `<input>` 要素が空の時にコンテンツ領域に表示されるテキストを指定することができます。プレイスホルダーは、フォームを理解するために決して必要なものではありません。プレイスホルダーはラベルではありませんので、代用として使用してはいけません。プレイスホルダーは、入力された値がどのように見えるかのヒントを提供するために使用されるもので、説明やプロンプトではありません。

プレイスホルダーは、画面リーダーがアクセスできないだけでなく、ユーザーがフォームコントロールにテキストを入力したり、フォームコントロールにすでに値があったりした場合、プレイスホルダーは非表示になります。自動ページ翻訳機能を持つブラウザーは、翻訳時にこの属性をスキップすることがあります。すなわち `placeholder` は翻訳されないことがあります。

> **Note:** 避けることができるのであれば、 {{htmlattrxref("placeholder", "input")}} 属性を使用しないでください。 `<input>` 要素にラベルを付ける必要があるのであれば、 {{HTMLElement("label")}} 属性を使用してください。

### クライアント側検証

> **Warning:** クライアント側の検証は便利ですが、サーバーが有効なデータを受け取ることを保証するものではありません。データが特定の形式でなければならない場合は、必ずサーバー側でも検証を行い、形式が無効な場合は [HTTP の `400` レスポンス](/ja/docs/Web/HTTP/Status/400)を返してください。

上記の [UI 擬似クラス](#ui_擬似クラス)の節で述べたように、 CSS を用いて、それぞれの入力欄の現在の状態に基づく {{cssxref(":valid")}} または {{cssxref(":invalid")}} の UI 状態に基づいて入力欄にスタイル付けをすることに加え、フォームを送信（しようと）したときに、ブラウザーはクライアント側の検証を行います。フォームを送信する時に、制約検証に不合格になったフォームコントロールがある場合、対応しているブラウザーは、最初の無効なフォームコントロールにエラーメッセージを表示します。エラー種別に基づいた既定のメッセージを表示したり、ユーザーが設定したメッセージを表示したりします。

一部の入力型やその他の属性によっては、入力に対して有効な値を制限するものがあります。例えば、 `<input type="number" min="2" max="10" step="2">` の場合、2、4、6、8、10 の数値のみが有効になります。様々なエラーが発生する可能性があります。例えば、 `rangeUnderflow` エラー（値が 2 より小さい場合）、 `rangeOverflow` （10 より大きい場合）、 `stepMismatch` （値が 2 から 10 の間の数字で偶数の整数でない (`step` 属性の要件に合わない) 場合）、 `typeMismatch` （値が数値ではない場合）などです。

可能な値の範囲が周期的な（つまり、値が取りうる最大値で終了するのではなく、最初に戻る）入力型では、 {{htmlattrxref("max")}} プロパティと {{htmlattrxref("min")}} プロパティの値を逆にして、許可される値の範囲が `min` から始まり、可能な最小値まで回り込んで、 `max` に達するまで続くことを示すことが可能です。これは日付や時刻の場合、例えば午後 8 時から午前 8 時までの範囲を許可したい場合などに特に便利です。

```html
<input type="time" min="20:00" max="08:00" name="overnight">
```

決まった属性と値の組み合わせが、 {{domxref('ValidityState')}} の決まったエラーを発生させます。

<table class="standard-table">
  <caption>
    {{htmlelement('input')}} の属性とその値による検証オブジェクトエラー
  </caption>
  <thead>
    <tr>
      <th scope="col">属性</th>
      <th scope="col">関連するプロパティ</th>
      <th scope="col">説明</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>{{ htmlattrxref("max", "input", "", 1)}}</td>
      <td>{{domxref('validityState.rangeOverflow')}}</td>
      <td>
        値が <code>max</code> 属性で定義された最大値よりも大きい場合に発生する
      </td>
    </tr>
    <tr>
      <td>{{ htmlattrxref("maxlength", "input", "", 1)}}</td>
      <td>{{domxref('validityState.tooLong')}}</td>
      <td>
        <code>maxlength</code> プロパティで許可された値よりも文字数が多い場合に発生する
      </td>
    </tr>
    <tr>
      <td>{{ htmlattrxref("min", "input", "", 1)}}</td>
      <td>{{domxref('validityState.rangeUnderflow')}}</td>
      <td>
        値が <code>min</code> 属性で定義された最小値よりも小さい場合には発生する
      </td>
    </tr>
    <tr>
      <td>{{ htmlattrxref("minlength", "input", "", 1)}}</td>
      <td>{{domxref('validityState.tooShort')}}</td>
      <td>
        <code>minlength</code> プロパティで必要とされる値よりも文字数が少ない場合に発生する
      </td>
    </tr>
    <tr>
      <td>{{ htmlattrxref("pattern", "input", "", 1)}}</td>
      <td>{{domxref('validityState.patternMismatch')}}</td>
      <td>
        pattern 属性に有効な正規表現が設定されており、 <code>value</code> がそれに一致しない場合に発生する。
      </td>
    </tr>
    <tr>
      <td>{{ htmlattrxref("required", "input", "", 1)}}</td>
      <td>{{domxref('validityState.valueMissing')}}</td>
      <td>
        <code>required</code> 属性があるにもかかわらず、値が <code>null</code> であるか、ラジオボタンやチェックボックスがチェックされていない場合に発生する。
      </td>
    </tr>
    <tr>
      <td>{{ htmlattrxref("step", "input", "", 1)}}</td>
      <td>{{domxref('validityState.stepMismatch')}}</td>
      <td>
        値が step の増分に一致していない。増分の既定値は <code>1</code> であるため、 <code>type="number"</code> で step が指定されていない場合は整数のみが有効になります。 <code>step="any"</code> ではこのエラーは発生しません。
      </td>
    </tr>
    <tr>
      <td>{{ htmlattrxref("type", "input", "", 1)}}</td>
      <td>{{domxref('validityState.typeMismatch')}}</td>
      <td>
        値が正しい型ではない場合、例えばメールアドレスに <code>@</code> が含まれていない場合や、 URL にプロトコルが含まれていない場合に発生します。
      </td>
    </tr>
  </tbody>
</table>

フォームコントロールに `required` 属性がない場合、値がないことや空文字列は無効にはなりません。 `required` 以外の上記の属性があった場合も、空文字列でエラーにはなりません。

どのような値を受け入れることができるかの制限を設けることができるので、対応しているブラウザーはこれらのフォームの値をネイティブに検証し、フォームの送信時に誤りがある場合はユーザーに警告を発します。

上記の表で説明したエラーに加え、 `validityState` インターフェイスには `badInput`, `valid`, `customError` の論理型の読み取り専用プロパティがあります。検証オブジェクトに含まれるのは次の通りです。

- {{domxref('validityState.valueMissing')}}
- {{domxref('validityState.typeMismatch')}}
- {{domxref('validityState.patternMismatch')}}
- {{domxref('validityState.tooLong')}}
- {{domxref('validityState.tooShort')}}
- {{domxref('validityState.rangeUnderflow')}}
- {{domxref('validityState.rangeOverflow')}}
- {{domxref('validityState.stepMismatch')}}
- {{domxref('validityState.badInput')}}
- {{domxref('validityState.valid')}}
- {{domxref('validityState.customError')}}

これらの論理型プロパティではそれぞれ、 `true` の値で指定された観点の検証に合格しなかった可能性があることを示しますが、 `valid` プロパティは例外で、その要素の値がすべての検証に合格したときに `true` になります。

エラーがあった場合、対応しているブラウザーでは、ユーザーに警告するとともに、フォームの送信を阻止します。注意点としては、独自のエラーに真とみなされる値（空の文字列や `null` 以外）が設定されていると、フォームの送信が阻止されます。独自のエラーメッセージがなく、他のどのプロパティも true を返さない場合、 `valid` は true となり、フォームは送信されます。

```js
function validate(input) {
  let validityState_object = input.validity;
  if(validityState_object.valueMissing) {
     input.setCustomValidity('A value is required');
  } else if (validityState_object.rangeUnderflow) {
    input.setCustomValidity('Your value is too low');
  } else if (validityState_object.rangeOverflow) {
    input.setCustomValidity('Your value is too high');
  } else {
    input.setCustomValidity('');
  }
}
```

最後の行、独自の検証メッセージをエラー文字列に設定することが重要です。ユーザーがエラーを起こし、 validity が設定されている場合、すべての値が有効であっても、メッセージが `null` になるまで送信に失敗します。

#### 独自の検証エラーの例

フィールドの検査に不合格になった場合に独自のエラーメッセージを表示させたい場合は、 `<input>` (および関連する) 要素で利用できる[制約検証機能](/ja/docs/Web/API/Constraint_validation#constraint_validation_interfaces)を使用する必要があります。以下のような形を取ってください。

```html
<form>
  <label for="name">ユーザー名を入力してください (英大文字および小文字): </label>
  <input type="text" name="name" id="name" required pattern="[A-Za-z]+">
  <button>Submit</button>
</form>
```

基本的な HTML フォーム検証機能では、フォームを送信しようとしたときに、有効な値が入力されていなかったり、 `pattern` と一致しない値が入力されていたりすると、既定のエラーメッセージを生成します。

独自のエラーメッセージで代替したい場合は、以下のような JavaScript を使用することができます。

```js
const nameInput = document.querySelector('input');
const form = document.querySelector('form');

nameInput.addEventListener('input', () => {
  nameInput.setCustomValidity('');
  nameInput.checkValidity();
});

nameInput.addEventListener('invalid', () => {
  if(nameInput.value === '') {
    nameInput.setCustomValidity('名前を入力してください。');
  } else {
    nameInput.setCustomValidity('ユーザー名には英大文字と小文字のみが使えます。入力しなおしてください。');
  }
});
```

この例は次のように表示されます。

{{EmbedLiveSample('Custom_validation_error_example')}}

簡単に言えば、以下の通りです。

- input 要素が有効であるかの状態をチェックするために、値が変更されるたびに `checkValidity()` メソッドを `input` イベントハンドラーから呼び出します。
- 値が有効ではない場合、 `invalid` イベントが発行され、 `invalid` イベントのハンドラー関数が実行されます。この関数の中で、値が無効である原因が空欄であるためであるか、パターンに一致しないためであるかを確認し、 `if()` ブロックを使用して、独自の検証エラーメッセージを設定します。
- 結果として、送信ボタンが押されたときに入力値が有効ではない場合は、独自のエラーメッセージのうちの一つが表示されます。
- 有効である場合は、期待通りに送信されます。この場合、独自の検証は `setCustomValidity()` を空文字列で呼び出すことで中断されます。従って、 `input` イベントが発生するたびにこれが行われます。以前、独自の検証が設定され、これを行わないと、送信時に有効な値を持っていたとしても、入力欄は無効であるとして登録されます。

> **Note:** 常に、クライアント側とサーバー側の両方で入力値の制約を検証するようにしてください。制約検証は、<em>サーバー側</em>での検証の必要性をなくすものではありません。古いブラウザーや悪意のある人物によって、無効な値が送信される可能性があります。

> **Note:** Firefox は多くの版で、同様の方法で独自のエラーメッセージを設定することができる、独自のエラー属性 — `x-moz-errormessage` — に対応していました。これはバージョン 66 で削除されました ({{bug(1513890)}} を参照)。

### ローカライズ

`<input>` 型によっては、入力可能な文字列がロケールに依存します。ロケールによっては 1,000.00 が有効な数値である一方、他のロケールではこの数値を入力する方法が 1.000,00 であったりします。

Firefox は（少なくとも `type="number"` において）ユーザーの入力内容を検証する際に、ロケールを特定するために以下の経験則を使用します。

- 当該要素または親要素の `lang`/`xml:lang` 属性で指定された言語
- HTTP の `Content-Language` ヘッダーで指定された言語
- 何も指定されていない場合は、ブラウザーのロケール

### 技術的概要

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">
        <a href="/ja/docs/Web/Guide/HTML/Content_categories">コンテツカテゴリー</a>
      </th>
      <td>
        <a href="/ja/docs/Web/Guide/HTML/Content_categories#flow_content">フローコンテンツ</a>、リスト化、サブミット可能、リセット可能、フォーム関連要素、<a href="/ja/docs/Web/Guide/HTML/Content_categories#phrasing_content">記述コンテンツ</a>。{{htmlattrxref("type", "input")}} の値が <code>hidden</code> でない場合はラベル付け可能要素、知覚可能コンテンツ。
      </td>
    </tr>
    <tr>
      <th scope="row">許可されている内容</th>
      <td>なし。これは{{Glossary("empty element", "空要素")}}です。</td>
    </tr>
    <tr>
      <th scope="row">タグの省略</th>
      <td>開始タグは必須。終了タグを記述してはなりません。</td>
    </tr>
    <tr>
      <th scope="row">許可されている親要素</th>
      <td>
        <a href="/ja/docs/Web/Guide/HTML/Content_categories#phrasing_content">記述コンテンツ</a>を受け入れるすべての要素。
      </td>
    </tr>
    <tr>
      <th scope="row">暗黙の ARIA ロール</th>
      <td>
        <ul>
          <li>
            <code>type=button</code>:
            <code><a href="/ja/docs/Web/Accessibility/ARIA/Roles/button_role">button</a></code>
          </li>
          <li>
            <code>type=checkbox</code>:
            <code><a href="/ja/docs/Web/Accessibility/ARIA/Roles/checkbox_role">checkbox</a></code>
          </li>
          <li>
            <code>type=email</code>
            <ul>
              <li>
                <code>list</code> 属性なし:
                <code><a href="/ja/docs/Web/Accessibility/ARIA/Roles/textbox_role">textbox</a></code>
              </li>
              <li>
                <code>list</code> 属性あり:
                {{ARIARole("combobox")}}
              </li>
            </ul>
          </li>
          <li>
            <code>type=image</code>:
            <code><a href="/ja/docs/Web/Accessibility/ARIA/Roles/button_role">button</a></code>
          </li>
          <li>
            <code>type=number</code>: {{ARIARole("spinbutton")}}
          </li>
          <li><code>type=radio</code>: {{ARIARole("radio")}}</li>
          <li><code>type=range</code>: {{ARIARole("slider")}}</li>
          <li>
            <code>type=reset</code>:
            <code><a href="/ja/docs/Web/Accessibility/ARIA/Roles/button_role">button</a></code>
          </li>
          <li>
            <code>type=search</code>
            <ul>
              <li>
                <code>list</code> 属性なし:
                {{ARIARole("searchbox")}}
              </li>
              <li>
                <code>list</code> 属性あり:
                {{ARIARole("combobox")}}
              </li>
            </ul>
          </li>
          <li>
            <code>type=submit</code>:
            <code><a href="/ja/docs/Web/Accessibility/ARIA/Roles/button_role">button</a></code>
          </li>
          <li>
            <code>type=tel</code>
            <ul>
              <li>
                <code>list</code> 属性なし:
                <code><a href="/ja/docs/Web/Accessibility/ARIA/Roles/textbox_role">textbox</a></code>
              </li>
              <li>
                <code>list</code> 属性あり:
                {{ARIARole("combobox")}}
              </li>
            </ul>
          </li>
          <li>
            <code>type=text</code>
            <ul>
              <li>
                <code>list</code> 属性なし:
                <code><a href="/ja/docs/Web/Accessibility/ARIA/Roles/textbox_role">textbox</a></code>
              </li>
              <li>
                <code>list</code> 属性あり:
                {{ARIARole("combobox")}}
              </li>
            </ul>
          </li>
          <li>
            <code>type=url</code>
            <ul>
              <li>
                <code>list</code> 属性なし:
                <code><a href="/ja/docs/Web/Accessibility/ARIA/Roles/textbox_role">textbox</a></code>
              </li>
              <li>
                <code>list</code> 属性あり:
                {{ARIARole("combobox")}}
              </li>
            </ul>
          </li>
          <li>
            <code>type=color|date|datetime-local|file|hidden|month|password|time|week</code>:
            <a href="https://www.w3.org/TR/html-aria/#dfn-no-corresponding-role">対応するロールなし</a>
          </li>
        </ul>
      </td>
    </tr>
    <tr>
      <th scope="row">許可されている ARIA ロール</th>
      <td>
        <ul>
          <li>
            <code>type=button</code>: {{ARIARole("link")}},
            {{ARIARole("menuitem")}},
            {{ARIARole("menuitemcheckbox")}},
            {{ARIARole("menuitemradio")}},
            {{ARIARole("option")}}, {{ARIARole("radio")}},
            {{ARIARole("switch")}}, {{ARIARole("tab")}}
          </li>
          <li>
            <code>type=checkbox</code>: {{ARIARole("button")}} ただし <code>aria-pressed</code>,
            {{ARIARole("menuitemcheckbox")}},
            {{ARIARole("option")}}, {{ARIARole("switch")}} と共に使用されたとき
          </li>
          <li>
            <code>type=image</code>: {{ARIARole("link")}},
            {{ARIARole("menuitem")}},
            {{ARIARole("menuitemcheckbox")}},
            {{ARIARole("menuitemradio")}},
            {{ARIARole("radio")}}, {{ARIARole("switch")}}
          </li>
          <li>
            <code>type=radio</code>: {{ARIARole("menuitemradio")}}
          </li>
          <li>
            <code>type=text</code> で <code>list</code> 属性なし:
            {{ARIARole("combobox")}}, {{ARIARole("searchbox")}},
            {{ARIARole("spinbutton")}}
          </li>
          <li>
            <code>type=color|date|datetime|datetime-local|email|file|hidden|</code>
              <code>month|number|password|range|reset|search|submit|tel|url|week</code>
            または <code>text</code> に <code>list</code> 属性がある場合: 許可されている <code>role</code> なし
          </li>
        </ul>
      </td>
    </tr>
    <tr>
      <th scope="row">DOM インターフェイス</th>
      <td>{{domxref("HTMLInputElement")}}</td>
    </tr>
  </tbody>
</table>

## アクセシビリティの考慮

### ラベル

入力欄を設定する際、ラベルを一緒に付けることがアクセシビリティ上の要件です。これは、支援技術を使っている人が、何のための入力なのかを知るために必要です。また、ラベルをクリックまたはタッチすると、ラベルに関連付けられたフォームコントロールにフォーカスが設定されます。これにより、目の不自由なユーザーのアクセシビリティとユーザビリティが向上し、ユーザーがクリックまたはタッチしてフォームコントロールを起動できる領域が増えます。この機能は、ラジオボタンやチェックボックスのような小さなフォームコントロールに特に便利です。ラベルの詳細については、[ラベル](#ラベル)を参照してください。

次の例は、上記の形で `<label>` を `<input>` 要素に関連付ける方法の例です。 `<input>` に `id` 属性を設定する必要があります。そして `<label>` には入力欄の `id` と同じ値を持つ `for` 属性が必要になります。

```html
<label for="peas">Do you like peas?</label>
<input type="checkbox" name="peas" id="peas">
```

### 大きさ

フォーム入力欄のような対話型要素は、簡単に有効化できるだけの大きさを持たせてください。これにより、手足の不自由な人や、スタイラスや指のような精度の低い入力方法を使用している人など、様々な人にとって有用です。対話型の大きさとしては、 44×44 [CSS ピクセル](https://www.w3.org/TR/WCAG21/#dfn-css-pixels) を最小値とすることが推奨されています。

- [Understanding Success Criterion 2.5.5: Target Size | W3C Understanding WCAG 2.1](https://www.w3.org/WAI/WCAG21/Understanding/target-size.html)
- [Target Size and 2.5.5 | Adrian Roselli](https://adrianroselli.com/2019/06/target-size-and-2-5-5.html)
- [Quick test: Large touch targets - The A11Y Project](https://www.a11yproject.com/posts/2018-11-21-large-touch-targets/)

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [フォーム制約検証](/ja/docs/Web/Guide/HTML/Constraint_validation)
- [初めての HTML フォーム](/ja/docs/Learn/Forms/Your_first_form)
- [HTML フォームを構成する方法](/ja/docs/Learn/Forms/How_to_structure_a_web_form)
- [ネイティブのフォームウィジェット](/ja/docs/Learn/Forms/Basic_native_form_controls)
- [フォームデータの送信](/ja/docs/Learn/Forms/Sending_and_retrieving_form_data)
- [フォームデータの検証](/ja/docs/Learn/Forms/Form_validation)
- [独自のフォームコントロールの作成方法](/ja/docs/Learn/Forms/How_to_build_custom_form_controls)
- [古いブラウザーでの HTML フォーム](/ja/docs/Learn/Forms/HTML_forms_in_legacy_browsers)
- [HTML フォームへのスタイル設定](/ja/docs/Learn/Forms/Styling_web_forms)
- [HTML フォームへの高度なスタイル設定](/ja/docs/Learn/Forms/Advanced_form_styling)
- [CSS プロパティの互換性一覧表](/ja/docs/Learn/Forms/Property_compatibility_table_for_form_controls)
