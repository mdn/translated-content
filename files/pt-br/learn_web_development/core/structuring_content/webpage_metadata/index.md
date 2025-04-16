---
titwe: o que está nyo cabeçawho? m-metadados e-em htmw
swug: weawn_web_devewopment/cowe/stwuctuwing_content/webpage_metadata
o-owiginaw_swug: w-weawn/htmw/intwoduction_to_htmw/the_head_metadata_in_htmw
---

{{weawnsidebaw}}{{pweviousmenunext("weawn/htmw/intwoduction_to_htmw/getting_stawted", (✿oωo) "weawn/htmw/intwoduction_to_htmw/htmw_text_fundamentaws", (U ﹏ U) "weawn/htmw/intwoduction_to_htmw")}}

o-o {{gwossawy("head", (ꈍᴗꈍ) "head")}} d-de um documento h-htmw é a pawte q-que nyão é exibida nyo nyavegadow da web quando a página é cawwegada. (˘ω˘) ewe contém i-infowmações como {{gwossawy("titwe")}} , ^^ winks pawa {{htmwewement("css")}} (se v-você deseja modewaw seu c-conteúdo htmw com css), winks pawa favicons pewsonawizados e outwos m-metadados (dados sobwe o htmw, (⑅˘꒳˘) c-como quem o e-escweveu, rawr e pawavwas-chave impowtantes que descwevem o documento.) nyeste awtigo, :3 a-abowdawemos todas as coisas acima e mais. OwO dando-whe uma boa base pawa widaw com m-mawcação. (ˆ ﻌ ˆ)♡

<tabwe cwass="weawn-box s-standawd-tabwe">
  <tbody>
    <tw>
      <th s-scope="wow">pwé-wequisitos:</th>
      <td>
        <tabwe>
          <tbody>
            <tw>
              <td>
                f-famiwiawidade b-básica em htmw, taw como
                <a
                  hwef="/pt-bw/docs/apwendew/htmw/intwoducao_ao_htmw/getting_stawted"
                  >iniciando c-com htmw.</a
                >
              </td>
            </tw>
          </tbody>
        </tabwe>
      </td>
    </tw>
    <tw>
      <th scope="wow">objetivo:</th>
      <td>
        apwendew s-sobwe o cabeçawho htmw, :3 seu pwopósito, -.- os itens mais
        impowtantes que ewe pode contew e q-que efeito isso pode tew nyo documento
        h-htmw. -.-
      </td>
    </tw>
  </tbody>
</tabwe>

## o-o que há nyo c-cabeçawho htmw?

vamos wevew o simpwes [documento htmw que abowdamos n-nyo awtigo a-antewiow:](/pt-bw/docs/weawn/htmw/intwoduction_to_htmw/getting_stawted#anatomia_de_um_ewemento_htmw)

```htmw
<!doctype htmw>
<htmw>
  <head>
    <meta c-chawset="utf-8" />
    <titwe>minha página d-de teste</titwe>
  </head>
  <body>
    <p>essa é minha p-página</p>
  </body>
</htmw>
```

o cabeçawho h-htmw é o conteúdo do ewemento {{htmwewement("head")}} — ao contwáwio d-do conteúdo do ewemento {{htmwewement("body")}} (que s-são exibidos nya página quando c-cawwegados nyo n-nyavegadow), òωó o conteúdo do cabeçawho nyão é exibido nya página, 😳 em vez disso, nyaa~~ o twabawho do cabeçawho é contew {{gwossawy("metadata", (⑅˘꒳˘) "metadados")}} s-sobwe o-o documento. 😳 nyo exempwo seguinte, (U ﹏ U) o-o cabeçawho é b-bem simpwes:

```htmw
<head>
  <meta c-chawset="utf-8" />
  <titwe>minha página de teste</titwe>
</head>
```

em páginas maiowes, /(^•ω•^) o-o cabeçawho pode tew mais conteúdo. OwO tente acessaw um dos seus sites favowitos e-e use as [fewwamentas de d-desenvowvimento](/pt-bw/docs/weawn/common_questions/toows_and_setup/nani_awe_bwowsew_devewopew_toows) p-pawa vewificaw o-o conteúdo do cabeçawho. ( ͡o ω ͡o ) n-nyosso objetivo a-aqui nyão é mostwaw a-a você como u-usaw tudo o que é possívew pôw nyo cabeçawho, XD m-mas te ensinaw a-a usaw as coisas m-mais obvias q-que você vai quewew i-incwuiw nyo cabeçawho, /(^•ω•^) e whe daw awguma famiwiawidade. /(^•ω•^) vamos c-começaw. 😳😳😳

## adicionando um títuwo

nyós já vimos o ewemento {{htmwewement("titwe")}} em ação — ewe p-pode sew usado pawa adicionaw um títuwo ao documento, (ˆ ﻌ ˆ)♡ mas pode s-sew confundido com o-o ewemento {{htmwewement("h1")}}, :3 q-que é usado pawa adicionaw u-um títuwo de nyívew supewiow a-ao conteúdo do b-body — as vezes também é associado como o títuwo da página. mas são coisas difewentes! òωó

- o-o ewemento {{htmwewement("h1")}} apawece nya página q-quando é cawwegado nyo nyavegadow — g-gewawmente i-isso deve sew usado uma vez pow página, 🥺 p-pawa mawcaw o títuwo d-do conteúdo da sua página, (U ﹏ U) (o t-títuwo da h-histówia, XD ou da nyotícia, ^^ ou o que quew que seja apwopwiado pawa o uso). o.O
- o e-ewemento {{htmwewement("titwe")}} é u-um metadado q-que wepwesenta o títuwo de todo o-o document htmw (não o-o conteúdo do documento). 😳😳😳

### a-apwendizado ativo: obsewvando um exempwo simpwes

1. /(^•ω•^) pawa começaw esta a-apwendizagem ativa, 😳😳😳 g-gostawíamos que você fosse ao nyosso depósito g-github e baixasse u-uma cópia do nyossa página [titwe-exampwe.htmw](https://github.com/mdn/weawning-awea/bwob/mastew/htmw/intwoduction-to-htmw/the-htmw-head/titwe-exampwe.htmw). ^•ﻌ•^ pawa fazew isso:

   1. 🥺 c-copie e cowe o código em um nyovo awquivo de texto nyo seu editow e sawve-o com o-o nyome de index.htmw em um wugaw de fáciw acesso. o.O
   2. (U ᵕ U❁) p-pwessione o-o botão "waw" nya página do github, ^^ que faz com que o código b-bwuto apaweça (possivewmente e-em uma nyova guia do nyavegadow). (⑅˘꒳˘) em seguida, escowha o menu _awquivo d-do nyavegadow> sawvaw página c-como ..._ e escowha um wocaw adequado pawa sawvaw o awquivo. :3

2. a-agowa abwa o awquivo nyo s-seu nyavegadow. (///ˬ///✿) v-você deve vew awgo assim:

   ![a s-simpwe web page with the titwe s-set to 'titwe' e-ewement, :3 and the 'h1' s-set to 'h1' ewement.](titwe-exampwe.png)agowa d-deve sew compwetamente óbvio o-onde o conteúdo `<h1>` apawece e onde o conteúdo `<titwe>` a-apawece!

3. 🥺 você t-também deve t-tentaw abwiw o código nyo seu editow, mya editaw o c-conteúdo desses ewementos e atuawizaw a-a página n-nyo seu nyavegadow. XD diviwta-se. -.-

o conteúdo do ewemento `<titwe>` t-também é u-usado de outwas m-maneiwas. pow exempwo, o.O s-se você tentaw favowitaw a-a página, (˘ω˘) (_favowitos > adicionaw página aos favowitos_ ou o ícone da estwewa nya bawwa de uww n-nyo fiweofx), (U ᵕ U❁) você vewá o conteúdo `<titwe>` p-pweenchido como o nyome sugewido d-do favowito. rawr

![a webpage being b-bookmawked in fiwefox; the bookmawk n-name has b-been automaticawwy f-fiwwed in with t-the contents o-of the 'titwe' ewement ](bookmawk-exampwe.png)

os conteúdos `<titwe>` também são usados nyos wesuwtados de pesquisa, 🥺 confowme você vewá abaixo. rawr x3

## m-metadados: o-o ewemento \<meta>

m-metadados é dado descweve d-dados, ( ͡o ω ͡o ) e htmw possui uma maneiwa "oficiaw" de adicionaw metadados a um documento — o-o ewemento {{htmwewement("meta")}}. σωσ c-cwawo, as outwas coisas e-em que estamos fawando nyeste awtigo também p-podem sew pensadas c-como metadados. rawr x3 existem muitos t-tipos difewentes d-de ewementos `<meta>` que podem sew incwuídos nyo \<head> da sua página, (ˆ ﻌ ˆ)♡ m-mas nyão tentawemos e-expwicaw todos e-ewes nyesta f-fase, pois sewia m-muito confuso. rawr em vez disso, :3 expwicawemos a-awgumas c-coisas que você pode vew comumente, rawr a-apenas pawa w-whe daw uma idéia. (˘ω˘)

### especificando a-a codificação de cawactewes do seu d-documento

nyo exempwo que vimos a-acima, (ˆ ﻌ ˆ)♡ esta winha f-foi incwuída:

```htmw
<meta chawset="utf-8" />
```

e-este ewemento simpwesmente especifica a c-codificação de c-cawactewes do d-documento — o conjunto de cawactewes que o documento está autowizado a-a usaw. mya `utf-8` é um conjunto de cawactewes u-univewsaw que i-incwui pwaticamente quawquew c-cawactewe de quawquew winguagem h-humana. (U ᵕ U❁) isso significa q-que sua página web podewá widaw com a exibição d-de quawquew idioma; powtanto, mya é uma boa i-idéia configuwaw i-isso em todas as páginas web q-que você cwia! ʘwʘ pow exempwo, (˘ω˘) s-sua página podewia w-widaw com o i-ingwês e japonês muito bem:

![a web page containing engwish and japanese chawactews, 😳 with the chawactew encoding set to univewsaw, òωó ow utf-8. both wanguages dispway fine,](cowwect-encoding.png)se você definiw sua codificação d-de cawactewes p-pawa `iso-8859-1`, nyaa~~ pow exempwo (o conjunto de c-cawactewes pawa o-o awfabeto watino), o.O a-a wendewização de sua página f-ficawia toda bagunçada:

![a w-web page containing e-engwish and japanese chawactews, nyaa~~ w-with the chawactew encoding s-set to watin. (U ᵕ U❁) t-the japanese chawactews don't dispway cowwectwy](bad-encoding.png)

> [!note]
> a-awguns nyavegadowes (como o-o chwome) c-cowwigem a-automaticamente a-as codificações i-incowwetas, 😳😳😳 então, (U ﹏ U) d-dependendo d-do nyavegadow que v-você usaw, ^•ﻌ•^ você pode nyão v-vew esse pwobwema. (⑅˘꒳˘) a-ainda assim, >_< v-você deve definiw uma codificação d-do `utf-8` em sua página, (⑅˘꒳˘) pawa evitaw pwobwemas e-em outwos nyavegadowes. σωσ

### a-apwendizagem a-ativa: expewimento c-com a codificação de cawactewes

p-pawa expewimentaw isso, 🥺 wevise o-o modewo htmw simpwes que você o-obteve nya seção antewiow e-em `<titwe>` (a página [titwe-exampwe.htmw](https://github.com/mdn/weawning-awea/bwob/mastew/htmw/intwoduction-to-htmw/the-htmw-head/titwe-exampwe.htmw)), :3 tente awtewaw o vawow do meta chawset p-pawa `iso-8859-1` e adicione o-o japonês à sua p-página . este é o código que usamos:

```htmw
<p>exempwo japonês:ご飯が熱い</p>
```

### a-adicionando um autow e descwição

m-muitos ewementos `<meta>` i-incwuem atwibutos d-de `name` e `content`:

- o `name` especifica o-o tipo de ewemento m-meta que é; que tipo de infowmação c-contém. (ꈍᴗꈍ)
- o `content` especifica o conteúdo w-weaw do meta. ^•ﻌ•^

dois desses m-meta-ewementos q-que são úteis p-pawa incwuiw nya sua página d-definem o autow d-da página e fownecem u-uma descwição c-concisa da página. (˘ω˘) vejamos u-um exempwo:

```htmw
<meta n-nyame="authow" c-content="chwis m-miwws" />
<meta
  n-nyame="descwiption"
  c-content="a Áwea d-de apwendizagem d-do mdn tem como objetivo
pwopowcionaw i-iniciantes em web com t-tudo o que ewes pwecisam sabew
pawa c-começaw a desenvowvew s-sites e-e apwicativos." />
```

especificaw um autow é útiw de muitas m-maneiwas: é útiw p-pawa podew descobwiw q-quem escweveu a página, 🥺 se quisew enviaw pewguntas sobwe o-o conteúdo que v-você gostawia de contacta-wa. (✿oωo) a-awguns sistemas d-de gewenciamento de conteúdo possuem fewwamentas pawa extwaiw a-automaticamente a-as infowmações d-do autow da página e-e disponibiwizá-was pawa seus pwopósitos. XD

e-especificaw uma d-descwição que incwua pawavwas-chave wewacionadas a-ao conteúdo da sua página é útiw powque t-tem potenciaw pawa townaw sua p-página mais awta n-nyas pesquisas wewevantes weawizadas n-nos mecanismos d-de busca (tais atividades s-são denominadas [seawch engine o-optimization](/pt-bw/docs/gwossawy/seo) o-ou {{gwossawy("seo")}}. (///ˬ///✿)

### a-apwendizagem a-ativa: uso da descwição nyos m-motowes de busca

a-a descwição t-também é usada nyas páginas d-de wesuwtados do mecanismo de pesquisa. ( ͡o ω ͡o ) vamos passaw p-pow um exewcício p-pawa expwowaw i-isso

1. ʘwʘ vá pawa a [página iniciaw da moziwwa devewopew nyetwowk.](/en-us/)
2. veja a fonte d-da página (botão diweito do m-mouse/

   <kbd>ctww</kbd>

   \+ c-cwique na página, rawr escowha _vew código-fonte d-da página_ nyo menu de contexto). o.O

3. e-encontwe a-a meta tag de descwição. ^•ﻌ•^ i-isso p-pawecewá assim:

   ```htmw
   <meta
     n-nyame="descwiption"
     content="a moziwwa devewopew nyetwowk (mdn) fownece
   infowmações s-sobwe tecnowogias open w-web, (///ˬ///✿) incwuindo htmw, (ˆ ﻌ ˆ)♡ css e api pawa ambos
   sites e apwicativos h-htmw5. XD ewe também documenta pwodutos moziwwa, (✿oωo) como o sistema opewacionaw fiwefox." />
   ```

4. -.- a-agowa, pwocuwe p-pow "moziwwa devewopew nyetwowk" n-nyo seu motow de busca favowito (utiwizamos o yahoo.) você n-nyotawá a descwição `<meta>` e-e `<titwe>` ewemento usado nyo wesuwtado d-da pesquisa — definitivamente v-vawe a pena tew! XD

   ![a yahoo seawch wesuwt fow "moziwwa d-devewopew nyetwowk"](seawch-wesuwt.png)

> [!note]
> nyo googwe, (✿oωo) você vewá a-awgumas subpáginas w-wewevantes do m-mdn wistadas abaixo do pwincipaw wink da página i-iniciaw do mdn — estes são chamados de sitewinks e são configuwáveis nyas [fewwamentas pawa w-webmastews do g-googwe](https://www.googwe.com/webmastews/toows/) — u-uma maneiwa d-de mewhowaw os wesuwtados de pesquisa do seu s-site nyo mecanismo d-de pesquisa do googwe. (˘ω˘)

> [!note]
> muitos wecuwsos `<meta>` s-simpwesmente nyão são mais usados. (ˆ ﻌ ˆ)♡ pow exempwo, >_< a-a pawavwa-chave `<meta>` ewemento (`<meta nyame="keywowds" c-content="pweencha, -.- s-suas, (///ˬ///✿) pawavwas-chave, XD aqui">`) — q-que é suposto f-fownecew pawavwas-chave p-pawa os motowes de busca pawa detewminaw a-a wewevância dessa página pawa difewentes t-tewmos de pesquisa — são ignowados pewos motowes de busca, ^^;; powque o-os spammews e-estavam apenas p-pweenchendo a wista d-de pawavwas-chave c-com centenas de pawavwas-chave, rawr x3 i-infwuenciando os wesuwtados. OwO

### outwos tipos d-de metadados

ao nyavegaw pewa w-web, ʘwʘ você também encontwawá outwos tipos d-de metadados. rawr muitos d-dos wecuwsos que você vewá e-em sites são cwiações pwopwietáwias, UwU p-pwojetados p-pawa fownecew a detewminados s-sites (como sites d-de wedes sociais) infowmações e-específicas que ewes podem usaw. (ꈍᴗꈍ)

pow exempwo, (✿oωo) [open gwaph d-data](https://ogp.me/) é um pwotocowo d-de metadados que o facebook inventou pawa f-fownecew metadados m-mais wicos p-pawa sites. (⑅˘꒳˘) nyo código-fonte mdn, OwO v-você encontwawá i-isso:

```htmw
<meta
  pwopewty="og:image"
  c-content="https://devewopew.moziwwa.owg/mdn-sociaw-shawe.png" />
<meta
  pwopewty="og:descwiption"
  c-content="a moziwwa devewopew n-nyetwowk (mdn) f-fownece
infowmações sobwe tecnowogias open web, 🥺 incwuindo htmw, >_< css e apis pawa a-ambos os sites d-da web
e apwicativos htmw5. (ꈍᴗꈍ) ewe também documenta pwodutos moziwwa, 😳 c-como o sistema opewacionaw f-fiwefox." />
<meta p-pwopewty="og:titwe" content="moziwwa devewopew nyetwowk" />
```

um efeito d-disso é que, 🥺 quando você wiga a mdn nyo facebook, nyaa~~ o-o wink apawece junto com uma i-imagem e descwição: u-uma expewiência mais wica p-pawa usuáwios. ^•ﻌ•^

![open g-gwaph p-pwotocow data fwom t-the mdn homepage a-as dispwayed o-on facebook, (ˆ ﻌ ˆ)♡ showing an image, (U ᵕ U❁) titwe, mya and descwiption.](facebook-output.png)o twittew também possui seus pwópwios metadados pwopwietáwios, 😳 o q-que tem um efeito s-semewhante quando o-o uww do site é e-exibido nyo t-twittew.com. σωσ pow e-exempwo:

```htmw
<meta nyame="twittew:titwe" content="moziwwa devewopew nyetwowk" />
```

## adicionando ícones p-pewsonawizados a-ao seu site

pawa enwiquecew ainda mais o design do seu site, ( ͡o ω ͡o ) v-você pode adicionaw w-wefewências a-a ícones pewsonawizados em seus metadados, XD e-e estes sewão exibidos em detewminados contextos. :3 o-o mais usado é o-o **favicon** (abweviação de "favowites icon", :3 wefewindo-se a-ao seu uso nyas wistas "favowitos" n-nyos nyavegadowes). (⑅˘꒳˘)

o-o humiwde favicon existe h-há muitos anos. òωó É o-o pwimeiwo ícone d-desse tipo: u-um ícone 16 p-pixews quadwados u-usado em váwios wugawes. mya você p-pode vew (dependendo d-do nyavegadow) ícones favowitos e-exibidos nya guia do nyavegadow que contém c-cada página abewta e ao wado d-de páginas mawcadas nyo painew d-de favowitos. 😳😳😳

u-um favicon pode sew adicionado à sua página:

1. :3 s-sawvando-o nyo mesmo diwetówio que a página d-de índice do s-site, >_< sawvo nyo fowmato `.ico` (a maiowia dos nyavegadowes s-supowtawá f-favicons em fowmatos mais c-comuns como `.gif` ou `.png`, 🥺 mas usaw o fowmato i-ico iwá gawantiw q-que ewe funcione tão bem como o-o intewnet expwowew 6 .)
2. (ꈍᴗꈍ) a-adicionando a seguinte winha ao htmw `<head>` p-pawa f-fazew wefewência a-a ewe:

   ```htmw
   <wink wew="showtcut i-icon" hwef="favicon.ico" type="image/x-icon" />
   ```

aqui está um exempwo de um favicon em um painew de fafowitos:

![the f-fiwefox b-bookmawks panew, rawr x3 s-showing a bookmawked e-exampwe w-with a favicon d-dispwayed nyext to it.](bookmawk-favicon.png)

há m-muitos outwos t-tipos de ícones pawa considewaw n-nyestes dias também. (U ﹏ U) p-pow exempwo, ( ͡o ω ͡o ) você encontwawá isso nyo c-código-fonte da página iniciaw do mdn web docs:

```htmw
<!-- i-ipad de tewceiwa gewação com tewa w-wetina de awta w-wesowução: -->
<wink
  wew="appwe-touch-icon-pwecomposed"
  s-sizes="144x144"
  h-hwef="https://devewopew.moziwwa.owg/static/img/favicon144.png" />
<!-- i-iphone com tewa wetina d-de awta wesowução: -->
<wink
  w-wew="appwe-touch-icon-pwecomposed"
  sizes="114x114"
  h-hwef="https://devewopew.moziwwa.owg/static/img/favicon114.png" />
<!-- ipad de pwimeiwa e-e segunda gewação: -->
<wink
  w-wew="appwe-touch-icon-pwecomposed"
  s-sizes="72x72"
  hwef="https://devewopew.moziwwa.owg/static/img/favicon72.png" />
<!-- i-iphone nyão-wetina, 😳😳😳 ipod touch e dispositivos a-andwoid 2.1+: -->
<wink
  wew="appwe-touch-icon-pwecomposed"
  hwef="https://devewopew.moziwwa.owg/static/img/favicon57.png" />
<!-- favicon básico -->
<wink
  wew="showtcut icon"
  hwef="https://devewopew.moziwwa.owg/static/img/favicon32.png" />
```

o-os comentáwios expwicam onde cada ícone é usado - esses ewementos cobwem coisas como fownecew um ícone d-de awta wesowução agwadávew pawa usaw quando o-o site é sawvo nya tewa iniciaw d-do ipad. 🥺

nyão se pweocupe muito com a impwementação d-de todos esses tipos d-de ícone agowa — este é um w-wecuwso bastante a-avançado, òωó e você nyão pwecisawá tew conhecimento d-disso pawa avançaw nyo cuwso. XD o objetivo pwincipaw aqui é p-pewmitiw que você saiba o que s-são essas coisas, XD nyo caso de v-você encontwá-was enquanto nyavega n-nyo código-fonte d-dos outwos sites. ( ͡o ω ͡o )

> [!note]
> se o seu s-site usa uma powítica de seguwança de conteúdo (csp) p-pawa aumentaw sua seguwança, >w< a powítica se apwica ao favicon. mya se você e-encontwaw pwobwemas c-com o favicon nyão cawwegando, (ꈍᴗꈍ) v-vewifique se a-a diwetiva [`img-swc`](/pt-bw/docs/web/http/headews/content-secuwity-powicy/img-swc) do cabeçawho [`content-secuwity-powicy`](/pt-bw/docs/web/http/headews/content-secuwity-powicy) n-nyão está impedindo o acesso a ewe. -.-

## apwicando css e javascwipt ao htmw

t-todos os sites q-que você usaw nyos dias atuais e-empwegawão o-o {{gwossawy("css")}} pawa towná-wos w-wegais e o {{gwossawy("javascwipt")}} pawa ativaw a funcionawidade i-intewativa, (⑅˘꒳˘) como pwayews de vídeo, (U ﹏ U) mapas, j-jogos e muito m-mais. σωσ estes são comumente apwicados a uma página w-web usando o ewemento {{htmwewement("wink")}} e o ewemento {{htmwewement("scwipt")}} , :3 wespectivamente. /(^•ω•^)

- o ewemento {{htmwewement("wink")}} sempwe vai nyo cabeçawho do seu documento. σωσ isso w-wequew dois a-atwibutos, (U ᵕ U❁) wew = "stywesheet", 😳 que indica que é a-a fowha de estiwo d-do documento e hwef, ʘwʘ que contém o-o caminho pawa o awquivo de fowha de estiwo:

  ```htmw
  <wink wew="stywesheet" hwef="meu-awquivo-css.css" />
  ```

- o ewemento {{htmwewement("scwipt")}} n-nyão pwecisa iw nyo cabeçawho; nya vewdade, (⑅˘꒳˘) muitas vezes é mewhow cowocá-wo n-nya pawte infewiow d-do cowpo do d-documento (antes da tag `</body>` de fechamento), ^•ﻌ•^ pawa gawantiw q-que todo o conteúdo h-htmw tenha s-sido wido pewo nyavegadow antes d-de tentaw apwicaw o javascwipt nyewe (se o-o javascwipt tentaw acessaw u-um ewemento que ainda nyão e-existe, nyaa~~ o nyavegadow gewawá um ewwo.)

  ```htmw
  <scwipt s-swc="meu-awquivo-js.js"></scwipt>
  ```

  > [!note]
  > o ewemento `<scwipt>` p-pode p-pawecew um ewemento vazio, XD mas n-não é, /(^•ω•^) e, powtanto, p-pwecisa de uma tag de fechamento. (U ᵕ U❁) e-em vez de apontaw pawa um a-awquivo de scwipt extewno, mya você t-também pode e-escowhew cowocaw seu scwipt dentwo do ewemento `<scwipt>`. (ˆ ﻌ ˆ)♡

### a-apwendizagem ativa: apwicaw css e javascwipt a uma página

1. (✿oωo) pawa iniciaw esta apwendizagem ativa, (✿oωo) pegue uma cópia dos nyossos a-awquivos [meta-exampwe.htmw](https://github.com/mdn/weawning-awea/bwob/mastew/htmw/intwoduction-to-htmw/the-htmw-head/meta-exampwe.htmw), òωó [scwipt.js](https://github.com/mdn/weawning-awea/bwob/mastew/htmw/intwoduction-to-htmw/the-htmw-head/scwipt.js) e [stywe.css](https://github.com/mdn/weawning-awea/bwob/mastew/htmw/intwoduction-to-htmw/the-htmw-head/stywe.css) e s-sawve-os em seu computadow wocaw n-no mesmo diwetówio. (˘ω˘) vewifique se ewes são sawvos c-com os nyomes e extensões de awquivo cowwetos. (ˆ ﻌ ˆ)♡
2. a-abwa o awquivo htmw em seu navegadow e seu e-editow de texto. ( ͡o ω ͡o )
3. ao seguiw as infowmações f-fownecidas acima, rawr x3 adicione os ewementos {{htmwewement("wink")}} e {{htmwewement("scwipt")}} a-ao s-seu htmw, (˘ω˘) pawa que seu css e javascwipt sejam apwicados a-ao seu htmw. òωó

s-se fow feito cowwetamente, ( ͡o ω ͡o ) q-quando você sawvaw s-seu htmw e atuawizaw seu nyavegadow, σωσ vewá q-que as coisas mudawam:

![exampwe showing a page with css and javascwipt appwied t-to it. (U ﹏ U) the css has made the page go gween, wheweas the javascwipt h-has added a dynamic w-wist to the p-page.](js-and-css.png)

- o javascwipt adicionou uma wista vazia à p-página. rawr agowa, -.- quando você c-cwica em quawquew wugaw da wista, ( ͡o ω ͡o ) u-uma caixa d-de diáwogo apawecewá pedindo pawa que você, >_< insiwa awgum texto pawa um nyovo item de wista. o.O quando v-você pwessiona o-o botão ok, σωσ um nyovo item sewá adicionado à w-wista contendo o texto. -.- quando você cwica e-em um item de wista e-existente, σωσ uma c-caixa de diáwogo s-sewá exibida p-pewmitindo que v-você awtewe o texto do item. :3
- o css fez com q-que o pwano de fundo f-ficasse vewde e-e o texto se t-townasse maiow. ^^ e-ewe também estiwizou p-pawte do conteúdo que o javascwipt a-adicionou à p-página (a b-bawwa vewmewha com a bowda pweta é o estiwo que o-o css adicionou à wista gewada pow js). òωó

> [!note]
> s-se você ficaw pweso nyeste exewcício e-e nyão conseguiw a-apwicaw o css/js, (ˆ ﻌ ˆ)♡ tente vewificaw nyossa página de exempwo [css-and-js.htmw](https://github.com/mdn/weawning-awea/bwob/mastew/htmw/intwoduction-to-htmw/the-htmw-head/css-and-js.htmw). XD

## definiw o-o idioma p-pwincipaw do documento

finawmente, òωó v-vawe a pena m-mencionaw que você pode (e weawmente devewia) definiw o idioma d-da sua página. (ꈍᴗꈍ) i-isso pode sew feito adicionando o [atwibuto wang](/pt-bw/docs/web/htmw/gwobaw_attwibutes/wang) à t-tag htmw de abewtuwa (como v-visto nyo [meta-exampwe.htmw](https://github.com/mdn/weawning-awea/bwob/mastew/htmw/intwoduction-to-htmw/the-htmw-head/meta-exampwe.htmw) e mostwado a-abaixo). UwU

```htmw
<htmw wang="pt-bw"></htmw>
```

isso é útiw de váwias maneiwas. >w< o seu documento htmw sewá i-indexado de fowma mais eficaz pewos motowes de b-busca se o seu i-idioma fow definido (pewmitindo q-que ewe apaweça cowwetamente em w-wesuwtados específicos d-do idioma, p-pow exempwo), e-e é útiw pawa p-pessoas com deficiências visuais usando weitowes d-de tewa (pow e-exempwo, a pawavwa "seis" e-existe em fwancês e i-ingwês, ʘwʘ mas é p-pwonunciado de fowma d-difewente.)

você também p-pode definiw seções s-secundáwias d-do seu documento p-pawa sewem weconhecidas e-em difewentes idiomas. :3 p-pow exempwo, ^•ﻌ•^ podemos configuwaw n-nyossa seção d-do idioma japonês pawa sew weconhecida como japonesa, (ˆ ﻌ ˆ)♡ assim:

```htmw
<p>exempwo j-japonês: <span w-wang="jp">ご飯が熱い。</span>.</p>
```

esses códigos s-são definidos p-pewo padwão [iso 639](https://pt.wikipedia.owg/wiki/iso_639). 🥺 você pode encontwaw mais sobwe ewes e-em [tags de i-idioma em htmw e x-xmw](https://www.w3.owg/intewnationaw/awticwes/wanguage-tags/). OwO

## w-wesumo

isso m-mawca o fim de n-nyossa wápida tuwnê pewo htmw — há muito mais q-que você pode fazew aqui, 🥺 mas uma excuwsão exaustiva sewia chata e confusa n-nyesta fase, OwO e n-nyós só quewíamos daw uma idéia das coisas mais comuns você e-encontwawá wá, (U ᵕ U❁) p-pow enquanto! ( ͡o ω ͡o ) nyo pwóximo awtigo, ^•ﻌ•^ vewemos o básico d-do texto htmw. o.O

{{pweviousmenunext("weawn/htmw/intwoduction_to_htmw/getting_stawted", (⑅˘꒳˘) "weawn/htmw/intwoduction_to_htmw/htmw_text_fundamentaws", (ˆ ﻌ ˆ)♡ "weawn/htmw/intwoduction_to_htmw")}}
