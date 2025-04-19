---
title: Content type
slug: Web/SVG/Guides/Content_type
original_slug: Web/SVG/Content_type
---

## Angle

- \<angle>

  - : Angles are specified in one of two ways. When used in the value of a property in a stylesheet, an \<angle> is defined as follows:

    ```
    angle ::= number (~"deg" | ~"grad" | ~"rad")?
    ```

    where deg indicates degrees, grad indicates grads and rad indicates radians.

    For properties defined in CSS2, an angle unit identifier must be provided. For angle values in SVG-specific properties and their corresponding presentation attributes, the angle unit identifier is optional. If not provided, the angle value is assumed to be in degrees. In presentation attributes for all properties, whether defined in SVG1.1 or in CSS2, the angle identifier, if specified, must be in lower case.

    When angles are used in an SVG attribute, \<angle> is instead defined as follows:

    ```
    angle ::= number ("deg" | "grad" | "rad")?
    ```

    The unit identifiers in such \<angle> values must be in lower case.

    In the SVG DOM, \<angle> values are represented using {{domxref("SVGAngle")}} or {{domxref("SVGAnimatedAngle objects")}}.

## Anything

- \<anything>

  - : O tipo básico \<anything> é uma sequência de zero ou mais caracteres. Especificamente:

    ```
    anything ::= Char*
    ```

    onde [Char](https://www.w3.org/TR/2008/REC-xml-20081126/#NT-Char) é a produção de um caractere, como definido no XML 1.0 , seção 2.2).

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

    For `Timecount` values, the default metric suffix is "s" (for seconds). No embedded white space is allowed in clock values, although leading and trailing white space characters will be ignored.

    The following are examples of legal clock values:

    - Full clock values:
      `02:30:03` = 2 hours, 30 minutes and 3 seconds
      `50:00:10.25` = 50 hours, 10 seconds and 250 milliseconds
    - Partial clock value:
      `02:33` = 2 minutes and 33 seconds
      `00:10.5` = 10.5 seconds = 10 seconds and 500 milliseconds
    - Timecount values:
      `3.2h` = 3.2 hours = 3 hours and 12 minutes
      `45min` = 45 minutes
      `30s` = 30 seconds
      `5ms` = 5 milliseconds
      `12.467` = 12 seconds and 467 milliseconds

    Fractional values are just (base 10) floating point definitions of seconds. Thus:

    `00.5s = 500 milliseconds 00:00.005 = 5 milliseconds`

## Color

- \<color>

  - : The basic type \<color> is a CSS2 compatible specification for a color in the sRGB color space. \<color> applies to SVG's use of the {{SVGAttr("color")}} attribute and is a component of the definitions of attributes {{SVGAttr("fill")}}, {{SVGAttr("stroke")}}, {{SVGAttr("stop-color")}}, {{SVGAttr("flood-color")}} and {{SVGAttr("lighting-color")}}, which also offer optional ICC-based color specifications.

    SVG supports all of the syntax alternatives for \<color> defined in [CSS2 syntax and basic data types](https://www.w3.org/TR/2008/REC-CSS2-20080411/syndata.html#value-def-color), and (depend on the implementation) in the future [CSS Color Module Level 3](https://www.w3.org/TR/css3-color/).

    A \<color> is either a keyword or a numerical RGB specification.

    In addition to these color keywords, users may specify keywords that correspond to the colors used by objects in the user's environment. The normative definition of these keywords is found in [User preferences for colors](https://www.w3.org/TR/2008/REC-CSS2-20080411/ui.html#system-colors) (CSS2, section 18.2).

    The format of an RGB value in hexadecimal notation is a "#" immediately followed by either three or six hexadecimal characters. The three-digit RGB notation (#rgb) is converted into six-digit form (#rrggbb) by replicating digits, not by adding zeros. For example, `#fb0` expands to `#ffbb00`. This ensures that white (`#ffffff`) can be specified with the short notation (`#fff`) and removes any dependencies on the color depth of the display. The format of an RGB value in the functional notation is an RGB start-function followed by a comma-separated list of three numerical values (either three integer values or three percentage values) followed by ")". An RGB start-function is the case-insensitive string "rgb(", for example "RGB(" or "rGb(". For compatibility, the all-lowercase form "rgb(" is preferred. The integer value 255 corresponds to 100%, and to F or FF in the hexadecimal notation: `rgb(255,255,255)` = `rgb(100%,100%,100%)` = `#FFF`. White space characters are allowed around the numerical values. All RGB colors are specified in the sRGB color space. Using sRGB provides an unambiguous and objectively measurable definition of the color, which can be related to international standards.

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

  - : A \<coordinate> is a length in the user coordinate system that is the given distance from the origin of the user coordinate system along the relevant axis (the x-axis for X coordinates, the y-axis for Y coordinates). Its syntax is the same as that for [\<length>](/pt-BR/docs/Web/SVG#length).

    Within the SVG DOM, a \<coordinate> is represented as an {{domxref("SVGLength")}} or an {{domxref("SVGAnimatedLength")}}.

## Frequency

- \<frequency>

  - : Frequency values are used with aural properties. As defined in CSS2, a frequency value is a [\<number>](/pt-BR/docs/Web/SVG#number) immediately followed by a frequency unit identifier. The frequency unit identifiers are:

    - `Hz`: Hertz
    - `kHz`: kilo Hertz

    Frequency values may not be negative.

## FuncIRI

- \<FuncIRI>
  - : Notação funcional para uma referência, a sintaxe para esta referência é a mesma que {{cssxref("uri", "CSS URI")}}

## ICCColor

- \<icccolor>

  - : An \<icccolor> is an ICC color specification. In SVG 1.1, an ICC color specification is given by a name, which references a {{SVGElement("color-profile")}} element, and one or more color component values. The grammar is as follows:

    ```
    icccolor ::= "icc-color(" name (, number)+ ")"
    ```

    The corresponding SVG DOM interface for \<icccolor> is {{domxref("SVGICCColor")}}.

## Integer

- \<integer>

  - : An \<integer> is specified as an optional sign character ("+" or "-") followed by one or more digits "0" to "9":

    ```
    integer ::= [+-]? [0-9]+
    ```

    If the sign character is not present, the number is non-negative.

    Unless stated otherwise for a particular attribute or property, the range for an \<integer> encompasses (at a minimum) -2147483648 to 2147483647.

    Within the SVG DOM, an \<integer> is represented as a `number` or an {{domxref("SVGAnimatedInteger")}}.

## IRI

- \<IRI>

  - : An Internationalized Resource Identifier.

    On the Internet, resources are identified using _IRI_s (Internationalized Resource Identifiers). For example, an SVG file called someDrawing.svg located at `http://example.com` might have the following _IRI_:

    ```
    http://example.com/someDrawing.svg
    ```

    An _IRI_ can also address a particular element within an XML document by including an _IRI_ fragment identifier as part of the _IRI_. An _IRI_ which includes an _IRI_ fragment identifier consists of an optional base _IRI_, followed by a "#" character, followed by the _IRI_ fragment identifier. For example, the following _IRI_ can be used to specify the element whose ID is "Lamppost" within file someDrawing.svg:

    ```
    http://example.com/someDrawing.svg#Lamppost
    ```

    _IRI_s are used in the {{SVGAttr("xlink:href")}} attribute. Some attributes allow both _IRIs_ and text strings as content. To disambiguate a text string from a relative IRI, the functional notation \<FuncIRI> is used. This is simply an _IRI_ delimited with a functional notation. Note: For historical reasons, the delimiters are "url(" and ")", for compatibility with the CSS specifications. The _FuncIRI_ form is used in presentation attributes .

    SVG makes extensive use of _IRI_ references, both absolute and relative, to other objects. For example, to fill a rectangle with a linear gradient, you first define a {{SVGElement("linearGradient")}} element and give it an ID, as in:

    ```
    <linearGradient xml:id="MyGradient">...</linearGradient>
    ```

    You then reference the linear gradient as the value of the {{SVGAttr("fill")}} attribute for the rectangle, as in the following example:

    ```
    <rect fill="url(#MyGradient)"/>
    ```

    SVG supports two types of _IRI_ references:

    - local _IRI_ references, where the IRI reference does not contain an `<absoluteIRI>` or `<relativeIRI>` and thus only contains a fragment identifier (i.e., `#<elementID>` or `#xpointer(id<elementID>)`)
    - non-local _IRI_ references, where the _IRI_ reference does contain an `<absoluteIRI>` or `<relativeIRI>`

    For the full specification of IRI references in SVG, see [SVG 1.1 (2nd Edition): IRI references](https://www.w3.org/TR/SVG/linking.html#IRIReference).

## Length

- \<length>

  - : A length is a distance measurement, given as a number along with a unit. Lengths are specified in one of two ways. When used in a stylesheet, a \<length> is defined as follows:

    ```
    length ::= number (~"em" | ~"ex" | ~"px" | ~"in" | ~"cm" | ~"mm" | ~"pt" | ~"pc")?
    ```

    [See the CSS2 specification](https://www.w3.org/TR/2008/REC-CSS2-20080411/syndata.html#length-units) for the meanings of the unit identifiers.

    For properties defined in CSS2, a length unit identifier must be provided. For length values in SVG-specific properties and their corresponding presentation attributes, the length unit identifier is optional. If not provided, the length value represents a distance in the current user coordinate system. In presentation attributes for all properties, whether defined in SVG1.1 or in CSS2, the length identifier, if specified, must be in lower case.

    When lengths are used in an SVG attribute, a \<length> is instead defined as follows:

    ```
    length ::= number ("em" | "ex" | "px" | "in" | "cm" | "mm" | "pt" | "pc" | "%")?
    ```

    The unit identifiers in such \<length> values must be in lower case.

    Note that the non-property \<length> definition also allows a percentage unit identifier. The meaning of a percentage length value depends on the attribute for which the percentage length value has been specified. Two common cases are:

    - when a percentage length value represents a percentage of the viewport width or height
    - when a percentage length value represents a percentage of the bounding box width or height on a given object.

    In the SVG DOM, \<length> values are represented using {{domxref("SVGLength")}} or {{domxref("SVGAnimatedLength")}} objects.

## List-of-\_T_s

- \<list-of-\_T_s>

  - : (Quando _T_ é algum tipo.) Uma lista constituida por uma sequência de valores separados. A não ser que esteja descrito explicitamente de maneira diferente, as listas de atributos XML dentro do SVG podem ser separados por vírgula ou por espaços em branco.

    O espaço em branco nas listas é definido como um ou mais dos seguintes caracteres consecutivos: "espaço" (U + 0020), "tab" (U + 0009), "line feed" (U + 000A), "retorno" (U + 000D) e "form-feed" (U + 000C).

    Abaixo tem um modelo para uma gramática EBNF descrevendo a sintaxe da \<list-of-\_T_s>:

    ```
    list-of-Ts ::= T
                   | T, list-of-Ts
    ```

    Dentro do DOM do SVG, os tipo de valores da \<list-of-\_T_s> são representados por uma interface específica para o tipo particular T. Por exemplo, uma \<list-of-lengths> é representada no DOM do SVG utilizando um objeto {{domxref ("SVGLengthList")}} ou {{domxref ("SVGAnimatedLengthList")}}.

## Name

- \<name>

  - : Um nome, que é uma string, onde alguns personagens de importância sintática não são suportados.

    ```
    name  ::= [^,()#x20#x9#xD#xA] /* qualquer caractere exceto ",", "(", ")" ou espaço em branco */
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
  - : A opacidade da cor ou do conteúdo do objeto atual é preenchida através de um [\<number>](/pt-BR/docs/Web/SVG#number). Quaisquer valores fora da faixa de 0.0 (totalmente transparente) a 1.0 (totalmente opaco) será ajustada para este intervalo.

## Paint

- \<paint>

  - : Os valores das propriedades {{SVGAttr("fill")}} e {{SVGAttr("stroke")}} são especificações do tipo de pintura a ser utilizada quando o preenchimento ou acariciando um determinado elemento gráfico. As opções disponíveis e sintaxe para \<paint> estão descritos na [especificação de pintura](https://www.w3.org/TR/SVG/painting.html#SpecifyingPaint).

    Dentro do DOM do SVG, os valores do \<paint> são representados usando objetos {{domxref("SVGPaint")}}.

## Percentage

- \<percentage>

  - : Percentages are specified as a number followed by a "%" character:

    ```
    percentage ::= number "%"
    ```

    Note that the definition of \<number> depends on whether the percentage is specified in a stylesheet or in an attribute that is not also a presentation attribute.

    Percentage values are always relative to another value, for example a length. Each attribute or property that allows percentages also defines the reference distance measurement to which the percentage refers.

    Within the SVG DOM, a \<percentage> is represented using an {{domxref("SVGNumber")}} or {{domxref("SVGAnimatedNumber")}} object.

## Time

- \<time>

  - : O valor de tempo é um \<number> imediatamente seguida por um indentificador de unidade de tempo. Os indicadores de unidade de tempo são:

    - ms: milisegundos
    - s: segundos

## Transform-list

- \<transform-list>

  - : A \<transform-list> é utilizado para especificar uma lista de transformações das coordenadas do sistema. A descrição detalhada dos valores possíveis para a \<transform-list> é dada no {{SVGAttr("transform")}} atribuir definição.

    Dentro do DOM do SVG, o valor \<transform-list> é representado usando um objeto {{domxref("SVGTransformList")}} ou {{domxref("SVGAnimatedTransformList")}}.
