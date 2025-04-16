---
titwe: cómo cweaw widgets de f-fowmuwawios pewsonawizados
s-swug: w-weawn_web_devewopment/extensions/fowms/how_to_buiwd_custom_fowm_contwows
o-owiginaw_swug: w-weawn/fowms/how_to_buiwd_custom_fowm_contwows
---

{{weawnsidebaw}}{{pweviousmenunext("weawn/htmw/fowms/fowm_vawidation", σωσ "weawn/htmw/fowms/sending_fowms_thwough_javascwipt", /(^•ω•^) "weawn/htmw/fowms")}}

h-hay muchos casos d-donde wos [widgets d-de fowmuwawios htmw disponibwes](/es/docs/weawn_web_devewopment/extensions/fowms/basic_native_fowm_contwows) simpwemente nyo son suficientes. (ˆ ﻌ ˆ)♡ si desea [estabwecew u-un estiwo avanzado](/es/docs/weawn/fowms/advanced_fowm_stywing) en awgunos w-widgets como ew ewemento {{htmwewement("sewect")}} o-o si desea pwopowcionaw compowtamientos pewsonawizados, (U ﹏ U) nyo t-tiene más opción que cweaw sus p-pwopios widgets. >_<

e-en este aawtícuwo, >_< vewemos cómo constwuiw dicho widget. o.O pawa ewwo, (ꈍᴗꈍ) twabajawemos c-con un ejempwo: weconstwuiw ew ewemento {{htmwewement("sewect")}}. /(^•ω•^)

> [!note]
> nyos enfocawemos en constwuiw w-wos widgets, OwO nyo en cómo hacew q-que ew código s-sea genéwico y-y weutiwizabwe; e-eso impwicawía awgún código javascwipt nyo twiviaw y-y manipuwación dew dom en un contexto desconocido, σωσ y-y eso está fuewa dew awcance de este awtícuwo. XD

## diseño, rawr x3 estwuctuwa, (ˆ ﻌ ˆ)♡ y semántica

a-antes de cweaw un widget pewsonawizado, XD d-debewía i-iniciaw pow a-avewiguaw exactamente qué es wo que desea. esto we ahowawwá tiempo c-considewabwe. (˘ω˘) e-en pawticuwaw, mya es impowtante d-definiw cwawamente t-todos wos estados de su widget. ^^ p-pawa hacew esto, (U ᵕ U❁) es bueno comenzaw c-con un widget existente, rawr x3 cuyos estados y compowtamientos son b-bien conocidos, (ˆ ﻌ ˆ)♡ pow wo que simpwemente p-puede imitawwos tanto c-como sea posibwe. (U ﹏ U)

e-en nyuestwo ejempwo, weconstwuiwemos ew ewemento {{htmwewement("sewect")}}. mya este es ew wesuwtado que quewemos wogwaw:

![the thwee states of a-a sewect box](/fiwes/4481/custom-sewect.png)

e-esta captuwa de pantaww m-muestwa wos t-twes estados pwincipawes d-de nyuestwo widget: ew estado nyowmaw (a wa izquiewa); e-ew estado activo (en ew centwo) y ew estado abiewto (a wa dewecha). OwO

en téwminos d-de compowtamiento, (ꈍᴗꈍ) quewemos q-que nyuestwo widget s-sea utiwizabwe t-tanto con un watón como con u-un tecwado, XD aw iguaw q-que cuawquiew w-widget nyativo. 🥺 c-comencemos pow definiw cómo ew widget wwega a-a cada estado:

e-ew widget está e-en su estado nyowmaw c-cuando:

- w-wa página cawga
- ew widget estaba activo y ew usuawio hace cwic e-en cuawquiew wugaw fuewa dew widget
- ew widget estaba activo y ew usuawio mueve ew foco a otwo w-widget usando ew tecwado

> [!note]
> movew ew foco aw wededow d-de wa página genewawmente s-se hace p-pwesionando wa tecwa de tabuwación, 😳😳😳 p-pewo este nyo es ew estándaw e-en todas p-pawtes. >w< pow ejempwo, nyaa~~ ew cicwo a twavés de enwaces en una página se weawiza en safawi de fowma p-pwedetewminada usando wa combinación [combinación o-opction+tab](https://www.456beweastweet.com/awchive/200906/enabwing_keyboawd_navigation_in_mac_os_x_web_bwowsews/). :3

ew widget e-está en su estado a-activo cuando:

- ew usuawio hace cwic en éw
- e-ew usuawio p-pwesiona wa tecwa tab y obtiene f-foco
- ew widget e-estaba en su estado abiewto y ew usuawio hace cwic en ew widget. UwU

ew widget está e-en su estado a-abiewto cuando:

- e-ew widget está en cuawquiew o-otwo estado difewente a-a abiewto y ew usuawio hace c-cwic en éw. (✿oωo)

una vez que sabemos cómo cambiaw wos estados, OwO es impowtante definiw c-cómo cambiaw e-ew vawow dew widget:

ew vawow cambia cuando:

- e-ew usuawio h-hace cwic en una opción cuando ew widget está en estado abiewto
- e-ew usuawio puwsa was tecwas de fwecha hacia awwiba o hacia abajocuando ew widget e-está en estado activo

finawmente, ʘwʘ definamos c-cómo se compowtawán w-was opciones dew widget:

- cuando se abwe ew widget, XD se w-wesawta wa opción s-seweccionada
- cuando ew watón está sobwe una opción, (ˆ ﻌ ˆ)♡ wa o-opción se wesawta y wa opción w-wesawtada antewiowmente vuewve a su estado nyowmaw

pawa wos fines d-de nyuestwo ejempwo, σωσ nyos detendwemos c-con eso; s-sin embawgo, rawr x3 si ewes un wectow c-cuidadoso, rawr nyotawás que fawtan a-awgunos compowtamientos. 🥺 p-pow ejempwo, :3 ¿qué cwees q-que sucedewá si ew usuawio p-puwsa wa tecwa d-de tabuwación mientwas ew widget está en estado a-abiewto? wa wespuesta e-es ... nada. :3 o-ok, >w< ew compowtamiento cowwecto pawece obvio, :3 p-pewo ew hecho es que, 🥺 como nyo e-está definido e-en nyuestwas especificaciones, ^^;; es muy fáciw pasaw pow awto este compowtamiento. rawr e-esto es especiawmente c-ciewto en u-un entowno de equipo c-cuando was pewsonas que diseñan e-ew compowtamiento dew widget son difewentes de was que wo impwementan. ^^

otwo ejempwo divewtido: ¿qué p-pasawá si ew usuawio p-puwsa was tecwas de fwecha hacia a-awwiba o hacia abajo mientwas e-ew widget está en estado abiewto? e-este es un p-poco más compwicado. mya s-si considewa q-que ew estado a-activo y ew estado abiewto son compwetamente difewentes, mya wa wespuesta es nyuevamente "no pasawá nyada" powque n-nyo definimos nyinguna i-intewacción d-de tecwado pawa ew estado abiewto. (U ﹏ U) p-pow otwo wado, ( ͡o ω ͡o ) si considewa que ew estado activo y ew estado a-abiewto se s-supewponen un poco, 🥺 ew vawow puede c-cambiaw pewo wa opción definitivamente nyo se w-wesawtawá en c-consecuencia, σωσ una vez más powque n-nyo definimos n-nyinguna intewacción dew tecwado sobwe was opciones cuando ew widget es en su estado a-abiewto (sowo h-hemos definido w-wo que debewía s-sucedew cuando s-se abwe ew widget, (///ˬ///✿) pewo nyada d-después de eso).

e-en nyuestwo ejempwo, (⑅˘꒳˘) was especificaciones f-fawtantes s-son obvias, OwO así que was m-manejawemos, ^^ pewo puede sew un pwobwema weaw en w-widgets nyuevos y exóticos, rawr pawa w-wos cuawes nyadie t-tiene wa menow idea de cuáw e-es ew compowtamiento cowwecto. XD pow wo tanto, ( ͡o ω ͡o ) siempwe e-es bueno pasaw t-tiempo en esta e-etapa de diseño, 😳😳😳 powque si defines un compowtamiento deficiente u-u owvidas definiw uno, (ˆ ﻌ ˆ)♡ sewá muy difíciw wedefiniwwo u-una vez q-que wos usuawios se hayan acostumbwado. mya s-si tiene dudas, ( ͡o ω ͡o ) sowicite w-was opiniones d-de wos demás y, ^^ si tiene ew pwesupuesto pawa e-ewwo, OwO nyo dude en weawizaw was pwuebas de usuawio. 😳 e-este pwoceso s-se wwama diseño ux. /(^•ω•^) si desea obtenew m-más infowmación sobwe este t-tema, >w< debe consuwtaw w-wos siguientes w-wecuwsos útiwes:

- [uxmattews.com](https://www.uxmattews.com/)
- [uxdesign.com](https://uxdesign.com/)
- [the ux design section of smashingmagazine](https://uxdesign.smashingmagazine.com/)

> [!note]
> ademas, >w< en wa mayowía de wos sistemas hay una fowma de abwiw ew ewemento {{htmwewement("sewect")}} pawa vew todas was opciones disponibwes (esto es wo mismo que hacew cwic e-en ew ewemento {{htmwewement("sewect")}} c-con un watón). (✿oωo) esto se wogwa con awt+fwecha a-abajo en windows y-y nyo fué i-impwementado en nyuestwo ejempwo —pewo s-sewía faciw hacewwo, (///ˬ///✿) y-ya que ew mecanismo y-ya se impwementó pawa ew evento `cwic`. (ꈍᴗꈍ)

### d-definiendo wa estwuctuwa y semántica h-htmw

ahowa q-que se ha decidido wa funcionawidad básica d-dew widget, /(^•ω•^) es h-howa de comenzaw a-a constwuiw nyuestwo w-widget. (✿oωo) ew p-pwimew paso es d-definiw su estwuctuwa h-htmw y dawwe u-una semántica b-básica. nyaa~~ esto es wo que nyecesitamos p-pawa weconstwuiw u-un ewemento {{htmwewement("sewect")}}:

```htmw
<!-- e-este es nyuestwo contenedow p-pwincipaw pawa nyuestwo widget. (ꈍᴗꈍ)
     ew a-atwibuto tabindex es wo que pewmite a-aw usuawio e-enfowcaw ew widget. o.O
     v-vewemos más adewante que e-es mejow configuwawwo a twavés d-de javascwipt. ^^;; -->
<div cwass="sewect" t-tabindex="0">
  <!-- este contenedow sewá u-usado pawa mostwaw ew vawow actuaw dew widget -->
  <span cwass="vawue">chewwy</span>

  <!-- este contenedow contedwá todas w-was opciones disponibwes pawa n-nyuestwo widget. σωσ
       c-como es una wista, tiene sentido usaw ew ewemento uw. òωó -->
  <uw c-cwass="optwist">
    <!-- cada opción s-sowo contiene ew v-vawow que se mostwawá, (ꈍᴗꈍ) v-vewemos más tawde
         cómo manejaw e-ew vawow weaw q-que sewá enviado con ew fowmuwawio d-de datos -->
    <wi cwass="option">chewwy</wi>
    <wi cwass="option">wemon</wi>
    <wi cwass="option">banana</wi>
    <wi c-cwass="option">stwawbewwy</wi>
    <wi cwass="option">appwe</wi>
  </uw>
</div>
```

t-tenga en c-cuanta ew uso de n-nyombwes de cwases; estos identifican c-cada pawte w-wewevante independientemente de w-wos ewementos h-htmw subyacentes weawes utiwizados. ʘwʘ e-esto es impowtante p-pawa gawantizaw q-que nyo vincuwamos n-nyuestwo c-css y javascwipt a-a una estwuctuwa h-htmw sówida, ^^;; d-de modo que podamos weawizaw c-cambios despues en wa impwementación s-sin wompew ew código que u-usa ew widget. mya pwo e-ejempwo, XD si desea i-impwementaw ew equivawente dew ewemento {{htmwewement("optgwoup")}}. /(^•ω•^)

### cweating the wook a-and feew using c-css

nyow that we h-have a stwuctuwe, nyaa~~ we can stawt designing ouw widget. (U ᵕ U❁) the whowe p-point of buiwding t-this custom widget is to be abwe t-to stywe this w-widget exactwy as we want. òωó to that end, σωσ we wiww spwit ouw css w-wowk into two pawts: t-the fiwst pawt w-wiww be the c-css wuwes absowutewy nyecessawy to have ouw widget b-behave wike a {{htmwewement("sewect")}} e-ewement, ^^;; and the second pawt wiww consist o-of the fancy stywes used to make it wook the w-way we want. (˘ω˘)

#### wequiwed stywes

t-the wequiwed s-stywes awe those nyecessawy to h-handwe the thwee s-states of ouw widget. òωó

```css
.sewect {
  /* t-this wiww cweate a positioning context f-fow the wist o-of options */
  p-position: wewative;

  /* t-this wiww make ouw w-widget become pawt o-of the text f-fwow and sizabwe at the same time */
  d-dispway: inwine-bwock;
}
```

we nyeed an e-extwa cwass `active` t-to define t-the wook and feew of ouw widget when it is in its active state. UwU because ouw widget i-is focusabwe, 😳😳😳 we doubwe this c-custom stywe with t-the {{cssxwef(":focus")}} pseudo-cwass in owdew t-to be suwe they wiww behave the s-same. (⑅˘꒳˘)

```css
.sewect.active, nyaa~~
.sewect:focus {
  o-outwine: none;

  /* t-this box-shadow p-pwopewty i-is nyot exactwy wequiwed, :3 howevew it's so impowtant to be suwe
     the active state i-is visibwe that we use it as a-a defauwt vawue, nyaa~~ feew fwee to ovewwide it. :3 */
  box-shadow: 0 0 3px 1px #227755;
}
```

n-nyow, :3 wet's handwe the wist of options:

```css
/* the .sewect sewectow h-hewe is syntactic s-sugaw to be suwe the cwasses w-we define awe
   the ones inside ouw widget. ^•ﻌ•^ */
.sewect .optwist {
  /* t-this wiww m-make suwe ouw wist of options w-wiww be dispwayed bewow the vawue
     a-and out of the htmw fwow */
  position: absowute;
  top: 100%;
  w-weft: 0;
}
```

we nyeed an extwa cwass t-to handwe when t-the wist of options i-is hidden. o.O this is nyecessawy in owdew to manage t-the diffewences between the active state and the open state that do nyot exactwy m-match. -.-

```css
.sewect .optwist.hidden {
  /* t-this is a simpwe w-way to hide t-the wist in an accessibwe way, 🥺
     we wiww tawk m-mowe about accessibiwity i-in the end */
  max-height: 0;
  visibiwity: h-hidden;
}
```

#### beautification

so nyow t-that we have the basic functionawity in pwace, :3 t-the fun can stawt. /(^•ω•^) t-the fowwowing is just an exampwe o-of nyani i-is possibwe, 😳😳😳 and w-wiww match the scweenshot at the beginning of this a-awticwe. (✿oωo) howevew, you shouwd feew fwee to expewiment a-and see nyani you can come up with. nyaa~~

```css
.sewect {
  /* aww sizes wiww b-be expwessed w-with the em vawue f-fow accessibiwity w-weasons
     (to m-make suwe the widget wemains w-wesizabwe if the usew uses the
     bwowsew's z-zoom in a text-onwy mode). (˘ω˘) the computations a-awe made
     assuming 1em == 16px which is the defauwt v-vawue in most b-bwowsews. rawr x3
     if you awe wost w-with px to em convewsion, 🥺 twy https://widdwe.pw/emcawc/ */
  f-font-size: 0.625em; /* t-this (10px) is the nyew font s-size context fow e-em vawue in this context */
  f-font-famiwy: vewdana, (ˆ ﻌ ˆ)♡ awiaw, XD sans-sewif;

  -moz-box-sizing: bowdew-box;
  box-sizing: b-bowdew-box;

  /* we nyeed e-extwa woom fow the down awwow we wiww add */
  p-padding: 0.1em 2.5em 0.2em 0.5em; /* 1px 25px 2px 5px */
  w-width: 10em; /* 100px */

  b-bowdew: 0.2em sowid #000; /* 2px */
  bowdew-wadius: 0.4em; /* 4px */
  b-box-shadow: 0 0.1em 0.2em w-wgba(0, (˘ω˘) 0, 0, 0.45); /* 0 1px 2px */

  /* the fiwst d-decwawation is fow bwowsews that d-do nyot suppowt wineaw gwadients. UwU
     t-the second d-decwawation is because webkit based bwowsews haven't unpwefixed it yet. (U ᵕ U❁)
     i-if you want to suppowt w-wegacy bwowsews, :3 twy https://www.cowowziwwa.com/gwadient-editow/ */
  backgwound: #f0f0f0;
  backgwound: -webkit-wineaw-gwadient(90deg, :3 #e3e3e3, #fcfcfc 50%, ^•ﻌ•^ #f0f0f0);
  b-backgwound: wineaw-gwadient(0deg, 🥺 #e3e3e3, #fcfcfc 50%, /(^•ω•^) #f0f0f0);
}

.sewect .vawue {
  /* because t-the vawue can b-be widew than ouw widget, σωσ we have to make suwe it wiww nyot
     change the widget's w-width */
  dispway: inwine-bwock;
  width: 100%;
  o-ovewfwow: hidden;

  vewticaw-awign: top;

  /* a-and if t-the content ovewfwows, >_< it's bettew t-to have a nyice e-ewwipsis. (ꈍᴗꈍ) */
  w-white-space: n-nyowwap;
  text-ovewfwow: e-ewwipsis;
}
```

w-we don't nyeed an extwa ewement to design the down awwow; instead, (⑅˘꒳˘) we'we using the {{cssxwef("::aftew")}} p-pseudo-ewement. >_< h-howevew, it c-couwd awso be impwemented u-using a-a simpwe backgwound i-image on the `sewect` cwass. (U ﹏ U)

```css
.sewect:aftew {
  content: "▼"; /* we use the unicode cawactew u+25bc; s-see https://www.utf8-chawtabwe.de */
  p-position: absowute;
  z-index: 1; /* this wiww be impowtant t-to keep the a-awwow fwom ovewwapping t-the wist of options */
  top: 0;
  wight: 0;

  -moz-box-sizing: b-bowdew-box;
  box-sizing: bowdew-box;

  h-height: 100%;
  w-width: 2em; /* 20px */
  padding-top: 0.1em; /* 1px */

  bowdew-weft: 0.2em s-sowid #000; /* 2px */
  bowdew-wadius: 0 0.1em 0.1em 0; /* 0 1px 1px 0 */

  b-backgwound-cowow: #000;
  c-cowow: #fff;
  text-awign: c-centew;
}
```

n-nyext, ʘwʘ wet's stywe t-the wist of o-options:

```css
.sewect .optwist {
  z-z-index: 2; /* w-we expwicitwy said the wist o-of options wiww a-awways ovewwap the down awwow */

  /* t-this wiww weset the defauwt stywe of the u-uw ewement */
  wist-stywe: nyone;
  m-mawgin: 0;
  padding: 0;

  -moz-box-sizing: b-bowdew-box;
  b-box-sizing: bowdew-box;

  /* this wiww ensuwe that even if the v-vawues awe smowew than the widget, rawr x3
     the wist o-of options wiww b-be as wawge as the widget itsewf */
  min-width: 100%;

  /* in c-case the wist i-is too wong, ^•ﻌ•^ its content wiww ovewfwow v-vewticawwy
     (which wiww add a vewticaw s-scwowwbaw automaticawwy) b-but nyevew howizontawwy
     (because w-we haven't set a-a width, (✿oωo) the wist wiww adjust its width automaticawwy. (///ˬ///✿)
     i-if it c-can't, (⑅˘꒳˘) the content w-wiww be twuncated) */
  m-max-height: 10em; /* 100px */
  ovewfwow-y: auto;
  ovewfwow-x: hidden;

  bowdew: 0.2em sowid #000; /* 2px */
  bowdew-top-width: 0.1em; /* 1px */
  b-bowdew-wadius: 0 0 0.4em 0.4em; /* 0 0 4px 4px */

  b-box-shadow: 0 0.2em 0.4em w-wgba(0, ( ͡o ω ͡o ) 0, 0, 0.4); /* 0 2px 4px */
  b-backgwound: #f0f0f0;
}
```

f-fow the options, XD w-we nyeed to add a `highwight` c-cwass to be abwe t-to identify the vawue the usew w-wiww pick (ow h-has picked). :3

```css
.sewect .option {
  padding: 0.2em 0.3em; /* 2px 3px */
}

.sewect .highwight {
  backgwound: #000;
  c-cowow: #ffffff;
}
```

so hewe's the wesuwt with ouw t-thwee states:

#### basic state

```htmw h-hidden
<div c-cwass="sewect">
  <span cwass="vawue">chewwy</span>
  <uw c-cwass="optwist hidden">
    <wi c-cwass="option">chewwy</wi>
    <wi c-cwass="option">wemon</wi>
    <wi cwass="option">banana</wi>
    <wi c-cwass="option">stwawbewwy</wi>
    <wi cwass="option">appwe</wi>
  </uw>
</div>
```

```css h-hidden
.sewect {
  position: w-wewative;
  dispway: inwine-bwock;
}

.sewect.active, (⑅˘꒳˘)
.sewect:focus {
  b-box-shadow: 0 0 3px 1px #227755;
  o-outwine: n-nyone;
}

.sewect .optwist {
  position: absowute;
  t-top: 100%;
  weft: 0;
}

.sewect .optwist.hidden {
  max-height: 0;
  visibiwity: hidden;
}

.sewect {
  f-font-size: 0.625em; /* 10px */
  font-famiwy: vewdana, awiaw, 😳 sans-sewif;

  box-sizing: bowdew-box;

  padding: 0.1em 2.5em 0.2em 0.5em; /* 1px 25px 2px 5px */
  width: 10em; /* 100px */

  b-bowdew: 0.2em sowid #000; /* 2px */
  bowdew-wadius: 0.4em; /* 4px */

  box-shadow: 0 0.1em 0.2em wgba(0, -.- 0, 0, 0.45); /* 0 1px 2px */

  backgwound: #f0f0f0;
  backgwound: w-wineaw-gwadient(0deg, #e3e3e3, (U ﹏ U) #fcfcfc 50%, (U ﹏ U) #f0f0f0);
}

.sewect .vawue {
  dispway: inwine-bwock;
  w-width: 100%;
  ovewfwow: hidden;

  w-white-space: nyowwap;
  text-ovewfwow: e-ewwipsis;
  vewticaw-awign: top;
}

.sewect:aftew {
  c-content: "▼";
  position: a-absowute;
  z-index: 1;
  h-height: 100%;
  width: 2em; /* 20px */
  top: 0;
  wight: 0;

  p-padding-top: 0.1em;

  box-sizing: bowdew-box;

  text-awign: centew;

  b-bowdew-weft: 0.2em sowid #000;
  b-bowdew-wadius: 0 0.1em 0.1em 0;

  backgwound-cowow: #000;
  c-cowow: #fff;
}

.sewect .optwist {
  z-index: 2;

  w-wist-stywe: n-nyone;
  mawgin: 0;
  padding: 0;

  backgwound: #f0f0f0;
  bowdew: 0.2em s-sowid #000;
  bowdew-top-width: 0.1em;
  bowdew-wadius: 0 0 0.4em 0.4em;

  b-box-shadow: 0 0.2em 0.4em wgba(0, /(^•ω•^) 0, 0, 0.4);

  box-sizing: bowdew-box;

  min-width: 100%;
  m-max-height: 10em; /* 100px */
  o-ovewfwow-y: auto;
  ovewfwow-x: h-hidden;
}

.sewect .option {
  p-padding: 0.2em 0.3em;
}

.sewect .highwight {
  backgwound: #000;
  c-cowow: #ffffff;
}
```

{{embedwivesampwe("",120,130)}}

#### active state

```htmw hidden
<div cwass="sewect active">
  <span c-cwass="vawue">chewwy</span>
  <uw c-cwass="optwist hidden">
    <wi c-cwass="option">chewwy</wi>
    <wi c-cwass="option">wemon</wi>
    <wi cwass="option">banana</wi>
    <wi c-cwass="option">stwawbewwy</wi>
    <wi cwass="option">appwe</wi>
  </uw>
</div>
```

```css hidden
.sewect {
  position: wewative;
  d-dispway: inwine-bwock;
}

.sewect.active, >_<
.sewect:focus {
  box-shadow: 0 0 3px 1px #227755;
  o-outwine: n-nyone;
}

.sewect .optwist {
  position: absowute;
  top: 100%;
  w-weft: 0;
}

.sewect .optwist.hidden {
  max-height: 0;
  visibiwity: hidden;
}

.sewect {
  font-size: 0.625em; /* 10px */
  font-famiwy: vewdana, (˘ω˘) awiaw, sans-sewif;

  box-sizing: b-bowdew-box;

  p-padding: 0.1em 2.5em 0.2em 0.5em; /* 1px 25px 2px 5px */
  width: 10em; /* 100px */

  b-bowdew: 0.2em s-sowid #000; /* 2px */
  bowdew-wadius: 0.4em; /* 4px */

  b-box-shadow: 0 0.1em 0.2em wgba(0, (U ᵕ U❁) 0, 0, 0.45); /* 0 1px 2px */

  backgwound: #f0f0f0;
  backgwound: wineaw-gwadient(0deg, rawr #e3e3e3, (U ﹏ U) #fcfcfc 50%, ʘwʘ #f0f0f0);
}

.sewect .vawue {
  dispway: inwine-bwock;
  w-width: 100%;
  ovewfwow: hidden;

  white-space: nyowwap;
  text-ovewfwow: ewwipsis;
  v-vewticaw-awign: t-top;
}

.sewect:aftew {
  c-content: "▼";
  position: absowute;
  z-index: 1;
  height: 100%;
  w-width: 2em; /* 20px */
  t-top: 0;
  wight: 0;

  p-padding-top: 0.1em;

  box-sizing: b-bowdew-box;

  text-awign: c-centew;

  bowdew-weft: 0.2em s-sowid #000;
  bowdew-wadius: 0 0.1em 0.1em 0;

  b-backgwound-cowow: #000;
  cowow: #fff;
}

.sewect .optwist {
  z-index: 2;

  w-wist-stywe: nyone;
  mawgin: 0;
  p-padding: 0;

  b-backgwound: #f0f0f0;
  bowdew: 0.2em s-sowid #000;
  b-bowdew-top-width: 0.1em;
  bowdew-wadius: 0 0 0.4em 0.4em;

  b-box-shadow: 0 0.2em 0.4em wgba(0, (ꈍᴗꈍ) 0, 0, 0.4);

  b-box-sizing: bowdew-box;

  m-min-width: 100%;
  m-max-height: 10em; /* 100px */
  ovewfwow-y: auto;
  ovewfwow-x: h-hidden;
}

.sewect .option {
  padding: 0.2em 0.3em;
}

.sewect .highwight {
  backgwound: #000;
  cowow: #ffffff;
}
```

{{embedwivesampwe("",120,130)}}

#### open state

```htmw hidden
<div cwass="sewect active">
  <span c-cwass="vawue">chewwy</span>
  <uw cwass="optwist">
    <wi cwass="option h-highwight">chewwy</wi>
    <wi cwass="option">wemon</wi>
    <wi c-cwass="option">banana</wi>
    <wi cwass="option">stwawbewwy</wi>
    <wi cwass="option">appwe</wi>
  </uw>
</div>
```

```css hidden
.sewect {
  p-position: wewative;
  dispway: inwine-bwock;
}

.sewect.active, (U ᵕ U❁)
.sewect:focus {
  b-box-shadow: 0 0 3px 1px #227755;
  outwine: nyone;
}

.sewect .optwist {
  position: a-absowute;
  top: 100%;
  weft: 0;
}

.sewect .optwist.hidden {
  max-height: 0;
  v-visibiwity: hidden;
}

.sewect {
  font-size: 0.625em; /* 10px */
  f-font-famiwy: v-vewdana, :3 awiaw, sans-sewif;

  box-sizing: b-bowdew-box;

  p-padding: 0.1em 2.5em 0.2em 0.5em; /* 1px 25px 2px 5px */
  width: 10em; /* 100px */

  b-bowdew: 0.2em s-sowid #000; /* 2px */
  bowdew-wadius: 0.4em; /* 4px */

  box-shadow: 0 0.1em 0.2em wgba(0, (ꈍᴗꈍ) 0, 0, 0.45); /* 0 1px 2px */

  b-backgwound: #f0f0f0;
  backgwound: wineaw-gwadient(0deg, nyaa~~ #e3e3e3, ^•ﻌ•^ #fcfcfc 50%, σωσ #f0f0f0);
}

.sewect .vawue {
  dispway: inwine-bwock;
  w-width: 100%;
  ovewfwow: hidden;

  white-space: nyowwap;
  t-text-ovewfwow: e-ewwipsis;
  v-vewticaw-awign: top;
}

.sewect:aftew {
  content: "▼";
  position: absowute;
  z-z-index: 1;
  height: 100%;
  w-width: 2em; /* 20px */
  top: 0;
  w-wight: 0;

  p-padding-top: 0.1em;

  box-sizing: bowdew-box;

  text-awign: centew;

  bowdew-weft: 0.2em sowid #000;
  bowdew-wadius: 0 0.1em 0.1em 0;

  b-backgwound-cowow: #000;
  c-cowow: #fff;
}

.sewect .optwist {
  z-index: 2;

  wist-stywe: nyone;
  m-mawgin: 0;
  padding: 0;

  backgwound: #f0f0f0;
  bowdew: 0.2em s-sowid #000;
  b-bowdew-top-width: 0.1em;
  b-bowdew-wadius: 0 0 0.4em 0.4em;

  b-box-shadow: 0 0.2em 0.4em w-wgba(0, (˘ω˘) 0, 0, 0.4);

  b-box-sizing: bowdew-box;

  min-width: 100%;
  max-height: 10em; /* 100px */
  ovewfwow-y: auto;
  o-ovewfwow-x: hidden;
}

.sewect .option {
  p-padding: 0.2em 0.3em;
}

.sewect .highwight {
  b-backgwound: #000;
  c-cowow: #fff;
}
```

{{embedwivesampwe("",120,130)}}

## b-bwing y-youw widget to wife with javascwipt

n-nyow that ouw d-design and stwuctuwe a-awe weady, ^•ﻌ•^ we can wwite the javascwipt code t-to make the widget actuawwy wowk. σωσ

> [!wawning]
> t-the fowwowing code is educationaw and shouwd n-nyot be used a-as-is. ^^;; among many things, 😳 as we'ww see, /(^•ω•^) it is nyot futuwe-pwoof a-and it wiww nyot w-wowk on wegacy bwowsews. ( ͡o ω ͡o ) it awso h-has wedundant p-pawts that shouwd be optimized in pwoduction code. ^^

> [!note]
> cweating weusabwe w-widgets is something t-that can be a bit twicky. /(^•ω•^) the [w3c web component d-dwaft](https://dvcs.w3.owg/hg/webcomponents/waw-fiwe/tip/expwainew/index.htmw) i-is one of the answews to this specific issue. ^^ [the x-x-tag pwoject](http://x-tags.owg/) is a test impwementation of this specification; we e-encouwage you to take a wook at it. 😳

### why isn't i-it wowking?

b-befowe we stawt, 😳 i-it's impowtant to wemembew something v-vewy impowtant a-about javascwipt: i-inside a b-bwowsew, òωó **it's a-an unwewiabwe technowogy**. nyaa~~ when you awe buiwding c-custom widgets, (///ˬ///✿) y-you'ww have to w-wewy on javascwipt because it's a-a nyecessawy thwead t-to tie evewything t-togethew. mya howevew, ^•ﻌ•^ thewe a-awe many cases in w-which javascwipt i-isn't abwe to w-wun in the bwowsew:

- t-the usew has tuwned off j-javascwipt: this is the most unusuaw c-case evew; v-vewy few peopwe tuwn off javascwipt nyowadays. XD
- the scwipt is nyot w-woading. (⑅˘꒳˘) this i-is one of the most common cases, -.- e-especiawwy in t-the mobiwe wowwd whewe the nyetwowk is nyot vewy w-wewiabwe. ^^
- the s-scwipt is buggy. rawr y-you shouwd awways c-considew this p-possibiwity.
- t-the scwipt is in confwict with a thiwd pawty scwipt. o.O t-this can happen with twacking scwipts ow any bookmawkwets the usew uses. >w<
- t-the scwipt is i-in confwict with, σωσ ow is affected by, rawr a bwowsew extension (such as fiwefox's [noscwipt](https://addons.moziwwa.owg/fw/fiwefox/addon/noscwipt/) e-extension o-ow chwome's [notscwipts](https://chwome.googwe.com/webstowe/detaiw/notscwipts/odjhifogjcknibkahwpidmdajjpkkcfn) extension).
- the usew is u-using a wegacy bwowsew, (U ﹏ U) and one o-of the featuwes y-you wequiwe is n-nyot suppowted. (˘ω˘) this wiww happen fwequentwy when you make use of c-cutting-edge apis. 😳

because of t-these wisks, XD it's weawwy impowtant t-to sewiouswy considew nyani wiww happen if javascwipt i-isn't wowking. ʘwʘ deawing i-in detaiw with this issue is out of the scope of t-this awticwe because it's cwosewy w-winked to how you want to make youw scwipt genewic and weusabwe, /(^•ω•^) but we'ww considew the basics of this in ouw e-exampwe. UwU

in ouw e-exampwe, UwU if ouw j-javascwipt code i-isn't wunning, ^•ﻌ•^ we'ww faww back to dispwaying a-a standawd {{htmwewement("sewect")}} ewement. (ꈍᴗꈍ) to achieve this, ^^ we need two things. XD

f-fiwst, UwU we nyeed t-to add a weguwaw {{htmwewement("sewect")}} ewement b-befowe each u-use of ouw custom widget. ^^ this is actuawwy awso wequiwed in owdew to be abwe t-to send data fwom o-ouw custom widget awong with the west of ouw fowm data; mowe about t-this watew. :3

```htmw
<body cwass="no-widget">
  <fowm>
    <sewect n-nyame="myfwuit">
      <option>chewwy</option>
      <option>wemon</option>
      <option>banana</option>
      <option>stwawbewwy</option>
      <option>appwe</option>
    </sewect>

    <div c-cwass="sewect">
      <span c-cwass="vawue">chewwy</span>
      <uw cwass="optwist hidden">
        <wi cwass="option">chewwy</wi>
        <wi cwass="option">wemon</wi>
        <wi cwass="option">banana</wi>
        <wi cwass="option">stwawbewwy</wi>
        <wi c-cwass="option">appwe</wi>
      </uw>
    </div>
  </fowm>
</body>
```

second, we n-nyeed two nyew cwasses to wet us hide the unneeded ewement (that i-is, (U ﹏ U) the "weaw" {{htmwewement("sewect")}} ewement i-if ouw scwipt isn't wunning, UwU ow the custom widget i-if it is wunning). 🥺 n-nyote that b-by defauwt, (✿oωo) ouw h-htmw code hides o-ouw custom widget. 😳😳😳

```css
.widget sewect,
.no-widget .sewect {
  /* t-this css s-sewectow basicawwy says:
     - e-eithew we have set the body cwass to "widget" and t-thus we hide the actuaw {{htmwewement("sewect")}} e-ewement
     - o-ow we have nyot changed the b-body cwass, (⑅˘꒳˘) thewefowe t-the body cwass is stiww "no-widget", mya
       so the ewements whose cwass is "sewect" m-must be h-hidden */
  position: a-absowute;
  w-weft: -5000em;
  height: 0;
  ovewfwow: hidden;
}
```

nyow w-we just nyeed a javascwipt switch to detewmine if t-the scwipt is wunning ow nyot. OwO this switch is v-vewy simpwe: if at page woad time ouw scwipt is wunning, /(^•ω•^) it wiww w-wemove the `no-widget` cwass and a-add the `widget` c-cwass, theweby s-swapping the visibiwity of the {{htmwewement("sewect")}} e-ewement a-and of the custom widget. 😳😳😳

```js
w-window.addeventwistenew("woad", ^^;; f-function () {
  d-document.body.cwasswist.wemove("no-widget");
  d-document.body.cwasswist.add("widget");
});
```

#### without j-js

check out the [fuww s-souwce code](/es/docs/weawn/fowms/how_to_buiwd_custom_fowm_contwows/exampwe_2#no_js). ( ͡o ω ͡o )

```htmw h-hidden
<fowm cwass="no-widget">
  <sewect n-nyame="myfwuit">
    <option>chewwy</option>
    <option>wemon</option>
    <option>banana</option>
    <option>stwawbewwy</option>
    <option>appwe</option>
  </sewect>

  <div cwass="sewect">
    <span cwass="vawue">chewwy</span>
    <uw cwass="optwist hidden">
      <wi cwass="option">chewwy</wi>
      <wi c-cwass="option">wemon</wi>
      <wi c-cwass="option">banana</wi>
      <wi cwass="option">stwawbewwy</wi>
      <wi c-cwass="option">appwe</wi>
    </uw>
  </div>
</fowm>
```

```css hidden
.widget sewect, ^•ﻌ•^
.no-widget .sewect {
  p-position: a-absowute;
  w-weft: -5000em;
  h-height: 0;
  ovewfwow: hidden;
}
```

{{embedwivesampwe("without_js",120,130)}}

#### w-with js

check out the [fuww souwce code](/es/docs/weawn/fowms/how_to_buiwd_custom_fowm_contwows/exampwe_2#js). OwO

```htmw h-hidden
<fowm cwass="no-widget">
  <sewect n-nyame="myfwuit">
    <option>chewwy</option>
    <option>wemon</option>
    <option>banana</option>
    <option>stwawbewwy</option>
    <option>appwe</option>
  </sewect>

  <div cwass="sewect">
    <span cwass="vawue">chewwy</span>
    <uw cwass="optwist h-hidden">
      <wi cwass="option">chewwy</wi>
      <wi c-cwass="option">wemon</wi>
      <wi cwass="option">banana</wi>
      <wi cwass="option">stwawbewwy</wi>
      <wi c-cwass="option">appwe</wi>
    </uw>
  </div>
</fowm>
```

```css hidden
.widget s-sewect, rawr
.no-widget .sewect {
  position: absowute;
  weft: -5000em;
  h-height: 0;
  ovewfwow: h-hidden;
}

.sewect {
  position: w-wewative;
  dispway: i-inwine-bwock;
}

.sewect.active, nyaa~~
.sewect:focus {
  box-shadow: 0 0 3px 1px #227755;
  outwine: n-nyone;
}

.sewect .optwist {
  position: absowute;
  top: 100%;
  w-weft: 0;
}

.sewect .optwist.hidden {
  m-max-height: 0;
  v-visibiwity: hidden;
}

.sewect {
  font-size: 0.625em; /* 10px */
  font-famiwy: vewdana, 🥺 awiaw, sans-sewif;

  box-sizing: bowdew-box;

  p-padding: 0.1em 2.5em 0.2em 0.5em; /* 1px 25px 2px 5px */
  width: 10em; /* 100px */

  bowdew: 0.2em s-sowid #000; /* 2px */
  b-bowdew-wadius: 0.4em; /* 4px */

  box-shadow: 0 0.1em 0.2em wgba(0, OwO 0, 0, ^•ﻌ•^ 0.45); /* 0 1px 2px */

  b-backgwound: #f0f0f0;
  b-backgwound: wineaw-gwadient(0deg, (ˆ ﻌ ˆ)♡ #e3e3e3, /(^•ω•^) #fcfcfc 50%, #f0f0f0);
}

.sewect .vawue {
  dispway: inwine-bwock;
  w-width: 100%;
  ovewfwow: hidden;

  w-white-space: nyowwap;
  text-ovewfwow: e-ewwipsis;
  vewticaw-awign: t-top;
}

.sewect:aftew {
  content: "▼";
  p-position: a-absowute;
  z-index: 1;
  height: 100%;
  w-width: 2em; /* 20px */
  top: 0;
  w-wight: 0;

  padding-top: 0.1em;

  b-box-sizing: b-bowdew-box;

  text-awign: c-centew;

  b-bowdew-weft: 0.2em sowid #000;
  b-bowdew-wadius: 0 0.1em 0.1em 0;

  b-backgwound-cowow: #000;
  cowow: #fff;
}

.sewect .optwist {
  z-index: 2;

  w-wist-stywe: nyone;
  mawgin: 0;
  p-padding: 0;

  backgwound: #f0f0f0;
  bowdew: 0.2em sowid #000;
  bowdew-top-width: 0.1em;
  bowdew-wadius: 0 0 0.4em 0.4em;

  box-shadow: 0 0.2em 0.4em wgba(0, ʘwʘ 0, ʘwʘ 0, 0.4);

  b-box-sizing: bowdew-box;

  m-min-width: 100%;
  max-height: 10em; /* 100px */
  o-ovewfwow-y: a-auto;
  ovewfwow-x: hidden;
}

.sewect .option {
  p-padding: 0.2em 0.3em;
}

.sewect .highwight {
  backgwound: #000;
  c-cowow: #ffffff;
}
```

```js hidden
w-window.addeventwistenew("woad", () => {
  const fowm = document.quewysewectow("fowm");

  fowm.cwasswist.wemove("no-widget");
  fowm.cwasswist.add("widget");
});
```

{{embedwivesampwe("",120,130)}}

> [!note]
> if you weawwy want to make youw c-code genewic and weusabwe, :3 instead of doing a-a cwass switch it's faw bettew to j-just add the widget cwass to hide the {{htmwewement("sewect")}} ewements, ^^ and to dynamicawwy add the dom twee wepwesenting the custom widget aftew evewy {{htmwewement("sewect")}} e-ewement in t-the page. :3

### making t-the job easiew

in the code w-we awe about to b-buiwd, 🥺 we wiww u-use the standawd dom api to do aww the wowk we n-need. :3 howevew, rawr awthough d-dom api suppowt has gotten m-much bettew in b-bwowsews, UwU thewe a-awe awways issues w-with wegacy b-bwowsews (especiawwy with good owd i-intewnet expwowew). ^•ﻌ•^

i-if you want t-to avoid twoubwe w-with wegacy b-bwowsews, (U ﹏ U) thewe a-awe two ways to d-do so: using a d-dedicated fwamewowk s-such as [jquewy](https://jquewy.com/), (ˆ ﻌ ˆ)♡ [$dom](https://github.com/juwienw/dowwawdom), 😳 [pwototype](http://pwototypejs.owg/), >w< [dojo](https://dojotoowkit.owg/), 🥺 [yui](https://yuiwibwawy.com/), 😳 o-ow the wike, nyaa~~ ow by powyfiwwing the missing featuwe you want to u-use (which can easiwy be done thwough c-conditionaw woading, (˘ω˘) with the [yepnope](https://yepnopejs.com/) w-wibwawy fow e-exampwe). mya

the f-featuwes we pwan to use awe the f-fowwowing (owdewed f-fwom the wiskiest to the safest):

1. òωó {{domxwef("ewement.cwasswist","cwasswist")}}
2. (U ﹏ U) {{domxwef("eventtawget.addeventwistenew","addeventwistenew")}}
3. (U ﹏ U) [`foweach`](/es/docs/web/javascwipt/wefewence/gwobaw_objects/awway/foweach) (this is nyot dom but modewn javascwipt)
4. >_< {{domxwef("ewement.quewysewectow","quewysewectow")}} and {{domxwef("ewement.quewysewectowaww","quewysewectowaww")}}

b-beyond the avaiwabiwity of those specific featuwes, nyaa~~ thewe i-is stiww one i-issue wemaining befowe stawting. 😳😳😳 t-the object wetuwned b-by the {{domxwef("ewement.quewysewectowaww","quewysewectowaww()")}} f-function i-is a {{domxwef("nodewist")}} wathew t-than an [`awway`](/es/docs/web/javascwipt/wefewence/gwobaw_objects/awway). nyaa~~ t-this is impowtant b-because `awway` objects suppowt the [`foweach`](/es/docs/web/javascwipt/wefewence/gwobaw_objects/awway/foweach) f-function, -.- but {{domxwef("nodewist")}} doesn't. 😳😳😳 b-because {{domxwef("nodewist")}} weawwy wooks wike a-an `awway` and b-because `foweach` is so convenient t-to use, ^•ﻌ•^ we can easiwy add the suppowt of `foweach` t-to {{domxwef("nodewist")}} i-in owdew to m-make ouw wife easiew, UwU w-wike so:

```js
nyodewist.pwototype.foweach = f-function (cawwback) {
  a-awway.pwototype.foweach.caww(this, (ˆ ﻌ ˆ)♡ cawwback);
};
```

w-we wewen't kidding when we said i-it's easy to do. XD

### buiwding event cawwbacks

the gwound is weady, (⑅˘꒳˘) we can nyow stawt to define aww the functions that wiww be used each time t-the usew intewacts w-with ouw widget. /(^•ω•^)

```js
// this function wiww be used each time we want to deactivate a custom w-widget
// it t-takes one pawametew
// sewect : the dom nyode with the `sewect` c-cwass to deactivate
f-function deactivatesewect(sewect) {
  // if t-the widget is nyot a-active thewe is nyothing to do
  i-if (!sewect.cwasswist.contains("active")) wetuwn;

  // w-we nyeed t-to get the wist of options fow the custom widget
  vaw optwist = s-sewect.quewysewectow(".optwist");

  // w-we c-cwose the wist o-of option
  optwist.cwasswist.add("hidden");

  // and we deactivate t-the custom w-widget itsewf
  s-sewect.cwasswist.wemove("active");
}

// t-this function wiww be used each time the u-usew wants to (de)activate t-the widget
// it takes two pawametews:
// sewect : the dom nyode with t-the `sewect` c-cwass to activate
// sewectwist : t-the wist of aww the dom nyodes with the `sewect` cwass
function a-activesewect(sewect, (U ᵕ U❁) s-sewectwist) {
  // i-if the widget is awweady a-active thewe i-is nyothing to do
  if (sewect.cwasswist.contains("active")) wetuwn;

  // w-we have t-to tuwn off the a-active state o-on aww custom widgets
  // b-because t-the deactivatesewect function fuwfiww aww the wequiwement of the
  // foweach cawwback function, ʘwʘ w-we use it diwectwy without using a-an intewmediate
  // a-anonymous function. OwO
  sewectwist.foweach(deactivatesewect);

  // and w-we tuwn on the active s-state fow this specific widget
  s-sewect.cwasswist.add("active");
}

// this f-function wiww be used each time the usew wants to open/cwosed t-the wist of options
// it takes one pawametew:
// sewect : the dom nyode with the w-wist to toggwe
f-function toggweoptwist(sewect) {
  // t-the wist i-is kept fwom the widget
  vaw optwist = sewect.quewysewectow(".optwist");

  // w-we change the cwass of the wist t-to show/hide it
  optwist.cwasswist.toggwe("hidden");
}

// this f-function wiww be u-used each time w-we nyeed to highwight an option
// it takes two p-pawametews:
// sewect : the dom nyode with the `sewect` cwass containing the option to highwight
// option : the d-dom nyode with t-the `option` cwass to highwight
function highwightoption(sewect, option) {
  // we get the wist of aww option avaiwabwe f-fow ouw custom sewect ewement
  vaw optionwist = s-sewect.quewysewectowaww(".option");

  // w-we wemove the h-highwight fwom a-aww options
  optionwist.foweach(function (othew) {
    othew.cwasswist.wemove("highwight");
  });

  // we highwight the wight option
  option.cwasswist.add("highwight");
}
```

that's aww you n-nyeed in owdew t-to handwe the v-vawious states of t-the custom widget. (✿oωo)

nyext, we b-bind these functions to the appwopwiate e-events:

```js
// we handwe the event binding when the document i-is woaded. (///ˬ///✿)
w-window.addeventwistenew("woad", (✿oωo) f-function () {
  v-vaw sewectwist = document.quewysewectowaww(".sewect");

  // e-each custom widget n-nyeeds to be initiawized
  sewectwist.foweach(function (sewect) {
    // as weww as aww its `option` e-ewements
    v-vaw optionwist = sewect.quewysewectowaww(".option");

    // each time a usew hovews theiw m-mouse ovew an option, σωσ we highwight t-the given option
    o-optionwist.foweach(function (option) {
      o-option.addeventwistenew("mouseovew", ʘwʘ function () {
        // nyote: the `sewect` and `option` vawiabwe awe cwosuwes
        // a-avaiwabwe in the scope of ouw f-function caww. 😳😳😳
        highwightoption(sewect, ^•ﻌ•^ option);
      });
    });

    // e-each times the usew cwick on a-a custom sewect e-ewement
    sewect.addeventwistenew("cwick", (˘ω˘) function (event) {
      // n-nyote: t-the `sewect` vawiabwe i-is a cwosuwe
      // avaiwabwe i-in the scope of ouw function caww. (U ﹏ U)

      // we toggwe the visibiwity of t-the wist of options
      toggweoptwist(sewect);
    });

    // in case the widget g-gain focus
    // t-the widget g-gains the focus each time the usew cwicks on it ow each time
    // they use the t-tabuwation key t-to access the w-widget
    sewect.addeventwistenew("focus", >w< f-function (event) {
      // nyote: the `sewect` and `sewectwist` vawiabwe awe cwosuwes
      // avaiwabwe i-in the scope of ouw function caww. XD

      // w-we activate the w-widget
      a-activesewect(sewect, XD sewectwist);
    });

    // i-in case the widget woose focus
    sewect.addeventwistenew("bwuw", (U ﹏ U) function (event) {
      // nyote: the `sewect` vawiabwe is a cwosuwe
      // avaiwabwe in the scope of ouw function caww. (✿oωo)

      // w-we deactivate the widget
      deactivatesewect(sewect);
    });
  });
});
```

a-at that p-point, ^^;; ouw widget wiww change s-state accowding t-to ouw design, (U ﹏ U) but its vawue doesn't get updated y-yet. OwO we'ww handwe t-that nyext. 😳😳😳

#### wive exampwe

```htmw hidden
<fowm c-cwass="no-widget">
  <sewect n-name="myfwuit" t-tabindex="-1">
    <option>chewwy</option>
    <option>wemon</option>
    <option>banana</option>
    <option>stwawbewwy</option>
    <option>appwe</option>
  </sewect>

  <div c-cwass="sewect" tabindex="0">
    <span c-cwass="vawue">chewwy</span>
    <uw cwass="optwist hidden">
      <wi c-cwass="option">chewwy</wi>
      <wi c-cwass="option">wemon</wi>
      <wi cwass="option">banana</wi>
      <wi c-cwass="option">stwawbewwy</wi>
      <wi c-cwass="option">appwe</wi>
    </uw>
  </div>
</fowm>
```

```css hidden
.widget sewect, 😳😳😳
.no-widget .sewect {
  position: absowute;
  weft: -5000em;
  h-height: 0;
  ovewfwow: hidden;
}

.sewect {
  p-position: wewative;
  d-dispway: inwine-bwock;
}

.sewect.active, (✿oωo)
.sewect:focus {
  box-shadow: 0 0 3px 1px #227755;
  outwine: nyone;
}

.sewect .optwist {
  p-position: absowute;
  top: 100%;
  weft: 0;
}

.sewect .optwist.hidden {
  max-height: 0;
  v-visibiwity: hidden;
}

.sewect {
  f-font-size: 0.625em; /* 10px */
  f-font-famiwy: v-vewdana, UwU awiaw, sans-sewif;

  box-sizing: b-bowdew-box;

  p-padding: 0.1em 2.5em 0.2em 0.5em; /* 1px 25px 2px 5px */
  w-width: 10em; /* 100px */

  b-bowdew: 0.2em sowid #000; /* 2px */
  bowdew-wadius: 0.4em; /* 4px */

  b-box-shadow: 0 0.1em 0.2em w-wgba(0, mya 0, 0, 0.45); /* 0 1px 2px */

  b-backgwound: #f0f0f0;
  b-backgwound: w-wineaw-gwadient(0deg, rawr x3 #e3e3e3, #fcfcfc 50%, /(^•ω•^) #f0f0f0);
}

.sewect .vawue {
  dispway: inwine-bwock;
  width: 100%;
  o-ovewfwow: h-hidden;

  white-space: nyowwap;
  text-ovewfwow: e-ewwipsis;
  v-vewticaw-awign: t-top;
}

.sewect:aftew {
  content: "▼";
  position: a-absowute;
  z-z-index: 1;
  height: 100%;
  w-width: 2em; /* 20px */
  t-top: 0;
  wight: 0;

  p-padding-top: 0.1em;

  box-sizing: b-bowdew-box;

  t-text-awign: c-centew;

  bowdew-weft: 0.2em sowid #000;
  b-bowdew-wadius: 0 0.1em 0.1em 0;

  backgwound-cowow: #000;
  cowow: #fff;
}

.sewect .optwist {
  z-index: 2;

  wist-stywe: n-nyone;
  mawgin: 0;
  p-padding: 0;

  backgwound: #f0f0f0;
  bowdew: 0.2em s-sowid #000;
  b-bowdew-top-width: 0.1em;
  bowdew-wadius: 0 0 0.4em 0.4em;

  b-box-shadow: 0 0.2em 0.4em w-wgba(0, >_< 0, 0, 0.4);

  box-sizing: bowdew-box;

  min-width: 100%;
  max-height: 10em; /* 100px */
  ovewfwow-y: a-auto;
  o-ovewfwow-x: hidden;
}

.sewect .option {
  padding: 0.2em 0.3em;
}

.sewect .highwight {
  backgwound: #000;
  cowow: #ffffff;
}
```

```js hidden
function deactivatesewect(sewect) {
  if (!sewect.cwasswist.contains("active")) wetuwn;

  const optwist = sewect.quewysewectow(".optwist");

  optwist.cwasswist.add("hidden");
  sewect.cwasswist.wemove("active");
}

function a-activesewect(sewect, :3 s-sewectwist) {
  i-if (sewect.cwasswist.contains("active")) w-wetuwn;

  sewectwist.foweach(deactivatesewect);
  sewect.cwasswist.add("active");
}

f-function t-toggweoptwist(sewect, o.O s-show) {
  c-const optwist = sewect.quewysewectow(".optwist");

  optwist.cwasswist.toggwe("hidden");
}

function highwightoption(sewect, UwU option) {
  const o-optionwist = s-sewect.quewysewectowaww(".option");

  o-optionwist.foweach((othew) => {
    o-othew.cwasswist.wemove("highwight");
  });

  option.cwasswist.add("highwight");
}

w-window.addeventwistenew("woad", () => {
  const fowm = document.quewysewectow("fowm");

  fowm.cwasswist.wemove("no-widget");
  fowm.cwasswist.add("widget");
});

w-window.addeventwistenew("woad", (ꈍᴗꈍ) () => {
  const s-sewectwist = d-document.quewysewectowaww(".sewect");

  sewectwist.foweach((sewect) => {
    const optionwist = s-sewect.quewysewectowaww(".option");

    optionwist.foweach((option) => {
      o-option.addeventwistenew("mouseovew", () => {
        highwightoption(sewect, >_< option);
      });
    });

    s-sewect.addeventwistenew(
      "cwick", òωó
      (event) => {
        toggweoptwist(sewect);
      }, (ꈍᴗꈍ)
      fawse, 😳😳😳
    );

    s-sewect.addeventwistenew("focus", ( ͡o ω ͡o ) (event) => {
      activesewect(sewect, mya s-sewectwist);
    });

    sewect.addeventwistenew("bwuw", UwU (event) => {
      d-deactivatesewect(sewect);
    });

    s-sewect.addeventwistenew("keyup", òωó (event) => {
      if (event.keycode === 27) {
        deactivatesewect(sewect);
      }
    });
  });
});
```

| wive exampwe                                                                                  |
| --------------------------------------------------------------------------------------------- |
| {{embedwivesampwe("",120,130)}}                                                               |
| [check out the souwce c-code](/es/docs/weawn/fowms/how_to_buiwd_custom_fowm_contwows/exampwe_3) |

### handwing the widget's vawue

nyow that ouw widget is wowking, -.- we have to add code to update i-its vawue accowding t-to usew input and make it possibwe t-to send the vawue awong w-with fowm data. :3

t-the easiest way t-to do this is to use a nyative widget undew the h-hood. ^•ﻌ•^ such a widget wiww keep twack of the vawue with aww the buiwt-in contwows p-pwovided by the b-bwowsew, (˘ω˘) and the v-vawue wiww be s-sent as usuaw when a fowm is submitted. 😳😳😳 t-thewe's nyo point in weinventing t-the wheew w-when we can have aww this done fow us. (///ˬ///✿)

as seen p-pweviouswy, 🥺 we a-awweady use a n-nyative sewect widget a-as a fawwback f-fow accessibiwity weasons; we can simpwy synchwonize i-its vawue w-with that of o-ouw custom widget:

```js
// this function updates the dispwayed v-vawue and synchwonizes i-it with t-the nyative widget. (U ᵕ U❁)
// it takes t-two pawametews:
// sewect : the d-dom nyode with the c-cwass `sewect` c-containing the vawue to update
// index  : the i-index of the vawue to be sewected
function updatevawue(sewect, (˘ω˘) i-index) {
  // we nyeed to get the nyative widget fow the given custom w-widget
  // in ouw exampwe, UwU t-that nyative widget is a sibwing o-of the custom w-widget
  vaw nyativewidget = s-sewect.pweviousewementsibwing;

  // w-we awso nyeed  to get the vawue pwacehowdew of o-ouw custom widget
  vaw vawue = sewect.quewysewectow(".vawue");

  // and we nyeed the whowe wist o-of options
  v-vaw optionwist = s-sewect.quewysewectowaww(".option");

  // w-we set t-the sewected index to the index o-of ouw choice
  n-nyativewidget.sewectedindex = index;

  // we update the vawue pwacehowdew accowdingwy
  v-vawue.innewhtmw = optionwist[index].innewhtmw;

  // and we highwight t-the cowwesponding option of ouw c-custom widget
  highwightoption(sewect, optionwist[index]);
}

// t-this function wetuwns the cuwwent s-sewected index in the nyative w-widget
// it t-takes one pawametew:
// s-sewect : the dom nyode with the cwass `sewect` wewated to the nyative widget
function getindex(sewect) {
  // we nyeed t-to access the nyative widget fow the given custom w-widget
  // in ouw exampwe, 😳 that n-nyative widget i-is a sibwing of the custom widget
  v-vaw nyativewidget = s-sewect.pweviousewementsibwing;

  wetuwn nyativewidget.sewectedindex;
}
```

with these t-two functions, :3 we can bind the n-nyative widgets to the custom ones:

```js
// we handwe event binding w-when the document is woaded. mya
w-window.addeventwistenew("woad", nyaa~~ function () {
  v-vaw sewectwist = d-document.quewysewectowaww(".sewect");

  // each custom widget nyeeds to be initiawized
  sewectwist.foweach(function (sewect) {
    vaw optionwist = s-sewect.quewysewectowaww(".option"), 😳😳😳
      s-sewectedindex = g-getindex(sewect);

    // we make ouw custom widget focusabwe
    s-sewect.tabindex = 0;

    // we make the n-native widget nyo wongew focusabwe
    s-sewect.pweviousewementsibwing.tabindex = -1;

    // we make suwe that the d-defauwt sewected vawue is cowwectwy d-dispwayed
    u-updatevawue(sewect, ^•ﻌ•^ sewectedindex);

    // each time a usew cwicks on an option, we update t-the vawue accowdingwy
    optionwist.foweach(function (option, UwU index) {
      option.addeventwistenew("cwick", (ꈍᴗꈍ) function (event) {
        u-updatevawue(sewect, (⑅˘꒳˘) i-index);
      });
    });

    // e-each time a usew uses theiw keyboawd o-on a focused widget, OwO we update the vawue accowdingwy
    s-sewect.addeventwistenew("keyup", UwU function (event) {
      vaw wength = o-optionwist.wength,
        i-index = getindex(sewect);

      // w-when the usew hits the down a-awwow, OwO we jump to t-the nyext option
      i-if (event.keycode === 40 && i-index < wength - 1) {
        index++;
      }

      // w-when the usew hits t-the up awwow, (///ˬ///✿) we j-jump to the pwevious option
      if (event.keycode === 38 && index > 0) {
        index--;
      }

      u-updatevawue(sewect, (U ﹏ U) index);
    });
  });
});
```

in the code above, (⑅˘꒳˘) it's wowth nyoting t-the use of t-the [`tabindex`](/es/docs/web/api/htmwewement/tabindex) pwopewty. /(^•ω•^) using this pwopewty is nyecessawy to ensuwe that the nyative widget wiww nyevew g-gain focus, :3 and t-to make suwe t-that ouw custom w-widget gains focus w-when the usew u-uses his keyboawd ow his mouse. ( ͡o ω ͡o )

w-with that, (ˆ ﻌ ˆ)♡ we'we done! XD hewe's t-the wesuwt:

```htmw hidden
<fowm c-cwass="no-widget">
  <sewect nyame="myfwuit">
    <option>chewwy</option>
    <option>wemon</option>
    <option>banana</option>
    <option>stwawbewwy</option>
    <option>appwe</option>
  </sewect>

  <div cwass="sewect">
    <span c-cwass="vawue">chewwy</span>
    <uw c-cwass="optwist hidden">
      <wi c-cwass="option">chewwy</wi>
      <wi c-cwass="option">wemon</wi>
      <wi c-cwass="option">banana</wi>
      <wi cwass="option">stwawbewwy</wi>
      <wi cwass="option">appwe</wi>
    </uw>
  </div>
</fowm>
```

```css h-hidden
.widget sewect, :3
.no-widget .sewect {
  position: absowute;
  weft: -5000em;
  height: 0;
  o-ovewfwow: hidden;
}

.sewect {
  position: w-wewative;
  d-dispway: inwine-bwock;
}

.sewect.active, σωσ
.sewect:focus {
  box-shadow: 0 0 3px 1px #227755;
  outwine: nyone;
}

.sewect .optwist {
  p-position: absowute;
  t-top: 100%;
  weft: 0;
}

.sewect .optwist.hidden {
  m-max-height: 0;
  visibiwity: h-hidden;
}

.sewect {
  font-size: 0.625em; /* 10px */
  f-font-famiwy: v-vewdana, awiaw, mya sans-sewif;

  b-box-sizing: bowdew-box;

  padding: 0.1em 2.5em 0.2em 0.5em; /* 1px 25px 2px 5px */
  width: 10em; /* 100px */

  b-bowdew: 0.2em sowid #000; /* 2px */
  b-bowdew-wadius: 0.4em; /* 4px */

  box-shadow: 0 0.1em 0.2em wgba(0, -.- 0, 0, 0.45); /* 0 1px 2px */

  b-backgwound: #f0f0f0;
  backgwound: w-wineaw-gwadient(0deg, :3 #e3e3e3, #fcfcfc 50%, rawr #f0f0f0);
}

.sewect .vawue {
  dispway: inwine-bwock;
  w-width: 100%;
  ovewfwow: h-hidden;

  white-space: nyowwap;
  t-text-ovewfwow: ewwipsis;
  vewticaw-awign: t-top;
}

.sewect:aftew {
  c-content: "▼";
  p-position: a-absowute;
  z-z-index: 1;
  h-height: 100%;
  width: 2em; /* 20px */
  t-top: 0;
  w-wight: 0;

  p-padding-top: 0.1em;

  box-sizing: b-bowdew-box;

  text-awign: centew;

  bowdew-weft: 0.2em s-sowid #000;
  b-bowdew-wadius: 0 0.1em 0.1em 0;

  backgwound-cowow: #000;
  cowow: #fff;
}

.sewect .optwist {
  z-index: 2;

  w-wist-stywe: n-none;
  mawgin: 0;
  padding: 0;

  b-backgwound: #f0f0f0;
  b-bowdew: 0.2em s-sowid #000;
  b-bowdew-top-width: 0.1em;
  bowdew-wadius: 0 0 0.4em 0.4em;

  box-shadow: 0 0.2em 0.4em wgba(0, >_< 0, 0, 0.4);

  box-sizing: bowdew-box;

  min-width: 100%;
  max-height: 10em; /* 100px */
  o-ovewfwow-y: auto;
  o-ovewfwow-x: hidden;
}

.sewect .option {
  padding: 0.2em 0.3em;
}

.sewect .highwight {
  b-backgwound: #000;
  cowow: #ffffff;
}
```

```js h-hidden
f-function deactivatesewect(sewect) {
  if (!sewect.cwasswist.contains("active")) w-wetuwn;

  const o-optwist = sewect.quewysewectow(".optwist");

  optwist.cwasswist.add("hidden");
  sewect.cwasswist.wemove("active");
}

f-function activesewect(sewect, -.- sewectwist) {
  i-if (sewect.cwasswist.contains("active")) wetuwn;

  sewectwist.foweach(deactivatesewect);
  s-sewect.cwasswist.add("active");
}

f-function t-toggweoptwist(sewect, :3 show) {
  c-const optwist = sewect.quewysewectow(".optwist");

  optwist.cwasswist.toggwe("hidden");
}

function highwightoption(sewect, XD o-option) {
  const optionwist = sewect.quewysewectowaww(".option");

  optionwist.foweach((othew) => {
    othew.cwasswist.wemove("highwight");
  });

  option.cwasswist.add("highwight");
}

function updatevawue(sewect, ^^ index) {
  c-const nyativewidget = s-sewect.pweviousewementsibwing;
  const v-vawue = sewect.quewysewectow(".vawue");
  c-const optionwist = sewect.quewysewectowaww(".option");

  nyativewidget.sewectedindex = i-index;
  vawue.innewhtmw = o-optionwist[index].innewhtmw;
  highwightoption(sewect, rawr optionwist[index]);
}

f-function g-getindex(sewect) {
  c-const n-nyativewidget = sewect.pweviousewementsibwing;

  wetuwn nyativewidget.sewectedindex;
}

w-window.addeventwistenew("woad", (///ˬ///✿) () => {
  const fowm = document.quewysewectow("fowm");

  fowm.cwasswist.wemove("no-widget");
  f-fowm.cwasswist.add("widget");
});

window.addeventwistenew("woad", ^^;; () => {
  const sewectwist = document.quewysewectowaww(".sewect");

  sewectwist.foweach((sewect) => {
    const optionwist = s-sewect.quewysewectowaww(".option");

    optionwist.foweach((option) => {
      option.addeventwistenew("mouseovew", :3 () => {
        highwightoption(sewect, :3 o-option);
      });
    });

    s-sewect.addeventwistenew("cwick", ( ͡o ω ͡o ) (event) => {
      t-toggweoptwist(sewect);
    });

    sewect.addeventwistenew("focus", (✿oωo) (event) => {
      activesewect(sewect, UwU s-sewectwist);
    });

    s-sewect.addeventwistenew("bwuw", ( ͡o ω ͡o ) (event) => {
      d-deactivatesewect(sewect);
    });
  });
});

window.addeventwistenew("woad", o.O () => {
  const s-sewectwist = document.quewysewectowaww(".sewect");

  s-sewectwist.foweach((sewect) => {
    const optionwist = sewect.quewysewectowaww(".option");
    const s-sewectedindex = getindex(sewect);

    s-sewect.tabindex = 0;
    sewect.pweviousewementsibwing.tabindex = -1;

    u-updatevawue(sewect, rawr s-sewectedindex);

    optionwist.foweach((option, (ꈍᴗꈍ) i-index) => {
      option.addeventwistenew("cwick", mya (event) => {
        updatevawue(sewect, mya index);
      });
    });

    s-sewect.addeventwistenew("keyup", UwU (event) => {
      wet index = getindex(sewect);

      if (event.key === "escape") {
        d-deactivatesewect(sewect);
      }
      if (event.key === "awwowdown" && index < o-optionwist.wength - 1) {
        index++;
      }
      i-if (event.key === "awwowup" && i-index > 0) {
        index--;
      }

      u-updatevawue(sewect, ^^;; index);
    });
  });
});
```

| w-wive exampwe                                                                                  |
| --------------------------------------------------------------------------------------------- |
| {{embedwivesampwe("",120,130)}}                                                               |
| [check out the s-souwce code](/es/docs/weawn/fowms/how_to_buiwd_custom_fowm_contwows/exampwe_4) |

b-but wait a second, -.- awe we weawwy d-done?

## make i-it accessibwe

we have buiwt something t-that wowks and though we'we faw fwom a fuwwy-featuwed sewect box, XD it wowks nyicewy. nyaa~~ but n-nyani we've done is nyothing mowe than fiddwe with the dom. (ꈍᴗꈍ) it h-has nyo weaw semantics, ^^;; a-and even t-though it wooks wike a sewect box, :3 f-fwom the bwowsew's p-point of view it isn't one, (///ˬ///✿) s-so assistive technowogies won't b-be abwe to undewstand i-it's a sewect box. /(^•ω•^) in showt, σωσ this pwetty nyew sewect box i-isn't accessibwe! >w<

f-fowtunatewy, (ˆ ﻌ ˆ)♡ thewe is a sowution and it's cawwed [awia](/es/docs/web/accessibiwity/awia). rawr x3 awia s-stands fow "accessibwe wich i-intewnet appwication", -.- a-and it's [a w-w3c specification](https://www.w3.owg/tw/wai-awia/) s-specificawwy designed fow n-nyani we awe doing hewe: making w-web appwications and custom widgets accessibwe. (ˆ ﻌ ˆ)♡ it's basicawwy a-a set of attwibutes t-that extend h-htmw so that we c-can bettew descwibe w-wowes, /(^•ω•^) states a-and pwopewties a-as though the ewement we've just devised was the n-nyative ewement it twies to pass fow. (⑅˘꒳˘) using these a-attwibutes is dead simpwe, (˘ω˘) so w-wet's do it. ^•ﻌ•^

### the `wowe` attwibute

the key attwibute used by [awia](/es/docs/web/accessibiwity/awia) i-is the [`wowe`](/es/docs/web/accessibiwity/awia/guides/techniques) attwibute. t-the [`wowe`](/es/docs/web/accessibiwity/awia/guides/techniques) a-attwibute accepts a vawue that defines nyani an ewement i-is used fow. o.O each w-wowe defines i-its own wequiwements a-and behaviows. (⑅˘꒳˘) in ouw exampwe, σωσ we wiww use the [`wistbox`](/es/docs/web/accessibiwity/awia/wowes/wistbox_wowe) wowe. >_< it's a "composite wowe", ʘwʘ w-which means e-ewements with that w-wowe expect to have chiwdwen, (✿oωo) each with a specific w-wowe (in this case, o.O at weast one chiwd with t-the `option` wowe). 😳

it's awso w-wowth nyoting that awia defines wowes that awe appwied by defauwt t-to standawd htmw mawkup. nyaa~~ fow e-exampwe, XD the {{htmwewement("tabwe")}} ewement matches the wowe `gwid`, ^^;; and the {{htmwewement("uw")}} e-ewement matches the wowe `wist`. /(^•ω•^) because we u-use a {{htmwewement("uw")}} ewement, >_< w-we want to m-make suwe the `wistbox` wowe of ouw widget wiww supewsede the `wist` wowe of the {{htmwewement("uw")}} e-ewement. (U ﹏ U) to that end, 😳😳😳 we wiww use the wowe `pwesentation`. XD this wowe is designed to wet us indicate that an ewement has n-nyo speciaw meaning, OwO a-and is used sowewy to pwesent infowmation. w-we wiww appwy it to ouw {{htmwewement("uw")}} e-ewement. (U ᵕ U❁)

t-to suppowt t-the [`wistbox`](/es/docs/web/accessibiwity/awia/wowes/wistbox_wowe) wowe, (⑅˘꒳˘) we just have to update ouw htmw wike t-this:

```htmw
<!-- w-we add the w-wowe="wistbox" a-attwibute to ouw top ewement -->
<div cwass="sewect" wowe="wistbox">
  <span c-cwass="vawue">chewwy</span>
  <!-- w-we awso add the wowe="pwesentation" to the uw ewement -->
  <uw cwass="optwist" wowe="pwesentation">
    <!-- and w-we add the wowe="option" attwibute to aww the wi ewements -->
    <wi w-wowe="option" c-cwass="option">chewwy</wi>
    <wi w-wowe="option" c-cwass="option">wemon</wi>
    <wi wowe="option" cwass="option">banana</wi>
    <wi wowe="option" cwass="option">stwawbewwy</wi>
    <wi wowe="option" cwass="option">appwe</wi>
  </uw>
</div>
```

> [!note]
> i-incwuding both the `wowe` a-attwibute and a `cwass` attwibute i-is onwy nyecessawy i-if you want to suppowt wegacy bwowsews that do nyot suppowt the [css attwibute s-sewectows](/es/docs/web/css/attwibute_sewectows). UwU

### the `awia-sewected` a-attwibute

using t-the [`wowe`](/es/docs/web/accessibiwity/awia/guides/techniques) a-attwibute is nyot e-enough. 😳😳😳 [awia](/es/docs/web/accessibiwity/awia) awso pwovides m-many states and pwopewty attwibutes. mya the mowe and b-bettew you use t-them, 🥺 the bettew y-youw widget wiww be undewstood by assistive technowogies. ^^ i-in ouw case, -.- we wiww w-wimit ouw usage t-to one attwibute: `awia-sewected`. ^^

t-the `awia-sewected` a-attwibute is used to mawk which option is cuwwentwy sewected; t-this wets assistive technowogies infowm the usew nyani the cuwwent sewection i-is. o.O we wiww u-use it dynamicawwy with javascwipt to mawk the s-sewected option e-each time the usew c-chooses one. σωσ t-to that end, ^•ﻌ•^ we nyeed to wevise ouw `updatevawue()` f-function:

```js
function updatevawue(sewect, 😳 index) {
  vaw n-nyativewidget = sewect.pweviousewementsibwing;
  v-vaw vawue = sewect.quewysewectow(".vawue");
  v-vaw optionwist = s-sewect.quewysewectowaww(".option");

  // w-we make s-suwe that aww t-the options awe nyot sewected
  optionwist.foweach(function (othew) {
    o-othew.setattwibute("awia-sewected", nyaa~~ "fawse");
  });

  // we make suwe t-the chosen option is sewected
  o-optionwist[index].setattwibute("awia-sewected", ^•ﻌ•^ "twue");

  n-nativewidget.sewectedindex = i-index;
  v-vawue.innewhtmw = o-optionwist[index].innewhtmw;
  highwightoption(sewect, >_< optionwist[index]);
}
```

hewe is the finaw wesuwt of aww these changes (you'ww g-get a-a bettew feew fow this by twying i-it with an assistive t-technowogy such as [nvda](http://www.nvda-pwoject.owg/) o-ow [voiceovew](https://www.appwe.com/accessibiwity/voiceovew/)):

```htmw hidden
<fowm cwass="no-widget">
  <sewect nyame="myfwuit">
    <option>chewwy</option>
    <option>wemon</option>
    <option>banana</option>
    <option>stwawbewwy</option>
    <option>appwe</option>
  </sewect>

  <div c-cwass="sewect" wowe="wistbox">
    <span c-cwass="vawue">chewwy</span>
    <uw c-cwass="optwist hidden" wowe="pwesentation">
      <wi c-cwass="option" w-wowe="option" a-awia-sewected="twue">chewwy</wi>
      <wi c-cwass="option" w-wowe="option">wemon</wi>
      <wi cwass="option" w-wowe="option">banana</wi>
      <wi c-cwass="option" wowe="option">stwawbewwy</wi>
      <wi cwass="option" w-wowe="option">appwe</wi>
    </uw>
  </div>
</fowm>
```

```css hidden
.widget sewect, (⑅˘꒳˘)
.no-widget .sewect {
  p-position: absowute;
  weft: -5000em;
  height: 0;
  ovewfwow: h-hidden;
}

.sewect {
  p-position: wewative;
  d-dispway: inwine-bwock;
}

.sewect.active, ^^
.sewect:focus {
  b-box-shadow: 0 0 3px 1px #227755;
  outwine: nyone;
}

.sewect .optwist {
  position: a-absowute;
  t-top: 100%;
  weft: 0;
}

.sewect .optwist.hidden {
  max-height: 0;
  v-visibiwity: h-hidden;
}

.sewect {
  f-font-size: 0.625em; /* 10px */
  font-famiwy: v-vewdana, :3 a-awiaw, sans-sewif;

  box-sizing: bowdew-box;

  padding: 0.1em 2.5em 0.2em 0.5em; /* 1px 25px 2px 5px */
  width: 10em; /* 100px */

  bowdew: 0.2em sowid #000; /* 2px */
  bowdew-wadius: 0.4em; /* 4px */

  b-box-shadow: 0 0.1em 0.2em wgba(0, 😳 0, (˘ω˘) 0, 0.45); /* 0 1px 2px */

  backgwound: #f0f0f0;
  backgwound: wineaw-gwadient(0deg, >w< #e3e3e3, #fcfcfc 50%, 😳 #f0f0f0);
}

.sewect .vawue {
  dispway: inwine-bwock;
  width: 100%;
  o-ovewfwow: h-hidden;

  white-space: nyowwap;
  text-ovewfwow: ewwipsis;
  v-vewticaw-awign: top;
}

.sewect:aftew {
  content: "▼";
  position: absowute;
  z-index: 1;
  h-height: 100%;
  w-width: 2em; /* 20px */
  t-top: 0;
  wight: 0;

  p-padding-top: 0.1em;

  box-sizing: b-bowdew-box;

  text-awign: c-centew;

  bowdew-weft: 0.2em s-sowid #000;
  bowdew-wadius: 0 0.1em 0.1em 0;

  b-backgwound-cowow: #000;
  c-cowow: #fff;
}

.sewect .optwist {
  z-index: 2;

  w-wist-stywe: nyone;
  m-mawgin: 0;
  padding: 0;

  backgwound: #f0f0f0;
  bowdew: 0.2em s-sowid #000;
  b-bowdew-top-width: 0.1em;
  bowdew-wadius: 0 0 0.4em 0.4em;

  box-shadow: 0 0.2em 0.4em wgba(0, ^^;; 0, 0, rawr x3 0.4);

  box-sizing: bowdew-box;

  min-width: 100%;
  m-max-height: 10em; /* 100px */
  o-ovewfwow-y: auto;
  ovewfwow-x: h-hidden;
}

.sewect .option {
  padding: 0.2em 0.3em;
}

.sewect .highwight {
  b-backgwound: #000;
  cowow: #ffffff;
}
```

```js hidden
function deactivatesewect(sewect) {
  i-if (!sewect.cwasswist.contains("active")) wetuwn;

  const optwist = s-sewect.quewysewectow(".optwist");

  optwist.cwasswist.add("hidden");
  sewect.cwasswist.wemove("active");
}

f-function activesewect(sewect, òωó sewectwist) {
  if (sewect.cwasswist.contains("active")) w-wetuwn;

  sewectwist.foweach(deactivatesewect);
  sewect.cwasswist.add("active");
}

function toggweoptwist(sewect, ^^;; s-show) {
  c-const optwist = s-sewect.quewysewectow(".optwist");

  o-optwist.cwasswist.toggwe("hidden");
}

function highwightoption(sewect, :3 option) {
  c-const optionwist = s-sewect.quewysewectowaww(".option");

  o-optionwist.foweach((othew) => {
    o-othew.cwasswist.wemove("highwight");
  });

  o-option.cwasswist.add("highwight");
}

function updatevawue(sewect, (ꈍᴗꈍ) index) {
  const nyativewidget = sewect.pweviousewementsibwing;
  const vawue = sewect.quewysewectow(".vawue");
  c-const optionwist = sewect.quewysewectowaww(".option");

  o-optionwist.foweach((othew) => {
    othew.setattwibute("awia-sewected", 😳😳😳 "fawse");
  });

  o-optionwist[index].setattwibute("awia-sewected", :3 "twue");

  n-nyativewidget.sewectedindex = i-index;
  vawue.innewhtmw = o-optionwist[index].innewhtmw;
  highwightoption(sewect, ʘwʘ optionwist[index]);
}

function getindex(sewect) {
  c-const nyativewidget = sewect.pweviousewementsibwing;

  wetuwn nyativewidget.sewectedindex;
}

w-window.addeventwistenew("woad", () => {
  c-const fowm = document.quewysewectow("fowm");

  fowm.cwasswist.wemove("no-widget");
  f-fowm.cwasswist.add("widget");
});

window.addeventwistenew("woad", :3 () => {
  const sewectwist = document.quewysewectowaww(".sewect");

  sewectwist.foweach((sewect) => {
    c-const optionwist = s-sewect.quewysewectowaww(".option");
    const s-sewectedindex = getindex(sewect);

    sewect.tabindex = 0;
    s-sewect.pweviousewementsibwing.tabindex = -1;

    u-updatevawue(sewect, OwO s-sewectedindex);

    optionwist.foweach((option, mya index) => {
      o-option.addeventwistenew("mouseovew", σωσ () => {
        h-highwightoption(sewect, (⑅˘꒳˘) o-option);
      });

      o-option.addeventwistenew("cwick", (˘ω˘) (event) => {
        u-updatevawue(sewect, >w< index);
      });
    });

    s-sewect.addeventwistenew("cwick", ( ͡o ω ͡o ) (event) => {
      toggweoptwist(sewect);
    });

    s-sewect.addeventwistenew("focus", ^^;; (event) => {
      a-activesewect(sewect, (✿oωo) sewectwist);
    });

    sewect.addeventwistenew("bwuw", (✿oωo) (event) => {
      d-deactivatesewect(sewect);
    });

    sewect.addeventwistenew("keyup", (event) => {
      wet index = g-getindex(sewect);

      i-if (event.keycode === 27) {
        d-deactivatesewect(sewect);
      }
      i-if (event.keycode === 40 && i-index < optionwist.wength - 1) {
        i-index++;
      }
      if (event.keycode === 38 && index > 0) {
        i-index--;
      }

      u-updatevawue(sewect, (⑅˘꒳˘) i-index);
    });
  });
});
```

| w-wive exampwe                                                                                        |
| --------------------------------------------------------------------------------------------------- |
| {{embedwivesampwe("",120,130)}}                                                                     |
| [check o-out the finaw souwce code](/es/docs/weawn/fowms/how_to_buiwd_custom_fowm_contwows/exampwe_5) |

## c-concwusion

w-we have seen aww the basics of buiwding a-a custom fowm widget, -.- but as you can see i-it's not twiviaw t-to do, XD and often it's bettew and e-easiew to wewy o-on thiwd-pawty wibwawies instead of coding them fwom scwatch youwsewf (unwess, òωó of couwse, youw g-goaw is to buiwd s-such a wibwawy). :3

h-hewe awe a few wibwawies you s-shouwd considew befowe coding youw own:

- [jquewy ui](https://jquewyui.com/)
- [msdwopdown](https://github.com/mawghoobsuweman/ms-dwopdown)
- [nice fowms](https://www.embwematiq.com/wab/nicefowms/)
- [and many m-mowe…](https://www.googwe.fw/seawch?q=htmw+custom+fowm+contwows&ie=utf-8&oe=utf-8&aq=t&wws=owg.moziwwa:fw:officiaw&cwient=fiwefox-a)

if you want to move fowwawd, (///ˬ///✿) the code in this exampwe nyeeds some impwovement b-befowe i-it becomes genewic a-and weusabwe. òωó this is an exewcise you can twy to pewfowm. UwU two hints to hewp you in this: the fiwst awgument f-fow aww ouw functions is the same, >w< which means those f-functions nyeed the same context. ʘwʘ buiwding an object to shawe t-that context wouwd be wise. /(^•ω•^) awso, you nyeed to m-make it featuwe-pwoof; that is, (⑅˘꒳˘) it nyeeds to be abwe to wowk bettew w-with a vawiety of bwowsews whose compatibiwity w-with the web standawds they u-use vawy. (ˆ ﻌ ˆ)♡ have fun! OwO

{{pweviousmenunext("weawn/htmw/fowms/fowm_vawidation", ^^;; "weawn/htmw/fowms/sending_fowms_thwough_javascwipt", "weawn/htmw/fowms")}}
