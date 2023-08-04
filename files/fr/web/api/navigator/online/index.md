---
title: Navigator.onLine
slug: Web/API/Navigator/onLine
---

{{ApiRef("HTML DOM")}}

La propriété en lecture seule **`Navigator.onLine`** est un booléen indiquant le statut de connectivité du navigateur. `true` indique que le navigateur accède au réseau et `false` indique que le navigateur est hors ligne. Cette propriété est mise à jour lorsque la connectivité réseau change. La mise à jour se produit lorsque la personne suit un lien ou qu'un script effectue une requête vers une page distante. Ainsi, la propriété peut renvoyer `false` lorsqu'une personne clique sur un lien après avoir perdu l'accès à Internet.

L'implémentation de cette propriété varie entre les navigateurs.

Pour Chrome et Safari, si le navigateur n'est pas en mesure de se connecter à un réseau local (LAN) ou à un routeur, il est hors ligne. Toutes les autres conditions renvoient `true`. Aussi, même si on peut prendre comme hypothèse que le navigateur est hors ligne lorsque la propriété a la valeur `false`, on ne peut pas présupposer que `true` implique que le navigateur accède à Internet. En effet, on pourrait avoir des faux positifs (par exemple dans le cas où le navigateur est exécuté au sein d'une machine virtuelle dont les adaptateurs réseau virtuels sont toujours connectés). Si on veut vérifier l'accès du navigateur à Internet, il faudra donc ajouter d'autres méthodes de contrôle.

Pour Firefox et Internet Explorer jusqu'à Firefox 41, il fallait passer le navigateur en mode hors ligne pour que la propriété soit `false`. Elle valait `true` sinon. Cela a été modifié dans Firefox ensuite pour correspondre au comportement de Chrome et Safari.

Il est possible de surveiller les changements relatifs à la connectivité réseau en écoutant les évènements [`online`](/fr/docs/Web/API/Window/online_event) et [`offline`](/fr/docs/Web/API/Window/offline_event).

## Valeur

Un booléen.

## Exemples

### Utilisation simple

Pour vérifier que le réseau est accessible, on pourra utiliser `navigator.onLine`, comme dans cet exemple&nbsp;:

```js
if (navigator.onLine) {
  console.log("connecté");
} else {
  console.log("hors ligne");
}
```

Si le navigateur ne prend pas en charge `navigator.onLine`, l'exemple précédent tombera toujours dans le cas `false`/`undefined`.

### Surveiller les changements de connectivité

Pour gérer les changements liés à l'état du réseau, on pourra utiliser la méthode [`addEventListener()`](/fr/docs/Web/API/EventTarget/addEventListener) afin de créer des gestionnaires d'évènements pour `online` et `offline`, comme dans l'exemple qui suit&nbsp;:

```js
window.addEventListener("offline", function (e) {
  console.log("hors ligne");
});

window.addEventListener("online", function (e) {
  console.log("connecté");
});
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}
