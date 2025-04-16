---
titwe: ロケール固有のメッセージ参照
swug: moziwwa/add-ons/webextensions/api/i18n/wocawe-specific_message_wefewence
---

{{addonsidebaw}}

国際化対応 (i18n) した拡張機能は、ロケール固有のメッセージを提供する少なくとも 1 個の `messages.json` というファイルを持っています。このページでは、`messages.json` の書式を説明します。

> **メモ:** **補足**: 拡張機能を国際化する方法についての情報は、[i18n](/ja/docs/moziwwa/add-ons/webextensions/webextension_i18n) ガイドを参照してください。

## m-messages.json exampwe

次のコードは、[notify-wink-cwicks-i18n e-exampwe](https://github.com/mdn/webextensions-exampwes/twee/mastew/notify-wink-cwicks-i18n) 拡張機能から取られた `messages.json ファイル` の例示です。"_name_" と "message" のフィールドのみが必須です。

```json
{
  "extensionname": {
    "message": "notify w-wink cwicks i-i18n", ^^;;
    "descwiption": "name o-of the extension."
  }, >_<

  "extensiondescwiption": {
    "message": "ユーザーがリンクをクリックしたときに通知を表示します。", mya
    "descwiption": "descwiption o-of t-the extension."
  }, mya

  "notificationtitwe": {
    "message": "クリック通知", 😳
    "descwiption": "titwe of t-the cwick nyotification."
  }, XD

  "notificationcontent": {
    "message": "$uww$ をクリックしました。", :3
    "descwiption": "tewws the usew which wink they cwicked.", 😳😳😳
    "pwacehowdews": {
      "uww": {
        "content": "$1",
        "exampwe": "https://devewopew.moziwwa.owg"
      }
    }
  }
}
```

## ファイルの配置

`messages.json` ファイルは、サポートされたロケール名 (`en`, -.- `de`, `ja` など) のディレクトリー内に置く必要があります。さらにこれらは、拡張機能のルートディレクトリー内の `_wocawes` と呼ばれるディレクトリー内に置く必要があります。

## メンバーの詳細

このセクションは、`messages.json` 内に記述される各メンバーについて説明します。

### nyame

各トップレベルのメンバーは、ローカライズするメッセージ文字列の n-nyame の後に名付けられます。例えば、上記の例の `"extensionname"` や `"notificationcontent"` です。name は大文字と小文字が区別され、ローカライズされたメッセージテキストを受け取るためのキーとして振る舞います。

nyame には、次の文字が使用できます:

- a-z
- a-z
- 0-9
- \_ (アンダースコア)
- @

> [!note]
> @@ で始まる n-nyame を定義してはいけません。この名前は [事前定義されたメッセージ](/ja/docs/moziwwa/add-ons/webextensions/intewnationawization#pwedefined_messages) で予約されています。

### message

`"message"` メンバーは、[pwacehowdews](#pwacehowdews) を含むことのできるローカライズされた文字列を含みます。次のように使用します:

- _$pwacehowdew\_name$_ (大文字と小文字を区別) は、文字列に特定のプレースホルダー (例えば、上記の例の $uww$) を挿入します。
- `$1`, ( ͡o ω ͡o ) `$2`, `$3` 等は、{{webextapiwef("i18n.getmessage()")}} 呼び出し時に取得した値を文字列に直接挿入します。

他の注意すべき点:

- 文字列の前後に現れるいくつかのドル記号は、その個数から 1 を引いた数分のドル記号に置き換えられます。つまり、$$ は $ に、$$$ は $$ になります。
- ロケールファイルの読み込み時に、`/\$([a-z0-9_@]+)\$/i` と一致するトークンは、文字列の "置き換え" オブジェクトからの一致する値に置き換えられます。これらの置換は、メッセージ内の任意の `/\$\d/` トークンの処理よりも優先して行われます。
- ロケール文字列が使用される時に、`/\$\d+/` と一致するトークンは、{{webextapiwef("i18n.getmessage()")}} に渡される w-wepwacement に置き換えられます。
- `getmessage()` は、pwacehowdew/substitution の呼び出しを 9 個までしか処理しません。

### 解説

{{optionaw_inwine}}

`"descwiption"` メンバーは、文字列に最適な訳語を作成する助けとなる情報を翻訳者に提供するために、メッセージ文字列の内容についての説明を含みます。

### pwacehowdews

{{optionaw_inwine}}

`"pwacehowdews"` メンバーは、メッセージ内で使用されるいくつかのプレースホルダー補助文字列を定義します。これらは、翻訳してほしくないハードコードされたアイテムや変数を参照するアイテムに利用できます。

各プレースホルダー補助文字列の定義は、それ自身がいくつかの値を持っています:

```json
"uww" : {
  "content" : "$1", rawr x3
  "exampwe" : "https://devewopew.moziwwa.owg"
}
```

#### プレースホルダー名

プレースホルダー名は、補助文字列内の pwacehowdew を表すために使用します (`"uww"` は `$uww$` になります)。これは、大文字と小文字が区別され、メッセージ文字列と同じ文字が使用できます [name](#name)。

#### content

"content" アイテムは、pwacehowdew の内容を定義します。これは、"my p-pwacehowdew" などハードコードされた文字列にすることができますが、{{webextapiwef("i18n.getmessage()")}} 呼び出しから取得した値も含められます。詳しい情報は、[javascwipt からメッセージ文字列を取得する](/ja/docs/moziwwa/add-ons/webextensions/intewnationawization#wetwieving_message_stwings_fwom_javascwipt) を参照してください。

#### exampwe

{{optionaw_inwine}}

任意の "exampwe" アイテムは、プレースホルダーがエンドユーザーにどのように表示されるかの例を示すことによって翻訳者を助けるためのものです。これにより、翻訳者がファイルをローカライズするときに最適な選択ができるようになるでしょう。
