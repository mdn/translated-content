---
title: Secure Contexts
slug: Web/Security/Secure_Contexts
---

Un navigateur entre dans un **contexte sécurisé** quand il a satisfait les exigences minimale de sécurité. Un contexte sécurisé permet au navigateur de mettre à disposition des APIs qui nécessitent des transferts sécurisés avec l'utilisateur.

## Pourquoi certaines fonctionnalitées devraient être limitées ?

Certaines APIs du web peuvent donner beaucoup de pouvoir à un attaqueur, lui permettant par exemple:

- Entrer dans la vie privée d'un utilisateur.
- Avoir accès à l'ordinateur d'un utilisateur.
- Avoir accès à des données (comme l'identité de l'utilisateur).

## À quel moment un context est-il considéré comme sécurisé ?

Un contexte sera considéré comme sécurisé s'il est servi locallement, ou depuis un serveur sécurisé. Un contexte qui n'est pas à la racine (une page qui n'est pas dans une fenêtre, iframe, ...) doit avoir tous ses contextes parents sécurisés.

Les fichiers servis locallement avec des chemins comme `http://localhost` et `file://` sont considérés sécurisés.

Les contextes qui ne sont pas servis locallement doivent être servis avec _https\://_ ou _wss\://_ et les protocoles utilisés ne doivent pas être considérés obsolètes.

## Détection des fonctionnalités

Les pages peuvent utiliser la détection de fonctionnalités pour vérifier si elles sont dans un context sécurisé ou non en utilisant le booléen `isSecureContext` qui est présent dans le scope global.

```js
if (window.isSecureContext) {
  // La page est dans un contexte sécurisé, les services workers sont disponibles.
  navigator.serviceWorker.register("/offline-worker.js").then(function () {
    ...
  });
}
```

## Quelles APIs requièrent un contexte sécurisé ?

- <i lang="en">Service Workers</i>
- <i lang="en">Web Bluetooth</i>
- <i lang="en">EME</i>

### Prositions de brouillons

- <https://w3c.github.io/sensors/>
- <https://w3c.github.io/webappsec-credential-management/>
- <https://w3c.github.io/geofencing-api/>
- <https://w3c.github.io/web-nfc/releases/20150925/>

### Navigateurs

Certains navigateurs peuvent décider de demander à certaines APIs d'être dans un contexte sécurisé même si la spécification ne le demande pas.

<table class="standard-table">
  <tbody>
    <tr>
      <td></td>
      <td>Chrome</td>
      <td>Safari</td>
      <td>Firefox</td>
    </tr>
    <tr>
      <td>getUserMedia</td>
      <td>
        <p>Désactivé</p>
        <p>
          <a href="https://codereview.chromium.org/1336633002"
            >Supprimé dans Chrome 47</a
          >
        </p>
      </td>
      <td></td>
      <td>
        <p>
          Accès temporaire uniquement (les utilisateurs ne peuvent pas choisir
          "Retenir ce choix" dans la selection de permission).
        </p>
      </td>
    </tr>
    <tr>
      <td>Geolocation</td>
      <td>
        <p>Désactivé</p>
        <p>
          <a href="https://codereview.chromium.org/1530403002/"
            >Supprimé dans Chrome 50</a
          >
        </p>
      </td>
      <td>
        <p>Désactivé</p>
        <p>
          <a href="https://trac.webkit.org/changeset/200686">Suppression ici</a>
        </p>
      </td>
      <td>
        <p>Suppression en cours</p>
        <p>
          <a href="https://bugzilla.mozilla.org/show_bug.cgi?id=1072859"
            >Suppression attendue pour Firefox 55</a
          >
        </p>
      </td>
    </tr>
    <tr>
      <td>EME</td>
      <td>Avertissement de dépréciation</td>
      <td></td>
      <td></td>
    </tr>
    <tr>
      <td>Device motion / orientation</td>
      <td>Avertissement de dépréciation</td>
      <td></td>
      <td></td>
    </tr>
    <tr>
      <td>MIDI</td>
      <td>Désactivé</td>
      <td></td>
      <td></td>
    </tr>
    <tr>
      <td><i lang="en">Web Crypto API</i></td>
      <td>
        <em
          >est réservé à HTTPS même is la vérification du Secure Context est
          antérieur</em
        >
      </td>
      <td></td>
      <td></td>
    </tr>
  </tbody>
</table>

Pour vérifier le support de votre navigateur, utilisez le site: `http://permission.site`

_Note: Safari et Chrome ne supportent pas complètement la spécification des Secure Contexts, certaines APIs peuvent fonctionner avec des iframes utilisant du HTTPS dans une page utilisant du HTTP ou dans une page qui a un contexte ouvert avec une page non sécurisée (c'est le cas quand une page utilisant du HTTP utilise window\.open ou target="\_blank")._

## Spécifications

{{Specifications}}

## Voir aussi

- {{domxref("Window.isSecureContext")}}
