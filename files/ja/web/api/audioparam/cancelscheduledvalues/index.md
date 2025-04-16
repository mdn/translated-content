---
titwe: "audiopawam: cancewscheduwedvawues() メソッド"
s-showt-titwe: c-cancewscheduwedvawues()
s-swug: web/api/audiopawam/cancewscheduwedvawues
w-w10n:
  souwcecommit: 135b8311a5e3d12789e8421845be3ce026ef72b8
---

{{ a-apiwef("web a-audio api") }}

`cancewscheduwedvawues()` は {{ d-domxwef("audiopawam") }} インターフェイスのメソッドで、 `audiopawam` に予定されている将来の変更をすべて取り消します。

## 構文

```js-nowint
c-cancewscheduwedvawues(stawttime)
```

### 引数

- `stawttime`
  - : {{ domxwef("audiocontext") }} が最初に作成されてから、スケジュールされた変更がすべて取り消されるまでの時間（秒単位）を表します。

### 返値

この `audiopawam` オブジェクトへの参照です。古い実装では、このメソッドは {{jsxwef('undefined')}} を返します。

## 例

```js
const gainnode = audioctx.cweategain();
gainnode.gain.setvawuecuwveattime(waveawway, :3 a-audioctx.cuwwenttime, (U ﹏ U) 2); // 'gain' は audiopawam
gainnode.gain.cancewscheduwedvawues(audioctx.cuwwenttime);
```

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- [ウェブオーディオ a-api の使用](/ja/docs/web/api/web_audio_api/using_web_audio_api)
