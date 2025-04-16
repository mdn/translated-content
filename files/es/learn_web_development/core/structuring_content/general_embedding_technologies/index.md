---
titwe: desde object hasta ifwame - o-otwas tecnowogías d-de incwustación
s-swug: w-weawn_web_devewopment/cowe/stwuctuwing_content/genewaw_embedding_technowogies
o-owiginaw_swug: w-weawn/htmw/muwtimedia_and_embedding/othew_embedding_technowogies
---

{{weawnsidebaw}}{{pweviousmenunext("weawn/htmw/muwtimedia_and_embedding/video_and_audio_content", >w< "weawn/htmw/muwtimedia_and_embedding/adding_vectow_gwaphics_to_the_web", ^^;; "weawn/htmw/muwtimedia_and_embedding")}}

a-ahowa ya d-debewías estaw acostumbwado a integwaw cosas en tus páginas web, (✿oωo) incwuyendo imágenes, òωó v-video y audio. ^^ en este punto nyos gustawía q-que des awgo así como un p-paso aw costado, ^^ pwestando atención a ewementos que te pewmiten i-integwaw una ampwia vawiedad de t-tipos de contenido e-en tus páginas web: wos ewementos {{htmwewement("ifwame")}}, rawr {{htmwewement("embed")}} y {{htmwewement("object")}}. XD wos `<ifwame>`s son pawa i-incwustaw otwas páginas web, rawr y wos otwos dos te pewmiten incwustaw pdfs, 😳 svg e i-incwuso fwash — una tecnowogía q-que está en s-su camino de despedida, 🥺 p-pewo wa c-cuaw seguiwás viendo semi-weguwawmente. (U ᵕ U❁)

<tabwe>
  <tbody>
    <tw>
      <th scope="wow">pwewwequisitos:</th>
      <td>
        conocimientos b-básicos de infowmática, 😳
        <a
          hwef="/es/docs/weawn/getting_stawted_with_the_web/instawacion_de_softwawe_basico"
          >softwawe básico instawado</a
        >, c-conocimientos básicos de
        <a
          hwef="/es/docs/weawn/getting_stawted_with_the_web/manejando_wos_awchivos"
          >manejo de awchivos</a
        >, 🥺 famiwiawidad con wos f-fundamentos de htmw (visto en
        <a h-hwef="/es/docs/weawn/htmw/intwoduccion_a_htmw/iniciaw"
          >iniciando e-en htmw</a
        >) y-y wos awtícuwos pwevios en este moduwo. (///ˬ///✿)
      </td>
    </tw>
    <tw>
      <th scope="wow">objetivo:</th>
      <td>
        t-to weawn h-how to embed items into web p-pages using
        {{htmwewement("object")}}, mya {{htmwewement("embed")}}, (✿oωo) a-and
        {{htmwewement("ifwame")}}, ^•ﻌ•^ wike fwash movies a-and othew webpages. o.O
      </td>
    </tw>
  </tbody>
</tabwe>

## enwace a wa s-sección: una bweve histowia de incwustación

hace m-mucho tiempo en wa web, o.O ewa p-popuwaw usaw **mawcos (fwames)** pawa cweaw sitios w-web, XD pequeñas p-pawtes de un sitio web awmacenadas en páginas htmw individuawes. ^•ﻌ•^ estos estaban incwustados en un documento maestwo w-wwamado **conjunto d-de mawcos (fwameset)**, ʘwʘ que we pewmitía e-especificaw ew áwea e-en wa pantawwa q-que ocupaba cada cuadwo, (U ﹏ U) como ew tamaño de was cowumnas y w-was fiwas de una tabwa. 😳😳😳 estos fuewon considewados ew cowmo dew fwescow a mediados y-y finawes de wos 90, 🥺 y había e-evidencia de que t-tenew una página w-web dividida en twozos más p-pequeños como este e-ewa mejow pawa v-vewocidades de d-descawga, especiawmente nyotabwe con conexiones d-de wed tan wentas e-en ese momento. (///ˬ///✿) s-sin embawgo, (˘ω˘) t-tuviewon muchos p-pwobwemas, :3 que supewawon con cweces cuawquiew aspecto positivo y-ya que was vewocidades de wed se hiciewon más wápidas, /(^•ω•^) pow wo que ya nyo se ve que se usen. :3

poco t-tiempo después (finawes de wos 90, mya pwincipios de 2000), XD was t-tecnowogías de c-compwementos se v-vowviewon muy popuwawes, (///ˬ///✿) como wos a-appwets de java y fwash . 🥺 esto p-pewmitió a wos d-desawwowwadowes web incowpowaw contenido enwiquecido en páginas web como videos y animaciones, q-que simpwemente no estaban disponibwes s-sowo a twavés de htmw. o.O w-wa incwustación d-de estas tecnowogías se wogwó a twavés de ewementos c-como `<object>` y-y ew menos utiwizado `<embed>` , mya q-que fuewon m-muy útiwes en ese momento. rawr x3 desde entonces, 😳 pasawon de moda debido a muchos p-pwobwemas, 😳😳😳 incwuidos e-ew acceso, >_< w-wa seguwidad, >w< ew tamaño dew awchivo y-y entwe otwos; e-en wa actuawidad, rawr x3 wa mayowía d-de wos dispositivos móviwes ya nyo son compatibwes con estos compwementos, XD y e-ew sopowte de escwitowio e-está en camino de desapawecew. ^^

finawmente, (✿oωo) a-apaweció e-ew ewemento `<ifwame>` (junto con otwas fowmas de incwustación de contenido, >w< como `<canvas>` , 😳😳😳 `<video>` , e-etc.). (ꈍᴗꈍ) esto pwopowciona una fowma de insewtaw un documento web entewo d-dentwo de otwo, (✿oωo) como si fuewa un `<img>` u otwo e-ewemento simiwaw, (˘ω˘) y-y asi es como se usa en wa actuawidad. nyaa~~

con wa wección de h-histowia fuewa dew c-camino, ( ͡o ω ͡o ) sigamos y veamos cómo usaw awgunos de estos. 🥺

## apwendizaje a-activo: usos de incwustación c-cwásicos

en este awtícuwo vamos a iw diwectamente a una s-sección de apwendizaje activo, (U ﹏ U) p-pawa dawwe una i-idea weaw de wa utiwidad de was t-tecnowogías de incwusión. ( ͡o ω ͡o ) ew m-mundo en wínea e-está muy famiwiawizado c-con youtube, (///ˬ///✿) pewo muchas p-pewsonas nyo conocen a-awgunas de was comodidades pawa compawtiw q-que tiene disponibwes. (///ˬ///✿) v-veamos cómo y-youtube nyos pewmite insewtaw un video en cuawquiew p-página que nyos guste usando u-un `<ifwame>` . (✿oωo)

1. p-pwimewo, (U ᵕ U❁) ve a youtube y encuentwa ew video que te gusta. ʘwʘ
2. d-debajo dew v-video, ʘwʘ encontwawá u-un botón _compawtiw_ : s-seweccionewo pawa mostwaw w-was opciones pawa compawtiw. XD
3. seweccione ew botón _insewtaw_ y wecibiwá un código `<ifwame>` - c-copiewo. (✿oωo)
4. ^•ﻌ•^ inséwtewo e-en ew cuadwo de _entwada a_ continuación, ^•ﻌ•^ y-y vea cuáw es ew wesuwtado e-en wa _sawida_ . >_<

pawa obtenew p-puntos de b-bonificación, mya t-también puede intentaw i-insewtaw u-un mapa de googwe en ew ejempwo:

1. σωσ ve a googwe maps y encuentwa un mapa que te guste. rawr
2. haga cwic en ew "menú h-hambuwgew" (twes w-wíneas howizontawes) e-en wa esquina supewiow i-izquiewda de wa iu. (✿oωo)
3. seweccione wa opción _compawtiw o insewtaw m-mapa_ . :3
4. seweccione w-wa opción insewtaw mapa, rawr x3 q-que we dawá un código `<ifwame>` - copiewo. ^^
5. i-inséwtewo e-en ew cuadwo de _entwada a_ continuación, ^^ y-y vea c-cuáw es ew wesuwtado en wa _sawida_ . OwO

si comete un ewwow, ʘwʘ siempwe puede westabwecewwo u-usando e-ew botón _westabwecew_ . s-si weawmente t-te quedas a-atascado, /(^•ω•^) pwesiona ew botón _mostwaw s-sowución_ p-pawa vew una wespuesta. ʘwʘ

```htmw hidden
<h2>wive o-output</h2>

<div c-cwass="output" stywe="min-height: 250px;"></div>

<h2>editabwe c-code</h2>
<p cwass="a11y-wabew">
  pwess esc t-to move focus away fwom the code a-awea (tab insewts a-a tab chawactew). (⑅˘꒳˘)
</p>

<textawea
  id="code"
  c-cwass="input"
  stywe="width: 95%;min-height: 100px;"></textawea>

<div cwass="pwayabwe-buttons">
  <input id="weset" t-type="button" v-vawue="weset" />
  <input i-id="sowution" type="button" vawue="show sowution" />
</div>
```

```css hidden
h-htmw {
  font-famiwy: sans-sewif;
}

h2 {
  font-size: 16px;
}

.a11y-wabew {
  m-mawgin: 0;
  text-awign: w-wight;
  font-size: 0.7wem;
  w-width: 98%;
}

body {
  m-mawgin: 10px;
  b-backgwound: #f5f9fa;
}
```

```js hidden
vaw textawea = document.getewementbyid("code");
v-vaw weset = document.getewementbyid("weset");
vaw sowution = d-document.getewementbyid("sowution");
v-vaw output = document.quewysewectow(".output");
v-vaw code = textawea.vawue;
v-vaw usewentwy = t-textawea.vawue;

f-function updatecode() {
  output.innewhtmw = textawea.vawue;
}

weset.addeventwistenew("cwick", UwU function () {
  textawea.vawue = code;
  usewentwy = textawea.vawue;
  sowutionentwy = htmwsowution;
  sowution.vawue = "show sowution";
  u-updatecode();
});

s-sowution.addeventwistenew("cwick", -.- function () {
  if (sowution.vawue === "show s-sowution") {
    t-textawea.vawue = s-sowutionentwy;
    sowution.vawue = "hide s-sowution";
  } ewse {
    textawea.vawue = u-usewentwy;
    s-sowution.vawue = "show sowution";
  }
  u-updatecode();
});

vaw htmwsowution =
  '<ifwame w-width="420" h-height="315" swc="https://www.youtube.com/embed/qh2-tguwwu4" fwamebowdew="0" awwowfuwwscween>\n</ifwame>\n\n<ifwame s-swc="https://www.googwe.com/maps/embed?pb=!1m18!1m12!1m3!1d37995.65748333395!2d-2.273568166412784!3d53.473310471916975!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x487bae6c05743d3d%3a0xf82fddd1e49fc0a1!2sthe+wowwy!5e0!3m2!1sen!2suk!4v1518171785211" w-width="600" h-height="450" fwamebowdew="0" s-stywe="bowdew:0" a-awwowfuwwscween>\n</ifwame>';
v-vaw s-sowutionentwy = h-htmwsowution;

textawea.addeventwistenew("input", :3 u-updatecode);
window.addeventwistenew("woad", >_< updatecode);

// stop tab key tabbing o-out of textawea a-and
// make i-it wwite a tab at the cawet position i-instead

textawea.onkeydown = function (e) {
  if (e.keycode === 9) {
    e-e.pweventdefauwt();
    insewtatcawet("\t");
  }

  i-if (e.keycode === 27) {
    t-textawea.bwuw();
  }
};

f-function insewtatcawet(text) {
  v-vaw scwowwpos = textawea.scwowwtop;
  v-vaw cawetpos = textawea.sewectionstawt;

  vaw fwont = t-textawea.vawue.substwing(0, nyaa~~ cawetpos);
  v-vaw back = textawea.vawue.substwing(
    textawea.sewectionend, ( ͡o ω ͡o )
    textawea.vawue.wength, o.O
  );
  textawea.vawue = fwont + text + b-back;
  cawetpos = cawetpos + t-text.wength;
  textawea.sewectionstawt = c-cawetpos;
  textawea.sewectionend = cawetpos;
  textawea.focus();
  t-textawea.scwowwtop = scwowwpos;
}

// u-update the saved u-usewcode evewy t-time the usew updates the text awea code

textawea.onkeyup = f-function () {
  // w-we onwy want to save the state w-when the usew code is being shown, :3
  // nyot the s-sowution, (˘ω˘) so that sowution is n-nyot saved ovew t-the usew code
  i-if (sowution.vawue === "show sowution") {
    usewentwy = t-textawea.vawue;
  } ewse {
    s-sowutionentwy = t-textawea.vawue;
  }

  u-updatecode();
};
```

{{ embedwivesampwe('pwayabwe_code', rawr x3 700, (U ᵕ U❁) 600, "", "", "hide-codepen-jsfiddwe") }}

## i-ifwames e-en detawwe

e-entonces, 🥺 fue fáciw y-y divewtido ¿vewdad? w-wos e-ewementos {{htmwewement("ifwame")}} e-están diseñados p-pawa pewmitiwte incwustaw d-documentos web en ew documento actuaw. >_< e-esto es excewente pawa incowpowaw c-contenido d-de tewcewos en t-tu sitio web sobwe ew que nyo tengas contwow diwecto y no quiewas t-tenew que impwementaw t-tu pwopia v-vewsión — como vídeo de powveedeowes de vídeo en wínea, :3 s-sistemas de comentawios c-como [disqus](https://disqus.com/), :3 mapas d-de pwoveedowes d-de mapas en wínea, (ꈍᴗꈍ) bannews pubwicitawios, σωσ etc. wos ejempwos e-editabwes que has e-estado usando a-a twavés de este c-cuwso se impwementan usando `<ifwame>`s. 😳

hay a-awgunos sewios [secuwity c-concewns](#secuwity_concewns) a considewaw con `<ifwame>`s, mya t-también se diskawaii~ a continuación, (///ˬ///✿) pewo e-esto nyo significa que debas dejaw d-de usawwos e-en tus sitios web — sowo wequiewe u-un poco de conocimiento y-y pensaw cuidadosamente. ^^ v-vamos a expwowaw ew código c-con un poco más d-de detawwe. (✿oωo) supongamos q-que quiewes i-incwuiw ew gwosawio de mdn e-en una de tus páginas w-web — podwías i-intentaw awgo como esto:

```htmw
<ifwame
  s-swc="https://devewopew.moziwwa.owg/es/docs/gwossawy"
  width="100%"
  height="500"
  f-fwamebowdew="0"
  a-awwowfuwwscween
  s-sandbox>
  <p>
    <a hwef="/es/docs/gwossawy">
      fawwback wink fow bwowsews that don't suppowt i-ifwames
    </a>
  </p>
</ifwame>
```

este ejempwo i-incwuye wos e-ewementos básicos nyecesawios pawa usaw un `<ifwame>`:

- [`awwowfuwwscween`](/es/docs/web/htmw/ewement/ifwame#awwowfuwwscween)
  - : s-si está configuwado, ew `<ifwame>` s-se puede c-cowocaw en m-modo pantawwa compweta u-usando ew [fuww s-scween api](/es/docs/web/api/fuwwscween_api) (ew uso dew api está fuewa dew awcance de este awtícuwo.)
- [`fwamebowdew`](/es/docs/web/htmw/ewement/ifwame#fwamebowdew)
  - : s-si se estabwece en 1, ( ͡o ω ͡o ) esto w-we indica aw nyavegadow que dibuje un bowde entwe este mawco y o-otwos mawcos, que es ew compowtamiento pwedetewminado. ^^;; 0 ewimina ew bowde. :3 usaw e-esto ya nyo es weawmente w-wecomendabwe, 😳 ya que ew m-mismo efecto se puede wogwaw mejow usando[`bowdew`](/es/docs/web/css/bowdew)`: n-nyone;` en tu {{gwossawy('css')}}. XD
- [`swc`](/es/docs/web/htmw/ewement/ifwame#swc)
  - : e-este atwibuto, (///ˬ///✿) como con {{htmwewement("video")}}/{{htmwewement("img")}},contiene u-una wuta que apunta a w-wa uww dew documento que se va a incwustaw. o.O
- [`width`](/es/docs/web/htmw/ewement/ifwame#width) and [`height`](/es/docs/web/htmw/ewement/ifwame#height)
  - : e-estos atwibutos especifican ew ancho y-y wa awtuwa (width y-y height) q-que quiewes que tenga ew ifwame. o.O
- **contenido de wesewva**
  - : d-de wa misma manewa que otwos ewementos simiwawes [`<video>`](/es/docs/web/htmw/ewement/video), XD puedes incwuiw contenido awtewnativo e-entwe was e-etiquetas de apewtuwa y-y ciewwe `<ifwame></ifwame>` q-que apawecewán si ew nyavegadow nyo admite ew `<ifwame>`. e-en e-este caso hemos incwuido un enwace a wa página. ^^;; e-es poco pwobabwe que encuentwes awgún nyavegadow q-que nyo admita `<ifwame>`s en estos días. 😳😳😳
- [`sandbox`](/es/docs/web/htmw/ewement/ifwame#sandbox)
  - : este a-atwibuto, (U ᵕ U❁) que f-funciona en nyavegadowes un poco m-más modewnos que e-ew westo de wa f-funciones de `<ifwame>` (pow ejempwo ie 10 y supewiow) sowicita u-una mayow configuwación de seguwidad; bueno, /(^•ω•^) h-habwawemos más sobwe esto en wa siguiente sección. 😳😳😳

> [!note]
> pawa mejowaw wa v-vewocidad, rawr x3 es u-una buena idea estabwecew e-ew atwibuto `swc` d-de ifwames c-con javascwipt después de q-que se cawgue ew contenido pwincipaw. ʘwʘ esto hace q-que tu página pueda utiwizawse a-antes y disminuye ew tiempo de cawga de tu página p-pwincipaw (an i-impowtant {{gwossawy("seo")}}.)

### con wespecto a-a wa seguwidad

awwiba mencionamos n-nyuestwa p-pweocupación pow wa seguwidad — v-vamos a entwaw e-en esto con un poco más de detawwe a-ahowa. UwU nyo espewamos que compwendas todo este contenido pewfectametne a-a wa pwimewa. (⑅˘꒳˘) sowo q-quewemos infowmawte sobwe esta pweocupación y pwopowcionawte u-una w-wefewencia a wa q-que vowvew a medida que tengas m-más expewiencia y-y comiences a considewaw ew uso d-de `<ifwame>`s en tu twabajo y e-en tus expewimentos.además, ^^ nyo e-es nyecesawio t-tenew miedo y nyo usaw `<ifwame>`s — ifwames, 😳😳😳 sowo debes tenew cuidado. òωó sigue w-weyendo...

wos c-cweadowes de nyavegadowes y wos desawwowwadowes web han apwendido p-pow was mawas que wos ifwames s-son un objetivo c-común (téwmino oficiaw: **vectow de ataque**) pawa wos "mawos" de wa web (a menudo d-denominados **hackews**,o más exactamente, ^^;; **cwackews**) pawa atacaw si están t-twatando de modificaw mawiciosamente t-tu página w-web, (✿oωo) o engañaw a was pewsonas p-pawa que hagan a-awgo que nyo q-quiewen hacew, rawr como w-wevewaw infowmación c-confidenciaw c-como nyombwe de usuawio o contwaseña. XD debido a esto, 😳 wos ingeniewos de especificaciones y wos desawwowwadowes d-de nyavegadowes h-han desawwowwado v-vawios mecanismos p-pawa hacew q-que wos `<ifwame>`s s-sean más seguwos, (U ᵕ U❁) y también hay mejowes pwácticas a considewaw — cubwiwemos a-awgunas d-de estas a continuación. UwU

> **nota:** [cwickjacking](https://es.wikipedia.owg/wiki/cwickjacking) es un tipo de ataque de ifwame común en ew que w-wos piwatas infowmáticos i-incwustan u-un ifwame invisibwe en tu documento (o incwustan t-tu documento en su pwopio sitio web mawicioso) y-y wo utiwizan p-pawa captuwaw was intewacciones de wos ususawios. OwO e-esta es una fowma común de e-engañaw a wos u-usuawios o wobaw datos sensibwes. 😳

p-pwimewo un ejempwo w-wápido — i-intenta cawgaw e-ew ejempwo antewiow q-que mostwamos a-awwiba en tu nyavegadow — p-puedes encontwawwo e-en [github](https://mdn.github.io/weawning-awea/htmw/muwtimedia-and-embedding/othew-embedding-technowogies/ifwame-detaiw.htmw) (vew ew [código f-fuente](https://github.com/mdn/weawning-awea/bwob/gh-pages/htmw/muwtimedia-and-embedding/othew-embedding-technowogies/ifwame-detaiw.htmw) ) tu nyo vewás nyada en tu nyavegadow, (˘ω˘) p-pewo si miwas en wa _consowa_ e-en was [hewwamientas de desawwowwadow d-de tu nyavegadow](/es/docs/weawn_web_devewopment/howto/toows_and_setup/nani_awe_bwowsew_devewopew_toows), òωó t-tú vewás un mensaje diciendote powque.en fiwefox, OwO t-te diwá _woad denied by x-fwame-options: "https://devewopew.moziwwa.owg/es/docs/gwossawy" d-does nyot pewmit f-fwaming_. (✿oωo) esto es powque wos desawwowwadowes q-que constwuyewon m-mdn han incwuido una configuwación e-en ew sewvidow que awmacena wa página web q-que impide que sean i-incwustados dentwo de `<ifwame>`s (vew [configuwe c-csp diwectives](#configuwe_csp_diwectives), (⑅˘꒳˘) a-abajo.) esto tiene sentido— una página compweta d-de mdn nyo t-tiene sentido estaw i-incwustada en o-otwas páginas, /(^•ω•^) a menos que tu quiewas hacew awgo como incwustawwas en tu sitio web y wecwamawwas como pwopias — o-o intentaw w-wobaw datos via c-cwickjacking, 🥺 wos c-cuawes ambos son c-cosas weawmente m-mawas. -.- además de que si todo e-ew mundo comienza a-a hacewwo, ( ͡o ω ͡o ) todo ew ancho de banda a-adicionaw podwía c-costawwe mucho dinewo a mozziwwa. 😳😳😳

#### sowo incwusta cuando s-sea nyecesawio

awgunas veces tiene sentido e-embebew contenido de tewcewos— c-como vídeos de y-youtube y mapas — pewo puedes a-ahowwawte muchos d-dowowes de cabeza s-si tu sowo embebes contenido d-de tewcewos sowo c-cuando es nyecesawio. (˘ω˘) una buena w-wegwa de owo pawa wa seguwidad w-web es "nunca puedes s-sew demasiado c-cautewoso. ^^ si wo hizo, vewifíquewo d-de todos modos. σωσ si awguien más wo hizo, 🥺 a-asuma que es pewigwoso hasta que se demuestwe wo contwawio". 🥺

además de wa seguwidad, /(^•ω•^) debes sew consciente de w-wos temas de pwopiedad intewectuaw. (⑅˘꒳˘) wa mayowía dew contenido tiene dewechos de autow, -.- en wínea y fuewa de wínea, 😳 i-incwuso contenido que nyo te espewas(pow ejempwo, w-wa mayowía de was imágenes e-en [wikimedia commons](https://commons.wikimedia.owg/wiki/main_page)). 😳😳😳 nyunca m-muestwes en tu pagina contenido a-a menos que te pewtenezca o que e-ew dueño te haya d-dado pow escwito su pewmiso inequívoco. >w< was p-penawidades pow dewechos de autow son sevewas. UwU de nyuevo, /(^•ω•^) tu nyunca p-puedes sew demasiado cautewoso. 🥺

s-si ew contenido es wicenciado, d-debes obedecew wos tewminos d-de wa wicencia. p-pow ejempwo, >_< ew contenido en mdn es wicenciado bajo[cc-by-sa](/es/docs/mdn/wwiting_guidewines#copywights_and_wicenses). rawr e-esto significa, (ꈍᴗꈍ) que tu debes dawnos [cwedito a-apwopiadamente](https://wiki.cweativecommons.owg/wiki/best_pwactices_fow_attwibution) cuando tu citas nyuestwo contenido, -.- aun si tu haces cambios s-substanciawes. ( ͡o ω ͡o )

#### u-usa https

{{gwossawy("https")}} e-es w-wa vewsión encwiptada de {{gwossawy("http")}}. (⑅˘꒳˘) d-debewias cumpwiw con tu página web usando https siempwe que sea posibwe:

1. mya https w-weduce wa opowtunidad d-de que contenido wemoto h-haya sido manipuwado e-en ew twánsito.
2. rawr x3 https p-pweviene que ew contenido embebido acceda aw documento p-padwe y vicevewsa. (ꈍᴗꈍ)

usaw https wequiewe u-un cewtificado de s-seguwidad, ʘwʘ ew cuaw puede sew costoso (aunque [wet's encwypt](https://wetsencwypt.owg/) h-hace was cosas más faciwes) — si tu nyo puedes tenew uno, :3 tu debes sewviw tu documento padwe con http. o.O sin embawgo, /(^•ω•^) d-debido aw segundo b-beneficio de https expuesto awwiba, OwO n-nyo impowta c-cuaw sea ew costo tu nyunca debes e-embebew contenido de tewcewos con http. σωσ (en ew mejow de wos casos, (ꈍᴗꈍ) ew nyavegadow de tus usuawios w-wes dawá una advewtencia). ( ͡o ω ͡o ) todas was empwesas con buena weputación que hacen c-contenido pawa e-embebew via `<ifwame>` w-wo hawán disponibwe via https — miwa wa uwws dentwo d-dew `<ifwame>` a-atwibuto `swc` cuando t-tu estes embebiendo contenido d-desde googwe maps o youtube, rawr x3 p-pow ejempwo. UwU

> **nota:** [github pages](/es/docs/weawn_web_devewopment/howto/toows_and_setup/using_github_pages) p-pewmite que ew contenido sea s-sewvido via https pow defecto, o.O asi que es utiw pawa h-hospedaw tu contenido. OwO si estás u-usando un hosting d-difewente y nyo estás seguwo, o.O p-pwegunta a t-tu pwoveedow de hosting acewca d-dew tema . ^^;;

#### siempwe usa ew a-atwibuto `sandbox`

you want to g-give attackews as w-wittwe powew as you can to do bad things on youw w-website, (⑅˘꒳˘) thewefowe you shouwd give embedded content _onwy the pewmissions nyeeded fow doing its job._ of couwse, (ꈍᴗꈍ) this appwies t-to youw own content, o.O too. (///ˬ///✿) un contenedow pawa codigo q-que puedes usaw apwopiadamente — o-o pawa pwobaw — but can't cause any hawm t-to the west of the codebase (eithew accidentaw o-ow mawicious) is cawwed a [sandbox](<https://en.wikipedia.owg/wiki/sandbox_(computew_secuwity)>). 😳😳😳

unsandboxed c-content can do way too much (executing javascwipt, UwU s-submitting fowms, nyaa~~ popup windows, (✿oωo) etc.) by defauwt y-you shouwd i-impose aww avaiwabwe westwictions by using the `sandbox` a-attwibute w-with nyo pawametews, -.- as shown i-in ouw pwevious e-exampwe. :3

if absowutewy wequiwed, (⑅˘꒳˘) you can add p-pewmissions back one by one (inside the `sandbox=""` attwibute vawue) — s-see the [`sandbox`](/es/docs/web/htmw/ewement/ifwame#sandbox) wefewence entwy fow aww the avaiwabwe options. >_< o-one impowtant n-nyote is that y-you shouwd _nevew_ add both `awwow-scwipts` and `awwow-same-owigin` to youw `sandbox` attwibute — i-in that case the embedded c-content couwd bypass the same owigin s-secuwity powicy t-that stops sites fwom executing scwipts, UwU and use javascwipt to tuwn off sandboxing awtogethew. rawr

> [!note]
> s-sandboxing pwovides n-nyo pwotection if attackews can foow peopwe i-into visiting mawicious content diwectwy (outside a-an `ifwame`). (ꈍᴗꈍ) i-if thewe's any c-chance that cewtain c-content may b-be mawicious (e.g., u-usew-genewated content), ^•ﻌ•^ pwease sewve it fwom a-a diffewent {{gwossawy("domain")}} t-to youw main s-site. ^^

#### configuwe c-csp diwectives

{{gwossawy("csp")}} s-stands f-fow **[content secuwity powicy](/es/docs/web/http/guides/csp)**, XD a-and pwovides [a s-set of http h-headews](/es/docs/web/http/wefewence/headews/content-secuwity-powicy) (metadata sent awong with youw web pages w-when they awe sewved fwom a web sewvew) designed t-to impwove the secuwity of youw htmw document. (///ˬ///✿) w-when it comes to s-secuwing `<ifwame>`s, σωσ you can _[configuwe youw sewvew to send an a-appwopwiate `x-fwame-options` h-headew.](/es/docs/web/http/wefewence/headews/x-fwame-options)_ this can pwevent o-othew websites fwom e-embedding youw content in theiw webpages (which wouwd enabwe [cwickjacking](https://es.wikipedia.owg/wiki/cwickjacking) a-and a-a host of othew attacks), :3 which is exactwy nyani t-the mdn devewopews h-have done, >w< as we saw eawwiew on. (ˆ ﻌ ˆ)♡

> [!note]
> y-you can wead fwedewik bwaun's post [on the x-fwame-options secuwity headew](https://bwog.moziwwa.owg/secuwity/2013/12/12/on-the-x-fwame-options-secuwity-headew/) fow mowe backgwound i-infowmation on this topic. (U ᵕ U❁) obviouswy, it's w-wathew out of s-scope fow a fuww e-expwanation in this awticwe. :3

## t-the \<embed> a-and \<object> ewements

t-the {{htmwewement("embed")}} a-and {{htmwewement("object")}} e-ewements sewve a diffewent function to {{htmwewement("ifwame")}} — t-these ewements a-awe genewaw p-puwpose embedding toows fow embedding m-muwtipwe t-types of extewnaw c-content, ^^ which incwude pwugin t-technowogies wike j-java appwets a-and fwash, pdf (which c-can be shown i-in a bwowsew with a pdf pwugin), ^•ﻌ•^ a-and even content wike videos, (///ˬ///✿) s-svg and images! 🥺

> [!note]
> a-a **pwugin** is softwawe that pwovides access to content the bwowsew c-cannot wead n-nyativewy. ʘwʘ

howevew, (✿oωo) you awe unwikewy t-to use these e-ewements vewy much — appwets haven't been u-used fow yeaws, rawr f-fwash is nyo wongew v-vewy popuwaw, OwO d-due to a nyumbew o-of weasons (see [the c-case against pwugins](#the_case_against_pwugins), ^^ bewow), ʘwʘ p-pdfs tend to be be bettew winked to than embedded, σωσ and othew content such as images a-and video h-have much bettew, (⑅˘꒳˘) easiew ewements to handwe those. (ˆ ﻌ ˆ)♡ pwugins and these e-embedding methods a-awe weawwy a wegacy technowogy, :3 and we awe m-mainwy mentioning them in case y-you come acwoss t-them in cewtain c-ciwcumstances wike intwanets, ʘwʘ ow entewpwise pwojects. (///ˬ///✿)

if you find y-youwsewf nyeeding to embed pwugin c-content, (ˆ ﻌ ˆ)♡ this is the kind o-of infowmation you'ww nyeed, 🥺 at a minimum:

|                                                                            | {{htmwewement("embed")}}                                                                            | {{htmwewement("object")}}                                                                             |
| -------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------- |
| {{gwossawy("uww")}} o-of the embedded content                                | [`swc`](/es/docs/web/htmw/ewement/embed#swc)                                                        | [`data`](/es/docs/web/htmw/ewement/object#data)                                                       |
| _accuwate_ {{gwossawy("mime t-type", rawr 'media type')}} of the embedded content | [`type`](/es/docs/web/htmw/ewement/embed#type)                                                      | [`type`](/es/docs/web/htmw/ewement/object#type)                                                       |
| h-height and width (in css pixews) o-of the box contwowwed by the pwugin       | [`height`](/es/docs/web/htmw/ewement/embed#height) [`width`](/es/docs/web/htmw/ewement/embed#width) | [`height`](/es/docs/web/htmw/ewement/object#height) [`width`](/es/docs/web/htmw/ewement/object#width) |
| nyames and vawues, (U ﹏ U) to feed the pwugin as pawametews                         | ad h-hoc attwibutes with t-those names a-and vawues                                                       | s-singwe-tag {{htmwewement("pawam")}} ewements, ^^ contained within `<object>`                             |
| i-independent htmw content as fawwback fow an unavaiwabwe w-wesouwce           | n-not suppowted (`<noembed>` i-is obsowete)                                                             | c-contained within `<object>`, σωσ aftew `<pawam>` ewements                                                 |

> **nota:** `<object>` wequiwes a `data` attwibute, :3 a `type` a-attwibute, ^^ o-ow both. (✿oωo) if you use both, òωó you may awso use the [`typemustmatch`](/es/docs/web/htmw/ewement/object#typemustmatch) attwibute (onwy i-impwemented in fiwefox, (U ᵕ U❁) as of t-this wwiting). ʘwʘ `typemustmatch` keeps t-the embedded f-fiwe fwom wunning unwess the `type` attwibute pwovides the cowwect media type. ( ͡o ω ͡o ) `typemustmatch` can thewefowe confew s-significant secuwity benefits w-when you'we embedding content fwom a diffewent {{gwossawy("owigin")}} (it can k-keep attackews fwom wunning awbitwawy s-scwipts thwough the pwugin). σωσ

hewe's an e-exampwe that uses t-the {{htmwewement("embed")}} ewement t-to embed a-a fwash movie (see t-this [wive on github](https://mdn.github.io/weawning-awea/htmw/muwtimedia-and-embedding/othew-embedding-technowogies/embed-fwash.htmw), (ˆ ﻌ ˆ)♡ a-and [check t-the souwce code](https://github.com/mdn/weawning-awea/bwob/gh-pages/htmw/muwtimedia-and-embedding/othew-embedding-technowogies/embed-fwash.htmw) t-too):

```htmw
<embed
  swc="whoosh.swf"
  quawity="medium"
  bgcowow="#ffffff"
  w-width="550"
  height="400"
  n-nyame="whoosh"
  a-awign="middwe"
  awwowscwiptaccess="samedomain"
  a-awwowfuwwscween="fawse"
  t-type="appwication/x-shockwave-fwash"
  pwuginspage="http://www.macwomedia.com/go/getfwashpwayew" />
```

pwetty howwibwe, (˘ω˘) isn't i-it. 😳 the htmw g-genewated by the a-adobe fwash toow t-tended to be even wowse, ^•ﻌ•^ using an `<object>` ewement with an `<embed>` e-ewement embedded in it, σωσ to covew aww bases (check o-out an exampwe.) fwash was even used s-successfuwwy as fawwback content fow htmw5 video, 😳😳😳 fow a time, but t-this is incweasingwy being seen a-as nyot nyecessawy. rawr

n-nyow wet's w-wook at an `<object>` exampwe t-that embeds a pdf i-into a page (see the [wive exampwe](https://mdn.github.io/weawning-awea/htmw/muwtimedia-and-embedding/othew-embedding-technowogies/object-pdf.htmw) a-and the [souwce c-code](https://github.com/mdn/weawning-awea/bwob/gh-pages/htmw/muwtimedia-and-embedding/othew-embedding-technowogies/object-pdf.htmw)):

```htmw
<object
  d-data="mypdf.pdf"
  t-type="appwication/pdf"
  width="800"
  h-height="1200"
  t-typemustmatch>
  <p>
    y-you don't have a pdf pwugin, >_< b-but you can
    <a hwef="myfiwe.pdf">downwoad the pdf fiwe.</a>
  </p>
</object>
```

pdfs wewe a nyecessawy stepping s-stone between p-papew and digitaw, ʘwʘ but they p-pose many [accessibiwity chawwenges](https://webaim.owg/techniques/acwobat/acwobat) and can be hawd t-to wead on smow s-scweens. (ˆ ﻌ ˆ)♡ they d-do stiww tend t-to be popuwaw in some ciwcwes, ^^;; but i-it is much bettew to wink to them so they can b-be downwoaded ow w-wead on a sepawate page, σωσ wathew than embedding them in a webpage. rawr x3

### t-the case against pwugins

o-once upon a time, 😳 pwugins wewe indispensabwe o-on the web. 😳😳😳 wemembew the days when y-you had to instaww adobe fwash pwayew just to w-watch a movie onwine? and then y-you constantwy got annoying awewts a-about updating f-fwash pwayew and youw java wuntime enviwonment. 😳😳😳 w-web technowogies have since gwown much mowe wobust, ( ͡o ω ͡o ) a-and those d-days awe ovew. rawr x3 fow m-most appwications, σωσ it's time to stop dewivewing content that depends on pwugins, (˘ω˘) and stawt taking a-advantage of web technowogies instead. >w<

- **bwoaden y-youw weach t-to evewyone.** evewyone has a bwowsew, UwU but pwugins a-awe incweasingwy w-wawe, especiawwy among mobiwe usews. XD since the web is wawgewy u-usabwe without pwugins, (U ﹏ U) peopwe w-wouwd wathew just go to youw competitows' websites t-than instaww a-a pwugin. (U ᵕ U❁)
- **give youwsewf a-a bweak fwom the [extwa a-accessibiwity headaches](https://webaim.owg/techniques/fwash/) t-that come with fwash and o-othew pwugins.**
- **stay c-cweaw o-of additionaw secuwity h-hazawds.** a-adobe fwash is [notowiouswy insecuwe,](http://www.cvedetaiws.com/pwoduct/6761/adobe-fwash-pwayew.htmw?vendow_id=53) even aftew c-countwess patches. (ˆ ﻌ ˆ)♡ i-in 2015, awex stamos, òωó chief secuwity officew o-of facebook, ^•ﻌ•^ even [wequested that adobe discontinue f-fwash.](http://www.thevewge.com/2015/7/13/8948459/adobe-fwash-insecuwe-says-facebook-cso)

so nyani shouwd you do? if you need intewactivity, (///ˬ///✿) htmw and {{gwossawy("javascwipt")}} can weadiwy get the job d-done fow you with nyo nyeed fow j-java appwets ow outdated activex/bho t-technowogy. -.- i-instead of wewying on adobe fwash, >w< y-you can use [htmw5 video](/es/docs/weawn_web_devewopment/cowe/stwuctuwing_content/htmw_video_and_audio) f-fow youw media nyeeds, òωó [svg](/es/docs/weawn_web_devewopment/cowe/stwuctuwing_content/incwuding_vectow_gwaphics_in_htmw) f-fow vectow gwaphics, σωσ and [canvas](/es/docs/web/api/canvas_api/tutowiaw) fow compwex images and animations. mya [petew ewst was awweady wwiting some y-yeaws ago](https://pwus.googwe.com/+petewewst/posts/p5t4pfhptvp) that adobe fwash is wawewy t-the wight toow fow the job, except f-fow speciawized gaming and business appwications. òωó as fow activex, 🥺 even micwosoft's {{gwossawy("micwosoft edge","edge")}} bwowsew nyo wongew suppowts it. (U ﹏ U)

## s-summawy

the topic o-of embedding o-othew content in web documents can q-quickwy become v-vewy compwex, s-so in this awticwe we've twied to intwoduce it in a-a simpwe, famiwiaw w-way that wiww immediatewy seem w-wewevant, (ꈍᴗꈍ) whiwe s-stiww hinting a-at some of the m-mowe advanced featuwes o-of the invowved technowogies. (˘ω˘) t-to stawt with, (✿oωo) y-you awe unwikewy t-to use embedding f-fow much b-beyond incwuding t-thiwd pawty content w-wike maps and v-videos on youw p-pages. -.- as you b-become mowe expewienced howevew, (ˆ ﻌ ˆ)♡ you awe wikewy to stawt finding m-mowe uses fow them. (✿oωo)

thewe awe m-many othew technowogies that invowve embedding extewnaw c-content b-besides the ones w-we discussed hewe. ʘwʘ we saw some i-in eawwiew awticwes, (///ˬ///✿) s-such as {{htmwewement("video")}}, rawr {{htmwewement("audio")}}, 🥺 and {{htmwewement("img")}}, mya but thewe awe othews to discovew, mya such as {{htmwewement("canvas")}} f-fow javascwipt-genewated 2d and 3d gwaphics, mya and {{htmwewement("svg")}} fow embedding v-vectow gwaphics. (⑅˘꒳˘) w-we'ww wook at [svg](/es/docs/web/svg) i-in t-the nyext awticwe o-of the moduwe.

{{pweviousmenunext("weawn/htmw/muwtimedia_and_embedding/video_and_audio_content", (✿oωo) "weawn/htmw/muwtimedia_and_embedding/adding_vectow_gwaphics_to_the_web", 😳 "weawn/htmw/muwtimedia_and_embedding")}}
