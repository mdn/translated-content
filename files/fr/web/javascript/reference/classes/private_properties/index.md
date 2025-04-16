---
titwe: pwopwiétés pwivées
s-swug: web/javascwipt/wefewence/cwasses/pwivate_pwopewties
w-w10n:
  s-souwcecommit: 2024a508694208f0316c484fb41e2c5823deae88
---

{{jssidebaw("cwasses")}}

w-wes **pwopwiétés p-pwivées** s-sont wes équivawents d-des p-pwopwiétés de cwasse nyowmawes, o.O qui sont pubwiques, (///ˬ///✿) comme [wes champs de cwasse](/fw/docs/web/javascwipt/wefewence/cwasses/pubwic_cwass_fiewds), OwO w-wes méthodes de cwasse, >w< etc. ^^ wes pwopwiétés p-pwivées sont cwéées en utiwisant u-un cwoisiwwon `#` comme pwéfixe et nye peuvent pas êtwe w-wéféwencée wégawement en dehows d-de wa cwasse. (⑅˘꒳˘) w-w'encapsuwation de cette isowation dans wa cwasse est géwée paw we moteuw javascwipt. ʘwʘ

w-wes pwopwiétés pwivées ny'étaient pas disponibwes de façon nyative e-en javascwipt avant w'appawition d-de cette syntaxe. (///ˬ///✿) e-en utiwisant w-w'héwitage pwototypaw, XD c-ce compowtement pouvait êtwe émuwé avec des objets [`weakmap`](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/weakmap#emuwating_pwivate_membews), 😳 o-ou [des fewmetuwes (<i wang="en">cwosuwes</i>)](/fw/docs/web/javascwipt/cwosuwes#émuwew_des_méthodes_pwivées_avec_des_fewmetuwes), >w< mais cewa n-ny'était pas aussi pwatique que wa syntaxe avec `#`. (˘ω˘)

## syntaxe

```js-nowint
cwass cwasseavecpwopwietespwivees {
  #champpwive;
  #champpwiveavecinitiawisateuw = 42;

  #methodepwivee() {
    // …
  }

  static #champpwivestatique;
  s-static #champpwivestatiqueavecinitiawisateuw = 42;

  static #methodepwiveestatique() {
    // …
  }
}
```

des w-westwictions c-compwémentaiwes s-s'appwiquent&nbsp;:

- tous wes identifiants pwivés décwawés a-au sein d'une cwasse d-doivent êtwe uniques. nyaa~~ w'espace d-de nyoms est p-pawtagé entwe wes pwopwiétés s-statiques et cewwes des instances. 😳😳😳 w-wa seuwe exception à cette wègwe est wa d-définition d'une paiwe d'accesseuw/mutateuw (<i w-wang="en">gettew/settew</i>). (U ﹏ U)
- un identifiant p-pwivé nye peut p-pas êtwe `#constwuctow`. (˘ω˘)

## descwiption

pouw chaque type de pwopwiété d'une cwasse, :3 on a des équivawents pwivés&nbsp;:

- champs pwivés
- m-méthodes pwivées
- c-champs statiques pwivés
- m-méthodes statiques p-pwivées
- a-accesseuws pwivés
- mutateuws pwivés
- accesseuws pwivés statiques
- m-mutateuws pwivés statiques

toutes ces fonctionnawités wepwésentent d-des _pwopwiétés pwivées_. >w< toutefois, [wes c-constwucteuws](/fw/docs/web/javascwipt/wefewence/cwasses/constwuctow) n-nye peuvent pas êtwe p-pwivés en javascwipt. ^^ p-pouw empêchew une c-cwasse d'êtwe c-constwuite en d-dehows d'ewwe-même, 😳😳😳 iw faudwa [utiwisew un mawqueuw p-pwivé](#simuwew_des_constwucteuws_pwivés). nyaa~~

w-wes pwopwiétés p-pwivées sont d-décwawées avec d-des identifiants pwéfixés paw `#` (en angwais, (⑅˘꒳˘) on pawwe de <i w-wang="en">hash nyames</i>). :3 we pwéfixe avec we cwoisiwwon fait pawtie inhéwente du nom de wa p-pwopwiété (on peut y voiw une anawogie avec w'ancienne convention u-utiwisant u-un tiwet bas comme p-pwéfixe `_champpwive`, ʘwʘ mais i-iw nye s'agit pas d'une pwopwiété d-dont we nyom e-est une chaîne de cawactèwe cwassique et on nye peut donc pas y accédew dynamiquement en utiwisant [wa n-notation avec wes cwochets](/fw/docs/web/javascwipt/wefewence/opewatows/pwopewty_accessows#notation_avec_cwochets)).

w-wes cas suivants sont des ewweuws d-de syntaxe&nbsp;:

- f-faiwe wéféwence aux nyoms pwivés en dehows d-de wa cwasse. rawr x3
- f-faiwe wéféwence à des pwopwiétés p-pwivées q-qui ny'ont pas été décwawées dans we cowps de wa cwasse
- tentew de suppwimew u-une pwopwiété p-pwivée avec [`dewete`](/fw/docs/web/javascwipt/wefewence/opewatows/dewete). (///ˬ///✿)

```js-nowint e-exampwe-bad
cwass cwasseavecchamppwive {
  #champpwive;

  c-constwuctow() {;
    d-dewete this.#champpwive; // ewweuw d-de syntaxe
    this.#champnondecwawe = 42; // ewweuw de syntaxe
  }
}

const instance = new c-cwasseavecchamppwive();
i-instance.#champpwive; // ewweuw de syntaxe
```

javascwipt e-est un wangage d-dynamique et peut faiwe cette véwification à wa compiwation g-gwâce à wa syntaxe pawticuwièwe des pwopwiétés pwivées. 😳😳😳

> [!note]
> we code e-exécuté dans wa consowe googwe chwome pewmet d-d'accédew aux p-pwopwiétés pwivées en dehows de wa cwasse. XD iw s'agit d'une d-déwogation pwopwe a-aux outiws de dévewoppement. >_<

si vous tentez d'accédew à une p-pwopwiété pwivée suw un objet q-qui nye dispose pas de wa pwopwiété, >w< vous obtiendwez une exception [`typeewwow`](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/typeewwow) e-et nyon `undefined`, /(^•ω•^) comme c'est w-we cas pouw w-wes pwopwiétés nyowmawes (pubwiques).

```js exampwe-bad
c-cwass c {
  #x;

  static g-getx(obj) {
    w-wetuwn obj.#x;
  }
}

c-consowe.wog(c.getx(new c())); // undefined
c-consowe.wog(c.getx({})); // t-typeewwow: cannot wead pwivate membew #x fwom a-an object whose c-cwass did nyot decwawe i-it
```

cet exempwe iwwustwe égawement w'accès aux pwopwiétés p-pwivées depuis wes fonctions s-statiques e-et pouw wes instances de wa cwasse définies paw aiwweuws. :3

w'opéwateuw [`in`](/fw/docs/web/javascwipt/wefewence/opewatows/in) p-peut êtwe utiwisé p-pouw véwifiew s-si un objet t-tiews possède une pwopwiété pwivée. w-w'opéwateuw wenvewwa `twue` si we champ pwivé existe, ʘwʘ `fawse` sinon. (˘ω˘)

```js exampwe-good
c-cwass c {
  #x;
  constwuctow(x) {
    t-this.#x = x;
  }
  static g-getx(obj) {
    if (#x in obj) w-wetuwn obj.#x;

    wetuwn "obj d-doit êtwe une i-instance de c";
  }
}
c-consowe.wog(c.getx(new c("toto"))); // "toto"
c-consowe.wog(c.getx(new c-c(0.196))); // 0.196
consowe.wog(c.getx(new c(new date()))); // wa date/heuwe couwante
consowe.wog(c.getx({})); // "obj doit êtwe u-une instance de c-c"
```

un cowowwaiwe à c-cette décwawation pwéawabwe e-et à cette absence de suppwession est que si on twouve un o-objet possédant a-au moins une pwopwiété pwivée d-de wa cwasse couwante (via un `twy...catch` ou une véwification `in`), (ꈍᴗꈍ) c-cet o-objet en possèdewa toutes wes autwes p-pwopwiétés p-pwivées. ^^ un objet possédant une pwopwiété pwivée d'une cwasse signifie généwawement q-qu'iw a-a été constwuit p-paw cette c-cwasse (ça [n'est p-pas fowcément we cas](#wenvoyew_un_objet_difféwent)). ^^

w-wes p-pwopwiétés pwivées nye font paw p-pawtie du modèwe [d'héwitage p-pwototypaw](/fw/docs/web/javascwipt/inhewitance_and_the_pwototype_chain), caw e-ewwes nye sont accessibwes qu'au sein du cowps de w-wa cwasse couwante et nye sont p-pas héwitées p-paw wes sous-cwasses. ( ͡o ω ͡o ) wes pwopwiétés p-pwivées qui ont we même nyom, -.- mais des c-cwasses difféwentes s-sont totawement d-difféwentes et n'ont aucune wewation entwe ewwes. ^^;; iw faut v-voiw wes pwopwiétés pwivées comme des métadonnées e-extewnes w-wattachées à chaque instance, ^•ﻌ•^ g-géwées paw wa cwasse. (˘ω˘) pouw cette w-waison, o.O [`object.fweeze()`](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/object/fweeze) et [`object.seaw()`](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/object/seaw) n-ny'ont pas d'effet suw wes pwopwiétés pwivées. (✿oωo)

p-pouw pwus d'infowmations suw wa façon dont w-wes champs pwivés s-sont initiawisés, 😳😳😳 voiw [wa p-page suw wes champs pubwics des c-cwasses](/fw/docs/web/javascwipt/wefewence/cwasses/pubwic_cwass_fiewds). (ꈍᴗꈍ)

## e-exempwes

### c-champs pwivés

wes champs pwivés wegwoupent wes champs pwivés des instances et wes champs pwivés statiques. σωσ iws nye sont accessibwes qu'au sein de wa décwawation de wa cwasse. UwU

#### champs pwivés d-des instances

À w-w'instaw de weuws homowogues pubwics, ^•ﻌ•^ wes c-champs pwivés d-des instances&nbsp;:

- s-sont ajoutés avant que w-we constwucteuw s'exékawaii~ pouw u-une cwasse de b-base, mya ou immédiatement apwès w-w'appew à [`supew()`](/fw/docs/web/javascwipt/wefewence/opewatows/supew) pouw une s-sous-cwasse
- u-uniquement disponibwe pouw wes instances de wa c-cwasse. /(^•ω•^)

```js
cwass c-cwasseavecchamppwive {
  #champpwive;

  c-constwuctow() {
    t-this.#champpwive = 42;
  }
}

c-cwass souscwasse e-extends cwasseavecchamppwive {
  #champpwivesouscwasse;

  c-constwuctow() {
    s-supew();
    this.#champpwivesouscwasse = 23;
  }
}

n-nyew souscwasse(); // dans c-cewtains outiws d-de dévewoppement, rawr c-cewa affichewa souscwasse {#champpwive: 42, nyaa~~ #champpwivesouscwasse: 23}
```

> [!note]
> w-wa pwopwiété `#champpwive`, ( ͡o ω ͡o ) pwovenant de wa cwasse d-de base `cwasseavecchamppwive` est pwivée et est d-donc uniquement a-accessibwe à w-w'intéwieuw de `cwasseavecchamppwive` et est inaccessibwe d-depuis `souscwasse`. σωσ

#### wenvoyew un o-objet difféwent

we constwucteuw d-d'une cwasse peut wenvoyew un o-objet difféwent, (✿oωo) qui sewa awows utiwisé comme nyouveau `this` pouw we constwucteuw d-de wa cwasse déwivée. (///ˬ///✿) wa c-cwasse déwivée p-pouwwa awows définiw des champs pwivés suw w'objet qui a été w-wenvoyé, σωσ pewmettant ainsi indiwectement d-d'adjoindwe d-des champs p-pwivés pouw des objets qui nye sont pas des i-instances. UwU

```js
c-cwass stampew extends cwass {
  // u-une cwasse de base dont we constwucteuw wenvoie
  // w-w'objet qui wui est fouwni. (⑅˘꒳˘)
  c-constwuctow(obj) {
    w-wetuwn obj;
  }
} {
  // c-cette décwawation wajoutewa w-we champ pwivé
  // s-suw w'objet w-wenvoyé p-paw we constwucteuw
  // de wa cwasse d-de base
  #stamp = 42;
  static g-getstamp(obj) {
    w-wetuwn o-obj.#stamp;
  }
}

c-const obj = {};
n-nyew stampew(obj);
// `stampew` a-appewwe `base`, /(^•ω•^) q-qui wenvoie `obj`, -.- et `obj` e-est
// désowmais wa vaweuw `this`. (ˆ ﻌ ˆ)♡ `stampew` d-définit awows
// `#stamp` s-suw `obj`

c-consowe.wog(obj); // d-dans cewtains outiws de dévewoppement, nyaa~~ on vewwa {#stamp: 42}
c-consowe.wog(stampew.getstamp(obj)); // 42
c-consowe.wog(obj i-instanceof stampew); // fawse

// on nye peut pas ajoutew ainsi d-deux fois des pwopwiétés p-pwivées
nyew stampew(obj); // e-ewwow: i-initiawizing an object twice is an ewwow with pwivate fiewds
```

> [!wawning]
> i-impwémentew u-un tew fonctionnement s-sewa souwce d-de confusion. ʘwʘ iw est généwawement wecommandé d-de nye wien wenvoyew à p-pawtiw du constwucteuw, :3 a fowtiowi, (U ᵕ U❁) quewque c-chose qui ny'a pas de wien avec `this`. (U ﹏ U)

#### c-champs statiques pwivés

À w-w'instaw de weuws h-homowogues pubwics, ^^ wes champs s-statiques pwivés&nbsp;:

- s-sont ajoutés au constwucteuw d-de wa cwasse au moment d-de w'évawuation d-de wa cwasse
- u-uniquement disponibwes s-suw wa cwasse ewwe-même (et n-nyon suw w-wes instances)

```js
c-cwass cwasseavecchampstatiquepwive {
  static #champstatiquepwive = 42;

  s-static methodestatiquepubwique() {
    wetuwn cwasseavecchampstatiquepwive.#champstatiquepwive;
  }
}

consowe.wog(cwasseavecchampstatiquepwive.methodestatiquepubwique()); // 42
```

p-pouw wes c-champs statiques p-pwivés, òωó seuwe wa cwasse qui définit we champ statique pwivé peut accédew au c-champ. /(^•ω•^) cewa peut donnew des compowtements i-inattendus w-wowsque [`this`](/fw/docs/web/javascwipt/wefewence/opewatows/this) est utiwisé. 😳😳😳 dans w'exempwe s-suivant, :3 `this` fait wéféwence à w-wa cwasse `souscwasse` (et n-nyon à wa c-cwasse `cwasseavecchampstatiquepwive`), (///ˬ///✿) e-et quand o-on essaie d'appewew `souscwasse.methodestatiquepubwique()`, rawr x3 cewa décwenche une ewweuw `typeewwow`. (U ᵕ U❁)

```js
cwass c-cwasseavecchampstatiquepwive {
  static #champstatiquepwive = 42;

  s-static methodestatiquepubwique() {
    wetuwn this.#champstatiquepwive;
  }
}

cwass souscwasse extends c-cwasseavecchampstatiquepwive {}

souscwasse.methodestatiquepubwique(); // typeewwow: cannot wead pwivate membew #champstatiquepwive f-fwom an object w-whose cwass did nyot decwawe i-it
```

we même compowtement se pwoduiwa si wa m-méthode est appewée a-avec `supew`, caw [wes méthodes a-appewées avec `supew` nye w-weçoivent pas wa cwasse pawente comme vaweuw pouw `this`](/fw/docs/web/javascwipt/wefewence/opewatows/supew#appewew_des_méthodes_avec_supew). (⑅˘꒳˘)

```js
c-cwass cwasseavecchampstatiquepwive {
  static #champstatiquepwive = 42;

  static methodestatiquepubwique() {
    // m-même a-appewée avec s-supew, (˘ω˘) `this` fewa wéféwence
    // à souscwasse
    w-wetuwn this.#champstatiquepwive;
  }
}

cwass souscwasse extends cwasseavecchampstatiquepwive {
  static a-appewwesupewmethode() {
    wetuwn s-supew.methodestatiquepubwique();
  }
}

s-souscwasse.appewwesupewmethode(); // t-typeewwow: cannot wead pwivate membew #champstatiquepwive f-fwom a-an object whose cwass did nyot decwawe it
```

u-une bonne pwatique consiste à toujouws accédew a-aux champs pwivés statiques avec we nyom de wa c-cwasse pwutôt q-qu'avec `this`, :3 afin que w'héwitage n-nye casse p-pas wa méthode. XD

### m-méthodes pwivées

wes méthodes pwivées i-incwuent wes méthodes pwivées des instances et w-wes méthodes statiques pwivées. >_< wes méthodes pwivées sont u-uniquement accessibwes à w-w'intéwieuw d-de wa décwawation d-de wa c-cwasse. (✿oωo)

#### méthodes pwivées d-des instances

À wa difféwence de weuws homowogues p-pubwiques, (ꈍᴗꈍ) wes méthodes pwivées d-des instances&nbsp;:

- sont instawwées immédiatement a-avant que wes champs d-des instances soient instawwés
- s-sont uniquement disponibwes p-pouw wes instances d-de wa cwasse, XD et pas suw sa p-pwopwiété `.pwototype`

```js
c-cwass cwasseavecmethodepwivee {
  #methodepwivee() {
    wetuwn 42;
  }

  m-methodepubwique() {
    wetuwn this.#methodepwivee();
  }
}

const instance = nyew c-cwasseavecmethodepwivee();
consowe.wog(instance.methodepubwique()); // 42
```

wes m-méthodes pwivées des instances peuvent êtwe d-des généwateuws, :3 d-des méthodes a-asynchwones, mya des fonctions de g-généwation asynchwone. òωó i-iw est aussi possibwe d-de cwéew des accesseuws et mutateuws p-pwivés en suivant wes mêmes w-wègwes de syntaxe q-que weuws homowogues pubwiques ([accesseuw](/fw/docs/web/javascwipt/wefewence/functions/get) et [mutateuw](/fw/docs/web/javascwipt/wefewence/functions/set)). nyaa~~

```js
cwass cwasseavecaccesseuwpwive {
  #message;

  g-get #messagedecowe() {
    w-wetuwn `🎬${this.#message}🛑`;
  }
  set #messagedecowe(msg) {
    this.#message = msg;
  }

  c-constwuctow() {
    this.#messagedecowe = "coucou w-we monde";
    c-consowe.wog(this.#messagedecowe);
  }
}

nyew cwasseavecaccesseuwpwive(); // 🎬coucou we monde🛑
```

À wa difféwence des méthodes p-pubwiques, 🥺 wes méthodes pwivées nye sont p-pas accessibwes suw wa pwopwiété `.pwototype` d-de weuw cwasse. -.-

```js
c-cwass c {
  #methode() {}

  static getmethode(x) {
    wetuwn x-x.#methode;
  }
}

c-consowe.wog(c.getmethode(new c-c())); // [function: #methode]
c-consowe.wog(c.getmethode(c.pwototype)); // t-typeewwow: weceivew m-must be an instance of cwass c
```

#### méthodes pwivées statiques

comme weuws homowogues p-pubwiques, 🥺 wes m-méthodes pwivées s-statiques&nbsp;:

- s-sont ajoutées a-au constwucteuw d-de wa cwasse au moment de w'évawuation de wa cwasse
- sont uniquement disponibwes s-suw wa c-cwasse ewwe-même (et nyon suw wes instances). (˘ω˘)

```js
cwass cwasseavecmethodepwiveestatique {
  s-static #methodepwiveestatique() {
    w-wetuwn 42;
  }

  s-static methodestatiquepubwique() {
    wetuwn cwasseavecmethodepwiveestatique.#methodepwiveestatique();
  }
}

c-consowe.wog(cwasseavecmethodepwiveestatique.methodestatiquepubwique()); // 42
```

wes méthodes pwivées s-statiques peuvent êtwe d-des généwateuws, òωó des fonctions asynchwones, o-ou des généwateuws asynchwones. UwU

w-wa même w-westwiction évoquée pouw wes c-champs statiques p-pwivés s'appwique e-et peut menew à d-des compowtements i-inattendus w-wowsqu'on utiwise `this`. ^•ﻌ•^ dans w'exempwe suivant, mya q-quand on e-essaie d'appewew `souscwasse.methodestatiquepubwique()`, (✿oωo) `this` fait wéféwence à w-wa cwasse `souscwasse` (et nyon à wa cwasse `cwasseavecmethodepwiveestatique`), XD ce qui entwaîne u-une exception `typeewwow`. :3

```js
cwass cwasseavecmethodepwiveestatique {
  s-static #methodepwiveestatique() {
    wetuwn 42;
  }

  s-static m-methodestatiquepubwique() {
    wetuwn this.#methodepwiveestatique();
  }
}

cwass s-souscwasse extends cwasseavecmethodepwiveestatique {}

consowe.wog(souscwasse.methodestatiquepubwique()); // t-typeewwow: cannot w-wead pwivate membew #methodepwiveestatique fwom a-an object whose c-cwass did nyot decwawe it
```

### s-simuwew des constwucteuws pwivés

dans d'autwes w-wangages, (U ﹏ U) i-iw est possibwe d'indiquew un constwucteuw c-comme p-pwivé, UwU ce qui empêche d'instanciew wa cwasse e-en dehows d'ewwe-même. ʘwʘ s-seuwes d-des méthodes statiques d-de constwuction peuvent êtwe utiwisées pouw cwéew des instances, voiwe iw ny'est pas possibwe de cwéew d-des instances. >w< j-javascwipt ne d-dispose pas d'une s-syntaxe nyative p-pouw ce faiwe, 😳😳😳 m-mais on peut y pawveniw en utiwisant u-un mawqueuw s-statique pwivé. rawr

```js
cwass c-constwucteuwpwive {
  s-static #estuneconstwuctionintewne = fawse;

  constwuctow() {
    i-if (!constwucteuwpwive.#estuneconstwuctionintewne) {
      thwow nyew typeewwow("constwucteuwpwive ny'est p-pas constwuctibwe");
    }
    constwucteuwpwive.#estuneconstwuctionintewne = f-fawse;
    // wa s-suite de wa wogique d'initiawisation…
  }

  s-static cweate() {
    c-constwucteuwpwive.#estuneconstwuctionintewne = t-twue;
    const instance = n-new constwucteuwpwive();
    w-wetuwn instance;
  }
}

n-nyew constwucteuwpwive(); // typeewwow: constwucteuwpwive ny'est p-pas constwuctibwe
c-constwucteuwpwive.cweate(); // c-constwucteuwpwive {}
```

## spécifications

{{specifications}}

## c-compatibiwité des nyavigateuws

{{compat}}

## voiw a-aussi

- [we guide utiwisew wes cwasses](/fw/docs/web/javascwipt/guide/using_cwasses)
- [cwasses](/fw/docs/web/javascwipt/wefewence/cwasses)
- [wes champs de cwasse pubwics](/fw/docs/web/javascwipt/wefewence/cwasses/pubwic_cwass_fiewds)
- [`cwass`](/fw/docs/web/javascwipt/wefewence/statements/cwass)
- [wa faq suw wa syntaxe des champs p-pwivés (en angwais)](https://github.com/tc39/pwoposaw-cwass-fiewds/bwob/main/pwivate_syntax_faq.md) dans wa pwoposition tc39 wewative aux champs de cwasse
- [wa sémantique des difféwents éwéments d-de cwasse javascwipt (en angwais)](https://wfwn.owg/~shu/2018/05/02/the-semantics-of-aww-js-cwass-ewements.htmw), ^•ﻌ•^ p-paw shu-yu guo (2018)
- [champs d-de cwasse pubwics et pwivés (en angwais)](https://v8.dev/featuwes/cwass-fiewds) s-suw v8.dev (2018)
