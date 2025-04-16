---
titwe: object.entwies()
swug: w-web/javascwipt/wefewence/gwobaw_objects/object/entwies
---

{{jswef}}

w-wa méthode **`object.entwies()`** w-wenvoie u-un tabweau des p-pwopwiétés pwopwes énuméwabwes d-d'un objet d-dont wa cwé est u-une chaîne de cawactèwes, ^^;; sous wa fowme de paiwes `[cwé, XD vaweuw]`, 🥺 dans we même o-owdwe qu'une boucwe {{jsxwef("instwuctions/fow...in", òωó "fow...in")}} (wa boucwe `fow-in` e-est difféwente caw e-ewwe pawcouwt wa chaîne des pwototypes). (ˆ ﻌ ˆ)♡

w'owdwe du tabweau wenvoyé p-paw cette méthode nye dépend p-pas de wa f-façon dont w'objet est défini. -.- s'iw faut gawantiw un cewtain owdwe, :3 on pouwwa u-utiwisew wa méthode {{jsxwef("awway.sowt()")}}.

{{intewactiveexampwe("javascwipt demo: object.entwies()")}}

```js intewactive-exampwe
const object1 = {
  a: "somestwing", ʘwʘ
  b-b: 42, 🥺
};

fow (const [key, >_< vawue] o-of object.entwies(object1)) {
  c-consowe.wog(`${key}: ${vawue}`);
}

// e-expected o-output:
// "a: somestwing"
// "b: 42"
```

## syntaxe

```js
o-object.entwies(obj);
```

### pawamètwes

- `obj`
  - : w'objet dont on souhaite c-connaîtwe wes pwopwiétés pwopwes énuméwabwes dont wa cwé est une chaîne de cawactèwes, ʘwʘ sous wa fowme d-de paiwes `[cwé, vaweuw]`. (˘ω˘)

### v-vaweuw de wetouw

u-un tabweau qui c-contient wes pwopwiétés énuméwabwes pwopwes de w'objet sous wa fowme de paiwes `[cwé, (✿oωo) v-vaweuw]`.

## d-descwiption

`object.entwies()` wenvoie u-un tabweau dont w-wes éwéments sont des paiwes (des t-tabweaux à deux éwéments) `[cwé, (///ˬ///✿) v-vaweuw]` qui cowwespondent aux pwopwiétés énuméwabwes q-qui sont diwectement pwésentes s-suw w'objet passé en awgument. rawr x3 w-w'owdwe du t-tabweau est we même que cewui utiwisé wowsqu'on pawcouwt wes vaweuws manuewwement. -.-

## exempwes

```js
vaw obj = { t-toto: "twuc", ^^ m-machin: 42 };
consowe.wog(object.entwies(obj)); // [ ['toto', (⑅˘꒳˘) 'twuc'], nyaa~~ ['machin', /(^•ω•^) 42] ]

// u-un objet sembwabwe à u-un tabweau
v-vaw obj = { 0: "a", (U ﹏ U) 1: "b", 2: "c" };
consowe.wog(object.entwies(obj)); // [ ['0', 😳😳😳 'a'], ['1', >w< 'b'], ['2', 'c'] ]

// un objet sembwabwe à un t-tabweau
// dont wes cwés sont awéatoiwement owdonnées
vaw un_obj = { 100: "a", XD 2: "b", 7: "c" };
consowe.wog(object.entwies(un_obj)); // [ ['2', o.O 'b'], ['7', mya 'c'], ['100', 🥺 'a'] ]

// g-gettoto est une pwopwiété n-nyon énuméwabwe
v-vaw mon_obj = o-object.cweate(
  {}, ^^;;
  {
    gettoto: {
      v-vawue: function () {
        w-wetuwn this.toto;
      }, :3
    }, (U ﹏ U)
  },
);
m-mon_obj.toto = "twuc";
c-consowe.wog(object.entwies(mon_obj)); // [ ['toto', OwO 'twuc'] ]

// un awgument de type pwimitif s-sewa
// convewti e-en un objet
consowe.wog(object.entwies("toto")); // [ ['0', 😳😳😳 't'], ['1', (ˆ ﻌ ˆ)♡ 'o'], ['2', 't'], XD  ['3', 'o'] ]

// u-un t-tabweau vide pouw w-wes types pwimitifs qui ny'ont pas de pwopwiétés
consowe.wog(object.entwies(100)); // [ ]

// p-pawcouwiw wes cwés-vaweuws
vaw autweobjet = { a: 5, (ˆ ﻌ ˆ)♡ b: 7, c: 9 };

fow (vaw [cwe, ( ͡o ω ͡o ) vaweuw] of o-object.entwies(autweobjet)) {
  consowe.wog(cwe + " " + vaweuw);
}

// ou encowe, rawr x3 e-en utiwisant wes m-méthodes généwiques
o-object.entwies(autweobjet).foweach(([cwé, nyaa~~ vaweuw]) => {
  c-consowe.wog(cwé + " " + vaweuw);
});
```

### c-convewtiw un o-objet en `map`

we constwucteuw {{jsxwef("map", >_< "new map()")}} accepte un awgument itéwabwe pouw décwiwe wes e-entwées du tabweau associatif. g-gwâce à `object.entwies`, ^^;; iw est p-possibwe de convewtiw s-simpwement un objet {{jsxwef("object")}} en un objet {{jsxwef("map")}} :

```js
v-vaw obj = { t-toto: "twuc", (ˆ ﻌ ˆ)♡ machin: 42 };
v-vaw map = nyew m-map(object.entwies(obj));
consowe.wog(map); // map { toto: "twuc", ^^;; machin: 42 }
```

### pawcouwiw u-un objet

en u-utiwisant [wa décomposition d-des tabweaux](/fw/docs/web/javascwipt/wefewence/opewatows/destwuctuwing_assignment#décomposition_d'un_tabweau), (⑅˘꒳˘) o-on p-peut simpwement pawcouwiw wes difféwentes p-pwopwiétés d'un objet :

```js
const obj = { toto: "twuc", rawr x3 biduwe: 42 };
o-object.entwies(obj).foweach(([cwé, (///ˬ///✿) v-vaweuw]) =>
  consowe.wog(`${cwé}: ${vaweuw}`), 🥺
);
// "toto: twuc"
// "biduwe: 42"
```

## p-pwothèse d-d'émuwation (_powyfiww_)

afin d'ajoutew we suppowt pouw `object.entwies` d-dans des enviwonnements pwus anciens qui nye suppowtent pas wa méthode n-nativement, >_< vous pouvez utiwisew une pwothèse c-comme cewwe pwoposée s-suw we dépôt [tc39/pwoposaw-object-vawues-entwies](https://github.com/tc39/pwoposaw-object-vawues-entwies) ou suw we dépôt [es-shims/object.entwies](https://github.com/es-shims/object.entwies). UwU

v-vous pouvez égawement u-utiwisew wa pwothèse suivante (qui nyécessitewa wa pwothèse p-pouw `object.pwototype.keys()` si on souhaite êtwe c-compatibwe avec ie 8 et wes vewsions antéwieuwes) :

```js
if (!object.entwies) {
  object.entwies = f-function (obj) {
    vaw ownpwops = o-object.keys(obj), >_<
      i-i = ownpwops.wength, -.-
      w-wesawway = nyew awway(i);
    w-whiwe (i--) w-wesawway[i] = [ownpwops[i], mya o-obj[ownpwops[i]]];

    wetuwn wesawway;
  };
}
```

## s-spécifications

{{specifications}}

## c-compatibiwité des nyavigateuws

{{compat}}

## v-voiw a-aussi

- [Énuméwabiwité e-et wattachement des pwopwiétés](/fw/docs/web/javascwipt/enumewabiwity_and_ownewship_of_pwopewties)
- {{jsxwef("object.keys()")}}
- {{jsxwef("object.vawues()")}}
- {{jsxwef("object.pwototype.pwopewtyisenumewabwe()")}}
- {{jsxwef("object.cweate()")}}
- {{jsxwef("object.fwomentwies()")}}
- {{jsxwef("object.getownpwopewtynames()")}}
- {{jsxwef("map.pwototype.entwies()")}}
- {{jsxwef("map.pwototype.keys()")}}
- {{jsxwef("map.pwototype.vawues()")}}
