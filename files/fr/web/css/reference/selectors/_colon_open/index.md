---
title: :open
slug: Web/CSS/Reference/Selectors/:open
original_slug: Web/CSS/:open
l10n:
  sourceCommit: 0cc9980e3b21c83d1800a428bc402ae1865326b2
---

La [pseudo-classe](/fr/docs/Web/CSS/Reference/Selectors/Pseudo-classes) [CSS](/fr/docs/Web/CSS) **`:open`** représente un élément qui a des états ouverts et fermés, uniquement lorsqu'il est actuellement dans l'état ouvert.

## Syntaxe

```css
:open {
  /* ... */
}
```

## Description

La pseudo-classe `:open` sélectionne tout élément actuellement dans l'état ouvert, ce qui inclut les éléments suivants&nbsp;:

- Les éléments {{htmlelement("details")}} et {{htmlelement("dialog")}} qui sont dans un état ouvert, c'est-à-dire qu'ils ont l'attribut `open` défini.
- Les éléments {{htmlelement("input")}} qui affichent une interface de sélection pour que l'utilisateur·ice choisisse une valeur (par exemple [`<input type="color">`](/fr/docs/Web/HTML/Reference/Elements/input/color)), lorsque le sélecteur est affiché.
- Les éléments {{htmlelement("select")}} qui affichent un sélecteur déroulant pour que l'utilisateur·ice choisisse une valeur, lorsque le sélecteur est affiché. Notez que lors de l'implémentation d'[éléments de sélection personnalisables](/fr/docs/Learn_web_development/Extensions/Forms/Customizable_select), le sélecteur lui-même peut être sélectionné à l'aide du pseudo-élément {{cssxref("::picker()", "::picker(select)")}}.

Notez que les états ouvert et fermé sont des états sémantiques, et ne correspondent pas nécessairement à la visibilité de l'élément en question. Par exemple, un élément `<details>` qui est développé pour afficher son contenu est ouvert, et sera sélectionné par le sélecteur `details:open`, même s'il est masqué avec une valeur {{cssxref("visibility")}} de `hidden`.

Les éléments {{domxref("Popover API", "Popover", "", "nocode")}} (c'est-à-dire, les éléments avec l'attribut [`popover`](/fr/docs/Web/HTML/Reference/Global_attributes/popover) défini sur eux) ont des états sémantiques distincts représentant des popovers qui sont affichés ou masqués, qui peuvent coexister avec des états ouverts et fermés. Pour cibler un élément popover dans un état affiché, utilisez la pseudo-classe {{cssxref(":popover-open")}} à la place.

## Exemples

### Utilisation de base de `:open`

Cet exemple démontre certains des éléments HTML qui ont un état ouvert.

#### CSS

```css
details:open > summary {
  background-color: pink;
}

:is(select, input):open {
  background-color: pink;
}
```

```css hidden
@supports not selector(:open) {
  body::before {
    content: "Your browser doesn't support :open selector.";
    background-color: wheat;
    display: block;
    width: 100%;
    text-align: center;
  }

  body > * {
    display: none;
  }
}
```

#### HTML

```html
<details>
  <summary>Détails</summary>
  Lorem ipsum dolor sit amet, consectetur adipiscing elit. In pulvinar dapibus
  lacus, sit amet finibus lectus mollis eu. Nullam quis orci dictum, porta lacus
  et, cursus nunc. Aenean pulvinar imperdiet neque fermentum facilisis. Nulla
  facilisi. Curabitur vitae sapien ut nunc pulvinar semper vitae vitae nisi.
</details>
<hr />

<label for="pet-select">Choisissez un animal&nbsp;:</label>
<select id="pet-select">
  <option value="dog">Chien</option>
  <option value="cat">Chat</option>
  <option value="hamster">Hamster</option>
</select>
<hr />

<label for="start">Date de début&nbsp;:</label>
<input type="date" id="start" />
```

#### Résultat

{{EmbedLiveSample("Utilisation_de_base_de_open", 300, 200)}}

### Personnalisation du style de `<select>` avec `:open`

Dans cet exemple, nous donnons un style de base à un élément {{htmlelement("select")}}. La pseudo-classe `:open` est utilisée pour appliquer une amélioration de style à son état ouvert — lorsque le menu déroulant est affiché.

#### HTML

Il n'y a rien de spécial dans notre sélecteur de fruits.

```html
<label>
  Choisissez votre fruit préféré&nbsp;:
  <select name="fruit">
    <option>pomme</option>
    <option>banane</option>
    <option>baie de boysen</option>
    <option>canneberge</option>
    <option>figue</option>
    <option>pamplemousse</option>
    <option>citron</option>
    <option>orange</option>
    <option>papaye</option>
    <option>grenade</option>
    <option>tomate</option>
  </select>
</label>
```

> [!NOTE]
> Nous n'utilisons pas un `<select>` multi-lignes (c'est-à-dire, un avec l'attribut [`multiple`](/fr/docs/Web/HTML/Reference/Attributes/multiple) défini) — ceux-ci ont tendance à s'afficher sous forme de zone de liste déroulante plutôt que de menu déroulant, donc n'ont pas d'état ouvert.

#### CSS

Dans le CSS, nous définissons une valeur {{cssxref("appearance")}} de `none` sur notre élément `<select>` pour supprimer le style OS par défaut de la boîte de sélection, et fournir quelques styles de base à nous. Plus précisément, nous définissons une image de fond {{glossary("SVG")}} d'une flèche vers le bas sur le côté droit — les utilisateur·ice·s ont tendance à reconnaître les éléments `<select>` par la flèche vers le bas, donc c'est une bonne idée de l'inclure.

Nous définissons ensuite un peu de {{cssxref("padding")}} sur l'élément {{htmlelement("label")}} environnant, et une bordure transparente pour garder la mise en page cohérente lorsque nous ajoutons plus tard une bordure colorée.

```css
select {
  appearance: none;
  width: 100%;
  display: block;
  font-family: inherit;
  font-size: 100%;
  padding: 5px;
  border: 1px solid black;
  background: url("data:image/svg+xml,%3Csvg width='20' height='20' viewBox='0 0 20 20' xmlns='http://www.w3.org/2000/svg'%3E%3Cpolygon points='5,5 15,5 10,15'/%3E%3C/svg%3E")
    no-repeat right 3px center / 1em 1em;
}

label {
  font-family: sans-serif;
  max-width: 20em;
  display: block;
  padding: 20px;
  border: 2px solid transparent;
}
```

Quand le `<select>` est ouvert, nous utilisons la pseudo-classe `:open` pour définir une couleur de fond différente et changer l'image de fond en une flèche vers le haut. Nous définissons également une couleur de fond et une bordure différentes sur l'élément `<label>` environnant en utilisant une combinaison des pseudo-classes `:open` et {{cssxref(":has()")}} pour créer un sélecteur parent. Nous disons littéralement «&nbsp;sélectionnez le `<label>`, mais seulement lorsque son descendant `<select>` est ouvert&nbsp;».

```css
select:open {
  background-color: #f8f2dc;
  background-image: url("data:image/svg+xml,%3Csvg width='20' height='20' viewBox='0 0 20 20' xmlns='http://www.w3.org/2000/svg'%3E%3Cpolygon points='5,15 10,5 15,15'/%3E%3C/svg%3E");
}

label:has(select:open) {
  background-color: #81adc8;
  border-color: #cd4631;
}
```

#### Résultat

Le résultat est le suivant. Essayez d'ouvrir le menu déroulant `<select>` pour voir l'effet sur le style&nbsp;:

{{ EmbedLiveSample("Personnalisation_du_style_de_select_avec_open", "100%", "100") }}

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- Les éléments HTML {{htmlelement("details")}}, {{htmlelement("dialog")}}, {{htmlelement("select")}} et {{htmlelement("input")}}
- La pseudo-classe {{cssxref(":popover-open")}}
- {{Cssxref(":modal")}}
