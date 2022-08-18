---
title: spellcheck
slug: Web/HTML/Global_attributes/spellcheck
tags:
  - Global attributes
  - HTML
  - Reference
translation_of: Web/HTML/Global_attributes/spellcheck
---
<div>{{HTMLSidebar("Global_attributes")}}</div>

<p><strong><code>spellcheck</code></strong> <a href="/ja/docs/Web/HTML/Global_attributes">グローバル属性</a>は、要素でスペルミスのチェックを行うかを定義する列挙型属性です。</p>

<div>{{EmbedInteractiveExample("pages/tabbed/attribute-spellcheck.html","tabbed-shorter")}}</div>

<div class="hidden">この対話型サンプルのソースファイルは GitHub リポジトリに格納されています。対話型サンプルプロジェクトに協力したい場合は、 <a href="https://github.com/mdn/interactive-examples">https://github.com/mdn/interactive-examples</a> をクローンしてプルリクエストを送信してください。</div>

<p>以下の値を使用できます。</p>

<ul>
 <li><code>true</code>: 可能であればその要素でスペルチェックを行うことを示す</li>
 <li><code>false</code>: その要素でスペルチェックを行わないことを示す</li>
</ul>

<div class="blockIndicator note">
<p><strong>注:</strong> <code>spellcheck</code> 属性は<em>列挙型</em>であり、<em>論理属性</em>ではありません。これは、 <code>true</code> または <code>false</code> のどちらかを明確に使用することが必須であり、 <code>&lt;textarea spellcheck&gt;&lt;/textarea&gt;</code> のような省略形は使用できないということです。正しい使い方は <code>&lt;textarea spellcheck="true"&gt;&lt;/textarea&gt;</code> です。</p>
</div>

<p>この属性を設定しなかった場合の既定値は、要素の種類やブラウザーによって定義されます。既定値は<em>継承</em>されます。つまりもっとも近い祖先要素の <em>spellcheck</em> が <code>true</code> である場合にのみ、自身もスペルチェックを受けることがあります。</p>

<p>この属性は単に、ブラウザーに対する助言です。ブラウザーがスペルチェックを有効にすることを求められてはいません。一般的に編集不可能な要素は、 <code>spellcheck</code> 属性を <code>true</code> に設定してブラウザーがスペルチェックに対応していても、スペルチェックされません。</p>

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
   <td>{{SpecName('HTML WHATWG', "interaction.html#spelling-and-grammar-checking", "spellcheck")}}</td>
   <td>{{Spec2('HTML WHATWG')}}</td>
   <td>最新のスナップショットである {{SpecName('HTML5.1')}} から変更なし</td>
  </tr>
  <tr>
   <td>{{SpecName('HTML5.1', "editing.html#spelling-and-grammar-checking", "spellcheck")}}</td>
   <td>{{Spec2('HTML5.1')}}</td>
   <td>{{SpecName('HTML WHATWG')}}、初回定義のスナップショット</td>
  </tr>
 </tbody>
</table>

<h2 id="Browser_compatibility" name="Browser_compatibility">ブラウザーの互換性</h2>

<p>{{Compat("html.global_attributes.spellcheck")}}</p>

<h2 id="See_also" name="See_also">関連情報</h2>

<ul>
 <li>すべての <a href="/ja/docs/Web/HTML/Global_attributes">グローバル属性</a></li>
</ul>
