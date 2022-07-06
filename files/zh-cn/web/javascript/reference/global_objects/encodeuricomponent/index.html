---
title: encodeURIComponent()
slug: Web/JavaScript/Reference/Global_Objects/encodeURIComponent
tags:
  - JavaScript
  - URI
  - 统一资源标识符
translation_of: Web/JavaScript/Reference/Global_Objects/encodeURIComponent
---
<div>{{jsSidebar("Objects")}}</div>

<p><code><strong>encodeURIComponent()</strong></code> 函数通过将一个，两个，三个或四个表示字符的 UTF-8 编码的转义序列替换某些字符的每个实例来编码 {{glossary("URI")}}（对于由两个“代理”字符组成的字符而言，将仅是四个转义序列）。</p>

<p>{{EmbedInteractiveExample("pages/js/globalprops-encodeuricomponent.html","shorter")}}</p>

<h2 id="语法">语法</h2>

<pre class="syntaxbox">encodeURIComponent(str);</pre>

<h3 id="参数">参数</h3>

<dl>
 <dt><code>uriComponent</code></dt>
 <dd>一个 string、number、boolean、null，undefined 或者任何 object。在编码之前，uriComponent 参数会被转化为字符串。</dd>
</dl>

<h3 id="返回值">返回值</h3>

<p>原字串作为 URI 组成部分被被编码后的新字符串。</p>

<h2 id="描述">描述</h2>

<p><code>encodeURIComponent</code> 转义除了如下所示外的所有字符：</p>

<pre>不转义的字符：
    A-Z a-z 0-9 <code>-</code> <code>_</code> <code>.</code> <code>!</code> <code>~</code> <code>*</code> <code>'</code> <code>(</code> <code>)</code></pre>

<p><code>encodeURIComponent()</code> 和 <strong><code>encodeURI</code></strong> 有以下几个不同点：</p>

<pre class="brush: js notranslate">var set1 = ";,/?:@&amp;=+$";  // 保留字符
var set2 = "-_.!~*'()";   // 不转义字符
var set3 = "#";           // 数字标志
var set4 = "ABC abc 123"; // 字母数字字符和空格

console.log(encodeURI(set1)); // ;,/?:@&amp;=+$
console.log(encodeURI(set2)); // -_.!~*'()
console.log(encodeURI(set3)); // #
console.log(encodeURI(set4)); // ABC%20abc%20123 (空格被编码为 %20)

console.log(encodeURIComponent(set1)); // %3B%2C%2F%3F%3A%40%26%3D%2B%24
console.log(encodeURIComponent(set2)); // -_.!~*'()
console.log(encodeURIComponent(set3)); // %23
console.log(encodeURIComponent(set4)); // ABC%20abc%20123 (the space gets encoded as %20)</pre>

<p>注意，如果试图编码一个非高 - 低位完整的代理字符，将会抛出一个 {{jsxref("URIError")}} 错误，例如：</p>

<pre class="brush: js">// 高低位完整
alert(encodeURIComponent('\uD800\uDFFF'));

// 只有高位，将抛出"URIError: malformed URI sequence"
alert(encodeURIComponent('\uD800'));

// 只有低位，将抛出"URIError: malformed URI sequence"
alert(encodeURIComponent('\uDFFF')); </pre>

<p>为了避免服务器收到不可预知的请求，对任何用户输入的作为 URI 部分的内容你都需要用 encodeURIComponent 进行转义。比如，一个用户可能会输入"<code>Thyme &amp;time=again</code>"作为<code>comment</code>变量的一部分。如果不使用 encodeURIComponent 对此内容进行转义，服务器得到的将是<code>comment=Thyme%20&amp;time=again</code>。请注意，"&amp;"符号和"="符号产生了一个新的键值对，所以服务器得到两个键值对（一个键值对是<code>comment=Thyme</code>，另一个则是<code>time=again</code>），而不是一个键值对。</p>

<p>对于 <a href="https://www.whatwg.org/specs/web-apps/current-work/multipage/association-of-controls-and-forms.html#application/x-www-form-urlencoded-encoding-algorithm"><code>application/x-www-form-urlencoded</code></a> (POST) 这种数据方式，空格需要被替换成 '+'，所以通常使用 <code>encodeURIComponent</code> 的时候还会把 "%20" 替换为 "+"。</p>

<p>为了更严格的遵循 {{rfc("3986")}}（它保留 !, ', (, ), 和 *），即使这些字符并没有正式划定 URI 的用途，下面这种方式是比较安全的：</p>

<pre class="brush: js">function fixedEncodeURIComponent (str) {
  return encodeURIComponent(str).replace(/[!'()*]/g, function(c) {
    return '%' + c.charCodeAt(0).toString(16).toUpperCase();
  });
}</pre>

<h2 id="示例">示例</h2>

<p>下面这个例子提供了 UTF-8 下 {{HTTPHeader("Content-Disposition")}} 和 {{HTTPHeader("Link")}} 的服务器响应头信息的参数（例如 UTF-8 文件名)：</p>

<pre class="brush: js">var fileName = 'my file(2).txt';
var header = "Content-Disposition: attachment; filename*=UTF-8''"
             + encodeRFC5987ValueChars(fileName);

console.log(header);
// 输出 "Content-Disposition: attachment; filename*=UTF-8''my%20file%282%29.txt"


function encodeRFC5987ValueChars (str) {
    return encodeURIComponent(str).
        // 注意，尽管 RFC3986 保留 "!"，但 RFC5987 并没有
        // 所以我们并不需要过滤它。
        replace(/['()]/g, escape). // i.e., %27 %28 %29
        replace(/\*/g, '%2A').
            // 下面的并不是 RFC5987 中 URI 编码必须的
            // 所以对于 |`^ 这 3 个字符我们可以稍稍提高一点可读性
        replace(/%(?:7C|60|5E)/g, unescape);
}

// 以下是上述功能的替换方案
function encodeRFC5987ValueChars2(str) {
  return encodeURIComponent(str).
    // 注意，尽管 RFC3986 保留 "!"，但 RFC5987 并没有，
    // 所以我们并不需要过滤它。
    replace(/['()*]/g, c => "%" + c.charCodeAt(0).toString(16)). // i.e., %27 %28 %29 %2a (请注意，"*" 的有效编码是 %2A
                                                                 // 这需要调用 toUpperCase() 方法来正确编码)
    // 以下并不是 RFC5987 编码所必须的，
    // 这样我们可以让 |`^ 在网络上获取更好的可读性
    replace(/%(7C|60|5E)/g, (str, hex) => String.fromCharCode(parseInt(hex, 16)));
}
</pre>

<h2 id="规范">规范</h2>

<div>{{Specifications}}</div>

<h2 id="浏览器兼容性">浏览器兼容性</h2>

<p>{{Compat}}</p>

<h2 id="参见">参见</h2>

<ul>
 <li>{{jsxref("decodeURI")}}</li>
 <li>{{jsxref("encodeURI")}}</li>
 <li>{{jsxref("decodeURIComponent")}}</li>
</ul>
