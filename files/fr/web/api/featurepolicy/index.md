---
title: FeaturePolicy
slug: Web/API/FeaturePolicy
tags:
  - API
  - Feature Policy
  - Feature-Policy
  - FeaturePolicy
  - Interface
  - Permissions
  - Privileges
  - Reference
  - access
  - accès
  - delegation
translation_of: Web/API/FeaturePolicy
---
<p>{{APIRef("Feature Policy")}}</p>

<p>L'interface <code>FeaturePolicy</code> de l'<a href="/en-US/docs/Web/HTTP/Feature_Policy">API Feature Policy</a> représente l'ensemble des règles appliquées au contexte d'exécution courant.</p>

<h2 id="Méthodes_de_FeaturePolicy">Méthodes de FeaturePolicy</h2>

<dl>
 <dt>{{DOMxRef("FeaturePolicy.allowsFeature")}}</dt>
 <dd>Retourne un Boolean indiquant si une fonctionnalité particulière est activée ou non dans le contexte spécifié.</dd>
 <dt>{{DOMxRef("FeaturePolicy.features")}}</dt>
 <dd>Retourne une liste des noms de toutes les fonctionnalités supportées par l'agent utilisateur. Une fonctionnalité dont le nom est dans la liste pourrait ne pas être autorisée par le Feature Policy du contexte courant d'exécution ou n'être pas accessible à cause des permissions de l'utilisateur.</dd>
 <dt>{{DOMxRef("FeaturePolicy.allowedFeatures")}}</dt>
 <dd>Retourne une liste des noms des fonctionnalités supportées par l'agent utilisateur et autorisées par le Feature Policy. Notee que les fonctionnaltiés dont le nom est dans la liste pourraient toujours être bloquées par l'absence de permission de l'utilisateur.</dd>
</dl>

<dl>
 <dt>{{DOMxRef("FeaturePolicy.getAllowlistForFeature")}}</dt>
 <dd>Retourne la liste de permissions pour la fonctionnalité spécifiée.</dd>
</dl>

<h2 id="Spécification">Spécification</h2>

<table class="standard-table">
 <thead>
  <tr>
   <th scope="col">Spécification</th>
   <th scope="col">Statut</th>
   <th scope="col">Commentaire</th>
  </tr>
 </thead>
 <tbody>
  <tr>
   <td>{{SpecName("Feature Policy")}}</td>
   <td>{{Spec2("Feature Policy")}}</td>
   <td>Définition initiale.</td>
  </tr>
 </tbody>
</table>

<h2 id="Compatibilité_des_navigateurs">Compatibilité des navigateurs</h2>



<p>{{Compat("api.FeaturePolicy")}}</p>

<h2 id="Voir_aussi">Voir aussi</h2>

<ul>
 <li>{{HTTPHeader("Feature-Policy")}}</li>
 <li><a href="/en-US/docs/Web/Privacy">Anonymat et vie privée, permissions et informations sur la sécurité</a></li>
</ul>
