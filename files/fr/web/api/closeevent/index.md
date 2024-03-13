---
title: CloseEvent
slug: Web/API/CloseEvent
---

{{APIRef("Websockets API")}}

Un évènement `CloseEvent` est envoyé au client utilisant une [WebSocket](/fr/docs/Glossary/WebSockets) lorsque la connexion est fermée. Cet évènement est envoyé au `listener` indiqué par l'attribut `onclose` de la `WebSocket`.

## Constructeur

- {{domxref("CloseEvent.CloseEvent", "CloseEvent()")}}
  - : Construit un nouvel événement `CloseEvent`.

## Propriétés

_Cette interface hérite également des propriétés de sa mère, {{domxref("Event")}}._

- {{domxref("CloseEvent.code")}} {{readOnlyInline}}

  - : Retourne un `unsigned short` contenant le code de fermeture envoyé par le serveur. Les valeurs possibles sont données ci-dessous.

    <table class="standard-table">
      <tbody>
        <tr>
          <td class="header">Status code</td>
          <td class="header">Nom</td>
          <td class="header">Description</td>
        </tr>
        <tr>
          <td><code>0</code>–<code>999</code></td>
          <td></td>
          <td><strong>Reservé et inutilisé.</strong></td>
        </tr>
        <tr>
          <td><code>1000</code></td>
          <td><code>CLOSE_NORMAL</code></td>
          <td>Fermeture normale ; la connexion s'est terminée normalement.</td>
        </tr>
        <tr>
          <td><code>1001</code></td>
          <td><code>CLOSE_GOING_AWAY</code></td>
          <td>
            <p>
              Reçu lorsque une erreur est apparue sur le serveur ou le navigateur
              quitte la page ayant ouvert la connexion.
            </p>
          </td>
        </tr>
        <tr>
          <td><code>1002</code></td>
          <td><code>CLOSE_PROTOCOL_ERROR</code></td>
          <td>
            L'autre partie de la connexion termine la connexion à cause d'une erreur
            de protocole.
          </td>
        </tr>
        <tr>
          <td><code>1003</code></td>
          <td><code>CLOSE_UNSUPPORTED</code></td>
          <td>
            La connexion est terminée car le serveur à reçu des données d'un type
            qu'il ne peut pas accepter (par exemple des données binaire plutôt que
            du texte).
          </td>
        </tr>
        <tr>
          <td><code>1004</code></td>
          <td></td>
          <td>
            <strong>Réservé.</strong> Une utilisation pourrait être définie dans le
            futur.
          </td>
        </tr>
        <tr>
          <td><code>1005</code></td>
          <td><code>CLOSE_NO_STATUS</code></td>
          <td>
            <strong>Réservé.</strong> Indique qu'aucun code n'est donné bien qu'un
            code était attendu.
          </td>
        </tr>
        <tr>
          <td><code>1006</code></td>
          <td><code>CLOSE_ABNORMAL</code></td>
          <td>
            <strong>Réservé.</strong> Utilisé pour indiquer que la connexion a été
            terminée anormalement (sans paquet indiquant la fermeture).
          </td>
        </tr>
        <tr>
          <td><code>1007</code></td>
          <td></td>
          <td>
            Le serveur termine la connexion car un message contenant des données
            incohérentes a été reçu (e.g., des données qui ne sont pas au format
            UTF-8 dans un message texte).
          </td>
        </tr>
        <tr>
          <td><code>1008</code></td>
          <td></td>
          <td>
            Le serveur termine la connexion car un message ne respectant pas la
            politique du serveur est reçu. C'est un code d'état générique qui est
            utilisé lorsque les codes 1003 et 1009 ne correspondent pas à la
            situation.
          </td>
        </tr>
        <tr>
          <td><code>1009</code></td>
          <td><code>CLOSE_TOO_LARGE</code></td>
          <td>
            Le serveur termine la connexion car les données reçues sont trop
            grosses.
          </td>
        </tr>
        <tr>
          <td><code>1010</code></td>
          <td></td>
          <td>
            Le client termine la connexion car il souhaitait négocier une ou
            plusieurs extensions mais le serveur ne l'a pas fait.
          </td>
        </tr>
        <tr>
          <td><code>1011</code></td>
          <td></td>
          <td>
            Le serveur termine la connexion car il a rencontré un problème qui
            l'empêche de traiter la requête.
          </td>
        </tr>
        <tr>
          <td>–<code>1014</code></td>
          <td></td>
          <td>
            <strong
              >Réservé pour une utilisation future par le standard
              WebSocket.</strong
            >
          </td>
        </tr>
        <tr>
          <td><code>1015</code></td>
          <td></td>
          <td>
            <strong>Réservé.</strong> Indique que la connexion a été fermée à cause
            d'une erreur durant le handshake TLS (e.g., le certificat du serveur ne
            peut pas être vérifié).
          </td>
        </tr>
        <tr>
          <td><code>1016</code>–<code>1999</code></td>
          <td></td>
          <td>
            <strong
              >Réservé pour une utilisation future par le standard
              WebSocket.</strong
            >
          </td>
        </tr>
        <tr>
          <td><code>2000</code>–<code>2999</code></td>
          <td></td>
          <td>
            <strong
              >Réservé pour une utilisation future par le standard
              WebSocket.</strong
            >
          </td>
        </tr>
        <tr>
          <td><code>3000</code>–<code>3999</code></td>
          <td></td>
          <td>
            Disponible pour être utilisé par des bibliothèques ou des frameworks.
            Ces codes <strong>ne doivent pas</strong> être utilisés par des
            applications.
          </td>
        </tr>
        <tr>
          <td><code>4000</code>–<code>4999</code></td>
          <td></td>
          <td>Disponible pour être utilisés par des applications.</td>
        </tr>
      </tbody>
    </table>

- {{domxref("CloseEvent.reason")}} {{readOnlyInline}}
  - : Retourne un {{ domxref("DOMString") }} qui indique la raison pour laquelle le serveur a fermé la connexion. Ce message est spécifique au serveur et au sous-protocole utilisé.
- {{domxref("CloseEvent.wasClean")}} {{readOnlyInline}}
  - : Retourne un {{jsxref("Boolean")}} qui indique si la connexion a été correctement fermée ou non.

## Méthodes

_Cette interface hérite également des propriétés de sa mère, {{domxref("Event")}}._

- {{domxref("CloseEvent.initCloseEvent()")}} {{Non-standard_inline}} {{deprecated_inline}}
  - : Initialise la valeur d'un `CloseEvent`. Si l'événement a déjà été envoyé, cette méthode ne fait rien.

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- {{domxref("WebSocket")}}
