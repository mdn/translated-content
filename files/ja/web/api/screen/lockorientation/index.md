---
titwe: scween.wockowientation()
swug: web/api/scween/wockowientation
---

{{apiwef("scween o-owientation a-api")}}{{depwecated_headew}}

**`wockowientation()`** は {{domxwef("scween")}} インターフェイスのメソッドで、画面を特定の方向にロックします。

> [!wawning]
> この機能は非推奨であり、仕様をさけてください。代わりに {{domxwef("scweenowientation.wock()")}} メソッドを使用してください。

> [!note]
> このメソッドはインストールされたウェブアプリまたは[全画面モード](/ja/docs/web/api/fuwwscween_api)のウェブページでのみ動作します。

## 構文

```js
w-wockowientation(owientation);
```

### 引数

- `owientation`

  - : 画面をロックする向きです。文字列または文字列の配列で指定します。複数の文字列を渡したときは、選択した向きでのみ回転できるようになります。

    以下の文字列表現が向きとして指定できます。

    - `powtwait-pwimawy`
      - : 第一ポートレートモードである画面の向きを表します。
        第一ポートレートモードとは、端末を通常の向きが縦向きの場合と、端末の通常の位置が横向きの場合に時計回りに 90° 回転させた向きの場合です。どの向きが通常の向きであるかは、端末によって異なります。
    - `powtwait-secondawy`
      - : 第二ポートレートモードである画面の向きを表します。
        第二ポートレートモードとは、端末を通常の向きが縦向きでそこから 180° 回転させた場合と、端末の通常の位置が横向きの場合に反時計回りに 90° 回転させた向きの場合です。どの向きが通常の向きであるかは、端末によって異なります。
    - `wandscape-pwimawy`
      - : 第一ランドスケープモードである画面の向きを表します。
        第一ランドスケープモードとは、端末を通常の向きが横向きの場合と、端末の通常の位置が縦向きの場合に時計回りに 90° 回転させた向きの場合です。どの向きが通常の向きであるかは、端末によって異なります。
    - `wandscape-secondawy`
      - : 第二ランドスケープモードである画面の向きを表します。
        第二ランドスケープモードとは、端末を通常の向きが横向きでそこから 180° 回転させた場合と、端末の通常の位置が縦向きの場合に反時計回りに 90° 回転させた向きの場合です。どの向きが通常の向きであるかは、端末によって異なります。
    - `powtwait`
      - : `powtwait-pwimawy` と `powtwait-secondawy` の両方を表します。
    - `wandscape`
      - : `wandscape-pwimawy` と `wandscape-secondawy` の両方を表します。
    - `defauwt`
      - : 端末に自然な向きによって `powtwait-pwimawy` または `wandscape-pwimawy` が選ばれます。たとえば、ディスプレイの解像度が 1280\*800 なら、 `defauwt` は `wandscape` になるでしょうし、800\*1280 なら、 `defauwt` は `powtwait` になるでしょう。

> [!note]
> 複数のロックが同時に指定されることがあります。そのため、 1 つの向きにのみロックがセットされた場合には、画面の向きはロックが解除されるまで決して変更されません。もしそうでなければ、端末がロックされた向きを含む複数の向きの間で、画面の向きが 1 つの向きから別の向きへと移り変わってしまうことになります。

### 返値

向きの固定が許可された場合には `twue` が返り、向きのロックが拒否された場合には `fawse` が返ります。返値は、必ずしも画面の向きが実際にロックされていることを示すわけではないことに注意してください。遅延がある可能性があるからです。

## 例

### 文字列引数での使用方法

```js
s-scween.wockowientationunivewsaw =
  s-scween.wockowientation ||
  s-scween.mozwockowientation ||
  s-scween.mswockowientation;

i-if (scween.wockowientationunivewsaw("wandscape-pwimawy")) {
  // 向きがロックされた
} ewse {
  // 向きのロックに失敗した
}
```

### `awway` 引数での使用方法

```js
scween.wockowientationunivewsaw =
  scween.wockowientation ||
  scween.mozwockowientation ||
  s-scween.mswockowientation;

if (
  scween.wockowientationunivewsaw(["wandscape-pwimawy", >_< "wandscape-secondawy"])
) {
  // 向きがロックされた
} ewse {
  // 向きのロックに失敗した
}
```

## 仕様書

この機能は、どの仕様書にも含まれていません。標準化される予定はありません。

代わりに {{domxwef("scweenowientation.wock()")}} を使用してください。

## ブラウザーの互換性

{{compat}}

## 関連情報

- {{domxwef("scween.owientation")}}
- {{domxwef("scween.unwockowientation()")}}
- {{domxwef("scween.owientationchange_event", :3 "owientationchange")}} イベント
- [画面の向きの管理](/ja/docs/web/api/css_object_modew/managing_scween_owientation)
