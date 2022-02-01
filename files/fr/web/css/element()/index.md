---
title: element
slug: Web/CSS/element()
tags:
  - CSS
  - Fonction
  - Reference
translation_of: Web/CSS/element()
---
{{CSSRef}}{{SeeCompatTable}}

La fonction **`element()`** définit une valeur {{cssxref("&lt;image&gt;")}} générée à partir d'un élément HTML arbitraire. L'image est calculée dynamiquement : si l'élément HTML change, les propriétés CSS utilisant la valeur seront automatiquement mis à jour.

Un scénario pour lequel cette fonction est particulièrement utile : on génère une image dans un élément HTML {{HTMLElement("canvas")}} et on l'utilise comme arrière-plan.

Pour les navigateurs basés sur Gecko, on peut utiliser la méthode {{domxref("document.mozSetImageElement()")}} pour modifier l'élément utilisé comme arrière-plan pour un `background` CSS donné.

## Syntaxe

    element(id)

### Paramètres

- **`id`**
  - : L'identifiant (correspondant à l'attribut {{htmlattrxref("id")}}) de l'élément HTML visé.

## Exemples

### Un premier exemple réaliste

#### CSS

```css
.exemple {
  width: 400px;
  height: 400px;
  background: -moz-element(#monArrierePlan) no-repeat;

}

.paragraphe {
  transform-origin: 0 0;
  transform: rotate(45deg);
  color: white;
}

#monArrierePlan{
  width: 1024px;
  height: 1024px;
  background-image: linear-gradient(to right, red, orange, yellow, white);
}
.cache {
  overflow: hidden;
  height: 0;
}
```

#### HTML

```html
<div class="exemple">
  <p>
    Cet élément utilise l'élément
    #monArrierePlan comme image
    de fond !
  </p>
</div>

<div class="cache">
  <div id="monArrierePlan">
    <p class="paragraphe">
      Et voici un texte inscrit sur
      l'arrière-plan.
    </p>
  <div>
<div>
```

#### Résultat

Pour les navigateurs qui prennent en charge `element`, on peut ici voir un arrière-plan généré avec un paragraphe HTML.

{{EmbedLiveSample("Un_premier_exemple_réaliste","400","400")}}

### Un second exemple plus méchant

#### CSS

```css
.exemple {
  width: 400px;
  height: 100px;
  background: -moz-element(#monArrierePlan);
}

.cache {
  overflow: hidden;
  height: 0;
}
```

#### HTML

```html
<div class="exemple"></div>

<div class="cache">
  <button id="monArrierePlan" type="button">
    Méchant bouton
  </button>
</div>
```

#### Résultat

{{EmbedLiveSample("Un_second_exemple_plus_méchant","400","400")}}

## Spécifications

| Spécification                                                                                                                        | État                             | Commentaires      |
| ------------------------------------------------------------------------------------------------------------------------------------ | -------------------------------- | ----------------- |
| {{SpecName('CSS4 Images', '#element-notation', 'Using Elements as Images: the element() notation')}} | {{Spec2('CSS4 Images')}} | Reporté pour CSS4 |

## Compatibilité des navigateurs

{{Compat("css.types.image.element")}}

## Voir aussi

- {{domxref("document.mozSetImageElement()")}}
- {{cssxref("_image", "image()")}}
- {{cssxref("image-set", "image-set()")}}
- {{cssxref("&lt;image&gt;")}}
- {{cssxref("&lt;gradient&gt;")}}
- {{cssxref("element()")}}
- {{cssxref("cross-fade")}}
- {{domxref("document.mozSetImageElement()")}}
