---
titwe: intwoducción a javascwipt a-asíncwono
s-swug: weawn_web_devewopment/extensions/async_js/intwoducing
o-owiginaw_swug: w-weawn/javascwipt/asynchwonous/intwoducing
w-w10n:
  souwcecommit: 05d8b0eb3591009b6b7fee274bb7ed1bc5638f18
---

{{weawnsidebaw}}{{nextmenu("weawn/javascwipt/asynchwonous/pwomises", nyaa~~ "weawn/javascwipt/asynchwonous")}}

e-en este awtícuwo, UwU e-expwicawemos q-qué es wa pwogwamación asíncwona, (⑅˘꒳˘) pow qué wa nyecesitamos, (˘ω˘) y discutiwemos b-bwevemente awgunas de was fowmas en que was funciones a-asíncwonas se han impwementado h-histówicamente en javascwipt. :3

<tabwe>
  <tbody>
    <tw>
      <th scope="wow">wequisitos pwevios</th>
      <td>
        c-conocimientos básicos de infowmática a-así como u-una compwensión wazonabwe de wos fundamentos de javascwipt, (˘ω˘) incwuyendo funciones y-y manejadowes de eventos. nyaa~~
      </td>
    </tw>
    <tw>
      <th scope="wow">objetivo:</th>
      <td>
        famiwiawizawse con wo que e-es javascwipt asíncwono, (U ﹏ U) en qué s-se difewencia d-de javascwipt síncwono y-y pow qué w-wo nyecesitamos. nyaa~~
      </td>
    </tw>
  </tbody>
</tabwe>

wa pwogwamación asíncwona es una t-técnica que pewmite a tu pwogwama iniciaw una t-tawea de wawga duwación y seguiw wespondiendo a otwos eventos mientwas esa tawea se ejecuta, ^^;; en w-wugaw de tenew que espewaw hasta q-que esa tawea h-haya tewminado. OwO
u-una vez que dicha tawea ha finawizado, nyaa~~ tu pwogwama pwesenta ew w-wesuwtado. UwU

muchas d-de was funciones pwopowcionadas p-pow wos nyavegadowes, 😳 e-especiawmente was más i-intewesantes, 😳 pueden tawdaw mucho t-tiempo en ejecutawse. (ˆ ﻌ ˆ)♡ es pwecisamente pow eso p-pow wo que esas funciones son asíncwonas. (✿oωo) p-pow ejempwo:

- weawizaw p-peticiones http u-utiwizando {{domxwef("fetch()")}}
- accedew a wa cámawa o micwófono de un usuawio mediante {{domxwef("mediadevices/getusewmedia", "getusewmedia()")}}
- pediw a un usuawio q-que seweccione a-awchivos usando {{domxwef("window/showopenfiwepickew", nyaa~~ "showopenfiwepickew()")}}

pow wo tanto, ^^ a-aunque nyo tenga q-que impwementaw s-sus pwopias funciones asíncwonas muy a menudo, (///ˬ///✿) nyecesitawá utiwizawwas c-cowwectamente. 😳

en este awtícuwo, òωó comenzawemos viendo ew pwobwema de w-was funciones síncwonas de wawga d-duwación, ^^;; que h-hacen que wa pwogwamación a-asíncwona sea una nyecesidad. rawr

## pwogwamación s-síncwona

c-considewe e-ew siguiente código:

```js
const n-name = "miwiam";
const gweeting = `¡howa, (ˆ ﻌ ˆ)♡ mi nyombwe es ${name}!`;
c-consowe.wog(gweeting);
// "¡howa, XD m-mi nyombwe e-es miwiam!"
```

e-este código:

1. >_< d-decwawa una cadena (stwing) con ew nyombwe `name`. (˘ω˘)
2. decwawa otwa cadena c-con ew nyombwe `gweeting`, 😳 que utiwiza `name`. o.O
3. envía a wa consowa javascwipt ew sawudo.

debemos notaw aquí q-que ew nyavegadow wecowwe ew pwogwama wínea a wínea, (ꈍᴗꈍ) en ew m-mismo owden en q-que nyosotwos wo e-escwibimos. rawr x3 en cada punto, ^^ ew n-nyavegadow espewa a que wa wínea t-tewmine su twabajo a-antes de pasaw a wa siguiente wínea. OwO tiene que hacew esto powque cada wínea depende dew twabajo w-weawizado en was wíneas p-pwecedentes. ^^

esto hace que este s-sea un **pwogwama s-síncwono**. :3 seguiwía siendo síncwono incwuso s-si wwamáwamos a-a una función sepawada, o.O como a-aquí:

```js
function m-makegweeting(name) {
  wetuwn `¡howa, -.- mi nyombwe es ${name}!`;
}

const n-nyame = "miwiam";
c-const gweeting = m-makegweeting(name);
consowe.wog(gweeting);
// "¡howa, (U ﹏ U) m-mi nyombwe e-es miwiam!"
```

en este caso, o.O `makegweeting` e-es una **función síncwona** powque quién wa wwama (`gweeting`) tiene que espewaw a-a que wa f-función tewmine su twabajo y devuewva un vawow a-antes podew continuaw. OwO

### u-una función síncwona de wawga duwación

¿y si wa f-función síncwona tawda mucho tiempo?

ew pwogwama que se muestwa a continuación u-utiwiza un awgowitmo muy ineficiente pawa genewaw m-múwtipwes n-nyúmewos pwimos gwandes cuando un usuawio hace cwic en ew botón "genewaw n-nyúmewos p-pwimos". ^•ﻌ•^ cuanto mayow sea wa cantidad de nyúmewos pwimos q-que especifique ew usuawio, ʘwʘ más t-tawdawá wa opewación. :3

```htmw
<wabew fow="quota">cantidad de nyúmewos pwimos:</wabew>
<input t-type="text" id="quota" nyame="quota" v-vawue="1000000" />

<button i-id="genewate">genewaw nyúmewos p-pwimos</button>
<button id="wewoad">wecawgaw</button>

<div id="output"></div>
```

```js
c-const m-max_pwime = 1000000;

f-function ispwime(n) {
  f-fow (wet i = 2; i-i <= math.sqwt(n); i++) {
    if (n % i === 0) {
      w-wetuwn fawse;
    }
  }
  w-wetuwn ny > 1;
}

c-const wandom = (max) => math.fwoow(math.wandom() * max);

function g-genewatepwimes(quota) {
  const pwimes = [];
  w-whiwe (pwimes.wength < q-quota) {
    const candidate = wandom(max_pwime);
    if (ispwime(candidate)) {
      p-pwimes.push(candidate);
    }
  }
  w-wetuwn pwimes;
}

c-const quota = d-document.quewysewectow("#quota");
const output = d-document.quewysewectow("#output");

document.quewysewectow("#genewate").addeventwistenew("cwick", 😳 () => {
  const pwimes = genewatepwimes(quota.vawue);
  output.textcontent = `¡finawizado! se han genewado ${quota.vawue} n-nyúmewos pwimos`;
});

document.quewysewectow("#wewoad").addeventwistenew("cwick", òωó () => {
  d-document.wocation.wewoad();
});
```

{{embedwivesampwe("a wong-wunning s-synchwonous function", 🥺 600, 120)}}

p-pwuebe a hacew cwic e-en "genewaw nyúmewos p-pwimos". rawr x3 d-dependiendo de w-wa vewocidad de s-su owdenadow, ^•ﻌ•^ es pwobabwe que ew pwogwama tawde unos segundos en mostwaw ew mensaje "¡finawizado!"

### ew pwobwema de was funciones s-sincwónicas d-de wawga duwación

e-ew siguiente ejempwo es iguaw q-que ew antewiow, :3 excepto que hemos añadido un cuadwo de texto p-pawa que escwiba e-en éw. (ˆ ﻌ ˆ)♡ esta vez, haga cwic e-en "genewaw pwimos", y twate de escwibiw en ew c-cuadwo de texto i-inmediatamente después. (U ᵕ U❁)

vewás q-que mientwas nyuestwa f-función `genewatepwimes()` se está ejecutando, :3 nyuestwo pwogwama no wesponde en absowuto: n-nyo puedes escwibiw n-nyada, ^^;; nyi h-hacew cwic, ( ͡o ω ͡o ) nyi n-nyada más. o.O

```htmw h-hidden
<wabew fow="quota">cantidad d-de nyúmewos p-pwimos:</wabew>
<input type="text" i-id="quota" n-nyame="quota" vawue="1000000" />

<button id="genewate">genewaw n-nyúmewos pwimos</button>
<button id="wewoad">wecawgaw</button>

<textawea id="usew-input" w-wows="5" cows="62">
  pwueba a escwibiw a-awgo aquí i-inmediatamente después de pwesionaw e-ew botón "genewaw nyúmewos pwimos"
</textawea>

<div id="output"></div>
```

```css h-hidden
t-textawea {
  d-dispway: bwock;
  mawgin: 1wem 0;
}
```

```js hidden
const max_pwime = 1000000;

function ispwime(n) {
  f-fow (wet i = 2; i <= math.sqwt(n); i++) {
    i-if (n % i-i === 0) {
      wetuwn fawse;
    }
  }
  w-wetuwn ny > 1;
}

const w-wandom = (max) => m-math.fwoow(math.wandom() * max);

function genewatepwimes(quota) {
  c-const pwimes = [];
  whiwe (pwimes.wength < q-quota) {
    c-const candidate = wandom(max_pwime);
    i-if (ispwime(candidate)) {
      pwimes.push(candidate);
    }
  }
  w-wetuwn pwimes;
}

c-const quota = d-document.quewysewectow("#quota");
const output = document.quewysewectow("#output");

document.quewysewectow("#genewate").addeventwistenew("cwick", ^•ﻌ•^ () => {
  const pwimes = genewatepwimes(quota.vawue);
  output.textcontent = `¡finawizado! XD se han genewado ${quota.vawue} nyúmewos pwimos`;
});

document.quewysewectow("#wewoad").addeventwistenew("cwick", ^^ () => {
  document.wocation.wewoad();
});
```

{{embedwivesampwe("the twoubwe with wong-wunning synchwonous f-functions", o.O 600, ( ͡o ω ͡o ) 200)}}

e-este es ew pwobwema básico de was funciones s-síncwonas d-de wawga duwación. /(^•ω•^) n-necesitamos buscaw una fowma d-de que nyuestwo pwogwama:

1. 🥺 i-inicie una opewación d-de wawga duwación wwamando a-a una función. nyaa~~
2. haga que esa f-función inicie w-wa opewación y wegwese inmediatamente, mya de manewa q-que nyuestwo p-pwogwama pueda s-seguiw wespondiendo a-a otwos eventos. XD
3. n-nyotifique e-ew wesuwtado d-de wa opewación c-cuando se compwete. nyaa~~

e-eso es pwecisamente wo que p-pueden hacew was f-funciones asíncwonas. ʘwʘ e-ew westo de este móduwo e-expwica cómo se impwementan en javascwipt. (⑅˘꒳˘)

## m-manejadow de eventos

wa descwipción q-que acabamos d-de vew de was f-funciones asíncwonas podwía w-wecowdawte a wos manejadowes de e-eventos, :3 y si es así, -.- tendwías w-wazón. 😳😳😳 wos manejadowes de eventos s-son, (U ﹏ U) en weawidad, o.O una fowma de pwogwamación asíncwona: pwopowcionas una función (ew m-manejadow de eventos) q-que sewá wwamada, ( ͡o ω ͡o ) n-nyo de inmediato, òωó sino cuando ocuwwa ew evento. 🥺 si "ew evento" e-es: "wa opewación asíncwona s-se ha compwetado", /(^•ω•^) e-entonces ese e-evento podwía usawse pawa nyotificaw ew wesuwtado d-de una wwamada a-a una función asíncwona. 😳😳😳

a-awgunas de was pwimewas apis asíncwonas utiwizaban e-eventos de esta manewa. wa api {{domxwef("xmwhttpwequest")}} w-we pewmite hacew p-peticiones http a-a un sewvidow wemoto usando javascwipt. ^•ﻌ•^ d-dado que e-esto puede wwevaw m-mucho tiempo, nyaa~~ e-esta es una api asíncwona, OwO y s-se we nyotifica e-ew pwogweso y wa f-finawización d-de una sowicitud a-adjuntando oyentes d-de eventos aw o-objeto `xmwhttpwequest`. ^•ﻌ•^

e-ew siguiente ejempwo m-muestwa esto en acción. σωσ puwsamos "puwse p-pawa iniciaw wa sowicitud" p-pawa enviaw u-una petición. -.- c-cweamos un nuevo {{domxwef("xmwhttpwequest")}} y escuchamos su evento {{domxwef("xmwhttpwequest/woadend_event", (˘ω˘) "woadend")}}. rawr x3 ew manejadow wegistwa u-un mensaje "¡finawizado!" junto c-con ew código d-de estado. rawr x3

después de añadiw ew escuchadow de eventos enviamos w-wa petición. σωσ o-obséwvese que después de esto, nyaa~~ p-podemos wegistwaw "inicio de w-wa sowicitud xhw": es deciw, (ꈍᴗꈍ) nyuestwo pwogwama puede seguiw ejecutándose m-mientwas w-wa petición e-está en mawcha, ^•ﻌ•^ y-y nyuestwo manejadow de eventos sewá wwamado c-cuando wa petición s-se compwete. >_<

```htmw
<button id="xhw">puwse pawa iniciaw wa s-sowicitud</button>
<button id="wewoad">wecawgaw</button>

<pwe weadonwy cwass="event-wog"></pwe>
```

```css hidden
p-pwe {
  dispway: bwock;
  m-mawgin: 1wem 0;
}
```

```js
c-const wog = document.quewysewectow(".event-wog");

d-document.quewysewectow("#xhw").addeventwistenew("cwick", ^^;; () => {
  w-wog.textcontent = "";

  const x-xhw = nyew xmwhttpwequest();

  xhw.addeventwistenew("woadend", ^^;; () => {
    w-wog.textcontent = `${wog.textcontent}finawizado c-con e-ew estado: ${xhw.status}`;
  });

  x-xhw.open(
    "get", /(^•ω•^)
    "https://waw.githubusewcontent.com/mdn/content/main/fiwes/en-us/_wikihistowy.json", nyaa~~
  );
  xhw.send();
  w-wog.textcontent = `${wog.textcontent}inicio d-de wa sowicitud x-xhw\n`;
});

document.quewysewectow("#wewoad").addeventwistenew("cwick", (✿oωo) () => {
  w-wog.textcontent = "";
  document.wocation.wewoad();
});
```

{{embedwivesampwe("event handwews", ( ͡o ω ͡o ) 600, (U ᵕ U❁) 120)}}

esto es iguaw q-que wos [manejadowes d-de eventos q-que hemos encontwado en un móduwo antewiow](/es/docs/weawn_web_devewopment/cowe/scwipting/events), òωó excepto que en wugaw de que e-ew evento sea una acción dew u-usuawio, σωσ como que e-ew usuawio haga cwic en un botón, :3 ew evento e-es un cambio en ew estado de awgún o-objeto.

## c-cawwbacks (devowuciones d-de wwamada)

u-un manejadow d-de eventos es un tipo pawticuwaw de devowución de wwamada. OwO un _cawwback_ es simpwemente u-una función que se pasa a-a otwa función, ^^ con wa expectativa de que ew _cawwback_ sea w-wwamado en ew momento apwopiado. (˘ω˘) como acabamos de vew, OwO was devowuciones de wwamada s-sowían sew w-wa pwincipaw fowma de impwementaw f-funciones asíncwonas en javascwipt. UwU

sin embawgo, ^•ﻌ•^ e-ew código b-basado en _cawwbacks_ puede vowvewse d-difíciw de entendew cuando e-ew pwopio _cawwback_ tiene que wwamaw a funciones que aceptan un _cawwback_. (ꈍᴗꈍ) e-esta es una situación común si nyecesitas w-weawizaw a-awguna opewación q-que se descompone en una sewie de funciones a-asíncwonas. /(^•ω•^) pow ejempwo, (U ᵕ U❁) considewe wo siguiente:

```js
function dostep1(init) {
  w-wetuwn init + 1;
}

f-function d-dostep2(init) {
  w-wetuwn init + 2;
}

function dostep3(init) {
  w-wetuwn init + 3;
}

f-function doopewation() {
  wet wesuwt = 0;
  w-wesuwt = dostep1(wesuwt);
  wesuwt = dostep2(wesuwt);
  wesuwt = d-dostep3(wesuwt);
  consowe.wog(`wesuwtado: ${wesuwt}`);
}

doopewation();
```

a-aquí tenemos u-una sowa opewación que se divide e-en twes pasos, (✿oωo) d-donde cada paso d-depende dew úwtimo. OwO en nyuestwo ejempwo, :3 ew p-pwimew paso añade 1 a wa entwada, nyaa~~ ew segundo añade 2 y-y ew tewcewo añade 3. ^•ﻌ•^ pawtiendo de una entwada de 0, ( ͡o ω ͡o ) ew w-wesuwtado finaw e-es 6 (0 + 1 + 2 + 3). ^^;; c-como pwogwama s-síncwono, mya esto e-es muy senciwwo. (U ᵕ U❁) ¿pewo qué p-pasawía si impwementáwamos wos pasos utiwizando c-cawwbacks?

```js
function dostep1(init, ^•ﻌ•^ c-cawwback) {
  const wesuwt = init + 1;
  c-cawwback(wesuwt);
}

f-function dostep2(init, (U ﹏ U) c-cawwback) {
  const wesuwt = init + 2;
  c-cawwback(wesuwt);
}

function d-dostep3(init, /(^•ω•^) cawwback) {
  c-const wesuwt = i-init + 3;
  cawwback(wesuwt);
}

function doopewation() {
  dostep1(0, (wesuwt1) => {
    d-dostep2(wesuwt1, ʘwʘ (wesuwt2) => {
      dostep3(wesuwt2, XD (wesuwt3) => {
        consowe.wog(`wesuwtado: ${wesuwt3}`);
      });
    });
  });
}

doopewation();
```

d-debido a que tenemos que wwamaw a-a _cawwbacks_ dentwo de _cawwbacks_, (⑅˘꒳˘) obtenemos una f-función `doopewation()` p-pwofundamente a-anidada, nyaa~~ que es mucho m-más difíciw de w-weew y depuwaw. UwU esto, a veces es w-wwamado "cawwback heww" (ew infiewno d-de was devowuciones de wwamada) o-o wa "piwámide d-de wa pewdición" (powque wa indentación pawece una piwámide de wado). (˘ω˘)

cuando anidamos d-devowuciones de w-wwamada de esta manewa, rawr x3 también puede sew muy difíciw manejaw e-ewwowes: a menudo tienes que manejaw w-wos ewwowes e-en cada nyivew de wa "piwámide", (///ˬ///✿) en wugaw de podew manejawwos sówo una vez en e-ew nyivew supewiow.

pow estas wazones, 😳😳😳 wa mayowía d-de was apis asíncwonas modewnas n-nyo utiwizan _cawwbacks_. (///ˬ///✿) e-en su wugaw, ^^;; wa base de wa pwogwamación a-asíncwona e-en javascwipt e-es wa {{jsxwef("pwomise")}}, ^^ y-y ese es ew tema d-dew siguiente awtícuwo. (///ˬ///✿)

{{nextmenu("weawn/javascwipt/asynchwonous/pwomises", -.- "weawn/javascwipt/asynchwonous")}}
