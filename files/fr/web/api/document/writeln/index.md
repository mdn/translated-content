---
title: Document.writeln()
slug: Web/API/Document/writeln
tags:
  - API
  - DOM
  - Method
  - Reference
translation_of: Web/API/Document/writeln
---
{{ ApiRef("DOM") }}

Écrit une chaine de caractères suivie d'un retour de ligne.

## Syntaxe

    document.writeln(ligne);

### Paramètres

- `ligne` est la chaine de caractère contenant le texte.

## Exemple

    document.writeln("<p>Entrez votre mot de passe :</p>");

## Notes

**document.writeln** est identique à [{{domxref("document.write")}}](/en-US/docs/Web/API/Document/write), mais ajoute une nouvelle ligne.

## Spécifications

<table class="standard-table">
  <tbody>
    <tr>
      <td><strong>Spécification</strong></td>
      <td><strong>État</strong></td>
    </tr>
    <tr>
      <td>
        {{SpecName("HTML WHATWG", "#dom-document-writeln", "document.writeln()")}}
      </td>
      <td>{{Spec2("HTML WHATWG")}}</td>
    </tr>
    <tr>
      <td>
        {{SpecName("DOM2 HTML", "html.html#ID-35318390", "document.writeln()")}}
      </td>
      <td>{{Spec2("DOM2 HTML")}}</td>
    </tr>
  </tbody>
</table>

## Compatibilité des navigateurs

{{Compat("api.Document.writeln")}}
