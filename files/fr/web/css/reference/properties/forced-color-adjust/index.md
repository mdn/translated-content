---
title: Propriété CSS `forced-color-adjust`
short-title: forced-color-adjust
slug: Web/CSS/Reference/Properties/forced-color-adjust
l10n:
  sourceCommit: c0c85c3dc0d6ff4247c85b0144149e584d74b625
---

La propriété [CSS](/fr/docs/Web/CSS) **`forced-color-adjust`** permet aux auteur·ice·s de ne pas activer les modes de couleurs forcées sur certains éléments. Cela restaure la possibilité de contrôler ces valeurs en CSS.

## Syntaxe

```css
forced-color-adjust: auto;
forced-color-adjust: none;
forced-color-adjust: preserve-parent-color;

/* Valeurs globales */
forced-color-adjust: inherit;
forced-color-adjust: initial;
forced-color-adjust: revert;
forced-color-adjust: revert-layer;
forced-color-adjust: unset;
```

### Valeurs

Cette propriété est définie par l'un des mots-clés suivants&nbsp;:

- `auto`
  - : En mode de couleurs forcées, les couleurs de l'élément sont définies par {{Glossary("user agent", "l'agent utilisateur")}}. C'est la valeur par défaut.
- `none`
  - : Même en mode de couleurs forcées, les couleurs de l'élément ne sont pas automatiquement définies par {{Glossary("user agent", "l'agent utilisateur")}}.
- `preserve-parent-color` {{Experimental_Inline}}
  - : En mode de couleurs forcées, si la propriété {{CSSxRef("color")}} hérite de son parent (c'est-à-dire qu'il n'y a pas de [valeur en cascade](/fr/docs/Web/CSS/Guides/Cascade/Introduction) ou que la valeur en cascade est `currentColor`, {{CSSxRef("inherit")}}, ou un autre mot-clé qui hérite du parent), alors elle prend la [couleur utilisée](/fr/docs/Web/CSS/Guides/Cascade/Property_value_processing#valeur_utilisée) de la propriété `color` du parent. Dans tous les autres cas, elle se comporte comme `none`.

## Notes d'utilisation

Cette propriété ne doit pas être utilisée que pour faire des modifications qui prennent en charge les pré-requis de couleurs et de contrastes. Par exemple, si vous savez que les optimisations de couleur faites par {{Glossary("user agent", "l'agent utilisateur")}} conduisent à une mauvaise expérience en mode contrasté ou en mode sombre. L'utilisation de cette propriété vous permet alors de modifier le résultat dans ce mode pour proposer une meilleure expérience. **Elle ne doit pas être utilisée dans le but d'empêcher les choix de l'utilisateur·ice d'être respectés**.

## Définition formelle

{{CSSInfo}}

## Syntaxe formelle

{{CSSSyntax}}

## Exemples

### Préserver les couleurs

Dans l'exemple ci-dessous, la première boîte utilise le jeu de couleur définit par l'utilisateur·ice. Par exemple, dans le mode à forts contrastes sombre de Windows, cela donne du texte blanc sur fond noir. La seconde boîte conserve quant à elle les couleurs du site définies par la classe `.box`.

En utilisant la fonctionnalité média {{CSSxRef("@media/forced-colors", "forced-colors")}}, vous pouvez ajouter n'importe qu'elle autre optimisation pour le mode de couleurs forcées aux côtés de la propriété `forced-color-adjust`.

#### CSS

```css
.boite {
  border: 5px solid grey;
  background-color: #cccccc;
  width: 300px;
  margin: 20px;
  padding: 10px;
}

@media (forced-colors: active) {
  .forcee {
    forced-color-adjust: none;
  }
}
```

#### HTML

```html
<div class="boite">
  <p>Voici une boîte qui utilise vos préférences de couleurs.</p>
</div>

<div class="boite forcee">
  <p>Voici une boîte qui conserve les couleurs définies par le site.</p>
</div>
```

#### Résultat

{{EmbedLiveSample("Préserver les couleurs", 640, 260)}}

La capture d'écran suivante montre l'image ci-dessus en mode Contraste élevé de Windows&nbsp;:

![L'exemple présenté ci-dessus affiche la première boîte avec un arrière-plan noir et la seconde avec un arrière-plan gris définit en CSS.](windows-high-contrast.jpg)

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- [Mise en forme pour le contraste élevé de Windows avec les standards des couleurs forcées <sup>(angl.)</sup>](https://blogs.windows.com/msedgedev/2020/09/17/styling-for-windows-high-contrast-with-new-standards-for-forced-colors/)
- La propriété {{CSSxRef("print-color-adjust")}}
