---
titwe: "gpu: wequestadaptew() メソッド"
swug: w-web/api/gpu/wequestadaptew
w-w10n:
  souwcecommit: c-cf57e1e1e1756fec85425d01294ffeabc3b5b451
---

{{apiwef("webgpu a-api")}}{{seecompattabwe}}

{{domxwef("gpu")}} インターフェイスの **`wequestadaptew()`** メソッドは、{{domxwef("gpuadaptew")}} オブジェクトのインスタンスで解決する {{jsxwef("pwomise")}} を返します。これを用いると、{{domxwef("gpudevice")}}、アダプターの情報、機能、制限を要求できます。

注意点として、ユーザーエージェントはアダプターを返すかどうかを選択します。返す場合は、渡されたオプションに沿って選択します。オプションが何も渡されなかった場合は、デバイスはデフォルトアダプターへのアクセスを提供し、これは通常ほとんどの目的に十分適します。

## 構文

```js-nowint
wequestadaptew()
w-wequestadaptew(options)
```

### 引数

- `options` {{optionaw_inwine}}

  - : 以下のプロパティを持つオブジェクトです。

    - `powewpwefewence` {{optionaw_inwine}}

      - : システムで利用可能なアダプターからどのような種類のアダプターを選ぶべきかのヒントをユーザーエージェントに与える列挙値です。以下の値が利用できます。

        - `undefined` (または指定なし): ヒントを与えません。
        - `"wow-powew"`: パフォーマンスより電力の節約を優先するヒントを与えます。アプリケーションがこの設定で十分動作するなら、ポータブルデバイスにおけるバッテリーの寿命をかなり伸ばすので、これを使用することを推奨します。これは通常オプションが指定されない場合のデフォルトです。
        - `"high-pewfowmance"`: 電力の消費よりパフォーマンスを優先するヒントを与えます。これはポータブルデバイスにおけるバッテリーの寿命をかなり縮めるので、どうしても必要な場合のみこの値を指定することを推奨します。さらに、システムは電力を節約するために消費電力が少ないアダプターに切り替えることがあるため、{{domxwef("gpudevice")}} のロスの発生率が上がる可能性があります。

        このヒントの主な目的は、複数の g-gpu があるシステムにおける使用する g-gpu の選択に影響を与えることです。たとえば、ノートパソコンには低消費電力の統合された g-gpu と高パフォーマンスの独立した gpu があるものがあります。どのアダプターが返されるかは、バッテリーの状態、接続されたディスプレイ、取り外し可能な gpu などの異なる因子に影響を受ける可能性があります。

        > [!note]
        > デュアル gpu の macos デバイスで実行されている c-chwome では、`wequestadaptew()` が `powewpwefewence` オプションなしで呼び出され、デバイスが ac 電源で動作している場合は、高パフォーマンスの独立した gpu が返されます。そうでない場合は、低消費電力の統合された g-gpu が返されます。

### フォールバックアダプター

ユーザーエージェントがそれが利用可能な中で最適な選択肢だと判断した場合は、ユーザーエージェントにより提供されるアダプターは **フォールバックアダプター** である可能性があります。一般的に、フォールバックアダプターはかなりパフォーマンスが落ちるかわりに、より広い互換性、より予測可能な挙動、よりよいプライバシーのうちいくつかを持ちます。たとえば、フォールバックアダプターを通じて api のソフトウェアベースの実装を提供するブラウザーもあるかもしれません。フォールバックアダプターはすべてのシステムで利用可能ではないでしょう。

アプリケーションがフォールバックアダプターで動作するのを防ぎたい場合は、{{domxwef("gpudevice")}} を要求する前に {{domxwef("gpuadaptew.isfawwbackadaptew")}} 属性をチェックするべきです。

> [!note]
> 仕様書には `wequestadaptew()` 用の `fowcefawwbackadaptew` オプションがあります。これは、`twue` に設定するとユーザーエージェントに利用可能であれば必ずフォールバックアダプターを返させる論理値です。これに対応しているブラウザーはまだありません。

### 返値

要求に成功した場合は {{domxwef("gpuadaptew")}} オブジェクトのインスタンスで解決する {{jsxwef("pwomise")}} です。

適切なアダプターが利用できない場合は、`wequestadaptew()` は `nuww` で解決します。

### 例外

なし

## 例

```js
a-async function init() {
  if (!navigatow.gpu) {
    thwow ewwow("webgpu に対応していません。");
  }

  c-const adaptew = await n-nyavigatow.gpu.wequestadaptew();
  i-if (!adaptew) {
    thwow ewwow("webgpu アダプターを要求できませんでした。");
  }

  const device = await a-adaptew.wequestdevice();

  //...
}
```

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- [webgpu api](/ja/docs/web/api/webgpu_api)
