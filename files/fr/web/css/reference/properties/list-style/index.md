---
title: list-style
slug: Web/CSS/Reference/Properties/list-style
l10n:
  sourceCommit: 1dbba9f7a2c2e35c6e01e8a63159e2aac64b601b
---

La [propriété raccourcie](/fr/docs/Web/CSS/Guides/Cascade/Shorthand_properties) [CSS](/fr/docs/Web/CSS) **`list-style`** permet de définir toutes les propriétés de style de liste en une seule fois.

{{InteractiveExample("Démonstration CSS&nbsp;: list-style")}}

```css interactive-example-choice
list-style: square;
```

```css interactive-example-choice
list-style: inside;
```

```css interactive-example-choice
list-style: url("/shared-assets/images/examples/rocket.svg");
```

```css interactive-example-choice
list-style: none;
```

```css interactive-example-choice
list-style: georgian inside url("/shared-assets/images/examples/rocket.svg");
```

```css interactive-example-choice
list-style: georgian outside url("/non-existent.svg");
```

```html interactive-example
<section class="default-example" id="default-example">
  <div>
    <p>NASA Notable Missions</p>
    <ul class="transition-all" id="example-element">
      <li>Apollo</li>
      <li>Hubble</li>
      <li>Chandra</li>
      <li>Cassini-Huygens</li>
      <li>Spitzer</li>
    </ul>
  </div>
</section>
```

```css interactive-example
.default-example {
  font-size: 1.2rem;
}

#example-element {
  width: 100%;
  background: #be094b;
  color: white;
}

section {
  text-align: left;
  flex-direction: column;
}

hr {
  width: 50%;
  color: lightgray;
  margin: 0.5em;
}

.note {
  font-size: 0.8rem;
}

.note a {
  color: #009e5f;
}

@counter-style space-counter {
  symbols: "\1F680" "\1F6F8" "\1F6F0" "\1F52D";
  suffix: " ";
}
```

Les valeurs de cette propriété sont appliquées aux éléments de liste, y compris les éléments HTML {{HTMLElement("li")}} et les éléments avec {{CSSxRef("display", "display: list-item;")}}. Parce que cette propriété est héritée, elle peut être définie sur un élément parent (normalement {{HTMLElement("ol")}} ou {{HTMLElement("ul")}}) pour que la même mise en forme de liste s'applique à tous les éléments imbriqués.

## Propriétés constitutives

Cette propriété est une propriété raccourcie pour les propriétés CSS&nbsp;:

- {{CSSxRef("list-style-image")}}
- {{CSSxRef("list-style-position")}}
- {{CSSxRef("list-style-type")}}

## Syntaxe

```css
/* Type */
list-style: square;

/* Image */
list-style: url("../img/etoile.png");

/* Position */
list-style: inside;

/* Deux valeurs */
list-style: georgian inside;

/* Trois valeurs */
list-style: lower-roman url("../img/etoile.png") outside;

/* Valeur avec un mot-clé */
list-style: none;

/* Valeurs globales */
list-style: inherit;
list-style: initial;
list-style: revert;
list-style: revert-layer;
list-style: unset;
```

La propriété `list-style` est définie avec une, deux ou trois valeurs dans n'importe quel ordre. Si {{CSSxRef("list-style-type")}} et {{CSSxRef("list-style-image")}} sont toutes les deux définies, la propriété `list-style-type` est utilisée comme solution de repli si l'image n'est pas disponible.

### Valeurs

- {{CSSxRef("list-style-type")}}
  - : Un style de compteur (`<counter-style>`), une chaîne de caractères ({{CSSxRef("string")}}), ou `none`. Si omise dans la propriété raccourcie, la valeur par défaut `disc` est utilisée. Voir {{CSSxRef("list-style-type")}}.
- {{CSSxRef("list-style-image")}}
  - : Une {{CSSxRef("image")}} ou `none`. Si omise, la valeur par défaut `none` est utilisée. Voir {{CSSxRef("list-style-image")}}.
- {{CSSxRef("list-style-position")}}
  - : `inside` ou `outside`. Si omise, la valeur par défaut `outside` est utilisée. Voir {{CSSxRef("list-style-position")}}.
- `none`
  - : Aucun style n'est utilisé.

## Définition formelle

{{CSSInfo}}

## Syntaxe formelle

{{CSSSyntax}}

## Accessibilité

Safari ne reconnait pas les listes ordonnées ou non ordonnées comme des listes dans l'arbre d'accessibilité si elles ont une valeur `list-style` de `none`, sauf si la liste est imbriquée dans l'élément de navigation {{HTMLElement("nav")}}. Ce [comportement est intentionnel <sup>(angl.)</sup>](https://webkit.org/b/170179#c1) et n'est pas considéré comme un bug.

Pour que les listes soient annoncées comme des listes, ajoutez [`role="list"`](/fr/docs/Web/Accessibility/ARIA/Reference/Roles/list_role) aux éléments {{HTMLElement("ol")}} et {{HTMLElement("ul")}}, surtout si la liste n'est pas imbriquée dans un `<nav>`. Cela restaure la sémantique de liste sans affecter le design&nbsp;:

```html
<ul role="list">
  <li>Un élément</li>
  <li>Un autre élément</li>
</ul>
```

Si l'attribut ARIA `role` n'est pas une option pour votre code, il est possible d'utiliser le CSS. Ajouter un [pseudo-contenu](/fr/docs/Web/CSS/Reference/Properties/content) qui n'est pas vide, comme du texte ou des images avant chaque élément de liste, peut restaurer la sémantique de liste, mais cela impacte l'apparence visuelle. Safari détermine si le pseudo-contenu ajouté est suffisant comme contenu accessible, et restaure la sémantique de liste si c'est le cas. En général, Safari considère le texte et les images comme suffisants, c'est pourquoi le `content: "+ ";` montré ci-dessous fonctionne (mais nécessite un style supplémentaire pour ne pas affecter le design).

```css
ul {
  list-style: none;
}

ul li::before {
  content: "+ ";
}
```

Une déclaration de `content: "";` (une chaîne vide) est ignorée, tout comme les valeurs de `content` qui ne contiennent que des espaces, telles que `content: " ";`.

Ces solutions CSS ne doivent être utilisées que lorsque la solution HTML n'est pas disponible, et uniquement après avoir vérifié qu'elles ne produisent pas de comportements inattendus pouvant nuire à l'expérience utilisateur.

- [Corriger les listes](https://www.scottohara.me/blog/2019/01/12/lists-and-safari.html) (2023)
- [VoiceOver et `list-style-type: none`](https://gerardkcohen.me/writing/2017/voiceover-list-style-type.html) (2017)
- [Comprendre les règles WCAG&nbsp;: Créer du contenu pouvant être présenté de différentes manières](/fr/docs/Web/Accessibility/Guides/Understanding_WCAG/Perceivable#règle_1.3_—_créer_du_contenu_pouvant_être_présenté_de_différentes_façons)
- [Comprendre le critère de succès 1.3.1&nbsp;: Informations et relations | WCAG 2.1](https://www.w3.org/WAI/WCAG21/Understanding/info-and-relationships.html)

## Exemples

### Définir le type et la position du style de liste

#### HTML

```html
Liste 1
<ul class="un">
  <li>Élément 1</li>
  <li>Élément 2</li>
  <li>Élément 3</li>
</ul>
Liste 2
<ul class="deux">
  <li>Élément A</li>
  <li>Élément B</li>
  <li>Élément C</li>
</ul>
```

#### CSS

```css
.un {
  list-style: circle;
}

.deux {
  list-style: square inside;
}
```

#### Résultat

{{EmbedLiveSample("Définir le type et la position du style de liste", "auto", 220)}}

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- Les propriétés de composant&nbsp;: {{CSSxRef("list-style-type")}}, {{CSSxRef("list-style-image")}} et {{CSSxRef("list-style-position")}}
- Le pseudo-élément {{CSSxRef("::marker")}}
- Le module [des listes et compteurs CSS](/fr/docs/Web/CSS/Guides/Lists)
- Le module [des styles de compteur CSS](/fr/docs/Web/CSS/Guides/Counter_styles)
