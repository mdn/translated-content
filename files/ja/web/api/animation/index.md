---
title: Animation
slug: Web/API/Animation
l10n:
  sourceCommit: b72abe9565faba1aaa9230fb857f4c6211dc4434
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
- {{domxref("Animation.finish_event" , "finish")}}
  - : アニメーションの再生が終了した時に発行されます。
- {{domxref("animation.remove_event", "remove")}}
  - : アニメーションが取り除かれた時 (すなわち、 `active` 置換状態に遷移した時）に発行されます。

## アクセシビリティの考慮

注意欠陥多動性障碍（ADHD）などの認知能力に不安のある方にとって、まばたきや点滅するアニメーションは問題となることがあります。さらに、ある種の動作は、前庭障害、てんかん、片頭痛、スコトピック過敏症の引き金になることがあります。

アニメーションを一時停止したり、無効にしたりするメカニズムを提供したり、[動作縮減メディアクエリー](/ja/docs/Web/CSS/Reference/At-rules/@media/prefers-reduced-motion)（または同等の[ユーザーエージェントクライアントヒント](/ja/docs/Web/HTTP/Guides/Client_hints#ユーザーエージェントクライアントヒント) {{HTTPHeader("Sec-CH-Prefers-Reduced-Motion")}})）を使って、アニメーションなしの操作を希望するユーザーのために補完的な操作を提供することを検討してください。

- [Designing Safer Web Animation For Motion Sensitivity · An A List Apart Article](https://alistapart.com/article/designing-safer-web-animation-for-motion-sensitivity)
- [An Introduction to the Reduced Motion Media Query | CSS-Tricks](https://css-tricks.com/introduction-reduced-motion-media-query/)
- [Responsive Design for Motion | WebKit](https://webkit.org/blog/7551/responsive-design-for-motion/)
- [MDN WCAG を理解する　ガイドライン 2.2 の説明](/ja/docs/Web/Accessibility/Guides/Understanding_WCAG/Operable#guideline_2.2_%e2%80%94_enough_time_provide_users_enough_time_to_read_and_use_content)
- [Understanding Success Criterion 2.2.2 | W3C Understanding WCAG 2.0](https://www.w3.org/TR/UNDERSTANDING-WCAG20/time-limits-pause.html)

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [ウェブアニメーション API](/ja/docs/Web/API/Web_Animations_API)
