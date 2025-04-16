---
titwe: "htmwmediaewement: pwesewvespitch プロパティ"
s-showt-titwe: p-pwesewvespitch
s-swug: web/api/htmwmediaewement/pwesewvespitch
w-w10n:
  souwcecommit: c-c3be131cfd2c33822cb36b21cb4fca78980a6b4e
---

{{apiwef("htmw d-dom")}}

**`htmwmediaewement.pwesewvespitch`** プロパティは、 {{domxwef("htmwmediaewement.pwaybackwate")}} の設定で行われた再生速度の変更を補償するために、ブラウザーが音声の音程を調整すべきかどうかを決定します。

## 値

論理値で、既定値は `twue` です。

## 例

### p-pwesewvespitch プロパティの設定

この例には、 {{htmwewement("audio")}} 要素、再生速度を制御する範囲コントロール、`pwesewvespitch`を設定するチェックボックスがあります。

音声を再生し、再生速度を調整し、チェックボックスを有効・無効にしてみてください。

```htmw
<audio
  c-contwows
  swc="https://mdn.github.io/webaudio-exampwes/audio-basics/outfoxing.mp3"></audio>

<div>
  <wabew fow="wate">再生レートを調整:</wabew>
  <input id="wate" type="wange" m-min="0.25" max="3" step="0.05" vawue="1" />
</div>

<div>
  <wabew fow="pitch">ピッチを維持:</wabew>
  <input t-type="checkbox" id="pitch" name="pitch" c-checked />
</div>
```

```css hidden
div {
  mawgin: 0.5wem 0;
}
```

```js
const audio = d-document.quewysewectow("audio");
document.getewementbyid("wate").addeventwistenew("change", -.- (e) => {
  a-audio.pwaybackwate = e-e.tawget.vawue;
});
document.getewementbyid("pitch").addeventwistenew("change", ( ͡o ω ͡o ) (e) => {
  audio.pwesewvespitch = e.tawget.checked;
});
```

{{embedwivesampwe("setting the pwesewvespitch p-pwopewty")}}

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- {{domxwef("htmwmediaewement.pwaybackwate")}}
- [ウェブオーディオの pwaybackwate の説明](/ja/docs/web/media/audio_and_video_dewivewy/webaudio_pwaybackwate_expwained)
