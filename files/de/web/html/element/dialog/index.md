---
title: <dialog>
slug: Web/HTML/Element/dialog
tags:
  - Dialog
  - Element
  - Experimentell
  - HTML
  - HTML interaktive Elemente
  - Referenz
  - Web
translation_of: Web/HTML/Element/dialog
---
{{ SeeCompatTable() }}

## Zusammenfassung

Das **HTML `<dialog>` element** stellte einen Dialog oder eine andere interaktive Komponente, so wie ein Fenster oder Unterfenster, dar. `<form>` Elemente können in einen Dialog Integriert werden in dem sie mit dem Attribut `method="dialog"` angegeben werden. Wenn eine solches Formular übertragen (submit) wird, wird der Dialog mit dem Rückgabewert (`returnValue` ) des `value` Attributes am benutzten Submit Button geschlossen.

Das {{cssxref('::backdrop')}} CSS pseudo-element kann benutzt werden um Elemente hinter dem `<dialog>` Element zu verändern; So kann beispielsweise der Hintergrund abgedunkelt werden.

| [Content categories](/de/docs/HTML/Content_categories) | [Flow content](/de/docs/HTML/Content_categories#Flow_content), [sectioning root](/de/docs/Web/HTML/Sections_and_Outlines_of_an_HTML5_document#Sectioning_roots) |
| ------------------------------------------------------ | --------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Permitted content                                      | [Flow content](/de/docs/HTML/Content_categories#Flow_content)                                                                                                   |
| Tag omission                                           | {{no_tag_omission}}                                                                                                                                        |
| Permitted parent elements                              | Jedes Element, das [flow content](/de/docs/HTML/Content_categories#Flow_content) akzeptiert                                                                     |
| DOM interface                                          | {{domxref("HTMLDialogElement")}}                                                                                                                    |

## Attribute

An diesem Element können die [Globalen Attribute](/de/docs/HTML/Global_attributes "HTML/Global attributes") verwendet werden. Das `tabindex` Attribut darf am `<dialog>` Element nicht benutzt werden.

- {{htmlattrdef("open")}}
  - : Der Dialog ist nach dem Laden des Dokumentes bereits geöffnet und aktiv. Ist das Attribut nicht gesetzt, so wird der Dialog nicht angezeigt.

## Beispiele

### Beispiel 1

```html
<dialog open>
  <p>Greetings, one and all!</p>
</dialog>
```

### Beispiel 2

```html
<!-- Simple pop-up dialog box, containing a form -->
<dialog id="favDialog">
  <form method="dialog">
    <section>
      <p><label for="favAnimal">Favorite animal:</label>
      <select id="favAnimal" name="favAnimal">
        <option></option>
        <option>Brine shrimp</option>
        <option>Red panda</option>
        <option>Spider monkey</option>
      </select></p>
    </section>
    <menu>
      <button id="cancel" type="reset">Cancel</button>
      <button type="submit">Confirm</button>
    </menu>
  </form>
</dialog>

<menu>
  <button id="updateDetails">Update details</button>
</menu>

<script>
  (function() {
    var updateButton = document.getElementById('updateDetails');
    var cancelButton = document.getElementById('cancel');
    var favDialog = document.getElementById('favDialog');

    // Update button opens a modal dialog
    updateButton.addEventListener('click', function() {
      favDialog.showModal();
    });

    // Form cancel button closes the dialog box
    cancelButton.addEventListener('click', function() {
      favDialog.close();
    });

  })();
</script>
```

## Spezifikationen

| Spezifikation                                                                                                            | Status                           | Kommentar |
| ------------------------------------------------------------------------------------------------------------------------ | -------------------------------- | --------- |
| {{SpecName('HTML WHATWG', 'forms.html#the-dialog-element', '&lt;dialog&gt;')}}                 | {{Spec2('HTML WHATWG')}} |           |
| {{SpecName('HTML5.1', 'interactive-elements.html#the-dialog-element', '&lt;dialog&gt;')}} | {{Spec2('HTML5.1')}}     |           |

## Browser Kompatibilität

{{Compat}}

## Siehe Auch

- [HTML forms guide](/de/docs/Web/Guide/HTML/Forms).

{{HTMLRef}}
