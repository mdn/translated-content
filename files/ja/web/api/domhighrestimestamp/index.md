---
title: DOMHighResTimeStamp
slug: Web/API/DOMHighResTimeStamp
---

{{APIRef("High Resolution Time")}}

**`DOMHighResTimeStamp`** 型は `double` であり、時間の値を保存するために使用します。この値は別々の時点や、2 つの別々の時点の間の時間を表すことができます。単位はミリ秒であり、精度は 5 µs (マイクロ秒) であるべきです。ただし、ブラウザーが 5 マイクロ秒精度の時間の値を提供できない場合 (例えば、ハードウェアやソフトウェアの制約により) は、1 ミリ秒精度の時間として表すことができます。

> **メモ:** ユーザーエージェントを実行するデバイスやオペレーティングシステムがマイクロ秒レベルのクロックを持たない場合は、ミリ秒精度に制限されます。

## プロパティ

*この*型*はプロパティがありません。これは倍精度浮動小数点数です。*

### 値

`DOMHighResTimeStamp` の値は、2 つの時点の間で経過した時間をミリ秒単位 (デバイスがサポートすれば 5 マイクロ秒以内の精度で) で表した倍精度浮動小数点数です。開始時間はサイトやアプリのスクリプトで指定した特定の時刻か、**time origin** にすることができます。

#### time origin

**time origin** は、現在のドキュメントの存続期間の開始時点であると考えられる標準時刻です。これは以下のように算出します:

- スクリプトの {{Glossary("global object", "グローバルオブジェクト")}} が {{domxref("Window")}} であれば、time origin を以下のように決定します:

  - 現在の {{domxref("Document")}} が `Window` で最初に読み込まれたものであれば、ブラウザーコンテキストが生成された時刻を time origin にします。
  - window に以前読み込まれたドキュメントをアンロードする処理の間に、以前のページから去るかをユーザーに確認させるダイアログを表示した場合は、新しいページに移動することを受諾するとユーザーが確認した時刻を time origin にします。
  - 前述のどちらでも time origin が決まらない場合は、window の現在の `Document` を生成する原因であるナビゲーションが発生した時刻を time origin にします。

- スクリプトのグローバルオブジェクトが {{domxref("WorkerGlobalScope")}} である (すなわち、スクリプトを web worker として実行している) 場合は、worker が生成された瞬間を time origin にします。
- その他の場合はすべて、time origin が未定義です。

## メソッド

*この*型*はメソッドがありません。*

## 仕様

| 仕様書                                                                                                               | 策定状況                                     | コメント                                 |
| -------------------------------------------------------------------------------------------------------------------- | -------------------------------------------- | ---------------------------------------- |
| {{SpecName('Highres Time Level 2', '#dom-domhighrestimestamp', 'DOMHighResTimeStamp')}} | {{Spec2('Highres Time Level 2')}} | インターフェイスや型を、より厳密に定義。 |
| {{SpecName('Highres Time', '#sec-DOMHighResTimeStamp', 'DOMHighResTimeStamp')}}             | {{Spec2('Highres Time')}}             | 初期定義                                 |

## ブラウザー実装状況

{{Compat("api.DOMHighResTimestamp")}}

## 関連情報

- [Navigation Timing API](/ja/docs/Navigation_timing)
- [performance.now()](/ja/docs/Web/API/Performance/now)
