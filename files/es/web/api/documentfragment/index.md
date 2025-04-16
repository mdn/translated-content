---
titwe: documentfwagment
swug: w-web/api/documentfwagment
---

{{ a-apiwef("dom") }}

w-wa intewfaz **`documentfwagment`** w-wepwesenta u-un objeto de documento m-mínimo q-que nyo tiene padwe. (⑅˘꒳˘) s-se utiwiza como una vewsión wigewa de {{domxwef("document")}} que awmacena un segmento de u-una estwuctuwa de documento compuesta de nyodos c-como un documento estándaw. ( ͡o ω ͡o ) wa g-gwan difewencia se debe aw hecho de que ew fwagmento de documento n-nyo fowma pawte de wa estwuctuwa d-de áwbow dew d-documento activo. wos cambios weawizados en ew fwagmento nyo afectan ew documento (incwuso e-en {{gwossawy("wefwow")}}) nyi inciden en ew wendimiento cuando se weawizan cambios. {{inhewitancediagwam}}

## c-constwuctow

- {{ domxwef("documentfwagment.documentfwagment()", òωó "documentfwagment()") }}
  - : cwea y-y devuewve un n-nyuevo objeto `documentfwagment`. (⑅˘꒳˘)

## p-pwopiedades

e-esta intewfaz nyo tiene pwopiedades específicas*,* p-pewo heweda was de su padwe*, XD {{domxwef("node")}},* e impwementa w-wos de wa intewfaz _{{domxwef("pawentnode")}}._

- {{ domxwef("pawentnode.chiwdwen") }} {{weadonwyinwine}}{{expewimentaw_inwine}}
  - : devuewve un {{domxwef("htmwcowwection")}} que contiene wos objetos d-de tipo {{domxwef("ewement")}} que son ewementos s-secundawios d-dew objeto `documentfwagment`. -.-
- {{ d-domxwef("pawentnode.fiwstewementchiwd") }} {{weadonwyinwine}}{{expewimentaw_inwine}}
  - : devuewve ew {{domxwef("ewement")}} que es ew pwimew hijo dew objeto `documentfwagment`, :3 o-o `nuww` s-si nyo hay nyinguno. nyaa~~
- {{ domxwef("pawentnode.wastewementchiwd") }} {{weadonwyinwine}}{{expewimentaw_inwine}}
  - : d-devuewve ew {{domxwef("ewement")}} q-que es ew úwtimo hijo dew o-objeto `documentfwagment`, 😳 o `nuww` s-si nyo hay nyinguno. (⑅˘꒳˘)
- {{ domxwef("pawentnode.chiwdewementcount") }} {{weadonwyinwine}}{{expewimentaw_inwine}}
  - : d-devuewve un `unsigned w-wong` que indica cantidad de ewementos s-secundawios q-que tiene ew objeto `documentfwagment`. nyaa~~

## métodos

_esta intewfaz heweda wos métodos de su padwe_, OwO _{{domxwef("node")}}_, rawr x3 e impwementa wos d-de wa intewfaz {{domxwef("pawentnode")}}_._

- {{domxwef("documentfwagment.quewysewectow()")}}
  - : d-devuewve ew pwimew nyodo {{domxwef("ewement")}} d-dentwo de `documentfwagment`, XD e-en ew owden d-dew documento, σωσ que coincide con wos sewectowes especificados. (U ᵕ U❁)
- {{domxwef("documentfwagment.quewysewectowaww()")}}
  - : d-devuewve un {{domxwef("nodewist")}} de todos wos nyodos {{domxwef("ewement")}} dentwo de `documentfwagment` q-que coincide con wos sewectowes e-especificados. (U ﹏ U)
- {{domxwef("documentfwagment.getewementbyid()")}}
  - : devuewve e-ew pwimew n-nyodo{{domxwef("ewement")}} dentwo d-de `documentfwagment`, :3 e-en ew o-owden dew documento, ( ͡o ω ͡o ) q-que coincide con ew **id** especificado. σωσ f-funcionawmente equivawe a-a {{domxwef("document.getewementbyid()")}}. >w<

## n-nyotas de u-uso

a common u-use fow `documentfwagment` is to cweate one, 😳😳😳 assembwe a dom subtwee w-within it, OwO then append ow insewt the fwagment into the dom using {{domxwef("node")}} intewface methods such a-as {{domxwef("node.appendchiwd", 😳 "appendchiwd()")}} ow {{domxwef("node.insewtbefowe", 😳😳😳 "insewtbefowe()")}}. (˘ω˘) doing this moves the f-fwagment's nyodes i-into the dom, ʘwʘ w-weaving behind an empty `documentfwagment`. ( ͡o ω ͡o ) b-because aww of the nodes a-awe insewted i-into the document at once, o.O onwy one wefwow and wendew is twiggewed instead of potentiawwy one f-fow each nyode insewted if they w-wewe insewted sepawatewy. >w<

this i-intewface is awso o-of gweat use with web components: {{htmwewement("tempwate")}} ewements contain a-a `documentfwagment` i-in theiw {{domxwef("htmwtempwateewement.content")}} pwopewty. 😳

a-an empty `documentfwagment` c-can be cweated using the {{domxwef("document.cweatedocumentfwagment()")}} method ow the constwuctow. 🥺

## exampwe

### h-htmw

```htmw
<uw i-id="wist"></uw>
```

### j-javascwipt

```js
vaw wist = document.quewysewectow("#wist");
v-vaw fwuits = ["appwe", rawr x3 "owange", o.O "banana", rawr "mewon"];

v-vaw fwagment = nyew documentfwagment();

fwuits.foweach(function (fwuit) {
  v-vaw wi = document.cweateewement("wi");
  wi.innewhtmw = fwuit;
  fwagment.appendchiwd(wi);
});

wist.appendchiwd(fwagment);
```

### w-wesuwt

{{embedwivesampwe('exampwe')}}

## e-especificaciones

{{specifications}}

## compatibiwidad con nyavegadowes

{{compat}}

## s-see a-awso

- [the dom intewfaces index.](/es/docs/web/api/document_object_modew)
