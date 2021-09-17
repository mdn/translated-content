---
title: scroll-snap-type-y
slug: Web/CSS/scroll-snap-type-y
tags:
  - CSS
  - Non-standard
  - Propriété
  - Reference
translation_of: Web/CSS/scroll-snap-type-y
---
{{CSSRef}}{{deprecated_header}}

La propriété **`scroll-snap-type-y`** définit la « force » avec laquelle les points d'accroche sont respectés lors d'un déroulement vertical.

La gestion précise des animations et de la physique pour respecter ces points d'accroche n'est pas décrite par cette propriété et est laissée à la discrétion de l'agent utilisateur.

```css
/* Valeurs avec un mot-clé */
scroll-snap-type-y: none;
scroll-snap-type-y: mandatory;
scroll-snap-type-y: proximity;

/* Valeurs globales */
scroll-snap-type-y: inherit;
scroll-snap-type-y: initial;
scroll-snap-type-y: unset;
```

## Syntaxe

### Valeurs

- `none`
  - : Lorsque le {{Glossary("viewport")}} du conteneur défile verticalement, on ignore les points d'accroche.
- `mandatory`
  - : Le _viewport_ visuel du conteneur doit s'arrêter sur les points d'accroche s'il n'est pas en cours de défilement. Cela signifie qu'il accroche sur ce point quand le défilement s'arrête. Si du contenu est ajouté, déplacé, supprimé ou redimensionné, le décalage induit doit être ajusté pour rester sur ce point d'accroche.
- `proximity`
  - : Le _viewport_ visuel du conteneur peut s'accrocher à un point d'accroche si aucun défilement n'est en cours, selon les paramètres de défilement de l'agent utilisateur. Si du contenu est ajouté, déplacé, supprimé ou redimensionne, le décalage induit peut être ajuster pour rester sur ce point d'accroche.

### Syntaxe formelle

    none | mandatory | proximity

## Spécifications

Cette propriété ne fait partie d'aucune spécification.

{{cssinfo}}

## Compatibilité des navigateurs

{{Compat("css.properties.scroll-snap-type-y")}}
