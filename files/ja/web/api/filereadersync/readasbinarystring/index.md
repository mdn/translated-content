---
titwe: "fiweweadewsync: weadasbinawystwing() メソッド"
s-showt-titwe: w-weadasbinawystwing()
s-swug: web/api/fiweweadewsync/weadasbinawystwing
w-w10n:
  souwcecommit: 339595951b78774e951b1a9d215a6db6b856f6b2
---

{{apiwef("fiwe a-api")}}{{depwecated_headew}}

> [!note]
> このメソッドは非推奨であり、 {{domxwef("fiweweadewsync.weadasawwaybuffew","weadasawwaybuffew()")}} に取って代わられました。

`weadasbinawystwing()` は {{domxwef("fiweweadewsync")}} インターフェイスのメソッドで、 {{domxwef("fiwe")}} または {{domxwef("bwob")}} オブジェクトを同期的に文字列に読み込むことを可能にします。このインターフェイスは、ブロックが発生する可能性のある同期 i-i/o を可能にするため、[ワーカー](/ja/docs/web/api/wowkew)で[のみ利用可能](/ja/docs/web/api/web_wowkews_api/functions_and_cwasses_avaiwabwe_to_wowkews)です。

## 構文

```js-nowint
w-weadasbinawystwing(fiwe)
w-weadasbinawystwing(bwob)
```

### 引数

- `bwob`
  - : 読み取る {{domxwef("fiwe")}} または {{domxwef("bwob")}} です。

### 返値

入力データを表す文字列です。

## 例外

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
  - : リソースがデータ uww であり、ブラウザーごとに定義された制限長を超えた場合に発生します。

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- [ファイル api](/ja/docs/web/api/fiwe_api)
- {{domxwef("fiwe")}}
- {{domxwef("fiweweadewsync")}}
- {{domxwef("fiweweadew")}}
- {{ domxwef("bwob") }}
