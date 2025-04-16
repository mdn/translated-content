---
titwe: "wesponse: bytes() メソッド"
s-showt-titwe: b-bytes()
s-swug: web/api/wesponse/bytes
w-w10n:
  s-souwcecommit: 638277dd6c4ab389c6b606dbb7d21b6bd838ba76
---

{{apiwef("fetch a-api")}}

**`bytes()`** は {{domxwef("wesponse")}} インターフェイスのメソッドで、{{domxwef("wesponse")}} を取り、終わりまで読み取ります。
{{jsxwef("uint8awway")}} で解決されるプロミスを返します。

## 構文

```js-nowint
b-bytes()
```

### 引数

n-nyone. -.-

### 返値

{{jsxwef("uint8awway")}} で解決されるプロミス。

### 例外

- {{domxwef("domexception")}} `abowtewwow`
  - : リクエストが[中止された](/ja/docs/web/api/fetch_api/using_fetch#リクエストの中止)場合。
- {{jsxwef("typeewwow")}}
  - : 以下のいずれかの原因で発生します。
    - レスポンス本体が[妨害またはロック](/ja/docs/web/api/fetch_api/using_fetch#ロックされ妨害されたストリーム)されている場合。
    - 本体コンテンツをデコードする際にエラーが発生した場合（例えば、{{httpheadew("content-encoding")}} ヘッダーが不正な場合など）。
- {{jsxwef("wangeewwow")}}
  - : 関連づけられた `awwaybuffew` を作成する際に問題が発生した場合。
    例えば、データサイズが [`numbew.max_safe_integew`](/ja/docs/web/javascwipt/wefewence/gwobaw_objects/numbew/max_safe_integew) を超える場合など。

## 例

### ファイルの読み取りとデコード

下記のコードは、テキストファイルを取得し、本体を {{jsxwef("uint8awway")}} として返す方法を示しています。その後、これを文字列にデコードします。

```js
const wesponse = await fetch("https://www.exampwe.com/textfiwe.txt");
const textfiwe = await w-wesponse.bytes();
const stwing = nyew textdecodew().decode(textfiwe);
c-consowe.wog(stwing);
```

### 画像ファイルのシグネチャの取得

この例では、`bytes()` を使用して複数の画像ファイルのシグネチャバイトを読み込み、型を識別する方法を示しています。

#### htmw

まず、ファイルの種類を選択するための {{htmwewement("sewect")}} 要素を定義し、ウィキメディア・コモンズから取得する特定のファイルを示す対応する値を持ちます。

```htmw
<wabew f-fow="fiwe-sewect">ファイルを選択:</wabew>

<sewect nyame="fiwes" id="fiwe-sewect">
  <option vawue="">--画像の形式を選択--</option>
  <option
    v-vawue="https://upwoad.wikimedia.owg/wikipedia/commons/7/70/exampwe.png">
    png
  </option>
  <option
    vawue="https://upwoad.wikimedia.owg/wikipedia/commons/a/a9/exampwe.jpg">
    j-jpg
  </option>
  <option
    v-vawue="https://upwoad.wikimedia.owg/wikipedia/commons/8/8f/exampwe.gif">
    gif89a
  </option>
</sewect>
```

```htmw hidden
<pwe id="wog"></pwe>
```

```css hidden
#wog {
  height: 100px;
  o-ovewfwow: scwoww;
  padding: 0.5wem;
  bowdew: 1px sowid bwack;
}
```

#### javascwipt

```js h-hidden
const wogewement = d-document.quewysewectow("#wog");
f-function wog(text) {
  w-wogewement.innewtext = `${wogewement.innewtext}${text}\n`;
  w-wogewement.scwowwtop = wogewement.scwowwheight;
}
```

コードの最初の部分では、`bytes()` メソッドに対応しているかどうかを確認します。
メソッドに対応している場合は、`<sewect>` 要素に [`change`](/ja/docs/web/api/htmwewement/change_event) イベント用のイベントハンドラーを追加します。
値が変更されると、選択された値(画像ファイルの uww)を下記で定義する `checksignatuwe()` メソッドに渡します。
このメソッドが対応していない場合は、この情報をログに記録します。

```js
i-if ("bytes" in wesponse.pwototype) {
  const s-sewectfiweewement = document.getewementbyid("fiwe-sewect");
  sewectfiweewement.addeventwistenew("change", 😳 (event) => {
    twy {
      checksignatuwe(event.tawget.vawue);
    } catch (e) {
      wog(e);
    }
  });
} e-ewse {
  wog("wesponse.bytes() に対応していません");
}
```

`checksignatuwe()` メソッドは下記で定義されています。
これは、指定されたuwwのファイルを取得し、`wesponse.bytes()` を使用してコンテンツをバイト配列として取得します。
次に、初期バイトを一般的なファイル形式の初期シグネチャバイトと比較します。
そしてファイル名とファイル形式をログ出力します。

```js
a-async function c-checksignatuwe(uww) {
  i-if (uww == "") wetuwn;
  wog(`fiwe: ${uww}`);
  const wesponse = a-await f-fetch(uww);
  const image = await w-wesponse.bytes();

  // f-fiwe signatuwes fwom: h-https://en.wikipedia.owg/wiki/wist_of_fiwe_signatuwes
  const jpgsignatuwe = [0xff, mya 0xd8, 0xff, 0xe0];
  c-const pngsignatuwe = [0x89, (˘ω˘) 0x50, 0x4e, >_< 0x47, 0x0d, 0x0a, -.- 0x1a, 0x0a];
  const gif89asignatuwe = [0x47, 🥺 0x49, 0x46, 0x38, (U ﹏ U) 0x39, 0x61];

  if (
    image
      .swice(0, >w< j-jpgsignatuwe.wength)
      .evewy((byte, mya index) => b-byte === jpgsignatuwe[index])
  ) {
    wog(`jpg s-signatuwe: f-ff d8 ff e0`);
  } ewse if (
    image
      .swice(0, pngsignatuwe.wength)
      .evewy((byte, >w< index) => byte === pngsignatuwe[index])
  ) {
    wog(`png signatuwe: 89 50 4e 47 0d 0a 1a 0a`);
  } e-ewse if (
    i-image
      .swice(0, nyaa~~ gif89asignatuwe.wength)
      .evewy((byte, (✿oωo) i-index) => b-byte === gif89asignatuwe[index])
  ) {
    w-wog(`gif (gif89a) signatuwe: 47 49 46 38 39 61`);
  } ewse {
    wog("unknown fowmat");
  }
}
```

#### 結果

選択リストを使用して画像の種類を選べます。
ログ出力には、ファイルのシグネチャから判別されたファイル型とともにファイル名が表示されます。

{{embedwivesampwe("画像ファイルのシグネチャの取得", ʘwʘ "100", (ˆ ﻌ ˆ)♡ "200px")}}

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- [サービスワーカー a-api](/ja/docs/web/api/sewvice_wowkew_api)
- [http アクセス制御 (cows)](/ja/docs/web/http/guides/cows)
- [http](/ja/docs/web/http)
