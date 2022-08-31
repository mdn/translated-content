---
title: Utiliser l'attribut aria-invalid
slug: >-
  orphaned/Web/Accessibility/ARIA/ARIA_Techniques/Using_the_aria-invalid_attribute
tags:
  - ARIA
  - Accessibilité
  - Attribut
translation_of: Web/Accessibility/ARIA/ARIA_Techniques/Using_the_aria-invalid_attribute
original_slug: Web/Accessibility/ARIA/ARIA_Techniques/Using_the_aria-invalid_attribute
---
### Description

Cette technique présente l’utilisation de l’attribut [`aria-invalid`](http://www.w3.org/TR/wai-aria/states_and_properties#aria-invalid).

L’attribut `aria-invalid` est utilisé pour indiquer que la valeur saisie dans un champ de saisie n’est pas conforme au format attendu par l’application. Cela comprend les formats tels que les adresses électroniques ou les numéros de téléphone. `aria-invalid` peut également être utilisé pour indiquer qu’un champ obligatoire n’a pas été rempli. L’attribut devrait être programmatiquement défini comme étant le résultat du processus de validation.

Cet attribut peut être utilisé avec n’importe quel élément de formulaire HTML typique&nbsp;; il n’est pas limité aux éléments auxquels a été assigné un `rôle` ARIA.

### Valeurs

#### Vocabulaire

- `false` (défaut)
  - : Aucune erreur détectée
- `grammar`
  - : Une faute de grammaire a été détectée.
- `spelling`
  - : Une faute d’orthographe a été détectée.
- `true`
  - : La valeur n’a pas passé la validation.

Toute valeur absente de ce vocabulaire devrait être traitée comme `true`.

### Effets possibles sur les agents utilisateurs et les technologies d’assistance

Les agents utilisateurs devraient informer l’utilisateur lorsqu’un champ n’est pas valide. Les développeurs d’applications devraient fournir des suggestions pour la correction du problème, lorsque c’est possible. Les auteurs devraient empêcher la soumission de formulaires contenant des erreurs.

> **Note :** il existe plusieurs points de vue sur la façon dont les technologies d’assistance devraient traiter cette technique. L’information fournit ci-dessus est l’une de ces opinions et n’est pas normative.

### Exemples

#### Exemple 1&nbsp;: validation d’un formulaire de base

L’extrait de code suivant décrit une version simplifiée de deux champs de formulaire avec une fonction de validation de la saisie attachée à la perte de focus. Notez que la valeur par défaut de `aria-required` étant `false`, il n’est pas strictement nécessaire d’ajouter à entrer.

```html
<input name="nom" id="nom" aria-required="true" aria-invalid="false"
        onblur="checkValidity('nom', ' ', 'Le nom saisi n’est pas valide (vous devez saisir un nom et un prénom)');"/>
<br />
<input name="courriel" id="courriel" aria-required="true" aria-invalid="false"
        onblur="checkValidity('courriel', '@', 'L’adresse électronique saisie n’est pas valide');"/>
```

Remarquez qu’il n’est pas nécessaire de valider les champs de saisie immédiatement à la perte de focus&nbsp;; l’application peut attendre jusqu’à la soumission du formulaire (bien que ce ne soit pas particulièrement recommandé).

L’extrait de code ci-dessous décrit une fonction de validation très simple qui ne vérifie que la présence d’un caractère particulier (en réalité, la validation sera un peu plus sophistiquée)&nbsp;:

```js
function checkValidity(aID, aSearchTerm, aMsg){
    var elem = document.getElementById(aID);
    var invalid = (elem.value.indexOf(aSearchTerm) < 0);
    if (invalid) {
      elem.setAttribute("aria-invalid", "true");
      updateAlert(aMsg);
    } else {
      elem.setAttribute("aria-invalid", "false");
      updateAlert();
    }
}
```

L’extrait de code ci-dessous décrit des fonctions d’alertes, qui ajoutent (ou suppriment) le message d’erreur&nbsp;:

```js
function updateAlert(msg) {
    var oldAlert = document.getElementById("alert");
    if (oldAlert) {
        document.body.removeChild(oldAlert);
    }

    if (msg) {
        var newAlert = document.createElement("div");
        newAlert.setAttribute("role", "alert");
        newAlert.setAttribute("id", "alert");
        var content = document.createTextNode(msg);
        newAlert.appendChild(content);
        document.body.appendChild(newAlert);
    }
}
```

Remarquez que le `rôle` ARIA de l’alerte est définit comme étant [`"alert"`](/fr/Accessibilité/ARIA/Techniques_ARIA/Utiliser_le_rôle_alert).

### Notes

- Lorsque `aria-invalid` est utilisé en conjonction avec l’attribut `aria-required`, `aria-invalid` **ne devrait pas** être défini à `true` avant la soumission du formulaire – uniquement en réponse à la validation.
- Les développements futurs pourraient ajouter des termes au vocabulaire utilisé pour cet attribut. Toute valeur absente du vocabulaire actuel devrait être traitée comme `true`.

### Utilisé dans les rôles ARIA

Tous les éléments de balisage de base.

### Techniques ARIA connexes

- [Utiliser l’attribut `aria-required`](/fr/Accessibilité/ARIA/Techniques_ARIA/Utiliser_l_attribut_aria-required)
- [Utiliser le rôle `alert`](/fr/Accessibilité/ARIA/Techniques_ARIA/Utiliser_le_rôle_alert)

### Autres ressources

- [Spécification WAI-ARIA de la propriété `aria-invalid`](http://www.w3.org/TR/wai-aria/states_and_properties#aria-invalid)
- [WAI Authoring Practices for forms](http://www.w3.org/TR/wai-aria-practices/#ariaform) (Règles WAI de création de formulaires)
