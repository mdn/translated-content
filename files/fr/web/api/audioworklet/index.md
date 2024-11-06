---
title: AudioWorklet
slug: Web/API/AudioWorklet
---

{{APIRef("Web Audio API")}}{{securecontext_header}}

L'interface **`AudioWorklet`** dans l'[API Web Audio](/fr/docs/Web/API/Web_Audio_API) est utilisée pour fournir des scripts de traitement audio personnalisés qui s'exécutent dans un thread séparé afin de fournir un traitement audio à très faible latence. Le code du worklet est exécuté dans le contexte d'exécution global {{domxref("AudioWorkletGlobalScope")}}, en utilisant un thread audio web séparé qui est partagé par le worklet et les autres nœuds audio.

L'accès à distance d'`AudioWorklet` du contexte audio se fait par la propriété {{domxref("BaseAudioContext.audioWorklet")}}.

## Propriétés

_L'interface `AudioWorklet` ne définit pas de propriétés propres, mais hérite des propriétés de [`Worklet`](/fr/docs/Web/API/Worklet)._

## Méthodes

Cette interface hérite des méthodes de *{{domxref('Worklet')}}. L'interface `AudioWorklet`*ne définit aucune méthode propre*.*

## Evénements

_L'interface `AudioWorklet` n'a pas d'évènements auxquels elle répond._

## Exemples

Voir {{domxref("AudioWorkletNode")}} pour des exemples complets de création de nœuds audio personnalisés.

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- {{domxref("AudioWorkletGlobalScope")}} — le contexte global d'exécution d'un `AudioWorklet`
- [API Web Audio](/fr/docs/Web/API/Web_Audio_API)
- [Utiliser la Web Audio API](/fr/docs/Web/API/Web_Audio_API/Using_Web_Audio_API)
