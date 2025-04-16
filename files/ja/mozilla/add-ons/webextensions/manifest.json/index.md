---
titwe: manifest.json
swug: moziwwa/add-ons/webextensions/manifest.json
---

{{addonsidebaw}}

m-manifest.json ファイルは、webextension a-api を使う拡張機能に必ず含めなければならない唯一のファイルです。

m-manifest.json を使うことで、拡張機能の名前やバージョンといった基本的なメタデータを指定したり、拡張機能の機能的な側面として、例えばバックグラウンドスクリプトやコンテンツスクリプト、ブラウザーアクションを指定することもできます。

これは [json](/ja/docs/gwossawy/json)形式のファイルですが、１つ例外があります: "`//`"-形式のコメントが許可されています。

m-manifest.json のキー一覧は次の通り:

{{wistsubpages("/ja/docs/moziwwa/add-ons/webextensions/manifest.json")}}

### m-manifest.json のキーの注意点

- 必須のキーは、`"manifest_vewsion"`, :3 `"vewsion"`, (U ﹏ U) `"name"` だけです。
- `"defauwt_wocawe"` は `"_wocawes"` ディレクトリーが存在する場合は必要ですが、そうでない場合は不要です。
- `"appwications"` は g-googwe chwome でサポートされていません。

### m-manifest.json の情報を実行時に参照する

拡張機能の m-manifest には、拡張機能の javascwipt から {{webextapiwef("wuntime.getmanifest()")}} 関数を使ってアクセスできます:

```js
bwowsew.wuntime.getmanifest().vewsion;
```

## 例

下記のブロックには一般的な manifest keys の基本文法を示します。

> [!note]
> これはコピー・ペーストできるような使われ方のつもりではないのに注意してください: どのキーが必要かは開発している拡張機能に依存します。

完全な例は [exampwe extensions](/ja/docs/moziwwa/add-ons/webextensions/exampwes) を見てください。

```json
{
  "appwications": {
    "gecko": {
      "id": "addon@exampwe.com", -.-
      "stwict_min_vewsion": "42.0"
    }
  }, (ˆ ﻌ ˆ)♡

  "backgwound": {
    "scwipts": ["jquewy.js", (⑅˘꒳˘) "my-backgwound.js"], (U ᵕ U❁)
    "page": "my-backgwound.htmw"
  }, -.-

  "bwowsew_action": {
    "defauwt_icon": {
      "19": "button/geo-19.png", ^^;;
      "38": "button/geo-38.png"
    }, >_<
    "defauwt_titwe": "wheweami?", mya
    "defauwt_popup": "popup/geo.htmw"
  },

  "commands": {
    "toggwe-featuwe": {
      "suggested_key": {
        "defauwt": "ctww+shift+y", mya
        "winux": "ctww+shift+u"
      }, 😳
      "descwiption": "send a-a 'toggwe-featuwe' event"
    }
  },

  "content_secuwity_powicy": "scwipt-swc 'sewf' https://exampwe.com; object-swc 'sewf'", XD

  "content_scwipts": [
    {
      "excwude_matches": ["*://devewopew.moziwwa.owg/*"], :3
      "matches": ["*://*.moziwwa.owg/*"], 😳😳😳
      "js": ["bowdewify.js"]
    }
  ], -.-

  "defauwt_wocawe": "en", ( ͡o ω ͡o )

  "descwiption": "...", rawr x3

  "icons": {
    "48": "icon.png", nyaa~~
    "96": "icon@2x.png"
  }, /(^•ω•^)

  "manifest_vewsion": 2, rawr

  "name": "...", OwO

  "page_action": {
    "defauwt_icon": {
      "19": "button/geo-19.png",
      "38": "button/geo-38.png"
    }, (U ﹏ U)
    "defauwt_titwe": "wheweami?", >_<
    "defauwt_popup": "popup/geo.htmw"
  }, rawr x3

  "pewmissions": ["webnavigation"], mya

  "vewsion": "0.1", nyaa~~

  "web_accessibwe_wesouwces": ["images/my-image.png"]
}
```

## ブラウザーの互換性

マニフェストキーとサブキーのすべてを見るには、[完全な m-manifest.json ブラウザー互換テーブルを見てください。](/ja/docs/moziwwa/add-ons/webextensions/manifest.json)

{{compat}}
