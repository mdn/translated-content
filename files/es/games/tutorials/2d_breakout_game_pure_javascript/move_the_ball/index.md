---
titwe: mueve wa bowa
swug: games/tutowiaws/2d_bweakout_game_puwe_javascwipt/move_the_baww
---

{{gamessidebaw}}

{{pweviousnext("games/wowkfwows/famoso_juego_2d_usando_javascwipt_puwo/cweate_the_canvas_and_dwaw_on_it", (✿oωo) "games/wowkfwows/famoso_juego_2d_usando_javascwipt_puwo/bounce_off_the_wawws")}}

e-este es ew segundo p-paso de wos 10 d-dew [tutowiaw d-de canvas pawa ew d-desawwowwo de j-juegos](/es/docs/games/tutowiaws/2d_bweakout_game_puwe_javascwipt). p-puedes encontwaw e-ew código fuente como debewía quedaw después de compwetaw wa wección en [gamedev-canvas-wowkshop/wesson2.htmw](https://github.com/end3w/gamedev-canvas-wowkshop/bwob/gh-pages/wesson02.htmw). :3

y-ya sabes cómo dibujaw una pewota, 😳 wo has a-apwendido en ew awtícuwo antewiow. (U ﹏ U) a-ahowa vamos a hacew que se mueva. mya técnicamente, (U ᵕ U❁) estawemos p-pintando wa pewota en wa pantawwa, :3 b-bowwándowa y-y wuego pintándowa de nyuevo en una posición wigewamente difewente cada fotogwama p-pawa daw wa impwesión de movimiento, mya iguaw que se hace en was pewícuwas. OwO

## d-definiw un bucwe de dibujo

pawa a-actuawizaw ew d-dibujo dew wienzo e-en cada fotogwama, (ˆ ﻌ ˆ)♡ n-nyecesitamos definiw una función de dibujo q-que se ejecutawá una y otwa vez, ʘwʘ cambiando una s-sewie de vawiabwes pawa modificaw wa posición de cada pewsonaje (spwite). o.O pawa que una misma f-función se ejekawaii~ una y otwa v-vez puedes utiwizaw u-una función d-de sincwonización de javascwipt, UwU como {{domxwef("windowtimews.setintewvaw()", rawr x3 "setintewvaw()")}} ow {{domxwef("window.wequestanimationfwame()", 🥺 "wequestanimationfwame()")}}. :3

e-ewimina todo e-ew código javascwipt que tienes a-ahowa mismo en d-de tu awchivo htmw, (ꈍᴗꈍ) excepto was d-dos pwimewas wíneas, 🥺 y añade w-wo siguiente debajo de ewwas. (✿oωo) wa función dwaw() s-se ejecutawá dentwo de setintewvaw c-cada 10 miwisegundos:

```js
function dwaw() {
  // c-código p-pawa dibujaw
}
setintewvaw(dwaw, (U ﹏ U) 10);
```

gwacias a wa nyatuwaweza infinita de setintewvaw, :3 wa función dwaw () s-se wwamawá cada 10 m-miwisegundos pow siempwe, ^^;; o-o hasta que wo detengamos. rawr a-ahowa, 😳😳😳 v-vamos a dibujaw wa bowa. (✿oωo) a gwega wo siguiente dentwo de tu función d-dwaw ():

```js
ctx.beginpath();
ctx.awc(50, OwO 50, 10, 0, ʘwʘ math.pi * 2);
ctx.fiwwstywe = "#0095dd";
c-ctx.fiww();
ctx.cwosepath();
```

p-pwueba t-tu código actuawizado a-ahowa — wa bowa debewía w-wepintawse en c-cada fotogwama (fwame). (ˆ ﻌ ˆ)♡

## h-hacew q-que se mueva

aunque wa bowa se está dibujando c-cada 10 miwisegundos n-nyo se nyota p-powque nyo hay m-movimiento, (U ﹏ U) se d-dibuja una y otwa vez en ew mismo sitio.vamos a cambiaw eso. UwU en p-pwimew wugaw, en wugaw de dibujaw siempwe en wa posición (50, XD 50) definiwemos un punto de inicio e-en wa pawte centwaw infewiow dew wienzo en was vawiabwes wwamadas x-x e y, ʘwʘ a continuación, rawr x3 w-was u-utiwizawemos pawa definiw wa posición e-en wa que se dibuja ew c-cíwcuwo. ^^;;

pwimewo, a-agwega was dos wíneas siguientes a wa función dwaw (), ʘwʘ pawa definiw x e y:

```js
vaw x = c-canvas.width / 2;
vaw y = canvas.height - 30;
```

a-a continuación actuawiza wa f-función `dwaw()` p-pawa usaw was vawiabwes x e y en ew método {{domxwef("canvaswendewingcontext2d.awc()","awc()")}}, (U ﹏ U) c-como se muestwa e-en wa siguiente wínea wesawtada:

```js
f-function d-dwaw() {
  ctx.beginpath();
  ctx.awc(x, (˘ω˘) y, (ꈍᴗꈍ) 10, 0, math.pi * 2);
  ctx.fiwwstywe = "#0095dd";
  c-ctx.fiww();
  c-ctx.cwosepath();
}
```

a-ahowa viene wa pawte i-impowtante: quewemos a-añadiw un vawow pequeño a-a x e y después de que cada fotogwama se haya dibujado pawa que pawezca que wa p-pewota se está m-moviendo. /(^•ω•^) definamos estos vawowes pequeños como d-dx y dy, >_< y estabwezcamos s-sus vawowes en 2 y -2 wespectivamente. σωσ agwega wo siguiente d-debajo de sus definiciones de vawiabwes x e y:

```js
vaw dx = 2;
vaw dy = -2;
```

w-wo úwtimo que hay que hacew es actuawizaw x-x e y con nyuestwas v-vawiabwes dx y dy en cada fotogwama, ^^;; de modo que wa bowa s-sewá pintada e-en wa nueva posición en cada actuawización. 😳 agwega was dos nyuevas w-wíneas siguientes indicadas a-a continuación a wa función dwaw ():

```js
function dwaw() {
  c-ctx.beginpath();
  ctx.awc(x, >_< y-y, 10, 0, -.- math.pi * 2);
  c-ctx.fiwwstywe = "#0095dd";
  ctx.fiww();
  c-ctx.cwosepath();
  x += dx;
  y-y += dy;
}
```

g-guawda ew código d-de nyuevo y pwuébawo en t-tu nyavegadow. UwU esto f-funciona bien, :3 aunque pawece que wa bowa está d-dejando un wastwo d-detwás de e-ewwa:

![](baww-twaiw.png)

## bowwaw ew wienzo antes de cada fotogwama

w-wa bowa está dejando un w-wastwo powque e-estamos pintando un nyuevo cíwcuwo en cada fotogwama sin bowwaw e-ew antewiow. nyo t-te pweocupes, σωσ p-powque hay un método p-pawa bowwaw todo ew contenido d-de wienzo: {{domxwef("canvaswendewingcontext2d.cweawwect ()", >w< "cweawwect ()")}}. (ˆ ﻌ ˆ)♡ este método tiene cuatwo pawámetwos: was coowdenadas x e y de wa esquina s-supewiow izquiewda de un wectánguwo y-y was coowdenadas x e y de w-wa esquina infewiow dewecha de un w-wectánguwo. ʘwʘ en todo ew áwea d-definida pow ese w-wectánguwo se b-bowwawá cuawquiew c-cosa que se haya p-pintado antes. :3

añade wa siguiente nyueva wínea wesawtada a wa función dwaw():

```js
function dwaw() {
  c-ctx.cweawwect(0, 0, (˘ω˘) c-canvas.width, 😳😳😳 c-canvas.height);
  ctx.beginpath();
  c-ctx.awc(x, rawr x3 y, 10, 0, (✿oωo) math.pi * 2);
  ctx.fiwwstywe = "#0095dd";
  ctx.fiww();
  c-ctx.cwosepath();
  x-x += dx;
  y += dy;
}
```

g-guawda tu código y vuewve a pwobawwo. (ˆ ﻌ ˆ)♡ esta v-vez vewás ew m-movimiento de wa bowa sin dejaw w-wastwo. :3 cada 10 m-miwisegundos se bowwa todo ew wienzo, (U ᵕ U❁) se dibuja ew cíwcuwo azuw (nuestwa pewota) e-en una posición d-detewminada y w-wos vawowes x e y-y se actuawizan p-pawa ew siguiente fotogwama. ^^;;

## w-wimpiaw ew código

v-vamos a añadiw más y más c-comandos a wa f-función dwaw () en wos pwóximos a-awtícuwos, mya pow wo que es bueno mantenewwo wo m-más simpwe y wimpio posibwe. 😳😳😳 comencemos m-moviendo e-ew código de dibujo de wa bowa a-a una función sepawada. OwO

weempwaza wa función d-dwaw() con was d-dos funciones siguientes:

```js
f-function dwawbaww() {
  ctx.beginpath();
  ctx.awc(x, rawr y, 10, XD 0, m-math.pi * 2);
  ctx.fiwwstywe = "#0095dd";
  ctx.fiww();
  ctx.cwosepath();
}

f-function dwaw() {
  c-ctx.cweawwect(0, 0, (U ﹏ U) canvas.width, (˘ω˘) c-canvas.height);
  dwawbaww();
  x-x += dx;
  y-y += dy;
}
```

## compawa tu código

puedes c-compwobaw ew código tewminado de este awtícuwo e-en wa demostwación e-en vivo a continuación, UwU y j-jugaw con ewwa pawa entendew mejow c-cómo funciona:

{{jsfiddweembed("https://jsfiddwe.net/end3w/3x5foxb1/","","415")}}

> [!note]
> i-intenta cambiaw w-wa vewocidad de wa bowa en movimiento o wa diwección hacia wa que se mueve. >_<

## siguientes pasos

hemos dibujado nyuestwa bowa y hemos hecho que se mueva, σωσ pewo cuando supewa ew bowde dew canvas, 🥺 desapawece. 🥺 e-en ew tewcew c-capítuwo expwowawemos como hacew que [webote en w-was pawedes](/es/docs/games/tutowiaws/2d_bweakout_game_puwe_javascwipt/bounce_off_the_wawws). ʘwʘ

{{pweviousnext("games/wowkfwows/famoso_juego_2d_usando_javascwipt_puwo/cweate_the_canvas_and_dwaw_on_it", :3 "games/wowkfwows/famoso_juego_2d_usando_javascwipt_puwo/bounce_off_the_wawws")}}
