---
title: ネイティブマニフェスト
slug: Mozilla/Add-ons/WebExtensions/Native_manifests
---

{{AddonSidebar}}

ネイティブマニフェストは特別な形式の JSON ファイルで、拡張機能のインストールプロセスの範囲外の方法でユーザーのコンピューターに配布されます。例えば、ネイティブマニフェストは端末の管理者やネイティブアプリケーションのインストーラーによって配布されます。

3 つの異なる種類のネイティブマニフェストがあります:

| [Native messaging マニフェスト](#Native_messaging_manifests) | [native messaging](/ja/docs/Mozilla/Add-ons/WebExtensions/Native_messaging) と呼ぶ機能を可能にします、ここでは拡張機能は端末にインストールされたネイティブアプリとやりとりできます。 |
| ------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| [Managed storage マニフェスト](#Managed_storage_manifests)   | {{WebExtAPIRef("storage.managed")}} API 使って拡張機能がアクセスする読み込み専用データを定義します。                                                                                 |
| [PKCS #11 マニフェスト](#PKCS_11_manifests)                  | 拡張機能が {{WebExtAPIRef("pkcs11")}} API を使って PKCS #11 セキュリティモジュールを列挙して、Firefox にインストールできるようにします。                                             |

すべてのネイティブマニフェスト用に、ブラウザーがマニフェストを見つけられるように調整する必要があります。 [マニフェストの場所](#Manifest_location) のセクションでこのルールを述べています。

## Native messaging マニフェスト

native messaging マニフェストは以下のプロパティを含む単一の JSON オブジェクトです:

| 名前                 | 種類            | 説明                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| -------------------- | --------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `name`               | String          | ネイティブアプリケーションの名前です。この名前は拡張機能の {{WebExtAPIRef("runtime.connectNative()")}} か {{WebExtAPIRef("runtime.sendNativeMessage()")}} に渡される名前と一致している必要があります。OS X と Linux では、native messaging マニフェストの（.json 拡張子を除いた）ファイル名とも一致していなければなりません。Windows では、native messaging マニフェストの場所を記した作成済みレジストリキーの名前と一致している必要があります。次の正規表現にマッチする必要があります: "^\w+(\\.\w+)\*$" つまり、名前には(大文字か小文字の)英数字とアンダースコア、ドットのみ含めることができます。最初または最後の文字にドットを使用することはできず、ドットを 2 つ以上連続させることもできません。 |
| `description`        | String          | ネイティブアプリケーションの説明です。                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
| `path`               | String          | ネイティブアプリケーションのパスです。Windows では、マニフェスト自身からの相対パスを指定することもできます。OS X や Linux では絶対パスでなければなりません。                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |
| `type`               | String          | 拡張機能にアプリケーションが接続するために使用する方法を記述します。現在のところ、"stdio" のみが指定可能です。これはアプリケーションが標準入力 (stdin) を介してメッセージを受信し、標準出力 (stdout) を使用してメッセージを送信することを示します。                                                                                                                                                                                                                                                                                                                                                                                                                                                   |
| `allowed_extensions` | Array of String | [Add-on ID](/ja/docs/Mozilla/Add-ons/WebExtensions/WebExtensions_and_the_Add-on_ID) の配列です。配列中のそれぞれの値はこのネイティブアプリケーションとの通信が許可されている拡張機能を表します。つまり、作成する拡張機能の manifest.json ファイルに [applications](/ja/Add-ons/WebExtensions/manifest.json/applications) キーを含めたくなるものと思われるため、開発中に明示的な ID を設定しておくと良いでしょう。                                                                                                                                                                                                                                                                                     |

例として、"ping_pong" ネイティブアプリケーションのマニフェストを以下に示します:

```json
{
  "name": "ping_pong",
  "description": "Example host for native messaging",
  "path": "/path/to/native-messaging/app/ping_pong.py",
  "type": "stdio",
  "allowed_extensions": ["ping_pong@example.org"]
}
```

この設定では、"ping_pong\@example.org" という ID の拡張機能が "ping_pong" という名前を適切な {{WebExtAPIRef("runtime")}} API 関数に渡すことで接続を許可されます。 アプリケーション自体は "/path/to/native-messaging/app/ping_pong.py" にあります。

## Managed storage マニフェスト

managed storage マニフェストには次のプロパティを含む単一の JSON オブジェクトです:

| 名前          | 種類   | 説明                                                                                                                                                                                 |
| ------------- | ------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `name`        | String | ストレージにアクセスできる拡張機能の ID で、拡張機能の [applications](/ja/docs/Mozilla/Add-ons/WebExtensions/manifest.json/applications) キーで指定したのと同じものです。            |
| `description` | String | 人間が読める説明で、Firefox には無視されます。                                                                                                                                       |
| `type`        | String | "storage" でなければなりません。                                                                                                                                                     |
| `data`        | Object | JSON オブジェクトで、その中にあらゆる有効な JSON 値(文字列、数値、真偽値、配列、オブジェクトを含む)が入ります。これは `browser.storage.managed` ストレージ領域内のデータになります。 |

例えば:

```json
{
  "name": "favourite-colour-examples@mozilla.org",
  "description": "ignored",
  "type": "storage",
  "data": {
    "colour": "management thinks it should be blue!"
  }
}
```

この JSON マニフェストでは、"favourite-colour-examples\@mozilla.org" 拡張機能は次のようなコードを使ってデータにアクセスできます:

```js
var storageItem = browser.storage.managed.get("colour");
storageItem.then((res) => {
  console.log(`Managed colour is: ${res.colour}`);
});
```

## PKCS #11 マニフェスト

PKCS #11 マニフェストは以下のプロパティを持った JSON オブジェクトを含むファイルです:

| 名前                 | 種類            | 説明                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
| -------------------- | --------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `name`               | String          | PKCS #11 モジュールの名前です。`pkcs11` API で使われている名前と一致している必要があります。OS X と Linux では、マニフェストの (拡張子を除いた) ファイル名とも一致していなければなりません。Windows では、マニフェストの場所を記した作成済みレジストリキーの名前と一致している必要があります。次の正規表現にマッチする必要があります: "^\w+(\\.\w+)\*$" つまり、名前には(大文字か小文字の)英数字とアンダースコア、ドットのみ含めることができます。最初または最後の文字にドットを使用することはできず、ドットを 2 つ以上連続させることもできません。 |
| `description`        | String          | モジュールの説明です。ブラウザー UI (例えば、Firefox の "Security Devices" ダイアログ) で表示される、読みやすい名前を付けるのに使われます。                                                                                                                                                                                                                                                                                                                                                                                                         |
| `path`               | String          | モジュールのパスです。Windows では、マニフェスト自身からの相対パスを指定することもできます。OS X や Linux では絶対パスでなければなりません。                                                                                                                                                                                                                                                                                                                                                                                                        |
| `type`               | String          | "pkcs11" でなければなりません。                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
| `allowed_extensions` | Array of String | [Add-on ID](/ja/docs/Mozilla/Add-ons/WebExtensions/WebExtensions_and_the_Add-on_ID) の配列です。配列中のそれぞれの値はモジュールとの通信が許可されている拡張機能を表します。つまり、作成する拡張機能の manifest.json ファイルに [applications](/ja/docs/Mozilla/Add-ons/WebExtensions/manifest.json/applications) キーを含めたくなるものと思われるため、開発中に明示的な ID を設定しておくと良いでしょう。                                                                                                                                          |

例えば:

```json
{
  "name": "my_module",
  "description": "My test module",
  "type": "pkcs11",
  "path": "/path/to/libpkcs11testmodule.dylib",
  "allowed_extensions": ["my-extension@mozilla.org"]
}
```

この JSON マニフェストでは、"my_module.json" として保存すれば、"my-extension\@mozilla.org" 拡張機能はこのようなコードから "/path/to/libpkcs11testmodule.dylib" のセキュリティーモジュールをインストールすることもできます:

```js
browser.pkcs11.installModule("my_module");
```

## マニフェストの場所

Linux と Mac OS X では、マニフェストを特定の場所に保管する必要があります。Windows では、マニフェストの場所を指定するレジストリキーを作成する必要があります。

詳しいルールはどのマニフェストの種類でも同じですが、例外として最後から 2 番目のパスのコンポーネントはマニフェストの種類を特定します。下記の例では、3 種類のそれぞれの形を示しています。すべての例において、_\<name>_ はマニフェスト内の `name` プロパティの値です。

### Windows

グローバルな設定としては、以下の名前のレジストリキーを作成します:

```
HKEY_LOCAL_MACHINE\SOFTWARE\Mozilla\NativeMessagingHosts\<name>
HKEY_LOCAL_MACHINE\SOFTWARE\Mozilla\ManagedStorage\<name>
HKEY_LOCAL_MACHINE\SOFTWARE\Mozilla\PKCS11Modules\<name>
```

このキーにマニフェストへのパスを示す単一の既定の値を設定します。

Firefox バージョン 64 以降では、32 ビットレジストリ view ([Wow6432Node)](https://en.wikipedia.org/wiki/WoW64#Registry_and_file_system) がこれらのキーの中でまずチェックされ、"native" レジストリ view が続いてチェックされます。いずれの view にしてもアプリケーションにふさわしいレジストリを使用してください。

_Firefox バージョン 63 　以前では、もし 32 ビットのアプリケーションであっても、このキーは [Wow6432Node](https://en.wikipedia.org/wiki/WoW64#Registry_and_file_system) 下に作成しないで下さい。以前のバージョンのブラウザは常に 32-bit エミュレーションではなくレジストリの "native" view 下のキーを探します。確実に "native" view にキーを作成するために、KEY_WOW64_64KEY または KEY_WOW64_32KEY フラグを RegCreateKeyEx に渡すことができます。[Accessing an Alternate Registry View](<https://msdn.microsoft.com/en-us/library/windows/desktop/aa384129(v=vs.85).aspx>) を参照して下さい。_

ユーザごとの設定としては、以下の名前のレジストリキーを作成します:

```
HKEY_CURRENT_USER\SOFTWARE\Mozilla\NativeMessagingHosts\<name>
HKEY_CURRENT_USER\SOFTWARE\Mozilla\ManagedStorage\<name>
HKEY_CURRENT_USER\SOFTWARE\Mozilla\PKCS11Modules\<name>
```

このキーにマニフェストへのパスを示す単一の既定の値を設定します。

### Mac OS X

グローバルな設定としては、マニフェストを以下に配置します:

```
/Library/Application Support/Mozilla/NativeMessagingHosts/<name>.json
/Library/Application Support/Mozilla/ManagedStorage/<name>.json
/Library/Application Support/Mozilla/PKCS11Modules/<name>.json
```

個人ごとの設定としては、マニフェストを以下に配置します:

```
~/Library/Application Support/Mozilla/NativeMessagingHosts/<name>.json
~/Library/Application Support/Mozilla/ManagedStorage/<name>.json
~/Library/Application Support/Mozilla/PKCS11Modules/<name>.json
```

### Linux

グローバルな設定としては、マニフェストを以下のいずれかに配置します:

```
/usr/lib/mozilla/native-messaging-hosts/<name>.json
/usr/lib/mozilla/managed-storage/<name>.json
/usr/lib/mozilla/pkcs11-modules/<name>.json
```

あるいは:

```
/usr/lib64/mozilla/native-messaging-hosts/<name>.json
/usr/lib64/mozilla/managed-storage/<name>.json
/usr/lib64/mozilla/pkcs11-modules/<name>.json
```

個人ごとの設定としては、マニフェストを以下に配置します:

```
~/.mozilla/native-messaging-hosts/<name>.json
~/.mozilla/managed-storage/<name>.json
~/.mozilla/pkcs11-modules/<name>.json
```
