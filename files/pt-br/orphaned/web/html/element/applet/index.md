---
title: <applet>
slug: orphaned/Web/HTML/Element/applet
---

## Resumo

The HTML Applet Element (`<applet>`) identifies the inclusion of a Java applet.

> **Note:** **Usage note:** This element has been removed in HTML5 and shouldn't be used anymore. Instead web developers should use the more generic {{HTMLElement("object")}} element.

## Atributos

- {{htmlattrdef("align")}}
  - : This attribute is used to position the applet on the page relative to content that might flow around it. The HTML 4.01 specification defines values of bottom, left, middle, right, and top, whereas Microsoft and Netscape also might support **absbottom**, **absmiddle**, **baseline**, **center**, and **texttop**.
- {{htmlattrdef("alt")}}
  - : This attribute causes a descriptive text alternate to be displayed on browsers that do not support Java. Page designers should also remember that content enclosed within the `<applet>` element may also be rendered as alternative text.
- {{htmlattrdef("archive")}}
  - : This attribute refers to an archived or compressed version of the applet and its associated class files, which might help reduce download time.
- {{htmlattrdef("code")}}
  - : This attribute specifies the URL of the applet's class file to be loaded and executed. Applet filenames are identified by a .class filename extension. The URL specified by code might be relative to the `codebase` attribute.
- {{htmlattrdef("codebase")}}
  - : This attribute gives the absolute or relative URL of the directory where applets' .class files referenced by the code attribute are stored.
- {{htmlattrdef("datafld")}}
  - : This attribute, supported by Internet Explorer 4 and higher, specifies the column name from the data source object that supplies the bound data. This attribute might be used to specify the various {{HTMLElement("param")}} elements passed to the Java applet.
- {{htmlattrdef("datasrc")}}
  - : Like `datafld`, this attribute is used for data binding under Internet Explorer 4. It indicates the id of the data source object that supplies the data that is bound to the {{HTMLElement("param")}} elements associated with the applet.
- {{htmlattrdef("height")}}
  - : This attribute specifies the height, in pixels, that the applet needs.
- {{htmlattrdef("hspace")}}
  - : This attribute specifies additional horizontal space, in pixels, to be reserved on either side of the applet.
- {{htmlattrdef("mayscript")}}
  - : In the Netscape implementation, this attribute allows access to an applet by programs in a scripting language embedded in the document.
- {{htmlattrdef("name")}}
  - : This attribute assigns a name to the applet so that it can be identified by other resources; particularly scripts.
- {{htmlattrdef("object")}}
  - : This attribute specifies the URL of a serialized representation of an applet.
- {{htmlattrdef("src")}}
  - : As defined for Internet Explorer 4 and higher, this attribute specifies a URL for an associated file for the applet. The meaning and use is unclear and not part of the HTML standard.
- {{htmlattrdef("vspace")}}
  - : This attribute specifies additional vertical space, in pixels, to be reserved above and below the applet.
- {{htmlattrdef("width")}}
  - : This attribute specifies in pixels the width that the applet needs.

## Exemplo

```html
<applet code="game.class" align="left" archive="game.zip" height="250" width="350">
  <param name="difficulty" value="easy">
  <b>Sorry, you need Java to play this game.</b>
</applet>
```

## Compatibilidade com navegadores

{{Compat("html.elements.applet")}}

## Notas

The W3C specification does not encourage the use of `<applet>` and prefers the use of the {{HTMLElement("object")}} tag. Under the strict definition of HTML 4.01, this element is deprecated and entirely obsolete in HTML5.

{{HTMLSidebar}}
