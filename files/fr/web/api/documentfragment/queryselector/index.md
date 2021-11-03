---
title: DocumentFragment.querySelector()
slug: Web/API/DocumentFragment/querySelector
tags:
  - API
  - DOM
  - Document
  - Méthodes
  - fragment
translation_of: Web/API/DocumentFragment/querySelector
---
{{ApiRef("DOM")}}

La méthode **`DocumentFragment.querySelector()`** renvoie le premier élément ou `null` si aucune correspondance n'est trouvée, dans le {{domxref("DocumentFragment")}} (en utilisant la traversée en profondeur des noeuds du document), avec le groupe spécifié de sélecteurs.

Si le sélecteur correspond à un ID (_identifiant_) et que cet ID est utilisé plusieurs fois par erreur dans le document, il renvoie le premier élément correspondant.

Si les sélecteurs spécifiés dans paramètre sont invalides une {{domxref("DOMException")}} avec une valeur `SYNTAX_ERR` est lancée.

## Syntaxe

    element = documentfragment.querySelector(selectors);

### Paramètres

- _selectors_
  - : est une {{domxref("DOMString")}} (_chaîne de caractères_) contenant un ou plusieurs sélecteurs CSS séparés par des virgules.

## Exemples

### Exemple de base

Dans cet exemple de base, le premier élément dans le {{domxref("DocumentFragment")}} avec la classe "`myclass`" est renvoyé :

```js
var el = documentfragment.querySelector(".myclass");
```

### Syntaxe CSS et argument de la méthode

L'argument chaîne transmis à `querySelector` doit suivre la syntaxe CSS. Pour faire correspondre un identifiant ou des sélecteurs qui ne suivent pas la syntaxe CSS (utilisant un point-virgule ou un espace inappropriés par exemple), il est obligatoire d'échapper les mauvais caractères avec une double barre oblique inverse :

```html
<div id="foo\bar"></div>
<div id="foo:bar"></div>

<script>
document.querySelector('#foo\bar')    // Ne correspond à rien
document.querySelector('#foo\\\\bar') // Correspond au premier div
document.querySelector('#foo:bar')     //  Ne correspond à rien
document.querySelector('#foo\\:bar')   // Correspond au second div
</script>
```

## Spécifications

| Spécification                                                                                                            | Statut                                       | Commentaire                                                           |
| ------------------------------------------------------------------------------------------------------------------------ | -------------------------------------------- | --------------------------------------------------------------------- |
| {{SpecName('Selectors API Level 2', '#queryselector', 'DocumentFragment.querySelector')}} | {{Spec2('Selectors API Level 2')}} | Pas de changement de {{SpecName('Selectors API Level 1')}} |
| {{SpecName('Selectors API Level 1', '#queryselector', 'DocumentFragment.querySelector')}} | {{Spec2('Selectors API Level 1')}} | Définition initiale.                                                  |

## Compatibilité des navigateurs

{{Compat("api.DocumentFragment.querySelector")}}

## Voir aussi

- L'interface {{domxref("DocumentFragment")}} à laquelle elle appartient.
