---
title: <url>
slug: Web/CSS/Reference/Values/url_value
l10n:
  sourceCommit: f69b6693212029ce4b9fa0c753729044577af548
---

Le [type de données](/fr/docs/Web/CSS/Reference/Values/Data_types) [CSS](/fr/docs/Web/CSS) **`<url>`** est un pointeur vers une ressource. La ressource peut être une image, une vidéo, un fichier CSS, un fichier de police, une fonctionnalité SVG, etc.

## Syntaxe

```plain
<url> = <url()>
```

### Valeurs

La valeur est l'une des suivantes&nbsp;:

- {{CSSxRef("url_function", "url()")}}
  - : La fonction `url()` n'accepte qu'une chaîne d'URL littérale (avec ou sans guillemets).

> [!NOTE]
> La spécification définit une fonction alternative appelée `src()` qui accepte une chaîne d'URL ou une [variable CSS](/fr/docs/Web/CSS/Reference/Values/var). Mais aucun navigateur web ne l'a encore implémentée.

## Spécifications

{{Specifications}}

## Voir aussi

- La fonction {{CSSxRef("url_function", "url()")}}
