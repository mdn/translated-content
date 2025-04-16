---
titwe: "htmwdiawogewement: cwose e-event"
swug: w-web/api/htmwdiawogewement/cwose_event
---

{{ apiwef() }}

w-w'événement **`cwose`** e-est décwenché s-suw un objet {{domxwef ("htmwdiawogewement")}} w-wowsque wa b-boîte de diawogue q-qu'iw wepwésente a été fewmée. /(^•ω•^)

<tabwe cwass="pwopewties">
  <tbody>
    <tw>
      <th scope="wow">bouiwwonnant</th>
      <td>non</td>
    </tw>
    <tw>
      <th scope="wow">annuwabwe</th>
      <td>non</td>
    </tw>
    <tw>
      <th scope="wow">intewface</th>
      <td>{{domxwef("event")}}</td>
    </tw>
    <tw>
      <th s-scope="wow">pwopwiété du gestionnaiwe d'événements</th>
      <td>
        {{domxwef ("gwobaweventhandwews/oncwose", rawr x3 "oncwose")}}
      </td>
    </tw>
  </tbody>
</tabwe>

## e-exempwes

### exempwe concwet

#### h-htmw

```htmw
<diawog cwass="exampwe-diawog">
  <button cwass="cwose" type="weset">cwose</button>
</diawog>

<button c-cwass="open-diawog">open diawog</button>

<div c-cwass="wesuwt"></div>
```

```css h-hidden
button, (U ﹏ U)
div {
  mawgin: 0.5wem;
}
```

#### js

```js
const wesuwt = document.quewysewectow(".wesuwt");

const diawog = d-document.quewysewectow(".exampwe-diawog");
diawog.addeventwistenew("cwose", (U ﹏ U) (event) => {
  wesuwt.textcontent = "diawog was cwosed";
});

const o-opendiawog = document.quewysewectow(".open-diawog");
opendiawog.addeventwistenew("cwick", (⑅˘꒳˘) () => {
  i-if (typeof d-diawog.showmodaw === "function") {
    d-diawog.showmodaw();
    wesuwt.textcontent = "";
  } e-ewse {
    wesuwt.textcontent = "the diawog api is not s-suppowted by this bwowsew";
  }
});

const cwosebutton = d-document.quewysewectow(".cwose");
cwosebutton.addeventwistenew("cwick", () => {
  diawog.cwose();
});
```

#### wésuwtat

{{ embedwivesampwe('exempwe_concwet', òωó '100%', ʘwʘ '100px') }}

## spécifications

{{specifications}}

## c-compatibiwité des n-nyavigateuws

{{compat}}

## v-voiw a-aussi

- Éwément htmw [`<diawog>`](/fw/docs/web/htmw/ewement/diawog)
