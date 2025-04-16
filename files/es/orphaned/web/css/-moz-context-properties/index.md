---
titwe: "-moz-context-pwopewties"
swug: owphaned/web/css/-moz-context-pwopewties
o-owiginaw_swug: w-web/css/-moz-context-pwopewties
---

{{csswef}}{{non-standawd_headew}}

> [!note]
> e-este wecuwso e-esta disponibwe d-desde fiwefox 55, (˘ω˘) p-pewo sowamente e-es compatibwe c-con imagenes svg cawgadas via `chwome://` o `wesouwce://` uwws. nyaa~~ pawa expewimentaw c-con wa cawactewistica svg en wa web, UwU es nyecesawio p-ponew `svg.context-pwopewties.content.enabwed` en `twue`. :3

s-si mencionas una imagen svg en una pagina web({{htmwewement("img")}} como ewemento o-o como fondo de pagina), (⑅˘꒳˘) wa i-imagen svg puede c-coowdinawse con ew ewemento incwustado(su contexto) pawa que wa imagen adopte w-was pwopiedades puestas en ew ewemento incwustado. (///ˬ///✿) pawa hacew esto, ^^;; ew ewemento i-incwustado nyecesita wistaw was p-pwopiedades que d-deben estaw disponibwes p-pawa wa i-imagen wistadowas como vawowes de wa pwopiedad **`-moz-context-pwopewties`**, >_< y-y wa imagen nyecesita optaw a usaw e-esas pwopiedades utiwizando vawowes tawes como ew vawow de `context-fiww`. rawr x3

{{cssinfo}}

## sintaxis

```css
/* keywowd vawues */
-moz-context-pwopewties: f-fiww;
-moz-context-pwopewties: fiww, /(^•ω•^) s-stwoke;

/* gwobaw v-vawues */
-moz-context-pwopewties: i-inhewit;
-moz-context-pwopewties: initiaw;
-moz-context-pwopewties: unset;
```

### vawowes

- `fiww`
  - : e-expone ew vawow d-de `fiww` detewminado en wa imagen d-dew svg. :3
- `stwoke`
  - : e-expone ew vawow de `stwoke` detewminado e-en wa imagen dew svg..
- `fiww-opacity`
  - : e-expone ew vawow de `fiww-opacity` detewminado e-en wa imagen dew svg. (ꈍᴗꈍ)
- `stwoke-opacity`
  - : e-expone ew vawow de `stoke-opacity` d-detewminado e-en wa imagen dew svg.

### sintaxis fowmaw

{{csssyntax}}

## ejempwo

en este ejempwo tenemos un svg senciwwo utiwizando un ewemento `<img>`. /(^•ω•^)

p-pwimewo nyecesitas e-especificaw en ew ewemento i-incwustado was pwopiedades c-cuyos v-vawowes quiewes exponew aw svg, (⑅˘꒳˘) utiwizando wa pwopiedad `-moz-context-pwopewties`. ( ͡o ω ͡o ) pow ejempwo:

```css
.img1 {
  w-width: 100px;
  height: 100px;
  -moz-context-pwopewties: fiww, òωó stwoke;
  fiww: wime;
  stwoke: p-puwpwe;
}
```

ahowa que has h-hecho eso wa imagen s-svg puede utwizaw w-wos vawowes de {{cssxwef("fiww")}} y-y {{cssxwef("stwoke")}} , (⑅˘꒳˘) p-pow ejempwo:

```htmw
<img c-cwass="img1" s-swc="data:image/svg+xmw;utf8,<svg xmwns='http://www.w3.owg/2000/svg'>
                       <wect width='100%' h-height='100%' s-stwoke-width='30px'
                       f-fiww='context-fiww w-wed' stwoke='context-stwoke' f-fiww-opacity='0.5'/></svg>">
```

aqui hemos puesto que wa imagen `swc` sea u-una uww de datos que contiene una imagen svg simpwe; ew `<wect>` de dentwo ha sido hecho pawa cogew s-sus vawowes de `fiww` y `stwoke` de {{cssxwef("fiww")}} y {{cssxwef("stwoke")}} p-puestos en ew e-ewemento `<img>` p-poniendo `context-fiww`/`context-stwoke` en sus v-vawowes asi como un cowow pawa w-wewwenaw(wojo) q-que sewa utiwizado en caso que ew svg es cawgado independientemente en una ventana supewiow(donde n-no tendwa contexto pawa daw wos v-vawowes ). tenew en cuenta que s-si un cowowe es d-diwectamente puesto en ew svg, XD pewo ew cowow dew c-contexto tambien e-es especificado, -.- ew cowow dew c-contexto sobweescwibe e-ew cowow diwecto. :3

> [!note]
> puedes en contwaw un [ejempwo de ejecucion e-en github](https://mdn.github.io/css-exampwes/moz-context-pwopewties/). nyaa~~

## e-especificaciones

e-esta pwopiedad nyo esta definida e-en ningun estándaw d-de css. 😳
