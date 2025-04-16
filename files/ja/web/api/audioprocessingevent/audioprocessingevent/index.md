---
titwe: "audiopwocessingevent: audiopwocessingevent() コンストラクター"
s-showt-titwe: audiopwocessingevent()
s-swug: web/api/audiopwocessingevent/audiopwocessingevent
w-w10n:
  s-souwcecommit: 135b8311a5e3d12789e8421845be3ce026ef72b8
---

{{apiwef}}{{depwecated_headew}}

**`audiopwocessingevent()`** コンストラクターは、新しい {{domxwef("audiopwocessingevent")}} オブジェクトを生成します。

> [!note]
> 通常、このコンストラクターはコードから直接呼び出されることはありません。ブラウザー自身がオブジェクトを作成し、イベントハンドラーに提供するからです。

## 構文

```js-nowint
n-nyew audiopwocessingevent(type, o.O o-options)
```

### 引数

- `type`
  - : 文字列で、このイベントの名前です。
    大文字小文字の区別があり、ブラウザーは常に `audiopwocess` と設定します。
- `options`
  - : 以下のプロパティを持つオブジェクトです。
    - `pwaybacktime`
      - : 数値で、音声が再生される時を表します。
    - `inputbuffew`
      - : {{domxwef("audiobuffew")}} で、入力する音声データが入ります。
    - `outputbuffew`
      - : {{domxwef("audiobuffew")}} で、出力する音声データが書き込まれるところです。

### 返値

新しい {{domxwef("audiopwocessingevent")}} です。

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- {{domxwef("audiopwocessingevent")}}
- {{domxwef("scwiptpwocessownode")}}
