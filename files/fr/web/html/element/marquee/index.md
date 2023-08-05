---
title: "<marquee> : l'élément de fronton (obsolète)"
slug: Web/HTML/Element/marquee
---

{{HTMLSidebar}}{{non-standard_header}}{{deprecated_header}}

L'élément HTML **`<marquee>`** est utilisé pour insérer une zone de texte défilant.

## Attributs

- `behavior`
  - : Définit comment le texte defile à l'intérieur du `<marquee>`. Les valeurs possibles sont `scroll`, `slide` et `alternate`. Si aucune valeur n'est spécifiée, la valeur par défaut est `scroll`.
- `bgcolor`
  - : Définit la couleur de fond en utilisant le nom de la couleur ou son code hexadécimal.
- `direction`
  - : Définit la direction du défilement dans le `<marquee>`. Les valeurs possibles sont `left`, `right`, `up` et `down`. SI aucune valeur n'est spécifiée, la valeur par défaut est `left`.
- `height`
  - : Définit la hauteur en pixels ou en pourcentage.
- `hspace`
  - : Définit la marge horizontale.
- `loop`
  - : Définit le nombre de fois que le marquee va faire défiler le texte. Si aucune valeur n'est spécifiée, la valeur par défaut est `-1`, ce qui signifie que le marquee va défiler indéfiniment.
- `scrollamount`
  - : Définit la quantité de défilement de chaque défilement en pixels. La valeur par défaut est `6`.
- `scrolldelay`
  - : Définit l'intervalle entre chaque défilement en millisecondes. La valeur par défaut est `85`. Notez que toute valeur inférieure à 60 sera ignorée et 60 sera utilisé à la place, à moins que`truespeed`ne soit spécifié.
- `truespeed`
  - : Par défaut, les valeurs de `scrolldelay` inférieures à 60 sont ignorées. Si `truespeed` est présent, ces valeurs ne seront pas ignorées.
- `vspace`
  - : Définit la marge verticale en pixel ou en pourcentage.
- `width`
  - : Définit la largeur en pixel en ou pourcentage.

## Gestionnaire d'évènements

- `onbounce`
  - : Se déclenche quand le `<marquee>` arrive à la fin de son défilement. Il peut seulement se déclencher quand `behavior` est mis à `alternate`.
- `onfinish`
  - : Se déclenche quand le `<marquee>` arrive à la fin de tous ses défilements tels que définis par l'attribut `loop`. Il peut seulement se déclencher quand le nombre de défilements est supérieur à 0.
- `onstart`
  - : Se déclenche quand le `<marquee>` commence à défiler.

## Méthodes

- `start()`
  - : Commence à faire défiler le marquee.
- `stop()`
  - : Arrête de faire défiler le marquee.

## Exemples

### HTML

```html
<marquee>ʕノ•ᴥ•ʔノ ︵ ┻━┻</marquee>

<marquee direction="up">Ce texte va défiler de bas en haut</marquee>

<marquee
  direction="down"
  width="250"
  height="200"
  behavior="alternate"
  style="border:solid">
  <marquee behavior="alternate"> Ce texte va rebondir </marquee>
</marquee>
```

### Résultat

{{EmbedLiveSample("Exemples", 600, 450)}}

## Résumé technique

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Interface DOM</th>
      <td>{{DOMxRef("HTMLMarqueeElement")}}</td>
    </tr>
  </tbody>
</table>

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- {{DOMxRef("HTMLMarqueeElement")}}
