---
title: <a>
slug: Web/SVG/Reference/Element/a
l10n:
  sourceCommit: 94a841dba1498c685a18e72d041fd9057f302d6c
---

L'élément [SVG](/fr/docs/Web/SVG) **`<a>`** crée un lien hypertexte vers d'autres pages web, fichiers, emplacements dans la page en cours, adresses email, ou toute autre URL. Il est très similaire à l'élément HTML {{HTMLElement("a")}}.

L'élément `<a>` de SVG est un conteneur, ce qui signifie que vous pouvez créer un lien autour du texte (comme en HTML) mais aussi autour de n'importe quelle forme.

## Contexte d'utilisation

{{SVGInfo}}

## Attributs

- {{SVGAttr("download")}}
  - : Indique aux navigateurs de télécharger une {{Glossary("URL")}} au lieu de naviguer vers elle, de sorte que l'utilisateur·ice est invité·e à l'enregistrer en tant que fichier local.
    _Type de valeur_&nbsp;: **`<string>`**&nbsp;; _Valeur par défaut_&nbsp;: _aucune_&nbsp;; _Peut être animé_&nbsp;: **non**
- {{SVGAttr("href")}}
  - : Une {{Glossary("URL")}} ou un fragment d'URL vers lequel le lien hypertexte pointe.
    _Type de valeur_&nbsp;: **[`<URL>`](/fr/docs/Web/SVG/Guides/Content_type#url)**&nbsp;; _Valeur par défaut_&nbsp;: _aucune_&nbsp;; _Peut être animé_&nbsp;: **oui**
- [`hreflang`](/fr/docs/Web/HTML/Reference/Elements/a#hreflang)
  - : La langue humaine de l'URL ou du fragment d'URL vers lequel le lien hypertexte pointe.
    _Type de valeur_&nbsp;: **`<string>`**&nbsp;; _Valeur par défaut_&nbsp;: _aucune_&nbsp;; _Peut être animé_&nbsp;: **non**
- [`interestfor`](/fr/docs/Web/HTML/Reference/Elements/a#interestfor) {{Experimental_Inline}} {{Non-standard_Inline}}
  - : Définit l'élément `<a>` comme un **déclencheur d'intérêt**. Sa valeur est un `id` d'un élément cible qui est affecté d'une manière ou d'une autre (normalement affiché ou masqué) lorsque l'intérêt est montré ou perdu sur l'élément déclencheur (par exemple, en survolant/cessant de survoler ou en sélectionnant/perdant la sélection). Voir [Utiliser les déclencheurs d'intérêt](/fr/docs/Web/API/Popover_API/Using_interest_invokers) pour plus de détails et d'exemples.
    _Type de valeur_&nbsp;: **`<string>`**&nbsp;; _Valeur par défaut_&nbsp;: _aucune_&nbsp;; _Peut être animé_&nbsp;: **non**
- [`ping`](/fr/docs/Web/HTML/Reference/Elements/a#ping) {{Experimental_Inline}}
  - : Une liste d'URL séparées par des espaces auxquelles le navigateur envoie des requêtes {{HTTPMethod("POST")}} avec le corps `PING` lorsque le lien hypertexte est suivi (en arrière-plan). Cet attribut sert généralement au suivi. Pour une fonctionnalité mieux prise en charge qui répond aux mêmes cas d'utilisation, voir {{DOMxRef("Navigator.sendBeacon()")}}.
    _Type de valeur_&nbsp;: **[`<list-of-URLs>`](/fr/docs/Web/SVG/Guides/Content_type#list-of-ts)**&nbsp;; _Valeur par défaut_&nbsp;: _aucune_&nbsp;; _Peut être animé_&nbsp;: **non**
- [`referrerpolicy`](/fr/docs/Web/HTML/Reference/Elements/a#referrerpolicy)
  - : Quel [référent](/fr/docs/Web/HTTP/Reference/Headers/Referer) envoyer lors de la récupération de {{Glossary("URL", "l'URL")}}.
    _Type de valeur_&nbsp;: `no-referrer` | `no-referrer-when-downgrade` | `same-origin` | `origin` | `strict-origin` | `origin-when-cross-origin` | `strict-origin-when-cross-origin` | `unsafe-url`&nbsp;; _Valeur par défaut_&nbsp;: _aucune_&nbsp;; _Peut être animé_&nbsp;: **non**
- [`rel`](/fr/docs/Web/HTML/Reference/Elements/a#rel)
  - : La relation entre l'objet cible et l'objet lien.
    _Type de valeur_&nbsp;: **[`<list-of-Link-Types>`](/fr/docs/Web/HTML/Reference/Attributes/rel)**&nbsp;; _Valeur par défaut_&nbsp;: _aucune_&nbsp;; _Peut être animé_&nbsp;: **non**
- {{SVGAttr("target")}}
  - : Emplacement où afficher {{Glossary("URL", "l'URL")}} liée.
    _Type de valeur_&nbsp;: `_self` | `_parent` | `_top` | `_blank` | **`<XML-Name>`**&nbsp;; _Valeur par défaut_&nbsp;: `_self`&nbsp;; _Peut être animé_&nbsp;: **oui**
- [`type`](/fr/docs/Web/HTML/Reference/Elements/a#type)
  - : Un {{Glossary("MIME type", "type MIME")}} pour l'URL liée.
    _Type de valeur_&nbsp;: **`<string>`**&nbsp;; _Valeur par défaut_&nbsp;: _aucune_&nbsp;; _Peut être animé_&nbsp;: **non**
- {{SVGAttr("xlink:href")}} {{Deprecated_Inline}}
  - : L'URL ou le fragment d'URL vers lequel pointe le lien hypertexte. Peut être requis pour assurer la compatibilité ascendante avec les anciens navigateurs.
    _Type de valeur_&nbsp;: **[`<URL>`](/fr/docs/Web/SVG/Guides/Content_type#url)**&nbsp;; _Valeur par défaut_&nbsp;: _aucune_&nbsp;; _Peut être animé_&nbsp;: **oui**

## Interface DOM

Cet élément implémente l'interface {{DOMxRef("SVGAElement")}}.

## Exemples

```css hidden
@namespace svg url("http://www.w3.org/2000/svg");
html,
body,
svg {
  height: 100%;
}
```

```html
<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
  <!-- Un lien autour d'une forme -->
  <a href="/docs/Web/SVG/Reference/Element/circle">
    <circle cx="50" cy="40" r="35" />
  </a>

  <!-- Un lien autour d'un texte -->
  <a href="/docs/Web/SVG/Reference/Element/text">
    <text x="50" y="90" text-anchor="middle">&lt;circle&gt;</text>
  </a>
</svg>
```

```css
/* Comme SVG ne fournit pas de style visuel par défaut pour les liens,
   il est en recommandé d'en ajouter manuellement */

@namespace svg url("http://www.w3.org/2000/svg");
/* Nécessaire pour sélectionner uniquement les éléments SVG <a>, et pas
   aussi ceux de HTML. Voir l'avertissement ci-dessous */

svg|a:link,
svg|a:visited {
  cursor: pointer;
}

svg|a text,
text svg|a {
  fill: blue; /* Même pour du texte, SVG utilise fill plutôt que color */
  text-decoration: underline;
}

svg|a:hover,
svg|a:active {
  outline: dotted 1px blue;
}
```

{{EmbedLiveSample("Exemples", 100, 100)}}

> [!WARNING]
> Comme cet élément partage son nom de balise avec [l'élément HTML `<a>`](/fr/docs/Web/HTML/Reference/Elements/a), sélectionner `a` avec CSS ou {{DOMxRef("Document.querySelector", "querySelector")}} peut s'appliquer au mauvais type d'élément. Essayez la règle CSS {{CSSxRef("@namespace")}} pour distinguer les deux.

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- L'attribut {{SVGAttr("xlink:title")}}
- L'élément HTML {{HTMLElement("a")}}
