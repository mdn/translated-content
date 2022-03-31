---
title: monochrome
slug: Web/CSS/@media/monochrome
tags:
  - CSS
  - Caractéristique média
  - Reference
translation_of: Web/CSS/@media/monochrome
---
{{CSSRef}}

**`monochrome`** est une caractéristique média CSS (cf. {{cssxref("@media")}}) qui peut être utilisée afin d'appliquer des styles en fonction du nombre de bits par pixel utilisés pour le tampon d'affichage monochrome de l'appareil.

## Syntaxe

La caractéristique `monochrome` est un entier (type {{cssxref("&lt;integer&gt;")}})) dont la valeur correspond au nombre de bits par pixel utilisés pour le tampon d'affichage monochrome de l'appareil. Si l'appareil n'est pas monochrome, cela vaudra 0. Cette caractéristique est une caractéristique d'intervalle ce qui signifie qu'on peut également utiliser les variantes préfixées **`min-monochrome`** et **`max-monochrome`** afin de cibler les règles en fonction d'un minimum ou d'un maximum.

## Exemples

### HTML

```html
<p class="mono">
  Votre appareil prend en charge les
  pixels monochrome !
</p>
<p class="no-mono">
  Votre appareil ne prend pas en charge
  les pixels monochromes.
</p>
```

### CSS

```css
p {
  display: none;
}

/* Any monochrome device */
@media (monochrome) {
  p.mono {
    display: block;
    color: #333;
  }
}

/* Any non-monochrome device */
@media (monochrome: 0) {
  p.no-mono {
    display: block;
    color: #ee3636;
  }
}
```

### Résultat

{{EmbedLiveSample("Exemples")}}

## Spécifications

| Spécification                                                                        | État                                     | Commentaires                                                                          |
| ------------------------------------------------------------------------------------ | ---------------------------------------- | ------------------------------------------------------------------------------------- |
| {{SpecName('CSS4 Media Queries', '#monochrome', 'monochrome')}} | {{Spec2('CSS4 Media Queries')}} | La valeur peut désormais être négative, auquel cas cela correspond à un booléen faux. |
| {{SpecName('CSS3 Media Queries', '#monochrome', 'monochrome')}} | {{Spec2('CSS3 Media Queries')}} | Définition initiale. La valeur ne doit pas être négative.                             |

## Compatibilité des navigateurs

{{Compat("css.at-rules.media.monochrome")}}
