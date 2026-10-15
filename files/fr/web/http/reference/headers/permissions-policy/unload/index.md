---
title: "Permissions-Policy: unload directive"
short-title: unload
slug: Web/HTTP/Reference/Headers/Permissions-Policy/unload
l10n:
  sourceCommit: 75b6c08573c39a7d6557c911502912f1a3c7da9f
---

{{SeeCompatTable}}{{Non-standard_Header}}

L'en-tête HTTP {{HTTPHeader("Permissions-Policy")}} avec la directive `unload` contrôle si le document actuel est autorisé à exécuter des gestionnaires d'évènements {{DOMxRef("Window/unload_event", "unload")}}.

Lorsque qu'une politique définie interdit l'utilisation de cette fonctionnalité, les gestionnaires d'évènements `unload` enregistrés dans le document ne s'exécutent pas.

Les gestionnaires de `unload` sont peu fiables et empêchent les pages d'être stockées dans le [cache arrière/avant <sup>(angl.)</sup>](https://web.dev/articles/bfcache) (bfcache). Les bloquer permet à une page de rester éligible au bfcache, même si des scripts tiers dans la page ajoutent des gestionnaires `unload`. Voir les [notes d'utilisation de l'évènement `unload`](/fr/docs/Web/API/Window/unload_event#notes_dutilisation) pour des alternatives.

## Syntaxe

```http
Permissions-Policy: unload=<allowlist>;
```

- `<allowlist>`
  - : Une liste d'origines pour lesquelles l'autorisation d'utiliser la fonctionnalité est accordée. Voir [`Permissions-Policy` > Syntaxe](/fr/docs/Web/HTTP/Reference/Headers/Permissions-Policy#syntaxe) pour plus de détails.

## Politique par défaut

Dans Chrome, la liste d'autorisations par défaut pour `unload` est `()`, ce qui signifie que les gestionnaires `unload` ne s'exécutent pas à moins qu'un document ne choisisse d'y participer. Chrome utilisait initialement une liste d'autorisations par défaut de `*`, et [l'a modifiée progressivement <sup>(angl.)</sup>](https://developer.chrome.com/docs/web-platform/deprecating-unload).

## Exemples

### Bloquer les gestionnaires de déchargement

Un site veut s'assurer qu'aucun gestionnaire `unload` ne s'exécute dans ses pages ou dans l'un de leurs cadres intégrés, afin que les pages restent éligibles au bfcache. Il peut le faire en envoyant l'en-tête de réponse HTTP suivant&nbsp;:

```http
Permissions-Policy: unload=()
```

### Autoriser les gestionnaires de déchargement

Un site qui dépend encore des gestionnaires `unload` peut leur permettre de s'exécuter dans ses pages de premier niveau en envoyant l'en-tête de réponse HTTP suivant&nbsp;:

```http
Permissions-Policy: unload=self
```

Pour autoriser également les gestionnaires `unload` dans un cadre intégré inter-origine dont l'origine est `https://example.com`, la page intégrante doit inclure cette origine dans sa liste d'autorisations&nbsp;:

```http
Permissions-Policy: unload=(self "https://example.com")
```

Elle doit également inclure un attribut `{{HTMLElement("iframe#allow","allow")}}` sur l'élément HTML `<iframe>`&nbsp;:

```html
<iframe src="https://example.com/embed" allow="unload"></iframe>
```

Le document chargé dans le cadre intégré doit également autoriser les gestionnaires `unload`, en utilisant son propre en-tête de réponse `Permissions-Policy: unload=self`.

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- L'en-tête {{HTTPHeader("Permissions-Policy")}}
- [Politique de permissions](/fr/docs/Web/HTTP/Guides/Permissions_Policy)
- L'évènement {{DOMxRef("Window/unload_event", "unload")}}
- [Obsolescence de l'évènement `unload` <sup>(angl.)</sup>](https://developer.chrome.com/docs/web-platform/deprecating-unload) sur developer.chrome.com
