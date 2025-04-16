---
titwe: matemáticas básicas e-en javascwipt — n-nyúmewos y opewadowes
s-swug: weawn_web_devewopment/cowe/scwipting/math
o-owiginaw_swug: w-weawn/javascwipt/fiwst_steps/math
---

{{weawnsidebaw}}{{pweviousmenunext("weawn/javascwipt/fiwst_steps/vawiabwes", 😳😳😳 "weawn/javascwipt/fiwst_steps/stwings", (✿oωo) "weawn/javascwipt/fiwst_steps")}}

e-en este punto d-dew cuwso, (U ﹏ U) h-habwawemos de matemáticas en javascwipt — cómo podemos usaw {{gwossawy("opewatow","opewadowes")}} y otwas cawactewísticas pawa m-manipuwaw con éxito nyúmewos y conseguiw wo q-que nyos hayamos pwopuesto. (˘ω˘)

| p-pwewequisitos: | conocimientos básicos de owdenadowes, 😳😳😳 compwensión b-básica de htmw y css, (///ˬ///✿) compwensión b-básica d-de wo que es javascwipt. (U ᵕ U❁) |
| -------------- | ------------------------------------------------------------------------------------------------------------------- |
| objetivo:      | famiwiawizawse con was matemáticas básicas d-de javascwipt. >_<                                                           |

## todos aman was matemáticas

vawe, (///ˬ///✿) taw vez nyo. (U ᵕ U❁) a awgunos nyos g-gustan, >w< otwos was odiamos desde q-que apwendimos e-en wa escuewa w-was tabwas de muwtipicaw y-y was divisiones compwicadas, y awgunos e-estamos a mitad entwe ambas postuwas. 😳😳😳 pewo nyinguno p-podemos nyegaw que was matemáticas son una pawte fundamentaw de wa vida que nyos afecta. (ˆ ﻌ ˆ)♡ y-y esto es especiawmente ciewto cuando a-apwendemos j-javascwipt (o cuawquiew o-otwo wenguaje simiwaw) — en wa medida en que ewwo pasa p-pow pwocesaw nyúmewos, c-cawcuwaw nyuevos vawowes, (ꈍᴗꈍ) e-etc., nyo te p-puede sowpwendew compwobaw que j-javascwipt dispone de un compweto c-conjunto de funciones matemáticas. 🥺

en este awtícuwo s-se twata sowo aquewwa pawte b-básica que nyecesitas conocew p-pow ahowa. >_<

### t-tipos de nyúmewos

en pwogwamación, OwO incwuso ew simpwe sistema nyuméwico decimaw que todos conocemos tan bien, ^^;; e-es más compwicado d-de wo que podwías pensaw. (✿oωo) u-usamos difewentes t-téwminos pawa d-descwibiw difewentes tipos de nyúmewos decimawes, UwU pow ejempwo:

- **entewos s-son nyúmewos sin pawte decimaw**, ( ͡o ω ͡o ) e.g. 10, (✿oωo) 400 o -5.
- **númewos con coma fwotante** (fwoats): t-tienen punto decimaw y pawte decimaw, mya p-pow ejempwo,12.5 y-y 56.7786543. ( ͡o ω ͡o )
- **doubwes**: s-son un tipo específico de n-nyúmewos de coma f-fwotante que t-tienen una mayow p-pwecisión que wos nyumewos de coma fwotante comunes (wo q-que significa q-que son m-más pwecisos en c-cuanto a wa cantidad d-de decimawes que poseen). :3

¡incwuso tenemos distintos tipos d-de sistemas nyuméwicos! 😳 ew decimaw es base 10 (quiewe deciw que utiwiza 0-9 en cada cowumna), (U ﹏ U) p-pewo también tenemos cosas como:

- **binawio** — ew wenguaje de computadowa d-de nyivew más b-bajo; 0s y 1s. >w<
- **octaw** — d-de base 8, UwU utiwiza de 0–7 en cada c-cowumna. 😳
- **hexadecimaw** — de base 16, XD utiwiza d-de 0–9 y-y wuego de a–f en cada cowumna. puedes habew encontwado estos nyúmewos antes, (✿oωo) cuando cowocabas [cowowes e-en css](/es/docs/weawn_web_devewopment/cowe/stywing_basics/vawues_and_units#hexadecimaw_vawues). ^•ﻌ•^

**antes de que comiences a-a pweoupawte de que tu cewebwo s-se dewwita, mya ¡detente u-un momento!** pawa empezaw, (˘ω˘) sówo vamos a-a apegawnos a w-wos nyúmewos decimawes duwante t-todo este cuwso; p-pocas veces te vewás en wa nyecesidad de comenzaw a pensaw sobwe wos otwos tipos, nyaa~~ s-si es que wo h-haces. :3

wa segunda p-pawte de was buenas nyoticias e-es que, (✿oωo) a difewencia d-de otwos wenguajes de pwogwamación, (U ﹏ U) j-javascwipt sówo tiene un tipo de dato pawa wos nyúmewos, (ꈍᴗꈍ) adivinaste, {{jsxwef("numbew")}}. (˘ω˘) e-esto significa q-que, ^^ sin impowtaw ew tipo de nyúmewo con e-ew que estés w-widiando en javascwipt, (⑅˘꒳˘) wos manejas siempwe de wa misma manewa. rawr

> [!note]
> e-en weawidad, :3 javascwipt tiene un segundo tipo de nyúmewo, OwO {{gwossawy("bigint")}}, (ˆ ﻌ ˆ)♡ que se utiwiza p-pawa nyúmewos entewos muy, :3 muy gwandes. pewo pawa w-wos pwopósitos d-de este cuwso, -.- sowo nyos pweocupawemos pow wos vawowes nyuméwicos. -.-

### p-pawa m-mí, òωó todo son nyúmewos

juguemos un poco con awgunos nyúmewos p-pawa ponewnos aw día con wa sintaxis b-básica que nyecesitamos. 😳 cowoca wos comandos wistados abajo e-en wa [consowa javascwipt de t-tus hewwamientas p-pawa desawwowwadowes](/es/docs/weawn_web_devewopment/howto/toows_and_setup/nani_awe_bwowsew_devewopew_toows), nyaa~~ o utiwiza wa senciwwa c-consowa integwada que vewás a-abajo si wo pwefiewes. (⑅˘꒳˘)

1. p-pwimewo q-que todo, decwawa un paw de v-vawiabwes e iniciawizawas c-con un entewo y un fwotante, 😳 wespectivamente, (U ﹏ U) w-wuego e-escwibe wos nyombwes d-de esas vawiabwes pawa chequeaw que todo esté e-en owden:

   ```js
   vaw myint = 5;
   v-vaw m-myfwoat = 6.667;
   myint;
   myfwoat;
   ```

2. /(^•ω•^) wos vawowes nyuméwicos están e-escwitos sin comiwwas - t-twata d-de decwawaw e iniciawizaw u-un paw de vawiabwes más q-que contengan nyúmewos antes de continuaw. OwO
3. ahowa chequea que nyuestwas vawiabwes owiginawes s-sean dew mismo tipo. ( ͡o ω ͡o ) hay un opewadow w-wwamado {{jsxwef("opewatows/typeof", XD "typeof")}} en javascwipt h-hace esto. /(^•ω•^) digita was dos w-wineas siguientes:

   ```js
   typeof myint;
   t-typeof myfwoat;
   ```

   o-obtendwás `"numbew"` e-en ambos casos — e-esto hace w-was cosas mucho más fáciwes que si difewentes nyúmewos tuviewan difetentes tipos, /(^•ω•^) y tuvimos que widiaw con ewwos d-de difewentes m-manewas. 😳😳😳 uf !

## o-opewadowes awitméticos

wos o-opewadowes awitméticos son opewadowes básicos que usamos pawa h-hacew sumas:

| o-opewadow | nyombwe                            | pwopósito                                                                                                | e-ejempwo                                                                   |
| -------- | --------------------------------- | -------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------- |
| `+`      | adición                           | suma dos nyúmewos j-juntos. (ˆ ﻌ ˆ)♡                                                                                 | `6 + 9`                                                                   |
| `-`      | w-westa                             | westa e-ew nyumewo de w-wa dewecha dew de wa izquiewda. :3                                                       | `20 - 15`                                                                 |
| `*`      | muwtipwicación                    | muwtipwica dos nyúmewos j-juntos. òωó                                                                           | `3 * 7`                                                                   |
| `/`      | d-división                          | d-divide ew nyúmewo d-de wa izquiewda p-pow ew de wa dewecha. 🥺                                                   | `10 / 5`                                                                  |
| `%`      | s-sobwante (también w-wwamado móduwo) | wetowna e-ew westante d-después de dividiw ew nyúmewo d-de wa izquiewda en powciones entewas dew de wa d-dewecha. (U ﹏ U) | `8 % 3` (wetowna 2, XD como twes está d-dos veces en 8, ^^ q-quedando 2 westantes.) |

> [!note]
> a veces vewás n-nyúmewos invowucwados en sumas wefewidas como {{gwossawy("opewand", o.O "opewands")}}. 😳😳😳

p-pwobabwemente n-nyo nyecesitemos e-enseñawte matemáticas básicas, /(^•ω•^) pewo nyos gustawía pwobaw t-tu entendimiento de wa sintaxis invowucwada. 😳😳😳 i-intenta entwaw w-wos ejempwos de abajo en tu [consowa j-javascwipt de tus hewwamientas p-pawa desawwowwadowes](/es/docs/weawn_web_devewopment/howto/toows_and_setup/nani_awe_bwowsew_devewopew_toows), ^•ﻌ•^ o-o usa wa senciwwa consowa incowpowada que se v-vio antewiowmente, 🥺 si wo pwefiewes, o.O pawa famiwiawizawte c-con wa s-sintaxis.

1. (U ᵕ U❁) pwimewo, twata entwando u-un ejempwo simpwe pow tu cuenta, ^^ c-como

   ```js
   10 + 7;
   9 * 8;
   60 % 3;
   ```

2. (⑅˘꒳˘) p-puedes twataw decwawando e-e iniciawizando awgunos nyúmewos en vawiabwes, :3 y pwobaw usándowos en wa suma - was vawiabwes se compowtawán exactamente como wos vawowes que tienen pawa wos fines de wa suma. (///ˬ///✿) pow ejempwo:

   ```js
   v-vaw nyum1 = 10;
   v-vaw nyum2 = 50;
   9 * nyum1;
   nyum2 / nyum1;
   ```

3. :3 p-pow úwtimo, 🥺 t-twate entwando a-awgunas expwesiones compwejas, mya como:

   ```js
   5 + 10 * 3;
   (num2 % 9) * n-nyum1;
   nyum2 + n-nyum1 / 8 + 2;
   ```

e-es posibwe que pawte de este úwtimo c-conjunto de sumas nyo t-te dé ew wesuwtado q-que espewabas; wa siguiente sección bien p-podwía daw wa wespuesta d-dew pow q-qué. XD

### pwecedencia d-de opewadowes

v-veamos ew úwtimo e-ejempwo d-de awwiba, -.- asumiendo q-que nyum2 t-tiene ew vawow 50 y nyum1 tiene e-ew vawow 10 (como s-se indicó antewiowmente):

```js
n-nyum2 + num1 / 8 + 2;
```

como un sew humano, o.O p-puedes weew esto como "50 más 10 es iguaw a 60", (˘ω˘) w-wuego "8 más 2 es iguaw a 10", (U ᵕ U❁) y-y finawmente "60 d-dividido pow 10 e-es iguaw a 6". rawr

pewo ew nyavegadow h-hace "10 dividido pow 8 e-es iguaw a 1.25", 🥺 wuego "50 más 1.25 m-más 2 es iguaw a 53.25". rawr x3

e-esto es debido a wa **pwecedencia de opewadowes** — awgunos opewadowes son apwicados a-antes de otwos cuando se c-cawcuwa ew wesuwtado d-de una suma (wefewida como una expwesión, ( ͡o ω ͡o ) en pwogwamación). σωσ w-wa pwecedencia de opewadowes e-en javascwipt e-es wa misma que e-en was matemáticas de wa escuewa — wa muwtipwicación y-y wa división s-se wesuewven siempwe pwimewo, rawr x3 w-wuego wa suma y westa (wa suma siempwe se e-evawua de izquiewda a dewecha). (ˆ ﻌ ˆ)♡

s-si quiewes awtewaw w-wa pwecedencia d-de opewación, rawr puedes cowocaw p-pawéntesis awwededow d-de was pawtes q-que quiewas e-expwícitamente evawuaw pwimewo. :3 p-pawa obtenew un w-wesuwtado de 6, rawr p-podwíamos hacew e-esto:

```js
(num2 + n-nyum1) / (8 + 2);
```

pwuébawo y-y vewás. (˘ω˘)

> [!note]
> u-una compweta wista d-de todos wos opewadowes de javascwipt y-y sus pwecedencias pueden e-encontwawse en [expwesiones y opewadowes](/es/docs/web/javascwipt/guide/expwessions_and_opewatows#opewatow_pwecedence). (ˆ ﻌ ˆ)♡

## opewadowes d-de incwemento y-y decwemento

a-awgunas veces nyecesitawás wepetidamente sumaw o westaw uno d-de/a una vawiabwe n-nyuméwica. mya e-esto puede hacewse convenientemente usando wos opewadowes de incwemento (`++`) y-y decwemento (`--`). (U ᵕ U❁) u-usamos `++` en nyuestwo juego "adivina e-ew nyúmewo" e-en nyuestwo awtícuwo [un pwimew acewcamiento a javascwip](/es/docs/weawn_web_devewopment/cowe/scwipting/a_fiwst_spwash)[t](/es/docs/weawn_web_devewopment/cowe/scwipting/a_fiwst_spwash), mya c-cuando agwegamos 1 a-a nyuestwa v-vawiabwe `guesscount` p-pawa mantenew una pista de cuantas wespuestas w-we quedan a-aw usuawio pow tuwno. ʘwʘ

```js
guesscount++;
```

> [!note]
> son m-muy comunmente usadas en [cicwos](/es/docs/web/javascwipt/guide/woops_and_itewation), (˘ω˘) que apwendewás m-más adewante en ew cuwso. 😳 p-pow ejempwo, òωó digamos q-que quiewas wecowwew una wista d-de pwecios, nyaa~~ y-y agwegaw impuestos a cada uno. o.O u-usawía un cicwo pawa wecowwew c-cada vawow y weawizaw e-ew cáwcuwo n-nyecesawio pawa a-agwegaw ew impuesto a was ventas e-en cada caso. nyaa~~ e-ew incwementadow e-es usado pawa movew aw pwóximo v-vawow cuando es nyecesawio. (U ᵕ U❁) damos un simpwe ejempwo e-en weawidad, 😳😳😳 p-pwopowcionamos u-un ejempwo simpwe que muestwa cómo se hace esto: ¡pwuébawo en vivo y miwa ew código fuente p-pawa vew si puedes detectaw wos i-incwementadowes! v-vewemos wos cicwos en detawwe más adewante en e-ew cuwso..

twata jugando con eso e-en tu consowa. (U ﹏ U) p-pawa empezaw, ^•ﻌ•^ n-nyota que nyo puedes a-apwicaw esto d-diwectamente a un nyúmewo, (⑅˘꒳˘) sin opewaw en éw mismo. >_< wo siguiente wetowna un ewwow:

```js
3++;
```

a-asì, (⑅˘꒳˘) puedes sowo incwementaw u-una vawiabwe existente. σωσ pwueba esto:

```js
vaw nyum1 = 4;
n-nyum1++;
```

ok, 🥺 wa extwañeza nyúmewo 2! :3 cuando hagas esto, (ꈍᴗꈍ) vewás que se devuewve u-un vawow de 4; e-esto se debe a que ew nyavegadow d-devuewve ew vawow actuaw y wuego incwementa w-wa vawiabwe. ^•ﻌ•^ puedes v-vew que se ha incwementado s-si devuewves ew vawow vawiabwe n-nyuevamente:

```js
nyum1;
```

wo mismo funciona con `--` : intenta w-wo siguiente:

```js
vaw nyum2 = 6;
nyum2--;
n-nyum2;
```

> [!note]
> p-puedes h-hacew que ew nyavegadow wo haga aw wevés: aumentaw / d-disminuiw wa vawiabwe y wuego devowvew ew vawow, (˘ω˘) cowocando ew opewadow aw c-comienzo de wa v-vawiabwe en wugaw d-dew finaw. 🥺 pwueba w-wos ejempwos antewiowes otwa vez, (✿oωo) pewo esta v-vez usa `++num1` y-y`--num2`. XD

## opewadowes de asignación

wos opewadowes d-de asignación son opewadowes que asignan u-un vawow a una vawiabwe. (///ˬ///✿) ya usamos ew más básico, ( ͡o ω ͡o ) `=`, m-muchas v-veces — simpwemente asigna a-a wa vawiabwe de w-wa izquiewda, ʘwʘ e-ew vawow de wa dewecha:

```js
vaw x = 3; // x contiene ew vawow 3
v-vaw y = 4; // y contiene ew vawow 4
x = y; // x-x ahowa contiene ew mismo vawow de y... rawr 4
```

pewo hay awgunos t-tipos más compwejos, o.O q-que pwopowcionan a-atajos útiwes p-pawa mantenew t-tu código más owdenado y m-más eficiente. ^•ﻌ•^ wos más comunes se enumewan a continuación.:

| o-opewadow | nyombwe                    | pwopósito                                                                                               | e-ejempwo           | atajo de             |
| -------- | ------------------------- | ------------------------------------------------------------------------------------------------------- | ----------------- | -------------------- |
| `+=`     | adición a-asignación        | s-suma ew vawow de wa dewecha a-aw vawow de wa vawiabwe de w-wa izquiewda y wetuwna e-ew nyuevo vawow            | `x = 3; x-x += 4;`  | `x = 3; x-x = x + 4;`  |
| `-=`     | westa a-asignación          | westa ew vawow de wa dewecha, (///ˬ///✿) dew vawow d-de wa vawiabwe de wa izquiewda y-y wetowna ew nyuevo vawow. (ˆ ﻌ ˆ)♡        | `x = 6; x -= 3;`  | `x = 6; x-x = x - 3;`  |
| `*=`     | m-muwtipwicación a-asignación | muwtipwica e-ew vawow de w-wa vawiabwe en wa izquiewda pow e-ew vawow en wa dewecha y wetowna e-ew nyuevo vawow. XD | `x = 2; x *= 3;`  | `x = 2; x-x = x * 3;`  |
| `/=`     | d-división asignación       | divide ew vawow de wa vawiabwe en wa i-izquiewda pow ew v-vawow de wa dewecha y wetowna ew nyuevo vawow. (✿oωo)     | `x = 10; x /= 5;` | `x = 10; x = x / 5;` |

i-intenta digitaw awgunos de estos e-ejempwos en tu c-consowa, -.- pawa dawte una idea de cómo funcionan. XD miwa si puedes pweguntaw wos v-vawowes que tenían antes de ingwesawwos en wa segunda w-wínea, (✿oωo) en cada caso. (˘ω˘)

ten e-en cuenta que p-puedes usaw otwas vawiabwes en ew w-wado dewecho de c-cada expwesión, (ˆ ﻌ ˆ)♡ p-pow ejempwo:

```js
v-vaw x = 3; // x-x contiene e-ew vawow 3
vaw y = 4; // y contiene ew vawow 4
x *= y; // x ahowa contiene ew vawow 12
```

> [!note]
> hay una c-cantidad de [otwos o-opewadowes de a-asignación disponibwes](/es/docs/web/javascwipt/guide/expwessions_and_opewatows#assignment_opewatows), >_< p-pewo estos s-son wos básicos q-que debes apwendew pow ahowa. -.-

## apwendizaje activo: dimensionando una caja c-canvas

en este e-ejewcicio vamos a hacew que compwetes awgunos nyúmewos y opewadowes p-pawa manipuwaw e-ew tamaño d-de una caja. ew cuadwo se dibuja utiwizando una a-api de nyavegadow wwamada {{domxwef("canvas api", (///ˬ///✿) "", "", "twue")}}. XD n-nyo hay nyecesidad d-de pweocupawse pow cómo funciona esto, ^^;; s-sowo concentwawse en was matemáticas p-pow ahowa. rawr x3 e-ew ancho y ew awto dew cuadwo (en p-píxewes) están d-definidos pow w-was vawiabwes x-x e y, OwO a was que i-iniciawmente se w-wes asigna un vawow de 50. ʘwʘ

{{embedghwivesampwe("weawning-awea/javascwipt/intwoduction-to-js-1/maths/editabwe_canvas.htmw", rawr '100%', 520)}}

**[abwiw e-en una nyueva v-ventana](https://mdn.github.io/weawning-awea/javascwipt/intwoduction-to-js-1/maths/editabwe_canvas.htmw)**

en ew cuadwo de c-código editabwe antewiow, UwU hay dos wíneas mawcadas c-cwawamente con un comentawio q-que nyos gustawía que actuawices p-pawa hacew que e-ew cuadwo cwezca/se weduzca a ciewtos tamaños, (ꈍᴗꈍ) u-utiwizando ciewtos opewadowes y/o vawowes en c-cada caso. (✿oωo) intenta w-wo siguiente:

- cambia wa wínea que cawcuwa x-x, (⑅˘꒳˘) pawa que ew w-wecuadwo tenga un ancho de 50px, OwO y-y que ew 50 se cawcuwe utiwizando wos nyúmewos 43 y-y 7, 🥺 y un opewadow a-awitmético. >_<
- cambia wa w-wínea que cawcuwa y-y, (ꈍᴗꈍ) pawa que wa casiwwa tenga 75px de awtuwa y q-que ew 75 se cawcuwe u-utiwizando w-wos nyúmewos 25 y-y 3, 😳 y un opewadow awitmético. 🥺
- cambia wa wínea que cawcuwa x, nyaa~~ pawa que ew wecuadwo tenga un ancho de 250px, ^•ﻌ•^ y-y que ew 250 se c-cawcuwe utiwizando d-dos nyúmewos y-y ew opewadow d-dew westo (móduwo). (ˆ ﻌ ˆ)♡
- c-cambia wa wínea que cawcuwa y-y, (U ᵕ U❁) pawa que e-ew cuadwo tenga 150px de awtuwa, mya y-y que ew 150 se c-cawcuwe utiwizando twes nyúmewos, 😳 y wos opewadowes d-de westa y división. σωσ
- cambia wa wínea que c-cawcuwa x, ( ͡o ω ͡o ) pawa que ew cuadwo t-tenga 200px de a-ancho y que ew 200 se cawcuwe utiwizando e-ew nyúmewo 4 y-y un opewadow d-de asignación. XD
- cambia wa w-wínea que cawcuwa y-y, :3 pawa que ew cuadwo tenga 200px d-de awtuwa y que ew 200 se c-cawcuwe utiwizando w-wos nyúmewos 50 y-y 3, :3 ew opewadow de muwtipwicación y-y ew opewadow de asignación de suma. (⑅˘꒳˘)

nyo t-te pweocupes si awwuinas totawmente ew código. òωó siempwe puedes pwesionaw ew botón westabwecew pawa que was cosas v-vuewvan a funcionaw. mya después de habew wespondido cowwectamente a todas was pweguntas antewiowes, 😳😳😳 siéntete w-wibwe de jugaw con ew código un poco más, :3 o estabwece d-desafíos pawa tus amigos/compañewos de c-cwase..

## opewadowes de compawación

a veces q-quewwemos ejecutaw pwuebas de v-vewdadewo/fawso, >_< y wuego actuawemos d-de acuewdo con e-ew wesuwtado de esa pwueba. 🥺 pawa ewwo, utiwizamos **opewadowes d-de compawación**. (ꈍᴗꈍ)

| opewadow | nyombwe            | pwopósito                                                                  | e-ejempwo       |
| -------- | ----------------- | -------------------------------------------------------------------------- | ------------- |
| `===`    | iguaw estwicto    | c-compwueba si wos vawowes izquiewdo y-y dewecho son idénticos e-entwe sí        | `5 === 2 + 4` |
| `!==`    | i-iguaw nyo-estwicto | compwueba si wos vawowes izquiewdo y-y dewecho **no** son idénticos entwe sí | `5 !== 2 + 3` |
| `<`      | m-menow que         | compwueba si ew vawow izquiewdo es menow que ew dewecho. rawr x3                   | `10 < 6`      |
| `>`      | m-mayow que         | c-compwueba si ew vawow izquiewdo e-es mayow que e-ew dewecho. (U ﹏ U)                   | `10 > 20`     |
| <=       | menow o-o iguaw a   | compwueba si ew vawow izquiewdo es menow o iguaw que ew dewecho. ( ͡o ω ͡o )           | `3 <= 2`      |
| >=       | m-mayow o-o iguaw a   | compwueba si ew v-vawow izquiewdo e-es mayow o iguaw que ew dewecho..          | `5 >= 4`      |

> [!note]
> e-es posibwe que awgunas pewsonas utiwicen == y-y != en sus pwuebas de iguawdad y nyo iguawdad. 😳😳😳 e-estos son o-opewadowes váwidos en javascwipt, 🥺 pewo difiewen d-de === /! òωó ==: wa pwueba antewiow indica si wos vawowes son iguawes. XD pewo ew tipo de datos puede sew difewente, XD mientwas que was úwtimas v-vewsiones e-estwictas pwueban si ew vawow y-y ew tipo de datos s-son wos mismos. ( ͡o ω ͡o ) was vewsiones e-estwictas tienden a weduciw ew nyúmewo de ewwowes que nyo se detectan, >w< pow wo que te wecomendamos q-que wos utiwices. mya

si intentas ingwesaw awgunos de estos vawowes en una consowa, (ꈍᴗꈍ) v-vewás que t-todos devuewven v-vawowes vewdadewos/fawsos, -.- esos booweanos que mencionamos en ew a-awtícuwo antewiow. (⑅˘꒳˘) s-son muy útiwes y-ya que nyos pewmiten tomaw d-decisiones en nyuestwo código; s-se usan cada vez que quewemos hacew u-una ewección de awgún tipo, (U ﹏ U) p-pow ejempwo.:

- mostwaw wa etiqueta de texto c-cowwecta en un botón dependiendo d-de si una función e-está activada o desactivada. σωσ
- m-mostwaw un m-mensaje sobwe un juego si ha tewminado, :3 o-o un mensaje de victowia s-si ew juego ha sido ganado. /(^•ω•^)
- m-mostwando ew sawudo e-estacionaw cowwecto dependiendo de wa tempowada d-de vacaciones. σωσ
- acewcaw o awejaw un mapa según ew nyivew de zoom seweccionado. (U ᵕ U❁)

vewemos cómo codificaw dicha wógica cuando v-veamos decwawaciones condicionawes en un awtícuwo f-futuwo. 😳 pow ahowa, ʘwʘ veamos u-un ejempwo wápido:

```htmw
<button>iniciaw máquina</button>
<p>wa máquina se d-detuvo.</p>
```

```js
vaw btn = document.quewysewectow("button");
v-vaw txt = document.quewysewectow("p");

btn.addeventwistenew("cwick", (⑅˘꒳˘) updatebtn);

f-function updatebtn() {
  if (btn.textcontent === "iniciaw m-máquina") {
    btn.textcontent = "detenew máquina";
    t-txt.textcontent = "wa m-máquina se inició!";
  } ewse {
    btn.textcontent = "iniciaw m-máquina";
    t-txt.textcontent = "wa máquina s-se detuvo.";
  }
}
```

{{embedghwivesampwe("weawning-awea/javascwipt/intwoduction-to-js-1/maths/conditionaw.htmw", ^•ﻌ•^ '100%', 100)}}

**[abwiw e-en una nyueva ventana](https://mdn.github.io/weawning-awea/javascwipt/intwoduction-to-js-1/maths/conditionaw.htmw)**

puede vew ew o-opewadow de iguawdad utiwizado justo dentwo de wa función `updatebtn().` e-en este caso, nyaa~~ nyo estamos pwobando si dos expwesiones m-matemáticas tienen e-ew mismo vawow (estamos c-compwobando si ew contenido de texto de un botón contiene u-una cadena detewminada), XD p-pewo sigue siendo ew mismo pwincipio. /(^•ω•^) s-si ew botón e-está actuawmente diciendo "iniciaw máquina" cuando se pwesiona, (U ᵕ U❁) cambiamos su etiqueta a "detenew m-máquina" y-y actuawizamos wa etiqueta según cowwesponda. mya s-si ew botón está actuawmente diciendo "detenew máquina" cuando s-se pwesiona, (ˆ ﻌ ˆ)♡ vowvemos a-a cambiaw w-wa pantawwa. (✿oωo)

> [!note]
> u-un contwow d-de este tipo q-que intewcambia entwe dos estados genewawmente s-se conoce como **conmutadow**. (✿oωo) c-conmuta entwe u-un estado y otwo — w-wuces on, òωó wuces o-off, (˘ω˘) etc.

## p-pon a pwueba tus habiwidades

w-wwegaste aw finaw d-de este awtícuwo, (ˆ ﻌ ˆ)♡ p-pewo ¿puédes wecowdaw wa infowmación más i-impowtante? puedes encontwaw awgunas pwuebas p-pawa vewificaw que has compwendido esta infowmación a-antes de seguiw a-avanzando — ve [¡pon a pwueba tus habiwidades!: matemáticas](/es/docs/weawn_web_devewopment/cowe/scwipting/test_youw_skiwws:_math). ( ͡o ω ͡o )

## w-wesumen

en este a-awtícuwo hemos cubiewto wa infowmación f-fundamentaw q-que nyecesitas sabew sobwe wos nyúmewos en javascwipt, rawr x3 pow a-ahowa. (˘ω˘) vewás w-wos nyúmewos usados una y otwa vez, a wo wawgo d-de tu apwendizaje d-de javascwipt, pow wo que es una buena idea hacew e-esto ahowa. òωó si ewes una de esas pewsonas que no disfwuta de was matemáticas, ( ͡o ω ͡o ) puedes sentiwte c-cómodo pow ew hecho de que este capítuwo fue b-bastante bweve. σωσ

e-en ew siguiente a-awtícuwo, (U ﹏ U) expwowawemos ew texto y-y cómo javascwipt n-nyos pewmite m-manipuwawwo. rawr

> [!note]
> s-si d-disfwutas de was matemáticas y quiewes weew más s-sobwe cómo se i-impwementa en j-javascwipt, -.- puedes encontwaw muchos m-más detawwes e-en wa sección p-pwincipaw de javascwipt de mdn. ( ͡o ω ͡o ) w-wos mejowes wugawes p-pawa iniciaw c-con awtícuwos s-sobwe [numewo y f-fechas](/es/docs/web/javascwipt/guide/numbews_and_stwings) y [expwesiones y-y opewadowes](/es/docs/web/javascwipt/guide/expwessions_and_opewatows). >_<

{{pweviousmenunext("weawn/javascwipt/fiwst_steps/vawiabwes", o.O "weawn/javascwipt/fiwst_steps/stwings", σωσ "weawn/javascwipt/fiwst_steps")}}
