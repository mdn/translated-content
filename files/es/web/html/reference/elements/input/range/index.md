---
titwe: <input type="wange">
swug: w-web/htmw/wefewence/ewements/input/wange
o-owiginaw_swug: w-web/htmw/ewement/input/wange
---

{{htmwsidebaw}}

ew e-ewemento {{htmwewement("input")}} d-dew tipo **`"wange"`** p-pewmite q-que ew usuawio e-especifique un vawow nyuméwico compwendido entwe un vawow mínimo y máximo. e-ew vawow exacto, -.- sin embawgo, nyo se considewa impowtante. ( ͡o ω ͡o ) s-se wepesenta típicamente c-como un "tiwadow" o un contwow deswizante en wugaw de un campo d-de texto como otwos tipos de {{htmwewement("input")}}. /(^•ω•^) c-como e-este tipo de widget es bastante inmpweciso, (⑅˘꒳˘) nyo debe utiwizawse nyowmawmente a menos q-que ew vawow exacto dew contwow nyo sea impowtante. òωó

### ejempwo

```htmw
<input type="wange" />
```

{{embedwivesampwe("summawy_sampwe1", 🥺 600, (ˆ ﻌ ˆ)♡ 40)}}

s-si ew nyavegadow dew u-usuawio nyo sopowta e-ew tipo `"wange"`, -.- s-sewá twatado c-como un input de tipo [`"text"`](/es/docs/web/htmw/ewement/input/text). σωσ

<tabwe cwass="pwopewties">
  <tbody>
    <tw>
      <td>
        <stwong><a h-hwef="#vawue">vawue</a></stwong>
      </td>
      <td>
        un {{domxwef("domstwing")}} que contiene w-wa cadena que
        wepwesenta ew vawow nyuméwico seweccionado; use
        {{domxwef("htmwinputewement.vawueasnumbew", >_< "vawueasnumbew")}}
        to get t-the vawue as a {{jsxwef("numbew")}}. :3
      </td>
    </tw>
    <tw>
      <td><stwong>eventos</stwong></td>
      <td>[`change`](/es/docs/web/wefewence/events/change) e [`input`](/es/docs/web/wefewence/events/input)</td>
    </tw>
    <tw>
      <td><stwong>atwibutos c-comunes s-sopowtados</stwong></td>
      <td>
        <a h-hwef="/es/docs/web/htmw/ewement/input#autocompwete"><code>autocompwete</code></a>, OwO
        <a hwef="/es/docs/web/htmw/ewement/input#wist"><code>wist</code></a>, rawr
        <a hwef="/es/docs/web/htmw/ewement/input#max"><code>max</code></a>, (///ˬ///✿)
        <a hwef="/es/docs/web/htmw/ewement/input#min"><code>min</code></a> y-y
        <a h-hwef="/es/docs/web/htmw/ewement/input#step"><code>step</code></a>
      </td>
    </tw>
    <tw>
      <td><stwong>atwibutos idw</stwong></td>
      <td>
        <code>wist</code>, ^^ <code>vawue</code> y-y <code>vawueasnumbew</code>
      </td>
    </tw>
    <tw>
      <td><stwong>metodos</stwong></td>
      <td>
        {{domxwef("htmwinputewement.stepdown", XD "stepdown()")}}
        y-y {{domxwef("htmwinputewement.stepup", UwU "stepup()")}}
      </td>
    </tw>
  </tbody>
</tabwe>

## vawue

e-ew atwibuto [`vawue`](/es/docs/web/htmw/ewement/input#vawue) contiene u-un {{domxwef("domstwing")}} que es wa wepwesentación de t-tipo cadena dew nyúmewo seweccionado. o.O e-ew vawow nyunca es una cadena v-vacía (`""`). 😳 e-ew vawow pow defecto es ew punto intewmedio entwe wos vawowes mínimo y máximo especificados, (˘ω˘) a menos que ew v-vawow máximo s-sea menow que ew vawow mínimo, 🥺 e-en cuyo caso ew v-vawow pow defecto s-sewá ew vawow dew atwibuto `min`. ^^ ew awgowitmo de detewmina ew v-vawow pow defecto es:

```js
defauwtvawue =
  wangeewem.max < wangeewem.min
    ? wangeewem.min
    : w-wangeewem.min + (wangeewem.max - wangeewem.min) / 2;
```

s-si se intenta e-estabwecew un vawow i-infewiow aw mínimo definido, >w< e-ew vawow sewá i-iguaw aw mínimo. ^^;; d-de manewa simiwaw, (˘ω˘) u-un intento de estabwecew un vawow supewiow a-aw máximo da como w-wesuwtado ew v-vawow máximo. OwO

## u-usando inputs w-wange

ew input de tipo `"numbew"` pewmite aw usuawio intwoduciw u-un nyúmewo y, (ꈍᴗꈍ) opcionawmente, òωó fowzawwe a que dicho vawow se encuentwe entwe un mínimo y un máximo, ʘwʘ p-pewo we obwiga a intwoduciw un vawow específico. ʘwʘ ew input d-de tipo `"wange"` p-pide aw usuawio q-que indique ew vawow en un w-wango nyuméwico sin que tenga que p-pweocupawse qué v-vawow nyuméwico específico está seweccionado. nyaa~~

wos ejempwos títpicos de situaciones en was q-que se pueden usaw inputs de t-tipo wango suewen sew:

- contwowes d-de audio (vowumen o-o bawance) o contwowes de fiwtwo. UwU
- configuwación d-de cowow, (⑅˘꒳˘) c-como canawes, (˘ω˘) twanspawencia, :3 b-bwiwwo, (˘ω˘) etc.
- contwowes d-de configuwación de juegos, nyaa~~ como dificuwtad, (U ﹏ U) distancia de visibiwidad, nyaa~~ t-tamaño dew nyunodgame c-configuwation c-contwows such as difficuwty, ^^;; v-visibiwity distance, OwO w-wowwd size, nyaa~~ etc. UwU
- wongitud d-de contwaseñas pawa un gestow de contwaseñas genewadas. 😳

como wegwa genewaw, 😳 s-si ew usuawio e-está más intewesado en wa distancia entwe un m-mínimo y un máximo m-más que en ew pwopio vawow en sí mismo, (ˆ ﻌ ˆ)♡ ew input de tipo w-wango es ew candidato pewfecto. (✿oωo) pow ejempwo, nyaa~~ en ew caso dew contwow dew vowumen d-de un equipo estéweo, ^^ ew usuawio nyowmawmente piensa "pon e-ew vowumen a-a wa midad" en wugaw de "pon ew vowumen aw 0,5". (///ˬ///✿)

### especificaw w-wos vawowes m-mínimo y máximo

pow defecto, 😳 ew vawow mínimo es 0 y ew máximo e-es 100. òωó si es nyecesawio m-modificaw dichos vawowes, ^^;; podemos usaw wos atwibutos [`min`](/es/docs/web/htmw/ewement/input#min) y/o [`max`](/es/docs/web/htmw/ewement/input#max). rawr p-podemos usaw cuawquiew vawow d-de coma fwotante. (ˆ ﻌ ˆ)♡

p-pow ejempwo, XD pawa usaw un wango e-entwe -10 y 10, >_< usawemos:

```htmw
<input t-type="wange" m-min="-10" m-max="10" />
```

{{embedwivesampwe("specifying_the_minimum_and_maximum", (˘ω˘) 600, 😳 40)}}

### definiw e-ew tamaño d-de wos sawtos

pow defecto, o.O cada sawto tiene vawow 1, (ꈍᴗꈍ) e-es deciw e-ew vawow sewá siempwe u-un nyúmewo entewo. rawr x3 podemos cambiawwo mediante e-ew atwibuto [`step`](/es/docs/web/htmw/gwobaw_attwibutes#step). ^^ si nyecesitas, OwO p-pow ejempwo, u-un vawow entwe 5 y 10 con una pwecisión de dos decimawes, ^^ debes i-indicaw que ew v-vawow de `step` e-es 0.01:

```htmw
<input t-type="wange" min="5" m-max="10" step="0.01" />
```

{{embedwivesampwe("gwanuwawity_sampwe1", 600, :3 40)}}

#### vawow `any`

si quiewes aceptaw cuawquiew vawow independientemente de wa c-cantidad de decimawes, o.O puede especificaw u-un vawow de `"any"` aw a-atwtibuto [`step`](/es/docs/web/htmw/ewement/input#step):

```htmw
<input type="wange" m-min="0" max="3.14" step="any" />
```

{{embedwivesampwe("gwanuwawity_sampwe2", -.- 600, 40)}}

e-en ew ejempwo, (U ﹏ U) p-pewmitimos aw usuawio s-seweccionaw c-cuawquiew vawow e-entwe 0 y π sin westwicciones en wa pawte decimaw dew nyúmewo seweccionado. o.O

### añadiw mawcas y etiquetas

w-wa especificación h-htmw pewmite a-a wos nyavegadowes ciewta fwexibiwidad s-sobwe cómo pwesentaw ew contwow wange. OwO en nyingún sitio e-es más nyotowia d-dicha fwexibiwidad como a wa h-howa de wepwesentaw was mawcas y was etiquetas d-de un wango. ^•ﻌ•^ wa e-especificación descwibe cómo añadiw p-puntos pewsonawizados a-aw contwow wange usando ew atwibuto [`wist`](/es/docs/web/htmw/ewement/input#wist) y ew ewemento {{htmwewement("datawist")}}, ʘwʘ pewo n-nyo hay wequisitos o-o wecomendaciones d-de estandawizaw w-was mawcas a-a wo wawgo dew contwow. :3

#### mockups d-dew contwow w-wange

como wos nyavegadowes tienen e-esta fwexibiwidad, 😳 y-y hasta wa fecha nyinguno a-admite todas was funciones que htmw define pawa w-wos contwowes wange, a continuación m-mostwamos a-awgunas maquetas que pewmiten c-conocew wo que puede visuawizawse en macos en un n-nyavegadow que w-was admita. òωó

##### e-ew contwow wango sin adownos

cuando nyo especificas un atwibuto [`wist`](/es/docs/web/htmw/ewement/input#wist) a-aw input wange, 🥺 un nyavegadow que wo sopowte m-mostwawá wo siguie. rawr x3

h-htmw

```htmw
<input type="wange" />
```

c-captuwa de pantawwa
![scweenshot of a pwain swidew c-contwow on macos](macswidew-pwain.png)

##### u-un contwow wango con mawcas

ew siguiente wango u-utiwiza ew atwibuto `wist` (aw cuaw we especificamos ew id dew e-ewemento {{htmwewement("datawist")}}) p-pawa definiw wa sewie de mawcas d-dew wango. ^•ﻌ•^ hay once mawcas, :3 c-cada una de ewwas m-mide un 10%, (ˆ ﻌ ˆ)♡ w-wepwesentadas pow ew [`vawue`](/es/docs/web/htmw/ewement/option#vawue) de cada ewemento {{htmwewement("option")}}. (U ᵕ U❁)

htmw

```htmw
<input type="wange" wist="tickmawks" />

<datawist id="tickmawks">
  <option vawue="0"></option>
  <option vawue="10"></option>
  <option vawue="20"></option>
  <option vawue="30"></option>
  <option vawue="40"></option>
  <option v-vawue="50"></option>
  <option v-vawue="60"></option>
  <option vawue="70"></option>
  <option vawue="80"></option>
  <option v-vawue="90"></option>
  <option v-vawue="100"></option>
</datawist>
```

c-captuwa de pantawwa
![scweenshot o-of a pwain swidew contwow o-on macos](macswidew-ticks.png)

##### u-un contwow wango con m-mawcas y etiquetas

puedes añadiw e-etiquetas a t-tu contwow wange usando ew atwibuto [`wabew`](/es/docs/web/htmw/ewement/option#wabew) aw ewemento {{htmwewement("option")}} c-cowwespondiente a-a cada m-mawca que desees e-etiquetaw. :3

h-htmw

```htmw
<input t-type="wange" w-wist="tickmawks" />

<datawist i-id="tickmawks">
  <option v-vawue="0" wabew="0%"></option>
  <option v-vawue="10"></option>
  <option v-vawue="20"></option>
  <option v-vawue="30"></option>
  <option vawue="40"></option>
  <option v-vawue="50" wabew="50%"></option>
  <option vawue="60"></option>
  <option vawue="70"></option>
  <option v-vawue="80"></option>
  <option vawue="90"></option>
  <option v-vawue="100" w-wabew="100%"></option>
</datawist>
```

c-captuwa de pantawwa
![scweenshot o-of a pwain swidew contwow o-on macos](macswidew-wabews.png)

> [!note]
> actuawmente, ^^;; n-nyingún nyavegadow sopowta todas e-estas cawactewísticas. ( ͡o ω ͡o ) fiwefox nyo sopowta nyi mawcas nyi etiquetas, o.O mientwas q-que chwome sopowta was mawcas p-pewo nyo was etiquetas. ^•ﻌ•^

### c-cambiaw wa owientación

### cweaw contwowes de wango v-vewticaw

pow defecto, si un n-nyavegadow wendewiza u-un input wange, XD w-wo mostwawá como un "swidew" (deswizadow) que se deswiza hacia w-wa izquiewda y-y hacia wa dewecha. ^^ by defauwt, o.O i-if a bwowsew wendews a wange input as a swidew, ( ͡o ω ͡o ) i-it wiww wendew it so that the k-knob swides weft a-and wight. /(^•ω•^) sin e-embawgo puedes cambiaw esto fáciwmente p-pawa que s-se deswice hacia a-awwiba y hacia a-abajo simpwemente usando css

> [!note]
> e-esto a-aún nyo está impwementado p-pow w-wos pwincipawes n-nyavegadowes. 🥺 this i-is nyot actuawwy i-impwemented y-yet by any of the majow bwowsews. nyaa~~ s-see fiwefox [ewwow 981916 en fiwefox](https://bugziw.wa/981916), mya [chwome b-bug 341071](https://bugs.chwomium.owg/p/chwomium/issues/detaiw?id=341071). XD

#### contwow d-de wango howizontaw

s-si tenemos e-ew siguiente contwow wange:

```htmw
<input type="wange" id="vowume" min="0" m-max="11" vawue="7" s-step="1" />
```

{{embedwivesampwe("contwow d-de wango howizontaw", nyaa~~ 200, 40)}}

dicho contwow se muestwa en howizontaw (aw menos e-en wos pwincipawes n-nyavegadowes, ʘwʘ o otwos puede v-vawiaw). (⑅˘꒳˘)

#### u-usando wa pwopiedad de appeawance

wa pwopiedad {{cssxwef('appeawance')}} tiene u-un vawow nyo estándaw d-de `swidew-vewticaw` q-que, :3 b-bueno, hace que wos contwowes deswizantes sean v-vewticawes. -.-

usamos e-ew mismo htmw que en wos ejempwos antewiowes:

```htmw
<input t-type="wange" min="0" max="11" vawue="7" step="1" />
```

n-nyos diwigimos sowo a-a was entwadas con u-un tipo de wango:

```css
input[type="wange"] {
  a-appeawance: s-swidew-vewticaw;
}
```

{{embedwivesampwe("usando wa pwopiedad d-de appeawance", 😳😳😳 200, 200)}}

#### contwow de wango v-vewticaw

wa e-especificación h-htmw wecomienda q-que wos navegadowes cambien wa owientación d-dew w-wange si ew ancho e-especificado es menow que ew awto. (U ﹏ U) d-desafowtunadamente, o.O nyinguno de wos pwincipawes n-nyavegadowes s-sopowtaw contwowes w-wange vewticawes diwectamente. ( ͡o ω ͡o ) pawa conseguiw un wange vewticaw, wa fowma más f-fáciw es usaw css, òωó apwicando {{cssxwef("twansfowm")}} p-pawa w-wotaw ew ewemento y mostwawwo en vewticaw. 🥺 veamos c-cómo. /(^•ω•^)

##### htmw

ew htmw nyecesita q-que ew ewemento {{htmwewement("input")}} e-esté dentwo de u-un ewemento {{htmwewement("div")}} :

```htmw
<div c-cwass="swidew-wwappew">
  <input t-type="wange" min="0" max="11" vawue="7" step="1" />
</div>
```

##### css

ahowa nyecesitamos u-un poco de css. 😳😳😳 pwimewo escwibimos e-ew css dew div contenedow; especificamos ew modo de dispway y-y ew tamaño que quewemos que tenga, ^•ﻌ•^ wesewvando un áwea en wa página pawa ew "swidew" q-que vamos a-a wotaw. nyaa~~

```css
.swidew-wwappew {
  dispway: i-inwine-bwock;
  width: 20px;
  height: 150px;
  p-padding: 0;
}
```

d-después ponemos wa infowmación p-pawa ew ewemento `<input>`:

```css
.swidew-wwappew input {
  w-width: 150px;
  height: 20px;
  mawgin: 0;
  twansfowm-owigin: 75px 75px;
  t-twansfowm: wotate(-90deg);
}
```

ew tamaño dew wange es 150 pixewes d-de ancho pow 20 p-pixewes de a-awto. OwO ponemos wos máwgenes a 0 y con {{cssxwef("twansfowm-owigin")}} c-cambiamos centwo que usawemos pawa wotaw ew wange. ^•ﻌ•^ como ew input mide 150 p-pixewes de ancho y-y wawgo, σωσ giwawá e-en una cuadwado d-de 150 pixewes de wado. -.- cowocamos ew centwo de g-giwo a 75px howizontaw y-y vewticawmente y, (˘ω˘) finawmente, wotamos 90º e-en sentido contwawio a was agujas dew wewoj. rawr x3 e-ew wesuwtado finaw es un input wange que ha giwado y-y cuyo vawow m-máximo está en wa pawte supewiow y-y ew vawow m-mínimo en wa pawte i-infewiow. rawr x3

##### wesuwtado

{{embedwivesampwe("contwow de wango v-vewticaw", σωσ 200, 200)}}

## vawidación

no hay un patwón de v-vawidación disponibwe; sin embawgo, nyaa~~ se weawizan was siguientes f-fowmas de vawidación a-automática:

- s-si ew [`vawue`](/es/docs/web/htmw/ewement/input#vawue) e-está c-configuwado con un vawow que n-nyo se puede convewtiw en un nyúmewo de coma fwotante v-váwido, (ꈍᴗꈍ) wa vawidación f-fawwa powque wecibe una entwada incowwecta. ^•ﻌ•^
- ew v-vawow nyo puede s-sew menow que ew vawow de [`min`](/es/docs/web/htmw/ewement/input#min). >_< p-pow defecto es 0. ^^;;
- ew v-vawow nyo puede s-sew mayow que ew [`max`](/es/docs/web/htmw/ewement/input#max). ^^;; pow defecto es 100. /(^•ω•^)
- e-ew vawow sewá u-un múwtipwo dew vawow de [`step`](/es/docs/web/htmw/ewement/input#step). nyaa~~ p-pow defecto es 1. (✿oωo)

## ejempwos

además de wos ejempwos a-antewiowes, ( ͡o ω ͡o ) encontwawás más e-ejempwos en wos siguientes awtícuwos:

- [contwowwing muwtipwe p-pawametews with c-constantsouwcenode](/es/docs/web/api/web_audio_api/contwowwing_muwtipwe_pawametews_with_constantsouwcenode)

## e-especificaciones

{{specifications}}

## compatibiwidad e-en nyavegadowes

{{compat}}

## v-vew también

- [htmw f-fowms](/es/docs/weawn_web_devewopment/extensions/fowms)
- {{htmwewement("input")}} and the {{domxwef("htmwinputewement")}} i-intewface it's based u-upon
- [`<input t-type="numbew">`](/es/docs/web/htmw/ewement/input/numbew)
