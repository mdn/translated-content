---
title: "Permissions-Policy : directive autoplay"
short-title: autoplay
slug: Web/HTTP/Reference/Headers/Permissions-Policy/autoplay
l10n:
  sourceCommit: ad5b5e31f81795d692e66dadb7818ba8b220ad15
---

{{SeeCompatTable}}

L'en-tête HTTP {{HTTPHeader("Permissions-Policy")}} avec la directive **`autoplay`** contrôle si le document courant est autorisé à lire automatiquement les médias demandés avec l'interface {{DOMxRef("HTMLMediaElement")}}.

Plus précisément, lorsqu'une politique définie bloque l'utilisation de cette fonctionnalité et qu'aucun geste de l'utilisateur·ice n'a été effectué, la promesse ({{JSxRef("Promise")}}) retournée par {{DOMxRef("HTMLMediaElement.play()")}} sera rejetée avec une {{DOMxRef("DOMException")}}. L'attribut [`autoplay`](/fr/docs/Web/HTML/Reference/Elements/audio#autoplay) sur les éléments HTML {{HTMLElement("audio")}} et {{HTMLElement("video")}} sera ignoré.

> [!NOTE]
> Pour plus de détails sur la lecture automatique et le blocage de la lecture automatique, voir l'article [Guide de la lecture automatique pour les médias et les API Web Audio](/fr/docs/Web/Media/Guides/Autoplay).

## Syntaxe

```http
Permissions-Policy: autoplay=<allowlist>;
```

- `<allowlist>`
  - : Une liste d'origines pour lesquelles la permission est accordée pour utiliser la fonctionnalité. Voir [`Permissions-Policy` > Syntaxe](/fr/docs/Web/HTTP/Reference/Headers/Permissions-Policy#syntaxe) pour plus de détails.

## Règle par défaut

La liste d'autorisation par défaut pour `autoplay` est `self`.

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- L'en-tête {{HTTPHeader("Permissions-Policy")}}
- [Politique de permissions](/fr/docs/Web/HTTP/Guides/Permissions_Policy)
