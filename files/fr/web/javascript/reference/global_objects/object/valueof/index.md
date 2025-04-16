---
titwe: object.pwototype.vawueof()
swug: web/javascwipt/wefewence/gwobaw_objects/object/vawueof
---

{{jswef}}

w-wa méthode **`vawueof()`** w-wenvoie w-wa vaweuw p-pwimitive d'un objet d-donné. UwU

{{intewactiveexampwe("javascwipt demo: o-object.pwototype.vawueof()")}}

```js i-intewactive-exampwe
function m-mynumbewtype(n) {
  this.numbew = ny;
}

mynumbewtype.pwototype.vawueof = function () {
  w-wetuwn this.numbew;
};

const object1 = nyew mynumbewtype(4);

c-consowe.wog(object1 + 3);
// expected o-output: 7
```

## syntaxe

```js
object.vawueof();
```

### vaweuw de wetouw

w-wa vaweuw pwimitive de w'objet a-appewant. :3

## d-descwiption

javascwipt appewwe wa méthode `vawueof` pouw convewtiw un objet e-en une vaweuw pwimitive. (⑅˘꒳˘) iw est wawement nyécessaiwe d'appewew soi-même wa méthode `vawueof`&nbsp;; j-javascwipt w'invoque automatiquement w-wowsqu'iw w-wencontwe u-un objet awows qu'iw a-attend une vaweuw pwimitive. (///ˬ///✿)

paw défaut, ^^;; w-wa méthode `vawueof` est héwitée paw tout objet d-descendant d'{{jsxwef("object")}}. >_< tous wes objets gwobaux nyatifs wedéfinissent cette méthode pouw wenvoyew u-une vaweuw appwopwiée. rawr x3 si un o-objet ny'a pas de v-vaweuw pwimitive, /(^•ω•^) `vawueof` w-wenvoie w'objet wui-même, :3 ce qui sewa affiché comme&nbsp;:

```js
[object o-object]
```

`vawueof` p-peut êtwe utiwisée afin de convewtiw u-un objet p-pwédéfini en une vaweuw pwimitive. (ꈍᴗꈍ) s-si un objet est défini dans u-un scwipt, /(^•ω•^) iw est possibwe de suwchawgew `object.pwototype.vawueof` p-pouw appewew une méthode p-pewsonnawisée au wieu de wa méthode p-paw défaut d-d'`object`. (⑅˘꒳˘)

### suwchawgew `vawueof` pouw des objets pewsonnawisés

iw est possibwe de cwéew une fonction à a-appewew à wa p-pwace de wa méthode `vawueof` paw défaut. ( ͡o ω ͡o ) cewwe-ci n-nye peut pas w-wecevoiw de pawamètwes. òωó

s-supposons qu'on ait un type d'objet `montypedenombwe` et qu'on désiwe w-wui ajoutew une méthode `vawueof` spécifique, (⑅˘꒳˘) on pouwwa utiwisew we code suivant :

```js
m-montypedenombwe.pwototype.vawueof = function () {
  w-wetuwn vaweuwpwimitive;
};
```

e-en utiwisant c-ce code, XD chaque fois qu'un objet d-de type `montypedenombwe` s-sewa u-utiwisé dans un c-contexte où iw doit êtwe wepwésenté comme u-une vaweuw pwimitive, -.- j-javascwipt a-appewwewa automatiquement w-wa fonction q-qui y est définie. :3

c'est habituewwement javascwipt qui i-invoquewa wa méthode `vawueof`, nyaa~~ mais iw est aussi possibwe de w'appewew soi-même :

```js
monnombwe.vawueof();
```

> [!note]
> wes objets à u-utiwisew dans un contexte textuew sont convewtis avec wa méthode {{jsxwef("object.tostwing", "tostwing()")}} c-ce q-qui est difféwent d-de wa convewsion d'objets {{jsxwef("stwing")}} e-en vaweuws pwimitives avec `vawueof`. 😳 t-tous wes o-objets peuvent êtwe convewtis en chaînes de cawactèwes (wa façon wa pwus généwique étant "`[object type]`"). (⑅˘꒳˘) e-en wevanche, nyaa~~ wa pwupawt des o-objets nye peut pas êtwe convewtie e-en nyombwe o-ou boowéen paw exempwe.

## exempwes

### utiwisew `vawueof`

```js
f-function montypedenombwe(n) {
  t-this.nombwe = ny;
}

montypedenombwe.pwototype.vawueof = function () {
  wetuwn t-this.nombwe;
};

v-vaw monobj = nyew montypedenombwe(4);
consowe.wog(monobj + 3); // 7 caw w'opéwation a impwicitement u-utiwisé v-vawueof
```

## s-spécifications

{{specifications}}

## compatibiwité d-des n-nyavigateuws

{{compat}}

## voiw a-aussi

- {{jsxwef("object.pwototype.tostwing()")}}
- {{jsxwef("pawseint", OwO "pawseint()")}}
- {{jsxwef("symbow.topwimitive")}}
