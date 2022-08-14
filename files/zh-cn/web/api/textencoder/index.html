---
title: TextEncoder
slug: Web/API/TextEncoder
---
<div>{{APIRef("Encoding API")}}</div>

<p><code><strong>TextEncoder</strong></code> 接受代码点流作为输入，并提供 UTF-8 字节流作为输出。</p>

<div class="blockIndicator note">
<p><strong>Note</strong>: There is a polyfill implementation to support non-UTF-8 text encodings on <a href="https://github.com/inexorabletash/text-encoding">GitHub</a>.</p>
</div>

<h2 id="例子">例子</h2>

<pre class="brush: js; notranslate">const encoder = new TextEncoder()
const view = encoder.encode('€')
console.log(view); // Uint8Array(3) [226, 130, 172]
</pre>

<h2 id="构造器">构造器</h2>

<dl>
 <dt>{{domxref("TextEncoder.TextEncoder", "TextEncoder()")}}</dt>
 <dd>返回一个新构造的 <code>TextEncoder</code>，它默认使用 UTF-8 编码将代码点流转换成字节流。</dd>
</dl>

<h2 id="属性">属性</h2>

<p><em><code>TextEncoder</code> 接口不继承任何属性。</em></p>

<dl>
 <dt>{{domxref("TextEncoder.encoding")}} {{readonlyInline}}</dt>
 <dd>总是返回 "<code>utf-8</code>"。</dd>
</dl>

<h2 id="方法">方法</h2>

<p><em><code>TextEncoder</code> 接口不继承任何方法。</em></p>

<dl>
 <dt>{{domxref("TextEncoder.encode()")}}</dt>
 <dd>接受一个 {{domxref("USVString")}} 作为输入，返回一个包含文本的 {{jsxref("Uint8Array")}}，其中的文本使用 UTF-8 编码。</dd>
 <dt>{{DOMxRef("TextEncoder.prototype.encodeInto()")}}</dt>
 <dd>接受一个 {{domxref("USVString")}} 作为输入、一个{{jsxref("Uint8Array")}} 作为输出目标，返回一个指示编码进度的目录（dictionary）对象。此方法的性能可能会比更早出现的 <code>encode()</code> 方法好一些。</dd>
</dl>

<h2 id="Polyfill">Polyfill</h2>

<p>The below polyfill is compliant with the standard and therefore only supports UTF-8. It is designed to work in IE5 "out of the box". However, in IE5-IE9, it will return a regular Array instead of a TypedArray. In those cases a polyfill might be impractical for large strings. Finally, note that you should run the below code through a minifier (especially closure compiler) to turn sequences like <code>0x1e &lt;&lt; 3</code> into <code>0xf0</code>. These sequences are not already precomputed because they serve to aesthetically illustrate how the polyfill works.</p>

<pre class="brush: js notranslate">if (typeof TextEncoder === "undefined") {
    TextEncoder=function TextEncoder(){};
    TextEncoder.prototype.encode = function encode(str) {
        "use strict";
        var Len = str.length, resPos = -1;
        // The Uint8Array's length must be at least 3x the length of the string because an invalid UTF-16
        //  takes up the equivelent space of 3 UTF-8 characters to encode it properly. However, Array's
        //  have an auto expanding length and 1.5x should be just the right balance for most uses.
        var resArr = typeof Uint8Array === "undefined" ? new Array(Len * 1.5) : new Uint8Array(Len * 3);
        for (var point=0, nextcode=0, i = 0; i !== Len; ) {
            point = str.charCodeAt(i), i += 1;
            if (point &gt;= 0xD800 &amp;&amp; point &lt;= 0xDBFF) {
                if (i === Len) {
                    resArr[resPos += 1] = 0xef/*0b11101111*/; resArr[resPos += 1] = 0xbf/*0b10111111*/;
                    resArr[resPos += 1] = 0xbd/*0b10111101*/; break;
                }
                // https://mathiasbynens.be/notes/javascript-encoding#surrogate-formulae
                nextcode = str.charCodeAt(i);
                if (nextcode &gt;= 0xDC00 &amp;&amp; nextcode &lt;= 0xDFFF) {
                    point = (point - 0xD800) * 0x400 + nextcode - 0xDC00 + 0x10000;
                    i += 1;
                    if (point &gt; 0xffff) {
                        resArr[resPos += 1] = (0x1e/*0b11110*/&lt;&lt;3) | (point&gt;&gt;&gt;18);
                        resArr[resPos += 1] = (0x2/*0b10*/&lt;&lt;6) | ((point&gt;&gt;&gt;12)&amp;0x3f/*0b00111111*/);
                        resArr[resPos += 1] = (0x2/*0b10*/&lt;&lt;6) | ((point&gt;&gt;&gt;6)&amp;0x3f/*0b00111111*/);
                        resArr[resPos += 1] = (0x2/*0b10*/&lt;&lt;6) | (point&amp;0x3f/*0b00111111*/);
                        continue;
                    }
                } else {
                    resArr[resPos += 1] = 0xef/*0b11101111*/; resArr[resPos += 1] = 0xbf/*0b10111111*/;
                    resArr[resPos += 1] = 0xbd/*0b10111101*/; continue;
                }
            }
            if (point &lt;= 0x007f) {
                resArr[resPos += 1] = (0x0/*0b0*/&lt;&lt;7) | point;
            } else if (point &lt;= 0x07ff) {
                resArr[resPos += 1] = (0x6/*0b110*/&lt;&lt;5) | (point&gt;&gt;&gt;6);
                resArr[resPos += 1] = (0x2/*0b10*/&lt;&lt;6)  | (point&amp;0x3f/*0b00111111*/);
            } else {
                resArr[resPos += 1] = (0xe/*0b1110*/&lt;&lt;4) | (point&gt;&gt;&gt;12);
                resArr[resPos += 1] = (0x2/*0b10*/&lt;&lt;6)    | ((point&gt;&gt;&gt;6)&amp;0x3f/*0b00111111*/);
                resArr[resPos += 1] = (0x2/*0b10*/&lt;&lt;6)    | (point&amp;0x3f/*0b00111111*/);
            }
        }
        if (typeof Uint8Array !== "undefined") return resArr.subarray(0, resPos + 1);
        // else // IE 6-9
        resArr.length = resPos + 1; // trim off extra weight
        return resArr;
    };
    TextEncoder.prototype.toString = function(){return "[object TextEncoder]"};
    try { // Object.defineProperty only works on DOM prototypes in IE8
        Object.defineProperty(TextEncoder.prototype,"encoding",{
            get:function(){if(TextEncoder.prototype.isPrototypeOf(this)) return"utf-8";
                           else throw TypeError("Illegal invocation");}
        });
    } catch(e) { /*IE6-8 fallback*/ TextEncoder.prototype.encoding = "utf-8"; }
    if(typeof Symbol!=="undefined")TextEncoder.prototype[Symbol.toStringTag]="TextEncoder";
}
</pre>

<p><small>Source: <a href="https://github.com/anonyco/FastestSmallestTextEncoderDecoder">https://github.com/anonyco/FastestSmallestTextEncoderDecoder</a></small></p>

<h2 id="规范">规范</h2>

{{Specifications}}

<h2 id="浏览器兼容性">浏览器兼容性</h2>



<p>{{Compat("api.TextEncoder")}}</p>

<h2 id="参见">参见</h2>

<ul>
 <li>The {{DOMxRef("TextDecoder")}} interface describing the inverse operation.</li>
 <li><a href="/en-US/Add-ons/Code_snippets/StringView"><code>StringView</code></a> – a C-like representation of strings based on typed arrays</li>
 <li>A <a href="https://github.com/inexorabletash/text-encoding">shim</a> allowing to use this interface in browsers that don't support it.</li>
 <li><code><a href="/en-US/docs/Mozilla/Tech/XPCOM/Language_Bindings/Components.utils.importGlobalProperties">Components.utils.importGlobalProperties</a></code></li>
 <li><a href="https://nodejs.org/api/util.html#util_class_util_textencoder">Node.js supports global export from v11.0.0</a></li>
</ul>
