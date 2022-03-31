---
title: Injection SQL
slug: Glossary/SQL_Injection
tags:
  - Attaques
  - Glossaire
  - Sql
  - Sécurité
translation_of: Glossary/SQL_Injection
original_slug: Glossaire/Injection_SQL
---
L'injection SQL tire parti des applications web qui ne parviennent pas à valider les entrées utilisateur. Les pirates peuvent transmettre des commandes SQL via l'application web de manière malveillante pour exécution par une base de données principale.

L'injection SQL peut obtenir un accès non autorisé à une base de données ou récupérer des informations directement à partir de la base de données. De nombreuses violations de données sont dues à l'injection SQL.

[![](sql_inj_xss.gif)](https://www.acunetix.com/wp-content/uploads/2010/09/sql_inj_xss.gif)

## Comment ça marche ?

![](updates_loginscreen.png)

Après l'entrée du nom d'utilisateur et du mot de passe, derrière l'interface graphique, les requêtes SQL fonctionnent comme suit :

    "SELECT Count(*) FROM Users WHERE Username=' " + txt.User.Text+" ' AND Password=' "+ txt.Password.Text+" ' ";

Supposons maintenant que l'utilisateur entre le nom d'utilisateur : admin et le mot de passe : mdp123, puis après avoir cliqué sur le bouton Connexion, la requête SQL s'exécutera comme suit:

    "SELECT Count(*) FROM Users WHERE Username=' admin ' AND Password=' mdp123 ' ";

Si les informations d'identification sont correctes, l'utilisateur est autorisé à se connecter, c'est donc un mécanisme très simple (et non sécurisé). Les pirates utilisent cette insécurité pour obtenir un accès non autorisé.

Les pirates utilisent une chaîne simple appelée chaîne magique, par exemple :

**Utilisateur : _admin_**

**Mot de passe : _anything 'or'1'='1_**

Après avoir cliqué sur le bouton de connexion, la requête SQL fonctionnera comme suit :

    "SELECT Count(*) FROM Users WHERE Username=' admin ' AND Password=' anything 'or'1'='1 ' ";

Regardez de plus près la section mot de passe de la requête ci-dessus.

    Password=' anything 'or'1'='1 '



Le mot de passe n'est pas 'anything' (_n'importe quoi_), par conséquent mot de passe = tout aboutit à FAUX (_false_), mais '1' = '1' est une instruction VRAIE et renvoie donc une valeur VRAI (_true_). Enfin, en raison de l'opérateur OR, la valeur (FALSE OR TRUE) est TRUE, de sorte que l'authentification est contournée avec succès. Juste en raison d'une chaîne simple (chaîne magique) la base de données entière est compromise.



## Comment l'empêcher ?

Avant d'exécuter les requêtes pour les informations d'identification de l'utilisateur, apportez les modifications suivantes :

    $id = $_GET['id']

    (1) $id = Stripslashes($id)

    (2) $id = mysql_real_escape_String($id)

Ainsi, en raison de (1) chaque guillemet simple (') dans la chaîne d'entrée est remplacé par des guillemets ("), et en raison de (2) avant chaque (') est ajouté un (/). La chaîne magique contrôlée échoue à contourner l'authentification et votre base de données reste sécurisée.

## En apprendre plus

### Culture générale

- {{Interwiki("wikipedia","Injection_SQL","Injection SQL")}} sur Wikipedia
- [Explication de l'injection SQL](https://www.owasp.org/index.php/SQL_Injection) sur OWASP (Open Web Application Security Project) (en)
