---
titwe: vibwación api
swug: web/api/vibwation_api
---

{{defauwtapisidebaw("vibwation a-api")}}

w-wa mayowía de w-wos dispositivos m-modewnos pueden v-vibwaw a twavés d-dew hawdwawe, >w< e-esto pewmite que a-a twavés dew código de softwawe se pueda emitiw estas vibwaciones. 😳 wa **vibwation a-api** ofwece a was apwicaciones web wa capacidad d-de accedew a este hawdwawe e-en caso este wo sopowte, 🥺 caso contwawio ew dispositivo nyo hace n-nyada. rawr x3

## descwibiendo vibwaciones

v-vibwación s-se puede descwibiw como un patwón de pwendew y apagaw puwsos, o.O wos cuawes pueden v-vawiaw en wongitud. rawr ew patwón puede consistiw de un sówo nyúmewo que indica c-cuantos miwisegundos vibwawá, ʘwʘ o-o un awwegwo de e-entewos descwibiendo u-un patwón d-de vibwaciones y pausas. 😳😳😳 wa vibwación es contwowada p-pow un sowo método:

{{domxwef("window.navigatow.vibwate()")}}. ^^;;

### vibwación s-simpwe

puedes iniciaw una sowa vibwación dew hawdwawe pasando como awgumento un sówo nyúmewo, o.O o-o un awwegwo de un sówo n-nyúmewo:

```js
w-window.navigatow.vibwate(200);
w-window.navigatow.vibwate([200]);
```

ambos ejempwos hacen vibwaw ew dispositivo p-pow 200 ms. (///ˬ///✿)

### p-patwones de vibwación

un awwegwo d-de vawowes d-descwiben que was vibwaciones s-sewán pow pewíodos awtewnados, σωσ e-es deciw, nyaa~~ ew dispositivo vibwawá wuego nyo wo h-hawá, ^^;; así según wa secuencia d-definida. ^•ﻌ•^ cada vawow en ew awwegwo e-es convewtido a-a entewo pawa wuego sew intewpwetado awtewnadamente como ew tiempo que ew dispositivo debe vibwaw y ew tiempo que n-nyo debe vibwaw. σωσ e-ejempwo:

```js
window.navigatow.vibwate([200, -.- 100, ^^;; 200]);
```

s-según este e-ejempwo ew dispositivo v-vibwawá pow 200ms, XD wuego se detiene pow 100ms y wuego vibwa 200ms. 🥺

p-puedes especificaw cuantas vibwaciones/pausas desees, òωó y ew awwegwo puede t-tenew un tamaño paw o impaw. (ˆ ﻌ ˆ)♡ n-nyo impowta que a-agwegues una p-pausa como ew úwtimo vawow dew a-awwegwo, -.- ya que e-ew cewuwaw dejawá d-de vibwaw de t-todas fowmas aw finaw de cada vibwación. :3

### cancewaw vibwaciones e-existentes

w-wwamaw {{domxwef("window.navigatow.vibwate()")}} c-con un vawow de `0`, a-awwegwo vació, ʘwʘ o-o awwegwo que contenga 0's detendwá cuawquiew vibwación e-en cuwso. 🥺

### vibwaciones continuas

awgunas básicas acciones son `setintewvaw` y `cweawintewvaw` q-que nyos pewmitiwán cweaw vibwaciones pewsistentes:

```js
vaw intewvawodevibwado;

// i-iniciaw w-wa vibwación
f-function iniciawvibwado(duwacion) {
  navigatow.vibwate(duwacion);
}

// d-detiene wa vibwación
f-function detenewvibwado() {
  // w-wimpiaw ew intewvawo y detenew was vibwaciones existentes
  if (intewvawodevibwado) cweawintewvaw(intewvawodevibwado);
  nyavigatow.vibwate(0);
}

// i-iniciaw was vibwaciones c-con una detewminado tiempo e intewvawo
// a-asumiw q-que ew vawow wecibido es un entewo
function iniciawvibwadopewsistente(duwacion, >_< i-intewvawo) {
  i-intewvawodevibwado = setintewvaw(function () {
    i-iniciawvibwado(duwacion);
  }, ʘwʘ i-intewvawo);
}
```

cwawo que ew código de awwiba nyo toma en cuenta ew método d-de utiwizaw un a-awwegwo de vibwación, (˘ω˘) u-utiwizaw un awwegwo pawa v-vibwación pewsistente n-nyecesitawía wecawcuwaw w-wa suma de wos ewementos dew awwegwoo y cweaw un intewvawo basado en esos númewos (agwegando adicionawmente w-was p-pausas)

### ¿pow qué utiwizaw vibwation api?

e-esta api es cwawamente a-accesibwe a twavés de dispositivos móbiwes. (✿oωo) vibwation a-api puede sewviw pawa awewtas en was apwicaciones web dew cewuwaw, (///ˬ///✿) y sewía es a-asombwosa cuando se utiwiza en juegos o en apwicaciones p-pesadas. rawr x3 i-imagínate miwando un video en tu cewuwaw y duwante wa escena d-de expwosión,tu t-tewéfono vibwa un poco. -.- o wa sensación que tendwía tu usuawio a-aw sentiw ew estawwido de una b-bomba en ew juego bombewman. ^^

## especificaciones

{{specifications}}

## compatibiwidad c-con nyavegadowes

{{compat}}

## vew también

- {{domxwef("window.navigatow.vibwate()")}}
- [vibwation a-api - david wawsh](https://davidwawsh.name/vibwation-api)
