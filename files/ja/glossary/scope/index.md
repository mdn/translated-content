---
title: Scope (スコープ)
slug: Glossary/Scope
tags:
  - CodingScripting
  - Glossary
  - JavaScript
translation_of: Glossary/Scope
---
<p>実行の現在のコンテキスト。{{glossary("value","値")}} と<strong>式</strong>が「見える」、または参照できる文脈。<strong>{{glossary("variable","変数")}}</strong>や他の式が "現在のスコープ内にない" 場合、使用できません。スコープを階層構造で階層化して、子スコープから親スコープにアクセスできるようにすることもできますが、その逆はできません。</p>

<p><strong>{{glossary("function", "関数")}}</strong>は {{glossary("JavaScript")}} の<strong>クロージャ</strong>として機能し、すなわちスコープを作成して、 (例えば) 関数内で排他的に定義された変数に、関数の外側からや他の関数の中からアクセスできないようになります。たとえば、以下は無効です。</p>

<pre class="brush: js notranslate">function exampleFunction() {
    var x = "declared inside function";  // x can only be used in exampleFunction
    console.log("Inside function");
    console.log(x);
}

console.log(x);  // Causes error</pre>

<p>ただし、次のコードでは変数が関数外で宣言されており、グローバルになるため、有効になります。</p>

<pre class="brush: js notranslate">var x = "declared outside function";

exampleFunction();

function exampleFunction() {
    console.log("Inside function");
    console.log(x);
}

console.log("Outside function");
console.log(x);</pre>

<h2 id="Learn_more" name="Learn_more">詳細情報</h2>

<h3 id="General_knowledge" name="General_knowledge">一般知識</h3>

<ul>
 <li>Wikipedia の {{Interwiki("wikipedia", "スコープ")}}</li>
</ul>
