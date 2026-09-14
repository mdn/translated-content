---
title: Fonction CSS `round()`
short-title: round()
slug: Web/CSS/Reference/Values/round
l10n:
  sourceCommit: b760560abe30bd69ca968dac38528102f423b5ea
---

La [fonction](/fr/docs/Web/CSS/Reference/Values/Functions) [CSS](/fr/docs/Web/CSS) **`round()`** retourne un nombre arrondi en fonction d'une stratégie d'arrondi sélectionnée.

Les auteur·ice·s devraient utiliser une [propriété CSS personnalisée](/fr/docs/Web/CSS/Reference/Properties/--*) (par exemple, `--my-property`) pour la valeur d'arrondi, l'intervalle ou les deux&nbsp;; utiliser la fonction `round()` est redondant si ces valeurs sont connues.

## Syntaxe

```css
width: round(var(--width), 50px);
width: round(up, 101px, var(--interval));
width: round(down, var(--height), var(--interval));
margin: round(to-zero, -105px, 10px);
```

### Paramètres

La fonction `round(<rounding-strategy>, valueToRound, roundingInterval)` définit une stratégie d'arrondi optionnelle, une valeur (ou une expression mathématique) à arrondir et un intervalle d'arrondi (ou une expression mathématique).
La `valueToRound` est arrondie selon la stratégie d'arrondi, au multiple entier le plus proche de `roundingInterval`.

- `<rounding-strategy>`
  - : La stratégie d'arrondi.
    Cela peut être l'une des valeurs suivantes&nbsp;:
    - `up`
      - : Arrondir `valueToRound` vers le haut au multiple entier le plus proche de `roundingInterval` (si la valeur est négative, elle devient «&nbsp;plus positive&nbsp;»). Cela équivaut à la méthode JavaScript {{JSxRef("Math.ceil()")}}.
    - `down`
      - : Arrondir `valueToRound` vers le bas au multiple entier le plus proche de `roundingInterval` (si la valeur est négative, elle devient «&nbsp;plus négative&nbsp;»). Cela équivaut à la méthode JavaScript {{JSxRef("Math.floor()")}}.
    - `nearest` (par défaut)
      - : Arrondir `valueToRound` au multiple entier le plus proche de `roundingInterval`, qui peut être soit au-dessus, soit en dessous de la valeur.
        Si `valueToRound` est à mi-chemin entre les cibles d'arrondi ci-dessus et ci-dessous (aucune n'est "la plus proche"), elle est arrondie vers le haut.
        Equivalent to JavaScript {{JSxRef("Math.round()")}}.
    - `to-zero`
      - : Arrondir `valueToRound` au multiple entier le plus proche de `roundingInterval` vers zéro (un nombre positif diminue, tandis qu'une valeur négative devient «&nbsp;moins négative&nbsp;»). Cela équivaut à la méthode JavaScript {{JSxRef("Math.trunc()")}}.

- `valueToRound`
  - : La valeur à arrondir.
    Cela doit être un nombre ({{CSSxRef("&lt;number&gt;")}}), une dimension ({{CSSxRef("&lt;dimension&gt;")}}), ou un pourcentage ({{CSSxRef("&lt;percentage&gt;")}}), ou une expression mathématique qui se résout en l'une de ces valeurs.

- `roundingInterval`
  - : L'intervalle d'arrondi.
    Cela peut être un nombre ({{CSSxRef("&lt;number&gt;")}}), une dimension ({{CSSxRef("&lt;dimension&gt;")}}), ou un pourcentage ({{CSSxRef("&lt;percentage&gt;")}}), ou une expression mathématique qui se résout en l'une de ces valeurs. Si `valueToRound` est un {{CSSxRef("&lt;number&gt;")}}, `roundingInterval` peut être omis et par défaut vaut `1`. Sinon, l'omission de cet argument entraîne une expression invalide.

### Valeur de retour

La valeur de `valueToRound`, arrondie au multiple entier le plus proche de `roundingInterval`, en fonction de la stratégie d'arrondi.

- Si `roundingInterval` est 0, le résultat est `NaN`.
- Si `valueToRound` et `roundingInterval` sont tous deux `infini`, le résultat est `NaN`.
- Si `valueToRound` est infini mais `roundingInterval` est fini, le résultat est le même `infini`.
- Si `valueToRound` est fini mais `roundingInterval` est infini, le résultat dépend de la stratégie d'arrondi et du signe de `A`&nbsp;:
  - `up` - Si `valueToRound` est positif (non nul), retourne `+∞`. Si `valueToRound` est `0⁺`, retourne `0⁺`. Sinon, retourne `0⁻`.
  - `down` - Si `valueToRound` est négatif (non nul), retourne `−∞`. Si `valueToRound` est `0⁻`, retourne `0⁻`. Sinon, retourne `0⁺`.
  - `nearest`, `to-zero` - Si `valueToRound` est positif ou `0⁺`, retourne `0⁺`. Sinon, retourne `0⁻`.

- Les calculs des arguments peuvent se résoudre en nombre ({{CSSxRef("&lt;number&gt;")}}), dimension ({{CSSxRef("&lt;dimension&gt;")}}), ou pourcentage ({{CSSxRef("&lt;percentage&gt;")}}), mais doivent avoir le même type, sinon la fonction est invalide&nbsp;; le résultat a le même type que les arguments.
- Si `valueToRound` est exactement égal à un multiple entier de `roundingInterval`, `round()` se résout exactement à `valueToRound` (en préservant si `valueToRound` est `0⁻` ou `0⁺`, si pertinent). Sinon, il y a deux multiples entiers de `roundingInterval` qui sont potentiellement «&nbsp;les plus proches&nbsp;» de `valueToRound`, le `roundingInterval` inférieur qui est plus proche de `−∞` et le `roundingInterval` supérieur qui est plus proche de `+∞`.

## Syntaxe formelle

{{CSSSyntax}}

## Exemples

### Arrondir les valeurs positives

Cet exemple montre comment les stratégies d'arrondi de la fonction `round()` fonctionnent pour les valeurs positives.

Parmi les cinq boîtes ci-dessous, la fonction `round()` est utilisée pour définir la hauteur des quatre dernières.
La valeur à arrondir se situe entre 100px et 125px dans chaque cas, et la valeur d'arrondi est de 25px dans tous les cas.
La hauteur des boîtes est donc soit arrondie à 125px, soit à 100px.

#### HTML

Le HTML définit 5 éléments `div` qui sont rendus comme des boîtes par le CSS.
Les éléments contiennent du texte indiquant la stratégie d'arrondi, la valeur initiale et la hauteur finale attendue de la boîte (entre parenthèses).

```html
<div class="box box-1">height: 100px</div>
<div class="box box-2">up 101px (125px)</div>
<div class="box box-3">down 122px (100px)</div>
<div class="box box-4">to-zero 120px (100px)</div>
<div class="box box-5">nearest 117px (125px)</div>
```

#### CSS

```css hidden
body {
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 50px;
}
```

Le CSS appliqué à toutes les boîtes est montré ci-dessous.
Notez que nous appliquons une [propriété CSS personnalisée](/fr/docs/Web/CSS/Reference/Properties/--*) nommée `--interval-arrondi`, que nous utilisons pour l'intervalle d'arrondi.

```css
div.box {
  width: 100px;
  height: 100px;
  background: lightblue;
  --interval-arrondi: 25px;
}
```

Le premier `div` à partir de la gauche n'est pas ciblé par des règles CSS spécifiques, il a donc une hauteur par défaut de 100px.
Le CSS pour les `div` deux, trois et quatre est montré ci-dessous, qui arrondissent vers le haut, vers le bas et vers zéro, respectivement.

```css
div.box-2 {
  height: round(up, 101px, var(--interval-arrondi));
}
div.box-3 {
  height: round(down, 122px, var(--interval-arrondi));
}
div.box-4 {
  height: round(to-zero, 120px, var(--interval-arrondi));
}
```

Notez comment ci-dessus nous indiquons l'intervalle d'arrondi en utilisant `var()` et la propriété CSS personnalisée `--interval-arrondi`.

La dernière boîte est définie sans définir de stratégie d'arrondi, et donc par défaut à `nearest`.
Dans ce cas, l'intervalle le plus proche de 117px est 125px, donc il est arrondi vers le haut.
Juste pour contraste, ici nous avons défini des valeurs codées en dur pour la valeur d'arrondi et l'intervalle.
Bien que cela soit autorisé, vous ne le feriez normalement pas, car il n'y a aucun intérêt à arrondir un nombre lorsque vous savez déjà quel doit être le résultat.

```css
div.box-5 {
  height: round(117px, 25px);
}
```

#### Résultat

Si le navigateur prend en charge la fonction CSS `round()`, vous devriez voir cinq colonnes avec des hauteurs arrondies comme indiqué par leur texte contenu.

{{EmbedLiveSample("Arrondir les valeurs positives", "100%", 200)}}

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- La fonction {{CSSxRef("mod()")}}
- La fonction {{CSSxRef("rem()")}}
