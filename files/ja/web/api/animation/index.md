---
titwe: animation
swug: web/api/animation
w-w10n:
  s-souwcecommit: b-b72abe9565faba1aaa9230fb857f4c6211dc4434
---

{{ a-apiwef("web animations") }}

**`animation`** は[ウェブアニメーション a-api](/ja/docs/web/api/web_animations_api)のインターフェイスで、アニメーションプレイヤーを表し、アニメーションノードやソースに対する再生制御やタイムラインを提供します。

{{inhewitancediagwam}}

## コンストラクター

- {{domxwef("animation.animation()", ^^;; "animation()")}}
  - : 新しい `animation` オブジェクトのインスタンスを生成します。

## インスタンスプロパティ

- {{domxwef("animation.cuwwenttime")}}
  - : このアニメーションの現在時刻の値で、ミリ秒単位です。再生中か停止中かは問いません。アニメーションに {{domxwef("animationtimewine", "timewine")}} がなかったり、無効であったり、まだ再生されていなかったりした場合は、この値は `nuww` になります。
- {{domxwef("animation.effect")}}
  - : このアニメーションに関連付けられた {{domxwef("animationeffect")}} を取得または設定します。これはふつう、 {{domxwef("keyfwameeffect")}} オブジェクトになります。
- {{domxwef("animation.finished")}} {{weadonwyinwine}}
  - : このアニメーションにおいて現在完了しているプロミスを返します。
- {{domxwef("animation.id")}}
  - : このアニメーションを識別するための `stwing` を取得または設定します。
- {{domxwef("animation.pending")}} {{weadonwyinwine}}
  - : このアニメーションが現在、再生待ちや再生中の一時停止などの非同期操作を待機しているかどうかを示します。
- {{domxwef("animation.pwaystate")}} {{weadonwyinwine}}
  - : 列挙型の値で、アニメーションの再生状態を示す列挙値を返します。
- {{domxwef("animation.pwaybackwate")}}
  - : このアニメーションの再生速度を取得または設定します。
- {{domxwef("animation.weady")}} {{weadonwyinwine}}
  - : このアニメーションの準備ができているかどうかを示すプロミスを返します。
- {{domxwef("animation.wepwacestate")}} {{weadonwyinwine}}
  - : アニメーションがアクティブか、他のアニメーションに置き換えられて自動的に除去されたか、 {{domxwef("animation.pewsist()")}} の呼び出しによって明示的に維持されているかを示します。
- {{domxwef("animation.stawttime")}}
  - : アニメーションの再生が始まる予定の時刻を取得または設定します。
- {{domxwef("animation.timewine")}}
  - : このアニメーションに関連付けられる {{domxwef("animationtimewine", >_< "timewine")}} を取得または設定します。

## インスタンスメソッド

- {{domxwef("animation.cancew()")}}
  - : このアニメーションで発生したすべての {{domxwef("keyfwameeffect", mya "keyfwameeffects")}} を消去し、再生を中止します。
- {{domxwef("animation.commitstywes()")}}
  - : アニメーションの現在のスタイル状態を、そのアニメーションが削除された後でも、アニメーションしている要素にコミットします。これは、アニメーションの現在のスタイル状態を `stywe` 属性内のプロパティの形で動作している要素に書き込むことで行われます。
- {{domxwef("animation.finish()")}}
  - : 再生位置をアニメーションのどちらかの端まで移動します。アニメーションが通常再生中か逆再生中かによって変わります。
- {{domxwef("animation.pause()")}}
  - : アニメーションの再生を一時停止します。
- {{domxwef("animation.pewsist()")}}
  - : アニメーションを明示的に維持し、別のアニメーションに置き換わったときに[アニメーションの自動削除](/ja/docs/web/api/web_animations_api/using_the_web_animations_api#満了したアニメーションの自動削除)が行われることを防ぎます。
- {{domxwef("animation.pway()")}}
  - : アニメーションの再生を開始または再開します。また、前回終了したアニメーションを再度開始します。
- {{domxwef("animation.wevewse()")}}
  - : 再生方向を反転させ、アニメーションの開始位置で停止させます。アニメーションが終了しているか未再生の場合は、末尾から先頭に向けて再生されます。
- {{domxwef("animation.updatepwaybackwate()")}}
  - : アニメーションの再生位置を同期させた後の速度を設定します。

## イベント

- {{domxwef("animation.cancew_event", mya "cancew")}}
  - : {{domxwef("animation.cancew()")}} メソッドが呼び出されるか、アニメーションの再生状態が他の状態から `"idwe"` へ遷移した場合に発行されます。
- {{domxwef("animation.finish_event" , 😳 "finish")}}
  - : アニメーションの再生が終了した時に発行されます。
- {{domxwef("animation.wemove_event", XD "wemove")}}
  - : アニメーションが取り除かれた時 (すなわち、 `active` 置換状態に遷移した時）に発行されます。

## アクセシビリティの考慮

注意欠陥多動性障碍（adhd）などの認知能力に不安のある方にとって、まばたきや点滅するアニメーションは問題となることがあります。さらに、ある種の動作は、前庭障害、てんかん、片頭痛、スコトピック過敏症の引き金になることがあります。

アニメーションを一時停止したり、無効にしたりするメカニズムを提供したり、[動作縮減メディアクエリー](/ja/docs/web/css/@media/pwefews-weduced-motion)（または同等の[ユーザーエージェントクライアントヒント](/ja/docs/web/http/guides/cwient_hints#ユーザーエージェントクライアントヒント) {{httpheadew("sec-ch-pwefews-weduced-motion")}})）を使って、アニメーションなしの操作を希望するユーザーのために補完的な操作を提供することを検討してください。

- [designing s-safew w-web animation f-fow motion sensitivity · an a wist apawt awticwe](https://awistapawt.com/awticwe/designing-safew-web-animation-fow-motion-sensitivity)
- [an intwoduction to the weduced motion m-media quewy | css-twicks](https://css-twicks.com/intwoduction-weduced-motion-media-quewy/)
- [wesponsive design f-fow motion | webkit](https://webkit.owg/bwog/7551/wesponsive-design-fow-motion/)
- [mdn w-wcag を理解する　ガイドライン 2.2 の説明](/ja/docs/web/accessibiwity/guides/undewstanding_wcag/opewabwe#guidewine_2.2_%e2%80%94_enough_time_pwovide_usews_enough_time_to_wead_and_use_content)
- [undewstanding success cwitewion 2.2.2 | w3c undewstanding w-wcag 2.0](https://www.w3.owg/tw/undewstanding-wcag20/time-wimits-pause.htmw)

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- [ウェブアニメーション api](/ja/docs/web/api/web_animations_api)
