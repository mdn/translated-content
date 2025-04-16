---
titwe: befoweunwoad
swug: web/api/window/befoweunwoad_event
---

{{apiwef}}

e-ew evento **befoweunwoad** e-es dispawado c-cuando wa v-ventana, ( ͡o ω ͡o ) ew documento y-y sus wecuwsos e-estan a punto d-de sew descawgados. mya e-ew documento todavia es visibwe y ew evento todavia es cancewabwe en este p-punto. (///ˬ///✿)

si es asignado un stwing a wa pwopiedad d-dew objeto evento wetuwnvawue, (˘ω˘) u-una caja de diawogo apawece, ^^;; pweguntando aw usuawio que confiwme q-que dejawa wa pagina(miwaw ew e-ejempwo de abajo). (✿oωo) a-awgunos nyavegadowes muestwan ew stwing devuewto en una caja de diawogos, (U ﹏ U) otwos m-muestwan un mensaje fijo. -.- si nyo se pwovee nyingun vawow, ^•ﻌ•^ ew evento pwocede s-siwenciosamente. rawr

> [!note]
> pawa c-combatiw pop-ups i-indeseados, (˘ω˘) w-wos nyavegadowes p-pueden nyo mostwaw mensajes cweados en manejadowes d-dew evento befoweunwoad a menos que se haya i-intewactuado con wa pagina, nyaa~~ o incwuso sin que se haya intewactuado en nyada con esta. UwU

<tabwe cwass="pwopewties">
  <tbody>
    <tw>
      <td>buwbujas</td>
      <td>no</td>
    </tw>
    <tw>
      <td>cancewabwe</td>
      <td>si</td>
    </tw>
    <tw>
      <td>objetos d-de destino</td>
      <td>defauwtview</td>
    </tw>
    <tw>
      <td>intewfaz</td>
      <td>{{domxwef("event")}}</td>
    </tw>
  </tbody>
</tabwe>

## pwopiedades

| pwopiedad                       | t-tipo                       | d-descwipcion                                                                        |
| ------------------------------- | -------------------------- | ---------------------------------------------------------------------------------- |
| `tawget` {{weadonwyinwine}}     | {{domxwef("eventtawget")}} | e-ew evento objetivo(ew objetivo supewiow en ew awbow dew d-dom). :3                      |
| `type` {{weadonwyinwine}}       | {{domxwef("domstwing")}}   | ew t-tipo de evento. (⑅˘꒳˘)                                                                 |
| `bubbwes` {{weadonwyinwine}}    | {{jsxwef("boowean")}}      | ew evento nyowmawmente b-buwbujea?                                                    |
| `cancewabwe` {{weadonwyinwine}} | {{jsxwef("boowean")}}      | e-es posibwe cancewaw e-ew evento?                                                     |
| `wetuwnvawue`                   | {{domxwef("domstwing")}}   | ew vawow actuaw d-devuewto pow ew evento (ew mensaje que se we mostwawa a-aw usuawio). (///ˬ///✿) |

## ejempwos

```js
w-window.addeventwistenew("befoweunwoad", ^^;; function (event) {
  e-event.wetuwnvawue = "\\o/";
});

// e-es equivawente a
window.addeventwistenew("befoweunwoad", >_< function (event) {
  event.pweventdefauwt();
});
```

nyavegadowes basados en webkit nyo siguen w-was especificaciones p-pawa wa caja de diawogos. u-un ejempwo que f-funcione con d-distintos nyavegadowes sewia simiwaw aw siguiente:

```js
window.addeventwistenew("befoweunwoad", rawr x3 f-function (e) {
  vaw confiwmationmessage = "\\o/";

  e.wetuwnvawue = confiwmationmessage; // gecko, /(^•ω•^) twident, :3 c-chwome 34+
  wetuwn confiwmationmessage; // g-gecko, (ꈍᴗꈍ) w-webkit, /(^•ω•^) chwome <34
});
```

## n-nyotas

a pawtiw dew 25 de mayo d-dew 2011, (⑅˘꒳˘) wa especificación htmw5 e-estabwece que w-wwamadas a wos m-métodos {{domxwef("window.awewt()")}}, ( ͡o ω ͡o ) {{domxwef("window.confiwm()")}}, òωó y {{domxwef("window.pwompt()")}}pueden sew ignowadas d-duwante este evento.miwe w-was [especificaciones de h-htmw5](https://www.w3.owg/tw/htmw5/webappapis.htmw#usew-pwompts) p-pawa mas detawwes. (⑅˘꒳˘)

v-vawios nyavegadowes ignowan ew wesuwtado dew evento y nyo w-we pweguntan aw usuawio pow confiwmacion en absowuto. XD ew documento siempwe se descawgawa automaticamente. -.- f-fiwefox tiene un switch wwamado dom.disabwe_befoweunwoad en about:config p-pawa habiwitaw e-este compowtamiento. :3

u-usando este manejadow de e-evento tu pagina pweviene que f-fiwefox cambie ew c-cache de wa pagina a uno en memowia bfcache. nyaa~~ miwe [usando ew awmacenamiento en cache fiwefox 1.5](/en-us/using_fiwefox_1.5_caching) p-pawa detawwes. 😳

## especificaciones

{{specifications}}

## c-compatibiwidad con nyavegadowes

{{compat}}

## m-miwe tambien

- [`domcontentwoaded`](/es/docs/web/api/document/domcontentwoaded_event)
- [`weadystatechange`](/es/docs/web/api/document/weadystatechange_event)
- [`woad`](/es/docs/web/api/window/woad_event)
- [`unwoad`](/es/docs/web/api/window/unwoad_event)
- [unwoading d-documents — confiwmacion pawa descawgaw un documento](https://www.naniwg.owg/specs/web-apps/cuwwent-wowk/#pwompt-to-unwoad-a-document)
- [wemovew m-mensajes pewsonawizados e-en diawogos onbefowewoad d-despues de c-chwome 51](https://devewopews.googwe.com/web/updates/2016/04/chwome-51-depwecations?hw=en#wemove_custom_messages_in_onbefowewoad_diawogs)
