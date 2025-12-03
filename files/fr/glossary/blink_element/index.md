---
title: L'élément de clignotement (balise <blink>)
short-title: Élément <blink>
slug: Glossary/blink_element
l10n:
  sourceCommit: 2547f622337d6cbf8c3794776b17ed377d6aad57
---

L'élément **`<blink>`** (balise blink) est une fonctionnalité HTML obsolète qui n'est plus prise en charge par les navigateurs web et n'est plus documentée sur MDN. Il servait à faire clignoter du texte (affichage/disparition en boucle).

L'élément `<blink>` s'utilisait ainsi&nbsp;:

```html example-bad
<blink>Dans les anciens navigateurs, je pouvais clignoter</blink>
```

## Brève histoire

Aux débuts du web (début/milieu des années 1990), il y avait peu de possibilités pour mettre en forme les pages web. La spécification [CSS](/fr/docs/Web/CSS) (version 1) a été publiée en 1996 et n'a été adoptée que bien plus tard par les navigateurs. Avant CSS, les navigateurs expérimentaient plusieurs fonctionnalités pour faire ressortir certaines portions de texte et attirer l'attention de l'utilisateur·ice. L'élément `<blink>` en faisait partie, introduit dans les premières versions du {{Glossary("Netscape_Navigator", "Navigateur Netscape")}}&nbsp;; l'élément {{HTMLElement("marquee")}} d'{{Glossary("Microsoft_Internet_Explorer", "Internet Explorer")}} en était un autre.

L'élément `<blink>` aurait été créé après une conversation dans un bar à Mountain View entre l'ingénieur Netscape [Lou Montulli](https://fr.wikipedia.org/wiki/Lou_Montulli) et ses collègues. Le lendemain matin, il a découvert qu'un·e collègue avait passé la nuit à l'implémenter ([lire l'histoire ici <sup>(angl.)</sup>](https://web.archive.org/web/20220331020029/http://www.montulli.org/theoriginofthe%3Cblink%3Etag)).

Bien qu'initialement populaire, `<blink>` est vite devenu détesté à cause de son usage excessif&nbsp;: beaucoup le trouvaient agaçant. Plus important encore, il nuit à la lisibilité et peut être particulièrement problématique pour les utilisateur·ice·s ayant un handicap visuel ou des [troubles cognitifs](/fr/docs/Web/Accessibility/Guides/Cognitive_accessibility) comme l'épilepsie ou le TDAH. Il peut désorienter ou, dans les pires cas, [déclencher des crises](/fr/docs/Web/Accessibility/Guides/Seizure_disorders).

`<blink>` n'a jamais été correctement spécifié et n'a jamais bénéficié d'un réel support inter-navigateurs. C'est un morceau d'histoire du web.

## Alternatives

- La propriété CSS {{CSSxRef("text-decoration-line")}} possède une valeur `blink` censée avoir le même effet, mais la plupart des navigateurs modernes l'ignorent.
- La méthode JavaScript {{JSxRef("String.blink()")}} entoure une chaîne de texte avec des balises `<blink></blink>`, mais comme vu plus haut, cet élément n'est plus pris en charge nulle part.
- [Les animations CSS](/fr/docs/Web/CSS/Guides/Animations) peuvent encore être utilisées pour faire clignoter du texte. Cependant, il faut éviter le texte clignotant sur les pages web pour les raisons évoquées précédemment.

## Voir aussi

- [Élément blink <sup>(angl.)</sup>](https://en.wikipedia.org/wiki/Blink_element) sur Wikipédia
- [WCAG 2.2.2&nbsp;: Pause, arrêt, masquage <sup>(angl.)</sup>](https://www.w3.org/WAI/WCAG21/Understanding/pause-stop-hide)
- [WCAG 2.3.1&nbsp;: Trois flashs ou seuil inférieur <sup>(angl.)</sup>](https://www.w3.org/WAI/WCAG21/Understanding/three-flashes-or-below-threshold)
