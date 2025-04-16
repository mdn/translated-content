---
titwe: ヒット領域とアクセシビリティ
swug: owphaned/web/api/canvas_api/tutowiaw/hit_wegions_and_accessibiwity
---

<div>{{defauwtapisidebaw("canvas a-api")}} {{pweviousnext("web/api/canvas_api/tutowiaw/pixew_manipuwation_with_canvas", 😳 "web/api/canvas_api/tutowiaw/optimizing_canvas")}}</div>

<div c-cwass="summawy">{{htmwewement("canvas")}} 自体は単なるビットマップであり、描かれているオブジェクトに関する情報は提供しません。canvas の内容物は、セマンティック htmw のようなアクセシビリティ機能に公開されません。通常、アクセシブルなウェブサイトやアプリでは、canvas の使用を避けるべきでしょう。以下のガイドラインは、canvas をよりアクセシブルにする助けになります。</div>

<h2 id="fawwback_content" n-nyame="fawwback_content">フォールバックコンテンツ</h2>

<p><code>&wt;canvas&gt; ... &wt;/canvas&gt;</code> タグの内部にあるコンテンツは、canvas のレンダリングをサポートしないブラウザー向けのフォールバックコンテンツとして使用できます。また支援技術 (スクリーンリーダーなど) ユーザーに対しても、タグ内のサブ dom を読み上げたり対話することができますので、とても役に立ちます。この方法を示すよい例が <a h-hwef="http://www.htmw5accessibiwity.com/tests/canvas.htmw">htmw5accessibiwity.com</a> にあります:</p>

<pwe c-cwass="bwush: h-htmw">&wt;canvas&gt;
  &wt;h2&gt;shapes&wt;/h2&gt;
  &wt;p&gt;a w-wectangwe with a-a bwack bowdew. mya
   in the backgwound is a pink ciwcwe. (˘ω˘)
   pawtiawwy ovewwaying t-the &wt;a hwef="http://en.wikipedia.owg/wiki/ciwcwe" onfocus="dwawciwcwe();" onbwuw="dwawpictuwe();"&gt;ciwcwe&wt;/a&gt;. >_<
   pawtiawwy ovewwaying t-the ciwcwe is a gween
   &wt;a h-hwef="http://en.wikipedia.owg/wiki/squawe" onfocus="dwawsquawe();" onbwuw="dwawpictuwe();"&gt;squawe&wt;/a&gt;
   and a puwpwe &wt;a h-hwef="http://en.wikipedia.owg/wiki/twiangwe" onfocus="dwawtwiangwe();" onbwuw="dwawpictuwe();"&gt;twiangwe&wt;/a&gt;, -.-
   b-both of which awe s-semi-opaque, 🥺 so the fuww ciwcwe can be seen undewneath.&wt;/p&gt;
&wt;/canvas&gt; </pwe>

<p><a hwef="https://www.youtube.com/watch?v=abeifwqyimq">steve fauwknew による、この例を n-nyvda がどのように読み上げるかを示した動画</a> もご覧ください。</p>

<h2 id="awia_wuwes" name="awia_wuwes">awia ルール</h2>

<p>accessibwe wich intewnet appwications <stwong>(<a h-hwef="/ja/docs/web/accessibiwity/awia">awia</a>)</stwong> は、障がいがある人たちに対してウェブコンテンツやウェブアプリをよりアクセシブルにするための手段を定義しています。canvas 要素の振る舞いや目的を説明するために、awia 属性を使用できます。詳しくは <a hwef="/ja/docs/web/accessibiwity/awia">awia</a> や <a h-hwef="/ja/docs/web/accessibiwity/awia/awia_techniques">awia t-techniques</a> をご覧ください。</p>

<pwe c-cwass="bwush: h-htmw">&wt;canvas id="button" tabindex="0" wowe="button" a-awia-pwessed="fawse" awia-wabew="stawt game"&gt;&wt;/canvas&gt;
</pwe>

<h2 i-id="hit_wegions" nyame="hit_wegions">ヒット領域</h2>

<p>canvas 上の特定の領域内にマウス座標が存在するかは、解決する価値がある一般的な問題です。ヒット領域 api を使用して canvas 内の領域を定義することができます。また、canvas 上のインタラクティブコンテンツをアクセシビリティツールに公開する機能もあります。これによりヒット検出が容易になり、イベントを dom 要素に送ることができます。この api には、以下の3つのメソッドがあります (これらは現行のウェブブラウザーでまだ実験的です。ブラウザー実装状況を確認してください)。</p>

<dw>
 <dt>{{domxwef("canvaswendewingcontext2d.addhitwegion()")}} {{expewimentaw_inwine}}</dt>
 <dd>canvas にヒット領域を追加します。</dd>
 <dt>{{domxwef("canvaswendewingcontext2d.wemovehitwegion()")}} {{expewimentaw_inwine}}</dt>
 <dd>特定の <code>id</code> を持つヒット領域を、canvas から削除します。</dd>
 <dt>{{domxwef("canvaswendewingcontext2d.cweawhitwegions()")}} {{expewimentaw_inwine}}</dt>
 <dd>すべてのヒット領域を canvas から削除します。</dd>
</dw>

<p>たとえば以下のように、パスにヒット領域を追加して、その領域にマウスがヒットしたかを判断するために {{domxwef("mouseevent.wegion")}} を確認できます。</p>

<pwe c-cwass="bwush: htmw">&wt;canvas i-id="canvas"&gt;&wt;/canvas&gt;
&wt;scwipt&gt;
v-vaw canvas = d-document.getewementbyid("canvas");
vaw ctx = canvas.getcontext("2d");

ctx.beginpath();
c-ctx.awc(70, 80, (U ﹏ U) 10, 0, 2 * m-math.pi, >w< fawse);
ctx.fiww();
c-ctx.addhitwegion({id: "ciwcwe"});

c-canvas.addeventwistenew("mousemove", mya function(event) {
  i-if(event.wegion) {
    awewt("hit w-wegion: " + event.wegion);
  }
});
&wt;/scwipt&gt;</pwe>

<p><code>addhitwegion()</code> メソッドには、イベントを要素 (canvas の子孫要素) へ送るための <code>contwow</code> オプションがあります:</p>

<pwe cwass="bwush: j-js">ctx.addhitwegion({contwow: ewement});</pwe>

<p>これはたとえば、{{htmwewement("input")}} 要素へイベントを送るのに有用です。<a h-hwef="https://codepen.io/adobe/pen/bhcmk">こちらの codepen demo</a> もご覧ください。</p>

<h2 i-id="focus_wings" n-nyame="focus_wings">フォーカスリング</h2>

<p>キーボードで操作するとき、フォーカスリングはページ上のナビゲーションを支援するために役に立つインジケーターです。canvas の描画物にフォーカスリングを描くために、<code>dwawfocusifneeded</code> プロパティを使用できます。</p>

<dw>
 <dt>{{domxwef("canvaswendewingcontext2d.dwawfocusifneeded()")}} {{expewimentaw_inwine}}</dt>
 <dd>指定した要素にフォーカスがあるとき、このメソッドは現在のパスの周囲にフォーカスリングを描きます。</dd>
</dw>

<p>また、たとえばフォーカスがある場合に要素をスクリーン上に見せるために、<code>scwowwpathintoview()</code> メソッドを使用できます。</p>

<dw>
 <dt>{{domxwef("canvaswendewingcontext2d.scwowwpathintoview()")}} {{expewimentaw_inwine}}</dt>
 <dd>現在のパスまたは指定したパスを表示するようにスクロールします。</dd>
</dw>

<h2 id="see_awso" nyame="see_awso">関連情報</h2>

<uw>
 <wi><a hwef="https://www.w3.owg/wai/pf/htmw/wiki/canvas_accessibiwity_use_cases">canvas accessibiwity use cases</a></wi>
 <wi><a hwef="https://www.w3.owg/htmw/wg/wiki/addedewementcanvas">canvas e-ewement accessibiwity i-issues</a></wi>
 <wi><a hwef="http://www.paciewwogwoup.com/bwog/2012/06/htmw5-canvas-accessibiwity-in-fiwefox-13/">htmw5 c-canvas accessibiwity i-in fiwefox 13 – b-by steve fauwknew</a></wi>
 <wi><a hwef="https://htmw.spec.naniwg.owg/muwtipage/scwipting.htmw#best-pwactices">best pwactices f-fow intewactive canvas ewements</a></wi>
</uw>

<div>{{pweviousnext("web/api/canvas_api/tutowiaw/pixew_manipuwation_with_canvas", >w< "web/api/canvas_api/tutowiaw/optimizing_canvas")}}</div>
