---
title: Gestionnaires de protocoles web
slug: Web/API/Navigator/registerProtocolHandler/Web-based_protocol_handlers
---

### Contexte

Il est relativement courant de voir des pages web lier des ressources utilisant des protocoles qui ne sont pas HTTP. Prenons par exemple le protocole `mailto:`&nbsp;:

```html
<a href="mailto:webmaster@example.com">Webmestre</a>
```

Les autrices et auteurs web peuvent utiliser un lien `mailto:` pour fournir aux utilisateurs une manière pratique d'envoyer un courrier électronique, directement depuis la page web. Lorsque le lien est activé, le navigateur est supposé lancer l'application par défaut du bureau pour le courrier électronique. On pourrait appeler cela un gestionnaire de protocole _du bureau_.

Les gestionnaires de protocoles web permettent à des applications web de participer également à ce processus. Leur importance va grandissant au fur et à mesure que différents types d'applications migrent vers le web. De fait, un grand nombre d'applications de courrier déjà basées sur le Web pourraient traiter un lien `mailto`.

### Enregistrement

La définition d'une application web comme gestionnaire de protocole n'est pas un processus difficile. Dans les grandes lignes, l'application web utilise [`registerProtocolHandler()`](/fr/docs/Web/API/Navigator/registerProtocolHandler) pour s'enregistrer auprès du navigateur comme gestionnaire potentiel pour un protocole donné. Par exemple&nbsp;:

```js
navigator.registerProtocolHandler(
  "web+burger",
  "https://www.google.com/?uri=%s",
  "Gestionnaire de burger",
);
```

Où les paramètres sont&nbsp;:

- Le protocole.
- Le modèle d'URL, utilisé comme gestionnaire. Le «&nbsp;%s&nbsp;» sera remplacé par le `href` du lien et une requête GET sera exécutée sur l'URL résultante.
- Le nom du gestionnaire de protocole tel que présenté à l'utilisateur.

Lorsqu'un navigateur exécutera ce code, il devra demander la permission d'autoriser l'application web à s'enregistrer comme gestionnaire du protocole. Firefox affichera une question dans une barre de notification&nbsp;:

![](protocolregister.png)

> **Note :** Le modèle d'URL fourni lors de l'enregistrement **doit** provenir de la même origine que la page web qui demande l'enregistrement, sinon celle-ci échouera. Ainsi, `http://example.com/homepage.html` pourra enregistrer un gestionnaire de protocole pour `http://example.com/handle_mailto/%s`, mais pas pour `http://example.org/handle_mailto/%s`.

Enregistrer plus d'une fois le même gestionnaire de protocole déclenchera l'apparition d'une notification différente, indiquant que le gestionnaire de protocole est déjà enregistré. Aussi, mieux vaut effectuer une vérification préalable dans le code pour voir si le gestionnaire n'est pas déjà enregistré, comme illustré dans l'exemple qui suit.

#### Exemple

##### JavaScript

```js
navigator.registerProtocolHandler(
  "web+burger",
  "https://www.google.com/?uri=%s",
  "Gestionnaire de burger",
);
```

##### HTML

```html
<p>
  Cette page web installera un gestionnaire de protocole pour le protocole
  <code>web+burger:</code>.
</p>
```

### Activation

À présent, chaque fois qu'on activera un lien utilisant le protocole enregistré, le navigateur dirigera l'action vers l'URL spécifiée lors de l'enregistrement de l'application web. Firefox, par défaut, demandera à la personne avant d'effectuer cette action.

#### Exemple

```html
<p>Avez-vous déjà vu <a href="web+burger:cheeseburger">ceci</a> auparavant ?</p>
```

### Traitement

La phase suivante est le traitement de l'action. Le navigateur extrait le `href` du lien activé, le combine avec le modèle d'URL fourni lors de l'enregistrement et effectue une requête HTTP GET sur l'URL. Ainsi, avec les exemples précédents, le navigateur effectuerait une requête GET sur cette URL&nbsp;:

```
http://www.google.com/?uri=web+burger:cheeseburger
```

Un code côté serveur peut extraire les paramètres de la chaîne de requête et effectuer l'action désirée.

> **Note :** Le code côté serveur reçoit le contenu **entier** de l'attribut `href`. Cela signifie que le serveur doit traiter la chaîne pour retirer le protocole des données.

#### Exemple

```php
<?php
$value = "";
if ( isset ( $_GET["value"] ) ) {
  $value = $_GET["value"];
}
?>

<!DOCTYPE html>
<html lang="fr">
<head>
  <title>Exemple de gestionnaire de protocole web</title>
</head>
<body>
  <h1>Exemple de gestionnaire de protocole web - Gestionnaire</h1>
  <p>Cette page est appelée lors de la gestion du protocole <code>web+burger:</code>. Les données envoyées sont :</p>
  <textarea>
<?php echo(htmlspecialchars($value, ENT_QUOTES, 'UTF-8')); ?>
  </textarea>
</body>
</html>
```

## Spécifications

- [La spécification HTML5 sur les gestionnaires de protocole tiers](https://www.w3.org/TR/2011/WD-html5-20110525/timers.html#custom-handlers)

## Voir aussi

- [Enregistrer un gestionnaire de protocole spécifique (en anglais)](https://web.dev/registering-a-custom-protocol-handler/) sur le blog Google web.dev
