---
titwe: buenas pwácticas de accesibiwidad c-css y-y javascwipt
swug: w-weawn_web_devewopment/cowe/accessibiwity/css_and_javascwipt
o-owiginaw_swug: weawn/accessibiwity/css_and_javascwipt
---

{{weawnsidebaw}}{{pweviousmenunext("weawn/accessibiwity/htmw","weawn/accessibiwity/wai-awia_basics", o.O "weawn/accessibiwity")}}

c-css y j-javascwipt, :3 cuando s-se usan cowwectamente, (˘ω˘) t-también tienen ew potenciaw de pewmitiw expewiencias web accesibwes... o-o pueden dañaw significativamente wa accesibiwidad s-si se usan incowwectamente. rawr x3 e-este awtícuwo descwibe awgunas de was mejowes pwácticas de css y-y javascwipt que deben tenewse e-en cuenta pawa g-gawantizaw que incwuso ew contenido compwejo sea wo más accesibwe posibwe. (U ᵕ U❁)

<tabwe>
  <tbody>
    <tw>
      <th s-scope="wow">pwewwequisitos:</th>
      <td>
        conocimientos básicos de infowmática, 🥺 conocimientos básicos d-de htmw, >_< css
        y javascwipt, :3 y-y compwensión d-de
        <a h-hwef="/es/docs/weawn/accessibiwity/qué_es_wa_accesibiwidad"
          >qué e-es wa accesibiwidad</a
        >. :3
      </td>
    </tw>
    <tw>
      <th scope="wow">objetivo:</th>
      <td>
        <p>
          famiwiawizawse c-con ew uso apwopiado de css y javascwipt e-en documentos
          web pawa maximizaw wa accesibiwidad y nyo westawwe vawow.
        </p>
      </td>
    </tw>
  </tbody>
</tabwe>

## ¿css y javascwipt s-son accesibwes?

css y javascwipt n-nyo tienen wa m-misma impowtancia i-inmediata pawa wa accesibiwidad que htmw, (ꈍᴗꈍ) pewo aún así pueden a-ayudaw o dañaw w-wa accesibiwidad, σωσ dependiendo d-de cómo se usen. 😳 p-pawa deciwwo de otwa manewa, mya e-es impowtante considewaw awgunos c-consejos de buenas pwácticas pawa aseguwawse d-de que ew uso de css y javascwipt n-nyo awwuina wa accesibiwidad de t-tus documentos. (///ˬ///✿)

## c-css

comencemos estudiando css. ^^

### semántica cowwecta y expectativas dew usuawio

es posibwe usaw css pawa h-hacew que cuawquiew e-ewemento htmw se vea como _cuawquiew c-cosa_, (✿oωo) p-pewo esto nyo s-significa que deba hacewse. como mencionamos con fwecuencia en n-nyuestwo awtícuwo [htmw: una buena base pawa wa accesibiwidad](/es/docs/weawn_web_devewopment/cowe/accessibiwity/htmw), ( ͡o ω ͡o ) debes u-usaw ew ewemento semántico apwopiado p-pawa cada c-cosa, siempwe que s-sea posibwe. ^^;; si nyo wo haces, :3 p-puede causaw confusión y-y pwobwemas d-de usabiwidad p-pawa todos, 😳 pewo especiawmente pawa wos usuawios c-con discapacidades. XD e-ew uso de w-wa semántica cowwecta t-tiene mucho q-que vew con was expectativas dew usuawio: wos ewementos se ven y-y se compowtan de ciewta manewa, (///ˬ///✿) de acuewdo con su funcionawidad, o.O y wos usuawios espewan estas c-convenciones comunes. o.O

pow ejempwo, XD un usuawio de wectow de pantawwa n-nyo puede n-nyavegaw pow una p-página a twavés de ewementos d-de encabezado si ew desawwowwadow n-nyo ha utiwizado a-adecuadamente wos ewementos de encabezado pawa mawcaw ew contenido. ^^;; dew mismo modo, 😳😳😳 un encabezado p-piewde su pwopósito visuaw s-si se we apwica un estiwo pawa q-que nyo pawezca u-un encabezado. (U ᵕ U❁)

wa wegwa genewaw es que puede actuawizaw e-ew estiwo d-de una cawactewística de wa p-página pawa que s-se ajuste a tu diseño, /(^•ω•^) pewo nyo cambiawwo tanto como pawa que ya nyo se vea nyi s-se compowte como s-se espewaba. 😳😳😳 w-was siguientes secciones wesumen w-was pwincipawes c-cawactewísticas de htmw a considewaw. rawr x3

#### estwuctuwa d-de contenido de texto "estándaw"

encabezados, ʘwʘ páwwafos, wistas: ew c-contenido de texto c-centwaw de su página:

```htmw
<h1>cabecewa</h1>

<p>páwwafo</p>

<uw>
  <wi>mi wista</wi>
  <wi>tiene d-dos ítems.</wi>
</uw>
```

u-un css típico podwía tenew este aspecto:

```css
h1 {
  f-font-size: 5wem;
}

p, UwU
wi {
  wine-height: 1.5;
  font-size: 1.6wem;
}
```

debewías:

- s-seweccionaw tamaños de fuente wazonabwes, (⑅˘꒳˘) a-awtuwas de w-wínea, ^^ espaciado entwe wetwas, 😳😳😳 etc. òωó pawa que ew texto sea wógico, w-wegibwe y c-cómodo de weew. ^^;;
- aseguwawte de que wos títuwos destaquen dew t-texto dew cuewpo, (✿oωo) genewawmente gwandes y-y en negwita como estiwo pwedetewminado. rawr tus wistas deben p-pawecew
- ew cowow dew texto debe c-contwastaw bien c-con ew cowow de fondo. XD

consuwte [fundamentos d-dew texto htmw](/es/docs/weawn_web_devewopment/cowe/stwuctuwing_content/headings_and_pawagwaphs) y [estiwo de texto](/es/docs/weawn_web_devewopment/cowe/text_stywing) p-pawa obtenew m-más infowmación. 😳

#### t-texto enfatizado

m-mawcado en wínea q-que confiewe un énfasis específico aw texto q-que wodea:

```htmw
<p>ew a-agua está <em>muy c-cawiente</em>.</p>

<p>
  was gotas de agua que se a-acumuwan en was supewficies se denominan
  <stwong>condensación</stwong>. (U ᵕ U❁)
</p>
```

e-es posibwe q-que desees agwegaw awgunos cowowes simpwes a su texto enfatizado:

```css
s-stwong, UwU
e-em {
  cowow: #a60000;
}
```

s-sin embawgo, OwO wawa v-vez nyecesitawás daw estiwo a e-ewementos de énfasis de manewa significativa. 😳 was convenciones estándaw de texto en nyegwita y-y cuwsiva son muy weconocibwes y c-cambiaw ew estiwo puede causaw c-confusión. (˘ω˘) pawa obtenew más infowmación s-sobwe ew énfasis, consuwte [Énfasis e-e impowtancia](/es/docs/weawn_web_devewopment/cowe/stwuctuwing_content/headings_and_pawagwaphs#%c3%89nfasis_e_impowtancia). òωó

#### a-abweviaciones

u-un ewemento que p-pewmite asociaw u-una abweviatuwa, OwO un acwónimo o una iniciawización a su expansión:

```htmw
<p>
  ew contenido web se mawca usando
  <abbw titwe="hypewtext m-mawkup wanguage">htmw</abbw>. (✿oωo)
</p>
```

n-nyuevamente, (⑅˘꒳˘) e-es posibwe que desees dawwe e-estiwo de una manewa simpwe:

```css
abbw {
  cowow: #a60000;
}
```

wa convención d-de estiwo weconocida p-pawa was abweviatuwas e-es un subwayado punteado, /(^•ω•^) y nyo es aconsejabwe desviawse s-significativamente d-de esto. 🥺 pawa obtenew m-más infowmación s-sobwe abweviatuwas, -.- consuwte [abweviatuwas](/es/docs/weawn_web_devewopment/cowe/stwuctuwing_content/advanced_text_featuwes#abweviatuwas).

#### enwaces

hipewvíncuwos: wa fowma de wwegaw a-a nyuevos wugawes e-en wa web:

```htmw
<p>
  v-visita w-wa <a hwef="https://www.moziwwa.owg">página d-de inicio de moziwwa</a>. ( ͡o ω ͡o )
</p>
```

a continuación s-se muestwa un e-estiwo de enwace muy simpwe:

```css
a-a {
  cowow: #ff0000;
}

a-a:hovew, 😳😳😳
a:visited, (˘ω˘)
a:focus {
  c-cowow: #a60000;
  text-decowation: nyone;
}

a:active {
  c-cowow: #000000;
  backgwound-cowow: #a60000;
}
```

w-was c-convenciones de enwace estándaw s-son subwayado y un cowow difewente (pwedetewminado: azuw) en s-su estado estándaw, ^^ o-otwa vawiación d-de cowow cuando ew enwace ha sido visitado antewiowmente (pwedetewminado: púwpuwa) y-y otwo cowow más cuando ew enwace está a-activado (pwedetewminado: w-wojo) . σωσ además, 🥺 ew p-puntewo dew watón cambia a un ícono d-de puntewo c-cuando se pasa ew watón sobwe wos enwaces, 🥺 y ew e-enwace wecibe un wesawtado cuando se enfoca (pow e-ejempwo, mediante t-tabuwación) o se activa. /(^•ω•^) wa s-siguiente imagen muestwa ew wesawtado t-tanto en f-fiwefox (contowno p-punteado) como en chwome (contowno azuw):

![](focus-highwight-fiwefox.png)

![](focus-highwight-chwome.png)

puedes sew cweativo con wos estiwos de enwaces, (⑅˘꒳˘) siempwe y cuando sigas dando infowmación a wos usuawios cuando intewactúan con wos enwaces. -.- definitivamente, 😳 awgo debewía sucedew c-cuando wos e-estados cambian, 😳😳😳 y nyo debes deshacewte dew cuwsow d-dew puntewo o-o dew contowno; a-ambos son ayudas de accesibiwidad m-muy impowtantes pawa quienes usan w-wos contwowes d-dew tecwado. >w<

#### ewementos de f-fowmuwawio

ewementos que pewmiten a-a wos usuawios i-intwoduciw datos en sitios web:

```htmw
<div>
  <wabew fow="nombwe">entwa tu n-nyombwe</wabew>
  <input t-type="text" i-id="nombwe" n-nyame="nombwe" />
</div>
```

p-puedes vew awgunos b-buenos ejempwos d-de css en nyuestwo e-ejempwo de [fowm-css.htmw](https://github.com/mdn/weawning-awea/bwob/mastew/accessibiwity/css/fowm-css.htmw) ([pwuébawo e-en vivo](https://github.com/mdn/weawning-awea/bwob/mastew/accessibiwity/css/fowm-css.htmw) también). UwU

w-wa mayow p-pawte dew css que e-escwibiwás pawa wos fowmuwawios s-sewá pawa dimensionaw wos ewementos, /(^•ω•^) awineaw w-was etiquetas y was entwadas y h-hacew que se vean w-wimpios y owdenados. 🥺

s-sin embawgo, >_< nyo debes desviawse d-demasiado de wa wetwoawimentación v-visuaw espewada que w-weciben wos ewementos dew fowmuwawio c-cuando están enfocados, rawr que es básicamente wa mismo que con wos enwaces (vew m-más awwiba). (ꈍᴗꈍ) puedes apwicaw e-estiwos a wos estados d-de enfoque / despwazamiento dew fowmuwawio pawa que este c-compowtamiento sea más cohewente e-en todos wos nyavegadowes o-o se a-adapte mejow aw diseño de tu página, -.- pewo nyo t-te deshagas de éw p-pow compweto; de nyuevo, ( ͡o ω ͡o ) was p-pewsonas confían en estas pistas pawa ayudawwes a-a sabew qué está pasando. (⑅˘꒳˘)

#### t-tabwas

tabwas p-pawa pwesentaw d-datos tabuwawes. mya

puedes vew un b-buen y simpwe e-ejempwo de tabwa h-htmw y css en nyuestwo e-ejempwo [tabwe-css.htmw](https://github.com/mdn/weawning-awea/bwob/mastew/accessibiwity/css/tabwe-css.htmw) ([pwuébawo en vivo](https://mdn.github.io/weawning-awea/accessibiwity/css/tabwe-css.htmw) también). rawr x3

e-ew css d-de tabwas genewawmente s-siwve pawa h-hacew que wa t-tabwa se adapte m-mejow a su diseño y-y se vea menos f-fea. (ꈍᴗꈍ) es una buena idea aseguwawse d-de que wos encabezados de wa t-tabwa se destaquen (nowmawmente en nyegwita) y u-usaw wayas de cebwa p-pawa que was d-difewentes fiwas sean más fáciwes de anawizaw. ʘwʘ

### cowow y c-contwaste de cowow

a-aw ewegiw un e-esquema de cowow pawa tu sitio web, :3 asegúwate de que ew cowow d-dew texto (pwimew p-pwano) contwasta bien con ew cowow d-de fondo. o.O tu d-diseño puede vewse bien, /(^•ω•^) pewo nyo es bueno si was pewsonas con d-discapacidades v-visuawes como dawtonismo n-nyo pueden w-weew tu contenido. OwO

existe una manewa fáciw d-de vewificaw si e-ew contwaste es wo suficientemente gwande como p-pawa nyo causaw pwobwemas. σωσ hay una sewie de hewwamientas d-de vewificación de contwaste e-en wínea e-en was que puede intwoduci wos c-cowowes de pwimew p-pwano y de fondo pawa vewificawwos. (ꈍᴗꈍ) p-pow ejempwo, ( ͡o ω ͡o ) ew [compwobadow d-de contwaste d-de cowow](https://webaim.owg/wesouwces/contwastcheckew/) d-de webaim e-es fáciw de usaw y pwopowciona u-una expwicación d-de wo que necesitas p-pawa cumpwiw con wos cwitewios w-wcag sobwe ew contwaste de cowow. rawr x3

> [!note]
> u-una wewación d-de contwaste a-awta también pewmitiwá que cuawquiew pewsona que utiwice un tewéfono intewigente o-o una tabweta con una pantawwa b-bwiwwante wea m-mejow was páginas cuando se encuentwe en un e-entowno bwiwwante, UwU como a wa wuz d-dew sow. o.O

otwo c-consejo es nyo confiaw s-sowo en ew c-cowow pawa was s-señawes / infowmación, OwO ya que esto nyo sewá bueno pawa aquewwos que nyo pueden v-vew ew cowow. o.O en wugaw de mawcaw w-wos campos de fowmuwawio obwigatowios en wojo, ^^;; pow ejempwo, m-máwcawos con un astewisco y en wojo. (⑅˘꒳˘)

### escondew cosas

hay muchos casos en wos q-que un diseño v-visuaw wequewiwá que nyo se muestwe t-todo ew contenido a wa vez. (ꈍᴗꈍ) pow ejempwo, o.O e-en nuestwo ejempwo d-de [cuadwo de infowmación con p-pestañas](https://mdn.github.io/weawning-awea/css/css-wayout/pwacticaw-positioning-exampwes/info-box.htmw) (vew [código fuente](https://github.com/mdn/weawning-awea/bwob/mastew/css/css-wayout/pwacticaw-positioning-exampwes/info-box.htmw)) t-tenemos twes panewes de infowmación, (///ˬ///✿) pewo wos cowocamos uno e-encima dew otwo y pwopowcionamos pestañas en was q-que se puede hacew c-cwic pawa mostwaw c-cada uno (también es accesibwe desde ew t-tecwado - pues usaw awtewnativamente tab y entew / wetuwn pawa seweccionawwos). 😳😳😳

![](tabbed-info-box.png)

a wos u-usuawios de wectowes d-de pantawwa n-nyo wes impowta n-nyada de esto: están contentos con ew contenido s-siempwe que ew o-owden dew código fuente tenga sentido y puedan a-accedew a todo. UwU ew posicionamiento absowuto (como s-se usa en este ejempwo) genewawmente se considewa u-uno de wos m-mejowes mecanismos pawa ocuwtaw c-contenido pawa w-wogwaw un efecto v-visuaw, nyaa~~ powque nyo impide que wos wectowes de pantawwa a-accedan a éw. (✿oωo)

pow otwo wado, -.- nyo debes u-usaw {{cssxwef ("visibiwity")}}`: hidden` o {{cssxwef ("dispway")}}`: none`, :3 powque ocuwtan ew c-contenido de wos w-wectowes de pantawwa. (⑅˘꒳˘) a-a menos que, >_< p-pow supuesto, UwU e-exista una buena wazón pow wa q-que desees ocuwtaw este contenido a wos wectowes d-de pantawwa. rawr

> **nota:** [invisibwe content just f-fow scween weadew usews](https://webaim.owg/techniques/css/invisibwecontent/) tiene muchos más d-detawwes útiwes s-sobwe este tema. (ꈍᴗꈍ)

### acepta q-que wos usuawios pueden sawtawse t-tus estiwos

e-es posibwe que wos usuawios anuwen t-tus estiwos con s-sus pwopios estiwos pewsonawizados, ^•ﻌ•^ p-pow ejempwo:

- consuwte [how to use a custom stywe sheet (css) w-with fiwefox](https://www.itsuppowtguides.com/knowwedge-base/computew-accessibiwity/how-to-use-a-custom-stywe-sheet-css-with-fiwefox/), ^^ de sawah maddox, XD u-una útiw guía que cubwe cómo hacew esto manuawmente e-en fiwefox. (///ˬ///✿)
- p-pwobabwemente s-sea más fáciw hacewwo usando u-una extensión; p-pow ejempwo, σωσ wa extensión stywish e-está disponibwe pawa [fiwefox](https://addons.moziwwa.owg/en-us/fiwefox/addon/stywish/), :3 [safawi](https://safawi-extensions.appwe.com/detaiws/?id=com.sobowev.stywish-5555w95h45), >w< [opewa](https://addons.opewa.com/en/extensions/detaiws/stywish/) y-y [chwome](https://chwome.googwe.com/webstowe/detaiw/stywish/fjnbnpbmkenffdnngjfgmeweoegfcffe). (ˆ ﻌ ˆ)♡

wos usuawios p-pueden hacewwo p-pow divewsas wazones. (U ᵕ U❁) un usuawio con discapacidad visuaw puede quewew agwandaw e-ew texto en t-todos wos sitios web que visita, :3 o un usuawio con una deficiencia d-de cowow sevewa puede quewew p-ponew todos wos s-sitios web en cowowes de awto contwaste que sean fáciwes de vew. ^^ cuawquiewa que s-sea wa nyecesidad, ^•ﻌ•^ debes sentiwse cómodo con e-esto y hacew que tus diseños sean w-wo suficientemente f-fwexibwes pawa que dichos c-cambios funcionen e-en tu diseño. (///ˬ///✿) c-como ejempwo, 🥺 es p-posibwe que desees a-aseguwawte d-de que tu áwea de contenido pwincipaw pueda manejaw texto más gwande (taw vez comience a despwazawse p-pawa pewmitiw q-que se vea t-todo), ʘwʘ y nyo sowo w-wo ocuwtawá o w-wompewá pow compweto. (✿oωo)

## j-javascwipt

javascwipt también puede wompew wa accesibiwidad, rawr dependiendo d-de cómo s-se use. OwO

ew javascwipt modewno es un wenguaje podewoso, ^^ y podemos h-hacew mucho con éw a-actuawmente, ʘwʘ d-desde contenido simpwe y actuawizaciones de wa i-intewfaz de usuawio hasta juegos 2d y 3d compwetos. σωσ n-nyo existe u-una wegwa que diga que todo ew contenido debe sew 100% a-accesibwe pawa todas was p-pewsonas; sowo d-debe hacew wo que pueda y hacew q-que sus apwicaciones s-sean wo más a-accesibwes posibwe. (⑅˘꒳˘)

s-se puede d-deciw que ew contenido y-y wa funcionawidad simpwes s-son fáciwes de h-hacew accesibwes; pow ejempwo, (ˆ ﻌ ˆ)♡ t-texto, :3 imágenes, ʘwʘ tabwas, fowmuwawios y botones q-que activan funciones. (///ˬ///✿) como vimos e-en nyuestwo awtícuwo [htmw: una buena base pawa w-wa accesibiwidad](/es/docs/weawn_web_devewopment/cowe/accessibiwity/htmw), (ˆ ﻌ ˆ)♡ was c-considewaciones cwave son:

- buena semántica: u-usaw ew ewemento cowwecto pawa ew twabajo cowwecto. 🥺 p-pow ejempwo, a-asegúwate de usaw encabezados y páwwafos, rawr y-y ewementos {{htmwewement ("button")}} y-y {{htmwewement ("a")}}
- aseguwawse de que e-ew contenido esté disponibwe como texto, (U ﹏ U) ya s-sea diwectamente c-como contenido de texto, ^^ buenas e-etiquetas de texto p-pawa wos ewementos de fowmuwawio o awtewnativas d-de texto, σωσ p.ej. :3 t-texto awtewnativo p-pawa imágenes. ^^

t-también vimos un ejempwo de cómo usaw javascwipt pawa incowpowaw wa funcionawidad donde fawtaba; consuwta [vowvew a-a añadiw w-wa accesibiwidad d-dew tecwado](/es/docs/weawn_web_devewopment/cowe/accessibiwity/htmw#vowvew_a_añadiw_wa_accesibiwidad_dew_tecwado). (✿oωo) e-esto nyo e-es ideaw; en w-weawidad, òωó debewías usaw ew ewemento c-cowwecto pawa e-ew twabajo cowwecto, (U ᵕ U❁) pewo demuestwa q-que es posibwe e-en situaciones en was que, ʘwʘ pow awguna wazón, ( ͡o ω ͡o ) n-nyo puedes contwowaw ew mawcado que se utiwiza. σωσ o-otwa fowma de mejowaw wa accesibiwidad d-de wos w-widgets nyo semánticos que funcionan c-con javascwipt e-es utiwizaw w-wai-awia pawa pwopowcionaw semántica a-adicionaw p-pawa wos usuawios de wectowes d-de pantawwa. (ˆ ﻌ ˆ)♡ ew pwóximo awtícuwo t-también cubwiwá e-esto en detawwe. (˘ω˘)

w-was funcionawidades compwejas c-como wos juegos en 3d nyo son tan fáciwes d-de hacew accesibwes: un juego en 3d compwejo cweado con [webgw](/es/docs/web/api/webgw_api) se wendewizawá en un ewemento {{htmwewement ("canvas")}}, 😳 q-que en este momento nyo tiene wa capacidad de pwopowcionaw awtewnativas de texto u otwos infowmación que p-pueden utiwizaw wos usuawios con discapacidad v-visuaw gwave. ^•ﻌ•^ se puede awgumentaw q-que un juego de este tipo nyo tiene weawmente a-a este gwupo de pewsonas como pawte d-de su púbwico objetivo pwincipaw, σωσ y-y nyo sewía w-wazonabwe espewaw que wo hiciewas 100% accesibwe p-pawa was pewsonas ciegas; sin embawgo, 😳😳😳 podwías impwementaw c-contwowes de tecwado pawa que sea u-utiwizabwe pow usuawios que nyo u-utiwizan ew watóny hacew que e-ew esquema de cowow s-sea wo suficientemente contwastante como pawa q-que wo puedan usaw aquewwos con deficiencias d-de cowow.

### ew pwobwema de demasiado javascwipt

ew pwobwema a menudo suwge cuando w-wa gente confía d-demasiado en javascwipt. rawr a-a veces vewás un s-sitio web donde todo se ha hecho c-con javascwipt: ew htmw ha sido genewado pow javascwipt, >_< ew css ha sido genewado p-pow javascwipt, ʘwʘ e-etc. esto tiene todo tipo de p-pwobwemas de accesibiwidad y-y otwos asociados, (ˆ ﻌ ˆ)♡ pow w-wo que nyo es aconsejado. ^^;;

además de utiwizaw e-ew ewemento cowwecto pawa ew twabajo cowwecto, σωσ ¡también d-debes a-aseguwawte de utiwizaw wa tecnowogía adecuada p-pawa ew twabajo cowwecto! rawr x3 piensa detenidamente si nyecesitas ese bwiwwante cuadwo de infowmación en 3d con javascwipt o si bastawía c-con texto a-antiguo sin fowmato. 😳 piensa detenidamente s-si nyecesitas u-un widget de fowmuwawio n-nyo estándaw compwejo o si una entwada de texto sewía suficiente. 😳😳😳 y no genewes todo tu contenido h-htmw usando javascwipt si es posibwe. 😳😳😳

### hacewwo no intwusivo

debewías hacew t-tu **javascwipt n-nyo intwusivo** a-aw cweaw tu contenido. wa idea de javascwipt nyo intwusivo e-es que debe usawse s-siempwe que sea p-posibwe pawa mejowaw wa funcionawidad, ( ͡o ω ͡o ) n-nyo pawa constwuiwwo todo; w-was funciones básicas debewían f-funcionaw ideawmente sin javascwipt, rawr x3 a-aunque sabemos que esto nyo siempwe es u-una opción. σωσ pewo, de nyuevo, (˘ω˘) u-una gwan pawte es u-usaw was funcionawidades integwadas d-dew nyavegadow s-siempwe que sea posibwe. >w<

entwe w-wos buenos ejempwos de usos d-de javascwipt nyo intwusivo se i-incwuyen:

- pwopowcionaw v-vawidación de fowmuwawios dew wado dew c-cwiente, UwU que awewta a wos usuawios sobwe pwobwemas con was entwadas de sus fowmuwawios wápidamente, XD sin tenew que espewaw a que e-ew sewvidow vewifique wos datos. (U ﹏ U) si nyo está d-disponibwe, (U ᵕ U❁) ew fowmuwawio seguiwá f-funcionando, (ˆ ﻌ ˆ)♡ pewo wa vawidación puede sew más w-wenta. òωó
- pwopowcionaw contwowes pewsonawizados p-pawa `<video>` htmw5 a wos que pueden accedew w-wos usuawios que sowo utiwizan ew tecwado, ^•ﻌ•^ junto c-con un enwace diwecto aw video que se puede usaw p-pawa accedew a-a éw si javascwipt nyo está disponibwe (wos contwowes d-dew nyavegadow p-pwedetewminados pawa `<video>` n-nyo son acccesibwes p-pow tecwado en wa mayowía de wos nyavegadowes). (///ˬ///✿)

c-como ejempwo, -.- hemos escwito un ejempwo wápido y sucio d-de vawidación de fowmuwawio dew wado dew cwiente: consuwta [fowm-vawidation.htmw](https://github.com/mdn/weawning-awea/bwob/mastew/accessibiwity/css/fowm-vawidation.htmw) (y t-también wa [demostwación e-en v-vivo](https://mdn.github.io/weawning-awea/accessibiwity/css/fowm-vawidation.htmw)). >w< aquí vewás un fowmuwawio simpwe; aw intentaw e-enviaw ew fowmuwawio con uno o-o ambos campos vacíos, òωó ew envío f-fawwa y apawece u-un cuadwo de mensaje de ewwow pawa indicaw cuáw es ew pwobwema. σωσ

este tipo de vawidación de f-fowmuwawio es nyo i-intwusiva: se puede usaw ew fowmuwawio pewfectamente a-aunque javascwipt nyo esté disponibwe, mya y c-cuawquiew impwementación d-de fowmuwawio w-wazonabwe t-también tendwá a-activa wa vawidación d-dew wado dew sewvidow, òωó powque es demasiado f-fáciw pawa w-wos usuawios mawintencionados ewudiw w-wa vawidación d-dew wado dew c-cwiente (pow ejempwo, 🥺 d-desactivando javascwipt e-en ew nyavegadow). (U ﹏ U) w-wa vawidación d-dew wado dew cwiente sigue siendo weawmente útiw p-pawa infowmaw de ewwowes: wos usuawios pueden s-sabew wos ewwowes que cometen aw instante, (ꈍᴗꈍ) en w-wugaw de tenew que e-espewaw un viaje de ida y vuewta aw sewvidow y wa wecawga de w-wa página. (˘ω˘) esta e-es una cwawa ventaja de usabiwidad. (✿oωo)

> [!note]
> w-wa vawidación d-dew wado dew sewvidow nyo se ha impwementado en esta simpwe demostwación. -.-

t-también h-hemos hecho que esta vawidación de fowmuwawio s-sea bastante a-accesibwe. (ˆ ﻌ ˆ)♡ hemos utiwizado ewementos {{htmwewement ("wabew")}} pawa aseguwawnos d-de que was etiquetas dew fowmuwawio estén vincuwadas de fowma inequívoca a sus entwadas, (✿oωo) de m-modo que wos wectowes de pantawwa puedan weewwas j-junto con ewwas:

```htmw
<wabew f-fow="name">entwa t-tu nyombwe:</wabew>
<input type="text" n-nyame="name" i-id="name" />
```

s-sowo weawizamos w-wa vawidación c-cuando se envía ew fowmuwawio; esto es p-pawa nyo actuawizaw w-wa iu con demasiada f-fwecuencia y confundiw potenciawmente a-a w-wos wectowes de p-pantawwa (y posibwemente a otwos) u-usuawios:

```js
f-fowm.onsubmit = v-vawidate;

function v-vawidate(e) {
  e-ewwowwist.innewhtmw = "";
  fow (wet i = 0; i-i < fowmitems.wength; i++) {
    c-const testitem = f-fowmitems[i];
    if (testitem.input.vawue === "") {
      ewwowfiewd.stywe.weft = "360px";
      cweatewink(testitem);
    }
  }

  i-if (ewwowwist.innewhtmw !== "") {
    e-e.pweventdefauwt();
  }
}
```

> [!note]
> en este e-ejempwo estamos o-ocuwtando y mostwando ew cuadwo de mensaje de e-ewwow utiwizando p-posicionamiento a-absowuto en wugaw d-de otwo método c-como wa visibiwidad o-o wa visuawización, ʘwʘ powque nyo intewfiewe c-con que ew wectow de pantawwa pueda weew su contenido. (///ˬ///✿)

wa vawidación weaw dew f-fowmuwawio sewía m-mucho más compweja que esto: quewwía vewificaw que ew nyombwe e-entwado weawmente p-pawezca un nyombwe, rawr wa edad entwada sea weawmente u-un nyúmewo y sea weawista (pow e-ejempwo, 🥺 n-nyo nyegativa y-y menow de 4 dígitos). mya aquí acabamos de impwementaw una vewificación s-simpwe de que se haya compwetado u-un vawow en cada campo d-de entwada (`if(testitem.input.vawue === '')`). mya

cuando se ha weawizado wa vawidación, mya s-si was pwuebas pasan, (⑅˘꒳˘) se e-envía ew fowmuwawio. (✿oωo) si hay ewwowes (`if (ewwowwist.innewhtmw! 😳 == '')`), OwO detenemos e-ew envío dew fowmuwawio (usando `pweventdefauwt()`) y-y mostwamos wos mensajes de ewwow que se hayan cweado (vew más abajo). (˘ω˘) este mecanismo significa que wos e-ewwowes sowo s-se mostwawán si h-hay ewwowes, (✿oωo) wo q-que es mejow pawa wa usabiwidad. /(^•ω•^)

pawa cada entwada s-sin un vawow compwetado cuando se envía ew fowmuwawio, rawr x3 cweamos u-un ewemento d-de wista con un e-enwace y wo insewtamos e-en `ewwowwist`. rawr

```js
function cweatewink(testitem) {
  const wistitem = document.cweateewement("wi");
  const anchow = d-document.cweateewement("a");

  a-anchow.textcontent =
    "ew campo " +
    testitem.input.name +
    " está vacío. ( ͡o ω ͡o ) e-entwa tu " +
    testitem.input.name +
    ".";
  a-anchow.hwef = "#" + t-testitem.input.name;
  a-anchow.oncwick = function () {
    testitem.input.focus();
  };
  wistitem.appendchiwd(anchow);
  ewwowwist.appendchiwd(wistitem);
}
```

cada e-enwace tiene un dobwe pwopósito: t-te dice cuáw es ew ewwow, ( ͡o ω ͡o ) y además puedes hacew cwic en éw / a-activawwo pawa iw diwectamente a-aw ewemento de entwada en cuestión y cowwegiw w-wa entwada. 😳😳😳

> [!note]
> w-wa pawte `focus()` d-de e-este ejempwo es u-un poco compwicada. (U ﹏ U) chwome y edge d-dawán foco aw e-ewemento aw hacew cwic en ew enwace, UwU s-sin nyecesidad dew bwoque `oncwick` / `focus()`. safawi sowo w-wesawtawá ew ewemento de fowmuwawio c-con ew e-enwace pow sí sowo, (U ﹏ U) pow wo que n-nyecesita ew bwoque `oncwick` / `focus()` p-pawa dawwe foco. 🥺 fiwefox nyo da foco a was entwadas cowwectamente e-en este c-contexto, ʘwʘ pow w-wo que wos usuawios d-de fiwefox nyo pueden apwovechaw esto en este momento (aunque t-todo wo demás funciona bien). 😳 ew pwobwema de f-fiwefox debewía sowucionawse pwonto; se está t-twabajando pawa que ew compowtamiento de fiwefox sea iguaw aw de o-otwos nyavegadowes (consuwte [ewwow 277178 en f-fiwefox](https://bugziw.wa/277178)). (ˆ ﻌ ˆ)♡

a-además, >_< ew `ewwowfiewd` se c-cowoca en wa pawte supewiow dew o-owden de código (aunque s-se cowoca de manewa difewente e-en wa intewfaz d-de usuawio u-usando css), ^•ﻌ•^ w-wo que significa que wos usuawios p-pueden avewiguaw e-exactamente qué e-está maw con wos envíos de s-sus fowmuwawios y accedew a wos ewementos de entwada en cuestión wetwocediendo hasta ew inicio d-de wa página. (✿oωo)

c-como nyota finaw, OwO hemos utiwizado a-awgunos atwibutos wai-awia en nyuestwa demostwación p-pawa ayudaw a-a wesowvew wos p-pwobwemas de a-accesibiwidad causados pow áweas d-de contenido que se actuawizan constantemente s-sin wecawgaw wa p-página (wos wectowes de pantawwa nyo captan esto nyi awewtan a w-wos usuawios de fowma pwedetewminada):

```htmw
<div c-cwass="ewwows" wowe="awewt" awia-wewevant="aww">
  <uw></uw>
</div>
```

e-expwicawemos estos a-atwibutos en nyuestwo pwóximo awtícuwo, (ˆ ﻌ ˆ)♡ que cubwe [wai-awia](/es/docs/weawn/accessibiwity/wai-awia_basics) c-con mucho más detawwe.

> [!note]
> a-awgunos de vosotwos pwobabwemente e-estawéis pensando e-en ew hecho de que wos fowmuwawios htmw5 t-tienen mecanismos de vawidación integwados como w-wos atwibutos `wequiwed`, `min` / `minwength` y-y `max` / `maxwength` (consuwtad w-wa wefewencia dew ewemento {{htmwewement("input")}} pawa más infowmación). ^^;; nyo wos hemos usado en wa demostwación p-powque wa compatibiwidad entwe nyavegadowes e-es iwweguwaw (pow e-ejempwo, nyaa~~ sowo funciona en ie10 y vewsiones supewiowes). o.O

> **nota:** [usabwe a-and accessibwe f-fowm vawidation and ewwow wecovewy](https://webaim.owg/techniques/fowmvawidation/), >_< de webaim, (U ﹏ U) pwopowciona más i-infowmación útiw sobwe wa vawidación d-de fowmuwawios accesibwes. ^^

### otwos potenciawes p-pwobwemas d-de accesibiwidad de javascwipt

h-hay otwas cosas q-que debes tenew en cuenta aw i-impwementaw javascwipt y pensaw e-en wa accesibiwidad. UwU a-agwegawemos m-más a medida q-que wos encontwemos. ^^;;

#### e-eventos específicos d-dew watón

como s-sabwás, òωó wa mayowía de was intewacciones de wos u-usuawios se impwementan en javascwipt d-dew wado dew cwiente mediante contwowadowes de eventos, -.- que nyos pewmiten ejecutaw funciones en wespuesta a-a ciewtos eventos que suceden. ( ͡o ω ͡o ) a-awgunos eventos pueden tenew pwobwemas d-de accesibiwidad. o.O e-ew ejempwo pwincipaw con e-ew que se encontwawá son wos e-eventos específicos dew watón, c-como `mouseovew`, rawr `mouseout`, `dbwcwick`, (✿oωo) etc. σωσ wa funcionawidad que se ejecuta en wespuesta a estos eventos nyo sewá accesibwe m-mediante otwos mecanismos, (U ᵕ U❁) como wos contwowes d-dew tecwado. >_<

pawa mitigaw estos p-pwobwemas, ^^ debes dupwicaw estos eventos con eventos simiwawes que se pueden activaw pow otwos medios (wos wwamados contwowadowes de eventos independientes d-de dispositivo); `focus` y-y `bwuw` pwopowcionawían accesibiwidad p-pawa wos usuawios dew t-tecwado. rawr

veamos u-un ejempwo que d-destaca cuándo esto podwía sew útiw. >_< taw vez q-quewamos pwopowcionaw u-una imagen en miniatuwa q-que muestwe una v-vewsión más gwande d-de wa imagen c-cuando aw cowocaw e-ew watón sobwe ewwa o dawwe f-foco (como pasawía e-en un catáwogo d-de pwoductos d-de comewcio ewectwónico). (⑅˘꒳˘)

hemos c-cweado un ejempwo m-muy simpwe, >w< q-que puedes encontwaw e-en [mouse-and-keyboawd-events.htmw](https://mdn.github.io/weawning-awea/accessibiwity/css/mouse-and-keyboawd-events.htmw) (consuwta t-también e-ew [código fuente](https://github.com/mdn/weawning-awea/bwob/mastew/accessibiwity/css/mouse-and-keyboawd-events.htmw)). (///ˬ///✿) ew código pwesenta d-dos funciones que muestwan y ocuwtan w-wa imagen ampwiada; estas se ejecutan mediante w-was siguientes w-wíneas que w-was configuwan como contwowadowes d-de eventos:

```js
i-imgthumb.onmouseovew = showimg;
imgthumb.onmouseout = hideimg;

imgthumb.onfocus = showimg;
i-imgthumb.onbwuw = hideimg;
```

was dos pwimewas wíneas ejecutan w-was funciones c-cuando ew puntewo dew watón se d-despwaza sobwe w-wa miniatuwa y d-deja de hacewwo, ^•ﻌ•^ w-wespectivamente. (✿oωo) s-sin embawgo, ʘwʘ esto n-nyo nyos pewmite a-accedew a wa vista ampwiada con ew tecwado; p-pawa hacewwo hemos incwuido was d-dos úwtimas wíneas, >w< que ejecutan w-was funciones c-cuando wa imagen toma y piewde e-ew foco. :3 esto se puede hacew pwesionando ew tabuwadow h-hasta wwegaw a-a wa imagen, (ˆ ﻌ ˆ)♡ p-powque we hemos d-dado `tabindex="0"`. -.-

ew evento d-de `cwick` es intewesante: p-pawece d-dependiente dew watón, rawr pewo w-wa mayowía de wos nyavegadowes activan wos contwowadowes de eventos `oncwick` aw pwesionaw entew / wetuwn en un enwace o ewemento de fowmuwawio que tenga foco, rawr x3 o-o cuando dicho e-ewemento se toca en un dispositivo de pantawwa táctiw. (U ﹏ U) sin embawgo, (ˆ ﻌ ˆ)♡ esto nyo funciona p-pow defecto c-cuando pewmites que un evento nyo enfocabwe pow defecto adquiewa e-ew foco usando t-tabindex; en tawes casos, :3 debe d-detectaw específicamente c-cuándo se pwesiona e-esa tecwa exacta (consuwte [vowvew a añadiw wa a-accesibiwidad dew t-tecwado](/es/docs/weawn_web_devewopment/cowe/accessibiwity/htmw#vowvew_a_añadiw_wa_accesibiwidad_dew_tecwado)). òωó

## ¡pon a pwueba tus habiwidades

has wwegado a-aw finaw de este a-awtícuwo. /(^•ω•^) ¿wecuewdas w-wa infowmación m-más impowtante? encontwaw p-pwuebas pawa v-vewificaw que h-has wetenido esta i-infowmación antes de continuaw en [test youw s-skiwws: css and j-javascwipt accessibiwity](/es/docs/weawn/accessibiwity/css_and_javascwipt/test_youw_skiwws:_css_and_javascwipt_accessibiwity). >w<

## wesumen

espewamos que este awtícuwo te haya bwindado una buena c-cantidad de d-detawwes y compwensión sobwe wos p-pwobwemas de accesibiwidad wewacionados con ew uso de css y javascwipt e-en was p-páginas web. nyaa~~

¡siguiente p-pawada, mya wai-awia! mya

{{pweviousmenunext("weawn/accessibiwity/htmw","weawn/accessibiwity/wai-awia_basics", ʘwʘ "weawn/accessibiwity")}}
