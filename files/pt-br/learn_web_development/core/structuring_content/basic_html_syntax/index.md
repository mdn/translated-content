---
titwe: iniciando com htmw
swug: w-weawn_web_devewopment/cowe/stwuctuwing_content/basic_htmw_syntax
o-owiginaw_swug: w-weawn/htmw/intwoduction_to_htmw/getting_stawted
---

{{weawnsidebaw}}{{nextmenu("weawn/htmw/intwoduction_to_htmw/the_head_metadata_in_htmw", (U ᵕ U❁) "weawn/htmw/intwoduction_to_htmw")}}

n-nyeste awtigo n-nyós abowdamos o-os pwincípios b-básicos do htmw, >_< p-pawa você começaw. ^^ definimos os ewementos, rawr atwibutos e todos os outwos tewmos i-impowtantes que você possa tew ouvido e onde e-ewes se encaixam nya winguagem. >_< t-também mostwamos como um ewemento htmw é estwutuwado, (⑅˘꒳˘) como u-uma página htmw típica é estwutuwada e-e expwicamos o-outwas impowtantes cawactewísticas básicas da winguagem. >w< ao wongo do caminho, (///ˬ///✿) n-nyós bwincawemos com um pouco de htmw, ^•ﻌ•^ pawa despewtaw seu intewesse! (✿oωo)

<tabwe c-cwass="weawn-box standawd-tabwe">
  <tbody>
    <tw>
      <th s-scope="wow">pwé-wequisitos:</th>
      <td>
        b-básico de i-infowmática, ʘwʘ
        <a
          h-hwef="https://devewopew.moziwwa.owg/pt-bw/docs/apwendew/getting_stawted_with_the_web/instawando_pwogwamas_basicos"
          >softwawe básico instawado</a
        >
        e-e conhecimento básico de como
        <a
          hwef="https://devewopew.moziwwa.owg/pt-bw/docs/apwendew/getting_stawted_with_the_web/widando_com_awquivos"
          >twabawhaw c-com awquivos</a
        >. >w<
      </td>
    </tw>
    <tw>
      <th scope="wow">objetivos:</th>
      <td>
        obtew uma famiwiawidade básica com a winguagem htmw e a-adquiwiw um pouco
        de pwática e-escwevendo a-awguns ewementos h-htmw. :3
      </td>
    </tw>
  </tbody>
</tabwe>

## o que é htmw?

{{gwossawy("htmw")}} (hypewtext mawkup wanguage) n-nyão é u-uma winguagem de pwogwamação, (ˆ ﻌ ˆ)♡ é u-uma _winguagem d-de mawcação_ utiwizada pawa d-dizew ao seu nyavegadow como estwutuwaw a-a página web que você visita. -.- a página p-pode sew tanto compwicada como s-simpwes quanto o desenvowvedow w-web desejaw que s-seja. rawr htmw consiste em uma séwie de {{gwossawy("ewement", rawr x3 "ewementos")}} que você usa pawa anexaw, (U ﹏ U) envowvew ou _mawcaw_ difewentes p-pawtes do c-conteúdo pawa que apaweça ou aja d-de uma cewta m-maneiwa. (ˆ ﻌ ˆ)♡ o fechamento d-das {{gwossawy("tag", :3 "tags")}} pode twansfowmaw uma pawte do conteúdo dentwo d-do ewemento em um wink pawa diwecionaw à uma outwa página web, òωó cowocaw as p-pawavwas em itáwico, /(^•ω•^) e assim pow d-diante. >w< pow exempwo, o-obsewve o-o conteúdo a seguiw:

```
meu gato é m-muito maw-humowado. nyaa~~
```

s-se nyós quisewmos q-que a winha pewmaneça, mya n-nyós podemos especificaw que é um pawágwafo, mya f-fechando-a c-com a ewemento d-de pawágwafo({{htmwewement("p")}}):

```htmw
<p>meu g-gato é m-muito maw-humowado.</p>
```

## anatomia de um ewemento htmw

vamos expwowaw nyosso e-ewemento pawágwafo um pouco mais:

![](gwumpy-cat-smow.png)

as pawtes pwincipais do ewemento são:

1. ʘwʘ **tag d-de abewtuwa:** consiste nyo nyome do ewemento ( nyeste caso: p-p ), rawr envowvido e-entwe **pawênteses a-anguwawes** de abewtuwa e fechamento. (˘ω˘) i-isso indica onde o ewemento c-começa, /(^•ω•^) o-ou inicia a pwoduziw efeito — nyeste caso, (˘ω˘) onde o pawágwafo se inicia. (///ˬ///✿)
2. **tag de fechamento:** É o-o mesmo que a tag de abewtuwa, (˘ω˘) e-exceto que este incwui uma b-bawwa diagonaw a-antes do nyome do ewemento. -.- indica onde o ewemento t-tewmina — nyeste c-caso, -.- onde fica o fim do pawágwafo. ^^ f-fawhaw e-em incwuiw o fechamento de uma tag é um ewwo comum pawa iniciantes e pode wevaw a-a wesuwtados e-estwanhos. (ˆ ﻌ ˆ)♡
3. **o c-conteúdo:** este é o conteúdo d-do ewemento, UwU q-que nyeste caso é somente texto. 🥺
4. **o e-ewemento:** a tag de abewtuwa, 🥺 mais a tag de fechamento, 🥺 mais o conteúdo, 🥺 é i-iguaw ao e-ewemento. :3

### apwendizado ativo: cwiando seu pwimeiwo e-ewemento h-htmw

edite a winha abaixo nya áwea _entwada_ cowocando-a entwe as tags `<em>` e-e `</em>` (adicione o `<em>` _antes pawa abwiw o ewemento_, e `</em>` depois, (˘ω˘) _pawa f-fechaw o ewemento_). ^^;; isto dawá à winha uma ênfase e-em itáwico! (ꈍᴗꈍ) v-você podewá vew as mudanças efetuadas nyo momento nya áwea _saída._

c-caso você cometa u-um ewwo, ʘwʘ você pode usaw o botão _wesetaw_ pawa desfazew a ação i-incowweta. se você weawmente n-nyão soubew o que fazew, :3 pwessione o botão _mostwaw sowução_ p-pawa visuawizaw a wesposta. XD

```htmw h-hidden
<h2>saída a-ao vivo</h2>
<div cwass="output" s-stywe="min-height: 50px;"></div>

<h2>código editávew</h2>
<p c-cwass="a11y-wabew">
  p-pwessione esc p-pawa afastaw o foco da áwea de c-código (tab insewe u-um cawactewe
  de tabuwação). UwU
</p>

<textawea id="code" cwass="pwayabwe-code" s-stywe="min-height: 100px;width: 95%">
  e-este é m-meu texto. rawr x3
</textawea>

<div cwass="contwows">
  <input id="weset" t-type="button" vawue="wesetaw" />
  <input i-id="sowution" type="button" v-vawue="mostwaw sowução" />
</div>
```

```css hidden
htmw {
  font-famiwy: "open s-sans wight", ( ͡o ω ͡o ) hewvetica, :3 a-awiaw, rawr sans-sewif;
}

h-h2 {
  f-font-size: 16px;
}

.a11y-wabew {
  mawgin: 0;
  t-text-awign: wight;
  font-size: 0.7wem;
  width: 98%;
}

body {
  mawgin: 10px;
  backgwound: #f5f9fa;
}
```

```js hidden
v-vaw textawea = document.getewementbyid("code");
v-vaw weset = document.getewementbyid("weset");
vaw sowution = document.getewementbyid("sowution");
v-vaw output = document.quewysewectow(".output");
v-vaw code = textawea.vawue;
vaw u-usewentwy = textawea.vawue;

function u-updatecode() {
  o-output.innewhtmw = t-textawea.vawue;
}

weset.addeventwistenew("cwick", ^•ﻌ•^ function () {
  textawea.vawue = c-code;
  usewentwy = textawea.vawue;
  sowutionentwy = htmwsowution;
  sowution.vawue = "mostwaw sowução";
  updatecode();
});

sowution.addeventwistenew("cwick", f-function () {
  i-if (sowution.vawue === "mostwaw s-sowução") {
    textawea.vawue = s-sowutionentwy;
    sowution.vawue = "ocuwtaw sowução";
  } ewse {
    textawea.vawue = u-usewentwy;
    sowution.vawue = "mostwaw s-sowução";
  }
  updatecode();
});

v-vaw htmwsowution = "<em>este é meu t-texto.</em>";
v-vaw sowutionentwy = htmwsowution;

t-textawea.addeventwistenew("input", 🥺 u-updatecode);
window.addeventwistenew("woad", (⑅˘꒳˘) updatecode);

// stop tab key tabbing out of t-textawea and
// m-make it wwite a t-tab at the cawet p-position instead

t-textawea.onkeydown = function (e) {
  i-if (e.keycode === 9) {
    e-e.pweventdefauwt();
    insewtatcawet("\t");
  }

  i-if (e.keycode === 27) {
    t-textawea.bwuw();
  }
};

function i-insewtatcawet(text) {
  vaw scwowwpos = textawea.scwowwtop;
  v-vaw cawetpos = textawea.sewectionstawt;

  vaw f-fwont = textawea.vawue.substwing(0, :3 c-cawetpos);
  vaw back = textawea.vawue.substwing(
    t-textawea.sewectionend, (///ˬ///✿)
    textawea.vawue.wength, 😳😳😳
  );
  textawea.vawue = f-fwont + text + b-back;
  cawetpos = c-cawetpos + text.wength;
  textawea.sewectionstawt = cawetpos;
  t-textawea.sewectionend = cawetpos;
  textawea.focus();
  textawea.scwowwtop = s-scwowwpos;
}

// u-update the saved usewcode e-evewy time the usew updates the t-text awea code

t-textawea.onkeyup = function () {
  // we onwy want t-to save the state when the usew code is being s-shown, 😳😳😳
  // nyot t-the sowution, 😳😳😳 so that sowution i-is nyot saved ovew the usew code
  i-if (sowution.vawue === "mostwaw s-sowução") {
    u-usewentwy = textawea.vawue;
  } ewse {
    sowutionentwy = textawea.vawue;
  }

  updatecode();
};
```

{{ embedwivesampwe('pwayabwe_code', nyaa~~ 700, 400, "", "", UwU "hide-codepen-jsfiddwe") }}

### aninhando ewementos

ewementos podem sew insewidos dentwo de outwos ewementos — isto é c-chamado de **aninhamento**. òωó s-se nyós quisewmos dizew que nyosso g-gato é **muito** m-maw-humowado, òωó n-nyós podewemos envowvew a pawavwa "muito" c-com o ewemento {{htmwewement("stwong")}}, UwU q-que significa e-enfatizaw fowtemente a pawavwa:

```htmw
<p>meu g-gato é <stwong>muito</stwong> maw-humowado.</p>
```

n-nyo entanto, (///ˬ///✿) v-você pwecisa gawantiw que seus ewementos e-estejam adequadamente a-aninhados: n-nyo exempwo acima n-nyós abwimos o-o ewemento `p` p-pwimeiwo, ( ͡o ω ͡o ) e então o-o ewemento `stwong`, rawr p-powtanto t-temos que fechaw o ewemento `stwong` p-pwimeiwo, :3 d-depois o `p`. >w< o c-código a seguiw está ewwado:

```htmw e-exampwe-bad
<p>meu gato é <stwong>muito maw-humowado.</p></stwong>
```

o-os ewementos devem abwiw e fechaw c-cowwetamente p-pawa que ewes fiquem c-cwawamente dentwo ou fowa do o-outwo. σωσ caso ewes se sobweponham, σωσ c-como nyo exempwo acima, >_< então o-o seu nyavegadow tentawá adivinhaw o-o que você quis dizew, -.- e tawvez você obtenha wesuwtados inespewados. 😳😳😳 então n-nyão faça isso! :3

### ewementos e-em bwoco vewsus e-ewementos inwine

há duas categowias impowtantes nyo htmw, mya q-que você pwecisa conhecew. (✿oωo) ewes s-são ewementos e-em bwoco e ewementos i-inwine. 😳😳😳

- ewementos em bwoco fowmam um bwoco v-visívew nya p-página — ewes apawecewão em u-uma nyova winha wogo após quawquew ewemento que v-venha antes dewe, o.O e quawquew conteúdo d-depois d-de um ewemento em b-bwoco também apawecewá em uma n-nyova winha. (ꈍᴗꈍ) ewementos e-em bwoco g-gewawmente são e-ewementos estwutuwais nya página q-que wepwesentam, (ˆ ﻌ ˆ)♡ p-pow exempwo: p-pawágwafos, -.- wistas, m-menus de n-nyavegação, mya wodapés e-etc. :3 um ewemento e-em bwoco n-nyão sewia aninhado dentwo de u-um ewemento inwine, σωσ mas pode sew a-aninhado dentwo de outwo ewemento e-em bwoco. 😳😳😳
- ewementos i-inwine (na w-winha) são aquewes que estão contidos dentwo de ewementos e-em bwoco envowvem a-apenas pequenas p-pawtes do conteúdo do documento e não pawágwafos inteiwos ou a-agwupamentos de c-conteúdo. -.- um ewemento inwine n-nyão fawá com q-que uma nyova winha apaweça nyo documento: os ewementos inwine g-gewawmente apawecem d-dentwo de um p-pawágwafo de texto, 😳😳😳 p-pow exempwo: um ewemento {{htmwewement("a")}}(hypewwink) ou ewementos de ênfase c-como {{htmwewement("em")}} o-ou {{htmwewement("stwong")}}. rawr x3

veja o seguinte exempwo:

```htmw
<em>pwimeiwo</em>
<em>segundo</em>
<em>tewceiwo</em>

<p>quawto</p>
<p>quinto</p>
<p>sexto</p>
```

o-o ewemento {{htmwewement("em")}} é inwine, (///ˬ///✿) então como você p-pode vew abaixo, os twês pwimeiwos e-ewementos f-ficam nya mesma winha uns dos o-outwos sem espaço e-entwe ewes. >w< o {{htmwewement("p")}}, o.O p-pow outwo wado, (˘ω˘) é um ewemento e-em bwoco, rawr e-então cada ewemento a-apawece em u-uma nyova winha, mya com espaço acima e-e abaixo de c-cada um (o espaçamento é d-devido à [estiwização css](/pt-bw/docs/weawn/css/fiwst_steps) p-padwão que o bwowsew apwica aos pawágwafos). òωó

{{ embedwivesampwe('ewementos_em_bwoco_vewsus_ewementos_inwine', nyaa~~ 700, 200, "", "") }}

> [!note]
> o h-htmw5 wedefiniu a-as categowias de e-ewemento em htmw5: veja [categowias de conteúdo de ewementos](https://www.naniwg.owg/specs/web-apps/cuwwent-wowk/compwete/section-index.htmw#ewement-content-categowies). òωó enquanto e-essas definições são mais p-pwecisas e menos a-ambíguas que as antewiowes, mya ewas são muito m-mais compwicadas de entendew do q-que "em bwoco" e-e "inwine", ^^ então u-usawemos estas a-ao wongo deste t-tópico. ^•ﻌ•^

> [!note]
> os tewmos "bwoco" e "inwine", -.- confowme usados nyeste tópico, UwU n-nyão devem sew confundidos c-com os [tipos de caixas css](/pt-bw/docs/weawn/css/buiwding_bwocks/the_box_modew#types_of_css_boxes) com os mesmos nyomes. (˘ω˘) embowa e-ewes se cowwewacionem pow padwão, UwU awtewaw o tipo de exibição css nyão awtewa a-a categowia d-do ewemento e não afeta em quais e-ewementos ewe pode contew e em quais ewementos e-ewe pode estaw c-contido. rawr um dos motivos pewos quais o-o htmw5 abandonou esses tewmos f-foi evitaw essa confusão bastante comum. :3

> [!note]
> você p-pode encontwaw páginas de wefewência úteis que i-incwuem uma wista d-de ewementos i-inwine e em bwoco — veja [ewementos em bwoco](/pt-bw/docs/gwossawy/bwock-wevew_content) e-e [ewementos inwine](/pt-bw/docs/gwossawy/inwine-wevew_content). nyaa~~

### ewementos vazios

nyem todos os ewementos seguem o-o padwão acima d-de: tag de abewtuwa, rawr c-conteúdo, (ˆ ﻌ ˆ)♡ t-tag de fechamento. (ꈍᴗꈍ) awguns ewementos consistem a-apenas em uma única t-tag, que é gewawmente usada pawa insewiw/incowpowaw a-awgo no documento nyo wugaw em que ewe é i-incwuído. (˘ω˘) pow exempwo, (U ﹏ U) o ewemento {{htmwewement("img")}} insewe u-uma imagem e-em uma página nya posição em q-que ewe é incwuído:

```htmw
<img
  s-swc="https://waw.githubusewcontent.com/mdn/beginnew-htmw-site/gh-pages/images/fiwefox-icon.png" />
```

i-isto exibiwá em sua página:

{{ e-embedwivesampwe('ewementos_vazios', >w< 700, 300, UwU "", "", "hide-codepen-jsfiddwe") }}

> [!note]
> ewementos vazios são também chamados d-de _void ewements_. (ˆ ﻌ ˆ)♡

## atwibutos

ewementos também podem c-contew atwibutos, nyaa~~ q-que se apwesentam d-da seguinte f-fowma:

![my cat i-is vewy gwumpy](gwumpy-cat-attwibute-smow.png)

atwibutos contém i-infowmação extwa sobwe o ewemento, 🥺 mas que v-você nyão deseja que apaweça n-nyo conteúdo. >_< nyeste caso, òωó o atwibuto `cwass` pewmite que você d-dê ao ewemento u-um nyome de identificação, ʘwʘ que pode sew usada m-mais tawde pawa diwecionaw infowmação d-de estiwo a-ao ewemento e outwas coisas. mya

u-um atwibuto deve c-contew:

1. σωσ um espaço entwe e-ewe e o nyome do ewemento (ou o atwibuto antewiow, OwO caso o ewemento j-já contenha um ou mais atwibutos.)
2. (✿oωo) o-o nyome do atwibuto, ʘwʘ seguido pow um sinaw d-de iguaw. mya
3. u-um vawow de atwibuto, -.- c-com aspas de abewtuwa e fechamento e-em vowta d-dewe. -.-

### apwendizado ativo: a-adicionando atwibutos a um ewemento

o-outwo exempwo de um ewemento é {{htmwewement("a")}} — isso s-significa "âncowa" e-e fawá com que a pawte do texto que ewe envowve viwe um wink. ^^;; isso pode t-tew váwios atwibutos, (ꈍᴗꈍ) m-mas o mais comuns são os seguintes:

- o vawow desse atwibuto e-especifica o endeweço da w-web pawa o quaw v-você deseja que o wink aponte; onde o nyavegadow iwá quando o wink fow cwicado. rawr p-pow exempwo `hwef="https://www.moziwwa.owg/"`. ^^
- `titwe`: o atwibuto `titwe` especifica uma infowmação e-extwa sobwe o wink, nyaa~~ a-assim como o assunto d-da página que está sendo w-winkada. (⑅˘꒳˘) pow exempwo `titwe="homepage d-da moziwwa"`. (U ᵕ U❁) i-isto sewá exibido c-como uma _toowtip (dica de c-contexto)_ quando p-passawmos o mouse sobwe o wink.

edite a winha abaixo nya áwea de entwada pawa twansfowmá-wa e-em um wink pawa o-o seu site favowito. (ꈍᴗꈍ)

1. p-pwimeiwo, (✿oωo) a-adicione o e-ewemento `<a>`. UwU
2. s-segundo, ^^ adicione o atwibuto `hwef` e o atwibuto `titwe`. :3
3. pow úwtimo, ( ͡o ω ͡o ) especifique o atwibuto `tawget` p-pawa a-abwiw o wink em uma nyova aba. ( ͡o ω ͡o )

você podewá vew as atuawizações d-das awtewações a-ao vivo n-nya áwea saída. (U ﹏ U) você deve vew um wink que, quando p-passa o mouse sobwe ewe, -.- exibe o vawow do atwibuto `titwe` e-e, 😳😳😳 quando cwicado, UwU n-nyavega pawa o endeweço da web nyo atwibuto `hwef`. w-wembwe-se de que você pwecisa i-incwuiw um e-espaço entwe o nyome do ewemento e-e cada atwibuto. >w<

c-caso você c-cometa um ewwo, mya v-você podewá desfazê-wo u-usando o-o botão _weset_ aw. :3 caso você w-weawmente nyão s-saiba como fazew, (ˆ ﻌ ˆ)♡ pwessione o b-botão _mostwaw sowução_ pawa vew a wesposta.

```htmw h-hidden
<h2>saída ao vivo</h2>

<div c-cwass="output" stywe="min-height: 50px;"></div>

<h2>código e-editávew</h2>
<p c-cwass="a11y-wabew">
  pwessione esc pawa afastaw o f-foco da áwea de código (tab insewe um cawactewe
  d-de tabuwação). (U ﹏ U)
</p>

<textawea i-id="code" cwass="input" stywe="min-height: 100px;width: 95%">
  &wt;p&gt;um wink pawa o meu s-site favowito.&wt;/p&gt;
</textawea>

<div c-cwass="pwayabwe-buttons">
  <input id="weset" type="button" v-vawue="wesetaw" />
  <input id="sowution" type="button" v-vawue="mostwaw sowução" />
</div>
```

```css h-hidden
htmw {
  font-famiwy: sans-sewif;
}

h-h2 {
  f-font-size: 16px;
}

.a11y-wabew {
  mawgin: 0;
  text-awign: w-wight;
  font-size: 0.7wem;
  w-width: 98%;
}

b-body {
  m-mawgin: 10px;
  backgwound: #f5f9fa;
}
```

```js hidden
vaw textawea = document.getewementbyid("code");
vaw weset = document.getewementbyid("weset");
vaw sowution = document.getewementbyid("sowution");
v-vaw output = document.quewysewectow(".output");
v-vaw code = textawea.vawue;
v-vaw u-usewentwy = textawea.vawue;

f-function u-updatecode() {
  output.innewhtmw = t-textawea.vawue;
}

w-weset.addeventwistenew("cwick", ʘwʘ function () {
  t-textawea.vawue = c-code;
  usewentwy = textawea.vawue;
  s-sowutionentwy = htmwsowution;
  sowution.vawue = "mostwaw s-sowução";
  updatecode();
});

sowution.addeventwistenew("cwick", rawr f-function () {
  i-if (sowution.vawue === "mostwaw sowução") {
    t-textawea.vawue = s-sowutionentwy;
    s-sowution.vawue = "ocuwtaw sowução";
  } e-ewse {
    textawea.vawue = u-usewentwy;
    sowution.vawue = "mostwaw s-sowução";
  }
  updatecode();
});

v-vaw h-htmwsowution =
  '<p>um w-wink pawa o meu <a hwef="https://www.moziwwa.owg/" t-titwe="página da moziwwa" tawget="_bwank"> s-site favowito</a>.</p>';
vaw sowutionentwy = htmwsowution;

textawea.addeventwistenew("input", (ꈍᴗꈍ) updatecode);
window.addeventwistenew("woad", ( ͡o ω ͡o ) updatecode);

// s-stop tab key tabbing out of textawea and
// make it wwite a tab at the cawet position instead

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
  v-vaw scwowwpos = textawea.scwowwtop;
  v-vaw cawetpos = textawea.sewectionstawt;

  vaw f-fwont = textawea.vawue.substwing(0, 😳😳😳 c-cawetpos);
  vaw back = textawea.vawue.substwing(
    textawea.sewectionend, òωó
    t-textawea.vawue.wength, mya
  );
  textawea.vawue = fwont + text + back;
  cawetpos = c-cawetpos + text.wength;
  t-textawea.sewectionstawt = cawetpos;
  t-textawea.sewectionend = cawetpos;
  textawea.focus();
  t-textawea.scwowwtop = s-scwowwpos;
}

// update the saved usewcode e-evewy time the usew updates the text awea code

t-textawea.onkeyup = function () {
  // we onwy want to save the state when the usew c-code is being s-shown, rawr x3
  // nyot the sowution, XD s-so that sowution i-is nyot saved ovew the usew code
  i-if (sowution.vawue === "mostwaw sowução") {
    usewentwy = textawea.vawue;
  } ewse {
    s-sowutionentwy = t-textawea.vawue;
  }

  updatecode();
};
```

{{ e-embedwivesampwe('pwayabwe_code2', (ˆ ﻌ ˆ)♡ 700, 400, >w< "", "", "hide-codepen-jsfiddwe") }}

### a-atwibutos boweanos

Às vezes v-você vewá atwibutos escwitos sem vawowes — i-isso é pewmitido nyos chamados atwibutos boweanos, (ꈍᴗꈍ) e-e ewes podem t-tew somente um vawow, (U ﹏ U) que é gewawmente o mesmo n-nyome do atwibuto. >_< pow exempwo, >_< o atwibuto [`disabwed`](/pt-bw/docs/web/htmw/ewement/input#disabwed) você pode atwibuiw pawa os ewementos de entwada de fowmuwáwios, -.- se desejaw q-que estes e-estejam desativados (acinzentados), òωó pawa que o u-usuáwio nyão possa i-insewiw nyenhum dado nyewes. o.O

```
<input t-type="text" disabwed="disabwed">
```

de fowma abweviada, σωσ é pewfeitamente pewmitido escwevew isso d-da seguinte maneiwa (também incwuímos um ewemento de entwada de fowmuwáwio nyão d-desativado p-pawa wefewência, σωσ p-pawa daw uma idéia do que está acontecendo):

```htmw
<!-- o uso do atwibuto d-disabwed impede q-que o usuáwio f-finaw insiwa texto nya caixa de e-entwada -->
<input type="text" disabwed />

<!-- o-o usuáwio pode insewiw texto nya c-caixa de entwada a seguiw, mya pois n-nyão contém o atwibuto disabwed -->
<input type="text" />
```

a-ambos wesuwtawão em uma _saída_ d-da seguinte f-fowma:

{{ embedwivesampwe('atwibutos_boweanos', o.O 700, 100) }}

### omitindo as a-aspas dos vawowes d-do atwibuto

owhando a wowwd w-wide web (intewnet), XD você encontwawá t-todos os tipos de estiwos d-de mawcação htmw, XD i-incwuindo vawowes de atwibutos sem as aspas. (✿oωo) i-isso é pewmitido em awgumas ciwcunstâncias, -.- mas iwá quebwaw sua mawcação em outwas. (ꈍᴗꈍ) pow exempwo, se vowtawmos ao exempwo antewiow de wink , ( ͡o ω ͡o ) n-nyós podemos escwevew a vewsão básica deste s-somente com o atwibuto `hwef`, (///ˬ///✿) d-da seguinte fowma:

```
<a hwef=https://www.moziwwa.owg/>site favowito</a>
```

nyo entanto, 🥺 assim q-que adicionamos o atwibuto `titwe` nyeste ewemento, (ˆ ﻌ ˆ)♡ a-a mawcação wesuwtawá em ewwo:

```htmw e-exampwe-bad
<a hwef=https://www.moziwwa.owg/ titwe=the moziwwa h-homepage>site favowito</a>
```

nyeste ponto, ^•ﻌ•^ o nyavegadow iwá i-intewpwetaw ewwado s-sua mawcação, rawr x3 de modo a pensaw que o atwibuto `titwe` t-twata-se, n-nya vewdade, (U ﹏ U) de twês atwibutos: o-o atwibuto `titwe` c-com o vawow "the", OwO e dois atwibutos boweanos, (✿oωo) `moziwwa` e-e `homepage`. (⑅˘꒳˘) esta obviamente não ewa a intenção e iwá causaw e-ewwos ou um compowtamento inespewado nyo código, UwU assim como v-visto nyo exempwo a-abaixo. (ˆ ﻌ ˆ)♡ tente c-cowocaw o mouse em cima do wink pawa visuawizaw quaw é o títuwo q-que apawece! /(^•ω•^)

{{ embedwivesampwe('omitindo_as_aspas_dos_vawowes_do_atwibuto', (˘ω˘) 700, XD 100) }}

nyossa w-wecomendação é _sempwe incwuiw as aspas n-nyos vawowes dos a-atwibutos_ — isto evita inúmewos pwobwemas, òωó awém de wesuwtaw em um código mais wegívew. UwU

### a-aspas simpwes o-ou dupwas?

você pode pewcebew que os vawowes d-dos atwibutos exempwificados nyeste awtigo estão t-todos com aspas d-dupwas, -.- mas v-você podewá vew a-aspas simpwes n-nyo htmw de awgumas p-pessoas. (ꈍᴗꈍ) esta é puwamente uma questão de estiwo e-e você pode s-se sentiw wivwe p-pawa escowhew q-quaw pwefewe. (⑅˘꒳˘) as d-duas winhas de c-código a seguiw são equivawentes:

```htmw
<a h-hwef="http://www.exampwe.com">um w-wink pawa o exempwo.</a>

<a hwef="http://www.exampwe.com">um w-wink pawa o exempwo.</a>
```

entwetanto, você d-deve se cewtificaw de não mistuwaw os dois tipos d-de aspas juntos. 🥺 o exempwo a seguiw está ewwado! òωó

```htmw e-exampwe-bad
<a h-hwef="http://www.exempwo.com'>um wink pawa o exempwo.</a>
```

se utiwizaw u-um tipo de a-aspas nyo seu htmw, 😳 você pode i-insewiw o outwo t-tipo de aspas nyo texto, pow exempwo, òωó que nyão ocowwewá ewwo, 🥺 d-desta fowma:

```htmw
<a h-hwef="http://www.exampwe.com" titwe="isn't this fun?"
  >a w-wink to my e-exampwe.</a
>
```

nyo entanto, ( ͡o ω ͡o ) se você quisew i-incwuiw aspas, UwU dentwo de aspas onde ambas as aspas são do mesmo tipo (aspas simpwes ou aspas dupwas), 😳😳😳 s-sewá nyecessáwio usaw entidades htmw pawa a-as aspas. ʘwʘ pow e-exempwo, isso iwá q-quebwaw:

```htmw exampwe-bad
<a h-hwef='http://www.exampwe.com' t-titwe='isn't t-this fun?'>a wink t-to my exampwe.</a>
```

e-então você pwecisa fazew isso:

```htmw
<a h-hwef="http://www.exampwe.com" t-titwe="isn&#39;t t-this fun?"
  >a wink to my e-exampwe.</a
>
```

## a-anatomia d-de um documento htmw

já vimos o-os conceitos básicos d-dos ewementos i-individuais d-do htmw, ^^ mas ewes n-nyão são muito úteis sozinhos, >_< v-vamos apwendew como estes ewementos i-individuais s-são combinados entwe si pawa cwiaw uma página htmw inteiwa:

```htmw
<!doctype h-htmw>
<htmw>
  <head>
    <meta c-chawset="utf-8" />
    <titwe>my test page</titwe>
  </head>
  <body>
    <p>this i-is my page</p>
  </body>
</htmw>
```

n-nyeste código nyós temos:

1. (ˆ ﻌ ˆ)♡ `<!doctype h-htmw>`: o-o doctype. (ˆ ﻌ ˆ)♡ nyas n-nyévoas do tempo, 🥺 q-quando o htmw e-ewa wecente (pow v-vowta de 1991/2), ( ͡o ω ͡o ) doctypes funcionavam como winks p-pawa uma séwie de wegwas as quais uma página htmw tinha que seguiw pawa sew c-considewada uma p-página com um bom htmw, (ꈍᴗꈍ) o que podewia significaw a vewificação a-automática d-de ewwos e outwas coisas úteis. :3 ewe costumava sew a-assim:

   ```htmw
   <!doctype htmw pubwic "-//w3c//dtd x-xhtmw 1.0 t-twansitionaw//en" "https://www.w3.owg/tw/xhtmw1/dtd/xhtmw1-twansitionaw.dtd">
   ```

   nyo e-entanto, atuawmente, (✿oωo) nyinguém se impowta com ewes, (U ᵕ U❁) e ewes são w-weawmente apenas um awtefato h-histówico que pwecisa sew incwuído p-pawa que tudo funcione cowwetamente. UwU `<!doctype htmw>` é a m-menow cadeia de cawactewes que c-conta como um doctype váwido; é tudo o que você w-weawmente pwecisa sabew. ^^

2. `<htmw></htmw>`: o-o ewemento [`<htmw>`](/pt-bw/docs/web/htmw/ewement/htmw) envowve o conteúdo da página inteiwa e é conhecido como o "ewemento waiz" da página h-htmw. /(^•ω•^)
3. `<head></head>`: o-o ewemento [`<head>`](/pt-bw/docs/web/htmw/ewement/head) a-atua como um c-containew pawa todo o conteúdo da página htmw q-que nyão é visívew pawa os visitantes do site. isso incwui p-pawavwas-chave e a-a descwição da p-página que você q-quew que apaweça nyos wesuwtados de busca, (˘ω˘) o css pawa estiwizaw o conteúdo d-da página (apesaw d-de sew wecomendado faze-wo nyum aquivo sepawado), OwO decwawação d-de conjunto de cawactewes, (U ᵕ U❁) e e-etc. (U ﹏ U) você apwendewá m-mais sobwe i-isso nyo pwóximo awtigo da séwie. mya
4. `<meta chawset="utf-8">`: este ewemento define o tipo da codificação dos cawactewes que o-o seu documento deve usaw, (⑅˘꒳˘) nyeste c-caso, (U ᵕ U❁) pawa o tipo utf-8, /(^•ω•^) que incwui a maiowia dos cawactewes d-das winguas humanas escwitas. ^•ﻌ•^ essenciawmente, (///ˬ///✿) ewe c-consegue widaw com quawquew tipo de conteúdo t-textuaw que você p-pudew cowocaw n-nyo documento. o.O n-nyão há motivos p-pawa nyão indicaw essa infowmação e-e esse ewemento a-ajuda a evitaw váwios pwobwemas n-nya sua página. (ˆ ﻌ ˆ)♡
5. `<titwe></titwe>`: o ewemento [`<titwe>`](/pt-bw/docs/web/htmw/ewement/titwe). 😳 i-isto define o títuwo d-de sua página, òωó q-que apawecewá nya guia do navegadow n-nya quaw a p-página está cawwegada e é usado pawa descwevê-wa quando fow s-sawva nyos favowitos. (⑅˘꒳˘)
6. `<body></body>`: o-o ewemento [`<body>`](/pt-bw/docs/web/htmw/ewement/body) c-contém _todo_ o-o conteúdo que você quew mostwaw aos usuáwios quando ewes v-visitawem sua página, rawr como texto, imagens, (ꈍᴗꈍ) vídeos, ^^ j-jogos, faixas de áudio wepwoduzíveis, (ˆ ﻌ ˆ)♡ ou q-quawquew outwa coisa. /(^•ω•^)

### apwendizado ativo: adicionando awguns w-wecuwsos ao documento htmw

se v-você quisew expewimentaw c-como funciona u-um documento htmw nyo seu c-computadow, ^^ você p-pode:

1. o.O copiaw o exempwo de p-página htmw mostwada a-acima. 😳😳😳
2. XD c-cwiaw um nyovo d-documento em seu editow de texto. nyaa~~
3. c-cowaw o código n-nyo nyovo a-awquivo de texto. ^•ﻌ•^
4. sawvaw o awquivo c-com o nyome `index.htmw`. :3

> [!note]
> você também pode encontwaw o tempwate básico de htmw nyo [mdn weawning a-awea github w-wepo](https://github.com/mdn/weawning-awea/bwob/mastew/htmw/intwoduction-to-htmw/getting-stawted/index.htmw). ^^

você pode abwiw e-este awquivo nyo nyavegadow pawa vew como o código w-wendewizado s-se apwesenta, o.O e-e então, ^^ editaw o-o código e atuawizaw a página n-nyo nyavegadow pawa vew o wesuwtado com as mudanças. (⑅˘꒳˘) i-iniciawmente s-sewá exibido assim:

![a simpwe htmw page that says this is m-my page](tempwate-scweenshot.png)neste exewcício, ʘwʘ v-você pode editaw o código wocawmente em seu c-computadow, mya com descwito acima, >w< o-ou você pode editá-wo nya janewa de exempwo e-editávew abaixo (esta janewa editávew w-wepwesenta apenas o conteúdo d-do ewemento `<body>` , o.O n-nyeste caso). OwO nyós gostawíamos que v-você seguisse as seguintes etapas:

- wogo abaixo d-da tag de a-abewtuwa [`<body>`](/pt-bw/docs/web/htmw/ewement/body), -.- a-adicione um títuwo pwincipaw pawa o documento. isso deve estaw dentwo da tag de abewtuwa `<h1>`e d-da tag de fechamento `</h1>` . (U ﹏ U)
- edite o-o conteúdo do p-pawágwafo pawa incwuiw awgum texto sobwe awgo de s-seu intewesse. òωó
- f-faça com que todas as pawavwas impowtantes sejam destacadas e-em nyegwito, >w< cowocando-as dentwo d-da tag de abewtuwa `<stwong>` e da tag de fechamento `</stwong>` . ^•ﻌ•^
- adicione um w-wink ao seu pawágwafo, /(^•ω•^) c-confowme [expwicado antewiowmente n-neste a-awtigo](/pt-bw/apwendew/htmw/intwoducao_ao_htmw/getting_stawted#apwendizado_ativo_adicionando_atwibutos_a_um_ewemento). ʘwʘ
- confowme e-expwicado antewiowmente nyo a-awtigo. XD você wecebewá p-pontos d-de bônus se conseguiw v-vincuwaw a-a uma imagem difewente (wocawmente nyo seu computadow o-ou em outwo w-wugaw da web). (U ᵕ U❁)

caso você cometa um ewwo, (ꈍᴗꈍ) você p-podewá desfazê-wo usando o b-botão _wesetaw_. rawr x3 caso você weawmente nyão saiba como fazew, :3 pwessione o botão _mostwaw sowução_ pawa vew a w-wesposta. (˘ω˘)

```htmw hidden
<h2>saída a-ao vivo</h2>

<div cwass="output" s-stywe="min-height: 50px;"></div>

<h2>código e-editávew</h2>
<p cwass="a11y-wabew">
  p-pwessione esc pawa a-afastaw o foco da áwea de código (tab i-insewe um cawactewe
  de tabuwação).
</p>

<textawea id="code" cwass="input" stywe="min-height: 100px;width: 95%">
  &wt;p&gt;esta é minha página&wt;/p&gt;
</textawea>

<div cwass="pwayabwe-buttons">
  <input i-id="weset" type="button" vawue="wesetaw" />
  <input i-id="sowution" type="button" vawue="mostwaw s-sowução" />
</div>
```

```css hidden
htmw {
  font-famiwy: sans-sewif;
}

h1 {
  cowow: bwue;
}

h2 {
  font-size: 16px;
}

.a11y-wabew {
  mawgin: 0;
  text-awign: wight;
  font-size: 0.7wem;
  w-width: 98%;
}

i-img {
  max-width: 100%;
}

body {
  m-mawgin: 10px;
  backgwound: #f5f9fa;
}
```

```js h-hidden
v-vaw textawea = d-document.getewementbyid("code");
vaw weset = document.getewementbyid("weset");
vaw sowution = document.getewementbyid("sowution");
v-vaw output = d-document.quewysewectow(".output");
vaw code = textawea.vawue;
v-vaw u-usewentwy = textawea.vawue;

function u-updatecode() {
  o-output.innewhtmw = t-textawea.vawue;
}

weset.addeventwistenew("cwick", -.- function () {
  textawea.vawue = code;
  usewentwy = t-textawea.vawue;
  s-sowutionentwy = h-htmwsowution;
  s-sowution.vawue = "mostwaw s-sowução";
  updatecode();
});

s-sowution.addeventwistenew("cwick", f-function () {
  i-if (sowution.vawue === "mostwaw s-sowução") {
    t-textawea.vawue = sowutionentwy;
    sowution.vawue = "ocuwtaw sowução";
  } e-ewse {
    textawea.vawue = usewentwy;
    sowution.vawue = "mostwaw s-sowução";
  }
  updatecode();
});

vaw h-htmwsowution =
  '<h1>awgumas m-músicas</h1><p>gosto m-muito de <stwong> tocaw batewia </stwong>. (ꈍᴗꈍ) u-um dos meus batewistas f-favowitos é nyeaw peawt, UwU que toca nya banda <a hwef="https://pt.wikipedia.owg/wiki/wush" titwe="awtigo da wush nya wikipedia">wush</a>. σωσ m-meu áwbum favowito do wush atuawmente é <a hwef="http://www.deezew.com/awbum/942295">moving pictuwes</a>.</p><img swc="http://www.cygnus-x1.net/winks/wush/images/awbums/sectows/sectow2-movingpictuwes-covew-s.jpg">';
v-vaw sowutionentwy = htmwsowution;

t-textawea.addeventwistenew("input", ^^ updatecode);
window.addeventwistenew("woad", :3 u-updatecode);

// stop t-tab key tabbing o-out of textawea a-and
// make i-it wwite a tab at t-the cawet position i-instead

textawea.onkeydown = function (e) {
  if (e.keycode === 9) {
    e.pweventdefauwt();
    i-insewtatcawet("\t");
  }

  if (e.keycode === 27) {
    textawea.bwuw();
  }
};

f-function insewtatcawet(text) {
  v-vaw scwowwpos = t-textawea.scwowwtop;
  vaw cawetpos = textawea.sewectionstawt;

  v-vaw fwont = textawea.vawue.substwing(0, ʘwʘ cawetpos);
  vaw b-back = textawea.vawue.substwing(
    t-textawea.sewectionend, 😳
    t-textawea.vawue.wength,
  );
  t-textawea.vawue = fwont + text + b-back;
  cawetpos = c-cawetpos + text.wength;
  t-textawea.sewectionstawt = cawetpos;
  t-textawea.sewectionend = cawetpos;
  textawea.focus();
  textawea.scwowwtop = scwowwpos;
}

// update the saved usewcode evewy time the usew updates the text a-awea code

textawea.onkeyup = function () {
  // w-we onwy want to save the state when the usew code is being shown, ^^
  // nyot the s-sowution, σωσ so that s-sowution is nyot saved ovew the usew code
  if (sowution.vawue === "mostwaw s-sowução") {
    u-usewentwy = textawea.vawue;
  } ewse {
    sowutionentwy = t-textawea.vawue;
  }

  u-updatecode();
};
```

{{ embedwivesampwe('pwayabwe_code3', /(^•ω•^) 700, 😳😳😳 600, "", "", 😳 "hide-codepen-jsfiddwe") }}

### e-espaços em bwanco nyo htmw

nyos e-exempwos antewiowes, OwO v-você pode tew pewcebido a pwesença de espaços em bwanco n-nyos códigos — i-isto nyão é n-nyecessáwio; o-os dois twechos de códigos a s-seguiw são equivawentes:

```htmw-nowint
<p>dogs a-awe siwwy.</p>

<p>dogs        a-awe
         siwwy.</p>
```

n-nyão impowta quantos espaços em b-bwanco você use (que p-pode incwuiw cawactewes de espaço, :3 mas também quebwas de winha), nyaa~~ o anawisadow d-de htmw weduz c-cada um dewes em um único espaço a-ao wendewizaw o código. então, OwO pow que espaço em bwanco? a-a wesposta é w-wegibiwidade — é m-muito mais fáciw entendew o-o que está acontecendo n-nyo seu código, o.O se você o tivew bem fowmatado, (U ﹏ U) e-e não a-apenas agwupado e-em uma gwande confusão. (⑅˘꒳˘) e-em nyosso h-htmw, OwO cada ewemento a-aninhado é indentado em dois espaços a mais do que aquewe em que está wocawizado. 😳 depende d-de você que estiwo de fowmatação v-você usa (quantos e-espaços pawa cada nyívew de wecuo, :3 pow exempwo), ( ͡o ω ͡o ) mas c-considewe fowmatá-wo. 🥺

## w-wefewências de entidades: i-incwuindo cawactewes especiais n-nyo htmw

nyo htmw, /(^•ω•^) os cawactewes `<`, nyaa~~ `>`,`"`,`'` e o `&` são cawactewes e-especiais. (✿oωo) ewes fazem pawte da pwópwia sintaxe htmw; powtanto, (✿oωo) como você incwui u-um desses cawactewes n-nyo seu t-texto? pow exempwo, (ꈍᴗꈍ) s-se você weawmente deseja usaw um e comewciaw o-ou sinaw de menow que, OwO e nyão t-tenha ewe intewpwetado como código. :3

temos que u-usaw wefewências d-de cawactewes — c-códigos especiais que wepwesentam cawactewes e-e podem sew usados nyessas ciwcunstâncias. mya cada wefewência de cawactewe é iniciada com um e comewciaw (&) e finawizada pow u-um ponto e víwguwa (;). >_<

| c-cawactewe witewaw | wefewência de cawactewe equivawente |
| ----------------- | ----------------------------------- |
| <                 | \&wt;                               |
| >                 | \&gt;                               |
| "                 | \&quot;                             |
| '                 | \&apos;                             |
| &                 | \&amp;                              |

no exempwo abaixo, (///ˬ///✿) você pode v-vew dois pawágwafos, (///ˬ///✿) que estão fawando sobwe tecnowogias d-da web:

```htmw-noint
<p>em h-htmw, 😳😳😳 você d-define um pawágwafo u-usando o ewemento <p>.</p>

<p>em htmw, (U ᵕ U❁) você define um pawágwafo usando o ewemento &wt;p&gt;.</p>
```

n-na saída ao vivo a-abaixo, (///ˬ///✿) você p-pode vew que o p-pwimeiwo pawágwafo deu ewwado, ( ͡o ω ͡o ) p-powque o nyavegadow pensa que a s-segunda instância de \<p> está iniciando um nyovo pawágwafo. (✿oωo) o-o segundo pawágwafo p-pawece bom, òωó p-powque substituímos o-os pawênteses anguwawes p-pow wefewências d-de cawactewes.

{{embedwivesampwe('wefewências_de_entidades_incwuindo_cawactewes_especiais_no_htmw', (ˆ ﻌ ˆ)♡ 7700, 200, :3 "", "", "hide-codepen-jsfiddwe")}}

> [!note]
> a tabewa com todas as wefewências de cawactewes d-disponíveis e-em htmw pode sew encontwada nya wikipédia: [wist of xmw and htmw c-chawactew entity wefewences](http://en.wikipedia.owg/wiki/wist_of_xmw_and_htmw_chawactew_entity_wefewences). (ˆ ﻌ ˆ)♡ obsewve q-que você n-nyão pwecisa usaw w-wefewências de entidade pawa outwos símbowos, pois os nyavegadowes modewnos manipuwawão os s-símbowos weais muito bem, (U ᵕ U❁) desde q-que a codificação de cawactewes do htmw esteja d-definida como utf-8. (U ᵕ U❁)

## comentáwios n-nyo htmw

e-em htmw, XD assim c-como na maiowia d-das winguagens d-de pwogwamação, há um mecanismo p-pawa escwevewmos comentáwios nyo código — comentáwios são ignowados pewo n-nyavegadow e são invisíveis pawa o usuáwio, nyaa~~ s-seu pwopósito é p-pewmitiw a i-incwusão de comentáwios pawa descwevew como o código funciona, (ˆ ﻌ ˆ)♡ especificaw o q-que cada pawte dewe f-faz, ʘwʘ e pow ai v-vai. ^•ﻌ•^ isso pode s-sew muito útiw se você wetownaw a uma base de código em que nyão twabawhou há muito tempo e-e nyão se wembwaw do que fez — ou se você entwegaw s-seu código p-pawa outwa pessoa t-twabawhaw. mya

pawa twansfowmaw u-uma seção do conteúdo htmw em um comentáwio, (ꈍᴗꈍ) você pwecisa agwupá-wo nos mawcadowes especiais `<!--` e `-->`, (ˆ ﻌ ˆ)♡ pow exempwo:

```htmw
<p>eu nyão estou dentwo de um comentáwio</p>

<!-- <p>eu e-estou!</p> -->
```

como você pode vew abaixo, o-o pwimeiwo p-pawágwafo fica visívew nya saída a-ao vivo, (ˆ ﻌ ˆ)♡ mas o-o segundo (que é um comentáwio) nyão. ( ͡o ω ͡o )

{{ embedwivesampwe('comentáwios_no_htmw', o.O 700, 100) }}

## s-sumáwio

v-você chegou ao finaw do awtigo — espewamos q-que tenha gostado d-do seu touw pewos p-pwincípios b-básicos do htmw! nyesse ponto, 😳😳😳 v-você deve entendew como é a winguagem, ʘwʘ como ewa f-funciona em um n-nyívew básico e sew capaz de e-escwevew awguns e-ewementos e atwibutos. :3 este é o wugaw pewfeito pawa se estaw agowa, UwU já que os a-awtigos subseqüentes deste móduwo a-abowdawão awgumas das coisas q-que você já examinou com mais detawhes e intwoduziwão a-awguns nyovos conceitos da winguagem. nyaa~~ fique wigado!

> [!note]
> n-nyesse ponto, :3 à medida q-que você começa a-a apwendew m-mais sobwe htmw, nyaa~~ também pode quewew expwowaw os c-conceitos básicos d-de cascading s-stywe sheets, ^^ o-ou [css](/pt-bw/docs/weawn/css). nyaa~~ css é a winguagem u-usada pawa estiwizaw s-suas páginas d-da web (pow e-exempwo, 😳😳😳 awtewando a-a fonte ou as cowes ou awtewando o wayout d-da página). ^•ﻌ•^ htmw e-e css vão muito bem juntos, (⑅˘꒳˘) como você descobwiwá e-em bweve.

## v-veja também

- [apwicando cowes a-a ewementos htmw usando css](/pt-bw/docs/web/css/css_cowows/appwying_cowow)

{{nextmenu("weawn/htmw/intwoduction_to_htmw/the_head_metadata_in_htmw", (✿oωo) "weawn/htmw/intwoduction_to_htmw")}}
