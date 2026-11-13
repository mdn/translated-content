---
title: En-tête X-Content-Type-Options
short-title: X-Content-Type-Options
slug: Web/HTTP/Reference/Headers/X-Content-Type-Options
l10n:
  sourceCommit: e20c8ff4a722842bf3a09b3e0536dd140be5f629
---

{{Glossary("response header", "L'en-tête de réponse")}} HTTP **`X-Content-Type-Options`** indique que les [types MIME](/fr/docs/Web/HTTP/Guides/MIME_types) annoncés dans les en-têtes {{HTTPHeader("Content-Type")}} doivent être respectés et ne pas être modifiés.
L'en-tête permet d'éviter la [détection du type MIME](/fr/docs/Web/HTTP/Guides/MIME_types#détection_du_type_mime) en définissant que les types MIME sont délibérément configurés.

Les testeur·euse·s en sécurité du site s'attendent généralement à ce que cet en-tête soit défini (et que l'en-tête `Content-Type` soit correctement défini pour toutes les ressources).

La directive `nosniff` a deux effets selon le contexte&nbsp;:

- **Blocage des requêtes**&nbsp;: Pour les requêtes avec une [destination](/fr/docs/Web/API/Request/destination) de `"script"` ou `"style"`, le navigateur bloque la réponse si le type MIME ne correspond pas à un type attendu (un [type MIME JavaScript <sup>(angl.)</sup>](https://html.spec.whatwg.org/multipage/scripting.html#javascript-mime-type) pour les scripts, ou `text/css` pour les feuilles de style). Voir la [spécification Fetch <sup>(angl.)</sup>](https://fetch.spec.whatwg.org/#ref-for-determine-nosniff) pour plus de détails.
- **Désactivation de la détection du type MIME**&nbsp;: Pour les autres types de réponse, y compris les navigations vers un nouveau document HTML, le navigateur utilise le {{HTTPHeader("Content-Type")}} fourni tel quel au lieu d'examiner le contenu pour en déduire le type.
  Par exemple, si un serveur envoie une réponse avec `Content-Type: text/plain` et `X-Content-Type-Options: nosniff`, le navigateur ne l'interprète pas comme du HTML, même si le contenu contient du balisage HTML.
  Cela empêche les [attaques XSS](/fr/docs/Web/Security/Attacks/XSS) où le contenu téléchargé par l'utilisateur·ice est exécuté comme un document HTML, même si le navigateur a défini qu'il doit être traité comme du texte brut (ou un autre type).
  Voir la [spécification sur la détection du type MIME <sup>(angl.)</sup>](https://mimesniff.spec.whatwg.org/#mime-type-sniffing-algorithm) pour plus de détails.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Type d'en-tête</th>
      <td>{{Glossary("Response header", "En-tête de réponse")}}</td>
    </tr>
    <tr>
      <th scope="row">{{Glossary("Forbidden response header name", "En-tête de réponse interdit")}}</th>
      <td>Non</td>
    </tr>
  </tbody>
</table>

## Syntaxe

```http
X-Content-Type-Options: nosniff
```

## Directives

- `nosniff`
  - : Bloque une requête si sa destination est de type `style` et que le type MIME n'est pas `text/css`, ou de type `script` et que le type MIME n'est pas un [type MIME JavaScript <sup>(angl.)</sup>](https://html.spec.whatwg.org/multipage/scripting.html#javascript-mime-type).

    Il empêche également la détection du type MIME pour tous les autres types de réponse, obligeant le navigateur à utiliser le {{HTTPHeader("Content-Type")}} déclaré sans examiner le contenu de la réponse.
    En particulier, il empêche un navigateur de traiter une réponse comme `text/html` lorsqu'elle est chargée dans un contexte de navigation et que l'en-tête `Content-Type` est absent ou indique un type non HTML.

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- L'en-tête {{HTTPHeader("Content-Type")}}
- La [définition originale <sup>(angl.)</sup>](https://learn.microsoft.com/en-us/archive/blogs/ie/ie8-security-part-vi-beta-2-update) de `X-Content-Type-Options` par Microsoft.
- Utilisez [l'observatoire HTTP](/fr/observatory) pour tester la configuration de sécurité des sites Web (y compris cet en-tête).
- [Atténuer les attaques de confusion MIME dans Firefox <sup>(angl.)</sup>](https://blog.mozilla.org/security/2016/08/26/mitigating-mime-confusion-attacks-in-firefox/)
