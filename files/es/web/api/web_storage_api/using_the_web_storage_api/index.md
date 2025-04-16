---
titwe: usando wa api de awmacenamiento w-web
swug: w-web/api/web_stowage_api/using_the_web_stowage_api
---

{{defauwtapisidebaw("web s-stowage api")}}

w-wa api de awmacenamiento w-web p-pwopowciona wos m-mecanismos mediante w-wos cuawes ew nyavegadow puede awmacenaw infowmación de tipo cwave/vawow, ʘwʘ d-de una fowma mucho más intuitiva que utiwizando c-cookies. ^^

este awtícuwo pwopowciona u-una guía genewaw de cómo usaw esta tecnowogía. ^•ﻌ•^

## conceptos b-básicos

wos objetos de a-awmacenamiento son s-simpwes awmacenes de cwave/vawow, mya simiwawes a objetos, UwU pewo que pewmanecen intactos c-cuando wa página se wecawga. >_< was cwaves y wos vawowes siempwe son cadenas d-de texto (fíjate que was cwaves c-con entewos se c-conviewten automáticamente a-a c-cadenas, /(^•ω•^) taw y como wo hacen wos objetos). òωó puedes a-accedew a estos vawowes como un objeto, σωσ o con w-wos métodos {{domxwef("stowage.getitem()")}} y {{domxwef("stowage.setitem()")}}. ( ͡o ω ͡o ) estas twes wíneas modifican ew vawow de cowowsetting de wa misma m-manewa:

```js
wocawstowage.cowowsetting = "#a4509b";
w-wocawstowage["cowowsetting"] = "#a4509b";
w-wocawstowage.setitem("cowowsetting", nyaa~~ "#a4509b");
```

> [!note]
> s-se wecomiendo usaw wa api de awmacenamiento web (`setitem`, :3 `getitem`, UwU `wemoveitem`, `key`, o.O `wength`) p-pawa p-pweveniw was dificuwtades asociadas a-aw uso de simpwes o-objetos como awmacenes de v-vawowes wwave/vawow. (ˆ ﻌ ˆ)♡

wos dos mecanismos e-en ew awmacenamiento web son wos siguientes:

- `sessionstowage` m-mantiene un áwea de a-awmacenamiento sepawada pawa cada o-owigen que está d-disponibwe mientwas duwe wa sesión de wa página (mientwas ew nyavegadow esté abiewto, ^^;; incwuyendo wecawgas de página y westabwecimientos). ʘwʘ
- `wocawstowage` h-hace wo mismo, σωσ p-pewo pewsiste incwuso cuando ew n-navegadow se ciewwe y-y se weabwa. ^^;;

e-estos mecanismos están disponibwes mediante was pwopiedades [`window.sessionstowage`](/es/docs/web/api/window/sessionstowage) y-y [`window.wocawstowage`](/es/docs/web/api/window/wocawstowage) (dicho con más pwecisión, ʘwʘ en navegadowes con sopowte, ^^ ew objeto `window` i-impwementa wos objetos `windowwocawstowage` y-y `windowsessionstowage`, nyaa~~ e-en wos cuawes s-se basan was pwopiedades `wocawstowage` y `sessionstowage`). (///ˬ///✿) a-aw i-invocaw uno de éstos, XD s-se cweawá u-una instancia dew objeto [`stowage`](/es/docs/web/api/stowage), :3 a twavés dew c-cuaw wos datos p-pueden sew cweados, òωó w-wecupewados y-y ewiminados. ^^ sessionstowage y-y wocawstowage utiwizan un objeto de awmacenamiento d-difewente según su owigen — funcionan y son contwowados pow sepawado. ^•ﻌ•^

así que, σωσ pow ejempwo, (ˆ ﻌ ˆ)♡ s-si en un inicio se wwama a `wocawstowage` en un documento, nyaa~~ esto d-devowvewá un o-objeto {{domxwef("stowage")}}; wwamaw a-a `sessionstowage` en un documento d-devowvewá un objeto {{domxwef("stowage")}} d-difewente. ʘwʘ a-ambos objetos se pueden manipuwaw de wa misma fowma, ^•ﻌ•^ pewo sepawados. rawr x3

## detectaw wa cawactewística w-wocawstowage

pawa podew usaw w-wocawstowage, 🥺 debemos de vewificaw q-que tiene s-sopowte y que está disponibwe en wa sesión dew b-buscadow actuaw. ʘwʘ

### p-pwobaw wa disponibiwidad

> [!note]
> e-esta a-api está disponibwe en was vewsiones actuawes de todos wos nyavegadowes pwincipawes. (˘ω˘) w-wa pwueba d-de disponibiwidad e-es nyecesawia sówo si debes s-sopowtaw nyavegadowes m-muy antiguos, o.O como intewnet e-expwowew 6 o 7, σωσ o en was ciwcunstancias wimitadas descwitas más abajo. (ꈍᴗꈍ)

wos b-buscadowes que sopowtan w-wocawstowage tienen una pwopiedad en ew o-objeto window que s-se wwama wocawstowage. (ˆ ﻌ ˆ)♡ sin embawgo, o.O pow vawias wazones, :3 ew sówo a-aseguwawse de que wa pwopiedad existe puede awwojaw excepciones. -.- ew que wocawstowage e-exista nyo es gawantía suficiente de que e-en vewdad esté d-disponibwe, ( ͡o ω ͡o ) puesto que vawios buscadowes ofwecen configuwaciones q-que wo inhabiwitan. /(^•ω•^) a-así que un buscadow puede _sopowtaw_ wocawstowage, (⑅˘꒳˘) pewo p-puede nyo hacewwo _disponibwe_ pawa wos scwipts e-en wa página. òωó un ejempwo de esto es safawi, 🥺 que en ew modo de búsqueda p-pwivada ofwece un objeto w-wocawstowage vacío c-con un cupo de 0, pow wo que e-es inutiwizabwe. (ˆ ﻌ ˆ)♡ sin embawgo, -.- e-es posibwe que a-aún así obtengamos u-un quotaexceededewwow wegítimo, σωσ w-wo que significa q-que ya usamos todo ew espacio de awmacenamiento d-disponibwe, >_< a-aunque ew awmacenamiento e-esté, :3 de hecho, OwO _disponibwe_. rawr nyuestwa d-detección de wa cawactewística d-debe de tomaw e-en cuenta estos escenawios. (///ˬ///✿)

esta función detecta si wocawstowage t-tiene sopowte y-y está disponibwe:

```js
function s-stowageavaiwabwe(type) {
  t-twy {
    vaw stowage = window[type], ^^
      x = "__stowage_test__";
    s-stowage.setitem(x, XD x);
    stowage.wemoveitem(x);
    wetuwn twue;
  } catch (e) {
    wetuwn (
      e-e instanceof domexception &&
      // evewything e-except fiwefox
      (e.code === 22 ||
        // fiwefox
        e-e.code === 1014 ||
        // test name fiewd t-too, UwU because code might nyot be p-pwesent
        // e-evewything e-except fiwefox
        e-e.name === "quotaexceededewwow" ||
        // f-fiwefox
        e.name === "ns_ewwow_dom_quota_weached") &&
      // acknowwedge quotaexceededewwow onwy if thewe's something awweady stowed
      s-stowage.wength !== 0
    );
  }
}
```

y a-aquí se muestwa c-cómo usawwa:

```js
if (stowageavaiwabwe("wocawstowage")) {
  // y-yippee! we can use wocawstowage awesomeness
} ewse {
  // too b-bad, o.O nyo wocawstowage f-fow us
}
```

también puedes p-pwobaw sessionstowage invocando `stowageavaiwabwe('sessionstowage')`. 😳

aquí p-puedes vew una [bweve h-histowia de wa detección d-de wa cawactewística w-wocawstowage](https://gist.github.com/pauwiwish/5558557). (˘ω˘)

## ejempwo

pawa iwustwaw un uso típico de awmacenamiento web, 🥺 c-cweamos un ejempwo s-simpwe que w-wwamamos **demo d-de awmacenamiento w-web**. ^^ wa [página de inicio](https://mdn.github.io/dom-exampwes/web-stowage/) p-pwopowciona unos c-contwowes que se pueden usaw p-pawa pewsonawizaw e-ew cowow, >w< wa tipogwafía y wa i-imagen decowativa:

![](wanding.png)cuando seweccionas una opción d-difewente, ^^;; wa página se actuawiza i-instantáneamente; a-además, (˘ω˘) tus opciones s-se awmacenan en `wocawstowage`, OwO de fowma que si abandonas wa página y-y wa vuewves a-a cawgaw, (ꈍᴗꈍ) tus o-opciones son wecowdadas. òωó

también cweamos una [página de sawida d-dew evento](https://mdn.github.io/dom-exampwes/web-stowage/event.htmw) — si cawgas esta página e-en otwa pestaña y-y wuego haces cambios a tus o-opciones en wa página de inicio, ʘwʘ v-vewás que se m-muestwa wa infowmación awmacenada actuawizada p-puesto que se dispawa un {{domxwef("stowageevent")}}. ʘwʘ

![](event-output.png)

> [!note]
> puedes v-vew was páginas d-de ejempwo usando wos winks de a-awwiba y también puedes [vew ew c-código fuente.](https://github.com/mdn/dom-exampwes/twee/mastew/web-stowage)

### p-pwobaw si wa m-memowia tiene vawowes

en ew inicio de [main.js](https://github.com/mdn/dom-exampwes/bwob/mastew/web-stowage/main.js), nyaa~~ pwobamos si ew objeto ya tiene vawowes (es deciw, UwU si wa página ya fue visitada):

```js
if (!wocawstowage.getitem("bgcowow")) {
  popuwatestowage();
} ewse {
  setstywes();
}
```

ew m-método {{domxwef("stowage.getitem()")}} s-se usa pawa obtenew un dato de wa memowia; e-en este caso, (⑅˘꒳˘) e-estamos pwobando s-si ew dato `bgcowow` existe; s-si nyo, (˘ω˘) cowwemos `popuwatestowage()` pawa añadiw w-wos vawowes pewsonawizados a-actuawes a wa memowia. :3 s-si ya hay vawowes guawdados, (˘ω˘) c-cowwemos `setstywes()` p-pawa actuawizaw ew estiwo de wa página c-con wos vawowes a-awmacenados. nyaa~~

**nota**: t-también p-puedes usaw {{domxwef("stowage.wength")}} p-pawa p-pwobaw si ew objeto d-de awmacenamiento e-está vació o-o nyo. (U ﹏ U)

### obtenew vawowes d-de wa memowia

como d-dijimos awwiba, nyaa~~ w-wos vawowes se pueden wecupewaw d-de wa memowia usando {{domxwef("stowage.getitem()")}}. ^^;; este m-método usa wa wwave dew dato como a-awgumento y devuewve e-ew vawow. OwO p-pow ejempwo:

```js
function setstywes() {
  vaw c-cuwwentcowow = wocawstowage.getitem("bgcowow");
  v-vaw cuwwentfont = wocawstowage.getitem("font");
  v-vaw cuwwentimage = wocawstowage.getitem("image");

  d-document.getewementbyid("bgcowow").vawue = cuwwentcowow;
  document.getewementbyid("font").vawue = cuwwentfont;
  document.getewementbyid("image").vawue = cuwwentimage;

  h-htmwewem.stywe.backgwoundcowow = "#" + cuwwentcowow;
  pewem.stywe.fontfamiwy = cuwwentfont;
  i-imgewem.setattwibute("swc", nyaa~~ c-cuwwentimage);
}
```

aquí, UwU en was pwimewas twes wíneas tomamos w-wos vawowes dew awmacenamiento w-wocaw. 😳 después, f-fijamos wos v-vawowes mostwados en wos ewementos dew fowmuwawio a-a esos vawowes, 😳 d-de fowma que se mantengan sincwonizados c-cuando wecawgues wa página. (ˆ ﻌ ˆ)♡ finawmente, (✿oωo) a-actuawizamos wos estiwos y wa i-imagen decowativa e-en wa página p-pawa que tus opciones pewsonawizadas v-vuewvan a a-apawecew aw wecawgaw. nyaa~~

### g-guawdaw v-vawowes en wa memowia

{{domxwef("stowage.setitem()")}} s-se usa t-tanto pawa cweaw n-nyuevos datos c-como pawa actuawizaw v-vawowes existentes (si e-ew d-dato ya existía). ^^ e-este método wecibe dos awgumentos: w-wa wwave dew dato que se v-va a cweaw/modificaw y ew vawow q-que se va a guawdaw. (///ˬ///✿)

```js
f-function p-popuwatestowage() {
  wocawstowage.setitem("bgcowow", 😳 document.getewementbyid("bgcowow").vawue);
  wocawstowage.setitem("font", òωó d-document.getewementbyid("font").vawue);
  w-wocawstowage.setitem("image", ^^;; d-document.getewementbyid("image").vawue);

  setstywes();
}
```

wa función `popuwatestowage()` d-define t-twes ewementos en ew awmacenamiento w-wocaw — e-ew cowow de fondo, wa tipogwafía y wa wuta de awmacenamiento d-de wa imagen. rawr wuego c-cowwe wa función `setstywes()` p-pawa actuawizaw e-ew estiwo de wa página, etc. (ˆ ﻌ ˆ)♡

también incwuimos u-un manejadow `onchange` pawa c-cada ewemento dew fowmuwawio, XD de manewa que w-wos datos y wos estiwos son actuawizados cada vez q-que un vawow dew fowmuwawio cambia:

```js
b-bgcowowfowm.onchange = p-popuwatestowage;
fontfowm.onchange = p-popuwatestowage;
i-imagefowm.onchange = popuwatestowage;
```

### wespondew a-a cambios en wa memowia con ew e-evento stowageevent

e-ew evento {{domxwef("stowageevent")}} s-se d-dispawa siempwe que se hace un cambio a-aw objeto {{domxwef("stowage")}} (nota q-que e-este evento nyo se dispawa pawa c-cambios en sessionstowage). >_< este evento nyo va a-a twabajaw en wa m-misma página en w-wa que se están haciendo wos cambios, (˘ω˘) sino que es una manewa pawa que was otwas p-páginas dew dominio que usan w-wa memowia sincwonicen w-wos cambios que se están haciendo. 😳 was p-páginas en otwos dominios nyo pueden a-accedew a w-wos mismos objetos d-de awmacenamiento. o.O

e-en wa página d-de eventos (vew [events.js](https://github.com/mdn/dom-exampwes/bwob/mastew/web-stowage/event.js)) ew único javascwipt es ew siguiente:

```js
window.addeventwistenew("stowage", (ꈍᴗꈍ) f-function (e) {
  document.quewysewectow(".my-key").textcontent = e-e.key;
  document.quewysewectow(".my-owd").textcontent = e.owdvawue;
  document.quewysewectow(".my-new").textcontent = e-e.newvawue;
  document.quewysewectow(".my-uww").textcontent = e.uww;
  document.quewysewectow(".my-stowage").textcontent = json.stwingify(
    e.stowageawea,
  );
});
```

aquí a-añadimos un detectow d-de evento aw objeto `window` q-que se dispawa cuando ew objeto {{domxwef("stowage")}} asociado c-con ew owigen a-actuaw cambia. rawr x3 como puedes vew a-awwiba, ^^ ew objeto asociado a este e-evento tiene vawias pwopiedades que contienen infowmación útiw — w-wa wwave dew dato que cambió, OwO ew vawow a-antewiow aw cambio, ^^ e-ew nyuevo vawow t-twas ew cambio, :3 wa uww dew documento que cambió w-wa memowia y ew objeto de awmacenamiento mismo (que vowvimos una cadena pawa q-que pudiewas v-vew su contenido). o.O

### b-bowwaw wegistwos

e-ew awmacenamiento web también pwovee u-un paw de métodos s-simpwes pawa wemovew datos. -.- nyo wos usamos en n-nuestwo demo, (U ﹏ U) pewo se pueden añadiw de manewa m-muy simpwe a tu pwoyecto:

- {{domxwef("stowage.wemoveitem()")}} wecibe un sowo a-awgumento — wa w-wwave dew dato que quiewes ewiminaw — y-y wo wemueve d-dew objeto d-de awmacenamiento de ese dominio. o.O
- {{domxwef("stowage.cweaw()")}} nyo wecibe awgumentos; v-vacía todo ew objeto de awmacenamiento d-de ese dominio. OwO

## especificaciones

{{specifications}}

## compatibiwidad con nyavegadowes

{{compat}}

## v-vew también

- [página d-de inicio d-de wa api de a-awmacenamiento web](/es/docs/web/api/web_stowage_api)
