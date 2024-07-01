---
title: translate
slug: Web/HTML/Global_attributes/translate
---

{{HTMLSidebar("Global_attributes")}}

L'[attribut universel](/fr/docs/Web/HTML/Attributs_universels) **`translate`** est un attribut à valeur contrainte qui peut être utilisé afin d'indiquer si les valeurs d'attribut d'un élément et si les valeurs de ses nœuds {{domxref("Text")}} descendants doivent être traduits lorsque la page est localisée ou s'il faut les laisser inchangés. Les valeurs autorisées pour cet attribut sont :

- `"yes"` (ou une chaîne vide), qui indique que l'élément devrait être traduit lorsque la page est localisée ;
- `"no"`, qui indique que l'élément ne doit pas être traduit.

> **Note :** Bien que la prise en charge de cet attribut ne soit pas homogène pour les navigateurs, celui-ci est pris en compte par les outils de traduction automatique (Google Translate par exemple) et les outils de traduction utilisés par les traducteurs. Aussi, cet attribut doit être utilisé par les auteurs web afin d'indiquer correctement le contenu qui ne devrait pas être traduit.

## Exemples

### HTML

```html
<label for="postcode" translate="no">
  <span translate="yes">Enter your postcode to find the nearest store</span>
</label>
<input id="postcode" type="text" />
```

### Résultat

{{EmbedLiveSample("Exemples","250","250")}}

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- [Les différents attributs universels](/fr/docs/Web/HTML/Attributs_universels)
- La propriété {{domxref("HTMLElement.translate")}} qui reflète cet attribut.
