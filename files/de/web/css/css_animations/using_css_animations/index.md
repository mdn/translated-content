---
title: CSS Animationen nutzen
slug: Web/CSS/CSS_Animations/Using_CSS_animations
translation_of: Web/CSS/CSS_Animations/Using_CSS_animations
original_slug: Web/CSS/CSS_Animations/CSS_Animationen_nutzen
---
{{CSSRef}}

**CSS Animationen** ermöglichen animierte Übergänge von einem CSS Style-Konfiguration zur nächsten. Die Animationen bestehen aus zwei Komponenten: Einem Style, der die Animation beschreibt, sowie einer Menge von Keyframes, die Start, Ende und mögliche Zwischenpositionen der Animation festlegt.

Es gibt drei zentrale Vorteile von CSS-Animationen gegenüber traditionellen skriptgetriebenen Animationstechniken:

1. Sie sind einfach zu nutzen für simple Animationen; man kann sie ohne Javascript-Kenntnisse erstellen.
2. Die Animationen laufen performant, sogar unter mäßiger Systemauslastung. Im Gegensatz dazu fallen selbst simple Javascript-Animationen durch schlechte Performance auf. Die Engine kann einzelne Frames überspringen und kennt weitere Techniken, um die Ausführung so sauber wie möglich zu gestalten.
3. Da der Browser die Animation kontrolliert, kann er selbstständig die Performance optimieren, zum Beispiel durch das Drosseln der Freqenz von Animationen in aktuell nicht sichtbaren Browser-Tabs.

## Konfigurieren der Animation

Um eine CSS-Animation zu erstellen, fügt man dem zu animierenden Element die {{ cssxref("animation") }}-Eigenschaft oder seine Sub-Eigenschaften zu. So lassen sich Timing und Dauer der Animation sowie weitere Details des Animationsablaufes bestimmen. Man legt damit **nicht** die eigentliche Darstellung der Animation fest, die mittels {{ cssxref("@keyframes") }} definiert wird. Siehe [Definieren der Animationssequenz mittels Keyframes](#definieren_der_animationssequenz_mittels_keyframes) weiter unten.

Die Sub-Eigenschaften der {{ cssxref("animation") }}-Eigenschaft sind:

- {{ cssxref("animation-name") }}
  - : Spezifiziert den Namen der {{ cssxref("@keyframes") }}-at-Regel, welche die einzelnen Keyframes beschreibt.
- {{ cssxref("animation-duration") }}
  - : Legt die Dauer der Animation für einen kompletten Durchgang fest.
- {{ cssxref("animation-timing-function") }}
  - : Konfiguriert das Timing der Animation. Konkret werden die Übergänge zwischen den einzelnen Keyframes mittels Beschleunigungskurven festgelegt.
- {{ cssxref("animation-delay") }}
  - : Setzt den Abstand zwischen dem Zeitpunkt, an dem die Animation vollständig geladen ist und dem Start der Animationssequenz.
- {{ cssxref("animation-iteration-count") }}
  - : Konfiguriert wie oft die Animation wiederholt wird; mittels `infinite` wird die Animation unendlich wiederholt.
- {{ cssxref("animation-direction") }}
  - : Legt fest, ob die Animation nach jedem Durchgang die Abspielrichtung wechselt oder zum Startpunkt zurückspringt und sich wiederholt.
- {{ cssxref("animation-fill-mode") }}
  - : Legt fest, welche Styles vor und nach dem Ausführen der Animation auf das animierte Element angewendet werden.
- {{ cssxref("animation-play-state") }}
  - : Ermöglicht das Pausieren und Wiederaufnehmen einer Animationssequenz.

## Definieren der Animationssequenz mittels Keyframes

Nachdem Sie den zeitlichen Ablauf der Animation festgelegt haben, müssen Sie die Erscheinung der Animation festlegen. Sie erreichen dies, indem Sie zwei oder mehr Keyframes mit Hilfe der {{ cssxref("@keyframes") }} at-Regel erstellen. Jeder Keyframe beschreibt den Darstellungszustand des animierten Elements zum gegebenen Zeitpunkt der Animationssequenz.

Da der zeitliche Ablauf der Animation im CSS-Style, welcher die Animation konfiguriert, festgelegt ist, verwenden Keyframes {{ cssxref("percentage") }} um den Zeitpunkt festzulegen, wann die Animationssequenz beginnen soll. 0% steht für den ersten Moment der Animationssequenz, wohingegen 100% den letzten Zustand der Animation beschreibt. Weil diese beiden Keyframes so wichtg sind gibt es zwei Wörter für sie: `from` und `to`. Sie sind beide optional. Falls `from/0%` oder `to/100%` nicht definiert sind , startet oder stoppt der Browser die Animation gemäß der berechneten Werte aller Attribute.

Sie können optional zusätzliche Keyframes einfügen, die jeweils Zwischenschritte auf dem Weg vom Start- zum Endpunkt der Animation beschreiben.

## Beispiele

> **Hinweis:** Einige ältere Browser (vor 2017) benötigen unter Umständen Präfixe; die Live-Beispiele, welche durch einen Klick im Browser betrachtet werden können, beinhalten die `-webkit` Präfix-Syntax.

### Einen Text übers Fenster gleiten lassen.

Dieses einfache Beispiel an einem {{ HTMLElement("p") }}-Element lässt einen Text von rechts über das Browserfenster gleiten.

Beachte, dass solche Animationen dafür sorgen können, dass die Seite breiter als das Browser-Fenster wird. Um dieses Problem zu umgehen, wird das zu animierende Element in einen Container gepackt. Der Container erhält anschließend die {{cssxref("overflow")}}`:hidden` Eigenschaft.

```css
p {
  animation-duration: 3s;
  animation-name: slidein;
}

@keyframes slidein {
  from {
    margin-left: 100%;
    width: 300%;
  }

  to {
    margin-left: 0%;
    width: 100%;
  }
}
```

In diesem Beispiel, bestimmt der Style für das {{ HTMLElement("p") }}-Element, dass durch den Einsatz von {{ cssxref("animation-duration") }} die Animation von Anfang bis Ende in drei Sekunden ausgeführt werden soll. Der Name der {{ cssxref("@keyframes") }} at-Regel, welche die Keyframes der Animation beschreibt, lautet "slidein".

Falls Sie weitere angepasste Styles auf das {{ HTMLElement("p") }}-Element anwenden wollen, die keine CSS-Animationen unterstützen, würden diese hier ebenfalls eingefügt werden. In diesem Falle wollen wir aber außer der Animation keine weiteren Styles festlegen.

Die Keyframes werden anhand der {{ cssxref("@keyframes") }} at-Regel festgelegt. In diesem Beispiel haben wir nur zwei Keyframes. Der erste tritt bei 0% (aufgrund des Aliases `from`) ein. Hier bestimmen wir einen linken Außenabstand des Elements von 100% (das heißt, am rechten äußeren Rand des umschließenden Elements). Darüberhinaus wird die Breite des Elements auf 300% gesetzt (oder drei Mal der Breite des umgebenden Elements). Dadurch wird der Header im ersten Frame der Animation außerhalb des rechten Randes des Browser-Fensters gezeichnet.

Der zweite (und letzte) Keyframe tritt bei 100% ein (aufgrund des Aliases `to`). Der linke Außenabstand wird auf 0% gesetzt und die Breite des Elements auf 100% aktualisiert. Dadurch beendet der Header seine Animation mit einer Ausrichtung am linken Rand des Inhaltsbereichs.

```html
<p>The Caterpillar and Alice looked at each other for some time in silence:
at last the Caterpillar took the hookah out of its mouth, and addressed
her in a languid, sleepy voice.</p>
```

> **Hinweis:** Laden Sie die Seite neu, um die Animation zu sehen. Oder klicken Sie auf den CodePen-Knopf, um die Animation innerhalb der CodePen-Umgebung zu betrachten.

{{EmbedLiveSample("Making_text_slide_across_the_browser_window","100%","250")}}

### Hinzufügen eines weiteren Keyframes

Lassen Sie uns eine weitere Keyframe zur Animation des vorigen Beispiels hinzufügen. Sagen wir, wir wollen zunächst für eine Weile die Schriftgröße des Headers erhöhen, während er sich von rechts nach links bewegt. Am Ende soll sie wieder auf ihre ursprüngliche Größe schrumpfen. Das ist so einfach wie das Hinzufügen dieser Keyframe:

```css
75% {
  font-size: 300%;
  margin-left: 25%;
  width: 150%;
}
```

Der vollständige Code sieht nun so aus:

```css
p {
  animation-duration: 3s;
  animation-name: slidein;
}

@keyframes slidein {
  from {
    margin-left: 100%;
    width: 300%;
  }

  75% {
    font-size: 300%;
    margin-left: 25%;
    width: 150%;
  }

  to {
    margin-left: 0%;
    width: 100%;
  }
}
```

```html
<p>The Caterpillar and Alice looked at each other for some time in silence:
at last the Caterpillar took the hookah out of its mouth, and addressed
her in a languid, sleepy voice.</p>
```

Dies teilt dem Browser mit, dass nach 75% der Animationssequenz der linke Außenabstand des Headers bei 25% und die Breite bei 150% liegen sollte.

> **Hinweis:** Laden Sie die Seite neu, um die Animation zu sehen. Oder klicken Sie auf den CodePen-Knopf, um die Animation innerhalb der CodePen-Umgebung zu betrachten.

{{EmbedLiveSample("Adding_another_keyframe","100%","250")}}

### Lass es sich wiederholen

Damit die Animation sich wiederholt, nutzen Sie die {{ cssxref("animation-iteration-count") }}-Eigenschaft, um festzulegen, wie oft sich die Animation wiederholen soll. In diesem Beispiel setzen wir sie auf `infinite`, damit sich die Animation unendlich oft wiederholt:

```css
p {
  animation-duration: 3s;
  animation-name: slidein;
  animation-iteration-count: infinite;
}
```

Nach Hinzufügen zum bisherigen Code:

```css
@keyframes slidein {
  from {
    margin-left: 100%;
    width: 300%;
  }

  to {
    margin-left: 0%;
    width: 100%;
  }
}
```

```html
<p>The Caterpillar and Alice looked at each other for some time in silence:
at last the Caterpillar took the hookah out of its mouth, and addressed
her in a languid, sleepy voice.</p>
```

{{EmbedLiveSample("Making_it_repeat","100%","250")}}

### Lassen Sie es sich vor- und zurück bewegen

Die vorige Anpassung sorgte dafür, dass sich die Animation wiederholte. Aber es ist sehr eigenartig, dass die Animation jedes Mal zum Anfang zurückspringt, wenn sie sich wiederholt. Was wir wirklich wollen ist ein Vor- und Zurückbewegen über den Bildschirm. Dazu muss die {{ cssxref("animation-direction") }}-Eigenschaft auf `alternate` gesetzt werden:

```css
p {
  animation-duration: 3s;
  animation-name: slidein;
  animation-iteration-count: infinite;
  animation-direction: alternate;
}
```

Damit sieht der übrige Code folgendermaßen aus:

```css
@keyframes slidein {
  from {
    margin-left: 100%;
    width: 300%;
  }

  to {
    margin-left: 0%;
    width: 100%;
  }
}
```

```html
<p>The Caterpillar and Alice looked at each other for some time in silence:
at last the Caterpillar took the hookah out of its mouth, and addressed
her in a languid, sleepy voice.</p>
```

{{EmbedLiveSample("Making_it_move_back_and_forth","100%","250")}}

### Benutzen der Animation Kurzversion

Die {{cssxref("animation")}}-Kurzversion ist hilfreich, um Platz zu sparen. Zum Beispiel haben wir diese Regel während dieses Artikels genutzt:

```css
p {
  animation-duration: 3s;
  animation-name: slidein;
  animation-iteration-count: infinite;
  animation-direction: alternate;
}
```

Sie könnte durch Folgendes ersetzt werden:

```css
p {
  animation: 3s infinite alternate slidein;
}
```

> **Hinweis:** Sie können weitere Beispiele auf der Referenzseite von {{cssxref("animation")}} finden.

### Setzen mehrere Animationseigenschaftswerte

Die Langversion der CSS-Animation akzeptiert mehrere durch Komma getrennte Werte — eine Eigenschaft, die genutzt werden kann, um mehrere Animationen in einer einzigen Regel anzuwenden. Daneben lassen sich für die verschiedenen Animationen die Dauer, Anzahl der Wiederholungen usw. einzeln festlegen. Sehen Sie sich die folgenden kurzen Beispiele an, die die verschiedenen Kombinationen erklären:

In diesem ersten Beispiel wurden drei Animations-Namen gesetzt, aber nur eine Dauer und Anzahl der Wiederholungen gesetzt. In diesem Falle erhalten alle drei Animationen die gleiche Dauer und Anzahl der Wiederholungen:

```css
animation-name: fadeInOut, moveLeft300px, bounce;
animation-duration: 3s;
animation-iteration-count: 1;
```

In diesem zweiten Beispiel wurden drei Werte für drei Eigenschaften gesetzt. In diesem Falle entsprechen die Werte an der selben Position jeder Eigenschaft der jeweiligen Animation. So hat die `fadeInOut` Animation beispielsweise eine Dauer von 2.5s und wiederholt sich zwei Mal usw.

```css
animation-name: fadeInOut, moveLeft300px, bounce;
animation-duration: 2.5s, 5s, 1s;
animation-iteration-count: 2, 1, 5;
```

In diesem dritten Beispiel wurden drei Animationen festgelegt, aber nur zwei Dauern und Anzahl der Wiederholungen. In Fällen wie diesen, in denen es nicht genug Werte gibt, um jeder Animation ihren eigenen Wert zuzuweisen, wiederholt sich der Wertze-Zyklus von Anfang bis Ende. Beispielsweise erhält fadeInOut eine Dauer von 2.5s und moveLeft300px eine von 5s. Damit sind wir am Ende der verfügbaren Werte für die Dauer angelangt, also fangen wir von vorne an — bounce bekommt daher eine dauer von 2.5s zugewiesen. Die Anzahl der Wiederholungen (und alle weiteren Eigenschaften, die Sie so festlegen), werden auf die selbe Weise zugewiesen.

```css
animation-name: fadeInOut, moveLeft300px, bounce;
animation-duration: 2.5s, 5s;
animation-iteration-count: 2, 1;
```

### Benutzen von Animations-Ereignissen

Sie können zusätzliche Kontrolle über Animationen — sowie mehr nützliche Informationen — erhalten, indem sie Animations-Ereignisse nutzen. Diese Ereignisse werden durch das {{domxref("AnimationEvent")}}-Objekt repräsentiert. Es kann genutzt werden, um den Start, das Ende oder den Beginn einer Wiederholung zu erkennen. Jedes Ereignis beinhaltet die Zeit, an der es auftrat sowie den Namen der Animation, welche es getriggert hat.

Wir passen das Beispiel mit dem gleitenden Text an, um einige Informationen über jedes Animations-Ereignis bei Eintritt auszugeben, um zu sehen, wie sie funktionieren.

#### Hinzufügen des CSS

Wir beginnen mit dem Schreiben des CSS für die Animation. Diese Animation wird drei Sekunden dauern, “slidein” genannt werden, sich drei Mal wiederholen, und dabei jedes Mal die Richtung ändern. In den {{cssxref("@keyframes")}} wird die Breite under linke Außenabstand manipuliert, um das Element über den Bildschirm gleiten zu lassen.

```css
.slidein {
  animation-duration: 3s;
  animation-name: slidein;
  animation-iteration-count: 3;
  animation-direction: alternate;
}

@keyframes slidein {
  from {
    margin-left:100%;
    width:300%
  }

  to {
    margin-left:0%;
    width:100%;
  }
}
```

#### Hinzufügen der Animations-Ereignis-Listener

Wir verwenden JavaScript-Code, um auf alle drei möglichen Animationsereignisse zu aluschen. Der folgende Code konfiguriert unsere Event Listener. Wir rufen ihn auf, wenn das Dokument das erste Mal geladen wurde, um die Dinge einzurichten.

```js
var element = document.getElementById("watchme");
element.addEventListener("animationstart", listener, false);
element.addEventListener("animationend", listener, false);
element.addEventListener("animationiteration", listener, false);

element.className = "slidein";
```

Dies ist ziemlich üblicher Code; Sie können mehr über die Details der Funktionsweise in der Dokumentation zu {{domxref("eventTarget.addEventListener()")}} erfahren. Als letztes setzt dieser Code die `class` des Elements, welches wir animieren wollen, auf “slidein”, um die Animation damit zu starten.

Warum? Weil das `animationstart` Ereignis mit dem Beginn der Animation gestartet wird. In unserem Falle vor Ausführung des Codes. Daher starten wir die Animation selber durch das Setzen von class auf dem Element zu dem Werte, welches die Animation steuert.

#### Empfangen von Ereignissen

Die Ereignisse werden an die untenstehende `listener()` Funktion durchgereicht.

```js
function listener(event) {
  var l = document.createElement("li");
  switch(event.type) {
    case "animationstart":
      l.innerHTML = "Started: elapsed time is " + event.elapsedTime;
      break;
    case "animationend":
      l.innerHTML = "Ended: elapsed time is " + event.elapsedTime;
      break;
    case "animationiteration":
      l.innerHTML = "New loop started at time " + event.elapsedTime;
      break;
  }
  document.getElementById("output").appendChild(l);
}
```

Auch dieser Code ist sehr einfach. Es schaut auf den {{domxref("event.type")}}, um zu bestimmen, welche Art von Animation eingetreten ist. Danach fügt es die entsprechende Notiz zur {{HTMLElement("ul")}} (ungeordneten Liste) hinzu, welche wir benutzen, um die Ereignisse mitzuschneiden.

Schlussendlich sieht die Ausgabe in etwa folgendermaßen aus:

- Started: elapsed time is 0
- New loop started at time 3.01200008392334
- New loop started at time 6.00600004196167
- Ended: elapsed time is 9.234000205993652

Beachten Sie, dass die Zeiten ziemlich nah, aber nicht exakt denen entsprechen, die wir in der Animation konfiguriert haben. Beachten Sie außerdem, dass bei der letzten Animation, das `animationiteration` Ereignis nicht gesetzt wurde. Stattdessen wurde ein `animationend` Ereignis gesendet.

#### Das HTML

Der Vollständigkeit halber ist hier das HTML, welches den Seiteninhalt darstellt und die Liste beinhaltet, welche vom Skript mit Informationen über empfangene Ereignisse gefüllt wird:

```html
<h1 id="watchme">Watch me move</h1>
<p>
  This example shows how to use CSS animations to make <code>H1</code>
  elements move across the page.
</p>
<p>
  In addition, we output some text each time an animation event fires,
  so you can see them in action.
</p>
<ul id="output">
</ul>
```

Hier gibt es eine Live-Ausgabe:

> **Hinweis:** Laden Sie die Seite neu, um die Animation zu sehen. Oder klicken Sie auf den CodePen-Knopf, um die Animation innerhalb der CodePen-Umgebung zu betrachten.

{{EmbedLiveSample('Using_animation_events', '600', '300')}}

## Zum Weiterlesen

- {{domxref("AnimationEvent", "AnimationEvent")}}
- [Detecting CSS animation support](/de/docs/CSS/CSS_animations/Detecting_CSS_animation_support "en/CSS/CSS animations/Detecting CSS animation support")
- [Using CSS transitions](/de/docs/Web/Guide/CSS/Using_CSS_transitions)
