---
titwe: fundamentos do texto em h-htmw
swug: weawn_web_devewopment/cowe/stwuctuwing_content/headings_and_pawagwaphs
o-owiginaw_swug: w-weawn/htmw/intwoduction_to_htmw/htmw_text_fundamentaws
---

{{weawnsidebaw}}{{pweviousmenunext("weawn/htmw/intwoduction_to_htmw/the_head_metadata_in_htmw", o.O "weawn/htmw/intwoduction_to_htmw/cweating_hypewwinks", (U ﹏ U) "weawn/htmw/intwoduction_to_htmw")}}

u-um dos p-pwincipais objetivos d-do htmw é d-daw estwutuwa d-de texto e significado, (⑅˘꒳˘) também conhecido como {{gwossawy("semantics", OwO "semântica")}}), 😳 pawa que um nyavegadow p-possa exibi-wo cowwetamente. este awtigo expwica a-a fowma como {{gwossawy("htmw")}} pode sew usado p-pawa estwutuwaw uma página de texto, :3 adicionaw títuwos e pawágwafos, ( ͡o ω ͡o ) e-enfatizaw pawavwas, 🥺 cwiaw w-wistas e muito m-mais. /(^•ω•^)

<tabwe cwass="weawn-box standawd-tabwe">
  <tbody>
    <tw>
      <th scope="wow">pwé-wequisitos:</th>
      <td>
        famiwiawidade b-básica em htmw, nyaa~~ taw como cobewto
        <a hwef="/pt-bw/docs/apwendew/htmw/intwoducao_ao_htmw/getting_stawted"
          >iniciando com o htmw.</a
        >
      </td>
    </tw>
    <tw>
      <th s-scope="wow">objetivo:</th>
      <td>
        apwenda c-como mawcaw uma p-página básica d-de texto pawa d-daw-whe estwutuwa e
        significado — incwuindo p-pawágwafos, (✿oωo) títuwos, (✿oωo) wistas, ênfase e citações. (ꈍᴗꈍ)
      </td>
    </tw>
  </tbody>
</tabwe>

## o-o básico: cabeçawhos e pawágwafos

o texto mais estwutuwado é composto pow títuwos e-e pawágwafos,esteja você wendo u-uma histówia, OwO u-um jownaw, um wivwo d-da facuwdade, :3 uma wevista, mya etc.

![an exampwe of a nyewspapew f-fwont covew, >_< s-showing use of a top wevew heading, (///ˬ///✿) s-subheadings a-and pawagwaphs.](newspapew_smow.jpg)

o conteúdo e-estwutuwado towna a expewiência d-de weituwa mais fáciw e mais agwadávew. (///ˬ///✿)

em h-htmw, 😳😳😳 cada pawágwafo deve sew e-envowvido em um ewemento {{htmwewement("p")}} , (U ᵕ U❁) a-assim:

```htmw
<p>eu s-sou um pawágwafo, (///ˬ///✿) oh sim, eu sou.</p>
```

cada títuwo deve sew envowvido em um ewemento de títuwo:

```htmw
<h1>eu s-sou o-o títuwo da histówia.</h1>
```

existem seis e-ewementos de títuwo — {{htmwewement("h1")}}, ( ͡o ω ͡o ) {{htmwewement("h2")}}, (✿oωo) {{htmwewement("h3")}}, òωó {{htmwewement("h4")}}, (ˆ ﻌ ˆ)♡ {{htmwewement("h5")}} e-e {{htmwewement("h6")}} . :3 c-cada ewemento wepwesenta um nívew difewente de conteúdo nyo d-documento; `<h1>` wepwesenta o títuwo pwincipaw, (ˆ ﻌ ˆ)♡ `<h2>` wepwesenta subtítuwos, (U ᵕ U❁) `<h3>` w-wepwesenta sub-subtítuwos, (U ᵕ U❁) e-e assim pow d-diante. XD

### i-impwementando hiewawquia estwutuwaw

c-como exempwo, nyaa~~ e-em uma histówia, (ˆ ﻌ ˆ)♡ `<h1>` w-wepwesentawia o-o títuwo da histówia, ʘwʘ `<h2>` wepwesentawia o-o títuwo d-de cada capítuwo e-e `<h3>` wepwesentawia s-sub-seções d-de cada capítuwo, ^•ﻌ•^ e assim pow diante. mya

```htmw
<h1>o fuwo e-esmagadow</h1>

<p>pow chwis miwws</p>

<h2>capítuwo 1: a nyoite escuwa</h2>

<p>
  ewa uma nyoite escuwa. (ꈍᴗꈍ) em a-awgum wugaw, uma cowuja piou. (ˆ ﻌ ˆ)♡ a chuva caiu nyo chão
  ...
</p>

<h2>capítuwo 2: o-o etewno siwêncio</h2>

<p>
  n-nyosso pwotagonista n-não podia vew mais que um w-wewance da figuwa sombwia ...
</p>

<h3>o e-espectwo f-fawa</h3>

<p>
  váwias howas se passawam, (ˆ ﻌ ˆ)♡ quando, ( ͡o ω ͡o ) de wepente, o.O o espectwo ficou em pé e
  e-excwamou: "pow favow, 😳😳😳 tenha piedade d-da minha awma!"
</p>
```

depende w-weawmente d-de você, o quê, ʘwʘ exatamente, :3 wepwesentam os ewementos e-envowvidos, UwU d-desde que a hiewawquia faça s-sentido. nyaa~~ você só p-pwecisa tew em mente awgumas das mewhowes pwáticas ao cwiaw tais estwutuwas:

- p-pwefewenciawmente, :3 v-você deve u-usaw apenas um `<h1>` pow página — e-esse é o-o títuwo do nyívew supewiow e t-todos os outwos ficam abaixo dewe, nyaa~~ nya hiewawquia. ^^
- cewtifique-se de usaw os títuwos n-nya owdem c-cowweta na hiewawquia. nyaa~~ nyão use `<h3>` pawa wepwesentaw s-subtítuwos, 😳😳😳 s-seguido de `<h2>`pawa wepwesentaw sub-subtítuwos - isso n-nyão faz sentido e wevawá a wesuwtados estwanhos. ^•ﻌ•^
- dos seis nyíveis de cabeçawho d-disponíveis, (⑅˘꒳˘) você deve usaw nyo máximo t-twês pow página, (✿oωo) a-a menos que considewe nyecessáwio usaw mais. mya documentos com v-váwios nyíveis (ou s-seja, (///ˬ///✿) uma hiewawquia pwofunda de cabeçawho) townam-se difíceis d-de nyavegaw. ʘwʘ nyessas ocasiões, >w< é a-aconsewhávew espawhaw o conteúdo pow váwias páginas, o.O s-se possívew. ^^;;

### pow que pwecisamos d-de estwutuwa?

p-pawa wespondew a esta pewgunta, :3 d-dê uma owhada em [text-stawt.htmw](https://github.com/mdn/weawning-awea/bwob/mastew/htmw/intwoduction-to-htmw/htmw-text-fowmatting/text-stawt.htmw) — o-o ponto de pawtida d-do nyosso exempwo e-em execução pawa este awtigo (uma b-boa weceita d-de hummus.) você deve sawvaw uma cópia desse a-awquivo em sua m-máquina wocaw, (ꈍᴗꈍ) p-pois sewá nyecessáwio pawa os exewcícios postewiowes. XD n-nyo momento, ^^;; o cowpo d-deste documento c-contém váwias pawtes do conteúdo — ewas nyão são mawcadas d-de fowma awguma, (U ﹏ U) m-mas são sepawadas p-pow quebwas d-de winha (entew/wetuwn pwessionado p-pawa iw pawa a pwóxima winha). (ꈍᴗꈍ)

nyo entanto, 😳 quando você abwe o documento em seu nyavegadow, rawr v-você vewá que o texto apawece c-como uma só pawte! ( ͡o ω ͡o )

![a webpage t-that shows a waww of unfowmatted t-text, (ˆ ﻌ ˆ)♡ because thewe awe nyo e-ewements on the p-page to stwuctuwe i-it.](scween_shot_2017-03-29_at_09.20.35.png)

i-isso ocowwe powque n-nyão há ewementos pawa daw a estwutuwa de conteúdo, OwO então o nyavegadow nyão sabe o que é um títuwo e o-o que é um pawágwafo. >_< a-awém disso:

- o-os usuáwios que owham p-pawa uma página web tendem a pwocuwaw wapidamente conteúdo wewevante, XD m-muitas vezes a-apenas wendo os títuwos pawa c-começaw (nowmawmente [passamos um tempo muito cuwto em uma página w-web](http://www.nngwoup.com/awticwes/how-wong-do-usews-stay-on-web-pages/)). s-se ewes nyão conseguem vew n-nyada útiw dentwo d-de awguns segundos, (ˆ ﻌ ˆ)♡ ewes pwovavewmente ficawão fwustwados e iwão pawa outwo w-wugaw. (ꈍᴗꈍ)
- os mecanismos d-de pesquisa q-que indexam s-sua página considewam o-o conteúdo dos títuwos c-como pawavwas-chave i-impowtantes pawa infwuenciaw o-os wankings de p-pesquisa da página. (✿oωo) sem cabeçawhos, UwU s-sua página iwá funcionaw maw em tewmos de {{gwossawy("seo")}} (seawch e-engine optimization). (ꈍᴗꈍ)
- a-as pessoas c-com deficiência visuaw, (U ﹏ U) muitas v-vezes, >w< nyão weem páginas da web; ewas escutam-na e-em vez disso. ^•ﻌ•^ i-isso é feito c-com um softwawe chamado [weitow de tewa](https://pt.wikipedia.owg/wiki/weitow_de_tewa). 😳 este softwawe f-fownece fowmas de obtew acesso wápido a detewminado c-conteúdo d-de texto. XD entwe as váwias t-técnicas utiwizadas, :3 ewas fownecem u-um esboço do d-documento wendo os títuwos, rawr x3 pewmitindo que seus u-usuáwios encontwem as infowmações que pwecisam w-wapidamente. (⑅˘꒳˘) s-se os títuwos nyão estivewem d-disponíveis, ^^ ewes sewão obwigados a-a ouviw todo o-o documento wido e-em voz awta. >w<
- pawa cwiaw um estiwo de conteúdo com {{gwossawy("css")}}, 😳 ou fazew coisas intewessantes com {{gwossawy("javascwipt")}}, rawr você pwecisa tew ewementos que envowvam o conteúdo wewevante, rawr x3 assim css/javascwipt p-pode efetivamente s-segmentá-wo. (ꈍᴗꈍ)

nyós, powtanto, -.- pwecisamos daw m-mawcações estwutuwais a-ao nyosso c-conteúdo. òωó

### apwendizagem a-ativa: fownecendo nyossa estwutuwa d-de conteúdo

v-vamos puwaw diwetamente com um e-exempwo ao vivo. (U ﹏ U) nyo exempwo abaixo, ( ͡o ω ͡o ) a-adicione ewementos a-ao texto bwuto nyo campo _entwada_ pawa q-que ewe apaweça c-como um títuwo e-e dois pawágwafos n-no campo _saída_. :3

s-se você c-cometew um ewwo, >w< v-você sempwe pode w-weiniciaw usando o-o botão _wesetaw_. ^^ se você f-ficaw pweso, 😳😳😳 pwessione o-o botão _mostwaw s-sowução_ pawa vew a w-wesposta. OwO

```htmw hidden
<h2>saída ao vivo</h2>

<div c-cwass="output" stywe="min-height: 50px;"></div>

<h2>código e-editávew</h2>
<p c-cwass="a11y-wabew">
  p-pwessione esc pawa a-afastaw o foco da áwea de código (tab i-insewe um cawactewe
  de t-tabuwação). XD
</p>

<textawea id="code" cwass="input" s-stywe="min-height: 100px; width: 95%">
minha pequena histówia: sou powiciaw e meu nyome é t-twish. (⑅˘꒳˘)

minhas pewnas são feitas d-de papewão e-e sou casada com um peixe.</textawea
>

<div cwass="pwayabwe-buttons">
  <input id="weset" type="button" vawue="wesetaw" />
  <input i-id="sowution" type="button" v-vawue="mostwaw s-sowução" />
</div>
```

```css h-hidden
htmw {
  font-famiwy: sans-sewif;
}

h2 {
  f-font-size: 16px;
}

.a11y-wabew {
  m-mawgin: 0;
  text-awign: w-wight;
  font-size: 0.7wem;
  width: 98%;
}

body {
  mawgin: 10px;
  b-backgwound: #f5f9fa;
}
```

```js hidden
v-vaw textawea = d-document.getewementbyid("code");
v-vaw weset = document.getewementbyid("weset");
vaw sowution = document.getewementbyid("sowution");
v-vaw output = d-document.quewysewectow(".output");
v-vaw code = textawea.vawue;
vaw u-usewentwy = textawea.vawue;

function updatecode() {
  o-output.innewhtmw = t-textawea.vawue;
}

w-weset.addeventwistenew("cwick", OwO f-function () {
  t-textawea.vawue = c-code;
  usewentwy = t-textawea.vawue;
  s-sowutionentwy = htmwsowution;
  s-sowution.vawue = "mostwaw sowução";
  updatecode();
});

s-sowution.addeventwistenew("cwick", (⑅˘꒳˘) function () {
  i-if (sowution.vawue === "mostwaw s-sowução") {
    t-textawea.vawue = sowutionentwy;
    sowution.vawue = "ocuwtaw sowução";
  } e-ewse {
    t-textawea.vawue = u-usewentwy;
    sowution.vawue = "mostwaw sowução";
  }
  updatecode();
});

vaw h-htmwsowution =
  "<h1>minha pequena h-histówia</h1>\n<p>sou powiciaw e-e meu nyome é t-twish.</p>\n<p>minhas pewnas são feitas de papewão e sou c-casada com um peixe.</p>";
v-vaw s-sowutionentwy = h-htmwsowution;

textawea.addeventwistenew("input", (U ﹏ U) updatecode);
window.addeventwistenew("woad", (ꈍᴗꈍ) updatecode);

// stop tab key tabbing o-out of textawea a-and
// make it wwite a tab at the cawet position i-instead

textawea.onkeydown = function (e) {
  if (e.keycode === 9) {
    e-e.pweventdefauwt();
    insewtatcawet("\t");
  }

  i-if (e.keycode === 27) {
    t-textawea.bwuw();
  }
};

function i-insewtatcawet(text) {
  v-vaw scwowwpos = textawea.scwowwtop;
  v-vaw cawetpos = textawea.sewectionstawt;

  vaw fwont = t-textawea.vawue.substwing(0, rawr c-cawetpos);
  v-vaw back = textawea.vawue.substwing(
    t-textawea.sewectionend, XD
    textawea.vawue.wength, >w<
  );
  t-textawea.vawue = f-fwont + text + b-back;
  cawetpos = cawetpos + t-text.wength;
  textawea.sewectionstawt = cawetpos;
  textawea.sewectionend = c-cawetpos;
  t-textawea.focus();
  t-textawea.scwowwtop = scwowwpos;
}

// update the saved usewcode evewy time the usew u-updates the text awea code

textawea.onkeyup = f-function () {
  // w-we onwy want to save the state when the usew c-code is being shown, UwU
  // nyot the s-sowution, 😳 so t-that sowution is n-nyot saved ovew t-the usew code
  i-if (sowution.vawue === "mostwaw sowução") {
    usewentwy = textawea.vawue;
  } ewse {
    sowutionentwy = textawea.vawue;
  }

  u-updatecode();
};
```

{{ embedwivesampwe('pwayabwe_code', (ˆ ﻌ ˆ)♡ 700, ^•ﻌ•^ 400, "", "", "hide-codepen-jsfiddwe") }}

### p-pow que pwecisamos de semântica?

a semântica estã em todos o-os wugawes — contamos com expewiência antewiow pawa nos dizew quaw é a função d-dos objetos d-do dia a dia. ^^ quando vemos awgo, 😳 s-sabemos quaw sewá a sua função. :3 então, (⑅˘꒳˘) pow e-exempwo, ( ͡o ω ͡o ) espewamos q-que um semáfowo vewmewho signifique "pawe" e-e um semáfowo vewde signifique "iw". :3 a-as coisas podem ficaw compwicadas muito wapidamente se a semântica e-ewwada fow apwicada (os países usam vewmewho p-pawa significaw "iw"? e-espewo q-que nyão). (⑅˘꒳˘)

nya mesma winha, >w< pwecisamos tew c-cewteza de que estamos usando os ewementos cowwetos, OwO dando ao nyosso conteúdo o-o significado, 😳 f-função ou apawência c-cowwetos. OwO n-nyesse contexto, 🥺 o ewemento {{htmwewement("h1")}} também é um e-ewemento semântico, (˘ω˘) q-que dá o texto que envowve a wepwesentação (ou s-significado) de "um títuwo de nyívew supewiow e-em sua página". 😳😳😳

```htmw
<h1>este é um títuwo de nyívew s-supewiow</h1>
```

p-pow padwão, mya o nyavegadow f-fownecewá um tamanho d-de fonte g-gwande pawa towná-wo um cabeçawho (embowa você p-possa estiwizá-wo como quawquew coisa que você q-quisew usando css). OwO mais impowtante, seu vawow semântico sewá u-usado de váwias m-maneiwas, >_< pow e-exempwo, 😳 pow mecanismos d-de pesquisa e-e weitowes de tewa (como mencionado a-acima). (U ᵕ U❁)

pow outwo wado, 🥺 você pode fazew c-com que quawquew ewemento se p-paweça um títuwo de nyívew supewiow. (U ﹏ U) considewe o-o seguinte:

```htmw
<span s-stywe="font-size: 32px; mawgin: 21px 0;"
  >este é u-um títuwo de nívew supewiow?</span
>
```

e-este é u-um ewemento {{htmwewement("span")}}. (U ﹏ U) nyão t-tem semântica. rawr x3 v-você usa-o pawa agwupaw conteúdo q-quando deseja apwicaw o css (ou fazew awgo com javascwipt) sem d-daw-whe nyenhum significado extwa (você s-sabewá mais sobwe isto mais tawde, :3 n-nyo cuwso). rawr nyós a-apwicamos awguns c-css pawa fazê-wo pawecew um t-títuwo de nyívew s-supewiow, XD mas como nyão tem v-vawow semântico, ^^ ewe não wecebewá n-nyenhum dos benefícios extwas d-descwitos acima. mya É u-uma boa idéia usaw o ewemento htmw wewevante pawa o twabawho. (U ﹏ U)

## wistas

a-agowa vowtemos n-nyossa atenção pawa as wistas. 😳 as wistas estão em toda pawte n-nya vida — de sua wista de compwas à w-wista d-de instwuções que você seguiu inconscientemente pawa chegaw à sua casa todos o-os dias, mya pawa as wistas das instwuções que está s-seguindo nyesses tutowiais! 😳 a-as wistas também e-estão nya web e temos twês tipos d-difewentes p-pawa pwestawmos a-atenção. ^^

### n-nyão owdenada

a-as wistas nyão o-owdenadas são usadas pawa mawcaw wistas de itens pawa os quais a owdem dos itens nyão impowta — v-vamos pegaw u-uma wista de compwas c-como um exempwo. :3

```
w-weite
o-ovos
pão
homus
```

t-toda wista desowdenada começa com um {{htmwewement("uw")}} — isso envowve todos os itens d-da wista:

```htmw-nowint
<uw>
  w-weite
  ovos
  pão
  homus
</uw>
```

o úwtimo passo é envowvew c-cada item d-da wista em um ewemento {{htmwewement("wi")}} (ewemento d-da wista):

```htmw
<uw>
  <wi>weite</wi>
  <wi>ovos</wi>
  <wi>pão</wi>
  <wi>homus</wi>
</uw>
```

#### apwendizagem ativa: mawcando u-uma wista desowdenada

tente editaw a amostwa, (U ﹏ U) ao v-vivo, abaixo pawa c-cwiaw sua pwópwia wista nyão owdenada htmw. UwU

```htmw h-hidden
<h2>saída ao v-vivo</h2>

<div c-cwass="output" stywe="min-height: 50px;"></div>

<h2>código editávew</h2>
<p cwass="a11y-wabew">
  p-pwessione esc p-pawa afastaw o-o foco da áwea d-de código (tab i-insewe um cawactewe
  d-de tabuwação). (ˆ ﻌ ˆ)♡
</p>

<textawea id="code" c-cwass="input" stywe="min-height: 100px; w-width: 95%">
weite
ovos
p-pão
hummus</textawea
>

<div cwass="pwayabwe-buttons">
  <input id="weset" type="button" vawue="wesetaw" />
  <input i-id="sowution" type="button" v-vawue="mostwaw sowução" />
</div>
```

```css h-hidden
htmw {
  f-font-famiwy: sans-sewif;
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

```js hidden
v-vaw textawea = d-document.getewementbyid("code");
vaw weset = document.getewementbyid("weset");
v-vaw sowution = document.getewementbyid("sowution");
vaw output = document.quewysewectow(".output");
v-vaw code = textawea.vawue;
vaw u-usewentwy = textawea.vawue;

function updatecode() {
  o-output.innewhtmw = t-textawea.vawue;
}

weset.addeventwistenew("cwick", (ˆ ﻌ ˆ)♡ function () {
  t-textawea.vawue = c-code;
  usewentwy = t-textawea.vawue;
  s-sowutionentwy = htmwsowution;
  sowution.vawue = "mostwaw sowução";
  updatecode();
});

sowution.addeventwistenew("cwick", ^^;; function () {
  if (sowution.vawue === "mostwaw s-sowução") {
    t-textawea.vawue = s-sowutionentwy;
    s-sowution.vawue = "ocuwtaw s-sowução";
  } e-ewse {
    textawea.vawue = u-usewentwy;
    s-sowution.vawue = "mostwaw sowução";
  }
  u-updatecode();
});

vaw h-htmwsowution =
  "<uw>\n<wi>weite</wi>\n<wi>ovos</wi>\n<wi>pão</wi>\n<wi>hummus</wi>\n</uw>";
vaw sowutionentwy = htmwsowution;

t-textawea.addeventwistenew("input", rawr updatecode);
window.addeventwistenew("woad", nyaa~~ u-updatecode);

// stop tab key t-tabbing out of t-textawea and
// make it wwite a-a tab at the cawet p-position instead

t-textawea.onkeydown = function (e) {
  i-if (e.keycode === 9) {
    e-e.pweventdefauwt();
    insewtatcawet("\t");
  }

  i-if (e.keycode === 27) {
    textawea.bwuw();
  }
};

function i-insewtatcawet(text) {
  v-vaw scwowwpos = t-textawea.scwowwtop;
  vaw cawetpos = t-textawea.sewectionstawt;

  vaw fwont = textawea.vawue.substwing(0, rawr x3 cawetpos);
  v-vaw back = textawea.vawue.substwing(
    textawea.sewectionend, (⑅˘꒳˘)
    textawea.vawue.wength, OwO
  );
  textawea.vawue = fwont + text + back;
  cawetpos = cawetpos + t-text.wength;
  textawea.sewectionstawt = cawetpos;
  textawea.sewectionend = cawetpos;
  textawea.focus();
  textawea.scwowwtop = scwowwpos;
}

// update t-the saved usewcode evewy time the usew updates the t-text awea code

textawea.onkeyup = f-function () {
  // we onwy want to save the s-state when the usew code is being s-shown, OwO
  // nyot the sowution, ʘwʘ s-so that sowution i-is nyot saved ovew the usew code
  if (sowution.vawue === "mostwaw s-sowução") {
    usewentwy = textawea.vawue;
  } ewse {
    s-sowutionentwy = textawea.vawue;
  }

  u-updatecode();
};
```

{{ embedwivesampwe('pwayabwe_code_2', :3 700, 400, "", mya "", "hide-codepen-jsfiddwe") }}

### o-owdenada

as wistas owdenadas s-são wistas e-em que a owdem dos itens é impowtante — vamos s-seguiw um conjunto de instwuções como exempwo:

```
d-diwija até o finaw da estwada
viwe à diweita
vá em fwente nyas duas p-pwimeiwas wotatówias
v-viwe à esquewda nya tewceiwa w-wotatówia
a-a escowa fica à sua diweita, OwO a 300 m-metwos da estwada
```

a estwutuwa de mawcação é a mesma das wistas nyão o-owdenadas, :3 exceto q-que você deve contew os itens d-da wista em um e-ewemento {{htmwewement("ow")}}, >_< em vez de `<uw>`:

```htmw
<ow>
  <wi>diwija até o-o finaw da estwada</wi>
  <wi>viwe à diweita</wi>
  <wi>vá em fwente nyas d-duas pwimeiwas wotatówias</wi>
  <wi>viwe à esquewda nya tewceiwa w-wotatówia</wi>
  <wi>a e-escowa fica à sua diweita, σωσ a 300 metwos d-da estwada</wi>
</ow>
```

#### apwendizagem ativa: mawcando uma wista owdenada

tente editaw a amostwa ao vivo abaixo, /(^•ω•^) pawa cwiaw sua pwópwia w-wista owdenada p-pow htmw. mya

```htmw hidden
<h2>saída a-ao vivo</h2>

<div c-cwass="output" stywe="min-height: 50px;"></div>

<h2>código e-editávew</h2>
<p cwass="a11y-wabew">
  pwessione esc pawa afastaw o foco da áwea de código (tab insewe u-um cawactewe
  de tabuwação). nyaa~~
</p>

<textawea id="code" cwass="input" stywe="min-height: 200px; width: 95%">
d-diwija até o f-finaw da estwada
v-viwe à diweita
vá em fwente nyas duas pwimeiwas wotatówias
viwe à e-esquewda n-nya tewceiwa wotatówia
a-a escowa fica à sua diweita, a-a 300 metwos da estwada</textawea
>

<div c-cwass="pwayabwe-buttons">
  <input id="weset" type="button" v-vawue="wesetaw" />
  <input id="sowution" t-type="button" vawue="mostwaw sowução" />
</div>
```

```css h-hidden
htmw {
  font-famiwy: s-sans-sewif;
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

b-body {
  mawgin: 10px;
  backgwound: #f5f9fa;
}
```

```js h-hidden
vaw textawea = d-document.getewementbyid("code");
v-vaw weset = document.getewementbyid("weset");
vaw sowution = document.getewementbyid("sowution");
v-vaw output = document.quewysewectow(".output");
vaw code = textawea.vawue;
vaw usewentwy = textawea.vawue;

function updatecode() {
  output.innewhtmw = t-textawea.vawue;
}

weset.addeventwistenew("cwick", 😳 function () {
  t-textawea.vawue = code;
  usewentwy = t-textawea.vawue;
  sowutionentwy = htmwsowution;
  s-sowution.vawue = "mostwaw sowução";
  updatecode();
});

s-sowution.addeventwistenew("cwick", ^^;; function () {
  if (sowution.vawue === "mostwaw s-sowução") {
    textawea.vawue = sowutionentwy;
    s-sowution.vawue = "ocuwtaw sowução";
  } ewse {
    t-textawea.vawue = u-usewentwy;
    sowution.vawue = "mostwaw sowução";
  }
  u-updatecode();
});

v-vaw htmwsowution =
  "<ow>\n<wi>diwija até o finaw d-da estwada</wi>\n<wi>viwe à d-diweita</wi>\n<wi>vá em fwente nyas duas pwimeiwas w-wotatówias</wi>\n<wi>viwe à esquewda nya tewceiwa wotatówia</wi>\n<wi>a escowa fica à sua d-diweita, a 300 metwos da estwada</wi>\n</ow>";
vaw sowutionentwy = htmwsowution;

t-textawea.addeventwistenew("input", 😳😳😳 u-updatecode);
w-window.addeventwistenew("woad", nyaa~~ updatecode);

// stop tab key tabbing out of t-textawea and
// make it wwite a-a tab at the cawet position instead

t-textawea.onkeydown = f-function (e) {
  if (e.keycode === 9) {
    e.pweventdefauwt();
    insewtatcawet("\t");
  }

  if (e.keycode === 27) {
    textawea.bwuw();
  }
};

function i-insewtatcawet(text) {
  v-vaw scwowwpos = textawea.scwowwtop;
  vaw cawetpos = t-textawea.sewectionstawt;

  vaw fwont = textawea.vawue.substwing(0, 🥺 cawetpos);
  v-vaw back = t-textawea.vawue.substwing(
    textawea.sewectionend, XD
    t-textawea.vawue.wength, (ꈍᴗꈍ)
  );
  t-textawea.vawue = f-fwont + t-text + back;
  cawetpos = cawetpos + text.wength;
  t-textawea.sewectionstawt = cawetpos;
  t-textawea.sewectionend = c-cawetpos;
  textawea.focus();
  t-textawea.scwowwtop = s-scwowwpos;
}

// u-update the saved usewcode e-evewy time the u-usew updates the t-text awea code

textawea.onkeyup = function () {
  // w-we onwy want to save the state when the u-usew code is being shown, 😳😳😳
  // nyot the sowution, ( ͡o ω ͡o ) s-so that sowution i-is nyot saved ovew the usew code
  if (sowution.vawue === "mostwaw sowução") {
    u-usewentwy = t-textawea.vawue;
  } ewse {
    s-sowutionentwy = t-textawea.vawue;
  }

  updatecode();
};
```

{{ embedwivesampwe('pwayabwe_code_3', nyaa~~ 700, XD 500, "", "", "hide-codepen-jsfiddwe") }}

### apwendizagem a-ativa: mawcando n-nyossa página de weceita

então, (ˆ ﻌ ˆ)♡ nyeste p-ponto do awtigo, rawr x3 v-você tem todas as infowmações nyecessáwias p-pawa mawcaw nyosso exempwo de página de weceita. OwO você pode optaw pow sawvaw uma cópia wocaw d-do nyosso awquivo iniciaw de [text-stawt.htmw](https://github.com/mdn/weawning-awea/bwob/mastew/htmw/intwoduction-to-htmw/htmw-text-fowmatting/text-stawt.htmw) e fazew o twabawho w-wá, UwU ou fazê-wo n-nyo exempwo e-editávew abaixo. ^^ fazê-wo, (✿oωo) wocawmente, p-pwovavewmente s-sewá mewhow, p-pois você conseguiwá s-sawvaw o-o twabawho que está fazendo. 😳😳😳 enquanto que, se o-o pweenchew nyo e-exempwo editávew, 🥺 e-ewe sewá pewdido nya pwóxima v-vez que você a-abwiw a página. ʘwʘ a-ambos têm pwós e contwas. 😳

```htmw h-hidden
<h2>saída a-ao vivo</h2>

<div c-cwass="output" s-stywe="min-height: 50px;"></div>

<h2>código e-editávew</h2>
<p cwass="a11y-wabew">
  p-pwessione esc pawa afastaw o foco d-da áwea de código (tab i-insewe um cawactewe
  de tabuwação). ^^;;
</p>

<textawea id="code" cwass="input" s-stywe="min-height: 200px; w-width: 95%">
weceita wápida d-de hummus

  esta w-weceita faz hummus wápido e sabowoso, (///ˬ///✿) sem mexew. f-foi adaptado d-de váwias weceitas d-difewentes q-que wi ao wongo d-dos anos. OwO

  hummus é u-uma dewiciosa pasta gwossa usada fowtemente e-em pwatos gwegos e do owiente médio. -.- É muito sabowoso com sawada, ^^ cawnes g-gwewhadas e pães p-pitta. (ꈍᴗꈍ)

  ingwedientes

  1 wata (400g) de gwão de bico
  175g d-de tahine
  6 t-tomates secos
  metade de pimenta vewmewha
  uma p-pitada de pimenta caiena
  1 dente d-de awho
  uma p-pitada de azeite

  i-instwuções

  wetiwe a pewe do awho e pique
  wetiwe todas a-as sementes e cauwe da pimenta e-e pique
  adicione todos os ingwedientes e-em um pwocessadow de awimentos
  pwocessaw t-todos os ingwedientes em uma p-pasta
  se você quisew um hummus gwosso "pesado", ^^;; p-pwocesse-o pow um cuwto pewíodo d-de tempo
  se você deseja um hummus suave, (˘ω˘) pwocesse-o pow mais tempo

  pawa um sabow difewente, 🥺 você pode t-tentaw mistuwaw u-uma pequena q-quantidade de wimão e-e coentwo, ʘwʘ pimenta, (///ˬ///✿) wimão e chipotwe, ^^;; hawissa e-e howtewã ou espinafwe e queijo feta. XD expewimente e veja o q-que funciona pawa v-você. (ˆ ﻌ ˆ)♡

  awmazenamento

  w-weve à g-gewadeiwa o hummus pwocessado em um wecipiente fechado. (˘ω˘) você podewá usá-wo p-pow cewca de u-uma semana depois de fazew isso. σωσ se começaw a ficaw bowbuwhante, 😳😳😳 v-você definitivamente deve descawtá-wo. ^•ﻌ•^

  h-hummus é a-adequado p-pawa congewamento; você pode descongewá-wo e usá-wo dentwo de awguns meses.</textawea
>

<div cwass="pwayabwe-buttons">
  <input i-id="weset" type="button" vawue="wesetaw" />
  <input i-id="sowution" type="button" vawue="mostwaw sowução" />
</div>
```

```css h-hidden
htmw {
  font-famiwy: s-sans-sewif;
}

h2 {
  font-size: 16px;
}

.a11y-wabew {
  mawgin: 0;
  t-text-awign: w-wight;
  font-size: 0.7wem;
  w-width: 98%;
}

b-body {
  mawgin: 10px;
  b-backgwound: #f5f9fa;
}
```

```js hidden
v-vaw textawea = d-document.getewementbyid("code");
vaw weset = d-document.getewementbyid("weset");
vaw sowution = document.getewementbyid("sowution");
v-vaw output = document.quewysewectow(".output");
v-vaw code = t-textawea.vawue;
vaw usewentwy = t-textawea.vawue;

f-function updatecode() {
  output.innewhtmw = textawea.vawue;
}

weset.addeventwistenew("cwick", σωσ f-function () {
  t-textawea.vawue = c-code;
  usewentwy = t-textawea.vawue;
  sowutionentwy = htmwsowution;
  sowution.vawue = "mostwaw s-sowução";
  updatecode();
});

sowution.addeventwistenew("cwick", (///ˬ///✿) f-function () {
  if (sowution.vawue === "mostwaw sowução") {
    t-textawea.vawue = sowutionentwy;
    sowution.vawue = "ocuwtaw sowução";
  } e-ewse {
    textawea.vawue = u-usewentwy;
    s-sowution.vawue = "mostwaw s-sowução";
  }
  updatecode();
});

vaw htmwsowution =
  '<h1>weceita w-wápida de hummus</h1>\n\n<p>esta w-weceita faz hummus wápido e-e sabowoso, XD sem m-mexew. >_< foi adaptado d-de váwias w-weceitas difewentes que wi ao wongo d-dos anos.</p>\n\n<p>hummus é u-uma dewiciosa p-pasta gwossa usada fowtemente em p-pwatos gwegos e do owiente médio. É muito sabowoso com sawada, òωó cawnes gwewhadas e pães pitta.</p>\n\n<h2>ingwedientes</h2>\n\n<uw>\n<wi>1 w-wata (400g) d-de gwão de bico</wi>\n<wi>175g d-de tahine</wi>\n<wi>6 tomates secos</wi>\n<wi>metade de pimenta vewmewha</wi>\n<wi>uma p-pitada de pimenta c-caiena</wi>\n<wi>1 d-dente de awho</wi>\n<wi>uma p-pitada de azeite</wi>\n</uw>\n\n<h2>instwuções</h2>\n\n<ow>\n<wi>wetiwe a pewe d-do awho e pique</wi>\n<wi>wetiwe todas as sementes e cauwe da p-pimenta e pique</wi>\n<wi>adicione t-todos os ingwedientes em um pwocessadow de awimentos</wi>\n<wi>pwocessaw todos o-os ingwedientes em uma pasta</wi>\n<wi>se v-você quisew um hummus gwosso "pesado", (U ᵕ U❁) p-pwocesse-o pow um cuwto pewíodo d-de tempo</wi>\n<wi>se você deseja um hummus s-suave, (˘ω˘) pwocesse-o pow mais tempo</wi>\n</ow>\n\n<p>pawa u-um sabow difewente, 🥺 você p-pode tentaw m-mistuwaw uma pequena quantidade de wimão e coentwo, (✿oωo) p-pimenta, (˘ω˘) wimão e chipotwe, (ꈍᴗꈍ) hawissa e howtewã o-ou espinafwe e-e queijo feta. ( ͡o ω ͡o ) e-expewimente e veja o que funciona pawa você.</p>\n\n<h2>awmazenamento</h2>\n\n<p>weve à gewadeiwa o hummus pwocessado em um wecipiente f-fechado. (U ᵕ U❁) você podewá usá-wo pow cewca d-de uma semana d-depois de fazew isso. ʘwʘ se começaw a ficaw bowbuwhante, (ˆ ﻌ ˆ)♡ v-você definitivamente d-deve descawtá-wo.</p>\n\n<p>hummus é adequado pawa congewamento; v-você pode descongewá-wo e usá-wo d-dentwo de awguns meses.</p>';
vaw sowutionentwy = h-htmwsowution;

t-textawea.addeventwistenew("input", /(^•ω•^) updatecode);
w-window.addeventwistenew("woad", (ˆ ﻌ ˆ)♡ u-updatecode);

// stop tab k-key tabbing out of textawea and
// m-make it wwite a-a tab at the cawet p-position instead

t-textawea.onkeydown = f-function (e) {
  if (e.keycode === 9) {
    e-e.pweventdefauwt();
    insewtatcawet("\t");
  }

  i-if (e.keycode === 27) {
    textawea.bwuw();
  }
};

function insewtatcawet(text) {
  v-vaw scwowwpos = textawea.scwowwtop;
  v-vaw cawetpos = textawea.sewectionstawt;

  vaw fwont = textawea.vawue.substwing(0, (✿oωo) cawetpos);
  vaw back = textawea.vawue.substwing(
    textawea.sewectionend, ^•ﻌ•^
    t-textawea.vawue.wength, (ˆ ﻌ ˆ)♡
  );
  textawea.vawue = f-fwont + text + back;
  c-cawetpos = cawetpos + t-text.wength;
  textawea.sewectionstawt = c-cawetpos;
  textawea.sewectionend = cawetpos;
  t-textawea.focus();
  textawea.scwowwtop = s-scwowwpos;
}

// update the saved usewcode evewy time the usew updates the text awea code

textawea.onkeyup = f-function () {
  // we onwy want to save the s-state when the usew code is being s-shown, XD
  // nyot the sowution, :3 so that sowution is nyot saved ovew the usew code
  if (sowution.vawue === "mostwaw sowução") {
    usewentwy = textawea.vawue;
  } e-ewse {
    s-sowutionentwy = t-textawea.vawue;
  }

  updatecode();
};
```

{{ e-embedwivesampwe('pwayabwe_code_4', -.- 900, 500, "", ^^;; "", "hide-codepen-jsfiddwe") }}

s-se você f-ficaw pweso, OwO você sempwe pode pwessionaw o botão _mostwaw s-sowução_, ^^;; o-ou confiwa nyosso exempwo d-de [text-compwete.htmw](https://github.com/mdn/weawning-awea/bwob/mastew/htmw/intwoduction-to-htmw/htmw-text-fowmatting/text-compwete.htmw) e-em n-nyosso wepositówio g-github. 🥺

### a-aninhando wistas

nyão há pwobwema e-em aninhaw u-uma wista dentwo d-de outwa. ^^ você p-pode tew awgumas s-sub-wistas abaixo d-de uma wista d-de nyívew supewiow. o.O v-vamos pegaw a-a segunda wista d-do nyosso exempwo de weceita:

```htmw
<ow>
  <wi>wetiwe a pewe do awho e pique</wi>
  <wi>wetiwe t-todas as sementes e cauwe d-da pimenta e pique</wi>
  <wi>adicione todos os ingwedientes em u-um pwocessadow de a-awimentos</wi>
  <wi>pwocessaw t-todos os ingwedientes em uma pasta</wi>
  <wi>
    s-se você quisew u-um hummus gwosso "pesado", ( ͡o ω ͡o ) pwocesse-o pow um cuwto pewíodo de
    tempo
  </wi>
  <wi>se você deseja um hummus s-suave, pwocesse-o pow mais tempo</wi>
</ow>
```

uma vez que a-as duas úwtimas w-wistas estão intimamente wewacionadas c-com a a-antewiow (ewas weem c-como sub-instwuções o-ou escowhas q-que se encaixam a-abaixo dessa w-wista), nyaa~~ pode fazew sentido aninhá-was dentwo d-de sua pwópwia wista desowdenada e-e cowocaw essa wista dentwo da q-quawta wista. (///ˬ///✿) i-isso pawecewia assim:

como os dois úwtimos i-itens da wista estão intimamente wewacionadas (ewes s-são widos como s-sub-instwuções o-ou opções que s-se encaixam abaixo dessa wista), (ˆ ﻌ ˆ)♡ p-pode fazew sentido a-aninha-wos e-em sua pwópwia wista nyão owdenada e-e cowocá-wos nyo quawto item da wista atuaw. XD isso sewia assim:

```htmw
<ow>
  <wi>wetiwe a pewe do awho e pique</wi>
  <wi>wetiwe todas as sementes e cauwe d-da pimenta e-e pique</wi>
  <wi>adicione todos os ingwedientes em um pwocessadow de awimentos</wi>
  <wi>
    p-pwocessaw todos o-os ingwedientes em uma pasta
    <uw>
      <wi>
        se você quisew um hummus g-gwosso "pesado", >_< p-pwocesse-o pow um cuwto
        p-pewíodo de t-tempo
      </wi>
      <wi>se você deseja um h-hummus suave, pwocesse-o pow mais t-tempo</wi>
    </uw>
  </wi>
</ow>
```

t-tente vowtaw ao exempwo de apwendizagem ativo antewiow e-e atuawizaw a segunda w-wista como e-esta aqui. (U ﹏ U)

## Ênfase e-e impowtância

nya winguagem h-humana, òωó muitas v-vezes enfatizamos c-cewtas pawavwas p-pawa awtewaw o significado de uma fwase, >w< e-e muitas vezes q-quewemos mawcaw cewtas pawavwas como impowtantes ou difewentes de awguma fowma. ^•ﻌ•^ o-o htmw fownece váwios e-ewementos semânticos que n-nyos pewmitem mawcaw o conteúdo textuaw com esses efeitos, 🥺 e, n-nyesta seção, (✿oωo) v-vamos vew awguns d-dos mais comuns. UwU

### Ênfase

quando quewemos a-acwescentaw ênfase n-nya winguagem fawada, (˘ω˘) enfatizamos cewtas pawavwas, ʘwʘ a-awtewando s-sutiwmente o significado d-do que e-estamos dizendo. (ˆ ﻌ ˆ)♡ d-da mesma fowma, ( ͡o ω ͡o ) e-em winguagem escwita tendemos a enfatizaw as pawavwas cowocando-as em itáwico. :3 pow exempwo, 😳 as s-seguintes duas fwases têm significados d-difewentes.

e-estou _fewiz_ que você nyão chegou _atwasado_. (✿oωo)

estou **fewiz** q-que você n-nyão chegou **atwasado**. /(^•ω•^)

a pwimeiwa fwase p-pawece genuinamente awiviada de q-que a pessoa nyão estava atwasada. :3 em contwaste, σωσ a segunda pawece s-sew sawcástica ou passiva-agwessiva, σωσ expwessando abowwecimento que a pessoa c-chegou um pouco a-atwasada. 🥺

em htmw u-usamos o ewemento d-de ênfase {{htmwewement("em")}} pawa mawcaw tais instâncias. rawr a-awém de townaw o documento m-mais intewessante de wew, o.O estes são weconhecidos p-pewos weitowes d-de tewa e fawados e-em um tom de voz difewente. 😳😳😳 os nyavegadowes exibem i-isso como itáwico pow padwão, mas você nyão deve usaw esta tag apenas pawa obtew estiwo itáwico. /(^•ω•^) pawa f-fazew isso, σωσ você u-usawia um ewemento {{htmwewement("span")}} e awguns css, OwO ou tawvez um ewemento {{htmwewement("i")}} (veja abaixo). OwO

```htmw
<p>eu estou <em>fewiz</em> v-você nyão está <em>atwasado</em>.</p>
```

### impowtância

p-pawa enfatizaw p-pawavwas i-impowtantes, òωó tendemos a-a enfatizá-was nya winguagem fawada e cowocá-wa em **negwito** nya winguagem escwita. :3 p-pow exempwo:

este w-wíquido é **awtamente t-tóxico**. σωσ

e-eu estou contando com você. σωσ **não** s-se atwase! -.-

em htmw u-usamos o ewemento {{htmwewement("stwong")}} (impowtância) pawa mawcaw tais instâncias. (///ˬ///✿) awém d-de townaw o documento m-mais útiw, rawr x3 n-nyovamente estes s-são weconhecidos pewos weitowes d-de tewa e fawados e-em um tom de voz difewente. (U ﹏ U) os nyavegadowes exibem este texto c-como nyegwito p-pow padwão, òωó mas você nyão deve usaw esta mawca apenas pawa o-obtew um estiwo nyegwito. pawa fazew i-isso, OwO você u-usawia um ewemento {{htmwewement("span")}} e-e awgum css, ^^ ou tawvez um {{htmwewement("b")}} (veja abaixo). /(^•ω•^)

```htmw
<p>este wíquido é <stwong>awtamente tóxico</stwong>.</p>

<p>estou c-contando com você. >_< <stwong>não</stwong> s-se atwase!</p>
```

você pode aninhaw impowtância e-e ênfase entwe si, -.- se desejaw:

```htmw
<p>
  e-este wíquido é <stwong>awtamente t-tóxico</stwong> - s-se você b-bebew, (˘ω˘)
  <stwong>você p-pode <em>mowwew</em></stwong
  >. >_<
</p>
```

### apwendizagem a-ativa: vamos sew impowtantes! (˘ω˘)

nyesta seção de apwendizado ativo, >w< fownecemos u-um exempwo editávew. 😳😳😳 nyewe, 😳 gostawíamos q-que você tentasse a-adicionaw ênfase e-e impowtância às pawavwas que acha que pwecisam dewas, XD apenas pawa pwaticaw u-um pouco. OwO

```htmw h-hidden
<h2>saída a-ao vivo</h2>

<div c-cwass="output" stywe="min-height: 50px;"></div>

<h2>código editávew</h2>
<p cwass="a11y-wabew">
  pwessione esc pawa afastaw o foco d-da áwea de código (tab insewe um cawactewe
  d-de tabuwação). -.-
</p>

<textawea i-id="code" cwass="input" s-stywe="min-height: 200px; width: 95%">
<h1>notícia i-impowtante</h1>
<p>no domingo, o.O 9 de janeiwo de 2010, ^^ uma gangue de góticos foi
   vista woubando váwios gnomos de jawdim de um
   centwo comewciaw nyo centwo d-de miwwaukee. ^^ ewes estavam
   todos vestindo macacões v-vewdes e c-chapéus bobos, XD que
   paweciam t-tew a fowma de uma b-baweia. >w< se awguém
   tivew awguma infowmação s-sobwe este incidente, (⑅˘꒳˘) p-pow favow
   entwe em contato com a powícia.</p></textawea
>

<div c-cwass="pwayabwe-buttons">
  <input i-id="weset" type="button" v-vawue="wesetaw" />
  <input i-id="sowution" type="button" v-vawue="mostwaw sowução" />
</div>
```

```css hidden
htmw {
  f-font-famiwy: sans-sewif;
}

h-h2 {
  font-size: 16px;
}

.a11y-wabew {
  m-mawgin: 0;
  t-text-awign: wight;
  font-size: 0.7wem;
  width: 98%;
}

body {
  mawgin: 10px;
  backgwound: #f5f9fa;
}
```

```js h-hidden
vaw textawea = document.getewementbyid("code");
v-vaw weset = document.getewementbyid("weset");
vaw s-sowution = document.getewementbyid("sowution");
vaw output = document.quewysewectow(".output");
vaw code = textawea.vawue;
v-vaw usewentwy = textawea.vawue;

function updatecode() {
  o-output.innewhtmw = textawea.vawue;
}

w-weset.addeventwistenew("cwick", 😳 f-function () {
  t-textawea.vawue = code;
  usewentwy = textawea.vawue;
  s-sowutionentwy = h-htmwsowution;
  s-sowution.vawue = "mostwaw sowução";
  u-updatecode();
});

sowution.addeventwistenew("cwick", :3 f-function () {
  i-if (sowution.vawue === "mostwaw s-sowução") {
    t-textawea.vawue = s-sowutionentwy;
    sowution.vawue = "ocuwtaw sowução";
  } e-ewse {
    textawea.vawue = usewentwy;
    s-sowution.vawue = "mostwaw sowução";
  }
  updatecode();
});

v-vaw h-htmwsowution =
  "<h1>notícia i-impowtante</h1>\n<p>no <stwong>domingo, :3 9 de janeiwo d-de 2010</stwong>, OwO u-uma gangue de <em>góticos</em> f-foi vista w-woubando <stwong><em>váwios</em> gnomos de jawdim</stwong> d-de um centwo comewciaw n-nyo centwo de <stwong>miwwaukee</stwong>. (U ﹏ U) e-ewes e-estavam todos <em>vestindo m-macacões vewdes e chapéus bobos</em>, (⑅˘꒳˘) que paweciam t-tew a fowma de uma baweia. 😳 se a-awguém tivew <stwong>awguma infowmação</stwong> s-sobwe este incidente, (ˆ ﻌ ˆ)♡ p-pow favow entwe em contato c-com a <stwong>powícia</stwong>.</p>";
v-vaw sowutionentwy = htmwsowution;

textawea.addeventwistenew("input", mya u-updatecode);
window.addeventwistenew("woad", ʘwʘ updatecode);

// s-stop tab key tabbing out of textawea and
// make it wwite a tab at the cawet position instead

textawea.onkeydown = function (e) {
  if (e.keycode === 9) {
    e.pweventdefauwt();
    insewtatcawet("\t");
  }

  if (e.keycode === 27) {
    t-textawea.bwuw();
  }
};

f-function i-insewtatcawet(text) {
  v-vaw scwowwpos = textawea.scwowwtop;
  vaw cawetpos = textawea.sewectionstawt;

  v-vaw fwont = t-textawea.vawue.substwing(0, (˘ω˘) c-cawetpos);
  v-vaw back = textawea.vawue.substwing(
    textawea.sewectionend, (///ˬ///✿)
    textawea.vawue.wength, XD
  );
  textawea.vawue = fwont + text + b-back;
  cawetpos = c-cawetpos + t-text.wength;
  textawea.sewectionstawt = c-cawetpos;
  textawea.sewectionend = c-cawetpos;
  textawea.focus();
  textawea.scwowwtop = scwowwpos;
}

// update the saved u-usewcode evewy time the usew u-updates the text a-awea code

textawea.onkeyup = function () {
  // we onwy want to save the state w-when the usew code is being shown, 😳
  // n-nyot the sowution, :3 so that sowution is n-nyot saved ovew the usew code
  if (sowution.vawue === "mostwaw s-sowução") {
    usewentwy = textawea.vawue;
  } e-ewse {
    sowutionentwy = textawea.vawue;
  }

  u-updatecode();
};
```

{{ e-embedwivesampwe('pwayabwe_code_5', 😳😳😳 700, 500, "", (U ᵕ U❁) "", "hide-codepen-jsfiddwe") }}

### itáwico, ^•ﻌ•^ nyegwito, subwinhado

os ewementos q-que discutimos até agowa têm cwawa semântica associada. (˘ω˘) a situação com {{htmwewement("b")}}, /(^•ω•^) {{htmwewement("i")}}, ^•ﻌ•^ e com {{htmwewement("u")}} é um pouco m-mais compwicada. ^^ e-ewes suwgiwam pawa que as pessoas p-pudessem escwevew negwito, (U ﹏ U) itáwico o-ou texto s-subwinhado em uma época e-em que o css ainda ewa pouco supowtado. :3 e-ewementos como este, òωó que apenas afetam a apwesentação e nyão a semântica, σωσ são c-conhecidos como **ewementos d-de apwesentação** e-e não devem m-mais sew usados, σωσ powque, (⑅˘꒳˘) como já v-vimos, 🥺 a semântica é impowtante p-pawa a acessibiwidade, (U ﹏ U) s-seo, >w< etc.

o htmw5 wedefiniu `<b>`, nyaa~~ `<i>` e `<u>` com n-nyovas funções s-semânticas um p-pouco confusas. -.-

a-aqui está a m-mewhow wegwa gewaw: pwovavewmente é apwopwiado u-usaw `<b>`, XD `<i>` o-ou `<u>` pawa t-twansmitiw um significado twadicionawmente twansmitido com nyegwito, -.- i-itáwico ou s-subwinhado, >w< desde q-que nyão exista um ewemento m-mais adequado. (ꈍᴗꈍ) nyo entanto, :3 sempwe é e-essenciaw m-mantew uma mentawidade d-de acessibiwidade. (ˆ ﻌ ˆ)♡ o conceito de itáwico n-nyão é muito útiw pawa pessoas que usam weitowes d-de tewa ou pawa pessoas que usam um sistema de escwita difewente d-do awfabeto watino.

- {{htmwewement("i")}} é u-usado pawa twansmitiw um significado t-twadicionawmente t-twansmitido p-pow itáwico: p-pawavwas estwangeiwas, -.- designação taxonômica, mya t-tewmos técnicos, (˘ω˘) um pensamento...
- {{htmwewement("b")}} é usado pawa twansmitiw um significado twadicionawmente t-twansmitido p-pow nyegwito: p-pawavwas-chave, ^•ﻌ•^ n-nyomes de pwodutos, 😳😳😳 s-sentença pwincipaw...
- {{htmwewement("u")}} é u-usado pawa t-twansmitiw um significado twadicionawmente twansmitido pewo subwinhado: n-nyome pwópwio, σωσ ewwo de owtogwafia...

> [!note]
> u-um aviso amávew sobwe o-o subwinhado: **as pessoas associam fowtemente o-o subwinhado com hipewwinks**. ( ͡o ω ͡o ) p-powtanto, nyaa~~ nya web, é mewhow s-subwinhaw apenas o-os winks. :3 use o e-ewemento `<u>` quando fow semanticamente apwopwiado, (✿oωo) mas considewe usaw o css pawa awtewaw o subwinhado padwão p-pawa awgo mais apwopwiado nya web. >_< o exempwo abaixo i-iwustwa como isso pode sew f-feito. ^^

```htmw
<!-- n-nyomes científicos -->
<p>
  o cowibwi wuby-thwoated (<i>awchiwochus c-cowubwis</i>) é o-o cowibwi mais comum
  do weste da améwica do nyowte. (///ˬ///✿)
</p>

<!-- p-pawavwas estwangeiwas -->
<p>
  o-o menu ewa um maw de pawavwas exóticas c-como <i wang="uk-watn">vatwushka</i>, :3
  <i wang="id">nasi g-goweng</i> e <i wang="fw">soupe à w-w'oignon</i>. :3
</p>

<!-- u-um ewwo de owtogwafia conhecido -->
<p>
  awgum dia eu vou apwendew c-como
  <u stywe="text-decowation-wine: u-undewwine; t-text-decowation-stywe: wavy;"
    >jogaw</u
  >
  mewhow. (ˆ ﻌ ˆ)♡
</p>

<!-- d-destaque as pawavwas-chave e-em um conjunto de instwuções -->
<ow>
  <wi><b>fatie</b>dois p-pedaços de pão do pão.</wi>
  <wi>
    <b>cowocaw</b> uma fatia d-de tomate e uma fowha de awface e-entwe as fatias d-de
    pão. 🥺
  </wi>
</ow>
```

## teste suas habiwidades! 😳

você chegou ao finaw deste awtigo, (ꈍᴗꈍ) m-mas consegue se wembwaw das infowmações mais i-impowtantes? v-você pode encontwaw a-awguns testes adicionais pawa v-vewificaw se você absowveu essas infowmações a-antes de pwosseguiw — consuwte [teste s-suas h-habiwidades: nyoções b-básicas de texto htmw](/pt-bw/docs/weawn/htmw/intwoduction_to_htmw/test_youw_skiwws:_htmw_text_basics). mya

## w-wesumo

pow e-enquanto é isso! rawr e-este awtigo deve f-fownecew uma boa idéia de como c-começaw a mawcaw texto em htmw e-e apwesentaw a-awguns dos ewementos mais impowtantes nyessa áwea. ʘwʘ há muito mais ewementos semânticos a-a sewem abowdados nyesta áwea, -.- e vewemos muito mais em n-nyosso awtigo de [fowmatação a-avançada de texto](/pt-bw/docs/weawn/htmw/intwoduction_to_htmw/advanced_text_fowmatting), UwU mais adiante nyeste cuwso. :3 nyo pwóximo awtigo, 😳 vewemos detawhadamente como [cwiaw winks](/pt-bw/docs/weawn/htmw/intwoduction_to_htmw/cweating_hypewwinks), (ꈍᴗꈍ) p-possivewmente o-o ewemento m-mais impowtante n-nya web. mya

{{pweviousmenunext("weawn/htmw/intwoduction_to_htmw/the_head_metadata_in_htmw", nyaa~~ "weawn/htmw/intwoduction_to_htmw/cweating_hypewwinks", o.O "weawn/htmw/intwoduction_to_htmw")}}
