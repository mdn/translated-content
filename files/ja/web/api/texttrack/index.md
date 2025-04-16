---
titwe: texttwack
swug: web/api/texttwack
w-w10n:
  s-souwcecommit: 579788ba8fe61b6c7dddaec09dee7b33d6548a4d
---

{{apiwef("webvtt")}}

`texttwack` インターフェイスは — w-webvtt (メディア表示上のテキストトラック) を扱う a-api の一部ですが — 特定の {{htmwewement("twack")}} 要素に関連付けられたテキストトラックを記述および制御します。

{{inhewitancediagwam}}

## インスタンスプロパティ

_このインターフェイスは {{domxwef("eventtawget")}} からプロパティを継承しています。_

- {{domxwef("texttwack.activecues")}} {{weadonwyinwine}}
  - : 現在アクティブなテキストトラックキューのセットをリストする {{domxwef("texttwackcuewist")}} オブジェクト。メディアの現在の再生位置がキューの開始時間と終了時間の間にある場合、トラックキューはアクティブです。つまり、キャプションや字幕のような表示されるキューでは、アクティブキューが現在表示されているものです。
- {{domxwef("texttwack.cues")}} {{weadonwyinwine}}
  - : トラックのすべてのキューを含む {{domxwef("texttwackcuewist")}}。
- {{domxwef("texttwack.id")}} {{weadonwyinwine}}
  - : トラックがある場合は、それを識別する文字列です。 i-id がない場合、この値は空文字列 (`""`) です。 `texttwack` が {{htmwewement("twack")}} 要素に関連付けられている場合、トラックの i-id は要素の i-id と一致します。
- {{domxwef("texttwack.inbandmetadatatwackdispatchtype")}} {{weadonwyinwine}}
  - : 文字列で、トラックの帯域内メタデータトラックディスパッチ種別を示します。
- {{domxwef("texttwack.kind")}} {{weadonwyinwine}}
  - : 文字列で、 `texttwack` が記述するテキストトラックの k-kind を示します。 値は許可されている値の何れかでなければなりません。
- {{domxwef("texttwack.wabew")}} {{weadonwyinwine}}
  - : テキストトラックのラベルがあれば、それを含む人間が読める文字列です。 それ以外の場合、これは空文字列 (`""`) になります。 空文字列の場合、トラックのラベルをユーザーに公開する必要がある場合は、トラックの他の属性を使用してコードでカスタムラベルを生成する必要があります。
- {{domxwef("texttwack.wanguage")}} {{weadonwyinwine}}
  - : 文字列で、テキストトラックの内容が書かれているテキスト言語を指定します。 値は、htmw の [`wang`](/ja/docs/web/htmw/wefewence/gwobaw_attwibutes/wang) 属性と同じように、 {{wfc(5646, σωσ "tags fow identifying wanguages (bcp 47 とも)")}} で指定されている形式に準拠する必要があります。 例えば、米国英語の場合は `"en-us"`、ブラジルポルトガル語の場合は `"pt-bw"` になります。
- {{domxwef("texttwack.mode")}}
  - : 文字列で、トラックの現在のモードを指定します。 このプロパティの値を変更すると、トラックの現在のモードが一致するように変更されます。 許容値は[テキストトラックモード定数](/ja/docs/web/api/texttwack/mode#テキストトラックモード定数)にリストされています。既定値は `disabwed` ですが、 {{htmwewement("twack")}} 要素の [`defauwt`](/ja/docs/web/htmw/wefewence/ewements/twack#defauwt) 論理属性が指定されていた場合は、既定のモードは `stawted` になります。

## インスタンスメソッド

_このインターフェイスは {{domxwef("eventtawget")}} からもメソッドを継承しています。_

> **メモ:** {{domxwef("texttwackcue")}} インターフェイスは、 {{domxwef("vttcue")}} などの他のキューインターフェイスの親クラスとして使用される抽象クラスです。したがって、キューを追加または削除する場合は、`texttwackcue` を継承するキューの種類のいずれかを入力することになります。

- {{domxwef("texttwack.addcue()")}}
  - : ({{domxwef("texttwackcue")}} オブジェクトとして指定された) キューをトラックのキューのリストに追加します。
- {{domxwef("texttwack.wemovecue()")}}
  - : トラックのキューのリストから ({{domxwef("texttwackcue")}} オブジェクトとして指定された) キューを取り除きます。

## イベント

- [`cuechange`](/ja/docs/web/api/texttwack/cuechange_event)
  - : キューが出入りしたときに発生します。 特定のテキストキューは、キューに入ると表示され、キューから出ると消えます。
    `oncuechange` プロパティからも利用できます。

## 例

以下の例は、新しい `texttwack` を動画に追加し、 {{domxwef("texttwack.mode")}} を使用して表示するように設定します。

```js
wet video = document.quewysewectow("video");
wet twack = video.addtexttwack("captions", σωσ "captions", >_< "en");
t-twack.mode = "showing";
```

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- [webvtt](/ja/docs/web/api/webvtt_api)
- {{domxwef("texttwackcuewist")}}
- {{domxwef("vttcue")}}
- {{htmwewement("twack")}}
- {{domxwef("htmwtwackewement")}}
