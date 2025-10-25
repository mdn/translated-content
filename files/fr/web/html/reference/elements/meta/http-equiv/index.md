---
title: Attribut <meta> http-equiv
short-title: <meta> http-equiv
slug: Web/HTML/Reference/Elements/meta/http-equiv
l10n:
  sourceCommit: 0754cd805a8e010d2e3a2a065f634a3bcf358252
---

L'attribut **`http-equiv`** de l'élément {{HTMLElement("meta")}} permet de fournir des instructions de traitement au navigateur, comme si la réponse ayant retourné le document incluait certains en-têtes HTTP.
Les métadonnées sont des _métadonnées au niveau du document_ qui s'appliquent à toute la page.

Lorsqu'un élément `<meta>` possède un attribut `http-equiv`, l'attribut [`content`](/fr/docs/Web/HTML/Reference/Attributes/content) définit la valeur correspondante de `http-equiv`.
Par exemple, la balise `<meta>` suivante indique au navigateur de rafraîchir la page après 5 minutes&nbsp;:

```html
<meta http-equiv="Refresh" content="300" />
```

## Valeurs

Seul un sous-ensemble des en-têtes HTTP est pris en charge comme valeurs pour `http-equiv`.
Parmi celles-ci&nbsp;:

- `content-language` {{Deprecated_Inline}}
  - : Définit la langue par défaut du document utilisée par les technologies d'assistance ou la mise en forme par le navigateur.
    Similaire à l'en-tête HTTP {{HTTPHeader("Content-Language")}}.
    Utilisez plutôt l'attribut [`lang`](/fr/docs/Web/HTML/Reference/Global_attributes/lang).
- `content-type`
  - : Déclare le [type de média (type MIME)](/fr/docs/Web/HTTP/Guides/MIME_types) et l'encodage des caractères du document.
    L'attribut `content` doit valoir «&nbsp;text/html; charset=utf-8&nbsp;» si spécifié.
    Cela équivaut à un élément `<meta>` avec l'attribut [`charset`](/fr/docs/Web/HTML/Reference/Elements/meta#charset) et impose la même restriction sur le placement dans le document.
    Ne peut être utilisé que dans les documents servis avec le type de média `text/html` — pas dans les documents XML (`application/xml` ou `application/xhtml+xml`).
    Voir l'en-tête HTTP {{HTTPHeader("Content-Type")}}.
- `content-security-policy`
  - : Permet à l'auteur·ice de la page de définir une politique de sécurité de contenu (<abbr title="Content Security Policy">CSP</abbr>) pour la page courante, généralement pour spécifier les origines autorisées et les points d'accès aux scripts afin de se protéger contre les attaques XSS.
    Voir l'en-tête HTTP {{HTTPHeader("Content-Security-Policy")}}.
- `default-style`
  - : Définit le nom de la [feuille de style CSS](/fr/docs/Web/CSS) par défaut.
- `refresh`
  - : Équivalent à l'en-tête HTTP {{HTTPHeader("Refresh")}}.
    Cette instruction précise&nbsp;:
    - Le nombre de secondes à attendre avant que la page soit rechargée si l'attribut `content` est un entier positif.
    - Le nombre de secondes à attendre avant que la page soit redirigée vers une autre URL si l'attribut `content` est un entier positif suivi de `;url=` et d'une URL valide.

    Le compte à rebours commence lorsque la page est _complètement chargée_, c'est-à-dire après les événements {{DOMxRef("Window/load_event", "load")}} et {{DOMxRef("Window/pageshow_event", "pageshow")}}.
    Voir [Problèmes d'accessibilité](#problèmes_daccessibilité) pour plus d'informations.

- `set-cookie` {{Deprecated_Inline}}
  - : Définit un cookie pour le document.
    Les navigateurs ignorent désormais cette directive&nbsp;: utilisez l'en-tête HTTP {{HTTPHeader("Set-Cookie")}} ou {{DOMxRef("Document/cookie", "document.cookie")}} à la place.
- `x-ua-compatible` {{Deprecated_Inline}}
  - : Utilisé par les anciennes versions du désormais obsolète {{Glossary("Microsoft Internet Explorer")}} pour se conformer au comportement spécifié.
    Si spécifié, l'attribut `content` doit avoir la valeur «&nbsp;IE=edge&nbsp;».
    Les agents utilisateur ignorent désormais cette directive.
    Le nom provient de l'en-tête HTTP `X-UA-Compatible`.

> [!WARNING]
> Certains navigateurs traitent des en-têtes supplémentaires qui ne sont pas listés ci-dessus.
> Comme les en-têtes non reconnus ou les valeurs invalides sont ignorés, cela peut entraîner des comportements incohérents selon les navigateurs.
> En particulier, **n'utilisez pas d'autres en-têtes de sécurité** avec `<meta http-equiv=`, cela peut donner un faux sentiment de sécurité&nbsp;!

## Problèmes d'accessibilité

Les pages configurées avec la valeur `http-equiv="Refresh"` risquent d'utiliser un intervalle de rafraîchissement trop court.
Les personnes utilisant des technologies d'assistance comme les lecteurs d'écran peuvent ne pas avoir le temps de lire et comprendre le contenu avant d'être automatiquement redirigées.
Une mise à jour abrupte et sans avertissement de la page peut également désorienter les personnes en situation de handicap visuel.

- [Comprendre les WCAG, règle 2.2](/fr/docs/Web/Accessibility/Guides/Understanding_WCAG/Operable#règle_2.2_—_temps_suffisant_donner_aux_utilisateurs_et_utilisatrices_assez_de_temps_pour_lire_et_utiliser_le_contenu)
- [Comprendre les WCAG, règle 3.2](/fr/docs/Web/Accessibility/Guides/Understanding_WCAG/Understandable#règle_3.2_—_prévisible_rendre_les_pages_web_prévisibles_dans_leur_apparence_et_leur_fonctionnement)
- [Comprendre le critère de succès 2.2.1 | W3C expliquant WCAG 2.0 <sup>(angl.)</sup>](https://www.w3.org/TR/UNDERSTANDING-WCAG20/time-limits-required-behaviors.html)
- [Comprendre le critère de succès 2.2.4 | W3C expliquant WCAG 2.0 <sup>(angl.)</sup>](https://www.w3.org/TR/UNDERSTANDING-WCAG20/time-limits-postponed.html)
- [Comprendre le critère de succès 3.2.5 | W3C expliquant WCAG 2.0 <sup>(angl.)</sup>](https://www.w3.org/TR/UNDERSTANDING-WCAG20/consistent-behavior-no-extreme-changes-context.html)

## Exemples

### Désactiver le code inline non sécurisé et n'autoriser que les ressources HTTPS

Cet élément HTML `<meta>` définit la politique CSP par défaut pour n'autoriser le chargement des ressources (images, polices, scripts, etc.) qu'en HTTPS.
Comme les directives `unsafe-inline` et `unsafe-eval` ne sont pas définies, les scripts inline seront bloqués&nbsp;:

```html
<meta http-equiv="Content-Security-Policy" content="default-src https:" />
```

Les mêmes restrictions peuvent être appliquées via l'en-tête HTTP {{HTTPHeader("Content-Security-Policy")}}&nbsp;:

```http
Content-Security-Policy: default-src https:
```

### Définir une redirection de page

L'exemple suivant utilise `http-equiv="refresh"` pour demander au navigateur d'effectuer une redirection.
L'attribut `content="3;url=https://www.mozilla.org"` redirigera la page vers `https://www.mozilla.org` après 3 secondes&nbsp;:

```html
<meta http-equiv="refresh" content="3;url=https://www.mozilla.org" />
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- [`<meta name="referrer">`](/fr/docs/Web/HTML/Reference/Elements/meta/name/referrer)
- [Métadonnées&nbsp;: l'élément `<meta>`](/fr/docs/Learn_web_development/Core/Structuring_content/Webpage_metadata#métadonnées_lélément_meta)
- [Prévenir les attaques avec `<meta>` <sup>(angl.)</sup>](https://almanac.httparchive.org/en/2022/security#preventing-attacks-using-meta) sur httparchive.org (2022)
