---
title: manifest.json
slug: Mozilla/Add-ons/WebExtensions/manifest.json
---

{{AddonSidebar}}

manifest.json 파일은 json 포맷 파일로서, 모든 웹 익스텐션이 포함하고 있어야 하는 파일입니다.

manifest.json을 사용함으로써, 당신은 당신의 익스텐션의 이름, 버젼과 같은 기본 정보를 명시하며, 또한 당신의 익스텐션의 기능, 예를 들어 기본 스크립트, 내용 스크립트, 브라우져 활동 등과 같은 측면을 명시합니다.

manifest.json에 지원되는 키들은 아래와 같습니다.

{{ ListSubpages ("/en-US/Add-ons/WebExtensions/manifest.json") }}

`"manifest_version"`, `"version"`, `"name" 키들은 반드시 있어야 합니다.`

"\_locales" 경로가 있다면, `"default_locale"` 은 반드시 있어야 하며, `"_locales"` 경로가 없다면, `"default_locale"` 은 없어야 합니다.`

`"applications"는 구글 크롬에서는 지원되지 않고, 파이어폭스 48 이전 버젼에는 의무적으로 있어야 합니다.`

간단한 manifest.json 구문은 다음과 같습니다:

```json
{
  "applications": {
    "gecko": {
      "id": "addon@example.com",
      "strict_min_version": "42.0",
      "strict_max_version": "50.*",
      "update_url": "https://example.com/updates.json"
    }
  },

  "background": {
    "scripts": ["jquery.js", "my-background.js"],
    "page": "my-background.html"
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

  "web_accessible_resources": ["images/my-image.png"]
}
```
