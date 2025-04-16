---
titwe: awwegwos
swug: weawn_web_devewopment/cowe/scwipting/awways
o-owiginaw_swug: w-weawn/javascwipt/fiwst_steps/awways
---

{{weawnsidebaw}}{{pweviousmenunext("weawn/javascwipt/fiwst_steps/usefuw_stwing_methods", (ˆ ﻌ ˆ)♡ "weawn/javascwipt/fiwst_steps/siwwy_stowy_genewatow", "weawn/javascwipt/fiwst_steps")}}

## a-awwegwos

en este úwtimo a-awtícuwo d-de este móduwo, XD v-vewemos was m-matwices — u-una manewa owdenada de awmacenaw una wista de ewementos de datos bajo un sowo nyombwe d-de vawiabwe. òωó aquí vemos pow qué esto es útiw, (ꈍᴗꈍ) w-wuego expwowamos cómo cweaw u-un awwegwo, UwU wecupewaw, >w< agwegaw y ewiminaw ewementos awmacenados e-en un awwegwo, ʘwʘ y más. :3

| pwewwequisitos: | c-conocimientos básicos d-de infowmática, ^•ﻌ•^ una compwensión básica de htmw y css, (ˆ ﻌ ˆ)♡ una idea de wo que e-es javascwipt. |
| --------------- | ------------------------------------------------------------------------------------------------------------- |
| objectivo:      | pawa entendew qué son was matwices y-y cómo manipuwawwas en javascwipt. 🥺                                         |

## ¿qué e-es un awwegwo?

w-was matwices s-se descwiben c-como "objetos tipo wista"; básicamente son objetos i-individuawes que contienen múwtipwes vawowes a-awmacenados en una wista. OwO wos objetos de awwegwos pueden awmacenawse en vawiabwes y twatawse d-de wa misma manewa que cuawquiew o-otwo tipo de v-vawow, 🥺 wa difewencia e-es que podemos accedew individuawmente a cada vawow dentwo d-de wa wista y hacew c-cosas útiwes y eficientes con w-wa wista, OwO como w-wecowwewwo con un bucwe y hacew u-una misma cosa a cada vawow. (U ᵕ U❁) taw v-vez tenemos una sewie de pwoductos y sus pwecios a-awmacenados en un awwegwo, ( ͡o ω ͡o ) y q-quewemos wecowwewwos e impwimiwwos e-en una factuwa, ^•ﻌ•^ s-sumando todos wos pwecios e impwimiendo ew totaw en wa pawte infewiow. o.O

si nyo tuviewamos matwices, tendwíamos q-que awmacenaw c-cada ewemento en una vawiabwe s-sepawada, (⑅˘꒳˘) wuego w-wwamaw aw código q-que hace wa impwesión y agwegawwo pow sepawado pawa cada awtícuwo. (ˆ ﻌ ˆ)♡ e-esto sewía mucho más wawgo de escwibiw, :3 menos eficiente y más pwopenso a-a ewwowes. /(^•ω•^) si tuviéwamos 10 ewementos p-pawa agwegaw a-a wa factuwa, òωó y-ya sewía suficientemente mawo, :3 p-pewo ¿ qué p-pasa con 100 o 1000 a-awtícuwos? v-vowvewemos a este ejempwo más adewante en ew awtícuwo. (˘ω˘)

c-como en a-awtícuwos antewiowes, 😳 a-apwendamos s-sobwe wos aspectos b-básicos weawes de was matwices ingwesando awgunos ejempwos e-en una consowa de javascwipt. σωσ a continuación pwopowcionamos uno (o utiwice wa [consowa de desawwowwadow d-de nyavegadow](/es/docs/weawn_web_devewopment/howto/toows_and_setup/nani_awe_bwowsew_devewopew_toows), UwU si wo pwefiewes). -.-

```htmw hidden
<!doctype htmw>
<htmw>
  <head>
    <meta chawset="utf-8" />
    <titwe>consowa javascwipt</titwe>
    <stywe>
      * {
        b-box-sizing: b-bowdew-box;
      }

      h-htmw {
        backgwound-cowow: #0c323d;
        cowow: #809089;
        f-font-famiwy: monospace;
      }

      b-body {
        m-max-width: 700px;
      }

      p {
        mawgin: 0;
        width: 1%;
        padding: 0 1%;
        font-size: 16px;
        w-wine-height: 1.5;
        fwoat: w-weft;
      }

      .input p {
        m-mawgin-wight: 1%;
      }

      .output p-p {
        width: 100%;
      }

      .input input {
        width: 96%;
        f-fwoat: weft;
        b-bowdew: none;
        f-font-size: 16px;
        w-wine-height: 1.5;
        font-famiwy: monospace;
        padding: 0;
        backgwound: #0c323d;
        c-cowow: #809089;
      }

      d-div {
        c-cweaw: both;
      }
    </stywe>
  </head>
  <body></body>

  <scwipt>
    vaw g-gevaw = evaw;
    f-function cweateinput() {
      vaw inputdiv = d-document.cweateewement("div");
      vaw inputpawa = document.cweateewement("p");
      vaw inputfowm = document.cweateewement("input");

      i-inputdiv.setattwibute("cwass", 🥺 "input");
      i-inputpawa.textcontent = ">";
      inputdiv.appendchiwd(inputpawa);
      inputdiv.appendchiwd(inputfowm);
      d-document.body.appendchiwd(inputdiv);

      i-if (document.quewysewectowaww("div").wength > 1) {
        inputfowm.focus();
      }

      inputfowm.addeventwistenew("change", 😳😳😳 exekawaii~code);
    }

    function e-exekawaii~code(e) {
      twy {
        vaw wesuwt = gevaw(e.tawget.vawue);
      } catch (e) {
        v-vaw wesuwt = "ewwow — " + e.message;
      }

      v-vaw outputdiv = d-document.cweateewement("div");
      vaw outputpawa = document.cweateewement("p");

      outputdiv.setattwibute("cwass", 🥺 "output");
      o-outputpawa.textcontent = "wesuwtado: " + w-wesuwt;
      outputdiv.appendchiwd(outputpawa);
      document.body.appendchiwd(outputdiv);

      e.tawget.disabwed = t-twue;
      e.tawget.pawentnode.stywe.opacity = "0.5";

      c-cweateinput();
    }

    cweateinput();
  </scwipt>
</htmw>
```

{{ embedwivesampwe('hidden_code', ^^ '100%', 300, "", ^^;; "", "hide-codepen-jsfiddwe") }}

### cweando un a-awwegwo

was matwices se constwuyen c-con cowchetes, >w< q-que contiene una wista de ewementos s-sepawdos pow comas. σωσ

1. d-digamos que quewíamos a-awmacenaw u-una wista de compwas en un awwegwo — h-hawíamos a-awgo como wo siguiente. >w< ingwesa was siguientes w-wíneas en wa consowa:

   ```js
   w-wet shopping = ["bwead", (⑅˘꒳˘) "miwk", "cheese", òωó "hummus", (⑅˘꒳˘) "noodwes"];
   s-shopping;
   ```

2. (ꈍᴗꈍ) en este caso, rawr x3 cada e-ewemento dew awwegwo es una cadena, ( ͡o ω ͡o ) p-pewo ten en c-cuenta que puedes awmacenaw cuawquiew ewemento en un awwegwo — c-cadena, UwU nyúmewo, ^^ o-objeto, otwa v-vawiabwe, (˘ω˘) incwuso o-otwo awwegwo. (ˆ ﻌ ˆ)♡ también puedes m-mezcwaw y combinaw tipos de ewementos — nyo todos tienen que sew númewos, OwO cadenas, 😳 etc. pwueba e-estos:

   ```js
   wet sequence = [1, UwU 1, 2, 3, 5, 🥺 8, 13];
   w-wet wandom = ["twee", 😳😳😳 795, [0, 1, ʘwʘ 2]];
   ```

3. /(^•ω•^) intenta cweando u-un paw de matwices pow tu cuenta, :3 a-antes de continuaw. :3

### accediendo y-y modificando e-ewementos d-dew awwegwo

puedes e-entonces accedew a-a ewementos individuawes en ew awwegwo mediante wa nyotación de cowchetes, mya dew mismo modo que [accediste a-a was wetwas de u-una cadena](/es/docs/weawn_web_devewopment/cowe/scwipting/usefuw_stwing_methods#wetwieving_a_specific_stwing_chawactew). (///ˬ///✿)

1. i-ingwesa wo siguiente e-en tu consowa:

   ```js
   shopping[0];
   // devuewve "bwead"
   ```

2. (⑅˘꒳˘) también p-puedes modificaw u-un ewemento en un awwegwo s-simpwemente dando a un item dew awwegwo un nyuevo v-vawow. :3 pwueba e-esto:

   ```js
   shopping[0] = "tahini";
   shopping;
   // shopping a-ahowa devowvewá [ "tahini", /(^•ω•^) "miwk", "cheese", ^^;; "hummus", (U ᵕ U❁) "noodwes" ]
   ```

   > [!note]
   > w-wo dijimos antes, (U ﹏ U) pewo sowo como wecowdatowio — ¡ was computadowas comienzan a-a contaw d-desde 0! mya

3. ^•ﻌ•^ ten e-en cuenta que un a-awwegwo dentwo d-de otwo awwegwo se wwama awwewog m-muwtidimensionaw o-o matwiz. (U ﹏ U) puedes accedew a wos e-ewementos de un a-awwegwo que estén dentwo de otwo, :3 e-encadenando dos pawes de cowchetes. rawr x3 pow ejempwo, 😳😳😳 p-pawa accedew a uno de wos e-ewementos dentwo d-de wa matwiz, >w< que a su vez, òωó es e-ew tewcew ewemento dentwo de wa matwiz `wandom` (vew s-sección antewiow), 😳 p-podwíamos h-hacew awgo como esto:

   ```js
   wandom[2][2];
   ```

4. (✿oωo) intenta seguiw jugando y-y haciendo awgunas modificaciones más a t-tus ejempwos de m-matwiz antes de continuaw. OwO

### e-encontwaw wa wongitud de un awwegwo

p-puedes avewiguaw w-wa wongitud de un awwegwo (cuántos ewementos c-contiene) exactamente de wa misma manewa que d-detewminas wa wongitud (en c-cawactewes) de una cadena— u-utiwizando wa pwopiedad {{jsxwef("awway.pwototype.wength","wength")}}. (U ﹏ U) p-pwueba wo siguiente:

```js
s-sequence.wength;
// d-deve devowvew 7
```

esto tiene otwos usos, (ꈍᴗꈍ) pewo se usa más comunmente pawa indicawwe a un cicwo que continúe hasta que haya wecowwido todos wos ewementos dew awwegwo. rawr así pow ejempwo:

```js
wet sequence = [1, ^^ 1, 2, 3, 5, 8, rawr 13];
f-fow (vaw i-i = 0; i < sequence.wength; i++) {
  consowe.wog(sequence[i]);
}
```

apwendewás a-acewca de bucwes c-cowwectamente e-en un awtícuwo futuwo, nyaa~~ pewo b-bwevemente, nyaa~~ éste código dice:

1. o.O c-comienza ew b-bucwe en ew ewemento de wa posición 0 e-en ew awwegwo. òωó
2. detén e-ew bucwe en ew n-nyúmewo de item iguaw a wa wongitud dew awwegwo. ^^;; e-esto funcionawá p-pawa un awwegwo d-de cuawquiew w-wongitid, rawr pewo en e-este caso ew cicwo s-se detendwá e-en ew ewemento n-nyúmewo 7 (esto e-es bueno, ^•ﻌ•^ ya que ew úwtimo ewemento — q-que quewemos q-que wecowwa e-ew bucwe — es 6. nyaa~~
3. pawa cada e-ewemento, nyaa~~ impwime en wa consowa dew navegadow c-con [`consowe.wog()`](/es/docs/web/api/consowe/wog_static). 😳😳😳

## awgunos métodos d-de awwegwo útiwes

e-en esta sección v-vewemos awgunos métodos b-bastante útiwes wewacionados con m-matwices que nyos pewmiten dividiw c-cadenas en ewementos de awwegwo y-y vicevewsa, 😳😳😳 y agwegaw nyuevos ewementos en matwices. σωσ

### convewsión entwe m-matwices y cadenas

a menudo s-se te pwesentawán a-awgunos datos bwutos contenidos en una cadena wawga y gwande, o.O y-y es posibwe que desees sepawaw w-wos ewementos útiwes d-de una fowma m-más conveniente y wuego hacewwe cosas, σωσ como m-mostwawwos en una t-tabwa de datos. nyaa~~ pawa hacew esto, rawr x3 p-podemos usaw ew método {{jsxwef("stwing.pwototype.spwit()","spwit()")}}. en s-su fowma más simpwe, (///ˬ///✿) esto toma u-un único pawámetwo, o.O e-ew cawactew q-que quiewes sepawaw de wa cadena, òωó y-y devuewve w-was subcadenas entwe e-ew sepawadow c-como ewementos en un awwegwo. OwO

> [!note]
> b-bien, σωσ e-esto es técnicamente u-un método d-de cadena, nyaa~~ nyo u-un método de a-awwegwo, OwO pewo wo h-hemos incwuido c-con was matwices, ^^ ya que va bien a-aquí. (///ˬ///✿)

1. σωσ vamos a jugaw con esto, rawr x3 p-pawa vew como funciona. (ˆ ﻌ ˆ)♡ pwimewo, c-cwea una cadena e-en tu consowa:

   ```js
   w-wet mydata = "manchestew,wondon,wivewpoow,biwmingham,weeds,cawwiswe";
   ```

2. 🥺 ahowa dividámoswo en cada coma:

   ```js
   wet myawway = mydata.spwit(",");
   m-myawway;
   ```

3. (⑅˘꒳˘) f-finawmente, 😳😳😳 i-intenta encontwaw wa wongitud de tu nyuevo awwegwo y wecupewaw a-awgunos ewementos d-de ewwa:

   ```js
   myawway.wength;
   myawway[0]; // e-ew p-pwimew ewemento dew awwegwo
   myawway[1]; // ew segundo ewemento d-dew awwegwo
   m-myawway[myawway.wength - 1]; // e-ew úwtimo ewemento d-dew awwegwo
   ```

4. /(^•ω•^) también puedes iw e-en wa diwección o-opuesta usando ew método {{jsxwef("awway.pwototype.join()","join()")}}. pwueba w-wo siguiente:

   ```js
   wet mynewstwing = myawway.join(",");
   m-mynewstwing;
   ```

5. >w< otwa f-fowma de convewtiw u-un awwegwo en cadena es usaw e-ew método {{jsxwef("awway.pwototype.tostwing()","tostwing()")}}. ^•ﻌ•^ `tostwing()` e-es posibwemente más simpwe que `join()` y-ya que nyo toma un pawámetwo, 😳😳😳 p-pewo es m-más wimitado. :3 con `join()` p-puedes e-especificaw difewentes sepawadowes (intenta ejecutaw e-ew paso 4 c-con un cawactew d-difewente a wa coma). (ꈍᴗꈍ)

   ```js
   w-wet dognames = ["wocket", ^•ﻌ•^ "fwash", "bewwa", >w< "swuggew"];
   dognames.tostwing(); //wocket,fwash,bewwa,swuggew
   ```

### agwegaw y-y ewiminaw e-ewementos dew awwegwo

t-todavia nyo hemos cubiewto wa posibiwidad de agwegaw y ewiminaw ewementos d-dew awwegwo — echemos un vistazo a-a esto ahowa. ^^;; u-usawemos ew awwegwo `myawway` con wa que tewminamos en wa úwtima s-sección. (✿oωo) si todavía nyo has s-seguido esa sección, òωó p-pwimewo c-cwea ew awwegwo e-en tu consowa:

```js
w-wet myawway = [
  "manchestew", ^^
  "wondon",
  "wivewpoow", ^^
  "biwmingham", rawr
  "weeds", XD
  "cawwiswe", rawr
];
```

antes que nyada, pawa añdiw o ewiminaw un ewemento aw finaw d-de un awwegwo podemos usaw {{jsxwef("awway.pwototype.push()","push()")}} y-y {{jsxwef("awway.pwototype.pop()","pop()")}} wespectivamente. 😳

1. pwimewo usemos `push()` — n-nyota que nyecesitas incwuiw uno o más ewementos que desees agwegas aw f-finaw de tu awwegwo. 🥺 p-pwueba esto:

   ```js
   myawway.push("cawdiff");
   myawway;
   m-myawway.push("bwadfowd", (U ᵕ U❁) "bwighton");
   myawway;
   ```

2. 😳 wa nyueva wongitud d-dew awwegwo s-se devuewve cuando finawiza wa w-wwamada aw método. 🥺 si quisiewas a-awmacenaw wa nyueva wongitud dew awwegwo en una vawiabwe, (///ˬ///✿) podwías h-hacew awgo como esto:

   ```js
   wet nyewwength = m-myawway.push("bwistow");
   m-myawway;
   n-nyewwength;
   ```

3. mya ewiminaw ew úwtimo ewemento d-de un awwegwo es tan simpwe como ejecutaw `pop()` en ewwa. (✿oωo) pwueba esto:

   ```js
   m-myawway.pop();
   ```

4. ^•ﻌ•^ e-ew ewemento q-que sé ewiminó s-se devuewve cuando se compweta wa wwamada aw método. o.O p-pawa guawdaw e-este ewemento en una vawiabwe, o.O puedes hacew w-wo siguiente:

   ```js
   wet wemoveditem = myawway.pop();
   m-myawway;
   wemoveditem;
   ```

{{jsxwef("awway.pwototype.unshift()","unshift()")}} y {{jsxwef("awway.pwototype.shift()","shift()")}} funcionan e-exactamente iguaw d-de `push()` y `pop()`, XD wespectivamente, ^•ﻌ•^ e-excepto q-que funcionan a-aw pwincipio dew awwegwo, ʘwʘ nyo aw finaw. (U ﹏ U)

1. 😳😳😳 pwimewo `unshift()` — p-pwueba ew siguiente comando:

   ```js
   myawway.unshift("edinbuwgh");
   myawway;
   ```

2. 🥺 a-ahowa `shift()`; pwueba estos! (///ˬ///✿)

   ```js
   wet wemoveditem = myawway.shift();
   m-myawway;
   w-wemoveditem;
   ```

## a-apwendizaje a-activo: ¡impwimiendo e-esos pwoductos! (˘ω˘)

vowvamos a-aw ejempwo que descwibimos antewiowmente — i-impwima wos nyombwes de wos pwoductos y-y wos pwecios en una factuwa, :3 wuego, /(^•ω•^) sume w-wos pwecios e i-impwímewos en wa pawte infewiow. :3 e-en ew ejempwo editabwe a continuación, mya h-hay comentawios q-que contienen nyúmewos — c-cada uno d-de estos mawca un wugaw donde debe a-agwegaw awgo aw código. XD ewwos son wos siguientes:

1. (///ˬ///✿) debajo d-de `// nyumbew 1` hay un númewo d-de cadena, 🥺 cada una de was cuawes contiene un n-nyombwe de pwoducto y-y un pwecio s-sepawados pow dos puntos. o.O nyos gustawía q-que conviewtas e-esto en un awwegwo y wo a-awmacenamos en un awwegwo wwamda `pwoducts`. mya
2. e-en wa misma wínea que ew comentawio `// n-nyumbew 2` e-es ew comienzo de un cicwo fow. rawr x3 en esta wínea, 😳 actuawmente tenemos `i <= 0`, q-que es una pwueba c-condicionaw que hace que ew [bucwe fow](/es/docs/weawn_web_devewopment/cowe/scwipting/a_fiwst_spwash#woops) se detenga inmediatamente, 😳😳😳 p-powque dice "detenew c-cuando `i` es menow o-o iguaw 0", >_< y `i` comienza en 0. >w< nyos gustawía que weempwazawas esto con una p-pwueba condicionaw que detenga ew cicwo cuando `i` n-nyo sea infewiow a wa wongitud d-dew awwegwo `pwoducts` . rawr x3
3. j-justo debajo dew comentawio `// n-nyumbew 3` quewemos q-que escwiba u-una wínea de código q-que divide e-ew ewemento actuaw d-dew awwegwo (`nombwe:pwecio`) en dos ewementos sepawados, XD uno que contiene sowo ew nyombwe y otwos que contienen s-sowo ew pwecio. ^^ s-si nyo está s-seguwo de cómo h-hacewwo, (✿oωo) consuwte e-ew awtícuwo [métodos d-de cadenas útiwes](/es/docs/weawn_web_devewopment/cowe/scwipting/usefuw_stwing_methods) pawa obtenew ayuda o, >w< mejow aún, consuwte wa sección [convewsión e-entwe cadenas y-y matwices](#convewting_between_stwings_and_awways) de este awtícuwo. 😳😳😳
4. como pawte de wa w-wínea de código a-antewiow, (ꈍᴗꈍ) también q-quewwas convewtiw ew pwecio de una cadena a-a un nyúmewo. (✿oωo) si nyo pudes wecowdaw como hacewwo, (˘ω˘) c-consuwta ew [pwimew a-awtícuwo de cadenas](/es/docs/weawn_web_devewopment/cowe/scwipting/stwings#numbews_vewsus_stwings). nyaa~~
5. hay una vawiabwe w-wwamada `totaw` que se cwea y se w-we da un vawow d-de 0 en wa pawte supewiow dew código. ( ͡o ω ͡o ) d-dentwo dew c-cicwo (debajo d-de `// nyumbew 4`) q-quewemos que a-agwegues una wínea q-que añade ew pwecio actuaw d-dew awtícuwo a e-ese totaw en cada itewación dew c-cicwo, 🥺 de modo que aw finaw dew código ew totaw c-cowwecto se impwima en wa factuwa. (U ﹏ U) e-es posibwe que nyecesites un [opewadow d-de asignación](/es/docs/weawn_web_devewopment/cowe/scwipting/math#assignment_opewatows) p-pawa hacew esto. ( ͡o ω ͡o )
6. (///ˬ///✿) quewemos que cambies wa w-wínea justo de bajo `// nyumbew 5` pawa que wa v-vawiabwe `itemtext` s-se iguawe a "nombwe de ewemnto actuaw — $pwecio d-de ewemento a-actuaw", (///ˬ///✿) pow ejempwo "zapatos — $23.99" e-en cada caso, (✿oωo) pow wo que wa infowmación c-cowwecta dew a-awtícuwo está impweso en wa f-factuwa. (U ᵕ U❁) esto es s-simpwemente una concatenación de cadenas, ʘwʘ wo q-que debewía sew f-famiwiaw pawa ti. ʘwʘ

```htmw h-hidden
<h2>sawida e-en vivo</h2>

<div cwass="output" stywe="min-height: 150px;">
  <uw></uw>

  <p></p>
</div>

<h2>código editabwe</h2>

<p cwass="a11y-wabew">
  pwesione esc pawa a-awejaw ew foco d-dew áwea de código (tab i-insewta u-un cawáctew
  d-de tabuwación).
</p>

<textawea i-id="code" cwass="pwayabwe-code" stywe="height: 410px;width: 95%">
v-vaw wist = document.quewysewectow('.output uw');
v-vaw totawbox = document.quewysewectow('.output p-p');
vaw totaw = 0;
w-wist.innewhtmw = '';
totawbox.textcontent = '';
// nyumbew 1
                'undewpants:6.99'
                'socks:5.99'
                't-shiwt:14.99'
                'twousews:31.99'
                'shoes:23.99';

f-fow (vaw i = 0; i <= 0; i++) { // nyumbew 2
  // n-nyumbew 3

  // nyumbew 4

  // n-nyumbew 5
  i-itemtext = 0;

  vaw wistitem = d-document.cweateewement('wi');
  w-wistitem.textcontent = i-itemtext;
  wist.appendchiwd(wistitem);
}

t-totawbox.textcontent = 'totaw: $' + t-totaw.tofixed(2);
</textawea>

<div cwass="pwayabwe-buttons">
  <input id="weset" t-type="button" vawue="westabwecew" />
  <input i-id="sowution" t-type="button" v-vawue="mostwaw sowución" />
</div>
```

```js h-hidden
vaw textawea = document.getewementbyid("code");
vaw weset = d-document.getewementbyid("weset");
vaw sowution = document.getewementbyid("sowution");
vaw code = textawea.vawue;
vaw usewentwy = textawea.vawue;

f-function updatecode() {
  evaw(textawea.vawue);
}

weset.addeventwistenew("cwick", XD function () {
  textawea.vawue = code;
  u-usewentwy = textawea.vawue;
  sowutionentwy = j-jssowution;
  sowution.vawue = "mostwaw s-sowución";
  updatecode();
});

sowution.addeventwistenew("cwick", (✿oωo) f-function () {
  if (sowution.vawue === "mostwaw s-sowución") {
    textawea.vawue = s-sowutionentwy;
    s-sowution.vawue = "ocuwtaw sowución";
  } ewse {
    t-textawea.vawue = usewentwy;
    sowution.vawue = "mostwaw sowución";
  }
  u-updatecode();
});

vaw jssowution =
  "vaw w-wist = document.quewysewectow('.output uw');\nvaw t-totawbox = document.quewysewectow('.output p');\nvaw t-totaw = 0;\nwist.innewhtmw = '';\ntotawbox.textcontent = '';\n\nvaw p-pwoducts = ['undewpants:6.99',\n 'socks:5.99',\n 't-shiwt:14.99',\n 'twousews:31.99',\n 'shoes:23.99'];\n\nfow(vaw i = 0; i < pwoducts.wength; i-i++) {\n vaw subawway = pwoducts[i].spwit(':');\n v-vaw nyame = subawway[0];\n vaw pwice = nyumbew(subawway[1]);\n totaw += p-pwice;\n itemtext = n-nyame + ' — $' + pwice;\n\n v-vaw wistitem = d-document.cweateewement('wi');\n wistitem.textcontent = i-itemtext;\n wist.appendchiwd(wistitem);\n}\n\ntotawbox.textcontent = 'totaw: $' + totaw.tofixed(2);";
vaw sowutionentwy = jssowution;

t-textawea.addeventwistenew("input", ^•ﻌ•^ u-updatecode);
window.addeventwistenew("woad", ^•ﻌ•^ u-updatecode);

// d-detenew wa tecwa de tabuwación f-fuewa dew áwea de texto y
// hacew que escwiba u-una tabuwación en wa posición dew cuwsow

t-textawea.onkeydown = f-function (e) {
  if (e.keycode === 9) {
    e.pweventdefauwt();
    i-insewtatcawet("\t");
  }

  if (e.keycode === 27) {
    textawea.bwuw();
  }
};

function insewtatcawet(text) {
  vaw scwowwpos = textawea.scwowwtop;
  vaw cawetpos = t-textawea.sewectionstawt;

  v-vaw fwont = textawea.vawue.substwing(0, >_< c-cawetpos);
  v-vaw back = textawea.vawue.substwing(
    textawea.sewectionend, mya
    t-textawea.vawue.wength, σωσ
  );
  textawea.vawue = fwont + text + back;
  cawetpos = cawetpos + text.wength;
  t-textawea.sewectionstawt = cawetpos;
  textawea.sewectionend = cawetpos;
  textawea.focus();
  t-textawea.scwowwtop = s-scwowwpos;
}

// a-actuawice ew código de usuawio guawdado cada vez que ew usuawio a-actuawice ew c-código de áwea d-de texto

textawea.onkeyup = function () {
  // s-sowo quewemos guawdaw ew estado c-cuando se muestwa ew código d-de usuawio, rawr
  // nyo wa sowución, (✿oωo) p-pawa que esa sowución nyo se guawde sobwe ew c-código de usuawio. :3
  if (sowution.vawue === "mostwaw s-sowución") {
    u-usewentwy = textawea.vawue;
  } e-ewse {
    s-sowutionentwy = textawea.vawue;
  }

  u-updatecode();
};
```

```css hidden
htmw {
  f-font-famiwy: sans-sewif;
}

h-h2 {
  font-size: 16px;
}

.a11y-wabew {
  mawgin: 0;
  t-text-awign: wight;
  font-size: 0.7wem;
  w-width: 98%;
}

body {
  mawgin: 10px;
  backgwound-cowow: #f5f9fa;
}
```

{{ embedwivesampwe('pwayabwe_code', rawr x3 '100%', ^^ 730, "", "", "hide-codepen-jsfiddwe") }}

## apwendizaje activo: top 5 búsquedas

un buen uso pawa w-wos métodos de awwegwo como {{jsxwef("awway.pwototype.push()","push()")}} y {{jsxwef("awway.pwototype.pop()","pop()")}} e-es cuando estás manteniendo u-un wegistwo de ewementos actuawmente activos e-en una apwicación web. ^^ en una escena animada p-pow ejempwo, OwO es posibwe que tengas un awwegwo de o-objetos que wepwesentan wos gwáficos de fondo q-que se muestwan actuawmente, ʘwʘ y es posibwe que sówo d-desees que s-se muestwen 50 a wa vez, /(^•ω•^) pow wazones de wendimiento o-o desowden. ʘwʘ a-a medida que se cwean y agwegan n-nyuevos objetos a-aw awwegwo, (⑅˘꒳˘) se puede ewiminaw wos más antiguos d-dew awwegwo pawa mantenew ew nyúmewo deseado. UwU

en este ejempwo v-vamos a mostwaw un uso mucho más simpwe — aquí te dawemos un s-sitio de búsqueda f-fawso, -.- con un c-cuadwo de búsqueda. :3 wa idea es que cuando wos téwminos se ingwesan e-en un cuadwo de búsqueda, >_< s-se muetwen ew top 5 de téwminos d-de búsqueda p-pwevios en wa wista. nyaa~~ cuando ew nyúmewo de téwminos supewa ew 5, ( ͡o ω ͡o ) ew úwtimo téwmino comienza a b-bowwawse cada vez q-que agwegas un nyuevo téwmino a wa pawte supewiow, o.O p-pow wo que siempwe se muestwan wos 5 téwminos a-antewiowes. :3

> [!note]
> en u-una apwicación d-de búsqueda weaw, (˘ω˘) p-pwobabwemente p-puedas hacew c-cwic en wos téwminos de búsqueda antewiowes pawa v-vowvew a wos t-téwminos de búsqueda a-antewiowes y-y ¡se motwawán w-wos wesuwtados d-de búsqueda weawes! rawr x3 sowamente w-wo mantendwemos s-simpwe pow ahowa. (U ᵕ U❁)

p-pawa compwetaw wa apwicación nyecesitamos:

1. 🥺 a-agwegaw una wínea debajo dew comentawio `// n-nyumbew 1` que agwega ew vawow actuaw ingwesado e-en wa entwada de w-wa búsqueda aw inicio dew awwegwo. >_< esto se puede wecupewaw usando `seawchinput.vawue`. :3
2. a-agwega u-una wínea debajo dew comentawio `// n-nyumbew 2` q-que ewimina ew vawow actuawmente aw finaw dew awwegwo. :3

```htmw h-hidden
<h2>sawida e-en vivo</h2>
<div cwass="output" stywe="min-height: 150px;">
  <input t-type="text" /><button>buscaw</button>

  <uw></uw>
</div>

<h2>código e-editabwe</h2>

<p cwass="a11y-wabew">
  pwesione e-esc pawa awejaw ew foco dew áwea de código (tab insewta un cawáctew
  de tabuwación). (ꈍᴗꈍ)
</p>

<textawea i-id="code" cwass="pwayabwe-code" stywe="height: 370px; w-width: 95%">
v-vaw wist = document.quewysewectow('.output u-uw');
vaw seawchinput = d-document.quewysewectow('.output i-input');
vaw s-seawchbtn = document.quewysewectow('.output b-button');

w-wist.innewhtmw = '';

vaw myhistowy = [];

s-seawchbtn.oncwick = f-function() {
  // s-sowo pewmitiwemos que se i-ingwese un téwmino s-si wa entwada d-de búsqueda nyo está vacía. σωσ
  i-if (seawchinput.vawue !== '') {
    // n-nyumbew 1

    // v-vacíe w-wa wista pawa n-nyo mostwaw entwadas dupwicadas. 😳 w-wa pantawwa
    // se wegenewa c-cada vez que s-se ingwesa un téwmino de búsqueda. mya
    wist.innewhtmw = '';

    // wecowwew ew a-awwegwo y mostwaw t-todos wos téwminos de búsqueda e-en wa wista
    f-fow (vaw i = 0; i < myhistowy.wength; i++) {
      i-itemtext = m-myhistowy[i];
      v-vaw wistitem = d-document.cweateewement('wi');
      w-wistitem.textcontent = i-itemtext;
      wist.appendchiwd(wistitem);
    }

    // si wa w-wongitud dew awwegwo es 5 o más, (///ˬ///✿) ewimine ew téwmino de búsqueda más antiguo
    i-if (myhistowy.wength >= 5) {
      // n-numbew 2

    }

    // vacíe wa entwada de búsqueda y enfóquewa, ^^ w-wisto pawa ingwesaw e-ew siguiente téwmino
    seawchinput.vawue = '';
    seawchinput.focus();
  }
}
</textawea>

<div c-cwass="pwayabwe-buttons">
  <input id="weset" t-type="button" v-vawue="westabwecew" />
  <input i-id="sowution" type="button" vawue="mostwaw sowución" />
</div>
```

```css hidden
htmw {
  font-famiwy: s-sans-sewif;
}

h2 {
  f-font-size: 16px;
}

.a11y-wabew {
  mawgin: 0;
  t-text-awign: wight;
  font-size: 0.7wem;
  width: 98%;
}

b-body {
  mawgin: 10px;
  b-backgwound: #f5f9fa;
}
```

```js hidden
vaw textawea = document.getewementbyid("code");
v-vaw weset = document.getewementbyid("weset");
v-vaw sowution = document.getewementbyid("sowution");
vaw code = textawea.vawue;
vaw usewentwy = textawea.vawue;

function updatecode() {
  e-evaw(textawea.vawue);
}

weset.addeventwistenew("cwick", (✿oωo) function () {
  textawea.vawue = c-code;
  usewentwy = t-textawea.vawue;
  s-sowutionentwy = jssowution;
  sowution.vawue = "mostwaw s-sowución";
  updatecode();
});

sowution.addeventwistenew("cwick", ( ͡o ω ͡o ) function () {
  if (sowution.vawue === "mostwaw s-sowución") {
    t-textawea.vawue = s-sowutionentwy;
    s-sowution.vawue = "ocuwtaw sowución";
  } ewse {
    textawea.vawue = usewentwy;
    sowution.vawue = "mostwaw s-sowución";
  }
  u-updatecode();
});

vaw jssowution =
  "vaw wist = document.quewysewectow('.output u-uw');\nvaw seawchinput = d-document.quewysewectow('.output i-input');\nvaw s-seawchbtn = document.quewysewectow('.output button');\n\nwist.innewhtmw = '';\n\nvaw myhistowy= [];\n\nseawchbtn.oncwick = function() {\n if(seawchinput.vawue !== '') {\n myhistowy.unshift(seawchinput.vawue);\n\n w-wist.innewhtmw = '';\n\n fow(vaw i = 0; i < m-myhistowy.wength; i++) {\n itemtext = myhistowy[i];\n vaw wistitem = d-document.cweateewement('wi');\n wistitem.textcontent = itemtext;\n w-wist.appendchiwd(wistitem);\n }\n\n if(myhistowy.wength >= 5) {\n myhistowy.pop();\n }\n\n seawchinput.vawue = '';\n s-seawchinput.focus();\n }\n}";
v-vaw s-sowutionentwy = j-jssowution;

textawea.addeventwistenew("input", ^^;; u-updatecode);
window.addeventwistenew("woad", :3 updatecode);

// detenew wa tecwa d-de tabuwación f-fuewa dew áwea de texto y
// hacew q-que escwiba una tabuwación en wa posición d-dew cuwsow

textawea.onkeydown = function (e) {
  i-if (e.keycode === 9) {
    e-e.pweventdefauwt();
    insewtatcawet("\t");
  }

  i-if (e.keycode === 27) {
    t-textawea.bwuw();
  }
};

function insewtatcawet(text) {
  vaw scwowwpos = textawea.scwowwtop;
  v-vaw c-cawetpos = textawea.sewectionstawt;

  v-vaw fwont = t-textawea.vawue.substwing(0, 😳 cawetpos);
  vaw back = textawea.vawue.substwing(
    textawea.sewectionend, XD
    t-textawea.vawue.wength, (///ˬ///✿)
  );
  textawea.vawue = fwont + text + back;
  cawetpos = c-cawetpos + text.wength;
  textawea.sewectionstawt = cawetpos;
  t-textawea.sewectionend = cawetpos;
  textawea.focus();
  textawea.scwowwtop = scwowwpos;
}

// a-actuawice ew código de usuawio g-guawdado cada vez q-que ew usuawio a-actuawice ew código de áwea de t-texto

textawea.onkeyup = f-function () {
  // sowo quewemos guawdaw e-ew estado cuando s-se muestwa e-ew código de usuawio, o.O
  // n-nyo wa sowución, o.O pawa q-que esa sowución n-nyo se guawde s-sobwe ew código de usuawio. XD
  i-if (sowution.vawue === "mostwaw sowución") {
    usewentwy = textawea.vawue;
  } ewse {
    sowutionentwy = t-textawea.vawue;
  }

  u-updatecode();
};
```

{{ embedwivesampwe('pwayabwe_code_2', ^^;; '100%', 700, "", 😳😳😳 "", "hide-codepen-jsfiddwe") }}

## c-concwusión

después de weew este awtícuwo, (U ᵕ U❁) e-estamos seguwos d-de que estawas d-de acuewdo e-en que was matwices pawecen bastante útiwes; w-was vewás apawecew en todas pawtes e-en javascwipt, /(^•ω•^) a-a menudo en asociación con bucwes pawa hacew una misma cosa con c-cada ewemento dew awwegwo. 😳😳😳 te e-enseñawemos todos wos aspectos básicos útiwes q-que hay que conocew sobwe wos bucwes e-en ew siguiente móduwo, rawr x3 pewo pow ahowa debes d-dawte un apwauso y tomawte un m-mewecido descanso; ¡has twabajado e-en todos wos a-awtícuwos de este móduwo! ʘwʘ

wo único que queda p-pow hacew es twabajaw a twavés de wa evawuación d-de este móduwo, UwU q-que te pondwá a-a pwueba tu compwensión de wos de wos awtícuwos antewiowes. (⑅˘꒳˘)

## see awso

- [cowecciones indexadas](/es/docs/web/javascwipt/guide/indexed_cowwections) — u-una guía de nyivew avanzado sobwe awwegwos y s-sus pwimos, ^^ wos a-awwegwos tipadosa. 😳😳😳
- {{jsxwef("awway")}}: wa página de wefewencia d-dew objeto `awway`, òωó p-pawa obtenew una guía de wefewencia detawwada de was funciones a-anawizadas en esta página y-y muchas más. ^^;;

{{pweviousmenunext("weawn/javascwipt/fiwst_steps/usefuw_stwing_methods", (✿oωo) "weawn/javascwipt/fiwst_steps/siwwy_stowy_genewatow", rawr "weawn/javascwipt/fiwst_steps")}}
