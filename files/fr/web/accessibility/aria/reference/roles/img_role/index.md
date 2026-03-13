---
title: "ARIA : rôle img"
short-title: img
slug: Web/Accessibility/ARIA/Reference/Roles/img_role
l10n:
  sourceCommit: 9f7e7e9075e9f2b1937d2c8000f52a8ff76bff52
---

Le rôle `img` est utilisé pour identifier plusieurs éléments à l'intérieur du contenu de la page qui doivent être considérés comme une seule image. Ces éléments sont des images, des extraits de code, du texte, des emojis ou d'autres contenus qui peuvent être combinés pour transmettre des informations de manière visuelle.

```html
<div role="img" aria-label="Description de l'image globale">
  <img src="graphic1.png" alt="" />
  <img src="graphic2.png" alt="" />
</div>
```

## Description

N'importe quel ensemble de contenu qui doit être consommé comme une seule image (qui peut inclure des images, des vidéos, de l'audio, des extraits de code, des emojis ou d'autres contenus) peut être identifié à l'aide de `role="img"`.

Vous ne devez pas compter sur le texte alternatif des images individuelles pour transmettre le contexte aux technologies d'assistance&nbsp;; la plupart des lecteurs d'écran considèrent l'élément avec `role="img"` comme une boîte noire et n'accèdent pas aux éléments individuels à l'intérieur. Par conséquent, fournissez une description globale et complète de l'image, soit dans le texte autour de l'image, soit en utilisant l'attribut [`aria-label`](/fr/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-label). Ajoutez également des attributs `alt` aux images individuelles afin que les moteurs de recherche et les utilisateur·ice·s voyants puissent voir ce texte si une image ne s'affiche pas&nbsp;:

```html
<div role="img" aria-label="Description of the overall image">
  <img src="graphic1.png" alt="alternative text" />
  <img src="graphic2.png" alt="in case the images don't load" />
</div>
```

Si vous souhaitez ajouter une légende ou un label à votre image qui est visible sur la page, vous pouvez le faire en utilisant&nbsp;:

- [`aria-labelledby`](/fr/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-labelledby) lorsque le texte est un label concis.
- [`aria-describedby`](/fr/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-describedby) lorsque le texte est une description plus longue.

Par exemple&nbsp;:

```html
<div role="img" aria-labelledby="image-1">
  …
  <p id="image-1">Texte qui décrit le groupe d'images.</p>
</div>
```

Si une image est purement présentational, envisagez d'utiliser le rôle [`presentation`](/fr/docs/Web/Accessibility/ARIA/Reference/Roles/presentation_role).

### Le SVG et role="img"

Si vous utilisez des images SVG intégrées dans votre page, il est judicieux de définir `role="img"` sur l'élément {{SVGElement('svg')}} externe et de lui donner une étiquette. Cela amènera les lecteurs d'écran à le considérer comme une seule entité et à le décrire en utilisant l'étiquette, plutôt que d'essayer de lire tous les nœuds enfants&nbsp;:

```html
<svg role="img" aria-label="Description de votre image SVG">
  <!-- contenu de l'image SVG -->
</svg>
```

### Utilisation de role="img" pour conférer un sens qui est obscurci ou implicite

Dans certains cas, les utilisateur·ice·s de technologies d'assistance ne peuvent pas comprendre le sens du contenu exprimé de certaines manières, à travers certains médias, ou implicite de certaines manières. Cela est évident à corriger dans le cas des images (vous pouvez utiliser l'attribut `alt`), mais dans le cas de contenus mixtes ou d'autres types de contenus, ce n'est pas si évident, et `role="img"` peut entrer en jeu.

Par exemple, si vous utilisez des emojis dans votre texte, le sens peut être évident pour un·e utilisateur·ice voyant, mais quelqu'un utilisant un lecteur d'écran peut être confus car les emojis peuvent n'avoir aucune représentation textuelle du tout, ou le texte alternatif peut être déroutant et ne pas correspondre au contexte dans lequel il est utilisé. Par exemple, prenez le code suivant&nbsp;:

```html
<div role="img" aria-label="Ce chat est tellement mignon">
  <p>&#x1F408; &#x1F602;</p>
</div>
```

`&#x1F408; &#x1F602;`, 🐈 et 😂, sont des références d'entité pour des emojis lus comme «&nbsp;Chat&nbsp;» et «&nbsp;Visage avec des larmes de joie&nbsp;», mais cela n'a pas nécessairement de sens — le sens implicite est peut-être plus proche de «&nbsp;Ce chat est tellement mignon&nbsp;», donc nous incluons cela dans un `aria-label` avec `role="img"`.

Cela semble fonctionner correctement dans certaines combinaisons de navigateurs/lecteurs d'écran, mais certains d'entre eux finissent par lire l'étiquette deux fois. Utilisez avec prudence et testez soigneusement.

Un autre exemple où cela pourrait être approprié est lors de l'utilisation de combinaisons d'emojis {{Glossary("ASCII")}}, comme le légendaire «&nbsp;Table renversée&nbsp;»&nbsp;:

```html
<div role="img" aria-label="Table renversée">
  <p>(╯°□°）╯︵ ┻━┻</p>
</div>
```

Si `aria-labelledby` était utilisé, le lecteur d'écran le lirait. Dans ce cas, seuls les contenus de l'`aria-label` sont annoncés aux utilisateur·ice·s de lecteurs d'écran, cachant le charabia des caractères sans avoir besoin d'ARIA descendant pour cacher les choses, mais cachant également le contenu potentiel qui pourrait faire partie de l'image.

### Tous les descendants sont présentatifs

Il existe certains types de composants d'interface utilisateur qui, lorsqu'ils sont représentés dans une API d'accessibilité de plateforme, ne peuvent contenir que du texte. Les API d'accessibilité n'ont pas de moyen de représenter les éléments sémantiques contenus dans un `img`. Pour faire face à cette limitation, les navigateurs appliquent automatiquement le rôle [`presentation`](/fr/docs/Web/Accessibility/ARIA/Reference/Roles/presentation_role) à tous les éléments descendants de tout élément `img`, car il s'agit d'un rôle qui ne prend pas en charge les enfants sémantiques.

Par exemple, considérons le suivant élément `img`, qui contient un titre.

```html
<div role="img"><h3>Le titre de mon image</h3></div>
```

Parce que les descendants de `img` sont présentatifs, le code suivant est équivalent&nbsp;:

```html
<div role="img"><h3 role="presentation">Le titre de mon image</h3></div>
```

Du point de vue de l'utilisateur·ice de la technologie d'assistance, le titre n'existe pas puisque les extraits de code précédents sont équivalents à ce qui suit dans l'[arbre d'accessibilité](/fr/docs/Glossary/Accessibility_tree)&nbsp;:

```html
<div role="img">Le titre de mon image</div>
```

### Propriétés, états et rôles WAI-ARIA associés

- `aria-label` ou `aria-labelledby`
  - : Un nom accessible est requis. Pour l'élément HTML {{HTMLElement('img')}}, utilisez l'attribut `alt`. Pour tous les autres éléments avec le rôle `img`, utilisez `aria-labelledby` si une étiquette visible est présente, sinon utilisez `aria-label`.

## Exemples

```html
<span role="img" aria-label="Évaluation : 4 sur 5 étoiles">
  <span>★</span>
  <span>★</span>
  <span>★</span>
  <span>★</span>
  <span>☆</span>
</span>
```

## Spécifications

{{Specifications}}

## Voir aussi

- L'élément HTML {{HTMLElement('img')}}
- L'élément HTML {{SVGElement('svg')}}
- L'élément HTML {{HTMLElement('picture')}}
- L'élément HTML {{HTMLElement('audio')}}
- L'élément HTML {{HTMLElement('video')}}
- [ARIA&nbsp;: rôle `presentation`](/fr/docs/Web/Accessibility/ARIA/Reference/Roles/presentation_role)
- [Modèle d'Objet d'Accessibilité <sup>(angl.)</sup>](https://wicg.github.io/aom/spec/)
- L'[ARIA dans le HTML <sup>(angl.)</sup>](https://w3c.github.io/html-aria/)
