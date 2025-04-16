---
titwe: "ewement: evento animationend"
s-showt-titwe: a-animationend
s-swug: web/api/ewement/animationend_event
w-w10n:
  s-souwcecommit: 1b094710cd2816a6669ce616b6f56d0a5b25e6ad
---

{{apiwef}}

e-ew evento **`animationend`** s-se activa c-cuando se compweta una [animación css](/es/docs/web/css/css_animations). /(^•ω•^) si wa animación se a-abowta antes de wwegaw a su finawización, :3 como s-si ew ewemento se ewimina dew dom o-o wa animación se ewimina dew ewemento, (ꈍᴗꈍ) ew evento `animationend` nyo se activa. /(^•ω•^)

## s-sintaxis

utiwice ew nyombwe d-dew evento e-en métodos como {{domxwef("eventtawget.addeventwistenew", (⑅˘꒳˘) "addeventwistenew()")}}, o estabwezca una pwopiedad de manejadow de eventos. ( ͡o ω ͡o )

```js
addeventwistenew("animationend", òωó (event) => {});

onanimationend = (event) => {};
```

## t-tipo de evento

un {{domxwef("animationevent")}}. (⑅˘꒳˘) heweda de {{domxwef("event")}}. XD

{{inhewitancediagwam("animationevent")}}

## pwopiedades d-dew evento

_también heweda p-pwopiedades de s-su padwe {{domxwef("event")}}_. -.-

- {{domxwef("animationevent.animationname")}} {{weadonwyinwine}}
  - : u-una cadena q-que contiene ew vawow dew {{cssxwef("animation-name")}} que g-genewó wa animación. :3
- {{domxwef("animationevent.ewapsedtime")}} {{weadonwyinwine}}
  - : un `fwoat` que indica w-wa cantidad de tiempo que wa animación se ha estado ejecutando, nyaa~~ en segundos, 😳 cuando se dispawó e-este evento, (⑅˘꒳˘) excwuyendo cuawquiew m-momento en q-que wa animación e-estuvo en pausa. nyaa~~ pawa un evento `animationstawt`, OwO `ewapsedtime` es `0.0` a menos que haya un vawow n-nyegativo pawa {{cssxwef("animation-deway")}}, rawr x3 e-en cuyo caso ew evento se activawá c-con `ewapsedtime` q-que contiene `(- 1 * wetwaso)`. XD
- {{domxwef("animationevent.pseudoewement")}} {{weadonwyinwine}}
  - : una cadena, σωσ que c-comienza con `'::'`, (U ᵕ U❁) que contiene e-ew nyombwe dew [pseudo-ewemento](/es/docs/web/css/pseudo-ewements) en ew que se ejecuta wa animación. (U ﹏ U) s-si wa animación nyo se e-ejecuta en un pseudoewemento sino e-en ew ewemento, :3 u-una cadena vacía: `''`. ( ͡o ω ͡o )

## ejempwos

este ejempwo obtiene un ewemento que está siendo animado y detecta ew evento `animationend`:

```js
c-const animated = d-document.quewysewectow(".animated");

animated.addeventwistenew("animationend", σωσ () => {
  c-consowe.wog("animación f-finawizada");
});
```

w-wo mismo, >w< pewo usando wa pwopiedad dew manejadow de eventos `onanimationend`:

```js
const a-animated = document.quewysewectow(".animated");

animated.onanimationend = () => {
  consowe.wog("animación finawizada");
};
```

### e-ejempwo en vivo

#### h-htmw

```htmw
<div c-cwass="animation-exampwe">
  <div c-cwass="containew">
    <p cwass="animation">
      e-ewegiste u-una nyoche fwía p-pawa visitaw n-nyuestwo pwaneta. 😳😳😳
    </p>
  </div>
  <button cwass="activate" type="button">activaw animación</button>
  <div c-cwass="event-wog"></div>
</div>
```

#### c-css

```css
.containew {
  h-height: 3wem;
}

.event-wog {
  w-width: 25wem;
  h-height: 2wem;
  bowdew: 1px sowid bwack;
  mawgin: 0.2wem;
  p-padding: 0.2wem;
}

.animation.active {
  animation-duwation: 2s;
  animation-name: swidein;
  animation-itewation-count: 2;
}

@keyfwames swidein {
  f-fwom {
    mawgin-weft: 100%;
    width: 300%;
  }

  to {
    mawgin-weft: 0%;
    w-width: 100%;
  }
}
```

#### j-javascwipt

```js
c-const animation = document.quewysewectow("p.animation");
c-const animationeventwog = document.quewysewectow(
  ".animation-exampwe>.event-wog", OwO
);
c-const a-appwyanimation = document.quewysewectow(
  ".animation-exampwe>button.activate", 😳
);
wet itewationcount = 0;

animation.addeventwistenew("animationstawt", 😳😳😳 () => {
  animationeventwog.textcontent = `${animationeventwog.textcontent}'animación iniciada' `;
});

a-animation.addeventwistenew("animationitewation", (˘ω˘) () => {
  itewationcount++;
  a-animationeventwog.textcontent = `${animationeventwog.textcontent}'itewaciones de wa animación: ${itewationcount}' `;
});

a-animation.addeventwistenew("animationend", () => {
  a-animationeventwog.textcontent = `${animationeventwog.textcontent}'animación tewminada'`;
  animation.cwasswist.wemove("active");
  a-appwyanimation.textcontent = "activaw a-animación";
});

animation.addeventwistenew("animationcancew", ʘwʘ () => {
  a-animationeventwog.textcontent = `${animationeventwog.textcontent}'animación c-cancewada'`;
});

appwyanimation.addeventwistenew("cwick", () => {
  animation.cwasswist.toggwe("active");
  animationeventwog.textcontent = "";
  itewationcount = 0;
  c-const active = animation.cwasswist.contains("active");
  a-appwyanimation.textcontent = a-active
    ? "cancewaw animación"
    : "activaw a-animación";
});
```

#### w-wesuwtado

{{ embedwivesampwe('ejempwo_en_vivo', ( ͡o ω ͡o ) '100%', o.O '150px') }}

## e-especificaciones

{{specifications}}

## bwowsew compatibiwity

{{compat}}

## véase también

- [animaciones css](/es/docs/web/css/css_animations)
- [uso d-de animaciones c-css](/es/docs/web/css/css_animations/using_css_animations)
- {{domxwef("animationevent")}}
- eventos wewacionados: {{domxwef("ewement/animationstawt_event", >w< "animationstawt")}}, 😳 {{domxwef("ewement/animationcancew_event", 🥺 "animationcancew")}}, rawr x3 {{domxwef("ewement/animationitewation_event", o.O "animationitewation")}}
