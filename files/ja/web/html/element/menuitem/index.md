---
title: <menuitem>
slug: Web/HTML/Element/menuitem
tags:
  - Deprecated
  - Element
  - HTML
  - HTML5
  - Navigation
  - Navigation Menus
  - Reference
  - UI
  - UX
  - User Interface
  - User experience
  - Web
  - menuitem
translation_of: Web/HTML/Element/menuitem
---
<p>{{HTMLRef}}{{Deprecated_Header("HTML5.2")}}</p>

<p><strong>HTML の <code>&lt;menuitem&gt;</code> 要素</strong>は、ユーザーがポップアップメニューから実行できるコマンドをあらわします。メニューボタンに割り当てるメニューはもちろん、コンテキストメニューも含みます。</p>

<p>コマンドはテキストのラベルと任意で外観を表すアイコン、あるいは代わりに別の要素で動作を定義する<em>インダイレクトコマンド</em>で明示的に定義できます。また、任意でコマンドにチェックボックスを含めたり、ラジオボタンを共有するグループにすることができます (インダイレクトコマンドのメニュー項目を <code>&lt;input type="checkbox"&gt;</code> および <code>&lt;input type="radio"&gt;</code> 要素に対して定義するとき、チェックボックスまたはラジオボタンを持ちます)。</p>

<table class="properties">
 <tbody>
  <tr>
   <th scope="row"><a href="/ja/docs/Web/HTML/Content_categories">コンテンツカテゴリ</a></th>
   <td>なし。</td>
  </tr>
  <tr>
   <th scope="row"><dfn>許可されている内容</dfn></th>
   <td>なし。これは{{Glossary("空要素")}}です。</td>
  </tr>
  <tr>
   <th scope="row"><dfn>タグの省略</dfn></th>
   <td>開始タグが必須で、終了タグはあってはいけません。</td>
  </tr>
  <tr>
   <th scope="row"><dfn>許可されている親要素</dfn></th>
   <td><em>ポップアップメニュー</em>状態である {{HTMLElement("menu")}} 要素。({{HTMLElement("menu")}} 要素の <code>type</code> 属性を指定する場合は <code>popup</code> にしなければなりません。属性がない場合は {{HTMLElement("menu")}} の親要素自体が<em>ポップアップメニュー</em>状態の {{HTMLElement("menu")}} であることが必要です。)</td>
  </tr>
  <tr>
   <th scope="row">許可されている ARIA ロール</th>
   <td>なし</td>
  </tr>
  <tr>
   <th scope="row">DOM インターフェイス</th>
   <td>{{DOMxRef("HTMLMenuItemElement")}}</td>
  </tr>
 </tbody>
</table>

<h2 id="Attributes" name="Attributes">属性</h2>

<p>この要素には<a href="/ja/docs/Web/HTML/Global_attributes">グローバル属性</a>があります。特に <code>title</code> 属性はコマンドの説明やヒントを出すのに使われます。</p>

<dl>
 <dt>{{HTMLAttrDef("checked")}}</dt>
 <dd>コマンドが選択されているか否かを示す論理属性。<code>type</code> 属性が <code>checkbox</code> または <code>radio</code> のときのみ使われます。</dd>
 <dt>{{HTMLAttrDef("command")}}</dt>
 <dd>別の要素の ID を指定して、間接的に実行するコマンドを示します。 <code>checked</code>, <code>disabled</code>, <code>icon</code>, <code>label</code>, <code>radiogroup</code>, <code>type</code> 属性も含むメニューアイテムで使用してはいけません。</dd>
 <dt>{{HTMLAttrDef("default")}}</dt>
 <dd>この論理属性は、メニューのサブジェクト要素 (<code>button</code> や <code>input</code> など) と同じコマンドを使用することを示します。</dd>
 <dt>{{HTMLAttrDef("disabled")}}</dt>
 <dd>現在の状態ではコマンドを使用できないことを示す論理属性です。<code>disabled</code> は <code>hidden</code> とは異なりますので注意してください。<code>disabled</code> 属性は、状態の変化によってコマンドが妥当になる状況で適切です。</dd>
 <dt>{{HTMLAttrDef("icon")}}</dt>
 <dd>コマンドを表す画像を提供するために、画像の URL を指定します。</dd>
 <dt>{{HTMLAttrDef("label")}}</dt>
 <dd>ユーザーに表示する、コマンドの名前です。<code>command</code> 属性を提供しない場合は必須です。</dd>
 <dt>{{HTMLAttrDef("radiogroup")}}</dt>
 <dd>この属性は、選択されたときにラジオボタンを切り替えるコマンドのグループの名前を指定します。<code>type</code> 属性が <code>radio</code> である場合に限り使用できます。</dd>
 <dt>{{HTMLAttrDef("type")}}</dt>
 <dd>この属性は、コマンドの種類を以下の 3 つの値のいずれかで示すことができます。
 <ul>
  <li><code>command</code>: 関連付けられたアクションを持つ、通常のコマンド。値がない場合の既定値です。</li>
  <li><code>checkbox</code>: 2 つの異なる状態を切り替えできるコマンドを表します。</li>
  <li><code>radio</code>: ラジオボタンで切り替え可能なコマンドのグループから 1 つを選択します。</li>
 </ul>
 </dd>
</dl>

<h2 id="Example" name="Example">例</h2>

<h3 id="HTML">HTML</h3>

<pre class="brush: html; notranslate">&lt;!-- A &lt;div&gt; element with a context menu --&gt;
&lt;div contextmenu="popup-menu"&gt;
  Right-click to see the adjusted context menu
&lt;/div&gt;

&lt;menu type="context" id="popup-menu"&gt;
  &lt;menuitem type="checkbox" checked&gt;Checkbox&lt;/menuitem&gt;
  &lt;hr&gt;
  &lt;menuitem type="command" label="This command does nothing" icon="https://developer.mozilla.org/static/img/favicon144.png"&gt;
    Commands don't render their contents.
  &lt;/menuitem&gt;
  &lt;menuitem type="command" label="This command has javascript" onclick="alert('command clicked')"&gt;
    Commands don't render their contents.
  &lt;/menuitem&gt;
  &lt;hr&gt;
  &lt;menuitem type="radio" radiogroup="group1"&gt;Radio Button 1&lt;/menuitem&gt;
  &lt;menuitem type="radio" radiogroup="group1"&gt;Radio Button 2&lt;/menuitem&gt;
&lt;/menu&gt;
</pre>

<h3 id="CSS">CSS</h3>

<pre class="brush: css notranslate">div {
  width: 300px;
  height: 80px;
  background-color: lightgreen;
}
</pre>

<h3 id="Result" name="Result">表示結果</h3>

<p>{{EmbedLiveSample("Example", '100%', 80)}}</p>

<h2 id="Specifications" name="Specifications">仕様書</h2>

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
   <td>{{SpecName("HTML5.2", "obsolete.html#elementdef-menuitem", "&lt;menuitem&gt;")}}</td>
   <td>{{Spec2("HTML5.2")}}</td>
   <td>{{SpecName("HTML WHATWG")}} のスナップショット、廃止になった</td>
  </tr>
  <tr>
   <td>{{SpecName("HTML5.1", "interactive-elements.html#the-menuitem-element", "&lt;menuitem&gt;")}}</td>
   <td>{{Spec2("HTML5.1")}}</td>
   <td>{{SpecName("HTML WHATWG")}} のスナップショット、初回定義</td>
  </tr>
 </tbody>
</table>

<h2 id="Browser_compatibility" name="Browser_compatibility">ブラウザーの互換性</h2>

<p>{{Compat("html.elements.menuitem")}}</p>

<h2 id="See_also" name="See_also">関連情報</h2>

<ul>
 <li><a href="https://hacks.mozilla.org/2011/11/html5-context-menus-in-firefox-screencast-and-code/">HTML5 context menus in Firefox (Screencast and Code)</a></li>
</ul>
