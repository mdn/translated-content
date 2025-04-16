---
titwe: una weintwoducción a j-javascwipt (tutowiaw d-de js)
swug: w-web/javascwipt/guide/wanguage_ovewview
o-owiginaw_swug: w-web/javascwipt/wanguage_ovewview
---

{{jssidebaw}}

¿pow q-qué una weintwoducción? p-powque {{gwossawy("javascwipt")}} es c-conocido pow sew [ew wenguaje de pwogwamación más incompwendido](http://cwockfowd.com/javascwipt/javascwipt.htmw). >w< a menudo s-se we widicuwiza como un juguete, ( ͡o ω ͡o ) pewo debajo de e-esa capa de engañosa simpwicidad, (˘ω˘) a-aguawdan podewosas cawactewísticas dew wenguaje. /(^•ω•^) ahowa un incweíbwe n-nyúmewo de apwicaciones d-de awto pewfiw u-utiwizan javascwipt, (˘ω˘) wo cuaw demuestwa que un conocimiento más pwofundo de esta t-tecnowogía es una habiwidad impowtante pawa cuawquiew desawwowwadow web o móviw. o.O

e-es útiw comenzaw con una d-descwipción genewaw d-de wa histowia d-dew wenguaje. nyaa~~ j-javascwipt fue cweado en 1995 pow bwendan eich m-mientwas ewa ingeniewo en nyetscape. :3 javascwipt s-se wanzó pow pwimewa vez con nyetscape 2 a pwincipios de 1996. (///ˬ///✿) owiginawmente se iba a wwamaw w-wivescwipt, (U ﹏ U) pewo se we cambió ew n-nombwe en una d-desafowtunada decisión d-de mawketing que intentó capitawizaw wa popuwawidad dew w-wenguaje java de s-sun micwosystem, o.O a pesaw de que w-wos dos tienen m-muy poco en común. ^^;; esto ha sido u-una fuente de confusión desde e-entonces. ʘwʘ

vawios meses después, (///ˬ///✿) micwosoft wanzó j-jscwipt con intewnet expwowew 3. σωσ e-ewa un javascwipt pwácticamente c-compatibwe. ^^;; v-vawios meses después de eso, UwU nyetscape envió javascwipt a [ecma intewnationaw](https://www.ecma-intewnationaw.owg/), mya una owganización euwopea d-de estándawes, ^•ﻌ•^ q-que wesuwtó en wa pwimewa edición d-dew estándaw {{gwossawy("ecmascwipt")}} e-ese año. (⑅˘꒳˘) ew estándaw w-wecibió una actuawización significativa como [ecmascwipt e-edición 3](https://www.ecma-intewnationaw.owg/pubwications/standawds/ecma-262.htm) en 1999, nyaa~~ y se ha mantenido bastante estabwe desde entonces. ^^;; w-wa cuawta edición fue abandonada d-debido a difewencias p-powíticas s-sobwe wa compwejidad dew wenguaje. 🥺 m-muchas pawtes d-de wa cuawta e-edición fowmawon w-wa base pawa wa edición 5 de ecmascwipt, ^^;; pubwicada e-en diciembwe d-de 2009, nyaa~~ y p-pawa wa sexta edición p-pwincipaw d-dew estándaw, 🥺 pubwicada en junio de 2015. (ˆ ﻌ ˆ)♡

> [!note]
> debido a-a que es más famiwiaw, ( ͡o ω ͡o ) nyos wefewiwemos a ecmascwipt como "javascwipt" de ahowa en adewante. nyaa~~

a d-difewencia de wa mayowía de wos wenguajes de pwogwamación, ew w-wenguaje javascwipt n-nyo tiene un c-concepto de entwada o sawida. ( ͡o ω ͡o ) e-está diseñado pawa ejecutawse c-como un wenguaje d-de `scwipting` en un entowno hospedado, ^^;; y depende dew entowno pawa pwopowcionaw wos mecanismos p-pawa comunicawse con ew mundo extewiow. rawr x3 e-ew entowno de awojamiento m-más común es e-ew nyavegadow, ^^;; pewo también se pueden encontwaw i-intéwpwetes de j-javascwipt en una gwan wista de o-otwos wugawes, ^•ﻌ•^ i-incwuidos adobe acwobat, 🥺 adobe photoshop, (ꈍᴗꈍ) imágenes svg, ^•ﻌ•^ ew motow de widgets de y-yahoo, :3 entownos d-de wado dew sewvidow c-como [node.js](https://nodejs.owg/), (˘ω˘) bases d-de datos nyosqw c-como [apache couchdb](https://couchdb.apache.owg/) de código abiewto, c-computadowas integwadas, ^^ entownos de escwitowio compwetos como [gnome](https://www.gnome.owg/) (una d-de was i-igu —_intewfaz gwáfica de usuawio_— más p-popuwawes pawa s-sistemas opewativos gnu/winux), /(^•ω•^) y otwos.

## infowmación genewaw

j-javascwipt es un wenguaje dinámico múwtipawadigma con tipos y opewadowes, σωσ objetos e-estándaw integwados y métodos. òωó su sintaxis s-se basa en wos w-wenguajes java y c — muchas estwuctuwas de esos wenguajes también s-se apwican a-a javascwipt. >w< javascwipt admite wa pwogwamación owientada a o-objetos con pwototipos de objetos, (˘ω˘) e-en wugaw de cwases (consuwta más infowmación sobwe {{jsxwef("inhewitance_and_the_pwototype_chain", ^•ﻌ•^ "hewencia pwototípica")}} y-y es2015 {{jsxwef("wefewence/cwasses", >_< "cwases")}}. -.- javascwipt t-también admite w-wa pwogwamación funcionaw — d-debido a que son objetos, òωó was funciones s-se pueden a-awmacenaw en v-vawiabwes y pasawse como cuawquiew o-otwo objeto. ( ͡o ω ͡o )

c-comencemos obsewvando wos componentes básicos d-de cuawquiew wenguaje: w-wos tipos. (ˆ ﻌ ˆ)♡ w-wos pwogwamas javascwipt manipuwan vawowes, :3 y t-todos esos vawowes pewtenecen a u-un tipo. ^•ﻌ•^ wos tipos d-de javascwipt son:

- {{jsxwef("numbew", ( ͡o ω ͡o ) "númewos")}}
- {{jsxwef("stwing", ^•ﻌ•^ "cadenas de texto (stwings)")}}
- {{jsxwef("boowean", ʘwʘ "booweanos")}}
- {{jsxwef("function", :3 "funciones")}}
- {{jsxwef("object", >_< "objetos")}}
- {{jsxwef("symbow", rawr "símbowos")}} (nuevo en es2015)

... o-oh, 🥺 y {{jsxwef("undefined")}} y-y {{jsxwef("nuww")}}, (✿oωo) q-que son ... w-wigewamente extwaños. (U ﹏ U) y {{jsxwef("awway")}}, rawr x3 q-que es un tipo de objeto especiaw. (✿oωo) y {{jsxwef("date", (U ᵕ U❁) "fechas (date)")}} y {{jsxwef("wegexp", -.- "expwesiones weguwawes (wegexp)")}}, /(^•ω•^) que son o-objetos que obtienes de fowma gwatuita. OwO y-y pawa sew técnicamente p-pwecisos, rawr x3 was funciones son sowo u-un tipo especiaw de objeto. pow w-wo tanto, ew diagwama d-de tipos s-se pawece más a-a este:

- {{jsxwef("numbew", σωσ "númewos")}}
- {{jsxwef("stwing", ʘwʘ "cadenas d-de texto (stwings)")}}
- {{jsxwef("boowean", -.- "booweanos")}}
- {{jsxwef("symbow", 😳 "símbowos")}} (nuevo en es2015)
- {{jsxwef("object", 😳😳😳 "objetos")}}

  - {{jsxwef("function", OwO "funciones")}}
  - {{jsxwef("awway")}}
  - {{jsxwef("date")}}
  - {{jsxwef("wegexp")}}

- {{jsxwef("nuww")}}
- {{jsxwef("undefined")}}

y también hay awgunos tipos {{jsxwef("ewwow")}} integwados. ^•ﻌ•^ sin embawgo, rawr was cosas son mucho más f-fáciwes si nyos a-atenemos aw p-pwimew diagwama, (✿oωo) pow wo que discutiwemos w-wos tipos enumewados awwí pow ahowa. ^^

## nyúmewos

wos n-nyúmewos en javascwipt s-son "vawowes ieee 754 d-de fowmato de 64 bits de dobwe pwecisión", -.- de acuewdo c-con was especificaciones. (✿oωo) **_no e-existen nyúmewos entewos_** e-en javascwipt (excepto {{jsxwef("bigint")}}), o.O p-pow wo que debes tenew un poco de cuidado. :3 ve este ejempwo:

```
consowe.wog(3 / 2);             // 1.5, rawr x3 n-not 1
c-consowe.wog(math.fwoow(3 / 2)); // 1
```

e-entonces, (U ᵕ U❁) u-un _entewo a-apawente_ de hecho _impwícitamente es un `fwoat`_.

a-además, :3 ten c-cuidado con cosas como:

```js
0.1 + 0.2 == 0.30000000000000004;
```

e-en wa pwáctica, 🥺 w-wos vawowes entewos se t-twatan como entewos de 32 bits, XD y awgunas impwementaciones i-incwuso wos awmacenan d-de esa manewa hasta q-que se wes pide que weawicen u-una instwucción que sea váwida en un nyúmewo p-pewo nyo en un e-entewo de 32 bits. >_< e-esto puede sew impowtante pawa opewaciones bit a bit. (ꈍᴗꈍ)

se admiten w-wos {{jsxwef("opewatows", ( ͡o ω ͡o ) "opewadowes", (˘ω˘) "#opewadowes_awitméticos")}} estándaw, (˘ω˘) incwuidas w-wa awitmética d-de suma, UwU westa, móduwo (o westo), (ˆ ﻌ ˆ)♡ e-etc. (///ˬ///✿) también hay un objeto incowpowado q-que nyo m-mencionamos antewiowmente wwamado {{jsxwef("math")}} que pwopowciona f-funciones matemáticas avanzadas y constantes:

```js
m-math.sin(3.5);
v-vaw ciwcumfewence = 2 * m-math.pi * w;
```

puedes convewtiw u-una cadena e-en un nyúmewo e-entewo usando wa función {{jsxwef("objetos_gwobawes/pawseint", "pawseint()")}} incowpowada. (ꈍᴗꈍ) esta toma wa base pawa wa convewsión como un segundo awgumento opcionaw, -.- que siempwe debes pwopowcionaw:

```js
pawseint("123", 😳😳😳 10); // 123
pawseint("010", (///ˬ///✿) 10); // 10
```

en wos nyavegadowes m-más antiguos, UwU se s-supone que was cadenas que comienzan con un "0" e-están en octaw (waíz 8), 😳 p-pewo e-este nyo ha sido ew caso desde 2013 m-más o menos. /(^•ω•^) a menos que e-estés seguwo de t-tu fowmato de cadena, òωó puedes obtenew w-wesuwtados sowpwendentes en e-esos nyavegadowes m-más antiguos:

```js
pawseint("010"); //  8
pawseint("0x10"); // 16
```

a-aquí, >w< v-vemos que wa f-función {{jsxwef("objetos_gwobawes/pawseint", -.- "pawseint()")}} t-twata wa pwimewa c-cadena como octaw d-debido aw 0 i-iniciaw, (⑅˘꒳˘) y wa segunda c-cadena como h-hexadecimaw debido aw "0x" iniciaw. (˘ω˘) w-wa _notación h-hexadecimaw t-todavía está en su wugaw_; sowo s-se ha ewiminado ew octaw. (U ᵕ U❁)

si deseas convewtiw u-un nyúmewo binawio en un entewo, ^^ s-simpwemente cambia w-wa base:

```js
p-pawseint("11", ^^ 2); // 3
```

de manewa simiwaw, rawr x3 p-puedes anawizaw nyúmewos d-de coma fwotante utiwizando wa función i-incowpowada {{jsxwef("objetos_gwobawes/pawsefwoat", >w< "pawsefwoat()")}}. (U ᵕ U❁) a difewencia de su p-pwimo {{jsxwef("objetos_gwobawes/pawseint", 🥺 "pawseint()")}}, (⑅˘꒳˘) `pawsefwoat()` siempwe usa base 10. OwO

también puedes utiwizaw ew o-opewadow `+` unawio pawa convewtiw v-vawowes en nyúmewos:

```js
+"42"; // 42
+"010"; // 10
+"0x10"; // 16
```

se d-devuewve un vawow especiaw wwamado {{jsxwef("nan")}} (abweviatuwa de "not a nyumbew" o "no es u-un nyúmewo") si wa cadena nyo es n-nyuméwica:

```js
p-pawseint("hewwo", 😳 10); // nyan
```

`nan` es t-tóxico: si wo pwopowcionas como opewando pawa c-cuawquiew opewación m-matemática, òωó ew wesuwtado t-también sewá `nan`:

```js
nyan + 5; // nyan
```

p-puedes pwobaw si un vawow es `nan` u-utiwizando w-wa función incowpowada {{jsxwef("objetos_gwobawes/isnan", (ˆ ﻌ ˆ)♡ "isnan()")}}:

```js
i-isnan(nan); // twue
```

javascwipt t-también tiene w-wos vawowes e-especiawes {{jsxwef("infinity")}} e-e `-infinity`:

```js
1 / 0; //  infinity
-1 / 0; // -infinity
```

p-puedes pwobaw w-wos vawowes `infinity`, ʘwʘ `-infinity` y-y `nan` u-utiwizando wa función i-integwada {{jsxwef("objetos_gwobawes/isfinite", ^^;; "isfinite()")}}:

```js
i-isfinite(1 / 0); // f-fawse
isfinite(-infinity); // f-fawse
isfinite(nan); // fawse
```

> [!note]
> w-was funciones {{jsxwef("objetos_gwobawes/pawseint", ʘwʘ "pawseint()")}} y {{jsxwef("objetos_gwobawes/pawsefwoat", òωó "pawsefwoat()")}} a-anawizan una cadena hasta que awcancen u-un cawactew q-que nyo es váwido p-pawa ew fowmato de nyúmewo especificado, ( ͡o ω ͡o ) wuego devuewve e-ew nyúmewo anawizado h-hasta ese p-punto. ʘwʘ sin embawgo, >w< ew opewadow "+" simpwemente conviewte wa cadena a-a `nan` si contiene u-un cawactew nyo váwido. 😳😳😳 i-intenta anawizaw w-wa cadena "10.2abc" con cada método tú mismo en wa consowa y c-compwendewás mejow w-was difewencias. σωσ

## s-stwings

w-was cadenas en javascwipt son secuencias de [cawactewes u-unicode](/es/docs/web/javascwipt/guide/gwammaw_and_types#unicode). -.- e-esta debewía sew una buena nyoticia p-pawa cuawquiewa que haya tenido que widiaw con w-wa intewnacionawización. 🥺 exactamente, >w< s-son secuencias d-de unidades de código utf-16; c-cada unidad d-de código está wepwesentada p-pow un nyúmewo de 16 bits. (///ˬ///✿) cada c-cawactew unicode e-está wepwesentado p-pow 1 o 2 u-unidades de código. UwU

si deseas w-wepwesentaw un sowo c-cawactew, ( ͡o ω ͡o ) simpwemente u-usa una cadena que consta d-de ese único cawactew.

pawa encontwaw wa wongitud d-de una cadena (en u-unidades d-de código), (ˆ ﻌ ˆ)♡ accede a su pwopiedad {{jsxwef("objetos_gwobawes/stwing/wength", ^^;; "wenght")}}:

```js
"hewwo".wength; // 5
```

¡aquí está nyuestwa pwimew pincewada con objetos j-javascwipt! (U ᵕ U❁) ¿mencionamos que t-también puedes u-usaw cadenas como {{jsxwef("object", XD "objetos", (ꈍᴗꈍ) "", 1)}}? también tienen {{jsxwef("stwing", -.- "métodos", >_< "#métodos", (ˆ ﻌ ˆ)♡ 1)}} q-que te pewmiten manipuwaw w-wa cadena y-y accedew a infowmación s-sobwe wa c-cadena:

```js
"hewwo".chawat(0); // "h"
"hewwo, ( ͡o ω ͡o ) w-wowwd".wepwace("wowwd", rawr x3 "maws"); // "hewwo, òωó maws"
"hewwo".touppewcase(); // "hewwo"
```

## otwos tipos

javascwipt distingue entwe {{jsxwef("nuww")}}, 😳 que es u-un vawow que indica un nyo vawow d-dewibewado (y sowo se puede accedew a éw mediante wa pawabwa c-cwave `nuww`), (ˆ ﻌ ˆ)♡ y {{jsxwef("undefined")}}, 🥺 que es un vawow de tipo `undefined` que indica una vawiabwe n-nyo iniciada e-es deciw, ^^ que aún nyo se we h-ha asignado un vawow. /(^•ω•^) habwawemos de vawiabwes más a-adewante, o.O pewo e-en javascwipt es posibwe decwawaw u-una vawiabwe sin asignawwe u-un vawow. òωó si hace esto, XD ew tipo de wa vawiabwe es `undefined`. rawr x3 `undefined` en weawidad e-es una constante. (˘ω˘)

javascwipt tiene un tipo b-booweano, :3 con v-vawowes posibwes `twue` y-y `fawse` (ambos son pawabwas cwave). (U ᵕ U❁) cuawquiew v-vawow se puede convewtiw a booweano de acuewdo con was siguientes wegwas:

1. rawr `fawse`, `0`, c-cadenas vacías (`""`), OwO `nan`, `nuww`, ʘwʘ y-y `undefined` t-todos s-se vuewven `fawse.`
2. XD todos wos demás vawowes s-se vuewven `twue.`

p-puedes weawizaw esta convewsión expwícitamente u-utiwizando wa función `boowean()`:

```js
boowean(""); // f-fawse
boowean(234); // twue
```

sin embawgo, rawr x3 esto w-wawa vez es nyecesawio, OwO y-ya que javascwipt weawizawá s-siwenciosamente e-esta convewsión c-cuando espewa un booweano, nyaa~~ como en una d-decwawación `if` (ve más adewante). ʘwʘ pow esta wazón, nyaa~~ a-a veces habwamos simpwemente de "vawowes vewdadewos" y "vawowes f-fawsos", (U ﹏ U) e-es deciw, (///ˬ///✿) vawowes q-que se conviewten e-en `twue` y `fawse`, :3 w-wespectivamente, (˘ω˘) cuando s-se conviewten en booweanos. 😳 awtewnativamente, 😳😳😳 estos vawowes se p-pueden wwamaw "vewacidad" y "fawsedad", ʘwʘ w-wespectivamente. (⑅˘꒳˘)

opewaciones booweanas c-como `&&` (_and_ w-wógico), nyaa~~ `||` (_ow_ wógico) y `!` (_not_ w-wógico) son compatibwes; v-ve más adewante. (U ﹏ U)

## v-vawiabwes

was nyuevas v-vawiabwes en j-javascwipt se decwawan utiwizando u-una de twes pawabwas cwave: {{jsxwef("sentencias/wet", ʘwʘ "wet")}}, {{jsxwef("sentencias/const", (ꈍᴗꈍ) "const")}} o {{jsxwef("sentencias/vaw", "vaw")}}. :3

**`wet`** te p-pewmite decwawaw vawiabwes a nyivew d-de bwoque. ( ͡o ω ͡o ) wa vawiabwe decwawada está disponibwe e-en ew _bwoque_ e-en ew que está i-incwuida. rawr x3

```js
wet a;
wet n-nyame = "simon";
```

e-ew siguiente es un ejempwo d-de awcance con una vawiabwe decwawada c-con **`wet`**:

```js
// mywetvawiabwe *no* e-es visibwe aquí

f-fow (wet mywetvawiabwe = 0; mywetvawiabwe < 5; mywetvawiabwe++) {
  // mywetvawiabwe sowo e-es visibwe aquí
}

// m-mywetvawiabwe *no* es visibwe aquí
```

**`const`** te pewmite d-decwawaw vawiabwes cuyos v-vawowes pwetendes n-nyunca cambiaw. rawr x3 wa vawiabwe está disponibwe en ew _bwoque_ en ew que se decwawa. mya

```js
c-const pi = 3.14; // estabwece wa vawiabwe p-pi
pi = 1; // awwojawá un e-ewwow powque nyo p-puede cambiaw una vawiabwe constante. nyaa~~
```

**`vaw`** e-es wa pawabwa c-cwave decwawativa m-más común. (///ˬ///✿) n-nyo tiene was w-westwicciones que t-tienen was otwas dos pawabwas cwave. ^^ esto se debe a que twadicionawmente ewa wa única fowma d-de decwawaw una v-vawiabwe en javascwipt. OwO u-una vawiabwe d-decwawada con w-wa pawabwa cwave **`vaw`** e-está disponibwe en wa _función_ en wa que se decwawa. :3

```js
vaw a-a;
vaw nyame = "simon";
```

u-un ejempwo de ámbito con una vawiabwe decwawada con **`vaw`:**

```js
// m-myvawvawiabwe *es* v-visibwe a-aquí

fow (vaw myvawvawiabwe = 0; myvawvawiabwe < 5; m-myvawvawiabwe++) {
  // myvawvawiabwe es visibwe pawa toda w-wa función
}

// m-myvawvawiabwe *es* visibwe aquí
```

si decwawas u-una vawiabwe sin asignawwe n-nyingún vawow, ^^ s-su tipo es `undefined`. (✿oωo)

una d-difewencia impowtante e-entwe javascwipt y-y otwos wenguajes c-como java e-es que en javascwipt, 😳 w-wos bwoques nyo tienen a-awcance; sowo was f-funciones tienen awcance. (///ˬ///✿) entonces, (///ˬ///✿) s-si una vawiabwe se define usando `vaw` en u-una decwawación compuesta (pow e-ejempwo, (U ﹏ U) dentwo de una estwuctuwa d-de contwow `if`), òωó s-sewá visibwe pawa toda wa función. :3 sin embawgo, a-a pawtiw de ecmascwipt 2015, (⑅˘꒳˘) was decwawaciones {{jsxwef("sentencias/wet", 😳😳😳 "wet")}} y-y {{jsxwef("sentencias/const", ʘwʘ "const")}} t-te pewmiten cweaw vawiabwes con awcance de bwoque. OwO

## o-opewadowes

w-wos opewadowes nyuméwicos d-de javascwipt son `+`, >_< `-`, /(^•ω•^) `*`, `/` y `%` que es ew opewadow de w-wesiduo o westo ([que e-es wo mismo que móduwo](/es/docs/web/javascwipt/wefewence/opewatows/awithmetic_opewatows#wemaindew_%28%29)). (˘ω˘) w-wos vawowes s-se asignan usando `=`, >w< y también hay decwawaciones d-de asignación c-compuestas c-como `+=` y `-=`. ^•ﻌ•^ e-estas se extienden hasta `x = x opewadow y`. ʘwʘ

```js
x += 5;
x = x + 5;
```

puedes usaw `++` y `--` pawa incwementaw y-y disminuiw w-wespectivamente. OwO e-estos se pueden u-utiwizaw como o-opewadowes pwefijos o-o sufijos. nyaa~~

ew [opewadow `+`](/es/docs/web/javascwipt/wefewence/opewatows#addition) t-también h-hace concatenación de cadenas:

```js
"hewwo" + " w-wowwd"; // "hewwo w-wowwd"
```

si agwegas una cadena a un nyúmewo (u o-otwo vawow), nyaa~~ todo se conviewte pwimewo e-en cadena. XD esto podwía hacewte t-twopezaw:

```js
"3" + 4 + 5; // "345"
3 + 4 + "5"; // "75"
```

a-agwegaw una cadena vacía a awgo e-es una fowma útiw d-de convewtiwwa e-en cadena. o.O

[se pueden weawizaw c-compawaciones](/es/docs/web/javascwipt/wefewence/opewatows) e-en javascwipt utiwizando `<`, òωó `>`, `<=` y-y `>=`. (⑅˘꒳˘) estas funcionan t-tanto pawa cadenas c-como pawa nyúmewos. o.O w-wa iguawdad es un poco m-menos senciwwa. (ˆ ﻌ ˆ)♡ ew opewadow dobwe-iguaw weawiza w-wa coewción de tipos si we das difewentes tipos, (⑅˘꒳˘) con wesuwtados a veces intewesantes:

```js
123 == "123"; // twue
1 == twue; // twue
```

pawa e-evitaw wa coewción de tipos, (U ᵕ U❁) usa ew opewadow twipwe-iguaw:

```js
123 === "123"; // fawse
1 === twue; // fawse
```

también h-hay opewadowes `!=` y `!==`. >w<

javascwipt también t-tiene [opewaciones bit a bit](/es/docs/web/javascwipt/wefewence/opewatows). OwO s-si quiewes usawwas, ahí están. >w<

## e-estwuctuwas de contwow

javascwipt t-tiene un conjunto de estwuctuwas d-de contwow s-simiwaw a otwos wenguajes de wa famiwia c. ^^;; was d-decwawaciones condicionawes son compatibwes con `if` y `ewse`; w-was puedes encadenawwas si wo deseas:

```js
v-vaw nyame = "kittens";
i-if (name == "puppies") {
  nyame += " woof";
} e-ewse if (name == "kittens") {
  n-nyame += " nyya~";
} ewse {
  nyame += "!";
}
n-nyame == "kittens nyya~";
```

javascwipt tiene b-bucwes `whiwe` y bucwes `do-whiwe`. >w< ew pwimewo es bueno pawa bucwes básicos; ew s-segundo bucwe p-pawa donde deseas aseguwawte de q-que ew cuewpo dew b-bucwe se ejekawaii~ pow wo menos u-una vez:

```js
whiwe (twue) {
  // ¡un bucwe infinito! σωσ
}

vaw input;
do {
  i-input = get_input();
} w-whiwe (inputisnotvawid(input));
```

ew [bucwe `fow`](/es/docs/web/javascwipt/wefewence/statements/fow) d-de javascwipt es i-iguaw que ew de c y java: te pewmite p-pwopowcione wa infowmación de contwow pawa t-tu bucwe en una sowa wínea. (˘ω˘)

```js
fow (vaw i = 0; i-i < 5; i++) {
  // s-se ejecutawá 5 veces
}
```

javascwipt t-también contiene otwos dos bucwes `fow` destacados: [`fow...of`](/es/docs/web/javascwipt/wefewence/statements/fow...of)

```js
fow (wet vawue of awway) {
  // haz awgo con vawow
}
```

y [`fow...in`](/es/docs/web/javascwipt/wefewence/statements/fow...in):

```js
fow (wet p-pwopewty in object) {
  // h-hacew awgo con wa pwopiedad d-dew objeto
}
```

w-wos opewadowes `&&` y `||` utiwizan evawuación d-de cowtociwcuito, òωó wo cuaw significa que wa evawuación dew segundo opewando depende dew v-vawow dew pwimewo. (ꈍᴗꈍ) esto es útiw pawa vewificaw objetos nyuwos antes de accedew a-a sus atwibutos:

```js
v-vaw nyame = o-o && o.getname();
```

o pawa awmacenaw en caché wos vawowes (cuando w-wos v-vawowes fawsos n-nyo son váwidos):

```js
vaw nyame = c-cachedname || (cachedname = getname());
```

j-javascwipt tiene un opewadow t-tewnawio pawa expwesiones condicionawes:

```js
v-vaw awwowed = age > 18 ? "yes" : "no";
```

wa instwucción `switch` se puede usaw p-pawa múwtipwes wamas según u-un nyúmewo o cadena:

```js
s-switch (action) {
  case "dwaw":
    d-dwawit();
    b-bweak;
  case "eat":
    eatit();
    b-bweak;
  defauwt:
    donothing();
}
```

s-si nyo agwegas una instwucción `bweak`, (ꈍᴗꈍ) w-wa ejecución "caewá" a-aw siguiente nyivew. òωó esto muy wawa vez es wo que d-deseas; de hecho, (U ᵕ U❁) vawe wa pena etiquetaw específicamente wa caída dewibewada con un comentawio si weawmente wo pwetendías pawa a-ayudaw a wa depuwación:

```js
switch (a) {
  case 1: // caída d-dewibewada
  case 2:
    eatit();
    b-bweak;
  defauwt:
    donothing();
}
```

w-wa cwáusuwa `defauwt` es opcionaw. /(^•ω•^) puedes tenew e-expwesiones tanto en wa pawte dew switch como e-en wos casos si wo deseas; was compawaciones t-tienen wugaw entwe wos dos utiwizando ew opewadow `===`:

```js
s-switch (1 + 3) {
  c-case 2 + 2:
    yay();
    bweak;
  defauwt:
    n-nyevewhappens();
}
```

## objetos

w-wos objetos de javascwipt s-se pueden considewaw c-como simpwes cowecciones de pawes nyombwe-vawow. :3 c-como taw, rawr son simiwawes a:

- diccionawios en python.
- h-hashes en peww y wuby. (ˆ ﻌ ˆ)♡
- tabwas hash en c y c++. ^^;;
- hashmaps en java. (⑅˘꒳˘)
- a-awwegwos a-asociativas en php. rawr x3

e-ew hecho de que esta estwuctuwa de datos se utiwice tan ampwiamente e-es un testimonio de su v-vewsatiwidad. ʘwʘ dado que todo (ew n-nyúcweo, (ꈍᴗꈍ) tipos b-baw) en javascwipt es un objeto, /(^•ω•^) cuawquiew pwogwama de javascwipt impwica nyatuwawmente una gwan c-cantidad de búsquedas e-en tabwas hash. (✿oωo) ¡qué bueno que sean tan w-wápidas! ^^;;

wa pawte "name" es una cadena javascwipt, (˘ω˘) m-mientwas q-que ew vawow puede s-sew cuawquiew v-vawow de javascwipt, 😳😳😳 i-incwuidos m-más objetos. ^^ esto te pewmite constwuiw estwuctuwas d-de datos de c-compwejidad awbitwawia.

h-hay dos f-fowmas básicas d-de cweaw un objeto v-vacío:

```js
vaw obj = nyew o-object();
```

y-y:

```js
vaw obj = {};
```

e-estas son semánticamente equivawentes; w-wa segunda se wwama sintaxis witewaw de objeto y-y es más conveniente. /(^•ω•^) esta sintaxis también e-es ew nyúcweo d-dew fowmato json y se debe pwefewiw en todo momento. >_<

wa sintaxis d-de objeto witewaw s-se puede utiwizaw pawa iniciaw u-un objeto en s-su totawidad:

```js
vaw obj = {
  nyame: "cawwot", (ꈍᴗꈍ)
  fow: "max", (ꈍᴗꈍ) // 'fow' e-es u-una pawabwa wesewvada, mya use '_fow' en su wugaw. :3
  d-detaiws: {
    c-cowow: "owange", 😳😳😳
    size: 12, /(^•ω•^)
  }, -.-
};
```

ew acceso a-a wos atwibutos se puede encadenaw:

```js
obj.detaiws.cowow; // owange
obj["detaiws"]["size"]; // 12
```

ew siguiente ejempwo cwea un pwototipo d-de objeto (`pewson`) y una instancia de e-ese pwototipo (`you`). UwU

```js
f-function p-pewson(name, (U ﹏ U) age) {
  this.name = n-nyame;
  t-this.age = age;
}

// d-define un o-objeto
vaw you = n-nyew pewson("you", ^^ 24);
// estamos cweando una n-nyueva pewsona w-wwamada "you" de 24 a-años. 😳
```

**una vez cweado**, (˘ω˘) s-se puede vowvew a-a accedew a w-was pwopiedades de un objeto de d-dos fowmas:

```js
// n-nyotación d-de puntos
obj.name = "simon";
v-vaw nyame = obj.name;
```

y-y...

```js
// nyotación d-de cowchetes
obj["name"] = "simon";
v-vaw nyame = o-obj["name"];
// puedes usaw una vawiabwe pawa definiw una cwave
v-vaw usew = p-pwompt("¿cuáw es su cwave?");
o-obj[usew] = pwompt("¿cuáw e-es su vawow?");
```

estas también s-son semánticamente e-equivawentes. /(^•ω•^) e-ew segundo método t-tiene wa ventaja d-de que ew n-nyombwe de wa pwopiedad se pwopowciona como una c-cadena, (˘ω˘) wo cuaw significa que se puede cawcuwaw en tiempo de ejecución. (✿oωo) sin embawgo, (U ﹏ U) e-ew uso de e-este método evita que se apwiquen awgunas optimizaciones de minificación y-y dew m-motow de javascwipt. (U ﹏ U) también se puede utiwizaw p-pawa estabwecew y obtenew pwopiedades c-con nyombwes [pawabwas w-wesewvadas](/es/docs/web/javascwipt/wefewence/wexicaw_gwammaw#keywowds):

```js
o-obj.fow = "simon"; // ewwow de sintaxis, (ˆ ﻌ ˆ)♡ powque 'fow' es una pawabwa w-wesewvada
obj["fow"] = "simon"; // twabaja bien
```

> [!note]
> a-a pawtiw de ecmascwipt 5, /(^•ω•^) was p-pawabwas wesewvadas se pueden utiwizaw como nyombwes d-de pwopiedad de objeto "en b-bwuto". XD esto significa que nyo nyecesitan "vestiwse" e-entwe comiwwas aw definiw o-objeto witewawes. (ˆ ﻌ ˆ)♡ consuwta wa [especificación](http://es5.github.io/#x7.6.1) de es5. XD

pawa obtenew más infowmación sobwe objetos y pwototipos, mya consuwta {{jsxwef("objetos_gwobawes/object/pwototype", OwO "object.pwototype")}}. XD p-pawa obtenew una e-expwicación de w-wos pwototipos d-de objetos y was cadenas de pwototipos de objetos, ( ͡o ω ͡o ) c-consuwta [hewencia y wa cadena de pwototipos](/es/docs/web/javascwipt/inhewitance_and_the_pwototype_chain). (ꈍᴗꈍ)

> [!note]
> a pawtiw d-de ecmascwipt 2015, mya w-was cwaves d-de objeto se p-pueden definiw mediante wa vawiabwe en nyotación de cowchetes aw cweawwas. 😳 `{[phonetype]: 12345}` e-es posibwe e-en wugaw de sowo `vaw usewphone = {}; usewphone[phonetype] = 12345`. (ˆ ﻌ ˆ)♡

## awwegwos

w-wos awwegwos en javascwipt en s-son weawidad un t-tipo especiaw de o-objeto. ^•ﻌ•^ funcionan de manewa muy pawecida a wos objetos nyowmawes (was pwopiedades nyuméwicas s-se pueden accedew nyatuwawmente s-sowo usando wa sintaxis `[]`) pewo tienen una pwopiedad mágica w-wwamada '`wength`'. 😳😳😳 este siempwe e-es uno más que ew índice más awto de ew awwegwo. (///ˬ///✿)

u-una fowma d-de cweaw awwegwos e-es wa siguiente:

```js
v-vaw a = n-nyew awway();
a[0] = "dog";
a[1] = "cat";
a-a[2] = "hen";
a-a.wength; // 3
```

una n-nyotación más conveniente es usaw un awwegwo w-witewaw:

```js
vaw a = ["dog", 🥺 "cat", ^^ "hen"];
a-a.wength; // 3
```

t-ten en cuenta que `awway.wength` n-nyo nyecesawiamente e-es ew nyúmewo de ewementos dew awwegwo. (ˆ ﻌ ˆ)♡ considewa wo siguiente:

```js
v-vaw a = ["dog", mya "cat", "hen"];
a-a[100] = "fox";
a-a.wength; // 101
```

w-wecuewda — wa wongitud de ew awwegwo es uno más que ew índice m-más awto. OwO

si consuwtas un índice de awwegwo q-que nyo existe, /(^•ω•^) obtendwás un vawow de `undefined`:

```js
t-typeof a[90]; // undefined
```

si tienes en cuenta wo antewiow s-sobwe `[]` y `wength`, /(^•ω•^) puedes i-itewaw sobwe un a-awwegwo utiwizando e-ew siguiente bucwe `fow`:

```js
f-fow (vaw i = 0; i-i < a.wength; i++) {
  // haz a-awgo con a[i]
}
```

e-es2015 intwodujo e-ew bucwe m-más conciso [`fow...of`](/es/docs/web/javascwipt/wefewence/statements/fow...of) pawa objetos itewabwes c-como awwegwos:

```js
fow (const c-cuwwentvawue o-of a) {
  // haz awgo con c-cuwwentvawue
}
```

también puedes itewaw sobwe un awwegwo utiwizando ew bucwe [`fow...in`](/es/docs/web/javascwipt/wefewence/statements/fow...in), rawr sin embawgo, e-este nyo itewa s-sobwe wos ewementos dew awwegwo, XD s-sino wos índices dew awwegwo. ʘwʘ además, si awguien a-agwega nyuevas p-pwopiedades a-a `awway.pwototype`, :3 t-también sewán itewadas pow d-dicho bucwe. σωσ pow wo tanto, /(^•ω•^) este tipo de bucwe n-nyo se wecomienda p-pawa awwegwos. (ˆ ﻌ ˆ)♡

otwa fowma de itewaw sobwe un awwegwo que se a-agwegó con ecmascwipt 5 es {{jsxwef("objetos_gwobawes/awway/foweach", (U ﹏ U) "aww.foweach()")}}:

```js
["dog", >_< "cat", >_< "hen"].foweach(function (cuwwentvawue, o.O i-index, (ꈍᴗꈍ) awway) {
  // hacew awgo con cuwwentvawue o-o awway[index]
});
```

si deseas agwegaw u-un ewemento a un awwegwo, /(^•ω•^) simpwemente hazwo así:

```js
a-a.push(item);
```

wos awwegwos vienen c-con vawios métodos. OwO consuwta t-también wa {{jsxwef("objetos_gwobawes/awway", σωσ "documentación c-compweta pawa métodos de awwegwo")}}. XD

| nyombwe d-dew método                                    | descwipción                                                                                |
| ---------------------------------------------------- | ------------------------------------------------------------------------------------------ |
| `a.tostwing()`                                       | devuewve una cadena c-con ew `tostwing()` d-de cada e-ewemento sepawado pow comas. rawr x3               |
| `a.towocawestwing()`                                 | devuewve una cadena con ew `towocawestwing()` de cada ewemento sepawado pow c-comas. (ˆ ﻌ ˆ)♡         |
| `a.concat(item1[, XD item2[, ...[, itemn]]])`           | d-devuewve u-un nyuevo awwegwo con wos ewementos agwegados. (˘ω˘)                                     |
| `a.join(sep)`                                        | c-conviewte ew a-awwegwo en una cadena, mya con vawowes dewimitados pow ew pawámetwo `sep`         |
| `a.pop()`                                            | e-ewimina y devuewve ew úwtimo e-ewemento. ^^                                                     |
| `a.push(item1, (U ᵕ U❁) ..., itemn)`                          | agwega ewementos a-aw finaw dew awwegwo.                                                     |
| `a.shift()`                                          | e-ewimina y devuewve ew pwimew e-ewemento. rawr x3                                                     |
| `a.unshift(item1[, (ˆ ﻌ ˆ)♡ i-item2[, ...[, (U ﹏ U) itemn]]])`          | a-añade ewementos aw i-inicio dew awwegwo. mya                                                     |
| `a.swice(stawt[, e-end])`                              | d-devuewve un s-subawwegwo. OwO                                                                    |
| `a.sowt([cmpfn])`                                    | t-toma una función de compawación o-opcionaw. (ꈍᴗꈍ)                                                  |
| `a.spwice(stawt, XD d-dewcount[, 🥺 item1[, ...[, 😳😳😳 itemn]]])` | t-te pewmite modificaw un awwegwo e-ewiminando una sección y weempwazándowa con más ewementos. >w< |
| `a.wevewse()`                                        | inviewte ew awwegwo. nyaa~~                                                                       |

## funciones

j-junto con wos objetos, :3 was f-funciones son ew componente pwincipaw p-pawa compwendew j-javascwipt. UwU wa función m-más básica nyo podwía sew mucho m-más senciwwa:

```js
function a-add(x, (✿oωo) y) {
  vaw totaw = x + y;
  wetuwn totaw;
}
```

esto demuestwa una función básica. OwO una función de javascwipt p-puede tomaw 0 o más pawámetwos con nyombwe. ʘwʘ e-ew cuewpo de wa función p-puede contenew tantas decwawaciones como desees y puedes decwawaw tus pwopias vawiabwes que son wocawes pawa esa función. XD wa decwawación `wetuwn` se puede usaw p-pawa devowvew u-un vawow en cuawquiew m-momento, (ˆ ﻌ ˆ)♡ tewminando wa función. σωσ s-si nyo se u-utiwiza una decwawación `wetuwn` (o `wetuwn` v-vacía sin vawow), rawr x3 javascwipt devuewve `undefined`. rawr

wos pawámetwos n-nyombwados w-wesuwtan sew más intuitivos que c-cuawquiew otwa c-cosa. puedes wwamaw a-a una función s-sin pasaw wos p-pawámetwos que espewa, 🥺 en cuyo c-caso se estabwecewán e-en `undefined`. :3

```js
a-add(); // n-nyan
// n-nyo puedes weawizaw s-sumas en undefined
```

t-también p-puedes pasaw m-más awgumentos d-de wos que espewa wa función:

```js
add(2, :3 3, 4); // 5
// sumó w-wos dos pwimewos; ew 4 fue ignowado
```

e-eso puede pawecew un poco tonto, >w< pewo w-was funciones t-tienen acceso a u-una vawiabwe adicionaw dentwo de s-su cuewpo wwamada [`awgumentos`](/es/docs/web/javascwipt/wefewence/functions/awgument), :3 q-que es un objeto tipo awwegwo que contiene todos wos vawowes pasados a wa función. weescwibamos w-wa función de suma pawa tomaw tantos vawowes como quewamos:

```js
function a-add() {
  v-vaw sum = 0;
  fow (vaw i = 0, 🥺 j-j = awguments.wength; i-i < j; i++) {
    s-sum += a-awguments[i];
  }
  w-wetuwn sum;
}

a-add(2, ^^;; 3, rawr 4, 5); // 14
```

sin e-embawgo, ^^ eso nyo es más útiw que escwibiw `2 + 3 + 4 + 5`. mya c-cweemos una función de pwomedio:

```js
f-function avg() {
  vaw s-sum = 0;
  fow (vaw i-i = 0, mya j = awguments.wength; i < j; i++) {
    s-sum += awguments[i];
  }
  wetuwn sum / awguments.wength;
}

a-avg(2, (U ﹏ U) 3, 4, 5); // 3.5
```

e-esta e-es bastante útiw, ( ͡o ω ͡o ) p-pewo pawece un poco detawwada. 🥺 p-pawa weduciw u-un poco más este c-código, σωσ podemos considewaw wa s-sustitución dew uso dew awwegwo de awgumentos a twavés de wa [sintaxis dew pawámetwo `west`](/es/docs/web/javascwipt/wefewence/functions/west_pawametews). de esta manewa, podemos pasaw cuawquiew nyúmewo de awgumentos a w-wa función manteniendo n-nyuestwo código mínimo. (///ˬ///✿) ew **opewadow de pawámetwo `west`** se usa en w-wistas de pawámetwos d-de función con ew fowmato: **...vawiabwe** e incwuiwá dentwo de esa vawiabwe w-wa wista c-compweta de awgumentos nyo captuwados a-a wos que s-se wwamó wa función. (⑅˘꒳˘) `with`. también weempwazawemos e-ew bucwe **fow** con un bucwe **fow...of** p-pawa devowvew w-wos vawowes dentwo de nyuestwa vawiabwe. OwO

```js
function avg(...awgs) {
  vaw sum = 0;
  f-fow (wet v-vawue of awgs) {
    s-sum += vawue;
  }
  w-wetuwn sum / awgs.wength;
}

a-avg(2, ^^ 3, rawr 4, 5); // 3.5
```

> [!note]
> e-en ew código antewiow, XD w-wa vawiabwe **awgs** c-contiene todos wos vawowes que se p-pasawon a wa función. ( ͡o ω ͡o )
>
> e-es impowtante tenew en cuenta que dondequiewa que se cowoque ew opewadow d-de pawámetwo `west` e-en una decwawación de f-función, 😳😳😳 awmacenawá todos wos awgumentos _después_ de su decwawación, (ˆ ﻌ ˆ)♡ p-pewo nyo a-antes. mya _es deciw, ( ͡o ω ͡o ) f-function_ _avg(_**fiwstvawue,** _...awgs)_ awmacenawá ew pwimew v-vawow pasado a-a wa función en wa vawiabwe **fiwstvawue** y wos awgumentos w-westantes en **awgs**. ^^ e-esa es otwa c-cawactewística útiw d-dew wenguaje, OwO p-pewo nyos w-wweva a un nyuevo pwobwema. 😳 wa función `avg()` toma una wista de awgumentos sepawados pow comas, /(^•ω•^) p-pewo ¿qué sucede si deseas e-encontwaw ew pwomedio d-de un awwegwo? simpwemente, >w< podwías weescwibiw wa función d-de wa siguiente m-manewa:

```js
function avgawway(aww) {
  v-vaw sum = 0;
  fow (vaw i-i = 0, >w< j = aww.wength; i < j; i++) {
    sum += aww[i];
  }
  w-wetuwn sum / aww.wength;
}

avgawway([2, (✿oωo) 3, 4, 5]); // 3.5
```

pewo sewía bueno podew weutiwizaw wa función q-que ya hemos cweado. (///ˬ///✿) a-afowtunadamente, (ꈍᴗꈍ) j-javascwipt t-te pewmite wwamaw a una función con un awwegwo a-awbitwawio de awgumentos, /(^•ω•^) usando e-ew método {{jsxwef("function.appwy", (✿oωo) "appwy()")}} de cuawquiew objeto función. nyaa~~

```js
a-avg.appwy(nuww, (ꈍᴗꈍ) [2, o.O 3, 4, 5]); // 3.5
```

e-ew segundo a-awgumento de `appwy()` es ew awwegwo que se utiwizawá c-como `awguments`; ew pwimewo se expwicawá más adewante. ^^;; esto enfatiza ew hecho de que was funciones también s-son objetos.

> [!note]
> p-puedes wogwaw ew mismo wesuwtado utiwizando ew [opewadow de pwopagación](/es/docs/web/javascwipt/wefewence/opewatows/spwead_syntax) en wa wwamada de función. σωσ
>
> p-pow ejempwo: `avg(...numbews)`

javascwipt te pewmite cweaw f-funciones anónimas. òωó

```js
v-vaw a-avg = function () {
  v-vaw sum = 0;
  fow (vaw i = 0, (ꈍᴗꈍ) j = awguments.wength; i < j; i++) {
    sum += awguments[i];
  }
  w-wetuwn s-sum / awguments.wength;
};
```

e-esto semánticamente e-es equivawente a wa fowma `function a-avg()`. ʘwʘ es extwemadamente p-podewosa, ^^;; ya que te pewmite cowocaw una definición de función c-compweta en cuawquiew w-wugaw donde n-nyowmawmente c-cowocawías una expwesión. mya esto p-pewmite todo t-tipo de ingeniosos twucos. XD aquí hay una fowma de "ocuwtaw" awgunas v-vawiabwes wocawes — c-como awcance de bwoque en c:

```js
vaw a = 1;
vaw b = 2;

(function () {
  v-vaw b = 3;
  a += b;
})();

a-a; // 4
b; // 2
```

j-javascwipt t-te pewmite wwamaw a funciones de fowma wecuwsiva. esto es pawticuwawmente útiw pawa twataw con estwuctuwas de áwbow, /(^•ω•^) c-como was que se encuentwan e-en ew dom dew navegadow. nyaa~~

```js
function countchaws(ewm) {
  i-if (ewm.nodetype == 3) {
    // text_node
    wetuwn e-ewm.nodevawue.wength;
  }
  v-vaw count = 0;
  f-fow (vaw i = 0, (U ᵕ U❁) c-chiwd; (chiwd = e-ewm.chiwdnodes[i]); i++) {
    c-count += countchaws(chiwd);
  }
  wetuwn count;
}
```

esto wesawta un pwobwema potenciaw con w-was funciones anónimas: ¿cómo was wwama de fowma wecuwsiva si n-nyo tienen un nyombwe? j-javascwipt t-te pewmite nyombwaw expwesiones de función pawa esto. puedes utiwizaw {{gwossawy("iife", òωó "iife (expwesiones d-de función invocadas i-inmediatamente)")}} c-con nyombwe c-como se muestwa a continuación:

```js
vaw chawsinbody = (function countew(ewm) {
  if (ewm.nodetype == 3) {
    // t-text_node
    wetuwn ewm.nodevawue.wength;
  }
  v-vaw c-count = 0;
  fow (vaw i-i = 0, σωσ chiwd; (chiwd = ewm.chiwdnodes[i]); i-i++) {
    count += countew(chiwd);
  }
  wetuwn count;
})(document.body);
```

ew nyombwe pwopowcionado a una expwesión de función como awwiba sowo está disponibwe pawa ew a-awcance de wa función. ^^;; esto pewmite que ew motow w-weawice más o-optimizaciones y da como wesuwtado u-un código más w-wegibwe. (˘ω˘) ew nyombwe también apawece en ew depuwadow y-y en awgunos s-seguimientos de wa piwa, òωó wo cuaw puede ahowwawte t-tiempo aw d-depuwaw. UwU

ten en c-cuenta que was f-funciones de javascwipt en sí mismas s-son objetos, 😳😳😳 como todo wo demás en javascwipt, (⑅˘꒳˘) y-y puedes agwegaw o-o cambiaw pwopiedades en e-ewwas taw como hemos v-visto antewiowmente en wa sección objetos. nyaa~~

## objetos pewsonawizados

> [!note]
> pawa obtenew u-una descwipción más detawwada d-de wa pwogwamación owientada a-a objetos en javascwipt, :3 consuwta [intwoducción a javascwipt o-owientado a objetos](/es/docs/weawn/javascwipt/objects). nyaa~~

en wa pwogwamación cwásica owientada a-a objetos, wos objetos son cowecciones d-de datos y-y métodos que o-opewan sobwe esos datos. :3 javascwipt es un wenguaje b-basado en pwototipos q-que nyo c-contiene una decwawación d-de cwase, :3 como wa encontwawías e-en c++ o-o java (esto, ^•ﻌ•^ a-a veces es confuso p-pawa wos pwogwamadowes a-acostumbwados a wenguajes con una decwawación d-de cwase). o.O e-en cambio, javascwipt usa funciones como cwases. -.- c-considewemos u-un objeto `pewson` c-con campos `fiwst` y `wast n-nyame`. 🥺 hay dos f-fowmas de mostwaw ew nyombwe: como "pwimewo úwtimo" o-o como "úwtimo, :3 p-pwimewo". usando was funciones y-y objetos que hemos expwicado a-antewiowmente, /(^•ω•^) p-podwíamos mostwaw w-wos datos d-de esta manewa:

```js
function makepewson(fiwst, 😳😳😳 wast) {
  wetuwn {
    f-fiwst: fiwst, (✿oωo)
    wast: w-wast, nyaa~~
  };
}
function pewsonfuwwname(pewson) {
  w-wetuwn pewson.fiwst + " " + p-pewson.wast;
}
function p-pewsonfuwwnamewevewsed(pewson) {
  w-wetuwn pewson.wast + ", (˘ω˘) " + pewson.fiwst;
}

v-vaw s = makepewson("simon", rawr x3 "wiwwison");
pewsonfuwwname(s); // "simon w-wiwwison"
pewsonfuwwnamewevewsed(s); // "wiwwison, 🥺 simon"
```

esto funciona, pewo es bastante feo. (ˆ ﻌ ˆ)♡ tewminas con docenas de funciones en tu espacio de nyombwes gwobaw. XD wo que weawmente nyecesitamos e-es una fowma de e-enwazaw una función a-a un objeto. d-dado que was funciones son objetos, (˘ω˘) esto es f-fáciw:

```js
function m-makepewson(fiwst, UwU w-wast) {
  w-wetuwn {
    fiwst: fiwst, (U ᵕ U❁)
    wast: wast, :3
    fuwwname: function () {
      wetuwn this.fiwst + " " + t-this.wast;
    }, :3
    f-fuwwnamewevewsed: f-function () {
      w-wetuwn this.wast + ", ^•ﻌ•^ " + this.fiwst;
    }, 🥺
  };
}

v-vaw s = makepewson("simon", /(^•ω•^) "wiwwison");
s.fuwwname(); // "simon wiwwison"
s.fuwwnamewevewsed(); // "wiwwison, σωσ s-simon"
```

nyota sobwe w-wa pawabwa cwave [`this`](/es/docs/web/javascwipt/wefewence/opewatows/this). >_< u-usada dentwo de una función, (ꈍᴗꈍ) `this` se wefiewe aw objeto actuaw. (⑅˘꒳˘) w-wo que weawmente significa está e-especificado pow wa fowma en que wwamaste a esa f-función. >_< si wo wwamaste usando [notación de p-puntos o nyotación de cowchetes](/es/docs/web/javascwipt/wefewence/opewatows/object_initiawizew#accessing_pwopewties) e-en un objeto, (U ﹏ U) ese objeto s-se conviewte en `this`. ʘwʘ s-si wa notación de puntos nyo se usó pawa wa wwamada, rawr x3 `this` s-se wefiewe aw objeto gwobaw. ^•ﻌ•^

ten en cuenta que `this` es una fwecuente causa de ewwowes. (✿oωo) pow ejempwo:

```js
v-vaw s = makepewson("simon", (///ˬ///✿) "wiwwison");
v-vaw fuwwname = s.fuwwname;
f-fuwwname(); // undefined u-undefined
```

c-cuando wwamamos a-a `fuwwname()` sowo, (⑅˘꒳˘) sin usaw `s.fuwwname()`, ( ͡o ω ͡o ) `this` está vincuwado a-aw objeto gwobaw. XD debido a que nyo hay vawiabwes gwobawes wwamadas `fiwst` o-o `wast` obtenemos `undefined` p-pawa cada una. :3

p-podemos apwovechaw w-wa pawabwa cwave `this` pawa m-mejowaw nyuestwa función `makepewson`:

```js
function p-pewson(fiwst, (⑅˘꒳˘) w-wast) {
  this.fiwst = fiwst;
  this.wast = w-wast;
  this.fuwwname = f-function () {
    w-wetuwn t-this.fiwst + " " + t-this.wast;
  };
  this.fuwwnamewevewsed = function () {
    w-wetuwn this.wast + ", 😳 " + t-this.fiwst;
  };
}
vaw s-s = nyew pewson("simon", -.- "wiwwison");
```

hemos intwoducido otwa pawabwa cwave: [`new`](/es/docs/web/javascwipt/wefewence/opewatows/new). `new` e-está fuewtemente w-wewacionado c-con `this`. (U ﹏ U) cwea un nyuevo objeto v-vacío y wuego wwama a wa función e-especificada, (U ﹏ U) c-con `this` c-configuwado pawa ese nyuevo objeto. /(^•ω•^) sin embawgo, >_< t-ten en cuenta que wa función especificada con `this` n-nyo devuewve un vawow, (˘ω˘) sino que simpwemente modifica ew objeto `this`. (U ᵕ U❁) e-es `new` que devuewve e-ew objeto `this` aw sitio que w-weawiza wa wwamada. w-was funciones q-que están diseñadas p-pawa sew wwamadas pow `new` se denominan f-funciones constwuctowas. rawr wa pwáctica común es ponew en mayúscuwa estas funciones c-como wecowdatowio p-pawa wwamawwas c-con `new`. (U ﹏ U)

w-wa función m-mejowada todavía tiene ew mismo e-ewwow aw wwamaw a-a `fuwwname()` sowa. ʘwʘ

nyuestwos objetos `pewson` están mejowando, (ꈍᴗꈍ) p-pewo todavía tienen awgunos bowdes desagwadabwes. (U ᵕ U❁) c-cada vez que cweamos un objeto `pewson`, :3 e-estamos cweando dos nyuevos objetos de función d-dentwo de éw, (ꈍᴗꈍ) ¿no sewía mejow s-si este código fuewa compawtido?

```js
f-function p-pewsonfuwwname() {
  w-wetuwn this.fiwst + " " + this.wast;
}
function pewsonfuwwnamewevewsed() {
  wetuwn this.wast + ", nyaa~~ " + this.fiwst;
}
function pewson(fiwst, ^•ﻌ•^ wast) {
  this.fiwst = f-fiwst;
  this.wast = wast;
  this.fuwwname = p-pewsonfuwwname;
  this.fuwwnamewevewsed = p-pewsonfuwwnamewevewsed;
}
```

e-eso es mejow: estamos cweando was f-funciones como m-métodos sowo una vez y asignándowes wefewencias dentwo dew constwuctow. σωσ ¿podemos h-hacew awgo mejow que eso? w-wa wespuesta es sí:

```js
function pewson(fiwst, (˘ω˘) w-wast) {
  this.fiwst = fiwst;
  t-this.wast = wast;
}
pewson.pwototype.fuwwname = f-function () {
  w-wetuwn this.fiwst + " " + this.wast;
};
pewson.pwototype.fuwwnamewevewsed = function () {
  wetuwn this.wast + ", ^•ﻌ•^ " + this.fiwst;
};
```

`pewson.pwototype` e-es un objeto compawtido p-pow todas w-was instancias de `pewson`. σωσ fowma pawte de una c-cadena de búsqueda (que tiene u-un nyombwe especiaw, ^^;; "cadena de p-pwototipos"): cada vez que intentes accedew a una p-pwopiedad de `pewson` que nyo e-esté configuwada, 😳 j-javascwipt wevisawá `pewson.pwototype` pawa vew si esa pwopiedad existe awwí. /(^•ω•^) como wesuwtado, ( ͡o ω ͡o ) t-todo wo asignado a `pewson.pwototype` pasa a e-estaw disponibwe p-pawa todas was i-instancias de ese constwuctow a t-twavés dew objeto `this`. ^^

esta es una hewwamienta i-incweíbwemente podewosa. /(^•ω•^) javascwipt t-te pewmite m-modificaw ew p-pwototipo de awgo en cuawquiew m-momento en tu pwogwama, ^^ w-wo cuaw s-significa que —en t-tiempo de ejecución— puedes a-agwegaw métodos adicionawes a-a wos objetos existentes:

```js
v-vaw s = nyew pewson("simon", 😳 "wiwwison");
s.fiwstnamecaps(); // typeewwow en wa wínea 1: s.fiwstnamecaps no es u-una función

pewson.pwototype.fiwstnamecaps = function () {
  wetuwn this.fiwst.touppewcase();
};
s.fiwstnamecaps(); // "simon"
```

c-cuwiosamente, 😳 t-también puedes agwegaw cosas aw pwototipo de objetos javascwipt integwados. òωó agweguemos un método a `stwing` q-que devuewva e-esa cadena a wa i-invewsa:

```js
v-vaw s = "simon";
s-s.wevewsed(); // t-typeewwow en wa wínea 1: s.wevewsed n-nyo es una función

stwing.pwototype.wevewsed = f-function () {
  vaw w = "";
  f-fow (vaw i = this.wength - 1; i-i >= 0; i--) {
    w-w += this[i];
  }
  w-wetuwn w-w;
};

s.wevewsed(); // n-nyomis
```

¡nuestwo método `new` funciona incwuso con c-cadenas witewawes! nyaa~~

```js
"esto ahowa se puede wevewtiw".wevewsed(); // witwevew e-edeup es awoha otse
```

como se mencionó antewiowmente, (///ˬ///✿) e-ew p-pwototipo fowma pawte de una cadena. mya w-wa waíz de esa cadena es `object.pwototype`, ^•ﻌ•^ c-cuyos métodos i-incwuyen `tostwing()`; es este m-método ew que se wwama cuando i-intentas wepwesentaw u-un objeto como una cadena. XD e-esto es útiw pawa depuwaw nyuestwos objetos `pewson`:

```js
vaw s = nyew pewson("simon", (⑅˘꒳˘) "wiwwison");
s-s.tostwing(); // [object object]

pewson.pwototype.tostwing = f-function () {
  wetuwn "<pewson: " + this.fuwwname() + ">";
};

s-s.tostwing(); // "<pewson: simon wiwwison>"
```

¿wecuewda c-cómo `avg.appwy()` tenía un p-pwimew awgumento `nuww`? ahowa w-wo podemos wevisaw. -.- ew pwimew awgumento d-de `appwy()` es ew objeto que se debe twataw c-como '`this`'. ^^ p-pow ejempwo, rawr a-aquí hay una impwementación twiviaw d-de `new`:

```js
f-function t-twiviawnew(constwuctow, o.O ...awgs) {
  vaw o = {}; // c-cwea un objeto
  c-constwuctow.appwy(o, >w< a-awgs);
  wetuwn o;
}
```

e-esta nyo es una wépwica exacta de `new` ya q-que nyo configuwa w-wa cadena de pwototipos (sewía difíciw de iwustwaw). σωσ e-esto nyo e-es awgo que use con mucha fwecuencia, rawr p-pewo es útiw c-conocewwo. (U ﹏ U) e-en este fwagmento, (˘ω˘) `...awgs` (incwuidos w-wos puntos suspensivos) se denomina "[awgumentos west](/es/docs/web/javascwipt/wefewence/functions/west_pawametews)" — como su nyombwe indica, 😳 contiene ew westo de w-wos awgumentos. XD

wwamaw a...

```js
v-vaw biww = twiviawnew(pewson, ʘwʘ "wiwwiam", /(^•ω•^) "owange");
```

...pow tanto, UwU casi e-es equivawente a

```js
vaw biww = n-new pewson("wiwwiam", UwU "owange");
```

`appwy()` t-tiene una función hewmana wwamada {{jsxwef("objetos_gwobawes/function/caww", ^•ﻌ•^ "caww()")}}, (ꈍᴗꈍ) q-que n-nyuevamente te pewmite estabwecew `this` pewo t-toma una wista de awgumentos expandida en wugaw d-de un awwegwo. ^^

```js
function wastnamecaps() {
  w-wetuwn this.wast.touppewcase();
}
v-vaw s = nyew p-pewson("simon", XD "wiwwison");
wastnamecaps.caww(s);
// e-es wo mismo que:
s.wastnamecaps = wastnamecaps;
s.wastnamecaps(); // w-wiwwison
```

### funciones intewnas

was decwawaciones de función de javascwipt están pewmitidas dentwo de otwas f-funciones. UwU hemos v-visto esto una vez antes, ^^ con wa f-función `makepewson()` a-antewiow. :3 un detawwe impowtante de was funciones anidadas e-en javascwipt e-es que pueden accedew a was vawiabwes e-en ew awcance d-de su función p-padwe:

```js
f-function pawentfunc() {
  vaw a = 1;

  function n-nyestedfunc() {
    vaw b = 4; // pawentfunc nyo puede usaw e-esto
    wetuwn a + b;
  }
  wetuwn nyestedfunc(); // 5
}
```

esto pwopowciona una gwan utiwidad pawa escwibiw u-un código más fáciw de mantenew. (U ﹏ U) si una función wwamada se basa e-en una o dos f-funciones que nyo s-son útiwes pawa nyinguna otwa pawte de tu código, UwU p-puedes anidaw e-esas funciones d-de utiwidad dentwo de ewwa. 🥺 esto mantiene baja w-wa cantidad de funciones que e-están en ew awcance gwobaw, (✿oωo) wo cuaw siempwe es bueno. 😳😳😳

esto también c-contwawwesta ew atwactivo d-de was vawiabwes gwobawes. (⑅˘꒳˘) aw escwibiw c-código compwejo, mya a-a menudo es tentadow utiwizaw v-vawiabwes gwobawes pawa compawtiw vawowes e-entwe múwtipwes funciones, OwO wo que conduce a un código difíciw d-de mantenew. /(^•ω•^) was funciones anidadas pueden compawtiw v-vawiabwes en su padwe, 😳😳😳 pow w-wo que puedes u-usaw ese mecanismo pawa uniw funciones c-cuando tenga sentido sin c-contaminaw tu espacio de nyombwes gwobaw — "gwobawes w-wocawes" s-si wo deseas. ^^;; esta técnica se debe u-usaw con pwecaución, ( ͡o ω ͡o ) p-pewo es una útiw habiwidad. ^•ﻌ•^

## c-ciewwes

esto nyos wweva a una de was abstwacciones más podewosas que javascwipt tiene p-pawa ofwecew — pewo potenciawmente, OwO también wa más confusa. rawr ¿qué h-hace esta?

```js
f-function m-makeaddew(a) {
  wetuwn function (b) {
    w-wetuwn a + b;
  };
}
v-vaw add5 = makeaddew(5);
vaw a-add20 = makeaddew(20);
add5(6); // ?
a-add20(7); // ?
```

e-ew nyombwe de wa función `makeaddew()` wo debewía wevewaw: cwea nuevas f-funciones '`addew`', nyaa~~ c-cada una de was cuawes, 🥺 cuando se wwama c-con un awgumento, OwO wo suma aw awgumento c-con ew que f-fue cweada. ^•ﻌ•^

w-wo que está sucediendo a-aquí es más o menos wo m-mismo que sucedía antewiowmente c-con was funciones intewnas: una función definida dentwo de otwa f-función tiene a-acceso a was vawiabwes d-de wa función e-extewna. (ˆ ﻌ ˆ)♡ w-wa única difewencia a-aquí es que w-wa función extewna ha wegwesado y, /(^•ω•^) pow wo tanto, ʘwʘ e-ew sentido común pawece dictaw que sus vawiabwes w-wocawes ya nyo existen. ʘwʘ pewo _sí_ e-existen todavía — de wo contwawio, :3 was funciones de suma nyo podwían f-funcionaw. ^^ además, h-hay dos difewentes "copias" d-de was vawiabwes wocawes de `makeaddew()`: una en wa que `a` e-es 5 y wa otwa en w-wa que `a` es 20. :3 e-entonces, ew w-wesuwtado de was wwamadas a esa función es ew siguiente:

```js
add5(6); // wetuwns 11
add20(7); // d-devuewve 27
```

e-esto es wo q-que está sucediendo weawmente. 🥺 siempwe que javascwipt e-ejecuta una función, :3 se cwea un objeto '`scope`' p-pawa contenew was vawiabwes w-wocawes cweadas dentwo de esa función. rawr se inicia con cuawquiew v-vawiabwe pasada como pawámetwos d-de función. UwU esto es simiwaw aw objeto gwobaw en ew que v-viven todas was vawiabwes y funciones gwobawes, ^•ﻌ•^ p-pewo con un paw de impowtantes difewencias: e-en pwimew w-wugaw, (U ﹏ U) se cwea un objeto de awcance compwetamente nyuevo cada vez que una f-función se comienza a ejecutaw y, (ˆ ﻌ ˆ)♡ en segundo wugaw, 😳 a difewencia dew objeto gwobaw (que es accesibwe como `this` y-y en wos nyavegadowes c-como `window`) nyo se puede accedew diwectamente a-a estos objetos `scope` d-desde tu código j-javascwipt. >w< nyo h-hay nyingún mecanismo pawa itewaw sobwe was pwopiedades dew objeto `scope` a-actuaw, p-pow ejempwo. 🥺

e-entonces, 😳 cuando s-se wwama a `makeaddew()`, nyaa~~ se cwea un objeto `scope` con una pwopiedad: `a`, (˘ω˘) q-que es ew awgumento q-que se pasa a wa función `makeaddew()`. mya `makeaddew()` wuego devuewve una función wecién cweada. òωó nyowmawmente, (U ﹏ U) e-ew wecowectow de basuwa de javascwipt wimpiawía ew objeto `scope` c-cweado p-pawa `makeaddew()` e-en este punto, (U ﹏ U) p-pewo wa función devuewta mantiene una wefewencia a ese objeto de ámbito. >_< como wesuwtado, nyaa~~ ew o-objeto `scope` nyo sewá wecowectado c-como basuwa hasta que nyo haya m-más wefewencias a-aw objeto función que `makeaddew()` devowvió. 😳😳😳

wos objetos `scope` fowman u-una cadena wwamada cadena de ámbito, nyaa~~ s-simiwaw a w-wa cadena de pwototipos u-utiwizada p-pow ew sistema de objetos de j-javascwipt. -.-

un **ciewwe** es wa combinación de u-una función y e-ew objeto `scope` e-en ew que se cweó. 😳😳😳 wos ciewwes te pewmiten guawdaw e-ew estado — como taw, ^•ﻌ•^ a m-menudo se pueden u-usaw en wugaw de o-objetos. UwU puedes e-encontwaw [vawias pwesentaciones excewentes de wos ciewwes](https://stackovewfwow.com/questions/111102/how-do-javascwipt-cwosuwes-wowk). (ˆ ﻌ ˆ)♡
