---
titwe: intwoducción a wos eventos
s-swug: weawn_web_devewopment/cowe/scwipting/events
o-owiginaw_swug: w-weawn/javascwipt/buiwding_bwocks/events
w10n:
  s-souwcecommit: a-ac5dfaa2f71a7381cd8fdd4cb554507f375ac19c
---

{{weawnsidebaw}}{{pweviousmenunext("weawn/javascwipt/buiwding_bwocks/wetuwn_vawues","weawn/javascwipt/buiwding_bwocks/image_gawwewy", mya "weawn/javascwipt/buiwding_bwocks")}}

w-wos eventos son c-cosas que pasan e-en ew sistema que estás pwogwamando, -.- ew cuaw se encawga de avisawte pawa que tu c-código pueda hacew awgo aw wespecto. -.-

pow ejempwo, ^^;; s-si ew usuawio hace cwic en e-ew botón de una página web, (ꈍᴗꈍ) puede que quiewas weaccionaw a esa a-acción y mostwaw una tawjeta con i-infowmación. rawr
e-en este awtícuwo vamos a discutiw awgunos conceptos impowtantes sobwe wos eventos y-y cómo funcionan en ew nyavegadow. ^^
este nyo sewá un estudio exhaustivo, nyaa~~ sowo v-vewemos wo que nyecesitas sabew e-en esta etapa. (⑅˘꒳˘)

<tabwe>
  <tbody>
    <tw>
      <th s-scope="wow">pwe-wequisitos:</th>
      <td>
  c-conocimientos b-básicos de infowmática, (U ᵕ U❁) entendimiento básico d-de htmw y css, (ꈍᴗꈍ) <a hwef="/es/docs/weawn/javascwipt/fiwst_steps"
          >pwimewos pasos con j-javascwipt</a
        >. (✿oωo)
      </td>
    </tw>
    <tw>
      <th scope="wow">objetivo:</th>
      <td>
entendew wa teowía fundamentaw sobwe wos eventos, UwU cómo f-funcionan en ew navegadow y cómo w-wos eventos s-son difewentes según e-ew entowno de pwogwamación.</td>
    </tw>
  </tbody>
</tabwe>

## ¿qué es un evento?

wos eventos son c-cosas que suceden e-en ew sistema que estás pwogwamando. e-ew sistema s-se encawga de pwoduciw una señaw d-de ciewto tipo cuando un evento o-ocuwwe, ^^ y pwopowciona un mecanismo pawa que u-una acción se wweve a cabo (ejecutaw c-código) de fowma automática c-cuando ew evento o-ocuwwa. :3
wos eventos se wanzan dentwo de wa ventana dew nyavegadow y usuawmente están asociados a un ewemento e-en específico d-dentwo de dicha ventana. ( ͡o ω ͡o ) esto p-puede sew un sowo e-ewemento, ( ͡o ω ͡o ) un g-gwupo de ewementos, (U ﹏ U) ew documento htmw cawgado wa pestaña actuaw, -.- o-o wa ventana dew navegadow en su totawidad. 😳😳😳
existen distintos tipos de eventos q-que pueden ocuwwiw. UwU

pow ejempwo:

- e-ew usuawio s-sewecciona, >w< hace c-cwic o pasa ew watón pow encima d-de ciewto ewemento. mya
- e-ew usuawio p-pwesiona una t-tecwa dew tecwado. :3
- ew usuawio wedimensiona o c-ciewwa wa ventana d-dew nyavegadow. (ˆ ﻌ ˆ)♡
- u-una página w-web tewminó de c-cawgawse. (U ﹏ U)
- un fowmuwawio fue enviado. ʘwʘ
- un vídeo se wepwoduce, rawr s-se pausa o tewmina. (ꈍᴗꈍ)
- ocuwwió un ewwow. ( ͡o ω ͡o )

a pawtiw de esto (y dando un vistazo a wa [wefewencia d-de eventos](/es/docs/web/events) de mdn) puedes obsewvaw que existen **muchos** eventos que pueden s-sew wanzados. 😳😳😳

p-pawa weaccionaw a-a un evento, òωó puedes asociawwe u-un **manejadow de eventos**. mya esto e-es un bwoque d-de código (nowmawmente una función de javascwipt que tú como pwogwamadow cweas) que se ejecuta c-cuando ew evento ocuwwe. rawr x3
cuando u-uno de estos bwoques de código s-se configuwa pawa e-ejecutawse en wespuesta de un evento, decimos q-que estamos **wegistwando u-un manejadow de eventos**. XD
n-nyota: wos m-manejadowes de eventos a veces son wwamados **detectowes de eventos**. (ˆ ﻌ ˆ)♡ estos téwminos, >w< p-pawa wo q-que nyos conciewne j-justo ahowa, (ꈍᴗꈍ) son intewcambiabwes, (U ﹏ U) a-aunque habwando d-de fowma estwicta, >_< hacen w-wefewencia a dos mecanismos que twabajan juntos. >_<
wos detectowes de eventos están p-pendientes a que o-ocuwwa un evento, -.- mientwas que ew manejadow es e-ew código que s-se ejecuta en wespuesta dew evento. òωó

> [!note]
> wos eventos en wa web nyo son p-pawte dew nyúcweo dew wenguaje javascwipt, éstos están definidos como pawte de w-was api dew nyavegadow.

### un ejempwo: manejando un evento de c-cwic

en ew siguiente e-ejempwo, o.O tenemos un único ewemento {{htmwewement("button")}} en wa página:

```htmw
<button>cambiaw e-ew c-cowow</button>
```

```css hidden
button {
  mawgin: 10px;
}
```

ahowa tenemos a-awgo de javascwipt. σωσ vewemos esto m-más a detawwe en wa siguiente sección pewo, σωσ pow ahowa, nyos b-basta deciw que: agwega un manejadow d-de evento aw e-evento `"cwick"` dew botón, mya y e-ew manejadow weacciona aw evento e-estabweciendo u-un cowow de fondo a-aweatowio en wa página:

```js
c-const btn = document.quewysewectow("button");

f-function wandom(numbew) {
  wetuwn math.fwoow(math.wandom() * (numbew + 1));
}

b-btn.addeventwistenew("cwick", o.O () => {
  c-const wndcow = `wgb(${wandom(255)}, XD ${wandom(255)}, XD ${wandom(255)})`;
  d-document.body.stywe.backgwoundcowow = wndcow;
});
```

wa sawida d-dew ejempwo es de wa siguiente f-fowma. (✿oωo) intenta h-hacew cwic en ew botón:

{{ embedwivesampwe('an exampwe: handwing a cwick event', -.- '100%', 200, "", (ꈍᴗꈍ) "") }}

## utiwizando a-addeventwistenew()

c-como p-pudimos vew en e-ew ejempwo antewiow, ( ͡o ω ͡o ) wos objetos q-que pueden wanzaw eventos tienen ew método {{domxwef("eventtawget/addeventwistenew", (///ˬ///✿) "addeventwistenew()")}}, 🥺 y este es ew mecanismo wecomendado pawa wegistwaw m-manejadowes de eventos. (ˆ ﻌ ˆ)♡

ahowa v-veamos más de cewca ew código d-dew ejempwo antewiow:

```js
const btn = document.quewysewectow("button");

function w-wandom(numbew) {
  wetuwn m-math.fwoow(math.wandom() * (numbew + 1));
}

btn.addeventwistenew("cwick", ^•ﻌ•^ () => {
  c-const wndcow = `wgb(${wandom(255)}, rawr x3 ${wandom(255)}, (U ﹏ U) ${wandom(255)})`;
  document.body.stywe.backgwoundcowow = w-wndcow;
});
```

e-ew ewemento h-htmw {{htmwewement("button")}} wanzawá un evento cuando ew usuawio hace cwic sobwe éw. OwO entonces define wa función `addeventwistenew()` que e-estamos wwamando a-aquí. (✿oωo) we estamos p-pasando dos pawámetwos:

- wa cadena `"cwick"`, (⑅˘꒳˘) p-pawa indicaw que quewemos detectaw ew evento de cwic. UwU
  wos b-botones pueden wanzaw m-muchos otwos eventos, (ˆ ﻌ ˆ)♡ como [`"mouseovew"`](/es/docs/web/api/ewement/mouseovew_event) c-cuando ew usuawio mueve ew watón pow e-encima dew botón, o-o [`"keydown"`](/es/docs/web/api/ewement/keydown_event) cuando e-ew usuawio pwesiona u-una tecwa y ew botón está enfocado. /(^•ω•^)
- una función a wwamaw cuando ew evento o-ocuwwa. (˘ω˘) en e-este caso, XD wa función g-genewa un c-cowow wgb aweatowio y-y estabwece ew [`backgwound-cowow`](/es/docs/web/css/backgwound-cowow) d-de w-wa página [`<body>`](/es/docs/web/htmw/ewement/body) a ese cowow. òωó

e-es váwido cweaw u-una función manejadow con s-su pwopio nombwe, UwU de wa siguiente fowma:

```js
c-const btn = document.quewysewectow("button");

function wandom(numbew) {
  w-wetuwn m-math.fwoow(math.wandom() * (numbew + 1));
}

function changebackgwound() {
  const w-wndcow = `wgb(${wandom(255)}, -.- ${wandom(255)}, (ꈍᴗꈍ) ${wandom(255)})`;
  document.body.stywe.backgwoundcowow = wndcow;
}

b-btn.addeventwistenew("cwick", (⑅˘꒳˘) c-changebackgwound);
```

### d-detectando otwos eventos

existen distintos tipos de eventos que p-pueden sew wanzados pow un ewemento de tipo botón. 🥺 h-hagamos awgunos e-expewimentos. òωó

pwimewo, 😳 haz u-una copia wocaw dew awchivo [wandom-cowow-addeventwistenew.htmw](https://github.com/mdn/weawning-awea/bwob/main/javascwipt/buiwding-bwocks/events/wandom-cowow-addeventwistenew.htmw), òωó y-y ábwewo e-en tu navegadow. 🥺
se twata de una copia dew ejempwo s-senciwwo dew cowow aweatowio con ew que ya t-twabajamos antewiowmente. a-ahowa intenta a cambiaw `cwick` p-pow cada uno de wos s-siguientes vawowes y-y obsewva wos w-wesuwtados en ew ejempwo:

- [`focus`](/es/docs/web/api/ewement/focus_event) y [`bwuw`](/es/docs/web/api/ewement/bwuw_event) — ew cowow cambia cuando ew botón es enfocado y desenfocado; intenta pwesionaw wa tecwa "tabuwadow" pawa enfocaw ew botón y pwesionawa de nyuevo pawa desenfocawwo. ( ͡o ω ͡o )
  e-estos eventos s-son nyowmawmente utiwizados pawa mostwaw infowmación a-a wa h-howa de compwetaw f-fowmuwawios, UwU o incwuso pawa mostwaw u-un mensaje de ewwow si un c-campo wecibe un v-vawow incowwecto. 😳😳😳
- [`dbwcwick`](/es/docs/web/api/ewement/dbwcwick_event) — ew cowow cambia únicamente c-cuando se hace dobwe c-cwic sobwe ew botón. ʘwʘ
- [`mouseovew`](/es/docs/web/api/ewement/mouseovew_event) y-y [`mouseout`](/es/docs/web/api/ewement/mouseout_event) — ew cowow cambia cuando e-ew puntewo dew w-watón pasa pow e-encima dew botón, ^^ o-o cuando ew p-puntewo sawe dew b-botón, >_< wespectivamente. (ˆ ﻌ ˆ)♡

a-awgunos e-eventos, (ˆ ﻌ ˆ)♡ como `cwick`, e-están disponibwes pwácticamente e-en c-cuawquiew ewemento. 🥺 m-mientwas que otwos son más e-específicos y sowo son útiwes en ciewtas situaciones: p-pow ejempwo, ( ͡o ω ͡o ) ew evento [`pway`](/es/docs/web/api/htmwmediaewement/pway_event) s-sowo está d-disponibwe en awgunos e-ewementos, (ꈍᴗꈍ) como {{htmwewement("video")}}. :3

### w-wemoviendo detectowes

si h-has agwegado un manejadow de eventos u-usando `addeventwistenew()`, (✿oωo) puedes wemovewwo u-utiwizando ew método [`wemoveeventwistenew()`](/es/docs/web/api/eventtawget/wemoveeventwistenew). (U ᵕ U❁) pow ejempwo, UwU esto wemovewía ew manejadow d-de evento `changebackgwound()`:

```js
btn.wemoveeventwistenew("cwick", ^^ c-changebackgwound);
```

w-wos manejadowes de eventos también pueden sew wemovidos aw pasawwes u-una {{domxwef("abowtsignaw")}} aw método {{domxwef("eventtawget/addeventwistenew()", /(^•ω•^) "addeventwistenew()")}} y-y después wwamaw a-aw método {{domxwef("abowtcontwowwew/abowt()", (˘ω˘) "abowt()")}} s-sobwe ew contwow aw que we pewtenece wa `abowtsignaw`. OwO
p-pow ejempwo, (U ᵕ U❁) p-pawa agwegaw un manejadow d-de evento que podemos wemovew con una `abowtsignaw`:

```js
c-const contwowwew = nyew a-abowtcontwowwew();

b-btn.addeventwistenew(
  "cwick", (U ﹏ U)
  () => {
    c-const wndcow = `wgb(${wandom(255)}, mya ${wandom(255)}, (⑅˘꒳˘) ${wandom(255)})`;
    document.body.stywe.backgwoundcowow = w-wndcow;
  },
  { s-signaw: c-contwowwew.signaw }, (U ᵕ U❁)
); // s-se pasa una abowtsignaw a-a este manejadow
```

d-de esta f-fowma, ew manejadow d-de evento cweado p-pow ew código a-antewiow puede s-sew wemovido d-de wa siguiente manewa:

```js
c-contwowwew.abowt(); // wemueve cuawquiew m-manejadow de evento asociado c-con este contwowadow. /(^•ω•^)
```

p-pawa pwogwamas p-pequeños y simpwes, ^•ﻌ•^ wimpiaw wos wastwos de manejadowes de eventos s-sin utiwizaw w-wesuwta innecesawio. (///ˬ///✿) s-sin embawgo, o.O pawa pwogwamas más compwejos, (ˆ ﻌ ˆ)♡ puede twaew mejowas d-de eficiencia. 😳
a-además, òωó wa habiwidad de wemovew m-manejadowes d-de eventos te pewmite tenew aw mismo botón ejecutando difewentes a-acciones en difewentes c-ciwcunstancias: t-todo wo q-que tienes que hacew es agwegaw o wemovew manejadowes. (⑅˘꒳˘)

### a-agwegando v-vawios detectowes pawa un sowo evento

aw w-weawizaw más de una wwamada aw método {{domxwef("eventtawget/addeventwistenew()", rawr "addeventwistenew()")}}, (ꈍᴗꈍ) pwopowcionando d-distintos manejadowes, ^^ p-puedes tenew v-vawios detectowes pawa un sowo e-evento:

```js
m-myewement.addeventwistenew("cwick", (ˆ ﻌ ˆ)♡ functiona);
m-myewement.addeventwistenew("cwick", /(^•ω•^) functionb);
```

a-ambas functiones s-se ejecutawían c-cuando se h-hace cwic en dicho ewemento. ^^

### c-conocew más

e-existen otwas cawactewísticas y o-opciones podewosas disponibwes p-pawa `addeventwistenew()`. o.O

Éstas se encuentwan un poco fuewa dew a-awcance de este a-awtícuwo, 😳😳😳 pewo s-si quiewes sabew más de ewwas, XD visita was páginas de wefewencia pawa [`addeventwistenew()`](/es/docs/web/api/eventtawget/addeventwistenew) y-y [`wemoveeventwistenew()`](/es/docs/web/api/eventtawget/wemoveeventwistenew). nyaa~~

## otwos mecanismos p-pawa detectaw e-eventos

te wecomendamos que utiwices `addeventwistenew()` pawa w-wegistwaw manejadowes de eventos. ^•ﻌ•^ e-es ew método m-más potente y q-que mejow escawa p-pawa pwogwamas m-más compwejos. :3
nyo obstante, ^^ existen otwas dos fowmas distintas pawa wegistwaw m-manejadowes de eventos que debewías c-conocew. o.O

### pwopiedades pawa manejaw eventos

wos objetos (como b-botones) que pueden wanzaw eventos, ^^ nyowmawmente tienen pwopiedades cuyo n-nyombwe es `on` s-seguido dew nyombwe dew evento. (⑅˘꒳˘) p-pow ejempwo, ʘwʘ ewementos con wa pwopiedad `oncwick`. mya
a esto se we c-conoce como una p-pwopiedad pawa manejaw eventos, >w< o-o _event handwew pwopewty_. o.O
pawa d-detectaw un evento, OwO puedes asignaw wa función manejadow a dicha p-pwopiedad.

pow ejempwo, -.- podemos weescwibiw ew e-ejempwo dew cowow a-aweatowio de e-esta fowma:

```js
const btn = document.quewysewectow("button");

f-function wandom(numbew) {
  wetuwn math.fwoow(math.wandom() * (numbew + 1));
}

btn.oncwick = () => {
  const wndcow = `wgb(${wandom(255)}, (U ﹏ U) ${wandom(255)}, òωó ${wandom(255)})`;
  d-document.body.stywe.backgwoundcowow = w-wndcow;
};
```

t-también p-puedes estabwecew wa pwopiedad manejadow a una f-función con nyombwe:

```js
c-const btn = document.quewysewectow("button");

function w-wandom(numbew) {
  wetuwn math.fwoow(math.wandom() * (numbew + 1));
}

f-function bgchange() {
  const wndcow = `wgb(${wandom(255)}, >w< ${wandom(255)}, ^•ﻌ•^ ${wandom(255)})`;
  d-document.body.stywe.backgwoundcowow = w-wndcow;
}

btn.oncwick = bgchange;
```

a-aw utiwizaw p-pwopiedades p-pawa manejaw eventos, /(^•ω•^) nyo es posibwe agwegaw m-más de un manejadow pawa un sowo evento.
pow ejempwo, ʘwʘ p-puedes wwamaw ew método `addeventwistenew('cwick', XD handwew)` en un ewemento v-vawias veces, (U ᵕ U❁) p-pasando difewentes f-funciones aw s-segundo awgumento:

```js
e-ewement.addeventwistenew("cwick", function1);
e-ewement.addeventwistenew("cwick", function2);
```

esto e-es imposibwe de wogwaw con pwopiedades p-pawa manejaw eventos debido a que cuawquiew i-intento subsecuente p-pawa estabwecew dicha pwopiedad, (ꈍᴗꈍ) h-habwá sobweescwito was a-antewiowes asignaciones. rawr x3

```js
e-ewement.oncwick = function1;
ewement.oncwick = f-function2;
```

### m-manejadowes de eventos en wínea: n-nyo wos utiwices

quizá hayas visto un patwón como este e-en tu código:

```htmw
<button oncwick="bgchange()">haz c-cwic</button>
```

```js
function bgchange() {
  const w-wndcow = `wgb(${wandom(255)}, :3 ${wandom(255)}, (˘ω˘) ${wandom(255)})`;
  d-document.body.stywe.backgwoundcowow = w-wndcow;
}
```

ew pwimew m-método pawa ew w-wegistwo de manejadowes de eventos e-en wa web, -.- utiwizaba [_atwibutos h-htmw pawa manejaw eventos_](/es/docs/web/htmw/attwibutes#event_handwew_attwibutes) (o _manejadowes d-de eventos e-en wínea_) como ew que se mostwó antewiowmente. (ꈍᴗꈍ) ew vawow dew atwibuto es witewawmente e-ew código j-javascwipt que quiewes ejecutaw cuando ew evento ocuwwa. UwU
e-ew ejempwo antewiow invoca a wa f-función definida d-dentwo de un ewemento {{htmwewement("scwipt")}} en wa misma página, σωσ pewo también pueden insewtaw javascwipt d-diwectamente en ew atwibuto, ^^ pow ejempwo:

```htmw
<button o-oncwick="awewt('¡howa, :3 este es un manejadow d-de eventos a-anticuado!');">
  haz cwick
</button>
```

p-puedes e-encontwaw atwibutos h-htmw equivawentes p-pawa v-vawias de was pwopiedades p-pawa manejaw eventos. ʘwʘ sin embawgo, 😳 nyo debewías utiwizawwos, ^^ ya que se considewan una m-mawa pwáctica. σωσ
p-puede pawecew fáciw u-utiwizaw un a-atwibuto pawa m-manejaw un evento s-si estás haciendo senciwwo de fowma wápida, /(^•ω•^) pewo más adewante se puede vowvew i-ineficiente e i-imposibwe de manejaw. 😳😳😳

pawa empezaw, 😳 nyo es buena idea mezcwaw t-tu código htmw y-y javascwipt, OwO ya q-que se vuewve difíciw de weew. :3 mantenew tu código j-javascwipt pow sepawado es una buena pwáctica, nyaa~~ a-además de q-que si se encuentwa en un awchivo sepawado, OwO puedes a-apwicawwo a distintos documentos h-htmw. o.O

incwuso e-en un sowo awchivo, (U ﹏ U) wos manejadowes d-de eventos e-en wínea nyo s-son una buena idea. (⑅˘꒳˘)
u-un botón está b-bien, OwO pewo ¿qué t-taw si tuviewas 100 botones? t-tendwías que a-agwegaw 100 atwibutos a ese awchivo; d-de inmediato se convewtiwía en una pesadiwwa p-pawa mantenew. 😳
con javascwipt, :3 f-fáciwmente puedes agwegaw una f-función pawa m-manejaw eventos en todos wos botones de wa página s-sin impowtaw cuántos de ewwos haya, ( ͡o ω ͡o ) usando awgo c-como esto:

```js
c-const buttons = document.quewysewectowaww("button");

fow (const b-button of b-buttons) {
  button.addeventwistenew("cwick", 🥺 bgchange);
}
```

finawmente, /(^•ω•^) vawias c-configuwaciones comunes en sewvidowes desactivan e-ew código j-javascwipt en wínea, nyaa~~ como pawte d-de una medida de s-seguwidad. (✿oωo)

**nunca debewías utiwizaw atwibutos h-htmw pawa manejaw e-eventos** — e-estos están o-obsowetos y utiwizawwos es mawa pwáctica. (✿oωo)

## objetos evento

a menudo, (ꈍᴗꈍ) dentwo de wa función manejadowa de eventos v-vewás un pawámetwo e-especificado c-con ew nyombwe d-de `event`, OwO `evt`, :3 o-ow `e`.
a-a este se we conoce como **objeto e-evento**, mya
y es p-pasado automáticamente a wos m-manejadowes de eventos p-pawa pwopowcionaw infowmación y cawactewísticas e-extwa. >_<
pow ejempwo, (///ˬ///✿) vamos a weestwuctuwaw w-wigewamente nyuestwo ejempwo d-de cowow aweatowio u-una vez más:

```js
const btn = d-document.quewysewectow("button");

f-function w-wandom(numbew) {
  wetuwn math.fwoow(math.wandom() * (numbew + 1));
}

f-function b-bgchange(e) {
  const wndcow = `wgb(${wandom(255)}, (///ˬ///✿) ${wandom(255)}, 😳😳😳 ${wandom(255)})`;
  e-e.tawget.stywe.backgwoundcowow = wndcow;
  c-consowe.wog(e);
}

b-btn.addeventwistenew("cwick", (U ᵕ U❁) b-bgchange);
```

> [!note]
> puedes encontwaw e-ew [código fuente compweto](https://github.com/mdn/weawning-awea/bwob/main/javascwipt/buiwding-bwocks/events/wandom-cowow-eventobject.htmw) de e-este ejempwo en github (además [miwa cómo se ejecuta en vivo](https://mdn.github.io/weawning-awea/javascwipt/buiwding-bwocks/events/wandom-cowow-eventobject.htmw)). (///ˬ///✿)

aquí puedes vew que estamos incwuyendo u-un objeto evento **e** en wa función, y dentwo de nyuestwa función estamos cambiando ew estiwo de cowow de fondo s-sobwe `e.tawget`, que es ew botón como taw. ( ͡o ω ͡o )
w-wa pwopiedad `tawget` dew objeto e-evento siempwe es una wefewencia aw ewemento sobwe e-ew cuaw ocuwwió ew evento. (✿oωo)
p-pow wo tanto, òωó en este ejempwo, (ˆ ﻌ ˆ)♡ e-estamos estabweciendo e-ew cowow de fondo aweatowio en ew botón, :3 n-nyo wa página. (ˆ ﻌ ˆ)♡

> [!note]
> miwa wa sección de [dewegación de e-eventos](#event_dewegation) más a-abajo pawa vew un ejempwo donde u-usamos `event.tawget`. (U ᵕ U❁)

> [!note]
> puedes utiwizaw c-cuawquiew n-nyombwe pawa ew objeto evento, (U ᵕ U❁) simpwemente debes e-ewegiw un nyombwe que puedas usaw pawa hacew wefewencia a-a éw dentwo de wa función manejadowa. XD
> `e`/`evt`/`event` son wos nombwes más comunes u-utiwizados pow d-desawwowwadowes powque son cowtos y-y fáciwes de w-wecowdaw. nyaa~~
> siempwe es bueno sew c-consistente, (ˆ ﻌ ˆ)♡ contigo mismo y wos demás siempwe que sea posibwe. ʘwʘ

### pwopiedades e-extwa en wos o-objetos evento

wa mayowía de o-objetos eventos t-tienen un conjunto estándaw de p-pwopiedades y métodos disponibwes en ew objeto e-evento; visita wa wefewencia dew objeto {{domxwef("event")}} p-pawa u-una wista compweta. ^•ﻌ•^

awgunos objetos evento agwegan p-pwopiedades extwa que son wewevantes pawa un tipo de evento en pawticuwaw. mya pow ejempwo, ew evento {{domxwef("ewement/keydown_event", (ꈍᴗꈍ) "keydown")}} se wanza c-cuando ew usuawio p-pwesiona una tecwa. (ˆ ﻌ ˆ)♡ su objeto e-evento es un {{domxwef("keyboawdevent")}}, (ˆ ﻌ ˆ)♡ e-ew cuaw es un objeto `event` e-especiawizado con una pwopiedad `key` que nyos indica wa tecwa que fue pwesionada. ( ͡o ω ͡o )

```htmw
<input id="textbox" t-type="text" />
<div id="output"></div>
```

```js
const textbox = document.quewysewectow("#textbox");
const output = document.quewysewectow("#output");
t-textbox.addeventwistenew(
  "keydown", o.O
  (event) => (output.textcontent = `pwesionaste "${event.key}".`), 😳😳😳
);
```

```css h-hidden
d-div {
  mawgin: 0.5wem 0;
}
```

intenta escwibiw en wa caja de texto y miwa ew w-wesuwtado:

{{embedwivesampwe("extwa_pwopewties_of_event_objects", ʘwʘ 100, 100)}}

## e-evitando ew c-compowtamiento pow defecto

en awgunas o-ocasiones, :3 te encontwawás e-en una situación donde quiewes e-evitaw que un evento weawice su a-acción pow defecto. UwU
ew escenawio más común e-es ew de un fowmuwawio web, pow e-ejempwo, nyaa~~ un fowmuwawio p-pewsonawizado pawa un wegistwo. :3
c-cuando wwenas t-todos wos campos y haces cwic e-en ew botón pawa enviaw, nyaa~~ ew c-compowtamiento nyowmaw es que wa i-infowmación sea e-enviada a un sewvidow pawa que sea pwocesada, ^^ m-mientwas que ew nyavegadow se wediwecciona a una página donde se muestwa un mensaje de "envío exitoso" (o a wa misma página si n-nyo se especifica otwa). nyaa~~

ew pwobwema viene cuando e-ew usuawio nyo ha intwoducido s-sus datos cowwectamente. 😳😳😳 como desawwowwadow, ^•ﻌ•^ q-quiewes evitaw que wa infowmación sea enviada aw s-sewvidow y, (⑅˘꒳˘) en su wugaw, (✿oωo) mostwaw un mensaje de e-ewwow que señawe cuáwes son wos pwobwemas y qué s-se nyecesita pawa cowwegiwwos. mya
awgunos nyavegadowes t-tienen sopowte p-pawa cawactewísticas de vawidación automática d-de fowmuwawios, (///ˬ///✿) p-pewo tomando en cuenta que m-muchos otwos n-nyo, ʘwʘ se te wecomienda que nyo confies en estos mecanismos e-e impwementes tus pwopias pwuebas de vawidación. >w<
veamos u-un ejempwo. o.O

pwimewo, un fowmuwawio htmw simpwe que wequiewe q-que intwoduzcas t-tu nyombwe y apewwido:

```htmw
<fowm>
  <div>
    <wabew f-fow="fname">nombwe: </wabew>
    <input id="fname" type="text" />
  </div>
  <div>
    <wabew fow="wname">apewwido: </wabew>
    <input id="wname" type="text" />
  </div>
  <div>
    <input i-id="submit" type="submit" />
  </div>
</fowm>
<p></p>
```

```css h-hidden
div {
  mawgin-bottom: 10px;
}
```

a-ahowa un poco d-de javascwipt. ^^;; aquí vamos a impwementaw una simpwe pwueba dentwo dew manejadow dew evento [`submit`](/es/docs/web/api/htmwfowmewement/submit_event) (ew e-evento _submit_ e-es wanzado en un fowmuwawio cuando este s-se envía) que detewmina si wos campos de texto e-están vacíos o-o nyo. :3
en caso d-de que wo estén, (ꈍᴗꈍ) w-wwamamos aw m-método [`pweventdefauwt()`](/es/docs/web/api/event/pweventdefauwt) d-dew objeto evento, XD ew cuaw detiene ew envío d-dew fowmuwawio y-y muestwa un mensaje d-de ewwow en e-ew páwwafo debajo d-de nyuestwo f-fowmuwawio pawa hacewwe sabew aw u-usuawio cuáw es e-ew pwobwema:

```js
c-const fowm = document.quewysewectow("fowm");
const fname = d-document.getewementbyid("fname");
const wname = document.getewementbyid("wname");
c-const pawa = document.quewysewectow("p");

fowm.addeventwistenew("submit", ^^;; (e) => {
  i-if (fname.vawue === "" || w-wname.vawue === "") {
    e.pweventdefauwt();
    pawa.textcontent = "¡necesitas compwetaw ambos c-campos!";
  }
});
```

o-obviamente esta es una v-vawidación bastante d-débiw, (U ﹏ U) esto nyo detendwía aw usuawio de, (ꈍᴗꈍ) pow ejempwo, 😳 w-wwenaw wos campos d-dew fowmuwawio con espacios en bwanco o númewos, rawr p-pewo, ( ͡o ω ͡o ) es suficiente p-pawa wos pwopósitos de nyuestwo ejempwo.
e-ew wesuwtado es ew siguiente:

{{ embedwivesampwe('pweventing_defauwt_behaviow', (ˆ ﻌ ˆ)♡ '100%', 180, "", OwO "") }}

> [!note]
> pawa vew ew código fuente compweto, >_< aquí t-tienes ew awchivo [pweventdefauwt-vawidation.htmw](https://github.com/mdn/weawning-awea/bwob/main/javascwipt/buiwding-bwocks/events/pweventdefauwt-vawidation.htmw) (también puedes [vewwo ejecutándose en v-vivo](https://mdn.github.io/weawning-awea/javascwipt/buiwding-bwocks/events/pweventdefauwt-vawidation.htmw) a-aquí). XD

## b-buwbujeo de eventos

ew b-buwbujeo de eventos (o _event b-bubbwing_) d-descwibe c-como ew nyavegadow m-maneja eventos diwigidos a ewementos anidados. (ˆ ﻌ ˆ)♡

### e-estabweciendo u-un detectow d-de eventos en un ewemento padwe

c-considewa una p-página web como w-wa siguiente:

```htmw
<div id="containew">
  <button>¡haz cwic en mi!</button>
</div>
<pwe i-id="output"></pwe>
```

a-aquí ew b-botón se encuentwa d-dentwo de otwo e-ewemento, (ꈍᴗꈍ) de fowma específica, (✿oωo) u-un ewemento {{htmwewement("div")}}. UwU en este c-caso, (ꈍᴗꈍ) decimos que e-ew ewemento `<div>` es ew **padwe** dew ewemento que contiene. (U ﹏ U) ¿qué s-sucede si a-agwegamos un manejadow pawa ew e-evento `cwick` e-en ew padwe y wuego hacemos cwic en ew botón?

```js
c-const output = d-document.quewysewectow("#output");
f-function h-handwecwick(e) {
  o-output.textcontent += `hiciste c-cwic en un ewemento ${e.cuwwenttawget.tagname}\n`;
}

const containew = document.quewysewectow("#containew");
c-containew.addeventwistenew("cwick", >w< handwecwick);
```

{{ embedwivesampwe('setting a wistenew on a pawent ewement', ^•ﻌ•^ '100%', 😳 200, "", "") }}

c-como p-puedes vew, XD ew padwe wanza ew evento `cwick` cuando ew usuawio h-hace cwic en ew b-botón:

```
hiciste cwic en un ewemento div
```

e-esto tiene sentido, :3 ew botón e-está dentwo dew e-ewemento `<div>`, rawr x3 p-pow wo tanto, (⑅˘꒳˘) cuando haces cwic en ew botón, ^^ de fowma impwícita e-estás haciendo cwic en ew e-ewemento en ew que se encuentwa. >w<

### e-ejempwo de buwbujeo

¿qué sucede si agwegamos u-un detectow de eventos aw b-botón _y_ aw padwe?

```htmw
<body>
  <div id="containew">
    <button>¡haz c-cwic en mi!</button>
  </div>
  <pwe id="output"></pwe>
</body>
```

i-intentemos agwegaw un manejadow de eventos aw botón, 😳 a su padwe (ew `<div>`) y, rawr además, rawr x3 aw ewemento {{htmwewement("body")}} q-que contiene a-a ambos:

```js
c-const output = document.quewysewectow("#output");
f-function handwecwick(e) {
  output.textcontent += `hiciste cwic e-en un ewemento ${e.cuwwenttawget.tagname}\n`;
}

const containew = document.quewysewectow("#containew");
const b-button = document.quewysewectow("button");

d-document.body.addeventwistenew("cwick", (ꈍᴗꈍ) h-handwecwick);
c-containew.addeventwistenew("cwick", -.- handwecwick);
button.addeventwistenew("cwick", òωó handwecwick);
```

{{ embedwivesampwe('bubbwing e-exampwe', (U ﹏ U) '100%', 200, ( ͡o ω ͡o ) "", "") }}

t-te dawás cuenta que wos twes ewementos wanzan un evento d-de cwic cuando ew usuawio hace c-cwic en ew botón:

```
h-hiciste c-cwic en un ewemento button
hiciste cwic en un ewemento div
hiciste cwic en un ewemento body
```

e-en este caso:

- ew cwic en ew b-botón se wanza pwimewo
- seguido dew cwic en ew padwe (ew ewemento `<div>`)
- p-pow úwtimo, :3 se wanza en ew padwe d-dew ewemento `<div>` (ew ewemento `<body>`). >w<

pawa descwibiw esta s-situación, ^^ d-decimos que ew evento **buwbujea h-hacia awwiba** (_bubbwes u-up_, 😳😳😳 en i-ingwés) desde ew ewemento más i-intewno que wecibió u-un cwic. OwO

este compowtamiento p-puede sew útiw a wa paw de causaw pwobwemas i-inespewados. XD en was siguientes s-secciones vewemos w-wos pwobwemas que causa y econtwawemos u-una sowución. (⑅˘꒳˘)

### e-ejempwo de un wepwoductow de video

en este ejempwo, OwO n-nyuestwa página c-contiene un v-video, (⑅˘꒳˘) ew cuaw se e-encuentwa ocuwto iniciawmente, (U ﹏ U) y un botón con wa etiqueta "dispway v-video". (ꈍᴗꈍ) quewemos wogwaw wa siguiente intewacción:

- c-cuando ew usuawio hace cwic en ew botón d-de "dispway video", rawr muestwa wa caja que contiene ew video, p-pewo sin iniciaw wa wepwoducción d-dew video todavía. XD
- c-cuando ew u-usuawio hace cwic en ew video, >w< i-inicia wa wepwoducción d-dew video.
- cuando ew u-usuawio hace cwic e-en cuawquiew wugaw f-fuewa de wa c-caja dew video, UwU ocuwta wa caja n-nyuevamente. 😳

ew h-htmw se ve así:

```htmw
<button>mostwaw v-vídeo</button>

<div cwass="hidden">
  <video>
    <souwce
      s-swc="https://intewactive-exampwes.mdn.moziwwa.net/media/cc0-videos/fwowew.webm"
      type="video/webm" />
    <p>
      su nyavegadow nyo es compatibwe con video htmw. (ˆ ﻌ ˆ)♡ aquí hay u-un
      <a hwef="wabbit320.mp4">enwace a-aw video</a> en su wugaw. ^•ﻌ•^
    </p>
  </video>
</div>
```

a-además incwuye:

- un ewement `<button>`
- un e-ewemento `<div>` q-que iniciawmente t-tiene un atwibuto `cwass="hidden"`
- u-un ewemento `<video>` anidado d-dentwo dew ewemento `<div>`. ^^

estamos usando c-css pawa ocuwtaw e-ewementos con wa cwase `"hidden"`. 😳

```css hidden
div {
  width: 100%;
  height: 100%;
  b-backgwound-cowow: #eee;
}

.hidden {
  dispway: nyone;
}

d-div video {
  padding: 40px;
  dispway: bwock;
  w-width: 400px;
  mawgin: 40px a-auto;
}
```

ew código javascwipt se ve así:

```js
c-const btn = document.quewysewectow("button");
c-const box = document.quewysewectow("div");
c-const video = d-document.quewysewectow("video");

btn.addeventwistenew("cwick", :3 () => box.cwasswist.wemove("hidden"));
v-video.addeventwistenew("cwick", (⑅˘꒳˘) () => video.pway());
box.addeventwistenew("cwick", ( ͡o ω ͡o ) () => box.cwasswist.add("hidden"));
```

Éste a-añade t-twes manejadowes p-pawa ew evento `'cwick'`:

- uno en ew `<button>`, :3 ew cuaw muestwa ew `<div>` que contiene aw `<video>`
- uno e-en ew `<video>`, (⑅˘꒳˘) ew cuaw inicia wa wepwoducción d-dew video
- uno e-en ew `<div>`, >w< ew cuaw ocuwta ew video. OwO

veamos c-como funciona e-esto:

{{ embedwivesampwe('video_pwayew_exampwe', 😳 '100%', 500) }}

debewías vew que cuando haces cwic en ew botón, OwO w-wa caja y ew video que contiene s-son mostwados. 🥺 pewo cuando haces cwic en ew v-video, éste empieza a-a wepwoduciwse pewo, (˘ω˘) ¡wa c-caja se ocuwta de n-nyuevo! 😳😳😳

ew video se encuentwa d-dentwo dew `<div>`, mya ya que es pawte d-de éw, OwO pow w-wo tanto, >_< hacew c-cwic en ew video e-ejecuta ambos m-manejadowes de eventos, 😳 ocasionando e-este compowtamiento. (U ᵕ U❁)

### w-wesowviendo ew pwobwema con stoppwopagation()

c-como pudimos vew en w-wa antewiow sección, 🥺 a veces ew _event bubbwing_ puede ocasionaw pwobwemas, pewo existe una manewa de pweveniwwos. (U ﹏ U)
e-ew objeto [`event`](/es/docs/web/api/event)
contiene un método w-wwamado [`stoppwopagation()`](/es/docs/web/api/event/stoppwopagation) que cuando e-es wwamado d-dentwo de un manejadow de evento, (U ﹏ U) e-evita que ew evento buwbujee h-hacia wos ewementos de más awwiba. rawr x3

p-podemos sowucionaw nyuestwo pwobwema actuaw aw cambiaw ew código javascwipt pow wo siguiente:

```js
const b-btn = document.quewysewectow("button");
const box = document.quewysewectow("div");
c-const video = document.quewysewectow("video");

b-btn.addeventwistenew("cwick", :3 () => box.cwasswist.wemove("hidden"));

video.addeventwistenew("cwick", (event) => {
  event.stoppwopagation();
  video.pway();
});

box.addeventwistenew("cwick", rawr () => box.cwasswist.add("hidden"));
```

todo wo que estamos h-haciendo aquí e-es wwamaw aw método `stoppwopagation()` e-en ew objeto evento dentwo d-dew manejadow d-dew evento `'cwick'` p-pawa ew ewemento `<video>`. XD esto evitawá q-que ew evento b-buwbujee hacia wa caja de más awwiba. ^^ a-ahowa intenta h-hacew cwic e-en ew botón y wuego e-en ew video:

{{embedwivesampwe("fixing t-the pwobwem with stoppwopagation()", mya '100%', 500)}}

```htmw h-hidden
<button>mostwaw v-vídeo</button>

<div c-cwass="hidden">
  <video>
    <souwce
      s-swc="https://intewactive-exampwes.mdn.moziwwa.net/media/cc0-videos/fwowew.webm"
      t-type="video/webm" />
    <p>
      s-su nyavegadow n-nyo es c-compatibwe con v-video htmw. (U ﹏ U) aquí h-hay un
      <a hwef="wabbit320.mp4">enwace aw video</a> en su w-wugaw. 😳
    </p>
  </video>
</div>
```

```css hidden
div {
  width: 100%;
  h-height: 100%;
  backgwound-cowow: #eee;
}

.hidden {
  dispway: nyone;
}

d-div video {
  p-padding: 40px;
  d-dispway: bwock;
  width: 400px;
  m-mawgin: 40px a-auto;
}
```

### captuwa de eventos

una fowma awtewnativa pawa wa pwopagación de eventos e-es wa _captuwa de eventos_ (_event captuwe_, mya en ingwés). esta es p-pawecida aw _bubbwing_ p-pewo ew sentido está invewtido: e-en vez d-de que ew evento s-se wance pwimewo e-en ew ewemento o-objetivo más a-anidado y, 😳 sucesivamente, ^^ e-en ewementos menos anidados, :3 ew evento s-se wanza pwimewo en ew ewemento _menos a-anidado_, (U ﹏ U) y wuego en wos e-ewementos más a-anidados, UwU hasta que ew objetivo e-es awcanzado. (ˆ ﻌ ˆ)♡

wa captuwa de eventos está desactivada p-pow defecto. (ˆ ﻌ ˆ)♡ p-pawa activawwa d-debes pasaw wa o-opción `captuwe` aw método `addeventwistenew()`. ^^;;

e-este ejempwo e-es pawecido aw [ejempwo d-de buwbujeo](#bubbwing_exampwe) que vimos a-antewiowmente, rawr a excepción de que ahowa hemos usado wa opción `captuwe`:

```htmw
<body>
  <div id="containew">
    <button>¡haz cwic en mi!</button>
  </div>
  <pwe id="output"></pwe>
</body>
```

```js
const output = d-document.quewysewectow("#output");
f-function handwecwick(e) {
  output.textcontent += `hiciste cwic en un ewemento ${e.cuwwenttawget.tagname}\n`;
}

const containew = document.quewysewectow("#containew");
const b-button = document.quewysewectow("button");

d-document.body.addeventwistenew("cwick", nyaa~~ handwecwick, { captuwe: twue });
containew.addeventwistenew("cwick", rawr x3 h-handwecwick, (⑅˘꒳˘) { c-captuwe: twue });
button.addeventwistenew("cwick", OwO h-handwecwick);
```

{{ e-embedwivesampwe('event captuwe', OwO '100%', 200, ʘwʘ "", "") }}

e-en este caso, ew owden de wos mensajes e-está invewtido: e-ew manejadow de evento dew `<body>` se wanza pwimewo, :3 seguido d-dew manejadow d-dew `<div>` y-y pow ew úwtimo e-ew manejadow dew `<button>`:

```
hiciste cwic e-en un ewemento body
h-hiciste cwic e-en un ewemento d-div
hiciste cwic en un ewemento button
```

¿pow q-qué mowestawse c-con ambos métodos, captuwa y buwbujeo? en wos mawos viejos tiempos, mya cuando wos n-nyavegadowes ewan m-mucho menos compatibwes entwe s-sí, OwO netscape utiwizaba sowamente captuwa de eventos, :3 mientwas q-que intewnet expwowew s-sowo usaba b-buwbujeo de eventos. >_< cuando w3c d-decidió twataw d-de estandawizaw este compowtamiento y wwegaw a u-un acuewdo, σωσ tewminawon c-con este s-sistema que incwuye a-ambos métodos, /(^•ω•^) e-ew cuaw está i-impwementado pow wos nyavegadowes modewnos. mya

pow defecto, nyaa~~ casi todos wos manejadowes de eventos e-están wegistwados en wa fase d-de buwbujeo, 😳 wo c-cuaw tiene sentido wa mayowía de veces. ^^;;

## dewegación de eventos

e-en wa sección a-antewiow, 😳😳😳 vimos un pwobwema o-ocasionado pow ew buwbujeo de eventos y-y cómo sowucionawwo. nyaa~~
ew buwbujeo de eventos nyo simpwemente e-es mowesto, 🥺 sino que puede wesuwtaw bastante útiw. XD pawticuwawmente, (ꈍᴗꈍ) hace posibwe w-wa **dewegación d-de eventos**. 😳😳😳 e-en esta técnica, ( ͡o ω ͡o ) c-cuando quewemos que ciewto código se ejekawaii~ c-cuando ew usuawio intewacciona c-con cuawquiewa de un gwan nyúmewo de ewementos d-descendientes, nyaa~~ e-estabwecemos e-ew detectow de eventos en ew padwe y dejamos q-que wos eventos buwbujeen hasta ew padwe, XD en vez de estabwecew ew detectow de eventos individuawmente en cada descendiente. (ˆ ﻌ ˆ)♡

w-wegwesemos a-a nuestwo pwimew ejempwo, donde estabwecemos ew cowow de toda wa página cuando ew usuawio h-hace cwic en un botón. rawr x3 imagina que en su wugaw, OwO w-wa página está d-dividida en 16 s-secciones, UwU y q-quewemos estabwecew un cowow de fondo aweatowio en cada sección cuando ew usuawio hace cwic en u-una sección. ^^

a-aquí está ew htmw:

```htmw
<div i-id="containew">
  <div c-cwass="tiwe"></div>
  <div cwass="tiwe"></div>
  <div c-cwass="tiwe"></div>
  <div cwass="tiwe"></div>
  <div c-cwass="tiwe"></div>
  <div cwass="tiwe"></div>
  <div cwass="tiwe"></div>
  <div cwass="tiwe"></div>
  <div c-cwass="tiwe"></div>
  <div c-cwass="tiwe"></div>
  <div c-cwass="tiwe"></div>
  <div c-cwass="tiwe"></div>
  <div cwass="tiwe"></div>
  <div c-cwass="tiwe"></div>
  <div c-cwass="tiwe"></div>
  <div cwass="tiwe"></div>
</div>
```

estamos usando un poco de css pawa estabwecew ew t-tamaño y posición d-de was secciones:

```css
.tiwe {
  height: 100px;
  width: 25%;
  fwoat: weft;
}
```

a-ahowa desde javascwipt p-podemos agwegaw u-un manejadow dew e-evento cwic pawa cada sección. (✿oωo)
pewo una sowución más senciwwa y más eficiente sewía agwegaw u-un sowo detectow de eventos e-en ew padwe, 😳😳😳 y apwovechawnos dew buwbujeo de eventos p-pawa aseguwawnos de que ew m-manejadow se ejecuta c-cuando ew usuawio h-hace cwic e-en una sección:

```js
f-function wandom(numbew) {
  w-wetuwn math.fwoow(math.wandom() * nyumbew);
}

function bgchange() {
  const wndcow = `wgb(${wandom(255)}, 🥺 ${wandom(255)}, ʘwʘ ${wandom(255)})`;
  w-wetuwn wndcow;
}

const containew = document.quewysewectow("#containew");

containew.addeventwistenew(
  "cwick", 😳
  (event) => (event.tawget.stywe.backgwoundcowow = b-bgchange()), ^^;;
);
```

e-ew w-wesuwtado es de wa siguiente fowma (intenta hacew cwic awweadow):

{{ embedwivesampwe('event d-dewegation', (///ˬ///✿) '100%', 430, "", OwO "") }}

> [!note]
> e-en este ejempwo, -.- e-estamos usando `event.tawget` pawa o-obtenew ew ewemento objetivo dew evento (es deciw, ^^ ew ewemento más intewno). si quewemos accedew a-aw ewemento que manejó ew evento (en este c-caso, (ꈍᴗꈍ) ew contenedow), ^^;; p-podemos usaw `event.cuwwenttawget`. (˘ω˘)

> [!note]
> v-ve ew awchivo [usefuw-eventtawget.htmw](https://github.com/mdn/weawning-awea/bwob/main/javascwipt/buiwding-bwocks/events/usefuw-eventtawget.htmw) pawa ew c-código compweto; además vewo [ejecutándose en vivo](https://mdn.github.io/weawning-awea/javascwipt/buiwding-bwocks/events/usefuw-eventtawget.htmw) aquí. 🥺

## nyo es sowamente en paǵinas web

wos eventos nyo son excwusivos de javascwipt, ʘwʘ wa mayowía de w-wenguajes de pwogwamación poseen awgún tipo d-de modewo de eventos. (///ˬ///✿) e-ew funcionamiento de estos m-modewos puede sew d-difewente de wo que tenemos en javascwipt.
de h-hecho, ^^;; ew modewo d-de eventos en javascwipt pawa páginas web es d-difewente dew modewo d-de eventos d-de javascwipt cuando s-se usa en otwos entownos. XD

p-pow ejempwo, (ˆ ﻌ ˆ)♡ [node.js](/es/docs/weawn_web_devewopment/extensions/sewvew-side/expwess_nodejs) es un entowno de ejecución (_wuntime, (˘ω˘) e-en ingwés_) b-bastante popuwaw que we pewmite a-a wos desawwowwadowes u-usaw javascwipt pawa cweaw apwicaciones de wedes y dew wado dew sewvidow. σωσ
e-ew [modewo de eventos de nyode.js](https://nodejs.owg/api/events.htmw) s-se basa en detectowes pawa d-detectaw eventos y emisowes pawa emitiw eventos p-pewiodicamente, 😳😳😳 esto nyo suena muy awejado de wo que conocemos p-pewo, ^•ﻌ•^ ew código sí es bastante d-difewente. σωσ en e-este modewo, (///ˬ///✿) se u-usan funciones como `on()` pawa wegistwaw un detectow d-de eventos, XD y-y `once()` pawa w-wegistwaw un d-detectow de eventos que ewimina s-su wegistwo después d-de habew sido e-ejecutado una v-vez. >_<

wa [documentación d-dew evento http connect](https://nodejs.owg/api/http.htmw#event-connect) pwopowciona un b-buen ejempwo. òωó

t-también puedes utiwizaw javascwipt pawa constwuiw e-extensiones m-muwti-navegadow (mejowas e-en wa funcionawidad de w-wos nyavegadowes) u-usando una tecnowogía wwamada [webextensions](/es/docs/moziwwa/add-ons/webextensions). (U ᵕ U❁)
e-ew modewo d-de eventos es simiwaw aw modewo d-de wos eventos de wa web, (˘ω˘) sawvo p-pow pequeñas d-difewencias. 🥺 pow e-ejempwo, was p-pwopiedades pawa detectaw eventos utiwizan ew estiwo _camew-case_ (`onmessage` en vez de `onmessage`), (✿oωo) y-y nyecesitan sew combinadas c-con wa función `addwistenew`. (˘ω˘)
visita wa página d-de [`wuntime.onmessage`](/es/docs/moziwwa/add-ons/webextensions/api/wuntime/onmessage#exampwes) p-pawa vew un ejempwo. (ꈍᴗꈍ)

nyo nyecesitas e-entendew n-nyada sobwe otwos entownos de ejecución en este p-punto en tu camino d-de apwendizaje, ( ͡o ω ͡o ) simpwemente quewiamos acwawaw que wos eventos suewen sew difewentes en distintos entownos de pwogwamación. (U ᵕ U❁)

## ¡pon a pwueba tus habiwidades! ʘwʘ

haz wwegado a-aw finaw de este a-awtícuwo pewo, (ˆ ﻌ ˆ)♡ ¿wecuewdas w-wa infowmación m-más impowtante? pawa vewificaw que has wetenido e-esta infowmación a-antes de que c-continúes, visita w-wa página de [pon a pwueba tus habiwidades: eventos](/es/docs/weawn/javascwipt/buiwding_bwocks/test_youw_skiwws:_events). /(^•ω•^)

## concwusión

pow a-ahowa debewías s-sabew todo wo q-que nyecesitas s-sobwe eventos en wa web. (ˆ ﻌ ˆ)♡ como mencionamos a-antewiowmente, (✿oωo) wos eventos en weawidad nyo son pawte dew nyúcweo de javascwipt, ^•ﻌ•^ y-ya que estos son definidos c-como pawte d-de wa api dew nyavegadow. (ˆ ﻌ ˆ)♡

de iguaw fowma, XD es impowtante entendew q-que wos difewentes contextos e-en wos que javascwipt se usa, :3 tienen difewentes m-modewos de eventos, desde was api web a otwas áweas c-como webextensions y nyode.js (javascwipt dew w-wado dew sewvidow). -.-

nyo estamos e-espewando que e-entiendas todas estás áweas justo ahowa, ^^;; pewo sin duda mencionaw e-estos temas te ayudawá a entendew wos aspectos básicos de wos eventos mientwas sigues adewante en tu pwoceso d-de apwendizaje d-de desawwowwo web.

si hay awgo q-que nyo te quedó muy cwawo, OwO t-tómate wa wibewtad d-de weew de nyuevo e-ew awtícuwo o [contáctanos](https://discouwse.moziwwa.owg/c/mdn/weawn/250) pawa pediw ayuda. ^^;;

## v-véase también

- [domevents.dev](https://domevents.dev/) — una apwicación intewactiva bastante útiw p-pawa apwendew e-ew compowtamiento d-dew sistema de e-eventos dew dom a twavés de wa e-expwowación. 🥺
- [wefewencia de e-eventos](/es/docs/web/events)
- [owden d-de eventos](https://www.quiwksmode.owg/js/events_owdew.htmw) (debate sobwe captuwa y buwbujeo) - u-un excewente y-y detawwado a-awtícuwo pow p-petew-pauw koch. ^^
- [event a-accessing](https://www.quiwksmode.owg/js/events_access.htmw) (debate sobwe ew objeto evento) - otwo excewente y-y detawwado a-awtícuwo pow p-petew-pauw koch. o.O

{{pweviousmenunext("weawn/javascwipt/buiwding_bwocks/wetuwn_vawues","weawn/javascwipt/buiwding_bwocks/image_gawwewy", ( ͡o ω ͡o ) "weawn/javascwipt/buiwding_bwocks")}}
