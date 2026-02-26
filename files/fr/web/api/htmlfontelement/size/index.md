---
title: "HTMLFontElement : propriété size"
short-title: size
slug: Web/API/HTMLFontElement/size
l10n:
  sourceCommit: e9b6cd1b7fa8612257b72b2a85a96dd7d45c0200
---

{{APIRef("HTML DOM")}}{{Deprecated_Header}}

La propriété obsolète **`size`** de l'interface {{DOMxRef("HTMLFontElement")}} est une chaîne de caractères qui reflète l'attribut HTML [`size`](/fr/docs/Web/HTML/Reference/Elements/font#size). Elle contient soit une taille de police comprise entre 1 et 7, soit un nombre relatif à la valeur par défaut 3, par exemple -2 ou +1.

Le format de la chaîne de caractères doit respecter l'une des microsyntaxes HTML suivantes&nbsp;:

<table class="no-markdown">
  <thead>
    <tr>
      <th scope="col">Microsyntaxe</th>
      <th scope="col">Description</th>
      <th scope="col">Exemples</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Chaîne représentant une taille valide</td>
      <td><em>nombre entier dans l'intervalle 1-7</em></td>
      <td><code>6</code></td>
    </tr>
    <tr>
      <td>Chaîne de taille relative</td>
      <td>
        <em>+x ou -x, où x est un nombre relatif à 3 (le résultat doit rester dans l'intervalle 1-7)</em>
      </td>
      <td>
        <code>+2<br />-1</code>
      </td>
    </tr>
  </tbody>
</table>

## Valeur

Une chaîne de caractères.

## Exemples

```js
// Supposons qu'il existe un élément <font id="f"> dans le HTML

const f = document.getElementById("f");
f.size = "6";
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- L'interface {{DOMxRef("HTMLFontElement")}} à laquelle elle appartient.
