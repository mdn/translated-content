---
title: fit-content
slug: Web/CSS/fit-content
---

{{CSSRef}}

La fonction **`fit-content`** se comporte comme `fit-content(stretch)`. En pratique, cela signifie que la boîte utilisera l'espace disponible, mais jamais plus que {{cssxref("max-content")}}.

Lorsqu'elle est utilisée comme taille de boîte pour {{cssxref("width")}}, {{cssxref("height")}}, {{cssxref("min-width")}}, {{cssxref("min-height")}}, {{cssxref("max-width")}} et {{cssxref("max-height")}}, les tailles maximale et minimale se réfèrent à la taille du contenu.

> **Note:** La spécification CSS Sizing définit également la fonction {{cssxref("fit-content_function", "fit-content()")}}. Cette page détaille le mot-clé.

## Syntaxe

```css
width: fit-content;
block-size: fit-content;
```

## Exemple

### Utilisation de fit-content pour le dimensionnement des boîtes

#### HTML

```html
<div class="container">
  <div class="item">Texte</div>
  <div class="item">Un peu plus de texte</div>
  <div class="item">
    Voyons maintenant le comportement avec du texte long, permettant ainsi de montrer 
    le fonctionnement de fit-content !
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

{{EmbedLiveSample("utilisation_de_fit-content_pour_le_dimensionnement_des_boîtes", "100%", 200)}}

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- Mots clés relatifs à la taille : {{cssxref("min-content")}}, {{cssxref("max-content")}}
