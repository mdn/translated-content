---
title: ProgressEvent.initProgressEvent()
slug: Web/API/ProgressEvent/initProgressEvent
tags:
  - API
  - 非推奨
  - メソッド
  - 進捗イベント
  - ProgressEvent
browser-compat: api.ProgressEvent.initProgressEvent
translation_of: Web/API/ProgressEvent/initProgressEvent
---
{{apiref("DOM Events")}} {{deprecated_header}}{{non-standard_header}}

**`ProgressEvent.initProgressEvent()`** メソッドは、非推奨の {{domxref("Document.createEvent()", "Document.createEvent(\"ProgressEvent\")")}} メソッドを使用して生成されたアニメーションイベントを初期化します。

この方法で作成された `ProgressEvent` は信頼できません。

> **Note:** このメソッドは標準化プロセスで削除されました。非推奨となり、ほとんどの実装から削除されました。もうこれを使用せず、標準のコンストラクター {{domxref("ProgressEvent.ProgressEvent", "ProgressEvent()")}} を使用して、合成した {{domxref("ProgressEvent")}} を生成してください。

## 構文

```js
Progress.initProgressEvent(typeArg, canBubbleArg, cancelableArg, lengthComputable, loaded, total);
```

### 引数

- _typeArg_

  - : {{domxref("DOMString")}} で、発生したアニメーションイベントの種類を識別します。以下の値が使用可能です。

    | 値          | 意味                                             |
    | ----------- | ------------------------------------------------ |
    | `loadstart` | 操作が開始された。                               |
    | `progress`  | 操作が続行中である。                             |
    | `error`     | 操作に失敗し、完了しなかった。                   |
    | `abort`     | 操作がキャンセルされ、完了しなかった。           |
    | `load`      | 操作が完了した。                                 |
    | `loadend`   | 操作が停止した。                                 |

- _canBubbleArg_
  - : 論理値のフラグで、このイベントがバブリングするか (`true`) しないか (`false`) を示します。
- _cancelableArg_
  - : 論理値のフラグで、動作に関連したイベントを防止できるか (`true`) できないか (`false`) を示します。
- _lengthComputable_
  - : 論理値のフラグで、基礎となるプロセスで行われる作業の合計と、すでに行われた作業の量が計算可能であるかどうかを示します。言い換えれば、進捗が測定可能かどうかを示します。
- _loaded_
  - : `unsigned long long` で、基礎となるプロセスで既に実行された作業量を表します。行われた作業の割合は、このプロパティと `ProgressEvent.total` を用いて計算することができます。 HTTP を使用してリソースをダウンロードする場合、これはヘッダーやその他のオーバーヘッドを除いた、コンテンツ自体の部分のみを表します。
- _total_
  - : `unsigned long long` で、基礎となるプロセスが実行中の作業の総量を表します。 HTTP を使用してリソースをダウンロードする場合、これはヘッダーやその他のオーバーヘッドを除いた、コンテンツそのものを表します。

## 仕様書

この機能はどの仕様書にもありません。

## ブラウザーの互換性

{{Compat}}

## 関連情報

- 所属する {{domxref("ProgressEvent")}} インターフェイス
