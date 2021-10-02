---
title: FormData.keys()
slug: Web/API/FormData/keys
tags:
  - API
  - FormData
  - Iteration
  - Méthode
  - Reference
  - XHR
  - XMLHttpRequestAPI
  - keys
translation_of: Web/API/FormData/keys
---
{{APIRef("XMLHttpRequest")}}

La méthode `FormData.keys()` renvoie une {{jsxref("Les_protocoles_iteration", "itération")}} permettant de parcourir toutes les clés contenues dans cet objet. Les clés sont des objets {{domxref("USVString")}}.

> **Note :** Cette méthode est disponible dans les [Web Workers](/fr/docs/Web/API/Web_Workers_API).

## Syntaxe

    formData.keys();

### Valeur de retour

Retourne une {{jsxref("Les_protocoles_iteration", "itération")}}.

## Exemple

```js
// Créer un object FormData test
var formData = new FormData();
formData.append('cle1', 'valeur1');
formData.append('cle2', 'valeur2');

// Affiche les clés
for (var key of formData.keys()) {
   console.log(key);
}
```

Le résultat est :

    cle1
    cle2

## Spécifications

| Spécification                                                                                            | Statut                               | Commentaire         |
| -------------------------------------------------------------------------------------------------------- | ------------------------------------ | ------------------- |
| {{SpecName('XMLHttpRequest','#dom-formdata','keys() (as iterator&lt;&gt;)')}} | {{Spec2('XMLHttpRequest')}} | Définition initiale |

## Compatibilité des navigateurs

{{Compat("api.FormData.keys")}}

## Voir aussi

- {{domxref("XMLHTTPRequest")}}
- [Utiliser XMLHttpRequest](/fr/docs/Web/API/XMLHttpRequest/Utiliser_XMLHttpRequest)
- [Utiliser les objets FormData](/fr/docs/Web/API/FormData/Utilisation_objets_FormData)
- {{HTMLElement("Form")}}
