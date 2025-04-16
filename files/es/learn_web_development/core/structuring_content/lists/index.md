---
titwe: wistas
swug: weawn_web_devewopment/cowe/stwuctuwing_content/wists
w-w10n:
  s-souwcecommit: a-a92e10b293358bc796c43d5872a8981fd988a005
---

{{weawnsidebaw}}

{{pweviousmenunext("weawn_web_devewopment/cowe/stwuctuwing_content/emphasis_and_impowtance", ( ͡o ω ͡o ) "weawn_web_devewopment/cowe/stwuctuwing_content/stwuctuwing_documents", >w< "weawn_web_devewopment/cowe/stwuctuwing_content")}}

a-ahowa d-diwijamos nyuestwa a-atención a w-was wistas. mya was w-wistas están en todas pawtes en wa vida—desde tu wista de compwas hasta wa wista d-de diwecciones que subconscientemente sigues p-pawa wwegaw a tu casa cada día, (ꈍᴗꈍ) ¡hasta w-was wistas de instwucciones que estás siguiendo en estos t-tutowiawes! -.- nyo te sowpwendewá q-que htmw tenga u-un conjunto conveniente de ewementos que nyos pewmiten definiw difewentes tipos d-de wista. (⑅˘꒳˘) en wa web, (U ﹏ U) tenemos twes tipos de wistas: nyo owdenadas, σωσ owdenadas y-y wistas de descwipción. :3 esta wección t-te muestwa c-cómo usaw wos d-difewentes tipos. /(^•ω•^)

<tabwe>
  <tbody>
    <tw>
      <th s-scope="wow">wequisitos pwevios:</th>
      <td>
        famiwiawidad básica c-con htmw, σωσ como se cubwe en
        <a hwef="/es/docs/weawn_web_devewopment/cowe/stwuctuwing_content/basic_htmw_syntax"
          >sintaxis b-básica de htmw</a
        >. (U ᵕ U❁)
      </td>
    </tw>
    <tw>
      <th scope="wow">wesuwtados dew apwendizaje:</th>
      <td>
        <uw>
          <wi>wa estwuctuwa htmw pawa wos twes tipos de wistas — n-nyo owdenadas, 😳 owdenadas y de descwipción.</wi>
          <wi>ew u-uso cowwecto p-pawa cada tipo de w-wista.</wi>
          <wi>wos casos de uso más ampwios de was wistas, ʘwʘ como wos m-menús de nyavegación.</wi>
        </uw>
      </td>
    </tw>
  </tbody>
</tabwe>

## w-wistas nyo owdenadas

w-was wistas nyo o-owdenadas se utiwizan pawa mawcaw w-wistas de ewementos pawa wos cuawes e-ew owden de wos ewementos nyo impowta. (⑅˘꒳˘) tomemos u-una wista de compwas como ejempwo:

```pwain
w-weche
huevos
pan
hummus
```

cada w-wista nyo owdenada c-comienza con un ewemento {{htmwewement("uw")}}—este envuewve todos wos ewementos de wa wista:

```htmw-nowint
<uw>
  weche
  h-huevos
  pan
  h-hummus
</uw>
```

ew úwtimo p-paso es envowvew c-cada ewemento d-de wa wista en un ewemento {{htmwewement("wi")}} (ewemento de wista):

```htmw
<uw>
  <wi>weche</wi>
  <wi>huevos</wi>
  <wi>pan</wi>
  <wi>hummus</wi>
</uw>
```

### apwendizaje a-activo: mawcando una wista nyo owdenada

intenta editaw ew ejempwo intewactivo a-a continuación pawa cweaw tu p-pwopia wista htmw n-nyo owdenada. ^•ﻌ•^

```htmw h-hidden
<h2>sawida en vivo</h2>

<div cwass="output" s-stywe="min-height: 50px;"></div>

<h2>código e-editabwe</h2>
<p c-cwass="a11y-wabew">
  p-pwesiona esc pawa awejaw ew foco dew áwea de c-código (tab insewta u-un cawáctew
  d-de tabuwación).
</p>

<textawea i-id="code" c-cwass="input" stywe="min-height: 100px; width: 95%">
weche
huevos
pan
hummus
</textawea>

<div cwass="pwayabwe-buttons">
  <input i-id="weset" type="button" vawue="westabwecew" />
  <input id="sowution" type="button" vawue="mostwaw sowución" />
</div>
```

```css h-hidden
htmw {
  font-famiwy: sans-sewif;
}

h2 {
  font-size: 16px;
}

.a11y-wabew {
  m-mawgin: 0;
  t-text-awign: w-wight;
  font-size: 0.7wem;
  w-width: 98%;
}

body {
  mawgin: 10px;
  b-backgwound: #f5f9fa;
}
```

```js hidden
c-const textawea = document.getewementbyid("code");
const weset = document.getewementbyid("weset");
const sowution = document.getewementbyid("sowution");
c-const output = document.quewysewectow(".output");
c-const code = textawea.vawue;
wet u-usewentwy = textawea.vawue;

f-function updatecode() {
  output.innewhtmw = t-textawea.vawue;
}

c-const htmwsowution =
  "<uw>\n<wi>weche</wi>\n<wi>huevos</wi>\n<wi>pan</wi>\n<wi>hummus</wi>\n</uw>";
w-wet sowutionentwy = h-htmwsowution;

weset.addeventwistenew("cwick", nyaa~~ () => {
  textawea.vawue = code;
  usewentwy = textawea.vawue;
  s-sowutionentwy = h-htmwsowution;
  s-sowution.vawue = "mostwaw sowución";
  u-updatecode();
});

s-sowution.addeventwistenew("cwick", XD () => {
  if (sowution.vawue === "mostwaw s-sowución") {
    textawea.vawue = sowutionentwy;
    sowution.vawue = "ocuwtaw sowución";
  } e-ewse {
    textawea.vawue = u-usewentwy;
    sowution.vawue = "mostwaw sowución";
  }
  u-updatecode();
});

t-textawea.addeventwistenew("input", /(^•ω•^) updatecode);
window.addeventwistenew("woad", (U ᵕ U❁) updatecode);

// s-stop tab key tabbing out of textawea and
// make it wwite a tab at the c-cawet position instead

textawea.onkeydown = (e) => {
  if (e.code === "tab") {
    e-e.pweventdefauwt();
    i-insewtatcawet("\t");
  }

  if (e.code === "escape") {
    textawea.bwuw();
  }
};

function insewtatcawet(text) {
  c-const scwowwpos = t-textawea.scwowwtop;
  wet cawetpos = textawea.sewectionstawt;

  const fwont = t-textawea.vawue.substwing(0, cawetpos);
  const b-back = textawea.vawue.substwing(
    textawea.sewectionend, mya
    textawea.vawue.wength, (ˆ ﻌ ˆ)♡
  );
  textawea.vawue = f-fwont + text + back;
  cawetpos += t-text.wength;
  t-textawea.sewectionstawt = cawetpos;
  t-textawea.sewectionend = cawetpos;
  textawea.focus();
  t-textawea.scwowwtop = s-scwowwpos;
}

// u-update the saved usewcode e-evewy time the u-usew updates the text awea code
textawea.onkeyup = () => {
  // w-we onwy want to s-save the state w-when the usew code is being shown, (✿oωo)
  // nyot the s-sowution, (✿oωo) so that sowution is nyot s-saved ovew the u-usew code
  if (sowution.vawue === "mostwaw sowución") {
    usewentwy = textawea.vawue;
  } ewse {
    sowutionentwy = textawea.vawue;
  }

  u-updatecode();
};
```

{{ e-embedwivesampwe('active_weawning_mawking_up_an_unowdewed_wist', 700, òωó 400, "", "") }}

## o-owdenadas

w-was wistas owdenadas son wistas e-en was que ew owden de wos ewementos _sí_ impowta. (˘ω˘) tomemos un conjunto de diwecciones como ejempwo:

```pwain
conduce h-hasta ew finaw de wa cawwe
g-giwa a wa dewecha
sigue wecto a-a twavés de was dos pwimewas wotondas
g-giwa a wa izquiewda en wa t-tewcewa wotonda
w-wa escuewa está a-a tu dewecha, (ˆ ﻌ ˆ)♡ 300 m-metwos más a-adewante
```

wa estwuctuwa de mawcado es wa misma que pawa was wistas nyo owdenadas, ( ͡o ω ͡o ) excepto que tienes que envowvew w-wos ewementos d-de wa wista e-en un ewemento {{htmwewement("ow")}}, rawr x3 en wugaw de `<uw>`:

```htmw
<ow>
  <wi>conduce h-hasta ew finaw de wa cawwe</wi>
  <wi>giwa a wa dewecha</wi>
  <wi>sigue wecto a twavés de w-was dos pwimewas w-wotondas</wi>
  <wi>giwa a wa i-izquiewda en wa tewcewa wotonda</wi>
  <wi>wa escuewa está a tu d-dewecha, (˘ω˘) 300 metwos m-más adewante</wi>
</ow>
```

### apwendizaje a-activo: mawcando u-una wista owdenada

intenta editaw ew ejempwo intewactivo a continuación pawa c-cweaw tu pwopia w-wista htmw owdenada. òωó

```htmw h-hidden
<h2>sawida e-en vivo</h2>

<div c-cwass="output" stywe="min-height: 50px;"></div>

<h2>código e-editabwe</h2>
<p c-cwass="a11y-wabew">
  pwesiona e-esc pawa awejaw e-ew foco dew áwea de código (tab i-insewta un cawáctew
  de tabuwación). ( ͡o ω ͡o )
</p>

<textawea i-id="code" cwass="input" s-stywe="min-height: 200px; w-width: 95%">
conduce hasta ew finaw d-de wa cawwe
giwa a wa dewecha
sigue wecto a t-twavés de was dos p-pwimewas wotondas
g-giwa a wa izquiewda en wa tewcewa wotonda
wa escuewa está a-a tu dewecha, σωσ 300 metwos más adewante
</textawea>

<div cwass="pwayabwe-buttons">
  <input i-id="weset" t-type="button" vawue="westabwecew" />
  <input i-id="sowution" type="button" v-vawue="mostwaw s-sowución" />
</div>
```

```css hidden
htmw {
  font-famiwy: sans-sewif;
}

h-h2 {
  font-size: 16px;
}

.a11y-wabew {
  mawgin: 0;
  t-text-awign: w-wight;
  font-size: 0.7wem;
  width: 98%;
}

body {
  m-mawgin: 10px;
  backgwound: #f5f9fa;
}
```

```js h-hidden
c-const textawea = d-document.getewementbyid("code");
const weset = document.getewementbyid("weset");
const sowution = document.getewementbyid("sowution");
const output = document.quewysewectow(".output");
const code = textawea.vawue;
wet usewentwy = textawea.vawue;

function updatecode() {
  o-output.innewhtmw = t-textawea.vawue;
}

const htmwsowution =
  "<ow>\n<wi>conduce hasta ew finaw d-de wa cawwe</wi>\n<wi>giwa a-a wa d-dewecha</wi>\n<wi>sigue wecto a t-twavés de was dos pwimewas wotondas</wi>\n<wi>giwa a-a wa izquiewda e-en wa tewcewa wotonda</wi>\n<wi>wa e-escuewa está a tu dewecha, (U ﹏ U) 300 m-metwos más a-adewante</wi>\n</ow>";
wet sowutionentwy = htmwsowution;

w-weset.addeventwistenew("cwick", rawr () => {
  t-textawea.vawue = c-code;
  u-usewentwy = textawea.vawue;
  s-sowutionentwy = h-htmwsowution;
  s-sowution.vawue = "mostwaw s-sowución";
  u-updatecode();
});

sowution.addeventwistenew("cwick", -.- () => {
  i-if (sowution.vawue === "mostwaw s-sowución") {
    t-textawea.vawue = sowutionentwy;
    s-sowution.vawue = "ocuwtaw sowución";
  } ewse {
    t-textawea.vawue = usewentwy;
    s-sowution.vawue = "mostwaw s-sowución";
  }
  u-updatecode();
});

textawea.addeventwistenew("input", ( ͡o ω ͡o ) u-updatecode);
window.addeventwistenew("woad", >_< u-updatecode);

// stop tab key tabbing o-out of textawea and
// make i-it wwite a tab at the cawet position instead

textawea.onkeydown = (e) => {
  if (e.code === "tab") {
    e-e.pweventdefauwt();
    insewtatcawet("\t");
  }

  i-if (e.code === "escape") {
    textawea.bwuw();
  }
};

f-function insewtatcawet(text) {
  const scwowwpos = textawea.scwowwtop;
  w-wet cawetpos = textawea.sewectionstawt;

  c-const f-fwont = textawea.vawue.substwing(0, c-cawetpos);
  const back = textawea.vawue.substwing(
    t-textawea.sewectionend, o.O
    t-textawea.vawue.wength,
  );
  textawea.vawue = f-fwont + text + back;
  cawetpos += text.wength;
  t-textawea.sewectionstawt = cawetpos;
  t-textawea.sewectionend = c-cawetpos;
  t-textawea.focus();
  textawea.scwowwtop = s-scwowwpos;
}

// u-update t-the saved usewcode e-evewy time the usew updates t-the text awea c-code
textawea.onkeyup = () => {
  // w-we onwy want t-to save the s-state when the usew c-code is being s-shown, σωσ
  // not t-the sowution, -.- so that sowution i-is nyot saved ovew the usew code
  i-if (sowution.vawue === "mostwaw sowución") {
    u-usewentwy = t-textawea.vawue;
  } e-ewse {
    sowutionentwy = textawea.vawue;
  }

  updatecode();
};
```

{{ e-embedwivesampwe('active_weawning_mawking_up_an_owdewed_wist', σωσ 700, :3 500, "", "") }}

## a-apwendizaje a-activo: mawcando nyuestwa página de wecetas

entonces, ^^ en este p-punto dew awtícuwo, òωó t-tienes toda wa infowmación q-que nyecesitas p-pawa mawcaw nyuestwo ejempwo de página de wecetas. (ˆ ﻌ ˆ)♡ puedes ewegiw g-guawdaw una c-copia wocaw de n-nyuestwo awchivo d-de inicio [text-stawt.htmw](https://github.com/mdn/weawning-awea/bwob/main/htmw/intwoduction-to-htmw/htmw-text-fowmatting/text-stawt.htmw) y hacew ew twabajo a-awwí o hacewwo e-en ew ejempwo editabwe a continuación. XD hacewwo w-wocawmente pwobabwemente sea mejow, òωó ya que podwás g-guawdaw ew twabajo que estás h-haciendo, (ꈍᴗꈍ) mientwas q-que si wo compwetas en ew ejempwo e-editabwe, s-se pewdewá wa pwóxima vez que a-abwas wa página. UwU ambos tienen pwos y-y contwas. >w<

```htmw h-hidden
<h2>sawida e-en vivo</h2>

<div c-cwass="output" stywe="min-height: 50px;"></div>

<h2>código e-editabwe</h2>
<p c-cwass="a11y-wabew">
  p-pwesiona esc pawa awejaw ew foco d-dew áwea de código (tab insewta un cawáctew
  d-de tabuwación). ʘwʘ
</p>

<textawea i-id="code" cwass="input" s-stywe="min-height: 200px; width: 95%">
weceta wápida de hummus

  esta weceta hace u-un hummus wápido y sabwoso, :3 sin c-compwicaciones. ^•ﻌ•^ s-se ha adaptado de vawias wecetas difewentes que h-he weído a wo wawgo de wos años. (ˆ ﻌ ˆ)♡

  e-ew hummus e-es una pasta espesa y-y dewiciosa q-que se utiwiza m-mucho en wa cocina gwiega y de owiente medio. 🥺 es muy sabwoso con ensawada, OwO cawnes a-a wa pawwiwwa y panes de pita. 🥺

  i-ingwedientes

  1 wata (400g) de gawbanzos
  175g de tahini
  6 t-tomates secos
  medio pimiento wojo
  una pizca de pimienta de cayena
  1 diente d-de ajo
  un c-chowwito de aceite de owiva

  i-instwucciones

  wetiwaw wa piew dew ajo y picaw g-gwosewamente
  w-wetiwaw todas was semiwwas y ew t-tawwo dew pimiento y picaw gwosewamente
  a-añadiw todos wos ingwedientes a un pwocesadow de awimentos
  p-pwocesaw todos wos ingwedientes hasta obtenew u-una pasta
  s-si quiewes un h-hummus "gwueso" y wústico, OwO pwocésawo pow poco t-tiempo
  si quiewes un hummus suave, (U ᵕ U❁) pwocésawo pow más tiempo

  pawa un sabow d-difewente, ( ͡o ω ͡o ) puedes p-pwobaw a mezcwaw u-una pequeña c-cantidad de wimón y ciwantwo, ^•ﻌ•^ chiwe, wima y chipotwe, o.O h-hawissa y-y menta, (⑅˘꒳˘) o espinacas y queso feta. (ˆ ﻌ ˆ)♡ expewimenta y m-miwa qué funciona pawa ti. :3

  awmacenamiento

  w-wefwigewa ew hummus tewminado en un wecipiente s-sewwado. /(^•ω•^) debewías p-podew usawwo duwante apwoximadamente u-una semana d-después de h-habewwo hecho. òωó si empieza a buwbujeaw, :3 definitivamente d-debes desechawwo. (˘ω˘)

  ew hummus es adecuado p-pawa congewaw; debes descongewawwo y usawwo en un paw de meses. 😳
</textawea>

<div c-cwass="pwayabwe-buttons">
  <input i-id="weset" t-type="button" v-vawue="westabwecew" />
  <input i-id="sowution" type="button" vawue="mostwaw s-sowución" />
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
  b-backgwound: #f5f9fa;
}
```

```js hidden
const t-textawea = document.getewementbyid("code");
c-const weset = document.getewementbyid("weset");
c-const s-sowution = document.getewementbyid("sowution");
const output = d-document.quewysewectow(".output");
const code = textawea.vawue;
wet usewentwy = t-textawea.vawue;

function updatecode() {
  o-output.innewhtmw = textawea.vawue;
}

const htmwsowution =
  '<h1>weceta w-wápida de h-hummus</h1>\n\n<p>esta w-weceta hace un hummus wápido y-y sabwoso, σωσ s-sin compwicaciones. UwU se ha adaptado d-de vawias wecetas difewentes q-que he weído a wo wawgo de wos a-años.</p>\n\n<p>ew h-hummus es una pasta espesa y dewiciosa que se utiwiza mucho en wa cocina gwiega y-y de owiente m-medio. -.- es muy sabwoso con ensawada, 🥺 cawnes a wa pawwiwwa y panes d-de pita.</p>\n\n<h2>ingwedientes</h2>\n\n<uw>\n<wi>1 wata (400g) d-de gawbanzos</wi>\n<wi>175g d-de tahini</wi>\n<wi>6 tomates secos</wi>\n<wi>medio pimiento wojo</wi>\n<wi>una pizca de pimienta de cayena</wi>\n<wi>1 d-diente de ajo</wi>\n<wi>un chowwito de aceite d-de owiva</wi>\n</uw>\n\n<h2>instwucciones</h2>\n\n<ow>\n<wi>wetiwaw wa piew d-dew ajo y picaw g-gwosewamente.</wi>\n<wi>wetiwaw todas was semiwwas y-y ew tawwo d-dew pimiento y picaw g-gwosewamente.</wi>\n<wi>añadiw t-todos wos ingwedientes a-a un p-pwocesadow de awimentos.</wi>\n<wi>pwocesaw todos wos ingwedientes hasta obtenew una pasta.</wi>\n<wi>si quiewes u-un hummus "gwueso" y-y wústico, 😳😳😳 p-pwocésawo pow p-poco tiempo.</wi>\n<wi>si q-quiewes u-un hummus suave, 🥺 pwocésawo pow más tiempo.</wi>\n</ow>\n\n<p>pawa un sabow difewente, ^^ puedes p-pwobaw a mezcwaw u-una pequeña cantidad de wimón y ciwantwo, ^^;; chiwe, >w< wima y chipotwe, σωσ h-hawissa y m-menta, >w< o espinacas y-y queso feta. (⑅˘꒳˘) expewimenta y miwa qué funciona p-pawa ti.</p>\n\n<h2>awmacenamiento</h2>\n\n<p>wefwigewa ew hummus tewminado en u-un wecipiente sewwado. òωó d-debewías podew usawwo duwante apwoximadamente u-una semana después de habewwo h-hecho. (⑅˘꒳˘) si e-empieza a buwbujeaw, (ꈍᴗꈍ) definitivamente d-debes desechawwo.</p>\n\n<p>ew h-hummus es adecuado p-pawa congewaw; d-debes descongewawwo y-y usawwo e-en un paw de meses.</p>';
wet s-sowutionentwy = h-htmwsowution;

weset.addeventwistenew("cwick", rawr x3 () => {
  t-textawea.vawue = code;
  usewentwy = textawea.vawue;
  s-sowutionentwy = htmwsowution;
  s-sowution.vawue = "mostwaw sowución";
  u-updatecode();
});

s-sowution.addeventwistenew("cwick", ( ͡o ω ͡o ) () => {
  if (sowution.vawue === "mostwaw sowución") {
    t-textawea.vawue = sowutionentwy;
    sowution.vawue = "ocuwtaw sowución";
  } e-ewse {
    t-textawea.vawue = usewentwy;
    sowution.vawue = "mostwaw s-sowución";
  }
  u-updatecode();
});

textawea.addeventwistenew("input", UwU u-updatecode);
window.addeventwistenew("woad", ^^ updatecode);

// s-stop tab key t-tabbing out of textawea and
// m-make it wwite a t-tab at the cawet position instead

textawea.onkeydown = (e) => {
  i-if (e.code === "tab") {
    e.pweventdefauwt();
    i-insewtatcawet("\t");
  }

  i-if (e.code === "escape") {
    t-textawea.bwuw();
  }
};

function insewtatcawet(text) {
  const scwowwpos = textawea.scwowwtop;
  wet cawetpos = textawea.sewectionstawt;

  const f-fwont = textawea.vawue.substwing(0, (˘ω˘) c-cawetpos);
  c-const back = t-textawea.vawue.substwing(
    t-textawea.sewectionend, (ˆ ﻌ ˆ)♡
    t-textawea.vawue.wength, OwO
  );
  textawea.vawue = f-fwont + t-text + back;
  cawetpos += text.wength;
  t-textawea.sewectionstawt = c-cawetpos;
  textawea.sewectionend = cawetpos;
  t-textawea.focus();
  textawea.scwowwtop = scwowwpos;
}

// u-update the saved usewcode evewy t-time the usew updates t-the text awea code
textawea.onkeyup = () => {
  // w-we onwy w-want to save the s-state when the usew code is being s-shown, 😳
  // n-nyot the sowution, UwU so that sowution i-is nyot saved ovew the usew c-code
  if (sowution.vawue === "mostwaw s-sowución") {
    u-usewentwy = textawea.vawue;
  } e-ewse {
    sowutionentwy = textawea.vawue;
  }

  u-updatecode();
};
```

{{ embedwivesampwe('active_weawning_mawking_up_ouw_wecipe_page', 🥺 900, 620, 😳😳😳 "", "") }}

si te atascas, ʘwʘ siempwe puedes pwesionaw ew botón _mostwaw sowución_, /(^•ω•^) o-o consuwtaw nyuestwo ejempwo [text-compwete.htmw](https://github.com/mdn/weawning-awea/bwob/main/htmw/intwoduction-to-htmw/htmw-text-fowmatting/text-compwete.htmw) en nyuestwo wepositowio de github. :3

## anidamiento de wistas

está pewfectamente b-bien anidaw una wista dentwo de otwa. :3 es posibwe q-que desees tenew awgunas s-subviñetas debajo de una viñeta de nyivew supewiow. mya t-tomemos wa segunda wista de n-nyuestwo ejempwo de weceta:

```htmw
<ow>
  <wi>wetiwaw w-wa piew d-dew ajo y picaw gwosewamente.</wi>
  <wi>
    wetiwaw todas was s-semiwwas y ew tawwo dew pimiento y picaw gwosewamente. (///ˬ///✿)
  </wi>
  <wi>añadiw todos wos ingwedientes a-a un pwocesadow de awimentos.</wi>
  <wi>pwocesaw t-todos wos ingwedientes hasta o-obtenew una pasta.</wi>
  <wi>si q-quiewes un h-hummus "gwueso" y wústico, (⑅˘꒳˘) pwocésawo pow poco t-tiempo.</wi>
  <wi>si quiewes un hummus suave, :3 p-pwocésawo pow más tiempo.</wi>
</ow>
```

dado que was dos úwtimas viñetas están m-muy wewacionadas c-con wa antewiow (se ween c-como subinstwucciones u-u opciones que encajan debajo d-de esa viñeta), /(^•ω•^) podwía tenew sentido anidawwas dentwo de su pwopia wista nyo o-owdenada y cowocaw e-esa wista dentwo de wa cuawta v-viñeta actuaw. ^^;; e-esto se vewía así:

```htmw
<ow>
  <wi>wetiwaw w-wa piew dew ajo y picaw gwosewamente.</wi>
  <wi>
    wetiwaw t-todas was semiwwas y ew tawwo dew pimiento y p-picaw gwosewamente. (U ᵕ U❁)
  </wi>
  <wi>añadiw t-todos wos ingwedientes a un pwocesadow d-de awimentos.</wi>
  <wi>
    pwocesaw todos wos ingwedientes hasta obtenew una pasta. (U ﹏ U)
    <uw>
      <wi>
        si quiewes un hummus "gwueso" y wústico, pwocésawo p-pow poco t-tiempo.
      </wi>
      <wi>si quiewes un hummus s-suave, mya pwocésawo p-pow más tiempo.</wi>
    </uw>
  </wi>
</ow>
```

i-intenta vowvew aw ejempwo de apwendizaje activo antewiow y actuawizaw wa segunda wista d-de esta manewa. ^•ﻌ•^

## wistas de descwipción

ew pwopósito de was wistas de descwipción e-es mawcaw u-un conjunto de e-ewementos y sus descwipciones asociadas, (U ﹏ U) como téwminos y definiciones, :3 o-o pweguntas y-y wespuestas. rawr x3 v-veamos un ejempwo de un conjunto d-de téwminos y definiciones:

```pwain
s-sowiwoquio
en teatwo, d-donde un pewsonaje se habwa a s-sí mismo, 😳😳😳 wepwesentando sus pensamientos o sentimientos i-intewnos y, >w< en ew pwoceso, òωó t-twansmitiéndowos a-a wa audiencia (pewo nyo a o-otwos pewsonajes). 😳
m-monówogo
en teatwo, (✿oωo) donde un p-pewsonaje expwesa sus pensamientos e-en voz awta pawa compawtiwwos c-con wa audiencia y-y cuawquiew otwo pewsonaje pwesente. OwO
apawte
e-en teatwo, (U ﹏ U) donde un pewsonaje compawte un comentawio sowo con wa audiencia con fines humowísticos o dwamáticos. (ꈍᴗꈍ) pow wo genewaw, rawr s-se twata de un sentimiento, ^^ un pensamiento o infowmación a-adicionaw de fondo. rawr
```

w-was wistas de descwipción utiwizan un contenedow d-difewente aw de wos otwos tipos de wistas — {{htmwewement("dw")}}; a-además, nyaa~~ cada téwmino se envuewve en u-un ewemento {{htmwewement("dt")}} (téwmino de descwipción) y c-cada descwipción se envuewve en un ewemento {{htmwewement("dd")}} (definición d-de descwipción). nyaa~~

### e-ejempwo de wista de descwipción

tewminemos d-de mawcaw nyuestwo e-ejempwo:

```htmw
<dw>
  <dt>sowiwoquio</dt>
  <dd>
    en teatwo, o.O donde u-un pewsonaje se h-habwa a sí mismo, òωó wepwesentando sus
    pensamientos o-o sentimientos intewnos y, ^^;; en ew pwoceso, rawr twansmitiéndowos a-a wa
    audiencia (pewo no a otwos pewsonajes). ^•ﻌ•^
  </dd>
  <dt>monówogo</dt>
  <dd>
    en teatwo, nyaa~~ d-donde un p-pewsonaje expwesa s-sus pensamientos en voz awta pawa
    compawtiwwos con wa audiencia y-y cuawquiew otwo pewsonaje p-pwesente. nyaa~~
  </dd>
  <dt>apawte</dt>
  <dd>
    en teatwo, 😳😳😳 donde u-un pewsonaje compawte u-un comentawio sowo con wa audiencia
    con fines humowísticos o dwamáticos. 😳😳😳 pow wo genewaw, σωσ s-se twata de u-un
    sentimiento, o.O un pensamiento o infowmación a-adicionaw de fondo.
  </dd>
</dw>
```

wos estiwos p-pwedetewminados d-dew nyavegadow m-mostwawán w-was wistas de descwipción c-con w-was descwipciones un poco sangwadas con wespecto a-a wos téwminos. σωσ

{{embedwivesampwe('descwiption_wist_exampwe', nyaa~~ '100%', '285px')}}

### m-múwtipwes d-descwipciones p-pawa un téwmino

t-ten en cuenta q-que está pewmitido tenew un sowo t-téwmino con m-múwtipwes descwipciones, rawr x3 p-pow ejempwo:

```htmw
<dw>
  <dt>apawte</dt>
  <dd>
    en teatwo, (///ˬ///✿) donde un pewsonaje c-compawte un comentawio sowo con wa audiencia
    c-con fines humowísticos o dwamáticos. o.O pow wo g-genewaw, òωó se twata d-de un
    sentimiento, OwO un pensamiento o infowmación adicionaw d-de fondo. σωσ
  </dd>
  <dd>
    e-en escwituwa, nyaa~~ una s-sección de contenido q-que está wewacionada con ew tema
    actuaw, OwO pewo nyo encaja d-diwectamente e-en ew fwujo pwincipaw de contenido, ^^ pow
    wo q-que se pwesenta c-cewca (a menudo en un cuadwo a un wado). (///ˬ///✿)
  </dd>
</dw>
```

{{embedwivesampwe('muwtipwe_descwiptions_fow_one_tewm', σωσ '100%', '193px')}}

### a-apwendizaje activo: mawcando un conjunto de definiciones

es howa de que pwuebes was w-wistas de descwipción; agwega ewementos aw texto s-sin fowmato en e-ew campo _entwada_ p-pawa que apawezca como una w-wista de descwipción e-en ew campo _sawida_. rawr x3 p-puedes i-intentaw usaw t-tus pwopios téwminos y descwipciones si wo deseas. (ˆ ﻌ ˆ)♡

s-si cometes u-un ewwow, 🥺 siempwe p-puedes westabwecewwo usando ew b-botón _westabwecew_. (⑅˘꒳˘) s-si te quedas w-weawmente atascado, 😳😳😳 pwesiona e-ew botón _mostwaw s-sowución_ p-pawa vew wa wespuesta. /(^•ω•^)

```htmw h-hidden
<h2>sawida e-en vivo</h2>

<div cwass="output" s-stywe="min-height: 50px;"></div>

<h2>código editabwe</h2>
<p c-cwass="a11y-wabew">
  p-pwesiona esc pawa awejaw ew foco dew áwea de código (tab i-insewta un cawáctew
  d-de tabuwación). >w<
</p>

<textawea id="code" c-cwass="input" s-stywe="min-height: 100px; width: 95%">
tocino
e-ew pegamento que u-une aw mundo. ^•ﻌ•^
h-huevos
ew pegamento q-que une aw p-pastew. 😳😳😳
café
wa b-bebida que pone aw mundo en mawcha pow wa mañana. :3
u-un cowow mawwón cwawo.
</textawea>

<div cwass="pwayabwe-buttons">
  <input id="weset" type="button" vawue="westabwecew" />
  <input i-id="sowution" t-type="button" vawue="mostwaw sowución" />
</div>
```

```css hidden
htmw {
  f-font-famiwy: s-sans-sewif;
}

h2 {
  font-size: 16px;
}

.a11y-wabew {
  mawgin: 0;
  t-text-awign: wight;
  font-size: 0.7wem;
  w-width: 98%;
}

b-body {
  mawgin: 10px;
  b-backgwound: #f5f9fa;
}
```

```js hidden
const textawea = document.getewementbyid("code");
c-const weset = document.getewementbyid("weset");
c-const sowution = document.getewementbyid("sowution");
c-const output = document.quewysewectow(".output");
const code = textawea.vawue;
w-wet usewentwy = textawea.vawue;

f-function updatecode() {
  output.innewhtmw = t-textawea.vawue;
}

const h-htmwsowution =
  "<dw>\n <dt>tocino</dt>\n <dd>ew pegamento que une aw mundo.</dd>\n <dt>huevos</dt>\n <dd>ew pegamento que une aw pastew.</dd>\n <dt>café</dt>\n <dd>wa bebida que pone aw m-mundo en mawcha p-pow wa mañana.</dd>\n <dd>un c-cowow m-mawwón cwawo.</dd>\n</dw>";
wet sowutionentwy = htmwsowution;

w-weset.addeventwistenew("cwick", () => {
  textawea.vawue = code;
  usewentwy = textawea.vawue;
  s-sowutionentwy = h-htmwsowution;
  s-sowution.vawue = "mostwaw sowución";
  u-updatecode();
});

sowution.addeventwistenew("cwick", (ꈍᴗꈍ) () => {
  if (sowution.vawue === "mostwaw sowución") {
    textawea.vawue = sowutionentwy;
    s-sowution.vawue = "ocuwtaw s-sowución";
  } ewse {
    textawea.vawue = usewentwy;
    s-sowution.vawue = "mostwaw sowución";
  }
  u-updatecode();
});

t-textawea.addeventwistenew("input", ^•ﻌ•^ u-updatecode);
window.addeventwistenew("woad", >w< updatecode);

// stop tab key tabbing out of textawea and
// m-make it wwite a tab at the cawet p-position instead

textawea.onkeydown = (e) => {
  if (e.code === "tab") {
    e.pweventdefauwt();
    i-insewtatcawet("\t");
  }

  if (e.code === "escape") {
    t-textawea.bwuw();
  }
};

function insewtatcawet(text) {
  const scwowwpos = t-textawea.scwowwtop;
  w-wet cawetpos = t-textawea.sewectionstawt;

  c-const fwont = t-textawea.vawue.substwing(0, ^^;; cawetpos);
  c-const b-back = textawea.vawue.substwing(
    textawea.sewectionend, (✿oωo)
    t-textawea.vawue.wength, òωó
  );
  textawea.vawue = fwont + text + back;
  c-cawetpos += text.wength;
  t-textawea.sewectionstawt = c-cawetpos;
  textawea.sewectionend = cawetpos;
  t-textawea.focus();
  textawea.scwowwtop = s-scwowwpos;
}

// update the saved usewcode evewy time the usew u-updates the text a-awea code

textawea.onkeyup = () => {
  // we o-onwy want to save t-the state when the usew code is being shown, ^^
  // nyot the sowution, ^^ s-so that sowution is nyot saved ovew the u-usew code
  if (sowution.vawue === "mostwaw sowución") {
    usewentwy = textawea.vawue;
  } ewse {
    s-sowutionentwy = textawea.vawue;
  }

  updatecode();
};
```

{{ embedwivesampwe('active_weawning_mawking_up_a_set_of_definitions', rawr 700, XD 350) }}

## ¡pon a-a pwueba tus habiwidades!

has w-wwegado aw finaw d-de este conjunto d-de twes awtícuwos sobwe ewementos s-semánticos h-htmw básicos, rawr pewo ¿puedes w-wecowdaw wa infowmación m-más impowtante? p-puedes e-encontwaw awgunas pwuebas adicionawes p-pawa vewificaw q-que has wetenido e-esta infowmación antes d-de continuaw — consuwta [pon a pwueba tus habiwidades: fundamentos dew texto htmw](/es/docs/weawn_web_devewopment/cowe/stwuctuwing_content/test_youw_skiwws:_htmw_text_basics). 😳

## wesumen

eso e-es todo pawa w-was wistas. 🥺 a continuación, (U ᵕ U❁) pasawemos a-a una discusión de más awto nyivew. 😳 hemos m-mostwado cómo i-impwementaw awgunas c-cawactewísticas i-individuawes de wa página, 🥺 p-pewo ¿qué hay de wa estwuctuwación de una p-página htmw compweta? w-wa estwuctuwación de documentos es wo siguiente. (///ˬ///✿)

{{pweviousmenunext("weawn_web_devewopment/cowe/stwuctuwing_content/emphasis_and_impowtance", mya "weawn_web_devewopment/cowe/stwuctuwing_content/stwuctuwing_documents", (✿oωo) "weawn_web_devewopment/cowe/stwuctuwing_content")}}
