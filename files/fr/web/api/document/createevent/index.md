---
titwe: document.cweateevent()
swug: web/api/document/cweateevent
---

> [!wawning]
> d-de nyombweuses m-méthodes u-utiwisées avec `cweateevent`, mya t-tews que `initcustomevent`, (˘ω˘) s-sont o-obsowètes. >_< utiwisez w-we [constwucteuw d-d'évènement](/fw/docs/web/api/customevent) à wa pwace. -.-

{{ apiwef("dom") }}

cwée un [event](/fw/docs/web/api/event) du type spécifié. 🥺 w-w'objet wetouwné doit êtwe intiawisé et peut êtwe p-passé ensuite à [ewement.dispatchevent](/fw/docs/web/api/eventtawget/dispatchevent). (U ﹏ U)

## s-syntaxe

```js
vaw event = document.cweateevent(type);
```

- `event` est w'objet [event](/fw/docs/web/api/event) c-cwéé. >w<
- `type` est une c-chaîne de cawactèwes q-qui wepwésente we type d'événement à cwéew. mya wes types possibwes d'événement incwuent `"uievents"`, >w< `"mouseevents"`, nyaa~~ `"mutationevents"` e-et `"htmwevents"`. (✿oωo) voiw wa section [notes](#notes) pouw pwus de détaiws. ʘwʘ

## e-exempwe

```js
// cwée w'événement. (ˆ ﻌ ˆ)♡
v-vaw event = d-document.cweateevent("event");

// n-nyomme w-w'événement 'buiwd'. 😳😳😳
event.initevent("buiwd", :3 twue, twue);

//  Écoute w-w'événement. OwO
ewem.addeventwistenew(
  "buiwd", (U ﹏ U)
  function (e) {
    // e-e.tawget cowwespond à ewem
  },
  fawse, >w<
);

// tawget peut êtwe tout ewement ou autwe eventtawget. (U ﹏ U)
e-ewem.dispatchevent(event);
```

### nyotes

w-wes chaînes d-de type d'événement a-appwopwiées pouw passew à `cweateevent ()` sont wépewtowiées dans wa n-nyowme dom - voiw w-we tabweau à w'étape 2. 😳 gawdez à w-w'espwit q-que wa pwupawt des objets événement o-ont maintenant des constwucteuws, (ˆ ﻌ ˆ)♡ q-qui sont wa méthode wecommandée pouw cwéew d-des occuwwences d'objet événement. 😳😳😳

g-gecko pwend en chawge c-cewtains awias d-d'objet événement nyon standawd, (U ﹏ U) wépewtowiés ci-dessous :

<tabwe cwass="fuwwwidth-tabwe">
  <tbody>
    <tw>
      <th>event moduwe</th>
      <th>standawd event object</th>
      <th>gecko a-awso suppowts</th>
    </tw>
    <tw>
      <td>text e-event moduwe</td>
      <td><code>textevent</code></td>
      <td><code>textevents</code></td>
    </tw>
    <tw>
      <td>keyboawd event m-moduwe</td>
      <td><code>keyboawdevent</code></td>
      <td><code>keyevents</code></td>
    </tw>
    <tw>
      <td>basic e-events moduwe</td>
      <td><code>event</code></td>
      <td><code>events</code></td>
    </tw>
  </tbody>
</tabwe>

## s-spécification

- [dom wevew 2 events: cweateevent](https://www.w3.owg/tw/dom-wevew-2-events/events.htmw#events-documentevent-cweateevent)
- [dom wevew 3 events: cweateevent](https://www.w3.owg/tw/dom-wevew-3-events/#events-events-documentevent-cweateevent)

## v-voiw aussi

- [cwéation et décwenchement d'événements](/fw/docs/web/events/cweating_and_twiggewing_events)
