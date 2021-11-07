---
title: '<big> : l''élément d''agrandissement de texte'
slug: Web/HTML/Element/big
tags:
  - Element
  - HTML
  - Deprecated
  - Reference
  - Web
translation_of: Web/HTML/Element/big
browser-compat: html.elements.big
---
{{HTMLRef}}

> **Attention :** Cette fonctionnalité a été supprimée des standards du Web. Bien que quelques navigateurs puissent encore la supporter, elle est en cours d'éradication. Ne l'utilisez ni dans d'anciens projets, ni dans de nouveaux. Les pages et applications Web l'utilisant peuvent cesser de fonctionner à tout moment.

L'élément HTML **`<big>`** (gros) augmente d'une taille la police du texte de l'élément (il permet par exemple de passer de `small` à `medium`, ou de `large` à `x-large`) jusqu'à atteindre la taille maximale autorisée par le navigateur.

> **Note :** Cet élément est purement stylistique. Il a été supprimé en HTML5 et ne doit plus être utilisé. Les développeurs web doivent utiliser les propriétés [CSS](/fr/docs/Web/CSS) pour remplacer cet élément.

## Attributs

Cet élément n'a aucun autre attribut en dehors des [attributs universels](/fr/docs/Web/HTML/Global_attributes) communs à tous les éléments.

## Exemples

Nous voyons ici des exemples montrant l'utilisation de `<big>` suivis d'un exemple montrant comment obtenir les mêmes résultats en utilisant plutôt la syntaxe CSS moderne.

### Utilisation de \<big>

Dans cet exemple, on utilise l'élément obsolète `<big>` afin d'augmenter la taille du texte.

#### HTML

```html
<p>
  C'est la première phrase. <big>Cette phrase
  entière phrase est en plus gros caractères.</big>
</p>
```

#### Résultat

{{EmbedLiveSample("Utilisation_de_big", "", 110)}}

### Utilisation de la propriété CSS `font-size`

Cet exemple utilise la propriété CSS [`font-size`](/fr/docs/Web/CSS/font-size) pour augmenter la taille de la police d'un niveau.

#### CSS

```css
.bigger {
  font-size: larger;
}
```

#### HTML

```html
<p>
  C'est la première phrase. <span class="bigger">Cette phrase
  entière est écrite en plus grosses lettres.</span>
</p>
```

#### Résultat

{{EmbedLiveSample("Utilisation_de_la_propriété_CSS_font-size", "", 100)}}

## Interface DOM

Cet élément implémente l'interface [`HTMLElement`](/fr/docs/Web/API/HTMLElement).

> **Note :** Jusqu'à Gecko 1.9.2 inclus, Firefox implémentait l'interface [`HTMLSpanElement`](/fr/docs/Web/API/HTMLSpanElement) pour cet élément.

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- CSS : [`font-size`](/fr/docs/Web/CSS/font-size), [`font`](/fr/docs/Web/CSS/font)
- HTML : [`<small>`](/fr/docs/Web/HTML/Element/small), [`<font>`](/fr/docs/Web/HTML/Element/font), [`<style>`](/fr/docs/Web/HTML/Element/style)
- Spécification HTML 4.01 sur [la mise en forme utilisant les polices](https://www.w3.org/TR/html4/present/graphics.html#h-15.2)
