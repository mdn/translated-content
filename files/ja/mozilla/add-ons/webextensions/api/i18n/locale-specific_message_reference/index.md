---
title: ロケール固有のメッセージ参照
slug: Mozilla/Add-ons/WebExtensions/API/i18n/Locale-Specific_Message_reference
---

国際化対応 (i18n) した拡張機能は、ロケール固有のメッセージを提供する少なくとも 1 個の `messages.json` というファイルを持っています。このページでは、`messages.json` の書式を説明します。

> **メモ:** **補足**: 拡張機能を国際化する方法についての情報は、[i18n](/ja/Add-ons/WebExtensions/WebExtension_i18n) ガイドを参照してください。

## messages.json example

次のコードは、[notify-link-clicks-i18n example](https://github.com/mdn/webextensions-examples/tree/master/notify-link-clicks-i18n) 拡張機能から取られた `messages.json ファイル` の例示です。"_name_" と "message" のフィールドのみが必須です。

```json
{
  "extensionName": {
    "message": "Notify link clicks i18n",
    "description": "Name of the extension."
  },

  "extensionDescription": {
    "message": "ユーザーがリンクをクリックしたときに通知を表示します。",
    "description": "Description of the extension."
  },

  "notificationTitle": {
    "message": "クリック通知",
    "description": "Title of the click notification."
  },

  "notificationContent": {
    "message": "$URL$ をクリックしました。",
    "description": "Tells the user which link they clicked.",
    "placeholders": {
      "url": {
        "content": "$1",
        "example": "https://developer.mozilla.org"
      }
    }
  }
}
```

## ファイルの配置

`messages.json` ファイルは、サポートされたロケール名 (`en`, `de`, `ja` など) のディレクトリー内に置く必要があります。さらにこれらは、拡張機能のルートディレクトリ内の `_locales` と呼ばれるディレクトリー内に置く必要があります。

## メンバーの詳細

このセクションは、`messages.json` 内に記述される各メンバーについて説明します。

### name

各トップレベルのメンバーは、ローカライズするメッセージ文字列の name の後に名付けられます。例えば、上記の例の `"extensionName"` や `"notificationContent"` です。name は大文字と小文字が区別され、ローカライズされたメッセージテキストを受け取るためのキーとして振る舞います。

name には、次の文字が使用できます:

- A-Z
- a-z
- 0-9
- \_ (アンダースコア)
- @

> **メモ:** @@ で始まる name を定義してはいけません。この名前は [事前定義されたメッセージ](/ja/Add-ons/WebExtensions/Internationalization#Predefined_messages) で予約されています。

### message

`"message"` メンバーは、[placeholders](#placeholders) を含むことのできるローカライズされた文字列を含みます。次のように使用します:

- _$placeholder\_name$_ (大文字と小文字を区別) は、文字列に特定のプレースホルダー (例えば、上記の例の $URL$) を挿入します。
- `$1`, `$2`, `$3` 等は、{{WebExtAPIRef("i18n.getMessage()")}} 呼び出し時に取得した値を文字列に直接挿入します。

他の注意すべき点:

- 文字列の前後に現れるいくつかのドル記号は、その個数から 1 を引いた数分のドル記号に置き換えられます。つまり、$$ は $ に、$$$ は $$ になります。
- ロケールファイルの読み込み時に、`/\$([a-z0-9_@]+)\$/i` と一致するトークンは、文字列の "置き換え" オブジェクトからの一致する値に置き換えられます。これらの置換は、メッセージ内の任意の `/\$\d/` トークンの処理よりも優先して行われます。
- ロケール文字列が使用される時に、`/\$\d+/` と一致するトークンは、{{WebExtAPIRef("i18n.getMessage()")}} に渡される replacement に置き換えられます。
- `getMessage()` は、placeholder/substitution の呼び出しを 9 個までしか処理しません。

### description

{{optional_inline}}

`"description"` メンバーは、文字列に最適な訳語を作成する助けとなる情報を翻訳者に提供するために、メッセージ文字列の内容についての説明を含みます。

### placeholders

{{optional_inline}}

`"placeholders"` メンバーは、メッセージ内で使用されるいくつかのプレースホルダー補助文字列を定義します。これらは、翻訳してほしくないハードコードされたアイテムや変数を参照するアイテムに利用できます。

各プレースホルダー補助文字列の定義は、それ自身がいくつかの値を持っています:

```json
"url" : {
  "content" : "$1",
  "example" : "https://developer.mozilla.org"
}
```

#### プレースホルダー名

プレースホルダー名は、補助文字列内の placeholder を表すために使用します (`"url"` は `$url$` になります)。これは、大文字と小文字が区別され、メッセージ文字列と同じ文字が使用できます [name](#name)。

#### content

"content" アイテムは、placeholder の内容を定義します。これは、"My placeholder" などハードコードされた文字列にすることができますが、{{WebExtAPIRef("i18n.getMessage()")}} 呼び出しから取得した値も含められます。詳しい情報は、[JavaScript からメッセージ文字列を取得する](/ja/Add-ons/WebExtensions/Internationalization#Retrieving_message_strings_from_JavaScript) を参照してください。

#### example

{{optional_inline}}

任意の "example" アイテムは、プレースホルダーがエンドユーザーにどのように表示されるかの例を示すことによって翻訳者を助けるためのものです。これにより、翻訳者がファイルをローカライズするときに最適な選択ができるようになるでしょう。
