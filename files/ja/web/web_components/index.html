---
title: Web Components
slug: Web/Web_Components
tags:
  - Landing
  - NeedsTranslation
  - TopicStub
  - Web Components
translation_of: Web/Web_Components
---
<p>{{DefaultAPISidebar("Web Components")}}</p>

<div class="summary">
<p>Web Components は、再利用可能なカスタム要素を作成し、ウェブアプリの中で利用するための、一連のテクノロジーです。コードの他の部分から独立した、カプセル化された機能を使って実現します。 </p>
</div>

<h2 id="概念と使用法">概念と使用法</h2>



<p>開発者ならご存知でしょうが、可能な限りコードを再利用することは良い考えです。しかしこれは、以前から、カスタムのマークアップ構造にとって、それほど簡単なことではありませんでした。複雑な HTML (と一連のスタイルやスクリプト) を考えてみて下さい。ときに、カスタム UI の制御をレンダリングするために、コードを書かなければなりません。それに、注意していないと、それらの制御をどう使い回すかで、ページが複雑なものになってしまいます。</p>

<p>Web Components は、上記の問題の解決を目指しています。 Web Components は、3 つの主要な技術からなり、それらを組み合わせて、多目的なカスタム要素を作成します。カプセル化された機能を使うことで、コードの重複を恐れることなく、どこでも再利用することができます。</p>

<ul>
 <li><strong>カスタム要素:</strong> カスタム要素とその動作を定義するための、一連の JavaScript API です。以降、ユーザーインターフェースの中で好きなだけ使用することができます。</li>
 <li><strong>Shadow DOM:</strong> カプセル化された "Shadow" DOM ツリーを要素に紐付け、関連する機能を制御するための、一連の JavaScript API です。 Shadow DOM ツリーは、メインドキュメントの DOM とは別にレンダリングされます。こうして、要素の機能を公開せずに済み、ドキュメントの他の部分との重複を恐れることなく、スクリプト化やスタイル化できます。</li>
 <li><strong>HTML テンプレート:</strong> {{HTMLElement("template")}} と {{HTMLElement("slot")}} 要素によって、レンダリングされたページ内に表示されないマークアップのテンプレートを書くことができます。カスタム要素の構造体の基礎として、それらを何度も再利用できます。</li>
</ul>

<p>Web Component を実装する基本的な流れは、以下に挙げてある通りです。</p>

<ol>
 <li>Web Component の機能を明示したクラスもしくは関数を作成します。クラスを使用するなら、ECMAScript 2015 のクラスの文法に従って下さい。 (詳細は<a href="/ja/docs/Web/JavaScript/Reference/Classes">クラス</a>を参照して下さい。)</li>
 <li>新しく作成したカスタム要素を登録します。{{domxref("CustomElementRegistry.define()")}} メソッドに、要素の名前、機能が明示されているクラスもしくは関数、またオプションでどの要素を継承するかを渡して下さい。</li>
 <li>必要なら、{{domxref("Element.attachShadow()")}} メソッドを使って、Shadow DOM をカスタム要素に紐付けます。通常の DOM メソッドを使って、子要素やイベントリスナーなどをShadow DOM に追加して下さい。</li>
 <li>必要なら、{{htmlelement("template")}} と {{htmlelement("slot")}} を使って、HTML テンプレートを定義します。通常の DOM メソッドを再度使って、テンプレートをクローンし、Shadow DOM に紐付けてください。</li>
 <li>ページ内のお好きな場所で、通常の HTML 要素のように、カスタム要素を使って下さい。</li>
</ol>

<h2 id="チュートリアル">チュートリアル</h2>

<dl>
 <dt><a href="/ja/docs/Web/Web_Components/Using_custom_elements">カスタム要素を使ってみよう</a></dt>
 <dd>単純な Web Component を作成するために、カスタム要素の機能の使い方を紹介したガイドラインです。それ以外にも、ライフサイクルコールバックやその他の高度な機能の中を覗いていきます。</dd>
 <dt><a href="/ja/docs/Web/Web_Components/Using_shadow_DOM">Shadow DOM を使ってみよう</a></dt>
 <dd>Shadow DOM の基礎を眺めるガイドラインです。 Shadow DOM を要素にどう紐付けるか、Shadow DOM ツリーにどう追加するか、どうスタイルするかなどを紹介しています。</dd>
 <dt><a href="/ja/docs/Web/Web_Components/Using_templates_and_slots">テンプレートとスロットを使ってみよう</a></dt>
 <dd>{{htmlelement("template")}} と {{htmlelement("slot")}} 要素を使って、再利用可能な HTML 構造体の定義と使用方法を紹介したガイドラインです。 </dd>
</dl>

<h2 id="リファレンス">リファレンス</h2>

<h3 id="カスタム要素">カスタム要素</h3>

<dl>
 <dt>{{domxref("CustomElementRegistry")}}</dt>
 <dd>カスタム要素に関わる機能が含まれています。中でも注目すべきは、 {{domxref("CustomElementRegistry.define()")}} メソッドで、新しいカスタム要素を登録するために用います。それにより、カスタム要素をドキュメント内で使用できるようになります。</dd>
 <dt>{{domxref("Window.customElements")}}</dt>
 <dd><code>CustomElementRegistry</code> オブジェクトへの参照を返します。</dd>
 <dt><a href="/ja/docs/Web/Web_Components/Using_custom_elements#Using_the_lifecycle_callbacks">Life cycle callbacks</a></dt>
 <dd>カスタム要素のクラス定義の中で定義された特別なコールバック関数で、挙動に影響を与えます。
 <ul>
  <li><code>connectedCallback</code>: カスタム要素がドキュメントの DOM に初めて接続したときに呼び出されます。</li>
  <li><code>disconnectedCallback</code>: カスタム要素がドキュメントの DOM から切断されたときに呼び出されます。</li>
  <li><code>adoptedCallback</code>: カスタム要素が新しいドキュメントに移動したときに呼び出されます。</li>
  <li><code>attributeChangedCallback</code>: カスタム要素の属性のひとつが追加、削除、もしくは変更されたときに呼び出されます。</li>
 </ul>
 </dd>
 <dd>
 <ul>
 </ul>
 </dd>
</dl>

<dl>
 <dt>カスタムビルトイン要素を作成するための拡張機能</dt>
 <dd>
 <ul>
  <li>{{htmlattrxref("is")}} グローバル HTML 属性: 標準の HTML 要素が、カスタムビルトイン要素のように振る舞うべきかを指定できます。</li>
  <li>{{domxref("Document.createElement()")}} メソッドの "is" オプション: カスタムビルトイン要素のように振る舞う標準の HTML 要素のインスタンスを作成できます。</li>
 </ul>
 </dd>
 <dt>CSS の擬似クラス</dt>
 <dd>カスタム要素に関連する擬似クラス:
 <ul>
  <li>{{cssxref(":defined")}}: ビルトイン要素と <code>CustomElementRegistry.define()</code> で定義されるカスタム要素を含む、あらゆる定義済みの要素にマッチします。</li>
  <li>{{cssxref(":host")}}: 使われている CSS を含む、<a href="/ja/docs/Web/Web_Components/Using_shadow_DOM">Shadow DOM</a> のシャドーホストを選択します。</li>
  <li>{{cssxref(":host()")}}: 使われている CSS を含む、<a href="/ja/docs/Web/Web_Components/Using_shadow_DOM">Shadow DOM</a> のシャドーホストを選択します。 (Shadow DOM の内側からカスタム要素を選択することができます。) ただし、関数のパラメータとして渡されるセレクタがシャドーホストに一致している場合に限ります。</li>
  <li>{{cssxref(":host-context()")}}: 使われている CSS を含む、<a href="/ja/docs/Web/Web_Components/Using_shadow_DOM">Shadow DOM</a> のシャドーホストを選択します。 (Shadow DOM の内側からカスタム要素を選択することができます。) ただし、関数のパラメータとして渡されるセレクタが DOM 階層内のシャドーホストの先祖要素に一致している場合に限ります。</li>
 </ul>
 </dd>
</dl>

<h3 id="Shadow_DOM">Shadow DOM</h3>

<dl>
 <dt>{{domxref("ShadowRoot")}}</dt>
 <dd>Represents the root node of a shadow DOM subtree.</dd>
 <dt>{{domxref("DocumentOrShadowRoot")}}</dt>
 <dd>A mixin defining features that are available across document and shadow roots.</dd>
 <dt>{{domxref("Element")}} extensions</dt>
 <dd>Extensions to the <code>Element</code> interface related to shadow DOM:
 <ul>
  <li>The {{domxref("Element.attachShadow()")}} method attaches a shadow DOM tree to the specified element.</li>
  <li>The {{domxref("Element.shadowRoot")}} property returns the shadow root attached to the specified element, or <code>null</code> if there is no shadow root attached.</li>
 </ul>
 </dd>
 <dt>Relevant {{domxref("Node")}} additions</dt>
 <dd>Additions to the <code>Node</code> interface relevant to shadow DOM:
 <ul>
  <li>The {{domxref("Node.getRootNode()")}} method returns the context object's root, which optionally includes the shadow root if it is available.</li>
  <li>The {{domxref("Node.isConnected")}} property returns a boolean indicating whether or not the Node is connected (directly or indirectly) to the context object, e.g. the {{domxref("Document")}} object in the case of the normal DOM, or the {{domxref("ShadowRoot")}} in the case of a shadow DOM.</li>
 </ul>
 </dd>
 <dt>{{domxref("Event")}} extensions</dt>
 <dd>Extensions to the <code>Event</code> interface related to shadow DOM:
 <ul>
  <li>{{domxref("Event.composed")}}: Returns a {{jsxref("Boolean")}} which indicates whether the event will propagate across the shadow DOM boundary into the standard DOM (<code>true</code>), or not  (<code>false</code>).</li>
  <li>{{domxref("Event.composedPath")}}: Returns the event’s path (objects on which listeners will be invoked). This does not include nodes in shadow trees if the shadow root was created with {{domxref("ShadowRoot.mode")}} closed.</li>
 </ul>
 </dd>
</dl>

<h3 id="HTML_templates">HTML templates</h3>

<dl>
 <dt>{{htmlelement("template")}}</dt>
 <dd>Contains an HTML fragment that is not rendered when a containing document is initially loaded, but can be displayed at runtime using JavaScript, mainly used as the basis of custom element structures. The associated DOM interface is {{domxref("HTMLTemplateElement")}}.</dd>
 <dt>{{htmlelement("slot")}}</dt>
 <dd>A placeholder inside a web component that you can fill with your own markup, which lets you create separate DOM trees and present them together. The associated DOM interface is {{domxref("HTMLSlotElement")}}.</dd>
 <dt>The <code><a href="/ja/docs/Web/HTML/Global_attributes/slot">slot</a></code> global HTML attribute</dt>
 <dd>Assigns a slot in a shadow DOM shadow tree to an element.</dd>
 <dt>{{domxref("Slotable")}}</dt>
 <dd>A mixin implemented by both {{domxref("Element")}} and {{domxref("Text")}} nodes, defining features that allow them to become the contents of an {{htmlelement("slot")}} element. The mixin defines one attribute, {{domxref("Slotable.assignedSlot")}}, which returns a reference to the slot the node is inserted in.</dd>
</dl>

<dl>
 <dt>{{domxref("Element")}} extensions</dt>
 <dd>Extensions to the <code>Element</code> interface related to slots:
 <ul>
  <li>{{domxref("Element.slot")}}: Returns the name of the shadow DOM slot attached to the element.</li>
 </ul>
 </dd>
 <dt>CSS pseudo-elements</dt>
 <dd>Pseudo-elements relating specifically to slots:
 <ul>
  <li>{{cssxref("::slotted")}}: Matches any content that is inserted into a slot.</li>
 </ul>
 </dd>
 <dt>The {{event("slotchange")}} event</dt>
 <dd>Fired on an {{domxref("HTMLSlotElement")}} instance ({{htmlelement("slot")}} element) when the node(s) contained in that slot change.</dd>
</dl>

<h2 id="例">例</h2>

<p><a href="https://github.com/mdn/web-components-examples">web-components-examples</a> の GitHub レポジトリに、いくつかの例を用意してあります。時間とともに、より多くの例が追加されることでしょう。</p>

<h2 id="Specifications" name="Specifications">仕様</h2>

<table class="standard-table">
 <tbody>
  <tr>
   <th scope="col">仕様</th>
   <th scope="col">ステータス</th>
   <th scope="col">コメント</th>
  </tr>
  <tr>
   <td>{{SpecName("HTML WHATWG","scripting.html#the-template-element","&lt;template&gt; element")}}</td>
   <td>{{Spec2('HTML WHATWG')}}</td>
   <td>{{HTMLElement("template")}} の定義です。</td>
  </tr>
  <tr>
   <td>{{SpecName("HTML WHATWG","custom-elements.html#custom-elements","custom elements")}}</td>
   <td>{{Spec2('HTML WHATWG')}}</td>
   <td><a href="/ja/docs/Web/Web_Components/Using_custom_elements">HTML Custom Elements</a> の定義です。</td>
  </tr>
  <tr>
   <td>{{SpecName("DOM WHATWG","#shadow-trees","shadow trees")}}</td>
   <td>{{Spec2('DOM WHATWG')}}</td>
   <td><a href="/ja/docs/Web/Web_Components/Using_shadow_DOM">Shadow DOM</a> の定義です。</td>
  </tr>
  <tr>
   <td>{{SpecName("HTML Imports", "", "")}}</td>
   <td>{{Spec2("HTML Imports")}}</td>
   <td><a href="/ja/docs/Web/Web_Components/HTML_Imports">HTML Imports</a> の最初の定義です。</td>
  </tr>
  <tr>
   <td>{{SpecName("Shadow DOM", "", "")}}</td>
   <td>{{Spec2("Shadow DOM")}}</td>
   <td><a href="/ja/docs/Web/Web_Components/Using_shadow_DOM">Shadow DOM</a> の最初の定義です。</td>
  </tr>
 </tbody>
</table>

<h2 id="ブラウザのサポート">ブラウザのサポート</h2>



<p>一般に、</p>

<ul>
 <li>Web Components は、Firefox (バージョン 63、現在のところ <a href="https://www.mozilla.org/en-GB/firefox/developer/">開発者エディション</a>)、Chrome そして Opera でサポートされています。 </li>
 <li>Safari では、いくつかの Web Components の機能がサポートされていますが、上記のブラウザほどではありません。</li>
 <li>Edge では、現在実装中です。</li>
</ul>

<p>特定の機能のブラウザでの実装状況は、上記のページを調べるようにして下さい。</p>



<h2 id="参考">参考</h2>

<ul>
 <li><a href="https://www.webcomponents.org/">webcomponents.org</a> — site featuring web components examples, tutorials, and other information.</li>
 <li><a href="https://www.polymer-project.org/">Polymer</a> — Google's web components framework — a set of polyfills, enhancements, and examples. Currently the easiest way to use web components cross-browser.</li>
 <li><a href="https://github.com/slimjs/slim.js">Slim.js</a> — Open source web components library — a high-performant library for rapid and easy component authoring; extensible and pluggable and cross-framework compatible. </li>
</ul>
