---
title: Origine
slug: Glossary/Origin
tags:
  - Glossaire
  - Mécanismes web
  - origine
translation_of: Glossary/Origin
original_slug: Glossaire/Origine
---
<p>L'<strong>origine</strong> d'une application web est définie par le schéma (protocole), l'hôte (domaine) et le port de l'{{Glossary("URL")}} utilisée pour y accéder. Deux objets ont la même origine seulement quand le schéma, l'hôte et le port correspondent.</p>

<p>Quelques opérations sont limitées au contenu de même origine, et cette restriction peut être levée avec <a href="/fr/docs/Glossaire/CORS">CORS</a>.</p>

<h2 id="Exemples">Exemples</h2>

<p>Les URL qui suivent partagent la même origine car elles ont le même schéma (<code>http</code>), nom d'hôte (<code>example.com</code>), et que les chemins de fichiers différents n'impportent pas&nbsp;:</p>
    <ul>
      <li><code>http://example.com/app1/index.html</code></li>
      <li><code>http://example.com/app2/index.html</code></li>
    </ul>

<p>Il s'agit ici de la même origine car le contenu HTTP est délivré, par défaut, via le port 80&nbsp;:</p>
    <ul>
      <li><code>http://Example.com:80</code></li>
      <li><code>http://example.com</code></li>
    </ul>

<p>Ici, il ne s'agit pas de la même origine, car ce sont deux schémas différents&nbsp;:</p>
    <ul>
      <li><code>http://example.com/app1</code></li>
      <li><code>https://example.com/app2</code></li>
    </ul>

<p>Ce ne sont pas les mêmes origines pour les exemples qui suivent, car le nom d'hôte est différent&nbsp;:</p>
    <ul>
      <li><code>http://example.com</code></li>
      <li><code>http://www.example.com</code></li>
      <li><code>http://monapp.example.com</code></li>
    </ul>

<p>Les deux exemples qui suivent ne sont pas de la même origine, car les ports sont différents&nbsp;:</p>
    <ul>
      <li><code>http://example.com</code></li>
      <li><code>http://example.com:8080</code></li>
    </ul>

<h2 id="Pour_en_savoir_plus">Pour en savoir plus</h2>

<p>Voir <a href="/fr/docs/Web/JavaScript/Same_origin_policy_for_JavaScript">Same-origin policy</a> <em>(politique de même origine)</em> pour plus d'informations.</p>
