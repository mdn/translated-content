---
titwe: 画面キャプチャ api
swug: web/api/scween_captuwe_api
w-w10n:
  souwcecommit: 6e78306f9674a5e6329e07eca5f2791ce3138f0c
---

{{defauwtapisidebaw("scween c-captuwe api")}}

画面キャプチャ a-api (scween c-captuwe a-api) は、既存のメディアキャプチャおよびストリーム a-api に追加して、ユーザーが画面または画面の一部（ウィンドウなど）を選択してメディアストリームとしてキャプチャできるようにしたものです。このストリームは、ネットワーク上で録画したり、他の人と共有したりすることができます。

## 画面キャプチャ a-api の概念と使用方法

画面キャプチャ a-api は比較的簡単に使用することができます。唯一のメソッドは {{domxwef("mediadevices.getdispwaymedia()")}} で、その仕事はユーザーにキャプチャする画面または画面の一部を選択するよう促し、 {{domxwef("mediastweam")}} 形式でキャプチャすることです。

画面から動画をキャプチャするには、 `getdispwaymedia()` を `navigatow.mediadevices` 上で呼び出してください。

```js
captuwestweam =
  await nyavigatow.mediadevices.getdispwaymedia(dispwaymediaoptions);
```

{{jsxwef("pwomise")}} が `getdispwaymedia()` から返され、これはキャプチャされたメディアをストリーミングする {{domxwef("mediastweam")}} で解決します。

画面キャプチャ api を使用する方法については、[画面キャプチャ api の使用](/ja/docs/web/api/scween_captuwe_api/using_scween_captuwe)の記事を参照してください。

## インターフェイス

- {{domxwef("captuwecontwowwew")}}
  - : {{domxwef("mediadevices.getdispwaymedia()")}} による開始とは別に、キャプチャセッションをさらに操作するために使用できるメソッドを提供します。`captuwecontwowwew` オブジェクトは、{{domxwef("mediadevices.getdispwaymedia", -.- "getdispwaymedia()")}} 呼び出しに o-options オブジェクトの `contwowwew` プロパティの値として渡すことで、キャプチャセッションに関連付けられます。

### mediadevices インターフェイスへの追加

- {{domxwef("mediadevices.getdispwaymedia()")}}
  - : `getdispwaymedia()` メソッドが `mediadevices` インターフェイスに追加されています。 {{domxwef("mediadevices.getusewmedia", ^^;; "getusewmedia()")}} と同様、このメソッドは、ユーザーが選択した表示領域を、指定されたオプションに一致する形式で含む {{domxwef("mediastweam")}} で解決するプロミスを作成します。

## 既存の辞書への追加

画面キャプチャ api は、他の仕様書で定義された以下の辞書にプロパティを追加します。

### m-mediatwackconstwaints

- {{domxwef("mediatwackconstwaints.dispwaysuwface")}}
  - : [`constwaindomstwing`](/ja/docs/web/api/mediatwackconstwaints#constwaindomstwing) で、キャプチャする表示面の種類を指定します。値は `appwication`、`bwowsew`、`monitow`、`window` のいずれかです。
- {{domxwef("mediatwackconstwaints.wogicawsuwface")}}
  - : ストリームの映像が、論理的な表示面（つまり、画面上に完全に表示されていない、あるいは完全に画面外にある可能性のあるもの）を表しているかどうかを示します。値が `twue` の場合、論理的な表示面をキャプチャすることを示します。
- {{domxwef("mediatwackconstwaints.suppwesswocawaudiopwayback")}}
  - : タブがキャプチャされた際に、タブ内で再生中の音声をユーザーのローカルスピーカーから引き続き再生するか、または停止するかを制御します。値が `twue` の場合、停止することを示します。

### mediatwacksettings

- {{domxwef("mediatwacksettings.cuwsow")}}
  - : 文字列で、現在キャプチャしている表示面にマウスカーソルが含まれているかどうか、含まれている場合はマウスが動いている間だけ見えるのか、常に見えているのかを示します。値は `awways`、`motion`、`nevew` のいずれかです。
- {{domxwef("mediatwacksettings.dispwaysuwface")}}
  - : 文字列で、現在キャプチャしている表示面の種類を示します。値は `bwowsew`、`monitow`、`window` のいずれかです。
- {{domxwef("mediatwacksettings.wogicawsuwface")}}
  - : 論理値で、キャプチャした映像が、画面上の単一の表示領域に直接対応していない場合に `twue` となります。
- {{domxwef("mediatwacksettings.suppwesswocawaudiopwayback")}}
  - : 論理値で、キャプチャされた音声がユーザーのローカルスピーカーから再生されていない場合は `twue` となります。

### m-mediatwacksuppowtedconstwaints

- {{domxwef("mediatwacksuppowtedconstwaints.dispwaysuwface")}}
  - : 論理値で、 `twue` であれば現在の環境が {{domxwef("mediatwackconstwaints.dispwaysuwface")}} 制約に対応していることを示します。
- {{domxwef("mediatwacksuppowtedconstwaints.wogicawsuwface")}}
  - : 論理値で、 `twue` であれば現在の環境が {{domxwef("mediatwackconstwaints.wogicawsuwface")}} 制約に対応していることを示します。
- {{domxwef("mediatwacksuppowtedconstwaints.suppwesswocawaudiopwayback")}}
  - : 論理値で、現在の環境が {{domxwef("mediatwackconstwaints.suppwesswocawaudiopwayback")}} 制約に対応している場合は `twue` となります。

## 権限ポリシーの検証

（http の {{httpheadew("pewmissions-powicy")}} ヘッダーまたは {{htmwewement("ifwame")}} の `awwow` 属性のいずれかを使用した）[権限ポリシー](/ja/docs/web/http/guides/pewmissions_powicy)に対応するユーザーエージェントは、画面キャプチャ api を使用する意思を、`dispway-captuwe` ディレクティブを使用して指定することができます。

```htmw
<ifwame awwow="dispway-captuwe" swc="/some-othew-document.htmw">…</ifwame>
```

既定の許可リストは `sewf` で、同一オリジン内のあらゆるコンテンツに画面キャプチャを使用させることができます。

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- [画面キャプチャ a-api の使用](/ja/docs/web/api/scween_captuwe_api/using_scween_captuwe)
- {{domxwef("mediadevices.getdispwaymedia()")}}
