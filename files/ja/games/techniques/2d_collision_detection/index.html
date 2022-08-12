---
title: 2D 衝突検出
slug: Games/Techniques/2D_collision_detection
tags:
  - 2D
  - Games
  - JavaScript
  - collision detection
translation_of: Games/Techniques/2D_collision_detection
---
<div>{{GamesSidebar}}</div><div>{{IncludeSubnav("/ja/docs/Games")}}</div>

<div class="summary">
<p>2D ゲームの衝突検出アルゴリズムは、衝突するものの形 (例 矩形と矩形、矩形と円、円と円) に依存します。一般的には、"ヒットボックス"として知られる、実体を囲むシンプルな汎用形状を持って、衝突がピクセルの完璧なものでなくても、十分良いものに見えるし、複数の実体でもパフォーマンスが保てるでしょう。この記事では、2Dゲームの衝突検出に使われる頻出テクニックをレビューします。</p>
</div>

<h2 id="座標軸に沿ったバウンディングボックス">座標軸に沿ったバウンディングボックス</h2>

<p>One of the simpler forms of collision detection is between two rectangles that are axis aligned — meaning no rotation. The algorithm works by ensuring there is no gap between any of the 4 sides of the rectangles. Any gap means a collision does not exist.</p>

<pre class="brush: js">var rect1 = {x: 5, y: 5, width: 50, height: 50}
var rect2 = {x: 20, y: 10, width: 10, height: 10}

if (rect1.x &lt; rect2.x + rect2.width &amp;&amp;
   rect1.x + rect1.width &gt; rect2.x &amp;&amp;
   rect1.y &lt; rect2.y + rect2.height &amp;&amp;
   rect1.height + rect1.y &gt; rect2.y) {
    // collision detected!
}

// filling in the values =&gt;

if (5 &lt; 30 &amp;&amp;
    55 &gt; 20 &amp;&amp;
    5 &lt; 20 &amp;&amp;
    55 &gt; 10) {
    // collision detected!
}</pre>

<div class="note">
<p><strong>Note</strong>: You can see a <a href="http://jsfiddle.net/knam8/">live example of Axis-Aligned Bounding Box collision detection</a> on jsFiddle, to illustrate how this code would work in practice.</p>
</div>

<h2 id="円形衝突">円形衝突</h2>

<p>Another simple shape for collision detection is between two circles. This algorithm works by taking the centre points of the two circles and ensuring the distance between the centre points are less than the two radii added together.</p>

<pre class="brush: js">var circle1 = {radius: 20, x: 5, y: 5};
var circle2 = {radius: 12, x: 10, y: 5};

var dx = circle1.x - circle2.x;
var dy = circle1.y - circle2.y;
var distance = Math.sqrt(dx * dx + dy * dy);

if (distance &lt; circle1.radius + circle2.radius) {
    // collision detected!
}</pre>

<div class="note">
<p><strong>Note</strong>: You can see a <a href="http://jsfiddle.net/gQ3hD/2/">live example of Circle collision detection</a> on jsFiddle, to illustrate how this code would work in practice.</p>
</div>

<h2 id="Separating_Axis_Theorem">Separating Axis Theorem</h2>

<p>This is a collision algorithm that can detect a collision between any two *convex* polygons. It's more complicated to implement than the above methods but is more powerful. The complexity of an algorithm like this means we will need to consider performance optimization, covered in the next section.</p>

<p>Implementing SAT is out of scope for this page so see the recommended tutorials below:</p>

<ol>
 <li><a href="http://www.sevenson.com.au/actionscript/sat/">Separating Axis Theorem (SAT) explanation</a></li>
 <li><a href="http://www.metanetsoftware.com/technique/tutorialA.html">Collision detection and response</a></li>
 <li><a href="http://gamedevelopment.tutsplus.com/tutorials/collision-detection-using-the-separating-axis-theorem--gamedev-169">Collision detection Using the Separating Axis Theorem</a></li>
 <li><a href="http://www.codezealot.org/archives/55">SAT (Separating Axis Theorem)</a></li>
 <li><a href="http://rocketmandevelopment.com/blog/separation-of-axis-theorem-for-collision-detection/">Separation of Axis Theorem (SAT) for Collision Detection</a></li>
</ol>

<h2 id="衝突のパフォーマンス">衝突のパフォーマンス</h2>

<p>While some of these algorithms for collision detection are simple enough to calculate, it can be a waste of cycles to test *every* entity with every other entity. Usually games will split collision into two phases, broad and narrow.</p>

<h3 id="Broad_Phase">Broad Phase</h3>

<p>Broad phase should give you a list of entities that *could* be colliding. This can be implemented with a spacial data structure that will give you a rough idea of where the entity exists and what exist around it. Some examples of spacial data structures are Quad Trees, R-Trees or a Spacial Hashmap.</p>

<h3 id="Narrow_Phase">Narrow Phase</h3>

<p>When you have a small list of entities to check you will want to use a narrow phase algorithm (like the ones listed above) to provide a certain answer as to whether there is a collision or not.</p>
