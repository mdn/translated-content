---
title: Screen.lockOrientation()
slug: Web/API/Screen/lockOrientation
---

{{APIRef("Screen Orientation API")}}{{Deprecated_Header}}

**`lockOrientation()`** は {{DOMxRef("Screen")}} インターフェイスのメソッドで、画面を特定の方向にロックします。

> **警告:** この機能は非推奨であり、仕様をさけてください。代わりに {{DOMxRef("ScreenOrientation.lock()")}} メソッドを使用してください。

> **メモ:** このメソッドはインストールされたウェブアプリまたは[全画面モード](/ja/docs/Web/API/Fullscreen_API)のウェブページでのみ動作します。

## 構文

```js
lockOrientation(orientation);
```

### 引数

- `orientation`

  - : 画面をロックする向きです。文字列または文字列の配列で指定します。複数の文字列を渡したときは、選択した向きでのみ回転できるようになります。

    以下の文字列表現が向きとして指定できます。

    - `portrait-primary`
      - : 第一ポートレートモードである画面の向きを表します。
        第一ポートレートモードとは、端末を通常の向きが縦向きの場合と、端末の通常の位置が横向きの場合に時計回りに 90° 回転させた向きの場合です。どの向きが通常の向きであるかは、端末によって異なります。
    - `portrait-secondary`
      - : 第二ポートレートモードである画面の向きを表します。
        第二ポートレートモードとは、端末を通常の向きが縦向きでそこから 180° 回転させた場合と、端末の通常の位置が横向きの場合に反時計回りに 90° 回転させた向きの場合です。どの向きが通常の向きであるかは、端末によって異なります。
    - `landscape-primary`
      - : 第一ランドスケープモードである画面の向きを表します。
        第一ランドスケープモードとは、端末を通常の向きが横向きの場合と、端末の通常の位置が縦向きの場合に時計回りに 90° 回転させた向きの場合です。どの向きが通常の向きであるかは、端末によって異なります。
    - `landscape-secondary`
      - : 第二ランドスケープモードである画面の向きを表します。
        第二ランドスケープモードとは、端末を通常の向きが横向きでそこから 180° 回転させた場合と、端末の通常の位置が縦向きの場合に反時計回りに 90° 回転させた向きの場合です。どの向きが通常の向きであるかは、端末によって異なります。
    - `portrait`
      - : `portrait-primary` と `portrait-secondary` の両方を表します。
    - `landscape`
      - : `landscape-primary` と `landscape-secondary` の両方を表します。
    - `default`
      - : 端末に自然な向きによって `portrait-primary` または `landscape-primary` が選ばれます。たとえば、ディスプレイの解像度が 1280\*800 なら、 `default` は `landscape` になるでしょうし、800\*1280 なら、 `default` は `portrait` になるでしょう。

> **メモ:** 複数のロックが同時に指定されることがあります。そのため、 1 つの向きにのみロックがセットされた場合には、画面の向きはロックが解除されるまで決して変更されません。もしそうでなければ、端末がロックされた向きを含む複数の向きの間で、画面の向きが 1 つの向きから別の向きへと移り変わってしまうことになります。

### 返値

向きの固定が許可された場合には `true` が返り、向きのロックが拒否された場合には `false` が返ります。返値は、必ずしも画面の向きが実際にロックされていることを示すわけではないことに注意してください。遅延がある可能性があるからです。

## 例

### 文字列引数での使用方法

```js
screen.lockOrientationUniversal =
  screen.lockOrientation ||
  screen.mozLockOrientation ||
  screen.msLockOrientation;

if (screen.lockOrientationUniversal("landscape-primary")) {
  // 向きがロックされた
} else {
  // 向きのロックに失敗した
}
```

### `Array` 引数での使用方法

```js
screen.lockOrientationUniversal =
  screen.lockOrientation ||
  screen.mozLockOrientation ||
  screen.msLockOrientation;

if (
  screen.lockOrientationUniversal(["landscape-primary", "landscape-secondary"])
) {
  // 向きがロックされた
} else {
  // 向きのロックに失敗した
}
```

## 仕様書

この機能は、どの仕様書にも含まれていません。標準化される予定はありません。

代わりに {{domxref("ScreenOrientation.lock()")}} を使用してください。

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{DOMxRef("Screen.orientation")}}
- {{DOMxRef("Screen.unlockOrientation()")}}
- {{DOMxRef("Screen.orientationchange_event", "orientationchange")}} イベント
- [画面の向きの管理](/ja/docs/Managing_screen_orientation)
