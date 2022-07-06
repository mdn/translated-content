---
title: Labels multi-options
slug: Web/Accessibility/ARIA/forms/Multipart_labels
tags:
  - ARAI
  - Accessibilité
  - Développement Web
  - Formulaire
translation_of: Web/Accessibility/ARIA/forms/Multipart_labels
original_slug: Accessibilité/ARIA/formulaires/Labels_multi-options
---
## Utiliser ARIA avec des labels comportant des champs

### Problème

Un formulaire pose une question à un utilisateur, mais la zone de réponse est une partie de la phrase qui constitue la question. Un exemple classique que nous connaissons tous dans notre navigateur, c’est la paramètre des préférences «&nbsp;`Effacer l’historique après [x] jours`.&nbsp;» «&nbsp;`Effacer l’historique après`&nbsp;» est à la gauche de la boîte texte, «&nbsp;`x`&nbsp;» est le nombre, par exemple 21, et le mot «&nbsp;`jours`&nbsp;» suit la boîte texte, formant ainsi un phrase qu'il est facile de comprendre.

Si vous utilisez un lecteur d’écran, vous devez avoir remarqué que, lorsque vous allez à ce paramètre dans Firefox, il est actuellement écrit « `Effacer l’historique après 21 jours`&nbsp;?&nbsp;», suivi par l’annonce que vous vous trouvez dans un boîte texte et qu’elle contient le nombre 21. C’est sympa, non&nbsp;? Vous n’avez pas besoin de naviguer alentours pour trouver l’unité. «&nbsp;Jours&nbsp;» peut aisément être remplacé par «&nbsp;mois&nbsp;» ou «&nbsp;années&nbsp;», et dans de nombreuses boîtes de dialogues ordinaires, il n’y a aucun autre moyen de le savoir que de naviguer alentours avec les commandes d’examen de l’écran.

La solution se trouve dans l'attribut ARIA `aria-labelledby`. Son paramètre est une chaîne qui est la liste des identifiants des éléments HTML que vous voulez concaténer en un seul nom accessible.

`aria-labelledby` et `aria-describedby` sont tous deux spécifiés dans l’élément de formulaire à labelliser, par exemple, un élément {{ HTMLElement("input") }}. Dans les deux cas, les liaisons d’un contrôle `<label for>`/`<label>` pouvant exister, sont neutralisées par `aria-labelledby`. Si, dans une page HTML vous fournissez `aria-labelledby`, vous devriez également fournir un `<label for>` afin d’également prendre en charge les anciens navigateurs qui ne prennent pas encore en charge ARIA. Avec Firefox 3, vos utilisateurs malvoyants auront automatiquement une meilleure accessibilité avec le nouvel attribut, mais les utilisateurs de navigateurs plus anciens ne seront pas pour autant laissé dans le noir.

Exemple&nbsp;:

```html
    <input aria-labelledby="labelShutdown shutdownTime shutdownUnit" type="checkbox" />
    <span id="labelShutdown">Éteindre l’ordinateur après</span>
    <input aria-labelledby="labelShutdown shutdownTime shutdownUnit" id="shutdownTime" type="text" value="10" />
    <span id="shutdownUnit"> minutes</span>
```

### Pour les utilisateurs de JAWS 8

JAWS 8.0 possède sa propre logique pour trouver les labels, ce qui lui fait systématiquement supplanter le `nomAccessible` que peut avoir une boîte texte dans un document HTML. Avec JAWS 8, je n’ai trouvé aucun moyen de lui faire accepter le label de l’exemple ci-dessus. Mais NVDA et Window-Eyes le font très bien, et Orca sur Linux n’a aucun problème non plus.

### Peut-on faire la même chose sans ARIA&nbsp;?

Ben Millard fait remarquer dans un billet que  [les contrôles peuvent être imbriqués dans des labels, comme démontré dans l'exemple ci-dessus avec HTML 4](http://projectcerbera.com/blog/2008/03#day24), simplement en imbriquant l'élément `input` dans le `label`. Merci pour cette info, Ben&nbsp;! Elle est vraiment utile et montre que certaines techniques existantes depuis des années nous échappe, même aux gourous que nous sommes. Cette technique fonctionne dans Firefox&nbsp;; cependant, elle ne fonctionne actuellement pas dans de nombreux autres navigateurs, y compris IE. Donc, pour les labels comprenant des contrôles de formulaires, l'utilisation de `aria-labelledby` est encore la meilleure approche.
