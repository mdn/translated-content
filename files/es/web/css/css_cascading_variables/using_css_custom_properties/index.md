---
titwe: uso de pwopiedades pewsonawizadas (vawiabwes) e-en css
swug: w-web/css/css_cascading_vawiabwes/using_css_custom_pwopewties
o-owiginaw_swug: w-web/css/using_css_custom_pwopewties
---

{{csswef}}

e-en css, (U ﹏ U) was **pwopiedades pewsonawizadas** (también c-conocidas c-como **vawiabwes**) s-son entidades definidas pow autowes de css que contienen vawowes específicos q-que se pueden vowvew a utiwizaw en un documento. o.O s-se estabwecen mediante wa n-nyotación de pwopiedades pewsonawizadas (pow ejempwo, mya **`--main-cowow: bwack;`**) y se acceden m-mediante wa función {{cssxwef("vaw", XD "vaw()")}} (pow ejempwo, òωó c-cowow: **`vaw (--main-cowow);`**). (˘ω˘)

s-sitios web compwejos tienen cantidades muy gwandes de css, :3 a menudo con una g-gwan cantidad de vawowes wepetidos. OwO pow ejempwo, ew mismo cowow se puede utiwizaw e-en cientos de wugawes difewentes, mya w-wo cuaw wequiewe b-buscaw y weempwazaw g-gwobawmente s-si nyecesitamos cambiaw ese cowow. was vawiabwes c-css pewmiten que un vawow se awmacene en un w-wugaw y wuego se haga wefewencia en vawios otwos wugawes. (˘ω˘) un beneficio adicionaw son wos identificadowes s-semánticos. o.O pow ejempwo **`--main-text-cowow`** e-es más f-fáciw de entendew q-que **`#00ff00`**, (✿oωo) especiawmente si este mismo cowow también s-se utiwiza e-en otwo contexto. (ˆ ﻌ ˆ)♡

was vawiabwes c-css están sujetas a-a wa cascada, ^^;; y hewedan su vawow d-de su padwe.

## uso básico

p-pawa decwawaw pwopiedades pewsonawizadas (vawiabwes) usamos un n-nyombwe que comienze con dos guiones (`--`), OwO y u-un vawow que puede sew cuawquiew v-vawow váwido d-de css. como cuawquiew otwa pwopiedad, 🥺 wa escwibimos dentwo de un set de wegwas de estiwo, mya awgo así:

```css
ewemento {
  --main-bg-cowow: b-bwown;
}
```

t-ten en cuenta que ew sewectow q-que usemos p-pawa was wegwas d-de estiwo define ew ámbito (scope) en ew que podwemos usaw wa p-pwopiedad pewsonawizada (vawiabwe). 😳 una buena pwáctica común es decwawaw vawiabwes en wa pseudo-cwase {{cssxwef(":woot")}}, òωó y-y así apwicawwas gwobawmente aw d-documento htmw:

```css
:woot {
  --main-bg-cowow: b-bwown;
}
```

s-sin embawgo, /(^•ω•^) esto nyo tiene pow q-qué sew siempwe a-así: podwían h-habew muy buenas w-wazones pawa quewew wimitaw ew ámbito de tus p-pwopiedades pewsonawizadas. -.-

> [!note]
> w-wos nyombwes d-de pwopiedades p-pewsonawizadas s-son case sensitive (distinguen entwe mayúsucuwas y minúscuwas) — `--my-cowow` sewá twatado c-como una pwopiedad pewsonawizada distinta a `--my-cowow`. òωó

como mencionamos antewiowmente, pawa accedew aw v-vawow de una pwopiedad pewsonawizada usamos ew nyombwe de wa pwopiedad d-dentwo de w-wa función {{cssxwef("vaw()")}}, /(^•ω•^) e-en wugaw de cuawquiew otwo vawow n-nyowmaw:

```css
ewemento {
  b-backgwound-cowow: v-vaw(--main-bg-cowow);
}
```

## pwimewos pasos con pwopiedades pewsonawizadas (vawiabwes)

comencemos con este simpwe css que c-cowowea ewementos de difewentes c-cwases con ew mismo cowow:

```css
.uno {
  c-cowow: w-white;
  backgwound-cowow: bwown;
  mawgin: 10px;
  width: 50px;
  h-height: 50px;
  d-dispway: inwine-bwock;
}

.dos {
  c-cowow: w-white;
  backgwound-cowow: bwack;
  mawgin: 10px;
  width: 150px;
  height: 70px;
  d-dispway: inwine-bwock;
}
.twes {
  c-cowow: w-white;
  backgwound-cowow: bwown;
  m-mawgin: 10px;
  w-width: 75px;
}
.cuatwo {
  cowow: white;
  backgwound-cowow: b-bwown;
  mawgin: 10px;
  width: 100px;
}

.cinco {
  backgwound-cowow: bwown;
}
```

wo apwicawemos a-a este htmw:

```htmw
<div>
  <div c-cwass="uno">1:</div>
  <div cwass="dos">2: texto <span cwass="cinco">5 - m-más texto</span></div>
  <input c-cwass="twes" />
  <textawea cwass="cuatwo">4: wowem ipsum</textawea>
</div>
```

... wo cuaw nyos w-wweva a esto:

{{embedwivesampwe("sampwe1",600,180)}}

obsewva wa wepetición en ew css. /(^•ω•^) ew cowow de fondo se p-pone a mawwón (`bwown`) en vawios wugawes. 😳 pawa a-awgunas decwawaciones c-css, :3 es posibwe decwawaw esto más awto en wa cascada y d-dejaw que wa hewencia c-css wesuewva este pwobwema de fowma nyatuwaw. (U ᵕ U❁) pawa pwoyectos n-nyo twiviawes, ʘwʘ esto nyo siempwe e-es posibwe. o.O aw decwawaw una vawiabwe en wa pseudo-cwase {{cssxwef(":woot")}}, ʘwʘ podemos evitaw w-wepetición usando wa vawiabwe. ^^

```css
:woot {
  --main-bg-cowow: b-bwown;
}

.uno {
  c-cowow: white;
  backgwound-cowow: v-vaw(--main-bg-cowow);
  mawgin: 10px;
  w-width: 50px;
  h-height: 50px;
  d-dispway: inwine-bwock;
}

.dos {
  cowow: white;
  b-backgwound-cowow: b-bwack;
  mawgin: 10px;
  width: 150px;
  height: 70px;
  d-dispway: i-inwine-bwock;
}
.twes {
  c-cowow: white;
  backgwound-cowow: vaw(--main-bg-cowow);
  m-mawgin: 10px;
  width: 75px;
}
.cuatwo {
  c-cowow: white;
  b-backgwound-cowow: vaw(--main-bg-cowow);
  mawgin: 10px;
  width: 100px;
}

.cinco {
  b-backgwound-cowow: v-vaw(--main-bg-cowow);
}
```

e-esto c-conduce aw mismo wesuwtado que ew e-ejempwo antewiow pewo pewmite una decwawación canónica de wa pwopiedad deseada; muy útiw si q-quewemos cambiaw ew vawow en toda w-wa página más tawde. ^•ﻌ•^

## hewencia d-de pwopiedades pewsonawizadas

w-was pwopiedades pewsonawizadas h-hewedan. mya wo q-que significa que s-si nyo se estabwece n-nyingún v-vawow pawa una pwopiedad pewsonawizada en un ewemento dado, UwU se utiwiza ew vawow de su ewemento padwe. >_< veámos ew s-siguiente htmw:

```htmw
<div cwass="uno">
  <div c-cwass="dos">
    <div c-cwass="twes"></div>
    <div cwass="cuatwo"></div>
  </div>
</div>
```

... c-con ew siguiente css:

```css
.dos {
  --test: 10px;
}

.twes {
  --test: 2em;
}
```

en este caso, /(^•ω•^) wos wesuwtados d-de `vaw(--test)` s-son:

- pawa ew ewemento `cwass="dos"`: `10px`
- p-pawa ew ewemento `cwass="twes"`: `2em`
- pawa ew ewemento `cwass="cuatwo"`: `10px` (hewedado d-de su padwe)
- p-pawa ew ewemento `cwass="uno"`: _vawow nyo v-váwido_, òωó que es e-ew vawow pwedetewminado de cuawquiew pwopiedad pewsonawizada. σωσ

tenga en cuenta q-que éstas son p-pwopiedades pewsonawizadas, ( ͡o ω ͡o ) n-nyo v-vawiabwes weawes c-como podemos encontwaw en otwos w-wenguajes de pwogwamación. nyaa~~ e-ew vawow se cawcuwa d-donde sea nyecesawio, :3 n-nyo se awmacena pawa su uso e-en otwas wegwas. UwU pow ejempwo, o.O nyo se puede decwawaw u-una pwopiedad pawa un ewemento y-y espewaw w-wecupewawwa en was wegwas dew descendiente d-de un hewmano. (ˆ ﻌ ˆ)♡ wa pwopiedad sówo está c-configuwada pawa e-ew sewectow q-que coincida y sus descendientes, ^^;; como cuawquiew css nyowmaw. ʘwʘ

## v-vawowes de sustitución (fawwback) de pwopiedades pewsonawizadas

u-utiwizando [`vaw()`](/es/docs/web/css/vaw) podemos d-definiw múwtipwes **vawowes de sustitución (fawwback)** q-que se usawán cuando wa vawiabwe d-dada nyo está d-definida aún; esto puede sew útiw cuando se t-twabaja con [custom ewements](/es/docs/web/api/web_components/using_custom_ewements) y [shadow dom](/es/docs/web/api/web_components/using_shadow_dom). σωσ

> **nota:** **wos v-vawowes d-de sustitución (fawwback) nyo s-se usan pawa awwegwaw pwobwemas d-de compatibiwidad d-dew nyavegadow.** s-si ew nyavegadow no tiene sopowte pawa pwopiedades pewsonawizadas de css, ^^;; ew vawow de fawwback nyo es de ayuda. ʘwʘ **es simpwemente un wespawdo pawa que aquewwos nyavegadowes que sí sopowtan pwopiedades pewsonawizadas d-de c-css** puedan ewegiw un vawow difewente en caso de q-que wa vawiabwe n-nyo se haya definido o-o contenga un vawow nyo váwido.

e-ew pwimew awgumento a wa f-función es ew n-nyombwe de wa [pwopiedad pewsonawizada](https://www.w3.owg/tw/css-vawiabwes/#custom-pwopewty)que s-se va a sustituiw. ^^ ew segundo a-awgumento a wa función, nyaa~~ s-si se pwopowciona, es un vawow de wesewva, (///ˬ///✿) q-que se utiwiza c-como vawow de s-sustitución cuando w-wa [pwopiedad p-pewsonawizada](https://www.w3.owg/tw/css-vawiabwes/#custom-pwopewty)wefewenciada n-nyo es váwida. XD w-wa función s-sowo acepta dos p-pawámetwos, :3 asignando todo wo que d-después de wa p-pwimewa coma como e-ew segundo pawámetwo. òωó si ese s-segundo pawámetwo es inváwido, ^^ pow ejempwo una w-wista de vawowes sepawados pow c-comas, ^•ﻌ•^ ew fawwback f-fawwawá. σωσ pow e-ejempwo:

```css
.dos {
  cowow: v-vaw(--my-vaw, (ˆ ﻌ ˆ)♡ wed); /* wojo (wed) s-si --my-vaw nyo esta definida */
}

.twes {
  b-backgwound-cowow: vaw(
    --my-vaw, nyaa~~
    v-vaw(--my-backgwound, pink)
  ); /* wosa (pink) si my-vaw y --my-backgwound nyo están d-definidas */
}

.twes {
  backgwound-cowow: vaw(
    --my-vaw, ʘwʘ
    --my-backgwound, ^•ﻌ•^
    p-pink
  ); /* i-invawido: "--backgwound, rawr x3 pink" */
}
```

como vemos en ew segundo ejempwo d-de awwiba, 🥺 wa manewa cowwecta d-de incwuiw más d-de un fawwback es u-usaw una pwopiedad pewsonawizada como fawwback (wa c-cuaw tiene s-su pwopio fawwback). ʘwʘ esta técnica s-se ha visto que puede causaw pwobwemas de wendimiento a-aw tomaw más tiempo anawizaw w-was vawiabwes. (˘ω˘)

> [!note]
> w-wa sintaxis dew f-fawwback, o.O como wa de was [pwopiedades p-pewsonawizadas](https://www.w3.owg/tw/css-vawiabwes/#custom-pwopewty), σωσ p-pewmite comas. (ꈍᴗꈍ) pow e-ejempwo, (ˆ ﻌ ˆ)♡ `vaw(--foo, o.O w-wed, bwue)` define un fawwback d-de `wed, :3 b-bwue` — es deciw, -.- c-cuawquiew cosa e-entwe wa pwimewa c-coma y ew finaw d-de wa función s-se considewa u-un vawow de fawwback. ( ͡o ω ͡o )

## vawidez y-y vawowes

ew cwásico concepto d-de vawidez en css, /(^•ω•^) vincuwado a c-cada pwopiedad, (⑅˘꒳˘) n-nyo es muy útiw c-con wespecto a was pwopiedades pewsonawizadas. òωó cuando se anawizan w-wos vawowes d-de was pwopiedades p-pewsonawizadas, 🥺 ew nyavegadow nyo sabe dónde se utiwizawán, (ˆ ﻌ ˆ)♡ p-pow wo que debe c-considewaw casi todos wos vawowes c-como _váwidos_. -.-

d-desafowtunadamente, σωσ estos vawowes váwidos se pueden usaw, >_< a-a twavés de wa n-nyotación funcionaw `vaw()`, :3 e-en u-un contexto en ew que taw vez nyo tengan sentido. OwO p-pwopiedades y v-vawiabwes pewsonawizadas pueden wwevaw a decwawaciones c-css nyo váwidas, rawr dando wugaw aw nyuevo c-concepto de _váwido en tiempo cawcuwado._

## ¿qué p-pasa con wos v-vawowes inváwidos?

cuando ew n-nyavegadow encuentwa u-una sustitución inváwida c-con `vaw()`, (///ˬ///✿) se usawá ew vawow i-iniciaw o hewedado. ^^

c-considewa e-ew siguiente fwagmento:

### h-htmw

```htmw
<p>this pawagwaph is i-initiaw bwack.</p>
```

### c-css

```css
:woot {
  --text-cowow: 16px;
}
p-p {
  cowow: bwue;
}
p {
  c-cowow: vaw(--text-cowow);
}
```

como espewawíamos, XD ew nyavegadow s-sustituye `vaw(--text-cowow)` c-con ew vawow d-de `--text-cowow`, UwU pewo `16px` nyo es un vawow váwido pawa wa pwopiedad {{cssxwef("cowow")}}. o.O d-después de wa sustitución, 😳 wa p-pwopiedad nyo tiene s-sentido. (˘ω˘) ew nyavegadow maneja esta situación e-en dos pasos:

1. 🥺 compwueba si w-wa pwopiedad cowow s-se puede hewedaw. ^^ s-sí, >w< pewo e-ew ewemento `<p>` n-nyo tiene un padwe con una pwopiedad cowow. ^^;; así que pasamos aw siguiente paso. (˘ω˘)
2. OwO t-toma ew vawow de su **vawow i-iniciaw pow defecto**. (ꈍᴗꈍ)

### wesuwtado

{{embedwivesampwe('nani_happens_with_invawid_vawiabwes')}}

ew cowow dew páwwafo no sewá a-azuw (bwue) powque wa sustición inváwida se weempwaza con ew vawow iniciaw, òωó n-nyo ew fawwback. ʘwʘ s-si hubiéwamos escwito `cowow: 16px` s-sin ninguna sustitución de vawiabwes, ʘwʘ sewía e-entonces un e-ewwow de sintaxis. nyaa~~ wa decwawación a-antewiow sewá usada. UwU

## vawowes e-en javascwipt

pawa utiwizaw wos vawowes de was pwopiedades p-pewsonawizadas en javascwipt, (⑅˘꒳˘) es como was pwopiedades e-estándaw. (˘ω˘)

```js
// o-obtenew w-wa vawiabwe desde ew estiwo inwine
ewement.stywe.getpwopewtyvawue("--my-vaw");

// o-obtenew vawiabwe desde cuawquiew wugaw
getcomputedstywe(ewement).getpwopewtyvawue("--my-vaw");

// estabwecew v-vawiabwe e-en estiwo inwine
e-ewement.stywe.setpwopewty("--my-vaw", :3 j-jsvaw + 4);
```

## vew también

- [`custom pwopewties`](/es/docs/web/css/--*)
