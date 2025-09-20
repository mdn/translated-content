---
title: "ARIA : rôle comment"
short-title: comment
slug: Web/Accessibility/ARIA/Reference/Roles/comment_role
l10n:
  sourceCommit: a8b25483994fa47cf949b432ddf34a6bce2ddb2e
---

Le rôle `comment` désigne sémantiquement un commentaire/réaction à un contenu sur la page, ou à un commentaire précédent.

> [!NOTE]
> Le rôle `comment` est proposé dans WAI-ARIA 1.3 ([Dernière version préliminaire de l'ARIA <sup>(angl.)</sup>](https://w3c.github.io/aria/)), qui est encore en cours de rédaction.

## Exemples

Dans l'exemple suivant, nous avons une section de document qui a été commentée. La section commentée est marquée à l'aide de `<span role="mark">`.

Le commentaire associé est marqué à l'aide d'une structure HTML enveloppée dans un `<div>` contenant `role="comment"`.

```html
<p>
  La dernière moitié de la chanson est un crescendo lent qui atteint son apogée
  à la
  <span role="mark" aria-details="thread-1">fin du solo de guitare</span>, avant
  de s'estomper brusquement.
</p>

<div role="comment" id="thread-1" data-author="chris">
  <h3>Chris a dit</h3>
  <p class="comment-text">
    Je pense vraiment que ce moment pourrait bénéficier de plus de cowbell.
  </p>
  <p><time datetime="2019-03-30T19:29">30 mars 2019, 19:29</time></p>
</div>
```

Pour associer le commentaire avec le texte commenté, nous devons envelopper le texte commenté avec un élément contenant l'attribut [`aria-details`](/fr/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-details), dont la valeur doit être l'ID du commentaire.

### Commentaires multiples

Puisque `aria-details` peut maintenant accepter plusieurs ID, nous pouvons associer plusieurs commentaires à la même annotation, comme ceci&nbsp;:

```html
<p>
  La dernière moitié de la chanson est un crescendo lent qui atteint son apogée
  à la
  <mark aria-details="thread-1 thread-2">fin du solo de guitare</mark>, avant de
  s'estomper brusquement.
</p>

<div role="comment" id="thread-1" data-author="chris">
  <h3>Chris à dit</h3>
  <p class="comment-text">
    Je pense vraiment que ce moment pourrait bénéficier de plus de cowbell.
  </p>
  <p><time datetime="2019-03-30T19:29">30 mars 2019, 19:29</time></p>
</div>

<div role="comment" id="thread-2" data-author="chris">
  <h3>Marcus à dit</h3>
  <p class="comment-text">
    Le solo de guitare pourrait bénéficier d'une touche de plus de chorus, et
    d'un volume légèrement inférieur.
  </p>
  <p><time datetime="2019-03-29T15:35">29 mars 2019, 15:35</time></p>
</div>
```

### Commentaires imbriqués

Il est possible d'imbriquer des commentaires les uns dans les autres, comme ceci&nbsp;:

```html
<div role="comment" id="thread-1" data-author="chris">
  <h3>Chris à dit</h3>
  <p class="comment-text">
    Je pense vraiment que ce moment pourrait bénéficier de plus de cowbell.
  </p>
  <p><time datetime="2021-03-30T19:29">30 mars 2021, 19:29</time></p>

  <div role="comment" data-author="marcus">
    <h3>Marcus à répondu</h3>
    <p class="comment-text">
      Je ne sais pas pour ça. Je pense que le cowbell pourrait distraire du
      solo.
    </p>
    <p><time datetime="2021-03-30T21:02">30 mars 2021, 21:02</time></p>
  </div>
</div>
```

## Problèmes d'accessibilité

Aucun.

## Spécifications

Fera partie de WAI-ARIA 1.3, qui est encore en cours de rédaction.
