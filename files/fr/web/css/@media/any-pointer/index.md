---
title: any-pointer
slug: Web/CSS/@media/any-pointer
---

{{CSSRef}}

**`any-pointer`** est une caractéristique média CSS (cf. {{cssxref("@media")}}) qui peut être utilisée afin de déterminer si un des mécanismes de saisie/d'entrée disponibles est un dispositif de pointage et sa précision le cas échéant.

> **Note :** Si on souhaite tester la précision du mécanisme de pointage _principal_, on pourra utiliser la caractéristique [`pointer`](/fr/docs/Web/CSS/@media/pointer) à la place.

## Syntaxe

La caractéristique `any-pointer` est définie comme un mot-clé parmi ceux de la liste ci-après.

- `none`
  - : L'appareil ne dispose d'aucun dispositif de pointage.
- `coarse`
  - : Il existe au moins un mécanisme d'entrée qui est un dispositif de pointage et pour lequel la précision est limitée.
- `fine`
  - : Il existe au moins un mécanisme d'entrée qui est un dispositif de pointage et pour lequel la précision est fine.

> **Note :** Plusieurs valeurs peuvent correspondre si l'appareil dispose de dispositifs de pointage différents. Toutefois, la valeur `none` ne sera utilisée que lorsqu'aucun dispositif de pointage ne sera détecté.

## Exemples

Dans cet exemple, on crée une petite case à cocher pour les utilisateurs qui disposent d'un pointage précis et une case à cocher plus grande lorsque le mécanisme de pointage est moins précis.

### HTML

```html
<input id="test" type="checkbox" /> <label for="test">Coucou !</label>
```

### CSS

```css
input[type="checkbox"]:checked {
  background: gray;
}

@media (any-pointer: fine) {
  input[type="checkbox"] {
    -moz-appearance: none;
    -webkit-appearance: none;
    appearance: none;
    width: 15px;
    height: 15px;
    border: 1px solid blue;
  }
}

@media (any-pointer: coarse) {
  input[type="checkbox"] {
    -moz-appearance: none;
    -webkit-appearance: none;
    appearance: none;
    width: 30px;
    height: 30px;
    border: 2px solid red;
  }
}
```

### Résultat

{{EmbedLiveSample("Exemples")}}

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- [La caractéristique média `pointer`](/fr/docs/Web/CSS/@media/pointer)
