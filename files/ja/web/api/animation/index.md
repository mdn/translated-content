---
title: Animation
slug: Web/API/Animation
translation_of: Web/API/Animation
---
<div>{{ APIRef("ウェブアニメーション") }}{{SeeCompatTable}}</div>

<p><a href="/ja/docs/Web/API/Web_Animations_API">ウェブアニメーション API</a><strong> </strong>における<strong> <code>Animation</code></strong> インターフェースは単一のアニメーションプレーヤーを表し、アニメーションノードやソースに対する再生制御やタイムラインを提供します。</p>

<h2 id="コンストラクタ">コンストラクタ</h2>

<dl>
 <dt>{{domxref("Animation.Animation()", "Animation()")}}</dt>
 <dd>新たに <code>Animation</code> オブジェクトのインスタンスを生成します。</dd>
</dl>

<h2 id="プロパティ">プロパティ</h2>

<dl>
 <dt>{{domxref("Animation.currentTime")}}</dt>
 <dd>再生中か停止中かに関わらずアニメーションの現在時間をミリ秒で表します。もしアニメーションに {{domxref("AnimationTimeline", "timeline")}} が無い、またはアニメーションが有効では無かったりまだ再生させていない場合、この値は <code>null</code> となります。</dd>
</dl>

<dl>
 <dt>{{domxref("Animation.effect")}}</dt>
 <dd>対象のアニメーションに紐付いた {{domxref("AnimationEffectReadOnly")}} の取得および設定を行います。このプロパティ値は通常 {{domxref("KeyframeEffect")}} オブジェクトになります。</dd>
 <dt>{{domxref("Animation.finished")}} {{readOnlyInline}}</dt>
 <dd>対象アニメーションの終了時に Promise を返します。</dd>
</dl>

<dl>
 <dt>{{domxref("Animation.id")}}</dt>
 <dd>アニメーションを識別するための <code>String</code> の取得および設定を行います。</dd>
 <dt>{{domxref("Animation.pending")}} {{readonlyinline}}</dt>
 <dd>アニメーションが再生の初期化や再生停止といった非同期処理のため現在待ち状態にあるかどうかを示します。</dd>
 <dt>{{domxref("Animation.playState")}} {{readOnlyInline}}</dt>
 <dd>アニメーションの再生状況を示す列挙型の値を返します。</dd>
</dl>

<dl>
 <dt>{{domxref("Animation.playbackRate")}}</dt>
 <dd>アニメーションの再生速度の取得および設定をします。</dd>
</dl>

<dl>
 <dt>{{domxref("Animation.ready")}} {{readOnlyInline}}</dt>
 <dd>対象アニメーションの再生準備ができた時点で Promise を返します。</dd>
</dl>

<dl>
 <dt>{{domxref("Animation.startTime")}}</dt>
 <dd>アニメーションが再生される所定時間の取得および設定を行います。</dd>
</dl>

<dl>
 <dt>{{domxref("Animation.timeline")}}</dt>
 <dd>対象のアニメーションに紐づいた {{domxref("AnimationTimeline", "timeline")}} の取得および設定を行います。</dd>
</dl>

<h3 id="イベントハンドラ">イベントハンドラ</h3>

<dl>
 <dt>{{domxref("Animation.oncancel")}}</dt>
 <dd><code>cancel</code> イベントのイベントハンドラーの取得および設定を行います。</dd>
 <dt>{{domxref("Animation.onfinish")}}</dt>
 <dd><code>finish</code> イベントのイベントハンドラーの取得および設定を行います。</dd>
</dl>

<h2 id="メソッド">メソッド</h2>

<dl>
 <dt>{{domxref("Animation.cancel()")}}</dt>
 <dd>対象アニメーションによる全ての {{domxref("KeyframeEffect", "keyframeEffects")}} を消去し、再生を中断します。</dd>
</dl>

<dl>
 <dt>{{domxref("Animation.finish()")}}</dt>
 <dd>アニメーションが通常再生中の場合は終了を、逆再生中の場合は開始時点を設定します。</dd>
</dl>

<dl>
 <dt>{{domxref("Animation.pause()")}}</dt>
 <dd>再生中のアニメーションを一時停止します。</dd>
</dl>

<dl>
 <dt>{{domxref("Animation.play()")}}</dt>
 <dd>アニメーションを再生もしくは再開します。既に終了しているアニメーションについては再度再生を行います。</dd>
</dl>

<dl>
 <dt>{{domxref("Animation.reverse()")}}</dt>
 <dd>アニメーションを逆再生し、開始時点で終了します。アニメーションが終了しているまたは未再生の場合は終わりから最初まで再生します。</dd>
 <dt>{{domxref("Animation.updatePlaybackRate()")}}</dt>
 <dd>対象アニメーション再生位置を同期後、アニメーションの再生速度を設定します。</dd>
</dl>

<h2 id="仕様">仕様</h2>

<table class="standard-table">
 <tbody>
  <tr>
   <th scope="col">仕様</th>
   <th scope="col">状態</th>
   <th scope="col">コメント</th>
  </tr>
  <tr>
   <td>{{SpecName("Web Animations", "#the-animation-interface", "Animation")}}</td>
   <td>{{Spec2("Web Animations")}}</td>
   <td>初期定義</td>
  </tr>
 </tbody>
</table>

<h2 id="ブラウザ実装状況">ブラウザ実装状況</h2>



<p>{{Compat("api.Animation")}}</p>
