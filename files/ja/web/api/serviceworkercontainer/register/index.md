---
title: ServiceWorkerContainer.register()
slug: Web/API/ServiceWorkerContainer/register
---

{{APIRef("Service Workers API")}}

{{domxref("ServiceWorkerContainer")}} インターフェイスの **`register()`** メソッドは、所与の `scriptURL` の {{domxref("ServiceWorkerRegistration")}} を作成または更新します。

成功した場合、サービスワーカー登録は、提供されたスクリプト URL（`scriptURL`）を*スコープ*（`scope`）に結び付け、その後スコープをナビゲーションでの照合に使用します。 このメソッドは、制御されたページから無条件に呼び出すことができます。 つまり、アクティブな登録があるかどうかを最初に確認する必要はありません。

*スコープ*の意味と使用法についてはしばしば混乱があります。 サービスワーカーは自身の場所よりも広いスコープを持つことはできないため、デフォルトよりも狭いスコープが必要な場合にのみ、`scope` オプションを使用してください。

## 構文

```js
serviceWorkerContainer.register(scriptURL, options)
  .then(function(serviceWorkerRegistration) { ... });
```

### 引数

- `scriptURL`
  - : サービスワーカースクリプトの URL。 登録されたサービスワーカーファイルには、有効な [JavaScript の MIME タイプ](/ja/docs/Web/HTTP/Basics_of_HTTP/MIME_types#textjavascript)が必要です。
- `options` {{optional_inline}}

  - : 登録オプションを含むオブジェクト。 現在利用可能なオプションは次のとおりです。

    - `scope`: サービスワーカーの登録スコープを定義する URL を表す {{domxref("USVString")}}。 つまり、サービスワーカーが制御できる URL の範囲です。 これは通常、相対 URL です。 これは、アプリケーションのベース URL を基準にしています。 デフォルトでは、サービスワーカー登録の `scope` 値は、サービスワーカースクリプトが配置されているディレクトリになります。 動作の詳細については、[例](#Examples)のセクションを参照してください。

### 返値

{{domxref("ServiceWorkerRegistration")}} オブジェクトで解決する {{jsxref("Promise")}}。

## 例

ここで説明する例は、サービスワーカーのスコープがページにどのように適用されるかをよりよく理解するために、まとめて理解する必要があります。

次の例では、`scope`（を省略した場合）のデフォルト値を使用しています。 この場合、サービスワーカーは `example.com/index.html` とその下のページ（`example.com/product/description.html` など）を制御します。

```js
if ('serviceWorker' in navigator) {
  // デフォルトのスコープを使用して、
  // サイトのルートでホストされるサービスワーカーを登録します。
  navigator.serviceWorker.register('/sw.js').then(function(registration) {
    console.log('サービスワーカー登録成功:', registration);
  }, /*catch*/ function(error) {
    console.log('サービスワーカー登録失敗:', error);
  });
} else {
  console.log('サービスワーカーをサポートしていません。');
}
```

次のコードは、サイトのルートにあるページに含まれている場合、上記の例とまったく同じページに適用されます。 スコープが含まれている場合は、ページの場所をベースとして使用することに注意してください。 あるいは、このコードが `example.com/product/description.html` のページに含まれている場合、`'./'` のスコープは、サービスワーカーが `example.com/product` の下のリソースにのみ適用されることを意味します。 `example.com` のすべてに適用されるサービスワーカーを `example.com/product/description.html` で登録する必要がある場合は、上記のようにスコープを省略します。

```js
if ('serviceWorker' in navigator) {
  // より限定的なスコープを使用して、
  // サイトのルートでホストされるサービスワーカーを登録します。
  navigator.serviceWorker.register('/sw.js', {scope: './'}).then(function(registration) {
    console.log('サービスワーカー登録成功:', registration);
  }, /*catch*/ function(error) {
    console.log('サービスワーカー登録失敗:', error);
  });
} else {
  console.log('サービスワーカーをサポートしていません。');
}
```

## 仕様

| 仕様                                                                                                                                             | 状態                                 | コメント |
| ------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------ | -------- |
| {{SpecName('Service Workers', '#dom-serviceworkercontainer-register', 'ServiceWorkerContainer: register')}} | {{Spec2('Service Workers')}} | 初期定義 |

## ブラウザーの互換性

{{Compat("api.ServiceWorkerContainer.register")}}
