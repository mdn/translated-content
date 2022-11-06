---
title: Content type
slug: Web/SVG/Content_type
---

SVG は多くのデータ型を使用しています。この記事では、これらのデータ型とその構文、使用目的の説明を掲載しています。

## Angle (角度)

- \<angle>

  - : 角度は 2 つの方法のいずれかで指定します。スタイルシートのプロパティの値に使用する際、 \<angle> は次のように定義されています。

    ```
    angle ::= number (~"deg" | ~"grad" | ~"rad")?
    ```

    `deg` は度を示し、 `grad` はグラードを示し、 `rad` はラジアンを示します。

    CSS2 で定義されたプロパティについては、角度単位の識別子を提供しなければなりません。 SVG 固有のプロパティとそれに対応するプレゼンテーション属性の角度値については、角度の単位識別子は省略可能です。提供しなかった場合、角度の値は度単位であるとみなされます。すべてのプロパティのプレゼンテーション属性において、定義されているのが SVG1.1 であるか CSS2 であるかに関わらず、角度の識別子を指定する場合は小文字でなければなりません。

    SVG 属性で角度を指定する場合、 \<angle> は以下のように定義されます。

    ```
    angle ::= number ("deg" | "grad" | "rad")?
    ```

    \<angle> の単位の識別子は、すべて小文字でなければなりません。

    SVG DOM 内での \<angle> の値は {{domxref("SVGAngle")}} または {{domxref("SVGAnimatedAngle objects")}} を使用して表現されます。

## Anything (すべて)

- \<anything>

  - : 基本データ型の \<anything> は 0 個以上の文字の並びから構成されます。具体的には次の通りです。

    ```
    anything ::= Char*
    ```

    ここで [Char](https://www.w3.org/TR/2008/REC-xml-20081126/#NT-Char) は XML 1.0 , section 2.2 で定義されているとおり、文字を反映します。

## Clock-value

- \<clock-value>

  - : Clock values have the same syntax as in [SMIL Animation](https://www.w3.org/TR/2001/REC-smil-animation-20010904/) specification. The grammar for clock values is repeated here:

    ```
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

    For `Timecount` values, the default metric suffix is "`s`" (for seconds). No embedded white space is allowed in clock values, although leading and trailing white space characters will be ignored.

    The following are examples of legal clock values:

    - Full clock values:
      `02:30:03` = 2 hours, 30 minutes and 3 seconds
      `50:00:10.25` = 50 hours, 10 seconds and 250 milliseconds
    - Partial clock value:
      `02:33` = 2 minutes and 33 seconds
      `00:10.5` = 10.5 seconds = 10 seconds and 500 milliseconds
    - Timecount values:
      `3.2h` = 3.2 hours = 3 hours and 12 minutes
      `45min`= 45 minutes
      `30s` = 30 seconds
      `5ms` = 5 milliseconds
      `12.467`= 12 seconds and 467 milliseconds

    Fractional values are just (base 10) floating point definitions of seconds. Thus:

    `00.5s = 500 milliseconds 00:00.005 = 5 milliseconds`

## Color

- \<color>

  - : The basic type \<color> is a CSS2 compatible specification for a color in the sRGB color space. \<color> applies to SVG's use of the {{SVGAttr("color")}} attribute and is a component of the definitions of attributes {{SVGAttr("fill")}}, {{SVGAttr("stroke")}}, {{SVGAttr("stop-color")}}, {{SVGAttr("flood-color")}}, and {{SVGAttr("lighting-color")}}, which also offer optional ICC-based color specifications.

    SVG supports all of the syntax alternatives for \<color> defined in [CSS2 syntax and basic data types](https://www.w3.org/TR/2008/REC-CSS2-20080411/syndata.html#value-def-color), and (depend on the implementation) in the future [CSS Color Module Level 3](https://www.w3.org/TR/css3-color/).

    A \<color> is either a keyword or a numerical RGB specification.

    In addition to these color keywords, users may specify keywords that correspond to the colors used by objects in the user's environment. The normative definition of these keywords is found in [User preferences for colors](https://www.w3.org/TR/2008/REC-CSS2-20080411/ui.html#system-colors) (CSS2, section 18.2).

    The format of an RGB value in hexadecimal notation is a "`#`" immediately followed by either three or six hexadecimal characters. The three-digit RGB notation (`#rgb`) is converted into six-digit form (`#rrggbb`) by replicating digits, not by adding zeros. For example, `#fb0` expands to `#ffbb00`. This ensures that white (`#ffffff`) can be specified with the short notation (`#fff`) and removes any dependencies on the color depth of the display. The format of an RGB value in the functional notation is an RGB start-function, followed by a comma-separated list of three numerical values (either three integer values or three percentage values) followed by "`)`". An RGB start-function is the case-insensitive string "`rgb(`", for example "`RGB(`" or "`rGb(`". For compatibility, the all-lowercase form "`rgb(`" is preferred. The integer value `255` corresponds to `100%`, and to `F` or `FF` in the hexadecimal notation: `rgb(255,255,255)` = `rgb(100%,100%,100%)` = `#FFF`. White space characters are allowed around the numerical values. All RGB colors are specified in the sRGB color space. Using sRGB provides an unambiguous and objectively measurable definition of the color, which can be related to international standards.

    ```
    color    ::= "#" hexdigit hexdigit hexdigit (hexdigit hexdigit hexdigit)?
                 | "rgb("integer, integer, integer")"
                 | "rgb("integer "%", integer "%", integer "%)"
                 | color-keyword
    hexdigit ::= [0-9A-Fa-f]
    ```

    where `color-keyword` matches (case insensitively) one of the color keywords listed in [CSS Color Module Level 3](https://www.w3.org/TR/css3-color/), or one of the system color keywords listed in [User preferences for colors](https://www.w3.org/TR/2008/REC-CSS2-20080411/ui.html#system-colors) (CSS2, section 18.2).

    The corresponding SVG DOM interface definitions for \<color> are defined the one defined by CSS. SVG's extension to color, including the ability to specify ICC-based colors, are represented using DOM interface {{domxref("SVGColor")}}.

## Coordinate

- \<coordinate>

  - : \<coordinate> は関連する軸に沿って (X 座標は X 軸に沿って、 Y 座標は Y 軸に沿って) ユーザー座標系の原点から所定の座標までの距離を指定します。その構文は [\<length>](/ja/docs/Web/SVG/Content_type#length) と同一です。

    SVG DOM 内では、 \<coordinate> の値は {{domxref("SVGLength")}} もしくは {{domxref("SVGAnimatedLength")}} で表現されます。

## Frequency

- \<frequency>

  - : Frequency values are used with aural properties. As defined in CSS2, a frequency value is a [\<number>](/ja/docs/Web/SVG/Content_type#number) immediately followed by a frequency unit identifier. The frequency unit identifiers are:

    - `Hz`: Hertz
    - `kHz`: kilo Hertz

    Frequency values may not be negative.

## FuncIRI

- \<FuncIRI>
  - : Functional notation for a reference. The syntax for this reference is the same as the {{cssxref("url()", "CSS URI")}}.

## ICCColor

- \<icccolor>

  - : An \<icccolor> is an ICC color specification. In SVG 1.1, an ICC color specification is given by a name, which references a {{SVGElement("color-profile")}} element, and one or more color component values. The grammar is as follows:

    ```
    icccolor ::= "icc-color(" name (, number)+ ")"
    ```

    The corresponding SVG DOM interface for \<icccolor> is {{domxref("SVGICCColor")}}.

## Integer

- \<integer>

  - : An \<integer> is specified as an optional sign character (`+` or `-`) followed by one or more digits `0` to `9`:

    ```
    integer ::= [+-]? [0-9]+
    ```

    If the sign character is not present, the number is non-negative.

    Unless stated otherwise for a particular attribute or property, the range for an \<integer> encompasses (at a minimum) `-2147483648` to `2147483647`.

    Within the SVG DOM, an \<integer> is represented as a `number` or an {{domxref("SVGAnimatedInteger")}}.

## IRI

- \<IRI>

  - : An **I**nternationalized **R**esource **I**dentifier.

    On the Internet, resources are identified using _IRI_s (Internationalized Resource Identifiers). For example, an SVG file called `someDrawing.svg` located at <http://example.com> might have the following \_IRI_:

    ```
    http://example.com/someDrawing.svg
    ```

    An _IRI_ can also address a particular element within an XML document by including an _IRI_ fragment identifier as part of the _IRI_. An _IRI_ which includes an _IRI_ fragment identifier consists of an optional base _IRI_, followed by a "`#`" character, followed by the _IRI_ fragment identifier. For example, the following _IRI_ can be used to specify the element whose ID is "`Lamppost`" within file `someDrawing.svg`:

    ```
    http://example.com/someDrawing.svg#Lamppost
    ```

    _IRI_s are used in the {{SVGAttr("xlink:href")}} attribute. Some attributes allow both \_IRI_s and text strings as content. To disambiguate a text string from a relative IRI, the functional notation \<FuncIRI> is used. This is an \_IRI_ delimited with a functional notation. Note: For historical reasons, the delimiters are "`url(`" and "`)`", for compatibility with the CSS specifications. The _FuncIRI_ form is used in presentation attributes .

    SVG makes extensive use of _IRI_ references, both absolute and relative, to other objects. For example, to fill a rectangle with a linear gradient, you first define a {{SVGElement("linearGradient")}} element and give it an ID, as in:

    ```
    <linearGradient xml:id="MyGradient">...</linearGradient>
    ```

    You then reference the linear gradient as the value of the {{SVGAttr("fill")}} attribute for the rectangle, as in the following example:

    ```
    <rect fill="url(#MyGradient)"/>
    ```

    SVG supports two types of _IRI_ references:

    - **local _IRI_ references**, where the IRI reference does not contain an `<absoluteIRI>` or `<relativeIRI>` and thus only contains a fragment identifier (i.e., `#<elementID>` or `#xpointer(id<elementID>)`).
    - **non-local _IRI_ references**, where the _IRI_ reference does contain an `<absoluteIRI>` or `<relativeIRI>`.

    For the full specification of IRI references in SVG, see [SVG 1.1 (2nd Edition): IRI references](https://www.w3.org/TR/SVG/linking.html#IRIReference).

## Length (長さ)

- \<length>

  - : \<length> は距離の寸法です。数値とともに単位を提供します。長さは 2 つの方法のいずれかで指定します。スタイルシート内で使用する際、 \<length> は次のように定義されています。

    ```
    length ::= number (~"em" | ~"ex" | ~"px" | ~"in" | ~"cm" | ~"mm" | ~"pt" | ~"pc")?
    ```

    単位の識別子の意味については [CSS2 の仕様を参照してください](http://www.w3.org/TR/2008/REC-CSS2-20080411/syndata.html#length-units)。

    CSS2 で定義されたプロパティでは、 \<length> の単位の識別子を提供する必要があります。 SVG 固有のプロパティやプレゼンテーション属性に定義する場合は、単位の識別子は任意となります。もし単位の識別子が提供されなかった場合、 \<length> は現在のユーザー座標系で表されます。プレゼンテーション属性内のすべてのプロパティでは、 SVG1.1 もしくは CSS2 の中で単位の識別子が定義されているか、もし指定するならば、すべて小文字で無ければなりません。

    SVG 属性に長さを使用する場合、 \<length> は以下のように定義されます：

    ```
    length ::= number ("em" | "ex" | "px" | "in" | "cm" | "mm" | "pt" | "pc" | "%")?
    ```

    SVG 属性の中での \<length> の単位の識別子はすべて小文字にしなければいけません。

    なお、プロパティではない \<length> の定義では、パーセント単位の識別子も可能です。パーセント値の長さの値の意味は、パーセント値の長さの値が指定されている属性に依存する。よくある 2 つの例を挙げます。

    - SVG ビューポートの幅または高さの割合を表す場合
    - 指定されたオブジェクト上のバウンディングボックスの幅または高さの割合を表す場合

    SVG DOM 内では、 \<length> の値は{{domxref("SVGLength")}} もしくは {{domxref("SVGAnimatedLength")}} で表現されます。

## List-of-\_T_s

- \<list-of-\_T_s>

  - : (Where _T_ is some type.) A list consists of a separated sequence of values. Unless explicitly described differently, lists within SVG's XML attributes can be either comma-separated (with optional white space before or after the comma), or white space-separated.

    White space in lists is defined as one or more of the following consecutive characters: "space" (`U+0020`), "tab" (`U+0009`), "line feed" (`U+000A`), "carriage return" (`U+000D`), and "form-feed" (`U+000C`).

    The following is a template for an EBNF grammar describing the \<list-of-\_T_s> syntax:

    ```
    list-of-Ts ::= T
                   | T, list-of-Ts
    ```

    Within the SVG DOM, values of a \<list-of-_T_s> type are represented by an interface specific for the particular type \_T_. For example, a \<list-of-lengths> is represented in the SVG DOM using an {{domxref("SVGLengthList")}} or {{domxref("SVGAnimatedLengthList")}} object.

## Name

- \<name>

  - : A name, which is a string where a few characters of syntactic significance are disallowed.

    ```
    name  ::= [^,()#x20#x9#xD#xA] /* any char except ",", "(", ")" or wsp */
    ```

## Number

- \<number>

  - : Real numbers are specified in one of two ways. When used in a stylesheet, a \<number> is defined as follows:

    ```
    number ::= integer
               | [+-]? [0-9]* "." [0-9]+
    ```

    This syntax is the same as the definition in CSS (CSS2, section 4.3.1).

    When used in an SVG attribute, a \<number> is defined differently, to allow numbers with large magnitudes to be specified more concisely:

    ```
    number ::= integer ([Ee] integer)?
               | [+-]? [0-9]* "." [0-9]+ ([Ee] integer)?
    ```

    Within the SVG DOM, a \<number> is represented as a float, {{domxref("SVGNumber")}} or a {{domxref("SVGAnimatedNumber")}}.

## Number-optional-number

- \<number-optional-number>

  - : A pair of \<number>s, where the second \<number> is optional.

    ```
    number-optional-number ::= number
                               | number, number
    ```

    In the SVG DOM, a \<number-optional-number> is represented using a pair of {{domxref("SVGAnimatedInteger")}} or {{domxref("SVGAnimatedNumber")}} objects.

## Opacity value

- \<opacity-value>
  - : The opacity of the color or the content the current object is filled with, as a [\<number>](/ja/docs/Web/SVG/Content_type#number). Any values outside the range `0.0` (fully transparent) to `1.0` (fully opaque) will be clamped to this range.

## Paint

- \<paint>

  - : The values for properties {{SVGAttr("fill")}} and {{SVGAttr("stroke")}} are specifications of the type of paint to use when filling or stroking a given graphics element. The available options and syntax for \<paint> are described in [Specifying paint](https://www.w3.org/TR/SVG/painting.html#SpecifyingPaint).

    Within the SVG DOM, \<paint> values are represented using {{domxref("SVGPaint")}} objects.

## Percentage

- \<percentage>

  - : Percentages are specified as a number followed by a "`%`" character:

    ```
    percentage ::= number "%"
    ```

    Note that the definition of \<number> depends on whether the percentage is specified in a stylesheet or in an attribute that is not also a presentation attribute.

    Percentage values are always relative to another value (for example, a length). Each attribute or property that allows percentages also defines the reference distance measurement to which the percentage refers.

    Within the SVG DOM, a \<percentage> is represented using an {{domxref("SVGNumber")}} or {{domxref("SVGAnimatedNumber")}} object.

## Time

- \<time>

  - : A time value is a \<number> immediately followed by a time unit identifier. The time unit identifiers are:

    - `ms`: milliseconds
    - `s`: seconds

## Transform-list

- \<transform-list>

  - : A \<transform-list> is used to specify a list of coordinate system transformations. A detailed description of the possible values for a \<transform-list> is given in the {{SVGAttr("transform")}} attribute definition.

    Within the SVG DOM, a \<transform-list> value is represented using an {{domxref("SVGTransformList")}} or {{domxref("SVGAnimatedTransformList")}} object.

## URL

- URL

  - : A **U**niform **R**esource **L**ocator.

    A URL is a sequence of {{Glossary("Unicode")}} characters, building an address to an internal or external resource.

    Before SVG 2, the more limited [IRI](#iri) content type was used instead, because the URL specification was not standardized before.
