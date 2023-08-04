---
title: omnibox
slug: Mozilla/Add-ons/WebExtensions/API/omnibox
---

{{AddonSidebar}}

Permet aux extensions d'implémenter un comportement personnalisé lorsque l'utilisateur tape dans la barre d'adresse du navigateur.

Lorsque l'utilisateur se concentre sur la barre d'adresse du navigateur et commence à taper, le navigateur affiche une liste déroulante contenant des pages suggérées, en fonction de ce qu'ils ont tapé. Cela permet à l'utilisateur d'accéder rapidement, par exemple, aux pages de son historique ou de ses favoris.

L'API omnibox fournit à l'extension un moyen de personnaliser les suggestions affichées dans la liste déroulante, lorsque l'utilisateur saisit un mot clé défini par l'extension. Cela fonctionne comme suit:...

1. Tout d'abord, l'extension doit inclure une clé "[omnibox](/fr/docs/Mozilla/Add-ons/WebExtensions/manifest.json/omnibox)" dans le fichier [manifest.json](/fr/docs/Mozilla/Add-ons/WebExtensions/manifest.json) qui définit un mot-clé.
2. Lorsque l'utilisateur met la barre d'adresse en surbrillance et tape le mot-clé, suivi d'un espace, l'extension recevra un événement {{WebExtAPIRef("omnibox.onInputStarted")}}.
3. Facultativement, l'extension peut appeler {{WebExtAPIRef("omnibox.setDefaultSuggestion()")}} pour définir la première suggestion qui sera affichée dans la liste déroulante de la barre d'adresse.
4. Comme l'utilisateur continue à taper des caractères après cela, l'extension recevra {{WebExtAPIRef("omnibox.onInputChanged")}} événements. L'écouteur d'événement recevra la valeur actuelle que l'utilisateur a saisie et pourra remplir la liste déroulante de la barre d'adresse avec des suggestions. Si l'extension définit une suggestion par défaut en utilisant {{WebExtAPIRef("omnibox.setDefaultSuggestion()")}}, elle apparaît en premier dans la liste déroulante.
5. Si l'utilisateur accepte une suggestion, l'extension recevra un événement {{WebExtAPIRef("omnibox.onInputEntered")}}. L'écouteur d'événement recevra la suggestion acceptée.
6. Si l'utilisateur supprime la liste déroulante, l'extension recevra un événement {{WebExtAPIRef("omnibox.onInputCancelled")}}.

## Types

- {{WebExtAPIRef("omnibox.OnInputEnteredDisposition")}}
  - : Décrit la méthode recommandée pour gérer la suggestion sélectionnée: ouvrir dans l'onglet actuel, ouvrir dans un nouvel onglet de premier plan ou ouvrir dans un nouvel onglet d'arrière-plan.
- {{WebExtAPIRef("omnibox.SuggestResult")}}
  - : Objet représentant une suggestion à ajouter à la liste déroulante de la barre.

## Fonctions

- {{WebExtAPIRef("omnibox.setDefaultSuggestion()")}}
  - : Définit la première suggestion qui apparaît dans la liste déroulante lorsque l'utilisateur entre le mot clé pour votre extension, suivi d'un espace.

## Evénements

- {{WebExtAPIRef("omnibox.onInputStarted")}}
  - : Lancé lorsque l'utilisateur met la barre d'adresse en surbrillance et tape le mot clé omnibox de votre extension, suivi d'un espace.
- {{WebExtAPIRef("omnibox.onInputChanged")}}
  - : Déclenché chaque fois que l'utilisateur change d'entrée, après avoir focalisé la barre d'adresse et tapé le mot clé omnibox de votre extension, suivi d'un espace.
- {{WebExtAPIRef("omnibox.onInputEntered")}}
  - : Lancé lorsque l'utilisateur accepte l'une des suggestions de votre extension.
- {{WebExtAPIRef("omnibox.onInputCancelled")}}
  - : Lancé lorsque l'utilisateur supprime la liste déroulante de la barre d'adresse, après avoir défini la barre d'adresse et tapé le mot clé omnibox de votre extension.

## Compatibilité des navigateurs

{{Compat}}

{{WebExtExamples("h2")}}

> **Note :**
>
> Cette API est basée sur l'API Chromium [`chrome.omnibox`](https://developer.chrome.com/extensions/omnibox).
>
> Les données de compatibilité relatives à Microsoft Edge sont fournies par Microsoft Corporation et incluses ici sous la licence Creative Commons Attribution 3.0 pour les États-Unis.
