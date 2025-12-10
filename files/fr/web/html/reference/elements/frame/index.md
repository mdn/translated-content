---
title: "<frame> : l'élément de cadre"
slug: Web/HTML/Reference/Elements/frame
l10n:
  sourceCommit: 0754cd805a8e010d2e3a2a065f634a3bcf358252
---

{{Deprecated_Header}}

L'élément [HTML](/fr/docs/Web/HTML) **`<frame>`** définit une zone particulière dans laquelle un autre document HTML est affiché. Une `<frame>` (un «&nbsp;cadre&nbsp;» en français) doit être utilisée dans un élément {{HTMLElement("frameset")}}.

Utiliser l'élément `<frame>` est déconseillé en raison de certains inconvénients tels que des problèmes de performance et un manque d'accessibilité pour les personnes utilisant des lecteurs d'écran. Utilisez plutôt l'élément {{HTMLElement("iframe")}}.

## Attributs

Cet élément inclut les [attributs universels](/fr/docs/Web/HTML/Reference/Global_attributes).

- `src` {{Deprecated_Inline}}
  - : Cet attribut indique le document qui doit être affiché dans la frame.
- `name` {{Deprecated_Inline}}
  - : Cet attribut sert à nommer les frames. Sans nommage, tous les liens seront ouverts dans la frame où ils se trouvent. Voir [`target`](/fr/docs/Web/HTML/Reference/Elements/a#target) pour plus d'informations.
- `noresize` {{Deprecated_Inline}}
  - : Cet attribut empêche aux utilisateurs de redimensionner les frames.
- `scrolling` {{Deprecated_Inline}}
  - : Cet attribut définit l'existence des barres de défilement. Si cet attribut n'est pas utilisé, le navigateur mettre une barre de défilement si nécessaire. Il y a deux options&nbsp;: `"yes"` pour afficher les barres de défilement même quand ce n'est pas nécessaire, et `"no"` pour ne pas afficher les barres de défilement même quand c'est nécessaire.
- `marginheight` {{Deprecated_Inline}}
  - : Cet attribut définit la hauteur des marges entre les frames.
- `marginwidth` {{Deprecated_Inline}}
  - : Cet attribut définit la largeur des marges entre les frames.
- `frameborder` {{Deprecated_Inline}}
  - : Cet attribut permet de mettre des bordures à la frame.

## Exemple

### Un document frameset

Un document frameset possède un élément {{HTMLElement("frameset")}} au lieu d'un élément {{HTMLElement("body")}}. Les éléments `<frame>` sont placés à l'intérieur du `<frameset>`.

```html
<!doctype html>
<html lang="fr">
  <head>
    <!-- Métadonnées du document -->
  </head>
  <frameset cols="400, 500">
    <frame
      src="https://developer.mozilla.org/fr/docs/Web/HTML/Reference/Elements/iframe" />
    <frame
      src="https://developer.mozilla.org/fr/docs/Web/HTML/Reference/Elements/frame" />
  </frameset>
</html>
```

Si vous souhaitez intégrer une autre page HTML dans le {{HTMLElement("body")}} d'un document, utilisez un élément {{HTMLElement("iframe")}}.

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- L'élément {{HTMLElement("frameset")}}
- L'élément {{HTMLElement("iframe")}}
