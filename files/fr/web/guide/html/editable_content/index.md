---
title: Contenu éditable
slug: Web/Guide/HTML/Editable_content
translation_of: Web/Guide/HTML/Editable_content
original_slug: Web/HTML/Contenu_editable
---
## Introduction

Chaque élément du HTML5 peut être éditable. Cette fonctionnalité a été introduite longtemps auparavant mais a maintenant été standarisée avec [WHATWG](http://www.whatwg.org/) ([voir la spécification HTML actuelle](http://www.whatwg.org/specs/web-apps/current-work/multipage/editing.html#contenteditable)). Avec des gestionnaires d'événements JavaScript, vous pouvez transformer votre page Web en un éditeur de texte, complet et rapide.

## Compatibilité

Le contenu éditable est entièrement compatible avec les navigateurs actuels :

- Firefox 3.5+
- Chrome 6.0+
- Internet Explorer 6.0+
- Safari 3.2+
- Opera 8+
- iOS Safari 5.0+
- Android Browser 3.0+

Ce n'est pas encore supporté par Opera Mini et Opera Mobile.

## Comment ça marche ?

Fixez l'attribut `contenteditable` à `true` dans votre élément HTML. Ça peut être fait dans quasiment tous les éléments HTML.

## Exemples

Un exemple simple :

    <!DOCTYPE html>
    <html>
      <body>
        <div contenteditable="true">
          Ce texte peut être édité par l'utilisateur.
        </div>
      </body>
    </html>

Vous pouvez observer un exemple concret intégrant JavaScript utilisant LocalStorage [ici](http://html5demos.com/contenteditable). Le code source est disponible [ici](http://html5demos.com/contenteditable#view-source).

## Voir aussi

[Comment interagir avec le contenu ](/fr/docs/Midas "en/Midas")(style proche de l'ancienne API Internet Explorer) ou encore [ici](/fr/docs/Rich-Text_Editing_in_Mozilla "en/rich-text editing in mozilla").

{{ languages({ "ja": "ja/HTML/Content_Editable", "zh-cn": "zh-cn/HTML/Content_Editable" }) }}
