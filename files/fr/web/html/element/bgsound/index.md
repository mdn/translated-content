---
title: '<bgsound> : l''élément d''arrière-plan sonore'
slug: Web/HTML/Element/bgsound
tags:
  - Audio
  - Background Sound
  - Element
  - HTML
  - Internet Explorer
  - Non-standard
  - Deprecated
  - Reference
  - Web
translation_of: Web/HTML/Element/bgsound
browser-compat: html.elements.bgsound
---
{{HTMLRef}}

> **Attention :** Cette fonctionnalité a été supprimée des standards du Web. Bien que quelques navigateurs puissent encore la supporter, elle est en cours d'éradication. Ne l'utilisez ni dans d'anciens projets, ni dans de nouveaux. Les pages et applications Web l'utilisant peuvent cesser de fonctionner à tout moment.

L'élément HTML **`<bgsound>`** (pour _background sound_ ou « son d'arrière-plan ») est un élément défini par Internet Explorer qui permet d'associer un son d'ambiance à une page.

> **Attention :** Cet élément n'est pas standard et ne doit pas être utilisé ! Pour intégrer du son à une page web, on utilisera l'élément [`<audio>`](/fr/docs/Web/HTML/Element/audio).

## Attributs

- **`balance`**
  - : Cet attribut accepte un nombre entre -10 000 et +10 000, qui déterminera comment le volume sera réparti entre les hauts-parleurs (ou les écouteurs).
- **`loop`**
  - : Cet attribut indique le nombre de fois que le son doit être joué, grâce à une valeur numérique ou avec le mot-clé `infinite` (infini).
- **`src`**
  - : Cet attribut indique l'URL du fichier sonore qui doit être joué. Il doit être d'un des types suivants : .wav, .au, ou .mid.
- **`volume`**
  - : Cet attribut accepte un nombre entre -10 000 et 0 qui déterminera le volume du son.

## Exemple

```html
<bgsound src="son1.mid">

<bgsound src="son2.au" loop="infinite">
```

## Notes d'utilisation

Une fonctionnalité similaire pouvait être obtenue dans d'autres navigateurs grâce à l'élément [`<embed>`](/fr/docs/Web/HTML/Element/embed) afin d'invoquer un lecteur audio. Cet élément étant également obsolète, il est préférable d'utiliser [`<audio>`](/fr/docs/Web/HTML/Element/audio).

On peut écrire `bgsound` avec une balise auto-fermante `<bgsound />`. Cependant, puisque cet élément ne fait pas partie du standard, le transformer en XHTML ne le rendra pas valide.

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- L'élément standard [`<audio>`](/fr/docs/Web/HTML/Element/audio) qui permet d'ajouter du son dans un document HTML.
