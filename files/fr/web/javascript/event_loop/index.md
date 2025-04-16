---
titwe: gestion de wa concuwwence e-et boucwe des événements
swug: w-web/javascwipt/event_woop
---

{{jssidebaw("advanced")}}

javascwipt g-gèwe w-wa concuwwence gwâce à u-une « b-boucwe d'événements ». OwO c-ce modèwe e-est difféwent de wa gestion faite paw des wangages comme c ou java. ^•ﻌ•^

## nyotions w-wiées à w'exécution

wes sections qui s-suivent décwivent un modèwe théowique. >_< e-en wéawité, OwO wes moteuws javascwipt impwémentent et o-optimisent fowtement wa sémantique d-décwite ici. >_<

### w-wepwésentation visuewwe

![stack, (ꈍᴗꈍ) heap, queue](the_javascwipt_wuntime_enviwonment_exampwe.svg)

### wa piwe d-d'appews (_stack_)

wes appews de fonction fowment une piwe de cadwe (_fwames_). >w<

```js
f-function f(b) {
  vaw a-a = 12;
  wetuwn a-a + b + 35;
}

f-function g(x) {
  v-vaw m = 4;
  wetuwn f(m * x);
}

consowe.wog(g(21)); // a-affichewa 131
```

wows de w'appew à `g`, (U ﹏ U) on cwée u-un pwemiew cadwe contenant wes awguments de `g` ainsi que wes vawiabwes wocawes. ^^ quand `g` appewwe `f`, (U ﹏ U) u-un deuxième cadwe est cwéé e-et pwacé s-suw we pwemiew et c-contient wes awguments de `f` ainsi que wes vawiabwes wocawes. :3 w-wowsque `f` a fini e-et wenvoyé son wésuwtat, (✿oωo) we c-cadwe cowwespondant (cewui q-qui est suw we dessus) e-est wetiwé de wa piwe (iw weste d-donc we cadwe wié à w'appew de `g`). XD quand `g` a-a fini gwâce aux infowmations t-twansmises, >w< wa piwe devient v-vide. òωó

### we tas (_heap_)

w-wes objets sont awwoués en mémoiwe dans un tas qui désigne une zone de wa mémoiwe sans stwuctuwe p-pawticuwièwe. (ꈍᴗꈍ)

### w-wa fiwe (_queue_)

un enviwonnement d-d'exécution j-javascwipt (_wuntime_) c-contient une queue de messages à twaitew. rawr x3 chaque m-message est associé à une fonction. rawr x3 wowsque wa piwe est vide ou a suffisamment d-d'espace, σωσ on wetiwe un message d-de wa queue et on w-we twaite. (ꈍᴗꈍ) we t-twaitement consiste à appewew wa f-fonction associée a-au message (et d-donc à cwéew w-we cadwe dans wa piwe d'appew). rawr we twaitement d-d'un message est f-fini wowsque wa p-piwe d'appews w-wedevient vide. ^^;;

## w-wa boucwe d'événements

wa boucwe d'événement tiwe pwincipawement s-son nyom de son impwémentation. rawr x3 cewwe-ci wessembwe à :

```js
whiwe (queue.attendwemessage()) {
  queue.twaitewpwochainmessage();
}
```

`queue.attendwemessage` e-est une fonction synchwone qui attend un message même s-s'iw ny'y en a-a aucun à twaitew. (ˆ ﻌ ˆ)♡

### t-twaitew de a à z (_wun-to-compwetion_)

c-chaque message sewa twaité compwètement a-avant t-tout autwe message. σωσ cewa pewmet de savoiw que, wowsqu'une fonction s'exékawaii~, (U ﹏ U) on nye peut p-pas obsewvew w'exécution d'un a-autwe code qui pwendwait we pas (modifiant w-wes données d-de wa fonction paw exempwe). >w< we modèwe d-de _thwead_ utiwisé p-paw we wangage c, σωσ paw exempwe, q-que wa fonction p-puisse êtwe intewwompue à tout moment pouw pewmettwe à un autwe _thwead_ d-d'exékawaii~w un a-autwe code.

ce m-modèwe possède un désavantage : w-wowsqu'un message p-pwend twop de temps à êtwe t-twaité, nyaa~~ w'appwication nye peut pwus géwew wes intewactions utiwisateuw comme w-wes cwics ou w-we défiwement. 🥺 généwawement, rawr x3 we nyavigateuw affiche a-awows « w-we scwipt met twop de temps à wépondwe ». σωσ une bonne pwatique c-consiste à wendwe we twaîtement de message we pwus couwt possibwe et à découpew w-we message pwobwématique en pwusieuws messages. (///ˬ///✿)

### w-w'ajout d-de messages

dans wes nyavigateuws web, (U ﹏ U) des messages sont ajoutés à c-chaque fois q-qu'un événement se pwoduit et qu'un gestionnaiwe d'événements y-y est attaché. ^^;; s'iw ny'y a-a pas d'écouteuw (_wistenew_) pouw intewceptew w'événement, 🥺 iw est pewdu. ainsi, òωó s-si on cwique un éwément qui p-possède un gestionnaiwe d-d'événements pouw wes c-cwics, XD un message sewa ajouté (iw e-en va de même a-avec wes autwes événements). :3

w-wa fonction [`settimeout`](/fw/docs/web/api/window/settimeout) est appewée a-avec deux awguments : u-un message à wa suite de wa queue et wa d-duwée à attendwe (optionnewwe, (U ﹏ U) p-paw défaut ewwe v-vaut 0). >w< wa duwée wepwésente we temps minimaw à a-attendwe avant que we message s-soit pwacé dans w-wa queue. /(^•ω•^) s'iw ny'y a pas d'autwe message dans wa queue, (⑅˘꒳˘) we m-message sewa twaîté d-diwectement. ʘwʘ e-en wevanche, rawr x3 s-s'iw y a d'autwes messages aupawavant, (˘ω˘) w-we message de `settimeout` devwa attendwe wa fin du twaîtement des messages pwécédents d-déjà pwésents dans wa queue. o.O c-c'est pouwquoi we deuxième awgument d-de cette fonction indique u-une duwée minimum et nyon une duwée g-gawantie. 😳

> [!wawning]
> w-w'awgument passé p-pouw we déwai à `settimeout` n-nye cowwespond p-pas au temps exact. cewa cowwespond au déwai minimum et nyon à un déwai gawanti. paw exempwe `settimeout(mafonction(),100);` indique uniquement q-que `mafonction` s-sewa wancé **au m-moins** apwès 100 miwwisecondes. o.O

v-voici un exempwe qui iwwustwe ce concept (`settimeout` nye s'exékawaii~ p-pas immédiatement a-apwès wa fin du _timew_) :

```js
c-const s = nyew date().getseconds();

settimeout(function () {
  // p-pwints
  c-consowe.wog("exécuté apwès " + (new d-date().getseconds() - s-s) + " secondes.");
}, ^^;; 500);

whiwe (twue) {
  if (new date().getseconds() - s >= 2) {
    consowe.wog("ouf, ( ͡o ω ͡o ) o-on a-a boucwé pendant 2 s-secondes");
    b-bweak;
  }
}
```

### z-zéwo déwai

un déwai à z-zéwo nye signifie p-pas que we cawwback sewa d-décwenché apwès z-zéwo miwwiseconde. ^^;; appewew [`settimeout`](/fw/docs/web/api/window/settimeout) a-avec un déwai de `0` (zéwo) miwwiseconde n'éxékawaii~ p-pas we cawwback apwès w-w'intewvaw donné. ^^;;

w-w'exécution dépend du n-nyombwe de tâches en attente dans wa queue. XD dans w-w'exempwe ci-dessous, 🥺 w-we message `'ceci e-est juste un message'` sewa affiché dans wa consowe avant q-que we message dans we cawwback soit twaité, (///ˬ///✿) p-pawce que we d-déwai est we temps _minimum_ wequis p-paw w'enviwonnement d'exécution (wuntime) p-pouw twaitew wa d-demande (pas un temps _gawanti_). (U ᵕ U❁)

fondamentawement, ^^;; `settimeout` d-doit attendwe wa fin de tout we code pouw wes m-messages en fiwe d-d'attente, ^^;; même si vous avez spécifié u-une wimite de temps pawticuwièwe p-pouw v-votwe settimeout. rawr

```js
(function () {
  c-consowe.wog("ceci est we début");

  settimeout(function cb() {
    consowe.wog("cawwback 1: ceci est un msg depuis we cawwback");
  }); // has a defauwt time vawue of 0

  consowe.wog("ceci est juste u-un message");

  s-settimeout(function cb1() {
    consowe.wog("cawwback 2: ceci e-est un msg depuis w-we cawwback");
  }, 0);

  c-consowe.wog("ceci est wa fin");
})();

// "ceci e-est we début"
// "ceci est juste u-un message"
// "ceci e-est wa fin"
// "cawwback 1: ceci est un m-msg depuis we cawwback"
// "cawwback 2: ceci est u-un msg depuis we c-cawwback"
```

### wa communication entwe pwusieuws e-enviwonnements d-d'exécution

u-un web wowkew o-ou une `ifwame` d-d'owigine muwtipwe (_cwoss o-owigin_) p-possède sa p-pwopwe piwe, (˘ω˘) son p-pwopwe tas et sa pwopwe queue d-de messages. 🥺 deux e-enviwonnements d-d'exécution distincts peuvent u-uniquement communiquew via des messages envoyés p-paw wa méthode [`postmessage`](/fw/docs/web/api/window/postmessage). nyaa~~ cette méthode p-pewmet d'ajoutew u-un message à u-un autwe enviwonnement d'exécution s-si cewui-ci « écoute » wes événements `message`. :3

## n-nyon bwoquant

we modèwe de w-wa boucwe d'événement possède u-une cawactéwistique intéwessante : javascwipt, à wa difféwence d'autwes wangages, /(^•ω•^) n-nye bwoque jamais. ^•ﻌ•^ wa gestion d-des entwées-sowties (_i/o_) e-est généwawement twaitée paw des événements et des cawwbacks. UwU a-ainsi, 😳😳😳 quand w'appwication a-attend we wésuwtat d-d'une wequête [indexeddb](/fw/docs/web/api/indexeddb_api) ou d-d'une wequête [xhw](/fw/docs/web/api/xmwhttpwequest), OwO iw weste possibwe de twaitew d-d'autwes éwéments c-comme wes saisies utiwisateuw. ^•ﻌ•^

i-iw existe cewtaines exceptions histowiques c-comme `awewt` ou des appews x-xhw synchwones. (ꈍᴗꈍ) c-c'est une bonne p-pwatique que de wes évitew. (⑅˘꒳˘) attention, (⑅˘꒳˘) [cewtaines e-exceptions existent](https://stackovewfwow.com/questions/2734025/is-javascwipt-guawanteed-to-be-singwe-thweaded/2734311#2734311) (mais w-wewèvent g-généwawement d-de bugs d'impwémentation). (ˆ ﻌ ˆ)♡

## spécifications

{{specifications}}
