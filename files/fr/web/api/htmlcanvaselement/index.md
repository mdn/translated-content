---
title: HTMLCanvasElement
slug: Web/API/HTMLCanvasElement
tags:
  - Canvas
translation_of: Web/API/HTMLCanvasElement
---
{{ApiRef}}

L'interface **`HTMLCanvasElement`** fournit un ensemble de propriétés et de méthodes pour manipuler la disposition et la représentation des éléments canvas. L'interface `HTMLCanvasElement` hérite également des propriétés et des méthodes de l'interface {{domxref("HTMLElement")}}.

## Propriétés

_Propriétés hérités de son parent,_ _{{domxref("HTMLElement")}}._

| Nom      | Type            | Description                                                                                                                                     |
| -------- | --------------- | ----------------------------------------------------------------------------------------------------------------------------------------------- |
| `height` | `unsigned long` | Représente l'attribut HTML {{htmlattrxref("height", "canvas")}}, qui spécifie la hauteur de l'espace des coordonnées en pixels CSS. |
| `width`  | `unsigned long` | Représente l'attribut HTML {{htmlattrxref("width", "canvas")}}, qui spécifie la largeur de l'espace des coordonnées en pixels CSS. |

## Méthodes

_Méthodes héritées de son parent,_ _{{domxref("HTMLElement")}}._

<table class="standard-table">
  <thead>
    <tr>
      <th scope="col">Nom &#x26; arguments</th>
      <th scope="col">Résultat</th>
      <th scope="col">Description</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>
        <code>getContext(in {{domxref("DOMString")}} contextId)</code>
      </td>
      <td>{{domxref("RenderingContext")}}</td>
      <td>
        Renvoie un contexte de dessin sur le canvas, ou null si l'ID de contexte
        n'est pas supporté. Un contexte de dessin vous permet de dessiner sur le
        canvas. Appeler getContext avec <code>"2d"</code> renvoie un object
        {{domxref("CanvasRenderingContext2D")}}, alors que
        l'appeler avec <code>"experimental-webgl"</code> (ou
        <code>"webgl"</code>) renvoie un objet
        {{domxref("WebGLRenderingContext")}} . Ce dernier contexte
        n'est disponible que dans les navigateur qui implémentent
        <a href="/en-US/docs/Web/WebGL">WebGL</a>.
      </td>
    </tr>
    <tr>
      <td><code>supportsContext()</code> {{experimental_inline}}</td>
      <td>{{domxref("Boolean")}}</td>
      <td>
        Renvoie une valeur {{domxref("Boolean")}} indiquant si le contexte
        donné est supporté par ce canvas.
      </td>
    </tr>
    <tr>
      <td>
        <em><code>setContext()</code></em> {{experimental_inline}}
      </td>
      <td><code>void</code></td>
      <td>Chnage de contexte de l'élément en rapport avec celui fourni.</td>
    </tr>
    <tr>
      <td>
        <code>transferControlToProxy()</code> {{experimental_inline}}
      </td>
      <td>{{domxref("CanvasProxy")}}</td>
      <td>
        Retourne un mandataire pour autoriser le canvas à être utilisé dans un
        autre {{domxref("Worker")}}.
      </td>
    </tr>
    <tr>
      <td>
        <code>toDataURL</code>(in optional {{domxref("DOMString")}}
        type, in any ...args)
      </td>
      <td>{{domxref("DOMString")}}</td>
      <td>
        Renvoie une <code>data:</code> URL contenant une représentation de
        l'image au format spécifié par l'argument <code>type</code> (PNG par
        défaut). L'image renvoyée est en 96dpi.
        <ul>
          <li>
            Si la hauteur ou la largeur du canvas est <code>0</code>,
            <code>"data:,</code>" représentant une chaîne vide, est renvoyée.
          </li>
          <li>
            Si le format demandé n'est pas <code>image/png</code>, mais que la
            valeur renvoyée commence par <code>data:image/png</code>, alors le
            format demandé n'est pas supporté.
          </li>
          <li>Chrome supporte le format <code>image/webp</code>.</li>
          <li>
            Si le format demandé est <code>image/jpeg </code>ou
            <code>image/webp</code>, alors le second argument, s'il est compris
            entre <code>0.0</code> et <code>1.0</code>, est considéré comme une
            indication de la qualité d'image ; si le second argument est
            n'importe quoi d'autre, la valeur par défaut pour la qualité est
            utilisé. Les autres arguments sont ignorés.
          </li>
        </ul>
      </td>
    </tr>
    <tr>
      <td><code>toDataURLHD()</code>{{experimental_inline}}</td>
      <td>{{domxref("DOMString")}}</td>
      <td>
        Renvoie une <code>data:</code> URL contenant une représentation de
        l'image au format spécifié par <code>type</code> (PNG par défaut).
        L'image renvoyée est à la résolution native du canvas.
        <ul>
          <li>
            Si la hauteur ou la largeur du canvas est <code>0</code>,
            <code>"data:,</code>" représentant une chaîne vide, est renvoyée.
          </li>
          <li>
            Si le format demandé n'est pas <code>image/png</code>, mais que la
            valeur renvoyée commence par <code>data:image/png</code>, alors le
            format demandé n'est pas supporté.
          </li>
          <li>Chrome supporte le format <code>image/webp</code>.</li>
          <li>
            Si le format demandé est <code>image/jpeg </code>ou
            <code>image/webp</code>, alors le second argument, s'il est compris
            entre <code>0.0</code> et <code>1.0</code>, est considéré comme une
            indication de la qualité d'image ; si le second argument est
            n'importe quoi d'autre, la valeur par défaut pour la qualité est
            utilisé. Les autres arguments sont ignorés.
          </li>
        </ul>
      </td>
    </tr>
    <tr>
      <td>
        <code>toBlob</code>(in FileCallback callback, in optional
        {{domxref("DOMString")}} type, in any ...args)
      </td>
      <td><code>void</code></td>
      <td>
        Renvoie un objet {{domxref("Blob")}} représentant l'image contenue
        dans le canvas ; ce fichier peut être mis en cache sur le disque ou
        stocké en mémoire au choix du navigateur. Si <code>type</code> n'est pas
        précisé, le format de l'image est <code>image/png</code>. L'image
        renvoyée est en 96dpi.
      </td>
    </tr>
    <tr>
      <td>
        <code>toBlobHD</code>(in FileCallback callback, in optional
        {{domxref("DOMString")}} type, in any ...args)
        {{experimental_inline}}
      </td>
      <td><code>void</code></td>
      <td>
        Renvoie un objet {{domxref("Blob")}} représentant l'image contenue
        dans le canvas ; ce fichier peut être mis en cache sur le disque ou
        stocké en mémoire au choix du navigateur. Si <code>type</code> n'est pas
        précisé, le format de l'image est <code>image/png</code>. L'image
        renvoyée est à la résolution native du canvas.
      </td>
    </tr>
    <tr>
      <td>
        <code>mozGetAsFile</code>(in {{domxref("DOMString")}} name, in
        optional {{domxref("DOMString")}} type)
        {{non-standard_inline}}
      </td>
      <td>{{domxref("File")}}</td>
      <td>
        Renvoie un objet {{domxref("File")}} représentant l'image contenue
        dans le canvas ; ce fichier est en mémoire avec le
        <code>nom</code> précisé. Si <code>type</code> n'est pas précisé, le
        fotmat de l'image est <code>image/png</code>.
      </td>
    </tr>
    <tr>
      <td>
        <code
          >void mozFetchAsStream(in
          {{interface("nsIInputStreamCallback")}} callback,
          [optional] in DOMString type)</code
        >
        {{non-standard_inline}}
      </td>
      <td><code>void</code></td>
      <td>
        Crée un nouveau flux d'entrée qui, quand il est prêt, fournit le contenu
        du canvas en tant que données d'image. Quand le nouveau flux est prêt,
        la fonction de rappel spécifiée
        {{ifmethod("nsIInputStreamCallback", "onInputStreamReady")}}
        est appelée. Si <code>type</code> n'est pas précisée, Le format de
        l'image est <code>image/png.</code>
        <div class="note">
          <p>
            <strong>Note :</strong> Cette méthode ne peut être utilisée que
            depuis le code chrome.
          </p>
        </div>
      </td>
    </tr>
  </tbody>
</table>

## Examples

### Example: Obtenir la data-url du canvas

D'abord, dessinez dans le canvas, ensuite appelez `canvas.toDataURL()` pour obtenir la data: URL du canvas.

```js
function test() {
 var canvas = document.getElementById("canvas");
 var url = canvas.toDataURL();

 var nouvelleImg = document.createElement("img");
 nouvelleImg.src = url;
 document.body.appendChild(nouvelleImg);
}
```

### Example: Obtenir un fichier représentant le canvas

Une fois que vous avez dessiné du contenu dans un canvas, vous pouvez le convertir dans un fichier avec l'un des formats supportés. Par exemple, l'extrait de code ci-dessous récupère l'image contenue dans l'élément canvas avec l'ID "canvas", en effectue une copie au format PNG, puis ajoute un nouvel élément {{HTMLElement("img")}} au document, dont l'image source est celle créée en utilisant le canvas.

```js
function test() {
  var canvas = document.getElementById("canvas");
  canvas.toBlob(function(blob) {
    var nouvelleImg = document.createElement("img"),
        url = URL.createObjectURL(blob);
    nouvelleImg.onload = function() {
      // Il n'est plus nécessaire de lire le blob, il est donc révoqué
      URL.revokeObjectURL(url);
    };
    nouvelleImg.src = url;
    document.body.appendChild(nouvelleImg);
  });
}
```

Vous pouvez utiliser cette technique en association avec les événemments de souris pour effectuer un changement d'images dynamique (niveau de gris et couleur dans cet exemple) :

```html
<!DOCTYPE html>
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
<title>MDC Example</title>
<script type="text/javascript">
function afficherImageCouleur() {
  this.style.display = "none";
  this.nextSibling.style.display = "inline";
}

function afficherImageGrise() {
  this.previousSibling.style.display = "inline";
  this.style.display = "none";
}

function supprimerCouleurs() {
  var aImages = document.getElementsByClassName("grayscale"),
      nImgsLong = aImages.length,
      oCanvas = document.createElement("canvas"),
      oCtx = oCanvas.getContext("2d");
  for (var nLargeur, nHauteur, oImgData, oImgGrise, nPixel, aPix, nPixLong, nImgId = 0; nImgId < nImgsLong; nImgId++) {
    oImgCouleur = aImages[nImgId];
    nLargeur = oImgCouleur .offsetWidth;
    nHauteur = oImgCouleur .offsetHeight;
    oCanvas.width = nWidth;
    oCanvas.height = nHeight;
    oCtx.drawImage(oImgCouleur , 0, 0);
    oImgData = oCtx.getImageData(0, 0, nLargeur, nHauteur);
    aPix = oImgData.data;
    nPixLong = aPix.length;
    for (nPixel = 0; nPixel < nPixLen; nPixel += 4) {
      aPix[nPixel + 2] = aPix[nPixel + 1] = aPix[nPixel] = (aPix[nPixel] + aPix[nPixel + 1] + aPix[nPixel + 2]) / 3;
    }
    oCtx.putImageData(oImgData, 0, 0);
    oImgGrise = new Image();
    oImg.src = oCanvas.toDataURL();
    oImgGrise.onmouseover = afficherImageCouleur;
    oImgCouleur.onmouseout = afficherImageGrise;
    oCtx.clearRect(0, 0, nLargeur, nHauteur);
    oImgCouleur.style.display = "none";
    oImgCouleur.parentNode.insertBefore(oImgGrise , oImgCouleur);
  }
}
</script>
</head>

<body onload="supprimerCouleurs();">
<p><img class="grayscale" src="chagall.jpg" alt="" /></p>
</body>
</html>
```

Remarquez qu'ici nous créons une image PNG ; si vous ajoutez un second paramètre à l'appel de `toBlob()`, vous pouvez spécifier le type d'image. Par exemple, pour obtenir l'image au format JPEG :

```js
 canvas.toBlob(function(blob){...}, "image/jpeg", 0.95); // JPEG avec une qualité de 95%
```

## Spécifications

| Spécification                                                                                                                | Statut                           | Commentaire                                                                                                                                                                                                                                   |
| ---------------------------------------------------------------------------------------------------------------------------- | -------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| {{SpecName('HTML WHATWG', "embedded-content-0.html#the-canvas-element", "HTMLCanvasElement")}} | {{Spec2('HTML WHATWG')}} | La méthode `getContext()` retourne un {{domxref("RenderingContext")}} au lieu d'un `object` opaque. Les méthodes `supportsContext()`, `setContext()`, `transferControlToProxy()`, `toDataURLHD()`, `toBlobURLHD()` ont été ajoutées. |
| {{SpecName('HTML5 W3C', "the-canvas-element.html#the-canvas-element", "HTMLCanvasElement")}} | {{Spec2('HTML5 W3C')}}     | Définition initiale.                                                                                                                                                                                                                          |

## Compatibilité des navigateurs

{{Compat("api.HTMLCanvasElement")}}

## Voir aussi

- Elément HTML implementant cette interface : {{HTMLElement("canvas")}}.
