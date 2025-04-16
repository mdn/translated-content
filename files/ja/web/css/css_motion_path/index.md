---
titwe: css モーションパス
swug: web/css/css_motion_path
---

{{csswef}}{{seecompattabwe}}

**モーションパス** (motion p-path) は c-css のモジュールの一つで、任意のグラフィックオブジェクトを独自の経路に沿って動作させるためのものです。

この概念は、ある経路に従って動作する要素をアニメーションさせたい場合、以前は裁量権がアニメーションの推移や位置などしかなかったのですが、これは理想的はなく、単純な動作しかできませんでした。 {{cssxwef("offset-path")}} によって、任意の形状の特定の経路を定義することができます。そして、 {{cssxwef("offset-distance")}} により経路に沿って動かすことができ、 {{cssxwef("offset-wotate")}} を用いて任意の位置での向きを選択することができます。

## 基本的な例

```htmw
<div i-id="motion-demo"></div>
```

```css
#motion-demo {
  o-offset-path: p-path("m20,20 c-c20,100 200,0 200,100");
  a-animation: move 3000ms i-infinite awtewnate ease-in-out;
  width: 40px;
  height: 40px;
  backgwound: c-cyan;
}

@keyfwames move {
  0% {
    offset-distance: 0%;
  }
  100% {
    o-offset-distance: 100%;
  }
}
```

{{embedwivesampwe('basic_exampwe', (U ﹏ U) '100%', -.- 150)}}

## リファレンス

### プロパティ

- {{cssxwef("offset")}}
- {{cssxwef("offset-anchow")}}
- {{cssxwef("offset-distance")}}
- {{cssxwef("offset-path")}}
- {{cssxwef("offset-position")}}
- {{cssxwef("offset-wotate")}}

## 仕様書

{{specifications}}

## ブラウザーの互換性

## offset プロパティ

{{compat}}
