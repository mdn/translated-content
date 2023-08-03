---
title: XHTML
slug: Glossary/XHTML
---

[HTML](/fr/docs/Web/HTML) peut voyager sur le réseau vers un navigateur soit en syntaxe HTML soit en syntaxe XML appelée XHTML.

## HTML5 et HTML/XHTML

La norme [HTML5](/fr/docs/Web/Guide/HTML/HTML5) définit ces deux syntaxes. Le type MIME (envoyé dans l'en-tête HTTP `Content-Type`) indique le choix de la syntaxe : pour XHTML, le type MIME sera `application/xhtml+xml`, sinon `text/html`.

Cet exemple montre un document HTML et un document XHTML inclus dans l'en-tête HTTP :

### Document HTML

```html
HTTP/1.1 200 OK Content-Type: text/html

<!doctype html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <title>HTML</title>
  </head>
  <body>
    <p>Je suis un document HTML</p>
  </body>
</html>
```

### Document XHTML

```xml
HTTP/1.1 200 OK
Content-Type: application/xhtml+xml

<html xml:lang="en" xmlns="http://www.w3.org/1999/xhtml">
  <head>
    <title>XHTML</title>
  </head>
  <body>
    <p>Je suis un document XHTML</p>
  </body>
</html>
```

## Type MIME contre DOCTYPE

Avant HTML5, les deux spécifications distinctes définissaient les deux syntaxes ( [HTML 4.01](http://www.w3.org/TR/html4/) et [XHTML 1.0](http://www.w3.org/TR/xhtml1/) ). Selon la norme XHTML1, vous pouvez utiliser XHTML en déclarant un DOCTYPE spécial. Cependant, aucun navigateur n'a jamais implémenté cela, et la norme HTML5 a inversé la décision. **Si votre page est envoyée en tant que `texte/html`, vous n'utilisez pas XHTML**.

Au lieu de cela, le type MIME correct doit être présent dans l'en-tête HTTP `Content-Type`. Si vous ne mettez que le type MIME dans une balise meta HTML comme = `<meta http-equiv...>`, il sera ignoré et traité comme du `texte/html`.

Si vous diffusez vos pages en tant que `texte/html` et que vous croyez que vous écrivez XHTML, vous pouvez rencontrer plusieurs problèmes, comme décrit dans ces articles :

- [No to XHTML](http://www.spartanicus.utvinternet.ie/no-xhtml.htm) un excellent article de Spartanicus
- [Beware of XHTML](http://www.webdevout.net/articles/beware-of-xhtml) par David Hammond
- [Sending XHTML as text/html Considered Harmful](http://www.hixie.ch/advocacy/xhtml) par Ian Hickson
- [XHTML's Dirty Little Secret](http://www.xml.com/pub/a/2003/03/19/dive-into-xml.html) par Mark Pilgrim
- [XHTML - What's the Point?](http://hsivonen.iki.fi/xhtml-the-point/) par Henri Sivonen
- [XHTML is not for Beginners](http://lachy.id.au/log/2005/12/xhtml-beginners) par Lachlan Hunt

## Prise en charge

La plupart des navigateurs prennent actuellement en charge XHTML, y compris Firefox, Chrome, Safari, Opera et Internet Explorer (depuis IE 9). (Les navigateurs Internet Explorer 8 et plus anciens affichent à la place une boîte de dialogue de téléchargement pour les types de fichiers inconnus lorsqu'ils voient un document XHTML avec le type MIME XHTML correct.)

Sachez également que de nombreuses bibliothèques et outils de développement {{Glossary("JavaScript")}} populaires ont un support limité ou inexistant pour XHTML.

## Différences avec HTML

Voir [Utilisation correcte de CSS et JavaScript dans les documents XHTML](/fr/docs/Archive/Web/Properly_Using_CSS_and_JavaScript_in_XHTML_Documents_) pour une liste partielle des différences entre HTML et XHTML.

## Outils

- [Outils de création conformes aux normes](/fr/Outils_d'édition_respectueux_des_standards)

## Voir aussi

- [HTML](/fr/docs/Web/HTML)
- [Namespaces](/fr/docs/Namespaces)
