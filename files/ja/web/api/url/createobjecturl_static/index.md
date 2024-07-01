---
title: "URL: createObjectURL() 静的メソッド"
short-title: createObjectURL()
slug: Web/API/URL/createObjectURL_static
l10n:
  sourceCommit: a0f6bf6f7d148f368f6965255058df1ed1f43839
---

{{APIRef("URL API")}}

**`URL.createObjectURL()`** 静的メソッドは、引数で指定されたオブジェクトを表す URL を含む文字列を生成します。

URL の寿命は、それを作成したウィンドウ内の {{domxref("document")}} と結び付けられています。 新しいオブジェクト URL は、指定された {{domxref("File")}} オブジェクトか {{domxref("Blob")}} オブジェクトを表します。

オブジェクト URL を解放するには、 {{domxref("URL/revokeObjectURL_static", "revokeObjectURL()")}} を呼び出してください。

{{AvailableInWorkers}}

> **メモ:** この機能はメモリーリークを生み出す可能性があるため、[サービスワーカー](/ja/docs/Web/API/Service_Worker_API)内で利用することは*できません*。

## 構文

```js-nolint
URL.createObjectURL(object)
```

### 引数

- `object`
  - : オブジェクト URL を生成するための {{domxref("File")}}, {{domxref("Blob")}}, {{domxref("MediaSource")}} のいずれかのオブジェクトです。

### 返値

`object` で指定された内容を参照するために使用されるオブジェクト URL の入った文字列です。

## 例

[オブジェクト URL で画像を表示](/ja/docs/Web/API/File_API/Using_files_from_web_applications#例_オブジェクト_url_で画像を表示)を参照してください。

## 使用上のメモ

### メモリー管理

すでにオブジェクト URL が生成されている場合でも、 `createObjectURL()` を呼び出す度に、新しいオブジェクト URL が生成されます。 必要がなくなったら {{domxref("URL.revokeObjectURL_static")}} を呼び出して、それぞれを解放してください。

ブラウザーは、文書がアンロードされた際にこれらのオブジェクト URL をメモリから解放します。しかし、性能とメモリ使用を考慮すると、明示的にアンロードできる安全な機会があるならば、そうするべきです。

### メディアストリームのオブジェクト URL の使用

古いバージョンの Media Source 仕様書では、 {{HTMLElement("video")}} 要素にストリームを添付するには {{domxref("MediaStream")}} にオブジェクト URL を生成する必要があるとしてます。 これはもう必要なく、ブラウザーはこのようにする対応を削除してきています。

> **警告:** もし {{domxref("URL/createObjectURL_static", "createObjectURL()")}} でメディア要素にストリームを割り当てるコードが残っているのであれば、単純に {{domxref("HTMLMediaElement.srcObject", "srcObject")}} を直接 `MediaStream` に設定するよう更新する必要があります。

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [ウェブアプリケーションからのファイルの使用](/ja/docs/Web/API/File_API/Using_files_from_web_applications)
- [オブジェクト URL で画像を表示](/ja/docs/Web/API/File_API/Using_files_from_web_applications#例_オブジェクト_url_で画像を表示)
- {{domxref("URL.revokeObjectURL_static")}}
- {{domxref("HTMLMediaElement.srcObject")}}
- {{domxref("FileReader.readAsDataURL()")}}
