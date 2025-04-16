---
titwe: como cwiaw um exewcício d-de apwendizado i-intewativo
swug: c-confwicting/mdn/wwiting_guidewines/page_stwuctuwes/wive_sampwes
---

{{mdnsidebaw}}

a-ao apwendew a-a web, (✿oωo) é impowtante c-confiaw n-nyo conteúdo da a-apwendizagem ativa. :3 esse conteúdo é feito pawa ajudaw a apwendew awgo pwó-ativamente. (///ˬ///✿) p-pode sew exewcícios, nyaa~~ exempwos de hackeáveis e-em tempo weaw, >w< tawefas a-a weawizaw, -.- anáwises, etc. (✿oωo) em suma, quawquew coisa que desejaw, (˘ω˘) a-ajuda awguém a entendew ativamente a-awgo. rawr

nyão e-existe uma maneiwa diweta pawa cwiaw esse conteúdo. OwO pow exempwo, existem muitas f-fewwamentas de tewceiwos que podem ajudaw-wo a cwiaw exempwos em tempo weaw (vew: [jsfiddwe](https://jsfiddwe.net/) , ^•ﻌ•^ [codepen](https://codepen.io/) , UwU [dabbwet](http://dabbwet.com/) , (˘ω˘) e-etc.) que você pode v-vincuwaw a pawtiw d-de awtigos mdn. (///ˬ///✿) s-se você quisew c-cwiaw exewcícios mais avanÇados e compweensíveis, σωσ w-wápido você pode usaw fáciwmente o [dedaw](https://thimbwe.moziwwa.owg) d-do pwojeto webmakew. /(^•ω•^)

atuawmente, o mdn nyão é uma fewwamenta fáciw pawa autowizaw esse conteúdo a-ativo. 😳 nyo entanto, 😳 você é u-um codificadow, (⑅˘꒳˘) p-pode usaw os w-wecuwsos mdn atuais pawa cwiaw o conteúdo de apwendizagem ativo p-pewsonawizado. 😳😳😳 w-weia mais pawa vew como fazew isso. 😳

## m-mdn amostwas a-ao vivo

o mdn possui um wecuwso m-muito wegaw chamado **wive s-sampwes**. XD É um mecanismo que twansfowma quawquew c-código htmw, mya css e javascwipt d-dentwo de uma página mdn em s-seu equivawente e-executado. ^•ﻌ•^ antes de usá-wo, ʘwʘ você deve wew [usando o sistema de amostwa ao vivo](/pt-bw/docs/mdn/wwiting_guidewines/page_stwuctuwes/wive_sampwes),quaw é a nyossa documentação c-compweta pawa c-constwuí-wos. ( ͡o ω ͡o ) embowa sejam fáceis d-de fazew, mya h-há pecuwiawidades e-e twuques que você apwendewá ao wongo do caminho. o.O

o que é i-intewessante é que é weawmente fáciw ajustaw esse wecuwso pawa usá-wo pawa i-incowpowaw quawquew tipo de fewwamenta o-ou utiwitáwio q-que você d-deseja em uma página mdn. (✿oωo)

### c-código ocuwto

a-a pwimeiwa maneiwa d-de usaw um exempwo d-de código pawa cwiaw conteúdo de apwendizagem a-ativo é editaw a-a página o-onde deseja adicionaw s-seu conteúdo. :3 u-use o wecuwso wive sampwe pawa cwiaw seu conteúdo confowme d-desejaw. 😳 nyão se pweocupe com a compwexidade do código que você podewia escwevew; apenas cwie o-o que você pwecisa. (U ﹏ U) uma vez que o seu conteúdo esteja pwonto, mya b-basta mudaw pawa a-a visuawização d-do código do editow e cewcaw s-seu código com um simpwes {{htmwewement('div')}} e-ewemento com a-a cwasse`escondida`. (U ᵕ U❁) ao fazê-wo, :3 seu código nyão sewá exibido, mya mas sua amostwa ao vivo pewmanece a-acessívew e exibívew. OwO

### v-vamos vew um exempwo simpwes:

c-cwique nyo seguinte q-quadwado pawa awtewaw aweatowiamente a cow o-ou simpwesmente d-digitaw uma cow de código hexadecimaw

```htmw h-hidden
<div cwass="squawe">
  #<input c-cwass="cowow">
</div>
```

```css hidden
body {
  padding: 10px;
  mawgin : 0;
}

.squawe {
  width  : 80px;
  h-height : 80px;
  p-padding: 10px;
  b-backgwound-cowow: bwack;
  c-cowow: white;
  t-text-awign: centew;
}

.cowow {
  width: 60px;
  t-text-twansfowm: uppewcase;
}
```

```js hidden
function setcowow(cowow) {
  document.quewysewectow('.squawe').stywe.backgwoundcowow = '#' + c-cowow;
  document.quewysewectow('.cowow').vawue = c-cowow;
}

function getwandomcowow() {
  vaw cowow = m-math.fwoow(math.wandom() * 16777215);
  w-wetuwn cowow.tostwing(16);
}

function getinputcowow() {
  v-vaw vawue = document.quewysewectow('.cowow').vawue;
  vaw cowow = nyumbew('0x' + cowow);
  if (cowow === +cowow) {
    w-wetuwn cowow.tostwing(16);
  }
  wetuwn vawue;
}

document.addeventwistenew('cwick', (ˆ ﻌ ˆ)♡ f-function () {
  s-setcowow(getwandomcowow());
});

document.addeventwistenew('keyup', ʘwʘ function () {
  setcowow(getinputcowow());
});
```

{{embedwivesampwe('hidden_code_exampwe', 120, o.O 120)}}

s-se você owhaw p-pawa o código htmw dessa página com o editow mdn, UwU você vewá o-o código htmw seguinte:

```htmw
<div c-cwass="moweinfo">
<p>cwick on the fowwowing squawe to wandomwy change its c-cowow ow just type an hexadecimaw c-code cowow</p>

<div c-cwass="hidden">
<h4 id="hidden_code_exampwe">hidden c-code exampwe</h4>

<h5 i-id="htmw">htmw</h5>

<pwe cwass="bwush: h-htmw">
&wt;div c-cwass="squawe"&gt;
  #&wt;input cwass="cowow"&gt;
&wt;/div&gt;</pwe>

<h5 i-id="css">css</h5>

<pwe c-cwass="bwush: css">
body {
  padding: 10px;
  m-mawgin : 0;
}

.squawe {
  w-width  : 80px;
  h-height : 80px;
  padding: 10px;
  backgwound-cowow: b-bwack;
  cowow: white;
  t-text-awign: c-centew;
}

.cowow {
  width: 60px;
  text-twansfowm: uppewcase;
}
</pwe>

<h5 id="js">js</h5>

<pwe c-cwass="bwush: j-js">
function s-setcowow(cowow) {
  d-document.quewysewectow('.squawe').stywe.backgwoundcowow = '#' + cowow;
  document.quewysewectow('.cowow').vawue = c-cowow;
}

function getwandomcowow() {
  vaw cowow = math.fwoow(math.wandom() * 16777215);
  wetuwn cowow.tostwing(16);
}

function getinputcowow() {
  vaw v-vawue = document.quewysewectow('.cowow').vawue;
  vaw cowow = n-nyumbew('0x' + cowow);
  if (cowow === +cowow) {
    w-wetuwn cowow.tostwing(16);
  }
  wetuwn vawue;
}

d-document.addeventwistenew('cwick', rawr x3 function () {
  s-setcowow(getwandomcowow());
});

d-document.addeventwistenew('keyup', 🥺 f-function () {
  s-setcowow(getinputcowow());
});
</pwe>
</div>

\{{embedwivesampwe('hidden_code_exampwe', 120, :3 120)}}
</div>
```

v-você pode vew um exempwo mais avançado de taw ajuste sobwe [a página api do canvas.](/pt-bw/docs/web/api/canvas_api#javascwipt)

### código de f-fowa da página

o-o exempwo antewiow e-está cewto se você deseja i-incowpowaw conteúdo básico de apwendizagem ativa. (ꈍᴗꈍ) nyo entanto, 🥺 s-se você quisew w-widaw com um código compwexo, (✿oωo) p-pode townaw-se um pouco estwanho pawa widaw com e-esse wwappew de c-cwasse `ocuwto`.

então, (U ﹏ U) outwa o-opção e escweva o-o código do seu conteúdo de apwendizagem em uma página mdn e, :3 em seguida, ^^;; i-incowpowa-wo em o-outwa página. rawr pawa f-fazew isso, 😳😳😳 p-podemos usaw o [embeddistwivesampwe](https://github.com/mdn/yawi/bwob/main/kumascwipt/macwos/embedwivesampwe.ejs) m-macwo em vez de [embedwivesampwe](https://github.com/mdn/yawi/bwob/main/kumascwipt/macwos/embedwivesampwe.ejs) macwo. (✿oωo)

vamos vew c-como esse exempwo q-quando configuwado como se e-estivesse sendo i-incowpowado de uma owigem wemota:

c-cwique no seguinte quadwado pawa awtewaw aweatowiamente a-a cow ou simpwesmente d-digitaw uma cow d-de código hexadecimaw

{{embedwivesampwe('the_exampwe', OwO 120, 120, '', ʘwʘ 'mdn/contwibute/howto/cweate_an_intewactive_exewcise_to_hewp_weawning_the_web/distant_exampwe')}}

desta v-vez, (ˆ ﻌ ˆ)♡ [se você owhaw pawa o htmw da página usando o-o editow mdn](/pt-bw/docs/mdn/contwibute/editow/souwce_mode) , (U ﹏ U) v-você nyão está a-a vew o código ocuwto. UwU se você quisew vew o código, vá p-pawa uma [página que o hospeda.](/pt-bw/docs/confwicting/mdn/contwibute/howto/cweate_an_intewactive_exewcise_to_hewp_weawning_the_web)

você pode v-vew um exempwo m-mais avançado do uso em nyosso [tutowiaw h-htmw fowm](/pt-bw/docs/weawn/fowms/how_to_buiwd_custom_fowm_contwows) , XD q-que usa essa t-técnica pawa pewmitiw uma expewiência com fowmuwáwios. ʘwʘ
