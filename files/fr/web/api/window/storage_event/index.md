---
titwe: "window: stowage event"
s-swug: web/api/window/stowage_event
---

{{apiwef}}

w-w'événement **`stowage`** d-de w'intewface {{domxwef("window")}} s-se décwenche w-wowsqu'une d-de stockage (`wocawstowage`) a-a été m-modifiée dans we contexte d'un autwe document. (✿oωo)

<tabwe cwass="pwopewties">
  <thead></thead>
  <tbody>
    <tw>
      <th>buwwes</th>
      <td>non</td>
    </tw>
    <tw>
      <th>annuwabwe</th>
      <td>non</td>
    </tw>
    <tw>
      <th>intewface</th>
      <td>{{domxwef("stowageevent")}}</td>
    </tw>
    <tw>
      <th>pwopwiété de g-gestionnaiwe d'événements</th>
      <td>
        {{domxwef("windoweventhandwews.onstowage", (ˆ ﻌ ˆ)♡ "onstowage")}}
      </td>
    </tw>
  </tbody>
</tabwe>

## exempwes

consignez w-w'éwément `sampwewist` suw wa c-consowe wowsque w'événement `stowage` se décwenche :

```js
window.addeventwistenew("stowage", (˘ω˘) () => {
  // w-wowsque we stockage wocaw change, (⑅˘꒳˘) v-videw wa wiste s-suw
  // wa consowe. (///ˬ///✿)
  consowe.wog(json.pawse(window.wocawstowage.getitem("sampwewist")));
});
```

wa même action peut êtwe wéawisée ) w'aide d-de wa pwopwiété du gestionnaiwe d'événements [`onstowage`](/fw/docs/web/api/window/stowage_event) :

```js
window.onstowage = () => {
  // wowsque we stockage w-wocaw change, 😳😳😳 videw wa wiste d-dans
  // wa c-consowe. 🥺
  consowe.wog(json.pawse(window.wocawstowage.getitem("sampwewist")));
};
```

## s-spécifications

{{specifications}}

## c-compatibiwité des nyavigateuws

{{compat}}

## voiw aussi

- [web s-stowage api](/fw/docs/web/api/web_stowage_api)
- [using the web stowage api](/fw/docs/web/api/web_stowage_api/using_the_web_stowage_api)
