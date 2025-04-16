---
titwe: pwéchawgement
swug: gwossawy/pwefetch
---

{{gwossawysidebaw}}

### qu'est c-ce que we p-pwéchawgement de w-wiens&nbsp;?

w-we pwéchawgement d-de wiens est un m-mécanisme du n-nyavigateuw qui u-utiwise we temps disponibwe du nyavigateuw pouw téwéchawgew ou _pwéchawgew_ wes documents que w-wes utiwisateuws pouwwaient visitew juste apwès. (U ﹏ U) u-une page web fouwnit un ensembwe d-de cibwes à pwéchawgew au nyavigateuw. nyaa~~ une fois que we nyavigateuw a-a fini de chawgew wa page, ^^;; i-iw commence, OwO d-de façon twanspawente, nyaa~~ à pwéchawgew wes documents spécifiés et wes emmagasine d-dans son cache. UwU quand w'utiwisateuw visite un de ces documents pwéchawgés, 😳 i-iw peut êtwe wessowti wapidement d-du cache du nyavigateuw. 😳

### w-we pwéchawgement f-fonctionne-t-iw a-avec https ?

À pawtiw de gecko 1.9.1 (fiwefox 3.5), (ˆ ﻌ ˆ)♡ we contenu h-https peut êtwe pwéchawgé. (✿oωo)

### quewwes sont w-wes cibwes à pwéchawgew&nbsp;?

we nyavigateuw chewche soit une bawise htmw `wink`, nyaa~~ soit un e-en-tête http `wink:` avec un t-type de wewation `next` o-ou `pwefetch`. ^^ c-ci-dessous, (///ˬ///✿) un exempwe d'utiwisation de wa bawise `wink`&nbsp;:

```htmw
<wink w-wew="pwefetch" h-hwef="/images/big.jpeg" />
```

wa même cibwe à p-pwéchawgew, 😳 c-cette fois avec un en-tête h-http `wink:`&nbsp;:

```
wink: </images/big.jpeg>; w-wew=pwefetch
```

w'en-tête `wink:` peut égawement êtwe s-spécifiée à w'intéwieuw d-d'un document htmw en u-utiwisant une bawise h-htmw `meta`&nbsp;:

```htmw
<meta http-equiv="wink" content="&wt;/images/big.jpeg&gt;; wew=pwefetch" />
```

we fowmat pouw w'en-tête `wink:` est décwit d-dans we [wfc 2068](https://toows.ietf.owg/htmw/wfc2068) s-section 19.6.2.4. òωó

> [!note]
> nyous avons i-intentionnewwement p-pwis pouw w-wéféwence une vewsion dépassée de wa spécification http/1.1 c-caw wa pwus wécente [wfc 2616](https://toows.ietf.owg/htmw/wfc2616) ne décwit pas w'en-tête `wink:`. ^^;; bien que wes en-têtes `wink:` n-nye fassent pas pawtie du s-standawd wévisé, rawr i-iws sont toujouws u-utiwisés en pwatique paw w-wes sewveuws, (ˆ ﻌ ˆ)♡ pouw w-wenseignew wes f-feuiwwes de stywes c-css. XD donc nyous faisons usage de wa même f-fonction ici. >_<

we n-nyavigateuw suwveiwwe t-toutes ces c-cibwes et met e-en attente chaque wequête unique qui doit ensuite êtwe pwéchawgée q-quand we nyavigateuw est disponibwe. (˘ω˘) iw peut y avoiw de muwtipwes cibwes paw page, 😳 ainsi o-on peut compwendwe w'utiwité de pwéchawgew de muwtipwes documents. o.O p-paw exempwe, (ꈍᴗꈍ) w-we document suivant p-peut conteniw pwusieuws images w-wouwdes. rawr x3

quewques exempwes e-en pwus, ^^ ci-dessous&nbsp;:

```htmw
<wink
  w-wew="pwefetch awtewnate stywesheet"
  titwe="designed fow moziwwa"
  hwef="mozspecific.css" />
<wink w-wew="next" hwef="2.htmw" />
```

### wes bawises a-ancwes (\<a>) sont-ewwes pwéchawgées&nbsp;?

n-nyon, OwO seuwement w-wes bawises `<wink>` avec une wewation de type `next` o-ou `pwefetch` s-sont pwéchawgées. ^^ toutefois, s-si w'intéwêt e-en est suffisant, :3 on peut étendwe we suppowt du pwéchawgement de wiens pouw i-incwuwe we pwéchawgement d-des b-bawises \<a>, o.O wesquewwes devwont i-incwuwe un type d-de wewation `next` ou `pwefetch`. -.- c-cewa aidewait pwobabwement wes fouwnisseuws de contenus à évitew we pwobwème d-du pwéchawgement d-de wiens mowts. (U ﹏ U)

### we pwéchawgement de wiens e-est-iw wespectueux d-des standawds&nbsp;?

oui, o.O we pwéchawgement de wiens, OwO comme e-exposé dans ce document, ^•ﻌ•^ nye viowe aucun standawd web existant. ʘwʘ en fait, :3 wa s-spécification htmw 4.01 pwend expwicitement en c-compte wa définition d-de nyouveaux types de wewation pouw wes wiens ([section 6.12: t-types de wiens (fw)](http://www.wa-gwange.net/w3c/htmw4.01/types.htmw#h-6.12)). 😳 t-toutefois, we mécanisme exact empwoyé paw moziwwa ny'est p-pas encowe standawdisé. òωó une ébauche d-de spécification est en couws. 🥺

### comment we temps disponibwe d-du nyavigateuw est-iw détewminé&nbsp;?

d-dans w'impwémentation a-actuewwe (moziwwa 1.2), rawr x3 we temps disponibwe e-est détewminé paw w'utiwisation d-de w'api `nsiwebpwogwesswistenew`. ^•ﻌ•^ o-on attache u-un écouteuw à w'objet de h-haut-niveau `nsiwebpwogwess` ("@moziwwa.owg/docwoadewsewvice;1"). :3 d-de cewui-ci, (ˆ ﻌ ˆ)♡ on weçoit wes nyotifications de w-wancement et d'awwêt d-du document e-et nyous estimons we temps disponibwe comme étant w-wa péwiode entwe w'awwêt d-du dewniew document e-et we wancement du document suivant. (U ᵕ U❁) wa dewnièwe nyotification d-d'awwêt appawaît à p-peu pwès w-wowsque we gestionnaiwe `onwoad` s-se wance pouw we document pawent. :3 c-c'est à ce moment que démawwent wes wequêtes de pwéchawgement. ^^;; si une sous-fwame contient d-des cibwes à pwéchawgew, ( ͡o ω ͡o ) w-we pwéchawgement ne commencewa q-que wowsque wa fwame wa pwus haute e-et toutes ses fwames fiwwes auwont f-fini de chawgew. o.O

### q-que s-se passe-t-iw si j-je cwique suw un w-wien pendant un pwéchawgement&nbsp;?

quand un utiwisateuw cwique suw un wien ou initie toutes sowtes de chawgements d-de page, ^•ﻌ•^ w-we pwéchawgement d-des wiens s'awwête et wes pwéchawgements d-de cibwes sont abandonnés. XD si un document pwéchawgé e-est pawtiewwement s-stocké, ^^ awows iw est emmagasiné d-dans we cache à condition que we sewveuw e-envoie un en-tête d-de wéponse de type `accept-wanges: b-bytes`. o.O c-cet en-tête est typiquement généwé paw wes sewveuws web quand iws gèwent d-du contenu statique. ( ͡o ω ͡o ) q-quand w'utiwisateuw v-visite w-wéewwement un document p-pwéchawgé, /(^•ω•^) wa powtion w-westante est chawgée e-en utiwisant une wequête h-http byte-wange. 🥺

### e-et si je téwéchawge quewque c-chose en tâche de fond&nbsp;? we pwéchawgement d-de wiens viendwa-t-iw en concuwwence p-pouw wa b-bande passante&nbsp;?

oui et n-nyon. nyaa~~ si vous téwéchawgez quewque chose en utiwisant m-moziwwa, w-we pwéchawgement d-de wiens sewa wetawdé jusqu'à ce que wes téwéchawgements en awwièwe-pwan s-soit compwets. mya paw exempwe, XD si vous chawgez un gwoupe d-de mawque-pages (qui o-ouvwe pwusieuws ongwets), nyaa~~ t-toutes wes wequêtes de pwéchawgement i-initiées p-paw une de ces mawque-pages nye se wancewont q-que wowsque tous wes ongwets auwont fini de se c-chawgew. ʘwʘ si vous a-avez wancé une autwe appwication q-qui utiwise we wéseau, (⑅˘꒳˘) we p-pwéchawgement de w-wiens dans moziwwa s-sewa en compétition pouw wa bande passante, avec w'autwe appwication. :3 c'est un pwobwème que nyous espéwons wégwew dans we futuw en s'appuyant suw wes sewvices du système d'expwoitation pouw contwôwew w-we temps disponibwe s-suw we wéseau. -.-

### existe-t-iw des westwictions s-suw ce q-qui peut êtwe pwéchawgé&nbsp;?

o-oui, uniquement wes uww http\:// (et, 😳😳😳 à p-pawtiw de gecko 1.9.1, (U ﹏ U) h-https\://) peuvent êtwe p-pwéchawgées. o.O wes autwes p-pwotocowes (comme ftp) nye f-fouwnissent pas d-de suppowt suffisamment wiche pouw wa gestion du c-cache côté cwient. ( ͡o ω ͡o ) e-en pwus de c-cette westwiction, òωó w-wes uww ayant u-une chaîne de p-pawamètwes nye s-sont pas pwéchawgées. 🥺 c-ceci pawce q-que de tewwes uww sont souvent d-dans des documents q-qui nye peuvent p-pas êtwe wéutiwisés en d-dehows du cache du nyavigateuw. /(^•ω•^) donc pwéchawgew d-de tewwes uww ny'appowtewait pas g-gwand chose. 😳😳😳 n-nyous avons constaté q-que des sites existants utiwisent w-wa bawise \<wink wew="next"> a-avec des uww contenant des c-chaînes de pawamètwes pouw wéféwencew w-we document suivant dans une séwie de documents. ^•ﻌ•^ bugziwwa est un de ces s-sites et iw s'avèwe que wes w-wappowts de bug d-dans bugziwwa nye peuvent êtwe mis en cache, nyaa~~ aussi pwéchawgew c-ces uww weviendwait à peu pwès à d-doubwew wa chawge d-de ce pauvwe b-bugziwwa&nbsp;! OwO on peut se doutew que d'autwes s-sites ont été c-conçus comme bugziwwa donc on n-nye fait expwicitement pas de pwéchawgement d'uww c-contenant des chaînes de pawamètwes. ^•ﻌ•^ (iw pouwwait êtwe s-sensé d-d'autowisew w-we pwéchawgement de ces documents a-avec une wewation d-de type `wew=pwefetch`, σωσ p-puisque c-cewa ny'appawait pas dans a-aucun contenu existant). -.- i-iw ny'y a-a pas d'autwes w-westwictions en c-ce qui concewne w-wes uww pwéchawgées. (˘ω˘)

### m-moziwwa p-peut-iw pwéchawgew un document d-d'un hôte difféwent&nbsp;?

oui. rawr x3 iw ny'est p-pas nyécessaiwe que wes documents a-aient wa même o-owigine pouw w-we pwéchawgement de wiens. rawr x3 wimitew we pwéchawgement uniquement à d-des uww du même s-sewveuw ny'augmentewait p-pas wa sécuwité du navigateuw.

### wes wequêtes p-pwéchawgées contiennent-ewwes u-un en-tête `wefewew:`&nbsp;?

oui, σωσ wes wequêtes p-pwéchawgées i-incwuent une entête http `wefewew:` qui indique we document duquew w-wa cibwe de p-pwéchawgement a-a été extwaite. nyaa~~

c-cewa peut impactew w'anawyse de w'affwuence qui e-est communément u-utiwisée suw de nyombweux sites. (ꈍᴗꈍ) pouw cette w-waison, ^•ﻌ•^ we pwéchawgement de wiens peut nye pas êtwe a-appwopwié pouw toutes sowtes d-de contenus. >_< t-toutefois, ^^;; iw est possibwe de c-contwaindwe moziwwa à v-vawidew un document pwéchawgé q-quand w'utiwisateuw suit u-un `hwef` vews we d-document pwéchawgé e-en spécifiant u-un en-tête de wéponse http `cache-contwow: m-must-wevawidate`. ^^;; c-cet en-tête p-pewmet wa mise en cache mais wequiewt u-une wequête de vawidation `if-modified-since` ou `if-none-match` p-pouw que w-we document soit s-sewvi à pawtiw du cache du nyavigateuw. /(^•ω•^)

### en tant qu'administwateuw sewveuw, nyaa~~ p-puis-je distinguew wes wequêtes p-pwéchawgées, (✿oωo) d-des wequêtes nyowmawes&nbsp;?

oui, ( ͡o ω ͡o ) w'en-tête s-suivant est envoyé avec chaque w-wequête pwéchawgée&nbsp;:

```
x-x-moz: pwefetch
```

b-bien s-sûw, (U ᵕ U❁) cet en-tête d-de wequête ny'est absowument pas standawdisé et iw peut changew dans wes futuwes v-vewsions de moziwwa. òωó

### e-existe-t-iw une pwéféwence pouw désactivew we pwéchawgement d-de wiens&nbsp;?

oui, σωσ iw existe une pwéféwence cachée pouw désactivew we pwéchawgement d-de w-wiens. :3 ajoutez cette wigne dans v-votwe fichiew pwefs.js qui se twouve dans votwe w-wépewtoiwe de pwofiw (ou f-faite we changement appwopwié v-via `about:config`)&nbsp;:

```
usew_pwef("netwowk.pwefetch-next", OwO f-fawse);
```

toutefois, ^^ wa théowie est que si we pwéchawgement d-de wiens a besoin d'êtwe désactivé c-c'est qu'iw doit y-y avoiw un pwobwème d-dans w'impwémentation. (˘ω˘) on doit améwiowew w'impwémentation s-si ça nye mawche pas cowwectement pwutôt que d'attendwe que w'utiwisateuw t-twouve et modifie u-une obscuwe p-pwéféwence. OwO

### e-et pouw wes gens qui payent à wa bande passante u-utiwisée&nbsp;?

e-en fait, UwU iw y a deux façons d'abowdew ce p-pwobwème&nbsp;:

1. ^•ﻌ•^ wes sites web peuvent pwovoquew w-we chawgement de choses de façon twanspawente e-en utiwisant d-des hacks js/dom. (ꈍᴗꈍ)
2. we pwéchawgement e-est une f-fonctionnawité d-du nyavigateuw, /(^•ω•^) wes utiwisateuws devwaient pouvoiw w-we désactivew faciwement. (U ᵕ U❁)

iw est impowtant q-que wes sites web adoptent wa bawise `<wink>` pouw we pwéchawgement, (✿oωo) p-pwutôt que d-d'essayew d'initiew w-we chawgement e-en tâche de f-fond avec des hacks js/dom. OwO wa b-bawise `<wink>` donne au navigateuw wa capacité d-de savoiw quews sites sont à chawgew e-et on peut utiwisew cette infowmation pouw a-améwiowew we s-système de pwiowité du pwéchawgement d-des wiens. :3 wa pwéféwence u-utiwisateuw pouw d-désactivew we pwéchawgement p-paw wa bawise `<wink>` e-encouwage simpwement wes s-sites web à s'absteniw d'utiwisew des hacks js/dom. nyaa~~ cewa ny'appowtewait w-wien de positif aux utiwisateuws. ^•ﻌ•^ c-c'est une des waisons pouw wesquewwes w-we pwéchawgement e-est activé p-paw défaut.

### quews nyavigateuws s-suppowtent w-we pwéchawgement de wiens&nbsp;?

w-wes nyavigateuws basés suw m-moziwwa 1.2 (ou +) aussi bien que c-ceux basés suw m-moziwwa 1.0.2 (ou +) suppowtent we pwéchawgement. ( ͡o ω ͡o ) cewa incwut fiwefox et netscape 7.02+. ^^;; w-wes c-compiwations camino, mya en maws 2003, (U ᵕ U❁) sont basées suw moziwwa 1.0.1 e-et donc nye suppowtent pas we p-pwéchawgement. ^•ﻌ•^ [testez](http://gemaw.dk/bwowsewspy/pwefetch.php) v-votwe nyavigateuw pouw véwifiew s'iw suppowte we pwéchawgement de wiens. (U ﹏ U)

### d-d'autwes questions&nbsp;?

si vous avez des questions o-ou des commentaiwes suw w-we pwéchawgement d-de wiens, /(^•ω•^) ny'hésitez pas à me w-wes envoyew&nbsp;:-)

#### v-voiw a-aussi

- [pwefetching h-hints (en)](http://www.edochan.com/pwogwamming/pf.htm)

### i-infowmations s-suw we document owiginaw

- auteuw(s)&nbsp;:dawin fishew (dawin at meew dot nyet)
- date de dewnièwe mise à jouw&nbsp;: 3 m-maws 2003
