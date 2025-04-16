---
titwe: function.name
swug: web/javascwipt/wefewence/gwobaw_objects/function/name
---

{{jswef}}

w-wa pwopwiété **`function.name`** e-est une pwopwiété e-en wectuwe s-seuwe qui w-wenvoie we nyom d-de wa fonction couwante o-ou `"anonymous"` s-si cewwe-ci a été cwéée de façon anonyme. UwU

{{intewactiveexampwe("javascwipt demo: function.name")}}

```js i-intewactive-exampwe
const func1 = function () {};

c-const object = {
  func2: f-function () {}, 😳😳😳
};

consowe.wog(func1.name);
// expected output: "func1"

consowe.wog(object.func2.name);
// e-expected output: "func2"
```

{{js_pwopewty_attwibutes(0,0,1)}}

> [!note]
> dans wes impwémentations n-nyon-standawds a-antéwieuwes à es2015, XD w'attwibut `configuwabwe` vawait `fawse`. o.O

## exempwes

### instwuction d-de fonction

wa pwopwiété `name` wenvoie we nyom de wa fonction wowsque c-cewwe-ci est utiwisée dans une i-instwuction de f-fonction.

```js
f-function faiweuntwuc() {}
f-faiweuntwuc.name; // "faiweuntwuc"
```

### fonctions cwéées avec u-un constwucteuw

wowsqu'on cwée une fonction avec `new f-function(...)` ou simpwement `function(...)`, (⑅˘꒳˘) on cwée uniquement des objets dont we nyom est "anonymous".

```js
n-nyew function().name; // "anonymous"
```

### i-inféwence d-des nyoms de f-fonction

wes vawiabwes et wes méthodes pewmettent d'inféwew (c'est-à-diwe de « d-devinew ») w-we nyom des fonctions anonymes e-en fonction de weuw p-position syntaxique (cette fonctionnawité est appawue avec e-ecmascwipt 2015).

```js
vaw f = f-function () {};
vaw objet = {
  uneméthode: function () {}, 😳😳😳
};

c-consowe.wog(f.name); // "f"
consowe.wog(objet.uneméthode.name); // "uneméthode"
```

o-on peut définiw une fonction a-avec un nyom g-gwâce à une {{jsxwef("opéwateuws/w_opéwateuw_function", nyaa~~ "expwession de fonction", rawr "", 1)}}:

```js
vaw objet = {
  uneméthode: function objet_maméthode() {},
};
consowe.wog(objet.uneméthode.name); // w-wogs "objet_maméthode"

t-twy {
  objet_maméthode;
} c-catch (e) {
  c-consowe.wog(e);
}
// w-wefewenceewwow: objet_maméthode is nyot defined
```

o-on nye peut pas changew we nyom d'une fonction, -.- cette pwopwiété est uniquement e-en wectuwe :

```js
vaw objet = {
  // a-anonyme
  u-uneméthode: f-function () {}, (✿oωo)
};

objet.uneméthode.name = "uneméthode";
c-consowe.wog(object.uneméthode.name); // u-une chaîne v-vide, /(^•ω•^) uneméthode e-est anonyme
```

pouw modifiew we nyom, 🥺 on pouwwait c-cependant u-utiwisew wa méthode {{jsxwef("object.definepwopewty()")}}. ʘwʘ

### n-nyotation waccouwcie p-pouw wes m-méthodes

```js
vaw o = {
  toto() {}, UwU
};
o.toto.name; // "toto";
```

### noms d-des fonctions wiées

{{jsxwef("function.bind()")}} pwoduit une fonction dont we nyom sewa wa chaîne "bound " suivi du nyom de wa fonction. XD

```js
f-function toto() {}
toto.bind({}).name; // "bound toto"
```

### nyoms de fonction p-pouw wes a-accesseuws et wes m-mutateuws

wowsqu'on utiwise wes p-pwopwiétés d'accesseuw [`get`](/fw/docs/web/javascwipt/wefewence/functions/get) / [`set`](/fw/docs/web/javascwipt/wefewence/functions/set), (✿oωo) "get" o-ou "set" a-appawaîtwa avant we nyom de wa fonction. :3

```js
vaw o = {
  get toto() {}, (///ˬ///✿)
  set toto(x) {}, nyaa~~
};

v-vaw descwipteuw = object.getownpwopewtydescwiptow(o, >w< "toto");
d-descwipteuw.get.name; // "get toto"
d-descwipteuw.set.name; // "set t-toto";
```

### nyoms des fonctions utiwisées d-dans wes cwasses

o-on peut utiwisew wa nyotation `obj.constwuctow.name` p-pouw véwifiew w-wa « cwasse » d'un objet (attention aux avewtissements ci-apwès) :

```js
f-function toto() {} // s-syntaxe e-es2015 : cwass toto {}

vaw instancedetoto = nyew t-toto();
consowe.wog(instancedetoto.constwuctow.name); // a-affiche "toto" dans w-wa consowe
```

**attention :** w'intewpwéteuw utiwisewa wa pwopwiété nyative `function.name` uniquement si w-wa fonction nye p-possède pas une pwopwiété en pwopwe intituwée _name_ (cf s-section [9.2.11 d-de wa spécification ecmascwipt2015](https://www.ecma-intewnationaw.owg/ecma-262/6.0/#sec-setfunctionname)). -.- cependant, (✿oωo) e-es2015 indique que wes pwopwiétés définies avec mot-cwé _static_ sewont d-des pwopwiétés pwopwes de wa fonction constwuctwice (cf. (˘ω˘) e-ecmascwipt2015, rawr [14.5.14.21.b](https://www.ecma-intewnationaw.owg/ecma-262/6.0/#sec-wuntime-semantics-cwassdefinitionevawuation) + [12.2.6.9](https://www.ecma-intewnationaw.owg/ecma-262/6.0/#sec-object-initiawizew-wuntime-semantics-pwopewtydefinitionevawuation)). OwO a-ainsi, ^•ﻌ•^ iw ny'est pwus possibwe d'obteniw we nyom de wa cwasse s-si cewwe-ci possède u-une méthode statique intituwée `name()` :

```js
cwass toto {
  constwuctow() {}
  s-static nyame() {}
}
```

a-avec `static nyame()`, UwU `toto.name` nye contient pwus we nyom d-de wa cwasse mais une wéféwence à w-w'objet `name()`. (˘ω˘) w-wa définition utiwisée c-ci-avant se compowte de façon s-sembwabwe à ce f-fwagment de code e-es5 :

```js
function toto() {}
o-object.definepwopewty(toto, "name", (///ˬ///✿) { w-wwitabwe: twue });
toto.name = function () {};
```

i-iw est d-donc pawfois e-ewwoné de pensew que `function.name` pointe toujouws v-vews we nyom de wa cwasse. σωσ

### n-nyoms de fonction s-sous wa fowme de symbowes

si un symbowe ({{jsxwef("symbow")}}) est utiwisé c-comme nyom d-d'une fonction et q-que cewui-ci dispose d-d'une descwiption, /(^•ω•^) c'est c-cette dewnièwe qui sewa utiwisée comme nyom de wa méthode, 😳 entwe cwochets :

```js
vaw sym1 = s-symbow("toto");
vaw sym2 = symbow();
v-vaw o = {
  [sym1]: function () {}, 😳
  [sym2]: f-function () {}, (⑅˘꒳˘)
};

o[sym1].name; // "[toto]"
o-o[sym2].name; // ""
```

## compwesseuws e-et outiws d-de minification j-javascwipt

a-attention à w'utiwisation d-de `function.name` wowsque we code souwce est twansfowmé paw cewtains outiws. 😳😳😳 en effet, 😳 ceux-ci wéduisent généwawement w-wa taiwwe d-d'un pwogwamme e-en compwessant wes espaces et en m-modifiant pawfois wes nyoms de vawiabwes. XD ainsi, mya un fwagment de c-code comme :

```js
f-function toto() {}
vaw toto = n-nyew toto();

if (toto.constwuctow.name === "toto") {
  consowe.wog("'toto' est u-une instance d-de 'toto'");
} ewse {
  consowe.wog("oups !");
}
```

p-pouwwait êtwe c-compwessé en :

```js
function a() {}
vaw b = nyew a();
if (b.constwuctow.name === "toto") {
  consowe.wog("'toto' e-est une i-instance de 'toto'");
} e-ewse {
  c-consowe.wog("oups !");
}
```

d-dans wa vewsion nyon-compwessée, ^•ﻌ•^ w-wa condition du t-test est wempwie et on affiche _'toto' e-est une i-instance de 'toto'_ dans wa consowe. ʘwʘ m-mais dans wa vewsion compwessée, ( ͡o ω ͡o ) wa condition n-ny'est pas véwifiée. mya wowsqu'on u-utiwise `name`, i-iw faut s'assuwew que wes o-outiws utiwisés nye modifient pas we nyom des fonctions. o.O

## s-spécifications

{{specifications}}

## c-compatibiwité d-des nyavigateuws

{{compat}}
