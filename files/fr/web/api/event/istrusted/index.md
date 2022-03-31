---
title: Event.isTrusted
slug: Web/API/Event/isTrusted
tags:
  - API
  - Event
  - Property
  - Read-only
  - Référence(2)
translation_of: Web/API/Event/isTrusted
---
{{APIRef("DOM")}}

La propriété en lecture seule isTrusted, de l'interface {{domxref("Event")}}, est un booléen qui vaut true lorsque l'événement est généré par une action de l'utilisateur, et false, quand l'événement est créé ou modifié par un script ou envoyé par dispatchEvent.

## Syntaxe

    var bool = event.isTrusted;

## Exemple

     if (e.isTrusted) {
         /* The event is trusted. */
     } else {
         /* The event is not trusted. */
     }

## Spécifications

<table class="standard-table">
  <tbody>
    <tr>
      <th scope="col">Spécification</th>
      <th scope="col">Statut</th>
      <th scope="col">Commentaires</th>
    </tr>
    <tr>
      <td>
        {{SpecName('DOM WHATWG', '#dom-event-istrusted', 'Event.isTrusted')}}
      </td>
      <td>{{ Spec2('DOM WHATWG') }}</td>
      <td></td>
    </tr>
    <tr>
      <td>
        {{SpecName('DOM3 Events', '#trusted-events', 'Trusted events')}}
      </td>
      <td>{{Spec2('DOM3 Events')}}</td>
      <td>
        <p>
          Ajoute des conditions à propos des événement trusted et untrusted.
          Cependant, cela ne défini pas la propriété isTrusted.
        </p>
      </td>
    </tr>
    <tr>
      <td>
        {{SpecName('DOM4', '#dom-event-istrusted', 'Event.isTrusted')}}
      </td>
      <td>{{Spec2('DOM4')}}</td>
      <td>Première définition.</td>
    </tr>
  </tbody>
</table>

## Compatibilité des navigateurs

{{Compat("api.Event.isTrusted")}}
