---
title: FAQ sur les transformations XSL dans Mozilla
slug: Web/API/XSLTProcessor/XSL_Transformations_in_Mozilla_FAQ
tags:
  - XSLT
translation_of: Web/API/XSLTProcessor/XSL_Transformations_in_Mozilla_FAQ
original_slug: FAQ_sur_les_transformations_XSL_dans_Mozilla
---
#### Pourquoi ma feuille de style ne s'applique pas&nbsp;?

Vérifiez que le type MIME du document source et de la feuille de style est bien un type MIME XML, à savoir `text/xml` ou `application/xml`. L'espace de nommage XSLT est `http://www.w3.org/1999/XSL/Transform`. Utilisez l'instruction de traitement `<?xml-stylesheet ?>` plutôt que l'élément non standard `xml:stylesheet`. Le problème le plus courant est la gestion du type MIME. Pour savoir quel type MIME est envoyé par votre serveur, consultez les Informations sur la page, utilisez une extension telle que [LiveHTTPHeaders (en)](http://livehttpheaders.mozdev.org/) ou un gestionnaire de téléchargements comme wget. Mozilla ne chargera pas les feuilles de style XSLT depuis un domaine différent pour des raisons de sécurité.

#### Cela fonctione dans IE, mais pas dans Mozilla&nbsp;?

Il y a plus que cette "simple" différence. Nous suspectons que la plupart des différences proviennent de ce que fait IE après la transformation. IE (pour autant que l'on puisse dire) sérialise et analyse la sortie avant de générer ce qu'il rend. Mozilla, au contraire, rend exactement le résultat du votre transformation.

#### Puis-je désactiver l'échappement de la sortie avec `disable-output-escaping`&nbsp;?

Cette question est en fait très proche de la précédente. Pour faire court, non. Désactiver l'échappement en sortie nécessite que nous ajoutions une étape d'analyse à la génération de notre sortie, ce que nous ne voulons pas. Dans la plupart des cas, il existe des contournements assez facile à mettre en œuvre. Les seuls cas d'utilisation que nous ayons vu jusqu'à présent sont du mauvais XML, du mauvais XSLT, ou les flux RSS. Ce dernier est pour nous le seul problème, et nous sommes désolé de ne pouvoir le supporter, mais mélanger l'analyse avec le XSLT est à risque et nous préférons ne pas le supporter **d-o-e** plutôt que de provoquer des crashes ou de ralentir le processus.

#### Que dire de `document.write`&nbsp;?

Tout comme pour le XHTML, `document.write` n'est pas supporté pendant les transformations XSLT. Malheureusement, les compilations actuelles ne retournent pas d'erreur, mais donnent simplement des résultats inattendus, comme des crashes ({{ Bug(202765) }}). Dans la plupart des cas il n'y a en fait aucune raison de l'utiliser. Si vous avez besoin d'employer du code ou une feuille de style spécifique à une plate-forme, utilisez ce qui suit&nbsp;:

          <xsl:if test="system-property('xsl:vendor')='Transformiix'">
            <!-- Balisage propre à Mozilla -->
          </xsl:if>
          <xsl:if test="system-property('xsl:vendor')='Microsoft'">
            <!-- Balisage propre à IE -->
          </xsl:if>

Vérifiez system-properties.xml pour les propriétés de votre système favori. MSXML possède une propriété supplémentaire&nbsp;:

          <xsl:if xmlns:msxsl="urn:schemas-microsoft-com:xslt"
                  test="system-property('msxsl:version')=3">
            <!-- MSXML3 specific markup -->
          </xsl:if>

#### Que dire de `media="print"`?

Lors de l'impression d'un document, Mozilla tente de produire une page imprimée aussi proche que possible de l'affichage à l'écran, en incluant par exemple le texte saisi dans des champs de formulaire, et tout autre changement dynamique. Pour cela, on imprime l'arbre DOM actuel. Utiliser une feuille de style XSLT spécifique à un `media` particulier requiererait une nouvelle transformation du document XML source original, ce qui pourrait produire une sortie différant de ce à quoi l'utilisateur s'attend. Aussi, l'utilisation de `media` dans \<?xml-stylesheet&nbsp;?> est fortement déconseillée. Les futures compilations pourraient ne charger une feuille de style XSLT que si `media` n'est pas spécifié, ou si le `media` spécifié comporte `screen`.

Ceci n'affecte pas les feuilles de style CSS chargées depuis le DOM généré, qui emploient `media` comme les pages sans XSLT**.**

#### Comment faire `transformNode`?

Il existe `transformToDocument` et `transformToFragment` depuis Mozilla 1.2, voir [Utilisation de l'interface JavaScript de Mozilla pour les transformations XSL](fr/Utilisation_de_l'interface_JavaScript_de_Mozilla_pour_les_transformations_XSL).

#### Pourquoi Internet Explorer requiert-il un espace de nommage différent de celui de Mozilla&nbsp;?

Jusqu'à sa version 6, IE requiert un espace de nommage déprécié issu d'un brouillon XSLT, merci d'utiliser Mozilla&nbsp;;-), IE6+ ou MSXML3+, qui ne posent pas ce problème. Comme les différences entre XSLT 1.0 et l'implémentation dans IE de ce brouillon sont significatives, nous n'offrons pas de support.

#### Comment compiler une version autonome de TransforMiiX&nbsp;?

Voir l'article sur [Compilation de TransforMiiX](fr/Compilation_de_TransforMiiX).
