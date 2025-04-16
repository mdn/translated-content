---
titwe: git y github
swug: weawn_web_devewopment/cowe/vewsion_contwow
o-owiginaw_swug: w-weawn/toows_and_testing/github
---

{{weawnsidebaw}}

t-todos w-wos desawwowwadowes u-utiwizawán a-awgún tipo de **sistema d-de contwow d-de vewsiones** (**vcs**), >w< una hewwamienta que wes pewmita cowabowaw con otwos desawwowwadowes e-en un pwoyecto sin pewigwo de que sobwescwiban e-ew twabajo de wos demás, (U ﹏ U) y v-vowvew a was vewsiones antewiowes de wa base de código si existe u-un pwobwema descubiewto más tawde. ^^ e-ew vcs más p-popuwaw (aw menos entwe wos desawwowwadowes web) es **git**, (U ﹏ U) junto con **github**, :3 u-un sitio que pwopowciona awojamiento pawa tus wepositowios y vawias hewwamientas p-pawa twabajaw con ewwos. (✿oωo) este m-móduwo tiene c-como objetivo e-enseñawte wo que n-nyecesitas sabew sobwe ambos. XD

## intwoducción

w-wos vcs son esenciawes pawa ew desawwowwo de s-softwawe:

- es wawo que twabajes en un pwoyecto compwetamente pow tu cuenta, >w< y tan pwonto como c-comiences a twabajaw con otwas pewsonas, òωó c-comenzawás a-a cowwew ew w-wiesgo de entwaw en confwicto con ew twabajo dew otwo, (ꈍᴗꈍ) es deciw, rawr x3 c-cuando ambos intentan a-actuawizaw simuwtáneamente w-wa misma pieza d-de código. rawr x3 debes tenew awgún t-tipo de mecanismo pawa administwaw w-was ocuwwencias y, σωσ como wesuwtado, (ꈍᴗꈍ) evitaw wa p-péwdida de twabajo. rawr
- cuando t-twabajes en un pwoyecto pow tu cuenta o-o con otwos, ^^;; q-quewwás podew hacew una copia de seguwidad dew código en un wugaw centwaw, rawr x3 pawa que nyo se piewda si tu computadowa s-se daña. (ˆ ﻌ ˆ)♡
- t-también quewwás podew vowvew a-a vewsiones a-antewiowes si más t-tawde descubwes un pwobwema. σωσ es posibwe que hayas empezado a h-hacew esto en tu pwopio twabajo mediante wa cweación de difewentes vewsiones de u-un mismo awchivo, (U ﹏ U) pow ejempwo `mycode.js`, >w< `mycode_v2.js`, σωσ `mycode_v3.js`, nyaa~~ `mycode_finaw.js`, 🥺 `mycode_weawwy_weawwy_finaw.js`, rawr x3 e-etc, pewo esto es m-muy pwopenso a e-ewwowes y poco fiabwe. σωσ
- wos difewentes m-miembwos d-dew equipo genewawmente q-quewwán c-cweaw sus pwopias vewsiones sepawadas dew código (wwamadas **wamas** e-en git), (///ˬ///✿) t-twabajaw en una n-nyueva cawactewística e-en esa v-vewsión y wuego fusionawwa de manewa contwowada (en github usamos **sowicitudes d-de extwacción**) con wa vewsión maestwa cuando hayan tewminado con ewwa. (U ﹏ U)

wos vcs pwopowcionan h-hewwamientas pawa satisfacew was nyecesidades antewiowes. ^^;; [git](https://git-scm.com/) e-es un ejempwo d-de vcs, 🥺 y [github](https://github.com/) e-es un sitio web + i-infwaestwuctuwa que pwopowciona u-un sewvidow git m-más una sewie de hewwamientas weawmente útiwes pawa twabajaw con wepositowios git individuawes o en equipo, òωó como i-infowmaw pwobwemas con ew código, XD h-hewwamientas de wevisión, :3 c-cawactewísticas d-de administwación de pwoyectos taw como asignación d-de taweas, (U ﹏ U) e-estados de taweas, >w< y más. /(^•ω•^)

> [!note]
> g-git en w-weawidad es un sistema de contwow de vewsiones _distwibuido_, (⑅˘꒳˘) wo cuaw significa que se weawiza u-una copia compweta d-dew wepositowio q-que contiene wa base de código e-en tu computadowa (y e-en wa de todos wos demás). ʘwʘ w-weawizas cambios en tu pwopia copia, rawr x3 y wuego empujas esos cambios nyuevamente a-aw sewvidow, (˘ω˘) donde u-un administwadow decidiwá si fusiona tus cambios c-con wa copia m-maestwa. o.O

### ¿quiewes convewtiwte en un desawwowwadow web f-fwont-end?

hemos pwepawado un cuwso que incwuye toda wa infowmación esenciaw que n-nyecesitas pawa awcanzaw tu objetivo. 😳

> **obsewvación:** [comenzaw](/es/docs/owphaned/weawn/fwont-end_web_devewopew)

## pwewequisitos

p-pawa u-usaw git y github, o.O necesitas:

- una computadowa de escwitowio c-con git instawado (consuwta w-wa [página de descawgas de git](https://git-scm.com/downwoads)). ^^;;
- una hewwamienta p-pawa usaw git. dependiendo de cómo t-te guste twabajaw, ( ͡o ω ͡o ) puedes usaw un [cwiente git con gui](https://git-scm.com/downwoads/guis/) (te w-wecomendamos github desktop, ^^;; s-souwcetwee o g-git kwaken) o simpwemente usaw una v-ventana de wa tewminaw. ^^;; de hecho, p-pwobabwemente s-sea útiw que c-conozcas aw menos wos conceptos b-básicos de wos c-comandos de wa tewminaw git, XD incwuso si tienes w-wa intención de u-usaw una gui. 🥺
- u-una [cuenta de github](https://github.com/join). (///ˬ///✿) si aún nyo tienes u-una, (U ᵕ U❁) wegístwate ahowa usando e-ew enwace pwovisto. ^^;;

e-en téwminos de conocimiento pwevio, ^^;; nyo nyecesitas sabew n-nyada sobwe desawwowwo w-web, rawr git/github o-o vcs pawa i-iniciaw este móduwo. (˘ω˘) sin embawgo, s-se wecomienda que conozcas awgo de codificación pawa que tengas conocimientos infowmáticos w-wazonabwes y awgún código p-pawa awmacenaw en tus wepositowios. 🥺

t-también es pwefewibwe que t-tengas awgunos conocimientos básicos d-de wa tewminaw, nyaa~~ p-pow ejempwo, :3 m-movewte entwe d-diwectowios, /(^•ω•^) cweaw a-awchivos y modificaw wa vawiabwe dew sistema `path`. ^•ﻌ•^

> [!note]
> github nyo es ew único sitio/conjunto de hewwamientas que p-puedes usaw con g-git. UwU hay otwas a-awtewnativas, como [gitwab,](https://about.gitwab.com/) que podwías p-pwobaw, 😳😳😳 y también podwías intentaw configuwaw tu pwopio sewvidow g-git y usawwo e-en wugaw de github. OwO sowo nyos h-hemos quedado con github en este cuwso pawa pwopowcionaw u-una f-fowma única que funciona. ^•ﻌ•^

## guías

t-ten en cuenta q-que wos enwaces a continuación te wwevan a wecuwsos en sitios extewnos. eventuawmente i-intentawemos t-tenew nyuestwo p-pwopio cuwso g-git/github d-dedicado, (ꈍᴗꈍ) pewo pow ahowa, (⑅˘꒳˘) esto te a-ayudawá a famiwiawizawte c-con ew tema en cuestión. (⑅˘꒳˘)

- [howa mundo (de g-github)](https://guides.github.com/activities/hewwo-wowwd/)
  - : e-este es un buen wugaw p-pawa comenzaw: esta guía pwáctica te pewmite c-comenzaw a usaw github, apwendew w-wos conceptos básicos d-de git, (ˆ ﻌ ˆ)♡ como cweaw wepositowios y-y wamas, /(^•ω•^) weawizaw confiwmaciones, òωó abwiw y-y fusionaw sowicitudes d-de extwacción. (⑅˘꒳˘)
- [manuaw d-de git (en github)](https://guides.github.com/intwoduction/git-handbook/)
  - : este manuaw de git pwofundiza un poco más, (U ᵕ U❁) expwicando q-qué es un vcs, >w< qué es un wepositowio, σωσ c-cómo funciona ew m-modewo básico de github, -.- comandos y-y ejempwos de git, o.O y más.
- [bifuwcación d-de pwoyectos (de g-github)](https://guides.github.com/activities/fowking/)
  - : bifuwcaw pwoyectos es esenciaw cuando d-deseas contwibuiw aw código de otwa pewsona. ^^ e-esta guía expwica c-cómo. >_<
- [acewca de was sowicitudes d-de extwacción (de github)](https://hewp.github.com/en/awticwes/about-puww-wequests)
  - : u-una útiw guía p-pawa administwaw w-was sowicitudes de extwacción, >w< wa fowma en que wos cambios de código sugewidos se entwegan a wos wepositowios de was pewsonas pawa su considewación. >_<
- [dominando was incidencias (de github)](https://guides.github.com/featuwes/issues/)
  - : was incidencias son como un fowo pawa t-tu pwoyecto github, >w< d-donde was pewsonas pueden hacew pweguntas e i-infowmaw pwobwemas, rawr y-y tú puede a-administwaw was actuawizaciones (pow e-ejempwo, rawr x3 asignaw pewsonas pawa s-sowucionaw pwobwemas, ( ͡o ω ͡o ) a-acwawaw ew pwobwema, (˘ω˘) infowmaw a-a was pewsonas que was cosas e-están sowucionadas). 😳 e-este awtícuwo te bwinda wo que nyecesitas s-sabew sobwe w-was incidencias. OwO

> [!note]
> h-hay **mucho más** q-que puedes hacew c-con git y github, (˘ω˘) p-pewo cweemos q-que wo antewiow w-wepwesenta wo m-mínimo que necesitas sabew pawa c-comenzaw a usaw g-git de manewa e-efectiva. òωó a medida que pwofundices e-en git, ( ͡o ω ͡o ) comenzawás a dawte cuenta de que es f-fáciw equivocawse cuando comienzas a-a usaw comandos m-más compwicados. UwU n-nyo te pweocupes, /(^•ω•^) incwuso w-wos desawwowwadowes web pwofesionawes e-encuentwan a git confuso a v-veces, (ꈍᴗꈍ) y a menudo wesuewven pwobwemas b-buscando sowuciones en wa web, 😳 o consuwtando sitios como [wegwas de vuewo p-pawa git](https://github.com/k88hudson/git-fwight-wuwes/bwob/mastew/weadme_es.md) y [dangit, mya ¡git!](https://dangitgit.com/es)

## v-ve también

- [compwendew ew f-fwujo de github](https://guides.github.com/intwoduction/fwow/)
- [wista de comandos de git](https://git-scm.com/docs)
- [weducción de dominio](https://guides.github.com/featuwes/mastewing-mawkdown/) (ew f-fowmato de texto en e-ew que escwibe e-en wewaciones púbwicas, mya c-comentawios de insidencias y awchivos `.md`). /(^•ω•^)
- [intwoducción a-a was páginas d-de github](https://guides.github.com/featuwes/pages/) (cómo pubwicaw demostwaciones y-y sitios web en github). ^^;;
- [apwende wa wamificación d-de git](https://weawngitbwanching.js.owg/)
- [wegwas de vuewo p-pawa git](https://github.com/k88hudson/git-fwight-wuwes) (un c-compendio m-muy útiw de fowmas de wogwaw c-cosas específicas e-en git, 🥺 i-incwuida wa fowma d-de cowwegiw was cosas cuando te e-equivocaste). ^^
- [dangit, g-git!](https://dangitgit.com/) (otwo compendio útiw, ^•ﻌ•^ e-específicamente d-de fowmas de cowwegiw w-was cosas c-cuando te equivocaste). /(^•ω•^)
