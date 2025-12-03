---
title: WebDriver の能力
short-title: 能力
slug: Web/WebDriver/Reference/Capabilities
l10n:
  sourceCommit: 394a1aff10d20ba51dbd00252ce481769298001c
---

WebDriver の**能力**は、[セッション](/ja/docs/Web/WebDriver)が提供する機能を伝えるために使用されます。クライアントはまた、[新しいセッションの作成](/ja/docs/Web/WebDriver/Reference/Commands/NewSession)時に、ドライバーが満たすべき機能を定義するためにも能力が使用できます。

WebDriver セッションが作成されると、そのセッションでネゴシエーションされ有効となっている能力の一覧が返されます。この一覧に含まれる能力の一部は[標準であり全ブラウザーで共通です](#能力の一覧)が、一覧には[ブラウザー固有の機能](#ベンダー独自の能力)も含まれる場合があり、これらには常に接頭辞が付与されます。

## 能力ネゴシエーション

能力を使用することにより、特定の機能サブセットに対応するドライバーを要求することができます。これにより、[ウィンドウのサイズ変更機能](/ja/docs/Web/WebDriver/Reference/Capabilities/setWindowRect)などの特定のブラウザー機能を要求できるほか、分散環境において選択肢のマトリクスから特定のブラウザー構成を選択するためにも使用されます。

特定のウェブブラウザーやプラットフォームを選択するのは、リモート WebDriver を使用する場合にのみ意味があります。この場合、クライアントは 1 つ以上の仲介ノードを介して WebDriver と接続し、そのノードが受信した機能に基づいて、どのドライバーを返すかを決定します。

能力オブジェクトは、サーバーが返すドライバー構成を制限する選択メカニズムです。`browserName` を使用して Firefox インスタンスを要求した場合、リモートに Firefox がインストールされていないと、あるいは Linux にしか対応していないリモートから macOS を要求すると、期待通りにはいかないかもしれません。しかし、セッションがどの特定のオペレーティングシステムやウェブブラウザーを備えているかは気にせず、単に特定の能力を持つセッションが欲しい場合もあるでしょう。

選択プロセス、すなわち能力ネゴシエーションは、`alwaysMatch` と `firstMatch` を通じて行うのが最適です。

### `alwaysMatch`

その名が示す通り、`alwaysMatch` 能力オブジェクト内で記述される機能は、セッションが要求される機能です。サーバーが要求する機能を提供できない場合、セッションは失敗します。

例えば、Firefox 60 しかインストールされていないシステムで Firefox 62 を要求した場合、セッションの作成に失敗します。

```json
{
  "capabilities": {
    "alwaysMatch": {
      "browserName": "firefox",
      "browserVersion": "60"
    }
  }
}
```

### `firstMatch`

`firstMatch` フィールドは能力オブジェクトの配列を受け付けます。サーバーが提供可能なものと一致するまで順次照合され、一致しない場合は失敗となります。

これは、macOS や Linux 上で動作するが、Windows では動作しないドライバーが必要な場合に有用です。

```json
{
  "capabilities": {
    "firstMatch": [{ "platformName": "macos" }, { "platformName": "linux" }]
  }
}
```

### `alwaysMatch` と `firstMatch` の組み合わせ

`firstMatch` は、もちろん `alwaysMatch` と組み合わせて選択範囲を絞り込むことが可能です。例えば、macOS または Linux 上で動作するドライバーであり、Firefox でなければならない場合などです。

```json
{
  "capabilities": {
    "alwaysMatch": {
      "browserName": "firefox"
    },
    "firstMatch": [{ "platformName": "macos" }, { "platformName": "linux" }]
  }
}
```

先の例は、それぞれの `firstMatch` の分岐に Firefox の要件を記述することと全く同じ意味になります。

```json
{
  "capabilities": {
    "firstMatch": [
      { "browserName": "firefox", "platformName": "macos" },
      { "browserName": "firefox", "platformName": "linux" }
    ]
  }
}
```

どちらの例を選択するかは重要ではありませんが、ブラウザーの構成を引き継ぐ際には考慮すべき点となります。プロファイルなどのデータを不必要に繰り返し送信することを避けるため、`alwaysMatch` を活用し、このデータがネットワーク経由で一度だけ送信されるようにすることをお勧めします。

```json
{
  "capabilities": {
    "alwaysMatch": {
      "browserName": "firefox",
      "moz:firefoxOptions": {
        "profile": "<base64 encoded profile>",
        "args": ["-headless"],
        "prefs": { "dom.ipc.processCount": 8 },
        "log": { "level": "trace" }
      }
    },
    "firstMatch": [{ "platformName": "macos" }, { "platformName": "linux" }]
  }
}
```

## 能力の一覧

- [`browserName`](/ja/docs/Web/WebDriver/Reference/Capabilities/browserName)
- [`browserVersion`](/ja/docs/Web/WebDriver/Reference/Capabilities/browserVersion)
- [`platformName`](/ja/docs/Web/WebDriver/Reference/Capabilities/platformName)
- [`acceptInsecureCerts`](/ja/docs/Web/WebDriver/Reference/Capabilities/acceptInsecureCerts): この能力は、[ナビゲーション](/ja/docs/Web/WebDriver/Reference/Commands/NavigateTo)時に期限切れまたは無効な [TLS 証明書](/ja/docs/Glossary/TLS)をチェックするかどうかを示します。この能力が false の場合、証明書に問題のあるドメインに遭遇すると、[安全でない証明書](/ja/docs/Web/WebDriver/Reference/Errors/InsecureCertificate)のエラーが返されます。そうでない場合、自己署名またはその他の無効な証明書は、ナビゲーション時にブラウザーが暗黙的に信頼します。この能力はセッションの存続期間中有効です。
- [`pageLoadStrategy`](/ja/docs/Web/WebDriver/Reference/Capabilities/pageLoadStrategy)
- [`proxy`](/ja/docs/Web/WebDriver/Reference/Capabilities/proxy)
- [`setWindowRect`](/ja/docs/Web/WebDriver/Reference/Capabilities/setWindowRect)
- [`timeouts`](/ja/docs/Web/WebDriver/Reference/Capabilities/timeouts)
- [`unhandledPromptBehavior`](/ja/docs/Web/WebDriver/Reference/Capabilities/unhandledPromptBehavior)
- [`webSocketUrl`](/ja/docs/Web/WebDriver/Reference/Capabilities/webSocketUrl)

## ベンダー独自の能力

[標準の能力](#能力の一覧)に加え、WebDriver はサードパーティが自身のニーズに合わせて機能セットを拡張することが可能です。ブラウザーのベンダーやドライバーの提供者は通常、ブラウザーへの設定提供のために拡張機能を利用しますが、仲介者による任意の情報の伝達にも使用することが可能です。

- [Firefox の能力](/ja/docs/Web/WebDriver/Reference/Capabilities/firefoxOptions) (`moz:firefoxOptions`)
- [Chrome の能力](/ja/docs/Web/WebDriver/Reference/Capabilities/goog/chromeOptions) (`goog:chromeOptions`)

## 古い能力

Selenium クライアントの多くは、新しいセッションを設定するために `desiredCapabilities` と `requiredCapabilities` を使用します。これらは、前述の `firstMatch` および `alwaysMatch` ととても似ています。一部のドライバーはこれらの古い機能に対応していますが、これらは非推奨となっており、使用を避けるべきです。

古い能力オブジェクトを新しい形式に変換するのは簡単です。まず知っておくべきことは、`alwaysMatch`/`firstMatch` は常に `capabilities` JSON オブジェクト内にラップされているのに対し、`desiredCapabilities`/`requiredCapabilities` は最上位レベルに存在することです。一般的に、これまで `desiredCapabilities` 内に記述されていた内容は、同じ効果を得るために `firstMatch` の枝に記述する必要があります。

この非推奨の能力オブジェクトを見てみましょう。

```json
{ "desiredCapabilities": { "browserName": "firefox" } }
```

これは、新しいスタイルで機能的に同等なものです。

```json
{ "capabilities": { "firstMatch": [{ "browserName": "firefox" }] } }
```

ただし、`firstMatch` の分岐が一つしか存在せず、サーバーに Firefox がインストールされていない場合セッション作成が失敗することは既知であるため、以下の記述と同等となります。

```json
{ "capabilities": { "alwaysMatch": { "browserName": "firefox" } } }
```

## 関連情報

- [New Session](/ja/docs/Web/WebDriver/Reference/Commands/NewSession) コマンド
- [Delete Session](/ja/docs/Web/WebDriver/Reference/Commands/NewSession) コマンド
