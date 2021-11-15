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
<p>L'injection SQL tire parti des applications web qui ne parviennent pas à valider les entrées utilisateur. Les pirates peuvent transmettre des commandes SQL via l'application web de manière malveillante pour exécution par une base de données principale.</p>

<p>L'injection SQL peut obtenir un accès non autorisé à une base de données ou récupérer des informations directement à partir de la base de données. De nombreuses violations de données sont dues à l'injection SQL.</p>

<p><a href="https://www.acunetix.com/wp-content/uploads/2010/09/sql_inj_xss.gif"><img alt="" src="sql_inj_xss.gif"></a></p>

<h2 id="Comment_ça_marche">Comment ça marche ?</h2>

<p><img alt="" src="updates_loginscreen.png"></p>

<p>Après l'entrée du nom d'utilisateur et du mot de passe, derrière l'interface graphique, les requêtes SQL fonctionnent comme suit :</p>

<pre>"SELECT Count(*) FROM Users WHERE Username=' " + txt.User.Text+" ' AND Password=' "+ txt.Password.Text+" ' ";</pre>

<p>Supposons maintenant que l'utilisateur entre le nom d'utilisateur : admin et le mot de passe : mdp123, puis après avoir cliqué sur le bouton Connexion, la requête SQL s'exécutera comme suit:</p>

<pre>"SELECT Count(*) FROM Users WHERE Username=' admin ' AND Password=' mdp123 ' ";</pre>

<p>Si les informations d'identification sont correctes, l'utilisateur est autorisé à se connecter, c'est donc un mécanisme très simple (et non sécurisé). Les pirates utilisent cette insécurité pour obtenir un accès non autorisé.</p>

<p>Les pirates utilisent une chaîne simple appelée chaîne magique, par exemple :</p>

<p><strong>Utilisateur : <em>admin</em></strong></p>

<p><strong>Mot de passe : <em>anything 'or'1'='1</em></strong></p>

<p>Après avoir cliqué sur le bouton de connexion, la requête SQL fonctionnera comme suit :</p>

<pre><strong>"SELECT Count(*) FROM Users WHERE Username=' admin ' AND Password=' anything 'or'1'='1 ' ";
</strong></pre>

<p>Regardez de plus près la section mot de passe de la requête ci-dessus.</p>

<pre><strong>Password=' anything 'or'1'='1 '</strong></pre>

<p> </p>

<p>Le mot de passe n'est pas 'anything' (<em>n'importe quoi</em>), par conséquent mot de passe = tout aboutit à FAUX (<em>false</em>), mais '1' = '1' est une instruction VRAIE et renvoie donc une valeur VRAI (<em>true</em>). Enfin, en raison de l'opérateur OR, la valeur (FALSE OR TRUE) est TRUE, de sorte que l'authentification est contournée avec succès. Juste en raison d'une chaîne simple (chaîne magique) la base de données entière est compromise.</p>

<p> </p>

<h2 id="Comment_l'empêcher">Comment l'empêcher ?</h2>

<p>Avant d'exécuter les requêtes pour les informations d'identification de l'utilisateur, apportez les modifications suivantes :</p>

<pre>$id = $_GET['id'] 

(1) $id = Stripslashes($id)

(2) $id = mysql_real_escape_String($id)</pre>

<p>Ainsi, en raison de (1) chaque guillemet simple (') dans la chaîne d'entrée est remplacé par des guillemets ("), et en raison de (2) avant chaque (') est ajouté un (/). La chaîne magique contrôlée échoue à contourner l'authentification et votre base de données reste sécurisée.</p>

<h2 id="En_apprendre_plus">En apprendre plus</h2>

<h3 id="Culture_générale">Culture générale</h3>

<ul>
 <li>{{Interwiki("wikipedia","Injection_SQL","Injection SQL")}} sur Wikipedia</li>
 <li><a href="https://www.owasp.org/index.php/SQL_Injection">Explication de l'injection SQL </a>sur OWASP (Open Web Application Security Project) (en)</li>
</ul>
