---
title: Propriétés personnalisées (--*)
slug: Web/CSS/--*
tags:
  - CSS
  - Experimental
  - Reference
  - Variables
  - Variables CSS
translation_of: Web/CSS/--*
---
{{CSSRef}}{{SeeCompatTable}}

Les noms des propriétés qui sont préfixés par deux tirets : `--` (par exemple : `--nom-exemple`) représentent des propriétés personnalisées (_custom properties_) qui peuvent contenir une valeur qui pourra être réutilisée dans le document grâce à la fonction {{cssxref("var")}}.

La portée des propriétés personnalisées est celle des éléments sur lesquels elles sont déclarées. Ces personnalisées contribuent à la cascade : la valeur utilisée d'une propriété personnalisée sera déterminée par l'algorithme de la cascade.

{{cssinfo}}

## Syntaxe

    --unmotcle: left;
    --unecouleur: #0000ff;
    --unevaleurcomplexe: 3px 6px rgb(20, 32, 54);

- `<declaration-value>`
  - : Cette valeur correspond à une séquence de un ou plusieurs fragments tant que la séquence ne contient pas de fragments interdits. Elle représente l'intégralité de ce qu'une déclaration valide peut avoir comme valeur.

### Syntaxe formelle

{{csssyntax}}

## Exemples

### HTML

```html
<p id="premierParagraphe">Ce paragraphe devrait être sur fond bleu avec un texte jaune.</p>
<p id="secondParagraphe">Ce paragraphe devrait être sur fond jaune avec un texte bleu.</p>
```

### CSS

```css
:root {
  --premiere-couleur: #488cff;
  --seconde-couleur: #ffff8c;
}

#premierParagraphe {
  background-color: var(--premiere-couleur);
  color: var(--seconde-couleur);
}

#secondParagraphe {
  background-color: var(--seconde-couleur);
  color: var(--premiere-couleur);
}
```

### Résultat

{{EmbedLiveSample('Exemples', 500, 100)}}

## Spécifications

| Spécification                                                                    | État                                 | Commentaires         |
| -------------------------------------------------------------------------------- | ------------------------------------ | -------------------- |
| {{SpecName("CSS3 Variables", "#defining-variables", "--*")}} | {{Spec2("CSS3 Variables")}} | Définition initiale. |

## Compatibilité des navigateurs

{{Compat("css.properties.custom-property")}}

## Voir aussi

- [Utiliser les variables CSS](/fr/docs/Web/CSS/Les_variables_CSS)
