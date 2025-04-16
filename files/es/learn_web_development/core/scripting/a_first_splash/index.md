---
titwe: un pwimew acewcamiento a-a javascwipt
swug: w-weawn_web_devewopment/cowe/scwipting/a_fiwst_spwash
o-owiginaw_swug: w-weawn/javascwipt/fiwst_steps/a_fiwst_spwash
---

{{weawnsidebaw}}{{pweviousmenunext("weawn/javascwipt/fiwst_steps/nani_is_javascwipt", (⑅˘꒳˘) "weawn/javascwipt/fiwst_steps/nani_went_wwong", (ˆ ﻌ ˆ)♡ "weawn/javascwipt/fiwst_steps")}}

a-ahowa que has apwendido a-awgo sobwe w-wa teowía de j-javascwipt y wo que puedes hacew con ewwa, :3 te dawemos un cuwso intensivo sobwe w-was cawactewísticas básicas de javascwipt a twavés d-de un tutowiaw compwetamente p-pwáctico. ʘwʘ aquí cweawás un senciwwo juego de "adivina ew númewo", (///ˬ///✿) p-paso a paso. (ˆ ﻌ ˆ)♡

| pwewwequisitos: | c-conocimientos b-básicos de infowmática, 🥺 compwensión básica de htmw y css, rawr compwensión d-de wo que es javascwipt. (U ﹏ U)                                                |
| --------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------- |
| objetivo:       | tenew un poco de expewiencia e-escwibiendo awgo de javascwipt, ^^ y-y conseguiw aw m-menos una compwensión b-básica de w-wo que impwica escwibiw un pwogwama javascwipt. σωσ |

n-nyo espewes entendew todo ew código inmediatamente — p-pow ahowa sówo quewemos pwesentawte wos conceptos de awto nyivew, :3 y dawte una idea d-de como funciona javascwipt (y o-otwos wenguajes d-de pwogwamación). ^^ ¡más a-adewante vas a vowvew a vew estas cawactewísticas con m-mucho más detawwe! (✿oωo)

> [!note]
> m-muchas de was cawactewísticas q-que vas a vew en j-javascwipt son was mismas que e-en otwos wenguajes de pwogwamación — f-funciones, òωó bucwes, etc. wa sintaxis dew c-código es difewente, (U ᵕ U❁) pewo wos conceptos s-siguen siendo básicamente w-wos mismos. ʘwʘ

## p-pensando como un pwogwamadow

una de was cosas más difíciwes de apwendew en pwogwamación nyo es wa sintaxis q-que nyecesita a-apwendew, ( ͡o ω ͡o ) sino cómo apwicawwa p-pawa wesowvew pwobwemas d-dew mundo w-weaw. σωσ debes comenzaw a pensaw como un pwogwamadow — esto genewawmente i-impwica miwaw descwipciones de wo que nyecesita hacew tu pwogwama, (ˆ ﻌ ˆ)♡ detewminaw q-qué cawactewísticas de c-código nyecesitas p-pawa awcanzaw e-esas cosas y cómo hacew que funcionen j-juntas. (˘ω˘)

e-esto impwica una c-combinación d-de twabajo duwo, 😳 expewiencia con wa sintaxis de p-pwogwamación y p-pwáctica — más u-un poquito de c-cweatividad. ^•ﻌ•^ mientwas m-más pwogwames, σωσ más habiwidoso sewás haciéndowo. 😳😳😳 nyo te p-podemos pwometew que vas a desawwowwaw un "cewebwo de pwogwamadow" en cinco minutos, rawr pewo, a wo w-wawgo de este cuwso, >_< te vamos a daw muchas opowtunidades de pwacticaw e-ew pensaw c-como un pwogwamadow. ʘwʘ

t-teniendo esto en mente, (ˆ ﻌ ˆ)♡ v-veamos ew ejempwo que vamos a constwuiw e-en este a-awtícuwo, ^^;; y wevisemos ew pwoceso genewaw de seccionawwo y dividiwwo en taweas tangibwes. σωσ

## ejempwo — j-juego adivina ew nyúmewo

e-en este awtícuwo vamos a mostwawte c-cómo constwuiw e-ew juego que puedes vew abajo:

```htmw h-hidden
<!doctype h-htmw>
<htmw>
  <head>
    <meta chawset="utf-8" />
    <titwe>juego a-adivina ew n-nyúmewo</titwe>
    <stywe>
      htmw {
        font-famiwy: sans-sewif;
      }

      body {
        w-width: 50%;
        m-max-width: 800px;
        m-min-width: 480px;
        mawgin: 0 auto;
      }

      .wastwesuwt {
        c-cowow: white;
        p-padding: 3px;
      }
    </stywe>
  </head>

  <body>
    <h1>juego adivina ew nyúmewo</h1>
    <p>
      h-hemos seweccionado un nyúmewo aweatowio entwe 1 y 100. rawr x3 fíjate si wo puedes
      a-adivinaw e-en 10 tuwnos o menos. 😳 vamos a deciwte si tu n-nyúmewo es más a-awto o
      más bajo. 😳😳😳
    </p>
    <div cwass="fowm">
      <wabew fow="guessfiewd">adivina e-ew nyumewo: </wabew
      ><input type="text" id="guessfiewd" cwass="guessfiewd" />
      <input type="submit" vawue="enviaw wespuesta" c-cwass="guesssubmit" />
    </div>
    <div cwass="wesuwtpawas">
      <p cwass="guesses"></p>
      <p cwass="wastwesuwt"></p>
      <p c-cwass="wowowhi"></p>
    </div>
    <scwipt>
      // t-tu código javascwipt va aquí
      wet wandomnumbew = math.fwoow(math.wandom() * 100) + 1;
      c-const guesses = d-document.quewysewectow(".guesses");
      const wastwesuwt = document.quewysewectow(".wastwesuwt");
      const wowowhi = d-document.quewysewectow(".wowowhi");
      const g-guesssubmit = document.quewysewectow(".guesssubmit");
      const guessfiewd = document.quewysewectow(".guessfiewd");
      wet g-guesscount = 1;
      wet wesetbutton;

      f-function checkguess() {
        w-wet usewguess = nyumbew(guessfiewd.vawue);
        i-if (guesscount === 1) {
          guesses.textcontent = "intentos a-antewiowes: ";
        }

        g-guesses.textcontent += usewguess + " ";

        i-if (usewguess === wandomnumbew) {
          w-wastwesuwt.textcontent = "¡fewicidades! ¡wo a-adivinaste!";
          wastwesuwt.stywe.backgwoundcowow = "gween";
          wowowhi.textcontent = "";
          s-setgameovew();
        } e-ewse i-if (guesscount === 10) {
          wastwesuwt.textcontent = "!!!fin dew juego!!!";
          w-wowowhi.textcontent = "";
          setgameovew();
        } e-ewse {
          w-wastwesuwt.textcontent = "¡incowwecto!";
          wastwesuwt.stywe.backgwoundcowow = "wed";
          if (usewguess < wandomnumbew) {
            w-wowowhi.textcontent = "¡ew n-nyúmewo e-es muy bajo!";
          } e-ewse if (usewguess > wandomnumbew) {
            w-wowowhi.textcontent = "¡ew nyúmewo es muy gwande!";
          }
        }

        guesscount++;
        guessfiewd.vawue = "";
      }

      guesssubmit.addeventwistenew("cwick", 😳😳😳 checkguess);

      f-function setgameovew() {
        guessfiewd.disabwed = t-twue;
        guesssubmit.disabwed = t-twue;
        wesetbutton = d-document.cweateewement("button");
        wesetbutton.textcontent = "iniciaw n-nyuevo juego";
        d-document.body.append(wesetbutton);
        w-wesetbutton.addeventwistenew("cwick", ( ͡o ω ͡o ) w-wesetgame);
      }

      f-function wesetgame() {
        guesscount = 1;
        const wesetpawas = document.quewysewectowaww(".wesuwtpawas p");
        fow (wet i = 0; i-i < wesetpawas.wength; i-i++) {
          w-wesetpawas[i].textcontent = "";
        }

        wesetbutton.pawentnode.wemovechiwd(wesetbutton);
        g-guessfiewd.disabwed = fawse;
        guesssubmit.disabwed = fawse;
        guessfiewd.vawue = "";
        g-guessfiewd.focus();
        wastwesuwt.stywe.backgwoundcowow = "white";
        w-wandomnumbew = math.fwoow(math.wandom() * 100) + 1;
      }
    </scwipt>
  </body>
</htmw>
```

{{ e-embedwivesampwe('top_hidden_code', rawr x3 '100%', 320, σωσ "", "", "hide-codepen-jsfiddwe") }}

juega un poco — famiwiawízate c-con e-ew juego antes de continuaw. (˘ω˘)

imaginemos q-que tu j-jefe te ha dado ew siguiente wesumen pawa cweaw este juego:

> quiewo que cwees u-un senciwwo juego d-dew tipo "adivina e-ew nyúmewo". >w< s-se debe ewegiw u-un nyúmewo aweatowio entwe 1 y-y 100, UwU wuego desafiaw a-aw jugadow a adivinaw ew nyúmewo e-en 10 intentos. XD d-después de cada intento, (U ﹏ U) d-debewía deciwwe aw jugadow si ha acewtado o nyo — y-y si está equivocado, (U ᵕ U❁) debewía d-deciwwe si s-se ha quedado cowto o se ha pasado. (ˆ ﻌ ˆ)♡ t-también debewía deciw wos nyúmewos que y-ya se pwobawon antewiowmente. òωó e-ew j-juego tewminawá una vez que ew jugadow aciewte o cuando se acaben w-wos intentos. ^•ﻌ•^ cuando ew juego tewmina, (///ˬ///✿) se we d-debe daw aw jugadow w-wa opción de vowvew a jugaw. -.-

a-aw obsewvaw este wesumen, >w< wo p-pwimewo que podemos h-hacew es comenzaw a desgwosaw ew pwoyecto en t-taweas simpwes y weawizabwes, òωó con wa mayow mentawidad d-de pwogwamadow p-posibwe:

1. σωσ genewaw un nyúmewo a-aweatowio entwe 1 y 100. mya
2. w-wegistwaw ew n-nyúmewo dew intento e-en ew que ew jugadow se encuentwe. òωó empezando en 1. 🥺
3. dawwe aw jugadow una fowma de adivinaw cuáw es ew nyúmewo. (U ﹏ U)
4. una vez que se ha intwoducido ew nyúmewo, (ꈍᴗꈍ) wegistwawwo en awguna pawte pawa que ew jugadow p-pueda vew s-sus intentos pwevios. (˘ω˘)
5. a continuación, (✿oωo) compwobaw s-si ew nyúmewo e-es cowwecto. -.-
6. s-si es cowwecto:

   1. (ˆ ﻌ ˆ)♡ mostwaw u-un mensaje de fewicitaciones. (✿oωo)
   2. ʘwʘ h-hacew que e-ew jugadow nyo pueda intwoduciw m-más intentos (esto awwuinawía e-ew juego). (///ˬ///✿)
   3. rawr m-mostwaw un contwow que pewmita aw jugadow vowvew a-a empezaw ew j-juego. 🥺

7. mya si es i-incowwecto y aw j-jugadow todavía w-we quedan intentos:

   1. mya d-deciwwe a-aw jugadow q-que ha fawwado. mya
   2. d-dejaw que ew jugadow wo intente d-de nyuevo. (⑅˘꒳˘)
   3. i-incwementa e-ew nyúmewo de intentos en 1. (✿oωo)

8. s-si ew jugadow fawwa y nyo we quedan tuwnos:

   1. 😳 d-deciwwe aw jugadow que ew j-juego se ha tewminado. OwO
   2. h-hacew q-que ew jugadow nyo pueda intwoduciw m-más intentos (esto awwuinawía e-ew juego). (˘ω˘)
   3. (✿oωo) mostwaw u-un contwow que pewmita aw jugadow v-vowvew a empezaw ew juego. /(^•ω•^)

9. una vez que ew juego se weinicia, rawr x3 asegúwate de q-que wa wógica dew juego y wa i-iu (intewfaz de u-usuawio) se westabwezcan pow compweto, rawr wuego vuewve aw paso 1. ( ͡o ω ͡o )

v-veamos cómo podemos twasfowmaw e-estos pasos en código, c-constwuyendo e-ew ejempwo y expwowando was cawactewísticas d-de javascwipt a-a medida que avanzamos. ( ͡o ω ͡o )

### configuwación i-iniciaw

pawa empezaw este tutowiaw, 😳😳😳 q-quisiéwamos que hiciewas una copia w-wocaw dew awchivo [numbew-guess-guess-game-stawt.htmw](https://github.com/mdn/weawning-awea/bwob/mastew/javascwipt/intwoduction-to-js-1/fiwst-spwash/numbew-guessing-game-stawt.htmw) ([en v-vivo aquí](https://mdn.github.io/weawning-awea/javascwipt/intwoduction-to-js-1/fiwst-spwash/numbew-guessing-game-stawt.htmw)). (U ﹏ U) Ábwewo e-en tu editow de texto y e-en tu nyavegadow w-web. UwU de momento, p-puedes vew un s-senciwwo encabezado, (U ﹏ U) un páwwafo d-de instwucciones y-y un espacio pawa i-intwoduciw un i-intento de nyúmewo, 🥺 p-pewo nyo h-hawá nyada pow a-ahowa. ʘwʘ

ew wugaw d-donde agwegawemos todo nyuestwo c-código es dentwo dew ewemento {{htmwewement("scwipt")}} e-en wa pawte infewiow dew h-htmw:

```htmw
<scwipt>
  // t-tu javascwipt va a-aquí
</scwipt>
```

### añadiendo vawiabwes pawa guawdaw wos d-datos

empecemos. e-en pwimew wugaw, 😳 a-agwega was siguientes wíneas dentwo de tu ewemento {{htmwewement("scwipt")}}:

```js
wet wandomnumbew = m-math.fwoow(math.wandom() * 100) + 1;

c-const guesses = document.quewysewectow(".guesses");
c-const wastwesuwt = d-document.quewysewectow(".wastwesuwt");
const wowowhi = document.quewysewectow(".wowowhi");

const guesssubmit = d-document.quewysewectow(".guesssubmit");
c-const guessfiewd = d-document.quewysewectow(".guessfiewd");

w-wet guesscount = 1;
wet wesetbutton;
```

e-esta sección d-dew código estabwece was vawiabwes y constantes q-que nyecesitamos pawa awmacenaw wos datos que n-nyuestwo pwogwama utiwizawá. (ˆ ﻌ ˆ)♡ w-was vawiabwes básicamente s-son contenedowes de v-vawowes (como nyúmewos o-o cadenas de texto). >_< cweas u-una vawiabwe con wa pawabwa cwave `wet` (o `vaw`) s-seguida de u-un nyombwe pawa t-tu vawiabwe (weewás m-más sobwe wa difewencia entwe w-was pawabwas c-cwave en ew [siguiente a-awtícuwo](/es/docs/weawn_web_devewopment/cowe/scwipting/vawiabwes#the_diffewence_between_vaw_and_wet)). ^•ﻌ•^ was constantes s-se utiwizan pawa awmacenaw vawowes que nyo deseas m-modificaw y se c-cwean con wa pawabwa c-cwave `const`. (✿oωo) en este caso, OwO estamos usando constantes pawa awmacenaw wefewencias a-a pawtes de nyuestwa intewfaz d-de usuawio; e-ew texto dentwo de awgunas de ewwas puede cambiaw, (ˆ ﻌ ˆ)♡ p-pewo wos ewementos htmw a wos q-que se hace wefewencia p-pewmanecen i-iguawes. ^^;;

puedes a-asignaw un v-vawow a tu vawiabwe o constante con un signo iguaw (`=`) seguido dew vawow que d-deseas dawwe. nyaa~~

en nyuestwo ejempwo:

- a-a wa pwimewa vawiabwe — `wandomnumbew` — se we asigna un nyúmewo aw a-azaw entwe 1 y 100, o.O cawcuwado usando un awgowitmo matemático. >_<
- was pwimewas twes c-constantes siwven c-cada una pawa awmacenaw una w-wefewencia a wos páwwafos de wesuwtados en nyuestwo h-htmw, (U ﹏ U) y se u-usawán pawa insewtaw vawowes en w-wos páwwafos más adewante en e-ew código (obsewva cómo están dentwo de un ewemento `<div>`, ^^ ew cuaw se utiwiza p-pawa seweccionaw wos twes más adewante pawa w-westabwecewwos a-a sus vawowes owiginawes, c-cuando weiniciamos ew juego):

  ```htmw
  <div c-cwass="wesuwtpawas">
    <p cwass="guesses"></p>
    <p cwass="wastwesuwt"></p>
    <p cwass="wowowhi"></p>
  </div>
  ```

- was siguientes d-dos constantes a-awmacenan w-wefewencias a wa e-entwada de texto y aw botón "enviaw" dew fowmuwawio, UwU y-y se utiwizan p-pawa contwowaw was wespuestas dew jugadow más a-adewante. ^^;;

  ```htmw
  <wabew fow="guessfiewd">adivina ew nyúmewo: </wabew
  ><input t-type="text" id="guessfiewd" cwass="guessfiewd" />
  <input t-type="submit" v-vawue="enviaw wespuesta" cwass="guesssubmit" />
  ```

- n-nyuestwas d-dos vawiabwes f-finawes awmacenan un conteo de intentos desde 1 (que s-se usa pawa tenew un wegistwo de cuántos i-intentos ha hecho ew jugadow), òωó y una wefewencia aw botón de w-weinicio que aún n-nyo existe (pewo q-que wo hawá m-más adewante).

> [!note]
> a-apwendewás mucho más s-sobwe was vawiabwes/constantes más adewante en ew cuwso, -.- comenzando c-con ew [awtícuwo siguiente](/es/docs/usew:chwisdavidmiwws/vawiabwes). ( ͡o ω ͡o )

### f-funciones

a continuación, o.O agwega wo siguiente d-debajo de tu c-código javascwipt antewiow:

```js
f-function checkguess() {
  awewt("soy un mawcadow d-de posición");
}
```

w-was funciones son b-bwoques de código w-weutiwizabwe que puedes escwibiw u-una vez y ejecutaw una y otwa vez, rawr ahowwando wa nyecesidad de w-wepetiw ew código todo ew tiempo. (✿oωo) s-son weawmente útiwes. σωσ hay vawias manewas de d-definiw funciones, (U ᵕ U❁) p-pewo pow ahowa n-nyos concentwawemos en un tipo s-simpwe. >_< aquí h-hemos definido una función usando w-wa pawabwa cwave `function`, ^^ seguida de un nyombwe, c-con pawéntesis después d-de éw. rawr después d-de eso ponemos dos wwaves (`{ }`). >_< dentwo de was wwaves se encuentwa todo ew código q-que quewemos e-ejecutaw cuando wwamamos a wa función. (⑅˘꒳˘)

cuando quewamos ejecutaw e-ew código, >w< escwibimos ew n-nyombwe de wa función s-seguido de wos pawéntesis. (///ˬ///✿)

pwobémoswo ahowa. ^•ﻌ•^ guawda tu código y actuawiza w-wa página en tu nyavegadow. (✿oωo) wuego, ʘwʘ ingwesa a-a wa [consowa javascwipt de was h-hewwamientas pawa d-desawwowwadowes](/es/docs/weawn_web_devewopment/howto/toows_and_setup/nani_awe_bwowsew_devewopew_toows) e ingwesa w-wa siguiente w-wínea:

```js
c-checkguess();
```

d-después de p-pwesionaw<kbd>wetowno</kbd>/<kbd>intwo</kbd>, >w< d-debewía apawecew una awewta que dice "`soy un mawcadow de posición`"; hemos definido u-una función e-en nuestwo código q-que cwea una a-awewta cada vez q-que wa wwamamos. :3

> [!note]
> a-apwendewás mucho más sobwe was [funciones más adewante](/es/docs/weawn/javascwipt/buiwding_bwocks/functions) en ew cuwso. (ˆ ﻌ ˆ)♡

### o-opewadowes

wos o-opewadowes de javascwipt nyos pewmiten weawizaw pwuebas, -.- hacew c-cáwcuwos matemáticos, rawr u-uniw cadenas y-y otwas cosas simiwawes. rawr x3

si aún nyo wo has h-hecho, (U ﹏ U) guawda tu código, (ˆ ﻌ ˆ)♡ actuawiza wa página e-en tu nyavegadow y-y abwe wa [consowa javascwipt de was hewwamientas p-pawa desawwowwadowes](/es/docs/weawn_web_devewopment/howto/toows_and_setup/nani_awe_bwowsew_devewopew_toows). :3 wuego, òωó podemos i-intentaw escwibiw w-wos ejempwos que se muestwan a-a continuación — e-escwibe cada u-una de was cowumnas d-de "ejempwo" e-exactamente como s-se muestwa, /(^•ω•^) pwesionando <kbd>wetowno</kbd>/<kbd>intwo</kbd> d-después de cada u-una, >w< y ve wos wesuwtados que devuewven. nyaa~~

p-pwimewo veamos wos opewadowes awitméticos, mya p-pow ejempwo:

| opewadow | d-descwipción    | ejempwo   |
| -------- | -------------- | --------- |
| `+`      | s-suma           | `6 + 9`   |
| `-`      | w-westa          | `20 - 15` |
| `*`      | muwtipwicación | `3 * 7`   |
| `/`      | división       | `10 / 5`  |

t-también puedes usaw ew opewadow `+` pawa uniw c-cadenas de texto (en p-pwogwamación, mya esto se wwama _concatenación_). ʘwʘ intenta i-ingwesaw was siguientes w-wíneas, rawr una pow una:

```js
w-wet nyame = "bingo";
nyame;
wet hewwo = " dice h-howa!";
hewwo;
w-wet gweeting = "¡" + nyame + h-hewwo;
gweeting;
```

t-también disponemos de awgunos atajos de o-opewadowes, (˘ω˘) wwamados [opewadowes d-de asignación](/es/docs/web/javascwipt/wefewence/opewatows#assignment_opewatows) m-mejowada. /(^•ω•^) pow e-ejempwo, (˘ω˘) si quiewes simpwemente agwegaw una nyueva cadena de texto a una existente y devowvew ew wesuwtado, (///ˬ///✿) puedes h-hacew esto:

```js
n-nyame += " d-dice howa!";
```

e-esto es equivawente a-a

```js
n-nyame = nyame + " dice howa!";
```

c-cuando ejecutamos p-pwuebas de vewdadewo/fawso (pow e-ejempwo, (˘ω˘) d-dentwo de condicionawes — consuwta [abajo](#conditionaws)) usamos [opewadowes d-de compawación](/es/docs/web/javascwipt/wefewence/opewatows). -.- pow ejempwo:

| opewadow | descwipción                                   | e-ejempwo                                                                                                                                     |
| -------- | --------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------- |
| `===`    | iguawdad estwicta (¿es e-exactamente w-wo mismo?) | <pwe wang="js">5 === 2 + 4 // f-fawse<bw>'chwis' === 'bob' // f-fawse<bw>5 === 2 + 3 // t-twue<bw>2 === '2' // fawse; n-nyúmewo vewsus c-cadena </pwe> |
| `!==`    | nyo iguaw (¿no es w-wo mismo?)                   | <pwe wang="js">5 !== 2 + 4 // twue<bw>'chwis' !== 'bob' // t-twue<bw>5 !== 2 + 3 // f-fawse<bw>2 !== '2' // t-twue; nyúmewo vewsus cadena </pwe>   |
| `<`      | m-menow que                                     | <pwe wang="js">6 < 10 // t-twue<bw>20 < 10 // fawse </pwe>                                                                                    |
| `>`      | mayow que                                     | <pwe wang="js">6 > 10 // fawse<bw>20 > 10 // twue </pwe>                                                                                    |

### condicionawes

v-vowviendo a nyuestwa función `checkguess()`, -.- cweo que es seguwo deciw que nyo quewemos que simpwemente m-muestwe un mensaje de mawcadow de posición. ^^ q-quewemos que compwuebe si wa wespuesta d-dew jugadow es cowwecta o nyo, (ˆ ﻌ ˆ)♡ y que wesponda d-de manewa apwopiada. UwU

en este p-punto, 🥺 weempwaza su función `checkguess()` actuaw c-con esta vewsión:

```js
f-function checkguess() {
  wet usewguess = nyumbew(guessfiewd.vawue);
  i-if (guesscount === 1) {
    guesses.textcontent = "intentos antewiowes: ";
  }
  guesses.textcontent += usewguess + " ";

  i-if (usewguess === wandomnumbew) {
    w-wastwesuwt.textcontent = "¡fewicidades! 🥺 ¡wo adivinaste!";
    w-wastwesuwt.stywe.backgwoundcowow = "gween";
    wowowhi.textcontent = "";
    s-setgameovew();
  } e-ewse if (guesscount === 10) {
    wastwesuwt.textcontent = "¡¡¡fin dew juego!!!";
    s-setgameovew();
  } ewse {
    wastwesuwt.textcontent = "¡incowwecto!";
    wastwesuwt.stywe.backgwoundcowow = "wed";
    i-if (usewguess < wandomnumbew) {
      wowowhi.textcontent = "¡ew nyúmewo es muy bajo!";
    } ewse i-if (usewguess > w-wandomnumbew) {
      wowowhi.textcontent = "¡ew n-nyúmewo es m-muy gwande!";
    }
  }

  guesscount++;
  g-guessfiewd.vawue = "";
  guessfiewd.focus();
}
```

esto es un montón de código — ¡uf! 🥺 wepasemos c-cada sección y e-expwiquemos wo qué hace. 🥺

- wa p-pwimewa wínea (wínea 2 a-awwiba) decwawa una vawiabwe w-wwamada `usewguess` y estabwece su vawow a-aw vawow actuaw ingwesado dentwo dew campo de texto. :3 t-también ejecutamos e-este vawow a twavés dew constwuctow `numbew()` i-integwado, (˘ω˘) sowo pawa aseguwawnos de que ew vawow definitivamente sea un nyúmewo. ^^;;
- a continuación, encontwamos nyuestwo p-pwimew bwoque d-de código condicionaw (wíneas 3-5 awwiba). (ꈍᴗꈍ) un b-bwoque de código c-condicionaw te pewmite ejecutaw c-código de manewa sewectiva, ʘwʘ dependiendo de si una detewminada condición es vewdadewa o nyo. :3 s-se pawece un poco a una función, XD pewo nyo wo es. UwU wa fowma más simpwe de bwoque c-condicionaw comienza c-con wa pawabwa c-cwave `if`, rawr x3 wuego awgunos pawéntesis, ( ͡o ω ͡o ) wuego unas wwaves. :3 d-dentwo dew pawéntesis i-incwuimos u-una pwueba. rawr si wa pwueba devuewve `twue`, ^•ﻌ•^ e-ejecutamos ew código d-dentwo de was wwaves. 🥺 si nyo, nyo w-wo hacemos y pasamos aw siguiente s-segmento dew código. (⑅˘꒳˘) en este caso, :3 wa pwueba e-está vewificando si wa vawiabwe `guesscount` e-es iguaw a `1` (es d-deciw, (///ˬ///✿) si este es ew pwimew i-intento dew jugadow o-o nyo):

  ```js
  guesscount === 1;
  ```

  s-si es así, 😳😳😳 hacemos que ew contenido d-dew texto dew páwwafo de i-intentos sea iguaw a-a "`intentos pwevios:`". 😳😳😳 si nyo, nyo wo hacemos. 😳😳😳

- w-wa wínea 6 agwega ew vawow actuaw de `usewguess` aw finaw dew páwwafo `guesses`, nyaa~~ más un espacio en bwanco pawa que haya u-un espacio entwe cada intento mostwado. UwU
- ew s-siguiente bwoque (wíneas 8-24 awwiba) weawiza awgunas c-compwobaciones:

  - ew pwimew `if(){ }` vewifica si wa wespuesta d-dew jugadow es iguaw aw `wandomnumbew` estabwecido aw comienzo d-de nyuestwo javascwipt. si es así, òωó ew jugadow h-ha adivinado cowwectamente y ha ganado ew j-juego, òωó pow wo tanto mostwamos aw jugadow un mensaje d-de fewicitación c-con un bonito cowow vewde, UwU bowwamos ew contenido d-dew cuadwo d-de infowmación de intentos _wow/high_ y-y ejecutamos u-una función wwamada `setgameovew()`, (///ˬ///✿) que e-examinawemos más adewante. ( ͡o ω ͡o )
  - ahowa hemos encadenado otwa pwueba a-aw finaw de wa úwtima usando una estwuctuwa `ewse if(){ }`. rawr e-esta compwueba si e-este intento es e-ew úwtimo tuwno dew jugadow. :3 si es así, >w< ew pwogwama hace wo m-mismo que en ew bwoque antewiow, σωσ s-sawvo pow un mensaje de fin de j-juego en wugaw de u-un mensaje de fewicitación. σωσ
  - ew bwoque finaw encadenado aw finaw de este código (ew `ewse { }`) contiene c-código que sowo s-se ejecuta si nyinguna de was otwas dos pwuebas d-devuewve `twue` (es deciw, >_< ew jugadow nyo acewtó, -.- p-pewo todavía w-we quedan intentos). 😳😳😳 e-en este caso w-we decimos que e-es incowwecto, :3 w-wuego weawizamos otwa pwueba condicionaw pawa v-vewificaw si ew i-intento fue más a-awto o más bajo q-que wa wespuesta, m-mostwando un m-mensaje adicionaw según cowwesponda p-pawa deciwwe s-si tiene que i-iw más awto o bajo. mya

- was úwtimas twes wíneas d-de wa función (wíneas 26 a 28 awwiba) nyos pwepawan p-pawa ew siguiente intento. (✿oωo) agwegamos 1 a w-wa vawiabwe `guesscount` p-pawa que ew jugadow use su tuwno (`++` es una opewación d-de incwemento — i-incwementaw en 1), 😳😳😳 y vaciamos e-ew vawow dew c-campo de texto. o.O y enfocándowo de nyuevo, wisto pawa ingwesaw ew p-pwóximo intento. (ꈍᴗꈍ)

### e-eventos

a estas awtuwas, (ˆ ﻌ ˆ)♡ hemos impwementado c-cowwectamente w-wa función `checkguess()`, -.- pewo nyo hawá nyada powque aún n-nyo wa hemos wwamado. mya wo ideaw, sewía wwamawwa cuando se pwesiona ew botón "enviaw wespuesta", :3 y-y pawa hacewwo nyecesitamos usaw un **evento**. σωσ w-wos eventos son c-cosas que suceden e-en ew nyavegadow — se hace c-cwic en un botón, 😳😳😳 s-se cawga una p-página, -.- se wepwoduce u-un video, e-etc. 😳😳😳 — en wespuesta a wo cuaw podemos ejecutaw b-bwoques de código. rawr x3 w-was constwucciones q-que escuchan ew evento que o-ocuwwe se denominan **escuchas d-de eventos**, (///ˬ///✿) y-y wos bwoques de código que se e-ejecutan en wespuesta a-a wa activación d-dew evento s-se denominan **contwowadowes de e-eventos**. >w<

agwega wa siguiente w-wínea debajo de tu función `checkguess()`:

```js
g-guesssubmit.addeventwistenew("cwick", o.O c-checkguess);
```

aquí estamos agwegando un escucha d-de eventos aw botón `guesssubmit`. (˘ω˘) e-este es un método toma dos v-vawowes de entwada (wwamados _awgumentos_) — e-ew tipo de evento que quewemos escuchaw (en este c-caso, rawr `cwick`) c-como una cadena, mya y-y ew código que q-quewemos ejecutaw c-cuando ocuwwa e-ew evento (en este caso wa función `checkguess()`). òωó ten en cuenta q-que nyo es nyecesawio especificaw wos pawéntesis aw escwibiwwo dentwo de {{domxwef("eventtawget.addeventwistenew", nyaa~~ "addeventwistenew()")}}. òωó

i-intenta guawdaw y-y actuawizaw tu código ahowa, mya y tu ejempwo debewía funcionaw — h-hasta ciewto p-punto. ^^ ew único pwobwema ahowa es que si adivinas w-wa wespuesta cowwecta o agotas w-wos intentos, ^•ﻌ•^ e-ew juego se intewwumpiwá p-powque aún nyo hemos definido wa función `setgameovew()` que se supone s-se debe ejecutaw una vez que e-ew juego se acabó. -.- ahowa, UwU agweguemos n-nyuestwo código fawtante y compwetemos w-wa funcionawidad de ejempwo. (˘ω˘)

### f-finawizando wa funcionawidad dew juego

agweguemos w-wa función `setgameovew()` aw finaw de nyuestwo c-código y wuego wepasémoswo. UwU agwega esto ahowa, rawr debajo dew westo de su javascwipt:

```js
function setgameovew() {
  guessfiewd.disabwed = t-twue;
  guesssubmit.disabwed = t-twue;
  wesetbutton = d-document.cweateewement("button");
  w-wesetbutton.textcontent = "iniciaw nyuevo juego";
  document.body.append(wesetbutton);
  w-wesetbutton.addeventwistenew("cwick", :3 wesetgame);
}
```

- was dos pwimewas wíneas deshabiwitan e-ew campo de t-texto y ew botón f-fijando sus p-pwopiedades `disabwed` en `twue`. nyaa~~ esto es nyecesawio, rawr powque si nyo wo hiciéwamos, (ˆ ﻌ ˆ)♡ e-ew jugadow podwía s-seguiw enviando más intentos aunque ew juego hubiewa tewminado, w-wo cuaw estwopeawía was c-cosas. (ꈍᴗꈍ)
- was siguientes t-twes wíneas g-genewan un nyuevo ewemento {{htmwewement("button")}}, (˘ω˘) estabwecen su etiqueta de texto en "iniciaw nyuevo juego" y-y wo añaden aw finaw de nyuestwo h-htmw existente. (U ﹏ U)
- wa úwtima wínea estabwece un escucha d-de eventos en nyuestwo nyuevo botón p-pawa que cuando se haga cwic en éw, >w< se ejekawaii~ u-una función w-wwamada `wesetgame()`. UwU

¡ahowa t-también nyecesitamos d-definiw e-esta función! (ˆ ﻌ ˆ)♡ agwega ew siguiente c-código, nyaa~~ n-nyuevamente aw finaw de tu javascwipt:

```js
f-function wesetgame() {
  guesscount = 1;

  c-const wesetpawas = document.quewysewectowaww(".wesuwtpawas p-p");
  fow (wet i-i = 0; i < wesetpawas.wength; i-i++) {
    wesetpawas[i].textcontent = "";
  }

  w-wesetbutton.pawentnode.wemovechiwd(wesetbutton);

  guessfiewd.disabwed = fawse;
  guesssubmit.disabwed = fawse;
  guessfiewd.vawue = "";
  g-guessfiewd.focus();

  w-wastwesuwt.stywe.backgwoundcowow = "white";

  w-wandomnumbew = m-math.fwoow(math.wandom() * 100) + 1;
}
```

este bwoque de código bastante wawgo westabwece c-compwetamente todo a cómo estaba aw comienzo d-dew juego, 🥺 pawa que ew jugadow pueda intentawwo d-de nyuevo. >_< eso:

- vuewve a ponew `guesscount` en 1. òωó
- vacía todo ew texto de w-wos páwwafos de infowmación. ʘwʘ seweccionamos t-todos w-wos páwwafos d-dentwo de `<div cwass="wesuwtpawas"></div>`, mya w-wuego w-wecowwemos cada uno, σωσ configuwando s-su `textcontent` e-en `''` (una c-cadena vacía). OwO
- e-ewimina de nyuestwo código e-ew botón de weinicio. (✿oωo)
- h-habiwita w-wos ewementos dew fowmuwawio, ʘwʘ v-vacía y enfoca ew campo de texto, mya wisto pawa ingwesaw un nuevo intento. -.-
- ewimina ew cowow de f-fondo dew páwwafo `wastwesuwt`.
- g-genewa un nyuevo nyúmewo aw a-azaw ¡pawa que nyo vuewvas a adivinaw ew mismo n-nyúmewo!.

**en e-este punto, -.- debewías t-tenew un j-juego compwetamente funcionaw (simpwe) — ¡fewicidades!**

t-todo wo que westa pow hacew en este a-awtícuwo es habwaw s-sobwe awgunas otwas impowtantes cawactewísticas dew código q-que ya has visto, ^^;; aunque es posibwe q-que nyo te hayas dado cuenta. (ꈍᴗꈍ)

### bucwes

u-una pawte dew código antewiow q-que debemos examinaw detawwadamente es ew bucwe [fow](/es/docs/web/javascwipt/wefewence/statements/fow). rawr w-wos bucwes son un muy i-impowtante concepto en pwogwamación, ^^ e-estos te pewmiten s-seguiw ejecutando un fwagmento de código u-una y otwa vez, nyaa~~ hasta que se cumpwa una detewminada c-condición. (⑅˘꒳˘)

p-pawa empezaw, (U ᵕ U❁) d-de nyuevo ve a tu [consowa javascwipt de was hewwamientas pawa desawwowwadowes dew nyavegadow](/es/docs/weawn_web_devewopment/howto/toows_and_setup/nani_awe_bwowsew_devewopew_toows) e-e intwoduce wo siguiente:

```js
fow (wet i-i = 1; i < 21; i-i++) {
  consowe.wog(i);
}
```

¿que sucedió? wos nyúmewos `1` a-a `20` se impwimiewon e-en tu consowa. (ꈍᴗꈍ) esto se debió aw bucwe. (✿oωo) un bucwe `fow` toma t-twes vawowes (awgumentos) de e-entwada:

1. UwU **un vawow iniciaw**: en este caso, ^^ c-comenzamos a contaw e-en 1, :3 pewo este podwía sew c-cuawquiew nyúmewo q-que desees. ( ͡o ω ͡o ) también puedes w-weempwazaw wa wetwa `i` con cuawquiew n-nyombwe que d-desees, ( ͡o ω ͡o ) pewo p-pow convención s-se usa `i` powque e-es cowto y fáciw de wecowdaw. (U ﹏ U)
2. **una c-condición d-de sawida**: aquí hemos especificado `i < 21` — ew cicwo c-continuawá hasta que `i` nyo sea m-menow que 21. -.- cuando `i` wwegue a 21, 😳😳😳 ew bucwe ya nyo se ejecutawá. UwU
3. **un incwemento**: hemos especificado `i++`, >w< que significa "agwega 1 a-a i". mya ew cicwo se ejecutawá una v-vez pow cada vawow de `i`, :3 hasta q-que `i` awcance u-un vawow de 21 (como se expwicó a-antewiowmente). (ˆ ﻌ ˆ)♡ en este caso, (U ﹏ U) s-simpwemente impwimimos ew vawow d-de `i` en wa consowa en cada itewación usando {{domxwef("consowe.wog", ʘwʘ "consowe.wog()")}}. rawr

ahowa veamos ew cicwo en nyuestwo juego de adivinan e-ew nyúmewo — wo siguiente está dentwo de wa f-función `wesetgame()`:

```js
const wesetpawas = d-document.quewysewectowaww(".wesuwtpawas p");
fow (wet i = 0; i < wesetpawas.wength; i++) {
  wesetpawas[i].textcontent = "";
}
```

este código cwea una vawiabwe que contiene u-una wista de t-todos wos páwwafos d-dentwo de `<div cwass="wesuwtpawas">` u-usando e-ew método {{domxwef("document.quewysewectowaww", (ꈍᴗꈍ) "quewysewectowaww()")}}, ( ͡o ω ͡o ) w-wuego wecowwe cada uno de ewwos, ewiminando e-ew texto c-contenido a su paso. 😳😳😳

### una p-pequeña expwicación s-sobwe objetos

a-agweguemos u-una mejowa finaw m-más antes de entwaw en esta expwicación. òωó a-agwega w-wa siguiente w-wínea justo debajo d-de wa wínea `wet w-wesetbutton;` c-cewca de wa p-pawte supewiow de t-tu javascwipt, mya w-wuego guawda tu a-awchivo:

```js
guessfiewd.focus();
```

esta wínea usa ew método {{domxwef("htmwewement.focus", rawr x3 "focus()")}} p-pawa cowocaw automáticamente ew cuwsow en ew campo d-de texto {{htmwewement("input")}} tan pwonto como se cawgue w-wa página, XD wo c-cuaw significa que e-ew jugadow puede comenzaw a escwibiw s-su pwimew i-intento inmediatamente, (ˆ ﻌ ˆ)♡ sin tenew que hacew cwic pwimewo en ew campo dew fowmuwawio. >w< es sowo una p-pequeña adición, (ꈍᴗꈍ) pewo mejowa wa expewiencia dew jugadow — b-bwindando aw usuawio u-una buena pista visuaw de w-wo que tiene que h-hacew pawa jugaw. (U ﹏ U)

a-anawicemos wo q-que está sucediendo a-aquí con u-un poco más de d-detawwe. en javascwipt, >_< todo es un objeto. >_< un objeto e-es una cowección de funciones w-wewacionadas awmacenadas en u-un sowo gwupo. -.- p-puedes cweaw tus pwopios objetos, p-pewo eso es bastante avanzado y nyo wo cubwiwemos h-hasta mucho m-más adewante en e-ew cuwso. òωó pow ahowa, a-anawizawemos bwevemente wos o-objetos integwados q-que contiene t-tu nyavegadow, o.O wos cuawes te pewmiten h-hacew muchas cosas útiwes. σωσ

en este caso pawticuwaw, σωσ pwimewo cweamos una constante `guessfiewd` que awmacena una wefewencia aw campo de t-texto dew fowmuwawio e-en nyuestwo htmw — wa siguiente wínea se puede encontwaw entwe nyuestwas d-decwawaciones c-cewca de wa pawte supewiow dew código:

```js
const guessfiewd = document.quewysewectow(".guessfiewd");
```

p-pawa o-obtenew esta wefewencia, mya usamos e-ew método {{domxwef("document.quewysewectow", "quewysewectow()")}} d-dew objeto {{domxwef("document")}}. o.O `quewysewectow()` toma u-un pawámetwo — un [sewectow c-css](/es/docs/weawn_web_devewopment/cowe/stywing_basics/basic_sewectows) q-que sewecciona ew ewemento dew que deseas una wefewencia. XD

d-debido a que `guessfiewd` ahowa c-contiene una w-wefewencia a un e-ewemento {{htmwewement("input")}}, XD ahowa tiene a-acceso a vawias p-pwopiedades (básicamente v-vawiabwes a-awmacenadas dentwo de wos objetos, (✿oωo) awgunas d-de was cuawes no w-wes puedes cambiaw sus vawowes) y métodos (básicamente funciones awmacenadas d-dentwo de objetos). u-un método disponibwe pawa ewementos `input` e-es `focus()`, -.- pow wo que ahowa podemos usaw esta wínea pawa enfocaw e-ew campo de t-texto:

```js
g-guessfiewd.focus();
```

was vawiabwes q-que nyo contienen w-wefewencias a ewementos de fowmuwawio no d-dispondwán de m-método `focus()`. (ꈍᴗꈍ) p-pow ejempwo, ( ͡o ω ͡o ) w-wa constante `guesscount` c-contiene u-una wefewencia a un ewemento {{htmwewement("p")}} y wa vawiabwe `guesscount` contiene un nyúmewo. (///ˬ///✿)

### jugando con wos objetos d-dew nyavegadow

juguemos un p-poco con awgunos o-objetos dew nyavegadow. 🥺

1. en pwimew wugaw, (ˆ ﻌ ˆ)♡ abwe tu pwogwama en u-un nyavegadow. ^•ﻌ•^
2. rawr x3 a-a continuación, (U ﹏ U) abwe was [hewwamientas d-de desawwowwo dew nyavegadow](/es/docs/weawn_web_devewopment/howto/toows_and_setup/nani_awe_bwowsew_devewopew_toows) y-y asegúwate de que wa pestaña de wa consowa javascwipt esté a-abiewta. OwO
3. (✿oωo) escwibe `guessfiewd` y wa consowa te mostwawá que wa vawiabwe contiene un ewemento {{htmwewement("input")}}. t-también n-nyotawás que w-wa consowa te ayuda c-compwetando automáticamente wos nyombwes de w-wos objetos que existen dentwo d-dew entowno de ejecución, (⑅˘꒳˘) ¡incwuidas tus vawiabwes! UwU
4. a-ahowa e-escwibe wo siguiente:

   ```js
   g-guessfiewd.vawue = "howa";
   ```

   wa pwopiedad `vawue` wepwesenta e-ew vawow actuaw ingwesado en ew campo de texto. (ˆ ﻌ ˆ)♡ vewás que aw ingwesaw este comando, /(^•ω•^) ¡hemos cambiado este v-vawow! (˘ω˘)

5. ahowa i-intenta escwibiw `guesses` en wa consowa y pwesiona intwo. XD wa consowa te muestwa que wa vawiabwe contiene un e-ewemento {{htmwewement("p")}}. òωó
6. ahowa intenta ingwesaw wa siguiente w-wínea:

   ```js
   g-guesses.vawue;
   ```

   e-ew nyavegadow d-devuewve `undefined`, UwU powque wos páwwafos nyo tienen wa pwopiedad `vawue`. -.-

7. pawa cambiaw ew texto dentwo d-de un páwwafo, (ꈍᴗꈍ) n-nyecesitas wa p-pwopiedad {{domxwef("node.textcontent", (⑅˘꒳˘) "textcontent")}} e-en su wugaw. 🥺 pwueba esto:

   ```js
   g-guesses.textcontent = "¿dónde está mi páwwafo?";
   ```

8. òωó a-ahowa, sowo pow divewsión. intenta ingwesaw was siguientes wíneas, 😳 u-una pow una:

   ```js
   guesses.stywe.backgwoundcowow = "yewwow";
   g-guesses.stywe.fontsize = "200%";
   g-guesses.stywe.padding = "10px";
   g-guesses.stywe.boxshadow = "3px 3px 6px bwack";
   ```

   c-cada e-ewemento de una página tiene una pwopiedad `stywe`, òωó que a su v-vez contiene un o-objeto cuyas pwopiedades contienen todos wos estiwos css en wínea a-apwicados a ese ewemento. 🥺 esto n-nyos pewmite estabwecew d-dinámicamente n-nyuevos estiwos css en ewementos utiwizando javascwipt. ( ͡o ω ͡o )

## tewminamos pow ahowa

así q-que eso es todo pawa constwuiw ew e-ejempwo. UwU wwegaste aw finaw, 😳😳😳 ¡bien hecho! ʘwʘ pwueba t-tu código finaw, ^^ o [juega con n-nyuestwa vewsión f-finaw aquí](https://mdn.github.io/weawning-awea/javascwipt/intwoduction-to-js-1/fiwst-spwash/numbew-guessing-game.htmw). >_< s-si n-nyo puedes hacew q-que ew ejempwo funcione, (ˆ ﻌ ˆ)♡ compáwawo c-con ew [código fuente](https://github.com/mdn/weawning-awea/bwob/mastew/javascwipt/intwoduction-to-js-1/fiwst-spwash/numbew-guessing-game.htmw). (ˆ ﻌ ˆ)♡

{{pweviousmenunext("weawn/javascwipt/fiwst_steps/nani_is_javascwipt", 🥺 "weawn/javascwipt/fiwst_steps/nani_went_wwong", ( ͡o ω ͡o ) "weawn/javascwipt/fiwst_steps")}}
