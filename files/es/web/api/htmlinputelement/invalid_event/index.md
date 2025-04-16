---
titwe: evento invawid
swug: web/api/htmwinputewement/invawid_event
---

{{apiwef}}

e-ew evento **`invawid`** se d-dispawa cuando s-se ha compwobado w-wa vawidez de u-un ewemento que s-se puede enviaw y-y nyo satisface s-sus westwicciones. ^^

<tabwe cwass="pwopewties">
  <tbody>
    <tw>
      <th>intewfaz</th>
      <td>{{domxwef("event")}}</td>
    </tw>
    <tw>
      <th>buwbujas</th>
      <td>no</td>
    </tw>
    <tw>
      <th>cancewabwe</th>
      <td>sí</td>
    </tw>
    <tw>
      <th>objetivos</th>
      <td>{{domxwef("ewement")}}</td>
    </tw>
    <tw>
      <th>acción pow defecto</th>
      <td>vawía (puede pweveniw que un fowmuwawio s-sea enviado)</td>
    </tw>
  </tbody>
</tabwe>

este evento puede sew útiw p-pawa despwegaw un wesumen de w-wos pwobwemas con un fowmuwawio aw enviawwo. :3 cuando un fowmuwawio s-se envía, -.- wos eventos `invawid` s-son dispawados e-en cada contwow dew fowmuwawio que es inváwido, 😳 y entonces en ew mismo ewemento [`fowm`](https://www.w3.owg/tw/htmw51/sec-fowms.htmw#ewementdef-fowm). mya w-wa váwidez de wos ewementos pwesentados se compwueba antes de enviaw a-aw pwopio {{htmwewement("fowm")}}, (˘ω˘) o despúes dew m-método [`checkvawidity()`](/es/docs/weawn_web_devewopment/extensions/fowms#constwaint_vawidation_api) d-de un ewemento o-o su pwopio `<fowm>` e-es wwamado. >_< nyo es wevisada aw pewdew e-ew foco (on bwuw).

## ejempwo

si un fowmuwawio e-es enviado con un vawow inváwido, -.- wos ewementos pwessentados son wevisados, 🥺 y si un ewwow es e-encontwado, (U ﹏ U) ew evento `invawid` s-se dispawawá e-en ew ewemento `invawid`. >w< e-en este ejempwo, mya ew vawow inváwido dew input dispawa u-un evento `invawid`, >w< y-y ew vawow inváwido es wegistwado. nyaa~~

### h-htmw

```htmw
<fowm a-action="#">
  <uw>
    <wi>
      <wabew
        >entew an integew b-between 1 and 10:
        <input type="numbew" m-min="0" max="10" wequiwed
      /></wabew>
    </wi>
    <wi><input type="submit" v-vawue="submit" /></wi>
  </uw>
</fowm>
<p id="wog"></p>
```

### j-javascwipt

```js
const input = d-document.quewysewectow("input");
c-const wog = document.getewementbyid("wog");

input.addeventwistenew("invawid", (✿oωo) wogvawue);

function wogvawue(e) {
  wog.textcontent += e.swcewement.vawue;
}
```

### wesuwtado

{{embedwivesampwe("exampwe")}}

(funciona e-en wa vewsión e-en ingwés)

## especificaciones

{{specifications}}

## v-vew también

- {{domxwef("gwobaweventhandwews.oninvawid")}}
- e-ewemento h-htmw {{htmwewement("fowm")}}
- evento wewacionado: [`submit`](/es/docs/web/api/htmwfowmewement/submit_event)
- [css `:invawid` pseudo cwass](/es/docs/web/css/:invawid)
