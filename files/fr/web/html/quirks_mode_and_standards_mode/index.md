---
title: Mode quirks et mode standard
slug: Web/HTML/Quirks_Mode_and_Standards_Mode
tags:
  - Gecko
  - Guide
  - HTML
  - Web Development
  - Web Standards
  - XHTML
translation_of: Web/HTML/Quirks_Mode_and_Standards_Mode
---
<p>{{HTMLRef}}</p>

<p>Par le passé, les pages web étaient souvent écrites sous deux versions : une destinée à Netscape Navigator et l'autre à Microsoft Internet Explorer. Lorsque les standards du Web sont apparus avec le W3C, les navigateurs ne pouvaient pas simplement commencer à les utiliser car leur mise en place rendrait inutilisable la plupart des sites web existant. Les navigateurs ont alors introduit deux modes afin de traiter les sites respectants les standards des autres sites historiques.</p>

<p>Il existe aujourd'hui trois modes utilisés par les moteurs de rendu des navigateurs web : le mode <i>quirks</i>, le mode quasi-standard et le mode standard total. En <strong>mode <i>quirks</i></strong>, le moteur de mise en page émule le comportement non-standard de Navigator 4 et d'Internet Explorer 5. Ce mode permet de prendre en charge les sites web rédigés avant l'adoption généralisée des standards web. En <strong>mode standard total</strong>, le comportement du navigateur est entièrement (aux bugs près) celui décrit par les spécifications HTML et CSS. En <strong>mode quasi-standard</strong>, très peu de déviations sont implémentées.</p>

<h2 id="How_does_Mozilla_determine_which_mode_to_use">Comment les navigateurs déterminent le mode à utiliser ?</h2>

<p>Pour les documents <a href="/fr/docs/Web/HTML">HTML</a>, les navigateurs utilisent le <code>DOCTYPE</code> présent au début du document afin de déterminer si celui-ci doit être géré avec le mode <i>quirks</i> ou avec l'un des modes standards. Si vous souhaitez qu'une page utilise le mode standard total, son DOCTYPE devra correspondre à celui utilisé dans cet exemple :</p>

<pre class="brush: html">&lt;!DOCTYPE html&gt;
&lt;html lang="fr"&gt;
  &lt;head&gt;
    &lt;meta charset=UTF-8&gt;
    &lt;title&gt;Bonjour tout le monde !&lt;/title&gt;
  &lt;/head&gt;
  &lt;body&gt;
  &lt;/body&gt;
&lt;/html&gt;</pre>

<p>Le DOCTYPE illustré dans cet exemple, <code>&lt;!DOCTYPE html&gt;</code>, est le plus simple possible et correspond à la recommandation HTML5. Les versions précédentes des standards HTML recommandaient d'autres variantes. Toutefois, l'ensemble des navigateurs actuels utiliseront le mode standard total avec ce DOCTYPE (y compris IE6). Il n'est pas justifié de choisir un DOCTYPE plus compliqué ; le faire risquerait de déclencher l'utilisation du mode quasi-standard ou du mode <i>quirks</i>.</p>

<p>Assurez-vous que le DOCTYPE soit présent au tout début du document HTML. Tout ce qui précède le DOCTYPE (un commentaire ou une déclaration XML) déclenchera le mode <i>quirks</i> pour Internet Explorer 9 et les versions antérieures.</p>

<p>En HTML5, le seul but du DOCTYPE est d'activer le mode standard total. Les anciennes versions du standard HTML donnaient une sémantique plus riche au DOCTYPE mais aucun navigateur n'a utilisé le DOCTYPE pour autre chose que pour choisir entre le mode <i>quirks</i> et l'un des modes standards.</p>

<p>Vous pouvez également consulter <a href="https://hsivonen.iki.fi/doctype/">cet article avec plus de détails sur la façon dont les navigateurs choisissent entre les différents modes</a>.</p>

<h3 id="XHTML">XHTML</h3>

<p>Si la page est servie comme <a href="/fr/docs/Glossary/XHTML">XHTML</a> avec le type MIME <code>application/xhtml+xml</code> dans l'en-tête HTTP <code>Content-Type</code>, il n'est pas nécessaire d'utiliser de DOCTYPE afin d'activer le mode standard, car de tels documents utiliseront toujours le mode standard total. On notera toutefois que servir les pages avec un type <code>application/xhtml+xml</code> entraînera l'affichage <a href="/fr/docs/Glossary/XHTML#support">d'une boîte de téléchargement</a> d'un fichier au format inconnu sous Internet Explorer 8 car IE9 est la première version d'Internet Explorer à prendre en charge XHTML.</p>

<p>Si on sert un contenu semblable à du XHTML mais avec le type MIME <code>text/html</code>, le navigateur l'interprètera comme du HTML et il faudra alors ajouter le DOCTYPE afin d'utiliser un mode standard.</p>

<h2 id="How_do_I_see_which_mode_is_used">Comment connaître le mode utilisé ?</h2>

<p>Sous Firefox, vous pouvez utiliser le menu contextuel : "Informations sur la page" et le champ "Mode de rendu" de l'onglet Général..</p>

<p>Sous Internet Explorer, appuyez sur la touche <em>F12</em> et utilisez le champ <em>Document Mode</em>.</p>