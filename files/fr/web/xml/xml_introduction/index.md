---
title: Introduction à XML
slug: Web/XML/XML_introduction
---

### Définition

XML, pour _e**X**tensible **M**arkup **L**anguage_ (langage de balisage extensible), est un langage de balisage généraliste [recommandé par le W3C](http://www.w3.org/) comme l'est HTML. XML est un sous-ensemble du langage SGML. Cela signifie que contrairement aux autres langages de balisages, XML n'est pas prédéfini, vous devez définir vos propres balises. Le but principal de ce langage est le partage de données entre différents systèmes, tel qu'Internet.

De nombreux autres langages sont basés sur XML, comme par exemple [XHTML](/fr/XHTML), [MathML](/fr/MathML), [SVG](/fr/SVG), [XUL](/fr/XUL), [XBL](/fr/XBL), [RSS](/fr/RSS) et [RDF](/fr/RDF). Vous pouvez créer votre propre langage basé sur XML.

### Du XML «&nbsp;correct&nbsp;» (valide et «&nbsp;bien formé&nbsp;»)

Pour être correct, un document XML doit être «&nbsp;bien formé&nbsp;», se conformer à toutes les règles de syntaxe du XML, et «&nbsp;valide&nbsp;», se conformer aux règles d'un langage spécifique.

La plupart des navigateurs, dont Mozilla, offrent un outil de validation qui informera souvent lors de la lecture ou de l'affichage de documents mal formés.

#### Exemple

Voici un exemple de document mal formé&nbsp;: un des éléments possédant une balise d'ouverture, `<warning>`, n'a pas de balise de fermeture et ce n'est pas un élément vide (ou auto-fermant comme les balises \<br /> ou \<img /> en XHTML).

```xml
<code>
  <message>
    <warning>
      Hello World
  </message>
</code>
```

L'exemple qui suit est correct et «&nbsp;bien formé&nbsp;»&nbsp;:

```xml
<code>
  <message>
    <warning>
      Hello World
    </warning>
  </message>
</code>
```

Pour être valide, un document doit se conformer à des règles sémantiques qui sont habituellement définies dans un _XML Schema_ ou une [Document Type Definition](/fr/DTD). Un document qui contient une balise non définie n'est pas valide. Dans notre exemple ci-dessus, si nous ne définissons pas la balise `<warning>` alors notre document ne sera pas valide.

### Entités

Comme le [HTML](/fr/HTML), le **XML** fournit des méthodes (appelées entités) pour se référer à certains caractères spéciaux réservés (tel que le signe «&nbsp;plus grand que&nbsp;» utilisé pour les balises). Il faut connaître 5 de ces caractères spéciaux&nbsp;:

<table class="standard-table">
  <tbody>
    <tr>
      <td>Codage</td>
      <td>Entité</td>
      <td>Description</td>
    </tr>
    <tr>
      <td><code>&#x26;lt;</code></td>
      <td><code>&#x3C;</code></td>
      <td>Un signe «&nbsp;plus petit que&nbsp;».</td>
    </tr>
    <tr>
      <td><code>&#x26;gt;</code></td>
      <td><code>></code></td>
      <td>Un signe «&nbsp;plus grand que&nbsp;».</td>
    </tr>
    <tr>
      <td><code>&#x26;amp;</code></td>
      <td><code>&#x26;</code></td>
      <td>Esperluette (signe ET).</td>
    </tr>
    <tr>
      <td><code>&#x26;quot;</code></td>
      <td><code>"</code></td>
      <td>Un guillemet anglais.</td>
    </tr>
    <tr>
      <td><code>&#x26;apos;</code></td>
      <td><code>'</code></td>
      <td>Une apostrophe simple.</td>
    </tr>
  </tbody>
</table>

Même s'il n'y a que 5 entités déclarées, il est possible d'en ajouter d'autres grâce à la [Document Type Definition](/fr/DTD), comme décrit ci-dessous&nbsp;:

```xml
<?xml version="1.0" encoding="UTF-8"?>
<!DOCTYPE body [
    <!ENTITY warning "Avertissement&nbsp;: Quelque chose ne fonctionne pas correctement…
                      Veuillez rafraîchir et réessayer.">
]>
<body>
  <message> &warning; </message>
</body>
```

Vous pouvez également utiliser les références numériques de caractères pour employer ces caractères spéciaux telles que \&#xA9; pour un signe ©. Vous trouverez plus d'informations à propos des références numériques de caractères spéciaux sur [Numeric character reference (en)](http://www.cookwood.com/entities/).

### Affichage de XML

Il y a deux manières différentes d'utiliser le XML pour la présentation, et cela peut aller d'une transformation en HTML à la génération d'un document PDF ou d'images.

Une manière d'appliquer un style sur une page XML est d'utiliser une feuille de style [CSS](/fr/CSS) avec la déclaration `xml-stylesheet`.

```xml
<?xml-stylesheet type="text/css" href="stylesheet.css"?>
```

L'autre technique utilise la puissance de [XSLT](/fr/XSLT), qui est capable de transformer les balises XML en toute autre chose, les possibilités sont alors presque infinies.

```xml
<?xml-stylesheet type="text/xsl" href="transform.xsl"?>
```

### Recommandations

Cet article n'est qu'une introduction rapide à XML&nbsp;; pour plus de détails, parcourez le Web à la recherche d'articles allant plus en profondeur.

L'apprentissage du langage de balisage HTML vous aidera à mieux comprendre XML. Vous trouverez également plus d'informations en explorant le Mozilla Developer Center.

Voici une liste d'articles de référence sur le Web&nbsp;:

- [W3Schools: DTD Tutorial (en)](http://www.w3schools.com/dtd/)
- [W3Schools: XML Tutorial (en)](http://www.w3schools.com/xml/default.asp)
- [XML.com (en)](http://www.xml.com/)
- [Extensible Markup Language (XML) @ W3.org (en)](http://www.w3.org/XML/)
- [XML Example @ A List Apart (en)](http://www.alistapart.com/d/usingxml/xml_uses_a.html)
- [Using XML @ A List Apart (en)](http://www.alistapart.com/articles/usingxml/)

L'article [Using XML (en)](http://www.alistapart.com/articles/usingxml/) est une ressource particulièrement intéressante sur la transformation et la création de votre propre langage XML.

### Informations sur le document

- Auteur(s)&nbsp;: [Justin G. Shreve](http://justinshreve.com)
- Dernière mise à jour&nbsp;: le 4 août 2007
