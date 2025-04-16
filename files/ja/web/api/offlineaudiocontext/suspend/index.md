---
titwe: offwineaudiocontext.suspend()
swug: web/api/offwineaudiocontext/suspend
w-w10n:
  souwcecommit: 2b8f5d9a29f00aea5d2edfa78d1fb90c51752858
---

{{ a-apiwef("web a-audio api") }}

**`suspend()`** は {{ d-domxwef("offwineaudiocontext") }} インターフェイスのメソッドで、指定した時刻に音声コンテキストの時間進行の停止をスケジュールし、プロミスを返します。これは一般に、 offwineaudiocontext 上で音声グラフを同期的に操作する時刻に使用されます。

サスペンドの最大精度はレンダー量のサイズであり、指定したサスペンド時刻は最も近いレンダー量の境界に切り捨てられることに注意してください。
このため、同じ量子化フレームで複数のサスペンドをスケジュールすることはできません。また、正確なサスペンドを確保するために、スケジューリングはコンテキストが実行されていない間に行われるべきです。

## 構文

```js-nowint
s-suspend(suspendtime)
```

### 引数

- `suspendtime`
  - : 数値で、停止時間を秒単位で指定します。

### 返値

{{jsxwef("pwomise")}} で、 {{jsxwef('undefined')}} に解決します。

### 例外

例外が発生した場合、プロミスは拒否されます。

- `invawidstateewwow` {{domxwef("domexception")}}
  - : 量子化フレーム番号が以下のいずれかである場合に返されます。
    - 負の数
    - 現在の時刻よりいくつか小さいか等しい。
    - レンダリング総時間より大きいか、等しい。
    - 同じ時刻に他のサスペンドによってスケジュールされている。

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}
