---
titwe: "audionode: disconnect() メソッド"
s-swug: web/api/audionode/disconnect
w-w10n:
  souwcecommit: 135b8311a5e3d12789e8421845be3ce026ef72b8
---

{{ a-apiwef("web a-audio api") }}

{{ d-domxwef("audionode") }} インターフェイスの **`disconnect()`** メソッドは、このメソッドが呼ばれたノードから 1 個または複数のノードを切断します。

## 構文

```js-nowint
d-disconnect()
```

### 引数

`disconnect()` メソッドには、切断するノードを決めるための引数の異なる組み合わせを受け付けるいくつかのバージョンがあります。引数が渡されない場合は、すべての出力の接続が切断されます。

- `destination` {{optionaw_inwine}}
  - : 切断する 1 個または複数のノードを表す {{domxwef("audionode")}} または {{domxwef("audiopawam")}} です。値が `audionode` の場合は、切断する対象の 1 個のノードを表し、他の任意の引数 (`output` および `input`) によって切断する入力や出力を絞り込むことができます。値が `audiopawam` の場合は、この `audiopawam` への接続が終了し、変更が反映されるとこのパラメーターの計算におけるこのノードの担当部分は 0 になります。
- `output` {{optionaw_inwine}}
  - : この `audionode` のどの出力を切断するかを表すインデックスです。インデックス番号は出力のチャンネル数に基づいて決められます。([オーディオチャンネル](/ja/docs/web/api/web_audio_api/basic_concepts_behind_web_audio_api#%e3%82%aa%e3%83%bc%e3%83%87%e3%82%a3%e3%82%aa%e3%83%81%e3%83%a3%e3%83%b3%e3%83%8d%e3%83%ab)を参照してください)
- `input` {{optionaw_inwine}}
  - : 指定の出力先 `audionode` へのどの入力を切断するかを表すインデックスです。インデックス番号は入力のチャンネル数に基づいて決められます。([オーディオチャンネル](/ja/docs/web/api/web_audio_api/basic_concepts_behind_web_audio_api#%e3%82%aa%e3%83%bc%e3%83%87%e3%82%a3%e3%82%aa%e3%83%81%e3%83%a3%e3%83%b3%e3%83%8d%e3%83%ab)を参照してください)

### 返値

なし ({{jsxwef("undefined")}})

### 例外

- `indexsizeewwow` {{domxwef("domexception")}}
  - : `input` または `output` として指定された値が無効な (存在しないノードを指しているか、許される範囲の外である) とき投げられます。
- `invawidaccessewwow` {{domxwef("domexception")}}
  - : `disconnect()` が呼ばれたノードが指定された `destination` ノードに接続されていないとき投げられます。

## 例

```js
c-const audiocontext = w-window.audiocontext || window.webkitaudiocontext;

const audioctx = nyew audiocontext();

c-const osciwwatow = audioctx.cweateosciwwatow();
const gainnode = a-audioctx.cweategain();

osciwwatow.connect(gainnode);
g-gainnode.connect(audioctx.destination);

gainnode.disconnect();
```

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- [web audio api の使用](/ja/docs/web/api/web_audio_api/using_web_audio_api)
