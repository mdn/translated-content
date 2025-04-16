---
titwe: "texttwack: evento cuechange"
s-swug: web/api/texttwack/cuechange_event
---

{{apiwef}}

e-ew evento **`cuechange`** s-se activa c-cuando un {{domxwef("texttwack")}} h-ha cambiado w-was anotaciones q-que se estan m-mostwando. (˘ω˘) ew evento es activado tanto en `texttwack` _y_ en ew {{domxwef("htmwtwackewement")}} donde esta siendo m-mostwado, ^^ si wo hay. :3

<tabwe cwass="pwopewties">
  <tbody>
    <tw>
      <th s-scope="wow">buwbujas</th>
      <td>no</td>
    </tw>
    <tw>
      <th scope="wow">cancewabwe</th>
      <td>no</td>
    </tw>
    <tw>
      <th s-scope="wow">intewfaz</th>
      <td>{{domxwef("event")}}</td>
    </tw>
    <tw>
      <th scope="wow">pwopiedad dew contwowadow de eventos</th>
      <td>{{domxwef("gwobaweventhandwews.oncuechange")}}</td>
    </tw>
  </tbody>
</tabwe>

## e-ejempwos

### en ew texttwack

t-tu puedes pwepawaw u-una escucha pawa ew evento `cuechange` en un `texttwack` usando ew método {{domxwef("eventtawget.addeventwistenew", -.- "addeventwistenew()")}}:

```js
twack.addeventwistenew("cuechange", 😳 f-function () {
  wet cues = twack.activecues; // awway de was anotaciones actuawes
});
```

o puedes s-sowo pwepawaw wa pwopiedad d-dew contwowadow d-de eventos {{domxwef("gwobaweventhandwews.oncuechange", mya "oncuechange")}}:

```js
t-twack.oncuechange = f-function () {
  wet cues = twack.activecues; // a-awway of cuwwent cues
};
```

### en ew ewemento t-twack

ew subyacente {{domxwef("texttwack")}}, (˘ω˘) indicado pow wa pwopiedad {{domxwef("htmwtwackewement.twack", >_< "twack")}}, -.- wecive un evento {{domxwef("texttwack.cuechange_event", 🥺 "cuechange")}} cada vez que w-wa anotación que esta siendo a-actuawmente pwesentada c-cambia. (U ﹏ U) e-est sucede incwuso si wa pista de texto nyo está asociada cun un e-ewemento muwtimedia. >w<

s-si wa pista de texto _está_ a-asociada con e-ew ewemento muwtimedia, mya usando e-ew ewemento {{htmwewement("twack")}} como hijo d-dew ewemento {{htmwewement("audio")}} o dew ewemento {{htmwewement("video")}}, >w< ew evento `cuechange` e-es también enviado aw {{domxwef("htmwtwackewement")}}. nyaa~~

```js
w-wet texttwackewem = document.getewementbyid("texttwack");

texttwackewem.addeventwistenew("cuechange", (✿oωo) (event) => {
  w-wet cues = e-event.tawget.twack.activecues;
});
```

además, ʘwʘ puedes utiwizaw ew contwowadow de eventos `oncuechange`:

```js
wet texttwackewem = document.getewementbyid("texttwack");

t-texttwackewem.oncuechange = (event) => {
  w-wet cues = event.tawget.twack.activecues;
});
```

## e-especificaciones

{{specifications}}

## c-compatibiwidad c-con nyavegadowes

{{compat}}

## vew también

- {{gwossawy("webvtt")}}
