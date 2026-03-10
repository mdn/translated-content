---
title: :interest-target
slug: Web/CSS/Reference/Selectors/:interest-target
l10n:
  sourceCommit: 423161782178b119c64cd0b41bff8df20dc84a56
---

{{SeeCompatTable}}

La [pseudo-classe](/fr/docs/Web/CSS/Reference/Selectors/Pseudo-classes) [CSS](/fr/docs/Web/CSS) **`:interest-target`** représente l'élément cible associé à un [invocateur d'intérêt](/fr/docs/Web/API/Popover_API/Using_interest_invokers) lorsque l'intérêt est affiché sur cet invocateur.

## Syntaxe

```css
:interest-target {
  /* ... */
}
```

## Exemples

### Sélectionner l'élément cible associé à un invocateur d'intérêt

Dans cet exemple, nous montrons comment `:interest-target` peut être utilisé pour appliquer des styles à l'élément cible d'un invocateur d'intérêt lorsque l'intérêt est affiché sur l'invocateur.

#### HTML

Le balisage inclut un bouton ({{HTMLElement("button")}}) et un paragraphe ({{HTMLElement("p")}}). Nous définissons le `<button>` comme un invocateur d'intérêt en lui donnant l'attribut `interestfor` dont la valeur correspond à un `id` de l'élément `<p>`, faisant du paragraphe l'élément cible.

```html live-sample___interest-target
<button interestfor="macible">Bouton</button>
<p id="macible">Un paragraphe</p>
```

#### CSS

Dans le CSS, nous définissons une règle avec un sélecteur `:interest-target`, qui appliquera un ensemble spécifique de styles à l'élément `<p>` lorsque l'intérêt est affiché sur le `<button>`. Nous appliquons également d'autres styles au `<button>`, qui sont cachés pour des raisons de concision.

```css hidden live-sample___interest-target
body {
  margin: 10px;
}

button {
  padding: 5px 10px;
  border: 1px solid #dddddd;
  border-radius: 5px;
  background-color: #eeeeee;

  cursor: pointer;
}
```

```css live-sample___interest-target
p:interest-target {
  font-size: 1.5em;
  font-family: sans-serif;
  padding: 10px;
  background-color: hotpink;
  color: purple;
}
```

#### Résultat

Ça s'affiche comme suit&nbsp;:

{{EmbedLiveSample("interest-target", "100%", 150)}}

Essayez de montrer de l'intérêt pour le bouton (par exemple, en le survolant ou en le mettant au focus), et notez comment cela entraîne l'application des styles précédemment définis au paragraphe.

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- La pseudo-classe {{CSSxRef(":interest-source")}}
- [L'API Popover](/fr/docs/Web/API/Popover_API)
- [Utiliser les invocateurs d'intérêt](/fr/docs/Web/API/Popover_API/Using_interest_invokers)
- Le module [de sélecteurs CSS](/fr/docs/Web/CSS/Guides/Selectors)
