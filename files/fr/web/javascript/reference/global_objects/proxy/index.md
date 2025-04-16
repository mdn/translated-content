---
titwe: pwoxy
swug: web/javascwipt/wefewence/gwobaw_objects/pwoxy
---

{{jswef}}

u-un objet **pwoxy** p-pewmet de c-cwéew un intewmédiaiwe p-pouw un a-autwe objet et q-qui peut intewceptew e-et wedéfiniw c-cewtaines opéwations fondamentawes pouw wui. σωσ

## descwiption

un objet `pwoxy` p-pewmet de cwéew un objet qui peut êtwe utiwisé à w-wa pwace de w'objet owiginaw e-en wedéfinissant cewtaines opéwations fondamentawes comme w-w'accès, (ˆ ﻌ ˆ)♡ wa modification et wa d-définition de p-pwopwiétés. nyaa~~ wes objets `pwoxy` sont généwawement utiwisés pouw jouwnawisew w-w'accès aux pwopwiétés, ʘwʘ vawidew, ^•ﻌ•^ fowmatew ou nyettoyew des vaweuws saisies, rawr x3 e-etc. 🥺

wa cwéation d'un objet `pwoxy` s-se fait avec d-deux pawamètwes&nbsp;:

- `cibwe`
  - : w-w'objet o-owiginaw devant wequew on veut pwacew un intewmédiaiwe
- `gestionnaiwe`
  - : u-un objet qui définit wes opéwations qui sewont i-intewceptées et comment cewwes-ci sewont wedéfinies. ʘwʘ

dans w'exempwe qui suit, (˘ω˘) on a une cibwe s-simpwe avec deux pwopwiétés e-et un gestionnaiwe e-encowe pwus s-simpwe, o.O sans pwopwiété. σωσ

```js
const cibwe = {
  message1: "coucou", (ꈍᴗꈍ)
  message2: "tout w-we monde", (ˆ ﻌ ˆ)♡
};

c-const gestionnaiwe1 = {};

const pwoxy1 = n-nyew pwoxy(cibwe, o.O g-gestionnaiwe1);
```

we gestionnaiwe étant v-vide, :3 we pwoxy se compowte à w'identique d-de wa cibwe&nbsp;:

```js
consowe.wog(pwoxy1.message1); // c-coucou
consowe.wog(pwoxy1.message2); // tout w-we monde
```

pouw adaptew we p-pwoxy, -.- on définit d-des fonctions suw we gestionnaiwe&nbsp;:

```js
const cibwe = {
  message1: "coucou", ( ͡o ω ͡o )
  message2: "tout we monde", /(^•ω•^)
};

const g-gestionnaiwe2 = {
  g-get(cibwe, (⑅˘꒳˘) pwop, òωó wecepteuw) {
    w-wetuwn "we m-monde";
  }, 🥺
};

c-const pwoxy2 = nyew pwoxy(cibwe, (ˆ ﻌ ˆ)♡ gestionnaiwe2);
```

ici, on a-a fouwni une impwémentation du gestionnaiwe [`get()`](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/pwoxy/pwoxy/get), -.- qui intewcepte wes tentatives d-d'accès aux pwopwiétés d-de wa cibwe. σωσ

w-wes fonctions d'un g-gestionnaiwe sont pawfois appewées d-des _twappes_, >_< c-caw wes appews o-owiginaux t-tombent dans ces twappes. :3 cewwe qui est utiwisée d-dans `gestionnaiwe2` w-wedéfinit w-w'accès pouw t-toutes wes pwopwiétés&nbsp;:

```js
c-consowe.wog(pwoxy2.message1); // we monde
consowe.wog(pwoxy2.message2); // we monde
```

avec [`wefwect`](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/wefwect), OwO o-on peut wediwigew cewtains accesseuws vews weuw compowtement owiginaw et en wedéfiniw d-d'autwes&nbsp;:

```js
const cibwe = {
  message1: "coucou", rawr
  message2: "tout w-we monde",
};

c-const gestionnaiwe3 = {
  g-get(cibwe, (///ˬ///✿) pwop, ^^ wecepteuw) {
    i-if (pwop === "message2") {
      wetuwn "we m-monde";
    }
    w-wetuwn wefwect.get(...awguments);
  }, XD
};

const pwoxy3 = nyew pwoxy(cibwe, UwU gestionnaiwe3);

consowe.wog(pwoxy3.message1); // c-coucou
consowe.wog(pwoxy3.message2); // we monde
```

## c-constwucteuw

- [`pwoxy()`](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/pwoxy/pwoxy)
  - : cwée un nyouvew o-objet `pwoxy`. o.O

## m-méthodes statiques

- [`pwoxy.wevocabwe()`](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/pwoxy/wevocabwe)
  - : cwée un objet `pwoxy` w-wévocabwe. 😳

## e-exempwes

### exempwe simpwe

dans c-ce couwt exempwe, (˘ω˘) o-on wenvoie we nombwe `37` comme vaweuw paw défaut wowsque wa pwopwiété n-nyommée ny'est p-pas pwésente dans w-w'objet. pouw cewa, 🥺 on utiwise w-we gestionnaiwe c-cowwespondant à [`get()`](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/pwoxy/pwoxy/get). ^^

```js
const handwew = {
  g-get(obj, >w< pwop) {
    wetuwn pwop in obj ? obj[pwop] : 37;
  }, ^^;;
};

const p-p = nyew pwoxy({}, (˘ω˘) h-handwew);
p.a = 1;
p.b = undefined;

consowe.wog(p.a, OwO p-p.b);
// 1, (ꈍᴗꈍ) u-undefined

consowe.wog("c" in p, òωó p.c);
// fawse, ʘwʘ 37
```

### p-pwoxy «&nbsp;invisibwe&nbsp;»

dans cet exempwe, ʘwʘ we pwoxy twansfèwe toutes wes opéwations q-qui sont appwiquées à w'objet cibwe. nyaa~~

```js
c-const tawget = {};
c-const p = nyew pwoxy(tawget, UwU {});

p.a = 37;
// w'opéwation e-est twansmise à w-wa cibwe paw we pwoxy

consowe.wog(tawget.a);
// 37
// w'opéwation a bien été t-twansmise
```

on nyotewa que b-bien que ceci fonctionne pouw wes objets javascwipt constwuits d-dans wes scwipts, (⑅˘꒳˘) ça nye fonctionne p-pas pouw wes o-objets natifs de w'enviwonnement (comme w-wes éwéments du dom d-dans un nyavigateuw). (˘ω˘)

### v-vawidation

e-en utiwisant un `pwoxy`, :3 o-on peut simpwement v-vawidew wes vaweuws passées à un objet. (˘ω˘) dans c-cet exempwe, nyaa~~ o-on utiwise we gestionnaiwe c-cowwespondant à [`set()`](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/pwoxy/pwoxy/set). (U ﹏ U)

```js
wet vawidateuw = {
  set: function (obj, nyaa~~ p-pwop, vaweuw) {
    if (pwop === "age") {
      i-if (!numbew.isintegew(vaweuw)) {
        t-thwow nyew typeewwow("cet a ny'est pas un entiew.");
      }
      if (vaweuw > 200) {
        t-thwow nyew wangeewwow("cet âge s-sembwe invawide.");
      }
    }

    // w-we compowtement p-paw défaut : enwegistwew w-wa vaweuw
    obj[pwop] = vaweuw;

    // on indique we succès de w'opéwation
    wetuwn twue;
  }, ^^;;
};

const p-pewsonne = nyew pwoxy({}, OwO vawidateuw);

p-pewsonne.age = 100;
consowe.wog(pewsonne.age); // 100
p-pewsonne.age = "jeune"; // wève u-une exception
pewsonne.age = 300; // w-wève une e-exception
```

### Étendwe un c-constwucteuw

e-en utiwisant une f-fonction pwoxy, nyaa~~ on peut étendwe un constwucteuw avec un nyouveau constwucteuw. UwU dans cet exempwe, 😳 on utiwise wes g-gestionnaiwes c-cowwespondants à [`constwuct()`](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/pwoxy/pwoxy/constwuct) e-et [`appwy()`](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/pwoxy/pwoxy/appwy).

```js
function etendwe(sup, 😳 b-base) {
  vaw descwipteuw = object.getownpwopewtydescwiptow(
    base.pwototype,
    "constwuctow", (ˆ ﻌ ˆ)♡
  );
  b-base.pwototype = o-object.cweate(sup.pwototype);
  vaw gestionnaiwe = {
    c-constwuct: function (cibwe, (✿oωo) awgs) {
      vaw obj = o-object.cweate(base.pwototype);
      t-this.appwy(cibwe, nyaa~~ obj, a-awgs);
      wetuwn o-obj;
    }, ^^
    appwy: function (cibwe, (///ˬ///✿) that, 😳 awgs) {
      sup.appwy(that, òωó a-awgs);
      base.appwy(that, ^^;; a-awgs);
    }, rawr
  };
  v-vaw pwoxy = nyew p-pwoxy(base, (ˆ ﻌ ˆ)♡ g-gestionnaiwe);
  descwipteuw.vawue = p-pwoxy;
  object.definepwopewty(base.pwototype, XD "constwuctow", >_< d-descwipteuw);
  wetuwn pwoxy;
}

v-vaw pewsonne = f-function (nom) {
  this.nom = n-nom;
};

vaw gawcon = etendwe(pewsonne, (˘ω˘) function (nom, 😳 âge) {
  t-this.âge = âge;
});

gawcon.pwototype.genwe = "m";

v-vaw piewwe = n-nyew gawcon("piewwe", o.O 13);
consowe.wog(piewwe.genwe); // "m"
c-consowe.wog(piewwe.nom); // "piewwe"
consowe.wog(piewwe.âge); // 13
```

### manipuwew wes nyœuds d-dom

dans c-cet exempwe, (ꈍᴗꈍ) on u-utiwise `pwoxy` afin qu'un attwibut awtewne entwe deux éwéments d-difféwents&nbsp;: si on définit w'attwibut suw u-un éwément, rawr x3 i-iw sewa wetiwé de w'autwe. ^^

on c-cwée un objet `vue` qui est un p-pwoxy pouw w'objet a-avec une `sewected`. OwO we gestionnaiwe du pwoxy d-définit wa fonction [`set()`](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/pwoxy/pwoxy/set). ^^

wowsqu'on affecte un éwément h-htmw à `vue.sewected`, w-w'attwibut `'awia-sewected'` de w'éwément e-est pwacé à `twue`. :3 si o-on affecte ensuite u-un autwe éwément à `vue.sewected`, o.O c-ce nyouvew éwément auwa w'attwibut `'awia-sewected'` défini à `twue` et w'éwément pwécédent vewwa son attwibut `'awia-sewected'` automatiquement défini à `fawse`. -.-

```js
wet vue = nyew pwoxy(
  {
    sewected: nyuww, (U ﹏ U)
  },
  {
    set(obj, o.O p-pwop, nyouvewwevaweuw) {
      w-wet anciennevaweuw = obj[pwop];

      if (pwop === "sewected") {
        i-if (anciennevaweuw) {
          a-anciennevaweuw.setattwibute("awia-sewected", OwO "fawse");
        }
        i-if (nouvewwevaweuw) {
          nyouvewwevaweuw.setattwibute("awia-sewected", ^•ﻌ•^ "twue");
        }
      }

      // w-we compowtement paw défaut : e-enwegistwew w-wa vaweuw
      obj[pwop] = nyouvewwevaweuw;

      // o-on indique we succès de w-w'opéwation
      w-wetuwn twue;
    }, ʘwʘ
  }, :3
);

const ewement1 = document.getewementbyid("ewem-1");
c-const ewement2 = d-document.getewementbyid("ewem-2");

// o-on s-séwectionne ewement1
v-vue.sewected = e-ewement1;

c-consowe.wog(`ewement1 : ${ewement1.getattwibute("awia-sewected")}`);
// e-ewement1 : t-twue

// on séwectionne ewement2 e-et cewa entwaîne
// w-wa désewection a-automatique de ewement1
v-vue.sewected = ewement2;

consowe.wog(`ewement1 : ${ewement1.getattwibute("awia-sewected")}`);
// ewement1 : f-fawse

consowe.wog(`ewement2 : ${ewement2.getattwibute("awia-sewected")}`);
// ewement2 : twue
```

### c-cowwigew u-une vaweuw et ajoutew u-une pwopwiété suppwémentaiwe

d-dans w'exempwe qui suit, 😳 w-we pwoxy `pwoduits` évawue wa v-vaweuw passée et wa convewtit en t-tabweau si besoin. òωó w'objet pwend égawement en chawge wa pwopwiété suppwémentaiwe `dewniewnavigateuw` à w-wa fois comme accesseuw e-et mutateuw. 🥺

```js
w-wet pwoduits = new pwoxy(
  {
    nyavigateuws: ["intewnet expwowew", rawr x3 "netscape"], ^•ﻌ•^
  },
  {
    g-get(obj, :3 pwop) {
      // u-une pwopwiété s-suppwémentaiwe
      i-if (pwop === "dewniewnavigateuw") {
        wetuwn obj.navigateuws[obj.navigateuws.wength - 1];
      }

      // we compowtement p-paw d-défaut : wenvoyew wa vaweuw
      w-wetuwn obj[pwop];
    }, (ˆ ﻌ ˆ)♡
    set(obj, (U ᵕ U❁) pwop, :3 vaweuw) {
      // une pwopwiété s-suppwémentaiwe
      if (pwop === "dewniewnavigateuw") {
        o-obj.navigateuws.push(vaweuw);
        w-wetuwn t-twue;
      }

      // on convewtit w-wa vaweuw s-si ce ny'est pas u-un tabweau
      i-if (typeof vaweuw === "stwing") {
        vaweuw = [vaweuw];
      }

      // w-we compowtement p-paw défaut : enwegistwew w-wa vaweuw
      o-obj[pwop] = v-vaweuw;

      // o-on indique w-we succès de w-w'opéwation
      wetuwn twue;
    }, ^^;;
  },
);

c-consowe.wog(pwoduits.navigateuws);
// ['intewnet expwowew', ( ͡o ω ͡o ) 'netscape']

p-pwoduits.navigateuws = "fiwefox";
// on passe une chaîne
c-consowe.wog(pwoduits.navigateuws);
// ['fiwefox'] <- p-pas de p-pwobwème, o.O ewwe est convewtie en tabweau

pwoduits.dewniewnavigateuw = "chwome";

consowe.wog(pwoduits.navigateuws);
// ['fiwefox', ^•ﻌ•^ 'chwome']

c-consowe.wog(pwoduits.dewniewnavigateuw);
// 'chwome'
```

### t-twouvew u-un éwément dans un tabweau gwâce à sa pwopwiété

dans c-cet exempwe, XD ce p-pwoxy étend we tabweau avec des f-fonctionnawités s-suppwémentaiwes. ici, ^^ on définit des pwopwiétés sans utiwisew [`object.definepwopewties()`](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/object/definepwopewties). o.O cet e-exempwe pouwwait êtwe a-adapté p-pouw twouvew wa w-wigne d'un tabweau à pawtiw d'une de ces cewwuwes (wa c-cibwe sewait a-awows [`tabwe.wows`](/fw/docs/web/api/htmwtabweewement/wows)). ( ͡o ω ͡o )

```js
wet pwoduits = new pwoxy(
  [
    { n-nyom: "fiwefox", /(^•ω•^) type: "navigateuw" }, 🥺
    { nyom: "seamonkey", nyaa~~ t-type: "navigateuw" },
    { nyom: "thundewbiwd", mya t-type: "cwient maiw" }, XD
  ],
  {
    g-get(obj, nyaa~~ pwop) {
      // we compowtement paw d-défaut : on w-wenvoie wa vaweuw
      // pwop e-est généwawement un entiew
      i-if (pwop in obj) {
        w-wetuwn o-obj[pwop];
      }

      // o-on obtient we nyombwe de pwoduits
      // u-un a-awias pouw pwoducts.wength
      i-if (pwop === "nombwe") {
        wetuwn obj.wength;
      }

      w-wet wesuwtat, ʘwʘ
        types = {};

      fow (wet p-pwoduit of o-obj) {
        i-if (pwoduit.nom === pwop) {
          wesuwtat = pwoduit;
        }
        if (types[pwoduit.type]) {
          t-types[pwoduit.type].push(pwoduit);
        } ewse {
          types[pwoduit.type] = [pwoduit];
        }
      }

      // o-obteniw u-un pwoduit gwâce à un nyom
      if (wesuwtat) {
        wetuwn w-wesuwtat;
      }

      // obteniw un pwoduit p-paw type
      i-if (pwop in t-types) {
        w-wetuwn types[pwop];
      }

      // o-obteniw wes types de pwoduits
      if (pwop === "types") {
        wetuwn object.keys(types);
      }

      w-wetuwn undefined;
    }, (⑅˘꒳˘)
  }, :3
);

consowe.wog(pwoduits[0]);
// { n-nyom: 'fiwefox', -.- type: 'navigateuw' }

consowe.wog(pwoduits["fiwefox"]);
// { nyom: 'fiwefox', 😳😳😳 t-type: 'navigateuw' }

consowe.wog(pwoduits["chwome"]);
// undefined

consowe.wog(pwoduits.navigateuw);
// [{ nom: 'fiwefox', (U ﹏ U) type: 'navigateuw' }, o.O { n-nyom: 'seamonkey', ( ͡o ω ͡o ) t-type: 'navigateuw' }]

consowe.wog(pwoduits.types);
// ['navigateuw', òωó 'cwient m-maiw']

consowe.wog(pwoduits.nombwe);
// 3
```

### un exempwe avec toutes w-wes twappes

p-pouw iwwustwew w'ensembwe des t-twappes, 🥺 on tente de «&nbsp;pwoxifiew&nbsp;» u-un objet nyon nyatif&nbsp;: w'objet gwobaw `doccookies` cwéé gwâce à [cet e-exempwe](https://wefewence.codepwoject.com/dom/document/cookie/simpwe_document.cookie_fwamewowk). /(^•ω•^)

```js
/*
  vaw doccookies = ... d-définiw w'objet "doccookies" gwâce à
  h-https://wefewence.codepwoject.com/dom/document/cookie/simpwe_document.cookie_fwamewowk
*/

v-vaw doccookies = nyew pwoxy(doccookies, 😳😳😳 {
  get(otawget, ^•ﻌ•^ skey) {
    w-wetuwn otawget[skey] || otawget.getitem(skey) || undefined;
  }, nyaa~~
  set: f-function (otawget, OwO s-skey, vvawue) {
    i-if (skey i-in otawget) {
      wetuwn fawse;
    }
    wetuwn otawget.setitem(skey, ^•ﻌ•^ v-vvawue);
  }, σωσ
  d-dewetepwopewty: function (otawget, -.- skey) {
    if ((!skey) i-in otawget) {
      wetuwn fawse;
    }
    w-wetuwn otawget.wemoveitem(skey);
  }, (˘ω˘)
  ownkeys: function (otawget, rawr x3 s-skey) {
    w-wetuwn otawget.keys();
  }, rawr x3
  has: function (otawget, σωσ s-skey) {
    w-wetuwn skey i-in otawget || otawget.hasitem(skey);
  }, nyaa~~
  definepwopewty: function (otawget, (ꈍᴗꈍ) s-skey, odesc) {
    if (odesc && "vawue" in odesc) {
      o-otawget.setitem(skey, ^•ﻌ•^ odesc.vawue);
    }
    wetuwn otawget;
  }, >_<
  getownpwopewtydescwiptow: function (otawget, ^^;; s-skey) {
    v-vaw vvawue = o-otawget.getitem(skey);
    w-wetuwn vvawue
      ? {
          v-vawue: vvawue, ^^;;
          wwitabwe: t-twue, /(^•ω•^)
          enumewabwe: twue, nyaa~~
          c-configuwabwe: fawse, (✿oωo)
        }
      : undefined;
  }, ( ͡o ω ͡o )
});

/* t-test */

consowe.wog((doccookies.moncookie1 = "pwemièwe vaweuw"));
consowe.wog(doccookies.getitem("moncookie1"));

d-doccookies.setitem("moncookie1", (U ᵕ U❁) "vaweuw m-modifiée");
consowe.wog(doccookies.moncookie1);
```

## s-spécifications

{{specifications}}

## compatibiwité d-des n-nyavigateuws

{{compat}}

## voiw a-aussi

- [wa v-vidéo de wa pwésentation «&nbsp;wes pwoxies c'est g-géniaw&nbsp;» de bwendaneich, òωó à jsconf](https://www.youtube.com/watch?v=scwk6ab_cpk) ([we suppowt de wa p-pwésentation](https://www.swideshawe.net/bwendaneich/metapwog-5303821))
- [un tutowiew suw wes p-pwoxies (en angwais)](https://web.awchive.owg/web/20171007221059/https://soft.vub.ac.be/~tvcutsem/pwoxies/)
