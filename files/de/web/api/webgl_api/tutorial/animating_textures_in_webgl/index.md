---
title: Animierte Texturen in WebGL
slug: Web/API/WebGL_API/Tutorial/Animating_textures_in_WebGL
tags:
  - Tutorial
  - WebGL
translation_of: Web/API/WebGL_API/Tutorial/Animating_textures_in_WebGL
original_slug: Web/API/WebGL_API/Tutorial/Animierte_Texturen_in_WebGL
---
{{WebGLSidebar("Tutorial") }} {{Previous("Web/API/WebGL_API/Tutorial/Beleuchtung_in_WebGL")}}

In dieser Demo bauen wir auf das vorherige Beispiel auf, indem wir die statischen Texturen mit den Frames eines OGG-Video ersetzen. Das ist nicht sehr schwer zu schreiben, sieht aber umso besser aus. Fangen wir an.

## Zugang zum Video

Zunächst müssen wir etwas HTML hinzufügen, um das [`video`](/de/HTML/Element/video) Element zu erstellen, welches wir verwenden, um die Video-Frames zu erhalten:

```js
<video id="video" src="Firefox.ogv" autobuffer='true'">
  Ihr Browser scheint das HTML5 <code>&lt;video&gt;</code> Element nicht zu unterstützen.
</video>
```

Das erstellt einfach ein Element, um die Video-Datei "Firefox.ogv" abzuspielen. Wir benutzen CSS, um zu verhindern, dass das Video angezeigt wird:

```css
video {
  display: none;
}
```

Dann schenken wir dem JavaScript Code wieder unsere Aufmerksamkeit und fügen eine neue Zeile zur `start()` Funktion hinzu, um einen Bezug zum Video-Element herzustellen:

```js
videoElement = document.getElementById("video");
```

Und wir ersetzen den Code, der die Intervall-gesteuerten Aufrufe von `drawScene()` setzt, mit diesem Code:

```js
videoElement.addEventListener("canplaythrough", startVideo, true);
videoElement.addEventListener("ended", videoDone, true);
```

Die Idee ist hier, dass wir die Animation nicht starten wollen, bevor das Video nicht ausreichend zwischengespeichert wurde, sodass es dann ohne Unterbrechung abgespielt werden kann. Wir fügen also einen Event-Listener hinzu, um auf das `video` Element zu warten bis es uns mitteilt, dass genug zwischengespeichert wurde und das komplette Video ohne Pause abgespielt werden kann. Wir fügen außerdem einen zweiten Event-Listener hinzu, sodass wir die Animation stoppen können, wenn das Video beendet ist und wir so nicht unnötig den Prozessor belasten.

Die `startVideo()` Funktion sieht so aus:

```js
function startVideo() {
  videoElement.play();
  videoElement.addEventListener("timeupdate", updateTexture, true);
  setInterval(drawScene, 15);
}
```

Hier wird einfach das Video gestartet und ein Event-Handler bereitgestellt, der aufgerufen wird, wenn ein neuer Frame des Videos verfügbar ist. Dann werden die Intervall-gesteuerten Aufrufe der `drawScene()` Funktion eingerichtet, um den Würfel zu rendern.

Die `videoDone()` Funktion ruft einfach {{ domxref("window.clearInterval") }} auf, um die Intervallaufrufe zu beenden, die die Animation aktualisieren.

## Die Video-Frames als Textur verwenden

Die nächste Änderung erhält die `initTexture()` Funktion, welche viel einfacher wird, weil kein Bild mehr geladen werden muss. Stattdessen muss nun das Textur-Mapping aktiviert werden und ein leeres Textur-Objekt zum späteren Gebrauch erstellt werden:

```js
function initTextures() {
  gl.enable(gl.TEXTURE_2D);
  cubeTexture = gl.createTexture();
}
```

So sieht die `updateTexture()` Funktion aus. Hier wird wirklich Arbeit verrichtet:

```js
function updateTexture() {
  gl.bindTexture(gl.TEXTURE_2D, cubeTexture);
  gl.texImage2D(gl.TEXTURE_2D, 0, videoElement, true);
  gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, gl.LINEAR);
  gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.LINEAR_MIPMAP_NEAREST);
  gl.generateMipmap(gl.TEXTURE_2D);
  gl.bindTexture(gl.TEXTURE_2D, null);
}
```

Sie kennen diesen Code bereits. Es ist fast identisch zur `handleTextureLoaded()` Routine im vorherigen Beispiel, mit der Ausnahme, dass wir `texImage2D()` nicht mit einem `Image` Objekt sondern mit dem `video` Element aufrufen.

`updateTexture()` wird jedes Mal aufgerufen, wenn sich das `timeupdate` Event vom `video` Element meldet. Dieses Event wird gesendet, wenn sich die Zeit des aktuellen Frames ändert, sodass wir wissen, dass wir unsere Textur nur dann aktualisieren müssen, wenn neue Daten verfügbar sind.

Das war alles! Wenn Sie eine Browser mit Unterstützung von WebGL verwenden, können Sie sich [das Beispiel in Aktion ansehen](/samples/webgl/sample8/index.html "https://developer.mozilla.org/samples/webgl/sample8/index.html").

## Siehe auch

- [Audio und Video in Firefox](/de/Audio_und_Video_in_Firefox)

{{Previous("Web/API/WebGL_API/Tutorial/Beleuchtung_in_WebGL")}}
