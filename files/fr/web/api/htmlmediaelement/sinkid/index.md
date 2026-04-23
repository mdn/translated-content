---
title: "HTMLMediaElement : propriété sinkId"
short-title: sinkId
slug: Web/API/HTMLMediaElement/sinkId
l10n:
  sourceCommit: ca26363fcc6fc861103d40ac0205e5c5b79eb2fa
---

{{APIRef("Audio Output Devices API")}}{{SecureContext_Header}}

La propriété en lecture seule **`sinkId`** de l'interface {{DOMxRef("HTMLMediaElement")}} retourne une chaîne de caractères correspondant à l'identifiant unique du périphérique à utiliser pour la sortie audio.

Cet identifiant doit être l'une des valeurs {{DOMxRef("MediaDeviceInfo.deviceId")}} retournées par {{DOMxRef("MediaDevices.enumerateDevices()")}}.
Si le périphérique par défaut de l'agent utilisateur est utilisé, elle retourne une chaîne de caractères vide.

## Valeur

Une chaîne de caractères indiquant le périphérique de sortie audio actuel, ou une chaîne de caractères vide si le périphérique de sortie par défaut de l'agent utilisateur est utilisé.

## Exigences de sécurité

L'accès à la propriété est soumis aux contraintes suivantes&nbsp;:

- La propriété doit être appelée dans un [contexte sécurisé](/fr/docs/Web/Security/Defenses/Secure_Contexts).

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- [L'API Audio Output Devices](/fr/docs/Web/API/Audio_Output_Devices_API)
- La méthode {{DOMxRef("MediaDevices.selectAudioOutput()")}}
- La méthode {{DOMxRef("HTMLMediaElement.setSinkId()")}}
