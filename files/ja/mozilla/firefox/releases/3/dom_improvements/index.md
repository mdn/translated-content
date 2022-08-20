---
title: Firefox 3 での DOM の改良
slug: Mozilla/Firefox/Releases/3/DOM_improvements
tags:
  - DOM
  - Firefox 3
translation_of: Mozilla/Firefox/Releases/3/DOM_improvements
original_slug: DOM_improvements_in_Firefox_3
---
<div>{{FirefoxSidebar}}</div>

<p>Firefox 3 では、特に、他のブラウザによる独自 DOM 拡張 のサポートに関するものを含む、多くの <a href="/ja/docs/Web/API/Document_Object_Model">Document Object Model</a> (DOM) 実装が追加されました。この記事は、これらの実装の一覧と詳細なドキュメントへのリンクを提供します。 </p>

<ul>
 <li>Internet Explorer の <code><a href="/ja/docs/Web/API/Element/clientTop">clientTop</a></code> と <code><a href="/ja/docs/Web/API/Element/clientLeft">clientLeft</a></code> DOM 拡張がサポートされました。</li>
 <li><code><a href="/ja/docs/Web/API/Window/fullScreen">window.fullScreen</a></code> プロパティは、たとえウェブコンテンツから読み出されても常に正確に計算されるようになりました。以前は不正確に <code>false</code> を返していたでしょう。({{ Bug(127013) }})</li>
 <li><code><a href="/ja/docs/Web/API/Element/getClientRects">getClientRects</a></code> と <code><a href="/ja/docs/Web/API/Element/getBoundingClientRect">getBoundingClientRect</a></code> DOM 拡張がサポートされました。({{ Bug(174397) }} を参照)</li>
 <li>Internet Explorer の <code><a href="/ja/docs/Web/API/Document/elementFromPoint">elementFromPoint</a></code> DOM 拡張がサポートされました。 ({{ Bug(199692) }})</li>
 <li> Internet Explorer の <code><a href="/ja/docs/Web/API/HTMLElement/oncut">oncut</a></code>、<code><a href="/ja/docs/Web/API/HTMLElement/oncopy">oncopy</a></code>、 <code><a href="/ja/docs/Web/API/HTMLElement/onpaste">onpaste</a></code> DOM 拡張がサポートされました ({{ Bug(280959) }})。</li>
 <li>特権コード限定のゲッター <code>Node.nodePrincipal</code>、<code>Node.baseURIObject</code>、<code><a href="/ja/docs/Web/API/Document/documentURIObject">document.documentURIObject</a></code> が追加されました。Chrome コードは、(<code><a href="/ja/XPCNativeWrapper">XPCNativeWrapper</a></code> の <code>wrappedJSObject</code> などの) ラップされていないコンテンツオブジェクトに対して、これらのプロパティに触れては (取得または設定をしては) いけません。詳細は {{ Bug(324464) }} を参照してください。</li>
 <li>Web Applications 1.0 (HTML5) の <code><a href="/ja/docs/Web/API/Document/getElementsByClassName">getElementsByClassName()</a></code> DOM メソッドがサポートされました。</li>
 <li> Web Applications 1.0 (HTML5) の <code><a href="/ja/docs/Web/API/Window/postMessage">window.postMessage</a></code> DOM メソッドがサポートされました。このメソッドは、制限された、同じドメインに限らないウィンドウ間でのクライアントサイド通信を行う選択フォームを可能にします。 </li>
 <li> アクセラレーションキーが押された場合、<code>keypress</code> イベントの <code>charCode</code> の値は ASCII 文字に変更されます。それ以外の場合、 <code>charCode</code> はそのままの文字です (<kbd>Shift</kbd> 状態を除く)。<a href="/ja/Gecko_Keypress_Event">Gecko Keypress Event</a> を参照してください。</li>
</ul>

<h3 id="See_also">関連情報</h3>

<ul>
 <li><a href="/ja/Firefox_3_for_developers">Firefox 3 for developers</a></li>
 <li><a href="/ja/docs/CSS_improvements_in_Firefox_3">CSS improvements in Firefox 3</a></li>
 <li><a href="/ja/docs/Web/API/Document_Object_Model">DOM</a></li>
</ul>
