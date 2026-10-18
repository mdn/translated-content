---
title: En-tête Sec-Speculation-Tags
short-title: Sec-Speculation-Tags
slug: Web/HTTP/Reference/Headers/Sec-Speculation-Tags
l10n:
  sourceCommit: 11e09e7c584658fbfbecd2f00ae66e546cd54cc0
---

{{SeeCompatTable}}

{{Glossary("request header", "L'en-tête de requête")}} HTTP **`Sec-Speculation-Tags`** contient une ou plusieurs valeurs `tag` provenant des [règles de spéculation](/fr/docs/Web/API/Speculation_Rules_API) qui ont entraîné la spéculation. Cela permet à un serveur d'identifier quelle(s) règle(s) a(ont) causé une spéculation et de potentiellement les bloquer.

Par exemple, un CDN peut insérer automatiquement des règles de spéculation, mais bloquer les spéculations pour les ressources non mises en cache dans le CDN afin d'éviter des conséquences inattendues. L'en-tête `Sec-Speculation-Tags` permet au CDN de différencier les règles qu'il a insérées (qui doivent être bloquées dans ce cas) et les règles de spéculation ajoutées par le propriétaire du site (qui ne doivent pas être bloquées).

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Type d'en-tête</th>
      <td>{{Glossary("Request header", "En-tête de requête")}}</td>
    </tr>
    <tr>
      <th scope="row">{{Glossary("Forbidden request header", "En-tête de requête interdit")}}</th>
      <td>Oui (préfixe <code>Sec-</code>)</td>
    </tr>
  </tbody>
</table>

## Syntaxe

```http
Sec-Speculation-Tags: <tag-list>
```

## Directives

- `<tag-list>`
  - : Une liste d'étiquettes séparée par des virgules indiquant les règles de [l'API Speculation Rules](/fr/docs/Web/API/Speculation_Rules_API) qui ont pu initier cette requête. Voir [Représentation JSON des règles de spéculation](/fr/docs/Web/HTML/Reference/Elements/script/type/speculationrules#représentation_json_des_règles_de_spéculation) pour la référence de syntaxe.

## Exemples

### Spéculation à partir d'une règle sans étiquette explicite

```html
<script type="speculationrules">
  {
    "prefetch": [
      {
        "urls": ["suivant.html", "suivant2.html"]
      }
    ]
  }
</script>
```

Si une spéculation se produit en raison d'une règle de spéculation sans étiquette, alors `null` est envoyé dans l'en-tête `Sec-Speculation-Tags`.

```http
Sec-Speculation-Tags: null
```

### Spéculation à partir d'une règle avec une étiquette

```html
<script type="speculationrules">
  {
    "prefetch": [
      {
        "tag": "ma-regle",
        "urls": ["suivant.html", "suivant2.html"]
      }
    ]
  }
</script>
```

Si une spéculation se produit en raison d'une règle de spéculation avec une étiquette, le nom de l'étiquette est envoyé dans l'en-tête `Sec-Speculation-Tags`.

```http
Sec-Speculation-Tags: "ma-regle"
```

### Spéculation à partir d'une règle avec plusieurs étiquettes

Un `tag` peut être défini à plusieurs niveaux&nbsp;:

```html
<script type="speculationrules">
  {
    "tag": "ma-collection-de-regles",
    "prefetch": [
      {
        "tag": "ma-regle",
        "urls": ["suivant.html", "suivant2.html"]
      }
    ]
  }
</script>
```

Toutes les étiquettes correspondantes sont envoyées dans l'en-tête `Sec-Speculation-Tags`, donc dans ce cas, à la fois `"ma-collection-de-regles"` et `"ma-regle"` sont envoyées&nbsp;:

```http
Sec-Speculation-Tags: "ma-collection-de-regles", "ma-regle"
```

### Spéculation à partir de plusieurs règles

```html
<script type="speculationrules">
  {
    "prefetch": [
      {
        "tag": "ma-regle",
        "urls": ["suivant.html", "suivant2.html"],
        "eagerness": "moderate"
      }
    ]
  }
</script>
<script type="speculationrules">
  {
    "prefetch": [
      {
        "tag": "regle-cdn",
        "urls": ["suivant.html", "suivant.html"],
        "eagerness": "conservative"
      }
    ]
  }
</script>
```

Dans cet exemple, si la spéculation est initiée par le fait que l'utilisateur·ice survole le lien pendant 200 millisecondes (`"eagerness": "moderate"`), alors seule l'étiquette `ma-regle` est envoyée dans l'en-tête&nbsp;:

```http
Sec-Speculation-Tags: "ma-regle"
```

Cependant, si le lien est cliqué immédiatement, sans attendre les 200 millisecondes de survol, alors les deux règles ont déclenché une spéculation, donc les deux étiquettes sont incluses dans l'en-tête&nbsp;:

```http
Sec-Speculation-Tags: "ma-regle", "regle-cdn"
```

### Spéculation à partir de plusieurs règles, avec et sans étiquettes

```html
<script type="speculationrules">
  {
    "prefetch": [
      {
        "urls": ["suivant.html", "suivant2.html"],
        "eagerness": "moderate"
      }
    ]
  }
</script>
<script type="speculationrules">
  {
    "prefetch": [
      {
        "tag": "regle-cdn",
        "urls": ["suivant.html", "suivant.html"],
        "eagerness": "conservative"
      }
    ]
  }
</script>
```

De manière similaire à l'exemple précédent, si le lien est cliqué immédiatement sans attendre les 200 millisecondes de survol, les deux règles ont déclenché une spéculation, donc les deux étiquettes sont incluses dans l'en-tête. Cependant, comme la première règle n'inclut pas de champ `tag`, elle est représentée dans l'en-tête avec une valeur `null`&nbsp;:

```http
Sec-Speculation-Tags: null, "regle-cdn"
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- [L'API Speculation Rules](/fr/docs/Web/API/Speculation_Rules_API)
- La valeur d'attribut HTML [`<script type="speculationrules">`](/fr/docs/Web/HTML/Reference/Elements/script/type/speculationrules)
