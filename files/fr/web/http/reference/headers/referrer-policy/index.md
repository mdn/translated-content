---
title: En-tête Referrer-Policy
short-title: Referrer-Policy
slug: Web/HTTP/Reference/Headers/Referrer-Policy
l10n:
  sourceCommit: dd868507df863ab4f37d53c960c76e20e9ee365f
---

L'{{Glossary("response header", "en-tête de réponse")}} HTTP **`Referrer-Policy`** contrôle la quantité d'[informations de référent](/fr/docs/Web/Privacy/Guides/Referer_header:_privacy_and_security_concerns) (envoyées avec l'en-tête {{HTTPHeader("Referer")}}) à inclure dans les requêtes.
En plus de l'en-tête HTTP, vous pouvez [définir cette politique en HTML](#intégration_avec_html).

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Type d'en-tête</th>
      <td>{{Glossary("Response header", "En-tête de réponse")}}</td>
    </tr>
  </tbody>
</table>

## Syntaxe

```http
Referrer-Policy: no-referrer
Referrer-Policy: no-referrer-when-downgrade
Referrer-Policy: origin
Referrer-Policy: origin-when-cross-origin
Referrer-Policy: same-origin
Referrer-Policy: strict-origin
Referrer-Policy: strict-origin-when-cross-origin
Referrer-Policy: unsafe-url
```

> [!NOTE]
> Le nom d'en-tête {{HTTPHeader("Referer")}} est une faute d'orthographe du mot anglais «&nbsp;referrer&nbsp;». L'en-tête `Referrer-Policy` n'a pas cette erreur.

## Directives

- `no-referrer`
  - : L'en-tête {{HTTPHeader("Referer")}} sera entièrement omis. Aucune information sur le référent ne sera envoyée avec les requêtes.
- `no-referrer-when-downgrade`
  - : Envoie l'{{Glossary("origin")}}, le chemin et la chaîne de requête dans l'en-tête {{HTTPHeader("Referer")}} lorsque le niveau de sécurité du protocole reste le même ou s'améliore (HTTP→HTTP, HTTP→HTTPS, HTTPS→HTTPS). Il n'envoie pas l'en-tête {{HTTPHeader("Referer")}} pour les requêtes vers des destinations moins sécurisées (HTTPS→HTTP, HTTPS→file).
- `origin`
  - : N'envoie que l'{{Glossary("origin")}} dans l'en-tête {{HTTPHeader("Referer")}}.
    Par exemple, un document à l'adresse `https://example.com/page.html` enverra le référent `https://example.com/`.
- `origin-when-cross-origin`
  - : Envoie l'origine, le chemin et les paramètres de requête pour les requêtes {{Glossary("Same-origin_policy", "same-origin")}} et seulement l'origine du document dans les autres cas.
- `same-origin`
  - : Envoie l'{{Glossary("origin")}}, le chemin et la chaîne de requête pour les requêtes {{Glossary("Same-origin_policy", "de même origine")}}. Il n'envoie pas l'en-tête {{HTTPHeader("Referer")}} pour les requêtes inter-origines.
- `strict-origin`
  - : N'envoie que l'origine lorsque le niveau de sécurité du protocole reste le même (HTTPS→HTTPS). Il n'envoie pas l'en-tête {{HTTPHeader("Referer")}} vers des destinations moins sécurisées (HTTPS→HTTP).
- `strict-origin-when-cross-origin` (_valeur par défaut_)
  - : Envoie l'origine, le chemin et la chaîne de requête pour les requêtes de même origine. Pour les requêtes inter-origines, il n'envoie que l'origine lorsque le niveau de sécurité du protocole reste le même (HTTPS→HTTPS). Il n'envoie pas l'en-tête {{HTTPHeader("Referer")}} vers des destinations moins sécurisées (HTTPS→HTTP).

    > [!NOTE]
    > Il s'agit de la politique par défaut si aucune politique n'est définie ou si la valeur fournie est invalide (voir la révision de la spécification [novembre 2020 <sup>(angl.)</sup>](https://github.com/whatwg/fetch/pull/1066)). Auparavant, la valeur par défaut était `no-referrer-when-downgrade`.

- `unsafe-url`
  - : Envoie l'origine, le chemin et les paramètres de requête pour toutes les requêtes sans tenir compte du niveau de sécurité.

    > [!WARNING]
    > Cette valeur divulgera des informations potentiellement confidentielles de la part des URL de ressources HTTPS vers des origines non sécurisées. Considérez les conséquences de ce paramétrage avant de vous en servir.

## Intégration avec HTML

Vous pouvez aussi définir des règles de référent au sein d'HTML. Par exemple, vous pouvez définir la règle de référent pour le document entier avec un élément {{HTMLElement("meta")}} dont le [name](/fr/docs/Web/HTML/Reference/Elements/meta/name) est `referrer`&nbsp;:

```html
<meta name="referrer" content="origin" />
```

Ou le définit pour des requêtes spécifiques avec l'attribut `referrerpolicy` sur les éléments {{HTMLElement("a")}}, {{HTMLElement("area")}}, {{HTMLElement("img")}}, {{HTMLElement("iframe")}}, {{HTMLElement("script")}}, ou {{HTMLElement("link")}}&nbsp;:

```html
<a href="http://example.com" referrerpolicy="origin"></a>
```

Autrement, une [relation de lien](/fr/docs/Web/HTML/Reference/Attributes/rel) définie à `noreferrer` sur un élément `a`, `area`, ou `link` peut être défini&nbsp;:

```html
<a href="http://example.com" rel="noreferrer"></a>
```

> [!WARNING]
> Comme vu précédemment, la relation de lien `noreferrer` s'écrit sans trait d'union. Toutefois, quand la règle de référent est spécifiée pour le document entier avec un élément {{HTMLElement("meta")}}, il faut _mettre_ le trait d'union&nbsp;: `<meta name="referrer" content="no-referrer">`.

## Intégration avec CSS

CSS peut demander des ressources référencées dans des feuilles de styles. Ces ressources suivent une règle de référent aussi&nbsp;:

- Les feuilles de styles CSS externes utilisant la règle par défaut (`no-referrer-when-downgrade`), moins qu'elle soit remplacée un l'en-tête HTTP `Referrer-Policy` dans la réponse de la feuille de styles CSS.
- Pour les éléments {{HTMLElement("style")}} ou [attributs `style`](/fr/docs/Web/API/HTMLElement/style), la règle de référent du propriétaire du document est utilisée.

## Exemples

### `no-referrer`

| Depuis le document         | Navigation vers | Référent utilisé    |
| -------------------------- | --------------- | ------------------- |
| `https://example.com/page` | _n'importe où_  | _(pas de référent)_ |

### `no-referrer-when-downgrade`

| Depuis le document          | Navigation vers                 | Référent utilisé           |
| --------------------------- | ------------------------------- | -------------------------- |
| `https://example.com/page`  | `https://example.com/otherpage` | `https://example.com/page` |
| `https://example.com/page`  | `https://mozilla.org`           | `https://example.com/page` |
| `https://example.com/page`  | **http**://example.com          | _(pas de référent)_        |
| **http**://example.com/page | _n'importe où_                  | `http://example.com/page`  |

### `origin`

| Depuis le document         | Navigation vers | Référent utilisé       |
| -------------------------- | --------------- | ---------------------- |
| `https://example.com/page` | _n'importe où_  | `https://example.com/` |

### `origin-when-cross-origin`

| Depuis le document         | Navigation vers                 | Référent utilisé           |
| -------------------------- | ------------------------------- | -------------------------- |
| `https://example.com/page` | `https://example.com/otherpage` | `https://example.com/page` |
| `https://example.com/page` | `https://mozilla.org`           | `https://example.com/`     |
| `https://example.com/page` | **http**://example.com/page     | `https://example.com/`     |

### `same-origin`

| Depuis le document         | Navigation vers                 | Référent utilisé           |
| -------------------------- | ------------------------------- | -------------------------- |
| `https://example.com/page` | `https://example.com/otherpage` | `https://example.com/page` |
| `https://example.com/page` | `https://mozilla.org`           | _(pas de référent)_        |

### `strict-origin`

| Depuis le document          | Navigation vers        | Référent utilisé       |
| --------------------------- | ---------------------- | ---------------------- |
| `https://example.com/page`  | `https://mozilla.org`  | `https://example.com/` |
| `https://example.com/page`  | **http**://example.com | _(pas de référent)_    |
| **http**://example.com/page | _n'importe où_         | `http://example.com/`  |

### `strict-origin-when-cross-origin`

| Depuis le document         | Navigation vers                 | Référent utilisé           |
| -------------------------- | ------------------------------- | -------------------------- |
| `https://example.com/page` | `https://example.com/otherpage` | `https://example.com/page` |
| `https://example.com/page` | `https://mozilla.org`           | `https://example.com/`     |
| `https://example.com/page` | **http**://example.com          | _(pas de référent)_        |

### `unsafe-url`

| Depuis le document               | Navigation vers | Référent utilisé                 |
| -------------------------------- | --------------- | -------------------------------- |
| `https://example.com/page?q=123` | _n'importe où_  | `https://example.com/page?q=123` |

### Définir une règle par défaut

Si vous voulez définir une règle à appliquer par défaut dans les cas où la règle voulue n'est pas supportée par les navigateurs, utilisez une liste de valeurs séparées par des virgules avec la règle voulue fournie en dernière position&nbsp;:

```http
Referrer-Policy: no-referrer, strict-origin-when-cross-origin
```

Ici, `no-referrer` ne sera utilisée que si `strict-origin-when-cross-origin` n'est pas supportée par le navigateur.

> [!NOTE]
> Définir plusieurs valeurs n'est supporté que dans l'en-tête HTTP `Referrer-Policy` et non dans l'attribut `referrerpolicy`.

## Préférences et réglages spécifiques aux navigateurs

### Préférences de Firefox

Vous pouvez définir la politique de référent _par défaut_ dans les préférences de Firefox. Les noms des préférences varient selon la version&nbsp;:

- Firefox version 59 et suivantes&nbsp;: `network.http.referer.defaultPolicy` (et `network.http.referer.defaultPolicy.pbmode` pour la navigation privée)
- Firefox versions 53 à 58&nbsp;: `network.http.referer.userControlPolicy`

Toutes ces préférences acceptent les mêmes valeurs&nbsp;: `0 = no-referrer`, `1 = same-origin`, `2 = strict-origin-when-cross-origin`, `3 = no-referrer-when-downgrade`.

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- [Sécurité web > En-tête Referer&nbsp;: questions de vie privée et de sécurité](/fr/docs/Web/Privacy/Guides/Referer_header:_privacy_and_security_concerns)
- En utilisant [Fetch](/fr/docs/Web/API/Fetch_API)&nbsp;: {{DOMxRef("Request.referrerPolicy")}}
- [Politique de même origine](/fr/docs/Web/Security/Defenses/Same-origin_policy)
- [Référent HTTP](<https://fr.wikipedia.org/wiki/Référent_(informatique)>) sur Wikipédia
- [Contrôler plus finement vos référents — Mozilla Security Blog <sup>(angl.)</sup>](https://blog.mozilla.org/security/2015/01/21/meta-referrer/)
