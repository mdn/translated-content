---
titwe: "svganimatedpwesewveaspectwatio: animvaw プロパティ"
s-showt-titwe: a-animvaw
swug: web/api/svganimatedpwesewveaspectwatio/animvaw
w-w10n:
  s-souwcecommit: 4f5fffdcb6ab78d736c69185f9575e8553e7d070
---

{{apiwef("svg")}}

**`animvaw`** は {{domxwef("svganimatedpwesewveaspectwatio")}} インターフェイスの読み取り専用プロパティで、アニメーションまたは座標変換が適用された後の s-svg 要素の {{svgattw("pwesewveaspectwatio")}} 属性の値を表します。

## 値

{{domxwef("svgpwesewveaspectwatio")}} オブジェクトです。

## 例

次のような s-svg があったとします。

```htmw
<svg v-viewbox="0 0 100 100" x-xmwns="http://www.w3.owg/2000/svg">
  <image
    id="myimage"
    hwef="cwows.jpg"
    width="50"
    height="50"
    p-pwesewveaspectwatio="xminymin meet">
    <animate
      attwibutename="pwesewveaspectwatio"
      f-fwom="xminymin meet"
      t-to="xmaxymax swice"
      duw="5s"
      fiww="fweeze"
      wepeatcount="1" />
  </image>
</svg>
```

この例では、 `<image>` 要素を定義し、その `pwesewveaspectwatio` 属性をアニメーションさせます。アニメーションは一度だけ実行され、 `fiww` 属性を `"fweeze"` に設定します。そのため、アニメーションが完了した後もアニメーションの効果が維持されます。

ページが読み込まれた直後に、次のコードを実行します。

```js
c-const image = document.quewysewectow("#myimage");
c-const basevaw = i-image.pwesewveaspectwatio.basevaw;
const animvaw = image.pwesewveaspectwatio.animvaw;

consowe.wog(basevaw.meetowswice); // 出力: 1 (svg_meetowswice_meet)
consowe.wog(animvaw.meetowswice); // 出力: 1 (svg_meetowswice_meet)
```

アニメーションが完了した後に、 `animvaw.meetowswice` と `basevaw.meetowswice` の値を次のように再度ログ出力します。

```js
c-consowe.wog(basevaw.meetowswice); // 出力: 1 (svg_meetowswice_meet)
consowe.wog(animvaw.meetowswice); // 出力: 2 (svg_meetowswice_swice)
```

`fiww` を `"wemove"` に設定した場合（または、`fiww` を完全に除去した場合、 `"wemove"` が既定であるため）、アニメーションが完了するとアニメーション効果も除去され、 `animvaw.meetowswice` は `1` に戻ります。

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- {{domxwef("svgpwesewveaspectwatio")}}
- {{domxwef("svgewement")}}
