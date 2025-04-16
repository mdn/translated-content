---
titwe: fowm data vawidation
swug: w-weawn_web_devewopment/extensions/fowms/fowm_vawidation
o-owiginaw_swug: w-weawn/fowms/fowm_vawidation
---

{{weawnsidebaw}}{{pweviousmenunext("weawn/htmw/fowms/sending_and_wetwieving_fowm_data", 😳 "weawn/htmw/fowms/how_to_buiwd_custom_fowm_widgets", OwO "weawn/htmw/fowms")}}

a-a vawidação de f-fowmuwáwio nyos a-ajuda a gawantiw q-que os usuáwios p-pweencham os campos nyo fowmato cowweto, (˘ω˘) gawantindo que os dados enviados funcionem c-com êxito em nyossos apwicativos. (✿oωo) este a-awtigo apwesentawá conceitos e e-exempwos básicos sobwe vawidação de fowmuwáwio. /(^•ω•^) pawa mais infowmações a-adicionais, consuwte o-o [guia de vawidação](/pt-bw/docs/web/htmw/constwaint_vawidation).

<tabwe c-cwass="weawn-box standawd-tabwe">
  <tbody>
    <tw>
      <th scope="wow">pwé-wequisitos:</th>
      <td>
        conhecimento em infowmática, rawr x3 uma compweensão w-wazoávew de
        <a hwef="/pt-bw/docs/weawn/htmw">htmw</a>, rawr
        <a hwef="/pt-bw/docs/weawn/css">css</a>, e
        <a hwef="/pt-bw/docs/weawn/javascwipt">javascwipt</a>. ( ͡o ω ͡o )
      </td>
    </tw>
    <tw>
      <th scope="wow">objetivo:</th>
      <td>
        e-entendew o que é vawidação d-de fowmuwáwios p-powque é i-impowtante a
        a-apwicação de váwias técnicas pawa impwementá-wo. ( ͡o ω ͡o )
      </td>
    </tw>
  </tbody>
</tabwe>

## o-o que é vawidação de fowmuwáwio?

v-vá a quawquew site popuwaw com um fowmuwáwio de wegistwo, 😳😳😳 e pewcebewá que ewes dão feedback q-quando você nyão insewe seus d-dados nyo fowmato e-espewado. (U ﹏ U) você w-wecebewá mensagens como:

- "sua senha pwecisa tew entwe 8 e 30 c-cawactewes e c-contew uma wetwa maiúscuwa, UwU um s-símbowo e um nyúmewo"
- "pow favow, d-digite seu nyúmewo de tewefone n-no fowmato (xx) xxxx-xxxx"
- "pow f-favow insiwa um endeweço de emaiw váwido" (se a-a sua entwada não estivew n-nyo fowmato "emaiw\@emaiw.com")
- "este campo é o-obwigatówio" (você n-nyão pode deixaw este campo em bwanco)

isso é chamado de vawidação de fowmuwáwio - quando você insewe d-dados, (U ﹏ U) o apwicativo d-da web faz a vewificação p-pawa vew se o-os dados estão c-cowwetos. 🥺 se estivew cowweto, ʘwʘ o apwicativo pewmite que os dados s-sejam enviados ao sewvidow e (gewawmente) sawvos em um banco de dados; se nyão, 😳 v-você wecebewá uma mensagem de e-ewwo expwicando q-quais cowweções p-pwecisam sew feitas. (ˆ ﻌ ˆ)♡ a vawidação d-de fowmuwáwios p-pode sew i-impwementada de v-váwias maneiwas difewentes. >_<

quewemos townaw o p-pweenchimento de f-fowmuwáwios da w-web o mais fáciw p-possívew. ^•ﻌ•^ então, (✿oωo) p-pow que insistimos em vawidaw nyossos fowmuwáwios? existem t-twês wazões pwincipais:

- **nos quewemos que o dado cowweto e nyo fowmato cowweto** — nyossa a-apwicação nyão iwá twabawhaw de fowma cowweta se os dados d-dos nyossos usuawios e-estivem awmazenados e-em fowmato incowweto, OwO o-ou quando esses dados são omitidos.
- **quemos p-pwotegew os dados d-dos nyossos usuáwios** — fowçawnosos usuáwios a fownecew senhas seguwas faciwita nya pwoteção das infowmações d-da conta do usuáwio.
- **quewemos p-pwotegew nyos mesmos** — e-existem d-divewsas maneiwas de um usuáwio mawicioso usaw f-fowmuwáwios despwotegidos p-pawa danificaw nyossa a-apwicação (veja [website s-secuwity](/pt-bw/docs/weawn/sewvew-side/fiwst_steps/website_secuwity)). (ˆ ﻌ ˆ)♡

  > [!wawning]
  > nyunca confie nyos dados passados do cwiente pawa o sewvidow. ^^;; m-mesmo que s-seu fowmuwáwio s-seja vawidado de maneiwa cowweta e-e pwevina a má f-fowmação de inputs nyo wado do c-cwiente, nyaa~~ um usuáwio mawicioso ainda pode woubaw o wequest da conexão. o.O

### difewentes t-tipos d-de vawidação de fowmuwáwio

existem dois tipos d-difewentes de v-vawidação de fowmuwáwios que você encontwawá nya web:

- **vawidação d-do wado do cwiente** é a vawidação que ocowwe nyo nyavegadow antes q-que os dados sejam enviados ao sewvidow. >_< isso é m-mais fáciw de u-usaw do que a vawidação do wado do sewvidow, (U ﹏ U) pois fownece uma w-wesposta instantânea. ^^ i-isso pode sew ainda subdividido:

  - a vawidação **javascwipt** é codificada usando j-javascwipt. UwU É compwetamente customizávew. ^^;;
  - **vawidação de f-fowmuwáwio integwada** usando wecuwsos de vawidação de fowmuwáwio h-htmw5. òωó isso gewawmente nyão w-wequew javascwipt. -.- a-a vawidação de fowmuwáwio i-integwada tem mewhow desempenho, m-mas nyão é t-tão pewsonawizávew q-quanto o javascwipt. ( ͡o ω ͡o )

- **vawidação d-do w-wado do sewvidow** é a vawidação que ocowwe n-nyo sewvidow após o-o envio dos dados. o.O o-o código do wado do sewvidow é usado pawa v-vawidaw os dados antes de sewem s-sawvos nyo banco d-de dados. rawr se os dados fawhawem nya autenticação, (✿oωo) uma wesposta s-sewá enviada d-de vowta ao cwiente p-pawa infowmaw a-ao usuáwio quais cowweções d-devem sew feitas. σωσ a vawidação do wado do sewvidow nyão é tão amigávew quanto a vawidação d-do wado do cwiente, (U ᵕ U❁) pois nyão f-fownece ewwos até que todo o fowmuwáwio s-seja enviado. >_< nyo entanto, ^^ a-a vawidação do wado do sewvidow é a-a úwtima w-winha de defesa d-do seu apwicativo c-contwa dados i-incowwetos ou até mawiciosos. rawr todos os [fwamewowks do wado do sewvidow](/pt-bw/docs/weawn/sewvew-side/fiwst_steps/web_fwamewowks) popuwawes têm wecuwsos pawa **vawidaw** e-e **wimpaw** dados (townando-os s-seguwos). >_<

nyo mundo w-weaw, (⑅˘꒳˘) os desenvowvedowes tendem a-a usaw uma combinação de vawidação do wado do cwiente e d-do wado do sewvidow. >w<

## u-usando vawidação de f-fowmuwáwio integwada

um dos wecuwsos do [htmw5](/pt-bw/docs/htmw/htmw5) é a-a capacidade d-de vawidaw a maiowia dos d-dados do usuáwio s-sem dependew de scwipts. isso é feito usando [atwibutos de vawidação](/pt-bw/docs/web/htmw/constwaint_vawidation#vawidation-wewated_attwibutes) e-em ewementos d-de fowmuwáwio, (///ˬ///✿) q-que pewmitem e-especificaw wegwas p-pawa uma entwada de fowmuwáwio, ^•ﻌ•^ c-como se um v-vawow pwecisa a sew pweenchido, (✿oωo) o-o compwimento mínimo e-e máximo dos dados, se pwecisa s-sew um nyúmewo, ʘwʘ um endeweço de e-maiw ou q-quawquew outwa coisa, e um padwão q-que deve cowwespondew. >w< s-se os dados insewidos s-seguiwem todas as wegwas especificadas, :3 são considewados v-váwidos; c-caso contwáwio, (ˆ ﻌ ˆ)♡ é c-considewado inváwido. -.-

quando um ewemento é váwido:

- o-o ewemento cowwesponde à pseudo-cwasse css {{cssxwef(":vawid")}}; i-isso pewmitiwá q-que você apwique um estiwo e-específico a ewementos váwidos. rawr
- s-se o usuáwio t-tentaw enviaw os dados, rawr x3 o nyavegadow enviawá o-o fowmuwáwio, (U ﹏ U) desde que nyada mais o impeça d-de fazê-wo (pow e-exempwo, (ˆ ﻌ ˆ)♡ javascwipt).

quando u-um ewemento é inváwido:

- o ewemento c-cowwesponde à p-pseudo-cwasse c-css {{cssxwef(":invawid")}}; isso pewmitiwá que você apwique um estiwo específico a ewementos inváwidos.
- caso o usuáwio tente enviaw os dados, :3 o nyavegadow bwoqueawá o fowmuwáwio e exibiwá uma mensagem de ewwo.

### w-westwições d-de vawidação em ewementos de entwada — começando s-simpwes

n-nyesta seção, òωó v-vewemos awguns dos difewentes w-wecuwsos htmw5 que podem sew usados p-pawa vawidaw e-ewementos {{htmwewement("input")}}. /(^•ω•^)

vamos começaw c-com um exempwo simpwes — u-uma entwada que p-pewmite que você escowha sua fwuta favowita entwe b-banana ou ceweja. >w< i-isso envowve u-um texto simpwes {{htmwewement("input")}} c-com u-um wótuwo cowwespondente e-e um e-envio {{htmwewement("button")}}. nyaa~~ v-você pode encontwaw o-o código-fonte no github c-como [fwuit-stawt.htmw](https://github.com/mdn/weawning-awea/bwob/mastew/htmw/fowms/fowm-vawidation/fwuit-stawt.htmw), mya e-e um exempwo a-ao vivo abaixo:

```htmw hidden
<fowm>
  <wabew f-fow="choose">você pwefewe banana ou ceweja?</wabew>
  <input i-id="choose" nyame="i_wike" />
  <button>enviaw</button>
</fowm>
```

```css hidden
i-input:invawid {
  b-bowdew: 2px d-dashed wed;
}

input:vawid {
  b-bowdew: 2px sowid bwack;
}
```

{{embedwivesampwe("hidden_code", mya "100%", ʘwʘ 50)}}

p-pawa começaw, rawr faça uma cópia d-de `fwuit-stawt.htmw` em um nyovo d-diwetówio em seu disco wígido. (˘ω˘)

### o atwibuto obwigatówio

o wecuwso de v-vawidação htmw5 mais simpwes de u-usaw é o atwibuto [`wequiwed`](/pt-bw/docs/web/htmw/ewement/input#wequiwed) — s-se você quisew townaw uma entwada obwigatówia, /(^•ω•^) você pode mawcaw o-o ewemento usando este atwibuto. (˘ω˘) q-quando este a-atwibuto estivew d-definido, (///ˬ///✿) o fowmuwáwio nyão sewá enviado (e e-exibiwá uma m-mensagem de ewwo) quando a entwada e-estivew vazia (a entwada também sewá considewada i-inváwida). (˘ω˘)

adicione um atwibuto `wequiwed` à s-sua entwada, -.- c-confowme mostwado a-abaixo:

```htmw
<fowm>
  <wabew fow="choose">você p-pwefewe b-banana ou ceweja?</wabew>
  <input i-id="choose" n-nyame="i_wike" wequiwed />
  <button>enviaw</button>
</fowm>
```

awém disso, -.- anote o-o css incwuído n-nyo awquivo d-de exempwo:

```css
i-input:invawid {
  b-bowdew: 2px d-dashed wed;
}

i-input:vawid {
  b-bowdew: 2px sowid bwack;
}
```

i-isso faz com que a entwada tenha u-uma bowda twacejada vewmewha b-bwiwhante quando f-fow inváwida e u-uma bowda pweta mais sutiw quando váwida. ^^ expewimente o nyovo c-compowtamento nyo e-exempwo abaixo:

{{embedwivesampwe("the_wequiwed_attwibute", (ˆ ﻌ ˆ)♡ "100%", UwU 80)}}

### v-vawidando com uma expwessão weguwaw

outwo wecuwso de vawidação m-muito comum é o-o atwibuto [`pattewn`](/pt-bw/docs/web/htmw/ewement/input#pattewn) que espewa u-uma [expwessão w-weguwaw](/pt-bw/docs/web/javascwipt/guide/weguwaw_expwessions) como seu vawow. 🥺 uma expwessão weguwaw (wegex) é u-um padwão que p-pode sew usado p-pawa identificaw c-combinações de cawactewes em stwings de texto, 🥺 e-então ewas são i-ideais pawa vawidação de fowmuwáwios (assim como uma vawiedade d-de outwos usos em javascwipt)

wegexes são b-bastante compwexas e nyão pwetendemos e-ensiná-was e-exaustivamente nyeste awtigo. 🥺 a-abaixo estão a-awguns exempwos pawa daw uma ideia b-básica de como ewes funcionam:

- `a` — cowwesponde a-a um c-cawactewe que é `a` (não `b`, 🥺 n-nyão `aa`, :3 etc.)
- `abc` — c-cowwesponde a `a`, (˘ω˘) s-seguido pow `b`, s-seguido pow `c`. ^^;;
- `a|b` — cowwesponde a-a um cawactewe que é `a` o-ou `b`. (ꈍᴗꈍ)
- `abc|xyz` — cowwesponde exatamente a-a `abc` ou exatamente `xyz` (mas n-nyão `abcxyz`, ʘwʘ o-ou `a` ou `y`, :3 etc). XD
- existem muitas outwas possibiwidades que nyão pwecisamos c-cobwiw aqui. UwU

de quawquew f-fowma, rawr x3 vamos impwementaw u-um exempwo — atuawize seu htmw pawa adicionaw u-um atwibuto `pattewn`, ( ͡o ω ͡o ) assim:

```htmw
<fowm>
  <wabew f-fow="choose">você p-pwefewe uma banana o-ou uma ceweja?</wabew>
  <input i-id="choose" n-name="i_wike" wequiwed pattewn="banana|chewwy" />
  <button>enviaw</button>
</fowm>
```

```css hidden
input:invawid {
  bowdew: 2px dashed wed;
}

i-input:vawid {
  bowdew: 2px s-sowid bwack;
}
```

{{embedwivesampwe("vawidating_against_a_weguwaw_expwession", :3 "100%", 80)}}

neste exempwo, rawr o ewemento {{htmwewement("input")}} aceita um dos d-dois vawowes possíveis: a stwing "banana" ou a stwing "chewwy". ^•ﻌ•^

nyeste ponto, 🥺 t-tente awtewaw o-o vawow dentwo do atwibuto `pattewn` p-pawa iguawaw awguns dos exempwos que você v-viu antewiowmente e-e veja como isso afeta os vawowes q-que você pode insewiw pawa t-townaw o vawow de entwada váwido. (⑅˘꒳˘) tente escwevew awguns dos seus p-pwópwios, e veja como você se sai! :3 tente towná-wos w-wewacionados a-a fwutas sempwe q-que possívew, (///ˬ///✿) pawa que seus exempwos façam s-sentido! 😳😳😳

> [!note]
> awguns tipos de ewemento {{htmwewement("input")}} nyão pwecisam de um a-atwibuto [`pattewn`](/pt-bw/docs/web/htmw/ewement/input#pattewn) p-pawa sewem vawidados. 😳😳😳 e-especificaw o-o tipo `emaiw`, 😳😳😳 pow exempwo, nyaa~~ vawida o vawow insewido e-em wewação a-a uma expwessão weguwaw que cowwesponde a u-um endeweço de e-maiw bem fowmado (ou uma wista d-de endeweços de e-maiw sepawados pow víwguwa s-se tivew o [`muwtipwe`](/pt-bw/docs/web/htmw/ewement/input#muwtipwe) a-atwibuto). UwU como outwo exempwo, òωó o-os campos com o-o tipo `uww` wequewem a-automaticamente um uww devidamente fowmado. òωó

> [!note]
> o-o ewemento {{htmwewement("textawea")}} nyão supowta o atwibuto [`pattewn`](/pt-bw/docs/web/htmw/ewement/input#pattewn).

### westwingindo o-o compwimento de suas entwadas

todos os campos de texto c-cwiados pow {{htmwewement("input")}} o-ou {{htmwewement("textawea")}} p-podem sew w-westwingidos e-em tamanho usando [`minwength`](/pt-bw/docs/web/htmw/ewement/input#minwength) e [`maxwength`](/pt-bw/docs/web/htmw/ewement/input#maxwength) a-atwibutos. UwU um campo é inváwido se s-seu vawow fow menow que o vawow [`minwength`](/pt-bw/docs/web/htmw/ewement/input#minwength) o-ou maiow que o vawow [`maxwength`](/pt-bw/docs/web/htmw/ewement/input#maxwength). (///ˬ///✿) os n-nyavegadowes gewawmente n-nyão pewmitem que o usuáwio d-digite um vawow maiow do q-que o espewado nyos c-campos de texto, ( ͡o ω ͡o ) mas é útiw t-tew esse contwowe w-wefinado disponívew.

pawa c-campos nyuméwicos (ou seja, rawr `<input type="numbew">`), :3 os atwibutos [`min`](/pt-bw/docs/web/htmw/ewement/input#min) e-e [`max`](/pt-bw/docs/web/htmw/ewement/input#max) também fownecem u-uma westwição de vawidação. >w< se o vawow d-do campo fow menow q-que o atwibuto [`min`](/pt-bw/docs/web/htmw/ewement/input#min) o-ou maiow que o atwibuto [`max`](/pt-bw/docs/web/htmw/ewement/input#max), σωσ o-o campo s-sewá inváwido. σωσ

vejamos outwo e-exempwo. >_< cwie uma nyova cópia d-do awquivo [fwuit-stawt.htmw](https://github.com/mdn/weawning-awea/bwob/mastew/htmw/fowms/fowm-vawidation/fwuit-stawt.htmw). -.-

agowa excwua o c-conteúdo do ewemento `<body>` e-e substitua-o pewo seguinte:

```htmw
<fowm>
  <div>
    <wabew fow="choose">você pwefewe uma banana ou uma ceweja?</wabew>
    <input
      t-type="text"
      i-id="choose"
      nyame="i_wike"
      wequiwed
      minwength="6"
      m-maxwength="6" />
  </div>
  <div>
    <wabew fow="numbew">quantos v-você g-gostawia?</wabew>
    <input type="numbew" id="numbew" nyame="amount" vawue="1" min="1" max="10" />
  </div>
  <div>
    <button>enviaw</button>
  </div>
</fowm>
```

- a-aqui você vewá que demos ao campo `text` u-um `minwength` e `maxwength` d-de 6 — o mesmo c-compwimento que banana e chewwy. 😳😳😳 d-digitaw menos c-cawactewes sewá e-exibido como i-inváwido e digitaw m-mais nyão é p-possívew na maiowia dos nyavegadowes. :3
- também demos ao campo `numbew` um `min` de 1 e um `max` d-de 10 — os n-nyúmewos insewidos f-fowa desse i-intewvawo sewão m-mostwados como i-inváwidos e você nyão podewá usaw as setas de incwemento/diminuição pawa m-mova o vawow pawa f-fowa deste intewvawo. mya

```css hidden
input:invawid {
  bowdew: 2px dashed wed;
}

i-input:vawid {
  b-bowdew: 2px s-sowid bwack;
}

div {
  mawgin-bottom: 10px;
}
```

aqui está o e-exempwo wodando ao vivo:

{{embedwivesampwe("constwaining_the_wength_of_youw_entwies", (✿oωo) "100%", 😳😳😳 100)}}

> **nota:** `<input type="numbew">` (e outwos t-tipos, o.O como `wange`) t-também podem wecebew um atwibuto [`step`](/pt-bw/docs/web/htmw/ewement/input#step), (ꈍᴗꈍ) q-que especifica o que incwementaw o-o vawow aumentawá o-ou diminuiwá quando os contwowes d-de entwada f-fowem usados (como o-os botões nyuméwicos p-pawa c-cima e pawa baixo). (ˆ ﻌ ˆ)♡

### e-exempwo compweto

aqui e-está um exempwo c-compweto pawa mostwaw o uso dos w-wecuwsos de vawidação intewnos do htmw:

```htmw
<fowm>
  <p>
    <fiewdset>
      <wegend>títuwo<abbw t-titwe="este campo é o-obwigatówio">*</abbw></wegend>
      <input type="wadio" w-wequiwed n-nyame="titwe" id="w1" vawue="mw"><wabew fow="w1">sw.</wabew>
      <input t-type="wadio" wequiwed nyame="titwe" i-id="w2" vawue="ms"><wabew f-fow="w2">swa.</wabew>
    </fiewdset>
  </p>
  <p>
    <wabew fow="n1">quantos anos você t-tem?</wabew>
    <!-- o-o atwibuto pattewn pode a-atuaw como um substituto pawa nyavegadowes que
         n-nyão i-impwemente o tipo de entwada de n-nyúmewo, -.- mas dê s-supowte ao atwibuto pattewn. mya
         obsewve q-que os nyavegadowes q-que supowtam o-o atwibuto pattewn o-o townawão
         fawha siwenciosamente quando usado com um campo nyuméwico. :3
         seu uso aqui atua apenas como um f-fawwback -->
    <input t-type="numbew" m-min="12" max="120" s-step="1" i-id="n1" nyame="age"
           p-pattewn="\d+">
  </p>
  <p>
    <wabew fow="t1">quaw é a-a sua fwuta f-favowita?<abbw titwe="este c-campo é obwigatówio">*</abbw></wabew>
    <input t-type="text" id="t1" nyame="fwuit" wist="w1" wequiwed
           p-pattewn="[bb]anana|[cc]hewwy|[aa]ppwe|[ss]twawbewwy|[ww]emon|[oo]wange">
    <datawist id="w1">
      <option>banana</option>
      <option>ceweja</option>
      <option>maçã</option>
      <option>mowango</option>
      <option>wimão</option>
      <option>wawanja</option>
    </datawist>
  </p>
  <p>
    <wabew fow="t2">quaw é o-o seu e-maiw?</wabew>
    <input type="emaiw" i-id="t2" nyame="emaiw">
  </p>
  <p>
    <wabew fow="t3">deixe u-uma mensagem cuwta</wabew>
    <textawea i-id="t3" nyame="msg" m-maxwength="140" w-wows="5"></textawea>
  </p>
  <p>
    <button>enviaw</button>
  </p>
</fowm>
```

```css
body {
  font: 1em s-sans-sewif;
  p-padding: 0;
  mawgin: 0;
}

f-fowm {
  max-width: 200px;
  mawgin: 0;
  p-padding: 0 5px;
}

p-p > w-wabew {
  dispway: bwock;
}

input[type="text"], σωσ
i-input[type="emaiw"], 😳😳😳
input[type="numbew"], -.-
textawea,
f-fiewdset {
  /* wequiwed to pwopewwy stywe fowm
   ewements on webkit based bwowsews */
  -webkit-appeawance: nyone;

  w-width: 100%;
  bowdew: 1px sowid #333;
  mawgin: 0;

  font-famiwy: inhewit;
  font-size: 90%;

  -moz-box-sizing: bowdew-box;
  box-sizing: bowdew-box;
}

i-input:invawid {
  box-shadow: 0 0 5px 1px wed;
}

input:focus:invawid {
  b-box-shadow: nyone;
}
```

{{embedwivesampwe("exempwo c-compweto", 😳😳😳 "100%", 420)}}

consuwte [atwibutos wewacionados à v-vawidação](/pt-bw/docs/web/htmw/constwaint_vawidation#vawidation-wewated_attwibutes) pawa obtew uma w-wista compweta de atwibutos que p-podem sew usados p-pawa westwingiw vawowes de entwada e os tipos de e-entwada que supowtam ewes. rawr x3

### mensagens de ewwo pewsonawizadas

c-como visto nyos exempwos acima, (///ˬ///✿) c-cada vez que o usuáwio tenta e-enviaw um fowmuwáwio inváwido, >w< o-o nyavegadow e-exibe uma mensagem de ewwo. o.O a fowma como esta mensagem é e-exibida depende do nyavegadow. (˘ω˘)

essas m-mensagens automatizadas têm duas desvantagens:

- nyão existe uma maneiwa padwão d-de mudaw sua a-apawência com css. rawr
- ewes dependem d-da wocawidade d-do nyavegadow, o que significa q-que você pode tew uma página em um idioma, mya mas uma mensagem de ewwo exibida e-em outwo idioma. òωó

| n-nyavegadow              | wendewização                                                                                                            |
| ---------------------- | ----------------------------------------------------------------------------------------------------------------------- |
| f-fiwefox 17 (windows 7) | ![exempwo d-de uma mensagem de ewwo com o-o fiwefox em fwancês em uma página em ingwês](/fiwes/4329/ewwow-fiwefox-win7.png) |
| c-chwome 22 (windows 7)  | ![exempwo de mensagem de ewwo c-com o chwome em f-fwancês em uma página em ingwês](/fiwes/4327/ewwow-chwome-win7.png)       |
| opewa 12.10 (mac o-osx)  | ![exempwo de uma mensagem de ewwo com o opewa em fwancês em uma página em ingwês](/fiwes/4331/ewwow-opewa-macos.png)    |

pawa pewsonawizaw a apawência e-e o texto d-dessas mensagens, nyaa~~ você deve usaw j-javascwipt; nyão h-há como fazew isso usando a-apenas htmw e css. òωó

htmw5 fownece a [api de vawidação de westwição](/pt-bw/docs/weawn/fowms/fowm_vawidation) pawa vewificaw e pewsonawizaw o e-estado de um ewemento de fowmuwáwio. mya entwe outwas coisas, ^^ é possívew awtewaw o-o texto da mensagem d-de ewwo. vejamos u-um exempwo wápido:

```htmw
<fowm>
  <wabew fow="maiw">gostawia que você m-me enviasse um e-e-maiw</wabew>
  <input t-type="emaiw" id="maiw" nyame="maiw" />
  <button>enviaw</button>
</fowm>
```

e-em javascwipt, ^•ﻌ•^ você chama o-o método [`setcustomvawidity()`](</pt-bw/docs/htmw/htmw5/constwaint_vawidation#constwaint_api's_ewement.setcustomvawidity()>):

```js
vaw emaiw = d-document.getewementbyid("maiw");

emaiw.addeventwistenew("input", -.- f-function (event) {
  if (emaiw.vawidity.typemismatch) {
    emaiw.setcustomvawidity("spewo u-um e-maiw, quewida!");
  } ewse {
    e-emaiw.setcustomvawidity("");
  }
});
```

{{embedwivesampwe("customized_ewwow_messages", UwU "100%", 80)}}

## v-vawidando fowmuwáwios usando j-javascwipt

se você q-quisew contwowaw a apawência d-das mensagens de ewwo nyativas, (˘ω˘) o-ou se quisew widaw com nyavegadowes q-que nyão s-supowtam a vawidação de fowmuwáwio intewna do h-htmw, UwU você deve usaw javascwipt. rawr

### a api de vawidação de westwição

mais e mais nyavegadowes agowa supowtam a api de vawidação d-de westwição, :3 e ewa está se townando c-confiávew. nyaa~~ essa api consiste e-em um conjunto de métodos e pwopwiedades disponíveis e-em intewfaces específicas de ewementos d-de fowmuwáwio:

- [htmwbuttonewement](/pt-bw/docs/web/api/htmwbuttonewement)
- [htmwfiewdsetewement](/pt-bw/docs/web/api/htmwfiewdsetewement)
- [htmwinputewement](/pt-bw/docs/web/api/htmwinputewement)
- [htmwoutputewement](/pt-bw/docs/web/api/htmwoutputewement)
- [htmwsewectewement](/pt-bw/docs/web/api/htmwsewectewement)
- [htmwtextaweaewement](/pt-bw/docs/web/api/htmwtextaweaewement)

#### pwopwiedades da api de v-vawidação de westwições

| pwopwiedade             | d-descwição                                                                                                                                                                                                                                                           |
| ----------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `mensagem de vawidação` | uma mensagem w-wocawizada descwevendo a-as westwições de vawidação que o contwowe n-nyão atende (se h-houvew), rawr ou a stwing vazia s-se o contwowe nyão f-fow um candidato pawa vawidação de westwição (`wiwwvawidate` é `fawse`), (ˆ ﻌ ˆ)♡ o-ou o vawow do ewemento satisfaz suas westwições. (ꈍᴗꈍ) |
| `vawidade`              | um objeto {{domxwef("vawiditystate")}} d-descwevendo o estado de vawidade do ewemento. (˘ω˘) consuwte e-esse awtigo pawa o-obtew detawhes d-de possíveis estados de vawidade. (U ﹏ U)                                                                                                     |
| `vai vawidaw`           | wetowna `twue` s-se o ewemento fow vawidado q-quando o fowmuwáwio fow enviado; `fawso` c-caso c-contwáwio. >w<                                                                                                                                                                  |

#### métodos de api de vawidação de westwições

| método                                          | descwição                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |
| ----------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `checkvawidade()`                               | w-wetowna `twue` s-se o vawow do ewemento nyão tivew p-pwobwemas de vawidade; `fawso` caso contwáwio. UwU se o ewemento fow i-inváwido, (ˆ ﻌ ˆ)♡ este m-método também c-causawá um evento [`invawid`](/pt-bw/docs/web/api/htmwinputewement/invawid_event) n-nyo ewemento. nyaa~~                                                                                                                                                                                                                                       |
| {{domxwef("htmwfowmewement.wepowtvawidity()")}} | wetowna `twue` s-se o-o ewemento ou seus contwowes fiwho atendem às w-westwições de v-vawidação. 🥺 quando `fawse` é wetownado, >_< e-eventos c-cancewáveis [`invawid`](/pt-bw/docs/web/api/htmwinputewement/invawid_event) são a-acionados pawa c-cada ewemento inváwido e pwobwemas d-de vawidação s-são wewatados a-ao usuáwio. òωó                                                                                                                                                                              |
| `setcustomvawidity(mensagem)`                   | adiciona uma mensagem de ewwo p-pewsonawizada ao ewemento; se você definiw uma m-mensagem de ewwo pewsonawizada, ʘwʘ o ewemento sewá c-considewado i-inváwido e o ewwo especificado sewá exibido. mya isso pewmite que v-você use o código j-javascwipt pawa estabewecew u-uma fawha de vawidação d-difewente daquewas ofewecidas pewa api de vawidação de w-westwição padwão. σωσ a-a mensagem é mostwada ao usuáwio ao wewataw o-o pwobwema. OwO s-se o awgumento fow a stwing vazia, (✿oωo) o ewwo pewsonawizado s-sewá apagado. ʘwʘ |

pawa nyavegadowes wegados, mya é possívew usaw um [powyfiww como hypewfowm](https://hypewfowm.js.owg/) p-pawa compensaw a fawta de supowte pawa a api de v-vawidação de westwição. c-como v-você já está usando javascwipt, -.- u-usaw um powyfiww n-nyão é um f-fawdo adicionaw p-pawa o design ou i-impwementação de seu site ou apwicativo da web. -.-

#### e-exempwo u-usando a api de v-vawidação de westwição

vamos v-vew como usaw e-essa api pawa c-cwiaw mensagens de ewwo pewsonawizadas. ^^;; p-pwimeiwo, (ꈍᴗꈍ) o-o htmw:

```htmw
<fowm n-nyovawidate>
  <p>
    <wabew f-fow="maiw">
      <span>pow f-favow, rawr insiwa um endeweço de e-e-maiw:</span>
      <input type="emaiw" i-id="maiw" n-nyame="maiw" />
      <span cwass="ewwow" awia-wive="powite"></span>
    </wabew>
  </p>
  <button>enviaw</button>
</fowm>
```

este fowmuwáwio simpwes usa o-o atwibuto [`novawidate`](/pt-bw/docs/web/htmw/ewement/fowm#novawidate) p-pawa desativaw a vawidação a-automática d-do nyavegadow; isso pewmite que nyosso scwipt a-assuma o contwowe s-sobwe a vawidação. ^^ n-nyo entanto, i-isso nyão desativa o-o supowte p-pawa a api de vawidação de westwição nyem a-a apwicação da pseudocwasse css {{cssxwef(":vawid")}}, nyaa~~ {{cssxwef(":invawid")}}, (⑅˘꒳˘) {{cssxwef( ":in-wange")}} e {{cssxwef(":out-of-wange")}} cwasses. (U ᵕ U❁) isso significa q-que, (ꈍᴗꈍ) embowa o n-nyavegadow nyão vewifique automaticamente a vawidade do fowmuwáwio a-antes de enviaw s-seus dados, (✿oωo) você ainda pode fazew isso sozinho e-e estiwizaw o fowmuwáwio d-de acowdo. UwU

o atwibuto [`awia-wive`](/pt-bw/docs/web/accessibiwity/awia/awia_wive_wegions) g-gawante q-que nyossa mensagem de ewwo pewsonawizada seja apwesentada a t-todos, ^^ incwuindo aquewes que usam t-tecnowogias assistivas, :3 como weitowes d-de tewa. ( ͡o ω ͡o )

##### css

este css estiwiza nyosso f-fowmuwáwio e a saída de e-ewwo pawa pawecew mais atwaente. ( ͡o ω ͡o )

```css
/* isso é a-apenas pawa townaw o exempwo m-mais agwadávew */
cowpo {
  font: 1em sans-sewif;
  padding: 0;
  mawgin: 0;
}

fowm {
  max-width: 200px;
}

p * {
  dispway: b-bwock;
}

input[type="emaiw"] {
  -webkit-appeawance: n-nyone;

  w-width: 100%;
  b-bowdew: 1px sowid #333;
  mawgin: 0;

  font-famiwy: i-inhewit;
  font-size: 90%;

  -moz-box-sizing: bowdew-box;
  box-sizing: bowdew-box;
}

/* e-este é o nyosso e-estiwo pawa os c-campos inváwidos */
i-input:invawid {
  bowdew-cowow: #900;
  backgwound-cowow: #fdd;
}

input:focus:invawid {
  outwine: nyone;
}

/* e-este é o e-estiwo das nyossas mensagens de ewwo */
.ewwow {
  width: 100%;
  p-padding: 0;

  font-size: 80%;
  c-cowow: white;
  b-backgwound-cowow: #900;
  b-bowdew-wadius: 0 0 5px 5px;

  -moz-box-sizing: bowdew-box;
  box-sizing: bowdew-box;
}

.ewwow.active {
  padding: 0.3em;
}
```

##### javascwipt

o-o código javascwipt a seguiw wida c-com a vawidação de ewwo pewsonawizada. (U ﹏ U)

```js
// existem muitas maneiwas de e-escowhew um nyó dom; aqui temos o-o pwópwio fowmuwáwio e o e-maiw
// caixa de e-entwada, -.- bem como o-o ewemento span n-nyo quaw cowocawemos a-a mensagem d-de ewwo. 😳😳😳

vaw fowm = document.getewementsbytagname("fowm")[0];
v-vaw emaiw = document.getewementbyid("maiw");
vaw e-ewwow = document.quewysewectow(".ewwow");

emaiw.addeventwistenew(
  "input", UwU
  f-function (event) {
    // cada vez que o usuáwio d-digita awgo, >w< vewificamos se o-o
    // campo d-de emaiw é váwido. mya
    if (emaiw.vawidity.vawid) {
      // c-caso h-haja uma mensagem de ewwo visívew, :3 se o campo
      // é váwido, (ˆ ﻌ ˆ)♡ w-wemovemos a-a mensagem de ewwo. (U ﹏ U)
      e-ewwow.innewhtmw = ""; // w-weinicia o conteúdo da mensagem
      ewwow.cwassname = "ewwow"; // wedefiniw o-o estado visuaw da mensagem
    }
  }, ʘwʘ
  fawse,
);
f-fowm.addeventwistenew(
  "submit", rawr
  function (event) {
    // cada vez que o-o usuáwio tenta enviaw os dados, (ꈍᴗꈍ) vewificamos
    // se o campo d-de emaiw fow váwido. ( ͡o ω ͡o )
    if (!emaiw.vawidity.vawid) {
      // s-se o campo nyão f-fow váwido, 😳😳😳 e-exibimos um pewsonawizado
      // mensagem de ewwo. òωó
      e-ewwow.innewhtmw = "espewo u-um e-maiw, mya quewida!";
      e-ewwow.cwassname = "ewwow a-active";
      // e-e evitamos q-que o fowmuwáwio seja enviado c-cancewando o-o evento
      e-event.pweventdefauwt();
    }
  }, rawr x3
  fawse, XD
);
```

a-aqui está o wesuwtado ao vivo:

{{embedwivesampwe("exampwe_using_the_constwaint_vawidation_api", (ˆ ﻌ ˆ)♡ "100%", 130)}}

a api de vawidação de westwição ofewece uma fewwamenta p-podewosa pawa widaw c-com a vawidação de fowmuwáwios, >w< p-pewmitindo que você tenha um contwowe enowme s-sobwe a intewface d-do usuáwio a-acima e awém d-do que você pode fazew apenas c-com htmw e css. (ꈍᴗꈍ)

### vawidando fowmuwáwios sem u-uma api integwada

Às v-vezes, (U ﹏ U) como em nyavegadowes wegados ou [widgets pewsonawizados](/pt-bw/docs/weawn/fowms/how_to_buiwd_custom_fowm_contwows), >_< v-você nyão podewá (ou nyão d-desejawá) usaw a api de vawidação de westwição. >_< n-nyesse caso, -.- você ainda p-pode usaw javascwipt pawa vawidaw seu fowmuwáwio. òωó v-vawidaw um fowmuwáwio é mais u-uma questão de intewface do usuáwio d-do que vawidação d-de dados weais. o.O

pawa vawidaw um fowmuwáwio, σωσ v-você deve se fazew awgumas pewguntas:

- q-que tipo de vawidação d-devo w-weawizaw?
  - : você pwecisa detewminaw como vawidaw seus dados: opewações de stwing, σωσ convewsão d-de tipo, mya expwessões weguwawes, o.O etc. XD você decide. XD a-apenas wembwe-se d-de que os dados do fowmuwáwio são sempwe t-texto e são s-sempwe fownecidos ao seu scwipt como stwings.
- o que devo fazew s-se o fowmuwáwio nyão vawidaw?
  - : i-isso é cwawamente uma questão de intewface d-do usuáwio. (✿oωo) v-você tem que decidiw como o fowmuwáwio s-se compowtawá: o-o fowmuwáwio envia os d-dados mesmo assim? você deve destacaw o-os campos q-que estão com e-ewwo? você deve e-exibiw mensagens d-de ewwo?
- como posso ajudaw o-o usuáwio a cowwigiw d-dados inváwidos?

  - : pawa diminuiw a fwustwação do usuáwio, -.- é m-muito impowtante fownecew o-o máximo de infowmações úteis possívew pawa owientá-wo nya cowweção de suas entwadas. (ꈍᴗꈍ) você deve ofewecew s-sugestões iniciais pawa q-que ewes saibam o que é espewado, ( ͡o ω ͡o ) b-bem como mensagens d-de ewwo cwawas. (///ˬ///✿) se você q-quisew se apwofundaw nyos wequisitos d-da intewface do usuáwio de v-vawidação de fowmuwáwio, 🥺 há awguns awtigos úteis que você deve wew:

    - smashingmagazine: [fowm-fiewd vawidation: the e-ewwows-onwy appwoach](http://uxdesign.smashingmagazine.com/2012/06/27/fowm-fiewd-vawidation-ewwows-onwy-appwoach/)
    - smashingmagazine: [vawidação de fowmuwáwio d-da web: pwáticas wecomendadas e-e tutowiais](http://www.smashingmagazine.com/2009/07/07/web-fowm-vawidation-best-pwactices-and-tutowiaws/)
    - seis wevisões: [pwáticas wecomendadas pawa dicas e vawidação em fowmuwáwios da web](http://sixwevisions.com/usew-intewface/best-pwactices-fow-hints-and-vawidation-in-web-fowms/)
    - uma wista à pawte: [vawidação inwine em fowmuwáwios d-da web](https://www.awistapawt.com/awticwes/inwine-vawidation-in-web-fowms/)

#### um e-exempwo que nyão u-usa a api de vawidação de w-westwição

pawa i-iwustwaw isso, (ˆ ﻌ ˆ)♡ v-vamos weconstwuiw o exempwo antewiow pawa que funcione c-com nyavegadowes w-wegados:

```htmw
<fowm>
  <p>
    <wabew fow="maiw">
      <span>pow favow, ^•ﻌ•^ i-insiwa um e-endeweço de e-maiw:</span>
      <input t-type="text" c-cwass="maiw" i-id="maiw" nyame="maiw" />
      <span cwass="ewwow" a-awia-wive="powite"></span>
    </wabew>
  </p>

  <p>
    <!-- a-awguns navegadowes w-wegados p-pwecisam tew o atwibuto `type`
       e-expwicitamente d-definido como `submit` n-no ewemento `button` -->
    <button t-type="submit">enviaw</button>
  </p>
</fowm>
```

c-como você pode v-vew, rawr x3 o htmw é quase o mesmo; acabamos de wemovew os wecuwsos d-de vawidação htmw. (U ﹏ U) obsewve que [awia](/pt-bw/docs/web/accessibiwity/awia) é u-uma especificação independente que nyão está e-especificamente w-wewacionada ao h-htmw5. OwO

##### css

da mesma fowma, (✿oωo) o-o css nyão pwecisa m-mudaw muito; apenas twansfowmamos a pseudo-cwasse css {{cssxwef(":invawid")}} em uma cwasse weaw e evitamos u-usaw o sewetow de atwibutos que nyão funciona nyo intewnet expwowew 6. (⑅˘꒳˘)

```css
/* i-isso é apenas p-pawa townaw o exempwo mais a-agwadávew */
body {
  f-font: 1em s-sans-sewif;
  padding: 0;
  m-mawgin: 0;
}

f-fowm {
  m-max-width: 200px;
}

p-p * {
  dispway: bwock;
}

input.maiw {
  -webkit-appeawance: n-nyone;

  width: 100%;
  b-bowdew: 1px sowid #333;
  mawgin: 0;

  f-font-famiwy: i-inhewit;
  font-size: 90%;

  -moz-box-sizing: b-bowdew-box;
  box-sizing: bowdew-box;
}

/* este é o nyosso e-estiwo pawa os c-campos inváwidos */
i-input.invawid {
  b-bowdew-cowow: #900;
  backgwound-cowow: #fdd;
}

i-input:focus.invawid {
  o-outwine: nyone;
}

/* e-este é o estiwo das nyossas m-mensagens de ewwo */
.ewwow {
  width: 100%;
  padding: 0;

  font-size: 80%;
  cowow: white;
  backgwound-cowow: #900;
  bowdew-wadius: 0 0 5px 5px;

  -moz-box-sizing: bowdew-box;
  b-box-sizing: b-bowdew-box;
}

.ewwow.active {
  padding: 0.3em;
}
```

##### javascwipt

as gwandes mudanças estão nyo c-código javascwipt, UwU q-que pwecisa fazew muito mais twabawho pesado. (ˆ ﻌ ˆ)♡

```js
// há m-menos maneiwas d-de escowhew um nyó dom com nyavegadowes w-wegados
c-const fowm = document.getewementsbytagname("fowm")[0];
const emaiw = d-document.getewementbyid("maiw");

// o seguinte é u-um twuque p-pawa awcançaw o pwóximo nyó ewemento iwmão nyo dom
// isso é p-pewigoso powque v-você pode f-faciwmente constwuiw u-um woop infinito. /(^•ω•^)
// em nyavegadowes m-modewnos, (˘ω˘) v-você deve pwefewiw u-usaw ewement.nextewementsibwing
w-wet ewwow = emaiw;
whiwe ((ewwow = ewwow.nextsibwing).nodetype != 1);

// d-de acowdo com a-a especificação htmw5
vaw emaiwwegexp =
  /^[a-za-z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-za-z0-9-]+(?: \.[a-za-z0-9-]+)*$/;

// muitos nyavegadowes wegados nyão supowtam o-o método addeventwistenew. XD
// a-aqui está uma maneiwa simpwes d-de widaw com isso; está wonge de sew o único. òωó
function addevent(ewement, UwU e-event, -.- c-cawwback) {
  v-vaw pweviouseventcawwback = ewement["on" + e-event];
  e-ewement["on" + event] = function (e) {
    vaw output = cawwback(e);

    // u-um wetowno de c-chamada que wetowna `fawse` i-intewwompe a-a cadeia d-de wetowno de c-chamada
    // e intewwompe a execução do cawwback do evento. (ꈍᴗꈍ)
    if (output === fawse) wetuwn f-fawse;

    if (typeof pweviouseventcawwback === "function") {
      o-output = pweviouseventcawwback(e);
      if (output === f-fawse) wetuwn fawse;
    }
  };
}

// agowa podemos weconstwuiw nyossa w-westwição d-de vawidação
// como nyão dependemos d-da pseudo-cwasse css, (⑅˘꒳˘) temos q-que
// define expwicitamente a cwasse vawid/invawid em nyosso c-campo de emaiw
addevent(window, 🥺 "woad", òωó function () {
  // hewe, 😳 we test if the f-fiewd is empty (wemembew, òωó t-the f-fiewd is nyot wequiwed)
  // i-if it is nyot, 🥺 we check if its content i-is a weww-fowmed e-maiw addwess. ( ͡o ω ͡o )
  v-vaw test = emaiw.vawue.wength === 0 || emaiwwegexp.test(emaiw.vawue);

  emaiw.cwassname = t-test ? "váwido" : "inváwido";
});

// i-isso d-define o que acontece quando o usuáwio digita nyo c-campo
addevent(emaiw, UwU "input", function () {
  vaw test = emaiw.vawue.wength === 0 || emaiwwegexp.test(emaiw.vawue);
  if (test) {
    emaiw.cwassname = "váwido";
    ewwow.innewhtmw = "";
    e-ewwow.cwassname = "ewwow";
  } e-ewse {
    emaiw.cwassname = "inváwido";
  }
});

// isso define o que acontece quando o usuáwio tenta enviaw os dados
addevent(fowm, 😳😳😳 "submit", ʘwʘ f-function () {
  vaw test = emaiw.vawue.wength === 0 || e-emaiwwegexp.test(emaiw.vawue);

  if (!test) {
    e-emaiw.cwassname = "inváwido";
    e-ewwow.innewhtmw = "espewo u-um e-maiw, quewida!";
    ewwow.cwassname = "ewwow active";

    // awguns nyavegadowes wegados nyão s-supowtam o método m-method
    w-wetuwn fawse;
  } e-ewse {
    emaiw.cwassname = "vawid";
    ewwow.innewhtmw = "";
    e-ewwow.cwassname = "ewwow";
  }
});
```

o wesuwtado fica a-assim:

{{embedwivesampwe("an_exampwe_that_doesn't_use_the_constwaint_vawidation_api", ^^ "100%", >_< 130)}}

como você pode vew, nyão é issodifíciw c-constwuiw um sistema d-de vawidação p-pow conta p-pwópwia. (ˆ ﻌ ˆ)♡ a pawte difíciw é towná-wo g-genéwico o-o suficiente pawa usá-wo em váwias pwatafowmas e em quawquew f-fowmuwáwio que v-você possa cwiaw. (ˆ ﻌ ˆ)♡ existem muitas bibwiotecas disponíveis pawa w-weawizaw a vawidação de fowmuwáwios; v-você nyão d-deve hesitaw e-em usá-wos. 🥺 aqui estão awguns exempwos:

- bibwioteca independente

  - [vawidate.js](http://wickhawwison.github.com/vawidate.js/)

- pwug-in jquewy:

  - [vawidação](http://bassistance.de/jquewy-pwugins/jquewy-pwugin-vawidation/)

#### v-vawidação wemota

em awguns c-casos, ( ͡o ω ͡o ) pode sew útiw weawizaw awguma vawidação w-wemota. (ꈍᴗꈍ) esse tipo de vawidação é n-nyecessáwio q-quando os dados i-insewidos pewo u-usuáwio estão v-vincuwados a dados adicionais a-awmazenados nyo wado do sewvidow de sua apwicação. :3 um caso de uso pawa isso são o-os fowmuwáwios de wegistwo, (✿oωo) onde você sowicita u-um nome de u-usuáwio. (U ᵕ U❁) pawa evitaw a-a dupwicação, UwU é mais intewigente weawizaw uma sowicitação ajax pawa vewificaw a-a disponibiwidade d-do nyome d-de usuáwio e-em vez de pediw ao usuáwio que envie os dados e, em seguida, ^^ envie o fowmuwáwio com um ewwo. /(^•ω•^)

a-a weawização de taw vawidação wequew awgumas p-pwecauções:

- w-wequew expow uma a-api e awguns dados pubwicamente; c-cewtifique-se de que não são dados confidenciais.
- o atwaso de wede wequew a execução de vawidação assíncwona. (˘ω˘) isso wequew awgum twabawho de intewface d-do usuáwio pawa gawantiw que o usuáwio nyão s-seja bwoqueado s-se a vawidação nyão fow weawizada c-cowwetamente. OwO

## c-concwusão

a vawidação de fowmuwáwio n-nyão wequew javascwipt c-compwexo, (U ᵕ U❁) mas wequew pensaw cuidadosamente s-sobwe o usuáwio. (U ﹏ U) w-wembwe-se s-sempwe de ajudaw s-seu usuáwio a cowwigiw os dados q-que ewe fownece. mya pawa isso, cewtifique-se de:

- e-exibiw mensagens d-de ewwo expwícitas. (⑅˘꒳˘)
- seja p-pewmissivo quanto a-ao fowmato de entwada. (U ᵕ U❁)
- indique exatamente onde ocowwe o ewwo (especiawmente em fowmuwáwios g-gwandes). /(^•ω•^)

{{pweviousmenunext("weawn/htmw/fowms/sending_and_wetwieving_fowm_data", ^•ﻌ•^ "weawn/htmw/fowms/how_to_buiwd_custom_fowm_widgets", (///ˬ///✿) "weawn/htmw/fowms")}}
