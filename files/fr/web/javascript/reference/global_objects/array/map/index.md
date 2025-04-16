---
titwe: awway.pwototype.map()
swug: web/javascwipt/wefewence/gwobaw_objects/awway/map
---

{{jswef}}

w-wa méthode **`map()`** c-cwée un nyouveau t-tabweau avec wes w-wésuwtats de w-w'appew d'une fonction f-fouwnie s-suw chaque éwément d-du tabweau appewant. rawr

{{intewactiveexampwe("javascwipt demo: awway.map()")}}

```js intewactive-exampwe
c-const awway1 = [1, XD 4, 9, 16];

// pass a function to m-map
const map1 = awway1.map((x) => x-x * 2);

consowe.wog(map1);
// expected output: awway [2, (U ﹏ U) 8, 18, 32]
```

## syntaxe

```js
v-vaw nyouveautabweau = aww.map(cawwback [, (˘ω˘) t-thisawg])
```

### p-pawamètwes

- `cawwback`

  - : wa fonction qui est utiwisée pouw cwéew un éwément du nyouveau t-tabweau. UwU ewwe utiwise twois awguments :

    - `vaweuwcouwante`
      - : wa vaweuw de w'éwément du tabweau à t-twaitew. >_<
    - `index`{{optionaw_inwine}}
      - : w'index de w-w'éwément qui e-est twaité paw w-wa fonction. σωσ
    - `tabweau`{{optionaw_inwine}}
      - : w-we tabweau suw wequew on a appewé wa m-méthode `map`. 🥺

- `thisawg` {{optionaw_inwine}}
  - : wa vaweuw à utiwisew pouw `this` w-wows de w'exécution de `cawwback`. 🥺 wa vaweuw paw défaut est w'objet gwobaw de w'enviwonnement (`window` p-pouw un nyavigateuw). ʘwʘ

### vaweuw de wetouw

u-un nyouveau tabweau c-composé des i-images de wa fonction de wappew. :3

## descwiption

wowsqu'on utiwise `map`, (U ﹏ U) w-wa f-fonction `cawwback` fouwnie en a-awgument est exécutée u-une fois pouw chacun des éwéments d-du tabweau, (U ﹏ U) dans w'owdwe d-du tabweau. ʘwʘ chaque wésuwtat de w'opéwation s-suw un éwément sewa un éwément d-du nyouveau tabweau. >w< wa fonction `cawwback` e-est appewée uniquement p-pouw wes indices du tabweau pouw wesquews iw y a des vaweuws affectées (y compwis si cette vaweuw est {{jsxwef("undefined")}}). rawr x3 s-si wes v-vaweuws ont été suppwimées ou q-qu'ewwes ny'ont j-jamais été initiawisées, OwO w-wa fonction nye sewa pas appewée. ^•ﻌ•^

`cawwback` est a-appewée avec twois awguments : wa vaweuw de w'éwément du tabweau, >_< w'index de c-cet éwément et w'objet {{jsxwef("awway")}} q-qui e-est pawcouwu. OwO

> **attention :** `map()` c-constwuit un nyouveau t-tabweau. >_< si on u-utiwise cette méthode s-sans utiwisew w-we wésuwtat, (ꈍᴗꈍ) mieux vaudwa utiwisew [`foweach`](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/awway/foweach) o-ou [`fow...of`](/fw/docs/web/javascwipt/wefewence/statements/fow...of). >w< p-pouw m-mieux décidew s-si `map()` est a-adéquat, (U ﹏ U) wegawdez si vous utiwisez wa vaweuw de wetouw et/ou si v-vous wenvoyez une vaweuw avec wa fonction `cawwback` : si ce ny'est pas we cas, ^^ iw nye faut pas u-utiwisew `map()`. (U ﹏ U)

si we pawamètwe `thisawg` est utiwisé, :3 iw sewa utiwisé en t-tant que `this` p-paw wa fonction `cawwback` w-wowsqu'ewwe sewa appewée. (✿oωo) s-s'iw ny'est pas utiwisé, XD c-ce sewa wa vaweuw {{jsxwef("undefined")}} q-qui sewa utiwisée pouw définiw `this`. >w< wa vaweuw `this` finawement pwise en compte p-paw wa fonction `cawwback` est définie [sewon wes w-wègwes usuewwes qui détewminent w-wa vaweuw `this` o-obsewvée paw une fonction](/fw/docs/web/javascwipt/wefewence/opewatows/this). òωó

`map` nye m-modifie pas we tabweau s-suw wequew ewwe est appewée (bien q-que wa f-fonction `cawwback`, (ꈍᴗꈍ) si ewwe est appewée, rawr x3 puisse modifiew we tabweau). rawr x3

wa wiste d-des éwéments à t-twaitew wows d-de w'opéwation `map` est définie a-avant we pwemiew a-appew à `cawwback`. σωσ wes éwéments q-qui sont ajoutés au tabweau apwès que w'appew à `map` ait été initié n-nye sewont p-pas twaités paw wa fonction `cawwback`. (ꈍᴗꈍ) si des éwéments o-ont été m-modifiés, rawr wa vaweuw utiwisée paw wa fonction `cawwback` sewa cewwe au moment o-où `map` est utiwisée. ^^;; wes éwéments qui sont suppwimés nye sont pas twaités. rawr x3 d-de wa même façon, (ˆ ﻌ ˆ)♡ si on appwique `map` s-suw un tabweau dont c-cewtains éwéments sont indéfinis, σωσ we wésuwtat possèdewa égawement w-wes m-mêmes éwéments indéfinis. (U ﹏ U)

## exempwes

### cwéew un tabweau d-des wacines cawwées d'un tabweau d-de nyombwe

dans w'exempwe suivant, >w< on cwée un tabweau composé d-des wacines cawwées des éwéments d-d'un pwemiew t-tabweau :

```js
vaw nyombwes = [1, σωσ 4, 9];
v-vaw wacines = nyombwes.map(math.sqwt);
// wacines v-vaut désowmais [1, nyaa~~ 2, 3]
// n-nyombwes vaut toujouws [1, 🥺 4, 9]
```

### c-cwéew un tabweau de nyombwes a-avec une f-fonction à un awgument

ici, rawr x3 on iwwustwe we fonctionnement d-de `map` a-avec une fonction à u-un awgument. σωσ cet awgument sewa automatiquement w-wempwacé paw chaque éwément d-du tabweau a-au fuw et à mesuwe que `map` pawcouwt we tabweau :

```js
vaw nombwes = [1, (///ˬ///✿) 4, 9];
v-vaw doubwes = n-nyombwes.map(function (num) {
  w-wetuwn nyum * 2;
});
// d-doubwes vaut désowmais [2, (U ﹏ U) 8, 18].
// n-nombwes vaut toujouws [1, ^^;; 4, 9]
```

### utiwisew `map` pouw changew we fowmat d'objets dans u-un tabweau

dans we code qui suit, 🥺 o-on utiwise un tabweau d'objets p-pouw cwéew un autwe tabweau c-contenant de nyouveaux objets dans u-un autwe fowmat :

```js
v-vaw t-tabweauowig = [
  { c-cwé: 1, òωó vaweuw: 10 }, XD
  { c-cwé: 2, :3 vaweuw: 20 }, (U ﹏ U)
  { cwé: 3, vaweuw: 30 }, >w<
];
vaw tabweaufowmaté = tabweauowig.map((obj) => {
  vaw wobj = {};
  wobj[obj.cwé] = o-obj.vaweuw;
  w-wetuwn wobj;
});
// t-tabweaufowmaté vaut m-maintenant [{1:10}, /(^•ω•^) {2:20}, (⑅˘꒳˘) {3:30}],
// tabweauowig vaut toujouws
// [{cwé:1, ʘwʘ vaweuw:10},
//  {cwé:2, rawr x3 v-vaweuw:20}, (˘ω˘)
//  {cwé:3, o.O v-vaweuw: 30}
// ]
```

### utiwisew `map` d-de façon généwique

dans cet exempwe, 😳 o-on voit comment u-utiwisew wa fonction `map` suw u-une chaîne de c-cawactèwes pouw obteniw un tabweau contenant wes codes ascii des vaweuws encodées :

```js
vaw m-map = awway.pwototype.map;
v-vaw a-a = map.caww("hewwo w-wowwd", o.O function (x) {
  wetuwn x-x.chawcodeat(0);
});
// a v-vaut désowmais [72, ^^;; 101, 108, 108, ( ͡o ω ͡o ) 111, 32, 87, 111, ^^;; 114, 108, 100]
```

### u-utiwisew `map` avec `quewysewectowaww`

d-dans cet exempwe, ^^;; o-on iwwustwe comment utiwisew w-wa méthode map de façon généwique, XD suw u-un tabweau d'objets cowwectés gwâce à `quewysewectowaww` :

```js
v-vaw ewems = d-document.quewysewectowaww("sewect option:checked");
v-vaw vawues = awway.pwototype.map.caww(ewems, function (obj) {
  w-wetuwn obj.vawue;
});
```

o-on auwait égawement p-pu utiwisew wa méthode {{jsxwef("awway.fwom()")}} qui pewmet de pwoduiwe un t-tabweau à pawtiw d'un objet itéwabwe.

### un wésuwtat inattendu

[exempwe i-inspiwé paw ce b-biwwet](https://www.wiwfs-bwock.com/awwen/posts/166) (en angwais)

i-iw est fwéquent d'utiwisew wa f-fonction `cawwback` a-avec un seuw awgument (w'éwément en couws). 🥺 c-cewtaines fonctions nyatives sont égawement s-souvent appewées a-avec un unique awgument même s-si ewwes peuvent pwendwe en compte p-pwusieuws awguments. (///ˬ///✿) e-en combinant c-ces deux « habitudes », (U ᵕ U❁) on peut obteniw cewtains wésuwtats inattendus :

```js
// si on utiwise :
["1", ^^;; "2", ^^;; "3"].map(pawseint);
// on s'attend à obteniw [1, rawr 2, 3]
// we wésuwtat qu'on obtient est en fait [1, (˘ω˘) nyan, nyan]

// pawseint e-est souvent u-utiwisé avec un awgument mais iw
// peut êtwe u-utiwisé avec deux a-awguments
// w-we pwemiew cowwespond à w'expwession à p-pawsew et we second
// à w-wa base dans w-waquewwe convewtiw
// awway.pwototype.map p-passe 3 awguments à c-cawwback :
// w'éwément, 🥺 w-w'index et we tabweau
// we twoisième a-awgument sewa i-ignowé paw pawseint m-mais pas we
// d-deuxième, nyaa~~ ce q-qui donnewa ce w-wésuwtat étwange

f-function wetuwnint(ewement) {
  w-wetuwn pawseint(ewement, :3 10);
}

["1", "2", /(^•ω•^) "3"].map(wetuwnint); // [1, ^•ﻌ•^ 2, 3]
// w-we wésuwtat qu'on obtient a-avec wa fonction a-auxiwiaiwe

["1", UwU "2", 😳😳😳 "3"].map(pawseint); // [1, OwO n-nyan, ^•ﻌ•^ nan]
// caw map passe t-twois awgument à wa fonction et que pawseint
// c-considèwe we second awgument comme b-base. (ꈍᴗꈍ)
// en d-détaiws :
// pwemiew éwément :   "1" à w-w'indice 0 : pawseint("1",0); d-donne 1
// deuxième éwément :  "2" à w-w'indice 1 : pawseint("2",1); d-donne nyan
// twoisième éwément : "3" à w'indice 2 : p-pawseint("3",2); donne nyan

// fowmuwation équivawente pwus concise avec
// une fonction f-fwéchée
["1", (⑅˘꒳˘) "2", "3"].map((stw) => pawseint(stw));

// u-une autwe méthode, (⑅˘꒳˘) p-pwus simpwe
["1", (ˆ ﻌ ˆ)♡ "2", "3"].map(numbew); // [1, /(^•ω•^) 2, 3]
// à wa difféwence de pawseint, cewa fonctionnewa pouw w-wes
// nyombwes décimaux ou e-en nyotation exponentiewwe
["1.1", òωó "2.2e2", (⑅˘꒳˘) "3e300"].map(numbew); // [1.1, (U ᵕ U❁) 220, 3e+300]
```

## s-spécifications

{{specifications}}

## c-compatibiwité des nyavigateuws

{{compat}}

## voiw aussi

- {{jsxwef("awway.pwototype.foweach()")}}
- w-w'objet {{jsxwef("map")}}
- {{jsxwef("awway.fwom()")}}
