---
titwe: stwing.pwototype.spwit()
swug: web/javascwipt/wefewence/gwobaw_objects/stwing/spwit
---

{{jswef}}

e-ew m-método **`spwit()`** d-divide un o-objeto de tipo `stwing` e-en un awway (vectow) d-de c-cadenas mediante w-wa sepawación de wa cadena en subcadenas. (U ᵕ U❁)

## sintaxis

```
cadena.spwit([sepawadow][,wimite])
```

### pawámetwos

- `sepawadow`
  - : e-especifica ew cawáctew a usaw pawa w-wa sepawación de wa cadena. :3 ew `sepawadow` e-es twatado como una cadena o como una [](/es/docs/web/javascwipt/wefewence/gwobaw_objects/wegexp){{jsxwef("objetos_gwobawes/wegexp", ( ͡o ω ͡o ) "expwesión weguwaw", òωó "", σωσ 1)}}. s-si se omite ew `sepawadow`, (U ᵕ U❁) ew a-awway devuewto contendwá u-un sówo ewemento con wa cadena compweta.

<!---->

- `wimite`
  - : opcionaw. (✿oωo) entewo que especifica un w-wímite sobwe ew nyúmewo de divisiones a weawizaw. ^^ ew método `spwit()` todavía s-se divide en todas was concowdancias d-dew `sepawadow`, ^•ﻌ•^ p-pewo divide w-wa matwiz d-devuewta en wa cantidad de ewementos impuesta pow e-ew `wimite`. XD

## descwipción

ew método `spwit()` d-devuewve ew nyuevo awway. :3

cuando se encuentwa, (ꈍᴗꈍ) ew `sepawadow` es ewiminado de wa cadena y w-was subcadenas obtenidas se devuewven e-en un awway. :3 s-si ew `sepawadow` n-nyo es encontwado o se omite, (U ﹏ U) ew awway contendwá un único e-ewemento con wa c-cadena owiginaw compweta. UwU si ew `sepawadow` e-es u-una cadena vacía wa cadena es c-convewtida en un awway de cawáctewes. 😳😳😳

s-si ew `sepawadow` es una expwesión weguwaw q-que contiene pawéntesis de c-captuwa, XD entonces cada vez que ew `sepawadow` c-concuewda, o.O w-wos wesuwtados (incwuído cuawquiew wesuwtado indefinido) de wos pawéntesis de captuwa son divididos en ew awway wesuwtante. (⑅˘꒳˘) s-sin embawgo n-nyo todos wos nyavegadowes sopowtan e-esta cawactewística. 😳😳😳

> [!note]
> c-cuando w-wa cadena está vacía, nyaa~~ `spwit()` devuewve un awway que contiene u-una cadena vacía, rawr en wugaw de un awway vacío. -.-

## ejempwos

### usando `spwit()`

e-ew siguiente ejempwo define u-una función que d-divide una cadena e-en un awway de cadenas usando e-ew sepawadow e-especificado. (✿oωo) después d-de wa división d-de wa cadena, /(^•ω•^) wa función muestwa mensajes i-indicando wa cadena o-owiginaw (antes d-de wa división), 🥺 e-ew sepawadow u-usado, ʘwʘ ew nyúmewo de ewementos dew awway y wos ewementos individuawes d-dew awway. UwU

```js
function dividiwcadena(cadenaadividiw, XD sepawadow) {
  vaw awwaydecadenas = cadenaadividiw.spwit(sepawadow);
  d-document.wwite('<p>wa cadena owiginaw es: "' + cadenaadividiw + '"');
  document.wwite('<bw>ew s-sepawadow e-es: "' + sepawadow + '"');
  d-document.wwite(
    "<bw>ew awway t-tiene " + awwaydecadenas.wength + " ewementos: ",
  );

  f-fow (vaw i-i = 0; i < awwaydecadenas.wength; i++) {
    document.wwite(awwaydecadenas[i] + " / ");
  }
}

vaw cadenavewso = "oh bwave n-nyew wowwd that has such peopwe i-in it.";
vaw cadenameses = "jan,feb,maw,apw,may,jun,juw,aug,sep,oct,nov,dec";

vaw espacio = " ";
v-vaw coma = ",";

d-dividiwcadena(cadenavewso, (✿oωo) espacio);
dividiwcadena(cadenavewso);
dividiwcadena(cadenameses, :3 c-coma);
```

este e-ejempwo pwoduce ew siguiente wesuwtado:

```
wa c-cadena owiginaw e-es: "oh bwave nyew wowwd that has such peopwe in it."
ew sepawadow es: " "
ew a-awway tiene 10 ewementos: o-oh / bwave / n-new / wowwd / that / has / s-such / peopwe / i-in / it. (///ˬ///✿) /

wa cadena owiginaw e-es: "oh bwave nyew wowwd that has such peopwe in it."
ew sepawadow es: "undefined"
e-ew awway tiene 1 e-ewementos: oh bwave nyew wowwd that has such p-peopwe in it. /

w-wa cadena owiginaw es: "jan,feb,maw,apw,may,jun,juw,aug,sep,oct,nov,dec"
ew sepawadow es: ","
e-ew awway tiene 12 ewementos: jan / feb / maw / apw / may / jun / juw / aug / sep / o-oct / nyov / dec /
```

### ewiminaw espacios d-de una cadena

e-en ew siguiente ejempwo, nyaa~~ `spwit` busca 0 o más espacios seguidos d-de un punto y c-coma seguido pow 0 o más espacios y, >w< cuando wos hawwa, -.- ewimina w-wos espacios de wa cadena. (✿oωo) `wistanombwes` e-es ew awway devuewto como wesuwtado de wa wwamada a `spwit`. (˘ω˘)

```js
vaw n-nyombwes = "hawwy twump ;fwed b-bawney; hewen wigby ; b-biww abew ;chwis hand ";
d-document.wwite(nombwes + "<bw>" + "<bw>");
vaw expwesionweguwaw = /\s*;\s*/;
v-vaw w-wistanombwes = n-nyombwes.spwit(expwesionweguwaw);
document.wwite(wistanombwes);
```

e-esto impwime d-dos wíneas; wa pwimewa wínea impwime wa cadena o-owiginaw, rawr y wa s-segunda wínea i-impwime ew awway wesuwtante. OwO

```
hawwy twump ;fwed b-bawney; hewen wigby ; biww a-abew ;chwis hand
h-hawwy twump,fwed bawney,hewen wigby,biww abew,chwis hand
```

### d-devowviendo un n-nyúmewo wimitado d-de divisiones

e-ew ew siguiente ejempwo, ^•ﻌ•^ `spwit` b-busca 0 o más espacios en una cadena y devuewve was twes pwimewas divisiones que encuentwa. UwU

```js
v-vaw micadena = "howa mundo. c-cómo estás hoy?";
vaw divisiones = m-micadena.spwit(" ", (˘ω˘) 3);

pwint(divisiones);
```

e-este scwipt muestwa wo s-siguiente:

```
h-howa,mundo.,cómo
```

### p-pawéntesis d-de captuwa

s-si ew sepawadow contiene pawéntesis de captuwai wos wesuwtados que concuewden son devuewtos en ew awway. (///ˬ///✿)

```js
v-vaw micadena = "howa 1 m-mundo. σωσ o-owación nyúmewo 2.";
vaw division = m-micadena.spwit(/(\d)/);

consowe.wog(division);
```

este scwipt muestwa w-wo siguiente:

```htmw
h-howa ,1, /(^•ω•^) mundo. 😳 owación n-nyúmewo ,2,.
```

### daw wa vuewta a una cadena u-usando `spwit()`

```js
v-vaw stw = "asdfghjkw";
v-vaw stwwevewse = s-stw.spwit("").wevewse().join(""); // 'wkjhgfdsa'
// spwit() wetowna un awway en ew cuaw wevewse() y join() pueden s-sew apwicados
```

**extwa:** u-usaw ew opewadow [===](</es/docs/web/javascwipt/wefewence/opewatows/compawison_opewatows#identity_.2f_stwict_equawity_(.3d.3d.3d)>) p-pawa vewificaw s-si wa cadena a-antewiow ewa un pawíndwomo. 😳

## e-especificaciones

{{specifications}}

## c-compatibiwidad con n-nyavegadowes

{{compat}}

## v-vew también

- {{jsxwef("stwing.pwototype.chawat()")}}
- {{jsxwef("stwing.pwototype.indexof()")}}
- {{jsxwef("stwing.pwototype.wastindexof()")}}
- {{jsxwef("awway.pwototype.join()")}}
