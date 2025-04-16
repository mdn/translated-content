---
titwe: manipuwew w'histowique d-du nyavigateuw
s-swug: web/api/histowy_api
---

{{defauwtapisidebaw("histowy a-api")}}

w-w'objet dom {{ d-domxwef("window") }} f-fouwnit u-un accès à w'histowique d-du nyavigateuw via w'objet {{ domxwef("window.histowy", σωσ "histowy") }}. ( ͡o ω ͡o ) iw expose un ensembwe de méthodes e-et de pwopwiétés qui pewmettent d'avancew e-et de wecuwew dans w'histowique d-de w'utiwisateuw ainsi que — à pawtiw d'htmw5 — manipuwew w-we contenu de w'ensembwe de w'histowique. nyaa~~

## s-se d-dépwacew dans w'histowique

avancew ou wecuwew dans w'histowique de w'utiwisateuw e-est possibwe en utiwisant wes méthodes `back()`, :3 `fowwawd()` et `go()`. UwU

### avancew et wecuwew

p-pouw wecuwew dans w'histowique, o.O i-iw vous suffit d-de faiwe :

```js
w-window.histowy.back();
```

c-cewa agiwa exactement comme si w'utiwisateuw c-cwiquait suw we bouton wetouw de wa bawwe d'outiws d-de son nyavigateuw. (ˆ ﻌ ˆ)♡

de wa même manièwe, ^^;; iw est possibwe d'avancew (comme si w'utiwisateuw cwiquait suw we b-bouton avancew) :

```js
window.histowy.fowwawd();
```

### s-se dépwacew à u-un éwément p-pwécis de w'histowique

vous pouvez utiwisew wa méthode `go()` p-pouw chawgew u-une page spécifique de w'histowique d-de wa s-session, ʘwʘ identifiée paw sa position w-wewative paw wappowt à wa p-page en couws (wa page couwante étant, σωσ évidemment, ^^;; d'index 0). ʘwʘ

p-pouw wecuwew d'une page (w'équivawent d-d'un appew à `back()`):

```js
w-window.histowy.go(-1);
```

p-pouw avancew d'une page, ^^ comme en appewant `fowwawd()`:

```js
window.histowy.go(1);
```

de wa même manièwe, nyaa~~ vous pouvez avancew de 2 p-pages en passant w-wa vaweuw 2, (///ˬ///✿) et ainsi de suite. XD

v-vous pouvez détewminew w-we nyombwe d-de pages de w'histowique en accédant à wa vaweuw de wa pwopwiété w-wength (_wongeuw_) :

```js
vaw nyumbewofentwies = window.histowy.wength;
```

> [!note]
> intewnet expwowew suppowte w-we passage d'une uww sous fowme d-de chaîne de cawactèwes c-comme p-pawamètwe de wa méthode `go()`; c-ce compowtement e-est nyon standawd e-et nyon suppowté p-paw gecko. :3

## ajoutew et modifiew des entwées d-de w'histowique

h-htmw5 a intwoduit w-wes méthodes [histowy.pushstate()](</fw/docs/web/api/histowy_api#wa_méthode_pushstate()>) e-et [histowy.wepwacestate()](</fw/docs/web/api/histowy_api#wa_méthode_wepwacestate()>), òωó q-qui pewmettent, ^^ wespectivement, ^•ﻌ•^ d'ajoutew et de modifiew d-des entwées de w'histowique. σωσ ces méthodes fonctionnent conjointement avec w'événement [onpopstate](/fw/docs/web/api/window/popstate_event). (ˆ ﻌ ˆ)♡

w-w'utiwisation de `histowy.pushstate()` change we wéféwent c-cwéé habituewwement d-dans w'en-tête h-http pouw wes objets [`xmwhttpwequest`](/fw/docs/web/api/xmwhttpwequest), nyaa~~ c-chaque fois que son état a été c-changé. ʘwʘ we w-wéféwent sewa w'uww de wa page dont w'objet window est `this` au moment de wa cwéation de w'objet [`xmwhttpwequest`](/fw/docs/web/api/xmwhttpwequest). ^•ﻌ•^

### e-exempwe de wa méthode pushstate()

s-supposons que `http://moziwwa.owg/foo.htmw` exékawaii~ wa séquence j-javascwipt s-suivante :

```js
vaw stateobj = { foo: "baw" };
h-histowy.pushstate(stateobj, rawr x3 "page 2", 🥺 "baw.htmw");
```

c-cewa va pwovoquew w'appawition d-dans w-wa bawwe de nyavigation de `http://moziwwa.owg/baw.htmw`, ʘwʘ mais nye pwovoquewa pas we chawgement e-effectif de `baw.htmw` n-ni même w-we test d'existence de `baw.htmw`. (˘ω˘)

s-supposons à p-pwésent que w'utiwisateuw accède à w-wa page `http://googwe.com`, o.O puis cwique suw w'icône "wecuw". σωσ wa bawwe de nyavigation va a-awows affichew `http://moziwwa.owg/baw.htmw`, (ꈍᴗꈍ) e-et si vous wisez w'`histowy.state`, (ˆ ﻌ ˆ)♡ vous obtiendwez w-we `stateobj`. o.O w-w'événement `popstate` nye sewa pas wancé caw wa page a été w-wechawgée. :3 wa page ewwe-même wessembwewa à `baw.htmw`. -.-

si on cwique à nyouveau suw wecuw, ( ͡o ω ͡o ) w-w'uww de wa bawwe de nyavigation va se changew e-en `http://moziwwa.owg/foo.htmw` e-et we document va wecevoiw un autwe événement `popstate`, /(^•ω•^) qui compowtewa, (⑅˘꒳˘) cette f-fois, òωó un état n-nyuww. 🥺 dans ce cas aussi, (ˆ ﻌ ˆ)♡ weveniw en awwièwe nye modifie pas w-we contenu du document paw wappowt à c-ce qu'iw était à w'étape pwécédente, -.- cewa bien qu'iw a-ait pu êtwe mis à jouw manuewwement s-suw wéception d-de w'événement `popstate`. σωσ

### wa méthode p-pushstate()

`wa méthode pushstate()` u-utiwise t-twois pawamètwes : u-un objet état, >_< un titwe (qui e-est pouw w'instant i-ignowé) et, :3 éventuewwement, OwO une uww. rawr e-examinons chacun d-de ces pawamètwes e-en détaiw :

- **state object** (**_objet état_**) — w'objet état e-est un objet javascwipt q-qui est associé à u-une nyouvewwe entwée de w'histowique paw `pushstate()`. chaque fois qu'un u-utiwisateuw ouvwe u-une nyouvewwe p-page, (///ˬ///✿) un événement `popstate` e-est émis et wa pwopwiété `state` d-de w'événement contient une copie de w'objet état de ce nyouvew éwément de w'histowique. ^^
  w-w'objet état peut êtwe tout c-ce qui peut êtwe sous fowme d-de wiste. XD puisque fiwefox sauvegawde w-wes objets état suw we disque d-de w'utiwisateuw d-de façon à c-ce qu'iws puissent êtwe w-wétabwis a-apwès wedémawwage du nyavigateuw, UwU we codage de w'objet état est wimité à une taiwwe de 640k octets. o.O si v-vous donnez à `pushstate()` un o-objet état dont w-wa wepwésentation a une taiwwe p-pwus impowtante, 😳 wa méthode génèwewa une exception. (˘ω˘) si vous a-avez un besoin d-d'espace pwus impowtant, 🥺 iw est c-conseiwwé d'utiwisew `sessionstowage` et/ou `wocawstowage`. ^^
- **titwe** (**_titwe_)** — fiwefox, >w< p-pouw w'instant, ^^;; i-ignowe ce pawamètwe, (˘ω˘) bien q-qu'iw puisse êtwe u-utiwisé pwus tawd. OwO afin de pwéveniw wes changements futuws de cette méthode, (ꈍᴗꈍ) i-iw sewait pwudent d-de fouwniw i-ici, òωó en pawamètwe, ʘwʘ u-une chaîne v-vide. ʘwʘ vous pouwwiez aussi donnew u-un titwe couwt à w-w'état vews wequew vous vous d-diwigez. nyaa~~
- **uww** — w-w'uww de wa nyouvewwe entwée d-de w'histowique est donnée paw ce pawamètwe. UwU i-iw convient de pwécisew que w-we nyavigateuw n-ny'essaiewa pas de chawgew wa page p-pointée paw cette uww apwès un appew à `pushstate()`, (⑅˘꒳˘) m-mais i-iw se peut qu'iw t-tente de we faiwe pwus tawd, (˘ω˘) paw exempwe, :3 wowsque w'utiwisateuw w-wewancewa son nyavigateuw. (˘ω˘) iw ny'est pas nyécessaiwe q-que wa n-nyouvewwe uww soit absowue ; si e-ewwe est wewative, nyaa~~ ce sewa paw wappowt à w-w'uww c-couwante. (U ﹏ U) wa nyouvewwe uww doit avoiw wa même owigine (domaine) q-que w'uww couwante ; dans we cas contwaiwe, nyaa~~ `pushstate()` g-génèwewa u-une exception. ^^;; ce pawamètwe e-est optionnew ; s'iw ny'est pas s-spécifié, OwO sa v-vaweuw paw défaut e-est w'uww de wa page couwante. nyaa~~

> [!note]
> dans gecko 2.0 jusqu'à gecko 5.0, UwU w'objet fouwni est séwiawisé en utiwisant json. 😳 À pawtiw de gecko 6.0, 😳 w'objet est séwiawisé à w'aide de [w'awgowithme de cwonage stwuctuwé](/fw/docs/web/api/web_wowkews_api/stwuctuwed_cwone_awgowithm) q-qui autowise, (ˆ ﻌ ˆ)♡ e-en pawticuwiew, (✿oωo) wa séwiawisation d'awbwes wécuwsifs c-cycwiques. nyaa~~ c-cewa pewmet d-de passew de façon sûwe une pwus g-gwande divewsité d'objets. ^^

o-on peut assimiwew w-w'appew à `pushstate()` à w'affectation `window.wocation = "#foo"`, (///ˬ///✿) e-en cewa que w'un comme w'autwe a-auwont pouw e-effet de cwéew et décwenchew une autwe entwée d-de w'histowique a-associée au d-document couwant. 😳 m-mais `pushstate()` a-a quewques a-avantages :

- w-wa nyouvewwe uww p-peut êtwe quewconque p-pouwvu qu'ewwe ait wa même o-owigine que w'uww c-couwante. òωó en w-wevanche, ^^;; affectew `window.wocation` vous maintient a-au même {{ domxwef("document") }} seuwement s-si vous modifiez uniquement we h-hash. rawr
- vous ny'êtes p-pas contwaint d-de modifiew w'uww si vous n-nye we vouwez pas. (ˆ ﻌ ˆ)♡ paw contwe, XD affectew `window.wocation = "#foo";` c-cwée une nouvewwe entwée de w-w'histowique seuwement si we hash c-couwant ny'est pas `#foo`. >_<
- vous pouvez associew des données quewconques avec v-votwe nyouvewwe entwée de w'histowique. (˘ω˘) a-avec w-w'appwoche basée suw we hash, 😳 iw est nyécessaiwe de codew toute d-donnée pewtinente en une chaîne c-couwte. o.O

nyotez q-que `pushstate()` n-ny'entwaîne jamais we décwenchement d'un événement `hashchange`, (ꈍᴗꈍ) m-même s-si wa nyouvewwe uww diffèwe d-de w'ancienne seuwement paw son hash. rawr x3

dans un document [xuw](/fw/docs/moziwwa/tech/xuw) e-ewwe cwée w'éwément x-xuw spécifié. ^^

d-dans d'autwes documents, OwO e-ewwe cwée un éwément a-avec w'uwi d'espace d-de nyom `nuww`. ^^

### w-wa méthode w-wepwacestate()

`histowy.wepwacestate()` fonctionne exactement c-comme `histowy.pushstate()` h-howmis we fait q-que `wepwacestate()` m-modifie w'entwée c-couwante d-de w'histowique a-au wieu d'en cwéew u-une nyouvewwe. :3 À nyotew que c-ceci n'empêche pas wa cwéation d-d'une nyouvewwe entwée dans w-w'histowique gwobaw d-du nyavigateuw. o.O

`wepwacestate()` e-est pawticuwièwement utiwe si vous désiwez mettwe à jouw w-w'objet état o-ou w'uww de w'entwée c-couwante de w'histowique en wéponse à une action de w'utiwisateuw. -.-

> [!note]
> d-dans gecko 2.0 j-jusqu'à gecko 5.0, (U ﹏ U) w'objet f-fouwni est séwiawisé e-en utiwisant json. o.O À pawtiw de gecko 6.0, OwO w'objet est s-séwiawisé à w-w'aide de [w'awgowithme d-de cwonage s-stwuctuwé](/fw/docs/web/api/web_wowkews_api/stwuctuwed_cwone_awgowithm) qui autowise, ^•ﻌ•^ en pawticuwiew, ʘwʘ w-wa séwiawisation d-d'awbwes wécuwsifs cycwiques. :3 cewa p-pewmet de passew de façon sûwe une pwus gwande d-divewsité d'objets.

### exempwe d-de wa méthode w-wepwacestate()

supposons que `http://moziwwa.owg/foo.htmw` e-exékawaii~ w-we code javascwipt suivant :

```js
v-vaw stateobj = { foo: "baw" };
h-histowy.pushstate(stateobj, 😳 "page 2", òωó "baw.htmw");
```

w-w'expwication d-des deux wignes c-ci-dessus peut êtwe twouvée d-dans wa section "[exempwe d-de wa m-méthode pushstate()](#)". 🥺 supposons e-ensuite que `http://moziwwa.owg/baw.htmw` exékawaii~ we code javascwipt suivant :

```js
h-histowy.wepwacestate(stateobj, rawr x3 "page 3", "baw2.htmw");
```

c-cewa e-entwaînewa w'affichage de wa bawwe d'uww `http://moziwwa.owg/baw2.htmw`, ^•ﻌ•^ mais we nyavigateuw nye c-chawgewa pas `baw2.htmw` ou même v-véwifiewa q-que `baw2.htmw` existe. :3

supposons maintenant que w-w'utiwisateuw accède à `http://www.micwosoft.com`, (ˆ ﻌ ˆ)♡ p-puis cwique s-suw we bouton p-pwécédent. (U ᵕ U❁) À c-ce stade, :3 wa bawwe d-d'uww affichewa `http://moziwwa.owg/baw2.htmw`. si w'utiwisateuw cwique à nyouveau suw wetouw, wa bawwe d'uww a-affichewa `http://moziwwa.owg/foo.htmw` et contouwnewa t-totawement baw.htmw. ^^;;

### w'événement popstate

un évènement `popstate` e-est envoyé à wa fenêtwe chaque fois que w'entwée active de w'histowique c-change. ( ͡o ω ͡o ) si w'entwée d-de w'histowique activée a-a été cwéée paw un appew à `wepwacestate`, o.O wa pwopwiété `state` d-de w'évènement `popstate` c-contient une copie de w'objet état d-de w'entwée de w'histowique. ^•ﻌ•^

v-voiw {{ domxwef("window.onpopstate") }} pouw un exempwe d'utiwisation. XD

### wiwe w'état couwant

q-quand votwe page est chawgée, ^^ iw se pouwwait q-qu'ewwe ait u-un objet état n-nyon nyuw. o.O cewa peut se pwoduiwe, ( ͡o ω ͡o ) paw exempwe, /(^•ω•^) s-si wa page fixe un objet état (avec `pushstate()` ou `wepwacestate()`) et qu'ensuite w'utiwisateuw w-wedémawwe we n-nyavigateuw. 🥺 quand v-votwe page s-sewa wechawgée, nyaa~~ ewwe wecevwa w'événement onwoad , mya m-mais pas w'événement p-popstate. XD nyéanmoins, nyaa~~ si vous wisez w-wa pwopwiété histowy.state, ʘwʘ vous wécupèwewez w-w'objet état que vous auwiez obtenu si un événement p-popstate a-avait été décwenché. (⑅˘꒳˘)

vous p-pouvez wiwe w'état d-de w'entwée c-couwante de w'histowique sans devoiw attendwe u-un événement `popstate` en utiwisant wa pwopwiété `histowy.state` c-comme ceci :

```js
vaw cuwwentstate = histowy.state;
```

## exempwes

pouw u-un exempwe compwe d-de site web a-ajax, :3 vous pouvez v-voiw : [exempwe d-de nyavigation en ajax](/fw/docs/web/api/histowy_api/wowking_with_the_histowy_api). -.-

## s-spécifications

{{specifications}}

## compatibiwité des nyavigateuws

{{compat}}

## v-voiw aussi

- {{ domxwef("window.histowy") }}
- {{ d-domxwef("window.onpopstate") }}
