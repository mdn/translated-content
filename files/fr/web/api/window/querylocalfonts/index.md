---
title: "Window : méthode queryLocalFonts()"
short-title: queryLocalFonts()
slug: Web/API/Window/queryLocalFonts
l10n:
  sourceCommit: 6855bf0bdd644345f66b88b477fd219a5e7f866e
---

{{APIRef("Local Font Access API")}}{{SeeCompatTable}}{{SecureContext_Header}}

La méthode **`queryLocalFonts()`** de l'interface {{DOMxRef("Window")}} retourne une promesse ({{JSxRef("Promise")}}) qui se résout avec un tableau d'objets {{DOMxRef("FontData")}} représentant les polices disponibles localement.

Pour utiliser cette méthode, l'utilisateur·ice doit accorder l'autorisation d'accéder aux `local-fonts` (le statut de l'autorisation peut être interrogé avec {{DOMxRef("Permissions API", "l'API Permissions", "", "nocode")}}). De plus, cette fonctionnalité peut être bloquée par une [Politique d'autorisations](/fr/docs/Web/HTTP/Guides/Permissions_Policy) définie sur votre serveur.

## Syntaxe

```js-nolint
queryLocalFonts(options)
```

### Paramètres

- `options` {{Optional_Inline}}
  - : Contient des paramètres de configuration optionnels. Actuellement, une seule propriété est définie&nbsp;:
    - `postscriptNames` {{Optional_Inline}}
      - : Un tableau de noms PostScript de polices. Si cette option est définie, seules les polices dont les noms PostScript correspondent à ceux du tableau seront incluses dans les résultats&nbsp;; sinon, toutes les polices seront incluses dans les résultats.

### Valeur de retour

Une promesse ({{JSxRef("Promise")}}) qui se résout avec un tableau d'objets {{DOMxRef("FontData")}} représentant les polices disponibles localement.

### Exceptions

- `NotAllowedError` {{DOMxRef("DOMException")}}
  - : L'utilisateur·ice a choisi de refuser l'autorisation d'utiliser cette fonctionnalité lorsqu'il a été présenté avec l'invite de permission du navigateur après que la méthode a été invoquée pour la première fois.
- `SecurityError` {{DOMxRef("DOMException")}}
  - : L'utilisation de cette fonctionnalité a été bloquée par une [Politique d'autorisations](/fr/docs/Web/HTTP/Guides/Permissions_Policy), ou elle n'a pas été appelée via une interaction de l'utilisateur·ice telle qu'un clic sur un bouton, ou {{Glossary("origin", "l'origine")}} actuelle est une origine opaque.

## Exemples

Pour un exemple interactif fonctionnel, consultez notre [démonstration de l'API d'accès aux polices locales <sup>(angl.)</sup>](https://mdn.github.io/dom-examples/local-font-access/).

### Énumération des polices

L'extrait suivant interrogera toutes les polices disponibles et enregistrera les métadonnées. Cela pourrait être utilisé, par exemple, pour remplir un contrôle de sélection de polices.

```js
async function journaliserFontData() {
  try {
    const policesDisponibles = await window.queryLocalFonts();
    for (const fontData of policesDisponibles) {
      console.log(fontData.postscriptName);
      console.log(fontData.fullName);
      console.log(fontData.family);
      console.log(fontData.style);
    }
  } catch (err) {
    console.error(err.name, err.message);
  }
}
```

### Limiter les résultats retournés

Pour limiter les données de polices retournées à une liste spécifique de polices, utilisez l'option `postscriptNames`.

```js
async function retournerPolicesSpecifiques() {
  const policesDisponibles = await window.queryLocalFonts({
    postscriptNames: ["Verdana", "Verdana-Bold", "Verdana-Italic"],
  });

  return policesDisponibles;
}
```

### Accéder aux données de bas niveau

La méthode {{DOMxRef("FontData.blob", "blob()")}} fournit un accès aux données [SFNT <sup>(angl.)</sup>](https://en.wikipedia.org/wiki/SFNT) de bas niveau — il s'agit d'un format de fichier de police qui peut contenir d'autres formats de police, tels que PostScript, TrueType, OpenType ou Web Open Font Format (WOFF).

```js
async function calculerFormatContour() {
  try {
    const policesDisponibles = await window.queryLocalFonts({
      postscriptNames: ["ComicSansMS"],
    });
    for (const fontData of policesDisponibles) {
      // `blob()` retourne un Blob contenant des données SFNT valides et complètes.
      const sfnt = await fontData.blob();
      // Extraire uniquement les octets dont nous avons besoin : les 4 premiers octets sont les informations de version SFNT.
      // Spécification : https://learn.microsoft.com/en-us/typography/opentype/spec/otff#organization-of-an-opentype-font
      const sfntVersion = await sfnt.slice(0, 4).text();

      let formatContour = "UNKNOWN";
      switch (sfntVersion) {
        case "\x00\x01\x00\x00":
        case "true":
        case "typ1":
          formatContour = "truetype";
          break;
        case "OTTO":
          formatContour = "cff";
          break;
      }
      console.log("Format de contour :", formatContour);
    }
  } catch (err) {
    console.error(err.name, err.message);
  }
}
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- {{DOMxRef("Local Font Access API", "L'API d'accès aux polices locales", "", "nocode")}}
- [Utiliser la typographie avancée avec des polices locales <sup>(angl.)</sup>](https://developer.chrome.com/docs/capabilities/web-apis/local-fonts)
- La règle CSS {{CSSxRef("@font-face")}}
