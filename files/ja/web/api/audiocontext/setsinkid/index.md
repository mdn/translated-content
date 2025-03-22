---
title: "AudioContext: setSinkId() メソッド"
short-title: setSinkId()
slug: Web/API/AudioContext/setSinkId
l10n:
  sourceCommit: 135b8311a5e3d12789e8421845be3ce026ef72b8
---

{{APIRef("Web Audio API")}}{{SeeCompatTable}}

**`setSinkId()`** は {{domxref("AudioContext")}} インターフェイスのメソッドで、`AudioContext` の音声出力機器を設定します。sink ID が明示的に設定されていない場合は、既定のシステム音声出力機器が使われます。

音声機器を既定でない機器に設定するには、開発者は音声機器にアクセスする許可を得る必要があります。必要な場合、{{domxref("MediaDevices.getUserMedia()")}} を呼ぶことによりユーザーに必要な許可を求めるプロンプトを表示することができます。

さらに、この機能は [`speaker-selection`](/ja/docs/Web/HTTP/Reference/Headers/Permissions-Policy/speaker-selection) [権限ポリシー](/ja/docs/Web/HTTP/Guides/Permissions_Policy) によりブロックされる場合があります。

## 構文

```js-nolint
setSinkId(sinkId)
```

### 引数

- `sinkId`
  - : 出力音声機器として設定する機器のシンク ID です。以下の型のいずれかです。
    - 文字列
      - : シンク ID を表す文字列です。たとえば、{{domxref("MediaDevices.enumerateDevices()")}} が返す {{domxref("MediaDeviceInfo")}} オブジェクトの `deviceId` プロパティで取得できます。
    - `AudioSinkOptions`
      - : シンク ID の様々なオプションを表すオブジェクトです。現在、これは 1 個のプロパティ `type` を取り、その値は `none` です。この値を設定すると、音声を音声出力機器で再生せずに処理させることができます。これは、処理と並行して再生する必要がないときにエネルギーの消費を最小化するのに有用なオプションです。

### 返値

`undefined` の値で解決する {{jsxref("Promise")}} を返します。

シンク ID を既存の値（すなわち、{{domxref("AudioContext.sinkId")}} が返す値）に設定しようとすると、エラーは発生しませんが、処理がすぐに停止します。

### 例外

- `InvalidAccessError` {{domxref("DOMException")}}
  - : 選択された音声出力機器へのアクセスに失敗したとき発生します。
- `NotAllowedError` {{domxref("DOMException")}}
  - : ブラウザーに音声機器にアクセスする許可がないとき発生します。
- `NotFoundError` {{domxref("DOMException")}}
  - : 渡された `sinkId` がシステムで検出されたどの音声機器にも一致しないとき発生します。

## 例

[SetSinkId test example](https://set-sink-id.glitch.me/) ([ソースコード](https://glitch.com/edit/#!/set-sink-id)を見る) では、{{domxref("AudioBufferSourceNode")}} により 3 秒間のホワイトノイズを生成し、{{domxref("GainNode")}} に通して少し音量を下げる音声グラフを作成します。

さらに、音声出力機器をその場で変えることができるドロップダウンメニューを用意します。そのために、

1. ドロップダウンメニューに配置するボタンを用意します。まず、{{domxref("MediaDevices.getUserMedia()")}} を呼び、機器を列挙するために必要な許可を得るためのプロンプトを開きます。次に、{{domxref("MediaDevices.enumerateDevices()")}} を用いてすべての利用可能な機器を取得します。ループにより、各機器を {{htmlelement("select")}} 要素の選択肢として利用可能にします。さらに、音声をどの出力でも再生したくないときのために選択肢「None」を作成します。

   ```js
   mediaDeviceBtn.addEventListener('click', async () => {
     if ("setSinkId" in AudioContext.prototype) {
       selectDiv.innerHTML = '';

       const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
       const devices = await navigator.mediaDevices.enumerateDevices();

       // 簡潔にするため、ドロップダウン作成のためのほとんどの DOM 関係のスクリプトは省略

       const audioOutputs = devices.filter(
          (device) => device.kind === 'audiooutput' && device.deviceId !== 'default'
       );

       audioOutputs.forEach((device) => {
         const option = document.createElement('option')
         option.value = device.deviceId;
         option.textContent = device.label;
         select.appendChild(option);
       });

       const option = document.createElement('option')
       option.value = 'none';
       option.textContent = 'None';
       select.appendChild(option);

       //...
   ```

2. {{htmlelement("select")}} 要素に {{domxref("HTMLElement/change_event", "change")}} イベントリスナーを追加し、新しい値が選択された時にシンク ID を変更して音声出力機器を変更できるようにします。ドロップダウンで「None」が選択された場合は `{ type : 'none' }` オブジェクトを引数として `setSinkId()` を呼ぶことにより音声機器が選択されていない状態にし、それ以外の場合は `<select>` 要素の `value` 属性に格納された音声機器 ID を引数として呼びます。

   ```js
       // ...

       select.addEventListener('change', async () => {
         if(select.value === 'none') {
           await audioCtx.setSinkId({ type : 'none' });
         } else {
           await audioCtx.setSinkId(select.value);
         }
       })
     }
   });
   ```

出力機器の変更は音声の再生中にも、再生前にも、再生と再生の間にもできます。

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [SetSinkId test example](https://set-sink-id.glitch.me/)
- [Change the destination output device in Web Audio](https://developer.chrome.com/blog/audiocontext-setsinkid/)
- {{domxref("AudioContext.sinkId")}}
- {{domxref("AudioContext/sinkchange_event", "sinkchange")}}
