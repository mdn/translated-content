---
title: "ServiceWorkerContainer: register() メソッド"
short-title: register()
slug: Web/API/ServiceWorkerContainer/register
l10n:
  sourceCommit: f8ef875113a7d3e9952f41de68be1e3a3a1e6988
---

{{APIRef("Service Workers API")}}{{SecureContext_Header}}{{AvailableInWorkers}}

> [!WARNING]
> このメソッドに渡される `scriptURL` 引数は、サービスワーカーに読み込まれる外部スクリプトの URL を表します。
> この API は[インジェクションシンク](/ja/docs/Web/API/Trusted_Types_API#concepts_and_usage)と呼ばれ、[クロスサイトスクリプティング (XSS)](/ja/docs/Web/Security/Attacks/XSS) 攻撃の攻撃経路となる可能性があります。
>
> このリスクを軽減するには、スクリプトの読み込み元を制限する[コンテンツセキュリティポリシー (CSP)](/ja/docs/Web/HTTP/Guides/CSP) を設定し、文字列の代わりに常に{{domxref("TrustedScriptURL")}}オブジェクトを代入することで、 [信頼型を強制適用する](/ja/docs/Web/API/Trusted_Types_API#using_a_csp_to_enforce_trusted_types)ことで、このリスクを軽減できます。
> 情報については、[セキュリティの注意事項](#セキュリティの注意事項)をご覧ください。

**`register()`** は {{domxref("ServiceWorkerContainer")}} インターフェイスのメソッドで、与えられたスコープの {{domxref("ServiceWorkerRegistration")}} を作成または更新します。

## 構文

```js-nolint
register(scriptURL)
register(scriptURL, options)
```

### 引数

- `scriptURL`
  - : サービスワーカースクリプトの URL を定義する、{{domxref("TrustedScriptURL")}} インスタンスまたは文字列です。
    登録されたサービスワーカーファイルには、有効な [JavaScript の MIME タイプ](/ja/docs/Web/HTTP/Guides/MIME_types#textjavascript)が必要です。
- `options` {{optional_inline}}
  - : 登録オプションを含むオブジェクト。 現在利用可能なオプションは次のとおりです。
    - `scope`
      - : 文字列で、サービスワーカーの登録スコープを定義する URL を表します。 つまり、サービスワーカーが制御できる URL の範囲です。
        この登録コードは通常、サイトのベース URL に対する相対パス（例: `/some/path/`）として指定されます。これにより、登録コードがどのページから呼び出されたかに関わらず、解決されるスコープが同一になります。
        サービスワーカー登録のデフォルトの `scope` は、サービスワーカースクリプトが配置されているディレクトリーです（ `./` を `scriptURL` に対して解決します）。
        このスコープは、サービスワーカーと同じディレクトリー内、またはそれより深く入れ子になったディレクトリーにある文書を指定するために使用します。
        より広いスコープが必要な場合は、HTTP の {{HTTPHeader("Service-Worker-Allowed")}} ヘッダーを使用して許可することができます。
        サービスワーカーのデフォルトのスコープを広げる方法については、[例](#例) の節をご覧ください。

    - `type`
      - : 文字列で、作成するワーカーの種類を指定します。
        有効な値は次の通りです。
        - `'classic'`
          - : 読み込んだサービスワーカーは、標準のスクリプトの中にあります。これはデフォルト値です。
        - `'module'`
          - : 読み込まれたサービスワーカーは、 [ES モジュール](/ja/docs/Web/JavaScript/Guide/Modules)にあり、 import 文は、ワーカーのコンテキストで利用できます。
            ES モジュールとの互換性については、[`ServiceWorker` インターフェイスのブラウザー互換性データ表](/ja/docs/Web/API/ServiceWorker#ブラウザーの互換性)をご覧ください。

    - `updateViaCache`
      - : 文字列で、更新時にサービスワーカースクリプトのリソースに HTTP キャッシュを使用する方法を示します。
        メモ: これはサービスワーカースクリプトとそのインポートのみを参照し、これらのスクリプトによってフェッチされた他のリソースは参照しません。
        - `'all'`
          - : HTTP キャッシュは、メインスクリプトとインポートされたすべてのスクリプトについて照会されます。 HTTP キャッシュに新しいエントリーが見つからなかった場合、スクリプトはネットワークからフェッチされます。
        - `'imports'`
          - : HTTP キャッシュはインポート用に照会されますが、メインスクリプトは常にネットワークから更新されます。 HTTP キャッシュにインポート用の新しいエントリーが見つからなかった場合、ネットワークからフェッチされます。
        - `'none'`
          - : HTTP キャッシュは、メインスクリプトとそのインポートには使用されません。すべてのサービスワーカースクリプトリソースは、ネットワークから更新されます。

### 返値

{{domxref("ServiceWorkerRegistration")}} オブジェクトで解決するプロミス ({{jsxref("Promise")}}) です。

### 例外

- `TypeError`
  - : `scriptURL` または `scope URL` が失敗しています。
    これは、URL が有効な URL に解決できない場合や、`http:` または `https` 以外のスキームが使用されている場合に発生する可能性があります。
    同時に、`scriptURL` が {{domxref("TrustedScriptURL")}} でない場合にも現れることがあります。これは、サイトの[信頼型ポリシー](/ja/docs/Web/API/Trusted_Types_API)の要件となっています。

    また、`scriptURL` または `scope URL` のパスに、大文字と小文字を区別しない ASCII 文字 "%2f" (`*`) または "%5c" (`=`) が含まれている場合にも、この例外が発生します。

- `SecurityError` {{domxref("DOMException")}}
  - : `scriptURL` は、`localhost` や `https` URL のような、信頼できる可能性のあるオリジンではありません。
    `scriptURL` とスコープは、登録元のページと同一オリジンではありません。

## 解説

**`register()`** メソッドは、指定されたスコープに対して {{domxref("ServiceWorkerRegistration")}} を生成または更新します。
成功した場合、この登録により、指定されたスクリプトの URL が _scope_ に関連付けられ、その後、文書を特定のサービスワーカーに照合するために使用されます。

それぞれの一意のスコープごとに、単一の登録が生成されます。
既存の登録があるスコープに対して `register()` が呼び出された場合、scriptURL やオプションに変更があれば、その登録が更新されます。
変更がない場合は、既存の登録が返されます。
同じスコープと `scriptURL` で `register()` を呼び出しても、インストールプロセスは再実行されません。そのため、管理されたページから無条件にこのメソッドを呼び出しても、一般的に安全です。
ただし、サービスワーカーのスクリプトを取得するためにネットワークリクエストが送信されるため、サーバーへの負荷が増加する可能性があります。
これが懸念される場合は、まず {{domxref("ServiceWorkerContainer.getRegistration()")}} を使用して、既存の登録があるかどうかを調べてください。

1 つの文書は、異なるサービスワーカーやオプションを持つ複数の登録の対象となる可能性があります。
ブラウザーは、その文書に対して、最も狭いスコープを持つ一致する登録を関連付けます。
これにより、1 つの文書につき1つのサービスワーカーのみが実行されることが保証されます。

> [!NOTE]
> 一般的に、スコープが重複する登録を定義しない方が安全です。

### セキュリティの注意事項

`scriptURL` 引数は、サービスワーカー用のスクリプトを指定します。サービスワーカーは、そのスコープ内のページに対するネットワークリクエストに介入し、最新か、キャッシュされたか、新しいか、変更済みのレスポンスを返すことができます。
この値がユーザーによって指定された場合、[クロスサイトスクリプティング (XSS)](/ja/docs/Web/Security/Attacks/XSS) 攻撃の攻撃経路となる可能性があります。

信頼できないオリジンから任意のURLを受け入れて実行することは、極めて危険です。
ウェブサイトは、[コンテンツセキュリティポリシー (CSP)](/ja/docs/Web/HTTP/Guides/CSP) を使用し、[`worker-src`](/ja/docs/Web/HTTP/Reference/Headers/Content-Security-Policy/worker-src) ディレクティブ（または [`script-src`](/ja/docs/Web/HTTP/Reference/Headers/Content-Security-Policy/script-src) または [`default-src`](/ja/docs/Web/HTTP/Reference/Headers/Content-Security-Policy/default-src) で定義された代替手段）を使用して、実行を許可するスクリプトを制御する必要があります。
これにより、スクリプトを現在のオリジン、特定のオリジンの組み合わせ、特定のファイルに限定することができます。

このプロパティを使用し、[信頼型を強制する](/ja/docs/Web/API/Trusted_Types_API#using_a_csp_to_enforce_trusted_types) （[`require-trusted-types-for`](/ja/docs/Web/HTTP/Reference/Headers/Content-Security-Policy/require-trusted-types-for) CSP ディレクティブを使用する場合）、文字列ではなく、常に {{domxref("TrustedScriptURL")}} オブジェクトを割り当てる必要があります。
これにより、入力が変換関数を通過することを確実にし、URL が挿入される前に拒否または変更される可能性があります。

## 例

下記の例は、サービスワーカーのスコープがページにどのように適用されるかを理解するために、併せて読んでおいてください。

なお、最初の例では、信頼型を使用してこのメソッドを使用する方法を示しています。
それ以外の例では、簡潔にするためにこの手順を除外しています。

### TrustedScriptURL の使用

XSS のリスクを軽減するためには、常に `TrustedScriptURL` インスタンスを `scriptURL` 引数に代入する必要があります。
また、他の理由で信頼型を強制している場合でも、許可されたスクリプトソース（`CSP: worker-src` によって許可されたもの）を一部許可したい場合は、同様の対応が必要です。

信頼型は、まだすべてのブラウザーで対応しているわけではありません。そこで、まず[信頼型 Tinyfill](/ja/docs/Web/API/Trusted_Types_API#trusted_types_tinyfill) を定義します。
これは、信頼型の JavaScript API を透過的に置き換える役割を果たします。

```js
if (typeof trustedTypes === "undefined")
  trustedTypes = { createPolicy: (n, rules) => rules };
```

次に、{{domxref("TrustedTypePolicy")}} を作成し、{{domxref("TrustedTypePolicy/createScriptURL", "createScriptURL()")}} メソッドを定義して、入力文字列を {{domxref("TrustedScriptURL")}} インスタンスに変換できるようにします。

この例では、`scriptAllowList` 配列に事前定義された URL の組み合わせのみを許可し、それ以外のスクリプトはすべてログ出力すると想定します。

```js
const scriptAllowList = [
  // 許可される URL のリスト
];
const policy = trustedTypes.createPolicy("script-url-policy", {
  createScriptURL(input) {
    if (scriptAllowList.includes(input)) {
      return input; // スクリプトを許可
    }
    console.log(`スクリプトが scriptAllowList にありません: ${input}`);
    return ""; // スクリプトをブロック
  },
});
```

次に、`policy` オブジェクトを使用して、安全性が保証されていない可能性のある入力文字列から `TrustedScriptURL` オブジェクトを作成します。

```js
// 悪意のある可能性のある文字列
// untrustedScript は scriptAllowList 配列には入れていない
const untrustedScript = "https://evil.example.com/service_worker.js";

// ポリシーを使用して TrustedScriptURL インスタンスを作成
const trustedScriptURL = policy.createScriptURL(untrustedScript);
```

これで、`TrustedScriptURL` オブジェクトを `register()` に渡すことができます。

```js
navigator.serviceWorker.register(trustedScriptURL);
```

### デフォルトスコープでサービスワーカーを登録する

次の例では、`scope` を省略することでデフォルト値を使用しています。これにより、スクリプトの URL と同じ場所が設定されます。

サービスワーカーのコードが `example.com/sw.js` にあり、登録コードが `example.com/index.html` にあると仮定します。
サービスワーカーのコードは、`example.com/index.html` だけでなく、`example.com/product/description.html` のようなその下位にあるページもコントロールします。

```js
if ("serviceWorker" in navigator) {
  // デフォルトのスコープを使用して、
  // サイトのルートでホストされるサービスワーカーを登録します。
  navigator.serviceWorker.register("/sw.js").then(
    (registration) => {
      console.log("サービスワーカー登録成功:", registration);
    },
    (error) => {
      console.error(`サービスワーカー登録失敗: ${error}`);
    },
  );
} else {
  console.error("サービスワーカーに対応していません。");
}
```

なお、`scriptURL` は現在のページではなく、サイトのルートディレクトリを基準として指定されている点にご注意ください。
これにより、どのページからでも同じ登録コードを使用することができるようになります。

### 明示的なデフォルトスコープでサービスワーカーを登録する

下記コードは、`{ scope: "/" }` を使用してスコープを明示的に指定された点を除けば、ほぼ同じです。
スコープをサイト相対として指定したため、サイト内のどこからでも同じ登録コードを使用できます。

```js
if ("serviceWorker" in navigator) {
  // スコープを手動で宣言
  navigator.serviceWorker.register("./sw.js", { scope: "/" }).then(
    (registration) => {
      console.log("サービスワーカー登録成功:", registration);
    },
    (error) => {
      console.error(`サービスワーカー登録失敗: ${error}`);
    },
  );
} else {
  console.error("サービスワーカーに対応していません。");
}
```

このスコープはデフォルトのスコープと同じであるため、この登録は前回の例とまったく同じページに適用されます。
なお、このコードを前回の例の後に実行した場合、ブラウザーは新しい登録ではなく既存の登録を更新していると認識するはずです。

### ページ相対URLを使用してサービスワーカーを登録する

ページ相対 URL を使用することを妨げるものは何もありませんが、ページを移動しにくくなるほか、誤って不要な登録を作成してしまう可能性が高くなります。

この例では、サービスワーカーのコードは `example.com/product/sw.js` にあり、登録コードは `example.com/product/description.html` にあります。
`scriptURL`と`scope`には、現在のディレクトリーを基準とした相対URLを使用しています。ここで、現在のディレクトリーとは、`register()`を呼び出しているページのベースURL（`example.com/product/`）を指します。
サービスワーカーは、`example.com/product/`以下のリソースに適用されます。

```js
if ("serviceWorker" in navigator) {
  // スコープを手動で宣言
  navigator.serviceWorker.register("./sw.js", { scope: "./" }).then(
    (registration) => {
      console.log("サービスワーカー登録成功:", registration);
    },
    (error) => {
      console.error(`サービスワーカー登録失敗: ${error}`);
    },
  );
} else {
  console.error("サービスワーカーに対応していません。");
}
```

### Service-Worker-Allowed を使用してサービスワーカーの適用範囲を拡大する

_scope_ の意味と使用方法について、しばしば混乱があります。サービスワーカーは自分自身のロケーションよりも広いスコープを保有することはできないので、 `scope` オプションはデフォルトより狭いスコープが必要なときのみ使用してください。

以下のコードは、サイトのルートにある `example.com/index.html` に記載した場合、 `example.com/product` 以下のリソースにのみ適用されます。

```js
if ("serviceWorker" in navigator) {
  // スコープを手動で宣言
  navigator.serviceWorker.register("./sw.js", { scope: "/product/" }).then(
    (registration) => {
      console.log("サービスワーカー登録成功:", registration);
    },
    (error) => {
      console.error(`サービスワーカー登録失敗: ${error}`);
    },
  );
} else {
  console.error("サービスワーカーに対応していません。");
}
```

以上のように、サーバーはサービスワーカーのスクリプトに `Service-Worker-Allowed` ヘッダーを設定することで、デフォルトのスコープを変更することができます。
これにより、サービスワーカーの配置先で定義されたパス以外の場所でも、`scope` オプションを設定できるようになります。

以下のコードを `example.com/product/index.html` に記述した場合、サーバーが `sw.js` を配信する際に `Service-Worker-Allowed` ヘッダーを `/` または `https://example.com/` に設定していれば、`example.com` 配下のすべてのリソースに適用されます。サーバーがこのヘッダーを設定していない場合、リクエストされた `scope` の範囲が広すぎるため、サービスワーカーの登録は失敗します。

```js
if ("serviceWorker" in navigator) {
  // 適用範囲の拡大を宣言
  navigator.serviceWorker.register("./sw.js", { scope: "/" }).then(
    (registration) => {
      // Service-Worker-Allowed ヘッダーによって、サービスワーカースクリプトの
      // 最大スコープが拡大されていたため、登録に成功
      console.log("サービスワーカー登録成功:", registration);
    },
    (error) => {
      // Service-Worker-Allowed ヘッダーが適用範囲を拡大しない場合に発生
      console.error(`サービスワーカー登録失敗: ${error}`);
    },
  );
} else {
  console.error("サービスワーカーに対応していません。");
}
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [ServiceWorkerRegistration: `unregister()` メソッド](/ja/docs/Web/API/ServiceWorkerRegistration/unregister)
- [サービスワーカー API](/ja/docs/Web/API/Service_Worker_API)
- [サービスワーカーの使用](/ja/docs/Web/API/Service_Worker_API/Using_Service_Workers)
- HTTP の {{HTTPHeader("Service-Worker-Allowed")}} ヘッダー
