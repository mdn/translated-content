---
title: HTMLElement.hidden
slug: Web/API/HTMLElement/hidden
---

{{ APIRef("HTML DOM") }}

La propriété **`hidden`** de l'{{domxref("HTMLElement")}} est un {{jsxref("Boolean")}} qui vaut `true` si l'élément est caché, sinon sa valeur est `false`. Cela est très différent de l'utilisation de la propriété CSS {{cssxref("display")}} pour contrôler la visibilité d'un élément.

La propriété `hidden` s'applique à tous les modes de présentation et ne doit pas être utilisée pour cacher du contenu qui est destiné à être directement accessible par l'utilisateur.

Des cas d'utilisation appropriés de `hidden` comprennent :

- du contenu qui n'est pas encore pertinent mais qui peut être nécessaire ultérieurement ;
- du contenu qui était nécessaire antérieurement mais qui ne l'est plus ;
- du contenu qui est réutilisé par d'autres parties de la page à la manière d'un modèle ;
- la création d'un canevas hors écran comme tampon de dessin.

Des cas inappropriés d'utilisation comprennent :

- le fait de cacher des panneaux dans une boîte de dialogue à onglets ;
- le fait de cacher du contenu dans une présentation tout en ayant l'intention qu'il soit visible dans d'autres.

> **Note :** Des éléments qui ne sont pas `hidden` ne doivent pas faire référence à des éléments qui le sont.

## Syntaxe

```js
estCaché = HTMLElement.hidden;

HTMLElement.hidden = true | false;
```

### Valeur

Un Boolean qui est `true` si l'élément est caché à la vue ; sinon, la valeur est `false`.

## Exemple

Voici un exemple où un bloc caché est utilisé pour contenir un message de remerciement qui est affiché après qu'un utilisateur a accepté une demande inhabituelle.

### JavaScript

```js
document.getElementById("boutonOk").addEventListener(
  "click",
  function () {
    document.getElementById("bienvenue").hidden = true;
    document.getElementById("impressionnant").hidden = false;
  },
  false,
);
```

Ce code installe une gestionnaire pour le bouton "OK" du panneau de bienvenue, gestionnaire qui cache le panneau de bienvenue et rend le panneau de suite — ayant le curieux nom d'"impressionnant" — visible à sa place.

### HTML

Le code HTML pour les deux boîtes est montré ci-dessous.

#### Le panneau bienvenue

```html
<div id="bienvenue" class="panneau">
  <h1>Bienvenue à Machin.com !</h1>
  <p>En cliquant sur "OK", vous acceptez d'être impressionnant chaque jour !</p>
  <button class="bouton" id="boutonOk">OK</button>
</div>
```

Ce code HTML crée un panneau (dans un bloc {{HTMLElement("div")}}) qui accueille les utilisateurs sur un site et leur dit ce qu'ils acceptent en cliquant sur le bouton OK.

#### Le panneau de suite

Une fois que l'utilisateur a cliqué sur le bouton "OK" dans le panneau d'accueil, le code JavaScript échange les deux panneaux en changeant leurs valeurs respectives pour `hidden`. Le panneau de suite ressemble à ce qui suit en HTML:

```html
<div id="impressionnant" class="panneau" hidden>
  <h1>Merci !</h1>
  <p>
    Merci <strong>vraiment</strong> beaucoup d'avoir accepté d'être
    impressionnant aujourd'hui ! Maintenant, sortez et faites des choses
    impressionnantes d'une façon impressionnante pour rendre le monde plus
    impressionnant !
  </p>
</div>
```

### CSS

Le contenu est mis en forme en utilisant le CSS ci-dessous.

```css
.panneau {
  font:
    16px "Open Sans",
    Helvetica,
    Arial,
    sans-serif;
  border: 1px solid #22d;
  padding: 12px;
  width: 500px;
  text-align: center;
}

.bouton {
  font:
    22px "Open Sans",
    Helvetica,
    Arial,
    sans-serif;
  padding: 5px 36px;
}

h1 {
  margin-top: 0;
  font-size: 175%;
}
```

### Résultat

{{ EmbedLiveSample('Exemple', 560, 200) }}

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- {{domxref("Element.hidden")}}
- {{cssxref("display")}}
