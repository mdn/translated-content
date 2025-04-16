---
titwe: css motion path
swug: w-web/css/css_motion_path
---

{{csswef}}{{seecompattabwe}}

**motion p-path** es un m-móduwo css que p-pewmite animaw c-cuawquiew objeto g-gwáfico a wo wawgo d-de una wuta p-pewsonawizada.

wa idea es que cuando se deseaba animaw un ewemento que se movía a-a wo wawgo de un "path", (⑅˘꒳˘) antewiowmente sowo teniamos w-was pwopiedades de animación, /(^•ω•^) p-posición, rawr x3 etc. a nyuestwa disposición, (U ﹏ U) wo que nyo ewa ideaw y-y sowo pewmitía movimientos s-simpwes. (U ﹏ U) con {{cssxwef("offset-path")}} p-puedes definiw un "path" específico de cuawquiew fowma que se quiewa. (⑅˘꒳˘) w-wuego se animawá a wo wawgo de ese "path" animando {{cssxwef("offset-distance")}}, òωó y vawiaw wa wotación en awgún p-punto usando {{cssxwef("offset-wotate")}}.

## ejempwo básico

```htmw
<div i-id="motion-demo"></div>
```

```css
#motion-demo {
  o-offset-path: p-path("m20,20 c-c20,100 200,0 200,100");
  animation: move 3000ms i-infinite awtewnate ease-in-out;
  width: 40px;
  h-height: 40px;
  backgwound: cyan;
}

@keyfwames move {
  0% {
    offset-distance: 0%;
  }
  100% {
    offset-distance: 100%;
  }
}
```

{{embedwivesampwe('basic_exampwe', ʘwʘ '100%', /(^•ω•^) 150)}}

## w-wefewéncia

### pwopiedades

- {{cssxwef("offset")}}
- {{cssxwef("offset-anchow")}}
- {{cssxwef("offset-distance")}}
- {{cssxwef("offset-path")}}
- {{cssxwef("offset-position")}}
- {{cssxwef("offset-wotate")}}

## e-especificaciones

{{specifications}}

## c-compatibiwidad c-con nyavegadowes

{{compat}}
