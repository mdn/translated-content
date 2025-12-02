---
title: <meta name="referrer">
short-title: referrer
slug: Web/HTML/Reference/Elements/meta/name/referrer
l10n:
  sourceCommit: 0754cd805a8e010d2e3a2a065f634a3bcf358252
---

La valeur **`referrer`** pour l'attribut [`name`](/fr/docs/Web/HTML/Reference/Elements/meta/name) de l'élément HTML {{HTMLElement("meta")}} contrôle l'en-tête HTTP {{HTTPHeader("Referer")}} des requêtes envoyées depuis le document.
Si elle est spécifiée, vous définissez le référent à l'aide d'un attribut [`content`](/fr/docs/Web/HTML/Reference/Elements/meta#content) dans l'élément `<meta>` avec une valeur clé.

Par exemple, l'élément `<meta>` suivant envoie l'{{Glossary("origin", "origine")}} du document comme référent&nbsp;:

```html
<meta name="referrer" content="origin" />
```

> [!WARNING]
> L'insertion dynamique de `<meta name="referrer">` (avec {{DOMxRef("Document.write", "document.write()")}} ou {{DOMxRef("Node.appendChild", "appendChild()")}}) rend le comportement du référent imprévisible.
> Lorsque plusieurs politiques contradictoires sont définies, la politique `no-referrer` est appliquée.

## Notes d'utilisation

Un élément `<meta name="referrer">` possède les attributs supplémentaires suivants&nbsp;:

- [`content`](/fr/docs/Web/HTML/Reference/Elements/meta#content)
  - : Définit le référent du document. Vous devez définir cet attribut.
    Accepte l'une des valeurs suivantes&nbsp;:
    - `no-referrer`
      - : N'envoie pas d'en-tête HTTP `Referer`.
    - `origin`
      - : Envoie l'origine du document.
    - `no-referrer-when-downgrade`
      - : Envoie l'URL complète lorsque la destination est au moins aussi sécurisée que la page actuelle (HTTP(S)→HTTPS), mais n'envoie aucun référent si elle est moins sécurisée (HTTPS→HTTP). Il s'agit du comportement par défaut.
    - `origin-when-cross-origin`
      - : Envoie l'URL complète (sans les paramètres) pour les requêtes same-origin, mais n'envoie que l'origine dans les autres cas.
    - `same-origin`
      - : Envoie l'URL complète (sans les paramètres) pour les requêtes same-origin. Les requêtes cross-origin n'auront pas d'en-tête référent.
    - `strict-origin`
      - : Envoie l'origine lorsque la destination est au moins aussi sécurisée que la page actuelle (HTTP(S)→HTTPS), mais n'envoie aucun référent si elle est moins sécurisée (HTTPS→HTTP).
    - `strict-origin-when-cross-origin`
      - : Envoie l'URL complète (sans les paramètres) pour les requêtes same-origin. Envoie l'origine lorsque la destination est au moins aussi sécurisée que la page actuelle (HTTP(S)→HTTPS). Sinon, n'envoie aucun référent.
    - `unsafe-URL`
      - : Envoie l'URL complète (sans les paramètres) pour les requêtes same-origin ou cross-origin.

## Exemples

### Suppression du référent dans les requêtes

L'élément `<meta>` suivant indique que le document ne doit pas envoyer d'en-tête `Referer` avec les requêtes HTTP&nbsp;:

```html
<meta name="referrer" content="no-referrer" />
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- L'en-tête HTTP {{HTTPHeader("Referer")}}
