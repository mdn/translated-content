---
title: "HTMLMediaElement : méthode setSinkId()"
short-title: setSinkId()
slug: Web/API/HTMLMediaElement/setSinkId
l10n:
  sourceCommit: ca26363fcc6fc861103d40ac0205e5c5b79eb2fa
---

{{APIRef("Audio Output Devices API")}}{{SecureContext_Header}}

La méthode **`setSinkId()`** de l'interface {{DOMxRef("HTMLMediaElement")}} définit l'identifiant du périphérique audio à utiliser pour la sortie et retourne une promesse ({{JSxRef("Promise")}}).

Cela ne fonctionne que lorsque l'application est autorisée à utiliser le périphérique défini.
Pour plus d'informations, voir les [exigences de sécurité](#exigences_de_sécurité) ci-dessous.

## Syntaxe

```js-nolint
setSinkId(sinkId)
```

### Paramètres

- `sinkId`
  - : L'identifiant ({{DOMxRef("MediaDeviceInfo.deviceId")}}) du périphérique de sortie audio.

### Valeur de retour

Une promesse ({{JSxRef("Promise")}}) qui se résout avec {{JSxRef("undefined")}}.

### Exceptions

- `NotAllowedError` {{DOMxRef("DOMException")}}
  - : Retourne une erreur si une [politique de permissions](/fr/docs/Web/HTTP/Guides/Permissions_Policy) [`speaker-selection`](/fr/docs/Web/HTTP/Reference/Headers/Permissions-Policy/speaker-selection) est utilisée pour bloquer l'utilisation des sorties audio.
- `NotFoundError` {{DOMxRef("DOMException")}}
  - : Retourne une erreur si l'identifiant du périphérique (`deviceId`) ne correspond à aucun périphérique de sortie audio.
- `AbortError` {{DOMxRef("DOMException")}}
  - : Retourne une erreur si le changement de périphérique de sortie audio vers le nouveau périphérique a échoué.

## Exigences de sécurité

L'accès à l'API est soumis aux contraintes suivantes&nbsp;:

- La méthode doit être appelée dans un [contexte sécurisé](/fr/docs/Web/Security/Defenses/Secure_Contexts).
- L'accès peut être restreint par la [politique de permissions](/fr/docs/Web/HTTP/Guides/Permissions_Policy) HTTP [`speaker-selection`](/fr/docs/Web/HTTP/Reference/Headers/Permissions-Policy/speaker-selection).
- L'autorisation de l'utilisateur·ice est requise pour accéder à un périphérique qui n'est pas celui par défaut.
  L'utilisateur·ice accorde l'autorisation en sélectionnant le périphérique associé à l'ID dans l'invite affichée par {{DOMxRef("MediaDevices.selectAudioOutput()")}}.

## Exemples

Cet exemple montre comment sélectionner un périphérique de sortie audio à partir du tableau retourné par {{DOMxRef("MediaDevices.enumerateDevices()")}}, et le définir comme sortie audio.
Notez que le résultat de `enumerateDevices()` n'inclut que les périphériques pour lesquels l'autorisation de l'utilisateur·ice n'est pas requise ou a déjà été accordée.

```js
const peripheriques = await navigator.mediaDevices.enumerateDevices();
const peripheriqueAudio = peripheriques.find(
  (device) => device.kind === "audiooutput",
);
const audio = document.createElement("audio");
await audio.setSinkId(peripheriqueAudio.deviceId);
console.log(`L'audio est diffusé sur ${audio.sinkId}`);
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- [L'API Audio Output Devices](/fr/docs/Web/API/Audio_Output_Devices_API)
- La méthode {{DOMxRef("MediaDevices.selectAudioOutput()")}}
- La propriété {{DOMxRef("HTMLMediaElement.sinkId")}}
