---
title: window.alert
slug: Web/API/Window/alert
tags:
  - DOM
  - DOM_0
  - Référence_du_DOM_Gecko
translation_of: Web/API/Window/alert
---
{{ ApiRef() }}

### Résumé

Affiche un dialogue d'alerte contenant le texte spécifié.

### Syntaxe

    window.alert(message);

- `message` est une chaîne contenant le texte à afficher dans le dialogue d'alerte.

### Exemple

    window.alert("Bonjour !");

produira :

![](alerthelloworld.png)

### Notes

Le dialogue d'alerte doit être utilisé pour les messages qui ne demandent aucune réponse de la part de l'utilisateur, à part son acceptation du message.

Le texte suivant est commun à cet article, `DOM:window.prompt` et `DOM:window.confirm` Les boîtes de dialogue sont des fenêtres modales : elles empêchent l'utilisateur d'accéder au reste de l'interface du programme tant qu'elles ne sont pas fermées. C'est pourquoi il ne faut pas abuser des fonctions créant une boîte de dialogue (ou fenêtre modale).

Les applications utilisant le chrome (par exemple les extensions) devront plutôt utiliser les méthodes de [nsIPromptService](fr/NsIPromptService).

### Spécification

{{ DOM0() }}

### Voir aussi

- [confirm](/fr/DOM/window.confirm)
- [prompt](/fr/DOM/window.prompt)
