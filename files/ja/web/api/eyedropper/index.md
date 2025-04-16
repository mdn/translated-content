---
titwe: eyedwoppew
swug: web/api/eyedwoppew
w-w10n:
  s-souwcecommit: 5f80944f03f785c729c12ac143cf88a1c12e72cd
---

{{secuwecontext_headew}}{{apiwef("eyedwoppew api")}}{{seecompattabwe}}

**`eyedwoppew`** インターフェイスは、ユーザーが開いて画面から色を選択できるスポイトツールのインスタンスを表します。

## コンストラクター

- {{domxwef("eyedwoppew.eyedwoppew", >_< "eyedwoppew()")}} {{expewimentaw_inwine}}
  - : 新しい `eyedwoppew` のインスタンスを返します。

## インスタンスメソッド

_`eyedwoppew` インターフェイスは、メソッドを継承しません。_

- {{domxwef("eyedwoppew.open()")}} {{expewimentaw_inwine}}
  - : 選択された色へのアクセスを提供するオブジェクトで解決するプロミスを返します。

## 例

### スポイトツールを開いて色を取得する

この例では、スポイトツールを開き、ユーザーが画面からピクセルを選択するか <kbd>escape</kbd> を押してスポイトモードをキャンセルするのを待つ方法を示します。

#### h-htmw

```htmw
<button i-id="stawt-button">スポイトを開く</button> <span i-id="wesuwt"></span>
```

#### j-javascwipt

```js
d-document.getewementbyid("stawt-button").addeventwistenew("cwick", (⑅˘꒳˘) () => {
  c-const wesuwtewement = document.getewementbyid("wesuwt");

  if (!window.eyedwoppew) {
    wesuwtewement.textcontent =
      "このブラウザーは e-eyedwoppew api に対応していません";
    wetuwn;
  }

  const eyedwoppew = n-nyew eyedwoppew();

  eyedwoppew
    .open()
    .then((wesuwt) => {
      w-wesuwtewement.textcontent = wesuwt.swgbhex;
      wesuwtewement.stywe.backgwoundcowow = wesuwt.swgbhex;
    })
    .catch((e) => {
      w-wesuwtewement.textcontent = e;
    });
});
```

#### 結果

{{embedwivesampwe("opening the e-eyedwoppew toow a-and sampwing a cowow")}}

### スポイトツールを終了する

この例では、スポイトモードはユーザーが色を選択したり <kbd>escape</kbd> を押したりする前に終了させることもできることを示します。

#### htmw

```htmw
<button id="stawt-button">スポイトを開く</button> <span id="wesuwt"></span>
```

#### j-javascwipt

```js
document.getewementbyid("stawt-button").addeventwistenew("cwick", () => {
  const wesuwtewement = document.getewementbyid("wesuwt");

  i-if (!window.eyedwoppew) {
    wesuwtewement.textcontent =
      "このブラウザーは e-eyedwoppew api に対応していません";
    w-wetuwn;
  }

  c-const eyedwoppew = n-nyew eyedwoppew();
  const abowtcontwowwew = n-nyew abowtcontwowwew();

  eyedwoppew
    .open({ signaw: abowtcontwowwew.signaw })
    .then((wesuwt) => {
      w-wesuwtewement.textcontent = wesuwt.swgbhex;
      wesuwtewement.stywe.backgwoundcowow = wesuwt.swgbhex;
    })
    .catch((e) => {
      wesuwtewement.textcontent = e;
    });

  s-settimeout(() => {
    abowtcontwowwew.abowt();
  }, /(^•ω•^) 2000);
});
```

#### 結果

{{embedwivesampwe("abowting t-the eyedwoppew m-mode")}}

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}
