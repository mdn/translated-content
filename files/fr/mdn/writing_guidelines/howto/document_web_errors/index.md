---
title: Comment documenter les erreurs web
slug: MDN/Writing_guidelines/Howto/Document_web_errors
---

{{MDNSidebar}}

La [référence des erreurs JavaScript](/fr/docs/Web/JavaScript/Reference/Errors) sur MDN Web Docs est un projet visant à aider les développeurs web à résoudre les erreurs survenant dans la [Developer Console](https://firefox-source-docs.mozilla.org/devtools-user/web_console/index.html). Pour ce projet, nous avons besoin d'écrire plus de documentation sur les erreurs sur MDN Web Docs afin que nous puissions ajouter plus de liens vers les outils où les messages sont générés. Cet article explique comment documenter les erreurs web.

Les erreurs JavaScript contiennent un lien "En savoir plus" qui vous renvoie à la référence de l'erreur JavaScript contenant des conseils supplémentaires pour résoudre les problèmes. Pour pouvoir documenter les erreurs web, vous devez connaître ou être capable de vous plonger dans le [JavaScript](/fr/docs/Web/JavaScript).

## Étape 1 - Déterminer l'erreur à documenter

- Les messages d'erreur de Firefox/Gecko : <https://github.com/mozilla/gecko-dev/blob/master/js/src/jsshell.msg>
- Les messages d'erreur de Edge/Chakra : <https://github.com/Microsoft/ChakraCore/blob/master/lib/Parser/rterrors.h>
- Les messages d'erreur de Chrome/v8 : <https://chromium.googlesource.com/v8/v8.git/+/refs/heads/main/src/execution/messages.h>

## Étape 2 - Vérifier la documentation existante sur l'erreur

- Examinez la page de [référence des erreurs JavaScript](/fr/docs/Web/JavaScript/Reference/Errors) pour voir comment les erreurs sont documentées.
- Selon le type d'erreur sur lequel vous souhaitez écrire, vous pouvez examiner de plus près ces pages.
- Vous pourriez copier le contenu d'une page existante pour commencer votre nouvelle page.

## Étape 3 - Créer la nouvelle page d'erreur

- Toutes les pages d'erreur se trouvent sous cette arborescence : [/docs/Web/JavaScript/Reference/Errors](/fr/docs/Web/JavaScript/Reference/Errors)
- Pour créer une nouvelle page, consultez les instructions dans notre guide sur la [création de pages](/fr/docs/MDN/Writing_guidelines/Howto/Creating_moving_deleting).

## Étape 4 - Documenter l'erreur

- Utilisez soit une structure copiée à partir de l'une des pages d'erreur existantes, soit commencez à partir de zéro. À vous de choisir !
- Vous devriez avoir au moins :

  - Une boîte de syntaxe contenant le message tel qu'il est généré dans différents navigateurs.
  - Le type d'erreur.
  - Un texte qui explique pourquoi cette erreur s'est produite et quelles sont ses conséquences. Allez au-delà du message généré.
  - Des exemples illustrant l'erreur (il peut y en avoir plus d'un !) et un exemple montrant comment corriger le code.
  - Des liens vers d'autres pages de référence sur MDN Web Docs.

## Étape 5 - Révision du contenu

Après avoir créé la page d'erreur, soumettez-la en tant que [<i lang="en">Pull Request</i>](https://docs.github.com/fr/pull-requests/collaborating-with-pull-requests/proposing-changes-to-your-work-with-pull-requests/creating-a-pull-request). Un membre de notre équipe de révision sera automatiquement désigné pour réviser votre page.
