---
title: 内容类型
slug: Web/SVG/Content_type
---

{{SVGRef}}

SVG 中使用了许多数据类型。本文列出了这些数据类型以及它们的语法和用途的描述。

## 角度

- \<angle>

  - : 可以用两种办法指定角度。如果用在样式表的属性的值中，`<angle>` 可以用如下方法定义：`plain angle ::= number (~"deg" | ~"grad" | ~"rad")?` 在这里 deg 标识了度数，grad 标识了斜率，rad 标识了弧度。对于定义在 CSS2 中的属性，必须提供一个角度单位标识符。对于在 SVG 特有的属性和它们对应的外观属性中的角度值，角度单位标识符是可选的。如果没有提供，角度值会被潜在分配一个度数单位。在所有元素的外观属性中，无论是在 SVG1.1 中定义的，还是在 CSS2 中定义的，如果指定了角度标识符，角度标识符必须是小写的。如果角度用在一个 SVG 属性中，`<angle>`可以用以下方式定义：

    ```plain
    angle ::= number ("deg" | "grad" | "rad")?
    ```

    在这个 \<angle> 值中，单位标识符必须是小写的。在 SVG DOM 中，\<angle> 值使用{{domxref("SVGAngle")}}或{{domxref("SVGAnimatedAngle objects")}}表达。

## 任意值

- \<anything>

  - : 基本类型 \<anything> 是一个零字符或多字符的序列。具体如下：

    ```plain
    anything ::= Char\*
    ```

    在这里，[Char](http://www.w3.org/TR/2008/REC-xml-20081126/#NT-Char) 表示一个字符，XML 1.0 第 2.2 节中定义了它。

## 时钟值

- \<clock-value>

  - : 时钟值的句法与 [SMIL Animation](https://www.w3.org/TR/2001/REC-smil-animation-20010904/) 规范中写的句法相同。在这里重放一下时钟值的语法：

    ```
    Clock-val         ::= Full-clock-val | Partial-clock-val | Timecount-val
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

    对于 `Timecount` 值，默认的公制前缀是“s”（秒）。在时钟值中不能嵌入空白，而且前导和末尾的空白字符会被忽略掉。下面是合法的时钟值的示例：

    - 完整时钟值：

      - `02:30:03` >= 2 小时 30 分钟又 3 秒
      - `50:00:10.25` = 50 小时 10 秒又 250 毫秒

    - 部分时钟值：

      - `02:33` >= 2 分钟又 33 秒
      - `00:10.5` = 10.5 秒 = 10 秒又 500 毫秒

    - Timecount 值：

      - `3.2h` >= 3.2 小时 = 3 小时 12 分钟
      - `45min` >= 45 分钟
      - `30s` >= 30 秒
      - `5ms` >= 5 毫秒
      - `12.467` >= 12 秒又 467 毫秒

    - 小数值是基数为 10 的浮点数，秒的界定。因此：
      - `00.5s` = 500 毫秒
      - `00:00.005` = 5 毫秒

## 颜色

- \<color>

  - : 基本类型\<color>是一个 CSS2 兼容的规范，针对 sRGB 颜色空间的颜色。\<color> 应用在 SVG 的属性 {{SVGAttr("color")}} 上，也是属性{{SVGAttr("fill")}}、属性{{SVGAttr("stroke")}}、属性{{SVGAttr("stop-color")}}、属性 {{SVGAttr("flood-color")}}和属性{{SVGAttr("lighting-color")}}的定义的组成部分，\<color> 还提供了可选的基于 ICC 的颜色规范。

    SVG 支持所有的定义在[CSS2 句法和基本数据类型](http://www.w3.org/TR/2008/REC-CSS2-20080411/syndata.html#value-def-color)中的 \<color> 供选择的句法，而且还支持[CSS Color Module Level 3](http://www.w3.org/TR/css3-color/)中的 \<color> 句法（取决于编译器）。

    一个 \<color> 可以是一个关键词，或者一个数字化的 RGB 规范。除了这些颜色关键词，用户可以利用用户环境中的对象指定对应于颜色的关键词。这些关键词的规范定义可以在[用户对颜色的引用](http://www.w3.org/TR/2008/REC-CSS2-20080411/ui.html#system-colors)（CSS2 规范第 18.2 节）中找到。

    一个 16 进制记号法的 RGB 值的格式是一个“#”后面紧跟着 3 个或者 6 个 16 进制字符。三数字 RGB 记号法（#rgb）可以转换成六数字 RGB 格式（#rrggbb），只需要复制数字，而不是添加 0。举个例子，#fb0 扩展为 #ffbb00。这样确保白色（#ffffff）可以用缩写记法 #fff 指定，去掉任何对显示器的色深的依赖。一个函数记号法的 RGB 值的格式是一个 RGB 开头函数后面跟着一个逗号分隔的三数值数列（可以是三个数字或者三个百分数）后面跟着一个右括号“)”。一个 RGB 开头函数是一个大小写不敏感的字符串“rgb(”，举个例子，“RGB(”或者“rGb(”。为了兼容性，建议使用全小写形式“rgb(”。整型值 255 对应于 100%，也对应于 16 进制计号法中的 F 或 FF：`rgb(255,255,255)` = `rgb(100%,100%,100%)` = `#FFF`。数字值周围允许存在空白字符。所有的 RGB 值都指定在 sRGB 颜色空间里。使用 sRGB 提供了一个清楚的、客观的、可测量的颜色定义，可以关联到国际标准。

    ```plain
    color ::= "#" hexdigit hexdigit hexdigit (hexdigit hexdigit hexdigit)?
              | "rgb("integer, integer, integer")"
              | "rgb("integer "%", integer "%", integer "%)"
              | color-keyword
    hexdigit ::= [0-9A-Fa-f]
    ```

    在这里，color-keyword 要于匹配列于 [CSS Color Module Level 3](http://www.w3.org/TR/css3-color/) 中的颜色关键词（大小写不敏感）中的一个，要么匹配列于[对颜色的用户参考](http://www.w3.org/TR/2008/REC-CSS2-20080411/ui.html#system-colors)中的一个。SVG DOM 对 \<color> 的定义，CSS 中也做了同样的定义。SVG 对颜色的扩展，包括指定基于 ICC 的颜色的能力，可以使用 DOM 接口{{domxref("SVGColor")}}来表现。

## 坐标

- \<coordinate>
  - : 一个\<coordinate> 是一个用户坐标系统中的长度，是从用户坐标系统的原点沿着相关轴走出给定的距离（X 轴针对 X 坐标，Y 轴针对 Y 坐标）。它的句法与[\<length>](/zh-CN/docs/SVG/Content_type#length)相同。在 SVG DOM 内部，一个 \<coordinate> 代表了一个{{domxref("SVGLength")}} 或者一个{{domxref("SVGAnimatedLength")}}.

## 频率

- \<frequency>

  - : 频率值用在可听到的属性上。就如 CSS2 中所定义的，一个频率值是一个 [\<number>](/zh-CN/docs/SVG/Content_type#Number) 后面跟着一个频率单位标识符。频率单位标识符可以是：

    - `Hz`：赫兹
    - `kHz`：千赫

    频率值不能是负数。

## FuncIRI

- \<FuncIRI>
  - : 用于引用的功能记号法，该引用的句法与{{cssxref("uri", "CSS URI")}}相同。

## ICC 颜色

- \<icccolor>

  - : \<icccolor> 一份 ICC 颜色规范。在 SVG 1.1，一份 ICC 颜色规范，顾名思义，是一个参考了一个{{SVGElement("color-profile")}} 元素，以及一个或更多颜色成分值。语法如下所示：

    ```plain
    icccolor ::= "icc-color(" name (, number)+ ")"
    ```

    \<icccolor> 对应的 SVG DOM 接口是{{domxref("SVGICCColor")}}。

## 整型数

- \<integer>

  - : 用一个可选的正负符号（“+”或“-”）后面跟着一个或多个 0 到 9 的数字可以指定一个\<integer>：

    ```plain
    integer ::= [+-]? [0-9]+
    ```

    如果正负符号不出现，则这个数字是非负的。除非是另有声明为特殊的属性，\<integer> 的范围是 -2147483648 到 2147483647 之间。在 SVG DOM 内部，一个 \<integer> 代表了一个数字或者一个{{domxref("SVGAnimatedInteger")}}。

## IRI

- \<IRI>

  - : 一个国际化资源标识符。在因特网上，资源是用 _IRI_（一个国际化资源标识符）标识的。举个例子，一个 SVG 文档调用了位于 `http://example.com` 上的 `someDrawing.svg`，可以使用下面的 _IRI_：

    ```
    http://example.com/someDrawing.svg
    ```

    一个 _IRI_ 中包含一个 _IRI_ 片段标识符，就可以定位一个 XML 文档内部的特定的元素。一个包含有 _IRI_ 片段标识符的 _IRI_，由一个可选的基础 _IRI_ 后面跟着一个“#”号，再跟着一个 _IRI_ 片段标识符组成。举个例子，下面的 IRI 可以用来指定文件 someDrawing.svg 中的 ID 为“Lamppost”的元素：

    ```
    http://example.com/someDrawing.svg#Lamppost
    ```

    _IRI_ 用在 {{SVGAttr("xlink:href")}} 属性中。有些属性既允许 _IRI_ 作为内容，也允许文本字符串。为了消除歧意，避免一个文本字符串被当作 IRI，可以使用功能记号法 \<FuncIRI>。这只是简单用功能记号法分隔一个 IRI。注意：出于历史原因，为了与 CSS 规范兼容，分隔符是“url(”和“)”。该 _FuncIRI_ 格式用在外观属性中。

    SVG 广泛地使用了 _IRI_ 引用，引用对象既可以是绝对引用也可以是引对引用。举个例子，要用线性渐变填充一个矩形，你可以先定义一个 {{SVGElement("linearGradient")}} 元素，然后给它一个 ID，如下：

    ```html
    <linearGradient xml:id="MyGradient">...</linearGradient>
    ```

    然后你再引用这个线性渐变，作为矩形的属性 {{SVGAttr("fill")}} 的值，如下：

    ```html
    <rect fill="url(#MyGradient)" />
    ```

    SVG 支持两种类型的 _IRI_ 引用：

    - 本地 _IRI_ 引用，在这里 IRI 引用不能包含一个 `<absoluteIRI>` 或 `<relativeIRI>`，因此只能包含一个片段标识符（例如：`<elementID>` 或者 `#xpointer(id<elementID>)`）。
    - 非本地 _IRI_ 引用，在这里 _IRI_ 引用必须包含一个 `<absoluteIRI>` 或 `<relativeIRI>`。

    欲了解完整的 SVG 中的 IRI 引用的规范请阅读 [SVG 1.1 (2nd Edition): IRI references](https://www.w3.org/TR/SVG/linking.html#IRIReference)。

## 长度

- \<length>

  - : 一个长度是一个可度量的距离，给定一个数字以及一个单位。长度可以用两种方法指定。如果在样式表中使用它，可以如下定义\<length>：

    ```
    length ::= number (~"em" | ~"ex" | ~"px" | ~"in" | ~"cm" | ~"mm" | ~"pt" | ~"pc")?
    ```

    请阅读 [CSS2 规范](https://www.w3.org/TR/2008/REC-CSS2-20080411/syndata.html#length-units) 以了解单位标识符的意义。

    在 CSS2 中定义的长度属性，必须提供单位标识符。而 SVG 专用属性的长度值以及它们对应的外观属性，长度单位标识符是可选的。如果没有提供单位标识符，长度值代表当前用户坐标系统中的一段距离。对于外观属性，无论是定义在 SVG1.1 还是定义在 CSS2 中，长度单位标识符必须是小写的。

    如果是在 SVG 属性中使用长度，\<length>需定义如下：

    ```
    length ::= number ("em" | "ex" | "px" | "in" | "cm" | "mm" | "pt" | "pc" | "%")?
    ```

    在这样的 \<length> 值中，单位标识符必须是小写的。

    注意，非属性 \<length> 定义同样允许百分比单位标识符。这意味着一个百分比长度值依赖于被指定百分比长度值的属性。分两种情况：

    - 百分比长度值表达了一个视口宽度或高度的百分比；
    - 百分比长度值表达了一个给定对象上的边界盒的宽度或高度的百分比。

    在 SVG DOM 中，\<length>值可以用{{domxref("SVGLength")}}对象或{{domxref("SVGAnimatedLength")}}对象来表达。

## T 值数列

- \<list-of-\_T_s>

  - : （在这里*T* 某些类型。）由一系列分开的值构成的数列。除非另有说明，SVG 的 XML 属性内的数列既可以是逗号分隔的，也可以是空格分隔的。用逗号作分隔符，逗号前面或后面可有带空格。数列中的空白被定义为一个或多个下列连续字符：“空格”（U+0020）、“制表符”（U+0009）、 “换行符”（U+000A）、 “回车符”（U+000D）以及“换页符”(U+000C)。下面是一个 EBNF 语法的模板，用来描述\<list-of-\_T_s>句法：

    ```plain
    list-of-Ts ::= T | T, list-of-Ts
    ```

    在 SVG DOM 内部，\<list-of-_T_s>类型的值可以用一个限特定类型 \_T_ 的接口来表达。举个例子，SVG DOM 中的\<list-of-lengths>使用一个 {{domxref("SVGLengthList")}} 对象或者 {{domxref("SVGAnimatedLengthList")}} 对象来表达。

## 命名

- \<name>

  - : 一个命名，是一个字符串，是不符合句法意义的少量的字符。

    ```plain
    name ::= [^,()#x20#x9#xd#xa] /* 除了 ",", "(", ")" 或 wsp 之外的任何字符 */
    ```

## 数字

- \<number>

  - : 真实数字可以用两种方法指定。如果用在样式表中，一个 \<number> 可以如下定义：`plain number ::= integer | [+-]? [0-9]* "." [0-9]+` 该句法与 CSS（CSS2 第 4.3.1 章节）中的定义一样。如果用在一个 SVG 属性中，一个 \<number> 可以用别的方法定义，允许一个数字后面跟着大数指数，以指定得更精确：

    ```plain
    number ::= integer ([Ee] integer)?| [+-]? [0-9]\* "." [0-9]+ ([Ee] integer)?
    ```

    在 SVG DOM 内部，一个 \<number> 可以用浮点数、{{domxref("SVGNumber")}} 对象或者 {{domxref("SVGAnimatedNumber")}} 对象来表达。

## 带可取舍的后缀数字的数字

- \<number-optional-number>

  - : 一对\<number>，其中第二个 \<number> 是可视情况取舍的。

    ```plain
    number-optional-number ::= number | number, number
    ```

    在 SVG DOM 中，一个 \<number-optional-number> 可以用一对 {{domxref("SVGAnimatedInteger")}} 对象或者一对 {{domxref("SVGAnimatedNumber")}} 对象来表达。

## 不透明度值

- \<opacity-value>
  - : 颜色不透明度或者当前对象填充的内容的不透明度，它是一个[\<number>](/zh-CN/docs/SVG/Content_type#Number)。任何超出 0.0 到 1.0 范围的值将被压制回这个范围。0.0 表示完全透明，1.0 表示完全不透明。

## 涂色

- \<paint>
  - : 属性{{SVGAttr("fill")}}和属性{{SVGAttr("stroke")}}的值，是涂色类型的规范，用在要对一个给定元素填充或描边的时候。SVG 规范的[Specifying paint](http://www.w3.org/TR/SVG/painting.html#SpecifyingPaint)章节中描述了\<paint>可用的选项以及句法。在 SVG DOM 内部，\<paint> 值用{{domxref("SVGPaint")}}对象表达。

## 百分数

- \<percentage>

  - : 一个数字后面跟着一个百分号“%”就可以指定一个百分数。

    ```plain
    percentage ::= number "%"
    ```

    注意 \<number> 的意义取决于百分数是在一个样式表中指定的，还是在一个 SVG 属性非外观属性中指定的。百分数值总是关联到另一个值。举个例子，每种允许百分比的属性同时定义了引用了给百分比数参考的距离测量。在 SVG DOM 内部，\<percentage> 用 {{domxref("SVGNumber")}} 对象或 {{domxref("SVGAnimatedNumber")}} 对象表达。

## 时间

- \<time>

  - : 一个时间值是一个 &#x3C;number> 后面紧跟着时间单位标识符。时间单位标识符可以是：

    - ms：毫秒
    - s：秒

## 平移数列

- \<transform-list>
  - : 一个\<transform-list> 是用来指定一个坐标系统转换数列。属性{{SVGAttr("transform")}}的定义中给出了 \<transform-list> 的可用值的详细描述。在 SVG DOM 内部，一个 \<transform-list> 值是用了一个{{domxref("SVGTransformList")}}对象或者{{domxref("SVGAnimatedTransformList")}}对象来表达的。
