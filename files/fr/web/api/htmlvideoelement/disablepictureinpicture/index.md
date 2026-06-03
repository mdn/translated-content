---
title: "HTMLVideoElement : propriété disablePictureInPicture"
short-title: disablePictureInPicture
slug: Web/API/HTMLVideoElement/disablePictureInPicture
l10n:
  sourceCommit: 338e7cd6445f45216d4de20129acdf979aab96dd
---

{{APIRef("Picture-in-Picture API")}}

La propriété **`disablePictureInPicture`** de {{DOMxRef("HTMLVideoElement")}} reflète l'attribut HTML qui indique si la fonctionnalité image dans l'image est désactivée pour l'élément courant.

Cette valeur représente uniquement une demande du site web à l'agent utilisateur. La configuration de l'utilisateur·ice peut modifier le comportement final — par exemple, les utilisateur·ice·s de Firefox peuvent modifier le paramètre `media.videocontrols.picture-in-picture.respect-disablePictureInPicture` pour ignorer la demande de désactivation du mode image dans l'image.

## Valeur

Une valeur booléenne qui vaut `true` si la fonctionnalité image dans l'image est désactivée pour cet élément. Cela signifie que l'agent utilisateur ne doit pas suggérer cette fonctionnalité aux utilisateur·ice·s, ni la demander automatiquement.

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}
