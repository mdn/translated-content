---
title: ":where()"
slug: Web/CSS/:where
l10n:
  sourceCommit: 62681c2ef134407009c5c11fa679db1f485e016d
---

{{CSSRef}}

La fonction de [pseudo-classe](/fr/docs/Web/CSS/Pseudo-classes) [CSS](/fr/docs/Web/CSS) **`:where()`** prend une liste de sélecteurs en argument et cible tout élément qui peut être sélectionné par l'un des sélecteurs de la liste.

{{EmbedInteractiveExample("pages/tabbed/pseudo-class-where.html", "tabbed-shorter")}}

`:where()` a toujours une spécificité de 0, tandis que `:is()` participe à la spécificité du sélecteur en prenant la spécificité de son argument le plus spécifique.

### Analyse permissive de la liste des sélecteurs

`:is()` et `:where()` acceptent une liste permissive de sélecteurs ([voir la spécification](https://drafts.csswg.org/selectors-4/#typedef-forgiving-selector-list)).

En général, lorsqu'on utilise une liste de sélecteurs, celle-ci devient intégralement invalide dès que l'un des sélecteurs est invalide. En utilisant `:is()` ou `:where()`, si la liste contient un sélecteur incorrect ou qui n'est pas pris en charge, celui-ci sera ignoré et les autres seront utilisés.

```css
:where(:valid, :non-pris-en-charge) {
  /* … */
}
```

Le fragment qui précède sera interprété correctement et ciblera `:valid`, même pour les navigateurs qui ne prennent pas en charge `:non-pris-en-charge`, alors que&nbsp;:

```css
:valid,
:non-pris-en-charge {
  /* … */
}
```

Sera ignoré pour les navigateurs qui ne prennent pas en charge `:non-pris-en-charge`, même s'ils prennent en charge `:valid`.

## Exemples

### Comparer `:where()` et `:is()`

Nous verrons avec cet exemple comment fonctionne `:where()` et la différence entre `:where()` et `:is()`.

Prenons le fragment de code HTML qui suit&nbsp;:

```html
<article>
  <h2>Liens mis en forme avec <code>:is()</code></h2>
  <section class="is-styling">
    <p>
      Voici le contenu principal. Ceci
      <a href="https://mozilla.org">contient un lien</a>.
    </p>
  </section>

  <aside class="is-styling">
    <p>
      Voici un contenu en aparté, qui
      <a href="https://developer.mozilla.org">contient également un lien</a>.
    </p>
  </aside>

  <footer class="is-styling">
    <p>
      Et voilà le pied de page, contenant aussi
      <a href="https://github.com/mdn">un lien</a>.
    </p>
  </footer>
</article>

<article>
  <h2>Liens mis en forme avec <code>:where()</code></h2>
  <section class="where-styling">
    <p>
      Voici le contenu principal. Ceci
      <a href="https://mozilla.org">contient un lien</a>.
    </p>
  </section>

  <aside class="where-styling">
    <p>
      Voici un contenu en aparté, qui
      <a href="https://developer.mozilla.org">contient également un lien</a>.
    </p>
  </aside>

  <footer class="where-styling">
    <p>
      Et voilà le pied de page, contenant aussi
      <a href="https://github.com/mdn">un lien</a>.
    </p>
  </footer>
</article>
```

Dans cet exemple, nous avons deux articles, contenant chacun une section, un aparté et un pied de page. Ils utilisent une classe différente pour les éléments enfants.

Pour cibler les liens à l'intérieur du contenu plus simplement, on _pourrait_ utiliser `:is()` ou `:where()` comme suit&nbsp;:

```css
html {
  font-family: sans-serif;
  font-size: 150%;
}

:is(section.is-styling, aside.is-styling, footer.is-styling) a {
  color: red;
}

:where(section.where-styling, aside.where-styling, footer.where-styling) a {
  color: orange;
}
```

Toutefois, si nous devions surcharger la couleur des liens pour les pieds de page avec un sélecteur simple&nbsp;:

```css
footer a {
  color: blue;
}
```

Cela ne fonctionnera pas pour les liens rouges, car les sélecteurs à l'intérieur de `:is()` participent à la spécificité générale du sélecteur et car les sélecteurs de classe ont une spécificité supérieure à celle des sélecteurs d'élément.

Cependant, les sélecteurs à l'intérieur de `:where()` ont une spécificité à 0, et le lien orange du pied de page sera surchargé par le sélecteur simple.

> **Note :** Vous pouvez également consulter [cet exemple sur GitHub](https://mdn.github.io/css-examples/is-where/).

{{EmbedLiveSample('', '100%', 600)}}

## Syntaxe

```css-nolint
:where(<complex-selector-list>) {
  /* … */
}
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- [`:is()`](/fr/docs/Web/CSS/:is)
- [Liste de sélecteurs](/fr/docs/Web/CSS/Selector_list)
- [Composants web](/fr/docs/Web/API/Web_components)
