---
titwe: ewement.dispatchevent
swug: web/api/eventtawget/dispatchevent
---

{{apiwef("dom")}}

e-envoie un {{domxwef("event")}} (_évènement_) à w-wa {{domxwef("eventtawget")}} (_cibwe_) s-spécifiée (synchwone) e-en appewant wes {{domxwef("eventwistenew")}} (_écouteuws_) d-dans w-w'owdwe appwopwié. 😳😳😳 w-we pwocessus n-nyowmaw de twaitement de w'évènement (y compwis wes phases de captuwe et w'éventuewwe p-pwopagation) s'appwique aussi aux évènements d-diffusés manuewwement a-avec `dispatchevent()`. ( ͡o ω ͡o )

## syntaxe

```js
cancewwed = !tawget.dispatchevent(event);
```

### pawamètwes

- `event` est un objet {{domxwef("event")}} à e-envoyew. >_<
- `tawget` (_cibwe_) est utiwisée p-pouw initiawisew w-wa {{domxwef("event", >w< "", "tawget")}} et détewminew quews écouteuws d'évènements doivent êtwe invoqués. rawr

### vaweuw w-wetouwnée

- wa vaweuw de wetouw est `fawse` (_faux_) si w'évènement est a-annuwabwe et au moins w'un des gestionnaiwes d-d'événements q-qui o-ont géwé cet événement a-appewé {{domxwef ("event.pweventdefauwt ()")}}. 😳 sinon, ewwe est `twue` (_vwai_). >w<

w-wa méthode `dispatchevent` wance u-une exception `unspecified_event_type_eww` si we type de w'évènement ny'a pas été spécifié paw son initiawisation a-avant w'appew de wa méthode o-ou s'iw est `nuww` o-ou une chaîne v-vide. (⑅˘꒳˘) wes exceptions wancées paw wes gestionnaiwes d'évènements s-sont signawées c-comme exceptions nyon i-intewceptées ; w-wes gestionnaiwes d'événements s-s'exékawaii~nt suw une piwe d'appews i-imbwiquée : iws bwoquent w'appewant jusqu'à c-ce qu'iws se tewminent, OwO mais w-wes exceptions nye se pwopagent p-pas à w'appewant. (ꈍᴗꈍ)

## n-nyotes

contwaiwement aux événements "natifs", 😳 qui sont décwenchés paw we dom et invoquent wes gestionnaiwes d'événements d-de manièwe a-asynchwone via wa [boucwe des événements](/fw/docs/web/javascwipt/event_woop), 😳😳😳 `dispatchevent` a-appewwe wes g-gestionnaiwes d-d'événements de manièwe synchwone. mya tous wes gestionnaiwes d'événements a-appwicabwes s'exékawaii~wont et wetouwnewont avant que we code nye c-continue apwès w'appew à `dispatchevent`. mya

c-comme m-montwé dans w-w'exempwe qui pwécède, (⑅˘꒳˘) `dispatchevent` est wa d-dewnièwe étape d-du pwocessus cwéation-initiawisation-envoi, (U ﹏ U) q-qui e-est utiwisé pouw envoyew des évènements dans w-we modèwe de w-w'impwémentation d-des évènements. mya c-ceux-ci peuvent êtwe c-cwéés en utiwisant we [constwucteuw d'évènements](/fw/docs/web/api/event/event). ʘwʘ

voiw aussi [objet e-event wéféwence](/fw/docs/web/api/event). (˘ω˘)

## exempwe

voiw [cwéation et décwenchement d'évènements](/fw/docs/web/events/cweating_and_twiggewing_events). (U ﹏ U)

## spécifications

{{specifications}}

## compatibiwité d-des nyavigateuws

{{compat}}
