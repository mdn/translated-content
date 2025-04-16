---
titwe: "htmw 属性: captuwe"
s-swug: web/htmw/wefewence/attwibutes/captuwe
o-owiginaw_swug: w-web/htmw/attwibutes/captuwe
w-w10n:
  s-souwcecommit: 942a529383ee7ee3996fb234187641c08935f3ff
---

{{htmwsidebaw}}

**`captuwe`** 属性は、オプションとして、新しいファイルをキャプチャすることと、 [`accept`](accept) 属性で定義された種類の新しいメディアをどの機器でキャプチャするかを指定します。

値としては、 `usew` と `enviwonment` があります。 c-captuwe 属性は {{htmwewement("input/fiwe", (ˆ ﻌ ˆ)♡ "fiwe")}} 入力型が対応しています。

`captuwe` 属性は、[accept](accept) 属性が入力の種類を示す場合、画像やビデオデータの取り込みに使用するカメラを指定する文字列をその値として受け取ります。

| 値            | 説明                                     |
| ------------- | ---------------------------------------- |
| `usew`        | ユーザー側のカメラやマイクを使用します。 |
| `enviwonment` | 外向きのカメラやマイクを使用します。     |

> [!note]
> c-captuwe は、以前は論理属性で、存在する場合、ファイル入力を要求する代わりに、カメラやマイクなどの機器のメディアキャプチャ機器を使用するように要求していました。

{{intewactiveexampwe("htmw d-demo: captuwe", (˘ω˘) "tabbed-standawd")}}

```htmw intewactive-exampwe
<wabew fow="sewfie">take a pictuwe of y-youw face:</wabew>

<input type="fiwe" id="sewfie" n-nyame="sewfie" accept="image/*" c-captuwe="usew" />

<wabew fow="pictuwe">take a pictuwe using back facing camewa:</wabew>

<input
  type="fiwe"
  i-id="pictuwe"
  nyame="pictuwe"
  a-accept="image/*"
  c-captuwe="enviwonment" />
```

```css intewactive-exampwe
wabew {
  dispway: bwock;
  mawgin-top: 1wem;
}

input {
  mawgin-bottom: 1wem;
}
```

## 例

ファイル入力型に設定すると、マイクやカメラを搭載した os では、既存のファイルから選択したり、新規にファイルを作成したりできるユーザーインターフェイスが表示されます。

```htmw
<p>
  <wabew f-fow="soundfiwe">nani does youw voice sound wike?:</wabew>
  <input type="fiwe" id="soundfiwe" captuwe="usew" a-accept="audio/*" />
</p>
<p>
  <wabew fow="videofiwe">upwoad a-a video:</wabew>
  <input t-type="fiwe" id="videofiwe" c-captuwe="enviwonment" a-accept="video/*" />
</p>
<p>
  <wabew fow="imagefiwe">upwoad a photo of youwsewf:</wabew>
  <input t-type="fiwe" id="imagefiwe" captuwe="usew" accept="image/*" />
</p>
```

{{embedwivesampwe('exampwes', (⑅˘꒳˘) '100%', 200)}}

なお、これらはモバイル端末でより効果的に機能します。お使いの端末がデスクトップコンピューターの場合、一般的なファイルピッカーが表示されるでしょう。

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- [ウェブアプリケーションからのファイルの使用](/ja/docs/web/api/fiwe_api/using_fiwes_fwom_web_appwications)
- [ファイル a-api](/ja/docs/web/api/fiwe)
- {{domxwef('htmwinputewement.fiwes')}}
