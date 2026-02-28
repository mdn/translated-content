---
title: "URLPattern: hasRegExpGroups プロパティ"
short-title: hasRegExpGroups
slug: Web/API/URLPattern/hasRegExpGroups
l10n:
  sourceCommit: bcc977bc3e79a87edd64cd9ef977b515f63daa2c
---

{{APIRef("URL Pattern API")}} {{AvailableInWorkers}}

**`hasRegExpGroups`** は {{domxref("URLPattern")}} インターフェイスの読み取り専用プロパティで、`URLPattern` 要素のいずれかが [正規表現のキャプチャグループ](/ja/docs/Web/JavaScript/Guide/Regular_expressions/Groups_and_backreferences) を含むかどうかを示す論理値です。

`hasRegExpGroups` プロパティを使用すると、正規表現のキャプチャグループを許可しない特定のウェブプラットフォーム API で `URLPattern` オブジェクトが使用可能かどうかを確認できます。例えば、

- `match` ディレクティブは、HTTP の {{HTTPHeader("Use-As-Dictionary")}} ヘッダーにおいて、正規表現のキャプチャグループを禁止します。
- `urlPattern` 条件は、{{domxref("InstallEvent.addRoutes()")}} メソッドを使用して静的ルートを追加する際に適用されます。

## 値

論理値です。

## 例

### `hasRegExpGroups` の使用

次の例では、{{domxref("URLPattern")}} オブジェクトが、名前付きキャプチャグループ "id" と "title" を含むグループ区切り文字と共に使用されています。この場合、`hasRegExpGroups` プロパティは `true` を返します。

```js
const pattern = new URLPattern({ pathname: "/blog/:id(\\d+){-:title}?" });
console.log(pattern.hasRegExpGroups); // true
const result = pattern.exec({ pathname: "/blog/123-some-article" });
console.log(result.pathname.groups); // {id: '123', title: 'some-article'}
```

同様に、無名キャプチャグループでも動作します。

```js
const pattern = new URLPattern({ pathname: "/blog/(\\d+)" });
console.log(pattern.hasRegExpGroups); // true
const result = pattern.exec({ pathname: "/blog/123" });
console.log(result.pathname.groups); // {0: '123'}
```

その他の非キャプチャグループの場合、例えばワイルドカードトークン (`*`) を使用する場合、`hasRegExpGroups` は `false` を返します。

```js
const pattern = new URLPattern({ pathname: "/blog/*" });
console.log(pattern.hasRegExpGroups); // false
const result = pattern.exec({ pathname: "/blog/123" });
console.log(result.pathname.groups); // {0: '123'}
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}
