---
title: appearance (-moz-appearance, -webkit-appearance)
slug: Web/CSS/appearance
tags:
  - Стилизация
  - кастомные свойства
translation_of: Web/CSS/appearance
---
{{CSSRef}}{{SeeCompatTable}}

CSS-свойство **`-moz-appearance`** используется в Gecko (Firefox) для отображения элемента, используя базовые стили платформы на основе темы операционной системы.

Свойство **`-webkit-appearance`** используется в браузерах WebKit-based (например, Safari) и Blink-based (например, Chrome, Opera) для того же эффекта. Заметьте, что Firefox и Edge также поддерживают `-webkit-appearance`, для обеспечения совместимости.

{{EmbedInteractiveExample("pages/css/appearance.html")}}

Это свойство часто используется в таблицах стилей [XUL](/ru/docs/Mozilla/Tech/XUL/Tutorial) для разработки пользовательских виджетов в стиле, соответствующем платформе. Оно, также, используется в реализации [XBL](/ru/docs/XBL) виджетов, которые поставляются с платформой Mozilla.

> **Примечание:** **Примечание о совместимости**: Если вы хотите использовать это свойство на веб-сайте, вы должны тестировать его очень осторожно. Хотя оно поддерживается в большинстве современных браузерах, его реализация широко варьируется. В старых браузерах, даже ключевое слово `none` не окажет одинакового эффекта на все элементы формы различных браузеров, а некоторые его совсем не поддерживают. Различия меньше в более современных браузерах.

## Синтаксис

```css
/* CSS модуль базового интерфейса 4 уровня, значения */
appearance: none;
appearance: auto;
appearance: button;
appearance: textfield;
appearance: searchfield;
appearance: textarea;
appearance: push-button;
appearance: button-bevel;
appearance: slider-horizontal;
appearance: checkbox;
appearance: radio;
appearance: square-button;
appearance: menulist;
appearance: menulist-button;
appearance: listbox;
appearance: meter;
appearance: progress-bar;

/* Частичный список доступных значений в Gecko */
-moz-appearance: scrollbarbutton-up;
-moz-appearance: button-bevel;

/* Частичный список доступных значений в WebKit/Blink (таких как Gecko и Edge) */
-webkit-appearance: media-mute-button;
-webkit-appearance: caret;
```

Свойство `-moz-appearance` может быть указано как одно значение, выбранное из списка ниже.

### Значения

`<appearance>` является одним из нижеследующих ключевых свойств:

| Value  | Demo          | Browser | Description |
| ------ | ------------- | ------- | ----------- |
| `none` | ```css hidden |

div{ color: black; -moz-appearance:none; -webkit-appearance:none; appearance:none; }

```````html hidden
<div>Lorem</div>
```{{EmbedLiveSample("sampleNone",100,50,"","", "nobutton")}}                                                                                              | Firefox Chrome Safari Edge | No special styling is applied. This is the default.                                                                                                                                                               |
| `auto` {{Experimental_Inline}}                                                                  | ```css hidden
div{ color: black; -moz-appearance: auto; -webkit-appearance: auto; appearance:auto; }
``````html hidden
<div>Lorem</div>
```{{EmbedLiveSample("sampleAuto",100,50,"","", "nobutton")}}                                                                                            | None                       | The user agent selects the appropriate special styling based on the element. Acts as `none` on elements with no special styling.                                                                                  |
| `attachment` {{Non-standard_Inline}}                                                            | ```css hidden
div{ color: black; -moz-appearance: attachment; -webkit-appearance: attachment; }
``````html hidden
<div>Lorem</div>
```{{EmbedLiveSample("sampleAttachment",100,50,"","", "nobutton")}}                                                                                         | Safari                     |                                                                                                                                                                                                                   |
| `borderless-attachment` {{Non-standard_Inline}}                                                 | ```css hidden
div{ color: black; -moz-appearance: borderless-attachment; -webkit-appearance: borderless-attachment; }
``````html hidden
<div>Lorem</div>
```{{EmbedLiveSample("sample-borderless-attachment",100,50,"","","nobutton")}}                                                   | Safari                     |                                                                                                                                                                                                                   |
| `button` {{Non-standard_Inline}}                                                                | ```css hidden
div { color: black; -moz-appearance: button; -webkit-appearance: button; }
``````html hidden
<div>Lorem</div>
```{{EmbedLiveSample("sampleButton",100,50,"","", "nobutton")}}                                                                                                    | Firefox Chrome Safari Edge | The element is drawn like a button.                                                                                                                                                                               |
| `button-arrow-down` {{Non-standard_Inline}}                                                     | ```css hidden
div { color: black; -moz-appearance: button-arrow-down; -webkit-appearance: button-arrow-down; }
``````html hidden
<div>Lorem</div>
```{{EmbedLiveSample("sampleButtonArrowDown",100,50,"","", "nobutton")}}                                                                  | Firefox                    | Removed in FF 64                                                                                                                                                                                                  |
| `button-arrow-next` {{Non-standard_Inline}}                                                     | ```css hidden
div { color: black; -moz-appearance: button-arrow-next; -webkit-appearance: button-arrow-next; }
``````html hidden
<div>Lorem</div>
```{{EmbedLiveSample("sampleButtonArrowNext",100,50,"","", "nobutton")}}                                                                  | Firefox                    | Removed in FF 64                                                                                                                                                                                                  |
| `button-arrow-previous` {{Non-standard_Inline}}                                                 | ```css hidden
div { color: black; -moz-appearance: button-arrow-previous; -webkit-appearance: button-arrow-previous; }
``````html hidden
<div>Lorem</div>
```{{EmbedLiveSample("sampleButtonArrowPrevious",100,50,"","", "nobutton")}}                                                      | Firefox                    | Removed in FF 64                                                                                                                                                                                                  |
| `button-arrow-up` {{Non-standard_Inline}}                                                       | ```css hidden
div { color: black; -moz-appearance: button-arrow-up; -webkit-appearance: button-arrow-up; }
``````html hidden
<div>Lorem</div>
```{{EmbedLiveSample("sampleButtonArrowUp",100,50,"","", "nobutton")}}                                                                          | Firefox                    | Removed in FF 64                                                                                                                                                                                                  |
| `button-bevel` {{Non-standard_Inline}}                                                          | ```css hidden
div { color: black; -moz-appearance: button-bevel; -webkit-appearance: button-bevel; }
``````html hidden
<div>Lorem</div>
```{{EmbedLiveSample("sampleButtonBevel",100,50,"","", "nobutton")}}                                                                                | Firefox Chrome Safari Edge |                                                                                                                                                                                                                   |
| `button-focus` {{Non-standard_Inline}}                                                          | ```css hidden
div { color: black; -moz-appearance: button-focus; -webkit-appearance: button-focus; }
``````html hidden
<div>Lorem</div>
```{{EmbedLiveSample("sampleButtonFocus",100,50,"","", "nobutton")}}                                                                                | Firefox                    | Removed in FF 64                                                                                                                                                                                                  |
| `caps-lock-indicator` {{Non-standard_Inline}}                                                   | ```css hidden
div{ color: black; -moz-appearance: caps-lock-indicator; -webkit-appearance: caps-lock-indicator; }
``````html hidden
<div>Lorem</div>
```{{EmbedLiveSample("sample-caps-lock-indicator",100,50,"","","nobutton")}}                                                           | Safari Edge                |                                                                                                                                                                                                                   |
| `caret` {{Non-standard_Inline}}                                                                 | ```css hidden
div { color: black; -moz-appearance: caret; -webkit-appearance: caret; }
``````html hidden
<div>Lorem</div>
```{{EmbedLiveSample("sampleCaret",100,50,"","", "nobutton")}}                                                                                                      | Firefox Chrome Safari Edge |                                                                                                                                                                                                                   |
| `checkbox` {{Non-standard_Inline}}                                                              | ```css hidden
div { color: black; -moz-appearance: checkbox; -webkit-appearance: checkbox; }
``````html hidden
<div>Lorem</div>
```{{EmbedLiveSample("sampleCheckbox",100,50,"","", "nobutton")}}                                                                                            | Firefox Chrome Safari Edge | The element is drawn like a checkbox, including only the actual "checkbox" portion.                                                                                                                               |
| `checkbox-container` {{Non-standard_Inline}}                                                    | ```css hidden
div { color: black; -moz-appearance: checkbox-container; -webkit-appearance: checkbox-container; }
``````html hidden
<div>Lorem</div>
```{{EmbedLiveSample("sampleCheckboxContainer",100,50,"","", "nobutton")}}                                                            | Firefox                    | The element is drawn like a container for a checkbox, which may include a prelighting background effect under certain platforms. Normally it would contain a label and a checkbox.                                |
| `checkbox-label` {{Non-standard_Inline}}                                                        | ```css hidden
div { color: black; -moz-appearance: checkbox-label; -webkit-appearance: checkbox-label; }
``````html hidden
<div>Lorem</div>
```{{EmbedLiveSample("sampleCheckboxLabel",100,50,"","", "nobutton")}}                                                                            | Firefox                    |                                                                                                                                                                                                                   |
| `checkmenuitem` {{Non-standard_Inline}}                                                         | ```css hidden
div { color: black; height: 20px; -moz-appearance: checkmenuitem; -webkit-appearance: checkmenuitem; }
``````html hidden
<div>Lorem</div>
```{{EmbedLiveSample("sampleCheckmenuitem",100,50,"","", "nobutton")}}                                                                | Firefox                    |                                                                                                                                                                                                                   |
| `color-well` {{Non-standard_Inline}}                                                            | ```css hidden
div{ color: black; -moz-appearance: color-well; -webkit-appearance: color-well; }
``````html hidden
<div>Lorem</div>
```{{EmbedLiveSample("sample-color-well",100,50,"","","nobutton")}}                                                                                         | Safari                     | `input type=color`                                                                                                                                                                                                |
| `continuous-capacity-level-indicator` {{Non-standard_Inline}}                                   | ```css hidden
div{ color: black; -moz-appearance: continuous-capacity-level-indicator; -webkit-appearance: continuous-capacity-level-indicator; }
``````html hidden
<div>Lorem</div>
```{{EmbedLiveSample("sample-continuous-capacity-level-indicator",100,50,"","","nobutton")}}   | Safari                     |                                                                                                                                                                                                                   |
| `default-button` {{Non-standard_Inline}}                                                        | ```css hidden
div{ color: black; -moz-appearance: default-button; -webkit-appearance: default-button; }
``````html hidden
<div>Lorem</div>
```{{EmbedLiveSample("sample-default-button",100,50,"","","nobutton")}}                                                                         | Safari Edge                |                                                                                                                                                                                                                   |
| `discrete-capacity-level-indicator` {{Non-standard_Inline}}                                     | ```css hidden
div{ color: black; -moz-appearance: discrete-capacity-level-indicator; -webkit-appearance: discrete-capacity-level-indicator; }
``````html hidden
<div>Lorem</div>
```{{EmbedLiveSample("sample-discrete-capacity-level-indicator",100,50,"","","nobutton")}}           | Safari                     |                                                                                                                                                                                                                   |
| `dualbutton` {{Non-standard_Inline}}                                                            | ```css hidden
div { color: black; -moz-appearance: dualbutton; -webkit-appearance: dualbutton; }
``````html hidden
<div>Lorem</div>
```{{EmbedLiveSample("sampleDualButton",100,50,"","", "nobutton")}}                                                                                        | Firefox                    | Removed in FF 64                                                                                                                                                                                                  |
| `groupbox` {{Non-standard_Inline}}                                                              | ```css hidden
div { color: black; -moz-appearance: groupbox; -webkit-appearance: groupbox; }
``````html hidden
<div>Lorem</div>
```{{EmbedLiveSample("sampleGroupbox",100,50,"","", "nobutton")}}                                                                                            | Firefox                    | Removed in FF 64                                                                                                                                                                                                  |
| `inner-spin-button` {{Non-standard_Inline}}                                                     | ```css hidden
div{ color: black; -webkit-appearance: inner-spin-button; }
``````html hidden
<div>Lorem</div>
```{{EmbedLiveSample("sampleInnerSpinButton",100,50,"","", "nobutton")}}                                                                                                       | Firefox Chrome Safari      |                                                                                                                                                                                                                   |
| `image-controls-button` {{Non-standard_Inline}}                                                 | ```css hidden
div{ color: black; -moz-appearance: image-controls-button; -webkit-appearance: image-controls-button; }
``````html hidden
<div>Lorem</div>
```{{EmbedLiveSample("sample-image-controls-button",100,50,"","","nobutton")}}                                                   | Safari                     |                                                                                                                                                                                                                   |
| `list-button` {{Non-standard_Inline}}                                                           | ```css hidden
div{ color: black; -moz-appearance: list-button; -webkit-appearance: list-button; }
``````html hidden
<div>Lorem</div>
```{{EmbedLiveSample("sample-list-button",100,50,"","","nobutton")}}                                                                                   | Safari                     | datalist                                                                                                                                                                                                          |
| `listbox` {{Non-standard_Inline}}                                                               | ```css hidden
div { color: black; height:20px; -moz-appearance: listbox; -webkit-appearance: listbox; }
``````html hidden
<div>Lorem</div>
```{{EmbedLiveSample("sampleListBox",100,50,"","", "nobutton")}}                                                                                     | Firefox Chrome Safari Edge |                                                                                                                                                                                                                   |
| `listitem` {{Non-standard_Inline}}                                                              | ```css hidden
div { color: black; -moz-appearance: listitem; -webkit-appearance: listitem; }
``````html hidden
<div>Lorem</div>
```{{EmbedLiveSample("sampleListItem",100,50,"","", "nobutton")}}                                                                                            | Firefox Chrome Safari Edge |                                                                                                                                                                                                                   |
| `media-enter-fullscreen-button` {{Non-standard_Inline}}                                         | ```css hidden
div{ color: black; -webkit-appearance: media-enter-fullscreen-button; }
``````html hidden
<div>Lorem</div>
```{{EmbedLiveSample("sampleMediaEnterFullscreenButton",100,50,"","", "nobutton")}}                                                                           | Chrome Safari              |                                                                                                                                                                                                                   |
| `media-exit-fullscreen-button` {{Non-standard_Inline}}                                          | ```css hidden
div{ color: black; -webkit-appearance: media-exit-fullscreen-button; }
``````html hidden
<div>Lorem</div>
```{{EmbedLiveSample("sampleMediaExitFullscreenButton",100,50,"","", "nobutton")}}                                                                                | Chrome Safari              |                                                                                                                                                                                                                   |
| `media-fullscreen-volume-slider` {{Non-standard_Inline}}                                        | ```css hidden
div{ color: black; -moz-appearance: media-fullscreen-volume-slider; -webkit-appearance: media-fullscreen-volume-slider; }
``````html hidden
<div>Lorem</div>
```{{EmbedLiveSample("sample-media-fullscreen-volume-slider",100,50,"","","nobutton")}}                     | Safari                     |                                                                                                                                                                                                                   |
| `media-fullscreen-volume-slider-thumb` {{Non-standard_Inline}}                                  | ```css hidden
div{ color: black; -moz-appearance: media-fullscreen-volume-slider-thumb; -webkit-appearance: media-fullscreen-volume-slider-thumb; }
``````html hidden
<div>Lorem</div>
```{{EmbedLiveSample("sample-media-fullscreen-volume-slider-thumb",100,50,"","","nobutton")}} | Safari                     |                                                                                                                                                                                                                   |
| `media-mute-button` {{Non-standard_Inline}}                                                     | ```css hidden
div{ color: black; -webkit-appearance: media-mute-button; }
``````html hidden
<div>Lorem</div>
```{{EmbedLiveSample("sampleMediaMuteButton",100,50,"","", "nobutton")}}                                                                                                       | Chrome Safari Edge         |                                                                                                                                                                                                                   |
| `media-play-button` {{Non-standard_Inline}}                                                     | ```css hidden
div{ color: black; -webkit-appearance: media-play-button; }
``````html hidden
<div>Lorem</div>
```{{EmbedLiveSample("sampleMediaPlayButton",100,50,"","", "nobutton")}}                                                                                                       | Chrome Safari Edge         |                                                                                                                                                                                                                   |
| `media-overlay-play-button` {{Non-standard_Inline}}                                             | ```css hidden
div{ color: black; -webkit-appearance: media-overlay-play-button; }
``````html hidden
<div>Lorem</div>
```{{EmbedLiveSample("sampleMediaOverlayPlayButton",100,50,"","", "nobutton")}}                                                                                       | Chrome Safari              |                                                                                                                                                                                                                   |
| `media-return-to-realtime-button` {{Non-standard_Inline}}                                       | ```css hidden
div{ color: black; -moz-appearance: media-return-to-realtime-button; -webkit-appearance: media-return-to-realtime-button; }
``````html hidden
<div>Lorem</div>
```{{EmbedLiveSample("sample-media-return-to-realtime-button",100,50,"","","nobutton")}}                   | Safari                     |                                                                                                                                                                                                                   |
| `media-rewind-button` {{Non-standard_Inline}}                                                   | ```css hidden
div{ color: black; -moz-appearance: media-rewind-button; -webkit-appearance: media-rewind-button; }
``````html hidden
<div>Lorem</div>
```{{EmbedLiveSample("sample-media-rewind-button",100,50,"","","nobutton")}}                                                           | Safari                     |                                                                                                                                                                                                                   |
| `media-seek-back-button` {{Non-standard_Inline}}                                                | ```css hidden
div{ color: black; -moz-appearance: media-seek-back-button; -webkit-appearance: media-seek-back-button; }
``````html hidden
<div>Lorem</div>
```{{EmbedLiveSample("sample-media-seek-back-button",100,50,"","","nobutton")}}                                                 | Safari Edge                |                                                                                                                                                                                                                   |
| `media-seek-forward-button` {{Non-standard_Inline}}                                             | ```css hidden
div{ color: black; -moz-appearance: media-seek-forward-button; -webkit-appearance: media-seek-forward-button; }
``````html hidden
<div>Lorem</div>
```{{EmbedLiveSample("sample-media-seek-forward-button",100,50,"","","nobutton")}}                                       | Safari Edge                |                                                                                                                                                                                                                   |
| `media-toggle-closed-captions-button` {{Non-standard_Inline}}                                   | ```css hidden
div{ color: black; -webkit-appearance: media-toggle-closed-captions-button; }
``````html hidden
<div>Lorem</div>
```{{EmbedLiveSample("sampleMediaToggleClosedCaptionsButton",100,50,"","", "nobutton")}}                                                                 | Chrome Safari              |                                                                                                                                                                                                                   |
| `media-slider` {{Non-standard_Inline}}                                                          | ```css hidden
div{ color: black; -webkit-appearance: media-slider; }
``````html hidden
<div>Lorem</div>
```{{EmbedLiveSample("sampleMediaSlider",100,50,"","", "nobutton")}}                                                                                                                | Chrome Safari Edge         |                                                                                                                                                                                                                   |
| `media-sliderthumb` {{Non-standard_Inline}}                                                     | ```css hidden
div{ color: black; -webkit-appearance: media-sliderthumb; }
``````html hidden
<div>Lorem</div>
```{{EmbedLiveSample("sampleMediaSliderThumb",100,50,"","", "nobutton")}}                                                                                                       | Chrome Safari Edge         |                                                                                                                                                                                                                   |
| `media-volume-slider-container` {{Non-standard_Inline}}                                         | ```css hidden
div{ color: black; -webkit-appearance: media-volume-slider-container; }
``````html hidden
<div>Lorem</div>
```{{EmbedLiveSample("sampleMediaVolumeSliderContainer",100,50,"","", "nobutton")}}                                                                           | Chrome Safari              |                                                                                                                                                                                                                   |
| `media-volume-slider-mute-button` {{Non-standard_Inline}}                                       | ```css hidden
div{ color: black; -moz-appearance: media-volume-slider-mute-button; -webkit-appearance: media-volume-slider-mute-button; }
``````html hidden
<div>Lorem</div>
```{{EmbedLiveSample("sample-media-volume-slider-mute-button",100,50,"","","nobutton")}}                   | Safari                     |                                                                                                                                                                                                                   |
| `media-volume-slider` {{Non-standard_Inline}}                                                   | ```css hidden
div{ color: black; -webkit-appearance: media-volume-slider; }
``````html hidden
<div>Lorem</div>
```{{EmbedLiveSample("sampleMediaVolumeSlider",100,50,"","", "nobutton")}}                                                                                                 | Chrome Safari              |                                                                                                                                                                                                                   |
| `media-volume-sliderthumb` {{Non-standard_Inline}}                                              | ```css hidden
div{ color: black; -webkit-appearance: media-volume-slider-thumb; }
``````html hidden
<div>Lorem</div>
```{{EmbedLiveSample("sampleMediaVolumeSliderThumb",100,50,"","", "nobutton")}}                                                                                       | Chrome Safari              |                                                                                                                                                                                                                   |
| `media-controls-background` {{Non-standard_Inline}}                                             | ```css hidden
div{ color: black; -webkit-appearance: media-controls-background; }
``````html hidden
<div>Lorem</div>
```{{EmbedLiveSample("sampleMediaControlsBackground",100,50,"","", "nobutton")}}                                                                                   | Chrome Safari              |                                                                                                                                                                                                                   |
| `media-controls-dark-bar-background` {{Non-standard_Inline}}                                    | ```css hidden
div{ color: black; -moz-appearance: media-controls-dark-bar-background; -webkit-appearance: media-controls-dark-bar-background; }
``````html hidden
<div>Lorem</div>
```{{EmbedLiveSample("sample-media-controls-dark-bar-background",100,50,"","","nobutton")}}         | Safari                     |                                                                                                                                                                                                                   |
| `media-controls-fullscreen-background` {{Non-standard_Inline}}                                  | ```css hidden
div{ color: black; -webkit-appearance: media-controls-fullscreen-background; }
``````html hidden
<div>Lorem</div>
```{{EmbedLiveSample("sampleMediaControlsFullscreenBackground",100,50,"","", "nobutton")}}                                                            | Chrome Safari              |                                                                                                                                                                                                                   |
| `media-controls-light-bar-background` {{Non-standard_Inline}}                                   | ```css hidden
div{ color: black; -moz-appearance: media-controls-light-bar-background; -webkit-appearance: media-controls-light-bar-background; }
``````html hidden
<div>Lorem</div>
```{{EmbedLiveSample("sample-media-controls-light-bar-background",100,50,"","","nobutton")}}   | Safari                     |                                                                                                                                                                                                                   |
| `media-current-time-display` {{Non-standard_Inline}}                                            | ```css hidden
div{ color: black; -webkit-appearance: media-current-time-display; }
``````html hidden
<div>Lorem</div>
```{{EmbedLiveSample("sampleMediaCurrentTimeDisplay",100,50,"","", "nobutton")}}                                                                                  | Chrome Safari              |                                                                                                                                                                                                                   |
| `media-time-remaining-display` {{Non-standard_Inline}}                                          | ```css hidden
div{ color: black; -webkit-appearance: media-time-remaining-display; }
``````html hidden
<div>Lorem</div>
```{{EmbedLiveSample("sampleMediaTimeRemainingDisplay",100,50,"","", "nobutton")}}                                                                                | Chrome Safari              |                                                                                                                                                                                                                   |
| `menuarrow` {{Non-standard_Inline}}                                                             | ```css hidden
div { color: black; -moz-appearance: menuarrow; -webkit-appearance: menuarrow; }
``````html hidden
<div>Lorem</div>
```{{EmbedLiveSample("sampleMenuArrow",100,50,"","", "nobutton")}}                                                                                          | Firefox                    | Removed in Firefox 64                                                                                                                                                                                             |
| `menubar` {{Non-standard_Inline}}                                                               | ```css hidden
div { color: balck; -moz-appearance: menubar; -webkit-appearance: menubar; }
``````html hidden
<div>Lorem</div>
```{{EmbedLiveSample("sampleMenubar",100,50,"","", "nobutton")}}                                                                                                  | Firefox                    | Removed in Firefox 64                                                                                                                                                                                             |
| `menucheckbox` {{Non-standard_Inline}}                                                          | ```css hidden
div { color: black; -moz-appearance: menucheckbox; -webkit-appearance: menucheckbox; }
``````html hidden
<div>Lorem</div>
```{{EmbedLiveSample("sampleMenuCheckbox",100,50,"","", "nobutton")}}                                                                                | Firefox                    | Removed in Firefox 64                                                                                                                                                                                             |
| `menuimage` {{Non-standard_Inline}}                                                             | ```css hidden
div { color: black; -moz-appearance: menuimage; -webkit-appearance: menuimage; }
``````html hidden
<div>Lorem</div>
```{{EmbedLiveSample("sampleMenuImage",100,50,"","", "nobutton")}}                                                                                          | Firefox                    | Removed in Firefox 64                                                                                                                                                                                             |
| `menuitem` {{Non-standard_Inline}}                                                              | ```css hidden
div { color: black; -moz-appearance: menuitem; -webkit-appearance: menuitem; }
``````html hidden
<div>Lorem</div>
```{{EmbedLiveSample("sampleMenuItem",100,50,"","", "nobutton")}}                                                                                            | Firefox                    | Removed in Firefox 64, the element was styled as menu item, item is highlighted when hovered.                                                                                                                     |
| `menuitemtext` {{Non-standard_Inline}}                                                          | ```css hidden
div { color: black; -moz-appearance: menuitemtext; -webkit-appearance: menuitemtext; }
``````html hidden
<div>Lorem</div>
```{{EmbedLiveSample("sampleMenuItemText",100,50,"","", "nobutton")}}                                                                                | Firefox                    | Removed in FF 64                                                                                                                                                                                                  |
| `menulist` {{Non-standard_Inline}}                                                              | ```css hidden
div { color: black; -moz-appearance: menulist; -webkit-appearance: menulist; }
``````html hidden
<div>Lorem</div>
```{{EmbedLiveSample("sampleMenuList",100,50,"","", "nobutton")}}                                                                                            | Firefox Chrome Safari Edge |                                                                                                                                                                                                                   |
| `menulist-button` {{Non-standard_Inline}}                                                       | ```css hidden
div { color: black; -moz-appearance: menulist-button; -webkit-appearance: menulist-button; }
``````html hidden
<div>Lorem</div>
```{{EmbedLiveSample("sampleMenuListButton",100,50,"","", "nobutton")}}                                                                      | Firefox Chrome Safari Edge | The element is styled as a button that would indicate a menulist can be opened.                                                                                                                                   |
| `menulist-text` {{Non-standard_Inline}}                                                         | ```css hidden
div { color: black; -moz-appearance: menulist-text; -webkit-appearance: menulist-text; }
``````html hidden
<div>Lorem</div>
```{{EmbedLiveSample("sampleMenuListText",100,50,"","", "nobutton")}}                                                                              | Firefox Chrome Safari Edge |                                                                                                                                                                                                                   |
| `menulist-textfield` {{Non-standard_Inline}}                                                    | ```css hidden
div { color: black; -moz-appearance: menulist-textfield; -webkit-appearance: menulist-textfield; }
``````html hidden
<div>Lorem</div>
```{{EmbedLiveSample("sampleMenuListTextfield",100,50,"","", "nobutton")}}                                                            | Firefox Chrome Safari Edge | The element is styled as the text field for a menulist. (Not implemented for the Windows platform)                                                                                                                |
| `menupopup` {{Non-standard_Inline}}                                                             | ```css hidden
div { color: black; -moz-appearance: menupopup; -webkit-appearance: menupopup; }
``````html hidden
<div>Lorem</div>
```{{EmbedLiveSample("sampleMenuPopup",100,50,"","", "nobutton")}}                                                                                          | Firefox                    | Removed in Firefox 64                                                                                                                                                                                             |
| `menuradio` {{Non-standard_Inline}}                                                             | ```css hidden
div { color: black; -moz-appearance: menuradio; -webkit-appearance: menuradio; }
``````html hidden
<div>Lorem</div>
```{{EmbedLiveSample("sampleMenuRadio",100,50,"","", "nobutton")}}                                                                                          | Firefox                    | Removed in Firefox 64                                                                                                                                                                                             |
| `menuseparator` {{Non-standard_Inline}}                                                         | ```css hidden
div { color: transparent; -moz-appearance: menuseparator; -webkit-appearance: menuseparator; }
``````html hidden
<div>Lorem</div>
```{{EmbedLiveSample("sampleMenuSeparator",100,50,"","", "nobutton")}}                                                                        | Firefox                    | Removed in Firefox 64                                                                                                                                                                                             |
| `meter`                                                                                                  | ```css hidden
div{ color: black; -webkit-appearance: meter; }
``````html hidden
<div>Lorem</div>
```{{EmbedLiveSample("sampleMeter",100,50,"","", "nobutton")}}                                                                                                                               | Chrome Safari Firefox      | New in Fx 64                                                                                                                                                                                                      |
| `meterbar` {{Non-standard_Inline}}                                                              | ```css hidden
div { color: black; -moz-appearance: meterbar; -webkit-appearance: meterbar; }
``````html hidden
<div>Lorem</div>
```{{EmbedLiveSample("sampleMeterbar",100,50,"","", "nobutton")}}                                                                                            | Firefox                    | New in Fx 16. Use `meter` instead                                                                                                                                                                                 |
| `meterchunk` {{Non-standard_Inline}}                                                            | ```css hidden
div { color: black; -moz-appearance: meterchunk; -webkit-appearance: meterchunk; }
``````html hidden
<div>Lorem</div>
```{{EmbedLiveSample("sampleMeterchunk",100,50,"","", "nobutton")}}                                                                                        | Firefox                    | New in Fx 16. Removed in Firefox 64.                                                                                                                                                                              |
| `number-input` {{Non-standard_Inline}}                                                          | ```css hidden
div { color: black; -moz-appearance: number-input; -webkit-appearance: number-input; }
``````html hidden
<div>Lorem</div>
```{{EmbedLiveSample("sampleNumberInput",100,50,"","", "nobutton")}}                                                                                | Firefox                    |                                                                                                                                                                                                                   |
| `progress-bar`                                                                                           | ```css hidden
div{ color: black; -webkit-appearance: progress-bar; }
``````html hidden
<div>Lorem</div>
```{{EmbedLiveSample("sampleProgressBarWebkit",100,50,"","", "nobutton")}}                                                                                                        | Chrome Safari Firefox      | New in Fx 64                                                                                                                                                                                                      |
| `progress-bar-value` {{Non-standard_Inline}}                                                    | ```css hidden
div{ color: black; -webkit-appearance: progress-bar-value; }
``````html hidden
<div>Lorem</div>
```{{EmbedLiveSample("sampleProgressBarValueWebkit",100,50,"","", "nobutton")}}                                                                                              | Chrome Safari              |                                                                                                                                                                                                                   |
| `progressbar` {{Non-standard_Inline}}                                                           | ```css hidden
div { color: black; -moz-appearance: progressbar; -webkit-appearance: progressbar; }
``````html hidden
<div>Lorem</div>
```{{EmbedLiveSample("sampleProgressBar",100,50,"","", "nobutton")}}                                                                                  | Firefox                    | The element is styled like a progress bar. Use `progress-bar` instead                                                                                                                                             |
| `progressbar-vertical` {{Non-standard_Inline}}                                                  | ```css hidden
div { color: transparent; -moz-appearance: progressbar-vertical; -webkit-appearance: preogressbar-vertical; }
``````html hidden
<div>Lorem</div>
```{{EmbedLiveSample("sampleProgressBarVertical",100,50,"","", "nobutton")}}                                                 | Firefox                    |                                                                                                                                                                                                                   |
| `progresschunk` {{Non-standard_Inline}}                                                         | ```css hidden
div { color: black; -moz-appearance: progresschunk; -webkit-appearance: progresschunk; }
``````html hidden
<div>Lorem</div>
```{{EmbedLiveSample("sampleProgressChunk",100,50,"","", "nobutton")}}                                                                              | Firefox                    | Removed in Firefox 64.                                                                                                                                                                                            |
| `progresschunk-vertical` {{Non-standard_Inline}}                                                | ```css hidden
div { color: black; -moz-appearance: progresschunk-vertical; -webkit-appearance: progresschunk-vertical; }
``````html hidden
<div>Lorem</div>
```{{EmbedLiveSample("sampleProgressChunkVertical",100,50,"","", "nobutton")}}                                                | Firefox                    | Removed in Firefox 64.                                                                                                                                                                                            |
| `push-button` {{Non-standard_Inline}}                                                           | ```css hidden
div{ color: black; -webkit-appearance: push-button; }
``````html hidden
<div>Lorem</div>
```{{EmbedLiveSample("samplePushButton",100,50,"","", "nobutton")}}                                                                                                                     | Chrome Safari Edge         |                                                                                                                                                                                                                   |
| `radio` {{Non-standard_Inline}}                                                                 | ```css hidden
div { color: black; -moz-appearance: radio; -webkit-appearance: radio; }
``````html hidden
<div>Lorem</div>
```{{EmbedLiveSample("sampleRadio",100,50,"","", "nobutton")}}                                                                                                      | Firefox Chrome Safari Edge | The element is drawn like a radio button, including only the actual "radio button" portion.                                                                                                                       |
| `radio-container` {{Non-standard_Inline}}                                                       | ```css hidden
div { color: black; -moz-appearance: radio-container; -webkit-appearance: radio-container; }
``````html hidden
<div>Lorem</div>
```{{EmbedLiveSample("sampleRadioContainer",100,50,"","", "nobutton")}}                                                                      | Firefox                    | Removed in Firefox 64, the element is drawn like a container for a radio button, which may include a prelighting background effect under certain platforms. Normally it would contain a label and a radio button. |
| `radio-label` {{Non-standard_Inline}}                                                           | ```css hidden
div { color: black; -moz-appearance: radio-label; -webkit-appearance: radio-label; }
``````html hidden
<div>Lorem</div>
```{{EmbedLiveSample("sampleRadioLabel",100,50,"","", "nobutton")}}                                                                                      | Firefox                    | Removed in Firefox 64.                                                                                                                                                                                            |
| `radiomenuitem` {{Non-standard_Inline}}                                                         | ```css hidden
div { color: black; -moz-appearance: radiomenuitem; -webkit-appearance: radiomenuitem; }
``````html hidden
<div>Lorem</div>
```{{EmbedLiveSample("sampleRadioMenuItem",100,50,"","", "nobutton")}}                                                                              | Firefox                    | Removed in Firefox 64.                                                                                                                                                                                            |
| `range` {{Non-standard_Inline}}                                                                 | ```css hidden
div { color: black; -moz-appearance: range; -webkit-appearance: range; }
``````html hidden
<div>Lorem</div>
```{{EmbedLiveSample("sampleRange",100,50,"","", "nobutton")}}                                                                                                      | Firefox                    |                                                                                                                                                                                                                   |
| `range-thumb` {{Non-standard_Inline}}                                                           | ```css hidden
div { color: black; -moz-appearance: range-thumb; -webkit-appearance: range-thumb; }
``````html hidden
<div>Lorem</div>
```{{EmbedLiveSample("sampleRangeThumb",100,50,"","", "nobutton")}}                                                                                      | Firefox                    |                                                                                                                                                                                                                   |
| `rating-level-indicator` {{Non-standard_Inline}}                                                | ```css hidden
div{ color: black; -moz-appearance: rating-level-indicator; -webkit-appearance: rating-level-indicator; }
``````html hidden
<div>Lorem</div>
```{{EmbedLiveSample("sample-rating-level-indicator",100,50,"","","nobutton")}}                                                 | Safari                     |                                                                                                                                                                                                                   |
| `resizer` {{Non-standard_Inline}}                                                               | ```css hidden
div { color: transparent; -moz-appearance: resizer; -webkit-appearance: resizer; }
``````html hidden
<div>Lorem</div>
```{{EmbedLiveSample("sampleResizer",100,50,"","", "nobutton")}}                                                                                            | Firefox                    | Removed in Firefox 63                                                                                                                                                                                             |
| `resizerpanel` {{Non-standard_Inline}}                                                          | ```css hidden
div { color: black; -moz-appearance: resizerpanel; -webkit-appearance: resizerpanel; }
``````html hidden
<div>Lorem</div>
```{{EmbedLiveSample("sampleResizerPanel",100,50,"","", "nobutton")}}                                                                                | Firefox                    | Removed in Firefox 63.                                                                                                                                                                                            |
| `scale-horizontal` {{Non-standard_Inline}}                                                      | ```css hidden
div { color: transparent; -moz-appearance: scale-horizontal; -webkit-appearance: scale-horizontal; }
``````html hidden
<div>Lorem</div>
```{{EmbedLiveSample("sampleScaleHorizontal",100,50,"","", "nobutton")}}                                                              | Firefox                    |                                                                                                                                                                                                                   |
| `scalethumbend` {{Non-standard_Inline}}                                                         | ```css hidden
div { color: black; -moz-appearance: scalethumbend; -webkit-appearance: scalethumbend; }
``````html hidden
<div>Lorem</div>
```{{EmbedLiveSample("sampleThumbEnd",100,50,"","", "nobutton")}}                                                                                  | Firefox                    |                                                                                                                                                                                                                   |
| `scalethumb-horizontal` {{Non-standard_Inline}}                                                 | ```css hidden
div { color: transparent; -moz-appearance: scalethumb-horizontal; -webkit-appearance: scalethumb-horizontal; }
``````html hidden
<div>Lorem</div>
```{{EmbedLiveSample("sampleScaleThumbHorizontal",100,50,"","", "nobutton")}}                                            | Firefox                    |                                                                                                                                                                                                                   |
| `scalethumbstart` {{Non-standard_Inline}}                                                       | ```css hidden
div { color: black; -moz-appearance: scalethumbstart; -webkit-appearance: scalethumbstart; }
``````html hidden
<div>Lorem</div>
```{{EmbedLiveSample("sampleScaleThumbStart",100,50,"","", "nobutton")}}                                                                      | Firefox                    |                                                                                                                                                                                                                   |
| `scalethumbtick` {{Non-standard_Inline}}                                                        | ```css hidden
div { color: black; -moz-appearance: scalethumbtick; -webkit-appearance: scalethumbtick; }
``````html hidden
<div>Lorem</div>
```{{EmbedLiveSample("sampleScaleThumbTick",100,50,"","", "nobutton")}}                                                                        | Firefox                    |                                                                                                                                                                                                                   |
| `scalethumb-vertical` {{Non-standard_Inline}}                                                   | ```css hidden
div { color: black; -moz-appearance: scalethumb-vertical; -webkit-appearance: scalethumb-vertical; }
``````html hidden
<div>Lorem</div>
```{{EmbedLiveSample("sampleScaleThumbVertical",100,50,"","", "nobutton")}}                                                          | Firefox                    |                                                                                                                                                                                                                   |
| `scale-vertical` {{Non-standard_Inline}}                                                        | ```css hidden
div { color: transparent; -moz-appearance: scale-vertical; -webkit-appearance: scale-vertical; }
``````html hidden
<div>Lorem</div>
```{{EmbedLiveSample("sampleScaleVertical",100,50,"","", "nobutton")}}                                                                      | Firefox                    |                                                                                                                                                                                                                   |
| `scrollbarbutton-down` {{Non-standard_Inline}}                                                  | ```css hidden
div { color: black; -moz-appearance: scrollbarbutton-down; -webkit-appearance: scrollbarbutton-down; }
``````html hidden
<div>Lorem</div>
```{{EmbedLiveSample("sampleScrollbarButtonDown",100,50,"","", "nobutton")}}                                                        | Firefox                    | Removed in Firefox 63.                                                                                                                                                                                            |
| `scrollbarbutton-left` {{Non-standard_Inline}}                                                  | ```css hidden
div { color: black; -moz-appearance: scrollbarbutton-left; -webkit-appearance: scrollbarbutton-left; }
``````html hidden
<div>Lorem</div>
```{{EmbedLiveSample("sampleScrollbarButtonLeft",100,50,"","", "nobutton")}}                                                        | Firefox                    | Removed in Firefox 63.                                                                                                                                                                                            |
| `scrollbarbutton-right` {{Non-standard_Inline}}                                                 | ```css hidden
div { color: black; -moz-appearance: scrollbarbutton-right; -webkit-appearance: scrollbarbutton-right; }
``````html hidden
<div>Lorem</div>
```{{EmbedLiveSample("sampleScrollbarButtonRight",100,50,"","", "nobutton")}}                                                  | Firefox                    | Removed in Firefox 63.                                                                                                                                                                                            |
| `scrollbarbutton-up` {{Non-standard_Inline}}                                                    | ```css hidden
div { color: black; -moz-appearance: scrollbarbutton-up; -webkit-appearance: scrollbarbutton-up; }
``````html hidden
<div>Lorem</div>
```{{EmbedLiveSample("sampleScrollbarButtonUp",100,50,"","", "nobutton")}}                                                            | Firefox                    | Removed in Firefox 63.                                                                                                                                                                                            |
| `scrollbarthumb-horizontal` {{Non-standard_Inline}}                                             | ```css hidden
div { color: black; -moz-appearance: scrollbarthumb-horizontal; -webkit-appearance: scrollbarthumb-horizontal; }
``````html hidden
<div>Lorem</div>
```{{EmbedLiveSample("sampleScrollbarThumbHorizontal",100,50,"","", "nobutton")}}                                      | Firefox                    |                                                                                                                                                                                                                   |
| `scrollbarthumb-vertical` {{Non-standard_Inline}}                                               | ```css hidden
div { color: black; -moz-appearance: scrollbarthumb-vertical; -webkit-appearance: scrollbarthumb-vertical; }
``````html hidden
<div>Lorem</div>
```{{EmbedLiveSample("sampleScrollbarThumbVertical",100,50,"","", "nobutton")}}                                              | Firefox                    |                                                                                                                                                                                                                   |
| `scrollbartrack-horizontal` {{Non-standard_Inline}}                                             | ```css hidden
div { color: black; -moz-appearance: scrollbartrack-horizontal; -webkit-appearance: scrollbartrack-horizontal; }
``````html hidden
<div>Lorem</div>
```{{EmbedLiveSample("sampleScrollbarTrackHorizontal",100,50,"","", "nobutton")}}                                      | Firefox                    |                                                                                                                                                                                                                   |
| `scrollbartrack-vertical` {{Non-standard_Inline}}                                               | ```css hidden
div { color: black; -moz-appearance: scrollbartrack-vertical; -webkit-appearance: scrollbarbartrack-vertical; }
``````html hidden
<div>Lorem</div>
```{{EmbedLiveSample("sampleScrollbarTrackVertical",100,50,"","", "nobutton")}}                                           | Firefox                    |                                                                                                                                                                                                                   |
| `searchfield` {{Non-standard_Inline}}                                                           | ```css hidden
div { color: black; -moz-appearance: searchfield; -webkit-appearance: searchfield; }
``````html hidden
<div>Lorem</div>
```{{EmbedLiveSample("sampleSearchField",100,50,"","", "nobutton")}}                                                                                  | Firefox Chrome Safari Edge |                                                                                                                                                                                                                   |
| `searchfield-decoration` {{Non-standard_Inline}}                                                | ```css hidden
div{ color: black; -moz-appearance: searchfield-decoration; -webkit-appearance: searchfield-decoration; }
``````html hidden
<div>Lorem</div>
```{{EmbedLiveSample("sample-searchfield-decoration",100,50,"","","nobutton")}}                                                 | Safari Edge                |                                                                                                                                                                                                                   |
| `searchfield-results-decoration` {{Non-standard_Inline}}                                        | ```css hidden
div{ color: black; -moz-appearance: searchfield-results-decoration; -webkit-appearance: searchfield-results-decoration; }
``````html hidden
<div>Lorem</div>
```{{EmbedLiveSample("sample-searchfield-results-decoration",100,50,"","","nobutton")}}                     | Safari Edge                |                                                                                                                                                                                                                   |
| `searchfield-results-button` {{Non-standard_Inline}}                                            | ```css hidden
div{ color: black; -moz-appearance: searchfield-results-button; -webkit-appearance: searchfield-results-button; }
``````html hidden
<div>Lorem</div>
```{{EmbedLiveSample("sample-searchfield-results-button",100,50,"","","nobutton")}}                                 | Safari Edge                |                                                                                                                                                                                                                   |
| `searchfield-cancel-button` {{Non-standard_Inline}}                                             | ```css hidden
div{ color: black; -webkit-appearance: searchfield-cancel-button; }
``````html hidden
<div>Lorem</div>
```{{EmbedLiveSample("sampleSearchFieldCancelButton",100,50,"","", "nobutton")}}                                                                                   | Chrome Safari Edge         |                                                                                                                                                                                                                   |
| `snapshotted-plugin-overlay` {{Non-standard_Inline}}                                            | ```css hidden
div{ color: black; -moz-appearance: snapshotted-plugin-overlay; -webkit-appearance: snapshotted-plugin-overlay; }
``````html hidden
<div>Lorem</div>
```{{EmbedLiveSample("sample-snapshotted-plugin-overlay",100,50,"","","nobutton")}}                                 | Safari                     |                                                                                                                                                                                                                   |
| `separator` {{Non-standard_Inline}}                                                             | ```css hidden
div { color: transparent; -moz-appearance: separator; -webkit-appearance: separator; }
``````html hidden
<div>Lorem</div>
```{{EmbedLiveSample("sampleSeparator",100,50,"","", "nobutton")}}                                                                                    | Firefox                    | Removed in Firefox 64.                                                                                                                                                                                            |
| `sheet` {{Non-standard_Inline}}                                                                 | ```css hidden
div { color: black; -moz-appearance: sheet; -webkit-appearance: sheet; }
``````html hidden
<div>Lorem</div>
```{{EmbedLiveSample("sampleSheet",100,50,"","", "nobutton")}}                                                                                                      | None                       |                                                                                                                                                                                                                   |
| `slider-horizontal` {{Non-standard_Inline}}                                                     | ```css hidden
div{ color: black; -webkit-appearance: slider-horizontal; }
``````html hidden
<div>Lorem</div>
```{{EmbedLiveSample("sampleSliderHorizontal",100,50,"","", "nobutton")}}                                                                                                       | Chrome Safari Edge         |                                                                                                                                                                                                                   |
| `slider-vertical` {{Non-standard_Inline}}                                                       | ```css hidden
div{ color: black; -webkit-appearance: slider-vertical; }
``````html hidden
<div>Lorem</div>
```{{EmbedLiveSample("sampleSliderVertical",100,50,"","", "nobutton")}}                                                                                                         | Chrome Safari Edge         |                                                                                                                                                                                                                   |
| `sliderthumb-horizontal` {{Non-standard_Inline}}                                                | ```css hidden
div{ color: black; -webkit-appearance: slider-thumb-horizontal; }
``````html hidden
<div>Lorem</div>
```{{EmbedLiveSample("sampleSliderThumbHorizontal",100,50,"","", "nobutton")}}                                                                                         | Chrome Safari Edge         |                                                                                                                                                                                                                   |
| `sliderthumb-vertical` {{Non-standard_Inline}}                                                  | ```css hidden
div{ color: black; -webkit-appearance: slider-thumb-vertical; }
``````html hidden
<div>Lorem</div>
```{{EmbedLiveSample("sampleSliderThumbVertical",100,50,"","", "nobutton")}}                                                                                               | Chrome Safari Edge         |                                                                                                                                                                                                                   |
| `spinner` {{Non-standard_Inline}}                                                               | ```css hidden
div { color: transparent; -moz-appearance: spinner; -webkit-appearance: spinner; }
``````html hidden
<div>Lorem</div>
```{{EmbedLiveSample("sampleSpinner",100,50,"","", "nobutton")}}                                                                                            | Firefox                    | Removed in Firefox 64.                                                                                                                                                                                            |
| `spinner-downbutton` {{Non-standard_Inline}}                                                    | ```css hidden
div { color: black; -moz-appearance: spinner-downbutton; -webkit-appearance: spinner-downbutton; }
``````html hidden
<div>Lorem</div>
```{{EmbedLiveSample("sampleSpinnerDownbutton",100,50,"","", "nobutton")}}                                                            | Firefox                    | Removed in Firefox 64.                                                                                                                                                                                            |
| `spinner-textfield` {{Non-standard_Inline}}                                                     | ```css hidden
div { color: black; -moz-appearance: spinner-textfield; -webkit-appearance: spinner-textfield; }
``````html hidden
<div>Lorem</div>
```{{EmbedLiveSample("sampleSpinnerTextfield",100,50,"","", "nobutton")}}                                                                  | Firefox                    | Removed in Firefox 64.                                                                                                                                                                                            |
| `spinner-upbutton` {{Non-standard_Inline}}                                                      | ```css hidden
div { color: black; -moz-appearance: spinner-upbutton; -webkit-appearance: spinner-upbutton; }
``````html hidden
<div>Lorem</div>
```{{EmbedLiveSample("sampleSpinnerUpbutton",100,50,"","", "nobutton")}}                                                                    | Firefox                    | Removed in Firefox 64.                                                                                                                                                                                            |
| `splitter` {{Non-standard_Inline}}                                                              | ```css hidden
div { color: transparent; -moz-appearance: splitter; -webkit-appearance: splitter; }
``````html hidden
<div>Lorem</div>
```{{EmbedLiveSample("sampleSplitter",100,50,"","", "nobutton")}}                                                                                      | Firefox                    | Removed in Firefox 64.                                                                                                                                                                                            |
| `square-button` {{Non-standard_Inline}}                                                         | ```css hidden
div{ color: black; -moz-appearance: square-button; -webkit-appearance: square-button; }
``````html hidden
<div>Lorem</div>
```{{EmbedLiveSample("sampleSquareButton",100,50,"","", "nobutton")}}                                                                               | Chrome Safari Edge         |                                                                                                                                                                                                                   |
| `statusbar` {{Non-standard_Inline}}                                                             | ```css hidden
div { color: black; -moz-appearance: statusbar; -webkit-appearance: statusbar; }
``````html hidden
<div>Lorem</div>
```{{EmbedLiveSample("sampleStatusBar",100,50,"","", "nobutton")}}                                                                                          | Firefox                    | Removed in Firefox 64.                                                                                                                                                                                            |
| `statusbarpanel` {{Non-standard_Inline}}                                                        | ```css hidden
div { color: black; -moz-appearance: statusbarpanel; -webkit-appearance: statusbarpanel; }
``````html hidden
<div>Lorem</div>
```{{EmbedLiveSample("sampleStatusBarPanel",100,50,"","", "nobutton")}}                                                                        | Firefox                    | Removed in Firefox 64.                                                                                                                                                                                            |
| `tab` {{Non-standard_Inline}}                                                                   | ```css hidden
div { color: black; height: 20px; -moz-appearance: tab; -webkit-appearance: tab; }
``````html hidden
<div>Lorem</div>
```{{EmbedLiveSample("sampleTab",100,50,"","", "nobutton")}}                                                                                                | Firefox                    | Removed in Firefox 64                                                                                                                                                                                             |
| `tabpanel` {{Non-standard_Inline}}                                                              | ```css hidden
div { color: black; -moz-appearance: tabpanel; -webkit-appearance: tabpanel; }
``````html hidden
<div>Lorem</div>
```{{EmbedLiveSample("sampleTabPanel",100,50,"","", "nobutton")}}                                                                                            | Firefox                    | Removed in Firefox 64.                                                                                                                                                                                            |
| `tabpanels` {{Non-standard_Inline}}                                                             | ```css hidden
div { color: black; -moz-appearance: tabpanels; -webkit-appearance: tabpanels; }
``````html hidden
<div>Lorem</div>
```{{EmbedLiveSample("sampleTabPanels",100,50,"","", "nobutton")}}                                                                                          | Firefox                    | Removed in Firefox 64                                                                                                                                                                                             |
| `tab-scroll-arrow-back` {{Non-standard_Inline}}                                                 | ```css hidden
div { color: black; -moz-appearance: tab-scroll-arrow-back; -webkit-appearance: tab-scroll-arrow-back; }
``````html hidden
<div>Lorem</div>
```{{EmbedLiveSample("sampleTabScrollArrowBack",100,50,"","", "nobutton")}}                                                      | Firefox                    | Removed in Firefox 64.                                                                                                                                                                                            |
| `tab-scroll-arrow-forward` {{Non-standard_Inline}}                                              | ```css hidden
div { color: black; -moz-appearance: tab-scroll-arrow-forward; -webkit-appearance: tab-scroll-arrow-forward; }
``````html hidden
<div>Lorem</div>
```{{EmbedLiveSample("sampleTabScrollArrowForward",100,50,"","", "nobutton")}}                                            | Firefox                    | Removed in Firefox 64.                                                                                                                                                                                            |
| `textarea`                                                                                               | ```css hidden
div{ color: black; -webkit-appearance: textarea; }
``````html hidden
<div>Lorem</div>
```{{EmbedLiveSample("sampleTextArea",100,50,"","", "nobutton")}}                                                                                                                        | Firefox Chrome Safari Edge |                                                                                                                                                                                                                   |
| `textfield` {{Non-standard_Inline}}                                                             | ```css hidden
div { color: black; -moz-appearance: textfield; -webkit-appearance: textfield; }
``````html hidden
<div>Lorem</div>
```{{EmbedLiveSample("sampleTextField",100,50,"","", "nobutton")}}                                                                                          | Firefox Chrome Safari Edge |                                                                                                                                                                                                                   |
| `textfield-multiline` {{Non-standard_Inline}}                                                   | ```css hidden
div { color: black; -moz-appearance: textfield-multiline; -webkit-appearance: textfield-multiline; }
``````html hidden
<div>Lorem</div>
```{{EmbedLiveSample("sampleTextfieldMultiline",100,50,"","", "nobutton")}}                                                          | Firefox                    | Use `textarea` instead                                                                                                                                                                                            |
| `toolbar` {{Non-standard_Inline}}                                                               | ```css hidden
div { color: black; -moz-appearance: toolbar; -webkit-appearance: toolbar; }
``````html hidden
<div>Lorem</div>
```{{EmbedLiveSample("sampleToolbar",100,50,"","", "nobutton")}}                                                                                                  | Firefox                    | Removed in Firefox 64.                                                                                                                                                                                            |
| `toolbarbutton` {{Non-standard_Inline}}                                                         | ```css hidden
div { color: black; -moz-appearance: toolbarbutton; -webkit-appearance: toolbarbutton; }
``````html hidden
<div>Lorem</div>
```{{EmbedLiveSample("sampleToolbarButton",100,50,"","", "nobutton")}}                                                                              | Firefox                    | Removed in Firefox 64.                                                                                                                                                                                            |
| `toolbarbutton-dropdown` {{Non-standard_Inline}}                                                | ```css hidden
div { color: black; -moz-appearance: toolbarbutton-dropdown; -webkit-appearance: toolbarbutton-dropdown; }
``````html hidden
<div>Lorem</div>
```{{EmbedLiveSample("sampleToolbarButtonDropdown",100,50,"","", "nobutton")}}                                                | Firefox                    | Removed in Firefox 64.                                                                                                                                                                                            |
| `toolbargripper` {{Non-standard_Inline}}                                                        | ```css hidden
div { color: black; -moz-appearance: toolbargripper; -webkit-appearance: toolbargripper; }
``````html hidden
<div>Lorem</div>
```{{EmbedLiveSample("sampleToolbarGripper",100,50,"","", "nobutton")}}                                                                        | Firefox                    | Removed in Firefox 64.                                                                                                                                                                                            |
| `toolbox` {{Non-standard_Inline}}                                                               | ```css hidden
div { color: black; -moz-appearance: toolbox; -webkit-appearance: toolbox; }
``````html hidden
<div>Lorem</div>
```{{EmbedLiveSample("sampleToolbox",100,50,"","", "nobutton")}}                                                                                                  | Firefox                    | Removed in Firefox 64.                                                                                                                                                                                            |
| `tooltip` {{Non-standard_Inline}}                                                               | ```css hidden
div { color: black; -moz-appearance: tooltip; -webkit-appearance: tooltip; }
``````html hidden
<div>Lorem</div>
```{{EmbedLiveSample("sampleTooltip",100,50,"","", "nobutton")}}                                                                                                  | Firefox                    | Removed in Firefox 64.                                                                                                                                                                                            |
| `treeheader` {{Non-standard_Inline}}                                                            | ```css hidden
div { color: black; -moz-appearance: treeheader; -webkit-appearance: treeheader; }
``````html hidden
<div>Lorem</div>
```{{EmbedLiveSample("sampleTreeHeader",100,50,"","", "nobutton")}}                                                                                        | Firefox                    | Removed in Firefox 64.                                                                                                                                                                                            |
| `treeheadercell` {{Non-standard_Inline}}                                                        | ```css hidden
div { color: black; height:20px; -moz-appearance: treeheadercell; -webkit-appearance: treeheadercell; }
``````html hidden
<div>Lorem</div>
```{{EmbedLiveSample("sampleTreeHeaderCell",100,50,"","", "nobutton")}}                                                           | Firefox                    | Removed in Firefox 64.                                                                                                                                                                                            |
| `treeheadersortarrow` {{Non-standard_Inline}}                                                   | ```css hidden
div { color: black; -moz-appearance: treeheadersortarrow; -webkit-appearance: treeheadersortarrow; }
``````html hidden
<div>Lorem</div>
```{{EmbedLiveSample("sampleTreeHeaderSortArrow",100,50,"","", "nobutton")}}                                                          | Firefox                    | Removed in Firefox 64.                                                                                                                                                                                            |
| `treeitem` {{Non-standard_Inline}}                                                              | ```css hidden
div { color: black; -moz-appearance: treeitem; -webkit-appearance: treeitem; }
``````html hidden
<div>Lorem</div>
```{{EmbedLiveSample("sampleTreeItem",100,50,"","", "nobutton")}}                                                                                            | Firefox                    | Removed in Firefox 64.                                                                                                                                                                                            |
| `treeline` {{Non-standard_Inline}}                                                              | ```css hidden
div { color: black; -moz-appearance: treeline; -webkit-appearance: treeline; }
``````html hidden
<div>Lorem</div>
```{{EmbedLiveSample("sampleTreeLine",100,50,"","", "nobutton")}}                                                                                            | Firefox                    | Removed in Firefox 64.                                                                                                                                                                                            |
| `treetwisty` {{Non-standard_Inline}}                                                            | ```css hidden
div { color: transparent; -moz-appearance: treetwisty; -webkit-appearance: treetwisty; }
``````html hidden
<div>Lorem</div>
```{{EmbedLiveSample("sampleTreeTwisty",100,50,"","", "nobutton")}}                                                                                  | Firefox                    | Removed in Firefox 64.                                                                                                                                                                                            |
| `treetwistyopen` {{Non-standard_Inline}}                                                        | ```css hidden
div { color: transparent; -moz-appearance: treetwistyopen; -webkit-appearance: treetwistyopen; }
``````html hidden
<div>Lorem</div>
```{{EmbedLiveSample("sampleTreeTwistyOpen",100,50,"","", "nobutton")}}                                                                  | Firefox                    | Removed in Firefox 64.                                                                                                                                                                                            |
| `treeview` {{Non-standard_Inline}}                                                              | ```css hidden
div { color: black; -moz-appearance: treeview; -webkit-appearance: treeview; }
``````html hidden
<div>Lorem</div>
```{{EmbedLiveSample("sampleTreeView",100,50,"","", "nobutton")}}                                                                                            | Firefox                    | Removed in Firefox 64.                                                                                                                                                                                            |
| `relevancy-level-indicator` {{Non-standard_Inline}}                                             | ```css hidden
div{ color: black; -moz-appearance: relevancy-level-indicator; -webkit-appearance: relevancy-level-indicator; }
``````html hidden
<div>Lorem</div>
```{{EmbedLiveSample("sample-relevancy-level-indicator",100,50,"","","nobutton")}}                                       | Safari                     |                                                                                                                                                                                                                   |
| `-moz-win-borderless-glass` {{Non-standard_Inline}}{{Gecko_MinVersion_Inline("2.0")}} | ```css hidden
div { color: black; -moz-appearance: -moz-win-borderless-glass; }
``````html hidden
<div>Lorem</div>
```{{EmbedLiveSample("sampleWinBorderlessGlass",100,50,"","", "nobutton")}}                                                                                             | Firefox                    | Removed in Firefox 64. This style applies the Aero Glass effect -- but without a border -- to the element.                                                                                                        |
| `-moz-win-browsertabbar-toolbox` {{Non-standard_Inline}}                                        | ```css hidden
div { color: black; -moz-appearance: -moz-win-browsertabbar-toolbox; }
``````html hidden
<div>Lorem</div>
```{{EmbedLiveSample("sampleWinBrowsertabbarToolbox",100,50,"","", "nobutton")}}                                                                                | Firefox                    | Removed in Firefox 64. This toolbox style is meant to be used for the tab bar in a browser.                                                                                                                       |
| `-moz-win-communicationstext` {{Non-standard_Inline}}                                           | ```css hidden
div { color: black; -moz-appearance: -moz-win-communicationstext; }
``````html hidden
<div>Lorem</div>
```{{EmbedLiveSample("sampleWinCommunicationstext",100,50,"","", "nobutton")}}                                                                                       | Firefox                    | Removed in Firefox 64.                                                                                                                                                                                            |
| `-moz-win-communications-toolbox` {{Non-standard_Inline}}                                       | ```css hidden
div { color: black; -moz-appearance: -moz-win-communications-toolbox; }
``````html hidden
<div>Lorem</div>
```{{EmbedLiveSample("sampleWinCommunicationsToolbox",100,50,"","", "nobutton")}}                                                                               | Firefox                    | Removed in Firefox 64. This toolbox style is meant to be used in communications and productivity applications. Corresponding foreground color is `-moz-win-communicationstext`.                                   |
| `-moz-win-exclude-glass` {{Non-standard_Inline}}{{Gecko_MinVersion_Inline("6.0")}}    | ```css hidden
div { color: black; -moz-appearance: -moz-win-exclude-glass; }
``````html hidden
<div>Lorem</div>
```{{EmbedLiveSample("sampleWinExcludeGlass",100,50,"","", "nobutton")}}                                                                                                    | Firefox                    | Removed in Firefox 64. This styles is used to exclude the Aero Glass effect on the element.                                                                                                                       |
| `-moz-win-glass` {{Non-standard_Inline}}                                                        | ```css hidden
div { color: black; -moz-appearance: -moz-win-glass; }
``````html hidden
<div>Lorem</div>
```{{EmbedLiveSample("sampleWinGlass",100,50,"","", "nobutton")}}                                                                                                                    | Firefox                    | Removed in Firefox 64. This style applies the Aero Glass effect to the element.                                                                                                                                   |
| `-moz-win-media-toolbox` {{Non-standard_Inline}}                                                | ```css hidden
div { color: black; -moz-appearance: -moz-win-media-toolbox; }
``````html hidden
<div>Lorem</div>
```{{EmbedLiveSample("sampleWinMediaToolbox",100,50,"","", "nobutton")}}                                                                                                    | Firefox                    | Removed in Firefox 64. This toolbox style is meant to be used in applications that manage media objects. Corresponding foreground color is `-moz-win-mediatext`.                                                  |
| `-moz-window-button-box` {{Non-standard_Inline}}                                                | ```css hidden
div { color: black; -moz-appearance: -moz-window-button-box; }
``````html hidden
<div>Lorem</div>
```{{EmbedLiveSample("sampleWindowButtonBox",100,50,"","", "nobutton")}}                                                                                                    | Firefox                    | Removed in Firefox 64.                                                                                                                                                                                            |
| `-moz-window-button-box-maximized` {{Non-standard_Inline}}                                      | ```css hidden
div { color: black; -moz-appearance: -moz-window-button-box-maximized; }
``````html hidden
<div>Lorem</div>
```{{EmbedLiveSample("sampleWindowButtonBoxMaximized",100,50,"","", "nobutton")}}                                                                              | Firefox                    | Removed in Firefox 64.                                                                                                                                                                                            |
| `-moz-window-button-close` {{Non-standard_Inline}}                                              | ```css hidden
div { color: black; -moz-appearance: -moz-window-button-close; }
``````html hidden
<div>Lorem</div>
```{{EmbedLiveSample("sampleWindowButtonClose",100,50,"","", "nobutton")}}                                                                                              | Firefox                    | Removed in Firefox 64.                                                                                                                                                                                            |
| `-moz-window-button-maximize` {{Non-standard_Inline}}                                           | ```css hidden
div { color: black; -moz-appearance: -moz-window-button-maximize; }
``````html hidden
<div>Lorem</div>
```{{EmbedLiveSample("sampleWindowButtonMaximize",100,50,"","", "nobutton")}}                                                                                       | Firefox                    | Removed in Firefox 64.                                                                                                                                                                                            |
| `-moz-window-button-minimize` {{Non-standard_Inline}}                                           | ```css hidden
div { color: black; -moz-appearance: -moz-window-button-minimize; }
``````html hidden
<div>Lorem</div>
```{{EmbedLiveSample("sampleWindowButtonMinimize",100,50,"","", "nobutton")}}                                                                                       | Firefox                    | Removed in Firefox 64.                                                                                                                                                                                            |
| `-moz-window-button-restore` {{Non-standard_Inline}}                                            | ```css hidden
div { color: black; -moz-appearance: -moz-window-button-restore; }
``````html hidden
<div>Lorem</div>
```{{EmbedLiveSample("sampleWindowButtonRestore",100,50,"","", "nobutton")}}                                                                                            | Firefox                    | Removed in Firefox 64.                                                                                                                                                                                            |
| `-moz-window-frame-bottom` {{Non-standard_Inline}}                                              | ```css hidden
div { color: black; -moz-appearance: -moz-window-frame-bottom; }
``````html hidden
<div>Lorem</div>
```{{EmbedLiveSample("sampleWindowFrameBottom",100,50,"","", "nobutton")}}                                                                                              | Firefox                    | Removed in Firefox 64.                                                                                                                                                                                            |
| `-moz-window-frame-left` {{Non-standard_Inline}}                                                | ```css hidden
div { color: black; -moz-appearance: -moz-window-frame-left; }
``````html hidden
<div>Lorem</div>
```{{EmbedLiveSample("sampleWindowFrameLeft",100,50,"","", "nobutton")}}                                                                                                    | Firefox                    | Removed in Firefox 64.                                                                                                                                                                                            |
| `-moz-window-frame-right` {{Non-standard_Inline}}                                               | ```css hidden
div { color: black; -moz-appearance: -moz-window-frame-right; }
``````html hidden
<div>Lorem</div>
```{{EmbedLiveSample("sampleWindowFrameRight",100,50,"","", "nobutton")}}                                                                                                   | Firefox                    | Removed in Firefox 64.                                                                                                                                                                                            |
| `-moz-window-titlebar` {{Non-standard_Inline}}                                                  | ```css hidden
div { color: black; -moz-appearance: -moz-window-titlebar; }
``````html hidden
<div>Lorem</div>
```{{EmbedLiveSample("sampleWindowTitlebar",100,50,"","", "nobutton")}}                                                                                                      | Firefox                    | Removed in Firefox 64.                                                                                                                                                                                            |
| `-moz-window-titlebar-maximized` {{Non-standard_Inline}}                                        | ```css hidden
div { color: black; -moz-appearance: -moz-window-titlebar-maximized; }
``````html hidden
<div>Lorem</div>
```{{EmbedLiveSample("sampleWindowTitlebarMaximized",100,50,"","", "nobutton")}}                                                                                | Firefox                    | Removed in Firefox 64.                                                                                                                                                                                            |
| `-apple-pay-button` {{Non-standard_Inline}}                                                     | ```css hidden
div{ color: black; -webkit-appearance: -apple-pay-button; }
``````html hidden
<div>Lorem</div>
```{{EmbedLiveSample("sampleApplePayButton",100,50,"","", "nobutton")}}                                                                                                       | Safari                     | **iOS and macOS only**. Available on the web starting in iOS 10.1 and macOS 10.12.1                                                                                                                               |

### Формальный синтаксис

{{CSSSyntax}}

## Примеры

Нижеприведённый пример показывает, как сделать элемент, выглядящий как кнопка панели инструментов в Firefox:

```css
.exampleone {
  -moz-appearance: toolbarbutton;
}
```

Смотрите также [this JSFiddle](http://jsfiddle.net/go392m5s/) в качестве примера, показывающего как вы можете использовать `appearance: none` для стилизации радио кнопок и чекбоксов.

## Спецификации

{{Specifications}}

{{CSSInfo}}

## Поддержка браузерами

{{Compat}}

## Смотрите также

*   [Definition of `appearance` in CSS 3 Basic User Interface](http://www.w3.org/TR/2004/CR-css3-ui-20040511/#appearance) (Candidate Recommendation from 2004-05-11).
*   [Dropped CSS3 features from the UI spec.4](http://wiki.csswg.org/spec/css4-ui#dropped-css3-features)
```````
