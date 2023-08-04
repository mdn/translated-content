---
title: manifest.json
slug: Mozilla/Add-ons/WebExtensions/manifest.json
---

{{AddonSidebar}}

> **Примечание:** В этой статье описан файл manifest.json для веб-расширений. Если вы ищете информацию о manifest.json для Прогрессивных веб-приложений (PWAs), смотрите статью [Манифест веб-приложения](/ru/docs/Web/Манифест).

Файл `manifest.json` это единственный файл, который обязательно должен быть в каждом расширении, использующем API Веб-расширения (WebExtension APIs).

Используя manifest.json, вы определяете базовые метаданные о расширении, такие как имя и версия. Также можно определить некоторые аспекты функциональности (такие, как фоновые скрипты, контент скрипты и действия браузера).

Это файл в формате [JSON](/ru/docs/Glossary/JSON), но в нём можно использовать комментарии, каждая строка которых должна начинаться с "`//`".

## Список полей manifest.json

Поддерживаемые `manifest.json` поля перечислены ниже:

{{ListSubpages ("/en-US/Add-ons/WebExtensions/manifest.json") }}

### Примечания о полях manifest.json

- Поля `"manifest_version"`, `"version"` и `"name"` являются обязательными.
- Поле `"default_locale"` обязательно, если есть папка `"_locales"`, иначе его нужно опустить.
- Поле `"browser_specific_settings"` не поддерживается Google Chrome.

### Доступ к полям manifest.json во время выполнения

C помощью функции JavaScript {{WebExtAPIRef("runtime.getManifest()")}} можно получить доступ к файлу манифеста расширения:

```js
browser.runtime.getManifest().version;
```

## Пример

В следующем блоке показан основной синтаксис некоторых часто используемых полей манифеста.

> **Примечание:** Этот пример не рассчитан для того, чтобы его скопировали и вставили в файл реального проекта. Выбор нужных полей зависит от особенностей создаваемого расширения.

Если нужны примеры готовых расширений, смотрите [Примеры расширений](/ru/docs/Mozilla/Add-ons/WebExtensions/Examples).

```json
{
  "browser_specific_settings": {
    "gecko": {
      "id": "addon@example.com",
      "strict_min_version": "42.0"
    }
  },

  "background": {
    "scripts": ["jquery.js", "my-background.js"]
  },

  "browser_action": {
    "default_icon": {
      "19": "button/geo-19.png",
      "38": "button/geo-38.png"
    },
    "default_title": "Whereami?",
    "default_popup": "popup/geo.html"
  },

  "commands": {
    "toggle-feature": {
      "suggested_key": {
        "default": "Ctrl+Shift+Y",
        "linux": "Ctrl+Shift+U"
      },
      "description": "Send a 'toggle-feature' event"
    }
  },

  "content_security_policy": "script-src 'self' https://example.com; object-src 'self'",

  "content_scripts": [
    {
      "exclude_matches": ["*://developer.mozilla.org/*"],
      "matches": ["*://*.mozilla.org/*"],
      "js": ["borderify.js"]
    }
  ],

  "default_locale": "en",

  "description": "...",

  "icons": {
    "48": "icon.png",
    "96": "icon@2x.png"
  },

  "manifest_version": 2,

  "name": "...",

  "page_action": {
    "default_icon": {
      "19": "button/geo-19.png",
      "38": "button/geo-38.png"
    },
    "default_title": "Whereami?",
    "default_popup": "popup/geo.html"
  },

  "permissions": ["webNavigation"],

  "version": "0.1",

  "user_scripts": {
    "api_script": "apiscript.js"
  },

  "web_accessible_resources": ["images/my-image.png"]
}
```

## Совместимость с браузерами

Для полного обзора всех полей манифеста и их содержимого, смотрите [полную таблицу совместимости `manifest.json`](/ru/docs/Mozilla/Add-ons/WebExtensions/Browser_compatibility_for_manifest.json) с браузерами.

{{Compat}}

## Смотрите также

{{WebExtAPIRef("permissions")}} JavaScript API
