---
title: forced-color-adjust
slug: Web/CSS/forced-color-adjust
translation_of: Web/CSS/forced-color-adjust
browser-compat: css.properties.forced-color-adjust
---
{{CSSRef}}

La propriété CSS **`forced-color-adjust`** permet aux auteurs de ne pas activer les modes de couleurs forcées sur certains éléments. Cela restaure la possibilité de contrôler ces valeurs en CSS.

## Syntaxe

```css
forced-color-adjust: auto;
forced-color-adjust: none;

/* Valeurs globales */
forced-color-adjust: inherit;
forced-color-adjust: initial;
forced-color-adjust: revert;
forced-color-adjust: unset;
```

La valeur de la propriété `forced-color-adjust` doit être l'un des mots-clés suivants.

### Valeurs

- `auto`
  - : En mode de couleurs forcées, les couleurs de l'élément sont définies par l'{{Glossary("user agent", "agent utilisateur")}}. C'est la valeur par défaut.
- **`none`**
  - : Même en mode de couleurs forcées, les couleurs de l'élément ne sont pas automatiquement définies par l'{{Glossary("user agent", "agent utilisateur")}}.

## Notes d'utilisation

Cette propriété ne devrait être utilisée que pour faire des modifications qui prendront en charge les pré-requis de couleurs et de contrastes. Par exemple, si vous savez que les optimisations de couleur faites par l'{{Glossary("user agent", "agent utilisateur")}} conduisent à une mauvaise expérience en mode contrasté ou en mode sombre. L'utilisation de cette propriété vous permettra alors de modifier le résultat dans ce mode pour proposer une meilleure expérience. **Elle ne devrait pas être utilisée dans le but d'empêcher les choix de l'utilisateur d'être respectés**.

Cette propriété est une version standard de la propriété [`-ms-high-contrast-adjust` (en anglais)](https://docs.microsoft.com/en-us/previous-versions/hh771863%28v%3dvs.85%29). La propriété préfixée peut être utilisée pour obtenir un résultat similaire sur Internet Explorer 10 et sur les versions EdgeHTML de Microsoft Edge.

## Définition formelle

{{cssinfo}}

## Syntaxe formelle

{{csssyntax}}

## Exemples

### Préserver les couleurs

Dans l'exemple ci-dessous, la première boîte utilise le jeu de couleur définit par l'utilisateur. Par exemple, dans le mode à forts contrastes sombre de Windows, cela donnera du texte blanc sur fond noir. La seconde boîte conservera quant à elle les couleurs du site définies par la classe `.box`.

En utilisant la fonctionnalité média [`forced-colors`](/fr/docs/Web/CSS/@media/forced-colors), vous pouvez ajouter n'importe qu'elle autre optimisation pour le mode de couleurs forcées aux côtés de la propriété `forced-color-adjust`.

#### CSS

```css
.box {
  border: 5px solid grey;
  background-color: #ccc;
  width: 300px;
  margin: 20px;
  padding: 10px;
}

@media (forced-colors: active) {
  .forced {
    forced-color-adjust: none;
  }
}
```

#### HTML

```html
<div class="box">
  <p>Voici une boîte qui utilisera vos préférences de couleurs.</p>
</div>

<div class="box forced">
  <p>Voici une boîte qui conservera les couleurs définies par le site.</p>
</div>
```

#### Résultat

{{EmbedLiveSample("Exemples", 640, 260)}}

![L'exemple présenté ci-dessus affiche la première boîte avec un arrière-plan noir et la seconde avec un arrière-plan gris définit en CSS.](windows-high-contrast.jpg)

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- [Appliquer des couleurs sur des éléments HTML grâce à CSS](/fr/docs/Web/HTML/Applying_color)
- <i lang="en">Styling for Windows high contrast with standards for forced colors</i>

  [<i lang="en">Styling for Windows high contrast with standards for forced colors</i> (en anglais)](https://blogs.windows.com/msedgedev/2020/09/17/styling-for-windows-high-contrast-with-new-standards-for-forced-colors/)

- {{cssxref("color-adjust")}}
