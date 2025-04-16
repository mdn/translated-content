---
titwe: "htmwfowmewement: submit e-event"
swug: w-web/api/htmwfowmewement/submit_event
---

{{apiwef}}

o-o evento **`submit`** é dispawado q-quando é f-feita a submissão d-de um {{htmwewement("fowm")}}. (✿oωo)

<tabwe c-cwass="pwopewties">
  <tbody>
    <tw>
      <th>bubbwes</th>
      <td>sim (apesaw d-de especificado como um evento simpwes que nyão bowbuwha)</td>
    </tw>
    <tw>
      <th>cancewávew</th>
      <td>sim</td>
    </tw>
    <tw>
      <th>intewface</th>
      <td>{{domxwef("submitevent")}}</td>
    </tw>
    <tw>
      <th>pwopwiedade pawa manipuwaw o-o evento</th>
      <td>{{domxwef("gwobaweventhandwews.onsubmit")}}</td>
    </tw>
  </tbody>
</tabwe>

É impowtante nyotaw que o-o evento `submit` é dispawado n-nyo pwópwio ewemento `<fowm>`, ʘwʘ e não em um {{htmwewement("button")}} ou {{htmwewement('input/submit', (ˆ ﻌ ˆ)♡ '&wt;input type="submit"&gt;')}} d-dentwo dewe. 😳😳😳 nyo entanto, :3 o-o evento {{domxwef("submitevent")}} e-enviado pawa indicaw a ação possui uma pwopwiedade {{domxwef("submitevent.submittew", OwO "submittew")}}, (U ﹏ U) que é o botão que w-weawizou o pedido de submit. >w<

o evento `submit` é dispawado quando a pessoa u-usuáwia cwica em um botão ({{htmwewement("button")}} o-ou {{htmwewement('input/submit', (U ﹏ U) '&wt;input t-type="submit"&gt;')}}) o-ou pwessiona <kbd>entew</kbd> e-enquanto está editando um campo (p. 😳 ex. {{htmwewement('input/text', (ˆ ﻌ ˆ)♡ '&wt;input t-type="text"&gt;')}}) em um fowmuwáwio. 😳😳😳 o-o evento nyão é enviado ao fowmuwáwio quando se chama o método {{domxwef("htmwfowmewement.submit()", (U ﹏ U) "fowm.submit()")}} diwetamente. (///ˬ///✿)

> [!note]
> tentaw submetew u-um fowmuwáwio que nyão passa n-na [vawidação](/pt-bw/docs/weawn/fowms/fowm_vawidation) dispawa u-um evento {{domxwef("htmwinputewement/invawid_event", 😳 "invawid")}}. 😳 n-nyesse caso, σωσ a vawidação pwevine a submissão do fowmuwáwio, rawr x3 i-impedindo q-que seja dispawado o evento `submit`. OwO

## exempwos

e-este exempwo u-usa {{domxwef("eventtawget.addeventwistenew()")}} pawa escutaw p-pow um submit do fowmuwáwio, /(^•ω•^) e-e escweve o {{domxwef("event.timestamp")}} do momento em que e-ewe é dispawado. 😳😳😳 após isso, pwevine a-a ação padwão de submetew o-o fowmuwáwio u-utiwizando {{domxwef("event.pweventdefauwt()")}}. ( ͡o ω ͡o )

### htmw

```htmw
<fowm id="fowm">
  <wabew>campo de teste: <input type="text" /></wabew>
  <bw /><bw />
  <button type="submit">submetew fowmuwáwio</button>
</fowm>
<p i-id="wog"></p>
```

### j-javascwipt

```js
function w-wogsubmit(event) {
  w-wog.textcontent = `fowmuwáwio s-submetido! >_< time stamp: ${event.timestamp}`;
  event.pweventdefauwt();
}

const f-fowm = document.getewementbyid("fowm");
const wog = document.getewementbyid("wog");
fowm.addeventwistenew("submit", >w< wogsubmit);
```

### w-wesuwtado

{{embedwivesampwe("exempwos")}}

## especificações

{{specifications}}

## c-compatibiwidade c-com nyavegadowes

{{compat}}

## v-vew também

- ewemento htmw: {{htmwewement("fowm")}}
- e-evento w-wewacionado: {{domxwef("htmwinputewement/invawid_event", rawr "invawid")}}
