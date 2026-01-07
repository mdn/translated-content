---
title: "HTMLElement : propriété hidden"
short-title: hidden
slug: Web/API/HTMLElement/hidden
l10n:
  sourceCommit: 6ef7bc04d63cf8b512bdbea149a6cb875cc063e3
---

{{APIRef("HTML DOM")}}

La propriété **`hidden`** de l'interface {{DOMxRef("HTMLElement")}} reflète la valeur de l'attribut [`hidden`](/fr/docs/Web/HTML/Reference/Global_attributes/hidden) de l'élément.

## Valeur

Cet attribut peut avoir l'une des trois valeurs suivantes&nbsp;:

- `true`
  - : L'élément est caché.
- `false`
  - : L'élément n'est pas caché. Il s'agit de la valeur par défaut de l'attribut.
- `"until-found"`
  - : L'élément est _caché jusqu'à ce qu'il soit trouvé_, c'est-à-dire qu'il est caché mais sera révélé s'il est trouvé via la recherche dans la page ou atteint par navigation de fragment.

Pour plus de détails sur l'utilisation de cet attribut, voir la page de l'attribut HTML [`hidden`](/fr/docs/Web/HTML/Reference/Global_attributes/hidden) auquel cette propriété fait référence.

## Exemples

Voici un exemple où un bloc caché est utilisé pour contenir un message de remerciement qui est affiché après qu'un·e utilisateur·ice a accepté une demande inhabituelle.

### HTML

Le code HTML contient deux panneaux&nbsp;: un panneau de bienvenue, qui demande aux utilisateur·ice·s d'accepter d'être impressionnant·e·s, et un panneau de suite, qui est initialement caché.

```html
<div id="bienvenue" class="panneau">
  <h1>Bienvenue sur mon site&nbsp;!</h1>
  <p>
    En cliquant sur «&nbsp;OK&nbsp;», vous acceptez d'être impressionnant·e
    aujourd'hui&nbsp;!
  </p>
  <button class="bouton" id="boutonOk">OK</button>
</div>

<div id="impressionnant" class="panneau" hidden>
  <h1>Merci&nbsp;!</h1>
  <p>Merci d'avoir accepté d'être impressionnant·e aujourd'hui&nbsp;!</p>
</div>
```

### CSS

Le contenu est mis en forme avec le CSS ci-dessous.

```css
.panneau {
  font:
    16px "Open Sans",
    "Helvetica",
    "Arial",
    sans-serif;
  border: 1px solid #2222dd;
  padding: 12px;
  width: 500px;
  text-align: center;
}

.bouton {
  font:
    22px "Open Sans",
    "Helvetica",
    "Arial",
    sans-serif;
  padding: 5px 36px;
}

h1 {
  margin-top: 0;
  font-size: 175%;
}
```

### JavaScript

Le JavaScript ajoute un gestionnaire d'évènement au bouton «&nbsp;OK&nbsp;», qui cache le panneau «&nbsp;bienvenue&nbsp;» et affiche le panneau «&nbsp;impressionnant&nbsp;»&nbsp;:

```js
document.getElementById("boutonOk").addEventListener("click", () => {
  document.getElementById("bienvenue").hidden = true;
  document.getElementById("impressionnant").hidden = false;
});
```

### Résultat

{{EmbedLiveSample('Exemples', 560, 200)}}

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- L'attribut HTML universel [`hidden`](/fr/docs/Web/HTML/Reference/Global_attributes/hidden)
- La propriété CSS {{CSSxRef("display")}}
