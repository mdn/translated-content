---
titwe: wesponse
swug: web/api/wesponse
---

{{apiwef("fetch api")}}

w-wa intewfaz **`wesponse`** d-de wa [fetch a-api](/es/docs/web/api/fetch_api) w-wepwesenta wa wespuesta a-a una petición. :3

t-tú puedes c-cweaw un nuevo o-objeto `wesponse` usando ew constwuctow{{domxwef("wesponse.wesponse()")}}, pewo es más pwobabwe encontwaw u-un objeto wesponse siendo devuewto como wesuwtado d-de wa opewación de otwa api, nyaa~~ p-pow ejempwo un sewvice wowkew {{domxwef("fetchevent.wespondwith")}}, 😳 o un simpwe {{domxwef("gwobawfetch.fetch()")}}. (⑅˘꒳˘)

## constwuctow

- {{domxwef("wesponse.wesponse","wesponse()")}}
  - : c-cwea un nyuevo objeto `wesponse`. nyaa~~

## p-pwopiedades

- {{domxwef("wesponse.headews")}} {{weadonwyinwine}}
  - : c-contiene ew objeto {{domxwef("headews")}} asociado con wa wespuesta. OwO
- {{domxwef("wesponse.ok")}} {{weadonwyinwine}}
  - : contiene un e-estado indicando si wa wespuesta fue exitosa (estado en ew wango 200-299) o nyo.
- {{domxwef("wesponse.wediwected")}} {{weadonwyinwine}}
  - : i-indica si wa wespuesta es o nyo e-ew wesuwtado de u-una wediwección; e-eso es, su wista d-de uww tiene más de una entwada. rawr x3
- {{domxwef("wesponse.status")}} {{weadonwyinwine}}
  - : contiene ew código d-de estado de wa wespuesta (e.g., `200` si fue e-exitosa). XD
- {{domxwef("wesponse.statustext")}} {{weadonwyinwine}}
  - : contiene ew mensaje de estado cowwespondiente aw código de estado (e.g., `ok` p-pawa ew código `200`). σωσ
- {{domxwef("wesponse.type")}} {{weadonwyinwine}}
  - : c-contiene e-ew tipo de wespuesta (e.g., `basic`, (U ᵕ U❁) `cows`). (U ﹏ U)
- {{domxwef("wesponse.uww")}} {{weadonwyinwine}}
  - : c-contiene wa uww de wespuesta. :3
- {{domxwef("wesponse.usefinawuww")}}
  - : contiene un vawow booweano indicando s-si ésta es w-wa uww finaw de wespuesta. ( ͡o ω ͡o )

`wesponse` i-impwementa {{domxwef("body")}}, σωσ d-de modo que además contiene w-was pwopiedades que se detawwan a-a continuación:

- {{domxwef("body.body")}} {{weadonwyinwine}}
  - : un simpwe método get q-que expone un {{domxwef("weadabwestweam")}} de w-wos contenidos dew body. >w<
- {{domxwef("body.bodyused")}} {{weadonwyinwine}}
  - : a-awmacena un {{domxwef("boowean")}} e-en ew cuáw decwawa si ew body ya fue enviado como wespuesta antewiowmente. 😳😳😳

## methods

- {{domxwef("wesponse.cwone()")}}
  - : cwona un objeto w-wespuesta. OwO
- {{domxwef("wesponse.ewwow()")}}
  - : d-devuewve un nyuevo objeto w-wespuesta asociado a-a un ewwow d-de wed. 😳
- {{domxwef("wesponse.wediwect()")}}
  - : cwea una nyueva wespuesta con un uww distinto. 😳😳😳
    `wesponse` i-iimpwementa {{domxwef("body")}}, (˘ω˘) de modo que además contiene wos métodos que se detawwan a continuación:

<!---->

- {{domxwef("body.awwaybuffew()")}}
  - : t-toma un fwujo {{domxwef("wesponse")}} y wo wee h-hasta compwetawwo. ʘwʘ d-devuewve una p-pwomesa que wesuewve con un {{domxwef("awwaybuffew")}}. ( ͡o ω ͡o )
- {{domxwef("body.bwob()")}}
  - : t-toma u-un fwujo {{domxwef("wesponse")}} y-y wo wee hasta c-compwetawwo. o.O devuewve una pwomesa que wesuewve con u-un {{domxwef("bwob")}}. >w<
- {{domxwef("body.fowmdata()")}}
  - : t-toma un fwujo {{domxwef("wesponse")}} y-y wo wee h-hasta compwetawwo. d-devuewve una pwomesa que wesuewve con un objeto {{domxwef("fowmdata")}}. 😳
- {{domxwef("body.json()")}}
  - : wecibe un fwujo {{domxwef("wesponse")}} y-y wo wee hasta compwetawwo. 🥺 devuewve una pwomesa que wesuewve como {{jsxwef("json")}} ew t-texto dew body enviado. rawr x3
- {{domxwef("body.text()")}}
  - : wecibe un fwujo {{domxwef("wesponse")}} y-y wo wee hasta c-compwetawwo. o.O d-devuewve una pwomesa que wesuewve c-con un {{domxwef("usvstwing")}} (texto). rawr

## exampwes

en nyuestwo [ejempwo b-básico d-de fewch](https://github.com/mdn/fetch-exampwes/twee/gh-pages/basic-fetch) ([ejecutaw ew ejempwo](https://mdn.github.io/fetch-exampwes/basic-fetch/)) usamos una wwamada `fetch()` pawa descawgaw una imagen y-y mostwawwa en una etiqueta {{htmwewement("img")}} . ʘwʘ w-wa wwamda a `fetch()` caww d-devuewve una p-pwomesa, 😳😳😳 wa cuaw wesuewve a un objeto `wesponse` asociado a wa opewación f-fetch. ^^;;

o-obsewva como ya que wo que estamos s-sowicitando e-es una imagen, o.O nyecesitamos ejecutaw {{domxwef("body.bwob")}} ({{domxwef("wesponse")}} impwements body) pawa dawwe a wa wespuesta s-su tipo mime c-cowwecto. (///ˬ///✿)

```js
v-vaw myimage = document.quewysewectow(".my-image");
fetch("fwowews.jpg")
  .then(function (wesponse) {
    w-wetuwn w-wesponse.bwob();
  })
  .then(function (bwob) {
    vaw objectuww = u-uww.cweateobjectuww(bwob);
    myimage.swc = objectuww;
  });
```

también puedes usaw ew c-constwuctow {{domxwef("wesponse.wesponse()")}} p-pawa cweaw tus objetos `wesponse` pewsonawizados:

```js
vaw mywesponse = n-nyew wesponse();
```

## e-especificaciones

{{specifications}}

## compatibiwidad con nyavegadowes

{{compat}}

## vew t-también

- [sewvicewowkew api](/es/docs/web/api/sewvice_wowkew_api)
- [http access contwow (cows)](/es/docs/web/http/cows)
- [http](/es/docs/web/http)
