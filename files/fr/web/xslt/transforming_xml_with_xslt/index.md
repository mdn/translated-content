---
title: Transformations XML avec XSLT
slug: Web/XSLT/Transforming_XML_with_XSLT
tags:
  - Transformations_XML_avec_XSLT
  - XML
  - XSLT
translation_of: Web/XSLT/Transforming_XML_with_XSLT
original_slug: Web/XSLT/Transformations_XML_avec_XSLT
---
<p>
</p><p><br>
</p>
<h3 id="Pr.C3.A9sentation"> <a href="fr/Transformations_XML_avec_XSLT/Pr%c3%a9sentation">Présentation</a> </h3>
<p>La séparation du contenu et de la présentation est l'une des caractéristiques principale du <a href="fr/XML">XML</a>. La structure d'un document XML est conçue pour refléter et clarifier les relations entre les différents aspects du contenu lui-même, sans l'obsurcir par la nécessité d'y intégrer des indications sur la présentation qui lui sera appliquée ensuite. Cette structure intelligente est particulièrement importante, car de plus en plus de transferts de données sont automatisés et se font entre des machines très hétérogènes reliées par un réseau.
</p><p>Mais au bout du compte, la plus grande partie du contenu des documents XML devra être présentée à des lecteurs humains. Parce qu'un navigateur possède une interface familière et extrêmement flexible, c'est un moyen idéal pour afficher une version du contenu XML remise en forme spécifiquement pour être présentée. Conçu dès ses débuts pour s'appuyer sur un large éventail de technologies XML, Mozilla intègre tous les mécanismes nécessaires au traitement des documents XML originaux, et des feuilles de styles spécialisées utilisées pour définir le traitement à leur appliquer pour un affichage en HTML. En déplaçant le processus de transformation du côté client, on réduit ainsi la charge serveur.
</p><p>Actuellement, Gecko (le moteur de rendu de Mozilla et Firefox) supporte deux formats de feuilles de styles XML. Pour le contrôle basique de l'apparence -- fontes, couleurs, position, etc. -- Gecko utilise <a href="fr/CSS">CSS</a>, tiré du <a href="fr/DHTML">DHTML</a>. Toutes les spécifications CSS1 et la majorité des CSS2 sont supportées, le support du tout récent CSS3 est en développement. Pour plus d'information à propos de CSS, consultez le site <a href="http://www.meyerweb.com/eric/css/">Eric Meyer's CSS pages</a>.
</p><p>Nous nous intéressons ici au second type de feuilles de styles supporté par Gecko : la feuille de style XSLT. XSLT signifie <i>eXtensible Stylesheet Language/Transform</i>. XSLT permet à un concepteur de feuilles de styles de transformer un document XML de départ de deux façons significatives : manipuler et réordonner le contenu (une réorganisation complète de celui-ci est possible si on le désire), et le transférer dans un autre format (dans le cas de Mozilla, on se concentre sur sa conversion à la volée en HTML pour permettre son affichage dans le navigateur).
</p>
<h3 id="R.C3.A9f.C3.A9rence_XSLT.2FXPath"> Référence XSLT/XPath </h3>
<h4 id=".C3.89l.C3.A9ments"> <a href="fr/XSLT/%c3%89l%c3%a9ments">Éléments</a> </h4>
<ul><li> <a href="fr/XSLT/apply-imports">xsl:apply-imports</a> <i>(supporté)</i>
</li><li> <a href="fr/XSLT/apply-templates">xsl:apply-templates</a> <i>(supporté)</i>
</li><li> <a href="fr/XSLT/attribute">xsl:attribute</a> <i>(supporté)</i>
</li><li> <a href="fr/XSLT/attribute-set">xsl:attribute-set</a> <i>(supporté)</i>
</li><li> <a href="fr/XSLT/call-template">xsl:call-template</a> <i>(supporté)</i>
</li><li> <a href="fr/XSLT/choose">xsl:choose</a> <i>(supporté)</i>
</li><li> <a href="fr/XSLT/comment">xsl:comment</a> <i>(supporté)</i>
</li><li> <a href="fr/XSLT/copy">xsl:copy</a> <i>(supporté)</i>
</li><li> <a href="fr/XSLT/copy-of">xsl:copy-of</a> <i>(supporté)</i>
</li><li> <a href="fr/XSLT/decimal-format">xsl:decimal-format</a> <i>(supporté)</i>
</li><li> <a href="fr/XSLT/element">xsl:element</a> <i>(supporté)</i>
</li><li> <a href="fr/XSLT/fallback">xsl:fallback</a> <i>(non supporté)</i>
</li><li> <a href="fr/XSLT/for-each">xsl:for-each</a> <i>(supporté)</i>
</li><li> <a href="fr/XSLT/if">xsl:if</a> <i>(supporté)</i>
</li><li> <a href="fr/XSLT/import">xsl:import</a> <i>(mostly supported)</i>
</li><li> <a href="fr/XSLT/include">xsl:include</a> <i>(supporté)</i>
</li><li> <a href="fr/XSLT/key">xsl:key</a> <i>(supporté)</i>
</li><li> <a href="fr/XSLT/message">xsl:message</a> <i>(supporté)</i>
</li><li> <a href="fr/XSLT/namespace-alias">xsl:namespace-alias</a> <i>(non supporté)</i>
</li><li> <a href="fr/XSLT/number">xsl:number</a> <i>(partiellement supporté)</i>
</li><li> <a href="fr/XSLT/otherwise">xsl:otherwise</a> <i>(supporté)</i>
</li><li> <a href="fr/XSLT/output">xsl:output</a> <i>(partiellement supporté)</i>
</li><li> <a href="fr/XSLT/param">xsl:param</a> <i>(supporté)</i>
</li><li> <a href="fr/XSLT/preserve-space">xsl:preserve-space</a> <i>(supporté)</i>
</li><li> <a href="fr/XSLT/processing-instruction">xsl:processing-instruction</a> </li><li> <a href="fr/XSLT/sort">xsl:sort</a> <i>(supporté)</i>
</li><li> <a href="fr/XSLT/strip-space">xsl:strip-space</a> <i>(supporté)</i>
</li><li> <a href="fr/XSLT/stylesheet">xsl:stylesheet</a> <i>(partiellement supporté)</i>
</li><li> <a href="fr/XSLT/template">xsl:template</a> <i>(supporté)</i>
</li><li> <a href="fr/XSLT/text">xsl:text</a> <i>(partially supported)</i>
</li><li> <a href="fr/XSLT/transform">xsl:transform</a> <i>(supporté)</i>
</li><li> <a href="fr/XSLT/value-of">xsl:value-of</a> <i>(partiellement supporté)</i>
</li><li> <a href="fr/XSLT/variable">xsl:variable</a> <i>(supporté)</i>
</li><li> <a href="fr/XSLT/when">xsl:when</a> <i>(supporté)</i>
</li><li> <a href="fr/XSLT/with-param">xsl:with-param</a> <i>(supporté)</i>
</li></ul>
<h4 id="Axes"> <a href="fr/XPath/Axes">Axes</a> </h4>
<ul><li> <a href="fr/XPath/Axes/ancestor">ancestor</a> </li><li> <a href="fr/XPath/Axes/ancestor-or-self">ancestor-or-self</a> </li><li> <a href="fr/XPath/Axes/attribute">attribute</a> </li><li> <a href="fr/XPath/Axes/child">child</a> </li><li> <a href="fr/XPath/Axes/descendant">descendant</a> </li><li> <a href="fr/XPath/Axes/descendant-or-self">descendant-or-self</a> </li><li> <a href="fr/XPath/Axes/following">following</a> </li><li> <a href="fr/XPath/Axes/following-sibling">following-sibling</a> </li><li> <a href="fr/XPath/Axes/namespace">namespace</a> <i>(non supporté)</i>
</li><li> <a href="fr/XPath/Axes/parent">parent</a> </li><li> <a href="fr/XPath/Axes/preceding">preceding</a> </li><li> <a href="fr/XPath/Axes/preceding-sibling">preceding-sibling</a> </li><li> <a href="fr/XPath/Axes/self">self</a>
</li></ul>
<h4 id="Fonctions"> <a href="fr/XPath/Fonctions">Fonctions</a> </h4>
<ul><li> <a href="fr/XPath/Fonctions/boolean">boolean()</a> <i>(supporté)</i>
</li><li> <a href="fr/XPath/Fonctions/ceiling">ceiling()</a> <i>(supporté)</i>
</li><li> <a href="fr/XPath/Fonctions/concat">concat()</a> <i>(supporté)</i>
</li><li> <a href="fr/XPath/Fonctions/contains">contains()</a> <i>(supporté)</i>
</li><li> <a href="fr/XPath/Fonctions/count">count()</a> <i>(supporté)</i>
</li><li> <a href="fr/XPath/Fonctions/current">current()</a> <i>(supporté)</i>
</li><li> <a href="fr/XPath/Fonctions/document">document()</a> <i>(supporté)</i>
</li><li> <a href="fr/XPath/Fonctions/element-available">element-available()</a> <i>(supporté)</i>
</li><li> <a href="fr/XPath/Fonctions/false">false()</a> <i>(supporté)</i>
</li><li> <a href="fr/XPath/Fonctions/floor">floor()</a> <i>(supporté)</i>
</li><li> <a href="fr/XPath/Fonctions/format-number">format-number()</a> <i>(supporté)</i>
</li><li> <a href="fr/XPath/Fonctions/function-available">function-available()</a> <i>(supporté)</i>
</li><li> <a href="fr/XPath/Fonctions/generate-id">generate-id()</a> <i>(supporté)</i>
</li><li> <a href="fr/XPath/Fonctions/id">id()</a> <i>(partiellement supporté)</i>
</li><li> <a href="fr/XPath/Fonctions/key">key()</a> <i>(supporté)</i>
</li><li> <a href="fr/XPath/Fonctions/lang">lang()</a> <i>(supporté)</i>
</li><li> <a href="fr/XPath/Fonctions/last">last()</a> <i>(supporté)</i>
</li><li> <a href="fr/XPath/Fonctions/local-name">local-name()</a> <i>(supporté)</i>
</li><li> <a href="fr/XPath/Fonctions/name">name()</a> <i>(supporté)</i>
</li><li> <a href="fr/XPath/Fonctions/namespace-uri">namespace-uri()</a> <i>(supporté)</i>
</li><li> <a href="fr/XPath/Fonctions/normalize-space">normalize-space()</a> <i>(supporté)</i>
</li><li> <a href="fr/XPath/Fonctions/not">not()</a> <i>(supporté)</i>
</li><li> <a href="fr/XPath/Fonctions/number">number()</a> <i>(supporté)</i>
</li><li> <a href="fr/XPath/Fonctions/position">position()</a> <i>(supporté)</i>
</li><li> <a href="fr/XPath/Fonctions/round">round()</a> <i>(supporté)</i>
</li><li> <a href="fr/XPath/Fonctions/starts-with">starts-with()</a> <i>(supporté)</i>
</li><li> <a href="fr/XPath/Fonctions/string">string()</a> <i>(supporté)</i>
</li><li> <a href="fr/XPath/Fonctions/string-length">string-length()</a> <i>(supporté)</i>
</li><li> <a href="fr/XPath/Fonctions/substring">substring()</a> <i>(supporté)</i>
</li><li> <a href="fr/XPath/Fonctions/substring-after">substring-after()</a> <i>(supporté)</i>
</li><li> <a href="fr/XPath/Fonctions/substring-before">substring-before()</a> <i>(supporté)</i>
</li><li> <a href="fr/XPath/Fonctions/sum">sum()</a> <i>(supporté)</i>
</li><li> <a href="fr/XPath/Fonctions/system-property">system-property()</a> <i>(supporté)</i>
</li><li> <a href="fr/XPath/Fonctions/translate">translate()</a> <i>(supporté)</i>
</li><li> <a href="fr/XPath/Fonctions/true">true()</a> <i>(supporté)</i>
</li><li> <a href="fr/XPath/Fonctions/unparsed-entity-url">unparsed-entity-url()</a> <i>(non supporté)</i>
</li></ul>
<h3 id="Autres_ressources"> <a href="fr/Transformations_XML_avec_XSLT/Autres_ressources">Autres ressources</a> </h3>
<ul><li> <a href="fr/Transformations_XML_avec_XSLT/Autres_ressources#Livres">Livres</a> </li><li> <a href="fr/Transformations_XML_avec_XSLT/Autres_ressources#En_ligne">En ligne</a> <ul><li> <a href="fr/Transformations_XML_avec_XSLT/Autres_ressources#Le_World_Wide_Web_Consortium">Le World Wide Web Consortium</a> </li><li> <a href="fr/Transformations_XML_avec_XSLT/Autres_ressources#Portails">Portails</a> </li><li> <a href="fr/Transformations_XML_avec_XSLT/Autres_ressources#Articles">Articles</a> </li><li> <a href="fr/Transformations_XML_avec_XSLT/Autres_ressources#Tutoriels.2FExemples">Tutoriels/Exemples</a> </li><li> <a href="fr/Transformations_XML_avec_XSLT/Autres_ressources#Mailing_Lists.2FNewsgroups">Mailing Lists/Newsgroups</a>
</li></ul>
</li><li> <a href="fr/Transformations_XML_avec_XSLT/Autres_ressources#Extensions">Extensions</a>
</li></ul>
