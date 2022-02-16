---
title: Window.print()
slug: Web/API/Window/print
tags:
  - API
  - BesoinDeCompatibilitéAvecLeNavigateur
  - BesoinDeCompatibilitéAvecLeNavigateurMobile
  - DOM
  - Méthode
  - Reference
  - Window
translation_of: Web/API/Window/print
---
{{ ApiRef() }}

Ouvre la fenêtre de dialogue d'impression pour imprimer le document courant.

## Syntaxe

    window.print()

## Notes

Disponible à partir de Chrome {{CompatChrome(45.0)}}, cette méthode est bloquée à l'intérieur d'une balise {{htmlelement("iframe")}} sauf si son attribut sandbox a la valeur allow-modal.

## Spécification

| Spécification                                                                        | Statut                                       | Commentaire          |
| ------------------------------------------------------------------------------------ | -------------------------------------------- | -------------------- |
| {{SpecName('HTML5 Web application', '#dom-print', 'print()')}} | {{Spec2('HTML5 Web application')}} | Définition initiale. |

## Voir également

- [Printing](/en/Printing)
- {{ domxref("window.onbeforeprint") }}
- {{ domxref("window.onafterprint") }}
