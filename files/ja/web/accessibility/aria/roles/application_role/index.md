---
title: 'ARIA: application ロール'
slug: Web/Accessibility/ARIA/Roles/Application_Role
tags:
  - ARIA
  - ARIA Role
  - Accessibility
translation_of: Web/Accessibility/ARIA/Roles/Application_Role
---
<p><span class="seoSummary">アプリケーション (<code>application</code>) ロールは、要素とその全ての子要素をデスクトップアプリケーションと同様に扱うべきであり、伝統的な HTML 解釈手法を使用するべきでないと支援技術に指示します。 このロールは、とても動的でデスクトップ的なウェブアプリケーションを定義するためにのみ使用するべきです。</span></p>

<pre class="brush: html">&lt;div role="application"&gt;...&lt;/div&gt;
</pre>

<p>これは、デスクトップアプリケーションの一部であるかのように、この <code>&lt;div&gt;</code> 要素とその全ての子孫を扱うことを定義します。</p>

<h2 id="Description" name="Description">説明</h2>

<p>アプリケーション (<code>application</code>) ロールは、支援技術に対して、ウェブコンテンツのこの部分に、他の既知の HTML 要素や WAI-ARIA ウィジェットに適合しない要素が含まれていることを示します。 HTML 構造やウィジェットの特別な解釈は一切中止し、マウスやキーボード、タッチのインタラクションを扱うためには、コントロールをブラウザーやウェブアプリケーションに完全に渡すべきです。</p>

<p>このモードでは、ウェブ作成者は、キーボード入力、フォーカス管理、その他のインタラクションを全て処理する責任があり、支援技術が最終的に何らかの処理を行うとは想定できません。</p>

<p>アプリケーション (<code>application</code>) ロールに包まれるウェブアプリケーションに、通常のウェブコンテンツと同様に扱われるべき部分が含まれている場合は、文書 (<code><a href="/ja/docs/Web/Accessibility/ARIA/Roles/Document_Role">document</a></code>) ロールや記事 (<code><a href="/ja/docs/Web/Accessibility/ARIA/Roles/Article_Role">article</a></code>) ロールを使用するべきです。</p>

<h3 id="Background" name="Background">背景</h3>

<p>歴史的な理由で、特に Windows 上では、スクリーンリーダーやその他の支援技術 (AT) は、従来、読み込みが完了した後に、ブラウザーからウェブコンテンツ全体を一度に取得していました。 AT は、視覚障害者がコンテンツを消費するのに最も合理的な表現を独自に構築します。 これは、仮想文書、閲覧モード、または類似の用語で呼ばれることがよくあります。 文書は単一列のビューに合理化されます。 キーボードインタラクションモデルが生成され、これはワードプロセッサーにとても似ていて、このモデルでは、行単位、文単位、段落単位で読むことができます。 AT は、リンク、見出し、フォームコントロール、テーブル、リスト、画像のような任意の意味論を読み取ります。</p>

<p>さらに、いわゆるクイックナビゲーションキーのセットが長年にわたって確立されてきたため、視覚障害者は特定の要素タイプを介してページを流し読みすることができます。 このような要素には、通常、見出し、フォームフィールド、リスト、テーブル、リンク、グラフィック、ランドマークリージョンが含まれます。</p>

<p>この全てがうまくいくためには、AT はほぼ全てのキーボード入力を遮り、それを消費し、ブラウザーや他のユーザエージェントに何も送られないようにします。 ウェブページとインタラクションできるように、特定のキー (通常は <kbd>Enter</kbd> キー) を押すと、このモードはオフになり、標準的なウィジェットのセットが認識されます。 フォームモードやフォーカスモードとも呼ばれるスクリーンリーダーモードでは、全てのキーボード入力がブラウザーに再び送られます。 <kbd>Escape</kbd> キーは閲覧モードに戻るための最も一般的な方法です。</p>

<p>アプリケーション (<code>application</code>) ロールは、ウェブコンテンツとインタラクションするために閲覧モードとフォーカスモードの両方を使用する AT において、直接的なインタラクションでアクセス可能な標準的なセットの一部ではないウィジェットのための手段を提供するように設計されています。</p>

<h3 id="Associated_WAI-ARIA_Roles_States_and_Properties" name="Associated_WAI-ARIA_Roles_States_and_Properties">関連する WAI-ARIA のロール、ステート、プロパティ</h3>

<dl>
 <dt><code><a href="/ja/docs/Web/Accessibility/ARIA/Roles/Document_Role">document</a></code>, <code><a href="/ja/docs/Web/Accessibility/ARIA/Roles/Article_Role">article</a></code></dt>
 <dd>通常のウェブコンテンツとして扱われるべきアプリケーションの部分を示すために使用します。</dd>
 <dt>aria-activedescendant</dt>
 <dd>アプリケーション内でのフォーカスの管理に使用します。</dd>
 <dt>aria-label</dt>
 <dd>公開されているアプリケーションの名前やウィジェットの目的を提供するために使用します。</dd>
 <dt>aria-describedby</dt>
 <dd>この要素をナビゲートまたは操作するための追加の説明書を含む要素の <code>id</code> 参照を示すのに使用します。</dd>
 <dt>aria-roledescription</dt>
 <dd>スクリーンリーダーが話すための、より説明的なロールのテキストをアプリケーションに与えるために使用します。 これはローカライズするべきです。</dd>
</dl>

<h3 id="Keyboard_Interactions" name="Keyboard_Interactions">キーボードインタラクション</h3>

<p>キーボードインタラクションは、完全にウェブ制作者のコントロール下にあり、実装されている特定のウィジェットに関連するものでもかまいません。 例えば、スライドアプリケーションでは、矢印キーを使用してスライド上の要素を配置し、ARIA のライブリージョンを介して音声によるフィードバックを使用して位置や他のオブジェクトとのオーバーラップの状態を伝えるウィジェットを作成できます。 フォーカスは、<code>aria-activedescendant</code> によって管理します。</p>

<p><kbd>Tab</kbd> キー、<kbd>スペース</kbd>キー、<kbd>Enter</kbd> キー、および <kbd>Escape</kbd> キーは、アプリケーションで処理する必要があります。 1つの例外は、フォーカスが、ブラウザーからのキーボードナビゲーションをサポートするアプリケーション内の標準ウィジェット (例えば {{htmlelement("input")}} 要素) に設定されている場合です。</p>

<h3 id="Required_JavaScript_features" name="Required_JavaScript_features">必要な JavaScript 機能</h3>

<dl>
 <dt>キー操作</dt>
 <dd>キーボード入力の処理とフォーカスの制御に使用します。</dd>
 <dt>クリック、タッチ</dt>
 <dd>あなたのウィジェットにも適切に対処してください。</dd>
 <dt>属性値の変更</dt>
 <dd><code>aria-activedescendant</code> は、アプリケーションコンテナー内のフォーカスを管理するために使用します。 フォーカスやインタラクションのポイントを変更するキーボードやその他のアプリケーションのイベントに応じて設定します。</dd>
</dl>

<div class="note">
<p>アプリケーション (<code>application</code>) ロールには、関連する HTML ウィジェットがないため、完全に自由形式です。 アプリケーションの作成者は、ユーザーがフォーカスのリンボに拘束されたり、ユーザーが抜け出せないものの中にフォーカスを閉じ込められたりしないようにするために全面的な責任を負う必要があります。 ページの他の部分にある通常のウェブコンテンツに戻ることを含む、インタラクションの全ての側面を処理する必要があります。 賢明に、そして慎重に使用してください！</p>
</div>

<h2 id="Examples" name="Examples">例</h2>

<p>アプリケーション (<code>application</code>) ロールを適切に使用するいくつかの有名なウェブアプリケーションは次のとおりです。</p>

<ul>
 <li>グーグルの Docs、Sheets、Slides</li>
 <li>CKEditor と TinyMCE の WYSIWYG ウェブエディタは、Mozilla Developer Network で使用されているようなものです。</li>
 <li>Gmail の一部 (訳注：<a href="https://www.marcozehe.de/2012/02/06/if-you-use-the-wai-aria-role-application-please-do-so-wisely/">グーグルから使っていないという情報あり</a>)</li>
</ul>

<h2 id="Accessibility_concerns" name="Accessibility_concerns">アクセシビリティに関する懸念</h2>

<p>アプリケーション (<code>application</code>) ロールを不適切に使用すると、意図せずにウェブページの情報からのアクセスを奪う可能性があるので、使用には十分注意してください。 あなたが実際にそれを必要とし、他の既知のウィジェットのセットを使って同じことができない場合に、真剣に考えます。 使用する場合は、アプリケーション (<code>application</code>) ロールは、例えば <code>&lt;body&gt;</code> 要素ではなく、可能な最も低い共通コンテナーに追加するべきです。</p>

<h2 id="Specifications" name="Specifications">仕様</h2>

<table class="standard-table">
 <tbody>
  <tr>
   <th scope="col">仕様</th>
   <th scope="col">状態</th>
  </tr>
  <tr>
   <td>{{SpecName("ARIA","#application","application")}}</td>
   <td>{{Spec2('ARIA')}}</td>
  </tr>
 </tbody>
</table>

<h2 id="Precedence_order" name="Precedence_order">優先順位</h2>

<p>アプリケーション (<code>application</code>) ロールを適用すると、この要素の全ての子孫要素がウェブコンテンツではなくアプリケーションコンテンツのように扱われます。 支援技術がウェブコンテンツに与えるであろう読み上げメカニズムは適用されません。</p>

<h2 id="See_also" name="See_also">関連情報</h2>

<ul>
 <li><a href="https://www.marcozehe.de/2012/02/06/if-you-use-the-wai-aria-role-application-please-do-so-wisely/">WAI-ARIA のロール "application" を使用する場合は、賢明にしてください</a> — Marco Zehe のブログ記事 (英語)</li>
</ul>


<section id="Quick_links">
    <ol>
        <li><a href="/ja/docs/Web/Accessibility/ARIA/Roles"><strong>WAI-ARIA ロール</strong></a>{{ListSubpagesForSidebar("/ja/docs/Web/Accessibility/ARIA/Roles")}}</li>
    </ol>
</section>
