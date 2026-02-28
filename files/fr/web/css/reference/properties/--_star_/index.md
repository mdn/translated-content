---
title: "Propriétés personnalisées (--*) : variables CSS"
slug: Web/CSS/Reference/Properties/--*
l10n:
  sourceCommit: 33094d735e90b4dcae5733331b79c51fee997410
---

Les noms des propriétés qui sont préfixés par deux tirets : `--` (par exemple : `--nom-exemple`) représentent des propriétés personnalisées (_custom properties_) qui peuvent contenir une valeur qui pourra être réutilisée dans le document grâce à la fonction {{CSSxRef("var()")}}.

La portée des propriétés personnalisées est celle des éléments sur lesquels elles sont déclarées. Ces personnalisées contribuent à la cascade&nbsp;: la valeur utilisée d'une propriété personnalisée sera déterminée par l'algorithme de la cascade.

{{CSSInfo}}

## Syntaxe

```css
--some-keyword: left;
--some-color: #123456;
--some-complex-value: 3px 6px rgb(20 32 54);
```

- `<declaration-value>`
  - : Cette valeur correspond à une séquence de un ou plusieurs fragments tant que la séquence ne contient pas de fragments interdits. Elle représente l'intégralité de ce qu'une déclaration valide peut avoir comme valeur.

> [!NOTE]
> Les noms des propriétés personnalisées sont sensibles à la casse — `--ma-couleur` sera considéré comme une propriété personnalisée distincte de `--Ma-Couleur`.

## Exemples

### HTML

```html
<p id="premierParagraphe">
  Ce paragraphe devrait être sur fond bleu avec un texte jaune.
</p>
<p id="secondParagraphe">
  Ce paragraphe devrait être sur fond jaune avec un texte bleu.
</p>
<div id="conteneur">
  <p id="troisiemeParagraphe">
    Ce paragraphe devrait avoir un fond vert et un texte jaune.
  </p>
</div>
```

### CSS

```css
:root {
  --premiere-couleur: #1166ff;
  --seconde-couleur: #ffff77;
}

#premierParagraphe {
  background-color: var(--premiere-couleur);
  color: var(--seconde-couleur);
}

#secondParagraphe {
  background-color: var(--seconde-couleur);
  color: var(--premiere-couleur);
}

#conteneur {
  --premiere-couleur: #229900;
}

#troisiemeParagraphe {
  background-color: var(--premiere-couleur);
  color: var(--seconde-couleur);
}
```

### Résultat

{{EmbedLiveSample('Exemples', 500, 130)}}

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- La fonction {{CSSxRef("var()")}}
- La règle {{CSSxRef("@property")}}
- Le guide [pour utiliser les variables CSS](/fr/docs/Web/CSS/Guides/Cascading_variables/Using_custom_properties)
- Le module [des propriétés personnalisées pour les variables en cascade CSS](/fr/docs/Web/CSS/Guides/Cascading_variables)
