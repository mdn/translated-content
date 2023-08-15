---
title: Ввод пользователя и управление
slug: Web/Guide/User_input_methods
---

Это руководство содержит рекомендации по обработке пользовательского ввода
и внедрению управляющих элементов в веб-приложения. Также здесь вы найдёте соответствующие FAQs, живые примеры, ссылки на более подробные разборы близлежащих технологий.
Связанные интерфейсы API и события: [события касаний](/ru/docs/Web/API/Touch_events), [интерфейс отслеживания указателя мыши](/ru/docs/Web/API/Pointer_Lock_API),
[интерфейс ориентации экрана](/ru/docs/Web/API/CSS_Object_Model/ориентация_экрана),
[интерфейс режима "на весь экран"](/ru/docs/DOM/Using_fullscreen_mode), [перетаскивание и сброс](/ru/docs/Web/Guide/HTML/Drag_and_drop) и т. д.

## Рабочая область

The following diagram illustrates the typical workflow for implementing user input mechanisms:

![](user-input-and-controls.png)

First of all, you need to decide which input mechanisms you want to cover in your application out of mouse, keyboard, finger touch and so on. Once you decided the input mechanisms, you can control them using tools offered by the web platform or JavaScript libraries.

## Recommendations

Available input mechanisms depend on the capabilities of the device running the application:

- Some devices provide touchscreen displays: the Web Platform offers [touch events](/ru/docs/Web/Guide/Events/Touch_events) to interpret finger activity on touch-based user interfaces.
- For devices providing a mouse/touchpad as a pointing method, the [Pointer Lock API](/ru/docs/Web/API/Pointer_Lock_API) helps you in implementing a first person 3D game or other applications requiring full control of the pointing device. And the [Fullscreen API](/ru/docs/Web/API/Fullscreen_API) helps you in displaying your app in fullscreen mode.
- Using features such as [contentEditable](/ru/docs/Web/Guide/HTML/Content_Editable) elements you can implement fast rich-text editors and with [Drag\&Drop](/ru/docs/Web/Guide/HTML/Drag_and_drop) let users moving elements inside your app. When screen orientation matters for your application, through the [Screen Orientation API](/ru/docs/Web/API/CSS_Object_Model/Managing_screen_orientation) you can read the screen orientation state and perform other actions.
- You should always be mindful of keyboard accessibility where appropriate — many web users only use keyboard to navigate web sites and apps, and locking them out of your functionality is a bad idea.

The following is a set of recommendations and best practices for using such tools in Open Web Apps.

### Decide what input mechanism you're using

#### Keyboard

Keyboard input can be controlled by your app. For example if you want to add controls when any key gets pressed, you need to add an event listener on the window object:

```js
window.addEventListener("keydown", handleKeyDown, true);
window.addEventListener("keyup", handleKeyUp, true);
```

where `handleKeyDown` and `handleKeyUp` are the functions implementing the controls about the `keydown` and `keyup` events.

> **Примечание:** Have a look at the [Events reference](/ru/docs/Web/Reference/Events) and {{domxref("KeyboardEvent")}} guide to find out more about keyboard events.

#### Mouse

The events occurring when the user interacts with a pointing device such as a mouse are represented by the {{domxref("MouseEvent")}} DOM Interface. Common mouse events include [`click`](/ru/docs/Web/Reference/Events/click), [`dblclick`](/ru/docs/Web/Reference/Events/dblclick), [`mouseup`](/ru/docs/Web/Reference/Events/mouseup), and [`mousedown`](/ru/docs/Web/Reference/Events/mousedown). The list of all events using the Mouse Event Interface is provided in the [Events reference](/ru/docs/Web/Reference/Events).

When the input device is a mouse, you can also control user input through the Pointer Lock API and implement Drag & Drop (see below).

#### Finger touch

When developing web applications meant to be installed on touchscreen devices, it's a good practice to take into consideration the different capabilities in terms of screen resolution and user input. [Touch events](/ru/docs/Web/Guide/Events/Touch_events) can help you implement interactive elements and common interaction gestures on touchscreen devices.

If you want to use touch events, you need to add event listeners and specify handler functions, which will be called when the event gets fired:

```js
element.addEventListener("touchstart", handleStart, false);
element.addEventListener("touchcancel", handleCancel, false);
element.addEventListener("touchend", handleEnd, false);
element.addEventListener("touchmove", handleMove, false);
```

where `element` is the DOM element you want to register the touch events on.

> **Примечание:** For further information about what you can do with touch events, please read our [touch events guide](/ru/docs/Web/Guide/Events/Touch_events).

#### Pointer Events

When dealing with devices that incorporate multiple forms of input, like mouse, finger touch and pen input, it might be hard to develop a solution that works for all these different control mechanisms. [Pointer Events](http://www.w3.org/TR/pointerevents/) help developers more easily manage events across devices by normalizing the handling of each one. A pointer can be any point of contact on the screen made by a mouse cursor, pen, touch (including multi-touch), or other pointing input device. The events for handling generic pointer input look a lot like those for mouse: `pointerdown`, `pointermove`, `pointerup`, `pointerover`, `pointerout`, etc.

> **Примечание:** Pointer Events are not widely supported yet, but a [pointer.js polyfill](https://github.com/mozilla/pointer.js) is available on Mozilla Github.

### Implement controls

#### Pointer lock

In some cases, typically game development, you might need to access mouse events even when the cursor goes past the boundary of the browser or screen: the {{domxref("Pointer_Lock_API")}} gives you full control of the pointing device.

This is the code to request pointer lock on an `element`:

```js
element.requestPointerLock();
```

> **Примечание:** For a full tutorial and reference, read our {{domxref("Pointer_Lock_API")}} page.

#### Screen Orientation

When screen orientation matters for your application, you can read the screen orientation state, be informed when this state changes, and able to lock the screen orientation to a specific state (usually portrait or landscape) through the [Screen Orientation API](/ru/docs/Web/API/CSS_Object_Model/Managing_screen_orientation).

Orientation data can be retrieved through the {{domxref("screen.orientation")}} attribute or through the [`orientation`](/ru/docs/Web/Guide/CSS/Media_queries#orientation) media feature. When `screen.orientation` changes, the {{domxref("screen.orientationchange")}} event is fired on the screen object. Locking the screen orientation is made possible by invoking the {{domxref("screen.lockOrientation")}} method, while the {{domxref("screen.unlockOrientation")}} method removes all the previous screen locks that have been set.

> **Примечание:** More information about the Screen Orientation API can be found in [Managing screen orientation](/ru/docs/Web/API/CSS_Object_Model/Managing_screen_orientation).

#### Fullscreen

You might need to present an element of your application (such as a {{ htmlelement("video") }}, for example) in fullscreen mode. You can achieve this by calling {{domxref("Element.requestFullscreen()")}} on that element. Bear in mind that many browsers still implement this with a vendor prefix, so you will probably need to fork your code something like this:

```js
var elem = document.getElementById("myvideo");
if (elem.requestFullscreen) {
  elem.requestFullscreen();
} else if (elem.msRequestFullscreen) {
  elem.msRequestFullscreen();
} else if (elem.mozRequestFullScreen) {
  elem.mozRequestFullScreen();
} else if (elem.webkitRequestFullscreen) {
  elem.webkitRequestFullscreen();
}
```

> **Примечание:** To find more out about adding fullscreen functionality your application, read our documentation about [using fullscreen mode](/ru/docs/Web/Guide/API/DOM/Using_full_screen_mode).

#### Drag & Drop

[Drag & Drop](/ru/docs/Web/Guide/HTML/Drag_and_drop) allows your application's users to click and hold the mouse button down over an element, drag it to another location, and release the mouse button to drop the element there.

Here is an example that allows a section of content to be dragged.

```html
<div
  draggable="true"
  ondragstart="event.dataTransfer.setData('text/plain', 'This text may be dragged')">
  This text <strong>may</strong> be dragged.  
</div>
```

in which we:

- Set the [`draggable`](/ru/docs/Web/HTML/Global_attributes#draggable) attribute to true on the element that you wish to make draggable
- Add a listener for the [`dragstart`](/ru/docs/Web/Events/dragstart) event and set the drag data within this listener

> **Примечание:** You can find more information in the [MDN Drag & Drop documentation](/ru/docs/Web/Guide/HTML/Drag_and_drop).

#### contentEditable

In open web apps any DOM element can be made directly editable using the [`contenteditable`](/ru/docs/Web/HTML/Global_attributes#contenteditable) attribute.

```html
<div contenteditable="true">This text can be edited by the user.</div>
```

> **Примечание:** Compatibility information, examples and other resources can be found in the [Content Editable guide](/ru/docs/Web/Guide/HTML/Content_Editable).

## Examples

- **[Tracking multiple touch points at a time](/en/DOM/Touch_events#Example)**
  - : This example tracks multiple touch points at a time, allowing the user to draw in a `{{htmlelement("canvas")}}` with more than one finger at a time. It will only work on a browser that supports touch events.
- **[Simple pointer lock demo](/ru/docs/Web/API/Pointer_Lock_API#example)**
  - : We've written a simple pointer lock demo to show you how to use it to set up a simple control system. The demo uses JavaScript to draw a ball inside a `{{htmlelement("canvas")}}` element. When you click the canvas, pointer lock is then used to remove the mouse pointer and allow you to move the ball directly using the mouse.
- **[contentEditable demo](http://html5demos.com/contenteditable)**
  - : This is a working example showing how contenteditable can be used to create an editable document section, the state of which is then saved using [LocalStorage](/ru/docs/Web/Guide/API/DOM/Storage).

## Руководства

- [События касаний (тач-события) - руководство](/ru/docs/Web/API/Touch_events)
- [Разбираемся с ориентацией экрана](/ru/docs/Web/API/CSS_Object_Model/ориентация_экрана)
- [Использование полноэкранного режима](/ru/docs/Web/Guide/API/DOM/Using_full_screen_mode)
- [Перетаскивание и сброс нескольких объектов](/ru/docs/Web/Guide/HTML/Dragging_and_Dropping_Multiple_Items)
- [Руководство по перетаскиванием](/ru/docs/Web/Guide/HTML/Drag_and_drop/Drag_operations)

## Смотрите также

- {{domxref("MouseEvent")}}
- {{domxref("KeyboardEvent")}}
- [Touch events](/ru/docs/Web/Guide/Events/Touch_events)
- {{domxref("Pointer_Lock_API")}}
- [Screen Orientation API](/ru/docs/Web/API/CSS_Object_Model/Managing_screen_orientation)
- [Fullscreen API](/ru/docs/Web/Guide/API/DOM/Using_full_screen_mode)
- [Drag & Drop](/ru/docs/Web/Guide/HTML/Drag_and_drop)
- [Content Editable](/ru/docs/Web/Guide/HTML/Content_Editable)
- [Keyboard events in Firefox OS TV](/en-US/Firefox_OS/Platform/Keyboard_events_in_Firefox_OS_TV)
- [Implementing TV remote control navigation](/ru/docs/Mozilla/Firefox_OS/TVs_connected_devices/TV_remote_control_navigation)
