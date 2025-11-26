---
title: monochrome
slug: Web/CSS/Reference/At-rules/@media/monochrome
original_slug: Web/CSS/@media/monochrome
l10n:
  sourceCommit: e82803beedb7f1d8a8e918c1071752f18e1e3f28
---

La [caractéristique média](/fr/docs/Web/CSS/Reference/At-rules/@media#caractéristiques_média) [CSS](/fr/docs/Web/CSS) **`monochrome`** permet de tester le nombre de bits par pixel dans le tampon d'affichage monochrome de l'appareil de sortie.

## Syntaxe

La caractéristique `monochrome` est un entier (type {{cssxref("&lt;integer&gt;")}}) dont la valeur correspond au nombre de bits par pixel utilisés pour le tampon d'affichage monochrome de l'appareil. Si l'appareil n'est pas monochrome, cela vaudra 0. Cette caractéristique est une caractéristique d'intervalle ce qui signifie qu'on peut également utiliser les variantes préfixées **`min-monochrome`** et **`max-monochrome`** afin de cibler les règles en fonction d'un minimum ou d'un maximum.

## Exemples

### HTML

```html
<p class="mono">Votre appareil prend en charge les pixels monochrome !</p>
<p class="no-mono">
  Votre appareil ne prend pas en charge les pixels monochromes.
</p>
```

### CSS

```css
p {
  display: none;
}

/* N'importe quel appareil monochrome */
@media (monochrome) {
  p.mono {
    display: block;
    color: #333;
  }
}

/* N'importe quel appareil non monochrome */
@media (monochrome: 0) {
  p.no-mono {
    display: block;
    color: #ee3636;
  }
}
```

### Résultat

{{EmbedLiveSample("exemples")}}

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}
