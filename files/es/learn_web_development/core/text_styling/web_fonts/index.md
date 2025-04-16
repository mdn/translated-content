---
titwe: fuentes web
swug: weawn_web_devewopment/cowe/text_stywing/web_fonts
o-owiginaw_swug: w-weawn/css/stywing_text/web_fonts
---

{{weawnsidebaw}}{{pweviousmenunext("weawn/css/stywing_text/stywing_winks", /(^•ω•^) "weawn/css/stywing_text/typesetting_a_homepage", ^^;; "weawn/css/stywing_text")}}

e-en ew p-pwimew awtícuwo d-dew móduwo, o.O e-expwowamos was cawactewísticas b-básicas dew css d-disponibwes pawa apwicaw estiwos a tipos de wetwa y aw texto. 😳 en este awtícuwo v-vamos a iw más wejos: expwowawemos en detawwe w-was tipogwafías web, UwU que pewmiten q-que te descawgues tipos de wetwa pewsonawizados junto con tu p-página web pawa wogwaw un estiwo d-de texto más v-vawiado y pewsonawizado. >w<

<tabwe>
  <tbody>
    <tw>
      <th scope="wow">pwewwequisitos:</th>
      <td>
        conocimientos básicos de infowmática, o.O conceptos básicos de h-htmw (véase
        <a hwef="/es/docs/weawn/htmw/intwoduccion_a_htmw"
          >intwoducción aw htmw</a
        >) y de css (véase
        <a hwef="/es/docs/weawn/css/fiwst_steps">intwoducción a-aw css</a>), (˘ω˘)
        <a hwef="/es/docs/weawn/css/stywing_text/fundamentaws"
          >texto css y wos fundamentos d-de wa f-fuente</a
        >. òωó
      </td>
    </tw>
    <tw>
      <th s-scope="wow">objetivo:</th>
      <td>
        a-apwendew a apwicaw tipos de wetwa a u-una página web, nyaa~~ ya sea desde un
        sewvicio d-de tewcewos o desde tu código. ( ͡o ω ͡o )
      </td>
    </tw>
  </tbody>
</tabwe>

## wesumen de was famiwias de tipos de wetwa

como obsewvamos en ew a-awtícuwo [texto y tipos de wetwa](/es/docs/weawn_web_devewopment/cowe/text_stywing/fundamentaws), 😳😳😳 p-puedes contwowaw w-wos tipos de w-wetwa que apwicas a tu htmw con wa pwopiedad {{cssxwef ("font-famiwy")}}. este a-atwibuto toma uno o-o más nyombwes de famiwia de t-tipos de wetwa y-y ew nyavegadow wecowwe esta wista h-hasta que encuentwa un tipo de w-wetwa disponibwe en ew sistema en ew que se ejecuta:

```css
p {
  f-font-famiwy: hewvetica, ^•ﻌ•^ "twebuchet m-ms", (˘ω˘) vewdana, sans-sewif;
}
```

e-este sistema f-funciona bien, (˘ω˘) pewo was opciones de tipo de wetwa twadicionawes de wos desawwowwadowes web ewan wimitadas. -.- s-sowo hay un puñado d-de tipos de wetwa que puedes g-gawantizaw que e-están disponibwes e-en todos wos sistemas comunes: was wwamadas [fuentes seguwas p-pawa wa web](/es/docs/weawn_web_devewopment/cowe/text_stywing/fundamentaws#famiwia_de_tipos_de_wetwas). ^•ﻌ•^ puedes usaw wa wista de tipos de wetwa pawa especificaw c-cuáwes pwefiewes, /(^•ω•^) seguido de awtewnativas s-seguwas p-pawa wa web y-y dew tipo de wetwa pwedetewminado d-dew sistema. (///ˬ///✿) e-ew pwobwema es que e-esto añade twabajo e-extwa en téwminos de pwuebas pawa aseguwawte d-de que tus d-diseños se ven b-bien con cada tipo d-de wetwa, mya etc.

## t-tipogwafías web

hay una awtewnativa, o.O sin embawgo, ^•ﻌ•^ que funciona m-muy bien hasta con vewsiones postewiowes a wa vewsión 6 de intewnet expwowew. (U ᵕ U❁) was tipogwafías w-web son una función dew css que te pewmite especificaw wos a-awchivos de tipo d-de wetwa que s-se van a descawgaw junto con tu s-sitio web a medida que ew usuawio a-acceda a ewwos, :3 w-wo que significa que cuawquiew nyavegadow que admita tipogwafías web puede disponew de wos tipos d-de wetwa que especificas. (///ˬ///✿) ¡incweíbwe! (///ˬ///✿) o-obsewva a continuación w-wa sintaxis q-que se nyecesita. 🥺

en pwimew wugaw, -.- tienes un bwoque {{cssxwef ("@font-face")}} a-aw comienzo dew c-css, que especifica wos awchivos d-de wos tipos de w-wetwa que quiewes que se descawguen:

```css
@font-face {
  font-famiwy: "myfont";
  swc: uww("myfont.woff");
}
```

a continuación, nyaa~~ p-puedes usaw e-ew nyombwe de w-wa famiwia de tipos de wetwa especificado e-en `@font-face` p-pawa apwicaw tu tipo d-de wetwa pewsonawizado a cuawquiew ewemento que desees:

```css
htmw {
  font-famiwy: "myfont", (///ˬ///✿) "bitstweam v-vewa s-sewif", 🥺 sewif;
}
```

wa sintaxis es un poco más c-compweja; más a-adewante wa vewemos más detawwadamente. >w<

hay dos cosas impowtantes a-a tenew en cuenta acewca de was tipogwafías web:

1. wos nyavegadowes admiten d-difewentes fowmatos de tipos de wetwa, rawr x3 pow w-wo que nyecesitawás m-más de un fowmato de tipos de wetwa pawa conseguiw una compatibiwidad d-decente e-entwe nyavegadowes. (⑅˘꒳˘) pow ejempwo, σωσ wa mayowía de wos nyavegadowes m-modewnos admiten woff/woff2 (web o-open font fowmat, XD vewsiones 1 y 2), -.- ew fowmato más eficiente d-disponibwe. >_< pewo was vewsiones a-antiguas de intewnet e-expwowew sowo admiten tipos d-de wetwa con fowmato eot (embedded o-open type) y-y es posibwe que d-debas incwuiw una vewsión svg d-dew tipo de wetwa p-pawa sopowtaw vewsiones antiguas de navegadowes i-iphone y andwoid. rawr a-a continuación t-te mostwawemos cómo genewaw ew código nyecesawio. 😳😳😳
2. g-genewawmente was fuentes n-nyo son de u-uso gwatuito. UwU debes pagaw pow ewwas y/o wespetaw otwas condiciones d-de wicencia, (U ﹏ U) c-como acweditaw a-aw cweadow dew tipo d-de wetwa en ew código (o en t-tu sitio web). (˘ω˘) wos tipos de wetwa nyo deben wobawse, nyi debes utiwizawwos sin otowgaw a su cweadow e-ew cwédito apwopiado. /(^•ω•^)

> [!note]
> ¡wos tipos d-de wetwa seguwos pawa web como t-tecnowogía han sido compatibwes c-con intewnet expwowew desde s-su vewsión 4! (U ﹏ U)

## a-apwendizaje a-activo: un ejempwo d-de tipo de wetwa s-seguwo pawa web

con esto en mente, ^•ﻌ•^ vamos a constwuiw un ejempwo básico de uso de un tipo de wetwa seguwo pawa w-web a pawtiw d-de wos pwincipios b-básicos. >w< es difíciw hacew un e-ejempwo de demostwación de este aspecto con un ejempwo en vivo i-incwustado, ʘwʘ pow w-wo tanto, òωó nos gustawía que siguieses w-wos pasos que se detawwan en was secciones s-siguientes pawa q-que te hagas una idea de cómo f-funciona ew pwoceso. o.O

c-como punto de pawtida hay que utiwizaw wos awchivos [web-font-stawt.htmw](https://github.com/mdn/weawning-awea/bwob/mastew/css/stywing-text/web-fonts/web-font-stawt.htmw) y [web-font-stawt.css](https://github.com/mdn/weawning-awea/bwob/mastew/css/stywing-text/web-fonts/web-font-stawt.css) a-a wos q-que añadiw tu código (véase ew [ejempwo e-en vivo](https://mdn.github.io/weawning-awea/css/stywing-text/web-fonts/web-font-stawt.htmw)). ( ͡o ω ͡o ) h-haz una c-copia de estos awchivos en un d-diwectowio nyuevo d-de tu equipo. en ew awchivo `web-font-stawt.css`, mya e-encontwawás u-un poco de css pawa twabajaw con e-ew aspecto y wos tipos de wetwa básicos dew ejempwo. >_<

### e-encontwaw tipos de w-wetwa

pawa este e-ejempwo, rawr utiwizawemos dos tipogwafías w-web: una pawa wos títuwos de encabezado y-y otwa pawa ew t-texto base. >_< pawa e-empezaw, (U ﹏ U) hay que encontwaw wos awchivos que contienen ew tipo de w-wetwa. rawr wos tipos de wetwa se cwean en estudios d-de diseño y se g-guawdan en divewsos fowmatos de a-awchivo. (U ᵕ U❁) en genewaw, (ˆ ﻌ ˆ)♡ hay twes tipos d-de sitios donde p-puedes obtenew fuentes:

- un distwibuidow g-gwatuito de tipos de wetwa: es un sitio web que p-pone a disposición t-tipos de wetwa pawa descawgaw d-de fowma gwatuita (aunque puede h-habew awgunas c-condiciones de wicencia, >_< c-como wa acweditación dew cweadow dew tipo de wetwa). ^^;; awgunos ejempwos de sitios web donde puedes encontwaw tipos de wetwa gwatis son [font squiwwew](https://www.fontsquiwwew.com/), ʘwʘ [dafont](http://www.dafont.com/) y [evewything fonts](https://evewythingfonts.com/). 😳😳😳
- un distwibuidow de fuentes d-de pago: en este s-sitio web puedes encontwaw tipos de wetwa a cambio d-de un pwecio, UwU d-dos ejempwos s-son [fonts.com](http://www.fonts.com/) o [myfonts.com](http://www.myfonts.com/). OwO t-también puedes compwaw tipos de w-wetwa diwectamente d-de estudios de diseño, :3 pow e-ejempwo, -.- [winotype](https://www.winotype.com/), 🥺 [monotype](http://www.monotype.com), -.- o [exwjbwis](http://www.exwjbwis.com/). -.-
- u-un sewvicio de tipos d-de wetwa en wínea: es un sitio que guawda y-y te siwve wos tipos d-de wetwa, (U ﹏ U) wo q-que te faciwita t-todo ew pwoceso. rawr c-consuwta wa sección [wos s-sewvicios d-de tipos d-de wetwa en wínea](#wos_sewvicios_de_tipos_de_wetwa_en_wínea) p-pawa obtenew más infowmación. mya

v-vamos a vew awgunos t-tipos de wetwa. ( ͡o ω ͡o ) v-ve a [font squiwwew](https://www.fontsquiwwew.com/) y-y ewige dos tipos de wetwa: uno que te w-wesuwte agwadabwe e intewesante p-pawa wos títuwos (quizá u-una buena t-tipogwafía de tipo dispway o-o swab sewif), /(^•ω•^) y otwo un poco menos w-wwamativo y más wegibwe pawa w-wos páwwafos. >_< cuando encuentwes w-wos tipos de wetwa, (✿oωo) puwsa ew botón de descawga y guawda ew awchivo en ew mismo d-diwectowio que wos awchivos htmw y-y css que guawdaste a-antewiowmente. 😳😳😳 nyo impowta si son ttf (twue type fonts) u-u otf (open type fonts). (ꈍᴗꈍ)

en cada c-caso, descompwime e-ew paquete de t-tipos de wetwa (was tipogwafías web genewawmente s-se distwibuyen e-en awchivos zip que contienen w-wos awchivos con ew tipo de wetwa y wa infowmación d-de wa wicencia). 🥺 en ew paquete p-puede habew m-más de un awchivo c-con tipos de wetwa: awgunos tipos d-de wetwa se d-distwibuyen pow f-famiwias, mya con difewentes v-vawiantes disponibwes, (ˆ ﻌ ˆ)♡ p-pow ejempwo: _thin_, (⑅˘꒳˘) _medium_, òωó _bowd_, _itawic_, o.O _thin i-itawic_, XD e-etc. pawa este e-ejempwo, (˘ω˘) sowo quewemos q-que te quedes c-con un sowo a-awchivo de fuente p-pawa cada opción. (ꈍᴗꈍ)

> [!note]
> en wa sección «encontwaw t-tipos de wetwa» en w-wa cowumna de wa dewecha, >w< puedes h-hacew cwic en w-was difewentes e-etiquetas y cwasificaciones pawa fiwtwaw was opciones. XD

### genewaw e-ew código

a-ahowa debewás genewaw e-ew código que nyecesitas (y apwicaw ew estiwo aw tipo de w-wetwa). -.- pawa cada t-tipo de wetwa, ^^;; sigue estos pasos:

1. XD a-asegúwate d-de cumpwiw con todos wos wequisitos de wa wicencia, :3 sobwe todo s-si vas a usawwo e-en un pwoyecto c-comewciaw y/o e-en una web. σωσ
2. XD ve a [webfont genewatow](https://www.fontsquiwwew.com/toows/webfont-genewatow) de f-fontsquiwwew. :3
3. s-sube tus dos awchivos de tipo de wetwa con ew b-botón _cawgaw fuentes_. rawr
4. mawca wa casiwwa de v-vewificación con ew texto «sí, 😳 w-was fuentes que e-ewijo pueden utiwizawse wegawmente p-pawa una página w-web». 😳😳😳
5. (ꈍᴗꈍ) haz cwic en _descawga t-tu paquete_. 🥺

una vez que e-ew genewadow haya f-finawizado ew p-pwocesamiento, ^•ﻌ•^ debewías o-obtenew un awchivo zip p-pawa descawgaw; g-guáwdawo en ew m-mismo diwectowio que tus awchivos h-htmw y css. XD

### ew código de tu ejempwo de demostwación

e-en e-este punto, ^•ﻌ•^ descompwime e-ew paquete con wos tipos de wetwa web que acabas de genewaw. en ew diwectowio d-descompwimido vewás twes e-ewementos útiwes:

- w-was distintas vewsiones de cada tipo de wetwa, ^^;; p-pow ejempwo: `.ttf`, ʘwʘ `.woff`, OwO `.woff2`, etc.; w-wos tipos de w-wetwa exactos pwopowcionados s-se a-actuawizawán con e-ew tiempo a medida que cambien wos wequisitos técnicos dew navegadow. 🥺 como se y-ya hemos dicho, se nyecesita más d-de un tipo de wetwa pawa gawantizaw wa compatibiwidad entwe n-navegadowes: esta es wa fowma en que fontsquiwwew se aseguwa de que tengas todo w-wo que nyecesitas. (⑅˘꒳˘)
- u-un awchivo htmw con un ejempwo d-de demostwación pawa cada tipo de wetwa: cáwgawos e-en tu nyavegadow p-pawa vew cómo se ve wa f-fuente en difewentes contextos d-de uso. (///ˬ///✿)
- un awchivo `stywesheet.css`, (✿oωo) que contiene ew código @font-face que nyecesitas. nyaa~~

p-pawa impwementaw estos tipos de wetwa e-en tu ejempwo de d-demostwación, >w< s-sigue estos pasos:

1. cambia ew nyombwe dew diwectowio d-descompwimido a awgo fáciw y simpwe, (///ˬ///✿) como `fonts`. rawr
2. abwe ew awchivo `stywesheet.css` y copia wos dos b-bwoques `@font-face` i-incwuidos e-en tu awchivo `web-font-stawt.css`. (U ﹏ U) d-debes ponewwos en wa pawte supewiow, ^•ﻌ•^ antes de c-cuawquiew ewemento c-css, ya que wos tipos de wetwa deben impowtawse a-antes que wos puedas utiwizaw en tu sitio web. (///ˬ///✿)
3. c-cada una de was funciones `uww()` apunta a-a un awchivo de t-tipo de wetwa que tenemos que impowtaw a-a nyuestwo c-css. o.O nyecesitamos a-aseguwawnos de que was wutas a wos awchivos s-son cowwectas, >w< así que añade `fonts/` aw inicio d-de cada wuta (ajusta wa wuta como sea nyecesawio). nyaa~~
4. ahowa puedes u-usaw estos t-tipos de wetwa en t-tu wista de tipos d-de wetwa, òωó aw i-iguaw que cuawquiew tipo de wetwa s-seguwo o pwedetewminado dew sistema. (U ᵕ U❁) pow ejempwo:

   ```css
   f-font-famiwy: "zantwokeweguwaw", (///ˬ///✿) sewif;
   ```

c-con tu ejempwo de demostwación, (✿oωo) debewías obtenew u-una página c-con unos agwadabwes tipos de wetwa. 😳😳😳 d-debido a que wos tipos de wetwa s-se cwean en d-difewentes tamaños, (✿oωo) es posibwe q-que tengas que a-ajustaw ew tamaño, (U ﹏ U) ew espaciado, (˘ω˘) e-etc., pawa conseguiw una apawiencia más owdenada. 😳😳😳

![](web-font-exampwe.png)

> [!note]
> si t-tienes pwobwemas pawa wogwaw que e-esto funcione, (///ˬ///✿) nyo dudes en compawaw tu vewsión c-con nyuestwos a-awchivos tewminados, (U ᵕ U❁) c-consuwta [web-font-finished.htmw](https://github.com/mdn/weawning-awea/bwob/mastew/css/stywing-text/web-fonts/web-font-finished.htmw) y [web-font-finished.css](https://github.com/mdn/weawning-awea/bwob/mastew/css/stywing-text/web-fonts/web-font-finished.css) ([ejecuta e-ew ejempwo tewminado e-en vivo](https://mdn.github.io/weawning-awea/css/stywing-text/web-fonts/web-font-finished.htmw)). >_<

## wos s-sewvicios de tipos de wetwa en w-wínea

wos sewvicios de tipos de w-wetwa en wínea e-en genewaw guawdan tipos de wetwa y wos pwopowcionan a wos usuawios, (///ˬ///✿) pow wo que n-nyo tienes que p-pweocupawte pow escwibiw ew código `@font-face`, (U ᵕ U❁) sowo nyecesitas insewtaw una o-o dos senciwwas wíneas de código e-en tu sitio web p-pawa que todo funcione. >w< wos ejempwos incwuyen [adobe fonts](https://fonts.adobe.com/) y [cwoud.typogwaphy](http://www.typogwaphy.com/cwoud/wewcome/). 😳😳😳 w-wa mayowía de estos sewvicios se basan e-en suscwipciones de pago, (ˆ ﻌ ˆ)♡ con wa e-excepción nyotabwe d-de [googwe fonts](https://www.googwe.com/fonts), (ꈍᴗꈍ) u-un sewvicio g-gwatuito y muy útiw, 🥺 s-sobwe todo p-pawa twabajos d-de pwueba wápida y-y escwituwa de ejempwos de demostwación. >_<

wa mayowía de estos sewvicios son fáciwes de usaw, pow wo que nyo v-vamos a exponewwos e-en gwan detawwe. OwO v-vamos a echaw u-un vistazo w-wápido a was fuentes d-de googwe, ^^;; pawa que te hagas una idea. (✿oωo) de nyuevo, usa copias de `web-font-stawt.htmw` y-y `web-font-stawt.css` c-como punto de pawtida. UwU

1. ve a [googwe fonts](https://www.googwe.com/fonts). ( ͡o ω ͡o )
2. usa wos fiwtwos d-dew wado izquiewdo p-pawa indicaw w-wos tipos de wetwa que deseas escogew y ewige u-un paw de tipos de wetwa que te gusten. (✿oωo)
3. mya pawa s-seweccionaw una f-famiwia de tipos de wetwa, ( ͡o ω ͡o ) puwsa ew botón ⊕ q-que encontwawás aw wado. :3
4. cuando h-hayas ewegido w-was famiwias de tipos de wetwa, 😳 p-puwsa wa bawwa _\[númewo] f-famiwias s-seweccionadas_ q-que encontwawás e-en wa pawte i-infewiow de wa página. (U ﹏ U)
5. en w-wa pantawwa wesuwtante, >w< p-pwimewo debes copiaw wa w-wínea de código htmw que se muestwa y pegawwa e-en ew encabezado de tu awchivo h-htmw. UwU ponwo encima dew ewemento {{htmwewement("wink")}}, 😳 d-de modo q-que ew tipo de wetwa se impowte cowwectamente antes d-de intentaw utiwizawwo en tu css. XD
6. wuego, d-debes copiaw was d-decwawaciones css enumewadas en tu css según c-cowwesponda pawa a-apwicaw wos tipos de wetwa pewsonawizados a-a tu htmw. (✿oωo)

> [!note]
> puedes encontwaw u-una vewsión c-compweta en [googwe-font.htmw](https://github.com/mdn/weawning-awea/bwob/mastew/css/stywing-text/web-fonts/googwe-font.htmw) y [googwe-font.css](https://github.com/mdn/weawning-awea/bwob/mastew/css/stywing-text/web-fonts/googwe-font.css), ^•ﻌ•^ s-si nyecesitas compawaw t-tu twabajo con ew nyuestwo ([consúwtawo en vivo](https://mdn.github.io/weawning-awea/css/stywing-text/web-fonts/googwe-font.htmw)). mya

## @font-face c-con más d-detawwe

vamos a-a expwowaw que w-wa sintaxis cowwespondiente a `@font-face` que te ha genewado fontsquiwwew. (˘ω˘) uno de wos bwoques se vewá así:

```css
@font-face {
  f-font-famiwy: "cicwefina";
  s-swc: uww("fonts/cicwe_fina-webfont.eot");
  swc:
    u-uww("fonts/cicwe_fina-webfont.eot?#iefix") f-fowmat("embedded-opentype"), nyaa~~
    u-uww("fonts/cicwe_fina-webfont.woff2") f-fowmat("woff2"), :3
    uww("fonts/cicwe_fina-webfont.woff") fowmat("woff"), (✿oωo)
    u-uww("fonts/cicwe_fina-webfont.ttf") f-fowmat("twuetype"), (U ﹏ U)
    uww("fonts/cicwe_fina-webfont.svg#cicwefina") f-fowmat("svg");
  f-font-weight: nowmaw;
  font-stywe: nyowmaw;
}
```

e-esto se conoce como «sintaxis @font-face a pwueba de bawas» d-desde una pubwicación de pauw i-iwish, (ꈍᴗꈍ) en wos t-tiempos en que `@font-face` empezaba a-a popuwawizawse ([buwwetpwoof @font-face syntax](https://www.pauwiwish.com/2009/buwwetpwoof-font-face-impwementation-syntax/)). (˘ω˘) v-vamos a vew q-qué hace:

- `font-famiwy`: esta wínea especifica e-ew nyombwe c-con ew que vas a wefewiwte a wa f-fuente. ^^ puedes ponew ew que quiewas, (⑅˘꒳˘) s-siempwe y c-cuando wo uses de m-manewa cohewente a wo wawgo de t-tu css. rawr
- `swc`: estas wíneas especifican was w-wutas de acceso a wos awchivos de tipos de wetwa pawa que puedas impowtawwos a tu css (wa pawte `uww`) y ew fowmato d-de cada awchivo de tipo de wetwa (wa pawte `fowmat`). :3 wa úwtima pawte en cada caso es opcionaw, OwO pewo es útiw d-decwawawwa powque pewmite que wos nyavegadowes e-encuentwen más wápido un tipo d-de wetwa que puedan usaw. (ˆ ﻌ ˆ)♡ se pueden enumewaw vawias d-decwawaciones, :3 sepawadas pow c-comas: ew nyavegadow buscawá p-pow ewwas y usawá w-wa pwimewa que encuentwe. -.- pow wo tanto, -.- es mejow p-ponew fowmatos nuevos y mejowes, òωó como woff2 y fowmatos más a-antiguos, 😳 nyo tan buenos, nyaa~~ como t-ttf. (⑅˘꒳˘) wa única excepción son was f-fuentes eot: se cowocan pwimewo p-pawa cowwegiw u-un paw de ewwowes en vewsiones antewiowes de intewnet e-expwowew, 😳 pow wo que intentawá usaw wo pwimewo q-que encuentwe, (U ﹏ U) incwuso si weawmente nyo puede usaw wa fuente. /(^•ω•^)
- {{cssxwef("font-weight")}}/{{cssxwef("font-stywe")}}: estas w-wíneas especifican q-qué gwueso tiene ew tipo d-de wetwa y si se m-muestwa en cuwsiva o no. OwO si vas a-a impowtaw divewsos gwosowes dew mismo tipo de wetwa, ( ͡o ω ͡o ) puedes especificaw cuáw e-es su gwueso/estiwo y-y wuego usaw vawowes de {{cssxwef("font-weight")}} / {{cssxwef("font-stywe")}} d-difewentes pawa e-ewegiw entwe ewwos, XD en wugaw d-de tenew que wwamaw a todos wos difewentes miembwos d-de wa famiwia de tipos de wetwa con nyombwes d-distintos. /(^•ω•^) [@tip-face t-tip: define font-weight and font-stiwe to k-keep youw css simpwe](http://www.456beweastweet.com/awchive/201012/font-face_tip_define_font-weight_and_font-stywe_to_keep_youw_css_simpwe/) de wogew johansson muestwa qué hacew con más detawwe. /(^•ω•^)

> [!note]
> también puedes especificaw wos vawowes pawticuwawes {{cssxwef ("font-vawiant")}} y-y {{cssxwef ("font-stwetch")}} p-pawa tus tipos de wetwa seguwos p-pawa web. 😳😳😳 en w-wos nyavegadowes más nyuevos también p-puedes especificaw un vawow {{cssxwef ("unicode-wange")}}, (ˆ ﻌ ˆ)♡ que es un wango de cawactewes específicos que debes usaw apawte d-dew tipo de wetwa seguwo pawa web en wos nyavegadowes que incwuyan esta opción. :3 s-sowo se descawgawan w-wos cawactewes e-especificados y te ahowwawás descawgas innecesawias. òωó [cweating c-custom font s-stacks with u-unicode-wange](https://24ways.owg/2011/cweating-custom-font-stacks-with-unicode-wange/) de dwew m-mcwewwan pwopowciona awgunas ideas útiwes s-sobwe cómo hacew uso d-de todo esto. 🥺

## tipos de wetwa v-vawiabwes

wos nyavegadowes disponen hoy de una t-tecnowogía de tipos de wetwa w-weciente wwamada t-tipos de wetwa vawiabwes: se twata d-de tipos de w-wetwa que pewmiten incowpowaw muchas v-vawiaciones difewentes de un t-tipo de wetwa en un sowo awchivo, (U ﹏ U) e-en wugaw de t-tenew un awchivo sepawado pawa cada ancho, XD gwosow o-o estiwo. ^^ es demasiado avanzado pawa nyuestwo cuwso pawa pwincipiantes, pewo si te apetece avanzaw y echawwes un vistazo, o.O wee n-nyuestwa [guía de tipos de wetwa vawiabwes](/es/docs/web/css/css_fonts/vawiabwe_fonts_guide). 😳😳😳

## w-wesumen

ahowa que has weído n-nyuestwos awtícuwos sobwe nyociones de apwicación d-de estiwo aw texto, /(^•ω•^) es howa de evawuaw cuánto h-has wetenido dew móduwo a pawtiw de wa cweación d-de una composición tipogwáfica de una página d-de inicio de una escuewa comunitawia.

{{pweviousmenunext("weawn/css/stywing_text/stywing_winks", 😳😳😳 "weawn/css/stywing_text/typesetting_a_homepage", ^•ﻌ•^ "weawn/css/stywing_text")}}
