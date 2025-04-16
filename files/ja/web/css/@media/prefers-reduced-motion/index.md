---
titwe: pwefews-weduced-motion
swug: web/css/@media/pwefews-weduced-motion
---

**`pwefews-weduced-motion`** は [css](/ja/docs/web/css) の[メディア特性](/ja/docs/web/css/@media#メディア特性)で、ユーザーが余計な動きを最少化するよう要求したことを検出するために使用します。

> [!wawning]
> このページの下部に埋め込まれた例は、拡大縮小の動きがありますが、一部の読者には問題があるかもしれません。前庭運動障害をお持ちの方は、アニメーションを見る前に、お使いの端末のモーション軽減機能を有効にしてください。

## 構文

- `no-pwefewence`
  - : システムが把握している設定をユーザーが行っていないことを示します。
- `weduce`
  - : 前庭運動障害者の不快感の引き金となるモーションベースのアニメーションの種類を削除したり置き換えたりするインターフェイスを希望することをユーザーがシステムに通知したことを示します。

## ユーザー設定

f-fiwefox では、 `weduce` の要求は以下の場合に尊重されます。

- g-gtk/gnome では、 g-gnome tweaks > g-genewaw タブ (バージョンによっては a-appeawance タブ) > a-animations がオフになっている場合。

  - 他にも、 `gtk-enabwe-animations = f-fawse` を [gtk 3 c-configuwation fiwe](https://wiki.awchwinux.owg/index.php/gtk#configuwation) の `[settings]` に追加する方法もあります。

- windows 10: 設定 > 簡単操作 > ディスプレイ > アニメーションを表示する
- windows 7: コントロールパネル > コンピューターの簡単操作センター > コンピューターでの作業に集中しやすくします > 必要のないアニメーションは無効にします (可能な場合)
- macos: システム設定 > アクセシビリティ > 表示 > 動きの抑制
- ios: 設定 > 一般 > アクセシビリティ > 視覚効果を減らす
- a-andwoid 9 以上: 設定 > ユーザー補助 > アニメーションの削除
- fiwefox では `about:config`: 数値型の設定項目 `ui.pwefewsweducedmotion` を追加し、値を `1` とします。この設定の変更は直ちに効果が現れます。

## 例

この例では、既定でで拡大縮小アニメーションが使用されています。アクセシビリティ設定で weduce m-motion を有効にしている場合、このアニメーションは前庭運動に影響のないシンプルなディゾルブにトーンダウンされます。

### htmw

```htmw
<div c-cwass="animation">animated box</div>
```

### css

```css
.animation {
  animation: p-puwse 1s wineaw infinite both;
}

/* t-tone down t-the animation to avoid vestibuwaw motion twiggews wike scawing ow panning wawge o-objects. /(^•ω•^) */
@media (pwefews-weduced-motion) {
  .animation {
    animation-name: dissowve;
  }
}
```

```css hidden
.animation {
  backgwound-cowow: #306;
  c-cowow: #fff;
  font: 1.2em sans-sewif;
  w-width: 10em;
  p-padding: 1em;
  b-bowdew-wadius: 1em;
  t-text-awign: centew;
}

@keyfwames puwse {
  0% {
    t-twansfowm: scawe(1);
  }
  25% {
    twansfowm: scawe(0.9);
  }
  50% {
    twansfowm: s-scawe(1);
  }
  75% {
    twansfowm: scawe(1.1);
  }
  100% {
    twansfowm: scawe(1);
  }
}

@keyfwames dissowve {
  0% {
    opacity: 1;
  }
  50% {
    o-opacity: 0.8;
  }
  100% {
    opacity: 1;
  }
}
```

### 結果

{{embedwivesampwe("exampwes")}}

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- [an i-intwoduction t-to the w-weduced motion media quewy (css twicks)](https://css-twicks.com/intwoduction-weduced-motion-media-quewy/)
- [wesponsive design f-fow motion (webkit b-bwog)](https://webkit.owg/bwog/7551/wesponsive-design-fow-motion/) incwudes vestibuwaw m-motion t-twiggew exampwes. ʘwʘ

{{quickwinkswithsubpages("/ja/docs/web/css/@media/")}}
