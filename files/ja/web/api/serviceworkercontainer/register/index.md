---
title: ServiceWorkerContainer.register()
slug: Web/API/ServiceWorkerContainer/register
l10n:
  sourceCommit: 16e398809d62247dbadc89ff4024a0ffa4781f0e
---

{{APIRef("Service Workers API")}}

**`register()`** は {{domxref("ServiceWorkerContainer")}} インターフェイスのメソッドで、所与の `scriptURL` の {{domxref("ServiceWorkerRegistration")}} を作成または更新します。

成功した場合、サービスワーカー登録は、提供されたスクリプト URL (`scriptURL`) を*スコープ* (`scope`) に結び付け、その後スコープをナビゲーションでの照合に使用します。 このメソッドは、制御されたページから無条件に呼び出すことができます。 つまり、アクティブな登録があるかどうかを最初に確認する必要はありません。

*スコープ*の意味と使用法についてはしばしば混乱があります。 サービスワーカーは自身の場所よりも広いスコープを持つことはできないため、既定よりも狭いスコープが必要な場合にのみ、`scope` オプションを使用してください。

## 構文

```js-nolint
register(scriptURL)
register(scriptURL, options)
```

### 引数

- `scriptURL`
  - : サービスワーカースクリプトの URL。 登録されたサービスワーカーファイルには、有効な [JavaScript の MIME タイプ](/ja/docs/Web/HTTP/Basics_of_HTTP/MIME_types#textjavascript)が必要です。
- `options` {{optional_inline}}

  - : 登録オプションを含むオブジェクト。 現在利用可能なオプションは次のとおりです。

    - `scope`
      - : 文字列で、サービスワーカーの登録スコープを定義する URL を表します。 つまり、サービスワーカーが制御できる URL の範囲です。 これは通常、相対 URL です。 これは、アプリケーションのベース URL を基準にしています。 既定では、サービスワーカー登録の `scope` 値は、サービスワーカースクリプトが配置されているディレクトリーになります。 動作の詳細については、[例](#例)の節を参照してください。
    - `type`

      - : 文字列で、作成するワーカーの種類を指定します。有効な値は次の通りです。

        - `'classic'`
          - : 読み込んだサービスワーカーは、標準のスクリプトの中にあります。これは既定値です。
        - `'module'`
          - : 読み込まれたサービスワーカーは、 [ES モジュール](/ja/docs/Web/JavaScript/Guide/Modules)にあり、 import 文は、ワーカーのコンテキストで利用できます。

    - `updateViaCache`

      - : 文字列で、更新時にサービスワーカースクリプトのリソースに HTTP キャッシュを使用する方法を示します。メモ: これはサービスワーカースクリプトとそのインポートのみを参照し、これらのスクリプトによってフェッチされた他のリソースは参照しません。

        - `'all'`
          - : HTTP キャッシュは、メインスクリプトとインポートされたすべてのスクリプトについて照会されます。 HTTP キャッシュに新しいエントリーが見つからなかった場合、スクリプトはネットワークからフェッチされます。
        - `'imports'`
          - : HTTP キャッシュはインポート用に照会されますが、メインスクリプトは常にネットワークから更新されます。 HTTP キャッシュにインポート用の新しいエントリーが見つからなかった場合、ネットワークからフェッチされます。
        - `'none'`
          - : HTTP キャッシュは、メインスクリプトとそのインポートには使用されません。すべてのサービスワーカースクリプトリソースは、ネットワークから更新されます。

### 返値

{{domxref("ServiceWorkerRegistration")}} オブジェクトで解決する {{jsxref("Promise")}}。

## 例

ここで説明する例は、サービスワーカーのスコープがページにどのように適用されるかをよりよく理解するために、まとめて理解する必要があります。

次の例では、`scope`（を省略した場合）の既定値を使用しています。 この場合、サービスワーカーは `example.com/index.html` とその下のページ（`example.com/product/description.html` など）を制御します。

```js
if ("serviceWorker" in navigator) {
  // 既定のスコープを使用して、
  // サイトのルートでホストされるサービスワーカーを登録します。
  navigator.serviceWorker.register("/sw.js").then(
    (registration) => {
      console.log("サービスワーカー登録成功:", registration);
    },
    /*catch*/ (error) => {
      console.error(`サービスワーカー登録失敗: ${error}`);
    },
  );
} else {
  console.error("サービスワーカーに対応していません。");
}
```

次のコードは、 `example.com/index.html` に含まれている場合、上記の例とまったく同じページに適用されます。 スコープが含まれている場合は、ページの場所をベースとして使用することに注意してください。

あるいは、このコードが `example.com/product/description.html` のページに含まれている場合、`'./'` のスコープは、サービスワーカーが `example.com/product` の下のリソースにのみ適用されることを意味します。

```js
if ("serviceWorker" in navigator) {
  // スコープを手動で宣言
  navigator.serviceWorker.register("/sw.js", { scope: "./" }).then(
    (registration) => {
      console.log("サービスワーカー登録成功:", registration);
    },
    /*catch*/ (error) => {
      console.error(`サービスワーカー登録失敗: ${error}`);
    },
  );
} else {
  console.error("サービスワーカーをサポートしていません。");
}
```

_scope_ の意味と使用方法について、しばしば混乱があります。サービスワーカーは自分自身のロケーションよりも広いスコープを保有することはできないので、 `scope` オプションは既定より狭いスコープが必要なときのみ使用してください。

以下のコードは、サイトのルートにある `example.com/index.html` に記載した場合、 `example.com/product` 以下のリソースにのみ適用されます。

```js
if ("serviceWorker" in navigator) {
  // スコープを手動で宣言
  navigator.serviceWorker.register("/sw.js", { scope: "/product/" }).then(
    (registration) => {
      console.log("サービスワーカー登録成功:", registration);
    },
    /*catch*/ (error) => {
      console.error(`サービスワーカー登録失敗: ${error}`);
    },
  );
} else {
  console.error("サービスワーカーをサポートしていません。");
}
```

しかし、サーバーは、サービスワーカー スクリプトに [Service-Worker-Allowed](https://w3c.github.io/ServiceWorker/#service-worker-allowed) ヘッダーを設定することで、この制限を取り除くことができ、そのサービスワーカーの最大スコープをサービスワーカーの位置より上に指定することができます。

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}
