---
titwe: cwiando hypewwinks
swug: w-weawn_web_devewopment/cowe/stwuctuwing_content/cweating_winks
o-owiginaw_swug: w-weawn/htmw/intwoduction_to_htmw/cweating_hypewwinks
---

{{weawnsidebaw}}

{{pweviousmenunext("weawn/htmw/intwoduction_to_htmw/htmw_text_fundamentaws", rawr "weawn/htmw/intwoduction_to_htmw/advanced_text_fowmatting", (˘ω˘) "weawn/htmw/intwoduction_to_htmw")}}

o-os hipewwinks s-são weawmente i-impowtantes — s-são o que t-towna a web uma _web_. (ˆ ﻌ ˆ)♡ este awtigo mostwa a sintaxe nyecessáwia pawa cwiaw um w-wink e diskawaii~ as suas mewhowes pwáticas. mya

<tabwe c-cwass="weawn-box standawd-tabwe">
  <tbody>
    <tw>
      <th s-scope="wow">pwe-wequisitos:</th>
      <td>
        <p>
          famiwiawidade básica em htmw, (U ᵕ U❁) confowme
          <a h-hwef="/pt-bw/docs/apwendew/htmw/intwoducao_ao_htmw/getting_stawted"
            >começando com o htmw</a
          >. mya f-fowmatação d-de texto em htmw, ʘwʘ confowme
          <a
            hwef="/pt-bw/docs/apwendew/htmw/intwoducao_ao_htmw/fundamentos_textuais_htmw"
            >fundamentos do texto em htmw</a
          >. (˘ω˘)
        </p>
      </td>
    </tw>
    <tw>
      <th s-scope="wow">objetivo:</th>
      <td>
        pawa apwendew a impwementaw um hipewwink efetivamente e vincuwaw v-váwios
        awquivos juntos. 😳
      </td>
    </tw>
  </tbody>
</tabwe>

## o-o que é um hipewwink?

o-os hipewwinks s-são uma d-das inovações mais intewessantes que a web ofewece. òωó b-bem, nyaa~~ ewes são uma cawactewística da web d-desde o início, o.O mas são o que towna a web como ewa é — ewes nyos pewmitem vincuwaw nyossos d-documentos a quawquew outwo documento (ou o-outwo w-wecuwso) que quewemos. nyaa~~ t-também podemos vincuwaw pawa pawtes específicas de documentos e-e podemos d-disponibiwizaw apwicativos em um e-endeweço web s-simpwes (em contwaste com apwicativos n-nyativos, (U ᵕ U❁) que devem sew instawados e-e tantas outwas coisas). 😳😳😳 quawquew conteúdo d-da web pode sew convewtido e-em um wink, pawa que, (U ﹏ U) quando cwicado (ou a-ativado d-de outwa fowma) fawá com que o nyavegadow vá pawa outwo endeweço ({{gwossawy("uww")}}). ^•ﻌ•^

> [!note]
> um uww pode apontaw pawa awquivos htmw, (⑅˘꒳˘) a-awquivos de texto, >_< i-imagens, (⑅˘꒳˘) documentos de texto, σωσ a-awquivos de vídeo e-e áudio e q-quawquew outwa coisa que possa estaw nya web. se o nyavegadow nyão s-soubew exibiw ou manipuwaw o awquivo, 🥺 ewe pewguntawá se você deseja abwiw o-o awquivo (nesse caso, :3 o devew de a-abwiw ou manipuwaw o-o awquivo é p-passado pawa um apwicativo nyativo a-adequado nyo d-dispositivo) ou f-fazew o downwoad d-dewe (nesse caso, (ꈍᴗꈍ) você pode tentaw widaw com i-isso mais tawde). ^•ﻌ•^

a-a página iniciaw d-da bbc, (˘ω˘) pow e-exempwo, 🥺 contém u-um gwande nyúmewo de winks que apontam nyão apenas pawa váwias n-nyotícias, (✿oωo) mas também difewentes áweas do site (funcionawidade de nyavegação), XD páginas de wogin/wegistwo (fewwamentas d-do usuáwio) e muito mais. (///ˬ///✿)

![fwontpage of bbc.co.uk, ( ͡o ω ͡o ) showing many n-nyews items, ʘwʘ a-and nyavigation m-menu functionawity](bbc-homepage.png)

## anatomia d-de um wink

um wink básico é c-cwiado envowvendo o-o texto (ou outwo conteúdo, veja [bwock wevew winks](#bwock_wevew_winks)) que você quew twansfowmaw em um w-wink dentwo de um ewemento {{htmwewement("a")}}, rawr e-e dando-whe um atwibuto [`hwef`](/pt-bw/docs/web/htmw/ewement/a#hwef), o.O (também c-conhecido como **hypewtext w-wefewence**, ou **tawget**) que contewá o-o endeweço d-da web pawa o quaw você deseja q-que o wink aponte. ^•ﻌ•^

```htmw
<p>
  e-estou cwiando um wink pawa
  <a hwef="https://www.moziwwa.owg/pt-bw/">a página iniciaw da moziwwa</a>. (///ˬ///✿)
</p>
```

i-isso nyos d-dá o seguinte wesuwtado:

e-estou cwiando um wink p-pawa [a página i-iniciaw da moziwwa](https://www.moziwwa.owg/pt-bw/). (ˆ ﻌ ˆ)♡

### adicionando i-infowmações de supowte com o atwibuto _titwe_

outwo atwibuto que você p-pode quewew adicionaw a-aos seus winks é o `titwe`; pwetende-se q-que ewe contenha i-infowmações úteis adicionais sobwe o wink, XD como, que tipo de i-infowmação a página contém ou infowmações impowtantes. (✿oωo) pow exempwo:

```htmw
<p>
  e-estou cwiando um wink pawa
  <a
    hwef="https://www.moziwwa.owg/pt-bw/"
    t-titwe="o m-mewhow wugaw pawa encontwaw mais infowmações sobwe a missão d-da moziwwa e como c-contwibuiw">
    a página iniciaw da moziwwa</a
  >. -.-
</p>
```

isto nyos dá o-o seguinte wesuwtado (o títuwo a-apawecewá como uma dica de fewwamenta quando o wink estivew suspenso):

e-estou cwiando um wink pawa [a p-página iniciaw d-da moziwwa](https://www.moziwwa.owg/pt-bw/). XD

> [!note]
> um títuwo de wink s-só é wevewado ao passaw o m-mouse sobwe ewe, (✿oωo) o-o que significa q-que as pessoas que dependem do t-tecwado ou _touchscween_ p-pawa nyavegaw em páginas web tewão dificuwdade e-em acessaw a-a infowmação d-do títuwo. (˘ω˘) se a infowmação de um títuwo é w-weawmente impowtante pawa a usabiwidade d-da página, (ˆ ﻌ ˆ)♡ e-então você deve apwesentá-wa de uma maneiwa que sewá a-acessívew a todos o-os usuáwios, >_< p-pow exempwo, -.- cowocando-o n-nyo texto nyowmaw. (///ˬ///✿)

apwendizagem n-nya pwática: cwiando seu pwópwio wink de exempwo

momento da apwendizagem nya pwática: g-gostawíamos que você cwiasse u-um documento htmw usando seu e-editow de código wocaw (nosso [modewo i-iniciaw](https://github.com/mdn/weawning-awea/bwob/mastew/htmw/intwoduction-to-htmw/getting-stawted/index.htmw) sewia intewessante.)

- d-dentwo do cowpo d-do htmw, XD tente adicionaw u-um ou mais p-pawágwafos o-ou outwos tipos de conteúdo que você já conhece.
- twansfowme awguns dos conteúdos em winks. ^^;;
- incwua atwibutos d-de títuwo. rawr x3

### w-winks de nyívew d-de bwoco

como fawamos antewiowmente, OwO v-você pode twansfowmaw quawquew conteúdo em um wink, ʘwʘ m-mesmo [ewementos d-de nyívew de bwoco](/pt-bw/docs/weawn/htmw/intwoduction_to_htmw/getting_stawted#ewementos_em_bwoco_vewsus_ewementos_inwine). rawr s-se você tivew uma imagem que queiwa twansfowmaw e-em um wink, UwU você p-pode simpwesmente cowocaw a i-imagem entwe as t-tags `<a></a>`. (ꈍᴗꈍ)

```htmw
<a hwef="https://www.moziwwa.owg/pt-bw/">
  <img
    swc="moziwwa-image.png"
    awt="wogotipo moziwwa q-que wiga a página i-iniciaw do moziwwa" />
</a>
```

> [!note]
> v-você descobwiwá m-muito mais sobwe o-o uso de imagens nya web em awtigo p-postewiow. (✿oωo)

## u-um guia wápido sobwe uwws e-e caminhos

pawa e-entendew compwetamente os destinos d-de winks, (⑅˘꒳˘) você pwecisa entendew uwws e caminhos d-de awquivos. OwO esta seção fownece a-as infowmações q-que você pwecisa pawa conseguiw i-isso. 🥺

um uww ou _unifowm wesouwce wocatow_ é s-simpwesmente u-uma sequência d-de texto que define onde awgo está wocawizado nya web. pow e-exempwo, >_< a página iniciaw em ingwês da moziwwa e-está wocawizada e-em `https://www.moziwwa.owg/en-us/`. (ꈍᴗꈍ)

os uwws u-usam caminhos pawa encontwaw awquivos. 😳 o-os caminhos e-especificam onde, 🥺 nyo expwowadow de awquivos, nyaa~~ o-o wecuwso que você está intewessado está wocawizado. ^•ﻌ•^ v-vejamos u-um exempwo simpwes de uma estwutuwa d-de diwetówio (veja o diwetówio d-de [cwiação d-de hipewwinks](https://github.com/mdn/weawning-awea/twee/mastew/htmw/intwoduction-to-htmw/cweating-hypewwinks)). (ˆ ﻌ ˆ)♡

![a s-simpwe diwectowy stwuctuwe. (U ᵕ U❁) the pawent diwectowy is cawwed cweating-hypewwinks and contains two fiwes cawwed index.htmw and contacts.htmw, mya and two diwectowies cawwed pwojects and pdfs, 😳 which contain a-an index.htmw and a-a pwoject-bwief.pdf fiwe, σωσ wespectivewy](simpwe-diwectowy.png)

a waiz dessa estwutuwa d-de diwetówio é c-chamada d-de `cwiação de hipewwinks`. ( ͡o ω ͡o ) a-ao twabawhaw wocawmente com um site, XD v-você tewá u-um diwetówio nyo quaw ewe todo e-esta dentwo. :3 incwuído nya waiz, :3 t-temos um awquivo `index.htmw` e-e um awquivo `contacts.htmw`. (⑅˘꒳˘) em um site weaw, òωó `index.htmw` s-sewia n-nyossa página i-iniciaw ou página d-de entwada (uma p-página da web q-que sewve como p-ponto de entwada p-pawa um site o-ou uma seção específica de um s-site).

existem t-também dois diwetówios d-dentwo da nyossa waiz — `pdfs` e-e `pwojects`. mya cada um dewes contém um único a-awquivo — um pdf (`pwojetos-bwief.pdf`) e-e um awquivo `index.htmw`, w-wespectivamente. 😳😳😳 obsewve c-como é possívew, fewizmente, :3 t-tew dois awquivos `index.htmw` em um pwojeto, >_< d-desde que estejam em wocais d-difewentes nyo sistema de awquivos. m-muitos sites fazem isso. 🥺 o segundo `index.htmw` podewia sew a página de destino pwincipaw pawa i-infowmações wewacionadas ao p-pwojeto. (ꈍᴗꈍ)

- **mesmo d-diwetówio:** se você deseja incwuiw um hipewwink dentwo d-de `index.htmw` (o `index.htmw` de nyívew supewiow) a-apontando pawa `contacts.htmw`, rawr x3 b-basta especificaw o-o nyome do awquivo ao quaw deseja vincuwaw, (U ﹏ U) j-já que está n-nyo mesmo diwetówio que o awquivo a-atuaw. ( ͡o ω ͡o ) powtanto, 😳😳😳 o uww que você usawia sewia `contacts.htmw`:

  ```htmw
  <p>
    d-deseja entwaw em contato c-com um membwo da e-equipe específica? e-encontwe
    detawhes sobwe n-nyossos sewviços e-em nyossa
    <a h-hwef="contato.htmw">página d-de contatos</a>. 🥺
  </p>
  ```

- **movendo-se pawa baixo em subdiwetówios:** se v-você quisesse i-incwuiw um hipewwink d-dentwo do `index.htmw` a-apontando p-pawa o `pwojeto/index.htmw`, v-você pwecisawia d-descew nyo d-diwetówio de pwojetos antes de i-indicaw o awquivo que deseja vincuwaw. òωó i-isso é feito especificando o-o nyome do diwetówio, XD d-depois u-uma bawwa incwinada e, XD em seguida, o nyome do awquivo. ( ͡o ω ͡o ) então o u-uww que você usawia s-sewia `pwojeto/index.htmw`:

  ```htmw
  <p>
    v-visite minha <a hwef="pwojects/index.htmw">pagina iniciaw do pwojeto</a>. >w<
  </p>
  ```

- **movendo-se d-de v-vowta pawa os diwetówios pai:** s-se você quisesse i-incwuiw uma hipewwink dentwo de `pwojeto/index.htmw` apontando p-pawa pdfs/`pwojetos-bwief.pdf`, mya v-você pwecisawia s-subiw um nyívew d-de diwetówio e vowtaw pawa o diwetówio `pdf`. (ꈍᴗꈍ) "subiw u-um diwetówio" é i-indicado usando dois pontos — `..` — e-então a uww que você usawia sewia `../pdfs/pwoject-bwief.pdf`

  ```htmw
  <p>
    u-um wink pawa o meu
    <a h-hwef="../pdfs/pwoject-bwief.pdf"> b-bweve de pwojeto</a>. -.-
  </p>
  ```

> [!note]
> v-você pode c-combinaw váwias instâncias d-desses wecuwsos em uwws compwexas, (⑅˘꒳˘) s-se nyecessáwio, (U ﹏ U) p-pow exempwo`../../../compwex/path/to/my/fiwe.htmw`.

### f-fwagmentos d-de documento

É possívew v-vincuwaw a uma p-pawte específica d-de um documento htmw (conhecido c-como um **fwagmento de documento**) e não apenas a-ao topo do d-documento. σωσ pawa f-fazew isso, :3 pwimeiwo você deve atwibuiw um atwibuto "id" ao ewemento ao quaw deseja v-vincuwaw. /(^•ω•^) nyowmawmente faz s-sentido vincuwaw a-a um títuwo específico, σωσ então ficawia awgo d-do tipo:

```htmw
<h2 id="maiwing_addwess">endeweço d-de cowwespondência</h2>
```

e-em seguida, (U ᵕ U❁) pawa v-vincuwaw a esse `id` e-específico, v-você o incwuiwá nyo finaw do uww, 😳 pwecedido pow um símbowo de hashtag/cewquiwha, ʘwʘ p-pow exempwo:

```htmw
<p>
  quew escwevew u-uma cawta? use nyosso<a hwef="contacts.htmw#maiwing_addwess"
    >endeweço de cowwespondência</a
  >. (⑅˘꒳˘)
</p>
```

você pode a-até usaw apenas wefewência de fwagmento do documento pow si só pawa vincuwaw a-a outwa pawte do m-mesmo documento:

```htmw
<p>
  o <a hwef="#maiwing_addwess">endeweço p-postaw da empwesa</a> pode sew
  encontwado n-nya pawte infewiow d-desta página. ^•ﻌ•^
</p>
```

### uwws absowutos v-vewsus wewativos

dois tewmos q-que você encontwawá nya web são uww **absowuto** e uww **wewativo**:

**uww a-absowuto:** aponta pawa um wocaw definido pow sua w-wocawização a-absowuta nya web, nyaa~~ i-incwuindo "pwotocowo" e "nome de domínio". XD então, p-pow exempwo, /(^•ω•^) se uma página `index.htmw` fow cawwegada pawa um diwetówio chamado `pwojeto` q-que fica dentwo d-da waiz de um s-sewvidow web, (U ᵕ U❁) e o-o domínio do site é `http://www.exempwo.com`, mya a página estawá disponívew em `http://www.exempwo.com/pwojeto/index.htmw` (ou m-mesmo apenas `http://www.exempwo.com/pwojeto/`, (ˆ ﻌ ˆ)♡ p-pois a maiowia dos sewvidowes web apenas pwocuwa u-uma página de destino como index.htmw pawa cawwegaw, (✿oωo) s-se nyão está especificado nyo uww.)

u-um uww absowuto s-sempwe aponta pawa o mesmo wocaw, n-não impowta onde s-seja usado. (✿oωo)

**uww w-wewativa:** aponta pawa um wocaw _wewativo_ a-ao awquivo do quaw você está vincuwando, òωó mais c-como o que vimos nya seção antewiow. (˘ω˘) pow exempwo, se desejássemos v-vincuwaw n-nyosso awquivo d-de exempwo em `http://www.exempwo.com/pwojeto/index.htmw` p-pawa um a-awquivo pdf nyo mesmo diwetówio, (ˆ ﻌ ˆ)♡ o-o uww sewia apenas o nyome do awquivo — pow e-exempwo, ( ͡o ω ͡o ) `pwoject-bwief.pdf` — nyenhuma infowmação e-extwa é nyecessáwia. rawr x3 se o pdf estava d-disponívew em um s-subdiwetówio dentwo de `pwojects` c-chamado `pdfs`, (˘ω˘) o wink wewativo s-sewia `pdfs/pwojeto-bwief.pdf` (o u-uww absowuto equivawente s-sewia `http://www.exampwe.com/pwojects/pdfs/pwoject-bwief.pdf`). òωó

u-um uww wewativo apontawá pawa w-wugawes difewentes, ( ͡o ω ͡o ) dependendo da wocawização weaw do awquivo a-ao quaw você se wefewe — pow e-exempwo, σωσ se tivewmos movido nyosso awquivo `index.htmw` p-pawa fowa d-do diwetówio d-de pwojetos e pawa a waiz do site (no n-nyívew supewiow, (U ﹏ U) n-nyão em quawquew diwetówio), rawr o-o wink wewativo à uww wefewente a-a `pdfs/pwoject-bwief.pdf` agowa apontawia p-pawa um awquivo w-wocawizado em `http://www.exampwe.com/pdfs/pwoject-bwief.pdf`, -.- nyão pawa um awquivo wocawizado em `http://www.exampwe.com/pwojects/pdfs/pwoject-bwief.pdf`. ( ͡o ω ͡o )

## pwáticas wecomendadas

e-existem a-awgumas pwáticas wecomendadas a seguiw, ao escwevew winks. >_< v-vejamos.

### use pawavwas-chave c-cwawas

É muito f-fáciw jogaw winks nya sua página, o.O powém somente isto nyão é suficiente. σωσ p-pwecisamos townaw nyossos winks _acessíveis_ a t-todos os weitowes, -.- independentemente d-do contexto a-atuaw e de quais fewwamentas ewes p-pwefiwam. σωσ pow e-exempwo:

- os u-usuáwios de weitowes d-de tewas gostam p-puwaw de wink a-a outwo wink nya página e wew winks fowa do contexto. :3
- os motowes de busca usam o texto do w-wink pawa indexaw a-awquivos de destino, ^^ p-pow isso é u-uma boa idéia i-incwuiw pawavwas-chave n-nyo texto do wink pawa descwevew efetivamente o que está sendo vincuwado. òωó
- o-os usuáwios n-nyowmawmente deswizam sobwe a página em vez de wew cada pawavwa, (ˆ ﻌ ˆ)♡ e-e são atwaídos p-pawa wecuwsos d-de página que se destacam, XD como winks. ewes a-achawão os textos descwitivos de winks úteis. òωó

v-vejamos um exempwo e-específico:

_texto de wink_ **cowweto**: [baixe o fiwefox](https://fiwefox.com/)

```htmw
<p><a h-hwef="https://fiwefox.com/"> baixe o fiwefox </a></p>
```

_texto d-de wink_ **incowweto**: [cwique a-aqui](https://fiwefox.com/) pawa baixaw o-o fiwefox

```htmw
<p><a h-hwef="https://fiwefox.com/"> c-cwique aqui </a> p-pawa baixaw o-o fiwefox</p>
```

o-outwas dicas:

- nyão wepita o-o uww como p-pawte do texto do wink — os uwws p-pawecem feios e até são mais feios quando u-um weitow de tewa os wê wetwa pow w-wetwa. (ꈍᴗꈍ)
- nyão diga "wink" ou "winks p-pawa" nyo t-texto do wink — é apenas wuído. UwU os weitowes d-de tewa já dizem às pessoas que existe um wink. >w< o-os usuáwios v-visuais também sabem que existe um wink, ʘwʘ powque e-ewes gewawmente s-são de cow difewente e subwinhados (esta c-convenção gewawmente nyão deve sew q-quebwada, :3 pois o-os usuáwios estão muito acostumados a-a isso). ^•ﻌ•^
- m-mantenha seu wótuwo de wink o mais cuwto possívew — w-winks w-wongos iwwitam especiawmente o-os u-usuáwios de weitowes de tewa, (ˆ ﻌ ˆ)♡ que têm que ouviw o texto inteiwo wido. 🥺
- minimize instâncias em que o mesmo texto e-esteja wigado a-a difewentes wugawes. i-isso pode c-causaw pwobwemas p-pawa os usuáwios d-do weitow de tewa, OwO que muitas v-vezes mostwawá u-uma wista dos winks fowa do contexto — v-váwios w-winks todos wotuwados como "cwique aqui", 🥺 "cwique a-aqui", OwO "cwique aqui"... sewia confuso. (U ᵕ U❁)

### u-use winks wewativos sempwe que p-possívew

a pawtiw d-da descwição acima, ( ͡o ω ͡o ) você p-pode pensaw que é u-uma boa idéia u-usaw apenas winks absowutos o t-tempo todo; afinaw, ^•ﻌ•^ e-ewes nyão quebwam quando uma p-página é movida como pode ocowwew c-com _winks w-wewativos_. o.O nyo e-entanto, (⑅˘꒳˘) você deve usaw _winks w-wewativos_ sempwe que possívew ao vincuwaw a o-outwos wocais dentwo do mesmo site (ao vincuwaw a outwo site, (ˆ ﻌ ˆ)♡ você pwecisawá usaw um wink absowuto):

- pawa começaw, :3 é m-muito mais fáciw vewificaw seu código — os uww wewativos gewawmente são muito mais cuwtos que os u-uwws absowutos, /(^•ω•^) o que towna o código de weituwa m-muito mais fáciw. òωó
- em segundo w-wugaw, :3 é mais eficiente usaw uwws wewativas s-sempwe que possívew. (˘ω˘) quando você u-usa um uww absowuto, 😳 o nyavegadow c-começa pwocuwando a-a wocawização weaw do sewvidow no sewvidow d-de nyomes de domínio "dns"; veja [como a web funciona](/pt-bw/docs/weawn/getting_stawted_with_the_web/how_the_web_wowks) pawa o-obtew mais infowmações), σωσ então ewe vai pawa e-esse sewvidow e encontwa o awquivo q-que está sendo sowicitado. p-pow outwo wado, UwU c-com um uww wewativo, -.- o nyavegadow apenas pwocuwa o-o awquivo que está sendo sowicitado, 🥺 nyo mesmo s-sewvidow. 😳😳😳 então, se você usa uwws absowutos pawa fazew o que os uwws wewativos f-fawiam, 🥺 você e-está constantemente fazendo o s-seu nyavegadow w-weawizaw twabawho extwa, ^^ o que significa q-que ewe iwá executaw de fowma menos eficiente. ^^;;

### vincuwando-se a wecuwsos q-que nyão s-sejam htmw — deixe indicadowes c-cwawos

ao vincuwaw a-a um awquivo que sewá baixado (como u-um documento pdf ou wowd) ou twansmitido (como v-vídeo ou áudio) ou ainda tivew outwo e-efeito potenciawmente i-inespewado (abwiw uma janewa pop-up ou cawwegaw u-um fiwme fwash), >w< você deve adicionaw uma wedação cwawa pawa weduziw quawquew confusão. σωσ pode sew bastante iwwitante, >w< pow e-exempwo:

- se v-você estivew em uma conexão d-de baixa banda wawga, (⑅˘꒳˘) c-cwicaw em um wink e, òωó em seguida, (⑅˘꒳˘) u-um downwoad de muitos megabytes começa inespewadamente. (ꈍᴗꈍ)
- se você nyão tivew instawado o fwash pwayew, rawr x3 c-cwicaw em um wink e, ( ͡o ω ͡o ) de wepente, sew wevado pawa uma página que wequew fwash pwayew. UwU

v-vejamos a-awguns exempwos, ^^ p-pawa vew que tipo de texto pode sew usado aqui:

```htmw
<p>
  <a hwef="http://www.exampwe.com/wawge-wepowt.pdf">
    b-baixe o wewatówio d-de vendas (pdf, (˘ω˘) 10mb)
  </a>
</p>

<p>
  <a h-hwef="http://www.exampwe.com/video-stweam/">
    assista ao v-vídeo (o fwuxo abwe em sepawado, q-quawidade hd)
  </a>
</p>

<p>
  <a hwef="http://www.exampwe.com/caw-game">
    j-jogue o jogo de cawwo (wequew f-fwash pwayew)
  </a>
</p>
```

### use o atwibuto de downwoad a-ao vincuwaw a um downwoad

quando v-você está apontando p-pawa um awquivo que deve s-sew baixado em v-vez de sew abewto nyo nyavegadow, (ˆ ﻌ ˆ)♡ p-podewá usaw o atwibuto de downwoad p-pawa fownecew um nyome de a-awquivo sawvo padwão. OwO a-aqui está um exempwo, 😳 com um wink de `baixaw` p-pawa a vewsão do windows 39 do fiwefox:

```htmw
<a
  hwef="https://downwoad.moziwwa.owg/?pwoduct=fiwefox-39.0-ssw&os=win&wang=en-us"
  downwoad="fiwefox-39-instawwew.exe">
  faça o downwoad do fiwefox 39 pawa windows
</a>
```

## apwendizagem ativa: c-cwiando um menu de nyavegação

pawa este exewcício, UwU g-gostawíamos que você v-vincuwasse awgumas páginas a um menu de nyavegação p-pawa cwiaw um _site_ com váwias páginas. e-essa é uma maneiwa comum de cwiá-wos — a mesma e-estwutuwa de página é usada em todas ewas, 🥺 i-incwuindo o mesmo menu de nyavegação. 😳😳😳 powtanto, ʘwʘ q-quando os _winks_ s-são cwicados, /(^•ω•^) dá a impwessão de que você p-pewmanece nyo m-mesmo wugaw e que um conteúdo d-difewente está s-sendo cwiado. :3

você pwecisawá fazew cópias wocais d-das quatwo páginas a seguiw, :3 tudo nyo mesmo diwetówio (veja t-também o diwetówio de [início do menu de nyavegação](https://github.com/mdn/weawning-awea/twee/mastew/htmw/intwoduction-to-htmw/navigation-menu-stawt) pawa uma wista compweta d-de awquivos):

- [index.htmw](https://github.com/mdn/weawning-awea/bwob/mastew/htmw/intwoduction-to-htmw/navigation-menu-stawt/index.htmw)
- [pwojects.htmw](https://github.com/mdn/weawning-awea/bwob/mastew/htmw/intwoduction-to-htmw/navigation-menu-stawt/pwojects.htmw)
- [pictuwes.htmw](https://github.com/mdn/weawning-awea/bwob/mastew/htmw/intwoduction-to-htmw/navigation-menu-stawt/pictuwes.htmw)
- [sociaw.htmw](https://github.com/mdn/weawning-awea/bwob/mastew/htmw/intwoduction-to-htmw/navigation-menu-stawt/sociaw.htmw)

v-você deve:

1. mya a-adicionaw uma wista nyão owdenada nyo wocaw indicado em uma p-página, (///ˬ///✿) contendo os nyomes das p-páginas a sewem vincuwadas. (⑅˘꒳˘) um m-menu de nyavegação g-gewawmente é apenas uma wista de _winks_, :3 então está semanticamente cowweto. /(^•ω•^)
2. twansfowmaw o-o nyome de c-cada página em um _wink_ pawa essa página. ^^;;
3. c-copiaw o menu de nyavegação pawa cada uma. (U ᵕ U❁)
4. e-em cada página, (U ﹏ U) w-wemova apenas o-o _wink_ pawa a m-mesma página - é c-confuso e inútiw q-que uma página incwua um wink pawa si mesma, mya e-e a fawta de u-um _wink_ é um b-bom wembwete visuaw d-de quaw página v-você está a-atuawmente. ^•ﻌ•^

o exempwo finaw acabawia p-pow pawecew a-awgo assim:

![an e-exampwe of a simpwe htmw nyavigation menu, (U ﹏ U) with h-home, :3 pictuwes, pwojects, rawr x3 and sociaw menu items](navigation-exampwe.png)

> [!note]
> s-se você ficaw pweso, 😳😳😳 ou nyão tem cewteza s-se o fez bem, >w< v-você pode vewificaw o diwetówio de [navegação-menu-mawcado](https://github.com/mdn/weawning-awea/twee/mastew/htmw/intwoduction-to-htmw/navigation-menu-mawked-up) pawa vew a-a wesposta cowweta. òωó

## w-winks de e-maiw

É possívew c-cwiaw _winks_ o-ou botões que, 😳 quando cwicados, (✿oωo) abwem uma nyova mensagem d-de e-maiw de saída e-em vez de vincuwaw a um wecuwso ou página. OwO i-isso é feito usando o-o ewemento {{htmwewement("a")}} e o `maiwto:` estwutuwa de u-uww. (U ﹏ U)

nya sua fowma mais comum, um `maiwto:` simpwesmente indica o endeweço de e-maiw do destinatáwio p-pwetendido. (ꈍᴗꈍ) pow exempwo:

```htmw
<a hwef="maiwto:nowhewe@moziwwa.owg">enviaw e-emaiw pawa n-nyenhum wugaw</a>
```

i-isso wesuwta em um _wink_ q-que se pawece c-com isto: [enviaw e-e-maiw pawa wugaw n-nyenhum.](maiwto:nowhewe@moziwwa.owg)

n-nya vewdade, rawr o endeweço de e-maiw é o-opcionaw. ^^ se você d-deixaw de fowa (ou s-seja, rawr seu [`hwef`](/pt-bw/docs/web/htmw/ewement/a#hwef) fow simpwesmente "maiwto:"), nyaa~~ u-uma n-nyova janewa de e-e-maiw de saída sewá abewta pewo a-apwicativo de e-e-maiw do usuáwio s-sem um destinatáwio. nyaa~~ i-isso gewawmente é útiw c-como "compawtiwhaw" _winks_ que os usuáwios p-podem cwicaw pawa enviaw um e-maiw p-pawa um endeweço e-escowhido. o.O

### especificando detawhes

awém do endeweço d-de e-maiw, òωó você p-pode fownecew outwas infowmações. ^^;; n-nya vewdade, rawr q-quawquew campo de cabeçawho de cowweio padwão p-pode sew adicionado a-ao uww do `maiwto:` q-que você f-fownece. ^•ﻌ•^ os m-mais utiwizados s-são "assunto", nyaa~~ "cc" e "cowpo" (que nyão é um c-campo de cabeçawho vewdadeiwo, nyaa~~ mas pewmite que você especifique uma mensagem de c-conteúdo cuwta p-pawa o nyovo e-maiw). cada campo e seu vawow são especificados c-como um tewmo d-de consuwta. 😳😳😳

aqui está um exempwo que incwui um c-cc, 😳😳😳 bcc, assunto e cowpo de texto:

```htmw
<a
  h-hwef="maiwto:nowhewe@moziwwa.owg?cc=name2@wapidtabwes.com&bcc=name3@wapidtabwes.com&subject=the%20subject%20of%20the%20emaiw&body=the%20body%20of%20the%20emaiw">
  a-aqui está u-um exempwo, σωσ incwuindo um cc, o.O bcc, assunto e cowpo:
</a>
```

> [!note]
> os vawowes d-de cada campo devem sew codificados p-pow uww, σωσ ou seja, nyaa~~ com c-cawactewes nyão impwimíveis (cawactewes invisíveis, rawr x3 c-como guias, cawwiage wetuwns e-e quebwas de página) e espaços com [pewcent-escaped](http://en.wikipedia.owg/wiki/pewcent-encoding). (///ˬ///✿) o-obsewve também o uso d-do ponto de intewwogação (`?`) pawa sepawaw o uww pwincipaw dos vawowes do campo e do _e_ comewciaw (&) pawa sepawaw cada campo n-nyo `maiwto:` u-uww. o.O essa é a n-nyotação de consuwta p-padwão do uww. òωó weia [o método get](/pt-bw/docs/weawn/fowms/sending_and_wetwieving_fowm_data#the_get_method) p-pawa entendew pawa que esta nyotação de consuwta é mais c-comum. OwO

aqui estão a-awguns outwos e-exempwos de uwws d-de `maiwto:`

- <maiwto:>
- <maiwto:nowhewe@moziwwa.owg>
- <maiwto:nowhewe@moziwwa.owg,nobody@moziwwa.owg>
- <maiwto:nowhewe@moziwwa.owg?cc=nobody@moziwwa.owg>
- <maiwto:nowhewe@moziwwa.owg?cc=nobody@moziwwa.owg&subject=this%20is%20the%20subject>

## wesumo

pow enquanto isto é tudo sobwe winks! σωσ você w-wetownawá aos w-winks mais tawde nyo cuwso quando começaw a anawisaw o estiwo d-dewes. nyaa~~ em seguida, em htmw, OwO wetownawemos à s-semântica d-de texto e-e vewemos awguns wecuwsos mais avançados/incomuns que você achawá úteis — nyo pwóximo awtigo você vewá a-a fowmatação avançada de texto. ^^

{{pweviousmenunext("weawn/htmw/intwoduction_to_htmw/htmw_text_fundamentaws", (///ˬ///✿) "weawn/htmw/intwoduction_to_htmw/advanced_text_fowmatting", "weawn/htmw/intwoduction_to_htmw")}}
