---
title: Comment documenter les erreurs JavaScript
slug: MDN/Writing_guidelines/Howto/Document_web_errors
l10n:
  sourceCommit: 03ff2a5384ebcb8d7ae36eab7b481d8f738b71c7
---

{{MDNSidebar}}

La [référence des erreurs JavaScript](/fr/docs/Web/JavaScript/Reference/Errors) sur MDN Web Docs est un projet visant à aider les développeuses et développeurs web à résoudre les erreurs survenant dans la [console web des outils de développement](https://firefox-source-docs.mozilla.org/devtools-user/web_console/index.html). Pour ce projet, nous avons besoin d'écrire plus de documentation sur les erreurs sur MDN Web Docs afin que les outils où les messages sont générés puissent renvoyer vers ces pages. Cet article explique comment documenter les erreurs JavaScript.

Les erreurs JavaScript contiennent un lien «&nbsp;En savoir plus&nbsp;» qui renvoie à la référence de l'erreur JavaScript contenant des conseils supplémentaires pour résoudre les problèmes. Pour pouvoir documenter ces erreurs, vous devez connaître ou être capable de vous plonger dans le [JavaScript](/fr/docs/Web/JavaScript).

> [!NOTE]
> La documentation de nouvelles erreurs doit d'abord avoir lieu en anglais avant de pouvoir traduire le nouveau contenu en français. L'organisation du contenu de MDN ne permet pas de créer du contenu en français si celui-ci n'existe pas déjà en anglais.

## Étape 1 - Déterminer l'erreur à documenter

- Les messages d'erreur de Firefox/Gecko&nbsp;: <https://github.com/mozilla/gecko-dev/blob/master/js/src/jsshell.msg>
- Les messages d'erreur de Chrome/v8&nbsp;: <https://chromium.googlesource.com/v8/v8.git/+/refs/heads/main/src/execution/messages.h>

## Étape 2 - Vérifier la documentation existante sur l'erreur

- Examinez [la page de référence des erreurs JavaScript](/fr/docs/Web/JavaScript/Reference/Errors) pour voir comment les erreurs sont documentées.
- Selon le type d'erreur sur lequel vous souhaitez écrire, vous pouvez examiner de plus près ces pages.
- Vous pouvez copier le contenu d'une page existante pour commencer votre nouvelle page.

## Étape 3 - Créer la nouvelle page d'erreur

- Toutes les pages d'erreur se trouvent sous cette arborescence&nbsp;: [/docs/Web/JavaScript/Reference/Errors](/fr/docs/Web/JavaScript/Reference/Errors)
- Pour créer une nouvelle page (d'abord en anglais), consultez les instructions dans notre guide sur la [création de pages](/fr/docs/MDN/Writing_guidelines/Howto/Creating_moving_deleting).

## Étape 4 - Documenter l'erreur

- Utilisez une structure copiée à partir de l'une des pages d'erreur existantes ou commencez à partir de zéro. À vous de choisir&nbsp;!
- Vous devriez avoir au moins&nbsp;:

  - Une boîte de syntaxe contenant le message tel qu'il est généré dans différents navigateurs.
  - Le type d'erreur.
  - Un texte qui explique pourquoi cette erreur s'est produite et quelles sont ses conséquences. Allez au-delà du message généré.
  - Des exemples illustrant l'erreur (il peut y en avoir plus d'un) et un exemple montrant comment corriger le code.
  - Des liens vers d'autres pages de référence sur MDN Web Docs.

## Étape 5 - Révision du contenu

Après avoir créé la page d'erreur, soumettez-la en tant que [<i lang="en">pull request</i>](https://docs.github.com/fr/pull-requests/collaborating-with-pull-requests/proposing-changes-to-your-work-with-pull-requests/creating-a-pull-request) sur le dépôt [`mdn/content`](https://github.com/mdn/content). Un membre de notre équipe de révision sera automatiquement désigné pour réviser votre page.
