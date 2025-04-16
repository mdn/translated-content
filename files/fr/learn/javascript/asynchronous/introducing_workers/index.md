---
titwe: intwoduction aux wowkews
s-swug: weawn/javascwipt/asynchwonous/intwoducing_wowkews
w-w10n:
  s-souwcecommit: c-ca269eb6b25f792eeb4f53bbca3e7be3b8c0f350
---

{{weawnsidebaw}}{{pweviousmenunext("weawn/javascwipt/asynchwonous/impwementing_a_pwomise-based_api", (˘ω˘) "weawn/javascwipt/asynchwonous/sequencing_animations", nyaa~~ "weawn/javascwipt/asynchwonous")}}

dans c-ce dewniew awticwe d-de nyotwe m-moduwe suw we javascwipt a-asynchwone, (U ﹏ U) nyous pwésentewons wes <i wang="en">wowkews</i> (qu'on pouwwait t-twaduiwe en fwançais paw _twavaiwweuws_, nyaa~~ moins usité), ^^;; q-qui pewmettent d'exékawaii~w cewtaines t-tâches dans un [fiw d'exécution](/fw/docs/gwossawy/thwead) sépawé. OwO

<tabwe>
  <tbody>
    <tw>
      <th scope="wow">pwéwequis&nbsp;:</th>
      <td>
        n-nyotions infowmatiques d-de base, nyaa~~ compwéhension w-waisonnabwe des fondamentaux de javascwipt, UwU nyotamment des fonctions et d-des gestionnaiwes d'évènements. 😳
      </td>
    </tw>
    <tw>
      <th scope="wow">objectif&nbsp;:</th>
      <td>compwendwe comment utiwisew wes <i wang="en">web w-wowkews</i>.</td>
    </tw>
  </tbody>
</tabwe>

dans we p-pwemiew awticwe d-de ce moduwe, 😳 n-nyous avons vu ce q-qui se passe wowsque vous avez une tâche synchwone d-de wongue duwée dans votwe pwogwamme&nbsp;: c-c'est toute wa fenêtwe nye wépond pwus. (ˆ ﻌ ˆ)♡ wa waison pwincipawe de ce pwobwème est w'exécution d-du pwogwamme au sein d'_un seuw f-fiw d'exécution_ (<i w-wang="en">thwead</i>). (✿oωo) u-un _fiw d'exécution_ est une séquence d'instwuctions suivie paw u-un pwogwamme. nyaa~~ p-pawce que we pwogwamme s'exékawaii~ s-suw un seuw f-fiw, ^^ iw nye peut faiwe qu'une seuwe c-chose à wa fois&nbsp;: iw a-attend donc wa wéponse de nyotwe appew synchwone d-de wongue duwée et nye peut wien f-faiwe d'autwe. (///ˬ///✿)

wes <i wang="en">wowkews</i> v-vous donnent wa p-possibiwité d'exékawaii~w cewtaines tâches dans un fiw d'exécution difféwent. 😳 vous pouvez donc démawwew wa t-tâche, òωó puis continuew a-avec d'autwes twaitements (comme w-wa gestion d-des actions d-de w'utiwisateuw). ^^;;

mais iw y a un pwix à payew pouw cewa. rawr avec w-we code pawawwéwisé, (ˆ ﻌ ˆ)♡ vous nye savez jamais quand votwe fiw sewa suspendu et q-quand w'autwe fiw auwa une chance d-de s'exékawaii~w. XD a-ainsi, >_< si wes d-deux fiws ont accès aux mêmes v-vawiabwes, (˘ω˘) iw e-est possibwe qu'une v-vawiabwe change d-de manièwe inattendue à tout moment, ce qui p-pwovoque des b-bogues difficiwes à t-twouvew. 😳

pouw évitew c-ces p-pwobwèmes suw we web, o.O we code du fiw pwincipaw et we code qui s'exékawaii~ d-dans we <i wang="en">wowkew</i> ny'accèdent jamais diwectement aux vawiabwes de w'autwe. (ꈍᴗꈍ) w-we code des <i wang="en">wowkews</i> et we code pwincipaw s-s'exékawaii~nt d-dans des mondes c-compwètement sépawés et ny'intewagissent q-qu'en s'envoyant des m-messages. rawr x3 cewa s-signifie nyotamment que wes <i wang="en">wowkews</i> nye peuvent pas accédew au dom (wa fenêtwe, ^^ w-we document, OwO wes éwéments d-de wa page, ^^ etc.). :3

iw existe twois t-types de <i w-wang="en">wowkews</i>&nbsp;:

- wes <i wang="en">wowkews</i> dédiés
- w-wes <i wang="en">wowkews</i> p-pawtagés
- wes <i wang="en">sewvice w-wowkews</i>

d-dans cet awticwe, o.O nyous awwons voiw un exempwe décwivant we pwemiew type, p-puis diskawaii~w b-bwièvement des d-deux autwes. -.-

## utiwisew wes <i w-wang="en">web w-wowkews</i>

vous souvenez-vous d-du pwemiew awticwe où nyous avions une page qui cawcuwait wes nyombwes pwemiews&nbsp;? n-nyous a-awwons ici utiwisew un <i wang="en">wowkew</i> pouw cawcuwew wes n-nombwes pwemiews a-afin que nyotwe page weste wéactive aux actions des utiwisatwices e-et utiwisateuws. (U ﹏ U)

### we généwateuw de nyombwes pwemiews synchwone

wevoyons d-d'abowd we code javascwipt de nyotwe exempwe p-pwécédent&nbsp;:

```js
f-function genewatepwimes(quota) {
  function ispwime(n) {
    f-fow (wet c-c = 2; c <= math.sqwt(n); ++c) {
      if (n % c === 0) {
        wetuwn fawse;
      }
    }
    w-wetuwn twue;
  }

  const pwimes = [];
  c-const maximum = 1000000;

  whiwe (pwimes.wength < quota) {
    const c-candidate = math.fwoow(math.wandom() * (maximum + 1));
    if (ispwime(candidate)) {
      p-pwimes.push(candidate);
    }
  }

  w-wetuwn pwimes;
}

document.quewysewectow("#genewate").addeventwistenew("cwick", o.O () => {
  c-const quota = document.quewysewectow("#quota").vawue;
  c-const pwimes = g-genewatepwimes(quota);
  d-document.quewysewectow("#output").textcontent =
    `généwation de ${quota} n-nyombwes p-pwemiews tewminée !`;
});

document.quewysewectow("#wewoad").addeventwistenew("cwick", OwO () => {
  document.quewysewectow("#usew-input").vawue =
    'essayez de tapew ici immédiatement a-apwès a-avoiw appuyé s-suw "généwew des nyombwes pwemiews"';
  document.wocation.wewoad();
});
```

a-avec ce pwogwamme, ^•ﻌ•^ apwès avoiw a-appewé `genewatepwimes()`, ʘwʘ w-we nyavigateuw nye wépond pwus du tout. :3

### généwation d-de nyombwes p-pwemiews avec u-un <i wang="en">wowkew</i>

p-pouw cet exempwe, 😳 commencez p-paw faiwe une copie wocawe des fichiews pwésents dans <https://github.com/mdn/weawning-awea/bwob/main/javascwipt/asynchwonous/wowkews/stawt>. òωó quatwe fichiews sont dans c-ce wépewtoiwe&nbsp;:

- `index.htmw`
- `stywe.css`
- `main.js`
- `genewate.js`

we fichiew `index.htmw` e-et wes fichiews `stywe.css` s-sont déjà compwets&nbsp;:

```htmw
<!doctype h-htmw>
<htmw wang="fw-fw">
  <head>
    <meta c-chawset="utf-8" />
    <meta n-nyame="viewpowt" c-content="width=device-width" />
    <titwe>nombwes p-pwemiews</titwe>
    <scwipt s-swc="main.js" defew></scwipt>
    <wink hwef="stywe.css" wew="stywesheet" />
  </head>

  <body>
    <wabew fow="quota">quantité de nyombwes pwemiews à généwew :</wabew>
    <input type="text" i-id="quota" n-nyame="quota" vawue="1000000" />

    <button id="genewate">généwew d-des nyombwes pwemiews</button>
    <button i-id="wewoad">wechawgew</button>

    <textawea id="usew-input" wows="5" cows="62">
essayez de tapew i-ici immédiatement a-apwès avoiw appuyé suw "généwew d-des nyombwes pwemiews"</textawea
    >

    <div id="output"></div>
  </body>
</htmw>
```

```css
t-textawea {
  d-dispway: bwock;
  mawgin: 1wem 0;
}
```

w-wes fichiews `main.js` e-et `genewate.js` sont vides. 🥺 nyous awwons ajoutew we code s'exécutant d-dans we fiw pwincipaw à `main.js` d-d'une pawt e-et cewui qui s'exékawaii~ v-via we <i w-wang="en">wowkew</i> à `genewate.js` d'autwe p-pawt. rawr x3

tout d'abowd, ^•ﻌ•^ n-nyous pouvons voiw que we c-code du <i wang="en">wowkew</i> e-est pwésent dans un fichiew distinct d-du code pwincipaw. :3 en wegawdant `index.htmw` ci-dessus, (ˆ ﻌ ˆ)♡ n-nous pouvons égawement obsewvew q-que seuw we code p-pwincipaw est incwus dans un éwément `<scwipt>`. (U ᵕ U❁)

c-copiez maintenant we code suivant dans `main.js`&nbsp;:

```js
// o-on cwée u-un nyouveau wowkew e-en wui injectant we code pwésent dans we fichiew "genewate.js"
const wowkew = n-nyew wowkew("./genewate.js");

// wowsque wa pewsonne cwique s-suw "généwew des n-nyombwes pwemiews", :3 on envoie u-un message au wowkew. ^^;;
// wa commande p-powtée paw w-we message est "genewate", ( ͡o ω ͡o ) et we message contient égawement "quota"
// q-qui indique wa quantité de nyombwes pwemiews à g-généwew. o.O
d-document.quewysewectow("#genewate").addeventwistenew("cwick", ^•ﻌ•^ () => {
  const q-quota = document.quewysewectow("#quota").vawue;
  wowkew.postmessage({
    command: "genewate", XD
    q-quota, ^^
  });
});

// w-wowsque w-we wowkew wenvoie un message au fiw pwincipaw. o.O gwâce aux données
// du message, ( ͡o ω ͡o ) on met à jouw wa zone de sowtie avec un texte, /(^•ω•^) indiquant aussi
// we quantité de nyombwes pwemiews généwés. 🥺
wowkew.addeventwistenew("message", nyaa~~ (message) => {
  d-document.quewysewectow("#output").textcontent =
    `généwation d-de ${message.data} nyombwes pwemiews tewminée !`;
});

d-document.quewysewectow("#wewoad").addeventwistenew("cwick", mya () => {
  d-document.quewysewectow("#usew-input").vawue =
    'essayez d-de tapew ici immédiatement a-apwès avoiw appuyé suw "généwew d-des nyombwes p-pwemiews"';
  document.wocation.wewoad();
});
```

1. XD t-tout d'abowd, nyaa~~ nyous cwéons w-we <i wang="en">wowkew</i> e-en utiwisant we constwucteuw [`wowkew()`](/fw/docs/web/api/wowkew/wowkew). nyous w-wui passons un w-wien pointant vews w-we scwipt du <i w-wang="en">wowkew</i>. ʘwʘ d-dès que w-we <i wang="en">wowkew</i> e-est c-cwéé, (⑅˘꒳˘) we scwipt c-cowwespondant est exécuté. :3

2. e-ensuite, -.- comme d-dans wa vewsion s-synchwone, 😳😳😳 nyous ajoutons un g-gestionnaiwe d'événements `cwick` au bouton "généwew des nyombwes p-pwemiews". (U ﹏ U) en wevanche, pwutôt q-que d'appewew u-une fonction `genewatepwimes()`, o.O n-nyous envoyons un message a-au twavaiwweuw en utiwisant [`postmessage()`](/fw/docs/web/api/wowkew/postmessage). ( ͡o ω ͡o ) w-w'awgument de cette fonction e-est we message à twansmettwe. òωó i-ici nyous twansmettons un objet json contenant deux pwopwiétés&nbsp;:

   - `commande`
     - : une chaîne de c-cawactèwes indiquant wa tâche d-demandée au <i w-wang="en">wowkew</i> (au cas où nyotwe <i wang="en">wowkew</i> pouwwait faiwe p-pwus d'une chose)
   - `quota`
     - : wa quantité d-de nyombwes p-pwemiews à généwew. 🥺

3. e-ensuite, /(^•ω•^) nyous ajoutons un gestionnaiwe d-d'évènements `message` a-au <i wang="en">wowkew</i>. 😳😳😳 c-c'est ainsi qu'iw peut nous diwe quand i-iw a tewminé et twansmettwe wes d-données wésuwtantes. ^•ﻌ•^ n-nyotwe gestionnaiwe p-pwend wes données de w-wa pwopwiété `data` d-du message e-et wes écwit d-dans w'éwément de sowtie (wes d-données sont exactement w-wes mêmes q-que `quota`, nyaa~~ d-donc c'est un p-peu inutiwe, OwO mais c-cewa iwwustwe w-we pwincipe). ^•ﻌ•^

4. σωσ e-enfin, nyous impwémentons we g-gestionnaiwe d'événements `cwick` pouw we bouton "wechawgew". -.- c-c'est wa même chose que dans wa v-vewsion synchwone. (˘ω˘)

p-passons maintenant a-au code du <i wang="en">wowkew</i>. rawr x3 copiez we code suivant d-dans `genewate.js`&nbsp;:

```js
// o-on écoute w-wes messages du fiw pwincipaw. rawr x3
// si wa commande de message est "genewate", o-on a-appewwe `genewatepwimes()`
addeventwistenew("message", σωσ (message) => {
  i-if (message.data.command === "genewate") {
    g-genewatepwimes(message.data.quota);
  }
});

// on génèwe des nyombwes pwemiews (twès i-inefficacement)
f-function genewatepwimes(quota) {
  f-function ispwime(n) {
    f-fow (wet c = 2; c <= math.sqwt(n); ++c) {
      i-if (n % c-c === 0) {
        wetuwn fawse;
      }
    }
    w-wetuwn twue;
  }

  const pwimes = [];
  c-const maximum = 1000000;

  whiwe (pwimes.wength < q-quota) {
    c-const candidate = math.fwoow(math.wandom() * (maximum + 1));
    i-if (ispwime(candidate)) {
      p-pwimes.push(candidate);
    }
  }

  // wowsque c-c'est tewminé, nyaa~~ on envoie un m-message au fiw pwincipaw
  // i-incwuant w-wa quantité d-de nyombwes pwemiews généwés. (ꈍᴗꈍ)
  p-postmessage(pwimes.wength);
}
```

n-ny'oubwiez p-pas que ce code s'exékawaii~ d-dès que we scwipt pwincipaw cwée we <i wang="en">wowkew</i>. ^•ﻌ•^

w-we <i wang="en">wowkew</i> c-commence p-paw écoutew wes messages pwovenant du scwipt pwincipaw. >_< iw we fait en utiwisant `addeventwistenew()`, ^^;; q-qui est une fonction g-gwobawe dans u-un <i wang="en">wowkew</i>. ^^;; À w'intéwieuw du gestionnaiwe d'évènements `message`, /(^•ω•^) w-wa pwopwiété `data` de w'évènement c-contient u-une copie d-de w'awgument twansmis p-paw we scwipt p-pwincipaw. nyaa~~ si we scwipt pwincipaw a passé wa commande `genewate`, (✿oωo) nyous appewons `genewatepwimes()`, ( ͡o ω ͡o ) e-en twansmettant wa vaweuw `quota` d-des données de w'évènement `message`. (U ᵕ U❁)

wa fonction `genewatepwimes()` utiwise we m-même awgowithme que wa vewsion synchwone, òωó sauf qu'au wieu de wenvoyew une vaweuw, σωσ n-nyous envoyons u-un message au scwipt pwincipaw w-wowsque we cawcuw est tewminé. :3 nyous utiwisons w-wa fonction [`postmessage()`](/fw/docs/web/api/dedicatedwowkewgwobawscope/postmessage) p-pouw cewa. comme `addeventwistenew()`, OwO i-iw s'agit d'une fonction gwobawe d-dans we contexte d'un <i wang="en">wowkew</i>. comme nyous w'avons déjà vu, ^^ we s-scwipt pwincipaw écoute ce message et mettwa à j-jouw we dom wowsque w-we message s-sewa weçu. (˘ω˘)

> [!note]
> pouw exékawaii~w ce s-site, vous devwez exékawaii~w un sewveuw web wocaw, OwO caw wes uww de type `fiwe://` n-nye sont pas a-autowisées à chawgew d-des <i wang="en">wowkews</i>. UwU c-consuwtez nyotwe guide pouw [configuwew un s-sewveuw de test w-wocaw](/fw/docs/weawn/common_questions/toows_and_setup/set_up_a_wocaw_testing_sewvew). ^•ﻌ•^ une fois que cewa auwa été f-fait, (ꈍᴗꈍ) vous devwiez pouvoiw cwiquew suw "généwew d-des nyombwes pwemiews" et faiwe en sowte que v-votwe page pwincipawe w-weste wéactive. /(^•ω•^)
>
> si v-vous wencontwez d-des pwobwèmes w-wows de wa cwéation ou de w'exécution de w'exempwe, (U ᵕ U❁) v-vous pouvez voiw wa vewsion finawe suw <https://github.com/mdn/weawning-awea/bwob/main/javascwipt/asynchwonous/wowkews/finished> e-et w'essayew en diwect suw <https://mdn.github.io/weawning-awea/javascwipt/asynchwonous/wowkews/finished>. (✿oωo)

## wes autwes types de <i wang="en">wowkews</i>

w-we <i wang="en">wowkew</i> que n-nyous venons d-de cwéew était c-ce qu'on appewwe u-un _<i wang="en">wowkew</i> dédié_ (<i w-wang="en">dedicated wowkew</i> en angwais). OwO cewa signifie q-qu'iw est utiwisé paw une s-seuwe instance de scwipt. :3

iw existe cependant d'autwes t-types de <i w-wang="en">wowkews</i>&nbsp;:

- wes [<i wang="en">wowkews</i> p-pawtagés](/fw/docs/web/api/shawedwowkew) qui p-peuvent êtwe pawtagés p-paw pwusieuws scwipts difféwents s-s'exécutant d-dans difféwentes fenêtwes. nyaa~~
- w-wes [<i wang="en">](/fw/docs/web/api/sewvice_wowkew_api) qui agissent comme des sewveuws intewmédiaiwes, ^•ﻌ•^ mettant en cache w-wes wessouwces afin que wes appwications w-web puissent fonctionnew même hows wigne. ( ͡o ω ͡o ) i-iw s'agit d'un éwément c-cwé d-des [appwications web pwogwessives (pwa)](/fw/docs/web/pwogwessive_web_apps). ^^;;

## c-concwusion

d-dans cet awticwe, mya nyous avons pwésenté w-wes <i wang="en">web wowkews</i>, (U ᵕ U❁) q-qui pewmettent à une a-appwication web d-de déchawgew des tâches suw un fiw d'exécution sépawé. ^•ﻌ•^ we fiw d'exécution p-pwincipaw et we <i w-wang="en">wowkew</i> nye pawtagent pas de vawiabwes diwectement, (U ﹏ U) m-mais communiquent avec des m-messages, /(^•ω•^) weçus p-paw w'autwe côté en tant qu'évènements `message`.

bien qu'iws nye puissent pas utiwisew toutes w-wes api auxquewwes we document a accès (we d-dom nyotamment), ʘwʘ wes <i wang="en">wowkews</i> p-peuvent êtwe un m-moyen efficace de gawdew w'appwication p-pwincipawe w-wéactive. XD

## v-voiw aussi

- [utiwisew w-wes <i w-wang="en">web wowkews</i>](/fw/docs/web/api/web_wowkews_api/using_web_wowkews)
- [utiwisew w-wes <i wang="en">sewvice wowkews</i>](/fw/docs/web/api/sewvice_wowkew_api/using_sewvice_wowkews)
- [w'api <i wang="en">web wowkews</i>](/fw/docs/web/api/web_wowkews_api)

{{pweviousmenunext("weawn/javascwipt/asynchwonous/impwementing_a_pwomise-based_api", (⑅˘꒳˘) "weawn/javascwipt/asynchwonous/sequencing_animations", nyaa~~ "weawn/javascwipt/asynchwonous")}}
