---
title: Accessibility tree (アクセシビリティツリー)
slug: Glossary/Accessibility_tree
tags:
  - AOM
  - Accessibility
  - DOM
  - Glossary
  - Reference
  - アクセシビリティ
  - 用語集
translation_of: Glossary/Accessibility_tree
---
<p><span class="seoSummary"><strong>アクセシビリティツリー</strong>、または<strong>アクセシビリティオブジェクトモデル</strong> (<strong>AOM</strong>) は、多くの HTML 要素におけるアクセシビリティに関する情報を含んでいます。</span></p>

<p>ブラウザーはマークアップを <em><a href="/ja/docs/Web/API/Document_object_model/How_to_create_a_DOM_tree">DOM ツリー</a></em> と呼ばれる内部表現に変換します。 DOM ツリーはすべてのマークアップの要素、属性、テキストノードを含んでいます。ブラウザーはそれから、 DOM ツリーに基づいてアクセシビリティツリーを生成します。これは、読み上げソフトなどの支援技術のために、プラットフォームに特有のアクセシビリティ API から使用されます。</p>

<p>アクセシビリティツリーオブジェクトの中には4つのものがあります。</p>

<dl>
 <dt><strong>name</strong></dt>
 <dd>このものをどのように参照することができるか。例えば、 ‘Read more’ というテキストを持ったリンクは ‘Read more’ という名前を持つでしょう (名前がどのように計算されるかの詳細については <a href="https://www.w3.org/TR/accname-1.1/">Accessible Name and Description Computation spec</a> にあります)。</dd>
 <dt><strong>description</strong></dt>
 <dd>名前に何かを追加したいとすれば、この要素をどのように説明するか。表の説明は、その表が提供する情報の種類が何かで説明することができます。</dd>
 <dt><strong>role</strong></dt>
 <dd>どのような種類のものなのか。例えば、ボタンなのか、ナビゲーションバーなのか、アイテムのリストなのか。</dd>
 <dt><strong>state</strong></dt>
 <dd>状態があるかどうか。チェックボックスではチェック済み／未チェック、 <code><a href="/ja/docs/Web/HTML/Element/summary">&lt;summary&gt;</a></code> 要素では折り畳み状態か展開状態か、などを想像してください。</dd>
</dl>

<p>加えて、アクセシビリティツリーは要素によって何が行われるのかについての情報を持つことがよくあります。リンクは <em>followed</em>、テキスト入力は <em>typed into</em>、などです。</p>

<section id="Quick_links">
<ol>
 <li><a href="/ja/docs/Glossary">用語集</a>

  <ol>
   <li>{{Glossary("Accessibility", "アクセシビリティ")}}</li>
   <li>{{Glossary("ARIA")}}</li>
  </ol>
 </li>
</ol>
</section>
