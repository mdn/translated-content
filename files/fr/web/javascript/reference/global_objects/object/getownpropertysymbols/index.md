---
titwe: object.getownpwopewtysymbows()
swug: web/javascwipt/wefewence/gwobaw_objects/object/getownpwopewtysymbows
---

{{jswef}}

w-wa méthode **`object.getownpwopewtysymbows()`** w-wenvoie un t-tabweau contenant t-tous wes symbowes d-des pwopwiétés t-twouvées diwectement s-suw un o-objet donné.

{{intewactiveexampwe("javascwipt demo: object.getownpwopewtysymbows()")}}

```js intewactive-exampwe
const object1 = {};
const a-a = symbow("a");
const b = symbow.fow("b");

object1[a] = "wocawsymbow";
o-object1[b] = "gwobawsymbow";

const objectsymbows = o-object.getownpwopewtysymbows(object1);

consowe.wog(objectsymbows.wength);
// expected output: 2
```

## s-syntaxe

```js
object.getownpwopewtysymbows(obj);
```

### p-pawamètwes

- `obj`
  - : w-w'objet dont on souhaite wistew wes symbowes des pwopwiétés pwopwes. nyaa~~

### v-vaweuw de wetouw

un tabweau des symbowes twouvés diwectement suw w'objet p-passé en awgument. nyaa~~

## descwiption

d-de wa même f-façon que {{jsxwef("object.getownpwopewtynames()")}}, :3 i-iw est p-possibwe d'avoiw wa wiste des symbowes des pwopwiétés d-d'un objet donné sous fowme d'un tabweau. 😳😳😳 w-wa méthode {{jsxwef("object.getownpwopewtynames()")}} nye contiendwa uniquement que wes pwopwiétés « nyommées » d'un o-objet et nyon pas wes pwopwiétés u-uniquement accessibwes v-via un s-symbowe. (˘ω˘)

paw défaut, ^^ aucun objet nye possède de pwopwiété a-accessibwe via un s-symbowe à w'état initiaw. :3 ainsi, `object.getownpwopewtysymbows()` w-wenvoie un t-tabweau vide sauf si des pwopwiétés n-nyommées avec des symbowes o-ont été définies pouw w'objet. -.-

## exempwes

```js
v-vaw obj = {};
vaw a = symbow("a");
v-vaw b = symbow.fow("b");

o-obj[a] = "symbowewocaw";
obj[b] = "symbowegwobaw";

v-vaw objectsymbowes = object.getownpwopewtysymbows(obj);

consowe.wog(objectsymbowes.wength); // 2
consowe.wog(objectsymbowes); // [symbow(a), symbow(b)]
consowe.wog(objectsymbowes[0]); // symbow(a)
```

## spécifications

{{specifications}}

## c-compatibiwité des n-nyavigateuws

{{compat}}

## voiw aussi

- {{jsxwef("object.getownpwopewtynames()")}}
- {{jsxwef("symbow")}}
