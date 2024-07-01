---
title: Content Editable
slug: conflicting/Web/HTML/Global_attributes/contenteditable
---

No HTML5 qualquer elemento pode ser editado. Usando alguns eventos de JavaScript podemos transformar sua web page em um editor de texto completo e rápido. Este artigo fornece algumas informações sobre esta funcionalidade.

## Compatibilidade

Conteúdo editável é totalmente compatível com os seguintes browsers.

- Firefox 3.5+
- Firefox for Android 19+
- Chrome 4.0+
- Internet Explorer 5.5+ \*
- Safari 3.1+
- Opera 9+
- iOS Safari 5.0+
- Android Browser 3.0+
- Opera Mobile 12.1+
- Chrome for Android 25+

Ainda não é suportato pelo Opera Mini.

> **Nota:** \*A maioria dos elementos HTML não suporta esta funcionalidade

## Como isso funciona?

Defina o atributo {{DOMXRef("HTMLElement.contentEditable", "contentEditable")}} para `true` no seu elemento HTML. Isto pode ser usado na maioria dos elementos HTML.

## Exemplos

Um exemplo simples:

```
<!DOCTYPE html>
<html>
  <body>
    <div contentEditable="true">
      Este conteúdo pode ser editado.
    </div>
  </body>
</html>
```

Você pode ver o exemplo funcionando com com uma integração de JavaScript utilizando LocalStorage [aqui](http://html5demos.com/contenteditable). Com a fonte [aqui](http://html5demos.com/contenteditable#view-source).

## Veja também

```
user_pref("capability.policy.policynames", "allowclipboard");
user_pref("capability.policy.allowclipboard.sites", "https://www.mozilla.org");
user_pref("capability.policy.allowclipboard.Clipboard.cutcopy", "allAccess");
user_pref("capability.policy.allowclipboard.Clipboard.paste", "allAccess");
```

[Como interagir com o conteúdo](/en/Midas) (Antiga API do IE) [aqui](/en/Rich-Text_Editing_in_Mozilla)
