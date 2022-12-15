---
title: 国際化
slug: Mozilla/Add-ons/WebExtensions/Internationalization
---

{{AddonSidebar}}

[WebExtensions](/ja/docs/Mozilla/Add-ons/WebExtensions) API には、拡張機能を国際化するとても簡単なモジュール — [i18n](/ja/docs/Mozilla/Add-ons/WebExtensions/API/i18n) があります。この記事ではその機能を見てみて、どのように動作するのかの実例を提供します。WebExtensions API を使った拡張機能用の i18n システムは、[i18n.js](http://i18njs.com/) のような、よくある i10n 用 JavaScript ライブラリーと同様です。

> **メモ:** この記事の見本の拡張機能— [notify-link-clicks-i18n](https://github.com/mdn/webextensions-examples/tree/master/notify-link-clicks-i18n) — は GitHub で入手できます。以下の節を進んでいくのに合わせてコードを追ってください。

## 国際化拡張機能の中身

国際化された拡張機能は、他の拡張機能と同じ機能 — [バックグラウンドスクリプト](/ja/Add-ons/WebExtensions/Anatomy_of_a_WebExtension#Background_scripts)、[コンテンツスクリプト](/ja/docs/Mozilla/Add-ons/WebExtensions/Content_scripts)など — を含む他、さまざまなロケールに切り替えられるような追加の部分もあります。これは下記のディレクトリーツリーのように要約されます:

- extension-root-directory/

  - \_locales

    - en

      - messages.json

        - 英語メッセージ (文字列)

    - de

      - messages.json

        - ドイツ語メッセージ (文字列)

    - etc.

  - manifest.json

    - ロケール依存のメタデータ

  - myJavascript.js

    - ブラウザーロケールや、ロケール固有メッセージなどを取得する JavaScript

  - myStyles.css

    - ロケール依存の CSS

それぞれの新機能を順に見ていきましょう— 以下の節は拡張機能を国際化するときのそれぞれのステップを表しています。

## \_locales 内にローカライズ済み文字列を提供する

言語のサブタグを探すには、[Language subtag lookup page](https://r12a.github.io/app-subtags/) の検索ツールを使います。注意点としては言語の名前の英語で探す必要があります。

すべての i18n システムはサポートする全ロケールに翻訳済みの文字列が要ります。拡張機能では、これは拡張機能のルート内に置かれる `_locales` と呼ばれるディレクトリーに入っています。各ロケールはそれぞれの文字列 (メッセージとも呼ばれる) を `messages.json` というファイル内に入れていて、これは `_locales` のサブディレクトリー内に置かれており、そこはロケール言語の言語サブタグを使った名前になっています。

サブタグには基本的な言語に加えて、地域の異型があるのに注意してください。ここで言語と異型は伝統的にハイフンで区切られます: 例えば "en-US"。しかし、`_locales` 内のディレクトリーでは、**区切り文字はアンダースコアでなければならず**: "en_US"となります。

[例えば、見本のアプリでは](https://github.com/mdn/webextensions-examples/tree/master/notify-link-clicks-i18n/_locales) "en" (英語), "de" (ドイツ語), "nl" (オランダ語), "ja" (日本語) のフォルダーがあります。それぞれの中に `messages.json` ファイルがあります。

このファイル ([\_locales/en/messages.json](https://github.com/mdn/webextensions-examples/blob/master/notify-link-clicks-i18n/_locales/en/messages.json)) の構造を見てみます:

```json
{
  "extensionName": {
    "message": "Notify link clicks i18n",
    "description": "Name of the extension."
  },

  "extensionDescription": {
    "message": "Shows a notification when the user clicks on links.",
    "description": "Description of the extension."
  },

  "notificationTitle": {
    "message": "Click notification",
    "description": "Title of the click notification."
  },

  "notificationContent": {
    "message": "You clicked $URL$.",
    "description": "Tells the user which link they clicked.",
    "placeholders": {
      "url" : {
        "content" : "$1",
        "example" : "https://developer.mozilla.org"
      }
    }
  }
}
```

このファイルは標準の JSON — メンバーがそれぞれに `message` と `description`. を含む名前付きオブジェクトです。すべての項目が文字列です; `$URL$` はプレースホルダーで、拡張機能から呼ばれる `notificationContent` メンバーに置き換えられます。[Retrieving message strings from JavaScript](#retrieving_message_strings_from_javascript) 節でその方法を学びます。

> **メモ:** `messages.json` ファイルの中身についての詳しい情報は[ロケール固有のメッセージリファレンス](/ja/docs/Mozilla/Add-ons/WebExtensions/API/i18n/Locale-Specific_Message_reference)にあります。

## manifest.json を国際化する

manifest.json の国際化を実行するにはいくつかの異なるタスクがあります。

### マニフェスト内のローカライズ済み文字列を取得する

[manifest.json](https://github.com/mdn/webextensions-examples/blob/master/notify-link-clicks-i18n/manifest.json) にはユーザーに表示される文字列が入っています、例えば拡張機能の名前や説明です。この文字列を国際化して messages.json に適切な訳を置くと、現在のロケールなどに基づき、正しく翻訳された文字列がユーザーに表示されます。

文字列を国際化するには、このように指定します:

```json
"name": "__MSG_extensionName__",
"description": "__MSG_extensionDescription__",
```

ここで、単なる固定文字列ではなく、ブラウザーのロケールに依存しないメッセージ文字列を取得します。

このようなメッセージ文字列を呼び出すには、次のように指定します:

1. 2 つのアンダースコアに続いて
2. "MSG" という文字列に続いて
3. 1 つのアンダースコアに続いて
4. `messages.json` で定義した呼び出しのメッセージ名に続いて
5. 2 つのアンダースコア

```
__MSG_ + messageName + __
```

### デフォルトロケールを指定する

manifest.json にて指定すべきフィールドは [default_locale](/ja/docs/Mozilla/Add-ons/WebExtensions/manifest.json/default_locale) です:

```json
"default_locale": "en"
```

これは拡張機能がブラウザーの現在のロケールに対するロケール文字列を含んでいない場合のデフォルトロケールを指定します。ブラウザーロケールで利用できないあらゆるメッセージ文字列が代わりのデフォルトロケールとして引受られます。ブラウザーが文字列を選ぶ方法に関して意識すべき詳細な点があります — [Localized string selection](#localized_string_selection) を見てください。

## ロケールに依存しない CSS

拡張機能の CSS ファイルからもローカライズされた文字列を取得できます。例えば、ロケールに依存しない CSS を組み立てるなら、このようにします:

```css
header {
  background-image: url(../images/__MSG_extensionName__/header.png);
}
```

[Predefined messages](#predefined_messages) を使ってこんな状況を扱う方がより良いものの、これは便利です。

## JavaScript からメッセージ文字列を取得する

それで、メッセージ文字列とマニフェストがセットアップできました。今は単に JavaScript からメッセージ文字列を呼び出して、拡張機能ができるだけ多くの正しい言語を話すようにします。実際の [i18n API](/ja/docs/Mozilla/Add-ons/WebExtensions/API/i18n) はとてもシンプルで、そこには 4 つのメソッドがあります:

- たぶん一番多く {{WebExtAPIRef("i18n.getMessage()")}} を使うでしょう — これは上記に触れられたとおり、特定の文字列を取得するのに使うメソッドです。これの使用例は下記で見ます。
- {{WebExtAPIRef("i18n.getAcceptLanguages()")}} と{{WebExtAPIRef("i18n.getUILanguage()")}} メソッドはロケールに応じて UI をカスタマイズする場合に使います — たぶんユーザーの好みの言語に応じて設定リストの上の方に表示したり、特定言語だけに関連する文化的情報を表示したり、ブラウザーロケールに従って日付表示を整形したりすると良いでしょう。
- {{WebExtAPIRef("i18n.detectLanguage()")}} メソッドはユーザーが投稿したコンテンツの言語を特定したり、それを適切に整形したりするのに使います。

[notify-link-clicks-i18n](https://github.com/mdn/webextensions-examples/tree/master/notify-link-clicks-i18n) の見本の中で、[バックグラウンドスクリプト](https://github.com/mdn/webextensions-examples/blob/master/notify-link-clicks-i18n/background-script.js)に下記の行があります:

```js
var title = browser.i18n.getMessage("notificationTitle");
var content = browser.i18n.getMessage("notificationContent", message.url);
```

最初は単に `messages.json` ファイルからブラウザーの現ロケールのための `notificationTitle message` 項目を取得します。2 つ目は同様ですが、2 つ目のパラメーターに URL を渡されます。これは何でしょう？これは `notificationContent message` 項目の中の `$URL$` プレースホルダーを置き換えるためにコンテンツを指定する方法です:

```json
"notificationContent": {
  "message": "You clicked $URL$.",
  "description": "Tells the user which link they clicked.",
  "placeholders": {
    "url" : {
      "content" : "$1",
      "example" : "https://developer.mozilla.org"
    }
  }
}
```

`"placeholders"` メンバーはプレースホルダーを定義し、ここから取得します。`"url"` プレースホルダーは $1、つまり 2 つ目のパラメーターの `getMessage()`.の最初の値から取ってきたコンテンツを指定します。プレースホルダーは`"url"` と呼ばれるため、実際のメッセージ文字列の中で呼び出すのに `$URL$` を使います (なので `"name"` には `$NAME$`などを使う)。複数のプレースホルダーがある場合、{{WebExtAPIRef("i18n.getMessage()")}} の 2 つ目のパラメーターとして渡す配列の中で提供できます — `messages.json`内部で`[a, b, c]` は`$1`, `$2`, `$3`, として使われる、など。

例をざっと見ましょう: `en/messages.json` ファイル内のオリジナルの `notificationContent` メッセージ文字列はこうです

```
You clicked $URL$.
```

`https://developer.mozilla.org` を指すリンクがクリックされたとします。{{WebExtAPIRef("i18n.getMessage()")}} を呼び出した後、2 つ目のパラメーターのコンテンツは messages.json 内で `$1` として利用できて、これは `"url"` プレースホルダー内で定義された `$URL$` プレースホルダーを置換します。よって最終のメッセージ文字列はこうなります

```
You clicked https://developer.mozilla.org.
```

### 直接プレースホルダーを使う

メッセージ文字列の中に直接に変数 (`$1`, `$2`, `$3` など) を挿入できます。例えば上記の `"notificationContent"` メンバーをこう書き換えてみます:

```json
"notificationContent": {
  "message": "You clicked $1.",
  "description": "Tells the user which link they clicked."
}
```

これはややこしくなくて速いように見えますが、他の方法 (`"プレースホルダー"`を使う)が最も良いやり方です。これはプレースホルダー名 (例えば`"url"`) や例によって、プレースホルダーの目的を思い出せます — コードを書いた 1 週間後には、`$1`–`$8` が何を指すか忘れているでしょうが、プレースホルダー名が何を指すかならもっと思い出しやすいでしょう。

### ハードコーディングされた置き換え

プレースホルダーにハードコードされた文字列を入れることもできます、これでコード内の変数の代わりに、いつでも同じ値が使われます。例えば:

```json
"mdn_banner": {
  "message": "For more information on web technologies, go to $MDN$.",
  "description": "Tell the user about MDN",
  "placeholders": {
    "mdn": {
      "content": "https://developer.mozilla.org/"
    }
  }
}
```

ここでは、`$1` といった変数から取るのではなく、プレースホルダーの content をハードコードしています。これはメッセージが複雑で、ファイル内で読みやすくするために色々な値に分割したい時に役立ちますし、さらにこの値はプログラム的にアクセスすることもできます。

それに加えて、個人やビジネス名といった翻訳したくない文字列を、このような置き換えから指定するのに使うことができます。

## ローカライズ済みの文字列の選択

ロケールは `fr` や `en` のような言語コードによってのみ指定されるか、さらに `en_US` や `en_GB` といった地域コードつきで (これは同じ言語の地域的な変形を記述します) 認証されます。i18n に文字列を問い合わせた時、次のアルゴリズムで文字列を選択します:

1. 現在のロケールと全く同じ `messages.json` ファイルがあって、そこに文字列が入っている場合、それを返します
2. それ以外で、現在のロケールが地域つきで認証されて (例`en_US`) 、そのロケールの地域になし版の `messages.json` ファイルがあって (例`en`)、そこに文字列が入っている場合、それを返します
3. それ以外で、`manifest.json` 内に定義された `default_locale` 用の `messages.json` ファイルがあって、そこに文字列が入っている場合、それを返します
4. それ以外は空文字を返します

下記の例を見てみます:

- extension-root-directory/

  - \_locales

    - en_GB

      - messages.json

        - `{ "colorLocalised": { "message": "colour", "description": "Color." }, ... }`

      en

      - messages.json

        - `{ "colorLocalised": { "message": "color", "description": "Color." }, ... }`

    - fr

      - messages.json

        - `{ "colorLocalised": { "message": "couleur", "description": "Color." }, ...}`

`default_locale` が `fr` にセットされ、ブラウザーの現在のロケールが `en_GB` と仮定します:

- 拡張機能が `getMessage("colorLocalised")`を呼び出すと、"colour"を返します
- `en_GB` に "colorLocalised" がなかったとしたら、`getMessage("colorLocalised")` は"couleur" でなく "color" を返します

## 事前定義されたメッセージ

i18n モジュールでは、事前定義されたメッセージを提供しており、これまで見てきた[Calling message strings from manifests and extension CSS](#calling_message_strings_from_manifests_and_extension_css) と同じ方法で呼び出すことができます。例えばこのように:

```
__MSG_extensionName__
```

事前定義されたメッセージでも全く同じ文法を使っていますが、メッセージ名の前に `@@` をつけるのが異なります、その例は

```
__MSG_@@ui_locale__
```

下記の表は利用可能なさまざまな事前定義されたメッセージ:を示しています:

| メッセージ名          | 説明                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |
| --------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `@@extension_id`      | 拡張機能の内部生成された UUID。この文字列は拡張機能内のリソースの URL を作るのに使います。. ローカライズされた拡張機能でもこのメッセージを使用できます。このメッセージをマニフェストファイル内で使用することはできません。もう一つの注意点として、この ID は {{WebExtAPIRef("runtime.id")}} から返される、manifest.json 内の [applications](/ja/docs/Mozilla/Add-ons/WebExtensions/manifest.json/applications) キーを用いてセットされるアドオン ID とは異なっています。これはアドオンの URL 内にある生成された UUID です。つまりこの値を{{WebExtAPIRef("runtime.sendMessage()")}} の `extensionId` パラメーターの値として使うことはできず、{{WebExtAPIRef("runtime.MessageSender")}} オブジェクトの `id` プロパティの値のチェックに使うこともできません。 |
| `@@ui_locale`         | 現在のロケールで、この文字列をロケール固有の URL 生成に使うことができます。                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| `@@bidi_dir`          | 現在のロケールにおけるテキストの向きで、英語のような左から右の言語では "ltr" で、アラビア語のような右から左への言語では "rtl" となり、このいずれかです。                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |
| `@@bidi_reversed_dir` | `@@bidi_dir` が "ltr" なら "rtl" で、そうでなれば "ltr" です。                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| `@@bidi_start_edge`   | `@@bidi_dir` が "ltr" なら "left" で、そうでなれば "right" です。                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
| `@@bidi_end_edge`     | `@@bidi_dir` が "ltr" なら "right" で、そうでなれば "left" です。                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |

前の例に戻って、次のように書いてみるともっと意味がわかります:

```css
header {
  background-image: url(../images/__MSG_@@ui_locale__/header.png);
}
```

サポートしているロケール(en, de など)にマッチしたディレクトリー内にロケール固有の画像を保管しているとすると、もっとわかり良いです。

CSS ファイル内で `@@bidi_*` メッセージを使った次の例を見てみましょう:

```css
body {
  direction: __MSG_@@bidi_dir__;
}

div#header {
  margin-bottom: 1.05em;
  overflow: hidden;
  padding-bottom: 1.5em;
  padding-__MSG_@@bidi_start_edge__: 0;
  padding-__MSG_@@bidi_end_edge__: 1.5em;
  position: relative;
}
```

英語のような左から右への言語では、上の事前定義されたメッセージを含んだ CSS 定義は、下記の最終コード行に変換されます:

```css
direction: ltr;
padding-left: 0;
padding-right: 1.5em;
```

アラビア語のような右から左への言語では、次を得ます:

```css
direction: rtl;
padding-right: 0;
padding-left: 1.5em;
```

## あなたの拡張機能をテストする

Firefox 45 からは、拡張機能を一時的にディスクからインストールできます — [ディスクから読み込む](/ja/Add-ons/WebExtensions/Packaging_and_installation#Loading_from_disk)を見てください。これを行ってから、[notify-link-clicks-i18n](https://github.com/mdn/webextensions-examples/tree/master/notify-link-clicks-i18n) 拡張機能をテストしてみます。お好きなウェブサイトに移動してクリックしたリンクの URL を報告した通知が出てくるか見てください。

次に、Firefox のロケールをテストしたい拡張機能がサポートするものに変えます。

1. Firefox で"about:config"を開き、`intl.locale.requested` の設定を探します (Firefox 59 より前では、この設定は `general.useragent.locale` と呼ばれます)。
2. 設定がある場合、それをダブルクリックして (または Return/Enter を押して) 選択し、テストしたいロケールの言語コードを入力して"OK" をクリックします (または Return/Enter を押す)。例えば我々の例では "en" (英語), "de" (ドイツ語), "nl" (オランダ語), "ja" (日本語) がサポートされます。空文字(`""`)をセットすることもできて、そうするとブラウザーは OS のデフォルトロケールを使います。
3. `intl.locale.requested` の設定が存在しない場合、設定リストを右クリックします (あるいはキーボードからコンテキストメニューを起動します)、そして"New" と "String"を選びます。設定名に `intl.locale.requested` を入力して、上記ステップ 2 の説明の通りに "de" や "nl" などの値を設定値に入力します。
4. `intl.locale.matchOS` を探してその設定をダブルクリックし、`false` に設定します。
5. ブラウザーを再起動して変更を完了します。

> **メモ:** これはブラウザーのロケールを変更させる動作で、この言語用の[言語パック](https://addons.mozilla.org/en-US/firefox/language-tools/)がインストールされていなくてもそうなります。その場合はブラウザー UI はデフォルト言語となります。

> **メモ:** `getUILanguage` の結果を変更するには言語パックが要求されます、これはブラウザー UI 言語を変更して拡張機能メッセージ用の言語は変更しないためです。

ディスクから拡張機能を読み込み直して、新しいロケールをテストします

- もう一度 "about:addons" へ移動します — 拡張機能が一覧となり、アイコンと、選択した言語での名前と説明があるのが見えます。
- 拡張機能をまたテストします。我々の見本では、他のウェブサイトでリンクをクリックして、通知が選択した言語で出てくるのが見えます。

{{EmbedYouTube("R7--fp5pPGg")}}
