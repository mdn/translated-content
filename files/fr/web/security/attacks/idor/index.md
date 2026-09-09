---
title: Référence directe à un objet non sécurisée (IDOR)
slug: Web/Security/Attacks/IDOR
l10n:
  sourceCommit: aa6c136a56b7861893376386fc572e9a505d39db
---

La **référence directe à un objet non sécurisée (<abbr lang="en">IDOR</abbr>)** (<i lang="en">Insecure Direct Object Reference</i> en anglais) est une vulnérabilité qui permet à un·e attaquant·e d'exploiter un contrôle d'accès insuffisant et une exposition non sécurisée des identifiants d'objets, tels que les clés de base de données ou les chemins de fichiers.

Les sites web veulent communément fournir du contenu différent aux différent·e·s utilisateur·ice·s&nbsp;: par exemple, un site de commerce en ligne peut permettre à chaque utilisateur·ice de consulter son historique d'achats. Les sites web peuvent identifier les utilisateur·ice·s en les {{Glossary("Authentication", "authentifiant")}}, en utilisant une méthode telle qu'un mot de passe ou une clé de passe. Souvent, une fois qu'un site web a authentifié un·e utilisateur·ice, il place un cookie de session dans le navigateur de cet·te utilisateur·ice&nbsp;: ainsi, lorsque l'utilisateur·ice effectue une requête, le serveur sait que la requête provient de cet·te utilisateur·ice authentifié·e.

Cependant, en plus de vérifier que la requête provient d'un·e utilisateur·ice authentifié·e, le serveur doit mettre en place un contrôle d'accès pour les ressources demandées par l'utilisateur·ice&nbsp;: il doit vérifier que cette personne est autorisée à accéder à la ressource spécifique demandée. Par exemple, chaque utilisateur·ice authentifié·e doit uniquement pouvoir consulter son propre historique d'achats.

Si un serveur ne met pas en place de contrôle d'accès pour les ressources, un·e attaquant·e connecté·e au site peut accéder aux ressources appartenant à une autre personne. Cette attaque est appelée référence directe à un objet non sécurisée (<abbr lang="en">IDOR</abbr>).

## Exemples de scénarios

L'attaque <abbr lang="en">IDOR</abbr> classique se produit lorsque le serveur vérifie uniquement que l'utilisateur·ice est authentifié·e, mais pas que cette personne est autorisée à accéder à une référence d'objet. Dans un flux classique, l'attaquant·e&nbsp;:

1. Se connecte en tant qu'utilisateur·ice standard.
2. Trouve une URL, un champ de formulaire ou un fichier qui fait référence à l'identifiant d'un·e utilisateur·ice ou d'une ressource (par exemple, 1234).
3. Modifie l'identifiant pour lui donner une autre valeur (par exemple, 1233).
4. Obtient un accès non autorisé aux données d'une autre personne.

Les sections suivantes présentent quelques exemples concrets de cette attaque.

### Falsifier une URL

Un type courant d'attaque <abbr lang="en">IDOR</abbr> consiste à manipuler les références directes à des objets dans l'URL. Le «&nbsp;1234&nbsp;» des URL suivantes est l'identifiant de l'enregistrement de l'utilisateur·ice dans la base de données du serveur. Si un·e attaquant·e modifie ce nombre pour lui donner une autre valeur (par exemple «&nbsp;1235&nbsp;») et accède aux informations d'une autre personne, votre application est vulnérable aux références directes à des objets non sécurisées.

```http
# L'attaquant·e est connecté·e en tant qu'utilisateur·ice 1234
https://example.org/user/id/1234

# L'attaquant·e modifie l'identifiant dans l'URL et accède aux données d'une autre personne
https://example.org/user/id/1235
```

Par exemple, dans le code [Express](/fr/docs/Learn_web_development/Extensions/Server-side/Express_Nodejs) ci-dessous, la valeur fournie dans l'URL est disponible en tant que `req.params.id`, et nous utilisons cette valeur pour récupérer l'enregistrement correspondant dans la base de données. Nous vérifions également que la requête provient d'un·e utilisateur·ice authentifié·e en (appelant la fonction `isAuthenticated`). Mais surtout, nous ne vérifions pas que l'identifiant de l'utilisateur·ice authentifié·e correspond à l'identifiant de l'URL, ce qui permet à un·e utilisateur·ice authentifié·e (l'attaquant·e) d'obtenir la page d'un·e autre utilisateur·ice authentifié·e (la victime).

```js example-bad
app.get("/user/id/:id", (req, res) => {
  const user = db.users.find(req.params.id);
  if (req.isAuthenticated()) {
    // L'authentification ne suffit pas !
    res.render("user", { user });
  }
});
```

Vous devez plutôt mettre en place des règles pour autoriser l'accès aux informations des utilisateur·ice·s. Par exemple, affichez la page d'un·e utilisateur·ice uniquement si l'identifiant de la personne connectée correspond à l'identifiant demandé. Sinon, retournez une réponse HTTP {{HTTPStatus("401")}} `Unauthorized`.

```js
app.get("/user/id/:id", (req, res) => {
  const user = db.users.find(req.params.id);
  if (req.isAuthenticated() && req.session.userId === req.params.id) {
    res.render("user", { user });
  } else {
    return res.status(401).json({ message: "Non autorisé" });
  }
});
```

### Manipuler le document

Comme pour la falsification d'URL, l'attaquant·e peut manipuler le corps du document d'une page en modifiant les valeurs des éléments HTML {{HTMLElement("form")}}, comme les boutons radio, les cases à cocher ou les éléments HTML {{HTMLElement("input")}} (cachés) dans les outils de développement du navigateur.
Par exemple, votre application ne fournit peut-être pas l'identifiant de l'utilisateur·ice dans l'URL, mais le transmet plutôt dans un élément de formulaire caché&nbsp;:

```html
<form action="updateUser" method="POST">
  <input type="hidden" name="user_id" value="1234" />
  <button type="submit">Mettre à jour le profil</button>
</form>
```

Si aucun contrôle d'accès côté serveur n'est effectué, l'attaquant·e peut modifier la valeur `user_id` de l'élément `<input>` caché pour utiliser l'identifiant d'une autre personne et peut ainsi modifier le profil sans autorisation.

### Accéder aux fichiers

Un cas particulier des attaques <abbr lang="en">IDOR</abbr> est l'accès à des fichiers ou à des répertoires qui ne sont pas protégés par un contrôle d'accès. Par exemple, si vous fournissez un dossier pour téléverser des fichiers PDF et que les fichiers téléversés reçoivent des noms séquentiels, un·e attaquant·e peut deviner les noms de fichiers et tous les télécharger si aucun contrôle d'accès n'est fourni. Il est également possible d'obtenir d'autres fichiers dans des répertoires non protégés, comme des fichiers de configuration du serveur, ce qui peut entraîner des vulnérabilités supplémentaires.

```http
https://example.org/static/pdfs/1.pdf
https://example.org/static/pdfs/2.pdf
```

## Défenses contre les attaques IDOR

### Contrôler l'accès à chaque objet

La mesure d'atténuation la plus importante contre les attaques <abbr lang="en">IDOR</abbr> consiste à mettre en place des vérifications du contrôle d'accès côté serveur pour chaque objet auquel les utilisateur·ice·s tentent d'accéder. Vérifiez toujours que l'utilisateur·ice authentifié·e a le droit d'accéder à l'objet ciblé ou d'effectuer des actions sur celui-ci.

### Complexifier les identifiants

Veillez à ce que les identifiants des ressources ne puissent pas être devinés par un·e attaquant·e. N'exposez aucune information d'identification personnelle (<abbr lang="en" title="Personally identifiable information">PII</abbr>), comme des noms d'utilisateur·ice ou des adresses e-mail dans l'URL. Utilisez plutôt un jeton unique impossible à deviner pour représenter l'utilisateur·ice. Vous pouvez utiliser des identifiants plus complexes comme clés primaires, tels que {{Glossary("UUID")}}, et rendre les valeurs valides plus difficiles à deviner. Cependant, cela réduit uniquement la probabilité de deviner des identifiants valides et ne remplace pas la nécessité d'un contrôle d'accès approprié.

## Liste de contrôle récapitulative de la défense

- Vérifiez toujours que l'utilisateur·ice authentifié·e est autorisé·e à accéder à l'objet ou à le modifier.
- Évitez d'exposer des identifiants d'objet prévisibles, séquentiels ou sensibles (comme des identifiants d'utilisateur·ice ou des adresses e-mail).
- Utilisez des identifiants plus complexes et plus difficiles à deviner (par exemple, des UUID).

## Voir aussi

- [OWASP&nbsp;: Antisèche pour prévenir les Références Directes à des Objets Non Sécurisées <sup>(angl.)</sup>](https://cheatsheetseries.owasp.org/cheatsheets/Insecure_Direct_Object_Reference_Prevention_Cheat_Sheet.html)
