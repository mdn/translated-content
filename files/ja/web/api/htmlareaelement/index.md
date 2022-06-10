---
title: HTMLAreaElement
slug: Web/API/HTMLAreaElement
tags:
  - API
  - HTML DOM
  - Interface
  - Reference
translation_of: Web/API/HTMLAreaElement
---
<div>{{APIRef("HTML DOM")}}</div>

<p><span class="seoSummary"><strong><code>HTMLAreaElement</code></strong> インターフェイスは、{{HtmlElement("area")}} 要素のレイアウトとプレゼンテーションを操作するための特別なプロパティとメソッドを（継承により利用できる通常のオブジェクトの {{domxref("HTMLElement")}} インターフェイスのものを超えて）提供します。</span></p>

<p>{{InheritanceDiagram(600, 120)}}</p>

<h2 id="Properties" name="Properties">プロパティ</h2>

<p><em>親の {{domxref("HTMLElement")}} からプロパティを継承し、{{domxref("HTMLHyperlinkElementUtils")}} からのプロパティを実装します。</em></p>

<dl>
 <dt>{{domxref("Element.accessKey")}}</dt>
 <dd>入力フォーカスをこのコントロールに切り替える単一文字を含む {{domxref("DOMString")}} です。</dd>
 <dt>{{domxref("HTMLAreaElement.alt")}}</dt>
 <dd>要素の代替テキストを含む {{ htmlattrxref("alt", "area") }} HTML 属性を反映する {{domxref("DOMString")}} です。</dd>
 <dt>{{domxref("HTMLAreaElement.coords")}}</dt>
 <dd>ホットスポット領域を定義する座標を含む {{ htmlattrxref("coords", "area") }} HTML 属性を反映する {{domxref("DOMString")}} です。</dd>
 <dt>{{domxref("HTMLAreaElement.download")}} {{experimental_inline}}</dt>
 <dd>リンク先リソースをブラウザーに表示するのではなくダウンロードすることを意図していることを示す {{domxref("DOMString")}} です。 値は、提案されたファイル名を表します。 名前が基になる OS の有効なファイル名でない場合、ブラウザーはそれを適応させます。</dd>
 <dt>{{domxref("HTMLHyperlinkElementUtils.hash")}}</dt>
 <dd>あれば、参照 URL のフラグメント識別子（先頭のハッシュマーク '<code>#</code>' を含む）を含む {{domxref("USVString")}} です。</dd>
 <dt>{{domxref("HTMLHyperlinkElementUtils.host")}}</dt>
 <dd>参照 URL のホスト名とポート（デフォルトのポートでない場合）を含む {{domxref("USVString")}} です。</dd>
 <dt>{{domxref("HTMLHyperlinkElementUtils.hostname")}}</dt>
 <dd>参照 URL のホスト名を表す {{domxref("USVString")}} です。</dd>
 <dt>{{domxref("HTMLHyperlinkElementUtils.href")}}</dt>
 <dd>リンク先リソースの有効な URL を含む {{ htmlattrxref("href", "area") }} HTML 属性を反映する {{domxref("USVString")}} です。</dd>
 <dt>{{domxref("HTMLAreaElement.hreflang")}}</dt>
 <dd>リンク先リソースの言語を示す {{ htmlattrxref("hreflang", "area") }} HTML 属性を反映する {{domxref("DOMString")}} です。</dd>
 <dt>{{domxref("HTMLAreaElement.media")}}</dt>
 <dd>リンク先リソースの対象メディアを示す {{ htmlattrxref("media", "area") }} HTML属性 を反映する {{domxref("DOMString")}} です。（訳注：仕様にありません。 記載のある資料では、複数の要素のものをまとめて説明していますが、この要素は参考情報だそうで、仕様を整理する際に蒸発してしまったのかもしれません。）</dd>
 <dt>{{domxref("HTMLAreaElement.noHref")}} {{obsolete_inline}}</dt>
 <dd>領域が非アクティブ（<code>true</code>）かアクティブ（<code>false</code>）かを示す {{jsxref("Boolean")}} のフラグです。</dd>
 <dt>{{domxref("HTMLHyperlinkElementUtils.password")}}</dt>
 <dd>ドメイン名の前に指定されたパスワードを含む {{domxref("USVString")}} です。</dd>
 <dt>{{domxref("HTMLHyperlinkElementUtils.origin")}} {{readonlyInline}}</dt>
 <dd>URL のオリジン、つまりスキーム（プロトコル）、ドメイン（ホスト名）、ポートを含む {{domxref("USVString")}} を返します。</dd>
 <dt>{{domxref("HTMLHyperlinkElementUtils.pathname")}}</dt>
 <dd>あれば、参照 URL のパス名の部分を含む {{domxref("USVString")}} です。</dd>
 <dt>{{domxref("HTMLHyperlinkElementUtils.port")}}</dt>
 <dd>あれば、参照 URL のポートの部分を含む {{domxref("USVString")}} です。</dd>
 <dt>{{domxref("HTMLHyperlinkElementUtils.protocol")}}</dt>
 <dd>参照 URL のプロトコルの部分（末尾のコロン '<code>:</code>' を含む）を含む {{domxref("USVString")}} です。</dd>
 <dt>{{domxref("HTMLAreaElement.referrerPolicy")}} {{experimental_inline}}</dt>
 <dd>リンク先リソースを取得するときに使用するリファラーを示す {{htmlattrxref("referrerpolicy", "area")}} HTML 属性を反映する {{domxref("DOMString")}} です。</dd>
 <dt>{{domxref("HTMLAreaElement.rel")}}</dt>
 <dd>現在のドキュメントからリンク先リソースへの関係を示す {{ htmlattrxref("rel", "area") }} HTML 属性を反映する {{domxref("DOMString")}} です。</dd>
 <dt>{{domxref("HTMLAreaElement.relList")}} {{readOnlyInline}}</dt>
 <dd>{{ htmlattrxref("rel", "area") }} HTML 属性を反映する {{domxref("DOMTokenList")}} を返します。 これは、現在のドキュメントからリンク先リソースへの関係をトークンのリストとして示します。</dd>
 <dt>{{domxref("HTMLHyperlinkElementUtils.search")}}</dt>
 <dd>あれば、参照 URL の検索要素（先頭の疑問符 '<code>?</code>' を含む）を含む {{domxref("USVString")}} です。</dd>
 <dt>{{domxref("HTMLAreaElement.shape")}}</dt>
 <dd>既知の値に制限されたホットスポットの形状を示す  {{ htmlattrxref("shape", "area") }} HTML 属性を反映する {{domxref("DOMString")}} です。</dd>
 <dt>{{domxref("HTMLElement.tabIndex")}}</dt>
 <dd>タブ順序での要素の位置を含む <code>long</code> です。</dd>
 <dt>{{domxref("HTMLAreaElement.target")}}</dt>
 <dd>リンク先リソースを開く閲覧コンテキストを示す {{ htmlattrxref("target", "area") }} HTML 属性を反映する {{domxref("DOMString")}} です。</dd>
 <dt>{{domxref("HTMLAreaElement.type")}}</dt>
 <dd>リンク先リソースの MIME タイプを示す {{ htmlattrxref("type", "area") }} HTML 属性を反映する {{domxref("DOMString")}} です。</dd>
 <dt>{{domxref("HTMLHyperlinkElementUtils.username")}}</dt>
 <dd>ドメイン名の前に指定されたユーザー名を含む {{domxref("USVString")}} です。</dd>
</dl>

<h2 id="Methods" name="Methods">メソッド</h2>

<p><em>親である {{domxref("HTMLElement")}} からメソッドを継承し、{{domxref("HTMLHyperlinkElementUtils")}} からのメソッドを実装します。</em></p>

<dl>
 <dt>{{domxref("HTMLHyperlinkElementUtils.toString()")}}</dt>
 <dd>{{domxref("Worker")}} で実行されたスクリプトの URL 全体を含む {{domxref("USVString")}} を返します。 これは、{{domxref("HTMLHyperlinkElementUtils.href")}} の同義語です。</dd>
</dl>

<h2 id="Specifications" name="Specifications">仕様</h2>

<table class="standard-table">
 <tbody>
  <tr>
   <th scope="col">仕様</th>
   <th scope="col">状態</th>
   <th scope="col">コメント</th>
  </tr>
  <tr>
   <td>{{SpecName('HTML WHATWG', "#htmlareaelement", "HTMLAreaElement")}}</td>
   <td>{{Spec2('HTML WHATWG')}}</td>
   <td>次のプロパティが追加されました: <code>download</code>。<br>
    技術的には、URL 関連のプロパティの <code>media</code>、<code>host</code>、<code>hostname</code>、<code>pathname</code>、<code>port</code>、<code>protocol</code>、<code>search</code>、および <code>hash</code> は {{domxref("HTMLHyperlinkElementUtils")}} ミックスインに移動され、<code>HTMLAreaElement</code> はこのミックスインを実装します。</td>
  </tr>
  <tr>
   <td>{{SpecName('HTML5 W3C', "embedded-content-0.html#the-area-element", "HTMLAreaElement")}}</td>
   <td>{{Spec2('HTML5 W3C')}}</td>
   <td>技術的には、プロパティ <code>tabindex</code> および <code>accesskey</code> が {{domxref("HTMLElement")}} で定義されるようになりました。<br>
    次のプロパティは廃止されました: <code>nohref</code>。<br>
    次のプロパティが追加されました: <code>rel</code>、<code>relList</code>、<code>media</code>、<code>hreflang</code>、<code>type</code>、<code>host</code>、<code>hostname</code>、<code>pathname</code>、<code>port</code>、<code>protocol</code>、<code>search</code>、<code>hash</code>。</td>
  </tr>
  <tr>
   <td>{{SpecName('DOM2 HTML', 'html.html#ID-26019118', 'HTMLAreaElement')}}</td>
   <td>{{Spec2('DOM2 HTML')}}</td>
   <td>{{SpecName("DOM1")}} からの変更はありません。</td>
  </tr>
  <tr>
   <td>{{SpecName('DOM1', 'level-one-html.html#ID-26019118', 'HTMLAreaElement')}}</td>
   <td>{{Spec2('DOM1')}}</td>
   <td>初期定義</td>
  </tr>
 </tbody>
</table>

<h2 id="Browser_compatibility" name="Browser_compatibility">ブラウザーの互換性</h2>



<p>{{Compat("api.HTMLAreaElement")}}</p>

<h2 id="See_also" name="See_also">関連情報</h2>

<ul>
 <li>このインターフェイスを実装する HTML 要素: {{ HTMLElement("area") }}</li>
</ul>
