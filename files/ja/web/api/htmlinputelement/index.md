---
title: HTMLInputElement
slug: Web/API/HTMLInputElement
tags:
  - API
  - DOM
  - HTML DOM
  - HTMLInputElement
  - Input
  - インターフェイス
  - NeedsContent
  - NeedsMarkupWork
  - リファレンス
browser-compat: api.HTMLInputElement
translation_of: Web/API/HTMLInputElement
---
{{ APIRef("HTML DOM") }}

**`HTMLInputElement`** インターフェイスは {{HtmlElement("input")}} 要素のオプション、レイアウト、表示方法を操作するための特別なプロパティやメソッドを提供します。

{{InheritanceDiagram}}

## プロパティ

<table class="standard-table">
  <caption>
    親フォームに関連するプロパティ
  </caption>
  <tbody>
    <tr>
      <td>{{domxref("HTMLInputElement.form", "form")}} {{readonlyInline}}</td>
      <td>
        <em>{{domxref("HTMLFormElement")}} オブジェクト:</em> 親の {{HtmlElement("form")}} 要素の参照を<strong>返します</strong>。
      </td>
    </tr>
    <tr>
      <td>{{domxref("HTMLInputElement.formAction", "formAction")}}</td>
      <td>
        <em>文字列:</em> その要素の {{ htmlattrxref("formaction", "input") }} 属性を<strong>返却または設定</strong>します。ここには要素によって送信された情報を処理するプログラムの URI が入ります。これは親フォームの {{ htmlattrxref("action", "form") }} 属性を上書きします。
      </td>
    </tr>
    <tr>
      <td>{{domxref("HTMLInputElement.formEnctype", "formEnctype")}}</td>
      <td>
        <em>文字列:</em> その要素の {{ htmlattrxref("formenctype", "input") }} 属性を<strong>返却または設定</strong>します。ここにはフォームをサーバーに送信する際のコンテンツの型が入ります。これは親フォームの {{ htmlattrxref("enctype", "form") }} 属性を上書きします。
      </td>
    </tr>
    <tr>
      <td>{{domxref("HTMLInputElement.formMethod", "formMethod")}}</td>
      <td>
        <em>文字列:</em> その要素の {{ htmlattrxref("formmethod", "input") }} 属性を<strong>返却または設定</strong>します。ここにはブラウザーがフォームを送信する際に用いる HTTP メソッドが入ります。これは親フォームの {{ htmlattrxref("method", "form") }} 属性を上書きします。
      </td>
    </tr>
    <tr>
      <td>{{domxref("HTMLInputElement.formNoValidate", "formNoValidate")}}</td>
      <td><em>論理値:</em> その要素の {{ htmlattrxref("formnovalidate", "input") }} 属性を<strong>返却または設定</strong>します。これは送信時にそのフォームが検証されないかどうかを示します。これは親フォームの {{ htmlattrxref("novalidate", "form") }} 属性を上書きします。</td>
    </tr>
    <tr>
      <td>{{domxref("HTMLInputElement.formTarget", "formTarget")}}</td>
      <td>
        <em>文字列:</em> その要素の {{ htmlattrxref("formtarget", "input") }} 属性を<strong>返却または設定</strong>します。ここにはフォームを送信した後で受け取ったレスポンスを表示する場所を示す名前またはキーワードが入ります。これは親フォームの {{ htmlattrxref("target", "form") }} 属性を上書きします。
      </td>
    </tr>
  </tbody>
</table>

<table class="standard-table">
  <caption>
    hidden 以外のあらゆる型の input 要素に適用されるプロパティ
  </caption>
  <tbody>
    <tr>
      <td>{{domxref("HTMLInputElement.name", "name")}}</td>
      <td>
        <em>文字列:</em> その要素の {{ htmlattrxref("name", "input") }} 属性を<strong>返却または設定</strong>します。ここにはフォーム送信時にその要素を識別する名前が入ります。
      </td>
    </tr>
    <tr>
      <td>{{domxref("HTMLInputElement.type", "type")}}</td>
      <td>
        <em>文字列:</em> その要素の {{ htmlattrxref("type", "input") }} 属性を<strong>返却または設定</strong>します。これは表示するコントロールの型を示します。利用可能な値については {{ HTMLElement("input") }} の {{ htmlattrxref("type", "input") }} 属性を参照してください。
      </td>
    </tr>
    <tr>
      <td>{{domxref("HTMLInputElement.disabled", "disabled")}}</td>
      <td>
        <em>論理値:</em> その要素の {{ htmlattrxref("disabled", "input") }} 属性を<strong>返却または設定</strong>します。これはそのコントロールが対話を受け付けないかどうかを示します。その入力値はフォームとともに送信されません。 {{ htmlattrxref("readOnly", "input") }} もご覧ください。
      </td>
    </tr>
    <tr>
      <td>{{domxref("HTMLInputElement.autofocus", "autofocus")}}</td>
      <td>
        <em>論理値:</em> その要素の {{ htmlattrxref("autofocus", "input") }} 属性を<strong>返却または設定</strong>します。ページが読み込まれたときに、ユーザーが別のコントロールに入力するなどしてそれを上書きしない限り、そのフォームコントロールが入力フォーカスを持つべきであることを指定します。文書内の一つの form 要素だけが {{htmlattrxref("autofocus","input")}} 属性を持つことができます。 {{htmlattrxref("type","input")}} 属性が <code>hidden</code> に設定されている場合には適用できません (つまり、非表示のコントロールにフォーカスを自動的に設定することはできません)。
      </td>
    </tr>
    <tr>
      <td>{{domxref("HTMLInputElement.required", "required")}}</td>
      <td>
        <em>論理値:</em> その要素の {{ htmlattrxref("required", "input") }} 属性を<strong>返却または設定</strong>します。これは、フォームを送信する前にユーザーが値を入力しなければならないかどうかを示します。
      </td>
    </tr>
    <tr>
      <td>{{domxref("HTMLInputElement.value", "value")}}</td>
      <td>
        <em>文字列:</em> そのコントロールの現在の値を<strong>返却または設定</strong>します。
      <p class="note"><strong>注:</strong> ユーザーが予期しない値を入力した場合、これは空文字列を返すことがあります。</p>
      </td>
    </tr>
    <tr>
      <td>{{domxref("HTMLInputElement.validity", "validity")}} {{readonlyInline}}</td>
      <td><em>{{domxref("ValidityState")}} オブジェクト:</em> その要素の現在の検証状態を<strong>返します</strong>。
      </td>
    </tr>
    <tr>
      <td>{{domxref("HTMLInputElement.validationMessage", "validationMessage")}} {{readonlyInline}}</td>
      <td><em>文字列:</em> 制約検証をそのコントロールが満たさなかった場合、それを記述したローカライズされたメッセージを<strong>返します</strong> (もしあれば)。これは、コントロールが制約検証の候補ではない場合 ({{htmlattrxref("willValidate","input")}} が <code>false</code> の場合)、または制約を満たしている場合は空の文字列です。この値は、 <code>setCustomValidity</code> メソッドで設定できます。
      </td>
    </tr>
    <tr>
      <td>{{domxref("HTMLInputElement.willValidate", "willValidate")}} {{readonlyInline}}</td>
      <td><em>論理値:</em> その要素が制約検証の候補であるかどうかを<strong>返します</strong>。これは何か制約検証を阻む条件がある場合、例えば、 `type` が <code>hidden</code>、<code>reset</code>、`button` のいずれかである、祖先に {{HTMLElement("datalist")}} がある、 `disabled` プロパティが `true` である、などです。
      </td>
    </tr>
  </tbody>
</table>

<table class="standard-table">
  <caption>
    <code>checkbox</code> または <code>radio</code> 型の要素にのみに適用できるプロパティ
  </caption>
  <tbody>
    <tr>
      <td>{{domxref("HTMLInputElement.checked", "checked")}}</td>
      <td>
        <em>論理値:</em> {{htmlattrxref("type","input")}} が <code>checkbox</code> または <code>radio</code> の場合、要素の現在の状態を<strong>返却または設定</strong>します。
      </td>
    </tr>
    <tr>
      <td>{{domxref("HTMLInputElement.defaultChecked", "defaultChecked")}}</td>
      <td>
        <em>論理値:</em> このオブジェクトを生成した HTML でもともと指定されていたラジオボタンまたはチェックボックスの既定の状態を<strong>返却または設定</strong>します。
      </td>
    </tr>
    <tr>
      <td>{{domxref("HTMLInputElement.indeterminate", "indeterminate")}}</td>
      <td>
        <em>論理値:</em> チェックボックスやラジオボタンの状態が不確定であるかどうかを<strong>返します</strong>。チェックボックスの場合は、その状態が不確定 (チェックでも未チェックでもない状態) であることを示すために、チェックボックスの外観が何らかの方法で不明瞭になったり、灰色になったりする効果があります。 <code>checked</code> 属性の値には影響を与えず、チェックボックスをクリックするとその値は false になります。
      </td>
    </tr>
  </tbody>
</table>

<table class="standard-table">
  <caption>
    <code>image</code> 型の要素のみに適用できるプロパティ
  </caption>
  <tbody>
    <tr>
      <td>{{domxref("HTMLInputElement.alt", "alt")}}</td>
      <td>
        <em>文字列:</em> {{htmlattrxref("type","input")}} が <code>image</code> である場合、その要素の代替テキストが設定された {{ htmlattrxref("alt", "input") }} 属性を<strong>返却または設定</strong>します。
      </td>
    </tr>
    <tr>
      <td>{{domxref("HTMLInputElement.height", "height")}}</td>
      <td>
        <em>文字列:</em> {{htmlattrxref("type","input")}} の値が <code>image</code> である場合、ボタンに表示される画像の高さを定義するその要素の {{ htmlattrxref("height", "input") }} 属性を<strong>返却または設定</strong>します。
      </td>
    </tr>
    <tr>
      <td>{{domxref("HTMLInputElement.src", "src")}}</td>
      <td>
        <em>文字列:</em> {{htmlattrxref("type","input")}} の値が <code>image</code> である場合、グラフィックの送信ボタンを表示する画像の場所を示す URI を指定する、その要素の {{ htmlattrxref("src", "input") }} 属性を<strong>返却または設定</strong>します。それ以外の場合は無視されます。
      </td>
    </tr>
    <tr>
      <td>{{domxref("HTMLInputElement.width", "width")}}</td>
      <td>
        <em>文字列:</em> {{htmlattrxref("type","input")}} の値が <code>image</code> である場合、ボタンに表示される画像の幅を定義する、文書の {{ htmlattrxref("width", "input") }} 属性を<strong>返却または設定</strong>します。
      </td>
    </tr>
  </tbody>
</table>

<table class="standard-table">
  <caption>
    <code>file</code> 型の要素のみに適用できるプロパティ
  </caption>
  <tbody>
    <tr>
      <td>{{domxref("HTMLInputElement.accept", "accept")}}</td>
      <td>
        <em>文字列:</em> {{htmlattrxref("type","input")}} が <code>file</code> である場合、サーバーが受け入れるファイル形式をカンマ区切りのリストで表すその要素の {{ htmlattrxref("accept", "input") }} 属性を<strong>返却または設定</strong>します。
      </td>
    </tr>
    <tr>
      <td>{{domxref("HTMLInputElement.allowdirs", "allowdirs")}} {{non-standard_inline}}</td>
      <td>
        <em>論理値:</em> 標準外の Directory Upload API の一部です。ファイルリストでディレクトリーとファイルの両方を選択できるようにするかどうかを<strong>示します</strong>。 Firefox でのみ実装されており、設定で隠されています。
      </td>
    </tr>
    <tr>
      <td>{{domxref("HTMLInputElement.files", "files")}}</td>
      <td>
        {{domxref("FileList")}} オブジェクトを<strong>返却または設定</strong>し、これはアップロードするために選択されたファイルを表す {{domxref("File")}} オブジェクトのリストが入ります。
      </td>
    </tr>
    <tr>
      <td>
        {{domxref("HTMLInputElement.webkitdirectory", "webkitdirectory")}}
        {{Non-standard_inline}}
      </td>
      <td>
        <em>論理値:</em> {{htmlattrxref("webkitdirectory", "input")}} 属性を<strong>返します</strong>。 true の場合、ファイルシステム選択インターフェイスはファイルではなくディレクトリーのみが選択できるようになります。
      </td>
    </tr>
    <tr>
      <td>
        {{domxref("HTMLInputElement.webkitEntries", "webkitEntries")}}
        {{Non-standard_inline}}
      </td>
      <td>
        <em>{{domxref("FileSystemEntry")}} オブジェクトの配列:</em> 現在選択されているファイルまたはディレクトリーを<strong>示します</strong>。
      </td>
    </tr>
  </tbody>
</table>

<table class="standard-table">
  <caption>
    <code>text/number</code> を含む型の要素のみに適用できるプロパティ
  </caption>
  <tbody>
    <tr>
      <td>{{domxref("HTMLInputElement.autocomplete", "autocomplete")}}</td>
      <td>
        <em>文字列:</em> その要素の {{htmlattrxref("autocomplete", "input")}} 属性を<strong>返却または設定</strong>します。これはコントロールの値をブラウザーで自動的に補完できるかどうかを示します。 {{htmlattrxref("type","input")}} 属性の値が <code>hidden</code>、<code>checkbox</code>、<code>radio</code>、<code>file</code>、またはボタン型 (<code>button</code>、<code>submit</code>、<code>reset</code>、<code>image</code>) の場合は無視されます。可能な値は次の通りです。<br>
        <code>on</code>: ブラウザーが以前入力された値を使用して値を自動補完することができる<br>
        <code>off</code>: ユーザーは明示的に値を入力しなければならない
      </td>
    </tr>
    <tr>
      <td>{{domxref("HTMLInputElement.max", "max")}}</td>
      <td>
        <em>文字列:</em> その要素の {{ htmlattrxref("max", "input") }} 属性を<strong>返却または設定</strong>します。この属性には、この項目の (数値または日時の) 最大値が含まれ、最小値 ({{htmlattrxref("min","input")}} 属性) より小さくすることはできません。
      </td>
    </tr>
    <tr>
      <td>{{domxref("HTMLInputElement.maxLength", "maxLength")}}</td>
      <td>
        <em><code>long</code>:</em> その要素の {{ htmlattrxref("maxlength", "input") }} 属性を<strong>返却または設定</strong>します。この属性には、値が持つことのできる (Unicode コードポイントでの) <u><strong>最大文字数</strong></u>が含まれます。 (これを負の数に設定した場合、例外が発生します。)
      </td>
    </tr>
    <tr>
      <td>{{domxref("HTMLInputElement.min", "min")}}</td>
      <td>
        <em>文字列:</em> その要素の {{ htmlattrxref("min", "input") }} 属性を<strong>返却または設定</strong>します。この属性には、この項目の (数値または日時の) 最小値が含まれ、最大値 ({{htmlattrxref("max","input")}} 属性) より大きくすることはできません。
      </td>
    </tr>
    <tr>
      <td>{{domxref("HTMLInputElement.minLength", "minLength")}}</td>
      <td>
        <em><code>long</code>:</em> その要素の {{ htmlattrxref("minlength", "input") }} 属性を<strong>返却または設定</strong>します。この属性には、値が持つことのできる (Unicode コードポイントでの) <u><strong>最小文字数</strong></u>が含まれます。 (これを負の数に設定した場合、例外が発生します。)
      </td>
    </tr>
    <tr>
      <td>{{domxref("HTMLInputElement.pattern", "pattern")}}</td>
      <td>
        <em>文字列:</em> その要素の {{ htmlattrxref("pattern", "input") }} 属性を<strong>返却または設定</strong>します。ここにはコントロールの値をチェックするための<u><strong>正規表現</strong></u>を含みます。 {{htmlattrxref("title","input")}} 属性を使用してユーザーにパターンを説明してください。この属性は、 {{htmlattrxref("type","input")}} 属性の値が <code>text</code>、<code>search</code>、<code>tel</code>、<code>url</code>、<code>email</code> の場合に適用され、それ以外の場合は無視されます。
      </td>
    </tr>
    <tr>
      <td>{{domxref("HTMLInputElement.placeholder", "placeholder")}}</td>
      <td>
        <em>文字列:</em> その要素の {{ htmlattrxref("placeholder", "input") }} 属性を<strong>返却または設定</strong>します。ここには、ユーザーがコントロールに何を入力できるかのヒントが設定されます。プレイスホルダーのテキストには、キャリッジリターンやラインフィードを含むことはできません。この属性は、 {{htmlattrxref("type","input")}} 属性の値が <code>text</code>、<code>search</code>、<code>tel</code>、<code>url</code>、<code>email</code> の場合に適用され、それ以外の場合は無視されます。
      </td>
    </tr>
    <tr>
      <td>{{domxref("HTMLInputElement.readOnly", "readOnly")}}</td>
      <td>
        <em>論理値:</em> その要素の {{ htmlattrxref("readonly", "input") }} 属性を<strong>返却または設定</strong>します。これは、ユーザーがコントロールの値を変更できないことを示します。<br>
        {{htmlattrxref("type","input")}} 属性の値が <code>hidden</code>、<code>range</code>、<code>color</code>、<code>checkbox</code>、<code>radio</code>、<code>file</code>、またはボタン型の場合は無視されます。
      </td>
    </tr>
    <tr>
      <td>{{domxref("HTMLInputElement.selectionStart", "selectionStart")}}</td>
      <td><em><code>unsigned long</code>:</em> 選択中のテキストの先頭の位置を<strong>返却または設定</strong>します。何も選択していない場合は、その {{HTMLElement("input")}} 要素内にあるテキスト入力カーソル (キャレット) の位置を返します。
      </td>
    </tr>
    <tr>
      <td>{{domxref("HTMLInputElement.selectionEnd", "selectionEnd")}}</td>
      <td>
        <em><code>unsigned long</code>:</em> 選択中のテキストの末尾の位置を<strong>返却または設定</strong>します。選択がない場合は、現在のテキスト入力カーソル位置の直後の文字のオフセットを返します。
      </td>
    </tr>
    <tr>
      <td>{{domxref("HTMLInputElement.selectionDirection", "selectionDirection")}}</td>
      <td>
        <em>文字列:</em> 選択が行われた方向を<strong>返却または設定</strong>します。可能な値は次のとおりです。<br>
        <code>forward</code> は現在のロケールにおいての先頭から末尾の方向で選択された場合<br>
        <code>backward</code> は逆方向の場合<br>
        <code>none</code> は方向が不明な場合
      </td>
    </tr>
    <tr>
      <td>{{domxref("HTMLInputElement.size", "size")}}</td>
      <td>
        <em><code>unsigned long</code>:</em> その要素の {{ htmlattrxref("size", "input") }} 属性を<strong>返却または設定</strong>します。これは<u><strong>コントロールの外見の大きさ</strong></u>が入ります。この値は {{htmlattrxref("type","input")}} の値が <code>text</code> または <code>password</code> の場合は整数で文字数であり、それ以外の場合はピクセル単位です。 {{htmlattrxref("type","input")}} が <code>text</code>、<code>search</code>、<code>tel</code>、<code>url</code>、<code>email</code>、<code>password</code> のいずれかに設定されている場合のみ適用され、それ以外の場合は無視されます。
      </td>
    </tr>
  </tbody>
</table>

<table class="standard-table">
  <caption>
    未分類のプロパティ
  </caption>
  <tbody>
    <tr>
      <td>{{domxref("HTMLInputElement.defaultValue", "defaultValue")}}</td>
      <td>
        <em>文字列:</em> このオブジェクトを生成した HTML で最初に指定された既定値を<strong>返却または設定</strong>します。
      </td>
    </tr>
    <tr>
      <td>{{domxref("HTMLInputElement.dirName", "dirName")}}</td>
      <td>
        <em>文字列:</em> 要素の書字方向を<strong>返却または設定</strong>します。
      </td>
    </tr>
    <tr>
      <td>{{domxref("HTMLElement.accessKey", "accessKey")}}</td>
      <td>
        <em>文字列:</em> 押されるとコントロールへの入力フォーカスを切り替える単一の文字が入った文字列を<strong>返します</strong>。
      </td>
    </tr>
    <tr>
      <td>{{domxref("HTMLInputElement.list", "list")}} {{readonlyInline}}</td>
      <td>
        <em>{{domxref("HTMLElement")}} オブジェクト:</em> {{ htmlattrxref("list", "input") }} 属性が指す要素を<strong>返します</strong>。同じツリーに HTML 要素がない場合、プロパティは <code>null</code> になることがあります。
      </td>
    </tr>
    <tr>
      <td>{{domxref("HTMLInputElement.multiple", "multiple")}}</td>
      <td>
        <em>論理値:</em> その要素の {{ htmlattrxref("multiple", "input") }} 属性を<strong>返却または設定</strong>します。これは複数の値 (例えば複数のファイル) を持つことが可能であるかどうかを示します。
      </td>
    </tr>
    <tr>
      <td>{{domxref("HTMLInputElement.files", "files")}}</td>
      <td>
        <em>{{domxref("FileList")}} の配列:</em> 選択されたファイルのリストを<strong>返します</strong>。
      </td>
    </tr>
    <tr>
      <td>{{domxref("HTMLInputElement.labels", "labels")}} {{readonlyInline}}</td>
      <td>
        <em>{{domxref("NodeList")}} の配列:</em> この要素のラベルである {{ HTMLElement("label") }} 要素のリストを<strong>返します</strong>。
      </td>
    </tr>
    <tr>
      <td>{{domxref("HTMLInputElement.step", "step")}}</td>
      <td>
        <em>文字列:</em> その要素の {{ htmlattrxref("step", "input") }} 属性を<strong>返却または設定</strong>します。これは、 {{htmlattrxref("min","input")}} や {{htmlattrxref("max","input")}} と共に、数値や日時の値を設定する際の増分を制限します。文字列 <code>any</code> または正の浮動小数点数を設定することができます。 <code>any</code> が設定されていない場合、コントロールは最小値よりも大きい step 値の倍数のみを受け入れます。
      </td>
    </tr>
    <tr>
      <td>{{domxref("HTMLInputElement.valueAsDate", "valueAsDate")}}</td>
      <td>
        <em>{{jsxref("Date")}} オブジェクト:</em> その要素の値を、日時として解釈して<strong>返却または設定</strong>します。変換が不可能であれば <code>null</code> を返します。
      </td>
    </tr>
    <tr>
      <td>{{domxref("HTMLInputElement.valueAsNumber", "valueAsNumber")}}</td>
      <td>
        <em><code>double</code>:</em> その要素の値を、次のいずれかのうち一つとして解釈して<strong>返します</strong>。解釈は以下の順で行われます。
        <ul>
          <li>時刻の値</li>
          <li>数値</li>
          <li>変換が不可能であれば `NaN`</li>
        </ul>
      </td>
    </tr>
    <tr>
      <td>{{domxref("HTMLInputElement.autocapitalize", "autocapitalize")}} {{experimental_inline}}</td>
      <td>
        <em>文字列:</em> ユーザーの入力を大文字化する動作を<strong>定義します</strong>。有効な値は <code>none</code>, <code>off</code>, <code>characters</code>, <code>words</code>, <code>sentences</code> です。
      </td>
    </tr>
    <tr>
      <td>{{domxref("HTMLInputElement.inputmode", "inputmode")}}</td>
      <td>
        この要素またはその内容を編集する際に使用する仮想キーボード設定の種類について、ブラウザーにヒントを与えます。
      </td>
    </tr>
  </tbody>
</table>

- {{domxref("HTMLInputElement.align", "align")}} {{deprecated_inline}}
  - : _文字列:_ 要素の配置を**表します**。_代わりに CSS を使用してください。_
- {{domxref("HTMLInputElement.useMap", "useMap")}} {{deprecated_inline}}
  - : _文字列:_ クライアント側イメージマップを**表します**。

## メソッド

<table class="standard-table">
  <tbody>
    <tr>
      <td>{{domxref("HTMLElement/blur", "blur()")}}</td>
      <td>
        input 要素からフォーカスを外します。キー入力はどこにも行かなくなります。
      </td>
    </tr>
    <tr>
      <td>{{domxref("HTMLElement.click()", "click()")}}</td>
      <td>
        input 要素のクリックをシミュレートします。
      </td>
    </tr>
    <tr>
      <td>{{domxref("HTMLElement/focus", "focus()")}}</td>
      <td>
        input 要素にフォーカスを与えます。キー入力がこの要素に行くようになります。
      </td>
    </tr>
    <tr>
      <td>{{domxref("HTMLInputElement.select()", "select()")}}</td>
      <td>
        input 要素のすべてのテキストを選択し、ユーザーがその内容をすべて置き換えることができるように、テキストにフォーカスを与えます。
      </td>
    </tr>
    <tr>
      <td>{{domxref("HTMLInputElement.setSelectionRange()", "setSelectionRange()")}}</td>
      <td>
        input 要素のテキストの範囲を選択します (ただし、フォーカスは与えません)。
      </td>
    </tr>
    <tr>
      <td>{{domxref("HTMLInputElement.setRangeText()", "setRangeText()")}}</td>
      <td>input 要素のテキストの範囲を新しいテキストで置き換えます。</td>
    </tr>
    <tr>
      <td>{{domxref("HTMLInputElement.setCustomValidity()", "setCustomValidity()")}}</td>
      <td>
        要素に独自の検証メッセージ設定します。このメッセージが空の文字列ではない場合、その要素は独自の検証のエラーに見舞われており、検証に不合格になります。
      </td>
    </tr>
    <tr>
      <td>{{domxref("HTMLInputElement.showPicker()", "showPicker()")}}</td>
      <td>
        日付、時刻、色、ファイルのブラウザーのピッカーを表示します。
      </td>
    </tr>
    <tr>
      <td>{{domxref("HTMLInputElement.checkValidity()", "checkValidity()")}}</td>
      <td>
        論理値を返します。 <code>false</code> の場合はその要素が制約検証の候補であり、制約を満たしていないことを表します。この場合、その要素で {{domxref("HTMLInputElement/invalid_event", "invalid")}} イベントも発生します。 <code>true</code> の場合はその要素が制約検証の候補でないか、制約を満たしていることを表します。
      </td>
    </tr>
    <tr>
      <td>{{domxref("HTMLInputElement.reportValidity()", "reportValidity()")}}</td>
      <td>
        <code>checkValidity()</code> メソッドを実行し、 false が返された場合 (無効な入力や pattern 属性が提供されていない場合) には、フォームを送信した場合と同様に、入力が無効であることをユーザーに報告します。
      </td>
    </tr>
  </tbody>
</table>

- {{domxref("HTMLInputElement.stepDown()", "stepDown()")}}

  - : {{htmlattrxref("value","input")}} を ({{htmlattrxref("step","input")}} * n) だけ減少させます。 n が指定されなかった場合の既定値は 1 です。次の場合は `InvalidStateError` 例外が発生します。

    - 現在の {{htmlattrxref("type","input")}} の値にこのメソッドが適用できない場合
    - 要素に {{htmlattrxref("step","input")}} 値が設定されていない場合
    - {{htmlattrxref("value","input")}} が数値に変換できない場合
    - 結果の値が {{htmlattrxref("max","input")}} を超えたり、 {{htmlattrxref("min","input")}} を下回ったりする場合

- {{domxref("HTMLInputElement.stepUp()", "stepUp()")}}

  - : {{htmlattrxref("value","input")}} を ({{htmlattrxref("step","input")}} * n) だけ増加させます。 n が指定されなかった場合の既定値は 1 です。次の場合は INVALID_STATE_ERR 例外が発生します。

    - 現在の {{htmlattrxref("type","input")}} の値にこのメソッドが適用できない場合
    - 要素に {{htmlattrxref("step","input")}} 値が設定されていない場合
    - {{htmlattrxref("value","input")}} が数値に変換できない場合
    - 結果の値が {{htmlattrxref("max","input")}} を超えたり、 {{htmlattrxref("min","input")}} を下回ったりする場合

- {{domxref("HTMLInputElement.mozSetFileArray()", "mozSetFileArray()")}} {{non-standard_inline}}
  - : 入力欄で選択されたファイルを、与えられた {{domxref("File")}} オブジェクトの配列に設定します。これは、フレームスクリプトで使用可能な `mozSetFileNameArray()` の代替となるものです。クロームスクリプトは[ファイルを File オブジェクトとして開き](/ja/docs/Extensions/Using_the_DOM_File_API_in_chrome_code)、[メッセージマネージャー](/ja/docs/Mozilla/Firefox/Multiprocess_Firefox/The_message_manager)を介してそれらを送信することができます。
- {{domxref("HTMLInputElement.mozGetFileNameArray()", "mozGetFileNameArray()")}} {{non-standard_inline}}
  - : その入力欄からすべてのファイル名の配列を返します。

## イベント

以下のイベントは、 [`addEventListener()`](/ja/docs/Web/API/EventTarget/addEventListener) を用いるか、このインターフェイスの `onイベント名` プロパティにイベントリスナーを割り当てるかして待ち受けしてください。

- [`input`](/ja/docs/Web/API/HTMLElement/input_event)
  - : {{HTMLElement("input")}}、{{HTMLElement("select")}}、{{HTMLElement("textarea")}} のいずれかの要素の `value` が変更されたときに発生します。なお、このイベントは実際には {{domxref("HTMLElement")}} インターフェイス上で発生し、 [`contenteditable`](/ja/docs/Web/HTML/Global_attributes/contenteditable) 要素にも適用されますが、フォーム入力要素で最も一般的に使用されるため、ここに挙げています。
    [`oninput`](/ja/docs/Web/API/GlobalEventHandlers/oninput) イベントハンドラープロパティからも利用できます。
- [`invalid`](/ja/docs/Web/API/HTMLInputElement/invalid_event)
  - : 制約検証時に、要素が制約を満たしていなかった場合に発生します。
    [`oninvalid`](/ja/docs/Web/API/GlobalEventHandlers/oninvalid) イベントハンドラープロパティからも利用できます。
- [`search`](/ja/docs/Web/API/HTMLInputElement/search_event)
  - : {{HTMLElement("input")}} の `type="search"` で検索が開始されたときに発生します。
    [`onsearch`](/ja/docs/Web/API/GlobalEventHandlers/onsearch) イベントハンドラープロパティからも利用できます。

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- このインターフェイスを実装している HTML 要素: {{ HTMLElement("input") }}
