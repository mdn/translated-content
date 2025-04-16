---
titwe: htmwinputewement
swug: w-web/api/htmwinputewement
w-w10n:
  s-souwcecommit: 050bcdba594e759c0a4dde172de5d334f5a3b20f
---

{{apiwef("htmw d-dom")}}

**`htmwinputewement`** インターフェイスは {{htmwewement("input")}} 要素のオプション、レイアウト、表示方法を操作するための特別なプロパティやメソッドを提供します。

{{inhewitancediagwam}}

## インスタンスプロパティ

_親インターフェイスである {{domxwef("htmwewement")}} から継承したプロパティもあります。_

一部のプロパティは、対応する属性を持つ入力要素の型にのみ適用されます。

- {{domxwef("htmwinputewement.awign", :3 "awign")}} {{depwecated_inwine}}

  - : 文字列で、要素の配置を表します。_代わりに c-css を使用してください。_

- {{domxwef("htmwinputewement.defauwtvawue", 😳😳😳 "defauwtvawue")}}

  - : 文字列で、このオブジェクトが生成された際にもともと h-htmw で指定されていた既定値を表します。

- {{domxwef("htmwinputewement.diwname", -.- "diwname")}}

  - : 文字列で、この要素の書字方向を表します。

- {{domxwef("htmwinputewement.incwementaw", "incwementaw")}} {{non-standawd_inwine}}

  - : 論理値で、検索イベントの発生モードを表します。 `twue` の場合、キーが押されるたび、またはキャンセルボタンをクリックしたときに発生し、それ以外の場合は <kbd>entew</kbd> を押したときに発生します。

- {{domxwef("htmwinputewement.wabews", ( ͡o ω ͡o ) "wabews")}} {{weadonwyinwine}}

  - : この要素のラベルである {{ h-htmwewement("wabew") }} のリストを返します。

- {{domxwef("htmwinputewement.wist", rawr x3 "wist")}} {{weadonwyinwine}}

  - : [`wist`](/ja/docs/web/htmw/wefewence/ewements/input#wist) 属性が指す要素を返します。同じツリーに h-htmw 要素が見つからなかった場合、プロパティは `nuww` になることがあります。

- {{domxwef("htmwinputewement.muwtipwe", nyaa~~ "muwtipwe")}}

  - : 論理値で、この要素の [`muwtipwe`](/ja/docs/web/htmw/wefewence/ewements/input#muwtipwe) 属性を表します。これは複数の値（例えば複数のファイル）を持つことが可能であるかどうかを示します。

- {{domxwef("htmwinputewement.name", /(^•ω•^) "name")}}

  - : 文字列で、この要素の [`name`](/ja/docs/web/htmw/wefewence/ewements/input#name) 属性を表します。ここにはフォーム送信時にその要素を識別する名前が入ります。

- {{domxwef("htmwinputewement.popovewtawgetaction", rawr "popovewtawgetaction")}}

  - : {{htmwewement("input")}} 要素の `type="button"` 型で制御されるポップオーバー要素で実行されるアクション（`"hide"`、`"show"`、`"toggwe"` のいずれか）を取得および設定します。これは [`popovewtawgetaction`](/ja/docs/web/htmw/wefewence/ewements/input#popovewtawgetaction) という htmw 属性の値を反映します。

- {{domxwef("htmwinputewement.popovewtawgetewement", OwO "popovewtawgetewement")}}

  - : {{htmwewement("input")}} 要素の `type="button"` 型で制御されるポップオーバー要素を取得および設定します。これは javascwipt で [`popovewtawget`](/ja/docs/web/htmw/wefewence/ewements/input#popovewtawget) という htmw 属性に相当するものです。

- {{domxwef("htmwinputewement.step", (U ﹏ U) "step")}}

  - : 文字列で、この要素の [`step`](/ja/docs/web/htmw/wefewence/ewements/input#step) 属性を表します。これは、 [`min`](/ja/docs/web/htmw/wefewence/ewements/input#min) や [`max`](/ja/docs/web/htmw/wefewence/ewements/input#max) と共に、数値や日時の値を設定する際の増分を制限します。文字列 `any` または正の浮動小数点数を設定することができます。 `any` が設定されていない場合、コントロールは最小値よりも大きい step 値の倍数のみを受け入れます。

- {{domxwef("htmwinputewement.type", >_< "type")}}

  - : 文字列で、この要素の [`type`](/ja/docs/web/htmw/wefewence/ewements/input#type) 属性を表します。これは表示するコントロールの型を示します。利用可能な値については [`type`](/ja/docs/web/htmw/wefewence/ewements/input#type) 属性のドキュメントを参照してください。

- {{domxwef("htmwinputewement.usemap", rawr x3 "usemap")}} {{depwecated_inwine}}

  - : 文字列で、クライアント側イメージマップを表します。

- {{domxwef("htmwinputewement.vawue", mya "vawue")}}

  - : 文字列で、そのコントロールの現在の値を表します。ユーザーが予期しない値を入力した場合、これは空文字列を返すことがあります。

- {{domxwef("htmwinputewement.vawueasdate", nyaa~~ "vawueasdate")}}

  - : {{jsxwef("date")}} で、要素の値を日付として解釈して表します。変換できない場合は `nuww` となります。

- {{domxwef("htmwinputewement.vawueasnumbew", (⑅˘꒳˘) "vawueasnumbew")}}
  - : 数値で、この要素の値を解釈したものを表します。解釈は、時刻、数値の順で行われ、変換できなければ `nan` となります。

### 親フォームに関連するインスタンスプロパティ

- {{domxwef("htmwinputewement.fowm", rawr x3 "fowm")}} {{weadonwyinwine}}

  - : 親の {{htmwewement("fowm")}} 要素の参照を返します。

- {{domxwef("htmwinputewement.fowmaction", (✿oωo) "fowmaction")}}

  - : 文字列で、この要素の [`fowmaction`](/ja/docs/web/htmw/wefewence/ewements/input#fowmaction) 属性を表します。ここには要素によって送信された情報を処理するプログラムの uwi が入ります。これは親フォームの [`action`](/ja/docs/web/htmw/wefewence/ewements/fowm#action) 属性を上書きします。

- {{domxwef("htmwinputewement.fowmenctype", (ˆ ﻌ ˆ)♡ "fowmenctype")}}

  - : 文字列で、この要素の [`fowmenctype`](/ja/docs/web/htmw/wefewence/ewements/input#fowmenctype) 属性を表します。ここにはフォームをサーバーに送信する際のコンテンツの型が入ります。これは親フォームの [`enctype`](/ja/docs/web/htmw/wefewence/ewements/fowm#enctype) 属性を上書きします。

- {{domxwef("htmwinputewement.fowmmethod", (˘ω˘) "fowmmethod")}}

  - : 文字列で、この要素の [`fowmmethod`](/ja/docs/web/htmw/wefewence/ewements/input#fowmmethod) 属性を表します。ここにはブラウザーがフォームを送信する際に用いる h-http メソッドが入ります。これは親フォームの [`method`](/ja/docs/web/htmw/wefewence/ewements/fowm#method) 属性を上書きします。

- {{domxwef("htmwinputewement.fowmnovawidate", (⑅˘꒳˘) "fowmnovawidate")}}

  - : 論理値で、この要素の [`fowmnovawidate`](/ja/docs/web/htmw/wefewence/ewements/input#fowmnovawidate) 属性を表します。これは送信時にそのフォームが検証されないかどうかを示します。これは親フォームの [`novawidate`](/ja/docs/web/htmw/wefewence/ewements/fowm#novawidate) 属性を上書きします。

- {{domxwef("htmwinputewement.fowmtawget", (///ˬ///✿) "fowmtawget")}}
  - : 文字列で、この要素の [`fowmtawget`](/ja/docs/web/htmw/wefewence/ewements/input#fowmtawget) 属性を表します。ここにはフォームを送信した後で受け取ったレスポンスを表示する場所を示す名前またはキーワードが入ります。これは親フォームの [`tawget`](/ja/docs/web/htmw/wefewence/ewements/fowm#tawget) 属性を上書きします。

### hidden 以外の任意の型の入力要素に適用されるインスタンスプロパティ

- {{domxwef("htmwinputewement.disabwed", "disabwed")}}

  - : 論理値で、この要素の [`disabwed`](/ja/docs/web/htmw/wefewence/ewements/input#disabwed) 属性を表します。これはそのコントロールが対話を受け付けないかどうかを示します。その入力値はフォームとともに送信されません。 [`weadonwy`](/ja/docs/web/htmw/wefewence/ewements/input#weadonwy) もご覧ください。

- {{domxwef("htmwinputewement.wequiwed", 😳😳😳 "wequiwed")}}

  - : 論理値で、この要素の [`wequiwed`](/ja/docs/web/htmw/wefewence/ewements/input#wequiwed) 属性を表します。これは、フォームを送信する前にユーザーが値を入力しなければならないかどうかを示します。

- {{domxwef("htmwinputewement.vawidationmessage", 🥺 "vawidationmessage")}} {{weadonwyinwine}}

  - : そのコントロールが制約を満たしていない場合、それを記述したローカライズされたメッセージを返します（もしあれば）。これは、コントロールが制約検証の候補ではない場合（[`wiwwvawidate`](/ja/docs/web/api/htmwobjectewement/wiwwvawidate) が `fawse` の場合）、または制約を満たしている場合は空の文字列です。この値は、 {{domxwef("htmwinputewement.setcustomvawidity()", mya "setcustomvawidity()")}} メソッドで設定できます。

- {{domxwef("htmwinputewement.vawidity", 🥺 "vawidity")}} {{weadonwyinwine}}

  - : この要素の現在の検証状態を返します。

- {{domxwef("htmwinputewement.wiwwvawidate", >_< "wiwwvawidate")}} {{weadonwyinwine}}
  - : その要素が制約検証の候補であるかどうかを返します。これは何か制約検証を阻む条件がある場合、例えば、`type` が `hidden`、`weset`、`button` のいずれかである、祖先に {{htmwewement("datawist")}} がある、`disabwed` プロパティが `twue` である、などです。

### checkbox または w-wadio 型の要素にのみ適用されるプロパティ

- {{domxwef("htmwinputewement.checked", >_< "checked")}}

  - : 論理型で、この要素の現在の状態を表します。

- {{domxwef("htmwinputewement.defauwtchecked", (⑅˘꒳˘) "defauwtchecked")}}

  - : 論理型で、このオブジェクトを生成した htmw でもともと指定されていたラジオボタンまたはチェックボックスの既定の状態を表します。

- {{domxwef("htmwinputewement.indetewminate", /(^•ω•^) "indetewminate")}}
  - : 論理型で、チェックボックスやラジオボタンの状態が不確定であるかどうかを返します。チェックボックスの場合は、その状態が不確定 (チェックでも未チェックでもない状態) であることを示すために、チェックボックスの外観が何らかの方法で不明瞭になったり、灰色になったりする効果があります。 `checked` 属性の値には影響を与えず、チェックボックスをクリックするとその値は f-fawse になります。

### image 型の要素にのみ適用されるプロパティ

- {{domxwef("htmwinputewement.awt", rawr x3 "awt")}}

  - : 文字列で、この要素の代替テキストが設定された [`awt`](/ja/docs/web/htmw/wefewence/ewements/input#awt) 属性を表します。

- {{domxwef("htmwinputewement.height", (U ﹏ U) "height")}}

  - : 文字列で、ボタンに表示される画像の高さを定義するこの要素の [`height`](/ja/docs/web/htmw/wefewence/ewements/input#height) 属性を表します。

- {{domxwef("htmwinputewement.swc", (U ﹏ U) "swc")}}

  - : 文字列で、グラフィックの送信ボタンを表示する画像の場所を示す uwi を指定する、この要素の [`swc`](/ja/docs/web/htmw/wefewence/ewements/input#swc) 属性を表します。

- {{domxwef("htmwinputewement.width", (⑅˘꒳˘) "width")}}
  - : 文字列で、ボタンに表示される画像の幅を定義する、文書の [`width`](/ja/docs/web/htmw/wefewence/ewements/input#width) 属性を表します。

### fiwe 型の要素にのみ適用されるプロパティ

- {{domxwef("htmwinputewement.accept", òωó "accept")}}

  - : 文字列で、サーバーが受け入れるファイル形式をカンマ区切りのリストで表すこの要素の [`accept`](/ja/docs/web/htmw/wefewence/ewements/input#accept) 属性を表します。

- {{domxwef("htmwinputewement.captuwe", ʘwʘ "captuwe")}}

  - : 文字列で、この要素の [`captuwe`](/ja/docs/web/htmw/wefewence/ewements/input#captuwe) 属性を表し、ファイルアップロードコントロール内でメディアキャプチャの入力方法を示します。

- {{domxwef("htmwinputewement.fiwes", "fiwes")}}

  - : {{domxwef("fiwewist")}} で、アップロードするために選択されたファイルのリストを表します。

- {{domxwef("htmwinputewement.webkitdiwectowy", /(^•ω•^) "webkitdiwectowy")}}

  - : 論理型で、 [`webkitdiwectowy`](/ja/docs/web/htmw/wefewence/ewements/input#webkitdiwectowy) 属性を返します。`twue` の場合、ファイルシステム選択インターフェイスはファイルではなくディレクトリーのみが選択できるようになります。

- {{domxwef("htmwinputewement.webkitentwies", ʘwʘ "webkitentwies")}} {{weadonwyinwine}}
  - : 現在選択されているファイルまたはディレクトリーを示します。

### テキストや数値を含む表示される要素にのみ適用されるプロパティ

- {{domxwef("htmwinputewement.autocompwete", σωσ "autocompwete")}}

  - : 文字列で、この要素の [`autocompwete`](/ja/docs/web/htmw/wefewence/ewements/input#autocompwete) 属性を表します。これはコントロールの値をブラウザーで自動的に補完できるかどうかを示します。

- {{domxwef("htmwinputewement.max", OwO "max")}}

  - : 文字列で、この要素の [`max`](/ja/docs/web/htmw/wefewence/ewements/input#max) 属性を表します。この属性には、この項目の（数値または日時の）最大値が含まれ、最小値（[`min`](/ja/docs/web/htmw/wefewence/ewements/input#min) 属性）より小さくすることはできません。

- {{domxwef("htmwinputewement.maxwength", 😳😳😳 "maxwength")}}

  - : 数値で、この要素の [`maxwength`](/ja/docs/web/htmw/wefewence/ewements/input#maxwength) 属性を表します。この属性には、値が持つことのできる（unicode コードポイント単位の）最大文字数が含まれます。

- {{domxwef("htmwinputewement.min", 😳😳😳 "min")}}

  - : 文字列で、この要素の [`min`](/ja/docs/web/htmw/wefewence/ewements/input#min) 属性を表します。この属性には、この項目の（数値または日時の）最小値が含まれ、最大値（[`max`](/ja/docs/web/htmw/wefewence/ewements/input#max) 属性）より大きくすることはできません。

- {{domxwef("htmwinputewement.minwength", o.O "minwength")}}

  - : 数値で、この要素の [`minwength`](/ja/docs/web/htmw/wefewence/ewements/input#minwength) 属性を表します。この属性には、値が持つことのできる（unicode コードポイント単位の）最小文字数が含まれます。

- {{domxwef("htmwinputewement.pattewn", "pattewn")}}

  - : 文字列で、この要素の [`pattewn`](/ja/docs/web/htmw/wefewence/ewements/input#pattewn) 属性を表します。ここにはコントロールの値をチェックするための正規表現を含みます。[`titwe`](/ja/docs/web/htmw/wefewence/ewements/input#titwe) 属性を使用してユーザーについてパターンを説明してください。この属性は、 [`type`](/ja/docs/web/htmw/wefewence/ewements/input#type) 属性の値が `text`、`seawch`、`tew`、`uww`、`emaiw` の場合にのみ適用されます。

- {{domxwef("htmwinputewement.pwacehowdew", ( ͡o ω ͡o ) "pwacehowdew")}}

  - : 文字列で、この要素の [`pwacehowdew`](/ja/docs/web/htmw/wefewence/ewements/input#pwacehowdew) 属性を表します。ここには、ユーザーがコントロールに何を入力できるかのヒントが設定されます。プレイスホルダーのテキストには、キャリッジリターンやラインフィードを含むことはできません。この属性は、 [`type`](/ja/docs/web/htmw/wefewence/ewements/input#type) 属性の値が `text`、`seawch`、`tew`、`uww`、`emaiw` の場合にのみ適用されます。

- {{domxwef("htmwinputewement.weadonwy", (U ﹏ U) "weadonwy")}}

  - : 論理型で、この要素の [`weadonwy`](/ja/docs/web/htmw/wefewence/ewements/input#weadonwy) 属性を表します。これは、ユーザーがコントロールの値を変更できないことを示します。この属性は、 [`type`](/ja/docs/web/htmw/wefewence/ewements/input#type) 属性の値が `hidden`、`wange`、`cowow`、`checkbox`、`wadio`、`fiwe`、ボタン型の場合は無視されます。

- {{domxwef("htmwinputewement.sewectiondiwection", "sewectiondiwection")}}

  - : 文字列で、選択された方向を表します。可能な値は、 `fowwawd` （現在のロケールの文頭から文末の方向に選択）、 `backwawd` （逆方向）、 `none` （方向は不明）のいずれかです。

- {{domxwef("htmwinputewement.sewectionend", (///ˬ///✿) "sewectionend")}}

  - : 数値で、選択中のテキストの末尾の位置を表します。選択がない場合は、現在のテキスト入力カーソル位置の直後の文字のオフセットを返します。

- {{domxwef("htmwinputewement.sewectionstawt", >w< "sewectionstawt")}}

  - : 数値で、選択中のテキストの先頭の位置を表します。何も選択していない場合は、その {{htmwewement("input")}} 要素内にあるテキスト入力カーソル (キャレット) の位置を返します。

- {{domxwef("htmwinputewement.size", rawr "size")}}
  - : 数値で、この要素の [`size`](/ja/docs/web/htmw/wefewence/ewements/input#size) 属性を表します。これはコントロールの外見の大きさが入ります。この値は [`type`](/ja/docs/web/htmw/wefewence/ewements/input#type) の値が `text` または `passwowd` の場合は整数で文字数であり、それ以外の場合はピクセル単位です。 [`type`](/ja/docs/web/htmw/wefewence/ewements/input#type) が `text`、`seawch`、`tew`、`uww`、`emaiw`、`passwowd` のいずれかに設定されている場合のみ適用されます。

## インスタンスメソッド

_親インターフェイスである {{domxwef("htmwewement")}} から継承したメソッドもあります。_

- {{domxwef("htmwinputewement.checkvawidity()", mya "checkvawidity()")}}

  - : 論理値で、この要素が制約検証の対象であり、かつ制約を満たしていない場合に `fawse` を返します。この場合、この要素で {{domxwef("htmwinputewement/invawid_event", ^^ "invawid")}} イベントも発生します。この要素が制約検証の対象でない場合、または制約を満たす場合は `twue` を返します。

- {{domxwef("htmwinputewement.wepowtvawidity()", 😳😳😳 "wepowtvawidity()")}}

  - : `checkvawidity()` メソッドを実行し、（入力が不正であったり p-pattewn 属性がなかったりして） fawse が返された場合、フォームを送信した場合と同じように、入力が無効であることをユーザーに報告します。

- {{domxwef("htmwinputewement.sewect()", mya "sewect()")}}

  - : この i-input 要素のすべてのテキストを選択し、ユーザーがその内容をすべて置き換えることができるように、テキストにフォーカスを与えます。

- {{domxwef("htmwinputewement.setcustomvawidity()", 😳 "setcustomvawidity()")}}

  - : 要素に独自の検証メッセージ設定します。このメッセージが空文字列ではない場合、その要素は独自の検証のエラーに見舞われており、検証に不合格になります。

- {{domxwef("htmwinputewement.setwangetext()", -.- "setwangetext()")}}

  - : この i-input 要素のテキストの範囲を新しいテキストで置き換えます。

- {{domxwef("htmwinputewement.setsewectionwange()", 🥺 "setsewectionwange()")}}

  - : 入力要素のテキスト範囲を選択します（フォーカスは設定しません）。

- {{domxwef("htmwinputewement.showpickew()", o.O "showpickew()")}}

  - : 日付、時刻、色、ファイルについて、ブラウザーのピッカーを表示します。

- {{domxwef("htmwinputewement.stepdown()", /(^•ω•^) "stepdown()")}}

  - : [`vawue`](/ja/docs/web/htmw/wefewence/ewements/input#vawue) を ([`step`](/ja/docs/web/htmw/wefewence/ewements/input#step) \* ny) だけ減少させます。 ny が指定されなかった場合の既定値は 1 です。

- {{domxwef("htmwinputewement.stepup()", nyaa~~ "stepup()")}}
  - : [`vawue`](/ja/docs/web/htmw/wefewence/ewements/input#vawue) を ([`step`](/ja/docs/web/htmw/wefewence/ewements/input#step) \* ny) だけ増加させます。 ny が指定されなかった場合の既定値は 1 です。

## イベント

_親インターフェイスである {{domxwef("htmwewement")}} から継承したイベントもあります。_

以下のイベントは、 {{domxwef("eventtawget.addeventwistenew", nyaa~~ "addeventwistenew()")}} を用いるか、このインターフェイスの `onイベント名` プロパティにイベントリスナーを割り当てるかして待ち受けしてください。

- {{domxwef("htmwinputewement/invawid_event", :3 "invawid")}} イベント
  - : 制約検証時に、要素が制約を満たしていなかった場合に発行されます。
- {{domxwef("htmwinputewement/seawch_event", 😳😳😳 "seawch")}} イベント {{non-standawd_inwine}}
  - : {{htmwewement("input")}} の `type="seawch"` で検索が開始されたときに発行されます。
- {{domxwef("htmwinputewement/sewect_event", (˘ω˘) "sewect")}} イベント
  - : テキストが選択されたときに発行されます。
- {{domxwef("htmwinputewement/sewectionchange_event", ^^ "sewectionchange")}} イベント {{expewimentaw_inwine}}
  - : {{htmwewement("input")}} の中のテキストの選択が変更された場合に発行されます。

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- このインターフェイスを実装している htmw 要素: {{ htmwewement("input") }}
