---
title: transform
slug: Web/CSS/transform
---

{{CSSRef}}

La propriété **`transform`** modifie l'espace de coordonnées utilisé pour la mise en forme visuelle. Grâce à cette propriété, il est possible de translater les éléments, de les tourner, d'appliquer des homothéties, de les distordre pour en changer la perspective.

{{EmbedInteractiveExample("pages/css/transform.html")}}

Si la propriété est différente de `none`, un [contexte d'empilement](/fr/docs/Web/CSS/Comprendre_z-index/L'empilement_de_couches) sera créé. Dans ce cas, l'élément agira comme le bloc englobant pour les éléments qu'il contient et qui ont `position: fixed;` ou `position: absolute;`.

> **Attention :** Seuls certains éléments peuvent être transformés. Les éléments dont la disposition est gérée avec des [boîtes en ligne non-remplacées](/fr/docs/Web/CSS/Modèle_de_mise_en_forme_visuelle#Les_éléments_en_ligne_et_les_boîtes_en_ligne), des [colonnes de tableau](/fr/docs/Web/HTML/Element/col) ou des [groupes de colonnes de tableau](/fr/docs/Web/HTML/Element/colgroup) ne peuvent pas être transformés.

## Syntaxe

```css
/* Keyword values */
transform: none;

/* Valeurs fonctionnelles */
transform: matrix(1, 2, 3, 4, 5, 6);
transform: matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);

transform: translate(12px, 50%);
transform: translateX(2em);
transform: translateY(3in);
transform: translateZ(2px);
transform: translate3d(12px, 50%, 3em);

transform: scale(2, 0.5);
transform: scaleX(2);
transform: scaleY(0.5);
transform: scaleZ(0.3);
transform: scale3d(2.5, 1.2, 0.3);

transform: skew(30deg, 20deg);
transform: skewX(30deg);
transform: skewY(1.07rad);

transform: rotate(0.5turn);
transform: rotateX(10deg);
transform: rotateY(10deg);
transform: rotateZ(10deg);
transform: rotate3d(1, 2, 3, 10deg);

transform: perspective(17px);

/* Valeurs avec plusieurs fonctions */
transform: translateX(10px) rotate(10deg) translateY(5px);
transform: perspective(500px) translate(10px, 0, 20px) rotateY(3deg);

/* Valeurs globales */
transform: inherit;
transform: initial;
transform: unset;
```

La propriété `transform` peut être définie avec le mot-clé [`none`](#none) ou une ou plusieurs valeurs de type [`<transform-function>`](#transform-function).

### Valeurs

- {{cssxref("&lt;transform-function&gt;")}}
  - : Une ou plusieurs [fonctions de transformation CSS](/fr/docs/Web/CSS/transform-function) à appliquer. Les transformations sont composées entre elles de gauche à droite, ce qui signifie que les transformations composées sont en pratique appliquées de droite à gauche.
- `none`
  - : Aucune transformation ne sera appliquée.

## Définition formelle

{{CSSInfo}}

## Syntaxe formelle

{{CSSSyntax}}

> **Note :** Si on utilise plusieurs fonctions dont [`perspective()`](</fr/docs/Web/CSS/transform-function/perspective()>), celle-ci devra apparaître en premier.

## Exemples

Voir la page sur [l'utilisation des transformations CSS](/fr/docs/Web/CSS/CSS_Transforms/Using_CSS_transforms), {(cssxref("\<transform-function>")}} ou l'exemple suivant.

### HTML

```html
<p>L'élément transformé</p>
```

### CSS

```css
p {
  border: solid red;

  -webkit-transform: translate(100px) rotate(20deg);
  -webkit-transform-origin: 0 -250px;

  transform: translate(100px) rotate(20deg);
  transform-origin: 0 -250px;
}
```

{{EmbedLiveSample("Exemples", "400", "170")}}

## Accessibilité

Les animations de déplacement ou de zoom peuvent poser des problèmes d'accessibilité en déclenchant certaines migraines. Si vous devez inclure des animations sur votre site web, vous devez fournir aux utilisateurs une méthode qui leur permette de réduire voire de désactiver les animations sur l'ensemble du site.

À cet égard, on pourra utiliser la caractéristique média [`prefers-reduced-motion`](/fr/docs/Web/CSS/@media/prefers-reduced-motion) qui permet d'utiliser une requête média pour désactiver les animations si l'utilisateur a indiqué une telle préférence via son système / son navigateur.

Pour en savoir plus :

- [MDN : Comprendre WCAG - Explications pour les lignes directrives 2.3](/fr/docs/Web/Accessibility/Understanding_WCAG/Operable#Guideline_2.3_—_Seizures_and_Physical_Reactions_Do_not_design_content_in_a_way_that_is_known_to_cause_seizures_or_physical_reactions)
- [Comprendre les critères de succès 2.3.3 - W3C - Comprendre WCAG 2.1](https://www.w3.org/WAI/WCAG21/Understanding/animation-from-interactions)

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- [Utiliser les transformations CSS](/fr/docs/Web/CSS/CSS_Transforms/Using_CSS_transforms)
- Le type de donnée {{cssxref("&lt;transform-function&gt;")}}
- [Plus d'informations sur les rotations CSS3 et les filtres matriciels sur le blog de Paul Irish](https://paulirish.com/2010/introducing-css3please/#comment-36380)
