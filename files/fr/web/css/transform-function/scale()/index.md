---
title: scale()
slug: Web/CSS/transform-function/scale()
translation_of: Web/CSS/transform-function/scale()
browser-compat: css.types.transform-function.scale
---
{{CSSRef}}

La fonction CSS **`scale()`** permet de modifier la taille d'un élément avec un facteur d'échelle sur deux dimensions. Le résultat de cette fonction est une valeur de type [`<transform-function>`](/fr/docs/Web/CSS/transform-function).

![](scale.png)

Cette transformation est définie par un vecteur dont les coordonnées définissent la déformation appliquée dans chaque direction (horizontale et verticale). Si les deux coordonnées du vecteur sont égales, la mise à l'échelle est uniforme (ou isotropique) et la forme de l'élément est conservée.

Lorsque les coordonnées du vecteur sont en dehors de l'intervalle \[`-1, 1]`, la transformation agrandit la taille de l'élément. Dans cet intervalle, l'élément est réduit.

> **Note :** La fonction `scale()` applique une transformation dans le plan (2D). S'il faut que la transformation soit appliquée dans l'espace (3D), on pourra utiliser la fonction `scale3D()`.

## Syntaxe

La fonction `scale()` s'utilise avec une ou deux valeurs qui indiquent l'échelle à utiliser selon chaque direction.


```css
scale(sx)

scale(sx, sy)
```

### Valeurs

- `sx`
  - : Une valeur de type [`<number>`](/fr/docs/Web/CSS/number) qui représente l'abscisse du vecteur de transformation (le facteur d'échelle selon l'axe horizontal).
- `sy`
  - : Une valeur de type [`<number>`](/fr/docs/Web/CSS/number) qui représente l'abscisse du vecteur de transformation (le facteur d'échelle selon l'axe vertical). Si ce paramètre est absent, la valeur par défaut qui sera prise sera **_sx_** (on aura ainsi une transformation homogène).

<table class="standard-table">
  <thead>
    <tr>
      <th scope="col">Coordonnées cartésiennes sur ℝ<sup>2</sup></th>
      <th scope="col">Coordonnées homogènes sur ℝℙ<sup>2</sup></th>
      <th scope="col">Coordonnées cartésiennes sur ℝ<sup>3</sup></th>
      <th scope="col">Coordonnées homogènes sur ℝℙ<sup>3</sup></th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td rowspan="2">
        <math
          ><mfenced
            ><mtable
              ><mtr
                ><mtd><mi>sx</mi> </mtd><mtd><mn>0</mn> </mtd></mtr
              ><mtr
                ><mtd><mn>0</mn> </mtd><mtd><mi>sy</mi></mtd></mtr
              ></mtable
            ></mfenced
          ></math
        >
      </td>
      <td>
        <math
          ><mfenced
            ><mtable
              ><mtr
                ><mtd><mi>sx</mi> </mtd><mtd><mn>0</mn> </mtd
                ><mtd><mn>0</mn> </mtd></mtr
              ><mtr
                ><mtd><mn>0</mn> </mtd><mtd><mi>sy</mi> </mtd
                ><mtd><mn>0</mn> </mtd></mtr
              ><mtr
                ><mtd><mn>0</mn> </mtd><mtd><mn>0</mn> </mtd
                ><mtd><mn>1</mn></mtd></mtr
              ></mtable
            ></mfenced
          ></math
        >
      </td>
      <td rowspan="2">
        <math
          ><mfenced
            ><mtable
              ><mtr
                ><mtd><mi>sx</mi> </mtd><mtd><mn>0</mn> </mtd
                ><mtd><mn>0</mn> </mtd></mtr
              ><mtr
                ><mtd><mn>0</mn> </mtd><mtd><mi>sy</mi> </mtd
                ><mtd><mn>0</mn> </mtd></mtr
              ><mtr
                ><mtd><mn>0</mn> </mtd><mtd><mn>0</mn> </mtd
                ><mtd><mn>1</mn></mtd></mtr
              ></mtable
            ></mfenced
          ></math
        >
      </td>
      <td rowspan="2">
        <math
          ><mfenced
            ><mtable
              ><mtr
                ><mtd><mi>sx</mi> </mtd><mtd><mn>0</mn> </mtd
                ><mtd><mn>0</mn> </mtd><mtd><mn>0</mn> </mtd></mtr
              ><mtr
                ><mtd><mn>0</mn> </mtd><mtd><mi>sy</mi> </mtd
                ><mtd><mn>0</mn> </mtd><mtd><mn>0</mn> </mtd></mtr
              ><mtr
                ><mtd><mn>0</mn> </mtd><mtd><mn>0</mn> </mtd
                ><mtd><mn>1</mn> </mtd><mtd><mn>0</mn> </mtd></mtr
              ><mtr
                ><mtd><mn>0</mn> </mtd><mtd><mn>0</mn> </mtd
                ><mtd><mn>0</mn> </mtd><mtd><mn>1</mn></mtd></mtr
              ></mtable
            ></mfenced
          ></math
        >
      </td>
    </tr>
    <tr>
      <td><code>[sx 0 0 sy 0 0]</code></td>
    </tr>
  </tbody>
</table>

## Accessibilité

Les animations utilisées pour les zooms/changement d'échelle peuvent poser problème comme facteurs de déclenchement pour certains types de migraine. Si vous devez inclure de telles animations sur votre site, vous devriez fournir un moyen de désactiver les animations pour le site.

Vous pouvez également tirer parti de la caractéristique média [`prefers-reduced-motion`](/fr/docs/Web/CSS/@media/prefers-reduced-motion) et écrire une requête média qui désactivera les animations si l'utilisateur décide de réduire les animations via les préférences du système.

Pour en savoir plus :

- [Comprendre les règles WCAG 2.3](/fr/docs/Web/Accessibility/Understanding_WCAG/Operable#guideline_2.3_%e2%80%94_seizures_and_physical_reactions_do_not_design_content_in_a_way_that_is_known_to_cause_seizures_or_physical_reactions)
- [Comprendre les critères de succès WCAG 2.1 / 2.3.3 (W3C)](https://www.w3.org/WAI/WCAG21/Understanding/animation-from-interactions)

## Exemples

### Déformation horizontale et verticale

#### HTML

```html
<div>Normal</div>
<div class="scaled">Déformé</div>
```

#### CSS

```css
div {
  width: 80px;
  height: 80px;
  background-color: skyblue;
}

.scaled {
  transform: scale(0.7); /* Équivalent à scaleX(0.7) scaleY(0.7) */
  background-color: pink;
}
```

#### Résultat

{{EmbedLiveSample("Déformation_horizontale_et_verticale", "200", "200")}}

### Déformer horizontalement et verticalement avec origine déplacée

#### HTML

```html
<div>Normal</div>
<div class="scaled">Déformé</div>
```

#### CSS

```css
div {
  width: 80px;
  height: 80px;
  background-color: skyblue;
}

.scaled {
  transform: scale(2, 0.5); /* Équivalent à scaleX(2) scaleY(0.5) */
  transform-origin: left;
  background-color: pink;
}
```

#### Résultat

{{EmbedLiveSample("Déformer_horizontalement_et_verticalement_avec_origine_déplacée", "200", "200")}}

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- [`transform`](/fr/docs/Web/CSS/transform)
- [`<transform-function>`](/fr/docs/Web/CSS/transform-function)
- [`scale3d()`](</fr/docs/Web/CSS/transform-function/scale3d()>)
