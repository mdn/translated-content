---
title: Sélecteurs de classe
slug: Web/CSS/Class_selectors
---

{{CSSRef}}

Les **sélecteurs de classe** CSS permettent de cibler des éléments d'un document en fonction du contenu de l'attribut `class` de chaque élément.

```css
/* Cible tous les éléments ayant la classe "spacious" */
.spacious {
  margin: 2em;
}

/* Cible tous les éléments <li> ayant la classe "spacious" */
li.spacious {
  margin: 2em;
}

/* Cible tous les éléments <li> ayant une classe qui */
/* contient à la fois "spacious" et "elegant"        */
li.spacious.elegant {
  margin: 2em;
}
```

L'attribut [`class`](/fr/docs/Web/HTML/Global_attributes#class) est une liste de termes séparés par des espaces, il est nécessaire qu'un de ces termes corresponde exactement au nom utilisé dans le sélecteur pour que l'élément soit ciblé.

## Syntaxe

```
.nomdeclasse { déclarations CSS }
```

Cela est exactement équivalent à l'utilisation du [sélecteur d'attribut](/fr/docs/Web/CSS/Sélecteurs_d_attribut) de la façon suivante :

```
[class~=nomdeclasse] { déclarations CSS }
```

## Exemples

### CSS

```css
.classy {
  background-color: skyblue;
}
.toto {
  font-weight: bold;
}
```

### HTML

```html
<div class="classy">Voici un div avec du texte.</div>
<div class="toto classy truc">
  Les éléments peuvent avoir plusieurs classes, le sélecteur fonctionnera tout
  de même !
</div>
<div>En voilà un autre.</div>
```

### Résultat

{{EmbedLiveSample('Exemples')}}

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}
