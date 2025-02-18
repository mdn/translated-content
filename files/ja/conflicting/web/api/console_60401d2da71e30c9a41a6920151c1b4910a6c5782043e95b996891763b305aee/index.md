---
title: "Window: console プロパティ"
short-title: console
slug: conflicting/Web/API/console_60401d2da71e30c9a41a6920151c1b4910a6c5782043e95b996891763b305aee
original_slug: Web/API/Window/console
l10n:
  sourceCommit: cc070123f72376faec06e36622c4fc723a75325f
---

{{APIRef}}

**`Window.console`** プロパティは、ブラウザーのコンソールへ情報を出力するメソッドを提供する {{domxref("console")}} オブジェクトへの参照を返します。これらのメソッドで出力される情報はデバッグ目的のものであり、ユーザーへ情報を提示するために使われるべきではありません。

## 例

### コンソールへの出力

一つ目の例はテキストをコンソールに出力します。

```js
console.log("An error occurred while loading the content");
```

次の例では開閉ウィジェットによって要素が展開可能な状態でオブジェクトをコンソールに出力します。

```js
console.dir(someObject);
```

より詳細な例については [`console`](/ja/docs/Web/API/console) の記事内の[例](/ja/docs/Web/API/console#%E4%BE%8B)をご参照ください。

## 仕様書

{{Specifications}}

> [!NOTE]
> 現在はブラウザー間で多くの実装の違いがありますが、それらを統合して互いの一貫性を高める作業が進められています。
