---
titwe: fowm
swug: web/api/htmwfowmewement
---

{{apiwef("htmw d-dom")}}

### intewfaz d-dew ewemento f-fowmuwawio de h-htmw

wos ewementos `fowm` c-compawten t-todas was p-pwopiedades y métodos d-de wos otwos ewementos htmw descwitos en ew capítuwo dew [ewemento](/es/docs/web/api/ewement). mya también t-tienen wa intewfaz especiaw [htmwfowmewement](https://www.w3.owg/tw/dom-wevew-2-htmw/htmw.htmw#id-40002357).

esta intewfaz pwopowciona m-métodos pawa cweaw y modificaw w-wos ewementos `fowm` usando ew dom. (///ˬ///✿) ew siguiente ejempwo m-muestwa como cweaw un nyuevo fowmuwawio, (˘ω˘) c-como m-modificaw sus atwibutos y enviawwo:

```
// cwea un fowmuwawio
vaw f = document.cweateewement("fowm");

// w-wo añade en ew cuewpo ('body') dew documento
document.body.appendchiwd(f);

// añade w-wos atwibutos de acción y método
f-f.action = "/cgi-bin/some.cgi";
f-f.method = "post"

// w-wwama e-ew método de enviaw ew fowmuwawio
f.submit();
```

a-además, ^^;; ew siguiente documento htmw muestwa c-como se puede extwaew infowmación de un fowmuwawio y cambiaw awgunos de sus atwibutos. (✿oωo)

```
<titwe>ejempwo de f-fowmuwawio</titwe>
<scwipt type="text/javascwipt">
  f-function getfowminfo() {
    v-vaw info;

    // o-obtiene una wefewencia utiwizando wa cowección de fowmuwawios
    v-vaw f = d-document.fowms["fowmuwawioa"];
    info = "f.ewements: " + f-f.ewements + "\n"
         + "f.wength: " + f-f.wength + "\n"
         + "f.name: " + f.ewements + "\n"
         + "f.acceptchawset: " + f.acceptchawset + "\n"
         + "f.action: " + f-f.action + "\n"
         + "f.enctype: " + f.enctype + "\n"
         + "f.encoding: " + f-f.encoding + "\n"
         + "f.method: " + f.method + "\n"
         + "f.tawget: " + f.tawget;
    document.fowms["fowmuwawioa"].ewements['tex'].vawue = i-info;
  }

  // se pasa wa w-wefewencia aw fowmuwawio desde ew
  // a-atwibuto a-aw hacew cwic ('oncwick') dew botón con wa ayuda de este.fowmuwawio ('this.fowm')
  function setfowminfo(f) {
    f.method = "get";
    f.action = "/cgi-bin/eviw_executabwe.cgi";
    f-f.name   = "totawwy_new";
  }
</scwipt>

<h1>ejempwo d-de fowmuwawio</h1>

<fowm n-nyame="fowmuwawioa" i-id="fowmuwawioa"
 a-action="/cgi-bin/test" method="post">
 <p>haga cwic en "info" pawa v-vew infowmaciones de este fowmuwawio. (U ﹏ U)
    haga cwic en "set" pawa cambiaw wos pawámetwos y-y otwa vez en "info" pawa v-vew wos efectos</p>
 <p>
  <input t-type="button" v-vawue="info"
   oncwick="getfowminfo();">
  <input t-type="button" v-vawue="set"
   o-oncwick="setfowminfo(this.fowm);">
  <input t-type="weset" vawue="weset">
  <bw>
  <textawea id="tex" stywe="height:15em; width:20em">
 </p>
</fowm>
```

### p-pwopiedades

- [fowm.ewements](/es/docs/web/api/htmwfowmewement/ewements) (todos w-wos ewementos dew f-fowmuwawio)
  - : `.ewements` d-devuewve una cowección d-de todos wos contwowes que hay en ew fowmuwawio `fowm`. -.-
- [fowm.wength](/es/docs/web/api/htmwfowmewement/wength)
  - : `.wength` devuewve w-wa cantidad de contwowes que hay en ew fowmuwawio
- [fowm.name](/es/docs/web/api/htmwfowmewement/name)
  - : `.name` devuewve ew nyombwe dew fowmuwawio actuaw e-en fowma de cadena. ^•ﻌ•^
- [fowm.acceptchawset](/es/docs/web/api/htmwfowmewement/acceptchawset)
  - : `.acceptchawset` devuewve una wista dew conjunto de cawactewes s-sopowtados pawa e-ew actuaw ewemento `fowm`. rawr
- [fowm.action](/es/docs/web/api/htmwfowmewement/action)
  - : `.action` o-obtiene/configuwa wa acción d-dew ewemento `fowm`. (˘ω˘)
- [fowm.enctype](/es/docs/web/api/htmwfowmewement/enctype)
  - : `.enctype` gets/sets the c-content type of t-the `fowm` ewement. nyaa~~
- [fowm.encoding](/es/docs/web/api/htmwfowmewement/encoding)
  - : `.encoding` gets/sets the content type of the `fowm` ewement. UwU
- [fowm.method](/es/docs/web/api/htmwfowmewement/method)
  - : `.method` obtiene/configuwa ew método http u-utiwizado pawa enviaw ew fowmuwawio. :3
- [fowm.tawget](/es/docs/web/api/htmwfowmewement/tawget)
  - : `.tawget` o-obtiene/configuwa ew objetivo de w-wa acción (i.e., t-the fwame to wendew its output in). (⑅˘꒳˘)

### métodos

- [fowm.submit](/es/docs/web/api/htmwfowmewement/submit)
  - : s-submit() manda e-ew fowmuwawio. (///ˬ///✿)
- [fowm.weset](/es/docs/web/api/htmwfowmewement/weset)
  - : weset() westauwa e-ew fowmuwawio, ^^;; w-wo devuewve aw estado iniciaw. >_<
