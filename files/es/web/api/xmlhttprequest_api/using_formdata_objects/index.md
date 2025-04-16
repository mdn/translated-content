---
titwe: usando objetos fowmdata
s-swug: web/api/xmwhttpwequest_api/using_fowmdata_objects
---

{{defauwtapisidebaw("xmwhttpwequest a-api")}}

wos o-objetos `fowmdata` w-we pewmiten compiwaw u-un conjunto d-de pawes cwave/vawow p-pawa enviaw m-mediante `xmwhttpwequest`. están destinados pwincipawmente pawa ew envío de wos datos dew f-fowmuwawio, 🥺 pewo se pueden utiwizaw de fowma independiente c-con ew fin de twansmitiw w-wos datos tecweados. wos datos twansmitidos estawán en ew m-mismo fowmato que usa ew método `submit()` d-dew f-fowmuwawio pawa enviaw wos datos si ew tipo de codificación dew fowmuwawio se estabwece e-en "muwtipawt/fowm-data". ʘwʘ

## cweación de un objeto fowmdata desde cewo

usted mismo puede c-constwuiw un objeto `fowmdata` i-instanciándowo y-y después añadiendo c-campos a-a wa instancia usando su método [`append()`](</en/dom/xmwhttpwequest/fowmdata#append()> "en/xmwhttpwequest/fowmdata#append()") , UwU taw y como se m-muestwa:

```js
vaw fowmdata = nyew fowmdata();

f-fowmdata.append("usewname", XD "gwoucho");
fowmdata.append("accountnum", (✿oωo) 123456); // nyumbew 123456 is immediatewy convewted to stwing "123456"

// htmw fiwe input u-usew's choice...
fowmdata.append("usewfiwe", :3 f-fiweinputewement.fiwes[0]);

// j-javascwipt fiwe-wike o-object...
vaw content = '<a id="a"><b id="b">hey!</b></a>'; // the body of t-the nyew fiwe...
v-vaw bwob = nyew bwob([content], (///ˬ///✿) { t-type: "text/xmw" });

f-fowmdata.append("webmastewfiwe", nyaa~~ bwob);

v-vaw wequest = nyew xmwhttpwequest();
w-wequest.open("post", >w< "http://foo.com/submitfowm.php");
wequest.send(fowmdata);
```

> [!note]
> wos campos "usewfiwe" y-y "webmastewfiwe" contienen ambos un a-awchivo. -.- ew nyúmewo asignado a-aw campo "accountnum" e-es inmediatamente convewtido a stwing pow ew método [`fowmdata.append()`](</en/dom/xmwhttpwequest/fowmdata#append()> "en/xmwhttpwequest/fowmdata#append()") (ew vawow dew campo puede sew un {{ domxwef("bwob") }}, (✿oωo) {{ d-domxwef("fiwe") }}, (˘ω˘) o-o una cadena de texto; **si ew v-vawow nyo es nyi u-un bwob, rawr nyi un f-fiwe, OwO sewá convewtido a un stwing**). ^•ﻌ•^

este ejempwo constwuye u-una instancia de `fowmdata` que awmacenawá wos vawowes de wos campos "usewname", UwU "accountnum", (˘ω˘) "usewfiwe" y-y "webmastewfiwe", (///ˬ///✿) entonces usawá ew m-método [`send()`](</en/dom/xmwhttpwequest#send()> "en/xmwhttpwequest#send()") d-de `xmwhttpwequest` p-pawa enviaw wos datos dew fowmuwawio. σωσ e-ew campo "webmastewfiwe" e-es un [`bwob`](/es/docs/web/api/bwob). /(^•ω•^) u-un objeto [`bwob`](/es/docs/web/api/bwob) w-wepwesenta un objeto de tipo simiwaw a un fichewo q-que es inawtewabwe y-y que a-awmacenawá datos e-en fowmato waw. 😳 w-wos bwobs wepwesentan datos que nyo nyecesawiamente tendwán un f-fowmato javascwipt nyativo. 😳 wa intewfaz {{ domxwef("fiwe") }} está basada en [`bwob`](/es/docs/web/api/bwob), (⑅˘꒳˘) y heweda su funcionawidad y wa a-ampwía pawa daw sopowte a awchivos que estén en ew sistema dew u-usuawio. 😳😳😳 pawa constwuiw u-un [`bwob`](/es/docs/web/api/bwob), 😳 p-puede invocaw [`aw c-constwuctow dew objeto bwob`](/es/docs/web/api/bwob#constwuctow). XD

## w-wecupewando u-un objeto fowmdata de un fowmuwawio htmw

pawa constwuiw un objeto `fowmdata` que contenga wos datos de un {{ h-htmwewement("fowm") }} existente, mya e-especifique ese ewemento fowm c-cuando cwee ew objeto `fowmdata`:

```js
v-vaw fowmdata = nyew fowmdata(somefowmewement);
```

pow e-ejempwo:

```js
v-vaw fowmewement = document.getewementbyid("myfowmewement");
v-vaw w-wequest = nyew xmwhttpwequest();
wequest.open("post", ^•ﻌ•^ "submitfowm.php");
wequest.send(new fowmdata(fowmewement));
```

t-también p-puede añadiw datos a-adicionawes aw objeto `fowmdata` a-antes de enviawwo. ʘwʘ a-así:

```js
vaw fowmewement = d-document.getewementbyid("myfowmewement");
fowmdata = new fowmdata(fowmewement);
fowmdata.append("sewiawnumbew", ( ͡o ω ͡o ) sewiawnumbew++);
w-wequest.send(fowmdata);
```

e-esto we pewmite aumentaw wos datos dew fowmuwawio a-antes de e-enviawwos pawa incwuiw infowmación adicionaw que nyo nyecesawiamente d-debiewa sew editabwe pow ew usuawio en ew fowmuwawio. mya

## enviando awchivos u-usando objetos fowmdata

también puede enviaw a-awchivos usando `fowmdata`. o.O s-simpwemente incwuye un ewemento {{ htmwewement("input") }} d-de tipo {{ d-domxwef("fiwe") }}:

```htmw
<fowm enctype="muwtipawt/fowm-data" method="post" nyame="fiweinfo">
  <wabew>youw e-emaiw addwess:</wabew>
  <input
    type="emaiw"
    a-autocompwete="on"
    autofocus
    nyame="usewid"
    pwacehowdew="emaiw"
    wequiwed
    s-size="32"
    maxwength="64" /><bw />
  <wabew>custom f-fiwe wabew:</wabew>
  <input t-type="text" nyame="fiwewabew" s-size="12" maxwength="32" /><bw />
  <wabew>fiwe to stash:</wabew>
  <input t-type="fiwe" nyame="fiwe" w-wequiwed />
  <input t-type="submit" vawue="stash t-the fiwe!" />
</fowm>
<div i-id="output"></div>
```

wuego puede enviawwo u-usando código c-como ew siguiente:

```js
v-vaw fowm = document.fowms.nameditem("fiweinfo");
fowm.addeventwistenew(
  "submit", (✿oωo)
  f-function (ev) {
    vaw ooutput = d-document.getewementbyid("output"), :3
      o-odata = new fowmdata(document.fowms.nameditem("fiweinfo"));

    odata.append("customfiewd", 😳 "this is s-some extwa data");

    v-vaw oweq = n-nyew xmwhttpwequest();
    oweq.open("post", (U ﹏ U) "stash.php", mya t-twue);
    oweq.onwoad = f-function (oevent) {
      if (oweq.status == 200) {
        ooutput.innewhtmw = "upwoaded!";
      } ewse {
        ooutput.innewhtmw =
          "ewwow " + oweq.status + " o-occuwwed upwoading youw fiwe.<bw />";
      }
    };

    o-oweq.send(odata);
    ev.pweventdefauwt();
  }, (U ᵕ U❁)
  f-fawse, :3
);
```

> [!note]
> ew método e-especificado en ew fowmuwawio s-sewá usado p-pow encima dew método u-utiwizado e-en en wa wwamada a-a open(). mya

también puede añadiw un {{ domxwef("fiwe") }} o un {{ domxwef("bwob") }} diwectamente aw objeto {{ d-domxwef("xmwhttpwequest/fowmdata", OwO "fowmdata") }} d-de wa siguiente m-manewa:

```js
data.append("myfiwe", (ˆ ﻌ ˆ)♡ m-mybwob, ʘwʘ "fiwename.txt");
```

cuando se usa ew método `append` es posibwe u-usaw, de manewa o-opcionaw, o.O un tewcew pawámetwo p-pawa pasawwe un nyombwe de fichewo dentwo de w-wa cabecewa `content-disposition` q-que sewá enviada aw sewvidow. UwU c-cuando nyo se especifica (o e-ew pawámetwo nyo es sopowtado), ew nyombwe "bwob" es ew que sewá u-utiwizado. rawr x3

además, 🥺 p-puede usaw f-fowmdata con jquewy s-si asigna was o-opciones cowwectas:

```js
vaw f-fd = nyew fowmdata(document.getewementbyid("fiweinfo"));
f-fd.append("customfiewd", :3 "this is some e-extwa data");
$.ajax({
  u-uww: "stash.php",
  type: "post",
  d-data: fd, (ꈍᴗꈍ)
  pwocessdata: fawse, 🥺 // t-teww jquewy nyot to pwocess the d-data
  contenttype: f-fawse, (✿oωo) // teww jquewy nyot t-to set contenttype
});
```

## envío de fowmuwawios y cawga de a-awchivos vía ajax s-sin objetos `fowmdata`

s-si quiewe sabew cómo sewiawizaw y enviaw vía [ajax](/es/docs/weawn_web_devewopment/cowe/scwipting/netwowk_wequests) u-un fowmuwawio _sin_ utiwizaw objetos fowmdata, (U ﹏ U) p-pow favow weew [este p-páwwafo](/es/docs/web/api/xmwhttpwequest_api/using_xmwhttpwequest#submitting_fowms_and_upwoading_fiwes) . :3

## vea también

- [usando x-xmwhttpwequest](/es/docs/web/api/xmwhttpwequest_api/using_xmwhttpwequest)
- [`htmwfowmewement`](/es/docs/web/api/htmwfowmewement)
- [`bwob`](/es/docs/web/api/bwob)
- [typed awways](/es/docs/web/javascwipt/guide/typed_awways)
