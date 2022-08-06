---
title: Content type
slug: Web/SVG/Content_type
tags:
  - NeedsTechnicalReview
  - SVG
  - Types
  - data types
translation_of: Web/SVG/Content_type
---
<p><span class="seoSummary">SVG は多くのデータ型を使用しています。この記事では、これらのデータ型とその構文、使用目的の説明を掲載しています。</span></p>

<h2 id="Angle">Angle (角度)</h2>

<dl>
	<dt>&lt;angle&gt;</dt>
	<dd>
	<p>角度は 2 つの方法のいずれかで指定します。スタイルシートのプロパティの値に使用する際、 &lt;angle&gt; は次のように定義されています。</p>

	<pre>angle ::= number (~"deg" | ~"grad" | ~"rad")?</pre>

	<p><code>deg</code> は度を示し、 <code>grad</code> はグラードを示し、 <code>rad</code> はラジアンを示します。</p>

	<p>CSS2 で定義されたプロパティについては、角度単位の識別子を提供しなければなりません。 SVG 固有のプロパティとそれに対応するプレゼンテーション属性の角度値については、角度の単位識別子は省略可能です。提供しなかった場合、角度の値は度単位であるとみなされます。すべてのプロパティのプレゼンテーション属性において、定義されているのが SVG1.1 であるか CSS2 であるかに関わらず、角度の識別子を指定する場合は小文字でなければなりません。</p>

	<p>SVG 属性で角度を指定する場合、 &lt;angle&gt; は以下のように定義されます。</p>

	<pre>angle ::= number ("deg" | "grad" | "rad")?</pre>

	<p>&lt;angle&gt; の単位の識別子は、すべて小文字でなければなりません。</p>

 <p>SVG DOM 内での &lt;angle&gt; の値は {{domxref("SVGAngle")}} または {{domxref("SVGAnimatedAngle objects")}} を使用して表現されます。</p>
 </dd>
</dl>

<h2 id="Anything">Anything (すべて)</h2>

<dl>
	<dt>&lt;anything&gt;</dt>
	<dd>
	<p>基本データ型の &lt;anything&gt; は 0 個以上の文字の並びから構成されます。具体的には次の通りです。</p>

	<pre>anything ::= Char*</pre>

	<p>ここで <a href="https://www.w3.org/TR/2008/REC-xml-20081126/#NT-Char">Char</a> は XML 1.0 , section 2.2 で定義されているとおり、文字を反映します。</p>
	</dd>
</dl>

<h2 id="Clock-value">Clock-value</h2>

<dl>
	<dt>&lt;clock-value&gt;</dt>
	<dd>
	<p>Clock values have the same syntax as in <a href="https://www.w3.org/TR/2001/REC-smil-animation-20010904/">SMIL Animation</a> specification. The grammar for clock values is repeated here:</p>

	<pre>Clock-val         ::= Full-clock-val | Partial-clock-val
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
</pre>

	<p>For <code>Timecount</code> values, the default metric suffix is "<code>s</code>" (for seconds). No embedded white space is allowed in clock values, although leading and trailing white space characters will be ignored.</p>

	<p>The following are examples of legal clock values:</p>

	<ul>
		<li>Full clock values:<br>
		<code>02:30:03 </code> = 2 hours, 30 minutes and 3 seconds<br>
		<code>50:00:10.25</code> = 50 hours, 10 seconds and 250 milliseconds</li>
		<li>Partial clock value:<br>
		<code>02:33 </code> = 2 minutes and 33 seconds<br>
		<code>00:10.5</code> = 10.5 seconds = 10 seconds and 500 milliseconds</li>
		<li>Timecount values:<br>
		<code>3.2h </code> = 3.2 hours = 3 hours and 12 minutes<br>
		<code>45min </code> = 45 minutes<br>
		<code>30s </code> = 30 seconds<br>
		<code>5ms </code> = 5 milliseconds<br>
		<code>12.467 </code> = 12 seconds and 467 milliseconds</li>
	</ul>

	<p>Fractional values are just (base 10) floating point definitions of seconds. Thus:</p>

	<p><code>00.5s = 500 milliseconds<br>
	00:00.005 = 5 milliseconds</code></p>
	</dd>
</dl>

<h2 id="Color">Color</h2>

<dl>
	<dt>&lt;color&gt;</dt>
	<dd>
	<p>The basic type &lt;color&gt; is a CSS2 compatible specification for a color in the sRGB color space. &lt;color&gt; applies to SVG's use of the {{SVGAttr("color")}} attribute and is a component of the definitions of attributes {{SVGAttr("fill")}}, {{SVGAttr("stroke")}}, {{SVGAttr("stop-color")}}, {{SVGAttr("flood-color")}}, and {{SVGAttr("lighting-color")}}, which also offer optional ICC-based color specifications.</p>

	<p>SVG supports all of the syntax alternatives for &lt;color&gt; defined in <a href="https://www.w3.org/TR/2008/REC-CSS2-20080411/syndata.html#value-def-color">CSS2 syntax and basic data types</a>, and (depend on the implementation) in the future <a href="https://www.w3.org/TR/css3-color/">CSS Color Module Level 3</a>.</p>

	<p>A &lt;color&gt; is either a keyword or a numerical RGB specification.</p>

	<p>In addition to these color keywords, users may specify keywords that correspond to the colors used by objects in the user's environment. The normative definition of these keywords is found in <a href="https://www.w3.org/TR/2008/REC-CSS2-20080411/ui.html#system-colors">User preferences for colors</a> (CSS2, section 18.2).</p>

	<p>The format of an RGB value in hexadecimal notation is a "<code>#</code>" immediately followed by either three or six hexadecimal characters. The three-digit RGB notation (<code>#<var>r</var><var>g</var><var>b</var></code>) is converted into six-digit form (<code>#<var>rr</var><var>gg</var><var>bb</var></code>) by replicating digits, not by adding zeros. For example, <code>#fb0</code> expands to <code>#ffbb00</code>. This ensures that white (<code>#ffffff</code>) can be specified with the short notation (<code>#fff</code>) and removes any dependencies on the color depth of the display. The format of an RGB value in the functional notation is an RGB start-function, followed by a comma-separated list of three numerical values (either three integer values or three percentage values) followed by "<code>)</code>". An RGB start-function is the case-insensitive string "<code>rgb(</code>", for example "<code>RGB(</code>" or "<code>rGb(</code>". For compatibility, the all-lowercase form "<code>rgb(</code>" is preferred. The integer value <code>255</code> corresponds to <code>100%</code>, and to <code>F</code> or <code>FF</code> in the hexadecimal notation: <code>rgb(255,255,255)</code> = <code>rgb(100%,100%,100%)</code> = <code>#FFF</code>. White space characters are allowed around the numerical values. All RGB colors are specified in the sRGB color space. Using sRGB provides an unambiguous and objectively measurable definition of the color, which can be related to international standards.</p>

	<pre>color    ::= "#" hexdigit hexdigit hexdigit (hexdigit hexdigit hexdigit)?
             | "rgb("integer, integer, integer")"
             | "rgb("integer "%", integer "%", integer "%)"
             | color-keyword
hexdigit ::= [0-9A-Fa-f]
</pre>

	<p>where <code>color-keyword</code> matches (case insensitively) one of the color keywords listed in <a href="https://www.w3.org/TR/css3-color/">CSS Color Module Level 3</a>, or one of the system color keywords listed in <a href="https://www.w3.org/TR/2008/REC-CSS2-20080411/ui.html#system-colors">User preferences for colors</a> (CSS2, section 18.2).</p>

	<p>The corresponding SVG DOM interface definitions for &lt;color&gt; are defined the one defined by CSS. SVG's extension to color, including the ability to specify ICC-based colors, are represented using DOM interface {{domxref("SVGColor")}}.</p>
	</dd>
</dl>

<h2 id="Coordinate">Coordinate</h2>

<dl>
	<dt>&lt;coordinate&gt;</dt>
	<dd>
	<p>&lt;coordinate&gt; は関連する軸に沿って (X 座標は X 軸に沿って、 Y 座標は Y 軸に沿って) ユーザー座標系の原点から所定の座標までの距離を指定します。その構文は <a href="/ja/docs/Web/SVG/Content_type#length">&lt;length&gt;</a> と同一です。</p>

	<p>SVG DOM 内では、 &lt;coordinate&gt; の値は {{domxref("SVGLength")}} もしくは {{domxref("SVGAnimatedLength")}} で表現されます。</p>
	</dd>
</dl>

<h2 id="Frequency">Frequency</h2>

<dl class="definitions">
	<dt>&lt;frequency&gt;</dt>
	<dd>
	<p>Frequency values are used with aural properties. As defined in CSS2, a frequency value is a <a href="/ja/docs/Web/SVG/Content_type#number">&lt;number&gt;</a> immediately followed by a frequency unit identifier. The frequency unit identifiers are:</p>

	<ul>
		<li><code>Hz</code>: Hertz</li>
		<li><code>kHz</code>: kilo Hertz</li>
	</ul>

	<p>Frequency values may not be negative.</p>
	</dd>
</dl>

<h2 id="FuncIRI">FuncIRI</h2>

<dl>
	<dt>&lt;FuncIRI&gt;</dt>
	<dd>Functional notation for a reference. The syntax for this reference is the same as the {{cssxref("url()", "CSS URI")}}.</dd>
</dl>

<h2 id="ICCColor">ICCColor</h2>

<dl>
	<dt>&lt;icccolor&gt;</dt>
	<dd>
	<p>An &lt;icccolor&gt; is an ICC color specification. In SVG 1.1, an ICC color specification is given by a name, which references a {{SVGElement("color-profile")}} element, and one or more color component values. The grammar is as follows:</p>

	<pre>icccolor ::= "icc-color(" name (, number)+ ")"
</pre>

	<p>The corresponding SVG DOM interface for &lt;icccolor&gt; is {{domxref("SVGICCColor")}}.</p>
	</dd>
</dl>

<h2 id="Integer">Integer</h2>

<dl>
	<dt>&lt;integer&gt;</dt>
	<dd>
	<p>An &lt;integer&gt; is specified as an optional sign character (<code>+</code> or <code>-</code>) followed by one or more digits <code>0</code> to <code>9</code>:</p>

	<pre>integer ::= [+-]? [0-9]+</pre>

	<p>If the sign character is not present, the number is non-negative.</p>

	<p>Unless stated otherwise for a particular attribute or property, the range for an &lt;integer&gt; encompasses (at a minimum) <code>-2147483648</code> to <code>2147483647</code>.</p>

	<p>Within the SVG DOM, an &lt;integer&gt; is represented as a <code>number</code> or an {{domxref("SVGAnimatedInteger")}}.</p>
	</dd>
</dl>

<h2 id="IRI">IRI</h2>

<dl>
	<dt>&lt;IRI&gt;</dt>
	<dd>
	<p>An <strong>I</strong>nternationalized <strong>R</strong>esource <strong>I</strong>dentifier.</p>

	<p>On the Internet, resources are identified using <em>IRI</em>s (Internationalized Resource Identifiers). For example, an SVG file called <code>someDrawing.svg</code> located at <a href="http://example.com">http://example.com</a> might have the following <em>IRI</em>:</p>

	<pre>http://example.com/someDrawing.svg
</pre>

	<p>An <em>IRI</em> can also address a particular element within an XML document by including an <em>IRI</em> fragment identifier as part of the <em>IRI</em>. An <em>IRI</em> which includes an <em>IRI</em> fragment identifier consists of an optional base <em>IRI</em>, followed by a "<code>#</code>" character, followed by the <em>IRI</em> fragment identifier. For example, the following <em>IRI</em> can be used to specify the element whose ID is "<code>Lamppost</code>" within file <code>someDrawing.svg</code>:</p>

	<pre>http://example.com/someDrawing.svg#Lamppost
</pre>

	<p><em>IRI</em>s are used in the {{SVGAttr("xlink:href")}} attribute. Some attributes allow both <em>IRI</em>s and text strings as content. To disambiguate a text string from a relative IRI, the functional notation &lt;FuncIRI&gt; is used. This is an <em>IRI</em> delimited with a functional notation. Note: For historical reasons, the delimiters are "<code>url(</code>" and "<code>)</code>", for compatibility with the CSS specifications. The <em>FuncIRI</em> form is used in presentation attributes .</p>

	<p>SVG makes extensive use of <em>IRI</em> references, both absolute and relative, to other objects. For example, to fill a rectangle with a linear gradient, you first define a {{SVGElement("linearGradient")}} element and give it an ID, as in:</p>

	<pre>&lt;linearGradient xml:id="MyGradient"&gt;...&lt;/linearGradient&gt;
</pre>

	<p>You then reference the linear gradient as the value of the {{SVGAttr("fill")}} attribute for the rectangle, as in the following example:</p>

	<pre>&lt;rect fill="url(#MyGradient)"/&gt;
</pre>

	<p>SVG supports two types of <em>IRI</em> references:</p>

	<ul>
		<li><strong>local <em>IRI</em> references</strong>, where the IRI reference does not contain an <code>&lt;absoluteIRI&gt;</code> or <code>&lt;relativeIRI&gt;</code> and thus only contains a fragment identifier (i.e., <code>#&lt;elementID&gt;</code> or <code>#xpointer(id&lt;elementID&gt;)</code>).</li>
		<li><strong>non-local <em>IRI</em> references</strong>, where the <em>IRI</em> reference does contain an <code>&lt;absoluteIRI&gt;</code> or <code>&lt;relativeIRI&gt;</code>.</li>
	</ul>

	<p>For the full specification of IRI references in SVG, see <a href="https://www.w3.org/TR/SVG/linking.html#IRIReference">SVG 1.1 (2nd Edition): IRI references</a>.</p>
	</dd>
</dl>

<h2 id="Length">Length (長さ)</h2>

<dl>
	<dt>&lt;length&gt;</dt>
	<dd>
	<p>&lt;length&gt; は距離の寸法です。数値とともに単位を提供します。長さは 2 つの方法のいずれかで指定します。スタイルシート内で使用する際、 &lt;length&gt; は次のように定義されています。</p>

	<pre>length ::= number (~"em" | ~"ex" | ~"px" | ~"in" | ~"cm" | ~"mm" | ~"pt" | ~"pc")?</pre>

	<p>単位の識別子の意味については <a href="http://www.w3.org/TR/2008/REC-CSS2-20080411/syndata.html#length-units">CSS2 の仕様を参照してください</a>。</p>

	<p>CSS2 で定義されたプロパティでは、 &lt;length&gt; の単位の識別子を提供する必要があります。 SVG 固有のプロパティやプレゼンテーション属性に定義する場合は、単位の識別子は任意となります。もし単位の識別子が提供されなかった場合、 &lt;length&gt; は現在のユーザー座標系で表されます。プレゼンテーション属性内のすべてのプロパティでは、 SVG1.1 もしくは CSS2 の中で単位の識別子が定義されているか、もし指定するならば、すべて小文字で無ければなりません。</p>

	<p>SVG 属性に長さを使用する場合、 &lt;length&gt; は以下のように定義されます：</p>

	<pre>length ::= number ("em" | "ex" | "px" | "in" | "cm" | "mm" | "pt" | "pc" | "%")?</pre>

	<p>SVG 属性の中での &lt;length&gt; の単位の識別子はすべて小文字にしなければいけません。</p>

	<p>なお、プロパティではない &lt;length&gt; の定義では、パーセント単位の識別子も可能です。パーセント値の長さの値の意味は、パーセント値の長さの値が指定されている属性に依存する。よくある 2 つの例を挙げます。</p>

	<ul>
		<li>SVG ビューポートの幅または高さの割合を表す場合</li>
		<li>指定されたオブジェクト上のバウンディングボックスの幅または高さの割合を表す場合</li>
	</ul>

	<p>SVG DOM 内では、 &lt;length&gt; の値は{{domxref("SVGLength")}} もしくは {{domxref("SVGAnimatedLength")}} で表現されます。</p>
	</dd>
</dl>

<h2 id="List-of-Ts">List-of-<var>T</var>s</h2>

<dl>
	<dt>&lt;list-of-<var>T</var>s&gt;</dt>
	<dd>
	<p>(Where <var>T</var> is some type.) A list consists of a separated sequence of values. Unless explicitly described differently, lists within SVG's XML attributes can be either comma-separated (with optional white space before or after the comma), or white space-separated.</p>

	<p>White space in lists is defined as one or more of the following consecutive characters: "space" (<code>U+0020</code>), "tab" (<code>U+0009</code>), "line feed" (<code>U+000A</code>), "carriage return" (<code>U+000D</code>), and "form-feed" (<code>U+000C</code>).</p>

	<p>The following is a template for an EBNF grammar describing the &lt;list-of-<var>T</var>s&gt; syntax:</p>

	<pre>list-of-<var>T</var>s ::= <var>T</var>
               | <var>T</var>, list-of-<var>T</var>s</pre>

	<p>Within the SVG DOM, values of a &lt;list-of-<var>T</var>s&gt; type are represented by an interface specific for the particular type <var>T</var>. For example, a &lt;list-of-lengths&gt; is represented in the SVG DOM using an {{domxref("SVGLengthList")}} or {{domxref("SVGAnimatedLengthList")}} object.</p>
	</dd>
</dl>

<h2 id="Name">Name</h2>

<dl>
	<dt>&lt;name&gt;</dt>
	<dd>
	<p>A name, which is a string where a few characters of syntactic significance are disallowed.</p>

	<pre>name  ::= [^,()#x20#x9#xD#xA] /* any char except ",", "(", ")" or wsp */</pre>
	</dd>
</dl>

<h2 id="Number">Number</h2>

<dl>
	<dt>&lt;number&gt;</dt>
	<dd>
	<p>Real numbers are specified in one of two ways. When used in a stylesheet, a &lt;number&gt; is defined as follows:</p>

	<pre>number ::= integer
           | [+-]? [0-9]* "." [0-9]+</pre>

	<p>This syntax is the same as the definition in CSS (CSS2, section 4.3.1).</p>

	<p>When used in an SVG attribute, a &lt;number&gt; is defined differently, to allow numbers with large magnitudes to be specified more concisely:</p>

	<pre>number ::= integer ([Ee] integer)?
           | [+-]? [0-9]* "." [0-9]+ ([Ee] integer)?</pre>

	<p>Within the SVG DOM, a &lt;number&gt; is represented as a float, {{domxref("SVGNumber")}} or a {{domxref("SVGAnimatedNumber")}}.</p>
	</dd>
</dl>

<h2 id="Number-optional-number">Number-optional-number</h2>

<dl>
	<dt>&lt;number-optional-number&gt;</dt>
	<dd>
	<p>A pair of &lt;number&gt;s, where the second &lt;number&gt; is optional.</p>

	<pre>number-optional-number ::= number
                           | number, number</pre>

	<p>In the SVG DOM, a &lt;number-optional-number&gt; is represented using a pair of {{domxref("SVGAnimatedInteger")}} or {{domxref("SVGAnimatedNumber")}} objects.</p>
	</dd>
</dl>

<h2 id="Opacity_value">Opacity value</h2>

<dl>
	<dt>&lt;opacity-value&gt;</dt>
	<dd>The opacity of the color or the content the current object is filled with, as a <a href="/ja/docs/Web/SVG/Content_type#number">&lt;number&gt;</a>. Any values outside the range <code>0.0</code> (fully transparent) to <code>1.0</code> (fully opaque) will be clamped to this range.</dd>
</dl>

<h2 id="Paint">Paint</h2>

<dl>
	<dt>&lt;paint&gt;</dt>
	<dd>
	<p>The values for properties {{SVGAttr("fill")}} and {{SVGAttr("stroke")}} are specifications of the type of paint to use when filling or stroking a given graphics element. The available options and syntax for &lt;paint&gt; are described in <a href="https://www.w3.org/TR/SVG/painting.html#SpecifyingPaint">Specifying paint</a>.</p>

	<p>Within the SVG DOM, &lt;paint&gt; values are represented using {{domxref("SVGPaint")}} objects.</p>
	</dd>
</dl>

<h2 id="Percentage">Percentage</h2>

<dl>
	<dt id="DataTypePercentage">&lt;percentage&gt;</dt>
	<dd>
	<p>Percentages are specified as a number followed by a "<code>%</code>" character:</p>

	<pre>percentage ::= number "%"</pre>

	<p>Note that the definition of &lt;number&gt; depends on whether the percentage is specified in a stylesheet or in an attribute that is not also a presentation attribute.</p>

	<p>Percentage values are always relative to another value (for example, a length). Each attribute or property that allows percentages also defines the reference distance measurement to which the percentage refers.</p>

	<p>Within the SVG DOM, a &lt;percentage&gt; is represented using an {{domxref("SVGNumber")}} or {{domxref("SVGAnimatedNumber")}} object.</p>
	</dd>
</dl>

<h2 id="Time">Time</h2>

<dl>
	<dt>&lt;time&gt;</dt>
	<dd>
	<p>A time value is a &lt;number&gt; immediately followed by a time unit identifier. The time unit identifiers are:</p>

	<ul>
		<li><span class="attr-value"><code>ms</code>: milliseconds</span></li>
		<li><span class="attr-value"><code>s</code>: seconds</span></li>
	</ul>
	</dd>
</dl>

<h2 id="Transform-list">Transform-list</h2>

<dl>
	<dt>&lt;transform-list&gt;</dt>
	<dd>
	<p>A &lt;transform-list&gt; is used to specify a list of coordinate system transformations. A detailed description of the possible values for a &lt;transform-list&gt; is given in the {{SVGAttr("transform")}} attribute definition.</p>

	<p>Within the SVG DOM, a &lt;transform-list&gt; value is represented using an {{domxref("SVGTransformList")}} or {{domxref("SVGAnimatedTransformList")}} object.</p>
	</dd>
</dl>

<h2 id="URL">URL</h2>

<dl>
	<dt>URL</dt>
	<dd>
	<p>A <strong>U</strong>niform <strong>R</strong>esource <strong>L</strong>ocator.</p>

	<p>A URL is a sequence of {{Glossary("Unicode")}} characters, building an address to an internal or external resource.</p>

	<p>Before SVG 2, the more limited <a href="#iri">IRI</a> content type was used instead, because the URL specification was not standardized before.</p>
	</dd>
</dl>
