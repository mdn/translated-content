---
title: NotifyAudioAvailableEvent
slug: Web/API/NotifyAudioAvailableEvent
tags:
  - API
  - Audio
  - Déprécié
  - Non-standard
  - Reference
  - Référence(2)
translation_of: Web/API/NotifyAudioAvailableEvent
---
{{APIRef("Web Audio API")}}{{Non-standard_header}}{{Deprecated_header}}

L'interface **`NotifyAudioAvailableEvent`** non standard et obsolète définit l'événement envoyé aux éléments audio lorsque la mémoire tampon audio est pleine.

## Propriétés

- `frameBuffer` {{ReadOnlyInline}}
  - : Un {{jsxref("Float32Array")}} contenant les données audo à virgule flottante 32 bits brutes obtenues à partir du décodage de l'audio (par exemple, les données brutes envoyées au matériel audio par rapport à l'audio codé). Les données sont une série d'échantillons audio, chaque échantillon contenant une valeur de 32 bits par canal audio. Toutes les trames audio sont normalisées pour contenir 1024 échantillons par défaut, mais peuvent avoir une longueur comprise entre 512 et 16384 échantillons si l'utilisateur a défini une longueur différente à l'aide de l'attribut **`mozFrameBufferLength`**.
- `time`
  - : Valeur à virgule flottante indiquant le temps en secondes auquel le premier échantillon du `frameBuffer` se produit, par rapport au début de la piste audio.
