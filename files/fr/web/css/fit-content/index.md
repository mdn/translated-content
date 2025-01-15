---
title: fit-content
slug: Web/CSS/fit-content
l10n:
  sourceCommit: 059c9c1d93926bec5383fcfeb301f282ed40a9b9
---

{{CSSRef}}

Le mot-clé **`fit-content`** se comporte comme `fit-content(stretch)`. En pratique, cela signifie que le conteneur utilisera l'espace disponible, mais jamais plus que [`max-content`](/fr/docs/Web/CSS/max-content).

Lorsqu'elle est utilisée comme taille de boîte pour [`width`](/fr/docs/Web/CSS/width), [`height`](/fr/docs/Web/CSS/height), [`min-width`](/fr/docs/Web/CSS/min-width), [`min-height`](/fr/docs/Web/CSS/min-height), [`max-width`](/fr/docs/Web/CSS/max-width) et [`max-height`](/fr/docs/Web/CSS/max-height), les tailles maximale et minimale se réfèrent à la taille du contenu.

> [!NOTE]
> La spécification <i lang="en">CSS Sizing</i> définit également la fonction [`fit-content`](/fr/docs/Web/CSS/fit-content_function). Cette page détaille le mot-clé.

## Syntaxe

```css
width: fit-content;
block-size: fit-content;
```

## Exemple

### Utilisation de `fit-content` pour le dimensionnement des boîtes

#### HTML

```html
<div class="container">
  <div class="item">Texte</div>
  <div class="item">Un peu plus de texte</div>
  <div class="item">
    Voyons maintenant le comportement avec du texte long, permettant ainsi de
    montrer le fonctionnement de fit-content !
  </div>
</div>
```

#### CSS

```css
.container {
  border: 2px solid #ccc;
  padding: 10px;
  width: 20em;
}

.item {
  width: fit-content;
  background-color: #8ca0ff;
  padding: 5px;
  margin-bottom: 1em;
}
```

#### Résultat

{{EmbedLiveSample("utilisation_de_fit-content_pour_le_dimensionnement_des_bo%C3%AEtes", "100%", 230)}}

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- Mots-clés relatifs à la taille&nbsp;: [`min-content`](/fr/docs/Web/CSS/min-content), [`max-content`](/fr/docs/Web/CSS/max-content)
