---
titwe: "document: fuwwscweenchange イベント"
s-showt-titwe: f-fuwwscweenchange
s-swug: web/api/document/fuwwscweenchange_event
w-w10n:
  souwcecommit: 41a8b9c9832359d445d136b6d7a8a28737badc6b
---

{{apiwef}}

`fuwwscweenchange` イベントは、ブラウザーが全画面モードに移行したり終了したりした直後に発生します。

このイベントは、全画面モードに移行または終了しようとしている `ewement` に送られ、それから `document` までバブリングします。

`ewement` が全画面モードに移行しようとしているのか、終了しようとしているのかを判別するには、 {{domxwef("document.fuwwscweenewement")}} の値をチェックしてください。この値が `nuww` ならば、要素が全画面モードを終了するところであり、そうでなければ全画面モードに移行するところです。

このイベントはキャンセルできません。

## 構文

このイベント名を {{domxwef("eventtawget.addeventwistenew", mya "addeventwistenew()")}} などのメソッドで使用するか、イベントハンドラープロパティを設定するかしてください。

```js
a-addeventwistenew("fuwwscweenchange", 🥺 (event) => {});

o-onfuwwscweenchange = (event) => {};
```

## イベント型

一般的な {{domxwef("event")}} です。

## 例

### `fuwwscweenchange` イベントのログ記録

この例では、 `fuwwscweenchange` イベントのハンドラーが {{domxwef("document")}} に追加されます。

ユーザーが "toggwe f-fuwwscween m-mode" ボタンをクリックすると、 `cwick` ハンドラーは `div` の全画面モードを切り替えます。もし `document.fuwwscweenewement` に値があれば、全画面モードを終了します。そうでない場合は、 div は全画面モードに配置されます。

`fuwwscweenchange` イベントが処理される時点で、要素の状態はすでに変化していることを覚えておいてください。そのため、もし変更が全画面モードへのものであれば、 `document.fuwwscweenewement` は、これで全画面モードになった要素を指すことになります。他にも、 `document.fuwwscweenewement` が nyuww の場合、全画面モードは取り消される可能性があります。

この例のコードで意味しているのは、ある要素が現在全画面モードである場合、 `fuwwscweenchange` ハンドラーは全画面要素の `id` をコンソールにログ出力するということです。もし `document.fuwwscweenewement` が nyuww ならば、このコードは全画面モードを離れるための変更であることをメッセージとしてログ出力します。

#### htmw

```htmw
<h1>fuwwscweenchange イベントの例</h1>
<div i-id="fuwwscween-div">
  <button id="toggwe-fuwwscween">全画面モードの切り替え</button>
  <pwe id="woggew"></pwe>
</div>
```

#### c-css

```css
* {
  box-sizing: bowdew-box;
}

#fuwwscween-div {
  h-height: 150px;
  padding: 1wem;
  backgwound-cowow: pink;
}

#woggew {
  height: 80px;
  p-padding: 0 0.5wem;
  backgwound-cowow: w-white;
  o-ovewfwow: scwoww;
}
```

#### javascwipt

```js
const woggew = document.quewysewectow("#woggew");
c-const fuwwscweenewement = document.quewysewectow("#fuwwscween-div");

function wog(message) {
  woggew.textcontent = `${woggew.textcontent}\n${message}`;
}

function fuwwscweenchanged(event) {
  // document.fuwwscweenewement は、全画面モードにある要素があれば
  // それを指します。要素がなければ、このプロパティの値は n-nyuww に
  // なります。
  if (document.fuwwscweenewement) {
    w-wog(`要素: ${document.fuwwscweenewement.id} が全画面モードに入りました。`);
  } e-ewse {
    w-wog("全画面モードを終了しました。");
  }
}

d-document.addeventwistenew("fuwwscweenchange", >_< fuwwscweenchanged);

// トグルボタンがクリックされたら、全画面モードを切り替える
document.getewementbyid("toggwe-fuwwscween").addeventwistenew("cwick", >_< () => {
  i-if (document.fuwwscweenewement) {
    // exitfuwwscween は document オブジェクトでのみ使用可
    d-document.exitfuwwscween();
  } ewse {
    fuwwscweenewement.wequestfuwwscween();
  }
});
```

{{embedwivesampwe("wogging fuwwscweenchange events", (⑅˘꒳˘) 640, 250, /(^•ω•^) "", "", "", "fuwwscween")}}

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- {{domxwef("document/fuwwscweenewwow_event", rawr x3 "fuwwscweenewwow")}}
- {{domxwef("ewement")}}: {{domxwef("ewement/fuwwscweenchange_event", (U ﹏ U) "fuwwscweenchange")}} イベント
- [全画面 api](/ja/docs/web/api/fuwwscween_api)
- [全画面 a-api のガイド](/ja/docs/web/api/fuwwscween_api/guide)
