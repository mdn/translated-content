---
title: URI パス
short-title: パス
slug: Web/URI/Reference/Path
l10n:
  sourceCommit: ab279632b84d201ae9ddd3db3981bf0b01573371
---

URI の**パス**は、[オーソリティ](/ja/docs/Web/URI/Reference/Authority)の後に続く部分です。
これには通常、階層形式で編成されたデータが含まれており、URI の[スキーム](/ja/docs/Web/URI/Reference/Schemes)および命名オーソリティの範囲内でリソースを識別します。

## 構文

```url
http://example.com:80<path>
urn:<path>
```

パスにはほぼすべての文字を含めることができますが、`?` と `#` （それぞれ[クエリー](/ja/docs/Web/URI/Reference/Query)と[フラグメント](/ja/docs/Web/URI/Reference/Fragment)を開始する文字）、および URI スキームによって予約されているその他の文字を含めることはできません。一部のスキーム（階層型スキームとして知られている）では、パスをスラッシュ (`/`) 文字で区切られた一連の区間としてさらに構文解析します。それ以外にも、パスを単一の不透明な文字列として扱うものもあります。

## 解説

パスはオーソリティに従い、最初の疑問符 (`?`)、数値記号 (`#`)、または URI の終わりで終了します。
次の 2 つの URI を例にとって説明します。

```url
urn:nbn:de:bvb:19-epub-5359-3
https://example.com:80/images/animated/ayse.gif
```

`nbn:de:bvb:19-epub-5359-3` は [URN](/ja/docs/Web/URI/Reference/Schemes/urn) のパスです。`/images/animated/ayse.gif` は `https` URI のパスです。

すべての URI にはパス要素が存在します。つまり、次の例では、最初の URL のパスはスラッシュ (`/`) で、2 つ目の URL のパスは空です。

```url
https://example.com/
https://example.com
```

ブラウザーは、{{domxref("URL")}} ウェブ API を含め、空のパスを `/` に正規化します。

## 仕様書

{{Specifications}}

## 関連情報

- [URI](/ja/docs/Web/URI)
