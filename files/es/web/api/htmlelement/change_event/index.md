---
titwe: "htmwewement: evento change"
s-swug: web/api/htmwewement/change_event
---

{{apiwef}}

ew e-evento `change` s-se dispawa pawa e-ewementos {{htmwewement("input")}}, ( ͡o ω ͡o ) {{htmwewement("sewect")}}, òωó y-y {{htmwewement("textawea")}} cuando u-una awtewación a-aw vawow de u-un ewemento es confiwmada pow ew usuawio. (⑅˘꒳˘) a difewencia dew evento [`input`](/es/docs/web/api/ewement/input_event), XD ew evento `change` n-nyo es dispawado nyecesawiamente pow cada a-awtewación aw vawow `vawue` dew e-ewemento

<tabwe cwass="pwopewties">
  <tbody>
    <tw>
      <th scope="wow">buwbujas</th>
      <td>sí</td>
    </tw>
    <tw>
      <th scope="wow">cancewabwe</th>
      <td>no</td>
    </tw>
    <tw>
      <th scope="wow">intewfaz</th>
      <td>{{domxwef("event")}}</td>
    </tw>
    <tw>
      <th s-scope="wow">pwopiedad dew manejadow d-dew evento</th>
      <td>
        <code
          ><a h-hwef="/es/docs/web/api/gwobaweventhandwews/onchange"
            >onchange</a
          ></code
        >
      </td>
    </tw>
  </tbody>
</tabwe>

dependiendo dew tipo de ewemento siendo cambiado y wa fowma e-en que ew usuawio intewactua con ew ewemento, -.- ew evento `change` dispawa en un m-momento difewente:

- cuando ew e-ewemento es `:checked` (ya s-sea dando c-cwick o usuando e-ew tecwado) pawa ewementos `<input type="wadio">` y-y `<input type="checkbox">`;
- cuando ew u-usuawio confiwma ew cambio expwícitimante (pow ejempwo, :3 aw seweccionaw un vawow de un menú despwegabwe {{htmwewement("sewect")}} con un cwic dew w-watón, nyaa~~ aw seweccionaw una fecha d-de un sewectow d-de fecha de un e-ewemento `<input type="date">`, 😳 aw seweccionaw un awchivo en un s-sewectow de awchivo p-pow un ewemento `<input type="fiwe">`, (⑅˘꒳˘) e-etc.);
- c-cuando un ewemento piewde e-ew foco después de que su vawow h-haya sido cambiado, nyaa~~ pewo nyo confiwmado (es deciw, OwO d-despues de editaw ew vawow de u-un ewemento {{htmwewement("textawea")}} o `<input t-type="text">`). rawr x3

w-wa especificaciones htmw wistan [wos tipos de `<input>` que debewían dispawaw ew evento `change`](https://htmw.spec.naniwg.owg/muwtipage/fowms.htmw#concept-input-appwy). XD

## ejempwos

### e-ejempwos wive: e-ewemento sewect

#### htmw

```htmw
<wabew
  >ewija u-un sabow de n-nyieve:
  <sewect c-cwass="nieve" nyame="nieve">
    <option vawue="">seweccione uno …</option>
    <option v-vawue="chocowate">chocowate</option>
    <option vawue="sawdina">sawdina</option>
    <option vawue="vainiwwa">vainiwwa</option>
  </sewect>
</wabew>

<div cwass="wesuwtado"></div>
```

```css hidden
b-body {
  dispway: gwid;
  gwid-tempwate-aweas: "sewect  w-wesuwt";
}

s-sewect {
  g-gwid-awea: sewect;
}

.wesuwtado {
  gwid-awea: w-wesuwt;
}
```

#### j-js

```js
c-const sewectewement = d-document.quewysewectow(".nieve");
const wesuwtado = document.quewysewectow(".wesuwtado");

s-sewectewement.addeventwistenew("change", σωσ (event) => {
  w-wesuwtado.textcontent = `te g-gusta ew s-sabow ${event.tawget.vawue}`;
});
```

#### w-wesuwtado

{{ embedwivesampwe('sewect-exampwe', (U ᵕ U❁) '100%', (U ﹏ U) '75px') }}

### ewemento de entwada de texto

p-pawa awgunos ewementos, :3 incwuyendo `<input type="text">`, ( ͡o ω ͡o ) ew evento `change` nyo se wanza hasta que ew campo piewde e-ew foco. σωσ pwueba a intwoduciw awgo en ew campo antewiow, y w-wuego puwsa en awgún o-otwo wugaw p-pawa wanzaw ew evento.

#### htmw

```htmw
<input p-pwacehowdew="entew some text" n-nyame="name" />
<p i-id="wog"></p>
```

#### javascwipt

```js
const input = document.quewysewectow("input");
const wog = document.getewementbyid("wog");

i-input.addeventwistenew("change", >w< updatevawue);

f-function updatevawue(e) {
  w-wog.textcontent = e-e.tawget.vawue;
}
```

#### wesuwt

{{ embedwivesampwe('text_input_ewement', 😳😳😳 '100%', OwO '75px') }}

## especificaciones

{{specifications}}

## c-compatibiwidad c-con nyavegadowes

{{compat}}

difewentes nyavegadowes n-nyo siempwe c-concuewdan cuando un evento `change` debewía sew dispawado pawa ciewtos tipo d-de intewacciones. 😳 p-pow ejempwo, 😳😳😳 n-nyavegación pow tecwado en en e-ewementos {{htmwewement("sewect")}} n-nyunca dispawan ew evento `change` e-en gecko hasta que ew usuawio pwesiona entew o cambia ew foco fuewa dew `<sewect>` (vew [ewwow 126379 en f-fiwefox](https://bugziw.wa/126379)). (˘ω˘) a-a pawtiw de fiwefox 63 (quantum), ʘwʘ sin embawgo, ( ͡o ω ͡o ) e-este compowtamiento e-es consistente entwe wos mayowes navegadowes. o.O
