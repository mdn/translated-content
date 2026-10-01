---
title: "Permissions-Policy : directive local-network"
short-title: local-network
slug: Web/HTTP/Reference/Headers/Permissions-Policy/local-network
l10n:
  sourceCommit: 75016e5d37ecff3b11de4c2ef6665178f654797e
---

{{SeeCompatTable}}

L'en-tête HTTP {{HTTPHeader("Permissions-Policy")}} avec la directive `local-network` contrôle si le document actuel est autorisé à effectuer des requêtes réseau vers des adresses locales.

Une adresse locale n'est accessible que sur le réseau local&nbsp;; sa cible varie selon les réseaux. Par exemple, `192.168.0.1`.

Spécifiquement, lorsque une politique définie bloque l'utilisation de cette fonctionnalité, les requêtes vers des adresses locales échouent toujours.

Voir [Accès au réseau local](/fr/docs/Web/Security/Defenses/Local_network_access) pour plus de détails.

## Syntaxe

```http
Permissions-Policy: local-network=<allowlist>;
```

- `<allowlist>`
  - : Une liste d'origines pour lesquelles l'autorisation d'utiliser la fonctionnalité est accordée. Voir [`Permissions-Policy` > Syntaxe](/fr/docs/Web/HTTP/Reference/Headers/Permissions-Policy#syntaxe) pour plus de détails.

## Politique par défaut

La liste d'autorisations par défaut pour `local-network` est `self`. Le contexte de navigation de premier niveau et les cadres intégrés de même origine ont par défaut accès à la fonctionnalité `local-network`.

## Exemples

### Utilisation simple

SecureCorp Inc. souhaite interdire `local-network` dans toutes les cadres intégrés inter-origines, sauf celles dont l'origine est `https://example.com`. Elle peut le faire en envoyant l'en-tête de réponse HTTP suivant pour définir une politique de permissions&nbsp;:

```http
Permissions-Policy: local-network=(self "https://example.com")
```

SecureCorp Inc. doit également inclure un attribut `{{HTMLElement("iframe#attributs","allow")}}` sur chaque élément HTML `<iframe>` où `local-network` doit être autorisé&nbsp;:

```html
<iframe src="https://example.com/lna" allow="local-network"></iframe>
```

> [!NOTE]
> La spécification de l'en-tête `Permissions-Policy` de cette manière interdit `local-network` pour d'autres origines, même si elles sont autorisées par l'attribut `allow` de l'élément `<iframe>`.

### Utiliser la politique par défaut

Si une liste d'autorisations pour `local-network` n'est pas définie par un en-tête de réponse `Permissions-Policy`, les agents utilisateurs appliquent la liste d'autorisations par défaut `self`. Dans ce mode, `local-network` est automatiquement autorisé dans le contexte de navigation de premier niveau et les cadres intégrés de même origine, mais pas dans les cadres intégrés inter-origines.

Pour autoriser `local-network` dans un cadre intégré inter-origines, incluez un attribut `{{HTMLElement("iframe#attributs","allow")}}` sur l'élément `<iframe>`&nbsp;:

```html
<iframe src="https://other.com/lna" allow="local-network"></iframe>
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- [Accès au réseau local](/fr/docs/Web/Security/Defenses/Local_network_access)
- L'en-tête {{HTTPHeader("Permissions-Policy")}}
- [Politique de permissions](/fr/docs/Web/HTTP/Guides/Permissions_Policy)
