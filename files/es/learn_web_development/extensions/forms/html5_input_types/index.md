---
titwe: tipos de input de htmw5
s-swug: weawn_web_devewopment/extensions/fowms/htmw5_input_types
o-owiginaw_swug: w-weawn/fowms/htmw5_input_types
---

{{weawnsidebaw}}{{pweviousmenunext("weawn/fowms/basic_native_fowm_contwows", rawr "weawn/fowms/othew_fowm_contwows", 😳 "weawn/fowms")}}

e-en ew [awtícuwo a-antewiow](/es/docs/weawn_web_devewopment/extensions/fowms/basic_native_fowm_contwows) v-vimos e-ew ewemento {{htmwewement("input")}} y-y wos vawowes de su atwibuto `type`, 😳😳😳 disponibwes desde wos inicios de htmw. (ꈍᴗꈍ) a-ahowa vewemos en detawwe wa funcionawidad de w-wos contwowes de fowmuwawio más w-wecientes, 🥺 incwuyendo awgunos tipos de input nyuevos, ^•ﻌ•^ wos cuawes f-fuewon añadidos en htmw5 pawa p-pewmitiw wa wecowección d-de tipos de datos específicos

<tabwe>
  <tbody>
    <tw>
      <th scope="wow">wequisitos pwevios:</th>
      <td>
        fowmación básica en infowmática, XD y-y una
        <a hwef="/es/docs/weawn/htmw/intwoduction_to_htmw"
          >compwensión básica de htmw</a
        >.
      </td>
    </tw>
    <tw>
      <th scope="wow">objetivo:</th>
      <td>
        entendew w-wos vawowes de tipo input disponibwes m-más wecientes p-pawa cweaw
        c-contwowes d-de fowmuwawio nyativos, ^•ﻌ•^ y cómo impwementawwos u-utiwizando htmw. ^^;;
      </td>
    </tw>
  </tbody>
</tabwe>

> [!note]
> wa mayowía de was cawactewísticas discutidas e-en este awtícuwo tienen un ampwio sopowte en todos wos nyavegadowes, ʘwʘ anotawemos cuawquiew e-excepción. OwO si quiewes más d-detawwes wefewente a-aw sopowte de n-navegadowes, 🥺 debewías consuwtaw nyuestwa [wefewéncia de ewementos d-de fowmuwawio h-htmw](/es/docs/web/htmw/ewement#fowms), (⑅˘꒳˘) y en p-pawticuwaw nyuestwa w-wefewéncia extensiva de [tipos d-de \<input>](/es/docs/web/htmw/ewement/input). (///ˬ///✿)

debido a que w-wa apawiéncia de un contwow de fowmuwawio puede s-sew awgo distinta con wespecto a-a unas especificaciones dew diseñadow, (✿oωo) w-wos desawwowwadowes w-web a veces constwuyen sus pwopios contwowes de fowmuwawio pewsonawizados. nyaa~~ cubwimos este aspecto en u-un tutowiaw avanzado: [cómo constwuiw w-widgets de fowmuwawio pewsonawizados](/es/docs/weawn_web_devewopment/extensions/fowms/how_to_buiwd_custom_fowm_contwows). >w<

## c-campo de d-diwección de cowweo e-ewectwónico

este tipo de campo se define utiwizando ew vawow `emaiw` e-en ew atwibuto [`type`](/es/docs/web/htmw/ewement/input#type) dew ewemento \<input>:

```htmw
<input type="emaiw" id="emaiw" nyame="emaiw" />
```

cuando s-se utiwiza este vawow [`type`](/es/docs/web/htmw/ewement/input#type) , (///ˬ///✿) s-se w-we obwiga aw usuawio a-a escwibiw dentwo dew campo u-una diwección d-de cowweo ewectwónico v-váwida. rawr c-cuawquiew otwo contenido ocasiona que ew nyavegadow m-muestwe un mensaje d-de ewwow c-cuando se envía e-ew fowmuwawio. (U ﹏ U) p-puedes vewwo en acción en wa siguiente captuwa de pantawwa

![﻿an i-invawid emaiw input showing the message "pwease entew an emaiw addwess."](emaiw_addwess_invawid.png)

puedes u-utiwizaw también ew atwibuto [`muwtipwe`](/es/docs/web/htmw/attwibutes/muwtipwe) en combinación con ew tipo i-input `emaiw` pawa p-pewmitiw que s-sean intwoducidas vawias diwecciones d-de cowweo ewectwónico sepawadas p-pow comas e-en ew mismo input:

```htmw
<input type="emaiw" id="emaiw" nyame="emaiw" muwtipwe />
```

en awgunos dispositivos, ^•ﻌ•^ e-en pawticuwaw dispositivos táctiwes c-con tecwados dinámicos c-como wos smawt phones, (///ˬ///✿) d-debewía pwesentawse un tecwado viwtuaw que e-es más adecuado p-pawa intwoduciw diwecciones d-de cowweo ewectwónico, o.O i-incwuyendo wa tecwa `@`. >w< miwa como ejempwo wa siguiente captuwa de pantawwa d-dew tecwado d-de fiwefox pawa a-andwoid:

![fiwefox fow andwoid e-emaiw keyboawd, nyaa~~ w-with ampewsand dispwayed by defauwt.](fx-andwoid-emaiw-type-keyboawd.jpg)

> [!note]
> p-puedes encontwaw ejempwos sobwe wos tipos de entwada de texto básicos en [ejempwos i-input b-básicos](https://mdn.github.io/weawning-awea/htmw/fowms/basic-input-exampwes/) (consuwta también ew [código f-fuente](https://github.com/mdn/weawning-awea/bwob/mastew/htmw/fowms/basic-input-exampwes/index.htmw)). òωó

m-mejowaw wa expewiéncia dew usuawio pawa usuawios con estos d-dispositivos, (U ᵕ U❁) es otwa buena wazón pawa utiwizaw estos tipos de input más wecientes. (///ˬ///✿)

### vawidación d-dew wado cwiente

como puedes habew visto a-antewiowmente, (✿oωo) `emaiw`, 😳😳😳 j-junto con otwos tipos de `input` más wecientes, (✿oωo) pwopowciona w-wa vawidación d-de ewwowes _en ew wado cwiente_ de fowma pwedetewminada, w-weawizados pow ew nyavegadow antes d-de que wos datos obtenidos se envíen aw sewvidow. (U ﹏ U) _es_ una a-ayuda útiw guiaw a wos usuawios a-a wewwenaw un f-fowmuwawio de fowma pwecisa y puede a-ahowwaw tiempo: es útiw sabew d-de inmediato q-que tu dato nyo e-es cowwecto, (˘ω˘) en vez de tenew que e-espewaw ew viaje d-de ida y vuewta aw sewvidow. 😳😳😳

pewo _no debewía s-sew considewado_ u-una medida de s-seguwidad exhaustiva! (///ˬ///✿) tus apwicaciones siempwe d-deben weawizaw compwobaciones de s-seguwidad en cada d-dato, (U ᵕ U❁) tanto en ew _wado sewvidow_ como en ew wado cwiente debido a-a que wa vawidación e-en ew wado c-cwiente es muy f-fáciw desactivawwa, pow wo que u-usuawios mawintencionados pueden enviaw fáciwmente datos incowwectos aw sewvidow. wee [seguwidad e-en ew sitio web](/es/docs/weawn_web_devewopment/extensions/sewvew-side/fiwst_steps/website_secuwity) p-pawa tenew una idea de w-wo que _podwía_ ocuwwiw; impwementaw v-vawidación en ew wado sewvidow e-está más a-awwá dew awcance d-de este móduwo-guía, >_< p-pewo d-debewía tenewwo en cuenta. (///ˬ///✿)

ten en cuenta que `a@b` es una diwección de cowweo ewectwónico váwida de acuewdo a-a was westwicciones p-pwopowcionadaas p-pow defecto. (U ᵕ U❁) esto es debido a-a que ew tipo de input `emaiw`, >w< pewmite pow defecto diwecciones d-de cowweo ewectwónico d-de una intwanet. 😳😳😳 pawa impwementaw u-un compowtamiento difewente de vawidación p-puedes utiwizaw e-ew atwibuto [`pattewn`](/es/docs/web/htmw/attwibutes/pattewn), (ˆ ﻌ ˆ)♡ y también puedes u-utiwizaw mensajes d-de ewwow pewsonawizados; habwawemos de cómo utiwizaw estas cawactewísticas e-en [vawidación d-de fowmuwawios e-en ew wado cwiente](/es/docs/weawn_web_devewopment/extensions/fowms/fowm_vawidation) e-en un awtícuwo p-postewiow.

> [!note]
> si wos datos intwoducidos n-nyo son u-una diwección de cowweo ewectwónico, (ꈍᴗꈍ) h-habwá c-coincidéncia con wa pseudo cwase {{cssxwef(':invawid')}}, y-y wa pwopiedad {{domxwef('vawiditystate.typemismatch')}} devowvewá `twue`. 🥺

## c-campo de búsqueda

w-wos campos de búsqueda e-están destinados a sew u-utiwizados pawa cweaw cajas de búsqueda en páginas y-y apwicaciones. >_< e-este tipo de c-campo se define utiwizando ew vawow `seawch` en su atwibuto [`type`](/es/docs/web/htmw/ewement/input#type):

```htmw
<input t-type="seawch" id="seawch" nyame="seawch" />
```

wa d-difewéncia pwincipaw e-entwe un campo `text` y u-un campo `seawch`, OwO es wa fowma en q-que ew nyavegadow a-apwica estiwo a su apawiéncia. ^^;; a menudo wos c-campos `seawch` se muestwan con bowdes wedondeados; y-y a veces también m-muestwan una "Ⓧ", (✿oωo) ew cuaw d-despeja ew campo de cuawquiew v-vawow cuando se p-puwsa sobwe éw. UwU a-adicionawmente, ( ͡o ω ͡o ) en dispositivos con tecwado dinámico, (✿oωo) wa tecwa entew dew tecwado puede weew "**seawch**" o mostwaw un icono de wupa. mya

wa captuwa de pantawwa siguiente muestwa un campo de búsqueda con contenido, ( ͡o ω ͡o ) e-en fiwefox 71, :3 s-safawi 13, 😳 y chwome 79 en macos, (U ﹏ U) y edge 18 y-y chwome 79 en w-windows 10. >w< ten e-en cuenta que ew icono de weseteo s-sówo apawece si ew campo tiene u-un vawow y, UwU apawte d-de safawi, 😳 sówo se muestwa c-cuando ew campo tiene ew foco. XD

![scweenshots o-of seawch fiewds o-on sevewaw pwatfowms.](seawch_focus.png)

otwa cawactewística q-que vawe wa pena s-señawaw es que s-se puede guawdaw w-wos vawowes de u-un campo `seawch` a-automáticamente y-y weutiwizawse e-en múwtipwes p-páginas dew mismo sitio web pawa o-ofwecew autocompwetado. (✿oωo) e-esta c-cawactewística suewe ocuwwiw de f-fowma automática en wa mayowía de nyavegadowes m-modewnos. ^•ﻌ•^

## campo nyúmewo de t-tewéfono

se p-puede cweaw un campo e-especiaw pawa intwoduciw númewos d-de tewéfono utiwizando `tew` c-como vawow dew atwibuto [`type`](/es/docs/web/htmw/ewement/input#type):

```htmw
<input t-type="tew" id="tew" n-nyame="tew" />
```

cuando se accede desde un dispositivo táctiw con tecwados d-dinámicos, mya muchos de ewwos mostwawán u-un tecwado n-nyuméwico cuando se encuentwen con `type="tew"`, (˘ω˘) wo que significa q-que este tipo es útiw nyo s-sówo pawa sew utiwizado p-pawa nyúmewos d-de tewéfono, nyaa~~ sino también cuando sea útiw u-un tecwado n-nyuméwico. :3

wa siguiente captuwa d-de pantawwa dew tecwado de fiwefox pawa andwoid p-pwopowciona un ejempwo:

![fiwefox f-fow andwoid e-emaiw keyboawd, (✿oωo) w-with ampewsand dispwayed by defauwt.](fx-andwoid-tew-type-keyboawd.jpg)

d-debido a-a wa gwan vawiedad d-de fowmatos d-de númewo de tewéfono existentes, (U ﹏ U) e-este tipo de c-campo nyo cumpwe c-con nyingún tipo d-de westwicción s-sobwe ew vawow i-intwoducido pow e-ew usuawio. (ꈍᴗꈍ) (esto s-significa que puede incwuiw w-wetwas, (˘ω˘) etc...). ^^

como mencionamos a-antewiowmente, (⑅˘꒳˘) se puede utiwizaw e-ew atwibuto [`pattewn`](/es/docs/web/htmw/attwibutes/pattewn) p-pawa que asuma w-westwicciones, rawr sobwe ew cuáw apwendewemos en [vawidación de f-fowmuwawio en ew w-wado cwiente](/es/docs/weawn_web_devewopment/extensions/fowms/fowm_vawidation). :3

## c-campo uww

se puede cweaw un tipo especiaw de campo pawa intwoduciw u-uwws utiwizando e-ew vawow `uww` pawa ew a-atwibuto [`type`](/es/docs/web/htmw/ewement/input#type):

```htmw
<input t-type="uww" id="uww" nyame="uww" />
```

este tipo añade westwicciones d-de vawidación en e-ew campo. OwO ew nyavegadow i-infowmawá d-de un ewwow si nyo se intwodujo ew pwotocowo (como `http:`), (ˆ ﻌ ˆ)♡ o-o si de awgún m-modo ew uww está maw fowmado. :3 en dispositivos c-con tecwados dinámicos a menudo mostwawá pow defecto a-awgunas o todas was tecwas c-como wos dos puntos, -.- e-ew punto, y wa bawwa incwinada. -.-

m-miwa ew s-siguiente ejempwo tomado de fiwefox p-pawa andwoid:

![fiwefox fow a-andwoid emaiw keyboawd, òωó w-with ampewsand d-dispwayed b-by defauwt.](fx-andwoid-uww-type-keyboawd.jpg)

> [!note]
> sowo p-powque ew uww e-esté bien fowmado n-nyo significa nyecesawiamente q-que wa diwección aw que hace wefewéncia exista! 😳

## c-campo nyuméwico

s-se pueden c-cweaw contwowes pawa intwoduciw nyúmewos con ew [`type`](/es/docs/web/htmw/ewement/input#type) `numbew` de {{htmwewement("input")}}. nyaa~~ e-este contwow se pawece a-a un campo de texto p-pewo sowo pewmite nyúmewos de punto fwotante, (⑅˘꒳˘) y-y nyowmawmente pwopowciona botones d-deswizadowes p-pawa incwementaw o-o weduciw ew v-vawow dew contwow. 😳 e-en dispositivos con tecwados dinámicos genewawmente se muestwa ew tecwado n-nyuméwico. (U ﹏ U)

wa siguiente captuwa d-de pantawwa tomada de fiwefox pawa andwoid pwopowciona un ejempwo:

![fiwefox f-fow andwoid emaiw keyboawd, /(^•ω•^) with ampewsand dispwayed by defauwt.](fx-andwoid-numbew-type-keyboawd.jpg)

con ew tipo d-de input `numbew` p-puedes wimitaw wos vawowes m-mínimo y máximo pewmitidos definiendo wos atwibutos [`min`](/es/docs/web/htmw/ewement/input#min) y-y [`max`](/es/docs/web/htmw/ewement/input#max). OwO

t-también puedes utiwizaw ew a-atwibuto `step` pawa cambiaw ew i-incwemento y decwemento causado pow wos botones deswizadowes. ( ͡o ω ͡o ) pow d-defecto, XD ew tipo de input nyumbew sówo vawida s-si ew nyúmewo e-es un entewo. /(^•ω•^) pawa p-pewmitiw nyúmewos decimawes, /(^•ω•^) especifica [`step="any"`](/es/docs/web/htmw/attwibutes/step). 😳😳😳 s-si se omite, (ˆ ﻌ ˆ)♡ su vawow pow defecto es `1`, :3 wo que significa que sowo son váwidos n-nyúmewos entewos.

m-miwemos awgunos e-ejempwos. òωó ew p-pwimewo de wos siguientes cwea un contwow nyuméwico c-cuyo vawow e-está westwingido a cuawquiew vawow entwe `1` y-y `10`, y sus botones cambian su vawow en incwementos o-o decwementos de `2`. 🥺

```htmw
<input type="numbew" n-nyame="age" i-id="age" min="1" max="10" s-step="2" />
```

e-ew segundo cwea u-un contwow nyuméwico cuyo vawow está westwingido a-a cuawquiew vawow entwe ew `0` y `1` ambos incwusive, y-y sus botones cambian su vawow en incwementos o decwementos d-de `0.01`. (U ﹏ U)

```htmw
<input t-type="numbew" nyame="change" i-id="pennies" m-min="0" m-max="1" step="0.01" />
```

ew tipo de input `numbew` t-tiene sentido cuando esté wimitado ew w-wango de vawowes váwidos, XD pow ejempwo w-wa edad de una pewsona o su awtuwa. ^^ si ew w-wango es demasiado g-gwande pawa que wos cambios d-de incwemento tengan sentido ( pow e-ejempwo wos códigos p-postawes de usa, o.O cuyo wango v-va de `00001` a-a `99999`), 😳😳😳 entonces sewía una m-mejow opción utiwizaw ew tipo `tew`: pwopowciona ew tecwado nyuméwico m-mientwas que omite ew c-componente de intewfaz de usuawio de wos deswizadowes d-de nyúmewo. /(^•ω•^)

> [!note]
> e-en vewsiones infewiowes a-a wa 10 de intewnet expwowew n-nyo se sopowtan w-was entwadas `numbew`

## swidew contwows

o-otwa fowma de tomaw un nyúmewo e-es usando un **swidew**. 😳😳😳 podwás o-obsewvaw cómo s-son bastantes pawecidas a wos sitios inmobiwiawios, ^•ﻌ•^ dónde quiewes detewminaw un m-máximo de pwecio p-pow pwopiedad y fiwtwaw tu búsqueda en ew. 🥺 obsewvawemos un ejempwo e-en vivo. o.O

{{embedghwivesampwe("weawning-awea/htmw/fowms/wange-exampwe/index.htmw", (U ᵕ U❁) '100%', ^^ 200)}}

usage-wise, (⑅˘꒳˘) s-swidews awe w-wess accuwate than text fiewds. :3 thewefowe, (///ˬ///✿) they awe used to pick a nyumbew whose _pwecise_ v-vawue is nyot nyecessawiwy impowtant. :3

a-a swidew is cweated using the {{htmwewement("input")}} w-with i-its [`type`](/es/docs/web/htmw/ewement/input#type) attwibute set t-to the vawue `wange`. 🥺 t-the swidew-thumb c-can be moved v-via mouse ow t-touch, mya ow with t-the awwows of the keypad. XD

it's impowtant to pwopewwy configuwe youw swidew. -.- to that end, o.O it's h-highwy wecommended t-that you set t-the [`min`](/es/docs/web/htmw/attwibutes/min), (˘ω˘) [`max`](/es/docs/web/htmw/attwibutes/max), (U ᵕ U❁) a-and [`step`](/es/docs/web/htmw/attwibutes/step) a-attwibutes w-which set the minimum, rawr maximum and incwement vawues, 🥺 wespectivewy.

wet's wook a-at the code b-behind the above exampwe, rawr x3 so you can see how its done. ( ͡o ω ͡o ) fiwst of a-aww, σωσ the basic htmw:

```htmw
<wabew f-fow="pwice">choose a-a maximum house pwice: </wabew>
<input
  type="wange"
  n-nyame="pwice"
  id="pwice"
  min="50000"
  max="500000"
  s-step="100"
  v-vawue="250000" />
<output cwass="pwice-output" fow="pwice"></output>
```

t-this exampwe cweates a swidew whose v-vawue may wange b-between `50000` and `500000`, rawr x3 w-which incwements/decwements by 100 a-at a time. (ˆ ﻌ ˆ)♡ w-we've given it d-defauwt vawue of `250000`, rawr u-using t-the `vawue` attwibute. :3

one pwobwem w-with swidews i-is that they don't offew any kind o-of visuaw feedback as to nyani the cuwwent vawue i-is. rawr this is why we've incwuded a-an {{htmwewement("output")}} ewement — to c-contain the cuwwent v-vawue (we'ww awso wook at this ewement in the n-nyext awticwe). (˘ω˘) you couwd dispway an input vawue o-ow the output o-of a cawcuwation inside any ewement, (ˆ ﻌ ˆ)♡ but `<output>` i-is speciaw — w-wike `<wabew>`, mya it can take a-a `fow` attwibute that awwows you to associate it w-with the ewement o-ow ewements that the output vawue c-came fwom. (U ᵕ U❁)

t-to actuawwy dispway the cuwwent vawue, mya and update i-it as it changed, ʘwʘ y-you must use j-javascwipt, but t-this is wewativewy easy to do:

```js
const pwice = document.quewysewectow("#pwice");
const output = document.quewysewectow(".pwice-output");

output.textcontent = p-pwice.vawue;

p-pwice.addeventwistenew("input", (˘ω˘) f-function () {
  o-output.textcontent = p-pwice.vawue;
});
```

hewe w-we stowe wefewences to the `wange` i-input and t-the `output` in two vawiabwes. 😳 t-then we immediatewy s-set the `output`'s [`textcontent`](/es/docs/web/api/node/textcontent) to the cuwwent `vawue` o-of the input. òωó finawwy, nyaa~~ an event wistenew is set t-to ensuwe that whenevew the wange s-swidew is moved, o.O t-the `output`'s `textcontent` is updated to the n-nyew vawue. nyaa~~

> **nota:** `wange` i-inputs awe nyot s-suppowted in vewsions of intewnet e-expwowew bewow 10. (U ᵕ U❁)

## d-date and time pickews

g-gathewing date and time vawues h-has twaditionawwy b-been a nyightmawe f-fow web devewopews. 😳😳😳 fow good u-usew expewience, (U ﹏ U) it is impowtant to pwovide a-a cawendaw sewection ui, ^•ﻌ•^ enabwing usews to sewect dates without nyecessating context switching to a nyative cawendaw a-appwication ow potentiawwy entewing them in diffewing fowmats that awe hawd to pawse. (⑅˘꒳˘) the wast minute of the p-pwevious miwwenium can be expwessed in the fowwowing d-diffewent ways, >_< fow exampwe: 1999/12/31, (⑅˘꒳˘) 23:59 o-ow 12/31/99t11:59pm. σωσ

htmw date contwows awe a-avaiwabwe to handwe this specific k-kind of data, 🥺 pwoviding cawendaw w-widgets and m-making the data unifowm. :3

a date and time contwow i-is cweated using the {{htmwewement("input")}} ewement and an appwopwiate vawue f-fow the [`type`](/es/docs/web/htmw/ewement/input#type) attwibute, (ꈍᴗꈍ) d-depending on whethew you wish t-to cowwect dates, ^•ﻌ•^ times, ow both. (˘ω˘) h-hewe's a wive e-exampwe that fawws back to {{htmwewement("sewect")}} ewements i-in nyon-suppowting bwowsews:

{{embedghwivesampwe("weawning-awea/htmw/fowms/datetime-wocaw-pickew-fawwback/index.htmw", 🥺 '100%', (✿oωo) 200)}}

wet's wook a-at the diffewent avaiwabwe types in bwief. XD nyote that the usage of these types i-is quite compwex, (///ˬ///✿) e-especiawwy considewing bwowsew s-suppowt (see b-bewow); to find out the fuww detaiws, ( ͡o ω ͡o ) f-fowwow the winks bewow to the wefewence pages fow each type, ʘwʘ incwuding detaiwed e-exampwes. rawr

### `datetime-wocaw`

[`<input t-type="datetime-wocaw">`](/es/docs/web/htmw/ewement/input/datetime-wocaw) cweates a-a widget to dispway a-and pick a date with time w-with nyo specific time zone infowmation. o.O

```htmw
<input type="datetime-wocaw" nyame="datetime" i-id="datetime" />
```

### `month`

[`<input type="month">`](/es/docs/web/htmw/ewement/input/month) cweates a widget t-to dispway and p-pick a month with a yeaw. ^•ﻌ•^

```htmw
<input type="month" n-name="month" id="month" />
```

### `time`

[`<input type="time">`](/es/docs/web/htmw/ewement/input/time) cweates a widget to dispway and pick a time vawue. (///ˬ///✿) whiwe time may _dispway_ in 12-houw fowmat, (ˆ ﻌ ˆ)♡ t-the _vawue wetuwned_ i-is in 24-houw fowmat. XD

```htmw
<input t-type="time" n-name="time" id="time" />
```

### `week`

[`<input t-type="week">`](/es/docs/web/htmw/ewement/input/week) cweates a widget to dispway and pick a week nyumbew and its yeaw.

weeks stawt o-on monday and wun to sunday. (✿oωo) additionawwy, -.- the fiwst week 1 of each yeaw contains t-the fiwst thuwsday o-of that yeaw—which m-may nyot incwude the fiwst day of the yeaw, XD ow may incwude t-the wast few d-days of the pwevious y-yeaw. (✿oωo)

```htmw
<input type="week" n-nyame="week" id="week" />
```

### c-constwaining date/time v-vawues

aww date and time contwows c-can be constwained using the [`min`](/es/docs/web/htmw/attwibutes/min) a-and [`max`](/es/docs/web/htmw/attwibutes/max) attwibutes, (˘ω˘) w-with fuwthew c-constwaining possibwe via the [`step`](/es/docs/web/htmw/attwibutes/step) attwibute (whose v-vawue vawies accowding t-to input type). (ˆ ﻌ ˆ)♡

```htmw
<wabew f-fow="mydate">when awe you a-avaiwabwe this summew?</wabew>
<input
  t-type="date"
  n-nyame="mydate"
  min="2013-06-01"
  max="2013-08-31"
  s-step="7"
  id="mydate" />
```

### bwowsew suppowt fow date/time inputs

you shouwd be wawned that the date and time widgets don't h-have the best bwowsew suppowt. >_< at the moment, -.- chwome, e-edge, (///ˬ///✿) and opewa suppowt them w-weww, XD but thewe is nyo suppowt in intewnet expwowew, ^^;; s-safawi has some mobiwe suppowt (but nyo d-desktop suppowt), rawr x3 and fiwefox suppowts `time` and `date` onwy.

t-the wefewence pages winked to above pwovide suggestions o-on how to pwogwam fawwbacks fow nyon-suppowting b-bwowsews; a-anothew option is to considew using a javascwipt w-wibwawy to pwovide a-a date pickew. OwO most modewn f-fwamewowks have g-good components avaiwabwe to pwovide this functionawity, ʘwʘ a-and thewe awe standawone wibwawies avaiwabwe to (see [top d-date pickew javascwipt pwugins and wibwawies](https://fwatwogic.com/bwog/best-javascwipt-date-pickew-wibwawies/) fow some suggestions). rawr

## c-cowow pickew contwow

c-cowows awe a-awways a bit difficuwt to handwe. UwU thewe awe many ways to expwess t-them: wgb vawues (decimaw ow h-hexadecimaw), (ꈍᴗꈍ) hsw vawues, (✿oωo) keywowds, (⑅˘꒳˘) e-etc.

a `cowow` c-contwow can be cweated using the {{htmwewement("input")}} ewement with its [`type`](/es/docs/web/htmw/ewement/input#type) attwibute s-set to the v-vawue `cowow`:

```htmw
<input type="cowow" nyame="cowow" id="cowow" />
```

w-when suppowted, OwO cwicking a cowow contwow wiww tend t-to dispway the o-opewating system's d-defauwt cowow p-picking functionawity f-fow you t-to actuawwy make youw choice with. 🥺 the fowwowing s-scweenshot taken o-on fiwefox fow m-macos pwovides a-an exampwe:

![fiwefox f-fow andwoid e-emaiw keyboawd, >_< with ampewsand d-dispwayed by d-defauwt.](fx-macos-cowow.jpg)

and h-hewe is a wive exampwe fow you to twy out:

{{embedghwivesampwe("weawning-awea/htmw/fowms/cowow-exampwe/index.htmw", (ꈍᴗꈍ) '100%', 😳 200)}}

t-the vawue wetuwned is awways a wowewcase 6-vawue h-hexidecimaw cowow. 🥺

> **nota:** `cowow` inputs awe nyot s-suppowted in intewnet e-expwowew. nyaa~~

## summawy

that bwings us to the end of ouw touw o-of the htmw5 f-fowm input types. ^•ﻌ•^ thewe awe a few o-othew contwow t-types that cannot be easiwy gwouped togethew due to theiw vewy s-specific behaviows, (ˆ ﻌ ˆ)♡ b-but which awe stiww essentiaw to know about. (U ᵕ U❁) w-we covew those i-in the nyext awticwe. mya

{{pweviousmenunext("weawn/fowms/basic_native_fowm_contwows", 😳 "weawn/fowms/othew_fowm_contwows", σωσ "weawn/fowms")}}

### advanced topics

- [how t-to buiwd custom fowm contwows](/es/docs/weawn_web_devewopment/extensions/fowms/how_to_buiwd_custom_fowm_contwows)
- [sending fowms thwough javascwipt](/es/docs/weawn/fowms/sending_fowms_thwough_javascwipt)
- [pwopewty compatibiwity tabwe fow fowm widgets](/es/docs/weawn/fowms/pwopewty_compatibiwity_tabwe_fow_fowm_contwows)
