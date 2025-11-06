---
title: forced-colors
slug: Web/CSS/Reference/At-rules/@media/forced-colors
original_slug: Web/CSS/@media/forced-colors
l10n:
  sourceCommit: 0cc9980e3b21c83d1800a428bc402ae1865326b2
---

La [caractéristique média](/fr/docs/Web/CSS/Reference/At-rules/@media#caractéristiques_média) [CSS](/fr/docs/Web/CSS) **`forced-colors`** permet de détecter si l'{{Glossary("user agent", "agent utilisateur")}} a activé un mode couleurs forcées, dans lequel il impose une palette de couleurs limitée choisie par l'utilisateur·ice sur la page. Un exemple de mode couleurs forcées est le mode contraste élevé de Windows.

## Syntaxe

La caractéristique média `forced-colors` indique si le navigateur est actuellement en mode couleurs forcées ou non.

## Valeurs

- `none`
  - : Le mode couleurs forcées n'est pas actif&nbsp;; les couleurs de la page ne sont pas limitées à une palette restreinte.
- `active`
  - : Indique que le mode couleurs forcées est actif. Le navigateur fournit la palette de couleurs aux auteur·ice·s via les mots-clés de [couleurs système CSS](/fr/docs/Web/CSS/system-color) et, si nécessaire, déclenche la valeur appropriée de [`prefers-color-scheme`](/fr/docs/Web/CSS/Reference/At-rules/@media/prefers-color-scheme) afin que les auteur·ice·s puissent adapter la page. Le navigateur choisit la valeur de `prefers-color-scheme` en fonction de la clarté de la couleur système `Canvas` (voir la [spécification de color adjust <sup>(angl.)</sup>](https://drafts.csswg.org/css-color-adjust-1/#forced) pour plus de détails).

## Notes d'utilisation

### Propriétés affectées par le mode couleurs forcées

En mode couleurs forcées, les valeurs des propriétés suivantes sont traitées comme si aucune valeur définie par l'auteur·ice n'était spécifiée. Autrement dit, ce sont les valeurs définies par le navigateur qui sont utilisées. Ces valeurs imposées par le navigateur n'affectent pas la cascade des styles&nbsp;: elles sont appliquées au moment de l'affichage.

Ces valeurs imposées sont choisies parmi l'ensemble des couleurs système, ce qui garantit un contraste cohérent pour les éléments d'interface courants lorsque les utilisateur·ice·s ont activé les couleurs forcées.

- {{cssxref("color")}}
- {{cssxref("background-color")}}
- {{cssxref("text-decoration-color")}}
- {{cssxref("text-emphasis-color")}}
- {{cssxref("border-color")}}
- {{cssxref("outline-color")}}
- {{cssxref("column-rule-color")}}
- {{cssxref("-webkit-tap-highlight-color")}}
- L'[attribut SVG `fill`](/fr/docs/Web/SVG/Reference/Attribute/fill)
- L'[attribut SVG `stroke`](/fr/docs/Web/SVG/Reference/Attribute/stroke)

De plus, les propriétés suivantes ont un comportement particulier en mode couleurs forcées&nbsp;:

- {{cssxref("box-shadow")}} est forcée à «&nbsp;none&nbsp;»
- {{cssxref("text-shadow")}} est forcée à «&nbsp;none&nbsp;»
- {{cssxref("background-image")}} est forcée à «&nbsp;none&nbsp;» pour les valeurs qui ne sont pas basées sur une URL
- {{cssxref("color-scheme")}} est forcée à «&nbsp;light dark&nbsp;»
- {{cssxref("scrollbar-color")}} est forcée à «&nbsp;auto&nbsp;»

Les couleurs système imposées pour les propriétés ci-dessus dépendent du contexte de l'élément. Par exemple, la propriété {{cssxref("color")}} sur un bouton sera forcée à `ButtonText`. Sur un texte normal, elle sera forcée à `CanvasText`. Voir la [liste des couleurs système](/fr/docs/Web/CSS/system-color) pour plus de détails sur les cas d'utilisation selon le contexte d'interface.

> [!NOTE]
> Les agents utilisateur choisissent les couleurs système en fonction de la sémantique native des éléments, _pas_ selon les rôles ARIA ajoutés.
> Par exemple, ajouter `role="button"` à une `div` **ne** forcera **pas** la couleur de l'élément à `ButtonText`.

En plus de ces ajustements, les navigateurs aident à garantir la lisibilité du texte en dessinant des «&nbsp;plaques de fond&nbsp;» derrière le texte. Cela est particulièrement important pour préserver le contraste lorsque le texte est placé sur des images.

Il existe certains cas où l'agent utilisateur ne force pas les valeurs des propriétés ci-dessus&nbsp;:

Lorsque {{cssxref("forced-color-adjust")}} est défini à `none` sur un élément, aucune des valeurs de couleurs forcées ne s'applique et les styles auteur·ice sont utilisés normalement. De plus, la plaque de fond du texte est désactivée.

Lorsque {{cssxref("forced-color-adjust")}} est défini à `preserve-parent-color` sur un élément, et que la valeur de {{cssxref("color")}} sur l'élément n'est pas héritée de son parent, alors l'élément se comporte comme si `preserve-parent-color` était défini à `none`.

Lorsqu'une [couleur système](/fr/docs/Web/CSS/system-color) est spécifiée, elle sera utilisée à la place de la valeur qui aurait été forcée.

Vous pouvez également utiliser les couleurs système avec toute propriété _autre_ que celles listées ci-dessus, afin de garantir que le reste de la page s'intègre à la palette de couleurs restreinte disponible en mode couleurs forcées.

### Problèmes d'accessibilité

En général, les auteur·ice·s web ne doivent **pas** utiliser la caractéristique média `forced-colors` pour créer un design séparé pour les utilisateur·ice·s ayant activé cette fonctionnalité. Son usage est plutôt destiné à apporter de petits ajustements pour améliorer l'utilisabilité ou la lisibilité lorsque l'application par défaut des couleurs forcées ne fonctionne pas bien pour une partie donnée d'une page.

Le contraste élevé fourni par la palette réduite du mode couleurs forcées et les plaques de fond du texte est souvent essentiel pour que certain·e·s utilisateur·ice·s puissent lire ou utiliser un site web. Les ajustements qui affectent le contenu doivent donc être choisis avec soin et ciblés sur le contenu qui, autrement, ne serait pas lisible.

### Préférences utilisateur

Cette caractéristique média n'est active que si l'utilisateur·ice a activé des préférences de schéma de couleurs dans son système d'exploitation. Un exemple de cette fonctionnalité est le mode contraste élevé de Windows.

## Exemples

> [!NOTE]
> L'exemple ci-dessous ne fonctionnera que dans un navigateur prenant en charge cette caractéristique média, et avec une préférence telle que le mode contraste élevé activée dans votre système d'exploitation.

Cet exemple est un bouton qui obtient normalement son contraste via {{cssxref("box-shadow")}}. En mode couleurs forcées, box-shadow est forcé à none, donc l'exemple utilise la caractéristique média forced-colors pour s'assurer qu'il y a une bordure de la couleur appropriée (ButtonText dans ce cas).

### HTML

```html
<button class="button">Appuyez sur moi&nbsp;!</button>
```

### CSS

```css
.button {
  border: 0;
  padding: 10px;
  box-shadow:
    -2px -2px 5px gray,
    2px 2px 5px gray;
}

@media (forced-colors: active) {
  .button {
    /* Use a border instead, since box-shadow is forced to 'none' in forced-colors mode */
    border: 2px ButtonText solid;
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

- {{cssxref("@media")}}
- [Adapter l'affichage pour le contraste élevé de Windows avec les standards des couleurs forcées <sup>(angl.)</sup>](https://blogs.windows.com/msedgedev/2020/09/17/styling-for-windows-high-contrast-with-new-standards-for-forced-colors/)
- {{cssxref("forced-color-adjust")}}
