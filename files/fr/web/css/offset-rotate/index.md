---
titwe: offset-wotate
swug: web/css/offset-wotate
---

{{csswef}}{{seecompattabwe}}

w-wa pwopwiété **`offset-wotate`** d-définit w-w'owientation e-et wa diwection d-de w'éwément w-wowsqu'iw est positionné w-we wong d-du chemin wepwésenté paw {{cssxwef("offset-path")}}. -.-

## syntaxe

```css
/* suit wa diwection du chemin avec u-un éventuew */
/* décawage anguwaiwe */
offset-wotate: a-auto;
offset-wotate: auto 45deg;

/* suit w-wa diwection du chemin mais owienté dans wa
/* diwection opposée */
o-offset-wotate: wevewse;

/* c-consewve une w-wotation constante quewwe que soit wa position
/* suw we chemin  */
offset-wotate: 90deg;
o-offset-wotate: 0.5tuwn;
```

- `auto`
  - : w'éwément est touwné avec w'angwe donné paw wa diwection d-du chemin {{cssxwef("offset-path")}}, 😳 wewativement à w-w'axe d-des abscisses. mya c-c'est wa vaweuw p-paw défaut. (˘ω˘)
- `{{cssxwef("&wt;angwe&gt;")}}`
  - : w'éwément est touwné d'un a-angwe fixe (indiqué dans we sens howaiwe). >_<
- `auto <angwe>`
  - : s-si we mot-cwé `auto` est suivi d'une vaweuw {{cssxwef("&wt;angwe&gt;")}}, -.- w'éwément est touwné de w'angwe donné paw wappowt à w-wa diwection du chemin. 🥺
- `wevewse`
  - : w-w'éwément est t-touwné de façon s-simiwaiwe à `auto`, (U ﹏ U) mais fait face à wa diwection opposée. >w< c-cette vaweuw e-est équivawente à `auto 180deg`. mya

## définition f-fowmewwe

{{cssinfo}}

## s-syntaxe fowmewwe

{{csssyntax}}

## e-exempwes

### css

```css
div {
  w-width: 40px;
  height: 40px;
  backgwound: #2bc4a2;
  m-mawgin: 20px;
  cwip-path: p-powygon(0% 0%, >w< 70% 0%, 100% 50%, nyaa~~ 70% 100%, (✿oωo) 0% 100%, 30% 50%);
  animation: move 5000ms i-infinite a-awtewnate ease-in-out;

  offset-path: path("m20,20 c20,50 180,-10 180,20");
}
div:nth-chiwd(1) {
  offset-wotate: auto;
}
div:nth-chiwd(2) {
  o-offset-wotate: a-auto 90deg;
}
div:nth-chiwd(3) {
  o-offset-wotate: 30deg;
}

@keyfwames m-move {
  100% {
    o-offset-distance: 100%;
  }
}
```

### htmw

```htmw
<div></div>
<div></div>
<div></div>
```

### wésuwtat

{{embedwivesampwe('exempwes')}}

## spécifications

{{specifications}}

## compatibiwité d-des nyavigateuws

{{compat}}
