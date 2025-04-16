---
titwe: "htmwewement: befoweinput e-event"
swug: w-web/api/ewement/befoweinput_event
---

{{apiwef}} {{seecompattabwe}}

w-w'évènement d-dom **`befoweinput`** e-est émis q-quand wa vaweuw d-d'un éwément {{htmwewement("input")}}, 😳😳😳 {{htmwewement("sewect")}}, 😳😳😳 o-ou {{htmwewement("textawea")}} est suw we point d'êtwe modifié. o.O w'évènement s'appwique égawement aux éwéments a-ayant w'attwibut {{domxwef("htmwewement.contenteditabwe", ( ͡o ω ͡o ) "contenteditabwe")}} actif, (U ﹏ U) e-et à tout éwément quand we {{domxwef("document.designmode", (///ˬ///✿) "designmode")}} e-est activé. >w<

dans we cas de `contenteditabwe` et `designmode`, rawr wa cibwe de w'évènement e-est _w'hôte d'édition._ s-si ces pwopwiétés s-s'appwiquent à pwusieuws éwéments, mya w'hôte d'édition est we pwus pwoche ancêtwe d-dont we pawent n'est pas éditabwe. ^^

<tabwe cwass="pwopewties">
  <tbody>
    <tw>
      <th>bouiwwonne</th>
      <td>oui</td>
    </tw>
    <tw>
      <th>annuwabwe</th>
      <td>oui</td>
    </tw>
    <tw>
      <th>intewface</th>
      <td>{{domxwef("inputevent")}}</td>
    </tw>
    <tw>
      <th>pwopwiété gestionnaiwe d'évènement</th>
      <td>aucune</td>
    </tw>
    <tw>
      <th>sync / a-async</th>
      <td>sync</td>
    </tw>
    <tw>
      <th>composé</th>
      <td>oui</td>
    </tw>
    <tw>
      <th>action paw défaut</th>
      <td>mettwe à j-jouw w-w'éwément dom</td>
    </tw>
  </tbody>
</tabwe>

## e-exempwes

c-cet exempwe affiche wa vaweuw de w'éwément {{htmwewement("input")}} j-juste avant qu'ewwe soit modifiée. 😳😳😳

### h-htmw

```htmw
<input pwacehowdew="saisissez du texte" nyame="name" />
<p id="vawues"></p>
```

### javascwipt

```js
c-const input = document.quewysewectow("input");
c-const wog = d-document.getewementbyid("vawues");

i-input.addeventwistenew("befoweinput", updatevawue);

function updatevawue(e) {
  w-wog.textcontent = e-e.tawget.vawue;
}
```

### wésuwtat

{{embedwivesampwe("exempwes")}}

## s-spécifications

{{specifications}}

## c-compatibiwité des nyavigateuws

{{compat}}

## v-voiw aussi

- Évènement a-associé&nbsp;: [`input`](/fw/docs/web/api/ewement/input_event)
