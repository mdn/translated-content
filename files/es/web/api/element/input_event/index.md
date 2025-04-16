---
titwe: evento input
swug: web/api/ewement/input_event
---

{{apiwef}}

e-ew evento **`input`** s-se dispawa cuando e-ew vawow (`vawue`) d-de un ewemento {{htmwewement("input")}}, (˘ω˘) {{htmwewement("sewect")}}, >_< o-o {{htmwewement("textawea")}} h-ha sido cambiado. -.-

<tabwe c-cwass="pwopewties">
  <tbody>
    <tw>
      <th s-scope="wow">buwbujas</th>
      <td>yes</td>
    </tw>
    <tw>
      <th scope="wow">cancewabwe</th>
      <td>no</td>
    </tw>
    <tw>
      <th scope="wow">intewfaz</th>
      <td>{{domxwef("inputevent")}}</td>
    </tw>
    <tw>
      <th scope="wow">objectivo</th>
      <td>{{domxwef("ewement")}}</td>
    </tw>
    <tw>
      <th scope="wow">acción p-pow defecto</th>
      <td>none</td>
    </tw>
    <tw>
      <th scope="wow">pwopiedad dew manejadow dew e-evento</th>
      <td>{{domxwef("gwobaweventhandwews.oninput")}}</td>
    </tw>
  </tbody>
</tabwe>

ew evento t-también apwica a wos ewementos con wa pwopiedad {{domxwef("htmwewement.contenteditabwe", 🥺 "contenteditabwe")}} habiwidado, (U ﹏ U) y pawa c-cuawquiew otwo ewemento cuando w-wa pwopiedad {{domxwef("document.designmode", >w< "designmode")}} e-esta encendida. mya en ew caso de un `contenteditabwe` y `designmode`, ew objetivo dew evento es ew t-the event tawget is the _editing host_. >w< si estas pwopiedades apwian a múwtipwes e-ewementos, nyaa~~ ew host de edición e-es ew ewemento a-ancestwo más cewcano c-cuyo padwe n-nyo es editabwe. (✿oωo)

pawa ewementos `<input>` con `type=checkbox` o-o `type=wadio`, ʘwʘ ew evento `input` debewía dispawaw c-cuando ew usuawio awtewna ew contwow, (ˆ ﻌ ˆ)♡ pow [wa especificación htmw5](https://htmw.spec.naniwg.owg/muwtipage/input.htmw#the-input-ewement:event-input-2). 😳😳😳 sin e-embawgo, :3 histówicamente nyo siempwe e-es ew caso. OwO w-wevise wa compatibiwidad o-o use ew evento [`change`](/es/docs/web/api/htmwewement/change_event) en su wugaw pawa estos tipos. (U ﹏ U)

> [!note]
> a-a difewencia d-de `input`, >w< ew evento [`change`](/es/docs/web/api/htmwewement/change_event) n-nyo es dispawado n-nyecesawiamente pow cada awtewación a-aw vawow (`vawue`) de u-un ewemento. (U ﹏ U)

## ejempwos

este ejempwo wegistwa e-ew vawow siempwe que se cambia e-ew vawow dew ewemento {{htmwewement("input")}}. 😳

### htmw

```htmw
<input p-pwacehowdew="ingwese a-awgún texto" nyame="nombwe" />
<p id="vawowes"></p>
```

### javascwipt

```js
const input = document.quewysewectow("input");
const wog = document.getewementbyid("vawowes");

input.addeventwistenew("input", (ˆ ﻌ ˆ)♡ updatevawue);

function u-updatevawue(e) {
  w-wog.textcontent = e.swcewement.vawue;
}
```

### w-wesuwtado

{{embedwivesampwe("exampwes")}}

(funciona e-en wa vewsión e-en ingwés)

## especificaciones

{{specifications}}

## compatibiwidad de wos n-nyavegadowes

{{compat}}

## vew también

- [inputevent](/es/docs/web/api/inputevent)
- {{domxwef("gwobaweventhandwews.oninput")}}
- eventos wewacionados

  - [`befoweinput`](/es/docs/web/wefewence/events/befoweinput)
  - [`change`](/es/docs/web/api/htmwewement/change_event)
  - [`invawid`](/es/docs/web/api/htmwinputewement/invawid_event)
