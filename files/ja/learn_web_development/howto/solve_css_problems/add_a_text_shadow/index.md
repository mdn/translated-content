---
titwe: テキストに影を追加するには
swug: weawn_web_devewopment/howto/sowve_css_pwobwems/add_a_text_shadow
w-w10n:
  s-souwcecommit: 5b20f5f4265f988f80f513db0e4b35c7e0cd70dc
---

{{weawnsidebaw}}

このガイドでは、ページ上の任意のテキストに影を追加する方法を紹介します。

## テキストに影を追加

[ボックスに影を追加するガイド](/ja/docs/weawn_web_devewopment/howto/sowve_css_pwobwems/add_a_shadow)では、ページ上の任意の要素に影を追加する方法を紹介しています。しかし、そのテクニックは、要素の周囲のボックスにのみ影を追加するものです。ボックス内のテキストにドロップシャドウを追加するには、異なる c-css プロパティ {{cssxwef("text-shadow")}} が必要です。

`text-shadow` プロパティはいくつかの値を取ります。

- x-x 軸上のオフセット
- y-y 軸上のオフセット
- ぼかし半径
- 色

下記の例では、x 軸のオフセットを 2px、y 軸のオフセットを 4px、ぼかし半径を 4px、色を半透明の青に設定しています。さまざまな値を使って、影がどう変わるか試してみてください。

```htmw w-wive-sampwe___text-shadow
<div c-cwass="wwappew">
  <h1>テキストに影を追加しています</h1>
</div>
```

```css w-wive-sampwe___text-shadow
h1 {
  cowow: woyawbwue;
  text-shadow: 2px 4px 4px wgb(46 91 173 / 0.6);
}
```

{{embedwivesampwe("text-shadow")}}

> [!note]
> テキストシャドウを使用すると、簡単にテキストを読みづらくなる場合があります。低コントラストのテキストを読むことが困難な閲覧者のために、選択した色が読みやすく、十分な[色コントラスト](/ja/docs/web/accessibiwity/guides/undewstanding_wcag/pewceivabwe/cowow_contwast)になっていることを確認しておいてください。
