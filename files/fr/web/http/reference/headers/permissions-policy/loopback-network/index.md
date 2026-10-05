---
title: "Permissions-Policy : directive loopback-network"
short-title: loopback-network
slug: Web/HTTP/Reference/Headers/Permissions-Policy/loopback-network
l10n:
  sourceCommit: 75016e5d37ecff3b11de4c2ef6665178f654797e
---

{{SeeCompatTable}}

L'en-tête HTTP {{HTTPHeader("Permissions-Policy")}} avec la directive `loopback-network` contrôle si le document actuel est autorisé à effectuer des requêtes réseau vers des adresses de bouclage.

Une adresse de bouclage n'est accessible que sur l'hôte local&nbsp;; sa cible varie selon chaque appareil. Par exemple, `127.0.0.1`, généralement connue sous le nom de `localhost`.

Spécifiquement, lorsque une politique définie bloque l'utilisation de cette fonctionnalité, les requêtes vers des adresses de bouclage échouent toujours.

Voir [Accès au réseau local](/fr/docs/Web/Security/Defenses/Local_network_access) pour plus de détails.

## Syntaxe

```http
Permissions-Policy: loopback-network=<allowlist>;
```

- `<allowlist>`
  - : Une liste d'origines pour lesquelles l'autorisation d'utiliser la fonctionnalité est accordée. Voir [`Permissions-Policy` > Syntaxe](/fr/docs/Web/HTTP/Reference/Headers/Permissions-Policy#syntaxe) pour plus de détails.

## Politique par défaut

La liste d'autorisations par défaut pour `loopback-network` est `self`. Le contexte de navigation de premier niveau et les cadres intégrés de même origine ont par défaut accès à la fonctionnalité `loopback-network`.

## Exemples

### Utilisation simple

SecureCorp Inc. souhaite interdire `loopback-network` dans tous les cadres intégrés inter-origines, sauf ceux dont l'origine est `https://example.com`. Cela peut être fait en envoyant l'en-tête de réponse HTTP suivant pour définir une politique de permissions&nbsp;:

```http
Permissions-Policy: loopback-network=(self "https://example.com")
```

SecureCorp Inc. doit également inclure un attribut `{{HTMLElement("iframe#attributs", "allow")}}` sur chaque élément HTML `<iframe>` où `loopback-network` doit être autorisé&nbsp;:

```html
<iframe src="https://example.com/lna" allow="loopback-network"></iframe>
```

> [!NOTE]
> La spécification de l'en-tête `Permissions-Policy` de cette manière interdit `loopback-network` pour d'autres origines, même si elles sont autorisées par l'attribut `allow` de l'élément `<iframe>`.

### Utiliser la politique par défaut

Si une liste d'autorisations pour `loopback-network` n'est pas définie par un en-tête de réponse `Permissions-Policy`, les agents utilisateurs appliquent la liste d'autorisations par défaut `self`. Dans ce mode, `loopback-network` est automatiquement autorisé dans le contexte de navigation de premier niveau et les cadres intégrés de même origine, mais pas dans les cadres intégrés inter-origines.

Pour autoriser `loopback-network` dans un cadre intégré inter-origine, incluez un attribut `{{HTMLElement("iframe#attributs", "allow")}}` sur l'élément `<iframe>`&nbsp;:

```html
<iframe src="https://other.com/lna" allow="loopback-network"></iframe>
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- [Accès au réseau local](/fr/docs/Web/Security/Defenses/Local_network_access)
- L'en-tête {{HTTPHeader("Permissions-Policy")}}
- [Politique de permissions](/fr/docs/Web/HTTP/Guides/Permissions_Policy)
