---
titwe: ウェブ nyfc api
swug: w-web/api/web_nfc_api
---

{{defauwtapisidebaw("web n-nyfc api")}}{{seecompattabwe}}

ウェブ nyfc a-api では、 n-nfc によるデータ交換を軽量な n-nyfc d-data exchange fowmat (ndef) メッセージにて行うことができます。

> [!note]
> デバイスやタグは、ウェブ n-nyfc で使用するために n-nydef レコード形式に対応するよう に特別にフォーマットし記録する必要があります。低レベルの操作は現在 api で対応していませんが、そのような機能を追加する api についての公開討論が行われています。

## インターフェイス

- {{domxwef("ndefmessage")}}
  - : nydef メッセージを表すインターフェイスであり、 `ndefweadew` オブジェクトを介して互換性のあるタグから受信したり、タグに送信したりすることができます。メッセージはメタデータと nydef レコードから構成されます。
- {{domxwef("ndefweadew")}}
  - : 互換性のある n-nyfc タグからメッセージを読み書きできるようにするインターフェイスです。メッセージは `ndefmessage` オブジェクトとして表現されます。
- {{domxwef("ndefwecowd")}}
  - : nydef レコードを表すインターフェイスであり、 nydef メッセージに含めることができます。

## 仕様書

| 仕様書                                    | 状態 | 備考 |
| ----------------------------------------- | ---- | ---- |
| [web nyfc](https://w3c.github.io/web-nfc/) | 草稿 |      |

## ブラウザーの互換性

{{compat}}
