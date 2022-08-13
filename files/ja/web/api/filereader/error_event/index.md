---
title: 'FileReader: error イベント'
slug: Web/API/FileReader/error_event
tags:
  - API
  - Error
  - Event
  - FileReader
  - ProgressEvent
  - Reference
  - Web
  - onerror
  - イベント
translation_of: Web/API/FileReader/error_event
---
{{APIRef}}

`error` イベントは、エラーによって読み取りが失敗したとき (例えば、ファイルが見つからなかった場合や読み取り可能ではなかった場合) に発生します。

| バブリング                   | なし                                         |
| ---------------------------- | -------------------------------------------- |
| キャンセル可能               | いいえ                                       |
| インターフェイス             | {{domxref("ProgressEvent")}}         |
| イベントハンドラープロパティ | {{domxref("FileReader.onerror")}} |

## 例

```js
const fileInput = document.querySelector('input[type="file"]');
const reader = new FileReader();

function handleSelected(e) {
    const selectedFile = fileInput.files[0];
    if (selectedFile) {

        reader.addEventListener('error', () => {
            console.error(`Error occurred reading file: ${selectedFile.name}`);
        });

        reader.addEventListener('load', () => {
            console.error(`File: ${selectedFile.name} read successfully`);
        });

        reader.readAsDataURL(selectedFile);
    }
}

fileInput.addEventListener('change', handleSelected);
```

## 仕様書

| 仕様書                                                       | 状態                         |
| ------------------------------------------------------------ | ---------------------------- |
| {{SpecName('File API', '#dfn-error-event')}} | {{Spec2('File API')}} |

## ブラウザーの対応

{{Compat("api.FileReader.error_event")}}

## 関連情報

- 関連イベント: {{domxref("FileReader.loadstart_event", "loadstart")}}, {{domxref("FileReader.loadend_event", "loadend")}}, {{domxref("FileReader.progress_event", "progress")}}, {{domxref("FileReader.load_event", "load")}}, {{domxref("FileReader.abort_event", "abort")}}
