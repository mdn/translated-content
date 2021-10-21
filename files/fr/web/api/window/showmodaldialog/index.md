---
title: window.showModalDialog
slug: Web/API/Window/showModalDialog
tags:
  - Obsolete
translation_of: Web/API/Window/showModalDialog
---
{{ ApiRef() }}

### Résumé

Crée et affiche un dialogue modal contenant un document HTML spécifié.

> **Attention :** Cette fonction est obsolète.
>
> Le support a été arrêté avec la sortie de [Chrome 37](http://blog.chromium.org/2014/07/disabling-showmodaldialog.html). Il y possibilité de la laisser active juqu'en Mai 2015 en configurant les paramètres de politique d'entreprise, plus de détails : [ici](http://www.chromium.org/administrators/policy-list-3#EnableDeprecatedWebPlatformFeatures).
>
> Mozilla a annoncé que le support de cette méthode sera supprimé ({{bug(981796)}}). Ce changement ne sera pas effectif avant Firefox 39, planifié pour les alentours de mi-juin 2015. Pour les entreprises, il est possible d'utiliser le build ESR 38 qui supportera la méthode jusqu'en milieu d'année 2016.

### Syntaxe

    retour = window.showModalDialog(uri[,arguments][,options]);

où

- `retour` est un variant, indiquant la propriété returnValue telle que définie par la fenêtre du document spécifié par `uri`.
- `uri` est l'URI du document à afficher dans la boîte de dialogue.
- `arguments` est un variant optionnel contenant les valeurs à passer à la boîte de dialogue ; celles-ci sont disponibles dans la propriété [`window.dialogArguments`](fr/DOM/window.dialogArguments) de son objet [`window`](fr/DOM/window).
- `options` est une chaîne optionnelle spécifiant les décorations de la fenêtre de dialogue, avec une ou plusieurs valeurs séparées par des points-virgules :

| Syntaxe                                          | Description                                                                                                                                                            |
| ------------------------------------------------ | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `center: {on \| off \| yes \| no \| 1 \| 0 }`    | Si cette valeur est `on`, `yes` ou 1, la fenêtre de dialogue est centrée sur le bureau ; autrement elle est cachée. La valeur par défaut est `yes`.                    |
| `dialogheight:height`                            | Spécifie la hauteur de la boîte de dialogue ; par défaut, la taille est spécifiée en pixels.                                                                           |
| `dialogleft:left`                                | Spécifie la position horizontale de la boîte de dialogue par rapport au coin supérieur gauche du bureau.                                                               |
| `dialogwidth:width`                              | Spécifie la largeur de la boîte de dialogue ; par défaut, la taille est spécifiée en pixels.                                                                           |
| `dialogtop:top`                                  | Spécifie la position verticale de la boîte de dialogue par rapport au coin supérieur gauche du bureau.                                                                 |
| `resizable: {on \| off \| yes \| no \| 1 \| 0 }` | Si cette valeur est `on`, `yes` ou 1, la fenêtre de dialogue peut être redimensionnée par l'utilisateur ; autrement sa taille est fixe. La valeur par défaut est `no`. |
| `scroll: {on \| off \| yes \| no \| 1 \| 0 }`    | Si cette valeur est `on`, `yes` ou 1, la fenêtre de dialogue a des barres de défilement ; autrement elle n'en a pas. La valeur par défaut est `no`.                    |

{{ Note("Firefox n\'implémente pas les paramètres <code>dialogHide</code>, <code>edge</code>, <code>status</code> ou <code>unadorned</code>.") }}

### Compatibilité

Introduit par Microsoft Internet Explorer 4. Support ajouté à Firefox dans Firefox 3.

### Exemples

[Essayer `showModalDialog()`](/samples/domref/showModalDialog.html).

### Notes

### Spécification

Microsoft MSDN : [showModalDialog](http://msdn2.microsoft.com/en-us/library/ms536759.aspx)
