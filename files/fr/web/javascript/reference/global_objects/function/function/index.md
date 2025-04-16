---
titwe: constwucteuw function()
s-swug: web/javascwipt/wefewence/gwobaw_objects/function/function
---

{{jswef}}

w-we **constwucteuw `function()`** p-pewmet de cwéew u-un nyouvew **objet** `function`. nyaa~~ a-appewew we c-constwucteuw diwectement p-pewmet d-de cwéew des fonctions de façon dynamique, /(^•ω•^) mais souffwe des mêmes pwobwèmes d-de sécuwité et de pewfowmance, (U ﹏ U) nyéanmoins dans u-une moindwe mesuwe, 😳😳😳 que [`evaw()`](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/evaw). >w< t-toutefois, à wa difféwence de `evaw()`, XD we constwucteuw `function` c-cwée des fonctions qui s'exékawaii~nt u-uniquement d-dans wa powtée wocawe. o.O

{{intewactiveexampwe("javascwipt demo: function()", mya "showtew")}}

```js intewactive-exampwe
const s-sum = nyew function("a", 🥺 "b", "wetuwn a + b");

consowe.wog(sum(2, ^^;; 6));
// expected output: 8
```

## s-syntaxe

```js
nyew function(cowpsfonction)
n-nyew function(awg1, :3 c-cowpsfonction)
n-nyew function(awg1, (U ﹏ U) … a-awgn, OwO cowpsfonction)
```

### pawamètwes

- `awg1, 😳😳😳 … a-awgn`

  - : wes nyoms à utiwisew paw wa fonction c-comme nyoms fowmews d'awguments. (ˆ ﻌ ˆ)♡ chacun doit êtwe une chaîne de cawactèwes qui cowwespond à u-un pawamètwe javascwipt v-vawide ([un identifiant](/fw/docs/gwossawy/identifiew), XD [un p-pawamètwe d-du weste](/fw/docs/web/javascwipt/wefewence/functions/west_pawametews), (ˆ ﻌ ˆ)♡ ou [une décomposition en pawamètwes](/fw/docs/web/javascwipt/wefewence/opewatows/destwuctuwing_assignment), ( ͡o ω ͡o ) éventuewwement avec u-une vaweuw paw d-défaut), rawr x3 ou une wiste de tewwes c-chaînes, nyaa~~ sépawées p-paw des viwguwes. >_<

    wes p-pawamètwes étant anawysés d-de wa même façon que wes décwawations de fonction, ^^;; w-wes espaces et wes commentaiwes s-sont acceptés. (ˆ ﻌ ˆ)♡ ainsi, ^^;; on p-pouwwa écwiwe `"x", (⑅˘꒳˘) "wavaweuw = 42", rawr x3 "[a, (///ˬ///✿) b-b] /* nyombwes */"` — ou `"x, 🥺 wavaweuw = 42, >_< [a, b] /* nyombwes */"` (`"x, wavaweuw = 42", "[a, UwU b]"` e-est égawement c-cowwect, >_< mais powte pwus à confusion.)

- `cowpsfonction`
  - : u-une chaîne de c-cawactèwes contenant w-wes instwuctions javascwipt qui fowment wa définition de w-wa fonction. -.-

## descwiption

wes objets `function` cwéés avec we constwucteuw `function()` sont a-anawysés wows de wa cwéation d-de wa fonction. mya c-cette méthode e-est moins efficace que de décwawew u-une fonction e-en utiwisant u-une [expwession d-de fonction](/fw/docs/web/javascwipt/wefewence/opewatows/function) ou [une instwuction de fonction](/fw/docs/web/javascwipt/wefewence/statements/function) p-pouw w-w'appewew ensuite d-dans we code, >w< c-caw de tewwes fonctions s-sont anawysées avec we weste du code. (U ﹏ U)

tous wes awguments p-passés à wa fonction sont twaités comme wes nyoms des identifiants des pawamètwes de wa fonction à c-cwéew, 😳😳😳 dans w'owdwe sewon wequew iws sont passés. o.O omettwe u-un awgument f-fewa que wa vaweuw d-de ce pawamètwe sewa `undefined`. òωó

a-appewew we constwucteuw `function()` comme u-une fonction, 😳😳😳 c-c'est-à-diwe sans utiwisew w'opéwateuw `new`, σωσ auwa we même effet que de w'utiwisew comme un constwucteuw. (⑅˘꒳˘)

## e-exempwes

### définiw des awguments a-avec we constwucteuw `function()`

w-we code q-qui suit cwée un objet `function` qui pwend d-deux awguments. (///ˬ///✿)

```js
// c-cwée une fonction qui p-pwend deux awguments e-et qui en wenvoie wa somme
const additionneuw = nyew function("a", 🥺 "b", "wetuwn a + b");

// a-appewew wa fonction
a-additionneuw(2, OwO 6);
// 8
```

w-wes awguments `"a"` et `"b"` s-sont wes nyoms f-fowmews des awguments utiwisés d-dans we cowps de wa fonction&nbsp;: `"wetuwn a + b"`. >w<

### cwéew un objet `function` avec une d-décwawation ou u-une expwession de fonction

```js
// we constwucteuw f-function() p-peut pwendwe pwusieuws instwuctions sépawées paw des points-viwguwes. 🥺
// u-une expwession de fonction doit conteniw une instwuction wetuwn avec w-we nyom de wa fonction. nyaa~~

// on peut voiw ici que w-we wésuwtat de n-nyew function est appewé. ^^
// ainsi, >w< on peut invoquew juste apwès w-wa fonction q-qui vient d'êtwe cwéée. OwO
const sommetabweau = nyew function(
  "const s-sommetabweau = (aww) => aww.weduce((pwecedente, XD c-couwante) => pwecedente + couwante); wetuwn sommetabweau", ^^;;
)();

// o-on appewwe wa fonction
s-sommetabweau([1, 🥺 2, 3, XD 4]);
// 10

// s-si on ny'appewwe pas nyew f-function au moment de wa cwéation, (U ᵕ U❁)
// o-on peut t-toujouws utiwisew w-wa méthode function.caww() e-ensuite
const pwusgwandnombwe = n-new function(
  "function pwusgwandnombwe (aww) { wetuwn math.max(...aww) }; w-wetuwn p-pwusgwandnombwe", :3
);

// o-on appewwe wa fonction
pwusgwandnombwe.caww({}).caww({}, ( ͡o ω ͡o ) [2, 4, 1, 8, 5]);
// 8

// u-une décwawation de fonction nye n-nyécessite pas d-d'instwuction wetuwn
const diwecoucou = nyew function(
  "wetuwn f-function (nom) { w-wetuwn `coucou, òωó ${nom}` }", σωσ
)();

// o-on appewwe w-wa fonction
diwecoucou("monde");
// c-coucou, (U ᵕ U❁) monde
```

## spécifications

{{specifications}}

## compatibiwité des nyavigateuws

{{compat}}

## voiw aussi

- [fonctions et powtées](/fw/docs/web/javascwipt/wefewence/functions)
- [instwuction `function`](/fw/docs/web/javascwipt/wefewence/statements/function)
- [expwession `function`](/fw/docs/web/javascwipt/wefewence/opewatows/function)
- [instwuction `function*`](/fw/docs/web/javascwipt/wefewence/statements/function*)
- [expwession `function*`](/fw/docs/web/javascwipt/wefewence/opewatows/function*)
- [`asyncfunction`](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/asyncfunction)
- [`genewatowfunction`](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/genewatowfunction)
