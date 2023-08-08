---
title: <frame>
slug: Web/HTML/Element/frame
---

{{HTMLSidebar}}{{deprecated_header}}

L'élément [HTML](/fr/docs/Web/HTML) **`<frame>`** définit une zone particulière dans laquelle un autre document HTML est affiché. Une `<frame>` (un «&nbsp;cadre&nbsp;» en français) doit être utilisée dans un élément [`<frameset>`](/fr/docs/Web/HTML/Element/frameset).

Utiliser l'élément `<frame>` est déconseillé en raison de certains inconvénients tels que des problèmes de performance et un manque d'accessibilité pour les personnes utilisant des lecteurs d'écran. Utilisez plutôt l'élément [`<iframe>`](/fr/docs/Web/HTML/Element/iframe).

## Attributs

Comme tous les autres éléments HTML, cet élément prend en charge les [attributs universels](/fr/docs/Web/HTML/Global_attributes).

- `src`
  - : Cet attribut indique le document qui doit être affiché dans la frame.
- `name`
  - : Cet attribut sert à nommer les frames. Sans nommage, tous les liens seront ouverts dans la frame où ils se trouvent. Voir [`target`](/fr/docs/Web/HTML/Element/a#attr-target) pour plus d'informations.
- `noresize`
  - : Cet attribut empêche aux utilisateurs de redimensionner les frames.
- `scrolling`
  - : Cet attribut définit l'existence des barres de défilement. Si cet attribut n'est pas utilisé, le navigateur mettre une barre de défilement si nécessaire. Il y a deux options&nbsp;: `"yes"` pour afficher les barres de défilement même quand ce n'est pas nécessaire, et `"no"` pour ne pas afficher les barres de défilement même quand c'est nécessaire.
- `marginheight`
  - : Cet attribut définit la hauteur des marges entre les frames.
- `marginwidth`
  - : Cet attribut définit la largeur des marges entre les frames.
- `frameborder`
  - : Cet attribut permet de mettre des bordures à la frame.

## Exemple

```html
<frameset cols="50%,50%">
  <frame src="https://developer.mozilla.org/fr/docs/Web/HTML/Element/iframe" />
  <frame src="https://developer.mozilla.org/fr/docs/Web/HTML/Element/frame" />
</frameset>
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- L'élément [`<frameset>`](/fr/docs/Web/HTML/Element/frameset)
- L'élément [`<iframe>`](/fr/docs/Web/HTML/Element/iframe)
