---
title: 仕様書表
slug: MDN/Structures/Specification_tables
tags:
  - Guide
  - MDN Meta
  - Structures
translation_of: MDN/Structures/Specification_tables
---
<div>{{MDNSidebar}}</div>

<div>{{IncludeSubnav("/ja/docs/MDN")}}</div>

<p>MDN 上のすべてのリファレンスページでは、 API または技術が定義されている仕様書に関する情報を提供するようにしてください。この記事ではこれらの表の外見を示し、構築方法を説明します。</p>

<p>このような表は、少し<a href="/ja/docs/MDN/Contribute/Structures/Compatibility_tables">互換性一覧表</a> (こちらも仕様書表があるすべてのページで示すようにしてください) と似ています。</p>

<h2 id="Format" name="Format">書式</h2>

<p>仕様書表は、従来から3つの列で構成されています。</p>

<dl>
 <dt>仕様書</dt>
 <dd>その技術が定義されている仕様書の名前やリンクです。</dd>
 <dt>状態</dt>
 <dd>仕様書の状態です (例えば、編集者草稿であるか勧告候補であるかなど)。</dd>
 <dt>備考</dt>
 <dd>関連する何らかの追加情報です。これは特に、 API が複数の仕様書にまたがって定義された場合に有用で、それぞれの仕様書が API のどの部分のもとになっているのかを短く説明することができます。</dd>
</dl>

<p>MDN で見られる大部分の表は上記の列から構成されていますが、構造を更新する進行中の計画があり、あちこちで異なる構造のものを見かけることがあるかもしれませんが、最終的な目標は<a href="https://github.com/mdn/browser-compat-data">ブラウザー互換データリポジトリ</a>に仕様書の定義のリンクを格納して、そこから表を自動生成させることです。公開議論の文書は <a href="https://docs.google.com/document/d/1eL8YtslVZAnIAGb7rcZGbvXndkcR7lb9rhDpvGpGaWs/edit#">Improving MDN Specification tables</a> にあります。</p>

<h2 id="Which_specs_should_be_included" name="Which_specs_should_be_included">どの仕様書を含めるべきか</h2>

<p>表の中では1行あたり1件の API または技術が基づく仕様書が記述されます。</p>

<p>それぞれの表にどの仕様書を含めるかは、どの機能が当該リファレンスページで記述されているかによります。</p>

<ul>
 <li>ある仕様書の単一機能についての記述である場合、普通、その機能を定義している最新の仕様書を記述した1行を含めることだけが必要です。例えば <a href="/ja/docs/Web/API/AudioContext/close#Specifications"><code>AudioContext.close()</code> の仕様書</a>のような書き方です。</li>
 <li>複数の仕様書で定義された複数の部分 API のランディングページ (拡張機能など) である場合、参照している複数の仕様書を複数行にわたって記述する必要があります。簡潔で明確な例としては <a href="/ja/docs/Web/API/Gamepad_API#Specifications">Gamepad API の仕様書</a>を参照して下さい。</li>
</ul>

<h3 id="Different_types_of_specs" name="Different_types_of_specs">様々な種類の仕様書表</h3>

<p>「ライブ仕様書」で定義された技術 (例えば、<a href="https://html.spec.whatwg.org/multipage/">HTML</a> や <a href="https://dom.spec.whatwg.org/">DOM</a>) の場合、おそらくリンクする必要があるのは単一の仕様書だけであり、その技術が定義されている正式な単一の場所としてのものです。</p>

<p>他の仕様書表 (通常は WebAPI 仕様書) では、常に最新の編集者草稿を指す単一の URL を、仕様書ごとに (同じ仕様書とは限らないが) 入れる必要があるのが普通でしょう。このような場合、普通は最新の編集者草稿にリンクしたほうが、仕様書が変更された時にリンクが正しくあり続けます。 — 最新の編集者草稿は、最新の機能がすべて定義されており、ブラウザーベンダーがよりどころとしているものです。したがって、これはリンクするのに最も興味深い場所であり、多くの場合は最新情報です。この例としては、 <a href="https://w3c.github.io/IndexedDB/">IndexedDB draft</a>, <a href="https://webaudio.github.io/web-audio-api/">Web Audio API draft</a>, 等があります。最新の草稿へのリンクが、仕様書表の一番上に見られます。</p>

<p>他の仕様書表には、一つの仕様書で定義された中心機能がありますが、機能が拡張されることがあり、例えば、 Credential Management 仕様書は Web Authentication 仕様書によって拡張されています (<a href="/ja/docs/Web/API/Credential_Management_API#Specifications">仕様書表を見る</a>)。</p>

<p>CSS の仕様書表については、そのように単純ではありません。 — CSS の仕様書はふつう、新しい機能を導入する複数のレベルに分割されています。 — 例えば、 <a href="https://drafts.csswg.org/mediaqueries-4/">Media Queries Level 4</a> と <a href="https://drafts.csswg.org/mediaqueries-5/">Media Queries Level 5</a> といった具合です。多くの場合、複数の仕様書にリンクして、機能の動作が定義されているすべての場所を示す必要があります。</p>

<p>MDN に仕様書表を追加するとき (方法は以下参照)、上記の考えを意識しておいてください。ライブの仕様書を表現するには技術の名前のみです (例えば "HTML")。最新の仕様書の草稿は <em>WebAPI 名</em>草稿とします (例えば "IndexedDB 草稿")。複数の仕様書が必要な場合は、仕様書の正確な名前を使用してください。</p>

<h3 id="What_not_to_include" name="What_not_to_include">含めるべきではないもの</h3>

<p>MDN の多くの仕様書表が、ある機能を定義したすべての仕様書を過去にさかのぼって含めています。例えば、 <a href="/ja/docs/Web/CSS/color#Specifications">CSS の color プロパティの仕様書表</a>のようにです。これは CSS レベル1まですべてをさかのぼっていますが、おそらく表の下3行は必要ないでしょう。色がアニメーション可能であることについての部分を除いて、レベル4ですべてが定義されています。</p>

<p>特に、廃止とされた仕様書を参照する必要はありません。これは役に立ちません。</p>

<p>また、 <a href="https://www.w3.org/2019/04/WHATWG-W3C-MOU.html#transition">W3C が WHATWG Living Standard で扱っている技術仕様書のスナップショットの発行をやめることに合意しました</a>。 — 両方で扱っていた技術については、 WHATWG の仕様書を並べるだけでよくなります。</p>

<h2 id="Macros" name="Macros">マクロ</h2>

<p>これらの表を、適切な書式で標準の書式で構築しやすくするために、 KumaScript マクロを使用しています。使い方を知っておく必要がある物は2つあります。</p>

<h3 id="SpecName" name="SpecName"><code>\{{SpecName}}</code></h3>

<p>{{TemplateLink("SpecName")}} マクロは、「仕様書」列の内容を生成するために使います。3つの引数を受け付けます。</p>

<ol>
 <li>仕様書の名前。</li>
 <li>任意で、リンクされた仕様書内のアンカー。これは、例えば複数のオブジェクトやインターフェイスを定義している仕様書の中で、特定の章にリンクできるようになります。なお、この引数は任意ですが、強く推奨します。読み手は生成されたリンクをクリックしたとき、仕様書のその概念が定義されている詳細な位置に届くことを期待するからです。</li>
 <li>ツールチップ内で使用するプロパティまたはエンティティの名前です。これは、仕様書内で特定のインターフェイスにリンクする時にも使用されます。この引数も任意ですが、追加して概念の名前を設定することを強く推奨します。</li>
</ol>

<p>仕様書に指定する名前は、マクロ内の <code>specList</code> オブジェクトで見られます。リンクしたい仕様書にマクロが対応していない場合、 <a href="https://github.com/mdn/kumascript/blob/master/macros/SpecData.json">SpecData</a> ファイルを更新するプルリクエストを提案してください。</p>

<h3 id="Spec2" name="Spec2"><code>\{{Spec2}}</code></h3>

<p>{{TemplateLink("spec2")}} マクロは、指定されれた仕様書の名前から、「状態」列で仕様書の状態を示すウィジェットを生成し挿入します。こちらも <a href="https://github.com/mdn/kumascript/blob/master/macros/SpecData.json">SpecData</a> ファイルからデータを取得します。こちらも、リンクしたい仕様書にマクロが対応していない場合は、プルリクエストを提案してください。</p>
