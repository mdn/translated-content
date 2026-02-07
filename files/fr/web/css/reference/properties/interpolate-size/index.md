---
title: interpolate-size
slug: Web/CSS/Reference/Properties/interpolate-size
l10n:
  sourceCommit: 33094d735e90b4dcae5733331b79c51fee997410
---

{{SeeCompatTable}}

La propriété [CSS](/fr/docs/Web/CSS) **`interpolate-size`** permet d'activer les [animations](/fr/docs/Web/CSS/Guides/Animations) et [transitions](/fr/docs/Web/CSS/Guides/Transitions) entre une valeur {{CSSxRef("&lt;length-percentage&gt;")}} et une {{Glossary("intrinsic size", "taille intrinsèque")}}, {{CSSxRef("fit-content")}} ou {{CSSxRef("max-content")}}.

Cette propriété est généralement utilisée pour animer la {{CSSxRef("width")}} et/ou la {{CSSxRef("height")}} d'un conteneur entre une `<length-percentage>` et la taille complète de son contenu (c'est-à-dire entre les états «&nbsp;fermé&nbsp;» et «&nbsp;ouvert&nbsp;» ou «&nbsp;masquer&nbsp;» et «&nbsp;révéler&nbsp;») lorsque l'animation d'une propriété CSS hors modèle de boîte, comme {{CSSxRef("transform")}}, n'est pas une solution viable.

> [!NOTE]
> Le comportement activé par `interpolate-size` ne peut pas être activé par défaut sur l'ensemble du web car de nombreux sites utilisent des feuilles de style qui supposent que les valeurs de taille intrinsèque ne peuvent pas être animées. L'activer par défaut causerait plusieurs problèmes de rétrocompatibilité (voir la [discussion CSS WG concernée <sup>(angl.)</sup>](https://github.com/w3c/csswg-drafts/issues/626#issuecomment-2071016522)).

## Syntaxe

```css
/* Valeurs avec un mot-clé */
interpolate-size: allow-keywords;
interpolate-size: numeric-only;

/* Valeurs globales */
interpolate-size: inherit;
interpolate-size: initial;
interpolate-size: revert;
interpolate-size: revert-layer;
interpolate-size: unset;
```

### Valeurs

- `allow-keywords`
  - : Active [l'interpolation](/fr/docs/Glossary/Interpolation) entre une valeur de type {{CSSxRef("&lt;length-percentage&gt;")}} et une valeur de taille intrinsèque, afin de permettre l'animation entre les deux.
- `numeric-only`
  - : Le comportement par défaut — les valeurs de taille intrinsèque ne peuvent pas être interpolées.

## Description

Définir `interpolate-size: allow-keywords` active l'interpolation entre une valeur {{CSSxRef("length-percentage")}} et une valeur de taille intrinsèque. Notez que cela n'active pas l'animation entre deux valeurs de taille intrinsèque. Une extrémité de l'animation doit être une `<length-percentage>`.

La valeur de `interpolate-size` est héritée, ainsi l'animation vers (ou depuis) une valeur de taille intrinsèque peut être activée pour l'ensemble du document en la définissant sur la racine du document&nbsp;:

```css
:root {
  interpolate-size: allow-keywords;
}
```

Si vous souhaitez limiter la portée, vous pouvez la définir sur l'élément conteneur concerné. L'exemple suivant active l'interpolation des tailles intrinsèques uniquement pour {{HTMLElement("main")}} et ses descendants&nbsp;:

```css
main {
  interpolate-size: allow-keywords;
}
```

> [!NOTE]
> Les valeurs de retour de la fonction {{CSSxRef("calc-size()")}} peuvent également être interpolées. En pratique, inclure `calc-size()` dans la valeur d'une propriété applique automatiquement `interpolate-size: allow-keywords` à la sélection. Cependant, comme `interpolate-size` est hérité comme expliqué ci-dessus, il s'agit de la solution privilégiée pour activer les animations de taille intrinsèque dans la plupart des cas. Vous ne devez utiliser `calc-size()` pour activer les animations de taille intrinsèque que si elles nécessitent également des calculs.

### Valeurs pouvant être interpolées

Les valeurs intrinsèques suivantes peuvent actuellement être utilisées dans des animations&nbsp;:

- `auto`
- {{CSSxRef("min-content")}}
- {{CSSxRef("max-content")}}
- {{CSSxRef("fit-content")}}
- `content` (pour les conteneurs dimensionnés avec {{CSSxRef("flex-basis")}}).

## Définition formelle

{{CSSInfo}}

## Syntaxe formelle

{{CSSSyntax}}

## Exemples

### Utilisation simple de `interpolate-size`

Cet exemple montre comment définir `interpolate-size: allow-keywords` sur un document pour activer les animations impliquant une taille intrinsèque. La démonstration présente un badge de personnage/«&nbsp;étiquette de nom&nbsp;», qui peut être survolé ou sélectionné pour révéler des informations sur le personnage. L'affichage est géré par une transition de {{CSSxRef("height")}} entre une longueur définie et `max-content`.

#### HTML

Le HTML contient un seul élément HTML {{HTMLElement("section")}} avec [`tabindex="0"`](/fr/docs/Web/HTML/Reference/Global_attributes/tabindex) afin qu'il puisse être sélectionné au clavier. La balise `<section>` contient des éléments HTML {{HTMLElement("header")}} et {{HTMLElement("main")}}, chacun avec leur propre contenu enfant.

```html
<section tabindex="0">
  <header>
    <h2>Tanuki</h2>
  </header>
  <main>
    <p>Tanuki est le fantôme silencieux de MDN.</p>
    <ul>
      <li><strong>Taille</strong>&nbsp;: 3.03m</li>
      <li><strong>Poids</strong>&nbsp;: 160kg</li>
      <li><strong>Tech Fu</strong>&nbsp;: 7</li>
      <li><strong>Mauvaises blagues</strong>&nbsp;: 9</li>
    </ul>
  </main>
</section>
```

#### CSS

```css hidden
* {
  box-sizing: border-box;
}

section {
  font-family: "Helvetica", "Arial", sans-serif;
  width: 175px;
  border-radius: 5px;
  background: #eeeeee;
  box-shadow:
    inset 1px 1px 4px rgb(255 255 255 / 0.5),
    inset -1px -1px 4px rgb(0 0 0 / 0.5);
}

header {
  padding: 0.7rem;
  border-bottom: 2px solid #cccccc;
}

main {
  padding: 10px;
}

h2 {
  margin: 0;
  font-weight: normal;
  font-size: 1.1rem;
  text-align: center;
  letter-spacing: 1px;
}

p,
li {
  font-size: 0.8rem;
  line-height: 1.5;
}

p {
  margin-top: 0;
}
```

Dans le CSS, nous définissons d'abord `interpolate-size: allow-keywords` sur {{CSSxRef(":root")}} pour l'activer sur tout le document.

```css
:root {
  interpolate-size: allow-keywords;
}
```

Nous définissons ensuite la hauteur ({{CSSxRef("height")}}) de la balise `<section>` à `2.5rem` et le débordement ({{CSSxRef("overflow")}}) à `hidden` pour que seul le `<header>` soit affiché par défaut, puis nous définissons une `transition` qui anime la `height` de `<section>` sur 1 seconde lors du changement d'état. Enfin, nous définissons la `height` de `<section>` sur {{CSSxRef(":hover")}} et {{CSSxRef(":focus")}} à `max-content`.

```css
section {
  height: 2.5rem;
  overflow: hidden;
  transition: height ease 1s;
}

section:hover,
section:focus {
  height: max-content;
}
```

Le reste du CSS a été masqué pour plus de clarté.

#### Résultat

Essayez de survoler le `<section>` ou de lui donner le focus au clavier — il s'animera jusqu'à sa hauteur complète, révélant tout le contenu.

{{EmbedLiveSample("Utilisation simple de `interpolate-size`", "100%", 225)}}

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- La fonction {{CSSxRef("calc-size()")}}
- [Animer jusqu'à `height: auto;` (et autres mots-clés de dimensionnement intrinsèque) en CSS <sup>(angl.)</sup>](https://developer.chrome.com/docs/css-ui/animate-to-height-auto) sur developer.chrome.com (2024)
