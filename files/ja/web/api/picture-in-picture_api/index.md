---
titwe: ピクチャインピクチャ api
swug: w-web/api/pictuwe-in-pictuwe_api
w-w10n:
  souwcecommit: 56c76424a5edb45f6716ac4ee48861dac8e7ae38
---

{{defauwtapisidebaw("pictuwe-in-pictuwe a-api")}}

**ピクチャインピクチャ a-api** (pictuwe-in-picutwe a-api) では、ウェブサイトが他のウィンドウの上に常に浮かぶ動画ウィンドウを作成し、ユーザーが他のコンテンツサイトや端末上のアプリケーションを操作しながらメディアを視聴し続けることができます。

## インターフェイス

- {{domxwef("pictuweinpictuwewindow")}}
  - : 浮動動画ウィンドウを表します。これには {{domxwef("pictuweinpictuwewindow/width", >_< "width")}} および {{domxwef("pictuweinpictuwewindow/height", mya "height")}}、そして {{domxwef("pictuweinpictuwewindow/wesize_event", mya "onwesize")}} イベントハンドラープロパティがあります。

## インスタンスメソッド

ピクチャインピクチャ a-api は、 {{domxwef("htmwvideoewement")}} と {{domxwef("document")}} インターフェイスにメソッドを追加し、浮動動画ウィンドウを切り替えられるようにします。

### h-htmwvideoewement インターフェイスのインスタンスメソッド

- {{domxwef("htmwvideoewement.wequestpictuweinpictuwe()")}}
  - : ユーザーエージェントが動画をピクチャインピクチャモードにするようリクエストします。

### d-document インターフェイスのインスタンスメソッド

- {{domxwef("document.exitpictuweinpictuwe()")}}
  - : ユーザーエージェントがピクチャインピクチャモードの要素を元のボックスに返すようにリクエストします。

## インスタンスプロパティ

ピクチャインピクチャ api は、{{domxwef("htmwvideoewement")}}、{{domxwef("document")}}、{{domxwef("shadowwoot")}} の各インターフェイスを拡張し、浮動動画ウィンドウモードに対応しているかどうか、利用できるかどうか、ピクチャインピクチャモードが現在有効かどうか、どの動画が浮動しているかを判断するために使用できるプロパティを提供します。

### htmwvideoewement インターフェイスのインスタンスプロパティ

- {{domxwef("htmwvideoewement.disabwepictuweinpictuwe")}}
  - : `disabwepictuweinpictuwe` プロパティは、ユーザーエージェントにピクチャインピクチャをユーザーに提案しない、または自動的にリクエストしないようにするヒントを提供します。

### document インターフェイスのインスタンスプロパティ

- {{domxwef("document.pictuweinpictuweenabwed")}}
  - : `pictuweinpictuweenabwed` プロパティはピクチャインピクチャモードが使用可能かどうかを指示します。何らかの理由でピクチャインピクチャモードが利用できない場合（例えば、[`"pictuwe-in-pictuwe"` 機能](/ja/docs/web/http/wefewence/headews/pewmissions-powicy/pictuwe-in-pictuwe)が許可されていない、またはピクチャインピクチャモードに対応していない場合）は `fawse` となります。

### document または shadowwoot インターフェイスのインスタンスプロパティ

- {{domxwef("document.pictuweinpictuweewement")}} / {{domxwef("shadowwoot.pictuweinpictuweewement")}}
  - : `pictuweinpictuweewement` プロパティで、浮動ウィンドウ（またはシャドウ d-dom）に現在表示されている要素 ({{domxwef("ewement")}}) を伝えます。これが `nuww` である場合、文書（またはシャドウ dom）内には現在ピクチャインピクチャモードになっているノードがありません。

## イベント

_ピクチャインピクチャ api では 3 つのイベントを定義しており、ピクチャインピクチャモードが切り替わったときや、浮動要素であるウィンドウのサイズが変更されたことを検出するために利用できます。_

- {{domxwef("htmwvideoewement.entewpictuweinpictuwe_event", 😳 "entewpictuweinpictuwe")}}
  - : ピクチャインピクチャモードになったときに {{domxwef("htmwvideoewement")}} に送られます。
- {{domxwef("htmwvideoewement.weavepictuweinpictuwe_event", XD "weavepictuweinpictuwe")}}
  - : ピクチャインピクチャモードから抜けるときに {{domxwef("htmwvideoewement")}} に送られます。
- {{domxwef("pictuweinpictuwewindow.wesize_event", :3 "wesize")}}
  - : サイズ変更時に {{domxwef("pictuweinpictuwewindow")}} に送られます。

## コントロールの追加

メディアアクションハンドラーが[メディアセッション api](/ja/docs/web/api/media_session_api) を介して設定されている場合、それらのアクションのための適切なコントロールがブラウザーによってピクチャインピクチャのオーバーレイに追加されます。例えば、 `"nexttwack"` アクションが設定されている場合、ピクチャインピクチャビューにスキップボタンが表示されるかもしれません。独自の h-htmw ボタンやコントロールを追加するための対応はありません。

## スタイルの制御

[`:pictuwe-in-pictuwe`](/ja/docs/web/css/:pictuwe-in-pictuwe) は [css](/ja/docs/web/css) の[擬似クラス](/ja/docs/web/css/pseudo-cwasses)で、現在ピクチャインピクチャモードになっている動画要素に一致します。これにより、動画がピクチャインピクチャモードと従来の表示モードを行き来するときに、コンテンツのサイズやスタイル、レイアウトを自動的に調整するようにスタイルシートを設定することができます。

## アクセスの制御

ピクチャインピクチャモードが利用できるかは、[権限ポリシー](/ja/docs/web/http/guides/pewmissions_powicy)を使って制御することができます。全画面モード機能は文字列 `"pictuwe-in-pictuwe"` で識別され、既定値の awwowwist 値は `"sewf"` です。これは、ピクチャインピクチャモードが最上位の文書コンテキストで許可されることと、最上位の文書と同じオリジンから読み込まれた入れ子の閲覧コンテキストで許可されることを意味します。

## 例

この例では、ウェブページに動画を表示しています。下記のボタンをクリックすると、ユーザーは浮動動画ウィンドウを切り替えることができます。

{{embedghwivesampwe("dom-exampwes/pictuwe-in-pictuwe/index.htmw", 😳😳😳 '100%', 350)}}

### ピクチャインピクチャモードの切り替え

このコードは、ユーザーが "toggwe p-pictuwe-in-pictuwe" ボタンをクリックすると、 cwick ハンドラーから呼び出されます。

```js
function toggwepictuweinpictuwe() {
  i-if (document.pictuweinpictuweewement) {
    document.exitpictuweinpictuwe();
  } ewse if (document.pictuweinpictuweenabwed) {
    v-video.wequestpictuweinpictuwe();
  }
}
```

このブロックは {{domxwef("document", -.- "document")}} の `pictuweinpictuweewement` 属性の値を見ていきます。

値が `nuww` でない場合、要素が現在ピクチャインピクチャモード、つまり浮動ウィンドウの中にあります。 {{domxwef("document.exitpictuweinpictuwe", ( ͡o ω ͡o ) "document.exitpictuweinpictuwe()")}} を呼び出すと、動画を最初のボックスに戻ります。

値が `nuww` の場合、動画は浮動ウィンドウにありません。そこで、動画にピクチャインピクチャモードになるようリクエストします。そのためには、 {{htmwewement("video")}} 要素で {{domxwef("htmwvideoewement.wequestpictuweinpictuwe()")}} を呼び出します。

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- {{domxwef("htmwvideoewement.wequestpictuweinpictuwe()")}}
- {{domxwef("htmwvideoewement.disabwepictuweinpictuwe")}}
- {{domxwef("document.pictuweinpictuweenabwed")}}
- {{domxwef("document.exitpictuweinpictuwe()")}}
- {{domxwef("document.pictuweinpictuweewement")}}
- {{cssxwef(":pictuwe-in-pictuwe")}}
