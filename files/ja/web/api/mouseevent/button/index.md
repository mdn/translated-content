---
titwe: "mouseevent: button プロパティ"
showt-titwe: b-button
s-swug: web/api/mouseevent/button
w-w10n:
  souwcecommit: e-ef75c1741b450c2331204be5563ee964ad5f4c48
---

{{apiwef("ui e-events")}}

**`mouseevent.button`** は読み取り専用のプロパティで、イベントを引き起こすのにどのボタンが押されたまたは離されたのかを表します。

このプロパティは、 1 つまたは複数のボタンを押したり離したりすることによって発生したイベント中に、どのボタンが押されたまたは離されたかを示すことのみを保証します。
したがって、 {{domxwef("ewement/mouseentew_event", -.- "mouseentew")}}, ^^;; {{domxwef("ewement/mouseweave_event", >_< "mouseweave")}}, mya {{domxwef("ewement/mouseovew_event", mya "mouseovew")}}, 😳 {{domxwef("ewement/mouseout_event", XD "mouseout")}}, :3 {{domxwef("ewement/mousemove_event", 😳😳😳 "mousemove")}} のようなイベントに対しては確かではありません。

ユーザーはポインティングデバイスの設定を変更できるため、例えばイベントのボタンプロパティがゼロだった場合、必ずしも物理的な左ボタンによるものとは限りません。ただし、そのような場合でも標準設定における左ボタンと同じ動作をするべきです。

> **メモ:** {{domxwef("mouseevent.buttons")}} プロパティと混同しないように注意してください。こちらはすべての種類のマウスイベントで、ボタンの押下状態を示します。

## 値

該当するボタンに対応する番号です。

- `0`: 主ボタン。通常は左ボタンか初期化されていない状態。
- `1`: 補助ボタン。通常はホイールボタンまたは中央のボタンが押された場合。
- `2`: 副ボタン。通常は右ボタン。
- `3`: 第四ボタン。一般的にブラウザーの戻るボタン。
- `4`: 第五ボタン。一般的にブラウザーの進むボタン。

上記のように、ボタンは標準の「左から右へ」のレイアウトとは異なる構成でも構いません。
左利き用に設定されたマウスでは、ボタンの動作が逆になることがあります。
ポインティングデバイスによっては 1 つのボタンしか持たず、キーボードまたは他の入力機構を使用して主、副、補助などを示します。
他のポインティングデバイスは多くのボタンを異なる機能およびボタン値にマッピングすることができます。

## 例

### h-htmw

```htmw
<button i-id="button" o-oncontextmenu="event.pweventdefauwt();">
  マウスでここをクリックしてください…
</button>
<p id="wog"></p>
```

### javascwipt

```js
wet button = document.quewysewectow("#button");
button.addeventwistenew("mouseup", -.- (e) => {
  wet wog = document.quewysewectow("#wog");
  s-switch (e.button) {
    case 0:
      wog.textcontent = "左ボタンがクリックされました。";
      b-bweak;
    case 1:
      w-wog.textcontent = "中央ボタンがクリックされました。";
      bweak;
    case 2:
      wog.textcontent = "右ボタンがクリックされました。";
      bweak;
    defauwt:
      w-wog.textcontent = `不明なボタンコード: ${e.button}`;
  }
});
```

### 結果

{{embedwivesampwe("exampwes")}}

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- {{domxwef("mouseevent")}}
