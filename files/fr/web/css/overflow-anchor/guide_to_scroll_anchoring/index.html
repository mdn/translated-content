---
title: 'Guide : ancrage du défilement (scroll anchoring)'
slug: Web/CSS/overflow-anchor/Guide_to_scroll_anchoring
tags:
  - CSS
  - Guide
  - Intermédiaire
translation_of: Web/CSS/overflow-anchor/Guide_to_scroll_anchoring
original_slug: Web/CSS/overflow-anchor/Guide_ancrage_défilement
---
<div>{{CSSRef}}</div>

<p>Lorsque vous naviguez sur le Web avec une connexion plus ou moins performante, vous avez déjà pu rencontrer le problème suivant : vous faites défiler verticalement le contenu d'une page qui est en cours de chargement puis, au milieu de votre lecture, le contenu se décale brutalement plus bas (parce que des images au-dessus ou d'autres éléments ont fini de charger et s'affichent enfin).</p>

<p>L'ancrage du défilement (ou <em>scroll anchoring</em> en anglais) est une fonctionnalité des navigateurs qui vise à résoudre ce problème de « saut » (qui se produit lorsque l'utilisateur a déjà suffisamment fait défiler le contenu pour arriver sur une autre partie du document).</p>

<h2 id="Comment_cela_fonctionne">Comment cela fonctionne ?</h2>

<p>L'ancrage du défilement ajuste la position du défilement pour compenser les modification apportées en dehors de la zone d'affichage (<em>viewport</em>). Cela signifie que l'emplacement atteint par l'utilisateur reste dans la zone d'affichage (la position de défilement se retrouve donc implicitement modifiée en termes de distance parcourue sur le document).</p>

<h2 id="Comment_activer_l'ancrage_du_défilement">Comment activer l'ancrage du défilement ?</h2>

<p>Il n'y a rien à fait. Cette fonctionnalité est activée par défaut pour les navigateurs qui la prennent en charge. Dans la plupart des cas, ces sauts inattendus ne sont pas une expérience voulue.</p>

<h2 id="Si_besoin_que_faire_pour_le_désactiver">Si besoin, que faire pour le désactiver ?</h2>

<p>La spécification fournit une nouvelle propriété : {{cssxref("overflow-anchor")}}. Celle-ci peut être utilisée pour désactiver explicitement l'ancrage du défilement sur une partie ou sur l'ensemble du document. Cette propriété sert de mécanisme pour ne pas utiliser le nouveau comportement.</p>

<p>Les valeurs utilisables pour cette propriété sont <code>auto</code> ou <code>none</code> :</p>

<ul>
 <li><code>auto</code> correspond à la valeur initiale : si c'est un navigateur compatible qui est utilisé, l'ancrage est activé et il devrait y avoir moins de déplacements brusques.</li>
 <li><code>none</code> signifie qu'on choisit explicitement de ne pas utiliser l'ancrage du défilement pour tout ou partie du document.</li>
</ul>

<p>Pour désactiver l'ancrage sur l'ensemble du document, on pourra appliquer la propriété sur l'élément {{htmlelement("body")}} :</p>

<pre class="brush: css">body {
  overflow-anchor: none;
} </pre>

<p>Pour désactiver cette fonctionnalité sur une certaine partie du document, on ciblera <code>overflow-anchor: none</code> sur l'élément conteneur dans lequel l'utilisateur fait défiler le contenu :</p>

<pre class="brush: css">.container {
  overflow-anchor: none;
} </pre>

<div class="note">
<p><strong>Note :</strong> Dans la spécification, il est indiqué qu'il n'est pas possible de « revenir » avec l'ancrage dans un élément fils si l'ancrage a été désactivé sur un élément parent. Ainsi, si on désactive l'ancrage pour l'ensemble du document, on ne pourra pas appliquer (avec succès) <code>overflow-anchor: auto</code> à un autre endroit du document.</p>
</div>

<h3 id="Supression_triggers">Supression triggers</h3>

<p>La spécification définit également certains évènements qui suppriment cette fonctionnalité où ça serait problématique. Si un évènement particulier se produit sur le nœud d'ancrage ou sur un ancêtre de celui-ci, l'ancrage est supprimé.</p>

<p>Les évènements en question sont les modifications des <a href="/fr/docs/Web/CSS/Valeur_calculée">valeurs calculées</a> des propriétés suivantes :</p>

<ul>
 <li>{{cssxref("top")}}, {{cssxref("left")}}, {{cssxref("right")}} ou {{cssxref("bottom")}}</li>
 <li>{{cssxref("margin")}} ou {{cssxref("padding")}}</li>
 <li>Toute propriété relative à {{cssxref("width")}} ou à {{cssxref("height")}}</li>
 <li>{{cssxref("position")}}</li>
 <li>{{cssxref("transform")}}</li>
</ul>

<h2 id="Compatibilité_des_navigateurs">Compatibilité des navigateurs</h2>

<p>Si vous souhaitez appliquer une amélioration progressive et détecter si cette fonctionnalité est disponible dans le navigateur utilisé, vous pouvez utiliser <a href="/fr/docs/Web/CSS/@supports">les requêtes de fonctionnalité</a> afin de tester la prise en charge de la propriété <code>overflow-anchor</code>.</p>

<p>{{Compat("css.properties.overflow-anchor")}}</p>

<h2 id="Voir_aussi">Voir aussi</h2>

<ul>
 <li><a href="https://github.com/WICG/ScrollAnchoring/blob/master/explainer.md">Document d'explication sur le site du WICG (en anglais)</a></li>
 <li><a href="https://blog.chromium.org/2017/04/scroll-anchoring-for-web-developers.html">L'ancrage du défilement pour les développeurs web - Blog Chromium (en anglais)</a></li>
 <li><a href="https://blog.eqrion.net/pin-to-bottom/">Implémenter un élément avec le défilement fixe en bas (en anglais)</a></li>
</ul>
