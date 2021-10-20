---
title: opacity()
slug: Web/CSS/filter-function/opacity()
tags:
  - CSS
  - Filtre
  - Fonction
  - Reference
translation_of: Web/CSS/filter-function/opacity()
---
{{CSSRef}}

La fonction CSS **`opacity()`** permet de modifier la transparence de l'image. Le résultat obtenu par cette fonction est une valeur {{cssxref("&lt;filter-function&gt;")}}.

{ {EmbedInteractiveExample("pages/css/function-opacity.html")}}

> **Note :** Cette fonction est proche de la propriété {{cssxref("opacity")}} mais, selon le navigateur, les filtres CSS peuvent bénéficier de l'accélération matérielle pour de meilleures performances.

## Syntaxe

    opacity(multiplicateur)

### Paramètres

- `multiplicateur`
  - : L'intensité de l'opacité, indiquée comme un nombre ({{cssxref("&lt;number&gt;")}}) ou comme un pourcentage ({{cssxref("&lt;percentage&gt;")}}). Une  valeur de `0%` entraînera une image complètement transparente. Une valeur de `100%` laissera l'image inchangée. Les valeurs intermédiaires auront un effet proportionnel. Lors d'une interpolation, la valeur par défaut utilisée sera `1`.

## Exemples

```css
opacity(0%);   /* Complètement transparente */
opacity(50%);  /* 50% transparent */
opacity(1);    /* Aucun effet */
```

## Voir aussi

- {{cssxref("&lt;filter-function&gt;")}}
- La propriété CSS {{cssxref("opacity")}}
