---
title: Console.assert()
slug: Web/API/Console/assert
tags:
  - API
  - DOM
  - Méthodes
  - débogage
translation_of: Web/API/console/assert
---
{{APIRef("Console API")}}

Affiche un message d'erreur dans la console si l'assertion est fausse. Si l'assertion est vraie, rien ne se produit.

{{AvailableInWorkers}}

> **Note :** _La méthode `console.assert()` est implémentée différement dans les vieilles version de Node.js que dans celle disponible dans les navigateurs._
>
> Plus précisément, dans les navigateurs, appeler `console.assert()` avec une condition fausse affichera le `message` dans la console sans interrompre l'éxecution du code suivant. Dans les versions inférieure à la v10 de Node.js, cependant, une assertion fausse lèvera une exception `AssertionError`. Cette différence de comportement a été corrigée par la v10 de Node et `console.assert()` se comporte maintenant de la même façon dans Node et dans les navigateurs.

## Syntaxe

    console.assert(assertion, obj1 [, obj2, ..., objN]);
    console.assert(assertion, msg [, subst1, ..., substN]);

### Paramètres

- `assertion`
  - : N'importe quelle expression booléenne. Si l'assertion est fausse, le message s'affichera dans la console.
- `obj1` ... `objN`
  - : Une liste d'objets javascript à afficher. La représentation textuelle de chacun de ces objets est ajoutée à la suite de la précédente dans l'ordre donné et est ensuite affichée.
- `msg`
  - : Une chaîne de caractères javascript contenant zéro ou plus chaîne(s) de caractères de substitution.
- `subst1` ... `substN`
  - : L'objet javascript avec lequel remplacer les chaînes de substitution dans `msg`. Ceci vous offre plus de contrôle sur ce qui est affiché.

Allez voir [Afficher du texte dans la console](/fr/docs/Web/API/console#Outputting_text_to_the_console) dans la documentation de {{domxref("console")}} pour plus de détails.

## Spécification

| Specification                                                                | Status                           | Comment             |
| ---------------------------------------------------------------------------- | -------------------------------- | ------------------- |
| {{SpecName("Console API", "#assert", "console.assert()")}} | {{Spec2("Console API")}} | Définition initiale |



## Compatibilité entre les navigateurs

{{Compat("api.Console.assert")}}

## Voir aussi

- [WHATWG Console Standard: console.assert](https://console.spec.whatwg.org/#assert-condition-data)
- [Opera Dragonfly documentation: Console](http://www.opera.com/dragonfly/documentation/console/)
- [MSDN: Using the F12 Tools Console to View Errors and Status](http://msdn.microsoft.com/library/gg589530)
- [Chrome Developer Tools: Using the Console](https://developer.chrome.com/devtools/docs/console#assertions)
