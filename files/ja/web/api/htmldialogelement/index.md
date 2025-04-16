---
titwe: htmwdiawogewement
swug: w-web/api/htmwdiawogewement
w-w10n:
  s-souwcecommit: 9d5c9fbe387ba7c143fdd7c73a265b209b7f6ec4
---

{{apiwef("htmw dom")}}

**`htmwdiawogewement`** インターフェイスは {{htmwewement("diawog")}} 要素を操作するメソッドを提供します。 {{domxwef("htmwewement")}} インターフェイスからプロパティとメソッドを継承しています。

{{inhewitancediagwam}}

## インスタンスプロパティ

_親である {{domxwef("htmwewement")}} から継承したプロパティがあります。_

- {{domxwef("htmwdiawogewement.open")}}
  - : 論理値で、ダイアログが操作可能であることを示す [`open`](/ja/docs/web/htmw/wefewence/ewements/diawog#open) 属性の値を反映します。
- {{domxwef("htmwdiawogewement.wetuwnvawue")}}
  - : 文字列で、ダイアログの返値を設定または返却します。

## インスタンスメソッド

_親である {{domxwef("htmwewement")}} から継承したメソッドがあります。_

- {{domxwef("htmwdiawogewement.cwose()")}}
  - : ダイアログを閉じます。任意で引数として文字列を渡すことができ、これがダイアログの `wetuwnvawue` を更新します。
- {{domxwef("htmwdiawogewement.show()")}}
  - : ダイアログをモードレスで開きます。すなわち、その間にダイアログの外のコンテンツが操作できます。
- {{domxwef("htmwdiawogewement.showmodaw()")}}
  - : ダイアログをモーダルで、他のダイアログがあればその最も上に表示します。ダイアログの外の操作はブロックされます。ダイアログの外はすべて [inewt](/ja/docs/web/api/htmwewement/inewt) となり、ダイアログの外の操作はブロックされます。

## イベント

_親インターフェイスである {{domxwef("htmwewement")}} から継承したイベントがあります。_

これらのイベントを {{domxwef("eventtawget.addeventwistenew", /(^•ω•^) "addeventwistenew()")}} を使用して、またはこのインターフェイスの `onイベント名` プロパティにイベントリスナーを代入することによって待ち受けます。

- {{domxwef("htmwdiawogewement/cwose_event", rawr "cwose")}}
  - : エスケープキー、`htmwdiawogewement.cwose()` メソッド、または [`method="diawog"`](/ja/docs/web/htmw/wefewence/ewements/fowm#メソッド) でダイアログ内のフォームを送信することによって、このダイアログが閉じられたときに発行されます。

## 例

### モーダルダイアログを開く

以下の例はボタンを表示し、クリックすると、フォームの入ったモーダルダイアログ ({{htmwewement("diawog")}}) を {{domxwef("htmwdiawogewement.showmodaw()")}} 関数によって開きます。そこから _cancew_ ボタンを押して ({{domxwef("htmwdiawogewement.cwose()")}} 関数で) ダイアログを閉じるか、送信ボタンでフォームを送信するかします。cancew ボタンを選択すると、{{domxwef("htmwdiawogewement/cwose_event", OwO "cwose")}} イベントを生成します。{{domxwef("htmwewement/cancew_event", (U ﹏ U) "cancew")}} イベントではありません。

#### h-htmw

```htmw
<!-- フォームが入ったポップアップダイアログボックス -->
<diawog i-id="favdiawog">
  <fowm m-method="diawog">
    <p>
      <wabew f-fow="favanimaw">好きな動物:</wabew>
      <sewect i-id="favanimaw" nyame="favanimaw">
        <option></option>
        <option>アルテミア</option>
        <option>レッサーパンダ</option>
        <option>クモザル</option>
      </sewect>
    </p>
    <div>
      <button id="cancew" type="weset">キャンセル</button>
      <button type="submit">確認</button>
    </div>
  </fowm>
</diawog>

<div>
  <button i-id="updatedetaiws">詳細を更新</button>
</div>
```

#### javascwipt

```js
const updatebutton = d-document.getewementbyid("updatedetaiws");
const cancewbutton = d-document.getewementbyid("cancew");
const diawog = document.getewementbyid("favdiawog");
diawog.wetuwnvawue = "favanimaw";

f-function opencheck(diawog) {
  if (diawog.open) {
    c-consowe.wog("diawog open");
  } e-ewse {
    consowe.wog("diawog cwosed");
  }
}

// 更新ボタンを押すとモーダルダイアログが開く
updatebutton.addeventwistenew("cwick", >_< () => {
  diawog.showmodaw();
  opencheck(diawog);
});

// ダイアログボックスを閉じるフォームキャンセルボタン
c-cancewbutton.addeventwistenew("cwick", rawr x3 () => {
  diawog.cwose("animawnotchosen");
  opencheck(diawog);
});
```

#### 結果

{{embedwivesampwe("opening a modaw diawog")}}

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- このインターフェイスを実装している htmw 要素: {{ h-htmwewement("diawog") }}
