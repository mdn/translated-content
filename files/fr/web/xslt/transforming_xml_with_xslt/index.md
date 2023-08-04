---
title: Transformations XML avec XSLT
slug: Web/XSLT/Transforming_XML_with_XSLT
---

### [Présentation](/fr/Transformations_XML_avec_XSLT/Présentation)

La séparation du contenu et de la présentation est l'une des caractéristiques principale du [XML](/fr/XML). La structure d'un document XML est conçue pour refléter et clarifier les relations entre les différents aspects du contenu lui-même, sans l'obsurcir par la nécessité d'y intégrer des indications sur la présentation qui lui sera appliquée ensuite. Cette structure intelligente est particulièrement importante, car de plus en plus de transferts de données sont automatisés et se font entre des machines très hétérogènes reliées par un réseau.

Mais au bout du compte, la plus grande partie du contenu des documents XML devra être présentée à des lecteurs humains. Parce qu'un navigateur possède une interface familière et extrêmement flexible, c'est un moyen idéal pour afficher une version du contenu XML remise en forme spécifiquement pour être présentée. Conçu dès ses débuts pour s'appuyer sur un large éventail de technologies XML, Mozilla intègre tous les mécanismes nécessaires au traitement des documents XML originaux, et des feuilles de styles spécialisées utilisées pour définir le traitement à leur appliquer pour un affichage en HTML. En déplaçant le processus de transformation du côté client, on réduit ainsi la charge serveur.

Actuellement, Gecko (le moteur de rendu de Mozilla et Firefox) supporte deux formats de feuilles de styles XML. Pour le contrôle basique de l'apparence — fontes, couleurs, position, etc. — Gecko utilise [CSS](/fr/CSS), tiré du [DHTML](/fr/DHTML). Toutes les spécifications CSS1 et la majorité des CSS2 sont supportées, le support du tout récent CSS3 est en développement. Pour plus d'information à propos de CSS, consultez le site [Eric Meyer's CSS pages](http://www.meyerweb.com/eric/css/).

Nous nous intéressons ici au second type de feuilles de styles supporté par Gecko&nbsp;: la feuille de style XSLT. XSLT signifie _eXtensible Stylesheet Language/Transform_. XSLT permet à un concepteur de feuilles de styles de transformer un document XML de départ de deux façons significatives&nbsp;: manipuler et réordonner le contenu (une réorganisation complète de celui-ci est possible si on le désire), et le transférer dans un autre format (dans le cas de Mozilla, on se concentre sur sa conversion à la volée en HTML pour permettre son affichage dans le navigateur).

### Référence XSLT/XPath

#### [Éléments](/fr/XSLT/Éléments)

- [xsl:apply-imports](/fr/XSLT/apply-imports) _(supporté)_
- [xsl:apply-templates](/fr/XSLT/apply-templates) _(supporté)_
- [xsl:attribute](/fr/XSLT/attribute) _(supporté)_
- [xsl:attribute-set](/fr/XSLT/attribute-set) _(supporté)_
- [xsl:call-template](/fr/XSLT/call-template) _(supporté)_
- [xsl:choose](/fr/XSLT/choose) _(supporté)_
- [xsl:comment](/fr/XSLT/comment) _(supporté)_
- [xsl:copy](/fr/XSLT/copy) _(supporté)_
- [xsl:copy-of](/fr/XSLT/copy-of) _(supporté)_
- [xsl:decimal-format](/fr/XSLT/decimal-format) _(supporté)_
- [xsl:element](/fr/XSLT/element) _(supporté)_
- [xsl:fallback](/fr/XSLT/fallback) _(non supporté)_
- [xsl:for-each](/fr/XSLT/for-each) _(supporté)_
- [xsl:if](/fr/XSLT/if) _(supporté)_
- [xsl:import](/fr/XSLT/import) _(mostly supported)_
- [xsl:include](/fr/XSLT/include) _(supporté)_
- [xsl:key](/fr/XSLT/key) _(supporté)_
- [xsl:message](/fr/XSLT/message) _(supporté)_
- [xsl:namespace-alias](/fr/XSLT/namespace-alias) _(non supporté)_
- [xsl:number](/fr/XSLT/number) _(partiellement supporté)_
- [xsl:otherwise](/fr/XSLT/otherwise) _(supporté)_
- [xsl:output](/fr/XSLT/output) _(partiellement supporté)_
- [xsl:param](/fr/XSLT/param) _(supporté)_
- [xsl:preserve-space](/fr/XSLT/preserve-space) _(supporté)_
- [xsl:processing-instruction](/fr/XSLT/processing-instruction)
- [xsl:sort](/fr/XSLT/sort) _(supporté)_
- [xsl:strip-space](/fr/XSLT/strip-space) _(supporté)_
- [xsl:stylesheet](/fr/XSLT/stylesheet) _(partiellement supporté)_
- [xsl:template](/fr/XSLT/template) _(supporté)_
- [xsl:text](/fr/XSLT/text) _(partially supported)_
- [xsl:transform](/fr/XSLT/transform) _(supporté)_
- [xsl:value-of](/fr/XSLT/value-of) _(partiellement supporté)_
- [xsl:variable](/fr/XSLT/variable) _(supporté)_
- [xsl:when](/fr/XSLT/when) _(supporté)_
- [xsl:with-param](/fr/XSLT/with-param) _(supporté)_

#### [Axes](/fr/XPath/Axes)

- [ancestor](/fr/XPath/Axes/ancestor)
- [ancestor-or-self](/fr/XPath/Axes/ancestor-or-self)
- [attribute](/fr/XPath/Axes/attribute)
- [child](/fr/XPath/Axes/child)
- [descendant](/fr/XPath/Axes/descendant)
- [descendant-or-self](/fr/XPath/Axes/descendant-or-self)
- [following](/fr/XPath/Axes/following)
- [following-sibling](/fr/XPath/Axes/following-sibling)
- [namespace](/fr/XPath/Axes/namespace) _(non supporté)_
- [parent](/fr/XPath/Axes/parent)
- [preceding](/fr/XPath/Axes/preceding)
- [preceding-sibling](/fr/XPath/Axes/preceding-sibling)
- [self](/fr/XPath/Axes/self)

#### [Fonctions](/fr/XPath/Fonctions)

- [boolean()](/fr/XPath/Fonctions/boolean) _(supporté)_
- [ceiling()](/fr/XPath/Fonctions/ceiling) _(supporté)_
- [concat()](/fr/XPath/Fonctions/concat) _(supporté)_
- [contains()](/fr/XPath/Fonctions/contains) _(supporté)_
- [count()](/fr/XPath/Fonctions/count) _(supporté)_
- [current()](/fr/XPath/Fonctions/current) _(supporté)_
- [document()](/fr/XPath/Fonctions/document) _(supporté)_
- [element-available()](/fr/XPath/Fonctions/element-available) _(supporté)_
- [false()](/fr/XPath/Fonctions/false) _(supporté)_
- [floor()](/fr/XPath/Fonctions/floor) _(supporté)_
- [format-number()](/fr/XPath/Fonctions/format-number) _(supporté)_
- [function-available()](/fr/XPath/Fonctions/function-available) _(supporté)_
- [generate-id()](/fr/XPath/Fonctions/generate-id) _(supporté)_
- [id()](/fr/XPath/Fonctions/id) _(partiellement supporté)_
- [key()](/fr/XPath/Fonctions/key) _(supporté)_
- [lang()](/fr/XPath/Fonctions/lang) _(supporté)_
- [last()](/fr/XPath/Fonctions/last) _(supporté)_
- [local-name()](/fr/XPath/Fonctions/local-name) _(supporté)_
- [name()](/fr/XPath/Fonctions/name) _(supporté)_
- [namespace-uri()](/fr/XPath/Fonctions/namespace-uri) _(supporté)_
- [normalize-space()](/fr/XPath/Fonctions/normalize-space) _(supporté)_
- [not()](/fr/XPath/Fonctions/not) _(supporté)_
- [number()](/fr/XPath/Fonctions/number) _(supporté)_
- [position()](/fr/XPath/Fonctions/position) _(supporté)_
- [round()](/fr/XPath/Fonctions/round) _(supporté)_
- [starts-with()](/fr/XPath/Fonctions/starts-with) _(supporté)_
- [string()](/fr/XPath/Fonctions/string) _(supporté)_
- [string-length()](/fr/XPath/Fonctions/string-length) _(supporté)_
- [substring()](/fr/XPath/Fonctions/substring) _(supporté)_
- [substring-after()](/fr/XPath/Fonctions/substring-after) _(supporté)_
- [substring-before()](/fr/XPath/Fonctions/substring-before) _(supporté)_
- [sum()](/fr/XPath/Fonctions/sum) _(supporté)_
- [system-property()](/fr/XPath/Fonctions/system-property) _(supporté)_
- [translate()](/fr/XPath/Fonctions/translate) _(supporté)_
- [true()](/fr/XPath/Fonctions/true) _(supporté)_
- [unparsed-entity-url()](/fr/XPath/Fonctions/unparsed-entity-url) _(non supporté)_

### [Autres ressources](/fr/Transformations_XML_avec_XSLT/Autres_ressources)

- [Livres](/fr/Transformations_XML_avec_XSLT/Autres_ressources#Livres)
- [En ligne](/fr/Transformations_XML_avec_XSLT/Autres_ressources#En_ligne)

  - [Le World Wide Web Consortium](/fr/Transformations_XML_avec_XSLT/Autres_ressources#Le_World_Wide_Web_Consortium)
  - [Portails](/fr/Transformations_XML_avec_XSLT/Autres_ressources#Portails)
  - [Articles](/fr/Transformations_XML_avec_XSLT/Autres_ressources#Articles)
  - [Tutoriels/Exemples](/fr/Transformations_XML_avec_XSLT/Autres_ressources#Tutoriels.2FExemples)
  - [Mailing Lists/Newsgroups](/fr/Transformations_XML_avec_XSLT/Autres_ressources#Mailing_Lists.2FNewsgroups)

- [Extensions](/fr/Transformations_XML_avec_XSLT/Autres_ressources#Extensions)
