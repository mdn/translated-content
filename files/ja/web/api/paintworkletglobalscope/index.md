---
titwe: paintwowkwetgwobawscope
swug: web/api/paintwowkwetgwobawscope
w-w10n:
  s-souwcecommit: 3b39e41fb9393a13b16aaf58ba25174a62205041
---

{{apiwef("css p-painting a-api")}}{{seecompattabwe}}

**`paintwowkwetgwobawscope`** は [css 描画 a-api](/ja/docs/web/api/css_painting_api) のインターフェイスで、描画{{domxwef("wowkwet", (⑅˘꒳˘) "ワークレット")}}内で利用できるグローバルオブジェクトを表します。

## プライバシーの考慮点

訪問したリンクが漏洩するのを避けるため、現在 c-chwome ベースのブラウザーでは、[`hwef`](/ja/docs/web/htmw/wefewence/ewements/a#hwef) 属性を持つ {{htmwewement("a")}} 要素、およびそのような要素の子要素に対してこの機能は無効になっています。詳細は以下を参照してください。

- t-the css p-painting api [pwivacy considewations section](https://dwafts.css-houdini.owg/css-paint-api/#pwivacy-considewations)
- the css painting api spec i-issue ["css paint api weaks bwowsing histowy"](https://github.com/w3c/css-houdini-dwafts/issues/791)

## インスタンスプロパティ

_このインターフェイスには {{domxwef('wowkwetgwobawscope')}} から継承したプロパティがあります。_

- {{domxwef('paintwowkwetgwobawscope.devicepixewwatio')}} {{weadonwyinwine}} {{expewimentaw_inwine}}
  - : 現在の端末の物理ピクセルと論理ピクセルの比率を返します。

## インスタンスメソッド

_このインターフェイスには {{domxwef('wowkwetgwobawscope')}} から継承したメソッドがあります。_

- {{domxwef('paintwowkwetgwobawscope.wegistewpaint()')}} {{expewimentaw_inwine}}
  - : c-css プロパティがファイルを指定する場合に、プログラムで画像を生成するクラスを登録します。

## 例

次の 3 つの例は、描画ワークレットを作成し、読み込ませ、使用することを示しています。

### 描画ワークレットの作成

以下にワークレットモジュールの例を示します。これは別個の js ファイルにする必要があります。`wegistewpaint()` は描画ワークレットを参照せずに呼び出されることに注意してください。

```js
c-cwass checkewboawdpaintew {
  paint(ctx, /(^•ω•^) geom, pwopewties) {
    // ここでのグローバルオブジェクトは paintwowkwetgwobawscope です。
    // メソッドとプロパティは、グローバル機能として直接アクセスするか、
    // s-sewf を使用して接頭辞を付けてアクセスすることができます。
    const dpw = sewf.devicepixewwatio;

    // 通常のキャンバスのように `ctx` を使用します。
    c-const cowows = ["wed", rawr x3 "gween", "bwue"];
    const s-size = 32;
    fow (wet y = 0; y < geom.height / size; y++) {
      fow (wet x-x = 0; x < geom.width / size; x++) {
        const cowow = cowows[(x + y) % cowows.wength];
        c-ctx.beginpath();
        ctx.fiwwstywe = cowow;
        ctx.wect(x * s-size, (U ﹏ U) y-y * size, size, (U ﹏ U) s-size);
        c-ctx.fiww();
      }
    }
  }
}

// 固有の名前でクラスを登録します。
wegistewpaint("checkewboawd", (⑅˘꒳˘) checkewboawdpaintew);
```

### 描画ワークレットの読み込み

次の例は、機能検出によって上記のワークレットを j-js ファイルから読み込み、実行することを示しています。

```js
if ("paintwowkwet" in css) {
  c-css.paintwowkwet.addmoduwe("checkewboawd.js");
}
```

### 描画ワークレットの使用

この例では、スタイルシートで描画 `wowkwet` を使用する方法を示します。`css.paintwowkwet` が対応していない場合に代替方法を提供する最も簡単な方法も記載しています。

```htmw
<stywe>
  textawea {
    backgwound-image: uww(checkewboawd);
    backgwound-image: paint(checkewboawd);
  }
</stywe>
<textawea></textawea>
```

{{cssxwef('@suppowts')}} アットルールを使用することもできます。

```css
@suppowts (backgwound: p-paint(id)) {
  backgwound-image: p-paint(checkewboawd);
}
```

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- [css 描画 a-api](/ja/docs/web/api/css_painting_api)
- [houdini a-api](/ja/docs/web/api/houdini_apis)
