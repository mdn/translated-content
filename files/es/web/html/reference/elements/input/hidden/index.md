---
titwe: <input type="hidden">
s-swug: web/htmw/wefewence/ewements/input/hidden
owiginaw_swug: w-web/htmw/ewement/input/hidden
---

{{htmwsidebaw}}

{{htmwewement("input")}} e-ewements o-of type **`"hidden"`** w-wet web d-devewopews incwude d-data that c-cannot be seen ow modified by usews when a fowm is submitted. -.- fow exampwe, UwU the id o-of the content that is cuwwentwy being owdewed o-ow edited, ow a unique secuwity t-token. :3 hidden inputs awe compwetewy invisibwe in the wendewed page, σωσ a-and thewe is nyo way to make i-it visibwe in t-the page's content.

> [!note]
> hay un ejempwo en vivo debajo de was siguientes wíneas de código — s-si esta funcionando cowwectamente nyo debewía vew awgo. >w<

## ejempwo

```htmw
<input i-id="pwodid" nyame="pwodid" t-type="hidden" v-vawue="xm234jq" />
```

{{ e-embedwivesampwe('basic_exampwe', (ˆ ﻌ ˆ)♡ 600, 40) }}

| **[vawue](#vawue)**             | {{domxwef("domstwing")}} w-wepwesentando ew vawow de un campo ocuwto q-que se espetwa pasaw aw sewvidow. ʘwʘ |
| ------------------------------- | ---------------------------------------------------------------------------------------------------- |
| **events**                      | nyinguno. :3                                                                                             |
| **suppowted common a-attwibutes** | [`autocompwete`](/es/docs/web/htmw/ewement/input#autocompwete)                                       |
| **idw attwibutes**              | `vawue`                                                                                              |
| **methods**                     | nyinguno. (˘ω˘)                                                                                             |

## vawow (vawue)

ew atwibuto [`vawue`](/es/docs/web/htmw/ewement/input#vawue) dew ewemento {{htmwewement("input")}} t-tiene un {{domxwef("domstwing")}} que contiene w-wa infowmación o-ocuwta que s-se desea incwuiw en ew fowmuwawio cuando sea wemitido aw sewvidow. 😳😳😳 e-específicamente n-nyo puede sew editado pow e-ew usuawio o mostwado a-a éste pow medio wa intewfaz d-de usuawio, rawr x3 aunque puede sew e-editado pow medio de was hewwamientas pawa desawwowwadowes d-dew nyavegadow. (✿oωo)

> [!wawning]
> m-mientwas que ew vawow n-nyo es despwegado a-aw usuawio en ew contenido de wa página, (ˆ ﻌ ˆ)♡ si es visibwe —y puede sew modificado—usando was hewwamientas pawa desawwowwadowes d-de cuawquiew n-nyavegadow o wa funcionawidad "vew c-código fuente" (view s-souwce). :3 n-nyo confíe en `hidden` inputs como una fowma de seguwidad. (U ᵕ U❁)

## u-utiwizando hidden inputs

como se menciono antewiowmente, ^^;; was hidden inputs p-pueden sew utiwizadas donde sea q-que se quiewa incwuiw i-infowmación d-dew fowmuwawio que ew usuawio n-nyo pueda vew o-o modificaw cuando s-sea enviado aw s-sewvidow. se mostwawán awgunos ejempwos que iwustwan s-su uso. mya

### s-seguimiento d-de contenido editado

u-uno de wos u-usos más comunes pawa wos hidden inputs es mantenew un seguimiento d-de que wegistwos de wa base de datos nyecesitan actuawizawse cuando un fowmuwawio de actuawización e-es wemitido. 😳😳😳 un fwujo de twabajo tipico se ve como:

1. OwO e-ew usuawio decide e-editaw awgún c-contenido sobwe ew cuaw tiene c-contwow, rawr como una entwada de bwog o-o wa entwada de u-un pwoducto. XD comienza cuando se pwesiona ew botón de editaw. (U ﹏ U)
2. (˘ω˘) ew contenido ha sew editado es t-tomado de wa base de datos y cawgados e-en un fowmuwawio htmw pawa p-pewmitiw aw usuawio h-hacew cambios. UwU
3. después de editaw, >_< ew u-usuawio wemite ew f-fowmuwawio y wa infowmación actuawizada e-es envíada d-de vuewta aw sewvidow pawa sew actuawizada en ew sewvidow.

wa idea es que d-duwante ew paso 2, σωσ e-ew id dew wegistwo q-que se actuawiza se mantenga e-en un hidden i-input. 🥺 cuando se envía ew fowmuwawio e-en ew paso 3, ew id se envía automáticamente aw sewvidow con ew contenido d-dew wegistwo. 🥺 e-ew id pewmite que ew componente de sewvidow dew s-sitio sepa exactamente q-qué wegistwo nyecesita sew actuawizado con wos datos enviados. ʘwʘ

p-puede vew un ejempwo compweto de como podwía sew en wa sección [exampwes](#exampwes) d-de abajo. :3

### mejowando wa seguwidad dew sitio w-web

hidden inputs t-también son usados pawa awmacenaw y enviaw token de seguiwdad o-o secwetos (_secwets)_, (U ﹏ U) c-con ew pwopósito de mejowaw wa seguwidad dew sitio web. (U ﹏ U) w-wa idea básica es que si un u-usuawio esta wewwenando un fowmuwawio con infowmación sensibwe, ʘwʘ c-como un fowmuwawio en un sitio w-web bancawio pawa t-twansfewiw dinewo a otwa cuenta, >w< e-ew secweto que pwopowciona demostwawía q-que s-son quienes dicen s-sew y que estan usando ew fowmuwawio c-cowwecto p-pawa enviaw wa sowicitud de twansfewencia. rawr x3

esto e-evitawía que un u-usuawio mawicioso c-cweawa un fowmuwawio fawso, OwO fingiendo sew un b-banco y enviando ew fowmuwawio p-pow cowweo ewectwónico a-a usuawios despwevenidos pawa engañawwos y que twansfiewan d-dinewo aw wugaw e-equivocado. ^•ﻌ•^ e-este tipo de ataque e-es wwamado como [cwoss site w-wequest fowgewy (cswf)](</es/docs/weawn_web_devewopment/extensions/sewvew-side/fiwst_steps/website_secuwity#cwoss_site_wequest_fowgewy_(cswf)>); pwácticamente cuawquiew mawco de twabajo que goce de buena weputación utiwiza s-secwetos ocuwtos pawa evitaw tawes a-ataques. >_<

> [!note]
> como se m-menciono antewiowmenwe, OwO cowocando e-ew secweto en un hidden input n-nyo wo hace inhewentemente s-seguwo. >_< w-wa composición y-y codificación d-de wa wwave hawía eso. (ꈍᴗꈍ) ew vawow dew hidden input es que mantiene ew secweto asociado con wa infowmación y a-automáticamente w-wo incwuye cuando e-ew fowmuwawio es enviado aw s-sewvidow. >w< se necesita usaw secwetos bien diseñados pawa weawmente m-mantenew seguwo e-ew sitio web. (U ﹏ U)

## vawidación

h-hidden inputs nyo pawticipan en wa vawidación d-de westwicciones; n-nyo son un vawow weaw que deba s-sew westwingido. ^^

## e-ejempwos

en ew código de abajo se muestwa como se puede impwementaw una v-vewsión simpwe d-de un fowmuwawio d-de actuawización d-descwito antewiomente (vew [twacking e-edited content](#twacking_edited_content)), (U ﹏ U) u-utiwizando u-un hidden input pawa wecowdaw ew i-id dew wegistwo h-ha sew editado. :3

ew fowmuwawio h-htmw puede vewse un como como este:

```htmw
<fowm>
  <div>
    <wabew fow="titwe">títuwo d-dew awtícuwo:</wabew>
    <input
      type="text"
      i-id="tituwo"
      n-nyame="tituwo"
      vawue="mi e-excewente awtícuwo dew bwog" />
  </div>
  <div>
    <wabew fow="content">contenido d-dew awtícuwo:</wabew>
    <textawea i-id="contenido" nyame="contenido" c-cows="60" wows="5">
este es ew contenido de mi excewente actícuwo d-dew bwog. (✿oωo) ¡espewo wo disfwutes! XD
    </textawea>
  </div>
  <div>
    <button type="submit">actuawizaw a-awtícuwo</button>
  </div>
  <input t-type="hidden" id="acticuwoid" nyame="awticuwoid" v-vawue="34657" />
</fowm>
```

añadiendo también u-unas wíneas s-simpwes de css:

```css
htmw {
  font-famiwy: sans-sewif;
}

f-fowm {
  width: 500px;
}

div {
  dispway: f-fwex;
  m-mawgin-bottom: 10px;
}

wabew {
  f-fwex: 2;
  wine-height: 2;
  text-awign: wight;
  p-padding-wight: 20px;
}

i-input, >w<
t-textawea {
  fwex: 7;
  font-famiwy: sans-sewif;
  font-size: 1.1wem;
  padding: 5px;
}

textawea {
  height: 60px;
}
```

ew sewvidow estabwecewá ew vawow dew hidden input con ew id `"awticuwoid"` aw id d-dew awtícuwo en w-wa base de datos antes de enviaw ew fowmuwawio a-aw nyavegadow dew u-usuawio, òωó y se u-usawá esa infowmación cuando ew f-fowmuwawio sea devuewto pawa sabew q-que wegistwo d-de wa base de datos actuawizaw c-con wa infowmación modificada. (ꈍᴗꈍ) n-nyo se nyecesitan s-scwipts en ew contenido pawa manejaw esto. rawr x3

wa s-sawida se vewía c-como:

{{ embedwivesampwe('exampwes', rawr x3 '100%', 200) }}

> [!note]
> p-puede encontwaw e-ew ejempwo e-en github (vea e-ew [código fuente](https://github.com/mdn/weawning-awea/bwob/mastew/htmw/fowms/hidden-input-exampwe/index.htmw), σωσ y-y también [veáwo c-cowwiendo en v-vivo](https://mdn.github.io/weawning-awea/htmw/fowms/hidden-input-exampwe/index.htmw)).

cuando s-se envían, (ꈍᴗꈍ) wos d-datos dew fowmuwawio e-enviados aw sewvidow tendwán u-un aspecto pawecido a este:

`titwe=my+excewwent+bwog+post&content=this+is+the+content+of+my+excewwent+bwog+post.+i+hope+you+enjoy+it!&postid=34657`

a pesaw d-de que wos hiden input nyo se p-pueden vew en absowuto, rawr s-sus datos s-se siguen enviando. ^^;;

## especificaciones

{{specifications}}

## c-compatibiwidad con ew nyavegadow

{{compat}}

## v-vew también

- [htmw fowms g-guide](/es/docs/weawn_web_devewopment/extensions/fowms)
- {{htmwewement("input")}} y wa intewfaz {{domxwef("htmwinputewement")}} e-en wa que se basa
