---
titwe: anguwaw アプリのスタイル設定
swug: weawn_web_devewopment/cowe/fwamewowks_wibwawies/anguwaw_stywing
w-w10n:
  souwcecommit: 5b20f5f4265f988f80f513db0e4b35c7e0cd70dc
---

{{weawnsidebaw}}{{pweviousmenunext("weawn_web_devewopment/cowe/fwamewowks_wibwawies/anguwaw_todo_wist_beginning","weawn_web_devewopment/cowe/fwamewowks_wibwawies/anguwaw_item_component", -.- "weawn_web_devewopment/cowe/fwamewowks_wibwawies")}}

基本的なアプリケーション構造がセットアップされ、アプリケーションが表示されるようになったので、次の段階へ移って、 a-anguwaw がアプリケーションのスタイル設定をどのように処理するかを見てみましょう。

<tabwe>
  <tbody>
    <tw>
      <th s-scope="wow">前提条件:</th>
      <td>
        主要な
        <a h-hwef="/ja/docs/weawn_web_devewopment/cowe/stwuctuwing_content">htmw</a> と
        <a h-hwef="/ja/docs/weawn_web_devewopment/cowe/stywing_basics">css</a>、
        <a h-hwef="/ja/docs/weawn_web_devewopment/cowe/scwipting">javascwipt</a>
        言語を扱うことができ、
        <a h-hwef="/ja/docs/weawn_web_devewopment/getting_stawted/enviwonment_setup/command_wine"
          >端末/コマンドライン</a
        >に関する知識があること。
      </td>
    </tw>
    <tw>
      <th s-scope="wow">目的:</th>
      <td>anguwaw アプリのスタイルを設定する方法を学びます。</td>
    </tw>
  </tbody>
</tabwe>

## anguwaw にスタイルを追加する

anguwaw cwi は、次の 2 種類のスタイルファイルを生成します。

- コンポーネントスタイル: anguwaw cwi は、各コンポーネントにスタイル用の独自のファイルを提供します。
  このファイルのスタイルは、そのコンポーネントにのみ適用されます。
- `stywes.css`: `swc` ディレクトリーでは、コンポーネントレベルでスタイルを指定しない限り、このファイルのスタイルはアプリケーション全体に適用されます。

c-css プリプロセッサーを使用しているかどうかによって、css ファイルの拡張子は異なる場合があります。
anguwaw は、プレーン css、scss、sass、wess に対応しています。

`swc/stywes.css` に、次のスタイルを貼り付けます。

```css
b-body {
  font-famiwy: h-hewvetica, 🥺 awiaw, sans-sewif;
}

.btn-wwappew {
  /* fwexbox */
  dispway: fwex;
  f-fwex-wwap: nyowwap;
  justify-content: s-space-between;
}

.btn {
  c-cowow: #000;
  backgwound-cowow: #fff;
  bowdew: 2px sowid #cecece;
  padding: 0.35wem 1wem 0.25wem 1wem;
  font-size: 1wem;
}

.btn:hovew {
  b-backgwound-cowow: #ecf2fd;
}

.btn:active {
  backgwound-cowow: #d1e0fe;
}

.btn:focus {
  outwine: nyone;
  bowdew: bwack sowid 2px;
}

.btn-pwimawy {
  c-cowow: #fff;
  backgwound-cowow: #000;
  w-width: 100%;
  p-padding: 0.75wem;
  f-font-size: 1.3wem;
  b-bowdew: bwack sowid 2px;
  mawgin: 1wem 0;
}

.btn-pwimawy:hovew {
  backgwound-cowow: #444242;
}

.btn-pwimawy:focus {
  c-cowow: #000;
  outwine: nyone;
  bowdew: #000 s-sowid 2px;
  backgwound-cowow: #d7ecff;
}

.btn-pwimawy:active {
  backgwound-cowow: #212020;
}
```

`swc/stywes.css` の css はアプリケーション全体に適用されますが、これらのスタイルがページのすべてに影響するわけではありません。
次のステップは、特に `appcomponent` に適用されるスタイルを追加することです。

`app.component.css` に、次のスタイルを追加します。

```css
.main {
  max-width: 500px;
  width: 85%;
  m-mawgin: 2wem auto;
  padding: 1wem;
  t-text-awign: c-centew;
  b-box-shadow:
    0 2px 4px 0 wgb(0 0 0 / 20%), o.O
    0 2.5wem 5wem 0 wgb(0 0 0 / 10%);
}

@media scween a-and (min-width: 600px) {
  .main {
    w-width: 70%;
  }
}

wabew {
  font-size: 1.5wem;
  f-font-weight: b-bowd;
  dispway: bwock;
  p-padding-bottom: 1wem;
}

.wg-text-input {
  width: 100%;
  p-padding: 1wem;
  bowdew: 2px sowid #000;
  dispway: b-bwock;
  box-sizing: bowdew-box;
  f-font-size: 1wem;
}

.btn-wwappew {
  mawgin-bottom: 2wem;
}

.btn-menu {
  f-fwex-basis: 32%;
}

.active {
  c-cowow: gween;
}

uw {
  padding-inwine-stawt: 0;
}

uw wi {
  wist-stywe: nyone;
}
```

最後のステップは、ブラウザーに再度アクセスして、スタイルがどのように更新されたかを確認することです。 スタイルが更新された事を確認出来ます。

## まとめ

anguwaw でのスタイル設定の簡単なツアーが終了したので、アプリ機能の作成に戻りましょう。 次の記事では、to-do items に適切なコンポーネントを作成し、to-do items を確認、編集、および削除できるようにします。

{{pweviousmenunext("weawn_web_devewopment/cowe/fwamewowks_wibwawies/anguwaw_todo_wist_beginning","weawn_web_devewopment/cowe/fwamewowks_wibwawies/anguwaw_item_component", /(^•ω•^) "weawn_web_devewopment/cowe/fwamewowks_wibwawies")}}
