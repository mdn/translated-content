---
title: Cours accéléré sur les espaces de noms
slug: Web/SVG/Guides/Namespaces_crash_course
l10n:
  sourceCommit: 0c81cbce5f95a0be935724bcd936f5592774eb3a
---

En tant que dialecte de [XML](/fr/docs/Glossary/XML), [SVG](/fr/docs/Web/SVG) utilise des espaces de noms. Il est important de comprendre le concept d'espaces de noms et leur utilisation si vous souhaitez créer du contenu SVG. Les espaces de noms sont essentiels pour les agents utilisateur qui prennent en charge plusieurs dialectes XML&nbsp;; les navigateurs doivent être très stricts. Prendre le temps de comprendre les espaces de noms maintenant vous évitera bien des soucis à l'avenir.

## Contexte

Un objectif de longue date des différentes spécifications du W3C est de permettre à différents types de contenus basés sur XML d'être mélangés dans un même fichier XML ou HTML. Par exemple, SVG et [MathML](/fr/docs/Web/MathML) peuvent être incorporés directement dans un document scientifique basé sur HTML. Pouvoir mélanger ainsi les types de contenus présente de nombreux avantages, mais cela a aussi nécessité de résoudre un problème bien réel.

Naturellement, chaque dialecte XML définit la signification des noms d'éléments de balisage décrits dans sa spécification. Le problème du mélange de contenus issus de différents dialectes XML dans un même document est que les éléments définis par un dialecte peuvent porter le même nom que ceux d'un autre. Par exemple, HTML et SVG possèdent tous deux un élément `<title>`. Comment l'agent utilisateur fait-il la distinction entre les deux&nbsp;? Comment les styles CSS font-ils la distinction&nbsp;? En fait, comment l'agent utilisateur sait-il quand le contenu est quelque chose qu'il connaît, et non simplement un élément personnalisé HTML non défini ou un fichier XML contenant des noms d'éléments arbitraires qui lui sont inconnus&nbsp;?

Contrairement à une idée répandue, la réponse à cette question n'est pas «&nbsp;il peut le savoir grâce à la déclaration `DOCTYPE`&nbsp;». Les DTD n'ont jamais été conçus pour le contenu mixte, et les tentatives passées de création de DTD pour contenu mixte sont désormais considérées comme des échecs. XML, et certains dialectes XML (y compris SVG et HTML), ne nécessitent pas de déclaration `DOCTYPE`. SVG 1.2 n'en possède même pas. Le fait que les déclarations `DOCTYPE` correspondent (généralement) au contenu dans les fichiers à type de contenu unique est purement fortuit. Les DTD servent uniquement à la validation, pas à l'identification du contenu. Tout agent utilisateur qui identifie le contenu XML à l'aide de sa déclaration `DOCTYPE` n'est pas fiable.

La véritable réponse à cette question est que le contenu XML indique à l'agent utilisateur à quel dialecte appartiennent les noms d'éléments en leur fournissant des «&nbsp;déclarations d'espaces de noms&nbsp;» explicites.

## Déclaration des espaces de noms

À quoi ressemblent donc ces déclarations d'espaces de noms, et où doivent-elles être placées&nbsp;? Voici un court exemple.

```svg
<svg xmlns="http://www.w3.org/2000/svg">
  <!-- d'autres balises ici -->
</svg>
```

La déclaration d'espace de noms est fournie par le paramètre `xmlns`. Ce paramètre indique que l'élément `<svg>` et ses éléments enfants appartiennent au dialecte XML dont le nom d'espace de noms est `http://www.w3.org/2000/svg`, c'est-à-dire SVG. Notez que la déclaration d'espace de noms n'est fournie qu'une seule fois sur un élément racine (et elle est implicite si elle est omise). La déclaration définit l'espace de noms _par défaut_, de sorte que l'agent utilisateur sait que tous les descendants de l'élément `<svg>` appartiennent également au même espace de noms. Les agents utilisateur vérifient s'ils reconnaissent le nom d'espace de noms pour déterminer s'ils savent comment traiter le balisage.

Notez que les noms d'espaces de noms sont simplement des chaînes de caractères, donc le fait que le nom d'espace de noms SVG ressemble aussi à un URI n'a pas d'importance. Les URI sont couramment utilisés car ils sont uniques, mais l'objectif n'est pas de «&nbsp;lien&nbsp;» vers un endroit. (En fait, les URI sont utilisés si fréquemment que le terme «&nbsp;URI d'espace de noms&nbsp;» est couramment employé à la place de «&nbsp;nom d'espace de noms&nbsp;».)

### Redéclaration de l'espace de noms par défaut

Si tous les descendants de l'élément racine sont également définis dans l'espace de noms par défaut, comment mélanger du contenu provenant d'un autre espace de noms&nbsp;? Pour inclure l'espace de noms SVG dans HTML, vous insérez `<svg>`. En XML, vous déclarez un espace de noms. Voici un court exemple.

```xml
<report xmlns="https://www.acme.org/reports">
  <title>Quelques statistiques</title>
  <summary>...</summary>
  <statTable xmlns="https://www.acme.org/tables">
    <content>...</content>
    <!-- redéclaration de l'espace de noms par défaut de la racine -->
    <summary xmlns="https://www.acme.org/reports">...</summary>
  </statTable>
</report>
```

Dans cet exemple, le paramètre `xmlns` sur l'élément racine `<report>` déclare que l'espace de noms par défaut est `https://www.acme.org/reports`, ou `reports`. Par conséquent, lui-même et tous ses éléments enfants sont interprétés par l'agent utilisateur comme appartenant à `reports`, à l'exception de l'élément `<content>`, qui appartient à l'espace de noms `https://www.acme.org/tables`, ou `tables`. L'élément `<summary>` possède son propre paramètre `xmlns`, et en redéclarant l'espace de noms `reports`, cela indique à l'agent utilisateur que l'élément `<summary>` et ses descendants (sauf s'ils redéclarent aussi un autre espace de noms) appartiennent à `reports`.

Avec HTML, l'espace de noms implicite est `http://www.w3.org/1999/xhtml`. Avec SVG, c'est `http://www.w3.org/2000/svg`. Pour MathML, il s'agit de `http://www.w3.org/1998/Math/MathML`.

### Déclaration des préfixes d'espaces de noms

Les dialectes XML ne définissent pas seulement leurs propres éléments, ils déclarent aussi leurs propres paramètres.

Par défaut, les paramètres n'ont pas d'espace de noms. Ils ne sont considérés comme uniques que parce qu'ils apparaissent sur un élément qui a lui-même un nom unique. Cependant, il est parfois nécessaire de définir des paramètres afin qu'ils puissent être réutilisés sur de nombreux éléments différents et être considérés comme le même paramètre, indépendamment de l'élément avec lequel ils sont utilisés. Un très bon exemple est le paramètre `href` défini par la spécification {{Glossary("XLink")}}. Ce paramètre est couramment utilisé par d'autres dialectes XML comme moyen de lier à des ressources externes. Mais comment indiquer à l'agent utilisateur à quel dialecte appartient le paramètre, dans ce cas `XLink`&nbsp;? Considérez l'exemple suivant.

```xml
<svg
  xmlns="http://www.w3.org/2000/svg"
  xmlns:xlink="http://www.w3.org/1999/xlink">
  <script xlink:href="cool-script.js" type="text/javascript" />
</svg>
```

Cet exemple présente le paramètre `xmlns:xlink`, qui peut sembler inhabituel. Comme vous pouvez le deviner à partir du premier `xmlns`, il s'agit d'une autre déclaration d'espace de noms. Cependant, au lieu de définir l'espace de noms par défaut, cette déclaration définit l'espace de noms pour ce qu'on appelle un «&nbsp;[préfixe d'espace de noms](/fr/docs/Web/API/CSSNamespaceRule/prefix)&nbsp;». Dans ce cas, nous avons choisi d'utiliser le préfixe `xlink` (la seconde partie) puisque ce préfixe servira à indiquer à l'agent utilisateur les attributs qui appartiennent à `XLink`.

Comme leur nom l'indique, les préfixes d'espaces de noms servent à préfixer les noms de paramètres et d'éléments. Cela se fait en plaçant le préfixe d'espace de noms et un deux-points avant le nom du paramètre, comme illustré sur l'élément `<script>` dans l'exemple ci-dessus. Cela indique à l'agent utilisateur que le paramètre en question appartient à l'espace de noms assigné au préfixe (`XLink`), et qu'il s'agit d'un paramètre pouvant être utilisé avec la même signification sur d'autres éléments.

Notez que, dans XML, il s'agit d'une erreur XML d'utiliser un préfixe qui n'a pas été lié à un nom d'espace de noms. L'association créée par le paramètre `xmlns:xlink` dans l'exemple ci-dessus est requise pour que le paramètre `xlink:href` ne provoque pas d'erreur. Ce paramètre XLink est également fréquemment utilisé dans SVG sur les éléments `<a>`, `<use>` et `<image>` entre autres, il est donc recommandé d'inclure systématiquement la déclaration XLink dans vos documents.

Par ailleurs, il est utile de savoir que les préfixes d'espaces de noms peuvent aussi être utilisés pour les noms d'éléments. Cela indique à l'agent utilisateur que l'élément en question (mais pas ses enfants cette fois&nbsp;!) appartient à l'espace de noms assigné au préfixe. Savoir cela vous évitera des confusions si vous rencontrez un balisage comme dans l'exemple suivant&nbsp;:

```xml
<html
  lang="en"
  xmlns="http://www.w3.org/1999/xhtml"
  xmlns:svg="http://www.w3.org/2000/svg">
  <body>
    <h1>SVG intégré en ligne dans XHTML</h1>
    <svg:svg width="300px" height="200px">
      <svg:circle cx="150" cy="100" r="50" fill="red" />
    </svg:svg>
  </body>
</html>
```

> [!NOTE]
> Il s'agit d'un fichier {{Glossary("XHTML")}}, et non d'un fichier HTML. Les espaces de noms XML ne sont pas valides en HTML. Pour essayer cet exemple, vous devez enregistrer votre fichier avec l'extension `.xhtml`.

Notez que, parce qu'un préfixe d'espace de noms est utilisé pour l'élément `<svg:svg>` et son enfant `<svg:circle>`, il n'a pas été nécessaire de redéclarer l'espace de noms par défaut. En général, il est préférable de redéclarer l'espace de noms par défaut plutôt que de préfixer de nombreux éléments de cette manière.

## Scripting in namespaced XML

Namespaces affect markup and scripting ([and even CSS](/fr/docs/Web/CSS/Guides/Namespaces)). If you write scripts for namespaced XML such as SVG, read on.

The [DOM Level 1](https://www.w3.org/TR/DOM-Level-1/) recommendation was created before the [original Namespaces in XML](https://www.w3.org/TR/xml-names/) recommendation was released; therefore, DOM1 isn't namespace-aware. This causes problems for namespaced XML such as SVG. To resolve these problems, [DOM Level 2 Core](https://www.w3.org/TR/DOM-Level-2-Core/) added namespace-aware equivalents of all the applicable DOM Level 1 methods. When scripting SVG, it is important to use the [namespace-aware methods](https://www.w3.org/TR/DOM-Level-2-Core/core.html#Namespaces-Considerations). The table below lists the DOM1 methods that shouldn't be used in SVG, along with their equivalent DOM2 counterparts that should be used instead.

<table class="fullwidth-table">
  <tbody>
    <tr>
      <th>DOM1 (à ne pas utiliser)</th>
      <th>DOM2 (à utiliser à la place&nbsp;!)</th>
    </tr>
    <tr>
      <td>
        <a
          href="/fr/docs/Web/API/Document/createAttribute"
          ><code>createAttribute()</code></a
        >
      </td>
      <td>
        <a
          href="/fr/docs/Web/API/Document/createAttributeNS"><code>createAttributeNS()</code></a
        >
      </td>
    </tr>
    <tr>
      <td>
        <a
          href="/fr/docs/Web/API/Document/createElement"
          ><code>createElement()</code></a
        >
      </td>
      <td>
        <a href="/fr/docs/Web/API/Document/createElementNS"><code>createElementNS()</code></a
        >
      </td>
    </tr>
    <tr>
      <td>
        <a
          href="/fr/docs/Web/API/Element/getAttributeNode"
          ><code>getAttributeNode()</code></a
        >
      </td>
      <td>
        <a
          href="/fr/docs/Web/API/Element/getAttributeNodeNS"><code>getAttributeNodeNS()</code></a
        >
      </td>
    </tr>
    <tr>
      <td>
        <a
          href="/fr/docs/Web/API/Element/getAttribute"
          ><code>getAttribute()</code></a
        >
      </td>
      <td>
        <a
          href="/fr/docs/Web/API/Element/getAttributeNS"><code>getAttributeNS()</code></a
        >
      </td>
    </tr>
    <tr>
      <td>
        <a
          href="/fr/docs/Web/API/Document/getElementsByTagName"
          ><code>getElementsByTagName()</code></a
        >
      </td>
      <td>
        <a href="/fr/docs/Web/API/Document/getElementsByTagNameNS"><code>getElementsByTagNameNS()</code></a
        >
        (également <a href="/fr/docs/Web/API/Element/getElementsByTagNameNS">ajouté à Element</a>)
      </td>
    </tr>
    <tr>
      <td>
        <a
          href="/fr/docs/Web/API/NamedNodeMap/getNamedItem"
          ><code>getNamedItem()</code></a
        >
      </td>
      <td>
        <a
          href="/fr/docs/Web/API/NamedNodeMap/getNamedItemNS"><code>getNamedItemNS()</code></a
        >
      </td>
    </tr>
    <tr>
      <td>
        <a href="/fr/docs/Web/API/Element/hasAttribute"><code>hasAttribute()</code></a
        >
      </td>
      <td>
        <a
          href="/fr/docs/Web/API/Element/hasAttributeNS"><code>hasAttributeNS()</code></a
        >
      </td>
    </tr>
    <tr>
      <td>
        <a
          href="/fr/docs/Web/API/Element/removeAttribute"
          ><code>removeAttribute()</code></a
        >
      </td>
      <td>
        <a href="/fr/docs/Web/API/Element/removeAttributeNS"><code>removeAttributeNS()</code></a
        >
      </td>
    </tr>
    <tr>
      <td>
        <a
          href="/fr/docs/Web/API/NamedNodeMap/removeNamedItem"
          ><code>removeNamedItem()</code></a
        >
      </td>
      <td>
        <a
          href="/fr/docs/Web/API/NamedNodeMap/removeNamedItemNS"><code>removeNamedItemNS()</code></a
        >
      </td>
    </tr>
    <tr>
      <td>
        <a
          href="/fr/docs/Web/API/Element/setAttribute"
          ><code>setAttribute()</code></a
        >
      </td>
      <td>
        <a
          href="/fr/docs/Web/API/Element/setAttributeNS"><code>setAttributeNS()</code></a
        >
      </td>
    </tr>
    <tr>
      <td>
        <a
          href="/fr/docs/Web/API/Element/setAttributeNode"
          ><code>setAttributeNode()</code></a
        >
      </td>
      <td>
        <a
          href="/fr/docs/Web/API/Element/setAttributeNodeNS"><code>setAttributeNodeNS()</code></a
        >
      </td>
    </tr>
    <tr>
      <td>
        <a
          href="/fr/docs/Web/API/NamedNodeMap/setNamedItem"
          ><code>setNamedItem()</code></a
        >
      </td>
      <td>
        <a
          href="/fr/docs/Web/API/NamedNodeMap/setNamedItemNS"><code>setNamedItemNS()</code></a
        >
      </td>
    </tr>
  </tbody>
</table>

Le premier paramètre de toutes les méthodes DOM2 prenant en charge les espaces de noms doit être le nom de l'espace de noms (aussi appelé URI d'espace de noms) de l'élément ou du paramètre concerné. Pour les **éléments** SVG, il s'agit de `http://www.w3.org/2000/svg`. Cependant, attention&nbsp;: la recommandation [Espaces de noms dans XML 1.1 <sup>(angl.)</sup>](https://www.w3.org/TR/xml-names11/#defaulting) indique que le nom d'espace de noms pour les paramètres sans préfixe n'a pas de valeur. En d'autres termes, bien que les paramètres appartiennent à l'espace de noms de l'élément, vous n'utilisez pas le nom d'espace de noms de la balise. À la place, **vous devez utiliser null comme nom d'espace de noms pour les paramètres non qualifiés (sans préfixe)**. Ainsi, pour créer un _élément_ SVG `rect` avec `document.createElementNS()`, vous devez écrire&nbsp;:

```js
document.createElementNS("http://www.w3.org/2000/svg", "rect");
```

Mais pour récupérer la valeur du _paramètre_ `x` sur un élément SVG `rect`, vous devez écrire&nbsp;:

```js
rect.getAttributeNS(null, "x");
```

Notez que ce n'est pas le cas pour les paramètres _avec_ un préfixe d'espace de noms (paramètres qui n'appartiennent pas au même dialecte XML que l'élément). Les paramètres comme `xlink:href` nécessitent le nom d'espace de noms qui a été assigné à ce préfixe (`http://www.w3.org/1999/xlink` pour XLink). Ainsi, pour obtenir la valeur du paramètre `xlink:href` d'un élément `<a>` en SVG, vous écririez&nbsp;:

```js
elt.getAttributeNS("http://www.w3.org/1999/xlink", "href");
```

Pour définir des paramètres qui ont un espace de noms, il est recommandé (mais pas obligatoire) d'inclure aussi leur préfixe dans le second paramètre afin que le DOM puisse être plus facilement reconverti en XML par la suite (par exemple, si vous souhaitez le renvoyer au serveur). Exemple&nbsp;:

```js
elt.setAttributeNS(
  "http://www.w3.org/1999/xlink",
  "xlink:href",
  "other-doc.svg",
);
```

Pour finir, voici un exemple montrant comment créer dynamiquement un élément `<image>` en JavaScript&nbsp;:

```js
const SVG_NS = "http://www.w3.org/2000/svg";
const XLINK_NS = "http://www.w3.org/1999/xlink";
const image = document.createElementNS(SVG_NS, "image");
image.setAttributeNS(null, "width", "100");
image.setAttributeNS(null, "height", "100");
image.setAttributeNS(XLINK_NS, "xlink:href", "flower.png");
```

## Conclusion

Pour SVG, HTML et MathML, l'espace de noms est implicite et donc optionnel. Il est obligatoire de déclarer l'espace de noms pour les fichiers XML. Si vous ne le faites pas, les agents utilisateur ne reconnaîtront pas le contenu et afficheront le balisage XML ou indiqueront qu'il y a une erreur dans le XML.

Lorsque vous écrivez du SVG, il est utile d'utiliser un modèle qui inclut toutes les déclarations d'espaces de noms courantes lors de la création de nouveaux fichiers. Si vous n'en avez pas déjà un, créez-en un en partant du code suivant&nbsp;:

```xml
<svg
  xmlns="http://www.w3.org/2000/svg"
  xmlns:xlink="http://www.w3.org/1999/xlink"></svg>
```

Même si vous n'utilisez pas tous ces espaces de noms dans un document particulier, il n'y a aucun inconvénient à inclure les déclarations d'espaces de noms. Cela peut vous éviter des erreurs gênantes si vous ajoutez plus tard du contenu provenant d'un des espaces de noms non utilisés.

## Exemple complet

Pour un exemple complet, voir [SVG&nbsp;: Cours accéléré sur les espaces de noms&nbsp;: Exemple](/fr/docs/Web/SVG/Guides/Namespaces_crash_course/Example).
