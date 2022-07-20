---
title: '<body>: 文書の本文要素'
slug: Web/HTML/Element/body
tags:
  - Element
  - HTML
  - Reference
  - Sectioning Root Element
  - Sections
  - Web
translation_of: Web/HTML/Element/body
---
<div>{{HTMLRef}}</div>

<p><span class="seoSummary"><strong>HTML の <code>&lt;body&gt;</code> 要素</strong>は、 HTML 文書のコンテンツを示す要素です。 <code>&lt;body&gt;</code> 要素は文書中に一つだけ配置できます。</span></p>

<table class="properties">
 <tbody>
  <tr>
   <th scope="row"><a href="/ja/docs/Web/Guide/HTML/Content_categories">コンテンツカテゴリー</a></th>
   <td><a href="/ja/docs/Web/Guide/HTML/Using_HTML_sections_and_outlines#sectioning_roots">区分化ルート</a></td>
  </tr>
  <tr>
   <th scope="row">許可されている内容</th>
   <td><a href="/ja/docs/Web/Guide/HTML/Content_categories#flow_content">フローコンテンツ</a></td>
  </tr>
  <tr>
   <th scope="row">タグの省略</th>
   <td>開始タグは、内容の先頭が空白文字、コメント、 {{HTMLElement("script")}} 要素、 {{HTMLElement("style")}} 要素でない場合は省略可能です。終了タグは、 <code>&lt;body&gt;</code> 要素に内容または開始タグがあり、かつ、直後のノードがコメントでない場合は省略可能です。</td>
  </tr>
  <tr>
   <th scope="row">許可されている親要素</th>
   <td>{{HTMLElement("html")}} 要素の子要素でなければなりません。</td>
  </tr>
  <tr>
   <th scope="row">暗黙の ARIA ロール</th>
   <td><a href="/ja/docs/Web/Accessibility/ARIA/Roles/Document_Role">document</a></td>
  </tr>
  <tr>
   <th scope="row">許可されている ARIA ロール</th>
   <td>許可されている <code>role</code> なし</td>
  </tr>
  <tr>
   <th scope="row">DOM インターフェイス</th>
   <td>{{domxref("HTMLBodyElement")}}
    <ul>
     <li><code>&lt;body&gt;</code> 要素は {{domxref("HTMLBodyElement")}} インターフェイスを提供します。</li>
     <li><code>&lt;body&gt;</code> 要素は {{domxref("document.body")}} プロパティからアクセス可能です。</li>
    </ul>
   </td>
  </tr>
 </tbody>
</table>

<h2 id="Attributes">属性</h2>

<p>この要素には<a href="/ja/docs/Web/HTML/Global_attributes">グローバル属性</a>があります。</p>

<dl>
 <dt>{{htmlattrdef("alink")}} {{obsolete_inline}}</dt>
 <dd>ハイパーリンクの選択時の文字色です。<em>この方法は不適合であり、代わりに CSS の {{cssxref(":active")}} 疑似クラスで {{cssxref("color")}} プロパティを使用してください。</em></dd>
 <dt>{{htmlattrdef("background")}} {{obsolete_inline}}</dt>
 <dd>背景画像の URI です。<em>この方法は不適合であり、代わりに CSS の {{cssxref("background")}} プロパティを使用してください。</em></dd>
 <dt>{{htmlattrdef("bgcolor")}} {{obsolete_inline}}</dt>
 <dd>文書の背景色です。<em>この方法は不適合であり、代わりに CSS の {{cssxref("background-color")}} プロパティを使用してください。</em></dd>
 <dt>{{htmlattrdef("bottommargin")}} {{obsolete_inline}}</dt>
 <dd>body の下マージンです。<em>この方法は不適合であり、代わりに CSS の {{cssxref("margin-bottom")}} プロパティを使用してください。</em></dd>
 <dt>{{htmlattrdef("leftmargin")}} {{obsolete_inline}}</dt>
 <dd>body の左マージンです。<em>この方法は不適合であり、代わりに CSS の {{cssxref("margin-left")}} プロパティを使用してください。</em></dd>
 <dt>{{htmlattrdef("link")}} {{obsolete_inline}}</dt>
 <dd>未訪問のハイパーリンクの文字色です。<em>この方法は不適合であり、代わりに CSS の {{cssxref(":link")}} 疑似クラスで {{cssxref("color")}} プロパティを使用してください。</em></dd>
 <dt>{{htmlattrdef("onafterprint")}}</dt>
 <dd>ユーザーによる印刷データ作成直後に呼び出す関数</dd>
 <dt>{{htmlattrdef("onbeforeprint")}}</dt>
 <dd>ユーザーによるブラウザーへの印刷指示直後に呼び出す関数</dd>
 <dt>{{htmlattrdef("onbeforeunload")}}</dt>
 <dd>文書のアンロード (ページ遷移、リロード) の直前に呼び出す関数</dd>
 <dt>{{htmlattrdef("onblur")}}</dt>
 <dd>文書からフォーカスが外されたときに呼び出す関数</dd>
 <dt>{{htmlattrdef("onerror")}}</dt>
 <dd>文書を正常にロードできなかった際に呼び出す関数</dd>
 <dt>{{htmlattrdef("onfocus")}}</dt>
 <dd>文書にフォーカスが当たった際に呼び出す関数</dd>
 <dt>{{htmlattrdef("onhashchange")}}</dt>
 <dd>文書の現在のアドレスのフラグメント識別子 (ハッシュ文字 <code>'#'</code> から始まる部分) が変更された際に呼び出す関数</dd>
 <dt>{{htmlattrdef("onlanguagechange")}} {{experimental_inline}}</dt>
 <dd>言語が変更された際に呼び出す関数</dd>
 <dt>{{htmlattrdef("onload")}}</dt>
 <dd>文書の読み込み完了時に呼び出す関数</dd>
 <dt>{{htmlattrdef("onmessage")}}</dt>
 <dd>文書が API からメッセージを受信した際に呼び出す関数</dd>
 <dt>{{htmlattrdef("onoffline")}}</dt>
 <dd>ネットワークとの交信が不能になった際に呼び出す関数</dd>
 <dt>{{htmlattrdef("ononline")}}</dt>
 <dd>ネットワークとの交信が発生あるいは回復した際に呼び出す関数</dd>
 <dt>{{htmlattrdef("onpopstate")}}</dt>
 <dd>ユーザーによるセッション履歴のナビゲート時に呼び出す関数</dd>
 <dt>{{htmlattrdef("onredo")}}</dt>
 <dd>ユーザーがトランザクション履歴を元に戻した際に呼び出す関数</dd>
 <dt>{{htmlattrdef("onresize")}}</dt>
 <dd>文書を表示するウィンドウがリサイズされた際に呼び出す関数</dd>
 <dt>{{htmlattrdef("onstorage")}}</dt>
 <dd>ストレージ領域が変化した際に呼び出す関数</dd>
 <dt>{{htmlattrdef("onundo")}}</dt>
 <dd>ユーザーがトランザクション履歴をさかのぼることによって後方へ移動した際に呼び出す関数</dd>
 <dt>{{htmlattrdef("onunload")}}</dt>
 <dd>文書からの離脱時に呼び出す関数</dd>
 <dt>{{htmlattrdef("rightmargin")}} {{obsolete_inline}}</dt>
 <dd>body の右マージンです。<em>この方法は不適合であり、代わりに CSS の {{cssxref("margin-right")}} プロパティを使用してください。</em></dd>
 <dt>{{htmlattrdef("text")}} {{obsolete_inline}}</dt>
 <dd>基本文字色です。<em>この方法は不適合であり、代わりに CSS の {{cssxref("color")}} プロパティを使用してください。</em></dd>
 <dt>{{htmlattrdef("topmargin")}} {{obsolete_inline}}</dt>
 <dd>body の上マージンです。<em>この方法は不適合であり、代わりに CSS の {{cssxref("margin-top")}} プロパティを使用してください。</em></dd>
 <dt>{{htmlattrdef("vlink")}} {{obsolete_inline}}</dt>
 <dd>訪問済みのハイパーリンクの文字色です。<em>この方法は不適合であり、代わりに CSS の {{cssxref(":visited")}} 疑似クラスで {{cssxref("color")}} プロパティを使用してください。</em></dd>
</dl>

<h2 id="Example"">例</h2>

<pre class="brush: html">&lt;html&gt;
  &lt;head&gt;
    &lt;title&gt;Document title&lt;/title&gt;
  &lt;/head&gt;
  &lt;body&gt;
    &lt;p&gt;This is a paragraph&lt;/p&gt;
  &lt;/body&gt;
&lt;/html&gt;
</pre>

<h2 id="Specifications">仕様書</h2>

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
   <td>{{SpecName('HTML WHATWG', 'semantics.html#the-body-element', '&lt;body&gt;')}}</td>
   <td>{{Spec2('HTML WHATWG')}}</td>
   <td>不適合な機能の一覧を変更。</td>
  </tr>
  <tr>
   <td>{{SpecName('HTML5 W3C', 'sections.html#the-body-element', '&lt;body&gt;')}}</td>
   <td>{{Spec2('HTML5 W3C')}}</td>
   <td>以前非推奨とされた属性を廃止。不適合であり標準化しない <code>topmargin</code>, <code>leftmargin</code>, <code>rightmargin</code>, <code>bottommargin</code> の動作を定義。<code>on*</code> 属性を追加。</td>
  </tr>
  <tr>
   <td>{{SpecName('HTML4.01', 'struct/global.html#h-7.5.1', '&lt;body&gt;')}}</td>
   <td>{{Spec2('HTML4.01')}}</td>
   <td><code>alink</code>, <code>background</code>, <code>bgcolor</code>, <code>link</code>, <code>text</code>, <code>vlink</code> の各属性を非推奨に変更。</td>
  </tr>
 </tbody>
</table>

<h2 id="Browser_compatibility">ブラウザーの互換性</h2>

<p>{{Compat("html.elements.body")}}</p>

<h2 id="See_also">関連情報</h2>

<ul>
 <li>{{HTMLElement("html")}}</li>
 <li>{{HTMLElement("head")}}</li>
</ul>
