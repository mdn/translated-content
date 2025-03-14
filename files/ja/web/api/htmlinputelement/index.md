---
title: HTMLInputElement
slug: Web/API/HTMLInputElement
l10n:
  sourceCommit: 050bcdba594e759c0a4dde172de5d334f5a3b20f
---

{{APIRef("HTML DOM")}}

**`HTMLInputElement`** インターフェイスは {{HtmlElement("input")}} 要素のオプション、レイアウト、表示方法を操作するための特別なプロパティやメソッドを提供します。

{{InheritanceDiagram}}

## インスタンスプロパティ

_親インターフェイスである {{domxref("HTMLElement")}} から継承したプロパティもあります。_

一部のプロパティは、対応する属性を持つ入力要素の型にのみ適用されます。

- {{domxref("HTMLInputElement.align", "align")}} {{Deprecated_Inline}}

  - : 文字列で、要素の配置を表します。_代わりに CSS を使用してください。_

- {{domxref("HTMLInputElement.defaultValue", "defaultValue")}}

  - : 文字列で、このオブジェクトが生成された際にもともと HTML で指定されていた既定値を表します。

- {{domxref("HTMLInputElement.dirName", "dirName")}}

  - : 文字列で、この要素の書字方向を表します。

- {{domxref("HTMLInputElement.incremental", "incremental")}} {{Non-standard_Inline}}

  - : 論理値で、検索イベントの発生モードを表します。 `true` の場合、キーが押されるたび、またはキャンセルボタンをクリックしたときに発生し、それ以外の場合は <kbd>Enter</kbd> を押したときに発生します。

- {{domxref("HTMLInputElement.labels", "labels")}} {{ReadOnlyInline}}

  - : この要素のラベルである {{ HTMLElement("label") }} のリストを返します。

- {{domxref("HTMLInputElement.list", "list")}} {{ReadOnlyInline}}

  - : [`list`](/ja/docs/Web/HTML/Element/input#list) 属性が指す要素を返します。同じツリーに HTML 要素が見つからなかった場合、プロパティは `null` になることがあります。

- {{domxref("HTMLInputElement.multiple", "multiple")}}

  - : 論理値で、この要素の [`multiple`](/ja/docs/Web/HTML/Element/input#multiple) 属性を表します。これは複数の値（例えば複数のファイル）を持つことが可能であるかどうかを示します。

- {{domxref("HTMLInputElement.name", "name")}}

  - : 文字列で、この要素の [`name`](/ja/docs/Web/HTML/Element/input#name) 属性を表します。ここにはフォーム送信時にその要素を識別する名前が入ります。

- {{domxref("HTMLInputElement.popoverTargetAction", "popoverTargetAction")}}

  - : {{htmlelement("input")}} 要素の `type="button"` 型で制御されるポップオーバー要素で実行されるアクション（`"hide"`、`"show"`、`"toggle"` のいずれか）を取得および設定します。これは [`popovertargetaction`](/ja/docs/Web/HTML/Element/input#popovertargetaction) という HTML 属性の値を反映します。

- {{domxref("HTMLInputElement.popoverTargetElement", "popoverTargetElement")}}

  - : {{htmlelement("input")}} 要素の `type="button"` 型で制御されるポップオーバー要素を取得および設定します。これは JavaScript で [`popovertarget`](/ja/docs/Web/HTML/Element/input#popovertarget) という HTML 属性に相当するものです。

- {{domxref("HTMLInputElement.step", "step")}}

  - : 文字列で、この要素の [`step`](/ja/docs/Web/HTML/Element/input#step) 属性を表します。これは、 [`min`](/ja/docs/Web/HTML/Element/input#min) や [`max`](/ja/docs/Web/HTML/Element/input#max) と共に、数値や日時の値を設定する際の増分を制限します。文字列 `any` または正の浮動小数点数を設定することができます。 `any` が設定されていない場合、コントロールは最小値よりも大きい step 値の倍数のみを受け入れます。

- {{domxref("HTMLInputElement.type", "type")}}

  - : 文字列で、この要素の [`type`](/ja/docs/Web/HTML/Element/input#type) 属性を表します。これは表示するコントロールの型を示します。利用可能な値については [`type`](/ja/docs/Web/HTML/Element/input#type) 属性のドキュメントを参照してください。

- {{domxref("HTMLInputElement.useMap", "useMap")}} {{Deprecated_Inline}}

  - : 文字列で、クライアント側イメージマップを表します。

- {{domxref("HTMLInputElement.value", "value")}}

  - : 文字列で、そのコントロールの現在の値を表します。ユーザーが予期しない値を入力した場合、これは空文字列を返すことがあります。

- {{domxref("HTMLInputElement.valueAsDate", "valueAsDate")}}

  - : {{jsxref("Date")}} で、要素の値を日付として解釈して表します。変換できない場合は `null` となります。

- {{domxref("HTMLInputElement.valueAsNumber", "valueAsNumber")}}
  - : 数値で、この要素の値を解釈したものを表します。解釈は、時刻、数値の順で行われ、変換できなければ `NaN` となります。

### 親フォームに関連するインスタンスプロパティ

- {{domxref("HTMLInputElement.form", "form")}} {{ReadOnlyInline}}

  - : 親の {{HtmlElement("form")}} 要素の参照を返します。

- {{domxref("HTMLInputElement.formAction", "formAction")}}

  - : 文字列で、この要素の [`formaction`](/ja/docs/Web/HTML/Element/input#formaction) 属性を表します。ここには要素によって送信された情報を処理するプログラムの URI が入ります。これは親フォームの [`action`](/ja/docs/Web/HTML/Element/form#action) 属性を上書きします。

- {{domxref("HTMLInputElement.formEnctype", "formEnctype")}}

  - : 文字列で、この要素の [`formenctype`](/ja/docs/Web/HTML/Element/input#formenctype) 属性を表します。ここにはフォームをサーバーに送信する際のコンテンツの型が入ります。これは親フォームの [`enctype`](/ja/docs/Web/HTML/Element/form#enctype) 属性を上書きします。

- {{domxref("HTMLInputElement.formMethod", "formMethod")}}

  - : 文字列で、この要素の [`formmethod`](/ja/docs/Web/HTML/Element/input#formmethod) 属性を表します。ここにはブラウザーがフォームを送信する際に用いる HTTP メソッドが入ります。これは親フォームの [`method`](/ja/docs/Web/HTML/Element/form#method) 属性を上書きします。

- {{domxref("HTMLInputElement.formNoValidate", "formNoValidate")}}

  - : 論理値で、この要素の [`formnovalidate`](/ja/docs/Web/HTML/Element/input#formnovalidate) 属性を表します。これは送信時にそのフォームが検証されないかどうかを示します。これは親フォームの [`novalidate`](/ja/docs/Web/HTML/Element/form#novalidate) 属性を上書きします。

- {{domxref("HTMLInputElement.formTarget", "formTarget")}}
  - : 文字列で、この要素の [`formtarget`](/ja/docs/Web/HTML/Element/input#formtarget) 属性を表します。ここにはフォームを送信した後で受け取ったレスポンスを表示する場所を示す名前またはキーワードが入ります。これは親フォームの [`target`](/ja/docs/Web/HTML/Element/form#target) 属性を上書きします。

### hidden 以外の任意の型の入力要素に適用されるインスタンスプロパティ

- {{domxref("HTMLInputElement.disabled", "disabled")}}

  - : 論理値で、この要素の [`disabled`](/ja/docs/Web/HTML/Element/input#disabled) 属性を表します。これはそのコントロールが対話を受け付けないかどうかを示します。その入力値はフォームとともに送信されません。 [`readonly`](/ja/docs/Web/HTML/Element/input#readonly) もご覧ください。

- {{domxref("HTMLInputElement.required", "required")}}

  - : 論理値で、この要素の [`required`](/ja/docs/Web/HTML/Element/input#required) 属性を表します。これは、フォームを送信する前にユーザーが値を入力しなければならないかどうかを示します。

- {{domxref("HTMLInputElement.validationMessage", "validationMessage")}} {{ReadOnlyInline}}

  - : そのコントロールが制約を満たしていない場合、それを記述したローカライズされたメッセージを返します（もしあれば）。これは、コントロールが制約検証の候補ではない場合（[`willValidate`](/ja/docs/Web/API/HTMLObjectElement/willValidate) が `false` の場合）、または制約を満たしている場合は空の文字列です。この値は、 {{domxref("HTMLInputElement.setCustomValidity()", "setCustomValidity()")}} メソッドで設定できます。

- {{domxref("HTMLInputElement.validity", "validity")}} {{ReadOnlyInline}}

  - : この要素の現在の検証状態を返します。

- {{domxref("HTMLInputElement.willValidate", "willValidate")}} {{ReadOnlyInline}}
  - : その要素が制約検証の候補であるかどうかを返します。これは何か制約検証を阻む条件がある場合、例えば、`type` が `hidden`、`reset`、`button` のいずれかである、祖先に {{HTMLElement("datalist")}} がある、`disabled` プロパティが `true` である、などです。

### checkbox または radio 型の要素にのみ適用されるプロパティ

- {{domxref("HTMLInputElement.checked", "checked")}}

  - : 論理型で、この要素の現在の状態を表します。

- {{domxref("HTMLInputElement.defaultChecked", "defaultChecked")}}

  - : 論理型で、このオブジェクトを生成した HTML でもともと指定されていたラジオボタンまたはチェックボックスの既定の状態を表します。

- {{domxref("HTMLInputElement.indeterminate", "indeterminate")}}
  - : 論理型で、チェックボックスやラジオボタンの状態が不確定であるかどうかを返します。チェックボックスの場合は、その状態が不確定 (チェックでも未チェックでもない状態) であることを示すために、チェックボックスの外観が何らかの方法で不明瞭になったり、灰色になったりする効果があります。 `checked` 属性の値には影響を与えず、チェックボックスをクリックするとその値は false になります。

### image 型の要素にのみ適用されるプロパティ

- {{domxref("HTMLInputElement.alt", "alt")}}

  - : 文字列で、この要素の代替テキストが設定された [`alt`](/ja/docs/Web/HTML/Element/input#alt) 属性を表します。

- {{domxref("HTMLInputElement.height", "height")}}

  - : 文字列で、ボタンに表示される画像の高さを定義するこの要素の [`height`](/ja/docs/Web/HTML/Element/input#height) 属性を表します。

- {{domxref("HTMLInputElement.src", "src")}}

  - : 文字列で、グラフィックの送信ボタンを表示する画像の場所を示す URI を指定する、この要素の [`src`](/ja/docs/Web/HTML/Element/input#src) 属性を表します。

- {{domxref("HTMLInputElement.width", "width")}}
  - : 文字列で、ボタンに表示される画像の幅を定義する、文書の [`width`](/ja/docs/Web/HTML/Element/input#width) 属性を表します。

### file 型の要素にのみ適用されるプロパティ

- {{domxref("HTMLInputElement.accept", "accept")}}

  - : 文字列で、サーバーが受け入れるファイル形式をカンマ区切りのリストで表すこの要素の [`accept`](/ja/docs/Web/HTML/Element/input#accept) 属性を表します。

- {{domxref("HTMLInputElement.capture", "capture")}}

  - : 文字列で、この要素の [`capture`](/ja/docs/Web/HTML/Element/input#capture) 属性を表し、ファイルアップロードコントロール内でメディアキャプチャの入力方法を示します。

- {{domxref("HTMLInputElement.files", "files")}}

  - : {{domxref("FileList")}} で、アップロードするために選択されたファイルのリストを表します。

- {{domxref("HTMLInputElement.webkitdirectory", "webkitdirectory")}}

  - : 論理型で、 [`webkitdirectory`](/ja/docs/Web/HTML/Element/input#webkitdirectory) 属性を返します。`true` の場合、ファイルシステム選択インターフェイスはファイルではなくディレクトリーのみが選択できるようになります。

- {{domxref("HTMLInputElement.webkitEntries", "webkitEntries")}} {{ReadOnlyInline}}
  - : 現在選択されているファイルまたはディレクトリーを示します。

### テキストや数値を含む表示される要素にのみ適用されるプロパティ

- {{domxref("HTMLInputElement.autocomplete", "autocomplete")}}

  - : 文字列で、この要素の [`autocomplete`](/ja/docs/Web/HTML/Element/input#autocomplete) 属性を表します。これはコントロールの値をブラウザーで自動的に補完できるかどうかを示します。

- {{domxref("HTMLInputElement.max", "max")}}

  - : 文字列で、この要素の [`max`](/ja/docs/Web/HTML/Element/input#max) 属性を表します。この属性には、この項目の（数値または日時の）最大値が含まれ、最小値（[`min`](/ja/docs/Web/HTML/Element/input#min) 属性）より小さくすることはできません。

- {{domxref("HTMLInputElement.maxLength", "maxLength")}}

  - : 数値で、この要素の [`maxlength`](/ja/docs/Web/HTML/Element/input#maxlength) 属性を表します。この属性には、値が持つことのできる（Unicode コードポイント単位の）最大文字数が含まれます。

- {{domxref("HTMLInputElement.min", "min")}}

  - : 文字列で、この要素の [`min`](/ja/docs/Web/HTML/Element/input#min) 属性を表します。この属性には、この項目の（数値または日時の）最小値が含まれ、最大値（[`max`](/ja/docs/Web/HTML/Element/input#max) 属性）より大きくすることはできません。

- {{domxref("HTMLInputElement.minLength", "minLength")}}

  - : 数値で、この要素の [`minlength`](/ja/docs/Web/HTML/Element/input#minlength) 属性を表します。この属性には、値が持つことのできる（Unicode コードポイント単位の）最小文字数が含まれます。

- {{domxref("HTMLInputElement.pattern", "pattern")}}

  - : 文字列で、この要素の [`pattern`](/ja/docs/Web/HTML/Element/input#pattern) 属性を表します。ここにはコントロールの値をチェックするための正規表現を含みます。[`title`](/ja/docs/Web/HTML/Element/input#title) 属性を使用してユーザーについてパターンを説明してください。この属性は、 [`type`](/ja/docs/Web/HTML/Element/input#type) 属性の値が `text`、`search`、`tel`、`url`、`email` の場合にのみ適用されます。

- {{domxref("HTMLInputElement.placeholder", "placeholder")}}

  - : 文字列で、この要素の [`placeholder`](/ja/docs/Web/HTML/Element/input#placeholder) 属性を表します。ここには、ユーザーがコントロールに何を入力できるかのヒントが設定されます。プレイスホルダーのテキストには、キャリッジリターンやラインフィードを含むことはできません。この属性は、 [`type`](/ja/docs/Web/HTML/Element/input#type) 属性の値が `text`、`search`、`tel`、`url`、`email` の場合にのみ適用されます。

- {{domxref("HTMLInputElement.readOnly", "readOnly")}}

  - : 論理型で、この要素の [`readonly`](/ja/docs/Web/HTML/Element/input#readonly) 属性を表します。これは、ユーザーがコントロールの値を変更できないことを示します。この属性は、 [`type`](/ja/docs/Web/HTML/Element/input#type) 属性の値が `hidden`、`range`、`color`、`checkbox`、`radio`、`file`、ボタン型の場合は無視されます。

- {{domxref("HTMLInputElement.selectionDirection", "selectionDirection")}}

  - : 文字列で、選択された方向を表します。可能な値は、 `forward` （現在のロケールの文頭から文末の方向に選択）、 `backward` （逆方向）、 `none` （方向は不明）のいずれかです。

- {{domxref("HTMLInputElement.selectionEnd", "selectionEnd")}}

  - : 数値で、選択中のテキストの末尾の位置を表します。選択がない場合は、現在のテキスト入力カーソル位置の直後の文字のオフセットを返します。

- {{domxref("HTMLInputElement.selectionStart", "selectionStart")}}

  - : 数値で、選択中のテキストの先頭の位置を表します。何も選択していない場合は、その {{HTMLElement("input")}} 要素内にあるテキスト入力カーソル (キャレット) の位置を返します。

- {{domxref("HTMLInputElement.size", "size")}}
  - : 数値で、この要素の [`size`](/ja/docs/Web/HTML/Element/input#size) 属性を表します。これはコントロールの外見の大きさが入ります。この値は [`type`](/ja/docs/Web/HTML/Element/input#type) の値が `text` または `password` の場合は整数で文字数であり、それ以外の場合はピクセル単位です。 [`type`](/ja/docs/Web/HTML/Element/input#type) が `text`、`search`、`tel`、`url`、`email`、`password` のいずれかに設定されている場合のみ適用されます。

## インスタンスメソッド

_親インターフェイスである {{domxref("HTMLElement")}} から継承したメソッドもあります。_

- {{domxref("HTMLInputElement.checkValidity()", "checkValidity()")}}

  - : 論理値で、この要素が制約検証の対象であり、かつ制約を満たしていない場合に `false` を返します。この場合、この要素で {{domxref("HTMLInputElement/invalid_event", "invalid")}} イベントも発生します。この要素が制約検証の対象でない場合、または制約を満たす場合は `true` を返します。

- {{domxref("HTMLInputElement.reportValidity()", "reportValidity()")}}

  - : `checkValidity()` メソッドを実行し、（入力が不正であったり pattern 属性がなかったりして） false が返された場合、フォームを送信した場合と同じように、入力が無効であることをユーザーに報告します。

- {{domxref("HTMLInputElement.select()", "select()")}}

  - : この input 要素のすべてのテキストを選択し、ユーザーがその内容をすべて置き換えることができるように、テキストにフォーカスを与えます。

- {{domxref("HTMLInputElement.setCustomValidity()", "setCustomValidity()")}}

  - : 要素に独自の検証メッセージ設定します。このメッセージが空文字列ではない場合、その要素は独自の検証のエラーに見舞われており、検証に不合格になります。

- {{domxref("HTMLInputElement.setRangeText()", "setRangeText()")}}

  - : この input 要素のテキストの範囲を新しいテキストで置き換えます。

- {{domxref("HTMLInputElement.setSelectionRange()", "setSelectionRange()")}}

  - : 入力要素のテキスト範囲を選択します（フォーカスは設定しません）。

- {{domxref("HTMLInputElement.showPicker()", "showPicker()")}}

  - : 日付、時刻、色、ファイルについて、ブラウザーのピッカーを表示します。

- {{domxref("HTMLInputElement.stepDown()", "stepDown()")}}

  - : [`value`](/ja/docs/Web/HTML/Element/input#value) を ([`step`](/ja/docs/Web/HTML/Element/input#step) \* n) だけ減少させます。 n が指定されなかった場合の既定値は 1 です。

- {{domxref("HTMLInputElement.stepUp()", "stepUp()")}}
  - : [`value`](/ja/docs/Web/HTML/Element/input#value) を ([`step`](/ja/docs/Web/HTML/Element/input#step) \* n) だけ増加させます。 n が指定されなかった場合の既定値は 1 です。

## イベント

_親インターフェイスである {{domxref("HTMLElement")}} から継承したイベントもあります。_

以下のイベントは、 {{domxref("EventTarget.addEventListener", "addEventListener()")}} を用いるか、このインターフェイスの `onイベント名` プロパティにイベントリスナーを割り当てるかして待ち受けしてください。

- {{domxref("HTMLInputElement/invalid_event", "invalid")}} イベント
  - : 制約検証時に、要素が制約を満たしていなかった場合に発行されます。
- {{domxref("HTMLInputElement/search_event", "search")}} イベント {{Non-standard_Inline}}
  - : {{HTMLElement("input")}} の `type="search"` で検索が開始されたときに発行されます。
- {{domxref("HTMLInputElement/select_event", "select")}} イベント
  - : テキストが選択されたときに発行されます。
- {{domxref("HTMLInputElement/selectionchange_event", "selectionchange")}} イベント {{Experimental_Inline}}
  - : {{HTMLElement("input")}} の中のテキストの選択が変更された場合に発行されます。

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- このインターフェイスを実装している HTML 要素: {{ HTMLElement("input") }}
