---
title: 'TypeError: cyclic object value'
slug: Web/JavaScript/Reference/Errors/Cyclic_object_value
tags:
  - Error
  - Errors
  - JavaScript
  - TypeError
translation_of: Web/JavaScript/Reference/Errors/Cyclic_object_value
---
<div>{{jsSidebar("Errors")}}</div>

<p>JavaScript の例外 "cyclic object value" は、 <a href="https://www.json.org/">JSON</a> の中にオブジェクトの参照が見つかったときに発生します。 {{jsxref("JSON.stringify()")}} はこれを解決しようとせず、これによって失敗します。</p>

<h2 id="Message" name="Message">メッセージ</h2>

<pre class="syntaxbox notranslate">TypeError: cyclic object value (Firefox)
TypeError: Converting circular structure to JSON (Chrome and Opera)
TypeError: Circular reference in value argument not supported (Edge)
</pre>

<h2 id="Error_type">エラーの種類</h2>

<p>{{jsxref("TypeError")}}</p>

<h2 id="What_went_wrong">エラーの原因</h2>

<p><a href="https://www.json.org/">JSON 形式</a>はオブジェクト参照に対応していません (<a href="http://tools.ietf.org/html/draft-pbryan-zyp-json-ref-03">IETF の草案はありますが</a>)。したがって {{jsxref("JSON.stringify()")}} はこれを解決しようとせず、これによって失敗します。</p>

<h2 id="Examples" name="Examples">例</h2>

<h3 id="Circular_references" name="Circular_references">循環参照</h3>

<p>次のような循環構造体では、</p>

<pre class="brush: js notranslate">var circularReference = {otherData: 123};
circularReference.myself = circularReference;
</pre>

<p>{{jsxref("JSON.stringify()")}} は失敗します。</p>

<pre class="brush: js example-bad notranslate">JSON.stringify(circularReference);
// TypeError: cyclic object value
</pre>

<p>循環参照をシリアライズするには、それに対応したライブラリ (例えば <a href="https://github.com/douglascrockford/JSON-js/blob/master/cycle.js">cycle.js</a>) を使用したり、自分自身で循環参照を探してシリアライズ可能な値に置き換える (または削除する) ことを求める解決策を実装することもできます。</p>

<p>次のスニペットは、 {{jsxref("JSON.stringify()")}} の <code>replacer</code> 引数を使用して循環参照を検索してフィルタリングする方法を示しています (これによりデータ損失が発生します)。</p>

<pre class="brush: js notranslate">const getCircularReplacer = () =&gt; {
  const seen = new WeakSet();
  return (key, value) =&gt; {
    if (typeof value === "object" &amp;&amp; value !== null) {
      if (seen.has(value)) {
        return;
      }
      seen.add(value);
    }
    return value;
  };
};

JSON.stringify(circularReference, getCircularReplacer());
// {"otherData":123}
</pre>

<h2 id="See_also" name="See_also">関連情報</h2>

<ul>
 <li>{{jsxref("JSON.stringify")}}</li>
 <li><a href="https://github.com/douglascrockford/JSON-js/blob/master/cycle.js">cycle.js</a> – <code>JSON.decycle</code> と <code> JSON.retrocycle</code> という 2 つの関数を導入し、循環構造と dag を JSON でエンコードしてからリカバリーできます。</li>
</ul>
