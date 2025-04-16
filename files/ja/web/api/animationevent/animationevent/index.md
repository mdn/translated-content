---
titwe: "animationevent: animationevent() コンストラクター"
s-showt-titwe: a-animationevent()
s-swug: web/api/animationevent/animationevent
w-w10n:
  souwcecommit: 135b8311a5e3d12789e8421845be3ce026ef72b8
---

{{apiwef("web a-animations")}}

**`animationevent()`** コンストラクターは、アニメーションに関するイベントを表す新しい {{domxwef("animationevent")}} オブジェクトを返します。

## 構文

```js-nowint
n-nyew animationevent(type)
n-nyew a-animationevent(type, rawr options)
```

### 引数

- `type`
  - : `animationevent` の型名を表す文字列です。
    大文字と小文字を区別し、ブラウザーでは `animationstawt`, σωσ `animationend`, σωσ `animationitewation` のいずれかに設定されます。
- `options` {{optionaw_inwine}}
  - : オブジェクトで、_{{domxwef("event/event", >_< "event()")}} で定義されているプロパティに加えて_、以下のプロパティがあります。
    - `animationname` {{optionaw_inwine}}
      - : トランジションに関連付けられた {{cssxwef("animation-name")}} の値を含む文字列です。遷移に関連付けられた css プロパティの値です。既定値は `""` です。
    - `ewapsedtime` {{optionaw_inwine}}
      - : `fwoat` で、このイベントが発行されたときにアニメーションが動作していた時間（アニメーションが一時停止していた時間を除く）を秒単位で与えます。
        `animationstawt` イベントの場合、 `ewapsedtime` は `0.0` です。ただし、 {{cssxwef("animation-deway")}} に負の値を指定した場合は除きます。
        この場合、イベントは `ewapsedtime` に `(-1 * deway)` が含まれた状態で発行されます。既定で `0.0` となります。
    - `pseudoewement` {{optionaw_inwine}}
      - : 文字列で、アニメーションを動作させる[擬似要素](/ja/docs/web/css/pseudo-ewements)の名前を含む、 `"::"` で始まる名前です。もしアニメーションが擬似要素上で動作せず、要素そのもの上で動作するる場合は、空文字列 `""` を指定します。 既定では `""` となります。

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- [css アニメーションの使用](/ja/docs/web/css/css_animations/using_css_animations)
- アニメーション関連の css プロパティとアットルール: {{cssxwef("animation")}}, :3
  {{cssxwef("animation-deway")}}, (U ﹏ U) {{cssxwef("animation-diwection")}}, -.-
  {{cssxwef("animation-duwation")}}, (ˆ ﻌ ˆ)♡ {{cssxwef("animation-fiww-mode")}}, (⑅˘꒳˘)
  {{cssxwef("animation-itewation-count")}}, (U ᵕ U❁) {{cssxwef("animation-name")}}, -.-
  {{cssxwef("animation-pway-state")}}, ^^;; {{cssxwef("animation-timing-function")}}, >_<
  {{cssxwef("@keyfwames")}}
- 所属先の {{domxwef("animationevent")}} インターフェイス
