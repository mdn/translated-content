---
title: font-optical-sizing
slug: Web/CSS/Reference/Properties/font-optical-sizing
l10n:
  sourceCommit: 2d78abb3e793352e24e976ce0e68c08d817bd7f3
---

La propriété [CSS](/fr/docs/Web/CSS) **`font-optical-sizing`** définit si le rendu du texte est optimisé pour l'affichage à différentes tailles.

{{InteractiveExample("Démonstration CSS&nbsp;: font-optical-sizing")}}

```css interactive-example-choice
font-optical-sizing: auto;
```

```css interactive-example-choice
font-optical-sizing: none;
```

```html interactive-example
<section id="default-example">
  <div id="example-element">
    <h2>Chapitre 3</h2>
    <p>
      Ce jeudi-là, quelque chose se déplaçait silencieusement à travers
      l'ionosphère, à plusieurs kilomètres au-dessus de la surface de la
      planète&nbsp;; plusieurs choses en fait, plusieurs douzaines de grosses
      choses jaunes et massives en forme de dalles, aussi grandes que des
      immeubles de bureaux, silencieuses comme des oiseaux.
    </p>
  </div>
</section>
```

```css interactive-example
@font-face {
  src: url("/shared-assets/fonts/variable-fonts/AmstelvarAlpha-VF.ttf");
  font-family: "Amstelvar";
  font-style: normal;
}

#example-element {
  font-family: "Amstelvar", serif;
  text-align: left;
}

#example-element h2 {
  font-size: 36px;
}

#example-element p {
  font-size: 12px;
}
```

## Syntaxe

```css
/* Valeurs avec un mot-clé */
font-optical-sizing: none;
font-optical-sizing: auto; /* valeur initiale */

/* Valeurs globales */
font-optical-sizing: inherit;
font-optical-sizing: initial;
font-optical-sizing: revert;
font-optical-sizing: revert-layer;
font-optical-sizing: unset;
```

### Valeurs

- `none`
  - : Le navigateur ne modifiera pas la forme des glyphes pour une vue optimale.
- `auto`
  - : Le navigateur modifiera la forme des glyphes pour une vue optimale.

## Description

Le dimensionnement optique est activé par défaut pour les polices qui possèdent un axe de variation de taille optique. L'axe de variation de taille optique est représenté par `opsz` dans {{CSSxRef("font-variation-settings")}}.

Lorsque le dimensionnement optique est utilisé, les petites tailles de texte sont souvent affichées avec des traits plus épais et des empattements plus grands, tandis que les grandes tailles de texte sont souvent affichées de façon plus délicate avec un contraste plus marqué entre les traits épais et fins.

## Définition formelle

{{CSSInfo}}

## Syntaxe formelle

{{CSSSyntax}}

## Exemples

### Désactiver le dimensionnement optique

```html
<p class="optical-sizing">
  Ce paragraphe est dimensionné pour une meilleure lecture. C'est le
  comportement par défaut.
</p>

<p class="no-optical-sizing">
  Ce paragraphe n'est pas adapté pour une meilleure lecture. Vous devriez voir
  une différence avec les navigateurs qui prennent en charge cette
  fonctionnalité.
</p>
```

```css
@font-face {
  src: url("AmstelvarAlpha-VF.ttf");
  font-family: "Amstelvar";
  font-style: normal;
}

p {
  font-size: 36px;
  font-family: "Amstelvar", serif;
}

.no-optical-sizing {
  font-optical-sizing: none;
}
```

> [!NOTE]
> La police utilisée dans cet exemple — qui possède un dimensionnement optique et est disponible sous licence libre — est un bon moyen de tester. Vous pouvez le trouver [en téléchargement sur GitHub <sup>(angl.)</sup>](https://github.com/googlefonts/amstelvar/releases).

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## See also

- La propriété {{CSSxRef("font-size")}}
- La propriété {{CSSxRef("font-size-adjust")}}
- [Apprendre&nbsp;: Mise en forme fondamentale du texte et des polices](/fr/docs/Learn_web_development/Core/Text_styling/Fundamentals)
