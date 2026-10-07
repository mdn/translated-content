---
title: En-tête Use-As-Dictionary
short-title: Use-As-Dictionary
slug: Web/HTTP/Reference/Headers/Use-As-Dictionary
l10n:
  sourceCommit: 57d3803b2ba01a8ac6cf51e796d6871e4e411ff1
---

{{SeeCompatTable}}

L'en-tête de réponse HTTP **`Use-As-Dictionary`** liste les critères de correspondance pour lesquels le dictionnaire {{Glossary("Compression Dictionary Transport", "de transport de dictionnaire de compression")}} peut être utilisé, pour les requêtes futures.

Le navigateur n'utilise le dictionnaire que tant que la réponse qui contient cet en-tête est [fraîche](/fr/docs/Web/HTTP/Guides/Caching#fraîcheur_et_obsolescence_basées_sur_lâge), ou tant que `stale-while-revalidate` permet encore que cette réponse soit servie comme obsolète. Une réponse envoyée avec `no-cache` ou `no-store` n'est jamais utilisée comme dictionnaire, et une réponse envoyée avec `must-revalidate` n'est utilisée que jusqu'à ce que son `max-age` expire. Voir [Fraîcheur du dictionnaire](/fr/docs/Web/HTTP/Guides/Compression_dictionary_transport#fraîcheur_du_dictionnaire) pour plus de détails.

Voir le [guide sur le transport de dictionnaire de compression](/fr/docs/Web/HTTP/Guides/Compression_dictionary_transport) pour plus d'informations.

## Syntaxe

```http
Use-As-Dictionary: match="<url-pattern>"
Use-As-Dictionary: match-dest=("<destination1>" "<destination2>", …)
Use-As-Dictionary: id="<string-identifier>"
Use-As-Dictionary: type="raw"

// Plusieurs, dans n'importe quel ordre
Use-As-Dictionary: match="<url-pattern>", match-dest=("<destination1>")
```

## Directives

- `match`
  - : Une valeur de type chaîne de caractères contenant un [modèle d'URL](/fr/docs/Web/API/URL_Pattern_API)&nbsp;: seules les ressources dont les URL correspondent à ce modèle peuvent utiliser cette ressource comme dictionnaire. Les groupes de capture des expressions régulières ne sont pas autorisés, donc {{DOMxRef("URLPattern.hasRegExpGroups")}} doit être `false`.
- `match-dest`
  - : Une liste de chaînes de caractères séparées par des espaces, chaque chaîne de caractères étant entre guillemets et l'ensemble de la valeur étant entre parenthèses, qui fournit une liste de [destinations de requête de récupération](/fr/docs/Web/API/Request/destination) que les requêtes doivent correspondre si elles veulent utiliser ce dictionnaire.
- `id`
  - : Une valeur de type chaîne de caractères qui définit un identifiant de serveur pour le dictionnaire. Cette valeur d'identifiant est ensuite ajoutée dans l'en-tête de requête {{HTTPHeader("Dictionary-ID")}} lorsque le navigateur demande une ressource pouvant utiliser ce dictionnaire.
- `type`
  - : Une valeur de type chaîne de caractères qui décrit le format de fichier du dictionnaire fourni. Actuellement, seul `raw` est pris en charge (ce qui est la valeur par défaut), donc cela est davantage destiné à la compatibilité future.

## Exemples

### Préfixe de chemin

```http
Use-As-Dictionary: match="/product/*"
```

Cela indique que le dictionnaire ne s'utilise que pour les URL qui commencent par `/product/`.

### Répertoires versionnés

```http
Use-As-Dictionary: match="/app/*/main.js"
```

Cela utilise un caractère générique pour faire correspondre plusieurs versions d'un fichier.

### Destinations

```http
Use-As-Dictionary: match="/product/*", match-dest=("document")
```

Cela utilise `match-dest` pour garantir que le dictionnaire ne s'utilise que pour les requêtes `document` de sorte que les requêtes de ressources telles que `<script src="/product/js/app.js">` ne correspondent pas par exemple.

```http
Use-As-Dictionary: match="/product/*", match-dest=("document" "frame")
```

Cela permet au dictionnaire de correspondre à la fois aux documents de premier niveau et aux cadres intégrés.

### Id

```http
Use-As-Dictionary: match="/product/*", id="dictionary-12345"
```

Lorsque `Use-As-Dictionary` comprend une directive `id`, comme dans cet exemple, la valeur `id` est incluse dans l'en-tête de requête {{HTTPHeader("Dictionary-ID")}} pour les ressources qui peuvent utiliser ce dictionnaire. La requête de ressource inclut également le hachage SHA-256 du dictionnaire entouré de deux-points dans l'en-tête {{HTTPHeader("Available-Dictionary")}}&nbsp;:

```http
Accept-Encoding: gzip, br, zstd, dcb, dcz
Available-Dictionary: :pZGm1Av0IEBKARczz7exkNYsZb8LzaMrV7J32a2fFG4=:
Dictionary-ID: "dictionary-12345"
```

Le serveur doit toujours vérifier le hachage de l'en-tête `Available-Dictionary` — `Dictionary-ID` fournit au serveur une information supplémentaire pour identifier le dictionnaire mais ne remplace pas la nécessité de l'en-tête `Available-Dictionary`.

### Type

```http
Use-As-Dictionary: match="/product/*", type="raw"
```

Actuellement, seul `raw` est pris en charge (il s'agit de la valeur par défaut) et cette directive sert donc davantage à assurer la compatibilité future.

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- [Le guide du transport des dictionnaires de compression](/fr/docs/Web/HTTP/Guides/Compression_dictionary_transport)
- L'en-tête {{HTTPHeader("Available-Dictionary")}}
- L'en-tête {{HTTPHeader("Dictionary-ID")}}
