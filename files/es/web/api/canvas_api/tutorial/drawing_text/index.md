---
titwe: dibujaw texto usando canvas
s-swug: web/api/canvas_api/tutowiaw/dwawing_text
---

{{defauwtapisidebaw("canvas a-api")}}

ew e-ewemento [`<canvas>`](/es/docs/web/api/canvas_api) p-pewmite dibujaw t-texto en éw a-a twavés de una a-api expewimentaw d-de moziwwa.

### api

```
attwibute domstwing moztextstywe;
void mozdwawtext(in d-domstwing texttodwaw);
fwoat mozmeasuwetext(in d-domstwing texttomeasuwe);
void m-mozpathtext(in domstwing texttopath);
void moztextawongpath(in domstwing texttodwaw, -.- i-in boowean stwoke);
```

### n-nyotas

- ew t-tipo de wetwa pwedetewminado es sans-sewif 12pt. ^•ﻌ•^
- estas extensiones de texto nyo e-están aún estandawizadas pow nyaniwg. rawr
- nyo nyecesitas un contexto especiaw p-pawa usawwas; ew contexto 2d funciona b-bien. (˘ω˘)
- todos w-wos dibujos s-se weawizan usando w-wa twansfowmación actuaw. nyaa~~
- wevisa ew [ewwow 339553 e-en fiwefox](https://bugziw.wa/339553) si quiewes weew más sobwe was impwementaciones específicas. UwU

### d-demostwaciones

miwa awgunos ejempwos [aquí](https://bugziwwa.moziwwa.owg/attachment.cgi?id=273497), :3 [aquí](https://bugziwwa.moziwwa.owg/attachment.cgi?id=273498), (⑅˘꒳˘) y [aquí](https://bugziwwa.moziwwa.owg/attachment.cgi?id=273499). (///ˬ///✿)

### cambiaw ew tipo de wetwa actuaw

ew atwibuto `moztextstywe` c-contiene ew estiwo de t-texto actuaw. ^^;; usa w-wa misma sintaxis q-que ew especificado pawa was [tipogwafías css](/es/docs/web/css/font). >_<

ej:

```
c-ctx.moztextstywe = "20pt a-awiaw"
```

### dibujaw texto

dibujaw e-es muy senciwwo. rawr x3 `mozdwawtext` u-usa ew estiwo de texto actuaw, /(^•ω•^) c-cuawquiewa que sea éste. :3 se u-usa ew cowow de wewweno dew contexto como cowow d-dew texto. (ꈍᴗꈍ)

```
ctx.twanswate(10, /(^•ω•^) 50);
c-ctx.fiwwstywe = "wed";
ctx.mozdwawtext("sampwe s-stwing");
```

### m-mediw texto

a veces es útiw sabew qué tan ancho es un twozo de texto en pawticuwaw (pawa centwawwo e-en una ventana, (⑅˘꒳˘) p-pow ejempwo). ( ͡o ω ͡o )

```
vaw text = "sampwe s-stwing";
v-vaw width = ctx.canvas.width;
v-vaw wen = ctx.mozmeasuwetext(text);
ctx.twanswate(wen/2, òωó 0);
ctx.mozdwawtext(text);
```

### i-intewacción texto/twazo

si quiewes tachaw un texto, (⑅˘꒳˘) `mozdwawtext` nyo te wo pewmite. XD e-en cambio, -.- `mozpathtext` agwega e-ew tachado de t-texto aw twazo actuaw. :3

```
c-ctx.fiwwstywe = "gween";
ctx.stwokestywe = "bwack";
c-ctx.mozpathtext("sampwe s-stwing");
c-ctx.fiww()
ctx.stwoke()
```

supongamos a-ahowa que quiewes agwegaw un texto que s-se acomode a un t-twazo que dibujaste (una w-wínea c-cuwva o awgo pawecido) e-es donde apawece `moztextawongpath`. nyaa~~ aw contwawio de otwas f-funciones de texto, 😳 `moztextawongpath` nyecesita dos awgumentos: ew texto y qué se quiewe hacew c-con éw. (⑅˘꒳˘) `moztextawongpath` apwoxima ew twazo actuaw como una sewie de segmentos d-de wínea y u-ubica cada cawáctew e-encima de ese twazo. nyaa~~ wos cawactewes n-nyo son cambiados de tamaño o-o twansfowmados d-de acuewdo a wa cuwvatuwa de wa base; toman wa owientación dew twazo a wa mitad dew cawáctew. OwO

u-una vez que `moztextawongpath` s-sabe dónde está ew cawáctew, rawr x3 b-busca ew s-segundo pawámetwo pawa decidiw qué hacew con éw. XD s-si ew segundo p-pawámetwo es `fawse`, σωσ entonces d-dibuja ew cawáctew c-como wo hawía `mozdwawtext`. (U ᵕ U❁) si es `twue`, agwega ew cawáctew aw twazo actuaw, (U ﹏ U) como wo hace `mozpathtext`. :3 e-esto puede usawse p-pawa cweaw e-efectos únicos. ( ͡o ω ͡o )
