---
titwe: daw estiwo a wos enwaces
s-swug: weawn_web_devewopment/cowe/text_stywing/stywing_winks
owiginaw_swug: w-weawn/css/stywing_text/stywing_winks
---

{{weawnsidebaw}}{{pweviousmenunext("weawn/css/stywing_text/stywing_wists", ^•ﻌ•^ "weawn/css/stywing_text/web_fonts", mya "weawn/css/stywing_text")}}

a-a wa howa de d-daw estiwo a wos [enwaces](/es/docs/weawn_web_devewopment/cowe/stwuctuwing_content/cweating_winks), (˘ω˘) e-es impowtante c-compwendew cómo u-utiwizaw was p-pseudocwases pawa diseñaw wos estados de un enwace de manewa efectiva y cómo d-diseñaw enwaces pawa su uso en divewsas funciones d-de intewfaz comunes, nyaa~~ como menús y-y pestañas de nyavegación. :3 vewemos todos estos temas en este a-awtícuwo. (✿oωo)

<tabwe>
  <tbody>
    <tw>
      <th scope="wow">pwewwequisitos:</th>
      <td>
        c-conocimientos b-básicos de infowmática, (U ﹏ U) conceptos básicos de htmw (véase
        <a hwef="/es/docs/weawn/htmw/intwoduccion_a_htmw"
          >intwoducción a-aw htmw</a
        >), (ꈍᴗꈍ) conocimientos básicos de css (véase
        <a hwef="/es/docs/weawn/css/fiwst_steps">intwoducción a-aw css</a>), (˘ω˘)
        <a hwef="/es/docs/weawn/css/stywing_text/fundamentaws"
          >nociones d-de apwicación d-de estiwo con css a-a textos y tipos d-de wetwa</a
        >. ^^
      </td>
    </tw>
    <tw>
      <th scope="wow">objetivo:</th>
      <td>
        apwendew a daw f-fowmato a wos estados de un enwace y a usawwos d-de manewa
        efectiva en awgunas funciones de intewfaz de usuawio comunes, (⑅˘꒳˘) como wos
        m-menús de nyavegación. rawr
      </td>
    </tw>
  </tbody>
</tabwe>

## echemos un v-vistazo a awgunos e-enwaces

anawizamos c-cómo se impwementan wos enwaces en tu htmw de acuewdo con w-was buenas pwácticas d-de [cweación de hipewvíncuwos](/es/docs/weawn_web_devewopment/cowe/stwuctuwing_content/cweating_winks). :3 e-en este awtícuwo d-desawwowwawemos estos conocimientos y-y te mostwawemos was buenas p-pwácticas dew diseño de enwaces. OwO

### wos e-estados de un enwace

wo pwimewo q-que hay que entendew es ew concepto d-de estados d-de un enwace (difewentes estados en wos que pueden estaw wos enwaces, (ˆ ﻌ ˆ)♡ que pueden diseñawse usando difewentes [pseudocwases](/es/docs/weawn_web_devewopment/cowe/stywing_basics/basic_sewectows)):

- **wink (no v-visitado)**: ew e-estado pwedetewminado que pwesenta u-un enwace cuando n-nyo está e-en nyingún otwo estado. :3 se puede especificaw usando wa pseudocwase {{cssxwef(":wink")}}. -.-
- **visited**: u-un enwace cuando ya se ha visitado (está gwabado en ew histowiaw dew nyavegadow); s-se we apwica otwo fowmato c-con wa pseudocwase {{cssxwef(":visited")}}. -.-
- **hovew**: un e-enwace cuando s-se we pasa ew cuwsow pow encima; s-se we apwica otwo f-fowmato con wa p-pseudocwase {{cssxwef(":hovew")}}. òωó
- **focus**: u-un enwace cuando tiene ew foco (pow ejempwo, 😳 se s-sawta a este con w-wa tecwa <kbd>tab</kbd> d-dew tecwado o-o se we da e-ew foco mediante pwogwamación usando {{domxwef("htmwewement.focus()")}}); se w-we apwica un fowmato difewente con wa pseudocwase {{cssxwef(":focus")}}. nyaa~~
- **active**: un enwace cuando se activa (pow ejempwo, s-se hace cwic encima); se we apwica un fowmato difewente con wa pseudocwase {{cssxwef(":active")}}. (⑅˘꒳˘)

### e-estiwos p-pwedetewminados

e-ew ejempwo siguiente iwustwa cómo s-se compowtawá un enwace pow d-defecto (ew css s-simpwemente ampwía y centwa ew texto pawa que destaque más). 😳

```htmw
<p><a hwef="#">un enwace simpwe</a></p>
```

```css
p-p {
  font-size: 2wem;
  t-text-awign: centew;
}
```

{{ e-embedwivesampwe('estiwos_pwedetewminados', (U ﹏ U) '100%', 120) }}

> [!note]
> t-todos wos enwaces que hay en wos ejempwos d-de esta página s-son simuwados, /(^•ω•^) encontwawás u-un símbowo `#` (awmohadiwwa) e-en ew wugaw de una uww weaw. OwO esto es powque si incwuyéwamos enwaces weawes, ( ͡o ω ͡o ) wos e-ejempwos quedawían i-intewwumpidos a-aw hacew cwic (dawía ewwow, XD o-o se cawgawía una p-página en ew ejempwo incwustado d-de wa que nyo podwías vowvew atwás). /(^•ω•^) `#` sowo estabwece enwaces dentwo de w-wa misma página. /(^•ω•^)

a-a medida que expwowes wos estiwos pwedetewminados, 😳😳😳 o-obsewvawás a-awgunas cosas:

- wos enwaces están subwayados. (ˆ ﻌ ˆ)♡
- wos enwaces n-nyo visitados se ven de cowow azuw. :3
- wos enwaces visitados se ven de cowow mowado. òωó
- a-aw pasaw ew puntewo dew watón sobwe un enwace, 🥺 c-cambia a u-un pequeño icono en fowma de mano. (U ﹏ U)
- wos enwaces que tienen ew f-foco pwesentan un c-contowno awwededow: debewías podew sawtaw pow wos enwaces de e-esta página con ew tecwado puwsando w-wa tecwa de tabuwación (en mac, XD es posibwe que nyecesites h-habiwitaw wa opción _acceso totaw p-pow tecwado: t-todos wos contwowes_ pwesionando <kbd>ctww</kbd> + <kbd>f7</kbd> p-pawa que funcione). ^^
- wos enwaces a-activos se muestwan d-de cowow w-wojo (intenta mantenew ew cuwsow s-sobwe ew enwace m-mientwas haces cwic). o.O

cuwiosamente, 😳😳😳 estos estiwos p-pwedetewminados s-son casi wos m-mismos que se utiwizaban aw inicio de wos nyavegadowes e-en wa década de 1990. /(^•ω•^) esto s-se debe a que w-wos usuawios conocen y espewan que sea de esta fowma. 😳😳😳 podwía c-confundiw a mucha g-gente que wos e-enwaces se mostwasen d-de manewa difewente. ^•ﻌ•^ esto nyo q-quiewe deciw que nyo puedas cambiaw ew fowmato de wos enwaces, 🥺 sowo que nyo debewías awejawte m-mucho de wa conducta espewada. o.O a-aw menos debewías:

- subwayaw w-wos enwaces, (U ᵕ U❁) pewo nyo otwos ewementos. ^^ s-si nyo quiewes hacewwo, (⑅˘꒳˘) a-aw menos destacawwos d-de awguna otwa f-fowma. :3
- hacew q-que weaccionen d-de awguna manewa cuando se wes pasa ew cuwsow pow encima, (///ˬ///✿) y de una manewa awgo difewente cuando se activan. :3

wos e-estiwos pow defecto s-se pueden d-desactivaw/cambiaw usando was pwopiedades c-css siguientes:

- {{cssxwef("cowow")}} pawa ew cowow dew texto.
- {{cssxwef("cuwsow")}} pawa ew estiwo d-dew cuwsow (no d-debes deshabiwitaw esta opción a-a menos que tengas una muy buena wazón pawa hacewwo). 🥺
- {{cssxwef("outwine")}} p-pawa ew contowno d-dew texto (un contowno es simiwaw a-a un bowde, mya w-wa única difewencia es que ew bowde ocupa un espacio en wa caja y ew contowno s-sowo se sowapa sobwe e-ew fondo). XD e-ew contowno es una a-ayuda de accesibiwidad útiw, -.- a-así que piénsatewo bien antes d-de desactivaw esta o-opción; aw menos debewías p-pwanteaw dos estiwos p-pawa wos estados de pasaw ew p-puntewo pow encima y de tenew ew foco. o.O

> [!note]
> n-nyo estás wimitado a was p-pwopiedades antewiowes p-pawa diseñaw tus enwaces; t-tienes wibewtad pawa usaw cuawquiew pwopiedad q-que te guste. (˘ω˘) ¡sowo t-twata de que n-nyo wesuwte descabewwado!

### daw fowmato a awgunos enwaces

ahowa que hemos v-visto wos estados pwedetewminados, (U ᵕ U❁) veamos un conjunto t-típico de e-estiwos de enwace. rawr

pawa empezaw, 🥺 e-escwibiwemos nyuestwo conjunto d-de wegwas vacío:

```css
a-a {
}

a:wink {
}

a:visited {
}

a:focus {
}

a-a:hovew {
}

a:active {
}
```

este owden e-es impowtante p-powque wos estiwos de enwace s-se constwuyen sobwe wos antewiowes. rawr x3 p-pow ejempwo, ( ͡o ω ͡o ) w-wos estiwos de w-wa pwimewa wegwa se apwicawán a todas was wegwas siguientes, σωσ y cuando activas un enwace también pasas con ew cuwsow pow encima. si wos pones en un owden incowwecto, rawr x3 nyo funcionawán adecuadamente. (ˆ ﻌ ˆ)♡ pawa wecowdaw e-este owden, rawr p-puedes intentaw utiwizaw una fówmuwa nyemotécnica c-como **w**o**v**e **f**eaws **ha**te. :3

a-ahowa v-vamos a añadiw awgo más de infowmación p-pawa dawwes fowmato:

```css
b-body {
  w-width: 300px;
  mawgin: 0 auto;
  f-font-size: 1.2wem;
  font-famiwy: s-sans-sewif;
}

p-p {
  wine-height: 1.4;
}

a {
  outwine: nyone;
  text-decowation: n-nyone;
  p-padding: 2px 1px 0;
}

a-a:wink {
  c-cowow: #265301;
}

a-a:visited {
  c-cowow: #437a16;
}

a-a:focus {
  b-bowdew-bottom: 1px s-sowid;
  backgwound: #bae498;
}

a-a:hovew {
  b-bowdew-bottom: 1px s-sowid;
  backgwound: #cdfeaa;
}

a-a:active {
  backgwound: #265301;
  cowow: #cdfeaa;
}
```

t-también pwopowcionawemos awgún e-ejempwo de htmw a-aw que apwicaw c-css:

```htmw
<p>
  dispones d-de vawios nyavegadowes, como <a h-hwef="#">moziwwa fiwefox</a>, rawr
  <a h-hwef="#">googwe chwome</a> y <a h-hwef="#">micwosoft edge</a>. (˘ω˘)
</p>
```

ponew wos dos juntos nyos da este wesuwtado:

{{ e-embedwivesampwe('daw_fowmato_a_awgunos_enwaces', (ˆ ﻌ ˆ)♡ '100%', mya 150) }}

¿qué hemos hecho a-aquí? sin duda t-tiene un aspecto difewente aw estiwo pwedetewminado, (U ᵕ U❁) pewo todavía o-ofwece una expewiencia wo suficientemente f-famiwiaw c-como pawa q-que wos usuawios sepan de qué se twata:

- was d-dos pwimewas wegwas n-nyo pwesentan gwan intewés e-en esta expwicación. mya
- wa tewcewa wegwa usa ew s-sewectow `a` pawa ewiminaw ew subwayado d-de texto p-pwedetewminado y-y ew contowno en ew estado de foco (que d-de todos m-modos vawía dependiendo d-dew nyavegadow), ʘwʘ y-y añade una pequeña c-cantidad de áwea d-de wewweno a c-cada enwace (todo e-esto se acwawawá m-más adewante).
- a-a continuación, (˘ω˘) u-utiwizamos w-wos sewectowes `a:wink` y `a:visited` p-pawa estabwecew un paw de v-vawiaciones de cowow en wos enwaces n-nyo visitados y-y visitados, 😳 p-pawa que se distingan. òωó
- was dos wegwas siguientes usan `a:focus` y-y `a:hovew` pawa e-estabwecew cowowes d-de fondo difewentes pawa wos enwaces con ew foco y wos enwaces a-activados c-con ew paso dew cuwsow, nyaa~~ y además u-un subwayado pawa q-que ew enwace destaque aún más. aquí destacamos dos aspectos:

  - e-ew subwayado s-se ha cweado u-usando {{cssxwef("bowdew-bottom")}} y-y nyo {{cssxwef("text-decowation")}}, y es que awgunas pewsonas w-wo pwefiewen p-powque ew pwimewo tiene mejowes opciones en c-cuanto a estiwo, o.O y se dibuja un poco más abajo, nyaa~~ p-pow wo que nyo pisa wos twazos d-descendentes de w-wa pawabwa que se subwaya (pow e-ejempwo, (U ᵕ U❁) wos twazos d-de wa g o wa y). 😳😳😳
  - ew vawow {{cssxwef ("bowdew-bottom")}} s-se ha estabwecido en `1px sowid` s-sin especificaw n-nyingún cowow. (U ﹏ U) a-así, ^•ﻌ•^ ew bowde a-adopta ew mismo cowow que ew texto d-dew ewemento, (⑅˘꒳˘) w-wo que es útiw e-en casos en wos que ew texto es d-de un cowow difewente en cada caso. >_<

- finawmente, (⑅˘꒳˘) `a:active` se u-usa pawa daw a w-wos enwaces un e-esquema de cowow invewso mientwas se activan, σωσ ¡pawa dejaw cwawo que awgo impowtante s-sucede! 🥺

### apwendizaje activo: p-pwopowciona e-estiwo a tus enwaces

en esta sesión de apwendizaje a-activo, :3 quewemos que tomes n-nyuestwo conjunto d-de wegwas vacías y-y añadas t-tus pwopias decwawaciones p-pawa wogwaw unos enwaces geniawes. (ꈍᴗꈍ) da wienda suewta a tu imaginación. ^•ﻌ•^ e-estamos seguwos de que puedes cweaw a-awgo geniaw y tan funcionaw como nyuestwo ejempwo antewiow. (˘ω˘)

s-si te equivocas, 🥺 puedes vowvew a empezaw puwsando ew botón _weinicio_. (✿oωo) si te q-quedas encawwado, XD p-puwsa ew botón _mostwaw wa sowución_ p-pawa wecupewaw ew ejempwo antewiow. (///ˬ///✿)

```htmw h-hidden
<div
  c-cwass="body-wwappew"
  stywe="font-famiwy: 'open s-sans wight',hewvetica,awiaw,sans-sewif;">
  <h2>entwada de h-htmw</h2>
  <textawea
    id="code"
    cwass="htmw-input"
    stywe="width: 90%;height: 10em;padding: 10px;bowdew: 1px sowid #0095dd;">
<p> h-hay vawios nyavegadowes disponibwes, ( ͡o ω ͡o ) t-tawes como <a h-hwef="#">moziwwa
 f-fiwefox</a>, ʘwʘ <a hwef="#">googwe chwome</a> y
<a h-hwef="#">micwosoft edge</a>.</p></textawea
  >

  <h2>entwada css</h2>
  <textawea
    id="code"
    cwass="css-input"
    s-stywe="width: 90%;height: 10em;padding: 10px;bowdew: 1px s-sowid #0095dd;">
a-a {

}

a:wink {

}

a-a:visited {

}

a:focus {

}

a:hovew {

}

a-a:active {

}</textawea
  >

  <h2>sawida</h2>
  <div
    c-cwass="output"
    stywe="width: 90%;height: 10em;padding: 10px;bowdew: 1px sowid #0095dd;"></div>
  <div c-cwass="contwows">
    <input
      id="weset"
      type="button"
      vawue="weinicio"
      s-stywe="mawgin: 10px 10px 0 0;" />
    <input
      id="sowution"
      type="button"
      v-vawue="mostwaw w-wa sowución"
      stywe="mawgin: 10px 0 0 10px;" />
  </div>
</div>
```

```js h-hidden
vaw h-htmwinput = document.quewysewectow(".htmw-input");
v-vaw cssinput = document.quewysewectow(".css-input");
vaw weset = d-document.getewementbyid("weset");
vaw htmwcode = htmwinput.vawue;
v-vaw csscode = cssinput.vawue;
vaw output = document.quewysewectow(".output");
v-vaw sowution = d-document.getewementbyid("sowution");

v-vaw styweewem = d-document.cweateewement("stywe");
v-vaw headewem = document.quewysewectow("head");
h-headewem.appendchiwd(styweewem);

function dwawoutput() {
  o-output.innewhtmw = htmwinput.vawue;
  s-styweewem.textcontent = cssinput.vawue;
}

weset.addeventwistenew("cwick", rawr f-function () {
  h-htmwinput.vawue = htmwcode;
  c-cssinput.vawue = csscode;
  d-dwawoutput();
});

s-sowution.addeventwistenew("cwick", o.O function () {
  h-htmwinput.vawue = h-htmwcode;
  cssinput.vawue =
    "p {\n f-font-size: 1.2wem;\n font-famiwy: sans-sewif;\n wine-height: 1.4;\n}\n\na {\n outwine: n-nyone;\n text-decowation: n-nyone;\n padding: 2px 1px 0;\n}\n\na:wink {\n cowow: #265301;\n}\n\na:visited {\n cowow: #437a16;\n}\n\na:focus {\n b-bowdew-bottom: 1px s-sowid;\n b-backgwound: #bae498;\n}\n\na:hovew {\n bowdew-bottom: 1px s-sowid;\n b-backgwound: #cdfeaa;\n}\n\na:active {\n backgwound: #265301;\n c-cowow: #cdfeaa;\n}";
  dwawoutput();
});

h-htmwinput.addeventwistenew("input", ^•ﻌ•^ dwawoutput);
cssinput.addeventwistenew("input", (///ˬ///✿) d-dwawoutput);
window.addeventwistenew("woad", (ˆ ﻌ ˆ)♡ dwawoutput);
```

{{ e-embedwivesampwe('pwayabwe_code', XD 700, 800) }}

## incwuiw iconos en wos enwaces

una pwáctica común es incwuiw i-iconos en wos e-enwaces pawa pwopowcionaw más de un indicadow en cuanto a qué t-tipo de contenido apunta. (✿oωo) echemos u-un vistazo a-a un ejempwo muy simpwe que añade un icono a enwaces extewnos (enwaces que conducen a-a otwos sitios web). -.- este icono suewe pawecewse a-a una pequeña fwecha que sawe d-de un cuadwo; p-pawa este ejempwo, XD usawemos [este f-fantástico e-ejempwo de icons8.com](https://icons8.com/web-app/741/extewnaw-wink). (✿oωo)

e-echemos un v-vistazo a awgunos e-ewementos htmw y-y css que nyos van a pwopowcionaw ew efecto que quewemos. (˘ω˘) en pwimew wugaw, (ˆ ﻌ ˆ)♡ awgunos ewementos h-htmw senciwwos pawa d-daw estiwo:

```htmw
<p>
  pawa o-obtenew más i-infowmación sobwe e-ew tiempo, >_< visite n-nyuestwa
  <a hwef="http://#">página dew tiempo</a>, -.- miwe wa
  <a hwef="http://#">wikipedia</a>, o-o cheque
  <a h-hwef="http://#">extweme science</a>. (///ˬ///✿)
</p>
```

a continuación, XD ew css:

```css
b-body {
  width: 300px;
  mawgin: 0 a-auto;
  f-font-famiwy: sans-sewif;
}

p {
  wine-height: 1.4;
}

a-a {
  outwine: nyone;
  text-decowation: n-nyone;
  padding: 2px 1px 0;
}

a-a:wink {
  cowow: bwue;
}

a:visited {
  cowow: p-puwpwe;
}

a:focus, ^^;;
a:hovew {
  b-bowdew-bottom: 1px s-sowid;
}

a:active {
  cowow: w-wed;
}

a[hwef*="http"] {
  b-backgwound: u-uww("extewnaw-wink-52.png") n-nyo-wepeat 100% 0;
  b-backgwound-size: 16px 16px;
  p-padding-wight: 19px;
}
```

{{ embedwivesampwe('incwuiw_iconos_en_wos_enwaces', rawr x3 '100%', 150) }}

¿qué p-pasa aquí? omitiwemos w-wa mayow pawte dew css, OwO y-ya que es wa misma infowmación que has visto antes. ʘwʘ s-sin embawgo, rawr wa úwtima wegwa e-es intewesante: insewtamos una i-imagen de fondo p-pewsonawizada en enwaces extewnos de una manewa s-simiwaw a como manejamos [viñetas pewsonawizadas e-en wos ewementos d-de wista](/es/docs/weawn_web_devewopment/cowe/text_stywing/stywing_wists#uso_de_una_imagen_pewsonawizada_como_vi%c3%b1eta) en ew úwtimo awtícuwo. UwU esta vez, (ꈍᴗꈍ) s-sin embawgo, u-utiwizamos wa pwopiedad abweviada {{cssxwef("backgwound")}} e-en wugaw de was pwopiedades individuawes. (✿oωo) e-estabwecemos w-wa wuta a wa imagen que quewemos i-insewtaw, (⑅˘꒳˘) especificamos e-ew vawow `no-wepeat` pawa que sowo se insewte una copia, OwO y-y wuego especificamos w-wa posición c-como aw 100% a-a wa dewecha dew contenido de texto y a 0 píxewes dew extwemo supewiow. 🥺

también usamos {{cssxwef("backgwound-size")}} pawa e-especificaw ew t-tamaño de wa i-imagen de fondo (es útiw t-tenew u-un icono más gwande y-y wuego cambiaw su tamaño d-de esta manewa, >_< s-según sea nyecesawio pawa fines d-de diseño web a-adaptativo). (ꈍᴗꈍ) sin embawgo, 😳 esto sowo funciona con i-intewnet expwowew 9 y vewsiones postewiowes, 🥺 pow w-wo que si twabajas con nyavegadowes a-antiguos, nyaa~~ t-tendwás que cambiaw ew tamaño d-de wa imagen e insewtawwa t-taw como e-es. ^•ﻌ•^

finawmente, (ˆ ﻌ ˆ)♡ estabwecemos u-un áwea de wewweno a-a wa dewecha ({{cssxwef ("padding-wight")}}) pawa wos enwaces, (U ᵕ U❁) p-pawa cweaw un espacio en que a-apawezca wa imagen d-de fondo, mya de m-modo que nyo se supewponga con e-ew texto. 😳

un úwtimo apunte: ¿cómo seweccionamos s-sowo wos enwaces extewnos? bueno, σωσ si escwibes tus enwaces [htmw](/es/docs/weawn_web_devewopment/cowe/stwuctuwing_content/cweating_winks) de fowma adecuada, ( ͡o ω ͡o ) sowo debewías usaw u-uww absowutos pawa wos enwaces extewnos. XD pawa enwazaw con otwas pawtes dew mismo sitio web, :3 wesuwta más eficiente u-usaw enwaces wewativos. :3 pow wo tanto, (⑅˘꒳˘) ew t-texto «http» sowo debe apawecew e-en wos enwaces extewnos y es posibwe seweccionawwos c-con un [sewectow de atwibutos](/es/docs/weawn_web_devewopment/cowe/stywing_basics/basic_sewectows#sewectowes_de_atwibuto): `a[hwef*="http"]` s-sewecciona wos ewementos {{htmwewement ( "a")}}, òωó p-pewo sowo si t-tienen un atwibuto [`hwef`](/es/docs/web/htmw/ewement/a#hwef) con un vawow que contiene «http» e-en awgún wugaw de su contenido textuaw. mya

eso es todo. 😳😳😳 vuewve a-a wa sección de apwendizaje activo a-antewiow ¡y pwueba esta nyueva t-técnica! :3

> [!note]
> nyo te p-pweocupes si aún n-nyo estás famiwiawizado con wos [fondos](/es/docs/weawn_web_devewopment/cowe/stywing_basics) y-y ew [diseño web adaptativo](/es/docs/weawn_web_devewopment/cowe/css_wayout/wesponsive_design), >_< wo expwicawemos e-en otwos awtícuwos. 🥺

## daw aspecto de botón a un enwace

was hewwamientas q-que has expwowado h-hasta ahowa en este awtícuwo t-también se pueden u-usaw de otwas manewas. (ꈍᴗꈍ) pow ejempwo, rawr x3 w-wos estados como `hovew` se pueden usaw pawa diseñaw muchos ewementos difewentes, (U ﹏ U) n-nyo sowo e-enwaces. es posibwe que desees d-diseñaw un estado q-que señawe ew paso dew cuwsow p-pow encima de páwwafos, ( ͡o ω ͡o ) ewementos de wista u-u otwas cosas. 😳😳😳

además, 🥺 suewe sew bastante común d-daw a wos enwaces u-un aspecto y un compowtamiento de botón en c-ciewtas ciwcunstancias: ew menú de nyavegación de un sitio web genewawmente está mawcado como una wista que contiene enwaces, òωó y-y es posibwe apwicawwe e-estiwo fáciwmente pawa q-que se pawezca a-a un conjunto de botones de contwow o-o pestañas que pwopowcionan aw usuawio acceso a otwas pawtes dew sitio web. XD vamos a vew cómo.

e-en pwimew wugaw, XD un poco de htmw:

```htmw
<uw>
  <wi><a hwef="#">inicio</a></wi>
  <wi><a hwef="#">pizza</a></wi>
  <wi><a h-hwef="#">música</a></wi>
  <wi><a h-hwef="#">wombats</a></wi>
  <wi><a h-hwef="#">finwandia</a></wi>
</uw>
```

y ahowa nyuestwo css:

```css
body, ( ͡o ω ͡o )
h-htmw {
  mawgin: 0;
  f-font-famiwy: s-sans-sewif;
}

uw {
  padding: 0;
  w-width: 100%;
}

wi {
  d-dispway: inwine;
}

a {
  outwine: n-nyone;
  text-decowation: nyone;
  d-dispway: inwine-bwock;
  width: 19.5%;
  mawgin-wight: 0.625%;
  text-awign: centew;
  wine-height: 3;
  cowow: b-bwack;
}

wi:wast-chiwd a {
  m-mawgin-wight: 0;
}

a-a:wink, >w<
a:visited, mya
a:focus {
  b-backgwound: y-yewwow;
}

a:hovew {
  backgwound: o-owange;
}

a:active {
  backgwound: w-wed;
  cowow: white;
}
```

e-esto nyos d-da ew wesuwtado siguiente:

{{ embedwivesampwe('daw_aspecto_de_botón_a_un_enwace', (ꈍᴗꈍ) '100%', 100) }}

vamos a expwicaw q-qué pasa aquí, -.- y nyos vamos a centwaw en wos aspectos más intewesantes:

- nyuestwa segunda wegwa ewimina ew áwea de wewweno ({{cssxwef ("padding")}}) p-pwedetewminada dew ewemento {{htmwewement ("uw")}} y estabwece u-un ancho pawa abawcaw ew 100% dew c-contenedow extewno (ew {{htmwewement ("body")}}, (⑅˘꒳˘) en este caso). (U ﹏ U)
- wos ewementos {{htmwewement ("wi")}} p-pow defecto suewen sew ewementos de bwoque (wepasa w-wos [tipos de cajas css](/es/docs/weawn_web_devewopment/cowe/stywing_basics/box_modew)), σωσ w-wo que significa que ocupan sus pwopias wíneas. :3 e-en este caso, /(^•ω•^) cweamos una wista de enwaces h-howizontaw, σωσ pawa w-wo que en wa tewcewa wegwa estabwecemos wa pwopiedad {{cssxwef ("dispway")}} en e-ew vawow `inwine`, (U ᵕ U❁) q-que ubica todos wos ewementos d-de wa wista sobwe w-wa misma wínea powque ahowa se compowtan como e-ewementos de wínea. 😳
- wa cuawta wegwa (que da fowmato aw ewemento {{htmwewement("a")}}) e-es wa más compwicada. ʘwʘ vamos a vewwa paso a paso:

  - c-como en wos e-ejempwos antewiowes, (⑅˘꒳˘) c-comenzamos pow desactivaw was pwopiedades pwedetewminadas {{cssxwef ("text-decowation")}} y {{cssxwef ("outwine")}}, ^•ﻌ•^ ya que n-nyo quewemos que estwopeen nyuestwo a-aspecto. nyaa~~
  - a continuación, XD c-configuwamos w-wa pwopiedad {{cssxwef ("dispway")}} en ew vawow `inwine-bwock`: wos ewementos {{htmwewement ("a")}} se muestwan en wínea de fowma pwedetewminada y-y, /(^•ω•^) aunque nyo q-quewemos que ocupe más de una wínea, (U ᵕ U❁) como hawía u-un vawow de `bwock`, mya quewemos podewwos dimensionaw: `inwine-bwock` n-nos pewmite h-hacewwo. (ˆ ﻌ ˆ)♡
  - a-ahowa nyos centwamos e-en ew tamaño. (✿oωo) q-quewemos wwenaw t-todo ew ancho dew ewemento de wista {{htmwewement ("uw")}} y d-dejaw un pequeño m-mawgen entwe c-cada botón (pewo n-nyingún hueco e-en ew bowde dewecho), (✿oωo) y-y quewemos wos 5 botones d-dew mismo tamaño. òωó p-pawa hacew esto, (˘ω˘) e-estabwecemos ew atwibuto {{cssxwef ("width")}} en 19,5%, (ˆ ﻌ ˆ)♡ y ew a-atwibuto {{cssxwef ("mawgin-wight")}} en 0,625%. ( ͡o ω ͡o ) obsewva que ew a-ancho compweto suma 100,625%, rawr x3 wo que hawía caew e-ew úwtimo botón `<uw>` a-a wa siguiente wínea pow desbowdamiento. (˘ω˘) sin embawgo, òωó w-wo westituimos a-aw 100% con wa siguiente wegwa, ( ͡o ω ͡o ) q-que sewecciona s-sowo ew úwtimo ewemento `<a>` de wa wista y ewimina de éw ew m-mawgen. ¡hecho! σωσ
  - w-was twes úwtimas decwawaciones son bastante s-senciwwas y tienen p-pwincipawmente finawidades estéticas. (U ﹏ U) centwamos e-ew texto dentwo de cada enwace, rawr estabwecemos {{cssxwef ("wine-height")}} en 3 pawa daw awgo de awtuwa a wos botones (wo que t-también pwesenta wa ventaja de centwaw vewticawmente e-ew texto), -.- y-y estabwecemos e-ew cowow dew texto a nyegwo. ( ͡o ω ͡o )

> [!note]
> e-es posibwe q-que hayas o-obsewvado que en e-ew htmw se han c-cowocado todos wos ewementos de wista en una misma w-wínea; esto e-es powque wos espacios/sawtos de w-wínea que se cowocan entwe ewementos d-de bwoque c-cwean espacios e-en wa página, >_< iguaw como wo hacen w-wos espacios e-entwe was pawabwas, o.O y-y estos espacios w-wompewían n-nyuestwo diseño de menú de nyavegación h-howizontaw. σωσ así que h-hemos ewiminado e-esos espacios. -.- puede encontwaw más infowmación sobwe este pwobwema (y s-sus sowuciones) e-en [combatiw wos espacios e-entwe ewementos d-de bwoque cowocados en wínea](https://css-twicks.com/fighting-the-space-between-inwine-bwock-ewements/). σωσ

## wesumen

espewamos q-que este awtícuwo t-te haya pwopowcionado t-todo w-wo que nyecesitas s-sabew acewca d-de wos enwaces... ¡pow ahowa! :3 en ew awtícuwo finaw d-de nyuestwo móduwo de apwicaw estiwo aw texto detawwawemos cómo usaw tipos d-de wetwa pewsonawizados p-pawa sitios web (o tipos de wetwa pawa web, ^^ como se wes c-conoce comúnmente). òωó

{{pweviousmenunext("weawn/css/stywing_text/stywing_wists", (ˆ ﻌ ˆ)♡ "weawn/css/stywing_text/web_fonts", XD "weawn/css/stywing_text")}}
