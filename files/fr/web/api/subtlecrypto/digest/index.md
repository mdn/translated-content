---
title: SubtleCrypto.digest()
slug: Web/API/SubtleCrypto/digest
translation_of: Web/API/SubtleCrypto/digest
---
{{APIRef("Web Crypto API")}}{{SecureContext_header}}

La méthode **`digest()`** de l'interface {{domxref("SubtleCrypto")}} génère un {{Glossary("digest")}} de la donnée fournie. Un condensé est une petite valeur de taille fixe issue d'une donnée de taille variable. Les condensés cryptographiques doivent résister à la collision, ce qui signifie qu'il doit être très difficile d'obtenir le même condensé à partir de deux entrés différentes.

Il prend en argument un identifiant pour l'algorithme de condensé et les données à traiter. Il retourne une {{jsxref("Promise")}} qui contiendra le condensé.

## Syntaxe

    const digest = crypto.subtle.digest(algorithm, data);

### Paramètres

- _`algorithm`_ est une {{domxref("DOMString")}} indiquant la fonction de condensé à utiliser. Les valeurs possibles sont:

  - `SHA-1` (ne pas utiliser pour des applications cryptographiques)
  - `SHA-256`
  - `SHA-384`
  - `SHA-512`.

- _`data`_ est un {{jsxref("ArrayBuffer")}} ou un {{domxref("ArrayBufferView")}} contenant les données à traiter.

### Valeur retournée

- `digest` est une {{jsxref("Promise")}} pour accéder {{jsxref("ArrayBuffer")}} au condensé.

## Algorithmes supportés

Les algorithmes de condensé, aussi connue sous le nom de [fonctions de hachage cryptographique](/fr/docs/Glossaire/Fonction_de_hachage_cryptographique), transforme un bloque de données de longueur arbitraire dans un résultat de taille fixe, souvent plus petit que l'entré. Ils ont de nombreuses utilisations en cryptographie.

### SHA-1

Cet algorithme est spécifié dans [FIPS 180-4](https://nvlpubs.nist.gov/nistpubs/FIPS/NIST.FIPS.180-4.pdf), section 6.1, et produit un résultat de 160 bits de long.

> **Attention :** Cet algorithme est maintenant considérer comme vulnérable et ne doit pas être utilisé pour des applications cryptographiques.

### SHA-256

Cet algorithme est spécifié dans [FIPS 180-4](https://nvlpubs.nist.gov/nistpubs/FIPS/NIST.FIPS.180-4.pdf), section 6.2, et produit un résultat de 256 bits de long.

### SHA-384

Cet algorithme est spécifié dans [FIPS 180-4](https://nvlpubs.nist.gov/nistpubs/FIPS/NIST.FIPS.180-4.pdf), section 6.5, et produit un résultat de 384 bits de long.

### SHA-512

Cet algorithme est spécifié dans [FIPS 180-4](https://nvlpubs.nist.gov/nistpubs/FIPS/NIST.FIPS.180-4.pdf), section 6.4, et produit un résultat de 512 bits de long.

> **Note :** Si vous cherchez à créer un condensé pour authentifié un message ([HMAC](/fr/docs/Glossary/HMAC)), vous aurez plutôt besoin de [SubtleCrypto.sign()](/en-US/docs/Web/API/SubtleCrypto/sign#HMAC).

## Exemples

### Exemple basique

Cet exemple encode un message, puis calcule le condensé avec SHA-256, enfin affiche la longueur du résultat.

```js
const text = 'Un obscur message venant du le système S-K, votre majesté. Ses habitants le nomment la planète Terre.';

async function digestMessage(message) {
  const encoder = new TextEncoder();
  const data = encoder.encode(message);
  const hash = await crypto.subtle.digest('SHA-256', data);
  return hash;
}

const digestBuffer = await digestMessage(text);
console.log(digestBuffer.byteLength);
```

### Convertir un condensé vers une chaîne hexadécimale

Le condensé est retourné sous forme d'un `ArrayBuffer`, mais la comparaison et l'affichage se fait souvent avec des chaînes hexadécimales. Cet exemple calcule un condensé puis converti l'`ArrayBuffer` vers une chaîne hexadécimale.

```js
const text = 'Un obscur message venant du le système S-K, votre majesté. Ses habitants le nomment la planète Terre.';

async function digestMessage(message) {
  const msgUint8 = new TextEncoder().encode(message);                           // encode comme (utf-8) Uint8Array
  const hashBuffer = await crypto.subtle.digest('SHA-256', msgUint8);           // fait le condensé
  const hashArray = Array.from(new Uint8Array(hashBuffer));                     // convertit le buffer en tableau d'octet
  const hashHex = hashArray.map(b => b.toString(16).padStart(2, '0')).join(''); // convertit le tableau en chaîne hexadélimale
  return hashHex;
}

const digestHex = await digestMessage(text);
console.log(digestHex);
```

## Spécifications

| Spécifications                                                                                                           | Statue                               | Commentaire        |
| ------------------------------------------------------------------------------------------------------------------------ | ------------------------------------ | ------------------ |
| {{SpecName('Web Crypto API', '#dfn-SubtleCrypto-method-digest', 'SubtleCrypto.digest()')}} | {{Spec2('Web Crypto API')}} | Définition intiale |

## Compatibilité des navigateurs

{{Compat("api.SubtleCrypto.digest")}}

> **Note :** Dans Chrome 60, une fonctionnalité a été ajoutée qui désactive **crypto.subtle** pour les connexions non TLS.

## Voir aussi

- [(en) Chromium secure origins specification](https://www.chromium.org/Home/chromium-security/prefer-secure-origins-for-powerful-new-features)
- [(en) FIPS 180-4](https://nvlpubs.nist.gov/nistpubs/FIPS/NIST.FIPS.180-4.pdf) spécifie les algorithmes de condensé de la famille SHA.
