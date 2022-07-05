---
title: Gestionnaires de protocoles web
slug: Web/API/Navigator/registerProtocolHandler/Web-based_protocol_handlers
translation_of: Web/API/Navigator/registerProtocolHandler/Web-based_protocol_handlers
---
### Introduction

Il est relativement courant de voir des pages web lier des ressources utilisant des protocoles non-`http`. Prenons par exemple le protocole `mailto:`&nbsp;:

    <a href="mailto:webmaster@example.com">Webmestre</a>

Les auteurs web peuvent utiliser un lien `mailto:` lorsqu'ils veulent fournir aux utilisateurs une manière pratique d'envoyer un courrier électronique, directement depuis la page web. Lorsque le lien est activé, le navigateur est supposé lancer l'application par défaut du bureau pour le courrier électronique. On pourrait appeler cela un gestionnaire de protocole*du bureau*.

Les gestionnaires de protocoles web permettent à des applications web de participer également à ce processus. Leur importance va grandissant au fur et à mesure que différents types d'applications migrent vers le web. De fait, un grand nombre d'applications de courrier déjà basées sur le web pourraient traiter un lien `mailto`.

### Enregistrement

La définition d'une application web comme gestionnaire de protocole n'est pas un processus difficile. En gros, l'application web utilise [`registerProtocolHandler()`](/fr/DOM/window.navigator.registerProtocolHandler) pour s'enregistrer auprès du navigateur comme gestionnaire potentiel pour un protocole donné. Par exemple&nbsp;:

    navigator.registerProtocolHandler("mailto",
                                      "https://www.example.com/?uri=%s",
                                      "Example Mail");

Où les paramètres sont&nbsp;:

- Le protocole.
- Le modèle d'URL, utilisé comme gestionnaire. Le «&nbsp;%s&nbsp;» sera remplacé par le `href` du lien et une requête GET sera exécutée sur l'URL résultante.
- Le nom du gestionnaire de protocole tel que présenté à l'utilisateur.

Lorsqu'un navigateur exécutera ce code, il devra demander à l'utilisateur la permission d'autoriser l'application web à s'enregistrer comme gestionnaire du protocole. Firefox affichera une question dans une barre de notification&nbsp;:

![](protocolregister.png)

{{ Note() }}

#### Exemple

```html
<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01//EN">
<html lang="fr">
<head>
  <title>Web Protocol Handler Sample - Register</title>
  <script type="text/javascript">
    navigator.registerProtocolHandler("fake", "http://starkravingfinkle.org/projects/wph/handler.php?value=%s", "Protocole fake");
  </script>
</head>
<body>
  <h1>Exemple de gestionnaire de protocole web</h1>
  <p>Cette page va installer un gestionnaire de protocole web pour le protocole <code>fake:</code>.</p>
</body>
</html>
```

### Activation

À présent, chaque fois que l'utilisateur activera un lien utilisant le protocole enregistré, le navigateur dirigera l'action vers l'URL spécifiée lors de l'enregistrement de l'application web. Firefox, par défaut, demandera à l'utilisateur avant d'effectuer cette action.

#### Exemple

```html
<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01//EN">
<html lang="fr">
<head>
  <title>Exemple de gestionnaire de protocole web — test</title>
</head>
<body>
  <p>Hola, avez-vous déjà vu <a href="fake:ceci%20est%20un%20faux%20protocole">ceci</a> auparavant&nbsp;?</p>
</body>
</html>
```

### Traitement

La phase suivante est le traitement de l'action. Le navigateur extrait le `href` du lien activé, le combine avec le modèle d'URL fourni lors de l'enregistrement et effectue une requête HTTP GET sur l'URL. Ainsi, avec les exemples précédents, le navigateur effectuerait une requête GET sur cette URL&nbsp;:

    http://starkravingfinkle.org/projects/wph/handler.php?value=fake:ceci%20est%20un%20faux%20protocole

Un code côté serveur peut extraire les paramètres de la chaîne de requête et effectuer l'action désirée.

{{ Note("Le code côté serveur reçoit le contenu <strong>entier</strong> de l\'attribut <code>href</code>. Cela signifie qu\'il devra traiter la chaîne pour retirer l\'indication de protocole des données.") }}

#### Exemple

```html
<?php
$value = "";
if ( isset ( $_GET["value"] ) ) {
  $value = $_GET["value"];
}
?>

<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01//EN">
<html lang="fr">
<head>
    <title>Exemple de gestionnaire de protocole web</title>
</head>
<body>
  <h1>Exemple de gestionnaire de protocole web — Gestionnaire</h1>
  <p>Cette page est appelée lors de la gestion d'une action utilisant le protocole <code>fake:</code>. Voici les données reçues&nbsp;:</p>
  <textarea>
<?php echo(urldecode($value))&nbsp;?>
  </textarea>
</body>
</html>
```
