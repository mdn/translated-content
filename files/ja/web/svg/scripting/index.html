---
title: スクリプティング
slug: Web/SVG/Scripting
tags:
  - SVG
translation_of: Web/SVG/Scripting
---
<p>
</p>
<h3 id=".E3.82.A4.E3.83.99.E3.83.B3.E3.83.88.E3.82.B3.E3.83.BC.E3.83.89.E3.81.AE.E5.88.9D.E6.9C.9F.E6.8C.99.E5.8B.95.E3.82.92.E9.98.B2.E3.81.90" name=".E3.82.A4.E3.83.99.E3.83.B3.E3.83.88.E3.82.B3.E3.83.BC.E3.83.89.E3.81.AE.E5.88.9D.E6.9C.9F.E6.8C.99.E5.8B.95.E3.82.92.E9.98.B2.E3.81.90"> イベントコードの初期挙動を防ぐ </h3>
<p>ドラッグ・アンド・ドロップのコードを書いていると、時々、ページのテキストをドラッグ中に誤って付随的に選択されてしまうことがあります。
もしくは自分のコードの中でバックスペースキーを使いたい場合、バックスペースキーを押下したときに前のページへ戻る、ブラウザの既定の振る舞いを上書きしたいと望むでしょう。ブラウザが前のページに戻るのを防ぎたいと望むでしょう。
このような場合、<code>evt.preventDefault()</code> メソッドを使うことが出来ます。
</p>
<h3 id=".E3.82.AA.E3.83.96.E3.82.B8.E3.82.A7.E3.82.AF.E3.83.88.E3.81.AB_eventListeners_.E3.82.92.E4.BD.BF.E3.81.86" name=".E3.82.AA.E3.83.96.E3.82.B8.E3.82.A7.E3.82.AF.E3.83.88.E3.81.AB_eventListeners_.E3.82.92.E4.BD.BF.E3.81.86"> オブジェクトに <code>eventListeners</code> を使う </h3>
<p>対話的な SVG を書くとき、<code>addEventListener()</code> と <code>removeEventListener()</code> メソッドはとても便利です。これらのメソッドの二番目のパラメータとして、<code>handleEvent</code> インタフェースを実装するオブジェクトを渡すことができます。
</p>
<pre>function myRect(x,y,w,h,message){
  this.message=message

  this.rect=document.createElementNS("http://www.w3.org/2000/svg","rect")
  this.rect.setAttributeNS(null,"x",x)
  this.rect.setAttributeNS(null,"y",y)
  this.rect.setAttributeNS(null,"width",w)
  this.rect.setAttributeNS(null,"height",h)
  document.documentElement.appendChild(this.rect)

  this.rect.addEventListener("click",this,false)

  this.handleEvent= function(evt){
    switch (evt.type){
     case "click":
      alert(this.message)
      break;
     }
    }
   }
</pre>
<h3 id=".E6.96.87.E6.9B.B8.E9.96.93.E3.81.AE.E3.82.B9.E3.82.AF.E3.83.AA.E3.83.97.E3.83.86.E3.82.A3.E3.83.B3.E3.82.B0_-_.E5.9F.8B.E3.82.81.E8.BE.BC.E3.81.BF_SVG_.E3.81.AE.E5.8F.82.E7.85.A7" name=".E6.96.87.E6.9B.B8.E9.96.93.E3.81.AE.E3.82.B9.E3.82.AF.E3.83.AA.E3.83.97.E3.83.86.E3.82.A3.E3.83.B3.E3.82.B0_-_.E5.9F.8B.E3.82.81.E8.BE.BC.E3.81.BF_SVG_.E3.81.AE.E5.8F.82.E7.85.A7"> 文書間のスクリプティング - 埋め込み SVG の参照 </h3>
<p>HTML 内で SVG を使う場合、Adobe SVG Viewer 3.0 は自動的に SVG 文書を示す <code>svgDocument&lt;code&gt; と呼ばれるウィンドウプロパティをインクルードします。これは Mozilla のネイティヴ実装には当てはまりません。従って Mozilla では &lt;code&gt;window.svgDocument</code> は動きません。代わりに埋め込まれた SVG ドキュメントを参照するために <code>var svgDoc=document.embeds{{ mediawiki.external('\"name_of_svg\"') }}.getSVGDocument();</code> を代替使用することができます。
</p><p>また、<code>document.getElementById("<i>svg_elem_name</i>").getSVGDocument()</code> を使用して同じ結果を得ることもできます。
</p>
<h3 id=".E6.96.87.E6.9B.B8.E9.96.93.E3.81.AE.E3.82.B9.E3.82.AF.E3.83.AA.E3.83.97.E3.83.86.E3.82.A3.E3.83.B3.E3.82.B0_-_JavaScript_.E9.96.A2.E6.95.B0.E3.81.AE.E5.91.BC.E3.81.B3.E3.81.A0.E3.81.97" name=".E6.96.87.E6.9B.B8.E9.96.93.E3.81.AE.E3.82.B9.E3.82.AF.E3.83.AA.E3.83.97.E3.83.86.E3.82.A3.E3.83.B3.E3.82.B0_-_JavaScript_.E9.96.A2.E6.95.B0.E3.81.AE.E5.91.BC.E3.81.B3.E3.81.A0.E3.81.97"> 文書間のスクリプティング - JavaScript 関数の呼びだし </h3>
<p>HTML ドキュメントに埋め込まれた SVG ファイルから HTML ファイルの中にある JavaScript 関数を呼び出すとき、その関数を参照するには <code>parent.functionname()</code> を使うべきです。Adobe SVG Viewer プラグインは <code>functionname()</code> の利用を許可していますが、このようなことを行うには適していません。
</p>
<div class="note">
<p><b>注意:</b> <a class="external" href="http://wiki.svg.org/Inter-Document_Communication">SVG wiki</a> によると Adobe の SVG バージョン 6 プレビュープラグインでは <code>"parent"</code> JavaScript 変数は壊れているとのことです。提案された次善策は <code>parent</code> の代わりに <code>top</code> を使うことです。
</p>
</div>
<p>更なる情報といくつかの例を <a class="external" href="http://wiki.svg.org/Inter-Document_Communication">SVG wiki inter-document scripting page</a> で見付けることが出来ます。
</p>
<h3 id="setProperty_.E3.81.AF3.E3.81.A4.E3.81.AE.E3.83.91.E3.83.A9.E3.83.A1.E3.82.BF.E3.82.92.E6.8C.81.E3.81.A1.E3.81.BE.E3.81.99" name="setProperty_.E3.81.AF3.E3.81.A4.E3.81.AE.E3.83.91.E3.83.A9.E3.83.A1.E3.82.BF.E3.82.92.E6.8C.81.E3.81.A1.E3.81.BE.E3.81.99"> <code>setProperty</code> は3つのパラメタを持ちます </h3>
<p>Mozilla では <code>svgElement.style.setProperty("fill-opacity", "0.0")</code> 関数は <code>SYNTAX ERR</code> という DOMException を投げます。この挙動は W3C によって DOM Level 2 Style 仕様の中で定められています。<code>setProperty</code> 関数は 3 つのパラメタを持つ関数として定義されています。上記は <code>'svgElement.style.setProperty("fill-opacity", "0.0", "")'</code> で置き換えられます。こちらの方がより標準に一致しています。
</p>
<h3 id=".E3.83.AA.E3.83.B3.E3.82.AF" name=".E3.83.AA.E3.83.B3.E3.82.AF"> リンク </h3>
<p><a href="/ja/SVG">SVG ホームページ</a>
</p><p><a class="external" href="http://wiki.svg.org/Main_Page#Scripting_and_Programming">SVG wiki on Scripting and Programming</a>
</p>{{ languages( { "en": "en/SVG/Scripting" } ) }}
