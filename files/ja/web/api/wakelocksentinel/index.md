---
title: WakeLockSentinel
slug: Web/API/WakeLockSentinel
tags:
  - API
  - インターフェイス
  - リファレンス
  - 画面起動ロック API
  - 起動ロック
  - 画面
browser-compat: api.WakeLockSentinel
translation_of: Web/API/WakeLockSentinel
---
{{securecontext_header}}{{DefaultAPISidebar("Screen Wake Lock API")}}

**`WakeLockSentinel`** は[画面起動ロック API](/ja/docs/Web/API/Screen_Wake_Lock_API) のインターフェイスで、基礎となるプラットフォームの起動ロックへのハンドルを提供し、手動で解放および再取得することができます。起動ロックを表す {{jsxref('Object')}} は {{domxref('WakeLock.request()','navigator.wakelock.request()')}} メソッドを介して返されます。

取得した `WakeLockSentinel` は {{domxref('WakeLockSentinel.release','release()')}} メソッドによって手動で解放するか、プラットフォームの起動ロックによって自動的に解放することが可能です。これは、文書が非アクティブになったり、見えなくなったりした場合、端末の電力が低下した場合、ユーザーが省電力モードをオンにした場合に発生する可能性があります。与えられた起動ロック種別のすべての `WakeLockSentinel` インスタンスを解放すると、基盤となるプラットフォームの起動ロックが解放されます。

{{InheritanceDiagram}}

## プロパティ

_このインターフェイスは以下のプロパティを提供しています。_

- {{domxref("WakeLockSentinel.released", "released")}} {{ReadOnlyInline}}
  - : 論理値で、 `WakeLockSentinel` が解放されたかどうかを示します。
- {{domxref("WakeLockSentinel.type", "type")}} {{ReadOnlyInline}}

  - : 文字列で、取得した現在の `WakeLockSentinel` の種別を示します。
    返値は次の通りです。

    - `'screen'`: 画面の起動ロックです。端末の画面が暗くなったりロックされたりすることを防ぎます。

## イベント

- {{domxref("WakeLockSentinel.release_event", "release")}}
  - : {{domxref('WakeLockSentinel.release','release()')}} メソッドが呼び出されるか、起動ロックがユーザーエージェントによって解放されると発行されます。

## メソッド

- {{domxref('WakeLockSentinel.release()', 'release()')}}
  - : `WakeLockSentinel` の解放を行い、解放に成功したら解決する {{jsxref("Promise")}} を返します。

## 例

この例では、 `WakeLockSentinel` を要求する非同期関数を作成します。取得した後は、適切な UI への反映を行うために使用することができる `release` イベントを待ちます。見張り (sentinel) は適切な操作で取得したり解放したりすることができます。

```js
// 起動ロックの参照を作成
let wakeLock = null;

// 起動ロックを要求するための非同期関数を作成
const requestWakeLock = async () => {
  try {
    wakeLock = await navigator.wakeLock.request('screen');

    // release イベントを待ち受け
    wakeLock.addEventListener('release', () => {
      // 起動ロックが解放されたら、それに合わせて UI を変更する
    });

  } catch (err) {
    // 起動ロックに失敗した場合 - ふつうはバッテリーなどシステム関連

  }
}

wakeLockOnButton.addEventListener('click', () => {
  requestWakeLock();
})

wakeLockOffButton.addEventListener('click', () => {
  if (wakeLock !== null) {
    wakeLock.release()
      .then(() => {
        wakeLock = null;
      })
  }
})
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}
