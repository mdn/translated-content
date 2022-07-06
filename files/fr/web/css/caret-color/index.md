---
title: caret-color
slug: Web/CSS/caret-color
tags:
  - CSS
  - Propriété
  - Reference
  - Web
translation_of: Web/CSS/caret-color
---
{{CSSRef}}

La propriété CSS **`caret-color`** définit la couleur du curseur visible à l'endroit où l'utilisateur peut ajouter du texte ou un autre contenu dans l'élément lorsqu'il saisit au clavier ou qu'il édite les informations.

{{EmbedInteractiveExample("pages/css/caret-color.html")}}

> **Note :** Les agents utilisateurs peuvent considérer que d'autres objets doivent être impactés par cette propriété : par exemple le curseur de navigation, qui ressemble au curseur de saisie et qui peut être déplacé sur un texte non-éditable. En revanche, bien que l'icône du curseur de la souris puisse ressembler à un curseur de saisie lorsque {{cssxref("cursor")}} vaut `auto` ou `text` ou `vertical-text`, celle-ci n'est pas modifiée par cette propriété. Pour certains navigateurs qui ne prennent pas en charge cette propriété, la couleur du curseur de saisie n'est pas associée à la couleur de la police.

## Syntaxe

```css
/* Valeur avec un mot-clé */
caret-color: auto;
caret-color: transparent;
color: currentColor;

/* Valeurs de couleur */
/* Type <color> */
caret-color: red;
caret-color: #5729e9;
caret-color: rgb(0, 200, 0);
caret-color: hsla(228, 4%, 24%, 0.8);
```

### Valeurs

- `auto`

  - : L'agent utilisateur doit utiliser `currentcolor` mais peut ajuster la couleur du curseur afin d'améliorer la visibilité et le contraste avec le contenu environnant (l'arrière-plan, les ombres, etc.).

    > **Note :** Bien que l'agent utilisateur puisse utiliser `currentcolor` pour la valeur `auto`, cette dernière ne sera pas interpolée lors des animations/transitions (à la différence de la valeur `currentcolor`).

- \<color>
  - : L'agent utilisateur utilise la couleur ({{cssxref("&lt;color&gt;")}}) indiquée comme couleur pour le curseur de saisie.

### Syntaxe formelle

{{csssyntax}}

## Exemples

### CSS

```css
#exemple {
  caret-color: red;
}
```

### HTML

```html
<input id="exemple" />
```

### Résultat

{{EmbedLiveSample("Exemples")}}

## Spécifications

| Spécification                                                                        | État                         | Commentaires         |
| ------------------------------------------------------------------------------------ | ---------------------------- | -------------------- |
| {{SpecName("CSS3 UI", "#propdef-caret-color", "caret-color")}} | {{Spec2("CSS3 UI")}} | Définition initiale. |

{{cssinfo}}

## Compatibilité des navigateurs

{{Compat("css.properties.caret-color")}}

## Voir aussi

- {{HTMLElement("input")}}
- L'attribut HTML {{htmlattrxref("contenteditable")}} qui rend le texte d'un élément éditable
- [Rendre du contenu éditable](/fr/docs/Web/Guide/HTML/Editable_content)
- [Appliquer des couleurs sur des éléments HTML grâce à CSS](/fr/docs/Web/HTML/Applying_color)
- Le type de données {{cssxref("&lt;color&gt;")}}
- Les autres propriétés relatives aux couleurs : {{cssxref("color")}}, {{cssxref("background-color")}}, {{cssxref("border-color")}}, {{cssxref("outline-color")}}, {{cssxref("text-decoration-color")}}, {{cssxref("text-emphasis-color")}}, {{cssxref("text-shadow")}}, {{cssxref("caret-color")}} et {{cssxref("column-rule-color")}}.
