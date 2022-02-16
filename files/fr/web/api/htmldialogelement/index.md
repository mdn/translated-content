---
title: HTMLDialogElement
slug: Web/API/HTMLDialogElement
tags:
  - API
  - Experimental
  - HTML DOM
  - HTMLDialogElement
  - Interface
  - NeedsTranslation
  - Reference
  - TopicStub
translation_of: Web/API/HTMLDialogElement
---
{{APIRef("HTML DOM")}}{{SeeCompatTable}}

The **`HTMLDialogElement`** interface provides methods to manipulate {{HTMLElement("dialog")}} elements. It inherits properties and methods from the {{domxref("HTMLElement")}} interface.

{{InheritanceDiagram(600, 120)}}

## Properties

_Inherits properties from its parent, {{domxref("HTMLElement")}}._

- {{domxref("HTMLDialogElement.open")}}
  - : A {{domxref("Boolean")}} reflecting the {{htmlattrxref("open", "dialog")}} HTML attribute, indicating whether the dialog is available for interaction.
- {{domxref("HTMLDialogElement.returnValue")}}
  - : A {{domxref("DOMString")}} that sets or returns the return value for the dialog.

## Methods

_Inherits methods from its parent, {{domxref("HTMLElement")}}._

- {{domxref("HTMLDialogElement.close()")}}
  - : Closes the dialog. An optional {{domxref("DOMString")}} may be passed as an argument, updating the `returnValue` of the the dialog.
- {{domxref("HTMLDialogElement.show()")}}
  - : Displays the dialog modelessly, i.e. still allowing interaction with content outside of the dialog.
- {{domxref("HTMLDialogElement.showModal()")}}
  - : Displays the dialog as a modal, over the top of any other dialogs that might be present. Interaction outside the dialog is blocked.

## Events

- {{domxref("HTMLDialogElement/close_event", "close")}}
  - : Fired when the dialog is closed.
    Also available via the {{domxref("GlobalEventHandlers/onclose", "onclose")}} property.

## Examples

The following example shows a simple button that, when clicked, opens a {{htmlelement("dialog")}} containing a form via the {{domxref("HTMLDialogElement.showModal()")}} function. From there you can click the _Cancel_ button to close the dialog (via the {{domxref("HTMLDialogElement.close()")}} function), or submit the form via the submit button.

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
      var dialog = document.getElementById('favDialog');
      dialog.returnValue = 'favAnimal';

      function openCheck(dialog) {
        if(dialog.open) {
          console.log('Dialog open');
        } else {
          console.log('Dialog closed');
        }
      }

      // Update button opens a modal dialog
      updateButton.addEventListener('click', function() {
        dialog.showModal();
        openCheck(dialog);
      });

      // Form cancel button closes the dialog box
      cancelButton.addEventListener('click', function() {
        dialog.close('animalNotChosen');
        openCheck(dialog);
      });

    })();
  </script>
```

> **Note :** You can find this example on GitHub as [htmldialogelement-basic](https://github.com/mdn/dom-examples/blob/master/htmldialogelement-basic/index.html) ([see it live also](https://mdn.github.io/dom-examples/htmldialogelement-basic/)).

## Specifications

| Specification                                                                                                            | Status                           | Comment            |
| ------------------------------------------------------------------------------------------------------------------------ | -------------------------------- | ------------------ |
| {{SpecName('HTML WHATWG', '#htmldialogelement', 'HTMLDialogElement')}}                             | {{Spec2('HTML WHATWG')}} |                    |
| {{SpecName('HTML5.2', 'interactive-elements.html#the-dialog-element', '&lt;dialog&gt;')}} | {{Spec2('HTML5.2')}}     | Initial definition |

## Browser compatibility

{{Compat("api.HTMLDialogElement")}}

## See also

- The HTML element implementing this interface: {{ HTMLElement("dialog") }}.
