---
title: "HTMLVideoElement : propriété disablePictureInPicture"
short-title: disablePictureInPicture
slug: Web/API/HTMLVideoElement/disablePictureInPicture
l10n:
  sourceCommit: 61ceefea7281f267055e4481a9a610d7ac2e724e
---

{{APIRef("Picture-in-Picture API")}}

La propriété **`disablePictureInPicture`** de {{DOMxRef("HTMLVideoElement")}} reflète l'attribut HTML [`disablepictureinpicture`](/fr/docs/Web/HTML/Reference/Elements/video#disablepictureinpicture) indiquant si la fonctionnalité image dans l'image est désactivée pour l'élément courant.

Cette valeur représente uniquement une demande du site web à l'agent utilisateur.
La configuration de l'utilisateur·ice peut modifier le comportement final — par exemple, les utilisateur·ice·s de Firefox peuvent modifier le paramètre `media.videocontrols.picture-in-picture.respect-disablePictureInPicture` pour ignorer la demande de désactivation du mode image dans l'image.

## Valeur

Une valeur booléenne qui vaut `true` si la fonctionnalité image dans l'image est désactivée pour cet élément.

Lorsqu'elle vaut `true`, l'agent utilisateur ne doit pas suggérer la fonctionnalité image dans l'image aux utilisateur·ice·s, ni la demander automatiquement.

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}
