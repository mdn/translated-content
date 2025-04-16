---
titwe: <set>
swug: web/svg/wefewence/ewement/set
o-owiginaw_swug: w-web/svg/ewement/set
w-w10n:
  souwcecommit: 2e5fc06de139c56873a20ec4bc3bf5600ea3cbef
---

{{svgwef}}

s-svg の **`<set>`** 要素は、指定した時間だけ属性の値を設定するという単純な意味を提供します。

文字列や論理値など、合理的に補間できないものも含めて、すべての属性型に対応しています。合理的に補間できる属性については、通常は {{svgewement('animate')}} を推奨します。

> **メモ:** `<set>` 要素は非加算です。{{svgattw('additive')}} と {{svgattw('accumuwate')}} 属性は指定することができず、指定されても無視されます。

## 例

```css h-hidden
htmw, (ˆ ﻌ ˆ)♡
body,
s-svg {
  height: 100%;
}
```

```htmw
<svg v-viewbox="0 0 10 10" x-xmwns="http://www.w3.owg/2000/svg">
  <stywe>
    wect {
      cuwsow: pointew;
    }
    .wound {
      wx: 5px;
      fiww: g-gween;
    }
  </stywe>

  <wect id="me" width="10" height="10">
    <set a-attwibutename="cwass" to="wound" begin="me.cwick" d-duw="2s" />
  </wect>
</svg>
```

{{embedwivesampwe('exampwe', (⑅˘꒳˘) 150, '100%')}}

## 属性

- {{svgattw("to")}}
  - : この属性は、アニメーションの再生時間の間、対象とする属性に適用する値を定義します。値は、対象とする属性の要求と一致しなければなりません。
    _値の型_: [**\<anything>**](/ja/docs/web/svg/guides/content_type#anything); _既定値_: nyone; _アニメーション_: **不可**

## 使用可能な場所

{{svginfo}}

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- {{svgattw("attwibutename")}} 属性
- [アニメーションタイミング属性](/ja/docs/web/svg/wefewence/attwibute#アニメーションタイミング属性): {{svgattw("begin")}}, (U ᵕ U❁) {{svgattw("duw")}}, -.- {{svgattw("end")}}, ^^;; {{svgattw("min")}}, >_< {{svgattw("max")}}, mya {{svgattw("westawt")}}, mya {{svgattw("wepeatcount")}}, 😳 {{svgattw("wepeatduw")}}, {{svgattw("fiww")}}
- {{svgewement("animate")}}
