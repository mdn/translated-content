---
title: "Étiquettes multiples : utiliser ARIA pour des étiquettes avec champs intégrés"
short-title: Utiliser ARIA pour des étiquettes avec champs intégrés
slug: Web/Accessibility/ARIA/Guides/Multipart_labels
original_slug: Web/Accessibility/ARIA/Multipart_labels
l10n:
  sourceCommit: f65f7f6e4fda2cb1bd0e7db17777e2cb20be7d27
---

## Problème

Vous avez un formulaire où la question posée à l'utilisateur·ice contient la réponse dans la phrase elle-même. Un exemple classique, que l'on retrouve dans les paramètres de navigateur, est «&nbsp;Supprimer l'historique après x jours&nbsp;». «&nbsp;Supprimer l'historique après&nbsp;» se trouve à gauche du champ de saisie, x est le nombre (par exemple 21), et le mot «&nbsp;jours&nbsp;» suit le champ, formant une phrase facile à comprendre.

Si vous utilisez un lecteur d'écran, avez-vous remarqué que, dans Firefox, ce réglage est annoncé comme «&nbsp;Supprimer l'historique après 21 jours&nbsp;», suivi de l'annonce que vous êtes dans un champ de saisie contenant le nombre 21&nbsp;? Pratique&nbsp;: il n'est pas nécessaire de naviguer pour connaître l'unité. «&nbsp;Jours&nbsp;» pourrait être remplacé par «&nbsp;mois&nbsp;» ou «&nbsp;années&nbsp;», et dans de nombreux dialogues classiques, il n'y a aucun moyen de le savoir sans naviguer avec des commandes de revue d'écran.

La solution réside dans l'attribut ARIA `aria-labelledby`. Sa valeur est une chaîne composée des identifiants des éléments HTML à concaténer pour former un nom accessible unique.

`aria-labelledby` et `aria-describedby` sont tous deux spécifiés sur l'élément de formulaire à étiqueter (par exemple un `<input>`). Dans les deux cas, les associations label/for éventuellement présentes sont remplacées par `aria-labelledby`. Si vous fournissez `aria-labelledby` dans une page HTML, ajoutez aussi un label/for pour la compatibilité avec les anciens navigateurs ne prenant pas encore ARIA en charge. Avec Firefox 3, les utilisateur·ice·s malvoyant·e·s bénéficient automatiquement d'une meilleure accessibilité, mais les utilisateur·ice·s de navigateurs plus anciens ne sont pas pénalisé·e·s.

### Exemple

{{ EmbedLiveSample("Example") }}

```css hidden
body {
  margin: 1rem;
}
```

```html
<input
  aria-labelledby="labelShutdown shutdownTime shutdownUnit"
  type="checkbox" />

<span id="labelShutdown">Éteindre l'ordinateur après</span>

<input
  aria-labelledby="labelShutdown shutdownTime shutdownUnit"
  id="shutdownTime"
  type="text"
  value="10" />

<span id="shutdownUnit"> minutes</span>
```

## Remarque pour les utilisateur·ice·s de JAWS 8

JAWS 8.0 utilise sa propre logique pour trouver les étiquettes, ce qui fait qu'il remplace toujours le nom accessible du champ de saisie d'un document HTML. Avec JAWS 8, je n'ai pas trouvé de moyen de faire accepter l'étiquette de l'exemple ci-dessus. Mais NVDA, Window-Eyes et Orca sous Linux fonctionnent correctement.

## Peut-on faire cela sans ARIA ?

Ben Millard, membre de la communauté, a signalé dans un billet de blog que [les contrôles peuvent être intégrés dans les étiquettes comme dans l'exemple ci-dessus en HTML 4 <sup>(angl.)</sup>](https://projectcerbera.com/blog/2008/03/#day24), en plaçant l'input dans le label. Merci Ben&nbsp;! C'est utile et cela montre que certaines techniques anciennes échappent parfois même aux expert·e·s. Cette technique fonctionne dans Firefox, mais pas dans de nombreux autres navigateurs, dont IE. Pour les étiquettes avec champs intégrés, l'utilisation de `aria-labelledby` reste la meilleure approche.
