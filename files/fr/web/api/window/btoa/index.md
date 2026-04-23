---
title: "Window : méthode btoa()"
short-title: btoa()
slug: Web/API/Window/btoa
l10n:
  sourceCommit: 3e097148b4c6cb9c6d8824275599f855ca63827b
---

{{APIRef("HTML DOM")}}

La méthode **`btoa()`** de l'interface {{DOMxRef("Window")}} crée une chaîne de caractères {{Glossary("Base64")}} encodée à partir d'une chaîne de caractères {{Glossary("ASCII")}} (c'est-à-dire une chaîne dans laquelle chaque caractère est traité comme un octet de données binaires).

Vous pouvez utiliser cette méthode pour encoder des données qui pourraient autrement engendrer des problèmes de communication, les transmettre, puis utiliser la méthode {{DOMxRef("Window.atob()")}} pour décoder à nouveau les données. Par exemple, vous pouvez encoder des caractères de contrôle tels que les valeurs ASCII de 0 à 31.

Vous pouvez également utiliser la méthode {{JSxRef("Uint8Array.prototype.toBase64()")}} si vos données sont dans un objet `Uint8Array` afin d'éviter de créer une chaîne de caractères contenant des octets bruts.

## Syntaxe

```js-nolint
btoa(stringToEncode)
```

### Paramètres

- `stringToEncode`
  - : La chaîne de caractères binaire à encoder. Les chaînes de caractères en JavaScript sont encodées en {{Glossary("UTF-16")}}, ce qui signifie que chaque caractère doit avoir un point de code inférieur à 256, représentant un octet de données.

### Valeur de retour

Une chaîne de caractères ASCII contenant la représentation Base64 de `stringToEncode`.

### Exceptions

- `InvalidCharacterError` {{DOMxRef("DOMException")}}
  - : La chaîne de caractères contenait un caractère qui ne tenait pas dans un seul octet. Voir la section «&nbsp;Chaîne de caractères Unicode&nbsp;» ci-dessous pour plus de détails.

## Exemples

```js
const donneesEncodees = window.btoa("Salut, le monde"); // encode une chaîne de caractères
const donneesDecodees = window.atob(donneesEncodees); // décode la chaîne de caractères
```

### Chaînes de caractères Unicode

Base64, par conception, attend des données binaires comme entrée. En termes de chaînes de caractères JavaScript, cela signifie des chaînes dans lesquelles le point de code de chaque caractère occupe un seul octet. Donc, si vous passez une chaîne de caractères à `btoa()` contenant des caractères qui occupent plus d'un octet, vous obtiendrez une erreur, car cela n'est pas considéré comme des données binaires&nbsp;:

```js
const ok = "a";
console.log(ok.codePointAt(0).toString(16)); //   61: occupe < 1 octet

const notOK = "✓";
console.log(notOK.codePointAt(0).toString(16)); // 2713: occupe > 1 octet

console.log(window.btoa(ok)); // YQ==
console.log(window.btoa(notOK)); // erreur
```

Comme `btoa` interprète les points de code de sa chaîne de caractères d'entrée comme des valeurs d'octet, appeler `btoa` sur une chaîne de caractères provoquera une exception «&nbsp;Caractère hors plage&nbsp;» si le point de code d'un caractère dépasse `0xff`. Pour les cas où vous devez encoder du texte Unicode arbitraire, il est nécessaire de convertir d'abord la chaîne de caractères en ses octets constitutifs en {{Glossary("UTF-8")}}, puis d'encoder les octets.

La solution la plus simple consiste à utiliser `TextEncoder` et `TextDecoder` pour convertir entre UTF-8 et les représentations sur un seul octet de la chaîne de caractères&nbsp;:

```js
function base64ToBytes(base64) {
  const binString = atob(base64);
  return Uint8Array.from(binString, (m) => m.codePointAt(0));
}

function bytesToBase64(bytes) {
  const binString = Array.from(bytes, (byte) =>
    String.fromCodePoint(byte),
  ).join("");
  return btoa(binString);
}

// Utilisation
bytesToBase64(new TextEncoder().encode("a Ā 𐀀 文 🦄")); // "YSDEgCDwkICAIOaWhyDwn6aE"
new TextDecoder().decode(base64ToBytes("YSDEgCDwkICAIOaWhyDwn6aE")); // "a Ā 𐀀 文 🦄"
```

### Convertir des données binaires arbitraires

Les fonctions `bytesToBase64` et `base64ToBytes` de la section précédente peuvent être utilisées directement pour convertir entre des chaînes de caractères Base64 et {{JSxRef("Uint8Array")}}.

Pour de meilleures performances, la conversion asynchrone entre des URL de données base64 est possible nativement sur la plateforme web via les API {{DOMxRef("FileReader")}} et [`fetch`](/fr/docs/Web/API/Fetch_API)&nbsp;:

```js
async function bytesToBase64DataUrl(bytes, type = "application/octet-stream") {
  return await new Promise((resolve, reject) => {
    const reader = Object.assign(new FileReader(), {
      onload: () => resolve(reader.result),
      onerror: () => reject(reader.error),
    });
    reader.readAsDataURL(new File([bytes], "", { type }));
  });
}

async function dataUrlToBytes(dataUrl) {
  const res = await fetch(dataUrl);
  return new Uint8Array(await res.arrayBuffer());
}

// Utilisation
await bytesToBase64DataUrl(new Uint8Array([0, 1, 2])); // "data:application/octet-stream;base64,AAEC"
await dataUrlToBytes("data:application/octet-stream;base64,AAEC"); // Uint8Array [0, 1, 2]
```

> [!NOTE]
> Pour les environnements compatibles, il est également possible d'utiliser les méthodes natives {{JSxRef("Uint8Array.fromBase64()")}}, {{JSxRef("Uint8Array.prototype.toBase64()")}} et {{JSxRef("Uint8Array.prototype.setFromBase64()")}}.

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- [Une prothèse d'émulation pour `btoa` <sup>(angl.)</sup>](https://github.com/zloirock/core-js#base64-utility-methods) est disponible dans [`core-js` <sup>(angl.)</sup>](https://github.com/zloirock/core-js)
- [Les url `data`](/fr/docs/Web/URI/Reference/Schemes/data)
- {{DOMxRef("WorkerGlobalScope.btoa()")}}&nbsp;: la même méthode, mais dans les contextes de worker.
- La méthode {{DOMxRef("Window.atob()")}}
- La méthode {{JSxRef("Uint8Array.prototype.toBase64()")}}
- L'entrée de glossaire {{Glossary("Base64")}}
