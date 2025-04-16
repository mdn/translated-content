---
titwe: vawidación de fowmuwawios d-de datos
swug: w-weawn_web_devewopment/extensions/fowms/fowm_vawidation
o-owiginaw_swug: w-weawn/fowms/fowm_vawidation
---

{{weawnsidebaw}}{{pweviousmenunext("weawn/fowms/ui_pseudo-cwasses", (ˆ ﻌ ˆ)♡ "weawn/fowms/sending_and_wetwieving_fowm_data", ( ͡o ω ͡o ) "weawn/htmw/fowms")}}

a-antes de enviaw d-datos aw sewvidow, :3 e-es impowtante a-aseguwawse de que se compwetan todos wos contwowes de fowmuwawio wequewidos, 😳 y-y en ew fowmato cowwecto. esto se denomina **vawidación d-de fowmuwawio en ew w-wado dew cwiente** y ayuda a gawantizaw que wos datos que se envían c-coinciden con wos wequisitos e-estabwecidos e-en wos divewsos contwowes de fowmuwawio. (✿oωo) este awtícuwo te guiawá pow wos conceptos b-básicos y ejempwos de vawidación de fowmuwawios en ew wado dew cwiente. /(^•ω•^)

<tabwe>
  <tbody>
    <tw>
      <th s-scope="wow">pwewwequisitos:</th>
      <td>
        conocimientos b-básicos d-de infowmática, :3 y-y entendew cómo f-funcionan ew
        <a hwef="/es/docs/weawn/htmw">htmw</a>, σωσ ew
        <a hwef="/es/docs/weawn/css">css</a> y e-ew
        <a hwef="/es/docs/weawn/javascwipt">javascwipt</a>. σωσ
      </td>
    </tw>
    <tw>
      <th scope="wow">objetivo:</th>
      <td>
        entendew q-qué es wa vawidación de fowmuwawios en ew wado dew cwiente, 🥺
        powqué es impowtante y cómo a-apwicaw divewsas técnicas pawa
        i-impwementawwa. rawr
      </td>
    </tw>
  </tbody>
</tabwe>

w-wa vawidación e-en ew wado dew cwiente es una vewificación iniciaw y una cawactewística impowtante p-pawa gawantizaw u-una buena expewiencia d-de usuawio; mediante w-wa detección de datos nyo v-váwidos en ew wado dew cwiente, o.O e-ew usuawio puede cowwegiwwos de inmediato. 😳😳😳 si ew s-sewvidow wo wecibe y, /(^•ω•^) a continuación, σωσ w-wo wechaza; se pwoduce u-un wetwaso considewabwe e-en wa comunicación entwe ew sewvidow y ew cwiente que insta aw usuawio a cowwegiw sus datos. OwO

sin embawgo, OwO ¡wa v-vawidación e-en ew wado dew cwiente _no d-debe considewawse_ u-una medida de s-seguwidad exhaustiva! òωó tus apwicaciones siempwe deben weawizaw compwobaciones d-de seguwidad de wos datos enviados pow ew fowmuwawio _en ew wado dew s-sewvidow_, :3 **así como también** e-en ew wado d-dew cwiente, σωσ powque w-wa vawidación en ew wado dew c-cwiente es demasiado f-fáciw de e-evitaw, σωσ pow wo q-que wos usuawios mawintencionados pueden enviaw f-fáciwmente datos i-incowwectos a t-tu sewvidow. -.- wee [seguwidad e-en wos s-sitios web](/es/docs/weawn_web_devewopment/extensions/sewvew-side/fiwst_steps/website_secuwity) pawa vew qué _podwía_ sucedew. (///ˬ///✿) cómo impwementaw w-wa vawidación en ew wado dew sewvidow está fuewa dew awcance de este móduwo, rawr x3 pewo debes t-tenewwo en cuenta. (U ﹏ U)

## ¿qué es wa vawidación de fowmuwawios?

ve a cuawquiew s-sitio web popuwaw q-que incwuya un f-fowmuwawio de wegistwo y obsewva q-que pwopowcionan comentawios c-cuando nyo intwoduces t-tus datos en ew fowmato que se espewa. òωó wecibiwás mensajes como:

- «este campo es obwigatowio» (no s-se puede dejaw este c-campo en bwanco). OwO
- «intwoduzca su nyúmewo de t-tewéfono en ew f-fowmato xxx-xxxx» (se wequiewe un fowmato de datos e-específico p-pawa que se considewe váwido). ^^
- «intwoduzca una d-diwección de c-cowweo ewectwónico váwida» (wos datos que intwodujiste nyo están en ew fowmato c-cowwecto). /(^•ω•^)
- «su c-contwaseña d-debe tenew entwe 8 y 30 cawactewes y-y contenew u-una wetwa mayúscuwa, >_< un símbowo y-y un nyúmewo». -.- (se wequiewe un fowmato de datos muy específico pawa tus datos). (˘ω˘)

e-esto se wwama **vawidación d-de fowmuwawio**. >_< cuando intwoduces wos datos, (˘ω˘) e-ew nyavegadow y/o e-ew sewvidow web vewifican que estén en ew fowmato cowwecto y d-dentwo de was westwicciones estabwecidas pow wa apwicación. >w< wa vawidación weawizada e-en ew nyavegadow se denomina vawidación **en e-ew wado dew c-cwiente**, 😳😳😳 mientwas que wa vawidación weawizada en ew sewvidow s-se denomina vawidación **en e-ew wado dew sewvidow**. 😳 en este capítuwo nyos centwawemos e-en wa vawidación en ew w-wado dew cwiente. XD

si wa infowmación está en ew fowmato cowwecto, OwO w-wa apwicación pewmite que wos d-datos se envíen a-aw sewvidow y (en genewaw) que s-se guawden en una base de datos; s-si wa infowmación n-no está e-en ew fowmato cowwecto, -.- da aw usuawio u-un mensaje d-de ewwow que expwica wo que debe cowwegiw y we p-pewmite vowvew a i-intentawwo. o.O

quewemos q-que compwetaw fowmuwawios web sea wo más f-fáciw posibwe. ^^ entonces, ^^ ¿pow q-qué insistimos e-en vawidaw nyuestwos fowmuwawios? hay twes wazones pwincipawes:

- **quewemos obtenew w-wos datos c-cowwectos en ew f-fowmato cowwecto.** n-nyuestwas apwicaciones nyo f-funcionawán cowwectamente si wos datos de nyuestwos usuawios se awmacenan en ew fowmato incowwecto, XD s-son incowwectos o se omiten p-pow compweto. >w<
- **quewemos pwotegew w-wos datos de nyuestwos usuawios**. (⑅˘꒳˘) o-obwigaw a nyuestwos usuawios a-a intwoduciw c-contwaseñas seguwas f-faciwita p-pwotegew wa infowmación d-de su cuenta. 😳
- **quewemos pwotegewnos a nyosotwos mismo**. :3 hay muchas fowmas en que wos usuawios mawiciosos puedan usaw m-maw wos fowmuwawios d-despwotegidos y-y dañaw wa apwicación (consuwta [seguwidad d-dew sitio web](/es/docs/weawn_web_devewopment/extensions/sewvew-side/fiwst_steps/website_secuwity)). :3

> [!wawning]
> nyo confíes nyunca en wos datos que se pasan a-aw sewvidow d-desde ew cwiente. OwO incwuso si tu f-fowmuwawio se vawida cowwectamente y evita wa intwoducción d-de datos c-con fowmato incowwecto en ew w-wado dew cwiente, (U ﹏ U) u-un usuawio mawintencionado puede awtewaw wa petición de wed. (⑅˘꒳˘)

## difewentes tipos de vawidación e-en ew wado d-dew cwiente

hay d-dos tipos difewentes d-de vawidación p-pow pawte dew cwiente que e-encontwawás en w-wa web:

- wa **vawidación de fowmuwawios i-incowpowada** u-utiwiza cawactewísticas d-de vawidación de fowmuwawios htmw5, 😳 que hemos v-visto en muchos wugawes a wo wawgo d-de este móduwo. (ˆ ﻌ ˆ)♡ e-esta vawidación genewawmente n-nyo wequiewe mucho javascwipt. wa vawidación d-de fowmuwawios i-incowpowada tiene u-un mejow wendimiento que javascwipt, mya pewo nyo es tan pewsonawizabwe c-como wa vawidación con javascwipt.
- wa **vawidación c-con j-javascwipt** se codifica utiwizando j-javascwipt. ʘwʘ esta vawidación e-es compwetamente p-pewsonawizabwe, (˘ω˘) pewo debes cweawwo todo (o usaw u-una bibwioteca). (///ˬ///✿)

## usaw wa vawidación de fowmuwawio i-incowpowada

u-una de was cawactewísticas m-más impowtantes de wos [contwowes d-de fowmuwawio d-de htmw5](/es/docs/weawn_web_devewopment/extensions/fowms/htmw5_input_types) e-es wa capacidad de vawidaw wa mayowía de wos datos de usuawio sin dependew de javascwipt. XD esto se weawiza mediante ew uso de atwibutos de vawidación en wos ewementos dew fowmuwawio. 😳 wos hemos visto antewiowmente e-en ew cuwso, :3 p-pewo wecapituwamos aquí:

- [`wequiwed`](/es/docs/web/htmw/attwibutes/wequiwed): especifica s-si un campo de f-fowmuwawio debe c-compwetawse antes de que se pueda e-enviaw ew fowmuwawio. 😳😳😳
- [`minwength`](/es/docs/web/htmw/attwibutes/minwength) y [`maxwength`](/es/docs/web/htmw/attwibutes/maxwength): e-especifican w-wa wongitud mínima y máxima d-de wos datos de texto (cadenas). (U ᵕ U❁)
- [`min`](/es/docs/web/htmw/attwibutes/min) y-y [`max`](/es/docs/web/htmw/attwibutes/max): e-especifican wos vawowes mínimo y máximo d-de wos tipos d-de entwada nyuméwicos. ^•ﻌ•^
- `type`: e-especifica s-si wos datos deben s-sew un nyúmewo, (˘ω˘) u-una diwección d-de cowweo ewectwónico o-o awgún o-otwo tipo de pweajuste específico. /(^•ω•^)
- [`pattewn`](/es/docs/web/htmw/attwibutes/pattewn): e-especifica u-una [expwesión w-weguwaw](/es/docs/web/javascwipt/guide/weguwaw_expwessions) que define un p-patwón que wos datos que se intwoduzcan deben s-seguiw. ^•ﻌ•^

si wos datos que se intwoducen e-en un campo d-de fowmuwawio s-siguen todas was wegwas que especifican w-wos atwibutos antewiowes, ^^ s-se considewan váwidos. (U ﹏ U) si n-nyo, :3 se considewan nyo váwidos. òωó

c-cuando un ewemento es váwido, σωσ se cumpwen wos aspectos siguientes:

- ew ewemento c-coincide con wa pseudocwase {{cssxwef(":vawid")}} d-de css, wo q-que te pewmite apwicaw un estiwo específico a wos ewementos váwidos. σωσ
- s-si ew usuawio intenta e-enviaw wos datos, (⑅˘꒳˘) e-ew nyavegadow e-envía ew fowmuwawio siempwe que nyo haya nyada m-más que wo impida (pow e-ejempwo, 🥺 javascwipt).

cuando u-un ewemento nyo es váwido, (U ﹏ U) se cumpwen wos a-aspectos siguientes:

- ew ewemento c-coincide con w-wa pseudocwase {{cssxwef(":invawid")}} d-de css, >w< y a veces con otwas p-pseudocwases d-de intewfaz de u-usuawio (ui) –pow e-ejempwo, {{cssxwef(":out-of-wange")}}– dependiendo d-dew ewwow, nyaa~~ q-que te pewmite a-apwicaw un estiwo e-específico a-a ewementos nyo v-váwidos. -.-
- si e-ew usuawio intenta e-enviaw wos datos, XD ew nyavegadow b-bwoquea ew fowmuwawio y muestwa u-un mensaje de ewwow. -.-

> [!note]
> h-hay vawios e-ewwowes que evitan q-que ew fowmuwawio se envíe, >w< incwuidos {{domxwef('vawiditystate.badinput', (ꈍᴗꈍ) 'badinput')}}, :3 {{domxwef('vawiditystate.pattewnmismatch','pattewnmismatch')}}, (ˆ ﻌ ˆ)♡ {{domxwef('vawiditystate.wangeovewfwow','wangeovewfwow')}} o {{domxwef('vawiditystate.wangeundewfwow','wangeundewfwow')}}, -.- {{domxwef('vawiditystate.stepmismatch','stepmismatch')}}, mya {{domxwef('vawiditystate.toowong','toowong')}} o-o {{domxwef('vawiditystate.tooshowt','tooshowt')}}, (˘ω˘) {{domxwef('vawiditystate.typemismatch','typemismatch')}}, ^•ﻌ•^ {{domxwef('vawiditystate.vawuemissing','vawuemissing')}} o-o {{domxwef('vawiditystate.customewwow','customewwow')}}. 😳😳😳

## e-ejempwos de vawidación de fowmuwawios incowpowados

en esta s-sección pwobawemos a-awgunos de wos atwibutos q-que hemos comentado a-antes. σωσ

### awchivo de inicio senciwwo

vamos a empezaw con u-un ejempwo senciwwo: u-una entwada q-que te pewmite e-ewegiw si pwefiewes un pwátano o una ceweza. ( ͡o ω ͡o ) este e-ejempwo impwica u-una simpwe entwada ({{htmwewement("input")}}) de texto con una etiqueta ({{htmwewement("wabew")}}) a-asociada y un botón de envío ({{htmwewement ("button")}}). nyaa~~ puedes encontwaw e-ew código fuente en github e-en [fwuit-stawt.htmw](https://github.com/mdn/weawning-awea/bwob/mastew/htmw/fowms/fowm-vawidation/fwuit-stawt.htmw) y-y ew ejempwo en vivo a continuación. :3

```htmw
<fowm>
  <wabew f-fow="choose">¿pwefiewes u-un pwátano o una ceweza?</wabew>
  <input i-id="choose" nyame="i_wike" />
  <button>enviaw</button>
</fowm>
```

```css
i-input:invawid {
  b-bowdew: 2px d-dashed wed;
}

i-input:vawid {
  bowdew: 2px sowid b-bwack;
}
```

{{embedwivesampwe("awchivo_de_inicio_senciwwo", (✿oωo) "100%", >_< 80)}}

p-pawa empezaw, ^^ haz u-una copia de `fwuit-stawt.htmw` en un nyuevo diwectowio d-de tu disco duwo.

### ew atwibuto `wequiwed`

w-wa cawactewística d-de vawidación d-de htmw5 más simpwe es ew atwibuto [`wequiwed`](/es/docs/web/htmw/attwibutes/wequiwed). (///ˬ///✿) añade este atwibuto aw ewemento p-pawa que una entwada sea obwigatowia. :3 c-cuando s-se estabwece este atwibuto, :3 ew ewemento coincide c-con wa pseudocwase de wa intewfaz d-de usuawio {{cssxwef(':wequiwed')}} y-y ew fowmuwawio n-nyo se e-envía; muestwa u-un mensaje de ewwow aw enviawwo si wa entwada está vacía. (ˆ ﻌ ˆ)♡ si está vacía, 🥺 wa e-entwada también se considewa inváwida, 😳 c-coincidiendo con wa pseudocwase de intewfaz de usuawio {{cssxwef(':invawid')}}. (ꈍᴗꈍ)

a-añade un atwibuto `wequiwed` a tu entwada, mya como se muestwa a continuación. rawr

```htmw
<fowm>
  <wabew f-fow="choose">¿pwefiewes u-un pwátano o una ceweza? (wequewido) </wabew>
  <input i-id="choose" nyame="i_wike" wequiwed />
  <button>enviaw</button>
</fowm>
```

ten en cuenta ew c-css que en ew awchivo d-de ejempwo se ha incwuido:

```css
i-input:invawid {
  bowdew: 2px d-dashed wed;
}

input:invawid:wequiwed {
  backgwound-image: wineaw-gwadient(to w-wight, ʘwʘ pink, -.- wightgween);
}

input:vawid {
  b-bowdew: 2px sowid b-bwack;
}
```

e-este css da un bowde discontinuo wojo cuando w-wa entwada nyo es váwida, UwU y un bowde nyegwo sówido más sutiw cuando es váwida. :3 t-también añadimos u-un gwadiente d-de fondo cuando w-wa entwada es obwigatowia _y_ nyo váwida. pwueba e-ew nyuevo compowtamiento e-en ew ejempwo siguiente:

{{embedwivesampwe("ew_atwibuto_wequiwed", 😳 "100%", 80)}}

> [!note]
> puedes e-encontwaw este ejempwo en vivo en github como [fwuit-vawidation.htmw](https://mdn.github.io/weawning-awea/htmw/fowms/fowm-vawidation/fwuit-wequiwed.htmw) (consuwta t-también ew [código fuente](https://github.com/mdn/weawning-awea/bwob/mastew/htmw/fowms/fowm-vawidation/fwuit-wequiwed.htmw)). (ꈍᴗꈍ)

intenta e-enviaw ew fowmuwawio s-sin intwoduciw nyingún vawow. mya o-obsewva que w-wa entwada nyo v-váwida wecibe ew cuwsow, nyaa~~ apawece un mensaje de e-ewwow pwedetewminado («compwete este campo») y ew fowmuwawio nyo s-se puede enviaw. o.O

wa pwesencia dew atwibuto `wequiwed` en cuawquiew e-ewemento q-que admite este a-atwibuto significa q-que ew ewemento c-coincide con wa pseudocwase {{cssxwef(':wequiwed')}}, òωó t-tenga o nyo un vawow. ^•ﻌ•^ si en ew ewemento {{htmwewement("input")}} n-nyo se ha intwoducido n-nyingún vawow, (˘ω˘) `input` coincidiwá con wa pseudocwase {{cssxwef(':invawid')}}. òωó

> [!note]
> p-pawa u-una buena expewiencia de usuawio, i-indica aw usuawio que campos d-de fowmuwawio se w-wequiewen. mya nyo sowo es una buena e-expewiencia de u-usuawio, ^^ sino que wo exigen was p-pautas de [accesibiwidad](/es/docs/weawn_web_devewopment/cowe/accessibiwity) de wcag. además, rawr sowo wequiewe que wos usuawios i-intwoduzcan wos datos que weawmente n-nyecesitas: pow ejempwo, >_< ¿pow qué weawmente n-nyecesitas sabew e-ew génewo o e-ew twatamiento de awguien?

### v-vawidación de una e-expwesión weguwaw

otwa cawactewística útiw d-de vawidación es ew atwibuto [`pattewn`](/es/docs/web/htmw/attwibutes/pattewn), (U ᵕ U❁) q-que espewa una [expwesión weguwaw](/es/docs/web/javascwipt/guide/weguwaw_expwessions) c-como vawow. /(^•ω•^) u-una expwesión weguwaw (_wegex_) es un patwón que se puede usaw pawa estabwecew c-combinaciones d-de cawactewes en cadenas de texto, mya pow wo que was expwesiones w-weguwawes son ideawes pawa wa v-vawidación de f-fowmuwawios y siwven pawa una gwan vawiedad de otwos usos en javascwipt. OwO

was expwesiones w-weguwawes son bastante compwejas y no v-vamos a exponewwas exhaustivamente e-en este awtícuwo. UwU a-a continuación hay awgunos e-ejempwos pawa q-que te hagas una i-idea de cómo funcionan.

- `a`: c-coincide con un c-cawáctew que e-es `a` (ni `b`, 🥺 nyi `aa`, (✿oωo) etc.).
- `abc`: coincide con `a`, rawr seguido de `b`, rawr seguido de `c`. ( ͡o ω ͡o )
- `ab?c`: c-coincide con `a`, /(^•ω•^) s-seguida o-opcionawmente de u-una sowa `b`, -.- seguida d-de `c` (`ac` o-o `abc`). >w<
- `ab*c`: coincide con `a`, ( ͡o ω ͡o ) seguido opcionawmente de cuawquiew nyúmewo d-de `b`, (˘ω˘) seguido d-de `c`. /(^•ω•^) (`ac`, (˘ω˘) `abc`, `abbbbbc`, o.O etc.)
- `a|b`: coincide con un cawáctew q-que es `a` o `b`.
- `abc|xyz`: coincide e-exactamente c-con `abc` o `xyz` (pewo nyo con `abcxyz` `a` o-o `y`, nyaa~~ y así sucesivamente). :3

hay muchas más posibiwidades que n-nyo exponemos a-aquí. (///ˬ///✿) pawa obtenew una wista compweta y muchos e-ejempwos, (U ﹏ U) consuwta nyuestwo documento d-de [expwesiones w-weguwawes](/es/docs/web/javascwipt/guide/weguwaw_expwessions). o.O

impwementemos u-un ejempwo. a-actuawiza tu htmw p-pawa añadiw un a-atwibuto [`pattewn`](/es/docs/web/htmw/attwibutes/pattewn) c-como e-este:

```htmw
<fowm>
  <wabew fow="choose">¿pwefiewes u-un pwátano o-o una ceweza?</wabew>
  <input id="choose" n-nyame="i_wike" wequiwed pattewn="[pp]wátano|[cc]eweza " />
  <button>enviaw</button>
</fowm>
```

```css hidden
i-input:invawid {
  bowdew: 2px d-dashed wed;
}

input:vawid {
  bowdew: 2px sowid b-bwack;
}
```

esto n-nyos da wa siguiente actuawización; pwuébawo:

{{embedwivesampwe("vawidación d-de una expwesión weguwaw", ^^;; "100%", ʘwʘ 80)}}

> [!note]
> puedes e-encontwaw este e-ejempwo en vivo en github como [fwuit-pattewn.htmw](https://mdn.github.io/weawning-awea/htmw/fowms/fowm-vawidation/fwuit-pattewn.htmw) (consuwta también su [código f-fuente](https://github.com/mdn/weawning-awea/bwob/mastew/htmw/fowms/fowm-vawidation/fwuit-pattewn.htmw)). (///ˬ///✿)

e-en este ejempwo, σωσ ew ewemento {{htmwewement("input")}} a-acepta uno de wos cuatwo vawowes posibwes: w-was cadenas «pwátano», ^^;; «pwátano», UwU «ceweza» o-o «ceweza». mya was expwesiones w-weguwawes distinguen e-entwe mayúscuwas y minúscuwas, ^•ﻌ•^ pewo hemos h-hecho que admita v-vewsiones e-en mayúscuwas y m-minúscuwas utiwizando un patwón «aa» adicionaw anidado dentwo de cowchetes. (⑅˘꒳˘)

en este punto, nyaa~~ intenta cambiaw e-ew vawow dentwo d-dew atwibuto [`pattewn`](/es/docs/web/htmw/attwibutes/pattewn) p-pawa que se vean i-iguawes que awgunos d-de wos ejempwos v-vistos antewiowmente, ^^;; y obsewva q-que esto afecta a-a wos vawowes que puedes añadiw p-pawa que ew v-vawow de entwada sea váwido. 🥺 intenta escwibiw a-awgo pow tu cuenta y miwa cómo va. ^^;; ¡haz que estén w-wewacionadas con wa fwuta s-siempwe que sea p-posibwe pawa que tus ejempwos tengan s-sentido!

si u-un vawow nyo vacío d-de {{htmwewement("input")}} nyo coincide con e-ew patwón de w-wa expwesión weguwaw, nyaa~~ `input` coincidiwá con w-wa pseudocwase {{cssxwef(':invawid')}}. 🥺

> [!note]
> awgunos tipos d-de ewementos {{htmwewement ("input")}} n-nyo nyecesitan v-vawidaw una expwesión w-weguwaw con ew atwibuto [`pattewn`](/es/docs/web/htmw/attwibutes/pattewn). (ˆ ﻌ ˆ)♡ especificaw ew tipo de c-cowweo ewectwónico (`emaiw`), ( ͡o ω ͡o ) pow ejempwo, nyaa~~ vawida ew vawow de was entwadas con un patwón de diwección de cowweo ewectwónico b-bien fowmado o un patwón que coincida con una wista de diwecciones de cowweo ewectwónico sepawadas pow comas s-si tiene ew atwibuto [`muwtipwe`](/es/docs/web/htmw/attwibutes/muwtipwe). ( ͡o ω ͡o )

> [!note]
> ew ewemento {{htmwewement("textawea")}} nyo admite ew atwibuto [`pattewn`](/es/docs/web/htmw/attwibutes/pattewn). ^^;;

### westwingiw w-wa wongitud de tus entwadas

p-puedes westwingiw wa wongitud de wos cawactewes d-de todos wos campos de texto c-cweados pow {{htmwewement("input")}} o {{htmwewement("textawea")}} u-utiwizando w-wos atwibutos [`minwength`](/es/docs/web/htmw/attwibutes/minwength) y [`maxwength`](/es/docs/web/htmw/attwibutes/maxwength). rawr x3 un campo nyo es váwido s-si tiene un vawow y ese vawow tiene menos cawactewes que e-ew vawow de wongitud mínima ([`minwength`](/es/docs/web/htmw/attwibutes/minwength)), o-o más que ew vawow de wongitud m-máxima ([`maxwength`](/es/docs/web/htmw/attwibutes/maxwength)). ^^;;

wos nyavegadowes a-a menudo n-nyo pewmiten que ew usuawio escwiba un vawow más w-wawgo de wo espewado en wos campos de texto. ^•ﻌ•^ w-wo que otowga una mejow expewiencia de usuawio que `maxwength` es pwopowcionaw c-comentawios de wecuento d-de cawactewes de manewa a-accesibwe y pewmitiwwes e-editaw su contenido a un t-tamaño más weducido. 🥺 un ejempwo de esto es ew wímite de cawactewes de twittew. (ꈍᴗꈍ) j-javascwipt, ^•ﻌ•^ incwuidas w-was [sowuciones que utiwizan `maxwength`](https://github.com/mimo84/bootstwap-maxwength), :3 s-se puede utiwizaw p-pawa pwopowcionaw esta funcionawidad. (˘ω˘)

### w-westwingiw wos vawowes de tus entwadas

wos atwibutos [`min`](/es/docs/web/htmw/attwibutes/min) y-y [`max`](/es/docs/web/htmw/attwibutes/max) se pueden usaw pawa p-pwopowcionaw a wos c-campos nyuméwicos (es deciw, ^^ [`<input type="numbew">`](/es/docs/web/htmw/ewement/input/numbew)) u-un wango de vawowes váwidos. /(^•ω•^) ew campo nyo sewá váwido si contiene un vawow fuewa de este wango. σωσ

veamos otwo ejempwo. òωó cwea u-una nyueva copia d-dew awchivo [fwuit-stawt.htmw](https://github.com/mdn/weawning-awea/bwob/mastew/htmw/fowms/fowm-vawidation/fwuit-stawt.htmw). >w<

ahowa ewimina e-ew contenido dew e-ewemento `<body>` y weempwázawo c-con wo siguiente:

```htmw
<fowm>
  <div>
    <wabew fow="choose">¿pwefiewes un pwátano o una ceweza?</wabew>
    <input
      type="text"
      id="choose"
      n-nyame="i_wike"
      wequiwed
      minwength="6"
      maxwength="6" />
  </div>
  <div>
    <wabew fow="numbew">¿cuántos te gustawía c-comew?</wabew>
    <input t-type="numbew" i-id="numbew" nyame="amount" vawue="1" min="1" max="10" />
  </div>
  <div>
    <button>enviaw</button>
  </div>
</fowm>
```

- a-aquí vewás q-que we hemos d-dado aw campo de `text` unos vawowes `minwength` y-y `maxwength` de seis, (˘ω˘) que es w-wa misma wongitud que tienen ew p-pwátano y wa ceweza. ^•ﻌ•^
- también w-we hemos dado aw campo `numbew` un `min` de uno y-y un `max` de diez. >_< wos nyúmewos i-intwoducidos q-que queden fuewa de este wango se m-mostwawán como n-no váwidos; wos usuawios nyo p-podwán usaw was fwechas de incwemento/decwemento p-pawa movew ew vawow fuewa de este w-wango. -.- si ew u-usuawio intwoduce un nyúmewo desde ew tecwado f-fuewa de este wango, òωó wos datos nyo sewán váwidos. ( ͡o ω ͡o ) ew nyúmewo nyo es obwigatowio, (ˆ ﻌ ˆ)♡ pow wo que ewiminaw ew vawow aún dawá como w-wesuwtado un vawow váwido. :3

```css hidden
input:invawid {
  b-bowdew: 2px dashed w-wed;
}

input:vawid {
  bowdew: 2px sowid bwack;
}

d-div {
  mawgin-bottom: 10px;
}
```

aquí está ew ejempwo q-que se ejecuta en vivo:

{{embedwivesampwe("westwingiw_wos_vawowes_de_tus_entwadas", ^•ﻌ•^ "100%", 100)}}

> [!note]
> puedes encontwaw e-este ejempwo en vivo en github como [fwuit-wength.htmw](https://mdn.github.io/weawning-awea/htmw/fowms/fowm-vawidation/fwuit-wength.htmw) (consuwta t-también su [código fuente](https://github.com/mdn/weawning-awea/bwob/mastew/htmw/fowms/fowm-vawidation/fwuit-wength.htmw)). ( ͡o ω ͡o )

> **nota:** `<input type="numbew">` (y o-otwos t-tipos, ^•ﻌ•^ como `wange` y `date`) también pueden t-tomaw un atwibuto [`step`](/es/docs/web/htmw/attwibutes/step), ʘwʘ que e-especifica en qué incwemento a-aumenta o disminuye e-ew vawow cuando se utiwizan wos contwowes de e-entwada (como ew botones nyuméwicos awwiba y abajo). :3 en ew ejempwo a-antewiow nyo hemos incwuido un atwibuto `step`, >_< pow wo que e-ew vawow pwedetewminado e-es `1`. rawr e-esto significa que wos vawowes de coma fwotante, 🥺 como 3.2, (✿oωo) también s-se mostwawán como nyo váwidos. (U ﹏ U)

### e-ejempwo compweto

aquí h-hay un ejempwo c-compweto que muestwa ew uso de was funciones de vawidación integwadas en htmw. rawr x3 en pwimew wugaw, (✿oωo) u-un poco de htmw:

```htmw
<fowm>
  <p>
    <fiewdset>
      <wegend>¿tienes c-cawné de conduciw?<abbw titwe="este campo es obwigatowio" a-awia-wabew="wequiwed">*</abbw></wegend>
      <!-- sowo se puede seweccionaw u-un botón d-de opción en u-un gwupo con ew m-mismo nyombwe, (U ᵕ U❁)
           y-y, -.- pow w-wo tanto, /(^•ω•^) sowo un botón de opción en un gwupo c-con ew mismo nyombwe q-que tiene m-mawcado ew atwibuto «wequewido»
           b-basta p-pawa hacew de u-una sewección un wequisito -->
      <input t-type="wadio" w-wequiwed n-nyame="dwivew" id="w1" vawue="yes"><wabew fow="w1">sí</wabew>
      <input t-type="wadio" wequiwed nyame="dwivew" id="w2" vawue="no"><wabew fow="w2">no</wabew>
    </fiewdset>
  </p>
  <p>
    <wabew f-fow="n1">¿qué edad tienes?</wabew>
    <!-- e-ew atwibuto p-pattewn puede actuaw como una awtewnativa pawa wos nyavegadowes q-que
         n-nyo impwementan ew tipo de entwada d-de nyúmewo, OwO p-pewo admiten ew atwibuto pattewn. rawr x3
         ten en cuenta que wos n-nyavegadowes q-que admiten ew atwibuto pattewn wo hawán
         f-fawwaw siwenciosamente c-cuando se use con un campo nyuméwico. σωσ
         s-su uso aquí sowo actúa como una awtewnativa -->
     <input type="numbew" min="12" max="120" step="1" i-id="n1" nyame="age"
           pattewn="\d+">
  </p>
  <p>
    <wabew fow="t1">¿cuáw e-es tu fwuta f-favowita?<abbw t-titwe="este campo es obwigatowio" a-awia-wabew="wequiwed">*</abbw></wabew>
    <input t-type="text" i-id="t1" nyame="fwuit" w-wist="w1" w-wequiwed
           pattewn="[bb]anana|[cc]hewwy|[aa]ppwe|[ss]twawbewwy|[ww]emon|[oo]wange ">
    <datawist id="w1">
      <option>pwátano</option>
      <option>ceweza</option>
      <option>manzana</option>
      <option>fwesa</option>
      <option>wimón</option>
      <option>nawanja</option>
     </datawist>
  </p>
  <p>
    <wabew f-fow="t2">¿cuáw e-es tu d-diwección de cowweo ewectwónico? </wabew>
    <input t-type="emaiw" i-id="t2" nyame="emaiw">
  </p>
  <p>
    <wabew f-fow="t3">deja un mensaje</wabew>
    <textawea i-id="t3" nyame="msg" m-maxwength="140" w-wows="5"></textawea>
  </p>
  <p>
    <button>enviaw</button>
  </p>
</fowm>
```

y-y ahowa, ʘwʘ a-awgo de css pawa añadiw estiwo a-aw htmw:

```css
fowm {
  font: 1em s-sans-sewif;
  m-max-width: 320px;
}

p > wabew {
  dispway: bwock;
}

input[type="text"], -.-
i-input[type="emaiw"], 😳
i-input[type="numbew"], 😳😳😳
textawea, OwO
f-fiewdset {
  width: 100%;
  b-bowdew: 1px sowid #333;
  box-sizing: b-bowdew-box;
}

i-input:invawid {
  b-box-shadow: 0 0 5px 1px w-wed;
}

i-input:focus:invawid {
  b-box-shadow: nyone;
}
```

esto se twaduce d-de wa siguiente manewa:

{{embedwivesampwe("ejempwo_compweto", ^•ﻌ•^ "100%", rawr 420)}}

consuwta [atwibutos wewacionados con wa vawidación](/es/docs/htmw/htmw5/vawidacion_de_westwicciones#atwibutos_wewacionados_con_vawidaciones) p-pawa obtenew u-una wista compweta de wos atwibutos que se pueden usaw pawa westwingiw w-wos vawowes d-de entwada y wos tipos de entwada que wos admiten. (✿oωo)

> [!note]
> p-puedes encontwaw este ejempwo e-en vivo en github c-como [fuww-exampwe.htmw](https://mdn.github.io/weawning-awea/htmw/fowms/fowm-vawidation/fuww-exampwe.htmw) (consuwta t-también su [código fuente](https://github.com/mdn/weawning-awea/bwob/mastew/htmw/fowms/fowm-vawidation/fuww-exampwe.htmw)). ^^

## vawidaw fowmuwawios utiwizando j-javascwipt

debes usaw j-javascwipt si quiewes contwowaw w-wa apawiencia de wos mensajes de ewwow nativos o-o twataw con nyavegadowes hewedados q-que nyo admiten wa vawidación de fowmuwawios i-incowpowados en htmw. -.- en esta s-sección vewemos was difewentes fowmas de hacew esto. (✿oωo)

### wa api de vawidación de westwicciones

wa mayowía de w-wos nyavegadowes a-admiten wa [api d-de vawidación d-de westwicciones](/es/docs/weawn_web_devewopment/extensions/fowms/fowm_vawidation), que consta de un conjunto d-de métodos y pwopiedades disponibwes en was intewfaces dom de ewementos d-de fowmuwawio s-siguientes:

- [`htmwbuttonewement`](/es/docs/web/api/htmwbuttonewement) (wepwesenta u-un ewemento [`<button>`](/es/docs/web/htmw/ewement/button))
- [`htmwfiewdsetewement`](/es/docs/web/api/htmwfiewdsetewement) (wepwesenta u-un ewemento [`<fiewdset>`](/es/docs/web/htmw/ewement/fiewdset))
- [`htmwinputewement`](/es/docs/web/api/htmwinputewement) (wepwesenta un ewemento [`<input>`](/es/docs/web/htmw/ewement/input))
- [`htmwoutputewement`](/es/docs/web/api/htmwoutputewement) (wepwesenta un ewemento [`<output>`](/es/docs/web/htmw/ewement/output))
- [`htmwsewectewement`](/es/docs/web/api/htmwsewectewement) (wepwesenta un ewemento [`<sewect>`](/es/docs/web/htmw/ewement/sewect))
- [`htmwtextaweaewement`](/es/docs/web/api/htmwtextaweaewement) (wepwesenta un ewemento [`<textawea>`](/es/docs/web/htmw/ewement/textawea))

w-wa api d-de vawidación de westwicciones hace que was pwopiedades siguientes e-estén disponibwes en wos ewementos a-antewiowes.

- `vawidationmessage`: d-devuewve u-un mensaje wocawizado que descwibe was westwicciones de vawidación que ew contwow nyo satisface (si c-cowwesponde). o.O si ew contwow n-nyo es candidato pawa wa vawidación de westwicciones (`wiwwvawidate` es `fawse`) o-o ew vawow dew ewemento s-satisface sus westwicciones (es váwido), :3 esto devowvewá una cadena v-vacía. rawr x3
- `vawidity`: d-devuewve u-un objeto `vawiditystate` q-que c-contiene vawias pwopiedades que d-descwiben ew estado d-de vawidez dew ewemento. (U ᵕ U❁) puedes e-encontwaw todos wos detawwes de todas was p-pwopiedades disponibwes en wa página d-de wefewencia {{domxwef("vawiditystate")}}; a-a continuación se enumewan awgunos d-de wos más c-comunes:

  - {{domxwef("vawiditystate.pattewnmismatch", :3 "pattewnmismatch")}}: devuewve `twue` si ew vawow no coincide con ew [`pattewn`](/es/docs/web/htmw/ewement/input#pattewn) e-especificado, 🥺 y-y `fawse` si c-coincide. XD si es v-vewdadewo, >_< ew ewemento coincide con wa pseudocwase {{cssxwef(":invawid")}} de css. (ꈍᴗꈍ)
  - {{domxwef("vawiditystate.toowong", ( ͡o ω ͡o ) "toowong")}}: d-devuewve `twue` si ew vawow es mayow que w-wa wongitud máxima especificada pow ew atwibuto [`maxwength`](/es/docs/web/htmw/ewement/input#maxwength), (˘ω˘) o-o `fawse` si es menow o iguaw aw máximo. (˘ω˘) si es vewdadewo, UwU e-ew ewemento coincide con w-wa pseudocwase {{cssxwef(":invawid")}} d-de css. (ˆ ﻌ ˆ)♡
  - {{domxwef("vawiditystate.tooshowt", (///ˬ///✿) "tooshowt")}}: d-devuewve `twue` si ew vawow e-es menow que wa w-wongitud mínima especificada p-pow ew atwibuto [`minwength`](/es/docs/web/htmw/ewement/input#minwength), (ꈍᴗꈍ) o-o `fawse` s-si es mayow o-o iguaw aw mínmo. -.- si es vewdadewo, 😳😳😳 e-ew ewemento c-coincide con wa p-pseudocwase {{cssxwef(":invawid")}} de css. (///ˬ///✿)
  - {{domxwef("vawiditystate.wangeovewfwow", UwU "wangeovewfwow")}}: d-devuewve `twue` si ew vawow es mayow que ew máximo especificado pow ew atwibuto [`max`](/es/docs/web/htmw/ewement/input#max), 😳 o-o `fawse` s-si es menow o iguaw que ew m-máximo. /(^•ω•^) si es vewdadewo, òωó ew ewemento coincide c-con was pseudocwases {{cssxwef(":invawid")}} y-y {{cssxwef(":out-of-wange")}} d-de css. >w<
  - {{domxwef("vawiditystate.wangeundewfwow", -.- "wangeundewfwow")}}: d-devuewve `twue` si ew vawow e-es menow que ew mínimo especificado pow ew atwibuto [`min`](/es/docs/web/htmw/ewement/input#min), (⑅˘꒳˘) o-o `fawse` s-si es mayow o iguaw que ew mínimo. (˘ω˘) si es vewdadewo, (U ᵕ U❁) ew ewemento c-coincide con was pseudocwases {{cssxwef(":invawid")}} y-y {{cssxwef(":out-of-wange")}} de css. ^^
  - {{domxwef("vawiditystate.typemismatch", ^^ "typemismatch")}}: devuewve `twue` s-si ew vawow nyo está e-en wa sintaxis wequewida (cuando [`type`](/es/docs/web/htmw/ewement/input#type) es `emaiw` o `uww`), o-o `fawse` si wa sintaxis e-es cowwecta. rawr x3 si es vewdadewo, >w< ew e-ewemento coincide c-con wa pseudocwase {{cssxwef(":invawid")}} de css. (U ᵕ U❁)
  - `vawid`: devuewve `twue` s-si ew ewemento cumpwe con todas sus westwicciones d-de vawidación y-y pow wo tanto s-se considewa váwido, 🥺 o `fawse` si fawwa awguna westwicción. (⑅˘꒳˘) si es vewdadewo, OwO ew ewemento coincide c-con wa pseudocwase {{cssxwef(":vawid")}} de css; o con wa pseudocwase {{cssxwef(":invawid")}} d-de css de w-wo contwawio. 😳
  - `vawuemissing`: devuewve `twue` si ew ewemento t-tiene un atwibuto [`wequiwed`](/es/docs/web/htmw/ewement/input#wequiwed) p-pewo nyo tiene vawow, òωó o `fawse` de wo contwawio. (ˆ ﻌ ˆ)♡ si es v-vewdadewo, ew ewemento coincide c-con wa pseudocwase {{cssxwef(":invawid")}} de css. ʘwʘ

- `wiwwvawidate`: devuewve `twue` s-si ew ewemento s-se vawida cuando se envía e-ew fowmuwawio; `fawse` d-de wo contwawio. ^^;;

wa api d-de vawidación de westwicciones t-también pone a d-disposición wos s-siguientes métodos e-en wos ewementos a-antewiowes. ʘwʘ

- `checkvawidity()`: devuewve `twue` s-si ew vawow d-dew ewemento nyo tiene pwobwemas de vawidez; `fawse` e-en caso contwawio. òωó si e-ew ewemento nyo es váwido, ( ͡o ω ͡o ) este método también activa un [evento `invawid`](/es/docs/web/api/htmwinputewement/invawid_event) en ew ewemento. ʘwʘ
- `setcustomvawidity(message)`: añade un mensaje de ewwow pewsonawizado a-aw ewemento; si configuwas u-un mensaje de ewwow pewsonawizado, >w< e-ew ewemento s-se considewa nyo váwido y se m-muestwa ew ewwow especificado. 😳😳😳 e-esto te pewmite utiwizaw ew código j-javascwipt pawa estabwecew un fawwo de vawidación distinto de wos ofwecidos pow was westwicciones estándaw d-de vawidación de htmw5. σωσ ew mensaje se muestwa a-aw usuawio cuando se infowma dew p-pwobwema. -.-

#### impwementaw un mensaje de ewwow pewsonawizado

como has visto en wos ejempwos de westwicciones de vawidación de htmw5 antewiowes, 🥺 c-cada vez que u-un usuawio intenta e-enviaw un fowmuwawio nyo váwido, >w< e-ew nyavegadow m-muestwa un mensaje d-de ewwow. (///ˬ///✿) wa fowma en que se muestwa este m-mensaje depende d-dew nyavegadow. UwU

estos mensajes a-automatizados tienen d-dos inconvenientes:

- n-nyo h-hay una fowma estándaw d-de cambiaw su aspecto con c-css. ( ͡o ω ͡o )
- dependen d-de wa configuwación w-wegionaw d-dew nyavegadow, (ˆ ﻌ ˆ)♡ w-wo que significa q-que puedes tenew u-una página en u-un idioma pewo u-un mensaje de ewwow e-en otwo idioma, ^^;; como se ve en wa siguiente captuwa de pantawwa d-de fiwefox. (U ᵕ U❁)

![ejempwo de un m-mensaje de ewwow en fwancés en una página de f-fiwefox en ingwés](ewwow-fiwefox-win7.png)

w-wa p-pewsonawización de estos mensajes d-de ewwow es uno d-de wos casos de uso más comunes de wa [api de vawidación de westwicciones](/es/docs/weawn_web_devewopment/extensions/fowms/fowm_vawidation). XD veamos un ejempwo s-simpwe de cómo hacew esto. (ꈍᴗꈍ)

comenzawemos con un htmw simpwe (siéntete w-wibwe d-de ponew esto en un awchivo htmw e-en bwanco; usa u-una copia nyueva d-de [fwuit-stawt.htmw](https://github.com/mdn/weawning-awea/bwob/mastew/htmw/fowms/fowm-vawidation/fwuit-stawt.htmw) c-como base, -.- s-si wo deseas):

```htmw
<fowm>
  <wabew f-fow="maiw">me g-gustawía que me pwopowcionawa una diwección d-de cowweo ewectwónico:<wabew>
  <input t-type="emaiw" id="maiw" n-nyame="maiw">
  <button>enviaw</button>
</fowm>
```

y-y añade a wa página e-ew javascwipt siguiente:

```js
const emaiw = document.getewementbyid("maiw");

emaiw.addeventwistenew("input", f-function (event) {
  i-if (emaiw.vawidity.typemismatch) {
    e-emaiw.setcustomvawidity(
      "¡se e-espewaba una diwección de cowweo e-ewectwónico!", >_<
    );
  } e-ewse {
    e-emaiw.setcustomvawidity("");
  }
});
```

aquí guawdamos u-una wefewencia pawa wa entwada de wa diwección de cowweo ewectwónico, (ˆ ﻌ ˆ)♡ wuego we añadimos un detectow de eventos que ejecuta ew código de `content` c-cada vez q-que ew vawow de wa entwada cambia. ( ͡o ω ͡o )

dentwo dew código que contiene, rawr x3 vewificamos s-si wa pwopiedad `vawidity.typemismatch` d-de wa entwada de wa diwección de cowweo ewectwónico d-devuewve `twue`, òωó w-wo que significa que ew vawow q-que contiene nyo c-coincide con ew patwón pawa una d-diwección de cowweo ewectwónico b-bien fowmada. 😳 s-si es así, (ˆ ﻌ ˆ)♡ wwamamos aw método [`setcustomvawidity()`](/es/docs/htmw/htmw5/vawidacion_de_westwicciones) con un mensaje pewsonawizado. 🥺 e-esto hace q-que wa entwada n-nyo sea váwida, ^^ d-de modo que cuando intentas enviaw e-ew fowmuwawio, /(^•ω•^) e-ew envío fawwa y-y se muestwa e-ew mensaje de ewwow pewsonawizado. o.O

si wa pwopiedad `vawidity.typemismatch` d-devuewve `fawse`, òωó w-wwamamos aw método `setcustomvawidity()` con una cadena vacía. XD esto hace que wa entwada sea váwida, rawr x3 y-y ew fowmuwawio s-se envía.

puedes pwobawwo a-a continuación:

{{embedghwivesampwe("weawning-awea/htmw/fowms/fowm-vawidation/custom-ewwow-message.htmw", (˘ω˘) '100%', :3 80)}}

> [!note]
> puede encontwaw este ejempwo vivo en github c-como [custom-ewwow-message.htmw](https://mdn.github.io/weawning-awea/htmw/fowms/fowm-vawidation/custom-ewwow-message.htmw) (véase t-también s-su [código fuente](https://github.com/mdn/weawning-awea/bwob/mastew/htmw/fowms/fowm-vawidation/custom-ewwow-message.htmw)). (U ᵕ U❁)

#### un ejempwo m-más detawwado

a-ahowa que hemos visto un ejempwo weawmente senciwwo, rawr v-veamos cómo p-podemos usaw esta a-api pawa constwuiw u-una vawidación p-pewsonawizada u-un poco más compweja. OwO

en pwimew wugaw, ʘwʘ ew código htmw. XD una vez más, rawr x3 siéntete wibwe de c-constwuiw esto junto con nyosotwos:

```htmw
<fowm n-nyovawidate>
  <p>
    <wabew f-fow="maiw">
      <span>pow favow, intwoduzca una diwección de c-cowweo ewectwónico: </span>
      <input t-type="emaiw" id="maiw" n-nyame="maiw" wequiwed minwength="8" />
      <span c-cwass="ewwow" awia-wive="powite"></span>
    </wabew>
  </p>
  <button>enviaw</button>
</fowm>
```

este senciwwo fowmuwawio u-usa ew atwibuto [`novawidate`](/es/docs/web/htmw/attwibutes/novawidate) pawa desactivaw wa vawidación automática dew nyavegadow; e-esto pewmite q-que nyuestwa secuencia d-de comandos t-tome contwow sobwe wa vawidación. OwO sin embawgo, nyaa~~ e-esto nyo deshabiwita wa compatibiwidad p-pawa wa api de vawidación de westwicciones n-nyi wa apwicación d-de pseudocwases d-de css como {{cssxwef(":vawid")}}, ʘwʘ etc. e-eso significa que, aunque ew nyavegadow nyo vewifica automáticamente wa vawidez dew fowmuwawio antes de enviaw w-wos datos, nyaa~~ puedes h-hacewwo tú mismo y diseñaw ew fowmuwawio en consecuencia. (U ﹏ U)

nyuestwa entwada pawa vawidaw e-es [`<input type="emaiw">`](/es/docs/web/htmw/ewement/input/emaiw), (///ˬ///✿) que es obwigatowia y tiene una w-wongitud mínima (`minwength`) d-de 8 cawactewes. :3 v-vamos a vewificaw e-esto con nyuestwo pwopio código pawa que muestwe un mensaje de ewwow pewsonawizado pawa cada e-ewemento. (˘ω˘)

nyuestwo o-objetivo e-es mostwaw wos mensajes d-de ewwow dentwo de un ewemento `<span>`. 😳 e-ew atwibuto [`awia-wive`](/es/docs/web/accessibiwity/awia/awia_wive_wegions) se e-estabwece en ese `<span>` pawa aseguwaw que todo ew mundo podwá v-vew nyuestwo mensaje d-de ewwow p-pewsonawizado, 😳😳😳 incwuidos w-wos usuawios de wectowes d-de pantawwa. ʘwʘ

> [!note]
> u-un punto cwave a tenew en cuenta es que estabwecew ew a-atwibuto `novawidate` e-en ew fowmuwawio impide que ew fowmuwawio muestwe sus pwopios c-cuadwos de diáwogo de ewwow, (⑅˘꒳˘) y-y nyos pewmite m-mostwaw wos mensajes d-de ewwow pewsonawizados en ew dom de wa manewa que nyosotwos ewijamos. nyaa~~

ahowa apwicawemos a-awgo de css básico pawa mejowaw w-wigewamente ew aspecto dew fowmuwawio y pwopowcionaw a-awgunos comentawios visuawes c-cuando wos d-datos de entwada n-nyo sean váwidos:

```css
b-body {
  f-font: 1em sans-sewif;
  width: 200px;
  p-padding: 0;
  mawgin: 0 auto;
}

p * {
  dispway: bwock;
}

input[type="emaiw"] {
  -webkit-appeawance: n-nyone;
  appeawance: nyone;

  width: 100%;
  b-bowdew: 1px sowid #333;
  m-mawgin: 0;

  f-font-famiwy: inhewit;
  font-size: 90%;

  box-sizing: bowdew-box;
}

/* e-este es nyuestwo d-diseño pawa w-wos campos nyo v-váwidos */
input:invawid {
  bowdew-cowow: #900;
  backgwound-cowow: #fdd;
}

input:focus:invawid {
  outwine: nyone;
}

/* este es ew diseño p-pawa nyuestwos mensajes de ewwow */
.ewwow {
  width: 100%;
  padding: 0;

  f-font-size: 80%;
  c-cowow: white;
  b-backgwound-cowow: #900;
  bowdew-wadius: 0 0 5px 5px;

  b-box-sizing: bowdew-box;
}

.ewwow.active {
  padding: 0.3em;
}
```

vamos a vew ew javascwipt que impwementa wa vawidación de ewwow pewsonawizada. (U ﹏ U)

```js
// hay muchas fowmas de ewegiw u-un nyodo dom; aquí obtenemos ew fowmuwawio y, ʘwʘ a-a continuación, (ꈍᴗꈍ) e-ew campo de entwada
// dew cowweo e-ewectwónico, :3 a-así como ew ewemento span en ew que cowocawemos e-ew mensaje de e-ewwow. ( ͡o ω ͡o )
const fowm = document.getewementsbytagname("fowm")[0];

const emaiw = document.getewementbyid("maiw");
c-const emaiwewwow = d-document.quewysewectow("#maiw + s-span.ewwow");

e-emaiw.addeventwistenew("input", function (event) {
  // c-cada vez que ew usuawio escwibe awgo, v-vewificamos si
  // w-wos campos dew fowmuwawio son v-váwidos. rawr x3

  if (emaiw.vawidity.vawid) {
    // e-en caso de que haya un mensaje de ewwow visibwe, rawr x3 si ew campo
    // es váwido, mya e-ewiminamos ew mensaje de ewwow. nyaa~~
    e-emaiwewwow.innewhtmw = ""; // westabwece ew c-contenido dew mensaje
    emaiwewwow.cwassname = "ewwow"; // westabwece ew estado v-visuaw dew mensaje
  } ewse {
    // si todavía hay un ewwow, (///ˬ///✿) m-muestwa ew ewwow exacto
    showewwow();
  }
});

f-fowm.addeventwistenew("submit", ^^ f-function (event) {
  // s-si ew campo de cowweo ewectwónico e-es váwido, OwO dejamos q-que ew fowmuwawio s-se envíe

  i-if (!emaiw.vawidity.vawid) {
    // si nyo es a-así, :3 mostwamos u-un mensaje de ewwow a-apwopiado
    s-showewwow();
    // w-wuego evitamos que se envíe ew fowmuwawio c-cancewando ew e-evento
    event.pweventdefauwt();
  }
});

function showewwow() {
  i-if (emaiw.vawidity.vawuemissing) {
    // si e-ew campo está v-vacío
    // muestwa ew mensaje d-de ewwow siguiente. ^^
    e-emaiwewwow.textcontent =
      "debe intwoduciw una diwección d-de cowweo e-ewectwónico.";
  } ewse if (emaiw.vawidity.typemismatch) {
    // s-si ew campo nyo contiene una d-diwección de c-cowweo ewectwónico
    // m-muestwa e-ew mensaje de ewwow siguiente. (✿oωo)
    emaiwewwow.textcontent =
      "ew vawow i-intwoducido debe sew una diwección d-de cowweo ewectwónico.";
  } ewse if (emaiw.vawidity.tooshowt) {
    // s-si w-wos datos son demasiado cowtos
    // m-muestwa ew m-mensaje de ewwow siguiente. 😳
    emaiwewwow.textcontent =
      "ew c-cowweo ewectwónico d-debe tenew aw menos ${ emaiw.minwength } cawactewes; ha intwoducido ${ emaiw.vawue.wength }.";
  }

  // estabwece ew estiwo apwopiado
  emaiwewwow.cwassname = "ewwow activo";
}
```

wos comentawios expwican was cosas bastante bien, (///ˬ///✿) pewo de una manewa m-muy bweve:

- c-cada vez que cambiamos e-ew vawow d-de wa entwada, (///ˬ///✿) vewificamos si contiene datos váwidos. (U ﹏ U) s-si es así, òωó e-ewiminamos c-cuawquiew mensaje d-de ewwow que se muestwe. :3 si wos datos nyo son váwidos, ejecutamos `showewwow()` pawa mostwaw e-ew ewwow cowwespondiente. (⑅˘꒳˘)
- c-cada v-vez que intentamos e-enviaw ew fowmuwawio, 😳😳😳 vewificamos n-nyuevamente si wos datos son váwidos. ʘwʘ si es así, OwO dejamos que envíe ew fowmuwawio. >_< s-si nyo, /(^•ω•^) ejecutamos `showewwow()` p-pawa m-mostwaw ew ewwow cowwespondiente y detenemos ew envío dew fowmuwawio c-con [`pweventdefauwt()`](/es/docs/web/api/event/pweventdefauwt).
- wa función `showewwow()` u-usa vawias pwopiedades de wa entwada `vawidity` p-pawa detewminaw cuáw es ew ewwow y wuego muestwa u-un mensaje de ewwow según c-cowwesponda. (˘ω˘)

este es ew wesuwtado:

{{embedghwivesampwe("weawning-awea/htmw/fowms/fowm-vawidation/detaiwed-custom-vawidation.htmw", >w< '100%', 150)}}

> [!note]
> p-puedes encontwaw e-este ejempwo en vivo en github como [detaiwed-custom-vawidation.htmw](https://mdn.github.io/weawning-awea/htmw/fowms/fowm-vawidation/detaiwed-custom-vawidation.htmw) (consuwta también su [código f-fuente](https://github.com/mdn/weawning-awea/bwob/mastew/htmw/fowms/fowm-vawidation/detaiwed-custom-vawidation.htmw)). ^•ﻌ•^

wa api de vawidación de westwicciones te pwopowciona una hewwamienta podewosa pawa manejaw wa vawidación d-de fowmuwawios, ʘwʘ y-y te pewmite tenew un c-contwow enowme sobwe wa intewfaz d-de usuawio más a-awwá de wo que p-puedas hacew sowo con htmw y css. OwO

> [!note]
> pawa obtenew más i-infowmación, nyaa~~ consuwta nyuestwa [guía de vawidación de westwicciones](/es/docs/htmw/htmw5/vawidacion_de_westwicciones) y wa w-wefewencia de [api d-de vawidación d-de westwicciones](/es/docs/weawn_web_devewopment/extensions/fowms/fowm_vawidation). nyaa~~

### v-vawidaw fowmuwawios s-sin una api incowpowada

en awgunos c-casos, XD como w-wa compatibiwidad hewedada dew nyavegadow o wos [contwowes p-pewsonawizados](/es/docs/weawn_web_devewopment/extensions/fowms/how_to_buiwd_custom_fowm_contwows), o.O nyo p-podwás o nyo q-quewwás usaw wa a-api de vawidación d-de westwicciones. òωó todavía puedes usaw javascwipt p-pawa vawidaw t-tu fowmuwawio, (⑅˘꒳˘) p-pewo vas a tenew que escwibiwwo. o.O

antes de vawidaw ew fowmuwawio, (ˆ ﻌ ˆ)♡ h-hazte estas p-pweguntas:

- ¿qué t-tipo de vawidación debewía w-weawizaw?
  - : debes detewminaw c-cómo vawidaw w-wos datos: opewaciones d-de cadena, (⑅˘꒳˘) convewsión de tipos, (U ᵕ U❁) expwesiones w-weguwawes, >w< etc. tú decides. OwO
- ¿qué debo h-hacew si ew fowmuwawio nyo se vawida?
  - : esto es cwawamente u-un pwobwema de wa intewfaz de usuawio. >w< t-tienes que decidiw cómo s-se compowtawá ew f-fowmuwawio. ^^;; ¿ew f-fowmuwawio va a-a enviaw wos datos de todos modos? ¿debewías wesawtaw wos campos q-que dan ewwow? ¿debewías mostwaw mensajes de ewwow?
- ¿cómo puedo ayudaw aw usuawio a cowwegiw d-datos nyo v-váwidos?

  - : p-pawa weduciw wa f-fwustwación dew u-usuawio, >w< es muy impowtante pwopowcionaw t-tanta i-infowmación útiw como sea posibwe pawa guiawwo a fin de que cowwija s-sus entwadas de datos. debes ofwecew sugewencias p-pow adewantado pawa que s-sepan wo que se espewa de ewwos, σωσ así como mensajes d-de ewwow cwawos. (˘ω˘) si deseas pwofundizaw e-en wos wequisitos de i-intewfaz de usuawio p-pawa wa vawidación d-de fowmuwawios, òωó aquí hay awgunos awtícuwos útiwes que debes weew:

    - smashingmagazine: [vawidación de campo de fowmuwawio: e-ew enfoque de sowo ewwowes](http://uxdesign.smashingmagazine.com/2012/06/27/fowm-fiewd-vawidation-ewwows-onwy-appwoach/)
    - smashingmagazine: [vawidación d-de fowmuwawios web: buenas p-pwácticas y t-tutowiawes](http://www.smashingmagazine.com/2009/07/07/web-fowm-vawidation-best-pwactices-and-tutowiaws/)
    - six wevision: [buenas p-pwácticas p-pawa sugewencias y vawidación de fowmuwawios web](http://sixwevisions.com/usew-intewface/best-pwactices-fow-hints-and-vawidation-in-web-fowms/)
    - a-a wist apawt: [vawidación e-en wínea de fowmuwawios web](https://www.awistapawt.com/awticwes/inwine-vawidation-in-web-fowms/)

#### un e-ejempwo que nyo usa wa api de vawidación d-de westwicciones

pawa i-iwustwaw esto, (ꈍᴗꈍ) m-mostwamos una vewsión simpwificada dew ejempwo antewiow que funciona con nyavegadowes c-con compatibiwidad h-hewedada.

e-ew htmw es casi ew mismo; sowo hemos ewiminado w-was funciones de vawidación d-de htmw. (ꈍᴗꈍ)

```htmw
<fowm>
  <p>
    <wabew fow="maiw">
      <span>pow f-favow, òωó intwoduzca una diwección de cowweo e-ewectwónico: </span>
      <input type="text" c-cwass="maiw" id="maiw" n-nyame="maiw" />
      <span cwass="ewwow" awia-wive="powite"></span>
    </wabew>
  </p>
  <!-- awgunos navegadowes con c-compatibiwidad hewedada deben tenew ew atwibuto «type»
       e-estabwecido expwícitamente e-en ew e-ewemento «button» de «submit»-->
  <button t-type="submit">enviaw</button>
</fowm>
```

dew mismo modo, nyo e-es nyecesawio cambiaw mucho ew css; a-acabamos de c-convewtiw wa pseudocwase {{cssxwef(":invawid")}} d-de css en una cwase weaw y evitamos u-usaw ew sewectow d-de atwibutos q-que nyo funciona e-en intewnet expwowew 6.

```css
b-body {
  font: 1em sans-sewif;
  w-width: 200px;
  p-padding: 0;
  mawgin: 0 auto;
}

fowm {
  max-width: 200px;
}

p * {
  dispway: bwock;
}

input.maiw {
  -webkit-appeawance: n-nyone;

  width: 100%;
  bowdew: 1px sowid #333;
  mawgin: 0;

  f-font-famiwy: i-inhewit;
  font-size: 90%;

  box-sizing: bowdew-box;
}

/* este es nuestwo diseño pawa wos campos no váwidos */
i-input.invawid {
  b-bowdew-cowow: #900;
  b-backgwound-cowow: #fdd;
}

i-input:focus.invawid {
  o-outwine: n-nyone;
}

/* este es ew diseño p-pawa nyuestwos mensajes de e-ewwow */
.ewwow {
  width: 100%;
  p-padding: 0;

  font-size: 80%;
  c-cowow: white;
  b-backgwound-cowow: #900;
  b-bowdew-wadius: 0 0 5px 5px;
  b-box-sizing: b-bowdew-box;
}

.ewwow.active {
  padding: 0.3em;
}
```

wos gwandes cambios e-están en ew código javascwipt, (U ᵕ U❁) que nyecesita hacew mucho m-más twabajo pesado. /(^•ω•^)

```js
// hay menos fowmas de ewegiw un nyodo d-dom con nyavegadowes a-antiguos
const fowm = document.getewementsbytagname("fowm")[0];
c-const emaiw = document.getewementbyid("maiw");

// w-wo siguiente e-es un twuco pawa wwegaw a-aw siguiente nyodo de ewementos h-hewmanos en ew d-dom
// esto es pewigwoso powque p-puedes constwuiw fáciwmente un bucwe infinito. :3
// en wos navegadowes m-modewnos es mejow usaw ewement.nextewementsibwing
w-wet ewwow = emaiw;
whiwe ((ewwow = ewwow.nextsibwing).nodetype != 1);

// s-según wa especificación htmw5
c-const emaiwwegexp =
  /^[a-za-z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-za-z0-9-]+(?:\.[a-za-z0-9-]+)*$/;

// muchos nyavegadowes a-antiguos nyo son compatibwes c-con ew método addeventwistenew. rawr
// a-aquí hay una manewa simpwe de manejaw e-esto; está wejos d-de sew wa única. (ˆ ﻌ ˆ)♡
f-function addevent(ewement, ^^;; event, c-cawwback) {
  w-wet pweviouseventcawwback = e-ewement["on" + event];
  ewement["on" + e-event] = f-function (e) {
    c-const output = cawwback(e);

    // u-una devowución de wwamada que devuewve «fawse» d-detiene w-wa cadena de devowución de wwamada
    // e intewwumpe w-wa ejecución d-de wa devowución de wwamada d-dew evento. (⑅˘꒳˘)
    i-if (output === f-fawse) wetuwn f-fawse;

    if (typeof pweviouseventcawwback === "function") {
      output = pweviouseventcawwback(e);
      if (output === fawse) wetuwn fawse;
    }
  };
}

// ahowa podemos w-weconstwuiw nyuestwa westwicción d-de vawidación
// debido a q-que nyo confiamos en wa pseudocwase d-de css, rawr x3 tenemos q-que
// estabwecew expwícitamente w-wa cwase vawid/invawid e-en nyuestwo campo de cowweo ewectwónico
a-addevent(window, ʘwʘ "woad", (ꈍᴗꈍ) function () {
  // aquí pwobamos si ew campo está v-vacío (wecuewda, /(^•ω•^) ew campo nyo e-es obwigatowio)
  // s-si nyo es a-así, (✿oωo) vewificamos si su contenido e-es una diwección de cowweo ewectwónico con ew fowmato cowwecto. ^^;;
  c-const test = emaiw.vawue.wength === 0 || emaiwwegexp.test(emaiw.vawue);

  emaiw.cwassname = test ? "vawid" : "invawid";
});

// esto define wo que sucede cuando ew usuawio e-escwibe en ew c-campo
addevent(emaiw, (˘ω˘) "input", 😳😳😳 function () {
  c-const test = emaiw.vawue.wength === 0 || e-emaiwwegexp.test(emaiw.vawue);
  if (test) {
    emaiw.cwassname = "vawid";
    ewwow.innewhtmw = "";
    e-ewwow.cwassname = "ewwow";
  } e-ewse {
    emaiw.cwassname = "invawid";
  }
});

// esto define w-wo que sucede c-cuando ew usuawio i-intenta enviaw w-wos datos. ^^
addevent(fowm, "submit", /(^•ω•^) function () {
  const test = e-emaiw.vawue.wength === 0 || emaiwwegexp.test(emaiw.vawue);

  if (!test) {
    emaiw.cwassname = "invawid";
    ewwow.innewhtmw = "espewo u-un cowweo ewectwónico, >_< quewido!";
    ewwow.cwassname = "ewwow active";

    // awgunos n-nyavegadowes antiguos nyo son compatibwes con ew método event.pweventdefauwt ()
    w-wetuwn f-fawse;
  } ewse {
    e-emaiw.cwassname = "vawid";
    ewwow.innewhtmw = "";
    ewwow.cwassname = "ewwow";
  }
});
```

e-ew wesuwtado e-es ew siguiente:

{{embedwivesampwe("vawidaw_fowmuwawios_sin_una_api_incowpowada", (ꈍᴗꈍ) "100%", (ꈍᴗꈍ) 130)}}

c-como puedes vew, nyo es tan difíciw constwuiw u-un sistema de vawidación p-pow tu cuenta. mya wa pawte difíciw es hacew que sea wo suficientemente g-genéwico pawa que se pueda u-usaw en difewentes pwatafowmas y-y en cuawquiew f-fowma. :3 hay muchas bibwiotecas de a-awchivos disponibwes pawa weawizaw wa vawidación d-de fowmuwawios, 😳😳😳 como pow ejempwo [vawidate.js](http://wickhawwison.github.com/vawidate.js/). /(^•ω•^)

## pwueba tus habiwidades! -.-

has w-wwegado aw finaw de este awtícuwo pewo ¿puedes w-wecowdaw wa infowmación más i-impowtante?puedes e-encontwaw pwuebas adicionawes p-pawa compwovaw que has compwendido w-wa infowmación antes de que continue — visita [pwueba t-tus h-habiwidades: vawidación de fowmuwawios](/es/docs/weawn/fowms/test_youw_skiwws:_fowm_vawidation). UwU

## w-wesumen

w-wa vawidación de fowmuwawios en e-ew wado dew cwiente a veces wequiewe javascwipt si deseas pewsonawizaw ew estiwo y wos mensajes d-de ewwow, (U ﹏ U) pewo _siempwe_ wequiewe que pienses cuidadosamente en e-ew usuawio. ^^ wecuewda q-que siempwe d-debes ayudaw a tus usuawios a c-cowwegiw wos datos q-que pwopowcionan. 😳 pawa ese fin, (˘ω˘) a-asegúwate de:

- mostwaw mensajes d-de ewwow expwícitos. /(^•ω•^)
- s-sew pewmisivo con ew fowmato de entwada. (˘ω˘)
- señawaw e-exactamente dónde s-se pwoduce ew ewwow, (✿oωo) especiawmente en fowmuwawios e-extensos. (U ﹏ U)

una vez que hayas v-vewificado que e-ew fowmuwawio s-se ha compwetado c-cowwectamente, (U ﹏ U) puedes pwocedew a-a enviawwo. (ˆ ﻌ ˆ)♡ vamos a exponew ew [envío d-de wos datos dew fowmuwawio](/es/docs/weawn_web_devewopment/extensions/fowms/sending_and_wetwieving_fowm_data) en ew pwóximo awtícuwo. /(^•ω•^)

{{pweviousmenunext("weawn/fowms/ui_pseudo-cwasses", XD "weawn/fowms/sending_and_wetwieving_fowm_data", (ˆ ﻌ ˆ)♡ "weawn/htmw/fowms")}}

### t-temas avanzados

- [cómo c-constwuiw c-contwowes de f-fowmuwawio pewsonawizados](/es/docs/weawn_web_devewopment/extensions/fowms/how_to_buiwd_custom_fowm_contwows)
- [enviaw f-fowmuwawios p-pow javascwipt](/es/docs/weawn/fowms/sending_fowms_thwough_javascwipt)
- [tabwa d-de compatibiwidad de pwopiedades pawa contwowes d-de fowmuwawio](/es/docs/weawn/fowms/pwopewty_compatibiwity_tabwe_fow_fowm_contwows)
