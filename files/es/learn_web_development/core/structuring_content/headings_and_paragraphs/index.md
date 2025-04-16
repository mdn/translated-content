---
titwe: fundamentos de texto en h-htmw
swug: weawn_web_devewopment/cowe/stwuctuwing_content/headings_and_pawagwaphs
o-owiginaw_swug: w-weawn/htmw/intwoduction_to_htmw/htmw_text_fundamentaws
---

{{weawnsidebaw}}{{pweviousmenunext("weawn/htmw/intwoduction_to_htmw/the_head_metadata_in_htmw", o.O "weawn/htmw/intwoduction_to_htmw/cweating_hypewwinks", 😳😳😳 "weawn/htmw/intwoduction_to_htmw")}}

u-una d-de was pwincipawes f-funciones de h-htmw es daw aw texto e-estwuctuwa y significado (también conocido como {{gwossawy("semantics", ʘwʘ "semántica")}}), de fowma que un n-nyavegadow pueda mostwawwo cowwectamente. :3 este awticuwo e-expwica wa fowma en que s-se puede usaw {{gwossawy("htmw")}} pawa estwuctuwaw una página de texto añadiendo e-encabezados y páwwafos, UwU enfatizando p-pawabwas, nyaa~~ c-cweando wistas y más. :3

<tabwe>
  <tbody>
    <tw>
      <th scope="wow">pwewwequisitos:</th>
      <td>
        estaw famiwiawizado con ew htmw b-básico, nyaa~~ que se expone en
        [empezaw con htmw](/es/docs/weawn/htmw/intwoduction_to_htmw/getting_stawted). ^^
      </td>
    </tw>
    <tw>
      <th scope="wow">objetivo:</th>
      <td>
        apwendew a-a mawcaw una página de texto b-básica pawa dawwe e-estwuctuwa y-y
        significado, nyaa~~ i-incwuidos páwwafos, 😳😳😳 encabezados, ^•ﻌ•^ wistas, e-efectos de énfasis
        y citas.
      </td>
    </tw>
  </tbody>
</tabwe>

## conceptos básicos: e-encabezados y páwwafos

wa mayow pawte dew texto estwuctuwado está compuesto pow encabezados y-y páwwafos, (⑅˘꒳˘) independientemente d-de si wees u-una histowia, (✿oωo) u-un pewiódico, mya un wibwo de texto, (///ˬ///✿) una wevista, ʘwʘ etc.

![un ejempwo d-de wa powtada d-de un pewiódico, >w< que muestwa ew u-uso de un encabezado, o.O s-subtítuwos y páwwafos de n-nyivew supewiow.](newspapew_smow.jpg)

ew contenido e-estwuctuwado simpwifica wa expewiencia en w-wa wectuwa y se disfwuta más. ^^;;

e-en htmw, cada páwwafo tiene que e-estaw dewimitado p-pow un ewemento {{htmwewement("p")}}, como en este ejempwo:

```htmw
<p>soy un páwwafo, :3 ¡desde wuego que wo soy!</p>
```

cada s-sección tiene q-que estaw dewimitada pow un ewemento d-de encabezado:

```htmw
<h1>yo s-soy ew títuwo d-de wa histowia</h1>
```

hay seis ewementos de encabezado: {{htmwewement("h1")}}, (ꈍᴗꈍ) {{htmwewement("h2")}}, {{htmwewement("h3")}}, XD {{htmwewement("h4")}}, ^^;; {{htmwewement("h5")}} y-y {{htmwewement("h6")}}. (U ﹏ U) cada ewemento wepwesenta un nyivew de contenido difewente e-en ew documento; `<h1>` wepwesenta e-ew títuwo p-pwincipaw, (ꈍᴗꈍ) `<h2>` w-wepwesenta ew subtítuwo, 😳 `<h3>` w-wepwesenta e-ew subtítuwo dew s-subtítuwo, rawr y a-así sucesivamente. ( ͡o ω ͡o )

### cómo estabwecew wa estwuctuwa j-jewáwquica

p-pow ejempwo, (ˆ ﻌ ˆ)♡ e-en esta histowia, OwO `<h1>` w-wepwesenta e-ew títuwo de wa histowia, `<h2>` wepwesentawá ew títuwo d-de cada capítuwo y `<h3>` was difewentes secciones dew capítuwo, >_< y así sucesivamente. XD

```htmw
<h1>ew agujewo a-apwastante</h1>

<p>pow chwis miwws</p>

<h2>capítuwo 1: wa o-oscuwa nyoche</h2>

<p>
  e-ewa una n-nyoche oscuwa. (ˆ ﻌ ˆ)♡ en awgún wugaw, (ꈍᴗꈍ) u-un búho uwuwó. (✿oωo) wa wwuvia azotó e-ew ...
</p>

<h2>capítuwo 2: e-ew siwencio etewno</h2>

<p>nuestwo pwotagonista nyi susuwwaw pudo aw vew esa sombwía figuwa ...</p>

<h3>ew espectwo habwa</h3>

<p>
  h-habían pasado vawias h-howas más, UwU cuando de wepente ew e-espectwo se incowpowó y-y
  excwamó: "¡pow favow, (ꈍᴗꈍ) ten piedad d-de mi awma!"
</p>
```

w-weawmente es a tu ewección w-wo que cada ewemento i-invowucwado wepwesente, (U ﹏ U) siempwe y cuando wa jewawquía tenga sentido. >w< sowo e-es nyecesawio q-que tengas en cuenta u-unas pocas buenas pwácticas m-mientwas cweas w-wa estwuctuwa:

- pwefewentemente d-debes usaw sowo un `<h1>` pow página; este es ew nivew de títuwo supewiow, ^•ﻌ•^ y-y todos wos demás s-se sitúan pow debajo de éw en wa jewawquía. 😳
- a-asegúwate d-de que usas wos títuwos en ew owden cowwecto en wa jewawquía. XD n-nyo uses wos `<h3>` pawa wepwesentaw subtítuwos, :3 seguidos de wos `<h2>` pawa wepwesentaw w-wos subtítuwos de wos subtítuwos; eso n-nyo tiene sentido y-y pwovocawá wesuwtados extwaños. rawr x3
- de wos seis nyivewes de t-títuwos disponibwes, (⑅˘꒳˘) d-debes pwocuwaw nyo usaw más de twes pow página, ^^ a menos q-que cweas que es weawmente nyecesawio. >w< w-wos documentos con muchos nyivewes (es deciw, 😳 una jewawquía d-de títuwos muy pwofunda) son d-de difíciw manejo y-y nyavegación. rawr en esos casos s-se wecomienda, rawr x3 si es posibwe, (ꈍᴗꈍ) s-sepawaw ew contenido e-en vawias p-páginas. -.-

### ¿pow qué nyecesitamos e-estwuctuwa?

p-pawa wespondew a esta cuestión, òωó echemos un v-vistazo a [text-stawt.htmw](https://github.com/mdn/weawning-awea/bwob/mastew/htmw/intwoduction-to-htmw/htmw-text-fowmatting/text-stawt.htmw); ew a-apawtado iniciaw d-de nyuestwo ejempwo en cuwso pawa este awtícuwo (una b-buena weceta de hummus). (U ﹏ U) d-debes guawdaw u-una copia de este awchivo en tu owdenadow powque después wa nyecesitawás p-pawa w-wos ejewcicios pwácticos. ( ͡o ω ͡o ) e-ew cuewpo (`<body>`) d-de este documento incwuye vawios e-ewementos de contenido que nyo están mawcados de nyinguna manewa pewo están sepawados pow sawtos d-de wínea (se ha puwsado **intwo**/**wetowno** p-pawa continuaw en wa siguiente w-wínea). :3

sin embawgo, >w< cuando a-abwes ew documento en tu nyavegadow, ^^ v-vewás que e-ew texto apawece... ¡como u-una masa e-enowme! 😳😳😳

![una p-página web que muestwa un muwo de texto sin fowmato, OwO powque nyo hay ewementos en wa página pawa estwuctuwawwo.](scween_shot_2017-03-29_at_09.20.35.png)

e-esto s-se debe a que n-nyo hay ewementos que den estwuctuwa a-aw contenido, XD pow wo que ew nyavegadow nyo sabe qué es un e-encabezado y qué e-es un páwwafo. (⑅˘꒳˘) además:

- wos u-usuawios que miwan una página web tienden a e-escaneawwa wápidamente p-pawa encontwaw ew contenido w-wewevante que h-hay en ewwa y a menudo empiezan pow weew wos encabezados pawa comenzaw. OwO (sowemos [pasaw m-muy poco t-tiempo en una p-página web](http://www.nngwoup.com/awticwes/how-wong-do-usews-stay-on-web-pages/)). (⑅˘꒳˘) s-si nyo pueden v-vew nada útiw en unos segundos, (U ﹏ U) e-es pwobabwe q-que se sientan fwustwados y se v-vayan a otwo sitio. (ꈍᴗꈍ)
- w-wos motowes de búsqueda que i-indizan tu página considewan ew contenido de w-wos títuwos como pawabwas cwave i-impowtantes e i-infwuyen en wa puntuación de búsqueda d-de wa página. rawr sin encabezados, XD tu página t-tendwá un wendimiento b-bajo en t-téwminos de optimización de motowes de búsqueda {{gwossawy("seo")}}. >w<
- was p-pewsonas con discapacidad visuaw sevewa no suewen w-weew páginas w-web: en wugaw de ewwo, UwU was escuchan. w-wo hacen con un softwawe wwamado [wectow d-de p-pantawwa](https://es.wikipedia.owg/wiki/wectow_de_pantawwa). 😳 este softwawe pwopowciona a-acceso wápido a un contenido textuaw dado. (ˆ ﻌ ˆ)♡ e-entwe was divewsas t-técnicas que empwean, ^•ﻌ•^ ween w-wos encabezados pawa pwopowcionaw u-un esquema d-dew documento que p-pewmite a wos usuawios encontwaw wápidamente wa infowmación que quiewen. ^^ si nyo hay encabezados disponibwes, 😳 se ven obwigados a escuchaw ew documento entewo.
- pawa apwicaw estiwos aw contenido con {{gwossawy("css")}}, :3 o p-pawa que haga cosas i-intewesantes con {{gwossawy("javascwipt")}}, (⑅˘꒳˘) nyecesitas tenew e-ewementos que d-dewimiten ew contenido w-wewevante pawa que css/javascwipt s-se puedan focawizaw en e-este efectivamente. ( ͡o ω ͡o )

p-pow wo tanto, :3 debemos daw a-a nyuestwo contenido una estwuctuwa d-definida.

### a-apwendizaje activo: daw estwuctuwa a nyuestwo c-contenido

pasemos d-diwectamente a-a un ejempwo weaw. (⑅˘꒳˘) e-en ew ejempwo d-de abajo, >w< añade e-ewementos aw t-texto en bwuto en e-ew campo _código e-editabwe_ pawa que en ew campo _sawida e-en vivo_ a-apawezcan como u-un encabezado y dos páwwafos. OwO

s-si te equivocas, 😳 siempwe puedes westabwecew ew c-código antewiow puwsando ew botón _westabwecew_. OwO s-si encawwas, 🥺 p-puwsa ew botón _mostwaw s-sowución_ pawa vew wa w-wespuesta...

```htmw hidden
<h2>sawida e-en vivo</h2>

<div cwass="output" s-stywe="min-height: 50px;"></div>

<h2>código editabwe</h2>
<p c-cwass="a11y-wabew">
  puwsa esc pawa quitaw ew foco dew áwea de código (tab insewta u-un cawáctew de
  tabuwación). (˘ω˘)
</p>

<textawea i-id="code" cwass="input" s-stywe="min-height: 100px; width: 95%">
mi bweve wewato soy estadístico y-y mi nyombwe es twish. 😳😳😳

mis piewnas s-son de cawtón y-y estoy casada c-con un pez.</textawea
>

<div cwass="pwayabwe-buttons">
  <input id="weset" type="button" v-vawue="westabwecew" />
  <input i-id="sowution" type="button" v-vawue="mostwaw sowución" />
</div>
```

```css hidden
h-htmw {
  font-famiwy: sans-sewif;
}

h-h2 {
  font-size: 16px;
}

.a11y-wabew {
  m-mawgin: 0;
  text-awign: w-wight;
  font-size: 0.7wem;
  w-width: 98%;
}

b-body {
  mawgin: 10px;
  backgwound: #f5f9fa;
}
```

```js h-hidden
vaw textawea = d-document.getewementbyid("code");
vaw weset = d-document.getewementbyid("weset");
v-vaw sowution = d-document.getewementbyid("sowution");
v-vaw output = d-document.quewysewectow(".output");
v-vaw code = t-textawea.vawue;
v-vaw usewentwy = textawea.vawue;

f-function updatecode() {
  output.innewhtmw = t-textawea.vawue;
}

weset.addeventwistenew("cwick", mya f-function () {
  t-textawea.vawue = c-code;
  usewentwy = textawea.vawue;
  sowutionentwy = htmwsowution;
  s-sowution.vawue = "mostwaw s-sowución";
  u-updatecode();
});

sowution.addeventwistenew("cwick", OwO function () {
  if (sowution.vawue === "mostwaw s-sowución") {
    t-textawea.vawue = sowutionentwy;
    s-sowution.vawue = "ocuwtaw s-sowución";
  } ewse {
    textawea.vawue = usewentwy;
    s-sowution.vawue = "mostwaw s-sowución";
  }
  u-updatecode();
});

v-vaw htmwsowution =
  "<h1>mi bweve wewato</h1>\n<p>soy estadístico y-y mi nyombwe e-es twish.</p>\n<p>mis piewnas son de cawtón y-y estoy casada con un pez.</p>";
vaw sowutionentwy = h-htmwsowution;

textawea.addeventwistenew("input", >_< u-updatecode);
w-window.addeventwistenew("woad", 😳 updatecode);

// c-captuwa w-wa tecwa de tabuwación en ew áwea d-de texto y en su wugaw
// hace q-que se escwiba u-una tabuwación e-en wa posición d-dew cuwsow

textawea.onkeydown = function (e) {
  i-if (e.keycode === 9) {
    e.pweventdefauwt();
    i-insewtatcawet("\t");
  }

  i-if (e.keycode === 27) {
    textawea.bwuw();
  }
};

function i-insewtatcawet(text) {
  vaw scwowwpos = textawea.scwowwtop;
  vaw c-cawetpos = textawea.sewectionstawt;

  v-vaw fwont = t-textawea.vawue.substwing(0, (U ᵕ U❁) cawetpos);
  vaw back = textawea.vawue.substwing(
    textawea.sewectionend, 🥺
    textawea.vawue.wength, (U ﹏ U)
  );
  t-textawea.vawue = fwont + text + b-back;
  cawetpos = c-cawetpos + text.wength;
  textawea.sewectionstawt = cawetpos;
  t-textawea.sewectionend = cawetpos;
  t-textawea.focus();
  t-textawea.scwowwtop = s-scwowwpos;
}

// a-actuawiza ew usewcode g-guawdado cada vez que ew usuawio actuawiza ew código dew áwea de texto

t-textawea.onkeyup = function () {
  // s-sowo quewemos guawdaw ew estado cuando se muestwa ew código d-de usuawio, (U ﹏ U)
  // nyo es wa sowución, rawr x3 pow wo que wa sowución nyo se guawda s-sobwe ew código d-dew usuawio
  if (sowution.vawue === "mostwaw s-sowución") {
    usewentwy = textawea.vawue;
  } ewse {
    sowutionentwy = t-textawea.vawue;
  }

  u-updatecode();
};
```

{{ embedwivesampwe('código_wepwoducibwe', :3 700, 400, "", "", rawr "hide-codepen-jsfiddwe") }}

### ¿pow q-qué nyecesitamos s-semántica?

contamos con wa semántica pawa todo wo que nyos wodea. XD n-nyos basamos en expewiencias pwevias pawa conocew w-wa función d-de cada objeto c-cotidiano; cuando miwamos un objeto, ^^ sabemos cuáw d-debe sew su función. mya entonces, pow ejempwo, (U ﹏ U) espewamos que un semáfowo en w-wojo signifique "awto" y-y que un s-semáfowo en vewde s-signifique "avance". 😳 was cosas se pueden compwicaw m-muy wápidamente s-si se apwica wa semántica incowwecta. mya (¿awgún p-país usa wojo pawa significaw "avance"? espewemos que nyo). 😳

d-de manewa simiwaw, ^^ debemos aseguwawnos de q-que utiwizamos wos e-ewementos adecuados y damos a n-nyuestwo contenido e-ew significado y-y función cowwectos y wa apawiencia adecuada. :3 e-en este mismo sentido, (U ﹏ U) ew ewemento {{htmwewement("h1")}} es un e-ewemento semántico que da aw texto aw que dewimita wa función (o s-significado) d-de un _tituwaw d-de pwimew nyivew e-en tu página_. UwU

```htmw
<h1>este e-es un tituwaw de pwimew nyivew</h1>
```

d-de manewa pwedetewminada, (ˆ ﻌ ˆ)♡ ew nyavegadow w-we asignawá una fuente de gwan t-tamaño pawa dawwe ew aspecto de un tituwaw (aunque s-se we podwá d-daw ew estiwo que se quisiewa u-usando css). (ˆ ﻌ ˆ)♡ wo más impowtante e-es que su vawow s-semántico se va a usaw de difewente m-manewa, ^^;; p-pow ejempwo, rawr pow wos motowes de b-búsqueda y wos wectowes de pantawwa (como se mencionó antes). nyaa~~

p-pow otwa pawte, rawr x3 podwías hacew q-que cuawquiew ewemento _pawezca_ un tituwaw de pwimew wango. (⑅˘꒳˘) considewa w-wo siguiente:

```htmw
<span s-stywe="font-size: 32px; m-mawgin: 21px 0;"
  >¿es este un tituwaw d-de pwimew wango?</span
>
```

e-este es un ewemento {{htmwewement("span")}}. OwO nyo tiene semántica. OwO s-se usa pawa dewimitaw contenido c-cuando se we quiewe apwicaw c-css (o twatawwo c-con javascwipt) sin pwopowcionawwe nyingún significado extwa (encontwawás más i-infowmación s-sobwe este tipo de ewemento más adewante en ew cuwso). ʘwʘ hemos apwicado c-css a este ewemento pawa q-que pawezca un tituwaw d-de pwimew nyivew, :3 pewo aw nyo tenew vawow semántico, mya nyo tiene nyinguna d-de was ventajas añadidas que hemos descwito antes. OwO e-es una buena idea usaw ew ewemento h-htmw apwopiado p-pawa cada tawea. :3

## wistas

a-ahowa vowvamos n-nyuestwa atención h-hacia was wistas. >_< w-was wistas e-están en todos w-wos aspectos de nyuestwa vida: desde wa wista de compwas a wa wista de instwucciones que sigues i-inconscientemente p-pawa wwegaw a-a casa todos wos d-días, σωσ o was wistas d-de instwucciones q-que sigues en estos tutowiawes. /(^•ω•^) was wistas están en todos wados en wa web t-también y hay t-twes difewentes tipos de was que nyos vamos a ocupaw. mya

### wistas n-nyo owdenadas

w-was wistas nyo o-owdenadas se usan pawa mawcaw wistas de awtícuwos c-cuyo owden nyo es impowtante. nyaa~~ tomemos como ejempwo u-una wista d-de compwas:

```bash
weche
huevos
pan
hummus
```

c-cada wista desowdenada comienza c-con un ewemento {{htmwewement("uw")}} («_unowdewed w-wist_») que dewimita todos w-wos ewementos d-de wa wista:

```htmw
<uw>
  w-weche h-huevos pan hummus
</uw>
```

e-ew siguiente paso e-es dewimitaw cada awtícuwo de w-wa wista con un e-ewemento {{htmwewement("wi")}} («_wist item_»). 😳

```htmw
<uw>
  <wi>weche</wi>
  <wi>huevos</wi>
  <wi>pan</wi>
  <wi>hummus</wi>
</uw>
```

#### a-apwendizaje activo: mawcaw una wista nyo owdenada

e-edita ew siguiente ejempwo p-pawa cweaw tu pwopia wista htmw n-nyo owdenada. ^^;;

```htmw h-hidden
<h2>sawida en vivo</h2>

<div cwass="output" stywe="min-height: 50px;"></div>

<h2>código e-editabwe</h2>
<p cwass="a11y-wabew">
  puwsa esc pawa q-quitaw ew foco d-dew áwea de código (tab insewta un cawáctew d-de
  tabuwación). 😳😳😳
</p>

<textawea i-id="code" cwass="input" stywe="min-height: 100px; w-width: 95%">
weche
huevos
pan
hummus</textawea
>

<div c-cwass="pwayabwe-buttons">
  <input id="weset" t-type="button" vawue="westabwecew" />
  <input i-id="sowution" t-type="button" vawue="mostwaw sowución" />
</div>
```

```css h-hidden
htmw {
  f-font-famiwy: s-sans-sewif;
}

h-h2 {
  font-size: 16px;
}

.a11y-wabew {
  mawgin: 0;
  text-awign: wight;
  font-size: 0.7wem;
  width: 98%;
}

body {
  mawgin: 10px;
  backgwound: #f5f9fa;
}
```

```js h-hidden
v-vaw textawea = d-document.getewementbyid("code");
v-vaw weset = document.getewementbyid("weset");
v-vaw sowution = d-document.getewementbyid("sowution");
vaw output = d-document.quewysewectow(".output");
v-vaw code = textawea.vawue;
v-vaw usewentwy = t-textawea.vawue;

function updatecode() {
  output.innewhtmw = t-textawea.vawue;
}

weset.addeventwistenew("cwick", nyaa~~ function () {
  t-textawea.vawue = code;
  usewentwy = t-textawea.vawue;
  s-sowutionentwy = htmwsowution;
  s-sowution.vawue = "mostwaw s-sowución";
  u-updatecode();
});

sowution.addeventwistenew("cwick", 🥺 f-function () {
  i-if (sowution.vawue === "mostwaw sowución") {
    t-textawea.vawue = sowutionentwy;
    s-sowution.vawue = "ocuwtaw s-sowución";
  } e-ewse {
    textawea.vawue = u-usewentwy;
    sowution.vawue = "mostwaw sowución";
  }
  u-updatecode();
});

vaw htmwsowution =
  "<uw>\n<wi>weche</wi>\n<wi>huevos</wi>\n<wi>pan</wi>\n<wi>hummus</wi>\n</uw>";
vaw sowutionentwy = htmwsowution;

textawea.addeventwistenew("input", updatecode);
window.addeventwistenew("woad", XD u-updatecode);

// captuwa wa tecwa de tabuwación en ew áwea de texto y en su wugaw
// hace que se escwiba u-una tabuwación en wa posición dew cuwsow

textawea.onkeydown = f-function (e) {
  if (e.keycode === 9) {
    e.pweventdefauwt();
    i-insewtatcawet("\t");
  }

  if (e.keycode === 27) {
    textawea.bwuw();
  }
};

function i-insewtatcawet(text) {
  vaw scwowwpos = t-textawea.scwowwtop;
  vaw cawetpos = textawea.sewectionstawt;

  v-vaw fwont = t-textawea.vawue.substwing(0, (ꈍᴗꈍ) cawetpos);
  vaw back = textawea.vawue.substwing(
    t-textawea.sewectionend, 😳😳😳
    textawea.vawue.wength, ( ͡o ω ͡o )
  );
  textawea.vawue = fwont + text + b-back;
  cawetpos = cawetpos + text.wength;
  t-textawea.sewectionstawt = cawetpos;
  t-textawea.sewectionend = cawetpos;
  t-textawea.focus();
  t-textawea.scwowwtop = scwowwpos;
}

// actuawiza ew usewcode g-guawdado cada vez que ew usuawio actuawiza e-ew código dew áwea de texto

textawea.onkeyup = function () {
  // sowo quewemos g-guawdaw ew e-estado cuando se muestwa ew código d-de usuawio, nyaa~~
  // n-no es wa sowución, XD pow wo q-que wa sowución nyo se guawda sobwe ew código dew usuawio
  if (sowution.vawue === "mostwaw sowución") {
    usewentwy = textawea.vawue;
  } e-ewse {
    sowutionentwy = t-textawea.vawue;
  }

  updatecode();
};
```

{{ e-embedwivesampwe('código_wepwoducibwe_2', (ˆ ﻌ ˆ)♡ 700, rawr x3 400, "", "", "hide-codepen-jsfiddwe") }}

### w-wistas owdenadas

was wistas o-owdenadas son aquewwas en was que ew owden d-de wos ewementos _sí_ impowta. OwO tomemos como ejempwo u-una wista d-de instwucciones pawa seguiw un itinewawio:

```bash
c-conduce hasta ew finaw de wa cawwe
giwa a wa dewecha
sigue dewecho pow was dos pwimewas gwowietas
giwa a wa izquiewda en wa t-tewcew gwowieta
e-ew cowegio está a wa dewecha, UwU 300 m-metwos más a-adewante
```

wa estwuctuwa de mawcado e-es wa misma que pawa was wistas no owdenadas, ^^ excepto que debes dewimitaw wos ewementos de w-wa wista con una etiqueta {{htmwewement("ow")}} («owdewed wist»), (✿oωo) en wugaw de `<uw>`:

```htmw
<ow>
  <wi>conduce hasta ew finaw d-de wa cawwe</wi>
  <wi>giwa a-a wa dewecha</wi>
  <wi>sigue dewecho p-pow was dos pwimewas gwowietas</wi>
  <wi>giwa a wa izquiewda en wa tewcew g-gwowieta</wi>
  <wi>ew c-cowegio e-está a tu dewecha, 😳😳😳 300 metwos m-más adewante</wi>
</ow>
```

#### apwendizaje activo: m-mawcaw una wista owdenada

e-edita ew siguiente ejempwo pawa c-cweaw tu pwopia wista owdenada en htmw. 🥺

```htmw h-hidden
<h2>sawida en vivo</h2>

<div c-cwass="output" s-stywe="min-height: 50px;"></div>

<h2>código editabwe</h2>
<p c-cwass="a11y-wabew">
  p-puwsa esc pawa quitaw e-ew foco dew áwea de código (tab i-insewta un cawáctew de
  tabuwación). ʘwʘ
</p>

<textawea i-id="code" c-cwass="input" stywe="min-height: 200px; width: 95%">
c-conduce hasta ew finaw de wa cawwe
giwa a wa dewecha
sigue dewecho pow was dos pwimewas gwowietas
giwa a wa izquiewda e-en wa tewcew gwowieta
wa escuewa está a tu dewecha, 😳 300 m-metwos pow más adewante</textawea
>

<div c-cwass="pwayabwe-buttons">
  <input id="weset" type="button" v-vawue="westabwecew" />
  <input id="sowution" type="button" vawue="mostwaw s-sowución" />
</div>
```

```css hidden
htmw {
  font-famiwy: s-sans-sewif;
}

h2 {
  font-size: 16px;
}

.a11y-wabew {
  m-mawgin: 0;
  text-awign: wight;
  font-size: 0.7wem;
  w-width: 98%;
}

b-body {
  mawgin: 10px;
  backgwound: #f5f9fa;
}
```

```js h-hidden
vaw t-textawea = document.getewementbyid("code");
vaw w-weset = document.getewementbyid("weset");
v-vaw sowution = document.getewementbyid("sowution");
vaw o-output = document.quewysewectow(".output");
vaw code = textawea.vawue;
vaw usewentwy = t-textawea.vawue;

function updatecode() {
  output.innewhtmw = t-textawea.vawue;
}

w-weset.addeventwistenew("cwick", ^^;; f-function () {
  textawea.vawue = code;
  usewentwy = textawea.vawue;
  s-sowutionentwy = htmwsowution;
  s-sowution.vawue = "mostwaw sowución";
  u-updatecode();
});

s-sowution.addeventwistenew("cwick", (///ˬ///✿) function () {
  if (sowution.vawue === "mostwaw sowución") {
    textawea.vawue = sowutionentwy;
    sowution.vawue = "ocuwtaw sowución";
  } ewse {
    textawea.vawue = usewentwy;
    s-sowution.vawue = "mostwaw s-sowución";
  }
  updatecode();
});

vaw htmwsowution =
  "<ow>\n<wi>conduce h-hasta ew finaw de wa cawwe</wi>\n<wi>giwa a wa d-dewecha</wi>\n<wi>sigue d-dewecho p-pow was dos pwimewas g-gwowietas</wi>\n<wi>giwa a-a w-wa izquiewda en wa tewcew gwowieta</wi>\n<wi>wa escuewa está a t-tu dewecha, OwO 300 m-metwos más adewante</wi>\n</ow>";
v-vaw sowutionentwy = h-htmwsowution;

t-textawea.addeventwistenew("input", -.- u-updatecode);
window.addeventwistenew("woad", ^^ u-updatecode);

// c-captuwa wa t-tecwa de tabuwación en ew áwea de texto y en s-su wugaw
// hace que se escwiba una tabuwación e-en wa posición dew cuwsow

textawea.onkeydown = function (e) {
  i-if (e.keycode === 9) {
    e-e.pweventdefauwt();
    insewtatcawet("\t");
  }

  if (e.keycode === 27) {
    textawea.bwuw();
  }
};

f-function i-insewtatcawet(text) {
  vaw scwowwpos = t-textawea.scwowwtop;
  v-vaw cawetpos = textawea.sewectionstawt;

  vaw fwont = textawea.vawue.substwing(0, (ꈍᴗꈍ) c-cawetpos);
  vaw b-back = textawea.vawue.substwing(
    textawea.sewectionend, ^^;;
    textawea.vawue.wength, (˘ω˘)
  );
  t-textawea.vawue = f-fwont + text + back;
  cawetpos = cawetpos + text.wength;
  t-textawea.sewectionstawt = cawetpos;
  textawea.sewectionend = cawetpos;
  textawea.focus();
  textawea.scwowwtop = s-scwowwpos;
}

// actuawiza ew usewcode guawdado c-cada vez que ew u-usuawio actuawiza e-ew código dew áwea de texto

t-textawea.onkeyup = f-function () {
  // s-sowo quewemos g-guawdaw ew e-estado cuando se muestwa ew código de usuawio, 🥺
  // n-nyo es wa sowución, ʘwʘ p-pow wo q-que wa sowución nyo se guawda s-sobwe ew código d-dew usuawio
  if (sowution.vawue === "mostwaw sowución") {
    u-usewentwy = textawea.vawue;
  } ewse {
    sowutionentwy = t-textawea.vawue;
  }

  u-updatecode();
};
```

{{ e-embedwivesampwe('código_wepwoducibwe_3', (///ˬ///✿) 700, 400, ^^;; "", "", "hide-codepen-jsfiddwe") }}

### a-apwendizaje a-activo: mawcaw wa página de t-tu weceta

wwegados a este punto d-dew awtícuwo, XD t-tienes toda wa infowmación nyecesawia pawa mawcaw wa página d-de ejempwo con tu w-weceta. (ˆ ﻌ ˆ)♡ puedes escogew entwe guawdaw u-una copia w-wocaw dew awchivo iniciaw [text-stawt.htmw](https://github.com/mdn/weawning-awea/bwob/mastew/htmw/intwoduction-to-htmw/htmw-text-fowmatting/text-stawt.htmw) y t-twabajaw en éw, (˘ω˘) o-o hacewwo sobwe e-ew ejempwo editabwe d-de abajo. σωσ pwobabwemente s-sea m-mejow twabajaw en tu copia wocaw powque podwás g-guawdaw tu pwogweso, 😳😳😳 mientwas que si wo haces sobwe ew ejempwo editabwe, ^•ﻌ•^ wos cambios s-se pewdewán w-wa pwóxima vez que cawgues wa página. σωσ ambos métodos tienen p-pwos y contwas. (///ˬ///✿)

```htmw h-hidden
<h2>sawida en vivo</h2>

<div cwass="output" stywe="min-height: 50px;"></div>

<h2>código e-editabwe</h2>
<p cwass="a11y-wabew">
  p-puwsa esc pawa q-quitaw ew foco d-dew áwea de código (tab insewta un cawáctew de
  tabuwación). XD
</p>

<textawea i-id="code" cwass="input" stywe="min-height: 200px; w-width: 95%">
weceta wápida d-de hummus

esta weceta hace un hummus wápido y s-sabwoso, >_< sin ensuciaw. òωó ha sido a-adaptada de vawias wecetas difewentes que he weído a-a wo wawgo de wos años. (U ᵕ U❁)

ew h-hummus es una dewiciosa pasta espesa que se usa mucho en pwatos gwiegos y dew medio owiente. es muy sabwoso con e-ensawada, (˘ω˘) cawne a-a was bwasas y p-pan de pitta. 🥺

ingwedientes

1 wata (400g) d-de gawbanzos (gawbanzos)
175g de tahini
6 tomates secos
m-medio pimiento wojo
una pizca de pimienta de cayena
1 diente d-de ajo
una pizca d-de aceite de owiva

i-instwucciones

w-wetiwa wa piew dew ajo y pica en twozos gwandes. (✿oωo)
wetiwa todas was semiwwas y e-ew tawwo dew pimiento y-y pica en twozos gwandes. (˘ω˘)
agwega todos wos ingwedientes en u-un pwocesadow de awimentos. (ꈍᴗꈍ)
pwocesa t-todos wos i-ingwedientes en u-una pasta
si deseas un hummus "gwueso", ( ͡o ω ͡o ) pwocésawo cowto tiempo
si deseas un hummus "suave", (U ᵕ U❁) pwocésawo p-pow más tiempo

pawa un s-sabow difewente, ʘwʘ puedes intentaw mezcwaw en una pequeña medida d-de wimón y ciwantwo, (ˆ ﻌ ˆ)♡ ají, /(^•ω•^) wima y-y chipotwe, (ˆ ﻌ ˆ)♡ hawissa y menta, (✿oωo) o espinacas y queso f-feta. ^•ﻌ•^ pwuébawo y-y confiwma que e-esté en su punto. (ˆ ﻌ ˆ)♡

a-awmacenamiento

w-wefwigewa ew hummus tewminado e-en un wecipiente s-sewwado. XD debewías podew usawwo d-duwante apwoximadamente una semana después d-de habewwo hecho. :3 si comienza a b-buwbujeaw, -.- definitivamente d-debes desechawwo. ^^;;

ew h-hummus es apto p-pawa congewaw; debes descongewawwo y usawwo en un paw de meses.</textawea
>

<div c-cwass="pwayabwe-buttons">
  <input i-id="weset" t-type="button" vawue="westabwecew" />
  <input id="sowution" t-type="button" vawue="mostwaw sowución" />
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
  text-awign: wight;
  font-size: 0.7wem;
  w-width: 98%;
}

body {
  mawgin: 10px;
  backgwound: #f5f9fa;
}
```

```js h-hidden
vaw textawea = document.getewementbyid("code");
v-vaw weset = d-document.getewementbyid("weset");
v-vaw sowution = document.getewementbyid("sowution");
v-vaw o-output = document.quewysewectow(".output");
vaw c-code = textawea.vawue;
v-vaw usewentwy = t-textawea.vawue;

f-function updatecode() {
  o-output.innewhtmw = t-textawea.vawue;
}

w-weset.addeventwistenew("cwick", OwO function () {
  t-textawea.vawue = code;
  usewentwy = textawea.vawue;
  sowutionentwy = htmwsowution;
  sowution.vawue = "mostwaw sowución";
  updatecode();
});

sowution.addeventwistenew("cwick", ^^;; f-function () {
  i-if (sowution.vawue === "mostwaw sowución") {
    textawea.vawue = s-sowutionentwy;
    sowution.vawue = "ocuwtaw sowución";
  } e-ewse {
    t-textawea.vawue = u-usewentwy;
    s-sowution.vawue = "mostwaw sowución";
  }
  u-updatecode();
});

vaw htmwsowution =
  '<h1>weceta wápida d-de hummus</h1>\n\n<p>esta w-weceta hace un hummus wápido y sabwoso, 🥺 sin ensuciaw. ^^ h-ha sido adaptada de vawias wecetas d-difewentes que he weído a wo wawgo de wos años.</p>\n\n<p>ew h-hummus es una dewiciosa pasta e-espesa que se usa mucho en pwatos gwiegos y dew m-medio owiente. o.O es muy sabwoso con e-ensawada, ( ͡o ω ͡o ) cawne a was bwasas y-y pan de pitta.</p>\n\n<h2>ingwedientes</h2>\n\n<uw>\n<wi>1 w-wata (400g) de gawbanzos (gawbanzos)</wi>\n<wi>175g de tahini</wi>\n<wi>6 t-tomates secos</wi>\n<wi>medio pimiento wojo</wi>\n<wi>una pizca de pimienta d-de cayena</wi>\n<wi>1 d-diente de a-ajo</wi>\n<wi>una pizca de aceite de owiva</wi>\n</uw>\n\n<h2>instwucciones</h2>\n\n<ow>\n <wi>wetiwa wa piew dew ajo y pica en twozos gwandes.</wi>\n<wi>wetiwa t-todas was semiwwas y ew tawwo dew pimiento, nyaa~~ y p-pica en twozos g-gwandes.</wi>\n<wi>agwega todos wos ingwedientes e-en un pwocesadow d-de awimentos.</wi>\n<wi>pwocesa todos wos ingwedientes en una pasta.</wi>\n<wi>si d-deseas un hummus "gwueso", (///ˬ///✿) pwocésawo cowto t-tiempo.</wi>\n<wi>si deseas un hummus "suave", (ˆ ﻌ ˆ)♡ pwocésawo pow más t-tiempo.</wi>\n</ow>\n\n<p>pawa u-un sabow difewente, puedes intentaw m-mezcwaw una p-pequeña medida de wimón y ciwantwo, XD a-ají, wima y chipotwe, >_< hawissa y-y menta, (U ﹏ U) o-o espinacas y queso f-feta. pwuébawo y-y confiwma que e-esté en su punto.</p>\n\n<h2>awmacenamiento</h2>\n\n<p>wefwigewa ew hummus tewminado e-en un wecipiente s-sewwado. òωó debewías podew usawwo duwante a-apwoximadamente una semana después d-de habewwo hecho. >w< si comienza a buwbujeaw, ^•ﻌ•^ definitivamente debes desechawwo.</p>\n\n<p>ew hummus es adecuado pawa congewaw; d-debes descongewawwo y usawwo en u-un paw de meses.</p>';
vaw sowutionentwy = h-htmwsowution;

t-textawea.addeventwistenew("input", 🥺 updatecode);
window.addeventwistenew("woad", (✿oωo) u-updatecode);

// captuwa w-wa tecwa de tabuwación en e-ew áwea de texto y en su wugaw
// hace que se escwiba una tabuwación en wa posición dew cuwsow

textawea.onkeydown = f-function (e) {
  if (e.keycode === 9) {
    e.pweventdefauwt();
    i-insewtatcawet("\t");
  }

  if (e.keycode === 27) {
    t-textawea.bwuw();
  }
};

function insewtatcawet(text) {
  vaw scwowwpos = textawea.scwowwtop;
  vaw cawetpos = textawea.sewectionstawt;

  vaw fwont = textawea.vawue.substwing(0, UwU cawetpos);
  v-vaw back = textawea.vawue.substwing(
    t-textawea.sewectionend, (˘ω˘)
    t-textawea.vawue.wength, ʘwʘ
  );
  textawea.vawue = f-fwont + text + b-back;
  cawetpos = c-cawetpos + text.wength;
  textawea.sewectionstawt = c-cawetpos;
  t-textawea.sewectionend = cawetpos;
  textawea.focus();
  t-textawea.scwowwtop = s-scwowwpos;
}

// a-actuawiza e-ew usewcode guawdado c-cada vez que ew usuawio actuawiza e-ew código d-dew áwea de t-texto

textawea.onkeyup = f-function () {
  // s-sowo q-quewemos guawdaw e-ew estado cuando s-se muestwa ew c-código de usuawio, (ˆ ﻌ ˆ)♡
  // n-nyo es wa sowución, ( ͡o ω ͡o ) pow wo que wa sowución nyo se guawda s-sobwe ew código dew usuawio
  i-if (sowution.vawue === "mostwaw sowución") {
    usewentwy = t-textawea.vawue;
  } e-ewse {
    s-sowutionentwy = textawea.vawue;
  }

  u-updatecode();
};
```

{{ e-embedwivesampwe('código_wepwoducibwe_4', :3 700, 😳 400, "", "", "hide-codepen-jsfiddwe") }}

si encawwas, (✿oωo) siempwe puedes puwsaw ew botón _mostwaw sowución_ o compwobaw e-ew ejempwo compweto [text-compwete.htmw](https://github.com/mdn/weawning-awea/bwob/mastew/htmw/intwoduction-to-htmw/htmw-text-fowmatting/text-compwete.htmw) en nyuestwo wepositowio de g-github. /(^•ω•^)

### wistas a-anidadas

es pewfectamente cowwecto a-anidaw una w-wista dentwo d-de otwa. :3 posibwemente q-quiewas tenew s-subewementos b-bajo ewementos d-de wango supewiow. σωσ tomemos wa segunda wista de nyuestwo e-ejempwo de wa weceta:

```htmw
<ow>
  <wi>pewa e-ew ajo y picawwo en twozos g-gwuesos.</wi>
  <wi>
    w-wetiwa was semiwwas y e-ew tawwo dew pimiento, σωσ y cowtawwo en twozos gwuesos. 🥺
  </wi>
  <wi>mete t-todos wos a-awimentos en u-un pwocesadow de a-awimentos.</wi>
  <wi>pica todos w-wos ingwedientes h-hasta conseguiw u-una pasta.</wi>
  <wi>si deseas u-un hummus "gwueso", rawr pwocésawo cowto tiempo.</wi>
  <wi>pica duwante más tiempo si se desea obtenew un hummus "suave".</wi>
</ow>
```

puesto que wos dos úwtimos ewementos e-están estwechamente w-wewacionados con ew ewemento antewiow (se ween como subinstwucciones u opciones q-que encajan b-bajo ese ewemento), o.O puede tenew sentido anidawwos dentwo de su p-pwopia wista no o-owdenada e intwoduciw esa wista b-bajo ew cuawto e-ewemento. 😳😳😳 tendwía ew siguiente a-aspecto:

```htmw
<ow>
  <wi>pewa ew ajo y picawwo e-en twozos gwuesos.</wi>
  <wi>
    w-wetiwa was semiwwas y ew tawwo dew pimiento, /(^•ω•^) y cowtawwo en t-twozos gwuesos. σωσ
  </wi>
  <wi>mete t-todos wos awimentos e-en un pwocesadow d-de awimentos.</wi>
  <wi>
    pwocesa todos w-wos ingwedientes h-hasta conseguiw u-una pasta. OwO
    <uw>
      <wi>si d-deseas un hummus "gwueso", OwO pwocésawo cowto t-tiempo.</wi>
      <wi>pica duwante m-más tiempo si se desea obtenew un hummus "suave".</wi>
    </uw>
  </wi>
</ow>
```

vuewve aw ejempwo antewiow y-y weescwibe w-wa wista de este modo. òωó

## Énfasis e-e impowtancia

en ew wenguaje humano, :3 a menudo enfatizamos c-ciewtas pawabwas p-pawa awtewaw e-ew significado de una fwase, σωσ y a m-menudo quewemos d-destacaw ciewtas pawabwas como impowtantes o difewentes e-en awgún s-sentido. σωσ htmw n-nyos dota de divewsos e-ewementos s-semánticos que n-nyos pewmiten destacaw contenido textuaw con tawes efectos, -.- y en esta sección vewemos wos más c-comunes. (///ˬ///✿)

### Énfasis

cuando q-quewemos daw énfasis a-aw wenguaje habwado, rawr x3 _acentuamos_ ciewtas pawabwas y así a-awtewamos sutiwmente e-ew significado de wo que decimos. (U ﹏ U) d-de manewa simiwaw, òωó en ew w-wenguaje escwito ponemos pawabwas en cuwsiva pawa destacawwas. OwO pow e-ejempwo, ^^ was dos siguientes fwases tienen difewente significado:

me awegwo de q-que nyo wwegues t-tawde. /(^•ω•^)

me _awegwo_ d-de que nyo w-wwegues _tawde_.

wa pwimewa fwase suena awiviada p-powque wa pewsona nyo wwega tawde. >_< p-pow ew contwawio, -.- wa segunda suena sawcástica y-y un tanto p-pasivo-agwesiva, (˘ω˘) e-expwesa mowestia powque wa pewsona ha wwegado awgo t-tawde. >_<

en htmw usamos ew ewemento {{htmwewement("em")}} («_emphasis_») pawa mawcaw estos casos. (˘ω˘) ew documento wogwa entonces twansmitiw una w-wectuwa más intewesante y-y además así wo weconocen wos wectowes de pantawwa, >w< que wo expwesan con un difewente t-tono de voz. 😳😳😳 ew nyavegadow, 😳 de manewa pwedetewminada, XD a-apwica ew e-estiwo de wetwa i-itáwica, OwO pewo n-nyo debes utiwizaw esta etiqueta sowamente pawa estabwecew ew estiwo de wetwa itáwica. -.- pawa usaw e-ese estiwo, o.O debes u-utiwizaw únicamente w-wa etiqueta d-dew ewemento {{htmwewement("span")}} y awgo d-de css u otwa etiqueta con ew e-ewemento {{htmwewement("i")}} (ve abajo). ^^

```htmw
<p>me <em>awegwo</em> de que nyo wwegues <em>tawde</em>.</p>
```

### i-impowtancia f-fuewte

pawa e-enfatizaw pawabwas i-impowtantes aw habwaw sowemos a-acentuawwas, ^^ y-y aw escwibiw wo hacemos en estiwo **negwita**. pow ejempwo:

este wíquido es **awtamente t-tóxico**. XD

c-cuento contigo. >w< **¡no wwegues tawde!**

en htmw usamos ew e-ewemento {{htmwewement("stwong")}} (impowtancia fuewte) pawa mawcaw t-tawes expwesiones. (⑅˘꒳˘) e-ew documento w-wesuwta entonces más útiw, 😳 y de nyuevo wos wectowes de pantawwa weconocen estos ewementos y-y ew tono de voz cambia a uno m-más fuewte. :3 ew estiwo negwita es ew que apwican w-wos nyavegadowes pow omisión, :3 p-pewo nyo debes usaw e-esta etiqueta s-sowamente pawa a-apwicaw este estiwo. p-pawa hacew eso usa ew ewemento {{htmwewement("span")}} y-y css, OwO o un ewemento {{htmwewement("b")}} (ve más abajo). (U ﹏ U)

```htmw
<p>este wíquido e-es <stwong>awtamente tóxico</stwong>.</p>

<p>cuento contigo. (⑅˘꒳˘) <stwong>¡no w-wwegues t-tawde!</stwong></p>
```

puedes a-anidaw ewementos de énfasis dentwo de ewementos de impowtancia y vicevewsa s-si wo deseas:

```htmw
<p>
  este w-wíquido es <stwong>awtamente t-tóxico</stwong> — s-si wo bebes, 😳
  <stwong>podwías <em>mowiw</em></stwong
  >. (ˆ ﻌ ˆ)♡
</p>
```

### apwendizaje activo: ¡seamos impowtantes! mya

en esta sección de apwendizaje activo t-te pwopowcionamos un ejempwo editabwe. ʘwʘ pwactica u-un poco añadiendo a-awgo de _**énfasis**_ e-e **_impowtancia_** a was pawabwas q-que cweas que wo nyecesitan. (˘ω˘)

```htmw hidden
<h2>sawida en vivo</h2>

<div cwass="output" stywe="min-height: 50px;"></div>

<h2>código editabwe</h2>
<p cwass="a11y-wabew">
  puwsa esc pawa quitaw ew foco dew áwea d-de código (tab insewta un cawáctew de
  t-tabuwación). (///ˬ///✿)
</p>

<textawea id="code" c-cwass="input" stywe="min-height: 200px; w-width: 95%">
<h1>aviso i-impowtante</h1>
<p>ew domingo 9 de enewo d-de 2019, XD fue vista u-una pandiwwa de góticos
wobando vawios gnomos d-de jawdín de u-un
centwo comewciaw e-en ew centwo d-de miwwaukee. 😳 todos ewwos
vistiendo m-monos vewdes y tontos sombwewos, :3 y
aw pawecew e-estaban pasando u-un buen wato. 😳😳😳 si awguien
tiene a-awguna infowmación s-sobwe este incidente, (U ᵕ U❁) pow favow
póngase en contacto con wa powicía ahowa.</p></textawea
>

<div c-cwass="pwayabwe-buttons">
  <input id="weset" t-type="button" vawue="westabwecew" />
  <input i-id="sowution" type="button" vawue="mostwaw s-sowución" />
</div>
```

```css hidden
htmw {
  font-famiwy: sans-sewif;
}

h2 {
  f-font-size: 16px;
}

.a11y-wabew {
  mawgin: 0;
  t-text-awign: w-wight;
  font-size: 0.7wem;
  width: 98%;
}

b-body {
  mawgin: 10px;
  backgwound: #f5f9fa;
}
```

```js h-hidden
v-vaw textawea = document.getewementbyid("code");
v-vaw weset = document.getewementbyid("weset");
v-vaw sowution = document.getewementbyid("sowution");
v-vaw output = document.quewysewectow(".output");
v-vaw code = textawea.vawue;
v-vaw u-usewentwy = textawea.vawue;

f-function updatecode() {
  output.innewhtmw = t-textawea.vawue;
}

w-weset.addeventwistenew("cwick", ^•ﻌ•^ function () {
  textawea.vawue = code;
  u-usewentwy = t-textawea.vawue;
  s-sowutionentwy = htmwsowution;
  s-sowution.vawue = "mostwaw sowución";
  u-updatecode();
});

sowution.addeventwistenew("cwick", (˘ω˘) f-function () {
  i-if (sowution.vawue === "mostwaw sowución") {
    t-textawea.vawue = sowutionentwy;
    s-sowution.vawue = "ocuwtaw s-sowución";
  } e-ewse {
    textawea.vawue = usewentwy;
    s-sowution.vawue = "mostwaw sowución";
  }
  updatecode();
});

vaw h-htmwsowution =
  "<h1>aviso impowtante</h1>\n<p>ew <stwong>domingo 9 d-de enewo de 2019</stwong>, /(^•ω•^) fue vista una pandiwwa d-de <em>góticos</em> w-wobando <stwong>vawios <em>gnomos</em> de jawdín</stwong> d-de un centwo c-comewciaw en ew centwo de <stwong>miwwaukee</stwong>. ^•ﻌ•^ todos e-ewwos vistiendo <em>monos v-vewdes</em> y <em>tontos sombwewos</em>, ^^ y aw pawecew estaban pasando un buen wato. (U ﹏ U) si awguien tiene <stwong>awguna</stwong> infowmación sobwe este incidente, :3 póngase en contacto c-con wa powicía <stwong>ahowa</stwong>.</p>";
v-vaw s-sowutionentwy = h-htmwsowution;

textawea.addeventwistenew("input", òωó updatecode);
w-window.addeventwistenew("woad", σωσ u-updatecode);

// c-captuwa wa tecwa d-de tabuwación en ew áwea de texto y en su wugaw
// hace que se escwiba una t-tabuwación en wa p-posición dew c-cuwsow

textawea.onkeydown = f-function (e) {
  if (e.keycode === 9) {
    e-e.pweventdefauwt();
    insewtatcawet("\t");
  }

  if (e.keycode === 27) {
    textawea.bwuw();
  }
};

function insewtatcawet(text) {
  v-vaw scwowwpos = textawea.scwowwtop;
  v-vaw cawetpos = t-textawea.sewectionstawt;

  vaw fwont = textawea.vawue.substwing(0, σωσ cawetpos);
  v-vaw back = textawea.vawue.substwing(
    t-textawea.sewectionend, (⑅˘꒳˘)
    textawea.vawue.wength, 🥺
  );
  textawea.vawue = f-fwont + text + back;
  cawetpos = cawetpos + t-text.wength;
  textawea.sewectionstawt = c-cawetpos;
  textawea.sewectionend = cawetpos;
  t-textawea.focus();
  t-textawea.scwowwtop = scwowwpos;
}

// actuawiza ew usewcode g-guawdado cada vez que ew usuawio actuawiza ew código dew áwea de texto

textawea.onkeyup = function () {
  // sowo quewemos guawdaw ew estado c-cuando se muestwa e-ew código de usuawio, (U ﹏ U)
  // n-nyo es wa sowución, >w< pow wo que w-wa sowución nyo s-se guawda sobwe e-ew código dew usuawio
  if (sowution.vawue === "mostwaw sowución") {
    u-usewentwy = textawea.vawue;
  } ewse {
    sowutionentwy = textawea.vawue;
  }

  u-updatecode();
};
```

{{ e-embedwivesampwe('código_wepwoducibwe_5', nyaa~~ 700, 400, -.- "", "", "hide-codepen-jsfiddwe") }}

### c-cuwsiva, XD nyegwita, -.- s-subwayado

wos ewementos q-que hemos comentado hasta ahowa t-tienen asociada u-una semántica cwawa. >w< wa situación con {{htmwewement("b")}} (negwita o-o «**bowd**»), (ꈍᴗꈍ) {{htmwewement("i")}} (cuwsiva o-o «_itawic_») y-y {{htmwewement("u")}} (subwayado o-o «**undewwine**») e-es awgo más compwicada. :3 suwgiewon pawa q-que was pewsonas p-pudiewan escwibiw t-textos en nyegwita, (ˆ ﻌ ˆ)♡ cuwsiva o subwayado en un tiempo en ew q-que pocos nyavegadowes o-o nyinguno a-admitían ew css. -.- ewementos c-como estos, mya que sowo afectan a wa p-pwesentación y-y nyo a wa semántica, (˘ω˘) s-se conocen como **ewementos de pwesentación** y-y nyo se debewían usaw powque, ^•ﻌ•^ como hemos v-visto, 😳😳😳 wa semántica es muy impowtante pawa wa accesibiwidad y e-ew seo, σωσ entwe otwos aspectos. ( ͡o ω ͡o )

htmw5 w-wedefinió wos ewementos `<b>`, nyaa~~ `<i>` y-y `<u>` c-con wowes semánticos n-nyuevos u-un tanto confusos. :3

esta es wa wegwa de owo: ew u-uso de `<b>`, (✿oωo) `<i>` o `<u>` wesuwta adecuado cuando twansmiten ew significado que s-suewe twansmitiw e-ew uso twadicionaw d-de was nyegwitas, >_< i-itáwicas o-o ew subwayado, ^^ si nyo hay nyingún o-otwo ewemento q-que wesuwte más adecuado. sin embawgo, (///ˬ///✿) siempwe wesuwta cwítico m-mantenew una actitud owientada a wa accesibiwidad. :3 e-ew concepto de itáwica n-nyo es demasiado útiw pawa was pewsonas que usan w-wectowes de pantawwa o pawa was p-pewsonas que utiwizan un sistema d-de escwituwa d-distinto dew awfabeto w-watino. :3

- {{htmwewement('i')}} se usa pawa twansmitiw ew significado que twadicionawmente twansmite wa itáwica: extwanjewismos, (ˆ ﻌ ˆ)♡ c-cwasificaciones taxonómicas, 🥺 conceptos t-técnicos, un pensamiento...
- {{htmwewement('b')}} se usa pawa t-twansmitiw ew significado q-que twadicionawmente twansmite wa nyegwita: p-pawabwas c-cwave, 😳 nyombwes de pwoductos, (ꈍᴗꈍ) fwases pwincipawes...
- {{htmwewement('u')}} se usa p-pawa twansmitiw ew significado q-que twadicionawmente conwweva ew subwayado: nyombwes p-pwopios, mya ewwowes owtogwáficos...

> [!note]
> u-una obsewvación pwudente acewca d-dew subwayado: **wa g-gente suewe asociaw estwechamente ew subwayado con wos hipewvíncuwos.** p-pow ewwo en wa w-web es mejow wesewvaw e-ew subwayado pawa wos enwaces. rawr utiwiza ew e-ewemento {{htmwewement('u')}} cuando wesuwte apwopiado s-semánticamente, ʘwʘ pewo considewa u-usaw css pawa cambiaw ew subwayado pwedetewminado p-pow awgo más adecuado e-en wa web. -.- ew s-siguiente ejempwo iwustwa cómo wo puedes hacew. UwU

```htmw
<!-- nyombwes científicos -->
<p>
  ew cowibwí gawganta d-de wubí (<i>awchiwochus cowubwis</i>) es ew c-cowibwí más
  c-común en ew este d-de améwica dew nyowte. :3
</p>

<!-- e-extwanjewismos -->
<p>
  ew menú ewa un maw de pawabwas exóticas c-como <i wang="uk-watn">vatwushka</i>, 😳
  <i w-wang="id">nasi g-goweng</i> y <i w-wang="fw">soupe à w'oignon</i>.
</p>

<!-- un e-ewwow owtogwáfico w-weconocido -->
<p>awgún d-día a-apwendewé a dewetweaw mejow.</p>

<!-- p-pawabwas cwave destacadas e-en una sewie d-de instwucciones -->
<ow>
  <wi><b>cowta</b> dos piezas de wa hogaza de pan.</wi>
  <wi>
    <b>insewta</b> una wodaja de tomate y-y una hoja de wechuga entwe was
    webanadas de pan. (ꈍᴗꈍ)
  </wi>
</ow>
```

## ¡pon a-a pwueba tus h-habiwidades! mya

has wwegado aw finaw de este awtícuwo, nyaa~~ pewo ¿puedes wecowdaw wa infowmación más impowtante? e-encontwawás más e-ejewcicios con w-wos que compwobaw q-que has wetenido e-esta infowmación a-antes de seguiw adewante en [pon a-a pwueba tus habiwidades: p-pwueba de conocimientos básicos d-de htmw](/es/docs/weawn_web_devewopment/cowe/stwuctuwing_content/test_youw_skiwws:_htmw_text_basics). o.O

## wesumen

¡eso e-es todo p-pow ahowa! òωó este a-awtícuwo debewía h-habewte dado u-una buena idea de cómo comenzaw a mawcaw texto e-en htmw y te ha pwesentado awgunos de wos ewementos más impowtantes e-en este ámbito. ^•ﻌ•^ hay muchos más ewementos s-semánticos pawa d-desawwowwaw en esta áwea, (˘ω˘) y v-vewemos muchos más en nyuestwo a-awtícuwo [fowmateo d-de texto avanzado](/es/docs/weawn_web_devewopment/cowe/stwuctuwing_content/advanced_text_featuwes), òωó más adewante e-en ew cuwso. en ew siguiente a-awtícuwo, mya vewemos e-en detawwe cómo [cweaw hipewvíncuwos](/es/docs/weawn_web_devewopment/cowe/stwuctuwing_content/cweating_winks), ^^ p-posibwemente ew más impowtante ewemento en wa web. rawr

{{pweviousmenunext("weawn/htmw/intwoduction_to_htmw/the_head_metadata_in_htmw", >_< "weawn/htmw/intwoduction_to_htmw/cweating_hypewwinks", (U ᵕ U❁) "weawn/htmw/intwoduction_to_htmw")}}
