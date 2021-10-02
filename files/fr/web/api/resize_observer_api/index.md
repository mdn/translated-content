---
title: Resize Observer API
slug: Web/API/Resize_Observer_API
tags:
  - API
  - Draft
  - Element
  - Monitor
  - Overview
  - Reference
  - Resize Observer
  - Resize Observer API
  - observe
translation_of: Web/API/Resize_Observer_API
---
<p>{{DefaultAPISidebar("Resize Observer API")}}</p>

<p>L'API Resize Observer fournit un mécanisme performant par lequel du code peut surveiller les changements de dimensions d'un élément et un observateur recevoir des notifications chaque fois que les dimensions changent.</p>

<h2 id="Concepts_et_utilisation">Concepts et utilisation</h2>

<p>Il y a une multitude de cas d'utilisation pour des techniques de <em>responsive design</em> (et d'autres par ailleurs) qui répondent à des changements de dimensions d'un élément mais, avant, leur implantation était souvent amateures et parfois imparfaites.</p>

<p>Par exemple, les <a href="/en-US/docs/Web/CSS/Media_Queries">media queries</a> / {{domxref("window.matchMedia")}} sont un bon outil pour mettre à jour une mise en page à des points spécifiques quand la zone d'affichage change de dimensions, mais qu'en est-il si vous désirez changer la mise en page en réponse à un changement spécifique des dimensions d'un élément qui n'est pas le conteneur principal ?</p>

<p>Pour réaliser ceci, une solution limitée serait d'écouter les changements sur un type d'événement qui convienne à résoudre le problème et qui corresponde à l'élément dont les changements de dimensions vous intéresse (c'est-à-dire l'<a href="/en-US/docs/Web/API/Window/resize_event">événement resize</a> sur window), puis de calculer les nouvelles dimensions ou autres propriétés de l'élément après un redimensionnement au moyen de {{domxref("Element.getBoundingClientRect")}} ou de {{domxref("Window.getComputedStyle")}}, par exemple.</p>

<p>Une telle solution tend à ne fonctionner que pour des cas d'utilisation limités, causer des soucis de performance (continuellement appeler les méthodes évoquées ci-avant résulterait en une grosse baisse de performance), et souvent ne fonctionnera quand les dimensions de la fenêtre du navigateur ne sont pas changées.</p>

<p>L'API Resize Observer fournit une solution adaptée à résoudre exactement ces types de problèmes, et plus encore, en vous permettant d'observer aisément et de répondre à des changements dans les dimensions du content-box ou du border box d'un élément, et ce d'une manière performante. Elle fournit une solution en JavaScript au manque souvent dénoncé de <a href="https://www.xanthir.com/b4PR0">requêtes sur les éléments</a> sur la plate-forme web.</p>

<p>Son utilisation est simple et presque identique aux autres observateurs tels que le <a href="/en-US/docs/Web/API/PerformanceObserver">Performance Observer</a> ou l'<a href="/en-US/docs/Web/API/Intersection_Observer_API">Intersection Observer</a>. Il vous faut créer un nouvel objet {{domxref("ResizeObserver")}} en utilisant le constructeur <code><a href="/en-US/docs/Web/API/ResizeObserver/ResizeObserver">ResizeObserver()</a></code>, puis utiliser {{domxref("ResizeObserver.observe()")}} pour le faire observer les changements de dimensions d'un élément spécifiques. Une fonction de rappel fournise au constructeur sera exécutée à chaque fois que les dimensions changent, fournissant un accès aux nouvelles dimensions et vous permettant de faire tous ce que vous souhaitez faire en réponse à ces changements.</p>

<h2 id="Interfaces">Interfaces</h2>

<dl>
 <dt>{{domxref("ResizeObserver")}}</dt>
 <dd>fournit la possibilité d'enregistrer de nouveaux observateurs et de démarrer ou d'arrêter d'observer des éléments.</dd>
 <dt>{{domxref("ResizeObserverEntry")}}</dt>
 <dd>Décrit un unique élément qui a été redimensionné, identifiant l'élément et ses nouvelles dimensions.</dd>
</dl>

<h2 id="Exemples">Exemples</h2>

<p>Vous trouverez plusieurs exemples basiques sur notre dépôt GitHub :</p>

<ul>
 <li><a href="https://mdn.github.io/dom-examples/resize-observer/resize-observer-border-radius.html">resize-observer-border-radius.html</a> (<a href="https://github.com/mdn/dom-examples/blob/master/resize-observer/resize-observer-border-radius.html">voir la source</a>): Un exemple simple avec une boîte verte, dont les dimensions sont proportionnelles à celles de la fenêtre du navigateur. Quand les dimensions de la fenêtre changent, l'arrondissement des angles du carré changent en proportion à la taille du carré. Nous pourrions seulement implanter celà en utilisant {{cssxref("border-radius")}} avec une valeur en pourcentage, mais celà mène vite à des angles elliptiques non esthétiques, tandis que la solution ci-avant vous donne un carré aux angles agréables qui s'adaptent à la taille du carré.</li>
 <li><a href="https://mdn.github.io/dom-examples/resize-observer/resize-observer-text.html">resize-observer-text.html</a> (<a href="https://github.com/mdn/dom-examples/blob/master/resize-observer/resize-observer-text.html">voir la source</a>): Ici, nous utilisations l'observateur de redimensionnement pour changer la {{cssxref("font-size")}} d'un en-tête et d'un paragraphe quand la <code>&lt;div&gt;</code> extérieure change de taille selon la valeur d'une jauge de sélection. Celà montre que vous pouvez répondre à des changement de dimensions d'un élément même s'ils n'ont rien en rapport avec la fenêtre du navigateur.</li>
</ul>

<p>Le code suivra usuellement ce genre de modèle (tiré de resize-observer-border-radius.html):</p>

<pre class="brush: js">const resizeObserver = new ResizeObserver(entries =&gt; {
  for (let entry of entries) {
    if(entry.contentBoxSize) {
      entry.target.style.borderRadius = Math.min(100, (entry.contentBoxSize.inlineSize/10) +
                                                      (entry.contentBoxSize.blockSize/10)) + 'px';
    } else {
      entry.target.style.borderRadius = Math.min(100, (entry.contentRect.width/10) +
                                                      (entry.contentRect.height/10)) + 'px';
    }
  }
});

resizeObserver.observe(document.querySelector('div'));</pre>

<h2 id="Spécifications">Spécifications</h2>

<table class="standard-table">
 <tbody>
  <tr>
   <th scope="col">Spécification</th>
   <th scope="col">État</th>
   <th scope="col">Commentaire</th>
  </tr>
  <tr>
   <td>{{SpecName('Resize Observer')}}</td>
   <td>{{Spec2('Resize Observer')}}</td>
   <td>Définition initiale.</td>
  </tr>
 </tbody>
</table>

<h2 id="Compatibilité_des_navigateurs">Compatibilité des navigateurs</h2>



<p>{{Compat("api.ResizeObserver")}}</p>

<h2 id="Voir_aussi">Voir aussi</h2>

<ul>
 <li><a href="https://developers.google.com/web/updates/2016/10/resizeobserver">ResizeObserver: It’s Like document.onresize for Elements</a></li>
</ul>
