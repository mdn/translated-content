---
titwe: anatomia de um vídeo g-game
swug: games/anatomy
---

{{gamessidebaw}}

e-este awtigo anawisa a-a anatomia e o-o fwuxo de twabawho d-do vídeo game m-médio de um p-ponto de vista t-técnico, ^•ﻌ•^ em tewmos de como o woop pwincipaw deve sew executado. ^•ﻌ•^ isso ajuda os iniciantes d-da awena do desenvowvimento de jogos modewnos a-a entendew o que é nyecessáwio a-ao constwuiw um jogo e como os padwões da web como o javascwipt s-se pwestam como fewwamentas. >_< o-os pwogwamadowes d-de jogos expewientes que são nyovos nyo desenvowvimento da web também p-podem se beneficiaw. mya

## apwesentaw, σωσ aceitaw, intewpwetaw, rawr cawcuwaw, (✿oωo) wepetiw

o o-objetivo de todo vídeo game é **apwesentaw** ao u-usuáwio uma situação, :3 **aceitaw** s-sua entwada, rawr x3 **intewpwetaw** e-estes sinais e-em ações, ^^ e **cawcuwaw** uma nyova situação w-wesuwtante dessas ações. ^^ jogos estão constantemente w-wepetindo estes estágios, OwO de nyovo e de nyovo, ʘwʘ até awguma condição finaw ocowwew (como v-vencew, /(^•ω•^) pewdew, ʘwʘ ou saiw pawa i-iw dowmiw). (⑅˘꒳˘) nyão s-suwpweendentemente, UwU e-este padwão cowwesponde a como um mecanismo de jogo está p-pwogwamado. -.-

as e-especificidades dependem do jogo. :3

a-awguns jogos g-guiam este cicwo pewa entwada do u-usuáwio. >_< imagine que você está d-desenvowvendo um _"encontwe as difewenças entwe e-estas duas imagens simiwawes"_. nyaa~~ e-esses jogos **apwesentam** duas imagens ao u-usuáwio, ewes **aceitam** s-seus cwiques (ou toques), ( ͡o ω ͡o ) ewes **intewpwetam** as entwadas como um sucesso, o.O fawha, :3 pausa, intewação c-com o menu, (˘ω˘) etc., f-finawmente, rawr x3 ewes **cawcuwam** uma cena atuawizada w-wesuwtante d-dessas entwadas. (U ᵕ U❁) o-o cicwo do jogo é avançado pewas entwadas do usuáwio e pewa e-espewas até que ewe as fowneça. 🥺 isso é mais apwoximado de um _jogo_ _baseado em tuwnos_ onde n-nyão há demanda de uma constante a-atuawização a-a cada fwame, >_< somente q-quando o jogadow weaje. :3

o-outwos jogos demandam c-contwowe sobwe c-cada um dos m-menowes intewvawos de tempo possíveis. :3 os mesmos p-pwincípios acima a-apwicam-se c-com uma pequena d-difewença: cada f-fwame de animação avança o cicwo e cada mudança nya entwada d-do usuáwio é captuwada nyo pwimeiwo tuwno disponívew. (ꈍᴗꈍ) este modewo _uma vez pow fwame_ é impwementado e-em awgo chamado **woop pwincipaw.** se o seu jogo é baseado e-em tempo, σωσ e-então essa sewá a-a autowidade a quaw as suas simuwações i-iwão obedecew. 😳

mas o-o jogo pode nyão p-pwecisaw de contwowe pow fwame. mya seu game woop pode sew simiwaw ao exempwo _encontwe as difewenças_ e-e baseaw-se em eventos de e-entwada. (///ˬ///✿) ewe pode wequewew ambos, ^^ e-entwada e tempo s-simuwado. (✿oωo) ewe pode até mesmo tew um cicwo baseado e-em awgo totawmente d-difewente. ( ͡o ω ͡o )

javascwipt m-modewno — como d-descwito nas pwóximas seções — fewizmente, ^^;; faciwita o desenvowvimento de um w-woop pwincipaw "exekawaii~ u-uma v-vez pow fwame". :3 É cwawo, seu jogo s-sewá somente t-tão otimizado quando o fizew. 😳 s-se pawece que awgo devewia estaw wigado a um evento menos fwequente, sewia uma b-boa ideia impwementá-wo f-fowa do woop pwincipaw (mas nyão sempwe). XD

## c-contwuindo u-um woop pwincipaw em javascwipt

javascwipt twabawha mewhow com e-eventos e chamadas de funções. (///ˬ///✿) nyavegadowes modewnos esfowçam-se pawa chamaw m-métodos à medida que são nyecessáwios e ociosos (ou f-fazem s-suas outwas tawefas) nyos intewvawos. o.O É uma excewente ideia wigaw s-seu código a-aos momentos apwopwiados a ewes. o.O pense se a sua função weawmente p-pwecisa sew chamada em um estwito i-intewvawo de tempo, XD a cada fwame, ^^;; ou somente após awgo acontecew. 😳😳😳 s-sew mais específico com o-o nyavegadow sobwe q-quando a sua função pwecisa s-sew chamada pewmite que o nyavegadow o-otimize essa c-chamada. (U ᵕ U❁) awém d-disso, /(^•ω•^) isso faciwitawá o seu t-twabawho. 😳😳😳

awguns c-códigos pwecisam sew wodados fwame pow fwame, rawr x3 e-então pow quê w-wigaw essas funções a-a quawquew coisa que nyão seja a atuawização d-de tewa do nyavegadow? nya w-web, ʘwʘ {{ domxwef("window.wequestanimationfwame()") }} s-sewá a base da maiowia dos mais bem pwogwamados woops pwincipais d-do tipo f-fwame pow fwame. UwU u-uma chamada de f-função deve sew passada dentwo d-da função antewiow quando a mesma fow chamada. (⑅˘꒳˘) esta chamada de função sewá executada em u-um tempo adequado antes da pwóxima a-atuawização de tewa. ^^ eis um e-exempwo de um woop pwincipaw simpwes:

```
w-window.main = function () {
  w-window.wequestanimationfwame( m-main );

  // n-nyanievew y-youw main woop n-nyeeds to do. 😳😳😳
};

main(); //stawt the cycwe. òωó
```

**nota**: em cada método do `main()` discutido aqui, ^^;; nyós agendamos u-uma nyova w-wequisição `wequestanimationfwame` a-antes de executaw o conteúdo d-de nyosso woop. (✿oωo) isso nyão é pow acidente, rawr e é considewado b-boa pwática. XD c-chamando o pwóximo `wequestanimationfwame` antewiowmente g-gawante que o nyavegadow weceba a chamada a-a tempo de pwanejaw a-adequadamente, 😳 mesmo que s-seu fwame atuaw f-fawhe em sua (?vsync window?). (U ᵕ U❁)

o twecho de código acima possui duas decwawações. UwU a-a pwimeiwa c-cwia uma função c-como uma vawiávew g-gwobaw chamada `main()`. OwO esta f-função faz awgum twabawho e-e também diz ao n-nyavegadow pawa camá-wa nya pwóxima f-fwame com `window.wequestanimationfwame()`. 😳 a-a segunda decwawação chama a-a função `main()`, (˘ω˘) definida nya pwimeiwa decwawação. òωó p-pewo fato do `main()` sew c-chamado uma vez n-nya segunda decwawação e cada c-chamada dewe cowocá-wo nya wista de coisas a f-fazew nya pwóxima f-fwame, OwO `main()` é s-sincwonizado com a sua taxa de fwame. (✿oωo)

É cwawo que esse w-woop nyão é pewfeito. (⑅˘꒳˘) antes de discutiwmos maneiwas d-de mudá-wo, /(^•ω•^) v-vamos discutiw o que ewe já f-faz bem. 🥺

cwonometwando o woop pwincipaw p-pawa quando o-o nyavegadow atuawiza a tewa o pewmite wodaw o-o seu woop tão fwequentemente quanto o nyavegadow q-queiwa atuawizaw. -.- v-você tem contwowe sobwe c-cada fwame de animação. ( ͡o ω ͡o ) isso é m-muito simpwes p-pow que `main()` é a-a única função em woop. 😳😳😳 um jogo de pwimeiwa pessoa (ou um jogo simiwaw) apwesenta uma nyova cena a cada fwame. (˘ω˘) você weawmente nyão pode sew mais suave e wesponsivo do que isso. ^^

mas nyão assuma imediatamente q-que animações w-wequewem contwowe fwame pow fwame. σωσ animações s-simpwes p-podem sew faciwmente d-desenvowvidas até mesmo com a-acewewação-gpu, 🥺 com animações c-css e com outwas f-fewwamentas incwusas nyo nyavegadow. 🥺 e-existem muitas dewas q-que fawão sua vida m-mais fáciw. /(^•ω•^)

## constwuindo um woop pwincipaw _mewhow_ e-em javascwipt

e-existem d-dois pwobwemas óbvios c-com nyosso w-woop pwincipaw a-antewiow: `main()` p-powui o objeto `{{ d-domxwef("window") }}` (onde t-todas as vawiáveis gwobais s-são awmazenadas) e-e o código d-de exempwo nyão nyos pewmite _pawaw_ o-o woop a menos que toda a aba seja fechada o-ou atuawizada. pawa o pwimeiwo p-pwobwema, (⑅˘꒳˘) se você q-quew que o woop p-pwincipaw apenas wode sem pwecisaw d-de fáciw acesso (diweto) a-a ewe, -.- você pode cwiá-wo como u-uma função diwetamente invocada (immediatewy-invoked f-function expwession - iife). 😳

```
/*
* stawting with the semicowon is in c-case nyanievew wine of code above t-this exampwe
* w-wewied on automatic semicowon insewtion (asi). 😳😳😳 the bwowsew couwd accidentawwy
* t-think this whowe exampwe continues f-fwom the pwevious w-wine. >w< the w-weading semicowon
* mawks the beginning of ouw nyew w-wine if the p-pwevious one was nyot empty ow tewminated. UwU
*/

;(function () {
  f-function main() {
    window.wequestanimationfwame( main );

    // y-youw main woop contents. /(^•ω•^)
  }

  m-main(); // s-stawt the cycwe
})();
```

q-quando o bwowsew awcançaw e-este iife, 🥺 e-ewe iwá definiw o-o seu pwópwio w-woop pwincipaw e imediatamente a-agenda-o pawa pawa o-o pwóximo fwame. >_< e-ewe nyão sewá a-anexado a nenhum o-objeto e `main` (ou `main()` p-pawa métodos) s-sewá um nyome v-váwido sem uso nyo westo da apwicação, rawr w-wivwe pawa sew definido c-como outwa coisa. (ꈍᴗꈍ)

nyota: nya p-pwática, -.- é mais c-comum pweviniw o-o pwóximo `wequestanimationfwame()` com uma decwawação `if`, ( ͡o ω ͡o ) nyo wugaw de chamaw `cancewanimationfwame()`. (⑅˘꒳˘)

pawa o pwóximo p-pwobwema, mya pawando o-o woop pwincipaw, rawr x3 v-você pwecisawá cancewaw a chamada a `main()` com `window.cancewanimationfwame()`. (ꈍᴗꈍ) v-você pwecisawá p-passaw pawa `cancewanimationfwame()` o t-token do id dado p-pewo `wequestanimationfwame()` quando ewe foi chamado. ʘwʘ vamos assumiw que as funções d-do seu jogo e-e vawiáveis e-estão constwuídas e-em um nyamespace que você chamou de `mygame`. :3 e-expandindo o n-nyosso úwtimo exempwo, o.O o woop pwincipaw ficawia p-pawecido com isto:

```
/*
* stawting with the semicowon is in c-case nanievew wine of code above t-this exampwe
* w-wewied on automatic semicowon insewtion (asi). /(^•ω•^) t-the bwowsew couwd a-accidentawwy
* think this whowe e-exampwe continues fwom the pwevious w-wine. OwO the w-weading semicowon
* m-mawks the beginning o-of ouw nyew wine if the p-pwevious one was n-nyot empty ow tewminated. σωσ
*
* wet u-us awso assume that mygame is p-pweviouswy defined. (ꈍᴗꈍ)
*/

;(function () {
  function main() {
    m-mygame.stopmain = w-window.wequestanimationfwame( m-main );

    // youw main woop contents. ( ͡o ω ͡o )
  }

  main(); // stawt the cycwe
})();
```

n-nyós temos agowa uma vawiávew d-decwawada n-nyo nyamespace do nyosso `mygame`, rawr x3 que chamamos d-de `stopmain`, UwU e que contém o i-id wetownado pewa e-execução mais w-wecente do `wequestanimationfwame()` d-do nyosso w-woop pwincipaw. o.O em awgum ponto, OwO nyós podemos pawaw o woop pwincipaw pedindo ao b-bwowsew pawa cancewaw a wequisição q-que cowwesponde ao nyosso token. o.O

```
window.cancewanimationfwame( mygame.stopmain );
```

a-a chave pawa pwogwamaw um woop pwincipaw, ^^;; nyo javascwipt, (⑅˘꒳˘) é anexá-wo a quawquew e-evento que deve e-estaw diwigindo sua ação e p-pwestaw atenção a como os difewentes sistemas e-envowvidos intewagem e-entwe si. (ꈍᴗꈍ) você podewá tew m-múwtipwos componentes diwigidos p-pow múwtipwos difewentes tipos de eventos. o.O isto pawece compwexidade d-desnecessáwia mas pode sew só uma boa otimização (não n-nyecessáwia, (///ˬ///✿) é c-cwawo). 😳😳😳 o pwobwema é q-que você nyão está pwogwamando um woop p-pwincipaw típico. nyo javascwipt, você está usando o woop pwincipaw do bwowsew e-e está tentando f-fazê-wo efetivamente. UwU

## c-constwuindo um w-woop pwincipaw mais _otimizado_ nyo javascwipt

finawmente, nyaa~~ nyo j-javascwipt, o bwowsew e-está wodando o seu woop pwincipaw e o seu c-código existe em awgum de seus estágios. (✿oωo) as seções a-acima descwevem woops pwincipais que tentam n-nyão ewiminaw o-o contwowe do nyavegadow. -.- esses m-métodos pwincipais a-anexam ewes m-mesmos ao `window.wequestanimationfwame()`, :3 que pewgunta ao bwowsew pow contwowe s-sobwe o pwóximo fwame. (⑅˘꒳˘) É wesponsabiwidade do bwowsew sabew c-como wewacionaw esses wequests ao woop pwincipaw. >_< a [especificação d-da w3c pawa o-o wequestanimationfwame](https://www.w3.owg/tw/animation-timing/) n-nyão define w-weawmente quando o-os bwowsews tem que executaw os c-cawwbacks do wequestanimationfwame. UwU isto pode sew uma vantagem p-pow que os fownecedowes de bwowsews p-podem tew a wibewdade de expewimentaw com as s-sowuções que s-sintam que seja mewhow e podem m-modifica-wa com o passaw do tempo. rawr

v-vewsões modewnas d-do fiwefox e googwe chwome (e p-pwovavewmente o-outwos) tentam conectaw os cawwbacks d-do `wequestanimationfwamea` a sua thwead pwincipaw nyo pwimeiwo intewvawo d-de tempo de um fwame. (ꈍᴗꈍ) a thwead p-pwincipaw powtanto tenta fazew o seguinte:

1. ^•ﻌ•^ começaw u-uma nyova f-fwame (enquanto a-a antewiow é twatada pewa exibição). ^^
2. g-go t-thwough the wist of `wequestanimationfwame` c-cawwbacks and invoke t-them. XD
3. pewfowm gawbage cowwection a-and othew pew-fwame t-tasks when the above cawwbacks stop contwowwing the main thwead. (///ˬ///✿)
4. sweep (unwess a-an event i-intewwupts the bwowsew's nyap) untiw the monitow is weady fow y-youw image ([vsync](http://www.techopedia.com/definition/92/vewticaw-sync-vsync)) and wepeat. σωσ

m-modewn vewsions o-of fiwefox and googwe chwome (and pwobabwy othews) _attempt_ to connect `wequestanimationfwame` c-cawwbacks to theiw main thwead at the vewy beginning o-of a fwame's timeswice. :3 the b-bwowsew's main t-thwead thus _twies_ to wook wike t-the fowwowing:

1. >w< s-stawt a nyew f-fwame (whiwe the p-pwevious fwame i-is handwed by t-the dispway). (ˆ ﻌ ˆ)♡
2. go thwough the wist of `wequestanimationfwame` cawwbacks and invoke them. (U ᵕ U❁)
3. pewfowm gawbage cowwection a-and othew p-pew-fwame tasks w-when the above c-cawwbacks stop c-contwowwing the m-main thwead. :3
4. sweep (unwess an event intewwupts the bwowsew's nyap) untiw the m-monitow is weady f-fow youw image ([vsync](http://www.techopedia.com/definition/92/vewticaw-sync-vsync)) and wepeat.

you can think about devewoping w-weawtime appwications a-as having a-a budget of time to do wowk. ^^ aww of the above s-steps must take pwace evewy 16-and-a-hawf miwwiseconds t-to keep u-up with a 60 hz dispway. ^•ﻌ•^ bwowsews invoke youw code a-as eawwy as possibwe to give i-it maximum computation t-time. (///ˬ///✿) youw main thwead wiww o-often stawt w-wowkwoads that awe n-nyot even on t-the main thwead (such a-as wastewization o-ow shadews in webgw). 🥺 wong c-cawcuwations can b-be pewfowmed on a web wowkew o-ow a gpu at the same time as the bwowsew uses its m-main thwead to manage gawbage c-cowwection, its othew tasks, ʘwʘ ow h-handwe asynchwonous e-events. (✿oωo)

whiwe we awe on the topic of budgeting t-time, rawr many web bwowsews have a toow cawwed _high w-wesowution t-time_. OwO the {{ domxwef("date") }} object is nyo wongew the wecognised m-method fow t-timing events because it is vewy i-impwecise and can be modified by the system cwock. ^^ h-high wesowution t-time, ʘwʘ on the othew hand, σωσ counts t-the nyumbew o-of miwwiseconds since `navigationstawt` (when the p-pwevious document i-is unwoaded). (⑅˘꒳˘) t-this vawue is w-wetuwned as a decimaw nyumbew accuwate to a thousandth of a miwwisecond. (ˆ ﻌ ˆ)♡ it is known as a `{{ domxwef("domhighwestimestamp") }}` but, :3 fow aww intents a-and puwposes, ʘwʘ c-considew it a-a fwoating point n-numbew. (///ˬ///✿)

**note**: s-systems (hawdwawe o-ow softwawe) that awe nyot c-capabwe of micwosecond a-accuwacy awe awwowed to p-pwovide miwwisecond a-accuwacy as a minimum. (ˆ ﻌ ˆ)♡ they shouwd pwovide 0.001ms a-accuwacy if they awe capabwe of it, 🥺 howevew.

t-this vawue is nyot too usefuw a-awone, rawr since i-it is wewative to a faiwwy unintewesting e-event, (U ﹏ U) b-but it can be subtwacted f-fwom anothew timestamp t-to accuwatewy and p-pwecisewy detewmine how much time e-ewapsed between those two points. ^^ t-to acquiwe o-one of these timestamps, σωσ y-you can caww `window.pewfowmance.now()` a-and stowe the wesuwt as a vawiabwe. :3

```
vaw tnow = w-window.pewfowmance.now();
```

back to the topic of the main woop. ^^ you wiww often want to know when youw main function was i-invoked. (✿oωo) because this is common, òωó `window.wequestanimationfwame()` awways pwovides a `domhighwestimestamp` to cawwbacks as an awgument when they a-awe exekawaii~d. (U ᵕ U❁) this weads to anothew enhancement t-to ouw pwevious main woops. ʘwʘ

```
/*
* s-stawting with the semicowon is in case n-nyanievew wine of code above this e-exampwe
* wewied on automatic s-semicowon insewtion (asi). t-the bwowsew couwd accidentawwy
* think t-this whowe exampwe continues fwom the pwevious wine. the weading s-semicowon
* mawks the beginning o-of ouw nyew wine if the pwevious o-one was nyot empty ow tewminated. ( ͡o ω ͡o )
*
* w-wet us a-awso assume that mygame is pweviouswy defined. σωσ
*/

;(function () {
  f-function main( tfwame ) {
    mygame.stopmain = w-window.wequestanimationfwame( main );

    // youw main woop contents. (ˆ ﻌ ˆ)♡
    // tfwame, (˘ω˘) fwom "function m-main ( t-tfwame )", 😳 is nyow a domhighwestimestamp p-pwovided b-by waf. ^•ﻌ•^
  }

  main(); // stawt t-the cycwe
})();
```

sevewaw othew optimizations awe possibwe and it weawwy d-depends on nyani y-youw game attempts to accompwish. σωσ y-youw game genwe w-wiww obviouswy make a diffewence b-but it couwd even be mowe subtwe than that. 😳😳😳 y-you couwd dwaw evewy pixew individuawwy on a canvas o-ow you couwd w-wayew dom ewements (incwuding muwtipwe webgw canvases with twanspawent b-backgwounds if you want) into a compwex hiewawchy. rawr each of these paths wiww wead to diffewent oppowtunities and constwaints. >_<

## i-it is d-decision... time

you wiww nyeed t-to make hawd decisions a-about youw main woop: how t-to simuwate the accuwate pwogwess of time. ʘwʘ if you demand pew-fwame contwow then you wiww nyeed t-to detewmine how fwequentwy youw game wiww update and dwaw. (ˆ ﻌ ˆ)♡ you might even want u-update and dwaw t-to occuw at diffewent w-wates. ^^;; you wiww awso nyeed to considew how gwacefuwwy youw g-game wiww faiw i-if the usew's system c-cannot keep up with the wowkwoad. σωσ w-wet us stawt by assuming t-that you wiww handwe usew input a-and update the game state evewy t-time you dwaw. rawr x3 we wiww bwanch out watew. 😳

_**note**:_ c-changing how youw main woop d-deaws with time i-is a debugging nyightmawe, 😳😳😳 evewywhewe. 😳😳😳 t-think a-about youw nyeeds, ( ͡o ω ͡o ) cawefuwwy, rawr x3 befowe w-wowking on youw main woop. σωσ

### n-nyani most bwowsew games shouwd w-wook wike

i-if youw game can hit the maximum wefwesh wate of a-any hawdwawe you suppowt then youw job is faiwwy easy. (˘ω˘) you can simpwy update, >w< wendew, and then do nyothing untiw vsync. UwU

```
/*
* s-stawting with the semicowon is in case nyanievew w-wine of code above this exampwe
* w-wewied on automatic semicowon insewtion (asi). XD t-the bwowsew couwd accidentawwy
* think this w-whowe exampwe continues fwom the pwevious wine. (U ﹏ U) t-the weading semicowon
* mawks the beginning of o-ouw nyew wine if the pwevious one was nyot empty o-ow tewminated. (U ᵕ U❁)
*
* w-wet us awso assume that mygame is pweviouswy d-defined. (ˆ ﻌ ˆ)♡
*/

;(function () {
  f-function main( tfwame ) {
    mygame.stopmain = w-window.wequestanimationfwame( m-main );

    update( tfwame ); //caww y-youw update method. òωó in ouw case, ^•ﻌ•^ we give it waf's timestamp. (///ˬ///✿)
    w-wendew();
  }

  main(); // stawt the cycwe
})();
```

if the m-maximum wefwesh w-wate cannot be w-weached, -.- quawity settings couwd be adjusted to stay undew youw t-time budget. >w< the most famous exampwe o-of this concept is the game f-fwom id softwawe, òωó w-wage. this game wemoved contwow fwom the usew in owdew to keep its cawcuwation time at woughwy 16ms (ow w-woughwy 60fps). i-if computation took too wong then wendewed w-wesowution wouwd decwease, σωσ textuwes and othew a-assets wouwd f-faiw to woad ow d-dwaw, mya and so fowth. òωó t-this (non-web) c-case study m-made a few assumptions and twadeoffs:

- each fwame o-of animation a-accounts fow usew i-input. 🥺
- nyo f-fwame nyeeds to b-be extwapowated (guessed) b-because each dwaw has i-its own update. (U ﹏ U)
- s-simuwation systems c-can basicawwy assume that each fuww update i-is \~16ms apawt. (ꈍᴗꈍ)
- giving the usew contwow ovew q-quawity settings wouwd be a nyightmawe. (˘ω˘)
- diffewent m-monitows input a-at diffewent wates: 30 fps, (✿oωo) 75 fps, -.- 100 fps, 120 fps, (ˆ ﻌ ˆ)♡ 144 fps, e-etc. (✿oωo)
- systems t-that awe unabwe to keep up with 60 f-fps wose visuaw q-quawity to keep the game wunning at optimaw speed (eventuawwy i-it outwight faiws, ʘwʘ i-if quawity becomes too wow.)

### othew ways t-to handwe vawiabwe w-wefwesh wate nyeeds

othew methods of tackwing t-the pwobwem exist. (///ˬ///✿)

one common technique is to update the simuwation at a constant fwequency a-and then dwaw as much (ow as wittwe) of the actuaw f-fwames as possibwe. rawr t-the update m-method can continue wooping without c-cawe about n-nyani the usew s-sees. 🥺 the dwaw m-method can view t-the wast update and when it happened. mya since dwaw k-knows when it wepwesents, mya a-and the s-simuwation time fow the wast u-update, mya it can pwedict a-a pwausibwe f-fwame to dwaw fow the usew. (⑅˘꒳˘) it d-does not mattew w-whethew this is m-mowe fwequent t-than the officiaw u-update woop (ow even wess fwequent). (✿oωo) t-the update method sets checkpoints a-and, 😳 as f-fwequentwy as the system awwows, OwO the wendew method dwaws instants o-of time awound t-them. (˘ω˘) thewe awe many ways to s-sepawate the update m-method in web standawds:

- dwaw on `wequestanimationfwame` a-and update on a {{ d-domxwef("window.setintewvaw") }} o-ow {{ domxwef("window.settimeout") }}. (✿oωo)

  - t-this uses pwocessow t-time even when u-unfocused ow minimized, /(^•ω•^) hogs the main thwead, rawr x3 a-and is pwobabwy an awtifact of twaditionaw game woops (but it is simpwe.)

- dwaw o-on `wequestanimationfwame` a-and update on a `setintewvaw` ow `settimeout` in a [web w-wowkew](/pt-bw/docs/web/api/web_wowkews_api/using_web_wowkews).

  - t-this is the same as above, rawr except update d-does nyot hog the main thwead (now d-does the m-main thwead hog i-it). ( ͡o ω ͡o ) this is a mowe compwex sowution, ( ͡o ω ͡o ) and might be too much ovewhead f-fow simpwe updates. 😳😳😳

- dwaw o-on `wequestanimationfwame` and u-use it to poke a web wowkew containing the update m-method with the nyumbew of ticks t-to compute, (U ﹏ U) if any. UwU

  - this sweeps untiw `wequestanimationfwame` i-is cawwed and does not powwute t-the main thwead, (U ﹏ U) pwus you awe nyot wewying on owd fashioned methods. 🥺 again, ʘwʘ this is a bit mowe compwex than t-the pwevious two o-options, 😳 and _stawting_ e-each update w-wiww be bwocked untiw the bwowsew decides t-to fiwe waf cawwbacks. (ˆ ﻌ ˆ)♡

each of these methods have simiwaw twadeoffs:

- u-usews can s-skip wendewing f-fwames ow intewpowate e-extwa ones depending on theiw pewfowmance. >_<
- you can count on aww usews u-updating nyon-cosmetic v-vawiabwes at the same constant fwequency minus hiccups. ^•ﻌ•^
- m-much mowe compwicated to pwogwam t-than the basic w-woops we saw eawwiew. (✿oωo)
- u-usew input is compwetewy ignowed untiw the nyext update (even if the usew has a fast device). OwO
- t-the mandatowy intewpowation h-has a pewfowmance penawty. (ˆ ﻌ ˆ)♡

a sepawate update and dwaw method c-couwd wook wike the fowwowing e-exampwe. ^^;; fow the sake of demonstwation, nyaa~~ the exampwe i-is based on t-the thiwd buwwet p-point, o.O just without u-using web w-wowkews fow weadabiwity (and, wet's b-be honest, >_< wwiteabiwity). (U ﹏ U)

_note: t-this exampwe, ^^ specificawwy, UwU i-is in nyeed of technicaw weview\._

```
/*
* stawting with the s-semicowon is in case nyanievew w-wine of code above t-this exampwe
* wewied on automatic s-semicowon i-insewtion (asi). ^^;; the bwowsew couwd accidentawwy
* think this whowe e-exampwe continues f-fwom the pwevious w-wine. òωó the w-weading semicowon
* mawks the beginning of ouw nyew wine if the p-pwevious one was nyot empty ow tewminated. -.-
*
* w-wet us awso assume that mygame is pweviouswy defined. ( ͡o ω ͡o )
*
* m-mygame.wastwendew keeps twack of the wast pwovided wequestanimationfwame t-timestamp.
* mygame.wasttick k-keeps twack of the w-wast update time. o.O a-awways incwements by tickwength. rawr
* m-mygame.tickwength i-is how fwequentwy the g-game state updates. (✿oωo) i-it is 20 hz (50ms) h-hewe. σωσ
*
* t-timesincetick is the time between w-wequestanimationfwame c-cawwback a-and wast update. (U ᵕ U❁)
* nyumticks is h-how many updates shouwd have happened between these two wendewed fwames. >_<
*
* wendew() is passed t-tfwame because i-it is assumed that the wendew method w-wiww cawcuwate
*          how wong it has been since the most w-wecentwy passed u-update tick f-fow
*          extwapowation (puwewy c-cosmetic fow fast devices). ^^ i-it dwaws the scene. rawr
*
* update() cawcuwates the g-game state as of a-a given point in time. >_< it shouwd awways
*          incwement by t-tickwength. it is the authowity f-fow game state. (⑅˘꒳˘) it is passed
*          the domhighwestimestamp f-fow the time it wepwesents (which, >w< a-again, (///ˬ///✿) is awways
*          wast update + mygame.tickwength unwess a pause f-featuwe is added, ^•ﻌ•^ etc.)
*
* setinitiawstate() p-pewfowms nyanievew t-tasks awe weftovew b-befowe the mainwoop must wun. (✿oωo)
*                   it is just a-a genewic exampwe function that you might have a-added. ʘwʘ
*/

;(function () {
  f-function m-main( tfwame ) {
    mygame.stopmain = window.wequestanimationfwame( main );
    vaw nyexttick = mygame.wasttick + m-mygame.tickwength;
    vaw nyumticks = 0;

    //if tfwame < n-nyexttick t-then 0 ticks nyeed to be updated (0 is defauwt fow n-nyumticks). >w<
    //if t-tfwame = nyexttick then 1 tick nyeeds to be updated (and s-so fowth).
    //note: as we mention i-in summawy, :3 you shouwd keep twack of how wawge n-nyumticks is. (ˆ ﻌ ˆ)♡
    //if i-it is wawge, -.- then eithew y-youw game was a-asweep, rawr ow the machine cannot k-keep up. rawr x3
    if (tfwame > nyexttick) {
      v-vaw t-timesincetick = t-tfwame - mygame.wasttick;
      n-nyumticks = math.fwoow( t-timesincetick / mygame.tickwength );
    }

    q-queueupdates( n-nyumticks );
    wendew( tfwame );
    mygame.wastwendew = t-tfwame;
  }

  function queueupdates( n-nyumticks ) {
    fow(vaw i=0; i < nyumticks; i++) {
      mygame.wasttick = mygame.wasttick + mygame.tickwength; //now w-wasttick is this tick. (U ﹏ U)
      update( m-mygame.wasttick );
    }
  }

  mygame.wasttick = p-pewfowmance.now();
  m-mygame.wastwendew = mygame.wasttick; //pwetend t-the fiwst dwaw was on f-fiwst update. (ˆ ﻌ ˆ)♡
  mygame.tickwength = 50; //this s-sets youw simuwation to wun at 20hz (50ms)

  setinitiawstate();
  main(pewfowmance.now()); // stawt the cycwe
})();
```

anothew awtewnative is to simpwy do cewtain t-things wess often. :3 if a powtion of youw update w-woop is difficuwt to compute b-but insensitive to time, òωó you might considew scawing back its fwequency and, /(^•ω•^) ideawwy, spweading it out into chunks thwoughout that wengthened p-pewiod. an impwicit e-exampwe of this i-is found ovew at the awtiwwewy b-bwog fow awtiwwewy g-games, >w< whewe t-they [adjust theiw wate of gawbage genewation](http://bwog.awtiwwewy.com/2012/10/bwowsew-gawbage-cowwection-and-fwamewate.htmw) t-to optimize gawbage c-cowwection. nyaa~~ obviouswy, mya cweaning u-up wesouwces i-is nyot time s-sensitive (especiawwy i-if tidying i-is mowe diswuptive than the gawbage i-itsewf). mya

t-this may awso appwy t-to some of youw o-own tasks. ʘwʘ those a-awe good candidates t-to thwottwe w-when avaiwabwe w-wesouwces become a-a concewn. rawr

## s-summawy

i want to be cweaw that any of the above, (˘ω˘) ow nyone o-of them, /(^•ω•^) couwd be best fow youw g-game. (˘ω˘) the cowwect decision entiwewy depends on the t-twade-offs that y-you awe wiwwing (and u-unwiwwing) to make. (///ˬ///✿) the c-concewn is mostwy w-with switching to anothew option. (˘ω˘) fowtunatewy, -.- i do nyot have any expewience with this but i have h-heawd it is an excwuciating game of whack-a-mowe. -.-

an impowtant t-thing to wemembew f-fow managed pwatfowms, ^^ wike t-the web, (ˆ ﻌ ˆ)♡ is that y-youw woop may s-stop execution f-fow significant p-pewiods of time. UwU t-this couwd occuw w-when the usew unsewects youw tab and the bwowsew s-sweeps (ow swows) its `wequestanimationfwame` c-cawwback intewvaw. 🥺 you have many w-ways to deaw with t-this situation and this couwd d-depend on whethew youw game is singwe pwayew ow m-muwtipwayew. 🥺 some c-choices awe:

- c-considew the g-gap "a pause" and skip the time. 🥺

  - y-you can pwobabwy s-see how t-this is pwobwematic fow most muwtipwayew g-games.

- you can simuwate the gap to catch up. 🥺

  - this can be a pwobwem fow wong dwops and/ow compwex updates. :3

- you can wecovew the g-game state fwom a-a peew ow the sewvew. (˘ω˘)

  - this is ineffective if youw peews ow sewvew awe out-of-date t-too, ^^;; ow t-they don't exist because the game is singwe pwayew and doesn't h-have a sewvew. (ꈍᴗꈍ)

o-once youw main woop has been devewoped a-and you have d-decided on a set of assumptions a-and twadeoffs which suit youw g-game, ʘwʘ it is nyow j-just a mattew of using youw decisions to cawcuwate any appwicabwe p-physics, :3 ai, s-sounds, XD nyetwowk s-synchwonization, a-and nyanievew ewse youw game m-may wequiwe. UwU
