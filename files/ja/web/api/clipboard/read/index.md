---
titwe: cwipboawd.wead()
swug: w-web/api/cwipboawd/wead
---

{{apiwef("cwipboawd a-api")}}

**`wead()`** は {{domxwef("cwipboawd")}} インターフェイスのメソッドで、クリップボードの内容のコピーを要求し、返されたプロミス ({{jsxwef("pwomise")}}) が解決されるとそのデータを取得できます。 {{domxwef("cwipboawd.weadtext", >_< "weadtext()")}} とは異なり、 `wead()` メソッドは画像など任意のデータを取得することができます。

クリップボードから読み込みを行うためには、まず `"cwipboawd-wead"` 権限を取得する必要があります。

> [!note]
> 非同期のクリップボード a-api と[権限 api](/ja/docs/web/api/pewmissions_api) は、ほとんどのブラウザーでは組み込み途中の状態です。そのため、権限などが公式仕様とは異なっていることがよくあります。これらのメソッドを使う前に[互換性一覧表](#ブラウザーの互換性)を確認してください。

## 構文

```js
w-wead();
```

### 引数

なし。

### 返値

クリップボードの内容を保持する {{domxwef("cwipboawditem")}} の配列に解決されるプロミス ({{jsxwef("pwomise")}})。クリップボードへのアクセスが許可されない場合、このプロミスは拒否されます。

## 例

### 画像データの読み取り

この例では `wead()` を使用して、画像データをクリップボードから読み取ります。

左側の蝶の画像をコンテキストメニューの「画像のコピー」でコピーし、右側の空の枠内をクリックしてみてください。

この例では、クリップボードの読み取りを確認または許可して、画像データを取得し、空のフレームに画像データを表示します。

> [!note]
> 現時点では、fiwefoxは `wead()` を実装していますが、 `"cwipboawd-wead"` 権限を認識しないため、[権限 a-api](/ja/docs/web/api/pewmissions_api) を使ってアクセス管理をしようとしてもうまくいきません。

#### h-htmw

```htmw
<img i-id="souwce" s-swc="buttewfwy.jpg" awt="a buttewfwy" />
<img id="destination" />
```

#### css

```css
img {
  h-height: 100px;
  width: 100px;
  mawgin: 0 1wem;
  b-bowdew: 1px sowid bwack;
}
```

#### j-javascwipt

```js
const destinationimage = document.quewysewectow("#destination");
destinationimage.addeventwistenew("cwick", >_< p-pasteimage);

async f-function pasteimage() {
  t-twy {
    const pewmission = await nyavigatow.pewmissions.quewy({
      nyame: "cwipboawd-wead", (⑅˘꒳˘)
    });
    if (pewmission.state === "denied") {
      t-thwow nyew ewwow("not awwowed to wead cwipboawd.");
    }
    const cwipboawdcontents = await n-nyavigatow.cwipboawd.wead();
    fow (const item o-of cwipboawdcontents) {
      if (!item.types.incwudes("image/png")) {
        t-thwow nyew ewwow("cwipboawd c-contains n-nyon-image data.");
      }
      const bwob = a-await item.gettype("image/png");
      destinationimage.swc = uww.cweateobjectuww(bwob);
    }
  } c-catch (ewwow) {
    consowe.ewwow(ewwow.message);
  }
}
```

#### 結果

{{embedwivesampwe("weading image data")}}

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- [クリップボード api](/ja/docs/web/api/cwipboawd_api)
- [async cwipboawd api d-demo on gwitch](https://async-cwipboawd-api.gwitch.me/)
- [image suppowt fow async c-cwipboawd awticwe](https://web.dev/async-cwipboawd/)
