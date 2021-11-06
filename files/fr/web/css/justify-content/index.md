---
title: justify-content
slug: Web/CSS/justify-content
tags:
  - CSS
  - Propriété
  - Reference
  - flexbox
translation_of: Web/CSS/justify-content
---
{{CSSRef}}

La propriété CSS **`justify-content`** indique la façon dont l'espace doit être réparti entre et autour des éléments selon [l'axe principal](/fr/docs/Web/CSS/CSS_Box_Alignment#Concepts_majeurs_et_terminologie) d'un conteneur flexible ou selon l'axe en ligne lorsque le conteneur est une grille.

L'exemple suivant illustre le fonctionnement des valeurs de cette propriété au sein d'une grille CSS.

{{EmbedInteractiveExample("pages/css/justify-content.html")}}

L'alignement est appliqué après que les longueurs et les marges automatiques ont été appliquées. Dans une disposition utilisant les boîtes flexibles, cela signifie que s'il existe au moins un élément flexible pour lequel {{cssxref("flex-grow")}} est différent de `0`, `justify-content` n'aura aucun effet car il n'y aura plus d'espace disponible.

## Syntaxe

```css
/* Alignement « géométrique » */
justify-content: center;     /* Éléments groupés au centre */
justify-content: start;      /* Éléments groupés au début */
justify-content: end;        /* Éléments groupés à la fin */
justify-content: flex-start; /* Éléments flexibles groupés au début */
justify-content: flex-end;   /* Éléments flexibles groupés à la fin */
justify-content: left;       /* Éléments groupés à gauche */
justify-content: right;      /* Éléments groupés à droite */

/* Alignement par rapport à la ligne de base */
/* justify-content ne prend pas de valeurs relatives à la ligne de base */

/* Alignement normal */
justify-content: normal;

/* Alignement distribué */
justify-content: space-between; /* Les éléments sont répartis équitablement
                                   Le bord du premier est aligné sur le
                                   début du conteneur et la fin du dernier
                                   est alignée sur la fin du conteneur */
justify-content: space-around;  /* Les éléments sont répartis équitablement
                                   À chaque extrémité, entre le bord du
                                   conteneur et le premier/dernier élément
                                   on a la moitié de l'espace appliqué entre
                                   chaque élément */
justify-content: space-evenly;  /* Les éléments sont répartis équitablement
                                   Tous les éléments sont séparés par le même
                                   espace */
justify-content: stretch;       /* Les éléments sont répartis équitablement et
                                   les éléments dimensionnés avec 'auto' sont
                                   étirés afin de remplir le conteneur */

/* Alignement pour le dépassement */
justify-content: safe center;
justify-content: unsafe center;

/* Valeurs globales */
justify-content: inherit;
justify-content: initial;
justify-content: unset;
```

### Valeurs

- `start`
  - : Les éléments sont regroupés au début du conteneur selon l'axe principal. Le bord du premier élément est aligné avec le bord du conteneur.
- `end`
  - : Les éléments sont regroupés à la fin du conteneur selon l'axe principal. Le bord du dernier élément est aligné avec le bord du conteneur.
- `flex-start`
  - : Les éléments sont regroupés vers le début du conteneur, selon l'axe principal et le sens du conteneur flexible.
    Cette valeur ne s'applique qu'aux éléments flexibles. Pour les éléments qui ne sont pas dans un conteneur flexible, cette valeur est synonyme de `start`.
- `flex-end`
  - : Les éléments sont regroupés vers la fin du conteneur, selon l'axe principal et le sens du conteneur flexible.
    Cette valeur ne s'applique qu'aux éléments flexibles. Pour les éléments qui ne sont pas dans un conteneur flexible, cette valeur est synonyme de `end`.
- `center`
  - : Les éléments sont regroupés au centre du conteneur selon l'axe principal.
- `left`
  - : Les éléments sont regroupés vers le bord gauche du conteneur. Si l'axe n'est pas parallèle à l'axe en ligne, cette valeur est synonyme de `start`.
- `right`
  - : Les éléments sont regroupés vers le bord droit du conteneur. Si l'axe n'est pas parallèle à l'axe en ligne, cette valeur est synonyme de `start`.
- `normal`
  - : Les éléments sont groupés sur leur position par défaut, comme si `justify-content` n'avait pas été utilisé. Cette valeur se comporte comme `stretch` dans les conteneurs de grille et les conteneurs flexibles.
- `space-between`
  - : Les éléments ont espacés équitablement selon l'axe principal. L'espace utilisé entre chaque élément est le même. Le premier élément est aligné sur le bord du conteneur et le dernier élément est aussi aligné sur le bord de l'élément.
- `space-around`
  - : Les éléments ont espacés équitablement selon l'axe principal. L'espace utilisé entre chaque élément est le même. L'espace entre le bord du conteneur et le premier élément et l'espace entre le dernier élément et le bord du conteneur représente la moitié de l'espace entre deux éléments.
- `space-evenly`
  - : Les éléments sont espacés équitablement. L'espace utilisé entre chaque élément, entre le bord du conteneur et le premier élément, et entre le dernier élément et le bord du conteneur est le même.
- `stretch`
  - : Si la somme des tailles des éléments sur l'axe principal est inférieure à la taille du conteneur, tous les éléments dimensionnés avec `auto` sont agrandis avec le même supplément, tout en respectant les contraintes imposées par {{cssxref("max-height")}}/{{cssxref("max-width")}} (ou par les fonctionnalités analogues). Ainsi, l'ensemble des éléments remplit exactement le conteneur sur l'axe principal.
    La valeur `stretch` n'est pas prise en charge pour les boîtes flexibles (_flexbox_)
- `safe`
  - : Cette valeur doit être utilisée avec un mot-clé pour l'alignement. Si le mot-clé choisi indique que le dépassement de l'objet entraîne la perte de donnée, alors l'élément sera plutôt aligné avec la valeur `start`.
- `unsafe`
  - : Cette valeur doit être utilisée avec un mot-clé pour l'alignement. Quelle que soit la situation de dépassement ou les contraintes de taille, la valeur utilisée pour l'alignement est respectée.

### Syntaxe formelle

{{csssyntax}}

## Exemples

### CSS

```css
#container {
  display: flex;
  /* Cette valeur peut être changée dans l'exemple */
  justify-content: space-between;
}

#container > div {
  width: 100px;
  height: 100px;
  background: linear-gradient(-45deg, #788cff, #b4c8ff);
}
```

```html hidden
<div id="container">
  <div></div>
  <div></div>
  <div></div>
</div>
<select id="justifyContent">
  <option value="start">start</option>
  <option value="end">end</option>
  <option value="flex-start">flex-start</option>
  <option value="flex-end">flex-end</option>
  <option value="center">center</option>
  <option value="left">left</option>
  <option value="right">right</option>
  <option value="baseline">baseline</option>
  <option value="first baseline">first baseline</option>
  <option value="last baseline">last baseline</option>
  <option value="space-between" selected>space-between</option>
  <option value="space-around">space-around</option>
  <option value="space-evenly">space-evenly</option>
  <option value="stretch">stretch</option>
</select>
```

```js hidden
var justifyContent = document.getElementById("justifyContent");
justifyContent.addEventListener("change", function (evt) {
  document.getElementById("container").style.justifyContent =
      evt.target.value;
});
```

### Résultat

{{EmbedLiveSample("Exemples", "100%", 140)}}

## Spécifications

| Spécification                                                                                                | État                                     | Commentaires                                                                                                        |
| ------------------------------------------------------------------------------------------------------------ | ---------------------------------------- | ------------------------------------------------------------------------------------------------------------------- |
| {{SpecName('CSS3 Flexbox', '#propdef-justify-content', 'justify-content')}}         | {{Spec2('CSS3 Flexbox')}}         | Définition initiale.                                                                                                |
| {{SpecName('CSS3 Box Alignment', '#propdef-justify-content', 'justify-content')}} | {{Spec2('CSS3 Box Alignment')}} | Ajout des valeurs `space-evenly, [ first \| last ]? baseline`, `start`, `end`, `left`, `right`, `safe` et `unsafe`. |

{{cssinfo}}

## Compatibilité des navigateurs

### Prise en charge pour les dispositions flexibles

{{Compat("css.properties.justify-content.flex_context")}}

### Prise en charge pour les grilles

{{Compat("css.properties.justify-content.grid_context")}}

## Voir aussi

- Guide sur les boîtes flexibles : _[Les concepts de bases](/fr/docs/Web/CSS/Disposition_flexbox_CSS/Concepts_de_base_flexbox)_
- Guide sur les boîtes flexibles : _[Aligner des objets dans un conteneur flexible](/fr/docs/Web/CSS/Disposition_flexbox_CSS/Aligner_des_éléments_dans_un_conteneur_flexible)_
- Guide sur les grilles : _[Aligner des objets dans une grille](/fr/docs/Web/CSS/CSS_Grid_Layout/Alignement_des_boîtes_avec_les_grilles_CSS)_
- [Le module de spécification CSS Box Alignment](/fr/docs/Web/CSS/CSS_Box_Alignment)
