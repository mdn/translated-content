---
title: "<big> : l'élément d'agrandissement de texte"
slug: Web/HTML/Reference/Elements/big
l10n:
  sourceCommit: 0754cd805a8e010d2e3a2a065f634a3bcf358252
---

{{Deprecated_Header}}

L'élément [HTML](/fr/docs/Web/HTML) obsolète **`<big>`** affiche le texte qu'il contient avec une taille de police supérieure d'un niveau à celle du texte environnant (par exemple, `medium` devient `large`). La taille est limitée à la valeur maximale autorisée par le navigateur.

> [!WARNING]
> Cet élément a été supprimé de la spécification et ne doit plus être utilisé. Utilisez la propriété CSS {{CSSxRef("font-size")}} pour ajuster la taille de la police.

## Attributs

Cet élément n'a aucun autre attribut en dehors des [attributs universels](/fr/docs/Web/HTML/Reference/Global_attributes) communs à tous les éléments.

## Exemples

Nous voyons ici des exemples montrant l'utilisation de `<big>` suivis d'un exemple montrant comment obtenir les mêmes résultats en utilisant plutôt la syntaxe CSS moderne.

### Utilisation de `<big>`

Dans cet exemple, on utilise l'élément obsolète `<big>` afin d'augmenter la taille du texte.

#### HTML

```html
<p>
  C'est la première phrase.
  <big>Cette phrase entière phrase est en plus gros caractères.</big>
</p>
```

#### Résultat

{{EmbedLiveSample("Utilisation de `<big>`", 640, 60)}}

### Utilisation de la propriété CSS `font-size`

Cet exemple utilise la propriété CSS {{CSSxRef("font-size")}} pour augmenter la taille de la police d'un niveau.

#### CSS

```css
.bigger {
  font-size: larger;
}
```

#### HTML

```html
<p>
  C'est la première phrase.
  <span class="bigger"
    >Cette phrase entière est écrite en plus grosses lettres.</span
  >
</p>
```

#### Résultat

{{EmbedLiveSample("Utilisation de la propriété CSS `font-size`", 640, 60)}}

## Interface DOM

Cet élément implémente l'interface {{DOMxRef('HTMLElement')}}.

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- CSS&nbsp;: {{CSSxRef("font-size")}}, {{CSSxRef("font")}}
- HTML&nbsp;: {{HTMLElement("small")}}, {{HTMLElement("font")}}, {{HTMLElement("style")}}
