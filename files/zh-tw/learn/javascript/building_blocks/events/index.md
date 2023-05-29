---
title: Event attributes
slug: Learn/JavaScript/Building_blocks/Events
original_slug: Web/Guide/HTML/Event_attributes
---

{{LearnSidebar}}{{PreviousMenuNext("Learn/JavaScript/Building_blocks/Return_values","Learn/JavaScript/Building_blocks/Image_gallery", "Learn/JavaScript/Building_blocks")}}

每一個 HTML 元素都可以放置事件屬性，以藉此於事件發生時能執行 JavaScript 程式。事件屬性的名稱都有一個前綴「on」，例如當使用者點選元素時要執行指定的 JavaScript，可以使用 `onclick` 屬性並把要執行的 JavaScript 當成屬性值。

In the JavaScript code executed in response to the event, `this` is bound to the HTML element and the {{domxref("Event")}} object can be reached using the `event` variable in the scope of the attribute.

> **警告：** These attributes should be avoided. This makes the markup bigger and less readable. Concerns of content/structure and behavior are not well-separated, making a bug harder to find. Furthermore, usage of event attributes almost always causes scripts to expose global functions on the {{domxref("Window")}} object, polluting the global namespace.

While these attributes can at times be attractively easy to use, you should avoid using them. Instead, use the {{domxref("EventTarget.addEventListener()")}} function to add a listener for the event.

Event attributes can be blocked by using [Content Security Policy](/zh-TW/docs/Security/CSP/Introducing_Content_Security_Policy) which if used, blocks all inline scripts unless the _'unsafe-inline'_ keyword is used.

## Example using event attributes

This example appends text to an element each time time the {{HTMLElement("div")}} is clicked.

> **備註：** This is an example of how not to do things, using one of these attributes.

```html
<!DOCTYPE html>
<html>
  <head>
    <title>Event Attribute Example</title>
    <script>
      function doSomething() {
        document.getElementById("thanks").innerHTML +=
          "<p>Thanks for clicking!</p>";
      }
    </script>
  </head>
  <body>
    <div onclick="doSomething();">Click me!</div>
    <div id="thanks"></div>
  </body>
</html>
```

Try this example below:

{{ EmbedLiveSample('Example_using_event_attributes', '', '', '') }}

## Example using event listeners

Instead, you should use {{domxref("EventTarget.addEventListener()")}}, as shown here:

```html
<!DOCTYPE html>
<html>
  <head>
    <title>Event Attribute Example</title>
    <script>
      function doSomething() {
        document.getElementById("thanks").innerHTML +=
          "<p>Thanks for clicking!</p>";
      }

      // Called when the page is done loading; this is where we do any setup we need,
      // such as creating event listeners for the elements in the page.

      function setup() {
        document
          .getElementById("click")
          .addEventListener("click", doSomething, true);
      }

      // Install an event handler on the window to receive the "load" event, which
      // indicates that the document has finished loading into the window.

      window.addEventListener("load", setup, true);
    </script>
  </head>
  <body>
    <div id="click">Click me!</div>
    <div id="thanks"></div>
  </body>
</html>
```

You can see this in action below:

{{ EmbedLiveSample('Example_using_event_listeners', '', '', '') }}
