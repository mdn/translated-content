---
title: ネイティブメッセージング
slug: Mozilla/Add-ons/WebExtensions/Native_messaging
---

{{AddonSidebar}}

**ネイティブメッセージング**はユーザーのコンピューターにインストールされたアプリケーションと拡張機能との間のメッセージ交換を可能にします。ネイティブメッセージングにより、拡張機能が追加のウェブを介したアクセスなしにサービスを提供できます。

パスワードマネージャーは、パスワードの管理、保管、暗号化を行うネイティブアプリケーションです。ネイティブアプリケーションは拡張機能と通信してウェブフォームに入力を行います。

さらに、ネイティブメッセージングを用いることで、 WebExtension API ではアクセスできないリソース（特定のハードウェアなど）に対して拡張機能からアクセスできるようになります。

ネイティブアプリケーションは、ブラウザーによってインストールまたは管理されません。ネイティブアプリケーションは、基盤となるオペレーティングシステムのインストール機構を使用してインストールされます。「ホストマニフェスト」または「アプリマニフェスト」と呼ばれる JSON ファイルを作成してください。定義された場所に JSON ファイルをインストールしてください。アプリマニフェストファイルには、ブラウザーがネイティブアプリケーションに接続する方法を記述します。

拡張機能は `"nativeMessaging"` の [権限](/ja/docs/Mozilla/Add-ons/WebExtensions/manifest.json/permissions)または[オプション権限](/ja/docs/Mozilla/Add-ons/WebExtensions/manifest.json/optional_permissions)を `manifest.json` の中で要求する必要があります。また、ネイティブアプリケーション側ではアプリマニフェストの "allowed_extensions" フィールドに拡張機能の ID を含めることで権限を許可する必要があります。

インストール後、拡張機能はネイティブアプリケーションと JSON メッセージを交換することができます。 {{WebExtAPIRef("runtime")}} API の一連の関数を使用します。ネイティブアプリ側では、メッセージは標準入力 (`stdin`) を使用して受信し、標準出力 (`stdout`) を使用して送信します。

![](native-messaging.png)

ネイティブメッセージングの対応は Chrome とほぼ互換性がありますが、主に 2 つの違いがあります。

- アプリマニフェストには `allowed_extensions` にアプリの ID の配列を記述します。 Chrome では `allowed_origins` に "chrome-extension" URL の配列を記述します。
- アプリマニフェストは [Chrome と比較して](https://developer.chrome.com/docs/apps/nativeMessaging/#native-messaging-host-location)異なる場所に格納されます。

GitHub の "webextensions-examples" リポジトリーの ["`native-messaging`" ディレクトリー](https://github.com/mdn/webextensions-examples/tree/master/native-messaging)に完全な例があります。この記事におけるサンプルコードの大半は、この例から直接持ち込んでいます。

## セットアップ

### 拡張機能のマニフェスト

もし拡張機能をネイティブアプリケーションと通信させたい場合、

- `"nativeMessaging"` [権限](/ja/docs/Mozilla/Add-ons/WebExtensions/manifest.json/permissions)または[オプション権限](/ja/docs/Mozilla/Add-ons/WebExtensions/manifest.json/optional_permissions)を [`manifest.json`](/ja/Add-ons/WebExtensions/manifest.json) ファイルに設定する必要があります。
- アドオンIDを明示的に指定します。 [`browser_specific_settings`](/ja/docs/Mozilla/Add-ons/WebExtensions/manifest.json/browser_specific_settings) マニフェストキーを使用してください（アプリのマニフェストは、 ID への接続を許可する拡張機能のセットを識別します）。

以下に manifest.json の例を示します。

```json
{
  "description": "Native messaging example add-on",
  "manifest_version": 2,
  "name": "Native messaging example",
  "version": "1.0",
  "icons": {
    "48": "icons/message.svg"
  },

  "browser_specific_settings": {
    "gecko": {
      "id": "ping_pong@example.org",
      "strict_min_version": "50.0"
    }
  },

  "background": {
    "scripts": ["background.js"]
  },

  "browser_action": {
    "default_icon": "icons/message.svg"
  },

  "permissions": ["nativeMessaging"]
}
```

> **メモ:** Chrome は [browser_specific_settings](/ja/docs/Mozilla/Add-ons/WebExtensions/manifest.json/browser_specific_settings) キーに対応していません。 Chrome に同等の WebExtension をインストールするには、このキーを含まない別のマニフェストを使用する必要があります。以下の [Chrome の非互換性](#chrome_での非互換性)を参照してください。

> **メモ:** オプションの権限を使用する場合、権限が付与されていることを確認し、必要に応じて {{WebExtAPIRef("permissions")}} API でユーザーに権限を要求してからネイティブアプリケーションと通信してください。

### アプリマニフェスト

アプリマニフェストに、ブラウザーがネイティブアプリケーションに接続する方法を記述します。

アプリマニフェストファイルはネイティブアプリケーションと一緒にインストールする必要があります。ブラウザーはアプリマニフェストファイルを読み込み、検証を行いますが、インストールや管理は行いません。したがって、アプリマニフェストファイルがインストール・更新された時期や方法についてのセキュリティモデルは、 WebExtension を使う拡張機能に対してのものというよりはネイティブアプリケーションに対してのものです。

ネイティブアプリマニフェストの文法と場所については、[ネイティブマニフェスト](/ja/docs/Mozilla/Add-ons/WebExtensions/Native_manifests)を見てください。

例として、 "ping_pong" ネイティブアプリケーションのマニフェストを以下に示します。

```json
{
  "name": "ping_pong",
  "description": "Example host for native messaging",
  "path": "/path/to/native-messaging/app/ping_pong.py",
  "type": "stdio",
  "allowed_extensions": ["ping_pong@example.org"]
}
```

この設定では、 `"ping_pong@example.org"` という ID の 拡張機能において `"ping_pong"` という名前を {{WebExtAPIRef("runtime")}} API の関数に渡すことによる接続が許可されます。 アプリケーション自体は `"/path/to/native-messaging/app/ping_pong.py"` です。

> **メモ:** Chrome は、 WebExtension の ID を使用して、`allowed_origins` という別のキーで許可される拡張機能を識別します。詳しくは [Chrome のドキュメント](https://developer.chrome.com/docs/apps/nativeMessaging/#native-messaging-host)を参照し、以下の [Chrome での非互換性](#chrome_での非互換性)を参照してください。

### Windows セットアップ

例として、 [GitHub のネイティブメッセージング拡張機能の readme](https://github.com/SphinxKnight/webextensions-examples/tree/master/native-messaging#windows-setup) を参照することもできます。Windows マシンでこのリポジトリーをフォークした後、ローカルの設定を確認したい場合、いくつかの問題のトラブルシューティングのために `check_config_win.py` を実行することができます。

#### アプリマニフェスト

上記の例では、ネイティブアプリケーションは Python スクリプトです。この方法で Windows に Python スクリプトを確実に実行させるのは難しいので、代替案として `.bat` ファイルを提供し、アプリケーションのマニフェストからそれにリンクする方法があります。

```json
{
  "name": "ping_pong",
  "description": "Example host for native messaging",
  "path": "c:\\path\\to\\native-messaging\\app\\ping_pong_win.bat",
  "type": "stdio",
  "allowed_extensions": ["ping_pong@example.org"]
}
```

(`allowed_extensions` キーと Chrome での対応については、上記の [Chrome の互換性](#chrome_での非互換性) についての注意を参照してください)。

そして、バッチファイルが Python スクリプトを呼び出します。

```bash
@echo off

python -u "c:\\path\\to\\native-messaging\\app\\ping_pong.py"
```

#### レジストリー

ブラウザーは、特定の場所にある レジストリーキー に基づいて拡張機能を見つけます。最終的なアプリケーションでプログラム的に追加するか、 GitHub の例を使用する場合は手動で追加する必要があります。詳細については、[マニフェストの場所](/ja/docs/Mozilla/Add-ons/WebExtensions/Native_manifests#manifest_location)を参照してください。

`ping_pong` の例にならって、 Firefox を使用する場合（[Chrome の場合はこのページ](https://developer.chrome.com/docs/apps/nativeMessaging/#native-messaging-host-location)を参照）、メッセージングが動作するように 2 つのレジストリー項目を作成する必要があります。

- `HKEY_CURRENT_USER\Software\Mozilla\NativeMessagingHosts\ping_pong`

  - このキーの既定値は、*アプリケーションマニフェスト*へのパスとなります。例: `C:\Users\<myusername>\webextensions-examples\native-messaging\app\ping_pong.json`

- `HKEY_LOCAL_MACHINE\Software\Mozilla\NativeMessagingHosts\ping_pong`

  - このキーの既定値は、アプリケーションマニフェストへのパスへのパスとなります。

> **メモ:** GitHub にあるサンプルを元に作業を行う場合は、ブラウザーに WebExtension をインストールする前に、 [readme のこの部分](https://github.com/SphinxKnight/webextensions-examples/tree/master/native-messaging#windows-setup)を読み、 `check_config_win.py` の出力をチェックしてください。

## メッセージの交換

上記のセットアップにより、拡張機能はネイティブアプリケーションと JSON メッセージを交換することができます。

### 拡張機能側

ネイティブメッセージは、コンテンツスクリプトで直接使うことはできません。[バックグラウンドスクリプトで間接的にやりとりする](/ja/docs/Mozilla/Add-ons/WebExtensions/Content_scripts#communicating_with_background_scripts)必要があります。

これを使うには 2 つのパターンがあります。**コネクションベースのメッセージング**と**コネクションレスメッセージング**です。

#### コネクションベースのメッセージング

このパターンでは、 {{WebExtAPIRef("runtime.connectNative()")}} を呼びだし、その時にアプリケーションの名前（アプリマニフェストの "name" プロパティの値）を渡します。既にアプリケーションが起動済みでなかった場合、これによってアプリケーションが起動し、{{WebExtAPIRef("runtime.Port")}} オブジェクトを拡張機能に返します。

ネイティブアプリは起動時に次の 2 つの引数を取ります。

- アプリマニフェストの完全パス
- (Firefox 55 以降で) 起動元のアドオンの ID (manifest.json の [browser_specific_settings](/ja/docs/Mozilla/Add-ons/WebExtensions/manifest.json/browser_specific_settings) キーにて指定)

> **メモ:** Chrome では引数の扱いが異なります。
>
> - Linux と Macでは、Chrome は引数を、拡張機能が開始するオリジンを次の形: `chrome-extension://[extensionID]`で渡します。これによりアプリは拡張機能を識別できます。
> - Windowsでは、Chrome は 2 つの引数を渡します、 1 つ目は拡張機能のオリジンで、 2 つ目はアプリを開始するChrome ネイティブウィンドウのハンドルです。

アプリケーションは 拡張機能が `Port.disconnect()` を呼び出すか、接続されたページが閉じられるまで実行し続けます。

`Port` を使用してメッセージを送信するためには、`postMessage()` 関数を呼び出し、 送信する JSON メッセージを渡します。`Port` を使用してメッセージを受信するためには、`onMessage.addListener()` 関数を使用してリスナーを追加します。

"ping_pong" アプリケーションとコネクションを確立するバックグラウンドスクリプトの例を示します。アプリケーションからのメッセージを受信し、ユーザーがブラウザーアクションをクリックするたびに "ping" メッセージを送信します。

```js
/*
On startup, connect to the "ping_pong" app.
*/
let port = browser.runtime.connectNative("ping_pong");

/*
Listen for messages from the app.
*/
port.onMessage.addListener((response) => {
  console.log("Received: " + response);
});

/*
On a click on the browser action, send the app a message.
*/
browser.browserAction.onClicked.addListener(() => {
  console.log("Sending:  ping");
  port.postMessage("ping");
});
```

#### コネクションレスメッセージング

このパターンでは、 {{WebExtAPIRef("runtime.sendNativeMessage()")}} を呼び出し、以下のものを渡します。

- アプリケーションの名前
- 送信する JSON メッセージ
- コールバック（オプション）

それぞれのメッセージごとに新しいアプリケーションのインスタンスが作成されます。アプリの開始時に次の 2 つの引数が渡されます。

- アプリマニフェストの完全パス
- (Firefox 55 以降で) 起動元のアドオンの ID (manifest.json の [browser_specific_settings](/ja/docs/Mozilla/Add-ons/WebExtensions/manifest.json/browser_specific_settings) キーにて指定)

アプリからの最初のメッセージは `sendNativeMessage()` 呼び出しの応答として扱われ、コールバックに渡されます。

以下に、先ほどの例を `runtime.sendNativeMessage()` を使って書き直したものを示します。

```js
function onResponse(response) {
  console.log("Received " + response);
}

function onError(error) {
  console.log(`Error: ${error}`);
}

/*
On a click on the browser action, send the app a message.
*/
browser.browserAction.onClicked.addListener(() => {
  console.log("Sending:  ping");
  let sending = browser.runtime.sendNativeMessage("ping_pong", "ping");
  sending.then(onResponse, onError);
});
```

### アプリ側

アプリケーション側では、標準入力を用いてメッセージを受信し、標準出力を用いてメッセージを送信します。

各メッセージは JSON でシリアライズされ、UTF-8 でエンコードされ、メッセージ長を表す 32 ビットの値がネイティブのバイト順で先頭に付加されます。

アプリケーションからの一つのメッセージの最大サイズは 1MB です。アプリケーションへの一つのメッセージの最大サイズは 4GB です。

次の NodeJS コードで、すぐにメッセージを送受信することができます。

```js
#!/usr/local/bin/node

(() => {
  let payloadSize = null;

  // A queue to store the chunks as we read them from stdin.
  // This queue can be flushed when `payloadSize` data has been read
  let chunks = [];

  // Only read the size once for each payload
  const sizeHasBeenRead = () => Boolean(payloadSize);

  // All the data has been read, reset everything for the next message
  const flushChunksQueue = () => {
    payloadSize = null;
    chunks.splice(0);
  };

  const processData = () => {
    // Create one big buffer with all the chunks
    const stringData = Buffer.concat(chunks);

    // The browser will emit the size as a header of the payload,
    // if it hasn't been read yet, do it.
    // The next time we'll need to read the payload size is when all of the data
    // of the current payload has been read (ie. data.length >= payloadSize + 4)
    if (!sizeHasBeenRead()) {
      payloadSize = stringData.readUInt32LE(0);
    }

    // If the data we have read so far is >= to the size advertised in the header,
    // it means we have all of the data sent.
    // We add 4 here because that's the size of the bytes that old the payloadSize
    if (stringData.length >= payloadSize + 4) {
      // Remove the header
      const contentWithoutSize = stringData.slice(4, payloadSize + 4);

      // Reset the read size and the queued chunks
      flushChunksQueue();

      const json = JSON.parse(contentWithoutSize);
      // Do something with the data…
    }
  };

  process.stdin.on("readable", () => {
    // A temporary variable holding the nodejs.Buffer of each
    // chunk of data read off stdin
    let chunk = null;

    // Read all of the available data
    while ((chunk = process.stdin.read()) !== null) {
      chunks.push(chunk);
    }

    processData();
  });
})();
```

もうひとつ、 Python による例を示します。このアプリケーションはアドオンからのメッセージを受信します。 Linuxでは、このファイルを実行可能にしてください。メッセージが "ping" であった場合、 "pong" というメッセージを返します。

これは Python 2 のバージョンです。

```python
#!/usr/bin/python -u

# Note that running python with the `-u` flag is required on Windows,
# in order to ensure that stdin and stdout are opened in binary, rather
# than text, mode.

import json
import sys
import struct

# Read a message from stdin and decode it.
def get_message():
    raw_length = sys.stdin.read(4)
    if not raw_length:
        sys.exit(0)
    message_length = struct.unpack('=I', raw_length)[0]
    message = sys.stdin.read(message_length)
    return json.loads(message)

# Encode a message for transmission, given its content.
def encode_message(message_content):
    encoded_content = json.dumps(message_content)
    encoded_length = struct.pack('=I', len(encoded_content))
    return {'length': encoded_length, 'content': encoded_content}

# Send an encoded message to stdout.
def send_message(encoded_message):
    sys.stdout.write(encoded_message['length'])
    sys.stdout.write(encoded_message['content'])
    sys.stdout.flush()

while True:
    message = get_message()
    if message == "ping":
        send_message(encode_message("pong"))
```

Python 3 では、受信したバイナリーデータを文字列にデコードしないといけません。アドオンに送り返されるコンテンツは構造体を使ってバイナリーデータにエンコードする必要があります。

```python
#!/usr/bin/python -u

# Note that running python with the `-u` flag is required on Windows,
# in order to ensure that stdin and stdout are opened in binary, rather
# than text, mode.

import json
import sys
import struct

# Read a message from stdin and decode it.
def get_message():
    raw_length = sys.stdin.buffer.read(4)

    if not raw_length:
        sys.exit(0)
    message_length = struct.unpack('=I', raw_length)[0]
    message = sys.stdin.buffer.read(message_length).decode("utf-8")
    return json.loads(message)

# Encode a message for transmission, given its content.
def encode_message(message_content):
    encoded_content = json.dumps(message_content).encode("utf-8")
    encoded_length = struct.pack('=I', len(encoded_content))
    #  use struct.pack("10s", bytes), to pack a string of the length of 10 characters
    return {'length': encoded_length, 'content': struct.pack(str(len(encoded_content))+"s",encoded_content)}

# Send an encoded message to stdout.
def send_message(encoded_message):
    sys.stdout.buffer.write(encoded_message['length'])
    sys.stdout.buffer.write(encoded_message['content'])
    sys.stdout.buffer.flush()

while True:
    message = get_message()
    if message == "ping":
        send_message(encode_message("pong"))
```

## ネイティブアプリを閉じる

`runtime.connectNative()` を使用してネイティブアプリケーションに接続した場合、アプリケーションは拡張機能が `Port.disconnect()` を呼び出すか接続したページが閉じられるまで実行されます。`runtime.sendNativeMessage()` を使用してネイティブアプリケーションの実行を開始した場合、アプリケーションはメッセージを受信してレスポンスを送信した後閉じられます。

ネイティブアプリケーションを閉じるためには、次のようにします。

- OS X や Linux のような \*nix システムでは、ブラウザーはネイティブアプリケーションが正しく終了する機会を与えるために SIGTERM を送信し、その後 SIGKILL を送信します。これらのシグナルは新しいプロセスグループを作成して分けない限りすべてのサブプロセスに伝播します。
- Windows では、ブラウザーはネイティブアプリケーションのプロセスを [Job オブジェクト](<https://msdn.microsoft.com/en-us/library/windows/desktop/ms684161(v=vs.85).aspx>)とし、ジョブを kill します。 ネイティブアプリケーションが追加でプロセスを立ち上げ、アプリケーション自体が kill された後もそのままにしたい場合、ネイティブアプリケーションは追加のプロセスを [`CREATE_BREAKAWAY_FROM_JOB`](<https://msdn.microsoft.com/library/windows/desktop/ms684863(v=vs.85).aspx>) フラグを立てて立ち上げる必要があります。

## トラブルシューティング

もしうまくいかない場合、[ブラウザーコンソール](https://extensionworkshop.com/documentation/develop/debugging/#viewing_log_output)をチェックしてください。ネイティブアプリケーションが何かしらの出力を stderr に送っていた場合、ブラウザーはそれをブラウザーのコンソールにリダイレクトします。そのため、ネイティブアプリケーションが起動できている限り、出力されたエラーメッセージを確認することができます。

アプリケーションが起動できていなかった場合、問題の手がかりとなるエラーメッセージを確認してください。

```
"No such native application <name>"
```

- `runtime.connectNative()` に渡した名前がアプリマニフェスト中の名前と一致しているか確認してください。
- OS X/Linux: アプリマニフェストのファイル名が `<name>.json` となっていることを確認してください。
- OS X/Linux: ネイティブアプリのマニフェストの場所が[ここ](/ja/docs/Mozilla/Add-ons/WebExtensions/Native_manifests#mac_OS_X)で述べているところにあるのを確認してください。
- Windows: レジストリキーが正しい場所にあり、その名前がアプリマニフェスト中の名前と一致していることを確認してください。
- Windows: レジストリキーに指定されたパスがアプリマニフェストを指していることを確認してください。

  ```
  "Error: Invalid application <name>"
  ```

- アプリケーションの名前に不正な文字が含まれていないことを確認してください。

  ```
  "'python' is not recognized as an internal or external command, ..."
  ```

- Windows: アプリケーションが Python スクリプトの場合、Python がインストールされており、パスが正しく設定されていることを確認してください。

  ```
  "File at path <path> does not exist, or is not executable"
  ```

- このメッセージが表示されたとき、アプリマニフェストの発見には成功しています。
- アプリマニフェストの "path" が正しいかどうかを確認してください。
- Windows: パスセパレータがエスケープされていることを確認してください (`"c:\\path\\to\\file"`)。
- アプリがアプリマニフェストの "path" プロパティで示された場所に配置されていることを確認してください。
- アプリが実行可能であることを確認してください。

  ```
  "This extension does not have permission to use native application <name>"
  ```

- アプリマニフェストの "allowed_extensions" がアドオンの ID を含んでいることを確認してください。

  ```
      "TypeError: browser.runtime.connectNative is not a function"
  ```

- アドオンが "nativeMessaging" permission を持っているか確認してください。

  ```
  "[object Object]       NativeMessaging.jsm:218"
  ```

- アプリケーションの開始に問題が発生しました。

## Chrome での非互換性

ウェブ拡張機能のネイティブメッセージングに影響を与えるブラウザー間の違いは、ネイティブアプリに渡される引数、マニフェストファイルの場所など、多数あります。
これらの違いについては、 [Chrome の非互換性 > ネイティブメッセージング](/ja/docs/Mozilla/Add-ons/WebExtensions/Chrome_incompatibilities#native_messaging)で説明されています。
