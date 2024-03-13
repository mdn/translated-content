---
title: 国際化
slug: Mozilla/Add-ons/WebExtensions/Internationalization
l10n:
  sourceCommit: e0de864abf4c85888c0a790058e0d6f46462ca3a
---

{{AddonSidebar}}

[WebExtensions](/ja/docs/Mozilla/Add-ons/WebExtensions) API には、拡張機能を国際化するとても簡単なモジュール — [i18n](/ja/docs/Mozilla/Add-ons/WebExtensions/API/i18n) があります。この記事ではその機能を見てみて、どのように動作するのかの実例を提供します。WebExtensions API を使った拡張機能用の i18n システムは、[i18n.js](http://i18njs.com/) のような、よくある i10n 用 JavaScript ライブラリーと同様です。

> **メモ:** この記事の見本の拡張機能— [notify-link-clicks-i18n](https://github.com/mdn/webextensions-examples/tree/master/notify-link-clicks-i18n) — は GitHub で入手できます。以下の節を進んでいくのに合わせてコードを追ってください。

## 国際化拡張機能の中身

国際化された拡張機能は、他の拡張機能と同じ機能 — [バックグラウンドスクリプト](/ja/docs/Mozilla/Add-ons/WebExtensions/Anatomy_of_a_WebExtension#background_scripts)、[コンテンツスクリプト](/ja/docs/Mozilla/Add-ons/WebExtensions/Content_scripts)など — を含む他、さまざまなロケールに切り替えられるような追加の部分もあります。これは下記のディレクトリーツリーのように要約されます:

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

サブタグには基本的な言語に加えて、地域の変化形があるのに注意してください。ここで言語と変化形は伝統的に "en-US" のようにハイフンで区切られます。しかし、`_locales` 内のディレクトリーでは、**区切り文字はアンダースコアでなければならず**、 "en_US" となります。

[例えば、見本のアプリでは](https://github.com/mdn/webextensions-examples/tree/master/notify-link-clicks-i18n/_locales) "en" (英語), "de" (ドイツ語), "nl" (オランダ語), "ja" (日本語) のフォルダーがあります。それぞれの中に `messages.json` ファイルがあります。

このファイル ([\_locales/en/messages.json](https://github.com/mdn/webextensions-examples/blob/master/notify-link-clicks-i18n/_locales/en/messages.json)) の構造を見てみます。

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
      "url": {
        "content": "$1",
        "example": "https://developer.mozilla.org"
      }
    }
  }
}
```

このファイルは標準の JSON — メンバーがそれぞれに `message` と `description`. を含む名前付きオブジェクトです。すべての項目が文字列です; `$URL$` はプレースホルダーで、拡張機能から呼ばれる `notificationContent` メンバーに置き換えられます。[マニフェスト内のローカライズ済み文字列を取得する](#マニフェスト内のローカライズ済み文字列を取得する)の節でその方法を学びます。

> **メモ:** `messages.json` ファイルの中身についての詳しい情報は[ロケール固有のメッセージリファレンス](/ja/docs/Mozilla/Add-ons/WebExtensions/API/i18n/Locale-Specific_Message_reference)にあります。

## manifest.json を国際化する

manifest.json の国際化を実行するにはいくつかの異なるタスクがあります。

### マニフェスト内のローカライズ済み文字列を取得する

[manifest.json](https://github.com/mdn/webextensions-examples/blob/master/notify-link-clicks-i18n/manifest.json) にはユーザーに表示される文字列が入っています、例えば拡張機能の名前や説明です。この文字列を国際化して messages.json に適切な訳を置くと、現在のロケールなどに基づき、正しく翻訳された文字列がユーザーに表示されます。

文字列を国際化するには、このように指定します。

```json
"name": "__MSG_extensionName__",
"description": "__MSG_extensionDescription__",
```

ここで、単なる固定文字列ではなく、ブラウザーのロケールに依存しないメッセージ文字列を取得します。

このようなメッセージ文字列を呼び出すには、次のように指定します。

1. 2 つのアンダースコアに続いて
2. "MSG" という文字列に続いて
3. 1 つのアンダースコアに続いて
4. `messages.json` で定義した呼び出しのメッセージ名に続いて
5. 2 つのアンダースコア

```
__MSG_ + messageName + __
```

### デフォルトロケールを指定する

manifest.json にて指定すべきフィールドは [default_locale](/ja/docs/Mozilla/Add-ons/WebExtensions/manifest.json/default_locale) です。

```json
"default_locale": "en"
```

これは拡張機能がブラウザーの現在のロケールに対するロケール文字列を含んでいない場合のデフォルトロケールを指定します。ブラウザーロケールで利用できないあらゆるメッセージ文字列が代わりのデフォルトロケールとして引受られます。ブラウザーが文字列を選ぶ方法に関して意識すべき詳細な点があります — [ローカライズ済みの文字列の選択](#ローカライズ済みの文字列の選択) を見てください。

## ロケールに依存しない CSS

拡張機能の CSS ファイルからもローカライズされた文字列を取得できます。例えば、ロケールに依存しない CSS を組み立てるなら、このようにします:

```css
header {
  background-image: url(../images/__MSG_extensionName__/header.png);
}
```

[事前定義されたメッセージ](#事前定義されたメッセージ)を使ってこんな状況を扱う方がより良いものの、これは便利です。

## JavaScript からメッセージ文字列を取得する

それで、メッセージ文字列とマニフェストがセットアップできました。今は単に JavaScript からメッセージ文字列を呼び出して、拡張機能ができるだけ多くの正しい言語を話すようにします。実際の [i18n API](/ja/docs/Mozilla/Add-ons/WebExtensions/API/i18n) はとてもシンプルで、そこには 4 つのメソッドがあります。

- たぶん一番多く {{WebExtAPIRef("i18n.getMessage()")}} を使うでしょう。これは上記に触れられたとおり、特定の文字列を取得するのに使うメソッドです。これの使用例は下記で見ます。
- {{WebExtAPIRef("i18n.getAcceptLanguages()")}} と{{WebExtAPIRef("i18n.getUILanguage()")}} メソッドはロケールに応じて UI をカスタマイズする場合に使います。たぶんユーザーの好みの言語に応じて設定リストの上の方に表示したり、特定言語だけに関連する文化的情報を表示したり、ブラウザーロケールに従って日付表示を整形したりすると良いでしょう。
- {{WebExtAPIRef("i18n.detectLanguage()")}} メソッドはユーザーが投稿したコンテンツの言語を特定したり、それを適切に整形したりするのに使います。

[notify-link-clicks-i18n](https://github.com/mdn/webextensions-examples/tree/master/notify-link-clicks-i18n) の見本の中で、[バックグラウンドスクリプト](https://github.com/mdn/webextensions-examples/blob/master/notify-link-clicks-i18n/background-script.js)に下記の行があります。

```js
let title = browser.i18n.getMessage("notificationTitle");
let content = browser.i18n.getMessage("notificationContent", message.url);
```

最初は単に `messages.json` ファイルからブラウザーの現ロケールのための `notificationTitle message` 項目を取得します。2 つ目は同様ですが、2 つ目の引数に URL を渡されます。これは何でしょう？これは `notificationContent message` 項目の中の `$URL$` プレースホルダーを置き換えるためにコンテンツを指定する方法です:

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

`"placeholders"` メンバーはプレースホルダーを定義し、ここから取得します。`"url"` プレースホルダーは $1、つまり 2 つ目の引数の `getMessage()`.の最初の値から取ってきたコンテンツを指定します。プレースホルダーは`"url"` と呼ばれるため、実際のメッセージ文字列の中で呼び出すのに `$URL$` を使います (なので `"name"` には `$NAME$`などを使う)。複数のプレースホルダーがある場合、{{WebExtAPIRef("i18n.getMessage()")}} の 2 つ目の引数として渡す配列の中で提供できます — `messages.json`内部で`[a, b, c]` は`$1`, `$2`, `$3`, として使われる、など。

例をざっと見ましょう。 `en/messages.json` ファイル内のオリジナルの `notificationContent` メッセージ文字列はこうです

```
You clicked $URL$.
```

`https://developer.mozilla.org` を指すリンクがクリックされたとします。{{WebExtAPIRef("i18n.getMessage()")}} を呼び出した後、2 つ目の引数のコンテンツは messages.json 内で `$1` として利用できて、これは `"url"` プレースホルダー内で定義された `$URL$` プレースホルダーを置換します。よって最終のメッセージ文字列はこうなります

```
You clicked https://developer.mozilla.org.
```

### 直接プレースホルダーを使う

メッセージ文字列の中に直接に変数 (`$1`, `$2`, `$3` など) を挿入できます。例えば上記の `"notificationContent"` メンバーをこう書き換えてみます。

```json
"notificationContent": {
  "message": "You clicked $1.",
  "description": "Tells the user which link they clicked."
}
```

これはややこしくなくて速いように見えますが、他の方法 (`"プレースホルダー"`を使う)が最も良いやり方です。これはプレースホルダー名 (例えば`"url"`) や例によって、プレースホルダーの目的を思い出せます — コードを書いた 1 週間後には、`$1`–`$8` が何を指すか忘れているでしょうが、プレースホルダー名が何を指すかならもっと思い出しやすいでしょう。

### ハードコーディングされた置き換え

プレースホルダーにハードコードされた文字列を入れることもできます、これでコード内の変数の代わりに、いつでも同じ値が使われます。例えば、

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

ロケールは `fr` や `en` のような言語コードによってのみ指定されるか、さらに `en_US` や `en_GB` といった地域コードつきで (これは同じ言語の地域的な変形を記述します) 認証されます。i18n に文字列を問い合わせた時、次のアルゴリズムで文字列を選択します。

1. 現在のロケールと全く同じ `messages.json` ファイルがあって、そこに文字列が入っている場合、それを返します
2. それ以外で、現在のロケールが地域つきで認証されて（例えば `en_US`）、そのロケールの地域になし版の `messages.json` ファイルがあって（例えば `en`）、そこに文字列が入っている場合、それを返します
3. それ以外で、`manifest.json` 内に定義された `default_locale` 用の `messages.json` ファイルがあって、そこに文字列が入っている場合、それを返します
4. それ以外は空文字を返します

下記の例を見てみます。

- extension-root-directory/

  - \_locales

    - en_GB

      - messages.json

        - `{ "colorLocalized": { "message": "colour", "description": "Color." }, /* … */ }`

      en

      - messages.json

        - `{ "colorLocalized": { "message": "color", "description": "Color." }, /* … */ }`

    - fr

      - messages.json

        - `{ "colorLocalized": { "message": "couleur", "description": "Color." }, /* … */}`

`default_locale` が `fr` にセットされ、ブラウザーの現在のロケールが `en_GB` と仮定します:

- 拡張機能が `getMessage("colorLocalized")`を呼び出すと、 "colour" を返します
- `en_GB` に "colorLocalized" がなかったとしたら、 `getMessage("colorLocalized")` は "couleur" でなく "color" を返します

## 事前定義されたメッセージ

i18n モジュールでは、事前定義されたメッセージを提供しており、これまで見てきた[マニフェスト内のローカライズ済み文字列を取得する](#マニフェスト内のローカライズ済み文字列を取得する)や[ロケールに依存しない CSS](#ロケールに依存しない_css)と同じ方法で呼び出すことができます。例えばこのようにします。

```
__MSG_extensionName__
```

事前定義されたメッセージでも全く同じ文法を使っていますが、メッセージ名の前に `@@` をつけるのが異なります。例えば、

```
__MSG_@@ui_locale__
```

下記の表は利用可能なさまざまな事前定義されたメッセージを示しています。

<table>
  <thead>
    <tr>
      <th scope="col">メッセージ名</th>
      <th scope="col">説明</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><code>@@extension_id</code></td>
      <td>
        <p>
          拡張機能の内部生成された UUID。この文字列は拡張機能内のリソースの URL を作るのに使います。ローカライズされた拡張機能でもこのメッセージを使用できます。
        </p>
        <p>このメッセージをマニフェストファイル内で使用することはできません。</p>
        <p>
          もう一つの注意点として、この ID は {{WebExtAPIRef("runtime.id")}} から返される、manifest.json 内の
          <a
            href="/ja/docs/Mozilla/Add-ons/WebExtensions/manifest.json/browser_specific_settings"
            >applications</a
          >
          キーを用いてセットされるアドオン ID とは異なっています。これはアドオンの URL 内にある生成された UUID です。つまりこの値を {{WebExtAPIRef("runtime.sendMessage()")}} の <code>extensionId</code> 引数の値として使うことはできず、{{WebExtAPIRef("runtime.MessageSender")}} オブジェクトの <code>id</code> プロパティの値のチェックに使うこともできません。
        </p>
      </td>
    </tr>
    <tr>
      <td><code>@@ui_locale</code></td>
      <td>
        現在のロケールで、この文字列をロケール固有の URL 生成に使うことができます。
      </td>
    </tr>
    <tr>
      <td><code>@@bidi_dir</code></td>
      <td>
        現在のロケールにおけるテキストの向きで、英語のような左書きの言語では "ltr" で、アラビア語のような右書きの言語では "rtl" となり、このいずれかです。
      </td>
    </tr>
    <tr>
      <td><code>@@bidi_reversed_dir</code></td>
      <td>
        <code>@@bidi_dir</code> が "ltr" なら "rtl" で、そうでなれば "ltr" です。
      </td>
    </tr>
    <tr>
      <td><code>@@bidi_start_edge</code></td>
      <td>
        <code>@@bidi_dir</code> が "ltr" なら "left" で、そうでなれば "right" です。
      </td>
    </tr>
    <tr>
      <td><code>@@bidi_end_edge</code></td>
      <td>
        <code>@@bidi_dir</code> が "ltr" なら "right" で、そうでなれば "left" です。
      </td>
    </tr>
  </tbody>
</table>

前の例に戻って、次のように書いてみるともっと意味がわかります。

```css
header {
  background-image: url(../images/__MSG_@@ui_locale__/header.png);
}
```

サポートしているロケール (en, de など) に一致したディレクトリー内にロケール固有の画像を保管しているとすると、もっとわかり良いです。

CSS ファイル内で `@@bidi_*` メッセージを使った次の例を見てみましょう。

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

英語のような左から右への言語では、上の事前定義されたメッセージを含んだ CSS 定義は、下記の最終コード行に変換されます。

```css
direction: ltr;
padding-left: 0;
padding-right: 1.5em;
```

アラビア語のような右から左への言語では、次のようになります。

```css
direction: rtl;
padding-right: 0;
padding-left: 1.5em;
```

## 拡張機能をテストする

拡張機能のローカライズをテストするには、言語パックをインストールすることができる [Firefox](https://www.mozilla.org/en-US/firefox/new/) または [Firefox Beta](https://www.mozilla.org/en-US/firefox/channel/desktop/) を使用します。

次に、テストしたい拡張機能で対応している各ロケールについて、 Firefox の UI 言語を切り替えるために、[別の言語で Firefox を使用する](https://support.mozilla.org/en-US/kb/use-firefox-another-language)ための指示に従います。（設定を使用した場合、「言語」の下にある「代替言語の設定」を使用します。）

Firefoxがテスト言語で実行されたら、[拡張機能を一時的にインストールします](https://extensionworkshop.com/documentation/develop/temporary-installation-in-firefox/)。拡張機能をインストールした後、 `about:debugging` で、拡張機能を正しく設定した場合、選択した言語で拡張機能がアイコン、名前、説明とともに掲載されているのが確認できます。ローカライズされた拡張機能の詳細は、 `about:addons` でも見ることができます。これで拡張機能の機能を使い、必要な翻訳が配置されていることを確認してください。

このプロセスを試したい場合は、[notify-link-clicks-i18n](https://github.com/mdn/webextensions-examples/tree/master/notify-link-clicks-i18n) 拡張機能を使用することができます。この例で対応している言語（ドイツ語、オランダ語、日本語）のいずれかを表示するように、 Firefox を設定してください。拡張機能を読み込んで、あるウェブサイトにアクセスします。リンクをクリックすると、リンクの URL を報告する通知の翻訳版が表示されます。
