---
title: Sélecteurs universels
slug: Web/CSS/Reference/Selectors/Universal_selectors
l10n:
  sourceCommit: ca0d81a57fd36cf5da9621c44171d0f333f3f3e1
---

Le **sélecteur universel** CSS (`*`) cible les éléments de n'importe quel type.

```css
/* Cibler tous les éléments */
* {
  color: green;
}
```

Le sélecteur universel est un [sélecteur de type](/fr/docs/Web/CSS/Reference/Selectors/Type_selectors) particulier et peut donc être associé à un espace de noms lors de l'utilisation de {{CSSxRef("@namespace")}}. Cela est utile lorsque vous travaillez avec des documents contenant plusieurs espaces de noms, comme HTML avec SVG ou MathML intégré, ou XML qui mélange plusieurs vocabulaires.

- `ns|*` - cible tous les éléments de l'espace de noms _ns_
- `*|*` - cible tous les éléments
- `|*` - cible tous les éléments sans espace de noms déclaré

> [!NOTE]
> Le sélecteur universel (`*`) cible **uniquement les éléments**.
> Il ne cible **pas** directement les pseudo-éléments.
>
> Pour cibler tous les pseudo-éléments {{CSSxRef("::before")}} sur une page, par exemple, vous devez utiliser un sélecteur comme `*::before`. Cela fonctionne parce que `*` cible tous les éléments, et le pseudo-élément `::before` est disponible sur tous les éléments.

## Syntaxe

```css
* {
  /* propriétés de style */
}
```

L'astérisque est optionnelle avec les sélecteurs simples. Par exemple, `*.warning` et `.warning` sont équivalents.

## Exemples

### CSS

```css
* [lang^="fr"] {
  color: green;
}

*.warning {
  color: red;
}

*#maincontent {
  border: 1px solid blue;
}

.floating {
  float: left;
}

/* libérer automatiquement le voisin suivant après un élément flottant */
.floating + * {
  clear: left;
}
```

### HTML

```html
<p class="warning">
  <span lang="fr">Un span vert</span> dans un paragraphe rouge.
</p>
<p id="maincontent" lang="fr">
  <span class="warning">Un span rouge</span> dans un paragraphe vert.
</p>
```

### Résultat

{{EmbedLiveSample("Exemples")}}

### Espaces de noms

Dans cet exemple, le sélecteur ne correspondra qu'aux éléments dans l'espace de noms example.

```css
@namespace example url("http://www.exemple.com/");
example|* {
  color: blue;
}
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- Le module [des sélecteurs CSS](/fr/docs/Web/CSS/Guides/Selectors)
- [Apprendre CSS&nbsp;: Sélecteurs de base](/fr/docs/Learn_web_development/Core/Styling_basics/Basic_selectors)
