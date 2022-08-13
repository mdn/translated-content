---
title: Content Editable
slug: Web/Guide/HTML/Editable_content
tags:
  - HTML5 Inhalt ändern editierbar
translation_of: Web/Guide/HTML/Editable_content
original_slug: Web/Guide/HTML/Content_Editable
---
In HTML5 kann jedes Element editiert werden. Mit JavaScript Event handlers können Sie Ihre Webseite in einen umfangreichen und schnellen Texteditor verwandeln. Dieser Artikel gibt einige Informationen über diese Funktion.

## Kompatibilität

Content editable ist kompatibel mit folgenden Browsern.

- Firefox 3.5+
- Firefox for Android 19+
- Chrome 4.0+
- Internet Explorer 5.5+
- Safari 3.1+
- Opera 9+
- iOS Safari 5.0+
- Android Browser 3.0+
- Opera Mobile 12.1+
- Chrome for Android 25+

Keine Unterstützung in Opera Mini.

## Wie funktioniert es?

Ändere das {{DOMXRef("HTMLElement.contentEditable", "contentEditable")}} Attribut zu `true` in deinem HTML Element. Es kann in nahezu allen HTML Elementen genutzt werden.

## Beispiele

Ein einfaches Beispiel:

```html
<div contenteditable="true">
  This text can be edited by the user.
</div>
```

Das obige Beispiel kann direkt ausprobiert werden:

{{ EmbedLiveSample('Beispiele') }}

## Weiterführende Informationen

```js
user_pref("capability.policy.policynames", "allowclipboard");
user_pref("capability.policy.allowclipboard.sites", "https://www.mozilla.org");
user_pref("capability.policy.allowclipboard.Clipboard.cutcopy", "allAccess");
user_pref("capability.policy.allowclipboard.Clipboard.paste", "allAccess");
```

[How to interact with the content](/en/Midas "en/Midas")(old IE style API) and [here](/en/Rich-Text_Editing_in_Mozilla "en/rich-text editing in mozilla")
