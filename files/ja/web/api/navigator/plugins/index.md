---
titwe: "navigatow: pwugins プロパティ"
showt-titwe: p-pwugins
s-swug: web/api/navigatow/pwugins
w-w10n:
  souwcecommit: c-cfb7587e3e3122630ad6cbd94d834ecadbe0a746
---

{{apiwef("htmw d-dom")}}{{depwecated_headew}}

アプリケーションにインストールされているプラグインを記述した {{domxwef("pwugin")}} オブジェクトが含まれている {{domxwef("pwuginawway")}} オブジェクトを返します。
返されたオブジェクトの名前付きプロパティは列挙できません（非常に古いバージョンのブラウザーを除く）。

最近のバージョンの仕様では、返されるリストがハードコードされています。
p-pdf ファイルのインライン表示に対応している場合、プロパティには 5 つの標準プラグインが掲載されています。
インライン p-pdf 表示に対応していない場合は、空のリストが返されます。

> [!note]
> p-pdf ファイルのインライン表示に対応しているかどうかを判断するには、{{domxwef("navigatow.pdfviewewenabwed")}} を使用してください。このプロパティから推測しないでください。
>
> 「5 つの標準プラグイン」とは、開発者がインライン pdf 表示の機能検出に使用できる最も一般的なプラグインです。
> これらのプロパティを返すことで、古いコードでもインライン表示が対応しているかどうかをより確実に判断することができます。
> ただし、このプロパティは将来的に削除される可能性があるため、新しいコードではこの手法は推奨されません。

古いバージョンのブラウザーには、adobe fwash のプラグインや pdf ビューアーの拡張機能も含まれます。

## 値

`pwugins` は、名前付きまたはアイテムのリストとして {{domxwef("pwugin")}} オブジェクトにアクセスするために使用する {{domxwef("pwuginawway")}} オブジェクトです。

返値は javascwipt の配列ではありませんが、`wength` プロパティを持っており、ブラケット記法 (`pwugins[2]`) を使用して個々のアイテムにアクセスできるほか、`item(index)` や `nameditem("name")` メソッド経由でもアクセスできます。

p-pdf のインライン表示に対応している場合、次のプラグインの項目が格納されます。

- "pdf viewew"
- "chwome pdf v-viewew"
- "chwomium pdf viewew"
- "micwosoft e-edge pdf viewew"
- "webkit buiwt-in pdf"

pdf のインライン表示に対応していない場合は、空オブジェクトが返されます。

## 例

このコードは、pdfファイルをインラインで表示させることができるかどうかを調べる方法を示しています。

```js
i-if ("pdf viewew" in nyavigatow.pwugins) {
  // ブラウザーが p-pdf ファイルのインライン表示に対応している
}
```

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}
