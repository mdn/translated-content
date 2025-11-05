---
title: :empty
slug: Web/CSS/Reference/Selectors/:empty
original_slug: Web/CSS/:empty
l10n:
  sourceCommit: 0cc9980e3b21c83d1800a428bc402ae1865326b2
---

La [pseudo-classe](/fr/docs/Web/CSS/Reference/Selectors/Pseudo-classes) [CSS](/fr/docs/Web/CSS) **`:empty`** correspond à un élément qui n'a aucun enfant. Seules les feuilles de l'arbre et le texte (espaces inclus) sont pris en compte. Les commentaires, les attributs ou le contenu généré en CSS avec {{cssxref("content")}} n'ont pas d'influence sur le contenu de l'élément (autrement dit, si un élément ne contient que des commentaires, il sera considéré comme vide).

{{InteractiveExample("Démonstration CSS&nbsp;: :empty", "tabbed-shorter")}}

```css interactive-example
div:empty {
  outline: 2px solid deeppink;
  height: 1em;
}
```

```html interactive-example
<p>Élément sans contenu :</p>
<div></div>

<p>Élément avec commentaire :</p>
<div><!-- A comment --></div>

<p>Élément avec élément imbriqué vide :</p>
<div><p></p></div>
```

> [!NOTE]
> Avec les [Sélecteurs en CSS Niveau 4 <sup>(angl.)</sup>](https://drafts.csswg.org/selectors-4/#the-empty-pseudo), le sélecteur `:empty` a été modifié afin de se comporter comme {{CSSxRef(":-moz-only-whitespace")}} mais, à l'heure actuelle, aucun navigateur ne prend en charge cette fonctionnalité.

## Syntaxe

```css
:empty {
  /* ... */
}
```

## Accessibilité

Les technologies d'assistance telles que les lecteurs d'écran ne peuvent pas analyser un contenu interactif vide. Tout contenu interactif doit avoir un nom accessible, fourni sous la forme d'une valeur textuelle via l'élément parent du contrôle ({{HTMLElement("a")}}, {{HTMLElement("button")}}, etc.). Les noms accessibles pemettent d'exposer le contrôle interactif au sein de [l'arbre d'accessibilité](/fr/docs/Learn_web_development/Core/Accessibility/What_is_accessibility), une API communiquant des informations qui peuvent être utilisées par les technologies d'assistance.

Le texte fournissant le nom accessible peut être masqué grâce [à des propriétés](https://gomakethings.com/hidden-content-for-better-a11y/#hiding-the-link) afin de le retirer visuellement mais de le conserver pour les technologies d'assistance. Cette méthode est généralement utilisée pour les boutons utilisant une simple icône comme indication.

- [Qu'est-ce qu'un nom accessible ? The Paciello Group (en anglais)](https://developer.paciellogroup.com/blog/2017/04/what-is-an-accessible-name/)
- <i lang="en">Hidden content for better a11y</i>

  [<i lang="en">Hidden content for better a11y</i> (en anglais)](https://gomakethings.com/hidden-content-for-better-a11y/)

- [Comprendre la règle WCAG 2.4](/fr/docs/Web/Accessibility/Understanding_WCAG/Operable#Guideline_2.4_—_Navigable_Provide_ways_to_help_users_navigate_find_content_and_determine_where_they_are)
- <i lang="en">Understanding Success Criterion 2.4.4</i>

  [<i lang="en">Understanding Success Criterion 2.4.4</i> (en anglais)](https://www.w3.org/TR/UNDERSTANDING-WCAG20/navigation-mechanisms-refs.html)

## Exemples

### HTML

```html
<div class="box"><!-- Je serai verte. --></div>
<div class="box">Je serai rose.</div>
<div class="box">
  <!-- Je serai rose à cause des espaces autour du commentaire -->
</div>
<div class="box">
  <p>
    <!-- Je serai rose dans tous les navigateurs à cause des espaces non réductibles et des éléments autour de ce commentaire. -->
  </p>
</div>
```

### CSS

```css hidden
body {
  display: flex;
  justify-content: space-around;
}
```

```css
.box {
  background: pink;
  height: 80px;
  width: 80px;
}

.box:empty {
  background: lime;
}
```

### Résultat

{{EmbedLiveSample('Exemples','100%','105')}}

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- {{CSSxRef(":-moz-only-whitespace")}} — L'implémentation des {{glossary("Vendor_Prefix", "préfixes")}} dans les changements de [Selectors Level 4 <sup>(angl.)</sup>](https://drafts.csswg.org/selectors-4/#the-empty-pseudo)
- {{CSSxRef(":blank")}}
