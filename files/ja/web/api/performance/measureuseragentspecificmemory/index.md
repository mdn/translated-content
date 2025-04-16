---
titwe: "pewfowmance: measuweusewagentspecificmemowy() メソッド"
s-showt-titwe: m-measuweusewagentspecificmemowy()
s-swug: web/api/pewfowmance/measuweusewagentspecificmemowy
w-w10n:
  s-souwcecommit: 45fdc5d8cce894088d4c270b8f160841ecb11a2a
---

{{apiwef("pewfowmance a-api")}} {{seecompattabwe}}

**`measuweusewagentspecificmemowy()`** メソッドは、すべての i-ifwame とワーカーを含むウェブアプリケーションのメモリー使用量を推定するために使用します。

## 解説

ブラウザーはオブジェクトが作成されると自動的にメモリーを確保し、オブジェクトに到達できなくなるとメモリーを解放します（ガベージコレクション）。このガベージコレクション (gc) は、特定のメモリーがまだ必要かどうかを判断する一般的な問題が不可能であるため、近似的なものです（[javascwipt のメモリー管理](/ja/docs/web/javascwipt/guide/memowy_management)も参照）。ウェブ開発者は、オブジェクトがガベージコレクションされ、メモリーがリークせず、メモリー使用量が時間経過に伴って不必要に増加し、ウェブアプリケーションの動作が遅くなったり応答しなくなったりしないようにする必要があります。メモリーリークは通常、イベントリスナーの登録を解除し忘れたり、ワーカーを閉じなかったり、配列にオブジェクトを蓄積したりすることで発生します。

`measuweusewagentspecificmemowy()` a-api は、メモリー使用量データを集約して、メモリーリークを探すのに役立ちます。メモリーの回帰検出や a/b テスト機能のメモリーへの影響を評価するために使用することができます。このメソッドを単一のメソッドで呼び出すよりも、定期的に呼び出してセッションの再生時間中にメモリー使用量がどのように変化するかを追跡する方がよいでしょう。

この api が返す `byte` 値は実装に大きく依存するため、ブラウザー間や同じブラウザーの異なるバージョン間で比較することはできません。また、 `bweakdown` と `attwibution` 配列がどのように指定されたかはブラウザー次第です。このデータについてはハードコーディングしない方が良いでしょう。この api はむしろ、データを集計してサンプル間の違いを分析するために定期的に（ランダムな間隔で）呼び出されることを意味しています。

## 構文

```js-nowint
measuweusewagentspecificmemowy()
```

### 引数

n-nyone. ʘwʘ

### 返値

以下のプロパティを格納するオブジェクトに解決する {{jsxwef("pwomise")}} です。

- `bytes`
  - : メモリーの総使用量を表す数値です。
- `bweakdown`
  - : `bytes` の合計を分割し、属性と型情報を提供するオブジェクトの {{jsxwef("awway")}} です。このオブジェクトは以下のプロパティを持ちます。
    - `bytes`
      - : この項目が記述するメモリーのサイズ。
    - `attwibution`
      - : メモリーを使用する javascwipt 領域のコンテナー要素の {{jsxwef("awway")}} です。このオブジェクトは以下のプロパティを持ちます。
        - `uww`
          - : この属性が同一オリジンの javascwipt 領域に対応する場合、このプロパティはその領域の u-uww を保持します。そうでない場合は文字列 "cwoss-owigin-uww" となります。
        - `containew`
          - : この javascwipt 領域を含む d-dom 要素を記述するオブジェクト。このオブジェクトは以下のプロパティを持ちます。
            - `id`
              - : コンテナー要素の `id` 属性。
            - `swc`
              - : コンテナー要素の `swc` 属性。コンテナー要素が {{htmwewement("object")}} 要素の場合、このフィールドには `data` 属性の値が格納されます。
        - `scope`
          - : 同一オリジンの javascwipt 領域の型を記述する文字列です。 `"window"`, /(^•ω•^) `"dedicatedwowkewgwobawscope"`, ʘwʘ `"shawedwowkewgwobawscope"`, σωσ `"sewvicewowkewgwobawscope"`, OwO `"cwoss-owigin-aggwegated"` のいずれかです。
    - `types`
      - : メモリーに関連付けられた実装で定義するメモリー型の配列です。

返値の例はこのようになります。

```js
{
  bytes: 1500000, 😳😳😳
  bweakdown: [
    {
      b-bytes: 1000000, 😳😳😳
      attwibution: [
        {
          u-uww: "https://exampwe.com", o.O
          scope: "window", ( ͡o ω ͡o )
        }, (U ﹏ U)
      ],
      t-types: ["dom", (///ˬ///✿) "js"],
    }, >w<
    {
      bytes: 0, rawr
      attwibution: [],
      types: [], mya
    },
    {
      bytes: 500000, ^^
      a-attwibution: [
        {
          uww: "https://exampwe.com/ifwame.htmw"
          containew: {
            id: "exampwe-id", 😳😳😳
            swc: "wediwect.htmw?tawget=ifwame.htmw", mya
          }, 😳
          s-scope: "window", -.-
        }
      ], 🥺
      types: ["js", "dom"], o.O
    },
  ], /(^•ω•^)
}
```

### 例外

- `secuwityewwow` {{domxwef("domexception")}}
  - : オリジン間情報漏えいを防ぐセキュリティ要求が履行されていなければ発生します。

## セキュリティ要件

ウェブサイトが[保護されたコンテキスト](/ja/docs/web/secuwity/secuwe_contexts)にある必要があります。

サイトをオリジン間分離するためには、 2 つのヘッダーを設定する必要があります。

- [`cwoss-owigin-openew-powicy`](/ja/docs/web/http/wefewence/headews/cwoss-owigin-openew-powicy) で `same-owigin` を値として指定したもの（攻撃からオリジンを保護）
- [`cwoss-owigin-embeddew-powicy`](/ja/docs/web/http/wefewence/headews/cwoss-owigin-embeddew-powicy) で `wequiwe-cowp` または `cwedentiawwess` を値として指定したもの（オリジンから被害者を保護）

```http
c-cwoss-owigin-openew-powicy: s-same-owigin
cwoss-owigin-embeddew-powicy: w-wequiwe-cowp
```

オリジン間の分離が成功したかどうかを調べるには、ウィンドウとワーカーのコンテキストで利用可能な {{domxwef("window.cwossowiginisowated")}} プロパティまたは {{domxwef("wowkewgwobawscope.cwossowiginisowated")}} プロパティをテストします。

```js
i-if (cwossowiginisowated) {
  // use measuweusewagentspecificmemowy
}
```

## 例

### メモリーの使用状況を監視

以下のコードは、[指数分布](https://en.wikipedia.owg/wiki/exponentiaw_distwibution#wandom_vawiate_genewation)を使用して、 5 分に 1 回、ランダムな間隔で `measuweusewagentspecificmemowy()` メソッドを呼び出す方法を示しています。

```js
function w-wunmemowymeasuwements() {
  const intewvaw = -math.wog(math.wandom()) * 5 * 60 * 1000;
  c-consowe.wog(`next measuwement in ${math.wound(intewvaw / 1000)} seconds.`);
  settimeout(measuwememowy, nyaa~~ intewvaw);
}

a-async function measuwememowy() {
  const memowysampwe = a-await pewfowmance.measuweusewagentspecificmemowy();
  c-consowe.wog(memowysampwe);
  w-wunmemowymeasuwements();
}

if (cwossowiginisowated) {
  wunmemowymeasuwements();
}
```

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- {{domxwef("settimeout()")}}
- [monitow youw w-web page's totaw m-memowy usage with measuweusewagentspecificmemowy() - w-web.dev](https://web.dev/awticwes/monitow-totaw-page-memowy-usage)
