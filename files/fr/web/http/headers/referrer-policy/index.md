---
title: Referrer-Policy
slug: Web/HTTP/Headers/Referrer-Policy
---

{{HTTPSidebar}}

L'en-tête {{glossary("HTTP header")}} **`Referrer-Policy`** contrôle la quantité d'[informations sur le référent (referrer)](/fr/docs/Web/Security/Referer_header:_privacy_and_security_concerns) (envoyées par l'en-tête {{HTTPHeader("Referer")}}) incluses dans la requête.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Type d'en-tête</th>
      <td>{{Glossary("Response header")}}</td>
    </tr>
    <tr>
      <th scope="row">{{Glossary("Forbidden header name")}}</th>
      <td>non</td>
    </tr>
  </tbody>
</table>

## Syntaxe

> [!NOTE]
> Le nom originel de l'en-tête, {{HTTPHeader("Referer")}}, est une faute de frappe du mot anglais "referrer". L'en-tête `Referrer-Policy` ne comporte pas cette erreur.

```
Referrer-Policy: no-referrer
Referrer-Policy: no-referrer-when-downgrade
Referrer-Policy: origin
Referrer-Policy: origin-when-cross-origin
Referrer-Policy: same-origin
Referrer-Policy: strict-origin
Referrer-Policy: strict-origin-when-cross-origin
Referrer-Policy: unsafe-url
```

## Directives

- `no-referrer`
  - : L'en-tête {{HTTPHeader("Referer")}} sera entièrement omis. Aucune information sur le référent ne sera envoyée avec les requêtes.
- `no-referrer-when-downgrade`
  - : [L'origine](/fr/docs/Glossary/Origin), le chemin et les paramètres de requête (<i lang="en">querystring</i>) présents dans l'URL sont envoyés comme référent quand le niveau de sécurité du protocole reste le même (HTTP vers HTTP, HTTPS vers HTTPS) ou s'améliore (HTTP vers HTTPS), mais ne sont pas envoyés si la destination est moins sécurisée que l'origine (HTTPS vers HTTP).
- `origin`
  - : N'envoie que l'{{glossary("origin")}} du document comme référent.
    Par exemple, un document à l'adresse `https://example.com/page.html` enverra le référent `https://example.com/`.
- `origin-when-cross-origin`
  - : Envoie l'origine, le chemin et les paramètres de requête pour les requêtes {{glossary("Same-origin_policy", "same-origin")}} et seulement l'origine du document dans les autres cas.
- `same-origin`
  - : Un référent sera envoyé aux [page de même origine](/fr/docs/Web/Security/Same-origin_policy), mais des requêtes vers des adresses externes n'enverront aucune information sur le référent.
- `strict-origin`
  - : N'envoie que l'origine du document comme référent quand le niveau de sécurité du protocole reste le même (HTTPS vers HTTPS) mais n'envoie rien si la destination est moins sécurisée (HTTPS vers HTTP).
- `strict-origin-when-cross-origin` (_valeur par défaut_)
  - : Envoie l'origine, le chemin et les paramètres de requête pour les requêtes de même origine. N'envoie que l'origine quand le niveau de sécurité du protocole reste le même pour les requêtes vers d'autres origines (HTTPS vers HTTPS) et n'envoie aucun en-tête [`Referer`](/fr/docs/Web/HTTP/Headers/Referer) si la destination est moins sécurisée (HTTPS vers HTTP).
- `unsafe-url`

  - : Envoie l'origine, le chemin et les paramètres de requête pour toutes les requêtes sans tenir compte du niveau de sécurité.

    > [!WARNING]
    > Cette valeur divulgera des informations potentiellement confidentielles de la part des URL de ressources HTTPS vers des origines non sécurisées. Considérez les conséquences de ce paramétrage avant de vous en servir.

## Intégration avec HTML

Vous pouvez aussi définir des règles de référent au sein d'HTML. Par exemple, vous pouvez définir la règle de référent pour le document entier avec un élément {{HTMLElement("meta")}} dont le [name](/fr/docs/Web/HTML/Element/meta#attr-name) est `referrer` :

```html
<meta name="referrer" content="origin" />
```

Ou le définit pour des requêtes spécifiques avec l'attribut `referrerpolicy` sur les éléments {{HTMLElement("a")}}, {{HTMLElement("area")}}, {{HTMLElement("img")}}, {{HTMLElement("iframe")}}, {{HTMLElement("script")}}, ou {{HTMLElement("link")}} :

```html
<a href="http://example.com" referrerpolicy="origin"></a>
```

Autrement, une [relation de lien](/fr/docs/Web/HTML/Attributes/rel) définie à `noreferrer` sur un élément `a`, `area`, ou `link` peut être défini :

```html
<a href="http://example.com" rel="noreferrer"></a>
```

> [!WARNING]
> Comme vu précédemment, la relation de lien `noreferrer` s'écrit sans trait d'union. Toutefois, quand la règle de référent est spécifiée pour le document entier avec un élément {{HTMLElement("meta")}}, il faut mettre le trait d'union : `<meta name="referrer" content="no-referrer">`.

## Intégration avec CSS

CSS peut demander des ressources référencées dans des feuilles de styles. Ces ressources suivent une règle de référent aussi :

- Les feuilles de styles CSS externes utilisant la règle par défaut (`no-referrer-when-downgrade`), moins qu'elle soit remplacée un l'en-tête HTTP `Referrer-Policy` dans la réponse de la feuille de styles CSS.
- Pour les éléments {{HTMLElement("style")}} ou [attributs `style`](/fr/docs/Web/API/HTMLElement/style), la règle de référent du propriétaire du document est utilisée.

## Exemples

<table class="standard-table">
  <thead>
    <tr>
      <th scope="col">Règle</th>
      <th scope="col">Document</th>
      <th scope="col">Navigation vers</th>
      <th scope="col">Référent</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th><code>no-referrer</code></th>
      <td>https://example.com/page</td>
      <td><em>n'importe où</em></td>
      <td><em>(pas de référent)</em></td>
    </tr>
    <tr>
      <th rowspan="3"><code>no-referrer-when-downgrade</code></th>
      <td rowspan="3">https://example.com/page</td>
      <td>https://example.com/otherpage</td>
      <td>https://example.com/page</td>
    </tr>
    <tr>
      <td>https://mozilla.org</td>
      <td>https://example.com/page</td>
    </tr>
    <tr>
      <td><strong>http</strong>://example.org</td>
      <td><em>(pas de référent)</em></td>
    </tr>
    <tr>
      <th><code>origin</code></th>
      <td>https://example.com/page</td>
      <td><em>n'importe où</em></td>
      <td>https://example.com/</td>
    </tr>
    <tr>
      <th rowspan="3"><code>origin-when-cross-origin</code></th>
      <td rowspan="3">https://example.com/page</td>
      <td>https://example.com/otherpage</td>
      <td>https://example.com/page</td>
    </tr>
    <tr>
      <td>https://mozilla.org</td>
      <td>https://example.com/</td>
    </tr>
    <tr>
      <td><strong>http</strong>://example.com/page</td>
      <td>https://example.com/</td>
    </tr>
    <tr>
      <th rowspan="2"><code>same-origin</code></th>
      <td rowspan="2">https://example.com/page</td>
      <td>https://example.com/otherpage</td>
      <td>https://example.com/page</td>
    </tr>
    <tr>
      <td>https://mozilla.org</td>
      <td><em>(pas de référent)</em></td>
    </tr>
    <tr>
      <th rowspan="3"><code>strict-origin</code></th>
      <td rowspan="2">https://example.com/page</td>
      <td>https://mozilla.org</td>
      <td>https://example.com/</td>
    </tr>
    <tr>
      <td><strong>http</strong>://example.org</td>
      <td><em>(pas de référent)</em></td>
    </tr>
    <tr>
      <td><strong>http</strong>://example.com/page</td>
      <td><em>n'importe où</em></td>
      <td>http://example.com/</td>
    </tr>
    <tr>
      <th rowspan="3"><code>strict-origin-when-cross-origin</code></th>
      <td rowspan="3">https://example.com/page</td>
      <td>https://example.com/otherpage</td>
      <td>https://example.com/page</td>
    </tr>
    <tr>
      <td>https://mozilla.org</td>
      <td>https://example.com/</td>
    </tr>
    <tr>
      <td><strong>http</strong>://example.org</td>
      <td><em>(pas de référent)</em></td>
    </tr>
    <tr>
      <th><code>unsafe-url</code></th>
      <td>https://example.com/page?q=123</td>
      <td><em>n'importe où</em></td>
      <td>https://example.com/page?q=123</td>
    </tr>
  </tbody>
</table>

### Spécifier une règle par défaut

Si vous voulez spécifier une règle à appliquer par défaut dans les où la règle voulue n'est pas supportée par les navigateurs, utilisez un liste de valeurs séparées par des virgules avec la règle voulue fournie en dernière position :

```
Referrer-Policy: no-referrer, strict-origin-when-cross-origin
```

Ici, `no-referrer` ne sera utilisée que si `strict-origin-when-cross-origin` n'est pas supportée par le navigateur.

> [!NOTE]
> Spécifier plusieurs valeurs n'est supporté que dans l'en-tête HTTP `Referrer-Policy` et non dans l'attribut `referrerpolicy`.

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- [Référent](<https://fr.wikipedia.org/wiki/Référent_(informatique)>) sur Wikipédia
- En utilisant [Fetch](/fr/docs/Web/API/Fetch_API) : {{domxref("Request.referrerPolicy")}}
- La directive obsolète {{HTTPHeader("Content-Security-Policy/referrer", "referrer")}} {{deprecated_inline}} de l'en-tête {{HTTPHeader("Content-Security-Policy")}}.
- [Same-origin policy](/fr/docs/Web/Security/Same-origin_policy)
- [Tighter Control Over Your Referrers – Mozilla Security Blog](https://blog.mozilla.org/security/2015/01/21/meta-referrer/)
