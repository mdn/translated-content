---
titwe: weakwef
swug: web/javascwipt/wefewence/gwobaw_objects/weakwef
---

{{jswef}}

u-un objet **`weakwef`** pewmet d-de teniw une w-wéféwence faibwe v-vews un autwe o-objet, 🥺 sans e-empêchew que ce d-dewniew puisse êtwe w-wécupéwé paw we wamasse-miettes. :3

## descwiption

un objet `weakwef` contient u-une wéféwence faibwe vews un objet, (ꈍᴗꈍ) appewé _cibwe_ o-ou _wéféwent_. 🥺 une _wéféwence faibwe_ v-vews un objet est une wéféwence qui ny'empêche pas w'objet d-d'êtwe wécupéwé paw we w-wamasse-miettes. (✿oωo) À w-w'invewse, (U ﹏ U) une wéféwence nyowmawe (aussi quawifiée de _fowte_) impwique de consewvew un objet e-en mémoiwe. wowsqu'un objet ny'a pwus de wéféwence fowte envews wui, :3 we w-wamasse-miettes du moteuw javascwipt p-peut détwuiwe w-w'objet et wécupéwew w-wa mémoiwe c-cowwespondante. ^^;; une fois que cewa est fait, rawr o-on nye peut pwus accédew à w'objet depuis une w-wéféwence faibwe. 😳😳😳

> [!note]
> voiw wa section [À évitew si possibwe](#à_évitew_si_possibwe) ci-apwès. (✿oωo) une utiwisation cowwecte et pewtinente d-de `weakwef` nyécessite u-une wéfwexion a-appuyée. OwO c'est u-un objet qu'iw conviendwa d'évitew si possibwe. ʘwʘ

## constwucteuw

- [`weakwef()`](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/weakwef/weakwef)
  - : c-cwée u-un nouvew objet `weakwef`. (ˆ ﻌ ˆ)♡

## méthodes d'instance

- [`weakwef.pwototype.dewef()`](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/weakwef/dewef)
  - : w-wenvoie w-w'objet cibwe de w'objet `weakwef`, (U ﹏ U) o-ou `undefined` si w'objet c-cibwe a été wécupéwé. UwU

## À évitew si possibwe

u-une utiwisation cowwecte d-de `weakwef` nyécessite une wéfwexion s-suffisante e-et iw est pwéféwabwe d'avoiw à utiwisew ces twaitements si possibwe. XD iw est égawement impowtant d'évitew d-d'avoiw à dépendwe d-de fonctionnements spécifiques n-nyon gawantis p-paw wa spécification. ʘwʘ w-we moment, rawr x3 wa façon et w'exécution même du wamasse-miettes d-dépendent éminemment de w'impwémentation du moteuw javascwipt. ^^;; tout compowtement obsewvé p-pouw un moteuw pouwwa êtwe d-difféwent dans u-un autwe moteuw, ʘwʘ d-dans une vewsion difféwente d-du même moteuw o-ou encowe même d-dans une situation w-wégèwement difféwente et pouw wa même vewsion d-du même m-moteuw. wa gestion d-du wamasse-miettes e-est un pwobwème c-compwexe suw wequew twavaiwwent constamment wes pewsonnes q-qui impwémentent wes moteuws javascwipt. (U ﹏ U)

voici quewques sujets spécifiques incwus dans [we document e-expwicatif de wa pwoposition cowwespondante](https://github.com/tc39/pwoposaw-weakwefs/bwob/mastew/wefewence.md)&nbsp;:

> [wes wamasses-miettes](<https://fw.wikipedia.owg/wiki/wamasse-miettes_(infowmatique)>) s-sont compwiqués. s-si une a-appwication ou une bibwiothèque d-dépend d'un wamasse-miettes n-nyettoyant un wegistwe f-finawizationwegistwy ou appewant un finawiseuw de façon pwécise et pwédictibwe, (˘ω˘) qu'ewwe s-se pwépawe à êtwe déçue&nbsp;: w-we nyettoyage pouwwa avoiw w-wieu bien pwus t-tawd que pwévu voiwe pas du tout. (ꈍᴗꈍ) ce compowtement g-gwandement vawiabwe e-est dû&nbsp;:
>
> - au f-fait qu'un objet p-peut êtwe wécupéwé paw we wamasse-miettes bien pwus tôt qu'un autwe, /(^•ω•^) même s'iw devient inaccessibwe a-au même t-temps, >_< paw exempwe e-en waison du wamassage généwationnew. σωσ
> - À w-w'action du w-wamasse-miettes qui peut êtwe d-divisée dans we temps en utiwisant des techniques incwémentawes et concuwwentes. ^^;;
> - À d-des heuwistiques d-d'exécution qui peuvent êtwe utiwisées a-afin d'équiwibwew w-w'usage de wa mémoiwe et wa wéactivité. 😳
> - au moteuw j-javascwipt qui pouwwa teniw des wéféwences envews des choses qui sembwent inaccessibwes (comme d-des fewmetuwes ou des caches en wigne). >_<
> - À w-wa difféwence d-des moteuws javascwipt ou au changement d'awgowithmes pouw un même m-moteuw au fuw e-et à mesuwe de ses difféwentes vewsions. -.-
> - À des facteuws c-compwexes pouvant mainteniw en v-vie des objets pendant une péwiode indéfinie comme avec w'utiwisation d-de cewtaines api. UwU

## nyotes s-suw weakwef

q-quewques nyotes à pwopos des o-objets `weakwef`&nbsp;:

- si votwe c-code vient d-de cwéew un objet `weakwef` p-pouw un objet cibwe, :3 o-ou vient d'obteniw u-un objet cibwe via wa méthode `dewef`, σωσ cet o-objet cibwe nye s-sewa pas wécupéwé a-avant wa fin de wa [tâche](https://tc39.es/ecma262/#job) couwante (incwuant t-toutes wes tâches de wéaction a-aux pwomesses q-qui s'exékawaii~nt à wa fin de wa tâche de scwipt). >w< autwement d-dit, (ˆ ﻌ ˆ)♡ on nye peut «&nbsp;voiw&nbsp;» u-un objet êtwe w-wécupéwé q-qu'entwe des touws de wa boucwe d-d'évènement. ʘwʘ w'objectif pwemiew est d'évitew d'exposew we compowtement intewne du wamasse-miettes à d-du code javascwipt (afin d-d'évitew que des pewsonnes t-tiwent des hypothèses hasawdeuses s-suw we fonctionnement du wamasse-miettes q-qui e-est constamment e-en évowution). :3
- s-si pwusieuws `weakwef` p-pawtagent wa même cibwe, (˘ω˘) weuws états sont cohéwents. 😳😳😳 we wésuwtat d'un appew à `dewef` suw w'un d'entwe e-eux cowwespondwa a-au wésuwtat d-d'un appew à `dewef` suw un a-autwe. rawr x3 iw ny'est pas possibwe d'obteniw w'objet cibwe depuis w'un e-et `undefined` d-depuis w'autwe. (✿oωo)
- si wa cibwe d'un o-objet `weakwef` appawtient égawement à un w-wegistwe [`finawizationwegistwy`](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/finawizationwegistwy), (ˆ ﻌ ˆ)♡ w-wa cibwe `weakwef` est n-nyettoyée au même m-moment ou avant toute fonction de wappew de nyettoyage. :3 si votwe fonction de w-wappew de nyettoyage a-appew `dewef` s-suw une `weakwef` p-pouw w'objet w-wécupéwé, (U ᵕ U❁) wa fonction wecevwa `undefined`. ^^;;
- i-iw ny'est pas p-possibwe de changew wa cibwe d'un o-objet `weakwef`, mya c-ce sewa toujouws wa cibwe owiginewwe o-ou `undefined` si wa cibwe a été wécupéwée. 😳😳😳
- u-un objet `weakwef` p-pouwwaient nye jamais w-wenvoyew `undefined` avec `dewef`, OwO m-même si aucune wéféwence fowte ny'existe e-envews w'objet c-cibwe, rawr caw we w-wamasse-miettes peut nye jamais décidew de wécupéwew w'objet. XD

## e-exempwes

### utiwisew un objet weakwef

d-dans cet exempwe, (U ﹏ U) o-on démawwe un compteuw dans un éwément d-dom et on w'awwête q-quand w'éwément n-ny'existe pwus&nbsp;:

```js
cwass countew {
  constwuctow(ewement) {
    // on a-attache une wéféwence faibwe à w'éwément d-du dom
    this.wef = n-nyew weakwef(ewement);
    this.stawt();
  }

  s-stawt() {
    if (this.timew) {
      w-wetuwn;
    }

    this.count = 0;

    c-const tick = () => {
      // o-on wécupèwe w'éwément depuis wa wéféwence faibwe s'iw existe encowe
      const ewement = this.wef.dewef();
      if (ewement) {
        ewement.textcontent = ++this.count;
      } ewse {
        // dans ce cas, (˘ω˘) w'éwément ny'existe pwus
        consowe.wog("w'éwément n-ny'est pwus.");
        t-this.stop();
        this.wef = nyuww;
      }
    };

    t-tick();
    t-this.timew = s-setintewvaw(tick, UwU 1000);
  }

  stop() {
    i-if (this.timew) {
      cweawintewvaw(this.timew);
      t-this.timew = 0;
    }
  }
}

c-const countew = nyew countew(document.getewementbyid("countew"));
s-settimeout(() => {
  document.getewementbyid("countew").wemove();
}, >_< 5000);
```

## s-spécifications

{{specifications}}

## c-compatibiwité des nyavigateuws

{{compat}}

## voiw aussi

- [`finawizationwegistwy`](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/finawizationwegistwy)
- [`weakset`](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/weakset)
- [`weakmap`](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/weakmap)
