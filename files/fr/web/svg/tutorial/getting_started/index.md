---
title: Premiers pas
slug: Web/SVG/Tutorial/Getting_Started
---

{{PreviousNext("Web/SVG/Tutorial/Introduction", "Web/SVG/Tutorial/Positions")}}

## Un exemple simple

Commençons directement avec un exemple pratique. Jetez un coup d'œil au morceau de code suivant :

```xml
<svg version="1.1"
     baseProfile="full"
     width="300" height="200"
     xmlns="http://www.w3.org/2000/svg">

  <rect width="100%" height="100%" fill="red" />

  <circle cx="150" cy="100" r="80" fill="green" />

  <text x="150" y="125" font-size="60" text-anchor="middle" fill="white">SVG</text>

</svg>
```

Copiez le code précédent dans un document texte, puis enregistrez-le sous le nom de _demo1.svg_. Ouvrez le fichier dans Firefox. Vous obtiendrez alors l'image suivante (pour les utilisateurs de Firefox : cliquez [ici](https://mdn.dev/archives/media/attachments/2012/07/09/3075/89b1e0a26e8421e19f907e0522b188bd/svgdemo1.xml))

![une image avec un rectangle rouge contenant un disque vert dans lequel est écrit SVG en blanc](svgdemo1.png)

Quelques explications s'imposent quant au fonctionnement du rendu :

1. Nous commençons avec l'élément [`svg`](/fr/docs/Web/SVG/Element/svg) à la racine :

   - La déclaration du doctype que l'on voit en (X)HTML peut être enlevée, car la validation DTD du SVG provoque plus de problèmes qu'elle n'en résout.
   - Avant SVG 2, pour identifier la version du SVG pour d'autre types de validation, les attributs `version` et `baseProfile` devaient toujours être utilisés. Ces deux attributs sont dépréciés en SVG 2.
   - En tant que langage basé sur XML, l'espace de noms du document SVG doit être correct, d'où l'attribut `xmlns`. Pour plus d'informations, n'hésitez pas à consulter la page [Cours d'introduction aux espaces de noms.](/fr/docs/Web/SVG/Namespaces_Crash_Course)

2. L'arrière-plan est défini par un rectangle rouge, déclaré grâce à la balise [`<rect>`](/fr/docs/Web/SVG/Element/rect) qui recouvre l'intégralité de l'espace.
3. Un cercle ([`<circle>`](/fr/docs/Web/SVG/Element/circle)) vert d'un rayon de 80px est dessiné par-dessus le centre du rectangle rouge, avec un décalage de 30+120px vers l'intérieur et de 50+50px vers le haut.
4. Le texte "SVG" est dessiné. L'intérieur de chaque lettre est rempli de blanc. Le texte est positionné grâce à une ancre placée là où nous souhaitons qu'elle soit. Dans le cas présent, le centre du texte doit correspondre au milieu du rectangle rouge. De petits ajustements peuvent être apportés à la taille de la police et au positionnement vertical, de manière à assurer un résultat final esthétiquement agréable.

## Les propriétés basiques des fichiers SVG

- La première chose à retenir est l'ordre de rendu des éléments. La règle qui prévaut pour le SVG est que les éléments déclarés les plus récemment sont ceux qui seront affichés par-dessus les autres. En gros, l'élément défini en bas du document sera celui qui s'affichera au-dessus de tous les autres.
- Les fichiers SVG peuvent être affichés directement dans un navigateur ou même être incorporés directement dans un fichier HTML, en suivant plusieurs méthodes :

  - Si le HTML est du XHTML et est distribué avec le type MIME `application/xhtml+xml`, le SVG peut directement être intégré dans la source XML.
  - SI le HTML est du HTML5 et que le navigateur est conforme HTML5, le SVG peut aussi être intégré directement dans les sources. Toutefois, il peut être nécessaire d'effectuer des modifications de syntaxe pour rendre le document compatible aux spécifications HTML5.
  - Le document SVG peut être défini avec un élément `object` :

    ```html
    <object data="image.svg" type="image/svg+xml" />
    ```

  - De la même manière, un `iframe` peut être utilisé :

    ```html
    <iframe src="image.svg"></iframe>
    ```

  - Une balise `img` peut également être utilisée.
  - Enfin, SVG peut être créé dynamiquement avec du JavaScript et injecté dans le DOM HTML. Ceci permet aux technologies de remplacement pour les navigateurs, qui ne peuvent pas traiter SVG, d'être mises en œuvre. Pour approfondir cette technique, vous pouvez lire [cette page](/fr/docs/Web/SVG/Tutorial/SVG_In_HTML_Introduction).

- La manière dont SVG gère les tailles et les unités sera traitée à [la page suivante](/fr/docs/Web/SVG/Tutorial/Positions).

## Les types de fichiers SVG

Les fichiers SVG peuvent exister sous deux formes. La première consiste en des fichiers textes traditionnels, contenant des balises SVG. Il est recommandé de nommer ces fichiers avec l'extension ".svg" (tout en minuscules).

Toutefois, les fichiers SVG peuvent atteindre une taille assez importante, suivant l'utilisation qu'on en fait. Une application géographique utilisera ainsi des fichiers SVG plus volumineux, par exemple. Pour ces cas particuliers, la spécification SVG permet l'utilisation de fichiers compressés avec gzip. Il est conseillé d'utiliser l'extension .svgz (toujours tout en minuscules) pour ce type de fichiers. Par contre, il est assez problématique d'utiliser des fichiers SVG compressés avec gzip avec certains user agents quand les fichiers sont distribués à travers un serveur Microsoft IIS. De plus, Firefox ne peut pas charger les fichiers compressés en local. Évitez donc d'utiliser les fichiers compressés, sauf si vous êtes sûr que le serveur Web que vous utilisez puisse les distribuer correctement (voir ci-après).

## Un mot sur les serveurs web

Maintenant qu'on sait comment créer des fichiers SVG basiques, la prochaine étape consiste à les envoyer sur un serveur web. À ce stade, il existe quelques précautions à suivre. Pour les fichiers SVG normaux, les serveurs devraient envoyer l'en-tête HTTP :

```
Content-Type: image/svg+xml
Vary: Accept-Encoding
```

Pour les fichiers SVG compressés, les serveurs devraient envoyer l'en-tête HTTP :

```
Content-Type: image/svg+xml
Content-Encoding: gzip
Vary: Accept-Encoding
```

Vous pouvez vérifier que votre serveur envoie le bon en-tête HTTP avec vos fichiers SVG en utilisant [le Moniteur réseau](/fr/docs/Tools/Network_Monitor) ou un site comme [websniffer.cc](https://websniffer.cc/). Fournissez l'URL d'un de vos fichiers SVG et regardez les en-têtes HTTP de la réponse. Si vous remarquez que votre serveur n'envoie pas les en-têtes avec les valeurs ci-dessus, vous devriez contacter votre hébergeur. Si vous avez du mal à le convaincre de configurer correctement leurs serveurs pour le SVG, il y a peut-être moyen de le faire vous-même. Regardez [la page de configuration d'un serveur](https://www.w3.org/services/svg-server/) sur le site w3.org pour quelques solutions simples.

La mauvaise configuration du serveur est souvent la cause de l'échec du chargement du SVG, donc assurez-vous bien d'avoir vérifié le vôtre. Si votre serveur n'est pas configuré pour envoyer les bons en-têtes avec les fichiers SVG qu'il fournit, alors Firefox affichera le contenu du fichier comme du texte ou comme du rebut encodé, ou demandera peut-être à l'utilisateur de choisir une application pour l'ouvrir.

{{PreviousNext("Web/SVG/Tutorial/Introduction", "Web/SVG/Tutorial/Positions")}}
