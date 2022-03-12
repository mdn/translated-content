---
title: Manipuler l'historique du navigateur
slug: Web/API/History_API
tags:
  - API
  - DOM
  - Historique
translation_of: Web/API/History_API
original_slug: Web/Guide/DOM/Manipuler_historique_du_navigateur
---
L'objet DOM {{ domxref("window") }} fournit un accès à l'historique du navigateur via l'objet {{ domxref("window.history", "history") }}. Il expose un ensemble de méthodes et de propriétés qui permettent d'avancer et de reculer dans l'historique de l'utilisateur ainsi que -- à partir d'HTML5 -- manipuler le contenu de l'ensemble de l'historique.

## Se déplacer dans l'historique

Avancer ou reculer dans l'historique de l'utilisateur est possible en utilisant les méthodes `back()`, `forward()` et `go()`.

### Avancer et reculer

Pour reculer dans l'historique, il vous suffit de faire :

```js
window.history.back();
```

Cela agira exactement comme si l'utilisateur cliquait sur le bouton Retour de la barre d'outils de son navigateur.

De la même manière, il est possible d'avancer (comme si l'utilisateur cliquait sur le bouton Avancer) :

```js
window.history.forward();
```

### Se déplacer à un élément précis de l'historique

Vous pouvez utiliser la méthode `go()` pour charger une page spécifique de l'historique de la session, identifiée par sa position relative par rapport à la page en cours (la page courante étant, évidemment, d'index 0).

Pour reculer d'une page (l'équivalent d'un appel à `back()`):

```js
window.history.go(-1);
```

Pour avancer d'une page, comme en appelant `forward()`:

```js
window.history.go(1);
```

De la même manière, vous pouvez avancer de 2 pages en passant la valeur 2, et ainsi de suite.

Vous pouvez déterminer le nombre de pages de l'historique en accédant à la valeur de la propriété length (_longeur_) :

```js
var numberOfEntries = window.history.length;
```

> **Note :** Internet Explorer supporte le passage d'une URL sous forme de chaîne de caractères comme paramètre de la méthode `go()`; ce comportement est non standard et non supporté par Gecko.

## Ajouter et modifier des entrées de l'historique

{{ gecko_minversion_header("2") }}

HTML5 a introduit les méthodes [history.pushState()](</fr/docs/Web/Guide/DOM/Manipuler_historique_du_navigateur#La_méthode_pushState()>) et [history.replaceState()](</fr/docs/Web/Guide/DOM/Manipuler_historique_du_navigateur#La_méthode_replaceState()>), qui permettent, respectivement, d'ajouter et de modifier des entrées de l'historique. Ces méthodes fonctionnent conjointement avec l'événement [onpopstate](/fr/docs/Web/API/WindowEventHandlers/onpopstate).

L'utilisation de `history.pushState()` change le référent créé habituellement dans l'en-tête HTTP pour les objets [`XMLHttpRequest`](/en/DOM/XMLHttpRequest), chaque fois que son état a été changé. Le référent sera l'URL de la page dont l'objet window est `this` au moment de la création de l'objet [`XMLHttpRequest`](/en/DOM/XMLHttpRequest).

### Exemple de la méthode pushState()

Supposons que http\://mozilla.org/foo.html exécute la séquence JavaScript suivante :

```js
var stateObj = { foo: "bar" };
history.pushState(stateObj, "page 2", "bar.html");
```

Cela va provoquer l'apparition dans la barre de navigation de http\://mozilla.org/bar.html, mais ne provoquera pas le chargement effectif de `bar.html` ni même le test d'existence de `bar.html`.

Supposons à présent que l'utilisateur accède à la page http\://google.com, puis clique sur l'icône "Recul". La barre de navigation va alors afficher http\://mozilla.org/bar.html, et si vous lisez l'`history.state`, vous obtiendrez le `stateObj`.  L'événement `popstate` ne sera pas lancé car la page a été rechargée. La page elle-même ressemblera à `bar.html`.

Si on clique à nouveau sur Recul, l'URL de la barre de navigation va se changer en http\://mozilla.org/foo.html et le document va recevoir un autre événement `popstate`, qui comportera, cette fois, un état null. Dans ce cas aussi, revenir en arrière ne modifie pas le contenu du document par rapport à ce qu'il était à l'étape précédente, cela bien qu'il ait pu être mis à jour manuellement sur réception de l'événement `popstate`.

### La méthode pushState()

`La méthode pushState()` utilise trois paramètres : un objet état, un titre (qui est pour l'instant ignoré) et, éventuellement, une URL. Examinons chacun de ces paramètres en détail :

- **state object** (**_objet état_**) — L'objet état est un objet JavaScript qui est associé à une nouvelle entrée de l'historique par `pushState()`. Chaque fois qu'un utilisateur ouvre une nouvelle page, un événement `popstate` est émis et la propriété `state` de l'événement contient une copie de l'objet état de ce nouvel élément de l'historique.
  L'objet état peut être tout ce qui peut être sous forme de liste. Puisque Firefox sauvegarde les objets état sur le disque de l'utilisateur de façon à ce qu'ils puissent être rétablis après redémarrage du navigateur, le codage de l'objet état est limité à une taille de 640k octets. Si vous donnez à `pushState()` un objet état dont la représentation a une taille plus importante, la méthode génèrera une exception. Si vous avez un besoin d'espace plus important, il est conseillé d'utiliser `sessionStorage` et/ou `localStorage`.
- **title** (**_titre_)** — Firefox, pour l'instant, ignore ce paramètre, bien qu'il puisse être utilisé plus tard. Afin de prévenir les changements futurs de cette méthode, il serait prudent de fournir ici, en paramètre, une chaîne vide. Vous pourriez aussi donner un titre court à l'état vers lequel vous vous dirigez.
- **URL** — L'URL de la nouvelle entrée de l'historique est donnée par ce paramètre. Il convient de préciser que le navigateur n'essaiera pas de charger la page pointée par cette URL après un appel à `pushState()`, mais il se peut qu'il tente de le faire plus tard, par exemple, lorsque l'utilisateur relancera son navigateur. Il n'est pas nécessaire que la nouvelle URL soit absolue ; si elle est relative, ce sera par rapport à l'URL courante. La nouvelle URL doit avoir la même origine (domaine) que l'URL courante ; dans le cas contraire, `pushState()` génèrera une exception. Ce paramètre est optionnel ; s'il n'est pas spécifié, sa valeur par défaut est l'URL de la page courante.

> **Note :** Dans Gecko 2.0 jusqu'à Gecko 5.0, l'objet fourni est sérialisé en utilisant JSON. À partir de Gecko 6.0, l'objet est sérialisé à l'aide de [l'algorithme de clonage structuré](/fr/docs/Web/API/Web_Workers_API/Structured_clone_algorithm) qui autorise, en particulier, la sérialisation d'arbres récursifs cycliques. Cela permet de passer de façon sûre une plus grande diversité d'objets.

On peut assimiler l'appel à `pushState()` à l'affectation `window.location = "#foo"`, en cela que l'un comme l'autre auront pour effet de créer et déclencher une autre entrée de l'historique associée au document courant. Mais `pushState()` a quelques avantages :

- La nouvelle URL peut être quelconque pourvu qu'elle ait la même origine que l'URL courante. En revanche, affecter `window.location` vous maintient  au même {{ domxref("document") }} seulement si vous modifiez uniquement le hash.
- Vous n'êtes pas contraint de modifier l'URL si vous ne le voulez pas. Par contre, affecter `window.location = "#foo";` crée une nouvelle entrée de l'historique seulement si le hash courant n'est pas `#foo`.
- Vous pouvez associer des données quelconques avec votre nouvelle entrée de l'historique. Avec l'approche basée sur le hash, il est nécessaire de coder toute donnée pertinente en une chaîne courte.

Notez que `pushState()` n'entraîne jamais le déclenchement d'un événement `hashchange`, même si la nouvelle URL diffère de l'ancienne seulement par son hash.

Dans un document [XUL](/fr/docs/Mozilla/Tech/XUL) elle crée l'élément XUL spécifié.

Dans d'autres documents, elle crée un élément avec l'URI d'espace de nom `null`.

### La méthode replaceState()

`history.replaceState()` fonctionne exactement comme `history.pushState()` hormis le fait que `replaceState()` modifie l'entrée courante de l'historique au lieu d'en créer une nouvelle. À noter que ceci n'empêche pas la création d'une nouvelle entrée dans l'historique global du navigateur.

`replaceState()` est particulièrement utile si vous désirez mettre à jour l'objet état ou l'URL de l'entrée courante de l'historique en réponse à une action de l'utilisateur.

> **Note :** Dans Gecko 2.0 jusqu'à Gecko 5.0, l'objet fourni est sérialisé en utilisant JSON. À partir de Gecko 6.0, l'objet est sérialisé à l'aide de [l'algorithme de clonage structuré](/fr/docs/Web/API/Web_Workers_API/Structured_clone_algorithm) qui autorise, en particulier, la sérialisation d'arbres récursifs cycliques. Cela permet de passer de façon sûre une plus grande diversité d'objets.

### Exemple de la méthode replaceState()

Supposons que `http://mozilla.org/foo.html` exécute le code JavaScript suivant :

```js
var stateObj = { foo: "bar" };
history.pushState(stateObj, "page 2", "bar.html");
```

L'explication des deux lignes ci-dessus peut être trouvée dans la section "[Exemple de la méthode pushState()](#)". Supposons ensuite que http\://mozilla.org/bar.html exécute le code JavaScript suivant :

```js
history.replaceState(stateObj, "page 3", "bar2.html");
```

Cela entraînera l'affichage de la barre d'URL http\://mozilla.org/bar2.html, mais le navigateur ne chargera pas `bar2.html` ou même vérifiera que `bar2.html` existe.

Supposons maintenant que l'utilisateur accède à http\://www\.microsoft.com, puis clique sur le bouton Précédent. À ce stade, la barre d'URL affichera http\://mozilla.org/bar2.html. Si l'utilisateur clique à nouveau sur Retour, la barre d'URL affichera http\://mozilla.org/foo.html et contournera totalement bar.html.

### L'événement popstate

Un évènement `popstate` est envoyé à la fenêtre chaque fois que l'entrée active de l'historique change. Si l'entrée de l'historique activée a été créée par un appel à `replaceState`, la propriété `state` de l'évènement `popstate` contient une copie de l'objet état de l'entrée de l'historique.

Voir {{ domxref("window.onpopstate") }} pour un exemple d'utilisation.

### Lire l'état courant

Quand votre page est chargée, il se pourrait qu'elle ait un objet état non nul. Cela peut se produire, par exemple, si la page fixe un objet état (avec  `pushState()` ou `replaceState()`) et qu'ensuite l'utilisateur redémarre le navigateur.  Quand votre page sera rechargée, elle recevra l'événement  onload , mais pas l'événement popstate.  Néanmoins, si vous lisez la propriété history.state, vous récupèrerez l'objet état que vous auriez obtenu si un événement popstate avait été déclenché.

Vous pouvez lire l'état de l'entrée courante de l'historique sans devoir attendre un événement `popstate` en utilisant la propriété `history.state` comme ceci :

```js
var currentState = history.state;
```

## Exemples

Pour un exemple comple de site web AJAX, vous pouvez voir : [Exemple de navigation en Ajax](/fr/docs/Web/Guide/DOM/Manipuler_historique_du_navigateur/Example).

## Spécifications

| Spécification                                                                        | Statut                           | Commentaire                                            |
| ------------------------------------------------------------------------------------ | -------------------------------- | ------------------------------------------------------ |
| {{SpecName('HTML WHATWG', "browsers.html#history", "History")}} | {{Spec2('HTML WHATWG')}} | Pas de changement de {{SpecName("HTML5 W3C")}}. |
| {{SpecName('HTML5 W3C', "browsers.html#history", "History")}}     | {{Spec2('HTML5 W3C')}}     | Définition initiale.                                   |

## Compatibilité des navigateurs

{{Compat("api.History")}}

## Voir aussi

- {{ domxref("window.history") }}
- {{ domxref("window.onpopstate") }}
