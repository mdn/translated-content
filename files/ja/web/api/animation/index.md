---
title: Animation
slug: Web/API/Animation
l10n:
  sourceCommit: 8a10694edf44bde124fa8f18af65651855f632dc
---

{{ APIRef("Web Animations") }}

**`Animation`** は[ウェブアニメーション API](/ja/docs/Web/API/Web_Animations_API)のインターフェイスで、アニメーションプレイヤーを表し、アニメーションノードやソースに対する再生制御やタイムラインを提供します。

{{InheritanceDiagram}}

## コンストラクター

- {{domxref("Animation.Animation()", "Animation()")}}
  - : 新しい `Animation` オブジェクトのインスタンスを生成します。

## インスタンスプロパティ

- {{domxref("Animation.currentTime")}}
  - : このアニメーションの現在時刻の値で、ミリ秒単位です。再生中か停止中かは問いません。アニメーションに {{domxref("AnimationTimeline", "timeline")}} がなかったり、無効であったり、まだ再生されていなかったりした場合は、この値は `null` になります。
- {{domxref("Animation.effect")}}
  - : このアニメーションに関連付けられた {{domxref("AnimationEffect")}} を取得または設定します。これはふつう、 {{domxref("KeyframeEffect")}} オブジェクトになります。
- {{domxref("Animation.finished")}} {{ReadOnlyInline}}
  - : このアニメーションにおいて現在完了しているプロミスを返します。
- {{domxref("Animation.id")}}
  - : このアニメーションを識別するための `String` を取得または設定します。
- {{domxref("Animation.overallProgress")}} {{ReadOnlyInline}}
  - : `0` 以上 `1` 以下の数値で、このアニメーションの最終状態に向かう全体の中の進捗を示します。
- {{domxref("Animation.pending")}} {{ReadOnlyInline}}
  - : このアニメーションが現在、再生待ちや再生中の一時停止などの非同期操作を待機しているかどうかを示します。
- {{domxref("Animation.playState")}} {{ReadOnlyInline}}
  - : 列挙型の値で、アニメーションの再生状態を示す列挙値を返します。
- {{domxref("Animation.playbackRate")}}
  - : このアニメーションの再生速度を取得または設定します。
- {{domxref("Animation.ready")}} {{ReadOnlyInline}}
  - : このアニメーションの準備ができているかどうかを示すプロミスを返します。
- {{domxref("Animation.replaceState")}} {{ReadOnlyInline}}
  - : アニメーションがアクティブか、他のアニメーションに置き換えられて自動的に除去されたか、 {{domxref("Animation.persist()")}} の呼び出しによって明示的に維持されているかを示します。
- {{domxref("Animation.startTime")}}
  - : アニメーションの再生が始まる予定の時刻を取得または設定します。
- {{domxref("Animation.timeline")}}
  - : このアニメーションに関連付けられる {{domxref("AnimationTimeline", "timeline")}} を取得または設定します。

## インスタンスメソッド

- {{domxref("Animation.cancel()")}}
  - : このアニメーションで発生したすべての {{domxref("KeyframeEffect", "keyframeEffects")}} を消去し、再生を中止します。
- {{domxref("Animation.commitStyles()")}}
  - : アニメーションの現在のスタイル状態を、そのアニメーションが削除された後でも、アニメーションしている要素にコミットします。これは、アニメーションの現在のスタイル状態を `style` 属性内のプロパティの形で動作している要素に書き込むことで行われます。
- {{domxref("Animation.finish()")}}
  - : 再生位置をアニメーションのどちらかの端まで移動します。アニメーションが通常再生中か逆再生中かによって変わります。
- {{domxref("Animation.pause()")}}
  - : アニメーションの再生を一時停止します。
- {{domxref("Animation.persist()")}}
  - : アニメーションを明示的に維持し、別のアニメーションに置き換わったときに[アニメーションの自動削除](/ja/docs/Web/API/Web_Animations_API/Using_the_Web_Animations_API#満了したアニメーションの自動削除)が行われることを防ぎます。
- {{domxref("Animation.play()")}}
  - : アニメーションの再生を開始または再開します。また、前回終了したアニメーションを再度開始します。
- {{domxref("Animation.reverse()")}}
  - : 再生方向を反転させ、アニメーションの開始位置で停止させます。アニメーションが終了しているか未再生の場合は、末尾から先頭に向けて再生されます。
- {{domxref("Animation.updatePlaybackRate()")}}
  - : アニメーションの再生位置を同期させた後の速度を設定します。

## イベント

- {{domxref("Animation.cancel_event", "cancel")}}
  - : {{domxref("Animation.cancel()")}} メソッドが呼び出されるか、アニメーションの再生状態が他の状態から `"idle"` へ遷移した場合に発行されます。
- {{domxref("Animation.finish_event", "finish")}}
  - : アニメーションの再生が終了した時に発行されます。
- {{domxref("animation.remove_event", "remove")}}
  - : アニメーションがブラウザーによって[自動的に除去された](/ja/docs/Web/API/Web_Animations_API/Using_the_Web_Animations_API#満了したアニメーションの自動削除)際に発生します。

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [ウェブアニメーション API](/ja/docs/Web/API/Web_Animations_API)
