---
title: Vibration API
slug: Web/API/Vibration_API
tags:
  - API
  - Beginner
  - Mobile
  - Vibration
translation_of: Web/API/Vibration_API
original_slug: Web/Guide/API/Vibration
---
<div>{{DefaultAPISidebar("Vibration API")}}</div>

<p class="summary">現代のモバイル端末は、たいていバイブレーションハードウェアを内蔵しており、ソフトウェアのコードが端末を振動させることによりユーザーに物理的なフィードバックを与えることができます。 <strong>Vibration API</strong> はウェブアプリに、このハードウェアが存在すればアクセスすることができるようにし、端末が対応していない場合は何もしません。</p>

<h2 id="Describing_vibrations" name="Describing_vibrations">バイブレーションの表現</h2>

<p>バイブレーションはオン・オフのパルスのパターンで表され、様々な長さになることがあります。パターンは振動するミリ秒数を示す整数 1 つ、あるいはバイブレーションと休止時間のパターンを示す整数の配列で構成します。バイブレーションは {{domxref("Navigator.vibrate()")}} という単一のメソッドで制御します。</p>

<h3 id="A_single_vibration" name="A_single_vibration">1 回のバイブレーション</h3>

<p>1 個の値、または 1 個だけの値で構成される配列を指定することにより、バイブレーションハードウェアを 1 回振動させることができます:</p>

<pre class="brush:js">window.navigator.vibrate(200);
window.navigator.vibrate([200]);
</pre>

<p>どちらの例も、デバイスを 200 ミリ秒間振動させます。</p>

<h3 id="Vibration_patterns" name="Vibration_patterns">バイブレーションパターン</h3>

<p>値の配列は、デバイスが振動する時間と振動しない時間を交互に示します。配列内の各値は整数値に変換されて、デバイスを振動させるミリ秒数および振動させないミリ秒数として交互に解釈されます。例えば以下のようにします。</p>

<pre class="brush: js">window.navigator.vibrate([200, 100, 200]);
</pre>

<p>これはデバイスを 200 ミリ秒間振動させて、その後再び 200 ミリ秒間振動させる前に 100 ミリ秒間振動を止めます。</p>

<p>バイブレーション/休止のペアは好きなだけ多く指定でき、またエントリ数は偶数・奇数のどちらでも可能です。各バイブレーション時間の終端で自動的にバイブレーションを止めますので、休止時間を最後のエントリとして与えなくてもよいことは注目に値します。</p>

<h3 id="Canceling_existing_vibrations" name="Canceling_existing_vibrations">実行中のバイブレーションを取り消す</h3>

<p>値 <code>0</code>、空の配列、あるいはすべての値が <code>0</code> の配列 を指定して {{domxref("Navigator.vibrate()")}} を呼び出すと、現在進行中のバイブレーションパターンを取り消します。</p>

<h3 id="Continued_vibrations" name="Continued_vibrations">継続的なバイブレーション</h3>

<p>基本的な <code>setInterval</code> および <code>clearInterval</code> のアクションにより、継続的なバイブレーションを生成できます:</p>

<pre class="brush: js">var vibrateInterval;

// 渡されたレベルでバイブレーションを開始
function startVibrate(duration) {
    navigator.vibrate(duration);
}

// バイブレーションを停止
function stopVibrate() {
    // インターバルをクリアして継続的なバイブレーションを停止
    if(vibrateInterval) clearInterval(vibrateInterval);
    navigator.vibrate(0);
}

// 与えられた時間とインターバルによる継続的なバイブレーションを開始
// 数値が与えられるものとする
function startPersistentVibrate(duration, interval) {
    vibrateInterval = setInterval(function() {
        startVibrate(duration);
    }, interval);
}</pre>

<p>当然ながら、上記のコードスニペットは配列によるバイブレーションを考慮していません。配列に基づく継続的なバイブレーションでは、配列のアイテムの総数を計算して、その値を基にしてインターバル (おそらく、遅延時間を付加して) を作成することが必要でしょう。</p>

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
   <td>{{SpecName("Vibration API")}}</td>
   <td>{{Spec2("Vibration API")}}</td>
   <td>リンク先は最新の編集者草稿です。 W3C 版は勧告になりました。</td>
  </tr>
 </tbody>
</table>

<h2 id="Browser_compatibility" name="Browser_compatibility">ブラウザーの互換性</h2>

<p>{{Compat("api.Navigator.vibrate")}}</p>

<h2 id="See_also" name="See_also">関連情報</h2>

<ul>
 <li>{{DOMxRef("Navigator.vibrate()")}}</li>
</ul>
