---
title: "blob: URL"
short-title: "blob:"
slug: Web/URI/Reference/Schemes/blob
l10n:
  sourceCommit: 44373c3805ba65db7542af75b664dc6fdce2aec0
---

**blob （またはオブジェクト） URL**、すなわち blob: スキームが接頭辞として付いた URL を使用すると、 {{domxref("Blob")}} や {{domxref("MediaSource")}} を、 {{HTMLElement("img")}} 要素など、URL でのみ使用するように設計されている他の API と統合することができます。 blob URL は、ローカルで生成されたデータのダウンロードを開始したり、そのデータに移動したりするためにも使用できます。これらは不透明な識別子として設計されているため（つまり、手書きで記述してはいけません）、 {{domxref("URL.createObjectURL_static", "URL.createObjectURL()")}} や {{domxref("URL.revokeObjectURL_static", "URL.revokeObjectURL()")}} 関数を使用して管理する必要があります。

blob URL は [data URL](/ja/docs/Web/URI/Reference/Schemes/data) とよく似ています。どちらも、メモリー内のリソースを URL として表すことができます。違いは、データ URL はリソースを自身に埋め込み、サイズに厳しい制限があるのに対し、 blob URL はバックエンドの `Blob` または `MediaSource` を必要とし、より大きなリソースを表すことができる点です。

## 構文

```url
blob:<origin>/<uuid>
```

- `blob:`
  - : この URL のスキーム。
- `<origin>`
  - : この URL の作成者の[オリジン](/ja/docs/Web/API/URL/origin)です。作成者のオリジンが不透明な場合、この部分は実装によって定義されます。
- `<uuid>`
  - : {{glossary("UUID")}} です。

## 使用上のメモ

### メモリー管理

`createObjectURL()` を呼び出すたびに、同じオブジェクトに対してすでに URL が作成されている場合でも、新しいオブジェクト URL が作成されます。これらの URL は、必要がなくなった時点で、{{domxref("URL.revokeObjectURL_static", "URL.revokeObjectURL()")}} を呼び出して解放する必要があります。 1 つのオブジェクト URL がアクティブな状態である限り、基盤となるオブジェクトはガベージコレクションの対象とならず、メモリーリークを発生させる可能性があります。

ブラウザーは、文書がアンロードされるとオブジェクトの URL を自動的に解放しますが、パフォーマンスとメモリー使用量を最適化するには、明示的にアンロードできる安全な時点がある場合は、その時点でアンロードすることをお勧めします。

ただし、オブジェクトの URL を早すぎる段階で解放することは避けてください。よくあるアンチパターンは次のとおりです。

```js example-bad
const url = URL.createObjectURL(blob);
img.src = url;
img.addEventListener("load", () => {
  URL.revokeObjectURL(url);
});
document.body.appendChild(img);
```

画像がレンダリングされた直後に blob URL を無効にすると、ユーザーは画像に対して操作（右クリックして画像を保存したり、新しいタブで開いたりなど）を行うことができなくなります。長寿命のアプリケーションでは、ユーザーがリソースにアクセスできなくなった場合（画像が DOM から削除された場合など）にのみ、オブジェクト URL を無効にする必要があります。

### ストレージ分割

blob URL 経由のリソースへのアクセスは、他のすべてのストレージ機構と同じ制限、つまり[状態の分割](/ja/docs/Web/Privacy/Guides/State_Partitioning)の対象となります。 blob URL には、関連付けられた作成元のオリジン（URL 自体に格納される）があり、作成元の環境とストレージキーが一致する環境からのみ取得できます。 blob URL のナビゲーションは、この制限の対象ではありませんが、ブラウザーは、 blob URL へのサイト間ナビゲーションに対して [`noopener`](/ja/docs/Web/HTML/Reference/Attributes/rel/noopener) などのプライバシー保護措置を適用する場合があります。

### メディアストリームにオブジェクト URL を使用

古いバージョンの Media Source 仕様書では、 {{HTMLElement("video")}} 要素にストリームを接続するには、 {{domxref("MediaStream")}} のオブジェクト URL を作成する必要がありました。これはできなくなりました。また、ブラウザーではこの機能の対応が除去されつつあります。

> [!WARNING]
> メディア要素にストリームを添付するために `createObjectURL()` に依存しているコードがまだ存在する場合、コードを更新して、 {{domxref("HTMLMediaElement.srcObject", "srcObject")}} を `MediaStream` に直接設定する必要があります。

## 例

### 有効な blob URL

```url
blob:https://example.org/40a5fb5a-d56d-4a33-b4e2-0acf6a8e5f64
```

### blob URL の作成

この例では、まず {{domxref("Blob")}} を {{HTMLElement("canvas")}} から作成し、それに　blob URL を作成し、最後にその URL を {{HTMLElement("img")}} 要素に添付します。

```js
const canvas = document.querySelector("canvas");
canvas.toBlob((blob) => {
  const img = document.createElement("img");
  img.src = URL.createObjectURL(blob);
  document.body.appendChild(img);
});
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [ウェブアプリケーションからのファイルの使い方](/ja/docs/Web/API/File_API/Using_files_from_web_applications)
- [画像を表示するためのオブジェクト URL の使い方](/ja/docs/Web/API/File_API/Using_files_from_web_applications#example_using_object_urls_to_display_images)
- {{domxref("URL.createObjectURL_static", "URL.createObjectURL()")}}
- {{domxref("URL.revokeObjectURL_static", "URL.revokeObjectURL()")}}
- [IANA リストの URI スキーム](https://www.iana.org/assignments/uri-schemes/uri-schemes.xhtml)（英語）
