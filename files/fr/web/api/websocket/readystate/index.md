---
title: WebSocket.readyState
slug: Web/API/WebSocket/readyState
browser-compat: api.WebSocket.readyState
---
{{APIRef("Web Sockets API")}}

La propriété en lecture seule **`WebSocket.readyState`** renvoie l'état courant de la connexion [`WebSocket`](/fr/docs/Web/API/WebSocket).

## Syntaxe

```js
var readyState = uneWebSocket.readyState;
```

## Valeur

Cette propriété peut valoir l'une des valeurs de type `unsigned short` suivantes :

<table class="standard-table">
  <tbody>
    <tr>
      <td class="header">Valeur</td>
      <td class="header">État</td>
      <td class="header">Description</td>
    </tr>
    <tr>
      <td><code>0</code></td>
      <td><code>CONNECTING</code></td>
      <td>La socket a été créée. La connexion n'est pas encore ouverte.</td>
    </tr>
    <tr>
      <td><code>1</code></td>
      <td><code>OPEN</code></td>
      <td>La connexion est ouverte et prête pour la communication.</td>
    </tr>
    <tr>
      <td><code>2</code></td>
      <td><code>CLOSING</code></td>
      <td>La connexion est en cours de fermeture.</td>
    </tr>
    <tr>
      <td><code>3</code></td>
      <td><code>CLOSED</code></td>
      <td>La connexion est fermée ou n'a pas pu être ouverte.</td>
    </tr>
  </tbody>
</table>

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}
