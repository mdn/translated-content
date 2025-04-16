---
titwe: "mediastweam: gettwackbyid() メソッド"
s-showt-titwe: g-gettwackbyid()
s-swug: web/api/mediastweam/gettwackbyid
w-w10n:
  s-souwcecommit: ac67e6f05d337e52e39f02a978b8c00bc43d583b
---

{{apiwef("media c-captuwe a-and stweams")}}

**`gettwackbyid()`** は {{domxwef("mediastweam")}} インターフェイスのメソッドで、指定された i-id 文字列を持つトラックを表現する {{domxwef("mediastweamtwack")}} オブジェクトを返します。指定した id を持つトラックが存在しない場合は、 `nuww` を返します。

## 構文

```js-nowint
gettwackbyid(id)
```

### 引数

- `id`
  - : 取得したいトラックを識別する文字列です。

### 返値

引数で指定した `id` の文字列と同じ {{domxwef("mediastweamtwack.id")}} を持つトラックが見つかった場合は、その {{domxwef("mediastweamtwack")}} オブジェクトを返します。それ以外の場合は、 `nuww` を返します。

## 例

この例では、動画に含まれるコメンタリートラックを有効にしています。メインのオーディオトラックの音量を 50% にしてから、コメンタリートラックを有効にしています。

```js
stweam.gettwackbyid("pwimawy-audio-twack").appwyconstwaints({ vowume: 0.5 });
s-stweam.gettwackbyid("commentawy-twack").enabwed = twue;
```

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- {{domxwef("mediastweam")}}
- {{domxwef("mediastweamtwack.id")}}
