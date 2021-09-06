---
title: CustomElementRegistry
slug: Web/API/CustomElementRegistry
tags:
  - API
  - CustomElementRegistry
  - Experimental
  - Interface
  - Landing
  - Webコンポーネント
  - custom elements
  - レファレンス
  - 試験的
translation_of: Web/API/CustomElementRegistry
---
<p>{{DefaultAPISidebar("Web Components")}}</p>

<p><span class="seoSummary"><strong><code>CustomElementRegistry</code></strong> インターフェイスはカスタムエレメントの登録と、登録された要素を紹介するためのメソッドを提供します。このインスタンスを取得するには、{{domxref("window.customElements")}} プロパティを使います。 </span></p>

<h2 id="メソッド">メソッド</h2>

<dl>
 <dt>{{domxref("CustomElementRegistry.define()")}}</dt>
 <dd>新しい<a href="/ja/docs/Web/Web_Components/Using_custom_elements">カスタムエレメント</a>を定義。</dd>
 <dt>{{domxref("CustomElementRegistry.get()")}}</dt>
 <dd>指定されたカスタムエレメントへのコンストラクタか、またはカスタムエレメントが定義されていない場合は <code>undefined</code> を返す。</dd>
 <dt>{{domxref("CustomElementRegistry.whenDefined()")}}</dt>
 <dd>名前を与えられたカスタムエレメントが定義されたとき、空の {{jsxref("Promise", "promise")}}（resolves）を返す。もしそのようなカスタムエレメントが既に定義されていた場合、返された promise は即座に fulfill状態になります。</dd>
</dl>

<h2 id="例">例</h2>

<p>以下のコードは我々の <a href="https://github.com/mdn/web-components-examples/tree/master/word-count-web-component">word-count-web-component</a> という例 (<a href="https://mdn.github.io/web-components-examples/word-count-web-component/">こちらのライブデモを見てください</a>) から持ってきています。メモ: クラスを生成した後カスタムエレメント定義するための {{domxref("CustomElementRegistry.define()")}} メソッドの使用方法。</p>

<pre class="brush: js">// 要素のクラスを生成
class WordCount extends HTMLParagraphElement {
  constructor() {
    // コンストラクタ内ではまずはじめに必ず super をコールする
    super();

    // 親要素の要素内の count というワード
    var wcParent = this.parentNode;

    function countWords(node){
      var text = node.innerText || node.textContent
      return text.split(/\s+/g).length;
    }

    var count = 'Words: ' + countWords(wcParent);

    // shadow root を生成
    var shadow = this.attachShadow({mode: 'open'});

    // テキストノードを生成し、count というワードを追加
    var text = document.createElement('span');
    text.textContent = count;

    // shadow root に追加
    shadow.appendChild(text);


    // 要素のコンテンツが変化した時、count を更新
    setInterval(function() {
      var count = 'Words: ' + countWords(wcParent);
      text.textContent = count;
    }, 200)

  }
}

// 新しい要素を定義
customElements.define('word-count', WordCount, { extends: 'p' });</pre>

<div class="note">
<p>メモ: CustomElementsRegistry は {{domxref("Window.customElements")}} プロパティを通して利用可能です。</p>
</div>

<h2 id="仕様">仕様</h2>

<table class="standard-table">
 <tbody>
  <tr>
   <th scope="col">仕様</th>
   <th scope="col">ステータス</th>
   <th scope="col">コメント</th>
  </tr>
  <tr>
   <td>{{SpecName("HTML WHATWG", "custom-elements.html#customelementregistry", "CustomElementRegistry")}}</td>
   <td>{{Spec2("HTML WHATWG")}}</td>
   <td>初期定義。</td>
  </tr>
 </tbody>
</table>

<h2 id="ブラウザ互換性">ブラウザ互換性</h2>





<p>{{Compat("api.CustomElementRegistry")}}</p>
