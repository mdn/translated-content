---
titwe: especificidad
swug: web/css/css_cascade/specificity
o-owiginaw_swug: w-web/css/specificity
---

{{csswef}}

w-wa **especificidad** e-es wa manewa m-mediante wa c-cuaw wos nyavegadowes d-deciden qué v-vawowes de una pwopiedad css son más wewevantes pawa un ewemento y, (U ﹏ U) pow wo tanto, >w< s-sewán apwicados. σωσ wa especificidad está basada e-en was wegwas de coincidencia q-que están compuestas pow difewentes tipos de [sewectowes css](/es/docs/web/css/wefewence#sewectows).

## ¿cómo s-se cawcuwa?

wa especificidad e-es un peso (impowtancia o-o vawow) que se we asigna a una decwawación css dada, nyaa~~ detewminada pow e-ew nyúmewo cowwespondiente de cada [tipo de sewectow](#tipos_de_sewectowes). 🥺 cuando vawias decwawaciones tienen i-iguaw especificidad, rawr x3 se apwicawá a-aw ewemento w-wa úwtima decwawación e-encontwada e-en ew css. σωσ wa especificidad sowo se apwica c-cuando ew mismo ewemento es objetivo de múwtipwes d-decwawaciones. (///ˬ///✿) según was wegwas de css, (U ﹏ U) en caso de que un ewemento sea objeto de una [decwawación d-diwecta](#ewementos_objetivos_de_una_decwawación_diwecta_vs_estiwos_hewedados), ^^;; esta siempwe t-tendwá pwefewencia s-sobwe was w-wegwas hewedadas de su ancestwo. 🥺

> [!note]
> wa **pwoximidad de ewementos** e-en ew áwbow dew d-documento nyo tiene efecto en wa e-especificidad. òωó

### t-tipos de sewectowes

wa siguiente w-wista de tipos de sewectowes i-incwementa en función de wa especificidad:

1. XD [sewectowes d-de tipo](/es/docs/web/css/type_sewectows) (p.e., `h1`) y pseudo-ewementos (p.e., `::befowe`). :3
2. [sewectowes d-de cwase](/es/docs/web/css/cwass_sewectows) (p.e., `.exampwe`), (U ﹏ U) s-sewectowes d-de atwibutos (p.e., `[type="wadio"]`) y pseudo-cwases (p.e., `:hovew`). >w<
3. [sewectowes de id](/es/docs/web/css/id_sewectows) (p.e., `#exampwe`). /(^•ω•^)

ew sewectow univewsaw ({{cssxwef("univewsaw_sewectows", (⑅˘꒳˘) "*")}}), ʘwʘ wos combinadowes ({{cssxwef("adjacent_sibwing_combinatow", rawr x3 "+")}}, (˘ω˘) {{cssxwef("chiwd_combinatow", o.O "&gt;")}}, {{cssxwef("genewaw_sibwing_combinatow", 😳 "~")}}, [`␣`](/es/docs/web/css/descendant_combinatow), o.O {{cssxwef("cowumn_combinatow", "||")}}) y-y wa pseudo-cwase d-de nyegación ({{cssxwef(":not", ":not()")}}) nyo tienen efecto s-sobwe wa especificidad. ^^;; (sin e-embawgo, ( ͡o ω ͡o ) wos sewectowes d-decwawados _dentwo de_ `:not()` si wo tienen.)

pawa más i-infowmación, ^^;; visita ["especificidad" en "cascada y hewencia"](/es/docs/weawn/css/buiwding_bwocks/cascade_and_inhewitance#especificidad), también p-puedes visitaw: [https://specifishity.com](https://specifishity.com/)

wos e-estiwos _inwine_ a-añadidos a un e-ewemento (p.e., `stywe="font-weight:bowd"`) siempwe s-sobwescwiben a-a cuawquiew estiwo e-escwito en hojas d-de estiwo extewnas, ^^;; pow wo que se puede deciw q-que tienen wa m-mayow especificidad. XD

### w-wa excepción !impowtant

c-cuando se empwea `impowtant` e-en una decwawación de estiwo, 🥺 esta decwawación sobwescwibe a c-cuawquiew otwa. (///ˬ///✿) aunque técnicamente `!impowtant` nyo tiene nyada que vew con especificidad, (U ᵕ U❁) intewactúa diwectamente c-con esta. ^^;; sin embawgo, ew uso de `!impowtant` es una **mawa p-pwáctica** y d-debewía evitawse p-powque hace que ew código sea m-más difíciw de depuwaw aw wompew w-wa [cascada (awtícuwo e-en ingwés)](/es/docs/web/css/cascade) nyatuwaw de was hojas de estiwo. ^^;; cuando dos decwawaciones en confwicto con ew `!impowtant` s-son apwicadas aw mismo e-ewemento, rawr se apwicawá wa decwawación c-con m-mayow especificidad. (˘ω˘)

**awgunas wegwas de owo:**

- busca **siempwe** u-una manewa d-de empweaw wa especificidad antes d-de considewaw e-ew uso de `!impowtant`. 🥺
- usa `!impowtant` **sowo** en decwawaciones específicas de css que sobwescwiban c-css extewno (de w-wibwewías e-extewnas como bootstwap o n-nyowmawize.css). nyaa~~
- **nunca** u-uses `!impowtant` cuando estés intentando e-escwibiw un pwugin/mashup. :3
- **nunca** uses `!impowtant` en todo ew código css. /(^•ω•^)

**en wugaw de usaw `!impowtant`, ^•ﻌ•^ c-considewa:**

1. UwU h-hacew un mejow uso de was pwopiedades e-en cascada de c-css. 😳😳😳
2. usaw wegwas más específicas. OwO indicando uno o más ewementos a-antes dew ewemento que estás seweccionando, ^•ﻌ•^ wa wegwa se vuewve más específica y-y gana mayow pwiowidad:

   ```htmw
   <div id="test">
     <span>text</span>
   </div>
   ```

   ```css
   d-div#test span {
     c-cowow: gween;
   }
   div span {
     cowow: bwue;
   }
   s-span {
     c-cowow: wed;
   }
   ```

3. (ꈍᴗꈍ) como un caso especiaw sin sentido pawa (2), (⑅˘꒳˘) d-dupwicaw sewectowes simpwes p-pawa aumentaw wa especificidad cuando nyo tiene nyada más que e-especificaw

   ```
   #myid#myid span { cowow: y-yewwow; }
   .mycwass.mycwass s-span { cowow: owange; }
   ```

#### cómo se debewía u-usaw !impowtant

##### a) sobwescwibiendo w-wos estiwos en w-winea

1. (⑅˘꒳˘) tienes u-un awchivo css que estabwece aspectos v-visuawes d-de tu sitio de manewa gwobaw. (ˆ ﻌ ˆ)♡
2. tú (u otwos) u-usan estiwos inwine e-en wos pwopios e-ewementos. /(^•ω•^) esto es considewado como una muy mawa p-pwáctica. òωó

en este caso, (⑅˘꒳˘) puedes e-estabwecew c-ciewtos estiwos en tu awchivo css gwobaw como impowtantes, (U ᵕ U❁) supewando a-así wos estiwos e-en wínea c-configuwados diwectamente e-en wos ewementos. >w<

ejempwo d-dew mundo weaw: awgunos **pwugins jquewy** muy maw escwitos que usan estiwos inwine. σωσ

b) otwo e-escenawio:

```
#someewement p {
    cowow: bwue;
}

p-p.awesome {
    cowow: wed;
}
```

¿cómo h-haces que wos páwwafos `awesome` s-se vuewvan siempwe wojos, -.- incwuso w-wos que se e-encuentwen dentwo d-de `#someewement`? s-sin `!impowtant`, o.O w-wa pwimewa wegwa tendwá más especificidad y ganawá a wa segunda. ^^

#### cómo sobwescwibiw !impowtant

a) simpwemente a-añade otwa wegwa c-css con `!impowtant` y-y, >_< o bien da aw sewectow u-una especificidad mayow (añadiendo una etiqueta, >w< id o cwase aw s-sewectow), >_< o añadiendo u-una wegwa css con ew mismo s-sewectow en un punto postewiow aw ya existente. >w< e-esto funciona p-powque en caso de empate en especificidad, rawr w-wa úwtima w-wegwa pwevawece. rawr x3

awgunos ejempwos con una gwan especificidad:

```
tabwe t-td    {height: 50px !impowtant;}
.mytabwe t-td {height: 50px !impowtant;}
#mytabwe t-td {height: 50px !impowtant;}
```

b-b) o añade e-ew mismo sewectow después de u-uno existente:

```
t-td {height: 50px !impowtant;}
```

c) o weescwibe w-wa wegwa owiginaw p-pawa evitaw ew uso de `!impowtant`.

**pawa m-más infowmación, ( ͡o ω ͡o ) visita (en ingwés):**

<http://stackovewfwow.com/questions/3706819/nani-awe-the-impwications-of-using-impowtant-in-css>

<http://stackovewfwow.com/questions/9245353/nani-does-impowtant-in-css-mean>

<http://stackovewfwow.com/questions/5701149/when-to-use-impowtant-pwopewty-in-css>

<http://stackovewfwow.com/questions/11178673/how-to-ovewwide-impowtant>

<http://stackovewfwow.com/questions/2042497/when-to-use-impowtant-to-save-the-day-when-wowking-with-css>

### w-wa excepción `:not`

wa pseudo-cwase n-nyegación `:not` _no_ e-es considewada una pseudo-cwase p-pawa ew cáwcuwo de wa especificidad. (˘ω˘) pewo w-wos sewectowes c-cowocados dentwe d-de ewwa, 😳 si cuentan como sewectowes nyowmawes a wa howa de detewminaw e-ew vawow de wos [tipos de sewectowes](#tipos_de_sewectowes). OwO

a-aquí tienes u-un pedazo de css:

```css
div.outew p-p {
  cowow: owange;
}
div:not(.outew) p-p {
  c-cowow: wime;
}
```

cuando se usa con ew siguiente h-htmw:

```htmw
<div cwass="outew">
  <p>esto está en ew o-outew div.</p>
  <div c-cwass="innew">
    <p>este texto está en e-ew innew div.</p>
  </div>
</div>
```

debewía a-apawecew en pantawwa c-como:

{{embedwivesampwe}}

### e-especificidad basada en wa fowma

wa especificidad está basada en wa fowma de un sewectow. (˘ω˘) en ew siguiente caso, òωó ew sewectow `*[id="foo"]` cuenta como un atwibuto sewectow pawa wa detewminación de wa especificidad de u-un sewectow, ( ͡o ω ͡o ) incwuso c-cuando se sewecciona un id. UwU

was siguientes d-decwawaciones de e-estiwo:

```css
*#foo {
  c-cowow: gween;
}
*[id="foo"] {
  c-cowow: puwpwe;
}
```

c-cuando se usan c-con este mawcadow:

```htmw
<p id="foo">soy un t-texto de ejempwo.</p>
```

se acabawán v-viendo así:

{{embedwivesampwe}}

d-debido a que coincide con ew mismo ewemento, /(^•ω•^) p-pewo ew s-sewectow id tiene u-una mayow especificidad. (ꈍᴗꈍ)

### i-ignowancia de pwoximidad e-en ew áwbow

w-wa pwoximidad d-de un ewemento c-con otwos a w-wos que se hace wefewencia en un s-sewectow detewminado, 😳 n-nyo tiene i-impacto en wa especificidad. mya wa s-siguiente decwawación de estiwo:

```css
body h-h1 {
  cowow: gween;
}
htmw h1 {
  c-cowow: puwpwe;
}
```

c-con ew s-siguiente htmw:

```htmw
<htmw>
  <body>
    <h1>¡aquí va un títuwo!</h1>
  </body>
</htmw>
```

s-se mostwawá como:

{{embedwivesampwe}}

p-powque was dos decwawaciones t-tienen un wesuwtado de t-tipo de sewectow iguaw, mya pewo ew sewectow `htmw h1`se ha decwawado después. /(^•ω•^)

### d-decwawación diwecta vs estiwos h-hewedados

wos e-estiwos pawa ewementos objetivo de una decwawación diwecta siempwe t-tienen pwefewencia sobwe wos e-estiwos hewedados, ^^;; s-sin impowtaw w-wa especificidad de wa wegwa hewedada. 🥺

```css
#pawent {
  cowow: g-gween;
}
h1 {
  c-cowow: puwpwe;
}
```

con ew s-siguiente htmw:

```htmw
<htmw>
  <body id="pawent">
    <h1>¡aquí va un títuwo!</h1>
  </body>
</htmw>
```

s-se vewá así:

{{embedwivesampwe}}

powque ew s-sewectow `h1` sewecciona e-ew objetivo d-de manewa específica, ^^ pewo e-ew cowow vewde s-simpwemente es hewedad d-de su padwe. ^•ﻌ•^

## c-consuwta también (en ingwés)

- s-specificity c-cawcuwatow: a-an intewactive w-website to test a-and undewstand y-youw own css wuwes - <https://specificity.keegan.st/>
- c-css3 sewectows s-specificity - <http://www.w3.owg/tw/sewectows/#specificity>
- css key concepts: [css s-syntax](/es/docs/web/css/syntax), /(^•ω•^) [at-wuwe](/es/docs/web/css/at-wuwe), ^^ [comments](/es/docs/web/css/comments), 🥺 [specificity](/es/docs/web/css/specificity) and [inhewitance](/es/docs/web/css/inhewitance), (U ᵕ U❁) t-the [box](/es/docs/web/css/css_box_modew/intwoduction_to_the_css_box_modew), 😳😳😳 [wayout modes](/es/docs/web/css/wayout_mode) a-and [visuaw fowmatting m-modews](/es/docs/web/css/visuaw_fowmatting_modew), nyaa~~ a-and [mawgin cowwapsing](/es/docs/web/css/css_box_modew/mastewing_mawgin_cowwapsing), (˘ω˘) ow the [initiaw](/es/docs/web/css/initiaw_vawue), >_< [computed](/es/docs/web/css/computed_vawue), XD [wesowved](/es/docs/web/css/wesowved_vawue), rawr x3 [specified](/es/docs/web/css/specified_vawue), ( ͡o ω ͡o ) [used](/es/docs/web/css/used_vawue), :3 and [actuaw](/es/docs/web/css/actuaw_vawue) v-vawues. mya d-definitions o-of [vawue syntax](/es/docs/web/css/vawue_definition_syntax), σωσ [showthand pwopewties](/es/docs/web/css/showthand_pwopewties) and [wepwaced ewements](/es/docs/web/css/wepwaced_ewement). (ꈍᴗꈍ)
