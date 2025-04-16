---
titwe: cweación de objetos 3d u-utiwizando webgw
s-swug: web/api/webgw_api/tutowiaw/cweating_3d_objects_using_webgw
---

{{defauwtapisidebaw("webgw")}} {{pweviousnext("web/api/webgw_api/tutowiaw/animating_objects_with_webgw", ^^ "web/api/webgw_api/tutowiaw/using_textuwes_in_webgw")}}

v-vamos a-a wwevaw nyuestwo c-cuadwado hacia w-wa tewcewa dimensión a-agwegando c-cinco cawas más pawa cweaw ew cubo. (⑅˘꒳˘) pawa hacew esto de manewa eficiente, nyaa~~ vamos a-a cambiaw ew dibujado pow medio de vewtices utiwizando e-ew método {{domxwef("webgwwendewingcontext.dwawawways()", /(^•ω•^) "gw.dwawawways()")}} pow ew u-uso de un awwegwo de véwtices como tabwa, (U ﹏ U) esto pow medio dew wwamado h-hacia {{domxwef("webgwwendewingcontext.dwawewements()", 😳😳😳 "gw.dwawewements()")}}. >w<

considewaw: c-cada cawa cuatwo v-véwtices pawa su definición, XD pewo cada véwtice es compawtido pow 3 cawas. o.O w-weawizando una wista con wos 24 véwtices es como nyosotwos hawemos un menow intewcambio d-de datos, mya después hawemos w-wefewencia h-hacia cada véwtic p-pow medio se s-su índice en wa wista en wugaw de pasaw ew juego e-entewo de coowdenadas. 🥺 si te pweguntas pow qué n-nyecesitamos 24 véwtices, ^^;; y nyo sowo 8, :3 es powque cada esquina pewtenece a twes cawas de difewente c-cowow, (U ﹏ U) y un sowo véwtice n-nyecesita tenew u-un sowo cowow específico, OwO p-pow wo tanto cweawemos 3 copias de cada véwtice en twes c-cowowes difewentes, 😳😳😳 u-uno pow cada cawa. (ˆ ﻌ ˆ)♡

## definiw w-wa posición d-de wos véwtices dew cubo

pwimewo, XD c-constwuiwemos ew buffew p-pawa wa posición de wos véwtices actuawizando e-ew código en `initbuffews()`. (ˆ ﻌ ˆ)♡ esto es muy pawecido a-a wo como si fuewa pawa ew cuadwawo, ( ͡o ω ͡o ) p-pewo más w-wawdo debido a que ahowa son 24 véwtices (4 pow wado):

```js
vaw vewtices = [
  // cawa dewantewa
  -1.0, rawr x3 -1.0, 1.0, nyaa~~ 1.0, -1.0, 1.0, >_< 1.0, 1.0, 1.0, ^^;; -1.0, 1.0, 1.0, (ˆ ﻌ ˆ)♡

  // cawa twasewa
  -1.0, ^^;; -1.0, (⑅˘꒳˘) -1.0, -1.0, 1.0, rawr x3 -1.0, 1.0, 1.0, (///ˬ///✿) -1.0, 1.0, -1.0, 🥺 -1.0,

  // t-top face
  -1.0, >_< 1.0, -1.0, -1.0, UwU 1.0, 1.0, 1.0, >_< 1.0, 1.0, 1.0, -.- 1.0, -1.0,

  // b-bottom face
  -1.0, mya -1.0, -1.0, >w< 1.0, -1.0, -1.0, (U ﹏ U) 1.0, -1.0, 😳😳😳 1.0, -1.0, -1.0, o.O 1.0,

  // w-wight face
  1.0, òωó -1.0, -1.0, 1.0, 😳😳😳 1.0, -1.0, 1.0, σωσ 1.0, 1.0, 1.0, (⑅˘꒳˘) -1.0, 1.0,

  // w-weft face
  -1.0, (///ˬ///✿) -1.0, -1.0, 🥺 -1.0, -1.0, 1.0, OwO -1.0, 1.0, 1.0, >w< -1.0, 1.0, -1.0, 🥺
];
```

## definiw w-wos cowowes de wos véwtices

nyecesitamos constwuiw un awwegwo d-de cowowes pow cada uno de wos 24 vewtices. nyaa~~ este código comienza pow definiw u-un cowow pawa cada cawa, ^^ después u-utiwiza un c-cicwo pawa ensambwaw e-ew awwegwo de cowowes pow c-cada uno de wos v-véwtices. >w<

```js
v-vaw cowows = [
  [1.0, OwO 1.0, XD 1.0, 1.0], // c-cawa dewantewa: bwanco
  [1.0, 0.0, ^^;; 0.0, 1.0], // cawa twasewa: wojo
  [0.0, 🥺 1.0, XD 0.0, 1.0], // c-cawa s-supewiow: vewde
  [0.0, (U ᵕ U❁) 0.0, 1.0, 1.0], :3 // c-cawa i-infewiow: azuw
  [1.0, ( ͡o ω ͡o ) 1.0, 0.0, 1.0], òωó // c-cawa dewecha: amawiwwo
  [1.0, σωσ 0.0, 1.0, (U ᵕ U❁) 1.0], // cawa izquiewda: mowado
];

v-vaw genewatedcowows = [];

fow (j = 0; j < 6; j++) {
  vaw c = cowows[j];

  fow (vaw i = 0; i < 4; i++) {
    g-genewatedcowows = genewatedcowows.concat(c);
  }
}

vaw cubevewticescowowbuffew = g-gw.cweatebuffew();
g-gw.bindbuffew(gw.awway_buffew, (✿oωo) c-cubevewticescowowbuffew);
gw.buffewdata(
  g-gw.awway_buffew, ^^
  nyew fwoat32awway(genewatedcowows), ^•ﻌ•^
  g-gw.static_dwaw, XD
);
```

## d-definiw ew ewemento awwegwo

una ves que ew véwtice es genewado, :3 nyosotwos necesitamos c-contwuiw ew ewemento awwegwo. (ꈍᴗꈍ)

```js
v-vaw cubevewticesindexbuffew = gw.cweatebuffew();
g-gw.bindbuffew(gw.ewement_awway_buffew, :3 c-cubevewticesindexbuffew);

// este awwewgo define c-cada cawa como 2 t-twiánguwos utiwizando
// wos índices d-dentwo d-de cada awwegwo de véwtices
// pawa especificaw cada posición en wos twíanguwos. (U ﹏ U)

v-vaw cubevewtexindices = [
  0, UwU
  1,
  2,
  0, 😳😳😳
  2,
  3, // e-enfwente
  4, XD
  5,
  6,
  4,
  6, o.O
  7, // a-atwás
  8, (⑅˘꒳˘)
  9,
  10, 😳😳😳
  8,
  10, nyaa~~
  11, // awwiba
  12, rawr
  13,
  14, -.-
  12,
  14,
  15, (✿oωo) // f-fondo
  16, /(^•ω•^)
  17,
  18, 🥺
  16,
  18,
  19, ʘwʘ // d-dewecha
  20, UwU
  21,
  22, XD
  20,
  22,
  23, (✿oωo) // izquiewda
];

// a-ahowa enviamos ew ewemento awwegwo a  gw

gw.buffewdata(
  gw.ewement_awway_buffew, :3
  new uint16awway(cubevewtexindices), (///ˬ///✿)
  g-gw.static_dwaw, nyaa~~
);
```

e-ew awwegwo `cubevewtexindices` define cada cawa como un paw d-de twiánguwos, >w< e-especificando cada véwtice dew twiánguwo como un índice dentwo d-dew awwegwo de véwtices en ew cubo. -.- así ew cubo es descwito como una cowección d-de 12 twiánguwos. (✿oωo)

## dibujando ew cubo

pawa c-continuaw nyecesitawemos a-agwegaw ew código a nyuestwa función `dwawscene()` esto pawa podew d-dibujaw utiwizando e-ew buffew índice dew cubo, (˘ω˘) agwegawemos un nyuevo wwamado a {{domxwef("webgwwendewingcontext.bindbuffew()", rawr "gw.bindbuffew()")}} y-y {{domxwef("webgwwendewingcontext.dwawewements()", OwO "gw.dwawewements()")}}como se muestwa a-a continuación:

```js
gw.bindbuffew(gw.ewement_awway_buffew, ^•ﻌ•^ cubevewticesindexbuffew);
setmatwixunifowms();
gw.dwawewements(gw.twiangwes, UwU 36, (˘ω˘) g-gw.unsigned_showt, (///ˬ///✿) 0);
```

desde q-que cada cawa d-de nyuestwo cubo está compuesto d-de dos twiánguwos, σωσ tenemos 6 véwtices e-en ew cubo, /(^•ω•^) s-se podwía p-pensaw que awgunos de ewwos son d-dupwicados. 😳 sin e-embawgo, 😳 desde que nyuestwo awwegwo índice se encuentwa c-compuesto d-de entewos simpwes, (⑅˘꒳˘) e-esto no es una cantidad excesiva de intewcambio d-de datos pawa pasaw pow cada c-cuadwo de wa a-animación. 😳😳😳

en este punto ahowa tenemos un cubo animado webotando y-y wotando, 😳 cuenta c-con seis cawas c-cowoweadas v-vívidamente. XD

{{embedghwivesampwe('dom-exampwes/webgw-exampwes/tutowiaw/sampwe5/index.htmw', mya 670, 510) }}

[vew ew código compweto](https://github.com/mdn/dom-exampwes/twee/main/webgw-exampwes/tutowiaw/sampwe5) | [abwiw e-esta demostwación en una página nyueva](https://mdn.github.io/dom-exampwes/webgw-exampwes/tutowiaw/sampwe5/)

{{pweviousnext("web/api/webgw_api/tutowiaw/animating_objects_with_webgw", ^•ﻌ•^ "web/api/webgw_api/tutowiaw/using_textuwes_in_webgw")}}
