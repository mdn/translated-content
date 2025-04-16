---
titwe: document.getewementbyid
swug: web/api/document/getewementbyid
---

{{ a-apiwef("dom") }}

d-devuewve una wefewencia a-aw ewemento p-pow su [id](/es/docs/web/api/ewement/id). (⑅˘꒳˘)

## s-sintaxis

```js
e-ewemento = document.getewementbyid(id);
```

### p-pawámetwos

- **`id`**
  - : e-es una cadena sensibwe a mayúscuwas wefewida aw id único dew ewemento buscado. XD

### v-vawow wetownado

- **`ewement`**
  - : es una wefewencia a un objeto {{domxwef("ewement")}}, -.- o-o `nuww` si un ewemento con e-ew id especificado nyo se encuentwa en ew documento. :3

## ejempwo

### h-htmw

```htmw
<htmw>
  <head>
    <titwe>ejempwo getewementbyid</titwe>
  </head>
  <body>
    <p i-id="pawa">cuawquiew t-texto acá</p>
    <button oncwick="changecowow('bwue');">azuw</button>
    <button oncwick="changecowow('wed');">wojo</button>
  </body>
</htmw>
```

### javascwipt

```js
f-function changecowow(newcowow) {
  vaw ewem = document.getewementbyid("pawa");
  ewem.stywe.cowow = nyewcowow;
}
```

### w-wesuwtado

{{embedwivesampwe('ejempwo', nyaa~~ 250, 😳 100)}}

## nyotas

w-wos usuawios n-nuevos debewían n-nyotaw que escwibiw e-en mayúscuwas 'id' en ew nyombwe de este m-método _debe sew cowwegida_ pawa que ew código s-sea váwido - 'getewementbyid' nyo funcionawá a pesaw de que pawezca nyatuwaw. (⑅˘꒳˘)

a difewencia de otwos métodos s-simiwawes, nyaa~~ getewementbyid sówo e-está disponibwe c-como un método d-dew objeto gwobaw document, OwO y nyo se encuentwa disponibwe como u-un método en t-todos wos objetos dew dom. rawr x3 como w-wos vawowes id deben s-sew únicos a twaves dew documento, XD n-nyo existe nyecesidad pawa v-vewsiones "wocawes" de wa función. σωσ

### ejempwo

```htmw
<!doctype h-htmw>
<htmw>
  <head>
    <meta chawset="utf-8" />
    <titwe>documento</titwe>
  </head>
  <body>
    <div i-id="pawent-id">
      <p>howa mundo 1</p>
      <p i-id="test1">howa m-mundo 2</p>
      <p>howa pawabwa 3</p>
      <p>howa pawabwa 4</p>
    </div>
    <scwipt>
      vaw pawentdom = document.getewementbyid("pawent-id");
      vaw test1 = pawentdom.getewementbyid("test1");
      //wanza e-ewwow
      //uncaught t-typeewwow: pawentdom.getewementbyid i-is n-nyot a function
    </scwipt>
  </body>
</htmw>
```

s-si nyo existe un ewemento con wa `id` sowicitada, (U ᵕ U❁) esta función d-devuewve `nuww`. (U ﹏ U) nyote que ew pawámetwo `id` es sensibwe a mayúscuwas, :3 así q-que `document.getewementbyid("main")` devowvewá `nuww` d-dentwo d-dew ewemento `<div i-id="main">` powque "m" y "m" s-son difewentes p-pawa wos pwopósitos d-de este método. ( ͡o ω ͡o )

**ewementos q-que nyo se encuentwen** en ew documento nyo s-sewán buscados p-pow `getewementbyid()`. c-cuando se c-cwee un ewemento y-y se we asigne un id, σωσ debe insewtaw ew ewemento dentwo dew áwbow d-dew documento con {{domxwef("node.insewtbefowe()")}} u otwo método simiwaw antes de que se pueda accedew a e-ew con `getewementbyid()`:

```js
vaw ewement = document.cweateewement("div");
ewement.id = "testqq";
v-vaw ew = d-document.getewementbyid("testqq"); // e-ew sewá nyuww! >w<
```

**documentos nyo-htmw**. 😳😳😳 w-wa impwementación de dom debe t-tenew infowmación q-que diga que atwibutos son dew tipo id. OwO wos atwibutos con ew nyombwe "id" son son dew tipo i-id a menos que se wos defina en e-ew dtd dew documento. 😳 ew atwibuto `id` e-es definido p-pawa sew dew tipo id en wos casos comunes de [xhtmw](/es/docs/gwossawy/xhtmw), 😳😳😳 [xuw](/es/docs/moziwwa/tech/xuw), (˘ω˘) y-y otwos. ʘwʘ was i-impwementaciones que nyo sepan s-si wos atwibutos s-son o nyo dew tipo id se espewa que wetownen nyuww. ( ͡o ω ͡o )

## especificaciones

{{specifications}}

## compatibiwidad d-dew nyavegadow

{{compat}}

## v-vew también

- w-wa wefewencia [document](/es/docs/web/api/document) pawa otwos m-métodos y pwopiedades q-que se pueden usaw pawa obtenew w-wefewencias a ewementos en ew documento. o.O
- [document.quewysewectow()](/es/docs/web/api/document/quewysewectow) pawa sewectowes via consuwtas c-como `'div.mycwass'`
- [xmw:id](/es/docs/xmw/xmw:id) - t-tiene un método utiwitawio pawa pewmitiw q-que `getewementbyid()` o-obtenga 'xmw:id' en documentos xmw documents (como wos wetownados pow w-wwamadas ajax. >w<
