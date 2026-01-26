---
title: "ARIA : rôle mark"
short-title: mark
slug: Web/Accessibility/ARIA/Reference/Roles/mark_role
l10n:
  sourceCommit: a8b25483994fa47cf949b432ddf34a6bce2ddb2e
---

Le rôle `mark` désigne le contenu qui est marqué ou mis en évidence à des fins de référence ou de notation, en raison de la pertinence du contenu dans le contexte environnant.

## Description

Le rôle `mark` désigne sémantiquement les éléments HTML contenant du texte qui est marqué/mis en évidence à des fins de référence. Cela est sémantiquement équivalent à l'élément HTML {{HTMLElement("mark")}}. Si possible, vous devriez utiliser cet élément à la place.

Les exemples d'utilisation de `mark` sont exactement les mêmes que ceux de l'élément `<mark>`. Ils incluent la mise en évidence de texte dans une citation qui est d'un intérêt particulier mais qui n'est pas marqué dans le matériel source original, comparable à l'utilisation d'un surligneur pour marquer des passages d'un article imprimé et indiquer des portions du contenu qui sont pertinentes pour l'activité actuelle de l'utilisateur, comme la mise en évidence des correspondances de texte trouvées par une fonction de recherche.

N'utilisez pas `mark` pour un style purement décoratif tel que la mise en surbrillance de la syntaxe.

L'élément `mark` ne doit pas se voir attribuer de nom accessible&nbsp;; les attributs [`aria-label`](/fr/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-label) et [`aria-labelledby`](/fr/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-labelledby) sont interdits sur `mark`.

## Exemples

Dans l'exemple suivant, nous avons une section de document qui a été commentée. La section commentée est marquée à l'aide de `<span role="mark">`.

```html
<p>
  La dernière moitié de la chanson est un crescendo lent qui atteint son apogée
  à la <span role="mark" aria-details="thread-1">fin du solo de guitare</span>,
  avant de s'estomper brusquement.
</p>

<div role="comment" id="thread-1" data-author="chris">
  <h3>Chris à dit</h3>
  <p class="comment-text">
    Je pense vraiment que ce moment pourrait bénéficier de plus de cowbell.
  </p>
  <p><time datetime="2022-03-30T19:29">30 mars 2022, 19:29</time></p>
</div>
```

Le commentaire associé est structuré à l'aide d'une structure HTML enveloppée dans un {{HTMLElement("div")}} contenant [`role="comment"`](/fr/docs/Web/Accessibility/ARIA/Reference/Roles/comment_role).

Pour associer le commentaire au texte commenté, nous devons envelopper le texte commenté avec un élément contenant l'attribut [`aria-details`](/fr/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-details), dont la valeur doit être l'ID du commentaire.

## Bonnes pratiques

### Préférer HTML

L'utilisation de l'élément {{HTMLElement("mark")}} communiquera automatiquement qu'une section a un rôle de `mark`. Si possible, préférez l'utiliser à la place.

## Spécifications

Fait partie de [WAI-ARIA 1.3 <sup>(angl.)</sup>](https://w3c.github.io/aria/#mark), qui est encore en cours de rédaction.

## Voir aussi

- L'élément HTML {{HTMLElement("mark")}}
