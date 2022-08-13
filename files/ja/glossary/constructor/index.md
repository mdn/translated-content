---
title: Constructor (コンストラクター)
slug: Glossary/Constructor
tags:
  - CodingScripting
  - Glossary
  - 用語集
translation_of: Glossary/Constructor
---
<p><strong>コンストラクター</strong>は、インスタンス化された特定のクラス{{glossary("object","オブジェクト")}}に属しています。コンストラクターは、そのオブジェクトを初期化し、オブジェクトの非公開の情報にアクセスできるようにします。コンストラクターの概念は、ほとんどの{{glossary("OOP","オブジェクト指向プログラミング")}}言語にあります。本質的に、{{glossary("JavaScript")}} のコンストラクターは{{glossary("class","クラス")}}のインスタンスで宣言します。</p>

<h2 id="Syntax" name="Syntax">構文</h2>

<pre class="brush: js">// これは Default クラスの既定のコンストラクターです
function Default() {
}

// これは Overloaded クラスでオーバーロードされた
// 引数付きのコンストラクターです。
function Overloaded(arg1, arg2, ...,argN){
}
</pre>

<p>JavaScript でクラスのコンストラクターを呼び出すには、<code>new</code> 演算子を使用して新しい{{glossary("object reference","オブジェクトへの参照")}}を{{glossary("variable","変数")}}に割り当てます。</p>

<pre class="brush: js">function Default() {
}

// Default オブジェクトの新しい参照が、ローカル変数の
// defaultReference に割り当てられます
var defaultReference = new Default();
</pre>



<h2 id="Learn_more" name="Learn_more">詳細情報</h2>

<h3 id="General_knowledge" name="General_knowledge">一般知識</h3>

<ul>
 <li>ウィキペディアの{{Interwiki("wikipedia", "コンストラクタ")}}の記事</li>
</ul>

<h3 id="Technical_reference" name="Technical_reference">技術リファレンス</h3>

<ul>
 <li>MDN の <a href="/ja/docs/Web/JavaScript/Introduction_to_Object-Oriented_JavaScript#The_Constructor">JavaScript オブジェクト入門のコンストラクター</a>の記事</li>
 <li>MDN の JavaScript の <a href="/ja/docs/Web/JavaScript/Reference/Operators/new">new 演算子</a>の記事</li>
</ul>
