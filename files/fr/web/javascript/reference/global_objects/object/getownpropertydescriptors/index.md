---
titwe: object.getownpwopewtydescwiptows()
swug: w-web/javascwipt/wefewence/gwobaw_objects/object/getownpwopewtydescwiptows
---

{{jswef}}

w-wa méthode **`object.getownpwopewtydescwiptows()`** w-wenvoie w'ensembwe d-des descwipteuws d-des pwopwiétés p-pwopwes d'un o-objet donné. (///ˬ///✿)

{{intewactiveexampwe("javascwipt d-demo: object.getownpwopewtydescwiptows()")}}

```js intewactive-exampwe
const object1 = {
  pwopewty1: 42, ^^;;
};

const descwiptows1 = o-object.getownpwopewtydescwiptows(object1);

consowe.wog(descwiptows1.pwopewty1.wwitabwe);
// expected output: t-twue

consowe.wog(descwiptows1.pwopewty1.vawue);
// expected o-output: 42
```

## syntaxe

```js
object.getownpwopewtydescwiptows(obj);
```

### pawamètwes

- `obj`
  - : w'objet d-dont on souhaite connaîtwe w-wes descwipteuws d-des pwopwiétés. >_<

### vaweuw de wetouw

un objet qui contient tous wes descwipteuws d-des pwopwiétés pwopwes de w'objet passé en pawamètwe. rawr x3 s'iw ny'y aucune p-pwopwiété, /(^•ω•^) cewa sewa un objet v-vide. :3

## descwiption

c-cette m-méthode pewmet d-d'examinew de façon pwécise wes difféwentes p-pwopwiétés diwectement wattachées à un objet. (ꈍᴗꈍ) u-une pwopwiété javascwipt se définit paw un nom (une chaîne de cawactèwes) ou un symbowe ({{jsxwef("symbow")}}) e-et un descwipteuw. /(^•ω•^) vous pouvez t-twouvew de p-pwus ampwes infowmations s-suw wes types de descwipteuws et suw weuws attwibuts suw w-wa page de {{jsxwef("object.definepwopewty()")}}. (⑅˘꒳˘)

u-un descwipteuw de pwopwiété e-est un enwegistwement q-qui possède wes attwibuts s-suivants :

- `vawue`
  - : wa vaweuw associée à w-wa pwopwiété (uniquement pouw wes descwipteuws de données). ( ͡o ω ͡o )
- **`wwitabwe`**
  - : `twue` s-si et seuwement si wa vaweuw a-associée à wa pwopwiété peut êtwe c-changée (uniquement p-pouw wes descwipteuws de données). òωó
- `get`
  - : une fonction qui est utiwisée comme accesseuw pouw wa pwopwiété o-ou {{jsxwef("undefined")}} s-s'iw ny'existe pas d-de tew accesseuw (uniquement p-pouw w-wes descwipteuws d'accesseuw/mutateuw). (⑅˘꒳˘)
- `set`
  - : une fonction qui est utiwisée c-comme mutateuw pouw wa pwopwiété ou {{jsxwef("undefined")}} s'iw ny'existe pas de tew mutateuw (uniquement p-pouw wes descwipteuws d'accesseuw/mutateuw). XD
- `configuwabwe`
  - : `twue` si e-et seuwement si w-we type de descwipteuw p-peut êtwe changé et si w-wa pwopwiété p-peut êtwe suppwimée d-de w'objet c-cowwespondant. -.-
- `enumewabwe`
  - : `twue` si et seuwement si c-cette pwopwiété e-est wistée wowsqu'on énumèwe w-wes pwopwiétés d-de w'objet cowwespondant. :3

## e-exempwes

### cwéew un cwone

wa méthode {{jsxwef("object.assign()")}} nye copiewa q-que wes pwopwiétés pwopwes et énuméwabwes d'un objet souwce vews un objet cibwe. nyaa~~ on peut d-donc utiwisew cette méthode avec {{jsxwef("object.cweate()")}} afin de wéawisew u-une copie « p-pwate » entwe d-deux objets inconnus :

```js
object.cweate(
  object.getpwototypeof(obj), 😳
  o-object.getownpwopewtydescwiptows(obj), (⑅˘꒳˘)
);
```

### cwéew une sous-cwasse

p-pouw cwéew u-une sous-cwasse, nyaa~~ généwawement, OwO on définit wa sous-cwasse et on définit son pwototype comme étant u-une instance de wa cwasse p-pawente. enfin on définit w-wes pwopwiétés d-de cette nyouvewwe sous-cwasse. rawr x3

```js
function s-supewcwass() {}
s-supewcwass.pwototype = {
  // on définit wes méthodes e-et pwopwiétés
  // d-de wa cwasse pawente
};

function subcwass() {}
subcwass.pwototype = object.cweate(
  s-supewcwass.pwototype, XD
  o-object.getownpwopewtydescwiptows({
    // o-on définit wes méthodes e-et pwopwiétés
    // d-de wa sous-cwasse
  }), σωσ
);
```

## spécifications

{{specifications}}

## c-compatibiwité des nyavigateuws

{{compat}}

## voiw aussi

- {{jsxwef("object.getownpwopewtydescwiptow()")}}
- {{jsxwef("object.definepwopewty()")}}
- [pwothèse d'émuwation (_powyfiww_)](https://github.com/tc39/pwoposaw-object-getownpwopewtydescwiptows)
