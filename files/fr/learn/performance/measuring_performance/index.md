---
title: Mesure des performances
slug: Learn/Performance/Measuring_performance
---

{{LearnSidebar}} {{PreviousMenuNext("Learn/Performance/Perceived_performance", "Learn/Performance/Multimedia", "Learn/Performance")}}

La mesure des performance fournit un indicateur important pour vous aider à assurer le succès de votre application, site ou service web.

Par exemple, vous pouvez utiliser les indicateurs de performances pour déterminer la manière dont votre application se charge par rapport à vos concurrents, ou par rapport à vos versions précédentes. Il est recommandé de choisir des indicateurs pertinents en fonction de vos utilisatrices et utilisateurs, du contexte de votre site et de vos objectifs commerciaux. Ces indicateurs doivent être collectés et mesurés de façon cohérente et analysés à partir d'un format qui peut être lu et compris par des parties prenantes non techniques.

Cet article présente les indicateurs de performances web que vous pouvez utiliser afin de mesurer et optimiser les performances de votre site.

<table class="standard-table">
  <tbody>
    <tr>
      <th scope="row">Pré-requis&nbsp;:</th>
      <td>
        Bases de l'informatique,
        <a
          href="/fr/docs/Learn/Getting_started_with_the_web/Installing_basic_software"
          >logiciels de base</a
        >
        installés et connaissances de base
        <a href="/fr/docs/Learn/Getting_started_with_the_web"
          >des technologies web opérant côté client</a
        >.
      </td>
    </tr>
    <tr>
      <th scope="row">Objectif&nbsp;:</th>
      <td>
        <p>
          Proposer des informations sur les indicateurs de performance web que
          vous pouvez collecter avec les différentes API de performances web et
          présenter des outils qui permettent de visualiser ces données.
        </p>
      </td>
    </tr>
  </tbody>
</table>

## Les API de mesure des performances

Si vous êtes en capacité d'écrire du code pour le web, sachez qu'il existe un grand nombre [d'API Web](/fr/docs/Web/API) destinées à créer vos propres outils de mesure de performances.

Vous pouvez utiliser [l'API d'horodatage de navigation](/fr/docs/Web/API/Navigation_timing_API) pour mesurer les performances web côté client. Cela comprend le volume de temps nécessaire pour décharger la page précédente, le temps que prendra la résolution du nom de domaine, le total du temps passé à exécuter le chargement de la page, et bien plus encore. Vous pouvez utiliser les API pour créer des indicateurs de mesure de tous les évènements liés à la navigation affichés dans le diagramme présenté ci-dessous.

![Voici les différents gestionnaires que l'API d'horodatage de la navigation peut prendre en charge, incluant les gestionnaires suivants (en anglais) : Prompt for unload ; redirect ; unload ; App cache ; DNS ; TCP ; Request ; Response ; Processing ; onLoad ; navigationStart ; redirectStart ; redirectEnd ; fetchStart ; domainLookupEnd ; domainLookupStart ; connectStart (secureConnectionStart) ; connectEnd ; requestStart ; responseStart ; responseEnd ; unloadStart ; unloadEnd ; domLoading ; domInteractive ; domContentLoaded ; domComplete ; loadEventStart ; loadEventEnd.](navigationtimingapi.jpg)

[L'API de performances](/fr/docs/Web/API/Performance_API/Using_the_Performance_API) propose un accès aux informations liées aux performances, ce qui comprend [l'API de chronologie des performances](/fr/docs/Web/API/Performance_Timeline), [l'API d'horodatage de la navigation](/fr/docs/Web/API/Navigation_timing_API), [l'API d'horodatage du visiteur](/fr/docs/Web/API/User_Timing_API) ainsi que [l'API d'horodatage des ressources](/fr/docs/Web/API/Resource_Timing_API). Ces interfaces permettent de mesurer précisément le temps que prennent les tâches JavaScript pour se dérouler.

L'objet [`PerformanceEntry`](/fr/docs/Web/API/PerformanceEntry) fait partie de la _chronologie des performances_. Une entrée _performance_ peut directement être créée en utilisant _{{domxref("PerformanceMark","PerformanceMark")}}_ ou une _{{domxref("PerformanceMeasure","PerformanceMeasure")}}_ (par exemple en appelant la méthode {{domxref("Performance.mark","mark()")}}) sur un point explicite de l'application. Les entrées de performances peuvent aussi être créées de façon indirecte, par exemple lors du chargement d'une ressource graphique.

[L'API PerformanceObserver](/fr/docs/Web/API/PerformanceObserver) peut être utilisée pour observer le déroulement d'évènements de mesure des performances et permet de vous notifier de nouvelles [entrées de performances](/fr/docs/Web/API/PerformanceEntry) lorsqu'elles enregistrent la chronologie des performances dans le navigateur.

Si cet article n'a pas pour but de proposer une documentation complète de ces API, il est bon de savoir qu'elles existent. Vous pouvez vous référer à l'article concernant [l'horodatage de navigation](/fr/docs/Web/Performance/Navigation_and_resource_timings) pour aller plus loin et découvrir plus d'exemples concernant les API liées à la mesure des performances.

## Outils de mesure

Il y a beaucoup d'outils disponibles pour vous aider à améliorer les performances de vos sites. Ils sont généralement classés dans deux catégories&nbsp;:

- Les outils qui indiquent ou mesurent les performances, tels que [PageSpeed Insights](https://developers.google.com/speed/pagespeed/insights/) ou le [moniteur réseau](/fr/docs/Tools/Network_Monitor) et le [moniteur de performances](/fr/docs/Tools/Performance) de Firefox. Ces outils vous montrent la vitesse de chargement de votre site ou de votre application. Ils vous indiquent également les points sur lesquels votre application web peut être améliorée.
- Les outils qui corrigent le code de votre application web ou de votre site afin d'améliorer ses performances. Par exemple, certains outils de construction empaquettent le code réparti sur plusieurs fichiers en un seul fichier unique afin de réduire le nombre de requêtes HTTP. Il existe aussi des minificateurs qui suppriment tous les espaces de votre code pour réduire la taille des fichiers.

Sur cette page, ces deux catégories d'outils seront abordées. Par ailleurs, en parlant des mesures de performances, nous aborderons bien entendu les indicateurs que vous allez utiliser pour déterminer si les performances de votre site s'améliorent ou non.

### Outils de rapport de performances génériques

Les outils tels que [PageSpeed Insights](https://developers.google.com/speed/pagespeed/insights/) sont faits pour mesurer les performances des sites. Vous saisissez une URL, puis vous obtenez un rapport de performances en quelques secondes. Le rapport contient les scores obtenus par votre site, que ce soit sur mobile ou sur ordinateur de bureau. C'est un bon point de départ pour savoir d'où vous partez et pour connaître les points d'amélioration.

Au moment de l'écriture de cette page, voici à quoi ressemblait le rapport de performances du site MDN&nbsp;:

![Une capture d'écran montrant le rapport PageSpeed Insights de la page d'accueil de Mozilla.](pagespeed-insight-mozilla-homepage.png)

Un rapport de performances contient des informations concernant le temps d'attente des visiteurs avant que quelque chose ne s'affiche, le nombre d'octets à télécharger pour afficher la page, et bien plus encore. Cela vous permet également de savoir si les mesures réalisées sont positives ou négatives.

[webpagetest.org](https://webpagetest.org) est un autre exemple d'outil capable de tester automatiquement votre site et d'afficher des indicateurs utiles.

Essayez vos sites favoris sur webpagetest.org et PageSpeed Insights, vous connaîtrez leurs scores de performances.

### Outils réseau

La plupart des navigateurs ont des outils avec lesquels vous pouvez tester les pages web en cours de chargement pour déterminer leurs performances. Par exemple, le [moniteur réseau](/fr/docs/Tools/Network_Monitor) de Firefox retourne des informations détaillées sur toutes les ressources téléchargées sur le réseau ainsi qu'un graphique montrant la durée de téléchargement de chaque ressource.

![](network-monitor.png)

Vous pouvez aussi utiliser le [moniteur de performances](/fr/docs/Tools/Performance) pour mesurer les performances de l'interface de votre application ou de votre site pendant que vous réalisez différentes actions. Cela permet d'identifier les fonctionnalités qui ralentissent le plus votre interface.

![](perf-monitor.png)

## Conclusion

Cet article était destiné à proposer une vue d'ensemble rapide des indicateurs de performance web que vous pouvez mesurer sur un site ou une application web. Dans le prochain article, nous verrons comment travailler sur la performance perçue et nous découvrirons des techniques permettant de rendre les éléments les plus longs à charger un peu moins lents pour le visiteur, voire pour les masquer complètement.

{{PreviousMenuNext("Learn/Performance/Perceived_performance", "Learn/Performance/Multimedia", "Learn/Performance")}}
