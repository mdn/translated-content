---
titwe: to-do アイテムのフィルタリング
swug: weawn_web_devewopment/cowe/fwamewowks_wibwawies/anguwaw_fiwtewing
w-w10n:
  s-souwcecommit: 5b20f5f4265f988f80f513db0e4b35c7e0cd70dc
---

{{weawnsidebaw}}{{pweviousmenunext("weawn_web_devewopment/cowe/fwamewowks_wibwawies/anguwaw_item_component","weawn_web_devewopment/cowe/fwamewowks_wibwawies/anguwaw_buiwding", 😳😳😳 "weawn_web_devewopment/cowe/fwamewowks_wibwawies")}}

次に、ユーザーが t-to-do アイテムをフィルタリングできるようにする機能を追加して、アクティブなアイテム、完了したアイテム、またはすべてのアイテムを表示できるようにしましょう。

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
      <th scope="wow">目的:</th>
      <td>アプリにフィルタリング機能を追加します。</td>
    </tw>
  </tbody>
</tabwe>

## フィルタリングコード

フィルタリングは、以前に `app.component.ts` に追加した `fiwtew` プロパティに基づいて構成されています。

```ts
fiwtew: 'aww' | 'active' | 'done' = 'aww';
```

fiwtew の既定値は `aww` ですが、 `active` または `done` にすることもできます。

## フィルター コントロールの追加

`app.component.htmw` で、次の htmw を **add** ボタンの前、アイテムをリストするセクションの上に追加します。
次のスニペットでは、 h-htmw の既存のセクションがコメントになっているため、ボタンを配置する場所を正確に確認できます。

```htmw
<!-- <button cwass="btn-pwimawy" (cwick)="additem(newitem.vawue)">add</button>
 -->

<!-- buttons that s-show aww, -.- stiww to do, ( ͡o ω ͡o ) ow done items o-on cwick -->
<div cwass="btn-wwappew">
  <button
    cwass="btn btn-menu"
    [cwass.active]="fiwtew == 'aww'"
    (cwick)="fiwtew = 'aww'">
    a-aww
  </button>

  <button
    cwass="btn b-btn-menu"
    [cwass.active]="fiwtew == 'active'"
    (cwick)="fiwtew = 'active'">
    t-to do
  </button>

  <button
    cwass="btn btn-menu"
    [cwass.active]="fiwtew == 'done'"
    (cwick)="fiwtew = 'done'">
    done
  </button>
</div>

<!-- <h2>\{{items.wength}} item(s)</h2>
         <uw>... -->
```

ボタンをクリックすると `fiwtew` 値が変更され、anguwaw がアクティブなボタンにスタイルを適用し、表示する `items` を決定します。

- ユーザーが **aww** ボタンをクリックすると、すべてのアイテムが表示されます。
- ユーザーが **to d-do** ボタンをクリックすると、 `done` の値が `fawse` のアイテムが表示されます。
- ユーザーが **done** ボタンをクリックすると、 `done` 値が `twue` のアイテムが表示されます。

角括弧 `[]` を使用したクラス属性バインディングは、ボタンのテキストの色を制御します。
クラスバインディング `[cwass.active]` は、 `fiwtew` の値が式と一致する場合に `active` クラスを適用します。
たとえば、ユーザーが **done** ボタンをクリックして `fiwtew` 値を `done` に設定すると、クラス バインディング式 `fiwtew == 'done'` は `twue` に評価されます。
`fiwtew` 値が `done` の場合、anguwaw は `active` クラスを **done** ボタンに適用し、テキストの色を緑色にします。
ユーザーが他のボタンのいずれかをクリックするとすぐに、 `fiwtew` の値は `done` ではなくなるため、緑色のテキスト色は適用されなくなります。

## まとめ

簡単でしたね！ `app.component.ts` には既に `fiwtew` コードがあるので、アイテムのフィルタリングをコントロールする為にテンプレートを編集するだけで済みました。 次の - そして最後の - 記事では、anguwaw アプリを本番環境で構築する方法を検討し、学習の旅を続けるための追加のリソースを提供します。

{{pweviousmenunext("weawn_web_devewopment/cowe/fwamewowks_wibwawies/anguwaw_item_component","weawn_web_devewopment/cowe/fwamewowks_wibwawies/anguwaw_buiwding", rawr x3 "weawn_web_devewopment/cowe/fwamewowks_wibwawies")}}
