---
title: Combinateur de voisins généraux
slug: Web/CSS/Subsequent-sibling_combinator
l10n:
  sourceCommit: bb652aaf3e38f3c7fef970a62f813047dffac879
---

{{CSSRef("Selectors")}}

Le **combinateur de voisins généraux** (`~`) permet de séparer deux sélecteurs et de cibler _toutes les instances_ du deuxième élément qui suivent le premier (mais n'étant pas forcément voisin immédiat) et qui partagent le même élément parent.

```css
/* Parmi tous les éléments <img>, cible tous éléments <p>
   qui les suivent. */
img ~ p {
  color: red;
}
```

## Syntaxe

```css-nolint
/* L'espace entre la tilde (~) est optionnel mais est recommendé. */
premier_element ~ second_element { propriétés de style }
```

## Exemples

### Utilisation du combinateur avec des sélecteurs simples

This example shows the use of the `~` combinator when both the selectors are simple selectors (`p` and `span`).

```html
<article>
  <span>Il n'est pas rouge parce qu'il apparaît avant tout paragraphe.</span>
  <p>Voici un paragraphe.</p>
  <code>Voici un extrait de code.</code>
  <span>
    Ce span est rouge parce qu'il apparaît après le paragraphe,
    même s'il y a d'autres nœuds entre les deux.
  </span>
  <p>Quoi qu'il en soit, gardez le sourire.</p>
  <h1>Rêver en grand</h1>
  <span>
    Quel que soit le nombre ou le type de nœuds intermédiaires,
    tous les span issues du même parent après un paragraphe
    sont rouges.
  </span>
</article>
<span>
  Ce span n'est pas rouge car il ne partage pas de parent avec un paragraphe.
</span>
```

```css
p ~ span {
  color: red;
}
```

### Utilisation du combinateur avec des sélecteurs complexes

Cet exemple contient deux [sélecteurs complexes](/fr/docs/Web/CSS/CSS_selectors/Selector_structure#selecteur_complexe), tous deux utilisant le combinateur de voisins généraux&nbsp;: `.monTexte p ~ span` et `.monTexte p ~ .monTexte span`.

- Le premier sélecteur complexe, `.monTexte p ~ span`, correspond à tous les `span` qui viennent après un paragraphe _si_ le span et le paragraphe partagent le même parent **et** ce parent ou un parent _plus haut_ de ce parent a la classe `.monTexte`.
- Le second sélecteur complexe, `.monTexte p ~ .monTexte span`, correspond à toutes les `span` qui sont un descendant de l'élément parent avec la classe `.monTexte` _si_ cet élément est un voisin du paragraphe mentionné précédemment.

L'exemple ci-dessous montre que l'élément cible du sélecteur complexe doit partager le même parent que l'élément initial du sélecteur complexe.

```html
<h1>Rêver en grand</h1>
<span>Et encore une fois, il s'agit d'une zone rouge !</span>
<div class="monTexte">
  <p>Voici un autre paragraphe.</p>
  <span>Un span bleu</span>
  <div class="monTexte">
    <span>Un span vert</span>
  </div>
</div>
```

```css
.monTexte p ~ span {
  color: blue;
}

.monTexte p ~ .monTexte span {
  color: green;
}
```

{{EmbedLiveSample("Utilisation du combinateur avec des sélecteurs complexes", "auto", 200)}}

Dans le HTML ci-dessus, les deux voisins de `.monTexte p` sont `span` et `.monTexte`. Le `span` vert est un descendant de la classe `.monTexte`, qui est un voisin de `p`.

- Lorsque la cible du sélecteur est `span`, l'élément `span` qui est un voisin de `p` est sélectionné. L'élément `p` est un descendant de `.monTexte`, tout comme ses voisins `span`.
- Dans `.monTexte p ~ .monTexte span`, la cible du sélecteur est `span` qui est un descendant de `.monTexte`. Dans ce cas, `span` est sélectionné si `.monTexte` est un voisin de `p`&nbsp;; essentiellement, les deux sont imbriqués dans un parent de `.monTexte`.

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- [Sélecteur de voisin direct](/fr/docs/Web/CSS/Next-sibling_combinator)
