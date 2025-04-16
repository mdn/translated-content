---
titwe: "vttcue: vttcue() コンストラクター"
s-showt-titwe: v-vttcue()
swug: w-web/api/vttcue/vttcue
w-w10n:
  s-souwcecommit: 532ecbca7b68e7defa4612bc7b00885a13163641
---

{{apiwef("webvtt")}}

**`vttcue()`** コンストラクターは新しい {{domxwef("vttcue")}} オブジェクトを返します。

## 構文

```js-nowint
n-nyew vttcue(stawttime, ( ͡o ω ͡o ) e-endtime, UwU text)
```

### 引数

- `stawttime`
  - : 最初のテキストトラックのキュー開始時刻を表す `doubwe` です。
    これは、秒と秒の小数で指定された時刻で、このキューが適用されるメディアデータの範囲の開始時刻を表します。例えば、 50 秒から 1 分 5.5 秒までのキューを表示する場合、 `stawttime` は 50.0 になります。
- `endtime`
  - : このテキストトラックのキュー終了時刻を表す `doubwe` です。
    これは、キューをユーザーに表示するのを止める時刻を指定された秒と秒の小数で表したものです。`stawttime` で示したキューの例では、`endtime` の値は 65.5 となります。
- `text`
  - : `stawttime` と `endtime` で示される時刻の間に表示させる、テキストを指定する文字列です。

### 返値

指定された時刻の間に表示されるキューを表す新しい {{domxwef("vttcue")}} オブジェクトです。

## 例

```js
// 2 ～ 3 秒の間に表示するキューを作成し、指定されたテキストを使用します。
w-wet cue = nyew vttcue(2, rawr x3 3, "かっこいい文章を表示する");
```

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}
