---
title: Mise à jour des thèmes pour Firefox 3.6
slug: Mozilla/Firefox/Releases/3.6/Updating_themes
l10n:
  sourceCommit: 2591a9b59de88401a2ef0fb7d0b8d0281e3f5376
---

Cet article a pour but d'aider les auteur·e·s de thèmes à mettre à jour les thèmes compatibles avec Firefox 3.5 pour les rendre compatibles avec Firefox 3.6.

## Changement dans l'enregistrement de l'interface

[`contents.rdf` n'est plus pris en charge <sup>(angl.)</sup>](https://www.oxymoronical.com/blog/2009/06/Farewell-contentsrdf/), vous devez utiliser `chrome.manifest` à la place.

## Style des champs de texte vides

Les zones de texte XUL n'ont plus l'attribut `empty`, mais `isempty` à la place. Ainsi, au lieu de `textbox[empty="true"]`, vous devez utiliser `textbox[isempty="true"]`.

## Support de l'interface de droite à gauche

Les sélecteurs `[chromedir="rtl"]` et `[chromedir="ltr"]` sont obsolètes et ne fonctionnent plus sur la plupart des éléments. À la place, vous devez utiliser les nouveaux sélecteurs {{CSSxRef(":-moz-locale-dir_rtl", ":-moz-locale-dir(rtl)")}} et {{CSSxRef(":-moz-locale-dir_ltr", ":-moz-locale-dir(ltr)")}}. Voir aussi&nbsp;: [S'assurer que votre thème fonctionne avec les locales RTL <sup>(angl.)</sup>](https://web.archive.org/web/20210509011412/https://developer.mozilla.org/en-US/docs/Archive/Themes/Making_sure_your_theme_works_with_RTL_locales).

## Style des onglets du navigateur multiplateforme

L'implémentation des onglets du navigateur n'a plus de `tabs-closebutton-box` spécifique à Mac&nbsp;; à la place, toutes les plateformes utilisent les mêmes noms pour identifier les composants de la barre d'onglets.

## Bouton de la barre d'outils en plein écran

Un nouveau [bouton de la barre d'outils en plein écran <sup>(angl.)</sup>](https://bugzil.la/206544) est disponible dans la boîte de dialogue Personnaliser la barre d'outils.

## Voir aussi

- [Forum MozillaZine&nbsp;: Changements de thèmes pour Mozilla 1.9.2 / Firefox 3.6 <sup>(angl.)</sup>](https://forums.mozillazine.org/viewtopic.php?f=18&t=975065)
- [Thèmes <sup>(angl.)</sup>](https://web.archive.org/web/20210422190409/https://developer.mozilla.org/en-US/docs/Mozilla/Add-ons/Themes)
- [Créer un thème <sup>(angl.)</sup>](https://web.archive.org/web/20210506064733/https://developer.mozilla.org/en-US/docs/Archive/Themes/Building_a_Theme)
