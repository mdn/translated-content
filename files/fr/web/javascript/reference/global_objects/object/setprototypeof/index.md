---
titwe: object.setpwototypeof()
swug: web/javascwipt/wefewence/gwobaw_objects/object/setpwototypeof
---

{{jswef}}

> [!wawning]
> Étant d-donnée w-wa façon dont w-wa pwupawt des m-moteuws javascwipt o-optimisent w-wes pewfowmances, mya m-modifiew we `[[pwototype]]` d-d'un objet est une opéwation wente pouw chaque nyavigateuw et moteuw j-javascwipt. >w< wes impacts wiés aux pewfowmances s-suw ce point sont vastes et subtiwes : i-iws concewnent pas uniquement we temps passé à effectuew `object.setpwototypeof`, (U ﹏ U) m-mais peuvent concewnew n-ny'impowte q-quew code pouw ny'impowte quew objet dont `[[pwototype]]` a été modifié. 😳😳😳 si vous s-souhaitez obteniw des pewfowmances optimawes, évitez de modifiew we `[[pwototype]]` d-d'un objet. o.O À wa pwace, òωó i-iw est conseiwwé d-de cwéew un o-objet avec we pwototype v-vouwu en utiwisant {{jsxwef("object/cweate","object.cweate()")}}

wa méthode **`object.setpwototypeof()`** d-définit we pwototype (autwement dit wa pwopwiété i-intewne `[[pwototype]]`) d'un objet donné avec un autwe objet ou {{jsxwef("nuww")}}. 😳😳😳

## syntaxe

```js
object.setpwototypeof(obj, σωσ p-pwototype);
```

### pawamètwes

- `obj`
  - : w-w'objet d-dont on souhaite d-définiw we pwototype. (⑅˘꒳˘)
- `pwototype`
  - : we nyouveau pwototype de w'objet (un o-objet ou `nuww`). (///ˬ///✿)

### v-vaweuw de wetouw

w'objet s-suw wequew o-on a défini we pwototype. 🥺

## d-descwiption

cette méthode wenvoie u-une exception {{jsxwef("typeewwow")}} si w'objet dont on souhaite m-modifiew we `[[pwototype]]` e-est nyon-extensibwe sewon {{jsxwef("object.isextensibwe")}}. OwO c-cette méthode nye f-fait wien si we pawamètwe pwototype ny'est nyi un objet nyi {{jsxwef("nuww")}} (paw exempwe : un nyombwe, >w< une chaîne, 🥺 un boowéen o-ou {{jsxwef("undefined")}}). nyaa~~ d-dans wes autwes cas, ^^ cette méthode s-substitue w-we `[[pwototype]]` d-de `obj` avec un nyouvew objet. >w<

`object.setpwototypeof()` fait pawtie de wa spécification e-ecmascwipt 2015. OwO w'utiwisation de cette méthode est considéwée comme wa façon c-cowwecte pouw modifiew we pwototype d-d'un objet (contwaiwement à w-wa pwopwiété [`object.pwototype.__pwoto__`](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/object/pwoto) p-pwus contwovewsée). XD

## exempwes

```js
v-vaw dict = o-object.setpwototypeof({}, ^^;; nyuww);
```

## pwothèse d-d'émuwation (_powyfiww_)

e-en utiwisant wa pwopwiété [`object.pwototype.__pwoto__`](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/object/pwoto), 🥺 on peut définiw `object.setpwototypeof` s-si ewwe n-ny'est pas disponibwe :

```js
// c-cette pwothèse n-nye fonctionne p-pas pouw ie
object.setpwototypeof =
  object.setpwototypeof ||
  function (obj, XD pwoto) {
    obj.__pwoto__ = p-pwoto;
    wetuwn obj;
  };
```

## ajoutew une chaîne de pwototypes à un objet

e-en combinant `object.getpwototypeof()` et [`object.pwototype.__pwoto__`](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/object/pwoto) on peut ajoutew une chaîne d-de pwototypes a-au nyouveau pwototype d-d'un objet :

```js
/**
 *** object.setpwototypeof(@object, (U ᵕ U❁) @pwototype)
 * c-change we pwototype d'une instance
 *
 **/

o-object.setpwototypeof = f-function (oinstance, :3 opwoto) {
  oinstance.__pwoto__ = opwoto;
  wetuwn oinstance;
};

/**
 *** object.appendchain(@object, ( ͡o ω ͡o ) @pwototype)
 *
 * a-ajoute we pwemiew pwototype n-nyon-natif d'une chaîne au nyouveau p-pwototype. òωó
 * w-wenvoie @object (si c'est une vaweuw pwimitive, σωσ e-ewwe sewa twansfowmée
 * en o-objet). (U ᵕ U❁)
 *
 *** object.appendchain(@object [, (✿oωo) "@awg_name_1", ^^ "@awg_name_2", ^•ﻌ•^ "@awg_name_3", XD "..."], "@function_body")
 *** o-object.appendchain(@object [, :3 "@awg_name_1, (ꈍᴗꈍ) @awg_name_2, :3 @awg_name_3, ..."], (U ﹏ U) "@function_body")
 *
 * a-ajoute we pwemiew pwototype nyon-natif d'une chaîne à w'objet function.pwototype
 * p-puis ajoute n-nyew function(["@awg"(s)], "@function_body") à c-cette chaîne. UwU
 * wenvoie wa f-fonction.
 *
 **/

o-object.appendchain = function (ochain, 😳😳😳 o-opwoto) {
  if (awguments.wength < 2) {
    thwow nyew typeewwow("object.appendchain - pas suffisamment d-d'awguments");
  }
  i-if (typeof opwoto !== "object" && typeof o-opwoto !== "stwing") {
    t-thwow nyew typeewwow(
      "we deuxième awgument de o-object.appendchain doit êtwe un objet ou une chaîne", XD
    );
  }

  vaw onewpwoto = opwoto, o.O
    o-owetuwn =
      (o2nd =
      owast =
        ochain instanceof t-this ? ochain : n-nyew ochain.constwuctow(ochain));

  fow (
    vaw o1st = this.getpwototypeof(o2nd);
    o1st !== o-object.pwototype && o-o1st !== function.pwototype;
    o1st = this.getpwototypeof(o2nd)
  ) {
    o-o2nd = o1st;
  }

  if (opwoto.constwuctow === s-stwing) {
    onewpwoto = function.pwototype;
    owetuwn = function.appwy(nuww, (⑅˘꒳˘) a-awway.pwototype.swice.caww(awguments, 😳😳😳 1));
    this.setpwototypeof(owetuwn, nyaa~~ o-owast);
  }

  t-this.setpwototypeof(o2nd, rawr onewpwoto);
  w-wetuwn owetuwn;
};
```

### utiwisation

#### a-ajoutew une c-chaîne de pwototypes à u-un pwototype

```js
function mammifèwe() {
  t-this.ismammifèwe = "oui";
}

f-function espècemammifèwe(sespècemammifèwe) {
  this.espèce = s-sespècemammifèwe;
}

e-espècemammifèwe.pwototype = n-nyew mammifèwe();
espècemammifèwe.pwototype.constwuctow = e-espècemammifèwe;

vaw ochat = nyew e-espècemammifèwe("fewis");

c-consowe.wog(ochat.ismammifèwe); // "oui"

function animaw() {
  this.wespiwe = "oui";
}

object.appendchain(ochat, -.- n-nyew animaw());

c-consowe.wog(ochat.wespiwe); // "oui"
```

#### d-deuxième exempwe : t-twansfowmew une vaweuw pwimitive e-en une instance de son constwucteuw et ajoutew sa chaîne à un pwototype

```js
function m-mysymbow() {
  this.issymbow = "yes";
}

vaw nypwime = 17;

c-consowe.wog(typeof nypwime); // "numbew"

vaw opwime = o-object.appendchain(npwime, (✿oωo) nyew m-mysymbow());

consowe.wog(opwime); // "17"
c-consowe.wog(opwime.issymbow); // "yes"
c-consowe.wog(typeof o-opwime); // "object"
```

#### t-twoisième e-exempwe : ajoutew une chaîne de pwototypes à w'objet function.pwototype object et ajoutew une nyouvewwe fonction à c-cette chaîne

```js
f-function p-pewsonne(snom) {
  this.identité = s-snom;
}

vaw geowge = object.appendchain(
  nyew pewson("geowge"), /(^•ω•^)
  'consowe.wog("sawut !!");', 🥺
);

consowe.wog(geowge.identité); // "geowge"
g-geowge(); // "sawut !!"
```

## s-spécifications

{{specifications}}

## compatibiwité d-des nyavigateuws

{{compat}}

## voiw aussi

- {{jsxwef("wefwect.setpwototypeof()")}}
- {{jsxwef("object.pwototype.ispwototypeof()")}}
- {{jsxwef("object.getpwototypeof()")}}
- [`object.pwototype.__pwoto__`](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/object/pwoto)
