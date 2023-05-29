---
title: HTMLInputElement
slug: Web/API/HTMLInputElement
l10n:
  sourceCommit: 51a663ab797d3766a77e40af6565e43ae7af3d07
---

{{APIRef("HTML DOM")}}

**`HTMLInputElement`** インターフェイスは {{HtmlElement("input")}} 要素のオプション、レイアウト、表示方法を操作するための特別なプロパティやメソッドを提供します。

{{InheritanceDiagram}}

## インスタンスプロパティ

一部のプロパティは、対応する属性を持つ入力要素の型にのみ適用されます。

- {{domxref("HTMLInputElement.align", "align")}} {{Deprecated_Inline}}

  - : 文字列: 要素の配置を**表します**。_代わりに CSS を使用してください。_

- {{domxref("HTMLInputElement.autocapitalize", "autocapitalize")}} {{Experimental_Inline}}

  - : 文字列: ユーザー入力の大文字化の動作を**定義**します。有効な値は `none`、`off`、`characters`、`words`、`sentences` の何れかです。

- {{domxref("HTMLInputElement.defaultValue", "defaultValue")}}

  - : 文字列: このオブジェクトが生成された際にもともと HTML で指定されていた既定値を**取得/設定**します。

- {{domxref("HTMLInputElement.dirName", "dirName")}}

  - : 文字列: この要素の書字方向を**取得/設定**します。

- {{domxref("HTMLInputElement.inputmode", "inputmode")}}

  - : この要素またはそのコンテンツを編集する際に使用する仮想キーボード設定の種類について、ブラウザーにヒントを提供します。

- {{domxref("HTMLInputElement.labels", "labels")}} {{ReadOnlyInline}}

  - : {{domxref("NodeList")}} の配列: この要素のラベルである {{ HTMLElement("label") }} のリストを**返します**。

- {{domxref("HTMLInputElement.list", "list")}} {{ReadOnlyInline}}

  - : {{domxref("HTMLElement")}}: [`list`](/ja/docs/Web/HTML/Element/input#list) 属性が指す要素を**返します**。同じツリーに HTML 要素がない場合、プロパティは `null` になることがあります。

- {{domxref("HTMLInputElement.multiple", "multiple")}}

  - : 論理値: この要素の [`multiple`](/ja/docs/Web/HTML/Element/input#multiple) 属性を**返却/設定**します。これは複数の値（例えば複数のファイル）を持つことが可能であるかどうかを示します。

- {{domxref("HTMLInputElement.name", "name")}}

  - : 文字列: この要素の [`name`](/ja/docs/Web/HTML/Element/input#name) 属性を**返却/設定**します。ここにはフォーム送信時にその要素を識別する名前が入ります。

- {{domxref("HTMLInputElement.popoverTargetAction", "popoverTargetAction")}} {{Experimental_Inline}}

  - : {{htmlelement("input")}} 要素の `type="button"` 型で制御されるポップオーバー要素で実行されるアクション（`"hide"`、`"show"`、`"toggle"` の何れか）を取得および設定します。これは [`popovertargetaction`](/ja/docs/Web/HTML/Element/input#popovertargetaction) という HTML 属性の値を反映します。

- {{domxref("HTMLInputElement.popoverTargetElement", "popoverTargetElement")}} {{Experimental_Inline}}

  - : {{htmlelement("input")}} 要素の `type="button"` 型で制御されるポップオーバー要素を取得および設定します。これは JavaScript で [`popovertarget`](/ja/docs/Web/HTML/Element/input#popovertarget) という HTML 属性に相当するものです。

- {{domxref("HTMLInputElement.step", "step")}}

  - : 文字列: この要素の [`step`](/ja/docs/Web/HTML/Element/input#step) 属性を**返却/設定**します。これは、 [`min`](/ja/docs/Web/HTML/Element/input#min) や [`max`](/ja/docs/Web/HTML/Element/input#max) と共に、数値や日時の値を設定する際の増分を制限します。文字列 `any` または正の浮動小数点数を設定することができます。 `any` が設定されていない場合、コントロールは最小値よりも大きい step 値の倍数のみを受け入れます。

- {{domxref("HTMLInputElement.type", "type")}}

  - : 文字列: この要素の [`type`](/ja/docs/Web/HTML/Element/input#type) 属性を**返却/設定**します。これは表示するコントロールの型を示します。利用可能な値については {{ HTMLElement("input") }} の [`type`](/ja/docs/Web/HTML/Element/input#type) 属性を参照してください。

- {{domxref("HTMLInputElement.useMap", "useMap")}} {{Deprecated_Inline}}

  - : 文字列: クライアント側イメージマップを**表します**。

- {{domxref("HTMLInputElement.value", "value")}}

  - : 文字列: そのコントロールの現在の値を**返却/設定**します。ユーザーが予期しない値を入力した場合、これは空文字列を返すことがあります。

- {{domxref("HTMLInputElement.valueAsDate", "valueAsDate")}}

  - : {{jsxref("Date")}}: 要素の値を日付として解釈して**返却/設定**します。変換できない場合は `null` となります。

- {{domxref("HTMLInputElement.valueAsNumber", "valueAsNumber")}}
  - : 数値: この要素の値を、次のいずれかのうち一つとして解釈して**返します**。解釈は、時刻値、数値の順で行われ、変換できなければ `NaN` となります。

### 親フォームに関連するインスタンスプロパティ

- {{domxref("HTMLInputElement.form", "form")}} {{ReadOnlyInline}}

  - : {{domxref("HTMLFormElement")}}: 親の {{HtmlElement("form")}} 要素の参照を**返します**。

- {{domxref("HTMLInputElement.formAction", "formAction")}}

  - : 文字列: この要素の [`formaction`](/ja/docs/Web/HTML/Element/input#formaction) 属性を**返却/設定**します。ここには要素によって送信された情報を処理するプログラムの URI が入ります。これは親フォームの [`action`](/ja/docs/Web/HTML/Element/form#action) 属性を上書きします。

- {{domxref("HTMLInputElement.formEnctype", "formEnctype")}}

  - : 文字列: この要素の [`formenctype`](/ja/docs/Web/HTML/Element/input#formenctype) 属性を**返却/設定**します。ここにはフォームをサーバーに送信する際のコンテンツの型が入ります。これは親フォームの [`enctype`](/ja/docs/Web/HTML/Element/form#enctype) 属性を上書きします。

- {{domxref("HTMLInputElement.formMethod", "formMethod")}}

  - : 文字列: この要素の [`formmethod`](/ja/docs/Web/HTML/Element/input#formmethod) 属性を**返却/設定**します。ここにはブラウザーがフォームを送信する際に用いる HTTP メソッドが入ります。これは親フォームの [`method`](/ja/docs/Web/HTML/Element/form#method) 属性を上書きします。

- {{domxref("HTMLInputElement.formNoValidate", "formNoValidate")}}

  - : 論理値: この要素の [`formnovalidate`](/ja/docs/Web/HTML/Element/input#formnovalidate) 属性を**返却/設定**します。これは送信時にそのフォームが検証されないかどうかを示します。これは親フォームの [`novalidate`](/ja/docs/Web/HTML/Element/form#novalidate) 属性を上書きします。

- {{domxref("HTMLInputElement.formTarget", "formTarget")}}
  - : 文字列: この要素の [`formtarget`](/ja/docs/Web/HTML/Element/input#formtarget) 属性を**返却/設定**します。ここにはフォームを送信した後で受け取ったレスポンスを表示する場所を示す名前またはキーワードが入ります。これは親フォームの [`target`](/ja/docs/Web/HTML/Element/form#target) 属性を上書きします。

### hidden 以外の任意の型の入力要素に適用されるインスタンスプロパティ

- {{domxref("HTMLInputElement.autofocus", "autofocus")}}

  - : 論理値: この要素の [`autofocus`](/ja/docs/Web/HTML/Element/input#autofocus) 属性を**返却/設定**します。ページが読み込まれたときに、ユーザーが別のコントロールに入力するなどしてそれを上書きしない限り、そのフォームコントロールが入力フォーカスを持つべきであることを指定します。文書内の 1 つの form 要素だけが [`autofocus`](/ja/docs/Web/HTML/Element/input#autofocus) 属性を持つことができます。

- {{domxref("HTMLInputElement.disabled", "disabled")}}

  - : 論理値: この要素の [`disabled`](/ja/docs/Web/HTML/Element/input#disabled) 属性を**返却/設定**します。これはそのコントロールが対話を受け付けないかどうかを示します。その入力値はフォームとともに送信されません。 [`readonly`](/ja/docs/Web/HTML/Element/input#readonly) もご覧ください。

- {{domxref("HTMLInputElement.required", "required")}}

  - : 論理値: この要素の [`required`](/ja/docs/Web/HTML/Element/input#required) 属性を**返却/設定**します。これは、フォームを送信する前にユーザーが値を入力しなければならないかどうかを示します。

- {{domxref("HTMLInputElement.validationMessage", "validationMessage")}} {{ReadOnlyInline}}

  - : 文字列: そのコントロールが制約を満たさなかった場合、それを記述したローカライズされたメッセージを**返します**（もしあれば）。これは、コントロールが制約検証の候補ではない場合（[`willValidate`](/ja/docs/Web/API/HTMLObjectElement/willValidate) が `false` の場合）、または制約を満たしている場合は空の文字列です。この値は、 {{domxref("HTMLInputElement.setCustomValidity()", "setCustomValidity()")}} メソッドで設定できます。

- {{domxref("HTMLInputElement.validity", "validity")}} {{ReadOnlyInline}}

  - : {{domxref("ValidityState")}}: この要素の現在の検証状態を**返します**。

- {{domxref("HTMLInputElement.willValidate", "willValidate")}} {{ReadOnlyInline}}
  - : 論理値: その要素が制約検証の候補であるかどうかを**返します**。これは何か制約検証を阻む条件がある場合、例えば、`type` が `hidden`、`reset`、`button` のいずれかである、祖先に {{HTMLElement("datalist")}} がある、`disabled` プロパティが `true` である、などです。

### checkbox または radio 型の要素にのみ適用されるプロパティ

- {{domxref("HTMLInputElement.checked", "checked")}}

  - : 論理型: この要素の現在の状態を**返却/設定**します。

- {{domxref("HTMLInputElement.defaultChecked", "defaultChecked")}}

  - : 論理型: このオブジェクトを生成した HTML でもともと指定されていたラジオボタンまたはチェックボックスの既定の状態を**返却/設定**します。

- {{domxref("HTMLInputElement.indeterminate", "indeterminate")}}
  - : 論理型: チェックボックスやラジオボタンの状態が不確定であるかどうかを**返します**。チェックボックスの場合は、その状態が不確定 (チェックでも未チェックでもない状態) であることを示すために、チェックボックスの外観が何らかの方法で不明瞭になったり、灰色になったりする効果があります。`checked` 属性の値には影響を与えず、チェックボックスをクリックするとその値は false になります。

### image 型の要素にのみ適用されるプロパティ

- {{domxref("HTMLInputElement.alt", "alt")}}

  - : 文字列: この要素の代替テキストが設定された [`alt`](/ja/docs/Web/HTML/Element/input#alt) 属性を**返却/設定**します。

- {{domxref("HTMLInputElement.height", "height")}}

  - : 文字列: ボタンに表示される画像の高さを定義するこの要素の [`height`](/ja/docs/Web/HTML/Element/input#height) 属性を**返却/設定**します。

- {{domxref("HTMLInputElement.src", "src")}}

  - : 文字列: グラフィックの送信ボタンを表示する画像の場所を示す URI を指定する、この要素の [`src`](/ja/docs/Web/HTML/Element/input#src) 属性を**返却/設定**します。

- {{domxref("HTMLInputElement.width", "width")}}
  - : 文字列: ボタンに表示される画像の幅を定義する、文書の [`width`](/ja/docs/Web/HTML/Element/input#width) 属性を**返却/設定**します。

### file 型の要素にのみ適用されるプロパティ

- {{domxref("HTMLInputElement.accept", "accept")}}

  - : 文字列: サーバーが受け入れるファイル形式をカンマ区切りのリストで表すこの要素の [`accept`](/ja/docs/Web/HTML/Element/input#accept) 属性を**返却/設定**します。

- {{domxref("HTMLInputElement.allowdirs", "allowdirs")}} {{Non-standard_Inline}}

  - : 論理型: 標準外の Directory Upload API の一部です。ファイルリストでディレクトリーとファイルの両方を選択できるようにするかどうかを示します。 Firefox でのみ実装されており、設定で隠されています。

- {{domxref("HTMLInputElement.files", "files")}}

  - : {{domxref("FileList")}}: アップロードするために選択されたファイルを表す {{domxref("File")}} オブジェクトのリストを**返却/設定**します。

- {{domxref("HTMLInputElement.webkitdirectory", "webkitdirectory")}}

  - : 論理型: [`webkitdirectory`](/ja/docs/Web/HTML/Element/input#webkitdirectory) 属性を**返します**。`true` の場合、ファイルシステム選択インターフェイスはファイルではなくディレクトリーのみが選択できるようになります。

- {{domxref("HTMLInputElement.webkitEntries", "webkitEntries")}}
  - : {{domxref("FileSystemEntry")}} の配列: 現在選択されているファイルまたはディレクトリーを**示します**。

### テキストや数値を含む表示される要素にのみ適用されるプロパティ

- {{domxref("HTMLInputElement.autocomplete", "autocomplete")}}

  - : 文字列: この要素の [`autocomplete`](/ja/docs/Web/HTML/Element/input#autocomplete) 属性を**返却/設定**します。これはコントロールの値をブラウザーで自動的に補完できるかどうかを示します。

- {{domxref("HTMLInputElement.max", "max")}}

  - : 文字列: この要素の [`max`](/ja/docs/Web/HTML/Element/input#max) 属性を**返却/設定**します。この属性には、この項目の（数値または日時の）最大値が含まれ、最小値（[`min`](/ja/docs/Web/HTML/Element/input#min) 属性）より小さくすることはできません。

- {{domxref("HTMLInputElement.maxLength", "maxLength")}}

  - : `unsigned long`: この要素の [`maxlength`](/ja/docs/Web/HTML/Element/input#maxlength) 属性を**返却/設定**します。この属性には、値が持つことのできる（Unicode コードポイント単位の）最大文字数が含まれます。

- {{domxref("HTMLInputElement.min", "min")}}

  - : 文字列: この要素の [`min`](/ja/docs/Web/HTML/Element/input#min) 属性を**返却/設定**します。この属性には、この項目の（数値または日時の）最小値が含まれ、最大値（[`max`](/ja/docs/Web/HTML/Element/input#max) 属性）より大きくすることはできません。

- {{domxref("HTMLInputElement.minLength", "minLength")}}

  - : `unsigned long`: この要素の [`minlength`](/ja/docs/Web/HTML/Element/input#minlength) 属性を**返却/設定**します。この属性には、値が持つことのできる（Unicode コードポイント単位の）最小文字数が含まれます。

- {{domxref("HTMLInputElement.pattern", "pattern")}}

  - : 文字列: この要素の [`pattern`](/ja/docs/Web/HTML/Element/input#pattern) 属性を**返却/設定**します。ここにはコントロールの値をチェックするための正規表現を含みます。[`title`](/ja/docs/Web/HTML/Element/input#title) 属性を使用してユーザーについてパターンを説明してください。この属性は、 [`type`](/ja/docs/Web/HTML/Element/input#type) 属性の値が `text`、`search`、`tel`、`url`、`email` の場合にのみ適用されます。

- {{domxref("HTMLInputElement.placeholder", "placeholder")}}

  - : 文字列: この要素の [`placeholder`](/ja/docs/Web/HTML/Element/input#placeholder) 属性を**返却/設定**します。ここには、ユーザーがコントロールに何を入力できるかのヒントが設定されます。プレイスホルダーのテキストには、キャリッジリターンやラインフィードを含むことはできません。この属性は、 [`type`](/ja/docs/Web/HTML/Element/input#type) 属性の値が `text`、`search`、`tel`、`url`、`email` の場合にのみ適用されます。

- {{domxref("HTMLInputElement.readOnly", "readOnly")}}

  - : 論理型: この要素の [`readonly`](/ja/docs/Web/HTML/Element/input#readonly) 属性を**返却/設定**します。これは、ユーザーがコントロールの値を変更できないことを示します。この属性は、 [`type`](/ja/docs/Web/HTML/Element/input#type) 属性の値が `hidden`、`range`、`color`、`checkbox`、`radio`、`file`、ボタン型の場合は無視されます。

- {{domxref("HTMLInputElement.selectionEnd", "selectionEnd")}}

  - : `unsigned long`: 選択中のテキストの末尾の位置を**返却/設定**します。選択がない場合は、現在のテキスト入力カーソル位置の直後の文字のオフセットを返します。

- {{domxref("HTMLInputElement.selectionStart", "selectionStart")}}

  - : `unsigned long`: 選択中のテキストの先頭の位置を**返却/設定**します。何も選択していない場合は、その {{HTMLElement("input")}} 要素内にあるテキスト入力カーソル (キャレット) の位置を返します。

- {{domxref("HTMLInputElement.selectionDirection", "selectionDirection")}}

  - : 文字列: 選択が行われた方向を**返却/設定**します。取りうる値は、`forward`（現在のロケールにおける先頭から末尾の方向に選択された）、`backward`（逆方向）、`none`（方向が不明）です。

- {{domxref("HTMLInputElement.size", "size")}}
  - : `unsigned long`: この要素の [`size`](/ja/docs/Web/HTML/Element/input#size) 属性を**返却/設定**します。これはコントロールの外見の大きさが入ります。この値は [`type`](/ja/docs/Web/HTML/Element/input#type) の値が `text` または `password` の場合は整数で文字数であり、それ以外の場合はピクセル単位です。 [`type`](/ja/docs/Web/HTML/Element/input#type) が `text`、`search`、`tel`、`url`、`email`、`password` のいずれかに設定されている場合のみ適用されます。

## インスタンスメソッド

- {{domxref("HTMLElement/blur", "blur()")}}

  - : この input 要素からフォーカスを外します。キー入力はどこにも行かなくなります。

- {{domxref("HTMLElement.click()", "click()")}}

  - : この input 要素のクリックをシミュレートします。

- {{domxref("HTMLElement/focus", "focus()")}}

  - : この input 要素にフォーカスを与えます。キー入力がこの要素に行くようになります。

- {{domxref("HTMLInputElement.select()", "select()")}}

  - : この input 要素のすべてのテキストを選択し、ユーザーがその内容をすべて置き換えることができるように、テキストにフォーカスを与えます。

- {{domxref("HTMLInputElement.setSelectionRange()", "setSelectionRange()")}}

  - : この input 要素のテキストの範囲を選択します（ただし、フォーカスは与えません）。

- {{domxref("HTMLInputElement.setRangeText()", "setRangeText()")}}

  - : この input 要素のテキストの範囲を新しいテキストで置き換えます。

- {{domxref("HTMLInputElement.setCustomValidity()", "setCustomValidity()")}}

  - : 要素に独自の検証メッセージ設定します。このメッセージが空の文字列ではない場合、その要素は独自の検証のエラーに見舞われており、検証に不合格になります。

- {{domxref("HTMLInputElement.showPicker()", "showPicker()")}}

  - : 日付、時刻、色、ファイルについて、ブラウザーのピッカーを表示します。

- {{domxref("HTMLInputElement.checkValidity()", "checkValidity()")}}

  - : 論理値を返します。 `false` の場合はその要素が制約検証の候補であり、かつ制約を満たしていないことを表します。この場合、この要素で {{domxref("HTMLInputElement/invalid_event", "invalid")}} イベントも発生します。 `true` の場合はその要素が制約検証の候補でないか、制約を満たしていることを表します。

- {{domxref("HTMLInputElement.reportValidity()", "reportValidity()")}}

  - : `checkValidity()` メソッドを実行し、 false が返された場合 (無効な入力や pattern 属性が提供されていない場合) には、フォームを送信した場合と同様に、入力が無効であることをユーザーに報告します。

- {{domxref("HTMLInputElement.stepDown()", "stepDown()")}}

  - : [`value`](/ja/docs/Web/HTML/Element/input#value) を ([`step`](/ja/docs/Web/HTML/Element/input#step) * n) だけ減少させます。 n が指定されなかった場合の既定値は 1 です。次の場合は `InvalidStateError` 例外が発生します。

    - 現在の [`type`](/ja/docs/Web/HTML/Element/input#type) の値にこのメソッドが適用できない場合
    - 要素に [`step`](/ja/docs/Web/HTML/Element/input#step) 値が設定されていない場合
    - [`value`](/ja/docs/Web/HTML/Element/input#value) が数値に変換できない場合
    - 結果の値が [`max`](/ja/docs/Web/HTML/Element/input#max) を超えたり、 [`min`](/ja/docs/Web/HTML/Element/input#min) を下回ったりする場合

- {{domxref("HTMLInputElement.stepUp()", "stepUp()")}}

  - : [`value`](/ja/docs/Web/HTML/Element/input#value) を ([`step`](/ja/docs/Web/HTML/Element/input#step) * n) だけ増加させます。 n が指定されなかった場合の既定値は 1 です。次の場合は INVALID_STATE_ERR 例外が発生します。

    - 現在の [`type`](/ja/docs/Web/HTML/Element/input#type) の値にこのメソッドが適用できない場合
    - 要素に [`step`](/ja/docs/Web/HTML/Element/input#step) 値が設定されていない場合
    - [`value`](/ja/docs/Web/HTML/Element/input#value) が数値に変換できない場合
    - 結果の値が [`max`](/ja/docs/Web/HTML/Element/input#max) を超えたり、 [`min`](/ja/docs/Web/HTML/Element/input#min) を下回ったりする場合

## イベント

以下のイベントは、 [`addEventListener()`](/ja/docs/Web/API/EventTarget/addEventListener) を用いるか、このインターフェイスの `onイベント名` プロパティにイベントリスナーを割り当てるかして待ち受けしてください。

- [`input`](/ja/docs/Web/API/HTMLElement/input_event)
  - : {{HTMLElement("input")}}、{{HTMLElement("select")}}、{{HTMLElement("textarea")}} のいずれかの要素の `value` が変更されたときに発生します。なお、このイベントは実際には {{domxref("HTMLElement")}} インターフェイス上で発生し、 [`contenteditable`](/ja/docs/Web/HTML/Global_attributes/contenteditable) 要素にも適用されますが、フォーム入力要素で最も一般的に使用されるため、ここに挙げています。
- [`invalid`](/ja/docs/Web/API/HTMLInputElement/invalid_event)
  - : 制約検証時に、要素が制約を満たしていなかった場合に発生します。
- [`search`](/ja/docs/Web/API/HTMLInputElement/search_event)
  - : {{HTMLElement("input")}} の `type="search"` で検索が開始されたときに発生します。
- {{domxref("HTMLInputElement/selectionchange_event", "selectionchange")}} イベント {{Experimental_Inline}}
  - : {{HTMLElement("input")}} の中のテキストの選択が変更された場合に発生します。

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- このインターフェイスを実装している HTML 要素: {{ HTMLElement("input") }}
