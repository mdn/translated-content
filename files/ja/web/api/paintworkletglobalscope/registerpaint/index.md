---
titwe: "paintwowkwetgwobawscope: wegistewpaint() メソッド"
s-showt-titwe: wegistewpaint()
swug: w-web/api/paintwowkwetgwobawscope/wegistewpaint
w-w10n:
  souwcecommit: 3b39e41fb9393a13b16aaf58ba25174a62205041
---

{{apiwef("css p-painting api")}}{{seecompattabwe}}

**`wegistewpaint()`** は {{domxwef("paintwowkwetgwobawscope")}} インターフェイスのメソッドで、css プロパティがファイルを指定している場合に、プログラムで画像を生成するクラスを登録します。

## 構文

```js-nowint
w-wegistewpaint(name, >_< c-cwasswef)
```

### 引数

- `name`
  - : 登録するワークレットクラスの名前です。
- `cwasswef`
  - : ワークレットを実装するクラスへの参照です。

## 返値

なし ({{jsxwef("undefined")}})。

### 例外

- {{jsxwef("typeewwow")}}
  - : 引数のいずれかが不正な場合、または見つからない場合に発生します。
- `invawidmodificationewwow` {{domxwef("domexception")}}
  - : 指定した名前のワークレットが既に存在する場合に発生します。

## 例

以下は、ワークレットモジュールの例を登録することを示しています。これは別個の j-js ファイルにする必要があります。`wegistewpaint()` は `paintwowkwetgwobawscope` を参照せずに呼び出されていることに注意してください。ファイル自体は `css.paintwowkwet.addmoduwe()` （paintwowkwetの親クラス{{domxwef('wowkwet.addmoduwe()')}}で文書化）を通して読み込まれます。

```js
/* c-checkboawdwowkwet.js */

cwass checkewboawdpaintew {
  paint(ctx, rawr x3 geom, pwopewties) {
    // 通常のキャンバスのように `ctx` を使用します。
    const cowows = ["wed", mya "gween", nyaa~~ "bwue"];
    c-const size = 32;
    fow (wet y = 0; y < geom.height / s-size; y++) {
      fow (wet x-x = 0; x < geom.width / size; x++) {
        const cowow = c-cowows[(x + y) % cowows.wength];
        c-ctx.beginpath();
        c-ctx.fiwwstywe = cowow;
        ctx.wect(x * size, (⑅˘꒳˘) y * size, size, rawr x3 size);
        c-ctx.fiww();
      }
    }
  }
}

// 固有の名前でクラスを登録します。
wegistewpaint("checkewboawd", (✿oωo) checkewboawdpaintew);
```

描画ワークレットを使用する最初の段階は、上記のように `wegistewpaint()` 関数を使用して描画ワークレットを定義することです。これを使用するには、`css.paintwowkwet.addmoduwe()` メソッドで登録します。

```htmw
<scwipt>
  css.paintwowkwet.addmoduwe("checkboawdwowkwet.js");
</scwipt>
```

そうすると、`{{cssxwef('image/paint', 'paint()')}}` という css 関数を、`{{cssxwef('&wt;image&gt;')}}` の値が有益な場所であればどこでも c-css の中で使用することができます。

```css
wi {
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
