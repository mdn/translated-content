---
title: En-tête Speculation-Rules
short-title: Speculation-Rules
slug: Web/HTTP/Reference/Headers/Speculation-Rules
l10n:
  sourceCommit: 7f6778934020a9b5b82b4dd8ca79a99bc9950c2a
---

{{SeeCompatTable}}

{{Glossary("response header", "L'en-tête de réponse")}} HTTP **`Speculation-Rules`** fournit une ou plusieurs URL pointant vers des ressources textuelles contenant des définitions JSON de règles de spéculation. Lorsque la réponse est un document HTML, ces règles sont ajoutées à l'ensemble des règles de spéculation du document. Voir [l'API Speculation Rules](/fr/docs/Web/API/Speculation_Rules_API) pour plus d'informations.

Le fichier de ressource contenant les règles de spéculation au format JSON peut avoir n'importe quel nom et extension valides, mais il est demandé avec un type [`destination`](/fr/docs/Web/API/Request/destination) de [`speculationrules`](/fr/docs/Web/API/Request/destination#speculationrules), et doit être servi avec un type MIME `application/speculationrules+json`.

> [!NOTE]
> Ce mécanisme fournit une alternative à la définition de la définition JSON à l'intérieur d'un élément en incise [`<script type="speculationrules">`](/fr/docs/Web/HTML/Reference/Elements/script/type/speculationrules). Définir un en-tête HTTP est utile dans les cas où les développeur·euse·s ne peuvent pas modifier directement le document lui-même.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Type d'en-tête</th>
      <td>{{Glossary("Response header", "En-tête de réponse")}}</td>
    </tr>
  </tbody>
</table>

## Syntaxe

```http
Speculation-Rules: <url-list>
```

## Directives

- `<url-list>`
  - : Une liste d'URL séparées par des virgules pointant vers des ressources textuelles contenant des définitions JSON de règles de spéculation. Le JSON contenu dans les fichiers texte doit suivre les mêmes règles que celui contenu à l'intérieur des éléments en incise `<script type="speculationrules">`. Voir [Représentation JSON des règles de spéculation](/fr/docs/Web/HTML/Reference/Elements/script/type/speculationrules#représentation_json_des_règles_de_spéculation) pour la référence de syntaxe.

## Exemples

### Champ `Speculation-Rules` avec un seul fichier

La réponse suivante contient une référence à un fichier&nbsp;:

```http
Speculation-Rules: "/rules/prefetch.json"
```

### Champ `Speculation-Rules` avec plusieurs fichiers

La réponse suivante contient plusieurs références de fichiers sous forme de liste séparée par des virgules&nbsp;:

```http
Speculation-Rules: "/rules/prefetch.json","/rules/prerender.json"
```

> [!NOTE]
> Les valeurs des URL doivent être contenues entre guillemets.

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- [L'API Speculation Rules](/fr/docs/Web/API/Speculation_Rules_API)
- La valeur d'attribut HTML [`<script type="speculationrules">`](/fr/docs/Web/HTML/Reference/Elements/script/type/speculationrules)
