---
title: 'ARIA: feed ロール'
slug: Web/Accessibility/ARIA/Roles/Feed_Role
tags:
  - ARIA
  - ARIA Role
  - Accessibility
translation_of: Web/Accessibility/ARIA/Roles/Feed_Role
---
<p><span class="seoSummary">フィード (<code>feed</code>) は動的にスクロール可能な記事 (<code>article</code>) のリスト (<code>list</code>) で、ユーザーがスクロールすると記事がリストのどちらかの端から追加または削除されます。 フィード (<code>feed</code>) により、スクリーンリーダーは閲覧モードの読み取りカーソルを使用して、リッチコンテンツのストリームを読み込みながらスクロールすることを可能にし、ユーザーが読むにつれてコンテンツをさらにロードすることで無限にスクロールし続けることができます。</span></p>

<pre class="brush: html">&lt;section role="feed" <a class="state-reference" href="https://w3c.github.io/aria/#aria-busy">aria-busy</a>="false"&gt;
  ...
  &lt;article aria-posinset="427" aria-setsize="-1"&gt;...&lt;/article&gt;
  &lt;article aria-posinset="428" aria-setsize="-1"&gt;...&lt;/article&gt;
  &lt;article aria-posinset="429" aria-setsize="-1"&gt;...&lt;/article&gt;
  ...
&lt;/section&gt;</pre>

<h2 id="Description" name="Description">説明</h2>

<div class="role-description" id="desc-feed">
<p>フィードは、スクロール可能な記事 (<code><a href="/ja/docs/Web/Accessibility/ARIA/Roles/Article_Role">article</a></code>) のリスト (<a href="/ja/docs/Web/Accessibility/ARIA/Roles/List_role">list</a>) のためのページ構造であり、スクロールすることで、リストの先頭または末尾に記事が追加される場合があります。 このリストは、ウェブページと支援技術との間の相互運用契約を確立するもので、支援技術のユーザーが記事を読み、記事を前後にジャンプし、読み取りモードで新しい記事を確実にロードできるように、スクロールのインタラクションを管理します。 例としては、RSS フィード、ニュースフィード、Facebook (フェイスブック) 、Instagram (インスタグラム) 、Twitter (ツイッター) などのソーシャルメディアフィード、さらには電子商取引ページ上の関連商品のリストなどがあります。 これらのストリームは有限か無限であり、ユーザーがスクロールするにつれてコンテンツをさらにロードします。 フィードパターンを実装することで、スクリーンリーダーは読み取りモードでフィードコンテンツを確実に読み取り、ロードをトリガーすることができます。</p>

<p>フィード (<code>feed</code>) は、コンテナ要素であり、その子は {{htmlelement("article")}} であるか、記事 (<code>article</code>) ロールを持ちます。 フィード内の各記事は、<code>tabindex</code> が 0 または -1 でフォーカス可能であるべきです。 記事またはその子孫要素にフォーカスが移ったときに、記事をスクロールして表示するべきです。 記事の追加がブラウザーのメインスレッドを占有する場合は、フィード自体に <code>aria-busy="true"</code> を設定し、処理が終了したら必ず <code>false</code> に戻すようにしてください。 そうしないと、ユーザーに更新が表示されない場合があります。</p>

<p>優れたユーザーエクスペリエンスを確保するため、フィード (<code>feed</code>) の途中で記事を挿入または削除しないようにし、ユーザーがフィードの末端に到達する前に新しい記事をロードし、キーボードユーザーがフィード内をナビゲートできるように記事間でフォーカスを移動するためのキーボードコマンドを提供します。 下記のキーボードインタラクションを参照してください。</p>

<p>記事の数がわかっている場合は、記事自体に <code>aria-setsize</code> を設定してください。 ただし、総数が非常に大きい場合、不明確な場合、または頻繁に変わる場合は、<code>aria-setsize="-1"</code> を設定してフィードのサイズがわからないことを示します。</p>

<p>フィードパターンのもう1つの特徴は、斜め読みです。 フィード内の記事には、<code>aria-label</code> によるアクセス可能な名前と <code>aria-describeby</code> による説明の両方を含めることで、記事をナビゲートするときに、ラベルの後にどの要素を話すべきかをスクリーンリーダーに提案することができます。 タイトルと主要コンテンツを提供する記事内の要素を特定することで、支援技術は、ユーザが記事から記事へとジャンプし、読みたい記事を効率的に見分けることを可能にする機能を提供できます。</p>

<p>フィードパターンは、ウェブページと支援技術の間に次の相互運用性に関する合意を確立することによって、信頼できる支援技術の読み取りモードでのインタラクションを可能にします。</p>

<ol>
 <li>フィードのコンテキストでは、ウェブページのコードは次の責任を負います。
  <ul>
   <li>どの記事に DOM フォーカスが含まれているかに基づいて、コンテンツを適切に視覚的にスクロールします。</li>
   <li>どの記事に DOM フォーカスが含まれているかに基づいて、フィード記事をロードまたは削除します。</li>
  </ul>
 </li>
 <li>フィードのコンテキストでは、読み取りモードを持つ支援技術は次の責任を負います。
  <ul>
   <li>記事要素またはその子孫の1つに DOM フォーカスがあることを保証することで、どの記事に読み取りカーソルがあるかを示します。</li>
   <li>DOM フォーカスを次の記事および前の記事に移動するための読み取りモードキーを提供します。</li>
   <li>読み取りカーソルと DOM フォーカスをフィードの終わりより後ろとフィードの始まりより前に移動するための読み取りモードキーを提供します。</li>
  </ul>
 </li>
</ol>

<h3 id="Keyboard_Interaction" name="Keyboard_Interaction">キーボードインタラクション</h3>

<p>フォーカスがフィード内にある場合は、次のような、または同様のインターフェイスをサポートすることをお勧めします。</p>

<ul>
 <li><kbd>Page Down</kbd>: 次の記事にフォーカスを移動します。</li>
 <li><kbd>Page Up</kbd>: 前の記事にフォーカスを移動します。</li>
 <li><kbd>Control + End</kbd>: フィードの後方で最初にフォーカス可能な要素にフォーカスを移動します。</li>
 <li><kbd>Control + Home</kbd>: フィードの前方で最初にフォーカス可能な要素にフォーカスを移動します。</li>
</ul>

<p>ブログ投稿のフィード内のコメントフィードなど、フィードがフィード内にネストしている場合、慣例では、<kbd>Tab</kbd> キーでネストしているフィードにタブ移動で入り、「外側の」記事からその記事内にネストしているフィードの最初の項目にナビゲートするための <kbd>Alt + Page Down</kbd> などの別のキーを提供します。 ネストしているフィードとメインフィードの間をナビゲートするには、<kbd>Control + End</kbd> で内側のフィードから外側のフィードの次の記事にフォーカスを移動します。</p>

<h3 id="WAI-ARIA_Roles_States_and_Properties" name="WAI-ARIA_Roles_States_and_Properties">関連する <abbr title="Accessible Rich Internet Applications">WAI-ARIA</abbr> のロール、ステート、プロパティ</h3>

<dl>
 <dt>aria-label</dt>
 <dd>フィードに目に見えるタイトルがない場合、フィード (<code>feed</code>) 要素は <code><a class="property-reference" href="https://w3c.github.io/aria/#aria-label">aria-label</a></code> で指定されたラベルを持ちます。 もしそうしている場合は、<code>aria-labelledby</code> を参照してください。</dd>
 <dt>aria-labelledby</dt>
 <dd>フィードに目に見えるタイトルがある場合、フィード (<code>feed</code>) 要素はタイトルを含む要素を参照する <code><a class="property-reference" href="https://w3c.github.io/aria/#aria-labelledby">aria-labelledby</a></code> を持ちます。 そうでない場合は、<code>aria-label</code> を追加してください。</dd>
 <dt>aria-busy</dt>
 <dd>記事をフィード (<code>feed</code>) に追加または削除しているときなど、忙しい場合は、更新操作中に <code><a class="state-reference" href="https://w3c.github.io/aria/#aria-busy">aria-busy=</a>"true"</code> を設定します。 操作が完了したら、必ず  <code>false</code> にリセットしてください。 そうしないと、変更結果を見ることができないかもしれません。</dd>
 <dt>article</dt>
 <dd>フィード内のコンテンツの各セクションは、{{htmlelement("article")}} または記事 (<code><a href="/ja/docs/Web/Accessibility/ARIA/Roles/Article_Role">article</a></code>) ロールを持つ要素に含まれているべきです。 各記事 (<code>article</code>) は、その記事のタイトルまたは識別ラベルとしての機能を果たすその他の子を参照する <code><a class="property-reference" href="https://w3c.github.io/aria/#aria-labelledby">aria-labelledby</a></code> を持つべきです。 各記事は、好ましくは、その記事の主要コンテンツとしての機能を果たす記事内の１つ以上の要素を参照する <code><a class="property-reference" href="https://w3c.github.io/aria/#aria-describedby">aria-describedby</a></code> を持つべきです。 各記事 (<code>article</code>) 要素は、フィード内の位置を表す値に設定された <code><a class="property-reference" href="https://w3c.github.io/aria/#aria-posinset">aria-posinset</a></code> と、ロード済みの記事の総数またはフィード内の総数を表す値のどちらかに設定された <code><a class="property-reference" href="https://w3c.github.io/aria/#aria-setsize">aria-setsize</a></code> を持ちます。 それは、どちらの値がユーザーにとってより役立つかによって異なります。 フィード内の総数がわからない場合は、<code>aria-setsize="-1"</code> を設定してください。</dd>
</dl>
</div>

<h3 id="Required_JavaScript_features" name="Required_JavaScript_features">必要な JavaScript 機能</h3>

<p>なし (任意の属性が必要とする場合を除く。 例えば、必要に応じて更新操作中に <code>aria-busy</code> を <code>true</code> に設定し、完了したら <code>false</code> に設定します。)</p>

<h2 id="Examples" name="Examples">例</h2>

<p><a href="https://w3c.github.io/aria-practices/examples/feed/feed.html">フィードパターンの実装例</a> (英語)</p>

<h2 id="Specifications" name="Specifications">仕様</h2>

<table class="standard-table">
 <tbody>
  <tr>
   <th scope="col">仕様</th>
   <th scope="col">状態</th>
  </tr>
  <tr>
   <td>{{SpecName("ARIA","#feed","feed")}}</td>
   <td>{{Spec2('ARIA')}}</td>
  </tr>
 </tbody>
</table>

<h2 id="Screen_reader_support" name="Screen_reader_support">スクリーンリーダーのサポート</h2>

<p>Coming soon</p>

<h2 id="See_also" name="See_also">関連情報</h2>

<ul>
 <li>HTML {{htmlelement("article")}} 要素</li>
 <li><a href="/ja/docs/Web/HTML/Element/ul">HTML のリスト</a></li>
 <li><a href="/ja/docs/Web/Accessibility/ARIA/Roles/Article_Role">ARIA: article ロール</a></li>
 <li><a href="/ja/docs/Web/Accessibility/ARIA/Roles/List_role">ARIA: list ロール</a></li>
 <li><cite><a href="https://www.w3.org/TR/wai-aria-practices-1.1/#feed"><abbr title="Accessible Rich Internet Applications">WAI-ARIA</abbr> Authoring Practices</a></cite> — フィードデザインパターンの実装に関する詳細。 (英語)</li>
</ul>


<section id="Quick_links">
    <ol>
        <li><a href="/ja/docs/Web/Accessibility/ARIA/Roles"><strong>WAI-ARIA ロール</strong></a>{{ListSubpagesForSidebar("/ja/docs/Web/Accessibility/ARIA/Roles")}}</li>
    </ol>
</section>
