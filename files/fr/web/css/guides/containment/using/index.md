---
title: Utiliser la compartimentation CSS
short-title: Utiliser la compartimentation
slug: Web/CSS/Guides/Containment/Using
l10n:
  sourceCommit: 85fccefc8066bd49af4ddafc12c77f35265c7e2d
---

La compartimentation CSS améliore les performances des pages web en permettant au navigateur d'isoler un sous-arbre de la page du reste de la page. Si le navigateur sait qu'une partie de la page est indépendante du reste du contenu, le rendu peut être optimisé et les performances améliorées.

Les propriétés {{CSSxRef("contain")}} et {{CSSxRef("content-visibility")}} permettent aux développeur·euse·s d'informer les agents utilisateurs si un élément doit ou non rendre son contenu, et s'il doit rendre son contenu lorsqu'il est hors écran. L'agent utilisateur applique ensuite la compartimentation aux éléments lorsque c'est approprié, en différant potentiellement la mise en page et le rendu jusqu'à ce que cela soit nécessaire.

Ce guide décrit les objectifs de base de la compartimentation CSS et comment tirer parti de `contain` et `content-visibility` pour une meilleure expérience utilisateur·ice.

## Exemple simple

Les pages web contiennent souvent plusieurs sections qui sont, logiquement, indépendantes les unes des autres. La compartimentation CSS permet de les traiter de manière réellement indépendante les unes des autres en ce qui concerne le rendu.

Par exemple, les blogs contiennent généralement plusieurs articles, chacun contenant un titre et un contenu, comme dans le balisage ci-dessous.

```html
<h1>Mon blog</h1>
<article>
  <h2>Titre d'un bel article</h2>
  <p>Contenu ici.</p>
</article>
<article>
  <h2>Titre d'un autre article</h2>
  <p>Autre contenu ici.</p>
</article>
```

Avec CSS, nous appliquons la propriété {{CSSxRef("contain")}} avec une valeur de `content` à chaque article. La valeur `content` est un raccourci pour `contain: layout paint style`&nbsp;:

```css
article {
  contain: content;
}
```

En toute logique, chaque article est indépendant des autres articles de la page. Cette information est généralement connue, même évidente, pour le·la développeur·euse web qui crée la page.
Cependant, les navigateurs ne connaissent pas l'intention derrière votre contenu et ne peuvent pas supposer qu'un article ou toute autre section de contenu est entièrement autonome.

Cette propriété permet d'expliquer cela au navigateur et de lui donner l'autorisation explicite de procéder à des optimisations de performances.
Elle indique au navigateur que la mise en page interne de l'élément est totalement distincte du reste de la page, et que tout ce qui concerne cet élément est affiché à l'intérieur de ses limites. Rien ne peut déborder de manière visible.

En définissant `contain: content` sur chaque élément `<article>`, nous avons indiqué ceci&nbsp;; nous avons signalé au navigateur que chaque article est indépendant. Le navigateur peut alors utiliser cette information pour décider de la manière de rendre chaque élément `<article>` de contenu. Par exemple, il peut ne pas afficher les articles situés en dehors de la zone visible.

Lorsque des éléments supplémentaires sont ajoutés à la fin de la page, le navigateur n'a pas besoin de recalculer la mise en page ni de rafraîchir l'affichage du contenu précédent&nbsp;; il n'a pas non plus besoin d'intervenir sur une zone située en dehors de la sous-arborescence de l'élément conteneur. En revanche, si les propriétés du modèle de boîte sont dépendantes, le navigateur doit recalculer la mise en page et rafraîchir l'affichage. Par exemple, si un `<article>` est mis en forme de telle sorte que sa taille dépende de son contenu (par exemple, avec `height: auto`), le navigateur doit alors tenir compte de ce changement de taille.

## Concepts clés et terminologie

### Valeurs de `contain`

Il existe quatre types de compartimentation&nbsp;: mise en page, peinture, taille et style. Utilisez la propriété {{CSSxRef("contain")}} pour définir le ou les types que vous souhaitez appliquer à un élément en incluant n'importe quelle combinaison de ces types.

#### Compartimentation de la mise en page

```css
article {
  contain: layout;
}
```

La mise en page est normalement limitée à l'ensemble du document, ce qui signifie que si vous déplacez un élément, l'ensemble du document doit être traité comme si les choses pouvaient se déplacer n'importe où. En utilisant `contain: layout`, vous pouvez indiquer au navigateur qu'il n'a besoin de vérifier que cet élément — tout ce qui se trouve à l'intérieur de l'élément est limité à cet élément et n'affecte pas le reste de la page, la boîte contenant établissant un [contexte de formatage](/fr/docs/Web/CSS/Guides/Display/Formatting_contexts) indépendant.

En outre&nbsp;:

- La mise en page avec {{CSSxRef("float")}} est effectuée indépendamment à l'intérieur de l'élément défini.
- Les marges ne se chevauchent pas à travers une limite de compartimentation de la mise en page.
- Le conteneur de mise en page est un [bloc contenant](/fr/docs/Web/CSS/Guides/Display/Containing_block) pour les descendants positionnés en `absolute` et `fixed`.
- La boîte contenant crée un [contexte d'empilement](/fr/docs/Web/CSS/Guides/Positioned_layout/Stacking_context), donc {{CSSxRef("z-index")}} peut être utilisé.

> [!NOTE]
> Les valeurs `style` et `layout` de `contain` sont automatiquement appliquées lors de l'utilisation des propriétés {{CSSxRef("container-type")}} et {{CSSxRef("container-name")}}.

#### Compartimentation de la peinture

```css
article {
  contain: paint;
}
```

La compartimentation de la peinture découpe essentiellement la boîte jusqu'au bord de remplissage de la [boîte principale](/fr/docs/Web/CSS/Guides/Display/Visual_formatting_model#la_boîte_principale). Il ne peut y avoir aucun débordement visible. Les mêmes notes supplémentaires sont vraies pour la compartimentation de la peinture que pour la compartimentation de la mise en page (voir ci-dessus).

Un autre avantage est que si l'élément avec la compartimentation appliquée est hors écran, le navigateur n'a pas besoin de peindre ses éléments enfants — ceux-ci sont également hors écran, car ils sont complètement contenus par cette boîte.

#### Compartimentation de la taille

```css
article {
  contain: size;
}
```

La compartimentation de taille n'apporte pas grand-chose en termes d'optimisation des performances lorsqu'elle est utilisée seule. Cependant, la compartimentation de taille signifie que la taille des enfants de l'élément dont la taille est compartimentée ne peuvent pas influencer la taille de l'élément lui-même — sa taille est calculée comme s'il n'avait pas d'enfants.

Si vous définissez `contain: size` sur un élément, vous devez définir la taille de l'élément en utilisant {{CSSxRef("contain-intrinsic-size")}}, ou les propriétés abrégées {{CSSxRef("contain-intrinsic-width")}} et {{CSSxRef("contain-intrinsic-height")}}, dans cet ordre. Si aucune taille n'est définie, l'élément risque d'avoir une taille nulle dans la plupart des cas.

```css
article {
  contain: size;
  contain-intrinsic-size: 100vw auto none;
}
```

#### Compartimentation de style

```css
article {
  contain: style;
}
```

Malgré son nom, la compartimentation de style ne fournit pas de styles encapsulés comme vous l'obtenez avec le [DOM d'ombre](/fr/docs/Web/API/Web_components/Using_shadow_DOM) ou {{CSSxRef("@scope")}}.
Le principal cas d'utilisation de la valeur `style` est de prévenir les situations où un [compteur CSS](/fr/docs/Web/CSS/Guides/Counter_styles/Using_counters) peut être modifié dans un élément, ce qui peut ensuite affecter le reste de l'arborescence.

Utiliser `contain: style` garantit que les propriétés {{CSSxRef("counter-increment")}} et {{CSSxRef("counter-set")}} créent de nouveaux compteurs limités à ce sous-arbre uniquement.

Vous pouvez inclure plus d'un type de compartimentation en incluant plusieurs valeurs séparées par des espaces, comme `contain: layout paint` ou en utilisant l'une des deux [valeurs spéciales](#valeurs_spéciales).

#### Valeurs spéciales

Il existe deux valeurs spéciales de `contain` qui sont des raccourcis pour les trois premiers ou les quatre types de compartimentation&nbsp;:

- `content`
- `strict`

Nous avons rencontré la première dans l'exemple ci-dessus. L'utilisation de `contain: content` active la compartimentation `layout`, `paint` et `style`. Comme elle omet `size`, c'est une valeur sûre à appliquer largement.

La déclaration `contain: strict`, qui se comporte de la même manière que la déclaration `contain: size layout paint style` (qui inclut quatre valeurs séparées par des espaces), offre la compartimentation la plus complète. Il est plus risqué de l'utiliser, car elle applique la compartimentation `size`&nbsp;; le risque existe qu'une boîte puisse finir avec une taille nulle en raison d'une dépendance à la taille de ses enfants.

Pour éliminer ce risque, définissez toujours une taille lors de l'utilisation de `strict`&nbsp;:

```css
article {
  contain: strict;
  contain-intrinsic-size: 80vw auto none;
}
```

L'exemple ci-dessus est équivalent à&nbsp;:

```css
article {
  contain: size layout paint style;
  contain-intrinsic-size: 80vw auto none;
}
```

### `content-visibility`

Lorsque vous avez beaucoup de contenu qui bénéficie d'une compartimentation lourde et qui est souvent hors écran — par exemple si tous vos articles de blog sont visibles sur les pages d'accueil du blog comme un blog à défilement infini — `content-visibility: auto` peut être utilisé pour appliquer toutes les compartimentations en une seule fois.

La propriété {{CSSxRef("content-visibility")}} contrôle si un élément rend ou non son contenu, tout en appliquant un ensemble solide de compartimentations, permettant aux agents utilisateurs de potentiellement omettre de grandes portions de travail de mise en page et de rendu jusqu'à ce que cela devienne nécessaire. Elle permet à l'agent utilisateur de sauter le travail de rendu d'un élément (y compris la mise en page et la peinture) jusqu'à ce qu'il soit nécessaire — ce qui rend le chargement initial de la page beaucoup plus rapide.

Ses valeurs possibles sont&nbsp;:

- `visible`&nbsp;: comportement par défaut — le contenu d'un élément est mis en page et affiché normalement.
- `hidden`&nbsp;: l'élément [ignore son contenu](#ignorer_le_contenu). Le contenu ignoré n'est pas accessible aux fonctionnalités de l'agent utilisateur telles que la recherche dans la page, la navigation par ordre de tabulation, etc., et ne peut ni être sélectionné ni recevoir une sélection.
- `auto`&nbsp;: l'élément active le confinement de mise en page, le confinement de style et le confinement de rendu, comme si la propriété `contain: content` était définie. Si l'élément n'est pas [pertinent pour l'utilisateur·ice](#pertinent_pour_lutilisatrice_et_lutilisateur), il ignore également son contenu. Contrairement à `hidden`, le contenu ignoré reste accessible aux interactions de l'utilisateur·ice, pouvant toujours recevoir une sélection, être mis en évidence, figurer dans l'ordre de tabulation normal et être recherché dans le contenu.

### Pertinent pour l'utilisatrice et l'utilisateur

Les agents utilisateurs ont un concept de contenu [pertinent pour l'utilisateur·ice <sup>(angl.)</sup>](https://drafts.csswg.org/css-contain/#relevant-to-the-user). Un élément devient «&nbsp;pertinent pour l'utilisateur·ice&nbsp;» si l'une des conditions suivantes est remplie&nbsp;:

- L'élément apparaît dans la zone d'affichage (<i lang="en">viewport</i> en anglais), ou dans une marge définie par l'agent utilisateur autour de la zone visible (50 % des dimensions de la zone visible, pour donner à l'application le temps de se préparer lorsque la visibilité de l'élément change).
- L'élément ou son contenu reçoit la sélection.
- L'élément ou son contenu est sélectionné, par exemple en faisant glisser le curseur de la souris sur le texte ou par une autre opération de surlignage.
- L'élément ou son contenu est placé dans la {{Glossary("top layer", "couche supérieure")}}.

Lorsque `content-visibility: auto` est défini, et que le navigateur détermine que le contenu est pertinent pour l'utilisateur·ice, le navigateur rend ce contenu.

### Ignorer le contenu

Lorsque vous définissez `content-visibility: hidden` sur un élément, vous indiquez au navigateur qu'il n'est pas pertinent pour l'utilisateur·ice, et que par conséquent son [contenu doit être ignoré <sup>(angl.)</sup>](https://drafts.csswg.org/css-contain/#skips-its-contents) et ne doit pas être rendu. Cela permet d'améliorer les performances.

Le navigateur ignore également le contenu d'un élément lorsque `content-visibility: auto` est défini dessus, et que le navigateur détermine que son contenu n'est pas pertinent pour l'utilisateur·ice.

Lorsque un élément ignore son contenu&nbsp;:

- Il a la mise en page, le style, la peinture et la taille compartimentés.
- Son contenu n'est pas peint, comme si {{CSSxRef("visibility", "visibility: hidden")}} était défini dessus.
- Son contenu ne reçoit pas d'évènements de pointeur, comme si {{CSSxRef("pointer-events", "pointer-events: none")}} était défini dessus.

Cela se produit dans les deux cas mentionnés ci-dessus, mais avec `content-visibility: auto`, le contenu peut être recherché, recevoir la sélection et passer d'un état non pertinent à pertinent. Ce n'est pas le cas pour `content-visibility: hidden`.

> [!NOTE]
> Pour animer la transition de `content-visibility: hidden` à une valeur visible, vous devez définir {{CSSxRef("transition-behavior", "transition-behavior:&nbsp;allow-discrete")}} et les styles {{CSSxRef("@starting-style")}}. Voir [transition avec `display` et `content-visibility`](/fr/docs/Web/CSS/Guides/Transitions/Using#faire_une_transition_de_display_et_content-visibility) pour en savoir plus.

## Voir aussi

- Le module [de compartimentation CSS containment module](/fr/docs/Web/CSS/Guides/Containment)
- [Apprendre&nbsp;: optimisation des performances CSS](/fr/docs/Learn_web_development/Extensions/Performance/CSS)
- [Les requêtes de conteneur CSS](/fr/docs/Web/CSS/Guides/Containment/Container_queries)
- [Une introduction à la compartimentation CSS <sup>(angl.)</sup>](https://blogs.igalia.com/mrego/2019/01/11/an-introduction-to-css-containment/) sur Igalia.com (2019)
- L'évènement {{DOMxRef("element/contentvisibilityautostatechange_event", "contentvisibilityautostatechange")}}
