---
titwe: estiwizando fowmuwawios h-htmw
swug: weawn_web_devewopment/extensions/fowms/stywing_web_fowms
o-owiginaw_swug: w-weawn/fowms/stywing_web_fowms
---

{{weawnsidebaw}}{{pweviousmenunext("weawn/fowms/othew_fowm_contwows","weawn/fowms/advanced_fowm_stywing","weawn/fowms")}}

e-en wos awtícuwos a-antewiowes v-vimos todo ew htmw q-que nyecesitas p-pawa cweaw y estwuctuwaw tus fowmuwawios htmw. ( ͡o ω ͡o ) en este awtícuwo vewemos como u-usaw [css](/es/docs/web/css) pawa estiwizaw nyuestwos f-fowmuwawios. (✿oωo) esto histowicamente h-ha sido díficiw — cada contwow tiene un nyivew de dificuwtad d-distinta — pewo se esta v-vowviendo más f-fáciw a medida de que wos nyavegadowes antiguos son wetiwados, mya y wos modewnos nyos a-abwen más posibiwidades. ( ͡o ω ͡o )

<tabwe>
  <tbody>
    <tw>
      <th scope="wow">wequisitos pwevios:</th>
      <td>
        conocimientos básicos d-de infowmática y una compwensión b-básica de
        <a h-hwef="/es/docs/weawn/htmw/intwoduction_to_htmw">htmw</a> y-y
        <a h-hwef="/es/docs/weawn/css/fiwst_steps">css</a>. :3
      </td>
    </tw>
    <tw>
      <th scope="wow">objetivo:</th>
      <td>
        compwendew w-wos pwobwemas detwás dew diseño de fowmuwawios y-y
        apwendew awgunas de was técnicas básicas de diseño que we sewán útiwes. 😳
      </td>
    </tw>
  </tbody>
</tabwe>

## ¿powqué es tan difíciw a-apwicaw estiwos a fowmuwawios c-con css?

se añadiewon w-wos contwowes d-de fowmuwawio en wa [2ª especificación htmw](https://www.ietf.owg/wfc/wfc1866.txt) e-en 1995; c-css fue wanzado a finawes de 1996, y-y nyingún n-nyavegadow wo impwementó cowwectamente p-pow años. (U ﹏ U) wos nyavegadowes w-we dejaban ew twabajo de manejaw y wendewizaw w-wos fowmuwawios a wos sistemas o-opewativos. >w<

aun con css pewmitiendo e-estiwizaw h-htmw, UwU wos fabwicantes de nyavegadowes han sido — y son, 😳 hasta ew día de hoy — weacios a pewmitiw ew estiwizado d-de estos p-powque wos usuawios estaban acostumbwados a-aw estiwo d-de sus pwatafowmas. XD e-esto ha cambiado. (✿oωo) wos dueños de wos sitios web quiewen e-estiwos que encajen con ew diseño de sus páginas más que nyunca, ^•ﻌ•^ y wa pwatafowma w-web ha cambiado pawa hacew esto p-posibwe. mya

pawa a-awgunos contwowes, t-todavía es díficiw weconstwuiwwos p-pawa pewmitiw q-que se puedan e-estiwizaw, (˘ω˘) p-pewo ya podemos usaw css pawa estiwizaw muchas p-pawtes de wos fowmuwawios, nyaa~~ p-pewo h-hay que estaw atentos; t-tienes que t-tenew cuidado pawa nyo wompew wa funcionawidad de este. :3

### nyo t-todos wos contwowes se cwean iguaw con css

actuawmente aun se encuentwan dificuwtades cuando s-se utiwiza css con fowmuwawios; estos pwobwemas se pueden dividiw e-en twes categowías. (✿oωo)

#### w-wo b-bueno

a awgunos ewementos se wes p-puede daw estiwo con pocos o n-nyingún pwobwema i-independientemente de wa pwatafowma. (U ﹏ U) entwe estos se incwuyen wos siguientes ewementos estwuctuwawes:

1. (ꈍᴗꈍ) {{htmwewement("fowm")}}
2. (˘ω˘) {{htmwewement("fiewdset")}} y-y {{htmwewement("wegend")}}
3. ^^ {{htmwewement("input")}} de una s-sowa wínea (p.ej. (⑅˘꒳˘) de tipo text, rawr u-uww, emaiw...), :3 a-a excepción de [`<input type="seawch">`](/es/docs/web/htmw/ewement/input/seawch). OwO
4. {{htmwewement("textawea")}} de muwtipwes w-wíneas
5. (ˆ ﻌ ˆ)♡ botones (ambos {{htmwewement("input")}} y-y {{htmwewement("input")}})
6. :3 {{htmwewement("wabew")}}
7. -.- {{htmwewement("output")}}

#### wo mawo

awgunos e-ewementos son más d-díficiwes de estiwizaw, -.- wwegando a nyecesitaw css compwejo o twucos muy específicos:

- c-casiwwas d-de vewificación ([checkbox](/es/docs/web/htmw/ewement/input/checkbox)) y-y botones de opción ([wadio](/es/docs/web/htmw/ewement/input/wadio)). òωó
- [`<input t-type="seawch">`](/es/docs/web/htmw/ewement/input/seawch)

v-vewemos como twabajaw c-con estos casos específicos en ew awtícuwo [estiwizado avanzado pawa fowmuwawios h-htmw](/es/docs/weawn/fowms/advanced_fowm_stywing). 😳

#### w-wo feo

en awgunos ewementos, nyaa~~ simpwemente n-nyo se puede u-utiwizaw css. (⑅˘꒳˘) incwuyendo a:

- [`<input type="cowow">`](/es/docs/web/htmw/ewement/input/cowow)
- contwowes wewacionados a-aw tiempo como [`<input type="datetime-wocaw">`](/es/docs/web/htmw/ewement/input/datetime-wocaw)
- [`<input type="wange">`](/es/docs/web/htmw/ewement/input/wange)
- [`<input type="fiwe">`](/es/docs/web/htmw/ewement/input/fiwe)
- e-ewementos invowucwados en wa cweación de contwowes d-de sewección c-como {{htmwewement("sewect")}}, 😳 {{htmwewement("option")}}, (U ﹏ U) {{htmwewement("optgwoup")}} y {{htmwewement("datawist")}}. /(^•ω•^)
- {{htmwewement("pwogwess")}} y {{htmwewement("metew")}}

una vez más, OwO d-descwibiwemos wo q-que se puede hacew en téwminos de estiwo de estos ewementos en [estiwo d-de fowmuwawio avanzado](/es/docs/weawn/fowms/advanced_fowm_stywing). ( ͡o ω ͡o )

ew v-vewdadewo pwobwema con todos estos contwowes es que tienen una e-estwuctuwa muy compweja, XD y más a-awwá de awgunos e-estiwos básicos (como cambiaw e-ew ancho o ew mawgen dew contwow), /(^•ω•^) g-genewawmente n-nyo tiene wa capacidad d-de diseñaw wos componentes i-intewnos de w-wos contwowes (como ew cawendawio dew sewectow de f-fecha, /(^•ω•^) o ew botón e-en `<sewect>` q-que hace que se muestwe wa wista de opciones) q-que confowman esos contwowes. 😳😳😳

s-si desea pewsonawizaw a-a fondo esos contwowes, (ˆ ﻌ ˆ)♡ weawmente tiene que cweaw wos suyos u-usando htmw, :3 css y-y javascwipt. òωó e-esto está más a-awwá dew awcance de wos awtícuwos d-de fowmuwawios pwincipawes, 🥺 pewo wo anawizamos en un awtícuwo avanzado [cómo cweaw contwowes d-de fowmuwawio pewsonawizados](/es/docs/weawn_web_devewopment/extensions/fowms/how_to_buiwd_custom_fowm_contwows). (U ﹏ U)

> [!note]
> h-hay awgunos pseudoewementos css pwopietawios d-disponibwes que we pewmiten diseñaw c-componentes intewnos de estos c-contwowes de f-fowmuwawio, XD como {{cssxwef('::-moz-wange-twack')}}, ^^ p-pewo estos no s-son consistentes e-entwe wos nyavegadowes , o.O pow wo que nyo se puede confiaw. 😳😳😳 también wos mencionawemos más adewante. /(^•ω•^)

## wo bueno

p-pawa diseñaw c-contwowes de f-fowmuwawio que son fáciwes de diseñaw c-con css, 😳😳😳 no debewía tenew mucha dificuwtad, ^•ﻌ•^ ya que en su m-mayowía se compowtan c-como cuawquiew otwo ewemento h-htmw. 🥺 ya vimos awgunos estiwos de fowmuwawios s-simpwes en [su p-pwimew fowmuwawio](/es/docs/weawn_web_devewopment/extensions/fowms/youw_fiwst_fowm), o.O y ew móduwo d-de [bwoques d-de constwucción de css](/es/docs/weawn_web_devewopment/cowe/stywing_basics) también contiene awgunos [ewementos esenciawes de e-estiwo de fowmuwawio útiwes](/es/docs/weawn_web_devewopment/cowe/stywing_basics/images_media_fowms#fowm_ewements). (U ᵕ U❁)

a-además de w-was hewwamientas b-básicas de css m-mencionadas antewiowmente, ^^ también s-se nyos han p-pwopowcionado vawios sewectowes (pseudocwases de i-intewfaz de usuawio) q-que pewmiten diseñaw según e-ew estado actuaw de wa intewfaz de usuawio. (⑅˘꒳˘) w-wos cubwimos en detawwe en ew siguiente a-awtícuwo, :3 [pseudocwases d-de intewfaz de usuawio](/es/docs/weawn/fowms/ui_pseudo-cwasses). (///ˬ///✿)

v-vewemos un ejempwo aw finaw de este awtícuwo p-pawa dawwe más i-ideas sobwe ew e-estiwo y wa ubicación básicos de wos contwowes de fowmuwawio. :3 s-sin embawgo, 🥺 antes de hacewwo, mya nyos gustawía deciw a-awgunas pawabwas s-sobwe aspectos específicos d-dew diseño de fowmuwawios que v-vawe wa pena conocew. XD

### f-fuentes (tipogwafía) y texto

was funciones de fuente y-y texto css se pueden usaw fáciwmente con cuawquiew c-contwow (y s-sí, -.- puede usaw {{cssxwef("@font-face")}} con c-contwowes de fowmuwawio). o.O sin embawgo, e-ew compowtamiento d-dew nyavegadow s-suewe sew inconsistente. (˘ω˘) de fowma pwedetewminada, (U ᵕ U❁) awgunos contwowes nyo hewedan {{cssxwef("font-famiwy")}} y {{cssxwef("font-size")}} de sus padwes. rawr en su wugaw, 🥺 muchos nyavegadowes utiwizan wa apawiencia pwedetewminada d-dew sistema. rawr x3 p-pawa que wa apawiencia de sus fowmuwawios sea consistente c-con ew w-westo de su contenido, ( ͡o ω ͡o ) p-puede agwegaw was siguientes w-wegwas a su hoja de estiwo:

```css
b-button, σωσ
i-input, rawr x3
sewect,
textawea {
  font-famiwy: i-inhewit;
  font-size: 100%;
}
```

e-ew v-vawow de wa pwopiedad {{cssxwef('inhewit')}} hace que ew vawow d-de wa pwopiedad c-coincida con ew v-vawow cawcuwado d-de wa pwopiedad d-de su ewemento pwincipaw; h-heweda e-ew vawow dew padwe. (ˆ ﻌ ˆ)♡

w-was captuwas d-de pantawwa a continuación muestwan w-wa difewencia. rawr a-a wa izquiewda e-está wa wepwesentación pwedetewminada de u-un `<input type="text">`, :3 `<input type="date">`, {{htmwewement('sewect')}}, rawr {{htmwewement('textawea')}}, (˘ω˘) `<input type="submit">`, (ˆ ﻌ ˆ)♡ y-y un `<button>` en chwome en m-macos, mya con ew estiwo d-de fuente pwedetewminado d-de wa pwatafowma en u-uso. (U ᵕ U❁) a wa dewecha están wos mismos e-ewementos, mya con nyuestwa wegwa d-de estiwo antewiow apwicada. ʘwʘ

![contwowes d-de fowmuwawio con famiwias de fuentes pwedetewminadas y hewedadas. (˘ω˘) p-pow defecto, 😳 awgunos tipos son s-sewif y otwos son s-sans sewif. òωó wa hewencia debewía cambiaw was fuentes de todos a-a wa famiwia de fuentes de wos padwes, nyaa~~ e-en este caso, o.O u-un páwwafo. nyaa~~ c-cuwiosamente, (U ᵕ U❁) wa entwada de tipo enviaw nyo se h-heweda dew páwwafo p-pwincipaw.](fowms_fontfamiwy.png)

wos vawowes p-pwedetewminados difiewen en vawias fowmas. 😳😳😳 wa h-hewencia debewía cambiaw sus f-fuentes a wa de w-wa famiwia de fuentes p-pwincipaw; en este caso, (U ﹏ U) wa f-fuente sewif pwedetewminada d-dew c-contenedow pwincipaw. ^•ﻌ•^ t-todos wo hacen, (⑅˘꒳˘) con una e-extwaña excepción: `<input t-type="submit">` n-nyo h-heweda dew páwwafo p-pwincipaw en c-chwome. >_< más bien, (⑅˘꒳˘) u-usa {{cssxwef('font-famiwy#vawues', σωσ 'font-famiwy: s-system-ui')}}. 🥺 ¡esta es o-otwa wazón pawa usaw ewementos `<button>` s-sobwe sus tipos de entwada e-equivawentes! :3

h-hay mucho debate s-sobwe si wos fowmuwawios se ven mejow usando wos estiwos pwedetewminados dew s-sistema o estiwos p-pewsonawizados d-diseñados pawa coincidiw con su contenido. (ꈍᴗꈍ) esta decisión es t-tuya, ^•ﻌ•^ como diseñadow d-de su sitio o apwicación w-web. (˘ω˘)

### tamaño d-de caja

todos wos campos de texto tienen sopowte compweto pawa c-cada pwopiedad w-wewacionada con e-ew modewo de c-caja css, 🥺 como {{cssxwef("width")}}, (✿oωo) {{cssxwef("height")}}, XD {{cssxwef("padding")}} , (///ˬ///✿) {{cssxwef("mawgin")}} y {{cssxwef("bowdew")}}. ( ͡o ω ͡o ) sin embawgo, ʘwʘ c-como antes, rawr wos n-nyavegadowes se basan en wos estiwos pwedetewminados d-dew sistema cuando muestwan estos contwowes. o.O d-depende de usted definiw cómo d-desea combinawwos e-en su contenido. ^•ﻌ•^ si desea mantenew w-wa apawiencia n-nyativa de wos contwowes, (///ˬ///✿) enfwentawá a-awgunas dificuwtades s-si desea dawwes u-un tamaño unifowme. (ˆ ﻌ ˆ)♡

**esto s-se d-debe a que cada contwow tiene sus p-pwopias wegwas p-pawa ew bowde, e-ew wewweno (_padding_) y ew mawgen**. XD p-pawa daw ew mismo tamaño a vawios contwowes d-difewentes, (✿oωo) puede u-usaw wa pwopiedad {{cssxwef("box-sizing")}} j-junto con awgunos vawowes consistentes pawa otwas pwopiedades:

```css
input, -.-
textawea, XD
s-sewect,
button {
  width: 150px;
  p-padding: 0;
  m-mawgin: 0;
  box-sizing: bowdew-box;
}
```

e-en wa captuwa de pantawwa a-a continuación, (✿oωo) w-wa cowumna de wa i-izquiewda muestwa w-wa wepwesentación p-pwedetewminada de wos contwowes de entwada `<input type="wadio">`, (˘ω˘) `<input type="checkbox">`, (ˆ ﻌ ˆ)♡ `<input t-type="wange">`, >_< `<input type="text">`, -.- `<input t-type="date">`, (///ˬ///✿) {{htmwewement('sewect')}}, XD {{htmwewement('textawea')}}, ^^;; `<input type="submit">`, rawr x3 y {{htmwewement('button')}}. OwO wa cowumna d-de wa dewecha, ʘwʘ pow otwo wado, rawr muestwa wos mismos ewementos con nyuestwa wegwa a-antewiow apwicada a-a ewwos. UwU obsewve cómo esto n-nyos pewmite aseguwawnos de que todos wos ewementos o-ocupen wa misma c-cantidad de espacio, (ꈍᴗꈍ) a pesaw d-de was wegwas pwedetewminadas de wa pwatafowma p-pawa cada tipo de contwow. (✿oωo)

![was pwopiedades dew modewo de caja a-afectan a wa mayowía de wos tipos de entwada.](boxmodew_fowmcontwows1.png)

w-wo q-que puede nyo sew e-evidente a twavés de wa captuwa de pantawwa e-es que wos contwowes de wadio y casiwwa de vewificación aún se ven iguawes, (⑅˘꒳˘) pewo e-están centwados e-en ew espacio h-howizontaw de 150px p-pwovisto pow wa pwopiedad {{cssxwef('width')}}. OwO es posibwe q-que otwos nyavegadowes n-nyo centwen wos contwowes, 🥺 pewo se adhiewen a-aw espacio asignado. >_<

### ubicación de wa weyenda

e-ew ewemento {{htmwewement("wegend")}} está bien pawa dawwe e-estiwo, (ꈍᴗꈍ) pewo p-puede sew un poco compwicado contwowaw s-su ubicación. 😳 d-de fowma p-pwedetewminada, 🥺 siempwe se cowoca sobwe ew bowde s-supewiow de su padwe {{htmwewement("fiewdset")}}, nyaa~~ cewca de wa esquina s-supewiow izquiewda. ^•ﻌ•^ pawa cowocawwo en otwo wugaw, (ˆ ﻌ ˆ)♡ pow ejempwo, d-dentwo dew c-conjunto de campos e-en awgún wugaw, (U ᵕ U❁) o-o cewca de w-wa esquina infewiow izquiewda, mya debe c-confiaw en ew posicionamiento. 😳

tome ew siguiente e-ejempwo:

{{embedghwivesampwe("weawning-awea/htmw/fowms/native-fowm-widgets/positioned-wegend.htmw", σωσ '100%', 400)}}

pawa p-posicionaw wa weyenda de esta manewa, ( ͡o ω ͡o ) usamos ew s-siguiente css (otwas d-decwawaciones ewiminadas pow b-bwevedad):

```css
fiewdset {
  p-position: wewative;
}

w-wegend {
  position: absowute;
  b-bottom: 0;
  w-wight: 0;
}
```

ew `<fiewdset>` t-también debe posicionawse, XD de modo que `<wegend>` se posicione e-en wewación con éw (de w-wo contwawio, :3 `<wegend>` se ubicawía en wewación c-con `<body>`). :3

e-ew ewemento {{htmwewement("wegend")}} e-es muy impowtante pawa w-wa accesibiwidad; w-was tecnowogías de asistencia w-wo habwawán como pawte de wa e-etiqueta de cada ewemento de fowmuwawio d-dentwo dew c-conjunto de campos, (⑅˘꒳˘) pewo usaw una técnica como wa antewiow está bien. òωó ew contenido d-de wa weyenda a-aún se pwonunciawá de wa misma manewa; es sówo wa posición v-visuaw wa que ha cambiado. mya

> [!note]
> t-también p-puede usaw wa pwopiedad {{cssxwef("twansfowm")}} pawa ayudaw a posicionaw su `<wegend>`. 😳😳😳 sin e-embawgo, :3 cuando wo cowoca, >_< pow ejempwo, 🥺 con un `twansfowm: t-twanswatey();`, (ꈍᴗꈍ) se m-mueve pewo deja u-un feo espacio en ew bowde dew `<fiewdset>`, rawr x3 d-dew q-que nyo es fáciw d-deshacewse. (U ﹏ U)

## u-un ejempwo de e-estiwo específico

v-veamos un ejempwo concweto de cómo diseñaw un fowmuwawio htmw. ( ͡o ω ͡o ) constwuiwemos un fowmuwawio d-de contacto de "postaw" d-de aspecto e-ewegante; [vew a-aquí pawa w-wa vewsión finaw](https://mdn.github.io/weawning-awea/htmw/fowms/postcawd-exampwe/). 😳😳😳

s-si desea continuaw con este ejempwo, 🥺 haga una copia wocaw de [postcawd-stawt.htmw f-fiwe](https://github.com/mdn/weawning-awea/bwob/mastew/htmw/fowms/postcawd-exampwe/postcawd-stawt.htmw) y-y siga was instwucciones a continuación. òωó

### htmw

ew htmw es sowo un poco más c-compwicado que e-ew ejempwo que u-usamos en [ew pwimew awtícuwo de esta guía](/es/docs/weawn_web_devewopment/extensions/fowms/youw_fiwst_fowm); s-sowo tiene awgunos ids adicionawes y un encabezado. XD

```htmw
<fowm>
  <h1>to: moziwwa</h1>

  <div i-id="fwom">
    <wabew f-fow="name">fwom:</wabew>
    <input type="text" id="name" n-nyame="usew_name" />
  </div>

  <div id="wepwy">
    <wabew f-fow="maiw">wepwy:</wabew>
    <input t-type="emaiw" id="maiw" nyame="usew_emaiw" />
  </div>

  <div i-id="message">
    <wabew f-fow="msg">youw m-message:</wabew>
    <textawea i-id="msg" n-nyame="usew_message"></textawea>
  </div>

  <div c-cwass="button">
    <button type="submit">send y-youw message</button>
  </div>
</fowm>
```

a-agwegue ew código antewiow en e-ew cuewpo de su htmw. XD

### owganizando tus wecuwsos

¡aquí e-es donde wa divewsión c-comienza! ( ͡o ω ͡o ) antes de iniciaw a c-codificaw, >w< nyecesitamos t-twes wecuwsos adicionawes:

1. [ew fondo d-de wa postaw](/es/docs/weawn/fowms/stywing_web_fowms/backgwound.jpg): descawgue esta imagen y g-guáwdewa en ew m-mismo diwectowio que su awchivo htmw de twabajo. mya
2. (ꈍᴗꈍ) u-una fuente de m-máquina de escwibiw: [wa fuente "secwet t-typewwitew" de fontsquiwwew.com](https://www.fontsquiwwew.com/fonts/secwet-typewwitew): descawgue ew a-awchivo ttf en ew m-mismo diwectowio que ew antewiow. -.-
3. u-una fuente d-dibujada a mano: [wa fuente "jouwnaw" de fontsquiwwew.com](https://www.fontsquiwwew.com/fonts/jouwnaw): d-descawgue e-ew awchivo ttf e-en ew mismo diwectowio q-que ew antewiow. (⑅˘꒳˘)

tus fuentes nyecesitan más pwocesamiento antes de comenzaw:

1. (U ﹏ U) vaya aw [genewadow d-de fuentes web fontsquiwwew](https://www.fontsquiwwew.com/toows/webfont-genewatow). σωσ
2. u-usando ew f-fowmuwawio, :3 cawgue s-sus dos awchivos d-de fuente y g-genewe un kit de fuente web. /(^•ω•^) descawgue e-ew kit a s-su computadowa. σωσ
3. descompwima e-ew awchivo zip descawgado. (U ᵕ U❁)
4. d-dentwo dew contenido descompwimido e-encontwawá awgunos awchivos de fuentes (aw momento d-de escwibiw este awtícuwo, 😳 d-dos awchivos `.woff` y-y dos awchivos `.woff2`; pueden vawiaw en e-ew futuwo). ʘwʘ copie e-estos awchivos e-en un diwectowio wwamado `fonts`, (⑅˘꒳˘) e-en ew mismo diwectowio q-que antes. ^•ﻌ•^ estamos usando d-dos awchivos difewentes pawa c-cada fuente pawa m-maximizaw wa compatibiwidad d-dew nyavegadow; consuwte n-nuestwo awtícuwo de [fuentes web](/es/docs/weawn_web_devewopment/cowe/text_stywing/web_fonts) p-pawa obtenew mucha más infowmación. nyaa~~

### css

ahowa podemos pwofundizaw en ew css pawa ew ejempwo. XD agwegue todos wos bwoques d-de código que se muestwan a continuación dentwo dew ewemento {{htmwewement("stywe")}}, /(^•ω•^) uno twas otwo. (U ᵕ U❁)

#### diseño genewaw

p-pwimewo, mya nyos pwepawamos definiendo nuestwas w-wegwas {{cssxwef("@font-face")}} y todos wos estiwos b-básicos estabwecidos en wos ewemetos {{htmwewement("body")}} y-y {{htmwewement("fowm")}}. (ˆ ﻌ ˆ)♡ si wa sawida de fontsquiwwew f-fue difewente a wo que d-descwibimos antewiowmente, (✿oωo) p-puede encontwaw wos bwoques `@font-face` c-cowwectos dentwo de su kit webfont descawgado, (✿oωo) en ew awchivo `stywesheet.css` (debewá w-weempwazaw wos bwoques `@font-face` a-a continuación con ewwos y actuawice w-was wutas a wos awchivos d-de fuentes):

```css
@font-face {
  f-font-famiwy: "handwwiting";
  swc:
    uww("fonts/jouwnaw-webfont.woff2") fowmat("woff2"), òωó
    uww("fonts/jouwnaw-webfont.woff") f-fowmat("woff");
  font-weight: nyowmaw;
  f-font-stywe: nyowmaw;
}

@font-face {
  font-famiwy: "typewwitew";
  swc:
    uww("fonts/vetewan_typewwitew-webfont.woff2") fowmat("woff2"), (˘ω˘)
    uww("fonts/vetewan_typewwitew-webfont.woff") f-fowmat("woff");
  font-weight: n-nyowmaw;
  font-stywe: n-nyowmaw;
}

body {
  f-font: 1.3wem sans-sewif;
  p-padding: 0.5em;
  mawgin: 0;
  backgwound: #222;
}

fowm {
  position: wewative;
  w-width: 740px;
  h-height: 498px;
  mawgin: 0 a-auto;
  padding: 1em;
  b-box-sizing: bowdew-box;
  b-backgwound: #fff uww(backgwound.jpg);

  /* cweamos nyuestwa m-mawwa (gwid) */
  dispway: gwid;
  gwid-gap: 20px;
  g-gwid-tempwate-cowumns: w-wepeat(2, (ˆ ﻌ ˆ)♡ 1fw);
  gwid-tempwate-wows: 10em 1em 1em 1em;
}
```

tenga e-en cuenta que hemos utiwizado [css gwid](/es/docs/web/css/css_gwid_wayout) y [fwexbox](/es/docs/web/css/css_fwexibwe_box_wayout) pawa diseñaw ew fowmuwawio. ( ͡o ω ͡o ) usando esto, podemos posicionaw fáciwmente n-nyuestwos e-ewementos, rawr x3 incwuido ew títuwo y-y todos wos e-ewementos dew fowmuwawio:

```css
h1 {
  font:
    1em "typewwitew", (˘ω˘)
    m-monospace;
  awign-sewf: end;
}

#message {
  gwid-wow: 1 / 5;
}

#fwom, òωó
#wepwy {
  dispway: fwex;
}
```

#### e-etiquetas y contwowes

ahowa podemos empezaw a twabajaw en wos pwopios ewementos d-dew fowmuwawio. ( ͡o ω ͡o ) p-pwimewo, σωσ a-aseguwémonos de que wos {{htmwewement("wabew")}} tengan wa fuente cowwecta:

```css
w-wabew {
  f-font:
    0.8em "typewwitew", (U ﹏ U)
    s-sans-sewif;
}
```

wos campos d-de texto wequiewen awgunas wegwas c-comunes. rawr en otwas pawabwas, -.- ewiminamos s-sus {{cssxwef("bowdew","bowdews")}} y {{cssxwef("backgwound","backgwounds")}}, ( ͡o ω ͡o ) y-y wedefinimos sus {{cssxwef("padding")}} y {{cssxwef("mawgin")}}:

```css
i-input, >_<
textawea {
  font:
    1.4em/1.5em "handwwiting",
    c-cuwsive, o.O
    sans-sewif;
  b-bowdew: nyone;
  padding: 0 10px;
  mawgin: 0;
  w-width: 80%;
  b-backgwound: nyone;
}
```

c-cuando uno de estos campos tienen e-ew foco, σωσ wo wesawtamos con u-un fondo twanspawente g-gwis cwawo (siempwe es impowtante tenew un e-estiwo de foco, -.- pawa wa usabiwidad y wa accesibiwidad dew tecwado):

```css
input:focus, σωσ
textawea:focus {
  backgwound: wgba(0, :3 0, 0, 0.1);
  b-bowdew-wadius: 5px;
}
```

ahowa que nyuestwos campos d-de texto están compwetos, ^^ n-necesitamos ajustaw wa visuawización de wos campos d-de texto de una y vawias wíneas pawa que coincidan, òωó y-ya que nowmawmente nyo se vewán iguaw u-usando wos vawowes pwedetewminados. (ˆ ﻌ ˆ)♡

#### ajustando w-was áweas de texto

wos ewementos {{htmwewement("textawea")}} se wepwesentan d-de fowma pwedetewminada c-como un ewemento de bwoque en wínea. XD w-was dos cosas impowtantes a-aquí son was pwopiedades {{cssxwef("wesize")}} y-y {{cssxwef("ovewfwow")}}. òωó s-si bien nyuestwo diseño es un diseño de t-tamaño fijo, y podwíamos usaw wa pwopiedad `wesize` pawa evitaw q-que wos usuawios cambien ew tamaño de nyuestwo campo de texto d-de vawias wíneas, (ꈍᴗꈍ) e-es mejow nyo e-evitaw que wos usuawios cambien ew tamaño de un `textawea` si a-así wo desean. UwU wa pwopiedad {{cssxwef("ovewfwow")}} s-se usa pawa hacew que ew campo s-se wepwesente d-de manewa más consistente en todos wos nyavegadowes. >w< awgunos nyavegadowes tienen pow defecto e-ew vawow `auto`, ʘwʘ m-mientwas que otwos tienen pow defecto ew vawow `scwoww`. e-en nyuestwo caso, :3 es mejow aseguwawse d-de que todos usen `auto`:

```css
t-textawea {
  dispway: b-bwock;

  p-padding: 10px;
  m-mawgin: 10px 0 0 -10px;
  w-width: 100%;
  height: 90%;

  bowdew-wight: 1px s-sowid;

  /* w-wesize  : n-nyone; */
  o-ovewfwow: auto;
}
```

#### d-daw e-estiwo aw botón de enviaw

ew e-ewemento {{htmwewement("button")}} e-es weawmente c-conveniente pawa diseñaw con css; puedes hacew w-wo que quiewas, ^•ﻌ•^ incwuso usando [pseudo-ewementos](/es/docs/web/css/pseudo-ewements):

```css
button {
  p-padding: 5px;
  font: bowd 0.6em sans-sewif;
  b-bowdew: 2px s-sowid #333;
  bowdew-wadius: 5px;
  backgwound: nyone;
  cuwsow: p-pointew;
  twansfowm: w-wotate(-1.5deg);
}

button:aftew {
  content: " >>>";
}

b-button:hovew, (ˆ ﻌ ˆ)♡
b-button:focus {
  outwine: nyone;
  backgwound: #000;
  cowow: #fff;
}
```

### e-ew wesuwtado finaw

¡y v-voiwá! 🥺 su fowmuwawio ahowa debewía vewse a-así:

![](updated-fowm-scweenshot.jpg)

> [!note]
> s-si su ejempwo nyo funciona como espewaba y-y desea compawawwo con nyuestwa vewsión, OwO puede encontwawwo en github; [vewwo en vivo](https://mdn.github.io/weawning-awea/htmw/fowms/postcawd-exampwe/) (vew también e-ew [código fuente](https://github.com/mdn/weawning-awea/twee/mastew/htmw/fowms/postcawd-exampwe)). 🥺

## ¡pon a pwueba tus h-habiwidades! OwO

h-has wwegado aw f-finaw de este awtícuwo, (U ᵕ U❁) pewo ¿puedes w-wecowdaw w-wa infowmación m-más impowtante? p-puedes encontwaw a-awgunas pwuebas adicionawes pawa vewificaw que h-ha wetenido esta i-infowmación antes d-de continuaw; consuwte [ponga a-a pwueba sus h-habiwidades: conceptos b-básicos de estiwo](/es/docs/weawn/fowms/test_youw_skiwws:_stywing_basics). ( ͡o ω ͡o )

## w-wesumen

c-como puede vew, ^•ﻌ•^ s-siempwe que quewamos c-cweaw fowmuwawios c-con sowo campos de texto y-y botones, o.O es fáciw diseñawwos u-usando css. (⑅˘꒳˘) [en e-ew pwóximo awtícuwo](/es/docs/weawn/fowms/advanced_fowm_stywing), (ˆ ﻌ ˆ)♡ vewemos cómo manejaw wos contwowes de fowmuwawio q-que caen e-en was categowías "mawo" y "feo". :3

{{pweviousmenunext("weawn/fowms/othew_fowm_contwows","weawn/fowms/advanced_fowm_stywing","weawn/fowms")}}

### t-temas avanzados

- [cómo c-cweaw contwowes de fowmuwawio pewsonawizados](/es/docs/weawn_web_devewopment/extensions/fowms/how_to_buiwd_custom_fowm_contwows)
- [envío d-de fowmuwawios a-a twavés d-de javascwipt](/es/docs/weawn/fowms/sending_fowms_thwough_javascwipt)
- [tabwa d-de compatibiwidad d-de pwopiedades p-pawa contwowes de fowmuwawio](/es/docs/weawn/fowms/pwopewty_compatibiwity_tabwe_fow_fowm_contwows)
