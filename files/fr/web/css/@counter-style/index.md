---
title: "@counter-style"
slug: Web/CSS/@counter-style
---

{{CSSRef}}

La [règle @](/fr/docs/Web/CSS/At-rule) [CSS](/fr/docs/Web/CSS) **`@counter-style`** permet aux auteurs de définir des styles de compteurs qui ne font pas partie de l'ensemble des styles natifs prédéfinis. Une règle `@counter-style` explique comment convertir la valeur d'un compteur en une chaîne de caractères correspondantes.

```css
@counter-style thumbs {
  system: cyclic;
  symbols: "\1F44D";
  suffix: " ";
}

ul {
  list-style: thumbs;
}
```

La version initiale de CSS définit un ensemble de compteurs qui peuvent être utilisés pour mettre en forme les listes. Malgré l'ajout de nouveaux styles au fur et à mesure, cette approche s'est retrouvée limitée pour couvrir tous les besoins liés à la typographie. La règle `@counter-style` permet donc aux auteurs de définir librement d'autres styles si les styles prédéfinis ne conviennent pas.

## Syntaxe

### Descripteurs

Chaque `@counter-style` est identifié par un nom et possède un ensemble de descripteurs.

- [`system`](/fr/docs/Web/CSS/@counter-style/system)

  - : Ce descripteur indique l'algorithme à utiliser pour convertir les valeurs entières du compteur en des chaînes de caractères correspondantes.

- [`negative`](/fr/docs/Web/CSS/@counter-style/negative)

  - : Ce descripteur permet d'indiquer si le symbole du compteur doit être préfixé ou suffixé si la valeur est négative.

- [`prefix`](/fr/docs/Web/CSS/@counter-style/prefix)

  - : Ce descripteur indique un symbole qui doit être utilisé comme préfixe pour le compteur. Les préfixes sont ajoutés à la fin de la représentation et apparaissent avant le signe négatif.

- [`suffix`](/fr/docs/Web/CSS/@counter-style/suffix)

  - : Ce descripteur indique un symbole qui doit être utilisé comme suffixe pour le compteur. Comme pour les préfixes, les suffixes sont ajoutés à la fin de la représentation.

- [`range`](/fr/docs/Web/CSS/@counter-style/range)

  - : Ce descripteur indique l'intervalle de valeur pour lequel le style du compteur peut s'appliquer. Pour les valeurs du compteur en dehors de cet intervalle, le style utilisé sera le style de secours.

- [`pad`](/fr/docs/Web/CSS/@counter-style/pad)

  - : Ce descripteur est utilisé lorsqu'il faut que la représentation du marqueur ait une longueur minimale. Ainsi, s'il faut que le compteur mesure deux caractères (ex. 01, 02, 03, 04 etc), on utilisera ce descripteur. Pour les valeurs dont la taille est plus grande que celle indiquée dans ce descripteur, le marqueur est construit normalement.

- [`fallback`](/fr/docs/Web/CSS/@counter-style/fallback)

  - : Ce descripteur définit le système en cas de secours (si le système définit via la règle @ ne permet pas de construire le marqueur ou si la valeur du compteur est en dehors de l'intervalle défini). Si le système indiqué en secours échoue également, ce sera alors le système de secours de secours qui sera utilisé et ainsi de suite si nécessaire. Si besoin, le style décimal sera utilisé en fin de chaîne.

- [`symbols`](/fr/docs/Web/CSS/@counter-style/symbols)

  - : Ce descripteur définit les symboles qui doivent être utilisés pour représenter le marqueur. Les symboles peuvent contenir des chaînes de caractères, des images ou des identifiants. L'utilisation des symboles et leur combinaison pour représenter le marqueur dépend de l'algorithme indiqué via le descripteur `system`. Ainsi, si `system` vaut `fixed`, chacun des N symboles définis dans le descripteur sera utilisé pour représenter les N premiers symboles. Une fois l'ensemble épuisé, le style de secours sera utilisé pour le reste de la liste.

    Cet exemple de règle `@counter-style` utilise des images plutôt que des caractères. Attention, l'utilisation d'image pour les symboles est une fonctionnalité à risque en termes de conservation dans la spécification et n'est implémentée par aucun navigateur.

    ```css
    @counter-style winners-list {
      system: fixed;
      symbols: url(gold-medal.svg) url(silver-medal.svg) url(bronze-medal.svg);
      suffix: " ";
    }
    ```

- [`additive-symbols`](/fr/docs/Web/CSS/@counter-style/additive-symbols)

  - : Certains symboles définis via le descripteur `symbols` sont utilisés par la plupart des algorithmes. Certains systèmes dits «&nbsp;additifs&nbsp;» s'appuient sur des _tuples additifs_ décrit avec ce descripteur. Chaque tuple additif se compose d'un symbole de compteur et d'un poids entier positif. Les tuples additifs doivent être définis dans l'ordre décroissant de leurs poids.

- [`speak-as`](/fr/docs/Web/CSS/@counter-style/speak-as)
  - : Ce descripteur indique la façon dont le compteur peut être prononcé par un lecteur d'écran. Ainsi, la valeur du symbole peut être lue comme un nombre ou comme un alphabet ou comme des sons fournis.

## Syntaxe formelle

{{csssyntax}}

## Exemples

### HTML

```html
<ul class="exemple">
  <li>Un</li>
  <li>Deux</li>
  <li>Trois</li>
  <li>Quatre</li>
  <li>Cinq</li>
  <li>Six</li>
</ul>
```

### CSS

```css
@counter-style circled-alpha {
  system: fixed;
  symbols: Ⓐ Ⓑ Ⓒ Ⓓ Ⓔ Ⓕ Ⓖ Ⓗ Ⓘ Ⓙ Ⓚ Ⓛ Ⓜ Ⓝ Ⓞ Ⓟ Ⓠ Ⓡ Ⓢ Ⓣ Ⓤ Ⓥ Ⓦ Ⓧ Ⓨ Ⓩ;
  suffix: " ";
}

.exemple {
  list-style: circled-alpha;
}
```

### Résultat

{{EmbedLiveSample('')}}

> **Note :** Une page d'exemple avec plus de variables est disponible ici&nbsp;: <https://mdn.github.io/css-examples/counter-style-demo/>.

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- [`list-style`](/fr/docs/Web/CSS/list-style), [`list-style-image`](/fr/docs/Web/CSS/list-style-image), [`list-style-position`](/fr/docs/Web/CSS/list-style-position), [`list-style-type`](/fr/docs/Web/CSS/list-style-type)
- [`symbols()`](</fr/docs/Web/CSS/symbols()>)&nbsp;: la notation fonctionnelle qui permet de créer des styles de compteur anonymes
- Les fonctions CSS [`counter()`](</fr/docs/Web/CSS/counter()>) et [`counters()`](</fr/docs/Web/CSS/counters()>)
- [Démonstration pour les styles de compteur](https://mdn.github.io/css-examples/counter-style-demo/) ([code](https://github.com/mdn/css-examples/tree/master/counter-style-demo))
