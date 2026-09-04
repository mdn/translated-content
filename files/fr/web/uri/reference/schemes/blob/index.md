---
title: URLs d'objets
short-title: "blob:"
slug: Web/URI/Reference/Schemes/blob
l10n:
  sourceCommit: ca1647a3e2b77cdf9df220244998f25b86629048
---

Les **URLs d'objets (ou blob)**, c'est-à-dire les URLs préfixées par le schéma `blob:`, permettent d'intégrer des objets {{DOMxRef("Blob")}} et {{DOMxRef("MediaSource")}} avec d'autres API conçues uniquement pour être utilisées avec des URLs, comme l'élément HTML {{HTMLElement("img")}}. Les URLs blob peuvent aussi être utilisées pour naviguer ou déclencher le téléchargement de données générées localement. Elles sont conçues comme des identifiants opaques (c'est-à-dire qu'il ne faut pas les écrire à la main) et doivent être gérées avec les fonctions {{DOMxRef("URL.createObjectURL_static", "URL.createObjectURL()")}} et {{DOMxRef("URL.revokeObjectURL_static", "URL.revokeObjectURL()")}}.

Les URLs blob sont similaires aux [URLs de données](/fr/docs/Web/URI/Reference/Schemes/data), car elles permettent toutes deux de représenter des ressources en mémoire sous forme d'URL&nbsp;; la différence est que les URLs de données intègrent la ressource dans l'URL elle-même et ont de fortes limitations de taille, tandis que les URLs blob nécessitent un `Blob` ou un `MediaSource` associé et peuvent représenter de plus grandes ressources.

## Syntaxe

```url
blob:<origin>/<uuid>
```

- `blob:`
  - : Le schéma de l'URL.
- `<origin>`
  - : L'[origine](/fr/docs/Web/API/URL/origin) du créateur de cette URL. Si l'origine du créateur est opaque, cette partie est définie par l'implémentation.
- `<uuid>`
  - : Un {{Glossary("UUID")}}.

## Notes d'utilisation

### Gestion de la mémoire

Chaque appel à `createObjectURL()` crée une nouvelle URL d'objet, même si vous en avez déjà créé une pour le même objet. Chacune d'elles doit être libérée en appelant {{DOMxRef("URL.revokeObjectURL_static", "URL.revokeObjectURL()")}} lorsque vous n'en avez plus besoin. Tant qu'une URL d'objet reste active, l'objet sous-jacent ne peut pas être collecté par le ramasse-miettes et cela peut provoquer des fuites de mémoire.

Les navigateurs libèrent automatiquement les URLs d'objet lorsque le document est déchargé&nbsp;; cependant, pour des performances et une gestion mémoire optimales, il est recommandé de les libérer explicitement dès que possible.

Toutefois, évitez de libérer l'URL d'objet trop tôt. Un anti-pattern courant est le suivant&nbsp;:

```js example-bad
const url = URL.createObjectURL(blob);
img.src = url;
img.addEventListener("load", () => {
  URL.revokeObjectURL(url);
});
document.body.appendChild(img);
```

Révoquer l'URL blob immédiatement après l'affichage de l'image la rendrait inutilisable pour les interactions utilisateur·ice·s (clic droit pour enregistrer l'image, ouverture dans un nouvel onglet, etc.). Pour les applications de longue durée, il faut révoquer les URLs d'objet uniquement lorsque la ressource n'est plus accessible par l'utilisateur·ice (par exemple, lorsque l'image est retirée du DOM).

### Partitionnement du stockage

L'accès aux ressources via des URLs blob est soumis aux mêmes restrictions que les autres mécanismes de stockage, c'est-à-dire le [partitionnement d'état](/fr/docs/Web/Privacy/Guides/State_Partitioning). Les URLs blob ont une origine de créateur associée (stockée dans l'URL elle-même) et ne peuvent être récupérées que depuis des environnements où la clé de stockage correspond à celle de l'environnement créateur. Les _navigations_ vers une URL blob ne sont pas soumises à cette restriction, bien que les navigateurs puissent appliquer des mesures de confidentialité comme [`noopener`](/fr/docs/Web/HTML/Reference/Attributes/rel/noopener) pour les navigations inter-sites vers une URL blob.

### Utilisation des URLs d'objet pour les flux média

Dans les anciennes versions de la spécification Media Source, attacher un flux à un élément HTML {{HTMLElement("video")}} nécessitait de créer une URL d'objet pour l'interface {{DOMxRef("MediaStream")}}. Ce n'est plus nécessaire, et les navigateurs retirent cette prise en charge.

> [!WARNING]
> Si votre code utilise encore `createObjectURL()` pour attacher des flux à des éléments média, il faut le mettre à jour pour utiliser directement {{DOMxRef("HTMLMediaElement.srcObject", "srcObject")}} avec le `MediaStream`.

### Récupération avec l'en-tête `Range`

Les URLs blob prennent en charge la récupération avec l'en-tête [`Range`](/fr/docs/Web/HTTP/Reference/Headers/Range) pour demander un contenu partiel. Cela est particulièrement utile avec de gros blobs, car cela permet de ne récupérer que les parties nécessaires au lieu de tout le contenu. Pour un exemple, voir [récupérer une plage depuis une URL blob](/fr/docs/Web/HTTP/Reference/Headers/Range#requêter_une_plage_depuis_une_url_blob).

## Exemples

### URLs blob valides

```url
blob:https://example.org/40a5fb5a-d56d-4a33-b4e2-0acf6a8e5f64
```

### Créer des URLs blob

Dans cet exemple, on crée d'abord un objet {{DOMxRef("Blob")}} à partir d'un {{HTMLElement("canvas")}}, puis une URL blob pour celui-ci, et enfin on attache l'URL à un élément HTML {{HTMLElement("img")}}.

```js
const canvas = document.querySelector("canvas");
canvas.toBlob((blob) => {
  const img = document.createElement("img");
  img.src = URL.createObjectURL(blob);
  document.body.appendChild(img);
});
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- [Utiliser des fichiers dans des applications web](/fr/docs/Web/API/File_API/Using_files_from_web_applications)
- [Utiliser des URLs d'objet pour afficher des images](/fr/docs/Web/API/File_API/Using_files_from_web_applications#utiliser_des_url_dobjets_pour_afficher_des_images)
- La méthode API {{DOMxRef("URL.createObjectURL_static", "URL.createObjectURL()")}}
- La méthode API {{DOMxRef("URL.revokeObjectURL_static", "URL.revokeObjectURL()")}}
- [Liste IANA des schémas URI <sup>(angl.)</sup>](https://www.iana.org/assignments/uri-schemes/uri-schemes.xhtml)
