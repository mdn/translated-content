---
title: TextEncoder
slug: Web/API/TextEncoder
tags:
  - API
  - Encoding
  - Experimental
  - Interface
  - Reference
  - TextEncoder
translation_of: Web/API/TextEncoder
---
<p>{{APIRef("Encoding API")}}</p>

<p><code><strong>TextEncoder</strong></code> はコードポイントのストリームを入力として受け取り、 UTF-8 バイトのストリームを出力します。</p>

<div class="blockIndicator note">
<p><strong>注</strong>: UTF-8 以外のテキストエンコーディングに対応したポリフィルの実装が <a href="https://github.com/inexorabletash/text-encoding">GitHub</a> にあります。</p>
</div>

<h2 id="Example" name="Example">例</h2>

<pre class="brush: js; notranslate">const encoder = new TextEncoder()
const view = encoder.encode('€')
console.log(view); // Uint8Array(3) [226, 130, 172]
</pre>

<h2 id="Constructor" name="Constructor">コンストラクター</h2>

<dl>
 <dt>{{DOMxRef("TextEncoder.TextEncoder", "TextEncoder()")}}</dt>
 <dd>新たに生成した <code>TextEncoder</code> を返します。これは、 UTF-8 エンコーディングのバイトストリームを生成します。</dd>
</dl>

<h2 id="Properties" name="Properties">プロパティ</h2>

<p><em><code>TextEncoder</code> インターフェイスは、何もプロパティを継承していません。</em></p>

<dl>
 <dt>{{DOMxRef("TextEncoder.prototype.encoding")}}{{ReadOnlyInline}}</dt>
 <dd>常に "<code>utf-8</code>" を返します。</dd>
</dl>

<h2 id="Methods" name="Methods">メソッド</h2>

<p><em><code>TextEncoder</code> インターフェイスは、何もメソッドを継承していません。</em></p>

<dl>
 <dt>{{DOMxRef("TextEncoder.prototype.encode()")}}</dt>
 <dd>入力として {{domxref("USVString")}} を取り、 UTF-8 でエンコードされたテキストを含む {{jsxref("Uint8Array")}} を返します。</dd>
 <dt>{{DOMxRef("TextEncoder.prototype.encodeInto()")}}</dt>
 <dd>エンコードする {{domxref("USVString")}} と、 UTF-8 でエンコードされたテキストをが入る宛先の {{jsxref("Uint8Array")}} を取り、エンコーディングの進捗を示す辞書オブジェクトを返します。これは <code>encode()</code> よりも新しく、より性能が高くなる可能性があります。</dd>
</dl>

<h2 id="Polyfill" name="Polyfill">ポリフィル</h2>

<p>以下のポリフィルは、標準が要求する仕様だけを満たし、したがって UTF-8 のみをサポートします。 "これだけで" IE5 で動作するように設計されていますが、IE5 から IE9 では TypedArray に代わって通常の配列を返します。メモリの効率が悪く遅いブラウザーのような状況では、このポリフィル (さらに言えばどのポリフィルも) は古いブラウザーと大きな文字列に対して実用的でないでしょう。最後に、 <code>0x1e &lt;&lt; 3</code> のようなシーケンスを <code>0xf0</code> へ変換するため、以下のコードをミニファイアー (特にクロージャコンパイラー) を通して実行すべきであることに注意してください。これらのシーケンスはポリフィルの動作を美的に示すため、事前に計算されていません。</p>

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

<p><small>引用元: <a href="https://github.com/anonyco/FastestSmallestTextEncoderDecoder" rel="noopener">https://github.com/anonyco/FastestSmallestTextEncoderDecoder</a></small></p>

<h2 id="Specifications" name="Specifications">仕様書</h2>

<table class="standard-table">
 <thead>
  <tr>
   <th scope="col">仕様書</th>
   <th scope="col">状態</th>
   <th scope="col">備考</th>
  </tr>
 </thead>
 <tbody>
  <tr>
   <td>{{SpecName("Encoding", "#interface-textencoder", "TextEncoder")}}</td>
   <td>{{Spec2("Encoding")}}</td>
   <td>初回定義</td>
  </tr>
 </tbody>
</table>

<h2 id="Browser_compatibility" name="Browser_compatibility">ブラウザーの互換性</h2>

<div>
<p>{{Compat("api.TextEncoder")}}</p>
</div>

<h2 id="See_also" name="See_also">関連情報</h2>

<ul>
 <li>逆の操作を表す {{DOMxRef("TextDecoder")}} インターフェイス。</li>
 <li><a href="/ja/Add-ons/Code_snippets/StringView" title="Web/JavaScript/Typed_arrays/StringView"><code>StringView</code></a> – typed array による、C ライクな文字列の表現</li>
 <li>非サポートブラウザーでもこのインターフェイスを使用可能にする <a href="https://github.com/inexorabletash/text-encoding">shim</a>。</li>
 <li><code><a href="/ja/docs/Mozilla/Tech/XPCOM/Language_Bindings/Components.utils.importGlobalProperties">Components.utils.importGlobalProperties</a></code></li>
 <li><a href="https://nodejs.org/api/util.html#util_class_util_textencoder">Node.js supports global export from v11.0.0</a></li>
</ul>
