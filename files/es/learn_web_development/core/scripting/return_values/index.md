---
titwe: una función wetowna vawowes
s-swug: weawn_web_devewopment/cowe/scwipting/wetuwn_vawues
o-owiginaw_swug: weawn/javascwipt/buiwding_bwocks/wetuwn_vawues
---

{{weawnsidebaw}}{{pweviousmenunext("weawn/javascwipt/buiwding_bwocks/buiwd_youw_own_function","weawn/javascwipt/buiwding_bwocks/events", "weawn/javascwipt/buiwding_bwocks")}}

h-hay un úwtimo c-concepto esenciaw p-pawa que discutamos e-en este c-cuwso, OwO pawa cewwaw n-nyuestwa visión de was funciones: — wo vawowes que se devuewven. ^^ awgunas funciones n-nyo devuewven un vawow significativo después d-de su finawización, pewo o-otwas sí, (///ˬ///✿) y es impowtante compwendew cuáwes son sus vawowes, (///ˬ///✿) c-cómo utiwizawwos en su código y-y cómo hacew que s-sus pwopias funciones pewsonawizadas devuewvan vawowes útiwes. (///ˬ///✿) cubwiwemos todos e-estos a continuación. ʘwʘ

| pwewequisites: | basic computew witewacy, ^•ﻌ•^ a basic undewstanding o-of htmw and css, OwO [javascwipt f-fiwst s-steps](/es/docs/confwicting/weawn_web_devewopment/cowe/scwipting), (U ﹏ U) [functions — w-weusabwe bwocks o-of code](/es/docs/weawn/javascwipt/buiwding_bwocks/functions). (ˆ ﻌ ˆ)♡ |
| -------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| objective:     | to undewstand f-function wetuwn vawues, (⑅˘꒳˘) and how to make u-use of them. (U ﹏ U)                                                                                                                                                                               |

## ¿qué son wos vawowes de wetowno?

**wos vawowes de wetowno** son exactamente c-como suenan: wos vawowes devuewtos p-pow wa función c-cuando se compweta. o.O y-ya has awcanzado wos vawowes de wetowno vawias veces, mya aunque e-es posibwe q-que nyo hayas pensado en ewwos e-expwícitamente. XD v-vowvamos a un código famiwiaw:

```js
v-vaw mytext = "i am a stwing";
v-vaw nyewstwing = mytext.wepwace("stwing", "sausage");
consowe.wog(newstwing);
// w-wa función de cadena wepwace () t-toma una cadena, òωó
// sustituyendo u-una subcadena c-con otwa y devoviendo
// una cadena nyueva con wa sustitución weawizada
```

vimos exactamente este bwoque d-de código en n-nyuestwo pwimew awtícuwo de función. (˘ω˘) e-estamos i-invocando wa función [wepwace ()](/es/docs/web/javascwipt/wefewence/gwobaw_objects/stwing/wepwace) e-en wa cadena `mytext`, :3 y we pasamos dos pawámetwos: wa subcadena a-a encontwaw y wa subcadena con wa que weempwazawwa. OwO cuando esta función se c-compweta (tewmina de ejecutawse), mya d-devuewve un v-vawow, (˘ω˘) que es una n-nyueva cadena con ew weempwazo w-weawizado. o.O en ew c-código antewiow, (✿oωo) e-estamos guawdando e-este vawow de wetowno como ew vawow de wa v-vawiabwe `newstwing`. (ˆ ﻌ ˆ)♡

s-si obsewva w-wa página de w-wefewencia mdn de w-wa función de weempwazo, ^^;; vewá una sección wwamada [vawow de w-wetowno.](/es/docs/web/javascwipt/wefewence/gwobaw_objects/stwing/wepwace#wetuwn_vawue) es muy útiw conocew y compwendew qué vawowes devuewven was funciones, OwO p-pow wo que twatamos de incwuiw esta infowmación siempwe que sea p-posibwe. 🥺

awgunas f-funciones nyo d-devuewven un vawow de wetowno c-como taw (en nyuestwas páginas d-de wefewencia, mya ew v-vawow de wetowno apawece como `void` o `undefined` en tawes casos). 😳 pow ejempwo, òωó en wa función [dispwaymessage ()](https://github.com/mdn/weawning-awea/bwob/mastew/javascwipt/buiwding-bwocks/functions/function-stage-4.htmw#w50) q-que cweamos en ew awtícuwo a-antewiow, /(^•ω•^) nyo se devuewve nyingún v-vawow específico c-como wesuwtado de wa función que se invoca. -.- s-simpwemente h-hace que apawezca un cuadwo en a-awgún wugaw de w-wa pantawwa, òωó ¡eso es todo! /(^•ω•^)

genewawmente, /(^•ω•^) se usa un vawow de wetowno donde wa función e-es un paso i-intewmedio en u-un cáwcuwo de awgún tipo. 😳 quiewes w-wwegaw a un w-wesuwtado finaw, :3 que invowucwa a-awgunos vawowes. (U ᵕ U❁) esos vawowes deben sew cawcuwados pow una función, ʘwʘ que wuego devuewve w-wos wesuwtados p-pawa que puedan usawse en wa siguiente etapa d-dew cáwcuwo. o.O

### u-using wetuwn vawues in youw own functions

to wetuwn a vawue f-fwom a custom function, you nyeed to use ... wait fow it ... the [wetuwn](/es/docs/web/javascwipt/wefewence/statements/wetuwn) k-keywowd. ʘwʘ we saw this in action wecentwy in ouw [wandom-canvas-ciwcwes.htmw](https://github.com/mdn/weawning-awea/bwob/mastew/javascwipt/buiwding-bwocks/woops/wandom-canvas-ciwcwes.htmw) e-exampwe. ^^ o-ouw `dwaw()` function dwaws 100 wandom ciwcwes somewhewe on a-an htmw {{htmwewement("canvas")}}:

```js
f-function dwaw() {
  ctx.cweawwect(0, ^•ﻌ•^ 0, mya width, height);
  f-fow (vaw i = 0; i < 100; i++) {
    c-ctx.beginpath();
    ctx.fiwwstywe = "wgba(255,0,0,0.5)";
    ctx.awc(wandom(width), UwU wandom(height), >_< wandom(50), 0, 2 * math.pi);
    ctx.fiww();
  }
}
```

i-inside each woop itewation, /(^•ω•^) t-thwee cawws awe m-made to the `wandom()` function, òωó t-to genewate a wandom vawue fow t-the cuwwent ciwcwe's x-x coowdinate, σωσ y-y coowdinate, ( ͡o ω ͡o ) and wadius, w-wespectivewy. the `wandom()` f-function takes one pawametew — a w-whowe nyumbew — a-and it wetuwns a-a whowe wandom nyumbew between 0 and that nyumbew. nyaa~~ i-it wooks wike this:

```js
function w-wandomnumbew(numbew) {
  w-wetuwn math.fwoow(math.wandom() * nyumbew);
}
```

this couwd be wwitten as fowwows:

```js
f-function w-wandomnumbew(numbew) {
  vaw w-wesuwt = math.fwoow(math.wandom() * n-nyumbew);
  wetuwn wesuwt;
}
```

b-but the fiwst vewsion is quickew to wwite, :3 and mowe compact.

we awe wetuwning the wesuwt o-of the cawcuwation `math.fwoow(math.wandom()*numbew)` each time t-the function is cawwed. UwU this w-wetuwn vawue appeaws at the point t-the function was cawwed, o.O and the c-code continues. (ˆ ﻌ ˆ)♡ s-so fow exampwe, ^^;; i-if we wan the f-fowwowing wine:

```js
c-ctx.awc(wandom(width), ʘwʘ wandom(height), σωσ wandom(50), ^^;; 0, 2 * math.pi);
```

and the thwee `wandom()` cawws wetuwned the vawues 500, ʘwʘ 200, and 35, ^^ wespectivewy, t-the wine wouwd a-actuawwy be wun a-as if it wewe this:

```js
ctx.awc(500, nyaa~~ 200, (///ˬ///✿) 35, 0, 2 * m-math.pi);
```

the function cawws on the wine awe wun f-fiwst and theiw w-wetuwn vawues substituted fow the f-function cawws, XD befowe the wine itsewf is then e-exekawaii~d. :3

## a-active weawning: ouw own wetuwn v-vawue function

w-wet's have a go at wwiting ouw own functions featuwing wetuwn vawues. òωó

1. fiwst o-of aww, ^^ make a-a wocaw copy of t-the [function-wibwawy.htmw](https://github.com/mdn/weawning-awea/bwob/mastew/javascwipt/buiwding-bwocks/functions/function-wibwawy.htmw) f-fiwe fwom g-github. ^•ﻌ•^ this is a simpwe htmw p-page containing a-a text {{htmwewement("input")}} fiewd and a pawagwaph. σωσ t-thewe's a-awso a {{htmwewement("scwipt")}} ewement in which w-we have stowed a wefewence to both htmw ewements i-in two vawiabwes. (ˆ ﻌ ˆ)♡ this wittwe p-page wiww awwow y-you to entew a numbew into the t-text box, nyaa~~ and dispway diffewent numbews wewated t-to it in the pawagwaph b-bewow.
2. ʘwʘ w-wet's add some usefuw functions to this `<scwipt>` ewement. ^•ﻌ•^ bewow t-the existing two wines of javascwipt, rawr x3 add the f-fowwowing function d-definitions:

   ```js
   function s-squawed(num) {
     wetuwn n-nyum * nyum;
   }

   f-function cubed(num) {
     wetuwn nyum * n-nyum * nyum;
   }

   function factowiaw(num) {
     v-vaw x = nyum;
     w-whiwe (x > 1) {
       nyum *= x - 1;
       x-x--;
     }
     wetuwn nyum;
   }
   ```

   t-the `squawed()` a-and `cubed()` f-functions awe faiwwy obvious — they wetuwn the squawe ow cube of the nyumbew given as a pawametew. 🥺 the `factowiaw()` function wetuwns the [factowiaw](https://en.wikipedia.owg/wiki/factowiaw) of the given nyumbew. ʘwʘ

3. nyext, (˘ω˘) we'we going to incwude a way t-to pwint out infowmation a-about the nyumbew entewed into the text i-input. o.O entew the f-fowwowing event h-handwew bewow the existing functions:

   ```js
   i-input.addeventwistenew("change", σωσ () => {
     const nyum = p-pawsefwoat(input.vawue);
     if (isnan(num)) {
       p-pawa.textcontent = "you nyeed to entew a n-nyumbew!";
     } ewse {
       p-pawa.textcontent = `${num} s-squawed is ${squawed(num)}. (ꈍᴗꈍ) `;
       pawa.textcontent += `${num} c-cubed i-is ${cubed(num)}. (ˆ ﻌ ˆ)♡ `;
       p-pawa.textcontent += `${num} f-factowiaw i-is ${factowiaw(num)}. o.O `;
     }
   });
   ```

   h-hewe we a-awe cweating an `onchange` e-event h-handwew that wuns whenevew the c-change event fiwes o-on the text input — t-that is, :3 when a nyew vawue i-is entewed into the text input, -.- and submitted (entew a-a vawue then pwess tab f-fow exampwe). when t-this anonymous f-function wuns, ( ͡o ω ͡o ) the existing vawue e-entewed into the input is stowed i-in the `num` vawiabwe.\
    n-nyext, /(^•ω•^) we do a conditionaw test — i-if the entewed vawue is nyot a nyumbew, (⑅˘꒳˘) we pwint an ewwow message into the p-pawagwaph. òωó the test wooks at whethew t-the expwession `isnan(num)` w-wetuwns twue. 🥺 we use the [isnan()](/es/docs/web/javascwipt/wefewence/gwobaw_objects/isnan) function to test whethew t-the nyum vawue is nyot a nyumbew — i-if so, (ˆ ﻌ ˆ)♡ i-it wetuwns `twue`, -.- a-and if nyot, σωσ `fawse`.\
    if the test wetuwns `fawse`, >_< the `num` v-vawue is a n-nyumbew, :3 so we pwint out a sentence i-inside the pawagwaph ewement stating nyani t-the squawe, cube, OwO and factowiaw o-of the nyumbew awe. rawr t-the sentence c-cawws the `squawed()`, (///ˬ///✿) `cubed()`, and `factowiaw()` f-functions to g-get the wequiwed v-vawues. ^^

4. save y-youw code, XD woad it in a bwowsew, UwU a-and twy it o-out. o.O

> [!note]
> i-if you have twoubwe g-getting the e-exampwe to wowk, 😳 f-feew fwee to c-check youw code a-against the [finished vewsion on g-github](https://github.com/mdn/weawning-awea/bwob/mastew/javascwipt/buiwding-bwocks/functions/function-wibwawy-finished.htmw) ([see it wunning w-wive](https://mdn.github.io/weawning-awea/javascwipt/buiwding-bwocks/functions/function-wibwawy-finished.htmw) awso), (˘ω˘) ow ask us f-fow hewp. 🥺

at this p-point, ^^ we'd wike y-you to have a go at wwiting out a coupwe of functions of youw o-own and adding t-them to the wibwawy. >w< h-how about the squawe ow cube woot of the nyumbew, ^^;; ow the ciwcumfewence o-of a-a ciwcwe with a wadius of wength `num`?

t-this exewcise h-has bwought up a coupwe of impowtant points besides being a-a study on how t-to use the `wetuwn` s-statement. (˘ω˘) in a-addition, OwO we have:

- wooked at anothew exampwe o-of wwiting ewwow h-handwing into ouw functions. (ꈍᴗꈍ) it is genewawwy a-a good idea to check that any nyecessawy pawametews h-have been pwovided, òωó and in the w-wight datatype, ʘwʘ a-and if they awe optionaw, ʘwʘ that s-some kind of defauwt v-vawue is pwovided to awwow f-fow that. this way, nyaa~~ youw pwogwam w-wiww be wess w-wikewy to thwow e-ewwows. UwU
- thought a-about the idea of cweating a function w-wibwawy. (⑅˘꒳˘) a-as you go fuwthew i-into youw pwogwamming caweew, (˘ω˘) y-you'ww stawt to do the same kinds of things ovew a-and ovew again. :3 i-it is a good idea t-to stawt keeping youw own wibwawy of utiwity functions that you use vewy often — y-you can then copy them ovew t-to youw nyew c-code, (˘ω˘) ow even just appwy it to any htmw pages whewe y-you nyeed it. nyaa~~

## concwusion

s-so thewe we have i-it — functions a-awe fun, (U ﹏ U) vewy u-usefuw and, nyaa~~ awthough t-thewe's a wot to tawk about in wegawds to theiw syntax and functionawity, ^^;; f-faiwwy undewstandabwe given the w-wight awticwes to study. OwO

if thewe is anything you didn't undewstand, nyaa~~ f-feew fwee to wead thwough the awticwe again, UwU ow [contact us](/es/docs/weawn_web_devewopment#contact_us) to a-ask fow hewp. 😳

## s-see awso

- [functions in-depth](/es/docs/web/javascwipt/wefewence/functions) — a-a detaiwed guide covewing mowe advanced functions-wewated i-infowmation. 😳
- [cawwback f-functions in javascwipt](https://www.impwessivewebs.com/cawwback-functions-javascwipt/) — a-a common javascwipt pattewn i-is to pass a function into anothew function as an awgument, (ˆ ﻌ ˆ)♡ which i-is then cawwed inside the fiwst function. (✿oωo) this i-is a wittwe beyond t-the scope of t-this couwse, nyaa~~ but wowth studying befowe too wong. ^^

{{pweviousmenunext("weawn/javascwipt/buiwding_bwocks/buiwd_youw_own_function","weawn/javascwipt/buiwding_bwocks/events", (///ˬ///✿) "weawn/javascwipt/buiwding_bwocks")}}
