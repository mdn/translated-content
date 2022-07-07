---
title: XInclude
slug: Glossary/XInclude
tags:
  - Encodage
  - Glossaire
translation_of: Glossary/XInclude
original_slug: Glossaire/XInclude
---
[XML Inclusions (XInclude)](http://www.w3.org/TR/xinclude/#text-included-items) est une recommandation du W3C pour permettre l'inclusion de différentes sources XML d'une manière plus pratique que les entités externes XML. Lorsqu'il est utilisé conjointement avec XPointer (Firefox prend en charge un sous-ensemble et est utilisé dans l'exemple de code ci-dessous), XInclude peut également cibler uniquement des portions spécifiques d'un document à inclure. Firefox ne le supporte pas nativement, mais la fonction suivante a pour but de permettre son utilisation avec les documents qui y sont passés.

### Exemple de code

Le code suivant vise à inclure les balises \<xi: include> et \<xi: fallback> (les deux éléments du langage) avec tous les attributs de \<xi: include> dans un document XML de manière à pouvoir être fusionnés dans un document XML unique.

(Notez que ceci n'a pas été complètement testé pour toutes les circonstances et peut ne pas refléter complètement le comportement standard).

Notez également que si vous souhaitez autoriser xml: base, vous aurez besoin de [xml:base function](/fr/docs/Archive/Add-ons/Code_snippets/XML/base_function) et la ligne de démarrage `var href = ...` doit être :

```js
var href = getXmlBaseLink (/* XLink sans xml:base */ xinclude.getAttribute('href'), /* Élément à interroger à partir de */ xinclude);
```

```js
function resolveXIncludes(docu) {
    // http://www.w3.org/TR/xinclude/#xml-included-items
    var xincludes = docu.getElementsByTagNameNS('http://www.w3.org/2001/XInclude', 'include');
    if (xincludes) {
        for (i=0; i < xincludes.length; i++) {
            var xinclude = xincludes[i];
            var href = xinclude.getAttribute('href');
            var parse = xinclude.getAttribute('parse');
            var xpointer = xinclude.getAttribute('xpointer');
            var encoding = xinclude.getAttribute('encoding'); // par exemple, UTF-8 // "text/xml or application/xml ou text/*+xml ou application/*+xml" avant l'encodage (puis UTF-8)
            var accept = xinclude.getAttribute('accept'); // header "Accept: "+x
            var acceptLanguage = xinclude.getAttribute('accept-language'); // "Accept-Language: "+x
            var xiFallback = xinclude.getElementsByTagNameNS('http://www.w3.org/2001/XInclude', 'fallback')[0]; // Un seul de ces enfants est autorisé
            if (href === '' || href === null) { // Pointe sur le même document si vide (null est équivalent à une chaîne vide)
                href = null; // Défini pour l'uniformité des tests ci-dessous
                if (parse === 'xml' && xpointer === null) {
                    alert('Il doit y avoir un attribut XPointer présent si "href" est vide et l'analyse est "xml"');
                    retourne false (faux);
                }
            }
            else if (href.match(/#$/, '') || href.match(/^#/, '')) {
                alert('Les identifiants de fragment sont interdits dans un XInclude attribut "href"');
                retourne false (faux);
            }
            var j;
            var xincludeParent = xinclude.parentNode;
            try {
                netscape.security.PrivilegeManager.enablePrivilege('UniversalXPConnect UniversalBrowserRead'); // Necessary with file:///-located files trying to reach external sites
                if (href !== null) {
                    var response, responseType;
                    var request = new XMLHttpRequest();
                    request.open('GET', href, false);
                    request.setRequestHeader('If-Modified-Since', 'Thu, 1 Jan 1970 00:00:00 GMT');
                    request.setRequestHeader('Cache-Control', 'no-cache');
                    if (accept) {
                        request.setRequestHeader('Accept', accept);
                    }
                    if (acceptLanguage) {
                        request.setRequestHeader('Accept-Language', acceptLanguage);
                    }
                    switch (parse) {
                        case 'text':
                            // La priorité devrait être sur le type de média :

                            var contentType = request.getResponseHeader('Content-Type');

                            //text/xml; charset="utf-8" // Envoyer pour obtenir les en-têtes en premier?
                            // Réparation : Nous testons également les extensions de fichiers dans le fichier en ce cas:// ne renvoie pas le type de contenu (comme cela semble être le cas); un autre outil peut-il être utilisé dans FF (ou IE) pour détecter l'encodage du fichier local ? Probablement juste besoin d'un test de nomenclature car d'autres codages doivent être spécifiés
                            var patternXML = /\.(svg|xml|xul|rdf|xhtml)$/;
                            if ((contentType && contentType.match(/[text|application]\/(.*)\+?xml/)) || (href.indexOf('file://') === 0 && href.match(patternXML))) {
                                /* Saisissez la réponse sous forme de texte (voir ci-dessous pour cette routine), puis recherchez le codage dans*/
                               var encName = '([A-Za-z][A-Za-z0-9._-]*)';
                               var pattern = new RegExp('^<\\?xml\\s+.*encoding\\s*=\\s*([\'"])'+encName+'\\1.*\\?>'); // Vérifiez le document si non ?
                               // Laisser la demande être traitée ci-dessous
                            }
                            else {
                                if (encoding === '' || encoding === null) { // Encoding n'a pas d'effet en XML
                                    encoding = 'utf-8';
                                }
                                request.overrideMimeType('text/plain; charset='+encoding); //'x-user-defined'
                            }
                            responseType = 'responseText';
                            break;
                        case null:
                        case 'xml':
                            responseType = 'responseXML';
                            break;
                        default:
                            alert('L'élément XInclude contient une valeur d'attribut "parse" non valide');
                            retourne false (faux);
                            break;
                    }
                    request.send(null);
                    if((request.status === 200 || request.status === 0) && request[responseType] !== null) {
                        response = request[responseType];
                         if (responseType === 'responseXML') {
                            // applique xpointer (seul le sous-ensemble xpath1 () est supporté)
                            var responseNodes;
                            if (xpointer) {
                                var xpathResult = response.evaluate(
                                                                 xpointer,
                                                                 response,
                                                                 null,
                                                                 XPathResult.ORDERED_NODE_SNAPSHOT_TYPE,
                                                                 null
                                                              );
                                var a = [];
                                for(var k = 0; k < xpathResult.snapshotLength; k++) {
                                a[k] = xpathResult.snapshotItem(k);
                                }
                                responseNodes = a;
                            }
                            else { // sinon, la réponse doit être un seul document bien formé
                                responseNodes = [response.documentElement]; // Mettre en tableau peut donc être traité de la même manière que ci-dessus
                            }
                            // PRÉPENDRE TOUT(S) NŒUD(S) (EN XML) PUIS SUPPRIMER XINCLUDE
                            for (j=0; j < responseNodes.length ; j++) {
                                xincludeParent.insertBefore(responseNodes[j], xinclude);
                            }
                            xincludeParent.removeChild(xinclude);
                         }
                         else if (responseType === 'responseText') {
                             if (encName) {
                                  var encodingType = response.match(pattern);
                                  if (encodingType) {
                                      encodingType = encodingType[2];
                                  }
                                  else {
                                      encodingType = 'utf-8';
                                  }
                                  // Besoin de faire une toute nouvelle demande, apparemment ici il ne peut pas convertir l'encodage après l'avoir reçu (pour savoir ce que l'encodage était)
                                  var request2 = new XMLHttpRequest();
                                  request2.overrideMimeType('text/plain; charset='+encodingType);
                                  request2.open('GET', href, false);
                                  request2.setRequestHeader('If-Modified-Since', 'Thu, 1 Jan 1970 00:00:00 GMT');
                                  request2.setRequestHeader('Cache-Control', 'no-cache');
                                  request2.send(null);
                                  response = request2[responseType]; // Mettre à jour la réponse pour le traitement}

                             // REMPLACER XINCLUDE AVEC LA RÉPONSE TEXTE
                             var textNode = docu.createTextNode(response);                             xincludeParent.replaceChild(textNode, xinclude);
                         }

                        // remplacer xinclude dans doc avec la réponse maintenant (en texte brut ou en XML)}
                }
            }
            catch (e) { // Utiliser xi:fallback si la récupération d'XInclude a échoué ci-dessus
                var xiFallbackChildren = xiFallback.childNodes;
                // PRÉPENDRE TOUT NŒUD (S) PUIS SUPPRIMER XINCLUDE
                for (j=0; j < xiFallbackChildren.length ; j++) {
                    xincludeParent.insertBefore(xiFallbackChildren[j], xinclude);
                }
                xincludeParent.removeChild(xinclude);
            }
        }
    }
    return docu;
}
```
