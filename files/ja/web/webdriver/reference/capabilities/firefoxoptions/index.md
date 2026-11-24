---
title: firefoxOptions
slug: Web/WebDriver/Reference/Capabilities/firefoxOptions
l10n:
  sourceCommit: e3a2272d272f21ea38e5fff9bd6ccec2d0dfb1a8
---

**`moz:firefoxOptions` キャパビリティ**は、[Firefox](https://www.firefox.com/en-US/) 固有の、名前空間付きキャパビリティ群です。Firefox の動作を制御するために使用し、[`alwaysMatch`](/ja/docs/Web/WebDriver/Reference/Capabilities#alwaysmatch) のメンバー、または [`firstMatch`](/ja/docs/Web/WebDriver/Reference/Capabilities#firstmatch) の各項目のメンバーとして使用できます。

Firefox の起動方法と実行方法を制御するオプションを定義するために使用します。

## 値

`moz:firefoxOptions` は、次のフィールドを含むことがある JSON オブジェクトです。

### `binary` (文字列)

使用するカスタム Firefox バイナリーの絶対パスです。

macOS では、アプリケーションバンドルへのパス (例: `/Applications/Firefox.app`)、またはこのバンドル内の実行可能バイナリーへの絶対パス (例: `/Applications/Firefox.app/Contents/MacOS/firefox-bin`) のどちらかを指定できます。

未定義の場合、geckodriver は現在のシステム上にある Firefox のデフォルトの場所を推測します。Firefox のデフォルトの場所は次のとおりです。

<table class="standard-table">
  <thead>
    <tr>
      <th scope="col">システム</th>
      <th scope="col">デフォルトの場所</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>macOS</td>
      <td>
        <ol>
          <li>
            <code>/Applications/Firefox.app/Contents/MacOS/firefox-bin</code>
          </li>
          <li>
            <code
              >$HOME/Applications/Firefox.app/Contents/MacOS/firefox-bin</code
            >
          </li>
        </ol>
      </td>
    </tr>
    <tr>
      <td>Linux<br />BSD</td>
      <td>
        <p>
          システムのパス上で最初に見つかった <code>firefox</code> です。これは、
          <a
            href="https://manpages.debian.org/stretch/debianutils/which.1.en.html"
            >which(1)</a
          ><sup>(英語)</sup> を実行したときの出力と同じです。
        </p>
        <pre class="brush: plain">
% which firefox
/usr/bin/firefox
</pre
        >
      </td>
    </tr>
    <tr>
      <td>Windows</td>
      <td>
        <p>Windows システムレジストリーから取得します。</p>
        <ol>
          <li>
            <code
              >HKEY_LOCAL_MACHINE\SOFTWARE WOW6432Node\Mozilla\Mozilla
              Firefox\[VERSION]\Main\PathToExe</code
            >
          </li>
          <li>
            <code
              >HKEY_LOCAL_MACHINE\SOFTWARE\Mozilla\Mozilla
              Firefox\[VERSION]\Main\PathToExe</code
            >
          </li>
        </ol>
      </td>
    </tr>
  </tbody>
</table>

### `args` (文字列の配列)

Firefox バイナリーに渡すコマンドライン引数です。必要に応じて先頭にハイフン (`-`) を付けます (例: `["-headless"]`)。

geckodriver にローカルファイルシステム上の既存の[プロファイル](#profile_文字列)を使用させるには、`["-profile", "/path/to/profile"]` を渡します。ただし、プロファイルを対象マシンに転送する必要がある場合は、代わりに `profile` エントリーを使用することをお勧めします。

### `profile` (文字列)

Firefox インスタンスで使用するプロファイルディレクトリーを ZIP 化し、Base64 エンコードしたものです。拡張機能や独自の証明書のインストールなどに使用できますが、独自の設定を行う場合は、代わりに `prefs` ([設定オブジェクト](#prefs_設定オブジェクト)) エントリーを使用することをお勧めします。

プロファイルはシステムの一時フォルダーに作成されます。`profile` が指定された場合、エンコードされたプロファイルもこの場所に展開されます。
デフォルトでは、geckodriver はこの場所に新しいプロファイルを作成します。

WebDriver セッションが使用する有効なプロファイルは、[新しいセッションのレスポンス](/ja/docs/Web/WebDriver/Reference/Classic/Commands/NewSession)内の `moz:profile` キャパビリティでユーザーに返されます。

geckodriver にファイルシステム上の既存のプロファイルを使用させるには、`args` フィールドに `{"args": ["-profile", "/path/to/your/profile"]}` を設定します。
別のシステム上のサーバーを対象とするリモートクライアントを使用する場合、プロファイルは対象システム上にあらかじめ存在していなければなりません。

### `log` (ログオブジェクト)

geckodriver と Firefox のログの詳細度を上げるには、`{"log": {"level": "trace"}}` のような `log` オブジェクトを渡します。
これにより、trace レベル以上のすべてのログが含まれます。

次のフィールドを含むことがある JSON オブジェクトです。

#### `level` (文字列)

geckodriver と Firefox のログの詳細度を設定します。使用できるレベルは `trace`、`debug`、`config`、`info`、`warn`、`error`、`fatal` です。
未定義の場合、デフォルトは `info` です。値の大文字と小文字は区別されません。

### `prefs` (設定オブジェクト)

設定名と設定値の対応付けです。設定値には文字列、論理値、整数を指定できます。

設定する各項目を 1 つずつ含む JSON オブジェクトです。Firefox の起動前に、設定は[プロファイル](#profile_文字列)に書き込まれます。使用できる設定の一覧は、Firefox ブラウザーで `about:config` を開くと確認できます。その一部は[このソースファイル](https://searchfox.org/firefox-main/source/modules/libpref/init/all.js)<sup>(英語)</sup>に記載されています。

設定オブジェクトの例:

```json
{
  "dom.ipc.processCount": 8,
  "javascript.options.showInConsole": false
}
```

### Android

geckodriver 0.26.0 以降では、Firefox または [GeckoView](https://wiki.mozilla.org/Mobile/GeckoView)<sup>(英語)</sup> を組み込んだアプリケーションを Android 上で制御する場合に、追加のキャパビリティを使用できます。

#### `androidPackage` (文字列、必須)

Firefox のパッケージ名 (リリースチャネルに応じて `org.mozilla.firefox`、`org.mozilla.firefox_beta`、`org.mozilla.fennec` など)、または GeckoView を組み込んだアプリケーションのパッケージ名 (例: `org.mozilla.geckoview_example`) です。

#### `androidActivity` (文字列、省略可)

起動するアクティビティーの完全修飾クラス名です (例: `.GeckoViewActivity`)。指定されていない場合は、パッケージのデフォルトのアクティビティーが使用されます。

#### `androidDeviceSerial` (文字列、省略可)

アプリケーションの起動先となる端末のシリアル番号です。指定されておらず、複数の端末が接続されている場合は、エラーが返されます。

#### `androidIntentArguments` (文字列の配列、省略可)

インテントに渡す起動引数です。内部では、geckodriver は [Android am](https://developer.android.com/tools/adb#am)<sup>(英語)</sup> を使用して、テスト対象の Android アプリケーションを起動します。指定したインテント引数は `am start` コマンドに追加されます。詳細は、[インテント引数の仕様](https://developer.android.com/tools/adb#IntentSpec)<sup>(英語)</sup>を参照してください。これにより、アプリケーションの起動方法を制御し、機能の有効化や無効化に使うオプションの追加データを含めることができます。例えば、テストの一環としてナビゲーションする前に、view アクションと指定した URL を使って起動するには、次のようにします。

```json
{
  "androidIntentArguments": [
    "-a",
    "android.intent.action.VIEW",
    "-d",
    "https://example.com"
  ]
}
```

例えば、[android.content.Intent.getBooleanExtra](<https://developer.android.com/reference/android/content/Intent#getBooleanExtra(java.lang.String,%20boolean)>)<sup>(英語)</sup> で処理できる論理値の追加データを指定するには、次のようにします。

```json
{
  "androidIntentArguments": ["--ez", "customBooleanFlagName", "true"]
}
```

#### `env` (環境変数オブジェクト)

Android 端末上で実行されるアプリケーションプロセスに渡す、環境変数名と環境変数値の対応付けです。どちらも文字列でなければなりません。

設定する環境変数ごとに 1 つの項目を含む JSON オブジェクトです。デスクトップでは、テスト対象の Firefox は指定された環境変数を設定した環境で起動します。Android では、GeckoView ベースのアプリの設定 YAML の `env` ブロックに、指定された環境変数が追加されます。

環境変数オブジェクトの例:

```json
{
  "MOZ_LOG": "nsHttp:5",
  "MOZ_LOG_FILE": "/mnt/sdcard/log"
}
```

## 例

以下は、ファイルシステム上に用意された[プロファイル](#profile_文字列)を使用して、特定の Firefox バイナリーを[ヘッドレスモード](https://hacks.mozilla.org/2017/12/using-headless-mode-in-firefox/)<sup>(英語)</sup>で実行する[キャパビリティオブジェクト](/ja/docs/Web/WebDriver/Reference/Capabilities)の例です。
また、設定によって IPC プロセス数を増やし、ブラウザー内部のエラーや警告のコンソール出力を無効にし、ログの詳細度を上げています。

```json
{
  "capabilities": {
    "alwaysMatch": {
      "moz:firefoxOptions": {
        "binary": "/usr/local/firefox/bin/firefox",
        "args": ["-headless", "-profile", "/path/to/my/profile"],
        "prefs": {
          "dom.ipc.processCount": 8,
          "javascript.options.showInConsole": false
        },
        "log": { "level": "trace" },
        "env": {
          "MOZ_LOG": "nsHttp:5",
          "MOZ_LOG_FILE": "/path/to/my/profile/log"
        }
      }
    }
  }
}
```

`moz:firefoxOptions` は、上の例のように [`alwaysMatch`](/ja/docs/Web/WebDriver/Reference/Capabilities#alwaysmatch) の中、または次の例のように [`firstMatch`](/ja/docs/Web/WebDriver/Reference/Capabilities#firstmatch) のいずれかの[キャパビリティオブジェクト](/ja/docs/Web/WebDriver/Reference/Capabilities)の中に配置します。

```json
{
  "capabilities": {
    "firstMatch": [{ "moz:firefoxOptions": {} }]
  }
}
```

### Android

これは、ホストマシンで最初に起動した Android エミュレーターにインストールされている GeckoView のサンプルアプリケーションを実行します。

```json
{
  "capabilities": {
    "alwaysMatch": {
      "moz:firefoxOptions": {
        "androidPackage": "org.mozilla.geckoview_example",
        "androidActivity": "org.mozilla.geckoview_example.GeckoView",
        "androidDeviceSerial": "emulator-5554",
        "androidIntentArguments": ["-d", "http://example.org"],
        "env": {
          "MOZ_LOG": "nsHttp:5",
          "MOZ_LOG_FILE": "/mnt/sdcard/log"
        }
      }
    }
  }
}
```

## 関連情報

- [対応する Firefox キャパビリティに関する geckodriver のドキュメント](https://firefox-source-docs.mozilla.org/testing/geckodriver/Capabilities.html)<sup>(英語)</sup>
- [Chrome 固有の WebDriver キャパビリティ](https://developer.chrome.com/docs/chromedriver/capabilities)<sup>(英語)</sup> (`goog:chromeOptions`)
- [WebDriver のキャパビリティ一覧](/ja/docs/Web/WebDriver/Reference/Capabilities)
- [New Session](/ja/docs/Web/WebDriver/Reference/Classic/Commands/NewSession) コマンド
