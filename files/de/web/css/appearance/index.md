---
title: '-moz-appearance (-webkit-appearance)'
slug: Web/CSS/appearance
tags:
  - CSS
  - CSS Referenz
  - nicht Standard
translation_of: Web/CSS/appearance
---
{{non-standard_header}}{{CSSRef}}

## Übersicht

Die CSS-Eigenschaft `-moz-appearance` wird von Gecko (Firefox) dazu verwendet, um ein Element mit dem nativen Stil der Plattform anzuzeigen, wie er im Betriebssystem eingestellt ist.

Diese Eigenschaft wird häufig in [XUL](/de/docs/Mozilla/Tech/XUL "en/XUL")-Stylesheets verwendet, um individuelle Eingabefelder passend zur Plattform zu gestalten. Auch die [XBL](/de/docs/XBL "en/XBL")-Implementierungen der in Mozilla enthaltenen Bedienelemente verwenden diese Eigenschaft.

> **Note:** Verwende diese Eigenschaft _nicht_ für Websites: Sie entspricht nicht den Webstandards und ihre Auswirkungen unterscheiden sich von einem Browser zum anderen. Sogar der Wert `none` hat in den verschiedenen Browsern kein einheitliches Verhalten für alle Formularelemente, und teilweise wird sie überhaupt nicht unterstützt.

{{cssinfo}}

## Syntax

```css
/* Partielle Liste verfügbarer Werte in Gecko */
-moz-appearance: none;
-moz-appearance: button;
-moz-appearance: checkbox;
-moz-appearance: scrollbarbutton-up;

/* Partielle Liste verfügbarer Werte in WebKit/Blink */
-webkit-appearance: none;
-webkit-appearance: button;
-webkit-appearance: checkbox;
-webkit-appearance: scrollbarbutton-up;
```

### Werte

`<appearance>` ist eines der folgenden Schlüsselwörter:

| Wert   | Demo          | Beschreibung |
| ------ | ------------- | ------------ |
| `none` | ```css hidden |

div {-moz-appearance: none; -webkit-appearance: none; color: black;}

```````html hidden
          <div>Lorem</div>
```{{EmbedLiveSample("sampleNone",100,50,"","", "nobutton")}}                                                                       | Keine besondere Formatierung wird angewandt. Dies ist der Standardwert. Beachten Sie aber {{ bug(649849) }} und {{ bug(605985) }}.                                                                          |
| `button`                                                                     | ```css hidden
 div {-moz-appearance: button; -webkit-appearance: button; color: black; }
``````html hidden
          <div>Lorem</div>
```{{EmbedLiveSample("sampleButton",100,50,"","", "nobutton")}}                                                               | Das Element wird wie eine Schaltfläche gezeichnet.                                                                                                                                                                        |
| `button-arrow-down`                                                          | ```css hidden
 div {-moz-appearance: button-arrow-down; -webkit-appearance: button-arrow-down; color: black; }
``````html hidden
          <div>Lorem</div>
```{{EmbedLiveSample("sampleButtonArrowDown",100,50,"","", "nobutton")}}                             |                                                                                                                                                                                                                           |
| `button-arrow-next`                                                          | ```css hidden
 div {-moz-appearance: button-arrow-next; -webkit-appearance: button-arrow-next; color: black; }
``````html hidden
          <div>Lorem</div>
```{{EmbedLiveSample("sampleButtonArrowNext",100,50,"","", "nobutton")}}                             |                                                                                                                                                                                                                           |
| `button-arrow-previous`                                                      | ```css hidden
 div {-moz-appearance: button-arrow-previous; -webkit-appearance: button-arrow-previous; color: black; }
``````html hidden
          <div>Lorem</div>
```{{EmbedLiveSample("sampleButtonArrowPrevious",100,50,"","", "nobutton")}}                 |                                                                                                                                                                                                                           |
| `button-arrow-up`                                                            | ```css hidden
 div {-moz-appearance: button-arrow-up; -webkit-appearance: button-arrow-up; color: black; }
``````html hidden
          <div>Lorem</div>
```{{EmbedLiveSample("sampleButtonArrowUp",100,50,"","", "nobutton")}}                                     |                                                                                                                                                                                                                           |
| `button-bevel`                                                               | ```css hidden
 div {-moz-appearance: button-bevel; -webkit-appearance: button-bevel; color: black; }
``````html hidden
          <div>Lorem</div>
```{{EmbedLiveSample("sampleButtonBevel",100,50,"","", "nobutton")}}                                           |                                                                                                                                                                                                                           |
| `button-focus`                                                               | ```css hidden
 div {-moz-appearance: button-focus; -webkit-appearance: button-focus; color: black; }
``````html hidden
          <div>Lorem</div>
```{{EmbedLiveSample("sampleButtonFocus",100,50,"","", "nobutton")}}                                           |                                                                                                                                                                                                                           |
| `caret`                                                                      | ```css hidden
 div {-moz-appearance: caret; -webkit-appearance: caret; color: black; }
``````html hidden
          <div>Lorem</div>
```{{EmbedLiveSample("sampleCaret",100,50,"","", "nobutton")}}                                                                 |                                                                                                                                                                                                                           |
| `checkbox`                                                                   | ```css hidden
 div {-moz-appearance: checkbox; -webkit-appearance: checkbox; color: black; }
``````html hidden
          <div>Lorem</div>
```{{EmbedLiveSample("sampleCheckbox",100,50,"","", "nobutton")}}                                                       | Das Element wird wie der innere Teil einer Checkbox gezeichnet.                                                                                                                                                           |
| `checkbox-container`                                                         | ```css hidden
 div {-moz-appearance: checkbox-container; -webkit-appearance: checkbox-container; color: black; }
``````html hidden
          <div>Lorem</div>
```{{EmbedLiveSample("sampleCheckboxContainer",100,50,"","", "nobutton")}}                       | Das Element wird wie ein Container für eine Checkbox gezeichnet, was einen vorilluminierenden Hintergrundeffekt unter bestimmten Plattformen beinhaltet. Normalerweise beinhaltet er ein Label und eine Checkbox.         |
| `checkbox-label`                                                             | ```css hidden
 div {-moz-appearance: checkbox-label; -webkit-appearance: checkbox-label; color: black; }
``````html hidden
          <div>Lorem</div>
```{{EmbedLiveSample("sampleCheckboxLabel",100,50,"","", "nobutton")}}                                       |                                                                                                                                                                                                                           |
| `checkmenuitem`                                                              | ```css hidden
 div {-moz-appearance: checkmenuitem; -webkit-appearance: checkmenuitem; height: 20px; color: black; }
``````html hidden
          <div>Lorem</div>
```{{EmbedLiveSample("sampleCheckmenuitem",100,50,"","", "nobutton")}}                           |                                                                                                                                                                                                                           |
| `dualbutton`                                                                 | ```css hidden
 div {-moz-appearance: dualbutton; -webkit-appearance: dualbutton; color: black; }
``````html hidden
          <div>Lorem</div>
```{{EmbedLiveSample("sampleDualButton",100,50,"","", "nobutton")}}                                                   |                                                                                                                                                                                                                           |
| `groupbox`                                                                   | ```css hidden
 div {-moz-appearance: groupbox; -webkit-appearance: groupbox; color: black; }
``````html hidden
          <div>Lorem</div>
```{{EmbedLiveSample("sampleGroupbox",100,50,"","", "nobutton")}}                                                       |                                                                                                                                                                                                                           |
| `listbox`                                                                    | ```css hidden
 div {-moz-appearance: listbox; -webkit-appearance: listbox; height:20px; color: black; }
``````html hidden
          <div>Lorem</div>
```{{EmbedLiveSample("sampleListBox",100,50,"","", "nobutton")}}                                                |                                                                                                                                                                                                                           |
| `listitem`                                                                   | ```css hidden
 div {-moz-appearance: listitem; -webkit-appearance: listitem; color: black; }
``````html hidden
          <div>Lorem</div>
```{{EmbedLiveSample("sampleListItem",100,50,"","", "nobutton")}}                                                       |                                                                                                                                                                                                                           |
| `menuarrow`                                                                  | ```css hidden
 div {-moz-appearance: menuarrow; -webkit-appearance: menuarrow; color: black; }
``````html hidden
          <div>Lorem</div>
```{{EmbedLiveSample("sampleMenuArrow",100,50,"","", "nobutton")}}                                                     |                                                                                                                                                                                                                           |
| `menubar`                                                                    | ```css hidden
 div {-moz-appearance: menubar; -webkit-appearance: menubar; color: balck; }
``````html hidden
          <div>Lorem</div>
```{{EmbedLiveSample("sampleMenubar",100,50,"","", "nobutton")}}                                                             |                                                                                                                                                                                                                           |
| `menucheckbox`                                                               | ```css hidden
 div {-moz-appearance: menucheckbox; -webkit-appearance: menucheckbox; color: black; }
``````html hidden
          <div>Lorem</div>
```{{EmbedLiveSample("sampleMenuCheckbox",100,50,"","", "nobutton")}}                                           |                                                                                                                                                                                                                           |
| `menuimage`                                                                  | ```css hidden
 div {-moz-appearance: menuimage; -webkit-appearance: menuimage; color: black; }
``````html hidden
          <div>Lorem</div>
```{{EmbedLiveSample("sampleMenuImage",100,50,"","", "nobutton")}}                                                     |                                                                                                                                                                                                                           |
| `menuitem`                                                                   | ```css hidden
 div {-moz-appearance: menuitem; -webkit-appearance: menuitem; color: black; }
``````html hidden
          <div>Lorem</div>
```{{EmbedLiveSample("sampleMenuItem",100,50,"","", "nobutton")}}                                                       | Das Element wird wie ein Menüeintrag dargestellt, wobei der Eintrag hervorgehoben wird, wenn sich der Mauscursor darüber befindet.                                                                                        |
| `menuitemtext`                                                               | ```css hidden
 div {-moz-appearance: menuitemtext; -webkit-appearance: menuitemtext; color: black; }
``````html hidden
          <div>Lorem</div>
```{{EmbedLiveSample("sampleMenuItemText",100,50,"","", "nobutton")}}                                           |                                                                                                                                                                                                                           |
| `menulist`                                                                   | ```css hidden
 div {-moz-appearance: menulist; -webkit-appearance: menulist; color: black; }
``````html hidden
          <div>Lorem</div>
```{{EmbedLiveSample("sampleMenuList",100,50,"","", "nobutton")}}                                                       |                                                                                                                                                                                                                           |
| `menulist-button`                                                            | ```css hidden
 div {-moz-appearance: menulist-button; -webkit-appearance: menulist-button; color: black; }
``````html hidden
          <div>Lorem</div>
```{{EmbedLiveSample("sampleMenuListButton",100,50,"","", "nobutton")}}                                 | Das Element wird wie eine Schaltfläche dargestellt, die eine Menüliste darstellt, die geöffnet werden kann.                                                                                                               |
| `menulist-text`                                                              | ```css hidden
 div {-moz-appearance: menulist-text; -webkit-appearance: menulist-text; color: black; }
``````html hidden
          <div>Lorem</div>
```{{EmbedLiveSample("sampleMenuListText",100,50,"","", "nobutton")}}                                         |                                                                                                                                                                                                                           |
| `menulist-textfield`                                                         | ```css hidden
 div {-moz-appearance: menulist-textfield; -webkit-appearance: menulist-textfield; color: black; }
``````html hidden
          <div>Lorem</div>
```{{EmbedLiveSample("sampleMenuListTextfield",100,50,"","", "nobutton")}}                       | Dieses Element wird wie ein Texteingabefeld einer Menüliste dargestellt. (Nicht für die Windows Plattform implementiert.)                                                                                                 |
| `menupopup`                                                                  | ```css hidden
 div {-moz-appearance: menupopup; -webkit-appearance: menupopup; color: black; }
``````html hidden
          <div>Lorem</div>
```{{EmbedLiveSample("sampleMenuPopup",100,50,"","", "nobutton")}}                                                     |                                                                                                                                                                                                                           |
| `menuradio`                                                                  | ```css hidden
 div {-moz-appearance: menuradio; -webkit-appearance: menuradio; color: black; }
``````html hidden
          <div>Lorem</div>
```{{EmbedLiveSample("sampleMenuRadio",100,50,"","", "nobutton")}}                                                     |                                                                                                                                                                                                                           |
| `menuseparator`                                                              | ```css hidden
 div {-moz-appearance: menuseparator; -webkit-appearance: menuseparator; color: transparent; }
``````html hidden
          <div>Lorem</div>
```{{EmbedLiveSample("sampleMenuSeparator",100,50,"","", "nobutton")}}                                   |                                                                                                                                                                                                                           |
| `meterbar`                                                                   | ```css hidden
 div {-moz-appearance: meterbar; -webkit-appearance: meterbar; color: black; }
``````html hidden
          <div>Lorem</div>
```{{EmbedLiveSample("sampleMeterbar",100,50,"","", "nobutton")}}                                                       | Neu in Firefox 16                                                                                                                                                                                                         |
| `meterchunk`                                                                 | ```css hidden
 div {-moz-appearance: meterchunk; -webkit-appearance: meterchunk; color: black; }
``````html hidden
          <div>Lorem</div>
```{{EmbedLiveSample("sampleMeterchunk",100,50,"","", "nobutton")}}                                                   | Neu in Firefox 16                                                                                                                                                                                                         |
| `progressbar`                                                                | ```css hidden
 div {-moz-appearance: progressbar; -webkit-appearance: progressbar; color: black; }
``````html hidden
          <div>Lorem</div>
```{{EmbedLiveSample("sampleProgressBar",100,50,"","", "nobutton")}}                                             | Das Element wird wie ein Fortschrittsbalken dargestellt.                                                                                                                                                                  |
| `progressbar-vertical`                                                       | ```css hidden
 div {-moz-appearance: progressbar-vertical; -webkit-appearance: preogressbar-vertical; color: transparent; }
``````html hidden
          <div>Lorem</div>
```{{EmbedLiveSample("sampleProgressBarVertical",100,50,"","", "nobutton")}}            |                                                                                                                                                                                                                           |
| `progresschunk`                                                              | ```css hidden
 div {-moz-appearance: progresschunk; -webkit-appearance: progresschunk; color: black; }
``````html hidden
          <div>Lorem</div>
```{{EmbedLiveSample("sampleProgressChunk",100,50,"","", "nobutton")}}                                         |                                                                                                                                                                                                                           |
| `progresschunk-vertical`                                                     | ```css hidden
 div {-moz-appearance: progresschunk-vertical; -webkit-appearance: progresschunk-vertical; color: black; }
``````html hidden
          <div>Lorem</div>
```{{EmbedLiveSample("sampleProgressChunkVertical",100,50,"","", "nobutton")}}           |                                                                                                                                                                                                                           |
| `radio`                                                                      | ```css hidden
 div {-moz-appearance: radio; -webkit-appearance: radio; color: black; }
``````html hidden
          <div>Lorem</div>
```{{EmbedLiveSample("sampleRadio",100,50,"","", "nobutton")}}                                                                 | Das Element wird wie der innere Teil eines Radiobuttons gezeichnet.                                                                                                                                                       |
| `radio-container`                                                            | ```css hidden
 div {-moz-appearance: radio-container; -webkit-appearance: radio-container; color: black; }
``````html hidden
          <div>Lorem</div>
```{{EmbedLiveSample("sampleRadioContainer",100,50,"","", "nobutton")}}                                 | Das Element wird wie ein Container für einen Radiobutton gezeichnet, was einen vorilluminierenden Hintergrundeffekt unter bestimmten Plattformen beinhaltet. Normalerweise beinhaltet er ein Label und einen Radiobutton. |
| `radio-label`                                                                | ```css hidden
 div {-moz-appearance: radio-label; -webkit-appearance: radio-label; color: black; }
``````html hidden
          <div>Lorem</div>
```{{EmbedLiveSample("sampleRadioLabel",100,50,"","", "nobutton")}}                                                 |                                                                                                                                                                                                                           |
| `radiomenuitem`                                                              | ```css hidden
 div {-moz-appearance: radiomenuitem; -webkit-appearance: radiomenuitem; color: black; }
``````html hidden
          <div>Lorem</div>
```{{EmbedLiveSample("sampleRadioMenuItem",100,50,"","", "nobutton")}}                                         |                                                                                                                                                                                                                           |
| `resizer`                                                                    | ```css hidden
 div {-moz-appearance: resizer; -webkit-appearance: resizer; color: transparent; }
``````html hidden
          <div>Lorem</div>
```{{EmbedLiveSample("sampleResizer",100,50,"","", "nobutton")}}                                                       |                                                                                                                                                                                                                           |
| `resizerpanel`                                                               | ```css hidden
 div {-moz-appearance: resizerpanel; -webkit-appearance: resizerpanel; color: black; }
``````html hidden
          <div>Lorem</div>
```{{EmbedLiveSample("sampleResizerPanel",100,50,"","", "nobutton")}}                                           |                                                                                                                                                                                                                           |
| `scale-horizontal`                                                           | ```css hidden
 div {-moz-appearance: scale-horizontal; -webkit-appearance: scale-horizontal; color: transparent; }
``````html hidden
          <div>Lorem</div>
```{{EmbedLiveSample("sampleScaleHorizontal",100,50,"","", "nobutton")}}                         |                                                                                                                                                                                                                           |
| `scalethumbend`                                                              | ```css hidden
 div {-moz-appearance: scalethumbend; -webkit-appearance: scalethumbend; color: black; }
``````html hidden
          <div>Lorem</div>
```{{EmbedLiveSample("sampleThumbEnd",100,50,"","", "nobutton")}}                                             |                                                                                                                                                                                                                           |
| `scalethumb-horizontal`                                                      | ```css hidden
 div {-moz-appearance: scalethumb-horizontal; -webkit-appearance: scalethumb-horizontal; color: transparent; }
``````html hidden
          <div>Lorem</div>
```{{EmbedLiveSample("sampleScaleThumbHorizontal",100,50,"","", "nobutton")}}       |                                                                                                                                                                                                                           |
| `scalethumbstart`                                                            | ```css hidden
 div {-moz-appearance: scalethumbstart; -webkit-appearance: scalethumbstart; color: black; }
``````html hidden
          <div>Lorem</div>
```{{EmbedLiveSample("sampleScaleThumbStart",100,50,"","", "nobutton")}}                                 |                                                                                                                                                                                                                           |
| `scalethumbtick`                                                             | ```css hidden
 div {-moz-appearance: scalethumbtick; -webkit-appearance: scalethumbtick; color: black; }
``````html hidden
          <div>Lorem</div>
```{{EmbedLiveSample("sampleScaleThumbTick",100,50,"","", "nobutton")}}                                   |                                                                                                                                                                                                                           |
| `scalethumb-vertical`                                                        | ```css hidden
 div {-moz-appearance: scalethumb-vertical; -webkit-appearance: scalethumb-vertical; color: black; }
``````html hidden
          <div>Lorem</div>
```{{EmbedLiveSample("sampleScaleThumbVertical",100,50,"","", "nobutton")}}                     |                                                                                                                                                                                                                           |
| `scale-vertical`                                                             | ```css hidden
 div {-moz-appearance: scale-vertical; -webkit-appearance: scale-vertical; color: transparent; }
``````html hidden
          <div>Lorem</div>
```{{EmbedLiveSample("sampleScaleVertical",100,50,"","", "nobutton")}}                                 |                                                                                                                                                                                                                           |
| `scrollbarbutton-down`                                                       | ```css hidden
 div {-moz-appearance: scrollbarbutton-down; -webkit-appearance: scrollbarbutton-down; color: black; }
``````html hidden
          <div>Lorem</div>
```{{EmbedLiveSample("sampleScrollbarButtonDown",100,50,"","", "nobutton")}}                   |                                                                                                                                                                                                                           |
| `scrollbarbutton-left`                                                       | ```css hidden
 div {-moz-appearance: scrollbarbutton-left; -webkit-appearance: scrollbarbutton-left; color: black; }
``````html hidden
          <div>Lorem</div>
```{{EmbedLiveSample("sampleScrollbarButtonLeft",100,50,"","", "nobutton")}}                   |                                                                                                                                                                                                                           |
| `scrollbarbutton-right`                                                      | ```css hidden
 div {-moz-appearance: scrollbarbutton-right; -webkit-appearance: scrollbarbutton-right; color: black; }
``````html hidden
          <div>Lorem</div>
```{{EmbedLiveSample("sampleScrollbarButtonRight",100,50,"","", "nobutton")}}             |                                                                                                                                                                                                                           |
| `scrollbarbutton-up`                                                         | ```css hidden
 div {-moz-appearance: scrollbarbutton-up; -webkit-appearance: scrollbarbutton-up; color: black; }
``````html hidden
          <div>Lorem</div>
```{{EmbedLiveSample("sampleScrollbarButtonUp",100,50,"","", "nobutton")}}                       |                                                                                                                                                                                                                           |
| `scrollbarthumb-horizontal`                                                  | ```css hidden
 div {-moz-appearance: scrollbarthumb-horizontal; -webkit-appearance: scrollbarthumb-horizontal; color: black; }
``````html hidden
          <div>Lorem</div>
```{{EmbedLiveSample("sampleScrollbarThumbHorizontal",100,50,"","", "nobutton")}} |                                                                                                                                                                                                                           |
| `scrollbarthumb-vertical`                                                    | ```css hidden
 div {-moz-appearance: scrollbarthumb-vertical; -webkit-appearance: scrollbarthumb-vertical; color: black; }
``````html hidden
          <div>Lorem</div>
```{{EmbedLiveSample("sampleScrollbarThumbVertical",100,50,"","", "nobutton")}}         |                                                                                                                                                                                                                           |
| `scrollbartrack-horizontal`                                                  | ```css hidden
 div {-moz-appearance: scrollbartrack-horizontal; -webkit-appearance: scrollbartrack-horizontal; color: black; }
``````html hidden
          <div>Lorem</div>
```{{EmbedLiveSample("sampleScrollbarTrackHorizontal",100,50,"","", "nobutton")}} |                                                                                                                                                                                                                           |
| `scrollbartrack-vertical`                                                    | ```css hidden
 div {-moz-appearance: scrollbartrack-vertical; -webkit-appearance: scrollbarbartrack-vertical; color: black; }
``````html hidden
          <div>Lorem</div>
```{{EmbedLiveSample("sampleScrollbarTrackVertical",100,50,"","", "nobutton")}}      |                                                                                                                                                                                                                           |
| `searchfield`                                                                | ```css hidden
 div {-moz-appearance: searchfield; -webkit-appearance: searchfield; color: black; }
``````html hidden
          <div>Lorem</div>
```{{EmbedLiveSample("sampleSearchField",100,50,"","", "nobutton")}}                                             |                                                                                                                                                                                                                           |
| `separator`                                                                  | ```css hidden
 div {-moz-appearance: separator; -webkit-appearance: separator; color: transparent; }
``````html hidden
          <div>Lorem</div>
```{{EmbedLiveSample("sampleSeparator",100,50,"","", "nobutton")}}                                               |                                                                                                                                                                                                                           |
| `sheet`                                                                      | ```css hidden
 div {-moz-appearance: sheet; -webkit-appearance: sheet; color: black; }
``````html hidden
          <div>Lorem</div>
```{{EmbedLiveSample("sampleSheet",100,50,"","", "nobutton")}}                                                                 |                                                                                                                                                                                                                           |
| `spinner`                                                                    | ```css hidden
 div {-moz-appearance: spinner; -webkit-appearance: spinner; color: transparent; }
``````html hidden
          <div>Lorem</div>
```{{EmbedLiveSample("sampleSpinner",100,50,"","", "nobutton")}}                                                       |                                                                                                                                                                                                                           |
| `spinner-downbutton`                                                         | ```css hidden
 div {-moz-appearance: spinner-downbutton; -webkit-appearance: spinner-downbutton; color: black; }
``````html hidden
          <div>Lorem</div>
```{{EmbedLiveSample("sampleSpinnerDownbutton",100,50,"","", "nobutton")}}                       |                                                                                                                                                                                                                           |
| `spinner-textfield`                                                          | ```css hidden
 div {-moz-appearance: spinner-textfield; -webkit-appearance: spinner-textfield; color: black; }
``````html hidden
          <div>Lorem</div>
```{{EmbedLiveSample("sampleSpinnerTextfield",100,50,"","", "nobutton")}}                             |                                                                                                                                                                                                                           |
| `spinner-upbutton`                                                           | ```css hidden
 div {-moz-appearance: spinner-upbutton; -webkit-appearance: spinner-upbutton; color: black; }
``````html hidden
          <div>Lorem</div>
```{{EmbedLiveSample("sampleSpinnerUpbutton",100,50,"","", "nobutton")}}                               |                                                                                                                                                                                                                           |
| `splitter`                                                                   | ```css hidden
 div {-moz-appearance: splitter; -webkit-appearance: splitter; color: transparent; }
``````html hidden
          <div>Lorem</div>
```{{EmbedLiveSample("sampleSplitter",100,50,"","", "nobutton")}}                                                 |                                                                                                                                                                                                                           |
| `statusbar`                                                                  | ```css hidden
 div {-moz-appearance: statusbar; -webkit-appearance: statusbar; color: black; }
``````html hidden
          <div>Lorem</div>
```{{EmbedLiveSample("sampleStatusBar",100,50,"","", "nobutton")}}                                                     |                                                                                                                                                                                                                           |
| `statusbarpanel`                                                             | ```css hidden
 div {-moz-appearance: statusbarpanel; -webkit-appearance: statusbarpanel; color: black; }
``````html hidden
          <div>Lorem</div>
```{{EmbedLiveSample("sampleStatusBarPanel",100,50,"","", "nobutton")}}                                   |                                                                                                                                                                                                                           |
| `tab`                                                                        | ```css hidden
 div {-moz-appearance: tab; -webkit-appearance: tab; height: 20px; color: black; }
``````html hidden
          <div>Lorem</div>
```{{EmbedLiveSample("sampleTab",100,50,"","", "nobutton")}}                                                           |                                                                                                                                                                                                                           |
| `tabpanel`                                                                   | ```css hidden
 div {-moz-appearance: tabpanel; -webkit-appearance: tabpanel; color: black; }
``````html hidden
          <div>Lorem</div>
```{{EmbedLiveSample("sampleTabPanel",100,50,"","", "nobutton")}}                                                       |                                                                                                                                                                                                                           |
| `tabpanels`                                                                  | ```css hidden
 div {-moz-appearance: tabpanels; -webkit-appearance: tabpanels; color: black; }
``````html hidden
          <div>Lorem</div>
```{{EmbedLiveSample("sampleTabPanels",100,50,"","", "nobutton")}}                                                     |                                                                                                                                                                                                                           |
| `tab-scroll-arrow-back`                                                      | ```css hidden
 div {-moz-appearance: tab-scroll-arrow-back; -webkit-appearance: tab-scroll-arrow-back; color: black; }
``````html hidden
          <div>Lorem</div>
```{{EmbedLiveSample("sampleTabScrollArrowBack",100,50,"","", "nobutton")}}                 |                                                                                                                                                                                                                           |
| `tab-scroll-arrow-forward`                                                   | ```css hidden
 div {-moz-appearance: tab-scroll-arrow-forward; -webkit-appearance: tab-scroll-arrow-forward; color: black; }
``````html hidden
          <div>Lorem</div>
```{{EmbedLiveSample("sampleTabScrollArrowForward",100,50,"","", "nobutton")}}       |                                                                                                                                                                                                                           |
| `textfield`                                                                  | ```css hidden
 div {-moz-appearance: textfield; -webkit-appearance: textfield; color: black; }
``````html hidden
          <div>Lorem</div>
```{{EmbedLiveSample("sampleTextField",100,50,"","", "nobutton")}}                                                     |                                                                                                                                                                                                                           |
| `textfield-multiline`                                                        | ```css hidden
 div {-moz-appearance: textfield-multiline; -webkit-appearance: textfield-multiline; color: black; }
``````html hidden
          <div>Lorem</div>
```{{EmbedLiveSample("sampleTextfieldMultiline",100,50,"","", "nobutton")}}                     |                                                                                                                                                                                                                           |
| `toolbar`                                                                    | ```css hidden
 div {-moz-appearance: toolbar; -webkit-appearance: toolbar; color: black; }
``````html hidden
          <div>Lorem</div>
```{{EmbedLiveSample("sampleToolbar",100,50,"","", "nobutton")}}                                                             |                                                                                                                                                                                                                           |
| `toolbarbutton`                                                              | ```css hidden
 div {-moz-appearance: toolbarbutton; -webkit-appearance: toolbarbutton; color: black; }
``````html hidden
          <div>Lorem</div>
```{{EmbedLiveSample("sampleToolbarButton",100,50,"","", "nobutton")}}                                         |                                                                                                                                                                                                                           |
| `toolbarbutton-dropdown`                                                     | ```css hidden
 div {-moz-appearance: toolbarbutton-dropdown; -webkit-appearance: toolbarbutton-dropdown; color: black; }
``````html hidden
          <div>Lorem</div>
```{{EmbedLiveSample("sampleToolbarButtonDropdown",100,50,"","", "nobutton")}}           |                                                                                                                                                                                                                           |
| `toolbargripper`                                                             | ```css hidden
 div {-moz-appearance: toolbargripper; -webkit-appearance: toolbargripper; color: black; }
``````html hidden
          <div>Lorem</div>
```{{EmbedLiveSample("sampleToolbarGripper",100,50,"","", "nobutton")}}                                   |                                                                                                                                                                                                                           |
| `toolbox`                                                                    | ```css hidden
 div {-moz-appearance: toolbox; -webkit-appearance: toolbox; color: black; }
``````html hidden
          <div>Lorem</div>
```{{EmbedLiveSample("sampleToolbox",100,50,"","", "nobutton")}}                                                             |                                                                                                                                                                                                                           |
| `tooltip`                                                                    | ```css hidden
 div {-moz-appearance: tooltip; -webkit-appearance: tooltip; color: black; }
``````html hidden
          <div>Lorem</div>
```{{EmbedLiveSample("sampleTooltip",100,50,"","", "nobutton")}}                                                             |                                                                                                                                                                                                                           |
| `treeheader`                                                                 | ```css hidden
 div {-moz-appearance: treeheader; -webkit-appearance: treeheader; color: black; }
``````html hidden
          <div>Lorem</div>
```{{EmbedLiveSample("sampleTreeHeader",100,50,"","", "nobutton")}}                                                   |                                                                                                                                                                                                                           |
| `treeheadercell`                                                             | ```css hidden
 div {-moz-appearance: treeheadercell; -webkit-appearance: treeheadercell; height:20px; color: black; }
``````html hidden
          <div>Lorem</div>
```{{EmbedLiveSample("sampleTreeHeaderCell",100,50,"","", "nobutton")}}                      |                                                                                                                                                                                                                           |
| `treeheadersortarrow`                                                        | ```css hidden
 div {-moz-appearance: treeheadersortarrow; -webkit-appearance: treeheadersortarrow; color: black; }
``````html hidden
          <div>Lorem</div>
```{{EmbedLiveSample("sampleTreeHeaderSortArrow",100,50,"","", "nobutton")}}                     |                                                                                                                                                                                                                           |
| `treeitem`                                                                   | ```css hidden
 div {-moz-appearance: treeitem; -webkit-appearance: treeitem; color: black; }
``````html hidden
          <div>Lorem</div>
```{{EmbedLiveSample("sampleTreeItem",100,50,"","", "nobutton")}}                                                       |                                                                                                                                                                                                                           |
| `treeline`                                                                   | ```css hidden
 div {-moz-appearance: treeline; -webkit-appearance: treeline; color: black; }
``````html hidden
          <div>Lorem</div>
```{{EmbedLiveSample("sampleTreeLine",100,50,"","", "nobutton")}}                                                       |                                                                                                                                                                                                                           |
| `treetwisty`                                                                 | ```css hidden
 div {-moz-appearance: treetwisty; -webkit-appearance: treetwisty; color: transparent; }
``````html hidden
          <div>Lorem</div>
```{{EmbedLiveSample("sampleTreeTwisty",100,50,"","", "nobutton")}}                                             |                                                                                                                                                                                                                           |
| `treetwistyopen`                                                             | ```css hidden
 div {-moz-appearance: treetwistyopen; -webkit-appearance: treetwistyopen; color: transparent; }
``````html hidden
          <div>Lorem</div>
```{{EmbedLiveSample("sampleTreeTwistyOpen",100,50,"","", "nobutton")}}                             |                                                                                                                                                                                                                           |
| `treeview`                                                                   | ```css hidden
 div {-moz-appearance: treeview; -webkit-appearance: treeview; color: black; }
``````html hidden
          <div>Lorem</div>
```{{EmbedLiveSample("sampleTreeView",100,50,"","", "nobutton")}}                                                       |                                                                                                                                                                                                                           |
| `-moz-mac-unified-toolbar`                                                   | ```css hidden
 div {-moz-appearance: -moz-mac-unified-toolbar; color: black; }
``````html hidden
          <div>Lorem</div>
```{{EmbedLiveSample("sampleMacUnifiedToolbar",100,50,"","", "nobutton")}}                                                         | **Nur Mac OS X**. Dies ermöglicht die Darstellung von Toolbar und Titelleiste unter Verwendung des einheitlichen Toolbarstils, wie er in Anwendungen unter Mac OS X 10.4 und neuer zu sehen ist.                          |
| {{ gecko_minversion_inline("2.0") }} `-moz-win-borderless-glass` | ```css hidden
 div {-moz-appearance: -moz-win-borderless-glass; color: black; }
``````html hidden
          <div>Lorem</div>
```{{EmbedLiveSample("sampleWinBorderlessGlass",100,50,"","", "nobutton")}}                                                        | **Nur Windows Vista und neuer**. Dieser Stil wendet den Aero Glass Effekt - aber ohne einen Rahmen - auf das Element an.                                                                                                  |
| `-moz-win-browsertabbar-toolbox`                                             | ```css hidden
 div {-moz-appearance: -moz-win-browsertabbar-toolbox; color: black; }
``````html hidden
          <div>Lorem</div>
```{{EmbedLiveSample("sampleWinBrowsertabbarToolbox",100,50,"","", "nobutton")}}                                           | **Nur Windows Vista und neuer**. Dieser Toolboxstil ist dazu gedacht, um für die Tableiste in einem Browser verwendet zu werden.                                                                                          |
| `-moz-win-communicationstext`                                                | ```css hidden
 div {-moz-appearance: -moz-win-communicationstext; color: black; }
``````html hidden
          <div>Lorem</div>
```{{EmbedLiveSample("sampleWinCommunicationstext",100,50,"","", "nobutton")}}                                                  |                                                                                                                                                                                                                           |
| `-moz-win-communications-toolbox`                                            | ```css hidden
 div {-moz-appearance: -moz-win-communications-toolbox; color: black; }
``````html hidden
          <div>Lorem</div>
```{{EmbedLiveSample("sampleWinCommunicationsToolbox",100,50,"","", "nobutton")}}                                          | **Nur Windows Vista und neuer**. Dieser Toolboxstil ist dazu gedacht, in Kommunikations- und Produktivitätsanwendungen verwendet zu werden. Die entsprechende Vordergrundfarbe ist `-moz-win-communicationstext`.         |
| {{gecko_minversion_inline("6.0")}} `-moz-win-exclude-glass`        | ```css hidden
 div {-moz-appearance: -moz-win-exclude-glass; color: black; }
``````html hidden
          <div>Lorem</div>
```{{EmbedLiveSample("sampleWinExcludeGlass",100,50,"","", "nobutton")}}                                                               | **Nur Windows Vista und neuer**. Dieser Stil wird dazu verwendet, um den Aero Glass Effekt für das Element auszuschließen.                                                                                                |
| `-moz-win-glass`                                                             | ```css hidden
 div {-moz-appearance: -moz-win-glass; color: black; }
``````html hidden
          <div>Lorem</div>
```{{EmbedLiveSample("sampleWinGlass",100,50,"","", "nobutton")}}                                                                               | **Nur Windows Vista und neuer**. Dieser Stil wendet den Aero Glass Effekt auf das Element an.                                                                                                                             |
| `-moz-win-mediatext`                                                         | ```css hidden
 div {-moz-appearance: -moz-win-mediatext; color: black; }
``````html hidden
          <div>Lorem</div>
```{{EmbedLiveSample("sampleWinMediaText",100,50,"","", "nobutton")}}                                                                       |                                                                                                                                                                                                                           |
| `-moz-win-media-toolbox`                                                     | ```css hidden
 div {-moz-appearance: -moz-win-media-toolbox; color: black; }
``````html hidden
          <div>Lorem</div>
```{{EmbedLiveSample("sampleWinMediaToolbox",100,50,"","", "nobutton")}}                                                               | **Nur Windows Vista und neuer**. Dieser Toolboxstil ist dazu gedacht, um in Anwendungen verwendet zu werden, die Medienobjekte verwalten. Die Entsprechende Vordergrundfarbe ist `-moz-win-mediatext`.                    |
| `-moz-window-button-box`                                                     | ```css hidden
 div {-moz-appearance: -moz-window-button-box; color: black; }
``````html hidden
          <div>Lorem</div>
```{{EmbedLiveSample("sampleWindowButtonBox",100,50,"","", "nobutton")}}                                                               |                                                                                                                                                                                                                           |
| `-moz-window-button-box-maximized`                                           | ```css hidden
 div {-moz-appearance: -moz-window-button-box-maximized; color: black; }
``````html hidden
          <div>Lorem</div>
```{{EmbedLiveSample("sampleWindowButtonBoxMaximized",100,50,"","", "nobutton")}}                                         |                                                                                                                                                                                                                           |
| `-moz-window-button-close`                                                   | ```css hidden
 div {-moz-appearance: -moz-window-button-close; color: black; }
``````html hidden
          <div>Lorem</div>
```{{EmbedLiveSample("sampleWindowButtonClose",100,50,"","", "nobutton")}}                                                         |                                                                                                                                                                                                                           |
| `-moz-window-button-maximize`                                                | ```css hidden
 div {-moz-appearance: -moz-window-button-maximize; color: black; }
``````html hidden
          <div>Lorem</div>
```{{EmbedLiveSample("sampleWindowButtonMaximize",100,50,"","", "nobutton")}}                                                  |                                                                                                                                                                                                                           |
| `-moz-window-button-minimize`                                                | ```css hidden
 div {-moz-appearance: -moz-window-button-minimize; color: black; }
``````html hidden
          <div>Lorem</div>
```{{EmbedLiveSample("sampleWindowButtonMinimize",100,50,"","", "nobutton")}}                                                  |                                                                                                                                                                                                                           |
| `-moz-window-button-restore`                                                 | ```css hidden
 div {-moz-appearance: -moz-window-button-restore; color: black; }
``````html hidden
          <div>Lorem</div>
```{{EmbedLiveSample("sampleWindowButtonRestore",100,50,"","", "nobutton")}}                                                       |                                                                                                                                                                                                                           |
| `-moz-window-frame-bottom`                                                   | ```css hidden
 div {-moz-appearance: -moz-window-frame-bottom; color: black; }
``````html hidden
          <div>Lorem</div>
```{{EmbedLiveSample("sampleWindowFrameBottom",100,50,"","", "nobutton")}}                                                         |                                                                                                                                                                                                                           |
| `-moz-window-frame-left`                                                     | ```css hidden
 div {-moz-appearance: -moz-window-frame-left; color: black; }
``````html hidden
          <div>Lorem</div>
```{{EmbedLiveSample("sampleWindowFrameLeft",100,50,"","", "nobutton")}}                                                               |                                                                                                                                                                                                                           |
| `-moz-window-frame-right`                                                    | ```css hidden
 div {-moz-appearance: -moz-window-frame-right; color: black; }
``````html hidden
          <div>Lorem</div>
```{{EmbedLiveSample("sampleWindowFrameRight",100,50,"","", "nobutton")}}                                                              |                                                                                                                                                                                                                           |
| `-moz-window-titlebar`                                                       | ```css hidden
 div {-moz-appearance: -moz-window-titlebar; color: black; }
``````html hidden
          <div>Lorem</div>
```{{EmbedLiveSample("sampleWindowTitlebar",100,50,"","", "nobutton")}}                                                                 |                                                                                                                                                                                                                           |
| `-moz-window-titlebar-maximized`                                             | ```css hidden
 div {-moz-appearance: -moz-window-titlebar-maximized; color: black; }
``````html hidden
          <div>Lorem</div>
```{{EmbedLiveSample("sampleWindowTitlebarMaximized",100,50,"","", "nobutton")}}                                           |                                                                                                                                                                                                                           |

## Formale Syntax

{{csssyntax}}

## Beispiele

```css
.exampleone {
	-moz-appearance: toolbarbutton;
}
```

## Spezifikationen

{The `appearance` property is currently not present in any newer CSS specification.

## Browser Kompatibilität

{{Compat}}

\[1] Nicht vollständig unterstützt.

\[2] Nur die Werte `none`, `button`, und `textfield` werden unterstützt. Siehe die [Dokumentation auf MSDN](https://msdn.microsoft.com/en-us/library/ie/dn793580%28v=vs.85%29.aspx).

## Siehe auch

*   [Definition von `appearance` in CSS 3 Basic User Interface](http://www.w3.org/TR/2004/CR-css3-ui-20040511/#appearance) (Candidate Recommendation vom 2004-05-11), veraltet (Die `appearance` Eigenschaft wurde in neueren Versionen dieser Spezifikation verworfen.)
*   [Verworfene CSS3 Features der UI Spezifikation](https://wiki.csswg.org/spec/css4-ui#dropped-css3-features)
```````
