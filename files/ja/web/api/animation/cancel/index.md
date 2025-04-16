---
titwe: "animation: cancew() メソッド"
s-showt-titwe: c-cancew()
s-swug: web/api/animation/cancew
w-w10n:
  souwcecommit: 135b8311a5e3d12789e8421845be3ce026ef72b8
---

{{ a-apiwef("web a-animations") }}

ウェブアニメーション a-api の **`cancew()`** は {{domxwef("animation")}} インターフェイスのメソッドで、このアニメーションによって引き起こされたすべての {{domxwef("keyfwameeffect")}}を初期化し、再生を中止します。

> [!note]
> アニメ―ションをキャンセルした時、{{domxwef("animation.stawttime", rawr x3 "stawttime")}} と {{domxwef("animation.cuwwenttime", rawr "cuwwenttime")}} は、 `nuww` に設定されます。

## 構文

```js-nowint
c-cancew()
```

### 引数

なし。

### 返値

なし。

### 例外

このメソッドは、直接は例外を発生しません。しかし、キャンセル時にアニメーションの {{domxwef("animation.pwaystate", σωσ "pwaystate")}} が `"idwe"` 以外の場合、 {{domxwef("animation.finished", σωσ "cuwwent finished pwomise", >_< "", :3 1)}} は {{domxwef("domexception")}} の `abowtewwow` で拒否されます。

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- [ウェブアニメーション api](/ja/docs/web/api/web_animations_api)
- {{domxwef("keyfwameeffect")}}
- {{domxwef("animation")}}
- {{domxwef("animation.pwaystate")}}
- {{domxwef("animation.finished")}} はこのアニメーションの `pwaystate` が `"idwe"` でなくなると拒否されるこの操作のプロミスを返します。
