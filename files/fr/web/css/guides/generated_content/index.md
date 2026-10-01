---
title: Contenu généré CSS
short-title: Contenu généré
slug: Web/CSS/Guides/Generated_content
l10n:
  sourceCommit: 33094d735e90b4dcae5733331b79c51fee997410
---

Le module de **contenu généré CSS** définit comment le contenu d'un élément peut être remplacé et comment du contenu peut être ajouté à un document avec CSS.

Le contenu généré peut être utilisé pour le remplacement de contenu, auquel cas le contenu d'un nœud DOM est remplacé par une `<image>` CSS. Le contenu généré CSS permet également de générer des guillemets spécifiques à la langue, de créer des numéros et des puces personnalisés pour les éléments de liste, et d'ajouter visuellement du contenu en générant du contenu sur certains pseudo-éléments en tant qu'éléments remplacés anonymes.

## Le contenu généré en action

```html hidden live-sample___generated_content
<div></div>
```

```css hidden live-sample___generated_content
body,
div {
  background-repeat: no-repeat;
}
body {
  background-image: linear-gradient(#3a67ab, #e8f6ff 100%);
}
div {
  position: relative;
  width: 400px;
  height: 400px;
  background-image:
    linear-gradient(
      115deg,
      transparent 48%,
      brown,
      #996600,
      brown,
      transparent 52%
    ),
    linear-gradient(
      60deg,
      transparent 48%,
      brown,
      #996600,
      brown,
      transparent 52%
    ),
    radial-gradient(
      circle 10px at 50% 50%,
      #333333 30%,
      #999999 50%,
      transparent 50%
    ),
    radial-gradient(
      circle 10px at 50% 50%,
      #333333 30%,
      #999999 50%,
      transparent 50%
    ),
    radial-gradient(circle at 50% 50%, white 30%, #eeeeee 50%, transparent 50%),
    radial-gradient(circle at 50% 50%, white 30%, #eeeeee 50%, transparent 50%),
    radial-gradient(circle at 50% 50%, white 30%, #eeeeee 50%, transparent 50%);
  background-size:
    100px 100px,
    100px 100px,
    15px 15px,
    15px 15px,
    200px 200px,
    300px 300px,
    400px 400px;
  background-position:
    95% 120px,
    5% 120px,
    46% 80px,
    54% 80px,
    50% 0,
    50% 90px,
    50% 220px;
}
div::after {
  content: "";
  border: transparent solid 4px;
  border-left: orange 30px solid;
  height: 1px;
  width: 1px;
  position: absolute;
  left: 50%;
  top: 100px;
}

div::before {
  content: "Uniquement un seul <div>";
  font-size: min(6vh, 2rem);
  justify-content: center;
  display: flex;
  font-family: "Comic Sans", "Papyrus", sans-serif;
}
```

{{EmbedLiveSample("generated_content", "", 400)}}

Le HTML pour cet exemple est un seul {{HTMLElement("div")}} vide à l'intérieur d'un {{HTMLElement("body")}} par ailleurs vide. Le bonhomme de neige a été créé avec des [images CSS](/fr/docs/Web/CSS/Guides/Images) et des [arrière-plans et bordures CSS](/fr/docs/Web/CSS/Guides/Backgrounds_and_borders). Le nez en carotte a été ajouté en utilisant du contenu généré&nbsp;: une boîte vide avec une large [bordure gauche](/fr/docs/Web/CSS/Reference/Properties/border-left) orange ajoutée au pseudo-élément {{CSSxRef("::before")}}. Le texte est également du contenu généré&nbsp;: «&nbsp;Uniquement un seul &lt;div>&nbsp;» a été généré avec la propriété {{CSSxRef("content")}} appliquée au pseudo-élément {{CSSxRef("::after")}}.

Cliquez sur «&nbsp;Exécuter&nbsp;» dans l'exemple ci-dessus pour voir ou modifier le code dans le MDN Playground.

## Référence

### Propriétés

- {{CSSxRef("content")}}
- {{CSSxRef("quotes")}}

Le module de contenu généré en CSS introduit également quatre propriétés à risque&nbsp;: `string-set`, `bookmark-label`, `bookmark-level` et `bookmark-state`. Actuellement, aucun navigateur ne prend en charge ces fonctionnalités.

### Fonctions

Le module de contenu généré en CSS introduit également six fonctions CSS encore non implémentées, y compris `content()`, `string()` et `leader()`, ainsi que les trois fonctions [`<target>`](/fr/docs/Web/CSS/Reference/Properties/content#target) `target-counter()`, `target-counters()` et `target-text()`.

### Types de donnée

- [`<content-list>`](/fr/docs/Web/CSS/Reference/Properties/content#valeurs)
- `<content-replacement>` (voir {{CSSxRef("image")}})
- {{CSSxRef("image")}}
- [`<counter>`](/fr/docs/Web/CSS/Reference/Properties/content#counter)
- [`<quote>`](/fr/docs/Web/CSS/Reference/Properties/content#quote)
- [`<target>`](/fr/docs/Web/CSS/Reference/Properties/content#target)

## Guides

- [«&nbsp;Comment faire&nbsp;» pour le contenu généré](/fr/docs/Learn_web_development/Howto/Solve_CSS_problems/Generated_content)
  - : Apprendre à ajouter du contenu textuel ou des images à un document en utilisant la propriété {{CSSxRef("content")}}.

- [Créer des boîtes fantaisie avec du contenu généré](/fr/docs/Learn_web_development/Howto/Solve_CSS_problems/Create_fancy_boxes)
  - : Exemple de style de contenu généré pour des effets visuels.

## Concepts associés

- Le module [des pseudo-éléments CSS](/fr/docs/Web/CSS/Guides/Pseudo-elements)
  - Le pseudo-élément {{CSSxRef("::before")}}
  - Le pseudo-élément {{CSSxRef("::after")}}
  - Le pseudo-élément {{CSSxRef("::marker")}}

- Le module [des listes et compteurs CSS](/fr/docs/Web/CSS/Guides/Lists)
  - La fonction {{CSSxRef("counter()")}}
  - La fonction {{CSSxRef("counters()")}}
  - La propriété {{CSSxRef("counter-increment")}}
  - La propriété {{CSSxRef("counter-reset")}}

- Le module [du débordement CSS](/fr/docs/Web/CSS/Guides/Overflow)
  - Le pseudo-élément {{CSSxRef("::scroll-button()")}}
  - Le pseudo-élément {{CSSxRef("::scroll-marker")}}
  - La pseudo-classe {{CSSxRef(":target-current")}}

- Le module [des valeurs et unités CSS](/fr/docs/Web/CSS/Guides/Values_and_units)
  - La fonction {{CSSxRef("attr()")}}
  - Le type de donnée {{CSSxRef("&lt;string&gt;")}}
  - Le type de donnée {{CSSxRef("&lt;image&gt;")}}

## Spécifications

{{Specifications}}

## Voir aussi

- Le module [des pseudos-éléments CSS](/fr/docs/Web/CSS/Guides/Pseudo-elements)
- Le module [des listes et compteurs CSS](/fr/docs/Web/CSS/Guides/Lists)
- L'entrée de glossaire {{Glossary("Replaced elements", "Éléments remplacés")}}
