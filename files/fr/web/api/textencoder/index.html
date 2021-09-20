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
<p>{{APIRef("Encoding API")}}{{SeeCompatTable}}</p>

<p><code><strong>TextEncoder</strong></code> prend un flux de points de code en entrée et émet un flux d'octets. Pour une bibliothèque non native plus extensible, voir <a href="/en-US/Add-ons/Code_snippets/StringView"><code>StringView</code> – une représentation des chaînes de caractères proche de celle de C basée sur les tableaux typés</a>.</p>

<div class="note">
<p><strong>Note :</strong> Firefox, Chrome et Opera ont pour habitude de supporter les types d'encodage autres que <code>utf-8</code> (tels que <code>utf-16</code>, <code>iso-8859-2</code>, <code>koi8</code>, <code>cp1261</code>, et <code>gbk</code>). À partir de Firefox 48 ({{bug(1257877)}}), Chrome 54 (<a href="https://www.chromestatus.com/feature/5630760492990464">ticket</a>) et Opera 41, aucun type d'encodage autre que <code>utf-8</code> n'est disponible, de manière à être en accord avec la <a href="https://www.w3.org/TR/encoding/#dom-textencoder">spécification</a>. Dans tous les cas, passer un type d'encodage au constructeur sera ignoré et un TextEncoder utf-8 sera créé (le {{DOMxRef("TextDecoder")}} permet toujours d'autres types pour le décodage).</p>
</div>

<div class="note">
<p><strong>Note :</strong> Il y a une prothèse d'émulation d'implantation pour supporter tous les encodages hérités dans <a href="https://github.com/inexorabletash/text-encoding">GitHub</a>.</p>
</div>

<h2 id="Constructeur">Constructeur</h2>

<dl>
 <dt>{{DOMxRef("TextEncoder.TextEncoder", "TextEncoder()")}}</dt>
 <dd>Retourne une nouvel objet <code>TextEncoder</code> qui génèrera un flux d'octets encodés en utf-8.</dd>
</dl>

<h2 id="Propriétés">Propriétés</h2>

<p><em>L'interface <code>TextEncoder</code> n'hérite d'aucune propriété.</em></p>

<dl>
 <dt>{{DOMxRef("TextEncoder.encoding")}}{{ReadOnlyInline}}</dt>
 <dd>{{DOMxRef("DOMString")}} contenant le nom de l'encodeur, qui est une chaîne de caractères décrivant la méthode que l'objet <code>TextEncoder</code> utilisera.</dd>
</dl>

<h2 id="Méthodes">Méthodes</h2>

<dl>
</dl>

<p><em><em>L'interface <code>TextEncoder</code> n'hérite d'aucune propriété</em></em>.</p>

<dl>
 <dt>{{DOMxRef("TextEncoder.encode()")}}</dt>
 <dd>Retourne un <a href="/en-US/docs/Web/JavaScript/Typed_arrays/Uint8Array"><code>Uint8Array</code></a> conternant un texte encodé en utf-8.</dd>
</dl>

<h2 id="Prothèse_d'émulation">Prothèse d'émulation</h2>

<p>La prothèse d'émulation ci-dessous va uniquement répondre aux spécifications données par le W3 (par d'autre type d'encodage que UTF-8 n'est supporté, malheureusement ☹️). Elle est conçue pour fonctionner "clé en main" avec IE5. Toutefois, de IE5 à IE9, elle retournera un tableau normal plutôt qu'un tableau typé. Dans de telles circonstances et avec des navigateurs si lents, cette prothèse (ou tout autre ayant le même objectif) serait inutilisable pour de longues chaînes de caractères avec ces vieux navigateurs. Enfin, notez que vous devriez exécuter le code ci-dessous avec un minifieur (et plus particulièrement un compilateur ) to turn sequences like <code>0x1e &lt;&lt; 3</code> into <code>0xf0</code>. These sequences are not already precomputed because they serve to aesthetically illustrate how the polyfill works.</p>

<pre class="brush: js">if (typeof TextEncoder === "undefined") {
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
                resArr[resPos += 1] = (0x2/*0b10*/&lt;&lt;6)  | (point&amp;0x3f/*0b00111111*/);
            } else {
                resArr[resPos += 1] = (0xe/*0b1110*/&lt;&lt;4) | (point&gt;&gt;&gt;12);
                resArr[resPos += 1] = (0x2/*0b10*/&lt;&lt;6)    | ((point&gt;&gt;&gt;6)&amp;0x3f/*0b00111111*/);
                resArr[resPos += 1] = (0x2/*0b10*/&lt;&lt;6)    | (point&amp;0x3f/*0b00111111*/);
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

<h2 id="Specifications">Specifications</h2>

<table class="standard-table">
 <tbody>
  <tr>
   <th scope="col">Specification</th>
   <th scope="col">Status</th>
   <th scope="col">Comment</th>
  </tr>
  <tr>
   <td>{{SpecName("Encoding", "#interface-textencoder", "TextEncoder")}}</td>
   <td>{{Spec2("Encoding")}}</td>
   <td>Initial definition.</td>
  </tr>
 </tbody>
</table>

<h2 id="Browser_compatibility">Browser compatibility</h2>

<div>


<p>{{Compat("api.TextEncoder")}}</p>
</div>

<h2 id="See_also">See also</h2>

<ul>
 <li>The {{DOMxRef("TextDecoder")}} interface describing the inverse operation.</li>
 <li><a href="/en-US/Add-ons/Code_snippets/StringView"><code>StringView</code></a> – a C-like representation of strings based on typed arrays</li>
 <li>A <a href="https://github.com/inexorabletash/text-encoding">shim</a> allowing to use this interface in browsers that don't support it.</li>
 <li><code><a href="/en-US/docs/Components.utils.importGlobalProperties">Components.utils.importGlobalProperties</a></code></li>
</ul>
