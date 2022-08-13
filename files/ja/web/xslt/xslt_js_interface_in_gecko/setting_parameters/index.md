---
title: XSLT - パラメータの設定
slug: Web/XSLT/XSLT_JS_interface_in_Gecko/Setting_Parameters
tags:
  - XSLT
translation_of: Web/XSLT/XSLT_JS_interface_in_Gecko/Setting_Parameters
---
<h2 id="Setting_Parameters" name="Setting_Parameters">パラメータの設定</h2>

<p>プリコードされた .xsl ファイルと .xml ファイルを使用して変換を実行するのは非常に便利ですが、JavaScript から .xsl ファイルを構成する方がさらに便利です。たとえば、JavaScript と XSLT を使用して XML データをソートして表示することができます。並べ替えは昇順ソートと降順ソートの間で交互に行わなければなりません。<br>
 <br>
 XSLTは <code>xsl:stylesheet</code> 要素の子である <code>xsl:param</code> 要素を提供します。{{domxref('XSLTProcessor')}} は、これらのパラメータと対話する3つのJavaScriptメソッドを提供します：{{domxref('XSLTProcessor.setParameter()')}}、{{domxref('XSLTProcessor.getParameter()')}} および {{domxref('XSLTProcessor.removeParameter()')}} です。それらはすべて、最初の引数として <code>xsl:param</code> の名前空間URIをとります (通常 param はデフォルトの名前空間に入るため、<code>null</code> を渡すだけで十分です)。<code>xsl:param</code> のローカル名は2番目の引数です。setParameterには3番目の引数、つまりパラメータが設定される値が必要です。</p>

<p><small><strong>Figure 7 : パラメータ</strong></small></p>

<pre class="brush: js">/* XSLT:

&lt;xsl:param name="myOrder" /&gt;

*/

// JavaScript:

var sortVal = xsltProcessor.getParameter(null, "myOrder");

if (sortVal == "" || sortVal == "descending")
  xsltProcessor.setParameter(null, "myOrder", "ascending");
else
  xsltProcessor.setParameter(null, "myOrder", "descending");
</pre>
