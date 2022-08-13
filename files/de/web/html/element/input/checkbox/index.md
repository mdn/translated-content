---
title: <input type="checkbox">
slug: Web/HTML/Element/Input/checkbox
tags:
  - Element
  - HTML
  - HTML forms
  - Input
  - Input Types
  - Reference
  - checkbox
  - form
translation_of: Web/HTML/Element/input/checkbox
---
{{HTMLRef}}

{{htmlelement("input")}}-Elemente vom Typ **`checkbox`** werden standardmäßig als Kästchen gerendert, die mit einem Häkchen versehen (angeklickt) sind, wenn sie aktiviert sind, ähnlich wie man es von offiziellen Formularen kennt. Das exakte Erscheinungsbild hängt vom System ab, auf dem der Browser läuft. Normalerweise ist es ein Quadrat aber es kann auch abgerundete Ecken haben. Eine Checkbox erlaubt die Auswahl eines einzelnen Wertes zur Übertragung in einer Form (oder nicht).

{{EmbedInteractiveExample("pages/tabbed/input-checkbox.html", "tabbed-standard")}}

> **Hinweis:** [Radio buttons](/de/docs/Web/HTML/Element/input/radio) sind Checkboxen ähnlich, jedoch mit einer wichtigen Ausnahme - Radiobuttons sind in einem Satz gruppiert, in dem nur ein Radiobutton aktiviert sein kann, während Checkboxen es erlauben, einen einzelnen Wert an- und auszuschalten. Dort wo mehrere Steuerelemente exisiteren, erlauben es Radiobuttons, eines davon zu selektieren, während Checkboxen mehrere Werte setzen können.

| **[Value](#value)**             | Ein {{domxref("DOMString")}} der den Wert der Checkbox repräsentiert. |
| ------------------------------- | ----------------------------------------------------------------------------- |
| **Events**                      | {{event("change")}} und {{event("input")}}                         |
| **Supported common attributes** | `checked`                                                                     |
| **IDL attributes**              | [`checked`](#checked) und [`value`](#value)                                   |
| **Methods**                     | {{domxref("HTMLInputElement.select", "select()")}}          |

## Value

Ein {{domxref("DOMString")}} der den Wert der checkbox repräsentiert. Dies findet man nicht clientseitig, aber auf Servern ist dies der Wert (**`value`**), der beim Übermitteln der Daten mit dem Checkbox-**`name`**übergeben wird. Sehen wir uns folgendes Beispiel an:

```html
<form>
  <div>
    <input type="checkbox" id="subscribeNews" name="subscribe" value="newsletter">
    <label for="subscribeNews">Subscribe to newsletter?</label>
  </div>
  <div>
    <button type="submit">Subscribe</button>
  </div>
</form>
```

{{EmbedLiveSample('Value', 600, 60)}}

In diesem Beispiel haben wir einen Namen `subscribe` und einen Wert `newsletter`. Wenn die Form übertragen wird, wird das name/value pair `subscribe=newsletter` sein.

Wird das `value`-Attribut weggelassen, ist der default value für die Checkbox `on`, in diesem Fall würden also die übertragenen Daten `subscribe=on` sein.

> **Hinweis:** Wenn beim Übertragen der Form eine Checkbox nicht angeklickt (unchecked) ist, so wird kein Wert vorgesehen, der den unchecked-Status repräsentiert (z.B. `value=unchecked`); der Wert wird überhaupt nicht zum Server übertragen. Wenn Sie einen default-Wert für die Checkbox übertrgen wollen, können Sie - eventuell durch JavaScript generiert - ein {{HTMLElement("input/hidden", '&lt;input type="hidden"&gt;')}} in die Form einbauen, das den selben `name` and `value` wie die Checkbox hat.

## Zusätzliche Attribute

Zusätzlich zu den allgemeinen Attributen, die von allen {{HTMLElement("input")}}-Elementen geteilt werden, unterstützen "`checkbox`"-Inputs die folgenden Attribute:

| Attribute               | Description                                                                                                                      |
| ----------------------- | -------------------------------------------------------------------------------------------------------------------------------- |
| [`checked`](#checked)   | Boolean; wenn vorhanden, wird die Checkbox standardmäßig auf `on` gestellt.                                                      |
| [`readonly`](#readonly) | Boolean; wenn vorhanden, wird das Erscheinungsbild abgeändert, so dass angezeigt wird, dass der Wert nicht geändert werden kann. |
| [`value`](#value)       | Der String, der beim Übertragen der Form benutzt wird, wenn die Checkbox den Wert `on`hat.                                      |

### {{htmlattrdef("checked")}}

Ein Boolean-Attribut, das angibt, ob die Checkbox standardmäßig `checked` ist oder nicht (wenn die Seite gelaoden wird). Es gibt nicht an, ob diese Checkbox aktuell den Status checked hat: Wenn der Status der Checkbox sich ändert, gibt dieses Content Attribut die Änderung nicht wieder. (Nur das {{domxref("HTMLInputElement")}}’s `checked` IDL Attribut wird aktualisiert)

> **Hinweis:** Anders als andere Eingabe-Steuerelemente ist eine Checkbox nur dann in den übermittelten Daten vorhanden, wenn die Checkbox angeklickt (`checked`) ist. Wenn das der Fall ist, wird der Wert der Checkbox (`value`) als die Eingabe übermittelt.

Anders als andere Browser, [speichert](https://stackoverflow.com/questions/5985839/bug-with-firefox-disabled-attribute-of-input-not-resetting-when-refreshing)Firefox standardmäßig den dynamischen Status von `<input>` zwischen mehreren Seitenaufrufen. Benutzen Sie das {{htmlattrxref("autocomplete","input")}}-Attribut, um dieses Feature zu steuern.

### {{htmlattrdef("readonly")}}

Ein Boolean-Attribut, das angibt, ob der Wert dieser Checkbox durch den Benutzer geändert werden kann oder nicht. Bedenken Sie, dass dieses Attribut nur die Erscheinungsform der Checkbox ändert, typischweise, indem eine graue Farbe für Linien und Hintergrund verwendet werden. Dieses Attribut hat jedoch keinen Einfluss auf den Status der Checkbox, der auch immer noch vom Benutzer geändert werden kann. Wenn Sie darüber hinaus verhindern wollen, dass der Benutzer den Status der Checkbox ändert, müssen Sie das `disabled`-Attribut verwenden. Wenn Sie jedoch das `disabled`-Attribut verwenden, bedenken Sie, dass der Wert des Steuerelements nicht übertragen wird, wenn die Form übermittelt wird.

### {{htmlattrdef("value")}}

Das `value`-Attribut ist eines der Attribute, das alle {{HTMLElement("input")}}s teilen. Es bietet jedoch einen speziellen Nutzen für Inputs vom Typ `checkbox`: Wenn eine Form übermittelt wird, werden Checkboxen nur dann übermittelt, wenn sie aktuell angeklickt sind, und der übermittelte Wert ist der Wert aus dem `value`-Attribut. Wenn der Wert nicht anderweitig spezifiziert ist, ist es standarsmäßig der String `on`. Dies wird im Abschnitt [Value](#value) demonstriert.

## checkbox inputs benutzen

Wir haben oben schon die gängisten Nutzungsmöglichkeiten von Checkoxen gesehen. Lassen Sie uns nun die weiteren Features betrachten, die Sie vielleicht brauchen werden.

### Mit multiple checkboxes umgehen

Das Besipiel oben enthielt nur eine Checkbox; in Wirklichkeit werden Sie wahrscheinlich mehrere Checkboxen entdecken. Wenn sie keinen Bezug haben, dann können sie alle separat betrachtet werden, so wie oben gezeigt. Wenn sie jedoch in Beziehung zueinander stehen, sind die Dinge nicht mehr so einfach.

Im folgenden Demo bauen wir mehrere Checkboxen ein, um dem Benutzer zu erlauben, seine Interessen auszuwählen. (Ganze Version im [Beispiele](#beispiele)-Abschnitt).

```html
<fieldset>
  <legend>Choose your interests</legend>
  <div>
    <input type="checkbox" id="coding" name="interest" value="coding">
    <label for="coding">Coding</label>
  </div>
  <div>
    <input type="checkbox" id="music" name="interest" value="music">
    <label for="music">Music</label>
  </div>
</fieldset>
```

{{EmbedLiveSample('Handling_multiple_checkboxes', 600, 100)}}

In diesem Beispiel werden Sie sehen, dass wir jeder Checkbox den selben `name` gegeben haben. Wenn beide Checkboxen checked sind und dann die Form übermittelt wird, werden Sie einen String mit name/value pairs wie folgt erhalten: `interest=coding&interest=music`. Wenn der String den Server erreicht, müssen Sie ihn anders parsen als ein assoziatives Array, so dass alle Werte und nicht nur der letzte von `interest` ermittelt werden. Für eine Technik, die mit PHP eingesetzt wird, sehen Sie sich dieses Beispiel an: [Handle Multiple Checkboxes with a Single Serverside Variable](http://stackoverflow.com/questions/18745456/handle-multiple-checkboxes-with-a-single-serverside-variable).

### Checkboxen auf 'checked' setzen

Um eine Checkbox auf den Wert 'checked' zu setzen, geben Sie ihm einfach das `checked`-Attribute. Sehen Sie sich das Beispiel unten an:

```html
<fieldset>
  <legend>Choose your interests</legend>
  <div>
    <input type="checkbox" id="coding" name="interest" value="coding" checked>
    <label for="coding">Coding</label>
  </div>
  <div>
    <input type="checkbox" id="music" name="interest" value="music">
    <label for="music">Music</label>
  </div>
</fieldset>
```

{{EmbedLiveSample('Checking_boxes_by_default', 600, 100)}}

### Einen größeren Click-Bereich für die Checkbox vorsehen

In den Beispielen oben werden Sie gesehen haben, dass man den Wert der Checkbox ebenso umschalten kann, indem man auf das {{htmlelement("label")}}-Element klickt, das mit der Checkbox verbunden ist, wie wenn man auf die Checkbox selbst klickt. Das ist ein wirklich hilfreiches Feature von HTML Form Labels, das es einfacher macht, die Option anzuklicken, die man möchte, speziell auf kleinen Bildschirmen wie z.B. bei Smartphones.

Neben der Benutzbarkeit ist dies ein guter Grund, die `<label>`-Elemente in der Form sauber aufzusetzen.

### Checkboxen mit unbestimmbarem Wert

Zusätzlich zu den Status-Werten `checked`und `unchecked`gibt es einen dritten Status, den eine Checkbox annehmen kann: **indeterminate**. Dies ist ein Status, bei dem man nich sagen kann, ob das Element `on` oder `off` ist. Dies wird gesetzt durch die {{domxref("HTMLInputElement")}} object's `indeterminate` Eigenschaft via JavaScript (es kann nicht durch HTML gesetzt werden):

```js
inputInstance.indeterminate = true;
```

Eine Checkbox im indeterminate-Status hat in den meisten Browsern eine horizontale Linie in der Box (es sieht ein bisschen wie ien Bindestrich oder ein Minus-Zeichen aus) anstatt eines Häkchens.

Es gibt nicht viele Fälle, in denen diese Eigenschaft sinnvoll eingesetzt werden kann. Am häufigsten ist der Gebrauch, wenn eine Checkbox eine Gruppe von Unteroptionen (die ebenfalls Checkboxen sind) beherbergt.Wenn alle Unteroptionen angeklickt (`checked`) sind, dann ist die übergeordnete Checkbox auch `checked`, sind alle Unteroptionen `unchecked`, so ist die übergeordnete Checkbox ebenfalls `unchecked`. In allen anderen Fällen hätte die übergeordnete Checkbox den Status `indeterminate` .

Im Besipiel unten kann man dies sehen (Dank an [CSS Tricks](https://css-tricks.com/indeterminate-checkboxes/) für die Inspiration). In diesem Beispiel halten wir Zutaten vor, die für ein Rezept gesammelt werden. Wenn Sie eine Zutaten-Checkbox an- oder ausklicken, prüft eine JavaScript-Funktion die Gesamtzahl der ausgewählten Zutaten.

- Wenn keine Checkboxen den Status `checked` haben, hat die Rezept-Checkbox den Status `unchecked`
- Wenn eine oder zwei den Status `checked` haben, wird der Status der Rezept-Checkbox auf `indeterminate` gesetzt.
- Sind alle drei Checkboxen angeklickt, wird der Status der Rezeot.Checkbox auf `checked` gesetzt.

In diesem Fall wird also der `indeterminate`-Status benutzt, um anzuzeigen, dass das Sammeln der Zutaten begonnen hat, das Rezept aber noch nicht komplett ist.

```js
  var overall = document.querySelector('input[id="EnchTbl"]');
  var ingredients = document.querySelectorAll('ul input');

  overall.addEventListener('click', function(e) {
    e.preventDefault();
  });

  for(var i = 0; i < ingredients.length; i++) {
    ingredients[i].addEventListener('click', updateDisplay);
  }

  function updateDisplay() {
    var checkedCount = 0;
    for(var i = 0; i < ingredients.length; i++) {
      if(ingredients[i].checked) {
        checkedCount++;
      }
    }

    if(checkedCount === 0) {
      overall.checked = false;
      overall.indeterminate = false;
    } else if(checkedCount === ingredients.length) {
      overall.checked = true;
      overall.indeterminate = false;
    } else {
      overall.checked = false;
      overall.indeterminate = true;
    }
  }
```

{{EmbedGHLiveSample("learning-area/html/forms/indeterminate-example/index.html", '100%', 200)}}

> **Hinweis:** Wenn Sie eine From mit einer indeterminate Checkbox übermitteln, passiert dasselbe, wie wenn die Checkbox den Status unchecked hat - es werden keine Daten übermittelt, die die Checkbox repräsentieren.

## Gültigkeitsprüfung

Checkboxen unterstützen [validation](/de/docs/Web/Guide/HTML/HTML5/Constraint_validation) (Gültigkeitsprüfung) (allen {{HTMLElement("input")}}s verfügbar). Jedoch werden die meisten {{domxref("ValidityState")}}s immer `false` sein. Wenn die Checkbox das {{htmlattrxref("required", "input")}}-Attribut hat, aber nicht angeklickt ist, then {{domxref("ValidityState.valueMissing")}}, dann wird der Wert `true` sein.

## Beispiele

Das folgende Beispiel ist eine erweiterte Version des "multiple checkboxes"-Beispiels, das wir oben gesehen haben. — es hat mehr Standard-Optionen, plus eine "andere" Checkbox, die, wenn sie angeklickt wird, verursacht, dass eine Textbox erscheint, in die man einen Wert für die "andere" Option eingeben kann. Dies wird durch einen einfachen javaScript-Block erreicht. Das Beispiel enthält ebenso etwas CSS, um das Styling zu verbessern.

### HTML

```html
<form>
  <fieldset>
  <legend>Choose your interests</legend>
    <div>
      <input type="checkbox" id="coding" name="interest" value="coding">
      <label for="coding">Coding</label>
    </div>
    <div>
      <input type="checkbox" id="music" name="interest" value="music">
      <label for="music">Music</label>
    </div>
    <div>
      <input type="checkbox" id="art" name="interest" value="art">
      <label for="art">Art</label>
    </div>
    <div>
      <input type="checkbox" id="sports" name="interest" value="sports">
      <label for="sports">Sports</label>
    </div>
    <div>
      <input type="checkbox" id="cooking" name="interest" value="cooking">
      <label for="cooking">Cooking</label>
    </div>
    <div>
      <input type="checkbox" id="other" name="interest" value="other">
      <label for="other">Other</label>
      <input type="text" id="otherValue" name="other">
    </div>
    <div>
      <button type="submit">Submit form</button>
    </div>
  </fieldset>
</form>
```

### CSS

```css
html {
  font-family: sans-serif;
}

form {
  width: 600px;
  margin: 0 auto;
}

div {
  margin-bottom: 10px;
}

fieldset {
  background: cyan;
  border: 5px solid blue;
}

legend {
  padding: 10px;
  background: blue;
  color: cyan;
}
```

### JavaScript

```js
var otherCheckbox = document.querySelector('input[value="other"]');
var otherText = document.querySelector('input[id="otherValue"]');
otherText.style.visibility = 'hidden';

otherCheckbox.addEventListener('change', () => {
  if(otherCheckbox.checked) {
    otherText.style.visibility = 'visible';
    otherText.value = '';
  } else {
    otherText.style.visibility = 'hidden';
  }
});
```

{{EmbedLiveSample('Examples', '100%', 300)}}

## Spezifikationen

| Spezifikation                                                                                                                                | Status                           | Anmerkung |
| -------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------- | --------- |
| {{SpecName('HTML WHATWG', 'forms.html#checkbox-state-(type=checkbox)', '&lt;input type="checkbox"&gt;')}} | {{Spec2('HTML WHATWG')}} |           |
| {{SpecName('HTML5 W3C', 'forms.html#checkbox-state-(type=checkbox)', '&lt;input type="checkbox"&gt;')}}     | {{Spec2('HTML5 W3C')}}     |           |

## Browser-Kompatibilität

{{Compat("html.elements.input.input-checkbox")}}

## Weiterführende Informationen

- {{HTMLElement("input")}} and the {{domxref("HTMLInputElement")}} interface which implements it.
- The {{cssxref(":checked")}} and {{cssxref(":indeterminate")}} CSS selectors let you style checkboxes based on their current state
- [Compatibility of CSS properties](/de/docs/Learn/HTML/Forms/Property_compatibility_table_for_form_widgets)
