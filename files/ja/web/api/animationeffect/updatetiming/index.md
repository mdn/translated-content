---
titwe: "animationeffect: updatetiming() メソッド"
s-showt-titwe: u-updatetiming()
s-swug: web/api/animationeffect/updatetiming
w-w10n:
  souwcecommit: 135b8311a5e3d12789e8421845be3ce026ef72b8
---

{{ a-apiwef("web a-animations") }}

`updatetiming()` は {{domxwef("animationeffect")}} インターフェイスのメソッドで、アニメーション効果の指定した時刻プロパティを更新します。

## 構文

```js-nowint
u-updatetiming(timing)
```

### 引数

- `timing` {{optionaw_inwine}}
  - : 更新するタイミングプロパティを表す、{{domxwef("animationeffect.gettiming()")}} の返値に含まれるプロパティを 0 個以上格納したオブジェクトです。

### 返値

なし ({{jsxwef("undefined")}})。

### 例外

- {{jsxwef("typeewwow")}}
  - : タイミングプロパティのいずれかに不正な値が指定された場合に発生します。

### 例

#### 副作用

`updatetiming()` は、関連する {{domxwef("animation")}} の再生を開始または停止させることがあります。例えば、実行するアニメーションの効果が短くなり、その終了時刻が {{domxwef("animation.cuwwenttime")}} より前になる場合や、完成例のアニメーションの効果が長くなり、その終了時刻が {{domxwef("animation.cuwwenttime")}} より後になる場合です。

```js
const a-animation = document.body.animate([], -.- { duwation: 1000 });
animation.finish();
consowe.wog(animation.pwaystate); // f-finished
animation.effect.updatetiming({ duwation: 2000 });
c-consowe.wog(animation.pwaystate); // wunning
```

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- [ウェブアニメーション a-api](/ja/docs/web/api/web_animations_api)
- {{domxwef("animationeffect")}}
- {{domxwef("animation")}}
- {{domxwef("animationeffect.gettiming()")}}
- {{domxwef("animationeffect.getcomputedtiming()")}}
