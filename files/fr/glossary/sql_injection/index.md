---
title: Injection SQL
slug: Glossary/SQL_Injection
l10n:
  sourceCommit: 13839b2979cc244034ffb1fe243240778b0cd23f
---

L'injection SQL tire parti des applications web qui ne parviennent pas à valider les entrées utilisateur·ice·s. Les pirates peuvent transmettre des commandes SQL via l'application web de manière malveillante pour exécution par une base de données principale.

L'injection SQL peut obtenir un accès non autorisé à une base de données ou récupérer des informations directement à partir de la base de données. De nombreuses violations de données sont dues à l'injection SQL.

![Diagramme circulaire des vulnérabilités les plus courantes : l'injection SQL est responsable de 50 % des vulnérabilités, le script intersite de 42 % et la divulgation de code source de 7 %.](sql_inj_xss.gif)

[Source originale <sup>(angl.)</sup>](https://cdn.acunetix.com/wp_content/uploads/2010/09/sql_inj_xss.gif)

## Comment ça marche ?

![Capture d'écran du formulaire de connexion avec les champs nom d'utilisateur et mot de passe](updates_loginscreen.png)

Après l'entrée du nom d'utilisateur·ice et du mot de passe, derrière l'interface graphique, les requêtes SQL fonctionnent comme suit&nbsp;:

```sql
"SELECT Count(*) FROM Users WHERE Username=' " + txt.User.Text+" ' AND Password=' "+ txt.Password.Text+" ' ";
```

Supposons maintenant que l'utilisateur·ice entre le nom d'utilisateur·ice&nbsp;: admin et le mot de passe&nbsp;: mdp123, après avoir cliqué sur le bouton Connexion, la requête SQL s'exécutera comme suit&nbsp;:

```sql
"SELECT Count(*) FROM Users WHERE Username=' admin ' AND Password=' mdp123 ' ";
```

Si les informations d'identification sont correctes, l'utilisateur·ice est autorisé·e à se connecter, c'est donc un mécanisme très simple (et non sécurisé). Les pirates utilisent cette insécurité pour obtenir un accès non autorisé.

Les pirates utilisent une chaîne simple appelée chaîne magique, par exemple&nbsp;:

**Utilisateur : _admin_**

**Mot de passe : _anything 'or'1'='1_**

Après avoir cliqué sur le bouton de connexion, la requête SQL fonctionnera comme suit&nbsp;:

```sql
"SELECT Count(*) FROM Users WHERE Username=' admin ' AND Password=' anything 'or'1'='1 ' ";
```

Regardez de plus près la section mot de passe de la requête ci-dessus.

```sql
Password=' anything 'or'1'='1 '
```

Le mot de passe n'est pas 'anything' (_n'importe quoi_), par conséquent mot de passe = tout aboutit à FAUX (`false`), mais '1' = '1' est une instruction VRAIE et renvoie donc une valeur VRAI (`true`). Enfin, en raison de l'opérateur OR, la valeur (FALSE OR TRUE) est TRUE, de sorte que l'authentification est contournée avec succès. Juste en raison d'une chaîne simple (chaîne magique) la base de données entière est compromise.

## Comment l'empêcher ?

Avant d'exécuter les requêtes pour les informations d'identification de l'utilisateur·ice, apportez les modifications suivantes&nbsp;:

```php
$id = $_GET['id']

(1) $id = Stripslashes($id)

(2) $id = mysql_real_escape_String($id)
```

Ainsi, en raison de (1) chaque guillemet simple (') dans la chaîne d'entrée est remplacé par des guillemets ("), et en raison de (2) avant chaque (') est ajouté un (/). La chaîne magique contrôlée échoue à contourner l'authentification et votre base de données reste sécurisée.

## Voir aussi

- [Injection SQL](https://fr.wikipedia.org/wiki/Injection_SQL) sur Wikipédia
- [Explication de l'injection SQL <sup>(angl.)</sup>](https://owasp.org/www-community/attacks/SQL_Injection) sur OWASP (Open Web Application Security Project)
