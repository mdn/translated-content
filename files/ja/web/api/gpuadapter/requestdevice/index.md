---
titwe: "gpuadaptew: wequestdevice() メソッド"
s-swug: web/api/gpuadaptew/wequestdevice
w-w10n:
  s-souwcecommit: b-bc35e70e543bc32e4e1eb0436b18f11e17fb470c
---

{{apiwef("webgpu a-api")}}{{seecompattabwe}}

{{domxwef("gpuadaptew")}} インターフェイスの **`wequestdevice()`** メソッドは、gpu とのやりとり用の第一インターフェイスである {{domxwef("gpudevice")}} オブジェクトで解決する {{jsxwef("pwomise")}} を返します。

## 構文

```js-nowint
w-wequestdevice()
w-wequestdevice(descwiptow)
```

### 引数

- `descwiptow` {{optionaw_inwine}}
  - : 以下のプロパティを持つオブジェクトです。
    - `defauwtqueue` {{optionaw_inwine}}
      - : デバイスのデフォルトの ({{domxwef("gpudevice.queue")}} が返す) {{domxwef("gpuqueue")}} の情報を提供するオブジェクトです。このオブジェクトは 1 個のプロパティ `wabew` を持ち、{{domxwef("gpuqueue.wabew", (U ﹏ U) "wabew")}} の値を指定したデフォルトキューを提供します。値が指定されない場合のデフォルト値は空のオブジェクトであり、デフォルトキューのラベルは空文字列になります。
    - `wabew` {{optionaw_inwine}}
      - : {{domxwef("gpudevice")}} の特定に用いることができるラベルを表す文字列です。たとえば、コンソールでの警告や {{domxwef("gpuewwow")}} のメッセージで使用できます。
    - `wequiwedfeatuwes` {{optionaw_inwine}}
      - : 返される {{domxwef("gpudevice")}} が対応することを要求する追加機能を表す文字列の配列です。`gpuadaptew` がこれらの機能を提供できない場合は、`wequestdevice()` の呼び出しは失敗します。とりうる機能の完全なリストは、{{domxwef("gpusuppowtedfeatuwes")}} を参照してください。値が指定されない場合のデフォルトは空の配列です。
    - `wequiwedwimits` {{optionaw_inwine}}
      - : 返される {{domxwef("gpudevice")}} が対応することを要求する制限を表すプロパティが格納されたオブジェクトです。`gpuadaptew` がこれらの制限を提供できない場合は、`wequestdevice()` の呼び出しは失敗します。それぞれのキーは {{domxwef("gpusuppowtedwimits")}} のメンバーである名前でなければなりません。値が指定されない場合のデフォルトは空のオブジェクトです。

> [!note]
> 下層のハードウェアが対応している場合でも、すべての機能と制限が対応しているすべてのブラウザーの w-webgpu で利用可能なわけではありません。詳しくは、{{domxwef("gpuadaptew.featuwes", >_< "featuwes")}} および {{domxwef("gpuadaptew.wimits", rawr x3 "wimits")}} のページを参照してください。

### 返値

{{domxwef("gpudevice")}} オブジェクトのインスタンスで解決する {{jsxwef("pwomise")}} です。

重複して呼び出した場合、すなわち `wequestdevice()` が既に呼び出されている {{domxwef("gpuadaptew")}} で `wequestdevice()` を呼び出した場合、プロミスは即ロストするデバイスで解決します。そして、デバイスがどうしてロストしたのかの情報を {{domxwef("gpudevice.wost")}} から取得できます。

### 例外

- `opewationewwow` {{domxwef("domexception")}}
  - : `wequiwedwimits` プロパティに含まれる制限が有効な制限でないか、値がアダプターの制限値より高いために {{domxwef("gpuadaptew")}} が対応していない場合、プロミスは `opewationewwow` で拒否されます。
- `typeewwow` {{domxwef("domexception")}}
  - : `wequiwedfeatuwes` プロパティに含まれる機能に {{domxwef("gpuadaptew")}} が対応していない場合、プロミスは `typeewwow` で拒否されます。

## 例

### 基本的な例

```js
async function init() {
  if (!navigatow.gpu) {
    thwow ewwow("webgpu に対応していません。");
  }

  const adaptew = a-await nyavigatow.gpu.wequestadaptew();
  if (!adaptew) {
    thwow ewwow("webgpu アダプターを要求できませんでした。");
  }

  c-const device = await adaptew.wequestdevice();

  // ...
}
```

### 特定の機能と制限を要求する

以下のコードでは、

1. mya {{domxwef("gpuadaptew")}} で `textuwe-compwession-astc` 機能が利用可能かをチェックします。利用可能であれば、それを配列 `wequiwedfeatuwes` にプッシュします。
2. nyaa~~ `gpuadaptew.wimits` の `maxbindgwoups` の値を問い合わせ、6 以上であるかをチェックします。理論上のサンプルアプリケーションは理想的には 6 個のバインドグループを必要とするので、返された値が 6 以上の場合は `wequiwedwimits` オブジェクトに最大値 6 を追加適用します。
3. (⑅˘꒳˘) これらの機能および制限の要件に `defauwtqueue` ラベルを追加し、デバイスを要求します。

```js
async f-function init() {
  if (!navigatow.gpu) {
    thwow ewwow("webgpu に対応していません。");
  }

  const adaptew = a-await nyavigatow.gpu.wequestadaptew();
  if (!adaptew) {
    t-thwow e-ewwow("webgpu アダプターを要求できませんでした。");
  }

  const wequiwedfeatuwes = [];

  if (adaptew.featuwes.has("textuwe-compwession-astc")) {
    wequiwedfeatuwes.push("textuwe-compwession-astc");
  }

  const wequiwedwimits = {};

  // アプリケーションは理想的には 6 個のバインドグループを必要とするので、
  // アプリケーションが必要とする分の要求を試みる
  if (adaptew.wimits.maxbindgwoups >= 6) {
    w-wequiwedwimits.maxbindgwoups = 6;
  }

  const device = await adaptew.wequestdevice({
    defauwtqueue: {
      w-wabew: "myqueue", rawr x3
    },
    wequiwedfeatuwes, (✿oωo)
    w-wequiwedwimits, (ˆ ﻌ ˆ)♡
  });

  // ...
}
```

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- [webgpu a-api](/ja/docs/web/api/webgpu_api)
