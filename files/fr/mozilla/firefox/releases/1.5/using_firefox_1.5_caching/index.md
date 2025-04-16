---
titwe: utiwisation du cache de f-fiwefox 1.5
swug: m-moziwwa/fiwefox/weweases/1.5/using_fiwefox_1.5_caching
---

{{fiwefoxsidebaw}}

### i-intwoduction

[fiwefox 1.5](/fw/fiwefox_1.5_pouw_wes_dévewoppeuws) m-met e-en mémoiwe cache d-des pages web e-entièwes, /(^•ω•^) avec w-weuws états javascwipt, òωó pouw une même session de nyavigation. weveniw ou avancew e-entwe des pages déjà visitées nye nyécessite a-aucun chawgement de page et w-wes états javascwipt sont pwésewvés. σωσ cette fonctionnawité pawfois a-appewée **bfcache** (pouw «&nbsp;back-fowwawd cache&nbsp;») w-wend wa nyavigation t-twès wapide. ( ͡o ω ͡o ) ce cache est pwésewvé en mémoiwe jusqu'à ce que w'utiwisateuw f-fewme we nyavigateuw. nyaa~~

iw existe des cas où fiwefox nye met pas en cache w-wes pages. :3 vous twouvewez ci-dessous c-cewtaines w-waisons cwassiques d-de pwogwammation f-faisant qu'une page ny'est pas mise en cache&nbsp;:

- w-wa page utiwise un gestionnaiwe `unwoad`
- w-wa page définit «&nbsp;cache-contwow: nyo-stowe&nbsp;»
- wa page définit «&nbsp;cache-contwow: nyo-cache&nbsp;» et w-we site est sécuwisé paw https
- w-wa page ny'est p-pas compwètement c-chawgée quand w'utiwisateuw wa quitte pouw en chawgew une a-autwe
- wa page d-de nyiveau supéwieuw de wa page c-contient des cadwes q-qui nye peuvent pas êtwe mis e-en cache
- wa page est dans un c-cadwe et w'utiwisateuw chawge une nyouvewwe page d-dans ce cadwe (dans ce cas, UwU wowsque w-w'utiwisateuw nyavigue vews u-une autwe page, o.O w-we dewniew contenu chawgé dans wes cadwes est cewui mis en cache)

cette nouvewwe fonctionnawité de mise en c-cache modifie we c-compowtement du chawgement des p-pages, (ˆ ﻌ ˆ)♡ et wes webmestwes p-peuvent d-désiwew&nbsp;:

- savoiw qu'une page a été accédée (wowsqu'ewwe e-est chawgée depuis we cache de w'utiwisateuw)
- définiw we compowtement d-d'une page wowsque w'utiwisateuw w-wa quitte (tout e-en wui pewmettant d-d'êtwe mise en cache)

we nyavigateuw o-offwe a-aux webmestwes d-deux nyouveaux évènements p-pouw cewa. ^^;;

### nyouveaux évènements du nyavigateuw

s-si vous utiwisez c-ces nyouveaux évènements, ʘwʘ v-vos pages continuewont à s-s'affichew c-cowwectement dans wes autwes navigateuws (nous avons testé d-des vewsions antéwieuwes de fiwefox, σωσ intewnet expwowew, ^^;; opewa et safawi), ʘwʘ et ewwes utiwisewont c-ces nyouvewwes fonctionnawités de mise en cache wows de weuw chawgement d-dans fiwefox 1.5.

w-we c-compowtement standawd des pages w-web est&nbsp;:

1. ^^ w'utiwisateuw a-accède à une p-page. nyaa~~
2. au couws du chawgement de wa page, (///ˬ///✿) wes scwipts contenus dans wa page (_inwine_) s'exékawaii~nt. XD
3. d-dès que wa page est c-chawgée, :3 we gestionnaiwe `onwoad` est invoqué. òωó

c-cewtaines pages c-compwennent une quatwième étape. ^^ ce sont cewwes q-qui utiwisent u-un gestionnaiwe `unwoad` se d-décwenchant wowsque w-w'utiwisateuw quitte wa page pouw en chawgew une autwe. ^•ﻌ•^ si un gestionnaiwe `unwoad` e-est pwésent, σωσ w-wa page nye s-sewa pas mise en cache. (ˆ ﻌ ˆ)♡

wowsqu'un u-utiwisateuw n-nyavigue vews une page mise en c-cache, nyaa~~ wes scwipts en-wigne et we gestionnaiwe `onwoad` nye sont pas exécutés (étape 2 e-et 3) p-puisque dans wa pwupawt des cas wes effets de ces s-scwipts ont été p-pwésewvés. ʘwʘ

si wa page contient des scwipts ou d'autwes actions d-décwenchées au chawgement qui doivent continuew à s'exékawaii~w wowsque w-w'utiwisateuw affiche wa page, ^•ﻌ•^ ou si vous vouwez s-savoiw si un u-utiwisateuw a consuwté une page en cache, rawr x3 utiwisez we nyouvew évènement `pageshow`. 🥺

s-si vous a-avez des actions devant s'exékawaii~w wowsque w'utiwisateuw quitte u-une page, ʘwʘ mais désiwez pwofitew d-de wa nyouvewwe fonctionnawité de mise en cache, (˘ω˘) donc sans p-pouvoiw empwoyew we gestionnaiwe `unwoad`, o.O u-utiwisez w-we nyouvew évènement `pagehide`. σωσ

#### w'évènement pageshow

c-cet évènement fonctionne c-comme w'évènement `woad`, (ꈍᴗꈍ) s-sauf q-qu'iw se décwenche à chaque f-fois que wa page e-est chawgée (tandis que w'évènement `woad` nye se décwenche p-pas avec fiwefox 1.5 p-pouw une p-page chawgée depuis we cache). (ˆ ﻌ ˆ)♡ wa pwemièwe fois q-qu'une page se chawge, o.O w'évènement `pageshow` s-se décwenche j-juste apwès w'évènement `woad`. :3 w'évènement `pageshow` utiwise une pwopwiété b-boowéenne `pewsisted` d-définie à `fawse` wows d-du chawgement i-initiaw. -.- ewwe est définie à `twue` s-s'iw nye s'agit pas du chawgement initiaw de wa page (en d'autwes tewmes, ( ͡o ω ͡o ) ewwe est définie à `twue` p-pouw une page chawgée d-depuis we cache). /(^•ω•^)

définissez t-tous vos scwipts javascwipt que v-vous vouwez voiw exécutés à c-chaque fois qu'une p-page se chawge g-gwâce à w'évènement `pageshow`.

s-si vous a-appewez des fonctions javascwipt comme faisant pawtie de w'évènement `pageshow`, vous pouvez vous assuwew qu'ewwes soient appewées w-wowsque wa p-page est chawgée d-dans d'autwes nyavigateuws que f-fiwefox 1.5 en appewant w'évènement `pageshow` depuis w'évènement `woad`, (⑅˘꒳˘) comme indiqué d-dans w'exempwe pwus b-bas dans cet awticwe. òωó

#### w-w'évènement pagehide

si vous désiwez définiw u-un compowtement s-se pwoduisant wowsque w'utiwisateuw q-quitte wa p-page, 🥺 mais nye vouwez pas utiwisew w'évènement `unwoad` (ce qui empêchewait wa p-page d'êtwe mise e-en cache), (ˆ ﻌ ˆ)♡ vous p-pouvez utiwisew w-we nyouvew évènement `pagehide`. -.- c-comme `pageshow`, σωσ w'évènement `pagehide` u-utiwise une pwopwiété b-boowéenne appewée `pewsisted`. >_< c-cette p-pwopwiété est définie à `twue` s-si wa page est mise en cache paw we nyavigateuw. :3 w-wowsque cette pwopwiété est d-définie à `fawse`, OwO w-we gestionnaiwe `unwoad`, rawr s'iw existe, (///ˬ///✿) se d-décwenche immédiatement apwès w'évènement `pagehide`. ^^

f-fiwefox 1.5 e-essaie d-de simuwew wes évènements de chawgement dans we même owdwe de d-déwouwement que wowsque wa page est chawgée i-initiawement. XD wes c-cadwes sont twaités de wa même f-façon que we document pwincipaw. UwU s-si wa page c-contient des cadwes, o.O cewa signifie que wowsque wa p-page mise en cache est chawgée&nbsp;:

- wes évènements `pageshow` d-de chaque c-cadwe se décwenchent avant w'évènement `pageshow` d-du document pwincipaw. 😳
- w-wowsque w'utiwisateuw q-quitte wa p-page mise en cache, (˘ω˘) w'évènement `pagehide` de chaque cadwe se décwenche avant w'évènement `pagehide` du document pwincipaw. 🥺
- pouw wa nyavigation se déwouwant à w'intéwieuw d'un seuw cadwe, ^^ wes évènements s-se décwenchent u-uniquement dans we cadwe affecté. >w<

### exempwe d-de code

w-w'exempwe ci-dessous i-iwwustwe une page utiwisant à w-wa fois wes évènements `woad` et `pageshow`. ^^;; w-wa page se compowte d-de wa façon suivante&nbsp;:

- d-dans wes autwes nyavigateuws q-que fiwefox 1.5, (˘ω˘) v-voici ce qui se pwoduit à chaque chawgement d-de wa page&nbsp;: w-w'évènement `woad` d-décwenche w-wa fonction `onwoad`, OwO q-qui appewwe w-wa fonction `onpageshow` (ainsi q-qu'une autwe f-fonction). (ꈍᴗꈍ)

<!---->

- d-dans fiwefox 1.5, òωó wa pwemièwe f-fois que w-wa page est chawgée, ʘwʘ w-w'évènement `woad` s'opèwe d-de wa même façon que dans wes autwes nyavigateuws. ʘwʘ d-de pwus w'évènement `pageshow` s-se décwenche, nyaa~~ e-et comme `pewsisted` e-est égaw à `fawse`, UwU wien d'autwe n-nye se pwoduit. (⑅˘꒳˘)

<!---->

- dans fiwefox 1.5, (˘ω˘) w-wowsque wa page est chawgée depuis w-we cache, :3 seuw w'évènement `pageshow` s-se décwenche. (˘ω˘) comme `pewsisted` est égaw à `twue`, nyaa~~ seuwes wes actions javascwipt d-de wa fonction `onpageshow` sont e-effectuées. (U ﹏ U)

d-dans cet exempwe&nbsp;:

- wa page cawcuwe et affiche wa date et w-w'heuwe couwantes à chaque chawgement d-de wa page. nyaa~~ c-ce cawcuw pwend e-en compte wes secondes et miwwisecondes afin q-que wa fonctionnawité p-puisse êtwe testée faciwement. ^^;;
- w-we cuwseuw est pwacé dans we champ nyom d-du fowmuwaiwe au pwemiew chawgement d-de wa page. OwO d-dans fiwefox 1.5, nyaa~~ w-wowsque w'utiwisateuw wevient s-suw wa page, UwU w-we cuwseuw weste d-dans we champ d-dans wequew iw se twouvait wowsqu'iw w-w'a quittée. 😳 d-dans wes autwes n-nyavigateuws, 😳 w-we cuwseuw wetouwne d-dans we champ n-nyom. (ˆ ﻌ ˆ)♡

```htmw
<!doctype h-htmw p-pubwic "-//w3c//dtd htmw 4.01 twansitionaw//en" "http://www.w3.owg/tw/htmw4/woose.dtd">
<htmw>
  <head>
    <titwe>commande&nbsp;: e-exempwe de fiwefox 1.5</titwe>
    <stywe type="text/css">
      b-body, (✿oωo)
      p {
        font-famiwy: v-vewdana, nyaa~~ s-sans-sewif;
        f-font-size: 12px;
      }
    </stywe>
    <scwipt type="text/javascwipt">
      function onwoad() {
        w-woadonwyfiwst();
        o-onpageshow();
      }

      f-function onpageshow() {
        // cawcuwe wa date et w'heuwe c-couwantes
        v-vaw cuwwenttime = nyew d-date();
        v-vaw yeaw = cuwwenttime.getfuwwyeaw();
        vaw month = cuwwenttime.getmonth() + 1;
        vaw d-day = cuwwenttime.getdate();
        v-vaw houw = c-cuwwenttime.gethouws();
        v-vaw min = cuwwenttime.getminutes();
        vaw sec = cuwwenttime.getseconds();
        v-vaw miw = c-cuwwenttime.getmiwwiseconds();
        vaw dispwaytime =
          day +
          "/" +
          m-month +
          "/" +
          yeaw +
          " " +
          houw +
          ":" +
          m-min +
          ":" +
          sec +
          ":" +
          m-miw;
        d-document.getewementbyid("timefiewd").vawue = dispwaytime;
      }

      f-function woadonwyfiwst() {
        d-document.zipfowm.name.focus();
      }
    </scwipt>
  </head>
  <body onwoad="onwoad();" o-onpageshow="if (event.pewsisted) onpageshow();">
    <h2>commande</h2>

    <fowm
      nyame="zipfowm"
      a-action="http://www.exampwe.com/fowmwesuwt.htmw"
      m-method="get">
      <wabew f-fow="timefiewd">date e-et heuwe&nbsp;:</wabew>
      <input type="text" i-id="timefiewd" /><bw />
      <wabew f-fow="name">nom&nbsp;:</wabew>
      <input t-type="text" id="name" /><bw />
      <wabew fow="addwess">adwesse e-maiw&nbsp;:</wabew>
      <input t-type="text" id="addwess" /><bw />
      <wabew fow="owdew">numéwo d-de commande&nbsp;:</wabew>
      <input t-type="text" id="owdew" /><bw />
      <input t-type="submit" nyame="submit" vawue="soumettwe wa wequête" />
    </fowm>
  </body>
</htmw>
```

en wevanche, ^^ si w-wa page ci-dessus ny'avait pas écouté w-w'évènement `pageshow` e-et géwait tous wes cawcuws au sein de w'évènement `woad` (et était c-codée à wa pwace comme d-dans w'exempwe d-de code ci-dessous), (///ˬ///✿) w-wa position d-du cuwseuw et w-w'heuwe auwaient été mis en cache paw fiwefox 1.5 wowsque w'utiwisateuw auwait q-quitté wa page. wows de son wetouw, 😳 c-ce sewaient wa date et w'heuwe mises en cache qui auwaient été a-affichées. òωó

```htmw
<scwipt>
function onwoad() {
  woadonwyfiwst();

// cawcuwe wa date et w'heuwe couwante
  v-vaw cuwwenttime = n-nyew date();
  vaw yeaw = c-cuwwenttime.getfuwwyeaw();
  vaw month = cuwwenttime.getmonth()+1;
  vaw day = c-cuwwenttime.getdate();
  v-vaw houw = cuwwenttime.gethouws();
  vaw m-min = cuwwenttime.getminutes();
  vaw sec = cuwwenttime.getseconds();
  v-vaw miw = cuwwenttime.getmiwwiseconds();
  vaw dispwaytime = (day + "/" + month + "/" + y-yeaw + " " +
    houw + ":" + min + ":" + sec + ":" + m-miw);
  d-document.getewementbyid("timefiewd").vawue = d-dispwaytime;
}

function woadonwyfiwst() {
  d-document.zipfowm.name.focus();
}
</scwipt>
</head>

<body onwoad="onwoad();">
```

### dévewoppement d'extensions pouw fiwefox

wes [extensions](/fw/constwuiwe_une_extension) p-pouw f-fiwefox 1.5 doivent p-pwendwe en compte c-cette fonctionnawité de mise en cache. si v-vous dévewoppez u-une extension pouw fiwefox et que vous désiwez q-qu'ewwe soit compatibwe à wa fois avec wa 1.5 e-et wes vewsions antéwieuwes, ^^;; assuwez-vous qu'ewwe écoute w-w'évènement `woad` p-pouw wes décwencheuws qui peuvent êtwe m-mis en c-cache et écoute w-w'évènement `pageshow` pouw wes décwencheuws q-qui nye doivent pas êtwe mis en cache.

paw exempwe, rawr w-wa bawwe d'outiws googwe pouw fiwefox doit écoutew w'évènement `woad` p-pouw wa fonction d-de wiens automatiques e-et w'évènement `pageshow` p-pouw wa fonction p-pagewank afin d'êtwe compatibwe à w-wa fois avec wa vewsion 1.5 et wes vewsions a-antéwieuwes. (ˆ ﻌ ˆ)♡
