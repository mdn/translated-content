---
title: データ型
slug: Web/SVG/Content_type
l10n:
  sourceCommit: 4d5e2c11f4b8cc32e54d2527d9576ed26ced9458
---

{{SVGRef}}

SVG は多くのデータ型を使用しています。この記事では、これらのデータ型とその構文、使用目的の説明を掲載しています。

## Angle（角度）

- \<angle>

  - : 角度は 2 つの方法のいずれかで指定します。スタイルシートのプロパティの値に使用する際、 \<angle> は次のように定義されています。

    ```plain
    angle ::= number (~"deg" | ~"grad" | ~"rad")?
    ```

    `deg` は度を示し、 `grad` はグラードを示し、 `rad` はラジアンを示します。

    CSS2 で定義されたプロパティについては、角度単位の識別子を提供しなければなりません。 SVG 固有のプロパティとそれに対応するプレゼンテーション属性の角度値については、角度の単位識別子は省略可能です。提供しなかった場合、角度の値は度単位であるとみなされます。すべてのプロパティのプレゼンテーション属性において、定義されているのが SVG1.1 であるか CSS2 であるかに関わらず、角度の識別子を指定する場合は小文字でなければなりません。

    SVG 属性で角度を指定する場合、 \<angle> は以下のように定義されます。

    ```plain
    angle ::= number ("deg" | "grad" | "rad")?
    ```

    \<angle> の単位の識別子は、すべて小文字でなければなりません。

    SVG DOM 内での \<angle> の値は {{domxref("SVGAngle")}} または {{domxref("SVGAnimatedAngle")}} を使用して表現されます。

## Anything（すべて）

- \<anything>

  - : 基本データ型の \<anything> は 0 個以上の文字の並びから構成されます。具体的には次の通りです。

    ```plain
    anything ::= Char*
    ```

    ここで [Char](https://www.w3.org/TR/2008/REC-xml-20081126/#NT-Char) は XML 1.0 , section 2.2 で定義されているとおり、文字を反映します。

## Clock-value（時間値）

- \<clock-value>

  - : 時間値は [SMIL アニメーション](https://www.w3.org/TR/2001/REC-smil-animation-20010904/)仕様と同じ構文です。時間値のための文法はここで繰り返されます。

    ```plain
    Clock-val         ::= Full-clock-val | Partial-clock-val
                          | Timecount-val
    Full-clock-val    ::= Hours ":" Minutes ":" Seconds ("." Fraction)?
    Partial-clock-val ::= Minutes ":" Seconds ("." Fraction)?
    Timecount-val     ::= Timecount ("." Fraction)? (Metric)?
    Metric            ::= "h" | "min" | "s" | "ms"
    Hours             ::= DIGIT+; any positive number
    Minutes           ::= 2DIGIT; range from 00 to 59
    Seconds           ::= 2DIGIT; range from 00 to 59
    Fraction          ::= DIGIT+
    Timecount         ::= DIGIT+
    2DIGIT            ::= DIGIT DIGIT
    DIGIT             ::= [0-9]
    ```

    `Timecount` 値の既定値は "`s`" (秒) です。時計の値にはホワイトスペースを埋め込むことはできませんが、先頭と末尾のホワイトスペースは無視されます。

    正規のクロック値の例は次の通りです。

    - 完全な時間値:
      - `02:30:03` = 2 時間 30 分と 3 秒
      - `50:00:10.25` = 50 時間 10 秒と 250 ミリ秒
    - 部分的な時間値:
      - `02:33` = 2 分 33 秒
      - `00:10.5` = 10.5 秒 = 10 秒と 500 ミリ秒
    - 時間カウント値:
      - `3.2h` = 3.2 時間 = 3 時間 12 分
      - `45min` = 45 分
      - `30s` = 30 秒
      - `5ms` = 5 ミリ秒
      - `12.467` = 12 秒と 467 ミリ秒
    - 小数値は、秒の（基数10の） 浮動小数点による定義です。したがって、
      - `00.5s` = 500 ミリ秒
      - `00:00.005` = 5 ミリ秒

## Color（色）

- \<color>

  - : 基本型 \<color> は、 sRGB 色空間の色に対する CSS2 互換の仕様です。 \<color> は SVG で {{SVGAttr("color")}} 属性を使用する場合に適用され、オプションで ICC ベースの色指定も用いる {{SVGAttr("fill")}}、{{SVGAttr("stroke")}}、{{SVGAttr("stop-color")}}、{{SVGAttr("flood-color")}}、{{SVGAttr("lighting-color")}} 属性の定義の部品です。

    SVG は、 [CSS2 の構文と基本データ型](https://www.w3.org/TR/2008/REC-CSS2-20080411/syndata.html#value-def-color)で定義されている、そして（実装に依存しますが）将来の [CSS Color Module Level 3](https://www.w3.org/TR/css-color-3/) で定義される、 \<color> の構文の選択肢すべてに対応しています。

    \<color> はキーワードまたは数値による RGB の指定です。

    これらの色キーワードに加えて、ユーザーは、ユーザー環境のオブジェクトが使用する色に対応するキーワードを指定することができます。このキーワードの規範的な定義は [User preferences for colors](https://www.w3.org/TR/2008/REC-CSS2-20080411/ui.html#system-colors) (CSS2, section 18.2) にあります。

    16 進数表記の RGB 値の形式は、 "`#`" の直後に 3 文字または 6 文字の 16 進数文字が続くものです。 3 桁の RGB 表記 (`#rgb`) は 0 を足すのではなく、数字を複製することで 6 桁の形式 (`#rrggbb`) に変換されます。例えば `#fb0` は `#ffbb00` に展開されます。これにより、白 (`#ffffff`) を短い表記 (`#fff`) で指定することができるようにし、ディスプレイの色深度への依存を防ぎます。関数記法での RGB 値の形式は、 RGB の開始関数の後に、 3 つの数値（3 つの整数値または 3 つのパーセント値）のカンマ区切りリストが続き、その後に "`)`" が続きます。 RGB 関数は、大文字小文字を区別しない文字列 "`rgb(`" を使います。例えば "`RGB(`" や "`rGb(`" でもかまいません。互換性のために、すべて小文字の "`rgb(`" を推奨します。整数値 `255` は `100%` に対応し、 16 進表記では `F` や `FF` に対応します。すなわち、 `rgb(255 255 255)` = `rgb(100% 100% 100%)` = `#FFF` です。数値の周りにはホワイトスペース文字を入れることができます。RGB 色はすべて sRGB 色空間で指定します。 sRGB を使用することで、曖昧さのない、客観的に測定可能な色の定義を提供し、国際標準と関連付けることができます。

    ```plain
    color    ::= "#" hexdigit hexdigit hexdigit (hexdigit hexdigit hexdigit)?
                  | "rgb("integer integer integer")"
                  | "rgb("integer "%" integer "%" integer "%)"
                  | color-keyword
    hexdigit ::= [0-9A-Fa-f]
    ```

    ここで `color-keyword` は、 [CSS Color Module Level 3](https://www.w3.org/TR/css-color-3/) に掲載されている色キーワードの一つ、または [User preferences for colors](https://www.w3.org/TR/2008/REC-CSS2-20080411/ui.html#system-colors) (CSS2, section 18.2) に掲載されているシステム色キーワードの一つと (大文字と小文字を区別しないで) 一致します。

    対応する SVG DOM インターフェイスは、 CSS で定義されているものを定義しています。 ICC ベースの色を指定する機能を含む SVG の色に対する拡張は、 DOM インターフェイス {{domxref("SVGColor")}} を使用して表します。

## Coordinate（座標）

- \<coordinate>

  - : \<coordinate> は関連する軸に沿って (X 座標は X 軸に沿って、 Y 座標は Y 軸に沿って) ユーザー座標系の原点から所定の座標までの距離を指定します。その構文は [\<length>](#length) と同一です。

    SVG DOM 内では、 \<coordinate> の値は {{domxref("SVGLength")}} もしくは {{domxref("SVGAnimatedLength")}} で表現されます。

## Frequency（周波数）

- \<frequency>

  - : 周波数値は、聴覚プロパティで使用します。 CSS2 での定義では、周波数値は [\<number>](#number) の直後に周波数単位識別子が続くものです。周波数単位識別子は次のとおりです。

    - `Hz`: ヘルツ
    - `kHz`: キロヘルツ

    周波数値は負にすることができません。

## FuncIRI

- \<FuncIRI>
  - : 参照するための関数記法。この参照の構文は {{cssxref("url", "CSS URI")}} と同じです。

## Integer（整数）

- \<integer>

  - : \<integer> は省略可能な符号文字 (`+` または `-`) の後、 1 桁以上の数字 `0` から `9` を指定します。

    ```plain
    integer ::= [+-]? [0-9]+
    ```

    符号文字を示していない場合、数値は非負になります。

    具体的な属性やプロパティにおいて別段の記載がない限り、 \<integer> の範囲は（最小で） `-2147483648` から `2147483647` までです。

    SVG DOM 内では、 \<integer> は `number` または {{domxref("SVGAnimatedInteger")}} として表現されます。

## IRI

- \<IRI>

  - : **I**nternationalized **R**esource **I**dentifier （国際化リソース識別子）です。

    インターネットでは、リソースは _IRI_ （国際化リソース識別子）を使用して識別されます。例えば、 `http://example.com` にある `someDrawing.svg` と呼ばれる SVG ファイルは以下のような _IRI_ になります。

    ```plain
    http://example.com/someDrawing.svg
    ```

    _IRI_ の一部として _IRI_ フラグメント識別子を記載することで、_IRI_ が XML 文書内の具体的な要素を指定することもできます。 _IRI_ フラグメント識別子のある _IRI_ は、オプションで _IRI_ のベースとなる文字が続き、その後に "`#`" 文字が続き、その後に _IRI_ フラグメント識別子が続きます。例えば、ファイル `someDrawing.svg` 内の "`Lamppost`" を ID とする要素を指定するには、次の _IRI_ を使用することができます。

    ```plain
    http://example.com/someDrawing.svg#Lamppost
    ```

    _IRI_ は {{SVGAttr("href")}} 属性で使用します。
    いくつかの属性は、 _IRI_ と文字列の両方をコンテンツとして許します。相対 IRI と文字列が曖昧にならないように、関数記法 \<FuncIRI> を使用します。これは関数記法で区切られた _IRI_ です。メモ: 歴史的な理由から、区切り文字は CSS 仕様との互換性のために "`url(`" と "`)`" です。 _FuncIRI_ 形式は、プレゼンテーション属性で使用します。

    SVG は他のオブジェクトへの _IRI_ 参照（絶対参照と相対参照の両方）を多用します。例えば、長方形を線形グラデーションで塗りつぶすには、最初に {{SVGElement("linearGradient")}} 要素を定義し、それに ID を与えます。

    ```html
    <linearGradient xml:id="MyGradient">...</linearGradient>
    ```

    次に、長方形の {{SVGAttr("fill")}} 属性の値として線形グラデーションを参照するには、次のようにします。

    ```html
    <rect fill="url(#MyGradient)" />
    ```

    SVG は2種類の _IRI_ 参照に対応しています。

    - **ローカル _IRI_ 参照**: _IRI_ 参照は、\<absoluteIRI> または \<relativeIRI> を持たず、フラグメント識別子（`#<elementID>` または `#xpointer(id<elementID>)`）のみを持ちます。
    - **非ローカル _IRI_ 参照**: _IRI_ 参照が \<absoluteIRI> または \<relativeIRI> を持ちます。

      SVG における IRI 参照の完全な仕様は、 [SVG 1.1 (2nd Edition): IRI references](https://www.w3.org/TR/SVG/linking.html#IRIReference) を参照してください。

## length（長さ）

- \<length>

  - : 長さは距離の寸法です。数値とともに単位を提供します。
    SVG2 仕様書では、この属性の構文と値について CSS {{cssxref("length")}} のデータ型と単位に合わせています。
    長さの単位識別子を指定されなければならず、長さの単位識別子の値は大文字と小文字を区別しません。
    構文は CSS の `<length>` の構文に従います。

    ```plain
    length ::= <number> (<absolute-length> | <relative-length>)?
    ```

    SVG1.1 で定義されている SVG 固有のプロパティと、それに対応するプレゼンテーション属性では、値の単位識別子は省略可能です。指定されなかった場合、長さの値は現在のユーザー座標系における距離を表します。長さ識別子は SVG で定義されようが CSS で定義されようが、すべてのプロパティのプレゼンテーション属性で使用する場合は小文字でなければなりません。この大文字小文字の区別は SVG2 では CSS と仕様を合わせるために緩和されています。

    プロパティでない \<length> の定義では、パーセント (`%`) 単位識別子も指定できることに注意し てください。
    長さのパーセント値の意味は、長さのパーセント値が指定された属性によって異なります。よくあるケースは 2 つあります。

    - パーセントの長さの値がビューポートの幅または高さの割合を表す場合
    - パーセントの長さの値が、指定されたオブジェクトの外接ボックスの幅または高さの割合を表す場合。

    SVG DOM 内では、 \<length> の値は{{domxref("SVGLength")}} もしくは {{domxref("SVGAnimatedLength")}} で表現されます。

## List-of-Ts（T のリスト）

- \<list-of-Ts>

  - : （ここで _T_ は何らかの型です。）リストは区切られた一連の値から構成されます。明示的に異なる記述がない限り、 SVG の XML 属性内のリストはカンマ区切り（オプションでカンマの前後にホワイトスペースを含む）かホワイトスペース区切りのどちらかになります。

    リスト内のホワイトスペースは、 "space" (`U+0020`), "tab" (`U+0009`), "line feed" (`U+000A`), "carriage return" (`U+000D`), and "form-feed" (`U+000C`) の 1 つ以上の連続した文字で定義します。

    以下は EBNF 文法のテンプレートです。

    ```plain
    list-of-Ts ::= T
                    | T, list-of-Ts
    ```

    SVG DOM 内では、 "List-of-Ts" 型の値は、具体的な型 _T_ に固有のインターフェイスで表します。例えば、 SVG DOM 内では {{domxref("SVGLengthList")}} または {{domxref("SVGAnimatedLengthList")}} オブジェクトを使用して表します。

## Name（名前）

- \<name>

  - : 名前。文字列で、構文上意味のあるいくつかの文字が許されません。

    ```plain
    name ::= [^,()#x20#x9#xD#xA] /* any char except ",", "(", ")" or wsp */
    ```

## Number（数値）

- \<number>

  - : 実数を指定する方法は 2 つあります。スタイルシートで使用する場合、実数は以下のように定義します。

    ```plain
    number ::= integer
                | [+-]? [0-9]* "." [0-9]+
    ```

    この構文は CSS の定義（CSS2、4.3.1 節）と同じです。

    SVG属性で使用する場合、 \<number> の定義は異なり、大きな数値をより簡潔に指定できるようにしています。

    ```plain
    number ::= integer ([Ee] integer)?
                | [+-]? [0-9]* "." [0-9]+ ([Ee] integer)?
    ```

    SVG DOM 内では \<number> は浮動小数点で表され、 {{domxref("SVGNumber")}} または {{domxref("SVGAnimatedNumber")}} で表します。

## Number-optional-number（数値とオプションの数値）

- \<number-optional-number>

  - : 2 つの \<number> の組み合わせで、 2 番目の \<number> は省略可能です。

    ```plain
    number-optional-number ::= number
                                | number, number
    ```

    SVG DOM では、 {{domxref("SVGAnimatedInteger")}} または {{domxref("SVGAnimatedNumber")}} オブジェクトのペアを使用して表します。

## Opacity value（不透明度値）

- \<opacity-value>
  - : 現在のオブジェクトが塗りつぶされている色やコンテンツの不透明度を[数値](#number)で指定します。 `0.0` （完全に透過）から `1.0` （完全に不透明）の範囲外の値はこの範囲に補正されます。

## Paint（描画方法）

- \<paint>

  - : プロパティ {{SVGAttr("fill")}} と {{SVGAttr("stroke")}} の値は、指定されたグラフィック要素を塗りつぶしたり描画したりするときに使用する入力の型を定義します。
    \<paint> で利用できるオプションと構文は以下の通りです。

    ```plain
    paint ::= none | <color> | <url> [none | <color>]? | context-fill | context-stroke
    ```

    `context-fill` と `context-stroke` の値により、 [marker](/ja/docs/Web/SVG/Element/marker) と [use](/ja/docs/Web/SVG/Element/use) 要素の値を継承することができます。

    SVG DOM 内では、 \<paint> vの値は {{domxref("SVGPaint")}} オブジェクトを使用して表します。

## Percentage（パーセント値）

- \<percentage>

  - : パーセント値は、数字に続く "`%`" 文字で指定します。

    ```plain
    percentage ::= number "%"
    ```

    スタイルシートと属性のどちらでパーセント値を指定するかによって、 \<number> の定義が変わることに注意し てください。

    パーセント値は常に別の値（例えば長さ）に対する相対値です。パーセント値を許容する各属性やプロパティは、パーセント値が参照する参照値も定義しています。

    SVG DOM 内では、 {{domxref("SVGNumber")}} または {{domxref("SVGAnimatedNumber")}} オブジェクトを使用して表します。

## Time（時間）

- \<time>

  - : 時間は、 \<number> の直後に時刻単位識別子が続きます。時刻単位識別子は次の通りです。

    - `ms`: milliseconds
    - `s`: seconds

## Transform-list（座標変換リスト）

- \<transform-list>

  - : \<transform-list> 座標変換のリストを指定するために使用します。 \<transform-list> で利用可能な値の詳細は {{SVGAttr("transform")}} 属性定義で指定されています。

    SVG DOM 内では、 \<transform-list> 値は {{domxref("SVGTransformList")}} または {{domxref("SVGAnimatedTransformList")}} オブジェクトを使用して表します。

## URL

- URL

  - : **U**niform **R**esource **L**ocator （統一リソース指定子）です。

    URL は {{Glossary("Unicode")}} 文字の並びで、内部または外部のリソースへのアドレスを構築します。

    SVG 2 以前では URL の仕様が標準化されていなかったため、より制限の多い [IRI](#iri) データ型が代わりに使用されていました。
