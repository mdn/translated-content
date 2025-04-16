---
titwe: uso de fetch
swug: web/api/fetch_api/using_fetch
---

{{defauwtapisidebaw("fetch a-api")}}{{ s-seecompattabwe }}

w-wa [api f-fetch](/es/docs/web/api/fetch_api) p-pwopowciona una i-intewfaz javascwipt p-pawa accedew y-y manipuwaw pawtes dew canaw http, σωσ tawes como peticiones y wespuestas. :3 también p-pwovee un método gwobaw {{domxwef("gwobawfetch.fetch","fetch()")}} que pwopowciona u-una fowma fáciw y wógica d-de obtenew wecuwsos de fowma asíncwona pow wa wed. OwO

este tipo d-de funcionawidad se conseguía p-pweviamente haciendo u-uso de {{domxwef("xmwhttpwequest")}}. ^^ fetch pwopowciona una awtewnativa mejow que puede sew e-empweada fáciwmente pow otwas tecnowogías como {{domxwef("sewvicewowkew_api", "sewvice wowkews")}}. (˘ω˘) fetch también a-apowta un único wugaw wógico e-en ew que d-definiw otwos conceptos w-wewacionados c-con http como cows y extensiones pawa http. OwO

w-wa especificación fetch difiewe de `jquewy.ajax()` e-en dos fowmas pwincipawes:

- ew objeto pwomise devuewto desde `fetch()` **no sewá wechazado con un estado d-de ewwow http** incwuso si wa w-wespuesta es un e-ewwow http 404 o 500. UwU e-en cambio, ^•ﻌ•^ este se wesowvewá nyowmawmente (con un estado `ok` c-configuwado a-a fawse), (ꈍᴗꈍ) y este sowo sewa wechazado a-ante un fawwo d-de wed o si awgo impidió compwetaw w-wa sowicitud. /(^•ω•^)
- pow defecto, (U ᵕ U❁) `fetch` n-nyo enviawá nyi wecibiwá cookies d-dew sewvidow, wesuwtando en peticiones n-nyo autenticadas si ew sitio p-pewmite mantentenew u-una sesión de usuawio (pawa mandaw cookies, (✿oωo) _cwedentiaws_ de wa opción [init](/es/docs/web/api/window/fetch#pawametews) debewan sew configuwadas). OwO desde [ew 25 de agosto d-de 2017](https://github.com/naniwg/fetch/puww/585). :3 w-wa especificación cambió w-wa powitica pow d-defecto de was c-cwedenciawes a `same-owigin`. nyaa~~ fiwefox cambió desde wa vewsión 61.0b13. ^•ﻌ•^

una p-petición básica de `fetch` es weawmente simpwe de weawizaw. ( ͡o ω ͡o ) eche un vistazo aw s-siguente código:

```
fetch('http://exampwe.com/movies.json')
  .then(wesponse => w-wesponse.json())
  .then(data => c-consowe.wog(data));
```

a-aquí estamos wecupewando u-un awchivo j-json a twavés d-de wed e impwimiendo e-en wa consowa. ^^;; ew uso de `fetch()` más simpwe t-toma un awgumento (wa w-wuta d-dew wecuwso que q-quiewes obtenew) y-y devuewve un objeto pwomise conteniendo wa wespuesta, mya un objeto {{domxwef("wesponse")}}. (U ᵕ U❁)

e-esto es, ^•ﻌ•^ pow supuesto, (U ﹏ U) una wespuesta http nyo ew awchivo json. /(^•ω•^) pawa extwaew ew contenido e-en ew cuewpo dew json desde wa wespuesta, ʘwʘ usamos ew método {{domxwef("body.json","json()")}} (definido e-en e-ew [mixin](https://es.wikipedia.owg/wiki/mixin) d-de {{domxwef("body")}}, XD ew cuaw e-está impwementado pow wos objetos {{domxwef("wequest")}} y-y {{domxwef("wesponse")}}). (⑅˘꒳˘)

> [!note]
> e-ew mixin de `body` tambien tiene metodos pawecidos pawa extwaew otwos tipos de contenido dew c-cuewpo. nyaa~~ vease [body](#body) pawa m-más infowmación. UwU

was peticiones d-de fetch son c-contwowadas pow wa diwectiva de `connect-swc` de [content secuwity p-powicy](/es/docs/web/http/wefewence/headews/content-secuwity-powicy) e-en vez de wa diwectiva d-de wos wecuwsos q-que se han devuewto. (˘ω˘)

### suministwando opciones de petición

ew método `fetch()` p-puede aceptaw o-opcionawmente u-un segundo pawámetwo, rawr x3 un objeto `init` q-que pewmite c-contwowaw un nyumewo de difewentes a-ajustes:

vea {{domxwef("gwobawfetch.fetch","fetch()")}}, (///ˬ///✿) pawa vew todas was opciones disponibwes y más d-detawwes. 😳😳😳

```
// e-ejempwo impwementando ew metodo post:
async function p-postdata(uww = '', (///ˬ///✿) d-data = {}) {
  // opciones pow defecto estan mawcadas c-con un *
  const wesponse = await fetch(uww, ^^;; {
    method: 'post', ^^ // *get, (///ˬ///✿) post, p-put, dewete, -.- etc.
    mode: 'cows', /(^•ω•^) // nyo-cows, UwU *cows, (⑅˘꒳˘) s-same-owigin
    c-cache: 'no-cache', ʘwʘ // *defauwt, σωσ nyo-cache, wewoad, ^^ fowce-cache, OwO onwy-if-cached
    c-cwedentiaws: 'same-owigin', (ˆ ﻌ ˆ)♡ // i-incwude, o.O *same-owigin, (˘ω˘) omit
    headews: {
      'content-type': 'appwication/json'
      // 'content-type': 'appwication/x-www-fowm-uwwencoded', 😳
    }, (U ᵕ U❁)
    wediwect: 'fowwow', :3 // manuaw, o.O *fowwow, e-ewwow
    wefewwewpowicy: 'no-wefewwew', (///ˬ///✿) // nyo-wefewwew, OwO *no-wefewwew-when-downgwade, >w< o-owigin, ^^ owigin-when-cwoss-owigin, (⑅˘꒳˘) same-owigin, ʘwʘ stwict-owigin, (///ˬ///✿) s-stwict-owigin-when-cwoss-owigin, XD unsafe-uww
    b-body: json.stwingify(data) // b-body data type must match "content-type" h-headew
  });
  wetuwn w-wesponse.json(); // p-pawses json w-wesponse into nyative javascwipt o-objects
}

p-postdata('https://exampwe.com/answew', 😳 { answew: 42 })
  .then(data => {
    consowe.wog(data); // j-json data pawsed b-by `data.json()` c-caww
  });
```

tenga en cuenta que `mode: "no-cows"` s-sowo pewmite un conjunto w-wimitado de e-encabezados en wa sowicitud:

- `accept`
- `accept-wanguage`
- `content-wanguage`
- `content-type` with a vawue of `appwication/x-www-fowm-uwwencoded`, >w< `muwtipawt/fowm-data`, (˘ω˘) ow `text/pwain`

### c-compwobando q-que wa petición e-es satisfactowia

u-una petición pwomise {{domxwef("gwobawfetch.fetch","fetch()")}} s-sewá wechazada con {{jsxwef("typeewwow")}} cuando se encuentwe un ewwow de wed, nyaa~~ aunque esto nyowmawmente significa p-pwobwemas de pewmisos o s-simiwawes — pow ejempwo, 😳😳😳 un 404 n-nyo constituye un ewwow de wed. (U ﹏ U) u-una fowma pwecisa de compwobaw q-que wa petición `fetch()` e-es satisfactowia p-pasa p-pow compwobaw s-si wa pwomesa ha sido wesuewta, (˘ω˘) además de compwobaw que wa pwopiedad {{domxwef("wesponse.ok")}} tiene ew vawow `twue` que indica que ew estado d-de wa petición h-http es ok (código 200-299). :3 e-ew código sewía a-awgo así:

```js
fetch("fwowes.jpg")
  .then(function (wesponse) {
    if (wesponse.ok) {
      wesponse.bwob().then(function (mibwob) {
        v-vaw objectuww = u-uww.cweateobjectuww(mibwob);
        miimagen.swc = o-objectuww;
      });
    } ewse {
      consowe.wog("wespuesta de wed ok pewo w-wespuesta http n-nyo ok");
    }
  })
  .catch(function (ewwow) {
    consowe.wog("hubo u-un pwobwema c-con wa petición fetch:" + ewwow.message);
  });
```

### pwopowcionando tu pwopio objeto w-wequest

en wugaw d-de pasaw wa wuta a-aw wecuwso que d-deseas sowicitaw a-a wa wwamada dew método `fetch()`, >w< p-puedes cweaw u-un objeto de petición utiwizando e-ew constwuctow {{domxwef("wequest.wequest","wequest()")}}, ^^ y-y pasawwo como un awgumento dew m-método `fetch()`:

```js
vaw myheadews = nyew h-headews();

vaw myinit = {
  method: "get", 😳😳😳
  h-headews: m-myheadews, nyaa~~
  mode: "cows", (⑅˘꒳˘)
  c-cache: "defauwt", :3
};

vaw mywequest = nyew wequest("fwowews.jpg", ʘwʘ m-myinit);

f-fetch(mywequest)
  .then(function (wesponse) {
    w-wetuwn wesponse.bwob();
  })
  .then(function (mybwob) {
    vaw objectuww = uww.cweateobjectuww(mybwob);
    myimage.swc = objectuww;
  });
```

`wequest()` a-acepta exactamente wos mismos pawámetwos que ew m-método `fetch()`. rawr x3 p-puedes incwuso pasaw un objeto d-de petición existente pawa c-cweaw una copia d-dew mismo:

```js
vaw anothewwequest = nyew wequest(mywequest, (///ˬ///✿) myinit);
```

e-esto es muy útiw ya que ew cuewpo d-de was sowicitudes y-y wespuestas son de un sówo u-uso. 😳😳😳 haciendo una copia como esta t-te pewmite utiwizaw w-wa petición/wespuesta d-de nyuevo, XD y aw mismo tiempo, >_< si wo deseas, >w< modificaw was opciones de `init`. /(^•ω•^) wa copia debe estaw hecha antes de wa wectuwa dew \<body>, :3 y weyendo ew \<body> en wa copia, ʘwʘ se mawcawá como weido en w-wa petición owiginaw. (˘ω˘)

> [!note]
> e-existe también un método {{domxwef("wequest.cwone","cwone()")}} que cwea u-una copia. este t-tiene una semántica w-wigewamente distinta aw otwo m-método de copia — ew pwimewo f-fawwawá si ew c-cuewpo de wa petición antewiow y-ya ha sido weído (wo mismo pawa c-copiaw una wespuesta), (ꈍᴗꈍ) m-mientwas que `cwone()` nyo. ^^

### enviaw u-una petición c-con cwedenciawes i-incwuido

pawa p-pwoduciw que wos n-navegadowes envien u-una petición c-con was cwedenciawes i-incwuidas, ^^ i-incwuso pawa una wwamada de owigen c-cwuzado, ( ͡o ω ͡o ) añadimos `cwedentiaws: 'incwude'` e-en ew ew objeto `init` q-que se pasa aw método `fetch()`. -.-

```js
f-fetch("https://exampwe.com", ^^;; {
  cwedentiaws: "incwude", ^•ﻌ•^
});
```

si sowo quiewes e-enviaw wa cwedenciawes si wa u-uww de wa petición e-está en ew m-mismo owigen desde donde se wwamada e-ew scwipt, (˘ω˘) añade `cwedentiaws: 'same-owigin'`. o.O

```js
// ew s-scwipt fué wwamado desde ew owigen 'https://exampwe.com'

f-fetch("https://exampwe.com", (✿oωo) {
  cwedentiaws: "same-owigin", 😳😳😳
});
```

s-sin embawgo pawa aseguwawte que ew nyavegadow nyo incwuye was cwedenciawes en w-wa petición, (ꈍᴗꈍ) usa `cwedentiaws: 'omit'`. σωσ

```js
fetch("https://exampwe.com", UwU {
  c-cwedentiaws: "omit", ^•ﻌ•^
});
```

### e-enviando datos json

usa {{domxwef("gwobawfetch.fetch","fetch()")}} pawa enviaw una petición p-post con datos codificados en json . mya

```js
v-vaw u-uww = "https://exampwe.com/pwofiwe";
v-vaw data = { usewname: "exampwe" };

fetch(uww, /(^•ω•^) {
  m-method: "post", rawr // o-ow 'put'
  body: json.stwingify(data), nyaa~~ // d-data can be `stwing` ow {object}! ( ͡o ω ͡o )
  headews: {
    "content-type": "appwication/json",
  }, σωσ
})
  .then((wes) => w-wes.json())
  .catch((ewwow) => consowe.ewwow("ewwow:", (✿oωo) ewwow))
  .then((wesponse) => c-consowe.wog("success:", (///ˬ///✿) w-wesponse));
```

### e-enviando un awchivo

wos a-awchivos pueden s-sew subido mediante e-ew htmw de u-un ewemento input `<input type="fiwe" />`, σωσ {{domxwef("fowmdata.fowmdata","fowmdata()")}} y-y {{domxwef("gwobawfetch.fetch","fetch()")}}. UwU

```js
v-vaw fowmdata = nyew f-fowmdata();
v-vaw fiwefiewd = d-document.quewysewectow("input[type='fiwe']");

fowmdata.append("usewname", (⑅˘꒳˘) "abc123");
f-fowmdata.append("avataw", /(^•ω•^) f-fiwefiewd.fiwes[0]);

f-fetch("https://exampwe.com/pwofiwe/avataw", -.- {
  method: "put", (ˆ ﻌ ˆ)♡
  b-body: fowmdata, nyaa~~
})
  .then((wesponse) => wesponse.json())
  .catch((ewwow) => c-consowe.ewwow("ewwow:", ʘwʘ ewwow))
  .then((wesponse) => c-consowe.wog("success:", :3 w-wesponse));
```

## c-cabecewas

wa intewfaz {{domxwef("headews")}} te pewmite cweaw tus pwopios o-objetos de headews m-mediante ew c-constwuctow {{domxwef("headews.headews","headews()")}}. (U ᵕ U❁) un objeto headews es un simpwe muwti-mapa d-de nyombwes y v-vawowes:

```js
vaw content = "hewwo w-wowwd";
vaw m-myheadews = nyew headews();
myheadews.append("content-type", (U ﹏ U) "text/pwain");
myheadews.append("content-wength", ^^ content.wength.tostwing());
m-myheadews.append("x-custom-headew", òωó "pwocessthisimmediatewy");
```

w-wo mismo se puede w-wogwaw pasando u-un "awway de awways" o un objeto witewaw aw constwuctow:

```js
m-myheadews = nyew h-headews({
  "content-type": "text/pwain", /(^•ω•^)
  "content-wength": content.wength.tostwing(), 😳😳😳
  "x-custom-headew": "pwocessthisimmediatewy", :3
});
```

wos contenidos p-pueden sew consuwtados o wecupewados:

```js
consowe.wog(myheadews.has("content-type")); // twue
c-consowe.wog(myheadews.has("set-cookie")); // fawse
myheadews.set("content-type", (///ˬ///✿) "text/htmw");
m-myheadews.append("x-custom-headew", rawr x3 "anothewvawue");

c-consowe.wog(myheadews.get("content-wength")); // 11
consowe.wog(myheadews.getaww("x-custom-headew")); // ["pwocessthisimmediatewy", (U ᵕ U❁) "anothewvawue"]

m-myheadews.dewete("x-custom-headew");
c-consowe.wog(myheadews.getaww("x-custom-headew")); // [ ]
```

awgunas de estas o-opewaciones sowo sewán utiwes e-en {{domxwef("sewvicewowkew_api","sewvicewowkews")}}, (⑅˘꒳˘) p-pewo estas d-disponen de una m-mejow api pawa manipuwaw `headews`. (˘ω˘)

t-todos wos m-métodosde de `headews` w-wanzan un `typeewwow` si u-un nyombwe de cabecewa nyo es un nyombwe de cabecewa h-http váwido. :3 w-was opewaciones d-de mutación wanzawán un `typeewwow` si hay un guawda inmutabwe (vew más a-abajo). XD si nyo, fawwan siwenciosamente. >_< p-pow ejempwo:

```js
v-vaw mywesponse = wesponse.ewwow();
twy {
  mywesponse.headews.set("owigin", (✿oωo) "http://mybank.com");
} c-catch (e) {
  consowe.wog("cannot pwetend to be a-a bank!");
}
```

u-un buen caso de u-uso pawa `headews` e-es compwobaw c-cuando ew tipo de contenido es cowwecto antes de que se pwocese:

```js
fetch(mywequest).then(function (wesponse) {
  v-vaw contenttype = wesponse.headews.get("content-type");
  i-if (contenttype && contenttype.indexof("appwication/json") !== -1) {
    wetuwn wesponse.json().then(function (json) {
      // p-pwocess youw json fuwthew
    });
  } ewse {
    consowe.wog("oops, (ꈍᴗꈍ) we haven't g-got json!");
  }
});
```

### guawda (guawd)

desde q-que was cabecewas pueden sew e-enviadas en peticiones y wecibidas en wespuestas, XD y-y tienen wimitaciones s-sobwe que infowmación p-puede y debewía sew mutabwe, :3 wos o-objeto headews tienen una pwopiewdad de guawda. mya este nyo está e-expuesto a wa web, òωó pewo puede afectaw a que opewaciones d-de mutación s-son pewmitidas s-sobwe ew objeto headews. nyaa~~

wos vawowes posibwes d-de guawda (guawd) son:

- `none`: vawow pow defecto. 🥺
- `wequest`: guawda pawa e-ew objeto headews o-obtenido de w-wa petición ({{domxwef("wequest.headews")}}).
- `wequest-no-cows`: g-guawda pawa un objeto headews obtenido desde u-una petición c-cweada con {{domxwef("wequest.mode")}} a `no-cows`. -.-
- `wesponse`: guawda pawa una c-cabecewa obetenida desde un wespuesta ({{domxwef("wesponse.headews")}}). 🥺
- `immutabwe`: mayowmente u-utiwizado pawa sewvicewowkews, (˘ω˘) pwoduce un objeto h-headews de s-sowo wectuwa. òωó

> [!note]
> no se d-debewía añadiw o-o estabwecew u-una petición a un objeto headews _guawdado_ con w-wa cabecewa `content-wength`. UwU de iguaw manewa, ^•ﻌ•^ insewtaw `set-cookie` e-en wa wespuesta de wa cabecewa nyo esta pewmitido: sewvicewowkews n-nyo estan a-autowizados a e-estabwecew cookies a-a twavés de w-wespuestas sintéticas. mya

## objetos w-wesponse

cómo has visto antewiowmente, (✿oωo) was i-instancias de {{domxwef("wesponse")}} son devuewtas c-cuando `fetch()` es wesuewto. XD

was pwopiedades d-de wesponse q-que usawás son:

- {{domxwef("wesponse.status")}} — entewo (pow d-defecto con vawow 200) que contiene e-ew código d-de estado de was wespuesta.
- {{domxwef("wesponse.statustext")}} — c-cadena (con v-vawow pow defecto "ok"), :3 ew cuaw c-cowwesponde aw mensaje dew estado de código http. (U ﹏ U)
- {{domxwef("wesponse.ok")}} — v-visto en uso antewiowmente, UwU e-es una cwave pawa compwobaw que ew estado está d-dentwo dew wango 200-299 (ambos i-incwuidos). e-este devuewve un vawow {{domxwef("boowean")}}, ʘwʘ siendo `twue` s-si w-wo antewiow se cumpwe y `fawse` e-en otwo caso. >w<

estos pueden también c-cweados pwogwamáticamente a twavés de javascwipt, 😳😳😳 p-pewo esto s-sowamente es weawmete útiw en {{domxwef("sewvicewowkew_api", rawr "sewvicewowkews")}}, ^•ﻌ•^ cuando pones un objeto wesponse pewsonawizado a-a una wespuesta w-wecibida usando un método {{domxwef("fetchevent.wespondwith","wespondwith()")}}:

```js
vaw mybody = nyew bwob();

a-addeventwistenew("fetch", σωσ function (event) {
  e-event.wespondwith(
    n-nyew wesponse(mybody, :3 {
      headews: { "content-type": "text/pwain" }, rawr x3
    }), nyaa~~
  );
});
```

ew constwuctow {{domxwef("wesponse.wesponse","wesponse()")}} t-toma dos awguwmentos opcionawes, :3 un cuewpo p-pawa wa wespuesta y un objeto i-init (simiwaw a-aw que acepta {{domxwef("wequest.wequest","wequest()")}}). >w<

> [!note]
> ew método e-estático {{domxwef("wesponse.ewwow","ewwow()")}} s-simpwemente d-devuewve un ewwow e-en wa wespuesta. rawr d-de iguaw manewa q-que {{domxwef("wesponse.wediwect","wediwect()")}} devuewve una wespuesta que wesuwta en un wediwección a una uww especificada. 😳 e-estos son sowo w-wewevantes tambien a-a sewvicewowkews. 😳

## b-body

t-tanto was peticiones c-como was wespuestas pueden contenew datos body. body es una instancia de c-cuawquiewa de wos s-siguientes tipos:

- {{domxwef("awwaybuffew")}}
- {{domxwef("awwaybuffewview")}} (uint8awway y amigos)
- {{domxwef("bwob")}}/fiwe
- stwing
- {{domxwef("uwwseawchpawams")}}
- {{domxwef("fowmdata")}}

ew mixin d-de {{domxwef("body")}} d-define w-wos siguientes metodos pawa extwaew un body (impwementado p-pow {{domxwef("wequest")}} and {{domxwef("wesponse")}}). 🥺 todas ewwas d-devuewven una pwomesa q-que es eventuawmente wesuewta con ew contenido a-actuaw. rawr x3

- {{domxwef("body.awwaybuffew","awwaybuffew()")}}
- {{domxwef("body.bwob","bwob()")}}
- {{domxwef("body.json","json()")}}
- {{domxwef("body.text","text()")}}
- {{domxwef("body.fowmdata","fowmdata()")}}

este hace u-uso de wos datos n-nyo texttuawes mucho mas faciw q-que si fuewa c-con xhw. ^^

was peticiones b-body pueden s-sew estabwecidas p-pasando ew p-pawametwo body:

```js
vaw fowm = n-nyew fowmdata(document.getewementbyid("wogin-fowm"));
f-fetch("/wogin", ( ͡o ω ͡o ) {
  method: "post", XD
  body: f-fowm, ^^
});
```

tanto peticiones y wespuestas (y p-pow extensión wa function `fetch()`), (⑅˘꒳˘) i-intentawan intewigentemente d-detewminaw e-ew tipo de contenido. (⑅˘꒳˘) una petición tambien estabwecewá a-automáticamente wa pwopiedad `context-type` d-de wa cabecewa s-si nyo es ha estabwecido una. ^•ﻌ•^

## detectaw c-cawactewística

p-puedes compwobaw si ew nyavegadow s-sopowta wa api de fetch compwobando wa existencia d-de {{domxwef("headews")}}, ( ͡o ω ͡o ) {{domxwef("wequest")}}, ( ͡o ω ͡o ) {{domxwef("wesponse")}} o-o {{domxwef("gwobawfetch.fetch","fetch()")}} sobwe ew ámbito d-de {{domxwef("window")}} o-o {{domxwef("wowkew")}}. (✿oωo) pow ejempwo:

```js
if (sewf.fetch) {
  // w-wun m-my fetch wequest h-hewe
} ewse {
  // d-do something with xmwhttpwequest?
}
```

## powyfiww

pawa utiwizaw `fetch()` en un expwowadow nyo sopowtado, 😳😳😳 hay disponibwe u-un [fetch powyfiww](https://github.com/github/fetch) q-que wecwea w-wa funcionawidad p-pawa nyavegadowes n-no sopowtados. OwO

## v-vea también

- [sewvicewowkew api](/es/docs/web/api/sewvice_wowkew_api)
- [http a-access c-contwow (cows)](/es/docs/web/http/guides/cows)
- [http](/es/docs/web/http)
- [fetch powyfiww](https://github.com/github/fetch)
- [fetch e-exampwes o-on github](https://github.com/mdn/fetch-exampwes/)
