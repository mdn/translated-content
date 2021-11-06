---
title: window.confirm
slug: Web/API/Window/confirm
tags:
  - DOM
  - DOM_0
translation_of: Web/API/Window/confirm
---
{{ApiRef("Window")}}

### Résumé

Affiche un dialogue modal avec un message et deux boutons, OK et Annuler.

### Syntaxe

    resultat = window.confirm(message);

- `message` est la chaîne contenant le texte à afficher dans le dialogue.
- `resultat` est une valeur booléenne indiquant si OK ou Annuler a été sélectionné (`true` signifie OK).

### Exemple

    if (window.confirm("Une nouvelle fenêtre va s'ouvrir.")) {
        window.open("fenetre.html", "Nouvelle fenêtre", "");
    }

### Notes

Le texte suivant est commun à cet article, `DOM:window.prompt` et `DOM:window.confirm` Les boîtes de dialogue sont des fenêtres modales : elles empêchent l'utilisateur d'accéder au reste de l'interface du programme tant qu'elles ne sont pas fermées. C'est pourquoi il ne faut pas abuser des fonctions créant une boîte de dialogue (ou fenêtre modale).

Les applications utilisant le chrome (par exemple les extensions) devront plutôt utiliser les méthodes de [nsIPromptService](fr/NsIPromptService).

### Spécification

{{ DOM0() }}

### Voir aussi

- [alert](/fr/docs/DOM/window.alert)
- [prompt](/fr/docs/DOM/window.prompt)
