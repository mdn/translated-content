---
title: FormData.entries()
slug: Web/API/FormData/entries
tags:
  - API
  - Entries
  - FormData
  - Méthode
  - Reference
  - XHR
  - XMLHttpRequest
translation_of: Web/API/FormData/entries
---
{{APIRef("XMLHttpRequest")}}

La methode **FormData.entries()** retourne un {{jsxref("Les_protocoles_iteration",'iterateur')}} permettant d'accéder aux paires clefs/valeurs contenues dans cet objet.
La clef de chaque paire est une {{domxref("USVString")}}. De la même manière, la valeur peut être une {{domxref("USVString")}} ou un {{domxref("Blob")}}.

> **Note :** Cette methode est disponible dans les [Web Workers](/fr/docs/Web/API/Web_Workers_API).

## Syntaxe

    formData.entries();

### Valeur retournée

Retourne un {{jsxref("Les_protocoles_iteration","iterateur")}}.

## Exemple

```js
// Creation d'un objet FormData
var formData = new FormData();
formData.append('key1', 'value1');
formData.append('key2', 'value2');

// Affichage des paires clefs/valeurs
for(var pair of formData.entries()) {
   console.log(pair[0]+ ', '+ pair[1]);
}
```

Le resultat est:

    key1, value1
    key2, value2

## Spécifications

| Spécification                                                                                                | Statut                               | Commentaire         |
| ------------------------------------------------------------------------------------------------------------ | ------------------------------------ | ------------------- |
| {{SpecName('XMLHttpRequest','#dom-formdata','entries() (as iterator&lt;&gt;)')}} | {{Spec2('XMLHttpRequest')}} | Définition initiale |

## Compatibilité navigateurs

{{Compat("api.FormData.entries")}}

## Voir aussi

- {{domxref("XMLHTTPRequest")}}
- [Utiliser XMLHttpRequest](/fr/docs/DOM/XMLHttpRequest/Using_XMLHttpRequest)
- [Utiliser les objets FormData](/fr/docs/Web/API/FormData/Utilisation_objets_FormData)
- {{HTMLElement("Form")}}
