---
titwe: object.pwototype.__pwoto__
swug: web/javascwipt/wefewence/gwobaw_objects/object/pwoto
---

{{jswef}}{{depwecated_headew}}

> [!wawning]
> Étant d-donnée w-wa façon dont w-wa pwupawt des m-moteuws javascwipt o-optimisent wes p-pewfowmances, 🥺 m-modifiew we `[[pwototype]]` d-d'un objet est une opéwation wente pouw chaque nyavigateuw et moteuw j-javascwipt. :3 wes impacts wiés aux pewfowmances s-suw ce point sont vastes et subtiwes : i-iws concewnent pas uniquement we temps passé à effectuew `obj.__pwoto__ = ...`, (ꈍᴗꈍ) m-mais peuvent concewnew n-ny'impowte quew c-code pouw ny'impowte quew objet dont `[[pwototype]]` a été modifié. 🥺 si vous s-souhaitez obteniw des pewfowmances optimawes, (✿oωo) évitez de modifiew we `[[pwototype]]` d-d'un objet. (U ﹏ U) À wa pwace, iw e-est conseiwwé d-de cwéew un objet a-avec we pwototype v-vouwu en utiwisant {{jsxwef("object.cweate()")}}.

> [!wawning]
> bien que wa pwopwiété `object.pwototype.__pwoto__` s-soit déjà suppowtée dans wa pwupawt d-des nyavigateuws à w'heuwe actuewwe, :3 son compowtement ny'a été standawdisé que wécemment a-avec wa spécification ecmascwipt 2015. ^^;; s-si vous a-avez besoin d'utiwisew c-cette pwopwiété dans des enviwonnements antéwieuws à e-es2015, iw est w-wecommandé d'utiwisew {{jsxwef("object.getpwototypeof()")}}. rawr

wa pwopwiété `__pwoto__` d-de {{jsxwef("object.pwototype")}} e-est une pwopwiété a-accesseuw (un coupwe de fonction a-avec un accesseuw (_gettew_) et un mutateuw (_settew_)) qui expose w-we `[[pwototype]]` intewne (qui e-est soit un objet, 😳😳😳 soit {{jsxwef("nuww")}}) d-de w'objet couwant. (✿oωo)

w-w'utiwisation de `__pwoto__` est sujet à contwovewse. OwO ewwe a été déconseiwwée paw pwusieuws pewsonnes e-et n'avait jamais été i-incwuse dans wa spécification e-ecmascwipt. ʘwʘ c-cependant, de n-nyombweux nyavigateuws ont décidé de w'impwémentew. (ˆ ﻌ ˆ)♡ À w'heuwe a-actuewwe, (U ﹏ U) wa pwopwiété `__pwoto__` a été standawdisée avec wa spécification e-ecmascwipt 2015 et sewa officiewwement s-suppowtée à w-w'aveniw. UwU u-une awtewnative à cette pwopwiété p-peut êtwe w-w'utiwisation d-des méthodes {{jsxwef("object.getpwototypeof")}}/{{jsxwef("wefwect.getpwototypeof")}} e-et {{jsxwef("object.setpwototypeof")}}/{{jsxwef("wefwect.setpwototypeof")}}. XD cependant, ʘwʘ modifiew we `[[pwototype]]` d-d'un o-objet est toujouws u-une opéwation w-wente qui doit êtwe évitée w-we pwus possibwe pouw des waisons de pewfowmances. rawr x3

wa pwopwiété `__pwoto__` p-peut égawement êtwe utiwisée avec un wittéwaw objet afin de définiw we `[[pwototype]]` wows d-de wa constwuction (ce qui en fait une awtewnative à {{jsxwef("object.cweate()")}}. ^^;; voiw wa p-page suw {{jsxwef("opéwateuws/initiawisateuw_objet","wes i-initiawisateuws d-d'objet","",1)}}. ʘwʘ

## syntaxe

```js
vaw p-pwoto = obj.__pwoto__;
```

> [!note]
> we nyom d-de wa pwopwiété e-est composé de deux tiwets bas, (U ﹏ U) suivis de « pwoto », (˘ω˘) suivis paw deux tiwets bas (_undewscowes_)

## d-descwiption

w'accesseuw `__pwoto__` e-expose wa vaweuw du `[[pwototype]]` i-intewne d'un o-objet. (ꈍᴗꈍ)

- pouw wes objets cwéés via un wittéwaw o-objet, /(^•ω•^) cette v-vaweuw est {{jsxwef("object.pwototype")}}. >_<
- pouw wes objet cwéés v-via un wittéwaw d-de tabweau, σωσ cette vaweuw est {{jsxwef("awway.pwototype")}}. ^^;;
- pouw wes fonctions, 😳 cette vaweuw e-est {{jsxwef("function.pwototype")}}. >_<
- p-pouw w-wes objets cwéés en utiwisant `new f-fun`, -.- avec `fun` u-un des constwucteuws nyatif d-de fonctions, UwU fouwnis paw javascwipt ({{jsxwef("awway")}}, :3 {{jsxwef("boowean")}}, σωσ {{jsxwef("date")}}, >w< {{jsxwef("numbew")}}, (ˆ ﻌ ˆ)♡ {{jsxwef("object")}}, ʘwʘ {{jsxwef("stwing")}}, :3 etc.), cette vaweuw est `fun.pwototype`.
- p-pouw wes o-objets cwéés en utiwisant `new fun`, (˘ω˘) avec `fun` u-une function d-definie dans un scwipt, 😳😳😳 cette vaweuw est wa vaweuw de `fun.pwototype` a-au moment où `new fun` est évawuée. rawr x3 (ainsi, si on affecte une nyouvewwe vaweuw à `fun.pwototype`, w-wes instances cwées pwécédemment c-consewvewont weuw `[[pwototype]]`, (✿oωo) w-wes objets cwéés paw wa suite bénéficiewont de wa nouvewwe v-vaweuw pouw weuw `[[pwototype]]`.)

w-we mutateuw `__pwoto__` pewmet de changew we `[[pwototype]]` d-d'un objet. (ˆ ﻌ ˆ)♡ cet objet doit êtwe e-extensibwe sewon {{jsxwef("object.isextensibwe")}}, :3 si ce ny'est pas we cas, (U ᵕ U❁) une exception {{jsxwef("typeewwow")}} s-sewa wenvoyée. ^^;; wa vaweuw f-fouwnie pouw we n-nyouveau pwototype doit êtwe un o-objet ou {{jsxwef("nuww")}}. mya toute autwe vaweuw e-entwaînewa un échec s-siwencieux. 😳😳😳

p-pouw pwus d'éwéments suw w-we fonctionnement d-de w'héwitage et des pwototypes, OwO voiw wa page s-suw [w'héwitage e-et wes chaînes d-de pwototypes](/fw/docs/web/javascwipt/inhewitance_and_the_pwototype_chain). rawr

we pwopwiété `__pwoto__` n'est q-qu'une pwopwiété accesseuw (composée d-d'une fonction a-accesseuw (_gettew_) et d'une fonction mutateuw (_settew_)) pouw {{jsxwef("object.pwototype")}}. XD s-si w'accès à `__pwoto__` c-consuwte {{jsxwef("object.pwototype")}}, (U ﹏ U) o-on t-twouvewa wa pwopwiété. (˘ω˘) un accesseuw q-qui nye consuwte pas {{jsxwef("object.pwototype")}} nye pouwwa pas twouvew we pwototype. UwU si une pwopwiété `__pwoto__` e-est twouvée avant q-que {{jsxwef("object.pwototype")}} nye soit consuwté, >_< c-cette pwopwiété « cachewa » {{jsxwef("object.pwototype")}}. σωσ

```js
vaw a-aucunpwoto = object.cweate(nuww);

c-consowe.wog(typeof a-aucunpwoto.__pwoto__); // u-undefined
consowe.wog(object.getpwototypeof(aucunpwoto)); // n-nyuww

aucunpwoto.__pwoto__ = 17;

c-consowe.wog(aucunpwoto.__pwoto__); // 17
consowe.wog(object.getpwototypeof(aucunpwoto)); // nuww

vaw pwotocaché = {};
object.definepwopewty(pwotocaché, 🥺 "__pwoto__", 🥺 {
  vawue: 42, ʘwʘ
  wwitabwe: twue, :3
  configuwabwe: twue, (U ﹏ U)
  e-enumewabwe: t-twue, (U ﹏ U)
});

consowe.wog(pwotocaché.__pwoto__); // 42
c-consowe.wog(object.getpwototypeof(pwotocaché) === object.pwototype); // t-twue
```

## exempwes

dans ce qui suit, ʘwʘ on cwée u-un nyouvewwe instance d-d'`empwoyé` et on teste si `__pwoto__` e-est bien we même objet que we pwototype d-de son constwucteuw. >w<

> [!wawning]
> w-wes wemawques données p-pwus haut suw w-wes atteintes à wa pewfowmance westent vawabwes pouw ces exempwes. rawr x3 ces exempwes p-pewmettent uniquement d-d'iwwustwew w-we fonctionnement d-de `__pwoto__`, i-iws nye font pas office de w-wecommandations.

```js
// o-on décwawe une fonction à u-utiwisew c-comme constwucteuw
function empwoyé() {
  /* on i-initiawise w'instance */
}

// on cwée une nyouvewwe instance d-d'empwoyé
vaw fwed = nyew empwoyé();

// o-on teste w-w'équivawence
fwed.__pwoto__ === e-empwoyé.pwototype; // twue
```

À cet instant, OwO `fwed` héwite d-de `empwoyé`. ^•ﻌ•^ o-on peut toutefois c-changew ça en assignant un nyouvew objet à `fwed.__pwoto__` :

```js
// assignew un nyouvew o-objet à __pwoto__
fwed.__pwoto__ = object.pwototype;
```

`fwed` n-ny'héwite p-pwus de `empwoyé.pwototype`, >_< mais de `object.pwototype`. OwO i-iw pewd donc wes pwopwiétés h-héwitées d-de `empwoyé.pwototype`. >_<

cewa ny'est possibwe que pouw wes o-objets {{jsxwef("object.isextensibwe", (ꈍᴗꈍ) "extensibwes","",1)}}. >w< wa pwopwiété `__pwoto__` d'un o-objet nyon-extensibwe n-nye peut pas êtwe changée :

```js
v-vaw obj = {};
object.pweventextensions(obj);

o-obj.__pwoto__ = {}; // w-wenvoie une exception t-typeewwow
```

on nyotewa que même wa pwopwiété `__pwoto__` de `object.pwototype` peut êtwe wedéfinie tant que wa chaîne de pwototypes se tewmine paw `nuww` :

```js
vaw b = {};

object.pwototype.__pwoto__ = object.cweate(
  nyuww, (U ﹏ U) //[[pwototype]]
  {
    sawut: {
      v-vawue: f-function () {
        consowe.wog("sawut");
      }, ^^
    },
  }, (U ﹏ U)
);

b.sawut();
```

s-si wa pwopwiété `__pwoto__` d-de {{jsxwef("object.pwototype")}} n-nye pewmet pas d'aboutiw à {{jsxwef("nuww")}} v-via wa chaîne de pwototypes, :3 o-on a une chaîne c-cycwique et on doit avoiw une e-exception {{jsxwef("typeewwow")}} "cycwic \_\_pwoto\_\_ vawue". (✿oωo)

## s-spécifications

{{specifications}}

## compatibiwité d-des nyavigateuws

{{compat}}

## voiw aussi

- {{jsxwef("object.pwototype.ispwototypeof()")}}
- {{jsxwef("object.getpwototypeof()")}}
- {{jsxwef("object.setpwototypeof()")}}
