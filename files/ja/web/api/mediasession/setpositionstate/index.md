---
title: MediaSession.setPositionState()
slug: Web/API/MediaSession/setPositionState
l10n:
  sourceCommit: 2ba2c0efbdf0c34b1da02203e4e84b571c883629
---

{{APIRef("Media Session API")}}

{{domxref("MediaSession")}} の **`setPositionState()`** メソッドは、進行中のメディアに関する詳細を提供するあらゆる種類のインターフェイスにおいて、ユーザー端末で表示するために、現在の文書のメディア再生位置と速度を更新するために使用します。これは、コードでブラウザーが直接対応していない種類のメディアのプレーヤーを実装する場合に、特に有用です。

このメソッドを `navigator` オブジェクトの {{domxref("navigator.mediaSession", "mediaSession")}} オブジェクトで呼び出してください。

## 構文

```js-nolint
setPositionState()
setPositionState(stateDict)
```

### 引数

- `stateDict` {{optional_inline}}
  - : 文書の進行中のメディアの再生位置と再生速度に関する更新情報を提供するオブジェクトです。このオブジェクトが空の場合、既存の再生状態情報はクリアされます。このオブジェクトは、以下の引数を格納した辞書です。
    - `duration`
      - : 浮動小数点数の値で、現在のメディアの全体の再生時間を秒単位で示します。これは常に正の値であるべきであり、正の無限大 ([`Infinity`](/ja/docs/Web/JavaScript/Reference/Global_Objects/Infinity)) は、ライブストリームのような、終わりを定義しないメディアを示します。
    - `playbackRate`
      - : 浮動小数点数の値で、メディアの再生速度を、通常の再生速度との関連で示す値です。従って、1 の値は通常の速度で再生していることを示し、2 の値は倍速で再生していることを示し、以下同様となります。負の値は、メディアが逆再生されていることを示します。-1 は、通常の速度で逆再生されていることを示し、-2 は、倍速で逆再生されていることを示します、といった具合です。
    - `position`
      - : 浮動小数点数の値で、最後に報告されたメディアの再生位置を秒単位で示します。これは常に正の値でなければなりません。

### 返値

なし ({{jsxref("undefined")}})。

### 例外

- {{jsxref("TypeError")}}
  - : このエラーは、さまざまな状況で発生する可能性があります。
    - 指定したオブジェクトの `duration` が見つからないか、負の値、または `null` である。
    - その `position` が見つからないか null であるか、または `duration` よりも大きいか負の値である。
    - `playbackRate` がゼロである。

## 例

以下は、現在の {{domxref('MediaSession')}} トラックの位置状態を更新する関数です。

```js
function updatePositionState() {
  navigator.mediaSession.setPositionState({
    duration: audioEl.duration,
    playbackRate: audioEl.playbackRate,
    position: audioEl.currentTime,
  });
}
```

この関数は、{{domxref('MediaMetadata', 'メディアセッションメタデータ')}}を更新するときや、下記のようなアクションのコールバック内で使用することができます。

```js
navigator.mediaSession.setActionHandler("seekbackward", (details) => {
  // our time to skip
  const skipTime = details.seekOffset || 10;

  // set our position
  audioEl.currentTime = Math.max(audioEl.currentTime - skipTime, 0);
  updatePositionState();
});
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}
