---
title: Microsummary XML grammar reference
slug: orphaned/Microsummary_XML_grammar_reference
tags:
  - Microsummaries
original_slug: Microsummary_XML_grammar_reference
---
<p> </p>
<h2 id=".E3.81.AF.E3.81.98.E3.82.81.E3.81.AB" name=".E3.81.AF.E3.81.98.E3.82.81.E3.81.AB">はじめに</h2>
<p>マイクロサマリジェネレータとは、ウェブページから特定の情報を抜き出し、そのページの内容に基づいてそのタイトルが変わるブックマークとして概要を表示するための方法を記述した XML 文書のことです。</p>
<p>この記事では各要素とその属性について説明しつつ、マイクロサマリジェネレータの組み立てに使用する XML の文法に関する詳細情報を提供します。マイクロサマリの作成方法についての入門記事は <a href="ja/Creating_a_Microsummary">マイクロサマリの作成</a> です。</p>
<h2 id=".E4.BE.8B" name=".E4.BE.8B">例</h2>
<p><a href="ja/Creating_a_Microsummary">マイクロサマリの作成</a> のチュートリアルで作成したマイクロサマリジェネレータは次のものです。</p>
<pre class="eval">&lt;?xml version="1.0" encoding="UTF-8"?&gt;
&lt;generator xmlns="<span class="nowiki">http://www.mozilla.org/microsummaries/0.1</span>" name="Firefox Download Count"&gt;
  &lt;template&gt;
    &lt;transform xmlns="<span class="nowiki">http://www.w3.org/1999/XSL/Transform</span>" version="1.0"&gt;
      &lt;output method="text"/&gt;
      &lt;template match="/"&gt;
        &lt;value-of select="id('download-count')"/&gt;
        &lt;text&gt; Fx downloads&lt;/text&gt;
      &lt;/template&gt;
    &lt;/transform&gt;
  &lt;/template&gt;
  &lt;pages&gt;
    &lt;include&gt;<span class="nowiki">http://(www\.)?spreadfirefox\.com/(index\.php)?</span>&lt;/include&gt;
  &lt;/pages&gt;
&lt;/generator&gt;
</pre>
<h2 id=".E5.90.8D.E5.89.8D.E7.A9.BA.E9.96.93" name=".E5.90.8D.E5.89.8D.E7.A9.BA.E9.96.93">名前空間</h2>
<p>マイクロサマリジェネレータの XML 文書で使用する名前空間 URI は次のものです。</p>
<pre class="eval"><span class="nowiki">http://www.mozilla.org/microsummaries/0.1</span>
</pre>
<p>マイクロサマリジェネレータ文書におけるすべての要素はこの名前空間内になければなりません。ただし <code><a href="#.3Ctemplate.3E_.E8.A6.81.E7.B4.A0">&lt;template&gt;</a></code> 要素の子孫は例外であり、次の XSLT 名前空間内になければなりません。</p>
<pre class="eval"><span class="nowiki">http://www.w3.org/1999/XSL/Transform</span>
</pre>
<h2 id=".3Cgenerator.3E_.E8.A6.81.E7.B4.A0" name=".3Cgenerator.3E_.E8.A6.81.E7.B4.A0"><code>&lt;generator&gt;</code> 要素</h2>
<p><code>&lt;generator&gt;</code> 要素は全マイクロサマリジェネレータのルートタグであり、ジェネレータを記述する XML コードの残りを格納していなければなりません。</p>
<p><b>属性：</b></p>
<dl>
 <dt>
  <code>name</code>（必須）</dt>
 <dd>
  ジェネレータによって作成されるマイクロサマリに付ける、説明的かつ人間が読める名前。</dd>
 <dt>
  <code>uri</code>（オプション）</dt>
 <dd>
  ジェネレータを一意的に識別する妥当な URI。Firefox のコードおよび拡張機能によって動的に作成されるジェネレータにのみ該当。<code>nsSidebar::addMicrosummaryGenerator</code> を通じてウェブからインストールされるジェネレータはそれがダウンロードされたリモート URL で識別される。また、そのような動作のために Firefox はこの属性の値を無視する。</dd>
</dl>
<p><b>子要素：</b></p>
<dl>
 <dt>
  <code><a href="#.3Ctemplate.3E_.E8.A6.81.E7.B4.A0">&lt;template&gt;</a></code>（必須）</dt>
 <dd>
  ページをマイクロサマリに変換する方法を定義する。</dd>
 <dt>
  <code><a href="#.3Cpages.3E_.E8.A6.81.E7.B4.A0">&lt;pages&gt;</a></code>（必須）</dt>
 <dd>
  ジェネレータがサマリを作成できるページの集合を指定する。</dd>
 <dt>
  <code><a href="#.3Cupdate.3E_.E8.A6.81.E7.B4.A0">&lt;update&gt;</a></code>（オプション）</dt>
 <dd>
  Firefox がマイクロサマリを更新する頻度を指定する。</dd>
</dl>
<h2 id=".3Ctemplate.3E_.E8.A6.81.E7.B4.A0" name=".3Ctemplate.3E_.E8.A6.81.E7.B4.A0"><code>&lt;template&gt;</code> 要素</h2>
<p><code>&lt;template&gt;</code> 要素にはウェブページをマイクロサマリに変換する XSLT スタイルシートを格納します。</p>
<p><b>属性：</b></p>
<p>
 <i>
  なし。</i>
</p>
<p><b>子要素：</b></p>
<dl>
 <dt>
  <code>&lt;stylesheet&gt;</code> または <code>&lt;transform&gt;</code>（必須）</dt>
 <dd>
  変換を行う XSLT スタイルシート。</dd>
</dl>
<p>各 <a href="ja/XSLT">XSLT</a> について、<code>&lt;stylesheet&gt;</code> あるいは <code>&lt;transform&gt;</code> タグのどちらかを用いたスタイルシート子要素を指定します。これらはどちらも同じ機能を果たします。</p>
<div class="note">
 <p><b>注意：</b>&lt;template&gt; 要素は必ずマイクロサマリ名前空間 (<span class="nowiki">http://www.mozilla.org/microsummaries/0.1</span>) 内になければなりませんが、その <code>&lt;stylesheet&gt;</code>/<code>&lt;transform&gt;</code> 子要素は必ず XSLT 名前空間 (<span class="nowiki">http://www.w3.org/1999/XSL/Transform</span>) 内になければなりません。</p>
</div>
<h2 id=".3Cpages.3E_.E8.A6.81.E7.B4.A0" name=".3Cpages.3E_.E8.A6.81.E7.B4.A0"><code>&lt;pages&gt;</code> 要素</h2>
<p><code>&lt;pages&gt;</code> 要素はジェネレータがサマリを作成できるページの集合を指定します。</p>
<p><b>属性：</b></p>
<p>
 <i>
  なし。</i>
</p>
<p><b>子要素：</b></p>
<dl>
 <dt>
  <code><a href="#.3Cinclude.3E_.E8.A6.81.E7.B4.A0">&lt;include&gt;</a></code>（オプション）</dt>
 <dd>
  ジェネレータがサマリを作成できるページの URL にマッチする正規表現。</dd>
 <dt>
  <code><a href="#.3Cexclude.3E_.E8.A6.81.E7.B4.A0">&lt;exclude&gt;</a></code>（オプション）</dt>
 <dd>
  ジェネレータがサマリを作成できないページの URL にマッチする正規表現。</dd>
</dl>
<p><code>&lt;pages&gt;</code> 要素にはゼロ個以上の <code>&lt;include&gt;</code> および <code>&lt;exclude&gt;</code> 子要素を含めることができます。そのそれぞれは JavaScript と互換性のある妥当な正規表現を含んでいなければなりません。また、他のどんな要素も含んではなりません。属性は全くありません。</p>
<p>ページからサマリを作成できるかどうかを決定するためにジェネレータがチェックされる際、子要素で指定された正規表現がそのページの URL に対して評価されます。少なくとも 1 つの <code>&lt;include&gt;</code> の正規表現がページの URL にマッチし、かつ <code>&lt;exclude&gt;</code> の正規表現がページの URL にマッチしなかった場合、ジェネレータはそのページのサマリを作成可能であると判断されます。</p>
<p><code>&lt;pages&gt;</code> 要素内に子要素が現れる順番には特に重要ではありません。子要素のタグとその中の正規表現の間のホワイトスペースも特に重要ではありません。つまり、それは正規表現の一部とは見なされず、その正規表現の評価には影響を及ぼしません。</p>
<p>次の例では <code>www.example.com</code> のウェブサイトにおいて <code>about.html</code> という名前のページ以外の全ページのサマリを作成できるジェネレータができます。</p>
<pre class="eval">&lt;pages&gt;
  &lt;include&gt;
    <span class="nowiki">^http://www\.example\.com/</span>
  &lt;/include&gt;
  &lt;exclude&gt;/about\.html&lt;/exclude&gt;
&lt;/pages&gt;
</pre>
<div class="note">
 <b>注意：</b>マッチさせたい URL をただ含んでいるだけの URL にマッチしてしまわないようにするためにも、ページの URL の先頭にマッチさせたい正規表現はキャレット (^) から始めなければなりません。例えば、<code><span class="nowiki">http://www\.example\.com/</span></code> という正規表現は <code><span class="nowiki">http://www.example.com/</span></code> という URL にも <code><span class="nowiki">http://www.evil.com/http://www.example.com/</span></code> という URL にもマッチします。しかし、<code><span class="nowiki">^http://www\.example\.com/</span></code> という正規表現は前者の URL にしかマッチしません。</div>
<p>ジェネレータにとって妥当な正規表現の構文の詳細については <a href="ja/Core_JavaScript_1.5_Reference/Global_Objects/RegExp">Core_JavaScript_1.5_Reference:Global_Objects:RegExp</a> のリファレンスを参照してください。また、<a href="ja/Creating_regular_expressions_for_a_microsummary_generator">マイクロサマリジェネレータ用正規表現の作成</a> では URL にマッチする正規表現の書き方を一歩一歩解説しています。</p>
<h2 id=".3Cinclude.3E_.E8.A6.81.E7.B4.A0" name=".3Cinclude.3E_.E8.A6.81.E7.B4.A0"><code>&lt;include&gt;</code> 要素</h2>
<p><code>&lt;include&gt;</code> 要素はジェネレータがサマリを作成できるページの集合を指定します。これは <code>&lt;pages&gt;</code> 要素の子でなければなりません。また、JavaScript 互換の正規表現を含んでいなければなりません。</p>
<p>この要素の使用についての詳細は <a href="#.3Cpages.3E_.E8.A6.81.E7.B4.A0">&lt;pages&gt; 要素</a> を参照してください。</p>
<h2 id=".3Cexclude.3E_.E8.A6.81.E7.B4.A0" name=".3Cexclude.3E_.E8.A6.81.E7.B4.A0"><code>&lt;exclude&gt;</code> 要素</h2>
<p><code>&lt;exclude&gt;</code> 要素はジェネレータがサマリを作成できないページの集合を指定します。これは <code>&lt;pages&gt;</code> 要素の子でなければなりません。また、JavaScript 互換の正規表現を含んでいなければなりません。</p>
<p>この要素の使用についての詳細は <a href="#.3Cpages.3E_.E8.A6.81.E7.B4.A0">&lt;pages&gt; 要素</a> を参照してください。</p>
<h2 id=".3Cupdate.3E_.E8.A6.81.E7.B4.A0" name=".3Cupdate.3E_.E8.A6.81.E7.B4.A0"><code>&lt;update&gt;</code> 要素</h2>
<p>オプションである <code>&lt;update&gt;</code> 要素はジェネレータによって作成されるマイクロサマリを Firefox が更新する頻度を指定します。この要素には絶対的な更新間隔を指定することも、サマリを作成するページの内容に基づいた一連の条件付きの間隔を指定することもできます。</p>
<p><b>属性：</b></p>
<dl>
 <dt>
  <code>interval</code>（オプション）</dt>
 <dd>
  更新間で経過しなければならない絶対的な時間間隔。単位は分。</dd>
</dl>
<p><b>子要素：</b></p>
<dl>
 <dt>
  <code><a href="#.3Ccondition.3E_.E8.A6.81.E7.B4.A0">&lt;condition&gt;</a></code>（オプション）</dt>
 <dd>
  XPath の論理式、およびその式が true に評価された場合に更新間で経過しなければならない分単位の条件付き時間間隔。</dd>
</dl>
<p><code>interval</code> 属性は絶対的な間隔を分単位で定義します。その値は 1 以上の数でなければなりません。あまり実用的ではないでしょうが、小数値（例：5.5 分）も使えます。</p>
<p><code>&lt;update&gt;</code> 要素には <code>&lt;condition&gt;</code> 子要素をいくつでも含めることができます。</p>
<p>以下のルールに従って、ジェネレータが作成するマイクロサマリにどの間隔を適用すべきかを Firefox は決定します。</p>
<ol>
 <li>Firefox は文書での順番どおりに各 <code>&lt;condition&gt;</code> 子要素を処理する。各要素について、サマリを作成するページに対してその要素の XPath の論理式を Firefox は評価する。その式が <code>true</code> に評価されれば Firefox はその要素の間隔を適用し、子要素の処理を停止する。このようにして、最初にマッチした <code>&lt;condition&gt;</code> によって更新間隔が決まる。</li>
 <li><code>&lt;condition&gt;</code> 子要素がない場合、あるいは <code>true</code> に評価される式がない場合、Firefox は <code>&lt;update&gt;</code> 要素の <code>interval</code> 属性の値を適用する。</li>
 <li><code>&lt;update&gt;</code> 要素に <code>interval</code> 属性が含まれていない場合、Firefox は browser.microsummary.updateInterval という設定項目で指定された間隔を適用する。</li>
 <li>その設定項目が未設定の場合、Firefox はそのデフォルトの更新間隔である 30 分を適用する。</li>
</ol>
<p><b>注意：</b></p>
<ul>
 <li>この要素で指定された更新間隔が絶対的なものか条件付きのものかにかかわらず、Firefox は 1 分で 1 回より多くマイクロサマリを更新することはない。</li>
 <li>Firefox は期限切れのマイクロサマリを 15 秒ごとにチェックするため、指示された間隔から 15 秒後にマイクロサマリの更新が行われることもあり得る。</li>
 <li>マイクロサマリ更新の際、Firefox はブラウザキャッシュを尊重するため、キャッシュにそのページのまだ新しいコピーが含まれていればそのマイクロサマリを更新するためにページをリロードするということはない。</li>
</ul>
<h2 id=".3Ccondition.3E_.E8.A6.81.E7.B4.A0" name=".3Ccondition.3E_.E8.A6.81.E7.B4.A0"><code>&lt;condition&gt;</code> 要素</h2>
<p>オプションである <code>&lt;condition&gt;</code> 要素は XPath の論理式、およびサマリを作成するページに対してその式が true に評価された場合に更新間で経過しなければならない分単位の条件付き時間間隔を指定します。<code>&lt;update&gt;</code> 要素の子でなければなりません。</p>
<p><b>属性：</b></p>
<dl>
 <dt>
  <code>expression</code>（必須）</dt>
 <dd>
  サマリを作成するページに対して評価する XPath の論理式。</dd>
 <dt>
  <code>interval</code>（必須）</dt>
 <dd>
  式が <code>true</code> に評価された場合に更新間で経過しなければならない時間間隔。単位は分。</dd>
</dl>
<p><b>子要素：</b></p>
<p>
 <i>
  なし。</i>
</p>
<p>この要素の使用についての詳細は <a href="#.3Cupdate.3E_.E8.A6.81.E7.B4.A0"><code>&lt;update&gt;</code> 要素</a> を参照してください。</p>
<h2 id=".E9.96.A2.E9.80.A3.E9.A0.85.E7.9B.AE" name=".E9.96.A2.E9.80.A3.E9.A0.85.E7.9B.AE">関連項目</h2>
<ul>
 <li><a href="ja/Creating_a_Microsummary">マイクロサマリの作成</a></li>
 <li><a href="ja/XSLT">XSLT</a></li>
</ul>
