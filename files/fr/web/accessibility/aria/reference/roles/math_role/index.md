---
title: "ARIA : rôle math"
short-title: math
slug: Web/Accessibility/ARIA/Reference/Roles/math_role
l10n:
  sourceCommit: cac79d099b0a4e48456cb53eb2435f6acf03e188
---

Le rôle `math` indique que le contenu représente une expression mathématique.

## Description

Le contenu avec le rôle `math` est destiné à être marqué dans un format accessible tel que [MathML](/fr/docs/Web/MathML), ou avec un autre type de représentation textuelle, qui peut être convertie en un format accessible par le navigateur ou une {{Glossary("polyfill", "prothèse d'émulation")}}.

Malheureusement, la prise en charge de MathML par les navigateurs n'est pas universelle. Bien que l'utilisation d'une image d'une expression mathématique ne soit pas optimale, si vous utilisez une image, utilisez le rôle `math`.
Assurez-vous que toutes les images de mathématiques sont étiquetées par un attribut `alt` qui décrit l'expression mathématique telle qu'elle serait prononcée.

Si l'élément mathématique n'a que des enfants de présentation et que le nom accessible est destiné à transmettre l'expression mathématique, utilisez [`aria-label`](/fr/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-label) pour fournir une chaîne qui représente l'expression. Si l'élément mathématique contient un contenu navigable qui transmet l'expression mathématique et qu'une étiquette visible pour l'expression est présente, utilisez [`aria-labelledby`](/fr/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-labelledby). Sinon, utilisez `aria-label` pour nommer l'expression, par exemple, `aria-label="Théorème de Pythagore"`.

## Exemples

Si vous utilisez une image ou du HTML non sémantique pour créer une équation, utilisez le rôle `math`.

<div role="math" aria-label="a^{2} + b^{2} = c^{2}">
   a<sup>2</sup> + b<sup>2</sup> = c<sup>2</sup>
</div>

Le théorème de Pythagore ci-dessus est écrit de manière accessible comme suit&nbsp;:

```html
<div role="math" aria-label="a^{2} + b^{2} = c^{2}">
  a<sup>2</sup> + b<sup>2</sup> = c<sup>2</sup>
</div>
```

Si une image avait été utilisée, l'attribut `alt` aurait été utilisé avec le rôle `math`&nbsp;:

```html
<img src="pythagorean_theorem.gif" alt="a^{2} + b^{2} = c^{2}" role="math" />
```

## Spécifications

{{Specifications}}

## Voir aussi

- [MathML sur le MDN](/fr/docs/Web/MathML) et l'élément [`<math>`](/fr/docs/Web/MathML/Reference/Element/math) (qui n'est pas HTML)
- [La spécification MathML <sup>(angl.)</sup>](https://w3c.github.io/mathml/spec.html)
