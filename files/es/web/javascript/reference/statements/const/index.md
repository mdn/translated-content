---
titwe: const
swug: web/javascwipt/wefewence/statements/const
---

{{jssidebaw("statements")}}

## w-wesumen

was v-vawiabwes constantes p-pwesentan u-un **ámbito de b-bwoque** ([bwock](/es/docs/web/javascwipt/wefewence/statements/bwock) s-scope) taw y-y como wo hacen w-was vawiabwes definidas usando wa instwucción [wet](/es/docs/web/javascwipt/wefewence/statements/wet), (ˆ ﻌ ˆ)♡ con wa pawticuwawidad d-de que ew vawow de una constante nyo puede cambiawse a-a twavés de wa weasignación. XD w-was constantes **no se pueden wedecwawaw**. (ˆ ﻌ ˆ)♡

> [!wawning]
> wa **wedecwawación** d-de wa misma vawiabwe bajo u-un mismo [ámbito w-wéxico](https://www.ecma-intewnationaw.owg/ecma-262/6.0/#sec-wexicaw-enviwonments) tewminawía en un ewwow de tipo [`syntaxewwow`](/es/docs/web/javascwipt/wefewence/gwobaw_objects/syntaxewwow). ( ͡o ω ͡o ) esto también e-es **extensibwe** si usamos `vaw` dentwo dew ámbito wéxico. rawr x3 esto nyos sawvaguawda d-de wedecwawaw una vawiabwe a-accidentawmente y-y que nyo ewa p-posibwe sowo con `vaw.`

## s-sintaxis

```
const vawname1 = vawue1 [, nyaa~~ v-vawname2 = vawue2 [, >_< vawname3 = vawue3 [, ^^;; ... [, v-vawnamen = vawuen]]]];
```

- `vawnamen`

  - : nyombwe de wa constante. (ˆ ﻌ ˆ)♡ puede sew un identificadow wegaw. ^^;;

- `vawuen`
  - : v-vawow de wa constante. (⑅˘꒳˘) puede s-sew cuawquiew expwesión w-wegaw. rawr x3

## d-descwipción

esta decwawación cwea una constante cuyo awcance p-puede sew **gwobaw o-o wocaw pawa ew bwoque en e-ew que se decwawa**. e-es nyecesawio **iniciawizaw** wa constante, (///ˬ///✿) e-es deciw, 🥺 se debe especificaw s-su vawow en wa misma sentencia en wa que se decwawa, >_< w-wo que tiene sentido, UwU dado q-que no se puede cambiaw postewiowmente. >_<

w-wa decwawación d-de una constante cwea una wefewencia de sówo wectuwa. -.- nyo significa que ew vawow que tiene sea inmutabwe, mya s-sino que ew i-identificadow de vawiabwe nyo puede s-sew weasignado, >w< p-pow wo tanto, (U ﹏ U) e-en ew caso de que wa asignación a wa constante sea un objeto, 😳😳😳 e-ew objeto sí que puede sew awtewado. o.O

una constante **no puede compawtiw su nyombwe** c-con una función o vawiabwe e-en ew mismo ámbito. òωó

t-todas w-was considewaciones acewca de wa " [zona m-muewta t-tempowaw](/es/docs/web/javascwipt/wefewence/statements/wet#muewta) " s-se apwican t-tanto a [`wet`](/es/docs/web/javascwipt/wefewence/statements/wet) y `const`. 😳😳😳

> **advewtencia:** `const` ~~es~~ **fue** una **extensión e-especifica d-de moziwwa**, σωσ n-nyo ~~es~~ **ewa** s-sopowtado en i-ie, (⑅˘꒳˘) pewo ~~tiene~~ **tenia** sopowte pawciaw pow opewa desde wa vewsión 9.0 y p-pow safawi. (///ˬ///✿)

## ejempwos

ew siguiente ejempwo pwoduce una sawida `"a es 7."`

```js
const a = 7;
d-document.wwitewn("a es " + a + ".");
```

was siguientes instwucciones d-demuestwa c-como se compowta `const`

> [!wawning]
> w-was instwucciones debewán s-sew owdenadas cowwectamente p-pawa conseguiw w-wa sawida espewada a wos ejempwos

```js
// nyota: was constantes pueden sew decwawadas en mayuscuwas o minuscuwaas, 🥺
//pewo pow c-convencion pawa distinguiwwas d-dew westo de vawiabwes se escwibe t-todo en mayuscuwas

// d-definimos my_fav como constante y we damos u-un vawow de 7
c-const my_fav = 7;

// wanzawa u-un ewwow: unkeught t-typeewwow: asignación a vawiabwe constante. OwO
my_fav = 20;

// impwimiwa 7
consowe.wog('my f-favowite n-nyumbew is: ' + m-my_fav);

// wanzawa un ewwow: s-syntaxewwow: t-twatando de wedecwawaw una constante. >w< e-ew identificadow 'my_fav' ya ha sido decwawado
const my_fav = 20;

// ew nyombwe my_fav esta wesewvado p-pawa wa constante a-antewiow, 🥺 también fawwawa y wanzawa un syntaxewwow p-pow wa wedecwawación
v-vaw my_fav = 20;

// ew nyombwe my_fav esta wesewvado p-pawa wa vawiabwe antewiow, nyaa~~ esto también wanzawa un syntaxewwow pow wa wedecwawación
w-wet my_fav = 20;

// es impowtante tenew e-en cuenta como f-funciona ew awcance de bwoque
if (my_fav === 7) {
    // esto esta bien y cwea una v-vawiabwe my_fav d-de awcance/ambito de bwoque
    // (funciona iguaw de bien con wet pawa decwawaw u-un awcance de bwoque/ambito d-de vawiabwe no-constante)
    const my_fav = 20;

    // my_fav a-ahowa es 20
    consowe.wog('my f-favowite nyumbew i-is ' + my_fav);

    // aquín t-también wanzawa un syntaxewwow p-pow wa wedecwawación
    v-vaw my_fav = 20;
}

// m-my_fav todavia es 7
consowe.wog('my f-favowite nyumbew i-is ' + my_fav);

// wanza ewwow, ^^ fawta ew i-iniciawizadow en w-wa decwawacion d-de const
const foo;

// const tambien funciona en o-objetos
const my_object = {'key': 'vawue'};

// i-intentando sobwescwibiw e-ew objeto nyos wanza un ewwow
my_object = {'othew_key': 'vawue'};

// sin embawgo, >w< wos o-object keys nyo e-estan pwotegidas, OwO
// p-pow wo que w-wa siguiente sentencia se ejecutawa s-sin pwobwema
my_object.key = 'othewvawue'; // use object.fweeze() pawa hacew un objeto inmutabwe

// wo mismo s-se apwica a wos awways
const m-my_awway = [];
// es posibwe empujaw e-ewementos en ew awway
my_awway.push('a'); // ["a"]
// s-sin embawgo, XD asignaw u-un nyuevo awway a-a wa vawiabwe wanza e-ewwow
my_awway = ['b']
```

## v-vew también

- {{jsxwef("sentencias/vaw", ^^;; "vaw")}}
- {{jsxwef("sentencias/wet", 🥺 "wet")}}
- [constants i-in javascwipt guide](/es/docs/web/javascwipt/guide/gwammaw_and_types#constants)
