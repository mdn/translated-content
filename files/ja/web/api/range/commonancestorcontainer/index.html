---
title: Range.commonAncestorContainer
slug: Web/API/Range/commonAncestorContainer
translation_of: Web/API/Range/commonAncestorContainer
---
<div>{{ApiRef("DOM")}}</div>

<div><code><strong>Range.commonAncestorContainer</strong></code> は読み込み専用のプロパティで、{{domxref("Range")}}の中の <a href="http://www.w3.org/TR/DOM-Level-2-Traversal-Range/ranges.html#Level-2-Range-Position-h3">境界点</a> で最も深いもしくはドキュメントツリーから最も遠い両方を含む {{domxref("Node")}} を返します。つまり、{{domxref("Range.startContainer")}} と {{domxref("Range.endContainer")}} 両方が同じノードを参照する場合は、このノードは<strong>共通の祖先コンテナ</strong>です。</div>



<div><code>Range</code> は連続している必要はなく、ノードを部分的に選択する場合もあり、これは <code>Range</code> を囲っている <code>Node</code> を見つけるときに便利な方法です。</div>



<div>これは読み取り専用プロパティです。 <code>Node</code> の共通祖先コンテナを変更するため、<code>Range</code> の開始位置と終了位置をセットするため {{domxref("Range.setStart()")}} と {{domxref("Range.setEnd()")}} のような利用可能な様々なメソッドを利用することを検討します。</div>

<h2 id="構文">構文</h2>

<pre class="syntaxbox notranslate"><em>rangeAncestor</em> = <em>range</em>.commonAncestorContainer;</pre>

<h2 id="使用例">使用例</h2>

<p>この例ではリスト上の {{Event("pointerup")}} イベントを取り扱うためイベントリスナーを作ります。このリスナーは選択したテキスト共通祖先を取得して、それらをハイライトするアニメーションを引き起こします。</p>

<h3 id="HTML">HTML</h3>

<pre class="brush: html notranslate">&lt;ul&gt;
  &lt;li&gt;Strings
    &lt;ul&gt;
      &lt;li&gt;Cello&lt;/li&gt;
      &lt;li&gt;Violin
        &lt;ul&gt;
          &lt;li&gt;First Chair&lt;/li&gt;
          &lt;li&gt;Second Chair&lt;/li&gt;
        &lt;/ul&gt;
      &lt;/li&gt;
    &lt;/ul&gt;
  &lt;/li&gt;
  &lt;li&gt;Woodwinds
    &lt;ul&gt;
      &lt;li&gt;Clarinet&lt;/li&gt;
      &lt;li&gt;Oboe&lt;/li&gt;
    &lt;/ul&gt;
  &lt;/li&gt;
&lt;/ul&gt;</pre>

<h3 id="CSS">CSS</h3>

<p>作成した以下の <code>.highlight</code> クラスはフェードするアウトラインを動かすためのCSS {{cssxref("@keyframes")}} のセットを使用します。</p>

<pre class="brush: css notranslate">.highlight {
  animation: highlight linear 1s;
}

@keyframes highlight {
  from { outline: 1px solid #f00f; }
  to   { outline: 1px solid #f000; }
}</pre>

<div class="hidden">
<pre class="brush: css notranslate">body {
  padding: 1px;
}</pre>
</div>

<h3 id="JavaScript">JavaScript</h3>

<pre class="brush: js notranslate">document.addEventListener('pointerup', e =&gt; {
  const selection = window.getSelection();

  if (selection.type === 'Range') {
    for (let i = 0; i &lt; selection.rangeCount; i++) {
      const range = selection.getRangeAt(i);
      playAnimation(range.commonAncestorContainer);
    }
  }
});

function playAnimation(el) {
  if (el.nodeType === Node.TEXT_NODE) {
    el = el.parentNode;
  }

  el.classList.remove('highlight');
  setTimeout(() =&gt; {
    el.classList.add('highlight');
  }, 0);
}</pre>

<h3 id="結果">結果</h3>

<p>{{EmbedLiveSample("Example", 700, 190)}}</p>

<h2 id="仕様">仕様</h2>

<table class="standard-table">
 <tbody>
  <tr>
   <th scope="col">仕様</th>
   <th scope="col">ステータス</th>
   <th scope="col">コメント</th>
  </tr>
  <tr>
   <td>{{SpecName('DOM WHATWG', '#dom-range-commonancestorcontainer', 'Range.commonAncestorContainer')}}</td>
   <td>{{Spec2('DOM WHATWG')}}</td>
   <td>変更なし</td>
  </tr>
  <tr>
   <td>{{SpecName('DOM2 Traversal_Range', 'ranges.html#Level-2-Range-attr-commonParent', 'Range.commonAncestorContainer')}}</td>
   <td>{{Spec2('DOM2 Traversal_Range')}}</td>
   <td>初期仕様</td>
  </tr>
 </tbody>
</table>

<h2 id="ブラウザの互換性">ブラウザの互換性</h2>



<p>{{Compat("api.Range.commonAncestorContainer")}}</p>

<h2 id="関連情報">関連情報</h2>

<ul>
 <li><a href="/ja/docs/DOM/DOM_Reference" title="/en-US/docs/DOM/DOM_Reference">The DOM interfaces index</a></li>
</ul>
