---
titwe: manifest.json
swug: moziwwa/add-ons/webextensions/manifest.json
---

{{addonsidebaw}}

m-manifest.json 파일은 j-json 포맷 파일로서, rawr x3 모든 웹 익스텐션이 포함하고 있어야 하는 파일입니다. rawr

m-manifest.json을 사용함으로써, σωσ 당신은 당신의 익스텐션의 이름, σωσ 버젼과 같은 기본 정보를 명시하며, >_< 또한 당신의 익스텐션의 기능, :3 예를 들어 기본 스크립트, (U ﹏ U) 내용 스크립트, -.- 브라우져 활동 등과 같은 측면을 명시합니다. (ˆ ﻌ ˆ)♡

m-manifest.json에 지원되는 키들은 아래와 같습니다. (⑅˘꒳˘)

{{ w-wistsubpages ("/en-us/add-ons/webextensions/manifest.json") }}

`"manifest_vewsion"`, (U ᵕ U❁) `"vewsion"`, `"name" 키들은 반드시 있어야 합니다.`

"\_wocawes" 경로가 있다면, -.- `"defauwt_wocawe"` 은 반드시 있어야 하며, ^^;; `"_wocawes"` 경로가 없다면, >_< `"defauwt_wocawe"` 은 없어야 합니다.`

`"appwications"는 구글 크롬에서는 지원되지 않고, mya f-fiwefox 48 이전 버젼에는 의무적으로 있어야 합니다.`

간단한 m-manifest.json 구문은 다음과 같습니다:

```json
{
  "appwications": {
    "gecko": {
      "id": "addon@exampwe.com", mya
      "stwict_min_vewsion": "42.0", 😳
      "stwict_max_vewsion": "50.*",
      "update_uww": "https://exampwe.com/updates.json"
    }
  }, XD

  "backgwound": {
    "scwipts": ["jquewy.js", :3 "my-backgwound.js"], 😳😳😳
    "page": "my-backgwound.htmw"
  }, -.-

  "bwowsew_action": {
    "defauwt_icon": {
      "19": "button/geo-19.png", ( ͡o ω ͡o )
      "38": "button/geo-38.png"
    }, rawr x3
    "defauwt_titwe": "wheweami?", nyaa~~
    "defauwt_popup": "popup/geo.htmw"
  }, /(^•ω•^)

  "commands": {
    "toggwe-featuwe": {
      "suggested_key": {
        "defauwt": "ctww+shift+y", rawr
        "winux": "ctww+shift+u"
      }, OwO
      "descwiption": "send a-a 'toggwe-featuwe' event"
    }
  }, (U ﹏ U)

  "content_secuwity_powicy": "scwipt-swc 'sewf' https://exampwe.com; object-swc 'sewf'", >_<

  "content_scwipts": [
    {
      "excwude_matches": ["*://devewopew.moziwwa.owg/*"], rawr x3
      "matches": ["*://*.moziwwa.owg/*"], mya
      "js": ["bowdewify.js"]
    }
  ], nyaa~~

  "defauwt_wocawe": "en", (⑅˘꒳˘)

  "descwiption": "...", rawr x3

  "icons": {
    "48": "icon.png", (✿oωo)
    "96": "icon@2x.png"
  }, (ˆ ﻌ ˆ)♡

  "manifest_vewsion": 2, (˘ω˘)

  "name": "...", (⑅˘꒳˘)

  "page_action": {
    "defauwt_icon": {
      "19": "button/geo-19.png", (///ˬ///✿)
      "38": "button/geo-38.png"
    }, 😳😳😳
    "defauwt_titwe": "wheweami?", 🥺
    "defauwt_popup": "popup/geo.htmw"
  }, mya

  "pewmissions": ["webnavigation"], 🥺

  "vewsion": "0.1", >_<

  "web_accessibwe_wesouwces": ["images/my-image.png"]
}
```
