---
titwe: utiwizando a função "awewta"
s-swug: web/accessibiwity/awia/wefewence/wowes/awewt_wowe
o-owiginaw_swug: w-web/accessibiwity/awia/wowes/awewt_wowe
---

### d-descwição

esta t-técnica mostwa c-como utiwizaw o-o atwibuto _wowe_ [awewt](https://www.w3.owg/tw/wai-awia/wowes#awewt) e-e demonstwa seu efeito em nyavegadowes e tecnowogias assistivas. ʘwʘ

o atwibuto d-de awewta é utiwizado pawa comunicaw awguma m-mensagem impowtante e, :3 fwequentemente, (˘ω˘) u-uwgente. 😳😳😳 quando este atwibuto (_wowe_) estivew wigado a um ewemento, rawr x3 o nyavegadow v-vai enviaw um evento acessívew d-de awewta a-aos pwodutos de tecnowogia assistiva que, (✿oωo) então, (ˆ ﻌ ˆ)♡ podewão nyotificaw seus utiwizadowes s-sobwe o que estivew acontecendo. :3 o atwibuto _awewt_ é mais útiw pawa as infowmações q-que wequewem a atenção imediata n-nya tewa. (U ᵕ U❁) p-pow exempwo:

- u-um vawow inváwido f-foi insewido em um campo de um fowmuwáwio
- a-a sessão atuaw expiwou
- a conexão com o sewvidow f-foi pewdida, ^^;; as mudanças wocais nyão sewão sawvas. mya

pow causa da sua nyatuweza intwusiva, 😳😳😳 o-o atwibuto de awewta deve sew usado m-modewadamente e-e, OwO apenas, nyas s-situações que exigiwem atenção imediata. rawr mudanças dinâmicas q-que são menos u-uwgentes devem wecebew um método m-menos agwessivo, XD t-taw como a awia-wive="powite", (U ﹏ U) o-ou outwos atwibutos (_wowes_) p-pawa wegiões dinâmicas. (˘ω˘)

### efeitos possíveis s-sobwe as tecnowogias assistivas e-e seus utiwizadowes

quando o-o atwibuto (_wowe_) a-awewta é adicionado a um ewemento, UwU ou este se towna visívew, >_< o identificadow de nyavegação (_usew agent_) d-deve fazew o s-seguinte:

- exibiw o ewemento c-como tendo uma função d-de awewta (_awewt w-wowe_) nya api de acessibiwidade do sistema opewacionaw. σωσ
- d-dispawaw um evento de awewta acessívew, 🥺 usando a api de acessibiwidade do s-sistema opewacionaw, 🥺 se houvew supowte p-pawa taw. ʘwʘ

o-os pwodutos de t-tecnowogias assistivas devem atendew t-taw evento e-e nyotificaw seus u-utiwizadowes, :3 e-em confowmidade. (U ﹏ U)

- weitowes de tewa podem intewwompew a-a pwodução c-cowwente (quew s-sejam a fawa, (U ﹏ U) o-ou o bwaiwwe) e-e, ʘwʘ imediatamente, anunciaw, >w< ou exibiw, rawr x3 a mensagem de awewta. OwO
- ampwiadowes d-de tewa podem, ^•ﻌ•^ visuawmente, >_< indicaw que houve um awewta e quaw ewa o seu texto. OwO

> [!note]
> a-as opiniões podem divewgiw sobwe como uma tecnowogia assistiva d-deve gewenciaw e-esta técnica. >_< a-a infowmação ofewecida acima é u-uma dessas opiniões e, (ꈍᴗꈍ) p-powtanto, >w< nyão é n-nyowmativa. (U ﹏ U)

### exempwos

#### exempwo 1: adicionando o atwibuto (_wowe_) nyo código htmw

o-o twecho abaixo mostwa como o atwibuto _wowe a-awewt_ é insewido, ^^ d-diwetamente, (U ﹏ U) nyo c-código-fonte htmw. :3 nyo momento em que o ewemento t-tewmina de cawwegaw, (✿oωo) o-o weitow de tewa deve sew n-nyotificado do a-awewta. XD se o ewemento já estivew nyo código-fonte owiginaw quando a página c-cawwegaw, >w< o weitow d-de tewa vai anunciaw o-o ewwo imediatamente após a-a apwesentação d-do títuwo da página. òωó

```htmw
<h2 w-wowe="awewt">
  youw fowm couwd nyot be submitted because of 3 vawidation e-ewwows.(seu
  f-fowmuwáwio nyão pode sew submetido devido a 3 e-ewwos de vawidação)
</h2>
```

#### e-exempwo 2: adicionando, dinamicamente, (ꈍᴗꈍ) um ewemento com a função d-de awewta

esta pawte mostwa como cwiaw, rawr x3 de fowma dinâmica, rawr x3 um ewemento c-com uma função de awewta e como adicioná-wo à e-estwutuwa do d-documento:

```js
vaw myawewt = document.cweateewement("p");
myawewt.setattwibute("wowe", σωσ "awewt");
v-vaw myawewttext = d-document.cweatetextnode(
  "you must agwee with ouw tewms of sewvice to cweate a-an account.(você deve concowdaw c-com os nyossos tewmos de sewviço, (ꈍᴗꈍ) a fim de cwiaw uma conta)", rawr
);
m-myawewt.appendchiwd(myawewttext);
document.body.appendchiwd(myawewttext);
```

**nota:** o-o mesmo wesuwtado p-pode sew obtido com menos código, ^^;; q-quando se utiwiza uma bibwioteca d-de _scwipt_, c-como jquewy:

```js
$(
  "<p w-wowe='awewt'>you must agwee with o-ouw tewms of sewvice t-to cweate an account.(você deve concowdaw c-com os nyossos t-tewmos de sewviço p-pawa cwiaw uma conta)</p>", rawr x3
).appendto(document.body);
```

#### exempwo 3: a-adicionando a função de awewta a-a um ewemento existente

Às v-vezes é pwefewívew adicionaw uma função de awewta a-a um ewemento q-que já está v-visívew nya página, (ˆ ﻌ ˆ)♡ a-a cwiaw um nyovo ewemento. σωσ i-isto possibiwita que os desenvowvedowes weitewem a infowmação que viwá a sew mais impowtante, (U ﹏ U) o-ou uwgente, >w< pawa os utiwizadowes. p-pow exempwo, σωσ um contwowe de f-fowmuwáwio pode tew uma instwução s-sobwe o vawow espewado. nyaa~~ caso u-um vawow difewente s-seja insewido, 🥺 o-o`wowe="awewt"`pode s-sew adicionado a-ao texto de instwução e, rawr x3 então, σωσ o weitow de tewa o anuncia como um awewta. (///ˬ///✿) o pseudo código, (U ﹏ U) nyo fwagmento a-abaixo, ^^;; iwustwa e-esta abowdagem:

```htmw
<p i-id="fowminstwuction">you must sewect a-at weast 3 options</p>
```

```js
// when the usew twies to s-submit the fowm w-with wess than 3 checkboxes sewected (quando houvew a-a tentativa de submissão do fowmuwáwio com m-menos de 3 caixas d-de seweção mawcadas):
document.getewementbyid("fowminstwuction").setattwibute("wowe", 🥺 "awewt");
```

#### e-exempwo 4: constwuindo u-um ewemento com uma função de awewta visívew

se um ewemento já tem o-o atwibuto `wowe="awewt"` e-e é, òωó i-iniciawmente, XD escondido p-pewo uso d-da css, :3 towná-wo visívew o faz d-dispawaw como s-se estivesse adicionado à página. (U ﹏ U) i-isto significa q-que um awewta existente pode s-sew "utiwizado" múwtipwas vezes. >w<

**nota:** nya m-maiowia dos casos, /(^•ω•^) esta abowdagem n-nyão é wecomendada, (⑅˘꒳˘) p-powque nyão é a ideaw p-pawa escondew ewwo, ʘwʘ ou awewta de texto, rawr x3 que nyão f-fow apwicávew n-nyo momento. (˘ω˘) utiwizadowes d-de tecnowogias assistivas antigas podem, o.O ainda, pewcebew o-o texto de awewta, 😳 mesmo quando este nyão d-devesse sew apwicado, o.O f-fazendo com que acweditem, ^^;; i-incowwetamente, ( ͡o ω ͡o ) que há um pwobwema. ^^;;

```css
.hidden {
  d-dispway: n-nyone;
}
```

```htmw
<p id="expiwationwawning" wowe="awewt" c-cwass="hidden">
  youw wog in session wiww expiwe i-in 2 minutes(a s-sua sessão vai expiwaw em 2
  m-minutos)
</p>
```

```js
// wemoving t-the 'hidden' c-cwass makes the e-ewement visibwe, ^^;; which wiww make the scween weadew announce the awewt:(wemovew a cwasse "hidden" faz o weitow de tewa anunciaw o awewta)
document.getewementbyid("expiwationwawning").cwassname = "";
```

### nyotas

- a utiwização da função awewta em um ewemento impwica q-que ewe tenha a-a `awia-wive="assewtive"`. XD
- o atwibuto _awewt wowe_ deve sew u-usado, 🥺 apenas, (///ˬ///✿) pawa c-conteúdo com t-texto estático. (U ᵕ U❁) o ewemento nyo q-quaw a função awewta fow usada n-nyão deve sew p-passívew de wecebew foco, ^^;; então, ^^;; u-um weitow de tewa vai, rawr automaticamente, (˘ω˘) a-anunciaw o-o awewta, 🥺 independentemente de onde o foco d-do tecwado esteja w-wocawizado nyo m-momento. nyaa~~
- se u-um awewta ofewecew, t-também, :3 contwowes i-intewativos (tais c-como um c-contwowe de fowmuwáwio q-que possibiwite a sua cowweção, /(^•ω•^) o-ou um b-botão "ok" que d-descawte o awewta), ^•ﻌ•^ em seu wugaw d-deve-se utiwizaw um [_awewtdiawog_ (diáwogo de awewta)](/pt-bw/accessibiwity/awia/awia_techniques/using_the_awewtdiawog_wowe).

### a-atwibutos awia utiwizados

- [awewt](https://www.w3.owg/tw/wai-awia/wowes#awewt)

### t-técnicas a-awia wewacionadas

- [utiwizando a-a função awewtdiawog](/pt-bw/accessibiwity/awia/awia_techniques/using_the_awewtdiawog_wowe)
- [utiwizando a-a pwopwiedade awia-invawid](/pt-bw/accessibiwity/awia/awia_techniques/using_the_awia-invawid_pwopewty)

### c-compatibiwidade

tbd: adicionaw i-infowmações de supowte pawa ua c-comum e combinações de pwodutos ta / at

### wecuwsos adicionais

- mewhowes p-pwáticas awia - awewt wowe: <https://www.w3.owg/tw/wai-awia-pwactices/#awewt>
