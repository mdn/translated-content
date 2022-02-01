---
title: 'CSP: require-sri-for'
slug: Web/HTTP/Headers/Content-Security-Policy/require-sri-for
tags:
  - CSP
  - Content-Security-Policy
  - Directive
  - HTTP
  - Reference
  - Security
  - Subresource Integrity
  - Sécurité
  - require-sri-for
translation_of: Web/HTTP/Headers/Content-Security-Policy/require-sri-for
---
{{Obsolete_header}}

La directive HTTP {{HTTPHeader("Content-Security-Policy")}} **`require-sri-for`** informe l'agent utilisateur de requérir la vérification [d'intégrité des sous-ressources](/en-US/docs/Web/Security/Subresource_Integrity) pour les scripts et styles de la page.

## Syntaxe

    Content-Security-Policy: require-sri-for script;
    Content-Security-Policy: require-sri-for style;
    Content-Security-Policy: require-sri-for script style;

- `script`
  - : Requiert {{Glossary("SRI")}} pour les scripts.
- `style`
  - : Requiert {{Glossary("SRI")}} pour les feuilles de styles.
- `script style`
  - : Requiert {{Glossary("SRI")}} pour les deux, scripts et feuilles de styles.

## Exemples

Soit cet en-tête CSP :

    Content-Security-Policy: require-sri-for script style

Cet élément {{HTMLElement("script")}} sera chargé et exécuté puisqu'il utilise un attribut `integrity` valide.

```html example-good
<script src="https://code.jquery.com/jquery-3.1.1.slim.js"
        integrity="sha256-5i/mQ300M779N2OVDrl16lbohwXNUdzL/R2aVUXyXWA="
        crossorigin="anonymous"></script>
```

Toutefois, ce script sera bloqué car il n'utilise pas cet attribut :

```html example-bad
<script src="https://code.jquery.com/jquery-3.1.1.slim.js"></script>
```

## Compatibilité des navigateurs

{{Compat("http.headers.csp.Content-Security-Policy.require-sri-for")}}

## Voir aussi

- {{HTTPHeader("Content-Security-Policy")}}
- [Subresource Integrity](/en-US/docs/Web/Security/Subresource_Integrity)
