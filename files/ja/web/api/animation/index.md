---
title: Animation
slug: Web/API/Animation
---

{{ APIRef("Web Animations") }}

**`Animation`** は[ウェブアニメーション API](/ja/docs/Web/API/Web_Animations_API)のインターフェイスで、アニメーションプレイヤーを表し、アニメーションノードやソースに対する再生制御やタイムラインを提供します。

{{InheritanceDiagram}}

## コンストラクター

- {{domxref("Animation.Animation()", "Animation()")}}
  - : 新しい `Animation` オブジェクトのインスタンスを生成します。

## プロパティ

- {{domxref("Animation.currentTime")}}
  - : このアニメーションの現在時刻の値で、ミリ秒単位です。再生中か停止中かは問いません。アニメーションに {{domxref("AnimationTimeline", "timeline")}} がなかったり、無効であったり、まだ再生されていなかったりした場合は、この値は `null` になります。
- {{domxref("Animation.effect")}}
  - : このアニメーションに関連付けられた {{domxref("AnimationEffect")}} を取得または設定します。これはふつう、 {{domxref("KeyframeEffect")}} オブジェクトになります。
- {{domxref("Animation.finished")}} {{readOnlyInline}}
  - : このアニメーションにおいて現在完了しているプロミスを返します。
- {{domxref("Animation.id")}}
  - : このアニメーションを識別するための `String` を取得または設定します。
- {{domxref("Animation.pending")}} {{readonlyinline}}
  - : このアニメーションが現在、再生待ちや再生中の一時停止などの非同期操作を待機しているかどうかを示します。
- {{domxref("Animation.playState")}} {{readOnlyInline}}
  - : 列挙型の値で、アニメーションの再生状態を示す列挙値を返します。
- {{domxref("Animation.playbackRate")}}
  - : このアニメーションの再生速度を取得または設定します。
- {{domxref("Animation.ready")}} {{readOnlyInline}}
  - : このアニメーションの準備ができているかどうかを示すプロミスを返します。
- {{domxref("animation.replaceState")}}
  - : アニメーションの置換状態を返します。 `active` ならばアニメーションが置き換えられたこと、 `persisted` ならば {{domxref("Animation.persist()")}} が呼び出されたことを示します。
- {{domxref("Animation.startTime")}}
  - : アニメーションの再生が始まる予定の時刻を取得または設定します。
- {{domxref("Animation.timeline")}}
  - : このアニメーションに関連付けられる {{domxref("AnimationTimeline", "timeline")}} を取得または設定します。

## メソッド

- {{domxref("Animation.cancel()")}}
  - : このアニメーションで発生したすべての {{domxref("KeyframeEffect", "keyframeEffects")}} を消去し、再生を中止します。
- {{domxref("animation.commitStyles()")}}
  - : アニメーションの終了時のスタイル状態を、そのアニメーションが削除された後でも、アニメーションしている要素にコミットします。これは、アニメーション終了時のスタイル状態を `style` 属性内のプロパティの形で動作している要素に書き込むことで行われます。
- {{domxref("Animation.finish()")}}
  - : 再生位置をアニメーションのどちらかの端まで移動します。アニメーションが通常再生中か逆再生中かによって変わります。
- {{domxref("Animation.pause()")}}
  - : アニメーションの再生を一時停止します。
- {{domxref("animation.persist()")}}
  - : ブラウザーの[アニメーションの自動削除](#アニメーションの自動削除)の動作により、アニメーションが削除された場合、明示的にアニメーションを持続させます。
- {{domxref("Animation.play()")}}
  - : アニメーションの再生を開始または再開します。また、前回終了したアニメーションを再度開始します。
- {{domxref("Animation.reverse()")}}
  - : 再生方向を反転させ、アニメーションの開始位置で停止させます。アニメーションが終了しているか未再生の場合は、末尾から先頭に向けて再生されます。
- {{domxref("Animation.updatePlaybackRate()")}}
  - : アニメーションの再生位置を同期させた後の速度を設定します。

## イベント

- {{domxref("Animation.cancel_event", "cancel")}}
  - : {{domxref("Animation.cancel()")}} メソッドが呼び出されるか、アニメーションの再生状態が他の状態から `"idle"` へ遷移した場合に発行されます。
- {{domxref("Animation.finish_event" , "finish")}}
  - : アニメーションの再生が終了した時に発行されます。
- {{domxref("animation.remove_event", "remove")}}
  - : アニメーションが取り除かれた時 (すなわち、 `active` 置換状態に遷移した時）に発行されます。

## アニメーションの自動削除

同じ要素に多数のアニメーションを起動させることが可能です。それらが不定である場合（つまり前方充填）、巨大なアニメーションリストとなり、メモリリークを発生させる可能性があります。このため、最近のブラウザーは Web Animations 仕様の一部を実装しており、開発者が明示的に指定しない限り、前方充填アニメーションのオーバーライドを自動的に削除しています。

このことは、簡単な[不定アニメーションの置き換えデモ](https://mdn.github.io/dom-examples/web-animations-api/replace-indefinite-animations.html)で実際に見ることができます。関連する JavaScript の機能は以下の通りです。

- {{domxref("animation.commitStyles()")}} により、アニメーションされる要素にアニメーションの終了時のスタイル状態を、そのアニメーションが削除された後でも適用されるようにコミットします。
- {{domxref("animation/remove_event", "remove")}} イベントは {{domxref("Animation")}} インターフェイス上で、アニメーションを削除した（すなわち置換状態が `active` になった）ときに発行されます。
- {{domxref("animation.persist()")}} はアニメーションを明示的に保持させたい場合に使用します。
- {{domxref("animation.replaceState")}} はアニメーションの置換状態を返します。アニメーションが削除された場合は `active` となり、{{domxref("Animation.persist", "persist()")}} が呼び出された場合は `persisted` となります。

## アクセシビリティの考慮

注意欠陥多動性障碍（ADHD）などの認知能力に不安のある方にとって、まばたきや点滅するアニメーションは問題となることがあります。さらに、ある種の動作は、前庭障害、てんかん、片頭痛、スコトピック過敏症の引き金になることがあります。

アニメーションを一時停止したり、無効にしたりするメカニズムを提供したり、[動作縮減メディアクエリー](/ja/docs/Web/CSS/@media/prefers-reduced-motion)を使って、アニメーションなしの操作を希望するユーザーのために補完的な操作を提供することを検討してください。

- [Designing Safer Web Animation For Motion Sensitivity · An A List Apart Article](https://alistapart.com/article/designing-safer-web-animation-for-motion-sensitivity)
- [An Introduction to the Reduced Motion Media Query | CSS-Tricks](https://css-tricks.com/introduction-reduced-motion-media-query/)
- [Responsive Design for Motion | WebKit](https://webkit.org/blog/7551/responsive-design-for-motion/)
- [MDN WCAG を理解する　ガイドライン 2.2 の説明](/ja/docs/Web/Accessibility/Understanding_WCAG/Operable#guideline_2.2_%e2%80%94_enough_time_provide_users_enough_time_to_read_and_use_content)
- [Understanding Success Criterion 2.2.2 | W3C Understanding WCAG 2.0](https://www.w3.org/TR/UNDERSTANDING-WCAG20/time-limits-pause.html)

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [ウェブアニメーション API](/ja/docs/Web/API/Web_Animations_API)
