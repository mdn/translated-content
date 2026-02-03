---
title: color-scheme
slug: Web/CSS/Reference/Properties/color-scheme
l10n:
  sourceCommit: 85fccefc8066bd49af4ddafc12c77f35265c7e2d
---

La propriété [CSS](/fr/docs/Web/CSS) **`color-scheme`** permet à un élément d'indiquer dans quels jeux de couleurs il peut être affiché de manière optimale. Les agents utilisateur adaptent les éléments suivants de l'interface pour correspondre au jeu de couleurs utilisé&nbsp;:

- la couleur de la surface du canevas&nbsp;;
- les couleurs par défaut des barres de défilement et autres éléments d'interaction de l'interface&nbsp;;
- les couleurs par défaut des contrôles de formulaire&nbsp;;
- les couleurs par défaut des autres éléments de l'interface fournis par le navigateur, tels que les soulignements de la «&nbsp;correction orthographique&nbsp;».

Les auteurs de composants doivent utiliser la fonctionnalité média {{CSSxRef("@media/prefers-color-scheme", "prefers-color-scheme")}} pour prendre en charge les jeux de couleurs sur les autres éléments.

Les choix courants de jeux de couleurs pour les systèmes d'exploitation sont «&nbsp;clair&nbsp;» et «&nbsp;sombre&nbsp;», ou «&nbsp;mode jour&nbsp;» et «&nbsp;mode nuit&nbsp;». Lorsqu'un utilisateur sélectionne l'un de ces jeux de couleurs, le système d'exploitation ajuste l'interface utilisateur. Cela inclut les [contrôles de formulaire](/fr/docs/Learn_web_development/Extensions/Forms), les [barres de défilement](/fr/docs/Web/CSS/Guides/Scrollbars_styling) et les valeurs utilisées pour les [couleurs système CSS](/fr/docs/Web/CSS/Reference/Values/system-color).

{{InteractiveExample("Démonstration CSS&nbsp;: color-scheme")}}

```css interactive-example-choice
color-scheme: normal;
```

```css interactive-example-choice
color-scheme: dark;
```

```css interactive-example-choice
color-scheme: light;
```

```html interactive-example
<section class="default-example container" id="default-example">
  <textarea id="example-element">Zone de texte</textarea>
</section>
```

```css interactive-example
#example-element {
  width: 80%;
  height: 50%;
}
```

## Syntaxe

```css
color-scheme: normal;
color-scheme: light;
color-scheme: dark;
color-scheme: light dark;
color-scheme: only light;

/* Valeurs globales */
color-scheme: inherit;
color-scheme: initial;
color-scheme: revert;
color-scheme: revert-layer;
color-scheme: unset;
```

La valeur de la propriété `color-scheme` doit être un des mots-clés suivants.

### Valeurs

- `normal`
  - : Indique que l'élément peut être rendu en utilisant les paramètres de [jeu de couleurs](/fr/docs/Web/HTML/Reference/Elements/meta/name/color-scheme) de la page. Si la page n'a pas de jeu de couleurs défini, l'élément est rendu en utilisant les paramètres de couleur par défaut de la page.
- `light`
  - : Indique que l'élément peut être rendu en utilisant le jeu de couleurs _clair_ du système d'exploitation.
- `dark`
  - : Indique que l'élément peut être rendu en utilisant le jeu de couleurs _sombre_ du système d'exploitation.
- `only`
  - : Empêche l'agent utilisateur de remplacer le jeu de couleurs pour l'élément.

    Peut être utilisé pour désactiver les remplacements de couleur provoqués par le [Thème sombre automatique](https://developer.chrome.com/blog/auto-dark-theme/#per-element-opt-out?hl=fr), en appliquant `color-scheme: only light;` sur un élément spécifique ou sur `:root`.

## Définition formelle

{{CSSInfo}}

## Syntaxe formelle

{{CSSSyntax}}

## Exemples

### Adaptation aux jeux de couleurs

Pour activer la préférence de jeu de couleurs de l'utilisateur sur l'ensemble de la page, `color-scheme` peut être déclaré sur l'élément {{CSSxRef(":root")}}.

```css
:root {
  color-scheme: light dark;
}
```

Pour activer la préférence de jeu de couleurs de l'utilisateur·ice sur des éléments spécifiques, déclarer `color-scheme` sur ces éléments.

```css
header {
  color-scheme: only light;
}
main {
  color-scheme: light dark;
}
footer {
  color-scheme: only dark;
}
```

En plus du CSS ci-dessus, inclure également la balise HTML {{HTMLElement("meta")}} [`<meta name="color-scheme">`](/fr/docs/Web/HTML/Reference/Elements/meta/name/color-scheme) dans le {{HTMLElement("head")}}, avant toute information de style CSS, pour informer les agents utilisateur du jeu de couleurs préféré et aider à éviter les flashs d'écran indésirables lors du chargement de la page.

### Mettre en forme selon les jeux de couleurs

Pour mettre en forme des éléments selon les préférences de jeu de couleurs, utiliser la requête média {{CSSxRef("@media/prefers-color-scheme", "prefers-color-scheme")}}. L'exemple ci-dessous active l'utilisation des jeux de couleurs clair et sombre du système d'exploitation sur toute la page grâce à la propriété `color-scheme`, puis utilise `prefers-color-scheme` pour définir les couleurs de premier plan et d'arrière-plan souhaitées pour chaque élément dans ces jeux de couleurs.

```css
:root {
  color-scheme: light dark;
}

@media (prefers-color-scheme: light) {
  .element {
    color: black;
    background-color: white;
  }
}

@media (prefers-color-scheme: dark) {
  .element {
    color: white;
    background-color: black;
  }
}
```

Vous pouvez aussi utiliser la fonction [`light-dark()`](/fr/docs/Web/CSS/Reference/Values/color_value/light-dark) et [les fontions de `<color>`](/fr/docs/Web/CSS/Reference/Values/Functions#les_fonctions_de_couleur) pour définir les couleurs de premier plan et d'arrière-plan pour les différents jeux de couleurs en utilisant une structure de code plus compacte&nbsp;:

```css
:root {
  color-scheme: light dark;
}

.element {
  color: light-dark(black, white);
  background-color: light-dark(white, black);
}
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- La requête média [`prefers-color-scheme`](/fr/docs/Web/CSS/Reference/At-rules/@media/prefers-color-scheme) pour détecter les préférences de jeu de couleurs de l'utilisateur·ice.
- La fonction {{CSSxRef("color_value/light-dark", "light-dark()")}} pour définir les couleurs pour les jeux de couleurs clair et sombre.
- Les autres propriétés liées aux couleurs&nbsp;: {{CSSxRef("color")}}, {{CSSxRef("accent-color")}}, {{CSSxRef("background-color")}}, {{CSSxRef("border-color")}}, {{CSSxRef("outline-color")}}, {{CSSxRef("text-decoration-color")}}, {{CSSxRef("text-emphasis-color")}}, {{CSSxRef("text-shadow")}}, {{CSSxRef("caret-color")}} et {{CSSxRef("column-rule-color")}}
- La propriété {{CSSxRef("background-image")}}
- La propriété {{CSSxRef("print-color-adjust")}}
- [Utiliser des couleurs relatives](/fr/docs/Web/CSS/Guides/Colors/Using_relative_colors)
