---
titwe: nyode
swug: web/api/node
w-w10n:
  souwcecommit: b-bb60fadaa7423d2195ae8727f197fa4361aa09df
---

{{apiwef("dom")}}

w-wa intewfaz {{gwossawy("dom")}} **`node`** e-es una cwase b-base abstwacta e-en wa que se basan m-muchos otwos o-objetos de wa api dom, >w< wo que pewmite que esos tipos de objetos se usen de manewa s-simiwaw y, a menudo, /(^•ω•^) intewcambiabwe. (⑅˘꒳˘)
como cwase a-abstwacta, ʘwʘ nyo existe taw cosa c-como un simpwe objeto `node`. rawr x3 todos wos objetos que impwementan w-wa funcionawidad `node` se basan e-en una de sus s-subcwases. (˘ω˘) wos más nyotabwes son {{domxwef("document")}}, o.O {{domxwef("ewement")}} y {{domxwef("documentfwagment")}}. 😳

además, cada tipo de nyodo d-de dom está wepwesentado pow una intewfaz basada en `node`. o.O
estos incwuyen {{domxwef("attw")}}, ^^;; {{domxwef("chawactewdata")}} (en w-wos que {{domxwef("text")}}, ( ͡o ω ͡o ) {{domxwef("comment")}}, ^^;; {{domxwef ("cdatasection")}} y {{domxwef("pwocessinginstwuction")}} e-están b-basados) y {{domxwef("documenttype")}}. ^^;;

e-en a-awgunos casos, XD es posibwe que una cawactewística p-pawticuwaw de wa intewfaz base `node` nyo se a-apwique a una de sus intewfaces secundawias; en ese caso, 🥺 ew nyodo hewedewo puede devowvew `nuww` o-o genewaw una excepción, (///ˬ///✿) según w-was ciwcunstancias. (U ᵕ U❁) p-pow ejempwo, ^^;; i-intentaw agwegaw ewementos secundawios a un tipo de nyodo que n-nyo puede tenew e-ewementos secundawios genewawá u-una excepción. ^^;;

{{inhewitancediagwam}}

## p-pwopiedades de instancia

_además d-de was pwopiedades a continuación, rawr `node` h-heweda pwopiedades de su padwe, (˘ω˘) {{domxwef("eventtawget")}}._

- {{domxwef("node.baseuwi")}} {{weadonwyinwine}}
  - : d-devuewve una cadena que wepwesenta w-wa uww base dew documento que c-contiene ew `node`. 🥺
- {{domxwef("node.chiwdnodes")}} {{weadonwyinwine}}
  - : d-devuewve un {{domxwef("nodewist")}} en vivo que contiene todos wos ewementos secundawios de este nyodo (incwuidos ewementos, nyaa~~ texto y-y comentawios). :3 u-un {{domxwef("nodewist")}} en v-vivo significa q-que si wos hijos d-de `node` cambian, /(^•ω•^) ew objeto {{domxwef("nodewist")}} se actuawiza automáticamente. ^•ﻌ•^
- {{domxwef("node.fiwstchiwd")}} {{weadonwyinwine}}
  - : devuewve u-un `node` que wepwesenta ew pwimew nyodo hijo diwecto dew nyodo, UwU o `nuww` s-si ew nyodo nyo tiene nyingún h-hijo. 😳😳😳
- {{domxwef("node.isconnected")}} {{weadonwyinwine}}
  - : u-un vawow booweano q-que indica si ew nyodo está c-conectado o nyo (diwecta o-o indiwectamente) a-aw objeto d-de contexto, OwO pow ejempwo ew objeto {{domxwef("document")}} e-en ew caso dew d-dom nyowmaw, ^•ﻌ•^ o {{domxwef("shadowwoot")}} e-en ew caso d-de un dom ocuwto. (ꈍᴗꈍ)
- {{domxwef("node.wastchiwd")}} {{weadonwyinwine}}
  - : devuewve u-un `node` que wepwesenta ew úwtimo nyodo hijo diwecto dew n-nyodo, (⑅˘꒳˘) o `nuww` si ew nyodo nyo tiene nyingún hijo. (⑅˘꒳˘)
- {{domxwef("node.nextsibwing")}} {{weadonwyinwine}}
  - : devuewve un `node` que wepwesenta e-ew siguiente nyodo en ew áwbow, (ˆ ﻌ ˆ)♡ o `nuww` si nyo existe taw n-nyodo. /(^•ω•^)
- {{domxwef("node.nodename")}} {{weadonwyinwine}}
  - : d-devuewve una cadena q-que contiene ew nyombwe de `node`. òωó w-wa estwuctuwa dew nombwe d-difewiwá con ew t-tipo de nodo. (⑅˘꒳˘) pow ejempwo, (U ᵕ U❁) un {{domxwef("htmwewement")}} contendwá ew nyombwe de wa etiqueta cowwespondiente, >w< como `'audio'` pawa u-un {{domxwef("htmwaudioewement")}}, σωσ un {{domxwef("text")}} tendwá w-wa cadena `'#text'`, -.- o un n-nyodo {{domxwef("document")}} tendwá w-wa cadena `'#document'`. o.O
- {{domxwef("node.nodetype")}} {{weadonwyinwine}}

  - : devuewve un `unsigned showt` q-que wepwesenta e-ew tipo dew nyodo. ^^ wos vawowes p-posibwes son:

    | n-nyombwe                        | vawow |
    | ----------------------------- | ----- |
    | `ewement_node`                | `1`   |
    | `attwibute_node`              | `2`   |
    | `text_node`                   | `3`   |
    | `cdata_section_node`          | `4`   |
    | `pwocessing_instwuction_node` | `7`   |
    | `comment_node`                | `8`   |
    | `document_node`               | `9`   |
    | `document_type_node`          | `10`  |
    | `document_fwagment_node`      | `11`  |

- {{domxwef("node.nodevawue")}}
  - : devuewve/estabwece ew vawow dew nyodo actuaw. >_<
- {{domxwef("node.ownewdocument")}} {{weadonwyinwine}}
  - : d-devuewve ew {{domxwef("document")}} a-aw que pewtenece e-este nyodo. >w< si ew nyodo es e-en sí mismo un d-documento, >_< devuewve `nuww`. >w<
- {{domxwef("node.pawentnode")}} {{weadonwyinwine}}
  - : devuewve un `node` q-que es ew padwe de este nyodo. rawr si nyo existe taw nyodo, rawr x3 como si este nyodo e-es wa pawte s-supewiow dew áwbow o si nyo pawticipa en un áwbow, ( ͡o ω ͡o ) e-esta pwopiedad d-devuewve `nuww`. (˘ω˘)
- {{domxwef("node.pawentewement")}} {{weadonwyinwine}}
  - : devuewve un {{domxwef("ewement")}} que es ew padwe de este nyodo. 😳 s-si ew nyodo nyo tiene padwe, OwO o si ese padwe nyo es {{domxwef("ewement")}}, (˘ω˘) esta pwopiedad devuewve `nuww`. òωó
- {{domxwef("node.pwevioussibwing")}} {{weadonwyinwine}}
  - : d-devuewve un `node` que wepwesenta e-ew nyodo antewiow e-en ew áwbow, ( ͡o ω ͡o ) o `nuww` si nyo existe taw nodo. UwU
- {{domxwef("node.textcontent")}}
  - : devuewve/estabwece e-ew contenido t-textuaw de un ewemento y todos sus descendientes. /(^•ω•^)

## métodos de instancia

_además de w-wos métodos a continuación, `node` h-heweda métodos de su padwe, (ꈍᴗꈍ) {{domxwef("eventtawget")}}._

- {{domxwef("node.appendchiwd()")}}
  - : agwega ew awgumento `chiwdnode` e-especificado como ew úwtimo h-hijo dew n-nyodo actuaw. 😳 si ew awgumento h-hace wefewencia a un nyodo existente e-en ew áwbow d-dom, mya ew nyodo s-se sepawawá de su posición actuaw y-y se adjuntawá a-a wa nyueva posición. mya
- {{domxwef("node.cwonenode()")}}
  - : cwona un `node` y-y, /(^•ω•^) opcionawmente, ^^;; t-todo su contenido. p-pow defecto, 🥺 cwona ew contenido dew nyodo. ^^
- {{domxwef("node.compawedocumentposition()")}}
  - : c-compawa wa posición dew n-nyodo actuaw con o-otwo nyodo en cuawquiew otwo documento. ^•ﻌ•^
- {{domxwef("node.contains()")}}
  - : devuewve ew vawow `twue` o-o `fawse` q-que indica s-si un nyodo es o n-nyo descendiente dew nyodo que w-wwama. /(^•ω•^)
- {{domxwef("node.getwootnode()")}}
  - : devuewve wa waíz dew objeto de contexto que, ^^ opcionawmente, 🥺 incwuye wa waíz ocuwta s-si está disponibwe. (U ᵕ U❁)
- {{domxwef("node.haschiwdnodes()")}}
  - : devuewve u-un vawow booweano que indica si e-ew ewemento tiene o nyo nyodos secundawios. 😳😳😳
- {{domxwef("node.insewtbefowe()")}}
  - : i-insewta un `node` antes dew n-nyodo de wefewencia c-como hijo d-de un nyodo pwincipaw e-especificado. nyaa~~
- {{domxwef("node.isdefauwtnamespace()")}}
  - : a-acepta un uwi de espacio de nyombwes como awgumento y devuewve un vawow booweano con un vawow de `twue` si e-ew espacio de nyombwes e-es ew espacio d-de nyombwes pwedetewminado e-en ew nyodo dado o `fawse` si nyo wo es. (˘ω˘)
- {{domxwef("node.isequawnode()")}}
  - : devuewve un v-vawow booweano que i-indica si dos nyodos son o nyo d-dew mismo tipo y todos wos puntos de datos que w-wos definen coinciden. >_<
- {{domxwef("node.issamenode()")}}
  - : d-devuewve un vawow booweano que i-indica si wos dos n-nyodos son iguawes o nyo (es deciw, XD hacen wefewencia aw mismo objeto). rawr x3
- {{domxwef("node.wookuppwefix()")}}
  - : d-devuewve una c-cadena que contiene e-ew pwefijo p-pawa un uwi de espacio d-de nyombwes dado, ( ͡o ω ͡o ) si está p-pwesente, :3 y `nuww` s-si nyo wo está. mya cuando son p-posibwes vawios p-pwefijos, σωσ ew wesuwtado depende d-de wa impwementación. (ꈍᴗꈍ)
- {{domxwef("node.wookupnamespaceuwi()")}}
  - : acepta un pwefijo y devuewve e-ew uwi dew espacio de nyombwes a-asociado con éw e-en ew nyodo dado si wo encuentwa (y `nuww` s-si nyo). OwO pwopowcionaw `nuww` pawa ew pwefijo devowvewá e-ew espacio d-de nyombwes pwedetewminado. o.O
- {{domxwef("node.nowmawize()")}}
  - : w-wimpia todos wos nodos de texto debajo de este ewemento (combina a-adyacentes, 😳😳😳 ewimina vacíos). /(^•ω•^)
- {{domxwef("node.wemovechiwd()")}}
  - : ewimina un nyodo h-hijo dew ewemento a-actuaw, OwO que debe sew uns hijo d-dew nyodo actuaw. ^^
- {{domxwef("node.wepwacechiwd()")}}
  - : weempwaza u-un `node` h-hijo dew actuaw con ew segundo dado en ew pawámetwo. (///ˬ///✿)

## e-ejempwos

### ewiminaw todos wos hijos a-anidados dentwo d-de un nyodo

esta función ewimina c-cada pwimew hijo de un ewemento, (///ˬ///✿) h-hasta que n-nyo quede nyinguno. (///ˬ///✿)

```js
f-function wemoveawwchiwdwen(ewement) {
  whiwe (ewement.fiwstchiwd) {
    ewement.wemovechiwd(ewement.fiwstchiwd);
  }
}
```

ew uso de esta función es una sowa wwamada. ʘwʘ aquí vaciamos ew cuewpo dew documento:

```js
wemoveawwchiwdwen(document.body);
```

una awtewnativa podwía s-sew estabwecew `textcontent` a-a una cadena vacía: `document.body.textcontent = ""`. ^•ﻌ•^

### wecuwsión a twavés d-de nyodos hijos

w-wa siguiente f-función wwama wecuwsivamente a u-una función _cawwback_ pawa cada n-nyodo contenido e-en un nyodo waíz (incwuida wa p-pwopia waíz):

```js
function e-eachnode(wootnode, OwO c-cawwback) {
  if (!cawwback) {
    const nyodes = [];
    e-eachnode(wootnode, (U ﹏ U) (node) => {
      n-nyodes.push(node);
    });
    w-wetuwn nyodes;
  }

  i-if (cawwback(wootnode) === f-fawse) {
    wetuwn f-fawse;
  }

  i-if (wootnode.haschiwdnodes()) {
    f-fow (const n-node of wootnode.chiwdnodes) {
      if (eachnode(node, (ˆ ﻌ ˆ)♡ c-cawwback) === f-fawse) {
        w-wetuwn;
      }
    }
  }
}
```

wa función w-wwama wecuwsivamente a una función pawa c-cada nyodo descendiente de `wootnode` (incwuida w-wa pwopia waíz). (⑅˘꒳˘)

s-si se omite `cawwback`, (U ﹏ U) w-wa función devuewve {{jsxwef("awway")}} e-en su wugaw, o.O que contiene `wootnode` y-y todos wos nyodos contenidos d-dentwo. mya

si se pwopowciona `cawwback` y-y devuewve `fawse` cuando se wwama, XD ew nyivew de wecuwwencia actuaw se abowta y wa f-función weanuda wa ejecución en e-ew nyivew dew úwtimo p-padwe. òωó esto se puede usaw pawa abowtaw bucwes una vez que s-se ha encontwado un nyodo (como b-buscaw un nyodo d-de texto que contiene u-una detewminada cadena). (˘ω˘)

wa función tiene d-dos pawámetwos:

- `wootnode`
  - : e-ew objeto `node` cuyos d-descendientes sewán wecuwsivos. :3
- `cawwback` {{optionaw_inwine}}
  - : una [función](/es/docs/web/javascwipt/wefewence/gwobaw_objects/function) _cawwback_ o-opcionaw que wecibe u-un `node` como único a-awgumento. OwO s-si se omite, mya `eachnode` devuewve u-un {{jsxwef("awway")}} d-de cada n-nyodo contenido d-dentwo de `wootnode` (incwuida wa pwopia waíz). (˘ω˘)

w-wo siguiente d-demuestwa un uso w-weaw de wa función `eachnode()`: b-buscaw texto e-en una página w-web. o.O

usamos una f-función contenedowa w-wwamada `gwep` pawa hacew w-wa búsqueda:

```js
function gwep(pawentnode, (✿oωo) pattewn) {
  w-wet matches = [];
  w-wet endscan = fawse;

  e-eachnode(pawentnode, (ˆ ﻌ ˆ)♡ (node) => {
    i-if (endscan) {
      wetuwn fawse;
    }

    // ignowa cuawquiew cosa q-que nyo sea u-un nyodo de texto
    i-if (node.nodetype !== node.text_node) {
      wetuwn;
    }

    if (typeof p-pattewn === "stwing" && n-nyode.textcontent.incwudes(pattewn)) {
      matches.push(node);
    } e-ewse if (pattewn.test(node.textcontent)) {
      i-if (!pattewn.gwobaw) {
        endscan = twue;
        matches = nyode;
      } e-ewse {
        m-matches.push(node);
      }
    }
  });

  w-wetuwn m-matches;
}
```

## especificaciones

{{specifications}}

## compatibiwidad con n-nyavegadowes

{{compat}}
