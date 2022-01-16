---
title: template と slot の使い方
slug: Web/Web_Components/Using_templates_and_slots
translation_of: Web/Web_Components/Using_templates_and_slots
---
<div>{{DefaultAPISidebar("Web Components")}}</div>

<p class="summary">この記事では shadow DOM で使われる {{htmlelement("template")}} と {{htmlelement("slot")}} 要素の使い方を説明します。</p>

<h2 id="テンプレートの真実">テンプレートの真実</h2>

<p>あるWebページ上で同じ構造を繰り返し使用する必要がある場合、同じ実装を繰り返し書くよりも、テンプレートのようなものを作って利用する方が合理的でしょう。これは以前から可能でしたが、{{htmlelement("template")}} 要素より簡単に使えるようになりました。 この要素と中身は DOM 上ではレンダリングされませんが、JavaScript から参照することができます。</p>

<p>以下の簡単なサンプルを見てみましょう。</p>

<pre class="brush: html">&lt;template id="my-paragraph"&gt;
  &lt;p&gt;My paragraph&lt;/p&gt;
&lt;/template&gt;</pre>

<p>テンプレートの内部はページには表示されません。以下のコードのようにJavaScript を用いて参照を取り DOM に追加するとページ上に表示できます。</p>

<pre class="brush: js">let template = document.getElementById('my-paragraph');
let templateContent = template.content;
document.body.appendChild(templateContent);</pre>

<p>つまらない例ですがすでに有用性は見えてきたでしょう。</p>

<h2 id="Web_Componentsを利用したテンプレートの使用">Web Componentsを利用したテンプレートの使用</h2>

<p>テンプレートはそれ自身でも有用ですが web コンポーネントと共に使用することでより上手く使えます。テンプレートを shadow DOM として活用する web コンポーネントを <code>&lt;my-paragraph&gt;</code> と名付け定義しましょう。</p>

<pre class="brush: js">customElements.define('my-paragraph',
  class extends HTMLElement {
    constructor() {
      super();
      let template = document.getElementById('my-paragraph');
      let templateContent = template.content;

      const shadowRoot = this.attachShadow({mode: 'open'})
        .appendChild(templateContent.cloneNode(true));
  }
})</pre>

<p>ここで、テンプレートの内容を使用するために {{domxref("Node.cloneNode()")}} を使用してクローンしたものを shadow root に追加していることに注意してください。</p>

<p>テンプレートの内容を shadow DOM に追加しているので、テンプレートの内部に {{htmlelement("style")}} 要素を用意しスタイルを含むことができます。このスタイルはカスタム要素の内部でカプセル化されます。これは通常の DOM に追加するだけでは正しく動きません。</p>

<p>したがって、例えば</p>

<pre class="brush: html">&lt;template id="my-paragraph"&gt;
  &lt;style&gt;
    p {
      color: white;
      background-color: #666;
      padding: 5px;
    }
  &lt;/style&gt;
  &lt;p&gt;My paragraph&lt;/p&gt;
&lt;/template&gt;</pre>

<p>こうすれば HTML ドキュメントに以下を追加することで使用できます。</p>

<pre class="brush: html">&lt;my-paragraph&gt;&lt;/my-paragraph&gt;
</pre>

<div class="note">
<p><strong>注意:</strong> テンプレートはブラウザでよくサポートされています。Shadow DOM APIはデフォルトのFirefox (バージョン63以降) 、Chrome、OperaそしてSafariでサポートされています。Edgeでも現在開発が行われています。</p>
</div>

<h2 id="スロットによる柔軟性の強化">スロットによる柔軟性の強化</h2>

<p>ここまでのサンプルでは高々1種類のテキストを表示できるのみで、普通の paragraph よりも使えません。{{htmlelement("slot")}} 要素を用いることで、各要素のインスタンスに異なるテキストを表示させることができます。{{htmlelement("slot")}}  は {{htmlelement("template")}} よりサポートが限られており、Chrome 53以降、Opera 40以降、Safari 10以降、Firefox 59以降で実装されていますが、Edge ではまだサポートされていません。slot はその <code>name</code> 属性で区別されており、template の中で任意のマークアップで slot の内容のデフォルト値を埋めることができます。</p>

<p>上記の例に slot を追加することを考えます。パラグラフの要素を以下のように書くことができます。</p>

<pre class="brush: html">&lt;p&gt;&lt;slot name="my-text"&gt;デフォルトテキスト&lt;/slot&gt;&lt;/p&gt;</pre>

<p>slot の内容が定義されていない場合や、ブラウザが slot をサポートしていな場合は <code>&lt;my-paragraph&gt;</code> は fallback コンテンツを保持し、このサンプルの場合では "デフォルトテキスト" を表示させることになります。</p>

<p>内容を定義したい slot の名前を {{htmlattrxref("slot")}} 属性に設定した要素を <code>&lt;my-paragraph&gt;</code> の中に用意すると、その中身が slot の内容になります。中身は HTML 構造を持つ任意のもので埋めることができます。</p>

<pre class="brush: html">&lt;my-paragraph&gt;
  &lt;span slot="my-text"&gt;新しいテキストを代入します&lt;/span&gt;
&lt;/my-paragraph&gt;</pre>

<p>以下のようにも設定できます。</p>

<pre class="brush: html">&lt;my-paragraph&gt;
  &lt;ul slot="my-text"&gt;
    &lt;li&gt;新しいテキストを代入します&lt;/li&gt;
    &lt;li&gt;リストも代入できます&lt;/li&gt;
  &lt;/ul&gt;
&lt;/my-paragraph&gt;
</pre>

<div class="note">
<p><strong>注意:</strong> スロットに挿入できるのは {{domxref("Slotable")}} な要素に限られます; 要素がスロットに挿入されたとき、<em>slotted</em> と呼ばれます。</p>
</div>

<p>簡単なサンプルでの説明は以上です。他にも実装してみたい場合は、<a href="https://github.com/mdn/web-components-examples/tree/master/simple-template">GitHub上のサンプルコード</a>をご利用ください(<a href="https://mdn.github.io/web-components-examples/simple-template/">実行例</a>)。</p>

<h2 id="より踏み込んだ例">より踏み込んだ例</h2>

<p>他の例もみてみましょう。</p>

<p>これからのコードは {{htmlelement("slot")}} を {{htmlelement("template")}} と共に使用する方法の例です。以下の2点を目指す JavaScript です。</p>

<ul>
 <li><a href="/ja/docs/Web/API/ShadowRoot">shadow root</a> の中で <strong><code>&lt;element-details&gt;</code></strong> 要素を <a href="/ja/docs/Web/HTML/Element/slot#named-slot">slot</a> を用いて作ること。</li>
 <li><strong><code>&lt;element-details&gt;</code></strong> 要素を、その <a href="/ja/docs/Web/API/ShadowRoot">shadow root</a> と一緒にレンダリングされるように作ること。つまり、要素の内容が <a href="/ja/docs/Web/HTML/Element/slot#named-slot">slots</a> の中身に代入されるようになります。</li>
</ul>

<p>{{htmlelement("slot")}} 要素は {{htmlelement("template")}} 要素なしで使用することが可能です。例えば、 {{HTMLElement("div")}} 要素の中で宣言しても Shadow DOM で使用した場合と同様にプレースホルダーとしての役割は果たします。しかし、{{HTMLElement("template")}} 要素の中で使用する方がより一般的で実用的です。</p>

<p>テンプレートを利用したコンテナの目的は {{HTMLElement("template")}} を使用することで意味的にわかりやすくすることです。さらに、{{HTMLElement("template")}} の中には {{HTMLElement("td")}} など直接追加して良い要素があり、これらは {{HTMLElement("div")}} 要素の中に追加された場合は消えます。</p>

<div class="note">
<p>注意: element-detailsの完全なコードは<a href="https://github.com/mdn/web-components-examples/tree/master/element-details">ここ</a>から見ることができます (<a href="https://mdn.github.io/web-components-examples/element-details/">実行例</a>)。</p>
</div>

<h3 id="template_をスロットと共に作る">template をスロットと共に作る</h3>

<p>まず最初に{{htmlelement("template")}} 要素の中に {{htmlelement("slot")}} 要素を作成し、新しい "element-details-template" と名付けた<a href="/ja/docs/Web/API/DocumentFragment">フラグメント</a>を作ります。</p>

<pre class="brush: html">&lt;template id="element-details-template"&gt;
  &lt;style&gt;
  details {font-family: "Open Sans Light",Helvetica,Arial}
  .name {font-weight: bold; color: #217ac0; font-size: 120%}
  h4 { margin: 10px 0 -8px 0; }
  h4 span { background: #217ac0; padding: 2px 6px 2px 6px }
  h4 span { border: 1px solid #cee9f9; border-radius: 4px }
  h4 span { color: white }
  .attributes { margin-left: 22px; font-size: 90% }
  .attributes p { margin-left: 16px; font-style: italic }
  &lt;/style&gt;
  &lt;details&gt;
    &lt;summary&gt;
      &lt;span&gt;
        &lt;code class="name"&gt;&amp;lt;&lt;slot name="element-name"&gt;NEED NAME&lt;/slot&gt;&amp;gt;&lt;/code&gt;
        &lt;i class="desc"&gt;&lt;slot name="description"&gt;NEED DESCRIPTION&lt;/slot&gt;&lt;/i&gt;
      &lt;/span&gt;
    &lt;/summary&gt;
    &lt;div class="attributes"&gt;
      &lt;h4&gt;&lt;span&gt;Attributes&lt;/span&gt;&lt;/h4&gt;
      &lt;slot name="attributes"&gt;&lt;p&gt;None&lt;/p&gt;&lt;/slot&gt;
    &lt;/div&gt;
  &lt;/details&gt;
  &lt;hr&gt;
&lt;/template&gt;
</pre>

<p>この {{HTMLElement("template")}} 要素にはいくつかの機能があります。</p>

<ul>
 <li>{{HTMLElement("template")}} には {{HTMLElement("style")}} 要素が実装されており、{{HTMLElement("template")}} が作るフラグメントの中のみに適応されるCSSスタイルを定義できます。 </li>
 <li>{{HTMLElement("template")}} は {{htmlelement("slot")}} を使用しており、それぞれの {{htmlattrxref("name", "slot")}} 属性は以下のように定義されています。
  <ul>
   <li><code>&lt;slot name="element-name"&gt;</code></li>
   <li><code>&lt;slot name="description"&gt;</code></li>
   <li><code>&lt;slot name="attributes"&gt;</code></li>
  </ul>
 </li>
 <li>{{HTMLElement("template")}} の中で各 <a href="/ja/docs/Web/HTML/Element/slot#named-slot">slot</a> は{{HTMLElement("details")}} 要素の中に実装されています。</li>
</ul>

<h3 id="&lt;template>_から_&lt;element-details>_要素を作る">&lt;template&gt; から &lt;element-details&gt; 要素を作る</h3>

<p>次に <strong><code>&lt;element-details&gt;</code></strong> と名付けた新しいカスタム要素を作りましょう。 上で確認した簡単な例と同様に、{{DOMXref("Element.attachShadow")}} を利用してカスタム要素に <a href="/ja/docs/Web/API/ShadowRoot">shadow root</a> を追加します。</p>

<pre class="brush: js">customElements.define('element-details',
  class extends HTMLElement {
    constructor() {
      super();
      var template = document
        .getElementById('element-details-template')
        .content;
      const shadowRoot = this.attachShadow({mode: 'open'})
        .appendChild(template.cloneNode(true));
  }
})
</pre>

<h3 id="名前付きスロットと共に_&lt;element-details>_要素を使う">名前付きスロットと共に &lt;element-details&gt; 要素を使う</h3>

<p>では <strong><code>&lt;element-details&gt;</code></strong> 要素を実際に使ってみましょう。 </p>

<pre class="brush: html">&lt;element-details&gt;
  &lt;span slot="element-name"&gt;slot&lt;/span&gt;
  &lt;span slot="description"&gt;A placeholder inside a web
    component that users can fill with their own markup,
    with the effect of composing different DOM trees
    together.&lt;/span&gt;
  &lt;dl slot="attributes"&gt;
    &lt;dt&gt;name&lt;/dt&gt;
    &lt;dd&gt;The name of the slot.&lt;/dd&gt;
  &lt;/dl&gt;
&lt;/element-details&gt;

&lt;element-details&gt;
  &lt;span slot="element-name"&gt;template&lt;/span&gt;
  &lt;span slot="description"&gt;A mechanism for holding client-
    side content that is not to be rendered when a page is
    loaded but may subsequently be instantiated during
    runtime using JavaScript.&lt;/span&gt;
&lt;/element-details&gt;
</pre>

<p>このコードについて以下の点に注意してください。</p>

<ul>
 <li>２つの <strong><code>&lt;element-details&gt;</code></strong> 要素が使用されており、いずれも {{htmlattrxref("slot")}} 属性を <code>"element-name"</code> および <code>"description"</code> と指定することで対応する <a href="/ja/docs/Web/HTML/Element/slot#named-slot">slot</a> を参照しています。</li>
 <li>1つ目の <strong><code>&lt;element-details&gt;</code></strong> 要素でのみ <code>"attributes"</code> と名付けられた <a href="/ja/docs/Web/HTML/Element/slot#named-slot">slot</a> を参照しています。2個目の <code><strong>&lt;element-details</strong>&gt;</code> 要素では参照していません。</li>
 <li>1つ目の <code>&lt;<strong>element-details&gt;</strong></code> 要素は {{HTMLElement("dl")}} 要素を用いて <code>"attributes"</code> と名付けられた <a href="/ja/docs/Web/HTML/Element/slot#named-slot">slot</a> を参照しています。</li>
</ul>

<h3 id="スタイルを追加する">スタイルを追加する</h3>

<p>最後にもう少しCSSスタイルを追加します。これは、1個目の <code>&lt;element-details&gt;</code> の中で使われている {{HTMLElement("dl")}}、{{HTMLElement("dt")}}、{{HTMLElement("dd")}} 要素のために用意されています。 </p>

<pre class="brush: css">  dl { margin-left: 6px; }
  dt { font-weight: bold; color: #217ac0; font-size: 110% }
  dt { font-family: Consolas, "Liberation Mono", Courier }
  dd { margin-left: 16px }
</pre>

<div class="hidden">
<pre class="brush: css">body { margin-top: 47px }</pre>
</div>

<h3 id="結果">結果</h3>

<p>以上のコードを繋げてどのような結果がレンダリングされるかを確認しましょう。</p>

<p>{{ EmbedLiveSample('full_example', '300','400','https://mdn.mozillademos.org/files/14553/element-details.png','') }}</p>

<p>以下のことに着目してください。</p>

<ul>
 <li>ドキュメント内で <strong><code>&lt;element-details&gt;</code></strong> 要素のインスタンスは {{HTMLElement("details")}} 要素を直接使用しませんが、 <a href="/ja/docs/Web/API/ShadowRoot">shadow root</a> が {{HTMLElement("details")}} を生成することでレンダリングされます。</li>
 <li>レンダリングされた {{HTMLElement("details")}} の出力結果で、<strong><code>&lt;element-details&gt;</code></strong> 要素のコンテンツは <a href="/ja/docs/Web/API/ShadowRoot">shadow root</a> から<a href="/ja/docs/Web/HTML/Element/slot#named-slot">名前付きスロット</a>を埋め込みます。言い換えれば、<strong><code>&lt;element-details&gt;</code></strong> 要素のDOMツリーは <a href="/ja/docs/Web/API/ShadowRoot">shadow root</a> のコンテンツと共に構成されます。</li>
 <li>両方の <strong><code>&lt;element-details&gt;</code></strong> 要素おいて、<code>"attributes"</code> 名前付きスロットが配置される前に、 <a href="/ja/docs/Web/API/ShadowRoot">shadow root</a> から自動的に <strong>Attributes </strong>見出しは自動的に追加されます。</li>
 <li>最初の <strong><code>&lt;element-details&gt;</code></strong> は <a href="/ja/docs/Web/API/ShadowRoot">shadow root</a> から<a href="/ja/docs/Web/HTML/Element/slot#named-slot">名前付きスロット</a>を明示的に参照している {{HTMLElement("dl")}} 要素を持つため、{{HTMLElement("dl")}} のコンテンツは  <a href="/ja/docs/Web/API/ShadowRoot">shadow root</a> から <code>"attributes"</code> <a href="/ja/docs/Web/HTML/Element/slot#named-slot">名前付きスロット</a>を置き換えています。</li>
 <li>二つ目の <strong><code>&lt;element-details&gt;</code></strong> は <a href="/ja/docs/Web/API/ShadowRoot">shadow root</a> から<a href="/ja/docs/Web/HTML/Element/slot#named-slot">名前付きスロット</a>を明示的に参照していないため、<a href="/ja/docs/Web/HTML/Element/slot#named-slot">名前付きスロット</a>のコンテンツは <a href="/ja/docs/Web/API/ShadowRoot">shadow root</a> のデフォルトのコンテンツが埋め込まれます。</li>
</ul>

<div class="hidden">
<h5 id="full_example">full example</h5>

<pre class="brush: html">&lt;!DOCTYPE html&gt;
&lt;html&gt;
  &lt;head&gt;
    &lt;title&gt;slot example&lt;/title&gt;
    &lt;style&gt;

      dl { margin-left: 6px; }
      dt { font-weight: bold; color: #217ac0; font-size: 110% }
      dt { font-family: Consolas, "Liberation Mono", Courier }
      dd { margin-left: 16px }

    &lt;/style&gt;
  &lt;/head&gt;
  &lt;body&gt;
    &lt;template id="element-details-template"&gt;
      &lt;style&gt;
      details {font-family: "Open Sans Light",Helvetica,Arial}
      .name {font-weight: bold; color: #217ac0; font-size: 120%}
      h4 { margin: 10px 0 -8px 0; }
      h4 span { background: #217ac0; padding: 2px 6px 2px 6px }
      h4 span { border: 1px solid #cee9f9; border-radius: 4px }
      h4 span { color: white }
      .attributes { margin-left: 22px; font-size: 90% }
      .attributes p { margin-left: 16px; font-style: italic }
      &lt;/style&gt;
      &lt;details&gt;
        &lt;summary&gt;
          &lt;span&gt;
            &lt;code class="name"&gt;&amp;lt;&lt;slot name="element-name"&gt;NEED NAME&lt;/slot&gt;&amp;gt;&lt;/code&gt;
            &lt;i class="desc"&gt;&lt;slot name="description"&gt;NEED DESCRIPTION&lt;/slot&gt;&lt;/i&gt;
          &lt;/span&gt;
        &lt;/summary&gt;
        &lt;div class="attributes"&gt;
          &lt;h4&gt;&lt;span&gt;Attributes&lt;/span&gt;&lt;/h4&gt;
          &lt;slot name="attributes"&gt;&lt;p&gt;None&lt;/p&gt;&lt;/slot&gt;
        &lt;/div&gt;
      &lt;/details&gt;
      &lt;hr&gt;
    &lt;/template&gt;

    &lt;element-details&gt;
      &lt;span slot="element-name"&gt;slot&lt;/span&gt;
      &lt;span slot="description"&gt;A placeholder inside a web
        component that users can fill with their own markup,
        with the effect of composing different DOM trees
        together.&lt;/span&gt;
      &lt;dl slot="attributes"&gt;
        &lt;dt&gt;name&lt;/dt&gt;
        &lt;dd&gt;The name of the slot.&lt;/dd&gt;
      &lt;/dl&gt;
    &lt;/element-details&gt;

    &lt;element-details&gt;
      &lt;span slot="element-name"&gt;template&lt;/span&gt;
      &lt;span slot="description"&gt;A mechanism for holding client-
        side content that is not to be rendered when a page is
        loaded but may subsequently be instantiated during
        runtime using JavaScript.&lt;/span&gt;
    &lt;/element-details&gt;

    &lt;script&gt;
    customElements.define('element-details',
      class extends HTMLElement {
        constructor() {
          super();
          const template = document
            .getElementById('element-details-template')
            .content;
          const shadowRoot = this.attachShadow({mode: 'open'})
            .appendChild(template.cloneNode(true));
        }
      })
    &lt;/script&gt;
  &lt;/body&gt;
&lt;/html&gt;</pre>
</div>
