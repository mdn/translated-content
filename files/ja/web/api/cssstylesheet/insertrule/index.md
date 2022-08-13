---
title: CSSStyleSheet.insertRule()
slug: Web/API/CSSStyleSheet/insertRule
tags:
  - API
  - CSSOM
  - CSSStyleSheet
  - Method
  - Reference
translation_of: Web/API/CSSStyleSheet/insertRule
---
<p><span class="seoSummary"><strong>CSSStyleSheet.insertRule()</strong> メソッドは、新しい <a href="/ja/docs/Web/API/CSSRule">CSS 規則</a>を<a href="/ja/docs/Web/API/CSSStyleSheet">現在のスタイルシート</a>に挿入しますが、いくつかの<a href="#Restrictions">制限</a>があります。</span></p>

<div class="note">
<p><strong>メモ:</strong> <strong>insertRule()</strong> は {{domxref("CSSStyleSheet")}} の排他的なメソッドですが、実際には規則を <code>{{domxref("CSSStyleSheet", "", "", "1")}}.cssRules</code>、内部的には {{domxref("CSSRuleList")}} に挿入します。</p>
</div>

<h2 id="Syntax" name="Syntax">構文</h2>

<pre class="syntaxbox"><var>stylesheet</var>.insertRule(<var>rule</var>[, <var>index</var>])</pre>

<h3 id="Parameters" name="Parameters">引数</h3>

<dl>
 <dt>rule</dt>
 <dd>
 <p>挿入される規則が入った {{domxref("DOMString")}} です。どのような規則を挿入するかは、種類に依存します。</p>

 <ul>
  <li><strong><a href="/ja/docs/Web/CSS/Syntax#CSS_statements">規則セット</a></strong>の場合、<a href="/ja/docs/Web/Guide/CSS/Getting_Started/Selectors">セレクター</a>とスタイル定義です。</li>
  <li><strong><a href="/ja/docs/Web/CSS/At-rule">@-規則</a></strong>の場合、 @-識別子と規則の内容です。</li>
 </ul>
 </dd>
 <dt>index {{optional_inline}}</dt>
 <dd><code><var>stylesheet</var>.cssRules.length</code> 以下の正の数で、 <code>{{domxref("CSSStyleSheet", "", "", "1")}}.cssRules</code> の中で新しく挿入される規則の位置を示します。既定値は <code>0</code> です。 (古い実装では、これは必須でした。詳しくは<a href="#Browser_compatibility">ブラウザーの対応</a>を参照してください。)</dd>
</dl>

<h3 id="Return_value" name="Return_value">返値</h3>

<p>スタイルシートの規則リスト内の、新たに挿入された規則のインデックスです。</p>

<h3 id="Restrictions" name="Restrictions">制限事項</h3>

<p>CSS スタイルシート規則のリストには、規則がどのようにどこへ挿入されるかに影響する、いくつかの直感的な、またはそれほど直感的でない <a href="https://drafts.csswg.org/cssom/#insert-a-css-rule">制限</a> があります。これらに違反すると、 {{domxref("DOMException")}} のようなエラーを引き起こす原因になるでしょう。</p>

<ul>
 <li><var>index</var> 値が <code>{{domxref("CSSRuleList", "", "", "1")}}.length</code> を超える場合、 <code>IndexSizeError</code> で処理を中止します。</li>
 <li>CSS の制約により <var>rule</var> が <var>index</var> <code>0</code> に挿入できない場合、 <code>HierarchyRequestError</code> で処理を中止します。</li>
 <li><var>rule</var> 引数に 2 個以上の規則を与えた場合、 <code>SyntaxError</code> で処理を中止します。</li>
 <li>{{domxref("@import")}} @-規則をスタイル規則の後に挿入しようとした場合、 <code>HierarchyRequestError</code> で処理を中止します。</li>
 <li><var>rule</var> が {{domxref("@namespace")}} @-規則であり、リストに <code>@import</code> @-規則や <code>@namespace</code> @-規則が含まれている場合、 <code>InvalidStateError</code> で処理を中止します。</li>
</ul>

<h2 id="Examples" name="Examples">例</h2>

<h3 id="Example_1" name="Example_1">例1</h3>

<pre class="brush: js">// myStyle の先頭に新しい規則を挿入
myStyle.insertRule("#blanc { color: white }", 0);
</pre>

<h3 id="Example_2" name="Example_2">例2</h3>

<pre class="brush: js">/**
 * Add a stylesheet rule to the document (it may be better practice
 * to dynamically change classes, so style information can be kept in
 * genuine stylesheets and avoid adding extra elements to the DOM).
 * Note that an array is needed for declarations and rules since ECMAScript does
 * not guarantee a predictable object iteration order, and since CSS is
 * order-dependent.
 * @param {Array} rules Accepts an array of JSON-encoded declarations
 * @example
addStylesheetRules([
  ['h2', // Also accepts a second argument as an array of arrays instead
    ['color', 'red'],
    ['background-color', 'green', true] // 'true' for !important rules
  ],
  ['.myClass',
    ['background-color', 'yellow']
  ]
]);
*/
function addStylesheetRules (rules) {
  var styleEl = document.createElement('style');

  // Append &lt;style&gt; element to &lt;head&gt;
  document.head.appendChild(styleEl);

  // Grab style element's sheet
  var styleSheet = styleEl.sheet;

  for (var i = 0; i &lt; rules.length; i++) {
    var j = 1,
        rule = rules[i],
        selector = rule[0],
        propStr = '';
    // If the second argument of a rule is an array of arrays, correct our variables.
    if (Array.isArray(rule[1][0])) {
      rule = rule[1];
      j = 0;
    }

    for (var pl = rule.length; j &lt; pl; j++) {
      var prop = rule[j];
      propStr += prop[0] + ': ' + prop[1] + (prop[2] ? ' !important' : '') + ';\n';
    }

    // Insert CSS Rule
    styleSheet.insertRule(selector + '{' + propStr + '}', styleSheet.cssRules.length);
  }
}</pre>

<h2 id="Specifications" name="Specifications">仕様書</h2>

<table class="standard-table">
 <tbody>
  <tr>
   <th>仕様書</th>
   <th>状態</th>
   <th>備考</th>
  </tr>
  <tr>
   <td>{{SpecName('CSSOM', '#dom-cssstylesheet-insertrule', 'CSSStyleSheet.insertRule')}}</td>
   <td>{{Spec2('CSSOM')}}</td>
   <td>{{SpecName('DOM2 Style')}} からの変更なし。</td>
  </tr>
  <tr>
   <td>{{SpecName('DOM2 Style', 'css.html#CSS-CSSStyleSheet-insertRule', 'CSSStyleSheet.insertRule')}}</td>
   <td>{{Spec2('DOM2 Style')}}</td>
   <td>初回定義</td>
  </tr>
 </tbody>
</table>

<h2 id="Polyfill" name="Polyfill">ポリフィル</h2>

<p>以下のポリフィルは、 Internet Explorer 5–8 において、 <code>insertRule</code> の引数の入力を標準に準拠させるものです。 <code>insertRule</code> を関数で補完し、引数を既定のネイティブの <code>insertRule</code> に送る前に、セレクターを規則から分離します。</p>

<pre class="brush: js">(function(Sheet_proto){
    var originalInsertRule = Sheet_proto.insertRule;
    if (originalInsertRule.length === 2){ // 2 mandatory arguments: (selector, rules)
        Sheet_proto.insertRule = function(selectorAndRule){
            // First, separate the selector from the rule
            a: for (var i=0, Len=selectorAndRule.length, isEscaped=0, newCharCode=0; i !== Len; ++i) {
                newCharCode = selectorAndRule.charCodeAt(i);
                if (!isEscaped &amp;&amp; (newCharCode === 123)) { // 123 = "{".charCodeAt(0)
                    // Secondly, find the last closing bracket
                    var openBracketPos = i, closeBracketPos = -1;
                    for (; i !== Len; ++i) {
                        newCharCode = selectorAndRule.charCodeAt(i);
                        if (!isEscaped &amp;&amp; (newCharCode === 125)) { // 125 = "}".charCodeAt(0)
                            closeBracketPos = i;
                        }
                        isEscaped ^= newCharCode===92?1:isEscaped; // 92 = "\\".charCodeAt(0)
                    }
                    if (closeBracketPos === -1) break a; // no closing bracket was found!
                    /*else*/ return originalInsertRule.call(
                        this, // the sheet to be changed
                        selectorAndRule.substring(0, openBracketPos), // the selector
                        selectorAndRule.substring(closeBracketPos), // the rule
                        arguments[3] // the insert index
                    );
                }
                // works by if the char code is a backslash, then isEscaped gets flipped (XOR-ed by
                // 1), and if it is not a backslash then isEscaped gets XORed by itself, zeroing it
                isEscaped ^= newCharCode===92?1:isEscaped; // 92 = "\\".charCodeAt(0)
            }
            // Else, there is no unescaped bracket
            return originalInsertRule.call(this, selectorAndRule, "", arguments[2]);
        };
    }
})(CSSStyleSheet.prototype);
</pre>

<h2 id="Browser_compatibility" name="Browser_compatibility">ブラウザーの対応</h2>

<p>{{Compat("api.CSSStyleSheet.insertRule")}}</p>

<h3 id="Legacy_browser_support" name="Legacy_browser_support">古いブラウザーの対応</h3>

<h4 id="Internet_Explorer_8_and_below" name="Internet_Explorer_8_and_below">Internet Explorer 8 以前</h4>

<p><strong>addRule</strong>(<var>selector</var>, <var>rule</var> [, <var>index</var>]); — 例: <code>addRule('pre', 'font: 14px verdana'); // 規則を末尾に追加</code></p>

<p><em>また、標準外の <code><a class="external" href="http://www.quirksmode.org/dom/w3c_css.html#change">removeRule()</a></code> および <code><a class="external" href="http://www.quirksmode.org/dom/w3c_css.html#access">.rules</a></code> が、それぞれ {{domxref("CSSStyleSheet.deleteRule","deleteRule()")}} および {{domxref("CSSStyleSheet",".cssRules")}} の代わりに使用されていることにも注意してください。</em></p>

<h2 id="See_also" name="See_also">関連情報</h2>

<ul>
 <li>{{domxref("CSSStyleSheet.deleteRule")}}</li>
 <li><a class="external" href="http://www-archive.mozilla.org/docs/web-developer/css1technote/css1tojs.html#priority">Cross-Browser CSS-rules ordering (CSS1)</a></li>
 <li><a class="external" href="http://www.quirksmode.org/dom/w3c_css.html">Quirksmode - CSS</a></li>
</ul>

<div>{{APIRef("CSSOM")}}</div>
