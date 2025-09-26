---
title: permissions
slug: Mozilla/Add-ons/WebExtensions/manifest.json/permissions
---

{{AddonSidebar}}

<table class="fullwidth-table standard-table">
  <tbody>
    <tr>
      <th scope="row" style="width: 30%">型</th>
      <td><code>Array</code></td>
    </tr>
    <tr>
      <th scope="row">必須項目か？</th>
      <td>いいえ</td>
    </tr>
    <tr>
      <th scope="row">例</th>
      <td>
        <pre class="brush: json; no-line-numbers">
"permissions": [
  "*://developer.mozilla.org/*",
  "webRequest"
]</pre
        >
      </td>
    </tr>
  </tbody>
</table>

拡張機能が特別な権限を必要とする際には `permissions` キーを使用します。このキーには文字列の配列を指定し、各文字列が権限を要求します。

このキーを使って権限を要求した場合、ブラウザーはインストール時に、拡張機能が特定の権限を要求していることをユーザーに伝え、その権限を許可してもよいかどうかを確認するよう求めることがあります。また、ブラウザーは、インストール後にユーザーが拡張機能の権限を検査できるようにすることもできます。権限付与の要求は、ユーザーが拡張機能をインストールする意欲に影響を与える可能性があるため、権限の要求は慎重に検討する必要があります。たとえば、不要な権限を要求することは避けたいもので、拡張機能のストアの説明に権限を要求する理由についての情報を提供するとよいでしょう。検討すべき事項の詳細については、 [Request the right permissions](https://extensionworkshop.com/documentation/develop/request-the-right-permissions/) の記事にあります。

許可証のテストとプレビューの方法については、 Extension Workshop サイトの [Test permission requests](https://extensionworkshop.com/documentation/develop/test-permission-requests/) を参照してください。

キーには以下の 3 種類があります。

- host 権限
- API 権限
- activeTab 権限

## host 権限

host 権限は[マッチパターン](/ja/docs/Mozilla/Add-ons/WebExtensions/Match_patterns)として指定します。それぞれのパターンによって、アドオンの要求する権限が有効となる URL の範囲を指定します。host 権限の例は `"*://developer.mozilla.org/*"` のようなものです。

この権限には以下が含まれます。

- そのオリジンに対して、クロス-オリジン制約なしに [XMLHttpRequest](/ja/docs/Web/API/XMLHttpRequest) アクセス、 [fetch](/ja/docs/Web/API/Fetch_API) アクセスができる権限 (コンテンツスクリプトからのリクエストによるものも含みます)
- "tabs" 権限なしに、タブ固有のメタデータを読み取ることができる権限。 {{WebExtAPIRef("tabs.Tab")}} オブジェクトの `url`, `title`, `favIconUrl` などのプロパティです。
- そのオリジンによるページに ({{webextAPIref("tabs/executeScript", "tabs.executeScript()")}} を用いて) スクリプトをプログラム的に挿入できる権限
- {{webextAPIref("webrequest")}} API を用いて、そのホストからのイベントを受信できる権限
- {{webextAPIref("cookies")}} API を用いて、そのホストの Cookie にアクセスできる権限（"cookies" API の権限が指定されている場合）
- ホストが完全修飾ドメインまたはワイルドカードで指定されている拡張ページのトラッキング防止機能をバイパスすることができます。しかし、コンテンツスクリプトでは、完全修飾ドメインで指定されたホストに対してのみトラッキング防止機能をバイパスすることができます。
  ホスト名が完全修飾ドメインであり、ワイルドカードを含まない場合にトラッキング防止を回避。`<all_urls>` については除外。

Firefox では バージョン 56 以降で拡張機能は自動的に自身をオリジンとする host 権限を次の形式で取得します。

```
moz-extension://60a20a9b-1ad4-af49-9b6c-c64c98c37920/
```

ここで `60a20a9b-1ad4-af49-9b6c-c64c98c37920` は拡張機能の内部 ID です。拡張機能は {{webextAPIref("extension/getURL", "extension.getURL()")}} を呼び出すことでこの URL を取得できます。

```js
browser.extension.getURL("");
// moz-extension://60a20a9b-1ad4-af49-9b6c-c64c98c37920/
```

## API 権限

API 権限には、拡張機能から使用したい [WebExtension API](/ja/docs/Mozilla/Add-ons/WebExtensions/API) の名前をキーワードとして指定します。

現時点で使用できるキーワードは以下の通りです。

- `activeTab`
- `alarms`
- `background`
- `bookmarks`
- `browserSettings`
- `browsingData`
- `captivePortal`
- `clipboardRead`
- `clipboardWrite`
- `contentSettings`
- `contextMenus`
- `contextualIdentities`
- `cookies`
- `debugger`
- `dns`
- `downloads`
- `downloads.open`
- `find`
- `geolocation`
- `history`
- `identity`
- `idle`
- `management`
- `menus`
- `menus.overrideContext`
- `nativeMessaging`
- `notifications`
- `pageCapture`
- `pkcs11`
- `privacy`
- `proxy`
- `search`
- `sessions`
- `storage`
- `tabHide`
- `tabs`
- `theme`
- `topSites`
- `unlimitedStorage`
- `webNavigation`
- `webRequest`
- `webRequestBlocking`

ほとんどの場合、権限はその API へのアクセス権を付与するだけですが、以下のような例外があります。

- `tabs` 権限は、 {{webextAPIref("tabs", "<code>tabs</code> API のうち特権が必要なもの")}}に対して、 [host 権限](#host_permissions)なしにアクセスできます。対象は `Tab.url`, `Tab.title`, `Tab.faviconUrl` です。
  - Firefox 85 以前では、 `tabs` は `url` を `queryInfo` 引数に含めて {{webextAPIref("tabs/query", "tabs.query()")}} を呼び出す際にも必要です。 `tabs` API の他の部分は、権限を要求することなく使用できます。
  - Firefox 86 および Chrome 50 では、 "tabs" 権限の代わりに matching [host 権限](#host_permissions)を使用することもできます。

- `webRequestBlocking` 権限を指定した場合、"blocking" 引数の使用が許可されます。これによって{{webextAPIref("WebRequest", "リクエストの変更やキャンセル")}}が可能となります。
- `downloads.open` 権限を指定した場合、{{WebExtAPIRef("downloads.open()")}} API の利用が許可されます。
- `tabHide` で {{WebExtAPIRef("tabs.hide()")}} API の使用が許可されます。

## activeTab 権限

この権限は `"activeTab"` と指定されます。拡張機能が `activeTab` 権限を持つなら、ユーザーが拡張機能と相互作用する時に、拡張機能はアクティブなタブ限定の特別な権限が許可されます。

"ユーザーの相互作用" とは次のようなものです。

- ブラウザーアクションやページアクションをクリック
- コンテキストメニュー項目を選択
- 拡張機能によって定義されたキーボードショートカットをアクティベート

特別な権限とは以下の通りです。

- {{webextAPIref("tabs/executeScript", "browser.tabs.executeScript()")}} と {{webextAPIref("tabs/insertCSS", "browser.tabs.insertCSS()")}} を用いてタブに JavaScript や CSS をプログラム的に挿入できる能力
- 現在のタブに、次の一部の tabs API の権限アクセス: `Tab.url`, `Tab.title`, `Tab.faviconUrl`.

この権限の意図は、拡張機能によくあるユースケースを、強力すぎる権限を与えずに実行できるようにすることです。多くの拡張機能は「ユーザーが希望したら現在のページで何かをする」ことを希望しています。

例えば、ユーザーがブラウザーアクションをクリックした時に現在のページでスクリプトを実行する拡張機能を考えます。`activeTab` 権限がない場合、拡張機能は `<all_urls>` の host 権限を要求する必要があります。しかし、これは拡張機能に必要以上の力を与えています。アクティブなタブで単にユーザーアクションに応答する代わりに、*任意のタブ*で、*任意の時*に、スクリプトを実行できます。

> [!NOTE]
> ユーザー操作 (例：クリック) が発生したときに存在していたタブ／データにのみアクセスできます。アクティブなタブが移動すると (例：読み込みの終了やその他のイベントにより)、権限はそのタブへのアクセスを許可しなくなります。

通常、 `activeTab` が付与されるタブは、 1 つのケースを除いて、単に現在アクティブなタブです。 {{webextAPIref("menus")}} API では、ユーザーがタブをコンテキストクリックしたときに表示されるメニュー項目を作成することができます (つまり、ユーザーがあるタブから別のタブに切り替えることができるタブトリップの要素)。

ユーザーがこのような項目をクリックした場合、ユーザーがクリックしたタブが現在のアクティブなタブでなくても、activeTab 権限が付与されます (Firefox 63 以降、[Firefox バグ 1446956](https://bugzil.la/1446956))。

## クリップボードのアクセス

拡張機能にクリップボードとやりとりできるようにする、 2 つの権限があります。

- `clipboardWrite`
  - : {{DOMxRef("Clipboard.write()")}}, {{DOMxRef("Clipboard.writeText()")}}, `document.execCommand("copy")`, `document.execCommand("cut")` を用いたクリップボードへの書き込み
- `clipboardRead`
  - : {{DOMxRef("Clipboard.read()")}}, {{DOMxRef("Clipboard.readText()")}}, `document.execCommand("paste")` を用いたクリップボードからの読み込み

これについての詳細は[クリップボードと相互作用する](/ja/docs/Mozilla/Add-ons/WebExtensions/Interact_with_the_clipboard)を見てください。

## Unlimited storage

`unlimitedStorage` 権限は以下の通りです。

- 拡張機能に {{WebExtAPIRef("storage.local")}} API で制限する容量を超えられるようにする
- Firefox では[「永続的な」IndexedDB データベース](/ja/docs/Web/API/Storage_API/Storage_quotas_and_eviction_criteria#firefox_specifics)の作成を、データベース作成時にブラウザーからユーザーに許可を確認することなく、可能にする

## 例

```json
 "permissions": ["*://developer.mozilla.org/*"]
```

これは `developer.mozilla.org` ドメイン配下のページにアクセスする権限を要求しています。

```json
  "permissions": ["tabs"]
```

`tabs` API を使用する権限を要求しています。

```json
  "permissions": ["*://developer.mozilla.org/*", "tabs"]
```

上記の権限を両方ともに要求しています。

## ブラウザーの互換性

{{Compat}}
