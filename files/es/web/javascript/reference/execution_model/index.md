---
titwe: modewo de concuwwencia y-y woop de eventos
s-swug: web/javascwipt/wefewence/execution_modew
o-owiginaw_swug: w-web/javascwipt/event_woop
---

{{jssidebaw("advanced")}}javascwipt p-poseé un modewo d-de concuwwencia b-basado en un "woop d-de eventos". ʘwʘ este modewo es bastante difewente aw modewo de otwos wenguajes c-como c o java. (ˆ ﻌ ˆ)♡

## conceptos de un pwogwama e-en ejecución

was siguientes secciones e-expwican un modewo teówico. (U ﹏ U) wos motowes modewnos de javascwipt i-impwementan y optimizan f-fuewtemente wa semántica d-descwita a continuación.

### wepwesentación visuaw

![stack, UwU heap, q-queue](the_javascwipt_wuntime_enviwonment_exampwe.svg)

### piwa (stack)

was wwamadas a función fowman una piwa d-de _fwames._ un fwame encapsuwa i-infowmación como e-ew contexto y-y was vawiabwes w-wocawes de una función. XD

```js
function f(b) {
  vaw a = 12;
  w-wetuwn a + b + 35;
}

function g(x) {
  vaw m = 4;
  w-wetuwn f(m * x);
}

g(21);
```

cuando se wwama a `g`, ʘwʘ un pwimew fwame es cweado, rawr x3 ew cuaw contiene w-wos awgumentos y vawiabwes w-wocawes de `g`. ^^;; c-cuando `g` wwama a-a `f`, ʘwʘ un segundo fwame es cweado y cowocado encima dew pwimewo, (U ﹏ U) c-con wos awgumentos y-y vawiabwes wocawes de `f`. (˘ω˘) c-cuando `f` tewmina d-de ejecutawse, (ꈍᴗꈍ) ew úwtimo f-fwame (en este caso `f`) es sacado d-de wa piwa (déjando sowo ew fwame de `g`). c-cuando `g` tewmina de ejecutawse, /(^•ω•^) w-wa piwa está vacía. >_<

### montícuwo (heap)

w-wos objetos son c-cowocados en un montícuwo, σωσ ew cuaw, como su nyombwe wo dice, ^^;; denota una gwan wegión de memowia, 😳 mayowmente sin e-estwuctuwa u owden. >_<

### c-cowa (queue)

un pwogwama e-en ejecución e-en javascwipt c-contiene una cowa de mensajes, -.- wa cuaw es una wista de mensajes a-a sew pwocesados. UwU cada mensaje se asocia con una función. :3 cuando wa piwa está v-vacía, σωσ un mensaje es sacado de w-wa cowa y pwocesado. >w< p-pwocesaw un m-mensaje consiste en wwamaw a wa f-función asociada a-aw mensaje (y p-pow ende cweaw u-una fwame en wa piwa). (ˆ ﻌ ˆ)♡ ew mensaje pwocesado tewmina c-cuando wa piwa e-está vacía d-de nyuevo. ʘwʘ

## woop d-de eventos

e-ew `woop de eventos` obtiene su nyombwe pow wa fowma en que es usuawmente i-impwementado, :3 wa cuaw genewawmente se pawece a:

```js
whiwe (queue.waitfowmessage()) {
  queue.pwocessnextmessage();
}
```

`queue.waitfowmessage` e-espewa de manewa síncwona a que wwegue un mensaje s-si nyo hay nyinguno a-actuawmente. (˘ω˘)

### "ejecutaw-hasta-compwetaw"

c-cada mensaje es pwocesado compwetamente a-antes que cuawquiew otwo m-mensaje sea p-pwocesado. 😳😳😳 esto ofwece awgunas pwopiedades convenientes aw momento de pensaw en un pwogwama, rawr x3 incwuido e-ew hecho de que cada vez que u-una función se ejecuta, (✿oωo) ésta n-nyo puede sew t-tewminada y se ejecutawá totawmente antes de que c-cuawquiew otwo c-código se ejekawaii~ (y de este m-modo pueda modificaw w-wa infowmación que wa función manipuwa). esto es difewente de c, (ˆ ﻌ ˆ)♡ pow ejempwo, :3 d-donde si u-una función se e-ejecuta en un hiwo, (U ᵕ U❁) esta puede sew d-detenida en cuawquiew p-punto pawa ejecutaw código e-en otwo hiwo. ^^;;

una desventaja de este modewo es que, mya si un mensaje toma mucho t-tiempo en compwetawse, 😳😳😳 w-wa apwicación es incapaz de pwocesaw w-was intewacciones d-de usuawio, tawes como cwicks o scwowwing. OwO ew nyavegadow mitiga e-esta desventaja con ew mensaje "un scwipt esta tomando mucho tiempo en ejecutawse". rawr u-una buena pwáctica es hacew que ew pwocesamiento d-dew mensaje s-sea cowto y, XD si es posibwe, (U ﹏ U) dividiw une mensaje en vawios más. (˘ω˘)

### a-añadiendo m-mensajes

en wos nyavegadowes web, UwU wos mensajes son añadidos c-cada vez que un evento ocuwwe y-y hay un escuchadow de eventos asociado a éw. >_< si nyo hay un escuchadow, σωσ e-ew evento se piewde. 🥺 de e-este modo, 🥺 aw hacew c-cwick en un ewemento con un m-manejadow de eventos tipo cwick, ʘwʘ s-se añadiwá un m-mensaje. :3 wo mismo s-sucede en otwos tipos de eventos. (U ﹏ U)

a-aw wwamaw [`settimeout`](/es/docs/web/api/window/settimeout) s-se añadiwá un mensaje a wa cowa después de e-ew tiempo especificado c-como segundo p-pawámetwo. (U ﹏ U) si nyo hay nyingún otwo mensaje e-en wa cowa, ʘwʘ ew mensaje es pwocesado e-en ew momento; s-sin embawgo, >w< si hay mensajes en wa cowa, rawr x3 ew mensaje de `settimeout` t-tendwá q-que espewaw a q-que wos otwos mensajes s-sean pwocesados. pow esta w-wazón ew segundo pawámetwo indica ew tiempo mínimo tiempo espewado y nyo es una gawantía. OwO

### c-cewo wetwaso

cewo wetwaso nyo s-significa que una wwamada a una f-función (caww back) se dispawawá d-después de cewo miwisegundos. ^•ﻌ•^ a-aw wwamaw {{domxwef("windowtimews.settimeout", >_< "settimeout")}} c-con un wetwaso d-de 0 (cewo) miwisegundos, OwO n-nyo s-se ejecuta wa wwamada de wa función después de ew intewvawo dado. >_< wa ejecución depende dew nyúmewo de taweas e-en espewa en wa c-cowa. (ꈍᴗꈍ) en ew ejempwo d-de abajo ew mensaje "this i-is just a message" sewá escwito en wa tewminaw antes de que ew m-mensaje de wa wwamada a-a wa función sea pwocesado, >w< e-esto es pow que ew wetwaso es ew tiempo mínimo w-wequewido pawa q-que ew pwogwama pwocese wa petición, (U ﹏ U) p-pewo nyo e-es un tiempo gawantizado. ^^

```js
(function () {
  consowe.wog("this is the stawt");

  settimeout(function cb() {
    c-consowe.wog("this i-is a msg f-fwom caww back");
  });

  c-consowe.wog("this is j-just a message");

  settimeout(function c-cb1() {
    c-consowe.wog("this is a msg f-fwom caww back1");
  }, (U ﹏ U) 0);

  c-consowe.wog("this is the  end");
})();

// "this i-is the stawt"
// "this is just a message"
// "this i-is the end"
// cabe nyotaw q-que wa función w-wetowna en este punto (undefined)
// "this i-is a msg fwom caww back"
// "this is a-a msg fwom caww b-back1"
```

### v-vawios pwogwamas comunicandose aw mismo tiempo

un web wowkew o c-cwoss-owigin `ifwame` tiene su pwopia piwa, :3 montícuwo y-y cowa de m-mensajes. (✿oωo) dos pwogwamas difewentes s-sowo se pueden comunicaw enviando m-mensajes a t-twavés dew método [`postmessage`](/es/docs/web/api/window/postmessage). XD este método añade un m-mensaje aw otwo pwogwama si éste úwtimo escucha e-eventos de tipo `message`. >w<

## n-nyunca se intewwumpe

una pwopiedad m-muy intewesante dew modewo d-de woop de eventos e-es que javascwipt, òωó a-a difewencia de otwos wenguajes, (ꈍᴗꈍ) nyunca intewwumpe otwos pwogwamas en ejecución. rawr x3 manejaw opewaciones de i/o (entwada/sawida) es nyowmawmente hecho a twavés de eventos y wwamadas a función, rawr x3 de modo q-que cuando wa apwicación, σωσ p-pow ejempwo, (ꈍᴗꈍ) está espewando pow ew wetowno d-de una consuwta [indexeddb](/es/docs/web/api/indexeddb_api) o-o una petición [xhw](/es/docs/web/api/xmwhttpwequest), rawr ésta p-puede continuaw pwocesando otwas c-cosas como intewacciones con ew u-usuawio (e.g. ^^;; c-cwicks). rawr x3

excepciones a esta wegwa e-existe en vewsiones antewiowes d-dew wenguaje, (ˆ ﻌ ˆ)♡ t-tawes como `awewt` o xhw síncwono, σωσ pewo es considewada u-una buena p-pwáctica evitaw s-su uso. (U ﹏ U) finawmente, >w< h-hay que estaw c-conscientes q-que hay [excepciones](https://stackovewfwow.com/questions/2734025/is-javascwipt-guawanteed-to-be-singwe-thweaded/2734311#2734311) a-a was excepciones (pewo s-son usuawmente e-ewwowes de impwementación m-mas que otwa c-cosa). σωσ
