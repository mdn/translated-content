---
title: IntersectionObserver.thresholds
slug: Web/API/IntersectionObserver/thresholds
tags:
  - API
  - Draft
  - Intersection Observer
  - Intersection Observer API
  - IntersectionObserver
  - NeedsExample
  - Property
  - Reference
translation_of: Web/API/IntersectionObserver/thresholds
---
<div>{{APIRef("Intersection Observer API")}}</div>

<p>La propriété en lecture seule <strong><code>thresholds</code></strong> de l'interface <a href="/fr/docs/Web/API/IntersectionObserver"><code>IntersectionObserver</code></a> retourne la liste des seuils d'intersection spécifiés lors de l'instanciation avec <a href="/fr/docs/Web/API/IntersectionObserver/IntersectionObserver"><code>IntersectionObserver()</code></a>. Si un seul seuil a été fourni lors de l'instanciation de l'objet, cette propriété sera un tableau contenant cette unique valeur numérique.</p>

<p>Voir <a href="/fr/docs/Web/API/Intersection_Observer_API#Thresholds">la section sur les seuils</a> pour apprendre comment fonctionnent les seuils d'intersection.</p>

<h2 id="syntax">Syntaxe</h2>

<pre class="syntaxbox"><var>thresholds</var> = IntersectionObserver.thresholds;</pre>

<h3 id="value">Valeur</h3>

<p>Un tableau de seuils d'intersection, spécifiés lors de l'instanciation via <code>options.threshold</code>. Si un seul seuil a été fourni, sans être donné dans un tableau (avec une valeur numérique « brute » donc), la valeur de la propriété sera un tableau contenant cette unique valeur. Quel qu'ait été l'ordre du tableau fourni à l'origine, celui fournit par <code>thresholds</code> sera trié par ordre croissant.</p>

<p>Si aucune option <code>threshold</code> n'est fournie lors de l'instanciation avec <code>IntersectionObserver()</code>, la valeur par défaut de <code>thresholds</code> est définie à <code>[0]</code>.</p>

<div class="warning">
  <p><strong>Attention :</strong> Bien que l'objet d'<code>options</code> qu'on peut spécifier à la création d'un <a href="/fr/docs/Web/API/IntersectionObserver"><code>IntersectionObserver</code></a> possède une propriété champ nommée <a href="/fr/docs/Web/API/IntersectionObserver/IntersectionObserver"><code>threshold</code></a>, cette propriété-ci s'appelle <code>thresholds</code> (avec un « s » supplémentaire donc). <em>Cela peut porter à confusion</em>. Si vous utilisez <code>thresholds</code> par erreur comme nom pour la propriété de l'objet <code>options</code>, le tableau porté par <code>thresholds</code> va se retrouver égal à <code>[0.0]</code>, ce qui n'est probablement pas ce à quoi vous vous attendiez. Le déboguage n'en sera que plus chaotique.</p>
</div>

<h2 id="specifications">Spécifications</h2>

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
      <td>{{SpecName('IntersectionObserver', '#dom-intersectionobserver-thresholds', 'IntersectionObserver.thresholds')}}</td>
      <td>{{Spec2('IntersectionObserver')}}</td>
      <td>Définition initiale.</td>
    </tr>
  </tbody>
</table>

<h2 id="browser_compatibility">Compatibilité des navigateurs</h2>

<p>{{Compat("api.IntersectionObserver.thresholds")}}</p>
