---
title: En-tête Referer
short-title: Referer
slug: Web/HTTP/Reference/Headers/Referer
l10n:
  sourceCommit: dd868507df863ab4f37d53c960c76e20e9ee365f
---

L'{{Glossary("request header", "en-tête de requête")}} HTTP **`Referer`** contient l'adresse absolue ou partielle à partir de laquelle une ressource a été demandée.
L'en-tête `Referer` permet à un serveur d'identifier les pages référentes à partir desquelles des personnes accèdent à une page ou où les ressources demandées sont utilisées.
Ces données peuvent être utilisées pour l'analyse, la journalisation, l'optimisation du cache, et plus encore.

Lorsque vous cliquez sur un lien, le `Referer` contient l'adresse de la page qui inclut ce lien.
Lorsque vous effectuez des requêtes de ressources vers un autre domaine, le `Referer` contient l'adresse de la page qui utilise la ressource demandée.

L'en-tête `Referer` peut contenir une _origine_, un _chemin_ et une _chaîne de requête_, et peut ne pas contenir des [fragments d'URL](/fr/docs/Web/URI/Reference/Fragment) (par exemple `#section`) ni des informations `username:password`.
La _politique de référent_ de la requête définit les données qui peuvent être incluses. Voir {{HTTPHeader("Referrer-Policy")}} pour plus d'[informations](/fr/docs/Web/HTTP/Reference/Headers/Referrer-Policy#directives) et d'[exemples](/fr/docs/Web/HTTP/Reference/Headers/Referrer-Policy#exemples).

Le `Referer` doit également être envoyé dans les requêtes suivant une réponse {{HTTPHeader("Refresh")}} (ou l'équivalent [`<meta http-equiv="refresh" content="...">`](/fr/docs/Web/HTML/Reference/Elements/meta/http-equiv)) provoquant une navigation vers une nouvelle page, si la politique de référent le permet.

> [!NOTE]
> Le nom d'en-tête «&nbsp;referer&nbsp;» est en réalité une faute d'orthographe du mot anglais «&nbsp;referrer&nbsp;».
> Voir [HTTP referer sur Wikipédia](<https://fr.wikipedia.org/wiki/Référent_(informatique)>) pour plus de détails.

> [!WARNING]
> Cet en-tête peut avoir des conséquences indésirables sur la sécurité et la vie privée des utilisateur·rice·s.
> Voir [Questions de sécurité et de vie privée&nbsp;: quid de l'en-tête `referer`](/fr/docs/Web/Privacy/Guides/Referer_header:_privacy_and_security_concerns) pour plus d'informations et des pistes d'atténuation.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Type d'en-tête</th>
      <td>{{Glossary("Request header", "En-tête de requête")}}</td>
    </tr>
    <tr>
      <th scope="row">{{Glossary("Forbidden request header", "Nom d'en-tête interdit")}}</th>
      <td>Oui</td>
    </tr>
  </tbody>
</table>

## Syntaxe

```http
Referer: <url>
```

## Directives

- `<url>`
  - : Une adresse absolue ou partielle de la page web à partir de laquelle la requête a été émise.
    Les fragments d'URL (par exemple, `#section`) et les informations d'identification utilisateur·ice (par exemple, `username:password` dans `https://username:password@example.com/foo/bar/`) ne sont pas inclus.
    L'origine, le chemin et la chaîne de requête peuvent être inclus, selon la [politique de référent](/fr/docs/Web/HTTP/Reference/Headers/Referrer-Policy#directives).

## Exemples

```http
Referer: https://developer.mozilla.org/fr/docs/Web/JavaScript
Referer: https://example.com/page?q=123
Referer: https://example.com/
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- L'en-tête HTTP {{HTTPHeader("Referrer-Policy")}}
- [Politique de même origine (<i lang="en">same-origin policy</i>)](/fr/docs/Web/Security/Defenses/Same-origin_policy)
- [Fetch](/fr/docs/Web/API/Fetch_API): {{DOMxRef("Request.referrerPolicy")}}
- [Tighter Control Over Your Referrers — Mozilla Security Blog <sup>(angl.)</sup>](https://blog.mozilla.org/security/2015/01/21/meta-referrer/)
- [Référent HTTP](<https://fr.wikipedia.org/wiki/Référent_(informatique)>) sur Wikipédia
