---
title: Signature (functions) (シグネチャ (関数))
slug: Glossary/Signature/Function
tags:
  - CodingScripting
  - Glossary
  - Java
  - JavaScript
translation_of: Glossary/Signature/Function
original_slug: Glossary/Signature/関数
---
<p><strong>関数シグネチャ</strong> (もしくは型シグネチャ、メソッドシグネチャ) は{{Glossary("Function", "関数")}}や{{Glossary("Method", "メソッド")}}の入力と出力を定義します。</p>

<p>シグネチャは以下のものを含みます:</p>

<ul>
 <li>{{Glossary("Parameter", "パラメーター")}} とその {{Glossary("Type", "型")}}</li>
 <li>返り値とその型</li>
 <li>スローされる可能性のある{{Glossary("Exception", "例外")}}</li>
 <li>{{Glossary("OOP", "オブジェクト指向")}} プログラムにおける利用可能性の情報(<code>public</code><font face="Open Sans, Arial, sans-serif">、</font><code>static</code><font face="Open Sans, Arial, sans-serif">、</font><code>prototype</code> のようなキーワード)。</li>
</ul>

<h2 id="In_depth" name="In_depth">さらに詳しく</h2>

<h3 id="Signatures_in_JavaScript" name="Signatures_in_JavaScript">JavaScript におけるシグネチャ</h3>

<p>{{Glossary("JavaScript")}} は型付けの弱い動的言語です。なので先行して変数の型を宣言する必要がありません。プログラムが処理される間に自動的に型が決定します。JavaScript のシグネチャはそれでもやはりメソッドの情報を付与します:</p>

<pre class="brush: js">MyObject.prototype.myFunction(value)</pre>

<ul>
 <li>メソッドは <code>MyObject</code> という {{Glossary("オブジェクト")}} に追加される</li>
 <li>
  <p>メソッドは{{Glossary("static method", "静的メソッド")}}になるのとは対照的に <code>MyObject</code> の <code>prototype</code> に追加される (したがって{{Glossary("instance method", "インスタンスメソッド")}}となる)。</p>
 </li>
 <li>関数名は <code>myFunction</code> である。</li>
 <li>メソッドは未定義の <code>value</code> という一つのパラメータを受け取る。</li>
</ul>

<h3 id="Signatures_in_Java" name="Signatures_in_Java">Java におけるシグネチャ</h3>

<p>{{Glossary("Java")}}では、シグネチャは仮想マシンコードレベルでメソッドやクラスを区別するために使用されます。 Java コードを実行できるように変数の型をコード中で宣言する必要があります。 Java は<em>強い型付け</em>がなされ、コンパイル中にすべてのパラメーターが正しいかどうかをチェックします。</p>

<pre class="brush: java">public static void main(String[] args)</pre>

<ul>
 <li><code>public</code> キーワードはアクセス修飾子ですべてのオブジェクトからこのメソッドを呼び出すことができることを明示します。</li>
 <li><code>static</code> キーワードはこのメソッドがインスタンスメソッドとは対照的にクラスメソッドであることを明示します。</li>
 <li><code>void</code> キーワードはこのメソッドの返り値が無いことを明示します。</li>
 <li><font face="Open Sans, Arial, sans-serif">メソッド名は </font><code>main</code> です。</li>
 <li>メソッドは <code>args</code> という <code>String</code> 配列型のパラメータを一つ受け取ります。</li>
</ul>

<h2 id="さらに学ぶ"><code>さらに学ぶ</code></h2>

<h3 id="一般知識"><code>一般知識</code></h3>

<ul>
 <li><span>Wikipediaの {{Interwiki("wikipedia", "Type signature#Java", "Java internal type signatures")}}</span></li>
</ul>
