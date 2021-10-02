---
title: Transferable
slug: Web/API/Transferable
tags:
  - API
  - Interface
  - Reference
translation_of: Web/API/Transferable
---
{{ ApiRef("HTML DOM") }}

L'interface **`Transferable`** représente un objet qui peut être transféré entre différents contextes d'exécution, comme un thread principal et des web workers.

C'est une interface abstraite et il n'y a aucun objet de ce type. Il ne définit pas non plus ni propriété ni méthode : c'est avant tout une étiquette pour signaler les objets qui peuvent être utilisés dans des conditions spécifiques, comme la possibilité d'être transféré à un {{domxref("Worker")}} au moyen de la méthode {{domxref("Worker.postMessage()")}}.

> **Note :** L'interface `Transferable` n'existe plus pour longtemps. La fonctionnalité des objets `Transferable` existe toujours, cependant, l'inpléméentation est à un niveau plus fondamentale (techniquement parlant, utilisant l'attribut étendu `[Transferable]` {{Glossary("WebIDL")}})

Les interfaces {{domxref("ArrayBuffer")}}, {{domxref("MessagePort")}}, {{domxref("ImageBitmap")}} et {{domxref("OffscreenCanvas")}} l'implémentent.

## Propriétés

_L'interface_ _`Transferable`_ _n'implémente ou n'hérite d'aucune propriété spécifique._

## Méthodes

_L'interface_ _`Transferable`_ _n'implémente ou n'hérite d'aucune méthode spécifique._

## Spécifications

<table class="standard-table">
  <tbody>
    <tr>
      <th scope="col">Spécification</th>
      <th scope="col">Statut</th>
      <th scope="col">Commentaire</th>
    </tr>
    <tr>
      <td>
        {{SpecName('HTML WHATWG', "infrastructure.html#transferable-objects", "Transferable")}}
      </td>
      <td>{{Spec2('HTML WHATWG')}}</td>
      <td>
        <p>
          Remplace l'interface <code>Transferable</code> avec l'attribut étendue
          <code>[Transferable]</code> Web IDL.
        </p>
      </td>
    </tr>
    <tr>
      <td>
        {{SpecName('HTML5 W3C', "infrastructure.html#transferable-objects", "Transferable")}}
      </td>
      <td>{{Spec2('HTML5 W3C')}}</td>
      <td>Définition initiale.</td>
    </tr>
  </tbody>
</table>

## Compatibilité des navigateurs

{{Compat("api.Transferable")}}

## Voir aussi

- Les interfaces qui l'implémentent : {{jsxref("ArrayBuffer")}}, {{domxref("MessagePort")}} et {{domxref("ImageBitmap")}}.
