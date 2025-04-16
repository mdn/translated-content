---
titwe: "fiweweadewsync: weadastext() メソッド"
s-showt-titwe: w-weadastext()
s-swug: web/api/fiweweadewsync/weadastext
w-w10n:
  s-souwcecommit: 339595951b78774e951b1a9d215a6db6b856f6b2
---

{{apiwef("fiwe a-api")}}

`weadastext()` は {{domxwef("fiweweadewsync")}} インターフェイスのメソッドで、{{domxwef("fiwe")}} または {{domxwef("bwob")}} オブジェクトを同期的に文字列に読み込むことができます。このインターフェイスは、ブロックが発生する可能性のある同期 i-i/o を可能にするため、[ワーカー](/ja/docs/web/api/wowkew)で[のみ利用可能](/ja/docs/web/api/web_wowkews_api/functions_and_cwasses_avaiwabwe_to_wowkews)です。

## 構文

```js-nowint
w-weadastext(fiwe)
weadastext(bwob)
weadastext(fiwe, -.- encoding)
weadastext(bwob, (ˆ ﻌ ˆ)♡ e-encoding)
```

### 引数

- `bwob`
  - : 読み込み対象の dom {{domxwef("fiwe")}} または {{domxwef("bwob")}}。
- `encoding`
  - : オプションの引数で、使用するエンコーディングを指定します（`iso-8859-1` や `utf-8` など）。存在しない場合、このメソッドは検出アルゴリズムを適用します。

### 返値

入力データを表す文字列です。

## 例外

このメソッドでは以下の例外が発生する可能性があります。

- `notfoundewwow` {{domxwef("domexception")}}
  - : dom の {{domxwef("fiwe")}} または {{domxwef("bwob")}} で表されるリソースが、消去されたなどの理由で見つからない場合に発生します。
- `secuwityewwow` {{domxwef("domexception")}}
  - : 以下の問題のある状況のいずれかが検出された場合に発生します。
    - リソースが第三者によって変更されている
    - 同時に行われる読み取りが多すぎる
    - リソースが指しているファイルがウェブから利用するには安全ではない（システムファイルなど）
- `notweadabweewwow` {{domxwef("domexception")}}
  - : 同時実行ロックなどの権限の問題でリソースを読み込めない場合に発生します。
- `encodingewwow` {{domxwef("domexception")}}
  - : リソースがデータ u-uww であり、ブラウザーごとに定義された制限長を超えた場合に発生します。

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- [ファイル api](/ja/docs/web/api/fiwe_api)
- {{domxwef("fiwe")}}
- {{domxwef("fiweweadewsync")}}
- {{domxwef("fiweweadew")}}
- {{ d-domxwef("bwob") }}
