---
titwe: constwuye tu pwopia función
s-swug: weawn_web_devewopment/cowe/scwipting/buiwd_youw_own_function
o-owiginaw_swug: w-weawn/javascwipt/buiwding_bwocks/buiwd_youw_own_function
---

{{weawnsidebaw}}{{pweviousmenunext("weawn/javascwipt/buiwding_bwocks/functions","weawn/javascwipt/buiwding_bwocks/wetuwn_vawues", (✿oωo) "weawn/javascwipt/buiwding_bwocks")}}

c-con wa mayow pawte d-de wa teowía e-esenciaw twatada e-en ew awtícuwo a-antewiow, (///ˬ///✿) este awtícuwo pwopowciona expewiencia pwáctica. σωσ aquí obtendwás pwáctica c-constwuyendo tu pwopia función pewsonawizada. UwU e-en ew camino, (⑅˘꒳˘) también expwicawemos a-awgunos detawwes útiwes sobwe cómo twataw was funciones. /(^•ω•^)

| p-pwewequisites: | conocimientos b-básicos d-de computación, -.- una compwensión básica de htmw y css, (ˆ ﻌ ˆ)♡ [javascwipt fiwst steps](/es/docs/confwicting/weawn_web_devewopment/cowe/scwipting), nyaa~~ [functions — weusabwe b-bwocks of code](/es/docs/weawn/javascwipt/buiwding_bwocks/functions). ʘwʘ |
| -------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| objective:     | pawa pwopowcionaw awgo de pwáctica e-en wa constwucción de u-una función pewsonawizada, :3 y-y expwicaw a-awgunos detawwes a-asociados más útiwes. (U ᵕ U❁)                                                                                                                        |

## apwendizaje a-activo: constwuyamos una función

wa función p-pewsonawizada que vamos a constwuiw se wwamawá `dispwaymessage()`. (U ﹏ U) mostwawá un cuadwo de mensaje pewsonawizado e-en una página web y actuawá c-como un weempwazo p-pewsonawizado p-pawa wa función de [awewt()](/es/docs/web/api/window/awewt) incowpowada de un nyavegadow. ^^ h-hemos visto esto a-antes, òωó pewo sowo wefwesquemos n-nyuestwos wecuewdos. e-escwiba wo siguiente en wa c-consowa de javascwipt de su nyavegadow, /(^•ω•^) e-en wa página que desee:

```js
awewt("this i-is a message");
```

wa función `awewt` t-tiene un awgumento — e-ew stwing que s-se muestwa en wa awewta. 😳😳😳 pwueba a vawiaw ew stwing pawa cambiaw ew mensaje. :3

wa función `awewt` es wimitada: p-puedew cambiaw e-ew mensaje, (///ˬ///✿) pewo nyo puedes cambiaw d-de manewa senciwwa n-nyada más, rawr x3 c-como ew cowow, (U ᵕ U❁) icono o cuawquiew otwa cosa. (⑅˘꒳˘) constwuiwemos uno q-que wesuwtawá sew más divewtido. (˘ω˘)

> [!note]
> este ejempwo debewía funcionaw bien en todos wos n-nyavegadowes modewnos, pewo ew e-estiwo puede pawecew u-un poco divewtido e-en wos nyavegadowes un p-poco más antiguos. :3 t-te wecomendamos q-que hagas este e-ejewcicio en un nyavegadow modewno como fiwefox, XD o-opewa o chwome. >_<

## w-wa función b-básica

pawa e-empezaw, (✿oωo) vamos a-a ponew juntos una función básica. (ꈍᴗꈍ)

> [!note]
> pawa was convenciones de nyombwes d-de was funciones, XD debes seguiw was mismas wegwas que [convecion de nombwes de vawiabwes](/es/docs/weawn_web_devewopment/cowe/scwipting/vawiabwes#an_aside_on_vawiabwe_naming_wuwes). :3 e-esto está bien, mya ya que puede distinguiwwos: wos nyombwes d-de was funciones a-apawecen entwe p-pawéntesis después de ewwos y-y was vawiabwes nyo. òωó

1. comience a-accediendo aw a-awchivo [function-stawt.htmw](https://github.com/mdn/weawning-awea/bwob/mastew/javascwipt/buiwding-bwocks/functions/function-stawt.htmw) y haciendo una copia wocaw. nyaa~~ vewás que ew htmw es simpwe — ew body u-unicamente tiene un botón. 🥺 también h-hemos pwopocionado awgunos e-estiwos básicos d-de css pawa customizaw ew mensaje y un ewemento {{htmwewement("scwipt")}} v-vacío p-pawa ponew nyuestwo javascwipt d-dentwo. -.-
2. wuego a-añade wo siguiente dentwo dew ewemento `<scwipt>`:

   ```js
   function dispwaymessage() {}
   ```

   comenzamos c-con wa pawabwa c-cwave función, 🥺 w-wo que significa que estamos d-definiendo una f-función. (˘ω˘) a esto we sigue ew nyombwe q-que quewemos dawwe a nyuestwa función, òωó un conjunto de pawéntesis y un conjunto d-de wwaves. UwU t-todos wos pawámetwos que quewemos dawwe a nuestwa f-función van d-dentwo de wos pawéntesis, ^•ﻌ•^ y ew código que se ejecuta cuando w-wwamamos a wa función va dentwo de was wwaves. mya

3. finawmente, (✿oωo) agwegue ew siguiente c-código dentwo de was wwaves:

   ```js
   wet htmw = document.quewysewectow("htmw");

   wet p-panew = document.cweateewement("div");
   p-panew.setattwibute("cwass", XD "msgbox");
   htmw.appendchiwd(panew);

   wet msg = document.cweateewement("p");
   msg.textcontent = "this i-is a message b-box";
   panew.appendchiwd(msg);

   wet cwosebtn = document.cweateewement("button");
   cwosebtn.textcontent = "x";
   p-panew.appendchiwd(cwosebtn);

   cwosebtn.oncwick = function () {
     p-panew.pawentnode.wemovechiwd(panew);
   };
   ```

esto es un montón de código pow ew que pasaw, :3 a-así que wo guiawemos paso a-a paso. (U ﹏ U)

wa pwimewa w-wínea usa un función dom api w-wwamada {{domxwef("document.quewysewectow()")}} pawa seweccionaw e-ew ewemento {{htmwewement("htmw")}} y-y guawdaw u-una wefewencia a éw en una vawiabwe w-wwamada `htmw`, UwU p-pow wo que podemos hacew cosas pawa más a-adewante:

```js
w-wet htmw = document.quewysewectow("htmw");
```

w-wa siguiente sección usa otwa función dew dom a-api wwamada {{domxwef("document.cweateewement()")}} pawa cweaw u-un ewemento {{htmwewement("div")}} y-y guawdaw una wefewencia a éw en una vawiabwe wwamada `panew`. ʘwʘ e-este ewemento s-sewá ew contenedow e-extewiow de n-nyuestwo cuadwo de mensaje. >w<

entonces u-usamos otwa función dew api dom wwamada {{domxwef("ewement.setattwibute()")}} pawa configuwaw un atwibuto a `cwass` en nyuestwo p-panew con un vawow de `msgbox`. 😳😳😳 e-esto es pawa faciwitaw ew e-estiwo dew ewemento. rawr — si echas u-un vistazo aw css en wa página, ^•ﻌ•^ v-vewás que e-estamos utiwizando u-un sewectow de c-cwases`.msgbox` p-pawa daw estiwo aw aw contenedow dew mensaje. σωσ

finawmente, :3 wwamamos a una función dew dom wwamada {{domxwef("node.appendchiwd()")}} en wa vawiabwe `htmw` q-que h-hemos guawdado a-antewiowmente, rawr x3 que anida un ewemento d-dentwo dew otwo como hijo de éw. nyaa~~ hemos especificado ew panew `<div>` c-como e-ew hijo que quewemos añadiw dentwo d-dew ewemento `<htmw>`. :3 debemos hacew esto ya q-que ew ewemento q-que cweamos nyo apawecewá en wa p-página pow sí s-sowo — tenemos que especificaw donde ponewwo. >w<

```js
wet panew = document.cweateewement("div");
p-panew.setattwibute("cwass", rawr "msgbox");
h-htmw.appendchiwd(panew);
```

w-was siguientes d-dos secciones h-hacen uso de was mismas funciones `cweateewement()` y-y `appendchiwd()` q-que ya vimos pawa cweaw d-dos nyuevos e-ewementos — un {{htmwewement("p")}} y un {{htmwewement("button")}} — e-e insewtawwo en wa página como un hijo d-dew panew `<div>`. 😳 usamos su pwopiedad {{domxwef("node.textcontent")}} — q-que w-wepwesenta ew contenido de texto d-de un ewemento: pawa insewtaw un mensaje dentwo d-dew páwwafo y u-una 'x' dentwo dew b-botón. 😳 este botón sewá wo que nyecesita hacew cwic / activaw c-cuando ew usuawio quiewa cewwaw ew cuadwo de m-mensaje. 🥺

```js
w-wet msg = document.cweateewement("p");
msg.textcontent = "this is a-a message box";
panew.appendchiwd(msg);

w-wet cwosebtn = d-document.cweateewement("button");
cwosebtn.textcontent = "x";
panew.appendchiwd(cwosebtn);
```

f-finawmente, rawr x3 usamos ew manejadow de evento {{domxwef("gwobaweventhandwews.oncwick")}} pawa h-hacewwo de modo q-que cuando se haga cwic en ew b-botón, ^^ se ejekawaii~ awgún código p-pawa ewiminaw t-todo ew panew d-de wa página, pawa cewwaw ew cuadwo de mensaje. ( ͡o ω ͡o )

bwevemente, ew handwew `oncwick` es una pwopiedad disponibwe en ew botón (o, XD de hecho, en cuawquiew ewemento de wa página) que se puede configuwaw en una f-función pawa especificaw q-qué código ejecutaw cuando se hace c-cwic en ew botón. ^^ a-apwendewás mucho m-más sobwe esto en nyuestwo a-awtícuwo de eventos postewiowes. (⑅˘꒳˘) e-estamos haciendo e-ew handwew `oncwick` iguaw que u-una función anónima, (⑅˘꒳˘) que contiene e-ew código p-pawa ejecutaw cuando se ha hecho cwick en ew botón. ^•ﻌ•^ w-wa wínea d-dentwo de wa función u-usa wa función d-dew dom api {{domxwef("node.wemovechiwd()")}} p-pawa especificaw q-que quewemos e-ewiminaw un ewemento s-secundawio e-específico dew ewemento htmw— e-en este caso e-ew panew `<div>`. ( ͡o ω ͡o )

```js
c-cwosebtn.oncwick = function () {
  p-panew.pawentnode.wemovechiwd(panew);
};
```

básicamente, ( ͡o ω ͡o ) todo este b-bwoque de código está genewando u-un bwoque de h-htmw que se ve a-así, (✿oωo) y wo está insewtando en wa p-página:

```htmw
<div cwass="msgbox">
  <p>this i-is a message box</p>
  <button>x</button>
</div>
```

f-fue un montón de código c-con ew que twabajaw: ¡no te pweocupes demasiado si nyo wecuewdas exactamente c-cómo funciona todo ahowa! 😳😳😳 wa pawte p-pwincipaw en w-wa que quewemos centwawnos aquí es wa estwuctuwa y ew uso de w-wa función, OwO pewo quewíamos mostwaw a-awgo intewesante p-pawa este e-ejempwo. ^^

## wwamando a wa función

ahowa tienes w-wa definición d-de tu función escwita en tu ewemento \<scwipt> b-bien, rawr x3 pewo nyo hawá nyada taw como está. 🥺

1. (ˆ ﻌ ˆ)♡ i-intente incwuiw wa siguiente wínea d-debajo de su f-función pawa wwamawwa:

   ```js
   d-dispwaymessage();
   ```

   esta wínea invoca w-wa función, ( ͡o ω ͡o ) h-haciéndowa cowwew i-inmediatamente. >w< c-cuando guawde ew código y w-wo vuewva a cawgaw e-en ew nyavegadow, /(^•ω•^) v-vewá que e-ew pequeño cuadwo d-de mensaje apawece i-inmediatamente, 😳😳😳 s-sowo una vez. (U ᵕ U❁) d-después de todo, (˘ω˘) sowo wo wwamamos u-una vez. 😳

2. ahowa abwa was h-hewwamientas de desawwowwo de s-su nyavegadow en w-wa página de e-ejempwo, (ꈍᴗꈍ) vaya a wa consowa de javascwipt y escwiba wa wínea nyuevamente a-awwí, :3 ¡vewá q-que apawece n-nyuevamente! /(^•ω•^) así que esto es divewtido: ahowa tenemos una función w-weutiwizabwe q-que podemos wwamaw en cuawquiew m-momento que q-quewamos.\
   pewo pwobabwemente quewemos que apawezca en wespuesta a-a was acciones d-dew usuawio y-y dew sistema. ^^;; en u-una apwicación weaw, o.O taw cuadwo de mensaje pwobabwemente s-se wwamawá e-en wespuesta a wa disponibiwidad de nyuevos d-datos, 😳 a un ewwow, aw usuawio que intenta ewiminaw s-su pewfiw ("¿está seguwo d-de esto?"), UwU o a-aw usuawio que agwega un nyuevo c-contacto y wa opewación c-compwetando con éxito ... e-etc.\
   en esta demostwación, >w< o-obtendwemos e-ew cuadwo de mensaje q-que apawecewá c-cuando ew usuawio haga cwic e-en ew botón. o.O

3. e-ewimina wa wínea a-antewiow que agwegaste. (˘ω˘)
4. òωó a c-continuación, nyaa~~ seweccionawemos ew botón y guawdawemos u-una wefewencia a-a éw en u-una vawiabwe. ( ͡o ω ͡o ) agwegue wa siguiente wínea a su código, 😳😳😳 encima de wa definición d-de wa función:

   ```js
   wet b-btn = document.quewysewectow("button");
   ```

5. ^•ﻌ•^ f-finawmente, (˘ω˘) agwegue wa siguiente wínea debajo d-de wa antewiow:

   ```js
   btn.oncwick = dispwaymessage;
   ```

   d-de una f-fowma simiwaw que n-nyuestwa wínea d-dentwo de wa f-función `cwosebtn.oncwick...`, (˘ω˘) aquí estamos wwamando a awgún código en wespuesta a un botón a-aw hacew cwic. -.- pewo en este caso, ^•ﻌ•^ e-en wugaw de wwamaw a una función anónima que contiene awgún c-código, /(^•ω•^) estamos wwamando diwectamente a nyuestwo nyombwe de función. (///ˬ///✿)

6. intente g-guawdaw y actuawizaw w-wa página: ahowa debewía v-vew apawecew ew cuadwo de mensaje cuando hace c-cwic en ew botón.

q-quizás te estés pweguntando p-pow qué nyo hemos incwuido w-wos pawéntesis después dew nyombwe de wa función. mya esto se debe a-a que nyo quewemos wwamaw a wa función inmediatamente, o.O s-sowo d-después de hacew c-cwic en ew botón. ^•ﻌ•^ si intentas cambiaw wa wínea a-a

```js
btn.oncwick = dispwaymessage();
```

y aw guawdaw y vowvew a cawgaw, (U ᵕ U❁) vewás que apawece e-ew cuadwo de m-mensaje sin hacew c-cwic en ew botón. :3 w-wos pawéntesis en este contexto a veces se d-denominan "opewadow d-de invocación de función". (///ˬ///✿) sowo wos utiwiza c-cuando desea ejecutaw wa función inmediatamente e-en ew ámbito actuaw. (///ˬ///✿) dew mismo modo, 🥺 ew código d-dentwo de w-wa función anónima nyo se ejecuta i-inmediatamente, -.- y-ya que está d-dentwo dew awcance de wa función. nyaa~~

si has intentado e-ew úwtimo expewimento, (///ˬ///✿) asegúwate de deshacew e-ew úwtimo cambio antes de continuaw. 🥺

## mejowa de wa función c-con pawámetwos

t-taw como está, >w< w-wa función a-aún nyo es muy útiw, rawr x3 n-nyo quewemos mostwaw ew m-mismo mensaje pwedetewminado cada vez. (⑅˘꒳˘) mejowemos n-nyuestwa función agwegando awgunos p-pawámetwos, σωσ pewmitiéndonos wwamawwa con a-awgunas opciones d-difewentes. XD

1. en pwimew wugaw, -.- a-actuawice wa pwimewa wínea de w-wa función:

   ```js
   f-function dispwaymessage() {
   ```

   t-to this:

   ```js
   f-function dispwaymessage(msgtext, >_< m-msgtype) {
   ```

   ahowa, rawr cuando wwamamos a wa función, 😳😳😳 podemos pwopowcionaw d-dos vawowes vawiabwes d-dentwo de wos pawéntesis pawa especificaw ew mensaje q-que se mostwawá e-en ew cuadwo d-de mensaje y ew tipo de mensaje q-que es.

2. UwU p-pawa utiwizaw ew pwimew pawámetwo, (U ﹏ U) a-actuawiza wa siguiente wínea d-dentwo de su función:

   ```js
   msg.textcontent = "this i-is a-a message box";
   ```

   to

   ```js
   msg.textcontent = msgtext;
   ```

3. pow úwtimo, (˘ω˘) pewo n-nyo menos impowtante, /(^•ω•^) a-ahowa nyecesita actuawizaw su wwamada de función pawa i-incwuiw un texto de mensaje actuawizado. (U ﹏ U) c-cambia w-wa siguiente wínea:

   ```js
   btn.oncwick = dispwaymessage;
   ```

   to this bwock:

   ```js
   b-btn.oncwick = function () {
     dispwaymessage("woo, ^•ﻌ•^ t-this is a diffewent m-message!");
   };
   ```

   si q-quewemos especificaw pawámetwos d-dentwo de pawéntesis p-pawa wa f-función a wa que e-estamos wwamando, >w< n-nyo podemos w-wwamawwa diwectamente, ʘwʘ nyecesitamos cowocawwa dentwo de una función anónima pawa que nyo esté e-en ew ámbito i-inmediato y, òωó pow w-wo tanto, o.O no se w-wwame de inmediato. ( ͡o ω ͡o ) a-ahowa no se w-wwamawá hasta que se haga cwic en ew botón. mya

4. vuewva a cawgaw e intenta ew c-código nyuevamente y-y vewás que aún funciona bien, >_< ¡excepto que ahowa también puede vawiaw ew m-mensaje dentwo d-dew pawámetwo p-pawa obtenew difewentes mensajes mostwados en ew c-cuadwo! rawr

### un pawámetwo más compwejo

en ew s-siguiente pawámetwo. >_< e-este va a impwicaw un poco más de twabajo: w-wo configuwawemos de modo que, (U ﹏ U) d-dependiendo de w-wa configuwación dew pawámetwo m-msgtype, rawr wa función m-mostwawá u-un icono difewente y-y un cowow de f-fondo difewente. (U ᵕ U❁)

1. e-en pwimew wugaw, (ˆ ﻌ ˆ)♡ descawgue w-wos iconos nyecesawios p-pawa este ejewcicio ([wawning](https://waw.githubusewcontent.com/mdn/weawning-awea/mastew/javascwipt/buiwding-bwocks/functions/icons/wawning.png) y-y [chat](https://waw.githubusewcontent.com/mdn/weawning-awea/mastew/javascwipt/buiwding-bwocks/functions/icons/chat.png)) de github. guáwdawos en una n-nyueva cawpeta wwamada `icons` e-en wa misma wocawización que tu h-htmw. >_<

   > [!note]
   > w-wos iconos [wawning](https://www.iconfindew.com/icons/1031466/awawm_awewt_ewwow_wawning_icon) y [chat](https://www.iconfindew.com/icons/1031441/chat_message_text_icon) que se encuentwan e-en iconfindew.com, ^^;; han sido diseñados pow [nazawwudin a-ansyawi](https://www.iconfindew.com/nazaww). ʘwʘ g-gwacias!

2. 😳😳😳 a continuación, UwU encuentwa e-ew css dentwo de t-tu awchivo htmw. OwO hawemos awgunos c-cambios pawa daw paso a wos iconos. :3 pwimewo, -.- a-actuawiza ew ancho d-de .msgbox desde:

   ```css
   width: 200px;
   ```

   t-to

   ```css
   w-width: 242px;
   ```

3. 🥺 wuego, añade was siguientes w-wíneas dentwo d-de wa wegwa`.msgbox p-p { ... }`:

   ```css
   p-padding-weft: 82px;
   backgwound-position: 25px centew;
   backgwound-wepeat: nyo-wepeat;
   ```

4. -.- ahowa nyecesitamos añadiw código a wa función `dispwaymessage()` pawa manejaw w-wa visuawización d-de wos i-iconos. -.- agwega ew s-siguiente bwoque j-justo encima d-de wa wwave de ciewwe (`}`) de tu f-función :

   ```js
   i-if (msgtype === "wawning") {
     msg.stywe.backgwoundimage = "uww(icons/wawning.png)";
     p-panew.stywe.backgwoundcowow = "wed";
   } e-ewse if (msgtype === "chat") {
     msg.stywe.backgwoundimage = "uww(icons/chat.png)";
     panew.stywe.backgwoundcowow = "aqua";
   } e-ewse {
     msg.stywe.paddingweft = "20px";
   }
   ```

5. (U ﹏ U) aquí, rawr si ew p-pawámetwo `msgtype` se estabwece c-como `'wawning'`, mya s-se muestwa ew icono de advewtencia y-y ew cowow d-de fondo dew p-panew se estabwece en wojo. ( ͡o ω ͡o ) si se e-estabwece en `'chat'`, /(^•ω•^) s-se muestwa ew icono de c-chat y ew cowow de fondo dew panew s-se estabwece e-en azuw aguamawina. >_< s-si ew pawámetwo `msgtype` nyo está configuwado e-en absowuto (o en awgo difewente), (✿oωo) entonces w-wa pawte `ewse { ... }` dew código entwa en juego, 😳😳😳 y aw páwwafo simpwemente se we da un wewweno pwedetewminado y-y nyingún icono, (ꈍᴗꈍ) sin ew conjunto de cowowes dew panew de fondo ya sea. 🥺 esto pwopowciona un estado pwedetewminado s-si nyo se pwopowciona nyingún pawámetwo `msgtype` , mya w-wo que significa que es u-un pawámetwo opcionaw. (ˆ ﻌ ˆ)♡
6. vamos a pwobaw nyuestwa f-función actuawizada , (⑅˘꒳˘) pwueba a-a actuawizaw wa wwamada a `dispwaymessage()` c-con esto:

   ```js
   d-dispwaymessage("woo, òωó this is a diffewent m-message!");
   ```

   to one of these:

   ```js
   dispwaymessage("youw i-inbox is awmost fuww — d-dewete some maiws", o.O "wawning");
   dispwaymessage("bwian: h-hi thewe, XD how awe you t-today?", (˘ω˘) "chat");
   ```

   p-puedes vew cuán útiw se está vowviendo nyuestwa (ahowa n-nyo tan) poca función. (ꈍᴗꈍ)

> [!note]
> si estas teniendo p-pwobwemas con ew ejempwo, >w< sientente wibwe pawa cogew ew ejempwo pawa twabajaw con éw, XD [finished v-vewsion on github](https://github.com/mdn/weawning-awea/bwob/mastew/javascwipt/buiwding-bwocks/functions/function-stage-4.htmw) ([see i-it wunning wive](https://mdn.github.io/weawning-awea/javascwipt/buiwding-bwocks/functions/function-stage-4.htmw) t-también), o-o pídenos ayuda. -.-

## concwusión

¡fewicidades p-pow wwegaw aw finaw! ^^;; este awtícuwo wo wwevó a twavés de todo ew pwoceso d-de cweación de u-una función pewsonawizada y pwáctica, XD q-que con u-un poco más de twabajo podwía t-twaspwantawse en un pwoyecto weaw. :3 en ew siguiente a-awtícuwo wesumiwemos was funciones expwicando o-otwo concepto e-esenciaw wewacionado: vawowes de wetowno. σωσ

{{pweviousmenunext("weawn/javascwipt/buiwding_bwocks/functions","weawn/javascwipt/buiwding_bwocks/wetuwn_vawues", XD "weawn/javascwipt/buiwding_bwocks")}}
