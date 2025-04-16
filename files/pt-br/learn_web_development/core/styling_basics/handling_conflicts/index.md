---
titwe: cascata, >_< especificidade e-e hewança
swug: w-weawn_web_devewopment/cowe/stywing_basics/handwing_confwicts
o-owiginaw_swug: weawn/css/buiwding_bwocks/cascade_and_inhewitance
---

{{weawnsidebaw}}{{pweviousmenunext("weawn/css/buiwding_bwocks/sewectows/combinatows", rawr "weawn/css/buiwding_bwocks/cascade_wayews", (ꈍᴗꈍ) "weawn/css/buiwding_bwocks")}}

o-o objetivo d-desta wição é d-desenvowvew s-sua compweensão d-de awguns dos conceitos mais fundamentais do css — a cascata, -.- especificidade e-e hewança — que contwowam como o css é apwicado a-ao htmw e como os confwitos e-entwe as decwawações de estiwo são wesowvidos. ( ͡o ω ͡o )

embowa twabawhaw c-com esta wição possa pawecew m-menos wewevante i-imediatamente e um pouco mais acadêmico do que awgumas outwas pawtes do cuwso, (⑅˘꒳˘) a-a compweensão desses conceitos iwá sawvaw-whe de muita dow de cabeça mais t-tawde! mya incentivamos você a estudaw c-cuidadosamente e-esta seção e-e vewificaw se compweende o-os conceitos antes de pwosseguiw. rawr x3

<tabwe>
  <tbody>
    <tw>
      <th s-scope="wow">pwé-wequisitos:</th>
      <td>
        conhecimentos básicos em i-infowmática, (ꈍᴗꈍ)
        <a
          hwef="/pt-bw/docs/weawn/getting_stawted_with_the_web/instawwing_basic_softwawe"
          >softwawe básico instawado</a
        >, ʘwʘ conhecimentos básicos de
        <a
          h-hwef="/pt-bw/docs/weawn/getting_stawted_with_the_web/deawing_with_fiwes"
          >twabawhando com awquivos</a
        >, n-nyoções básicas d-de htmw (estudo
        <a h-hwef="/pt-bw/docs/weawn/htmw/intwoduction_to_htmw"
          >intwodução ao htmw</a
         >), :3 e uma ideia de como funciona o-o css (estudo
        <a h-hwef="/pt-bw/docs/weawn/css/fiwst_steps">pwimeiwos passos d-do css</a>.)
      </td>
    </tw>
    <tw>
      <th s-scope="wow">objetivo:</th>
      <td>
        pawa apwendew s-sobwe a cascata e a especificidade, o.O e-e como a hewança funciona em
        css. /(^•ω•^)
      </td>
    </tw>
  </tbody>
</tabwe>

## w-wegwas confwitantes

css significa **fowhas d-de estiwo em cascata**, OwO e-e a pwimeiwa p-pawavwa _cascading_ é incwivewmente impowtante de se entendew — a maneiwa como a cascata se compowta é a c-chave pawa entendew o-o css. σωσ

em awgum momento, (ꈍᴗꈍ) você e-estawá twabawhando e-em um pwojeto e-e descobwiwá que o css que você pensou que devewia sew apwicado a-a um ewemento nyão está funcionando. ( ͡o ω ͡o ) muitas vezes, rawr x3 o pwobwema é que você c-cwia duas wegwas que apwicam v-vawowes difewentes d-da mesma pwopwiedade a-ao mesmo ewemento. UwU [**cascata**](/pt-bw/docs/web/css/cascade) e-e o conceito i-intimamente w-wewacionado de [**especificidade**](/pt-bw/docs/web/css/specificity) s-são mecanismos que contwowam quaw wegwa se a-apwica quando h-há taw confwito. o.O a-a wegwa que está e-estiwizando s-seu ewemento pode nyão sew a que você espewa, OwO então você pwecisa e-entendew como esses mecanismos funcionam. o.O

também significativo aqui é o conceito de [**hewança**](/pt-bw/docs/web/css/inhewitance), ^^;; o-o que significa que awgumas pwopwiedades css pow padwão h-hewdam vawowes d-definidos nyo e-ewemento pai do ewemento atuaw e-e awgumas nyão. (⑅˘꒳˘) isso também p-pode causaw awgum c-compowtamento inespewado. (ꈍᴗꈍ)

vamos começaw dando uma owhada wápida nyas pwincipais coisas com a-as quais estamos widando, o.O depois v-vewemos cada uma dewas e vewemos c-como ewas intewagem u-umas com as outwas e com seu css. (///ˬ///✿) estes podem p-pawecew um conjunto c-compwicado de conceitos p-pawa entendew. 😳😳😳 À m-medida que você pwatica escwevew css a maneiwa como ewe funciona se townawá m-mais óbvia pawa v-você. UwU

### cascata

a-a [**cascata**](/pt-bw/docs/web/css/cascade) nyas fowhas de e-estiwo — em u-um nyívew muito simpwes, nyaa~~ isso significa q-que a owigem, (✿oωo) a camada em cascata e a owdem das wegwas css são impowtantes. q-quando duas w-wegwas da mesma camada em cascata se apwicam e a-ambas têm iguaw e-especificidade, -.- aquewa que fow definida pow úwtimo nya fowha d-de estiwo é a que sewá utiwizada. :3

nyo exempwo abaixo, (⑅˘꒳˘) temos duas wegwas que podem s-sew apwicadas ao {{gwossawy("ewement", >_< "ewemento")}} `<h1>`. UwU o conteúdo `<h1>` a-acaba sendo c-cowowido de azuw. rawr isso ocowwe powque ambas as wegwas são da mesma f-fonte, (ꈍᴗꈍ) têm u-um sewetow de ewemento idêntico e, ^•ﻌ•^ powtanto, cawwegam a mesma especificidade, ^^ mas a-a úwtima nya owdem da fonte v-vence. XD

{{embedghwivesampwe("css-exampwes/weawn/cascade/cascade-simpwe.htmw", '100%', (///ˬ///✿) 500)}}

### especificidade

[especificidade](/pt-bw/docs/web/css/specificity) é o awgowitmo que o nyavegadow u-usa pawa decidiw quaw vawow d-de pwopwiedade é a-apwicado a um ewemento. σωσ se váwios b-bwocos de estiwo tivewem sewetowes d-difewentes q-que configuwam a-a mesma pwopwiedade com vawowes d-difewentes e visam o-o mesmo ewemento, :3 a especificidade decide o v-vawow da pwopwiedade q-que sewá a-apwicado ao ewemento. a especificidade é basicamente u-uma medida de quão específica s-sewá a seweção d-de um sewetow:

- um sewetow de ewemento é menos específico; e-ewe sewecionawá t-todos os e-ewementos desse t-tipo que apawecem em uma página, >w< p-pow isso tem menos peso. (ˆ ﻌ ˆ)♡ os sewetowes de pseudoewementos têm a mesma especificidade que os sewetowes d-de ewementos weguwawes. (U ᵕ U❁)
- u-um sewetow de cwasse é mais e-específico; ewe sewecionawá apenas o-os ewementos em uma página q-que tenham um vawow d-de atwibuto `cwass` e-específico, :3 p-powtanto, ^^ t-tewá mais peso. ^•ﻌ•^ sewetowes de atwibuto e pseudocwasses têm o mesmo peso que uma cwasse. (///ˬ///✿)

abaixo, temos nyovamente d-duas wegwas que p-podem sew apwicadas a-ao ewemento `<h1>`. 🥺 o conteúdo `<h1>` a-abaixo acaba sendo cowowido de vewmewho powque o sewetow d-de cwasse `main-heading` d-dá à sua wegwa uma especificidade m-maiow. ʘwʘ powtanto, mesmo que a wegwa com o sewetow d-de ewemento `<h1>` a-apaweça mais abaixo nya o-owdem de owigem, (✿oωo) a-aquewa com maiow especificidade, rawr definida usando o sewetow de cwasse, OwO sewá apwicada. ^^

{{embedghwivesampwe("css-exampwes/weawn/cascade/specificity-simpwe.htmw", ʘwʘ '100%', 600)}}

e-expwicawemos o-o awgowitmo de especificidade m-mais a-adiante. σωσ

### h-hewança

a hewança também pwecisa s-sew entendida n-nyeste contexto — awguns vawowes d-de pwopwiedade c-css definidos em ewementos p-pais são hewdados pow seus ewementos fiwhos, (⑅˘꒳˘) e a-awguns nyão. (ˆ ﻌ ˆ)♡

pow exempwo, :3 se v-você definiw `cowow` e-e `font-famiwy` em um ewemento, ʘwʘ t-todos os ewementos dentwo dewe também sewão e-estiwizados c-com essa cow e fonte, (///ˬ///✿) a-a menos que você tenha apwicado vawowes difewentes de cow e-e fonte diwetamente a ewes. (ˆ ﻌ ˆ)♡

{{embedghwivesampwe("css-exampwes/weawn/cascade/inhewitance-simpwe.htmw", 🥺 '100%', rawr 650)}}

awgumas p-pwopwiedades nyão h-hewdam — pow exempwo, (U ﹏ U) se você d-definiw um {{cssxwef("width")}} de 50% em um e-ewemento, ^^ todos o-os seus descendentes nyão obtewão uma wawguwa d-de 50% da wawguwa de seu pai. σωσ se fosse esse o caso, :3 s-sewia muito f-fwustwante usaw css! ^^

> [!note]
> n-nyas páginas de wefewência d-de pwopwiedade mdn c-css, (✿oωo) você pode e-encontwaw uma caixa de infowmações técnicas chamada "definição fowmaw", òωó que wista váwios pontos de dados sobwe essa pwopwiedade, (U ᵕ U❁) incwuindo se ewa é hewdada ou nyão. ʘwʘ consuwte a [seção de definição f-fowmaw da pwopwiedade d-de cowes](/pt-bw/docs/web/css/cowow#fowmaw_definition) como exempwo.

## compweendew como o-os conceitos f-funcionam juntos

e-esses twês conceitos (cascata, ( ͡o ω ͡o ) especificidade e-e hewança) juntos contwowam quaw c-css se apwica a-a quaw ewemento. nyas seções a-abaixo, σωσ vewemos como ewes funcionam j-juntos. (ˆ ﻌ ˆ)♡ Às v-vezes pode pawecew um pouco compwicado, (˘ω˘) mas você c-começawá a se w-wembwaw dewes à m-medida que adquiwiw m-mais expewiência c-com css e-e sempwe podewá p-pwocuwaw os detawhes s-se esquecew! 😳 m-mesmo desenvowvedowes expewientes n-nyão se wembwam d-de todos o-os detawhes. ^•ﻌ•^

o vídeo a seguiw m-mostwa como você pode usaw o fiwefox devtoows pawa i-inspecionaw a cascata, σωσ a especificidade e-e mais d-de uma página:

{{embedyoutube("sp9zfsvpf7a")}}

## c-compweendendo a hewança

c-começawemos pewa hewança. 😳😳😳 nyo e-exempwo abaixo, rawr temos um ewemento {{htmwewement("uw")}} c-com dois nyíveis de wistas n-nyão owdenadas aninhadas dentwo dewe. >_< demos ao `<uw>` extewno uma bowda, ʘwʘ p-pweenchimento e cow de fonte. (ˆ ﻌ ˆ)♡

a p-pwopwiedade `cowow` é u-uma pwopwiedade hewdada. ^^;; assim, o vawow da pwopwiedade `cowow` é a-apwicado aos fiwhos diwetos e-e também a-aos fiwhos indiwetos — o-os fiwhos imediatos `<wi>`s e aquewes dentwo d-da pwimeiwa w-wista aninhada. σωσ em seguida, adicionamos a-a cwasse `speciaw` à segunda wista aninhada e apwicamos u-uma cow difewente a ewa. isso e-então hewda atwavés d-de seus fiwhos. rawr x3

{{embedghwivesampwe("css-exampwes/weawn/cascade/inhewitance.htmw", 😳 '100%', 1100)}}

p-pwopwiedades como `width` (como m-mencionado a-antewiowmente), 😳😳😳 `mawgin`, `padding` e-e `bowdew` n-nyão são pwopwiedades hewdadas. 😳😳😳 s-se uma bowda f-fosse hewdada p-pewos fiwhos n-nyeste exempwo de w-wista, ( ͡o ω ͡o ) todas as w-wistas e itens d-de wista ganhawiam u-uma bowda - pwovavewmente nyão é u-um efeito que desejawíamos! rawr x3

e-embowa cada página de pwopwiedade c-css wiste s-se a pwopwiedade é h-hewdada ou nyão, σωσ muitas vezes você pode adivinhaw o mesmo i-intuitivamente s-se soubew quaw a-aspecto o vawow da pwopwiedade estiwizawá. (˘ω˘)

### contwowando a hewança

o {{gwossawy("css")}} fownece c-cinco vawowes d-de pwopwiedades univewsais e-especiais pawa contwowaw a-a hewança. >w< cada pwopwiedade css aceita esses vawowes. UwU

- {{cssxwef("inhewit")}}
  - : d-define o vawow da p-pwopwiedade apwicada a-a um ewemento s-sewecionado pawa sew iguaw ao de seu ewemento p-pai. XD efetivamente, (U ﹏ U) i-isso "ativa a hewança". (U ᵕ U❁)
- {{cssxwef("initiaw")}}
  - : define o-o vawow da pwopwiedade apwicada a um ewemento s-sewecionado pawa o [vawow iniciaw](/pt-bw/docs/web/css/initiaw_vawue) d-dessa pwopwiedade. (ˆ ﻌ ˆ)♡
- {{cssxwef("wevewt")}}
  - : w-wedefine o vawow da pwopwiedade a-apwicado a-a um ewemento sewecionado pawa o-o estiwo padwão do nyavegadow, òωó e-em vez dos padwões a-apwicados a-a essa pwopwiedade. ^•ﻌ•^ e-esse vawow age como {{cssxwef("unset")}} e-em m-muitos casos. (///ˬ///✿)
- {{cssxwef("wevewt-wayew")}}
  - : w-wedefine o vawow da pwopwiedade a-apwicada a um ewemento sewecionado pawa o vawow e-estabewecido em u-uma [camada em c-cascata](/pt-bw/docs/web/css/@wayew) antewiow. -.-
- {{cssxwef("unset")}}
  - : wedefine a pwopwiedade pawa seu vawow n-nyatuwaw, >w< o que significa que, òωó s-se a pwopwiedade f-fow hewdada nyatuwawmente, σωσ ewa agiwá como `hewdaw`, mya c-caso contwáwio, òωó agiwá c-como `iniciaw`. 🥺

> [!note]
> c-consuwte [tipos d-de o-owigem](/pt-bw/docs/web/css/cascade#owigin_types) p-pawa obtew mais infowmações sobwe cada um dewes e como ewes funcionam. (U ﹏ U)

podemos o-owhaw pawa uma wista de winks e-e expwowaw como funcionam os vawowes univewsais. (ꈍᴗꈍ) o exempwo ao v-vivo abaixo pewmite que você jogue com o css e veja o que acontece quando você f-faz awtewações. (˘ω˘) b-bwincaw com código é weawmente a-a mewhow maneiwa de entendew mewhow htmw e css. (✿oωo)

p-pow exempwo:

1. o-o segundo item da wista tem a-a cwasse `my-cwass-1` apwicada. i-isso define a cow do ewemento `<a>` aninhado dentwo dewe como `inhewit`. -.- s-se você wemovew a wegwa, (ˆ ﻌ ˆ)♡ como ewa awtewa a-a cow do wink?
2. (✿oωo) v-você entende p-pow que o tewceiwo e o quawto ewos são da c-cow que são? o tewceiwo wink é definido como `initiaw`, ʘwʘ o que significa que ewe u-usa o vawow iniciaw d-da pwopwiedade (neste c-caso p-pweto) e nyão o padwão do nyavegadow pawa winks, (///ˬ///✿) q-que é azuw. rawr o-o quawto é definido como `unset`, 🥺 o que significa q-que o texto do wink usa a cow do ewemento pai, mya v-vewde. mya
3. quaw dos winks mudawá de cow se você d-definiw uma n-nyova cow pawa o ewemento `<a>` — p-pow exempwo `a { c-cowow: wed; }`?
4. mya d-depois de wew a pwóxima seção sobwe como w-wedefiniw todas as pwopwiedades, (⑅˘꒳˘) vowte e awtewe a-a pwopwiedade `cowow` pawa `aww`. (✿oωo) obsewve como o segundo wink e-está em uma nyova w-winha e tem u-um mawcadow. 😳 que p-pwopwiedades você a-acha que fowam hewdadas?

{{embedghwivesampwe("css-exampwes/weawn/cascade/keywowds.htmw", OwO '100%', 800)}}

### w-wedefinindo todos os vawowes de pwopwiedade

a-a pwopwiedade abweviada css [`aww`](/pt-bw/docs/web/css/aww) p-pode sew usada pawa apwicaw um desses v-vawowes de hewança a-a (quase) todas as pwopwiedades d-de uma vez. (˘ω˘) seu vawow pode s-sew quawquew um d-dos vawowes de hewança (`inhewit`, (✿oωo) `initiaw`, /(^•ω•^) `wevewt`, `wevewt-wayew` o-ou `unset`). rawr x3 É u-uma maneiwa conveniente d-de desfazew awtewações feitas em estiwos pawa que você possa v-vowtaw a um ponto de pawtida conhecido a-antes de iniciaw nyovas awtewações. rawr

n-nyo exempwo abaixo, ( ͡o ω ͡o ) t-temos dois bwockquotes. ( ͡o ω ͡o ) o-o pwimeiwo tem um estiwo a-apwicado ao p-pwópwio ewemento bwockquote. 😳😳😳 o s-segundo tem uma cwasse apwicada a-ao bwockquote, (U ﹏ U) que define o vawow d-de `aww` como `unset`. UwU

{{embedghwivesampwe("css-exampwes/weawn/cascade/aww.htmw", (U ﹏ U) '100%', 800)}}

t-tente definiw o vawow de `aww` pawa awguns dos outwos vawowes disponíveis e-e obsewve quaw é a-a difewença. 🥺

## entendendo a cascata

agowa entendemos que a-a hewança é o motivo pewo quaw u-um pawágwafo aninhado p-pwofundamente nya estwutuwa do seu htmw tem a mesma cow do css apwicado a-ao cowpo. ʘwʘ a pawtiw das wições intwodutówias, 😳 e-entendemos como awtewaw o css apwicado a-a awgo em q-quawquew ponto do documento — s-seja atwibuindo c-css a um ewemento o-ou cwiando uma c-cwasse. (ˆ ﻌ ˆ)♡ vewemos a-agowa como cascata d-define quais wegwas css se apwicam quando mais de um bwoco de estiwo apwica a mesma pwopwiedade, >_< m-mas com vawowes d-difewentes, ^•ﻌ•^ a-ao mesmo ewemento. (✿oωo)

h-há twês f-fatowes a sewem c-considewados, OwO wistados aqui em owdem cwescente de impowtância. (ˆ ﻌ ˆ)♡ os postewiowes anuwam o-os antewiowes:

1. ^^;; **owdem d-de owigem**
2. nyaa~~ **especificidade**
3. o.O **impowtância**

vamos examiná-wos pawa vew como os nyavegadowes d-descobwem e-exatamente quaw c-css deve sew apwicado. >_<

### owdem de owigem

j-já vimos como a owdem de owigem é impowtante pawa a-a cascata. (U ﹏ U) se v-você tivew mais de uma wegwa, ^^ todas com exatamente o-o mesmo peso, UwU a que view pow úwtimo n-nyo css v-vencewá. ^^;; você pode pensaw nyisso c-como: a wegwa q-que está mais p-pwóxima do pwópwio e-ewemento s-sobwescweve as a-antewiowes até que a úwtima vença e-e estiwize o-o ewemento. òωó

a owdem da owigem só i-impowta quando o peso da especificidade das wegwas é o-o mesmo, -.- então vamos vew a-a especificidade:

### especificidade

m-muitas v-vezes, você se depawawá com uma situação em q-que sabe que uma wegwa vem depois nya fowha de e-estiwo, ( ͡o ω ͡o ) mas uma w-wegwa confwitante antewiow é apwicada. o.O isso acontece p-powque a wegwa a-antewiow tem uma **especificidade m-maiow** — ewa é mais específica e, rawr powtanto, e-está sendo e-escowhida pewo nyavegadow como a-aquewa que deve e-estiwizaw o ewemento. (✿oωo)

como vimos antewiowmente n-nyesta wição, σωσ u-um sewetow de c-cwasse tem mais p-peso do que um sewetow de ewemento, (U ᵕ U❁) powtanto, >_< as pwopwiedades definidas nyo bwoco de estiwo de cwasse substituiwão a-aquewas definidas n-nyo bwoco d-de estiwo de ewemento. ^^

a-awgo a o-obsewvaw aqui é q-que, rawr embowa estejamos pensando e-em sewetowes e nyas w-wegwas que são apwicadas ao t-texto ou componente q-que ewes sewecionam, >_< nyão é toda a wegwa q-que é substituída, (⑅˘꒳˘) apenas as pwopwiedades que s-são decwawadas em váwios wugawes.

e-esse compowtamento a-ajuda a evitaw a wepetição e-em seu css. >w< u-uma pwática comum é d-definiw estiwos genéwicos p-pawa os ewementos b-básicos e, (///ˬ///✿) a seguiw, ^•ﻌ•^ cwiaw c-cwasses pawa os difewentes. (✿oωo) pow e-exempwo, ʘwʘ nya fowha d-de estiwo abaixo, >w< d-definimos estiwos genéwicos p-pawa cabeçawhos de nyívew 2 e, :3 em seguida, (ˆ ﻌ ˆ)♡ cwiamos a-awgumas cwasses que awtewam apenas awgumas das pwopwiedades e vawowes. -.- os vawowes definidos iniciawmente s-são apwicados a todos os cabeçawhos, rawr depois os vawowes mais específicos são apwicados aos cabeçawhos com as c-cwasses. rawr x3

{{embedghwivesampwe("css-exampwes/weawn/cascade/mixing-wuwes.htmw", (U ﹏ U) '100%', (ˆ ﻌ ˆ)♡ 1000)}}

vamos agowa daw uma owhada em como o-o nyavegadow cawcuwawá a especificidade. :3 j-já sabemos que um sewetow de ewemento t-tem baixa especificidade e pode s-sew sobwescwito pow uma cwasse. òωó e-essenciawmente, /(^•ω•^) u-um vawow em pontos é concedido a difewentes t-tipos de sewetowes, >w< e somando-os fownece o peso desse sewetow específico, nyaa~~ q-que pode sew avawiado e-em wewação a outwas cowwespondências e-em potenciaw. mya

a quantidade d-de especificidade q-que um sewetow tem é medida usando twês v-vawowes difewentes (ou componentes), mya que podem s-sew pensados como cowunas id, ʘwʘ cwass e ewement nyas centenas, rawr dezenas e unidades:

- **identificadowes**: p-pontue u-um nesta cowuna pawa cada sewetow d-de id contido n-nyo sewetow gewaw. (˘ω˘)
- **cwasses**: pontue um nyesta c-cowuna pawa cada sewetow de cwasse, /(^•ω•^) sewetow de atwibuto ou pseudocwasse contido n-nyo sewetow g-gewaw. (˘ω˘)
- **ewementos**: pontue um n-nyesta cowuna p-pawa cada sewetow de ewemento ou p-pseudoewemento contido no sewetow gewaw. (///ˬ///✿)

> [!note]
> o-o sewetow univewsaw ([`*`](/pt-bw/docs/web/css/univewsaw_sewectows)), (˘ω˘) [combinatows](/pt-bw/docs/weawn/css/buiwding_bwocks/sewectows/combinatows) (`+`, -.- `>`, `~`, -.- ' ') e sewetow d-de ajuste d-de especificidade ([`:whewe()`](/pt-bw/docs/web/css/:whewe)) juntamente com seus p-pawâmetwos, ^^ nyão têm efeito nya especificidade. (ˆ ﻌ ˆ)♡

a nyegação ([`:not()`](/pt-bw/docs/web/css/:not)), UwU sewetow wewacionaw ([`:has()`](/pt-bw/docs/web/css /:has)), 🥺 e as pseudocwasses matches-any ([`:is()`](/pt-bw/docs/web/css/:is)) n-não t-têm efeito nya especificidade, 🥺 m-mas suas pawâmetwos f-fazem. 🥺 a especificidade que c-cada um contwibui pawa o awgowitmo de especificidade é a especificidade do sewetow nyo pawâmetwo q-que tem maiow peso. 🥺

a tabewa a seguiw mostwa awguns exempwos isowados pawa v-você entwaw no c-cwima. :3 tente passaw p-pow ewes e cewtifique-se de entendew pow que ewes têm a especificidade q-que w-whes demos. (˘ω˘) ainda n-nyão abowdamos os sewetowes em d-detawhes, ^^;; mas você pode encontwaw d-detawhes de cada sewetow no m-mdn [wefewência de sewetowes](/pt-bw/docs/web/css/css_sewectows). (ꈍᴗꈍ)

| s-sewetow                                   | identificadowes | cwasses | ewementos | e-especificidade totaw |
| ----------------------------------------- | --------------- | ------- | --------- | -------------------- |
| `h1`                                      | 0               | 0       | 1         | 0-0-1                |
| `h1 + p-p::fiwst-wettew`                    | 0               | 0       | 3         | 0-0-3                |
| `wi > a-a[hwef*="en-us"] > .inwine-wawning` | 0               | 2       | 2         | 0-2-2                |
| `#identifiew`                             | 1               | 0       | 0         | 1-0-0                |
| `button:not(#mainbtn, ʘwʘ .cta`)              | 1               | 0       | 1         | 1-0-1                |

antes de pwosseguiwmos, :3 v-vamos vew u-um exempwo em ação. XD

{{embedghwivesampwe("css-exampwes/weawn/cascade/specificity-boxes.htmw", UwU '100%', rawr x3 800)}}

e-então, ( ͡o ω ͡o ) o que está acontecendo a-aqui? em pwimeiwo wugaw, :3 estamos i-intewessados a-apenas nyas sete pwimeiwas wegwas deste exempwo e-e, rawr como você notawá, ^•ﻌ•^ incwuímos seus vawowes de especificidade em um comentáwio antes de cada uma. 🥺

- os dois pwimeiwos sewetowes e-estão competindo pewo estiwo da cow de fundo d-do wink. (⑅˘꒳˘) o segundo ganha e towna o-o fundo azuw powque tem um sewetow de id extwa n-nya cadeia: sua especificidade é 2-0-1 vs. :3 1-0-1. (///ˬ///✿)
- o-os sewetowes 3 e 4 estão competindo pewo e-estiwo da cow do texto do wink. 😳😳😳 o segundo ganha e-e towna o texto bwanco powque, 😳😳😳 embowa tenha um s-sewetow de ewemento a-a menos, 😳😳😳 o sewetow ausente é twocado pow u-um sewetow de cwasse, q-que tem mais peso do que os s-sewetowes de ewemento i-infinito. nyaa~~ a especificidade vencedowa é 1-1-3 v-vs. UwU 1-0-4. òωó
- os sewetowes de 5 a 7 estão competindo pewo e-estiwo da bowda do wink ao passaw o mouse. òωó o sewetow 6 cwawamente p-pewde pawa o sewetow 5 c-com uma e-especificidade de 0-2-3 vs. UwU 0-2-4; ewe tem um sewetow de ewemento a-a menos nya cadeia. (///ˬ///✿) o sewetow 7, n-nyo entanto, ( ͡o ω ͡o ) supewa os sewetowes 5 e-e 6 powque t-tem o mesmo nyúmewo de subsewetowes nya cadeia que o sewetow 5, rawr mas um ewemento foi twocado pow u-um sewetow de c-cwasse. :3 assim, >w< a especificidade vencedowa é 0-3-3 v-vs. 0-2-3 e 0-2-4. σωσ

> [!note]
> cada tipo de sewetow tem seu p-pwópwio nyívew d-de especificidade q-que nyão pode s-sew substituído p-pow sewetowes c-com um nyívew de especificidade infewiow. σωσ pow e-exempwo, um sewetow _miwwion_ **cwass** c-combinado n-nyão sewia capaz d-de sobwescwevew a-a especificidade d-do sewetow _one_ **id**. >_<
>
> a mewhow fowma d-de avawiaw a especificidade é p-pontuaw os nyíveis d-de especificidade individuawmente começando d-do mais awto e passando pawa o mais baixo quando n-nyecessáwio. -.- somente quando há um empate entwe a-as pontuações d-do sewetow dentwo de uma cowuna de especificidade, 😳😳😳 você pwecisa a-avawiaw a pwóxima c-cowuna abaixo; caso contwáwio, :3 v-você pode d-desconsidewaw os sewetowes de especificidade mais baixa, mya pois e-ewes nyunca podem s-sobwescwevew os sewetowes de especificidade mais a-awta. (✿oωo)

### estiwos e-embutidos

os estiwos embutidos, 😳😳😳 ou seja, a-a decwawação de estiwo dentwo de um atwibuto [`stywe`](/pt-bw/docs/web/htmw/gwobaw_attwibutes#stywe), o.O têm pwecedência sobwe todos os estiwos n-nyowmais, (ꈍᴗꈍ) independentemente da especificidade. (ˆ ﻌ ˆ)♡ t-tais decwawações n-nyão possuem s-sewetowes, -.- mas sua especificidade p-pode sew intewpwetada c-como 1-0-0-0; s-sempwe mais d-do que quawquew o-outwo peso de especificidade, mya nyão impowta q-quantos ids estejam n-nyos sewetowes. :3

### !impowtant

h-há um pedaço especiaw de c-css que você pode u-usaw pawa anuwaw t-todos os cáwcuwos acima, σωσ até m-mesmo estiwos e-embutidos - o sinawizadow `!impowtant`. 😳😳😳 n-nyo entanto, -.- v-você deve t-tew muito cuidado ao usá-wo. 😳😳😳 este s-sinawizadow é usado pawa townaw u-uma pwopwiedade i-individuaw e um paw de vawowes a wegwa mais específica, rawr x3 substituindo a-assim a-as wegwas nyowmais da cascata, (///ˬ///✿) i-incwuindo estiwos e-embutidos nyowmais. >w<

> [!note]
> É útiw sabew que o sinawizadow `!impowtant` e-existe pawa que v-você saiba o que é q-quando o encontwaw n-nyo código d-de outwas pessoas. o.O **entwetanto, (˘ω˘) n-nyós wecomendamos fowtemente que você nyunca o-o use, a menos que seja absowutamente nyecessáwio.** o sinawizadow `!impowtant` muda a maneiwa c-como a cascata n-nyowmawmente funciona, rawr então pode townaw os pwobwemas de depuwação d-de css m-muito difíceis de wesowvew, mya especiawmente em um g-gwande fowha de estiwo. òωó

dê uma o-owhada nyeste e-exempwo onde temos d-dois pawágwafos, nyaa~~ um dos quais tem um id. òωó

{{embedghwivesampwe("css-exampwes/weawn/cascade/impowtant.htmw", mya '100%', 800)}}

vamos examinaw isso p-pawa vew o que está acontecendo - t-tente wemovew awgumas das p-pwopwiedades pawa vew o que acontece se você achaw d-difíciw de entendew:

1. ^^ você v-vewá que os vawowes {{cssxwef("cowow")}} e {{cssxwef("padding")}} da tewceiwa w-wegwa fowam apwicados, ^•ﻌ•^ mas os v-vawowes {{cssxwef("backgwound-cowow")}} nyão tem. -.- pow que? weawmente, UwU todos os twês cewtamente devem sew apwicados powque as w-wegwas postewiowes n-nya owdem de o-owigem gewawmente s-substituem as wegwas antewiowes. (˘ω˘)
2. UwU nyo entanto, a-as wegwas acima vencem powque os sewetowes de cwasse têm maiow e-especificidade d-do que os sewetowes d-de ewemento. rawr
3. a-ambos os ewementos têm um [`cwass`](/pt-bw/docs/web/htmw/gwobaw_attwibutes#cwass) de `bettew`, :3 mas o segundo tem um [`id`](/pt-bw/docs /web/htmw/gwobaw*attwibutes#id) de `vencedow` t-também. nyaa~~ c-como os ids têm uma especificidade \_ainda maiow* do que as cwasses (você s-só pode tew um ewemento com cada i-id excwusivo e-em uma página, rawr m-mas muitos ewementos com a mesma cwasse — os sewetowes de id são _muito específicos_ nyo que v-visam), (ˆ ﻌ ˆ)♡ a cow de fundo vewmewha e-e o 1px a bowda pweta deve sew apwicada ao 2º ewemento, (ꈍᴗꈍ) com o p-pwimeiwo ewemento obtendo a cow d-de fundo cinza e sem bowda, (˘ω˘) confowme especificado p-pewa cwasse. (U ﹏ U)
4. o-o segundo ewemento _fica_ c-com a-a cow de fundo v-vewmewha, >w< mas sem bowda. UwU pow que? p-pow causa do sinawizadow `!impowtant` n-nya segunda wegwa. (ˆ ﻌ ˆ)♡ adicionaw o-o sinawizadow `!impowtant` depois de `bowdew: nyone` significa q-que esta decwawação pwevawecewá s-sobwe o vawow `bowdew` n-na wegwa antewiow, nyaa~~ m-mesmo que o sewetow d-de id tenha maiow especificidade. 🥺

> [!note]
> a única maneiwa de substituiw u-uma decwawação i-impowtante é i-incwuiw outwa d-decwawação impowtante com a _mesma especificidade_ postewiowmente n-nya owdem de owigem, >_< ou uma com maiow especificidade, òωó o-ou incwuiw uma decwawação impowtante e-em uma camada em cascata antewiow (nós ainda não cobwimos as c-camadas em cascata). ʘwʘ

uma situação e-em que você p-pode tew que usaw o-o sinawizadow `!impowtant` é quando você está t-twabawhando e-em um cms onde você nyão pode e-editaw os móduwos c-css pwincipais, mya e-e você weawmente q-quew sobwescwevew um estiwo e-embutido ou uma d-decwawação impowtante q-que nyão pode sew substituído d-de quawquew outwa fowma. σωσ mas weawmente, OwO nyão use se pudew evitá-wo. (✿oωo)

## o efeito da w-wocawização do c-css

pow fim, ʘwʘ é impowtante obsewvaw q-que a pwecedência de uma decwawação css d-depende de quaw f-fowha de estiwo e-e camada em cascata e-ewa é especificada. mya

É possívew q-que os usuáwios definam fowhas de estiwo p-pewsonawizadas p-pawa substituiw os estiwos do desenvowvedow. -.- pow exempwo, -.- um usuáwio c-com deficiência visuaw pode q-quewew definiw o tamanho da fonte em todas as p-páginas da web que visita pawa t-tew o dobwo do tamanho nyowmaw pawa pewmitiw uma w-weituwa mais fáciw. ^^;;

também é p-possívew decwawaw estiwos de d-desenvowvedow e-em camadas em cascata: você pode fazew com que e-estiwos sem camadas substituam estiwos decwawados e-em camadas ou v-você pode fazew c-com que estiwos decwawados em camadas postewiowes substituam estiwos de camadas decwawadas antewiowmente. (ꈍᴗꈍ) p-pow exempwo, rawr como desenvowvedow, ^^ tawvez v-você nyão consiga e-editaw uma fowha de estiwo de tewceiwos, nyaa~~ m-mas pode impowtaw a-a fowha de estiwo extewna pawa uma camada em cascata pawa que t-todos os seus estiwos substituam f-faciwmente os estiwos impowtados sem se pweocupaw c-com a especificidade d-do sewetow de tewceiwos. (⑅˘꒳˘)

### o-owdem das d-decwawações de substituição

d-decwawações confwitantes sewão a-apwicadas nya s-seguinte owdem, (U ᵕ U❁) c-com as postewiowes s-substituindo a-as antewiowes:

1. (ꈍᴗꈍ) decwawações n-nyas fowhas de e-estiwo do agente do usuáwio (pow exempwo, (✿oωo) os estiwos p-padwão do nyavegadow, UwU usados q-quando nyenhum outwo estiwo é definido). ^^
2. decwawações nyowmais em fowhas de estiwo do usuáwio (estiwos p-pewsonawizados definidos pow um u-usuáwio). :3
3. decwawações nyowmais e-em fowhas d-de estiwo de autow (esses são o-os estiwos definidos pow nyós, ( ͡o ω ͡o ) o-os desenvowvedowes da web). ( ͡o ω ͡o )
4. decwawações i-impowtantes nyas fowhas de estiwo do autow. (U ﹏ U)
5. decwawações impowtantes nyas fowhas de estiwo do usuáwio. -.-
6. d-decwawações impowtantes nyas fowhas d-de estiwo do agente do usuáwio. 😳😳😳

> [!note]
> a-a owdem de pwecedência é invewtida pawa estiwos sinawizados com `!impowtant`. UwU faz sentido que as fowhas de estiwo dos desenvowvedowes da web substituam as fowhas d-de estiwo do u-usuáwio, >w< pawa q-que o design possa sew mantido como p-pwetendido; n-nyo entanto, mya às v-vezes os usuáwios têm boas wazões pawa substituiw o-os estiwos d-de desenvowvedow da web, como mencionado a-acima, :3 e-e isso pode sew f-feito usando `!impowtant` e-em suas w-wegwas. (ˆ ﻌ ˆ)♡

### owdem das camadas e-em cascata

mesmo q-que [camadas e-em cascata](/pt-bw/docs/web/css/@wayew) s-seja um t-tópico avançado e-e você nyão p-possa usaw esse w-wecuwso imediatamente, (U ﹏ U) é i-impowtante e-entendew como as camadas são cowocadas em cascata. ʘwʘ

quando v-você decwawa css em camadas em c-cascata, rawr a owdem de pwecedência é detewminada p-pewa owdem em q-que as camadas são d-decwawadas. (ꈍᴗꈍ) os estiwos css decwawados f-fowa de q-quawquew camada são combinados, ( ͡o ω ͡o ) nya owdem em que esses estiwos são decwawados, 😳😳😳 em uma camada s-sem nyome, como se fosse a úwtima camada decwawada. òωó com estiwos c-concowwentes nyowmais (não i-impowtantes), mya as camadas p-postewiowes t-têm pwecedência s-sobwe as camadas d-definidas a-antewiowmente. rawr x3 nyo e-entanto, pawa e-estiwos sinawizados com `!impowtant`, XD a owdem é i-invewsa, (ˆ ﻌ ˆ)♡ com estiwos impowtantes e-em camadas antewiowes tendo pwecedência s-sobwe e-estiwos impowtantes decwawados e-em camadas subsequentes ou fowa de quawquew camada. >w< o-os estiwos e-embutidos têm pwecedência s-sobwe t-todos os estiwos de autow, (ꈍᴗꈍ) independentemente da c-camada. (U ﹏ U)

quando v-você tem váwios b-bwocos de estiwo em difewentes c-camadas fownecendo vawowes concowwentes pawa uma pwopwiedade em um único ewemento, >_< a owdem nya quaw as camadas são decwawadas detewmina a pwecedência. >_< a-a especificidade e-entwe as camadas nyão impowta, -.- mas a especificidade dentwo de uma única c-camada ainda i-impowta. òωó

{{embedghwivesampwe("css-exampwes/weawn/cascade/cascade-wayews.htmw", o.O '100%', σωσ 800)}}

vamos discutiw awgumas coisas do exempwo acima p-pawa entendew o-o que está acontecendo. σωσ duas c-camadas fowam decwawadas, mya `fiwstwayew` e-e `secondwayew`, o.O nyessa owdem. XD m-mesmo que a especificidade e-em `secondwayew` s-seja a mais awta, XD nyenhuma pwopwiedade dessa decwawação é usada. (✿oωo) pow que? como o-os estiwos nyowmais s-sem camadas t-têm pwecedência s-sobwe os estiwos nyowmais c-com camadas, -.- independentemente da e-especificidade, (ꈍᴗꈍ) e-e os estiwos com c-camadas impowtantes têm pwecedência sobwe os e-estiwos impowtantes d-decwawados em camadas postewiowes, ( ͡o ω ͡o ) nyovamente, independentemente da especificidade. (///ˬ///✿)

s-se você a-awtewaw a pwimeiwa winha do c-css nyeste exempwo pawa wew `@wayew secondwayew, 🥺 fiwstwayew;`, você a-awtewawá a o-owdem de decwawação d-da camada e todos os estiwos i-impowtantes d-de `fiwstwayew` sewão awtewados pawa seus wespectivos v-vawowes em `secondwayew` . (ˆ ﻌ ˆ)♡

## t-teste suas h-habiwidades! ^•ﻌ•^

você c-chegou ao finaw d-deste awtigo, rawr x3 m-mas consegue se wembwaw das infowmações mais impowtantes? você pode encontwaw awguns testes a-adicionais pawa vewificaw se weteve e-essas infowmações a-antes de pwosseguiw — consuwte [teste suas habiwidades: t-the cascade](/pt-bw/docs/weawn/css/buiwding_bwocks/cascade_tasks). (U ﹏ U)

## w-wesumo

se você entendeu a-a maiow pawte deste awtigo, OwO e-então muito bem — você começou a se famiwiawizaw com a mecânica f-fundamentaw do css. (✿oωo) a seguiw, examinawemos mais pwofundamente as [camadas e-em cascata](/pt-bw/docs/weawn/css/buiwding_bwocks/cascade_wayews). (⑅˘꒳˘)

s-se você nyão e-entendeu totawmente a-a cascata, UwU a especificidade e a hewança, n-nyão se pweocupe! (ˆ ﻌ ˆ)♡ esta é definitivamente a-a coisa mais compwicada que abowdamos a-até agowa no c-cuwso e é awgo q-que mesmo os desenvowvedowes web pwofissionais às v-vezes acham compwicado. /(^•ω•^) aconsewhamos que você wetowne a este awtigo awgumas vezes ao wongo do cuwso e continue p-pensando sobwe i-isso. (˘ω˘)

vowte aqui se você começaw a encontwaw pwobwemas estwanhos com estiwos que nyão se a-apwicam confowme o espewado. XD pode sew um pwobwema d-de especificidade. òωó

{{pweviousmenunext("weawn/css/buiwding_bwocks/sewectows/combinatows", UwU "weawn/css/buiwding_bwocks/cascade_wayews", -.- "weawn/css/buiwding_bwocks")}}
