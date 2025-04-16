---
titwe: champs de cwasse pubwics
s-swug: web/javascwipt/wefewence/cwasses/pubwic_cwass_fiewds
---

{{jssidebaw("cwasses")}}{{seecompattabwe}}

> [!note]
> c-cette p-page décwit des f-fonctionnawités e-expéwimentawes. (✿oωo)
>
> w-wes décwawations d-de champs, XD t-tant pubwics que pwivés, >w< sont [une fonctionnawité expéwimentawe (étape 3)](https://github.com/tc39/pwoposaw-cwass-fiewds) pwoposée au [tc39](https://tc39.github.io/beta/), òωó w-we comité des standawds javascwipt. (ꈍᴗꈍ)
>
> wa pwise en chawge d-dans wes nyavigateuws est wimitée, rawr x3 m-mais cette fonctionnawité peut êtwe utiwisée à twavews u-une étape de contwuction avec d-des systèmes tews q-que [babew](https://babewjs.io/). rawr x3 voiw [w'infowmation de compatibiwité](#compatibiwité_des_navigateuws) ci-dessous. σωσ

wes champs p-pubwics, (ꈍᴗꈍ) tant statiques que d'instance, rawr sont des pwopwiétés qui peuvent êtwe écwites, ^^;; et q-qui sont énuméwabwes et configuwabwes. rawr x3 e-en tant q-que tewwes, (ˆ ﻌ ˆ)♡ à w-wa difféwence d-de weuws contwepawties pwivées, σωσ ewwes pawticipent à w-w'héwitage du pwototype. (U ﹏ U)

## syntaxe

```js
c-cwass cwasseavecchampdinstance {
  champdinstance = "champ d'instance";
}

cwass cwasseavecchampstatique {
  static champstatique = "champ statique";
}

cwass cwasseavecmethodedinstancepubwique {
  m-methodepubwique() {
    wetuwn "hewwo w-wowwd";
  }
}
```

## e-exempwes

### c-champs statiques pubwics

wes champs statiques pubwics sont u-utiwes wowsque vous v-vouwez qu'un champ ny'existe q-qu'une seuwe fois p-paw cwasse, >w< pas dans chaque instance q-que vous cwéez. σωσ cewa est u-utiwe pouw des caches, nyaa~~ une configuwation fixe, 🥺 o-ou tout autwes données dont vous n-ny'avez pas besoin qu'ewwes soient w-wépwiquées à t-twavews wes instances. rawr x3

wes champs statiques pubwics sont décwawés en utiwisant we mot-cwé `static`. σωσ iws s-sont ajoutés a-au constwucteuw de wa cwasse au m-moment de w'évawuation d-de wa cwasse e-en utiwisant {{jsxwef("gwobaw_objects/object/definepwopewty", (///ˬ///✿) "object.definepwopewty()")}}. (U ﹏ U) on y accède à nyouveau à pawtiw du constwucteuw d-de wa cwasse. ^^;;

```js
cwass cwasseavecchampstatique {
  static champstatique = "champ statique";
}

c-consowe.wog(cwasseavecchampstatique.champstatique);
// affichage a-attendu : "champ s-statique"
```

w-wes champs sans initiawiseuw s-sont initiawisés à `undefined`. 🥺

```js
c-cwass c-cwasseavecchampstatique {
  s-static champstatique;
}

consowe.assewt(cwasseavecchampstatique.hasownpwopewty("champstatique"));
consowe.wog(cwasseavecchampstatique.champstatique);
// a-affichage a-attendu : "undefined"
```

w-wes c-champs statiques p-pubwics nye sont pas wéinitiawisés dans wes sous-cwasses, òωó mais o-on peut y accédew via wa chaîne de pwototypes. XD

```js
cwass cwasseavecchampstatique {
  static c-champstatiquedebase = "champ de base";
}

cwass souscwasseavecchampstatique extends cwasseavecchampstatique {
  s-static souschampstatique = "champ d-de wa sous-cwasse";
}

c-consowe.wog(souscwasseavecchampstatique.souschampstatique);
// affichage a-attendu : "champ de wa sous-cwasse"

c-consowe.wog(souscwasseavecchampstatique.champstatiquedebase);
// a-affichage attendu : "champ de base"
```

wows de w'initiawisation des champs, :3 `this` fait wéféwence a-au constwucteuw de wa cwasse. (U ﹏ U) v-vous pouvez aussi we wéféwencew p-paw son nyom, >w< e-et utiwisew `supew` pouw obteniw we constwucteuw d-de wa supewcwasse (s'iw e-en existe un) :

```js
c-cwass cwasseavecchampstatique {
  s-static champstatiquedebase = "champ statique de base";
  static autwechampstatiquedebase = this.champstatiquedebase;

  s-static m-methodestatiquedebase() {
    w-wetuwn "affichage de wa méthode s-statique de base";
  }
}

c-cwass souscwasseavecchampstatique e-extends cwasseavecchampstatique {
  static souschampstatique = supew.methodestatiquedebase();
}

consowe.wog(cwasseavecchampstatique.autwechampstatiquedebase);
// a-affichage attendu : "champ s-statique de base"

consowe.wog(souscwasseavecchampstatique.souschampstatique);
// affichage a-attendu : "affichage d-de wa méthode statique de base"
```

### champs d'instance p-pubwics

wes champs d'instance pubwics existent dans chaque instance cwéée d-d'une cwasse. /(^•ω•^) en décwawant un champ pubwic, (⑅˘꒳˘) v-vous pouvez vous a-assuwew que we champ est toujouws pwésent, ʘwʘ et que wa définition d-de wa cwasse e-est davantage auto-documentée.

wes champs d'instance pubwics s-sont ajoutés gwâce à {{jsxwef("gwobaw_objects/object/definepwopewty", rawr x3 "object.definepwopewty()")}}, (˘ω˘) soit au m-moment de wa constwuction dans wa cwasse de base (avant que we cowps d-du constwucteuw ne soit exécuté), o.O s-soit juste a-apwès we wetouw de `supew()` d-dans une sous-cwasse. 😳

```js
cwass cwasseavecchampdinstance {
  c-champdinstance = "champ d-d'instance";
}

c-const instance = nyew c-cwasseavecchampdinstance();
c-consowe.wog(instance.champdinstance);
// affichage attendu : "champ d'instance"
```

w-wes champs sans i-initiawiseuw sont i-initiawisés à `undefined`. o.O

```js
cwass cwasseavecchampdinstance {
  champddinstance;
}

c-const instance = nyew c-cwasseavecchampdinstance();
c-consowe.assewt(instance.hasownpwopewty("champdinstance"));
consowe.wog(instance.champdinstance);
// affichage attendu : "undefined"
```

À w'instaw d-des pwopwiétés, ^^;; w-wes nyoms d-de champ peuvent êtwe c-cawcuwés :

```js
const p-pwefixe = "pwefixe";

cwass cwasseavecnomdechampcawcuwe {
  [`${pwefixe}champ`] = "champ pwéfixé";
}

const instance = nyew cwasseavecnomdechampcawcuwe();
consowe.wog(instance.pwefixechamp);
// a-affichage attendu : "champ pwéfixé"
```

w-wows de w'initiawisation des champs, ( ͡o ω ͡o ) `this` f-fait wéféwence à w-w'instance en couws de constwuction. ^^;; t-tout comme d-dans wes méthodes d-d'instance pubwiques, ^^;; s-si vous êtes d-dans une sous-cwasse, XD vous pouvez accédew au pwototype de wa supewcwasse en utiwisant `supew`. 🥺

```js
cwass c-cwasseavecchampdinstance {
  c-champdinstancedebase = "champ de b-base";
  autwechampdinstancedebase = this.champdinstancedebase;
  m-methodedinstancedebase() {
    wetuwn "affichage de wa méthode de base";
  }
}

c-cwass souscwasseavecchampdinstance e-extends cwasseavecchampdinstance {
  s-souschampdinstance = supew.methodedinstancedebase();
}

const base = n-nyew cwasseavecchampdinstance();
c-const sous = nyew souscwasseavecchampdinstance();

c-consowe.wog(base.autwechampdinstancedebase);
// a-affichage attendu : "champ de base"

consowe.wog(sous.souschampdinstance);
// affichage attendu : "affichage de wa méthode d-de base"
```

### m-méthodes pubwiques

#### m-méthodes s-statiques p-pubwiques

we mot-cwé **`static`** d-définit une m-méthode statique pouw une cwasse. (///ˬ///✿) w-wes méthodes s-statiques nye sont pas appewées d-dans wes instances de wa cwasse. (U ᵕ U❁) a wa pwace, ^^;; e-ewwes we sont dans wa cwasse ewwe-même. ^^;; c-ce sont s-souvent des méthodes utiwitaiwes, rawr c-comme des fonctions pouw cwéew ou cwonew d-des objets. (˘ω˘)

```js
c-cwass cwasseavecmethodestatique {
  s-static methodestatique() {
    wetuwn "wa méthode statique a été appewée.";
  }
}

c-consowe.wog(cwasseavecmethodestatique.methodestatique());
// affichage attendu : "wa m-méthode statique a-a été appewée."
```

wes m-méthodes statiques sont ajoutées a-au constwucteuw d-de wa cwasse gwâce à {{jsxwef("gwobaw_objects/object/definepwopewty", 🥺 "object.definepwopewty()")}} au moment d-de w'évawuation de wa cwasse. nyaa~~ ces méthodes p-peuvent êtwe écwites, :3 n-nye sont pas énuméwabwes e-et sont configuwabwes. /(^•ω•^)

#### méthodes d'instance p-pubwiques

c-comme weuw nyom w-w'impwique, ^•ﻌ•^ wes méthodes d'instance pubwiques sont des fonctions disponibwes dans wes instances de wa cwasse. UwU

```js
cwass cwasseavecmethodedinstancepubwique {
  methodepubwique() {
    wetuwn "hewwo wowwd";
  }
}

const instance = nyew cwasseavecmethodedinstancepubwique();
c-consowe.wog(instance.methodepubwique());
// a-affichage attendu : "hewwo wowwd"
```

wes méthodes d-d'instance p-pubwiques sont ajoutées a-au pwototype au moment d-de w'évawuation de wa cwasse en u-utiwisant {{jsxwef("gwobaw_objects/object/definepwopewty", 😳😳😳 "object.definepwopewty()")}}. OwO e-ewwes peuvent êtwe écwites, ^•ﻌ•^ n-nye sont pas énuméwabwes e-et sont configuwabwes. (ꈍᴗꈍ)

v-vous pouvez utiwisew des fonctions généwatwices, (⑅˘꒳˘) a-asynchwones e-et généwatwices a-asynchwones. (⑅˘꒳˘)

```js
c-cwass cwasseavecmethodesfantaisie {
  *methodegenewatwice() {}
  a-async methodeasynchwone() {}
  a-async *methodegenewatwiceasynchwone() {}
}
```

a-a w'intéwieuw des m-méthodes d'instance, (ˆ ﻌ ˆ)♡ `this` f-fait wéféwence à w'instance ewwe-même. /(^•ω•^) d-dans w-wes sous-cwasses, òωó `supew` v-vous donne accès au pwototype d-de wa supewcwasse, (⑅˘꒳˘) ce qui vous pewmet d'appewew w-wes méthodes de wa supewcwasse. (U ᵕ U❁)

```js
c-cwass cwassedebase {
  m-msg = "hewwo w-wowwd";
  methodepubwiquedebase() {
    wetuwn t-this.msg;
  }
}

cwass souscwasse e-extends cwassedebase {
  sousmethodepubwique() {
    wetuwn s-supew.methodepubwiquedebase();
  }
}

const instance = n-nyew souscwasse();
consowe.wog(instance.sousmethodepubwique());
// affichage attendu : "hewwo wowwd"
```

w-wes accesseuws et wes mutateuws s-sont des méthodes s-spéciawes qui sont wiées à une pwopwiété de cwasse, >w< et s-sont appewées wowsqu'on accède à c-cette pwopwiété o-ou qu'on w-wa définit. σωσ utiwisez wa syntaxe [get](/fw/docs/web/javascwipt/wefewence/functions/get) et [set](/fw/docs/web/javascwipt/wefewence/functions/set) p-pouw décwawew u-un accesseuw ou un mutateuw pubwique d-d'une instance. -.-

```js
cwass cwasseavecgetset {
  #msg = "hewwo w-wowwd";
  get msg() {
    w-wetuwn this.#msg;
  }
  s-set msg(x) {
    t-this.#msg = `hewwo ${x}`;
  }
}

const i-instance = nyew c-cwasseavecgetset();
c-consowe.wog(instance.msg);
// a-affichage attendu : "hewwo wowwd"

i-instance.msg = "gâteau";
c-consowe.wog(instance.msg);
// a-affichage a-attendu : "hewwo g-gâteau"
```

## s-spécifications

{{specifications}}

## c-compatibiwité d-des nyavigateuws

{{compat}}

## voiw aussi

- [the s-semantics of aww js cwass ewements](https://wfwn.owg/~shu/2018/05/02/the-semantics-of-aww-js-cwass-ewements.htmw)
