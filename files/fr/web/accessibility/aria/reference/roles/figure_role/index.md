---
title: "ARIA : rôle figure"
short-title: figure
slug: Web/Accessibility/ARIA/Reference/Roles/figure_role
l10n:
  sourceCommit: a8b25483994fa47cf949b432ddf34a6bce2ddb2e
---

Le rôle `figure` peut être utilisé pour identifier une figure à l'intérieur du contenu de la page lorsque des sémantiques appropriées n'existent pas déjà. Une figure est généralement considérée comme une ou plusieurs images, extraits de code ou autres contenus qui transmettent des informations d'une manière différente de celle d'un flux de texte régulier.

## Description

Une `figure` est une section de contenu perceptible qui contient généralement un document graphique, des images, des extraits de code ou du texte d'exemple. Les parties d'une figure PEUVENT être navigables par l'utilisateur·ice. Tout contenu qui doit être regroupé et consommé comme une figure (qui pourrait inclure des images, des vidéos, de l'audio, des extraits de code ou d'autres contenus) peut être identifié comme une figure en utilisant `role="figure"`.

```html
<div role="figure" aria-labelledby="caption">
  <img src="image.png" alt="mettez la description de l'image ici" />
  <p id="caption">Figure 1&nbsp;: La légende</p>
</div>
```

Dans l'exemple ci-dessus, nous avons une figure qui se compose de deux éléments de contenu distincts : une image et une légende. Cela est enveloppé par un élément {{htmlelement("div")}} qui identifie le contenu comme une figure en utilisant `role="figure"`.

Pour HTML, utilisez les éléments {{HTMLElement('figure')}} et {{HTMLElement('figcaption')}}. Le figcaption servira de nom accessible pour la figure. Lorsque vous n'utilisez pas HTML, ou lorsque vous adaptez du HTML hérité, utilisez le [`aria-labelledby`](/fr/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-labelledby) sur la figure, pointant vers la légende de la figure.
S'il n'y a pas de légende visible, [`aria-label`](/fr/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-label) peut être utilisé.

```html
<div role="figure" aria-labelledby="figure-1">
  …
  <p id="figure-1">Texte qui décrit la figure.</p>
</div>
```

- Utilisez `aria-labelledby` lorsque le texte est une étiquette concise.
- Utilisez [`aria-describedby`](/fr/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-describedby) lorsque le texte est une description plus longue.
- Utilisez [`aria-label`](/fr/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-label) lorsque la légende de la figure n'est pas visible.

Cela peut être fait sémantiquement, sans ARIA, avec l'élément {{HTMLElement('figure')}} de HTML ainsi que {{HTMLElement('figcaption')}}.

```html
<figure>
  <img src="image.png" alt="mettez la description de l'image ici" />
  <figcaption>Figure 1&nbsp;: La légende</figcaption>
</figure>
```

> [!NOTE]
> Si possible dans votre travail, vous devriez utiliser les éléments HTML sémantiques appropriés pour marquer une figure et sa légende — {{htmlelement("figure")}} et {{htmlelement("figcaption")}}.

### Associated WAI-ARIA roles, states, and properties

- [`aria-describedby`](/fr/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-describedby)
  - : L'id d'un élément contenant un texte de référence servant de légende.
- [`aria-labelledby`](/fr/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-labelledby)
  - : L'id d'un élément contenant un texte servant d'étiquette.
- [`aria-label`](/fr/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-label)
  - : Si aucun élément contenant un texte pouvant servir d'étiquette n'est présent, vous pouvez ajouter l'étiquette directement en tant que valeur de l'attribut `aria-label` sur l'élément ayant le rôle `figure` ou sur l'élément `<figure>`.

### Interactions au clavier

Aucune interaction au clavier spécifique à ce rôle.

### Fonctionnalités JavaScript requises

Aucune exigence JavaScript spécifique au rôle. Si vous n'avez pas le contrôle sur la sémantique HTML, vous pouvez améliorer l'accessibilité de HTML en ajoutant ces rôles et propriétés avec JavaScript.

## Exemples

Nous pourrions étendre l'exemple initial sur la page pour identifier également un paragraphe qui fournit une étiquette descriptive pour la figure en faisant référence à son ID dans `aria-labelledby`&nbsp;:

```html
<div role="figure" aria-labelledby="figure-1">
  <img
    src="diagram.png"
    alt="diagramme illustrant les quatre niveaux d'excellence et leur ordre de
         priorité relatif — musique, chats, nature et crème glacée" />
  <pre>
`
        let awesome = ['music', 'cats', 'nature', 'ice cream'];
      `</pre
  >
  <p id="figure-1">Figure 1&nbsp;: Les quatre niveaux d'excellence.</p>
</div>
```

## Bonnes pratiques

N'utilisez `role="figure"` que si vous devez le faire — par exemple, si vous n'avez pas le contrôle sur votre HTML mais que vous êtes en mesure d'améliorer l'accessibilité de manière dynamique après coup avec JavaScript.

Si possible, vous devriez utiliser les éléments HTML sémantiques appropriés pour marquer une figure et sa légende — {{htmlelement("figure")}} et {{htmlelement("figcaption")}}. Par exemple, notre exemple ci-dessus devrait être réécrit comme suit&nbsp;:

```html
<figure>
  <img
    src="diagram.png"
    alt="diagramme illustrant les quatre niveaux d'excellence et leur ordre de
         priorité relatif — musique, chats, nature et crème glacée" />
  <pre>
`
    let awesome = ['music', 'cats', 'nature', 'ice cream'];
  `</pre
  >
  <figcaption>Figure 1&nbsp;: Les quatre niveaux d'excellence.</figcaption>
</figure>
```

## Spécifications

{{Specifications}}

## See also

- [Modèle d'Objet d'Accessibilité <sup>(angl.)</sup>](https://wicg.github.io/aom/spec/)
- L'[ARIA dans le HTML <sup>(angl.)</sup>](https://w3c.github.io/html-aria/)
- L'élément HTML {{HTMLElement('figure')}}
- L'élément HTML {{HTMLElement('figcaption')}}
