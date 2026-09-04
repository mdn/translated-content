---
title: Mot-clé CSS `inherit`
short-title: inherit
slug: Web/CSS/Reference/Values/inherit
l10n:
  sourceCommit: 0aa8517faf9d7d15c745ac94db7014d3a2d2085f
---

Le mot-clé [CSS](/fr/docs/Web/CSS) **`inherit`** permet à un élément de prendre la [valeur calculée](/fr/docs/Web/CSS/Guides/Cascade/Property_value_processing#valeur_calculée) de la propriété de son élément parent. Il peut être appliqué à n'importe quelle propriété CSS, y compris la propriété raccourcie {{CSSxRef("all")}}.

Pour [les propriétés héritées](/fr/docs/Web/CSS/Guides/Cascade/Inheritance#propriétés_héritées), cela renforce le comportement par défaut et n'est nécessaire que pour remplacer une autre règle.

> [!NOTE]
> L'héritage provient toujours de l'élément parent dans l'arbre du document, même lorsque l'élément parent n'est pas le bloc englobant.

## Exemples

### Utilisation simple

Dans cet exemple, nous démontrons l'effet du mot-clé `inherit` en comparant deux paragraphes avec des éléments imbriqués&nbsp;: les éléments en ligne dans l'un utilisent leurs styles par défaut du navigateur, tandis que ceux de l'autre héritent des valeurs de propriété individuelles de leur parent.

#### HTML

Nous incluons deux paragraphes identiques avec plusieurs éléments en ligne.

```html
<p>
  Ce paragraphe a du <em>texte en emphase</em>, <strong>texte en gras</strong>,
  et <a href="#">un lien vers le haut</a>.
</p>
<p>
  Ce paragraphe a du <em>texte en emphase</em>, <strong>texte en gras</strong>,
  et <a href="#">un lien vers le haut</a>.
</p>
```

#### CSS

Nous ne stylons pas les éléments en ligne dans le premier paragraphe, ils utilisent donc leurs styles par défaut du navigateur.
Dans le deuxième paragraphe, nous définissons les propriétés de chaque élément en ligne sur `inherit`, afin qu'ils héritent des styles calculés de l'élément parent {{HTMLElement("p")}}.

```css
p:nth-of-type(2) {
  a {
    text-decoration: inherit;
    color: inherit;
  }
  em {
    font-style: inherit;
  }
  strong {
    font-weight: inherit;
  }
}
```

#### Résultat

{{EmbedLiveSample("Utilisation simple", "100%", 100)}}

### Héritage de toutes les valeurs de propriété

Dans cet exemple, nous utilisons le même HTML que dans l'exemple précédent pour démontrer les problèmes qui peuvent survenir lorsque le mot-clé `inherit` est appliqué à toutes les propriétés.

```html hidden
<p>
  Ce paragraphe a du <em>texte en emphase</em>, <strong>texte en gras</strong>,
  et <a href="#">un lien vers le haut</a>.
</p>
<p>
  Ce paragraphe a du <em>texte en emphase</em>, <strong>texte en gras</strong>,
  et <a href="#">un lien vers le haut</a>.
</p>
```

#### CSS

Dans le deuxième paragraphe, au lieu de définir les propriétés individuelles sur `inherit`, nous définissons la propriété {{CSSxRef("all")}} sur tous les éléments en ligne sur `inherit`, afin qu'ils héritent tous des styles calculés de leur parent {{HTMLElement("p")}}.

```css
p:nth-of-type(2) > * {
  all: inherit;
}
```

#### Résultat

{{EmbedLiveSample("Héritage de toutes les valeurs de propriété", "100%", 270)}}

Remarquez comment l'élément en ligne hérite de toutes les propriétés de son parent `<p>`, y compris la valeur de {{CSSxRef("display")}} au niveau du bloc du paragraphe. Ce n'est probablement pas l'effet souhaité.

### Exclure certains éléments d'une règle

Cet exemple montre comment le mot-clé `inherit` peut être utilisé pour exclure certains éléments d'une règle de couleur, leur permettant d'utiliser la couleur de leur parent à la place.

#### HTML

Nous incluons du contenu structuré de manière sémantique.

```html
<header>
  <h1>Ceci est mon blog</h1>
  <h2>Ceci est le sous-titre de mon blog dans le TITRE</h2>
  <p>Mon blog n'est pas très intéressant</p>
</header>
<main>
  <h2>Ceci est le premier article de blog dans MAIN</h2>
  <p>Je n'ai vraiment rien à dire.</p>
  <section>
    <h2>
      Ceci est le deuxième article de blog dans une SECTION à l'intérieur de
      MAIN
    </h2>
    <p>
      Il est dans une section parce qu'il est important même s'il n'est pas du
      tout intéressant.
    </p>
  </section>
</main>
<footer>
  <h2>Contact dans FOOTER</h2>
  <p>Trouvez-moi sur Mastodon</p>
  <section>
    <h2>Copyright dans SECTION à l'intérieur de FOOTER</h2>
    <p>1996</p>
  </section>
</footer>
```

#### CSS

Nous définissons la couleur du texte de l'élément HTML `<main>` sur `blue` et tous les éléments `<h2>` sur `green` avec une police `monospace`. Les éléments `<h2>` à l'intérieur d'une `<section>` sont définis sur `inherit` pour hériter de la couleur de texte de leur parent.

```css
main {
  color: blue;
}

h2 {
  color: green;
  font-family: monospace;
}

section h2 {
  color: inherit;
}
```

#### Résultat

{{EmbedLiveSample("Exclure certains éléments d'une règle", "100%", 470)}}

Les éléments `<h2>` sont tous `green`. Cependant, s'ils sont imbriqués dans un élément HTML {{HTMLElement("section")}}, ils héritent de leur couleur de leur parent, qui est `blue` dans {{HTMLElement("main")}}. La couleur de texte par défaut est noire sinon.

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- Les mots-clés {{CSSxRef("initial")}}, {{CSSxRef("revert")}}, {{CSSxRef("revert-layer")}}, {{CSSxRef("revert-rule")}} et {{CSSxRef("unset")}}
- [L'héritage](/fr/docs/Web/CSS/Guides/Cascade/Inheritance)
