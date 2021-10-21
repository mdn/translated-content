---
title: Network Information API
slug: Web/API/Network_Information_API
tags:
  - WebAPI
translation_of: Web/API/Network_Information_API
original_slug: WebAPI/Network_Information
---
{{ SeeCompatTable() }}

L'API Network Information (Informations réseau) fournit des informations sur la connexion de l'appareil : la bande-passante, si la connexion est mesurée ou non. Elle peut être utilisée pour choisir entre du contenu en haute définition ou en basse définition selon la connexion de l'utilisateur. L'API ne représente qu'un seul objet, ajouté au DOM : {{domxref("window.navigator.connection")}}.

## Exemples

### Détecter les changements de connexion

Cet exemple permet de connaître les changements liés à la connexion d'un utilisateur. Cela ressemble notamment à la façon dont une application saura si l'utilisateur passe d'une connexion coûteuse à une autre connexion moins chère et pourra réduire la demande de bande passante afin de réduire les coûts pour l'utilisateur.

```js
var connection = navigator.connection || navigator.mozConnection || navigator.webkitConnection;

function updateConnectionStatus() {
  alert("Bande passante de la connexion : " + connection.bandwidth + " MB/s");
  if (connection.metered) {
    alert("La connexion est mesurée !");
  }
}

connection.addEventListener("change", updateConnectionStatus);
updateConnectionStatus();
```

### Préchargement de ressources gourmandes

L'objet connexion est pratique pour décider de précharger des ressources nécessitant une grosse quantité de bande passante ou de mémoire. Cet exemple devra être appelé après que la page ait été chargé. Il détermine si précharger la vidéo est judicieux selon le type de la connexion. Si une connexion cellulaire est trouvée, alors `preloadVideo` est réglé à faux. Ici pour faire simple, on ne teste qu'un type de connexion; dans un cas réel on aurait plutôt utilisé une structure de contrôle switch ou une autre méthode pour avoir tout les cas possibles de {{domxref("NetworkInformation.type")}}. Malgré la valeur `type`, on peut avoir une estimation de la vitesse de la connexion à travers la propriété {{domxref("NetworkInformation.effectiveType")}}**.**

```js
let preloadVideo = true;
var connection = navigator.connection || navigator.mozConnection || navigator.webkitConnection;
if (connection) {
  if (connection.effectiveType === 'cellular') {
    preloadVideo = false;
  }
}
```

## Interfaces

- {{domxref("NetworkInformation")}}
  - : Fournit des informations sur la connexion de l'appareil et fournit la possibilité aux scriptes d'être informé en cas de changement. L'interface `NetworkInformation` ne peut pas être instanciée; à la place on y accède à travers l'interface {{domxref("Navigator")}}.

## Spécification

| Spécification                                                                            | Status                                       | Commentaire            |
| ---------------------------------------------------------------------------------------- | -------------------------------------------- | ---------------------- |
| {{SpecName('Network Information', '', 'Network Information API')}} | {{Spec2('Network Information')}} | Spécification initiale |

## Compatibilité des navigateurs

### `NetworkInformation`

{{Compat("api.NetworkInformation")}}

### `Navigator.connection`

{{Compat("api.Navigator.connection")}}

## Voir aussi

- {{spec("http://dvcs.w3.org/hg/dap/raw-file/tip/network-api/Overview.html", "Spécification de l'API Network Information", "ED")}}
- [Les évènement online et offline](/fr/docs/Online_and_offline_events)
- {{domxref("window.navigator.connection")}}
