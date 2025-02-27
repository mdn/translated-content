---
title: "Navigator: deprecatedReplaceInURN() メソッド"
short-title: deprecatedReplaceInURN()
slug: Web/API/Navigator/deprecatedReplaceInURN
l10n:
  sourceCommit: f2088b8912ef205a737551441d54b73507bd3ac6
---

{{APIRef("Fenced Frame API")}}{{seecompattable}}

**`deprecatedReplaceInURN()`** は {{domxref("Navigator")}} インターフェイスのメソッドで、指定された不透明 URN または `FencedFrameConfig` の内部 `url` プロパティに対応する割り当てられた URL 内の指定された文字列を置換します。

`FencedFrameConfig`または不透明なURNは、[Protected Audience API](https://developers.google.com/privacy-sandbox/relevance/protected-audience)の`runAdAuction()`メソッドなどのソースから返され、{{domxref("HTMLFencedFrameElement.config")}} の値として設定します。`FencedFrameConfig` または不明な URN に関連付けられたコンテンツ URL は、ブラウザーに割り当てられたものとして内部的にマッピングされ、JavaScript でアクセスすることはできません。

しかし、その内部 URL の一部を置き換えることができる場合があります。これは、広告クリエイティブにレンダリングで使用する実行時データを渡す一般的な手法です。 `deprecatedReplaceInURN()` は、フェンス付きフレーム URL の置換を可能にする一時的な措置として利用できるようになりました。これにより、広告技術プロバイダーが既存の実装を[プライバシーサンドボックス](https://developers.google.com/privacy-sandbox) API に移行するのに役立ちます。

## 構文

```js-nolint
deprecatedReplaceInURN(UrnOrConfig, replacements)
```

### 引数

- `UrnOrConfig`
  - : 対応する内部 URL の一部を置換したい `FencedFrameConfig` オブジェクトまたは不透明な URN。
- `replacements`
  - : 内部 URL で置き換えたい内容を表す 1 つ以上のプロパティを持つオブジェクトです。それぞれのプロパティキーは、置き換えたい URL の一部、それぞれのプロパティ値は置き換え後の文字列です。以下の点に注意してください。
    - 置き換える URL の一部は、以下のいずれかの形式に従う必要があります。
      - `${string}`
      - `%%string%%`
    - URL の一部が正しい形式で記述されているものの、その部分が URL から探し出せない場合、返されたプロミスは履行されますが、置換は行われません。

### 返値

{{jsxref("undefined")}} で履行されるプロミス ({{jsxref("Promise")}}) です。

### 例外

- `TypeError` {{domxref("DOMException")}}
  - : 次の場合に発生します。
    - `UrnOrConfig` は有効な `FencedFrameConfig` オブジェクトまたは不明な URN ではない場合。
    - 指定した交換キーのいずれも、許可された形式と一致しない場合。

## 例

次の呼び出しを使用して、不透明な URN を返すことができます。

```js
const exampleURN = await navigator.runAdAuction({
  ...auctionConfig,
  resolveToConfig: false,
});
```

次のように `deprecatedReplaceInURN()` を呼び出すことで、URL の一部を置き換えることができます。

```js
await navigator.deprecatedReplaceInURN(exampleURN, {
  "${foo}": "1",
  "${bar}": "2",
  "%%baz%%": "3",
});
```

URN に結び付けられた内部 URL が最初は次のようになっていた場合、

```http
https://example.com/a=${foo}&b=${bar}&c=%%baz%%
```

置換の後は次のようになります。

```http
https://example.com/a=1&b=2&c=3
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [フェンス付きフレーム API](/ja/docs/Web/API/Fenced_frame_API)
